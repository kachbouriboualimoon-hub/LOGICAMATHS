// data/chapitre6_base.js – Squelette du chapitre 6 : Primitives
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé.");
        return;
    }

    if (data.chapitres.some(c => c.id === 6)) {
        console.log("Chapitre 6 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 6,
        titre: "Primitives",
        resume: "Définition, primitives des fonctions usuelles, opérations sur les primitives, calcul de primitives, applications.",
        rappel: `<p><strong>Définition :</strong> $F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'(x)=f(x)$ pour tout $x\\in I$.</p>
                 <p><strong>Théorème :</strong> Toute fonction continue sur un intervalle $I$ admet au moins une primitive sur $I$.</p>
                 <p><strong>Propriété :</strong> Si $F$ et $G$ sont deux primitives de $f$ sur $I$, alors $F-G$ est constante sur $I$.</p>
                 <p><strong>Primitives usuelles :</strong></p>
                 <ul>
                   <li>$\\int x^n dx = \\dfrac{x^{n+1}}{n+1} + C$ pour $n\\neq -1$</li>
                   <li>$\\int \\dfrac{1}{x} dx = \\ln|x| + C$</li>
                   <li>$\\int \\sin x dx = -\\cos x + C$</li>
                   <li>$\\int \\cos x dx = \\sin x + C$</li>
                   <li>$\\int \\dfrac{1}{\\cos^2 x} dx = \\tan x + C$</li>
                   <li>$\\int \\dfrac{1}{\\sqrt{1-x^2}} dx = \\arcsin x + C$</li>
                   <li>$\\int \\dfrac{1}{1+x^2} dx = \\arctan x + C$</li>
                 </ul>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Existence) :</strong> Toute fonction continue sur un intervalle $I$ admet une primitive sur $I$.</div>
                    <div class="theoreme-block"><strong>Théorème 2 (Unicité) :</strong> Si $F$ et $G$ sont deux primitives de $f$ sur $I$, alors $F-G$ est constante sur $I$. Donc $F(x)=G(x)+C$.</div>
                    <div class="theoreme-block"><strong>Théorème 3 (Primitive avec condition) :</strong> Pour tout $x_0\\in I$ et tout $y_0\\in\\mathbb{R}$, il existe une unique primitive $F$ de $f$ sur $I$ telle que $F(x_0)=y_0$.</div>
                    <div class="theoreme-block"><strong>Théorème 4 (Intégration par parties) :</strong> $\\int u'v dx = uv - \\int uv' dx$.</div>`,
        methodes: `<p><strong>•</strong> Pour trouver une primitive, on cherche une fonction dont la dérivée est égale à la fonction donnée.</p>
                    <p><strong>•</strong> On utilise les primitives usuelles et les opérations (linéarité, composition).</p>
                    <p><strong>•</strong> Pour $f(x)=u'(x)u(x)^n$, une primitive est $\\dfrac{u(x)^{n+1}}{n+1}$.</p>
                    <p><strong>•</strong> Pour $f(x)=\\dfrac{u'(x)}{u(x)}$, une primitive est $\\ln|u(x)|$.</p>
                    <p><strong>•</strong> Pour $f(x)=u'(x)e^{u(x)}$, une primitive est $e^{u(x)}$.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Décomposer en éléments simples</strong> pour les fonctions rationnelles.</div>
                   <div class="astuce-box">💡 <strong>Utiliser la linéarité</strong> : primitive de $\\alpha f + \\beta g$ = $\\alpha F + \\beta G$.</div>
                   <div class="astuce-box">💡 <strong>Reconnaître $u'u^n$</strong> pour les puissances.</div>
                   <div class="astuce-box">💡 <strong>Reconnaître $\\dfrac{u'}{u}$</strong> pour le logarithme.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Oublier la constante $C$</strong> quand on donne une primitive.</div>
                   <div class="erreur-box">⚠️ <strong>Ne pas vérifier la continuité</strong> avant d'affirmer l'existence.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre $\\ln|u|$ et $\\ln u$</strong> (valeur absolue).</div>
                   <div class="erreur-box">⚠️ <strong>Appliquer $u'u^n$ sans avoir $u'$</strong> dans la fonction.</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: 'La primitive de $\\cos x$ sur $\\mathbb{R}$ qui s\'annule en 0 est :', options: ['$\\sin x$', '$\\sin x + 1$', '$\\sin x - 1$'], correct: 2 },
                { type: 'qcm', text: 'Une primitive de $\\dfrac{1}{x}$ sur $]0,+\\infty[$ est :', options: ['$\\ln x$', '$\\ln|x|$', '$\\dfrac{1}{x^2}$'], correct: 0 },
                { type: 'qcm', text: 'La primitive de $x^3$ sur $\\mathbb{R}$ est :', options: ['$\\dfrac{x^4}{4}$', '$\\dfrac{x^4}{4}+C$', '$3x^2$'], correct: 1 },
                { type: 'vf', text: 'La fonction $F(x)=x^2$ est une primitive de $f(x)=2x$ sur $\\mathbb{R}$.', correct: true },
                { type: 'vf', text: 'Toute fonction continue sur un intervalle admet une primitive sur cet intervalle.', correct: true },
                { type: 'vf', text: 'Si $F$ est une primitive de $f$, alors $2F$ est une primitive de $2f$.', correct: true },
                { type: 'vf', text: 'La primitive de $\\sin x$ sur $\\mathbb{R}$ qui s\'annule en 0 est $-\\cos x$.', correct: false }
            ]
        },
        exercices: []
    });

    console.log("Chapitre 6 (squelette) chargé avec succès.");
})();