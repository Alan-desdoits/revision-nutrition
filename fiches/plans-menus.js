/* Fiches bristol : Plans alimentaires et menus (source : cours/plans-menus) */
Bristol.cours("plans-menus", [
  {
    onglet: "Plan ou menu ?", titre: "Plan ou menu ?",
    notes: [
      [
        { h: "Le plan alimentaire", p: ["<b>Le cadre</b> : repères, priorités, équilibres. Stable mais modulable.", "Fixe la structure de la journée, la répartition de l’énergie, la composition des repas, l’adéquation aux besoins, l’équilibre <b>dans la durée</b>."] },
        { h: "Le menu", p: ["<b>Le contenu</b> : que manger concrètement aujourd’hui ou cette semaine.", "Plus exposé au réel : saison, budget, temps, équipement, famille."] },
      ],
      [
        { h: "Complémentaires", p: ["Sans plan, les menus sont une suite de bonnes intentions. Sans menus, le plan reste abstrait."] },
        { h: "À retenir", p: ["Le plan ne dicte pas les repas à la lettre : <b>cohérence globale</b>, pas la perfection à chaque repas. Un menu trop rigide devient inapplicable."] },
      ],
    ],
    carte: { centre: "Plan ou menu ?", branches: [
      ["Plan", ["Le cadre", "Structure, répartition", "Équilibre dans la durée"]],
      ["Menu", ["Le contenu", "Saison, budget, temps"]],
      ["Ensemble", ["Complémentaires", "Pas de rigidité"]],
    ] },
  },
  {
    onglet: "Répartir les repas", titre: "Répartir les repas",
    notes: [
      [
        { h: "Trois repas", p: ["<b>Petit-déjeuner</b> : rompt le jeûne, concentration, moins de fringales.", "<b>Déjeuner</b> : apport principal pour l’après-midi.", "<b>Dîner</b> : jusqu’au coucher, sans digestion lourde."] },
        { h: "Répartition de ce cours", p: ["Petit-déjeuner <b>20 à 25 %</b> · déjeuner <b>35 à 40 %</b> · collation <b>5 à 10 %</b> · dîner <b>30 à 35 %</b>.", "Pour 2 000 kcal : 400 à 500, 700 à 800, 100 à 200, 600 à 700 kcal."] },
      ],
      [
        { h: "Collation ou non ?", p: ["Le matin : petit-déjeuner très tôt, matinée physique.", "L’après-midi : tenir jusqu’au dîner (enfants, ados, âgés, actifs).", "<b>Ni systématique, ni obligatoire</b> : seulement si un besoin est identifié."] },
        { h: "Le principe", p: ["Le plan s’adapte à la personne : travail, horaires, sport."] },
      ],
    ],
    carte: { centre: "Répartir", branches: [
      ["Petit-déjeuner", ["<b>20 à 25 %</b>"]],
      ["Déjeuner", ["<b>35 à 40 %</b>"]],
      ["Collation", ["<b>5 à 10 %</b>", "Si besoin"]],
      ["Dîner", ["<b>30 à 35 %</b>"]],
    ] },
  },
  {
    onglet: "Composer un repas", titre: "Composer un repas",
    notes: [
      [
        { h: "L’assiette", p: ["<b>½ légumes</b> (au moins 2 portions, 2 variétés).", "<b>¼ féculents</b>.", "<b>¼ protéines</b>."] },
        { h: "Repères de ce cours (% AET)", p: ["Glucides <b>40 à 55 %</b>, lipides <b>35 à 40 %</b>, protéines <b>10 à 20 %</b>."] },
      ],
      [
        { h: "Micronutriments", p: ["Vitamines, minéraux, fibres : la <b>variété</b> est le meilleur moyen de tout couvrir."] },
        { h: "Densité nutritionnelle", p: ["Les calories viennent d’aliments de bonne qualité, pas de produits très transformés."] },
        { h: "Sur la semaine", p: ["Un repas plus léger en protéines est compensé par un autre."] },
      ],
    ],
    carte: { centre: "Un repas", branches: [
      ["Assiette", ["½ légumes", "¼ féculents", "¼ protéines"]],
      ["Repères", ["Glucides <b>40 à 55 %</b>", "Lipides <b>35 à 40 %</b>", "Protéines <b>10 à 20 %</b>"]],
      ["Qualité", ["Variété", "Densité nutritionnelle"]],
    ] },
  },
  {
    onglet: "Construire un menu", titre: "Construire un menu",
    notes: [
      [
        { h: "Quatre étapes", p: ["Traduire le plan en catégories, choisir des aliments, les associer en repas, varier sur la semaine."] },
        { h: "Un déjeuner", p: ["Protéine + féculent + légume + fruit ou laitier.", "Exemple du cours : <b>papillote de saumon + riz + ratatouille + fromage blanc au miel</b>."] },
        { h: "Co-construire", p: ["Des menus qui ressemblent à la personne."] },
      ],
      [
        { h: "Critères de choix", p: ["<b>Valeur nutritionnelle</b> : peu transformé.", "<b>Goûts et habitudes</b> : le plaisir favorise l’adhésion.", "<b>Saisonnalité</b>.", "<b>Faisabilité</b> : temps, équipement, budget.", "<b>Sensorialité</b> : couleurs, saveurs, textures."] },
      ],
    ],
    carte: { centre: "Un menu", branches: [
      ["Composer", ["Protéine + féculent", "+ légume", "+ fruit ou laitier"]],
      ["Varier", ["Viande, poisson, œufs", "Légumineuses"]],
      ["Critères", ["Nutrition, goûts", "Saison, faisabilité", "Sensorialité"]],
    ] },
  },
]);
