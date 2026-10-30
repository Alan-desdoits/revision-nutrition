/* ==========================================================================
   Cours : Analyse des contraintes et caractéristiques d'une structure
   Source : documents/finis/Analyse des contraintes et caractéristiques d.docx
   ========================================================================== */
(function () {
  const { $, $$, seg, hbars, fmt } = window.Fiches;
  const eur = v => fmt(v, 0) + " €";

  /* ---------------- Calculateur de stock ---------------- */
  // Consommation = quantité ÷ jours ; sécurité = conso × délai ; point de commande = conso × livraison + sécurité ; limite DLC = conso × jours avant DLC
  const st = { q: 180, j: 30, sec: 2, liv: 4, dlc: 10 };
  function stUpdate() {
    const c = st.q / Math.max(1, st.j), s = c * st.sec, pc = c * st.liv + s, max = c * st.dlc;
    $("#st-sec-o").textContent = st.sec + " j";
    $("#st-liv-o").textContent = st.liv + " j";
    $("#st-dlc-o").textContent = st.dlc + " j";
    const top = Math.max(pc, max) * 1.1 || 1, pct = v => (v / top * 100).toFixed(1) + "%";
    const risk = pc > max;
    $("#st-out").innerHTML = `<div class="calc-out" style="grid-template-columns:repeat(3,minmax(0,1fr))">
        <div><span class="tag">Consommation</span><div class="big">${fmt(c)} <small>kg/j</small></div><p>${fmt(st.q)} ÷ ${st.j}</p></div>
        <div><span class="tag">Sécurité</span><div class="big">${fmt(s)} <small>kg</small></div><p>${fmt(c)} × ${st.sec}</p></div>
        <div><span class="tag">Commander à</span><div class="big min">${fmt(pc)} <small>kg</small></div><p>(${fmt(c)} × ${st.liv}) + ${fmt(s)}</p></div>
      </div>
      <div style="position:relative;height:44px;border-radius:10px;background:var(--bg);overflow:hidden" class="hideable" aria-label="Niveaux de stock">
        <div style="position:absolute;inset:0 auto 0 0;width:${pct(s)};background:var(--bad-s)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${pct(pc)};border-left:3px solid var(--min)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${pct(max)};border-left:3px dashed var(--bad)"></div>
      </div>
      <div class="stack-leg"><span><i style="display:inline-block;width:10px;height:10px;background:var(--bad-s);border-radius:2px"></i> Stock de sécurité</span><span style="color:var(--min)">│ Point de commande</span><span style="color:var(--bad)">┆ Limite DLC <b>${fmt(max)} kg</b></span></div>
      <p>${risk ? `<b style="color:var(--bad)">Attention</b> : au point de commande, le stock dépasse ce qui peut être consommé avant la DLC. Livraisons plus fréquentes ou plus rapides, ou moins de sécurité.` : "Lorsque le stock atteint le point de commande, on commande : la livraison arrive avant d’entamer le stock de sécurité."}</p>`;
  }
  [["st-q", "q"], ["st-j", "j"], ["st-sec", "sec"], ["st-liv", "liv"], ["st-dlc", "dlc"]].forEach(([id, k]) => $("#" + id).addEventListener("input", e => { st[k] = Math.max(0, +e.target.value || 0); stUpdate(); }));
  stUpdate();

  /* ---------------- Zonage de la réserve ---------------- */
  const Z = {
    froid: ["Zone réfrigérée", "eau", "Entre 0 et +4 °C", "Produits frais."],
    congel: ["Zone de congélation", "ink", "−18 °C ou moins", "Surgelés."],
    sec: ["Espace sec", "glu", "Température ambiante stable, à l’abri de la lumière", "Denrées non périssables : céréales, farines, conserves, légumineuses."],
    conso: ["Consommables", "min", "Séparés des aliments", "Emballages, étiquettes, gants… pour éviter toute contamination."]
  };
  const ZP = { froid: [10, 10, 185, 115], congel: [205, 10, 185, 115], sec: [10, 135, 240, 115], conso: [260, 135, 130, 115] };
  let zone = "froid";
  function zoneDraw() {
    $("#zone-svg").innerHTML = Object.entries(ZP).map(([k, [x, y, w, h]]) => {
      const [n, c] = Z[k], on = k === zone;
      return `<g data-k="${k}" class="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--${c === "ink" ? "ink-soft" : c + "-s"})" stroke="var(--${c})" stroke-width="${on ? 4 : 1.5}" ${k === "conso" ? 'stroke-dasharray="6 4"' : ""}/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-family="Atkinson Hyperlegible, sans-serif" font-size="15" font-weight="700" fill="var(--${c})">${n.replace("Zone ", "")}</text></g>`;
    }).join("");
    const [n, c, t, p] = Z[zone];
    $("#zone-out").className = "result " + c;
    $("#zone-out").innerHTML = `<span class="tag">${n}</span><div class="big ${c}" style="font-size:1.4rem">${t}</div><p>${p}</p>`;
  }
  $("#zone-svg").addEventListener("click", e => { const g = e.target.closest("[data-k]"); if (g) { zone = g.dataset.k; zoneDraw(); } });
  zoneDraw();

  /* ---------------- FIFO / FEFO ---------------- */
  // Exemple du cours : un nouveau lot de yaourts arrive avec une DLC plus courte que celui déjà en réserve
  const LOTS = [["Lot A · déjà en réserve", "Entré en premier", "DLC la plus lointaine"], ["Lot B · nouvelle livraison", "Entré en second", "DLC plus courte"]];
  const FF = {
    fifo: ["FIFO · First In, First Out", 0, "Le premier <b>entré</b> sort le premier. En réserve sèche (céréales, conserves), les nouveaux lots se placent derrière les anciens.", "Préserve la qualité, limite le gaspillage, simple.", "Moins adapté si les dates varient beaucoup d’un lot à l’autre (arrivages irréguliers) : ici, le lot B risque de dépasser sa DLC."],
    fefo: ["FEFO · First Expired, First Out", 1, "La première <b>date limite</b> (DLC ou DDM) sort la première, même si le lot est arrivé après.", "Indispensable pour les DLC courtes, moins de pertes sur les périssables.", "Un étiquetage et un contrôle rigoureux des dates à chaque réception."]
  };
  seg($("#ff-seg"), Object.entries(FF).map(([id, f]) => ({ id, label: f[0], cls: "ink" })), "fifo", k => {
    const [, first, d, plus, moins] = FF[k];
    $("#ff-lots").innerHTML = LOTS.map((l, i) => `<div class="card ${i === first ? "good" : ""}" style="gap:4px"><span class="tag">${i === first ? "Utilisé en premier" : "Utilisé ensuite"}</span><h3>${l[0]}</h3><p>${l[1]} · ${l[2]}</p></div>`).join("");
    $("#ff-out").innerHTML = `<p>${d}</p><p><b>Avantages</b> : ${plus}</p><p><b>Limite</b> : ${moins}</p>`;
  });

  /* ---------------- Classer les coûts ---------------- */
  const CL = [["Loyer du local", "F"], ["Assurance multirisque", "F"], ["Salaires du personnel permanent", "F"], ["Abonnements (logiciel, téléphone, internet)", "F"], ["Matières premières", "V"], ["Emballages et contenants", "V"], ["Main-d’œuvre en période de forte production", "V"], ["Frais de livraison par commande", "V"], ["Électricité (abonnement + usage)", "S"], ["Primes ou commissions sur ventes", "S"], ["Contrat de maintenance avec interventions exceptionnelles", "S"]];
  const CLL = { F: "Fixe", V: "Variable", S: "Semi-variable" };
  const cAns = {};
  function clDraw() {
    const n = Object.keys(cAns).length, ok = CL.filter(([x, r]) => cAns[x] === r).length;
    $("#cl").innerHTML = `<span class="tag" data-nohide>${n ? `${ok} sur ${CL.length} bien classés` : "Fixe, variable ou semi-variable ?"}</span>` + CL.map(([x, r]) => {
      const a = cAns[x];
      return `<div class="qrow" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px 12px;padding:8px 0;border-bottom:1px solid var(--line)"><div style="flex:1;min-width:180px"><b style="display:block">${x}</b>${a ? `<small style="color:${a === r ? "var(--good)" : "var(--bad)"}">${a === r ? "Juste" : "Non : " + CLL[r].toLowerCase()}</small>` : ""}</div><div class="seg" style="padding:2px;flex:none;max-width:100%">${Object.entries(CLL).map(([k, l]) => `<button type="button" data-x="${x}" data-v="${k}" aria-pressed="${a === k}" class="${a === k ? (k === r ? "good" : "bad") : ""}">${l}</button>`).join("")}</div></div>`;
    }).join("");
  }
  $("#cl").addEventListener("click", e => { const b = e.target.closest("button[data-x]"); if (b) { cAns[b.dataset.x] = b.dataset.v; clDraw(); } });
  clDraw();

  const AT = [["Matières premières", "variables", 45, "glu"], ["Salaires", "fixes", 30, "ink"], ["Loyer et électricité", "fixes et semi-variables", 15, "min"], ["Marketing et administratif", "indirects", 10, "lai"]];
  $("#atelier").innerHTML = AT.map(([n, , v, c]) => `<div class="${c}" style="flex-basis:${v}%">${v} %</div>`).join("");
  $("#atelier-leg").innerHTML = AT.map(([n, t, v]) => `<span>${n} <small>(${t})</small> <b>${v} %</b></span>`).join("");

  /* ---------------- Budget prévisionnel ---------------- */
  const BUD = [["Loyer et charges", 18000, "d"], ["Salaires fixes", 60000, "d"], ["Matières premières", 45000, "d"], ["Emballages", 5000, "d"], ["Énergie et eau", 6000, "d"], ["Marketing", 3000, "d"], ["Ventes sur place", 90000, "r"], ["Ventes à emporter", 50000, "r"], ["Ventes en ligne", 10000, "r"]];
  const bv = BUD.map(b => b[1]);
  $("#bud-form").innerHTML = ["d", "r"].map(t => `<span class="tag">${t === "d" ? "Dépenses" : "Recettes"}</span><div class="row2 form">${BUD.map((b, i) => b[2] !== t ? "" : `<div class="inp"><label for="bud-${i}">${b[0]}</label><input type="number" id="bud-${i}" min="0" step="1000" value="${b[1]}"></div>`).join("")}</div>`).join("");
  function budUpdate() {
    const D = BUD.reduce((s, b, i) => s + (b[2] === "d" ? bv[i] : 0), 0), R = BUD.reduce((s, b, i) => s + (b[2] === "r" ? bv[i] : 0), 0), res = R - D;
    const f5 = D * .05, f10 = D * .10;
    $("#bud-out").innerHTML = `<span class="tag">Résultat prévisionnel</span><div class="big ${res >= 0 ? "good-f" : "bad-f"}">${res >= 0 ? "+" : "−"}${eur(Math.abs(res))}</div>
      <p class="eq">${eur(R)} − ${eur(D)}</p>
      <div class="hbars hideable">${[["Recettes", R, "good-f"], ["Dépenses", D, "bad-f"]].map(([l, v, c]) => `<div class="hbar ${c}"><span class="lab">${l}</span><span class="track"><span class="fill" style="width:${(v / Math.max(R, D, 1) * 100).toFixed(1)}%">${eur(v)}</span></span></div>`).join("")}</div>
      <p>Fonds de sécurité conseillé : <b>${eur(f5)} à ${eur(f10)}</b> (5 à 10 % des dépenses). ${res < 0 ? "Résultat négatif : réduire certains coûts, augmenter les prix ou développer les ventes." : res >= f10 ? "L’excédent couvre ce fonds : marge de sécurité ou investissement dans de nouveaux équipements." : res >= f5 ? "L’excédent couvre le bas de la fourchette du fonds de sécurité." : "L’excédent ne couvre pas encore le fonds de sécurité."}</p>`;
  }
  BUD.forEach((b, i) => $("#bud-" + i).addEventListener("input", e => { bv[i] = Math.max(0, +e.target.value || 0); budUpdate(); }));
  budUpdate();

  /* ---------------- Analyse d'un écart ---------------- */
  const ec = { p: 4000, r: 4600 };
  function ecUpdate() {
    const d = ec.r - ec.p, pc = ec.p ? d / ec.p * 100 : 0;
    $("#ec-eq").textContent = `(${eur(ec.r)} − ${eur(ec.p)}) ÷ ${eur(ec.p)}`;
    $("#ec-out").innerHTML = `<span class="tag">Écart</span><div class="big ${d > 0 ? "bad-f" : "good-f"}">${d >= 0 ? "+" : "−"}${eur(Math.abs(d))} <small>(${d >= 0 ? "+" : "−"}${fmt(Math.abs(pc), 1)} %)</small></div>
      ${d > 0 ? `<p><b>Analyse possible</b> : hausse du prix de certains fruits hors saison, ou gaspillage.</p><p><b>Action corrective</b> : privilégier les fruits de saison ou revoir les quantités commandées.</p>` : `<p>Dépense dans le budget : continuer le suivi hebdomadaire.</p>`}`;
  }
  $("#ec-p").addEventListener("input", e => { ec.p = Math.max(0, +e.target.value || 0); ecUpdate(); });
  $("#ec-r").addEventListener("input", e => { ec.r = Math.max(0, +e.target.value || 0); ecUpdate(); });
  ecUpdate();

  /* ---------------- Outils ---------------- */
  const OUT = {
    tab: ["Tableurs", "Excel, Google Sheets", "Petites structures ou débutantes : budget prévisionnel, dépenses et recettes en temps réel, marges, écarts et ratios calculés automatiquement.", "Un traiteur diététique crée un onglet « Achats matières premières » : date, produit, fournisseur, quantité, prix unitaire, montant ; les formules font le cumul mensuel et le comparent au budget.", "Flexibilité totale, gratuit ou peu coûteux.", "Saisie manuelle rigoureuse, un minimum de compétences."],
    log: ["Logiciels de gestion", "Sage, EBP, QuickBooks, Cegid", "Gros volumes ou suivi précis : factures enregistrées et rapprochement bancaire automatiques, tableaux de bord en temps réel, trésorerie et échéances, lien avec stocks et facturation.", "Un laboratoire de repas minceur relie comptabilité et stock : chaque mouvement de matière devient un mouvement financier, le coût de production est visible tout de suite.", "Gain de temps, fiabilité, vision globale.", "Abonnement et formation initiale."],
    mob: ["Applications mobiles", "Sur smartphone", "Indicateurs consultables partout, saisie immédiate des dépenses et recettes, alertes de dépassement de budget.", "Un gérant de food truck saisit ses achats au marché et photographie le ticket pour l’archiver.", "Réactivité et simplicité.", "Fonctions parfois limitées par rapport à un logiciel complet."]
  };
  seg($("#out-seg"), Object.entries(OUT).map(([id, o]) => ({ id, label: o[0], cls: "ink" })), "tab", k => {
    const [n, ex, d, cas, plus, moins] = OUT[k];
    $("#out-out").innerHTML = `<span class="tag">${ex}</span><h3>${n}</h3><p>${d}</p><p><i>${cas}</i></p><div class="g2"><div class="card good" style="padding:10px 12px"><span class="tag">Avantage</span><p>${plus}</p></div><div class="card bad" style="padding:10px 12px"><span class="tag">Limite</span><p>${moins}</p></div></div>`;
  });
  let tr = 30;
  function trUpdate() {
    $("#tr-n-o").textContent = tr + " transactions";
    $("#tr-out").innerHTML = `<div class="note" style="background:var(--card)"><span>${tr < 50 ? "Moins de <b>50 transactions par mois</b> : un tableur peut suffire." : "Au-delà de <b>50 transactions par mois</b> : un logiciel devient nécessaire."} Le choix dépend aussi du besoin d’intégration (stock, facturation, paie), du budget et de la capacité à former l’équipe.</span></div>`;
  }
  $("#tr-n").addEventListener("input", e => { tr = +e.target.value; trUpdate(); });
  trUpdate();

  /* ---------------- KPI ---------------- */
  const k = { ca: 150000, cv: 45000, cf: 78000, sm: 3000 };
  function kUpdate() {
    const mb = k.ca ? (k.ca - k.cv) / k.ca * 100 : 0, tcf = k.ca ? k.cf / k.ca * 100 : 0, rot = k.sm ? k.cv / k.sm : 0;
    $("#k-out").innerHTML = `<div class="calc-out" style="grid-template-columns:1fr">
      <div><span class="tag">Marge brute</span><div class="big min" data-nohide>${fmt(mb)} %</div><p>(CA − coût des ventes) ÷ CA</p></div>
      <div><span class="tag">Taux de charges fixes</span><div class="big min" data-nohide>${fmt(tcf)} %</div><p>Charges fixes ÷ CA</p></div>
      <div><span class="tag">Rotation des stocks</span><div class="big min" data-nohide>${fmt(rot)} <small>fois</small></div><p>Coût des ventes ÷ stock moyen</p></div></div>`;
  }
  [["k-ca", "ca"], ["k-cv", "cv"], ["k-cf", "cf"], ["k-sm", "sm"]].forEach(([id, key]) => $("#" + id).addEventListener("input", e => { k[key] = Math.max(0, +e.target.value || 0); kUpdate(); }));
  kUpdate();

  /* ---------------- Gains d'optimisation ---------------- */
  hbars($("#gain-bars"), [
    { label: "Électricité", sub: "frigos remplacés par des A+++", v: 25 },
    { label: "Pertes", sub: "dessert « fin de semaine » avec les fruits proches de la DLC", v: 20 },
    { label: "Frais logistiques", sub: "une seule livraison de légumes par semaine", v: 15 },
    { label: "Temps de production", sub: "outils regroupés par zone de préparation", v: 10 }
  ], { max: 30, unit: "% en moins", cls: "good-f" });

  /* ---------------- Fonds de réserve ---------------- */
  let cf = 6500;
  function frUpdate() {
    $("#fr-cf-o").textContent = eur(cf);
    $("#fr-out").innerHTML = `<span class="tag">Réserve à constituer</span><div class="big good-f">${eur(cf * 2)} à ${eur(cf * 3)}</div><p class="eq">${eur(cf)} × 2 à 3 mois</p><p>De quoi continuer à payer le loyer, les salaires et les factures en cas de baisse d’activité ou d’imprévu majeur.</p>`;
  }
  $("#fr-cf").addEventListener("input", e => { cf = +e.target.value; frUpdate(); });
  frUpdate();
})();
