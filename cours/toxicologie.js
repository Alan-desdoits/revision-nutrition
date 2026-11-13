/* ==========================================================================
   Cours : Toxicologie : comprendre et prévenir les risques chimiques
   Source : documents/finis/Toxicologie - comprendre et prévenir les risques chimiques.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, fmt } = window.Fiches;
  const F = "Atkinson Hyperlegible, sans-serif", M = "IBM Plex Mono, monospace";

  /* ---------------- Passage des membranes ---------------- */
  const MB = {
    pass: ["Diffusion passive", "Non", "Avec le gradient", "Non sélectif", "Le plus courant. Du plus concentré vers le moins concentré. Les substances liposolubles, non ionisées et petites passent facilement. Rapide."],
    fac: ["Diffusion facilitée", "Non", "Avec le gradient", "Spécifique", "Pour les substances hydrophiles ou plus grosses, grâce à des protéines de la membrane (canaux, transporteurs)."],
    act: ["Transport actif", "Oui (ATP)", "Contre le gradient", "Spécifique", "Des transporteurs membranaires sélectionnent certaines substances toxiques ou médicamenteuses. Rôle majeur dans l’absorption intestinale et l’élimination rénale."],
    endo: ["Endocytose", "–", "–", "Non spécifique (pinocytose) ou ciblée (par un récepteur)", "La membrane englobe la substance dans une vésicule. Pour les macromolécules et les grosses particules ; rare pour les toxiques courants, mais en jeu pour les nanoparticules et les toxines biologiques."],
    filt: ["Filtration", "Pression hydrostatique", "–", "Petites molécules hydrosolubles", "La pression force le passage par des pores. Surtout dans les capillaires et le rein (filtration glomérulaire)."]
  };
  seg($("#mb-seg"), Object.entries(MB).map(([id, m]) => ({ id, label: m[0], cls: "ink" })), "pass", k => {
    const [n, en, gr, sel, d] = MB[k];
    $("#mb-out").innerHTML = `<h3>${n}</h3><p>${d}</p><div class="tbl"><table><tbody><tr><th>Énergie</th><td>${en}</td></tr><tr><th>Gradient</th><td>${gr}</td></tr><tr><th>Sélectivité</th><td>${sel}</td></tr></tbody></table></div>`;
  });

  /* ---------------- Voies de pénétration ---------------- */
  const VO = {
    dig: ["Digestive (orale)", "La plus fréquente au quotidien. Ingestion volontaire (médicament) ou accidentelle (résidus, polluants). La substance traverse la muqueuse intestinale, rejoint le sang puis passe en général par le foie (<b>effet de premier passage hépatique</b>), où elle peut être en partie métabolisée.", ""],
    resp: ["Respiratoire (pulmonaire)", "Grande porte d’entrée, surtout au travail ou en ville : les alvéoles offrent une très grande surface d’échange, très vascularisée, aux échanges rapides avec le sang.", "<ul><li><b>Gaz</b> : monoxyde de carbone, oxydes d’azote et de soufre, ozone.</li><li><b>Vapeurs</b> de composés volatils : benzène, solvants organiques, vapeurs de mercure.</li><li><b>Aérosols et particules</b> : silice en milieu professionnel, fumée de tabac.</li></ul><p>L’absorption dépend de la taille des particules : voir le schéma plus bas.</p>"],
    cut: ["Cutanée (transdermique)", "La peau est une barrière très efficace (thermorégulation, protection chimique, physique, biologique), grâce à la couche cornée riche en kératine. Les zones riches en follicules pileux, glandes sudoripares ou sébacées laissent passer un peu plus vite.", "<p>Certaines molécules liposolubles (solvants organiques, insecticides organophosphorés) passent en quantité suffisante pour intoxiquer, surtout liquides et en contact prolongé. Les vapeurs de solvants très volatils peuvent aussi diffuser.</p><p><b>Perméabilité accrue</b> : peau humide ou en sueur ; lésions (dermatoses) ; couche cornée altérée par des irritants (acides, bases, corrosifs).</p><p style='font-size:.85rem;color:var(--muted)'>Couches de la peau (schéma du cours) : épiderme, derme, hypoderme, puis couche musculaire ; poils et follicules pileux, glandes sudoripares et sébacées, vaisseaux, nerfs, cellules adipeuses.</p>"],
    par: ["Parentérale (injection)", "Médicaments ou toxiques injectés : intraveineuse, intramusculaire, sous-cutanée. Elle contourne les barrières naturelles : biodisponibilité rapide et complète.", ""],
    rare: ["Voies moins fréquentes", "Oculaire (muqueuses de l’œil), rectale ou vaginale (muqueuses), percutanée accidentelle (plaies, coupures, brûlures, morsures : injection directe).", ""]
  };
  seg($("#vo-seg"), Object.entries(VO).map(([id, v]) => ({ id, label: v[0].split(" (")[0], cls: "ink" })), "dig", k => { $("#vo-out").innerHTML = `<h3>${VO[k][0]}</h3><p>${VO[k][1]}</p>${VO[k][2]}`; });

  /* ---------------- Particules inhalées ---------------- */
  const PT = {
    grande: ["Grandes particules", 0, "Piégées dans la muqueuse <b>nasale</b>, éliminées par les sécrétions ou avalées vers l’intestin."],
    inter: ["Taille intermédiaire", 1, "Elles atteignent les voies inférieures (trachée, bronches, bronchioles). Remontées vers le pharynx par le mécanisme <b>mucociliaire</b> (les cils), puis crachées ou avalées ; certaines sont phagocytées par les macrophages."],
    petite: ["Petites particules", 2, "Elles peuvent traverser l’épithélium pulmonaire et atteindre la <b>circulation sanguine</b>."],
    ultra: ["Ultrafines (moteurs diesel)", 3, "Elles diffusent jusqu’aux <b>alvéoles profondes</b> et peuvent passer directement dans le sang."]
  };
  const LV = [[110, 34, "Nez"], [110, 110, "Trachée"], [80, 170, "Bronches"], [150, 215, "Alvéoles, sang"]];
  seg($("#pt-seg"), Object.entries(PT).map(([id, p]) => ({ id, label: p[0].split(" (")[0], cls: "ink" })), "grande", k => {
    const lvl = PT[k][1];
    $("#pt-svg").innerHTML = `<path d="M90 20 Q110 6 130 20 L124 50 L96 50 Z" fill="var(--ink-soft)" stroke="var(--ink)" stroke-width="1.5"/>
      <rect x="102" y="50" width="16" height="90" rx="6" fill="var(--ink-soft)" stroke="var(--ink)" stroke-width="1.5"/>
      <path d="M110 140 Q70 150 60 200 Q58 240 90 245 Q110 240 108 200 Z" fill="var(--pro-s)" stroke="var(--pro)" stroke-width="1.5"/>
      <path d="M110 140 Q150 150 162 200 Q164 240 132 245 Q112 240 112 200 Z" fill="var(--pro-s)" stroke="var(--pro)" stroke-width="1.5"/>
      ${LV.map(([x, y, l], i) => `<circle cx="${x}" cy="${y}" r="${i <= lvl ? 7 : 4}" fill="${i === lvl ? "var(--bad)" : i < lvl ? "var(--ink-m)" : "var(--line2)"}"/><text x="${i === 2 ? 8 : 172}" y="${y + 4}" font-family="${F}" font-size="12" fill="${i === lvl ? "var(--bad)" : "var(--muted)"}" font-weight="${i === lvl ? 700 : 400}">${l}</text>`).join("")}`;
    $("#pt-out").innerHTML = `<span class="tag">${PT[k][0]}</span><p>${PT[k][2]}</p>`;
  });

  /* ---------------- ADME : un état ---------------- */
  const AD = [
    ["A", "Absorption", "Du site d’entrée vers la circulation générale : la première étape pour atteindre les organes cibles.", "<ul><li>Voie digestive : dans l’intestin ; respiratoire : dans les alvéoles ; cutanée : à travers l’épiderme.</li><li>Plus facile si la molécule est <b>lipophile</b> et <b>petite</b>, et si les barrières sont <b>lésées</b> (peau, muqueuse).</li></ul>"],
    ["D", "Distribution", "Le sang transporte le xénobiotique vers les organes et tissus, de façon ni homogène ni aléatoire.", "<ul><li><b>Liposolubilité</b> : accumulation dans les tissus gras (tissu adipeux, cerveau).</li><li><b>Liaison aux protéines plasmatiques</b> (albumine) : la fraction liée est inactive et ne diffuse pas.</li><li><b>Perméabilité des membranes</b> : la barrière hémato-encéphalique filtre ce qui entre dans le tissu nerveux.</li></ul><p>Une substance peut se concentrer dans un organe cible (foie, reins) : toxicité locale accrue.</p>"],
    ["M", "Métabolisme", "La biotransformation, surtout dans le foie (aussi reins, poumons, intestin) : rendre la molécule plus <b>hydrosoluble</b> pour l’éliminer par les urines ou la bile.", "<ul><li><b>Phase I</b> : oxydation, réduction, hydrolyse, souvent par les cytochromes P450. Le métabolite est souvent plus réactif, parfois plus toxique.</li><li><b>Phase II</b> : conjugaison (acide glucuronique, sulfate, glutathion) : plus hydrophile, plus facile à excréter.</li></ul><p><b>Bioactivation</b> : certaines substances deviennent toxiques en étant métabolisées (certains solvants ou pesticides).</p>"],
    ["E", "Excrétion", "L’élimination hors de l’organisme : <b>urines</b> (reins : filtration puis réabsorption sélective) et <b>bile</b> (vers l’intestin puis les selles).", "<p>Voies secondaires, parfois les seules pour des substances persistantes :</p><ul><li>Sueur : un peu de plomb.</li><li>Salive : le mercure, qui peut revenir dans le tube digestif.</li><li>Lait maternel : substances liposolubles comme les PCB (polychlorobiphényles), risque pour le nouveau-né.</li><li>Poumons : molécules volatiles (solvants), CO₂.</li><li>Phanères (cheveux, ongles) : l’arsenic s’y dépose, indicateur d’exposition chronique.</li></ul>"]
  ];
  let ad = 0;
  function adDraw() {
    $("#adme-pipe").innerHTML = AD.map(([l, n], i) => `<button type="button" class="stn ${i === ad ? "key" : ""}" data-i="${i}" style="text-align:left;cursor:pointer;font:inherit;color:inherit"><span class="num-step" data-nohide>Étape ${i + 1}</span><h4><span style="font-family:var(--f-d);font-size:1.6rem;color:var(--ink)">${l}</span> ${n}</h4></button>`).join("");
    const [, n, d, x] = AD[ad];
    $("#adme-out").innerHTML = `<h3>${n}</h3><p>${d}</p>${x}`;
  }
  $("#adme-pipe").addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) { ad = +b.dataset.i; adDraw(); } });
  adDraw();

  /* ---------------- Demi-vie : accumulation schématique ---------------- */
  // Doses de 1 unité à chaque intervalle ; décroissance exponentielle : C × 0,5^(t / demi-vie)
  const dv = { hl: "courte", n: 6 };
  const HL = { courte: 0.5, longue: 3 };
  function dvDraw() {
    $("#dv-n-o").textContent = dv.n + " exposition" + (dv.n > 1 ? "s" : "");
    const h = HL[dv.hl], pts = [], step = 0.05, T = 10;
    let peak = 0;
    for (let t = 0; t <= T + 1e-9; t += step) {
      let c = 0;
      for (let k = 0; k < dv.n; k++) if (t >= k) c += Math.pow(0.5, (t - k) / h);
      pts.push([t, c]); peak = Math.max(peak, c);
    }
    const ymax = Math.max(2, peak) * 1.1, x = t => 30 + t / T * 280, y = c => 150 - c / ymax * 135;
    $("#dv-svg").innerHTML = `<line x1="30" y1="150" x2="312" y2="150" stroke="var(--fg)"/><line x1="30" y1="10" x2="30" y2="150" stroke="var(--fg)"/>
      ${[...Array(dv.n)].map((_, k) => `<line x1="${x(k)}" y1="150" x2="${x(k)}" y2="156" stroke="var(--vit)" stroke-width="2"/>`).join("")}
      <polyline points="${pts.map(([t, c]) => x(t).toFixed(1) + "," + y(c).toFixed(1)).join(" ")}" fill="none" stroke="var(--vit)" stroke-width="2.5"/>
      <line x1="30" y1="${y(1)}" x2="312" y2="${y(1)}" stroke="var(--line2)" stroke-dasharray="4 4"/><text x="34" y="${y(1) - 4}" font-family="${M}" font-size="9" fill="var(--muted)">UNE DOSE</text>
      <text x="312" y="166" text-anchor="end" font-family="${M}" font-size="9" fill="var(--muted)">TEMPS · un trait = une exposition</text>`;
    $("#dv-out").innerHTML = dv.hl === "longue" ? `Élimination <b>lente</b> : la concentration n’a pas le temps de redescendre entre deux expositions, elle <b>s’accumule</b> et dépasse nettement une seule dose.` : `Élimination <b>rapide</b> : la concentration redescend presque à zéro entre deux expositions, sans accumulation.`;
  }
  seg($("#dv-seg"), [{ id: "courte", label: "Demi-vie courte", cls: "vit" }, { id: "longue", label: "Demi-vie longue", cls: "vit" }], dv.hl, v => { dv.hl = v; dvDraw(); });
  $("#dv-n").addEventListener("input", e => { dv.n = +e.target.value; dvDraw(); });

  /* ---------------- Types d'effets ---------------- */
  const E = (name, d, ex) => ({ name, rows: [["Ce que c’est", d]].concat(ex ? [["Exemples", ex]] : []) });
  explorer($("#ef-chips"), $("#ef-panel"), [{ cls: "bad-f", label: "", items: [
    E("Toxicité aiguë", "Exposition brève à forte dose ; effets rapides (minutes à heures), parfois violents : nausées, convulsions, coma, décès.", "Monoxyde de carbone, ingestion massive de cyanure."),
    E("Toxicité chronique", "Exposition prolongée à faibles doses, parfois des années ; effets progressifs, insidieux, sur plusieurs systèmes (neurologique, hépatique, rénal, immunitaire).", "Plomb, benzène, solvants, pesticides."),
    E("Effets ciblés", "Un organe ou tissu préférentiel : hépatotoxicité (foie), néphrotoxicité (reins), neurotoxicité (système nerveux), cardiotoxicité (cœur), hématotoxicité (sang et moelle osseuse).", ""),
    E("Effets génotoxiques", "Le matériel génétique est altéré : mutations, cassures chromosomiques, erreurs de réplication. Malformations, maladies génétiques, cancers.", ""),
    E("Effets cancérogènes", "Favorisent l’apparition ou la progression de cellules tumorales, parfois après un long délai.", "Amiante, benzène, aflatoxines, formaldéhyde."),
    E("Reprotoxiques et perturbateurs endocriniens", "Fertilité altérée, troubles du développement embryonnaire, système hormonal déréglé. Les perturbateurs endocriniens agissent même à très faibles doses sur les récepteurs ou la synthèse des hormones.", "")
  ] }]);

  /* ---------------- Dose-effet ---------------- */
  // Abscisse : log10(dose) de -2 à 3 ; courbes reprises du schéma du cours
  const xd = l => 40 + (l + 2) / 5 * 285, ye = v => 170 - v / 100 * 155;
  const DE = {
    lin: ["Linéaire", "L’effet augmente proportionnellement à la dose.", l => (l + 2) / 5 * 100],
    seuil: ["Seuil", "Aucun effet observé sous une certaine concentration, puis l’effet monte.", l => l < -0.4 ? 1 : Math.min(97, 1 + (l + 0.4) * 28)],
    u: ["Non linéaire ou en U", "Toxique à très faibles ou très fortes doses, moins à dose intermédiaire : le cas de certains perturbateurs endocriniens.", l => l < -1.3 ? 32 + (l + 2) * 26 : l < 0.7 ? 50 - (l + 1.3) / 2 * 42 : Math.min(100, 8 + (l - 0.7) * 40)]
  };
  seg($("#de-seg"), Object.entries(DE).map(([id, d]) => ({ id, label: d[0], cls: "vit" })), "seuil", k => {
    const f = DE[k][2], pts = [];
    for (let l = -2; l <= 3.001; l += 0.05) pts.push(xd(l).toFixed(1) + "," + ye(f(l)).toFixed(1));
    $("#de-svg").innerHTML = `<line x1="40" y1="170" x2="330" y2="170" stroke="var(--fg)"/><line x1="40" y1="10" x2="40" y2="170" stroke="var(--fg)"/>
      ${[0, 50, 100].map(v => `<text x="34" y="${ye(v) + 4}" text-anchor="end" font-family="${M}" font-size="9" fill="var(--muted)">${v}</text>`).join("")}
      ${[-1, 0, 1, 2, 3].map(l => `<text x="${xd(l)}" y="184" text-anchor="middle" font-family="${M}" font-size="9" fill="var(--muted)">${[0.1, 1, 10, 100, 1000][l + 1].toLocaleString("fr-FR")}</text>`).join("")}
      <text x="40" y="8" font-family="${M}" font-size="9" fill="var(--muted)">EFFET (%)</text><text x="330" y="197" text-anchor="end" font-family="${M}" font-size="9" fill="var(--muted)">DOSE (échelle log)</text>
      <polyline points="${pts.join(" ")}" fill="none" stroke="var(--vit)" stroke-width="2.5"/>`;
    $("#de-out").innerHTML = `<span class="tag">${DE[k][0]}</span><p>${DE[k][1]}</p>`;
  });

  /* ---------------- Intoxications ---------------- */
  const I = (name, rows) => ({ name, rows });
  explorer($("#in-chips"), $("#in-panel"), [{ cls: "bad-f", label: "", items: [
    I("Alimentaires", [["Biologiques", "Bactéries (Salmonella, E. coli, Listeria), virus (Norovirus), parasites (Toxoplasma)."], ["Chimiques", "Pesticides, additifs, mycotoxines (aflatoxine des moisissures), métaux lourds."], ["Naturelles", "Plantes ou champignons toxiques (amanite phalloïde, datura), poissons toxiques (ciguatera, tétrodotoxine)."]]),
    I("Médicamenteuses", [["Surdosage", "Volontaire (tentative de suicide) ou accidentel."], ["Interactions", "Interactions médicamenteuses."], ["Marge étroite", "Médicaments à marge thérapeutique étroite : digitaliques, lithium, paracétamol."]]),
    I("Métaux lourds", [["Plomb", "Saturnisme : troubles neurologiques et hématologiques."], ["Mercure", "Atteinte neurologique et rénale."], ["Arsenic", "Cancers cutanés et digestifs."], ["Cadmium", "Atteinte osseuse et rénale."]]),
    I("Gaz", [["Monoxyde de carbone", "Très fréquent, asphyxiant."], ["Gaz irritants", "Chlore, ammoniac."], ["Toxiques industriels", "Sulfure d’hydrogène, cyanure d’hydrogène, gaz anesthésiques."]]),
    I("Drogues et psychoactifs", [["Alcool", "Intoxication aiguë ou chronique (cirrhose, encéphalopathie)."], ["Autres", "Cannabis, cocaïne, héroïne, amphétamines, ecstasy : effets neurologiques et cardiovasculaires ; nouvelles drogues de synthèse."]]),
    I("Produits industriels et domestiques", [["Solvants", "Benzène, toluène."], ["Produits ménagers", "Eau de Javel, déboucheurs, détergents : corrosions et brûlures."], ["Pesticides", "Organophosphorés (inhibition des cholinestérases), carbamates, paraquat (atteinte pulmonaire)."]])
  ] }]);
})();
