/* ==========================================================================
   Cours : Sécurité sanitaire et TIAC : prévention et gestion professionnelle
   Source : documents/finis/Sécurité sanitaire et TIAC.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, hbars, fmt } = window.Fiches;

  /* ---------------- Agents ---------------- */
  const AG = [
    { name: "Salmonella", al: ["oeufs", "volaille", "viande", "laitiers"], sy: ["diarrhee", "fievre", "vomissements"],
      rows: [["Fréquence", "L’agent le plus souvent confirmé lors des TIAC en France."], ["Aliments", "Surtout œufs, volaille, viande ; parfois certains produits laitiers."], ["Symptômes", "Diarrhées, douleurs abdominales, fièvre, vomissements."], ["Gravité", "Les formes graves peuvent donner une septicémie, surtout chez les personnes fragiles."]] },
    { name: "Staphylococcus aureus", al: ["charcuterie", "laitiers", "patisserie"], sy: ["vomissements"],
      rows: [["Mécanisme", "Produit une toxine : intoxication rapide."], ["Aliments", "Aliments manipulés puis gardés à température ambiante : charcuteries, produits laitiers, pâtisseries à la crème."], ["Délai", "1 à 6 heures après l’ingestion."], ["Symptômes", "Vomissements intenses, crampes abdominales, parfois diarrhée."]] },
    { name: "Clostridium perfringens", al: ["viande"], sy: ["diarrhee"],
      rows: [["Origine", "Le sol et l’intestin des animaux."], ["Aliments", "Viandes cuites mal refroidies ou gardées à une température inadéquate."], ["Délai", "8 à 24 heures après le repas : la toxine est produite dans l’intestin."], ["Symptômes", "Diarrhées et douleurs abdominales ; évolution en général bénigne et courte."]] },
    { name: "Bacillus cereus", al: ["feculents"], sy: ["vomissements", "diarrhee"],
      rows: [["Aliments", "Céréales, riz, plats à base de féculents."], ["Deux formes", "Émétique : vomissements rapides après l’ingestion. Diarrhéique : diarrhées et douleurs abdominales plusieurs heures après le repas."]] }
  ];
  explorer($("#ag-chips"), $("#ag-panel"), [{ cls: "bad-f", label: "", items: AG.map(a => ({ name: a.name, rows: a.rows })) }]);
  hbars($("#ag-bars"), [{ label: "Staphylococcus aureus", v: [1, 6] }, { label: "Clostridium perfringens", v: [8, 24] }], { max: 24, unit: "h", cls: "bad-f" });

  /* ---------------- Enquête : aliment + symptôme -> agents compatibles ---------------- */
  const AL = [["", "Tous les aliments"], ["oeufs", "Œufs"], ["volaille", "Volaille"], ["viande", "Viande, viande cuite mal refroidie"], ["laitiers", "Produits laitiers"], ["charcuterie", "Charcuterie"], ["patisserie", "Pâtisserie à la crème"], ["feculents", "Riz, céréales, féculents"]];
  const SY = [["", "Tous les symptômes"], ["vomissements", "Vomissements"], ["diarrhee", "Diarrhées"], ["fievre", "Fièvre"]];
  $("#en-al").innerHTML = AL.map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
  $("#en-sy").innerHTML = SY.map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
  const en = { al: "feculents", sy: "vomissements" };
  $("#en-al").value = en.al; $("#en-sy").value = en.sy;
  function enDraw() {
    const m = AG.filter(a => (!en.al || a.al.includes(en.al)) && (!en.sy || a.sy.includes(en.sy)));
    $("#en-out").innerHTML = `<span class="tag">Agents compatibles d’après le cours</span>${m.length ? `<div class="pills bad-f">${m.map(a => `<span><b>${a.name}</b></span>`).join("")}</div>` : "<p>Aucun des quatre agents du cours ne correspond.</p>"}<p style="font-size:.88rem">Seule l’enquête (échantillons, prélèvements biologiques) confirme l’agent : voir l’onglet « En cas de TIAC ».</p>`;
  }
  $("#en-al").addEventListener("change", e => { en.al = e.target.value; enDraw(); });
  $("#en-sy").addEventListener("change", e => { en.sy = e.target.value; enDraw(); });
  enDraw();

  /* ---------------- Chiffres : hospitalisations ≈ 6 % ---------------- */
  let n = 10000;
  function chDraw() {
    $("#ch-n-o").textContent = fmt(n) + " personnes";
    $("#ch-out").innerHTML = `<span class="tag">Hospitalisées ou aux urgences</span><div class="big bad-f">≈ ${fmt(Math.round(n * 0.06))} <small>personnes</small></div><p class="eq">${fmt(n)} × 6 %</p>`;
  }
  $("#ch-n").addEventListener("input", e => { n = +e.target.value; chDraw(); });
  chDraw();

  /* ---------------- Thermomètre ---------------- */
  // Repères du cours : périssables entre 0 et 4 °C ; maintien au chaud > +63 °C ; réchauffe ≥ +74 °C à cœur
  let t = 3;
  const X = v => 10 + (v + 5) / 95 * 300;
  function thDraw() {
    $("#th-t-o").textContent = t + " °C";
    let z;
    if (t < 0) z = ["eau", "En dessous de 0 °C", "Le cours fixe la conservation des denrées périssables entre 0 et 4 °C."];
    else if (t <= 4) z = ["good-f", "Conservation au froid", "Les denrées périssables se gardent entre 0 et 4 °C."];
    else if (t <= 63) z = ["bad-f", "Ni froid, ni chaud réglementaire", "Une rupture de la chaîne du froid ou du chaud favorise la multiplication rapide des germes : aliment dangereux."];
    else if (t < 74) z = ["glu", "Maintien au chaud", "Plus de +63 °C pour un plat qui n’est pas servi tout de suite. Pour réchauffer un plat, il faut atteindre au moins +74 °C à cœur."];
    else z = ["good-f", "Réchauffe suffisante", "Au moins +74 °C à cœur : le plat réchauffé est sûr (et au-dessus de +63 °C de maintien)."];
    $("#th-out").className = "result " + z[0];
    $("#th-out").innerHTML = `<span class="tag">${t} °C</span><div class="big ${z[0]}" style="font-size:1.4rem">${z[1]}</div><p>${z[2]}</p>`;
    $("#th-svg").innerHTML = `<rect x="${X(-5)}" y="18" width="${X(0) - X(-5)}" height="20" fill="var(--eau-s)"/><rect x="${X(0)}" y="18" width="${X(4) - X(0)}" height="20" fill="var(--eau-m)"/><rect x="${X(4)}" y="18" width="${X(63) - X(4)}" height="20" fill="var(--bad-s)"/><rect x="${X(63)}" y="18" width="${X(90) - X(63)}" height="20" fill="var(--glu-m)"/>
      ${[0, 4, 63, 74].map(v => `<line x1="${X(v)}" y1="14" x2="${X(v)}" y2="42" stroke="var(--fg)" stroke-width="1"/><text x="${X(v)}" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">${v}</text>`).join("")}
      <circle cx="${X(t)}" cy="28" r="7" fill="var(--fg)"/>`;
  }
  $("#th-t").addEventListener("input", e => { t = +e.target.value; thDraw(); });
  thDraw();

  /* ---------------- Publics sensibles ---------------- */
  const PUB = {
    enc: ["Femmes enceintes", "Éviter les viandes crues ou peu cuites, certaines charcuteries réfrigérées, le lait cru et les fromages au lait cru (sauf les pâtes pressées cuites), les poissons et fruits de mer crus ou fumés."],
    age: ["Personnes âgées", "Sensibilité plus élevée : limiter les produits crus ou insuffisamment cuits, surtout viandes, poissons et produits laitiers non pasteurisés."],
    m5: ["Enfants de moins de 5 ans", "Risque de complications important : viandes hachées insuffisamment cuites, lait cru, fromages au lait cru, œufs crus. Le <b>miel</b> est strictement déconseillé avant un an : risque de botulisme infantile."],
    e612: ["Enfants de 6 à 12 ans", "Recommandations proches : une cuisson complète, pas de produits au lait cru."]
  };
  seg($("#pub-seg"), Object.entries(PUB).map(([id, p]) => ({ id, label: p[0], cls: "bad-f" })), "enc", k => { $("#pub-out").innerHTML = `<h3>${PUB[k][0]}</h3><p>${PUB[k][1]}</p>`; });

  /* ---------------- Ordre de la procédure ---------------- */
  const ST = ["Alerter", "Conserver des échantillons", "Rassembler les informations"];
  const SHOW = [2, 0, 1];
  let picked = [];
  function casDraw() {
    const done = picked.length === 3, ok = done && picked.every((p, i) => p === i);
    $("#cas").innerHTML = `<div class="pills">${SHOW.map(i => `<button type="button" class="chip bad-f" data-i="${i}" ${picked.includes(i) ? "disabled" : ""} aria-pressed="${picked.includes(i)}">${ST[i]}</button>`).join("")}</div>
      <div class="chain bad-f">${picked.map((p, i) => (i ? "<i>→</i>" : "") + `<span data-nohide>${i + 1}. ${ST[p]}</span>`).join("") || `<span style="color:var(--muted)">Votre ordre apparaîtra ici</span>`}</div>
      ${done ? `<div class="result ${ok ? "good-f" : "bad-f"}"><b>${ok ? "Juste." : "Pas tout à fait."}</b> Ordre du cours : alerter, conserver des échantillons, rassembler les informations.</div>` : ""}
      <button type="button" class="chip ink" id="cas-reset" style="align-self:flex-start">Recommencer</button>`;
  }
  $("#cas").addEventListener("click", e => {
    if (e.target.id === "cas-reset") { picked = []; casDraw(); return; }
    const b = e.target.closest("[data-i]"); if (b && !picked.includes(+b.dataset.i)) { picked.push(+b.dataset.i); casDraw(); }
  });
  casDraw();
})();
