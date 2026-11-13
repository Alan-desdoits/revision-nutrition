/* ==========================================================================
   Cours : Les procédés de conservation des aliments
   Source : documents/finis/Les procédés de conservation des aliments.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, explorer } = window.Fiches;
  const F = "Atkinson Hyperlegible, sans-serif";

  /* ---------------- 5 leviers ---------------- */
  const LEV = [
    ["temp", "Température", "glu", "Abaisser ou augmenter la température pour ralentir ou détruire micro-organismes et enzymes.", "Réfrigération, congélation, surgélation ; pasteurisation, stérilisation, UHT."],
    ["aw", "Activité de l’eau (Aw)", "min", "Réduire l’eau disponible pour bloquer la croissance microbienne.", "Déshydratation, lyophilisation, sel, sucre."],
    ["o2", "Oxygène (O₂)", "lai", "Limiter l’oxydation et le développement des germes aérobies.", "Sous vide, atmosphère modifiée."],
    ["ph", "pH", "fl", "Rendre le milieu trop acide pour les micro-organismes pathogènes.", "Fermentations, vinaigre."],
    ["phys", "Intégrité physique", "ink", "Protéger l’aliment contre les agressions mécaniques ou microbiennes.", "Emballage étanche, matériau barrière, manipulation soigneuse."]
  ];
  let lev = 0;
  function levDraw() {
    const cx = 170, cy = 160, R = 112;
    $("#lev").innerHTML = `<circle cx="${cx}" cy="${cy}" r="48" fill="var(--ink-soft)"/><text x="${cx}" y="${cy - 2}" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-size="30" font-weight="800" fill="var(--ink)">5</text><text x="${cx}" y="${cy + 18}" text-anchor="middle" font-family="${F}" font-size="12" fill="var(--ink)">leviers</text>` +
      LEV.map((l, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / 5, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a), on = i === lev, w = 104;
        return `<line x1="${cx + 48 * Math.cos(a)}" y1="${cy + 48 * Math.sin(a)}" x2="${x}" y2="${y}" stroke="var(--line2)" stroke-width="2"/><g data-k="${i}" class="${l[2]}"><rect x="${(x - w / 2).toFixed(1)}" y="${(y - 20).toFixed(1)}" width="${w}" height="40" rx="10" fill="${on ? "var(--c)" : "var(--s)"}" stroke="var(--c)" stroke-width="2"/><text x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" text-anchor="middle" font-family="${F}" font-size="12" font-weight="700" fill="${on ? "#fff" : "var(--c)"}">${l[1].replace(" (Aw)", "").replace(" (O₂)", "")}</text></g>`;
      }).join("");
    const [, n, c, d, ex] = LEV[lev];
    $("#lev-out").className = "result " + c;
    $("#lev-out").innerHTML = `<span class="tag">Levier</span><h3>${n}</h3><p>${d}</p><p><b>Procédés du cours</b> : ${ex}</p>`;
  }
  $("#lev").addEventListener("click", e => { const g = e.target.closest("[data-k]"); if (g) { lev = +g.dataset.k; levDraw(); } });
  levDraw();

  /* ---------------- Froid : réfrigération / congélation ---------------- */
  const imp = (n, s, o) => `<div class="tbl"><table><tbody><tr><th>Nutritionnel</th><td>${n}</td></tr><tr><th>Sanitaire</th><td>${s}</td></tr><tr><th>Organoleptique</th><td>${o}</td></tr></tbody></table></div>`;
  const FR = {
    ref: ["Réfrigération · froid positif", "Entre <b>+1 et +5 °C</b> selon la réglementation : la croissance des pathogènes mésophiles (qui poussent à température ambiante) et l’action des enzymes ralentissent fortement. Mais des bactéries psychrotrophes comme <b>Listeria monocytogenes</b> se développent encore : d’où la <b>DLC</b>. Ce sont les aliments de <b><span class='num hideable'>1ʳᵉ</span> gamme</b>. Exemples : lait pasteurisé, yaourts, viandes fraîches, poissons.",
      imp("Globalement préservé ; les pertes en vitamines (surtout C) augmentent avec la durée de stockage.", "Le froid ralentit les microbes sans les détruire : chaîne du froid et DLC.", "Texture, couleur, goût préservés si la durée est respectée ; au-delà, odeur, ramollissement, décoloration.")],
    cong: ["Congélation et surgélation · froid négatif", "Sous 0 °C, jusqu’à <b>−18 °C</b> ou moins : l’eau des cellules devient glace, la croissance microbienne et les enzymes s’arrêtent, sans être détruites. À la réception : emballage intact, sans givre ni paillettes, produits non agglomérés. Durée fixée par la <b>DDM</b> du fabricant (souvent 9 à 24 mois ; viandes entières environ 15 à 18 mois, fruits, légumes et certains poissons jusqu’à 24 mois). Ce sont les aliments de <b><span class='num hideable'>3ᵉ</span> gamme</b> (surgelés). Exemples : légumes surgelés, viandes, poissons, plats préparés.",
      imp("Pertes faibles si la congélation est rapide après récolte ou préparation. Une décongélation lente fait perdre vitamines hydrosolubles et minéraux dans l’exsudat : à récupérer dans une sauce ou une soupe portée à ébullition si l’aliment est cuit.", "Activité stoppée, pas de destruction (bactéries à −10 °C, moisissures à −18 °C). Une surgélation assez longue (15 jours) élimine certains parasites (trichine, ténia). Décongelé, l’aliment redevient sensible.", "Certaines enzymes végétales et les lipases agissent jusqu’à environ −25 °C. Cristaux qui abîment la texture ; stockage long : arômes affaiblis, lipides rancis. Végétaux : perte de turgescence, teintes verdies ou olivées, brunissement sans blanchiment préalable. Produits animaux : plus tendres mais moins fermes et juteux, viande qui grise, exsudat, parfois légère amertume. Le froid dessèche : bien protéger contre les brûlures par le froid.")]
  };
  seg($("#fr-seg"), [{ id: "ref", label: "Réfrigération", cls: "eau" }, { id: "cong", label: "Congélation, surgélation", cls: "eau" }], "ref", k => {
    $("#fr-out").innerHTML = `<h3>${FR[k][0]}</h3><p>${FR[k][1]}</p>${FR[k][2]}`;
  });

  /* ---------------- Cristaux : congélation / surgélation x avant / après ---------------- */
  const cg = { p: "cong", ph: "glace" };
  function cgDraw() {
    const big = cg.p === "cong", after = cg.ph === "dec";
    // grille de cellules ; cristaux gros (perçant) ou petits ; à la décongélation, eau perdue ou gardée
    let s = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      const x = 8 + c * 51, y = 8 + r * 48;
      s += `<rect x="${x}" y="${y}" width="47" height="44" rx="12" fill="var(--card)" stroke="${big && after ? "var(--muted)" : "var(--fg)"}" stroke-width="1.5" ${big && after ? 'stroke-dasharray="5 4"' : ""}/>`;
      if (!after) s += big ? `<polygon points="${x + 10},${y + 12} ${x + 36},${y + 6} ${x + 44},${y + 30} ${x + 22},${y + 40}" fill="var(--eau-m)"/>` : [0, 1, 2, 3].map(k => `<rect x="${x + 8 + (k % 2) * 18}" y="${y + 8 + Math.floor(k / 2) * 16}" width="9" height="9" rx="2" fill="var(--eau-m)"/>`).join("");
      else if (!big) s += `<circle cx="${x + 23}" cy="${y + 22}" r="11" fill="var(--eau-m)"/>`;
      if (!(big && after)) s += `<line x1="${x + 14}" y1="${y + 30}" x2="${x + 20}" y2="${y + 34}" stroke="var(--glu)" stroke-width="2.5"/>`;
    }
    if (big && after) s += `<rect x="4" y="148" width="312" height="10" rx="5" fill="var(--eau-m)"/>` + [...Array(12)].map((_, k) => `<line x1="${14 + k * 25}" y1="151" x2="${20 + k * 25}" y2="155" stroke="var(--glu)" stroke-width="2.5"/>`).join("");
    $("#cg-svg").innerHTML = s;
    const T = {
      "cong-glace": "<b>Congélation</b> (lente, domestique) : de <b>gros cristaux</b> de glace se forment et percent les membranes des cellules.",
      "cong-dec": "À la décongélation : parois détruites, <b>perte d’eau et du contenu nutritif</b> (l’exsudat), au moment de décongeler et de cuire.",
      "surg-glace": "<b>Surgélation</b> (rapide, industrielle) : de <b>petits cristaux</b> qui préservent l’intégrité des cellules.",
      "surg-dec": "À la décongélation : l’eau et le contenu nutritif <b>restent dans les cellules</b>. Les qualités organoleptiques sont mieux conservées."
    };
    $("#cg-out").innerHTML = `<p>${T[cg.p + "-" + cg.ph]}</p><p style="font-size:.85rem;color:var(--muted)">Schéma du cours redessiné : cellules, cristaux de glace (bleu), contenu nutritif (orange).</p>`;
  }
  seg($("#cg-seg"), [{ id: "cong", label: "Congélation", cls: "eau" }, { id: "surg", label: "Surgélation", cls: "eau" }], cg.p, v => { cg.p = v; cgDraw(); });
  seg($("#cg-phase"), [{ id: "glace", label: "Pris en glace", cls: "ink" }, { id: "dec", label: "Décongelé", cls: "ink" }], cg.ph, v => { cg.ph = v; cgDraw(); });

  /* ---------------- Réfrigérateur ---------------- */
  const Z = [
    ["haut", "0 à 4 °C", "Étagère du haut", "Charcuterie, poisson, viande (dessin du cours).", [16, 16, 168, 52]],
    ["mil1", "4 à 6 °C", "Étagère du milieu", "Yaourts, fromages (dessin du cours).", [16, 72, 168, 52]],
    ["mil2", "4 à 6 °C", "Étagère du bas", "Desserts, sandwichs, plats cuisinés (dessin du cours).", [16, 128, 168, 52]],
    ["bac", "6 à 10 °C", "Bac à légumes", "Fruits et légumes.", [16, 184, 168, 52]],
    ["congel", "−18 °C", "Congélateur", "Surgelés.", [16, 244, 168, 70]],
    ["pH", "4 à 6 °C", "Porte, en haut", "Œufs (dessin du cours).", [196, 16, 88, 70]],
    ["pM", "4 à 6 °C", "Porte, au milieu", "Confitures, sauces (dessin du cours).", [196, 92, 88, 70]],
    ["pB", "6 à 10 °C", "Porte, en bas", "Boissons.", [196, 168, 88, 68]]
  ];
  let fz = 0;
  function frigoDraw() {
    $("#frigo").innerHTML = `<rect x="6" y="6" width="288" height="318" rx="16" fill="var(--eau-s)" stroke="var(--eau)" stroke-width="2"/>` + Z.map(([id, t, , , [x, y, w, h]], i) => `<g data-k="${i}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${i === fz ? "var(--eau)" : "var(--card)"}" stroke="var(--eau)" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-family="${F}" font-size="13" font-weight="700" fill="${i === fz ? "#fff" : "var(--eau)"}">${t}</text></g>`).join("");
    const [, t, n, d] = Z[fz];
    $("#frigo-out").innerHTML = `<span class="tag">${n}</span><div class="big eau">${t}</div><p>${d}</p>`;
  }
  $("#frigo").addEventListener("click", e => { const g = e.target.closest("[data-k]"); if (g) { fz = +g.dataset.k; frigoDraw(); } });
  frigoDraw();

  /* ---------------- Pasteurisation ---------------- */
  const PA = {
    basse: ["Pasteurisation basse", "63 à 65 °C · 30 min", 64, 30 * 60, "En cuve à double paroi : chauffe douce et prolongée, pour les matrices fragiles (ovoproduits, bases de glaces, certains sodas). Limite la coagulation des protéines, préserve textures et arômes.", "Sécuriser sans « cuire », impact sensoriel minimal."],
    haute: ["Pasteurisation haute", "75 à 85 °C · quelques minutes", 80, 5 * 60, "Échangeurs ou tunnels : plus chaud, moins longtemps. Pour les produits plus « robustes » : lait, jus de fruits, potages.", "Abattement microbien supérieur à la basse, bon compromis sécurité et qualité."],
    flash: ["Pasteurisation flash (éclair)", "90 à 95 °C · quelques secondes", 92.5, 5, "Choc thermique très bref, notamment pour le lait et les jus.", "Très forte réduction des micro-organismes avec peu d’altération des arômes et vitamines, grâce au temps ultra court."]
  };
  // axe des temps logarithmique : 5 s, 5 min, 30 min (points de la courbe du cours)
  const tx = s => 50 + (Math.log10(s) - Math.log10(3)) / (Math.log10(3000) - Math.log10(3)) * 270;
  const ty = c => 170 - (c - 55) / 45 * 150;
  function paDraw(k) {
    const pts = [PA.flash, PA.haute, PA.basse].map(p => [tx(p[3]), ty(p[2])]);
    $("#pa-svg").innerHTML = `<line x1="50" y1="170" x2="330" y2="170" stroke="var(--fg)"/><line x1="50" y1="10" x2="50" y2="170" stroke="var(--fg)"/>
      <path d="M${pts.map(p => p.map(v => v.toFixed(1)).join(",")).join(" L")}" fill="none" stroke="var(--glu)" stroke-width="2.5"/>
      ${Object.entries(PA).map(([id, p]) => { const x = tx(p[3]), y = ty(p[2]), on = id === k; return `<line x1="${x}" y1="${y}" x2="${x}" y2="170" stroke="var(--line2)" stroke-dasharray="4 4"/><line x1="50" y1="${y}" x2="${x}" y2="${y}" stroke="var(--line2)" stroke-dasharray="4 4"/><circle cx="${x}" cy="${y}" r="${on ? 9 : 6}" fill="${on ? "var(--glu)" : "var(--glu-m)"}"/>`; }).join("")}
      <text x="12" y="${ty(92.5) + 4}" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">90-95°</text><text x="12" y="${ty(80) + 4}" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">75-85°</text><text x="12" y="${ty(64) + 4}" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">63-65°</text>
      <text x="${tx(5)}" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">5 s</text><text x="${tx(300)}" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">5 min</text><text x="${tx(1800)}" y="186" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--muted)">30 min</text>
      <text x="330" y="196" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--muted)">TEMPS (échelle log)</text>`;
    const [n, b, , , d, i] = PA[k];
    $("#pa-out").innerHTML = `<span class="tag">${n}</span><div class="big glu" style="font-size:1.5rem">${b}</div><p>${d}</p><p><b>Intérêt</b> : ${i}</p>`;
  }
  seg($("#pa-seg"), [{ id: "basse", label: "Basse", cls: "glu" }, { id: "haute", label: "Haute", cls: "glu" }, { id: "flash", label: "Flash", cls: "glu" }], "haute", paDraw);
  $("#pa-svg").classList.add("hideable");

  /* ---------------- Traitements thermiques comparés ---------------- */
  const TR = {
    past: ["Pasteurisation", "Modérée, en général sous 100 °C", "Bactéries végétatives réduites, pas les spores", "Au froid, DLC (sauf jus acides : ambiante, DDM)",
      imp("Pertes modérées en vitamines hydrosolubles et thermosensibles (C, B1).", "Risque fortement réduit, mais spores non détruites : au réfrigérateur.", "Saveur, couleur, texture préservées."), "Lait pasteurisé, jus de fruits frais, certains plats cuisinés de <span class='num hideable'>5ᵉ</span> gamme."],
    ster: ["Stérilisation", "Plus de 100 °C, de quelques minutes à plusieurs dizaines (selon produit, pH, format, épaisseur)", "Micro-organismes et spores détruits, enzymes inactivées : produit commercialement stérile", "Température ambiante, plusieurs mois à années, DDM",
      imp("Pertes importantes en vitamines thermosensibles (C, B9, certains polyphénols) ; protéines dénaturées et fibres ramollies, plus digestes.", "Sécurité élevée, pas de germes pathogènes.", "Goût, texture et couleur nettement modifiés."), "Petits pois en conserve : plus ternes, plus mous que les frais."],
    uht: ["UHT (ultra haute température)", "Environ 130 à 140 °C pendant quelques secondes, puis conditionnement aseptique", "Stérilisation", "Longue conservation à température ambiante",
      `<p>Moins d’altérations qu’une stérilisation longue, meilleure conservation des qualités nutritionnelles grâce à la montée en température très rapide, mais souvent une légère note « cuit ».</p>`, "Lait UHT."],
    app: ["Appertisation", "Stérilisation en contenant hermétique (boîte, bocal, sachet rétort)", "Stérilisation", "Température ambiante, longue DDM ; après ouverture, au froid et vite",
      `<div class="chain glu"><span>Remplissage</span><i>→</i><span>Fermeture</span><i>→</i><span>Stérilisation</span><i>→</i><span>Refroidissement</span></div>`, "Conserves."]
  };
  seg($("#tr-seg"), Object.entries(TR).map(([id, t]) => ({ id, label: t[0].split(" (")[0], cls: "glu" })), "past", k => {
    const [n, b, g, c, im, ex] = TR[k];
    $("#tr-out").innerHTML = `<h3>${n}</h3><div class="tbl"><table><tbody><tr><th>Traitement</th><td>${b}</td></tr><tr><th>Germes</th><td>${g}</td></tr><tr><th>Conservation</th><td>${c}</td></tr><tr><th>Exemple</th><td>${ex}</td></tr></tbody></table></div>${im}`;
  });

  /* ---------------- Aw (qualitatif) ---------------- */
  let aw = 0.9;
  function awDraw() {
    $("#aw-o").textContent = aw.toLocaleString("fr-FR", { minimumFractionDigits: 2 });
    const t = aw >= 0.95 ? ["Eau très disponible", "Bactéries, levures et moisissures trouvent l’eau libre dont elles ont besoin : l’aliment est peu stable."] : aw > 0.4 ? ["On baisse l’eau disponible", "Plus l’Aw descend, moins bactéries, levures et moisissures peuvent se multiplier : l’aliment se stabilise."] : ["Très peu d’eau disponible", "Aliment très sec (par exemple lyophilisé) : la multiplication microbienne est freinée ou empêchée. À protéger de l’humidité."];
    $("#aw-out").innerHTML = `<span class="tag">Aw ${aw.toLocaleString("fr-FR")}</span><div class="big min" style="font-size:1.4rem">${t[0]}</div><p>${t[1]}</p><p style="font-size:.85rem;color:var(--muted)">Lecture qualitative : le cours ne fixe pas de seuils.</p>`;
  }
  $("#aw").addEventListener("input", e => { aw = +e.target.value; awDraw(); });
  awDraw();

  /* ---------------- Atmosphère ---------------- */
  const AT = {
    vide: ["Sous vide", "Tout l’air retiré ; l’emballage étanche épouse le produit. Sans oxygène : moins d’oxydation et de déshydratation, flore aérobie freinée (les micro-organismes qui ont besoin d’oxygène). Avant cuisson (cuisson douce sous 100 °C), sur produit cru (stockage réfrigéré) ou après cuisson (type <span class='num hideable'>5ᵉ</span> gamme). Une fois ouvert ou percé, c’est un produit frais : au froid (0–6 °C) et dans la DLC.",
      imp("Moins d’oxydation des lipides et des vitamines C, A, E ; ni sel ni sucre ajoutés, protéines intactes. Les pertes dépendent surtout du temps et de la température de stockage.", "Freine la flore aérobie et les moisissures sans éliminer les germes. Des anaérobies (Clostridium botulinum) ou psychrotrophes (Listeria monocytogenes) peuvent persister ou croître si la température dérive : froid (0–4 °C), DLC, refroidissement rapide après cuisson, consommation rapide après ouverture.", "Plus juteux, rancissement ralenti, arômes mieux gardés. Certaines viandes foncent (rouge brun) faute d’O₂, de façon réversible à l’air ; une légère purge de jus est possible.")],
    mod: ["Atmosphère modifiée", "Pour les végétaux frais préparés (lavés, parés, découpés) : moins d’oxygène, remplacé par de l’<b>azote</b> (N₂) et/ou du <b>dioxyde de carbone</b> (CO₂). L’azote, inerte, ralentit la respiration du végétal, l’éthylène et l’oxydation enzymatique, et bloque la flore aérobie. Le CO₂ est bactériostatique et fongistatique et freine la maturation ; en excès, il peut induire des fermentations (bactéries lactiques, odeurs). Ce sont les produits de <b><span class='num hideable'>4ᵉ</span> gamme</b>, prêts à l’emploi, à DLC courte, conservés entre 0 et 4 à 6 °C selon l’étiquette. Ouvert ou percé : produit frais, à consommer vite.", `<p>Fraîcheur, texture, couleur et nutriments préservés, si la chaîne du froid est respectée.</p>`]
  };
  seg($("#at-seg"), [{ id: "vide", label: "Sous vide", cls: "lai" }, { id: "mod", label: "Atmosphère modifiée", cls: "lai" }], "vide", k => { $("#at-out").innerHTML = `<h3>${AT[k][0]}</h3><p>${AT[k][1]}</p>${AT[k][2]}`; });

  /* ---------------- Conservateurs ---------------- */
  const C = (name, code, d) => ({ name, rows: [["Code", code], ["Rôle", d]] });
  explorer($("#cs-chips"), $("#cs-panel"), [
    { cls: "bad-f", label: "Antimicrobiens", items: [C("Acide sorbique", "E200", "Freine les microbes."), C("Sorbate de potassium", "« E20 » dans le cours (sans doute E202)", "Freine les microbes."), C("Benzoate de sodium", "E211", "Freine les microbes."), C("Sulfites", "E220 à E228", "Pour certains usages, avec mention allergène."), C("Nitrite de sodium", "E250", "Charcuteries, à dose strictement encadrée.")] },
    { cls: "vit", label: "Antioxydants", items: [C("Acide ascorbique", "E300", "Ralentit l’oxydation."), C("Extrait riche en tocophérols", "E306", "Ralentit l’oxydation."), C("BHA", "E320", "Ralentit l’oxydation."), C("BHT", "E321", "Ralentit l’oxydation.")] },
    { cls: "ink", label: "Traditionnels", items: [C("Sel", "Pas de code E", "Salage, saumure : baisse de l’Aw."), C("Sucre", "Pas de code E", "Confitures, fruits confits : baisse de l’Aw."), C("Vinaigre", "Pas de code E", "Acide acétique : baisse du pH."), C("Alcool", "Pas de code E", "Fruits à l’alcool : effet antiseptique.")] }
  ]);

  /* ---------------- Exercice : levier principal ---------------- */
  const LQ = [["Réfrigération", "temp"], ["Lyophilisation", "aw"], ["Sous vide", "o2"], ["Vinaigre", "ph"], ["Pasteurisation", "temp"], ["Confiture (sucre)", "aw"], ["Fermentation lactique", "ph"], ["Atmosphère modifiée", "o2"]];
  const LL = { temp: "Température", aw: "Aw", o2: "Oxygène", ph: "pH" };
  const la = {};
  function lqDraw() {
    const n = Object.keys(la).length, ok = LQ.filter(([p, r]) => la[p] === r).length;
    $("#lv-quiz").innerHTML = `<span class="tag" data-nohide>${n ? `${ok} sur ${LQ.length} bien reliés` : "Quel levier ?"}</span>` + LQ.map(([p, r]) => {
      const a = la[p];
      return `<div style="display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><div style="flex:1;min-width:160px"><b style="display:block">${p}</b>${a ? `<small style="color:${a === r ? "var(--good)" : "var(--bad)"}">${a === r ? "Juste" : "Non : " + LL[r]}</small>` : ""}</div><div class="seg" style="padding:2px;flex:none;max-width:100%">${Object.entries(LL).map(([k, l]) => `<button type="button" data-p="${p}" data-v="${k}" aria-pressed="${a === k}" class="${a === k ? (k === r ? "good" : "bad") : ""}">${l}</button>`).join("")}</div></div>`;
    }).join("");
  }
  $("#lv-quiz").addEventListener("click", e => { const b = e.target.closest("button[data-p]"); if (b) { la[b.dataset.p] = b.dataset.v; lqDraw(); } });
  lqDraw();
})();
