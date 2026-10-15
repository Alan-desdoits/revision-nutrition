/* ==========================================================================
   Liste des cours affichés sur la page d'accueil.
   Ajouter un cours = ajouter une entrée ici (voir CLAUDE.md, « Passe d'intégration »).
   statut : "disponible" (page en ligne) ou "en-attente" (document reçu, pas encore intégré)
   ========================================================================== */
window.COURS = [
  {
    slug: "macronutriments",
    titre: "Les macronutriments",
    resume: "Glucides, protéines, lipides et eau : structure, digestion, besoins, sources, excès et carences.",
    familles: ["glu", "pro", "lip", "eau"],
    fiches: ["Bases", "Explorer", "Digestion", "Besoins", "Sources", "Excès et carences", "Cas pratique"],
    statut: "disponible",
    page: "cours/macronutriments.html"
  },
  {
    slug: "micronutriments",
    titre: "Les micronutriments",
    resume: "Vitamines et minéraux : rôles, absorption, besoins, sources et évaluation des carences.",
    familles: ["vit", "min"],
    fiches: [],
    statut: "en-attente",
    page: null
  }
];
