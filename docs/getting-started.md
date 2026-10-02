# Démarrage

Ce guide t'accompagne de l'installation jusqu'au premier lancement de l'application.

## Prérequis

| Outil | Version | Lien |
|-------|---------|------|
| Git | récente | [git-scm.com](https://git-scm.com) |
| Node.js | LTS récente | [nodejs.org](https://nodejs.org/fr) |
| npm | installé avec Node.js | [docs.npmjs.com](https://docs.npmjs.com) |

Un éditeur de code est aussi conseillé : [VS Code](https://code.visualstudio.com/)
ou [IntelliJ IDEA](https://www.jetbrains.com/idea/), avec le support d'ESLint activé.

Pour vérifier l'installation :

```bash
git --version
node --version
npm --version
```

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/MaxVast/github-e4.git

# Accéder au dossier du projet
cd github-e4

# Se placer sur la branche d'intégration
git checkout votre_branch

# Installer les dépendances
npm install
```

## Lancer l'application

```bash
npm run dev
```

Vite affiche dans le terminal l'adresse locale de l'application
(par défaut http://localhost:5173). Le rechargement est automatique :
chaque modification du code met la page à jour.

Pour arrêter le serveur, utilise `Ctrl+C` dans le terminal.

## Vérifier que tout fonctionne

```bash
npm run lint     # analyse statique du code
npm test         # tests
npm run build    # build de production
```

Si ces trois commandes passent sans erreur, ton environnement est prêt.

## Ouvrir le projet dans IntelliJ IDEA

1. **File → Open**, puis sélectionne le dossier `github-e4`.
2. Si IntelliJ propose d'exécuter `npm install`, accepte.
3. Pour lancer le serveur de développement : ouvre `package.json`, puis clique sur
   l'icône ▶ à côté du script `dev`.
4. Active ESLint dans **Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**
   (choisis *Automatic ESLint configuration*).

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run lint` | Analyse le code avec ESLint |
| `npm test` | Exécute les tests une fois |
| `npm run test:watch` | Exécute les tests en continu |

## Problèmes courants

| Symptôme | Piste |
|----------|-------|
| `npm install` échoue | Vérifier la version de Node.js, supprimer `node_modules`, puis relancer la commande |
| Le port 5173 est déjà utilisé | Vite choisit le port suivant, ou arrête le processus qui l'occupe |
| La page est blanche | Ouvrir la console du navigateur (`F12`) pour lire l'erreur |

## Étapes suivantes

- [Architecture](./architecture.md) : comprendre l'organisation du code
- [Configuration](./configuration.md) : variables d'environnement et outils
- [Contribuer](./contributing.md) : proposer ta première modification