/* ==========================================================================
   Cours : Les produits laitiers
   Source : documents/finis/Les produits laitiers.docx
   ========================================================================== */
(function () {
  const { $, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Laits : matière grasse ---------------- */
  const MG = {
    entier: ["Lait entier", "≈ 3,5 %", "Garde toutes les vitamines A, D, E, K. Onctueux. Adapté aux enfants en croissance et aux besoins énergétiques élevés. Brique à étiquette rouge."],
    demi: ["Lait demi-écrémé", "1,5 à 1,8 %", "Garde protéines, minéraux, B12 et B2, avec moins de lipides. Le plus consommé en France et en Europe."],
    ecreme: ["Lait écrémé", "&lt; 0,5 %", "Garde protéines et calcium mais perd presque toutes les vitamines liposolubles. Goût plus « aqueux ». Brique à étiquette verte."]
  };
  seg($("#mg-seg"), [{ id: "entier", label: "Entier" }, { id: "demi", label: "Demi-écrémé" }, { id: "ecreme", label: "Écrémé" }], "demi", k => {
    const [n, v, t] = MG[k];
    $("#mg-out").innerHTML = `<span class="tag">${n}</span><div class="big">${v} <small>de lipides</small></div><p>${t}</p><p>Brique UHT : 3 mois fermée à température ambiante, 2 à 5 jours au réfrigérateur après ouverture.</p>`;
  });

  /* ---------------- Laits : traitement thermique ---------------- */
  const TH = {
    cru: ["Lait cru", "Aucun chauffage", "Filtré et refroidi (0 à 4 °C). Toute sa flore et son goût, mais risque microbiologique : <i>Salmonella</i>, <i>Listeria</i>, <i>E. coli</i>. Déconseillé aux femmes enceintes, jeunes enfants, personnes âgées ou immunodéprimées.", "72 h en bouteille, 24 à 48 h acheté à la ferme"],
    pasteurise: ["Lait pasteurisé", "Basse : 60–65 °C, 15–30 min · Haute : 70–75 °C, 15–40 s · Flash : 85–95 °C, 1–2 s", "Pasteurisation dans les 24 h après la traite, puis refroidi à 4 °C.", "7 jours fermé au frais, 3 à 5 jours ouvert"],
    sterilise: ["Lait stérilisé", "115 °C pendant 15 à 20 min", "Conditionné puis chauffé, refroidi à 4 °C, stocké à température ambiante.", "3 mois fermé, 3 à 5 jours ouvert au frais"],
    uht: ["Lait UHT", "145 °C pendant 4 à 15 s", "Directe (upérisation : injection de vapeur) ou indirecte (échangeurs de chaleur).", "3 mois fermé, 3 à 5 jours ouvert au frais"],
    micro: ["Lait microfiltré", "Filtration sur membranes", "Les pores retiennent presque tous les micro-organismes ; seule la crème est pasteurisée. Goût proche du lait cru.", "Jusqu’à 15 jours à 6 °C maximum"]
  };
  seg($("#th-seg"), [{ id: "cru", label: "Cru" }, { id: "pasteurise", label: "Pasteurisé" }, { id: "sterilise", label: "Stérilisé" }, { id: "uht", label: "UHT" }, { id: "micro", label: "Microfiltré" }], "uht", k => {
    const [n, t, d, c] = TH[k];
    $("#th-out").innerHTML = `<span class="tag">${n}</span><h3>${t}</h3><p>${d}</p><p><b>Conservation :</b> ${c}</p>`;
  });

  /* ---------------- Point microbiologique ---------------- */
  const G = (name, d) => ({ name, rows: [["Ce qu’il faut savoir", d]] });
  explorer($("#germ-chips"), $("#germ-panel"), [
    { cls: "good-f", label: "Utiles", items: [G("Bactéries lactiques", "Transforment le lactose en acide lactique : le lait s’acidifie, les caséines coagulent (lait caillé, fromage). Certaines produisent du CO₂ (arômes) et des enzymes (affinage). En excès, elles peuvent devenir pathogènes.")] },
    { cls: "bad-f", label: "Indicateurs", items: [G("Coliformes", "D’origine fécale : en excès, le lait est pollué. <i>Escherichia coli</i> en fait partie (infections gastro-intestinales).")] },
    { cls: "glu", label: "Psychrotrophes", items: [G("Protéolytiques", "Leurs protéases rendent le lait amer, peuvent le gélifier et altérer son goût."), G("Lipolytiques", "En excès, goût rance voire putride.")] },
    { cls: "bad-f", label: "Pathogènes", items: [
      G("Brucella", "Brucellose ou fièvre de Malte, par le lait cru ou le fromage."), G("Bacille tuberculeux", "Tuberculose, surtout pulmonaire."),
      G("Staphylocoques, streptocoques", "Venant de vaches atteintes de mammite : ce lait ne doit pas être consommé."),
      G("Campylobacter jejuni", "Infections gastro-intestinales."), G("Yersinia enterocolitica", "Troubles intestinaux ; se développe même entre 2 et 4 °C."),
      G("Listeria monocytogenes", "Listériose, grave chez les nourrissons, personnes âgées, femmes enceintes, immunodéprimés : septicémie, atteinte du système nerveux."),
      G("Salmonella", "Salmonellose : gastro-entérite et forte fièvre.")
    ] }
  ]);

  /* ---------------- Fabrication du yaourt ---------------- */
  const COMMON = ["Lait cru", "Standardisation en matière grasse", "± poudre de lait (extrait sec)", "Pasteurisation 5 min à 90 °C", "Homogénéisation", "Refroidissement ≈ 45 °C"];
  const YF = {
    ferme: ["± sucre, arômes, colorants, fruits", "Levain (ensemencement)", "Mise en pot", "Étuvage en pot : 2 à 3 h à 41–43 °C", "Refroidissement en tunnel ventilé"],
    brasse: ["Levain (ensemencement)", "Étuvage en cuve : 2 à 3 h à 41–43 °C", "Brassage du coagulum", "Refroidissement en tunnel ventilé", "± sucre, arômes, colorants, fruits", "Mise en pot"],
    boire: ["Levain (ensemencement)", "Étuvage en cuve : 2 à 3 h à 41–43 °C", "Brassage du coagulum", "Refroidissement en tunnel ventilé", "± sucre, arômes, colorants, fruits", "Mise en bouteille"]
  };
  seg($("#yfab-seg"), [{ id: "ferme", label: "Yaourt ferme" }, { id: "brasse", label: "Yaourt brassé" }, { id: "boire", label: "Yaourt à boire" }], "ferme", k => {
    $("#yfab-out").innerHTML = `<div class="chain good-f">${COMMON.concat(YF[k]).map(s => `<span>${s}</span>`).join("<i>→</i>")}</div>
      <p>${k === "ferme" ? "Fermenté directement dans son pot : texture compacte." : "Fermenté en cuve puis brassé pour liquéfier le gel : texture plus onctueuse" + (k === "boire" ? ", liquide." : ".")} Un peu plus froid à l’étuvage : plus d’arômes ; un peu plus chaud : plus d’acidité. Un levain jeune donne un yaourt doux, un levain âgé un yaourt acide.</p>`;
  });

  /* ---------------- Lait ou boisson végétale ---------------- */
  const VEG = [["Lait ½ écrémé", { kj: 192, p: 3.2, g: 4.8, l: 1.5 }, "lai"], ["Jus d’amande", { kj: 297, p: 2, g: 5, l: 4.7 }, "fl"], ["Jus d’avoine", { kj: 174, p: 0.8, g: 7, l: 1 }, "glu"], ["Lait de coco", { kj: 732, p: 1, g: 2.1, l: 18 }, "lip"]];
  const VK = { kj: ["Énergie", "kJ"], p: ["Protéines", "g"], g: ["Glucides", "g"], l: ["Lipides", "g"] };
  seg($("#veg-seg"), Object.entries(VK).map(([id, v]) => ({ id, label: v[0] })), "p", k => {
    hbars($("#veg-bars"), VEG.map(([n, d, c]) => ({ label: n, v: d[k], cls: c })), { unit: VK[k][1] });
  });

  /* ---------------- Yaourts ---------------- */
  const YO = [
    ["Nature ordinaire", 4.3, 1.1, 4, 150, 40], ["Nature entier", 4.1, 2.6, 3.6, 130, 50], ["Nature maigre", 4.8, 0, 4.1, 130, 35],
    ["Sucré", 3.5, 2, 12.5, 120, 80], ["Sucré maigre", 3.5, 0.1, 12.5, 120, 65], ["Aromatisé entier", 3.4, 2.6, 12.2, 120, 85],
    ["Aromatisé édulcoré maigre", 4.5, 0.06, 8.3, 140, 50], ["À boire sucré", 2.9, 1.5, 9.3, 117, 60], ["À boire aromatisé", 3, 1.4, 11.3, 115, 80],
    ["À boire aux fruits", 3.1, 1.7, 13.1, 133, 70], ["Aux fruits entier", 3.3, 3.1, 13.4, 118, 80]
  ];
  const YK = [["Protéines", "g", 1, "pro"], ["Lipides", "g", 2, "lip"], ["Glucides", "g", 3, "glu"], ["Calcium", "mg", 4, "min"], ["Énergie", "kcal", 5, "ink"]];
  seg($("#yo-seg"), YK.map((k, i) => ({ id: String(i), label: k[0] })), "2", i => {
    const [, u, col, c] = YK[+i];
    hbars($("#yo-bars"), YO.map(y => ({ label: y[0], v: y[col], cls: c })), { unit: u });
  });

  /* ---------------- Fromages ---------------- */
  const F = (name, how, ex, tex) => ({ name, rows: [["Fabrication", how], ["Exemples", ex], ["Texture", tex]] });
  explorer($("#fro-chips"), $("#fro-panel"), [{ cls: "glu", label: "Familles", items: [
    F("Frais", "Caillé égoutté, peu ou pas affiné.", "Faisselle, fromage blanc, petit-suisse, mozzarella (pâte filée)", "Humide, goût doux"),
    F("Croûte fleurie", "Ensemencée de moisissures <i>Penicillium</i>, affinage de l’extérieur vers l’intérieur.", "Camembert, brie, saint-marcellin", "Crémeuse, croûte blanche"),
    F("Croûte lavée", "Bactérie <i>Brevibacterium linens</i>, lavages réguliers à la saumure.", "Munster, livarot, époisses", "Croûte collante, goût fort"),
    F("Pâte persillée", "Caillage mixte, pâte ni cuite ni pressée, moisissures introduites avec des aiguilles.", "Roquefort, bleu d’Auvergne, gorgonzola, stilton", "Marbrée de bleu"),
    F("Pressée non cuite", "Présure, égouttage accéléré, pressage, salage, ≈ 3 mois d’affinage.", "Cantal, saint-nectaire, reblochon", "Semi-ferme, crémeuse"),
    F("Pressée cuite", "Caillé cuit 1 h à 50–55 °C, affinage de plusieurs mois.", "Comté, gruyère, emmental, beaufort", "Ferme, granuleuse"),
    F("Fondu", "Fromages fondus à ≈ 100 °C avec sels de fonte (3 % max).", "Tranches pour burgers, fromages à tartiner", "Pâteuse")
  ] }]);
  hbars($("#aff-bars"), [
    { label: "Frais", v: 0.2, text: "quelques jours", cls: "glu" },
    { label: "Pâte molle", sub: "Camembert, brie", v: [0.5, 1.5], text: "2 à 6 semaines", cls: "glu" },
    { label: "Pressée non cuite", sub: "Reblochon", v: [1, 3], text: "1 à 3 mois", cls: "glu" },
    { label: "Persillée", sub: "Roquefort", v: [2, 6], text: "2 à 6 mois", cls: "glu" },
    { label: "Pressée cuite", sub: "Comté, emmental", v: [4, 24], text: "4 à 24 mois", cls: "glu" }
  ], { max: 24 });
  hbars($("#mg-bars"), [
    { label: "0 %", sub: "frais, lait écrémé", v: 0, text: "0 %", cls: "lip" }, { label: "Maigre", v: 20, text: "&lt; 20 %", cls: "lip" },
    { label: "Allégé", v: [20, 30], cls: "lip" }, { label: "Crème ou gras", v: [50, 60], cls: "lip" },
    { label: "Double crème", v: [60, 75], cls: "lip" }, { label: "Triple crème", v: 75, text: "&gt; 75 %", cls: "lip" }
  ], { max: 80, unit: "%" });

  /* ---------------- Repères par population ---------------- */
  const POP = [
    ["1 à 3 ans", "200–300 mL", "20–25 g", "Lait de suite ou de croissance, 500 mL minimum jusqu’à 3 ans", 3],
    ["4 à 9 ans", "300–400 mL", "20–25 g", "Construire le capital osseux", 3],
    ["Adolescents (10–18 ans)", "300–400 mL", "30–40 g", "Capital osseux", 3],
    ["Adultes", "300–400 mL", "30–40 g", "Entretien de la masse osseuse", 2],
    ["Femmes enceintes ou allaitantes", "450–600 mL", "30–40 g", "Minéralisation osseuse", 0],
    ["Femmes ménopausées", "450–600 mL", "30–40 g", "Limiter la chute d’œstrogènes et l’ostéoporose", 0],
    ["Personnes âgées", "450–600 mL", "30–40 g", "Limiter la perte osseuse et les fractures", 3]
  ];
  $("#pop").innerHTML = POP.map((p, i) => `<option value="${i}" ${i === 3 ? "selected" : ""}>${p[0]}</option>`).join("");
  function pop() {
    const [n, lait, fro, why, nb] = POP[+$("#pop").value];
    $("#pop-out").innerHTML = `<span class="tag">${n}</span><div class="g2"><div><span class="tag">Lait ou laitage</span><div class="big">${lait}</div></div><div><span class="tag">Fromage</span><div class="big">${fro}</div></div></div>
      <p>${nb ? `<b>${nb} produits laitiers</b> par jour. ` : "Quantités renforcées. "}${why}.</p>`;
  }
  $("#pop").addEventListener("change", pop);
  pop();
})();
