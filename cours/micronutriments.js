/* ==========================================================================
   Cours : Micronutriments
   Source : documents/finis/Micronutriments.docx
   ========================================================================== */
(function () {
  const { $, fmt, seg, explorer } = window.Fiches;

  /* ---------------- Explorer ---------------- */
  const V = (name, sub, role, sources, apport, ex) => ({ name, sub, rows: [["Rôle", role], ["Sources", sources], ["Apport / jour", `<b>${apport}</b>`], ["Exemple", ex]] });
  const GROUPS = [
    { cls: "vit", label: "Liposolubles", items: [
      V("Vitamine A", "Rétinol (animal) et caroténoïdes (végétal). C’est un terpène.", "Vision (rhodopsine de la rétine), différenciation cellulaire, peau et muqueuses, expression des gènes.", "Produits animaux (rétinol) ; légumes colorés (caroténoïdes).", "900 µg (homme) · 700 µg (femme)", "1 carotte crue (600 µg) + 1 portion de patate douce (900 µg). 100 g de foie de volaille en apportent plusieurs milliers."),
      V("Vitamine D", "Calciférols D2 et D3. Agit comme une hormone stéroïde.", "Activée par le foie puis le rein, elle règle le calcium et le phosphore : minéralisation des os et des dents. Fabriquée par la peau sous les UVB.", "Poissons gras, huile de foie de morue, œufs, laitages enrichis.", "5 à 15 µg", "100 g de saumon cuit ≈ 10 à 12 µg. 1 cuillère d’huile de foie de morue &gt; 30 µg."),
      V("Vitamine E", "Tocophérols et tocotriénols.", "Principal antioxydant liposoluble : protège les membranes des radicaux libres. Immunité, reproduction.", "Huiles végétales, oléagineux.", "12 mg (femme) · 15 mg (homme)", "2 c. à soupe d’huile de tournesol ou de colza (8 à 10 mg) + 25 g d’amandes (6 mg)."),
      V("Vitamine K", "K1 phylloquinone (végétale), K2 ménaquinone (en partie faite par le microbiote).", "Coagulation : cofacteur de la γ-carboxylation des protéines (prothrombine). Fixation du calcium dans l’os.", "Légumes verts.", "55 à 70 µg", "100 g de brocoli cuit ≈ 100 µg. 100 g de chou kale cuit &gt; 400 µg.")
    ] },
    { cls: "vit", label: "Hydrosolubles", items: [
      V("Vitamine C", "Acide ascorbique.", "Antioxydant puissant, régénère la vitamine E, synthèse du collagène, améliore l’absorption du fer.", "Agrumes, kiwi, fraises, poivrons, choux, persil.", "110 mg", "2 kiwis (80 mg) + 1 poivron cru (30 mg), ou 1 grand jus d’orange pressée (60 mg) + 1 portion de brocoli (50 mg)."),
      V("B1", "Thiamine.", "Devient la thiamine pyrophosphate : indispensable pour tirer l’énergie du glucose.", "Céréales complètes, légumineuses, porc.", "1,1 à 1,3 mg", "1 tranche de pain complet (40 g), 100 g de riz complet cuit ou 100 g de porc."),
      V("B2", "Riboflavine.", "Précurseur du FAD et du FMN : oxydoréduction, énergie dans les mitochondries.", "Produits laitiers, abats, œufs, légumes à feuilles vertes.", "1,5 mg", "1 tasse de lait (250 mL), 30 g de fromage ou 100 g de poulet cuit."),
      V("B3", "Niacine ou vitamine PP.", "Devient NAD et NADP : respiration cellulaire et production d’ATP.", "Viande, poisson, céréales, légumineuses.", "14 à 16 mg", "100 g de poulet ou de thon, 1 tasse de riz complet ou de haricots blancs."),
      V("B5", "Acide pantothénique.", "Compose la coenzyme A, carrefour du métabolisme : acides gras, hormones.", "Presque tous les aliments : abats, œufs, champignons.", "5 mg", "½ avocat + 100 g de champignons + 100 g de poulet."),
      V("B6", "Pyridoxine, pyridoxamine, pyridoxal.", "Métabolisme des acides aminés ; dopamine, sérotonine, GABA (humeur, sommeil).", "Viandes, poissons, bananes, pommes de terre.", "1,3 à 1,5 mg", "100 g de saumon + 1 banane + 100 g de poulet."),
      V("B8", "Biotine.", "Coenzyme des carboxylases : acides gras, glucides, acides aminés.", "Foie, jaune d’œuf, fruits secs.", "30 à 50 µg", "1 jaune d’œuf, 100 g de foie de veau ou 30 g d’amandes."),
      V("B9", "Acide folique, folates.", "Synthèse de l’ADN, division cellulaire. Cruciale pendant la grossesse.", "Légumes verts, légumineuses, agrumes.", "330 µg (400 µg pendant la grossesse)", "Pour 200 µg : 1 tasse d’épinards cuits, de pois chiches, ou 1 verre de jus d’orange."),
      V("B12", "Cobalamine. Contient du cobalt.", "Globules rouges, système nerveux ; agit avec la B9 sur l’ADN.", "<b>Uniquement</b> les produits animaux.", "4 µg", "Pour 2,4 µg : 100 g de foie de veau, 100 g de saumon ou 1 œuf.")
    ] },
    { cls: "min", label: "Macrominéraux", items: [
      V("Calcium", "Ca²⁺ · 1 à 1,2 kg dans le corps, le plus abondant.", "Os et dents (hydroxyapatite), contraction musculaire, influx nerveux, coagulation. Taux sanguin réglé par la vitamine D, la parathormone et la calcitonine.", "Produits laitiers, poissons avec arêtes, chou, brocoli, eaux calciques.", "≈ 900 mg", "250 mL de lait (300 mg), 1 yaourt (150 mg), 30 g d’emmental (≈ 250 mg) : 3 laitiers suffisent."),
      V("Phosphore", "PO₄³⁻ · 2e minéral le plus abondant.", "Os et dents avec le calcium, ATP, ADN et ARN, phospholipides.", "Viandes, poissons, laitages, oléagineux, légumineuses.", "≈ 700 mg", "150 g de poulet cuit (300 mg), 100 g de lentilles (180 mg)."),
      V("Magnésium", "Mg²⁺ · surtout dans les os et les muscles.", "Cofacteur de plus de 300 enzymes. Calcium = contraction, magnésium = <b>relaxation</b>.", "Fruits secs, chocolat noir, légumineuses, céréales complètes, légumes verts.", "300 à 400 mg", "30 g d’amandes (80 mg), 100 g de chocolat noir 70 % (200 mg), 200 g de lentilles (70 mg)."),
      V("Sodium", "Na⁺ · principal cation du milieu extracellulaire.", "Équilibre hydrique, influx nerveux, contraction musculaire.", "Sel de table, charcuterie, plats préparés, pain.", "2 g maximum (5 g de sel)", "1 g de sel ≈ 400 mg de sodium. Un sandwich jambon-fromage : plus de 1,5 g de sel, déjà 30 % de la limite."),
      V("Potassium", "K⁺ · principal cation du milieu intracellulaire.", "Pression artérielle, influx nerveux, contraction. Compense les effets d’un excès de sodium.", "Bananes, abricots, oranges, épinards, brocolis, légumineuses, fruits secs.", "≈ 3 500 mg", "1 banane (400 mg), 200 g de pommes de terre (800 mg), 200 g de lentilles (≈ 700 mg)."),
      V("Chlore", "Cl⁻ · avec le sodium dans le sel (NaCl).", "Équilibre hydrique et acido-basique, acide chlorhydrique de l’estomac, reins.", "Sel, aliments transformés, viandes, poissons.", "≈ 2 300 mg", "1 g de sel ≈ 400 mg de chlore (17 % du besoin), 100 g de jambon ≈ 1 000 mg."),
      V("Soufre", "S · jamais libre, intégré à des molécules.", "Méthionine et cystéine, ponts disulfures des protéines, vitamines B1 et B8, glutathion. Peau, cheveux, ongles.", "Aliments riches en protéines, ail, oignon, chou.", "Non chiffré dans le cours", "Couvert par une alimentation suffisante en protéines.")
    ] },
    { cls: "min", label: "Oligo-éléments", items: [
      V("Fer", "Fe²⁺ / Fe³⁺ · l’oligo-élément le plus abondant.", "Hémoglobine (transport de l’oxygène), myoglobine (stockage dans le muscle), enzymes de la respiration cellulaire.", "Viandes rouges, abats, poissons (héminique) ; légumineuses, légumes verts (non héminique).", "11 mg (homme) · 11 à 16 mg (femme en âge de procréer)", "150 g de steak (4 à 5 mg). 100 g de lentilles (3 mg) avec une crudité riche en vitamine C."),
      V("Zinc", "Zn²⁺ · indispensable à plus de 200 enzymes.", "ADN et protéines, cicatrisation, immunité, appareil reproducteur, goût et odorat.", "Huîtres, viandes, fromages, céréales complètes, noix.", "7 à 10 mg", "6 huîtres (≈ 25 mg). 150 g de bœuf (≈ 6 mg)."),
      V("Cuivre", "Cu²⁺ · agit avec le fer.", "Fabrication de l’hémoglobine, collagène, mélanine, défense antioxydante.", "Abats, fruits de mer, chocolat noir, noix, légumineuses.", "≈ 1 mg", "30 g de noix de cajou (≈ 0,6 mg)."),
      V("Cobalt", "Co · constituant de la vitamine B12.", "Globules rouges (prévention de l’anémie), ADN, acides gras, myéline des nerfs.", "Abats, fruits de mer, viande, laitages, œufs.", "2 à 3 µg", "100 g de saumon : 3 à 5 µg de B12."),
      V("Iode", "I⁻ · teneur des aliments selon le sol et l’eau.", "Hormones thyroïdiennes T3 et T4 : métabolisme énergétique et croissance.", "Produits de la mer, algues, sel iodé, lait.", "≈ 150 µg", "100 g de cabillaud (≈ 100 µg), 2 œufs (≈ 40 µg), sel iodé ≈ 30 µg par gramme."),
      V("Sélénium", "Se · forme les sélénoprotéines.", "Glutathion peroxydase (antioxydant), immunité, fertilité masculine.", "Poissons, fruits de mer, noix du Brésil, céréales.", "≈ 55 µg", "1 seule noix du Brésil : 60 à 80 µg."),
      V("Fluor", "F⁻ · dans les os et les dents.", "Émail plus résistant aux caries, minéralisation osseuse.", "Eau fluorée, poissons de mer, thé.", "3 à 4 mg", "1 tasse de thé noir : 0,3 à 0,5 mg."),
      V("Manganèse", "Mn²⁺", "Enzymes des glucides, lipides, protéines ; superoxyde dismutase ; tissus conjonctifs et os.", "Céréales complètes, noix, légumineuses, légumes verts.", "≈ 2 mg", "30 g de noisettes (≈ 1,5 mg)."),
      V("Chrome", "Cr³⁺", "Potentialise l’insuline, aide à réguler la glycémie.", "Céréales complètes, levure de bière, viande, brocoli.", "30 à 40 µg", "100 g de brocoli (≈ 15 µg), 30 g de noix (≈ 10 µg)."),
      V("Molybdène", "Mo", "Acides aminés soufrés, détoxification.", "Légumineuses, céréales, noix.", "50 à 100 µg", "100 g de lentilles (≈ 30 µg), 100 g de pois chiches (≈ 40 µg).")
    ] }
  ];
  explorer($("#chips"), $("#panel"), GROUPS);

  /* ---------------- Absorption ---------------- */
  const ABS = {
    lipo: { steps: ["Sels biliaires", "Micelles", "Bordure en brosse", "Chylomicrons", "Lymphe", "Sang"], txt: "Les sels biliaires émulsionnent les graisses et forment des <b>micelles</b> qui portent les vitamines A, D, E, K jusqu’aux entérocytes. Elles repartent dans les chylomicrons, par la <b>voie lymphatique</b> (canal thoracique, veine sous-clavière gauche). Le foie stocke surtout A et D." },
    hydro: { steps: ["Phase aqueuse", "Transporteurs", "Sang", "Urines (excès)"], txt: "Pas besoin de graisses : elles passent <b>directement dans le sang</b>. La vitamine C utilise les transporteurs <b>SVCT1 et SVCT2</b>. Les vitamines B passent par des transporteurs, puis deviennent des coenzymes. L’excès part dans les urines : il faut des apports réguliers." },
    b12: { steps: ["Estomac : facteur intrinsèque", "Complexe protégé", "Iléon", "Récepteurs", "Sang (transcobalamine II)"], txt: "La B12 se lie au <b>facteur intrinsèque</b> sécrété par les cellules pariétales de l’estomac (qui font aussi l’acide chlorhydrique). Le complexe résiste à la digestion et est absorbé dans l’<b>iléon</b>. Sans facteur intrinsèque (chirurgie gastrique), la B12 n’est presque plus absorbée." },
    mine: { steps: ["Acidité gastrique", "Forme ionisée", "Transport passif ou actif", "Sang"], txt: "Les minéraux sont absorbés sous forme d’<b>ions</b>. Calcium et magnésium : passage passif si l’apport est élevé, transport actif (stimulé par la vitamine D) s’il est faible. Le sodium est transporté avec le glucose : c’est le principe des <b>solutions de réhydratation</b> (sel + sucre)." }
  };
  seg($("#abs-seg"), [{ id: "lipo", label: "Liposolubles" }, { id: "hydro", label: "Hydrosolubles" }, { id: "b12", label: "Vitamine B12" }, { id: "mine", label: "Minéraux" }], "lipo", k => {
    const a = ABS[k];
    $("#abs-body").innerHTML = `<div class="card ${k === "mine" ? "min" : "vit"}" style="gap:12px"><div class="chain">${a.steps.map(s => `<span>${s}</span>`).join("<i>→</i>")}</div><p>${a.txt}</p></div>`;
  });

  /* ---------------- Besoins ---------------- */
  const NEEDS = {
    vit: [["Vitamine A", "900 / 700", "µg (H / F)"], ["Vitamine D", "5–15", "µg"], ["Vitamine E", "15 / 12", "mg (H / F)"], ["Vitamine K", "55–70", "µg"], ["Vitamine C", "110", "mg"], ["B1", "1,1–1,3", "mg"], ["B2", "1,5", "mg"], ["B3", "14–16", "mg"], ["B5", "5", "mg"], ["B6", "1,3–1,5", "mg"], ["B8", "30–50", "µg"], ["B9", "330", "µg"], ["B12", "4", "µg"]],
    macro: [["Calcium", "≈ 900", "mg"], ["Phosphore", "≈ 700", "mg"], ["Magnésium", "300–400", "mg"], ["Sodium", "max 2", "g (5 g de sel)"], ["Potassium", "≈ 3 500", "mg"], ["Chlore", "≈ 2 300", "mg"]],
    oligo: [["Fer", "11 / 11–16", "mg (H / F)"], ["Zinc", "7–10", "mg"], ["Iode", "≈ 150", "µg"], ["Sélénium", "≈ 55", "µg"], ["Fluor", "3–4", "mg"], ["Cuivre", "≈ 1", "mg"], ["Cobalt", "2–3", "µg"], ["Manganèse", "≈ 2", "mg"], ["Chrome", "30–40", "µg"], ["Molybdène", "50–100", "µg"]]
  };
  seg($("#need-seg"), [{ id: "vit", label: "Vitamines", cls: "" }, { id: "macro", label: "Macrominéraux" }, { id: "oligo", label: "Oligo-éléments" }], "vit", k => {
    const cls = k === "vit" ? "vit" : "min";
    $("#need-bars").innerHTML = `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr))">${NEEDS[k].map(([n, v, u]) => `<div class="${cls}" style="background:var(--s);border-radius:12px;padding:10px 12px"><span class="tag">${n}</span><div class="big" style="font-size:1.5rem">${v} <small>${u}</small></div></div>`).join("")}</div>`;
  });

  window.Fiches.hbars($("#fer-bars"), [
    { label: "Homme de plus de 18 ans", v: 11, cls: "min" },
    { label: "Femme de plus de 18 ans", sub: "11 si pertes faibles ou normales, 16 si élevées", v: [11, 16], cls: "min" },
    { label: "Femme enceinte", v: 27, cls: "min" },
    { label: "Enfant de 3 à 17 ans", v: [7, 14], cls: "min" }
  ], { unit: "mg/j" });

  // Calculateur calcium : portions citées dans le cours
  const CA = [["Lait", "250 mL", 300], ["Yaourt nature", "125 g", 150], ["Emmental", "30 g", 250], ["Eau riche en calcium", "1 L (Hépar, Contrex)", 500]];
  const qty = [1, 1, 0, 0];
  function renderCa() {
    $("#ca-in").innerHTML = CA.map(([n, p, mg], i) => `<div class="stepper"><div><b>${n}</b><small>${p} · <span>${mg} mg</span></small></div><div class="ctrl"><button type="button" data-i="${i}" data-d="-1" aria-label="Retirer une portion de ${n}">−</button><output data-nohide>${qty[i]}</output><button type="button" data-i="${i}" data-d="1" aria-label="Ajouter une portion de ${n}">+</button></div></div>`).join("");
    const total = CA.reduce((s, c, i) => s + c[2] * qty[i], 0), pct = Math.round(total / 900 * 100);
    const scale = Math.max(total, 900);
    $("#ca-out").innerHTML = `<span class="tag">Total du jour</span><div class="big">${fmt(total)} <small>mg sur 900</small></div>
      <div class="stack hideable" style="--m:var(--min-m);--c:var(--min)">${CA.map((c, i) => qty[i] ? `<div style="flex:0 0 ${(c[2] * qty[i] / scale * 100).toFixed(1)}%">${c[0]}</div>` : "").join("")}<div class="target" style="left:${(900 / scale * 100).toFixed(1)}%"></div></div>
      <p>${total >= 900 ? `Objectif atteint (${pct} %).` : `Il manque ${900 - total} mg (${pct} % de l’objectif).`} « Avec trois produits laitiers par jour, on atteint facilement les 900 mg. »</p>`;
  }
  $("#ca-in").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const i = +b.dataset.i; qty[i] = Math.max(0, Math.min(6, qty[i] + +b.dataset.d)); renderCa();
  });
  renderCa();

  /* ---------------- Sources ---------------- */
  const FOODS = [
    ["Fruits et légumes", "vit", "Vitamine C, folates, bêta-carotène, potassium. Varier les <b>couleurs</b>. Cru : préserve C et folates ; cuisson douce + un peu de gras : mieux pour le bêta-carotène."],
    ["Viande et abats", "min", "Fer héminique, vitamines B dont la <b>B12</b>. Le foie concentre vitamine A, fer et cuivre."],
    ["Poissons", "min", "Maigres : iode, sélénium. Gras : <b>vitamine D</b>. Coquillages : zinc, cuivre, sélénium."],
    ["Œufs", "vit", "Jaune riche en vitamine A, folates, B12, sélénium."],
    ["Produits laitiers", "min", "<b>Calcium</b> bien absorbé, B2, B12, phosphore."],
    ["Céréales complètes", "min", "B1, B3, B6, magnésium, zinc, fer. Trempage, germination et levain réduisent les phytates."],
    ["Légumineuses", "min", "Folates, fer non héminique, magnésium, potassium, cuivre, manganèse."],
    ["Oléagineux et graines", "vit", "Vitamine E (30 g d’amandes ≈ 60 % du besoin). Amandes : Mg ; sésame : Ca ; courge : Zn ; noix du Brésil : Se."],
    ["Huiles végétales", "vit", "Vitamine E (tournesol, colza, soja). Un filet d’huile aide à absorber A, D, E, K des autres aliments."]
  ];
  $("#foods").innerHTML = FOODS.map(([n, c, p]) => `<div class="card ${c}"><h3>${n}</h3><p>${p}</p></div>`).join("");

  /* ---------------- Évaluer : signes ---------------- */
  const SIGNS = [["Pâleur", "Carence en fer, vitamine B9 ou B12."], ["Fatigue, baisse de concentration", "Carence en fer, magnésium ou vitamines B."], ["Trouble de la vision", "Carence en vitamine A."], ["Fragilité osseuse", "Carence en vitamine D ou calcium."], ["Douleurs musculaires", "Carence en vitamine D ou calcium."], ["Peau sèche et squameuse", "Carence en vitamine A ou zinc."], ["Chute de cheveux, ongles cassants", "Carence en fer, zinc ou sélénium."], ["Lésions aux commissures des lèvres", "Carence en vitamines B, surtout B2 et B6."], ["Taches blanches ou brunes sur les dents", "<b>Excès</b> de fluor."], ["Maux de tête, irritation, peau très sèche", "<b>Excès</b> de vitamine A."]];
  explorer($("#sign-chips"), $("#sign-panel"), [{ cls: "ink", label: "", items: SIGNS.map(([n, r]) => ({ name: n, rows: [["Évoque", r], ["Et ensuite", "Compléter par l’analyse de l’alimentation et, si besoin, une prise de sang."]] })) }]);

  /* ---------------- Cas pratique : Mathilde ---------------- */
  const DAYS = {
    j1: [["Petit-déjeuner", "Café noir, 2 biscottes, un peu de confiture"], ["Déjeuner", "Salade laitue, tomate, concombre, ½ boîte de thon, filet d’huile d’olive ; 2 tranches de pain blanc ; yaourt nature"], ["Collation", "Café, 2 petits biscuits secs"], ["Dîner", "Pâtes blanches au pesto, parmesan, verre d’eau"], ["Boissons", "3 cafés, 1 thé, ≈ 0,5 L d’eau"]],
    j2: [["Petit-déjeuner", "Café noir, pain de mie beurré"], ["Déjeuner", "Sandwich baguette au fromage, yaourt nature"], ["Collation", "Café, poignée de chips"], ["Dîner", "Riz blanc, légumes surgelés (carottes, petits pois, maïs), poisson pané, soda"], ["Boissons", "4 cafés, 1 soda, peu d’eau"]],
    j3: [["Petit-déjeuner", "Café noir, petit biscuit industriel"], ["Déjeuner", "Salade laitue, tomates, concombre, maïs, quelques pois chiches ; 2 tranches de pain blanc ; yaourt aux fruits"], ["Collation", "Café, barre chocolatée"], ["Dîner", "Soupe de légumes en brique, croûtons, pain blanc, fromage"], ["Boissons", "4 cafés, 1 thé, ≈ 0,7 L d’eau"]]
  };
  seg($("#day-seg"), [{ id: "j1", label: "Jour 1" }, { id: "j2", label: "Jour 2" }, { id: "j3", label: "Jour 3" }], "j1", k => {
    $("#days").innerHTML = DAYS[k].map(([w, t]) => `<div class="card meal"><span class="when">${w}</span><span class="what" style="font-size:1rem">${t}</span></div>`).join("");
  });
})();
