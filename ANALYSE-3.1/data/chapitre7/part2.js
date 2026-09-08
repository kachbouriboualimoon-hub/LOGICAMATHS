// data/chapitre7/part2.js – Exercices 3 à 12 (Calculs d'intégrales)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch7 = data.chapitres.find(c => c.id === 7);
    if (!ch7) {
        console.error("Chapitre 7 introuvable. Chargez d'abord data/chapitre7_base.js.");
        return;
    }

    ch7.exercices.push(
        // ======================================================================
        // EXERCICE 3
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Soit $f(x)=\\dfrac{x+1}{(x-1)^4}$.</p>
                      <ol>
                        <li>a. Montrer qu'il existe deux réels $a$ et $b$ tels que $f(x)=\\dfrac{a}{(x-1)^3}+\\dfrac{b}{(x-1)^4}$.</li>
                        <li>b. Calculer $\\int_2^3 \\dfrac{x+1}{(x-1)^4} dx$.</li>
                      </ol>
                      <p>Soit $A=\\int_0^1 \\dfrac{1}{1+x^2} dx$ et $B=\\int_0^1 \\dfrac{x^2}{1+x^2} dx$.</p>
                      <ol>
                        <li>a. Calculer $A$.</li>
                        <li>b. Calculer $A+B$.</li>
                        <li>c. En déduire la valeur de $B$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex3q1',
                    texte: "1.a. Décomposition.",
                    solution: `<p>On cherche $\\dfrac{x+1}{(x-1)^4} = \\dfrac{a}{(x-1)^3}+\\dfrac{b}{(x-1)^4}$.</p>
                               <p>En réduisant au même dénominateur : $a(x-1)+b = x+1$.</p>
                               <p>Donc $a=1$ et $-a+b=1$ ⇒ $-1+b=1$ ⇒ $b=2$.</p>
                               <p><strong>$a=1,\\; b=2$.</strong></p>`
                },
                {
                    id: 'ch7ex3q2',
                    texte: "1.b. Calcul de l'intégrale.",
                    solution: `<p>$$\\int_2^3 \\dfrac{x+1}{(x-1)^4} dx = \\int_2^3 \\left(\\dfrac{1}{(x-1)^3}+\\dfrac{2}{(x-1)^4}\\right) dx.$$</p>
                               $$ = \\left[-\\dfrac{1}{2(x-1)^2} - \\dfrac{2}{3(x-1)^3}\\right]_2^3. $$
                               <p>En $x=3$ : $-\\dfrac{1}{2\\cdot4} - \\dfrac{2}{3\\cdot8} = -\\dfrac{1}{8} - \\dfrac{1}{12} = -\\dfrac{5}{24}$.</p>
                               <p>En $x=2$ : $-\\dfrac{1}{2\\cdot1} - \\dfrac{2}{3\\cdot1} = -\\dfrac{1}{2} - \\dfrac{2}{3} = -\\dfrac{7}{6}$.</p>
                               <p>Donc l'intégrale vaut $-\\dfrac{5}{24} - (-\\dfrac{7}{6}) = -\\dfrac{5}{24} + \\dfrac{28}{24} = \\dfrac{23}{24}$.</p>
                               <p><strong>$\\int_2^3 \\dfrac{x+1}{(x-1)^4} dx = \\dfrac{23}{24}$.</strong></p>`
                },
                {
                    id: 'ch7ex3q3',
                    texte: "2.a. Calcul de $A$.",
                    solution: `<p>$A=\\int_0^1 \\dfrac{1}{1+x^2} dx = [\\arctan x]_0^1 = \\dfrac{\\pi}{4} - 0 = \\dfrac{\\pi}{4}$.</p>`
                },
                {
                    id: 'ch7ex3q4',
                    texte: "2.b. Calcul de $A+B$.",
                    solution: `<p>$A+B = \\int_0^1 \\dfrac{1+x^2}{1+x^2} dx = \\int_0^1 1 dx = 1$.</p>`
                },
                {
                    id: 'ch7ex3q5',
                    texte: "2.c. Valeur de $B$.",
                    solution: `<p>$B = 1 - A = 1 - \\dfrac{\\pi}{4}$.</p>
                               <p><strong>$B = 1 - \\dfrac{\\pi}{4}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 4
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>Soit la fonction $f(x)=\\dfrac{x^2-4x-2}{(x-2)^2}$.</p>
                      <ol>
                        <li>Vérifier que $f(x)=1-\\dfrac{6}{(x-2)^2}$.</li>
                        <li>Étudier $f$ et construire sa courbe représentative $C$.</li>
                        <li>Calculer l'aire de la partie du plan limitée par l'axe des abscisses, la courbe $C$ et les droites $x=3$ et $x=5$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex4q1',
                    texte: "1. Vérification.",
                    solution: `<p>$1-\\dfrac{6}{(x-2)^2} = \\dfrac{(x-2)^2-6}{(x-2)^2} = \\dfrac{x^2-4x+4-6}{(x-2)^2} = \\dfrac{x^2-4x-2}{(x-2)^2} = f(x)$.</p>`
                },
                {
                    id: 'ch7ex4q2',
                    texte: "2. Étude de $f$.",
                    solution: `<p>$D_f=\\mathbb{R}\\setminus\\{2\\}$.</p>
                               <p>$f(x)=1-\\dfrac{6}{(x-2)^2}$.</p>
                               <p>$f'(x)=\\dfrac{12}{(x-2)^3}$. Signe de $f'$ :</p>
                               <ul>
                                 <li>$x<2$ : $f'<0$ (décroissante).</li>
                                 <li>$x>2$ : $f'>0$ (croissante).</li>
                               </ul>
                               <p>Limites : $\\lim_{x\\to\\pm\\infty} f(x)=1$ (asymptote horizontale $y=1$).</p>
                               <p>$\\lim_{x\\to2^+} f(x) = -\\infty$, $\\lim_{x\\to2^-} f(x) = -\\infty$ (asymptote verticale $x=2$).</p>
                               <div id="graph-ex4" class="graph-container" data-fn="(x*x-4*x-2)/((x-2)*(x-2))" data-xmin="-2" data-xmax="6" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch7ex4q3',
                    texte: "3. Aire.",
                    solution: `<p>Sur $[3,5]$, $f(x)>0$ (car $1-\\dfrac{6}{(x-2)^2} > 0$ pour $x>2+\\sqrt{6}$ et $2+\\sqrt{6}\\approx4.45$).</p>
                               <p>L'aire est $A = \\int_3^5 f(x) dx = \\int_3^5 \\left(1-\\dfrac{6}{(x-2)^2}\\right) dx$.</p>
                               $$ = [x + \\dfrac{6}{x-2}]_3^5 = (5+2) - (3+6) = 7 - 9 = -2. $$
                               <p>L'aire est donc $2$ (valeur absolue).</p>
                               <p><strong>$\\mathcal{A} = 2$ u.a.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Soit $f(x)=\\dfrac{2x-1}{(x-1)^2}$.</p>
                      <ol>
                        <li>Étudier $f$ et tracer $C$.</li>
                        <li>Montrer qu'il existe deux réels $a$ et $b$ tels que $f(x)=\\dfrac{a}{x-1}+\\dfrac{b}{(x-1)^2}$.</li>
                        <li>Soit $\\lambda< -1$. On pose $A(\\lambda)$ l'aire de la partie du plan limitée par $C$, l'axe des abscisses et les droites $x=\\lambda$ et $x=-1$.</li>
                        <li>i. Déterminer $A(\\lambda)$.</li>
                        <li>ii. Calculer $\\lim_{\\lambda\\to-\\infty} A(\\lambda)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex5q1',
                    texte: "1. Étude de $f$.",
                    solution: `<p>$D_f=\\mathbb{R}\\setminus\\{1\\}$.</p>
                               <p>$f'(x)=\\dfrac{2(x-1)^2 - (2x-1)\\cdot2(x-1)}{(x-1)^4} = \\dfrac{2(x-1)-2(2x-1)}{(x-1)^3} = \\dfrac{-2x}{(x-1)^3}$.</p>
                               <p>Signe :</p>
                               <ul>
                                 <li>$x<0$ : $f'<0$.</li>
                                 <li>$0<x<1$ : $f'>0$.</li>
                                 <li>$x>1$ : $f'<0$.</li>
                               </ul>
                               <p>Asymptote verticale $x=1$.</p>
                               <p>$\\lim_{x\\to\\pm\\infty} f(x) = 0$ (asymptote horizontale $y=0$).</p>`
                },
                {
                    id: 'ch7ex5q2',
                    texte: "2. Décomposition.",
                    solution: `<p>On cherche $\\dfrac{a}{x-1}+\\dfrac{b}{(x-1)^2} = \\dfrac{a(x-1)+b}{(x-1)^2} = \\dfrac{2x-1}{(x-1)^2}$.</p>
                               <p>Donc $a(x-1)+b = 2x-1$ ⇒ $a=2$, $-a+b=-1$ ⇒ $-2+b=-1$ ⇒ $b=1$.</p>
                               <p><strong>$a=2,\\; b=1$.</strong></p>`
                },
                {
                    id: 'ch7ex5q3',
                    texte: "3.i. Aire $A(\\lambda)$.",
                    solution: `<p>Pour $x< -1$, $f(x)<0$ (car $2x-1<0$ et $(x-1)^2>0$).</p>
                               <p>L'aire est $A(\\lambda) = -\\int_{\\lambda}^{-1} f(x) dx$ (car $f$ est négative).</p>
                               $$ A(\\lambda) = -\\int_{\\lambda}^{-1} \\left(\\dfrac{2}{x-1}+\\dfrac{1}{(x-1)^2}\\right) dx = -\\left[2\\ln|x-1| - \\dfrac{1}{x-1}\\right]_{\\lambda}^{-1}. $$
                               <p>En $-1$ : $2\\ln 2 - \\dfrac{1}{-2} = 2\\ln 2 + \\dfrac{1}{2}$.</p>
                               <p>En $\\lambda$ : $2\\ln(1-\\lambda) - \\dfrac{1}{\\lambda-1}$.</p>
                               <p>Donc $A(\\lambda) = -\\left(2\\ln 2 + \\dfrac{1}{2} - 2\\ln(1-\\lambda) + \\dfrac{1}{\\lambda-1}\\right) = 2\\ln(1-\\lambda) - 2\\ln 2 - \\dfrac{1}{2} - \\dfrac{1}{\\lambda-1}$.</p>`
                },
                {
                    id: 'ch7ex5q4',
                    texte: "3.ii. Limite.",
                    solution: `<p>Quand $\\lambda\\to-\\infty$, $\\ln(1-\\lambda)\\to+\\infty$, donc $A(\\lambda)\\to+\\infty$.</p>
                               <p><strong>$\\lim_{\\lambda\\to-\\infty} A(\\lambda) = +\\infty$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Soit $h$ la fonction définie sur $]0,+\\infty[$ par $h(x)=x^2-4x+6-3\\sqrt{x}$.</p>
                      <ol>
                        <li>i. Calculer $h'(x)$.</li>
                        <li>ii. Montrer que l'équation $h'(x)=0$ possède une unique solution $\\alpha\\in]2,3[$.</li>
                        <li>iii. Déterminer le signe de $h'$ et dresser le tableau de variation de $h$.</li>
                        <li>iv. Calculer $h(1)$ et $h(4)$. En déduire que 1 et 4 sont les uniques solutions de $h(x)=0$.</li>
                      </ol>
                      <p>Représenter les fonctions $f(x)=x^2-4x+6$ et $g(x)=3\\sqrt{x}$.</p>
                      <p>Calculer l'aire de la partie limitée par ces deux courbes.</p>`,
            questions: [
                {
                    id: 'ch7ex6q1',
                    texte: "1.i. Dérivée de $h$.",
                    solution: `<p>$h'(x)=2x-4-\\dfrac{3}{2\\sqrt{x}}$.</p>`
                },
                {
                    id: 'ch7ex6q2',
                    texte: "1.ii. Existence de $\\alpha$.",
                    solution: `<p>$h''(x)=2+\\dfrac{3}{4x^{3/2}} >0$. Donc $h'$ est strictement croissante.</p>
                               <p>$h'(2)=4-4-\\dfrac{3}{2\\sqrt{2}} = -\\dfrac{3}{2\\sqrt{2}}<0$.</p>
                               <p>$h'(3)=6-4-\\dfrac{3}{2\\sqrt{3}} = 2 - \\dfrac{\\sqrt{3}}{2} >0$.</p>
                               <p>Donc il existe une unique racine $\\alpha\\in]2,3[$.</p>`
                },
                {
                    id: 'ch7ex6q3',
                    texte: "1.iii. Signe et variations.",
                    solution: `<p>$h'$ est négative sur $]0,\\alpha]$ et positive sur $[\\alpha,+\\infty[$.</p>
                               <p>Donc $h$ est décroissante sur $]0,\\alpha]$ et croissante sur $[\\alpha,+\\infty[$.</p>
                               <p>$h(1)=1-4+6-3=0$.</p>
                               <p>$h(4)=16-16+6-6=0$.</p>
                               <p>Donc les solutions de $h(x)=0$ sont $x=1$ et $x=4$.</p>`
                },
                {
                    id: 'ch7ex6q4',
                    texte: "2. Aire entre $f$ et $g$.",
                    solution: `<p>On a $f(x)-g(x)=x^2-4x+6-3\\sqrt{x}=h(x)$.</p>
                               <p>$h(x)\\ge0$ sur $[0,1]$ ? Vérifions : $h(0)=6>0$.</p>
                               <p>Les points d'intersection sont $x=1$ et $x=4$.</p>
                               <p>L'aire est $A=\\int_0^4 |h(x)| dx$.</p>
                               <p>Sur $[0,1]$, $h(x)>0$ ; sur $[1,4]$, $h(x)<0$.</p>
                               $$ A = \\int_0^1 h(x) dx - \\int_1^4 h(x) dx. $$
                               <p>On calcule les primitives : $\\int h(x) dx = \\dfrac{x^3}{3} - 2x^2 + 6x - 2x^{3/2}$.</p>
                               <p>$\\int_0^1 h = (\\dfrac{1}{3}-2+6-2) - 0 = \\dfrac{1}{3}+2 = \\dfrac{7}{3}$.</p>
                               <p>$\\int_1^4 h = (\\dfrac{64}{3}-32+24-16) - (\\dfrac{1}{3}-2+6-2) = (\\dfrac{64}{3}-24) - (\\dfrac{1}{3}+2) = \\dfrac{64}{3}-24-\\dfrac{1}{3}-2 = 21-26 = -5$.</p>
                               <p>Donc $A = \\dfrac{7}{3} - (-5) = \\dfrac{7}{3} + 5 = \\dfrac{22}{3}$.</p>
                               <p><strong>$A = \\dfrac{22}{3}$ u.a.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Soit $f(x)=\\cos x$ et $g(x)=\\cos^2 x$ sur $[0,\\pi]$.</p>
                      <ol>
                        <li>Étudier $f$ et $g$.</li>
                        <li>Étudier la position des courbes.</li>
                        <li>Représenter les courbes.</li>
                        <li>Calculer l'aire de la partie limitée par les deux courbes.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex7q1',
                    texte: "1. Étude de $f$ et $g$.",
                    solution: `<p>$f(x)=\\cos x$ est décroissante sur $[0,\\pi]$.</p>
                               <p>$g(x)=\\cos^2 x = \\dfrac{1+\\cos 2x}{2}$.</p>`
                },
                {
                    id: 'ch7ex7q2',
                    texte: "2. Position des courbes.",
                    solution: `<p>$f(x)-g(x)=\\cos x - \\cos^2 x = \\cos x(1-\\cos x)$.</p>
                               <p>Sur $[0,\\pi]$, $1-\\cos x \\ge0$.</p>
                               <p>Donc le signe est celui de $\\cos x$.</p>
                               <ul>
                                 <li>Sur $[0,\\frac{\\pi}{2}]$ : $\\cos x\\ge0$ ⇒ $f\\ge g$.</li>
                                 <li>Sur $[\\frac{\\pi}{2},\\pi]$ : $\\cos x\\le0$ ⇒ $f\\le g$.</li>
                               </ul>`
                },
                {
                    id: 'ch7ex7q3',
                    texte: "4. Aire.",
                    solution: `<p>$A = \\int_0^{\\pi} |f(x)-g(x)| dx$.</p>
                               $$ A = \\int_0^{\\pi/2} (\\cos x - \\cos^2 x) dx + \\int_{\\pi/2}^{\\pi} (\\cos^2 x - \\cos x) dx. $$
                               <p>$\\int \\cos x dx = \\sin x$.</p>
                               <p>$\\int \\cos^2 x dx = \\int \\dfrac{1+\\cos 2x}{2} dx = \\dfrac{x}{2} + \\dfrac{\\sin 2x}{4}$.</p>
                               <p>$\\int_0^{\\pi/2} \\cos x dx = 1$, $\\int_{\\pi/2}^{\\pi} \\cos x dx = -1$.</p>
                               <p>$\\int_0^{\\pi/2} \\cos^2 x dx = \\dfrac{\\pi}{4} + 0 = \\dfrac{\\pi}{4}$.</p>
                               <p>$\\int_{\\pi/2}^{\\pi} \\cos^2 x dx = \\dfrac{\\pi}{4} + 0 = \\dfrac{\\pi}{4}$.</p>
                               <p>Donc $A = (1-\\dfrac{\\pi}{4}) + (\\dfrac{\\pi}{4} - (-1)) = 2$.</p>
                               <p><strong>$A = 2$ u.a.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 3 à 7) – Calculs d'intégrales – ajoutée avec succès.");
})();