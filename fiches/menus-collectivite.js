/* Fiches bristol : Plans et menus en collectivité (source : cours/menus-collectivite) */
Bristol.cours("menus-collectivite", [
  {
    onglet: "Contexte et cadre", titre: "Contexte et cadre",
    notes: [
      [
        { h: "La restauration collective", p: ["Prépare et distribue des repas à un groupe, <b>sans profit direct</b>.", "Écoles, entreprises, santé, maisons de retraite (le repas structure la journée), restauration sociale."] },
        { h: "Quatre enjeux", p: ["<b>Nutritionnel</b>, <b>sanitaire</b>, <b>économique</b>, <b>social</b> (un plat rejeté ne remplit pas sa mission)."] },
      ],
      [
        { h: "Le GEMRCN", p: ["Fréquences sur un <b>cycle de 20 repas</b> : légumes cuits variés, fritures limitées, poisson, viande, œufs réguliers, <b>un produit laitier par repas</b>."] },
        { h: "Autres textes", p: ["Scolaire : <b>décret du 30 septembre 2011</b>. Paquet hygiène et PMS.", "Repères : PNNS (2001), ANSES (ANC puis VRN), EFSA, OMS.", "EGAlim (2018) : bio, circuits courts, menus végétariens (restauration collective publique)."] },
      ],
    ],
    carte: { centre: "Le cadre", branches: [
      ["Enjeux", ["Nutritionnel, sanitaire", "Économique, social"]],
      ["GEMRCN", ["Cycle de <b>20 repas</b>", "Fréquences"]],
      ["Scolaire", ["Décret <b>2011</b>"]],
      ["Repères", ["PNNS, ANSES", "EGAlim"]],
    ] },
  },
  {
    onglet: "Le plan collectif", titre: "Le plan alimentaire collectif",
    notes: [
      [
        { h: "Individuel ou collectif", p: ["<b>Individuel</b> : sur mesure, adéquation fine au quotidien.", "<b>Collectif</b> : convives hétérogènes ; équilibre général sur une période et acceptabilité par la majorité."] },
        { h: "Le cycle de menus", p: ["Une suite de repas qui se répète (<b>4, 6 ou 8 semaines</b>).", "L’équilibre se pense sur le cycle : ce qui manque un jour se compense ensuite."] },
      ],
      [
        { h: "Fréquences du cours (sur 20 repas)", p: ["Légumes : <b>au moins 10</b>.", "Poisson : <b>2 par semaine</b>, soit 8.", "Frits : <b>au plus 4</b>.", "Produit laitier : <b>20 sur 20</b>."] },
        { h: "Alterner", p: ["Un repas riche (viande grasse, féculent raffiné) suivi d’un plus léger (poisson maigre, légumes, féculent complet)."] },
      ],
    ],
    carte: { centre: "Plan collectif", branches: [
      ["Collectif", ["Équilibre sur la période", "Majorité des convives"]],
      ["Cycle", ["<b>4, 6 ou 8</b> semaines"]],
      ["Sur 20 repas", ["Légumes : au moins <b>10</b>", "Poisson : <b>8</b>", "Frits : au plus <b>4</b>", "Laitier : <b>20</b>"]],
    ] },
  },
  {
    onglet: "Construire les menus", titre: "Construire les menus",
    notes: [
      [
        { h: "Du plan au plat", p: ["Le plan dit « poisson » : lequel, sous quelle forme, avec quoi, comment équilibrer le reste ?"] },
        { h: "Cinq étapes", p: ["1. Durée et structure (entrée, plat, garniture, laitier, dessert).", "2. Répartir les groupes d’aliments.", "3. Choisir et placer les recettes.", "4. Logistique et budget.", "5. Vérifier et ajuster."] },
      ],
      [
        { h: "Varier", p: ["Protéines (viandes blanches, rouges, poissons, œufs, légumineuses), féculents, couleurs et textures, cuisines du monde."] },
        { h: "À éviter dans un repas", p: ["Poisson pané + pommes noisette (deux fritures). Purée + sauce blanche (pas de contraste)."] },
      ],
    ],
    carte: { centre: "Construire", branches: [
      ["Étapes", ["Structure", "Groupes, recettes", "Budget, vérifier"]],
      ["Varier", ["Protéines", "Textures, couleurs"]],
      ["Éviter", ["Deux fritures", "Pas de contraste"]],
    ] },
  },
  {
    onglet: "Les convives", titre: "Les convives",
    notes: [
      [
        { h: "Être accepté et mangé", p: ["Goûts et habitudes (âge, culture) ; enfants méfiants envers l’amer ; aînés : plats traditionnels.", "Nouveauté introduite peu à peu, à côté d’un repère connu.", "Respect des croyances : végétarien, sans porc."] },
        { h: "Mesurer", p: ["Les restes, les enquêtes, les encadrants."] },
      ],
      [
        { h: "Menus types", p: ["<b>Cantine</b> : carottes à l’orange, colin au four, riz semi-complet et courgettes, fromage blanc, pomme.", "<b>Maison de retraite</b> : velouté, émincé de poulet tendre, purée et haricots fondants, camembert, compote : textures douces, protéines.", "<b>Entreprise</b> : un menu adapté au rythme de travail."] },
      ],
    ],
    carte: { centre: "Les convives", branches: [
      ["Acceptabilité", ["Goûts, culture", "Nouveauté progressive"]],
      ["Mesurer", ["Restes", "Enquêtes"]],
      ["Cantine", ["Poisson, légumes, fruit"]],
      ["EHPAD", ["Textures douces", "Protéines"]],
    ] },
  },
  {
    onglet: "Contraintes", titre: "Les contraintes",
    notes: [
      [
        { h: "Le budget", p: ["De quelques euros à moins d’un euro de denrées par repas.", "Protéines économiques (œufs, volailles, légumineuses), produits de saison, surgelés et conserves avec mesure.", "Alterner repas « premium » et économiques ; calibrer les grammages."] },
      ],
      [
        { h: "Matérielles", p: ["Équipements (four mixte ou pas), stockage froid, distribution (liaison : gratins plutôt que fritures), HACCP."] },
        { h: "Humaines", p: ["Effectifs, compétences, organisation, motivation : en sous-effectif, même un bon plan s’applique mal."] },
        { h: "Approvisionnement", p: ["Livraisons, saisons, stockage disponible."] },
      ],
    ],
    carte: { centre: "Contraintes", branches: [
      ["Budget", ["Protéines économiques", "Saison", "Alterner premium"]],
      ["Matériel", ["Équipements", "Stockage"]],
      ["Humain", ["Effectifs", "Compétences"]],
    ] },
  },
  {
    onglet: "Durabilité", titre: "La durabilité",
    notes: [
      [
        { h: "Réduire le gaspillage", p: ["1. Identifier les sources. 2. <b>Adapter les portions</b> (petite, normale, grande faim). 3. Observer les retours-plateaux. 4. Rendre attractif. 5. Valoriser les excédents (HACCP, dons, compost)."] },
        { h: "Local, de saison, bio", p: ["EGAlim : au moins <b>50 %</b> de produits de qualité et durables, dont <b>20 % bio</b>, en restauration collective publique."] },
      ],
      [
        { h: "Impacts globaux", p: ["<b>Énergie</b> : cuissons groupées, vapeur.", "<b>Eau</b> : robinets temporisés.", "<b>Emballages</b> : vrac, réutilisables.", "<b>Déchets organiques</b> : compost, méthanisation."] },
        { h: "Éduquer", p: ["Expliquer les efforts renforce l’adhésion."] },
      ],
    ],
    carte: { centre: "Durabilité", branches: [
      ["Gaspillage", ["Portions adaptées", "Retours-plateaux"]],
      ["EGAlim", ["<b>50 %</b> durables", "<b>20 %</b> bio"]],
      ["Impacts", ["Énergie, eau", "Emballages, déchets"]],
    ] },
  },
  {
    onglet: "Étude de cas", titre: "L’école élémentaire",
    notes: [
      [
        { h: "Le cas", p: ["300 élèves de 6 à 11 ans, <b>2,50 €</b> de denrées par repas, 4 agents, cuisine sur place.", "Décret de 2011 et GEMRCN. La mairie vise 20 % de bio, 30 % de local."] },
        { h: "La démarche", p: ["Plan des 5 repas, produits de saison (automne-hiver), recettes simples et colorées, protéines chères et moins chères alternées, contrôle GEMRCN."] },
      ],
      [
        { h: "Le plan de la semaine", p: ["<b>2 viandes blanches</b>, <b>1 poisson</b>, <b>1 légumineuses ou œufs</b>, <b>1 viande rouge maigre</b>."] },
        { h: "Écart du cours", p: ["Le menu proposé a 1 viande blanche et 2 repas « légumineuses ou œufs » (omelette, chili) : écart noté dans le suivi."] },
        { h: "Budget", p: ["2 protéines coûteuses (poisson, viande rouge), 3 moins chères."] },
      ],
    ],
    carte: { centre: "L’école", branches: [
      ["Cadre", ["<b>2,50 €</b> par repas", "300 élèves"]],
      ["Plan", ["2 viandes blanches", "1 poisson", "1 légumineuses ou œufs", "1 viande rouge"]],
      ["Objectifs", ["20 % bio", "30 % local"]],
    ] },
  },
]);
