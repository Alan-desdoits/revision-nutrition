/* Fiches bristol : Déterminants de santé et besoins (source : cours/determinants-besoins) */
Bristol.cours("determinants-besoins", [
  {
    onglet: "La démarche", titre: "La démarche",
    notes: [
      [
        { h: "Trois éléments", p: ["<b>Besoins nutritionnels</b> : le repère théorique.", "<b>Déterminants de santé</b> : la variable individuelle.", "<b>Recommandation personnalisée</b> : l’ajustement."] },
        { h: "À retenir", p: ["L’équilibre alimentaire n’est pas une science exacte qui s’applique de façon mathématique."] },
      ],
      [
        { h: "Trois sigles", p: ["<b>DEJ</b> : dépense énergétique journalière.", "<b>MB</b> : métabolisme de base, la dépense minimale au repos complet.", "<b>NAP</b> : niveau d’activité physique, de <b>1,4 à 2</b> (moyenne 1,63)."] },
      ],
    ],
    carte: { centre: "La démarche", branches: [
      ["Besoins", ["Repère théorique"]],
      ["Déterminants", ["Variable individuelle"]],
      ["Recommandation", ["Ajustement personnalisé"]],
      ["Sigles", ["DEJ, MB", "NAP <b>1,4 à 2</b>"]],
    ] },
  },
  {
    onglet: "Énergie", titre: "Le besoin énergétique",
    notes: [
      [
        { h: "Où part l’énergie ?", p: ["Métabolisme de base <b>60 à 70 %</b>.", "Activité physique <b>15 à 40 %</b>.", "Thermogenèse alimentaire <b>10 %</b> (plus forte pour les protéines)."] },
        { h: "Apports et besoins", p: ["Apports trop faibles : carences, fatigue, perte de poids. Trop élevés : prise de poids."] },
      ],
      [
        { h: "Repères de ce cours (% AET)", p: ["Glucides <b>40 à 55 %</b>, lipides <b>35 à 40 %</b>, protéines <b>10 à 20 %</b> (0,8 à 1,2 g/kg/j).", "Le cours Macronutriments indique 30 à 35 % de lipides."] },
        { h: "Micronutriments et eau", p: ["Carences les plus fréquentes au monde (OMS) : <b>fer, vitamine A, iode</b>.", "Eau ≈ 60 % du poids ; 1,5 à 2 L par jour. Perte de <b>2 %</b> du poids : maux de tête, fatigue."] },
      ],
    ],
    carte: { centre: "Énergie", branches: [
      ["Dépense", ["MB <b>60 à 70 %</b>", "Activité <b>15 à 40 %</b>", "Thermogenèse <b>10 %</b>"]],
      ["Repères", ["Glucides <b>40 à 55 %</b>", "Lipides <b>35 à 40 %</b>", "Protéines <b>10 à 20 %</b>"]],
      ["Carences OMS", ["Fer", "Vitamine A", "Iode"]],
      ["Eau", ["1,5 à 2 L", "Perte de <b>2 %</b> : fatigue"]],
    ] },
  },
  {
    onglet: "Déterminants", titre: "Les déterminants de santé",
    notes: [
      [
        { h: "Définition (OMS)", p: ["Facteurs personnels, sociaux, économiques et environnementaux qui influencent la santé. Deux profils identiques en apparence n’ont pas les mêmes besoins."] },
        { h: "Biologiques", p: ["<b>Âge</b>, <b>sexe</b> (hommes plus musclés : MB plus élevé), <b>composition corporelle</b> (plus de muscle = plus de dépense), état physiologique (grossesse, convalescence)."] },
      ],
      [
        { h: "Mode de vie", p: ["Activité physique ; <b>sommeil</b> (ghréline et leptine déréglées) ; stress."] },
        { h: "Socio-économiques", p: ["Budget, religion et traditions, éducation nutritionnelle, accès géographique (désert alimentaire)."] },
        { h: "Environnementaux", p: ["Climat (chaleur : plus d’eau ; altitude : plus d’énergie), saisonnalité."] },
      ],
    ],
    carte: { centre: "Déterminants", branches: [
      ["Biologiques", ["Âge, sexe", "Composition corporelle", "Grossesse"]],
      ["Mode de vie", ["Activité", "Sommeil, stress"]],
      ["Socio-économiques", ["Budget, culture", "Éducation"]],
      ["Environnement", ["Climat", "Saisons"]],
    ] },
  },
  {
    onglet: "PNNS", titre: "Le PNNS",
    notes: [
      [
        { h: "Le programme", p: ["Programme national nutrition santé, lancé en <b>2001</b> ; aujourd’hui <b>PNNS 5</b> (2026 à 2030). S’appuie sur l’Anses."] },
        { h: "Repères", p: ["Fruits et légumes : <b>au moins 5 par jour</b>.", "Céréales complètes ou semi-complètes.", "Poisson <b>2 fois</b> par semaine dont un gras ; légumineuses au moins 2 fois ; limiter viande rouge et charcuterie.", "Laitiers : <b>2</b> par jour (adulte), 3 à 4 (enfant, ado)."] },
      ],
      [
        { h: "Suite", p: ["Huiles riches en oméga-3 (colza, noix), moins de beurre et crème.", "Moins de sucres et de sel ; l’eau comme boisson.", "Activité : <b>30 min</b> par jour (adulte), <b>60 min</b> (enfant)."] },
        { h: "Objectifs", p: ["Améliorer la santé, réduire l’obésité et les maladies chroniques, des repères simples, la durabilité.", "Un cadre général à adapter (senior, sportif, insuffisance rénale)."] },
      ],
    ],
    carte: { centre: "PNNS", branches: [
      ["Programme", ["Depuis <b>2001</b>", "PNNS 5 : 2026 à 2030"]],
      ["Aliments", ["<b>5</b> fruits et légumes", "Poisson <b>2 fois</b>", "Laitiers <b>2</b> par jour"]],
      ["À limiter", ["Sucres, sel", "Viande rouge"]],
      ["Activité", ["Adulte <b>30 min</b>", "Enfant <b>60 min</b>"]],
    ] },
  },
  {
    onglet: "Calculer les besoins", titre: "Calculer les besoins",
    notes: [
      [
        { h: "Cinq étapes", p: ["1. Âge, sexe, poids, taille, activité.", "2. <b>MB</b> (formule de Black et al., en MJ).", "3. <b>NAP</b>.", "4. <b>DEJ = MB × NAP</b>.", "5. Protéines (poids × coefficient), lipides (%), glucides par différence."] },
        { h: "Conversions", p: ["1 MJ ≈ <b>239 kcal</b>. Protéines et glucides ÷ 4, lipides ÷ 9."] },
      ],
      [
        { h: "Exemple du cours", p: ["Femme, 40 ans, 70 kg, 1,65 m, NAP 1,5 : MB ≈ 5,8 MJ (1 385 kcal), DEJ ≈ <b>2 080 kcal</b>.", "Protéines 70 × 1,2 = <b>84 g</b>. Lipides 35 % = 728 kcal, soit 81 g.", "Glucides : 2 080 − 1 064 = 1 016 kcal, soit <b>254 g</b>."] },
        { h: "À retenir", p: ["Un repère pour l’accompagnement, pas un objectif strict."] },
      ],
    ],
    carte: { centre: "Calculer", branches: [
      ["Étapes", ["MB (Black)", "NAP", "<b>DEJ = MB × NAP</b>"]],
      ["Répartir", ["Protéines : poids × coefficient", "Lipides : %", "Glucides : par différence"]],
      ["Exemple", ["DEJ ≈ <b>2 080 kcal</b>", "Protéines <b>84 g</b>", "Glucides <b>254 g</b>"]],
      ["Unités", ["1 MJ ≈ <b>239 kcal</b>"]],
    ] },
  },
  {
    onglet: "La ration", titre: "La ration",
    notes: [
      [
        { h: "Définition", p: ["Les aliments d’une journée, en quantités précises, qui couvrent les besoins : le lien entre le calcul et l’assiette."] },
        { h: "La démarche", p: ["1. Besoins en P, L, G (g). 2. Aliments représentatifs de chaque groupe. 3. Grammes de nutriments en grammes d’aliments (tables). 4. Vérifier la couverture. 5. Ajuster."] },
        { h: "L’ordre", p: ["Couvrir d’abord les <b>protéines</b>, puis les <b>lipides</b>, compléter avec les <b>glucides</b>."] },
      ],
      [
        { h: "Les calculs", p: ["kJ = protéines × 17 + lipides × 38 + glucides × 17 (+ fibres × 8).", "kcal = kJ ÷ <b>4,18</b>."] },
        { h: "Ensuite", p: ["Répartir la ration entre petit-déjeuner, déjeuner, dîner et collations : énergie régulière, faim et satiété, rythme de vie."] },
      ],
    ],
    carte: { centre: "La ration", branches: [
      ["Ordre", ["1. Protéines", "2. Lipides", "3. Glucides"]],
      ["Méthode", ["Tables de composition", "Vérifier, ajuster"]],
      ["Calcul", ["P et G × <b>17 kJ</b>", "L × <b>38 kJ</b>", "kcal = kJ ÷ 4,18"]],
      ["Ensuite", ["Répartir sur les repas"]],
    ] },
  },
]);
