/* Fiches bristol : Contraintes d’une structure (source : cours/contraintes-structure) */
Bristol.cours("contraintes-structure", [
  {
    onglet: "Les stocks", titre: "Les stocks",
    notes: [
      [
        { h: "Pourquoi gérer", p: ["Le stock conditionne la continuité, la qualité sanitaire, la satisfaction et l’équilibre financier."] },
        { h: "Trop ou pas assez", p: ["<b>Surstock</b> : pertes, gaspillage ; trésorerie immobilisée.", "<b>Sous-stock</b> : ruptures, désorganisation ; chiffre d’affaires perdu."] },
      ],
      [
        { h: "Trois types", p: ["<b>Matières premières</b> (fruits, viandes, céréales).", "<b>Produits finis</b> (plats préparés).", "<b>Consommables</b> (emballages, gants)."] },
        { h: "Spécificité du secteur", p: ["Produits périssables, hygiène, traçabilité, température : un stock mal géré mène aux pertes, voire aux sanctions."] },
      ],
    ],
    carte: { centre: "Les stocks", branches: [
      ["Surstock", ["Gaspillage", "Trésorerie bloquée"]],
      ["Sous-stock", ["Ruptures", "Ventes perdues"]],
      ["Types", ["Matières premières", "Produits finis", "Consommables"]],
    ] },
  },
  {
    onglet: "Calculer", titre: "Calculer le stock",
    notes: [
      [
        { h: "Quatre calculs", p: ["<b>Consommation moyenne</b> = quantité utilisée ÷ nombre de jours.", "<b>Stock de sécurité</b> = consommation × délai de sécurité.", "<b>Point de commande</b> = consommation pendant la livraison + stock de sécurité.", "<b>Limite DLC</b> = consommation × jours avant la DLC."] },
      ],
      [
        { h: "Exemple du cours", p: ["Pommes de terre : 180 kg en 30 jours = <b>6 kg/j</b>.", "Sécurité 2 jours = <b>12 kg</b>. Livraison 4 jours : commander à (6 × 4) + 12 = <b>36 kg</b>.", "DLC à 10 jours : pas plus de 60 kg."] },
        { h: "Ajuster", p: ["Fournisseur fiable : stock de sécurité réduit. DLC courte : stock minimal. Saisons et fêtes : anticiper."] },
      ],
    ],
    carte: { centre: "Calculer", branches: [
      ["Consommation", ["Quantité ÷ jours"]],
      ["Sécurité", ["Consommation × délai"]],
      ["Commande", ["Conso pendant la livraison", "+ stock de sécurité"]],
      ["Exemple", ["<b>6 kg/j</b>", "Sécurité <b>12 kg</b>", "Commander à <b>36 kg</b>"]],
    ] },
  },
  {
    onglet: "Stocker", titre: "Stocker",
    notes: [
      [
        { h: "Le zonage", p: ["Une zone par type de conservation : <b>réfrigérée 0 à +4 °C</b>, <b>congélation −18 °C ou moins</b>, espace sec, consommables.", "Jamais d’aliments avec les produits d’entretien."] },
        { h: "Étiqueter les lots", p: ["Nom, date d’entrée, DLC ou DDM, numéro de lot.", "Code couleur : vert (longue conservation), orange, <b>rouge</b> (à consommer vite)."] },
      ],
      [
        { h: "L’étagère", p: ["En haut : articles légers. À hauteur de main : forte rotation. En bas : lourds."] },
        { h: "Conservation et hygiène", p: ["Thermomètres, <b>relevé de température quotidien</b> dans un registre.", "Zones sèches ventilées ; plan de nettoyage ; lutte contre les nuisibles."] },
      ],
    ],
    carte: { centre: "Stocker", branches: [
      ["Zones", ["Froid <b>0 à +4 °C</b>", "Congélation <b>−18 °C</b>", "Sec, consommables"]],
      ["Étiquette", ["Nom, date, lot", "Code couleur"]],
      ["Étagère", ["Lourd en bas", "Rotation à hauteur de main"]],
      ["Suivi", ["Relevé de température"]],
    ] },
  },
  {
    onglet: "Rotation et suivi", titre: "Rotation et suivi",
    notes: [
      [
        { h: "FIFO", p: ["<b>First In, First Out</b> : le premier entré sort le premier. Simple, adapté à la réserve sèche.", "Limite : dates très variables d’un lot à l’autre."] },
        { h: "FEFO", p: ["<b>First Expired, First Out</b> : la première date limite sort la première, même arrivée après.", "Indispensable pour les <b>DLC courtes</b>."] },
      ],
      [
        { h: "Inventaires", p: ["<b>Permanent</b> : chaque mouvement enregistré ; niveaux en temps réel.", "<b>Périodique</b> : comptage physique (semaine, mois) ; révèle pertes et erreurs.", "Contrôles ciblés : frais, articles coûteux, allergènes."] },
        { h: "Outils", p: ["Fiches, tableurs (petites structures), logiciels (grandes), applications mobiles."] },
      ],
    ],
    carte: { centre: "Rotation", branches: [
      ["FIFO", ["Premier entré", "Premier sorti"]],
      ["FEFO", ["Première date limite", "DLC courtes"]],
      ["Inventaire", ["Permanent", "Périodique"]],
      ["Outils", ["Tableur", "Logiciel"]],
    ] },
  },
  {
    onglet: "Les coûts", titre: "Les coûts",
    notes: [
      [
        { h: "Fixes, variables, semi-variables", p: ["<b>Fixes</b> : stables quel que soit le volume (loyer, assurance, salaires permanents, abonnements).", "<b>Variables</b> : suivent l’activité (matières premières, emballages, livraisons, primes).", "<b>Semi-variables</b> : une base + un surplus (électricité, main-d’œuvre en pic, maintenance)."] },
      ],
      [
        { h: "Directs ou indirects", p: ["<b>Directs</b> : rattachés à un produit (le poulet d’un plat) : la marge d’un produit.", "<b>Indirects</b> : partagés (nettoyage, formation) ; répartis pour le coût de revient."] },
        { h: "Exemple : atelier de plats", p: ["Matières premières <b>45 %</b>, salaires 30 %, loyer et électricité 15 %, marketing 10 %.", "Priorité : les matières premières (négociation, gaspillage)."] },
      ],
    ],
    carte: { centre: "Les coûts", branches: [
      ["Fixes", ["Loyer, salaires", "Assurance"]],
      ["Variables", ["Matières premières", "Emballages"]],
      ["Semi-variables", ["Électricité", "Maintenance"]],
      ["Directs, indirects", ["Coût de revient"]],
    ] },
  },
  {
    onglet: "Budget", titre: "Le budget prévisionnel",
    notes: [
      [
        { h: "À quoi il sert", p: ["Anticiper les dépenses, prévoir les recettes, mesurer la rentabilité, servir de référence. En général sur <b>un an</b>."] },
        { h: "Cinq étapes", p: ["1. Données historiques (saisons).", "2. Estimer les dépenses.", "3. Estimer les recettes.", "4. <b>Résultat = recettes − dépenses</b>.", "5. Fonds de sécurité : <b>5 à 10 %</b> des dépenses."] },
      ],
      [
        { h: "Exemple du cours", p: ["Restaurant diététique : recettes 150 000 €, dépenses 137 000 €, résultat <b>+13 000 €</b>.", "Fonds conseillé : 6 850 à 13 700 €."] },
        { h: "Bonnes pratiques", p: ["Être réaliste, tenir compte des saisons, mettre à jour chaque trimestre, impliquer les équipes."] },
      ],
    ],
    carte: { centre: "Budget", branches: [
      ["Rôle", ["Anticiper", "Comparer au réel"]],
      ["Résultat", ["Recettes − dépenses"]],
      ["Sécurité", ["<b>5 à 10 %</b> des dépenses"]],
      ["Exemple", ["<b>+13 000 €</b>"]],
    ] },
  },
  {
    onglet: "Suivi et outils", titre: "Suivi et outils",
    notes: [
      [
        { h: "Suivre les écarts", p: ["Centraliser chaque facture, outil adapté, mise à jour <b>chaque semaine</b>, analyse des écarts.", "Écart = (réel − prévu) ÷ prévu. Ex. 4 600 € pour 4 000 € prévus : <b>+15 %</b>."] },
        { h: "À surveiller", p: ["Matières premières : souvent <b>30 à 50 %</b> des coûts. Main-d’œuvre. Conditionnement et livraison."] },
      ],
      [
        { h: "Les indicateurs", p: ["<b>Marge brute</b> = (CA − coût des ventes) ÷ CA.", "<b>Taux de charges fixes</b> = charges fixes ÷ CA.", "<b>Rotation des stocks</b> = coût des ventes ÷ stock moyen.", "<b>Point mort</b> : le CA qui couvre toutes les charges."] },
        { h: "Outils", p: ["Tableurs (moins de 50 transactions par mois), logiciels de gestion, applications."] },
      ],
    ],
    carte: { centre: "Suivi", branches: [
      ["Écart", ["(Réel − prévu) ÷ prévu", "Ex. <b>+15 %</b>"]],
      ["KPI", ["Marge brute", "Charges fixes", "Rotation des stocks"]],
      ["Point mort", ["CA = charges"]],
      ["Outils", ["Tableur", "Logiciel"]],
    ] },
  },
  {
    onglet: "Optimiser", titre: "Optimiser",
    notes: [
      [
        { h: "Le principe", p: ["Réduire ou mieux répartir <b>sans toucher à la valeur perçue</b> : un plat moins bon peut faire perdre un client."] },
        { h: "Gains cités", p: ["Électricité : frigos A+++, <b>−25 %</b>.", "Pertes : dessert « fin de semaine », −20 %.", "Logistique : une livraison par semaine, −15 %.", "Production : outils regroupés, −10 %."] },
      ],
      [
        { h: "Leviers", p: ["Négocier (volume, délais de paiement, livraison groupée).", "Réduire le gaspillage (FIFO, FEFO, plats anti-gaspi).", "Productivité, services externes, automatisation."] },
        { h: "KPI mensuels", p: ["Coût matière idéalement <b>25 à 35 %</b> du CA ; main-d’œuvre ; marges par produit."] },
      ],
    ],
    carte: { centre: "Optimiser", branches: [
      ["Principe", ["Garder la valeur perçue"]],
      ["Leviers", ["Négocier", "Moins de gaspillage", "Automatiser"]],
      ["Gains", ["Électricité <b>−25 %</b>", "Pertes −20 %"]],
      ["Coût matière", ["<b>25 à 35 %</b> du CA"]],
    ] },
  },
  {
    onglet: "Trésorerie", titre: "La trésorerie",
    notes: [
      [
        { h: "Bénéfice n’est pas trésorerie", p: ["Un traiteur rentable (20 000 € de bénéfice) peut être à sec en novembre si ses clients paient en janvier."] },
        { h: "Le fonds de réserve", p: ["<b>2 à 3 mois de charges fixes</b>.", "Ex. 6 500 € par mois : 13 000 à 19 500 €."] },
      ],
      [
        { h: "Piloter", p: ["Un <b>tableau de trésorerie</b> : entrées, sorties, périodes à risque.", "Lisser les saisons : épargner en période forte.", "Réagir vite : reporter un achat, relancer un client, demander un acompte."] },
        { h: "Anticiper", p: ["Connaître à l’avance les financements d’urgence (découvert, crédit court terme, aides)."] },
      ],
    ],
    carte: { centre: "Trésorerie", branches: [
      ["Piège", ["Bénéfice ≠ trésorerie"]],
      ["Réserve", ["<b>2 à 3 mois</b>", "de charges fixes"]],
      ["Piloter", ["Tableau de trésorerie", "Lisser les saisons"]],
      ["Réagir", ["Reporter, relancer", "Acompte"]],
    ] },
  },
]);
