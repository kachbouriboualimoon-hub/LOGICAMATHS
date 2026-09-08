// data/chapitre8/part2.js – Exercices 4, 5, 6 (Limites avec ln)
// Version améliorée – conforme au PDF Exercices_chapitre8_logarithmes.pdf
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch8 = data.chapitres.find(c => c.id === 8);
    if (!ch8) {
        console.error("Chapitre 8 introuvable. Chargez d'abord data/chapitre8_base.js.");
        return;
    }

    ch8.exercices.push(
        // ======================================================================
        // EXERCICE 4 – Limites en +∞
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>Trouver, dans chacun des cas suivants, la limite de la fonction $f$ en $+\\infty$.</p>
                      <ol>
                        <li>$f(x) = \\dfrac{\\ln(x^4)}{x}$</li>
                        <li>$f(x) = \\dfrac{x^2+1}{x\\ln x}$</li>
                        <li>$f(x) = \\dfrac{2-\\ln x}{x}$</li>
                        <li>$f(x) = \\dfrac{1+\\ln x}{x}$</li>
                        <li>$f(x) = \\ln(x+1) - \\ln x$</li>
                        <li>$f(x) = 1 + x - \\ln x$</li>
                        <li>$f(x) = x - \\ln^2 x$</li>
                        <li>$f(x) = x - \\ln(x+1) + \\ln x$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex4q1',
                    texte: "1. $\\lim_{x\\to+\\infty} \\dfrac{\\ln(x^4)}{x}$",
                    solution: `<p><strong>Méthode :</strong> On utilise $\\ln(x^4) = 4\\ln x$.</p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{4\\ln x}{x} = 4 \\times \\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 4 \\times 0 = 0. $$
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex4q2',
                    texte: "2. $\\lim_{x\\to+\\infty} \\dfrac{x^2+1}{x\\ln x}$",
                    solution: `<p>On factorise par $x^2$ au numérateur et $x\\ln x$ au dénominateur :</p>
                               $$ \\dfrac{x^2+1}{x\\ln x} = \\dfrac{x^2\\left(1+\\frac{1}{x^2}\\right)}{x\\ln x} = \\dfrac{x}{\\ln x}\\left(1+\\frac{1}{x^2}\\right). $$
                               <p>On sait que $\\lim_{x\\to+\\infty} \\dfrac{x}{\\ln x} = +\\infty$ (croissance comparée).</p>
                               <p>Donc le produit tend vers $+\\infty$.</p>
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex4q3',
                    texte: "3. $\\lim_{x\\to+\\infty} \\dfrac{2-\\ln x}{x}$",
                    solution: `<p>On sépare les termes :</p>
                               $$ \\dfrac{2-\\ln x}{x} = \\dfrac{2}{x} - \\dfrac{\\ln x}{x}. $$
                               <p>$\\lim_{x\\to+\\infty} \\dfrac{2}{x} = 0$ et $\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex4q4',
                    texte: "4. $\\lim_{x\\to+\\infty} \\dfrac{1+\\ln x}{x}$",
                    solution: `<p>$$ \\dfrac{1+\\ln x}{x} = \\dfrac{1}{x} + \\dfrac{\\ln x}{x}. $$</p>
                               <p>$\\lim_{x\\to+\\infty} \\dfrac{1}{x} = 0$ et $\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex4q5',
                    texte: "5. $\\lim_{x\\to+\\infty} \\left[\\ln(x+1) - \\ln x\\right]$",
                    solution: `<p>On utilise $\\ln a - \\ln b = \\ln\\left(\\dfrac{a}{b}\\right)$ :</p>
                               $$ \\ln(x+1) - \\ln x = \\ln\\left(\\dfrac{x+1}{x}\\right) = \\ln\\left(1 + \\dfrac{1}{x}\\right). $$
                               <p>Quand $x\\to+\\infty$, $\\dfrac{1}{x} \\to 0$, donc $1+\\dfrac{1}{x} \\to 1$.</p>
                               <p>Par continuité de $\\ln$ en $1$ : $\\ln\\left(1+\\dfrac{1}{x}\\right) \\to \\ln 1 = 0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex4q6',
                    texte: "6. $\\lim_{x\\to+\\infty} (1 + x - \\ln x)$",
                    solution: `<p>On factorise par $x$ : $x\\left(1 + \\dfrac{1}{x} - \\dfrac{\\ln x}{x}\\right)$.</p>
                               <p>Quand $x\\to+\\infty$, $\\dfrac{1}{x} \\to 0$ et $\\dfrac{\\ln x}{x} \\to 0$.</p>
                               <p>Donc $1 + \\dfrac{1}{x} - \\dfrac{\\ln x}{x} \\to 1$.</p>
                               <p>$x\\times 1 \\to +\\infty$.</p>
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex4q7',
                    texte: "7. $\\lim_{x\\to+\\infty} (x - \\ln^2 x)$",
                    solution: `<p>On factorise par $x$ : $x\\left(1 - \\dfrac{\\ln^2 x}{x}\\right)$.</p>
                               <p>On sait que $\\lim_{x\\to+\\infty} \\dfrac{\\ln^2 x}{x} = 0$ (car $\\dfrac{\\ln x}{\\sqrt{x}} \\to 0$, donc $\\dfrac{\\ln^2 x}{x} = \\left(\\dfrac{\\ln x}{\\sqrt{x}}\\right)^2 \\to 0$).</p>
                               <p>Donc $1 - \\dfrac{\\ln^2 x}{x} \\to 1$, et $x \\times 1 \\to +\\infty$.</p>
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex4q8',
                    texte: "8. $\\lim_{x\\to+\\infty} \\left[x - \\ln(x+1) + \\ln x\\right]$",
                    solution: `<p>On a $\\ln(x+1) - \\ln x = \\ln\\left(1+\\dfrac{1}{x}\\right)$.</p>
                               <p>Donc $x - \\ln(x+1) + \\ln x = x - \\left[\\ln(x+1) - \\ln x\\right] = x - \\ln\\left(1+\\dfrac{1}{x}\\right)$.</p>
                               <p>Quand $x\\to+\\infty$, $\\ln\\left(1+\\dfrac{1}{x}\\right) \\sim \\dfrac{1}{x}$.</p>
                               <p>Donc $x - \\ln\\left(1+\\dfrac{1}{x}\\right) \\sim x - \\dfrac{1}{x} \\to +\\infty$.</p>
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5 – Limites en différents points
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Déterminer les limites ci-dessous :</p>
                      <ol>
                        <li>$\\lim_{x\\to3} \\dfrac{\\ln x - \\ln 3}{x-3}$</li>
                        <li>$\\lim_{x\\to e} \\dfrac{\\ln x - 1}{x-e}$</li>
                        <li>$\\lim_{x\\to0} \\dfrac{\\ln(1+3x)}{x}$</li>
                        <li>$\\lim_{x\\to0} \\dfrac{\\ln(1+2x)}{x}$</li>
                        <li>$\\lim_{x\\to0} \\dfrac{\\ln(\\cos x)}{x}$</li>
                        <li>$\\lim_{x\\to0} \\dfrac{\\ln(1+\\sin x)}{x}$</li>
                        <li>$\\lim_{x\\to1} \\dfrac{\\ln x}{x^2-3x+2}$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex5q1',
                    texte: "1. $\\lim_{x\\to3} \\dfrac{\\ln x - \\ln 3}{x-3}$",
                    solution: `<p><strong>Méthode :</strong> On reconnaît le nombre dérivé de $\\ln$ en $3$.</p>
                               <p>En effet, $\\lim_{x\\to3} \\dfrac{\\ln x - \\ln 3}{x-3} = (\\ln)'(3) = \\dfrac{1}{3}$.</p>
                               <p><strong>Résultat : $\\dfrac{1}{3}$.</strong></p>`
                },
                {
                    id: 'ch8ex5q2',
                    texte: "2. $\\lim_{x\\to e} \\dfrac{\\ln x - 1}{x-e}$",
                    solution: `<p>$\\ln e = 1$, donc :</p>
                               $$ \\lim_{x\\to e} \\dfrac{\\ln x - \\ln e}{x-e} = (\\ln)'(e) = \\dfrac{1}{e}. $$
                               <p><strong>Résultat : $\\dfrac{1}{e}$.</strong></p>`
                },
                {
                    id: 'ch8ex5q3',
                    texte: "3. $\\lim_{x\\to0} \\dfrac{\\ln(1+3x)}{x}$",
                    solution: `<p><strong>Méthode :</strong> On utilise la limite usuelle $\\lim_{u\\to0} \\dfrac{\\ln(1+u)}{u} = 1$.</p>
                               <p>Posons $u = 3x$. Alors $u\\to0$ et $x = \\dfrac{u}{3}$.</p>
                               $$ \\lim_{x\\to0} \\dfrac{\\ln(1+3x)}{x} = \\lim_{u\\to0} \\dfrac{\\ln(1+u)}{u/3} = 3 \\times \\lim_{u\\to0} \\dfrac{\\ln(1+u)}{u} = 3 \\times 1 = 3. $$
                               <p><strong>Résultat : $3$.</strong></p>`
                },
                {
                    id: 'ch8ex5q4',
                    texte: "4. $\\lim_{x\\to0} \\dfrac{\\ln(1+2x)}{x}$",
                    solution: `<p>Posons $u = 2x$ :</p>
                               $$ \\lim_{x\\to0} \\dfrac{\\ln(1+2x)}{x} = \\lim_{u\\to0} \\dfrac{\\ln(1+u)}{u/2} = 2 \\times 1 = 2. $$
                               <p><strong>Résultat : $2$.</strong></p>`
                },
                {
                    id: 'ch8ex5q5',
                    texte: "5. $\\lim_{x\\to0} \\dfrac{\\ln(\\cos x)}{x}$",
                    solution: `<p>Quand $x\\to0$, $\\cos x \\to 1$, donc $\\ln(\\cos x) \\to \\ln 1 = 0$.</p>
                               <p>On a $\\cos x - 1 \\sim -\\dfrac{x^2}{2}$.</p>
                               <p>De plus, $\\ln(\\cos x) = \\ln(1 + (\\cos x - 1)) \\sim \\cos x - 1 \\sim -\\dfrac{x^2}{2}$.</p>
                               <p>Donc $\\dfrac{\\ln(\\cos x)}{x} \\sim \\dfrac{-x^2/2}{x} = -\\dfrac{x}{2} \\to 0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex5q6',
                    texte: "6. $\\lim_{x\\to0} \\dfrac{\\ln(1+\\sin x)}{x}$",
                    solution: `<p>Quand $x\\to0$, $\\sin x \\sim x$.</p>
                               <p>Donc $\\ln(1+\\sin x) \\sim \\sin x \\sim x$.</p>
                               <p>D'où $\\dfrac{\\ln(1+\\sin x)}{x} \\sim \\dfrac{x}{x} = 1$.</p>
                               <p><strong>Résultat : $1$.</strong></p>`
                },
                {
                    id: 'ch8ex5q7',
                    texte: "7. $\\lim_{x\\to1} \\dfrac{\\ln x}{x^2-3x+2}$",
                    solution: `<p>On a $x^2-3x+2 = (x-1)(x-2)$.</p>
                               <p>Quand $x\\to1$, $\\ln x \\sim x-1$.</p>
                               <p>Donc $\\dfrac{\\ln x}{(x-1)(x-2)} \\sim \\dfrac{x-1}{(x-1)(x-2)} = \\dfrac{1}{x-2} \\to \\dfrac{1}{1-2} = -1$.</p>
                               <p><strong>Résultat : $-1$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6 – Limites en 0+ et en +∞
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Déterminer les limites ci-dessous :</p>
                      <ol>
                        <li>$\\lim_{x\\to0^+} x^2\\ln x$</li>
                        <li>$\\lim_{x\\to0^+} \\sqrt{x}\\ln x$</li>
                        <li>$\\lim_{x\\to0^+} \\left(\\dfrac{1}{x^2} + \\ln x\\right)$</li>
                        <li>$\\lim_{x\\to+\\infty} \\dfrac{x^3}{\\ln x}$</li>
                        <li>$\\lim_{x\\to+\\infty} \\dfrac{\\ln^3 x}{x}$</li>
                        <li>$\\lim_{x\\to0^+} x^3\\ln^2 x$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex6q1',
                    texte: "1. $\\lim_{x\\to0^+} x^2\\ln x$",
                    solution: `<p><strong>Méthode :</strong> On utilise la limite usuelle $\\lim_{x\\to0^+} x^\\alpha\\ln x = 0$ pour $\\alpha>0$.</p>
                               <p>Ici $\\alpha=2>0$, donc :</p>
                               $$ \\lim_{x\\to0^+} x^2\\ln x = 0. $$
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex6q2',
                    texte: "2. $\\lim_{x\\to0^+} \\sqrt{x}\\ln x$",
                    solution: `<p>Ici $\\alpha = \\dfrac{1}{2} > 0$, donc :</p>
                               $$ \\lim_{x\\to0^+} \\sqrt{x}\\ln x = 0. $$
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex6q3',
                    texte: "3. $\\lim_{x\\to0^+} \\left(\\dfrac{1}{x^2} + \\ln x\\right)$",
                    solution: `<p>Quand $x\\to0^+$, $\\dfrac{1}{x^2} \\to +\\infty$ et $\\ln x \\to -\\infty$.</p>
                               <p>Le terme dominant est $\\dfrac{1}{x^2}$.</p>
                               $$ \\lim_{x\\to0^+} \\dfrac{1}{x^2} + \\ln x = +\\infty. $$
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex6q4',
                    texte: "4. $\\lim_{x\\to+\\infty} \\dfrac{x^3}{\\ln x}$",
                    solution: `<p>On utilise la croissance comparée : $\\lim_{x\\to+\\infty} \\dfrac{x^\\alpha}{\\ln x} = +\\infty$ pour $\\alpha>0$.</p>
                               <p>Ici $\\alpha=3>0$, donc :</p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{x^3}{\\ln x} = +\\infty. $$
                               <p><strong>Résultat : $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex6q5',
                    texte: "5. $\\lim_{x\\to+\\infty} \\dfrac{\\ln^3 x}{x}$",
                    solution: `<p>On utilise la limite usuelle $\\lim_{x\\to+\\infty} \\dfrac{\\ln^3 x}{x} = 0$.</p>
                               <p>On peut le justifier en écrivant :</p>
                               $$ \\dfrac{\\ln^3 x}{x} = \\left(\\dfrac{\\ln x}{x^{1/3}}\\right)^3 \\times \\dfrac{1}{x} ? $$
                               <p>Plus simplement : $\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x^{1/3}} = 0$, donc $\\lim_{x\\to+\\infty} \\dfrac{\\ln^3 x}{x} = 0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                },
                {
                    id: 'ch8ex6q6',
                    texte: "6. $\\lim_{x\\to0^+} x^3\\ln^2 x$",
                    solution: `<p>On écrit : $x^3\\ln^2 x = (x^{3/2}\\ln x)^2$.</p>
                               <p>Or $\\lim_{x\\to0^+} x^{3/2}\\ln x = 0$ (car $\\alpha = \\dfrac{3}{2} > 0$).</p>
                               <p>Donc le carré tend vers $0$.</p>
                               <p><strong>Résultat : $0$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 4, 5, 6) – Limites – ajoutée avec succès.");
})();