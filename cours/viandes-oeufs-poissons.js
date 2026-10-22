/* ==========================================================================
   Cours : Viandes, œufs et poissons
   Source : documents/finis/Viandes, œufs et poissons.docx
   ========================================================================== */
(function () {
  const { $, $$, fmt, seg, explorer, hbars } = window.Fiches;
  const R = (name, rows, sub) => ({ name, rows, sub });
  const list = a => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;

  /* ---------------- Catégories de morceaux : animal + zone liés ---------------- */
  const CAT_TXT = {
    1: ["Cuisses, régions fessières, dos", "Peu de tissu conjonctif, masse musculaire importante."],
    2: ["Épaules, régions costales", "Riches en tissu conjonctif, masse musculaire réduite."],
    3: ["Extrémités des membres, collier, poitrine, muscles abdominaux", "Riches en tissu conjonctif, tendons, os et petits muscles."]
  };
  const MORC = {
    boeuf: { label: "Bœuf", c: [
      ["Côte", "Entrecôte et noix d’entrecôte", "Aloyau : filet, faux-filet, onglet, hampe", "Rumsteck, jumeau à bifteck, macreuse à bifteck", "Tende de tranche, plat de tranche, rond de tranche, aiguillette, baronne, araignée, poire, merlan, mouvant", "Bavette d’aloyau et de flanchet"],
      ["Gîte noix, rond de gîte", "Paleron", "Collier", "Basse côte"],
      ["Plat de côte", "Poitrine", "Jumeau à pot-au-feu", "Flanchet", "Jarret", "Queue", "Tendron", "Macreuse à pot-au-feu"]] },
    veau: { label: "Veau", c: [
      ["Côte", "Côte seconde", "Côte première longe", "Filet et côte filet", "Quasi", "Longe", "Noix et sous-noix"],
      ["Côte découverte", "Bas de carré", "Épaule"],
      ["Poitrine", "Tendron", "Flanchet", "Jarret", "Collier", "Pied"]] },
    mouton: { label: "Mouton", c: [
      ["Côte première et seconde", "Côte filet et filet", "Selle", "Gigot"],
      ["Carré", "Côte découverte", "Épaule"],
      ["Collier", "Haut de côte", "Poitrine"]] },
    agneau: { label: "Agneau", c: [
      ["Côtelettes", "Épaule roulée", "Filet", "Selle", "Gigot"],
      ["Épaule", "Côte découverte"],
      ["Poitrine", "Collier", "Haut de côte"]] },
    porc: { label: "Porc", c: [
      ["Filet, filet mignon, poitrine de filet", "Côtelettes", "Côte seconde", "Côte première", "Jambon", "Grillade", "Plat de côte", "Travers"],
      ["Épaule", "Échine", "Palette"],
      ["Poitrine", "Haut de côte", "Jarret arrière et avant", "Pied"]] }
  };
  // Zones du schéma : [x, y, l, h, catégorie, libellé]
  const ZONES = [
    [150, 82, 90, 70, 2, "Épaule"], [150, 152, 90, 58, 3, "Poitrine"],
    [240, 82, 140, 54, 1, "Dos"], [240, 136, 140, 74, 2, "Côtes"],
    [380, 82, 92, 98, 1, "Cuisse"], [380, 180, 92, 30, 3, "Abdomen"]
  ];
  const LEGS = [[166, 210], [206, 210], [400, 210], [440, 210]];
  const FILL = { 1: "var(--pro)", 2: "var(--pro-m)", 3: "var(--pro-s)" };
  const st = { ani: "boeuf", cat: 1 };
  let setCat;
  function drawAni() {
    const op = c => c === st.cat ? 1 : .55, txt = c => c === 1 ? "var(--card)" : "var(--fg)";
    const zone = ([x, y, w, h, c, l]) => `<g data-c="${c}" style="cursor:pointer" opacity="${op(c)}"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${FILL[c]}" stroke="var(--card)" stroke-width="3"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="${txt(c)}" font-family="Atkinson Hyperlegible, sans-serif">${l}</text></g>`;
    $("#ani-svg").innerHTML = `
      <path d="M472 92 C 492 120, 492 170, 486 200" fill="none" stroke="var(--line2)" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="72" cy="104" rx="44" ry="30" fill="var(--line2)"/>
      <g data-c="3" style="cursor:pointer" opacity="${op(3)}"><path d="M100 84 L152 80 L152 168 L104 128 Z" fill="${FILL[3]}" stroke="var(--card)" stroke-width="3"/><text x="132" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--fg)" font-family="Atkinson Hyperlegible, sans-serif">Collier</text></g>
      ${ZONES.map(zone).join("")}
      <g data-c="3" style="cursor:pointer" opacity="${op(3)}">${LEGS.map(([x, y]) => `<rect x="${x}" y="${y}" width="26" height="74" rx="6" fill="${FILL[3]}" stroke="var(--card)" stroke-width="3"/>`).join("")}<text x="300" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">membres</text></g>`;
    const m = MORC[st.ani];
    $("#cat-cards").innerHTML = [1, 2, 3].map(c => `<div class="card pro ${c === st.cat ? "tint" : ""}" style="${c === st.cat ? "" : "opacity:.65"}">
      <span class="tag">${c === 1 ? "1re" : c + "e"} catégorie · ${CAT_TXT[c][0]}</span><p>${CAT_TXT[c][1]}</p>
      <div class="pills pro">${m.c[c - 1].map(x => `<span>${x}</span>`).join("")}</div></div>`).join("");
  }
  seg($("#ani-seg"), Object.entries(MORC).map(([id, a]) => ({ id, label: a.label, cls: "pro" })), "boeuf", v => { st.ani = v; drawAni(); });
  setCat = seg($("#cat-seg"), [{ id: "1", label: "1re", cls: "pro" }, { id: "2", label: "2e", cls: "pro" }, { id: "3", label: "3e", cls: "pro" }], "1", v => { st.cat = +v; drawAni(); });
  $("#ani-svg").addEventListener("click", e => { const g = e.target.closest("[data-c]"); if (g) setCat(g.dataset.c); });

  /* ---------------- Volailles ---------------- */
  explorer($("#vol-chips"), $("#vol-panel"), [{ cls: "pro", label: "Volailles", items: [
    R("Coquelet", [["Âge", "21 à 30 jours, avant la maturité sexuelle"], ["Chair", "Tendre mais insipide et flasque"]]),
    R("Coq", [["Âge", "Mâle reproducteur de 18 à 24 mois"], ["Poids", "3,5 à 5 kg"]]),
    R("Chapon", [["Âge", "Jeune coq castré de 6 à 7 mois"], ["Élevage", "Engraissé longtemps : deux fois plus gros qu’un poulet. En liberté, nourri de céréales et de produits laitiers ; en épinette le dernier mois"], ["Chair", "Très moelleuse, persillée, très fine"]]),
    R("Poularde", [["Âge", "Jeune femelle de 4 à 6 mois, avant la maturité sexuelle"], ["Élevage", "En liberté, puis engraissée dans la pénombre en épinette le dernier mois"], ["Chair", "Goût très fin, tendre, très blanche"]]),
    R("Poule", [["Âge", "Femelle du coq, 18 à 24 mois"], ["Élevage", "Pour la ponte ; abattue quand la production d’œufs faiblit. Prix bas"], ["Chair", "Ferme, un peu grasse : cuisson lente et prolongée"]]),
    R("Poulet", [["Quoi", "Le petit de la poule"]]),
    R("Dinde", [["Âge", "12 à 18 mois"], ["Poids", "6 à 7 kg"], ["Chair", "Assez coriace et sèche"]]),
    R("Dindonneau", [["Âge", "Jeune volaille de 6 à 9 mois"], ["Chair", "Peu nerveuse"]]),
    R("Canard", [["Âge", "3 à 4 mois"], ["Poids", "1,5 à 3 kg"], ["Chair", "Très tendre, goût particulier assez prononcé"]]),
    R("Pintade", [["Âge", "Gibier domestique de 6 mois"], ["Chair", "Ferme, assez sèche : cuisson douce conseillée"]]),
    R("Pintadeau", [["Âge", "Environ 3 mois"], ["Poids", "Environ 500 g"], ["Chair", "Savoureuse"]]),
    R("Oie", [["Âge", "8 mois"], ["Poids", "3 à 5 kg"], ["Chair", "Goûteuse"]]),
    R("Pigeonneau", [["Âge", "20 à 30 jours"], ["Poids", "Environ 250 g"], ["Chair", "Très tendre"]])
  ] }]);

  /* ---------------- Poissons : milieu, lipides, pêche ---------------- */
  const MIL = {
    douce: ["Ablette", "Barbeau", "Brochet", "Carpe", "Goujon", "Hotu", "Loche", "Lotte", "Omble", "Perche", "Perche truitée", "Poisson-chat", "Sandre ou doré", "Tanche", "Truite"],
    mer: ["Anchois", "Bar", "Barbue", "Cabillaud", "Carrelet", "Capitaine", "Chinchard", "Colin", "Congre", "Daurade", "Espadon", "Merlu", "Maquereau", "Merlan", "Rouget barbet", "Sardine", "Thon", "Turbot"],
    mixte: ["Anguille", "Esturgeon", "Saumon"]
  };
  seg($("#mil-seg"), [{ id: "douce", label: "Eau douce", cls: "eau" }, { id: "mer", label: "Eau de mer", cls: "eau" }, { id: "mixte", label: "Eau mixte", cls: "eau" }], "douce", k => {
    $("#mil-list").innerHTML = MIL[k].map(x => `<span>${x}</span>`).join("");
  });

  const FAT = [
    ["maigre", "Brochet", 0.9], ["maigre", "Cabillaud", 0.5], ["maigre", "Lieu noir", 0.8], ["maigre", "Lieu ou colin d’Alaska", 0.6], ["maigre", "Merlan", 0.5], ["maigre", "Sole", 0.6], ["maigre", "Thon jaune (albacore)", 0.9],
    ["maigre", "Bar commun sauvage", 2], ["maigre", "Barbue", 3], ["maigre", "Daurade rose", 2], ["maigre", "Flétan", 1.3], ["maigre", "Grondin", 2], ["maigre", "Mérou", 1.3], ["maigre", "Perche", 1.2],
    ["demi", "Anchois", 6], ["demi", "Bar ou loup d’élevage", 4], ["demi", "Bonite", 8], ["demi", "Brème", 4], ["demi", "Carpe d’élevage", 5], ["demi", "Capitaine", 6.5], ["demi", "Daurade grise", 5], ["demi", "Espadon", 6], ["demi", "Rouget barbet", 9.5], ["demi", "Sardine", 9.5], ["demi", "Saumon sauvage", 9], ["demi", "Thon", 5], ["demi", "Thon rouge", 7], ["demi", "Turbot d’élevage", 4],
    ["gras", "Anguille", 18.5], ["gras", "Flétan noir", 12.5], ["gras", "Hareng", 11.5], ["gras", "Maquereau", 12.5], ["gras", "Saumon d’élevage", 12.5]
  ];
  const FAT_L = { maigre: "maigre", demi: "demi-gras", gras: "gras" };
  seg($("#fat-seg"), [{ id: "tous", label: "Tous", cls: "lip" }, { id: "maigre", label: "Maigres", cls: "lip" }, { id: "demi", label: "Demi-gras", cls: "lip" }, { id: "gras", label: "Gras", cls: "lip" }], "gras", k => {
    const rows = FAT.filter(f => k === "tous" || f[0] === k).sort((a, b) => b[2] - a[2]);
    hbars($("#fat-bars"), rows.map(([c, n, v]) => ({ label: n, sub: FAT_L[c], v, cls: "lip", sel: c === "gras" })), { max: 20, unit: "%" });
  });

  const PECHE = {
    duree: { rows: [["Petite pêche", [0, 1], "moins de 24 h"], ["Pêche côtière", [1, 3], "1 à 3 jours"], ["Pêche au large", [4, 20], "4 à 20 jours"], ["Grande pêche", 21, "plus de 21 jours"]], max: 24 },
    bateau: { rows: [["Petite pêche", 10, "moins de 10 m"], ["Pêche côtière", [10, 20], "10 à 20 m"], ["Pêche au large", [20, 60], "20 à 60 m"], ["Grande pêche", [70, 90], "70 à 90 m"]], max: 95 }
  };
  seg($("#pec-seg"), [{ id: "duree", label: "Durée de la sortie", cls: "eau" }, { id: "bateau", label: "Taille du bateau", cls: "eau" }], "duree", k => {
    hbars($("#pec-bars"), PECHE[k].rows.map(([l, v, t]) => ({ label: l, v, text: t, cls: "eau" })), { max: PECHE[k].max });
  });

  explorer($("#lab-chips"), $("#lab-panel"), [{ cls: "eau", label: "Labels", items: [
    R("Charte qualité « Aquaculture de nos régions » (Cipa)", [["Règles", list(["Élevage et transformation en France", "Pêche sur commande", "Livraison sur l’étal en 72 heures maximum", "Traçabilité des œufs à la transformation, inscrite au registre d’élevage", "Contrôle par les services vétérinaires", "Respect du bien-être du poisson", "Contrôle par un organisme indépendant", "Démarche de développement durable"])]]),
    R("Label Rouge", [["Règles", list(["Garantie de la date de mort du poisson", "Qualité organoleptique supérieure aux poissons sans label", "Traçabilité des poissons", "Contrôle par un organisme indépendant agréé, une fois par an"])]]),
    R("AB (agriculture biologique)", [["Règles", list(["Renouvellement de l’eau des bassins", "Pas de manipulation génétique", "Développement des poissons plus long", "Alimentation à base de produits marins, sans colorants de synthèse", "Densité d’élevage inférieure à la moyenne"])]])
  ] }]);

  /* ---------------- Œuf : coupe interactive ---------------- */
  const BLANC = "Le blanc (albumen) fait <b>60 %</b> du poids de l’œuf : transparent, visqueux, il coagule entre <b>62 et 65 °C</b> et devient blanc intense. Son dioxyde de carbone est antimicrobien et protège le jaune ; en vieillissant, le CO₂ diminue et c’est la hausse du pH qui prend le relais.";
  const EGG = {
    coquille: ["Coquille", "Environ <b>10 %</b> du poids de l’œuf.", `<div class="stack3 hideable" style="margin-top:8px"><div class="pro" style="flex:0 0 94%">Carbonate de chaux 94 %</div><div class="pro" style="flex:0 0 6%;--m:var(--pro-s)"></div></div><p>Plus 1 % de carbonate de magnésium, 1 % de phosphate de calcium et 4 % de matières organiques, surtout protéiques.</p>`],
    membranes: ["Membranes coquillières", "Deux membranes, externe et interne, accolées à la coquille <b>sauf au pôle arrondi</b> (là où se forme la chambre à air).", "<p>Deux feuillets riches en <b>kératine</b> (protéine fibreuse).</p>"],
    fluide: ["Blanc fluide", "À la périphérie : environ <b>40 % du blanc</b> total.", `<p>${BLANC}</p>`],
    epais: ["Blanc épais", "Un gel gluant et visqueux, qui reste au contact du jaune et s’étale quand on casse l’œuf.", `<p>${BLANC}</p>`],
    chalazes: ["Chalazes", "Filaments d’albumine opaques et épais, de chaque côté du jaune.", "<p>Ils maintiennent le jaune <b>au centre</b> du blanc.</p>"],
    jaune: ["Jaune (vitellus)", "Environ <b>30 %</b> du poids de l’œuf.", "<p>Il contient la plupart des lipides et le cholestérol (voir l’onglet Composition).</p>"],
    vitelline: ["Membrane vitelline", "Entoure le jaune.", "<p>Transparente, faite de plusieurs couches superposées, jaune clair à jaune foncé.</p>"],
    germe: ["Germe (cicatrice, disque germinatif)", "Petite tache irrégulière, dans le jaune d’un œuf non fécondé.", "<p>Seulement du cytoplasme : il n’a <b>pas de rôle nourricier</b>.</p>"],
    air: ["Chambre à air", "Poche d’air apparue à la ponte, par le <b>choc thermique</b> entre l’intérieur de la poule et l’extérieur.", "<p>Elle grandit pendant le stockage : le jaune et le blanc se contractent, le blanc se déshydrate. Sa taille est un <b>critère de fraîcheur</b>.</p>"]
  };
  const EGGP = "M40 150 C 40 70, 130 25, 250 25 C 380 25, 465 80, 465 150 C 465 220, 380 275, 250 275 C 130 275, 40 230, 40 150 Z";
  const sc = s => `transform="translate(252 150) scale(${s}) translate(-252 -150)"`;
  let setEgg;
  function drawEgg(k) {
    const f = (id, base) => id === k ? "var(--pro-m)" : base, s = id => id === k ? `stroke="var(--pro)" stroke-width="3"` : `stroke="var(--line2)" stroke-width="1.5"`;
    const P = 'style="cursor:pointer"';
    $("#egg-svg").innerHTML = `
      <path d="${EGGP}" data-k="coquille" ${P} fill="${f("coquille", "var(--line2)")}" ${s("coquille")}/>
      <path d="${EGGP}" data-k="membranes" ${P} ${sc(.955)} fill="${f("membranes", "var(--card)")}" ${s("membranes")}/>
      <path d="${EGGP}" data-k="fluide" ${P} ${sc(.925)} fill="${f("fluide", "var(--bg)")}" stroke="none"/>
      <path d="M62 150 C 62 108, 82 76, 112 62 C 94 100, 94 200, 112 238 C 82 224, 62 192, 62 150 Z" data-k="air" ${P} fill="${f("air", "var(--eau-s)")}" ${s("air")}/>
      <ellipse cx="272" cy="150" rx="128" ry="90" data-k="epais" ${P} fill="${f("epais", "var(--card)")}" ${s("epais")}/>
      <g data-k="chalazes" ${P}><rect x="140" y="138" width="70" height="24" fill="transparent"/><rect x="334" y="138" width="70" height="24" fill="transparent"/>
        <path d="M206 150 q -6 -9 -12 0 t -12 0 t -12 0 t -12 0 t -12 0 M338 150 q 6 -9 12 0 t 12 0 t 12 0 t 12 0 t 12 0" fill="none" stroke="${k === "chalazes" ? "var(--pro)" : "var(--muted)"}" stroke-width="${k === "chalazes" ? 4 : 2.5}"/></g>
      <circle cx="272" cy="150" r="68" data-k="vitelline" ${P} fill="${f("vitelline", "var(--glu-m)")}" ${s("vitelline")}/>
      <circle cx="272" cy="150" r="61" data-k="jaune" ${P} fill="${f("jaune", "var(--glu-s)")}" stroke="none"/>
      <ellipse cx="272" cy="102" rx="13" ry="7" data-k="germe" ${P} fill="${f("germe", "var(--pro-s)")}" ${s("germe")}/>`;
    const [n, a, b] = EGG[k];
    $("#egg-panel").innerHTML = `<div><span class="tag">Partie de l’œuf</span><h3>${n}</h3><p style="margin-top:4px">${a}</p>${b}</div>`;
  }
  $("#egg-stack").innerHTML = [["Coquille", 10], ["Blanc", 60], ["Jaune", 30]].map(([n, v]) => `<div style="flex:0 0 ${v}%">${n} ${v} %</div>`).join("");
  const eggSeg = document.createElement("div");
  $("#egg-svg").after(eggSeg);
  setEgg = seg(eggSeg, Object.entries(EGG).map(([id, e]) => ({ id, label: e[0].split(" (")[0], cls: "pro" })), "jaune", drawEgg);
  $("#egg-svg").addEventListener("click", e => { const t = e.target.closest("[data-k]"); if (t) setEgg(t.dataset.k); });

  /* ---------------- Calibre ---------------- */
  const CAL = [["≥ 73 g", "XL · très gros", w => w >= 73], ["≥ 63 et < 73 g", "L · gros", w => w >= 63 && w < 73], ["> 53 et < 63 g", "M · moyen", w => w > 53 && w < 63], ["≤ 53 g", "S · petit", w => w <= 53]];
  function cal() {
    const w = +$("#cal").value;
    $("#cal-o").textContent = w + " g";
    $("#cal-tb").innerHTML = CAL.map(([p, c, t]) => `<tr class="${t(w) ? "sel" : ""}"><td class="n">${p}</td><th>${c}</th></tr>`).join("");
  }
  $("#cal").addEventListener("input", cal);
  cal();

  /* ---------------- Chambre à air et mirage ---------------- */
  const EGGV = "M80 12 C 120 12, 145 70, 145 115 C 145 160, 117 190, 80 190 C 43 190, 15 160, 15 115 C 15 70, 40 12, 80 12 Z";
  function ch() {
    const h = +$("#ch").value, d = 12 + h * 5.5;
    $("#ch-o").textContent = fmt(h, 1) + " mm";
    $("#mir-svg").innerHTML = `<defs><clipPath id="mirclip"><path d="${EGGV}"/></clipPath></defs>
      <path d="${EGGV}" fill="var(--glu-s)" stroke="var(--fg)" stroke-width="2.5"/>
      <g clip-path="url(#mirclip)"><path d="M0 0 H160 V${d} Q 120 ${d - 8 - h * 1.5} 80 ${d + h * 1.2} Q 40 ${d - 8 - h * 1.5} 0 ${d} Z" fill="var(--card)" stroke="var(--fg)" stroke-width="2"/></g>
      <circle cx="${80 + h * 2.2}" cy="${118 - h * 3.2}" r="34" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/>`;
    const cats = [
      [h <= 4, "good", "Extra-frais possible", "Chambre à air de 4 mm maximum à l’emballage."],
      [h < 6, "good", "Frais (catégorie A)", "Moins de 6 mm, cas des petits producteurs."],
      [h <= 9, "bad", "Catégorie B", "9 mm maximum."]
    ];
    const ok = cats.find(c => c[0]);
    $("#ch-out").innerHTML = ok
      ? `<div class="card ${ok[1]}"><span class="tag">Classement possible</span><h3>${ok[2]}</h3><p>${ok[3]}</p></div>`
      : `<div class="card bad"><span class="tag">Au-delà</span><h3>Hors des catégories A et B</h3><p>Plus de 9 mm : au-delà de la limite de la catégorie B.</p></div>`;
    $("#ch-out").innerHTML += `<p style="font-size:.9rem;color:var(--muted)">Au mirage, plus l’œuf vieillit, plus la chambre à air grandit et plus le jaune s’éloigne du centre. Le schéma est qualitatif.</p>`;
  }
  $("#ch").addEventListener("input", ch);
  ch();

  /* ---------------- Flottage ---------------- */
  const FLO = [["1 jour", 168, "Au fond, couché."], ["4 jours", 138, "Il commence à se soulever."], ["8 à 10 jours", 108, "À mi-hauteur."], ["15 jours", 72, "Près de la surface."], ["15 jours à 3 semaines", 38, "Il flotte à la surface."]];
  seg($("#flo-seg"), FLO.map((f, i) => ({ id: String(i), label: f[0], cls: "eau" })), "0", v => {
    const [l, y, t] = FLO[+v];
    $("#flo-svg").innerHTML = `<rect x="40" y="38" width="140" height="150" fill="var(--eau-s)"/>
      <path d="M40 10 V188 H180 V10" fill="none" stroke="var(--fg)" stroke-width="3"/>
      <line x1="40" y1="38" x2="180" y2="38" stroke="var(--eau)" stroke-width="2"/>
      <ellipse cx="110" cy="${y}" rx="21" ry="14" fill="var(--glu-s)" stroke="var(--fg)" stroke-width="2"/>`;
    $("#flo-txt").innerHTML = `<b>${l}</b> : ${t}`;
  });

  /* ---------------- Code de la coquille ---------------- */
  const CODE = {
    0: ["FRT01", "Œufs bio", "Poules en plein air, selon le cahier des charges de l’agriculture biologique : élevages moins denses, abris et végétation, alimentation <b>bio à 90 %</b>."],
    1: ["TUW01", "Œufs de plein air", "Parcours extérieur surtout couvert de végétation, au moins <b>4 m² par poule</b>."],
    2: ["ZOT01", "Œufs au sol", "Poules dans des bâtiments, <b>sans accès</b> à l’air libre."],
    3: ["TUV01", "Œufs de batterie", "Poules <b>en cage</b>, entassées, cages souvent peu aménagées."]
  };
  const PART = { mode: "Mode d’élevage", pays: "Pays d’origine", prod: "Code producteur + n° du bâtiment", dcr: "Date de consommation recommandée" };
  const cs = { code: "0", part: "mode" };
  function drawCode() {
    const [p, t, d] = CODE[cs.code], z = k => `class="zone ${cs.part === k ? "on" : ""} pro" style="display:inline-block;padding:2px 6px"`;
    $("#code-stamp").innerHTML = `<span ${z("mode")}>${cs.code}</span> <span ${z("pays")}>FR</span> <span ${z("prod")}>${p}</span><br><span ${z("dcr")}>DCR 11 08</span>`;
    $("#code-out").innerHTML = `<span class="tag">Code ${cs.code}</span><h3>${t}</h3><p>${d}</p><p style="margin-top:6px">Partie surlignée : <b>${PART[cs.part]}</b>.</p>`;
  }
  seg($("#code-seg"), [0, 1, 2, 3].map(i => ({ id: String(i), label: `${i} · ${CODE[i][1].replace("Œufs ", "")}`, cls: "pro" })), "0", v => { cs.code = v; drawCode(); });
  seg($("#code-hot"), Object.entries(PART).map(([id, l]) => ({ id, label: l, cls: "pro" })), "mode", v => { cs.part = v; drawCode(); });

  /* ---------------- Composition : comparateur lié au détail ---------------- */
  const NC = "non chiffré dans le cours";
  const FOOD = {
    boucherie: { label: "Viande de boucherie", cls: "pro", eau: 70, pro: 18, lip: 10, kcal: [130, 230], kcalT: "130 à 230 kcal (maigre à grasse)" },
    volaille: { label: "Volaille", cls: "pro", eau: null, pro: 27, lip: null, kcal: [150, 200], kcalT: "150 crue · 200 cuite" },
    gibier: { label: "Gibier", cls: "pro", eau: 64.4, pro: 29.6, lip: 3.74, kcal: null },
    poisson: { label: "Poissons", cls: "eau", eau: [65, 80], pro: 19, lip: [1, 10], lipT: "de moins de 1 à plus de 10 g", kcal: [100, 200] },
    calamar: { label: "Calamar", cls: "eau", eau: 61.1, pro: 32.5, lip: 1.4, kcal: 149 },
    crevette: { label: "Crevette cuite", cls: "eau", eau: 74.9, pro: 20.5, lip: 0.8, kcal: 91.3 },
    oeuf: { label: "Œuf", cls: "pro", eau: 75, pro: 12.5, lip: 10, kcal: 150 }
  };
  const NUT = { pro: ["Protéines", "g", 35], lip: ["Lipides", "g", 12], eau: ["Eau", "g", 85], kcal: ["Énergie", "kcal", 240] };
  const cmp = { nut: "pro", food: "boucherie" };
  let setFood;
  function drawCmp() {
    const [nl, u, max] = NUT[cmp.nut];
    const v = f => f[cmp.nut], top = x => Array.isArray(x) ? x[1] : x;
    const rows = Object.entries(FOOD).sort((a, b) => (top(v(b[1])) || 0) - (top(v(a[1])) || 0)).map(([id, f]) => {
      const x = v(f);
      return { id, label: f.label, v: x == null ? 0 : x, text: x == null ? NC : (cmp.nut === "kcal" && f.kcalT) || (cmp.nut === "lip" && f.lipT) || null, cls: f.cls, sel: id === cmp.food };
    });
    hbars($("#cmp-bars"), rows, { max, unit: u });
    $$("#cmp-bars .hbar").forEach(b => b.style.cursor = "pointer");
    $("#cmp-note").innerHTML = `${nl} pour 100 g. ${cmp.nut === "lip" ? "Volaille : la teneur dépend du morceau (voir son détail). " : ""}Touchez une barre pour voir le détail de l’aliment.`;
    drawFood();
  }
  $("#cmp-bars").addEventListener("click", e => { const b = e.target.closest(".hbar[data-id]"); if (b) setFood(b.dataset.id); });

  const tbl = (rows, head = ["Nutriment", "Teneur", "Analyse"]) => `<div class="tbl"><table><thead><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr><th>${r[0]}</th>${r.slice(1).map((c, i) => `<td${i === 0 ? ' class="n"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const ag = (s, m, p, extra = "") => `<div class="card"><span class="tag">Répartition des acides gras</span><div class="stack3 hideable"><div class="bad-f" style="flex:0 0 ${s}%">Saturés ${s} %</div><div class="lip" style="flex:0 0 ${m}%">Mono ${m} %</div><div class="glu" style="flex:0 0 ${p}%">Poly ${p} %</div></div>${extra}</div>`;
  const bars = (id, title) => `<div class="card"><span class="tag">${title}</span><div id="${id}"></div></div>`;

  const DETAIL = {
    boucherie: () => tbl([
      ["Eau", "70 g", "Varie avec les protéines et les lipides : <b>microbiologiquement instable</b>."],
      ["Protéines", "18 g", "Importante source de protéines animales. Varie selon l’âge (la masse maigre baisse avec l’âge, par protéolyse), la catégorie du morceau (la 1re est la plus riche), l’espèce, l’alimentation. <b>Protéines intracellulaires</b> (musculaires) : CUD proche de 95 %, valeur biologique 75 %, pas de facteur limitant ; riches en lysine, leucine, isoleucine, acides aminés soufrés. <b>Protéines extracellulaires</b> : CUD et valeur biologique médiocres ; facteurs limitants : acides aminés soufrés, tryptophane."],
      ["Lipides", "10 g", "La teneur la plus variable : alimentation, morceau, parage, mode de vie, âge. Surtout des triglycérides dans le tissu adipeux inter- et intramusculaire."],
      ["Glucides", "Négligeables (cheval : 2 à 3 %)", "Le glycogène devient acide lactique pendant la maturation et la <b>rigor mortis</b> (rigidité cadavérique)."],
      ["Énergie", "Selon les lipides", "Maigres 130 kcal (550 kJ) · demi-grasses 170 kcal (700 kJ) · grasses 230 kcal (1 000 kJ) pour 100 g."],
      ["Minéraux", "", "Bonne, voire très bonne source de sodium, calcium, magnésium, sélénium. <b>Fer héminique</b> élevé et bien absorbé : les viandes rouges sont les plus riches (transport de l’oxygène). Zinc plus biodisponible que dans le végétal : bavette d’aloyau crue, <b>7 mg/100 g</b>."],
      ["Vitamines", "", "Peu de liposolubles malgré les lipides. Viandes rouges très riches en <b>B12 et B1</b> ; B3 et B6 intéressantes."]
    ]) + `<div class="g2">${bars("d-cls", "Trois classes de viande : lipides pour 100 g")}${bars("d-cov", "100 g de viande rouge couvrent environ")}</div>` + ag(45, 40, 15, `<p style="margin-top:6px">Parmi les saturés, <b>55 %</b> d’acides laurique, myristique et palmitique.</p>`),
    volaille: () => tbl([
      ["Protéines", "27 %", "Viandes maigres riches en protéines animales. Moins de collagène que la boucherie : rapport collagène / protéines faible, <b>bonne digestibilité</b>."],
      ["Lipides", "Selon le morceau", "Voir le graphique. Élevage <b>industriel</b> : gras important, visible, riche en saturés. <b>Traditionnel</b> : gras dans le muscle, plus d’insaturés."],
      ["Glucides", "Négligeables", "Transformés en acide lactique pendant la rigor mortis."],
      ["Énergie", "150 kcal crue · 200 kcal cuite", "Soit 650 et 800 kJ pour 100 g."],
      ["Minéraux", "", "Proches des viandes de boucherie, sauf le fer et le zinc (<b>deux fois moins</b> de zinc)."],
      ["Vitamines", "", "B12 : 100 g couvrent <b>25 %</b> des apports conseillés de l’adulte. B3 : davantage. B1 : presque négligeable."]
    ]) + bars("d-pou", "Poulet cru : lipides par morceau") + ag(35, 45, 20) + `<p style="font-size:.86rem;color:var(--muted)">Le tableau du cours affiche aussi « lipides 27 % », probable reprise de la ligne des protéines : cette valeur n’est pas reprise ici.</p>`,
    gibier: () => tbl([
      ["Eau", "64,4"], ["Protéines", "29,6"], ["Glucides", "0"], ["Lipides", "3,74"], ["Calcium", "11,8 mg"], ["Fer", "3,03 (unité non précisée)"], ["Cuivre", "0,18 mg"], ["Magnésium", "25,8 mg"],
      ["Phosphore", "187 mg"], ["Potassium", "29,362 mg (valeur du cours, probablement erronée)"], ["Zinc", "2,84 mg"], ["Vitamine K1", "1,63 µg"], ["Vitamine B1", "0,23 mg"], ["Vitamine B2", "0,36 mg"], ["Vitamine B3", "5,59 mg"], ["Vitamine B6", "0,5 mg"]
    ], ["Valeurs moyennes", "Teneur"]) + `<p style="font-size:.86rem;color:var(--muted)">Le cours ne précise pas l’unité de l’eau, des protéines, des glucides et des lipides (pour 100 g).</p>`,
    poisson: () => tbl([
      ["Eau", "Gras ≈ 65 % · demi-gras 70 à 75 % · maigres 80 %", "Riches en eau : <b>microbiologiquement instables</b>. Bien conserver pour éviter les micro-organismes pathogènes."],
      ["Protéines", "19 g", "<b>95 %</b> de protéines des fibres musculaires (dont 70 % de myofibrilles : myosine, actine ; et le sarcoplasme : myoglobine, enzymes), <b>5 %</b> du tissu conjonctif (les cartilagineux ont plus de collagène). Matières azotées non protéiques : acides aminés libres, acides nucléiques et nucléotides, bases azotées, urée et ammoniac, oxyde de triméthylamine. CUD : <b>95 %</b> (osseux), <b>75 %</b> (cartilagineux). Plus riches en <b>lysine</b> que les viandes."],
      ["Lipides", "Très maigres &lt; 1 g · maigres 1 à 3 g · demi-gras 3 à 10 g · gras &gt; 10 g", "Varient aussi avec la saison (jusqu’à 20 % entre juillet et octobre, contre 5 % entre février et avril), la reproduction, l’espèce, l’élevage, le morceau. Maigres : <b>65 %</b> de phospholipides (membranes). Demi-gras et gras : globules de réserve, triglycérides à <b>90 %</b>."],
      ["Cholestérol", "50 mg", "Les poissons sont une source de cholestérol."],
      ["Glucides", "–", "La chair n’en contient pas."],
      ["Énergie", "Maigres 100 · demi-gras 120 · gras 200 kcal", "Soit 400, 500 et 800 kJ pour 100 g. Varie avec les lipides."],
      ["Fer", "1 mg", "Petite source de fer héminique, bien absorbé."],
      ["Sodium", "80 mg", "Source de sodium."],
      ["Potassium", "300 mg", "Source élevée : attention en régime <b>pauvre en potassium</b>."],
      ["Calcium", "30 mg", "Petite source, faible biodisponibilité."],
      ["Magnésium", "30 mg", "Participe à la couverture des besoins."],
      ["Zinc", "Petite source", "Bien assimilé."],
      ["Sélénium", "Riche", "Grande source, bien assimilée."],
      ["Iode", "Très riche", "Très grande source."],
      ["Fluor", "Riche", "Très grande source."],
      ["Vitamines", "", "Liposolubles <b>A, D, E</b> et groupe B (surtout <b>B6 et B12</b>)."]
    ]) + ag(30, 40, 30),
    calamar: () => `<p style="font-size:.86rem;color:var(--muted)">Pris comme représentant des mollusques (CIQUAL 2022). Le titre du tableau dit « cuit à l’eau », la colonne dit « cru ».</p>` + tbl([
      ["Eau", "61,1 g", "Élevée : propice au développement microbien. Bien conserver, respecter la DLC."],
      ["Protéines", "32,5 g", "Source de protéines animales."],
      ["Lipides", "1,4 g", "Négligeables."],
      ["Glucides", "1,64 g", "Négligeables."],
      ["Énergie", "149 kcal (632 kJ)", "Relativement faible."],
      ["Fer", "5,77 mg", "Fer héminique, bien absorbé."],
      ["Sodium", "744 mg", "Grande source de sodium."],
      ["Potassium", "637 mg", "Source élevée : attention en régime pauvre en potassium."],
      ["Calcium", "180 mg", "Riche, biodisponibilité élevée."],
      ["Magnésium", "60 mg", "Grande source."],
      ["Zinc", "3,46 mg", "Source élevée, soutien du système immunitaire."],
      ["Rétinol", "203 µg", "L’analyse du cours sur cette ligne parle du sélénium : elle n’est pas reprise."],
      ["Vitamines", "B9 24 µg · B12 5,4 µg · B3 2,19 mg · B2 1,73 mg · C 8,5 mg", "Vitamines B (énergie, globules rouges) et vitamine C."]
    ]),
    crevette: () => `<p style="font-size:.86rem;color:var(--muted)">Prise comme représentante des crustacés (CIQUAL 2022).</p>` + tbl([
      ["Eau", "74,9 g", "Élevée : propice au développement microbien. Bien conserver, respecter la DLC."],
      ["Protéines", "20,5 g", "Source de protéines animales."],
      ["Lipides", "0,8 g", "Négligeables."],
      ["Glucides", "0,2 g", "Négligeables."],
      ["Énergie", "91,3 kcal (387 kJ)", "Relativement faible."],
      ["Fer", "2,24 mg", "Fer héminique, bien absorbé."],
      ["Sodium", "640 mg", "Grande source de sodium."],
      ["Potassium", "253 mg", "Source élevée : attention en régime pauvre en potassium."],
      ["Calcium", "177 mg", "Riche, biodisponibilité élevée."],
      ["Magnésium", "50 mg", "Participe aux besoins quotidiens."],
      ["Zinc", "0,97 mg", "Source faible."],
      ["Sélénium", "28,8 µg", "Grande source, bien assimilée."],
      ["Iode", "26,3 µg", "Très grande source."],
      ["Fluor", "0,3 mg/L", "Très grande source."],
      ["Vitamines", "B9 14,6 µg · B3 1,65 mg · B12 1,52 µg · K2 3,44 µg · E 1,26 mg", "Vitamines B ; environ <b>22 fois</b> la vitamine E du poulet ou du bœuf."]
    ]),
    oeuf: () => tbl([
      ["Eau", "75 %", "Riche en eau : microbiologiquement instable. Blanc : 90 % d’eau ; jaune : 50 %."],
      ["Protéines", "12,5 %", "Excellente qualité : les <b>9 acides aminés essentiels</b>, dont les soufrés et la lysine. Blanc : albumines (ovalbumine, conalbumine ou ovotransferrine), lysozyme, globulines. Jaune : lipovitelline (ovovitellines), phosvitine, ovolivétines, ovolipovitellines. Blanc cru peu digeste ; cuit, très digeste. Pour le jaune, la cuisson réduit un peu l’accès des enzymes (protéines plus agglomérées). Le jaune est plus digeste quand le blanc est coagulé et le jaune crémeux. Le cours indique 15,5 % de « macronutriments » dans le jaune contre 11 % dans le blanc."],
      ["Lipides", "10 %", "Surtout dans le <b>jaune</b>, sous forme de triglycérides ; presque rien dans le blanc. Source d’AG mono-insaturés."],
      ["Glucides", "Négligeables", "–"],
      ["Énergie", "150 kcal (600 kJ)", "Moyennement énergétique."],
      ["Calcium", "75 mg", "Couvre peu les besoins ; rapport Ca/P de 0,4 seulement."],
      ["Phosphore", "200 mg", "Source importante."],
      ["Sodium", "130 mg", "Le blanc est une source de sodium."],
      ["Potassium", "130 mg", "Peu élevé mais non négligeable."],
      ["Magnésium", "10 mg", "Négligeable."],
      ["Zinc", "1 mg", "Petite source."],
      ["Vitamine A", "180 µg", "Source élevée."],
      ["Vitamine D", "1,9 µg", "Petite source."],
      ["Vitamine E", "1,5 mg", "Petite source."],
      ["Vitamine B2", "0,5 mg", "Source élevée."],
      ["Vitamine B3", "Négligeable", "–"],
      ["Vitamine B5", "1,6 mg", "Source élevée."],
      ["Vitamine B8", "25 µg", "Riche."],
      ["Vitamine B9", "35 µg", "Petite source."],
      ["Vitamine B12", "1,5 µg", "Source élevée."]
    ]) + `<div class="g2">${bars("d-dig", "Digestibilité des protéines (CUD)")}${bars("d-chol", "Cholestérol pour 100 g")}</div>` +
      ag(35, 45, 20, `<p style="margin-top:6px">Polyinsaturés : oméga-6 <b>20 %</b>, oméga-3 <b>1,5 %</b> des acides gras totaux.</p>`) +
      `<div class="card ink tint"><span class="tag">Et le cholestérol ?</span><p>Il est dans le <b>jaune</b> ; le blanc apporte les acides aminés essentiels. Le cholestérol est indispensable : précurseur des hormones sexuelles et de la vitamine D. Environ <b><span class="num hideable">⅔</span> endogène</b> (fabriqué par le corps), <b><span class="num hideable">⅓</span> exogène</b> (alimentation). Deux types : LDL (« mauvais ») et HDL (« bon »). Aliments riches : fromages, viandes, charcuteries, fast-food, biscuits industriels.</p><p>En France, on mange environ <b>5 œufs par semaine</b> : bien loin de provoquer une hypercholestérolémie.</p></div>`
  };
  const EXTRA = {
    boucherie: () => {
      hbars($("#d-cls"), [{ label: "Maigres", v: 5, text: "moins de 5 %", cls: "lip" }, { label: "Demi-grasses", v: [5, 15], cls: "lip" }, { label: "Grasses", v: 18, text: "plus de 15 %", cls: "lip" }], { max: 20, unit: "%" });
      hbars($("#d-cov"), [{ label: "Fer", sub: "femme, pertes menstruelles élevées", v: 20, cls: "min" }, { label: "Fer", sub: "homme ; femme, pertes faibles ou normales", v: 30, cls: "min" }, { label: "Sélénium", sub: "adulte", v: 15, cls: "min" }], { max: 100, unit: "% des apports conseillés" });
    },
    volaille: () => hbars($("#d-pou"), [["Peau seule", 50], ["Cuisse avec peau", 12], ["Aile", 11], ["Pilon", 9], ["Filet avec peau", [4, 6]], ["Haut de cuisse", 4], ["Cuisse sans peau", 1.5], ["Filet", 1]].map(([l, v]) => ({ label: l, v, cls: "lip" })), { max: 50, unit: "%" }),
    oeuf: () => {
      hbars($("#d-dig"), [{ label: "Blanc cru", v: 50, text: "≈ 50 %", cls: "pro" }, { label: "Blanc cuit", v: 95, cls: "pro" }, { label: "Jaune cru", v: 100, cls: "pro" }, { label: "Jaune cuit", v: [90, 95], cls: "pro" }], { max: 100, unit: "%" });
      hbars($("#d-chol"), [{ label: "Jaune seul", v: 950, cls: "lip" }, { label: "Œuf entier", v: 400, cls: "lip" }, { label: "Poisson", sub: "pour comparer", v: 50, cls: "eau" }], { max: 1000, unit: "mg" });
    }
  };
  function drawFood() {
    const f = FOOD[cmp.food];
    $("#food-detail").innerHTML = `<h2 class="sec ${f.cls}">${f.label} <small>Valeurs pour 100 g</small></h2>` + DETAIL[cmp.food]();
    if (EXTRA[cmp.food]) EXTRA[cmp.food]();
  }
  setFood = seg($("#food-seg"), Object.entries(FOOD).map(([id, f]) => ({ id, label: f.label, cls: f.cls })), "boucherie", k => { cmp.food = k; drawCmp(); });
  seg($("#nut-seg"), Object.entries(NUT).map(([id, n]) => ({ id, label: n[0], cls: "pro" })), "pro", k => { cmp.nut = k; drawCmp(); });

  /* ---------------- Ma semaine : repères de fréquence ---------------- */
  const WK = [["rouge", "Viande rouge", "bœuf, mouton, cheval, agneau"], ["maigre", "Autre viande", "volaille, veau, lapin…"], ["pgras", "Poisson gras", "saumon, sardine, maquereau"], ["pmaigre", "Poisson maigre", "colin, cabillaud, sole…"], ["oeufs", "Œufs", "seuls ou en préparation"]];
  const wk = { rouge: 3, maigre: 2, pgras: 0, pmaigre: 1, oeufs: 2 };
  function drawWk() {
    $("#wk-in").innerHTML = `<span class="tag">Repas de la semaine</span>` + WK.map(([k, l, s]) => `<div class="stepper"><div><b>${l}</b><small>${s}</small></div><div class="ctrl" data-nohide><button type="button" data-k="${k}" data-d="-1" aria-label="Retirer : ${l}">−</button><output>${wk[k]}</output><button type="button" data-k="${k}" data-d="1" aria-label="Ajouter : ${l}">+</button></div></div>`).join("");
    const v = wk.rouge + wk.maigre, p = wk.pgras + wk.pmaigre;
    // Le titre porte les nombres choisis par l’utilisateur (data-nohide) ; le texte porte les repères à réviser
    const C = (ok, t, d) => `<div class="card ${ok === true ? "good" : ok === false ? "bad" : ""}"><span class="tag" data-nohide>${t}</span><p>${d}</p></div>`;
    $("#wk-out").innerHTML = [
      C(v >= 3 && v <= 4 ? true : v > 4 ? false : null, `Viandes : ${v} fois`, v >= 3 && v <= 4 ? "Dans le repère de 3 à 4 fois par semaine." : v > 4 ? "Au-dessus du repère de 3 à 4 fois par semaine." : "En dessous du repère : d’autres sources de protéines doivent compenser."),
      C(wk.rouge <= 2, `Dont viande rouge : ${wk.rouge} fois`, wk.rouge <= 2 ? "Limitée à 1 ou 2 fois maximum : c’est bon." : "Plus de 2 fois : à limiter à 1 ou 2 fois maximum."),
      C(p >= 2 && wk.pgras >= 1, `Poissons : ${p} fois, dont ${wk.pgras} gras`, p < 2 ? "Moins de 2 fois : le repère est au moins 2 fois par semaine." : wk.pgras < 1 ? "Il manque un poisson gras pour les oméga-3." : "Au moins 2 fois dont 1 gras : c’est bon."),
      C(wk.oeufs >= 1 && wk.oeufs <= 2 ? true : null, `Œufs : ${wk.oeufs} fois`, wk.oeufs > 2 ? "Au-delà du repère général (1 à 2 fois). Le cas pratique montre que 3 à 4 fois peut convenir sans viande." : wk.oeufs < 1 ? "Aucun œuf : ils peuvent être intégrés 1 à 2 fois par semaine." : "Dans le repère de 1 à 2 fois par semaine.")
    ].join("");
  }
  $("#wk-in").addEventListener("click", e => { const b = e.target.closest("button[data-k]"); if (!b) return; wk[b.dataset.k] = Math.max(0, Math.min(14, wk[b.dataset.k] + +b.dataset.d)); drawWk(); });
  drawWk();

  /* ---------------- Préparer ---------------- */
  const PREP = {
    viande: ["Les viandes", "<b>Parer</b> : retirer peaux, nerfs, excès de gras. Selon l’usage : dégraisser, désosser, découper, hacher. La <b>maturation</b> (plusieurs jours en chambre froide après abattage, notamment le bœuf) laisse les enzymes détendre les fibres : chair plus tendre, plus de saveur. La <b>marinade</b> (huile, aromates, épices, vin ou citron) attendrit, aromatise et limite les composés indésirables à haute température (amines hétérocycliques). En cuisine pro : mise sous vide, portions individuelles."],
    poisson: ["Les poissons", "Plus fragile que la viande : froid dès la pêche ou l’achat, préparation rapide. <b>Écailler</b>, <b>éviscérer</b>, puis selon l’espèce et la recette : désarêter, lever des filets, couper des <b>darnes</b> (tranches épaisses perpendiculaires à l’arête) ou des pavés ; garder ou retirer la peau. Marinade au citron ou au vinaigre : saveur, tendreté, moins d’oxydation, chair plus blanche. Coquillages <b>vivants</b> à la préparation, lavés à grande eau ; crustacés souvent cuits vivants."],
    oeuf: ["Les œufs", "Propres mais <b>non lavés</b> : le lavage abîme la cuticule protectrice et laisse entrer les germes. Cassés pendant la préparation ou juste avant la cuisson ; utilisés entiers, séparés (blanc, jaune) ou battus."]
  };
  seg($("#prep-seg"), [{ id: "viande", label: "Viandes", cls: "pro" }, { id: "poisson", label: "Poissons", cls: "eau" }, { id: "oeuf", label: "Œufs", cls: "pro" }], "viande", k => {
    $("#prep-out").innerHTML = `<h3>${PREP[k][0]}</h3><p>${PREP[k][1]}</p>`;
  });

  const CV = {
    douce: ["Douce et progressive", "Braisage, rôtissage lent, sous vide", "Garde la tendreté des fibres, évite la perte d’eau.", "Morceaux riches en collagène : bœuf à braiser, jarret, paleron."],
    vive: ["Vive et courte", "Grillade, poêle, plancha", "Croûte dorée par la <b>réaction de Maillard</b> : arômes puissants, couleur appétissante.", "Morceaux tendres : steak, escalope, filet."],
    longue: ["Longue", "Pot-au-feu, ragoût", "Le <b>collagène devient gélatine</b> : plats fondants et parfumés.", "Morceaux durs."]
  };
  seg($("#cv-seg"), [{ id: "douce", label: "Douce", cls: "pro" }, { id: "vive", label: "Vive", cls: "pro" }, { id: "longue", label: "Longue", cls: "pro" }], "douce", k => {
    const [t, m, e, p] = CV[k];
    $("#cv-out").innerHTML = `<span class="tag">${m}</span><h3>${t}</h3><p>${e}</p><p><b>Pour</b> : ${p}</p>`;
  });

  /* ---------------- Cuisson de l’œuf ---------------- */
  function tp() {
    const t = +$("#tp").value, b = t >= 65 ? 2 : t >= 62 ? 1 : 0, j = t >= 68;
    $("#tp-o").textContent = t + " °C";
    $("#tp-svg").innerHTML = `<path d="M30 80 C 20 40, 70 20, 110 28 C 160 20, 190 60, 178 95 C 170 130, 110 140, 70 130 C 40 125, 35 105, 30 80 Z" fill="${b ? "var(--card)" : "var(--bg)"}" fill-opacity="${[.5, .8, 1][b]}" stroke="${b === 2 ? "var(--fg)" : "var(--line2)"}" stroke-width="2" ${b ? "" : 'stroke-dasharray="5 4"'}/>
      <circle cx="105" cy="80" r="26" fill="${j ? "var(--glu-m)" : "var(--glu-s)"}" stroke="${j ? "var(--glu)" : "var(--glu-m)"}" stroke-width="3"/>
      ${j ? "" : `<ellipse cx="96" cy="70" rx="7" ry="4" fill="var(--card)" opacity=".8"/>`}`;
    $("#tp-out").innerHTML = `
      <div class="card ${b ? "good" : ""}"><span class="tag">Le blanc</span><p>${b === 2 ? "Coagulé, solide, <b>blanc intense</b> (au-delà de 65 °C)." : b ? "Il commence à prendre : il coagule <b>entre 62 et 65 °C</b>." : "Encore transparent et liquide : il ne prend qu’à partir de <b>62 °C</b>."}</p></div>
      <div class="card ${j ? "good" : ""}"><span class="tag">Le jaune</span><p>${j ? "Il prend à son tour, <b>vers 68 °C</b>." : "Encore liquide : il prend <b>vers 68 °C</b>."}</p></div>`;
  }
  $("#tp").addEventListener("input", tp);
  tp();

  /* ---------------- Sécurité sanitaire ---------------- */
  seg($("#san-seg"), [{ id: "viande", label: "Viandes", cls: "pro" }, { id: "poisson", label: "Poissons", cls: "eau" }, { id: "oeuf", label: "Œufs", cls: "pro" }], "viande", k => {
    ["viande", "poisson", "oeuf"].forEach(x => $("#san-" + x).hidden = x !== k);
  });

  /* ---------------- Conservation de la viande ---------------- */
  hbars($("#cons-bars"), [
    { label: "Film étirable", v: [3, 6], cls: "pro" },
    { label: "Sous vide, atmosphère protectrice", sub: "viande", v: [5, 10], cls: "pro" },
    { label: "Sous vide, atmosphère protectrice", sub: "charcuterie", v: 21, cls: "pro" },
    { label: "Sous vide avec CO₂", sub: "viande transformée, charcuterie", v: 30, text: "jusqu’à 30 j", cls: "pro" }
  ], { max: 32, unit: "j" });

  /* ---------------- Cas Camille : besoin en protéines ---------------- */
  const NOW = [40, 50];
  function cw() {
    const p = +$("#cw").value, need = [p * 1, p * 1.2];
    $("#cw-o").textContent = p + " kg";
    $("#cw-out").innerHTML = `<span class="tag">Besoin estimé</span><div class="big">${fmt(need[0], 0)}–${fmt(need[1], 0)} <small>g/jour</small></div>
      <div id="cw-bars"></div>
      <p>Il lui manque environ <b>${fmt(Math.max(0, need[0] - NOW[1]), 0)} à ${fmt(Math.max(0, need[1] - NOW[0]), 0)} g</b> par jour. Pour <span data-nohide>60 kg</span>, le cours arrondit le besoin à 60 à 70 g.</p>`;
    hbars($("#cw-bars"), [{ label: "Besoin", v: need, cls: "pro", sel: true }, { label: "Apports actuels", v: NOW, cls: "pro" }], { max: 110, unit: "g" });
  }
  $("#cw").addEventListener("input", cw);
  cw();
})();
