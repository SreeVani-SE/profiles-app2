# Profiles App (Lab 1)

## Dev Container
1. A simple Profiles App built with Vite + React inside a dev container.
Styled using React-Bootstrap and deployed automatically to GitHub Pages with GitHub Actions.

2. Link to commit that introduced React-Bootstrap and “Hello React”
https://github.com/SreeVani-SE/profiles-app2/commit/39cdb96be71dc86a5f0bb70aee24c6d5eff2b86e

3. HelloReact.png

## Getting Started
\ ```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
\ ```

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

**Live URL:** https://sreevani-se.github.io/profiles-app2/

## Notes
- Uses React + React-Bootstrap.
- We use components, props, and `.map()`.