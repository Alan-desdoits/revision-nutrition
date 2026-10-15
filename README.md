# Révisions nutrition

Des fiches visuelles et interactives pour réviser les cours de nutrition, sur ordinateur, iPad et iPhone.

## Ouvrir le site

Le site est fait de pages statiques. Pour le voir en local :

```bash
python -m http.server 8123
```

Puis ouvrir http://localhost:8123.

## Ajouter un cours

1. Déposer le document du cours dans `documents/en-attente/`.
2. Demander à Claude une **passe d'intégration**.
3. Claude crée la page, met à jour l'accueil et le suivi, puis range le document dans `documents/finis/`.

Le détail de ce qui est intégré pour chaque document se trouve dans [suivi/README.md](suivi/README.md). Les règles de mise en page et de contenu sont dans [CLAUDE.md](CLAUDE.md).
