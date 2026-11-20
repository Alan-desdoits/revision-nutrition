/* Fiches bristol : Sécurité sanitaire et TIAC (source : cours/tiac) */
Bristol.cours("tiac", [
  {
    onglet: "Définition", titre: "Qu’est-ce qu’une TIAC ?",
    notes: [
      [
        { h: "Définition", p: ["<b>Toxi-Infection Alimentaire Collective</b> : des troubles similaires chez <b>au moins deux personnes</b> après un même aliment.", "En cause : un agent pathogène (bactérie, virus, parasite, toxine)."] },
        { h: "Les plus vulnérables", p: ["Jeunes enfants, femmes enceintes, personnes âgées."] },
      ],
      [
        { h: "Quatre critères", p: ["<b>Collective</b> : plusieurs personnes, un repas ou un lot partagé.", "<b>Symptômes surtout digestifs</b> : nausées, vomissements, diarrhées, douleurs, parfois fièvre.", "<b>Un délai</b> d’apparition, souvent quelques heures.", "<b>Une origine alimentaire commune</b> : le critère essentiel."] },
      ],
    ],
    carte: { centre: "TIAC", branches: [
      ["Définition", ["Au moins <b>2 personnes</b>", "Même aliment"]],
      ["Critères", ["Collective", "Digestifs", "Délai", "Origine commune"]],
      ["Fragiles", ["Enfants, enceintes", "Âgés"]],
    ] },
  },
  {
    onglet: "Les agents", titre: "Les agents",
    notes: [
      [
        { h: "Salmonella", p: ["L’agent <b>le plus souvent confirmé</b>. Œufs, volaille, viande. Diarrhées, fièvre ; septicémie chez les fragiles."] },
        { h: "Staphylococcus aureus", p: ["Une <b>toxine</b> : aliments manipulés puis laissés à température ambiante (charcuterie, pâtisserie à la crème).", "Délai <b>1 à 6 h</b> ; vomissements intenses."] },
      ],
      [
        { h: "Clostridium perfringens", p: ["Sol, intestin des animaux. <b>Viandes cuites mal refroidies</b>.", "Délai <b>8 à 24 h</b> ; diarrhées, souvent bénignes."] },
        { h: "Bacillus cereus", p: ["<b>Riz</b>, céréales, féculents. Forme émétique (vomissements rapides) ou diarrhéique (plusieurs heures après)."] },
        { h: "Retenir", p: ["Chaîne du froid et du chaud, hygiène des manipulations, cuisson adaptée."] },
      ],
    ],
    carte: { centre: "Les agents", branches: [
      ["Salmonella", ["Le plus fréquent", "Œufs, volaille"]],
      ["S. aureus", ["Toxine", "<b>1 à 6 h</b>", "Pâtisserie, charcuterie"]],
      ["C. perfringens", ["<b>8 à 24 h</b>", "Viande mal refroidie"]],
      ["B. cereus", ["Riz, féculents"]],
    ] },
  },
  {
    onglet: "Symptômes et chiffres", titre: "Symptômes et chiffres",
    notes: [
      [
        { h: "Symptômes courants", p: ["<b>Diarrhées</b> (le signe principal), vomissements (toxines), douleurs abdominales, fièvre. Parfois maux de tête, frissons, urticaire."] },
        { h: "Formes sévères", p: ["Déshydratation sévère (enfants, âgés).", "Atteintes systémiques : septicémie (Salmonella).", "Complications neurologiques (Clostridium botulinum)."] },
      ],
      [
        { h: "En France (déclaration obligatoire)", p: ["<b>1 200 à 1 800</b> épisodes par an, <b>10 000 à 16 000</b> personnes.", "Hospitalisées ou aux urgences : ≈ <b>6 %</b>.", "2020 : ≈ −43 % (Covid-19)."] },
        { h: "Surveillance", p: ["Santé publique France, ARS, Centre national de référence des salmonelles."] },
      ],
    ],
    carte: { centre: "Symptômes, chiffres", branches: [
      ["Symptômes", ["Diarrhées", "Vomissements", "Douleurs, fièvre"]],
      ["Graves", ["Déshydratation", "Septicémie"]],
      ["Chiffres", ["<b>1 200 à 1 800</b> épisodes", "<b>10 000 à 16 000</b> malades", "≈ <b>6 %</b> hospitalisés"]],
    ] },
  },
  {
    onglet: "Prévenir", titre: "Prévenir",
    notes: [
      [
        { h: "Toute la filière", p: ["Production primaire, transformation, distribution, préparation finale (contaminations croisées)."] },
        { h: "Les températures", p: ["Conservation au froid : <b>0 à 4 °C</b>.", "Maintien au chaud : <b>au-dessus de +63 °C</b>.", "Réchauffer <b>au moins à +74 °C</b> à cœur."] },
        { h: "Hygiène", p: ["Mains lavées, surfaces désinfectées, tenue propre. Cuisson à cœur. <b>DLC</b> strictement respectée."] },
      ],
      [
        { h: "Contaminations croisées", p: ["Séparer <b>cru et cuit</b> (planches, ustensiles distincts), emballer les denrées."] },
        { h: "Publics sensibles", p: ["<b>Femmes enceintes</b> : pas de viande crue, de lait cru ni de fromages au lait cru (sauf pâtes pressées cuites), pas de poisson cru ou fumé.", "Personnes âgées, jeunes enfants : limiter les produits crus."] },
      ],
    ],
    carte: { centre: "Prévenir", branches: [
      ["Froid", ["<b>0 à 4 °C</b>"]],
      ["Chaud", ["Maintien <b>+63 °C</b>", "Réchauffe <b>+74 °C</b>"]],
      ["Hygiène", ["Mains", "Cru ≠ cuit", "DLC"]],
      ["Enceinte", ["Pas de cru", "Pas de lait cru"]],
    ] },
  },
  {
    onglet: "En cas de TIAC", titre: "En cas de TIAC",
    notes: [
      [
        { h: "La procédure", p: ["<b>1. Alerter</b> : signalement obligatoire au médecin inspecteur de l’<b>ARS</b> (par un médecin, un responsable de restauration collective ou un particulier).", "<b>2. Conserver des échantillons</b> : plats consommés, <b>plats témoins</b>, emballages ; prélèvements biologiques.", "<b>3. Rassembler les informations</b> : convives malades ou non, symptômes, dates, repas, personnel."] },
      ],
      [
        { h: "Ce qu’elle permet", p: ["<b>Retirer</b> les denrées suspectes.", "<b>Identifier</b> l’aliment ou l’agent.", "<b>Limiter</b> la propagation.", "<b>Corriger</b> les pratiques.", "<b>Surveiller</b> : données nationales."] },
      ],
    ],
    carte: { centre: "En cas de TIAC", branches: [
      ["1. Alerter", ["ARS"]],
      ["2. Conserver", ["Plats témoins", "Emballages"]],
      ["3. Rassembler", ["Convives, symptômes", "Repas"]],
      ["Ensuite", ["Retirer, identifier", "Corriger"]],
    ] },
  },
]);
