/* ==========================================================================
   Cours : Panorama de la restauration collective et des publics
   Source : documents/finis/Panorama de la restauration collective et des publics.docx
   ========================================================================== */
(function () {
  const { $, seg, explorer } = window.Fiches;

  /* ---------------- Types d'établissements ---------------- */
  const T = (name, cls, pub, but, ex) => ({ name, cls, rows: [["Pour qui", pub], ["Enjeu", but], ["Particularités", ex]] });
  explorer($("#typo-chips"), $("#typo-panel"), [{ label: "", items: [
    T("Restauration d’entreprise", "ink", "Les salariés, sur leur lieu de travail.", "Des repas équilibrés et adaptés, souvent à tarif subventionné.", "Un but de confort, de santé et de fidélisation du personnel."),
    T("Restauration médico-sociale", "pro", "Hôpitaux, cliniques, maisons de retraite, établissements spécialisés.", "L’alimentation fait souvent partie d’une prise en charge médicale ou diététique.", "Régimes spécifiques : sans sel, hyperprotéiné, texture modifiée…"),
    T("Scolaire et universitaire", "glu", "Cantines maternelles et primaires, restaurants de collèges, lycées et universités.", "Couvrir les besoins nutritionnels des jeunes.", "Les sensibiliser à de bonnes habitudes alimentaires."),
    T("Autres structures collectives", "lai", "Armées, centres pénitentiaires, centres de vacances, foyers d’hébergement.", "Nourrir des publics très divers.", "Contraintes parfois renforcées par des impératifs sécuritaires ou organisationnels.")
  ] }]);

  /* ---------------- Cuisine autonome ou centrale ---------------- */
  const MOD = {
    auto: {
      steps: [["Réception", "Denrées brutes reçues sur place.", 1], ["Transformation", "Cuisinées tout de suite, juste avant le service.", 1], ["Transport", "Aucun : tout se passe sur place.", 0], ["Remise en température", "Inutile : servi dans la foulée.", 0], ["Service", "En salle, peu après la cuisson.", 1]],
      plus: ["Fraîcheur optimale : qualités gustatives et nutritionnelles préservées.", "Souplesse : menu modifié vite en cas d’imprévu (livraison en retard, nombre de convives différent).", "Lien avec les convives : préparations adaptées selon leurs retours immédiats."],
      moins: ["Personnel qualifié chaque jour (cuisiniers, aides de cuisine, plongeurs).", "Infrastructure complète : stockage réfrigéré, matériel de cuisson, espaces de préparation séparés contre les contaminations croisées.", "Coûts : recrutement et entretien des équipements."],
      ex: "Une école primaire en cuisine autonome peut ajouter le matin même un plat de légumes frais de saison reçus d’un producteur local : un menu actualisé et attractif."
    },
    centrale: {
      steps: [["Réception", "Achats mutualisés en cuisine centrale.", 0], ["Production", "Grand volume préparé en amont pour plusieurs sites.", 0], ["Transport", "", 0], ["Remise en température", "", 1], ["Dressage et service", "Le satellite ne cuisine pas à partir de produits bruts.", 1]],
      plus: ["Économies d’échelle : achats et production mutualisés, coût par repas souvent réduit.", "Satellites simplifiés : pas de cuisinier hautement qualifié, du personnel formé à la remise en température et au service.", "Qualité uniforme : recettes et procédés standardisés, contrôle sanitaire facilité."],
      moins: ["Moins de flexibilité : menu fixé plusieurs jours avant, changement de dernière minute difficile voire impossible.", "Perte de qualité organoleptique si la chaîne du froid ou du chaud est rompue ; des légumes cuits perdent leur croquant après refroidissement puis réchauffage.", "Logistique coûteuse : véhicules frigorifiques, contenants, stockage dans les satellites, suivi des températures."],
      ex: "Une cuisine centrale de grande ville prépare chaque matin 5000 repas pour des crèches, des écoles et des maisons de retraite, livrés en camions réfrigérés et servis le midi."
    }
  };
  const LIAI = {
    chaude: ["Liaison chaude : repas maintenus à température réglementaire pendant le transport.", "Servis rapidement à l’arrivée, maintenus au chaud."],
    froide: ["Liaison froide : refroidis rapidement après cuisson, puis transportés.", "Remis en température sur le site satellite juste avant le service."]
  };
  const st = { mod: "auto", liai: "froide" };
  function update() {
    const m = MOD[st.mod];
    $("#liai-seg").hidden = st.mod !== "centrale";
    $("#mod-pipe").innerHTML = m.steps.map(([h, p, here], i) => {
      let txt = p;
      if (st.mod === "centrale" && i === 2) txt = LIAI[st.liai][0];
      if (st.mod === "centrale" && i === 3) txt = LIAI[st.liai][1];
      return `<div class="stn ${here ? "key" : ""}"><span class="num-step" data-nohide>${i + 1}</span><h4>${h}</h4><p>${txt}</p>${here ? "" : `<span class="badge">${st.mod === "centrale" && i < 3 ? "Cuisine centrale" : "Pas sur place"}</span>`}</div>`;
    }).join("");
    $("#mod-cards").innerHTML = `<div class="card good"><h3>Atouts</h3><ul>${m.plus.map(x => `<li>${x}</li>`).join("")}</ul></div><div class="card bad"><h3>Contraintes et limites</h3><ul>${m.moins.map(x => `<li>${x}</li>`).join("")}</ul></div><div class="card"><h3>${st.mod === "auto" ? "Le principe" : "Le fonctionnement"}</h3><p>${st.mod === "auto" ? "Tout le processus se déroule sur place, de la réception des matières premières au service en salle, dans un laps de temps court pour la fraîcheur et la qualité organoleptique." : "La production est centralisée dans une ou plusieurs cuisines de grande capacité. Les restaurants satellites assurent les dernières étapes : remise en température, dressage, service. Ils ont des équipements de remise en température et de distribution."}</p></div>`;
    $("#mod-ex").innerHTML = `<span class="tag">Exemple concret</span><p>${m.ex}</p>`;
  }
  seg($("#liai-seg"), [{ id: "chaude", label: "Liaison chaude", cls: "pro" }, { id: "froide", label: "Liaison froide", cls: "eau" }], st.liai, v => { st.liai = v; update(); });
  seg($("#mod-seg"), [{ id: "auto", label: "Cuisine autonome", cls: "ink" }, { id: "centrale", label: "Cuisine centrale + satellites", cls: "ink" }], st.mod, v => { st.mod = v; update(); });

  /* ---------------- Responsabilité administrative ---------------- */
  const R = (name, who) => ({ name, rows: [["Autorité", who]] });
  explorer($("#resp-chips"), $("#resp-panel"), [
    { cls: "ink", label: "Publique", items: [R("Crèches, maternelles, primaires", "La <b>mairie</b> (ou l’intercommunalité quand elle a reçu cette compétence)."), R("Collèges", "Le <b>conseil départemental</b>."), R("Lycées", "Le <b>conseil régional</b>."), R("Restaurants universitaires", "L’<b>État</b>, le plus souvent via le <b>CROUS</b>.")] },
    { cls: "glu", label: "Scolaire privée", items: [R("Écoles, collèges, lycées", "L’<b>OGEC</b> (Organisme de Gestion de l’Enseignement Catholique) ou un organisme similaire, responsable global du service.")] },
    { cls: "pro", label: "Médico-social", items: [R("Hôpitaux", "Le <b>conseil d’administration</b> de l’établissement."), R("Maisons de retraite", "La <b>mairie</b> ou l’<b>intercommunalité</b>, selon les compétences attribuées localement.")] },
    { cls: "lai", label: "Entreprise", items: [R("Restaurants administratifs", "L’<b>État</b>."), R("Restaurants d’entreprise", "Le <b>comité d’entreprise</b> ou la <b>direction</b>.")] },
    { cls: "min", label: "Particulières", items: [R("Cantines de l’armée", "L’<b>État</b>, à travers le ministère compétent."), R("Établissements pénitentiaires", "L’<b>État</b>, à travers le ministère compétent.")] }
  ]);

  /* ---------------- EGAlim : obligations selon l'établissement ---------------- */
  const TYPES = [
    ["creche", "Crèche", { gem: 1 }],
    ["ecole6", "École (enfants de moins de 6 ans)", { gem: 1, scol: 1 }],
    ["scol", "École, collège, lycée", { scol: 1 }],
    ["univ", "Université", { gem: 1 }],
    ["hopital", "Hôpital", { gem: 1 }],
    ["medsoc", "Structure médico-sociale", { gem: 1 }],
    ["prison", "Établissement pénitentiaire", { gem: 1 }],
    ["entreprise", "Restaurant d’entreprise", {}],
    ["autre", "Autre (centre de vacances, foyer…)", {}]
  ];
  $("#eg-type").innerHTML = TYPES.map(([id, l]) => `<option value="${id}">${l}</option>`).join("");
  $("#eg-type").value = "scol";
  const eg = { statut: "public", type: "scol", repas: 700, choix: "non" };
  function egUpdate() {
    const t = TYPES.find(x => x[0] === eg.type)[2], etat = eg.statut === "etat";
    $("#eg-repas-o").textContent = eg.repas.toLocaleString("fr-FR") + " repas";
    const L = [
      [1, "50 % de produits durables et de qualité, dont au moins 20 % bio", eg.statut === "prive" ? "Pour les structures privées depuis le <span class='num hideable'>1ᵉʳ</span> janvier 2024." : "Pour les services publics depuis 2022."],
      [1, etat ? "100 % de viandes et poissons durables ou de qualité" : "60 % au moins de viandes et poissons durables ou de qualité", etat ? "Taux porté à 100 % pour les services de l’État et ses établissements publics." : "S’applique aux familles « viandes » et « poissons »."],
      [1, "Transparence : afficher les taux atteints", "Taux de produits durables et de qualité, initiatives mises en œuvre : affichage, restitution aux usagers."],
      [eg.repas > 200, "Plan pluriannuel de diversification des protéines", "Au-delà de 200 repas par jour, avec des alternatives végétales."],
      [!!t.scol, "Un menu végétarien chaque semaine", "Obligatoire en restauration scolaire."],
      [etat && eg.choix === "oui", "Une option végétarienne tous les jours", "Services collectifs de l’État, quand plusieurs choix sont proposés."],
      [eg.repas > 3000, "Convention de don avec une association", "Au-delà de 3 000 repas par jour : don des invendus et démarche anti-gaspillage."]
    ];
    const ok = L.filter(l => l[0]).length;
    $("#eg-out").innerHTML = `<span class="tag">Obligations EGAlim et Climat &amp; Résilience</span>
      <div class="big good-f" data-nohide>${ok} <small>sur 7 s’appliquent</small></div>
      <div class="stack3 hideable" aria-label="Approvisionnement : 20 % bio, 30 % autres produits durables, 50 % libre"><div class="fl" style="flex-basis:20%">Bio</div><div class="good-f" style="flex-basis:30%">Durables</div><div style="flex-basis:50%;background:var(--bg);color:var(--muted)">Reste</div></div>
      <ul style="margin:0;padding-left:1.1em;display:grid;gap:6px">${L.map(([on, h, d]) => `<li style="${on ? "" : "color:var(--muted);text-decoration:line-through;text-decoration-thickness:1px"}"><b style="${on ? "" : "color:var(--muted)"}">${h}</b><br><small>${d}</small></li>`).join("")}</ul>
      <div class="note" style="background:var(--card)"><span>GEMRCN : ${t.gem ? "<b>obligatoire</b> pour ce type de structure (crèches, scolaires de moins de 6 ans, médico-social, hôpitaux, universités, pénitentiaire)." : "<b>recommandation</b> fortement encouragée pour ce type de structure."}</span></div>`;
  }
  seg($("#eg-statut"), [{ id: "public", label: "Public", cls: "ink" }, { id: "prive", label: "Privé", cls: "ink" }, { id: "etat", label: "État", cls: "ink" }], eg.statut, v => { eg.statut = v; egUpdate(); });
  seg($("#eg-choix"), [{ id: "non", label: "Non", cls: "ink" }, { id: "oui", label: "Oui", cls: "ink" }], eg.choix, v => { eg.choix = v; egUpdate(); });
  $("#eg-type").addEventListener("change", e => { eg.type = e.target.value; egUpdate(); });
  $("#eg-repas").addEventListener("input", e => { eg.repas = +e.target.value; egUpdate(); });
  egUpdate();
})();
