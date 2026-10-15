# Révisions nutrition : instructions pour Claude

Site statique (HTML, CSS, JS sans framework ni build) qui transforme des cours de nutrition en **fiches visuelles interactives** pour réviser. Le public : des étudiants en nutrition, sur ordinateur, iPad et iPhone.

## Structure du dépôt

```
index.html                 Accueil : cours groupés par thème (lus depuis assets/js/cours.js)
manifest.webmanifest       Installation sur l'écran d'accueil (nom, couleurs, icônes)
cours/<slug>.html          Une page par cours (structure + textes fixes)
cours/<slug>.js            Données et rendus dynamiques du cours
assets/css/fiches.css      Toute la DA : tokens, composants, responsive
assets/js/fiches.js        Commun : onglets, « Cacher les chiffres », pictogrammes, composants réutilisables
assets/js/cours.js         THEMES (groupes de l'accueil) et COURS (liste des cours)
assets/icone.svg           Icône du site (favicon) ; icone-180.png (iPhone/iPad, carré plein) ; icone-512.png
documents/en-attente/      Documents déposés par l'utilisateur, pas encore intégrés (.gitkeep pour garder le dossier)
documents/finis/           Documents déjà intégrés au site
suivi/                     Suivi d'intégration (un fichier par document + tableau général et écarts entre cours)
.claude/launch.json        Serveur local : python -m http.server 8123
```

Chaque page de cours reprend le même `<head>` (icônes, polices, `fiches.css`), le même en-tête et la même barre d'onglets que `cours/macronutriments.html`. Copier ce gabarit pour un nouveau cours.

## Passe d'intégration (quand l'utilisateur la demande)

1. Lister `documents/en-attente/`. Comparer avec `documents/finis/` (un même fichier peut être redéposé : vérifier l'empreinte, ex. `md5sum`). Lire chaque document en entier (`.docx` : extraire `word/document.xml` en UTF-8).
2. **Regarder aussi les images** du document (`word/media/`, dans l'ordre de `document.xml`) : beaucoup de tableaux clés n'existent qu'en image (grilles, repères, tableaux de rations). Ne jamais reprendre d'éléments personnels visibles sur une capture d'écran (photos, notifications, autres applications).
3. Pour chaque document :
   - créer ou compléter `cours/<slug>.html` et `cours/<slug>.js` en suivant la DA ci-dessous et les pages existantes ;
   - ajouter ou mettre à jour l'entrée dans `assets/js/cours.js` (`theme`, `statut: "disponible"`, `fiches` = noms des onglets, `page`) ;
   - créer ou mettre à jour `suivi/<slug>.md` : chaque partie du document, avec son statut et l'endroit où elle apparaît ;
   - mettre à jour le tableau de `suivi/README.md` ;
   - déplacer le document de `documents/en-attente/` vers `documents/finis/`.
4. Tester (voir « Vérifications ») puis faire un bilan à l'utilisateur : ce qui est intégré, ce qui ne l'est pas et pourquoi.
5. **Ne jamais committer** : l'utilisateur gère Git lui-même.

Un document n'est déplacé dans `finis/` que lorsque sa page existe et que son suivi est à jour. **Tout le document doit être intégré**, texte et images : chaque ligne du suivi doit finir en ✅. Si une partie est volontairement laissée de côté (rare, avec l'accord de l'utilisateur), elle reste notée dans le suivi avec la raison. Avant de clore une passe, relire le document en entier et chercher sur la page un mot-clé de chaque paragraphe.

## Contenu

- Toutes les valeurs, définitions et exemples viennent **du document source**. Ne rien inventer ; si une info manque, la noter dans le suivi plutôt que la compléter de mémoire.
- Si deux chiffres semblent se contredire, garder ceux du cours et expliquer le lien (ex. eau totale 2 à 2,5 L contre 1,5 à 2 L d'eau de boisson).
- **Entre deux cours**, chaque page garde les chiffres de **son** cours, et l'écart est ajouté au tableau « Écarts entre les cours » de `suivi/README.md`. Une note sur la page peut signaler l'écart.
- Une coquille évidente du cours (tranche manquante, date fausse) n'est pas corrigée de mémoire : la page la contourne ou la signale, et le suivi la note.
- Écriture : français simple, phrases courtes, voix active. Pas d'emoji. Pas de tirets cadratins décoratifs.

## Direction artistique (validée)

- **Thème clair uniquement.** Fond `--bg` gris très légèrement chaud, cartes blanches, encre `--fg`.
- **Typographies** (Google Fonts) : Bricolage Grotesque pour les titres et les gros chiffres, Atkinson Hyperlegible pour le texte, IBM Plex Mono pour les petites étiquettes en capitales.
- **Une couleur par famille**, utilisée partout de la même façon. Nutriments : `.glu` (glucides, féculents) `.pro` (protéines, VPO) `.lip` (lipides, matières grasses) `.eau` `.vit` `.min`. Aliments : `.fl` (fruits et légumes) `.sug` (produits sucrés) `.lai` (produits laitiers). Méthode et états : `.ink` (repères, méthode), `.good-f` / `.bad-f` (bon réflexe / vigilance). Chaque classe fournit `--c` (texte), `--s` (fond doux), `--m` (ton moyen pour barres et surlignage). Ne jamais écrire une couleur en dur dans une page : passer par les tokens de `fiches.css` (seules exceptions : les couleurs officielles du Nutri-Score, en tokens `--ns-a` à `--ns-e`, et l'icône).
- **Icône** : une assiette en quatre parts (glucides, protéines, lipides, eau) autour d'une feuille, sur le bleu encre. Chaque page la référence (`icone.svg` + `icone-180.png`).
- Surlignage façon stabilo (`linear-gradient` sur le bas du texte) pour les mots importants des phrases d'accroche (`.lead b`, `h1 em`).
- États sémantiques séparés de la couleur des nutriments : `--good` / `--bad` (excès, carences, avant/après) et `--ink` pour les notes.
- Composants disponibles dans `fiches.css` : `.card` (+ `.tint`, `.good`, `.bad`), `.big` (gros chiffre + `<small>` unité), `.note`, `.bars`, `.chip` + `.panel` (explorateur), `.seg` (choix segmenté), `.pipe` + `.stn` (étapes), `.range` (fourchettes à l'échelle), `.calc` (calculateur), `.stack` (barre empilée), `.plus` (A + B = C), `.ec` (trop / pas assez), `.flow` (progression), `.meal` (cas pratique), pictogrammes SVG via `<svg data-pic="hex1|hex2|hex3|hexN|beads|tri|drop|sat|insat|amine|chol|lipo">`.
- Composants génériques : `.tbl` (tableau de données), `.acc` (accordéon `<details>`), `.hbars` (barres horizontales), `.stack3` (répartition en %), `.stepper` (compteur de portions), `.form` + `.inp` + `.result` (calculateurs), `.pills`, `.pyr` (pyramide : `<button>` cliquables ou `<span>` fixes dans des `.pyr-row` de largeur `--w`), `.chain` (étapes en ligne), `.nutri` (Nutri-Score), `.hot` + `.zone` (étiquette interactive), `.reveal-card` (question / réponse), `.plate` (assiette SVG).
- Aides JS dans `window.Fiches` : `seg(el, options, valeur, onChange)` (choix segmenté, renvoie une fonction pour changer la valeur), `explorer(puces, panneau, groupes)` (puces + fiche de détail), `hbars(el, lignes, {max, unit})` (barres à l'échelle, fourchettes `[min, max]` acceptées), `fmt(nombre, décimales)`, `pic(svg, nom)`. Les boutons `[data-reveal]` dans une `.reveal-card` sont gérés automatiquement.
- Une page de cours = en-tête (lien « ← Tous les cours », titre avec une syllabe surlignée, légende des familles) + barre d'onglets collante + une `<section data-name="…">` par onglet. Les onglets, le lien direct par `#id` et les boutons précédent/suivant sont générés par `fiches.js`.
- Les graphiques sont **à l'échelle** : une barre de 9 kcal est 2,25 fois plus longue qu'une de 4.

## Règles d'interactivité

- **Rien n'est enregistré** : pas de `localStorage`, pas de compte, pas de score conservé. Chaque visite repart de zéro.
- **Les éléments liés doivent rester liés.** Un seul état par outil (ex. `state` du calculateur de besoins) et une fonction `update()` qui redessine tout ce qui en dépend. Exemple : poids, profil et AET pilotent les résultats, la ligne sélectionnée de l'échelle des protéines et l'assiette « À quoi ressemblent N g de protéines ». Cliquer une ligne de l'échelle change le profil. Toute nouvelle donnée affichée qui dépend d'un réglage doit être calculée, jamais écrite en dur.
- **« Cacher les chiffres »** doit couvrir tous les chiffres de la page. `fiches.js` entoure automatiquement chaque nombre (avec fourchette et unité) d'un `span.num.hideable`, y compris le contenu rendu plus tard (MutationObserver). Pour un graphique, mettre `.hideable` sur la partie qui trahit la valeur (piste d'une barre, barre empilée, jauge), pas sur les libellés. Mettre `data-nohide` sur ce qui n'est pas une connaissance à réviser : numéros d'étape, axes, valeurs réglées par l'utilisateur, données d'un cas pratique, quantités d'une portion (« 2 œufs »).

## Responsive

Trois cibles à vérifier à chaque changement : **ordinateur** (1440 px, conteneur 1080 px puis 1200 px dès 1440 px), **iPad** (820 × 1180 et 1180 × 820) et **iPhone** (390 × 844). Points de rupture dans `fiches.css` : 1024 px (étapes en liste, calculateur sur une colonne), 860 px, 760 px, 600 px (téléphone). Aucune page ne doit défiler horizontalement ; les onglets défilent dans leur propre barre. Cibles tactiles d'au moins 36 à 44 px.

## Vérifications avant de rendre la main

1. Lancer le serveur (`.claude/launch.json`, port 8123) et ouvrir l'accueil puis chaque page.
2. À 1440, 820 et 390 px : chaque onglet, `document.documentElement.scrollWidth <= innerWidth`. Méthode rapide : depuis l'accueil, charger chaque `COURS[i].page` dans une `<iframe>` hors écran de la largeur voulue, afficher chaque `<section>` tour à tour et mesurer, en relevant aussi les erreurs JS et les nombres restés visibles hors `.num` et hors `[data-nohide]`.
3. Activer « Cacher les chiffres » : aucun chiffre de connaissance visible, un clic révèle.
4. Faire varier chaque réglage et vérifier que tout ce qui en dépend change.
5. Console sans erreur.
