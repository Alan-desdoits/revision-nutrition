/* ==========================================================================
   Cours : Élaboration de plans alimentaires et de menus
   Source : documents/finis/Élaboration de plan alimentaires et de menus.docx
   ========================================================================== */
(function () {
  const { $, $$, fmt, seg, hbars } = window.Fiches;

  /* ---------------- Répartition de l’énergie ---------------- */
  const REP = [["pdj", "Petit-déjeuner", [20, 25]], ["dej", "Déjeuner", [35, 40]], ["col", "Collation", [5, 10]], ["din", "Dîner", [30, 35]]];
  let col = "oui";
  function rep() {
    const dej = +$("#dej").value;
    $("#dej-o").textContent = fmt(dej) + " kcal";
    const rows = REP.filter(r => col === "oui" || r[0] !== "col").map(([id, n, [a, b]]) => ({ label: n, sub: `${a} à ${b} %`, v: [Math.round(dej * a / 100), Math.round(dej * b / 100)], cls: id === "col" ? "fl" : "glu" }));
    hbars($("#rep-bars"), rows, { max: Math.round(dej * 0.4), unit: "kcal" });
    if (col === "non") $("#rep-bars").insertAdjacentHTML("beforeend", `<p style="color:var(--muted);font-size:.9rem;margin-top:6px">Les pourcentages du cours sont donnés avec une collation « si présente ».</p>`);
  }
  seg($("#col-seg"), [{ id: "oui", label: "Avec collation" }, { id: "non", label: "Sans collation" }], "oui", v => { col = v; rep(); });
  $("#dej").addEventListener("input", rep);

  /* ---------------- Assiette équilibrée ---------------- */
  const PARTS = {
    leg: ["½ assiette de légumes", "fl", "Crus ou cuits. Fibres, vitamines, minéraux, composés protecteurs : satiété, transit, prévention. Leur diversité de <b>couleurs</b> couvre mieux les micronutriments.", "Schéma du cours : au moins 2 portions, avec 2 variétés minimum."],
    fec: ["¼ assiette de féculents", "glu", "De préférence complets ou semi-complets. Énergie durable sous forme de glucides complexes, stabilité glycémique. Quasiment à chaque repas.", "Schéma du cours : 1 à 3 portions."],
    pro: ["¼ assiette de protéines", "pro", "Animales (viande, poisson, œufs, laitages) ou végétales (légumineuses, céréales, tofu, oléagineux). Construction et entretien des tissus, satiété.", "Schéma du cours : viandes, poissons, 1 portion."],
    plus: ["En complément", "lai", "Un fruit ou un produit laitier, un peu de matière grasse de qualité (huiles végétales), et de l’<b>eau</b> comme boisson.", "Schéma du cours : matière grasse 1 à 3 portions, fruit 1 portion, produit laitier 1 portion."]
  };
  let part = "leg";
  function plate() {
    const f = k => `fill="var(--${PARTS[k][1]}${part === k ? "" : "-m"})"`;
    const tc = k => part === k ? "#ffffff" : "var(--fg)"; // texte blanc sur la part choisie (couleur foncée)
    $("#plate").innerHTML = `
      <circle cx="110" cy="110" r="104" fill="var(--card)" stroke="var(--line2)" stroke-width="2"/>
      <path data-k="leg" tabindex="0" role="button" aria-label="Légumes" ${f("leg")} d="M110 18 A92 92 0 0 0 110 202 Z" style="cursor:pointer"/>
      <path data-k="fec" tabindex="0" role="button" aria-label="Féculents" ${f("fec")} d="M114 18 A92 92 0 0 1 206 110 L114 110 Z" style="cursor:pointer"/>
      <path data-k="pro" tabindex="0" role="button" aria-label="Protéines" ${f("pro")} d="M114 114 L206 114 A92 92 0 0 1 114 202 Z" style="cursor:pointer"/>
      <circle data-k="plus" tabindex="0" role="button" aria-label="En complément" cx="196" cy="196" r="20" ${f("plus")} stroke="var(--card)" stroke-width="3" style="cursor:pointer"/>
      <text x="62" y="114" text-anchor="middle" font-size="13" font-weight="700" fill="${tc("leg")}" pointer-events="none">½ légumes</text>
      <text x="158" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="${tc("fec")}" pointer-events="none">¼ féculents</text>
      <text x="158" y="156" text-anchor="middle" font-size="12" font-weight="700" fill="${tc("pro")}" pointer-events="none">¼ protéines</text>`;
    const [n, c, t, q] = PARTS[part];
    $("#plate-out").className = "result " + c;
    $("#plate-out").innerHTML = `<h3 style="color:var(--c)">${n}</h3><p>${t}</p><p><b>${q}</b></p>`;
  }
  const pick = e => { const el = e.target.closest("[data-k]"); if (el) { part = el.dataset.k; plate(); $(`#plate [data-k="${part}"]`).focus(); } };
  $("#plate").addEventListener("click", pick);
  $("#plate").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(e); } });
  plate();

  /* ---------------- Composer un déjeuner ---------------- */
  const OPTS = {
    pro: ["Protéine", "pro", ["Papillote de saumon", "Filet de poulet", "Omelette", "Lentilles", "Tofu"]],
    fec: ["Féculent", "glu", ["Riz", "Pâtes", "Pommes de terre", "Semoule", "Quinoa", "Blé"]],
    leg: ["Légume", "fl", ["Ratatouille", "Haricots verts", "Poêlée de courgettes", "Carottes rôties", "Salade de saison"]],
    fin: ["Fruit ou laitier", "lai", ["Fromage blanc au miel", "Fruit de saison", "Yaourt nature", "Compote sans sucre ajouté"]]
  };
  const choice = { pro: 0, fec: 0, leg: 0, fin: 0 };
  $("#menu-form").innerHTML = Object.entries(OPTS).map(([k, [n, , list]]) => `<div class="inp"><label for="o-${k}">${n}</label><select id="o-${k}" data-k="${k}">${list.map((x, i) => `<option value="${i}">${x}</option>`).join("")}</select></div>`).join("") +
    `<button type="button" class="chip" id="ex-menu" style="justify-self:start">Exemple du cours</button>`;
  function menu() {
    const items = Object.entries(OPTS).map(([k, [n, c, list]]) => [n, c, list[choice[k]]]);
    const vegProt = choice.pro >= 3;
    $("#menu-out").innerHTML = `<span class="tag">Mon déjeuner</span><h3 style="font-size:1.3rem">${items.map(i => i[2]).join(" + ")}</h3>
      <div class="pills">${items.map(([n, c]) => `<span class="${c}" style="background:var(--s)">${n} ✓</span>`).join("")}</div>
      <p>Les quatre catégories du plan sont là.${vegProt ? " Protéine <b>végétale</b> : pensez à la variété sur la semaine." : ""} Sur la semaine, alternez viande, poisson, œufs, légumineuses, et les féculents.</p>`;
  }
  $("#menu-form").addEventListener("change", e => { const k = e.target.dataset.k; if (k) { choice[k] = +e.target.value; menu(); } });
  $("#ex-menu").addEventListener("click", () => {
    Object.assign(choice, { pro: 0, fec: 0, leg: 0, fin: 0 });
    $$("#menu-form select").forEach(s => s.value = "0");
    menu();
  });
  menu();
})();
