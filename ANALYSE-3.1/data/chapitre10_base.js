// data/chapitre10_base.js – Squelette du chapitre 10 : Équations différentielles
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé.");
        return;
    }

    if (data.chapitres.some(c => c.id === 10)) {
        console.log("Chapitre 10 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 10,
        titre: "Équations différentielles",
        resume: "Équations différentielles linéaires du premier ordre ($y'=ay$, $y'=ay+b$), équations du second ordre ($y''+\\omega^2 y=0$), applications.",
        rappel: `<p><strong>Équations du type $y'=ay$ :</strong></p>
                 <p>Les solutions sont $y = Ce^{ax}$, où $C\\in\\mathbb{R}$.</p>
                 <p>La solution vérifiant $y(x_0)=y_0$ est $y = y_0 e^{a(x-x_0)}$.</p>
                 <p><strong>Équations du type $y'=ay+b$ ($a\\neq0$) :</strong></p>
                 <p>Les solutions sont $y = Ce^{ax} - \\dfrac{b}{a}$.</p>
                 <p>La solution vérifiant $y(x_0)=y_0$ est $y = \\left(y_0 + \\dfrac{b}{a}\\right)e^{a(x-x_0)} - \\dfrac{b}{a}$.</p>
                 <p><strong>Équations du type $y''+\\omega^2 y=0$ ($\\omega\\neq0$) :</strong></p>
                 <p>Les solutions sont $y = A\\sin(\\omega x) + B\\cos(\\omega x)$, où $A,B\\in\\mathbb{R}$.</p>
                 <p><strong>Équations du type $y'' = ay'$ :</strong></p>
                 <p>On pose $z=y'$, on résout $z'=az$, puis on intègre.</p>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 ($y'=ay$) :</strong> Les solutions sont $y=Ce^{ax}$, $C\\in\\mathbb{R}$.</div>
                    <div class="theoreme-block"><strong>Théorème 2 ($y'=ay+b$) :</strong> Les solutions sont $y=Ce^{ax}-\\dfrac{b}{a}$, $C\\in\\mathbb{R}$.</div>
                    <div class="theoreme-block"><strong>Théorème 3 ($y''+\\omega^2 y=0$) :</strong> Les solutions sont $y=A\\sin(\\omega x)+B\\cos(\\omega x)$.</div>`,
        methodes: `<p><strong>•</strong> Pour résoudre $y'=ay$, identifier $a$ et appliquer $y=Ce^{ax}$.</p>
                    <p><strong>•</strong> Pour $y'=ay+b$, trouver la solution particulière constante $y_p=-\\dfrac{b}{a}$.</p>
                    <p><strong>•</strong> Pour $y''+\\omega^2 y=0$, identifier $\\omega$ et écrire $y=A\\sin(\\omega x)+B\\cos(\\omega x)$.</p>
                    <p><strong>•</strong> Pour $y''=ay'$, poser $z=y'$.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Vérifier la solution</strong> en la remplaçant dans l'équation.</div>
                   <div class="astuce-box">💡 <strong>Pour les problèmes avec conditions initiales,</strong> utiliser la formule avec $x_0$.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Oublier la constante $C$</strong> dans les solutions.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre $y'=ay$ et $y'=ay+b$</strong> (le terme constant change la solution).</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: 'Les solutions de $y\'=2y$ sont :', options: ['$Ce^{2x}$', '$Ce^{x}$', '$e^{2x}$'], correct: 0 },
                { type: 'qcm', text: 'Les solutions de $y\'=2y+1$ sont :', options: ['$Ce^{2x}-\\frac{1}{2}$', '$Ce^{2x}+\\frac{1}{2}$', '$Ce^{2x}-1$'], correct: 0 },
                { type: 'qcm', text: 'Les solutions de $y\'\'+4y=0$ sont :', options: ['$A\\sin(2x)+B\\cos(2x)$', '$A\\sin(4x)+B\\cos(4x)$', '$Ae^{2x}+Be^{-2x}$'], correct: 0 },
                { type: 'vf', text: 'Les solutions de $y\'=3y$ sont $y=Ce^{3x}$.', correct: true },
                { type: 'vf', text: 'Les solutions de $y\'=3y+1$ sont $y=Ce^{3x}-\\frac{1}{3}$.', correct: true },
                { type: 'vf', text: 'Les solutions de $y\'\'+9y=0$ sont $y=A\\sin(3x)+B\\cos(3x)$.', correct: true }
            ]
        },
        exercices: []
    });

    console.log("Chapitre 10 (squelette) chargé avec succès.");
})();