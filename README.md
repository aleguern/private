# BreadcrumbKata

Test technique Fortuneo version 2020.
Pour démarrer le projet: npm install puis npm run start

# Les specs

Le fil d'ariane doit avoir le comportement suivant :
- l'étape courante doit avoir un cercle vert vide autour du numero
- les étapes validées doivent avoir un cercle plein avec le numéro à l'intérieur
- les étapes non passées doivent avoir un cercle gris vide autour du numéro
- une étape est validée lorsque toutes ses sous étapes sont passées (voir route.ts pour les étapes du fil d'ariane et app.route pour les routes du site)
- si une étape est constituée de plusieurs sous étapes, la barre de progression doit avancer au fur et à mesure de leur completion
- la barre de progression entre deux étapes validées doit être verte
- la barre de progression entre deux étapes non validées doit être grise

# Les objectifs du kata

Il faut refacto le fil d 'ariane pour le rendre plus fonctionnel et plus facile à maintenir.
On fera bien attention aux point suivants:
- coder en essayant de respecter autant que possible les standards es6
- produire du code clair : faire attention à l"expressivité du code, à la longueur des méthodes, au nommage, ... (partir du principe que le code sera utilisé par une équipe)
- ne pas réinventer la roue : privilégier l'utilisation des méthodes natives du framework / langage /...
- faire du typescript : typer les méthodes / constantes / variables sauf lorsque c'est implicite

# Ce qu'il ne faut pas faire

L'objectif de ce kata n'est pas de produire une application absolument parfaite, de ce fait on peut ignorer les choses suivantes:
- ce qui se trouve hors du dossier app
- les fichiers qui commencent par app
- les fichiers css (sauf pour extraire du style codé en dur)
- le composant dumb (sauf si vous y tenez vraiment, par exemple pour naviguer plus facilement d'une route à une autre)
- le composant circle-validated (y a suffisamment de matière à traiter avant)

Tout le reste est modifiable, il n'est pas interdit de faire évoluer les modèles.
