/* ==========================================================================
   Cours : Mémo valeurs nutritionnelles
   Source : documents/finis/Mémo valeurs nutritionnelles.pdf (46 pages, tableaux en images)
   Toutes les valeurs sont pour 100 g. null = valeur non donnée par le mémo.
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, hbars, fmt } = window.Fiches;

  const G = {
    sug: ["Produits sucrés", "sug"], mg: ["Matières grasses", "lip"], lai: ["Produits laitiers", "lai"], fl: ["Fruits et légumes", "fl"],
    cer: ["Produits céréaliers", "glu"], leg: ["Légumineuses et tubercules", "pro"], vpo: ["Viandes, œufs, poissons", "pro"]
  };
  // Nutriments comparables : clé, libellé, unité, famille de couleur
  const NUT = [["kcal", "Énergie", "kcal", "ink"], ["kj", "Énergie (kJ)", "kJ", "ink"], ["prot", "Protéines", "g", "pro"], ["lip", "Lipides", "g", "lip"], ["gluc", "Glucides", "g", "glu"], ["fib", "Fibres", "g", "fl"], ["eau", "Eau", "g", "eau"], ["ca", "Calcium", "mg", "min"], ["fe", "Fer", "mg", "min"], ["k", "Potassium", "mg", "min"], ["mg", "Magnésium", "mg", "min"], ["na", "Sodium", "mg", "min"]];
  const MACRO = [["eau", "Eau", "eau"], ["prot", "Protéines", "pro"], ["lip", "Lipides", "lip"], ["gluc", "Glucides", "glu"], ["fib", "Fibres", "fl"]];

  // F(id, groupe, nom, source, valeurs, lignes [nutriment, teneur, analyse], note)
  const FOODS = [];
  const F = (id, g, name, src, v, rows, note) => { const f = { id, g, name, src, v, rows: rows || [], note }; FOODS.push(f); return f; };

  /* ---------------- Produits sucrés ---------------- */
  F("sucre-blanc", "sug", "Sucre blanc", "Pour 100 g", { gluc: 99.8, kj: 1700, kcal: 400 }, [
    ["Glucides", "≥ 99,8 g", "Presque uniquement du saccharose."], ["Minéraux", "Traces", "–"], ["Vitamines", "Nulle", "–"], ["Énergie", "1 700 kJ · 400 kcal", "Moyenne des sucres : 100 % de glucides, 1 700 kJ, 400 kcal."]]);
  F("sucre-roux", "sug", "Sucre roux", "Pour 100 g", { gluc: [85, 98], kj: 1600, kcal: 390 }, [
    ["Glucides", "Plus de 85 g, moins de 98 g", "Un peu moins pur que le sucre blanc."], ["Minéraux", "Présents pour certains", "–"], ["Vitamines", "Traces de B3, B5, B6, B9", "–"], ["Énergie", "1 600 kJ · 390 kcal", "–"]]);
  F("confiture", "sug", "Confitures, gelées, marmelades", "CIQUAL 2022", { eau: 39, gluc: 60, kj: 1060, kcal: 400 }, [
    ["Eau", "39 g", "Pauvres en eau : elle s’évapore à la cuisson. D’où une forte valeur énergétique et une longue conservation."],
    ["Glucides", "60 g", "Simples, surtout du saccharose ; IG proche de 75. Viennent du sucrage et de la concentration par la cuisson."],
    ["Fibres", "Négligeable", "–"], ["Énergie", "1 060 kJ · 400 kcal", "La valeur énergétique du fruit est multipliée par au moins 6."],
    ["Vitamines et minéraux", "En baisse", "Minéraux divisés par deux, vitamine C disparue. Le mémo cite aussi le bêta-carotène et la B9 sans finir sa phrase."]],
    "Le mémo donne 1 060 kJ et 400 kcal, qui ne concordent pas (1 060 kJ font environ 253 kcal). Les deux valeurs sont reprises telles quelles.");
  F("miel", "sug", "Miel", "Pour 100 g", { eau: 20, gluc: 80, kj: 1360, kcal: 325, k: 50 }, [
    ["Eau", "20 g", "–"], ["Protéines, lipides", "Traces", "–"],
    ["Glucides", "80 g", "Environ 45 % de fructose, 35 % de glucose, et du saccharose selon les fleurs. Le fructose est un laxatif doux et sucre davantage. IG élevé."],
    ["Énergie", "1 360 kJ · 325 kcal", "Énergétique."], ["Fibres", "Traces", "–"], ["Vitamines et minéraux", "Peu", "Sauf le potassium : 50 mg pour 100 g."]]);
  const CHOC = (id, name, eau, gluc, lip, prot, fib, kj, kcal, ig) => F(id, "sug", name, "CIQUAL 2022", { eau, gluc, lip, prot, fib, kj, kcal }, [
    ["Glucides", fmt(gluc) + " g", "Surtout du saccharose ; inversement proportionnels au cacao."],
    ["Lipides", fmt(lip) + " g", "D’origine végétale : le beurre de cacao (65 % d’AG saturés dont 35 % stéarique et 30 % palmitique, 35 % de mono-insaturés oléique, traces de polyinsaturés). IG plutôt bas : " + ig + "."],
    ["Protéines", fmt(prot) + " g", "Végétales, sans gluten."], ["Fibres", fmt(fib) + " g", "–"], ["Énergie", fmt(kj) + " kJ · " + kcal + " kcal", "–"],
    ["Minéraux et vitamines", "Nombreux", "Pas une source intéressante aux quantités conseillées : 20 à 40 g par jour."]]);
  CHOC("choc-noir", "Chocolat noir 70 %", 0.9, 27, 46, 10.5, 13, 2450, 591, "25");
  CHOC("choc-lait", "Chocolat au lait", 0.7, 56, 31, 7.5, 3, 2240, 537, "45");
  CHOC("choc-blanc", "Chocolat blanc", 1, 60, 34, 6, 1, 2259, 545, "55");
  F("cacao", "sug", "Poudre chocolatée non sucrée", "Pour 100 g", { eau: 3.5, prot: 22.4, lip: 20.6, gluc: 11.6, fib: 29.5, kj: 1680, kcal: 387, na: 45, k: 3900, ca: 140, fe: 48.5, mg: 500 }, [
    ["Protéines", "22,4 g", "Végétales, sans gluten."], ["Lipides", "20,6 g", "Acides gras saturés, stérols végétaux."], ["Glucides", "11,6 g", "Très peu de sucres simples."],
    ["Fibres", "29,5 g", "Teneur très élevée, fibres solubles."], ["Énergie", "1 680 kJ · 387 kcal", "–"],
    ["Minéraux", "Na 45 · K 3 900 · Ca 140 · Fe 48,5 · Mg 500 · P 690 mg", "Vitamines du groupe B."]]);
  F("biscuits", "sug", "Biscuits sucrés", "CIQUAL 2022", { eau: 4.2, prot: 7, lip: 21, gluc: 65, fib: 2, kj: 1850, kcal: 400 }, [
    ["Eau", "4,2 g", "Double cuisson : peu d’eau disponible, longue conservation."],
    ["Protéines", "7 g", "Végétales ou animales. Avec la seule farine, la lysine est limitante ; des protéines animales compensent."],
    ["Lipides", "21 g", "Relativement élevés : souvent végétaux (palme, coprah, riches en saturés) ; les huiles hydrogénées donnent des AG transformés ; le beurre apporte des saturés."],
    ["Glucides", "65 g", "Très élevés, surtout de l’amidon ; environ 25 % de sucres simples. La double cuisson donne une forte réaction de Maillard."],
    ["Fibres", "2 g", "Surtout insolubles ; riches avec des céréales complètes ou du son."], ["Énergie", "1 850 kJ · 400 kcal", "Élevée."],
    ["Vitamines et minéraux", "B, E ; sodium", "Vitamines B et E (matières grasses, germe de blé). Sodium souvent important (sel, levure chimique) : attention en régime hyposodé."]]);

  /* ---------------- Matières grasses ---------------- */
  F("creme", "mg", "Crème fraîche 30 %", "Pour 100 g", { eau: 65, prot: 2, lip: 30.7, gluc: [1, 2], kj: 1300, kcal: 300 }, [
    ["Eau", "65 g", "Forte teneur."], ["Protéines", "2 g", "Négligeables mais de très bonne qualité."], ["Glucides", "1 à 2 g", "–"],
    ["Lipides", "30,7 g", "Triglycérides : 65 % de saturés, 35 % de mono-insaturés, polyinsaturés négligeables. La seule teneur qui varie selon le type de crème."],
    ["Énergie", "1 300 kJ · 300 kcal", "Varie avec la matière grasse."], ["Vitamines", "Peu", "Peu de liposolubles, aucune dans la crème légère ; un peu de B, négligeable."]],
    "Épaisse ou liquide, la crème a des valeurs quasi identiques.");
  F("beurre", "mg", "Beurre", "Pour 100 g", { eau: 16, lip: 82, kj: 3100, kcal: 750 }, [
    ["Eau", "16 g", "–"], ["Protéines, glucides", "Négligeables", "–"],
    ["Lipides", "82 g", "Triglycérides. Saturés 55 g, soit 70 % des AG (laurique, myristique, palmitique : en excès, thrombogènes et athérogènes). Mono-insaturés 20 g, 25 % (ne préviennent pas les maladies cardiovasculaires). Polyinsaturés 3 g, moins de 5 %."],
    ["Énergie", "3 100 kJ · 750 kcal", "Le mémo écrit « 3 100 (kcal) » : il s’agit de kJ."],
    ["Vitamine A", "Rétinol 700 µg · β-carotène 200 µg", "Une portion ≈ 10 % des apports recommandés de l’adulte en rétinol ; le β-carotène (beurre doux) ne suffit pas comme source."], ["Vitamine D", "Négligeable", "–"]]);

  /* ---------------- Produits laitiers ---------------- */
  F("lait", "lai", "Lait cru de mélange", "Pour 100 g", { eau: 90, prot: [2.8, 3.2], lip: 1.6, gluc: 5, kj: 280, kcal: 70, ca: 120, na: 50, k: 150, mg: 10 }, [
    ["Eau", "90 g", "Très riche en eau : microbiologiquement instable."],
    ["Protéines", "2,8 à 3,2 g", "80 % insolubles : caséines α, β, κ, γ. 20 % solubles, du lactosérum (riches en AA soufrés, lysine, tryptophane) : β-lactoglobuline (allergisante, absente du lait humain), α-lactalbumine, sérum albumine, immunoglobulines. Varient avec l’alimentation, les saisons, la lactation. CUD ≈ 100 %, VB 90 % ; protéolyse rapide et progressive ; légère supériorité qualitative du lactosérum."],
    ["Lipides", "1,6 g en moyenne", "3 à 5 g dans le lait entier ; presque 100 % de triglycérides. ⅔ de saturés (dont 55 % laurique, myristique, palmitique ; 10 % à chaîne courte et moyenne), ⅓ de mono-insaturés, traces de polyinsaturés. Varient selon la race (normande plus que prim’Holstein), la saison (hiver plus qu’été), la lactation et l’alimentation."],
    ["Cholestérol", "15 mg", "Petite source."], ["Glucides", "5 g", "Le lactose."],
    ["Énergie", "280 kJ · 70 kcal", "Peu énergétique ; les AG saturés à chaîne moyenne et longue ne sont pas en excès."],
    ["Calcium", "120 mg", "Ca/P = 1,4. Un bol (¼ L) apporte 300 mg, environ 30 % des recommandations de l’adulte ; lactose, caséines et vitamine D favorisent son absorption."],
    ["Phosphore, sodium, potassium", "P 90 · Na 50 · K 150 mg", "Phosphore : petite source. Sodium et potassium : à surveiller dans les régimes."],
    ["Magnésium, zinc", "Mg 10 mg · zinc : petite source", "Le zinc compte pour les végétariens."],
    ["Vitamines A et D", "A : source · D : traces", "La vitamine A augmente avec l’herbe fraîche et les carotènes. Peu de D, mais assez pour l’absorption du calcium. A et D suivent la matière grasse."],
    ["Vitamines B", "B1 petite source · B2 source élevée · B3 petite source · B5 source", "Un bol de 250 mL : 10 % des apports en B1, 35 % en B2, 15 % en B5. Peu de B3, mais du tryptophane, son précurseur."]]);
  const FROM = (id, name, eau, prot, lip, chol, kcal, kj, ca, na, rows) => F(id, "lai", name, "Pour 100 g", { eau, prot, lip, kcal, kj, ca, na }, rows);
  FROM("from-frais", "Fromage frais", 75, 15, 15, 50, 200, 800, 150, 50, [
    ["Eau", "75 g · richesse", "Non affiné : plus d’eau que les autres."], ["Protéines", "15 g · source", "Inversement proportionnelles à l’eau."], ["Lipides", "15 g · source", "Selon le lait (crème ajoutée, lait écrémé), l’égouttage, l’affinage."],
    ["Cholestérol", "50 mg · petite source", "Suit les lipides."], ["Glucides", "Presque négligeables", "Le lactose devient acide lactique au caillage, ou part avec le lactosérum."], ["Énergie", "800 kJ · 200 kcal", "Moyenne."],
    ["Calcium", "150 mg · source", "Dépend de l’égouttage."], ["Sodium", "50 mg · richesse", "Selon le sel ajouté au caillé."],
    ["Minéraux", "Potassium : source · magnésium : petite source · zinc : pauvreté", "–"], ["Vitamines", "A : petite source · D : pauvreté · B1 : petite source · B2 : source élevée · B5 : source élevée · B12 : très riche", "Plus riche en vitamines B (hydrosolubles) que les fromages affinés."]]);
  FROM("from-molle", "Fromage à pâte molle", 50, 25, 25, 75, 300, 800, [250, 550], [500, 600], [
    ["Eau", "50 g · source élevée", "–"], ["Protéines", "25 g · richesse", "–"], ["Lipides", "25 g · source élevée", "–"], ["Cholestérol", "75 mg · source", "–"],
    ["Glucides", "Presque négligeables", "–"], ["Énergie", "800 kJ · 300 kcal", "Élevée."],
    ["Calcium", "Croûte lavée 550 mg · croûte moisie 250 mg", "Richesse ; source élevée."], ["Sodium", "Croûte lavée 600 mg · croûte moisie 500 mg", "Richesse : la croûte lavée est lavée au sel pendant l’affinage."],
    ["Minéraux", "Potassium : source · magnésium : richesse (lavée), petite source (moisie) · zinc : source élevée (lavée), source (moisie)", "–"],
    ["Vitamines", "A : source · D : pauvreté · B1 : petite source · B2 : source élevée · B5 : source · B12 : source élevée", "–"]]);
  FROM("from-dure", "Fromage à pâte pressée cuite (dure)", 35, 30, 30, 110, 400, 1350, 950, 350, [
    ["Eau", "35 g · source", "Très affiné : le moins d’eau."], ["Protéines", "30 g · richesse", "–"], ["Lipides", "30 g · source élevée", "–"], ["Cholestérol", "110 mg · source élevée", "–"],
    ["Glucides", "Négligeables", "Lactose transformé pendant l’affinage."], ["Énergie", "1 350 kJ · 400 kcal", "Élevée."],
    ["Calcium", "950 mg · très riche", "L’affinage poussé des pâtes cuites concentre le calcium."], ["Sodium", "350 mg · source élevée", "–"],
    ["Minéraux", "Potassium : source · magnésium : source élevée · zinc : source élevée", "Zinc d’origine animale, bien biodisponible."],
    ["Vitamines", "A : source · D : pauvreté · B1 : petite source · B2 : source élevée · B5 : source · B12 : source élevée", "Les vitamines B des affinés se rapprochent de celles du lait, sauf la B12."]]);

  /* ---------------- Fruits et légumes ---------------- */
  F("fruits", "fl", "Fruits frais", "Moyenne pour 100 g", { eau: 88, gluc: 10, fib: 2, kj: 167.2, kcal: 40, ca: 20, fe: 0.3, k: 200, mg: 15, na: 2 }, [
    ["Macronutriments", "Eau 88 · protéines – · lipides – · glucides 10 · fibres 2 g", "–"], ["Énergie", "167,2 kJ · 40 kcal", "–"],
    ["Vitamines", "β-carotène 150 µg · C 20 mg · B9 25 µg", "–"], ["Minéraux", "Ca 20 · P 15 · Mg 15 · Fe 0,3 · K 200 · Na 2 mg", "–"]]);
  F("legumes", "fl", "Légumes frais", "Moyenne pour 100 g", { eau: 92, prot: 1, gluc: 3, fib: 3, kj: 67, kcal: 16, ca: 40, fe: 0.6, k: 200, mg: 16.1, na: 30 }, [
    ["Macronutriments", "Eau 92 · protéines 1 · lipides – · glucides 3 · fibres 3 g", "–"], ["Énergie", "67 kJ · 16 kcal", "–"],
    ["Vitamines", "β-carotène 815 µg · C 10,2 mg · B9 35,4 µg", "–"], ["Minéraux", "Ca 40 · P 40 · Mg 16,1 · Fe 0,6 · K 200 · Na 30 mg", "–"]]);
  F("chataigne", "fl", "Châtaignes et marrons grillés", "Fruits amylacés, pour 100 g", { eau: 55, prot: 2, lip: 2, gluc: 35, fib: 7.5, kj: 700, ca: 30, fe: 1, k: 550, mg: 35 }, [
    ["Eau", "55 g", "Teneur moyenne."], ["Protéines", "2 g", "Faibles, végétales. Limitantes : AA soufrés (méthionine, cystéine) ; riches en lysine : à compléter avec des céréales (association culinaire difficile)."],
    ["Lipides", "2 g", "Pauvres : ⅔ d’insaturés (moitié mono, moitié poly, surtout oméga 6). Intéressants en régime hypolipidique. Réserves hydrolysées à la germination."],
    ["Glucides", "35 g", "Complexes, élevés : sous-groupe des féculents. Châtaignes : ⅔ d’amidon, ⅓ de sucres simples (saccharose), d’où un goût plus sucré, moins farineux. Marrons : surtout de l’amidon."],
    ["Énergie", "700 kJ", "Moyennement énergétiques. Une portion de 200 g ≈ 100 g de céréales crues. Le mémo écrit aussi « 700 kcal »."],
    ["Fibres", "7,5 g", "Élevées : 200 g couvrent environ la moitié des apports de l’adulte. Surtout insolubles : IG bas."],
    ["Calcium", "30 mg", "Pauvreté."], ["Magnésium", "35 mg", "200 g ≈ 15 % des apports ; peu intéressant (fréquence, acide phytique, fibres)."],
    ["Fer", "1 mg", "Non héminique : mal absorbé."], ["Potassium", "550 mg", "Riche : à supprimer en régime hypopotassique."],
    ["Vitamines", "B1 0,2 · B2 0,1 · B5 0,5 · B6 0,35 mg · B9 60 µg · C 40 mg", "B1 30 % (source élevée), B2 10 % (petite source), B5 20 % (source), B6 40 % (richesse), B9 35 % (source élevée), C 36 % (richesse)."]],
    "Énergie : le mémo écrit 700 kJ et 700 kcal, impossible ensemble ; seuls les kJ sont repris dans les comparaisons.");

  /* ---------------- Produits céréaliers ---------------- */
  const SEM = [["Protéines", "12 g crue · 4 g cuite", "Participe aux besoins en protéines végétales."], ["Lipides", "Négligeables", "Sans matière grasse ajoutée à la cuisson."], ["Glucides", "70 g crue · 35 g cuite", "Élevés, complexes."], ["Énergie", "1 400 kJ · 330 kcal crue · 717 kJ · 169 kcal cuite", "Crue (déshydratée), plus énergétique ; cuite, valeur moyenne."], ["Fibres", "3,5 g crue · 1,5 g cuite", "Près des ⅔ insolubles."], ["Minéraux et vitamines", "Mg 25 / 30 · Ca 15 / 15 · P 100 / 115 · K 150 / 135 · B1 0,25 / 0,1 · B5 0,5 / 0,25 · B6 0,01 / 0,15 · PP 2 / – mg", "Crue / cuite. Participe aux besoins en vitamines B et minéraux."]];
  F("semoule-crue", "cer", "Semoule crue", "Pour 100 g", { eau: 14.5, prot: 12, gluc: 70, fib: 3.5, kj: 1400, kcal: 330, ca: 15, k: 150, mg: 25 }, SEM);
  F("semoule-cuite", "cer", "Semoule cuite", "Pour 100 g", { eau: 60, prot: 4, gluc: 35, fib: 1.5, kj: 717, kcal: 169, ca: 15, k: 135, mg: 30 }, SEM);
  const PAT = [["Protéines", "12 g crues · 4 g cuites", "Végétales, surtout du gluten (gliadine, gluténine). Lysine : facteur limitant primaire. Riches en AA soufrés (méthionine, cystéine) : à compléter par des protéines animales ou des légumineuses. CUD ≈ 80 %, VB ≈ 50 %."], ["Lipides", "Négligeables", "–"], ["Glucides", "70 g crues · 35 g cuites", "Surtout de l’amidon. IG faible : satiété durable."], ["Énergie", "1 400 kJ · 330 kcal crues · 610 kJ · 144 kcal cuites", "Crues plus énergétiques ; cuites, valeur moyenne."], ["Fibres", "3 g crues · 1,5 g cuites", "Petite source."], ["Magnésium", "25 / 30 mg", "Source élevée."], ["Calcium", "15 / 15 mg", "Participe aux besoins."], ["Phosphore, fer, potassium", "P 100 / 115 · Fe 1,5 / – · K 200 / 135 mg", "Sauf pour le fer, participent grandement aux besoins en phosphore et potassium."], ["Sodium", "Négligeable", "–"], ["Vitamines", "B1 0,10 / 0,1 · B5 0,4 / 0,25 · B6 0,01 / 0,15 mg", "Quantités bien négligeables."]];
  F("pates-crues", "cer", "Pâtes crues", "Blé, qualité courante, pour 100 g", { eau: 14.5, prot: 12, gluc: 70, fib: 3, kj: 1400, kcal: 330, ca: 15, fe: 1.5, k: 200, mg: 25 }, PAT);
  F("pates-cuites", "cer", "Pâtes cuites", "Blé, qualité courante, pour 100 g", { eau: 60, prot: 4, gluc: 35, fib: 1.5, kj: 610, kcal: 144, ca: 15, k: 135, mg: 30 }, PAT);
  F("farine-blanche", "cer", "Farine blanche", "Pour 100 g", { eau: 15, prot: 10, lip: 1, gluc: [73, 76], fib: 2.5, kj: 1400, kcal: 330, ca: 20, fe: 1, k: 180, mg: 25, na: 5 }, [
    ["Eau", "Environ 15 g", "Pauvre en eau : longue conservation à l’abri de la lumière, de l’air et de l’humidité (DDM)."],
    ["Protéines", "10 g", "Surtout du gluten (environ 80 % des protéines)."], ["Lipides", "1 g", "Négligeables : la farine ne rancit pas."],
    ["Glucides", "76 g (T45) · 73 g (T55)", "Riche en complexes : les levures transforment l’amidon en gaz carbonique dans la fabrication du pain. Pauvre en simples, vite fermentés."],
    ["Énergie", "1 400 kJ · 330 kcal", "Fortement énergétique : pauvre en eau, riche en glucides complexes."],
    ["Calcium, phosphore", "20 mg · 100 mg", "Ca/P = 0,2, mais sans acide phytique, mieux absorbé que dans le grain."], ["Sodium, potassium", "5 mg · 180 mg", "Très pauvre en sodium ; source de potassium."],
    ["Magnésium, fer", "25 mg · 1 mg", "Source de magnésium ; petite source de fer non héminique."],
    ["Vitamines", "B1 0,1 · B3 < 0,1 · B5 0,5 · B6 0,05 · E 0,5 mg", "Petite voire très petite source ; vitamine E négligeable."],
    ["Fibres", "2,5 g (T45) · 10 g (T150)", "Pas riche à cause de la mouture ; source de fibres insolubles."]]);
  F("farine-complete", "cer", "Farine complète T150", "Pour 100 g", { eau: 20, prot: 10.5, lip: 1.5, gluc: 61, fib: 7, kj: 1250, kcal: 300, ca: 30, fe: 2, k: 280, mg: 75, na: 4 }, [
    ["Composition", "Voir le comparatif T45 / T150 plus bas", "Plus de minéraux (×2 à ×3), de vitamines B1 et E et de fibres que la farine blanche, un peu moins de glucides et d’énergie."]],
    "Fibres : le comparatif du mémo donne 7 g (sur une ligne titrée par erreur « Vitamine E »), le tableau de la farine blanche donne 10 g pour la T150.");
  F("riz", "cer", "Riz blanc cuit, non salé", "Pour 100 g", { eau: 64, prot: 3, lip: 0.4, gluc: 32, fib: 0.8, kj: 650, kcal: 145 }, [
    ["Eau", "64 g", "Assez élevée une fois cuit."], ["Protéines", "3 g", "Végétales."], ["Lipides", "0,4 g", "Négligeables."], ["Glucides", "32 g", "Surtout complexes, de l’amidon."],
    ["Fibres", "0,8 g", "Source de fibres insolubles."], ["Énergie", "650 kJ · 145 kcal", "Moyenne."], ["Vitamines et minéraux", "–", "Source de B1 et B2 ; un peu de potassium, fer, phosphore, magnésium."]]);
  F("mais", "cer", "Maïs", "Pour 100 g", { prot: 8.1, lip: 3.7, gluc: 67.2 }, [
    ["Énergie", "Brut 3 840 · sec 4 450 ; brut 16,1 · sec 18,6", "Le mémo met « kcal » sur les deux lignes ; les unités ne sont pas claires (peut-être kcal par kg et kJ par g)."],
    ["Protéines", "8,1 g (N × 6,25)", "Végétales. Limitantes : lysine et tryptophane (précurseur de la B3, peu biodisponible), comme le riz. Une carence en B3 et en tryptophane peut entraîner la pellagre. Sans gluten. CUD du maïs inférieur à celui du blé. Complément possible : haricots rouges."],
    ["Lipides", "3,7 g", "Faibles."], ["Glucides", "67,2 g", "IG bas."],
    ["Vitamines et minéraux", "Vitamines 650 · minéraux 730,1 (mg/100 g, valeurs du mémo)", "Vitamines du groupe B ; magnésium, potassium, phosphore, fer non héminique. Provitamine A (bêta-carotène) intéressante."]],
    "L’énergie du maïs n’est pas reprise dans les comparaisons : ses unités sont ambiguës.");
  F("avoine", "cer", "Avoine", "Pour 100 g", { eau: 8, prot: 17, lip: 7, gluc: 56, fib: 11, kj: 1590, kcal: 378 });
  F("seigle", "cer", "Seigle", "Pour 100 g", { eau: 11, prot: 10, lip: 2, gluc: 61, fib: 15, kj: 1410, kcal: 334 });
  const QUI = [["Eau", "15 g cru · 75 g cuit", "Pauvre en eau avant cuisson."], ["Protéines", "13 g cru · 4 g cuit", "Faibles, mais sans facteur limitant. Sans gluten."], ["Lipides", "6 g cru · 1,5 g cuit", "Bonne qualité (85 % d’AG insaturés) ; grosse perte à la cuisson."], ["Glucides complexes", "60 g cru · 18,5 g cuit", "Riche cru, encore intéressant cuit."], ["Énergie", "1 500 kJ · 400 kcal cru · 450 kJ · 100 kcal cuit", "Élevée cru, en baisse à la cuisson."], ["Fibres", "7 g cru · 3 g cuit", "Source même cuit."], ["Calcium", "45 mg cru · 15 mg cuit", "Peu élevé."], ["Fer, magnésium, zinc", "Fe 4,5 / 1,5 · Mg 200 / 65 · Zn 3 / 1 mg", "Très riche en minéraux ; la cuisson et les phytates en font perdre, mais il reste une source intéressante."], ["Sodium", "5 mg cru · 7 mg cuit", "Pauvre : conseillé en régime hyposodé."], ["Potassium", "560 mg cru · 170 mg cuit", "Le mémo écrit « source négligeable »."], ["Vitamines B3, B6", "B3 1,5 / 0,4 · B6 0,5 / 0,1 mg", "Intéressantes cru, négligeables cuit."]];
  F("quinoa-cru", "cer", "Quinoa cru", "Pour 100 g", { eau: 15, prot: 13, lip: 6, gluc: 60, fib: 7, kj: 1500, kcal: 400, ca: 45, fe: 4.5, k: 560, mg: 200, na: 5 }, QUI);
  F("quinoa-cuit", "cer", "Quinoa cuit", "Pour 100 g", { eau: 75, prot: 4, lip: 1.5, gluc: 18.5, fib: 3, kj: 450, kcal: 100, ca: 15, fe: 1.5, k: 170, mg: 65, na: 7 }, QUI);
  F("pain-mie", "cer", "Pain de mie", "Pour 100 g", { prot: 7.5, lip: 4.5, gluc: 50, fib: 3.5, kj: 1150, kcal: 270, ca: 120, fe: 1, k: 150, mg: 30, na: 500 }, [
    ["Protéines", "7,5 g", "Non négligeables : une grande partie de l’assise protéique du blé part à la mouture, restent celles de l’amande."],
    ["Lipides", "4,5 g", "Un peu plus que le pain blanc : matières grasses ajoutées."], ["Glucides", "50 g", "Très riche en glucides assimilables : farine très blanche, donc beaucoup d’amidon."],
    ["Énergie", "1 150 kJ · 270 kcal", "Très grande valeur énergétique."], ["Fibres", "3,5 g", "Peu : moins d’effet sur le transit."],
    ["Minéraux", "Ca 120 · Fe 1 · Mg 30 · P 85 · Na 500 · K 150 mg", "Plus de calcium qu’un pain blanc (lait). Forte teneur en sel. Fer non héminique ; acide phytique."],
    ["Vitamines", "B1 0,15 · B3 négligeable · B5 0,5 mg", "Le pain de mie complet est plus riche en vitamines et minéraux que le blanc."]],
    "Selon le mémo, les valeurs des vitamines et minéraux sont indicatives et ne sont pas à connaître.");
  F("pain-azyme", "cer", "Pain azyme", "Pour 100 g", { eau: 6, prot: 12, lip: 1, gluc: 80, fib: 1, kj: 1600, kcal: 380 }, [
    ["Eau", "6 g", "Faible : peu de micro-organismes, longue conservation."], ["Protéines", "12 g", "Végétales, lysine limitante ; contient du gluten."],
    ["Lipides", "1 g", "Très faibles."], ["Glucides", "80 g", "Élevés."], ["Énergie", "1 600 kJ · 380 kcal", "Élevée."], ["Fibres", "1 g", "–"]]);

  /* ---------------- Tubercules ---------------- */
  F("pdt", "leg", "Pomme de terre", "Pour 100 g", { eau: 78.3, prot: 1.8, lip: 0.34, gluc: 16.7, fib: 1.8, kj: 341, kcal: 80.5, ca: 10, fe: 0.5, k: 363, mg: 17.3 }, [
    ["Macronutriments", "Eau 78,3 · protéines 1,8 · lipides 0,34 · glucides 16,7 · fibres 1,8 g", "–"], ["Énergie", "341 kJ · 80,5 kcal", "–"],
    ["Vitamines", "C 2,92 mg · B3 1,73 mg · B9 31,1", "Le mémo note la B9 en mg, sans doute des µg."], ["Minéraux", "Ca 10 · Mg 17,3 · Fe 0,5 · K 363 mg", "–"]]);
  F("patate-douce", "leg", "Patate douce", "Pour 100 g", { prot: 1.69, lip: 0.15, gluc: 12.2, fib: 2.9, kj: 265, kcal: 62.8 });
  F("manioc", "leg", "Manioc", "Pour 100 g", { prot: 0.69, lip: 0.043, gluc: 32, fib: 0.4, kj: 561, kcal: 134 });

  /* ---------------- Viandes, œufs, poissons ---------------- */
  const VOL = [["Protéines", "27 g", "Viandes maigres riches en protéines animales ; moins de collagène que les viandes de boucherie, rapport collagène / protéines faible : bonne digestibilité."], ["Lipides", "6 g", "Selon le morceau (voir le poulet plus bas) et l’élevage : industriel, gras visible riche en saturés ; traditionnel, gras dans le muscle, insaturés. Saturés 35 %, mono 45 %, poly 20 %."], ["Glucides", "Négligeables", "Transformés en acide lactique pendant la rigor mortis."], ["Énergie", "650 kJ · 150 kcal crues · 800 kJ · 200 kcal cuites", "–"], ["Minéraux et vitamines", "Proches des viandes de boucherie", "Sauf : fer ; zinc (deux fois moins) ; B12 (100 g couvrent 25 % des apports de l’adulte) ; B3 (davantage) ; B1 (presque négligeable)."]];
  F("volaille-crue", "vpo", "Volaille crue", "Animaux de basse-cour, pour 100 g", { prot: 27, lip: 6, kj: 650, kcal: 150 }, VOL);
  F("volaille-cuite", "vpo", "Volaille cuite", "Animaux de basse-cour, pour 100 g", { kj: 800, kcal: 200 }, VOL);
  F("gibier", "vpo", "Gibier", "Pour 100 g", { eau: 64.4, prot: 29.6, lip: 3.74, gluc: 0, ca: 11.8, fe: 3.03, mg: 25.8 }, [
    ["Macronutriments", "Eau 64,4 · protéines 29,6 · glucides 0 · lipides 3,74 g", "–"],
    ["Minéraux", "Ca 11,8 · Fe 3,03 · Cu 0,18 · Mg 25,8 · P 187 · Zn 2,84 mg ; K « 29.362 »", "Le potassium est écrit tel quel dans le mémo."],
    ["Vitamines", "K1 1,63 µg · B1 0,23 · B2 0,36 · B3 5,59 · B6 0,5 mg", "–"]], "Le mémo ne donne pas l’énergie du gibier.");
  const POIS = [["Eau", "Gras ≈ 65 % · demi-gras 70 à 75 % · maigres 80 %", "Riches en eau, microbiologiquement instables : bien les conserver."], ["Protéines", "19 g", "95 % musculaires (intracellulaires), dont 70 % des myofibrilles (myosine, actine) et le sarcoplasme (myoglobine, enzymes) ; 5 % du tissu conjonctif (les cartilagineux ont plus de collagène que les osseux). Matières azotées non protéiques : AA libres, acides nucléiques et nucléotides, bases azotées, urée et ammoniac, oxyde de triméthylamine. CUD 95 % (osseux), 75 % (cartilagineux). Plus de lysine que les viandes."], ["Lipides", "Très maigres < 1 g · maigres 1 à 3 · demi-gras 3 à 10 · gras > 10 g", "Très variables : saison (jusqu’à 20 % de juillet à octobre contre 5 de février à avril), reproduction, espèce, élevage, morceau. Maigres : 65 % de phospholipides (membranes). Demi-gras et gras : globules de réserve, 90 % de triglycérides. Saturés 30 %, mono 40 %, poly 30 %."], ["Cholestérol", "50 mg", "Source."], ["Glucides", "–", "La chair n’en contient pas."], ["Énergie", "Maigre 100 kcal (400 kJ) · demi-gras 120 (500) · gras 200 (800)", "Selon les lipides."], ["Minéraux", "Fe 1 · Na 80 · K 300 · Ca 30 · Mg 30 mg ; zinc petite source ; sélénium richesse ; iode grande richesse ; fluor richesse", "Fer héminique bien absorbé ; potassium : attention en régime hypopotassique ; calcium peu biodisponible ; zinc et sélénium bien assimilés ; très grande source d’iode et de fluor."], ["Vitamines", "A, D, E ; B6 et B12 surtout", "–"]];
  F("poisson-maigre", "vpo", "Poisson maigre", "Pour 100 g", { eau: 80, prot: 19, lip: [1, 3], kj: 400, kcal: 100, ca: 30, fe: 1, k: 300, mg: 30, na: 80 }, POIS);
  F("poisson-demi", "vpo", "Poisson demi-gras", "Pour 100 g", { eau: [70, 75], prot: 19, lip: [3, 10], kj: 500, kcal: 120, ca: 30, fe: 1, k: 300, mg: 30, na: 80 }, POIS);
  F("poisson-gras", "vpo", "Poisson gras", "Pour 100 g", { eau: 65, prot: 19, lip: 10, kj: 800, kcal: 200, ca: 30, fe: 1, k: 300, mg: 30, na: 80 }, POIS, "Lipides : « plus de 10 g » ; la barre est placée à 10.");
  F("calamar", "vpo", "Calamar cru", "CIQUAL 2022, pour 100 g", { eau: 81, prot: 14.5, lip: 1.2, gluc: 0, kj: 326, kcal: 77 }, [
    ["Eau", "81 g", "Élevée, comme chez les mollusques : propice aux microbes, bien conserver et respecter la DLC."], ["Protéines", "14,5 g", "Animales."], ["Lipides", "1,2 g", "Négligeables."], ["Glucides", "0 g", "Négligeables."],
    ["Énergie", "326 kJ · 77 kcal", "Relativement faible."], ["Minéraux et vitamines", "–", "Source intéressante."]]);
  F("crevette", "vpo", "Crevette cuite", "CIQUAL 2022, pour 100 g", { eau: 74, prot: 19.7, lip: 0.8, gluc: 3.2, kj: 420, kcal: 99 }, [
    ["Eau", "74 g", "Élevée, comme chez les crustacés : bien conserver et respecter la DLC."], ["Protéines", "19,7 g", "Animales."], ["Lipides", "0,8 g", "Négligeables."], ["Glucides", "3,2 g", "Négligeables."],
    ["Énergie", "420 kJ · 99 kcal", "Relativement faible."], ["Minéraux et vitamines", "–", "Source intéressante."]]);
  F("oeuf", "vpo", "Œuf", "Pour 100 g", { kj: 600, kcal: 150, ca: 75, k: 130, mg: 10, na: 130 }, [
    ["Glucides", "Négligeables", "–"], ["Énergie", "600 kJ · 150 kcal", "Moyennement énergétique."], ["Calcium", "75 mg", "Couvre peu les besoins ; Ca/P de seulement 0,4."],
    ["Phosphore", "200 mg", "Source importante."], ["Sodium", "130 mg", "Le blanc est une source de sodium."], ["Potassium", "130 mg", "Peu élevé mais non négligeable."],
    ["Magnésium, zinc", "10 mg · 1 mg", "Magnésium négligeable ; petite source de zinc."],
    ["Vitamines liposolubles", "A 180 µg · D 1,9 µg · E 1,5 mg", "A : source élevée ; D et E : petites sources."],
    ["Vitamines B", "B2 0,5 mg · B3 négligeable · B5 1,6 mg · B8 25 µg · B9 35 µg · B12 1,5 µg", "Sources élevées de B2, B5, B12 ; riche en B8 ; petite source de B9."]],
    "Le mémo ne donne ni l’eau, ni les protéines, ni les lipides de l’œuf.");

  /* ---------------- Tableaux comparatifs (aussi versés dans « Comparer ») ---------------- */
  const YAO = [["Nature ordinaire", 4.3, 1.1, 4, 150, 180, 40], ["Nature entier", 4.1, 2.6, 3.6, 130, 230, 50], ["Nature maigre", 4.8, null, 4.1, 130, 150, 35], ["Sucré", 3.5, 2, 12.5, 120, 350, 80], ["Sucré maigre", 3.5, 0.1, 12.5, 120, 280, 65], ["Aromatisé entier", 3.4, 2.6, 12.2, 120, 350, 85], ["Aromatisé édulcoré maigre", 4.5, 0.06, 8.3, 140, 200, 50], ["À boire sucré demi-écrémé", 2.9, 1.5, 9.3, 117, 250, 60], ["À boire aromatisé demi-écrémé", 3, 1.4, 11.3, 115, 330, 80], ["À boire aux fruits demi-écrémé", 3.1, 1.7, 13.1, 133, 300, 70], ["Aux fruits entier", 3.3, 3.1, 13.4, 118, 340, 80]];
  const CRE = [["Crème dessert appertisée", 3.5, 3.5, 20, 130, 550, 130], ["Crème dessert rayon frais", 3.5, 5, 15, 120, 500, 120], ["Crème dessert aux œufs", 4.5, 10, 20, 200, 720, 170], ["Crème dessert allégée en MG", 3.5, 1, 15, 85, 350, 82], ["Viennois, liégeois", 3, 6, 20, 150, 600, 150], ["Flan", 4, 3, 20, 120, 360, 85], ["Entremets aux œufs céréaliers", 3.5, 3, 25, 150, 420, 100], ["Crème caramel", 4.5, 3.5, 20, 130, 360, 85]];
  const SEC = [["Abricot", 50, 2, 0.5, 40, 750, 150, 5.5, 1100, 35, 60, 4.5], ["Banane", 5, 4, 2, 80, 1500, 360, 10, 1500, 110, 20, 1], ["Datte", 25, 2, null, 65, 1150, 270, 7.5, 700, 45, 45, 1], ["Figue", 30, 3, 1, 55, 1000, 250, 10, 850, 50, 165, 2], ["Pêche", 10, 5, 1, 70, 1300, 300, 15, 950, 80, 25, 7], ["Pomme", 35, 0.8, null, 55, 950, 230, 9, 450, 10.5, 20, 1.5], ["Pruneau", 35, 3, 0.5, 55, 950, 230, 7.5, 660, 40, 50, 1.5], ["Raisin", 35, 2, 0.5, 60, 1100, 250, 3.5, 780, 30, 65, 2], ["Moyenne", 30, 2.5, null, 60, 1100, 250, 8.5, 850, 60, 50, 2.5]];
  const LEG = [["Fève", 15, 26, 1.5, 33.5, 28, 2.5, 1100, 250, 100, 420, 6.5, 190, 15, 1060, 3, 0.8, 0.55, 420], ["Haricot blanc", 20, 19, 2, 44, 42, 17, 1150, 270, 185, 365, 8, 190, 10, 1160, 3.5, 0.7, 0.45, 300], ["Flageolet", 15, 19, 2.5, 42, 24, 23.5, 1150, 270, 45, 440, 7.5, 160, 8, null, 2.5, 0.7, 0.3, 120], ["Haricot rouge", 15, 22.5, 1, 46, 44, 15, 1200, 300, 85, 400, 7, 140, 10, 1360, 3, 0.7, 0.6, 400], ["Lentille", 15, 25.5, 1.5, 50.5, 49.5, 7.5, 1350, 320, 45, 325, 6.5, 60, 75, 2675, 3, 0.7, 0.7, 260], ["Pois cassé", 10, 23, 1.5, 52, 49, 16, 1350, 320, 37.5, 365, 5, 65, 15, 970, 3.5, 0.7, 0.8, 150], ["Pois chiche", null, 23, 1.5, 52, 49, 16, 1350, 320, 37.5, 365, 5, 65, 15, 979, 3.5, 0.7, 0.8, 150], ["Moyenne", 15, 20, 1.5, 50, 45, 15, 1200, 300, 80, 400, 6.5, 125, 20, 1000, 3, 0.7, 0.6, 250]];
  const GRI = [["Biscotte classique", 10, 6, 76.6, 4.86], ["Pain grillé domestique", 10.4, 1.3, 64, 3.7], ["Petit pain grillé suédois", 9.75, 8.25, 68.5, 7.3], ["Tartine craquante, extrudée, grillée", 11, 3.6, 73.7, 4.4], ["Moyenne", 10, 5, 71, 5]];
  const MAR = [["Margarine 80 % tournesol", 80, 16, 17, 46, 60, 31, null, 3040, 725], ["Margarine 60 % allégée", 60, 17, 20, 17, 18, null, 1.3, 2280, 545], ["Margarine 60 % allégée oméga 3 et 6", 55, 16, 26, 16, 27, 11, 3, 2090, 500], ["Matière grasse légère à tartiner", 40, 14, 14, 8, 5, 5.5, 1.2, 1520, 365], ["Matière grasse composée allégée", 60, 20, 18, 15, 10, 13, 1.4, 2280, 545]];
  YAO.forEach(r => F("yao-" + r[0], "lai", "Yaourt " + r[0].toLowerCase(), "CIQUAL, Anses", { prot: r[1], lip: r[2], gluc: r[3], ca: r[4], kj: r[5], kcal: r[6] }));
  CRE.forEach(r => F("cre-" + r[0], "lai", r[0], "Pour 100 g", { prot: r[1], lip: r[2], gluc: r[3], ca: r[4], kj: r[5], kcal: r[6] }));
  SEC.slice(0, 8).forEach(r => F("sec-" + r[0], "fl", r[0] + (/e$/.test(r[0]) ? " sèche" : " sec"), "Fruits secs, pour 100 g", { eau: r[1], prot: r[2], lip: r[3], gluc: r[4], kj: r[5], kcal: r[6], fib: r[7], k: r[8], mg: r[9], ca: r[10], fe: r[11] }));
  LEG.slice(0, 7).forEach(r => F("leg-" + r[0], "leg", r[0], "Légumineuses, pour 100 g", { eau: r[1], prot: r[2], lip: r[3], gluc: r[4], fib: r[6], kj: r[7], kcal: r[8], ca: r[9], fe: r[11], mg: r[12], na: r[13], k: r[14] }));
  GRI.slice(0, 4).forEach(r => F("gri-" + r[0], "cer", r[0], "CIQUAL 2020", { prot: r[1], lip: r[2], gluc: r[3], fib: r[4] }));
  MAR.forEach(r => F("mar-" + r[0], "mg", r[0], "Pour 100 g", { lip: r[1], kj: r[8], kcal: r[9] }));

  /* ---------------- Rendu d'une fiche aliment ---------------- */
  const val = (x, q = 100) => x == null ? null : Array.isArray(x) ? x.map(y => y * q / 100) : x * q / 100;
  const txt = (x, d = 1) => Array.isArray(x) ? fmt(x[0], d) + "–" + fmt(x[1], d) : fmt(x, d);
  function fiche(f, q = 100) {
    const [gl, gc] = G[f.g], v = f.v;
    const e = v.kcal != null ? `<div class="big ${gc}">${txt(val(v.kcal, q), 0)} <small>kcal</small></div><p>${v.kj != null ? txt(val(v.kj, q), 0) + " kJ · " : ""}pour ${q} g</p>` : v.kj != null ? `<div class="big ${gc}">${txt(val(v.kj, q), 0)} <small>kJ</small></div><p>pour ${q} g</p>` : `<p>Énergie non donnée par le mémo.</p>`;
    const mac = MACRO.filter(([k]) => v[k] != null).map(([k, l, c]) => ({ label: l, v: val(v[k], q), cls: c }));
    const min = NUT.filter(([k, , u]) => u === "mg" && v[k] != null).map(([k, l]) => `<span>${l} <b>${txt(val(v[k], q))} mg</b></span>`).join("");
    return `<div style="grid-column:1/-1;display:grid;gap:10px">
      <span class="tag ${gc}">${gl} · ${f.src}</span><h3 class="${gc}" style="color:var(--c)">${f.name}</h3>
      <div class="g2"><div>${e}</div><div class="mac"></div></div>
      ${min ? `<div class="stack-leg">${min}</div>` : ""}
      ${f.rows.length ? `<div class="tbl"><table><thead><tr><th>Nutriment</th><th>Teneur pour 100 g</th><th>Analyse</th></tr></thead><tbody>${f.rows.map(([a, b, c]) => `<tr><th>${a}</th><td>${b}</td><td>${c}</td></tr>`).join("")}</tbody></table></div>` : ""}
      ${f.note ? `<div class="note"><span>${f.note}</span></div>` : ""}</div>`;
  }
  function showFiche(el, f, q) {
    el.className = el.id === "cmp-detail" ? "card" : "panel " + G[f.g][1];
    el.innerHTML = fiche(f, q);
    const m = el.querySelector(".mac"), v = f.v;
    const rows = MACRO.filter(([k]) => v[k] != null).map(([k, l, c]) => ({ label: l, v: val(v[k], q), cls: c }));
    if (rows.length) hbars(m, rows, { max: q, unit: "g" }); else m.innerHTML = `<p style="color:var(--muted)">Macronutriments non donnés.</p>`;
  }

  // Puces par groupe : un état par panneau (aliment choisi)
  function chips(chipsEl, panelEl, ids) {
    const list = ids.map(id => FOODS.find(f => f.id === id));
    chipsEl.className = "chip-groups";
    chipsEl.innerHTML = `<div class="cg">${list.map(f => `<button type="button" class="chip ${G[f.g][1]}" data-id="${f.id}" aria-pressed="false">${f.name}</button>`).join("")}</div>`;
    chipsEl.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chipsEl).forEach(x => x.setAttribute("aria-pressed", x === b));
      showFiche(panelEl, FOODS.find(f => f.id === b.dataset.id), 100);
    });
  }
  chips($("#sucres-chips"), $("#sucres-panel"), ["sucre-blanc", "sucre-roux", "confiture", "miel", "choc-noir", "choc-lait", "choc-blanc", "cacao", "biscuits"]);
  chips($("#mg-chips"), $("#mg-panel"), ["creme", "beurre"]);
  chips($("#lai-chips"), $("#lai-panel"), ["lait", "from-frais", "from-molle", "from-dure"]);
  chips($("#fl-chips"), $("#fl-panel"), ["fruits", "legumes", "chataigne"]);
  chips($("#cer-chips"), $("#cer-panel"), ["semoule-crue", "semoule-cuite", "pates-crues", "pates-cuites", "farine-blanche", "farine-complete", "riz", "mais", "avoine", "seigle", "quinoa-cru", "quinoa-cuit", "pain-mie", "pain-azyme"]);
  chips($("#tub-chips"), $("#tub-panel"), ["pdt", "patate-douce", "manioc"]);
  chips($("#vpo-chips"), $("#vpo-panel"), ["volaille-crue", "volaille-cuite", "gibier", "poisson-maigre", "poisson-demi", "poisson-gras", "calamar", "crevette", "oeuf"]);

  /* ---------------- Tableau comparatif générique ----------------
     cols = [[libellé, unité, famille]] ; rows = [[nom, valeurs…]] ; un choix de colonne pilote barres + surlignage */
  function table(el, cols, rows, def, opts = {}) {
    const num = cols.map((c, i) => [c, i]).filter(([c]) => !c[3]);
    el.innerHTML = `<div class="seg-c"></div><div class="bars-c"></div><div class="tbl"><table></table></div>${opts.foot ? `<p style="font-size:.85rem;color:var(--muted)">${opts.foot}</p>` : ""}`;
    const draw = i => {
      const [l, u, c] = cols[i];
      const r = rows.filter(r => r[i + 1] != null && typeof r[i + 1] !== "string");
      hbars(el.querySelector(".bars-c"), r.map(r => ({ label: r[0], v: r[i + 1], cls: c, sel: r[0] === "Moyenne" })), { max: opts.max && opts.max[i] || undefined, unit: u });
      el.querySelector("table").innerHTML = `<thead><tr><th></th>${cols.map((c, j) => `<th style="${j === i ? "color:var(--fg)" : ""}">${c[0]}${c[1] ? " (" + c[1] + ")" : ""}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr${r[0] === "Moyenne" ? ' style="font-weight:700"' : ""}><th>${r[0]}</th>${r.slice(1).map((x, j) => `<td class="n" style="${j === i ? "background:var(--s);font-weight:700" : ""}">${x == null ? "–" : typeof x === "string" ? x : fmt(x, 2)}</td>`).join("")}</tr>`).join("")}</tbody>`;
    };
    seg(el.querySelector(".seg-c"), num.map(([c, i]) => ({ id: String(i), label: c[0], cls: c[2] })), String(def), i => draw(+i));
  }
  table($("#huiles"), [["Palmitique", "%", "bad-f"], ["Stéarique", "%", "bad-f"], ["Oléique", "%", "lip"], ["Linoléique", "%", "glu"], ["α-linolénique", "%", "glu"]],
    [["Arachide", 9, 3, 52, 25, 0.2], ["Argan", 12, 3, 45, 33, 0.1], ["Olive vierge", 10, 3, 70, 6, 0.6], ["Colza", 4, 1.5, 54, 18, 8.5], ["Germe de maïs", 10, 1.7, 23, 53, 0.1], ["Noisette", 5.5, 2.5, 76, 12, 0.5], ["Noix", 7, 3, 16, 54, 11], ["Pépins de raisin", 7, 4, 18, 66, 0.3], ["Sésame", 8, 5.5, 38.5, 40, 0.3], ["Tournesol", 6, 3.5, 26, 57, 0.1], ["Soja", 10, 4, 22, 51.5, 7]], 2,
    { foot: "Saturés : palmitique et stéarique. Mono-insaturé : oléique. Polyinsaturés : linoléique (oméga-6) et α-linolénique (oméga-3). Même tableau que dans le cours Matières grasses." });
  table($("#marg"), [["Lipides", "g", "lip"], ["Saturés", "g", "bad-f"], ["Mono-insaturés", "g", "lip"], ["Polyinsaturés", "g", "glu"], ["Vitamine E", "mg", "vit"], ["Linoléique", "g", "glu"], ["α-linolénique", "g", "glu"], ["Énergie", "kJ", "ink"], ["Énergie", "kcal", "ink"]],
    MAR.map(r => [r[0].replace("Margarine ", "").replace("Matière grasse ", "MG "), ...r.slice(1)]), 0,
    { foot: "« Margarine 60 % allégée oméga 3 et 6 » : le mémo indique 55 g de lipides." });
  table($("#from"), [["Eau", "g", "eau"], ["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Cholestérol", "mg", "lip"], ["Énergie", "kcal", "ink"], ["Calcium", "mg", "min"], ["Sodium", "mg", "min"]],
    [["Frais", 75, 15, 15, 50, 200, 150, 50], ["Pâte molle", 50, 25, 25, 75, 300, [250, 550], [500, 600]], ["Pâte pressée cuite", 35, 30, 30, 110, 400, 950, 350], ["Moyenne", null, 20, 22, null, null, null, null]], 5,
    { foot: "Pâte molle : 250 mg de calcium et 500 mg de sodium à croûte moisie, 550 et 600 mg à croûte lavée. Le mémo écrit le cholestérol en g : ce sont des mg. Énergie : 800 kJ (frais et pâte molle), 1 350 kJ (pâte dure)." });
  table($("#yaourts"), [["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Glucides", "g", "glu"], ["Calcium", "mg", "min"], ["Énergie", "kJ", "ink"], ["Énergie", "kcal", "ink"]], YAO, 2);
  table($("#cremes"), [["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Glucides", "g", "glu"], ["Calcium", "mg", "min"], ["Énergie", "kJ", "ink"], ["Énergie", "kcal", "ink"]], CRE, 5);
  table($("#secs"), [["Eau", "g", "eau"], ["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Glucides", "g", "glu"], ["Énergie", "kJ", "ink"], ["Énergie", "kcal", "ink"], ["Fibres", "g", "fl"], ["Potassium", "mg", "min"], ["Magnésium", "mg", "min"], ["Calcium", "mg", "min"], ["Fer", "mg", "min"]], SEC, 5,
    { foot: "Lipides de la datte, de la pomme et de la moyenne : négligeables. Figue : moins de 1 g (placée à 1). Le mémo écrit « Fiche sèche », « Kj » pour les kcal et « g » pour Mg et Ca : ce sont des mg." });
  table($("#leg"), [["Eau", "g", "eau"], ["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Glucides", "g", "glu"], ["Dont amidon", "g", "glu"], ["Fibres", "g", "fl"], ["Énergie", "kJ", "ink"], ["Énergie", "kcal", "ink"], ["Calcium", "mg", "min"], ["Phosphore", "mg", "min"], ["Fer", "mg", "min"], ["Magnésium", "mg", "min"], ["Sodium", "mg", "min"], ["Potassium", "mg", "min"], ["Zinc", "mg", "min"], ["Cuivre", "mg", "min"], ["B1", "mg", "vit"], ["B9", "µg", "vit"]], LEG, 1,
    { foot: "Pois chiche : eau « moins de 10 g ». La ligne B9 des cinq premières légumineuses est titrée « B19 (mg) » dans le mémo ; ce sont sans doute des µg de B9." });
  table($("#grille"), [["Protéines", "g", "pro"], ["Lipides", "g", "lip"], ["Glucides", "g", "glu"], ["Fibres", "g", "fl"]], GRI, 3, { foot: "Le mémo appelle les fibres « FA »." });
  table($("#riz"), [["Indice glycémique", "", "ink"], ["Cru", "kcal", "ink"], ["Protéines crues", "g", "pro"], ["Lipides crus", "g", "lip"], ["Cuit", "kcal", "ink"], ["Protéines cuites", "g", "pro"], ["Cuisson", "", "", 1], ["Temps", "min", "", 1]],
    [["Basmati", 58, 350, 8, 0.6, 120, 2.5, "Ébullition, vapeur", "10–12"], ["Noir", 42, 350, 9, 2, 110, 2.5, "Ébullition, vapeur", "30–35"], ["Arborio", 69, 360, 9, 1, 130, 2.5, "Ébullition, risotto (ajout de liquide)", "18–20"], ["Rouge", 55, 350, 10, 2, 110, 3, "Ébullition, vapeur", "30–35"], ["Camargue", 50, 350, 8, 1.5, 120, 2.5, "Ébullition, vapeur", "20–25"], ["Brun", 50, 370, 8, 3, 120, 2.5, "Ébullition, vapeur", "40–45"]], 0);
  table($("#t45"), [["Farine blanche T45", "", "glu"], ["Farine complète T150", "", "fl"]],
    [["Eau (g)", 11, 20], ["Protéines (g)", 10, 10.5], ["Lipides (g)", 1, 1.5], ["Glucides (g)", 76, 61], ["Dont amidon (g)", 70, 59.5], ["Dont sucres simples (g)", 6, 1.5], ["Énergie (kJ)", 1510, 1250], ["Énergie (kcal)", 356, 300], ["Calcium (mg)", 17.4, 30], ["Phosphore (mg)", 117, 220], ["Sodium (mg)", 2, 4], ["Potassium (mg)", 155, 280], ["Magnésium (mg)", 25, 75], ["Fer (mg)", 1, 2], ["Vitamine B1 (mg)", 0.12, 0.26], ["Vitamine B3 (mg)", 0.9, 0.9], ["Vitamine B5 (mg)", 0.8, 0.8], ["Vitamine B6 (mg)", 0.06, 0.06], ["Vitamine E (mg)", 0.4, 0.8], ["Fibres (g) · ligne titrée « Vitamine E »", 2.5, 7]], 0,
    { foot: "Les barres comparent des unités différentes : lisez-les ligne par ligne dans le tableau. B3, B5 et B6 sont communes aux deux farines. Ce comparatif donne d’autres chiffres que la fiche de la farine blanche (eau 15 g, 1 400 kJ, 330 kcal, B3 < 0,1 mg)." });

  /* ---------------- Types de farine ---------------- */
  const FAR = [["45", "Moins de 0,5", 68, [70, 75], 32, [25, 30], "Pâtisseries, gâteaux, farine de gruaux, pain de gruaux"], ["55", "0,5 à 0,6", 74, [75, 80], 26, [20, 25], "Baguette, pain de campagne, biscottes, panification fine, biscuiterie industrielle"], ["65", "0,62 à 0,75", 78, [78, 83], 22, [17, 22], "Biscuiterie, pain tradition, pains spéciaux : pain de mie, pain brioché, pain viennois"], ["80", "0,75 à 0,9", 82, [82, 86], 18, [14, 18], "Farine bise, pain bis"], ["110", "1 à 1,2", 85, [87, 90], 15, [10, 15], "Farine semi-complète, pain semi-complet"], ["150", "Plus de 1,4", 94, [90, 98], 6, [2, 10], "Farine intégrale, farine complète, pain intégral, pain complet"]];
  let far = "55";
  function farDraw() {
    const r = FAR.find(x => x[0] === far);
    $("#far-stack").innerHTML = `<div class="glu" style="flex-basis:${r[2]}%">Extraction</div><div style="flex-basis:${r[4]}%;background:var(--bg);color:var(--muted)">Blutage</div>`;
    $("#far-leg").innerHTML = `<span>Extraction <b>${r[2]} %</b> [${r[3].join("–")}]</span><span>Blutage <b>${r[4]} %</b> [${r[5].join("–")}]</span>`;
    $("#far-out").innerHTML = `<span class="tag" data-nohide>Type ${r[0]}</span><p><b>Cendres</b> : ${r[1]} %</p><p><b>Utilisations</b> : ${r[6]}</p>`;
    $("#far-tbl").innerHTML = `<thead><tr><th>Type</th><th>Cendres (%)</th><th>Extraction (%)</th><th>Blutage (%)</th><th>Utilisations</th></tr></thead><tbody>${FAR.map(x => `<tr class="${x[0] === far ? "sel glu" : ""}" data-id="${x[0]}" style="cursor:pointer"><th data-nohide>${x[0]}</th><td>${x[1]}</td><td class="n">${x[2]} [${x[3].join("–")}]</td><td class="n">${x[4]} [${x[5].join("–")}]</td><td>${x[6]}</td></tr>`).join("")}</tbody>`;
  }
  const setFar = seg($("#far-seg"), FAR.map(x => ({ id: x[0], label: "T" + x[0], cls: "glu" })), far, v => { far = v; farDraw(); });
  $("#far-tbl").addEventListener("click", e => { const t = e.target.closest("tr[data-id]"); if (t) setFar(t.dataset.id); });

  /* ---------------- Poulet et poissons ---------------- */
  hbars($("#poulet-bars"), [["Filet", 1], ["Filet avec la peau", [4, 6]], ["Cuisse sans la peau", 1.5], ["Haut de cuisse", 4], ["Pilon", 9], ["Aile", 11], ["Cuisse avec la peau", 12], ["Peau seule", 50]].map(([label, v]) => ({ label, v, cls: "pro" })), { max: 50, unit: "%" });
  const PC = { tres: ["Très maigres", "Moins de 1 g de lipides", null, null], maigre: ["Maigres", "1 à 3 g de lipides", "Environ 80 % d’eau", "100 kcal (400 kJ)"], demi: ["Demi-gras", "3 à 10 g de lipides", "70 à 75 % d’eau", "120 kcal (500 kJ)"], gras: ["Gras", "Plus de 10 g de lipides", "Environ 65 % d’eau", "200 kcal (800 kJ)"] };
  seg($("#pois-seg"), Object.entries(PC).map(([id, p]) => ({ id, label: p[0], cls: "eau" })), "maigre", k => {
    const [n, l, e, en] = PC[k];
    $("#pois-out").innerHTML = `<span class="tag">Poissons ${n.toLowerCase()}</span><div class="big eau" style="font-size:1.5rem">${l}</div><p>${[e, en ? "Énergie : " + en : null].filter(Boolean).join(" · ") || "Le mémo ne donne ni l’eau ni l’énergie de cette catégorie."}</p><p>Protéines : 19 g pour tous. Plus les lipides montent, plus l’eau baisse et l’énergie augmente.</p>`;
  });

  /* ---------------- Comparer : un seul état ---------------- */
  const cmp = { nut: "kcal", g: "cer", id: "pates-cuites", q: 100 };
  function cmpDraw() {
    const [k, l, u, c] = NUT.find(n => n[0] === cmp.nut);
    const list = FOODS.filter(f => (cmp.g === "all" || f.g === cmp.g) && f.v[k] != null).sort((a, b) => [].concat(b.v[k]).pop() - [].concat(a.v[k]).pop());
    hbars($("#cmp-bars"), list.map(f => ({ id: f.id, label: f.name, sub: cmp.g === "all" ? G[f.g][0] : "", v: f.v[k], cls: G[f.g][1], sel: f.id === cmp.id })), { unit: u });
    $$("#cmp-bars .hbar").forEach(h => h.style.cursor = "pointer");
    if (!list.length) $("#cmp-bars").innerHTML = `<p style="color:var(--muted)">Aucune valeur de ${l.toLowerCase()} dans ce groupe.</p>`;
    const f = FOODS.find(x => x.id === cmp.id);
    showFiche($("#cmp-detail"), f, cmp.q);
    $("#cmp-q-o").textContent = `${cmp.q} g de ${f.name.toLowerCase()}`;
  }
  $("#cmp-q").addEventListener("input", e => { cmp.q = +e.target.value; cmpDraw(); });
  seg($("#cmp-nut"), NUT.map(([id, l, , c]) => ({ id, label: l, cls: c })), cmp.nut, v => { cmp.nut = v; cmpDraw(); });
  seg($("#cmp-grp"), [{ id: "all", label: "Tous", cls: "ink" }].concat(Object.entries(G).map(([id, g]) => ({ id, label: g[0], cls: g[1] }))), cmp.g, v => { cmp.g = v; cmpDraw(); });
  $("#cmp-bars").addEventListener("click", e => { const h = e.target.closest(".hbar"); if (h && h.dataset.id) { cmp.id = h.dataset.id; cmpDraw(); $("#cmp-detail").scrollIntoView({ block: "nearest", behavior: "smooth" }); } });
})();
