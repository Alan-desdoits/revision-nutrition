/* Fiches bristol : catalogue (sans ancre) ou fiches d'un cours (#slug).
   Données : fiches/index.js (liste des cours prêts) et fiches/<slug>.js (Bristol.cours(slug, fiches)).
   Une fiche = { onglet, titre, notes: [[{h, p: [...]}, ...], [...]], carte: { centre, branches: [[titre, [feuilles]], ...] } } */
(function () {
  const V = document.currentScript.src.split("?v=")[1] || "";
  const data = {};
  window.Bristol = { cours(slug, fiches) { data[slug] = fiches; } };

  const main = document.getElementById("main");
  const ready = new Set(window.BRISTOL_DISPO || []);
  const courses = window.COURS || [];
  const find = slug => courses.find(c => c.slug === slug);

  const brace = () => `<div class="bz-brace" aria-hidden="true"><svg viewBox="0 0 20 100" preserveAspectRatio="none"><path d="M18,1 C7,1 13,50 2,50 C13,50 7,99 18,99"/></svg></div>`;

  const recto = (c, f, i, n) => `
    <div class="bz-frame" data-face="recto"><div class="bz-face" data-fit="recto">
      <span class="bz-k">${c.titre} · ${f.onglet}</span>
      <h2>${f.titre}</h2>
      <div class="bz-notes" style="--cols:${f.notes.length}">${f.notes.map(col => `<div>${col.map(b => `<h3>${b.h}</h3>${b.p.map(p => `<p>${p}</p>`).join("")}`).join("")}</div>`).join("")}</div>
      <span class="bz-foot">Révisions nutrition · fiche ${i} sur ${n} · recto</span>
    </div></div>`;

  const verso = (c, f, i, n) => `
    <div class="bz-frame" data-face="verso"><div class="bz-face" data-fit="verso">
      <span class="bz-k">${c.titre} · ${f.onglet} · de mémoire</span>
      <div class="bz-map">
        <div class="bz-centre">${f.carte.centre}</div>${brace()}
        <div class="bz-groups">${f.carte.branches.map(([t, l]) => `<div class="bz-g"><div class="bz-t">${t}</div>${brace()}<ul>${l.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
      </div>
      <span class="bz-foot">Révisions nutrition · fiche ${i} sur ${n} · verso</span>
    </div></div>`;

  /* Mise à l'échelle des faces dans leur cadre */
  const ro = new ResizeObserver(entries => entries.forEach(e => {
    const face = e.target.firstElementChild;
    if (face) face.style.setProperty("--k", e.target.clientWidth / 840);
  }));

  /* Ajuste la taille du texte pour que tout tienne sur la face */
  function fit(face) {
    if (face.dataset.fit === "recto") {
      const box = face.querySelector(".bz-notes");
      for (let lh = 30; lh >= 20; lh--) {
        face.style.setProperty("--lh", lh + "px");
        face.style.setProperty("--fs", (lh * .57).toFixed(1) + "px");
        if (box.scrollHeight <= box.clientHeight + 1) break;
      }
    } else {
      const map = face.querySelector(".bz-map"), groups = face.querySelector(".bz-groups"), centre = face.querySelector(".bz-centre");
      for (let s = 34; s >= 20; s -= 2) {
        centre.style.setProperty("--cfs", s + "px");
        if (centre.scrollWidth <= centre.clientWidth + 1) break;
      }
      for (let k = 0; k <= 12; k++) {
        map.style.setProperty("--vfs", (20 - k * .5) + "px");
        map.style.setProperty("--vgap", Math.max(3, 20 - k * 1.5) + "px");
        if (groups.offsetHeight <= map.clientHeight + 1) break;
      }
    }
  }
  const fitAll = () => main.querySelectorAll(".bz-face").forEach(fit);

  function catalog() {
    document.title = "Fiches bristol · Révisions nutrition";
    const n = courses.filter(c => ready.has(c.slug)).length;
    main.innerHTML = `
      <p class="count-line">${n === courses.length ? `${n} cours, ${courses.reduce((t, c) => t + (ready.has(c.slug) ? c.fiches.length : 0), 0)} fiches bristol` : `${n} cours sur ${courses.length} ont leurs fiches bristol. Les autres arrivent.`}</p>
      ${(window.THEMES || []).map(t => {
        const cs = courses.filter(c => c.theme === t.id && c.statut === "disponible");
        if (!cs.length) return "";
        return `<section class="theme"><h2 class="sec">${t.titre} <small>${t.sous}</small></h2><div class="courses">${cs.map(c => {
          const ok = ready.has(c.slug);
          const inner = `<div class="course-head"><span class="status ${ok ? "on" : "wait"}">${ok ? "Prêtes" : "Bientôt"}</span>${ok ? `<span class="nfiches">${c.fiches.length} fiches</span>` : ""}</div>
            <h3>${c.titre}</h3><p>${ok ? "Une fiche par onglet : les notes au recto, la carte en accolades au verso." : "Les fiches de ce cours ne sont pas encore écrites."}</p>
            ${ok ? `<span class="go">Voir et imprimer →</span>` : ""}`;
          return ok ? `<a class="course card" href="#${c.slug}">${inner}</a>` : `<div class="course card is-wait">${inner}</div>`;
        }).join("")}</div></section>`;
      }).join("")}`;
  }

  let faces = "both";
  function show(slug) {
    const c = find(slug), fiches = data[slug];
    document.title = `Fiches bristol · ${c.titre} · Révisions nutrition`;
    const n = fiches.length;
    main.innerHTML = `
      <h2 class="sec" style="margin-top:0">${c.titre} <small>${n} fiches, une par onglet du cours</small></h2>
      <div class="bz-tools">
        <div class="seg ink" id="bz-faces" role="group" aria-label="Faces à afficher et imprimer">
          <button type="button" data-v="both">Recto et verso</button><button type="button" data-v="recto">Recto</button><button type="button" data-v="verso">Verso</button>
        </div>
        <div class="bz-actions">
          <button type="button" class="bz-print" id="bz-memo">Fiche de révision détaillée (A4)</button>
          <button type="button" class="bz-print alt" id="bz-print">Imprimer les fiches bristol (A5)</button>
        </div>
      </div>
      <p class="note bz-hide-print"><span>« Fiche de révision détaillée » ouvre le mémo tapé de tout le cours, à imprimer en A4 : c’est aussi ce que sort Cmd + P. « Imprimer les fiches bristol » sort ces fiches en A5 paysage ; pour un recto-verso, choisir « retourner sur le bord court ». Pour un PDF, choisir « Enregistrer au format PDF » comme imprimante.</span></p>
      <div class="bz-list">${fiches.map((f, k) => `
        <div class="bz-item"><span class="tag">Onglet ${k + 1} · ${f.onglet}</span>
          <div class="bz-pair">${recto(c, f, k + 1, n)}${verso(c, f, k + 1, n)}</div></div>`).join("")}</div>`;
    main.querySelectorAll(".bz-frame").forEach(fr => ro.observe(fr));
    const seg = main.querySelector("#bz-faces");
    const apply = () => {
      seg.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === faces));
      main.querySelectorAll(".bz-frame").forEach(fr => { fr.hidden = faces !== "both" && fr.dataset.face !== faces; });
      main.querySelectorAll(".bz-pair").forEach(p => p.classList.toggle("one", faces !== "both"));
    };
    seg.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { faces = b.dataset.v; apply(); } });
    apply();
    main.querySelector("#bz-print").addEventListener("click", printBristol);
    main.querySelector("#bz-memo").addEventListener("click", () => (window.Fiches && window.Fiches.memoOpen) ? window.Fiches.memoOpen(true) : window.print());
    loadMemo(slug, c.titre);
    fitAll();
    if (document.fonts) document.fonts.ready.then(fitAll);
  }

  /* Mémo détaillé du cours (memos/<slug>.js) : imprimé par défaut en A4, ouvrable à l'écran */
  function loadMemo(slug, titre) {
    if (!window.Fiches) return;
    window.Fiches.memoTitre = titre;
    const s = document.createElement("script");
    s.src = `memos/${slug}.js${V ? "?v=" + V : ""}`;
    document.head.appendChild(s);
  }

  /* Fiches bristol : A5 paysage, sans le mémo, le temps d'une impression */
  function printBristol() {
    const st = document.createElement("style");
    st.textContent = "@page{size:A5 landscape;margin:0}";
    document.head.appendChild(st);
    const had = document.body.classList.contains("has-memo");
    document.body.classList.remove("has-memo");
    let restored = false;
    const done = () => {
      if (restored) return;
      restored = true;
      st.parentNode && st.parentNode.removeChild(st);
      if (had) document.body.classList.add("has-memo");
    };
    window.addEventListener("afterprint", done, { once: true });
    window.print();
    setTimeout(done, 2000);
  }

  function route() {
    const slug = decodeURIComponent(location.hash.slice(1));
    window.scrollTo(0, 0);
    if (!slug || !ready.has(slug) || !find(slug)) return location.replace("index.html#fiches");
    if (data[slug]) return show(slug);
    main.innerHTML = `<p class="count-line">Chargement des fiches…</p>`;
    const s = document.createElement("script");
    s.src = `fiches/${slug}.js${V ? "?v=" + V : ""}`;
    s.onload = () => data[slug] ? show(slug) : catalog();
    s.onerror = catalog;
    document.head.appendChild(s);
  }
  window.addEventListener("hashchange", route);
  route();
})();
