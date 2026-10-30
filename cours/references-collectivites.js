/* ==========================================================================
   Cours : Identification des références nutritionnelles pour les collectivités
   Source : documents/finis/Identification des références nutritionnelles pour les collectivités.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, hbars, fmt } = window.Fiches;

  /* ---------------- Besoin moyen ou ANC (courbe schématique) ---------------- */
  // Courbe en cloche dessinée sans valeurs : seuls les pourcentages du cours sont affichés
  const W = 600, H = 220, base = 180, mu = 300, sd = 70;
  const y = x => base - 150 * Math.exp(-((x - mu) ** 2) / (2 * sd * sd));
  const pts = []; for (let x = 20; x <= 580; x += 5) pts.push([x, y(x)]);
  const curve = "M" + pts.map(p => p.map(v => v.toFixed(1)).join(",")).join(" L");
  const ANC = {
    moy: { x: mu, label: "Besoin moyen", pct: "50 %", txt: "La moitié de la population a besoin de <b>plus</b> que cette valeur : à ce niveau, 50 % des individus risqueraient un déficit. Un point de départ, pas suffisant." },
    anc: { x: mu + 2 * sd, label: "Apport conseillé", pct: "97 à 98 %", txt: "On ajoute une <b>marge de sécurité</b> au besoin moyen : l’apport conseillé couvre environ 97 à 98 % de la population. Un « coussin de sécurité » pour presque tout le monde." }
  };
  function ancDraw(k) {
    const a = ANC[k];
    $("#anc-svg").innerHTML = `<defs><clipPath id="cl-ok"><rect x="0" y="0" width="${a.x}" height="${H}"/></clipPath><clipPath id="cl-ko"><rect x="${a.x}" y="0" width="${W - a.x}" height="${H}"/></clipPath></defs>
      <path d="${curve} L580,${base} L20,${base} Z" fill="var(--good-s)" clip-path="url(#cl-ok)"/>
      <path d="${curve} L580,${base} L20,${base} Z" fill="var(--bad-s)" clip-path="url(#cl-ko)"/>
      <path d="${curve}" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <line x1="20" y1="${base}" x2="580" y2="${base}" stroke="var(--line2)" stroke-width="1.5"/>
      <line x1="${mu}" y1="24" x2="${mu}" y2="${base}" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="${a.x}" y1="20" x2="${a.x}" y2="${base}" stroke="var(--ink)" stroke-width="3"/>
      <text x="${a.x}" y="14" text-anchor="middle" font-family="Atkinson Hyperlegible, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">${a.label}</text>
      <text x="40" y="${base - 12}" font-family="Atkinson Hyperlegible, sans-serif" font-size="13" fill="var(--good)">Couverts</text>
      <text x="565" y="${base - 12}" text-anchor="end" font-family="Atkinson Hyperlegible, sans-serif" font-size="13" fill="var(--bad)">En déficit</text>
      <text x="300" y="206" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--muted)">BESOIN INDIVIDUEL →</text>`;
    $("#anc-out").innerHTML = `<span class="tag">${a.label}</span><div class="big ink">${a.pct} <small>de la population couverte</small></div><p>${a.txt}</p>`;
  }
  seg($("#anc-seg"), [{ id: "moy", label: "Besoin moyen", cls: "ink" }, { id: "anc", label: "Apport conseillé (ANC)", cls: "ink" }], "moy", ancDraw);

  /* ---------------- Apports énergétiques conseillés (adultes) ---------------- */
  const ANCA = {
    f: [["Activité réduite", 7500, 1800], ["Activité habituelle", 8400, 2000, "La majorité de la population féminine vivant en France"], ["Activité importante", 9200, 2200]],
    h: [["Activité réduite", 8800, 2100], ["Activité habituelle", 11300, 2700, "La majorité de la population masculine vivant en France"], ["Activité importante", 12500, 3000], ["Gros travaux", 14600, 3500, "Plusieurs heures chaque jour, activité particulièrement importante"]]
  };
  const ea = { sexe: "f", i: 1 };
  function eaUpdate() {
    const L = ANCA[ea.sexe];
    if (ea.i >= L.length) ea.i = L.length - 1;
    hbars($("#anc-bars"), L.map((r, i) => ({ id: i, label: r[0], v: r[2], cls: "glu", sel: i === ea.i })), { max: 3500, unit: "kcal" });
    const r = L[ea.i];
    $("#anc-res").innerHTML = `<span class="tag">${ea.sexe === "f" ? "Femme" : "Homme"} · ${r[0]}</span><div class="big glu">${fmt(r[2])} <small>kcal par jour</small></div><p>Soit <b>${fmt(r[1])} kJ</b>.${r[3] ? " " + r[3] + "." : ""}</p>`;
  }
  seg($("#anc-sexe"), [{ id: "f", label: "Femme", cls: "glu" }, { id: "h", label: "Homme", cls: "glu" }], ea.sexe, v => { ea.sexe = v; eaUpdate(); });
  $("#anc-bars").addEventListener("click", e => { const r = e.target.closest(".hbar"); if (r) { ea.i = +r.dataset.id; eaUpdate(); } });

  hbars($("#grp-bars"), [
    { label: "Enfants 4–6 ans", v: [1400, 1700] },
    { label: "Enfants 7–10 ans", v: [1600, 2000] },
    { label: "Ados 11–14 ans", sub: "filles", v: [2100, 2500] },
    { label: "Ados 11–14 ans", sub: "garçons", v: [2300, 2800] },
    { label: "Ados 15–18 ans", sub: "filles", v: [2300, 2700] },
    { label: "Ados 15–18 ans", sub: "garçons", v: [2800, 3200] },
    { label: "Adultes 19–64 ans", sub: "femmes", v: [2000, 2200] },
    { label: "Adultes 19–64 ans", sub: "hommes", v: [2500, 2700] },
    { label: "Plus de 65 ans", v: [1700, 2000] }
  ], { max: 3200, unit: "kcal", cls: "glu" });

  /* ---------------- Macronutriments ---------------- */
  hbars($("#macro-bars"), [
    { label: "Protéines", v: [10, 20], cls: "pro" },
    { label: "Glucides", v: [40, 55], cls: "glu" },
    { label: "Lipides", v: [35, 40], cls: "lip" }
  ], { max: 60, unit: "% AET" });

  const PROT = {
    leg: ["Légumineuses (cuites)", "pro", [["Petit pois", 5], ["Haricot blanc", 7], ["Haricot noir", 7], ["Pois cassés", 8], ["Pois chiche", 8], ["Haricot pinto", 9], ["Haricot rouge", 9], ["Lentilles", 9], ["Lupin", 15], ["Tofu", 15], ["Tempeh", 21], ["Soja", 38]]],
    cer: ["Céréales (cuites)", "glu", [["Orge", 2], ["Maïs", 2], ["Riz", 2], ["Boulghour", 3], ["Millet", 3], ["Avoine", 3], ["Amarante", 3], ["Quinoa", 4], ["Blé", 5], ["Épeautre", 5], ["Sarrasin", 12], ["Seitan", 26]]],
    aut: ["Graines et oléagineux (crus)", "lip", [["Noix du Brésil", 14], ["Noix de cajou", 15], ["Noix", 15], ["Chia", 16], ["Lin", 18], ["Amande", 20], ["Tournesol", 20], ["Pistache", 21], ["Cacahuète", 23], ["Chanvre", 24], ["Citrouille", 30], ["Spiruline", 57]]],
    ani: ["Animales", "pro", [["Lait demi-écrémé", [3, 4]], ["Cottage cheese", 11.7], ["Œuf", 12.7], ["Fromage blanc 0 %", 15], ["Colin d’Alaska", 17], ["Carré frais", 17.5], ["Canard", 19.4], ["Crevettes", 19.7], ["Côte de porc", 19.8], ["Saumon", 20.5], ["Escalope de veau", 20.7], ["Steak haché 5 %", 21.9], ["Escalope de dinde", 22.4], ["Filet de poulet", 23.4], ["Edam", 25.5], ["Thon", 26], ["Parmesan", 31.1], ["Viande des Grisons", 39.9]]]
  };
  seg($("#prot-seg"), Object.entries(PROT).map(([id, p]) => ({ id, label: p[0], cls: p[1] })), "leg", k => {
    hbars($("#prot-bars"), PROT[k][2].map(([l, v]) => ({ label: l, v, cls: PROT[k][1] })), { max: 57, unit: "g" });
  });

  const GLU = {
    fru: ["Fruits", "fl", [["Framboises", 5], ["Orange", 10], ["Ananas", 11], ["Pomme", 12], ["Mangue", 13], ["Raisins", 17], ["Banane", 21]]],
    cer: ["Produits céréaliers", "glu", [["Riz blanc cuit", 29], ["Pâtes cuites", 42], ["Pain blanc", 46]]],
    leg: ["Légumineuses cuites", "pro", [["Haricot rouge", 13], ["Lentilles", 16]]],
    noi: ["Noix et arachides", "lip", [["Pacanes", 4], ["Noix", 7], ["Amandes", 10], ["Arachides", 13], ["Pistaches", 19], ["Noix de cajou", 27]]],
    leg2: ["Légumes", "fl", [["Asperge", 2], ["Courgette", 2], ["Chou-fleur", 3], ["Poivron jaune", 5], ["Céleri-rave", 5], ["Betterave", 7], ["Carotte", 8], ["Panais", 15], ["Patate douce bouillie", 15], ["Pomme de terre bouillie", 18], ["Maïs", 19]]]
  };
  seg($("#glu-seg"), Object.entries(GLU).map(([id, p]) => ({ id, label: p[0], cls: p[1] })), "fru", k => {
    hbars($("#glu-bars"), GLU[k][2].map(([l, v]) => ({ label: l, v, cls: GLU[k][1] })), { max: 46, unit: "g" });
  });

  /* ---------------- Sucres libres : 10 % et 5 % de l'AET ---------------- */
  // 1 g de sucre = 4 kcal ; 50 g ≈ 10 cuillères à café (exemple du cours), soit 5 g par cuillère
  const SL = [["Enfants 4–6 ans", 1400, 1700], ["Enfants 7–10 ans", 1600, 2000], ["Adolescents", 2100, 2700], ["Adultes", 2000, 2500], ["Personnes âgées", 1700, 2000]];
  const g = (k, p) => Math.floor(k * p / 4);
  let kcal = 2000;
  function slUpdate() {
    const lim = g(kcal, .10), ideal = g(kcal, .05);
    $("#sl-kcal-o").textContent = fmt(kcal) + " kcal";
    $("#sl-eq").textContent = `${fmt(kcal)} kcal × 10 % ÷ 4 kcal/g = ${fmt(kcal * .1 / 4)} g`;
    $("#sl-out").innerHTML = `<span class="tag">Sucres libres par jour</span><div class="big sug">&lt; ${lim} <small>g (10 % de l’AET)</small></div><p>Soit environ <b>${fmt(lim / 5, 0)} cuillères à café</b>. Objectif idéal : <b>${ideal} g</b> (5 %).</p>
      <div class="hbars hideable" style="margin-top:4px">${[["Limite", lim], ["Idéal", ideal]].map(([l, v]) => `<div class="hbar sug"><span class="lab">${l}</span><span class="track"><span class="fill" style="width:${(v / 80 * 100).toFixed(1)}%">${v} g</span></span></div>`).join("")}</div>`;
    $("#sl-tbl").innerHTML = SL.map(([n, a, b]) => `<tr class="${kcal >= a && kcal <= b ? "sel" : ""}"><th>${n}</th><td class="n">${fmt(a)}–${fmt(b)}</td><td class="n">${g(a, .1)}–${g(b, .1)} g/j</td><td class="n">${g(a, .05)}–${g(b, .05)} g/j</td></tr>`).join("");
  }
  $("#sl-kcal").addEventListener("input", e => { kcal = +e.target.value; slUpdate(); });
  slUpdate();

  /* ---------------- Fibres ---------------- */
  const FIB = {
    sol: ["Fibres solubles", "fl", "Se dissolvent en partie dans l’eau et forment un <b>gel visqueux</b> dans le tube digestif.", "Fruits (pommes, agrumes, poires), carottes, légumineuses, avoine, orge.", ["Ralentissent la digestion et l’absorption des glucides : moins de pics de glycémie après les repas.", "Réduisent l’absorption du cholestérol : prévention cardiovasculaire.", "Épaississent le bol alimentaire : satiété prolongée.", "Fermentées par le microbiote : acides gras à chaîne courte bénéfiques pour le côlon et le métabolisme."]],
    ins: ["Fibres insolubles", "glu", "Ne se dissolvent pas dans l’eau. Rôle surtout <b>mécanique</b>.", "Céréales complètes, son de blé, certains légumes verts, fruits à coque.", ["Augmentent le volume des selles.", "Accélèrent le transit : utiles contre la constipation.", "Peu fermentescibles : action sur la motricité intestinale plutôt que sur le métabolisme des glucides ou des lipides."]]
  };
  seg($("#fib-seg"), Object.entries(FIB).map(([id, f]) => ({ id, label: f[0], cls: f[1] })), "sol", k => {
    const [n, c, d, s, eff] = FIB[k];
    $("#fib-out").className = "card tint " + c;
    $("#fib-out").innerHTML = `<h3>${n}</h3><p>${d}</p><span class="tag">Où les trouver</span><p>${s}</p><span class="tag">Effets</span><ul>${eff.map(x => `<li>${x}</li>`).join("")}</ul>`;
  });
  hbars($("#fib-bars"), [
    { label: "Enfants 4–6 ans", sub: "Fruits frais, légumes cuits, céréales demi-complètes", v: [12, 15] },
    { label: "Enfants 7–10 ans", sub: "Légumes variés, fruits crus, pain complet", v: [15, 20] },
    { label: "Adolescents", sub: "Légumineuses, céréales complètes, fruits et légumes", v: [20, 25] },
    { label: "Adultes", sub: "Légumineuses + féculents complets + légumes", v: [25, 30] },
    { label: "Personnes âgées", sub: "Fibres douces (compotes, légumes cuits)", v: [25, 30] }
  ], { max: 30, unit: "g", cls: "fl" });

  /* ---------------- Micronutriments ---------------- */
  const M = (name, cls, role, risk, src, vig) => ({ name, cls, rows: [["Rôle", role], ["Groupes à risque", risk], ["Sources", src], ["Vigilance", vig]] });
  explorer($("#mic-chips"), $("#mic-panel"), [
    { cls: "min", label: "Minéraux", items: [
      M("Calcium", "min", "Os et dents, contraction musculaire, transmission nerveuse.", "Enfants, adolescents, personnes âgées.", "Produits laitiers, eaux minérales riches en calcium, légumes à feuilles vertes.", "Souvent insuffisant si peu de produits laitiers : à compléter dans les menus."),
      M("Fer", "min", "Fabrication des globules rouges, transport de l’oxygène.", "Enfants, adolescentes, femmes en âge de procréer.", "Héminique : viande rouge, abats, poisson. Non héminique : légumineuses, légumes verts.", "Risque de déficit élevé. La vitamine C améliore l’absorption du fer végétal : associer les deux."),
      M("Iode", "min", "Hormones thyroïdiennes, croissance, développement cérébral.", "Enfants, femmes enceintes, faibles consommateurs de produits marins.", "Sel iodé, poissons, fruits de mer.", "Réduire le sel peut réduire l’iode : vigilance sur la qualité des sources."),
      M("Magnésium", "min", "Fonction musculaire et nerveuse, métabolisme énergétique.", "Adolescents, adultes stressés, repas riches en produits raffinés.", "Céréales complètes, légumineuses, fruits secs, chocolat noir.", "Souvent insuffisant dans les régimes modernes pauvres en produits complets."),
      M("Zinc", "min", "Croissance, immunité, cicatrisation.", "Enfants, adolescents, personnes âgées, végétariens stricts.", "Viande, fruits de mer, légumineuses, noix.", "Moins biodisponible dans les régimes pauvres en produits animaux.")
    ] },
    { cls: "vit", label: "Vitamines", items: [
      M("Vitamine D", "vit", "Absorption du calcium, santé osseuse, immunité.", "Toute la population en hiver, personnes âgées, enfants.", "Poissons gras, produits enrichis, exposition solaire.", "Peu d’apport alimentaire, déficit fréquent : souvent besoin d’une supplémentation."),
      M("Vitamines B", "vit", "Métabolisme énergétique, système nerveux, croissance.", "Alimentation monotone, personnes âgées.", "Céréales, légumes secs, viandes, œufs, produits laitiers.", "Déficit rare, mais dépend beaucoup de la diversité de l’alimentation."),
      M("Vitamine C", "vit", "Antioxydant, immunité, meilleure absorption du fer.", "Enfants, faibles consommateurs de fruits et légumes.", "Agrumes, kiwis, fruits rouges, légumes crus.", "Sensible à la cuisson et au stockage : fruits et légumes frais ou peu transformés."),
      M("Vitamines A, E, K", "vit", "Vision (A), protection antioxydante (E), coagulation (K).", "Alimentation pauvre en fruits et légumes, régimes très restrictifs.", "Huiles végétales, poissons gras, légumes colorés, produits laitiers.", "Dépendent de la qualité et de la diversité des apports en lipides.")
    ] }
  ]);

  /* ---------------- Hydratation ---------------- */
  const EAU = [
    ["Enfants 4–6 ans", [1000, 1200], [800, 1000]],
    ["Enfants 7–10 ans", [1600, 1800], [1200, 1400]],
    ["Ados 11–14 ans", [2000, 2200], [1400, 1800], "2 000 (F) · 2 200 (G)"],
    ["Ados 15–18 ans", [2000, 2500], [1600, 2000], "2 000 (F) · 2 500 (G)"],
    ["Adultes 19–64 ans", [2000, 2500], [1500, 2000], "2 000 (F) · 2 500 (H)"],
    ["Plus de 65 ans", [1600, 2000], [1300, 1500]]
  ];
  seg($("#eau-seg"), [{ id: "tot", label: "Apports totaux (boissons + aliments)", cls: "eau" }, { id: "boi", label: "Sous forme de boissons", cls: "eau" }], "tot", k => {
    hbars($("#eau-bars"), EAU.map(r => ({ label: r[0], v: k === "tot" ? r[1] : r[2], text: k === "tot" && r[3] ? r[3] + " mL" : undefined })), { max: 2500, unit: "mL", cls: "eau" });
  });

  /* ---------------- Étude de cas : menu avant / après ---------------- */
  const TAGS = { frit: ["Panés ou frits", "bad-f"], sucre: ["Produits sucrés", "sug"], fruit: ["Fruit cru en dessert", "fl"], leg: ["Légumineuses", "pro"], cpl: ["Féculents complets", "glu"] };
  const D = (jour, ...p) => ({ jour, p });
  const MENU = {
    avant: [
      D("Lundi", ["Entrée", "Salade de pâtes au thon et maïs"], ["Plat", "Escalope de volaille panée, purée de pomme de terre", "frit"], ["Accompagnement", "Petits pois-carottes"], ["Produit laitier", "Yaourt aux fruits sucré", "sucre"], ["Dessert", "Compote de pommes", "sucre"]),
      D("Mardi", ["Entrée", "Betteraves vinaigrette"], ["Plat", "Steak haché, frites", "frit"], ["Accompagnement", "Salade verte"], ["Produit laitier", "Fromage râpé"], ["Dessert", "Banane", "fruit"]),
      D("Mercredi", ["Entrée", "Taboulé"], ["Plat", "Poisson pané, riz blanc", "frit"], ["Accompagnement", "Courgettes sautées"], ["Produit laitier", "Fromage blanc sucré", "sucre"], ["Dessert", "Mousse au chocolat", "sucre"]),
      D("Jeudi", ["Entrée", "Céleri rémoulade"], ["Plat", "Omelette au fromage, pâtes « al dente »"], ["Accompagnement", "Haricots verts"], ["Produit laitier", "Yaourt nature"], ["Dessert", "Pomme", "fruit"]),
      D("Vendredi", ["Entrée", "Salade de lentilles aux oignons", "leg"], ["Plat", "Lasagnes bolognaises"], ["Accompagnement", "Ratatouille"], ["Produit laitier", "Fromage portion"], ["Dessert", "Orange", "fruit"])
    ],
    apres: [
      D("Lundi", ["Entrée", "Salade de carottes râpées à l’orange"], ["Plat", "Escalope de volaille grillée, purée de pomme de terre"], ["Accompagnement", "Petits pois-carottes"], ["Produit laitier", "Yaourt nature"], ["Dessert", "Pommes", "fruit"]),
      D("Mardi", ["Entrée", "Salade de lentilles aux tomates cerises", "leg"], ["Plat", "Steak haché grillé, frites au four"], ["Accompagnement", "Salade verte"], ["Produit laitier", "Fromage portion"], ["Dessert", "Poire", "fruit"]),
      D("Mercredi", ["Entrée", "Taboulé aux légumes et pois chiches", "leg"], ["Plat", "Filet de colin rôti au four (non pané)"], ["Accompagnement", "Riz semi-complet et courgettes sautées", "cpl"], ["Produit laitier", "Fromage blanc nature"], ["Dessert", "Salade de fruits frais", "fruit"]),
      D("Jeudi", ["Entrée", "Céleri rémoulade léger"], ["Plat", "Omelette aux herbes, pâtes semi-complètes « al dente »", "cpl"], ["Accompagnement", "Haricots verts"], ["Produit laitier", "Yaourt nature sucré au miel (petite quantité)", "sucre"], ["Dessert", "Kiwi", "fruit"]),
      D("Vendredi", ["Entrée", "Salade de pois chiches aux légumes croquants", "leg"], ["Plat", "Lasagnes bolognaises (viande + lentilles pour enrichir en fibres et réduire la viande)", "leg"], ["Accompagnement", "Ratatouille"], ["Produit laitier", "Fromage portion"], ["Dessert", "Orange", "fruit"])
    ]
  };
  const cs = { ver: "avant", tag: "frit" };
  function caseUpdate() {
    const days = MENU[cs.ver];
    const nDays = t => days.filter(d => d.p.some(x => x[2] === t)).length;
    $("#menu-count").innerHTML = Object.entries(TAGS).map(([t, [l, c]]) => `<button type="button" class="chip ${c}" data-tag="${t}" aria-pressed="${t === cs.tag}" data-nohide>${l} : ${nDays(t)} j sur 5</button>`).join("");
    $("#menu").innerHTML = days.map(d => `<div class="card meal ${cs.ver === "avant" ? "before" : "after"}"><span class="when">${d.jour}</span>${d.p.map(([k, v, t]) => `<div class="zone ${t === cs.tag ? "on " + TAGS[t][1] : ""}" style="padding:4px 6px"><span class="tag">${k}</span><div style="font-size:.92rem">${v}</div></div>`).join("")}</div>`).join("");
  }
  seg($("#menu-seg"), [{ id: "avant", label: "Avant", cls: "bad" }, { id: "apres", label: "Après", cls: "good" }], cs.ver, v => { cs.ver = v; caseUpdate(); });
  $("#menu-count").addEventListener("click", e => { const b = e.target.closest("[data-tag]"); if (b) { cs.tag = b.dataset.tag; caseUpdate(); } });
})();
