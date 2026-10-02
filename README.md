# Team Tasks

Mini-application React/JavaScript utilisée comme **fil rouge pour un atelier GitHub en équipe**.

L'objectif n'est pas de construire une application complexe : l'objectif est de disposer d'un projet suffisamment concret pour pratiquer :

- les branches ;
- les Conventional Commits ;
- les Issues ;
- les Pull Requests ;
- la revue de code ;
- les conflits Git ;
- GitHub Projects ;
- GitHub Actions ;
- la protection de `main` ;
- CODEOWNERS ;
- Dependabot ;
- les releases.

## Fonctionnalités actuelles

- Ajouter une tâche ;
- Marquer une tâche comme terminée ;
- Supprimer une tâche ;
- Filtrer les tâches : toutes / à faire / terminées ;
- Persistance dans `localStorage` ;
- Compteur de tâches ;
- Tests unitaires ;
- Lint ;
- Build de production.

## Installation

Pré-requis : Node.js 20+.

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée par Vite.

## Commandes

```bash
npm run dev
npm run lint
npm test
npm run build
```

## Workflow d'équipe

```text
Issue
  ↓
Branche
  ↓
Commits
  ↓
Pull Request
  ↓
Revue
  ↓
CI verte
  ↓
Merge
  ↓
Issue fermée
```

Exemple :

```bash
git switch main
git pull
git switch -c feature/filtre-taches
```

Puis :

```bash
git add .
git commit -m "feat: ajoute le filtre des tâches"
git push -u origin feature/filtre-taches
```

Dans la Pull Request :

```text
Closes #12
```

## Règles

- Pas de push direct sur `main`.
- Une PR = un sujet.
- Une PR doit référencer une Issue.
- Au moins une approbation avant merge.
- La CI doit être verte.
- Utiliser Conventional Commits.
- Privilégier les petites PR.

## Idées de fonctionnalités

Voir les Issues proposées dans le dépôt. Les étudiants peuvent également créer leurs propres Issues.
