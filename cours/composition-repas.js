/* ==========================================================================
   Cours : Composition et répartition des repas
   Source : documents/finis/Composition et répartition des repas.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, hbars } = window.Fiches;

  /* ---------------- 7 catégories ---------------- */
  const C = (name, cls, role, pnns) => ({ name, cls, rows: [["Intérêt", role], ["Repère PNNS", pnns]] });
  explorer($("#cat-chips"), $("#cat-panel"), [{ cls: "", label: "", items: [
    C("Eau et boissons non sucrées", "eau", "La seule boisson indispensable : thermorégulation, transport des nutriments, élimination, fonctions cognitives.", "L’eau comme boisson principale. Limiter les boissons sucrées (surpoids, diabète, caries)."),
    C("Féculents, légumineuses, céréales", "glu", "Source majeure d’énergie (glucides complexes), satiété, régulation de l’appétit.", "Régulièrement, de préférence complets ou semi-complets."),
    C("Fruits et légumes", "fl", "Fibres, vitamines, minéraux, antioxydants. Moins de maladies cardiovasculaires, de cancers, de troubles métaboliques.", "La variété (couleurs, types, préparations) et la régularité, plus qu’un chiffre strict."),
    C("Produits laitiers", "lai", "Calcium, protéines, vitamines B2 et B12 : santé osseuse.", "Régulièrement, selon l’âge et la tolérance. Attention au sel et au gras de certains."),
    C("Viande, poisson, œufs", "pro", "Principales sources de protéines : tissus, masse musculaire.", "Diversifier : poissons (dont gras), œufs, légumineuses ; limiter viandes rouges et transformées."),
    C("Matières grasses", "lip", "Vitamines liposolubles, membranes, hormones.", "La qualité : huiles riches en insaturés (colza, olive, noix), limiter les saturés."),
    C("Produits sucrés", "sug", "Aucun rôle nutritionnel indispensable.", "Pas d’exclusion : une consommation occasionnelle, vigilance sur les sucres cachés.")
  ] }]);

  /* ---------------- Pyramide (du sommet à la base) ---------------- */
  const PYR = [
    ["Non indispensables", "sug", "Produits gras, sucrés ou salés, viandes transformées, boissons sucrées ou alcoolisées.", "Occasionnellement", 40],
    ["Matières grasses ajoutées", "lip", "Modérément et en variant les sources.", "Petites quantités", 52],
    ["Fruits à coque et graines", "lip", "Noix, noisettes, amandes non salées.", "15 à 25 g par jour", 52],
    ["Produits laitiers et alternatives", "lai", "Lait, laitages, alternatives végétales enrichies en calcium.", "250 à 500 g par jour", 66],
    ["VVPOLAV", "pro", "Viande, volaille, poisson, œuf, légumineuses, alternatives végétales.", "Poisson et fruits de mer 1 à 2 fois par semaine · légumineuses au moins 1 fois par semaine · viande rouge 300 g maximum par semaine", 66],
    ["Féculents", "glu", "À chaque repas.", "Au moins 125 g de produits céréaliers complets par jour", 82],
    ["Fruits et légumes", "fl", "Sous toutes leurs formes.", "Légumes : au moins 300 g par jour · fruits : 250 g par jour", 82],
    ["Eau et boissons non sucrées", "eau", "La base de la pyramide.", "Eau à volonté", 100]
  ];
  let cur = 7;
  function pyr() {
    // deux étages partagés (fruits à coque / MG, laitiers / VVPOLAV, féculents / F&L)
    const rows = [[0], [1, 2], [3, 4], [5, 6], [7]];
    $("#pyr").innerHTML = rows.map(r => `<div class="pyr-row" style="--w:${PYR[r[0]][4]}">${r.map(i => `<button type="button" class="${PYR[i][1]}" data-i="${i}" aria-pressed="${i === cur}" style="flex:1">${PYR[i][0]}</button>`).join("")}</div>`).join("");
    const [n, c, d, q] = PYR[cur];
    $("#pyr-out").className = "result " + c;
    $("#pyr-out").innerHTML = `<span class="tag">${n}</span><div class="big" style="font-size:1.4rem;line-height:1.2">${q}</div><p>${d}</p>`;
  }
  $("#pyr").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { cur = +b.dataset.i; pyr(); } });
  pyr();

  /* ---------------- Nutri-Score ---------------- */
  let ns = "D";
  const NS = { A: "Meilleure qualité nutritionnelle.", B: "", C: "", D: "Exemple du cours : un paquet de <b>sablés industriels</b>. Beaucoup de sucres et de graisses saturées, densité énergétique élevée, peu de fibres et de protéines, pas de fruits ni légumes. Les points négatifs l’emportent : à consommer occasionnellement.", E: "Qualité nutritionnelle la moins bonne." };
  function nutri() {
    $("#nutri").innerHTML = "ABCDE".split("").map(l => `<button type="button" class="ns ns-${l.toLowerCase()}" aria-pressed="${l === ns}">${l}</button>`).join("");
    $("#nutri-out").innerHTML = `<p>Ratio, pour 100 g, entre ce qui est à limiter (<b>sel, sucres, acides gras saturés</b>) et ce qui est favorable (<b>protéines, légumineuses, fruits et légumes</b>).</p>${NS[ns] ? `<p>${NS[ns]}</p>` : ""}`;
  }
  $("#nutri").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { ns = b.textContent; nutri(); } });
  nutri();

  /* ---------------- Étiquette ---------------- */
  const LBL = [
    ["Dénomination", "Le nom légal, qui décrit la vraie nature du produit. Il lève la confusion des appellations marketing (« saveur », « type », « à base de »)."],
    ["Ingrédients", "Classés par <b>ordre décroissant de poids</b> : les premiers sont les plus présents. On y lit la transformation, la place du sucre, du gras, des additifs."],
    ["Allergènes", "Obligatoirement mis en évidence (gras, italique). Ici l’<i>arachide</i>. Ils renseignent aussi sur la composition."],
    ["Valeurs nutritionnelles", "Pour <b>100 g ou 100 mL</b> : base de comparaison entre produits. Énergie, matières grasses et saturés, glucides et sucres, protéines, sel."],
    ["Portion", "Indicative et souvent éloignée de la consommation réelle : raisonner sur ce qui est vraiment mangé."],
    ["Allégations", "Encadrées par la loi mais insuffisantes pour juger le produit. Ici « sans sucres ajoutés »… alors que la liste contient du <b>sucre</b> : toujours vérifier."],
    ["Infos réglementaires", "Date de durabilité, conservation, origine, fabricant, lot : sécurité et traçabilité, pas d’information nutritionnelle."]
  ];
  let lb = 1;
  function label() {
    const h = i => `<button type="button" class="hot" data-i="${i}" aria-pressed="${i === lb}" aria-label="${LBL[i][0]}">${i + 1}</button>`;
    const z = i => `zone ${i === lb ? "on" : ""}`;
    $("#lbl").innerHTML = `
      <div class="${z(0)}" style="display:flex;gap:10px;align-items:center">${h(0)}<b style="font-family:var(--f-d);font-size:1.2rem">Sauce tomate au basilic</b></div>
      <div class="${z(1)} ${lb === 2 ? "on" : ""}" style="display:flex;gap:10px">${h(1)}<p style="margin:0"><b>Ingrédients :</b> pulpe de tomates 72 %, concentré de tomates 14 %, oignons, huile de tournesol, basilic 2 %, ${h(2)} <i><b>arachide</b></i>, sucre, sel, arôme naturel.</p></div>
      <div class="${z(5)}" style="display:flex;gap:10px;align-items:center">${h(5)}<span class="pills"><span style="background:var(--bad-s);color:var(--bad);font-weight:700">Sans sucres ajoutés</span></span></div>
      <div class="${z(3)} ${lb === 4 ? "on" : ""}" style="display:flex;gap:10px">${h(3)}<div style="flex:1">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><span class="tag">Déclaration nutritionnelle · 100 g</span>${h(4)}<span class="tag">1 portion = 200 g</span></div>
        <table style="width:100%;font-size:.88rem;border-collapse:collapse">${[["Énergie", "280 kJ · 64 kcal"], ["Matières grasses", "2,6 g"], ["dont saturés", "0,3 g"], ["Glucides", "7,6 g"], ["dont sucres", "5,9 g"], ["Fibres", "1,9 g"], ["Protéines", "1,6 g"], ["Sel", "0,9 g"]].map(([a, b]) => `<tr><td style="padding:3px 0;border-bottom:1px solid var(--line)">${a}</td><td style="text-align:right;border-bottom:1px solid var(--line)">${b}</td></tr>`).join("")}</table></div></div>
      <div class="${z(6)}" style="display:flex;gap:10px">${h(6)}<p data-nohide style="margin:0;font-size:.88rem;color:var(--muted)">À conserver au réfrigérateur après ouverture, 5 jours. À consommer de préférence avant le 12-09-2026. Lot 677-87-5432. Fabriqué en France.</p></div>`;
    $("#lbl-out").innerHTML = `<span class="tag" data-nohide>Repère ${lb + 1}</span><h3>${LBL[lb][0]}</h3><p>${LBL[lb][1]}</p>`;
  }
  $("#lbl").addEventListener("click", e => { const b = e.target.closest(".hot"); if (b) { lb = +b.dataset.i; label(); } });
  label();

  /* ---------------- Les repas ---------------- */
  const MEALS = {
    pdj: ["Petit-déjeuner", [15, 20], "Rompre le jeûne et redonner de l’énergie après plusieurs heures sans manger.", "Stabiliser la glycémie, améliorer la concentration.", ["1 produit céréalier", "1 source de protéine", "1 fruit", "1 boisson non sucrée"], "Le sauter favorise le grignotage du matin."],
    dej: ["Déjeuner", [40, 45], "Repas clé d’une journée active : refaire le plein d’énergie et de nutriments.", "Préserver l’efficacité et l’attention.", ["Féculents", "1 portion de légumes", "1 portion de protéine", "1 produit laitier", "1 fruit"], "Trop de graisses et de sucres rapides : fatigue digestive, perte d’attention et de vigilance."],
    col: ["Collation", [5, 10], "Répondre à un effort physique ou à un long écart entre deux repas.", "Stabiliser la glycémie, soutenir concentration, énergie et satiété.", ["1 poignée de fruits secs ou d’oléagineux", "1 fruit frais", "1 produit laitier", "1 tranche de pain complet et un carré de chocolat noir"], "Facultative, elle limite toutefois le grignotage et les excès ensuite."],
    din: ["Dîner", [35, 40], "Préparer le corps au repos nocturne en constituant des réserves pour la nuit.", "Satiété.", ["1 portion majoritaire de légumes", "1 source de protéine légère", "1 petite portion de féculents", "(optionnel) 1 fruit ou 1 produit laitier"], "Trop riche : digestion et sommeil perturbés. Trop léger : grignotage nocturne."]
  };
  let sel = "dej";
  function shares() {
    hbars($("#share-bars"), Object.entries(MEALS).map(([id, m]) => ({ id, label: m[0], v: m[1], cls: "glu", sel: id === sel })), { max: 50, unit: "%" });
  }
  seg($("#meal-seg"), Object.entries(MEALS).map(([id, m]) => ({ id, label: m[0] })), sel, k => {
    sel = k; shares();
    const [n, , f, b, comp, r] = MEALS[k];
    $("#meal-out").innerHTML = `<h3>${n}</h3><div class="g2"><div><span class="tag">Fonction</span><p>${f}</p><span class="tag">Besoins et bénéfices</span><p>${b}</p></div><div><span class="tag">Composition recommandée</span><ul>${comp.map(c => `<li>${c}</li>`).join("")}</ul></div></div><div class="note" style="margin-top:6px"><span>${r}</span></div>`;
  });
  $("#share-bars").addEventListener("click", e => { const r = e.target.closest(".hbar"); if (r && r.dataset.id) $$(`#meal-seg button[data-id="${r.dataset.id}"]`)[0].click(); });
})();
