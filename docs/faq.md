# FAQ

Réponses aux questions fréquentes sur github-e4.

## Pour les utilisateurs

### L'application est-elle libre d'utilisation ?
Oui, l'utilisation est publique. En revanche, la modification du projet est réservée
aux élèves de 4ème année d'ENIGMA School, année scolaire 2026-2027.
Voir le fichier [LICENSE](../LICENSE).

### Comment signaler un bug ?
Ouvre une [issue](https://github.com/MaxVast/github-e4/issues) en précisant :

- les étapes pour reproduire le problème ;
- le comportement attendu et le comportement observé ;
- le navigateur utilisé.

### Comment proposer une idée ?
Ouvre une issue qui décrit le besoin. Elle sera ensuite traité

### Une page affiche une erreur 404 quand je la rafraîchis. Pourquoi ?
L'application est une application monopage. Le serveur doit renvoyer `index.html` pour
toutes les adresses inconnues. Voir la page [Déploiement](./deployment.md).

## Pour les développeurs

### Comment installer et lancer le projet ?
Voir le guide [Démarrage](./getting-started.md).

### Quelle est la branche par défaut ?
`develop`. C'est depuis cette branche que tu crées ta branche de travail.

### Comment nommer ma branche ?
Avec un préfixe : `feature/...`, `fix/...` ou `docs/...`. Évite les apostrophes, les espaces
et les accents. Voir [Contribuer](./contributing.md).

### Quel format pour les messages de commit ?
[Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/), par exemple
`feat: ajoute la page de connexion` ou `docs: complète la FAQ`.

### Puis-je pousser directement sur `develop` ?
Non. Passe toujours par une Pull Request.

### Ma Pull Request ne peut pas être fusionnée, que faire ?
Vérifie les points suivants :

- la CI est verte (teste en local avec `npm run lint` et `npm test`) ;
- au moins une approbation a été obtenue ;
- la PR référence l'issue avec `Closes #n` ;
- il n'y a pas de conflit avec `develop`.

### Comment résoudre un conflit avec `develop` ?
```bash
git fetch
git merge origin/develop
```
Résous ensuite les conflits dans l'éditeur, puis commite et pousse.

### Où mettre une variable d'environnement ?
Dans un fichier `.env.local`, qui ne doit jamais être commité, avec le préfixe `VITE_`.
Voir [Configuration](./configuration.md).

### J'ai commité un secret par erreur. Que faire ?
Révoque-le immédiatement, puis préviens l'équipe et suis [SECURITY.md](../SECURITY.md).
Le supprimer du dernier commit ne suffit pas, car il reste dans l'historique Git.

### Je suis élève d'une autre promotion, puis-je contribuer ?
Non, la modification du projet est réservée aux élèves de 4ème année d'ENIGMA School,
promotion 2026-2027. Tu peux en revanche consulter le code et utiliser l'application.

## Autres questions

Si ta question n'est pas listée, ouvre une [issue](https://github.com/MaxVast/github-e4/issues).
Pense ensuite à compléter cette FAQ si la réponse peut servir à d'autres.