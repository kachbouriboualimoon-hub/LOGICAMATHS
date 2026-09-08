// Ce fichier peut être un résumé synthétique des 6 chapitres.
// On peut le laisser vide ou y mettre un résumé global, mais le site original utilise des résumés par chapitre.
// On va mettre un résumé des points clés.
if (typeof data !== 'undefined') {
    data.chapitres.forEach(ch => {
        ch.resume = `
            <h4>Résumé du chapitre ${ch.id}</h4>
            <p>${ch.rappel}</p>
            <p><strong>Principaux théorèmes :</strong> ${ch.theoremes}</p>
        `;
    });
}