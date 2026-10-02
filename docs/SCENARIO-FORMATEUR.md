# Scénario formateur

## Objectif

Faire comprendre que GitHub est un outil collaboratif et que les pratiques d'équipe donnent sa valeur à l'outil.

Le projet Team Tasks est volontairement simple afin que le temps soit consacré au workflow.

## Découpage conseillé

### Étape 1 — 15 min

Chaque équipe :

- fork/clone le projet ;
- crée son dépôt ;
- ajoute les membres ;
- vérifie `npm install`, `npm test`, `npm run lint`, `npm run build`.

### Étape 2 — 20 min

Créer au moins 8 Issues à partir des idées du fichier `EXERCICES.md`.

### Étape 3 — 30 min

Chaque étudiant réalise une petite fonctionnalité sur sa propre branche.

### Étape 4 — 30 min

PR + revue de code + suggestion + correction + Squash.

### Étape 5 — 20 min

Créer volontairement un conflit.

### Étape 6 — 30 min

Mettre en place la CI et faire échouer puis réussir la pipeline.

### Étape 7 — 20 min

Configurer le ruleset de `main`.

### Étape 8 — 15 min

Créer une release `v1.0.0`.

## Vérification finale

L'équipe doit pouvoir démontrer :

```text
Issue
→ Branch
→ Conventional Commit
→ PR
→ Review
→ CI
→ Merge
→ Issue fermée
→ Release
```

Ce parcours reprend le workflow central du cours : Issue → Branche → Commits → Pull request → Revue → Merge → Issue fermée.
