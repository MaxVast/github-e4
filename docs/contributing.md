# Contribuer

Les règles officielles sont dans [CONTRIBUTING.md](../CONTRIBUTING.md) à la racine du dépôt.
Cette page les détaille pour t'aider à faire ta première contribution.

> La modification du projet est réservée aux élèves de 4ème année d'ENIGMA School,
> année scolaire 2026-2027 (voir [LICENSE](../LICENSE)).

## Première contribution pas à pas

### 1. Choisir une issue

Choisis une [issue](https://github.com/MaxVast/github-e4/issues) existante ou crées-en une.
Note son numéro (par exemple `#29`).

### 2. Créer ta branche depuis `develop`

```bash
git checkout develop
git pull
git checkout -b docs/29-mise-en-place-documentation
```

Le nom de la branche commence par un préfixe selon le type de travail :

| Préfixe | Usage | Exemple |
|---------|-------|---------|
| `feature/` | Nouvelle fonctionnalité | `feature/page-accueil` |
| `fix/` | Correction de bug | `fix/erreur-routage` |
| `docs/` | Documentation | `docs/29-mise-en-place-documentation` |

Évite les apostrophes, les espaces et les accents dans le nom : ils obligent à mettre
des guillemets à chaque commande.

### 3. Développer et vérifier

Avant chaque commit :

```bash
npm run lint
npm test
```

### 4. Commiter au format Conventional Commits

Format : `type: description courte`

| Type | Usage | Exemple |
|------|-------|---------|
| `feat` | Nouvelle fonctionnalité | `feat: ajoute la page de connexion` |
| `fix` | Correction de bug | `fix: corrige le calcul du total` |
| `docs` | Documentation | `docs: ajoute le guide de démarrage` |
| `refactor` | Réécriture sans changement de comportement | `refactor: simplifie le composant Header` |
| `test` | Ajout ou modification de tests | `test: ajoute les tests du formulaire` |
| `chore` | Maintenance (dépendances, config) | `chore: met à jour Vite` |

Documentation : [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/).

### 5. Pousser et ouvrir une Pull Request

```bash
git push -u origin docs/29-mise-en-place-documentation
```

Sur GitHub, ouvre une Pull Request vers `develop` :

- référence l'issue dans la description avec `Closes #29` ;
- ajoute @MaxVast et une autre personne dans les reviewers.

### 6. Relecture et fusion

- Une approbation doit etre faite 

## Règles à retenir

- Pas de push direct sur `develop`.
- Une PR = un sujet.
- Les commentaires de revue portent sur le code, pas sur les personnes.
- Ne jamais commiter de secrets (voir [SECURITY.md](../SECURITY.md)).

## Faire une bonne relecture

- Réponds dans un délai raisonnable.
- Explique le « pourquoi » de chaque remarque.
- Distingue ce qui est bloquant de ce qui est une simple suggestion.
- Teste la modification en local si elle touche au comportement de l'application.

## Mettre à jour la documentation

Si ta modification change une commande, une configuration ou un comportement,
mets à jour la page correspondante du dossier [`docs/`](./index.md)
dans la même Pull Request.

## En cas de problème

| Situation | Que faire |
|-----------|-----------|
| Conflit avec `develop` | `git fetch`, puis `git merge origin/develop` sur ta branche, et résous les conflits |
| Mauvais message de commit | `git commit --amend` si le commit n'est pas encore poussé |
| Secret commité par erreur | Le révoquer immédiatement et suivre [SECURITY.md](../SECURITY.md) |
| Faille de sécurité découverte | Ne pas ouvrir d'issue publique : suivre [SECURITY.md](../SECURITY.md) |