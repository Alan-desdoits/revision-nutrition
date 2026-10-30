/* ==========================================================================
   Cours : Étiquetage et repères alimentaires
   Source : documents/finis/Étiquetage et repères alimentaires.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Rôles ---------------- */
  hbars($("#bisc-bars"), [{ label: "Biscuit A", sub: "chocolat", v: 30, cls: "glu" }, { label: "Biscuit B", sub: "chocolat", v: 5, cls: "glu" }], { max: 100, unit: "%" });
  hbars($("#env-bars"), [
    { label: "Déforestation mondiale", v: 80 },
    { label: "Utilisation d’eau douce", v: 70 },
    { label: "Perte de biodiversité terrestre", v: 70 },
    { label: "Empreinte carbone en France", sub: "consommation, 2022", v: 22 }
  ], { max: 100, unit: "%", cls: "fl" });

  /* ---------------- Éco-score ---------------- */
  const ECO = {
    A: "Impact environnemental <b>très faible</b>.",
    B: "", C: "", D: "",
    E: "Impact environnemental <b>élevé</b>. Exemple du cours : un plat préparé au <b>bœuf importé d’Amérique du Sud</b>. Élevage bovin très émetteur de gaz à effet de serre, déforestation dans certaines zones, transport longue distance, emballages plastiques multiples : il serait probablement classé E."
  };
  let eco = "E";
  function ecoDraw() {
    $("#eco").innerHTML = "ABCDE".split("").map(l => `<button type="button" class="ns ns-${l.toLowerCase()}" aria-pressed="${l === eco}">${l}</button>`).join("");
    $("#eco-out").innerHTML = `<p>De <b>A</b> (impact très faible) à <b>E</b> (impact élevé).</p>${ECO[eco] ? `<p>${ECO[eco]}</p>` : ""}`;
  }
  $("#eco").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { eco = b.textContent; ecoDraw(); } });
  ecoDraw();

  /* ---------------- SIQO ---------------- */
  const S = (name, def, ex) => ({ name, rows: [["Garantit", def], ["Exemple", ex]] });
  explorer($("#siqo-chips"), $("#siqo-panel"), [
    { cls: "ink", label: "Origine", items: [
      S("AOC", "Appellation d’origine contrôlée, signe <b>français</b> : production, transformation et élaboration dans une même zone géographique.", "Le Roquefort."),
      S("AOP", "Appellation d’origine protégée, l’équivalent <b>européen</b> de l’AOC : un lien fort entre le produit et son terroir.", "Le Comté."),
      S("IGP", "Indication géographique protégée : <b>au moins une étape</b> (production, transformation ou élaboration) dans une zone déterminée.", "Les volailles de Bresse.")
    ] },
    { cls: "pro", label: "Qualité supérieure", items: [S("Label Rouge", "Un niveau de qualité supérieur aux produits courants de la même catégorie : goût, conditions de production ou caractéristiques nutritionnelles.", "Non précisé dans le cours.")] },
    { cls: "glu", label: "Recette traditionnelle", items: [S("STG", "Spécialité traditionnelle garantie : une recette ou un savoir-faire traditionnel, quelle que soit l’origine géographique.", "La mozzarella.")] },
    { cls: "fl", label: "Environnement", items: [S("AB", "Agriculture biologique : production respectueuse de l’environnement et du bien-être animal, sans produits chimiques de synthèse.", "Non précisé dans le cours.")] }
  ]);

  /* ---------------- NOVA ---------------- */
  const NOVA = [
    ["4", "Aliments ultra-transformés", "Le degré de transformation le plus élevé.", 58],
    ["3", "Aliments transformés", "", 72],
    ["2", "Ingrédients culinaires transformés", "Huile, beurre, sucre, sel…", 86],
    ["1", "Aliments bruts ou peu transformés", "", 100]
  ];
  let nova = 0;
  function novaDraw() {
    $("#nova").innerHTML = NOVA.map((n, i) => `<div class="pyr-row" style="--w:${n[3]}"><button type="button" class="glu" data-i="${i}" aria-pressed="${i === nova}" style="flex:1"><span data-nohide>Groupe ${n[0]}</span> · ${n[1]}</button></div>`).join("");
    const n = NOVA[nova];
    $("#nova-out").innerHTML = `<span class="tag" data-nohide>NOVA ${n[0]}</span><h3>${n[1]}</h3>${n[2] ? `<p>${n[2]}</p>` : ""}<p style="font-size:.85rem;color:var(--muted)">Le NOVA ne juge que la transformation, pas la composition nutritionnelle.</p>`;
  }
  $("#nova").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { nova = +b.dataset.i; novaDraw(); } });
  novaDraw();

  /* ---------------- Évolutions de l'étiquetage ---------------- */
  const TL = {
    "2016": "Déclaration nutritionnelle <b>obligatoire</b> pour presque tous les produits préemballés.",
    "2020": "Indiquer l’<b>origine de l’ingrédient principal</b> quand elle diffère de celle du produit final. Un fromage « fabriqué en France » avec du lait étranger doit le préciser.",
    "2024": "Extension en <b>restauration</b> : l’origine des viandes bovines, porcines et de volailles doit être indiquée, même dans les plats transformés (lasagnes au bœuf).",
    "2025": "Origine étendue aux <b>fruits secs</b>, aux fruits à coque décortiqués, aux fruits séchés et aux produits de <b>« fraîche découpe »</b> (salades prêtes à l’emploi)."
  };
  seg($("#tl-seg"), Object.keys(TL).map(y => ({ id: y, label: y, cls: "ink" })), "2016", y => { $("#tl-out").innerHTML = `<span class="tag">${y}</span><p style="color:var(--fg)">${TL[y]}</p>`; });

  /* ---------------- Mentions obligatoires ---------------- */
  const M = (name, regle, ex) => ({ name, rows: [["Règle", regle], ["Exemple", ex]] });
  explorer($("#ment-chips"), $("#ment-panel"), [
    { cls: "ink", label: "Le produit", items: [
      M("Dénomination de vente", "Le nom légal (« confiture extra de fraises ») ou, à défaut, le nom usuel (« biscuit sablé »). Elle reflète la nature réelle du produit.", "« Boisson à l’orange » n’est pas « jus d’orange 100 % » : la première peut ne contenir que quelques % de jus, avec de l’eau et des arômes."),
      M("Quantité nette", "En volume (mL, L) pour les liquides, en masse (g, kg) pour les solides.", "Produit conservé dans un liquide (maïs, haricots) : aussi le poids net égoutté."),
      M("Opérateur et numéro de lot", "Nom et adresse du fabricant ou du distributeur. Le lot assure la traçabilité et facilite les rappels.", "Un rappel sanitaire cible le lot concerné.")
    ] },
    { cls: "bad-f", label: "La composition", items: [
      M("Liste des ingrédients", "Tous les ingrédients, par <b>ordre décroissant de poids</b> à la fabrication. Les additifs avec leur catégorie et leur nom ou code.", "« Colorant : E120 »."),
      M("Allergènes", "Mis en évidence : gras, majuscules, soulignés.", "Farine de <b>BLÉ</b>, sucre, huile de palme, <b>ŒUFS</b>, poudre de cacao, arômes."),
      M("Quantité de certains ingrédients", "Un ingrédient mis en avant sur l’emballage voit sa proportion indiquée.", "« Pizza au jambon (20 % jambon) ».")
    ] },
    { cls: "good-f", label: "Santé, origine", items: [
      M("Dates", "DLC pour les denrées très périssables, DDM pour les denrées stables (voir ci-dessous).", "Viande hachée : DLC. Pâtes, biscuits : DDM."),
      M("Origine", "Obligatoire pour certaines denrées (miel, huile d’olive, viandes). Depuis 2020, si l’ingrédient principal n’a pas l’origine affichée pour le produit, la mentionner.", "Un fromage « fabriqué en France » avec du lait allemand : « origine du lait : Allemagne »."),
      M("Déclaration nutritionnelle", "Depuis 2016, pour presque tous les préemballés, pour 100 g ou 100 mL : énergie (kJ et kcal), lipides dont saturés, glucides dont sucres, protéines, sel. Fibres, vitamines, minéraux en option.", "Pour 100 g : 450 kcal · lipides 20 g (dont saturés 10 g) · glucides 60 g (dont sucres 30 g) · protéines 5 g · sel 0,8 g."),
      M("Mentions supplémentaires", "Pour certaines denrées : titre alcoométrique au-delà de 1,2 % d’alcool, mode d’emploi si la préparation l’exige, conditions de conservation particulières.", "Cuisson d’un plat surgelé ; « à conserver au réfrigérateur après ouverture ».")
    ] }
  ]);

  /* ---------------- DLC ou DDM ---------------- */
  const DATES = [["Viande hachée", "DLC"], ["Pâtes", "DDM"], ["Biscuits", "DDM"], ["Lasagnes fraîches réfrigérées", "DLC"]];
  const dAns = {};
  function datesDraw() {
    const ok = DATES.filter(([n, r]) => dAns[n] === r).length;
    $("#dates").innerHTML = `<span class="tag" data-nohide>${Object.keys(dAns).length ? `${ok} bonne${ok > 1 ? "s" : ""} réponse${ok > 1 ? "s" : ""} sur ${DATES.length}` : "Quelle date pour chaque produit ?"}</span>` +
      DATES.map(([n, r]) => { const a = dAns[n]; return `<div class="qrow" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px 12px;padding:8px 0;border-bottom:1px solid var(--line)"><div><b style="display:block">${n}</b>${a ? `<small style="color:${a === r ? "var(--good)" : "var(--bad)"}">${a === r ? "Juste" : "Non : " + r}</small>` : ""}</div><div class="seg" style="padding:2px;flex:none;max-width:100%"><button type="button" data-n="${n}" data-v="DLC" aria-pressed="${a === "DLC"}" class="${a === "DLC" ? (r === "DLC" ? "good" : "bad") : ""}">DLC</button><button type="button" data-n="${n}" data-v="DDM" aria-pressed="${a === "DDM"}" class="${a === "DDM" ? (r === "DDM" ? "good" : "bad") : ""}">DDM</button></div></div>`; }).join("");
  }
  $("#dates").addEventListener("click", e => { const b = e.target.closest("button[data-n]"); if (b) { dAns[b.dataset.n] = b.dataset.v; datesDraw(); } });
  datesDraw();

  /* ---------------- Viandes et poissons ---------------- */
  const VI = {
    bov: ["Viande bovine", ["Lieu de naissance", "Lieu(x) d’élevage", "Lieu d’abattage"], "Trois étapes à indiquer."],
    aut: ["Porc, ovins, caprins, volailles", ["Lieu d’élevage", "Lieu d’abattage"], "Exemple : une barquette de poulet « Élevé en France, abattu en France », ou les différents pays si les étapes ont eu lieu ailleurs."]
  };
  seg($("#vi-seg"), Object.entries(VI).map(([id, v]) => ({ id, label: v[0], cls: "pro" })), "bov", k => {
    $("#vi-chain").innerHTML = VI[k][1].map((s, i) => (i ? "<i>→</i>" : "") + `<span>${s}</span>`).join("");
    $("#vi-ex").textContent = VI[k][2];
  });
  const PO = {
    mer: ["Pêche en mer", "La <b>zone de capture</b>. Pour l’Atlantique Nord-Est ou la Méditerranée, une <b>sous-zone</b> précise."],
    aqua: ["Aquaculture", "Le <b>pays d’élevage</b>, pour la traçabilité de la production."],
    douce: ["Eau douce", "Les <b>eaux d’origine</b> et le <b>pays</b> de provenance."]
  };
  seg($("#po-seg"), Object.entries(PO).map(([id, p]) => ({ id, label: p[0], cls: "min" })), "mer", k => { $("#po-out").innerHTML = `<span class="tag">${PO[k][0]}</span><p>À indiquer : ${PO[k][1]}</p>`; });

  /* ---------------- Sucres cachés ---------------- */
  const SU = (name, t) => ({ name, rows: [["Ce que c’est", t]] });
  explorer($("#suc-chips"), $("#suc-panel"), [{ cls: "sug", label: "", items: [
    SU("Saccharose", "Le sucre de table, extrait de la canne ou de la betterave : glucose + fructose."),
    SU("Glucose", "Sucre simple (monosaccharide), énergie rapide. Peu coûteux, très présent dans les produits transformés."),
    SU("Dextrose", "Autre nom du glucose, obtenu à partir de l’amidon de maïs : confiseries, boissons énergétiques, plats préparés."),
    SU("Fructose", "Sucre simple des fruits, souvent ajouté sous forme industrielle (sirop de fructose). À forte dose, il peut favoriser le syndrome métabolique."),
    SU("Sirop de glucose-fructose", "Ou HFCS (High Fructose Corn Syrup), issu du maïs. Sodas, biscuits, plats préparés. Peu cher, améliore texture et conservation ; en excès, associé à l’obésité et au diabète."),
    SU("Maltose", "Deux molécules de glucose, issu de l’hydrolyse de l’amidon (blé, maïs) : biscuits, boissons maltées, confiseries."),
    SU("Lactose", "Le sucre naturel du lait, parfois ajouté en boulangerie."),
    SU("Galactose", "Sucre simple, composant du lactose ; rarement ajouté tel quel."),
    SU("Miel et sirops", "Érable, agave, riz, datte… Naturels mais riches en sucres simples (glucose, fructose).")
  ] }]);

  /* ---------------- Classer les allégations ---------------- */
  const AL = [["« Source de fibres »", "N"], ["« Pauvre en sucres »", "N"], ["« Riche en vitamine C »", "N"], ["« Faible teneur en sel »", "N"], ["« Le calcium contribue au maintien d’une ossature normale »", "S"], ["« Prévient ou guérit une maladie »", "T"]];
  const AL_L = { N: "Nutritionnelle", S: "De santé", T: "Thérapeutique" };
  const aAns = {};
  function allegDraw() {
    const done = Object.keys(aAns).length, ok = AL.filter(([n, r]) => aAns[n] === r).length;
    $("#alleg").innerHTML = `<span class="tag" data-nohide>${done ? `${ok} sur ${AL.length} bien classées` : "Quel type d’allégation ?"}</span>` + AL.map(([n, r]) => {
      const a = aAns[n];
      return `<div class="qrow" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px 12px;padding:8px 0;border-bottom:1px solid var(--line)"><div style="flex:1;min-width:180px"><b style="display:block">${n}</b>${a ? `<small style="color:${a === r ? "var(--good)" : "var(--bad)"}">${a === r ? "Juste" : "Non : " + AL_L[r].toLowerCase()}${r === "T" ? " (interdite)" : ""}</small>` : ""}</div><div class="seg" style="padding:2px;flex:none;max-width:100%">${Object.entries(AL_L).map(([k, l]) => `<button type="button" data-n="${n}" data-v="${k}" aria-pressed="${a === k}" class="${a === k ? (k === r ? "good" : "bad") : ""}">${l}</button>`).join("")}</div></div>`;
    }).join("");
  }
  $("#alleg").addEventListener("click", e => { const b = e.target.closest("button[data-n]"); if (b) { aAns[b.dataset.n] = b.dataset.v; allegDraw(); } });
  allegDraw();

  /* ---------------- Derrière les mots ---------------- */
  const MOTS = {
    nat: ["« Naturel », « artisanal », « traditionnel »", "Une image positive, pas toujours strictement encadrée.", ["« Naturel » peut qualifier des arômes obtenus par des procédés chimiques à partir d’éléments naturels.", "« Traditionnel » ne garantit pas un vrai savoir-faire ancestral."], "Le produit paraît plus sain ou authentique ; la différence peut être minime."],
    sans: ["« Sans… »", "Sans conservateurs, sans colorants, sans sucres ajoutés, sans gluten.", ["Sans conservateurs : certains produits n’en ont pas besoin (stérilisation, friture, forte teneur en sel ou en sucre).", "Sans sucres ajoutés : pas de sucre « pur » ajouté, mais miel, jus concentrés ou purées de fruits possibles.", "Sans gluten : utile dans la maladie cœliaque, parfois brandi à tort comme argument santé."], "Une impression de produit plus sain, sans bénéfice nutritionnel réel."],
    riche: ["« Riche en », « enrichi en »", "« Riche en fibres », « source de calcium », « enrichi en vitamines » : encadrés par la réglementation.", ["« Source de fibres » = au moins 3 g de fibres pour 100 g.", "Une boisson sucrée « riche en vitamine C » reste très sucrée."], "Encadré ne veut pas dire équilibré."],
    halo: ["L’effet halo", "Une seule mention positive colore la perception de tout le produit.", ["Des chips « sans conservateurs » paraissent plus saines, mais restent riches en sel et en graisses.", "Une barre chocolatée « riche en fibres » semble diététique, mais reste très calorique et sucrée."], "On en mange davantage en croyant mieux choisir : l’inverse de l’objectif de santé."]
  };
  seg($("#mots-seg"), Object.entries(MOTS).map(([id, m]) => ({ id, label: m[0], cls: "bad-f" })), "nat", k => {
    const [n, d, L, c] = MOTS[k];
    $("#mots-out").innerHTML = `<h3>${n}</h3><p>${d}</p><ul>${L.map(x => `<li>${x}</li>`).join("")}</ul><div class="note" style="margin-top:4px"><span><b>Conséquence</b> : ${c}</span></div>`;
  });

  /* ---------------- Cas pratiques ---------------- */
  const row = (a, b) => `<tr><td style="padding:3px 0;border-bottom:1px solid var(--line)">${a}</td><td style="text-align:right;border-bottom:1px solid var(--line)">${b}</td></tr>`;
  const nutri = (base, L) => `<div><span class="tag">Déclaration nutritionnelle · ${base}</span><table style="width:100%;font-size:.88rem;border-collapse:collapse">${L.map(([a, b]) => row(a, b)).join("")}</table></div>`;
  const CAS = {
    croc: {
      name: "Céréales « Croc’Miel »",
      ingr: ["farine de blé", "sucre", "sirop de glucose", "huile de palme", "arômes de sel"], sugar: ["sucre", "sirop de glucose"],
      extra: "",
      nut: nutri("pour 30 g", [["Énergie", "120 kcal"], ["Lipides", "3 g"], ["Glucides", "22 g"], ["dont sucres", "10 g"], ["Protéines", "2 g"], ["Sel", "0,2 g"]]),
      qa: [["Qu’est-ce qui pose problème dans la liste d’ingrédients ?", "Plusieurs sources de sucre (sucre, sirop de glucose) listées séparément : on croit le sucre limité alors qu’il est <b>majoritaire</b>."],
        ["Pourquoi « Croc’Miel » est-il trompeur ?", "Le <b>miel n’apparaît pas</b> dans les ingrédients alors qu’il est mis en avant dans le nom : non-conformité."],
        ["Quelles informations manquent ?", "Le pourcentage de l’ingrédient valorisé (miel), le poids net, la DLC ou DDM, l’origine et le numéro de lot."],
        ["La valeur nutritionnelle est-elle bien présentée ?", "Non : elle doit être exprimée <b>pour 100 g</b>, pas seulement pour une portion."]]
    },
    choco: {
      name: "Tablette « ChocoPlaisir », chocolat au lait",
      ingr: ["sucre", "<b>LAIT</b> en poudre", "beurre de cacao", "pâte de cacao", "arômes"],
      extra: `<div class="stats"><span>Fabriqué en France</span><span>100 g</span></div>`,
      nut: nutri("pour 100 g", [["Énergie", "550 kcal"], ["Lipides", "33 g"], ["dont saturés", "20 g"], ["Glucides", "55 g"], ["dont sucres", "50 g"], ["Protéines", "7 g"], ["Sel", "0,1 g"]]),
      qa: [["L’étiquetage est-il conforme ?", "Oui, globalement : ingrédients, allergène en évidence (LAIT), poids net, origine, valeurs nutritionnelles."],
        ["Les points positifs ?", "Mentions obligatoires présentes, allergène visible, tableau nutritionnel clair."],
        ["Les points perfectibles ?", "Pas de pourcentage de l’ingrédient valorisé (« au lait » : % de lait non précisé). « Fabriqué en France » ne suffit pas si les matières premières viennent d’ailleurs."],
        ["Comment l’expliquer à quelqu’un qui veut moins de sucres ?", "Ce chocolat contient <b>50 % de sucres</b>. Produit courant, mais pas adapté si l’objectif est de limiter les glucides simples."]]
    },
    lasa: {
      name: "Lasagnes au bœuf « Bello Gusto »",
      ingr: ["pâtes (farine de <b>BLÉ</b>, oeufs)", "sauce tomates", "viande de boeuf", "huile de tournesol", "oignons", "sel", "épices"],
      extra: `<p style="margin:0"><b>Origine de la viande :</b> UE</p><div class="stats"><span>À consommer jusqu’au 12/09/2025</span><span>Poids net : 400 g</span></div>`,
      nut: nutri("pour 100 g", [["Énergie", "160 kcal"], ["Lipides", "6 g"], ["dont saturés", "2 g"], ["Glucides", "18 g"], ["dont sucres", "3 g"], ["Protéines", "10 g"], ["Sel", "0,9 g"]]),
      qa: [["La DLC est-elle bien utilisée ?", "Oui : produit frais réfrigéré, la <b>DLC</b> est obligatoire."],
        ["L’origine de la viande est-elle assez précise ?", "Non : « UE » est trop vague. Depuis 2024, l’origine des viandes des plats transformés précise les pays exacts (« Né, élevé et abattu en Italie »)."],
        ["Quels allergènes ?", "<b>BLÉ</b> (gluten) et <b>œufs</b>."],
        ["Un conseil pour une personne allergique au gluten ?", "Ce produit ne lui convient pas ; l’information doit être signalée clairement."]]
    }
  };
  const found = new Set();
  let cas = "croc";
  function casDraw() {
    const c = CAS[cas];
    const ingr = cas === "croc"
      ? c.ingr.map(i => `<button type="button" class="chip ${found.has(i) ? (c.sugar.includes(i) ? "sug" : "ink") : "ink"}" data-ing="${i}" aria-pressed="${found.has(i)}" style="min-height:32px;padding:4px 10px">${i}</button>`).join(" ")
      : c.ingr.join(", ") + ".";
    const nf = c.sugar ? c.sugar.filter(s => found.has(s)).length : 0;
    $("#cas-lbl").innerHTML = `<span class="tag">Étiquette du cours</span><b style="font-family:var(--f-d);font-size:1.25rem">${c.name}</b>
      <div><b>Ingrédients :</b> ${ingr}</div>
      ${cas === "croc" ? `<p class="hint">Touchez les sources de sucre : <span data-nohide>${nf} sur 2 trouvées</span>${[...found].some(i => !c.sugar.includes(i)) ? " (un ingrédient touché n’est pas un sucre)" : ""}</p>` : ""}
      ${c.extra}${c.nut}`;
    $("#cas-q").innerHTML = c.qa.map(([q, a], i) => `<div class="card reveal-card"><h3 data-nohide>${i + 1}. ${q}</h3><button class="chip" data-reveal>Voir le corrigé</button><div class="answer" hidden><p>${a}</p></div></div>`).join("");
  }
  $("#cas-lbl").addEventListener("click", e => { const b = e.target.closest("[data-ing]"); if (!b) return; const i = b.dataset.ing; found.has(i) ? found.delete(i) : found.add(i); casDraw(); });
  seg($("#cas-seg"), Object.entries(CAS).map(([id, c]) => ({ id, label: c.name.split(" « ")[1] ? c.name.match(/« (.+) »/)[1] : c.name, cls: "ink" })), cas, v => { cas = v; casDraw(); });
})();
