/* Mémo de révision imprimé : Mémo des valeurs nutritionnelles (source : cours/memo-valeurs). Valeurs pour 100 g. */
Fiches.memo([
  {
    onglet: "Comparer",
    blocs: [
      { t: "Le mémo", k: "ink", p: ["Sept groupes : produits sucrés, matières grasses, produits laitiers, fruits et légumes, produits céréaliers, légumineuses et tubercules, viandes, œufs et poissons. Toutes les valeurs sont <b>pour 100 g</b> ; un tiret signifie que le mémo ne donne pas la valeur."] },
      { t: "Énergie de quelques aliments (kcal/100 g)", k: "ink", table: [["Aliment", "kcal", "Aliment", "kcal"], ["Beurre", "750", "Pâtes cuites", "144"], ["Chocolat noir 70 %", "591", "Riz blanc cuit", "145"], ["Sucre blanc", "400", "Volaille crue", "150"], ["Fromage à pâte pressée cuite", "400", "Œuf", "150"], ["Quinoa cru", "400", "Poisson maigre", "100"], ["Pâtes ou semoule crues", "330", "Fruits frais (moyenne)", "40"], ["Légumineuses (moyenne)", "300", "Légumes frais (moyenne)", "16"]] },
      { t: "Exemple : les pâtes", k: "glu", kv: [["Crues", "12 g de protéines, 70 g de glucides, 3 g de fibres, 330 kcal (1 400 kJ)"], ["Cuites", "60 g d’eau, 4 g de protéines, 35 g de glucides, 1,5 g de fibres, 144 kcal (610 kJ)"], ["Protéines", "gluten ; lysine limitante ; CUD ≈ 80 %, VB ≈ 50 % ; à compléter par des protéines animales ou des légumineuses"]] },
    ],
  },
  {
    onglet: "Produits sucrés",
    blocs: [
      { t: "Sucres, miel, confitures", k: "sug", table: [["Aliment", "Glucides", "Énergie", "À retenir"], ["Sucre blanc", "≥ 99,8 g", "400 kcal", "Presque uniquement du saccharose ; ni minéraux ni vitamines"], ["Sucre roux", "85 à 98 g", "390 kcal", "Un peu moins pur ; traces de B"], ["Confitures", "60 g (eau 39 g)", "1 060 kJ · 400 kcal", "Énergie du fruit × 6 au moins ; vitamine C disparue ; IG ≈ 75"], ["Miel", "80 g (eau 20 g)", "325 kcal", "≈ 45 % fructose, 35 % glucose ; IG élevé ; potassium 50 mg"]],
        retenir: "Confitures : le mémo donne 1 060 kJ et 400 kcal, qui ne concordent pas ; les deux valeurs sont reprises telles quelles." },
      { t: "Chocolats", k: "sug", table: [["Chocolat", "Lipides", "Glucides", "Fibres", "Énergie", "IG"], ["Noir 70 %", "46 g", "27 g", "13 g", "591 kcal", "25"], ["Au lait", "31 g", "56 g", "3 g", "537 kcal", "45"], ["Blanc", "34 g", "60 g", "1 g", "545 kcal", "55"]],
        p: ["Beurre de cacao : 65 % d’AG saturés (stéarique, palmitique), 35 % d’oléique. Quantité conseillée : 20 à 40 g par jour. Poudre chocolatée non sucrée : 22,4 g de protéines, 29,5 g de fibres, fer 48,5 mg, potassium 3 900 mg."] },
      { t: "Biscuits sucrés", k: "sug", p: ["4,2 g d’eau (double cuisson), 7 g de protéines, 21 g de lipides (palme, coprah, huiles hydrogénées, beurre), 65 g de glucides (≈ 25 % de sucres simples), 2 g de fibres, 400 kcal. Sodium souvent important."] },
    ],
  },
  {
    onglet: "Matières grasses",
    blocs: [
      { t: "Crème et beurre", k: "lip", table: [["Aliment", "Eau", "Lipides", "Énergie", "À retenir"], ["Crème fraîche 30 %", "65 g", "30,7 g", "300 kcal", "65 % de saturés ; épaisse ou liquide : valeurs quasi identiques"], ["Beurre", "16 g", "82 g", "750 kcal (3 100 kJ)", "Saturés 55 g (70 %), mono 20 g, poly 3 g ; rétinol 700 µg"]] },
      { t: "Les huiles (% des acides gras)", k: "lip", table: [["Huile", "Palmitique", "Stéarique", "Oléique", "Linoléique", "α-linolénique"], ["Arachide", "9", "3", "52", "25", "0,2"], ["Argan", "12", "3", "45", "33", "0,1"], ["Olive vierge", "10", "3", "70", "6", "0,6"], ["Colza", "4", "1,5", "54", "18", "8,5"], ["Germe de maïs", "10", "1,7", "23", "53", "0,1"], ["Noisette", "5,5", "2,5", "76", "12", "0,5"], ["Noix", "7", "3", "16", "54", "11"], ["Pépins de raisin", "7", "4", "18", "66", "0,3"], ["Sésame", "8", "5,5", "38,5", "40", "0,3"], ["Tournesol", "6", "3,5", "26", "57", "0,1"], ["Soja", "10", "4", "22", "51,5", "7"]] },
      { t: "Les margarines", k: "lip", table: [["Margarine", "Lipides", "Saturés", "Vit. E", "kcal"], ["80 % tournesol", "80 g", "16 g", "60 mg", "725"], ["60 % allégée", "60 g", "17 g", "18 mg", "545"], ["60 % allégée oméga 3 et 6", "55 g", "16 g", "27 mg", "500"], ["MG légère à tartiner", "40 g", "14 g", "5 mg", "365"], ["MG composée allégée", "60 g", "20 g", "10 mg", "545"]] },
    ],
  },
  {
    onglet: "Produits laitiers",
    blocs: [
      { t: "Lait cru de mélange", k: "lai", kv: [["Composition", "eau 90 g, protéines 2,8 à 3,2 g, lipides 1,6 g (3 à 5 g entier), lactose 5 g, 70 kcal (280 kJ)"], ["Protéines", "80 % caséines, 20 % lactosérum (β-lactoglobuline allergisante) ; CUD ≈ 100 %, VB 90 %"], ["Lipides", "⅔ saturés, ⅓ mono-insaturés"], ["Calcium", "120 mg, Ca/P = 1,4 ; un bol (¼ L) = 300 mg, ≈ 30 % des recommandations"], ["Vitamines", "un bol : 10 % de B1, 35 % de B2, 15 % de B5"]] },
      { t: "Les fromages", k: "lai", table: [["Fromage", "Eau", "Protéines", "Lipides", "Cholestérol", "Énergie", "Calcium", "Sodium"], ["Frais", "75 g", "15 g", "15 g", "50 mg", "200 kcal", "150 mg", "50 mg"], ["Pâte molle", "50 g", "25 g", "25 g", "75 mg", "300 kcal", "250 à 550 mg", "500 à 600 mg"], ["Pâte pressée cuite", "35 g", "30 g", "30 g", "110 mg", "400 kcal", "950 mg", "350 mg"]],
        p: ["Pâte molle : croûte moisie 250 mg de calcium et 500 mg de sodium ; croûte lavée 550 et 600 mg. Les affinés concentrent le calcium ; le lactose y est transformé."] },
      { t: "Yaourts (CIQUAL)", k: "lai", table: [["Yaourt", "Protéines", "Glucides", "Calcium", "kcal"], ["Nature ordinaire", "4,3 g", "4 g", "150 mg", "40"], ["Nature entier", "4,1 g", "3,6 g", "130 mg", "50"], ["Sucré", "3,5 g", "12,5 g", "120 mg", "80"], ["Aromatisé entier", "3,4 g", "12,2 g", "120 mg", "85"], ["Aux fruits entier", "3,3 g", "13,4 g", "118 mg", "80"]] },
      { t: "Crèmes desserts", k: "lai", p: ["De 82 kcal (allégée en MG) à 170 kcal (aux œufs) ; flan et crème caramel 85 kcal ; viennois, liégeois 150 kcal ; 15 à 25 g de glucides."] },
    ],
  },
  {
    onglet: "Fruits et légumes",
    blocs: [
      { t: "Frais (moyennes)", k: "fl", table: [["", "Eau", "Glucides", "Fibres", "Énergie", "Vitamines", "Minéraux"], ["Fruits", "88 g", "10 g", "2 g", "40 kcal", "β-carotène 150 µg, C 20 mg, B9 25 µg", "K 200, Ca 20, Mg 15 mg"], ["Légumes", "92 g", "3 g", "3 g", "16 kcal", "β-carotène 815 µg, C 10,2 mg, B9 35,4 µg", "K 200, Ca 40, Na 30 mg"]] },
      { t: "Fruits secs", k: "fl", table: [["Fruit", "Eau", "Glucides", "kcal", "Fibres", "Potassium"], ["Abricot", "50 g", "40 g", "150", "5,5 g", "1 100 mg"], ["Banane", "5 g", "80 g", "360", "10 g", "1 500 mg"], ["Datte", "25 g", "65 g", "270", "7,5 g", "700 mg"], ["Figue", "30 g", "55 g", "250", "10 g", "850 mg"], ["Pêche", "10 g", "70 g", "300", "15 g", "950 mg"], ["Pruneau", "35 g", "55 g", "230", "7,5 g", "660 mg"], ["Moyenne", "30 g", "60 g", "250", "8,5 g", "850 mg"]] },
      { t: "Châtaignes et marrons grillés", k: "fl", p: ["Eau 55 g, protéines 2 g (lysine riche, AA soufrés limitants), lipides 2 g, glucides 35 g (châtaignes : ⅔ amidon, ⅓ saccharose), fibres 7,5 g, potassium 550 mg, 700 kJ. Une portion de 200 g ≈ 100 g de céréales crues."] },
    ],
  },
  {
    onglet: "Produits céréaliers",
    blocs: [
      { t: "Crus et cuits", k: "glu", table: [["Aliment", "Protéines", "Glucides", "Fibres", "kcal"], ["Semoule crue / cuite", "12 / 4 g", "70 / 35 g", "3,5 / 1,5 g", "330 / 169"], ["Pâtes crues / cuites", "12 / 4 g", "70 / 35 g", "3 / 1,5 g", "330 / 144"], ["Riz blanc cuit", "", "", "", "145"], ["Avoine", "17 g", "56 g", "11 g", "378"], ["Seigle", "10 g", "61 g", "15 g", "334"], ["Quinoa cru / cuit", "13 / 4 g", "60 / 18,5 g", "7 / 3 g", "400 / 100"], ["Pain de mie", "", "", "", "270"], ["Pain azyme", "", "", "", "380"]],
        p: ["Quinoa : protéines sans facteur limitant, sans gluten, 85 % d’AG insaturés, très riche en minéraux. Maïs : lysine et tryptophane limitants (pellagre), sans gluten."] },
      { t: "Les types de farine", k: "glu", table: [["Type", "Cendres", "Extraction", "Utilisations"], ["T45", "moins de 0,5 %", "68 %", "Pâtisseries, gâteaux"], ["T55", "0,5 à 0,6 %", "74 %", "Baguette, pain de campagne, biscottes"], ["T65", "0,62 à 0,75 %", "78 %", "Pain tradition, pains spéciaux"], ["T80", "0,75 à 0,9 %", "82 %", "Farine bise, pain bis"], ["T110", "1 à 1,2 %", "85 %", "Semi-complète"], ["T150", "plus de 1,4 %", "94 %", "Farine et pain complets"]],
        kv: [["Blanche T45", "glucides 76 g, fibres 2,5 g, magnésium 25 mg, fer 1 mg, 356 kcal"], ["Complète T150", "glucides 61 g, fibres 7 g, magnésium 75 mg, fer 2 mg, 300 kcal"]] },
      { t: "Les riz", k: "glu", table: [["Riz", "IG", "Cru kcal", "Cuit kcal", "Cuisson"], ["Basmati", "58", "350", "120", "10 à 12 min"], ["Noir", "42", "350", "110", "30 à 35 min"], ["Arborio", "69", "360", "130", "18 à 20 min (risotto)"], ["Rouge", "55", "350", "110", "30 à 35 min"], ["Camargue", "50", "350", "120", "20 à 25 min"], ["Brun", "50", "370", "120", "40 à 45 min"]] },
      { t: "Pain grillé (CIQUAL 2020)", k: "glu", p: ["Moyenne : 10 g de protéines, 5 g de lipides, 71 g de glucides, 5 g de fibres. Petit pain grillé suédois : 7,3 g de fibres."] },
    ],
  },
  {
    onglet: "Légumineuses et tubercules",
    blocs: [
      { t: "Les légumineuses (pour 100 g)", k: "pro", table: [["Légumineuse", "Protéines", "Glucides", "Fibres", "kcal", "Fer", "B9"], ["Fève", "26 g", "33,5 g", "2,5 g", "250", "6,5 mg", "420"], ["Haricot blanc", "19 g", "44 g", "17 g", "270", "8 mg", "300"], ["Flageolet", "19 g", "42 g", "23,5 g", "270", "7,5 mg", "120"], ["Haricot rouge", "22,5 g", "46 g", "15 g", "300", "7 mg", "400"], ["Lentille", "25,5 g", "50,5 g", "7,5 g", "320", "6,5 mg", "260"], ["Pois cassé, pois chiche", "23 g", "52 g", "16 g", "320", "5 mg", "150"], ["Moyenne", "20 g", "50 g", "15 g", "300", "6,5 mg", "250"]],
        p: ["B9 : le mémo écrit « B19 (mg) », sans doute des µg de B9. Une portion : protéines et amidon en richesse, fibres et potassium en grande richesse, fer 35 % (femmes, pertes normales), cuivre 35 %, B9 45 %."] },
      { t: "Les tubercules", k: "glu", table: [["Tubercule", "Eau", "Glucides", "Fibres", "kcal", "À retenir"], ["Pomme de terre", "78,3 g", "16,7 g", "1,8 g", "81", "Potassium 363 mg, vitamine C 2,92 mg"], ["Patate douce", "", "12,2 g", "2,9 g", "63", ""], ["Manioc", "", "32 g", "0,4 g", "134", ""]] },
    ],
  },
  {
    onglet: "Viandes, œufs, poissons",
    blocs: [
      { t: "Volailles et gibier", k: "pro", kv: [["Volaille", "27 g de protéines, 6 g de lipides ; 150 kcal crue, 200 cuite ; peu de collagène, bonne digestibilité ; B12 : 100 g = 25 % des apports"], ["Lipides du poulet cru", "filet 1 %, filet avec peau 4 à 6 %, cuisse sans peau 1,5 %, pilon 9 %, aile 11 %, cuisse avec peau 12 %, peau seule 50 %"], ["Gibier", "64,4 g d’eau, 29,6 g de protéines, 3,7 g de lipides, fer 3 mg"]] },
      { t: "Poissons", k: "pro", table: [["Catégorie", "Lipides", "Eau", "Énergie"], ["Très maigres", "moins de 1 g", "", ""], ["Maigres", "1 à 3 g", "≈ 80 %", "100 kcal (400 kJ)"], ["Demi-gras", "3 à 10 g", "70 à 75 %", "120 kcal (500 kJ)"], ["Gras", "plus de 10 g", "≈ 65 %", "200 kcal (800 kJ)"]],
        p: ["Protéines 19 g pour tous ; CUD 95 % (osseux), 75 % (cartilagineux) ; plus de lysine que les viandes. Cholestérol 50 mg. Fer 1 mg, iode et fluor en grande richesse, sélénium ; vitamines A, D, E, B6, B12."] },
      { t: "Fruits de mer et œuf", k: "pro", kv: [["Calamar cru", "81 g d’eau, 14,5 g de protéines, 77 kcal"], ["Crevette cuite", "74 g d’eau, 19,7 g de protéines, 99 kcal"], ["Œuf", "150 kcal (600 kJ) ; calcium 75 mg (Ca/P 0,4), phosphore 200 mg, sodium 130 mg ; A 180 µg, D 1,9 µg, B2, B5, B12 1,5 µg"]] },
    ],
  },
]);
