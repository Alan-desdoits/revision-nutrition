// À exécuter depuis http://localhost:8123/index.html (outil JavaScript du navigateur).
// Charge chaque COURS[i].page dans une iframe hors écran à 1440, 820 et 390 px,
// affiche chaque onglet et relève : débordement horizontal, erreurs JS,
// et (à 1440 px) les chiffres visibles hors .num et [data-nohide].
const out = [];
for (const w of [1440, 820, 390]) {
  for (const p of COURS.filter(c => c.statut === "disponible").map(c => c.page)) {
    const f = document.createElement("iframe");
    f.style.cssText = `position:absolute;left:-5000px;top:0;width:${w}px;height:900px;border:0`;
    document.body.appendChild(f);
    f.src = p + "?t=" + Date.now();
    await new Promise(r => f.onload = r);
    const errs = [];
    f.contentWindow.addEventListener("error", e => errs.push(e.message));
    await new Promise(r => setTimeout(r, 250));
    const d = f.contentDocument, win = f.contentWindow;
    const secs = [...d.querySelectorAll("main.fiche > section")];
    const over = [], vis = [];
    for (const s of secs) {
      secs.forEach(x => x.hidden = x !== s);
      await new Promise(r => setTimeout(r, 30));
      if (d.documentElement.scrollWidth > win.innerWidth) over.push(s.id + ":" + d.documentElement.scrollWidth);
      if (w === 1440) {
        const tw = d.createTreeWalker(s, NodeFilter.SHOW_TEXT);
        while (tw.nextNode()) {
          const n = tw.currentNode;
          if (/\d/.test(n.nodeValue) && !n.parentElement.closest(".num,[data-nohide],svg,script,style,.tabs,.pager,input,label.quiz-toggle"))
            vis.push(s.id + ": " + n.nodeValue.trim().slice(0, 60));
        }
      }
    }
    if (over.length || errs.length || vis.length) out.push({ w, p, over, errs, vis });
    f.remove();
  }
}
JSON.stringify(out, null, 1);
