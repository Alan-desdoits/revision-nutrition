---
name: integrer-documents
description: Passe d'intégration des cours de nutrition déposés dans documents/en-attente/ (docx, pdf, html) en fiches visuelles interactives sur le site, puis déplacement dans documents/finis/. À utiliser dès que l'utilisateur dit que des fichiers, documents ou cours ont été ajoutés, déposés ou mis en attente, ou demande de les intégrer, traiter ou migrer.
---

# Intégrer les documents en attente

Les règles du site (contenu, DA, interactivité, responsive, vérifications) sont dans `CLAUDE.md` à la racine : les relire avant de commencer, elles priment. Ce skill donne l'ordre des étapes et les outils.

Tenir la liste des tâches de l'app à jour (une étape par phase ci-dessous). Ne jamais committer.

## 1. Inventaire

```bash
ls -A documents/en-attente documents/finis
md5sum documents/en-attente/* documents/finis/*
```

- Un fichier déjà présent dans `finis/` avec la même empreinte : rien à faire, le signaler.
- Même nom mais empreinte différente : nouvelle version. Comparer avec l'ancienne et compléter la page existante.
- Chercher si un cours existant couvre déjà le sujet (`assets/js/cours.js`) : compléter plutôt que dupliquer.

## 2. Lire tout le document, images comprises

Pour un `.docx`, extraire le texte (styles, listes, tableaux) et les images dans l'ordre du document :

```bash
python -I -X utf8 .claude/skills/integrer-documents/scripts/extraire_docx.py "documents/en-attente/<fichier>.docx" "<scratchpad>/<slug>"
```

Le script écrit `<scratchpad>/<slug>/texte.txt` (avec des repères `[IMG image3.png]` et `[TABLE]`) et copie les images dans `<scratchpad>/<slug>/media/`. Lire le texte en entier, puis **ouvrir chaque image** avec Read : beaucoup de tableaux, schémas et repères n'existent qu'en image. Ne jamais reprendre d'éléments personnels visibles sur une capture.

Pour un `.pdf`, utiliser le skill pdf ; pour un `.html`, le lire directement.

Pendant la lecture, noter au fur et à mesure :
- les parties du document (elles deviendront les lignes du suivi) ;
- les coquilles, unités manquantes, chiffres incohérents (ne pas les corriger de mémoire) ;
- les chiffres qui touchent un autre cours (repères PNNS, portions, besoins, IG…) : les chercher avec Grep dans `cours/` pour remplir les « Écarts entre les cours ».

## 3. Concevoir la page

- Partir du gabarit d'une page existante du même thème (ex. `cours/produits-sucres.html` pour un groupe d'aliments) : même `<head>`, en-tête, légende, barre d'onglets.
- Découper en onglets (6 à 8 en général) qui suivent le plan du document ; un cas pratique a son propre onglet.
- Chaque image du cours devient un composant : schéma SVG redessiné avec les tokens, barre à l'échelle, tableau `.tbl`, explorateur, étapes `.pipe` (`.pipe.p4` pour 4 étapes), etc. Pas d'image copiée.
- Chercher les occasions d'**interactivité liée** (un seul état par outil, une fonction qui redessine tout) : curseur qui calcule (formule du cours), schéma cliquable relié à un choix segmenté, comparateur relié à un détail, semaine à composer comparée aux repères. Les valeurs affichées qui dépendent d'un réglage sont calculées, jamais écrites en dur. Un schéma sans chiffres du cours reste qualitatif et le dit.
- Couleurs : uniquement les classes de famille et les tokens. Acides gras : saturés `bad-f`, mono `lip`, poly `glu` (comme Matières grasses).
- Fractions et ordinaux collés (⅓, ½, 5ᵉ) ne sont pas masqués automatiquement : les entourer de `<span class="num hideable">`.
- Dans les SVG, les nombres ne sont pas masqués : les mettre dans le HTML, ou mettre `.hideable` sur le SVG.

## 4. Brancher et suivre

- `assets/js/cours.js` : entrée avec `theme`, `familles`, `fiches` (noms exacts des onglets), `statut: "disponible"`, `page`.
- `suivi/<slug>.md` : une ligne par partie du document (texte et chaque image), statut ✅ et onglet ; puis une section « Points signalés dans le document » (coquilles contournées, valeurs douteuses).
- `suivi/README.md` : ligne dans le tableau général (date du jour) et nouveaux écarts dans « Écarts entre les cours ».

## 5. Vérifier

1. `preview_start` avec le serveur `site` (port 8123).
2. Depuis `http://localhost:8123/index.html`, exécuter le contenu de `scripts/verif_pages.js` avec l'outil JavaScript du navigateur : il charge chaque page à 1440, 820 et 390 px, affiche chaque onglet, relève les débordements horizontaux, les erreurs JS, et (à 1440) les chiffres restés visibles hors `.num` et `[data-nohide]`. Les noms comme B12, oméga-3, E300 sont normaux ; le reste est à corriger.
3. Exécuter `scripts/verif_interactions.js` sur les nouvelles pages : clique chaque bouton, pousse chaque curseur aux extrêmes, clique les schémas, puis remesure. Lire aussi la console (`read_console_messages`) après un rechargement, en se méfiant des anciennes erreurs.
4. Regarder chaque outil interactif en capture d'écran au moins une fois.
5. Contrôle de couverture : chaque paragraphe a un mot-clé sur la page.

   ```bash
   python -I -X utf8 .claude/skills/integrer-documents/scripts/verif_mots_cles.py "<scratchpad>/<slug>/texte.txt" cours/<slug>.html cours/<slug>.js
   ```

   Relire chaque « MISS » : un titre ou une paraphrase est acceptable, un contenu absent ne l'est pas.

## 6. Clore

- Déplacer le document de `documents/en-attente/` vers `documents/finis/` seulement quand la page existe et que le suivi est entièrement en ✅ (garder `.gitkeep`).
- Bilan à l'utilisateur : pages créées ou complétées et leurs onglets, outils interactifs, points signalés dans le document, écarts avec les autres cours, ce qui n'a pas été intégré et pourquoi. Rappeler que rien n'est committé.
