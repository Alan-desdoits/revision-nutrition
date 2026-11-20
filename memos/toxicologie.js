/* Mémo de révision imprimé : La toxicologie (source : cours/toxicologie) */
Fiches.memo([
  {
    onglet: "Bases",
    blocs: [
      { t: "Xénobiotiques", k: "ink", p: ["Substances étrangères au fonctionnement normal : polluants, résidus chimiques, médicaments, additifs. Elles entrent par l’alimentation, la respiration ou la peau, avec des effets neutres, bénéfiques ou nocifs."] },
      { t: "La toxicologie", k: "ink", p: ["La science des <b>effets néfastes des substances chimiques</b> sur les êtres vivants : nature et source des toxiques ; entrée, distribution, métabolisme, élimination ; mécanismes et conséquences (intoxication aiguë ou chronique, cancers, perturbations hormonales) ; toxicodépendance, environnement, sécurité alimentaire. Elle sert à prévenir, diagnostiquer, traiter, évaluer la sécurité des produits."],
        kv: [["Branches", "fondamentale, clinique, environnementale, alimentaire (additifs, contaminants, microbes), médico-légale"]] },
      { t: "Du contact à l’effet", k: "vit", kv: [["Exposition", "l’organisme entre en contact avec la substance"], ["Toxicocinétique", "ce que l’organisme fait de la substance : absorption, distribution, métabolisme, élimination"], ["Toxicodynamie", "ce que la substance fait à l’organisme : effet aigu ou chronique"]] },
    ],
  },
  {
    onglet: "Entrer dans le corps",
    blocs: [
      { t: "Franchir les membranes", k: "ink", p: ["Une bicouche lipidique semi-perméable : le passage dépend de la taille, de la charge, de la solubilité, de l’affinité pour les lipides."],
        table: [["Mécanisme", "Énergie", "Gradient", "Ce qui passe"], ["Diffusion passive", "Non", "Avec", "Le plus courant : liposolubles, non ionisées, petites"], ["Diffusion facilitée", "Non", "Avec", "Hydrophiles ou grosses, par des protéines"], ["Transport actif", "Oui", "Contre", "Transporteurs"], ["Endocytose", "–", "–", "Vésicule : macromolécules, grosses particules, nanoparticules, toxines biologiques"], ["Filtration", "Pression hydrostatique", "–", "Petites molécules hydrosolubles, par des pores (capillaires, rein)"]] },
      { t: "Les voies de pénétration", k: "ink", kv: [["Digestive", "la plus fréquente ; muqueuse intestinale, puis foie (effet de premier passage)"], ["Respiratoire", "alvéoles très vascularisées : gaz (CO, oxydes d’azote, ozone), vapeurs (benzène, solvants, mercure), particules (silice, tabac)"], ["Cutanée, parentérale", "à travers la peau ; par injection"]] },
      { t: "Particules inhalées", k: "bad-f", p: ["Grandes : piégées dans le nez. Intermédiaires : trachée, bronches, remontées par les cils. Petites et ultrafines : jusqu’aux alvéoles, voire le sang."] },
    ],
  },
  {
    onglet: "Le parcours (ADME)",
    blocs: [
      { t: "Quatre étapes", k: "vit", table: [["Étape", "Ce qui se passe"], ["Absorption", "Du site d’entrée vers la circulation ; plus facile si lipophile, petite, barrières lésées"], ["Distribution", "Le sang l’apporte aux tissus, ni de façon homogène ni au hasard : liposolubles dans les tissus gras et le cerveau ; fraction liée à l’albumine inactive ; barrière hémato-encéphalique ; concentration possible dans un organe cible"], ["Métabolisme", "Biotransformation surtout dans le foie : rendre la molécule hydrosoluble. Phase I (oxydation, réduction, hydrolyse, cytochromes P450 ; métabolite parfois plus toxique) ; phase II (conjugaison). Bioactivation de certains solvants, pesticides"], ["Excrétion", "Urines (filtration, réabsorption) et bile ; voies secondaires : sueur (plomb), salive (mercure), lait maternel (PCB), poumons (solvants), phanères (arsenic)"]],
        retenir: "Elles déterminent la quantité de toxique dans les tissus et la durée d’exposition des cellules." },
      { t: "Demi-vie et accumulation", k: "vit", p: ["La <b>demi-vie</b> d’élimination : le temps pour que la concentration sanguine diminue de moitié. Élimination rapide : la concentration redescend entre deux expositions. Élimination lente : elle s’<b>accumule</b> à chaque exposition, même à faibles doses. Le cours ne chiffre pas d’exemple."] },
    ],
  },
  {
    onglet: "Effets toxiques",
    blocs: [
      { t: "La toxicodynamie", k: "vit", p: ["Selon la molécule, sa dose, sa durée d’action, la réponse des cellules."],
        kv: [["Cibles", "récepteur, enzyme, canal ionique, protéine de signalisation, ADN"], ["Interactions", "activer ou bloquer, inhiber une enzyme, muter l’ADN, dérégler la signalisation"], ["Réversibilité", "réversible après élimination, ou irréversible"]] },
      { t: "Les types d’effets", k: "bad-f", table: [["Type", "Ce que c’est", "Exemples"], ["Aiguë", "Exposition brève, forte dose, effets rapides", "Monoxyde de carbone, cyanure"], ["Chronique", "Faibles doses, longtemps, effets insidieux", "Plomb, benzène, solvants, pesticides"], ["Ciblés", "Un organe préférentiel", "Foie, reins, nerfs, cœur, sang"], ["Génotoxiques", "ADN altéré", "Malformations, cancers"], ["Cancérogènes", "Cellules tumorales", "Amiante, benzène, aflatoxines, formaldéhyde"], ["Reprotoxiques, perturbateurs endocriniens", "Fertilité, développement, hormones, même à très faibles doses", ""]] },
      { t: "Dose-effet et sensibilité", k: "vit", p: ["« C’est la dose qui fait le poison » (<b>Paracelse</b>). Relation linéaire, à seuil (aucun effet sous une concentration), non linéaire ou en U. Le seuil sert à fixer les limites d’exposition."],
        kv: [["Sensibilité", "âge (enfants, âgés), sexe et hormones, état nutritionnel et de santé, génétique (enzymes de détoxification), expositions combinées"]] },
    ],
  },
  {
    onglet: "Intoxications",
    blocs: [
      { t: "Six familles", k: "bad-f", table: [["Famille", "Exemples"], ["Alimentaires", "Biologiques (Salmonella, E. coli, Listeria, Norovirus, Toxoplasma) ; chimiques (pesticides, additifs, aflatoxine, métaux lourds) ; naturelles (amanite phalloïde, datura, ciguatera, tétrodotoxine)"], ["Médicamenteuses", "Surdosage, interactions, marge étroite (digitaliques, lithium, paracétamol)"], ["Métaux lourds", "Plomb (saturnisme), mercure (nerfs, reins), arsenic (cancers), cadmium (os, reins)"], ["Gaz", "Monoxyde de carbone (très fréquent), chlore, ammoniac, sulfure d’hydrogène"], ["Drogues, alcool", "Alcool (cirrhose), cannabis, cocaïne, héroïne, amphétamines"], ["Industriels, domestiques", "Solvants, eau de Javel, pesticides organophosphorés, paraquat"]],
        retenir: "Les intoxications alimentaires biologiques en collectivité sont détaillées dans le cours Sécurité sanitaire et TIAC." },
    ],
  },
]);
