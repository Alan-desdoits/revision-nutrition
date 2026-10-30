/* ==========================================================================
   Cours : Les boissons
   Source : documents/finis/Les boissons.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, hbars, fmt } = window.Fiches;

  /* ---------------- Couleur des urines ---------------- */
  const URI = {
    pale: ["Jaune pâle", "var(--glu-s)", "good-f", "Reflète un bon équilibre."],
    fonce: ["Plus foncée", "var(--glu-m)", "bad-f", "Peut signaler un manque d’eau."],
    matin: ["Foncée le matin", "var(--glu-m)", "ink", "Normal : pas d’hydratation pendant la nuit et un temps de rétention plus long."]
  };
  seg($("#uri-seg"), Object.entries(URI).map(([id, u]) => ({ id, label: `<span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${u[1]};border:1px solid var(--line2);vertical-align:-1px;margin-right:6px"></span>${u[0]}`, cls: "glu" })), "pale", k => {
    const [n, , c, t] = URI[k];
    $("#uri-out").className = "result " + c;
    $("#uri-out").innerHTML = `<span class="tag">${n}</span><p>${t}</p>`;
  });

  /* ---------------- Compartiments de l'eau ---------------- */
  // Eau totale = poids × part d'eau ; intracellulaire 2/3, extracellulaire 1/3 (interstitiel 3/4, plasma 1/4)
  const cp = { poids: 70, pct: 60 };
  function cpUpdate() {
    const tot = cp.poids * cp.pct / 100, intra = tot * 2 / 3, extra = tot / 3, inter = extra * 3 / 4, plasma = extra / 4;
    $("#cp-poids-o").textContent = cp.poids + " kg";
    $("#cp-pct-o").textContent = cp.pct + " %";
    $("#cp-out").innerHTML = `<span class="tag">Eau totale</span><div class="big eau">≈ ${fmt(tot)} <small>L</small></div>
      <div class="stack3 hideable"><div class="eau" style="flex-basis:66.67%">Intracellulaire</div><div class="min" style="flex-basis:25%">Interstitiel</div><div class="pro" style="flex-basis:8.33%" title="Plasma"></div></div>
      <div class="stack-leg"><span>Intracellulaire <b>${fmt(intra)} L</b></span><span>Interstitiel <b>${fmt(inter)} L</b></span><span>Plasma <b>${fmt(plasma)} L</b></span></div>
      <p class="eq"><span data-nohide>${cp.poids} kg × ${cp.pct} %</span> ; intra <span class="num hideable">⅔</span>, extra <span class="num hideable">⅓</span> (interstitiel <span class="num hideable">¾</span>, plasma <span class="num hideable">¼</span>)</p>`;
  }
  $("#cp-poids").addEventListener("input", e => { cp.poids = +e.target.value; cpUpdate(); });
  $("#cp-pct").addEventListener("input", e => { cp.pct = +e.target.value; cpUpdate(); });
  cpUpdate();

  /* ---------------- Sodium et mouvements d'eau (schéma qualitatif) ---------------- */
  const NA = {
    eq: ["Équilibre", 52, 0, 7, "L’eau circule en permanence entre les compartiments, sans mouvement global."],
    haut: ["Sodium en hausse", 40, -1, 14, "Après un repas salé ou une boisson très sucrée ou salée, le sang est plus concentré : l’<b>eau sort des cellules</b> pour diluer le sodium. Les cellules se vident un peu et la <b>soif</b> apparaît. Ensuite, reins et hormones rétablissent l’équilibre."],
    bas: ["Sodium en baisse", 64, 1, 4, "Après trop d’eau bue : l’<b>eau entre dans les cellules</b>, qui gonflent. Parfois problématique, notamment pour les neurones."]
  };
  seg($("#na-seg"), Object.entries(NA).map(([id, n]) => ({ id, label: n[0], cls: "ink" })), "eq", k => {
    const [n, r, dir, dots, t] = NA[k];
    const na = [...Array(dots)].map((_, i) => { const a = i / dots * Math.PI * 2; return `<text x="${(160 + 118 * Math.cos(a)).toFixed(0)}" y="${(104 + 78 * Math.sin(a)).toFixed(0)}" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink)">Na⁺</text>`; }).join("");
    const arrows = dir ? [0, 1, 2, 3].map(i => {
      const a = Math.PI / 4 + i * Math.PI / 2, r1 = dir < 0 ? r + 6 : r + 34, r2 = dir < 0 ? r + 30 : r + 10;
      const x1 = 160 + r1 * Math.cos(a), y1 = 100 + r1 * Math.sin(a), x2 = 160 + r2 * Math.cos(a), y2 = 100 + r2 * Math.sin(a);
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--eau)" stroke-width="3" marker-end="url(#ar)"/>`;
    }).join("") : "";
    $("#na-svg").innerHTML = `<defs><marker id="ar" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--eau)"/></marker></defs>
      <rect x="2" y="2" width="316" height="196" rx="18" fill="var(--eau-s)"/>
      <circle cx="160" cy="100" r="${r}" fill="var(--card)" stroke="var(--eau)" stroke-width="3"/>
      <text x="160" y="105" text-anchor="middle" font-family="Atkinson Hyperlegible, sans-serif" font-size="14" font-weight="700" fill="var(--eau)">Cellule</text>
      ${na}${arrows}
      <text x="14" y="190" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">MILIEU EXTRACELLULAIRE</text>`;
    $("#na-out").innerHTML = `<span class="tag">${n}</span><p>${t}</p>`;
  });

  /* ---------------- Pertes en eau ---------------- */
  hbars($("#pertes-bars"), [
    { label: "Urines", v: [1000, 1500] },
    { label: "Respiration et peau", sub: "pertes insensibles", v: [500, 1000] },
    { label: "Selles", v: 200 }
  ], { max: 1500, unit: "mL par jour", cls: "eau" });

  /* ---------------- Besoins en eau ---------------- */
  const CTX = ["Chaleur", "Effort", "Repas salé", "Alimentation riche en protéines", "Grossesse", "Allaitement"];
  const bs = { poids: 60, ctx: new Set() };
  $("#bs-ctx").innerHTML = CTX.map((c, i) => `<button type="button" class="chip eau" data-i="${i}" aria-pressed="false">${c}</button>`).join("");
  function bsUpdate() {
    $("#bs-poids-o").textContent = bs.poids + " kg";
    const a = bs.poids * 30 / 1000, b = bs.poids * 35 / 1000;
    $$("#bs-ctx .chip").forEach(c => c.setAttribute("aria-pressed", bs.ctx.has(+c.dataset.i)));
    $("#bs-out").innerHTML = `<span class="tag">Estimation par le poids</span><div class="big eau">${fmt(a)}–${fmt(b)} <small>L par jour</small></div>
      <p class="eq">${bs.poids} kg × 30 à 35 mL</p>
      <div class="hbars hideable"><div class="hbar eau"><span class="lab">Repère boissons</span><span class="track"><span class="fill range" style="width:${(2.5 / 4.5 * 100).toFixed(1)}%;--a:60%">1,5–2,5 L</span></span></div>
      <div class="hbar eau sel"><span class="lab">Ce poids</span><span class="track"><span class="fill range" style="width:${(b / 4.5 * 100).toFixed(1)}%;--a:${(a / b * 100).toFixed(1)}%">${fmt(a)}–${fmt(b)} L</span></span></div></div>
      <p>${bs.ctx.size ? `<b>Besoins augmentés</b> : ${[...bs.ctx].map(i => CTX[i].toLowerCase()).join(", ")}. Le cours ne chiffre pas cette hausse : ajuster avec la soif et la couleur des urines.` : "Point de départ à ajuster selon la soif, les urines et le contexte."}</p>`;
  }
  $("#bs-poids").addEventListener("input", e => { bs.poids = +e.target.value; bsUpdate(); });
  $("#bs-ctx").addEventListener("click", e => { const c = e.target.closest(".chip"); if (!c) return; const i = +c.dataset.i; bs.ctx.has(i) ? bs.ctx.delete(i) : bs.ctx.add(i); bsUpdate(); });
  bsUpdate();

  /* ---------------- Lire l'étiquette d'une eau ---------------- */
  const IONS = [["res", "Résidu à sec (minéralisation)", 2500, 10, 300], ["ca", "Calcium", 600, 5, 80], ["mg", "Magnésium", 150, 1, 25], ["na", "Sodium", 1200, 1, 10], ["hco3", "Bicarbonates", 4500, 10, 300]];
  const ew = { res: 300, ca: 80, mg: 25, na: 10, hco3: 300 };
  $("#eau-form").innerHTML = IONS.map(([k, l, max, step]) => `<div class="inp"><label for="ew-${k}">${l}</label><span class="val" id="ew-${k}-o" data-nohide></span><input type="range" id="ew-${k}" min="0" max="${max}" step="${step}" value="${ew[k]}"></div>`).join("");
  function ewUpdate() {
    IONS.forEach(([k]) => $(`#ew-${k}-o`).textContent = fmt(ew[k]) + " mg/L");
    const min = ew.res < 50 ? "Très faiblement minéralisée" : ew.res < 500 ? "Faiblement minéralisée (oligo-minérale)" : ew.res <= 1500 ? "Moyennement minéralisée" : "Riche en sels minéraux";
    const tags = [], tips = [];
    if (ew.ca > 150) { tags.push("Calcique"); tips.push("Riche en calcium : peut aider ceux qui consomment peu de produits laitiers."); }
    if (ew.mg > 50) { tags.push("Magnésienne"); tips.push("Riche en magnésium : peut soulager une tendance aux crampes ou à la constipation."); }
    if (ew.hco3 > 600) { tags.push("Bicarbonatée"); tips.push("Bicarbonatée : facilite la digestion chez certains, ballonnements chez d’autres."); }
    if (ew.na < 20) tags.push("Pauvre en sodium");
    else tips.push("Pas « pauvre en sodium » : une eau sodique est à limiter en cas de régime pauvre en sel.");
    $("#eau-out").innerHTML = `<span class="tag">Minéralisation</span><div class="big min" style="font-size:1.5rem">${min}</div>
      <span class="tag">Mentions possibles</span><div class="pills min">${tags.length ? tags.map(t => `<span>${t}</span>`).join("") : `<span style="color:var(--muted)">Aucune mention particulière</span>`}</div>
      ${tips.length ? `<ul style="margin:0;padding-left:1.1em">${tips.map(t => `<li>${t}</li>`).join("")}</ul>` : `<p>Une eau pour l’hydratation de tous les jours.</p>`}`;
  }
  IONS.forEach(([k]) => $(`#ew-${k}`).addEventListener("input", e => { ew[k] = +e.target.value; ewUpdate(); }));
  ewUpdate();

  /* ---------------- Sucre des BRSA ---------------- */
  // 8 à 10 g de sucres pour 100 mL ; OMS : 50 g par jour (10 morceaux), idéal 25 g
  let vol = 330;
  function brUpdate() {
    const a = vol * 8 / 100, b = vol * 10 / 100;
    $("#br-vol-o").textContent = fmt(vol) + " mL";
    $("#br-eq").textContent = `${fmt(vol)} mL × 8 à 10 g / 100 mL`;
    $("#br-out").innerHTML = `<span class="tag">Sucres apportés</span><div class="big sug">${fmt(a, 0)}–${fmt(b, 0)} <small>g</small></div>
      <p>Soit <b>${fmt(a / 5, 0)} à ${fmt(b / 5, 0)} morceaux de sucre</b>, et ${fmt(b / 50 * 100, 0)} % de la limite OMS de 50 g par jour pour un adulte (idéal : 25 g).</p>
      <div class="hbars hideable">${[["Ce volume", [a, b], 1], ["Limite OMS", 50, 0], ["Idéal OMS", 25, 0]].map(([l, v, s]) => { const [x, y] = Array.isArray(v) ? v : [v, v]; return `<div class="hbar sug ${s ? "sel" : ""}"><span class="lab">${l}</span><span class="track"><span class="fill ${x !== y ? "range" : ""}" style="width:${Math.min(100, y / 150 * 100).toFixed(1)}%;--a:${(x / y * 100).toFixed(1)}%">${x !== y ? fmt(x, 0) + "–" + fmt(y, 0) : fmt(x, 0)} g</span></span></div>`; }).join("")}</div>`;
  }
  $("#br-vol").addEventListener("input", e => { vol = +e.target.value; brUpdate(); });
  brUpdate();

  /* ---------------- Jus, nectars, smoothies ---------------- */
  const FR = {
    jus: ["Jus 100 % pur fruit", "Des vitamines, mais très peu de fibres. Il concentre les sucres naturels du fruit et se boit vite : moins de contrôle de la satiété."],
    nectar: ["Nectar", "Purée de fruits, eau et souvent sucre : une teneur en fruits plus faible."],
    smoothie: ["Smoothie", "Fruits entiers mixés : plus de fibres, mais énergétique dès que la portion dépasse un petit verre."],
    fruit: ["Fruit entier", "L’avantage pour la satiété et l’apport en fibres."]
  };
  seg($("#fr-seg"), Object.entries(FR).map(([id, f]) => ({ id, label: f[0], cls: "fl" })), "jus", k => {
    const [n, t] = FR[k];
    $("#fr-out").innerHTML = `<h3>${n}</h3><p>${t}</p>`;
  });

  /* ---------------- Les cinq thés ---------------- */
  const STEPS = ["Flétrissage", "Fixation", "Roulage", "Oxydation", "Fermentation", "Séchage"];
  const THE = {
    vert: ["Thé vert", ["Flétrissage", "Fixation", "Roulage", "Séchage"]],
    noir: ["Thé noir", ["Flétrissage", "Roulage", "Oxydation", "Séchage"]],
    jaune: ["Thé jaune", ["Flétrissage", "Fixation", "Fermentation", "Séchage"]],
    blanc: ["Thé blanc", ["Flétrissage", "Séchage"]],
    oolong: ["Thé oolong", ["Flétrissage", "Fixation", "Roulage", "Oxydation", "Séchage"]]
  };
  let the = "vert";
  function theUpdate() {
    $("#the-chain").innerHTML = `<span>Feuilles récoltées</span>` + THE[the][1].map(s => `<i>→</i><span>${s}</span>`).join("") + `<i>→</i><span style="background:var(--glu-s);border-color:var(--glu-m)">${THE[the][0]}</span>`;
    $("#the-tbl").innerHTML = `<thead><tr><th>Thé</th>${STEPS.map(s => `<th>${s}</th>`).join("")}</tr></thead><tbody>${Object.entries(THE).map(([id, [n, st]]) => `<tr class="${id === the ? "sel glu" : ""}" data-id="${id}" style="cursor:pointer"><th>${n}</th>${STEPS.map(s => `<td style="text-align:center">${st.includes(s) ? "●" : `<span style="color:var(--line2)">–</span>`}</td>`).join("")}</tr>`).join("")}</tbody>`;
  }
  const setThe = seg($("#the-seg"), Object.entries(THE).map(([id, t]) => ({ id, label: t[0], cls: "glu" })), the, v => { the = v; theUpdate(); });
  $("#the-tbl").addEventListener("click", e => { const r = e.target.closest("tr[data-id]"); if (r) setThe(r.dataset.id); });

  /* ---------------- Eau ou boisson de l'effort ---------------- */
  const ef = { min: 60, chaud: "non", sueur: "non" };
  function efUpdate() {
    $("#ef-min-o").textContent = ef.min + " min";
    const why = [];
    if (ef.min > 60) why.push("plus d’une heure d’effort soutenu");
    if (ef.chaud === "oui") why.push("atmosphère chaude");
    if (ef.sueur === "oui") why.push("forte transpiration");
    const sport = why.length > 0;
    $("#ef-out").className = "result " + (sport ? "good-f" : "eau");
    $("#ef-out").innerHTML = sport
      ? `<span class="tag">Boisson pour le sport utile</span><div class="big good-f" style="font-size:1.5rem">Eau + électrolytes + glucides</div><p>Pourquoi : ${why.join(", ")}. Compenser l’eau, une partie des glucides et le sodium perdu dans la sueur.</p>`
      : `<span class="tag">L’eau suffit</span><div class="big eau" style="font-size:1.5rem">De l’eau</div><p>Pour les séances plus courtes, l’eau suffit généralement.</p>`;
  }
  $("#ef-min").addEventListener("input", e => { ef.min = +e.target.value; efUpdate(); });
  seg($("#ef-chaud"), [{ id: "non", label: "Non", cls: "ink" }, { id: "oui", label: "Oui", cls: "ink" }], ef.chaud, v => { ef.chaud = v; efUpdate(); });
  seg($("#ef-sueur"), [{ id: "non", label: "Non", cls: "ink" }, { id: "oui", label: "Oui", cls: "ink" }], ef.sueur, v => { ef.sueur = v; efUpdate(); });

  /* ---------------- Sucre du vin ---------------- */
  const VIN = [["Sec", 0, 2, "moins de 2 g/L"], ["Demi-sec", 2, 30, "2 à 30 g/L"], ["Moelleux", 30, 50, "30 à 50 g/L"], ["Liquoreux", 50, 80, "plus de 50 g/L"]];
  let vin = 1;
  function vinUpdate() {
    $("#vin-g-o").textContent = vin + " g/L";
    const c = VIN.find(([, a, b], i) => vin < b || i === VIN.length - 1);
    $("#vin-out").innerHTML = `<span class="tag">Classement selon le sucre</span><div class="big glu">Vin ${c[0].toLowerCase()}</div><p>${c[3]}</p>
      <div class="stack3 hideable">${VIN.map(v => `<div class="glu" style="flex-basis:${((v[2] - v[1]) / 80 * 100).toFixed(1)}%;${v === c ? "background:var(--glu);color:#fff" : ""}">${v === VIN[0] ? "" : v[0]}</div>`).join("")}</div>`;
  }
  $("#vin-g").addEventListener("input", e => { vin = +e.target.value; vinUpdate(); });
  vinUpdate();

  /* ---------------- Compter ses verres ---------------- */
  // Chaque verre servi = 1 verre standard = 10 g d'alcool pur ; 1 g = 7 kcal ; repère : 2 verres par jour maximum
  const GL = [["Ballon de vin", "10 cl"], ["Verre d’apéritif", "7 cl"], ["Verre de whisky", "2,5 cl"], ["Coupe de mousseux à 12°", "10 cl"], ["Demi de bière", "25 cl"], ["Verre de pastis", "2,5 cl"]];
  const nv = GL.map(() => 0); nv[0] = 1; nv[4] = 1;
  function vUpdate() {
    $("#verres").innerHTML = GL.map(([n, q], i) => `<div class="stepper"><div><b>${n}</b><small>${q}</small></div><div class="ctrl"><button type="button" data-i="${i}" data-d="-1" aria-label="Moins">−</button><output data-nohide>${nv[i]}</output><button type="button" data-i="${i}" data-d="1" aria-label="Plus">+</button></div></div>`).join("");
    const n = nv.reduce((a, b) => a + b, 0), g = n * 10, over = n > 2;
    $("#verres-out").innerHTML = `<span class="tag">Sur une journée</span><div class="big ${over ? "bad-f" : "good-f"}" data-nohide>${n} <small>verre${n > 1 ? "s" : ""} standard</small></div>
      <p><b>${g} g</b> d’alcool pur, soit <b>${g * 7} kcal</b> de calories vides.</p>
      <div class="hbars hideable"><div class="hbar ${over ? "bad-f sel" : "good-f sel"}"><span class="lab">Verres</span><span class="track"><span class="fill" style="width:${Math.min(100, n / 8 * 100).toFixed(1)}%">${n}</span></span></div><div class="hbar ink"><span class="lab">Repère maximum</span><span class="track"><span class="fill" style="width:25%">2</span></span></div></div>
      <p>${n === 0 ? "Un jour sans alcool : à prévoir dans la semaine." : over ? "Au-delà du repère de <b>2 verres standard par jour</b>." : "Dans le repère, à condition de ne pas boire tous les jours."}</p>`;
  }
  $("#verres").addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (!b) return; const i = +b.dataset.i; nv[i] = Math.max(0, Math.min(9, nv[i] + +b.dataset.d)); vUpdate(); });
  vUpdate();
})();
