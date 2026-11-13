/* ==========================================================================
   Cours : Élaboration de plans alimentaires et de menus pour la restauration collective
   Source : documents/finis/Élaboration de plans alimentaires et de menus pour la restauration collective.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer } = window.Fiches;

  /* ---------------- Établissements ---------------- */
  explorer($("#et-chips"), $("#et-panel"), [{ cls: "ink", label: "", items: [
    { name: "Établissements scolaires", cls: "glu", rows: [["Mission", "Des repas équilibrés pour la croissance des enfants et adolescents, et la découverte de nouveaux aliments."]] },
    { name: "Entreprises", cls: "lai", rows: [["Mission", "Des repas adaptés au rythme de travail : service rapide, diversité, coût maîtrisé."]] },
    { name: "Établissements de santé", cls: "pro", rows: [["Mission", "Des menus pour les besoins particuliers de patients souvent fragiles ou malades."]] },
    { name: "Maisons de retraite", cls: "fl", rows: [["Mission", "Un rôle nutritionnel, mais aussi social et psychologique : le repas structure la journée."]] },
    { name: "Restauration sociale", cls: "ink", rows: [["Mission", "Centres d’accueil, foyers, associations caritatives : garantir une alimentation de qualité à des publics parfois précaires."]] }
  ] }]);

  /* ---------------- Individuel / collectif ---------------- */
  const IC = {
    ind: ["Plan individuel", "Sur mesure : âge, sexe, poids, taille, activité, santé, préférences, habitudes, contraintes culturelles ou religieuses. Une relation personnalisée entre le professionnel et la personne. Chaque détail compte : énergie exacte, répartition précise des macronutriments, collations selon le rythme de vie.", "Adéquation fine entre besoins et apports quotidiens."],
    col: ["Plan collectif", "Pour un ensemble de convives très hétérogènes (une classe, une maison de retraite, une entreprise). Il repose sur des repères et sur la diversité des repas, en respectant des contraintes réglementaires, budgétaires et logistiques.", "Équilibre général sur une période et acceptabilité par la majorité, pas la personnalisation extrême."]
  };
  seg($("#ic-seg"), [{ id: "ind", label: "Plan individuel", cls: "ink" }, { id: "col", label: "Plan collectif", cls: "fl" }], "col", k => {
    $("#ic-out").innerHTML = `<h3>${IC[k][0]}</h3><p>${IC[k][1]}</p><p><b>Objectif</b> : ${IC[k][2]}</p>`;
  });

  /* ---------------- Vérifier un cycle de 20 repas ---------------- */
  // Exemples de fréquences du cours ; 20 repas = 4 semaines de 5 repas, d'où 2 poissons par semaine = 8 sur le cycle
  const CY = [
    ["leg", "Repas avec des légumes", 12, "min", 10, "au moins 10 sur 20"],
    ["poi", "Repas de poisson", 6, "min", 8, "2 par semaine, soit 8 sur 20 repas servis 5 jours par semaine"],
    ["fri", "Repas frits", 5, "max", 4, "au plus 4 sur le cycle"],
    ["lai", "Repas avec un produit laitier", 20, "min", 20, "au moins un par repas, soit 20 sur 20"]
  ];
  const cy = Object.fromEntries(CY.map(c => [c[0], c[2]]));
  $("#cy-form").innerHTML = CY.map(([id, l]) => `<div class="stepper"><div><b>${l}</b><small>sur 20 repas</small></div><div class="ctrl"><button type="button" data-id="${id}" data-d="-1" aria-label="Moins">−</button><output data-nohide id="cy-${id}"></output><button type="button" data-id="${id}" data-d="1" aria-label="Plus">+</button></div></div>`).join("");
  function cyDraw() {
    let ko = 0;
    const lines = CY.map(([id, l, , t, v, txt]) => {
      $("#cy-" + id).textContent = cy[id];
      const ok = t === "min" ? cy[id] >= v : cy[id] <= v;
      if (!ok) ko++;
      return `<li style="color:${ok ? "var(--good)" : "var(--bad)"}"><b>${ok ? "Conforme" : "À revoir"}</b> · ${l} : ${cy[id]} (${txt})</li>`;
    });
    $("#cy-out").className = "result " + (ko ? "bad-f" : "good-f");
    $("#cy-out").innerHTML = `<span class="tag">Bilan du cycle</span><div class="big ${ko ? "bad-f" : "good-f"}" style="font-size:1.5rem" data-nohide>${ko ? ko + " point" + (ko > 1 ? "s" : "") + " à revoir" : "Cycle équilibré"}</div><ul style="margin:0;padding-left:1.1em;display:grid;gap:4px">${lines.join("")}</ul>`;
  }
  $("#cy-form").addEventListener("click", e => { const b = e.target.closest("button[data-id]"); if (!b) return; const id = b.dataset.id; cy[id] = Math.max(0, Math.min(20, cy[id] + +b.dataset.d)); cyDraw(); });
  cyDraw();

  /* ---------------- Mise en place du cycle ---------------- */
  const MC = [
    ["Durée et structure", "Choisir 4, 6 ou 8 semaines selon l’établissement. Un cycle court rassure par sa régularité ; un cycle long évite la lassitude et accueille plus de recettes. La structure (entrée, plat et garnitures, produit laitier, dessert) reste fixe, son contenu varie selon les fréquences."],
    ["Répartir les groupes d’aliments", "À partir de la grille de fréquences : deux poissons par semaine, des légumineuses régulièrement, des féculents alternés, des fruits et légumes de saison variés. Un tableau de synthèse vérifie l’équilibre (pas trop de viande rouge, assez de légumes colorés)."],
    ["Choisir et placer les recettes", "Chaque case devient une recette : « poisson maigre » devient un filet de colin au four, citron et herbes, avec pommes vapeur et carottes glacées. Des nouveautés pour l’intérêt, des plats connus pour l’adhésion."],
    ["Intégrer la logistique et le budget", "Capacités des équipes (temps, volumes), équipements (four mixte, sauteuse, chambres froides), coûts de revient (alterner plats chers et économiques), saisonnalité (fraîcheur, goût, prix)."],
    ["Vérifier et ajuster", "Relire tout le cycle : pas de répétitions proches (deux plats panés la même semaine), couleurs, textures et cuissons alternées. Puis le faire évoluer selon les restes, la satisfaction et les coûts."]
  ];
  let mc = 0;
  function mcDraw() {
    $("#mc-pipe").innerHTML = MC.map(([h], i) => `<button type="button" class="stn ink ${i === mc ? "key" : ""}" data-i="${i}" style="text-align:left;cursor:pointer;font:inherit;color:inherit"><span class="num-step" data-nohide>${i + 1}</span><h4>${h}</h4></button>`).join("");
    $("#mc-out").innerHTML = `<span class="tag" data-nohide>Étape ${mc + 1} sur 5</span><h3>${MC[mc][0]}</h3><p>${MC[mc][1]}</p>`;
  }
  $("#mc-pipe").addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) { mc = +b.dataset.i; mcDraw(); } });
  mcDraw();

  /* ---------------- Menus types ---------------- */
  const EX = {
    ecole: ["Déjeuner en cantine scolaire", "Deux poissons par semaine, des légumes à chaque repas, féculents raffinés et complets en alternance. Un mardi midi :", [["Entrée", "Salade de carottes râpées à l’orange (fibres, vitamines, couleur)"], ["Plat", "Filet de colin au four, sauce citronnée"], ["Accompagnement", "Riz semi-complet et courgettes sautées à l’ail"], ["Produit laitier", "Fromage blanc nature légèrement sucré au miel"], ["Dessert", "Pomme fraîche de saison"]], "Équilibré, une portion de poisson, un féculent et un légume, des textures et saveurs variées."],
    ehpad: ["Dîner en maison de retraite", "Apport protéique, prévention de la dénutrition, mastication facile :", [["Entrée", "Velouté de potiron crémeux"], ["Plat", "Émincé de poulet tendre sauce champignons"], ["Accompagnement", "Purée de pommes de terre et haricots verts fondants"], ["Produit laitier", "Portion de fromage à pâte molle (type camembert)"], ["Dessert", "Compote de poire"]], "Textures douces, protéines et fibres maintenues ; velouté et compote hydratent et facilitent la prise alimentaire."],
    entreprise: ["Déjeuner en restauration d’entreprise", "Équilibre et praticité, sans somnolence après le repas :", [["Entrée", "Taboulé au boulgour, tomates et herbes fraîches"], ["Plat", "Filet de truite grillé"], ["Accompagnement", "Quinoa aux petits légumes"], ["Produit laitier", "Yaourt nature"], ["Dessert", "Kiwi"]], "Équilibré et léger, riche en protéines de qualité et en fibres."]
  };
  seg($("#ex-seg"), [{ id: "ecole", label: "Cantine scolaire", cls: "glu" }, { id: "ehpad", label: "Maison de retraite", cls: "fl" }, { id: "entreprise", label: "Entreprise", cls: "lai" }], "ecole", k => {
    const [n, d, m, c] = EX[k];
    $("#ex-out").innerHTML = `<h3>${n}</h3><p>${d}</p><div class="tbl"><table><tbody>${m.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join("")}</tbody></table></div><p><b>Pourquoi ça marche</b> : ${c}</p>`;
  });

  /* ---------------- Autres contraintes ---------------- */
  const CT = {
    mat: ["Matérielles et techniques", ["<b>Équipements</b> : une cuisine centrale a fours mixtes, sauteuses basculantes, cellules de refroidissement rapide, grands stockages ; une petite cantine parfois des fours classiques, une marmite et quelques plaques. Une cuisson lente et longue est possible avec un four mixte programmable, difficile ailleurs.", "<b>Stockage</b> : peu de froid positif ou négatif, c’est peu de produits frais sensibles ; sans grands congélateurs, davantage de saison et de livraisons fréquentes.", "<b>Distribution</b> : sur place, des textures proches du familial ; en cuisine centrale, transport et remise en chauffe : gratins, purées, plats mijotés plutôt que fritures.", "<b>Sécurité sanitaire</b> : appliquer l’HACCP (températures, contaminations croisées, refroidissement rapide). Sans cellule de refroidissement, pas de production différée de plats à régénérer."]],
    hum: ["Humaines", ["<b>Effectifs</b> : une cuisine centrale (chefs, seconds, agents de production, magasiniers, chauffeurs-livreurs) diversifie plus qu’une petite équipe polyvalente, qui ne peut multiplier les préparations complexes au même service.", "<b>Compétences</b> : poisson, pâtisserie, basse température demandent un savoir-faire ; sinon, simplifier. La formation continue élargit les recettes (végétariennes, du monde) et l’hygiène.", "<b>Organisation</b> : des centaines de repas en quelques heures ; alterner plats rapides et longs, ne pas cumuler le même jour les recettes qui mobilisent plusieurs postes.", "<b>Motivation</b> : une équipe valorisée soigne la présentation, respecte les grammages, écoute les convives ; en sous-effectif, même un bon plan s’applique mal."]],
    appro: ["Approvisionnement et stockage", ["<b>Livraisons</b> : avec 1 ou 2 livraisons par semaine, utiliser d’abord les denrées les plus périssables puis des produits plus durables. Fournisseur défaillant : prévoir des plats de remplacement. Appels d’offres : des gammes imposées.", "<b>Saisonnalité</b> : des fraises en hiver ou des courges en été, c’est un surcoût et moins de saveur.", "<b>Capacités</b> : peu de froid, plus de légumineuses sèches, conserves, surgelés ; de gros stocks exigent une gestion stricte (gaspillage, sécurité).", "<b>Traçabilité</b> : de la livraison à la consommation ; températures, cru et cuit séparés, allergènes séparés, « premier entré, premier sorti »."]]
  };
  seg($("#ct-seg"), Object.entries(CT).map(([id, c]) => ({ id, label: c[0], cls: "ink" })), "mat", k => {
    $("#ct-out").innerHTML = `<h3>${CT[k][0]}</h3><ul>${CT[k][1].map(x => `<li>${x}</li>`).join("")}</ul>`;
  });

  /* ---------------- Composer la semaine (étude de cas) ---------------- */
  // Catégories du plan hebdomadaire ; coût : le cours classe poissons et certaines viandes parmi les protéines coûteuses, œufs, volailles et légumineuses parmi les moins chères
  const CAT = { vb: ["Viande blanche", 2, "eco"], poi: ["Poisson", 1, "cher"], lo: ["Légumineuses ou œufs", 1, "eco"], vr: ["Viande rouge maigre", 1, "cher"] };
  const PLATS = [
    ["poulet", "Escalope de poulet rôtie", "vb"], ["emince", "Émincé de poulet sauce champignons", "vb"],
    ["colinpane", "Poisson pané au four (colin)", "poi", 1], ["colin", "Filet de colin au four, sauce citronnée", "poi"], ["truite", "Filet de truite grillé", "poi"],
    ["omelette", "Omelette aux fines herbes", "lo"], ["chili", "Chili sin carne (haricots rouges, maïs, tomates)", "lo"], ["curry", "Curry de lentilles", "lo"],
    ["boeuf", "Bœuf bourguignon (portion adaptée aux enfants)", "vr"]
  ];
  const JOURS = [
    ["Lundi", "Carottes râpées vinaigrette légère", "Gratin de courgettes et pomme de terre", "Emmental en portion", "Pomme", "poulet"],
    ["Mardi", "Salade de lentilles aux petits légumes", "Purée de pommes de terre", "Yaourt nature sucré au miel", "Compote de poire", "colinpane"],
    ["Mercredi", "Betteraves rouges en dés", "Riz aux petits pois", "Fromage blanc", "Clémentine", "omelette"],
    ["Jeudi", "Salade de chou blanc aux pommes", "Carottes fondantes et pâtes", "Petit suisse", "Poire", "boeuf"],
    ["Vendredi", "Potage de légumes de saison (courge, poireau, carotte)", "Riz", "Fromage à pâte molle (camembert)", "Yaourt aux fruits", "chili"]
  ];
  const sem = JOURS.map(j => j[5]);
  function semDraw() {
    $("#sem").innerHTML = JOURS.map(([j, en, acc, lai, des], i) => `<div class="card meal"><span class="when">${j}</span>
      <div class="inp"><label for="sem-${i}">Plat principal</label><select id="sem-${i}" data-i="${i}">${PLATS.map(([id, l]) => `<option value="${id}" ${sem[i] === id ? "selected" : ""}>${l}</option>`).join("")}</select></div>
      <p class="why"><b>Entrée</b> ${en}<br><b>Accompagnement</b> ${acc}<br><b>Laitier</b> ${lai}<br><b>Dessert</b> ${des}</p></div>`).join("");
    const cnt = Object.fromEntries(Object.keys(CAT).map(k => [k, 0]));
    let cher = 0, pane = 0;
    sem.forEach(id => { const p = PLATS.find(x => x[0] === id); cnt[p[2]]++; if (CAT[p[2]][2] === "cher") cher++; if (p[3]) pane++; });
    const ok = Object.keys(CAT).every(k => cnt[k] === CAT[k][1]);
    $("#sem-out").className = "result " + (ok ? "good-f" : "bad-f");
    $("#sem-out").innerHTML = `<span class="tag">Comparaison avec le plan hebdomadaire</span>
      <div class="big ${ok ? "good-f" : "bad-f"}" style="font-size:1.5rem">${ok ? "Conforme au plan" : "Écart avec le plan"}</div>
      <div class="tbl"><table><thead><tr><th>Catégorie</th><th>Plan</th><th>Semaine</th></tr></thead><tbody>${Object.entries(CAT).map(([k, [l, n]]) => `<tr class="${cnt[k] === n ? "" : "sel bad-f"}"><th>${l}</th><td class="n" data-nohide>${n}</td><td class="n" data-nohide>${cnt[k]}</td></tr>`).join("")}</tbody></table></div>
      <p><b>Budget</b> : ${cher} plat${cher > 1 ? "s" : ""} parmi les protéines les plus coûteuses (poisson, viande rouge) et ${5 - cher} parmi les moins chères (volaille, œufs, légumineuses).${cher > 2 ? " Pensez à alterner pour tenir les 2,50 € par repas." : ""}</p>
      <p><b>Fritures et panés</b> : ${pane} plat pané cette semaine.</p>
      ${sem.join() === JOURS.map(j => j[5]).join() ? `<p style="font-size:.88rem">Le menu du cours a 1 viande blanche et 2 repas « légumineuses ou œufs » (omelette, chili) pour 2 et 1 prévus au plan : un écart du cours lui-même, noté dans le suivi.</p>` : ""}`;
  }
  $("#sem").addEventListener("change", e => { const s = e.target.closest("select[data-i]"); if (s) { sem[+s.dataset.i] = s.value; semDraw(); } });
  $("#sem-reset").addEventListener("click", () => { JOURS.forEach((j, i) => sem[i] = j[5]); semDraw(); });
  semDraw();
})();
