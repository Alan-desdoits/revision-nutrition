/* ==========================================================================
   Cours : Accompagner les publics aux besoins spécifiques
   Source : documents/finis/Accompagner les publics aux besoins spécifiques .docx
   ========================================================================== */
(function () {
  const { $, fmt, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Nourrisson : eau ---------------- */
  const H = { naiss: ["À la naissance", 150, 3.5], m6: ["Avant 6 mois", 120, 6], a2: ["6 mois à 2 ans", 80, 10], a5: ["À partir de 5 ans", 55, 18] };
  let hk = "m6";
  function hyd() {
    const p = +$("#h-poids").value, [n, ml] = H[hk];
    $("#h-poids-o").textContent = fmt(p) + " kg";
    const tot = Math.round(p * ml);
    $("#h-out").innerHTML = `<span class="tag">${n} · ${ml} mL/kg/j</span><div class="big">≈ ${fmt(tot)} <small>mL par jour</small></div>
      <p>${hk === "a5" ? "" : "Dans les premiers mois, ces apports sont couverts par le lait maternel ou infantile. "}Le corps du bébé contient plus d’eau que celui de l’adulte et se déshydrate beaucoup plus vite.</p>`;
  }
  seg($("#h-seg"), Object.entries(H).map(([id, v]) => ({ id, label: v[0] })), hk, k => {
    hk = k; $("#h-poids").value = H[k][2]; hyd();
  });
  $("#h-poids").addEventListener("input", hyd);

  hbars($("#kcal-bars"), [
    { label: "1 à 3 mois", v: 450, cls: "eau" }, { label: "4 à 6 mois", v: 600, cls: "eau" }, { label: "7 à 9 mois", v: 750, cls: "eau" },
    { label: "10 à 12 mois", v: 900, cls: "eau" }, { label: "Vers 2 ans", v: 1200, cls: "eau" }
  ], { unit: "kcal" });

  const L = (name, d) => ({ name, rows: [["À savoir", d]] });
  explorer($("#lait-chips"), $("#lait-panel"), [{ cls: "eau", label: "Laits", items: [
    L("Lait maternel", "L’aliment de référence, composition évolutive : bonnes proportions de nutriments, acides gras essentiels (cerveau, vision), anticorps, enzymes, hormones, excellente digestibilité. À long terme : moins d’obésité, de diabète de type 2, de maladies cardiovasculaires."),
    L("1er âge", "De la naissance à 6 mois : remplace totalement le lait maternel. Protéines de lait de vache ou de chèvre."),
    L("2e âge", "À partir de 6 mois, avec la diversification : complète les repas solides."),
    L("Lait de croissance", "De 1 à 3 ans, très proche du 2e âge."),
    L("Anti-régurgitations (AR)", "Épaissi à l’amidon (maïs, tapioca, pomme de terre) pour limiter les régurgitations."),
    L("Sans lactose", "Lactose remplacé par la dextrine-maltose. Seulement dans des situations précises (diarrhées sévères, intolérance).")
  ] }]);

  hbars($("#div-bars"), [
    { label: "Mixé", v: [4, 8], text: "4 à 8 mois", cls: "eau" },
    { label: "Mouliné", v: [8, 10], text: "8 à 10 mois", cls: "eau" },
    { label: "Petits morceaux", v: [10, 12], text: "dès 10 mois", cls: "eau" }
  ], { max: 12 });

  /* ---------------- Enfant et ado ---------------- */
  hbars($("#sl-bars"), [{ label: "4 à 7 ans", v: 60, cls: "sug" }, { label: "8 à 12 ans", v: 75, cls: "sug" }, { label: "13 à 17 ans", v: 100, cls: "sug" }], { unit: "g/j" });

  const M = (name, en, vig) => ({ name, rows: [["Enjeux", en], ["Vigilance", vig]] });
  explorer($("#mic-chips"), $("#mic-panel"), [{ cls: "fl", label: "Micronutriments", items: [
    M("Calcium et vitamine D", "Construire la masse osseuse : moins de fragilité à l’âge adulte.", "Essentiels pendant la croissance, surtout à l’adolescence. Peu de laitages ou peu de soleil."),
    M("Fer", "Transport de l’oxygène, énergie, concentration.", "Besoins en hausse, surtout chez les adolescentes (règles). Régimes restrictifs."),
    M("Zinc", "Croissance, immunité, métabolisme.", "Alimentation peu variée ou très transformée."),
    M("Vitamines B", "Énergie et fonctions cognitives.", "Régimes déséquilibrés ou avec exclusions."),
    M("Vitamine C", "Immunité, absorption du fer végétal.", "Fruits et légumes frais chaque jour, surtout chez les ados qui en mangent peu.")
  ] }]);

  const JT = {
    p: [["Petit-déjeuner", "Lait ½ écrémé ou yaourt nature, petite tranche de pain complet beurrée, quartier de pomme ou de poire"], ["Déjeuner", "Crudités râpées très fin, poisson ou volaille (30–40 g), petite portion de pâtes ou riz, légume cuit, yaourt, compote sans sucre"], ["Goûter", "Compote maison ou banane mûre, petit morceau de pain, un carré de chocolat"], ["Dîner", "Potage de légumes, petite omelette (1 œuf) avec du pain, fruit (pomme râpée, poire cuite)"]],
    m: [["Petit-déjeuner", "Lait ou laitage, pain complet + confiture ou fromage frais, fruit entier (orange, kiwi), œuf à la coque le week-end"], ["Déjeuner", "Salade composée (tomates, maïs, œufs durs), viande maigre ou poisson (60–80 g), féculent complet et légume cuit, fromage, fruit de saison"], ["Goûter", "Laitage nature ou boisson lactée peu sucrée, pain avec beurre ou purée d’amandes, fruit"], ["Dîner", "Soupe, filet de poisson ou escalope de volaille, purée de légumes et pomme de terre, yaourt nature"]],
    a: [["Petit-déjeuner", "Bol de lait ou boisson végétale enrichie en calcium, 2 tranches de pain complet ou céréales peu sucrées avec noix et amandes, fruit"], ["Déjeuner", "Crudités + huile de colza ou d’olive, viande, poisson ou légumineuses (100–150 g), féculent (riz complet, pâtes, quinoa), légume cuit, laitage, fruit"], ["Goûter", "Smoothie maison (banane, lait, flocons d’avoine) ou yaourt aux fruits secs, pain complet"], ["Dîner", "Soupe ou salade composée, omelette de 2 œufs ou poisson, légume vapeur + filet d’huile, fromage, fruit"]]
  };
  seg($("#jt-seg"), [{ id: "p", label: "3 à 5 ans" }, { id: "m", label: "6 à 12 ans" }, { id: "a", label: "Adolescent" }], "p", k => {
    $("#jt-out").innerHTML = JT[k].map(([w, t]) => `<div class="card meal"><span class="when">${w}</span><span class="what" style="font-size:1rem">${t}</span></div>`).join("");
  });

  /* ---------------- Sportif ---------------- */
  const S = (name, i, s, v) => ({ name, rows: [["Intérêt", i], ["Sources", s], ["Vigilance", v]] });
  explorer($("#sp-chips"), $("#sp-panel"), [{ cls: "glu", label: "Catégories", items: [
    S("Énergie globale", "Compenser l’entraînement et la récupération.", "Ajuster selon l’intensité et la durée.", "Éviter les carences prolongées, surtout en phase intensive."),
    S("Glucides", "Principal carburant pendant l’effort.", "Céréales complètes, fruits, légumineuses, féculents.", "Ajuster selon la discipline."),
    S("Protéines", "Réparer les tissus, construire le muscle.", "Viandes, poissons, laitages, légumineuses, œufs.", "Réparties sur la journée, pas seulement après l’effort."),
    S("Lipides de qualité", "Énergie, effet anti-inflammatoire.", "Oléagineux, huiles végétales, poissons gras.", "Limiter les graisses saturées."),
    S("Hydratation", "Performance, prévention des blessures.", "Boire avant, pendant et après l’effort.", "Anticiper sans attendre la soif."),
    S("Micronutriments", "Métabolisme et muscles.", "Légumes, fruits, céréales complètes.", "Fer, magnésium, vitamines B."),
    S("Répartition des repas", "Énergie et récupération optimisées.", "Repas et collations adaptés à l’entraînement.", "Ne pas prolonger l’effort à jeun sans plan.")
  ] }]);
})();
