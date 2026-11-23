/* ==========================================================================
   Formules du cas client : page transversale, sans document source propre.
   Formules et repères repris des cours Déterminants et besoins (Black et al., DEJ,
   macronutriments, ration), Plans et menus (répartition des repas), Hors périmètre (IMC),
   Publics spécifiques (eau du nourrisson).
   Un seul calcul (compute) sert au calculateur et à la correction des cas à résoudre.
   ========================================================================== */
(function () {
  const { $, $$, fmt, seg } = window.Fiches;
  const MJ_KCAL = 1 / 0.00418; // 1 kcal = 0,00418 MJ (cours Déterminants et besoins)
  const REPAS = [["Petit-déjeuner", 20, 25], ["Déjeuner", 35, 40], ["Collation", 5, 10], ["Dîner", 30, 35]]; // cours Plans et menus
  const IMC = [[16.5, "insuffisance pondérale"], [18.5, "maigreur"], [25, "corpulence normale"], [30, "surpoids"], [35, "obésité stade 1"], [40, "obésité stade 2"], [Infinity, "obésité stade 3"]]; // cours Hors périmètre
  const classe = v => IMC.find(([max]) => v < max)[1];
  const f1 = v => fmt(v, 1), r = v => fmt(Math.round(v));

  /* Le calcul complet d'un profil { sexe, age, poids, taille, nap, coef, lipp } */
  function compute(c) {
    const k = c.sexe === "H" ? 1.083 : 0.963;
    const mbMJ = k * Math.pow(c.poids, 0.48) * Math.pow(c.taille, 0.5) * Math.pow(c.age, -0.13);
    const mb = mbMJ * MJ_KCAL, dej = mb * c.nap;
    const protG = c.poids * c.coef, protK = protG * 4;
    const lipK = dej * c.lipp / 100, lipG = lipK / 9;
    const gluK = dej - protK - lipK, gluG = gluK / 4;
    const imc = c.poids / (c.taille * c.taille);
    return { k, mbMJ, mb, dej, protG, protK, lipK, lipG, gluK, gluG, imc, pc: v => Math.round(v / dej * 100) };
  }

  /* Les étapes affichées : formule, calcul avec les valeurs, résultat */
  function steps(c, x) {
    return [
      { cls: "ink", t: "Métabolisme de base", f: `MB (MJ) = ${fmt(x.k, 3)} × poids<sup>0,48</sup> × taille<sup>0,50</sup> × âge<sup>−0,13</sup>`,
        calc: `${fmt(x.k, 3)} × ${fmt(c.poids)}<sup>0,48</sup> × ${fmt(c.taille, 2)}<sup>0,50</sup> × ${fmt(c.age)}<sup>−0,13</sup> = ${fmt(x.mbMJ, 2)} MJ, soit ${fmt(x.mbMJ, 2)} × 239 ≈ ${r(x.mb)} kcal`,
        res: `${r(x.mb)} kcal` },
      { cls: "ink", t: "Dépense journalière", f: "DEJ = MB × NAP", calc: `${r(x.mb)} × ${fmt(c.nap, 2)} = ${r(x.dej)} kcal`, res: `${r(x.dej)} kcal` },
      { cls: "pro", t: "Protéines", f: "Protéines (g) = poids × coefficient", calc: `${fmt(c.poids)} × ${fmt(c.coef, 1)} = ${f1(x.protG)} g, × 4 = ${r(x.protK)} kcal (${x.pc(x.protK)} %)`, res: `${r(x.protG)} g` },
      { cls: "lip", t: "Lipides", f: `Lipides (kcal) = DEJ × ${c.lipp} %, puis ÷ 9`, calc: `${r(x.dej)} × ${c.lipp} % = ${r(x.lipK)} kcal, ÷ 9 = ${r(x.lipG)} g`, res: `${r(x.lipG)} g` },
      { cls: "glu", t: "Glucides par différence", f: "Glucides (kcal) = DEJ − protéines − lipides, puis ÷ 4", calc: `${r(x.dej)} − ${r(x.protK)} − ${r(x.lipK)} = ${r(x.gluK)} kcal (${x.pc(x.gluK)} %), ÷ 4 = ${r(x.gluG)} g`, res: `${r(x.gluG)} g` },
      { cls: "ink", t: "Répartir dans la journée", f: "Repas (kcal) = DEJ × part du repas",
        calc: REPAS.map(([n, a, b]) => `${n} ${a} à ${b} % : ${r(x.dej * a / 100)} à ${r(x.dej * b / 100)} kcal`).join("<br>"),
        res: `${r(x.dej * .35)} à ${r(x.dej * .4)} <small>kcal au déjeuner</small>` },
      { cls: "ink", t: "Indice de masse corporelle", f: "IMC = poids ÷ taille²", calc: `${fmt(c.poids)} ÷ ${fmt(c.taille, 2)}<sup>2</sup> = ${f1(x.imc)} : ${classe(x.imc)}`, res: f1(x.imc) },
    ];
  }
  const stepHTML = s => `<div class="fx-step ${s.cls}"><div class="fx-head"><span class="tag">${s.t}</span><span class="fx-res">${s.res}</span></div>
    <div class="fx-f">${s.f}</div><p class="fx-calc-l">${s.calc}</p></div>`;

  /* ---------------- Calculateur ---------------- */
  // Repères du cours Déterminants et besoins : 1,4 sédentaire, 1,5 dans l'exemple, moyenne 1,63, 2 sport dense et travail actif debout
  const NAP = [
    { id: "1.4", label: "Sédentaire (1,4)" },
    { id: "1.5", label: "Sédentaire qui marche 2 à 3 fois par semaine (1,5)" },
    { id: "1.63", label: "Moyenne (1,63)" },
    { id: "2", label: "Sport dense et travail actif debout (2)" },
  ];
  const state = { sexe: "F", nap: 1.5 };
  let setSexe, setNap;
  function update() {
    const c = { sexe: state.sexe, age: +$("#fx-age").value, poids: +$("#fx-poids").value, taille: +$("#fx-taille").value, nap: state.nap, coef: +$("#fx-coef").value, lipp: +$("#fx-lipp").value };
    $("#fx-lipp-o").textContent = c.lipp + " %";
    if (!(c.age > 0 && c.poids > 0 && c.taille > 0)) return;
    const x = compute(c);
    const okG = x.pc(x.gluK) >= 40 && x.pc(x.gluK) <= 55, okP = x.pc(x.protK) >= 10 && x.pc(x.protK) <= 20;
    $("#fx-out").innerHTML = steps(c, x).map(stepHTML).join("") +
      `<div class="note"><span>${okG && okP ? "Répartition dans les repères (glucides 40 à 55 %, protéines 10 à 20 %)." : "Attention : " + (!okG ? `glucides à ${x.pc(x.gluK)} %, hors 40 à 55 %. ` : "") + (!okP ? `protéines à ${x.pc(x.protK)} %, hors 10 à 20 %.` : "")}</span></div>`;
  }
  $$("#fx-form input, #fx-form select").forEach(el => el.addEventListener("input", update));
  $("#fx-exemple").addEventListener("click", () => {
    $("#fx-age").value = 40; $("#fx-poids").value = 70; $("#fx-taille").value = 1.65; $("#fx-coef").value = "1.2"; $("#fx-lipp").value = 35;
    setNap("1.5");
    setSexe("F");
  });
  setNap = seg($("#fx-nap"), NAP, "1.5", v => { state.nap = +v; update(); });
  setSexe =seg($("#fx-sexe"), [{ id: "F", label: "Femme" }, { id: "H", label: "Homme" }], "F", v => { state.sexe = v; update(); });

  /* ---------------- S'entraîner : un cas tiré au hasard ---------------- */
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const between = (a, b, step) => a + step * Math.floor(Math.random() * ((b - a) / step + 1));
  let cas, x;
  // Ce que l'on demande : [libellé, unité, valeur attendue (ou [min, max]), tolérance]
  const ASK = () => [
    ["Métabolisme de base", "kcal", x.mb], ["Dépense journalière", "kcal", x.dej],
    ["Protéines", "g", x.protG], ["Lipides", "g", x.lipG], ["Glucides", "g", x.gluG],
    ["Déjeuner", "kcal", [x.dej * .35, x.dej * .4]], ["IMC", "", x.imc],
  ];
  function nouveau() {
    const sexe = pick(["F", "H"]);
    cas = {
      sexe, age: between(20, 70, 1),
      poids: sexe === "H" ? between(60, 100, 1) : between(50, 90, 1),
      taille: +(sexe === "H" ? between(1.65, 1.92, .01) : between(1.52, 1.78, .01)).toFixed(2),
      nap: +pick(NAP).id, coef: pick([0.8, 1, 1.2]), lipp: pick([35, 36, 38, 40]),
    };
    x = compute(cas);
    $("#fx-cas").innerHTML = `${sexe === "H" ? "Homme" : "Femme"}, ${cas.age} ans, ${fmt(cas.poids)} kg, ${fmt(cas.taille, 2)} m. Activité : ${NAP.find(o => +o.id === cas.nap).label.replace(/ \(.*/, "").toLowerCase()}, NAP ${fmt(cas.nap, 2)}. Protéines ${fmt(cas.coef, 1)} g/kg, lipides ${cas.lipp} % de la DEJ.`;
    $("#fx-try").innerHTML = `<div class="fx-try">${ASK().map(([l, u], i) => `<label class="tag" for="fx-a${i}">${l}</label>
      <span class="fx-field"><input type="number" inputmode="decimal" step="any" id="fx-a${i}" data-i="${i}" autocomplete="off">${u ? `<small>${u}</small>` : ""}</span>
      <span class="fx-v" id="fx-v${i}" aria-live="polite"></span>`).join("")}</div>`;
    $("#fx-bilan").textContent = "";
    $("#fx-correction").hidden = true;
    $("#fx-corr").textContent = "Voir la correction";
  }
  function verifier() {
    let juste = 0, rempli = 0;
    ASK().forEach(([l, u, v], i) => {
      const raw = $("#fx-a" + i).value.replace(",", "."), out = $("#fx-v" + i);
      if (raw === "") { out.textContent = ""; out.className = "fx-v"; return; }
      rempli++;
      const n = +raw;
      const ok = Array.isArray(v) ? n >= v[0] * .96 && n <= v[1] * 1.04 : (l === "IMC" ? Math.abs(n - v) <= .3 : Math.abs(n - v) <= Math.abs(v) * .04);
      if (ok) juste++;
      out.textContent = ok ? "Juste" : "À revoir";
      out.className = "fx-v " + (ok ? "ok" : "ko");
    });
    $("#fx-bilan").textContent = rempli ? `${juste} sur ${rempli} juste${juste > 1 ? "s" : ""}${rempli < ASK().length ? ` (${ASK().length - rempli} case${ASK().length - rempli > 1 ? "s" : ""} vide${ASK().length - rempli > 1 ? "s" : ""})` : ""}.` : "Entrez au moins un résultat.";
  }
  $("#fx-verif").addEventListener("click", verifier);
  $("#fx-try").addEventListener("keydown", e => { if (e.key === "Enter") verifier(); });
  $("#fx-corr").addEventListener("click", () => {
    const box = $("#fx-correction"), open = box.hidden;
    if (open) box.innerHTML = steps(cas, x).map(stepHTML).join("");
    box.hidden = !open;
    $("#fx-corr").textContent = open ? "Cacher la correction" : "Voir la correction";
  });
  $("#fx-autre").addEventListener("click", nouveau);
  nouveau();
})();
