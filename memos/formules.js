/* Mémo de révision imprimé : Formules du cas client (source : cours/formules, formules des cours Déterminants et besoins, Macronutriments, Plans et menus, Composition des repas, Hors périmètre, Publics spécifiques)
   Chaque formule est dans f : [libellé, formule] ou formule seule, rendue en tableau à deux colonnes. */
Fiches.memo([
  {
    onglet: "Toutes les formules",
    blocs: [
      { t: "L’énergie", k: "ink", f: [
        ["Métabolisme de base", "MB (MJ) = 0,963 × poids<sup>0,48</sup> × taille<sup>0,50</sup> × âge<sup>−0,13</sup><small>femme ; homme : 1,083</small>"],
        ["En kcal", "1 MJ ≈ 239 kcal<small>1 kcal = 4,184 kJ</small>"],
        ["Dépense journalière", "DEJ = MB × NAP<small>NAP de 1,4 à 2</small>"],
      ] },
      { t: "Les macronutriments", k: "pro", f: [
        ["Protéines", "Protéines (g) = poids × coefficient<small>× 4 kcal/g</small>"],
        ["Lipides", "Lipides (kcal) = DEJ × %<small>÷ 9 kcal/g</small>"],
        ["Glucides", "Glucides (kcal) = DEJ − protéines − lipides<small>÷ 4 kcal/g</small>"],
      ] },
      { t: "La ration, les repas, le corps", k: "ink", f: [
        ["Ration", "kJ = P × 17 + L × 38 + G × 17 (+ fibres × 8)<small>kcal = kJ ÷ 4,18</small>"],
        ["Repas", "Repas (kcal) = DEJ × part du repas"],
        ["IMC", "IMC = poids ÷ taille<sup>2</sup><small>kg, m</small>"],
        ["Eau du nourrisson", "Eau (mL/j) = poids × 150 mL/kg<small>à la naissance</small>"],
      ] },
    ],
  },
  {
    onglet: "La démarche",
    blocs: [
      { t: "L’ordre d’un cas client", k: "ink", list: ["1. Recueillir âge, sexe, poids, taille, activité.", "2. Calculer le <b>métabolisme de base</b> (Black et al.), puis le passer en kcal.", "3. Choisir le <b>NAP</b> et calculer la <b>DEJ</b>.", "4. Couvrir d’abord les <b>protéines</b>, puis les <b>lipides</b>, compléter avec les <b>glucides</b>.", "5. Vérifier une ration en kJ puis en kcal, et répartir l’énergie entre les repas."],
        retenir: "Le résultat est un repère autour duquel construire l’accompagnement, pas un objectif strict." },
      { t: "Exemple du cours (Déterminants et besoins)", k: "ink", p: ["Femme, 40 ans, 70 kg, 1,65 m, travail sédentaire, marche 2 à 3 fois par semaine : NAP <b>1,5</b>."] },
    ],
  },
  {
    onglet: "L’énergie",
    blocs: [
      { t: "Métabolisme de base (Black et al.)", k: "ink", f: [["Femme", "MB (MJ) = 0,963 × poids<sup>0,48</sup> × taille<sup>0,50</sup> × âge<sup>−0,13</sup>"], ["Homme", "MB (MJ) = 1,083 × poids<sup>0,48</sup> × taille<sup>0,50</sup> × âge<sup>−0,13</sup>"]],
        p: ["Poids en kg, taille en m, âge en années.", "Exemple : ≈ 5,8 MJ (calcul exact 5,89 MJ)."] },
      { t: "Passer en kcal", k: "ink", f: ["1 MJ ≈ 239 kcal"], kv: [["1 kcal", "4,184 kJ = 0,00418 MJ"], ["Exemple", "5,8 MJ ≈ 1 385 kcal"]] },
      { t: "Dépense énergétique journalière", k: "ink", f: ["DEJ = MB × NAP"],
        table: [["Activité", "NAP"], ["Sédentaire", "1,4"], ["Travail sédentaire, activité légère mais régulière (exemple du cours)", "1,5"], ["NAP moyen du cours", "1,63"], ["Sport dense, travail actif debout", "2"]],
        kv: [["Exemple", "1 385 × 1,5 ≈ 2 080 kcal"], ["Enfant, ado", "besoin = MB + activité physique + ≈ 1 % pour la croissance (Publics spécifiques)"]] },
    ],
  },
  {
    onglet: "Les macronutriments",
    blocs: [
      { t: "Protéines d’abord", k: "pro", f: ["Protéines (g) = poids × coefficient<small>puis × 4 kcal/g</small>"],
        table: [["Profil", "g/kg/j"], ["Adulte", "0,8 à 1,2"], ["Enfant, ado", "1 à 1,5"], ["Personne âgée", "1 à 1,2"], ["Sportif", "1,2 à 2"]],
        kv: [["Exemple", "70 × 1,2 = 84 g, soit 336 kcal"]] },
      { t: "Puis les lipides", k: "lip", f: ["Lipides (kcal) = DEJ × %<small>puis ÷ 9 kcal/g</small>"],
        p: ["Repère : 35 à 40 % de la DEJ (Déterminants et besoins) ; 30 à 35 % dans le cours Macronutriments."],
        kv: [["Exemple", "2 080 × 35 % = 728 kcal, soit 81 g"]] },
      { t: "Glucides par différence", k: "glu", f: ["Glucides (kcal) = DEJ − protéines − lipides<small>puis ÷ 4 kcal/g</small>"],
        p: ["Repère : 40 à 55 % de l’AET."],
        kv: [["Exemple", "2 080 − 1 064 = 1 016 kcal, soit 254 g"]],
        retenir: "4 kcal/g pour les protéines et les glucides, 9 kcal/g pour les lipides." },
    ],
  },
  {
    onglet: "La ration et les repas",
    blocs: [
      { t: "Énergie d’une ration", k: "ink", f: ["kJ = protéines × 17 + lipides × 38 + glucides × 17 (+ fibres × 8)", "kcal = kJ ÷ 4,18"],
        p: ["Nutriments en grammes. On compare ensuite à la DEJ et aux repères en % de l’AET."] },
      { t: "Répartir dans la journée", k: "ink", f: ["Repas (kcal) = DEJ × part du repas"],
        table: [["Repas", "Plans et menus", "Composition des repas", "Pour 2 000 kcal (Plans et menus)"], ["Petit-déjeuner", "20 à 25 %", "15 à 20 %", "400 à 500 kcal"], ["Déjeuner", "35 à 40 %", "40 à 45 %", "700 à 800 kcal"], ["Collation", "5 à 10 %", "–", "100 à 200 kcal"], ["Dîner", "30 à 35 %", "35 à 40 %", "600 à 700 kcal"]] },
    ],
  },
  {
    onglet: "Le corps et les publics",
    blocs: [
      { t: "Indice de masse corporelle", k: "ink", f: ["IMC = poids ÷ taille<sup>2</sup><small>kg, m</small>"],
        p: ["Exemple : 70 ÷ 1,7<sup>2</sup> = 24,2. Il ignore l’activité."],
        table: [["Classe", "IMC"], ["Insuffisance pondérale", "moins de 16,5"], ["Maigreur", "16,5 à 18,49"], ["Corpulence normale", "18,5 à 24,99"], ["Surpoids", "25 à 29,99"], ["Obésité stade 1", "30 à 34,99"], ["Obésité stade 2", "35 à 39,99"], ["Obésité stade 3 (morbide)", "plus de 40"]] },
      { t: "Eau du nourrisson", k: "eau", f: ["Eau (mL/j) = poids × 150 mL/kg<small>à la naissance</small>"],
        kv: [["Avant 6 mois", "120 mL/kg/j, couverts par le lait"], ["Exemple", "6 kg × 120 ≈ 720 mL"]] },
    ],
  },
]);
