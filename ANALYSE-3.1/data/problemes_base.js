// data/problemes_base.js – Base pour les problèmes d'analyse
// Initialise l'objet global window.problemes qui sera rempli par les parties
// =======================================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        window.problemes = {
            titre: "Problèmes d'analyse",
            description: "Problèmes types pour le baccalauréat (4ème Sc. Exp.)",
            items: []  // Chaque partie ajoutera son problème ici
        };
        console.log("✅ Base des problèmes initialisée.");
    } else {
        console.warn("⚠️ window.problemes existe déjà, réinitialisation ignorée.");
    }
})();