// data.js – Fichier maître qui assemble tous les chapitres
// ================================================================

// Importer les données de chaque chapitre
// (les fichiers data/chapitre*.js définissent chacun une variable nommée chapitreX)

// Note : dans un environnement navigateur classique (sans modules),
// on va inclure tous les fichiers via des balises <script>.
// Mais ici, pour garder une structure propre, on va créer un objet global data
// qui sera rempli par chaque fichier.

// Pour que cela fonctionne, chaque fichier chapitreX.js poussera son contenu
// dans un tableau data.chapitres.

// On initialise le tableau dans data.js
const data = {
    chapitres: []
};

// Puis chaque fichier chapitreX.js fera :
// data.chapitres.push({ ... contenu du chapitre ... });

// À la fin, data contiendra tous les chapitres dans l'ordre.