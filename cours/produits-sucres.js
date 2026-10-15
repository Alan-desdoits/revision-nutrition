/* ==========================================================================
   Cours : Les produits sucrés
   Source : documents/finis/Les produits sucrés.docx
   ========================================================================== */
(function () {
  const { $, fmt, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Courbe de glycémie (schéma qualitatif) ---------------- */
  const GLY = {
    seul: { path: "M40 150 C 90 150, 110 40, 160 40 S 250 190, 320 188 S 420 150, 600 150", steps: [["Pic", "Le glucose arrive d’un coup dans le sang : la glycémie monte vite."], ["Insuline", "Le pancréas libère de l’insuline : le glucose entre dans les cellules."], ["Chute", "L’insuline est « trop efficace » : la glycémie passe sous son niveau de départ. C’est l’<b>hypoglycémie réactionnelle</b>, vécue comme une fringale."]], dip: true },
    repas: { path: "M40 150 C 110 150, 150 95, 220 95 S 350 150, 440 150 S 560 150, 600 150", steps: [["Montée douce", "Fibres, cuisson et matières grasses du repas ralentissent l’arrivée du glucose."], ["Insuline mesurée", "La réponse est plus progressive."], ["Retour stable", "Pas de creux marqué : la satiété dure plus longtemps."]], dip: false }
  };
  seg($("#gly-seg"), [{ id: "seul", label: "Produit sucré seul", cls: "sug" }, { id: "repas", label: "Dans un repas complet", cls: "sug" }], "seul", k => {
    const g = GLY[k];
    $("#gly-svg").innerHTML = `
      <line x1="40" y1="150" x2="600" y2="150" stroke="var(--line2)" stroke-dasharray="5 5"/>
      <text x="604" y="146" text-anchor="end" font-size="12" fill="var(--muted)" font-family="IBM Plex Mono, monospace">niveau de départ</text>
      ${g.dip ? `<rect x="250" y="150" width="140" height="45" fill="var(--bad-s)"/><text x="320" y="215" text-anchor="middle" font-size="12" fill="var(--bad)" font-family="Atkinson Hyperlegible, sans-serif">hypoglycémie réactionnelle</text>` : ""}
      <path d="${g.path}" fill="none" stroke="var(--sug)" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="var(--muted)"/><line x1="40" y1="200" x2="610" y2="200" stroke="var(--muted)"/>
      <text x="46" y="24" font-size="12" fill="var(--muted)" font-family="IBM Plex Mono, monospace">glycémie</text>
      <text x="606" y="194" text-anchor="end" font-size="12" fill="var(--muted)" font-family="IBM Plex Mono, monospace">temps</text>`;
    $("#gly-steps").innerHTML = g.steps.map(([t, p]) => `<div><span class="tag">${t}</span><p>${p}</p></div>`).join("");
  });

  /* ---------------- Les sucres ---------------- */
  const S = (name, rows) => ({ name, rows });
  explorer($("#sug-chips"), $("#sug-panel"), [
    { cls: "sug", label: "Cristaux", items: [
      S("Sucre blanc", [["Composition", "99,9 % de saccharose, raffinage complet"], ["Caractère", "Goût neutre, cristaux réguliers, aucun minéral"]]),
      S("Sucre blond", [["Composition", "Saccharose, raffinage arrêté plus tôt"], ["Caractère", "Fine couche de mélasse : couleur dorée, goût plus rond. Même pouvoir sucrant que le blanc"]]),
      S("Sucre roux industriel", [["Composition", "Sucre blanc <b>recoloré</b> au caramel ou à la mélasse purifiée"], ["À savoir", "Le sucre roux de betterave est du sucre blanc recoloré"]]),
      S("Cassonade", [["Origine", "<b>Uniquement la canne</b>, partiellement raffinée"], ["Caractère", "Mélasse naturelle : goût caramel, notes de rhum, grains irréguliers"]]),
      S("Vergeoise", [["Origine", "Betterave : sirop résiduel cuit et cristallisé"], ["Caractère", "Fondante, humide, goût de pain d’épices. Tarte au sucre du Nord"]]),
      S("Sucre glace", [["Fabrication", "Sucre blanc broyé très fin, souvent un peu d’<b>amidon</b> anti-agglomérant"], ["Usage", "Glaçages, finitions. Attention aux intolérances"]]),
      S("Semoule ou cristallisé", [["Différence", "Seulement la taille du cristal : fin et rapide à dissoudre, ou gros et lent"], ["Glycémie", "Identique : c’est la <b>saccharase</b> de l’intestin qui fixe la vitesse d’absorption"]])
    ] },
    { cls: "sug", label: "Sirops", items: [
      S("Sirop de glucose", [["Fabrication", "Hydrolyse de l’amidon (maïs, blé, pomme de terre)"], ["Rôle", "Peu sucrant ; retient l’eau (moelleux), empêche la cristallisation (confiseries, glaces)"]]),
      S("Sirop de fructose", [["Fabrication", "Isomérisation du glucose"], ["Rôle", "Pouvoir sucrant 1,2 à 1,8 ; boissons (HFCS). En excès, lipogenèse dans le foie"]]),
      S("Sirop d’agave", [["Composition", "Jusqu’à <b>90 % de fructose libre</b> une fois hydrolysé"], ["À savoir", "Image « naturelle », effets proches des sirops très transformés"]]),
      S("Miel", [["Composition", "Fructose (majoritaire) et glucose, eau, enzymes, traces de minéraux"], ["Repère", "1 à 2 cuillères à café par jour. Riche en glucose : cristallise vite ; riche en fructose : reste fluide"], ["Règle", "Ni additif, ni colorant, ni sucre ajouté"]])
    ] }
  ]);

  hbars($("#ps-bars"), [
    { label: "Fructose", v: 1.7, cls: "sug" }, { label: "Saccharose", sub: "référence", v: 1, cls: "sug", sel: true },
    { label: "Glucose", v: 0.7, cls: "sug" }, { label: "Lactose", v: [0.2, 0.4], cls: "sug" }
  ], { max: 1.8 });

  /* ---------------- Sucres libres : calculateur ---------------- */
  const CAN = 35; // une canette de soda : 30 à 40 g de sucre (cours)
  function sl() {
    const aet = +$("#aet").value, conso = +$("#conso").value;
    const max10 = Math.round(aet * 0.10 / 4), max5 = Math.round(aet * 0.05 / 4), ratio = conso / max10;
    $("#aet-o").textContent = fmt(aet) + " kcal";
    $("#conso-o").textContent = conso + " g/j";
    const scale = Math.max(conso, max10) * 1.05;
    $("#sl-out").innerHTML = `<span class="tag">Limite OMS</span>
      <div class="g2"><div><div class="big">${max10} <small>g max (10 %)</small></div></div><div><div class="big">${max5} <small>g idéal (5 %)</small></div></div></div>
      <div class="stack hideable" style="--m:${ratio > 1 ? "var(--bad-s)" : "var(--sug-m)"};--c:${ratio > 1 ? "var(--bad)" : "var(--sug)"}"><div style="flex:0 0 ${(conso / scale * 100).toFixed(1)}%">${conso} g</div><div class="target" style="left:${(max5 / scale * 100).toFixed(1)}%"></div><div class="target" style="left:${(max10 / scale * 100).toFixed(1)}%"></div></div>
      <p>${conso} g, c’est <b>${fmt(ratio, 1)} fois</b> la limite de 10 %, soit l’équivalent d’environ ${fmt(conso / CAN, 1)} canette${conso / CAN >= 2 ? "s" : ""} de soda (30 à 40 g chacune). Les traits marquent 5 % et 10 %.</p>`;
  }
  $("#aet").addEventListener("input", sl);
  $("#conso").addEventListener("input", sl);
  sl();

  /* ---------------- Familles ---------------- */
  hbars($("#kcal-bars"), [
    { label: "Sucre", sub: "4 kcal/g", v: 400, cls: "sug" }, { label: "Confiture", sub: "≈ 60 % de sucre", v: 250, cls: "sug" },
    { label: "Chocolat", sub: "sucre + beurre de cacao", v: 500, text: "&gt; 500 kcal", cls: "lip" }
  ], { max: 550, unit: "kcal/100 g" });
  hbars($("#choco-bars"), [
    { label: "Noir", sub: "dont 14 % de cacao sec dégraissé", v: 43, text: "≥ 43 % de cacao", cls: "lip" },
    { label: "Au lait", v: 25, text: "≥ 25 % de cacao", cls: "lip" },
    { label: "Blanc", sub: "pas de pâte de cacao", v: 20, text: "≥ 20 % de beurre de cacao", cls: "lip" }
  ], { max: 50 });

  /* ---------------- Cas Lemoine ---------------- */
  const MEALS = [
    ["Petit-déjeuner, 5 h 30", "Café sucré (2 sucres) + viennoiserie achetée en route", "Café avec 1 puis ½ puis 0 sucre, pain et laitage nature"],
    ["Pause du matin", "Café sucré + biscuits ou barre chocolatée", "Fruit frais + poignée d’amandes"],
    ["Déjeuner, 13 h", "Sandwich, soda, crème dessert", "Salade composée ou wrap maison, eau, yaourt nature + fruit"],
    ["Goûter, 17 h", "Jus de fruits industriel + yaourt aux fruits", "Fromage blanc + fruits rouges, eau pétillante citronnée"],
    ["Dîner, 20 h", "Repas complet + glace ou chocolat", "Repas complet ; dessert sucré réservé au week-end"],
    ["Gardes de nuit", "Café sucré, bonbons, boissons énergisantes", "Collations préparées, eau, thé"]
  ];
  seg($("#ab-seg"), [{ id: "0", label: "Avant", cls: "bad" }, { id: "1", label: "Après", cls: "good" }], "0", v => {
    const a = v === "1";
    $("#meals").innerHTML = MEALS.map(m => `<div class="card meal ${a ? "after" : "before"}"><span class="when">${m[0]}</span><span class="what" style="font-size:1rem">${a ? m[2] : m[1]}</span></div>`).join("");
  });
})();
