# Ma Garderie — Partie 1 (application + Docker + Jenkins)

Application web pour une garderie d'enfants.

- **Frontend** : Next.js 14 (`Navbar`, `Hero`, `Services`), responsive. Les appels `/api/*` sont relayés vers le backend (voir `frontend/next.config.js`).
- **Backend** : Node.js / Express — `GET /api/garderie`, `GET /api/services`, `GET /api/activites`.
- **Test** : `frontend/__tests__/home.test.js` vérifie l'affichage du titre « Ma Garderie ».
- **Docker** : un `Dockerfile` par service + `docker-compose.yml` (réseau `garderie-net`).
- **CI/CD** : `Jenkinsfile` (Checkout, Install, Test, Build/Push Frontend et Backend).

## Lancer en local avec Docker Compose

```bash
docker compose up --build
# Application : http://localhost:3000
# API         : http://localhost:5000/api/garderie
```

## Lancer sans Docker

```bash
cd backend  && npm install && npm start                          # http://localhost:5000
cd frontend && npm install && BACKEND_URL=http://localhost:5000 npm run dev   # http://localhost:3000
cd frontend && npm test
```

## Pipeline Jenkins

1. Credentials : *Username with password*, ID `dockerhub` (utilisateur + jeton Docker Hub).
2. Dans `Jenkinsfile`, remplacer `votre_utilisateur_dockerhub` par votre identifiant Docker Hub.
3. Job *Pipeline* → *Pipeline script from SCM* → Git → URL du dépôt → branche `main` → `Jenkinsfile`.
4. Jenkins doit disposer de Node.js 20 et de Docker (l'utilisateur `jenkins` dans le groupe `docker`).
