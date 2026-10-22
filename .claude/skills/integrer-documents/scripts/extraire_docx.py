"""Extrait le texte et les images d'un .docx, dans l'ordre du document.

Usage : python -I -X utf8 extraire_docx.py <fichier.docx> <dossier_sortie>
Écrit <dossier_sortie>/texte.txt et copie les images dans <dossier_sortie>/media/.
Le .docx est lu comme une archive zip : rien n'est exécuté depuis son contenu.
"""
import os
import sys
import zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"


def main(docx, out):
    os.makedirs(os.path.join(out, "media"), exist_ok=True)
    z = zipfile.ZipFile(docx)
    rels = {r.get("Id"): r.get("Target") for r in ET.fromstring(z.read("word/_rels/document.xml.rels"))}
    body = ET.fromstring(z.read("word/document.xml")).find(W + "body")
    seen = []

    def para(p):
        parts = []
        for el in p.iter():
            if el.tag == W + "t":
                parts.append(el.text or "")
            elif el.tag == W + "tab":
                parts.append("\t")
            elif el.tag == W + "br":
                parts.append("\n")
            elif el.tag.endswith("}blip"):
                target = rels.get(el.get(R + "embed"), "")
                name = os.path.basename(target)
                if target and name not in seen:
                    seen.append(name)
                    with open(os.path.join(out, "media", name), "wb") as f:
                        f.write(z.read("word/" + target))
                parts.append(f"[IMG {name}]")
        style = p.find(W + "pPr/" + W + "pStyle")
        pre = f"<{style.get(W + 'val')}> " if style is not None else ""
        if p.find(W + "pPr/" + W + "numPr") is not None:
            pre += "- "
        return pre + "".join(parts)

    lines = []
    for el in body:
        if el.tag == W + "p":
            t = para(el)
            if t.strip():
                lines.append(t)
        elif el.tag == W + "tbl":
            lines.append("[TABLE]")
            for tr in el.findall(W + "tr"):
                cells = [" / ".join(t for t in (para(p) for p in tc.findall(".//" + W + "p")) if t.strip()) for tc in tr.findall(W + "tc")]
                lines.append("| " + " | ".join(cells) + " |")
            lines.append("[/TABLE]")

    with open(os.path.join(out, "texte.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"{len(lines)} lignes, {len(seen)} images (ordre : {', '.join(seen)}) -> {out}")


if __name__ == "__main__":
    main(*sys.argv[1:3])
