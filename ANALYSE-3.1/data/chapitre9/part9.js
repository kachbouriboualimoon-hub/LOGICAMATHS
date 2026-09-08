// data/chapitre9/part9.js – Exercices 16 et 17 (Asymptote, aire, limites avec bases)
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

    ch9.exercices.push(
        // ======================================================================
        // EXERCICE 16 – f(x) = x - 2 + e^(-x/2), asymptote et aire
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit la fonction $f : x \\mapsto x - 2 + e^{-\\frac{x}{2}}$. On désigne par $C$ la courbe de $f$ dans un repère orthonormé.</p>
                      <ol>
                        <li>Étudier les variations de $f$.</li>
                        <li>
                          <ol>
                            <li>Vérifier que la droite $D : y = x-2$ est une asymptote à $C$.</li>
                            <li>Tracer $D$ et $C$.</li>
                          </ol>
                        </li>
                        <li>Soit $\\lambda > 0$ et la droite $\\Delta : x = \\lambda$. On note $A(\\lambda)$ l'aire de la partie du plan limitée par $C$, $D$, $\\Delta$ et l'axe des ordonnées. Calculer $\\displaystyle\\lim_{\\lambda \\to +\\infty} A(\\lambda)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex16q1',
                    texte: "1. Variations de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = \\mathbb{R}$.</p>
                               <p>$f$ est dérivable sur $\\mathbb{R}$.</p>
                               $$ f'(x) = 1 - \\dfrac{1}{2}e^{-x/2}. $$
                               <p>$f'(x) = 0$ ⇔ $1 = \\dfrac{1}{2}e^{-x/2}$ ⇔ $e^{-x/2} = 2$ ⇔ $-\\dfrac{x}{2} = \\ln 2$ ⇔ $x = -2\\ln 2$.</p>
                               <ul>
                                 <li>Sur $]-\\infty, -2\\ln 2[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]-2\\ln 2, +\\infty[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x=-2\\ln 2$ :</p>
                               $$ f(-2\\ln 2) = -2\\ln 2 - 2 + e^{\\ln 2} = -2\\ln 2 - 2 + 2 = -2\\ln 2. $$
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} f(x) = -\\infty$ (car $e^{-x/2} \\to +\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $x$ domine).</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-2\\ln 2$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\searrow$</td><td>$-2\\ln 2$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex16q2',
                    texte: "2.a. Asymptote $D:y=x-2$.",
                    solution: `<p>$$ f(x) - (x-2) = e^{-x/2}. $$</p>
                               <p>Quand $x\\to+\\infty$, $e^{-x/2} \\to 0$.</p>
                               <p><strong>Donc $D:y=x-2$ est asymptote à $C$ en $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch9ex16q3',
                    texte: "2.b. Tracé de $D$ et $C$.",
                    solution: `<div id="graph-ch9ex16" class="graph-container" data-fn="x-2+exp(-x/2)" data-xmin="-4" data-xmax="5" data-colors="#2563eb,#dc2626" data-fn2="x-2"></div>`
                },
                {
                    id: 'ch9ex16q4',
                    texte: "3. Calcul de $\\lim_{\\lambda\\to+\\infty} A(\\lambda)$.",
                    solution: `<p>L'aire est limitée par $C$, $D$, $\\Delta:x=\\lambda$ et l'axe des ordonnées ($x=0$).</p>
                               <p>Sur $[0,\\lambda]$, $C$ est au-dessus de $D$ car $f(x) - (x-2) = e^{-x/2} > 0$.</p>
                               <p>Donc l'aire est :</p>
                               $$ A(\\lambda) = \\int_0^\\lambda \\left[f(x) - (x-2)\\right] dx = \\int_0^\\lambda e^{-x/2} dx. $$
                               $$ = \\left[-2e^{-x/2}\\right]_0^\\lambda = -2e^{-\\lambda/2} + 2. $$
                               <p>Quand $\\lambda\\to+\\infty$, $e^{-\\lambda/2} \\to 0$, donc :</p>
                               $$ \\lim_{\\lambda\\to+\\infty} A(\\lambda) = 2. $$
                               <p><strong>$\\boxed{2}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17 – Limites avec bases, comparaison, fonction impaire
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Calculer les limites ci-dessous :</p>
                      <ol>
                        <li>$\\lim_{x\\to+\\infty} (\\sqrt{3})^x$.</li>
                        <li>$\\lim_{x\\to+\\infty} \\left(\\dfrac{1}{2}\\right)^{1-x}$.</li>
                        <li>$\\lim_{x\\to+\\infty} \\dfrac{2^x}{2^{x^2+x}}$.</li>
                        <li>$\\lim_{x\\to-\\infty} \\left(\\dfrac{1}{4}\\right)^x - \\left(\\dfrac{1}{4}\\right)^{x+1}$.</li>
                        <li>$\\lim_{x\\to+\\infty} \\dfrac{3^x+3^{x+1}}{2^x+2^{x-1}}$.</li>
                        <li>$\\lim_{x\\to+\\infty} x^{\\frac{1}{3}} - x^{\\frac{2}{3}}$.</li>
                        <li>$\\lim_{x\\to+\\infty} \\dfrac{\\ln(x)}{2^x}$.</li>
                        <li>$\\lim_{x\\to+\\infty} x^{\\frac{1}{3}}e^{-x}$.</li>
                        <li>$\\lim_{x\\to0^+} \\left(x^{\\frac{2}{3}} - x^{\\frac{4}{3}}\\right)\\ln x$.</li>
                        <li>$\\lim_{x\\to+\\infty} 2^x - e^x$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex17q1',
                    texte: "1. $\\lim_{x\\to+\\infty} (\\sqrt{3})^x$",
                    solution: `<p>$\\sqrt{3} > 1$, donc $(\\sqrt{3})^x \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>`
                },
                {
                    id: 'ch9ex17q2',
                    texte: "2. $\\lim_{x\\to+\\infty} \\left(\\dfrac{1}{2}\\right)^{1-x}$",
                    solution: `<p>$\\left(\\dfrac{1}{2}\\right)^{1-x} = 2^{x-1} = \\dfrac{1}{2} \\cdot 2^x$.</p>
                               <p>Comme $2>1$, $2^x \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>`
                },
                {
                    id: 'ch9ex17q3',
                    texte: "3. $\\lim_{x\\to+\\infty} \\dfrac{2^x}{2^{x^2+x}}$",
                    solution: `<p>$\\dfrac{2^x}{2^{x^2+x}} = 2^{x - (x^2+x)} = 2^{-x^2}$.</p>
                               <p>Quand $x\\to+\\infty$, $-x^2 \\to -\\infty$, donc $2^{-x^2} \\to 0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                },
                {
                    id: 'ch9ex17q4',
                    texte: "4. $\\lim_{x\\to-\\infty} \\left(\\dfrac{1}{4}\\right)^x - \\left(\\dfrac{1}{4}\\right)^{x+1}$",
                    solution: `<p>$\\left(\\dfrac{1}{4}\\right)^x - \\left(\\dfrac{1}{4}\\right)^{x+1} = \\left(\\dfrac{1}{4}\\right)^x \\left(1 - \\dfrac{1}{4}\\right) = \\dfrac{3}{4}\\left(\\dfrac{1}{4}\\right)^x$.</p>
                               <p>Quand $x\\to-\\infty$, $\\left(\\dfrac{1}{4}\\right)^x = 4^{-x} \\to +\\infty$ (car $-x\\to+\\infty$).</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>`
                },
                {
                    id: 'ch9ex17q5',
                    texte: "5. $\\lim_{x\\to+\\infty} \\dfrac{3^x+3^{x+1}}{2^x+2^{x-1}}$",
                    solution: `<p>On factorise par $3^x$ au numérateur et $2^x$ au dénominateur :</p>
                               $$ \\dfrac{3^x(1+3)}{2^x(1+\\frac{1}{2})} = \\dfrac{4\\cdot 3^x}{\\frac{3}{2}\\cdot 2^x} = \\dfrac{8}{3}\\left(\\dfrac{3}{2}\\right)^x. $$
                               <p>Comme $\\dfrac{3}{2} > 1$, $\\left(\\dfrac{3}{2}\\right)^x \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>`
                },
                {
                    id: 'ch9ex17q6',
                    texte: "6. $\\lim_{x\\to+\\infty} x^{\\frac{1}{3}} - x^{\\frac{2}{3}}$",
                    solution: `<p>$x^{1/3} - x^{2/3} = x^{1/3}(1 - x^{1/3})$.</p>
                               <p>Quand $x\\to+\\infty$, $x^{1/3} \\to +\\infty$ et $1 - x^{1/3} \\to -\\infty$.</p>
                               <p>Le produit tend vers $-\\infty$.</p>
                               <p><strong>$\\boxed{-\\infty}$</strong></p>`
                },
                {
                    id: 'ch9ex17q7',
                    texte: "7. $\\lim_{x\\to+\\infty} \\dfrac{\\ln(x)}{2^x}$",
                    solution: `<p>Par croissance comparée, $2^x$ domine $\\ln x$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                },
                {
                    id: 'ch9ex17q8',
                    texte: "8. $\\lim_{x\\to+\\infty} x^{\\frac{1}{3}}e^{-x}$",
                    solution: `<p>$x^{1/3}e^{-x} = \\dfrac{x^{1/3}}{e^x}$.</p>
                               <p>Par croissance comparée, $e^x$ domine $x^{1/3}$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                },
                {
                    id: 'ch9ex17q9',
                    texte: "9. $\\lim_{x\\to0^+} \\left(x^{\\frac{2}{3}} - x^{\\frac{4}{3}}\\right)\\ln x$",
                    solution: `<p>$\\left(x^{2/3} - x^{4/3}\\right)\\ln x = x^{2/3}(1 - x^{2/3})\\ln x$.</p>
                               <p>Quand $x\\to0^+$, $x^{2/3}\\ln x \\to 0$ (car $x^\\alpha\\ln x \\to 0$ pour $\\alpha>0$).</p>
                               <p>Donc le produit tend vers $0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                },
                {
                    id: 'ch9ex17q10',
                    texte: "10. $\\lim_{x\\to+\\infty} 2^x - e^x$",
                    solution: `<p>On a $2^x - e^x = e^x\\left(\\left(\\dfrac{2}{e}\\right)^x - 1\\right)$.</p>
                               <p>Comme $\\dfrac{2}{e} < 1$, $\\left(\\dfrac{2}{e}\\right)^x \\to 0$, donc $\\left(\\dfrac{2}{e}\\right)^x - 1 \\to -1$.</p>
                               <p>$e^x \\to +\\infty$, donc le produit tend vers $-\\infty$.</p>
                               <p><strong>$\\boxed{-\\infty}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 9 (exercices 16 et 17) – Asymptote, aire, limites – ajoutée avec succès.");
})();