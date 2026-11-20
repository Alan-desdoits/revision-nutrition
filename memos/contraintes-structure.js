/* Mémo de révision imprimé : Contraintes d’une structure (source : cours/contraintes-structure) */
Fiches.memo([
  {
    onglet: "Les stocks",
    blocs: [
      { t: "Pourquoi gérer", k: "ink", p: ["Un stock conditionne la continuité de l’activité, la qualité sanitaire, la satisfaction des clients et l’équilibre financier. La gestion des coûts montre où part l’argent : essentiel quand les marges sont faibles et les prix variables."] },
      { t: "Trop ou pas assez", k: "bad-f", kv: [["Surstock", "pertes, gaspillage ; coût caché : trésorerie immobilisée"], ["Sous-stock", "ruptures, désorganisation ; coût caché : chiffre d’affaires perdu"]] },
      { t: "Trois types de stocks", k: "ink", kv: [["Matières premières", "fruits, légumes, viandes, laitiers, céréales"], ["Produits finis", "plats préparés, jus, compléments prêts à la vente"], ["Consommables", "emballages, étiquettes, gants, contenants"]],
        retenir: "Produits périssables, hygiène, traçabilité, température : un stock mal géré mène aux pertes, aux ruptures, voire aux sanctions." },
    ],
  },
  {
    onglet: "Calculer",
    blocs: [
      { t: "Quatre calculs", k: "ink", table: [["Notion", "Formule"], ["Consommation moyenne", "Quantité utilisée ÷ nombre de jours (période de 1 à 3 mois)"], ["Stock de sécurité", "Consommation × délai de sécurité"], ["Point de commande", "Consommation pendant la livraison + stock de sécurité"], ["Limite de la DLC", "Consommation × jours avant la DLC"]] },
      { t: "Exemple : pommes de terre d’un restaurant diététique", k: "ink", kv: [["Consommation", "180 kg ÷ 30 jours = 6 kg/j"], ["Sécurité", "6 × 2 jours = 12 kg"], ["Commander à", "(6 × 4 jours de livraison) + 12 = 36 kg"], ["Limite DLC", "6 × 10 jours = 60 kg maximum"]] },
      { t: "Ajuster", k: "ink", list: ["Des données réelles, une moyenne actualisée.", "Fournisseur fiable et réactif : stock de sécurité réduit (prudence pour les produits critiques).", "DLC courte : stock minimal, réapprovisionnements fréquents ; DLC longue : stock plus important.", "Saisons (fraises, asperges), fêtes, événements : anticiper ; périodes creuses : réduire."] },
    ],
  },
  {
    onglet: "Stocker",
    blocs: [
      { t: "Le zonage", k: "ink", kv: [["Zone réfrigérée", "0 à +4 °C : produits frais"], ["Zone de congélation", "−18 °C ou moins"], ["Espace sec", "ventilé, sans trop d’humidité"], ["Consommables", "à part ; jamais d’aliments avec les produits d’entretien"]] },
      { t: "Étiqueter les lots", k: "ink", p: ["Au minimum : nom, date d’entrée, DLC ou DDM, numéro de lot. Code couleur : vert (longue conservation), orange (dates intermédiaires), rouge (à consommer vite) : aide à appliquer FIFO ou FEFO."] },
      { t: "Accessibilité, conservation, hygiène", k: "ink", list: ["Étagère : articles légers en haut, forte rotation à hauteur de main, lourds en bas ; allées dégagées.", "Chambres froides avec thermomètres ; produits sensibles à la lumière à l’ombre.", "<b>Relevé de température quotidien</b>, voire plusieurs fois par jour, dans un registre.", "Plan de nettoyage (fréquences, responsables) ; lutte contre les nuisibles.", "Une organisation qui évolue avec l’activité et les retours d’expérience."] },
    ],
  },
  {
    onglet: "Rotation et suivi",
    blocs: [
      { t: "FIFO ou FEFO ?", k: "ink", table: [["Méthode", "Principe", "Avantages", "Limite"], ["FIFO", "First In, First Out : le premier entré sort le premier", "Qualité, moins de gaspillage, simple", "Dates très variables d’un lot à l’autre"], ["FEFO", "First Expired, First Out : la première date limite sort la première", "Indispensable pour les DLC courtes", "Étiquetage et contrôle rigoureux"]] },
      { t: "Inventaires", k: "ink", kv: [["Permanent", "chaque mouvement enregistré : niveaux visibles, anomalies vite détectées ; discipline stricte"], ["Périodique", "comptage physique (semaine, mois, trimestre) : pertes, erreurs, casses ; plus long"], ["Contrôles ciblés", "frais à forte rotation, articles coûteux, allergènes"]] },
      { t: "Outils", k: "ink", p: ["Petites structures : fiches de stock, tableurs. Grandes : logiciels (temps réel, alertes). Activités mobiles : applications. Un outil n’est efficace qu’avec des procédures claires et des équipes formées."] },
    ],
  },
  {
    onglet: "Les coûts",
    blocs: [
      { t: "Fixes, variables, semi-variables", k: "ink", table: [["Type", "Définition", "Exemples"], ["Fixes", "Stables quel que soit le volume", "Loyer, assurance, salaires permanents, abonnements"], ["Variables", "Suivent l’activité et les prix", "Matières premières, emballages, livraisons, primes"], ["Semi-variables", "Une base + un surplus", "Électricité, main-d’œuvre en pic, maintenance"]] },
      { t: "Directs ou indirects", k: "ink", kv: [["Directs", "rattachés à un produit (le poulet d’un plat) : la marge d’un produit"], ["Indirects", "partagés (nettoyage, formation, éclairage) : répartis pour le coût de revient"]],
        p: ["Réduire un coût fixe est difficile ; optimiser les variables agit vite sur la marge. Séparer directs et indirects donne le coût de revient unitaire, donc le bon prix."] },
      { t: "Exemple : atelier de plats diététiques", k: "ink", p: ["Matières premières 45 % (variables), salaires 30 % (fixes), loyer et électricité 15 %, marketing et administratif 10 %. Priorité : les matières premières (négociation, gaspillage)."] },
    ],
  },
  {
    onglet: "Budget",
    blocs: [
      { t: "Le budget prévisionnel", k: "ink", p: ["Anticiper les besoins financiers, en général sur un an : anticiper les dépenses, prévoir les recettes, mesurer la rentabilité, servir de référence."] },
      { t: "Cinq étapes", k: "ink", list: ["1. <b>Données historiques</b> : ventes, saisons (un traiteur vend 30 % de plus en janvier, 15 % de moins en août).", "2. <b>Dépenses</b> : fixes, variables, exceptionnelles.", "3. <b>Recettes</b> : tendances, actions commerciales, marché.", "4. <b>Résultat</b> = recettes − dépenses ; négatif : réduire, augmenter les prix, développer.", "5. <b>Fonds de sécurité</b> : 5 à 10 % des dépenses."] },
      { t: "Exemple et bonnes pratiques", k: "ink", kv: [["Restaurant diététique", "recettes 150 000 €, dépenses 137 000 €, résultat + 13 000 € ; fonds conseillé 6 850 à 13 700 €"], ["Bonnes pratiques", "être réaliste, intégrer les saisons, mettre à jour chaque trimestre (ou mois), impliquer les équipes"]] },
    ],
  },
  {
    onglet: "Suivi et outils",
    blocs: [
      { t: "Suivre les écarts", k: "ink", p: ["Détecter les dérives, ajuster, mieux décider. Centraliser chaque facture, outil adapté, mise à jour au moins chaque semaine, analyse des écarts."],
        kv: [["Exemple", "matières premières en mars : 4 600 € pour 4 000 € prévus = + 600 € (+ 15 %) ; cause possible : fruits hors saison ou gaspillage"], ["À surveiller", "matières premières (30 à 50 % des coûts), main-d’œuvre, conditionnement et livraison"]] },
      { t: "Les indicateurs (KPI)", k: "ink", table: [["Indicateur", "Formule"], ["Marge brute", "(CA − coût des ventes) ÷ CA"], ["Taux de charges fixes", "Charges fixes ÷ CA"], ["Rotation des stocks", "Coût des ventes ÷ stock moyen"], ["Point mort", "CA nécessaire pour couvrir toutes les charges"]] },
      { t: "Outils", k: "ink", kv: [["Tableurs", "petites structures, moins de 50 transactions par mois ; flexibles, saisie manuelle"], ["Logiciels de gestion", "gros volumes ; rapprochement bancaire, tableaux de bord ; abonnement"], ["Applications mobiles", "suivi en mobilité"]] },
    ],
  },
  {
    onglet: "Optimiser",
    blocs: [
      { t: "Le principe", k: "ink", p: ["Optimiser, ce n’est pas économiser à tout prix : réduire ou mieux répartir sans toucher à la valeur perçue. Un plat moins bon peut faire perdre un client pour toujours."] },
      { t: "Gains cités par le cours", k: "good-f", kv: [["Électricité", "− 25 % : frigos A+++"], ["Pertes", "− 20 % : dessert « fin de semaine » avec les fruits proches de la DLC"], ["Logistique", "− 15 % : une seule livraison de légumes par semaine"], ["Production", "− 10 % : outils regroupés par zone"]] },
      { t: "Les leviers", k: "ink", list: ["Négocier : prix contre volume, délais de paiement, livraison groupée.", "Réduire le gaspillage : FIFO, FEFO, plats du jour, promotions anti-gaspi.", "Productivité : procédures, postes, formation.", "Services externes, automatisation.", "KPI mensuels : coût matière idéalement <b>25 à 35 %</b> du CA, main-d’œuvre, marges par produit."] },
    ],
  },
  {
    onglet: "Trésorerie",
    blocs: [
      { t: "Bénéfice n’est pas trésorerie", k: "bad-f", p: ["Un traiteur rentable (bénéfice annuel 20 000 €) peut être à sec en novembre si de gros clients ne paient qu’en janvier."] },
      { t: "Le fonds de réserve", k: "ink", p: ["<b>2 à 3 mois de charges fixes</b> : ex. 6 500 € par mois, réserve de 13 000 à 19 500 €, pour payer loyer, salaires, factures en cas de baisse ou d’imprévu."] },
      { t: "Piloter au jour le jour", k: "ink", list: ["Tableau de trésorerie : entrées, sorties, périodes à risque ; ex. acompte demandé avant Pâques.", "Lisser les saisons : épargner en période forte, réduire en creux, diversifier.", "Réagir vite : reporter, renégocier, action commerciale ; remplacer un ingrédient devenu cher.", "Connaître à l’avance les financements d’urgence : découvert, crédit court terme, aides."] },
    ],
  },
]);
