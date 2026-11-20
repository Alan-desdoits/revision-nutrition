/* Fiches bristol : La toxicologie (source : cours/toxicologie) */
Bristol.cours("toxicologie", [
  {
    onglet: "Bases", titre: "La toxicologie",
    notes: [
      [
        { h: "Xénobiotiques", p: ["Substances <b>étrangères</b> au fonctionnement normal : polluants, résidus, médicaments, additifs. Entrent par l’alimentation, la respiration, la peau."] },
        { h: "Définition", p: ["La science des <b>effets néfastes des substances chimiques</b> sur les êtres vivants : nature des toxiques, parcours, mécanismes, conséquences."] },
        { h: "Branches", p: ["Fondamentale, clinique, environnementale, <b>alimentaire</b> (additifs, contaminants), médico-légale."] },
      ],
      [
        { h: "Du contact à l’effet", p: ["<b>Exposition</b> : le contact avec la substance.", "<b>Toxicocinétique</b> : ce que l’organisme fait de la substance (absorption, distribution, métabolisme, élimination).", "<b>Toxicodynamie</b> : ce que la substance fait à l’organisme (effet aigu ou chronique)."] },
      ],
    ],
    carte: { centre: "Toxicologie", branches: [
      ["Xénobiotiques", ["Substances étrangères"]],
      ["Branches", ["Clinique", "Alimentaire", "Médico-légale"]],
      ["Trois phases", ["Exposition", "Toxicocinétique", "Toxicodynamie"]],
    ] },
  },
  {
    onglet: "Entrer dans le corps", titre: "Entrer dans le corps",
    notes: [
      [
        { h: "Franchir les membranes", p: ["Une <b>bicouche lipidique</b> semi-perméable : le passage dépend de la taille, de la charge, de la solubilité, de l’affinité pour les lipides."] },
        { h: "Cinq mécanismes", p: ["<b>Diffusion passive</b> : le plus courant, avec le gradient, sans énergie.", "Diffusion facilitée : protéines de transport.", "<b>Transport actif</b> : contre le gradient, avec énergie.", "Endocytose, filtration."] },
      ],
      [
        { h: "Voies de pénétration", p: ["<b>Digestive</b> : la plus fréquente ; passage par le foie (premier passage hépatique).", "<b>Respiratoire</b> : alvéoles très vascularisées (CO, solvants, particules).", "<b>Cutanée</b>, parentérale."] },
        { h: "Particules inhalées", p: ["Grandes : nez. Intermédiaires : trachée, bronches. Petites et <b>ultrafines</b> : jusqu’aux alvéoles et au sang."] },
      ],
    ],
    carte: { centre: "Entrer", branches: [
      ["Membranes", ["Bicouche lipidique"]],
      ["Mécanismes", ["Diffusion passive", "Transport actif", "Endocytose"]],
      ["Voies", ["Digestive : la plus fréquente", "Respiratoire", "Cutanée"]],
      ["Particules", ["Plus petites = plus loin"]],
    ] },
  },
  {
    onglet: "Le parcours (ADME)", titre: "Le parcours ADME",
    notes: [
      [
        { h: "Quatre étapes", p: ["<b>A</b>bsorption : du site d’entrée vers le sang ; plus facile si lipophile et petite.", "<b>D</b>istribution : vers les tissus.", "<b>M</b>étabolisme : biotransformation, surtout dans le foie.", "<b>E</b>xcrétion : urines et bile, parfois sueur, salive, lait, poumons."] },
        { h: "Ce qu’elles décident", p: ["La <b>quantité</b> de toxique dans les tissus et la <b>durée</b> d’exposition des cellules."] },
      ],
      [
        { h: "La demi-vie", p: ["Le temps pour que la concentration sanguine <b>diminue de moitié</b>."] },
        { h: "L’accumulation", p: ["Élimination rapide : la concentration redescend entre deux expositions.", "Élimination lente : elle <b>s’accumule</b> à chaque exposition, même à faibles doses."] },
      ],
    ],
    carte: { centre: "ADME", branches: [
      ["A", ["Absorption"]],
      ["D", ["Distribution"]],
      ["M", ["Métabolisme (foie)"]],
      ["E", ["Excrétion"]],
      ["Demi-vie", ["Concentration ÷ 2", "Lente : accumulation"]],
    ] },
  },
  {
    onglet: "Effets toxiques", titre: "Les effets toxiques",
    notes: [
      [
        { h: "Cible et interaction", p: ["Cibles : récepteur, enzyme, canal ionique, protéine de signalisation, <b>ADN</b>.", "Effet <b>réversible</b> ou <b>irréversible</b>."] },
        { h: "Types d’effets", p: ["<b>Aiguë</b> : forte dose, effets rapides (CO, cyanure).", "<b>Chronique</b> : faibles doses longtemps (plomb, benzène, pesticides).", "Ciblés (foie, reins…), <b>génotoxiques</b>, <b>cancérogènes</b> (amiante, aflatoxines), reprotoxiques et <b>perturbateurs endocriniens</b> (même à très faibles doses)."] },
      ],
      [
        { h: "Dose-effet", p: ["« C’est la dose qui fait le poison » (<b>Paracelse</b>).", "Linéaire, <b>à seuil</b> (rien sous un seuil), non linéaire ou en U.", "Le seuil sert à fixer les limites d’exposition."] },
        { h: "Sensibilité", p: ["Âge, sexe, état nutritionnel et de santé, génétique, expositions combinées."] },
      ],
    ],
    carte: { centre: "Effets", branches: [
      ["Durée", ["Aiguë : forte dose", "Chronique : faibles doses"]],
      ["Gravité", ["Génotoxique", "Cancérogène", "Perturbateur endocrinien"]],
      ["Dose-effet", ["Paracelse", "Linéaire, seuil, U"]],
      ["Sensibilité", ["Âge", "Génétique"]],
    ] },
  },
  {
    onglet: "Intoxications", titre: "Les intoxications",
    notes: [
      [
        { h: "Alimentaires", p: ["Biologiques (Salmonella, Listeria, Norovirus), chimiques (pesticides, <b>mycotoxines</b> comme l’aflatoxine, métaux lourds), naturelles (amanite phalloïde, ciguatera)."] },
        { h: "Médicamenteuses", p: ["Surdosage, interactions, marge étroite (paracétamol, lithium)."] },
        { h: "Métaux lourds", p: ["<b>Plomb</b> : saturnisme. Mercure : nerfs et reins. Arsenic : cancers. Cadmium : os et reins."] },
      ],
      [
        { h: "Gaz", p: ["<b>Monoxyde de carbone</b> : très fréquent, asphyxiant. Chlore, ammoniac."] },
        { h: "Drogues et alcool", p: ["Alcool (cirrhose), cannabis, cocaïne : effets neurologiques et cardiovasculaires."] },
        { h: "Produits industriels et domestiques", p: ["Solvants, eau de Javel (brûlures), pesticides organophosphorés."] },
      ],
    ],
    carte: { centre: "Intoxications", branches: [
      ["Alimentaires", ["Microbes", "Mycotoxines", "Champignons"]],
      ["Métaux", ["Plomb : saturnisme", "Mercure, cadmium"]],
      ["Gaz", ["Monoxyde de carbone"]],
      ["Autres", ["Médicaments", "Drogues", "Produits ménagers"]],
    ] },
  },
]);
