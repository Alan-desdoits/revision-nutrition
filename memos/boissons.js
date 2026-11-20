/* Mémo de révision imprimé : Les boissons (source : cours/boissons) */
Fiches.memo([
  {
    onglet: "Bases",
    blocs: [
      { t: "Quatre groupes (Code de la santé publique, art. L 3321-1)", k: "eau", table: [["Groupe", "Boissons"], ["1. Sans alcool", "Eaux, jus non fermentés (moins de 1,2 degré), limonades, sirops, infusions, lait, café, thé, chocolat"], ["2. Fermentées non distillées", "Vin, bière, cidre, poiré, hydromel, vins doux, crèmes de cassis ; jusqu’à 18 degrés"], ["3. Rhums et alcools de fruits", "Rhums, tafias, alcools de distillation sans essence ; liqueurs édulcorées"], ["4. Autres alcools", "Toutes les autres boissons alcooliques"]] },
      { t: "L’eau, théâtre du vivant", k: "eau", list: ["Toutes les réactions du corps se passent dans l’eau.", "Température (transpiration), transport (plasma), protection (articulations, liquide céphalo-rachidien), digestion et élimination (reins).", "Un peu déshydraté : maux de tête, fatigue, concentration, bouche sèche, urines foncées."] },
      { t: "Pas de chiffre unique", k: "eau", kv: [["La soif", "le signal le plus direct, mais un peu en retard"], ["Les urines", "jaune pâle : bon équilibre ; foncées : manque d’eau"], ["Le contexte", "chaleur, effort, repas salés, alcool"], ["La soif selon l’âge", "adulte : fiable mais en retard ; personne âgée : atténuée ; enfant : rapide mais pas toujours exprimée"]],
        p: ["Mécanisme : perte d’eau, osmorécepteurs (sodium) et récepteurs du volume, hypothalamus, soif + <b>ADH</b> (les reins retiennent l’eau)."] },
    ],
  },
  {
    onglet: "Hydratation",
    blocs: [
      { t: "L’eau du corps", k: "eau", p: ["<b>50 à 60 %</b> de la masse corporelle (moins chez la femme ou avec plus de masse grasse, plus chez les jeunes ou musclés). Ex. 70 kg × 60 % ≈ 42 L : intracellulaire ⅔ (28 L), extracellulaire ⅓ dont interstitiel ¾ (10,5 L) et plasma ¼ (3,5 L)."] },
      { t: "Le sodium mène la danse", k: "eau", p: ["L’eau suit la pression osmotique ; le sodium est le principal sel extracellulaire. Après un repas salé, l’eau sort des cellules : soif. Rétention, œdèmes, déshydratation intracellulaire s’expliquent ainsi."] },
      { t: "Pertes et besoins", k: "eau", kv: [["Urines", "1 000 à 1 500 mL/j"], ["Respiration et peau", "500 à 1 000 mL/j (pertes insensibles)"], ["Selles", "200 mL/j"], ["Transpiration", "plusieurs litres à l’effort, plus de 5 à 10 L chez certains sportifs"], ["Boissons", "1,5 à 2,5 L/j, puis ajuster"], ["Par le poids", "30 à 35 mL/kg/j (60 kg : 1,8 à 2,1 L)"]] },
      { t: "Déséquilibres", k: "bad-f", list: ["Trop peu : déshydratation, coup de chaleur à l’effort.", "Trop d’eau sans sels : <b>hyponatrémie</b> (nausées, confusion) ; alterner eau et boisson isotonique.", "Soif intense + urines abondantes : peut révéler un diabète, consulter."] },
    ],
  },
  {
    onglet: "Les eaux",
    blocs: [
      { t: "Robinet, gazeuse, carafe", k: "eau", p: ["Eau du robinet strictement contrôlée, économique, écologique ; calcaire sans danger. Gazeuse : CO₂, satiété ou ballonnements. Carafe filtrante : entretien rigoureux."] },
      { t: "Source ou minérale ?", k: "eau", table: [["", "Eau de source", "Eau minérale naturelle"], ["Composition", "Pas forcément constante", "Constante, reconnue"], ["Santé", "Pas d’allégation", "Effet reconnu (ANSES), contrôle strict"], ["Exemples", "Cristaline", "Évian, Badoit, Perrier"]] },
      { t: "Lire l’étiquette (mg/L)", k: "min", table: [["Mention", "Critère"], ["Très faiblement minéralisée", "moins de 50 (Mont Roucous)"], ["Oligo-minérale", "moins de 500 (Évian)"], ["Moyennement minéralisée", "500 à 1 500"], ["Riche en sels minéraux", "plus de 1 500 (Hépar)"], ["Bicarbonatée", "bicarbonates plus de 600"], ["Calcique", "calcium plus de 150"], ["Magnésienne", "magnésium plus de 50"], ["Pauvre en sodium", "sodium moins de 20"]] },
      { t: "Potable et sûre", k: "ink", p: ["Pas d’E. coli ni d’entérocoques ; métaux, nitrates, pesticides sous les seuils ; pH, turbidité ; goût. Pollutions : nitrates, pesticides, métaux, microplastiques, PFAS, biofilm. Goût de chlore : carafe ouverte au réfrigérateur."] },
    ],
  },
  {
    onglet: "Boissons sucrées",
    blocs: [
      { t: "Les BRSA", k: "sug", p: ["Boissons rafraîchissantes sans alcool : sodas, eaux aromatisées, jus, thés glacés. Versions sucrées : <b>8 à 10 g</b> de sucres/100 mL ; une canette de 330 mL ≈ <b>26 à 33 g</b> (5 à 7 morceaux), sans satiété. Limite OMS 50 g, idéal 25 g."],
        list: ["Acides (colas, agrumes) : érosion de l’émail ; une paille limite les dégâts.", "Versions « zéro » : édulcorants (aspartame E951, stévia E960)."] },
      { t: "Jus, nectars, smoothies", k: "fl", kv: [["Jus 100 % pur fruit", "vitamines mais très peu de fibres ; se boit vite"], ["Nectar", "purée, eau, souvent sucre ; moins de fruit"], ["Smoothie", "plus pertinent avec un légume, sans sucre"], ["Fruit entier", "l’avantage pour la satiété et les fibres"]],
        p: ["Un verre de 150 mL au repas puis un fruit plutôt qu’un grand verre de 250 mL."] },
      { t: "Sur le terrain", k: "ink", p: ["Maison : carafe visible, eaux aromatisées maison. Collectivité : eau gratuite toujours disponible, petits contenants. Transition par l’eau pétillante citronnée. Une place occasionnelle, priorité à l’eau."] },
    ],
  },
  {
    onglet: "Café, thé et autres",
    blocs: [
      { t: "Le café", k: "ink", kv: [["Arabica", "fin, parfumé, haute altitude, peu de caféine"], ["Robusta", "plus âcre, basse altitude, 2 fois plus de caféine"], ["Décaféiné", "caféine extraite, en général sans solvant"]],
        p: ["Boisson acalorique, sans intérêt nutritionnel, stimulante ; participe à l’hydratation."] },
      { t: "Le thé", k: "ink", p: ["Une seule plante : thés vert, noir, jaune, blanc, oolong selon flétrissage, fixation, roulage, oxydation, fermentation, séchage. Stimulant sans énerver."],
        retenir: "Bu pendant un repas, le thé réduit de <b>60 à 70 %</b> l’absorption du fer : le boire entre les repas, infusion de 4 minutes maximum." },
      { t: "Tisanes, cacao, fermentées", k: "ink", list: ["Tisanes : infusion (eau chaude, ≈ 10 min), macération (eau froide), décoction (ébullition 5 à 20 min).", "Cacao : boissons du commerce souvent sucrées ; préférer le cacao non sucré.", "Fermentées : alcoolisées (bière, vin, cidre) ou non (kéfir, kombucha : sucres résiduels, traces d’alcool).", "Caféine : la sensibilité décide de l’heure de la dernière tasse ; infusions l’après-midi."] },
    ],
  },
  {
    onglet: "Énergie et effort",
    blocs: [
      { t: "Énergisantes ou pour le sport ?", k: "bad-f", table: [["", "Énergisantes", "Pour le sport"], ["But", "Stimuler", "Compenser l’effort"], ["Contenu", "Caféine, sucre, taurine, ginseng, vitamines B", "Eau, glucides rapides, électrolytes, sans caféine"], ["À retenir", "Aucun intérêt nutritionnel ; pas pour enfants, ados, enceintes ; jamais avec l’alcool", "Utile pour un effort long, la chaleur, une forte transpiration"]] },
      { t: "Eau ou boisson de l’effort ?", k: "eau", p: ["Séance courte : l’eau suffit. Effort long, chaleur, forte transpiration : boisson de l’effort. Maison : eau, jus de fruit dilué, une pincée de sel, testée à l’entraînement."] },
      { t: "Taurine et électrolytes", k: "min", kv: [["Taurine", "acide aminé soufré ; volume cellulaire, système nerveux ; sans effet excitant (c’est la caféine et le sucre)"], ["Électrolytes", "minéraux en ions : sodium, potassium, calcium, magnésium, chlorure ; la sueur fait perdre surtout du sodium"]] },
    ],
  },
  {
    onglet: "Alcool",
    blocs: [
      { t: "Les boissons alcoolisées", k: "bad-f", p: ["Titre alcoométrique supérieur à <b>1,2 % vol</b>. Fermentées (vin, bière, cidre) ; distillées (rhum, cognac, whisky, vodka, gin : 40 à 60 % vol)."],
        kv: [["Vin", "vendanges, foulage, fermentation alcoolique, pressurage, malolactique, vieillissement ; sec moins de 2 g/L de sucre ; 8 à 15 % vol ; vin à 10° : 55 kcal/100 mL"], ["Bière", "malt, houblon, eau, levure ; 3 % de glucides, 3 à 8 % vol"], ["Cidre", "2 à 8 % vol ; doux 1,5 % d’alcool, brut 2,5 à 5 %"]] },
      { t: "Ce que fait l’alcool", k: "bad-f", list: ["<b>7 kcal/g</b>, calories vides ; oxydé par l’ADH et l’ALDH en acétaldéhyde, toxique pour le foie ; triglycérides ; B1, B9, B12 mal absorbées.", "Ivresse, coma éthylique ; cirrhose, stéatose ; cancers (bouche, œsophage, foie, sein) ; dépendance, dépression."] },
      { t: "Repères de Santé publique France", k: "ink", kv: [["Verre standard", "10 g d’alcool pur : 10 cL de vin à 12°, 25 cL de bière à 5°, 2,5 cL de whisky"], ["Maximum", "2 verres par jour, pas tous les jours"], ["Interdit", "mineurs, femmes enceintes (logo), conduite, traitements incompatibles"]],
        retenir: "Toujours en mangeant, lentement, en alternant avec de l’eau ; limiter les cocktails sucrés ; proposer des alternatives sans alcool." },
    ],
  },
]);
