# Portfolio · KANGNI Jean-Daniel

Site statique en HTML, CSS et JavaScript pur, sans dépendance ni étape de build.
Français par défaut, anglais via le bouton EN. Thèmes clair et sombre.

En ligne : https://danielkangni.github.io

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Structure

```
index.html               contenu (français)
assets/css/style.css     direction visuelle, thèmes, grille de projets
assets/js/main.js        bras robotique (cinématique inverse), tracé A*, menu, thème, langue
assets/js/i18n.js        traductions anglaises
assets/img/              photo et captures des projets
assets/cv/               CV public en PDF (sans numéro de téléphone)
```

Pour modifier un texte : changer le français dans `index.html` et la clé correspondante dans `assets/js/i18n.js`.

## Contenu facultatif à ajouter

- Une photo ou une vidéo de la main robotique Hand Bot (la carte affiche pour l'instant le schéma de la chaîne de traitement).
- Le lien démo du site Sky Bénin BTP, s'il est en ligne.
