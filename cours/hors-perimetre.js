/* ==========================================================================
   Cours : Identification des profils hors périmètre et orientation
   Source : documents/finis/Identification des profils hors périmètre et orientation.docx
   ========================================================================== */
(function () {
  const { $, $$, fmt, explorer, hbars } = window.Fiches;

  /* ---------------- Dans mon périmètre ? ---------------- */
  // [situation, dans le périmètre ?, explication]
  const SCEN = [
    ["« Je veux comprendre comment manger plus équilibré au quotidien. »", true, "Exemple type de conseil nutritionnel."],
    ["« Je travaille en horaires décalés et je veux adapter mon alimentation. »", true, "Adapter l’alimentation à un rythme de vie : dans le cadre."],
    ["« Je veux stabiliser mon poids après ma grossesse. »", true, "Cité par le cours comme objectif du conseil nutritionnel."],
    ["Fatigue chronique, troubles digestifs et perte de poids involontaire.", false, "Symptômes persistants associés : orienter vers le médecin généraliste."],
    ["« Je voudrais baisser mon cholestérol. »", false, "Une attente médicale plutôt que nutritionnelle."],
    ["Enceinte de 3 mois, elle demande un suivi nutritionnel.", false, "La grossesse relève du médical ou du paramédical : médecin, sage-femme, diététicien."],
    ["Soif excessive, envies fréquentes d’uriner, vision floue.", false, "Signes évocateurs de diabète : interrompre et orienter pour un bilan."],
    ["Peur de certains aliments, culpabilité, obsession des chiffres.", false, "Possible TCA : ne pas engager de suivi, orienter (médecin, psychologue, diététicien)."]
  ];
  const answers = {};
  function scen() {
    $("#scen").innerHTML = SCEN.map(([s, ok, why], i) => {
      const a = answers[i];
      const res = a === undefined ? "" : `<p class="answer" style="color:${a === ok ? "var(--good)" : "var(--bad)"}"><b>${a === ok ? "Juste." : "Pas tout à fait."}</b> ${ok ? "Dans le périmètre" : "Hors périmètre"} : ${why}</p>`;
      return `<div class="card ${a === undefined ? "" : ok ? "good" : "bad"}" style="gap:10px"><p style="color:var(--fg);font-weight:700">${s}</p>
        <div class="seg" role="group"><button type="button" class="good" data-i="${i}" data-v="1" aria-pressed="${a === true}">Dans le périmètre</button><button type="button" class="bad" data-i="${i}" data-v="0" aria-pressed="${a === false}">Hors périmètre</button></div>${res}</div>`;
    }).join("");
    const done = Object.keys(answers).length, good = Object.entries(answers).filter(([i, v]) => SCEN[i][1] === v).length;
    $("#scen-score").textContent = done ? `${good} bonne${good > 1 ? "s" : ""} réponse${good > 1 ? "s" : ""} sur ${done}.` : "";
  }
  $("#scen").addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (b) { answers[b.dataset.i] = b.dataset.v === "1"; scen(); } });
  scen();

  /* ---------------- Signaux ---------------- */
  const S = (name, sit, ex, q) => ({ name, rows: [["Situation", sit], ["Exemples", ex], ["Question à se poser", q]] });
  explorer($("#sig-chips"), $("#sig-panel"), [{ cls: "bad-f", label: "Signaux", items: [
    S("Symptômes physiques", "Signes répétés ou durables sans cause identifiée.", "Fatigue persistante, troubles digestifs, variations de poids, sommeil ou appétit perturbés.", "Un dysfonctionnement métabolique ou digestif qui nécessite un avis médical ?"),
    S("Instabilité du poids", "Évolution rapide ou difficile à stabiliser.", "Perte soudaine inexpliquée, prise continue malgré des restrictions.", "Déséquilibre physiologique, TCA ou pathologie associée ?"),
    S("Habitudes alimentaires", "Contrôle alimentaire trop rigide.", "Suppression des glucides ou des lipides, évitements, jeûnes non suivis.", "Rapport rigide à l’alimentation, risque de carences ou de TCA ?"),
    S("Lien psycho-alimentaire", "Discours anxieux, culpabilisant, obsessionnel.", "Peur alimentaire, culpabilité, perte de contrôle, obsession des chiffres.", "Un trouble du rapport à l’alimentation avec souffrance psychologique ?"),
    S("Incohérences du discours", "Écart entre ce qui est dit et ce qui est observé.", "Minimisation des apports, difficulté à raconter les repas.", "Manque de conscience alimentaire, mécanismes de défense ?"),
    S("Cadre médical", "Données de santé mentionnées ou suggérées.", "Suivi médical en cours, antécédents, anomalies biologiques.", "Une prise en charge médicale adaptée est-elle nécessaire ?"),
    S("Objectifs formulés", "Attentes qui dépassent le conseil nutritionnel.", "« Baisser mon cholestérol », « résoudre mes troubles digestifs chroniques ».", "Une attente médicale plutôt que nutritionnelle ?")
  ] }]);

  /* ---------------- Orienter ---------------- */
  const PRO = [
    ["Amaigrissement ou prise de poids rapide, fatigue chronique", "Médecin généraliste", "Consultation globale, prescription d’examens si besoin."],
    ["Troubles digestifs persistants, ballonnements, transit", "Gastro-entérologue", "Identifier une pathologie digestive et la suivre."],
    ["Restrictions excessives ou exclusions injustifiées", "Médecin + diététicien-nutritionniste", "Exclure une pathologie puis rééquilibrer."],
    ["Culpabilité, anxiété, obsession autour de l’alimentation", "Psychologue ou psychiatre", "Repérage et accompagnement des TCA."],
    ["Intolérances ou allergies", "Allergologue", "Évaluation précise, accompagnement nutritionnel adapté."],
    ["Maladie chronique déclarée", "Diététicien spécialisé", "Suivi et adaptation du plan alimentaire."],
    ["Grossesse et allaitement", "Gynécologue-obstétricien + diététicien spécialisé", "Suivi nutritionnel complet de la mère et de l’enfant."],
    ["Sport de haut niveau, intensif ou régulier", "Médecin du sport + diététicien spécialisé", "Prévenir la dénutrition, adapter l’alimentation."],
    ["Personne âgée, perte de poids ou fragilité", "Médecin gériatre + diététicien", "Prévenir la dénutrition, adapter l’alimentation."],
    ["Enfant ou adolescent avec TCA ou croissance atypique", "Pédiatre + diététicien pédiatrique", "Accompagnement médical et alimentaire de la croissance."]
  ];
  $("#sit").innerHTML = PRO.map((p, i) => `<option value="${i}">${p[0]}</option>`).join("");
  function sit() { const [, w, r] = PRO[+$("#sit").value]; $("#sit-out").innerHTML = `<span class="tag">Vers qui orienter</span><h3 style="font-size:1.35rem">${w}</h3><p>${r}</p>`; }
  $("#sit").addEventListener("change", sit);
  sit();

  /* ---------------- IMC ---------------- */
  // Classes telles que données dans le cours
  // Le texte donne « < 16,5 : insuffisance pondérale » ; le schéma du même cours donne « maigreur < 18,5 »
  const CLASSES = [[0, 16.5, "Insuffisance pondérale", "bad-f"], [16.5, 18.5, "Maigreur (schéma du cours)", "eau"], [18.5, 25, "Corpulence normale", "good-f"], [25, 30, "Surpoids", "glu"], [30, 35, "Obésité de stade 1", "bad-f"], [35, 40, "Obésité de stade 2", "bad-f"], [40, 99, "Obésité de stade 3 (morbide)", "bad-f"]];
  function imc() {
    const p = +$("#ip").value, t = +$("#it").value;
    if (!(p > 0 && t > 0)) return;
    const v = p / (t * t), c = CLASSES.find(([a, b]) => v >= a && v < b);
    $("#imc-out").innerHTML = `<span class="tag" data-nohide>IMC = ${fmt(p)} ÷ ${fmt(t, 2)}²</span><div class="big">${fmt(v, 1)} <small>kg/m²</small></div>
      <p><b>${c[2]}</b> selon le cours.${v < 18.5 ? " Le texte du cours fixe l’insuffisance pondérale sous 16,5, son schéma place la maigreur sous 18,5." : ""}${v >= 25 ? " Orienter vers un médecin ou un diététicien-nutritionniste." : ""}</p>`;
    hbars($("#imc-bars"), CLASSES.map(([a, b, n, cls]) => ({ label: n, v: [a, Math.min(b, 45)], text: a === 0 ? "&lt; 16,5" : b === 99 ? "&gt; 40" : `${fmt(a, 1)} à ${fmt(b - 0.01, 2)}`, cls, sel: c && c[2] === n })), { max: 45 });
  }
  $$("#imc-form input").forEach(el => el.addEventListener("input", imc));
  imc();

  /* ---------------- TCA ---------------- */
  const T = (name, d) => ({ name, rows: [["Description", d]] });
  explorer($("#tca-chips"), $("#tca-panel"), [{ cls: "bad-f", label: "TCA", items: [
    T("Anorexie mentale", "« Anorexie » veut dire absence d’appétit. Restriction alimentaire pour contrôler son poids ou en perdre."),
    T("Boulimie", "Mauvaise image de soi, grandes quantités en peu de temps avec perte de contrôle, puis compensations (vomissements, laxatifs, hyperactivité, jeûne)."),
    T("Hyperphagie", "Les mêmes compulsions que la boulimie, sans compensation."),
    T("PICA", "Ingestion de choses non comestibles, inappropriée pour l’âge et hors normes culturelles."),
    T("Mérycisme", "Régurgitations répétées, parfois associé à la boulimie, avec la peur d’ingérer et de prendre du poids."),
    T("ARFID", "Avoidant and Restrictive Food Intake Disorder : évitement et restriction de la prise alimentaire, peu d’intérêt pour la nourriture."),
    T("Orthorexie", "Volonté obsessionnelle de manger sain, peur de certains aliments. Objectif : maintenir ou améliorer sa santé, ses performances.")
  ] }]);
})();
