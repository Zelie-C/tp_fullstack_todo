# Notre Dernière app fullstack

## Objectifs

- Utiliser le pages router de NextJS en conditions réelles
- Utiliser l'authentification avec Github et la relier à une table Utilisateurs

## Le sujet

On va repartir sur une application de gestion de tâches ...
La fameuse todo list ! Promis c'est la dernière fois !

### Les fonctionnalités

- Utiliser la page de connexion de Github pour s'authentifier
- Créer une base de données avec les utilisateurs qui se sont connectés (name est unique et venant de Github)
- Créer une table pour LES todo listes d'un utilisateur (one to Many)
- Ne rien stocker en localstorage !
- Créer une page pour afficher les todo listes d'un utilisateur
- Créer une page pour créer une todo list
- Créer une page pour modifier une todo list
- Créer une nouvelle table "SimonGame" pour stocker les scores des utilisateurs
    - model : { score: number, user: User, date: Date }
    - Créer une page pour jouer au jeu de Simon
    - Créer une page pour afficher les meilleurs scores du joueur et du site complet
- Créer le jeu du Simon !