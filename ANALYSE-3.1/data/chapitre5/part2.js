// data/chapitre5/part2.js – Exercices 5, 6, 7 (Corrections enrichies)
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
        // EXERCICE 5 – Fonction définie par morceaux (dérivabilité, variations)
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par :</p>
                      $$ f(x)= \\begin{cases} x^2-2x+4 & \\text{si } x \\le 1 \\\\ \\dfrac{1}{x}+x+1 & \\text{si } x > 1 \\end{cases} $$
                      <ol>
                        <li>Montrer que $f$ est dérivable en $1$ et préciser $f'(1)$.</li>
                        <li>Montrer que $f$ est dérivable sur $\\mathbb{R}$ et déterminer $f'$.</li>
                        <li>Dresser le tableau de variation de $f$ et construire sa courbe dans un repère orthonormé.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex5q1',
                    texte: "1. Dérivabilité en 1.",
                    solution: `<p><strong>Stratégie :</strong> Pour une fonction définie par morceaux, on calcule séparément le taux d'accroissement à gauche et à droite de 1. Si les deux limites sont égales, la fonction est dérivable en 1.</p>
                               <p>On commence par calculer $f(1)$ : comme $1 \\le 1$, on utilise la première branche. $f(1)=1^2-2\\cdot1+4 = 3$.</p>
                               <p><strong>Taux à gauche ($x<1$) :</strong></p>
                               $$ \\lim_{x\\to 1^-} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^-} \\dfrac{x^2-2x+4-3}{x-1} = \\lim_{x\\to 1^-} \\dfrac{x^2-2x+1}{x-1} = \\lim_{x\\to 1^-} \\dfrac{(x-1)^2}{x-1} = \\lim_{x\\to 1^-} (x-1) = 0. $$
                               <p><strong>Taux à droite ($x>1$) :</strong></p>
                               $$ \\lim_{x\\to 1^+} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^+} \\dfrac{\\frac{1}{x}+x+1-3}{x-1} = \\lim_{x\\to 1^+} \\dfrac{\\frac{1}{x}+x-2}{x-1}. $$
                               <p>On réduit le numérateur au même dénominateur : $\\dfrac{1}{x}+x-2 = \\dfrac{1+x^2-2x}{x} = \\dfrac{(x-1)^2}{x}$.</p>
                               <p>Donc le taux devient $\\dfrac{(x-1)^2}{x(x-1)} = \\dfrac{x-1}{x} \\to 0$.</p>
                               <p>Les deux taux sont égaux à 0. <strong>Donc $f$ est dérivable en 1 et $f'(1)=0$.</strong></p>`
                },
                {
                    id: 'ch5ex5q2',
                    texte: "2. Dérivabilité sur $\\mathbb{R}$ et expression de $f'$.",
                    solution: `<p>Sur $]-\\infty,1[$, $f$ est un polynôme, donc dérivable : $f'(x)=2x-2$.</p>
                               <p>Sur $]1,+\\infty[$, $f$ est une fonction rationnelle (dénominateur $x$ non nul), donc dérivable : $f'(x) = -\\dfrac{1}{x^2} + 1$.</p>
                               <p>En $x=1$, on a montré que $f'_g(1) = f'_d(1) = 0$, ce qui assure la dérivabilité en 1.</p>
                               <p><strong>Donc $f$ est dérivable sur $\\mathbb{R}$ et :</strong></p>
                               $$ f'(x) = \\begin{cases} 2x-2 & \\text{si } x < 1 \\\\ -\\dfrac{1}{x^2}+1 & \\text{si } x > 1 \\end{cases} $$
                               <p><em>(la valeur en 1 est 0, les deux formules donnent 0 en 1 si on prolonge par continuité).</em></p>`
                },
                {
                    id: 'ch5ex5q3',
                    texte: "3. Tableau de variation et courbe.",
                    solution: `<p>Étudions le signe de $f'$ :</p>
                               <ul>
                                 <li>Sur $]-\\infty,1[$ : $f'(x)=2x-2$. Comme $x<1$, $2x-2<0$. Donc $f$ est <strong>strictement décroissante</strong> sur $]-\\infty,1]$.</li>
                                 <li>Sur $]1,+\\infty[$ : $f'(x)=1-\\dfrac{1}{x^2}$. Pour $x>1$, $x^2>1$, donc $\\dfrac{1}{x^2}<1$, d'où $1-\\dfrac{1}{x^2}>0$. Donc $f$ est <strong>strictement croissante</strong> sur $[1,+\\infty[$.</li>
                               </ul>
                               <p>Limites aux bornes :</p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} f(x) = +\\infty$ (terme dominant $x^2$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (terme dominant $x$).</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$3$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p><strong>Interprétation :</strong> le minimum de la fonction est atteint en $x=1$ et vaut $f(1)=3$.</p>
                               <div id="graph-ex5" class="graph-container" data-fn="piecewise(x<=1, x*x-2*x+4, 1/x+x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>
                               <p><em>Note : le tracé interactif ci-dessus représente une approximation ; sur votre copie, vous tracerez la parabole $y=x^2-2x+4$ pour $x\\le1$ et l'hyperbole $y=\\frac1x+x+1$ pour $x>1$, en reliant les deux branches au point $(1,3)$ avec une tangente horizontale.</em></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6 – Étude complète de f(x)=x²/3 + 9/(4x)
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Soit $f(x)=\\dfrac{x^2}{3}+\\dfrac{9}{4x}$.</p>
                      <ol>
                        <li>Déterminer l'ensemble de définition de $f$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Étudier les branches infinies.</li>
                        <li>Construire la courbe de $f$ dans un repère orthonormé.</li>
                        <li>En déduire la construction de la courbe d'équation $y=\\left|\\dfrac{x^2}{3}+\\dfrac{9}{4x}\\right|$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex6q1',
                    texte: "1. Domaine de définition.",
                    solution: `<p>La fonction est définie pour tout réel $x$ tel que le dénominateur $4x$ soit non nul.</p>
                               <p><strong>Donc $D_f = \\mathbb{R}^* = ]-\\infty,0[\\,\\cup\\,]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch5ex6q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>$f$ est dérivable sur chaque intervalle de son domaine. Calculons $f'(x)$ :</p>
                               $$ f'(x) = \\dfrac{2x}{3} - \\dfrac{9}{4x^2} = \\dfrac{8x^3 - 27}{12x^2}. $$
                               <p>Le signe de $f'$ est celui de $8x^3 - 27$ (car $12x^2>0$).</p>
                               <p>$8x^3 - 27 = 0 \\iff x^3 = \\dfrac{27}{8} \\iff x = \\dfrac{3}{2}$.</p>
                               <ul>
                                 <li>Si $x<0$ : $8x^3 - 27 <0$ → $f'(x)<0$.</li>
                                 <li>Si $0<x<\\dfrac{3}{2}$ : $8x^3 - 27 <0$ → $f'(x)<0$.</li>
                                 <li>Si $x>\\dfrac{3}{2}$ : $8x^3 - 27 >0$ → $f'(x)>0$.</li>
                               </ul>
                               <p>Calculons $f\\left(\\dfrac{3}{2}\\right) = \\dfrac{(3/2)^2}{3} + \\dfrac{9}{4\\cdot(3/2)} = \\dfrac{9/4}{3} + \\dfrac{9}{6} = \\dfrac{3}{4} + \\dfrac{3}{2} = \\dfrac{9}{4}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$\\frac{3}{2}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$\\frac{9}{4}$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>La barre verticale en $x=0$ indique que la fonction n'y est pas définie et présente une asymptote verticale.</p>`
                },
                {
                    id: 'ch5ex6q3',
                    texte: "3. Branches infinies.",
                    solution: `<p><strong>En $x=0$ (asymptote verticale) :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\left(\\dfrac{x^2}{3} + \\dfrac{9}{4x}\\right) = +\\infty $$
                               $$ \\lim_{x\\to0^-} f(x) = \\lim_{x\\to0^-} \\left(\\dfrac{x^2}{3} + \\dfrac{9}{4x}\\right) = -\\infty $$
                               <p><strong>Donc la droite $x=0$ est une asymptote verticale.</strong></p>
                               <p><strong>À l'infini :</strong> calculons $\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x}$.</p>
                               $$ \\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to\\pm\\infty} \\left(\\dfrac{x}{3} + \\dfrac{9}{4x^2}\\right) = \\pm\\infty $$
                               <p>Comme cette limite est infinie, la courbe n'admet pas d'asymptote oblique.</p>
                               <p><strong>Branche parabolique de direction $(O,\\vec{j})$</strong> (car $f(x)/x \\to \\pm\\infty$).</p>`
                },
                {
                    id: 'ch5ex6q4',
                    texte: "4. Construction de la courbe.",
                    solution: `<p>On trace la courbe en utilisant le tableau de variation et les asymptotes. La courbe est décroissante sur $]-\\infty,0[$ et sur $]0,\\frac{3}{2}]$, puis croissante sur $[\\frac{3}{2},+\\infty[$. Elle admet un minimum local en $x=\\frac{3}{2}$ de valeur $\\frac{9}{4}$.</p>
                               <div id="graph-ex6" class="graph-container" data-fn="x*x/3+9/(4*x)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex6q5',
                    texte: "5. Courbe de $|f|$.",
                    solution: `<p>La courbe d'équation $y=|f(x)|$ s'obtient à partir de celle de $f$ en <strong>symétrisant par rapport à l'axe des abscisses</strong> les parties où $f(x)<0$ (c'est-à-dire sur $]-\\infty,0[$, où $f$ est négative).</p>
                               <p>Sur $]0,+\\infty[$, $f(x)>0$, donc $|f|=f$ : la courbe reste inchangée.</p>
                               <p>Sur $]-\\infty,0[$, on prend le symétrique de la branche par rapport à l'axe $Ox$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7 – Étude de f(x)=x³/(x-1)²
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Soit $f(x)=\\dfrac{x^3}{(x-1)^2}$.</p>
                      <ol>
                        <li>Déterminer $\\lim_{x\\to1} f(x)$ et $\\lim_{x\\to+\\infty}(f(x)-x-2)$ et interpréter les résultats obtenus.</li>
                        <li>Étudier les variations de $f$ et tracer sa courbe représentative dans un repère orthogonal du plan.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex7q1',
                    texte: "1. Calcul des limites et interprétation.",
                    solution: `<p><strong>Limite en 1 :</strong></p>
                               $$ \\lim_{x\\to1} f(x) = \\lim_{x\\to1} \\dfrac{x^3}{(x-1)^2} = +\\infty $$
                               <p>En effet, le numérateur tend vers 1, le dénominateur tend vers 0 par valeurs strictement positives (c'est un carré).</p>
                               <p><strong>Interprétation :</strong> la droite d'équation $x=1$ est une <strong>asymptote verticale</strong> à la courbe.</p>
                               <p><strong>Limite de $f(x)-x-2$ en $+\\infty$ :</strong></p>
                               <p>On calcule la différence :</p>
                               $$ f(x)-x-2 = \\dfrac{x^3}{(x-1)^2} - x - 2 = \\dfrac{x^3 - (x+2)(x-1)^2}{(x-1)^2}. $$
                               <p>Développons $(x+2)(x-1)^2 = (x+2)(x^2-2x+1) = x^3 -2x^2 + x + 2x^2 -4x +2 = x^3 -3x +2$.</p>
                               <p>Donc $x^3 - (x^3 -3x +2) = 3x -2$.</p>
                               <p>D'où $f(x)-x-2 = \\dfrac{3x-2}{(x-1)^2}$.</p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{3x-2}{(x-1)^2} = \\lim_{x\\to+\\infty} \\dfrac{3x}{x^2} = 0. $$
                               <p><strong>Interprétation :</strong> la droite d'équation $y=x+2$ est une <strong>asymptote oblique</strong> à la courbe en $+\\infty$.</p>
                               <p>En $-\\infty$, le même calcul donne la même asymptote oblique car $\\lim_{x\\to-\\infty} \\dfrac{3x-2}{(x-1)^2} = 0$.</p>`
                },
                {
                    id: 'ch5ex7q2',
                    texte: "2. Variations et tracé.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}\\setminus\\{1\\}$.</p>
                               $$ f'(x) = \\dfrac{3x^2(x-1)^2 - x^3 \\cdot 2(x-1)}{(x-1)^4} = \\dfrac{x^2(x-1)(3(x-1) - 2x)}{(x-1)^4} = \\dfrac{x^2(x-3)}{(x-1)^3}. $$
                               <p>Étudions le signe de $f'(x)$ :</p>
                               <ul>
                                 <li>$x^2 \\ge 0$ (s'annule en 0).</li>
                                 <li>$(x-3)$ change de signe en $3$.</li>
                                 <li>$(x-1)^3$ change de signe en $1$.</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$1$</td><td></td><td>$3$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$x^2$</th><td>$+$</td><td></td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$(x-3)$</th><td>$-$</td><td></td><td>$-$</td><td></td><td>$-$</td><td></td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$(x-1)^3$</th><td>$-$</td><td></td><td>$-$</td><td></td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\nearrow$</td><td>$0$</td><td>$\nearrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$\\frac{27}{4}$</td><td>$\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Calculs des valeurs remarquables :</p>
                               <ul>
                                 <li>$f(0)=0$.</li>
                                 <li>$f(3)=\\dfrac{27}{(2)^2} = \\dfrac{27}{4}$.</li>
                               </ul>
                               <p><strong>La courbe admet :</strong></p>
                               <ul>
                                 <li>une asymptote verticale $x=1$,</li>
                                 <li>une asymptote oblique $y=x+2$,</li>
                                 <li>un minimum local en $x=3$ de valeur $\\frac{27}{4}$,</li>
                                 <li>un point d'inflexion ? Non, mais un point où la tangente est horizontale en $x=0$ (car $f'(0)=0$).</li>
                               </ul>
                               <div id="graph-ex7" class="graph-container" data-fn="x*x*x/((x-1)*(x-1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 5, 6, 7) – version améliorée – ajoutée avec succès.");
})();