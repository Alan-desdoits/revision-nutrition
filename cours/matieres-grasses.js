/* ==========================================================================
   Cours : Les matières grasses
   Source : documents/finis/Les matières grasses.docx
   ========================================================================== */
(function () {
  const { $, fmt, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Huiles : composition (tableau du cours) ---------------- */
  // [palmitique, stéarique, oléique, linoléique (ω6), alpha-linolénique (ω3)] en %
  const OILS = {
    "Olive vierge": [10, 3, 70, 6, 0.6], "Colza": [4, 1.5, 54, 18, 8.5], "Tournesol": [6, 3.5, 26, 57, 0.1], "Noix": [7, 3, 16, 54, 11],
    "Soja": [10, 4, 22, 51.5, 7], "Arachide": [9, 3, 52, 25, 0.2], "Argan": [12, 3, 45, 33, 0.1], "Germe de maïs": [10, 1.7, 23, 53, 0.1],
    "Noisette": [5.5, 2.5, 76, 12, 0.5], "Pépins de raisin": [7, 4, 18, 66, 0.3], "Sésame": [8, 5.5, 38.5, 40, 0.3]
  };
  const PARTS = [["AGS", "bad-f", d => d[0] + d[1]], ["Oléique (AGMI)", "lip", d => d[2]], ["Linoléique (ω6)", "glu", d => d[3]], ["α-linolénique (ω3)", "eau", d => d[4]]];
  const names = Object.keys(OILS);
  let oil = "Colza";
  const setOil = seg($("#oil-seg"), names.map(n => ({ id: n, label: n })), oil, n => {
    oil = n;
    const d = OILS[n], vals = PARTS.map(p => p[2](d)), sum = vals.reduce((a, b) => a + b, 0);
    $("#oil-out").innerHTML = `<h3>${n}</h3>
      <div class="stack3 hideable">${PARTS.map((p, i) => `<div class="${p[1]}" style="flex:0 0 ${(vals[i] / sum * 100).toFixed(1)}%">${vals[i] >= 6 ? fmt(vals[i]) + " %" : ""}</div>`).join("")}</div>
      <div class="stack-leg">${PARTS.map((p, i) => `<span>${p[0]} <b>${fmt(vals[i])} %</b></span>`).join("")}</div>
      <p>${d[4] >= 7 ? "Riche en <b>oméga-3</b> : à réserver à l’assaisonnement." : d[2] >= 45 ? "Riche en <b>acide oléique</b> : supporte mieux la chaleur." : d[3] >= 45 ? "Très riche en <b>oméga-6</b> : à équilibrer avec des huiles riches en oméga-3." : ""}</p>`;
  });

  let rank = "3";
  seg($("#rank-seg"), PARTS.map((p, i) => ({ id: String(i), label: p[0] })), rank, i => {
    rank = i;
    const p = PARTS[+i];
    const rows = names.map(n => ({ id: n, label: n, v: p[2](OILS[n]), cls: p[1] })).sort((a, b) => b.v - a.v);
    hbars($("#rank-bars"), rows, { unit: "%" });
  });
  $("#rank-bars").addEventListener("click", e => { const r = e.target.closest(".hbar"); if (r && r.dataset.id) { setOil(r.dataset.id); $("#oil-out").scrollIntoView({ block: "nearest", behavior: "smooth" }); } });

  hbars($("#olive-bars"), [
    { label: "Vierge extra", sub: "extraction mécanique à froid", v: 0.8, cls: "good-f", text: "≤ 0,8 %" },
    { label: "Vierge fine", v: 2, cls: "lip", text: "≤ 2 %" },
    { label: "Huile d’olive", v: 1, cls: "lip", text: "≤ 1 %" },
    { label: "Olive raffinée", v: 0.3, cls: "lip", text: "≤ 0,3 %" },
    { label: "Grignons d’olive", v: 1, cls: "lip", text: "≤ 1 %" },
    { label: "Grignons raffinée", v: 0.3, cls: "lip", text: "≤ 0,3 %" }
  ], { max: 2 });

  /* ---------------- Crèmes ---------------- */
  const C = (name, d) => ({ name, rows: [["Ce qu’il faut savoir", d]] });
  explorer($("#cr-chips"), $("#cr-panel"), [{ cls: "lip", label: "Crèmes", items: [
    C("Crue", "Juste après l’écrémage, aucun traitement thermique. Liquide, très fragile, 30 à 40 % de MG. Mention « crue » obligatoire."),
    C("Pasteurisée liquide", "Ni ensemencée ni maturée : goût doux. La « crème fleurette » des professionnels, idéale à fouetter."),
    C("Pasteurisée épaisse", "Maturée : refroidie puis ensemencée de ferments lactiques. Épaisse, acidulée, goût prononcé."),
    C("Double", "Synonyme d’« épaisse », pas de « très riche »."),
    C("Stérilisée", "115 °C pendant 15 à 20 min : reste liquide, léger goût de cuit."),
    C("UHT", "150 °C pendant 2 s, conditionnement aseptique : bonne conservation des qualités."),
    C("Légère ou allégée", "12 à 30 % de MG (≈ 15 %), pasteurisée ou stérilisée."),
    C("Chantilly", "Crème fouettée d’au moins 30 % de MG, saccharose et arôme naturel autorisés."),
    C("Fouettée", "Au moins 75 % de crème, additifs 15 % max. Foisonnement de 2 à 3."),
    C("AOC Isigny, Bresse", "Crèmes fraîches épaisses pasteurisées, les seules à bénéficier d’une AOC.")
  ] }]);

  /* ---------------- Graisses végétales solides ---------------- */
  hbars($("#palm-bars"), [
    { label: "Palme", v: 50, cls: "bad-f" }, { label: "Palmiste", v: 80, cls: "bad-f" }, { label: "Coprah (coco)", v: 80, cls: "bad-f" },
    { label: "Beurre (pour comparer)", sub: "onglet Crème et beurre", v: 70, cls: "lip" }
  ], { max: 100, unit: "% d’AGS" });

  /* ---------------- Sauces lipidiques ---------------- */
  // [nom, lipides g/100 g, kcal/100 g, kcal par portion]
  const SAUCES = [
    ["Vinaigrette maison", 70, 630, 100], ["Vinaigrette maison allégée", 35, 320, 50], ["Vinaigrette industrielle", 60, 550, 80],
    ["Vinaigrette industrielle légère", 25, 230, 50], ["Vinaigrette extra-légère", 15, 135, 25], ["Mayonnaise maison", 90, 820, 150],
    ["Mayonnaise industrielle", 75, 700, 100], ["Mayonnaise allégée", 30, 270, 40], ["Mayonnaise extra-légère", 25, 230, 50],
    ["Sauce béarnaise", 50, 450, 70], ["Sauce tartare", 55, 500, 75], ["Sauce aïoli", 40, 360, 50], ["Sauce bourguignonne", 40, 360, 50],
    ["Sauce pesto", 35, 320, 50], ["Sauce hollandaise", 20, 180, 25], ["Sauce américaine", 5.5, 50, null]
  ];
  const SK = [["Lipides /100 g", 1, "g"], ["kcal /100 g", 2, "kcal"], ["kcal par portion", 3, "kcal"]];
  seg($("#sauce-seg"), SK.map((k, i) => ({ id: String(i), label: k[0] })), "0", i => {
    const [, col, u] = SK[+i];
    hbars($("#sauce-bars"), SAUCES.filter(s => s[col] != null).map(s => ({ label: s[0], v: s[col], cls: "lip" })).sort((a, b) => b.v - a.v), { unit: u });
  });

  /* ---------------- Margarines ---------------- */
  // [lipides %, AGS %, AGMI %, AGPI %, kcal, vitamine E mg, linoléique g, α-linolénique g, kJ]
  const MARG = { "80 % tournesol": [80, 16, 17, 46, 725, 60, 31, null, 3040], "60 % allégée": [60, 17, 20, 17, 545, 18, null, 1.3, 2280], "60 % oméga 3 et 6": [55, 16, 26, 16, 500, 27, 11, 3, 2090], "Légère à tartiner": [40, 14, 14, 8, 365, 5, 5.5, 1.2, 1520], "Composée allégée": [60, 20, 18, 15, 545, 10, 13, 1.4, 2280] };
  seg($("#marg-seg"), Object.keys(MARG).map(n => ({ id: n, label: n })), "80 % tournesol", n => {
    const [l, s, m, p, k, e, lin, ala, kj] = MARG[n];
    const extra = `<div class="stack-leg"><span>Vitamine E <b>${fmt(e)} mg</b></span><span>Linoléique <b>${lin == null ? "–" : fmt(lin) + " g"}</b></span><span>α-linolénique <b>${ala == null ? "–" : fmt(ala) + " g"}</b></span><span>Énergie <b>${fmt(kj)} kJ</b></span></div>`;
    setTimeout(() => $("#marg-out").insertAdjacentHTML("beforeend", extra));
    $("#marg-out").innerHTML = `<div class="g2"><div><span class="tag">Lipides</span><div class="big lip">${l} <small>%</small></div></div><div><span class="tag">Énergie</span><div class="big">${k} <small>kcal/100 g</small></div></div></div>
      <div class="hbars" id="marg-bars"></div><p>Les valeurs varient d’une marque à l’autre.</p>`;
    hbars($("#marg-bars"), [{ label: "AGS", v: s, cls: "bad-f" }, { label: "AGMI", v: m, cls: "lip" }, { label: "AGPI", v: p, cls: "eau" }], { max: 50, unit: "%" });
  });
})();
