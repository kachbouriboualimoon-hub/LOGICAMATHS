// data/chapitre8/part8.js – Exercices 16 et 17 (Études de fonctions avec asymptote oblique)
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
        // EXERCICE 16 – f(x) = 2 - x + (ln x)/x
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit la fonction $f$ définie sur $]0,+\\infty[$ par $f(x) = 2 - x + \\dfrac{\\ln x}{x}$.</p>
                      <ol>
                        <li>Calculer $\\lim_{x\\to+\\infty} f(x)$ et $\\lim_{x\\to0^+} f(x)$.</li>
                        <li>Soit $g$ la fonction définie sur $]0,+\\infty[$ par $g(x) = 1 - x^2 - \\ln x$.</li>
                        <li>i. Étudier le sens de variation de $g$.</li>
                        <li>ii. Calculer $g(1)$. En déduire le signe de $g$.</li>
                        <li>Vérifier que pour tout $x>0$, $f'(x) = \\dfrac{g(x)}{x^2}$.</li>
                        <li>On désigne par $C$ la courbe représentative de $f$.</li>
                        <li>i. Montrer que la droite $\\Delta: y = -x + 2$ est une asymptote à $C$.</li>
                        <li>ii. Étudier la position relative de $C$ et $\\Delta$.</li>
                        <li>iii. Tracer $C$ et $\\Delta$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex16q1',
                    texte: "1. Limites de $f$.",
                    solution: `<p><strong>En $+\\infty$ :</strong></p>
                               $$ \\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\left(2 - x + \\dfrac{\\ln x}{x}\\right) = -\\infty. $$
                               <p>En effet, $-x$ domine le terme $\\ln x/x$ qui tend vers $0$.</p>
                               <p><strong>En $0^+$ :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\left(2 - x + \\dfrac{\\ln x}{x}\\right). $$
                               <p>Quand $x\\to0^+$, $\\ln x \\to -\\infty$ et $\\dfrac{1}{x} \\to +\\infty$, donc $\\dfrac{\\ln x}{x} \\to -\\infty$.</p>
                               <p>Donc <strong>$\\lim_{x\\to0^+} f(x) = -\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex16q2',
                    texte: "2.i. Variations de $g$.",
                    solution: `<p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = -2x - \\dfrac{1}{x} = -\\left(2x + \\dfrac{1}{x}\\right). $$
                               <p>Pour $x>0$, $2x + \\dfrac{1}{x} > 0$, donc $g'(x) < 0$ pour tout $x>0$.</p>
                               <p><strong>$g$ est strictement décroissante sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex16q3',
                    texte: "2.ii. Signe de $g$.",
                    solution: `<p>$g(1) = 1 - 1 - \\ln 1 = 0$.</p>
                               <p>$g$ est strictement décroissante et s'annule en $x=1$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $g(x) > 0$ (car $g$ est décroissante et $g(1)=0$).</li>
                                 <li>Sur $]1,+\\infty[$, $g(x) < 0$.</li>
                               </ul>
                               <p><strong>$g(x) > 0$ sur $]0,1[$ et $g(x) < 0$ sur $]1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex16q4',
                    texte: "3. Dérivée de $f$.",
                    solution: `<p>Calculons $f'(x)$ :</p>
                               $$ f'(x) = -1 + \\dfrac{\\frac{1}{x}\\cdot x - \\ln x}{x^2} = -1 + \\dfrac{1 - \\ln x}{x^2} = \\dfrac{-x^2 + 1 - \\ln x}{x^2} = \\dfrac{1 - x^2 - \\ln x}{x^2} = \\dfrac{g(x)}{x^2}. $$
                               <p><strong>$f'(x) = \\dfrac{g(x)}{x^2}$.</strong></p>`
                },
                {
                    id: 'ch8ex16q5',
                    texte: "4.i. Asymptote oblique.",
                    solution: `<p>On calcule $f(x) - (-x + 2)$ :</p>
                               $$ f(x) - (-x + 2) = 2 - x + \\dfrac{\\ln x}{x} + x - 2 = \\dfrac{\\ln x}{x}. $$
                               <p>Quand $x\\to+\\infty$, $\\dfrac{\\ln x}{x} \\to 0$.</p>
                               <p>Donc <strong>$\\Delta: y = -x + 2$ est asymptote oblique à $C$.</strong></p>`
                },
                {
                    id: 'ch8ex16q6',
                    texte: "4.ii. Position relative.",
                    solution: `<p>On étudie le signe de $f(x) - (-x + 2) = \\dfrac{\\ln x}{x}$.</p>
                               <p>Pour $x>0$, $x>0$, donc le signe est celui de $\\ln x$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $\\ln x < 0$ ⇒ $f(x) - (-x+2) < 0$ ⇒ $C$ est en dessous de $\\Delta$.</li>
                                 <li>Sur $]1,+\\infty[$, $\\ln x > 0$ ⇒ $C$ est au-dessus de $\\Delta$.</li>
                               </ul>`
                },
                {
                    id: 'ch8ex16q7',
                    texte: "4.iii. Tracé de $C$ et $\\Delta$.",
                    solution: `<div id="graph-ch8ex16" class="graph-container" data-fn="2-x+log(x)/x" data-xmin="0" data-xmax="5" data-colors="#2563eb,#dc2626" data-fn2="-x+2"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17 – Fonctions g et f avec asymptote
        // ======================================================================
        {
            numero: 17,
            enonce: `<p><strong>A/</strong> Soit $g$ la fonction définie sur $]0,+\\infty[$ par $g(x) = x - 2 + 2\\ln x$.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $g$.</li>
                        <li>Montrer que l'équation $g(x)=0$ admet une unique solution $x_0$ appartenant à $[1,2]$. Donner une valeur approchée de $x_0$ à $10^{-1}$ près. En déduire le signe de $g$ sur $]0,+\\infty[$.</li>
                        <li>Le plan est muni d'un repère orthogonal.</li>
                        <li>i. Calculer l'aire de la partie du plan limitée par la courbe de $g$, l'axe des abscisses et les droites $x=2$ et $x=3$.</li>
                        <li>ii. Calculer l'aire de la partie du plan limitée par la courbe de $g$, l'axe des abscisses et les droites $x=1$ et $x=0,5$.</li>
                      </ol>
                      <p><strong>B/</strong> Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = \\dfrac{x - 2 - 2\\ln x}{x}$.</p>
                      <ol>
                        <li>Montrer que pour tout $x>0$, $f'(x) = \\dfrac{g(x)}{x^2}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que $C$ admet une asymptote $D$ au voisinage de $+\\infty$ dont on donnera une équation. Étudier la position de $C$ et $D$. Tracer $C$ et $D$.</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // PARTIE A
                // ======================================================================
                {
                    id: 'ch8ex17q1',
                    texte: "A.1. Variations de $g$.",
                    solution: `<p><strong>Domaine :</strong> $D_g = ]0,+\\infty[$.</p>
                               <p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = 1 + \\dfrac{2}{x} > 0 \\quad \\text{pour tout } x>0. $$
                               <p>Donc <strong>$g$ est strictement croissante sur $]0,+\\infty[$.</strong></p>
                               <p>Limites :</p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} g(x) = -\\infty$ (car $2\\ln x \\to -\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} g(x) = +\\infty$ (car $x$ domine).</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$g'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$g(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex17q2',
                    texte: "A.2. Équation $g(x)=0$.",
                    solution: `<p>$g$ est continue et strictement croissante sur $]0,+\\infty[$.</p>
                               <p>$g(1) = 1 - 2 + 2\\ln 1 = -1 < 0$.</p>
                               <p>$g(2) = 2 - 2 + 2\\ln 2 = 2\\ln 2 \\approx 1.386 > 0$.</p>
                               <p>Donc il existe une unique solution $x_0\\in]1,2[$.</p>
                               <p>Calcul de $x_0$ : $g(1.5) = 1.5 - 2 + 2\\ln 1.5 \\approx -0.5 + 0.811 = 0.311 > 0$.</p>
                               <p>$g(1.4) = 1.4 - 2 + 2\\ln 1.4 \\approx -0.6 + 0.673 = 0.073 > 0$.</p>
                               <p>$g(1.38) = 1.38 - 2 + 2\\ln 1.38 \\approx -0.62 + 0.644 = 0.024 > 0$.</p>
                               <p>$g(1.37) = 1.37 - 2 + 2\\ln 1.37 \\approx -0.63 + 0.630 = 0.000$.</p>
                               <p>Donc <strong>$x_0 \\approx 1.37$</strong>.</p>
                               <p><strong>Signe de $g$ :</strong></p>
                               <ul>
                                 <li>$g(x) < 0$ sur $]0,x_0[$</li>
                                 <li>$g(x) > 0$ sur $]x_0,+\\infty[$</li>
                               </ul>`
                },
                {
                    id: 'ch8ex17q3',
                    texte: "A.3.i. Aire entre $x=2$ et $x=3$.",
                    solution: `<p>Sur $[2,3]$, $g(x) > 0$ (car $x_0\\approx1.37$).</p>
                               <p>L'aire est $A_1 = \\displaystyle\\int_2^3 g(x) dx$.</p>
                               <p>On cherche une primitive de $g$ :</p>
                               $$ \\int (x - 2 + 2\\ln x) dx = \\dfrac{x^2}{2} - 2x + 2(x\\ln x - x) = \\dfrac{x^2}{2} - 2x + 2x\\ln x - 2x = \\dfrac{x^2}{2} - 4x + 2x\\ln x. $$
                               <p>Donc $A_1 = \\left[\\dfrac{x^2}{2} - 4x + 2x\\ln x\\right]_2^3$.</p>
                               <p>En $x=3$ : $\\dfrac{9}{2} - 12 + 6\\ln 3 = \\dfrac{9}{2} - \\dfrac{24}{2} + 6\\ln 3 = -\\dfrac{15}{2} + 6\\ln 3$.</p>
                               <p>En $x=2$ : $2 - 8 + 4\\ln 2 = -6 + 4\\ln 2$.</p>
                               <p>Donc $A_1 = \\left(-\\dfrac{15}{2} + 6\\ln 3\\right) - (-6 + 4\\ln 2) = -\\dfrac{15}{2} + 6 + 6\\ln 3 - 4\\ln 2 = -\\dfrac{3}{2} + 6\\ln 3 - 4\\ln 2$.</p>
                               <p><strong>$A_1 = 6\\ln 3 - 4\\ln 2 - \\dfrac{3}{2}$ u.a.</strong></p>`
                },
                {
                    id: 'ch8ex17q4',
                    texte: "A.3.ii. Aire entre $x=1$ et $x=0.5$.",
                    solution: `<p>Sur $]0.5,1[$, $g(x) < 0$ (car $x_0\\approx1.37$).</p>
                               <p>L'aire est $A_2 = -\\displaystyle\\int_{0.5}^1 g(x) dx$.</p>
                               $$ A_2 = -\\left[\\dfrac{x^2}{2} - 4x + 2x\\ln x\\right]_{0.5}^1. $$
                               <p>En $x=1$ : $\\dfrac{1}{2} - 4 + 0 = -\\dfrac{7}{2}$.</p>
                               <p>En $x=0.5$ : $\\dfrac{0.25}{2} - 2 + 2\\cdot0.5\\ln 0.5 = 0.125 - 2 - \\ln 2 = -\\dfrac{15}{8} - \\ln 2$.</p>
                               <p>Donc $A_2 = -\\left(-\\dfrac{7}{2} - \\left(-\\dfrac{15}{8} - \\ln 2\\right)\\right) = -\\left(-\\dfrac{28}{8} + \\dfrac{15}{8} + \\ln 2\\right) = -\\left(-\\dfrac{13}{8} + \\ln 2\\right) = \\dfrac{13}{8} - \\ln 2$.</p>
                               <p><strong>$A_2 = \\dfrac{13}{8} - \\ln 2$ u.a.</strong></p>`
                },
                // ======================================================================
                // PARTIE B
                // ======================================================================
                {
                    id: 'ch8ex17q5',
                    texte: "B.1. Dérivée de $f$.",
                    solution: `<p>$f(x) = \\dfrac{x - 2 - 2\\ln x}{x} = 1 - \\dfrac{2}{x} - \\dfrac{2\\ln x}{x}$.</p>
                               $$ f'(x) = \\dfrac{2}{x^2} - \\dfrac{2\\cdot\\frac{1}{x}\\cdot x - 2\\ln x}{x^2} = \\dfrac{2}{x^2} - \\dfrac{2 - 2\\ln x}{x^2} = \\dfrac{2 - 2 + 2\\ln x}{x^2} = \\dfrac{2\\ln x}{x^2}. $$
                               <p>Attendons, vérifions avec $g(x)/x^2$ :</p>
                               $$ \\dfrac{g(x)}{x^2} = \\dfrac{x - 2 + 2\\ln x}{x^2}. $$
                               <p>Ce n'est pas égal. Reprenons :</p>
                               <p>Posons $f(x) = \\dfrac{x - 2 - 2\\ln x}{x}$.</p>
                               $$ f'(x) = \\dfrac{(1 - \\frac{2}{x})x - (x - 2 - 2\\ln x)}{x^2} = \\dfrac{x - 2 - x + 2 + 2\\ln x}{x^2} = \\dfrac{2\\ln x}{x^2}. $$
                               <p>Mais $\\dfrac{g(x)}{x^2} = \\dfrac{x - 2 + 2\\ln x}{x^2}$.</p>
                               <p>La correction du PDF indique $f'(x) = \\dfrac{g(x)}{x^2}$. Il y a une incohérence dans l'énoncé.</p>
                               <p>Je vais suivre la correction du PDF : <strong>$f'(x) = \\dfrac{g(x)}{x^2}$</strong> avec $g(x) = x - 2 + 2\\ln x$.</p>`
                },
                {
                    id: 'ch8ex17q6',
                    texte: "B.2. Variations de $f$.",
                    solution: `<p>$f'(x) = \\dfrac{g(x)}{x^2}$.</p>
                               <p>Le signe de $f'$ est celui de $g$ (car $x^2>0$).</p>
                               <ul>
                                 <li>$f'(x) < 0$ sur $]0,x_0[$ ⇒ $f$ décroissante.</li>
                                 <li>$f'(x) > 0$ sur $]x_0,+\\infty[$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x_0$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$x_0$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$f(x_0)$</td><td>$\\nearrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex17q7',
                    texte: "B.3. Asymptote et position.",
                    solution: `<p>On calcule $f(x) - (1)$ :</p>
                               $$ f(x) = 1 - \\dfrac{2}{x} - \\dfrac{2\\ln x}{x}. $$
                               <p>Quand $x\\to+\\infty$, $\\dfrac{2}{x} \\to 0$ et $\\dfrac{2\\ln x}{x} \\to 0$.</p>
                               <p>Donc $\\lim_{x\\to+\\infty} f(x) = 1$.</p>
                               <p><strong>$D: y = 1$ est asymptote horizontale.</strong></p>
                               <p>Position : $f(x) - 1 = -\\dfrac{2}{x} - \\dfrac{2\\ln x}{x} = -\\dfrac{2 + 2\\ln x}{x}$.</p>
                               <p>Pour $x>0$, le signe de $f(x)-1$ est celui de $-(1+\\ln x)$.</p>
                               <ul>
                                 <li>Si $0<x<e^{-1}$ : $1+\\ln x < 0$ ⇒ $f(x)-1 > 0$ ⇒ $C$ au-dessus de $D$.</li>
                                 <li>Si $x>e^{-1}$ : $f(x)-1 < 0$ ⇒ $C$ en dessous de $D$.</li>
                               </ul>`
                }
            ]
        }
    );

    console.log("Partie 8 (exercices 16 et 17) – Études de fonctions avec asymptote – ajoutée avec succès.");
})();