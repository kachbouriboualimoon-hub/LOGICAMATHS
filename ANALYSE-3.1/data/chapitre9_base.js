// data/chapitre9_base.js – Squelette du chapitre 9 : Fonction exponentielle
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé.");
        return;
    }

    if (data.chapitres.some(c => c.id === 9)) {
        console.log("Chapitre 9 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 9,
        titre: "Fonction exponentielle",
        resume: "Définition, propriétés, limites, dérivée, primitives, équations différentielles, applications.",
        rappel: `<p><strong>Définition :</strong> La fonction exponentielle est la réciproque de la fonction logarithme népérien.</p>
                 <p>$$ \\exp(x) = e^x \\quad \\text{où } \\ln(e^x) = x \\text{ et } e^{\\ln x} = x. $$</p>
                 <p><strong>Propriétés :</strong></p>
                 <ul>
                   <li>$e^{a+b} = e^a \\times e^b$</li>
                   <li>$e^{a-b} = \\dfrac{e^a}{e^b}$</li>
                   <li>$(e^a)^b = e^{ab}$</li>
                   <li>$e^0 = 1$, $e^1 = e$</li>
                 </ul>
                 <p><strong>Limites :</strong></p>
                 <ul>
                   <li>$\\lim_{x\\to-\\infty} e^x = 0$</li>
                   <li>$\\lim_{x\\to+\\infty} e^x = +\\infty$</li>
                   <li>$\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty$</li>
                   <li>$\\lim_{x\\to-\\infty} x^n e^x = 0$</li>
                   <li>$\\lim_{x\\to0} \\dfrac{e^x - 1}{x} = 1$</li>
                 </ul>
                 <p><strong>Dérivée :</strong> $(e^x)' = e^x$ et $(e^{u(x)})' = u'(x)e^{u(x)}$</p>
                 <p><strong>Primitive :</strong> $\\int e^x dx = e^x + C$ et $\\int u'(x)e^{u(x)} dx = e^{u(x)} + C$</p>
                 <p><strong>Équations différentielles :</strong></p>
                 <ul>
                   <li>$y' = ay$ ⇒ $y = Ce^{ax}$</li>
                   <li>$y' = ay + b$ ⇒ $y = Ce^{ax} - \\dfrac{b}{a}$</li>
                 </ul>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Croissance comparée) :</strong> Pour tout $n\\in\\mathbb{N}^*$, $\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty$.</div>
                    <div class="theoreme-block"><strong>Théorème 2 (Limite en $-\\infty$) :</strong> Pour tout $n\\in\\mathbb{N}^*$, $\\lim_{x\\to-\\infty} x^n e^x = 0$.</div>
                    <div class="theoreme-block"><strong>Théorème 3 (Dérivée de $e^u$) :</strong> Si $u$ est dérivable, alors $(e^u)' = u'e^u$.</div>
                    <div class="theoreme-block"><strong>Théorème 4 (Équation différentielle) :</strong> Les solutions de $y'=ay$ sont $y=Ce^{ax}$.</div>
                    <div class="theoreme-block"><strong>Théorème 5 (Équation différentielle) :</strong> Les solutions de $y'=ay+b$ sont $y=Ce^{ax} - \\dfrac{b}{a}$.</div>`,
        methodes: `<p><strong>•</strong> Pour résoudre $e^{u(x)} = e^{v(x)}$, utiliser l'injectivité : $u(x)=v(x)$.</p>
                    <p><strong>•</strong> Pour les limites, utiliser les limites usuelles et la croissance comparée.</p>
                    <p><strong>•</strong> Pour étudier une fonction avec $e^x$, dériver en utilisant $(e^u)'=u'e^u$.</p>
                    <p><strong>•</strong> Pour une équation différentielle, identifier la forme et appliquer la formule.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Pour lever une indétermination,</strong> factoriser par $e^x$ ou par le terme dominant.</div>
                   <div class="astuce-box">💡 <strong>Pour les équations différentielles,</strong> vérifier que la fonction trouvée est bien solution.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Confondre $e^{a+b}$ et $e^a + e^b$</strong>.</div>
                   <div class="erreur-box">⚠️ <strong>Oublier la constante $C$</strong> dans les solutions des équations différentielles.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre $e^{u(x)}$ et $(e^x)^u$</strong>.</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: '$e^0$ est égal à :', options: ['$0$', '$1$', '$e$'], correct: 1 },
                { type: 'qcm', text: '$\\lim_{x\\to+\\infty} e^x$ est égale à :', options: ['$0$', '$1$', '$+\\infty$'], correct: 2 },
                { type: 'qcm', text: 'La dérivée de $e^{2x}$ est :', options: ['$e^{2x}$', '$2e^{2x}$', '$2xe^{2x}$'], correct: 1 },
                { type: 'vf', text: '$e^{a+b} = e^a \\times e^b$.', correct: true },
                { type: 'vf', text: 'La fonction exponentielle est strictement décroissante.', correct: false },
                { type: 'vf', text: '$\\lim_{x\\to+\\infty} \\dfrac{e^x}{x} = +\\infty$.', correct: true }
            ]
        },
        exercices: []
    });

    console.log("Chapitre 9 (squelette) chargé avec succès.");
})();