// data/chapitre8_base.js – Squelette du chapitre 8 : Fonction logarithme népérien
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé.");
        return;
    }

    if (data.chapitres.some(c => c.id === 8)) {
        console.log("Chapitre 8 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 8,
        titre: "Fonction logarithme népérien",
        resume: "Définition, propriétés algébriques, limites, dérivée, études de fonctions, primitives, inégalités, suites.",
        rappel: `<p><strong>Définition :</strong> $\\ln x = \\displaystyle\\int_1^x \\dfrac{dt}{t}$ pour $x>0$.</p>
                 <p><strong>Propriétés :</strong></p>
                 <ul>
                   <li>$\\ln(ab) = \\ln a + \\ln b$</li>
                   <li>$\\ln\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$</li>
                   <li>$\\ln(a^n) = n\\ln a$</li>
                   <li>$\\ln 1 = 0$, $\\ln e = 1$</li>
                 </ul>
                 <p><strong>Limites :</strong></p>
                 <ul>
                   <li>$\\lim\\limits_{x\\to0^+} \\ln x = -\\infty$</li>
                   <li>$\\lim\\limits_{x\\to+\\infty} \\ln x = +\\infty$</li>
                   <li>$\\lim\\limits_{x\\to0^+} x\\ln x = 0$</li>
                   <li>$\\lim\\limits_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0$</li>
                   <li>$\\lim\\limits_{x\\to1} \\dfrac{\\ln x}{x-1} = 1$</li>
                 </ul>
                 <p><strong>Dérivée :</strong></p>
                 <ul>
                   <li>$\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}$ pour $x>0$</li>
                   <li>$\\dfrac{d}{dx}\\ln|u(x)| = \\dfrac{u'(x)}{u(x)}$ si $u(x)\\neq0$</li>
                 </ul>
                 <p><strong>Primitive :</strong> $\\int \\ln x\\, dx = x\\ln x - x + C$</p>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Limites usuelles) :</strong> $\\lim\\limits_{x\\to+\\infty} \\dfrac{\\ln x}{x^\\alpha} = 0$ pour $\\alpha>0$.</div>
                    <div class="theoreme-block"><strong>Théorème 2 (Croissance comparée) :</strong> $\\lim\\limits_{x\\to+\\infty} \\dfrac{x^\\alpha}{\\ln x} = +\\infty$ pour $\\alpha>0$.</div>
                    <div class="theoreme-block"><strong>Théorème 3 (Dérivée de $\\ln\\circ u$) :</strong> Si $u$ dérivable et $u>0$, alors $(\\ln u)' = \\dfrac{u'}{u}$.</div>`,
        methodes: `<p><strong>•</strong> Pour résoudre $\\ln f(x) = \\ln g(x)$, utiliser l'injectivité : $f(x)=g(x)$ avec $f,g>0$.</p>
                    <p><strong>•</strong> Pour les limites, utiliser les limites usuelles et les propriétés.</p>
                    <p><strong>•</strong> Pour étudier une fonction contenant $\\ln$, dériver en justifiant le domaine.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Utiliser $\\ln$ pour comparer</strong> : $\\ln$ est croissante, donc préserve l'ordre.</div>
                   <div class="astuce-box">💡 <strong>Pour lever une indétermination,</strong> factoriser par le terme dominant.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Oublier le domaine</strong> : $\\ln x$ n'est défini que pour $x>0$.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre $\\ln(ab)$ et $(\\ln a)(\\ln b)$</strong>.</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: '$\\ln(e^2)$ est égal à :', options: ['$2$', '$e^2$', '$\\ln 2$'], correct: 0 },
                { type: 'qcm', text: '$\\ln(1)$ est égal à :', options: ['$0$', '$1$', '$e$'], correct: 0 },
                { type: 'qcm', text: '$\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x}$ est égale à :', options: ['$0$', '$1$', '$+\\infty$'], correct: 0 },
                { type: 'vf', text: '$\\ln(ab)=\\ln a + \\ln b$ pour $a,b>0$.', correct: true },
                { type: 'vf', text: '$\\ln(a+b)=\\ln a + \\ln b$.', correct: false },
                { type: 'vf', text: '$\\lim_{x\\to0^+} \\ln x = -\\infty$.', correct: true }
            ]
        },
        exercices: []
    });

    console.log("Chapitre 8 (squelette) chargé avec succès.");
})();