/* Fiches bristol : Les produits sucrés (source : cours/produits-sucres) */
Bristol.cours("produits-sucres", [
  {
    onglet: "Le sucre", titre: "Le sucre",
    notes: [
      [
        { h: "Deux sens", p: ["Pour le scientifique : un <b>glucide simple</b>. Pour tout le monde : le saccharose et les produits qui en contiennent."] },
        { h: "Les sucres simples", p: ["<b>Mono</b> : absorbés sans digestion (glucose, fructose, galactose).", "<b>Di</b> : à hydrolyser. Saccharose = glucose + fructose, lactose = glucose + galactose, maltose = glucose + glucose."] },
      ],
      [
        { h: "Le pic de glycémie", p: ["Produit sucré seul : <b>pic</b>, insuline, puis <b>chute</b> sous le niveau de départ (hypoglycémie réactionnelle) : la fringale.", "Dans un repas complet : pic et creux modérés."] },
        { h: "Index glycémique", p: ["Élevé <b>plus de 70</b>, moyen 55 à 70, bas <b>moins de 55</b>.", "Le cercle : sucre, pic, insuline, hypoglycémie, fringale, nouvelle prise de sucre."] },
      ],
    ],
    carte: { centre: "Le sucre", branches: [
      ["Mono", ["Glucose, fructose", "Galactose"]],
      ["Di", ["Saccharose", "Lactose, maltose"]],
      ["Glycémie", ["Pic puis chute", "Hypoglycémie réactionnelle"]],
      ["IG", ["Élevé : plus de <b>70</b>", "Bas : moins de <b>55</b>"]],
    ] },
  },
  {
    onglet: "Les sucres", titre: "Les sucres et sirops",
    notes: [
      [
        { h: "Betterave ou canne", p: ["Même molécule. Blanc, blond ou roux : près de <b>100 % de saccharose</b>, mêmes effets sur la glycémie.", "La <b>mélasse</b> colore et parfume ; ses minéraux sont insignifiants."] },
        { h: "Les cristaux", p: ["Sucre roux industriel : sucre blanc <b>recoloré</b>. Cassonade : canne seulement. Vergeoise : betterave."] },
        { h: "Sirops", p: ["Glucose (amidon hydrolysé), fructose (pouvoir sucrant 1,2 à 1,8), agave (jusqu’à 90 % de fructose), miel."] },
      ],
      [
        { h: "Pouvoir sucrant (saccharose = 1)", p: ["Fructose <b>1,7</b> · glucose 0,7 · lactose <b>0,2 à 0,4</b>.", "Ne dit rien des calories. Le froid atténue le sucré."] },
        { h: "Édulcorants", p: ["Codes <b>E900 à E999</b> (sauf sorbitol E420, maltitol E421). Aspartame : 150 à 200 fois le saccharose.", "Les produits « light » ne font pas maigrir ; la stévia n’est pas meilleure parce que naturelle."] },
      ],
    ],
    carte: { centre: "Les sucres", branches: [
      ["Cristaux", ["Près de <b>100 %</b> saccharose", "Roux = blanc recoloré"]],
      ["Sirops", ["Glucose", "Fructose, agave"]],
      ["Pouvoir sucrant", ["Fructose <b>1,7</b>", "Saccharose <b>1</b>", "Lactose 0,2 à 0,4"]],
      ["Édulcorants", ["E900 à E999", "Light ≠ maigrir"]],
    ] },
  },
  {
    onglet: "Rôles techniques", titre: "Les rôles techniques",
    notes: [
      [
        { h: "Texture", p: ["Retient l’eau (moelleux), abaisse le point de congélation (glaces souples), gélifie avec la pectine (confitures), stabilise les mousses."] },
        { h: "Conservation", p: ["Capte l’<b>eau disponible</b> : les micro-organismes ne se développent plus. Confitures, fruits confits."] },
      ],
      [
        { h: "Fermentation", p: ["Carburant des levures : pâtes levées, rhum, chaptalisation."] },
        { h: "Couleur et arômes", p: ["<b>Caramélisation</b> à haute température. <b>Réaction de Maillard</b> (sucres + protéines) : croûte du pain, biscuits."] },
        { h: "« Sans sucre »", p: ["Un édulcorant donne le goût, pas la masse, la texture ni la conservation : c’est une reformulation complète."] },
      ],
    ],
    carte: { centre: "Rôles techniques", branches: [
      ["Texture", ["Moelleux", "Glaces souples", "Confitures"]],
      ["Conservation", ["Capte l’eau"]],
      ["Fermentation", ["Levures"]],
      ["Couleur", ["Caramélisation", "Maillard"]],
    ] },
  },
  {
    onglet: "Santé et repères", titre: "Santé et repères",
    notes: [
      [
        { h: "Sucres libres", p: ["Sucres ajoutés + miel, sirops, <b>jus de fruits</b>, confitures. <b>Pas</b> ceux des fruits entiers."] },
        { h: "Repère OMS", p: ["Moins de <b>10 %</b> de l’AET, idéalement moins de <b>5 %</b>.", "Pour 2 000 kcal : <b>50 g</b> maximum, 25 g idéal.", "Une canette de soda : 30 à 40 g."] },
      ],
      [
        { h: "Ce que fait l’excès", p: ["Faim et poids : pic, insuline, fringale.", "<b>Caries</b> : la fréquence compte, surtout liquide.", "<b>Diabète de type 2</b> : résistance à l’insuline.", "Cœur et foie : triglycérides, stéatose (fructose des sirops)."] },
        { h: "Le but", p: ["Comprendre et intégrer raisonnablement, sans bannir ni culpabiliser."] },
      ],
    ],
    carte: { centre: "Santé", branches: [
      ["Sucres libres", ["Ajoutés, miel, jus", "Pas les fruits entiers"]],
      ["OMS", ["Moins de <b>10 %</b> AET", "Idéal <b>5 %</b>", "<b>50 g</b> pour 2 000 kcal"]],
      ["Excès", ["Caries", "Diabète de type 2", "Stéatose"]],
    ] },
  },
  {
    onglet: "Familles de produits", titre: "Les familles de produits",
    notes: [
      [
        { h: "Énergie pour 100 g", p: ["Sucre <b>400 kcal</b>, confiture ≈ 250 kcal (≈ 60 % de sucre), chocolat <b>plus de 500 kcal</b>.", "Densité énergétique élevée, densité nutritionnelle faible."] },
        { h: "Confitures", p: ["Au moins <b>35 g</b> de fruits/100 g (<b>45 g</b> « extra »). Gelée : jus filtré. Marmelade : agrumes."] },
      ],
      [
        { h: "Chocolat", p: ["Noir ≥ <b>43 %</b> de cacao, au lait ≥ <b>25 %</b>, blanc ≥ 20 % de beurre de cacao.", "1 carré ≈ <b>55 kcal</b>. Plus il est noir, moins il a de sucre.", "Fève, fermentation, torréfaction, conchage, tempérage."] },
        { h: "Glaces et sorbets", p: ["Crème glacée : matières grasses laitières. Sorbet : ni lait ni crème, parfois très sucré."] },
        { h: "Miel", p: ["Ni additif, ni colorant, ni sucre ajouté."] },
      ],
    ],
    carte: { centre: "Produits sucrés", branches: [
      ["Confiture", ["≈ 60 % de sucre", "≥ <b>35 g</b> de fruits"]],
      ["Chocolat", ["Noir ≥ <b>43 %</b>", "Lait ≥ <b>25 %</b>", "1 carré ≈ <b>55 kcal</b>"]],
      ["Glaces", ["Crème glacée : gras", "Sorbet : sans lait"]],
      ["Miel", ["Rien d’ajouté"]],
    ] },
  },
  {
    onglet: "Cas pratique", titre: "Le cas de Mme Lemoine",
    notes: [
      [
        { h: "Le cas", p: ["Infirmière, 42 ans, horaires décalés. + 4 kg en un an, glycémie à jeun <b>1,10 g/L</b>. « J’ai besoin de sucre pour tenir », toujours fatiguée."] },
        { h: "Constats", p: ["Du sucre à presque chaque moment, sans fibres ni protéines. Sodas, jus, boissons énergisantes.", "≈ <b>130 g</b> de sucres libres par jour : plus de 2,5 fois la limite de 50 g."] },
        { h: "Pourquoi la fatigue", p: ["Pics puis chutes de glycémie ; gardes de nuit qui dérèglent les repas."] },
      ],
      [
        { h: "Risques", p: ["Fringales, poids abdominal, résistance à l’insuline, diabète de type 2, triglycérides."] },
        { h: "Stratégies", p: ["Réduire peu à peu le sucre du café (2, 1, ½, 0).", "Eau, thé au lieu des boissons sucrées.", "Collations de garde : fruit + amandes ; yaourt nature + fruits rouges.", "Repas structurés, sucre pour le plaisir, pas contre la fatigue."] },
      ],
    ],
    carte: { centre: "Mme Lemoine", branches: [
      ["Constats", ["≈ <b>130 g</b> de sucres libres", "Boissons sucrées"]],
      ["Causes", ["Pics et chutes", "Horaires décalés"]],
      ["Risques", ["Diabète de type 2", "Poids abdominal"]],
      ["Solutions", ["Moins de sucre peu à peu", "Fruit + amandes", "Eau, thé"]],
    ] },
  },
]);
