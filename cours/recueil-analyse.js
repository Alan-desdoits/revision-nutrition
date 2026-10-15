/* ==========================================================================
   Cours : Recueil et analyse de données alimentaires
   Source : documents/finis/Recueil et analyse de données alimentaires.docx
   ========================================================================== */
(function () {
  const { $, $$, fmt, explorer } = window.Fiches;

  /* ---------------- Hormones et neurotransmetteurs ---------------- */
  const H = (name, type, txt) => ({ name, rows: [["Effet", type], ["Ce qu’il faut savoir", txt]] });
  explorer($("#horm-chips"), $("#horm-panel"), [
    { cls: "bad-f", label: "Ouvrent l’appétit", items: [
      H("Ghréline", "Orexigène : « l’hormone de la faim »", "Produite par l’estomac vide, elle déclenche la faim via l’hypothalamus. Augmente avec une restriction excessive ou le manque de sommeil ; diminue avec l’âge."),
      H("Cortisol", "Hormone du stress", "Fournit vite de l’énergie. Un stress ponctuel augmente l’appétit ; un stress chronique favorise les prises répétées et la prise de poids.")
    ] },
    { cls: "good-f", label: "Rassasient", items: [
      H("Leptine", "Anorexigène", "Produite par le tissu adipeux, elle informe le cerveau des réserves. En cas de surpoids, une <b>résistance à la leptine</b> brouille le signal de satiété."),
      H("Insuline", "Participe à la satiété", "Régule la glycémie et stimule la leptine après un repas riche en glucides."),
      H("Cholécystokinine (CCK)", "Satiété", "Produite par l’intestin, elle prévient le cerveau pendant et après le repas.")
    ] },
    { cls: "ink", label: "Plaisir et humeur", items: [
      H("Dopamine", "Récompense", "Au cœur du plaisir alimentaire, surtout avec le gras et le sucré."),
      H("Sérotonine", "Humeur et satiété", "Dite « hormone du bonheur ». Un taux bas favorise les envies, notamment sucrées.")
    ] }
  ]);

  /* ---------------- Méthodes de collecte ---------------- */
  const M = (name, def, plus, moins) => ({ name, sub: def, rows: [["Avantages", plus], ["Limites", moins]] });
  explorer($("#met-chips"), $("#met-panel"), [{ cls: "ink", label: "Méthodes", items: [
    M("Relevé de consommation", "Liste d’aliments avec leur fréquence (quotidienne, mensuelle…), parfois les quantités.", "Repère vite excès et carences ; vision globale des habitudes sur le long terme.", "Peu précis sur les quantités ; repose sur des estimations personnelles."),
    M("Carnet alimentaire", "Tout ce qui est mangé et bu, noté chaque jour sur 3 à 7 jours, idéalement avec un jour de week-end.", "Vision globale et plus fidèle ; moins d’oublis ; montre les variations semaine / week-end.", "Demande motivation et capacité d’écriture ; influence les comportements ; exige de la rigueur."),
    M("Rappel de 24 h", "La personne énumère, en entretien, tout ce qu’elle a consommé la veille : heure, lieu, état d’esprit, quantité.", "Facile à comprendre ; échange immédiat ; rapide.", "Oublis, quantités sous-estimées ; dépend de la mémoire ; peu représentatif."),
    M("Applications numériques", "Scanner des produits, analyser des repas, suivre les apports automatiquement.", "Ludique ; données plus objectives ; gain de temps.", "Accès et aisance numérique ; plats complexes difficiles ; outil à maîtriser."),
    M("Recueil qualitatif", "Un entretien bien mené sur les habitudes, préférences, contraintes, émotions.", "Donne le contexte ; prend en compte le culturel et le psychosocial.", "Pas de chiffres ; demande une relation de confiance et un bon questionnement.")
  ] }]);

  /* ---------------- Calculer un repas ---------------- */
  // Valeurs pour 100 g (CIQUAL, exemples du cours) : kcal, P, G, L
  const ITEMS = [["Riz cuit", 100, 130, 2.5, 28, 0.3], ["Poulet rôti", 150, 250 / 1.5, null, null, null], ["Pomme", 150, 52, 0.3, 14, null]];
  const portions = [100, 150, 150];
  function meal() {
    $("#meal-in").innerHTML = ITEMS.map((it, i) => `<div class="inp"><label for="m${i}">${it[0]} (g)</label><input type="range" id="m${i}" min="0" max="300" step="10" value="${portions[i]}"><span class="val" data-nohide>${portions[i]} g</span></div>`).join("");
    $$("#meal-in input").forEach((el, i) => el.addEventListener("input", () => { portions[i] = +el.value; el.nextElementSibling.textContent = el.value + " g"; mealOut(); }));
    mealOut();
  }
  function mealOut() {
    const rows = ITEMS.map((it, i) => [it[0], Math.round(it[2] * portions[i] / 100)]);
    const tot = rows.reduce((s, r) => s + r[1], 0);
    $("#meal-out").innerHTML = `<span class="tag">Apport du repas</span><div class="big">≈ ${fmt(tot)} <small>kcal</small></div>
      <div class="stack-leg">${rows.map(r => `<span>${r[0]} <b>${r[1]} kcal</b></span>`).join("")}</div>
      <p>Exemple du cours : 100 g de riz (130) + 150 g de poulet (250) + 1 pomme (80) ≈ 460 kcal. On additionne tous les aliments de la journée pour obtenir l’<b>AET</b>.</p>`;
  }
  meal();

  /* ---------------- Répartition des macronutriments ---------------- */
  const RECO = { glu: [40, 55], lip: [30, 40], pro: [10, 20] };
  function mac() {
    const g = +$("#g-glu").value || 0, l = +$("#g-lip").value || 0, p = +$("#g-pro").value || 0;
    const k = { glu: g * 4, lip: l * 9, pro: p * 4 }, tot = k.glu + k.lip + k.pro;
    if (!tot) { $("#mac-out").innerHTML = "<p>Saisissez des quantités.</p>"; return; }
    const pc = x => Math.round(k[x] / tot * 100);
    const lab = { glu: "Glucides", lip: "Lipides", pro: "Protéines" };
    $("#mac-out").innerHTML = `<span class="tag">Énergie totale</span><div class="big">${fmt(Math.round(tot))} <small>kcal</small></div>
      <div class="stack3">${["glu", "lip", "pro"].map(x => `<div class="${x}" style="flex:0 0 ${pc(x)}%">${pc(x)} %</div>`).join("")}</div>
      <ul style="margin:0;padding-left:1.1em">${["glu", "lip", "pro"].map(x => { const [a, b] = RECO[x], v = pc(x); return `<li><b>${lab[x]} ${v} %</b> : ${v < a ? "en dessous" : v > b ? "au-dessus" : "dans"} du repère ANSES (${a}–${b} %)</li>`; }).join("")}</ul>`;
  }
  $$("#mac-form input").forEach(el => el.addEventListener("input", mac));
  mac();
})();
