/* Fiches bristol : Panorama de la restauration collective (source : cours/restauration-collective) */
Bristol.cours("restauration-collective", [
  {
    onglet: "Le secteur", titre: "La restauration collective",
    notes: [
      [
        { h: "Un secteur stratégique", p: ["Nourrit chaque jour des millions de personnes : de l’enfant de maternelle au patient, au salarié, au résident d’EHPAD, à la personne détenue."] },
        { h: "Un triple enjeu", p: ["<b>Nourrir en nombre</b>, en sécurité sanitaire.", "<b>Qualité nutritionnelle</b>, adaptée au public.", "<b>Impact environnemental</b> : bio, circuits courts, végétarien, anti-gaspillage."] },
      ],
      [
        { h: "Les établissements", p: ["<b>Entreprise</b> : salariés, tarif souvent subventionné.", "<b>Médico-sociale</b> : hôpitaux, maisons de retraite ; régimes spécifiques.", "<b>Scolaire et universitaire</b> : besoins des jeunes, éducation.", "<b>Autres</b> : armées, prisons, centres de vacances."] },
        { h: "Derrière chaque repas", p: ["Produits, menus, préparation, distribution, réglementation, déchets."] },
      ],
    ],
    carte: { centre: "Restauration collective", branches: [
      ["Enjeux", ["Nourrir en nombre", "Qualité nutritionnelle", "Environnement"]],
      ["Établissements", ["Entreprise", "Médico-sociale", "Scolaire"]],
      ["Autres", ["Armées, prisons", "Centres de vacances"]],
    ] },
  },
  {
    onglet: "Préparer et servir", titre: "Préparer et servir",
    notes: [
      [
        { h: "Cuisine autonome", p: ["Tout sur place, de la réception au service.", "Atouts : <b>fraîcheur</b>, souplesse, lien avec les convives.", "Limites : personnel qualifié chaque jour, infrastructure complète, coûts."] },
        { h: "Cuisine centrale + satellites", p: ["Production centralisée ; les satellites remettent en température, dressent, servent.", "Atouts : <b>économies d’échelle</b>, satellites simplifiés, qualité uniforme.", "Limites : moins de flexibilité, qualité organoleptique, logistique coûteuse."] },
      ],
      [
        { h: "Deux liaisons", p: ["<b>Liaison chaude</b> : repas maintenus à température réglementaire pendant le transport, servis vite.", "<b>Liaison froide</b> : refroidis rapidement après cuisson, transportés, remis en température juste avant le service."] },
        { h: "Exemple", p: ["Une cuisine centrale prépare chaque matin 5 000 repas pour crèches, écoles et maisons de retraite, livrés en camions réfrigérés."] },
      ],
    ],
    carte: { centre: "Préparer, servir", branches: [
      ["Autonome", ["Tout sur place", "Fraîcheur, souplesse"]],
      ["Centrale", ["Satellites", "Économies d’échelle"]],
      ["Liaison chaude", ["Maintenu au chaud"]],
      ["Liaison froide", ["Refroidi vite", "Remis en température"]],
    ] },
  },
  {
    onglet: "Gestion et responsabilité", titre: "Gestion et responsabilité",
    notes: [
      [
        { h: "Gestion directe", p: ["L’établissement fait tout : autonomie, contrôle complet de la qualité. Demande ressources et expertise."] },
        { h: "Gestion concédée", p: ["Un <b>prestataire</b> par contrat : savoir-faire, coûts optimisés, conformité. Moins de liberté sur les menus.", "≈ <b>la moitié</b> des établissements en France."] },
      ],
      [
        { h: "Qui est responsable ?", p: ["Crèches, écoles : la <b>mairie</b>. Collèges : le <b>département</b>. Lycées : la <b>région</b>.", "Universités : l’État (CROUS). Privé : l’OGEC.", "Hôpitaux : conseil d’administration. Entreprise : CE ou direction. Armée, prisons : l’État."] },
        { h: "Les rôles", p: ["L’autorité décide (politique alimentaire, budget) ; les équipes appliquent au quotidien."] },
      ],
    ],
    carte: { centre: "Gestion", branches: [
      ["Directe", ["L’établissement fait tout"]],
      ["Concédée", ["Un prestataire", "≈ la moitié"]],
      ["Scolaire public", ["École : mairie", "Collège : département", "Lycée : région"]],
      ["Autres", ["Université : CROUS", "Hôpital : CA"]],
    ] },
  },
  {
    onglet: "Réglementation", titre: "La réglementation",
    notes: [
      [
        { h: "Sécurité alimentaire", p: ["<b>Paquet hygiène</b> : températures, hygiène, formation du personnel, traçabilité.", "<b>HACCP</b> et <b>PMS</b> (plan de maîtrise sanitaire, obligatoire)."] },
        { h: "Le GEMRCN", p: ["Fréquence des plats sur un <b>cycle de 20 repas</b> ; grammages selon l’âge.", "Plus de fruits, légumes, féculents ; moins de sucres et de saturés ; plus de fer et de calcium."] },
      ],
      [
        { h: "EGAlim (2018) et Climat (2021)", p: ["<b>50 %</b> de produits durables et de qualité, dont <b>20 % bio</b> (public 2022, privé 2024).", "<b>60 %</b> de viandes et poissons durables.", "Plan de diversification des protéines : plus de <b>200</b> repas par jour.", "<b>Menu végétarien hebdomadaire</b> en scolaire.", "Don aux associations : plus de <b>3 000</b> repas par jour."] },
      ],
    ],
    carte: { centre: "Réglementation", branches: [
      ["Hygiène", ["Paquet hygiène", "HACCP, PMS"]],
      ["GEMRCN", ["Cycle de <b>20 repas</b>", "Grammages"]],
      ["EGAlim", ["<b>50 %</b> durables", "Dont <b>20 %</b> bio", "Viandes <b>60 %</b>"]],
      ["Végétarien", ["1 par semaine en scolaire"]],
    ] },
  },
  {
    onglet: "Durabilité", titre: "La durabilité",
    notes: [
      [
        { h: "L’enjeu", p: ["≈ <b>¼</b> des émissions de gaz à effet de serre en France viennent de l’alimentation."] },
        { h: "Réduire l’empreinte", p: ["Local et de saison, menus de saison, cuissons économes (vapeur, basse température)."] },
        { h: "Déchets", p: ["Portions ajustées (petites et grandes faims), analyse des restes, compost ou méthanisation, contenants réutilisables, achats planifiés."] },
      ],
      [
        { h: "Diversifier les protéines", p: ["Plus de légumineuses, plats végétariens (céréales + légumineuses), protéines animales durables."] },
        { h: "Sensibiliser", p: ["Afficher l’origine et la saison, expliquer les recettes, montrer les bénéfices, ateliers."] },
      ],
    ],
    carte: { centre: "Durabilité", branches: [
      ["Enjeu", ["≈ <b>¼</b> des émissions"]],
      ["Empreinte", ["Local, saison", "Cuissons économes"]],
      ["Déchets", ["Portions ajustées", "Compost"]],
      ["Protéines", ["Légumineuses", "Végétarien"]],
    ] },
  },
]);
