/* ==========================================================================
   Cours : Démarche HACCP appliquée à la restauration collective
   Source : documents/finis/Démarche HACCP appliquée à la restauration collective.docx
   ========================================================================== */
(function () {
  const { $, $$, seg } = window.Fiches;

  /* ---------------- Les 7 principes (roue) ---------------- */
  const P = [
    ["Analyser les dangers", "Identifier tous les dangers qui peuvent compromettre la sécurité alimentaire, et les mesures de maîtrise : microbiologiques, physiques, chimiques, allergènes."],
    ["Déterminer les points critiques (CCP)", "Repérer les étapes où l’on peut éliminer le danger ou ramener le risque à un niveau acceptable : préparation, cuisson, stockage, transport…"],
    ["Fixer les limites critiques", "Définir les seuils à respecter pour maîtriser un CCP : température minimale de cuisson, pH maximum, taux d’humidité à ne pas dépasser."],
    ["Surveiller", "Contrôler régulièrement les CCP par des relevés, observations ou analyses programmées. Exemple : vérifier la température des chambres froides."],
    ["Prévoir les actions correctives", "Ce qu’on fait quand un CCP sort de sa limite. Exemple : un aliment qui n’a pas atteint la température de cuisson est recuit ou éliminé."],
    ["Vérifier", "Contrôler l’efficacité du système : audits internes, analyses microbiologiques, examen des registres de suivi."],
    ["Documenter", "Archiver procédures, relevés et enregistrements liés aux CCP. Ce dossier prouve, en cas de contrôle, que la sécurité est maîtrisée."]
  ];
  let pr = 0;
  function roue() {
    const cx = 170, cy = 170, R = 118, r = 40;
    $("#roue").innerHTML = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="var(--ink-soft)"/>
      <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-size="20" font-weight="800" fill="var(--ink)">7 principes</text>
      <text x="${cx}" y="${cy + 18}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-size="20" font-weight="800" fill="var(--ink)">HACCP</text>` +
      P.map((p, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / 7, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), on = i === pr;
        return `<g data-k="${i}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${on ? "var(--ink)" : "var(--card)"}" stroke="var(--ink)" stroke-width="2.5"/><text x="${x.toFixed(1)}" y="${(y + 9).toFixed(1)}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-size="26" font-weight="800" fill="${on ? "#fff" : "var(--ink)"}">${i + 1}</text></g>`;
      }).join("");
    $("#roue-out").innerHTML = `<span class="tag" data-nohide>Principe ${pr + 1} sur 7</span><h3>${P[pr][0]}</h3><p>${P[pr][1]}</p>`;
  }
  $("#roue").addEventListener("click", e => { const g = e.target.closest("[data-k]"); if (g) { pr = +g.dataset.k; roue(); } });
  roue();

  /* ---------------- Les 12 étapes : un seul état (étape courante) ---------------- */
  const PREP = [
    ["Former une équipe HACCP", "Un groupe pluridisciplinaire qui connaît les procédés de fabrication, l’hygiène et les exigences réglementaires."],
    ["Décrire le produit", "Ses caractéristiques : composition, conditionnement, durée de conservation, conditions de stockage…"],
    ["Définir l’utilisation prévue", "Comment le produit sera consommé : cuisson préalable, consommation directe, population cible…"],
    ["Élaborer le diagramme des opérations", "Représenter toutes les étapes de production, de la réception des matières premières à la livraison."],
    ["Vérifier le diagramme sur site", "Contrôler sur le terrain que le diagramme correspond aux pratiques réelles."]
  ];
  const ET = PREP.map(([h, t]) => ["prep", h, t]).concat(P.map(([h, t]) => ["prin", h, t]));
  let et = 0;
  const setPhase = seg($("#et-seg"), [{ id: "prep", label: "5 étapes préparatoires", cls: "ink" }, { id: "prin", label: "7 principes", cls: "ink" }], "prep", v => { if (ET[et][0] !== v) { et = v === "prep" ? 0 : 5; etDraw(); } });
  function etDraw() {
    const [ph, h, t] = ET[et];
    $("#et-bar").innerHTML = ET.map((e, i) => `<div class="${e[0] === "prep" ? "min" : "ink"}" style="flex-basis:${100 / 12}%;cursor:pointer;${i === et ? "background:var(--c);color:#fff" : ""}" data-i="${i}">${i + 1}</div>`).join("");
    $("#et-out").innerHTML = `<span class="tag" data-nohide>Étape ${et + 1} sur 12 · ${ph === "prep" ? "préparatoire" : "principe " + (et - 4)}</span><h3>${h}</h3><p>${t}</p>`;
    $("#et-prev").disabled = et === 0; $("#et-next").disabled = et === 11;
    if ($("#et-seg").querySelector('[aria-pressed="true"]').dataset.id !== ph) setPhase(ph);
  }
  $("#et-bar").addEventListener("click", e => { const d = e.target.closest("[data-i]"); if (d) { et = +d.dataset.i; etDraw(); } });
  $("#et-prev").addEventListener("click", () => { if (et > 0) { et--; etDraw(); } });
  $("#et-next").addEventListener("click", () => { if (et < 11) { et++; etDraw(); } });
  etDraw();

  /* ---------------- Chaîne du froid : 4 étapes ---------------- */
  const CF = {
    rec: ["Réception des marchandises", "Contrôler les températures dès la réception. L’échantillonnage par catégorie de produits au thermomètre laser est recommandé. Produit trop chaud, camion non réfrigéré, emballage détérioré : la marchandise est refusée."],
    sto: ["Stockage", "Ranger tout de suite dans l’équipement adapté (chambres froides positives ou négatives, congélateurs, réfrigérateurs), à la température du fabricant ou de la réglementation. Exemples : préparations maison ≤ 3 °C, steak haché et poisson frais ≤ 2 °C. Suivi régulier des températures obligatoire."],
    tra: ["Transformation", "Limiter les sorties de chambre froide et le temps à température ambiante, respecter les bonnes pratiques d’hygiène. Remettre vite au froid ou maintenir à la température réglementaire."],
    liv: ["Livraison", "Transport à température contrôlée (camion frigorifique, conteneurs isothermes). Vérifier les températures au départ et à l’arrivée."]
  };
  seg($("#cf-seg"), Object.entries(CF).map(([id, c], i) => ({ id, label: `${i + 1}. ${c[0].split(" ")[0]}`, cls: "eau" })), "rec", k => { $("#cf-out").innerHTML = `<span class="tag">${CF[k][0]}</span><p>${CF[k][1]}</p>`; });

  /* ---------------- Contrôle à réception ---------------- */
  const PROD = [["prep", "Préparation maison", 3], ["steak", "Steak haché", 2], ["poisson", "Poisson frais", 2]];
  $("#rc-prod").innerHTML = PROD.map(([id, l]) => `<option value="${id}">${l}</option>`).join("");
  const rc = { prod: "steak", t: 1.5, cam: "oui", emb: "ok" };
  $("#rc-prod").value = rc.prod;
  function rcDraw() {
    const [, l, max] = PROD.find(p => p[0] === rc.prod);
    $("#rc-t-o").textContent = rc.t.toLocaleString("fr-FR") + " °C";
    const why = [];
    if (rc.t > max) why.push(`produit trop chaud (${rc.t.toLocaleString("fr-FR")} °C pour ${max} °C maximum)`);
    if (rc.cam === "non") why.push("camion non réfrigéré");
    if (rc.emb === "abime") why.push("emballage détérioré");
    const ok = !why.length;
    $("#rc-out").className = "result " + (ok ? "good-f" : "bad-f");
    $("#rc-out").innerHTML = `<span class="tag">${l} · maximum ${max} °C</span><div class="big ${ok ? "good-f" : "bad-f"}" style="font-size:1.6rem">${ok ? "Accepter" : "Refuser"}</div><p>${ok ? "Livraison conforme : ranger tout de suite au froid et noter le lot, la DLC et la température." : "Non-conformité : " + why.join(", ") + ". La marchandise doit être refusée."}</p>`;
  }
  $("#rc-prod").addEventListener("change", e => { rc.prod = e.target.value; rcDraw(); });
  $("#rc-t").addEventListener("input", e => { rc.t = +e.target.value; rcDraw(); });
  seg($("#rc-cam"), [{ id: "oui", label: "Oui", cls: "good" }, { id: "non", label: "Non", cls: "bad" }], rc.cam, v => { rc.cam = v; rcDraw(); });
  seg($("#rc-emb"), [{ id: "ok", label: "Intact", cls: "good" }, { id: "abime", label: "Détérioré", cls: "bad" }], rc.emb, v => { rc.emb = v; rcDraw(); });
})();
