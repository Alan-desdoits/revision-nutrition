/* Fiches bristol : Recueil et analyse des données (source : cours/recueil-analyse) */
Bristol.cours("recueil-analyse", [
  {
    onglet: "Principes", titre: "Les principes du recueil",
    notes: [
      [
        { h: "Pourquoi", p: ["La mémoire est sélective : le recueil sert à <b>objectiver</b>, pas à vérifier la personne."] },
        { h: "Trois types d’informations", p: ["<b>Individuelles</b> : âge, sexe, poids, activité, santé, rythme de vie.", "<b>Socio-économiques</b> : budget, famille, traditions, accès aux produits.", "<b>Psychologiques</b> : vision de l’alimentation, rapport émotionnel."] },
      ],
      [
        { h: "Le cadre", p: ["Un exercice intime : cadre <b>sécurisant, sans jugement</b>, entre proximité et rigueur.", "On cherche la cohérence globale, pas la perfection."] },
        { h: "Le journal alimentaire révèle", p: ["Les habitudes, la liberté de choix (voulus ou subis), les facteurs influents (émotions, manque de temps)."] },
      ],
    ],
    carte: { centre: "Principes", branches: [
      ["But", ["Objectiver", "Sans juger"]],
      ["Informations", ["Individuelles", "Socio-économiques", "Psychologiques"]],
      ["Journal", ["Habitudes", "Choix voulus ou subis", "Émotions"]],
    ] },
  },
  {
    onglet: "Comportement alimentaire", titre: "Le comportement alimentaire",
    notes: [
      [
        { h: "Le chef d’orchestre", p: ["Le cerveau, plus précisément l’<b>hypothalamus</b>. On ne mange pas seulement quand on a faim."] },
        { h: "Quatre notions", p: ["<b>Faim</b> : besoin physiologique. <b>Appétit</b> : envie, plaisir.", "<b>Rassasiement</b> : fin du repas. <b>Satiété</b> : absence de faim entre les repas."] },
        { h: "Autres déclencheurs", p: ["L’émotion, l’habitude, le contexte social."] },
      ],
      [
        { h: "Les messagers", p: ["Ouvrent l’appétit : <b>ghréline</b> (estomac vide), <b>cortisol</b> (stress).", "Rassasient : <b>leptine</b> (tissu adipeux), insuline, <b>CCK</b> (intestin).", "Plaisir et humeur : <b>dopamine</b> (récompense), <b>sérotonine</b>."] },
        { h: "Questions à se poser", p: ["Sa vision (obligation, refuge ?), sa manière de manger (écran, repas sautés ?), son rapport émotionnel."] },
      ],
    ],
    carte: { centre: "Comportement", branches: [
      ["Notions", ["Faim, appétit", "Rassasiement, satiété"]],
      ["Faim", ["Ghréline", "Cortisol"]],
      ["Satiété", ["Leptine", "Insuline, CCK"]],
      ["Plaisir", ["Dopamine", "Sérotonine"]],
    ] },
  },
  {
    onglet: "Collecte", titre: "Les méthodes de collecte",
    notes: [
      [
        { h: "Les méthodes", p: ["<b>Relevé de consommation</b> : fréquences ; vision globale, peu précis.", "<b>Carnet alimentaire</b> : <b>3 à 7 jours</b> avec un week-end ; fidèle, demande de la motivation.", "<b>Rappel de 24 h</b> : en entretien, rapide, dépend de la mémoire.", "<b>Applications</b> : ludiques, aisance numérique.", "<b>Recueil qualitatif</b> : le contexte, sans chiffres."] },
      ],
      [
        { h: "Choisir", p: ["Selon le temps de la personne et sa capacité à bien réaliser la méthode."] },
        { h: "Les biais", p: ["Motivation (carnet rempli à la hâte).", "Mémoire et oublis (sucre du café, grignotage).", "<b>Désirabilité sociale</b> : on minimise l’alcool, on exagère les légumes.", "Pression de l’observation ; expressions vagues (« un peu »)."] },
      ],
    ],
    carte: { centre: "Collecte", branches: [
      ["Méthodes", ["Carnet <b>3 à 7 jours</b>", "Rappel de 24 h", "Relevé de fréquence"]],
      ["Autres", ["Applications", "Entretien qualitatif"]],
      ["Biais", ["Oublis", "Désirabilité sociale", "Termes vagues"]],
    ] },
  },
  {
    onglet: "Quantifier", titre: "Quantifier",
    notes: [
      [
        { h: "Quatre étapes", p: ["1. <b>Retranscrire</b> par repas (aliment, quantité, préparation, ajouts).", "2. <b>Standardiser</b> les unités (une assiette → grammes).", "3. <b>Classer en 7 groupes</b>.", "4. <b>Quantifier</b> avec les tables (<b>CIQUAL</b>)."] },
        { h: "Mesures domestiques", p: ["Verre de jus 200 mL · c. à soupe d’huile 10 g · pomme ≈ 150 g · c. à soupe de riz cuit ≈ 30 g."] },
      ],
      [
        { h: "Sur plusieurs jours", p: ["Moyenne sur 3 à 7 jours, répartition des prises, variations semaine / week-end."] },
        { h: "Repères ANSES (% AET)", p: ["Glucides 40 à 55 %, lipides 30 à 40 %, protéines 10 à 20 %.", "Énergie : femme <b>1 800 à 2 200 kcal</b>, homme <b>2 200 à 2 700 kcal</b>."] },
        { h: "Aussi", p: ["Micronutriments comparés aux ANR, fibres, eau, acides gras, sucres ajoutés, sel."] },
      ],
    ],
    carte: { centre: "Quantifier", branches: [
      ["Étapes", ["Retranscrire", "Standardiser", "7 groupes", "CIQUAL"]],
      ["Mesures", ["C. à soupe d’huile <b>10 g</b>", "Pomme ≈ <b>150 g</b>"]],
      ["Énergie", ["Femme <b>1 800 à 2 200</b>", "Homme <b>2 200 à 2 700</b>"]],
    ] },
  },
  {
    onglet: "Analyse qualitative", titre: "L’analyse qualitative",
    notes: [
      [
        { h: "Six points", p: ["1. Diversité alimentaire.", "2. Niveau de transformation.", "3. Qualité des lipides.", "4. Qualité des glucides.", "5. Fibres et eau.", "6. Facteurs de risque (sel, alcool, grignotage, repas sautés)."] },
      ],
      [
        { h: "Déficits fréquents", p: ["Calcium, fer (femmes), <b>vitamine D</b>, fibres."] },
        { h: "Excès fréquents", p: ["Calories, saturés et trans, sucres ajoutés, sodium, alcool."] },
        { h: "Incohérences", p: ["Apports très bas, poids stable : <b>sous-déclaration</b>. Alcool jamais mentionné : omission."] },
      ],
    ],
    carte: { centre: "Analyse qualitative", branches: [
      ["Regarder", ["Diversité", "Transformation", "Qualité des lipides, glucides"]],
      ["Déficits", ["Calcium, fer", "Vitamine D, fibres"]],
      ["Excès", ["Saturés, sucres", "Sodium, alcool"]],
      ["Incohérences", ["Sous-déclaration", "Omissions"]],
    ] },
  },
  {
    onglet: "Restitution", titre: "La restitution",
    notes: [
      [
        { h: "Le but", p: ["Transformer chiffres et observations en une <b>synthèse parlante</b> : un état des lieux et une orientation. Souvent le premier pas vers l’adhésion."] },
        { h: "Trois réflexes", p: ["<b>Mettre en évidence le positif</b>.", "<b>Souligner les points à améliorer</b> sans reproche.", "<b>Rendre concret</b> : « l’équivalent d’un grand verre de lait qui manque chaque jour »."] },
      ],
      [
        { h: "Adapter et impliquer", p: ["Adapter le discours au niveau de la personne.", "Montrer : graphiques, tableaux.", "<b>Bannir le jugement</b> : la culpabilisation crée de la résistance.", "<b>Co-construire</b> : « Qu’est-ce qui vous paraît facile à changer ? »"] },
      ],
    ],
    carte: { centre: "Restitution", branches: [
      ["Dire", ["Le positif d’abord", "À améliorer, sans reproche", "Du concret"]],
      ["Adapter", ["Au niveau de la personne", "Graphiques"]],
      ["Impliquer", ["Sans jugement", "Co-construire"]],
    ] },
  },
]);
