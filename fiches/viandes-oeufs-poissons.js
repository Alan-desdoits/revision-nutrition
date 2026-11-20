/* Fiches bristol : Viandes, œufs et poissons (source : cours/viandes-oeufs-poissons) */
Bristol.cours("viandes-oeufs-poissons", [
  {
    onglet: "Les viandes", titre: "Les viandes",
    notes: [
      [
        { h: "Définition", p: ["Parties comestibles des animaux terrestres : surtout les muscles, aussi les abats.", "Qualité : espèce, âge, alimentation, élevage, abattage, <b>maturation</b>."] },
        { h: "Classer", p: ["<b>Boucherie</b> (bœuf, veau, mouton, porc, cheval), <b>volailles</b>, <b>gibier</b>.", "Rouges (myoglobine : bœuf, mouton), blanches (veau, porc, volaille), noires (gibier à plumes)."] },
      ],
      [
        { h: "Trois catégories de morceaux", p: ["<b>1re</b> : cuisses, dos ; peu de tissu conjonctif (filet, entrecôte).", "<b>2e</b> : épaules, côtes (paleron, basse côte).", "<b>3e</b> : extrémités, collier, poitrine ; riches en collagène (jarret, plat de côte)."] },
        { h: "Viande hachée", p: ["Moins de <b>1 % de sel</b>. Le hachage fait passer les germes en profondeur. Hachage : 6 jours max après abattage."] },
        { h: "Abats", p: ["Rouges (foie, cœur, rognons) : très nourrissants, foie riche en cholestérol et vitamine A."] },
      ],
    ],
    carte: { centre: "Les viandes", branches: [
      ["Espèces", ["Boucherie", "Volailles", "Gibier"]],
      ["Couleur", ["Rouges : myoglobine", "Blanches", "Noires : gibier à plumes"]],
      ["Morceaux", ["1re : filet, entrecôte", "2e : paleron", "3e : jarret, collagène"]],
      ["Hachée", ["Moins de <b>1 %</b> de sel", "Germes en profondeur"]],
    ] },
  },
  {
    onglet: "Poissons et mer", titre: "Poissons et produits de la mer",
    notes: [
      [
        { h: "Classer", p: ["Milieu : eau douce, eau de mer, eau mixte.", "Squelette : <b>cartilagineux</b> (raie, requin) ou <b>osseux</b> (saumon, anchois)."] },
        { h: "Selon les lipides", p: ["Maigres <b>moins de 3 %</b>, demi-gras <b>3 à 10 %</b>, gras <b>plus de 10 %</b> (maquereau, hareng, saumon, anguille)."] },
        { h: "Protéines", p: ["Fibres musculaires 95 % (myofibrilles 70 %), tissu conjonctif 5 % : peu de collagène, cuisson rapide."] },
      ],
      [
        { h: "Pêche et élevage", p: ["Petite pêche (moins de 24 h) à grande pêche (plus de 21 jours).", "Aquaculture (mer), pisciculture (eau douce) ; extensif, demi-intensif, intensif.", "Labels : Label Rouge, AB, charte Aquaculture de nos régions."] },
        { h: "Mollusques, crustacés", p: ["Mollusques : céphalopodes (calamar), gastéropodes (bulot), bivalves (moule, huître).", "Crustacés : nageurs (crevettes), marcheurs (homards, crabes)."] },
      ],
    ],
    carte: { centre: "Poissons et mer", branches: [
      ["Lipides", ["Maigres : moins de <b>3 %</b>", "Demi-gras <b>3 à 10 %</b>", "Gras : plus de <b>10 %</b>"]],
      ["Squelette", ["Cartilagineux : raie", "Osseux : saumon"]],
      ["Origine", ["Pêche", "Aquaculture, pisciculture"]],
      ["Mer", ["Mollusques : moule", "Crustacés : crevette"]],
    ] },
  },
  {
    onglet: "Les œufs", titre: "Les œufs",
    notes: [
      [
        { h: "L’œuf", p: ["Coquille <b>10 %</b> (94 % de carbonate de chaux), blanc <b>60 %</b>, jaune <b>30 %</b> (lipides, cholestérol)."] },
        { h: "Calibres", p: ["XL ≥ 73 g · L 63 à 73 g · <b>M 53 à 63 g</b> · S ≤ 53 g."] },
        { h: "Code sur la coquille", p: ["<b>0</b> bio · <b>1</b> plein air (4 m² par poule) · <b>2</b> au sol · <b>3</b> de batterie, puis le pays (FR)."] },
      ],
      [
        { h: "Catégories", p: ["<b>A</b> : extra-frais et frais, ni lavés ni réfrigérés sous 5 °C.", "<b>Extra-frais</b> : moins de 4 jours, chambre à air ≤ 4 mm.", "<b>B</b> : déclassés, chambre à air ≤ 9 mm."] },
        { h: "Fraîcheur", p: ["Mirage : la chambre à air grandit avec l’âge.", "En eau salée : l’œuf vieux remonte.", "Cassé : jaune bombé et blanc épais = frais."] },
        { h: "Ovoproduits", p: ["Sans coquille : liquides, surgelés, en poudre ; œufs durs écalés pour la restauration."] },
      ],
    ],
    carte: { centre: "Les œufs", branches: [
      ["Composition", ["Coquille <b>10 %</b>", "Blanc <b>60 %</b>", "Jaune <b>30 %</b>"]],
      ["Code", ["0 bio, 1 plein air", "2 sol, 3 batterie"]],
      ["Catégories", ["A : extra-frais, frais", "Extra-frais : <b>4 jours</b>"]],
      ["Fraîcheur", ["Mirage", "Flottage"]],
    ] },
  },
  {
    onglet: "Composition", titre: "La composition",
    notes: [
      [
        { h: "Protéines pour 100 g", p: ["Volaille <b>27 g</b>, gibier 29,6 g, poissons <b>19 g</b>, viande de boucherie <b>18 g</b>, œuf 12,5 g.", "Protéines musculaires : digestibilité ≈ <b>95 %</b>, pas de facteur limitant."] },
        { h: "Lipides des viandes", p: ["Maigres <b>moins de 5 %</b>, demi-grasses 5 à 15 %, grasses <b>plus de 15 %</b>.", "Énergie : 130 à 230 kcal/100 g selon le gras.", "AG : saturés 45 %, mono 40 %, poly 15 %."] },
      ],
      [
        { h: "Minéraux", p: ["<b>Fer héminique</b> bien absorbé : 100 g de viande rouge couvrent ≈ 30 % des besoins (homme).", "Zinc plus biodisponible que dans le végétal."] },
        { h: "Vitamines", p: ["Viandes rouges très riches en <b>B12</b> et B1."] },
        { h: "Glucides", p: ["Négligeables : le glycogène devient acide lactique pendant la maturation."] },
      ],
    ],
    carte: { centre: "Composition", branches: [
      ["Protéines", ["Volaille <b>27 g</b>", "Poisson <b>19 g</b>", "Boucherie <b>18 g</b>"]],
      ["Lipides", ["Maigres : moins de <b>5 %</b>", "Grasses : plus de <b>15 %</b>"]],
      ["Minéraux", ["Fer héminique", "Zinc"]],
      ["Vitamines", ["B12, B1"]],
    ] },
  },
  {
    onglet: "Dans l’assiette", titre: "Dans l’assiette",
    notes: [
      [
        { h: "Le cœur du repas", p: ["Une portion de viande, poisson ou œufs + des légumes + un féculent : un repas équilibré.", "Leurs protéines aident la satiété."] },
        { h: "Repères par semaine", p: ["Viandes <b>3 à 4 fois</b>, plutôt maigres ; viande rouge <b>1 ou 2 fois maximum</b>.", "Poissons <b>au moins 2 fois</b>, dont <b>1 gras</b>.", "Œufs <b>1 à 2 fois</b>."] },
      ],
      [
        { h: "Le gibier", p: ["Risque sanitaire élevé ; à éviter chez l’enfant, en cas de calculs ou d’hypercholestérolémie.", "Femmes en âge de procréer et enfants : pas de grand gibier sauvage (<b>plomb</b>)."] },
        { h: "Associer", p: ["Légumes (fibres), féculents (énergie), huiles végétales (vitamines A, D, E, K)."] },
      ],
    ],
    carte: { centre: "Dans l’assiette", branches: [
      ["Viandes", ["<b>3 à 4 fois</b> par semaine", "Rouge : <b>1 à 2 fois</b> max"]],
      ["Poissons", ["Au moins <b>2 fois</b>", "Dont <b>1 gras</b>"]],
      ["Œufs", ["<b>1 à 2 fois</b> par semaine"]],
      ["Gibier", ["Plomb", "Pas chez l’enfant"]],
    ] },
  },
  {
    onglet: "Conserver et cuisiner", titre: "Conserver et cuisiner",
    notes: [
      [
        { h: "Conserver la viande", p: ["Film étirable 3 à 6 jours ; sous vide 5 à 10 jours ; charcuterie sous vide 21 jours.", "Aussi : surgélation, salage, séchage, fumage, appertisation."] },
        { h: "Le poisson et les œufs", p: ["Poisson : <b>0 à 2 °C</b>, sous glace, 48 h maximum.", "Œufs : debout, sous 8 °C."] },
        { h: "Préparer", p: ["Viande : parer, maturation (plus tendre), marinade.", "Poisson : écailler, éviscérer, lever les filets."] },
      ],
      [
        { h: "Cuire", p: ["Viande : douce et longue pour les morceaux à collagène (jarret, paleron) ; vive et courte pour les tendres (Maillard).", "Limiter la carbonisation (benzopyrènes, amines hétérocycliques).", "Poisson : vapeur, papillote ; juste à cœur.", "Œuf : le blanc prend à <b>62 °C</b>, le jaune vers <b>68 °C</b>."] },
        { h: "Effets", p: ["Protéines plus digestes ; vitamines B et D perdues en cuisson longue."] },
      ],
    ],
    carte: { centre: "Conserver, cuisiner", branches: [
      ["Viande", ["Film <b>3 à 6 jours</b>", "Sous vide 5 à 10 jours"]],
      ["Poisson", ["<b>0 à 2 °C</b>", "48 h maximum"]],
      ["Cuisson", ["Collagène : douce et longue", "Tendre : vive et courte"]],
      ["Œuf", ["Blanc <b>62 °C</b>", "Jaune <b>68 °C</b>"]],
    ] },
  },
  {
    onglet: "Sécurité sanitaire", titre: "La sécurité sanitaire",
    notes: [
      [
        { h: "Viandes", p: ["Parasites : tænias, trichine, toxoplasmose. ESB : prion.", "Salmonelle (bœuf haché), S. aureus, C. perfringens (plats cuisinés), <b>E. coli</b> (steaks cuits à moins de 65 °C), C. botulinum (conserves).", "pH ≈ 5,7 ; abattoirs agréés, inspection, chaîne du froid."] },
      ],
      [
        { h: "Poissons", p: ["Bactéries (Listeria, Vibrio), métaux lourds (<b>mercure</b>), parasites (<b>Anisakis</b>), biotoxines marines.", "Entre 0 et +2 °C ; bien cuit, ou congelé s’il est mangé cru."] },
        { h: "Œufs", p: ["<b>Salmonella enteritidis</b> : préparations crues (mayonnaise, tiramisu) le jour même.", "Ne pas laver les œufs avant de les stocker. Allergie fréquente chez l’enfant.", "Bien cuits pour enfants, femmes enceintes, personnes âgées."] },
      ],
    ],
    carte: { centre: "Sécurité sanitaire", branches: [
      ["Viandes", ["E. coli : cuire à cœur", "Salmonelle, parasites"]],
      ["Poissons", ["Anisakis", "Mercure", "<b>0 à 2 °C</b>"]],
      ["Œufs", ["Salmonella", "Ne pas laver"]],
      ["Publics fragiles", ["Tout bien cuit"]],
    ] },
  },
  {
    onglet: "Cas pratique", titre: "Le cas de Camille",
    notes: [
      [
        { h: "Le cas", p: ["Camille, 28 ans, running 3 fois par semaine, sans viande, poisson 2 fois et œufs 3 fois par semaine. Fatiguée, peu d’eau, saute parfois le dîner."] },
        { h: "Protéines", p: ["Besoin ≈ <b>60 à 70 g/j</b> (1 à 1,2 g/kg pour 60 kg), apports 40 à 50 g."] },
        { h: "Risques", p: ["<b>Fer</b> (végétal mal absorbé, café et thé), <b>B12</b>, oméga-3, énergie trop faible."] },
      ],
      [
        { h: "Équilibrer sans viande", p: ["Poissons <b>2 à 3 fois</b>, maigres et gras. Œufs 3 à 4 fois. Laitages 1 à 2 par jour.", "Légumineuses + céréales ; fer végétal + vitamine C ; huile de colza."] },
        { h: "Énergie, récupération", p: ["Ne pas sauter le dîner, protéines sur 3 repas, <b>1,5 à 2 L</b> d’eau, collation après le sport.", "Si la fatigue persiste : bilan sanguin (ferritine, B12)."] },
      ],
    ],
    carte: { centre: "Le cas de Camille", branches: [
      ["Besoins", ["Protéines <b>60 à 70 g</b>", "Apports 40 à 50 g"]],
      ["Risques", ["Fer", "B12", "Oméga-3"]],
      ["Solutions", ["Poisson <b>2 à 3 fois</b>", "Légumineuses + céréales", "Fer + vitamine C"]],
      ["Hygiène de vie", ["<b>1,5 à 2 L</b> d’eau", "Ne pas sauter le dîner"]],
    ] },
  },
]);
