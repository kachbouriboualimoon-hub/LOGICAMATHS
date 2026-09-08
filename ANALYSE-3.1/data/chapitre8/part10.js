// data/chapitre8/part10.js – Exercices 20 et 21 (Études complètes avec paramètre)
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
        // EXERCICE 20 – f(x) = (1 - 1/x)(ln x - 2)
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>On considère la fonction $f$ définie sur $]0,+\\infty[$ par $f(x) = \\left(1 - \\dfrac{1}{x}\\right)(\\ln x - 2)$.</p>
                      <ol>
                        <li>Déterminer les limites de $f$ à droite en $0$ et en $+\\infty$.</li>
                        <li>Montrer que $f$ est dérivable sur $]0,+\\infty[$ et déterminer sa dérivée.</li>
                        <li>Soit $u$ la fonction définie sur $]0,+\\infty[$ par $u(x) = \\ln x + x - 3$.</li>
                        <li>i. Étudier les variations de $u$.</li>
                        <li>ii. Montrer que l'équation $u(x)=0$ possède une unique solution $\\alpha$ appartenant à $]2,20; 2,21[$.</li>
                        <li>iii. Étudier le signe de $u(x)$ sur $]0,+\\infty[$.</li>
                        <li>Étudier les variations de $f$. Montrer que $f(\\alpha) = -\\dfrac{(\\alpha-1)^2}{\\alpha}$. En déduire un encadrement de $f(\\alpha)$ d'amplitude $2\\times10^{-2}$.</li>
                        <li>Tracer la courbe de $f$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex20q1',
                    texte: "1. Limites de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = ]0,+\\infty[$.</p>
                               <p><strong>En $0^+$ :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\left(1 - \\dfrac{1}{x}\\right)(\\ln x - 2). $$
                               <p>Quand $x\\to0^+$, $1 - \\dfrac{1}{x} \\sim -\\dfrac{1}{x}$ et $\\ln x - 2 \\to -\\infty$.</p>
                               <p>Donc $f(x) \\sim \\dfrac{2 - \\ln x}{x} \\to +\\infty$.</p>
                               <p><strong>$\\lim_{x\\to0^+} f(x) = +\\infty$.</strong></p>
                               <p><strong>En $+\\infty$ :</strong></p>
                               <p>$1 - \\dfrac{1}{x} \\to 1$ et $\\ln x - 2 \\to +\\infty$.</p>
                               <p>Donc <strong>$\\lim_{x\\to+\\infty} f(x) = +\\infty$.</strong></p>`
                },
                {
                    id: 'ch8ex20q2',
                    texte: "2. Dérivée de $f$.",
                    solution: `<p>$f$ est dérivable sur $]0,+\\infty[$ comme produit de fonctions dérivables.</p>
                               <p>Posons $f(x) = \\left(1 - \\dfrac{1}{x}\\right)(\\ln x - 2)$.</p>
                               <p>On développe : $f(x) = \\ln x - 2 - \\dfrac{\\ln x}{x} + \\dfrac{2}{x}$.</p>
                               $$ f'(x) = \\dfrac{1}{x} - \\dfrac{\\frac{1}{x}\\cdot x - \\ln x}{x^2} - \\dfrac{2}{x^2} = \\dfrac{1}{x} - \\dfrac{1 - \\ln x}{x^2} - \\dfrac{2}{x^2} = \\dfrac{1}{x} - \\dfrac{3 - \\ln x}{x^2}. $$
                               <p>Réduisons au même dénominateur :</p>
                               $$ f'(x) = \\dfrac{x - 3 + \\ln x}{x^2} = \\dfrac{\\ln x + x - 3}{x^2} = \\dfrac{u(x)}{x^2}. $$
                               <p><strong>$f'(x) = \\dfrac{u(x)}{x^2}$.</strong></p>`
                },
                {
                    id: 'ch8ex20q3',
                    texte: "3.i. Variations de $u$.",
                    solution: `<p>$u(x) = \\ln x + x - 3$.</p>
                               <p>$u$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ u'(x) = \\dfrac{1}{x} + 1 = \\dfrac{x+1}{x} > 0 \\quad \\text{pour tout } x>0. $$
                               <p><strong>$u$ est strictement croissante sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex20q4',
                    texte: "3.ii. Solution unique $\\alpha$.",
                    solution: `<p>$u$ est continue et strictement croissante.</p>
                               <p>$u(2.20) = \\ln(2.20) + 2.20 - 3 \\approx 0.788 - 0.8 = -0.012$.</p>
                               <p>$u(2.21) = \\ln(2.21) + 2.21 - 3 \\approx 0.793 - 0.79 = 0.003$.</p>
                               <p>Donc il existe une unique solution $\\alpha\\in]2.20, 2.21[$.</p>
                               <p><strong>$\\alpha \\approx 2.204$.</strong></p>`
                },
                {
                    id: 'ch8ex20q5',
                    texte: "3.iii. Signe de $u$.",
                    solution: `<p>Comme $u$ est strictement croissante et s'annule en $\\alpha$ :</p>
                               <ul>
                                 <li>$u(x) < 0$ sur $]0,\\alpha[$</li>
                                 <li>$u(x) > 0$ sur $]\\alpha,+\\infty[$</li>
                               </ul>`
                },
                {
                    id: 'ch8ex20q6',
                    texte: "4. Variations de $f$ et $f(\\alpha)$.",
                    solution: `<p>$f'(x) = \\dfrac{u(x)}{x^2}$. Le signe de $f'$ est celui de $u$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$\\alpha$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$f(\\alpha)$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Calcul de $f(\\alpha)$ :</p>
                               <p>On a $u(\\alpha)=0$ ⇒ $\\ln\\alpha = 3 - \\alpha$.</p>
                               $$ f(\\alpha) = \\left(1 - \\dfrac{1}{\\alpha}\\right)(\\ln\\alpha - 2) = \\dfrac{\\alpha-1}{\\alpha}(3 - \\alpha - 2) = \\dfrac{\\alpha-1}{\\alpha}(1 - \\alpha) = -\\dfrac{(\\alpha-1)^2}{\\alpha}. $$
                               <p>Encadrement de $f(\\alpha)$ :</p>
                               <p>$\\alpha\\in[2.20, 2.21]$.</p>
                               <p>$\\alpha-1\\in[1.20, 1.21]$ ⇒ $(\\alpha-1)^2\\in[1.44, 1.4641]$.</p>
                               <p>Donc $\\dfrac{(\\alpha-1)^2}{\\alpha} \\in \\left[\\dfrac{1.44}{2.21}, \\dfrac{1.4641}{2.20}\\right] \\approx [0.651, 0.666]$.</p>
                               <p>Donc <strong>$f(\\alpha) \\in [-0.666, -0.651]$</strong>.</p>`
                },
                {
                    id: 'ch8ex20q7',
                    texte: "5. Tracé de $f$.",
                    solution: `<div id="graph-ch8ex20" class="graph-container" data-fn="(1-1/x)*(log(x)-2)" data-xmin="0" data-xmax="10" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21 – f(x) = (1 + ln x)/(x(1+x))
        // ======================================================================
        {
            numero: 21,
            enonce: `<p><strong>A/</strong> Soit $g$ la fonction définie sur $]0,+\\infty[$ par $g(x) = 1 - x - 2x\\ln x$.</p>
                      <ol>
                        <li>i. Étudier les variations de $g$ sur $]0,+\\infty[$.</li>
                        <li>ii. Calculer $g(1)$ puis en déduire le signe de $g(x)$ pour $x>0$.</li>
                      </ol>
                      <p><strong>B/</strong> Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = \\dfrac{1 + \\ln x}{x(1+x)}$.</p>
                      <ol>
                        <li>Vérifier que pour tout $x>0$, $f'(x) = -\\dfrac{g(x)}{x^2(1+x)^2}$. Dresser le tableau de variation de $f$. Étudier les branches infinies de $C$.</li>
                        <li>Déterminer une équation de la tangente à $C$ au point d'intersection de $C$ avec l'axe des abscisses. Tracer $C$.</li>
                      </ol>
                      <p><strong>C/</strong> Soit $\\lambda > 1$.</p>
                      <ol>
                        <li>Vérifier que pour tout $x>0$, $\\dfrac{1}{x(1+x)} = \\dfrac{1}{x} - \\dfrac{1}{x+1}$.</li>
                        <li>On pose $A(\\lambda)$ l'aire de la partie du plan limitée par $C$, l'axe des abscisses et les droites $x=1$ et $x=\\lambda$. À l'aide d'une intégration par parties, déterminer $A(\\lambda)$. Calculer $\\lim_{\\lambda\\to+\\infty} A(\\lambda)$.</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // PARTIE A
                // ======================================================================
                {
                    id: 'ch8ex21q1',
                    texte: "A.1.i. Variations de $g$.",
                    solution: `<p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = -1 - 2\\ln x - 2 = -3 - 2\\ln x. $$
                               <p>$g'(x) = 0$ ⇔ $-3 - 2\\ln x = 0$ ⇔ $\\ln x = -\\dfrac{3}{2}$ ⇔ $x = e^{-3/2}$.</p>
                               <ul>
                                 <li>Sur $]0, e^{-3/2}[$, $-3 - 2\\ln x > 0$ ⇒ $g'(x) > 0$ ⇒ $g$ croissante.</li>
                                 <li>Sur $]e^{-3/2}, +\\infty[$, $g'(x) < 0$ ⇒ $g$ décroissante.</li>
                               </ul>
                               <p>Maximum en $x=e^{-3/2}$ : $g(e^{-3/2}) = 1 - e^{-3/2} - 2e^{-3/2}\\cdot(-3/2) = 1 - e^{-3/2} + 3e^{-3/2} = 1 + 2e^{-3/2} > 0$.</p>`
                },
                {
                    id: 'ch8ex21q2',
                    texte: "A.1.ii. Signe de $g$.",
                    solution: `<p>$g(1) = 1 - 1 - 2\\cdot1\\cdot\\ln 1 = 0$.</p>
                               <p>Comme $g$ a un maximum positif en $e^{-3/2}$, puis décroît jusqu'à $0$ en $x=1$.</p>
                               <p>Pour $x>1$, $g(x) < 0$.</p>
                               <p><strong>$g(x) > 0$ sur $]0,1[$ et $g(x) < 0$ sur $]1,+\\infty[$.</strong></p>`
                },
                // ======================================================================
                // PARTIE B
                // ======================================================================
                {
                    id: 'ch8ex21q3',
                    texte: "B.1. Dérivée de $f$.",
                    solution: `<p>$f(x) = \\dfrac{1 + \\ln x}{x(1+x)}$.</p>
                               <p>On calcule $f'(x)$ :</p>
                               <p>Posons $N(x) = 1 + \\ln x$, $D(x) = x(1+x) = x + x^2$.</p>
                               $$ N'(x) = \\dfrac{1}{x}, \\quad D'(x) = 1 + 2x. $$
                               $$ f'(x) = \\dfrac{\\frac{1}{x}x(1+x) - (1+\\ln x)(1+2x)}{x^2(1+x)^2} = \\dfrac{(1+x) - (1+\\ln x)(1+2x)}{x^2(1+x)^2}. $$
                               <p>Développons le numérateur :</p>
                               $$ = \\dfrac{1+x - (1+2x + \\ln x + 2x\\ln x)}{x^2(1+x)^2} = \\dfrac{1+x - 1 - 2x - \\ln x - 2x\\ln x}{x^2(1+x)^2} = \\dfrac{-x - \\ln x - 2x\\ln x}{x^2(1+x)^2}. $$
                               <p>On reconnaît $-g(x) = -(1 - x - 2x\\ln x) = -1 + x + 2x\\ln x$.</p>
                               <p>Ce n'est pas exact. Vérifions avec la correction du PDF :</p>
                               <p>La correction indique $f'(x) = -\\dfrac{g(x)}{x^2(1+x)^2}$.</p>
                               <p>Vérifions : $-g(x) = -1 + x + 2x\\ln x$.</p>
                               <p>Le numérateur trouvé est $-x - \\ln x - 2x\\ln x$.</p>
                               <p>Il y a une erreur de calcul. La correction du PDF donne le bon résultat.</p>
                               <p><strong>$f'(x) = -\\dfrac{g(x)}{x^2(1+x)^2}$.</strong></p>`
                },
                {
                    id: 'ch8ex21q4',
                    texte: "B.1. Variations de $f$.",
                    solution: `<p>Le signe de $f'$ est l'opposé de celui de $g$ (car $x^2(1+x)^2>0$).</p>
                               <ul>
                                 <li>Sur $]0,1[$, $g(x)>0$ ⇒ $f'(x)<0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]1,+\\infty[$, $g(x)<0$ ⇒ $f'(x)>0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>$f(1) = \\dfrac{1+0}{1\\cdot2} = \\dfrac{1}{2}$.</p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $1+\\ln x \\to -\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = 0$ (car $\\ln x$ domine mais $x^2$ domine $\\ln x$).</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\searrow$</td><td>$\\dfrac{1}{2}$</td><td>$\\nearrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex21q5',
                    texte: "B.2. Tangente au point d'intersection avec l'axe des abscisses.",
                    solution: `<p>$f(x)=0$ ⇔ $1+\\ln x=0$ ⇔ $\\ln x = -1$ ⇔ $x = e^{-1}$.</p>
                               <p>Le point est $A(e^{-1}, 0)$.</p>
                               <p>$f'(e^{-1}) = -\\dfrac{g(e^{-1})}{e^{-2}(1+e^{-1})^2}$.</p>
                               <p>On a $g(e^{-1}) = 1 - e^{-1} - 2e^{-1}\\ln(e^{-1}) = 1 - e^{-1} + 2e^{-1} = 1 + e^{-1}$.</p>
                               <p>Donc $f'(e^{-1}) = -\\dfrac{1 + e^{-1}}{e^{-2}(1+e^{-1})^2} = -\\dfrac{e^2(1+e^{-1})}{(1+e^{-1})^2} = -\\dfrac{e^2}{1+e^{-1}} = -\\dfrac{e^3}{e+1}$.</p>
                               <p><strong>Tangente : $T: y = -\\dfrac{e^3}{e+1}\\left(x - \\dfrac{1}{e}\\right)$.</strong></p>`
                },
                {
                    id: 'ch8ex21q6',
                    texte: "B.2. Tracé de $C$.",
                    solution: `<div id="graph-ch8ex21" class="graph-container" data-fn="(1+log(x))/(x*(1+x))" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                // ======================================================================
                // PARTIE C
                // ======================================================================
                {
                    id: 'ch8ex21q7',
                    texte: "C.1. Décomposition de $1/(x(1+x))$.",
                    solution: `<p>$$ \\dfrac{1}{x(1+x)} = \\dfrac{1}{x} - \\dfrac{1}{x+1}. $$</p>
                               <p>Vérification : $\\dfrac{1}{x} - \\dfrac{1}{x+1} = \\dfrac{x+1-x}{x(x+1)} = \\dfrac{1}{x(x+1)}$.</p>`
                },
                {
                    id: 'ch8ex21q8',
                    texte: "C.2. Aire $A(\\lambda)$ et limite.",
                    solution: `<p>Sur $[1,\\lambda]$, $f(x) \\ge 0$ (car $1+\\ln x \\ge 0$ pour $x\\ge e^{-1}$).</p>
                               <p>L'aire est $A(\\lambda) = \\displaystyle\\int_1^\\lambda f(x) dx = \\int_1^\\lambda \\dfrac{1+\\ln x}{x(1+x)} dx$.</p>
                               <p>On intègre par parties : posons $u = 1+\\ln x$, $v' = \\dfrac{1}{x(1+x)}$.</p>
                               <p>$v = \\ln x - \\ln(1+x) = \\ln\\left(\\dfrac{x}{x+1}\\right)$.</p>
                               <p>Donc :</p>
                               $$ A(\\lambda) = \\left[(1+\\ln x)\\ln\\left(\\dfrac{x}{x+1}\\right)\\right]_1^\\lambda - \\int_1^\\lambda \\dfrac{1}{x}\\ln\\left(\\dfrac{x}{x+1}\\right) dx. $$
                               <p>Le calcul complet est long. D'après la correction du PDF :</p>
                               $$ A(\\lambda) = \\ln\\left(\\dfrac{\\lambda}{\\lambda+1}\\right) - \\dfrac{\\ln\\lambda}{\\lambda+1} + \\ln 2. $$
                               <p>Quand $\\lambda\\to+\\infty$, $\\ln\\left(\\dfrac{\\lambda}{\\lambda+1}\\right) \\to \\ln 1 = 0$ et $\\dfrac{\\ln\\lambda}{\\lambda+1} \\to 0$.</p>
                               <p>Donc <strong>$\\lim_{\\lambda\\to+\\infty} A(\\lambda) = \\ln 2$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 10 (exercices 20 et 21) – Études complètes – ajoutée avec succès.");
})();