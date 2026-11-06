# Restaurante Carmesí – Benalmádena Pueblo

Site vitrine officiel du **Restaurante Carmesí** (Benalmádena Pueblo, Málaga), dirigé par le Chef Ton Overbeek & Inge.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Les fichiers statiques générés se trouvent dans le dossier `dist/`.

## Déploiement sur GitHub Pages

Ce dépôt est préconfiguré pour **GitHub Pages** (`base: './'` dans `vite.config.ts` et chemins d'assets relatifs) :

1. Poussez ce projet sur votre dépôt GitHub (branche `main`).
2. Allez dans **Settings → Pages** de votre dépôt GitHub.
3. Dans **Build and deployment → Source**, sélectionnez **GitHub Actions**.
4. Le workflow `.github/workflows/deploy.yml` déploiera automatiquement le site à chaque `push` sur `main`.
