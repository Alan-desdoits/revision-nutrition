// À exécuter depuis http://localhost:8123/index.html (outil JavaScript du navigateur).
// Remplacer PAGES par les pages créées ou modifiées pendant la passe.
// Pour chaque onglet : pousse chaque curseur au minimum puis au maximum, clique chaque
// bouton (choix segmentés, puces, compteurs, révélations) et les zones cliquables des
// schémas, puis relève les erreurs JS et les débordements horizontaux.
const PAGES = ["cours/feculents.html"];
const out = [];
for (const w of [390, 1440]) for (const p of PAGES) {
  const f = document.createElement("iframe");
  f.style.cssText = `position:absolute;left:-5000px;top:0;width:${w}px;height:900px;border:0`;
  document.body.appendChild(f);
  f.src = p + "?t=" + Date.now();
  await new Promise(r => f.onload = r);
  const errs = [];
  f.contentWindow.addEventListener("error", e => errs.push(e.message));
  await new Promise(r => setTimeout(r, 200));
  const d = f.contentDocument, win = f.contentWindow;
  const secs = [...d.querySelectorAll("main.fiche > section")];
  const over = [];
  let clicks = 0;
  for (const s of secs) {
    secs.forEach(x => x.hidden = x !== s);
    for (const r of s.querySelectorAll("input[type=range]"))
      for (const v of [r.min, r.max, r.value]) { r.value = v; r.dispatchEvent(new Event("input", { bubbles: true })); }
    const btns = () => [...s.querySelectorAll(".seg button, .chip, .stepper button, [data-reveal], .pyr button, .hot")];
    const n = btns().length;
    for (let i = 0; i < n; i++) {
      const b = btns()[i];
      if (!b) continue;
      b.click(); clicks++;
      await new Promise(r => setTimeout(r, 5));
      if (d.documentElement.scrollWidth > win.innerWidth) over.push(s.id + ":" + b.textContent.trim().slice(0, 30));
    }
    for (const g of s.querySelectorAll("svg [data-k], svg [data-c], .hbar[data-id]")) { g.dispatchEvent(new MouseEvent("click", { bubbles: true })); clicks++; }
    if (d.documentElement.scrollWidth > win.innerWidth) over.push(s.id + ":fin");
  }
  out.push({ w, p, clicks, over: [...new Set(over)].slice(0, 12), errs });
  f.remove();
}
JSON.stringify(out, null, 1);
