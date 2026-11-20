/* Fiches bristol : La démarche HACCP (source : cours/haccp) */
Bristol.cours("haccp", [
  {
    onglet: "Fondements", titre: "La démarche HACCP",
    notes: [
      [
        { h: "Définition", p: ["<b>Hazard Analysis Critical Control Point</b> : analyse des dangers et maîtrise des points critiques."] },
        { h: "Origine et principe", p: ["Années <b>1960</b>, Pillsbury pour la <b>NASA</b>.", "<b>Prévenir plutôt que guérir</b> : identifier les dangers, évaluer gravité et probabilité, placer des points de contrôle.", "Une <b>méthode, pas une norme</b> : chaque établissement l’adapte (référentiel interne). Les <b>GBPH</b> la traduisent par métier."] },
      ],
      [
        { h: "Qui est concerné", p: ["Tout professionnel qui prépare, stocke ou distribue : métiers de bouche, restauration, crèches, grandes surfaces."] },
        { h: "Le Paquet hygiène", p: ["Depuis le <b>1er janvier 2006</b>, toute la filière.", "<b>178/2002</b> : grands principes, EFSA, traçabilité.", "<b>852/2004</b> : hygiène de toutes les denrées.", "<b>853/2004</b> : denrées animales."] },
      ],
    ],
    carte: { centre: "HACCP", branches: [
      ["Origine", ["Années <b>1960</b>", "NASA"]],
      ["Principe", ["Prévenir", "Méthode, pas norme"]],
      ["Paquet hygiène", ["Depuis <b>2006</b>", "178/2002", "852 et 853/2004"]],
      ["Outils", ["GBPH", "Référentiel interne"]],
    ] },
  },
  {
    onglet: "Les 7 principes", titre: "Les 7 principes",
    notes: [
      [
        { h: "Les principes", p: ["<b>1. Analyser les dangers</b> et les mesures de maîtrise.", "<b>2. Déterminer les points critiques (CCP)</b>.", "<b>3. Fixer les limites critiques</b> (seuils).", "<b>4. Surveiller</b> les CCP.", "<b>5. Prévoir les actions correctives</b>.", "<b>6. Vérifier</b> l’efficacité (audits).", "<b>7. Documenter</b> : procédures, relevés."] },
      ],
      [
        { h: "Les 4 familles de dangers", p: ["<b>Microbiologiques</b> : Salmonella, Listeria.", "<b>Physiques</b> : verre, métal, cailloux.", "<b>Chimiques</b> : produits de nettoyage, pesticides, additifs en excès, toxines.", "<b>Allergènes</b> : réactions graves chez les sensibles."] },
      ],
    ],
    carte: { centre: "7 principes", branches: [
      ["Analyser", ["1. Dangers", "2. CCP"]],
      ["Maîtriser", ["3. Limites", "4. Surveiller", "5. Corriger"]],
      ["Prouver", ["6. Vérifier", "7. Documenter"]],
      ["Dangers", ["Microbiologiques", "Physiques, chimiques", "Allergènes"]],
    ] },
  },
  {
    onglet: "Les 12 étapes", titre: "Les 12 étapes",
    notes: [
      [
        { h: "5 étapes préparatoires", p: ["1. Former une <b>équipe HACCP</b> pluridisciplinaire.", "2. <b>Décrire le produit</b>.", "3. Définir l’<b>utilisation prévue</b>.", "4. Élaborer le <b>diagramme des opérations</b>.", "5. <b>Vérifier le diagramme sur site</b>."] },
        { h: "Pourquoi", p: ["Une vision complète du produit et du processus avant d’analyser les risques."] },
      ],
      [
        { h: "Puis les 7 principes", p: ["6. Analyser les dangers. 7. Déterminer les CCP. 8. Fixer les limites critiques. 9. Surveiller. 10. Actions correctives. 11. Vérifier. 12. Documenter."] },
      ],
    ],
    carte: { centre: "12 étapes", branches: [
      ["Préparer", ["1. Équipe", "2. Produit", "3. Utilisation"]],
      ["Diagramme", ["4. Élaborer", "5. Vérifier sur site"]],
      ["Principes", ["6 à 12 : les 7 principes"]],
    ] },
  },
  {
    onglet: "Au quotidien", titre: "Au quotidien",
    notes: [
      [
        { h: "La chaîne du froid", p: ["Des températures adaptées à chaque étape : réception, stockage, transformation, livraison.", "Rupture : Salmonella, <b>Listeria</b> se multiplient, moisissures, mycotoxines."] },
        { h: "À la réception", p: ["Thermomètre laser. Produit trop chaud, <b>camion non réfrigéré</b>, emballage détérioré : <b>refuser</b>.", "Stockage : préparations maison <b>≤ 3 °C</b>, steak haché et poisson frais <b>≤ 2 °C</b>."] },
      ],
      [
        { h: "La traçabilité (178/2002)", p: ["<b>Amont</b> : contrôle à la réception.", "<b>Interne</b> : nom, lot, DLC, estampille, même déconditionné.", "<b>Aval</b> : étiqueter tout produit entamé avec sa date d’ouverture."] },
        { h: "Plan de nettoyage", p: ["Surfaces, fréquence, méthode, produits. Chaque action tracée dans un <b>registre</b>."] },
      ],
    ],
    carte: { centre: "Au quotidien", branches: [
      ["Froid", ["Préparation <b>≤ 3 °C</b>", "Steak haché <b>≤ 2 °C</b>"]],
      ["Réception", ["Thermomètre laser", "Refuser si non conforme"]],
      ["Traçabilité", ["Amont, interne, aval"]],
      ["Nettoyage", ["Plan", "Registre"]],
    ] },
  },
]);
