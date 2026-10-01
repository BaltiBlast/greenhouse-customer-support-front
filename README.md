# Greenhouse Customer Support Front

Application frontend React et Vite de Greenhouse Customer Support.

## Installation

```bash
npm install
```

Copier `.env.example` vers `.env`, puis renseigner `VITE_API_URL` avec l'origine publique de l'API, sans le suffixe `/api`.

## Commandes

```bash
npm run dev
npm run build
npm run preview
```

## Déploiement

Le fichier `render.yaml` décrit le site statique Render. La règle de réécriture vers `index.html` permet à React Router de gérer les accès directs aux routes.
