// data/chapitre7/part6.js – Exercices 25 à 34 (Volumes, fonctions définies par une intégrale)
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
        // EXERCICE 25 (numéroté 27 dans le PDF) – Volume pour y = x²
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit $\\mathcal{C} = \\{ M(x,y) \\mid y = x^2,\\; 0 \\le x \\le 2 \\}$ et $S$ le solide obtenu par rotation de $\\mathcal{C}$ autour de l'axe $(Ox)$.</p>
                      <p>Calculer le volume de $S$.</p>`,
            questions: [
                {
                    id: 'ch7ex25q1',
                    texte: "Calcul du volume.",
                    solution: `<p><strong>Méthode :</strong> Le volume d'un solide de révolution autour de l'axe $(Ox)$ est $V = \\pi\\int_a^b [f(x)]^2 dx$.</p>
                               <p>Ici $f(x)=x^2$ sur $[0,2]$.</p>
                               $$ V = \\pi\\int_0^2 (x^2)^2 dx = \\pi\\int_0^2 x^4 dx = \\pi\\left[\\dfrac{x^5}{5}\\right]_0^2 = \\pi\\cdot\\dfrac{32}{5} = \\dfrac{32\\pi}{5}. $$
                               <p><strong>$V = \\dfrac{32\\pi}{5}$ u.v.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 26 (numéroté 28 dans le PDF) – Volume pour y = 1/x
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>Soit $\\mathcal{C} = \\{ M(x,y) \\mid y = \\dfrac{1}{x},\\; 1 \\le x \\le 3 \\}$ et $S$ le solide obtenu par rotation de $\\mathcal{C}$ autour de l'axe $(Ox)$.</p>
                      <p>Calculer le volume de $S$.</p>`,
            questions: [
                {
                    id: 'ch7ex26q1',
                    texte: "Calcul du volume.",
                    solution: `<p>$f(x)=\\dfrac{1}{x}$ sur $[1,3]$.</p>
                               $$ V = \\pi\\int_1^3 \\dfrac{1}{x^2} dx = \\pi\\left[-\\dfrac{1}{x}\\right]_1^3 = \\pi\\left(-\\dfrac{1}{3} + 1\\right) = \\pi\\cdot\\dfrac{2}{3} = \\dfrac{2\\pi}{3}. $$
                               <p><strong>$V = \\dfrac{2\\pi}{3}$ u.v.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 27 (numéroté 29 dans le PDF) – Volume pour y = tan x
        // ======================================================================
        {
            numero: 27,
            enonce: `<p>Soit $\\mathcal{C} = \\{ M(x,y) \\mid y = \\tan x,\\; 0 \\le x \\le \\dfrac{\\pi}{4} \\}$ et $S$ le solide obtenu par rotation de $\\mathcal{C}$ autour de l'axe $(Ox)$.</p>
                      <p>Calculer le volume de $S$.</p>`,
            questions: [
                {
                    id: 'ch7ex27q1',
                    texte: "Calcul du volume.",
                    solution: `<p>$f(x)=\\tan x$ sur $[0,\\frac{\\pi}{4}]$.</p>
                               $$ V = \\pi\\int_0^{\\pi/4} \\tan^2 x dx = \\pi\\int_0^{\\pi/4} \\left(\\dfrac{1}{\\cos^2 x} - 1\\right) dx = \\pi\\left[\\tan x - x\\right]_0^{\\pi/4}. $$
                               $$ = \\pi\\left(1 - \\dfrac{\\pi}{4} - 0\\right) = \\pi\\left(1 - \\dfrac{\\pi}{4}\\right) = \\pi - \\dfrac{\\pi^2}{4}. $$
                               <p><strong>$V = \\pi - \\dfrac{\\pi^2}{4}$ u.v.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 28 (numéroté 30 dans le PDF) – Volume pour y = sin x + cos x
        // ======================================================================
        {
            numero: 28,
            enonce: `<p>Soit $\\mathcal{C} = \\{ M(x,y) \\mid y = \\sin x + \\cos x,\\; 0 \\le x \\le \\dfrac{\\pi}{2} \\}$ et $S$ le solide obtenu par rotation de $\\mathcal{C}$ autour de l'axe $(Ox)$.</p>
                      <p>Calculer le volume de $S$.</p>`,
            questions: [
                {
                    id: 'ch7ex28q1',
                    texte: "Calcul du volume.",
                    solution: `<p>$f(x)=\\sin x + \\cos x$.</p>
                               <p>$f(x)^2 = (\\sin x + \\cos x)^2 = \\sin^2 x + 2\\sin x\\cos x + \\cos^2 x = 1 + \\sin(2x)$.</p>
                               $$ V = \\pi\\int_0^{\\pi/2} (1 + \\sin 2x) dx = \\pi\\left[x - \\dfrac{\\cos 2x}{2}\\right]_0^{\\pi/2}. $$
                               $$ = \\pi\\left[\\left(\\dfrac{\\pi}{2} - \\dfrac{\\cos \\pi}{2}\\right) - \\left(0 - \\dfrac{\\cos 0}{2}\\right)\\right] = \\pi\\left[\\left(\\dfrac{\\pi}{2} + \\dfrac{1}{2}\\right) - \\left(-\\dfrac{1}{2}\\right)\\right] = \\pi\\left(\\dfrac{\\pi}{2} + 1\\right). $$
                               <p><strong>$V = \\pi\\left(\\dfrac{\\pi}{2} + 1\\right)$ u.v.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 29 (numéroté 31 dans le PDF) – Volume entre sin x et x
        // ======================================================================
        {
            numero: 29,
            enonce: `<p>Soit $\\mathcal{C} = \\{ M(x,y) \\mid y = \\sin x,\\; 0 \\le x \\le \\dfrac{\\pi}{2} \\}$ et $\\mathcal{C}' = \\{ M(x,y) \\mid y = x,\\; 0 \\le x \\le \\dfrac{\\pi}{2} \\}$.</p>
                      <p>On note $S$ et $S'$ les solides obtenus respectivement par rotation de $\\mathcal{C}$ et $\\mathcal{C}'$ autour de l'axe $(Ox)$.</p>
                      <p>Calculer le volume de la partie de l'espace comprise entre les solides $S$ et $S'$.</p>`,
            questions: [
                {
                    id: 'ch7ex29q1',
                    texte: "Calcul du volume.",
                    solution: `<p>Le volume cherché est la différence des volumes :</p>
                               $$ V = V_{S'} - V_S = \\pi\\int_0^{\\pi/2} x^2 dx - \\pi\\int_0^{\\pi/2} \\sin^2 x dx. $$
                               <p>On a :</p>
                               $$ \\int_0^{\\pi/2} x^2 dx = \\left[\\dfrac{x^3}{3}\\right]_0^{\\pi/2} = \\dfrac{\\pi^3}{24}. $$
                               $$ \\int_0^{\\pi/2} \\sin^2 x dx = \\int_0^{\\pi/2} \\dfrac{1-\\cos 2x}{2} dx = \\left[\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4}\\right]_0^{\\pi/2} = \\dfrac{\\pi}{4}. $$
                               <p>Donc :</p>
                               $$ V = \\pi\\left(\\dfrac{\\pi^3}{24} - \\dfrac{\\pi}{4}\\right) = \\dfrac{\\pi^4}{24} - \\dfrac{\\pi^2}{4}. $$
                               <p><strong>$V = \\dfrac{\\pi^4}{24} - \\dfrac{\\pi^2}{4}$ u.v.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 30 – Fonction F(x)=∫₀^{tan x} 1/(1+t²) dt
        // ======================================================================
        {
            numero: 30,
            enonce: `<p>I. On considère la fonction $F$ définie sur $\\left[0,\\dfrac{\\pi}{4}\\right]$ par :</p>
                      $$ F(x)=\\int_0^{\\tan x} \\dfrac{dt}{1+t^2}. $$
                      <ol>
                        <li>Vérifier que $F$ est dérivable sur $\\left[0,\\dfrac{\\pi}{4}\\right]$ et déterminer sa fonction dérivée.</li>
                        <li>En déduire que pour tout $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$, $F(x)=x$.</li>
                        <li>Calculer $\\int_0^1 \\dfrac{dt}{1+t^2}$.</li>
                      </ol>
                      <p>II. On considère la suite $(J_n)$ définie par :</p>
                      $$ J_0 = \\int_0^1 \\dfrac{dt}{1+t^2} \\quad \\text{et} \\quad J_n = \\int_0^1 \\dfrac{t^{2n}}{1+t^2} dt,\\; n\\ge1. $$
                      <ol>
                        <li>i. Vérifier que pour tout $n$, $0 \\le J_n \\le \\dfrac{1}{2n+1}$.</li>
                        <li>ii. En déduire $\\lim_{n\\to+\\infty} J_n$.</li>
                        <li>i. Montrer que pour tout $n$, $J_{n+1} + J_n = \\dfrac{1}{2n+1}$.</li>
                        <li>ii. Calculer $J_k$ pour $1\\le k\\le 6$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex30q1',
                    texte: "I.1. Dérivabilité de $F$.",
                    solution: `<p>On a $F(x)=G(\\tan x)$ où $G(u)=\\int_0^u \\dfrac{dt}{1+t^2}$.</p>
                               <p>$G$ est dérivable sur $\\mathbb{R}$ et $G'(u)=\\dfrac{1}{1+u^2}$.</p>
                               <p>$\\tan x$ est dérivable sur $\\left[0,\\dfrac{\\pi}{4}\\right]$.</p>
                               <p>Donc $F$ est dérivable et :</p>
                               $$ F'(x) = \\dfrac{1}{1+\\tan^2 x} \\cdot (1+\\tan^2 x) = 1. $$`
                },
                {
                    id: 'ch7ex30q2',
                    texte: "I.2. Expression de $F$.",
                    solution: `<p>$F'(x)=1$ ⇒ $F(x)=x+C$.</p>
                               <p>$F(0)=\\int_0^0 \\dfrac{dt}{1+t^2}=0$ ⇒ $C=0$.</p>
                               <p><strong>$F(x)=x$ pour $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$.</strong></p>`
                },
                {
                    id: 'ch7ex30q3',
                    texte: "I.3. Calcul de l'intégrale.",
                    solution: `<p>$\\int_0^1 \\dfrac{dt}{1+t^2} = [\\arctan t]_0^1 = \\dfrac{\\pi}{4}$.</p>
                               <p><strong>$\\int_0^1 \\dfrac{dt}{1+t^2} = \\dfrac{\\pi}{4}$.</strong></p>`
                },
                {
                    id: 'ch7ex30q4',
                    texte: "II.1.i. Encadrement de $J_n$.",
                    solution: `<p>Sur $[0,1]$, $0 \\le t^{2n} \\le 1$ et $\\dfrac{1}{1+t^2} \\le 1$.</p>
                               <p>Donc $0 \\le \\dfrac{t^{2n}}{1+t^2} \\le t^{2n}$.</p>
                               <p>En intégrant : $0 \\le J_n \\le \\int_0^1 t^{2n} dt = \\dfrac{1}{2n+1}$.</p>
                               <p><strong>$0 \\le J_n \\le \\dfrac{1}{2n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex30q5',
                    texte: "II.1.ii. Limite de $(J_n)$.",
                    solution: `<p>D'après le théorème des gendarmes : <strong>$\\lim_{n\\to+\\infty} J_n = 0$.</strong></p>`
                },
                {
                    id: 'ch7ex30q6',
                    texte: "II.2.i. Relation $J_{n+1}+J_n$.",
                    solution: `<p>$$ J_{n+1}+J_n = \\int_0^1 \\dfrac{t^{2n+2}+t^{2n}}{1+t^2} dt = \\int_0^1 \\dfrac{t^{2n}(1+t^2)}{1+t^2} dt = \\int_0^1 t^{2n} dt = \\dfrac{1}{2n+1}. $$</p>
                               <p><strong>$J_{n+1}+J_n = \\dfrac{1}{2n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex30q7',
                    texte: "II.2.ii. Calcul de $J_1$ à $J_6$.",
                    solution: `<p>On a $J_0 = \\dfrac{\\pi}{4}$.</p>
                               <p>Pour $n=0$ : $J_1 + J_0 = 1$ ⇒ $J_1 = 1 - \\dfrac{\\pi}{4}$.</p>
                               <p>Pour $n=1$ : $J_2 + J_1 = \\dfrac{1}{3}$ ⇒ $J_2 = \\dfrac{1}{3} - J_1 = \\dfrac{1}{3} - 1 + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} - \\dfrac{2}{3}$.</p>
                               <p>Pour $n=2$ : $J_3 + J_2 = \\dfrac{1}{5}$ ⇒ $J_3 = \\dfrac{1}{5} - J_2 = \\dfrac{1}{5} - \\dfrac{\\pi}{4} + \\dfrac{2}{3} = \\dfrac{13}{15} - \\dfrac{\\pi}{4}$.</p>
                               <p>Pour $n=3$ : $J_4 + J_3 = \\dfrac{1}{7}$ ⇒ $J_4 = \\dfrac{1}{7} - J_3 = \\dfrac{1}{7} - \\dfrac{13}{15} + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} - \\dfrac{76}{105}$.</p>
                               <p>Pour $n=4$ : $J_5 + J_4 = \\dfrac{1}{9}$ ⇒ $J_5 = \\dfrac{1}{9} - J_4 = \\dfrac{1}{9} - \\dfrac{\\pi}{4} + \\dfrac{76}{105} = \\dfrac{239}{315} - \\dfrac{\\pi}{4}$.</p>
                               <p>Pour $n=5$ : $J_6 + J_5 = \\dfrac{1}{11}$ ⇒ $J_6 = \\dfrac{1}{11} - J_5 = \\dfrac{1}{11} - \\dfrac{239}{315} + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} - \\dfrac{2308}{3465}$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 31 – Fonction F(x)=∫₀^{sin x} √(1-t²) dt
        // ======================================================================
        {
            numero: 31,
            enonce: `<p>On considère la fonction $F$ définie sur $\\left[0,\\dfrac{\\pi}{2}\\right]$ par :</p>
                      $$ F(x) = \\int_0^{\\sin x} \\sqrt{1-t^2} dt. $$
                      <ol>
                        <li>Vérifier que $F$ est dérivable sur $\\left[0,\\dfrac{\\pi}{2}\\right]$ et déterminer sa fonction dérivée.</li>
                        <li>En déduire que pour tout $x\\in\\left[0,\\dfrac{\\pi}{2}\\right]$, $F(x)=\\dfrac{x}{2} + \\dfrac{\\sin(2x)}{4}$.</li>
                        <li>Calculer $\\int_0^1 \\sqrt{1-t^2} dt$.</li>
                        <li>Étudier les variations de $F$.</li>
                        <li>Tracer la courbe représentative de $F$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex31q1',
                    texte: "1. Dérivabilité de $F$.",
                    solution: `<p>Soit $G(u)=\\int_0^u \\sqrt{1-t^2} dt$. $G$ est dérivable sur $[-1,1]$ et $G'(u)=\\sqrt{1-u^2}$.</p>
                               <p>$F(x)=G(\\sin x)$ est dérivable sur $\\left[0,\\dfrac{\\pi}{2}\\right]$ et :</p>
                               $$ F'(x) = \\sqrt{1-\\sin^2 x} \\cdot \\cos x = \\cos x \\cdot \\cos x = \\cos^2 x. $$
                               <p><strong>$F'(x)=\\cos^2 x$.</strong></p>`
                },
                {
                    id: 'ch7ex31q2',
                    texte: "2. Expression de $F$.",
                    solution: `<p>$F'(x)=\\cos^2 x = \\dfrac{1+\\cos 2x}{2}$.</p>
                               <p>Donc $F(x)=\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$.</p>
                               <p>$F(0)=\\int_0^0 \\sqrt{1-t^2} dt = 0$ ⇒ $C=0$.</p>
                               <p><strong>$F(x)=\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4}$.</strong></p>`
                },
                {
                    id: 'ch7ex31q3',
                    texte: "3. Calcul de l'intégrale.",
                    solution: `<p>$\\int_0^1 \\sqrt{1-t^2} dt$ est l'aire d'un quart de cercle de rayon 1.</p>
                               <p>Donc <strong>$\\int_0^1 \\sqrt{1-t^2} dt = \\dfrac{\\pi}{4}$.</strong></p>
                               <p>On peut aussi le vérifier avec la formule : $F(\\pi/2)=\\dfrac{\\pi}{4} + 0 = \\dfrac{\\pi}{4}$.</p>`
                },
                {
                    id: 'ch7ex31q4',
                    texte: "4. Variations de $F$.",
                    solution: `<p>$F'(x)=\\cos^2 x \\ge 0$ sur $\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                               <p>$F'$ s'annule en $x=\\dfrac{\\pi}{2}$.</p>
                               <p><strong>$F$ est strictement croissante sur $\\left[0,\\dfrac{\\pi}{2}\\right]$.</strong></p>
                               <p>$F(0)=0$, $F(\\pi/2)=\\dfrac{\\pi}{4}$.</p>`
                },
                {
                    id: 'ch7ex31q5',
                    texte: "5. Tracé de $F$.",
                    solution: `<div id="graph-ex31" class="graph-container" data-fn="x/2+sin(2*x)/4" data-xmin="0" data-xmax="1.6" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 32 – Fonction f(x)=x+√(4-x²) et intégrale
        // ======================================================================
        {
            numero: 32,
            enonce: `<p>On considère la fonction $f$ définie sur $[-2,2]$ par $f(x)=x+\\sqrt{4-x^2}$.</p>
                      <ol>
                        <li>Étudier $f$ et représenter sa courbe $C$.</li>
                        <li>Soit $F$ la fonction définie sur $[0,\\pi]$ par $F(x)=\\int_0^{2\\cos x} \\sqrt{4-t^2} dt$.</li>
                        <li>i. Montrer que $F$ est dérivable sur $[0,\\pi]$ et que $F'(x) = -4\\sin^2 x$.</li>
                        <li>ii. Calculer $F\\left(\\dfrac{\\pi}{2}\\right)$.</li>
                        <li>iii. En déduire que pour tout $x\\in[0,\\pi]$, $F(x)=-2x+\\sin(2x)+\\pi$.</li>
                        <li>Soit $A$ l'aire de la partie du plan limitée par la courbe $C$, l'axe des abscisses et les droites $y=x$, $x=-2$ et $x=2$.</li>
                        <li>i. Montrer que $A = F(0) - F(\\pi)$.</li>
                        <li>ii. En déduire $A$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex32q1',
                    texte: "1. Étude de $f$.",
                    solution: `<p>$f$ est définie sur $[-2,2]$.</p>
                               <p>$f'(x)=1 - \\dfrac{x}{\\sqrt{4-x^2}}$.</p>
                               <p>$f'(x)=0$ ⇔ $\\sqrt{4-x^2}=x$ ⇒ $4-x^2=x^2$ ⇒ $x^2=2$ ⇒ $x=\\sqrt{2}$ (car $x\\ge0$).</p>
                               <p>Tableau de variations :</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-2$</td><td></td><td>$\\sqrt{2}$</td><td></td><td>$2$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-2$</td><td>$\\searrow$</td><td>$2\\sqrt{2}$</td><td>$\\nearrow$</td><td>$2$</td></tr>
                               </table>
                               <p>On a $f(-2)=-2$, $f(2)=2$, $f(\\sqrt{2})=2\\sqrt{2}$.</p>
                               <div id="graph-ex32" class="graph-container" data-fn="x+sqrt(4-x*x)" data-xmin="-3" data-xmax="3" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch7ex32q2',
                    texte: "2.i. Dérivée de $F$.",
                    solution: `<p>Soit $G(u)=\\int_0^u \\sqrt{4-t^2} dt$. $G$ est dérivable et $G'(u)=\\sqrt{4-u^2}$.</p>
                               <p>$F(x)=G(2\\cos x)$ est dérivable sur $[0,\\pi]$.</p>
                               $$ F'(x) = \\sqrt{4-4\\cos^2 x} \\cdot (-2\\sin x) = 2|\\sin x| \\cdot (-2\\sin x) = -4\\sin^2 x. $$
                               <p>Sur $[0,\\pi]$, $\\sin x \\ge 0$, donc $|\\sin x|=\\sin x$.</p>
                               <p><strong>$F'(x)=-4\\sin^2 x$.</strong></p>`
                },
                {
                    id: 'ch7ex32q3',
                    texte: "2.ii. Calcul de $F(\\pi/2)$.",
                    solution: `<p>$F(\\pi/2)=\\int_0^{2\\cos(\\pi/2)} \\sqrt{4-t^2} dt = \\int_0^0 \\sqrt{4-t^2} dt = 0$.</p>
                               <p><strong>$F(\\pi/2)=0$.</strong></p>`
                },
                {
                    id: 'ch7ex32q4',
                    texte: "2.iii. Expression de $F$.",
                    solution: `<p>$F'(x)=-4\\sin^2 x = -2(1-\\cos 2x) = -2 + 2\\cos 2x$.</p>
                               <p>Donc $F(x)=-2x+\\sin 2x+C$.</p>
                               <p>$F(\\pi/2)= -\\pi + \\sin\\pi + C = -\\pi + C = 0$ ⇒ $C=\\pi$.</p>
                               <p><strong>$F(x)=-2x+\\sin 2x+\\pi$.</strong></p>`
                },
                {
                    id: 'ch7ex32q5',
                    texte: "3.i. Aire $A$.",
                    solution: `<p>$A = \\int_{-2}^2 |f(x)-x| dx$ car l'aire est entre $C$ et la droite $y=x$.</p>
                               <p>$|f(x)-x| = |\\sqrt{4-x^2}| = \\sqrt{4-x^2}$.</p>
                               <p>Donc $A = \\int_{-2}^2 \\sqrt{4-x^2} dx$.</p>
                               <p>Par symétrie, $A = 2\\int_0^2 \\sqrt{4-x^2} dx$.</p>
                               <p>Or $\\int_0^2 \\sqrt{4-x^2} dx$ est l'aire d'un quart de cercle de rayon 2 : $\\dfrac{\\pi\\cdot 2^2}{4} = \\pi$.</p>
                               <p>Donc $A = 2\\pi$.</p>
                               <p>On a aussi $F(0)-F(\\pi) = (\\pi) - (-2\\pi+0+\\pi) = \\pi - (-\\pi) = 2\\pi$.</p>
                               <p><strong>$A = F(0)-F(\\pi) = 2\\pi$.</strong></p>`
                },
                {
                    id: 'ch7ex32q6',
                    texte: "3.ii. Valeur de $A$.",
                    solution: `<p>D'après la question précédente, <strong>$A = 2\\pi$ u.a.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 33 – Fonction F(x)=∫₀^{2cos x} √(4-t²) dt (suite)
        // ======================================================================
        {
            numero: 33,
            enonce: `<p>On considère la fonction $F$ définie sur $[0,\\pi]$ par $F(x)=\\int_0^{2\\cos x} \\sqrt{4-t^2} dt$.</p>
                      <ol>
                        <li>Montrer que $F$ est dérivable sur $[0,\\pi]$ et que $F'(x)=-4\\sin^2 x$.</li>
                        <li>Calculer $F(0)$ et $F(\\pi)$.</li>
                        <li>En déduire une expression simplifiée de $F(x)$.</li>
                        <li>Étudier les variations de $F$.</li>
                        <li>Tracer la courbe représentative de $F$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex33q1',
                    texte: "1. Dérivée de $F$.",
                    solution: `<p>Comme dans l'exercice précédent, <strong>$F'(x)=-4\\sin^2 x$.</strong></p>`
                },
                {
                    id: 'ch7ex33q2',
                    texte: "2. Calcul de $F(0)$ et $F(\\pi)$.",
                    solution: `<p>$F(0)=\\int_0^{2} \\sqrt{4-t^2} dt$ = aire d'un demi-cercle de rayon 2 = $\\dfrac{\\pi\\cdot 2^2}{2} = 2\\pi$.</p>
                               <p>$F(\\pi)=\\int_0^{-2} \\sqrt{4-t^2} dt = -\\int_{-2}^0 \\sqrt{4-t^2} dt = -\\dfrac{1}{2}\\int_{-2}^2 \\sqrt{4-t^2} dt = -\\dfrac{1}{2}\\cdot 2\\pi = -\\pi$.</p>
                               <p><strong>$F(0)=2\\pi$, $F(\\pi)=-\\pi$.</strong></p>`
                },
                {
                    id: 'ch7ex33q3',
                    texte: "3. Expression de $F$.",
                    solution: `<p>D'après la question 2.iii de l'exercice 32 : <strong>$F(x)=-2x+\\sin 2x+\\pi$.</strong></p>`
                },
                {
                    id: 'ch7ex33q4',
                    texte: "4. Variations de $F$.",
                    solution: `<p>$F'(x)=-4\\sin^2 x \\le 0$ sur $[0,\\pi]$.</p>
                               <p>$F'$ s'annule en $0$ et $\\pi$.</p>
                               <p><strong>$F$ est strictement décroissante sur $[0,\\pi]$.</strong></p>`
                },
                {
                    id: 'ch7ex33q5',
                    texte: "5. Tracé de $F$.",
                    solution: `<div id="graph-ex33" class="graph-container" data-fn="-2*x+sin(2*x)+pi" data-xmin="0" data-xmax="3.2" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 34 – Suite J_n = ∫₀^1 t^(2n)/(1+t²) dt (déjà traité)
        // ======================================================================
        {
            numero: 34,
            enonce: `<p>On considère la suite $(J_n)$ définie par $J_n = \\int_0^1 \\dfrac{t^{2n}}{1+t^2} dt$, $n\\ge0$.</p>
                      <ol>
                        <li>Montrer que $0 \\le J_n \\le \\dfrac{1}{2n+1}$.</li>
                        <li>En déduire $\\lim_{n\\to+\\infty} J_n$.</li>
                        <li>Montrer que $J_n + J_{n+1} = \\dfrac{1}{2n+1}$.</li>
                        <li>Calculer $J_0, J_1, J_2, J_3, J_4, J_5$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex34q1',
                    texte: "1. Encadrement de $J_n$.",
                    solution: `<p>Sur $[0,1]$, $0 \\le \\dfrac{t^{2n}}{1+t^2} \\le t^{2n}$.</p>
                               <p>Donc <strong>$0 \\le J_n \\le \\dfrac{1}{2n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex34q2',
                    texte: "2. Limite de $(J_n)$.",
                    solution: `<p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to+\\infty} J_n = 0$.</strong></p>`
                },
                {
                    id: 'ch7ex34q3',
                    texte: "3. Relation $J_n+J_{n+1}$.",
                    solution: `<p>$$ J_n+J_{n+1} = \\int_0^1 \\dfrac{t^{2n}+t^{2n+2}}{1+t^2} dt = \\int_0^1 \\dfrac{t^{2n}(1+t^2)}{1+t^2} dt = \\int_0^1 t^{2n} dt = \\dfrac{1}{2n+1}. $$</p>
                               <p><strong>$J_n+J_{n+1} = \\dfrac{1}{2n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex34q4',
                    texte: "4. Calcul des premiers termes.",
                    solution: `<p>$J_0 = \\int_0^1 \\dfrac{1}{1+t^2} dt = \\dfrac{\\pi}{4}$.</p>
                               <p>$J_1 = 1 - J_0 = 1 - \\dfrac{\\pi}{4}$.</p>
                               <p>$J_2 = \\dfrac{1}{3} - J_1 = \\dfrac{1}{3} - 1 + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} - \\dfrac{2}{3}$.</p>
                               <p>$J_3 = \\dfrac{1}{5} - J_2 = \\dfrac{1}{5} - \\dfrac{\\pi}{4} + \\dfrac{2}{3} = \\dfrac{13}{15} - \\dfrac{\\pi}{4}$.</p>
                               <p>$J_4 = \\dfrac{1}{7} - J_3 = \\dfrac{1}{7} - \\dfrac{13}{15} + \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} - \\dfrac{76}{105}$.</p>
                               <p>$J_5 = \\dfrac{1}{9} - J_4 = \\dfrac{1}{9} - \\dfrac{\\pi}{4} + \\dfrac{76}{105} = \\dfrac{239}{315} - \\dfrac{\\pi}{4}$.</p>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 25 à 34) – Volumes et fonctions définies par une intégrale – ajoutée avec succès.");
    console.log("Chapitre 7 (Intégrales) désormais complet !");
})();