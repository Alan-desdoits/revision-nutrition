/* ==========================================================================
   Cours : Macronutriments
   Source : documents/finis/Macronutriments.docx
   Toutes les valeurs viennent du cours. Le masquage des chiffres est géré
   automatiquement par assets/js/fiches.js, même pour le contenu rendu ici.
   ========================================================================== */
(function () {
  const { $, $$, NAMES, fmt, pic } = window.Fiches;

  /* ---------------- Bases : énergie par gramme ---------------- */
  const ENERGY = [["glu", "Glucides", 4], ["pro", "Protéines", 4], ["lip", "Lipides", 9], ["eau", "Eau, fibres", 0]];
  const eMax = Math.max(...ENERGY.map(e => e[2]));
  $("#energy").innerHTML = ENERGY.map(([k, n, v]) => `<div class="bar ${k}"><span class="lab">${n}</span><div class="track hideable">${v
    ? `<div class="fill" style="width:${v / eMax * 100}%">${v} kcal</div>` : `<span class="zero">${v} kcal</span>`}</div></div>`).join("");

  /* ---------------- Explorer ---------------- */
  const EX = {
    glu: [
      ["Glucose", "hex1", "Monosaccharide (ose)", "Carburant principal des cellules et du cerveau.", "Issu de la digestion de l’amidon et des sucres.", "Le foie maintient la glycémie vers 0,8 g/L."],
      ["Fructose", "hex1", "Monosaccharide (ose)", "Source d’énergie, transformé en glucose par le foie.", "Fruits, miel.", "Absorbé par GLUT5, en diffusion facilitée."],
      ["Galactose", "hex1", "Monosaccharide (ose)", "Converti en glucose par le foie.", "Issu de la digestion du lactose.", "Absorbé par SGLT1, avec le sodium."],
      ["Saccharose", "hex2", "Disaccharide : glucose + fructose", "Énergie rapide.", "Sucre de table, canne, betterave.", "Coupé par la saccharase."],
      ["Lactose", "hex2", "Disaccharide : glucose + galactose", "Sucre du lait.", "Lait et produits laitiers.", "Coupé par la lactase."],
      ["Maltose", "hex2", "Disaccharide : glucose + glucose", "Intermédiaire de la digestion de l’amidon.", "Céréales germées.", "Coupé par la maltase."],
      ["Amidon", "hexN", "Polysaccharide digestible", "Principal glucide végétal, énergie progressive.", "Céréales, pain, pâtes, riz, pommes de terre, légumineuses.", "Commence à être coupé dès la bouche."],
      ["Glycogène", "hexN", "Polysaccharide de réserve animale", "Réserve rapide de glucose.", "Foie et muscles : 300 à 500 g au total.", "Celui du muscle ne sert qu’au muscle."],
      ["Fibres", "hexN", "Polysaccharides non digestibles", "Transit, satiété, équilibre glycémique, microbiote.", "Cellulose (végétaux), pectine (fruits), inuline (chicorée).", "25 à 30 g par jour chez l’adulte."]
    ],
    pro: [
      ["Acides aminés", "amine", "Unités de base des protéines", "Une vingtaine, enchaînés par des liaisons peptidiques.", "Toutes les protéines alimentaires.", "9 sont essentiels : leucine, isoleucine, valine, lysine, méthionine, phénylalanine, tryptophane, thréonine, histidine."],
      ["Prot. animales", "beads", "Protéines complètes", "Couvrent tous les acides aminés essentiels.", "Viande, poisson, œufs, laitages.", "Digestibilité 90 à 95 %."],
      ["Prot. végétales", "beads", "Souvent incomplètes", "Associées, elles se complètent.", "Légumineuses, céréales, oléagineux.", "Digestibilité 70 à 85 %."],
      ["Soja", "beads", "Exception végétale", "Protéines complètes, proches des animales.", "Tofu, tempeh, boissons au soja.", "Comme le quinoa et l’amarante."],
      ["Collagène", "beads", "Protéine fibreuse de structure", "Solidité et élasticité des tissus.", "Peau, os, tissu conjonctif.", "Exemple du rôle structural."],
      ["Hémoglobine", "beads", "Protéine de transport", "Transporte l’oxygène dans le sang.", "Globules rouges.", "Exemple de structure quaternaire."]
    ],
    lip: [
      ["Triglycérides", "tri", "Glycérol + 3 acides gras", "Principale réserve d’énergie du tissu adipeux.", "≈ 95 % des graisses consommées.", "Mono- et diglycérides sont des intermédiaires de digestion."],
      ["Saturés", "sat", "Acides gras à chaîne droite", "Énergie, mais un excès fait monter le LDL.", "Beurre, viandes grasses, fromages, huile de coco.", "Moins de 12 % de l’AET."],
      ["Oméga-9", "insat", "Mono-insaturés", "Protecteurs pour le cœur.", "Huile d’olive, avocat, amandes.", "Doivent constituer une part importante des graisses."],
      ["Oméga-6", "insat", "Polyinsaturés, dont l’acide linoléique", "Acide gras essentiel.", "Huiles de tournesol, maïs, soja.", "À équilibrer avec les oméga-3."],
      ["Oméga-3", "insat", "Polyinsaturés, dont l’acide α-linolénique", "Acide gras essentiel, protège cœur et cerveau.", "Poissons gras, huile de colza, noix, lin.", "Souvent insuffisants dans l’alimentation."],
      ["Trans", "sat", "Issus de l’hydrogénation industrielle", "Augmentent le risque cardiovasculaire.", "Biscuits, viennoiseries, margarines anciennes.", "À éviter autant que possible."],
      ["Phospholipides", "tri", "Glycérol + 2 acides gras + phosphate", "Forment la bicouche des membranes ; émulsifiants.", "Jaune d’œuf, soja (lécithine).", "Amphiphiles : une tête qui aime l’eau, deux queues qui la fuient."],
      ["Cholestérol", "chol", "Lipide de la famille des terpénoïdes", "Fluidité des membranes ; précurseur de la vitamine D, de la bile, des hormones stéroïdes.", "Surtout fabriqué par le foie ; viandes, œufs, laitages.", "Indispensable : c’est son déséquilibre qui pose problème."],
      ["LDL", "lipo", "Lipoprotéine « mauvais cholestérol »", "Distribue le cholestérol aux cellules.", "Circulation sanguine.", "En excès, se dépose dans les artères : athérosclérose."],
      ["HDL", "lipo", "Lipoprotéine « bon cholestérol »", "Ramène le cholestérol en trop vers le foie.", "Circulation sanguine.", "Un bon équilibre LDL/HDL est protecteur."]
    ],
    eau: [
      ["Eau métabolique", "drop", "Eau produite par l’organisme", "Complète les boissons et les aliments.", "Oxydation des nutriments : 100 g de lipides donnent ≈ 107 g d’eau.", "0,2 à 0,3 L par jour."],
      ["Eau des aliments", "drop", "Eau contenue dans ce qu’on mange", "Couvre une bonne part des besoins.", "Melon, pastèque, concombre, tomate, laitages.", "0,7 à 1 L par jour."]
    ]
  };
  $("#chips").innerHTML = Object.entries(EX).map(([k, items]) =>
    `<div class="cg ${k}"><span class="tag">${NAMES[k]}</span>${items.map((it, i) => `<button class="chip" data-k="${k}" data-i="${i}" aria-pressed="false">${it[0]}</button>`).join("")}</div>`).join("");
  $("#chips").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$(".chip", $("#chips")).forEach(x => x.setAttribute("aria-pressed", x === b));
    const k = b.dataset.k, [name, p, what, role, where, tip] = EX[k][b.dataset.i];
    const panel = $("#panel");
    panel.className = "panel " + k;
    panel.innerHTML = `<div class="pic"><svg></svg></div><div><span class="tag">${NAMES[k]}</span><h3>${name}</h3>
      <dl><dt>C’est quoi</dt><dd>${what}</dd><dt>Rôle</dt><dd>${role}</dd><dt>Où</dt><dd>${where}</dd><dt>À retenir</dt><dd><b>${tip}</b></dd></dl></div>`;
    pic(panel.querySelector("svg"), p);
  });

  /* ---------------- Digestion ---------------- */
  const DIG = {
    glu: {
      st: [["Bouche", ["Amylase salivaire"], "Commence à couper l’amidon, vite inactivée par l’acidité.", "Amidon → maltose"],
        ["Estomac", [], "Pas de vraie digestion : un simple brassage mécanique.", "Brassage"],
        ["Intestin grêle", ["Amylase pancréatique", "Maltase", "Lactase", "Saccharase"], "Les enzymes de la bordure en brosse terminent le découpage.", "Glucose, fructose, galactose"],
        ["Absorption", ["SGLT1", "GLUT5"], "Glucose et galactose avec le sodium, fructose par diffusion facilitée.", "Veine porte"],
        ["Foie", ["Tri"], "Convertit fructose et galactose en glucose, maintient la glycémie.", "Glycémie ≈ 0,8 g/L"]],
      after: "Ensuite, le foie décide",
      cards: [["Glycogenèse", "Stocker le glucose en glycogène : la réserve rapide."], ["Glycogénolyse", "Libérer le glucose des réserves entre les repas."], ["Néoglucogenèse", "Fabriquer du glucose à partir d’acides aminés, lactate, glycérol."], ["Lipogenèse", "Transformer l’excès de glucose en graisses : la réserve longue."]],
      note: "Seuls les <b>monosaccharides</b> traversent la paroi de l’intestin. Amidon et glycogène sont trop gros."
    },
    pro: {
      st: [["Bouche", [], "La mastication fragmente, sans digestion chimique des protéines.", "Morceaux plus petits"],
        ["Estomac", ["Acide chlorhydrique", "Pepsine"], "L’acide dénature les protéines, la pepsine les coupe.", "Polypeptides"],
        ["Intestin grêle", ["Trypsine", "Chymotrypsine", "Carboxypeptidases", "Peptidases"], "Lieu principal de la dégradation.", "Acides aminés, di- et tripeptides"],
        ["Absorption", ["Transport sodium-dépendant"], "Les petits peptides sont coupés dans l’entérocyte.", "Veine porte"],
        ["Foie", ["Répartition"], "Distribue les acides aminés selon les besoins.", "Synthèse, conversion, énergie"]],
      after: "Ensuite, le foie répartit",
      cards: [["Synthèse", "Albumine, facteurs de coagulation."], ["Transamination", "Changer un acide aminé en un autre, ou en neurotransmetteur (tryptophane → sérotonine)."], ["Désamination", "Retirer l’azote quand l’énergie manque : le reste sert de carburant."], ["Urée", "L’azote libéré devient de l’urée, éliminée par les reins."]],
      note: "Il n’existe <b>aucune réserve</b> de protéines : un manque se paie sur la masse musculaire."
    },
    lip: {
      st: [["Bouche", ["Lipase linguale"], "Un début de dégradation, très limité.", "Presque rien"],
        ["Estomac", ["Lipase gastrique"], "Encore limité.", "Presque rien"],
        ["Intestin grêle", ["Bile", "Lipase pancréatique"], "La bile émulsionne, la lipase coupe, les micelles transportent.", "Acides gras + monoglycérides"],
        ["Absorption", ["Chylomicrons"], "Triglycérides reconstruits dans l’entérocyte et emballés.", "Lymphe, puis sang"],
        ["Tissus", ["VLDL", "LDL", "HDL"], "Utilisés comme carburant ou stockés.", "Énergie ou réserve"]],
      after: "Ensuite, deux voies",
      cards: [["Carburant", "Les acides gras sont oxydés dans les cellules pour produire de l’ATP."], ["Stockage", "Triglycérides dans le tissu adipeux : la réserve la plus concentrée."], ["Jeûne", "Le foie fabrique des corps cétoniques, carburant de secours du cerveau."]],
      note: "Les lipides passent par la <b>lymphe</b>, pas par la veine porte : ils ne se mélangent pas à l’eau du sang."
    }
  };
  const KEY_STEP = 2; // l'intestin grêle : la vraie digestion, pour les trois
  let dig = "glu";
  function renderDigestion() {
    const d = DIG[dig];
    $("#dig-seg").className = "seg " + dig;
    $("#dig-seg").innerHTML = ["glu", "pro", "lip"].map(k => `<button data-k="${k}" aria-pressed="${k === dig}">${NAMES[k]}</button>`).join("");
    $("#pipe").className = "pipe " + dig;
    $("#pipe").innerHTML = d.st.map(([n, enz, p, out], i) => `<div class="stn ${i === KEY_STEP ? "key" : ""}"><span class="num-step" data-nohide>Étape ${i + 1}</span><h4>${n}</h4>${i === KEY_STEP ? '<span class="badge">La vraie digestion</span>' : ""}
      ${enz.length ? `<div class="enz">${enz.map(e => `<span>${e}</span>`).join("")}</div>` : ""}<p>${p}</p><div class="out">${out}</div></div>`).join("");
    $("#after-title").className = "sec " + dig;
    $("#after-title").textContent = d.after;
    $("#after").innerHTML = d.cards.map(([h, p]) => `<div class="card tint ${dig}"><h3>${h}</h3><p>${p}</p></div>`).join("");
    $("#dig-note").innerHTML = `<span>${d.note}</span>`;
  }
  $("#dig-seg").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { dig = b.dataset.k; renderDigestion(); } });
  renderDigestion();

  /* ---------------- Besoins : calculateur relié aux visuels ----------------
     État unique : poids, AET, profil. Chaque changement met à jour
     les résultats, l'échelle des profils et l'exemple d'assiette. */
  const PROFILS = [
    { id: "adulte", n: "Adulte", s: "en bonne santé", p: [0.8, 1.2] },
    { id: "ado", n: "Enfant, ado", s: "croissance", p: [1, 1.5], lip: [35, 40] },
    { id: "agee", n: "Personne âgée", s: "contre la sarcopénie", p: [1, 1.2] },
    { id: "sport", n: "Sportif", s: "endurance, musculation", p: [1.2, 2] },
    { id: "medical", n: "Situation médicale", s: "brûlures, chirurgie, sous suivi", p: [1.5, 2] },
    { id: "enceinte", n: "Grossesse", s: "adulte + 10 g/j", p: [0.8, 1.2], add: [10, 10], row: "adulte" },
    { id: "allait", n: "Allaitement", s: "adulte + 15 à 20 g/j", p: [0.8, 1.2], add: [15, 20], row: "adulte" }
  ];
  const state = { poids: 70, aet: 2000, profil: "adulte" };

  function besoins({ poids, aet, profil }) {
    const p = PROFILS.find(x => x.id === profil), add = p.add || [0, 0], lip = p.lip || [30, 35];
    return {
      p,
      pro: [Math.round(poids * p.p[0] + add[0]), Math.round(poids * p.p[1] + add[1])],
      eau: [poids * 0.030, poids * 0.035],
      glu: [Math.round(aet * 0.40 / 4), Math.round(aet * 0.55 / 4)],
      lip: [Math.round(aet * lip[0] / 100 / 9), Math.round(aet * lip[1] / 100 / 9)], lipPct: lip,
      sucres: [Math.round(aet * 0.05 / 4), Math.round(aet * 0.10 / 4)]
    };
  }
  const rng = (a, b, d = 0) => a === b ? fmt(a, d) : `${fmt(a, d)}–${fmt(b, d)}`;

  // Profils (boutons)
  $("#profils").innerHTML = PROFILS.map(p => `<button data-p="${p.id}" aria-pressed="false">${p.n}</button>`).join("");
  $("#profils").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { state.profil = b.dataset.p; update(); } });

  // Échelle des profils en g/kg (lignes cliquables)
  const MAX = 2.2, pc = v => (v / MAX * 100).toFixed(2) + "%";
  const ROWS = PROFILS.filter(p => !p.row);
  $("#ranges").style.setProperty("--steps", MAX / 0.5);
  $("#ranges").innerHTML = ROWS.map(p => `<button class="rg" data-p="${p.id}" aria-pressed="false"><span class="lab">${p.n}<small>${p.s}</small></span><span class="tr hideable" style="--steps:${MAX / 0.5}"><span class="seg-bar" style="left:${pc(p.p[0])};width:${pc(p.p[1] - p.p[0])}">${rng(p.p[0], p.p[1], 1)}</span></span></button>`).join("") +
    `<div class="axis" aria-hidden="true" data-nohide><span></span><div class="ticks">${[0, 0.5, 1, 1.5, 2].map(v => `<span style="left:${pc(v)}">${fmt(v)}</span>`).join("")}</div></div>`;
  $("#ranges").addEventListener("click", e => {
    const b = e.target.closest(".rg"); if (b) { state.profil = b.dataset.p; update(); }
  });

  // Aliments cités dans le cours (g de protéines par portion)
  const PORTIONS = [
    ["100 g de poulet cuit", 25], ["100 g de poisson", 20], ["2 œufs", 12], ["100 g de lentilles cuites", 9],
    ["1 verre de lait", 8], ["30 g d’amandes", 6], ["2 tranches de pain complet", 6], ["1 yaourt nature", 5]
  ];
  // Cherche une journée variée (0 à 2 fois chaque portion) proche de la cible :
  // l'écart à la cible compte le plus, puis on préfère des aliments différents.
  function assiette(cible) {
    let best = null;
    const n = PORTIONS.length, total = 3 ** n;
    for (let code = 0; code < total; code++) {
      let c = code, g = 0, items = 0, kinds = 0; const q = [];
      for (let i = 0; i < n; i++) { const k = c % 3; c = (c - k) / 3; q.push(k); g += k * PORTIONS[i][1]; items += k; if (k) kinds++; }
      const score = Math.abs(g - cible) * 3 + (items - kinds) * 4 - kinds * 1.5;
      if (!best || score < best.score) best = { score, g, q };
    }
    return best;
  }

  function renderCalc() {
    const b = besoins(state);
    $("#poids-o").textContent = state.poids + " kg";
    $("#aet-o").textContent = fmt(state.aet) + " kcal";
    $$("button", $("#profils")).forEach(x => x.setAttribute("aria-pressed", x.dataset.p === state.profil));
    const lipNote = b.p.lip ? `${b.lipPct[0]}–${b.lipPct[1]} % de l’AET (enfant)` : "30–35 % de l’AET";
    $("#calc-out").innerHTML = [
      ["pro", "Protéines", `${rng(b.pro[0], b.pro[1])} <small>g/j</small>`, `${rng(b.p.p[0], b.p.p[1], 1)} g/kg × ${state.poids} kg${b.p.add ? ` + ${rng(b.p.add[0], b.p.add[1])} g` : ""}`],
      ["eau", "Eau", `${rng(b.eau[0], b.eau[1], 1)} <small>L/j</small>`, `30–35 mL/kg, boissons et aliments`],
      ["glu", "Glucides", `${rng(b.glu[0], b.glu[1])} <small>g/j</small>`, `40–55 % de ${fmt(state.aet)} kcal`],
      ["lip", "Lipides", `${rng(b.lip[0], b.lip[1])} <small>g/j</small>`, lipNote],
      ["glu", "Sucres ajoutés", `&lt; ${b.sucres[1]} <small>g/j</small>`, `idéal &lt; ${b.sucres[0]} g (5 %)`],
      ["glu", "Fibres", `25–30 <small>g/j</small>`, `repère adulte`]
    ].map(([k, t, v, s]) => `<div class="${k}"><span class="tag">${t}</span><span class="big">${v}</span><p>${s}</p></div>`).join("");
  }

  function renderRanges() {
    const p = PROFILS.find(x => x.id === state.profil), row = p.row || p.id;
    $$(".rg", $("#ranges")).forEach(x => x.setAttribute("aria-pressed", x.dataset.p === row));
  }

  function renderPlate() {
    const b = besoins(state), cible = Math.round((b.pro[0] + b.pro[1]) / 2), a = assiette(cible);
    const scale = Math.max(a.g, b.pro[1]) * 1.04;
    const parts = [];
    a.q.forEach((k, i) => { for (let j = 0; j < k; j++) parts.push(PORTIONS[i]); });
    $("#plate-title").textContent = `À quoi ressemblent ${cible} g de protéines ?`;
    $("#plate").innerHTML = parts.map(([n, g]) => `<div style="flex:0 0 ${(g / scale * 100).toFixed(2)}%" title="${n} : ${g} g">${g} g</div>`).join("") +
      `<div class="target" style="left:${(cible / scale * 100).toFixed(2)}%" title="Cible : ${cible} g"></div>`;
    $("#plate-leg").innerHTML = a.q.map((k, i) => k ? `<span><span data-nohide>${k > 1 ? k + " × " : ""}${PORTIONS[i][0]}</span> <b>${k * PORTIONS[i][1]} g</b></span>` : "").join("");
    const ecart = a.g - cible;
    $("#plate-txt").innerHTML = `Exemple de journée : <b>${a.g} g</b> de protéines, pour un besoin de <b>${rng(b.pro[0], b.pro[1])} g</b> <span data-nohide>(${PROFILS.find(x => x.id === state.profil).n.toLowerCase()}, ${state.poids} kg)</span>. ` +
      (ecart === 0 ? "Pile la cible." : ecart > 0 ? `${ecart} g au-dessus du milieu de la fourchette.` : `${-ecart} g sous le milieu de la fourchette.`) +
      ` Le trait pointillé marque la cible.`;
  }

  function update() { renderCalc(); renderRanges(); renderPlate(); }
  $("#poids").addEventListener("input", e => { state.poids = +e.target.value; update(); });
  $("#aet").addEventListener("input", e => { state.aet = +e.target.value; update(); });
  update();

  /* ---------------- Sources ---------------- */
  const FOODS = [
    ["Céréales et féculents", "7–14 g prot./100 g crus", ["glu", "pro"], "Amidon, fibres si complets. Pauvres en lysine."],
    ["Légumineuses", "8–10 g prot./100 g cuits", ["pro", "glu"], "Lentilles, pois chiches, haricots. Fibres, fer, magnésium."],
    ["Fruits et légumes", "riches en eau", ["glu", "eau"], "Sucres simples naturels, fibres, eau."],
    ["Viandes et volailles", "20–25 g prot./100 g", ["pro", "lip"], "Protéines complètes, fer héminique. Rouges et transformées : modérer."],
    ["Poissons", "18–22 g prot./100 g", ["pro", "lip"], "Les gras (saumon, sardine) apportent des oméga-3."],
    ["Œufs", "6 g prot. par œuf", ["pro", "lip"], "La protéine de référence. Lécithine dans le jaune."],
    ["Produits laitiers", "8 g prot. par verre de lait", ["pro", "lip", "glu"], "Calcium, lactose. Beurre et crème : graisses saturées."],
    ["Huiles", "100 % lipides", ["lip"], "Olive : oméga-9. Colza, noix : oméga-3. Tournesol : oméga-6."],
    ["Oléagineux", "15–25 g prot./100 g", ["lip", "pro"], "Amandes, noix, graines : graisses insaturées, fibres."],
    ["Produits transformés", "à limiter", ["glu", "lip"], "Sucres ajoutés, graisses saturées et trans cachées."]
  ];
  $("#foods").innerHTML = FOODS.map(([n, q, ks, p], i) => `<div class="card food ${i === FOODS.length - 1 ? "bad" : ""}"><h3>${n}</h3><span class="q">${q}</span><p>${p}</p><div class="dots">${ks.map(k => `<i class="${k}" title="${NAMES[k]}"></i>`).join("")}</div></div>`).join("");

  /* ---------------- Excès et carences ---------------- */
  const EC = [
    ["glu", "Sucres simples, raffinés", ["Résistance à l’insuline, diabète de type 2", "Obésité, caries", "Triglycérides en hausse, HDL en baisse"], ["Fatigue, troubles de la concentration", "Moins de performance sportive", "Fonte musculaire, cétose"]],
    ["pro", "Au-delà des besoins", ["Surcharge des reins et du foie", "Moins de fibres, plus de saturés", "Excès de calories"], ["Fonte musculaire, immunité affaiblie", "Mauvaise cicatrisation, croissance ralentie", "Kwashiorkor, marasme"]],
    ["lip", "Surtout saturés et trans", ["Obésité", "Athérosclérose, infarctus, AVC", "Diabète, stéatose du foie"], ["Manque d’acides gras essentiels", "Vitamines A, D, E, K mal absorbées", "Troubles hormonaux"]],
    ["eau", "Sans électrolytes", ["Hyponatrémie : nausées, crampes, puis convulsions", "Rare : efforts extrêmes"], ["Déshydratation : soif, fatigue, maux de tête", "Voir les trois temps ci-dessous"]]
  ];
  $("#ec").innerHTML = EC.map(([k, s, trop, peu]) => `<div class="ec ${k}"><div class="who"><b>${NAMES[k]}</b><span class="tag" style="color:var(--muted)">${s}</span></div>
    <div class="card bad"><h4>Trop</h4><ul>${trop.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="card lack"><h4>Pas assez</h4><ul>${peu.map(x => `<li>${x}</li>`).join("")}</ul></div></div>`).join("");

  /* ---------------- Cas pratique ---------------- */
  const MARC = { poids: 72, profil: "sport", eauBue: 1 };
  const MEALS = [
    ["Petit-déjeuner", ["Café sucré + 2 croissants", "Sucres simples et graisses saturées dès le matin.", ["Sucres simples", "Saturés"]], ["2 tartines de pain complet, fromage blanc, un fruit", "Glucides complexes, protéines, fibres : une énergie stable.", ["Fibres", "Protéines"]]],
    ["Déjeuner", ["Steak haché-frites, yaourt sucré, soda", "Friture, sucre ajouté, peu de légumes.", ["Friture", "Soda"]], ["Poulet ou poisson, légumes, riz complet ou quinoa, yaourt nature, eau", "Assiette équilibrée, sans sucre ajouté.", ["Légumes", "Eau"]]],
    ["Goûter", ["Barre chocolatée", "Pic de glycémie puis coup de pompe.", ["Sucres simples"]], ["Un fruit + une poignée d’amandes ou de noix", "Fibres, graisses insaturées, satiété durable.", ["Insaturés", "Fibres"]]],
    ["Dîner", ["Pizza surgelée + bière", "Graisses cachées, alcool.", ["Saturés", "Alcool"]], ["Omelette aux légumes, ou poisson, riz et salade", "Simple et équilibré.", ["Protéines", "Oméga-3"]]],
    ["Hydratation", ["≈ 1 L d’eau, souvent remplacée par du soda", "Bien en dessous de ses besoins.", ["Trop peu"]], ["1,5 à 2 L d’eau de boisson, moins de soda et d’alcool", "Le reste de ses besoins vient des aliments.", ["Eau"]]]
  ];
  let ver = 0;
  function renderMeals() {
    $("#meals").innerHTML = MEALS.map(([w, ...v]) => {
      const [what, why, tags] = v[ver];
      return `<div class="card meal ${ver ? "after" : "before"}"><span class="when">${w}</span><span class="what">${what}</span><p class="why">${why}</p><div class="mini">${tags.map(t => `<span class="${ver ? "v" : "x"}">${t}</span>`).join("")}</div></div>`;
    }).join("");
    $$("button", $("#ab")).forEach(b => b.setAttribute("aria-pressed", +b.dataset.v === ver));
  }
  $("#ab").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { ver = +b.dataset.v; renderMeals(); } });
  renderMeals();

  // Besoins de Marc : mêmes formules que le calculateur
  const bm = besoins({ poids: MARC.poids, aet: 2000, profil: MARC.profil });
  $("#marc-out").innerHTML = `
    <div class="pro card"><span class="tag">Protéines</span><span class="big">${rng(bm.pro[0], bm.pro[1])} <small>g/j</small></span><p>Sportif : 1,2–2 g/kg × ${MARC.poids} kg</p></div>
    <div class="eau card"><span class="tag">Eau totale</span><span class="big">${rng(bm.eau[0], bm.eau[1], 1)} <small>L/j</small></span><p>Il ne boit qu’environ ${MARC.eauBue} L</p></div>
    <div class="card" style="justify-content:center"><p>Ces chiffres viennent du calculateur.</p><button class="chip" id="marc-calc" style="--m:var(--ink);align-self:flex-start">Ouvrir dans le calculateur →</button></div>`;
  $("#marc-calc").addEventListener("click", () => {
    state.poids = MARC.poids; state.profil = MARC.profil;
    $("#poids").value = MARC.poids; update();
    location.hash = "besoins";
  });
})();
