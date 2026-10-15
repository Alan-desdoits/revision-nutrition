/* ==========================================================================
   Cours : Déterminants de santé et besoins nutritionnels
   Source : documents/finis/Déterminants de santé et besoins nutritionnels.docx
   Le calculateur de besoins et la ration partagent le même état :
   la ration se compare à la DEJ calculée.
   ========================================================================== */
(function () {
  const { $, $$, fmt, seg, explorer, hbars } = window.Fiches;

  /* ---------------- Énergie ---------------- */
  hbars($("#dej-bars"), [
    { label: "Métabolisme de base", sub: "organes vitaux, température", v: [60, 70], cls: "ink" },
    { label: "Activité physique", sub: "sédentaire → sportif", v: [15, 40], cls: "glu" },
    { label: "Thermogenèse alimentaire", sub: "digérer, absorber", v: 10, cls: "pro" }
  ], { max: 100, unit: "%" });

  const BAL = {
    moins: ["Apports < besoins", "bad", "Carences, fatigue, perte de poids, défenses immunitaires diminuées."],
    egal: ["Apports = besoins", "good", "Équilibre."],
    plus: ["Apports > besoins", "bad", "Stockage, surpoids, obésité, diabète de type 2, dyslipidémies, hypertension."]
  };
  seg($("#bal-seg"), [{ id: "moins", label: "Apports trop faibles", cls: "bad" }, { id: "egal", label: "Équilibre", cls: "good" }, { id: "plus", label: "Apports trop élevés", cls: "bad" }], "egal", k => {
    const [t, c, p] = BAL[k];
    $("#bal-out").className = "card " + c;
    $("#bal-out").innerHTML = `<h3>${t}</h3><p>${p}</p>`;
  });

  /* ---------------- Déterminants ---------------- */
  const D = (name, txt) => ({ name, rows: [["Influence", txt]] });
  explorer($("#det-chips"), $("#det-panel"), [
    { cls: "ink", label: "Biologiques", items: [
      D("Âge", "Nourrisson : beaucoup de lipides (cerveau, membranes). Adolescent : protéines, calcium, fer (règles). Adulte : besoins stables. Senior : énergie un peu plus basse, mais vitamine D, calcium et protéines à surveiller."),
      D("Sexe", "Les hommes, plus musclés, ont un MB plus élevé. Les femmes en âge de procréer : pertes de fer, grossesse, allaitement."),
      D("Composition corporelle", "Plus de muscle = plus de dépense, même au repos. Deux personnes de même poids n’ont pas le même besoin : regarder masse maigre et masse grasse."),
      D("État physiologique", "Grossesse, allaitement, convalescence, après une opération, forte activité : besoins augmentés.")
    ] },
    { cls: "glu", label: "Mode de vie", items: [
      D("Activité physique", "Un travailleur du bâtiment dépense bien plus qu’un employé de bureau de même gabarit. Plus de protéines, de magnésium, de potassium."),
      D("Sommeil", "Le manque de sommeil dérègle la <b>ghréline</b> (faim) et la <b>leptine</b> (satiété) : plus de calories, souvent grasses ou sucrées."),
      D("Stress", "Moins d’appétit chez certains, grignotage compulsif chez d’autres.")
    ] },
    { cls: "pro", label: "Socio-économiques", items: [
      D("Budget", "Accès restreint aux produits frais, repli sur des aliments moins chers et moins nutritifs."),
      D("Religion et traditions", "Exclusion de la viande, limitation des protéines animales, périodes de jeûne."),
      D("Éducation nutritionnelle", "Goûts, curiosité, connaissance des aliments, envie de cuisiner : façonnés dès l’enfance."),
      D("Accessibilité géographique", "Un <b>désert alimentaire</b> limite la variété et la qualité.")
    ] },
    { cls: "eau", label: "Environnementaux", items: [
      D("Climat", "Chaleur : besoins en eau en hausse. Altitude : plus d’énergie (froid, moins d’oxygène)."),
      D("Saisonnalité", "Produits de saison plus faciles à trouver et moins chers : la variété change au fil de l’année.")
    ] }
  ]);

  /* ---------------- Calcul des besoins (Black et al.) ---------------- */
  const MJ_KCAL = 1 / 0.00418; // 1 kcal = 0,00418 MJ (cours)
  const state = { sexe: "F", dej: 0 };
  let setSexe;

  function calc() {
    const age = +$("#age").value, p = +$("#poids").value, t = +$("#taille").value, nap = +$("#nap").value, coef = +$("#coef").value, lp = +$("#lipp").value;
    $("#nap-o").textContent = fmt(nap, 2);
    $("#lipp-o").textContent = lp + " %";
    if (!(age > 0 && p > 0 && t > 0)) return;
    const k = state.sexe === "H" ? 1.083 : 0.963;
    const mbMJ = k * Math.pow(p, 0.48) * Math.pow(t, 0.5) * Math.pow(age, -0.13);
    const mb = mbMJ * MJ_KCAL, dej = mb * nap;
    const protG = p * coef, protK = protG * 4, lipK = dej * lp / 100, lipG = lipK / 9, gluK = dej - protK - lipK, gluG = gluK / 4;
    const pc = v => Math.round(v / dej * 100);
    state.dej = dej;
    const ok = (v, a, b) => v >= a && v <= b;
    $("#bes-out").innerHTML = `
      <div class="g2"><div><span class="tag">Métabolisme de base</span><div class="big">${fmt(mbMJ, 2)} <small>MJ</small></div><p>≈ ${fmt(Math.round(mb))} kcal/j</p></div>
      <div><span class="tag">DEJ = MB × NAP</span><div class="big">${fmt(Math.round(dej))} <small>kcal/j</small></div></div></div>
      <div class="stack3">
        <div class="pro" style="flex:0 0 ${pc(protK)}%">P ${pc(protK)} %</div>
        <div class="lip" style="flex:0 0 ${pc(lipK)}%">L ${pc(lipK)} %</div>
        <div class="glu" style="flex:1">G ${pc(gluK)} %</div>
      </div>
      <div class="tbl" style="border:0;background:none"><table style="min-width:0"><tbody>
        <tr class="pro"><th>Protéines</th><td class="n">${fmt(protG, 1)} g</td><td class="n">${fmt(Math.round(protK))} kcal</td><td>${p} kg × ${fmt(coef)}</td></tr>
        <tr class="lip"><th>Lipides</th><td class="n">${fmt(Math.round(lipG))} g</td><td class="n">${fmt(Math.round(lipK))} kcal</td><td>${lp} % de la DEJ, ÷ 9</td></tr>
        <tr class="glu"><th>Glucides</th><td class="n">${fmt(Math.round(gluG))} g</td><td class="n">${fmt(Math.round(gluK))} kcal</td><td>par différence, ÷ 4</td></tr>
      </tbody></table></div>
      <p>${ok(pc(gluK), 40, 55) && ok(pc(protK), 10, 20) ? "Répartition dans les repères (glucides 40–55 %, protéines 10–20 %)." : "Attention : " + (!ok(pc(gluK), 40, 55) ? `glucides à ${pc(gluK)} %, hors 40–55 %. ` : "") + (!ok(pc(protK), 10, 20) ? `protéines à ${pc(protK)} %, hors 10–20 %.` : "")}</p>`;
    rationOut();
  }
  $$("#bes-form input, #bes-form select").forEach(el => el.addEventListener("input", calc));
  $("#exemple").addEventListener("click", () => {
    $("#age").value = 40; $("#poids").value = 70; $("#taille").value = 1.65; $("#nap").value = 1.5; $("#coef").value = "1.2"; $("#lipp").value = 35;
    setSexe("F");
  });

  /* ---------------- Ration alimentaire ---------------- */
  // [aliment, P, L, G, fibres] pour 100 g (tableau du cours)
  const FOODS = [["Lait ½ écrémé ou équivalent", 3.2, 1.6, 4.6, 0], ["Fromage", 20, 22, 0, 0], ["VPO", 18, 10, 0, 0], ["Pain", 8, 1, 56, 3.5], ["Céréales", 10, 0, 75, 4], ["Légumes", 1, 0, 5, 3], ["Fruits", 0, 0, 12, 2], ["Beurre", 0, 82, 0, 0], ["Huile", 0, 100, 0, 0], ["Sucre", 0, 0, 100, 0]];
  const REF = { F: [400, 30, 120, 180, 120, 350, 250, 20, 45, 20], H: [400, 40, 200, 200, 160, 350, 250, 20, 55, 40] };
  let qty = REF.F.slice();
  const d = v => v ? fmt(v) : "/";
  function drawTable() {
    $("#ration-tbl").innerHTML = `<table><thead><tr><th>Aliment</th><th>Quantité (g)</th><th>P /100 g</th><th>L /100 g</th><th>G /100 g</th><th>P</th><th>L</th><th>G</th></tr></thead><tbody>
      ${FOODS.map((f, i) => `<tr><th>${f[0]}</th><td><input type="number" min="0" max="1000" step="10" value="${qty[i]}" data-i="${i}" aria-label="Quantité de ${f[0]}" style="width:84px;font:inherit;padding:6px 8px;border-radius:8px;border:1px solid var(--line2)"></td>
        <td class="n">${d(f[1])}</td><td class="n">${d(f[2])}</td><td class="n">${d(f[3])}</td><td class="n" id="p${i}"></td><td class="n" id="l${i}"></td><td class="n" id="g${i}"></td></tr>`).join("")}
    </tbody></table>`;
  }
  function rationOut() {
    let P = 0, L = 0, G = 0, Fi = 0;
    FOODS.forEach((f, i) => {
      const q = qty[i] / 100, p = f[1] * q, l = f[2] * q, g = f[3] * q;
      P += p; L += l; G += g; Fi += f[4] * q;
      const cell = (id, v) => { const el = $("#" + id + i); if (el) el.textContent = v ? fmt(v, 1) : "/"; };
      cell("p", p); cell("l", l); cell("g", g);
    });
    const kjP = P * 17, kjL = L * 38, kjG = G * 17, kj = kjP + kjL + kjG, kcal = kj / 4.18;
    const pc = v => v / kj * 100;
    const gap = state.dej ? Math.round(kcal - state.dej) : null;
    $("#ration-out").innerHTML = `<div class="g2"><div><span class="tag">Total</span><div class="big">${fmt(Math.round(kcal))} <small>kcal · ${fmt(Math.round(kj))} kJ</small></div></div>
      <div><span class="tag">Par rapport à la DEJ calculée</span><div class="big">${gap === null ? "–" : (gap > 0 ? "+" : "") + fmt(gap)} <small>kcal</small></div><p>DEJ de l’onglet « Calculer les besoins » : ${fmt(Math.round(state.dej))} kcal.</p></div></div>
      <div class="stack3"><div class="pro" style="flex:0 0 ${pc(kjP).toFixed(1)}%">P ${fmt(pc(kjP), 1)} %</div><div class="lip" style="flex:0 0 ${pc(kjL).toFixed(1)}%">L ${fmt(pc(kjL), 1)} %</div><div class="glu" style="flex:1">G ${fmt(pc(kjG), 1)} %</div></div>
      <div class="stack-leg"><span>Protéines <b>${fmt(P, 1)} g</b></span><span>Lipides <b>${fmt(L, 1)} g</b></span><span>Glucides <b>${fmt(G, 1)} g</b></span><span>Fibres <b>${fmt(Fi, 1)} g</b></span></div>`;
  }
  $("#ration-tbl").addEventListener("input", e => {
    const i = e.target.dataset.i; if (i == null) return;
    qty[+i] = Math.max(0, +e.target.value || 0); rationOut();
  });
  seg($("#ref-seg"), [{ id: "F", label: "Femme de référence" }, { id: "H", label: "Homme de référence" }], "F", k => { qty = REF[k].slice(); drawTable(); rationOut(); });

  // Le sexe est choisi en dernier : la ration existe déjà quand le calcul se lance
  setSexe = seg($("#sexe"), [{ id: "F", label: "Femme" }, { id: "H", label: "Homme" }], "F", v => { state.sexe = v; calc(); });
})();
