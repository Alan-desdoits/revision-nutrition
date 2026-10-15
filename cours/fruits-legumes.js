/* ==========================================================================
   Cours : Les fruits et les légumes
   Source : documents/finis/Les fruits et les légumes.docx
   ========================================================================== */
(function () {
  const { $, fmt, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Classification ---------------- */
  const L = (name, ex, note) => ({ name, rows: [["Exemples", ex]].concat(note ? [["À savoir", note]] : []) });
  explorer($("#cls-chips"), $("#cls-panel"), [
    { cls: "fl", label: "Légumes", items: [
      L("Bulbes", "Ail, oignon, échalote, ciboulette, poireau, ciboule, fenouil"),
      L("Feuilles", "Oseille, choux (frisé, vert, blanc, de Bruxelles, chinois), épinards, salades, cresson"),
      L("Légumes-fruits", "Courge, citrouille, courgette, pâtisson, concombre, cornichon, potiron, potimarron", "Des fruits pour le botaniste, classés légumes car pauvres en glucides simples."),
      L("Fleurs", "Chou romanesco, brocoli, chou-fleur, artichaut"),
      L("Racines", "Carotte, chou-rave, navet, céleri-rave, salsifis, radis, betterave, panais, rutabaga, gingembre, igname"),
      L("Tubercules", "Pomme de terre, topinambour, crosne, patate douce"),
      L("Tiges et côtes", "Asperge, blette, céleri branche, rhubarbe, pousse de bambou, cardon, salicorne"),
      L("Gousses et graines", "Haricots beurre, haricots verts, petits pois, fèves fraîches"),
      L("Champignons", "Champignon de Paris, shiitake, truffe, pleurote, girolle, cèpe, morille", "Classés à part : non chlorophylliens, ils ne font pas la photosynthèse."),
      L("Algues", "Les « légumes de mer », d’usage culinaire proche des légumes")
    ] },
    { cls: "sug", label: "Fruits", items: [
      L("Charnus", "Pomme, poire, pêche, cerise, abricot, fraise"),
      L("Agrumes", "Orange, citron, mandarine, pamplemousse (genre <i>Citrus</i>)"),
      L("Exotiques", "Banane, mangue, ananas, papaye, kiwi"),
      L("Fruits rouges", "Fraise, framboise, myrtille, groseille", "Riches en pigments antioxydants."),
      L("Fruits secs", "Noix, noisette, amande, pistache", "Partie comestible déshydratée à maturité. Plus énergétiques.")
    ] }
  ]);

  hbars($("#water-bars"), [
    { label: "Concombre, salade, courgette", v: 95, text: "&gt; 95 %", cls: "eau" },
    { label: "Pastèque, melon, tomate", v: 90, text: "≈ 90 %", cls: "eau" },
    { label: "Pomme, poire", v: [80, 85], cls: "eau" }
  ], { max: 100, unit: "%" });

  /* ---------------- Couleurs et antioxydants ---------------- */
  const COLORS = {
    orange: ["Caroténoïdes", "Carottes, tomates, abricots, potirons", "fl"],
    rouge: ["Anthocyanes", "Fraise, framboise, myrtille, mûre, chou rouge", "sug"],
    vert: ["Polyphénols et flavonoïdes", "Raisin, pomme, oignon rouge, thé vert", "fl"],
    blanc: ["Composés soufrés", "Ail, oignon, choux", "ink"]
  };
  seg($("#color-seg"), [{ id: "orange", label: "Orange" }, { id: "rouge", label: "Rouge et violet" }, { id: "vert", label: "Polyphénols" }, { id: "blanc", label: "Ail, oignon, choux" }], "orange", k => {
    const [n, ex, c] = COLORS[k];
    $("#color-out").className = "card tint " + c;
    $("#color-out").innerHTML = `<h3>${n}</h3><p>${ex}</p><p>« Plus ton assiette est colorée, plus elle est riche en antioxydants. »</p>`;
  });

  /* ---------------- Teneur en sucre des fruits ---------------- */
  const FRUITS = [
    ["Banane, raisin noir muscat", 20, 20, "assez"], ["Mirabelle", 18, 18.5, "assez"], ["Raisin chasselas", 17, 17.5, "assez"],
    ["Raisin blanc, litchi, reine-claude", 16, 16.5, "assez"], ["Melon cantaloup", 15, 15.5, "assez"],
    ["Mangue, kaki", 14, 14.5, "moyen"], ["Cerise, coing, figue fraîche", 13, 13.5, "moyen"], ["Pomme gala, golden, pink lady", 12, 12.5, "moyen"],
    ["Ananas, kiwi, nectarine, fruit de la passion", 11, 11.5, "moyen"], ["Poire, myrtille, griotte, granny smith", 10, 10.9, "moyen"],
    ["Abricot, clémentine, prune, pêche, cassis", 9, 9.5, "moyen"], ["Orange, mûre, papaye, pastèque", 8, 8.5, "moyen"],
    ["Groseille, pamplemousse rose", 7, 7.75, "peu"], ["Pamplemousse jaune, fraise, framboise", 6, 6.65, "peu"], ["Groseille à maquereau", 5, 5.5, "peu"],
    ["Citron vert", 3, 3.35, "acide"], ["Citron jaune", 0, 1, "acide"]
  ];
  const CATS = { all: "Tous", assez: "Assez sucrés (15–20 %)", moyen: "Moyennement (8–15 %)", peu: "Peu sucrés (5–8 %)", acide: "Acides (&lt; 3 %)" };
  let cat = "all";
  function drawSugar() {
    hbars($("#sug-bars"), FRUITS.filter(f => cat === "all" || f[3] === cat).map(f => ({ label: f[0], v: f[1] === f[2] ? f[1] : [f[1], f[2]], cls: "sug", text: f[0] === "Citron jaune" ? "&lt; 1 %" : undefined })), { max: 20, unit: "%" });
  }
  seg($("#sug-seg"), Object.entries(CATS).map(([id, label]) => ({ id, label, cls: "sug" })), "all", k => { cat = k; drawSugar(); });

  // Portion : glucides = teneur moyenne × grammes
  $("#fruit").innerHTML = FRUITS.map((f, i) => `<option value="${i}" ${i === 0 ? "selected" : ""}>${f[0]}</option>`).join("");
  function portion() {
    const f = FRUITS[+$("#fruit").value], g = +$("#grams").value, mid = (f[1] + f[2]) / 2;
    $("#grams-o").textContent = g + " g";
    const glu = Math.round(mid * g / 100);
    $("#sug-out").innerHTML = `<span class="tag">Glucides apportés</span><div class="big">≈ ${glu} <small>g</small></div>
      <p>${f[0]} : ${fmt(f[1])}${f[1] !== f[2] ? "–" + fmt(f[2]) : ""} % de glucides, sur ${g} g.</p>
      <p>Repères du cours : 200 g d’un fruit assez sucré = 30 à 40 g ; 150 g d’un fruit moyennement sucré = 12 à 22 g ; 300 g d’un fruit peu sucré ≈ 20 g.</p>`;
  }
  $("#fruit").addEventListener("change", portion);
  $("#grams").addEventListener("input", portion);
  portion();

  /* ---------------- Âges ---------------- */
  const AGES = {
    enfant: ["Enfant", "Dès la diversification (4 à 6 mois) en purées et compotes. Découvrir saveurs, textures et couleurs. Le réflexe « fruits et légumes à chaque repas ». Crus, fibreux ou durs (carotte crue, maïs, chou cru) : introduits progressivement."],
    ado: ["Adolescent", "Souvent trop peu consommés, au profit du gras et du sucré. Vitamines C et B9 (vitalité, concentration), calcium, magnésium, fer (croissance). Varier les formes : soupes, gratins, sauce tomate maison, smoothies."],
    adulte: ["Adulte", "Faible densité énergétique, fibres et satiété, prévention du stress et des maladies cardiovasculaires. Au moins 5 portions, en variant couleurs et formes."],
    enceinte: ["Femme enceinte", "Vitamine B9 (système nerveux du fœtus), fer et vitamine C (anémie), fibres (constipation). Bien lavés et bien cuits : toxoplasmose et listériose."],
    agee: ["Personne âgée", "Hydratation, transit, vitamines, appétit grâce aux couleurs. Fruits mûrs, cuits ou mixés ; légumes tendres ou en potage."]
  };
  seg($("#age-seg"), Object.entries(AGES).map(([id, v]) => ({ id, label: v[0], cls: "fl" })), "enfant", k => {
    $("#age-out").innerHTML = `<h3 style="color:var(--fl)">${AGES[k][0]}</h3><p>${AGES[k][1]}</p>`;
  });

  /* ---------------- Portions du jour ---------------- */
  const por = { fruits: 1, legumes: 2 };
  function renderPor() {
    $("#por-in").innerHTML = [["fruits", "Portions de fruits", "≈ 100 g chacune, objectif 2"], ["legumes", "Portions de légumes", "≈ 100 g chacune, objectif 3"]].map(([k, n, s]) =>
      `<div class="stepper"><div><b>${n}</b><small>${s}</small></div><div class="ctrl"><button type="button" data-k="${k}" data-d="-1" aria-label="Retirer">−</button><output data-nohide>${por[k]}</output><button type="button" data-k="${k}" data-d="1" aria-label="Ajouter">+</button></div></div>`).join("");
    const n = por.fruits + por.legumes, g = n * 100;
    $("#por-out").innerHTML = `<span class="tag">Ma journée</span><div class="big">${n} <small>portions · ≈ ${g} g</small></div>
      <div class="stack3">${["fruits", "legumes"].map(k => por[k] ? `<div class="${k === "fruits" ? "sug" : "fl"}" style="flex:0 0 ${por[k] / Math.max(n, 5) * 100}%">${k === "fruits" ? "Fruits" : "Légumes"}</div>` : "").join("")}${n < 5 ? `<div style="flex:1;background:var(--bg);color:var(--muted)">manque ${5 - n}</div>` : ""}</div>
      <p>${n >= 5 ? "Objectif atteint : au moins 5 portions." : `Encore ${5 - n} portion${5 - n > 1 ? "s" : ""} pour atteindre 5.`} La répartition 2 fruits + 3 légumes n’est pas stricte : l’important, c’est la régularité et la variété.</p>`;
  }
  $("#por-in").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; por[b.dataset.k] = Math.max(0, Math.min(8, por[b.dataset.k] + +b.dataset.d)); renderPor(); });
  renderPor();

  /* ---------------- Saisons (calendriers du cours) ---------------- */
  const SEASONS = {
    printemps: [["Courgette", "Asperge", "Navet", "Épinard", "Radis", "Artichaut", "Petit pois", "Salade", "Cresson", "Concombre", "Champignon de Paris"], ["Rhubarbe", "Fraise", "Pamplemousse"]],
    ete: [["Courgette", "Maïs", "Aubergine", "Haricot vert", "Ail", "Blette", "Radis", "Artichaut", "Petit pois", "Tomate", "Salade", "Concombre", "Champignon de Paris", "Poivron", "Fenouil"], ["Abricot", "Myrtille", "Fraise", "Figue", "Cassis", "Prune", "Framboise", "Groseille", "Pêche, nectarine", "Pastèque", "Cerise", "Melon"]],
    automne: [["Brocoli", "Topinambour", "Mâche", "Navet", "Carotte", "Poireau", "Chou-fleur", "Cresson", "Ail", "Chou", "Chou de Bruxelles", "Courge", "Épinard", "Céleri branche", "Salsifis", "Champignon de Paris", "Betterave", "Fenouil", "Potiron", "Oignon", "Panais", "Céleri-rave", "Endive", "Échalote"], ["Châtaigne", "Noisette", "Pomme", "Poire", "Clémentine, mandarine", "Kiwi", "Citron", "Kaki"]],
    hiver: [["Chou-fleur", "Chou", "Chou de Bruxelles", "Endive", "Topinambour", "Navet", "Céleri branche", "Céleri-rave", "Épinard", "Mâche", "Oignon", "Poireau", "Salsifis", "Panais", "Carotte", "Cresson", "Betterave", "Champignon de Paris"], ["Clémentine, mandarine", "Citron", "Poire", "Orange", "Kiwi", "Pomme", "Pamplemousse"]]
  };
  seg($("#season-seg"), [{ id: "printemps", label: "Printemps", cls: "fl" }, { id: "ete", label: "Été", cls: "fl" }, { id: "automne", label: "Automne", cls: "fl" }, { id: "hiver", label: "Hiver", cls: "fl" }], "printemps", k => {
    const [leg, fr] = SEASONS[k];
    $("#season-out").innerHTML = `<div class="card fl"><span class="tag">Légumes · ${leg.length}</span><div class="pills">${leg.map(x => `<span>${x}</span>`).join("")}</div></div>
      <div class="card sug"><span class="tag">Fruits · ${fr.length}</span><div class="pills">${fr.map(x => `<span>${x}</span>`).join("")}</div></div>`;
  });

  /* ---------------- Cas Bernard ---------------- */
  const MEALS = [
    ["Petit-déjeuner", "Chocolat chaud, tartines de confiture ou céréales sucrées", "Kiwi, tartines de pain complet, lait ou yaourt nature"],
    ["Déjeuner", "Cantine : plat chaud, les légumes restent dans l’assiette", "Carottes râpées, filet de poulet, haricots verts vapeur, riz, pomme"],
    ["Goûter", "Biscuits ou compotes", "Compote sans sucre ajouté + poignée d’abricots secs et d’amandes"],
    ["Dîner", "Pâtes, pizza, quiche, nuggets ; salade verte de temps en temps", "Soupe de légumes maison, omelette aux champignons, salade verte, clémentine"],
    ["Boissons", "Beaucoup de jus de fruits industriels", "Eau ; jus 100 % pur jus pressé maison si envie"]
  ];
  seg($("#ab-seg"), [{ id: "0", label: "Avant", cls: "bad" }, { id: "1", label: "Après", cls: "good" }], "0", v => {
    const after = v === "1";
    $("#meals").innerHTML = MEALS.map(m => `<div class="card meal ${after ? "after" : "before"}"><span class="when">${m[0]}</span><span class="what" style="font-size:1rem">${after ? m[2] : m[1]}</span></div>`).join("");
  });
})();
