/* Fiches bristol : Formules du cas client (source : cours/formules, formules des cours Déterminants, Plans et menus, Hors périmètre, Publics spécifiques) */
Bristol.cours("formules", [
  {
    onglet: "Énergie et macronutriments", titre: "Calculer les besoins",
    notes: [
      [
        { h: "Métabolisme de base", p: ["MB (MJ) = <b>0,963</b> × poids<sup>0,48</sup> × taille<sup>0,50</sup> × âge<sup>−0,13</sup> (femme).", "Homme : <b>1,083</b>. Poids en kg, taille en m, âge en ans (Black et al.)."] },
        { h: "En kcal", p: ["1 MJ ≈ <b>239 kcal</b> ; 1 kcal = 4,184 kJ."] },
        { h: "Dépense journalière", p: ["<b>DEJ = MB × NAP</b>, NAP de 1,4 à 2 (moyenne 1,63).", "Enfant, ado : MB + activité + ≈ 1 % pour la croissance."] },
      ],
      [
        { h: "Protéines d’abord", p: ["Poids × <b>0,8 à 1,2</b> g/kg (adulte), puis × 4 kcal/g.", "Ado 1 à 1,5 · âgé 1 à 1,2 · sportif 1,2 à 2."] },
        { h: "Puis les lipides", p: ["DEJ × <b>35 %</b>, puis ÷ 9 kcal/g."] },
        { h: "Glucides par différence", p: ["<b>DEJ − protéines − lipides</b>, puis ÷ 4 kcal/g.", "Exemple : 2 080 − 1 064 = 1 016 kcal, soit 254 g."] },
      ],
    ],
    carte: { centre: "Besoins", branches: [
      ["Énergie", ["MB : Black et al.", "1 MJ ≈ 239 kcal", "DEJ = MB × NAP"]],
      ["Protéines", ["Poids × 0,8 à 1,2", "× 4 kcal/g"]],
      ["Lipides", ["DEJ × 35 %", "÷ 9 kcal/g"]],
      ["Glucides", ["Par différence", "÷ 4 kcal/g"]],
    ] },
  },
  {
    onglet: "Ration, repas et corps", titre: "Vérifier et répartir",
    notes: [
      [
        { h: "Énergie d’une ration", p: ["kJ = P × <b>17</b> + L × <b>38</b> + G × <b>17</b> (+ fibres × 8).", "kcal = kJ ÷ 4,18."] },
        { h: "Répartir la journée", p: ["Petit-déjeuner <b>20 à 25 %</b> · déjeuner <b>35 à 40 %</b>.", "Collation 5 à 10 % · dîner 30 à 35 % (Plans et menus)."] },
      ],
      [
        { h: "IMC", p: ["<b>Poids ÷ taille²</b> (kg, m). Ex. 70 ÷ 1,7² = 24,2.", "Normal <b>18,5 à 24,99</b> · surpoids 25 à 29,99 · obésité dès 30."] },
        { h: "Eau du nourrisson", p: ["<b>150 mL/kg/j</b> à la naissance ; 120 avant 6 mois.", "6 kg ≈ 720 mL, couverts par le lait."] },
      ],
    ],
    carte: { centre: "Ajuster", branches: [
      ["Ration", ["P et G × 17 kJ", "L × 38 kJ", "kJ ÷ 4,18"]],
      ["Repas", ["Petit-déj 20 à 25 %", "Déjeuner 35 à 40 %", "Dîner 30 à 35 %"]],
      ["IMC", ["Poids ÷ taille²", "Normal 18,5 à 24,99"]],
      ["Nourrisson", ["150 mL/kg/j"]],
    ] },
  },
]);
