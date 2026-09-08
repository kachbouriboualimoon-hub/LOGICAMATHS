// data/chapitre8/part9.js – Exercices 18 et 19 (Études de fonctions, aire, volume)
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
        // EXERCICE 18 – Étude de g et f
        // ======================================================================
        {
            numero: 18,
            enonce: `<p><strong>A/</strong> Soit $g$ la fonction définie sur $]0,+\\infty[$ par $g(x) = 2x\\sqrt{x} - 3\\ln x + 6$.</p>
                      <ol>
                        <li>i. Étudier les variations de $g$ sur $]0,+\\infty[$.</li>
                        <li>ii. En déduire le signe de $g$ sur $]0,+\\infty[$.</li>
                      </ol>
                      <p><strong>B/</strong> Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = \\dfrac{3\\ln x}{\\sqrt{x}} + x - 1$.</p>
                      <ol>
                        <li>i. Déterminer les limites de $f$ en $0$ et $+\\infty$.</li>
                        <li>ii. Étudier les variations de $f$ sur $]0,+\\infty[$.</li>
                      </ol>
                      <ol>
                        <li>Montrer que $C$ admet une asymptote $D$ au voisinage de $+\\infty$ dont on donnera une équation. Étudier la position de $C$ et $D$. Tracer $C$ et $D$.</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // PARTIE A
                // ======================================================================
                {
                    id: 'ch8ex18q1',
                    texte: "A.1.i. Variations de $g$.",
                    solution: `<p><strong>Domaine :</strong> $D_g = ]0,+\\infty[$.</p>
                               <p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = 2\\cdot\\dfrac{3}{2}\\sqrt{x} - \\dfrac{3}{x} = 3\\sqrt{x} - \\dfrac{3}{x} = 3\\left(\\sqrt{x} - \\dfrac{1}{x}\\right) = \\dfrac{3(x\\sqrt{x} - 1)}{x}. $$
                               <p>Le signe de $g'$ est celui de $x\\sqrt{x} - 1 = x^{3/2} - 1$.</p>
                               <ul>
                                 <li>$x^{3/2} - 1 = 0$ ⇔ $x^{3/2} = 1$ ⇔ $x = 1$.</li>
                                 <li>Sur $]0,1[$, $x^{3/2} - 1 < 0$ ⇒ $g'(x) < 0$ ⇒ $g$ décroissante.</li>
                                 <li>Sur $]1,+\\infty[$, $x^{3/2} - 1 > 0$ ⇒ $g'(x) > 0$ ⇒ $g$ croissante.</li>
                               </ul>
                               <p>Calcul de $g(1) = 2\\cdot1\\cdot1 - 3\\ln 1 + 6 = 2 - 0 + 6 = 8$.</p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} g(x) = +\\infty$ (car $-3\\ln x \\to +\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} g(x) = +\\infty$ (car $2x\\sqrt{x}$ domine).</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$g'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$g(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$8$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex18q2',
                    texte: "A.1.ii. Signe de $g$.",
                    solution: `<p>Le minimum de $g$ est $g(1)=8>0$.</p>
                               <p>Donc <strong>$g(x) > 0$ pour tout $x>0$.</strong></p>`
                },
                // ======================================================================
                // PARTIE B
                // ======================================================================
                {
                    id: 'ch8ex18q3',
                    texte: "B.1.i. Limites de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = ]0,+\\infty[$.</p>
                               <p><strong>En $0^+$ :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\left(\\dfrac{3\\ln x}{\\sqrt{x}} + x - 1\\right). $$
                               <p>Quand $x\\to0^+$, $\\ln x \\to -\\infty$ et $\\dfrac{1}{\\sqrt{x}} \\to +\\infty$, donc $\\dfrac{3\\ln x}{\\sqrt{x}} \\to -\\infty$.</p>
                               <p>Donc <strong>$\\lim_{x\\to0^+} f(x) = -\\infty$.</strong></p>
                               <p><strong>En $+\\infty$ :</strong></p>
                               $$ \\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\left(\\dfrac{3\\ln x}{\\sqrt{x}} + x - 1\\right). $$
                               <p>$\\dfrac{3\\ln x}{\\sqrt{x}} \\to 0$ (croissance comparée), donc $f(x) \\sim x \\to +\\infty$.</p>
                               <p><strong>$\\lim_{x\\to+\\infty} f(x) = +\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex18q4',
                    texte: "B.1.ii. Variations de $f$.",
                    solution: `<p>$f$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ f'(x) = 3\\cdot\\dfrac{\\frac{1}{x}\\cdot\\sqrt{x} - \\ln x\\cdot\\frac{1}{2\\sqrt{x}}}{x} + 1 = 3\\cdot\\dfrac{\\frac{1}{\\sqrt{x}} - \\frac{\\ln x}{2\\sqrt{x}}}{x} + 1 = \\dfrac{3(2 - \\ln x)}{2x\\sqrt{x}} + 1. $$
                               <p>Réduisons au même dénominateur :</p>
                               $$ f'(x) = \\dfrac{3(2 - \\ln x) + 2x\\sqrt{x}}{2x\\sqrt{x}}. $$
                               <p>On reconnaît $g(x) = 2x\\sqrt{x} - 3\\ln x + 6$.</p>
                               <p>En effet, $2x\\sqrt{x} + 6 - 3\\ln x = g(x)$.</p>
                               <p>Donc $3(2 - \\ln x) + 2x\\sqrt{x} = 6 - 3\\ln x + 2x\\sqrt{x} = g(x)$.</p>
                               <p>Ainsi <strong>$f'(x) = \\dfrac{g(x)}{2x\\sqrt{x}}$</strong>.</p>
                               <p>Comme $g(x) > 0$ pour tout $x>0$ (d'après la partie A), $f'(x) > 0$ pour tout $x>0$.</p>
                               <p><strong>$f$ est strictement croissante sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex18q5',
                    texte: "2. Asymptote oblique de $f$.",
                    solution: `<p>On a $f(x) = x - 1 + \\dfrac{3\\ln x}{\\sqrt{x}}$.</p>
                               <p>Quand $x\\to+\\infty$, $\\dfrac{3\\ln x}{\\sqrt{x}} \\to 0$.</p>
                               <p>Donc $f(x) - (x - 1) = \\dfrac{3\\ln x}{\\sqrt{x}} \\to 0$.</p>
                               <p><strong>$D: y = x - 1$ est asymptote oblique.</strong></p>
                               <p>Position : $f(x) - (x - 1) = \\dfrac{3\\ln x}{\\sqrt{x}}$.</p>
                               <ul>
                                 <li>Pour $x>1$, $\\ln x > 0$ ⇒ $f(x) - (x-1) > 0$ ⇒ $C$ au-dessus de $D$.</li>
                                 <li>Pour $0<x<1$, $\\ln x < 0$ ⇒ $f(x) - (x-1) < 0$ ⇒ $C$ en dessous de $D$.</li>
                               </ul>
                               <div id="graph-ch8ex18" class="graph-container" data-fn="3*log(x)/sqrt(x)+x-1" data-xmin="0" data-xmax="10" data-colors="#2563eb,#dc2626" data-fn2="x-1"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19 – f(x) = (1 - ln x)/x
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = \\dfrac{1 - \\ln x}{x}$. On note $C_f$ sa courbe dans un repère orthonormé.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Tracer $C_f$.</li>
                        <li>Calculer l'aire de la partie du plan limitée par $C_f$, l'axe des abscisses et les droites $x=1$ et $x=e$.</li>
                        <li>Soit $\\mathcal{C} = \\{M(x,y) \\mid y = f(x) \\text{ et } 1 \\le x \\le e\\}$ et $S$ le solide obtenu par rotation de $\\mathcal{C}$ autour de l'axe $(Ox)$.</li>
                        <li>i. À l'aide d'une intégration par parties, calculer $\\displaystyle\\int_1^e \\dfrac{\\ln x}{x^2} dx$ puis $\\displaystyle\\int_1^e \\dfrac{\\ln^2 x}{x^2} dx$.</li>
                        <li>ii. En déduire le volume de $S$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex19q1',
                    texte: "1. Variations de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = ]0,+\\infty[$.</p>
                               <p>$f$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ f'(x) = \\dfrac{-\\frac{1}{x}\\cdot x - (1 - \\ln x)}{x^2} = \\dfrac{-1 - 1 + \\ln x}{x^2} = \\dfrac{\\ln x - 2}{x^2}. $$
                               <p>Le signe de $f'$ est celui de $\\ln x - 2$.</p>
                               <ul>
                                 <li>Sur $]0,e^2[$, $\\ln x - 2 < 0$ ⇒ $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]e^2,+\\infty[$, $\\ln x - 2 > 0$ ⇒ $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x=e^2$ : $f(e^2) = \\dfrac{1 - 2}{e^2} = -\\dfrac{1}{e^2}$.</p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $1-\\ln x \\to +\\infty$, $1/x \\to +\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = 0^-$ (car $\\ln x$ domine $1$ mais $x$ domine $\\ln x$).</li>
                               </ul>
                               <p>Asymptote horizontale $y=0$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$e^2$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\searrow$</td><td>$-\\dfrac{1}{e^2}$</td><td>$\\nearrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex19q2',
                    texte: "2. Tracé de $C_f$.",
                    solution: `<div id="graph-ch8ex19" class="graph-container" data-fn="(1-log(x))/x" data-xmin="0" data-xmax="10" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch8ex19q3',
                    texte: "3. Aire entre $x=1$ et $x=e$.",
                    solution: `<p>Sur $[1,e]$, $\\ln x \\le 1$, donc $f(x) = \\dfrac{1 - \\ln x}{x} \\ge 0$.</p>
                               <p>L'aire est $A = \\displaystyle\\int_1^e f(x) dx$.</p>
                               <p>On a $f(x) = \\dfrac{1}{x} - \\dfrac{\\ln x}{x}$.</p>
                               <p>Une primitive de $\\dfrac{1}{x}$ est $\\ln x$.</p>
                               <p>Une primitive de $\\dfrac{\\ln x}{x}$ est $\\dfrac{(\\ln x)^2}{2}$.</p>
                               <p>Donc $\\displaystyle\\int \\dfrac{1 - \\ln x}{x} dx = \\ln x - \\dfrac{(\\ln x)^2}{2}$.</p>
                               <p>D'où :</p>
                               $$ A = \\left[\\ln x - \\dfrac{(\\ln x)^2}{2}\\right]_1^e = \\left(1 - \\dfrac{1}{2}\\right) - (0 - 0) = \\dfrac{1}{2}. $$
                               <p><strong>$A = \\dfrac{1}{2}$ u.a.</strong></p>`
                },
                {
                    id: 'ch8ex19q4',
                    texte: "4.i. Calcul de $\\int_1^e \\dfrac{\\ln x}{x^2} dx$.",
                    solution: `<p>On intègre par parties avec $u = \\ln x$ et $v' = \\dfrac{1}{x^2}$.</p>
                               $$ \\begin{cases} u = \\ln x \\\\ v' = \\dfrac{1}{x^2} \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{1}{x} \\\\ v = -\\dfrac{1}{x} \\end{cases} $$
                               $$ \\int_1^e \\dfrac{\\ln x}{x^2} dx = \\left[-\\dfrac{\\ln x}{x}\\right]_1^e + \\int_1^e \\dfrac{1}{x^2} dx = \\left[-\\dfrac{\\ln x}{x} - \\dfrac{1}{x}\\right]_1^e. $$
                               <p>En $x=e$ : $-\\dfrac{1}{e} - \\dfrac{1}{e} = -\\dfrac{2}{e}$.</p>
                               <p>En $x=1$ : $-0 - 1 = -1$.</p>
                               <p>Donc l'intégrale vaut $-\\dfrac{2}{e} - (-1) = 1 - \\dfrac{2}{e}$.</p>
                               <p><strong>$\\displaystyle\\int_1^e \\dfrac{\\ln x}{x^2} dx = 1 - \\dfrac{2}{e}$.</strong></p>`
                },
                {
                    id: 'ch8ex19q5',
                    texte: "4.i. Calcul de $\\int_1^e \\dfrac{\\ln^2 x}{x^2} dx$.",
                    solution: `<p>On intègre par parties avec $u = \\ln^2 x$ et $v' = \\dfrac{1}{x^2}$.</p>
                               $$ \\begin{cases} u = \\ln^2 x \\\\ v' = \\dfrac{1}{x^2} \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{2\\ln x}{x} \\\\ v = -\\dfrac{1}{x} \\end{cases} $$
                               $$ \\int_1^e \\dfrac{\\ln^2 x}{x^2} dx = \\left[-\\dfrac{\\ln^2 x}{x}\\right]_1^e + 2\\int_1^e \\dfrac{\\ln x}{x^2} dx. $$
                               <p>Premier terme : $-\\dfrac{1}{e} - 0 = -\\dfrac{1}{e}$.</p>
                               <p>Deuxième terme : $2\\left(1 - \\dfrac{2}{e}\\right) = 2 - \\dfrac{4}{e}$.</p>
                               <p>Donc l'intégrale vaut $-\\dfrac{1}{e} + 2 - \\dfrac{4}{e} = 2 - \\dfrac{5}{e}$.</p>
                               <p><strong>$\\displaystyle\\int_1^e \\dfrac{\\ln^2 x}{x^2} dx = 2 - \\dfrac{5}{e}$.</strong></p>`
                },
                {
                    id: 'ch8ex19q6',
                    texte: "4.ii. Volume du solide de révolution.",
                    solution: `<p>Le volume est $V = \\pi\\displaystyle\\int_1^e [f(x)]^2 dx$.</p>
                               $$ [f(x)]^2 = \\dfrac{(1 - \\ln x)^2}{x^2} = \\dfrac{1 - 2\\ln x + \\ln^2 x}{x^2} = \\dfrac{1}{x^2} - \\dfrac{2\\ln x}{x^2} + \\dfrac{\\ln^2 x}{x^2}. $$
                               <p>Donc :</p>
                               $$ \\int_1^e [f(x)]^2 dx = \\left[-\\dfrac{1}{x}\\right]_1^e - 2\\int_1^e \\dfrac{\\ln x}{x^2} dx + \\int_1^e \\dfrac{\\ln^2 x}{x^2} dx. $$
                               <p>Premier terme : $-\\dfrac{1}{e} - (-1) = 1 - \\dfrac{1}{e}$.</p>
                               <p>Deuxième terme : $-2\\left(1 - \\dfrac{2}{e}\\right) = -2 + \\dfrac{4}{e}$.</p>
                               <p>Troisième terme : $2 - \\dfrac{5}{e}$.</p>
                               <p>Somme : $\\left(1 - \\dfrac{1}{e}\\right) + \\left(-2 + \\dfrac{4}{e}\\right) + \\left(2 - \\dfrac{5}{e}\\right) = 1 - \\dfrac{2}{e}$.</p>
                               <p>Donc $V = \\pi\\left(1 - \\dfrac{2}{e}\\right)$.</p>
                               <p><strong>$V = \\pi\\left(1 - \\dfrac{2}{e}\\right)$ u.v.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 9 (exercices 18 et 19) – Études de fonctions, aire, volume – ajoutée avec succès.");
})();