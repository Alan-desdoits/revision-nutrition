/* Fiches bristol : Hors périmètre et orientation (source : cours/hors-perimetre) */
Bristol.cours("hors-perimetre", [
  {
    onglet: "Le périmètre", titre: "Le périmètre du conseil",
    notes: [
      [
        { h: "Le cadre", p: ["Un cadre de santé <b>ordinaire</b> : personnes sans pathologie diagnostiquée. Une frontière <b>juridique</b>."] },
        { h: "Je peux", p: ["Établir le profil alimentaire, recommander, co-construire plan et menus, accompagner un changement, éduquer, <b>repérer, alerter, orienter</b>."] },
        { h: "Je ne peux pas", p: ["Poser un diagnostic, proposer une prise en charge thérapeutique, interférer avec un traitement, poursuivre un suivi inadapté (faute professionnelle)."] },
      ],
      [
        { h: "Conseil ou orientation ?", p: ["Inconforts légers, ponctuels, non spécifiques : <b>conseil</b>.", "Symptômes persistants, marqués, évolutifs : <b>orientation</b>.", "On juge la durée, l’intensité, l’impact."] },
        { h: "Exemples", p: ["Manger équilibré, horaires décalés, poids après grossesse : dans le périmètre.", "Fatigue chronique + perte de poids, cholestérol, grossesse en cours, soif excessive, peur des aliments : hors périmètre."] },
      ],
    ],
    carte: { centre: "Le périmètre", branches: [
      ["Cadre", ["Santé ordinaire", "Frontière juridique"]],
      ["Je peux", ["Conseiller, éduquer", "Repérer, orienter"]],
      ["Je ne peux pas", ["Diagnostiquer", "Traiter", "Toucher au traitement"]],
      ["Critères", ["Durée", "Intensité, impact"]],
    ] },
  },
  {
    onglet: "Signaux d’alerte", titre: "Les signaux d’alerte",
    notes: [
      [
        { h: "Le principe", p: ["Un signe isolé ne prouve rien : la <b>répétition</b>, l’<b>accumulation</b> ou l’<b>incohérence</b> doivent alerter."] },
        { h: "Sept types de signaux", p: ["Symptômes physiques durables (fatigue, digestion).", "Instabilité du poids.", "Habitudes trop rigides (suppressions, jeûnes).", "Lien psycho-alimentaire (peur, culpabilité, obsession).", "Incohérences du discours.", "Cadre médical (suivi, analyses anormales).", "Objectifs médicaux (« baisser mon cholestérol »)."] },
      ],
      [
        { h: "Faire", p: ["Informer <b>sans alarmer</b>, énoncer des faits observables, respecter le rythme de la personne, justifier l’orientation."] },
        { h: "Ne pas faire", p: ["Ignorer des signaux clairs, laisser la personne les ignorer, poursuivre un accompagnement inadapté."] },
      ],
    ],
    carte: { centre: "Signaux d’alerte", branches: [
      ["Alerter si", ["Répétition", "Accumulation", "Incohérence"]],
      ["Signaux", ["Physiques, poids", "Rigidité, peur", "Objectifs médicaux"]],
      ["Faire", ["Informer sans alarmer", "Justifier"]],
      ["Ne pas faire", ["Ignorer", "Continuer seul"]],
    ] },
  },
  {
    onglet: "Orienter", titre: "Orienter",
    notes: [
      [
        { h: "Le principe", p: ["Une orientation claire, concrète, rassurante : nommer des options, donner des contacts, expliquer pourquoi. <b>Jamais un jugement ni un abandon.</b>", "Le <b>médecin traitant</b> reste le pivot du parcours de soins."] },
        { h: "Vers qui", p: ["Poids qui bouge vite, fatigue : <b>médecin généraliste</b>.", "Troubles digestifs persistants : <b>gastro-entérologue</b>.", "Restrictions excessives : médecin + diététicien.", "Culpabilité, obsession : <b>psychologue ou psychiatre</b>."] },
      ],
      [
        { h: "Suite", p: ["Allergies, intolérances : <b>allergologue</b>.", "Maladie chronique : diététicien spécialisé.", "Grossesse : gynécologue-obstétricien + diététicien.", "Sport intensif : médecin du sport + diététicien.", "Personne âgée fragile : gériatre + diététicien.", "Enfant avec TCA : pédiatre + diététicien pédiatrique."] },
      ],
    ],
    carte: { centre: "Orienter", branches: [
      ["Médecin", ["Pivot du parcours", "Poids, fatigue"]],
      ["Spécialistes", ["Digestion : gastro", "Allergie : allergologue", "TCA : psychologue"]],
      ["Publics", ["Grossesse : gynéco", "Âgé : gériatre", "Enfant : pédiatre"]],
      ["Posture", ["Jamais un abandon"]],
    ] },
  },
  {
    onglet: "Profils spécifiques", titre: "Les profils spécifiques",
    notes: [
      [
        { h: "Grossesse", p: ["Risques : diabète gestationnel, hypertension, prééclampsie ; macrosomie. Orienter (médecin, sage-femme, diététicien)."] },
        { h: "IMC = poids ÷ taille²", p: ["Normal <b>18,5 à 24,99</b> · surpoids <b>25 à 29,99</b> · obésité <b>30 et plus</b> (stade 3 : plus de 40).", "Un adulte sur deux concerné en France. Seul indice validé par l’OMS, mais ignore l’activité physique."] },
        { h: "Diabète", p: ["Type 1 : manque d’insuline. Type 2 : résistance à l’insuline.", "Signes : <b>soif excessive</b>, urines fréquentes, fatigue, vision floue : orienter."] },
      ],
      [
        { h: "TCA", p: ["Anorexie, boulimie (compensations), hyperphagie (sans compensation), PICA, mérycisme, ARFID, orthorexie.", "Ne pas engager de suivi : orienter."] },
        { h: "Allergie ou intolérance ?", p: ["<b>Allergie</b> : réaction immunitaire, même des traces ; choc anaphylactique.", "<b>Intolérance</b> : digestive (lactase), dose-dépendante, rarement dangereuse."] },
      ],
    ],
    carte: { centre: "Profils", branches: [
      ["IMC", ["Normal <b>18,5 à 25</b>", "Surpoids <b>25 à 30</b>", "Obésité <b>30</b> et plus"]],
      ["Diabète", ["Type 1, type 2", "Soif, urines"]],
      ["TCA", ["Anorexie, boulimie", "Hyperphagie, orthorexie"]],
      ["Allergie", ["Immunitaire", "Intolérance : digestive"]],
    ] },
  },
]);
