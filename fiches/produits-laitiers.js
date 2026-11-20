/* Fiches bristol : Les produits laitiers (source : cours/produits-laitiers) */
Bristol.cours("produits-laitiers", [
  {
    onglet: "Le lait", titre: "Le lait",
    notes: [
      [
        { h: "Composition", p: ["Eau <b>87 %</b> : microbiologiquement instable.", "Lactose <b>4,5 à 5 g</b>/100 mL.", "Protéines : <b>80 % de caséines</b>, 20 % du lactosérum (β-lactoglobuline allergisante).", "Calcium <b>120 mg</b>/100 g, Ca/P = 1,4 : un bol de 250 mL ≈ 300 mg (30 % du besoin)."] },
        { h: "Matière grasse", p: ["Entier ≈ 3,5 %, <b>demi-écrémé 1,5 à 1,8 %</b> (le plus consommé), écrémé."] },
      ],
      [
        { h: "Traitements", p: ["Cru : aucun chauffage, risque microbien, 72 h.", "Pasteurisé, stérilisé, microfiltré.", "<b>UHT : 145 °C, 4 à 15 s</b> ; 3 mois fermé, 3 à 5 jours ouvert au frais."] },
        { h: "Microbiologie", p: ["Mettre vite entre <b>2 et 4 °C</b>.", "Utiles : bactéries lactiques. Indicateurs : coliformes.", "Pathogènes : Listeria, Salmonella, Brucella, Yersinia (pousse même à 2 à 4 °C)."] },
      ],
    ],
    carte: { centre: "Le lait", branches: [
      ["Composition", ["Eau <b>87 %</b>", "Lactose <b>4,5 à 5 g</b>", "Caséines <b>80 %</b>", "Calcium <b>120 mg</b>"]],
      ["Gras", ["Entier ≈ 3,5 %", "Demi-écrémé 1,5 à 1,8 %"]],
      ["Traitements", ["Cru, pasteurisé", "UHT <b>145 °C</b>, 4 à 15 s"]],
      ["Germes", ["Froid <b>2 à 4 °C</b>", "Listeria, Salmonella"]],
    ] },
  },
  {
    onglet: "Autres laits", titre: "Les autres laits",
    notes: [
      [
        { h: "Concentré, en poudre", p: ["Concentré : ≈ 60 % de l’eau évaporée ; sucré ≈ 40 % de sucre ajouté.", "Poudre : ≈ 90 % de l’eau retirée (atomisation ou lyophilisation), ≈ 500 kcal/100 g."] },
        { h: "Sans lactose, enrichis", p: ["Sans lactose : lactose coupé par la lactase, même valeur. <b>Pas pour l’allergie</b> aux protéines de lait.", "Enrichis : calcium, vitamine D, oméga-3."] },
      ],
      [
        { h: "Préparations infantiles", p: ["Le lait de vache seul ne convient pas : trop de protéines (≈ 3,5 g contre ≈ 1 g/100 mL).", "1er âge (0 à 6 mois), 2e âge (6 à 12 mois), croissance (1 à 3 ans, fer).", "Spéciales : HA, hydrolysats (APLV), épaissies."] },
        { h: "Boissons végétales", p: ["Pauvres en protéines sauf le soja ; calcium seulement si enrichies. Le mot « lait » est réservé aux produits animaux."] },
      ],
    ],
    carte: { centre: "Autres laits", branches: [
      ["Conserver", ["Concentré : 60 % d’eau en moins", "Poudre : 90 % en moins"]],
      ["Adaptés", ["Sans lactose : lactase", "Enrichis : D, calcium"]],
      ["Infantiles", ["1er âge : 0 à 6 mois", "2e âge : 6 à 12 mois", "Croissance : 1 à 3 ans"]],
      ["Végétales", ["Peu de protéines", "Soja : exception"]],
    ] },
  },
  {
    onglet: "Laits fermentés", titre: "Les laits fermentés",
    notes: [
      [
        { h: "Le principe", p: ["Les bactéries lactiques transforment le lactose en <b>acide lactique</b> : conservation, calcium mieux absorbé, digestion."] },
        { h: "Définitions", p: ["<b>Probiotique</b> : micro-organismes vivants qui agissent dans l’intestin.", "<b>Prébiotique</b> : nourrit le microbiote. <b>Symbiotique</b> : les deux."] },
        { h: "Le yaourt", p: ["Deux bactéries vivantes en symbiose : <b>Lactobacillus bulgaricus</b> et <b>Streptococcus thermophilus</b>."] },
      ],
      [
        { h: "Fabrication", p: ["Pasteurisation 5 min à 90 °C, levain, étuvage 2 à 3 h à <b>41 à 43 °C</b>.", "Ferme : fermenté en pot. Brassé : en cuve puis brassé."] },
        { h: "Règles", p: ["Ingrédients ajoutés : <b>30 % maximum</b>. Pectine, gélatine, amidon modifié : interdits.", "≈ 25 % du lactose devient acide lactique : plus digeste."] },
        { h: "Autres", p: ["Kéfir (pétillant, un peu d’alcool), skyr (2 à 3 fois plus de protéines), lait ribot."] },
      ],
    ],
    carte: { centre: "Laits fermentés", branches: [
      ["Principe", ["Lactose → acide lactique", "Conservation, digestion"]],
      ["Yaourt", ["L. bulgaricus", "S. thermophilus", "<b>41 à 43 °C</b>"]],
      ["Règles", ["<b>30 % maximum</b> d’ajouts", "Ferme ou brassé"]],
      ["Mots", ["Probiotique", "Prébiotique", "Symbiotique"]],
    ] },
  },
  {
    onglet: "Fromages", titre: "Les fromages",
    notes: [
      [
        { h: "Coaguler", p: ["Caillé (solide) + lactosérum (liquide).", "<b>Caillage lactique</b> (pH < 4,6) : frais. <b>Présure</b> (pH 6,6) : pâtes pressées. Les deux : pâtes demi-fermes."] },
        { h: "Familles", p: ["Frais (faisselle), croûte fleurie (camembert), croûte lavée (munster), persillée (roquefort), pressée non cuite (reblochon), <b>pressée cuite</b> (comté), fondu."] },
        { h: "Affinage", p: ["<b>8 à 15 °C</b>, 80 à 95 % d’humidité. Pressée cuite : 4 à 24 mois."] },
      ],
      [
        { h: "Valeurs pour 100 g", p: ["Frais : 75 g d’eau, 15 g de protéines, 200 kcal, 150 mg de calcium.", "Pâte molle : 25 g, 300 kcal, 250 à 550 mg.", "Pressée cuite : 30 g, <b>400 kcal</b>, <b>950 mg</b> de calcium.", "Moins d’eau = plus concentré ; peu de lactose dans les affinés."] },
        { h: "Réglementation", p: ["Décret de 2007 : matières exclusivement laitières, au moins <b>23 g</b> de matière sèche/100 g (sauf frais)."] },
      ],
    ],
    carte: { centre: "Fromages", branches: [
      ["Caillage", ["Lactique : frais", "Présure : pâtes pressées"]],
      ["Familles", ["Croûte fleurie, lavée", "Persillée", "Pressée cuite ou non"]],
      ["Valeurs", ["Frais : 200 kcal", "Pâte dure : <b>400 kcal</b>", "Calcium jusqu’à <b>950 mg</b>"]],
      ["Affinage", ["<b>8 à 15 °C</b>", "Comté : 4 à 24 mois"]],
    ] },
  },
  {
    onglet: "Crème et beurre", titre: "Crème et beurre",
    notes: [
      [
        { h: "La crème", p: ["Partie grasse du lait séparée par <b>centrifugation</b>, standardisée (30 % entière, 15 % allégée), pasteurisée, homogénéisée.", "Fraîche : seulement pasteurisée, conditionnée dans les 24 h. Chantilly : au moins 30 g de MG."] },
        { h: "Pas un laitier", p: ["Crème et beurre n’ont <b>pas la place d’un produit laitier</b> : presque pas de calcium."] },
      ],
      [
        { h: "Le beurre", p: ["Au moins <b>82 % de MG</b>, ≈ 720 kcal/100 g.", "Le <b>barattage</b> inverse l’émulsion : beurre + babeurre.", "Doux, demi-sel (1,5 à 2 %), salé (plus de 2 %). Clarifié (ghee) : jusqu’à 250 °C.", "Saturés, vitamines A, D, E, K ; acide butyrique."] },
        { h: "AOP", p: ["Isigny, Charentes-Poitou, Bresse."] },
      ],
    ],
    carte: { centre: "Crème et beurre", branches: [
      ["Crème", ["Centrifugation", "Entière 30 %, allégée 15 %"]],
      ["Beurre", ["<b>82 %</b> de MG", "≈ 720 kcal", "Barattage"]],
      ["Sel", ["Demi-sel 1,5 à 2 %", "Salé : plus de 2 %"]],
      ["À retenir", ["Pas un produit laitier", "Peu de calcium"]],
    ] },
  },
  {
    onglet: "Repères", titre: "Les repères",
    notes: [
      [
        { h: "Combien ?", p: ["<b>2 produits laitiers</b> par jour chez l’adulte.", "<b>3</b> chez l’enfant, l’adolescent et la personne âgée.", "Varier lait, yaourt, fromage blanc, fromage."] },
        { h: "Une portion", p: ["Yaourt <b>125 g</b> · fromage blanc 100 g · 2 petits-suisses de 60 g · un bol de lait 250 à 300 mL · fromage <b>30 à 40 g</b>."] },
      ],
      [
        { h: "Bien choisir", p: ["Préférer yaourts nature, lait demi-écrémé ou entier.", "Limiter yaourts sucrés et fromages très salés."] },
        { h: "Intolérance ou allergie ?", p: ["<b>Intolérance au lactose</b> : manque de lactase, ballonnements ; ≈ 70 % de la population mondiale ; yaourts et affinés mieux tolérés.", "<b>APLV</b> : réaction immunitaire aux protéines ; 2 à 3 % des nourrissons ; éviction stricte."] },
      ],
    ],
    carte: { centre: "Repères", branches: [
      ["Combien", ["Adulte : <b>2 par jour</b>", "Enfant, ado, âgé : <b>3</b>"]],
      ["Portion", ["Yaourt <b>125 g</b>", "Fromage <b>30 à 40 g</b>", "Lait 250 à 300 mL"]],
      ["Intolérance", ["Lactase manquante", "≈ <b>70 %</b> dans le monde"]],
      ["APLV", ["Allergie aux protéines", "<b>2 à 3 %</b> des nourrissons"]],
    ] },
  },
  {
    onglet: "Cas pratique", titre: "La famille Dupont",
    notes: [
      [
        { h: "Le cas", p: ["Mme Dupont, 35 ans, enfants de 7 et 10 ans. Son fils a mal au ventre après le lait.", "Questions : le fromage est-il trop gras ? Les desserts lactés comptent-ils ?"] },
        { h: "Réponses clés", p: ["Desserts lactés industriels : sucres ajoutés, peu de calcium : <b>ne comptent pas</b> comme laitier.", "Beurre : une matière grasse, pas un laitier."] },
      ],
      [
        { h: "Le fromage", p: ["Calcium, protéines, B12, mais saturés et sel : environ <b>30 g par jour</b>, plutôt peu salé (emmental, mozzarella)."] },
        { h: "Le fils", p: ["Évoque une <b>intolérance au lactose</b>, à confirmer par un médecin. En attendant : yaourts, fromages affinés, lait sans lactose."] },
        { h: "Conseils", p: ["2 à 3 portions par jour, yaourts nature + fruit frais, desserts lactés en plaisir occasionnel."] },
      ],
    ],
    carte: { centre: "Famille Dupont", branches: [
      ["Desserts lactés", ["Sucrés, peu de calcium", "Pas un laitier"]],
      ["Fromage", ["≈ <b>30 g</b> par jour", "Moins salé"]],
      ["Le fils", ["Intolérance au lactose ?", "Avis médical"]],
      ["Conseils", ["<b>2 à 3</b> laitiers par jour", "Yaourt nature"]],
    ] },
  },
]);
