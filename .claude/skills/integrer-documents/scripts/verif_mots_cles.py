"""Vérifie que chaque paragraphe du document a au moins un mot-clé sur la page.

Usage : python -I -X utf8 verif_mots_cles.py <texte.txt> <page.html> [<page.js> ...]
Pour chaque ligne d'au moins 6 mots, prend ses 3 mots les plus longs (8 lettres et plus)
et cherche l'un d'eux dans la page (sans accents ni balises). Affiche les lignes sans
correspondance : à relire une par une (titre ou paraphrase = acceptable).
"""
import re
import sys
import unicodedata


def norm(s):
    s = s.lower().replace("’", "'").replace("œ", "oe")
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def main(src, *pages):
    page = norm(" ".join(open(p, encoding="utf-8").read() for p in pages))
    page = re.sub(r"<[^>]+>", " ", page)
    miss = 0
    for line in open(src, encoding="utf-8"):
        line = re.sub(r"<[^>]+>|\[/?TABLE\]|\[IMG[^\]]*\]", " ", line).strip()
        words = [w for w in re.findall(r"[\wÀ-ÿœ]+", line) if len(w) >= 8]
        if len(line.split()) < 6 or not words:
            continue
        top = sorted(set(words), key=len, reverse=True)[:3]
        if not any(norm(w) in page for w in top):
            miss += 1
            print("MISS:", top, "|", line[:110])
    print("lignes sans mot-clé :", miss)


if __name__ == "__main__":
    main(*sys.argv[1:])
