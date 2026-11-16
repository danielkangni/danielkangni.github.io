# Portfolio · KANGNI Jean-Daniel

Site statique en HTML, CSS et JavaScript pur. Aucune dépendance, aucune étape de build.
Français par défaut, version anglaise via le bouton EN. Mode clair et sombre.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Structure

```
index.html             contenu (français)
assets/css/style.css   styles et thèmes clair / sombre
assets/js/i18n.js      traductions anglaises
assets/js/main.js      thème, langue, menu mobile, animations
assets/img/projects/   captures des projets
```

Pour modifier un texte : changer le français dans `index.html` et la clé correspondante dans `assets/js/i18n.js`.

## Éléments à compléter

Chaque élément est marqué `[ À COMPLÉTER ]` sur le site et par un commentaire `PLACEHOLDER` dans `index.html`.

- Photo de profil (section À propos)
- Photo ou vidéo de la main robotique Hand Bot
- Lien démo du site Sky Bénin BTP, s'il est en ligne
- Adresse email
- Profil LinkedIn
- CV en PDF (à déposer dans `assets/cv.pdf`)

## Déploiement

GitHub Pages depuis la branche `main` du dépôt `danielkangni.github.io`. Le fichier `.nojekyll` désactive Jekyll.
