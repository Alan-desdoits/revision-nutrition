/* Fiches bristol : Étiquetage et repères (source : cours/etiquetage) */
Bristol.cours("etiquetage", [
  {
    onglet: "Rôles", titre: "Les rôles de l’étiquette",
    notes: [
      [
        { h: "Définition", p: ["Directive CE <b>2000/13</b> : l’ensemble des mentions, marques, images ou signes se rapportant à une denrée, sur tout emballage ou document qui l’accompagne."] },
        { h: "Informer", p: ["Souvent le seul intermédiaire entre producteur et acheteur : comparer et choisir.", "Ex. deux biscuits identiques : chocolat <b>30 %</b> contre <b>5 %</b>."] },
      ],
      [
        { h: "Protéger la santé", p: ["<b>Allergènes</b> mis en évidence.", "<b>Dates</b> : limiter les intoxications (DLC et DDM souvent confondues).", "<b>Déclaration nutritionnelle</b> : sel, sucres, saturés."] },
        { h: "Nouvelles attentes", p: ["Qualité nutritionnelle, environnement, éthique, labels, origine. D’où le Nutri-Score et Origin’Info."] },
      ],
    ],
    carte: { centre: "L’étiquette", branches: [
      ["Définition", ["Directive <b>2000/13</b>"]],
      ["Informer", ["Comparer, choisir"]],
      ["Protéger", ["Allergènes", "Dates", "Nutrition"]],
      ["Attentes", ["Environnement", "Labels, origine"]],
    ] },
  },
  {
    onglet: "Environnement et labels", titre: "Environnement et labels",
    notes: [
      [
        { h: "Le poids de l’alimentation", p: ["≈ <b>22 %</b> de l’empreinte carbone de la consommation en France (2022).", "Monde (WWF 2020) : <b>80 %</b> de la déforestation, 70 % de l’eau douce, 70 % de la perte de biodiversité."] },
        { h: "Lois", p: ["<b>AGEC</b> (2020) : anti-gaspillage, recyclabilité.", "<b>Climat et résilience</b> (2021) : affichage environnemental progressif."] },
        { h: "Scores environnementaux", p: ["<b>Éco-score</b> (2021) : A à E sur tout le cycle de vie. <b>Planet-Score</b> : pesticides, biodiversité, bien-être animal."] },
      ],
      [
        { h: "Les SIQO", p: ["<b>AOC</b> : tout dans une même zone (Roquefort).", "<b>AOP</b> : l’équivalent européen (Comté).", "<b>IGP</b> : au moins une étape dans la zone (volailles de Bresse).", "<b>Label Rouge</b> : qualité supérieure.", "<b>STG</b> : recette traditionnelle (mozzarella).", "<b>AB</b> : agriculture biologique."] },
      ],
    ],
    carte: { centre: "Environnement, labels", branches: [
      ["Impact", ["<b>22 %</b> de l’empreinte carbone", "<b>80 %</b> de la déforestation"]],
      ["Lois", ["AGEC 2020", "Climat 2021"]],
      ["Scores", ["Éco-score A à E", "Planet-Score"]],
      ["SIQO", ["AOC, AOP, IGP", "Label Rouge, STG, AB"]],
    ] },
  },
  {
    onglet: "Scores", titre: "Les scores",
    notes: [
      [
        { h: "Nutri-Score", p: ["La <b>qualité nutritionnelle</b>. À favoriser : fibres, protéines, fruits et légumes. À limiter : énergie, saturés, sucres, sel.", "Limites : <b>volontaire</b>, ignore la transformation, les additifs, les pesticides."] },
        { h: "SIGA", p: ["Le niveau de risque des <b>additifs et ingrédients</b>, avec le gras, le sucre et le sel."] },
      ],
      [
        { h: "NOVA", p: ["Le <b>degré de transformation</b> seulement, en 4 groupes :", "1 : bruts ou peu transformés.", "2 : ingrédients culinaires transformés.", "3 : aliments transformés.", "<b>4 : ultra-transformés</b>."] },
        { h: "Exemple", p: ["Deux mueslis au même prix : on choisit le Nutri-Score B plutôt que le D."] },
      ],
    ],
    carte: { centre: "Les scores", branches: [
      ["Nutri-Score", ["Qualité nutritionnelle", "Volontaire"]],
      ["NOVA", ["Transformation", "4 groupes"]],
      ["SIGA", ["Additifs"]],
    ] },
  },
  {
    onglet: "Réglementation", titre: "La réglementation",
    notes: [
      [
        { h: "Le règlement INCO", p: ["UE n° <b>1169/2011</b>, en vigueur depuis décembre <b>2014</b>.", "Un <b>règlement</b> s’impose directement (une directive doit être transposée)."] },
        { h: "Deux principes", p: ["<b>Loyauté</b> : ne jamais induire en erreur (« pur brebis » = uniquement du lait de brebis).", "<b>Lisibilité</b> : visible, compréhensible, dans la langue du pays."] },
      ],
      [
        { h: "Les évolutions", p: ["<b>2016</b> : déclaration nutritionnelle obligatoire pour presque tous les préemballés.", "<b>2020</b> : origine de l’ingrédient principal si elle diffère.", "2024, 2025 : origine en restauration, en vrac."] },
        { h: "Origin’Info (juillet 2024)", p: ["Logo volontaire : pays d’origine des matières premières. Plus de 8 Français sur 10 le jugent essentiel."] },
      ],
    ],
    carte: { centre: "Réglementation", branches: [
      ["INCO", ["UE <b>1169/2011</b>", "Depuis <b>2014</b>"]],
      ["Principes", ["Loyauté", "Lisibilité"]],
      ["Dates", ["<b>2016</b> : nutrition", "<b>2020</b> : origine"]],
      ["Origin’Info", ["Volontaire, 2024"]],
    ] },
  },
  {
    onglet: "Préemballés", titre: "Les produits préemballés",
    notes: [
      [
        { h: "Mentions obligatoires", p: ["Dénomination de vente · quantité nette · opérateur et <b>numéro de lot</b>.", "Ingrédients (ordre décroissant) · <b>allergènes</b> en évidence · % des ingrédients mis en avant.", "Dates · origine · déclaration nutritionnelle <b>pour 100 g</b>."] },
        { h: "Déclaration nutritionnelle", p: ["Énergie (kJ, kcal), lipides dont saturés, glucides dont sucres, protéines, sel."] },
      ],
      [
        { h: "DLC ou DDM ?", p: ["<b>DLC</b> « à consommer jusqu’au » : très périssables (viande hachée) ; après, <b>dangereux</b>.", "<b>DDM</b> « de préférence avant » : stables (pâtes, biscuits) ; après, perte de qualité."] },
        { h: "Cas particuliers", p: ["Vente à distance : tout avant l’achat. Mentions réglementées (fermier, AB). Mentions marketing : jamais trompeuses.", "Miel et huile d’olive : origine précisée."] },
      ],
    ],
    carte: { centre: "Préemballés", branches: [
      ["Produit", ["Dénomination", "Quantité, lot"]],
      ["Composition", ["Ingrédients décroissants", "Allergènes en évidence"]],
      ["DLC", ["Jusqu’au…", "Périssables"]],
      ["DDM", ["De préférence avant…", "Stables"]],
    ] },
  },
  {
    onglet: "Non préemballés", titre: "Les non préemballés",
    notes: [
      [
        { h: "Le principe", p: ["Vrac, boulangerie, coupe, restauration : affichette près du produit, lisible, en français.", "Dénomination, <b>allergènes</b>, état physique (décongelé)."] },
        { h: "Depuis 2025", p: ["Origine en vrac : fruits à coque, fruits secs, produits de fraîche découpe."] },
      ],
      [
        { h: "Viandes", p: ["Bovine : lieu de <b>naissance</b>, d’<b>élevage</b>, d’<b>abattage</b>.", "Depuis <b>mars 2024</b> : aussi en restauration, plats transformés compris."] },
        { h: "Poissons", p: ["Pêche en mer : zone de capture. Aquaculture : pays d’élevage."] },
      ],
    ],
    carte: { centre: "Non préemballés", branches: [
      ["Affichage", ["Près du produit", "Allergènes"]],
      ["Viande bovine", ["Né, élevé, abattu", "Restauration : <b>2024</b>"]],
      ["Poissons", ["Zone de capture", "Pays d’élevage"]],
      ["Vrac 2025", ["Fruits secs, à coque"]],
    ] },
  },
  {
    onglet: "Pièges", titre: "Les pièges de l’étiquette",
    notes: [
      [
        { h: "Sucres cachés", p: ["Plusieurs noms dispersés : saccharose, glucose, dextrose, fructose, sirop de glucose-fructose, maltose, miel, sirops.", "Barre « sans sucre ajouté » : purée de dattes, jus de raisin, agave : du sucre partout."] },
        { h: "Lisibilité", p: ["Valeurs par portion : comparaison difficile."] },
      ],
      [
        { h: "Les allégations", p: ["Règlement <b>CE 1924/2006</b>.", "<b>Nutritionnelles</b> (« source de fibres »), <b>de santé</b> (« le calcium contribue à… »), <b>thérapeutiques</b> : <b>interdites</b>."] },
        { h: "Derrière les mots", p: ["« Naturel », « sans… », « riche en » : l’<b>effet halo</b>. Ex. biscuits « au blé complet » : 25 % de sucres."] },
        { h: "Applications", p: ["Yuka, Open Food Facts, ScanUp."] },
      ],
    ],
    carte: { centre: "Pièges", branches: [
      ["Sucres cachés", ["Noms multiples", "Sans sucre ajouté ≠ sans sucre"]],
      ["Allégations", ["Nutritionnelles", "De santé", "Thérapeutiques : interdites"]],
      ["Effet halo", ["Naturel", "Sans…"]],
      ["Scan", ["Yuka", "Open Food Facts"]],
    ] },
  },
  {
    onglet: "Cas pratiques", titre: "Trois étiquettes",
    notes: [
      [
        { h: "Croc’Miel (céréales)", p: ["Sucre et sirop de glucose séparés : le sucre est <b>majoritaire</b>.", "Le <b>miel</b> du nom n’est pas dans les ingrédients : non conforme.", "Manquent : % de miel, poids, date, lot. Valeurs à donner <b>pour 100 g</b>."] },
        { h: "ChocoPlaisir (chocolat)", p: ["Globalement conforme, LAIT en évidence.", "Perfectible : % de lait, origine des matières premières. <b>50 % de sucres</b>."] },
      ],
      [
        { h: "Bello Gusto (lasagnes)", p: ["Produit frais : <b>DLC</b> obligatoire.", "Origine « UE » trop vague : depuis 2024, pays exacts.", "Allergènes : <b>BLÉ</b> et œufs. Ne convient pas à une personne allergique au gluten."] },
      ],
    ],
    carte: { centre: "Cas pratiques", branches: [
      ["Croc’Miel", ["Sucre majoritaire", "Miel absent", "Pour 100 g"]],
      ["ChocoPlaisir", ["Conforme", "<b>50 %</b> de sucres"]],
      ["Bello Gusto", ["DLC", "Origine trop vague", "Blé, œufs"]],
    ] },
  },
]);
