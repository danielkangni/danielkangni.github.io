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

## Accès aux projets présentés

| Projet | Accès |
|---|---|
| Hand Bot | [code](https://github.com/danielkangni/Bras-robotique-Tekbot), vidéo de la main en action |
| Navigation A* ROS 2 | [code](https://github.com/danielkangni/tekbot-ros2-bootcamp), vidéo du robot qui rejoint la sortie |
| GreenTrack | [démo](https://danielkangni.github.io/green_track/), [code](https://github.com/danielkangni/green_track), vidéo dans `assets/video/` |
| MY_PGP | vidéo de vraies exécutions (code privé, projet d'équipe EPITECH) |
| NanoTekSpice | vidéo de vraies exécutions (code privé, projet d'équipe EPITECH) |
| Zappy | [code](https://github.com/danielkangni/zappy), vidéo d'une partie à 4 équipes |
| Intranet TekBot | [code](https://github.com/danielkangni/tekbot-intranet), vidéo |
| Sky Bénin BTP | [code](https://github.com/danielkangni/sky-benin-btp-website) |
| Flying Sword | [code](https://github.com/danielkangni/flying_sword) |
