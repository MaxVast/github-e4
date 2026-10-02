# Exercices pratiques

Le projet est volontairement petit. Les étudiants doivent utiliser le workflow du cours, pas simplement modifier `main`.

## Exercice 1 — Première fonctionnalité

Créer une Issue :

> Ajouter un compteur indiquant le nombre total de tâches.

Branche :

```text
feature/compteur-taches
```

Commit attendu :

```text
feat: ajoute le compteur de tâches
```

---

## Exercice 2 — Filtrage

Créer une Issue :

> Ajouter les filtres Toutes / À faire / Terminées.

Le code contient déjà une première implémentation : elle peut servir de base à une revue ou être reconstruite sur une branche d'exercice.

---

## Exercice 3 — Priorité

Créer une fonctionnalité :

> Une tâche peut avoir une priorité faible, moyenne ou haute.

Découpage possible :

1. Modifier le modèle de tâche.
2. Ajouter le champ dans le formulaire.
3. Afficher la priorité.
4. Ajouter un test.
5. Mettre à jour le README.

---

## Exercice 4 — Conflit

Sur `main`, créer un fichier `conflit.md`.

Deux étudiants créent chacun une branche et modifient volontairement la même ligne.

Exemple :

```text
Titre du projet : Team Tasks
```

Branche A :

```text
Titre du projet : Team Tasks Pro
```

Branche B :

```text
Titre du projet : Team Tasks Campus
```

Faire fusionner A puis mettre B à jour avec :

```bash
git fetch origin
git merge origin/main
```

Résoudre le conflit ensemble.

---

## Exercice 5 — Pull Request

Chaque étudiant doit :

1. ouvrir une PR ;
2. ajouter `Closes #n` ;
3. expliquer quoi / pourquoi / comment tester ;
4. demander un reviewer ;
5. laisser au moins deux commentaires sur une PR d'un autre étudiant ;
6. proposer une suggestion ;
7. approuver ou demander des changements ;
8. merger avec Squash and merge.

---

## Exercice 6 — Casser la CI

Sur une branche :

1. casser volontairement un test ;
2. pousser ;
3. ouvrir une PR ;
4. observer l'échec de GitHub Actions ;
5. lire le log ;
6. corriger ;
7. repousser ;
8. constater le retour au vert.

---

## Exercice 7 — Protection de main

Configurer un ruleset :

- Pull Request obligatoire ;
- 1 approbation minimum ;
- conversations résolues ;
- CI obligatoire ;
- force push interdit.

Tester ensuite :

```bash
git switch main
git pull
git commit --allow-empty -m "test: tente un push direct"
git push
```

Le push doit être refusé.

---

## Exercice 8 — Release

Créer :

```text
v1.0.0
```

La présentation finale doit montrer :

- le dépôt ;
- les Issues ;
- le board ;
- une PR ;
- une revue ;
- la CI ;
- le ruleset ;
- la release.
