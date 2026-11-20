/* Mémo de révision imprimé : Conserver les aliments (source : cours/conservation) */
Fiches.memo([
  {
    onglet: "Altération et leviers",
    blocs: [
      { t: "Conserver", k: "ink", p: ["Pas seulement prolonger la durée de vie : préserver les nutriments, le goût et la sécurité. Chaque technique ralentit ou stoppe les enzymes, détruit les pathogènes, limite l’oxydation, parfois améliore la digestibilité."] },
      { t: "Pourquoi un aliment se dégrade", k: "bad-f", kv: [["Micro-organismes", "bactéries, levures, moisissures : gaz, acides, toxines ; selon température, oxygène, pH, eau disponible ; parfois contrôlés (fermentation)"], ["Enzymes de l’aliment", "lipases, amylases, protéases ; brunissement de la pomme (polyphénoloxydase), sans risque sanitaire"], ["Réactions chimiques", "rancissement ; Maillard (mal maîtrisée : moins de lysine, acrylamide) ; vitamines C, B1, B9 détruites"], ["Altérations physiques", "chocs, blessures : portes d’entrée des microbes"]] },
      { t: "Quatre enjeux et cinq leviers", k: "ink", p: ["Enjeux : sanitaire, nutritionnel, organoleptique, économique et écologique."],
        table: [["Levier", "Procédés"], ["Température", "Réfrigération, congélation, surgélation ; pasteurisation, stérilisation, UHT"], ["Activité de l’eau", "Séchage, lyophilisation, sel, sucre"], ["Oxygène", "Sous vide, atmosphère modifiée"], ["pH", "Vinaigre, fermentation"], ["Intégrité physique", "Emballage, manipulation"]] },
    ],
  },
  {
    onglet: "Le froid",
    blocs: [
      { t: "Le principe", k: "eau", p: ["Le froid ralentit enzymes et microbes, il <b>ne les détruit pas</b> : dès que l’aliment se réchauffe, les germes repartent."] },
      { t: "Réfrigération (froid positif)", k: "eau", p: ["Entre <b>+1 et +5 °C</b> selon la réglementation (selon ce cours) : les mésophiles et les enzymes ralentissent fortement, mais les psychrotrophes comme <b>Listeria monocytogenes</b> se développent encore : d’où la DLC. Aliments de 1re gamme (lait pasteurisé, yaourts, viandes, poissons). Pertes de vitamine C avec la durée."] },
      { t: "Congélation et surgélation (froid négatif)", k: "eau", list: ["Jusqu’à <b>−18 °C ou moins</b> : croissance et enzymes arrêtées, pas détruites (bactéries à −10 °C, moisissures à −18 °C). Aliments de 3e gamme.", "DDM souvent 9 à 24 mois (viandes entières 15 à 18 mois, fruits, légumes, certains poissons 24 mois).", "<b>Congélation lente</b> : gros cristaux qui percent les cellules ; à la décongélation, le contenu nutritif s’échappe.", "<b>Surgélation rapide</b> : petits cristaux, cellules préservées.", "Une surgélation de 15 jours élimine certains parasites (trichine, ténia).", "Végétaux : perte de turgescence, couleurs ternies ; viandes plus tendres mais exsudat ; brûlures par le froid."] },
      { t: "Bonnes pratiques", k: "good-f", list: ["Réfrigérateur à <b>+4 °C</b>, congélateur à <b>−18 °C</b> ; froid ventilé.", "Zone la plus froide (0 à 4 °C) : charcuterie, poisson, viande ; nettoyage mensuel ; dégivrage annuel.", "Ne jamais rompre la chaîne du froid ; DLC pour les réfrigérés, DDM pour la plupart des surgelés.", "Décongeler au réfrigérateur (0 à 4 °C) ou cuire directement ; au micro-ondes, cuire tout de suite.", "Textes : arrêtés du 21 décembre 2009 et du 8 octobre 2013."] },
    ],
  },
  {
    onglet: "La chaleur",
    blocs: [
      { t: "Pasteurisation ou stérilisation", k: "pro", kv: [["Pasteurisation", "détruit la majorité des bactéries végétatives, pas les spores : le produit reste au froid, DLC"], ["Stérilisation, UHT", "détruit aussi les spores : stable à température ambiante tant que fermé"]] },
      { t: "Trois pasteurisations", k: "pro", table: [["Mode", "Couple", "Pour"], ["Basse", "63 à 65 °C, 30 min, cuve à double paroi", "Matrices fragiles : ovoproduits, bases de glaces"], ["Haute", "75 à 85 °C, quelques minutes", "Lait, jus de fruits, potages"], ["Flash", "90 à 95 °C, 5 s", ""]],
        p: ["En général sous 100 °C puis refroidissement rapide (jusqu’à 4 °C). Exception : jus de fruits pasteurisés, acides, à température ambiante avec une DDM."] },
      { t: "Comparer les traitements", k: "pro", table: [["Traitement", "Germes", "Conservation", "Nutrition"], ["Pasteurisation", "Végétatives réduites, pas les spores", "Au froid, DLC", "Pertes modérées (C, B1)"], ["Stérilisation", "Micro-organismes et spores détruits, plus de 100 °C", "Ambiante, mois à années, DDM", "Pertes importantes (C, B9) ; texture, couleur modifiées"]],
        retenir: "La stérilisation n’inactive que les toxines thermolabiles. Après ouverture, même stérilisé, consommer vite." },
    ],
  },
  {
    onglet: "L’eau et l’air",
    blocs: [
      { t: "L’activité de l’eau (Aw)", k: "eau", p: ["De 0 (aucune eau disponible) à 1 (eau pure) : l’eau disponible pour les microbes, pas la quantité totale. On la baisse en retirant de l’eau ou en la rendant moins disponible (sel, sucre). Le cours ne donne pas de seuils chiffrés."] },
      { t: "Déshydratation", k: "eau", kv: [["Séchage à l’air", "fruits, légumes, herbes, viandes et poissons ; trop chaud : vitamines perdues, brunissement"], ["Séchage sous vide", "l’eau s’évapore à plus basse température : couleur, arômes préservés"], ["Lyophilisation", "glace → vapeur (sublimation) sous vide : très sec, garde au mieux couleur, goût, vitamines"]] },
      { t: "Sous vide et atmosphère modifiée", k: "ink", kv: [["Sous vide", "tout l’air retiré : moins d’oxydation, flore aérobie freinée ; ne stérilise pas (C. botulinum, Listeria) ; 0 à 4 °C, DLC"], ["Atmosphère modifiée", "azote (inerte) et/ou CO₂ (bactériostatique) ; végétaux de 4e gamme, DLC courte, 0 à 4 à 6 °C"]] },
      { t: "Procédés avancés", k: "ink", kv: [["Microfiltration", "membranes qui retiennent bactéries et spores (certains laits)"], ["Haute pression", "4 000 à 6 000 bars, sans chauffer (jus, guacamole)"], ["Ionisation", "rayons gamma ou électrons ; arrêté du 20 août 2002 ; logo obligatoire"]] },
    ],
  },
  {
    onglet: "Fermentations et conservateurs",
    blocs: [
      { t: "Les fermentations", k: "good-f", p: ["Des micro-organismes consomment les sucres : alcool, acide lactique, acide acétique, CO₂ ; le pH baisse, les germes indésirables sont freinés."],
        kv: [["Alcoolique (levures)", "vin, bière, pain, cidre"], ["Lactique (Lactobacillus, Streptococcus)", "yaourts, fromages, choucroute, kéfir"], ["Acétique (Acetobacter)", "vinaigre, kombucha"]] },
      { t: "Les conservateurs", k: "ink", p: ["Liste positive européenne : règlement (CE) n° <b>1333/2008</b>, catégories et doses strictes."],
        table: [["Famille", "Exemples"], ["Antimicrobiens", "Acide sorbique E200 ; sorbate de potassium (« E20 » dans le cours, sans doute E202) ; benzoate de sodium E211 ; sulfites E220 à E228 (allergène) ; nitrite de sodium E250 (charcuteries)"], ["Antioxydants", "Acide ascorbique E300 ; tocophérols E306 ; BHA E320 ; BHT E321"], ["Traditionnels", "Sel et sucre (baisse de l’Aw), vinaigre (baisse du pH), alcool"]],
        retenir: "On les combine souvent à d’autres barrières : froid, emballage." },
      { t: "Quel levier ?", k: "ink", p: ["Réfrigération, pasteurisation : température · lyophilisation, confiture : Aw · sous vide, atmosphère modifiée : oxygène · vinaigre, fermentation lactique : pH."] },
    ],
  },
]);
