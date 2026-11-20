/* Mémo de révision imprimé : Sécurité sanitaire et TIAC (source : cours/tiac) */
Fiches.memo([
  {
    onglet: "Définition",
    blocs: [
      { t: "La TIAC", k: "bad-f", p: ["<b>Toxi-Infection Alimentaire Collective</b> : des troubles similaires chez <b>au moins deux personnes</b> après la consommation d’un même aliment. En cause : un agent pathogène (bactérie, virus, parasite, toxine). Souvent légères, graves pour jeunes enfants, femmes enceintes, personnes âgées."] },
      { t: "Quatre critères", k: "bad-f", kv: [["Collective", "plusieurs personnes, un repas ou un lot partagé"], ["Symptômes surtout digestifs", "nausées, vomissements, diarrhées, douleurs abdominales, parfois fièvre"], ["Un délai", "en général dans les heures qui suivent, selon l’agent"], ["Origine alimentaire commune", "le critère essentiel"]],
        retenir: "Ces critères distinguent une TIAC d’une infection individuelle et servent de base à l’enquête." },
    ],
  },
  {
    onglet: "Les agents",
    blocs: [
      { t: "Les quatre agents principaux en France", k: "bad-f", table: [["Agent", "Aliments", "Délai", "Symptômes"], ["Salmonella (le plus confirmé)", "Œufs, volaille, viande, certains laitiers", "Non chiffré", "Diarrhées, douleurs, fièvre, vomissements ; septicémie chez les fragiles"], ["Staphylococcus aureus (toxine)", "Aliments manipulés gardés à température ambiante : charcuterie, laitiers, pâtisserie à la crème", "1 à 6 h", "Vomissements intenses, crampes"], ["Clostridium perfringens", "Viandes cuites mal refroidies", "8 à 24 h", "Diarrhées, douleurs ; souvent bénin"], ["Bacillus cereus", "Céréales, riz, féculents", "Émétique rapide ; diarrhéique plusieurs heures après", "Vomissements ou diarrhées"]],
        retenir: "Chaîne du froid et du chaud, hygiène des manipulations, cuisson adaptée. Seule l’enquête confirme l’agent." },
    ],
  },
  {
    onglet: "Symptômes et chiffres",
    blocs: [
      { t: "Les symptômes", k: "bad-f", kv: [["Courants", "diarrhées (le signe principal), vomissements et nausées (toxines), douleurs abdominales, fièvre"], ["Parfois", "maux de tête, frissons, urticaire"], ["Formes sévères", "déshydratation sévère (enfants, âgés), septicémie (Salmonella), complications neurologiques (Clostridium botulinum)"]],
        p: ["La sévérité dépend de l’état de santé, de l’agent et de sa dose, de la rapidité de la prise en charge."] },
      { t: "Les chiffres en France", k: "ink", p: ["Déclaration obligatoire ; surveillance par Santé publique France, les ARS et le Centre national de référence des salmonelles."],
        kv: [["Épisodes", "1 200 à 1 800 par an"], ["Personnes touchées", "10 000 à 16 000 par an"], ["Hospitalisées ou aux urgences", "≈ 6 % (10 000 malades : ≈ 600)"], ["2020", "≈ − 43 % par rapport à 2019 (Covid-19)"]] },
    ],
  },
  {
    onglet: "Prévenir",
    blocs: [
      { t: "Toute la filière", k: "ink", kv: [["Production primaire", "germes de l’eau, du sol, des aliments des animaux"], ["Transformation", "découpe, charcuterie, pasteurisation mal maîtrisées"], ["Distribution", "rupture de température, mauvaise manipulation"], ["Préparation finale", "cuisson, conservation, contaminations croisées"]] },
      { t: "Les températures", k: "eau", kv: [["Conservation au froid", "0 à 4 °C"], ["Maintien au chaud", "au-dessus de +63 °C"], ["Réchauffage", "au moins +74 °C à cœur"]] },
      { t: "Hygiène et conservation", k: "ink", list: ["Lavage fréquent des mains ; surfaces et ustensiles désinfectés ; tenue propre.", "Cuisson à cœur des viandes, poissons, œufs, viande hachée.", "<b>DLC</b> strictement respectée ; la DDM concerne la qualité.", "Séparer <b>cru et cuit</b> (planches, ustensiles) ; emballer les denrées."] },
      { t: "Publics sensibles", k: "bad-f", p: ["<b>Femmes enceintes</b> : pas de viande crue ou peu cuite, de certaines charcuteries, de lait cru ni de fromages au lait cru (sauf pâtes pressées cuites), de poissons et fruits de mer crus ou fumés. <b>Personnes âgées</b>, jeunes enfants : limiter les produits crus ou insuffisamment cuits."] },
    ],
  },
  {
    onglet: "En cas de TIAC",
    blocs: [
      { t: "La procédure", k: "bad-f", table: [["Étape", "Contenu"], ["1. Alerter", "Signalement obligatoire au médecin inspecteur de l’ARS ou au service de sécurité sanitaire de l’alimentation, par un médecin, un responsable de restauration collective ou un particulier"], ["2. Conserver des échantillons", "Aliments consommés, plats témoins, étiquetages, emballages ; prélèvements biologiques (selles, vomissements)"], ["3. Rassembler les informations", "Convives malades et non malades, symptômes, dates, composition des repas, personnel présent"]] },
      { t: "Ce que permet la procédure", k: "ink", kv: [["Retirer", "les denrées suspectes"], ["Identifier", "l’aliment ou l’agent"], ["Limiter", "la propagation"], ["Corriger", "les pratiques fautives"], ["Surveiller", "alimenter la surveillance nationale"]] },
    ],
  },
]);
