// data/chapitre9/part4.js – Exercice 8 (Calcul de dérivées avec exponentielle)
// Version améliorée – conforme au LaTeX fourni
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch9 = data.chapitres.find(c => c.id === 9);
    if (!ch9) {
        console.error("Chapitre 9 introuvable. Chargez d'abord data/chapitre9_base.js.");
        return;
    }

    ch9.exercices.push({
        numero: 8,
        enonce: `<p>Pour chacune des fonctions suivantes, donner la dérivée $f'$ sur l'intervalle $I$.</p>
                  <ol>
                    <li>$f : x \\mapsto 2x - e^{-x}$, $I = \\mathbb{R}$.</li>
                    <li>$f : x \\mapsto x^2 + e^{\\frac{1}{x}}$, $I = \\mathbb{R}^*$.</li>
                    <li>$f : x \\mapsto xe^{-x}$, $I = \\mathbb{R}$.</li>
                    <li>$f : x \\mapsto \\dfrac{x-1}{e^x}$, $I = \\mathbb{R}$.</li>
                    <li>$f : x \\mapsto \\dfrac{e^{2x}-1}{x^2+1}$, $I = \\mathbb{R}$.</li>
                    <li>$f : x \\mapsto 2x - 2\\ln(1+e^x)$, $I = \\mathbb{R}$.</li>
                    <li>$f(x) = e^x\\ln(x)$, $I = \\mathbb{R}^*_+$.</li>
                    <li>$f(x) = e^{-x}(e^{2x}+e^x-1)$, $I = \\mathbb{R}$.</li>
                    <li>$f : x \\mapsto \\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$, $I = \\mathbb{R}$.</li>
                  </ol>`,
        questions: [
            {
                id: 'ch9ex8q1',
                texte: "1. $f(x)=2x-e^{-x}$ sur $\\mathbb{R}$.",
                solution: `<p><strong>Méthode :</strong> On utilise les dérivées usuelles : $(e^{u})' = u'e^{u}$.</p>
                           $$ f'(x) = 2 - (-1)e^{-x} = 2 + e^{-x}. $$
                           <p>La dérivée est définie sur $\\mathbb{R}$.</p>
                           <p><strong>$f'(x) = 2 + e^{-x}$.</strong></p>`
            },
            {
                id: 'ch9ex8q2',
                texte: "2. $f(x)=x^2+e^{1/x}$ sur $\\mathbb{R}^*$.",
                solution: `<p>On dérive chaque terme :</p>
                           $$ (x^2)' = 2x, \\quad \\left(e^{1/x}\\right)' = e^{1/x} \\cdot \\left(-\\dfrac{1}{x^2}\\right) = -\\dfrac{e^{1/x}}{x^2}. $$
                           <p>Donc <strong>$f'(x) = 2x - \\dfrac{e^{1/x}}{x^2}$.</strong></p>`
            },
            {
                id: 'ch9ex8q3',
                texte: "3. $f(x)=xe^{-x}$ sur $\\mathbb{R}$.",
                solution: `<p>On utilise la formule $(uv)'=u'v+uv'$ avec $u=x$, $v=e^{-x}$.</p>
                           $$ u'=1, \\quad v'=-e^{-x}. $$
                           $$ f'(x) = 1\\cdot e^{-x} + x\\cdot(-e^{-x}) = e^{-x} - xe^{-x} = (1-x)e^{-x}. $$
                           <p><strong>$f'(x) = (1-x)e^{-x}$.</strong></p>`
            },
            {
                id: 'ch9ex8q4',
                texte: "4. $f(x)=\\dfrac{x-1}{e^x}$ sur $\\mathbb{R}$.",
                solution: `<p>On peut réécrire $f(x)=(x-1)e^{-x}$, puis dériver comme produit.</p>
                           $$ f'(x) = 1\\cdot e^{-x} + (x-1)\\cdot(-e^{-x}) = e^{-x} - (x-1)e^{-x} = (1 - x + 1)e^{-x} = (2-x)e^{-x}. $$
                           <p><strong>$f'(x) = (2-x)e^{-x}$.</strong></p>`
            },
            {
                id: 'ch9ex8q5',
                texte: "5. $f(x)=\\dfrac{e^{2x}-1}{x^2+1}$ sur $\\mathbb{R}$.",
                solution: `<p>On utilise la formule $(u/v)' = (u'v - uv')/v^2$.</p>
                           $$ u=e^{2x}-1,\\; u'=2e^{2x}; \\quad v=x^2+1,\\; v'=2x. $$
                           $$ f'(x) = \\dfrac{2e^{2x}(x^2+1) - (e^{2x}-1)(2x)}{(x^2+1)^2}
                           = \\dfrac{2e^{2x}(x^2+1) - 2x e^{2x} + 2x}{(x^2+1)^2}
                           = \\dfrac{2e^{2x}(x^2 - x + 1) + 2x}{(x^2+1)^2}. $$
                           <p><strong>$f'(x) = \\dfrac{2[e^{2x}(x^2 - x + 1) + x]}{(x^2+1)^2}$.</strong></p>`
            },
            {
                id: 'ch9ex8q6',
                texte: "6. $f(x)=2x - 2\\ln(1+e^x)$ sur $\\mathbb{R}$.",
                solution: `<p>Dérivée de $\\ln(1+e^x)$ : $\\dfrac{e^x}{1+e^x}$.</p>
                           $$ f'(x) = 2 - 2\\cdot\\dfrac{e^x}{1+e^x} = 2\\left(1 - \\dfrac{e^x}{1+e^x}\\right) = 2\\left(\\dfrac{1}{1+e^x}\\right) = \\dfrac{2}{1+e^x}. $$
                           <p><strong>$f'(x) = \\dfrac{2}{1+e^x}$.</strong></p>`
            },
            {
                id: 'ch9ex8q7',
                texte: "7. $f(x)=e^x\\ln x$ sur $\\mathbb{R}^*_+$.",
                solution: `<p>On utilise la formule du produit.</p>
                           $$ f'(x) = e^x\\ln x + e^x\\cdot\\dfrac{1}{x} = e^x\\left(\\ln x + \\dfrac{1}{x}\\right). $$
                           <p><strong>$f'(x) = e^x\\left(\\ln x + \\dfrac{1}{x}\\right)$.</strong></p>`
            },
            {
                id: 'ch9ex8q8',
                texte: "8. $f(x)=e^{-x}(e^{2x}+e^x-1)$ sur $\\mathbb{R}$.",
                solution: `<p>On développe d'abord : $f(x) = e^{-x}e^{2x} + e^{-x}e^x - e^{-x} = e^x + 1 - e^{-x}$.</p>
                           <p>Puis on dérive : $f'(x) = e^x + 0 - (-e^{-x}) = e^x + e^{-x}$.</p>
                           <p><strong>$f'(x) = e^x + e^{-x}$.</strong></p>`
            },
            {
                id: 'ch9ex8q9',
                texte: "9. $f(x)=\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$ sur $\\mathbb{R}$.",
                solution: `<p>On reconnaît la fonction tangente hyperbolique. On peut dériver directement.</p>
                           <p>Posons $u=e^x-e^{-x}$, $u'=e^x+e^{-x}$ ; $v=e^x+e^{-x}$, $v'=e^x-e^{-x}$.</p>
                           $$ f'(x) = \\dfrac{(e^x+e^{-x})(e^x+e^{-x}) - (e^x-e^{-x})(e^x-e^{-x})}{(e^x+e^{-x})^2}
                           = \\dfrac{(e^x+e^{-x})^2 - (e^x-e^{-x})^2}{(e^x+e^{-x})^2}
                           = \\dfrac{4}{(e^x+e^{-x})^2}. $$
                           <p>On peut aussi écrire $f'(x) = 1 - f(x)^2$.</p>
                           <p><strong>$f'(x) = \\dfrac{4}{(e^x+e^{-x})^2}$.</strong></p>`
            }
        ]
    });

    console.log("Partie 4 (exercice 8) – Dérivées – ajoutée avec succès.");
})();