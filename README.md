# cineman

# Bibliothèque de Films NodeJS

Ce projet est une application back-end développée avec NodeJS, Hapi, Schmervice, Swagger, et JWT pour l'authentification. Elle permet de gérer une bibliothèque de films, incluant l'envoi de mails de bienvenue, la gestion des films favoris par les utilisateurs, et les notifications par mail lors de l'ajout ou de la modification de films. Les administrateurs peuvent également exporter la liste des films sous forme de CSV via RabbitMQ.

## Prérequis

Pour exécuter ce projet, vous aurez besoin de :
- Node.js 20.x
- npm
- RabbitMQ installé et en cours d'exécution pour la gestion des messages
- Un serveur SMTP ([Etheral Mail](https://ethereal.email/) ici)
- Docker (pour faire fonctionner la base de données)
## Configuration

1. **Cloner le projet :** Clonez ce dépôt sur votre machine locale.
    ```
    git clone https://github.com/nelpats/cineman
    ```
2. **Installer les dépendances :** Dans le répertoire du projet, exécutez :
    ```
    npm install
    ```
3. **Configurer les variables d'environnement :** Dupliquez le fichier `.env.example` en un fichier `.env` et ajustez les variables d'environnement pour correspondre à votre configuration (serveur SMTP, clé secrète JWT, etc.).

## Lancement du projet

Pour lancer le serveur, exécutez : ``npm start``

Le serveur démarrera et sera accessible sur `http://localhost:3000`.

## Fonctionnalités

- **Authentification JWT :** Sécurisation des endpoints avec JWT.
- **Gestion des films :** Ajout, modification, suppression de films (réservé aux admins).
- **Films favoris :** Les utilisateurs peuvent gérer leur liste de films favoris.
- **Notifications par mail :** Envoi de mails lors de la création de compte, ajout/modification de films, et export CSV.
- **Export CSV via RabbitMQ :** Les admins peuvent demander un export CSV de tous les films, traité de manière asynchrone.

## Documentation API

La documentation de l'API est disponible via Swagger à l'adresse `http://localhost:3000/documentation`.

