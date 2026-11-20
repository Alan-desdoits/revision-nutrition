/* Fiches bristol : Mémo des valeurs nutritionnelles (source : cours/memo-valeurs). Toutes les valeurs sont pour 100 g. */
Bristol.cours("memo-valeurs", [
  {
    onglet: "Comparer", titre: "Repères pour 100 g",
    notes: [
      [
        { h: "Le mémo", p: ["Sept groupes : produits sucrés, matières grasses, laitiers, fruits et légumes, céréaliers, légumineuses et tubercules, viandes, œufs, poissons.", "Toutes les valeurs sont <b>pour 100 g</b> d’aliment."] },
        { h: "Les plus énergétiques", p: ["Beurre <b>750 kcal</b>, chocolat noir 70 % <b>591 kcal</b>, sucre <b>400 kcal</b>, fromage à pâte dure <b>400 kcal</b>, quinoa cru 400 kcal."] },
      ],
      [
        { h: "Les moins énergétiques", p: ["Légumes frais <b>16 kcal</b>, fruits frais <b>40 kcal</b>, yaourt nature 40 kcal, lait 70 kcal, poisson maigre <b>100 kcal</b>."] },
        { h: "Cru ou cuit", p: ["Pâtes : <b>330 kcal</b> crues, <b>144 kcal</b> cuites. Semoule : 330 crue, 169 cuite. Riz blanc cuit : 145 kcal. La cuisson apporte de l’eau."] },
      ],
    ],
    carte: { centre: "Pour 100 g", branches: [
      ["Très riches", ["Beurre <b>750 kcal</b>", "Chocolat noir <b>591 kcal</b>", "Sucre <b>400 kcal</b>"]],
      ["Moyens", ["Pâtes cuites <b>144 kcal</b>", "Volaille crue 150 kcal", "Œuf 150 kcal"]],
      ["Légers", ["Légumes <b>16 kcal</b>", "Fruits <b>40 kcal</b>", "Poisson maigre <b>100 kcal</b>"]],
      ["Cuisson", ["Pâtes : 330 crues, 144 cuites"]],
    ] },
  },
  {
    onglet: "Produits sucrés", titre: "Les produits sucrés",
    notes: [
      [
        { h: "Sucres", p: ["Sucre blanc : <b>99,8 g</b> de glucides (saccharose), <b>400 kcal</b>, ni minéraux ni vitamines. Sucre roux : 85 à 98 g, 390 kcal."] },
        { h: "Confitures et miel", p: ["Confiture : 39 g d’eau, <b>60 g</b> de glucides ; énergie du fruit multipliée par au moins 6, vitamine C disparue.", "Miel : <b>80 g</b> de glucides (≈ 45 % fructose, 35 % glucose), 325 kcal, IG élevé."] },
      ],
      [
        { h: "Chocolats", p: ["Noir 70 % : <b>591 kcal</b>, 46 g de lipides (beurre de cacao), 13 g de fibres, IG 25.", "Au lait : 537 kcal, 56 g de glucides. Blanc : 545 kcal, 60 g de glucides.", "Quantité conseillée : <b>20 à 40 g</b> par jour."] },
        { h: "Biscuits sucrés", p: ["400 kcal, 65 g de glucides, 21 g de lipides (palme, coprah : saturés). Sodium souvent élevé."] },
      ],
    ],
    carte: { centre: "Produits sucrés", branches: [
      ["Sucre", ["<b>99,8 g</b> de glucides", "<b>400 kcal</b>"]],
      ["Miel, confiture", ["Miel <b>80 g</b> de glucides", "Confiture <b>60 g</b>, vitamine C perdue"]],
      ["Chocolat noir", ["<b>591 kcal</b>", "46 g de lipides", "<b>20 à 40 g</b> par jour"]],
      ["Biscuits", ["400 kcal", "Saturés, sodium"]],
    ] },
  },
  {
    onglet: "Matières grasses", titre: "Les matières grasses",
    notes: [
      [
        { h: "Beurre", p: ["<b>82 g</b> de lipides, <b>750 kcal</b> (3 100 kJ).", "Saturés 55 g (70 % des acides gras), mono-insaturés 20 g, polyinsaturés 3 g.", "Vitamine A : 700 µg de rétinol."] },
        { h: "Crème fraîche 30 %", p: ["30,7 g de lipides (65 % saturés), 65 g d’eau, <b>300 kcal</b>. Épaisse ou liquide : valeurs quasi identiques."] },
      ],
      [
        { h: "Huiles végétales (% des acides gras)", p: ["Oléique (oméga-9) : olive <b>70 %</b>, noisette 76 %, colza 54 %.", "Linoléique (oméga-6) : tournesol 57 %, pépins de raisin 66 %, noix 54 %.", "α-linolénique (oméga-3) : noix <b>11 %</b>, colza <b>8,5 %</b>, soja 7 %."] },
        { h: "Margarines", p: ["De 40 à 80 g de lipides : 80 % tournesol = <b>725 kcal</b>, MG légère à tartiner = 365 kcal."] },
      ],
    ],
    carte: { centre: "Matières grasses", branches: [
      ["Beurre", ["<b>82 g</b> de lipides", "<b>750 kcal</b>", "70 % de saturés"]],
      ["Crème 30 %", ["<b>300 kcal</b>", "65 % de saturés"]],
      ["Huiles", ["Olive : oléique <b>70 %</b>", "Tournesol : oméga-6", "Colza, noix : oméga-3"]],
      ["Margarines", ["40 à 80 g de lipides"]],
    ] },
  },
  {
    onglet: "Produits laitiers", titre: "Les produits laitiers",
    notes: [
      [
        { h: "Lait", p: ["<b>90 g</b> d’eau, 2,8 à 3,2 g de protéines (80 % caséines), 5 g de lactose, <b>70 kcal</b>.", "Calcium <b>120 mg</b> : un bol (¼ L) apporte 300 mg, ≈ 30 % des recommandations."] },
        { h: "Yaourts", p: ["Nature : ≈ 4 g de protéines, <b>150 mg</b> de calcium, 40 kcal. Sucré ou aux fruits : 12,5 à 13,4 g de glucides, 80 kcal."] },
      ],
      [
        { h: "Fromages", p: ["Plus il est affiné, moins il a d’eau et plus il est riche.", "Frais : 75 g d’eau, 15 g de protéines, 200 kcal, 150 mg de calcium.", "Pâte molle : 25 g de protéines, 300 kcal, 250 à 550 mg de calcium.", "Pâte pressée cuite : 30 g de protéines, <b>400 kcal</b>, <b>950 mg</b> de calcium."] },
        { h: "Crèmes desserts", p: ["De 82 kcal (allégée) à 170 kcal (aux œufs)."] },
      ],
    ],
    carte: { centre: "Produits laitiers", branches: [
      ["Lait", ["<b>70 kcal</b>", "Calcium <b>120 mg</b>", "Un bol : 300 mg"]],
      ["Yaourt nature", ["≈ 4 g de protéines", "Calcium <b>150 mg</b>"]],
      ["Fromages", ["Frais : 200 kcal", "Pâte molle : 300 kcal", "Pâte dure : <b>950 mg</b> de calcium"]],
      ["Règle", ["Plus affiné, plus concentré"]],
    ] },
  },
  {
    onglet: "Fruits et légumes", titre: "Fruits et légumes",
    notes: [
      [
        { h: "Frais (moyennes)", p: ["Fruits : <b>88 g</b> d’eau, 10 g de glucides, 2 g de fibres, <b>40 kcal</b>, vitamine C 20 mg.", "Légumes : <b>92 g</b> d’eau, 3 g de glucides, 3 g de fibres, <b>16 kcal</b>, β-carotène 815 µg."] },
        { h: "Châtaignes grillées", p: ["Fruit amylacé : 35 g de glucides, 7,5 g de fibres, 550 mg de potassium, 700 kJ."] },
      ],
      [
        { h: "Fruits secs (moyenne)", p: ["30 g d’eau, <b>60 g</b> de glucides, <b>250 kcal</b>, 8,5 g de fibres, 850 mg de potassium.", "Banane séchée 360 kcal, pêche 300, abricot <b>150</b>.", "Le séchage concentre sucre, fibres et minéraux."] },
      ],
    ],
    carte: { centre: "Fruits et légumes", branches: [
      ["Fruits frais", ["<b>88 g</b> d’eau", "<b>40 kcal</b>", "Vitamine C 20 mg"]],
      ["Légumes frais", ["<b>92 g</b> d’eau", "<b>16 kcal</b>", "β-carotène"]],
      ["Fruits secs", ["<b>60 g</b> de glucides", "<b>250 kcal</b>", "Potassium 850 mg"]],
      ["Châtaignes", ["Amidon, fibres"]],
    ] },
  },
  {
    onglet: "Produits céréaliers", titre: "Les produits céréaliers",
    notes: [
      [
        { h: "Pâtes et semoule", p: ["Crues : 12 g de protéines, 70 g de glucides, <b>330 kcal</b>. Cuites : 4 g, 35 g, <b>144 à 169 kcal</b>.", "Protéines du blé : lysine limitante."] },
        { h: "Autres céréales", p: ["Riz blanc cuit 145 kcal. Avoine 378 kcal, 11 g de fibres. Seigle 15 g de fibres.", "Quinoa cru : 13 g de protéines <b>sans facteur limitant</b>, sans gluten, 400 kcal."] },
      ],
      [
        { h: "Farines", p: ["Type = cendres (minéraux) : T45 (pâtisserie) à <b>T150</b> (complète).", "Blanche T45 : 356 kcal, 2,5 g de fibres. Complète T150 : 300 kcal, <b>7 g</b> de fibres, plus de magnésium et de fer."] },
        { h: "Riz et IG", p: ["Arborio 69, basmati 58, rouge 55, brun et Camargue 50, noir <b>42</b>."] },
      ],
    ],
    carte: { centre: "Céréaliers", branches: [
      ["Cru ou cuit", ["Pâtes crues <b>330 kcal</b>", "Pâtes cuites <b>144 kcal</b>"]],
      ["Farines", ["T45 : blanche", "T150 : complète, <b>7 g</b> de fibres"]],
      ["Quinoa", ["Sans facteur limitant", "Sans gluten"]],
      ["IG des riz", ["Arborio 69", "Noir 42"]],
    ] },
  },
  {
    onglet: "Légumineuses et tubercules", titre: "Légumineuses et tubercules",
    notes: [
      [
        { h: "Légumineuses (moyenne)", p: ["Protéines <b>20 g</b> (lentille 25,5 g, fève 26 g), glucides 50 g dont amidon 45 g.", "Fibres <b>15 g</b> : grande richesse. <b>300 kcal</b>."] },
        { h: "Leurs minéraux", p: ["Fer <b>6,5 mg</b>, potassium 1 000 mg, magnésium 125 mg, cuivre 0,7 mg.", "B9 250 µg : 45 % des recommandations par portion."] },
      ],
      [
        { h: "Tubercules", p: ["Pomme de terre : <b>78 g</b> d’eau, 16,7 g de glucides, <b>81 kcal</b>, potassium 363 mg.", "Patate douce : 63 kcal, 2,9 g de fibres.", "Manioc : 32 g de glucides, <b>134 kcal</b>."] },
        { h: "À retenir", p: ["Légumineuses : protéines, fibres, minéraux. Tubercules : eau et amidon."] },
      ],
    ],
    carte: { centre: "Légumineuses, tubercules", branches: [
      ["Légumineuses", ["Protéines <b>20 g</b>", "Fibres <b>15 g</b>", "<b>300 kcal</b>"]],
      ["Minéraux", ["Fer <b>6,5 mg</b>", "Potassium 1 000 mg", "B9 250 µg"]],
      ["Pomme de terre", ["<b>78 g</b> d’eau", "<b>81 kcal</b>"]],
      ["Manioc", ["<b>134 kcal</b>"]],
    ] },
  },
  {
    onglet: "Viandes, œufs, poissons", titre: "Viandes, œufs, poissons",
    notes: [
      [
        { h: "Volaille", p: ["<b>27 g</b> de protéines, 6 g de lipides, <b>150 kcal</b> crue, 200 cuite. Peu de collagène : bonne digestibilité.", "Poulet cru : filet <b>1 %</b> de lipides, cuisse avec peau 12 %, peau seule 50 %."] },
        { h: "Gibier", p: ["29,6 g de protéines, 3,7 g de lipides, fer 3 mg."] },
      ],
      [
        { h: "Poissons", p: ["<b>19 g</b> de protéines pour tous.", "Maigres (1 à 3 g de lipides) : <b>100 kcal</b>. Demi-gras (3 à 10 g) : 120 kcal. Gras (plus de 10 g) : <b>200 kcal</b>.", "Iode, fluor, sélénium ; vitamines A, D, B12."] },
        { h: "Œuf et fruits de mer", p: ["Œuf : <b>150 kcal</b>, A 180 µg, B12 1,5 µg ; le blanc apporte du sodium.", "Crevette cuite 99 kcal, calamar cru 77 kcal."] },
      ],
    ],
    carte: { centre: "VPO", branches: [
      ["Volaille", ["<b>27 g</b> de protéines", "<b>150 kcal</b> crue", "Filet <b>1 %</b> de lipides"]],
      ["Poissons", ["<b>19 g</b> de protéines", "Maigre <b>100 kcal</b>", "Gras <b>200 kcal</b>"]],
      ["Œuf", ["<b>150 kcal</b>", "Vitamines A, B12"]],
      ["Fruits de mer", ["Crevette 99 kcal", "Calamar 77 kcal"]],
    ] },
  },
]);
