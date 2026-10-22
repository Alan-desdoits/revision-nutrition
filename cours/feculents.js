/* ==========================================================================
   Cours : Les féculents
   Source : documents/finis/Les féculents.docx
   ========================================================================== */
(function () {
  const { $, $$, fmt, seg, explorer, hbars } = window.Fiches;
  const R = (name, rows, sub) => ({ name, rows, sub });

  /* ---------------- Amidon : amylose / amylopectine ---------------- */
  const hexPts = (x, y, r) => [...Array(6)].map((_, i) => { const a = Math.PI / 3 * i + Math.PI / 6; return (x + r * Math.cos(a)).toFixed(1) + "," + (y + r * Math.sin(a)).toFixed(1); }).join(" ");
  const hx = (x, y) => `<polygon points="${hexPts(x, y, 18)}" fill="var(--glu-s)" stroke="var(--glu)" stroke-width="2.5" stroke-linejoin="round"/>`;
  const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--glu)" stroke-width="2.5"/>`;
  function chain(xs, y) { return xs.map((x, i) => (i ? ln(xs[i - 1], y, x, y) : "")).join("") + xs.map(x => hx(x, y)).join(""); }
  const STEP = 52, X = i => 30 + i * STEP;
  const AMI = {
    amylose: {
      svg: () => chain([...Array(10)].map((_, i) => X(i)), 75),
      txt: `<span class="tag">Amylose · ≈ 25 %</span><h3>Une longue chaîne linéaire</h3><p>Les glucoses sont reliés <b>les uns à la suite des autres</b>. Cette organisation rend l’amylose moins accessible aux enzymes de la digestion : elle est dégradée plus lentement.</p>`
    },
    amylopectine: {
      svg: () => {
        const main = [...Array(10)].map((_, i) => X(i)), b1 = [0, 1, 2].map(i => X(2) + 26 + i * STEP), b2 = [0, 1, 2].map(i => X(6) + 26 + i * STEP);
        return ln(X(2), 40, b1[0], 110) + ln(X(6), 40, b2[0], 110) + chain(main, 40) + chain(b1, 110) + chain(b2, 110);
      },
      txt: `<span class="tag">Amylopectine · ≈ 75 %</span><h3>Des chaînes ramifiées</h3><p>Les glucoses forment des chaînes avec des <b>ramifications</b>. Cette structure facilite l’action des enzymes digestives : dégradation plus rapide en glucose.</p>`
    }
  };
  seg($("#ami-seg"), [{ id: "amylose", label: "Amylose", cls: "glu" }, { id: "amylopectine", label: "Amylopectine", cls: "glu" }], "amylose", k => {
    $("#ami-svg").innerHTML = AMI[k].svg();
    $("#ami-txt").innerHTML = AMI[k].txt + `<p style="margin-top:6px;color:var(--muted)">Cette différence explique que tous les amidons ne se digèrent pas à la même vitesse et n’ont pas le même effet sur la glycémie.</p>`;
  });

  /* ---------------- Digestion : quatre facteurs liés à une courbe ---------------- */
  // Chaque facteur : [option lente, option rapide]. Le schéma est qualitatif (le cours ne chiffre pas).
  const FACT = [
    { id: "transfo", label: "Transformation", opts: [["Complet", "Pain, riz, pâtes complets gardent leur enveloppe riche en fibres : l’amidon est protégé. Ex. le riz complet se digère plus lentement que le riz blanc."], ["Raffiné", "Farine blanche, pain blanc, riz blanc : structure simple, peu de fibres, amidon facilement accessible aux enzymes."]] },
    { id: "cuisson", label: "Cuisson", opts: [["Al dente", "Une cuisson courte gélatinise moins l’amidon. Ex. des pâtes al dente."], ["Très cuites", "Chaleur + eau : les grains d’amidon gonflent (gélatinisation) et deviennent plus digestibles. Ex. des pâtes très cuites sont digérées plus vite."]] },
    { id: "repas", label: "Le repas", opts: [["Avec légumes et protéines", "Fibres, lipides et protéines ralentissent la vidange gastrique et l’action des enzymes. Ex. des pâtes avec des légumes et un œuf, de la viande, du poisson ou des légumineuses."], ["Seul", "Rien ne freine la vidange de l’estomac : le glucose arrive plus vite."]] },
    { id: "structure", label: "Structure", opts: [["Intacte", "Une structure intacte protège en partie l’amidon. Ex. le pain complet."], ["Fragmentée", "Plus l’aliment est fragmenté ou transformé, plus l’amidon est accessible. Ex. le pain de mie."]] }
  ];
  const dig = { transfo: 1, cuisson: 1, repas: 1, structure: 1 };
  function drawDig() {
    const f = Object.values(dig).reduce((a, b) => a + b, 0); // nombre de facteurs « rapides »
    const base = 170, peakY = base - (35 + f * 28), px = 300 - f * 35, w = 150 - f * 22;
    $("#dig-svg").innerHTML = `
      <line x1="40" y1="${base}" x2="610" y2="${base}" stroke="var(--line2)" stroke-dasharray="5 5"/>
      <path d="M40 ${base} C ${40 + (px - 40) * .5} ${base}, ${px - w * .6} ${peakY}, ${px} ${peakY} S ${px + w * 1.8} ${base}, 600 ${base}" fill="var(--glu-s)" fill-opacity=".7" stroke="var(--glu)" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="14" x2="40" y2="190" stroke="var(--muted)"/><line x1="40" y1="190" x2="610" y2="190" stroke="var(--muted)"/>
      <text x="46" y="20" font-size="12" fill="var(--muted)" font-family="IBM Plex Mono, monospace">glycémie</text>
      <text x="606" y="184" text-anchor="end" font-size="12" fill="var(--muted)" font-family="IBM Plex Mono, monospace">temps après le repas</text>`;
    const MSG = ["Digestion la plus <b>lente</b> : le glucose arrive progressivement, la satiété dure.", "Digestion plutôt lente.", "Digestion intermédiaire.", "Digestion plutôt rapide.", "Digestion la plus <b>rapide</b> : le glucose passe vite dans le sang, la glycémie monte fort."];
    $("#dig-out").innerHTML = MSG[f];
    $("#dig-why").innerHTML = FACT.map(F => { const o = F.opts[dig[F.id]]; return `<div class="card ${dig[F.id] ? "bad" : "good"}"><span class="tag">${F.label} · ${o[0]}</span><p>${o[1]}</p></div>`; }).join("");
  }
  $("#dig-ctrl").innerHTML = FACT.map(F => `<div class="inp"><span class="tag">${F.label}</span><div data-f="${F.id}"></div></div>`).join("");
  FACT.forEach(F => seg($(`[data-f="${F.id}"]`), F.opts.map((o, i) => ({ id: String(i), label: o[0], cls: i ? "bad" : "good" })), "1", v => { dig[F.id] = +v; drawDig(); }));

  /* ---------------- Procédés ---------------- */
  explorer($("#pro-chips"), $("#pro-panel"), [{ cls: "glu", label: "Procédés", items: [
    R("La mouture", [["Principe", "Réduit la taille des particules"], ["Effet", "Change la finesse, la texture et le comportement à la cuisson"]]),
    R("L’extrusion", [["Principe", "Chaleur + pression + cisaillement"], ["Effet", "Aliments soufflés, croustillants ou expansés : céréales du petit-déjeuner, snacks"]]),
    R("Le raffinage", [["Principe", "Élimine certaines fractions du grain"], ["Effet", "Améliore l’aspect visuel et la texture"]]),
    R("La fermentation", [["Principe", "Modifie la structure de l’aliment"], ["Effet", "Développe les arômes et la texture, aide à la conservation"]])
  ] }]);

  /* ---------------- Grain de blé ---------------- */
  const BLE = {
    ecorce: { name: "Écorce", pct: 14, gives: "Donne le son", rows: [
      ["Brosse", "Les poils au sommet du grain."],
      ["Péricarpe", "Endocarpe, mésocarpe, épicarpe. Cellules à membranes épaisses, mal utilisées par la digestion (cellulose, lignine). Protège la graine."],
      ["Tégument séminal", "Contient les colorants : couleur jaune-marron. C’est le « manteau » du grain (testa)."],
      ["Bande hyaline", "Cellules transparentes qui unissent solidement le tégument à l’assise protéique."],
      ["Assise protéique", "<b>6 à 7 %</b> du poids du grain. Riche en protéines et vitamines : <b><span class="num hideable">⅓</span> des B1 et B2</b>, <b><span class="num hideable">⅔</span> des B6 et B3</b> du grain ; minéraux, lipides, cellulose, lignine. Fait adhérer l’enveloppe à l’amande."]
    ] },
    amande: { name: "Amande (albumen)", pct: 83, gives: "Donne les farines et les semoules", rows: [
      ["Aspect", "Substance blanche, friable, plus ou moins farineuse. Le germe délimite sa partie inférieure."],
      ["Contenu", "Les grains d’amidon (<b>70 %</b> de l’amidon total), entourés d’un réseau de <b>gluten</b> (protéique)."],
      ["Pauvre en", "Très peu de minéraux et de fibres."]
    ] },
    germe: { name: "Germe", pct: 3, gives: "Donne le germe de blé", rows: [
      ["Richesse", "Vitamines, minéraux et lipides."],
      ["Scutellum", "Entoure l’embryon, le protège et le nourrit : protéines, lipides, vitamines, un peu d’amidon."],
      ["Embryon", "Ou plantule : gemmule et radicule. Feuilles, bourgeons et racines à l’état rudimentaire."]
    ] }
  };
  const GRAIN = "M130 22 C 196 22, 232 118, 220 198 C 211 258, 172 284, 130 284 C 88 284, 49 258, 40 198 C 28 118, 64 22, 130 22 Z";
  let setBle;
  function drawBle(k) {
    const on = p => p === k;
    $("#ble-svg").innerHTML = `
      ${[...Array(9)].map((_, i) => `<line x1="${100 + i * 7.5}" y1="26" x2="${92 + i * 9}" y2="${4 + (i % 2) * 5}" stroke="var(--glu)" stroke-width="2" stroke-linecap="round"/>`).join("")}
      <path d="${GRAIN}" data-k="ecorce" fill="${on("ecorce") ? "var(--glu)" : "var(--glu-m)"}" stroke="var(--glu)" stroke-width="2" style="cursor:pointer"/>
      <path d="${GRAIN}" data-k="amande" transform="translate(130 150) scale(.86) translate(-130 -150)" fill="${on("amande") ? "var(--glu)" : "var(--glu-s)"}" style="cursor:pointer"/>
      <ellipse data-k="germe" cx="108" cy="250" rx="20" ry="12" transform="rotate(-18 108 250)" fill="${on("germe") ? "var(--glu)" : "var(--card)"}" stroke="var(--glu)" stroke-width="2.5" style="cursor:pointer"/>`;
    const b = BLE[k];
    $("#ble-panel").className = "panel glu";
    $("#ble-panel").innerHTML = `<div><span class="tag">${b.gives}</span><h3>${b.name} · ${b.pct} % du grain</h3><dl>${b.rows.map(([t, v]) => `<dt>${t}</dt><dd>${v}</dd>`).join("")}</dl></div>`;
    $("#ble-stack").innerHTML = Object.entries(BLE).map(([id, p]) => `<div style="flex:0 0 ${p.pct}%;${on(id) ? "background:var(--glu);color:var(--card)" : ""}">${p.pct >= 10 ? p.name.split(" (")[0] + " " + p.pct + " %" : p.pct + " %"}</div>`).join("");
  }
  $("#ble-stack").classList.add("glu");
  setBle = seg($("#ble-seg"), Object.entries(BLE).map(([id, p]) => ({ id, label: p.name.split(" (")[0], cls: "glu" })), "ecorce", drawBle);
  $("#ble-svg").addEventListener("click", e => { const t = e.target.closest("[data-k]"); if (t) setBle(t.dataset.k); });

  /* ---------------- Grain de riz ---------------- */
  const RIZ_L = ["Glumelles (balle)", "Glumes", "Péricarpe", "Tégument", "Couche à aleurone", "Endosperme (amande)", "Embryon (germe)"];
  const RIZ = {
    paddy: { label: "Riz paddy", keep: [0, 1, 2, 3, 4, 5, 6], txt: "Le riz paddy garde <b>toutes les couches</b>, y compris les glumelles (la balle) et les glumes." },
    complet: { label: "Riz complet (cargo)", keep: [2, 3, 4, 5, 6], txt: "Le riz complet perd la balle et les glumes mais garde le <b>péricarpe, le tégument, la couche à aleurone</b> et le germe : c’est son enveloppe riche en fibres." },
    blanchi: { label: "Riz blanchi (usiné)", keep: [5], txt: "Le riz blanchi ne garde que l’<b>endosperme</b>, l’amande riche en amidon." }
  };
  seg($("#riz-seg"), Object.entries(RIZ).map(([id, r]) => ({ id, label: r.label, cls: "glu" })), "complet", k => {
    const r = RIZ[k];
    $("#riz-layers").innerHTML = RIZ_L.map((l, i) => r.keep.includes(i) ? `<span class="glu" style="background:var(--glu-s);border-color:var(--glu-m)">${l}</span>` : `<span style="text-decoration:line-through;color:var(--muted)">${l}</span>`).join("");
    $("#riz-txt").innerHTML = r.txt;
  });

  /* ---------------- Classification botanique ---------------- */
  explorer($("#cer-chips"), $("#cer-panel"), [
    { cls: "glu", label: "Poacées", items: [
      R("Blé", [["Famille", "Graminacées ; s’adapte à des sols et climats variés"], ["Grain brut", "<b>6,5 à 8,5 mm</b> de long, <b>3 à 4 mm</b> de diamètre"]]),
      R("Maïs", [["Germe", "<b>5 fois</b> plus grand que celui du blé ; contient la plupart des lipides du maïs"], ["Usage", "L’albumen périphérique, très peu friable, sert aux semoules de maïs"]]),
      R("Orge", [["Origine", "Moyen-Orient et Asie Mineure"], ["Usage", "Orge mondé, orge perlé, malt"]]),
      R("Avoine", [["Grain", "Allongé, enveloppe robuste difficile à éliminer"], ["Fibres", "Environ <b>9 %</b>, dont <b>deux tiers solubles</b>"]]),
      R("Seigle", [["Caractère", "Céréale rustique, proche du blé, au grain plus allongé"]]),
      R("Millet", [["Origine", "Afrique et Asie"], ["Usage", "Grains entiers moulus en farine"]]),
      R("Riz", [["Grain", "Voir le grain de riz plus haut : paddy, complet (cargo), blanchi (usiné)"]])
    ] },
    { cls: "pro", label: "Pseudo", items: [
      R("Sarrasin", [["Origine", "Asie du Nord-Est"], ["Usage", "Farine de « blé noir », très consommée en Bretagne"]], "Sans gluten"),
      R("Quinoa", [["Famille", "Chénopodiacées"], ["Grain", "Recouvert d’une résine"]], "Sans gluten"),
      R("Amarante", [["Origine", "Amérique du Sud"], ["Usage", "Pas une céréale à proprement parler. Feuilles mangées comme des épinards, graines telles quelles ou en farine"]], "Sans gluten")
    ] }
  ]);

  /* ---------------- Farine : extraction et blutage ---------------- */
  function ext() {
    const e = +$("#ext").value, b = 100 - e;
    $("#ext-o").textContent = e + " %";
    $("#ext-out").innerHTML = `<span class="tag" data-nohide>Pour 100 kg de blé</span>
      <div class="g2" data-nohide><div><div class="big">${e} <small>kg de farine</small></div></div><div><div class="big">${b} <small>% de blutage</small></div></div></div>
      <div class="stack" data-nohide><div style="flex:0 0 ${e}%">Farine ${e} %</div>${b ? `<div style="flex:0 0 ${b}%;--m:var(--glu-s)">${b >= 8 ? "Écorces " + b + " %" : ""}</div>` : ""}</div>
      <p>Plus l’extraction monte, plus la farine est riche en <b>son</b> (écorce). Plus le blutage monte, moins on extrait de farine : elle est dite <b>fortement blutée</b>.</p>`;
  }
  $("#ext").addEventListener("input", ext);
  ext();

  const MOUT = [["Farine de broyage", 20], ["Farine de claquage", 25], ["Farine de convertissage", 35]];
  $("#mout-stack").classList.add("glu");
  $("#mout-stack").innerHTML = MOUT.map(([n, v]) => `<div style="flex:0 0 ${v}%">${v} %</div>`).join("");
  $("#mout-leg").innerHTML = MOUT.map(([n, v]) => `<span>${n} <b>${v} %</b></span>`).join("") + `<span>Total <b>80 %</b> du grain de blé brut</span>`;

  /* ---------------- Ingrédients du pain ---------------- */
  explorer($("#ing-chips"), $("#ing-panel"), [{ cls: "glu", label: "Ingrédients", items: [
    R("Farine type 55", [["Qualité", "Un blé sain, avec des critères stricts d’humidification, de grosseur et de taux maximum d’impuretés"], ["Pourquoi", "Convient au pain blanc grâce à sa bonne teneur en <b>gluten</b>"]]),
    R("Eau", [["Exigences", "Potable, non calcaire, pas trop chlorée (le chlore inhiberait la fermentation)"], ["Rôle", "Hydrate le gluten et l’amidon, rend les constituants mobiles pour les réactions de la panification, lie les particules de farine"]]),
    R("Sel", [["Statut", "Pas indispensable"], ["Rôle", "Saveur, pâte plus facile à travailler ; régule la fermentation, aide la coloration, retarde la dessiccation"]]),
    R("Agents de fermentation", [["Rôle", "Fermentation alcoolique : le glucose de la farine devient <b>dioxyde de carbone et éthanol</b>"], ["Effet", "La pâte gonfle"], ["Deux types", "Levure de boulangerie ou levain : voir le tableau"]])
  ] }]);

  /* ---------------- Nutrition ---------------- */
  hbars($("#kcal-bars"), [
    { label: "Pain complet", v: 240, cls: "glu" }, { label: "Pâtes cuites", v: [130, 150], cls: "glu" }, { label: "Riz cuit", v: 130, cls: "glu" }
  ], { max: 260, unit: "kcal" });
  hbars($("#prot-bars"), [
    { label: "Riz", v: [7, 8], cls: "pro" }, { label: "Maïs", v: [9, 10], cls: "pro" }, { label: "Blé", v: [11, 13], cls: "pro" },
    { label: "Avoine", v: 14, text: "jusqu’à 14 %", cls: "pro" }, { label: "Légumineuses", sub: "pour comparer", v: [15, 25], cls: "pro", sel: true }
  ], { max: 26, unit: "%" });
  hbars($("#fib-bars"), [{ label: "Pain complet", v: [6, 8], cls: "fl" }, { label: "Pain blanc", v: [2, 3], cls: "fl" }], { max: 9, unit: "g" });

  const CPL = { couscous: ["Blé", "Pois chiches", "Le couscous"], inde: ["Riz", "Lentilles", "Plat courant en Inde"], amerique: ["Maïs", "Haricots rouges", "Plats d’Amérique latine"] };
  seg($("#cpl-seg"), [{ id: "couscous", label: "Couscous", cls: "pro" }, { id: "inde", label: "Inde", cls: "pro" }, { id: "amerique", label: "Amérique latine", cls: "pro" }], "couscous", k => {
    const [c, l, ex] = CPL[k];
    $("#cpl").innerHTML = `
      <div class="card glu"><span class="tag">Céréale</span><h3>${c}</h3><div class="aa"><span class="lo">Lysine <b>pauvre</b></span><span class="hi">Méthionine, cystéine <b>riches</b></span></div></div>
      <div class="op">+</div>
      <div class="card pro"><span class="tag">Légumineuse</span><h3>${l}</h3><div class="aa"><span class="hi">Lysine <b>riche</b></span><span class="lo">Méthionine <b>limitée</b></span></div></div>
      <div class="op">=</div>
      <div class="card good"><span class="tag">${ex}</span><h3>Protéines complémentaires</h3><p>Qualité comparable à celle des protéines animales.</p></div>`;
  });

  explorer($("#mic-chips"), $("#mic-panel"), [
    { cls: "vit", label: "Vitamines", items: [
      R("B1 (thiamine)", [["Rôle", "Transforme les glucides en énergie ; système nerveux"], ["Où", "Son et germe de blé, avoine, riz complet"]]),
      R("B2 (riboflavine)", [["Rôle", "Oxydation des nutriments, énergie cellulaire"], ["Où", "Blé complet, orge"]]),
      R("B3 (niacine)", [["Rôle", "Respiration cellulaire, synthèse des acides gras"], ["Où", "Riz complet, blé, maïs"]]),
      R("B6 (pyridoxine)", [["Rôle", "Métabolisme des protéines, neurotransmetteurs"], ["Où", "Avoine, riz, blé complet"]]),
      R("B9 (acide folique)", [["Rôle", "Synthèse de l’ADN, globules rouges"], ["Où", "En faible quantité, mieux conservée dans les produits peu raffinés"]]),
      R("E (tocophérol)", [["Rôle", "Antioxydant : protège les membranes cellulaires, le système cardiovasculaire ; agit avec les acides gras insaturés des céréales entières"], ["Où", "Surtout le <b>germe</b>, notamment de blé. Le raffinage, qui retire le germe, en fait perdre beaucoup"]])
    ] },
    { cls: "min", label: "Minéraux", items: [
      R("Magnésium", [["Rôle", "Contraction musculaire, transmission nerveuse, métabolisme énergétique"], ["Où", "Avoine, blé complet, riz complet, seigle"]]),
      R("Fer", [["Rôle", "Hémoglobine, transport de l’oxygène"], ["Où", "Non héminique : blé complet, millet, orge. Mieux absorbé avec de la <b>vitamine C</b> au repas"]]),
      R("Zinc", [["Rôle", "Synthèse des protéines, cicatrisation, immunité"], ["Où", "Avoine, blé complet"]]),
      R("Phosphore", [["Rôle", "Os et dents, production d’énergie (ATP)"], ["Où", "Riz complet, blé"]]),
      R("Sélénium", [["Rôle", "Antioxydant contre le stress oxydatif"], ["Où", "Blé et avoine, en quantité variable selon le sol"]])
    ] }
  ]);

  /* ---------------- IG et charge glycémique ---------------- */
  const igCat = ig => ig >= 70 ? ["élevé", "bad-f"] : ig >= 55 ? ["modéré", "glu"] : ["bas", "good-f"];
  function cg() {
    const ig = +$("#ig").value, g = +$("#gp").value, c = ig * g / 100, [cat, cls] = igCat(ig);
    $("#ig-o").textContent = "IG " + ig;
    $("#gp-o").textContent = g + " g";
    $("#cg-out").className = "result " + cls;
    $("#cg-out").innerHTML = `<span class="tag">Charge glycémique</span>
      <div class="big" data-nohide>${fmt(c, 1)}</div>
      <p class="eq" data-nohide>CG = (IG × glucides de la portion) / 100 = (${ig} × ${g}) / 100</p>
      <p>Cet IG est <b>${cat}</b>. Avec deux fois plus de glucides, la charge passerait à <b data-nohide>${fmt(c * 2, 1)}</b> : la quantité compte autant que l’IG.</p>`;
    $("#ig-scale").innerHTML = `<div style="position:relative;margin-top:14px">
        <div class="stack3 hideable"><div class="good-f" style="flex:0 0 55%">IG bas &lt; 55</div><div class="glu" style="flex:0 0 15%">55–69</div><div class="bad-f" style="flex:0 0 30%">IG élevé ≥ 70</div></div>
        <div data-nohide style="position:absolute;top:-6px;bottom:-6px;left:${ig}%;border-left:3px solid var(--fg)"></div>
      </div>`;
  }
  $("#ig").addEventListener("input", cg);
  $("#gp").addEventListener("input", cg);
  cg();

  /* ---------------- Soja ---------------- */
  explorer($("#soja-chips"), $("#soja-panel"), [
    { cls: "pro", label: "Non fermentés", items: [
      R("Tonyu", [["Quoi", "Boisson : le « jus de soja »"], ["Fabrication", "Graines décortiquées, trempées dans l’eau portée à ébullition, puis filtrées"], ["Usage", "Nature ou aromatisé ; peut être gélifié en dessert"]]),
      R("Tofu", [["Quoi", "Tonyu caillé, égoutté et pressé"], ["Usage", "Goût neutre et fade : utilisé dans de nombreuses recettes"]])
    ] },
    { cls: "pro", label: "Fermentés", items: [
      R("Shoyu", [["Quoi", "La « sauce soja » : soja, eau, céréales, sel"], ["Usage", "Sauce ou marinade"], ["Goût", "Les protéines dégradées libèrent des acides aminés libres : saveur <b>umami</b>"]]),
      R("Tamari", [["Quoi", "Sauce soja <b>sans céréale</b>"], ["Différence", "Fermentation plus longue que le shoyu ; même saveur umami"]]),
      R("Miso", [["Quoi", "Pâte de soja, sel et céréales (riz ou orge)"], ["Ferment", "<i>Aspergillus oryzae</i>, le même que les sauces"]]),
      R("Tempeh", [["Quoi", "Pâte de graines de soja fermentées, puis cuite"], ["Ferment", "Un autre champignon : <i>Rhizopus oligosporus</i>"]])
    ] }
  ]);
  function iso() {
    const p = +$("#iso").value;
    $("#iso-o").textContent = p + " kg";
    $("#iso-out").innerHTML = `<span class="tag">Isoflavones : limite par jour</span><div class="big">${p} <small>mg maximum</small></div><p>Le cours fixe <b>1 mg par kg</b> de poids et par jour : au-delà, risque de toxicité.</p>`;
  }
  $("#iso").addEventListener("input", iso);
  iso();

  /* ---------------- Rôle nutritionnel ---------------- */
  const ROLE = {
    leg: [
      ["pro", "Densité nutritionnelle", "Beaucoup de nutriments pour une énergie modérée : prévention de nombreuses pathologies."],
      ["pro", "Protéines végétales", "Alternative à la viande, au poisson, aux œufs (végétariens, flexitariens). Masse musculaire, renouvellement cellulaire, enzymes et hormones. Associées aux céréales : profil équilibré."],
      ["fl", "Fibres solubles et insolubles", "Digestion ralentie (IG faible), satiété, transit, microbiote. Fermentées dans le côlon : <b>acides gras à chaîne courte</b> qui nourrissent les cellules intestinales et renforcent l’immunité."],
      ["good-f", "Cœur et métabolisme", "Moins de cholestérol (fibres solubles : bêta-glucanes, pectines), meilleure sensibilité à l’insuline, moins de diabète de type 2 et de maladies cardiovasculaires. Grâce à l’IG faible, aux fibres, aux polyphénols et saponines antioxydants."],
      ["min", "Micronutriments", "Fer, magnésium, potassium, zinc : transport de l’oxygène, contraction musculaire, fonction nerveuse. Vitamine <b>B9</b> : globules rouges, croissance cellulaire, grossesse."],
      ["fl", "Durabilité", "Diversifier les protéines, réduire la viande, préserver la fertilité des sols grâce à la fixation de l’azote."]
    ],
    tub: [
      ["glu", "Énergie", "Glucides complexes (amidon) : glucose régulier pour le cerveau et les muscles. Personnes actives, enfants en croissance, sportifs. Sans pics glycémiques s’ils sont peu transformés."],
      ["fl", "Satiété et digestion", "Cuits et mangés avec la peau (vapeur, au four) : fibres. Refroidis : <b>amidon résistant</b>, bon pour le microbiote et la glycémie."],
      ["min", "Minéraux", "Potassium (équilibre hydrique, tension artérielle), phosphore (os)."],
      ["vit", "Vitamines", "Vitamine C de la pomme de terre fraîche (immunité, absorption du fer non héminique). Bêta-carotène de la patate douce, précurseur de la vitamine A (vision, peau)."],
      ["good-f", "Poids et métabolisme", "Pas « trop caloriques » : riches en eau, environ <b>70 à 90 kcal/100 g</b> cuits. À la place de céréales raffinées, ils peuvent améliorer le repas."],
      ["good-f", "Digestibilité", "Bien tolérés cuits à cœur, sans excès de matières grasses : intestins fragiles, enfants, personnes âgées."]
    ]
  };
  seg($("#role-seg"), [{ id: "leg", label: "Légumineuses", cls: "pro" }, { id: "tub", label: "Tubercules", cls: "glu" }], "leg", k => {
    $("#role-cards").innerHTML = ROLE[k].map(([c, t, p]) => `<div class="card ${c}"><span class="tag">${t}</span><p>${p}</p></div>`).join("");
  });

  /* ---------------- Dans l’assiette ---------------- */
  hbars($("#cuis-bars"), [
    { label: "Lentilles corail", v: 20, text: "20 min", cls: "pro" },
    { label: "Pois chiches", v: 60, text: "plus d’1 h", cls: "pro" }
  ], { max: 75 });

  const TUB = {
    vapeur: ["good", "La plus douce", "Préserve les vitamines et les minéraux ; l’index glycémique reste modéré."],
    eau: ["", "Simple et digeste", "Mais une partie des minéraux part dans l’eau de cuisson."],
    four: ["", "Saveurs concentrées", "Texture fondante."],
    frite: ["bad", "Plus gourmande", "Beaucoup plus de graisses, et risque de formation d’<b>acrylamide</b>, un composé indésirable."]
  };
  seg($("#tub-seg"), [{ id: "vapeur", label: "Vapeur", cls: "good" }, { id: "eau", label: "À l’eau" }, { id: "four", label: "Au four" }, { id: "frite", label: "Sautée ou frite", cls: "bad" }], "vapeur", k => {
    const [c, t, p] = TUB[k];
    $("#tub-out").className = "card " + c;
    $("#tub-out").innerHTML = `<h3>${t}</h3><p>${p}</p><p>Le choix dépend de l’objectif nutritionnel et du plaisir recherché.</p>`;
  });
})();
