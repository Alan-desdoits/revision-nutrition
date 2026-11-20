/* Fiches bristol : Composition et répartition des repas (source : cours/composition-repas) */
Bristol.cours("composition-repas", [
  {
    onglet: "L’équilibre", titre: "L’équilibre alimentaire",
    notes: [
      [
        { h: "Trois dimensions", p: ["<b>L’individu</b> : son profil, point de départ.", "<b>Les apports</b> : dans les bonnes proportions.", "<b>Le rythme</b> : traditionnellement 4 repas."] },
        { h: "Les 7 catégories du PNNS", p: ["Eau · féculents, légumineuses, céréales · fruits et légumes · produits laitiers · viande, poisson, œufs · matières grasses · produits sucrés.", "Aucune n’est mauvaise en soi, sauf les sucrés, <b>sans rôle indispensable</b> : tout est question de proportions."] },
      ],
      [
        { h: "Repères par catégorie", p: ["Eau : la seule boisson indispensable.", "Féculents : plutôt complets. Fruits et légumes : variété et régularité.", "VPO : diversifier, limiter viandes rouges et transformées.", "Matières grasses : la qualité (colza, olive, noix)."] },
        { h: "Santé publique", p: ["Surpoids en hausse, maladies cardiovasculaires, diabète : l’équilibre devient une question de prévention collective."] },
      ],
    ],
    carte: { centre: "L’équilibre", branches: [
      ["Dimensions", ["L’individu", "Les apports", "Le rythme"]],
      ["7 catégories", ["Eau, féculents", "Fruits et légumes, laitiers", "VPO, gras, sucrés"]],
      ["Principe", ["Tout est proportion", "Sucrés : non indispensables"]],
    ] },
  },
  {
    onglet: "La pyramide", titre: "La pyramide alimentaire",
    notes: [
      [
        { h: "De la base au sommet", p: ["Eau et boissons non sucrées (à volonté), fruits et légumes, féculents, VVPOLAV, laitiers, fruits à coque, matières grasses ajoutées, non indispensables.", "Version 2020 (PNNS 4) : fruits à coque à part, fruits et légumes séparés."] },
        { h: "En portions", p: ["Fruits et légumes <b>5 à 7</b> · féculents <b>3 à 5</b> · laitiers <b>3</b> · VPO <b>2</b> · matières grasses : petites quantités · sucrés : pas tous les jours."] },
      ],
      [
        { h: "Augmenter", p: ["Fruits et légumes, légumes secs, fruits à coque non salés, fait maison, activité physique."] },
        { h: "Aller vers", p: ["Féculents complets, poissons gras et maigres en alternance, huiles de colza, noix, olive, saison, local."] },
        { h: "Réduire", p: ["Sucrés, salés, charcuterie, viande, Nutri-Score D et E, temps assis, alcool."] },
      ],
    ],
    carte: { centre: "La pyramide", branches: [
      ["Base", ["Eau à volonté", "Fruits et légumes <b>5 à 7</b>"]],
      ["Milieu", ["Féculents <b>3 à 5</b>", "Laitiers <b>3</b>", "VPO <b>2</b>"]],
      ["Sommet", ["Matières grasses : peu", "Sucrés : pas tous les jours"]],
      ["Message", ["Augmenter, aller vers, réduire"]],
    ] },
  },
  {
    onglet: "Étiquette et Nutri-Score", titre: "Étiquette et Nutri-Score",
    notes: [
      [
        { h: "Le Nutri-Score", p: ["De <b>A</b> (meilleure qualité) à <b>E</b>, pour 100 g.", "Ratio entre ce qui est <b>à limiter</b> (sel, sucres, saturés) et ce qui est <b>favorable</b> (protéines, légumineuses, fruits et légumes, fibres).", "Ex. sablés industriels : les points négatifs l’emportent."] },
      ],
      [
        { h: "Lire une étiquette", p: ["Nom du produit ; <b>ingrédients</b> par ordre décroissant de poids ; <b>allergènes</b> mis en évidence ; déclaration nutritionnelle <b>pour 100 g</b> et par portion ; allégations ; conservation, date, lot, origine."] },
        { h: "Le rôle du professionnel", p: ["Un support pédagogique : quelques clés de lecture liées à l’objectif de la personne."] },
      ],
    ],
    carte: { centre: "Nutri-Score, étiquette", branches: [
      ["Nutri-Score", ["De <b>A</b> à <b>E</b>", "Pour 100 g"]],
      ["À limiter", ["Sel, sucres", "Saturés"]],
      ["Favorable", ["Protéines, fibres", "Fruits, légumes"]],
      ["Étiquette", ["Ingrédients décroissants", "Allergènes", "Pour 100 g"]],
    ] },
  },
  {
    onglet: "Les repas", titre: "La répartition des repas",
    notes: [
      [
        { h: "Part de l’énergie", p: ["Petit-déjeuner <b>15 à 20 %</b> · déjeuner <b>40 à 45 %</b> · collation <b>5 à 10 %</b> · dîner <b>35 à 40 %</b>."] },
        { h: "Petit-déjeuner", p: ["Rompre le jeûne. Céréale + protéine + fruit + boisson non sucrée. Le sauter favorise le grignotage."] },
        { h: "Déjeuner", p: ["Le plein d’énergie : féculents, légumes, protéine, laitier, fruit."] },
      ],
      [
        { h: "Collation", p: ["Facultative : après un effort ou un long écart. Fruits secs, fruit, laitier ou pain complet + chocolat noir."] },
        { h: "Dîner", p: ["Légumes majoritaires, protéine légère, petite portion de féculents. Trop riche : sommeil perturbé ; trop léger : grignotage nocturne."] },
        { h: "La régularité", p: ["Glycémie et hormones de la faim régulées, confort digestif, moins de grignotage."] },
      ],
    ],
    carte: { centre: "Les repas", branches: [
      ["Petit-déjeuner", ["<b>15 à 20 %</b>", "Céréale, protéine, fruit"]],
      ["Déjeuner", ["<b>40 à 45 %</b>", "Repas clé"]],
      ["Collation", ["<b>5 à 10 %</b>", "Facultative"]],
      ["Dîner", ["<b>35 à 40 %</b>", "Légumes majoritaires"]],
    ] },
  },
]);
