/* ==========================================================================
   Révisions nutrition : comportements communs à toutes les fiches de cours
   - onglets (avec lien direct : cours/xxx.html#digestion)
   - mode « Cacher les chiffres » : tous les nombres de la page, y compris
     ceux rendus plus tard par le script du cours, sont masqués automatiquement
   - pictogrammes de molécules (SVG générés)
   Aucune donnée n'est enregistrée : tout repart de zéro au rechargement.
   ========================================================================== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const NAMES = { glu: "Glucides", pro: "Protéines", lip: "Lipides", eau: "Eau", vit: "Vitamines", min: "Minéraux" };
  const fmt = (v, d = 1) => Number(v).toLocaleString("fr-FR", { maximumFractionDigits: d });

  /* ---------------- Onglets ---------------- */
  function initTabs() {
    const main = $("main.fiche"), tabs = $("#tabs");
    if (!main || !tabs) return;
    const secs = $$(":scope > section", main);
    tabs.innerHTML = secs.map(s => `<button role="tab" id="tab-${s.id}" aria-controls="${s.id}" aria-selected="false">${s.dataset.name}</button>`).join("");
    secs.forEach(s => { s.setAttribute("role", "tabpanel"); s.setAttribute("aria-labelledby", "tab-" + s.id); });

    // Boutons « précédent / suivant » en bas de chaque section
    secs.forEach((s, i) => {
      const prev = secs[i - 1], next = secs[i + 1];
      const pager = document.createElement("div");
      pager.className = "pager";
      pager.innerHTML = (prev ? `<button data-go="${prev.id}"><small>Précédent</small>← ${prev.dataset.name}</button>` : "") +
        (next ? `<button class="next" data-go="${next.id}"><small>Suivant</small>${next.dataset.name} →</button>` : "");
      s.appendChild(pager);
    });

    function show(id, scroll) {
      const target = secs.find(s => s.id === id) || secs[0];
      secs.forEach(s => s.hidden = s !== target);
      $$("button", tabs).forEach(b => {
        const on = b.getAttribute("aria-controls") === target.id;
        b.setAttribute("aria-selected", on);
        if (on) b.scrollIntoView({ inline: "center", block: "nearest" });
      });
      if (location.hash.slice(1) !== target.id) history.replaceState(null, "", "#" + target.id);
      if (scroll) {
        const navTop = $(".fnav").offsetTop;
        if (window.scrollY > navTop) window.scrollTo({ top: navTop });
      }
    }
    tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.getAttribute("aria-controls"), true); });
    main.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b) show(b.dataset.go, true); });
    window.addEventListener("hashchange", () => show(location.hash.slice(1)));
    show(location.hash.slice(1));
  }

  /* ---------------- Cacher les chiffres ----------------
     Un nombre = chiffres, éventuellement une fourchette (10–20, 0,8 à 1,2),
     des milliers séparés par une espace (2 000) et une unité.
     Ne sont pas touchés : les nombres collés à une lettre ou un tiret
     (B12, SGLT1, oméga-3) et tout ce qui est dans [data-nohide]. */
  const UNIT = "(?:%|kcal\\/g|kcal|g\\/kg\\/j(?:our)?|g\\/kg|g\\/L|g\\/j|mL\\/kg|mL|µg|mg|kg|g|L\\/j|L|°C)";
  const N = "\\d+(?:[\\u00a0\\u202f ]\\d{3})*(?:[,.]\\d+)?";
  const NUM_RE = new RegExp(`(?<![\\p{L}\\p{N}\\-])(?:[<>≈~]\\s?)?${N}(?:\\s?(?:–|-|à)\\s?${N})?(?:\\s?${UNIT})?(?![\\p{L}\\p{N}])`, "gu");
  let observer;

  function wrapNumbers(root) {
    if (!root || root.nodeType !== 1 && root.nodeType !== 3) return;
    const walker = document.createTreeWalker(root.nodeType === 3 ? root.parentNode : root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p || p.closest("[data-nohide], .num, script, style, svg, .tabs, .pager, input, select, label.quiz-toggle")) return NodeFilter.FILTER_REJECT;
        NUM_RE.lastIndex = 0;
        return NUM_RE.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const txt = n.nodeValue, frag = document.createDocumentFragment();
      let last = 0;
      txt.replace(NUM_RE, (m, i) => {
        if (i > last) frag.appendChild(document.createTextNode(txt.slice(last, i)));
        const s = document.createElement("span");
        s.className = "num hideable"; s.textContent = m;
        frag.appendChild(s); last = i + m.length;
        return m;
      });
      if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
  }

  function initQuiz() {
    const main = $("main.fiche"), box = $("#quiz");
    if (!main) return;
    const run = () => { observer.disconnect(); wrapNumbers(main); observer.observe(main, { childList: true, subtree: true, characterData: true }); };
    observer = new MutationObserver(run);
    run();
    if (!box) return;
    const banner = $("#quiz-banner");
    box.addEventListener("change", () => {
      document.body.classList.toggle("quiz", box.checked);
      $$(".shown").forEach(el => el.classList.remove("shown"));
      if (banner) banner.hidden = !box.checked;
    });
    // Révéler : un clic sur un élément masqué le dévoile (et tout ce qu'il contient)
    document.addEventListener("click", e => {
      if (!document.body.classList.contains("quiz")) return;
      let el = e.target.closest(".hideable:not(.shown)");
      if (!el) return;
      // Remonter jusqu'au bloc masqué le plus large (ex. un graphique entier)
      let up;
      while ((up = el.parentElement && el.parentElement.closest(".hideable:not(.shown)"))) el = up;
      e.preventDefault(); e.stopPropagation();
      el.classList.add("shown");
      $$(".hideable", el).forEach(x => x.classList.add("shown"));
    }, true);
  }

  /* ---------------- Pictogrammes ---------------- */
  function hex(x, y, r, fill) {
    const p = [...Array(6)].map((_, i) => { const a = Math.PI / 3 * i + Math.PI / 6; return (x + r * Math.cos(a)).toFixed(1) + "," + (y + r * Math.sin(a)).toFixed(1); }).join(" ");
    return (fill ? `<polygon points="${p}" fill="#fff"/>` : "") + `<polygon points="${p}" fill="${fill ? "currentColor" : "none"}" fill-opacity=".18" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`;
  }
  function hexes(n, more) {
    const r = 14, step = r * 2.1; let s = "";
    for (let i = 0; i < n; i++) {
      if (i) s += `<line x1="${18 + (i - 1) * step}" y1="26" x2="${18 + i * step}" y2="26" stroke="currentColor" stroke-width="2.5"/>`;
      s += hex(18 + i * step, 26, r, true);
    }
    const w = 18 + (n - 1) * step + 20 + (more ? 30 : 0);
    if (more) s += [0, 1, 2].map(i => `<circle cx="${w - 26 + i * 9}" cy="26" r="2.6" fill="currentColor"/>`).join("");
    return [w, s];
  }
  function zig(x, y, len, bend) {
    const pts = []; let cx = x, cy = y;
    for (let i = 0; i < len; i++) { pts.push(cx + "," + cy); cx += 11; cy += (i % 2 ? -7 : 7); if (bend && i === 3) cy += 10; }
    return `<polyline points="${pts.join(" ")}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
  }
  const PICS = {
    hex1: () => hexes(1), hex2: () => hexes(2), hex3: () => hexes(3), hexN: () => hexes(5, true),
    beads: () => {
      let s = `<path d="M10 30 C 30 6, 50 46, 70 22 S 110 6, 130 30 S 160 40, 172 24" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/>`;
      const pts = [[10, 30], [27, 16], [44, 28], [61, 28], [78, 18], [96, 14], [113, 22], [130, 30], [148, 33], [165, 27]];
      const op = [.9, .35, .6, .2, .9, .5, .3, .75, .4, .6];
      pts.forEach(([x, y], i) => s += `<circle cx="${x}" cy="${y}" r="7.5" fill="currentColor" fill-opacity="${op[i]}" stroke="currentColor" stroke-width="1.5"/>`);
      return [180, s];
    },
    tri: () => {
      let s = `<rect x="4" y="4" width="18" height="44" rx="5" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2.5"/>`;
      [10, 26, 42].forEach(y => s += zig(22, y - 3, 12, false));
      return [150, s];
    },
    drop: () => [44, `<path d="M22 4 C 22 4, 6 24, 6 34 a16 16 0 0 0 32 0 C 38 24, 22 4, 22 4 Z" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 34 a8 8 0 0 0 8 8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`],
    sat: () => [170, [0, 1, 2].map(i => zig(6, 10 + i * 14, 15, false)).join("")],
    insat: () => [170, [0, 1, 2].map(i => `<g transform="translate(${i * 18} ${i * 3})">${zig(6, 8 + i * 9, 13, true)}</g>`).join("")],
    amine: () => [60, `<circle cx="30" cy="28" r="22" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="2.5"/><text x="30" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" fill="currentColor">AA</text>`],
    chol: () => [120, `<g fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round">${hex(16, 30, 13, false)}${hex(38, 30, 13, false)}${hex(60, 18, 13, false)}</g><path d="M73 12 l10 -6 l8 6" fill="none" stroke="currentColor" stroke-width="2.5"/>${zig(88, 8, 3, false)}`],
    lipo: () => [60, `<circle cx="30" cy="28" r="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/><circle cx="30" cy="28" r="14" fill="currentColor" fill-opacity=".25"/>`]
  };
  function pic(el, name) {
    if (!PICS[name]) return;
    const [w, s] = PICS[name]();
    el.setAttribute("viewBox", `0 0 ${w} 52`);
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = s;
  }
  function initPics(root = document) { $$("svg[data-pic]", root).forEach(el => pic(el, el.dataset.pic)); }

  window.Fiches = { $, $$, NAMES, fmt, pic, initPics, wrapNumbers };
  document.addEventListener("DOMContentLoaded", () => { initPics(); initTabs(); initQuiz(); });
})();
