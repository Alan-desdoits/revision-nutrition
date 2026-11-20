/* Fiches bristol : Conserver les aliments (source : cours/conservation) */
Bristol.cours("conservation", [
  {
    onglet: "Altération et leviers", titre: "Altération et leviers",
    notes: [
      [
        { h: "Pourquoi un aliment se dégrade", p: ["<b>Micro-organismes</b> : bactéries, levures, moisissures (gaz, acides, toxines).", "<b>Enzymes</b> de l’aliment (brunissement de la pomme : polyphénoloxydase).", "<b>Réactions chimiques</b> : rancissement, Maillard, vitamines détruites (C, B1, B9).", "<b>Altérations physiques</b> : chocs, blessures."] },
        { h: "Quatre enjeux", p: ["Sanitaire, nutritionnel, organoleptique, économique et écologique."] },
      ],
      [
        { h: "Les 5 leviers", p: ["<b>Température</b> : froid, pasteurisation, stérilisation.", "<b>Activité de l’eau</b> : séchage, sel, sucre.", "<b>Oxygène</b> : sous vide, atmosphère modifiée.", "<b>pH</b> : vinaigre, fermentation.", "<b>Intégrité physique</b> : emballage, manipulation."] },
      ],
    ],
    carte: { centre: "Altération", branches: [
      ["Causes", ["Micro-organismes", "Enzymes", "Chimie, chocs"]],
      ["Leviers", ["Température", "Activité de l’eau", "Oxygène, pH"]],
      ["Enjeux", ["Sanitaire", "Nutritionnel", "Goût, gaspillage"]],
    ] },
  },
  {
    onglet: "Le froid", titre: "Le froid",
    notes: [
      [
        { h: "Le principe", p: ["Le froid <b>ralentit</b> enzymes et microbes, il <b>ne les détruit pas</b> : ils repartent au réchauffement."] },
        { h: "Réfrigération", p: ["Selon ce cours : <b>+1 à +5 °C</b>. Listeria se développe encore : d’où la <b>DLC</b>. Aliments de 1re gamme."] },
        { h: "Congélation, surgélation", p: ["Jusqu’à <b>−18 °C ou moins</b> : activité stoppée, pas de destruction. DDM souvent 9 à 24 mois. 3e gamme.", "<b>Congélation lente</b> : gros cristaux qui percent les cellules. <b>Surgélation rapide</b> : petits cristaux, cellules préservées."] },
      ],
      [
        { h: "Le réfrigérateur", p: ["Réfrigérateur à <b>+4 °C</b>, congélateur à <b>−18 °C</b>.", "Zone la plus froide (0 à 4 °C) : charcuterie, poisson, viande. Nettoyage mensuel."] },
        { h: "Précautions", p: ["Ne jamais rompre la chaîne du froid.", "Décongeler <b>au réfrigérateur</b> (0 à 4 °C) ou cuire directement.", "Exsudat : vitamines et minéraux perdus."] },
      ],
    ],
    carte: { centre: "Le froid", branches: [
      ["Principe", ["Ralentit", "Ne détruit pas"]],
      ["Réfrigération", ["<b>+1 à +5 °C</b>", "DLC (Listeria)"]],
      ["Congélation", ["<b>−18 °C</b>", "Surgélation : petits cristaux"]],
      ["Décongeler", ["Au réfrigérateur"]],
    ] },
  },
  {
    onglet: "La chaleur", titre: "La chaleur",
    notes: [
      [
        { h: "Le principe", p: ["Une action <b>létale</b> : détruit les micro-organismes et inactive les enzymes."] },
        { h: "Pasteurisation", p: ["Bactéries végétatives détruites, <b>pas les spores</b> : au froid, DLC (sauf jus acides).", "Basse <b>63 à 65 °C, 30 min</b> · haute <b>75 à 85 °C</b>, quelques minutes · flash <b>90 à 95 °C, 5 s</b>.", "Pertes modérées en vitamines C et B1."] },
      ],
      [
        { h: "Stérilisation, UHT, appertisation", p: ["<b>Plus de 100 °C</b> : spores détruites aussi, produit commercialement stérile.", "Température ambiante, plusieurs mois à années, <b>DDM</b>.", "Pertes importantes (C, B9) ; goût, texture, couleur modifiés."] },
        { h: "Attention", p: ["Certaines toxines thermorésistantes persistent. Après ouverture, consommer vite."] },
      ],
    ],
    carte: { centre: "La chaleur", branches: [
      ["Pasteurisation", ["Pas les spores", "Au froid, DLC"]],
      ["Trois modes", ["Basse <b>63 à 65 °C</b>", "Haute <b>75 à 85 °C</b>", "Flash <b>90 à 95 °C</b>"]],
      ["Stérilisation", ["Plus de <b>100 °C</b>", "Spores détruites", "Ambiante, DDM"]],
    ] },
  },
  {
    onglet: "L’eau et l’air", titre: "L’eau et l’air",
    notes: [
      [
        { h: "Activité de l’eau (Aw)", p: ["L’eau <b>disponible</b> pour les microbes (de 0 à 1), pas la quantité totale.", "On la baisse en retirant de l’eau ou avec du <b>sel</b> ou du <b>sucre</b>. Le cours ne donne pas de seuils."] },
        { h: "Déshydratation", p: ["Séchage à l’air, sous vide, <b>lyophilisation</b> (glace → vapeur : garde au mieux couleur et vitamines)."] },
      ],
      [
        { h: "Sous vide", p: ["Tout l’air retiré : moins d’oxydation, flore aérobie freinée.", "<b>Ne stérilise pas</b> : Clostridium botulinum, Listeria possibles ; froid 0 à 4 °C, DLC."] },
        { h: "Atmosphère modifiée", p: ["Azote et/ou CO₂ : végétaux de <b>4e gamme</b>, DLC courte, 0 à 4 à 6 °C."] },
        { h: "Procédés avancés", p: ["Microfiltration, haute pression (4 000 à 6 000 bars), ionisation (logo obligatoire)."] },
      ],
    ],
    carte: { centre: "Eau et air", branches: [
      ["Aw", ["Eau disponible", "Sel, sucre, séchage"]],
      ["Sécher", ["Air, vide", "Lyophilisation"]],
      ["Sous vide", ["Moins d’oxydation", "Ne stérilise pas"]],
      ["Atmosphère", ["Azote, CO₂", "4e gamme"]],
    ] },
  },
  {
    onglet: "Fermentations et conservateurs", titre: "Fermentations et conservateurs",
    notes: [
      [
        { h: "Les fermentations", p: ["Des micro-organismes consomment les sucres : le <b>pH baisse</b>, les germes indésirables sont freinés.", "<b>Alcoolique</b> (levures) : vin, bière, pain.", "<b>Lactique</b> : yaourts, fromages, choucroute.", "<b>Acétique</b> : vinaigre, kombucha."] },
      ],
      [
        { h: "Les conservateurs", p: ["Liste positive : règlement (CE) <b>1333/2008</b>.", "Antimicrobiens : acide sorbique E200, benzoate E211, sulfites E220 à E228 (allergène), nitrite E250 (charcuterie).", "Antioxydants : acide ascorbique <b>E300</b>, tocophérols E306, BHA, BHT.", "Traditionnels : sel, sucre (Aw), vinaigre (pH), alcool."] },
      ],
    ],
    carte: { centre: "Fermentations", branches: [
      ["Fermentations", ["Alcoolique", "Lactique", "Acétique"]],
      ["Antimicrobiens", ["E200, E211", "Nitrite E250"]],
      ["Antioxydants", ["Acide ascorbique <b>E300</b>"]],
      ["Traditionnels", ["Sel, sucre", "Vinaigre, alcool"]],
    ] },
  },
]);
