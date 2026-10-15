# Révisions nutrition : instructions pour Claude

Site statique (HTML, CSS, JS sans framework ni build) qui transforme des cours de nutrition en **fiches visuelles interactives** pour réviser. Le public : des étudiants en nutrition, sur ordinateur, iPad et iPhone.

## Structure du dépôt

```
index.html                 Accueil : liste des cours (lue depuis assets/js/cours.js)
cours/<slug>.html          Une page par cours (structure + textes fixes)
cours/<slug>.js            Données et rendus dynamiques du cours
assets/css/fiches.css      Toute la DA : tokens, composants, responsive
assets/js/fiches.js        Commun : onglets, « Cacher les chiffres », pictogrammes
assets/js/cours.js         Liste des cours affichés sur l'accueil
documents/en-attente/      Documents déposés par l'utilisateur, pas encore intégrés
documents/finis/           Documents déjà intégrés au site
suivi/                     Suivi d'intégration (un fichier par document + tableau général)
.claude/launch.json        Serveur local : python -m http.server 8123
```

## Passe d'intégration (quand l'utilisateur la demande)

1. Lister `documents/en-attente/`. Lire chaque document en entier (`.docx` : extraire `word/document.xml` en UTF-8).
2. Pour chaque document :
   - créer ou compléter `cours/<slug>.html` et `cours/<slug>.js` en suivant la DA ci-dessous et le modèle `cours/macronutriments.*` ;
   - ajouter ou mettre à jour l'entrée dans `assets/js/cours.js` (`statut: "disponible"`, `fiches`, `page`) ;
   - créer ou mettre à jour `suivi/<slug>.md` : chaque partie du document, avec son statut et l'endroit où elle apparaît ;
   - mettre à jour le tableau de `suivi/README.md` ;
   - déplacer le document de `documents/en-attente/` vers `documents/finis/`.
3. Tester (voir « Vérifications ») puis faire un bilan à l'utilisateur : ce qui est intégré, ce qui ne l'est pas et pourquoi.
4. **Ne jamais committer** : l'utilisateur gère Git lui-même.

Un document n'est déplacé dans `finis/` que lorsque sa page existe et que son suivi est à jour. Si une partie est volontairement laissée de côté, elle reste notée dans le suivi avec la raison.

## Contenu

- Toutes les valeurs, définitions et exemples viennent **du document source**. Ne rien inventer ; si une info manque, la noter dans le suivi plutôt que la compléter de mémoire.
- Si deux chiffres du cours semblent se contredire, garder ceux du cours et expliquer le lien (ex. eau totale 2 à 2,5 L contre 1,5 à 2 L d'eau de boisson).
- Écriture : français simple, phrases courtes, voix active. Pas d'emoji. Pas de tirets cadratins décoratifs.

## Direction artistique (validée)

- **Thème clair uniquement.** Fond `--bg` gris très légèrement chaud, cartes blanches, encre `--fg`.
- **Typographies** (Google Fonts) : Bricolage Grotesque pour les titres et les gros chiffres, Atkinson Hyperlegible pour le texte, IBM Plex Mono pour les petites étiquettes en capitales.
- **Une couleur par famille de nutriments**, utilisée partout de la même façon : classes `.glu` `.pro` `.lip` `.eau` (et `.vit` `.min` prévues pour les micronutriments). Chaque classe fournit `--c` (texte), `--s` (fond doux), `--m` (ton moyen pour barres et surlignage). Ne jamais écrire une couleur en dur dans une page : passer par les tokens de `fiches.css`.
- Surlignage façon stabilo (`linear-gradient` sur le bas du texte) pour les mots importants des phrases d'accroche (`.lead b`, `h1 em`).
- États sémantiques séparés de la couleur des nutriments : `--good` / `--bad` (excès, carences, avant/après) et `--ink` pour les notes.
- Composants disponibles dans `fiches.css` : `.card` (+ `.tint`, `.good`, `.bad`), `.big` (gros chiffre + `<small>` unité), `.note`, `.bars`, `.chip` + `.panel` (explorateur), `.seg` (choix segmenté), `.pipe` + `.stn` (étapes), `.range` (fourchettes à l'échelle), `.calc` (calculateur), `.stack` (barre empilée), `.plus` (A + B = C), `.ec` (trop / pas assez), `.flow` (progression), `.meal` (cas pratique), pictogrammes SVG via `<svg data-pic="hex1|hex2|hex3|hexN|beads|tri|drop|sat|insat|amine|chol|lipo">`.
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
2. À 1440, 820 et 390 px : chaque onglet, `document.documentElement.scrollWidth <= innerWidth`.
3. Activer « Cacher les chiffres » : aucun chiffre de connaissance visible, un clic révèle.
4. Faire varier chaque réglage et vérifier que tout ce qui en dépend change.
5. Console sans erreur.
