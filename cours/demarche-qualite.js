/* ==========================================================================
   Cours : Démarche qualité et organisation de la sécurité sanitaire en restauration collective
   Source : documents/finis/Démarche qualité et organisation de la sécurité sanitaire en restauration collective.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer } = window.Fiches;

  /* ---------------- Objectifs ---------------- */
  const O = (name, ex) => ({ name, rows: [["En nutrition", ex]] });
  explorer($("#obj-chips"), $("#obj-panel"), [{ cls: "ink", label: "", items: [
    O("Satisfaire durablement clients et usagers", "Proposer des repas équilibrés et savoureux dans une cantine scolaire, en tenant compte des besoins des enfants et des régimes spécifiques (allergies, végétarisme…)."),
    O("Améliorer l’organisation de son activité", "Suivre rigoureusement les stocks de denrées pour éviter les ruptures d’ingrédients et mieux planifier les menus."),
    O("Réduire les non-conformités et leurs coûts", "Les « coûts de non-qualité ». Prévenir une rupture de la chaîne du froid des produits frais : moins de pertes financières et de risques sanitaires."),
    O("Favoriser l’engagement des collaborateurs", "Former le personnel aux bonnes pratiques d’hygiène et aux recommandations nutritionnelles pour qu’il se sente acteur de la qualité."),
    O("S’adapter à son écosystème", "Intégrer davantage de produits locaux, bio ou de saison, selon les attentes de la société et les politiques de santé publique.")
  ] }]);

  /* ---------------- Bénéfices ---------------- */
  const B = {
    int: [["Limiter les erreurs", "Des outils de suivi et de contrôle réduisent les erreurs coûteuses : mauvaise gestion des stocks, contaminations croisées, erreurs d’étiquetage nutritionnel."],
      ["Gagner en productivité", "Des processus optimisés (plan de nettoyage structuré, traçabilité numérique) font gagner du temps au quotidien."],
      ["Baisser les coûts", "Moins d’erreurs, moins de gaspillage, des achats optimisés : aussi plus de durabilité et de responsabilité sociale."],
      ["Fidéliser les collaborateurs", "Quand la qualité est valorisée, cuisiniers, diététiciens et responsables qualité se sentent reconnus et motivés."],
      ["Répondre à la réglementation", "Sécurité alimentaire, traçabilité, allergènes, équilibre : se conformer, anticiper les évolutions, limiter les sanctions."]],
    ext: [["Des produits et services fiables", "Maîtrise sanitaire et qualité régulière : des repas sûrs, aux valeurs nutritionnelles annoncées, d’une prestation constante."],
      ["Une meilleure réputation", "Reconnaissance des autorités sanitaires, visibilité auprès des consommateurs, crédibilité avec les partenaires (écoles, maisons de retraite, établissements de santé)."],
      ["Attirer, rassurer, fidéliser", "Sécurité, régimes respectés, goût et variété : patients, élèves et convives sont rassurés et fidèles."]]
  };
  seg($("#ben-seg"), [{ id: "int", label: "Apports internes", cls: "ink" }, { id: "ext", label: "Apports externes", cls: "good-f" }], "int", k => {
    $("#ben-cards").innerHTML = B[k].map(([h, t]) => `<div class="card ${k === "ext" ? "good" : "tint ink"}"><h3>${h}</h3><p>${t}</p></div>`).join("");
  });

  /* ---------------- 7 principes + exercice ---------------- */
  const PR = [
    ["L’orientation client", "Mettre les besoins des usagers au cœur des décisions : produits sûrs et équilibrés, adaptés aux régimes (allergies, diabète, alimentation infantile ou senior), étiquetage nutritionnel clair.", "Un étiquetage nutritionnel clair et des produits adaptés aux régimes spécifiques."],
    ["Le leadership", "La direction impulse une culture qualité : montrer l’exemple, appliquer les règles d’hygiène, encourager la formation continue, valoriser les bonnes pratiques.", "Le chef montre l’exemple en appliquant lui-même les règles d’hygiène."],
    ["L’implication du personnel", "Chaque collaborateur compte : respect des protocoles, adaptation des menus, possibilité de signaler un dysfonctionnement et de proposer des améliorations.", "Un agent signale un dysfonctionnement et propose une amélioration."],
    ["L’approche processus", "De l’achat à la distribution, chaque étape dépend des autres : une défaillance à un seul niveau compromet la qualité globale.", "Une défaillance au stockage compromet tout le repas : on regarde la chaîne entière."],
    ["L’amélioration continue", "Évaluer régulièrement et adapter les pratiques : produits locaux, moins de gaspillage, critères nutritionnels renforcés.", "Évaluer régulièrement les pratiques pour réduire le gaspillage."],
    ["La décision fondée sur des preuves", "Des données fiables et mesurables (audits, indicateurs, retours des usagers) pour ajuster menus et pratiques sur des faits.", "Ajuster les menus d’après les audits et les indicateurs, pas d’après une impression."],
    ["Les relations avec les parties intéressées", "Fournisseurs, distributeurs, organismes de contrôle, consommateurs en partenariat : producteurs locaux pour la traçabilité, dialogue avec familles et patients.", "Travailler avec des producteurs locaux et dialoguer avec les familles."]
  ];
  explorer($("#pr-chips"), $("#pr-panel"), [{ cls: "ink", label: "", items: PR.map(([n, t]) => ({ name: n, rows: [["En nutrition", t]] })) }]);
  // Exercice : chaque situation (exemple du cours) à relier à son principe ; ordre mélangé fixe
  const ORDER = [3, 0, 5, 2, 6, 1, 4];
  const ans = {};
  function quiz() {
    const done = Object.keys(ans).length, ok = ORDER.filter(i => +ans[i] === i).length;
    $("#pr-quiz").innerHTML = `<span class="tag" data-nohide>${done ? `${ok} sur 7 bien reliées` : "Choisissez le principe de chaque situation"}</span>` + ORDER.map(i => {
      const a = ans[i], good = a != null && +a === i;
      return `<div style="display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><div style="flex:1;min-width:200px"><b style="display:block">${PR[i][2]}</b>${a != null ? `<small style="color:${good ? "var(--good)" : "var(--bad)"}">${good ? "Juste" : "Non : " + PR[i][0].toLowerCase()}</small>` : ""}</div><div class="inp" style="flex:none;width:min(100%,260px)"><select data-i="${i}" aria-label="Principe">${["<option value=''>Choisir…</option>"].concat(PR.map((p, j) => `<option value="${j}" ${a != null && +a === j ? "selected" : ""}>${p[0]}</option>`)).join("")}</select></div></div>`;
    }).join("");
  }
  $("#pr-quiz").addEventListener("change", e => { const s = e.target.closest("select[data-i]"); if (s) { if (s.value === "") delete ans[s.dataset.i]; else ans[s.dataset.i] = s.value; quiz(); } });
  quiz();

  /* ---------------- 7 étapes de mise en place ---------------- */
  const MQ = [
    ["Identifier le pilote du projet", "Une personne ou une équipe responsable du déploiement : un collaborateur interne formé ou un consultant externe. En restauration collective, souvent le responsable qualité ou le chef de production."],
    ["Analyser forces et faiblesses", "Un diagnostic initial dresse un état des lieux précis et oriente les priorités d’action."],
    ["Définir une politique qualité", "Formalisée par la direction et alignée sur la stratégie : repas équilibrés selon les recommandations officielles, produits locaux et de saison, moins de gaspillage…"],
    ["Mettre en place les processus", "Des procédures claires : contrôle des températures, plan de nettoyage et de désinfection, traçabilité, gestion des stocks, enquêtes de satisfaction. C’est la base du système qualité."],
    ["Former et sensibiliser le personnel", "Bonnes pratiques d’hygiène, maîtrise des risques (HACCP), et dimension nutritionnelle des repas (équilibre, besoins des publics fragiles)."],
    ["Réaliser un audit interne", "Vérifier la conformité aux objectifs, par un responsable interne ou un organisme externe : grammages, procédures d’hygiène, satisfaction des usagers."],
    ["Ajuster et améliorer en continu", "Audit et retours des usagers guident les ajustements : corrections immédiates (suivi des DLC, communication interne) ou structurelles (matériel de conservation, plan de formation)."]
  ];
  let mq = 0;
  function mqDraw() {
    $("#mq-bar").innerHTML = MQ.map((m, i) => `<div class="${i <= mq ? "good-f" : "ink"}" style="flex-basis:${100 / 7}%;cursor:pointer;${i === mq ? "background:var(--good);color:#fff" : ""}" data-i="${i}">${i + 1}</div>`).join("");
    $("#mq-out").innerHTML = `<span class="tag" data-nohide>Étape ${mq + 1} sur 7</span><h3>${MQ[mq][0]}</h3><p>${MQ[mq][1]}</p>`;
    $("#mq-prev").disabled = mq === 0; $("#mq-next").disabled = mq === 6;
  }
  $("#mq-bar").addEventListener("click", e => { const d = e.target.closest("[data-i]"); if (d) { mq = +d.dataset.i; mqDraw(); } });
  $("#mq-prev").addEventListener("click", () => { if (mq > 0) { mq--; mqDraw(); } });
  $("#mq-next").addEventListener("click", () => { if (mq < 6) { mq++; mqDraw(); } });
  mqDraw();
})();
