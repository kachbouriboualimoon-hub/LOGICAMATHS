// data/chapitre5/part3.js – Exercices 8, 9, 10 (Corrections enrichies)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch5 = data.chapitres.find(c => c.id === 5);
    if (!ch5) {
        console.error("Chapitre 5 introuvable. Chargez d'abord data/chapitre5_base.js.");
        return;
    }

    ch5.exercices.push(
        // ======================================================================
        // EXERCICE 8 – Décomposition, variations, asymptote oblique
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>Soit $f(x)=\\dfrac{x^3+3x^2+3x+5}{(x+1)^2}$.</p>
                      <ol>
                        <li>Déterminer les réels $a,b,c$ tels que $f(x)=ax+b+\\dfrac{c}{(x+1)^2}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Soit $C$ la courbe de $f$ dans un repère orthonormé.</li>
                        <li>a. Montrer que $C$ admet, au voisinage de l'infini, une asymptote $D$ que l'on déterminera.</li>
                        <li>b. Étudier la position relative de $C$ et $D$.</li>
                        <li>c. Tracer $D$ et $C$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex8q1',
                    texte: "1. Décomposition en éléments simples.",
                    solution: `<p><strong>Stratégie :</strong> On cherche à écrire $f(x)$ sous la forme $ax+b+\\dfrac{c}{(x+1)^2}$. Pour cela, on remarque que $x^3+3x^2+3x+5 = (x+1)^3+4$.</p>
                               <p>En effet, $(x+1)^3 = x^3+3x^2+3x+1$. Donc $(x+1)^3+4 = x^3+3x^2+3x+5$.</p>
                               <p>Par conséquent :</p>
                               $$ f(x)=\\dfrac{(x+1)^3+4}{(x+1)^2} = \\dfrac{(x+1)^3}{(x+1)^2} + \\dfrac{4}{(x+1)^2} = x+1 + \\dfrac{4}{(x+1)^2}. $$
                               <p><strong>Donc $a=1,\\; b=1,\\; c=4$.</strong></p>`
                },
                {
                    id: 'ch5ex8q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}\\setminus\\{-1\\}$. Calculons $f'(x)$ :</p>
                               $$ f'(x) = 1 - \\dfrac{8}{(x+1)^3} = \\dfrac{(x+1)^3 - 8}{(x+1)^3}. $$
                               <p>On factorise le numérateur : $(x+1)^3 - 2^3 = (x+1-2)\\big((x+1)^2+2(x+1)+4\\big)$.</p>
                               <p>Donc $f'(x) = \\dfrac{(x-1)(x^2+4x+7)}{(x+1)^3}$.</p>
                               <p>Le trinôme $x^2+4x+7$ a pour discriminant $\\Delta = 16-28 = -12 <0$, donc il est toujours strictement positif.</p>
                               <p>Le signe de $f'(x)$ est donc celui de $\\dfrac{x-1}{(x+1)^3}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$(x-1)$</th><td>$-$</td><td></td><td>$-$</td><td></td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$(x+1)^3$</th><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\nearrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$3$</td><td>$\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Calcul des limites :</p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} f(x) = -\\infty$ (car $x$ domine).</li>
                                 <li>$\\lim_{x\\to-1^-} f(x) = +\\infty$ et $\\lim_{x\\to-1^+} f(x) = +\\infty$ (car le dénominateur tend vers $0^+$ et le numérateur vers $4$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$.</li>
                               </ul>
                               <p><strong>La courbe admet une asymptote verticale $x=-1$.</strong></p>`
                },
                {
                    id: 'ch5ex8q3',
                    texte: "3.a. Asymptote oblique.",
                    solution: `<p>D'après la décomposition, $f(x) = x+1 + \\dfrac{4}{(x+1)^2}$.</p>
                               <p>On a : $f(x) - (x+1) = \\dfrac{4}{(x+1)^2}$.</p>
                               $$ \\lim_{|x|\\to\\infty} \\left(f(x) - (x+1)\\right) = \\lim_{|x|\\to\\infty} \\dfrac{4}{(x+1)^2} = 0. $$
                               <p><strong>Donc la droite $D:y=x+1$ est une asymptote oblique à $C$.</strong></p>`
                },
                {
                    id: 'ch5ex8q4',
                    texte: "3.b. Position relative de $C$ et $D$.",
                    solution: `<p>On étudie le signe de $f(x) - (x+1)$ :</p>
                               $$ f(x) - (x+1) = \\dfrac{4}{(x+1)^2}. $$
                               <p>Le numérateur est strictement positif ($4>0$) et le dénominateur est un carré strictement positif pour $x\\neq -1$.</p>
                               <p><strong>Donc $f(x) - (x+1) > 0$ pour tout $x\\neq -1$.</strong></p>
                               <p><strong>Conclusion : la courbe $C$ est toujours située au-dessus de son asymptote $D$.</strong></p>`
                },
                {
                    id: 'ch5ex8q5',
                    texte: "3.c. Tracé de $D$ et $C$.",
                    solution: `<p>On trace la droite $D:y=x+1$ (en pointillés) et la courbe $C$ qui lui est toujours supérieure.</p>
                               <div id="graph-ex8" class="graph-container" data-fn="(x*x*x+3*x*x+3*x+5)/((x+1)*(x+1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9 – Étude complète avec centre de symétrie et bijection
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Soit $f(x)=\\dfrac{x^2-2x+3}{x-1}$.</p>
                      <ol>
                        <li>Déterminer les réels $a,b,c$ tels que $f(x)=ax+b+\\dfrac{c}{x-1}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que $C$ admet un centre de symétrie.</li>
                        <li>a. Montrer que $C$ admet une asymptote oblique $D$.</li>
                        <li>b. Étudier la position relative de $C$ et $D$.</li>
                        <li>c. Tracer $D$ et $C$.</li>
                        <li>Montrer que la restriction $g$ de $f$ à $[1+\\sqrt{2},+\\infty[$ réalise une bijection de $[1+\\sqrt{2},+\\infty[$ sur un intervalle que l'on précisera.</li>
                        <li>a. Dresser le tableau de variation de $g^{-1}$.</li>
                        <li>b. Résoudre l'équation $g(x)=x$.</li>
                        <li>c. Tracer la courbe $C'$ de $g^{-1}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex9q1',
                    texte: "1. Décomposition.",
                    solution: `<p>$x^2-2x+3 = (x-1)^2 + 2$.</p>
                               <p>Donc $f(x)=\\dfrac{(x-1)^2+2}{x-1} = x-1 + \\dfrac{2}{x-1}$.</p>
                               <p><strong>Donc $a=1,\\; b=-1,\\; c=2$.</strong></p>`
                },
                {
                    id: 'ch5ex9q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}\\setminus\\{1\\}$.</p>
                               $$ f'(x) = 1 - \\dfrac{2}{(x-1)^2} = \\dfrac{(x-1)^2 - 2}{(x-1)^2} = \\dfrac{x^2-2x-1}{(x-1)^2}. $$
                               <p>Les racines de $x^2-2x-1$ sont $1-\\sqrt{2}$ et $1+\\sqrt{2}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$1-\\sqrt{2}$</td><td></td><td>$1$</td><td></td><td>$1+\\sqrt{2}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\nearrow$</td><td>$-2\\sqrt{2}$</td><td>$\\searrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$2\\sqrt{2}$</td><td>$\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Calcul des extremas :</p>
                               <ul>
                                 <li>$f(1-\\sqrt{2}) = (1-\\sqrt{2})-1+\\dfrac{2}{-\\sqrt{2}} = -\\sqrt{2} - \\sqrt{2} = -2\\sqrt{2}$.</li>
                                 <li>$f(1+\\sqrt{2}) = \\sqrt{2} + \\dfrac{2}{\\sqrt{2}} = \\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex9q3',
                    texte: "3. Centre de symétrie.",
                    solution: `<p><strong>Stratégie :</strong> On cherche un point $I(a,b)$ tel que $f(2a-x)=2b-f(x)$.</p>
                               <p>Essayons $a=1$ et $b=0$ (on le devine grâce à l'asymptote verticale $x=1$).</p>
                               <p>Vérifions :</p>
                               $$ f(2-x) = (2-x)-1+\\dfrac{2}{(2-x)-1} = 1-x+\\dfrac{2}{1-x} = -\\left(x-1+\\dfrac{2}{x-1}\\right) = -f(x). $$
                               <p>On a bien $f(2\\cdot1 - x) = -f(x) = 2\\cdot0 - f(x)$.</p>
                               <p><strong>Donc $I(1,0)$ est centre de symétrie de $C$.</strong></p>`
                },
                {
                    id: 'ch5ex9q4',
                    texte: "4.a. Asymptote oblique.",
                    solution: `<p>D'après la décomposition, $f(x) = x-1 + \\dfrac{2}{x-1}$.</p>
                               $$ \\lim_{x\\to\\infty} (f(x) - (x-1)) = \\lim_{x\\to\\infty} \\dfrac{2}{x-1} = 0. $$
                               <p><strong>Donc $D:y=x-1$ est asymptote oblique.</strong></p>`
                },
                {
                    id: 'ch5ex9q5',
                    texte: "4.b. Position relative.",
                    solution: `<p>On étudie $f(x)-(x-1) = \\dfrac{2}{x-1}$.</p>
                               <ul>
                                 <li>Si $x>1$ : $\\dfrac{2}{x-1}>0$ → <strong>$C$ est au-dessus de $D$</strong>.</li>
                                 <li>Si $x<1$ : $\\dfrac{2}{x-1}<0$ → <strong>$C$ est en dessous de $D$</strong>.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex9q6',
                    texte: "4.c. Tracé.",
                    solution: `<div id="graph-ex9" class="graph-container" data-fn="(x*x-2*x+3)/(x-1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex9q7',
                    texte: "5. Bijection de la restriction $g$.",
                    solution: `<p>Soit $g$ la restriction de $f$ à $I=[1+\\sqrt{2},+\\infty[$.</p>
                               <p>Sur cet intervalle, $f$ est continue et strictement croissante (car $f'(x)>0$).</p>
                               <p>$f(1+\\sqrt{2}) = 2\\sqrt{2}$ et $\\lim_{x\\to+\\infty} f(x) = +\\infty$.</p>
                               <p><strong>Donc $g$ réalise une bijection de $[1+\\sqrt{2},+\\infty[$ sur $[2\\sqrt{2},+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch5ex9q8',
                    texte: "6.a. Tableau de variation de $g^{-1}$.",
                    solution: `<p>$g$ étant strictement croissante, $g^{-1}$ est aussi strictement croissante sur $[2\\sqrt{2},+\\infty[$.</p>
                               <p>Son tableau de variation est donc simplement une flèche $\nearrow$ de $2\\sqrt{2}$ à $+\\infty$.</p>`
                },
                {
                    id: 'ch5ex9q9',
                    texte: "6.b. Résolution de $g(x)=x$.",
                    solution: `<p>On résout : $x-1+\\dfrac{2}{x-1}=x$.</p>
                               <p>On simplifie : $\\dfrac{2}{x-1}=1$ ⇒ $x-1=2$ ⇒ $x=3$.</p>
                               <p>Vérifions que $3\\in[1+\\sqrt{2},+\\infty[$ : $1+\\sqrt{2}\\approx2.414<3$, donc oui.</p>
                               <p>$f(3)=\\dfrac{9-6+3}{2}=3$.</p>
                               <p><strong>Donc $C$ et $C'$ se coupent au point $(3,3)$.</strong></p>`
                },
                {
                    id: 'ch5ex9q10',
                    texte: "6.c. Tracé de $C'$.",
                    solution: `<p>$C'$ est la courbe de $g^{-1}$, donc la symétrique de la partie de $C$ correspondant à $x\\ge1+\\sqrt{2}$ par rapport à la droite $y=x$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10 – Fonction homographique, symétrie et courbe image
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Soit $f(x)=\\dfrac{x}{\\sqrt{3}}-\\dfrac{\\sqrt{3}}{x}$.</p>
                      <ol>
                        <li>Étudier les variations de $f$ et tracer sa courbe $C$.</li>
                        <li>Soit $S$ la symétrie orthogonale par rapport à la droite $D$ d'équation $x=1$.</li>
                        <li>a. Exprimer les coordonnées de $M'$, symétrique de $M$, en fonction de celles de $M$.</li>
                        <li>b. Trouver l'équation de la courbe $C'$ image de $C$ par $S$.</li>
                        <li>c. Déterminer les points communs à $C$ et $C'$.</li>
                        <li>d. Tracer $C'$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex10q1',
                    texte: "1. Variations et tracé de $C$.",
                    solution: `<p><strong>Domaine :</strong> $D_f=\\mathbb{R}^*$.</p>
                               <p>$f$ est impaire car $f(-x) = -\\dfrac{x}{\\sqrt{3}} + \\dfrac{\\sqrt{3}}{x} = -f(x)$.</p>
                               <p>$f$ est dérivable sur $\\mathbb{R}^*$ :</p>
                               $$ f'(x) = \\dfrac{1}{\\sqrt{3}} + \\dfrac{\\sqrt{3}}{x^2} > 0. $$
                               <p>Donc <strong>$f$ est strictement croissante sur $]-\\infty,0[$ et sur $]0,+\\infty[$.</strong></p>
                               <p><strong>Asymptote oblique :</strong> on calcule $\\lim_{|x|\\to\\infty} \\left(f(x)-\\dfrac{x}{\\sqrt{3}}\\right) = \\lim_{|x|\\to\\infty} \\left(-\\dfrac{\\sqrt{3}}{x}\\right) = 0$.</p>
                               <p><strong>Donc la droite $\\Delta:y=\\dfrac{x}{\\sqrt{3}}$ est asymptote oblique.</strong></p>
                               <p>Limites en $0$ : $\\lim_{x\\to0^+} f(x) = -\\infty$ et $\\lim_{x\\to0^-} f(x) = +\\infty$ (car $-\\sqrt{3}/x$ domine).</p>
                               <p><strong>Asymptote verticale : $x=0$.</strong></p>
                               <div id="graph-ex10" class="graph-container" data-fn="x/sqrt(3)-sqrt(3)/x" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex10q2',
                    texte: "2.a. Coordonnées de $M'$.",
                    solution: `<p>La symétrie par rapport à la droite verticale $x=1$ transforme $M(x,y)$ en $M'(x',y')$ avec :</p>
                               <p><strong>$x' = 2 - x$</strong> et <strong>$y' = y$</strong>.</p>`
                },
                {
                    id: 'ch5ex10q3',
                    texte: "2.b. Équation de $C'$.",
                    solution: `<p>On a $M'(x',y')\\in C'$ ⇔ $M(2-x', y')\\in C$.</p>
                               <p>Donc $y' = f(2-x') = \\dfrac{2-x'}{\\sqrt{3}} - \\dfrac{\\sqrt{3}}{2-x'}$.</p>
                               <p>En remplaçant $x'$ par $x$, on obtient l'équation de $C'$ :</p>
                               <p><strong>$C' : y = \\dfrac{2-x}{\\sqrt{3}} - \\dfrac{\\sqrt{3}}{2-x}$.</strong></p>`
                },
                {
                    id: 'ch5ex10q4',
                    texte: "2.c. Points communs à $C$ et $C'$.",
                    solution: `<p>On résout $f(x) = \\dfrac{2-x}{\\sqrt{3}} - \\dfrac{\\sqrt{3}}{2-x}$.</p>
                               <p>Multiplions par $\\sqrt{3}$ :</p>
                               $$ x - \\dfrac{3}{x} = 2-x - \\dfrac{3}{2-x}. $$
                               <p>Soit $\\dfrac{x^2-3}{x} = \\dfrac{(2-x)^2-3}{2-x}$.</p>
                               <p>On pose $t=x$ et on développe :</p>
                               <p>$(x^2-3)(2-x) = x((2-x)^2-3)$.</p>
                               <p>Développons :</p>
                               <p>$2x^2 - x^3 -6 + 3x = x(4 -4x + x^2 -3) = x(1 -4x + x^2) = x -4x^2 + x^3$.</p>
                               <p>On obtient : $2x^2 - x^3 -6 + 3x - x + 4x^2 - x^3 = 0$.</p>
                               <p>Soit $-2x^3 + 6x^2 + 2x -6 = 0$ → divisons par $-2$ : $x^3 -3x^2 -x +3 = 0$.</p>
                               <p>On factorise : $x^2(x-3) - (x-3) = (x-3)(x^2-1) = (x-3)(x-1)(x+1)$.</p>
                               <p>Donc les solutions sont $x=1,\\; x=-1,\\; x=3$.</p>
                               <p><strong>Les points communs sont $A(1,f(1))$, $B(-1,f(-1))$ et $C(3,f(3))$.</strong></p>
                               <p>Calculs : $f(1)=\\frac{1}{\\sqrt{3}}-\\sqrt{3} = -\\frac{2}{\\sqrt{3}}$.</p>
                               <p>$f(-1) = -\\frac{1}{\\sqrt{3}} + \\sqrt{3} = \\frac{2}{\\sqrt{3}}$.</p>
                               <p>$f(3)=\\frac{3}{\\sqrt{3}} - \\frac{\\sqrt{3}}{3} = \\sqrt{3} - \\frac{\\sqrt{3}}{3} = \\frac{2\\sqrt{3}}{3}$.</p>`
                },
                {
                    id: 'ch5ex10q5',
                    texte: "2.d. Tracé de $C'$.",
                    solution: `<p>$C'$ est la symétrique de $C$ par rapport à la droite $x=1$. On la trace en prenant chaque point de $C$ et en le transformant par $(x,y)\\mapsto(2-x,y)$.</p>`
                }
            ]
        }
    );

    console.log("Partie 3 (exercices 8, 9, 10) – version améliorée – ajoutée avec succès.");
})();