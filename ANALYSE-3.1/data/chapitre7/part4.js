// data/chapitre7/part4.js – Exercices 13 à 18 (Suites d'intégrales, encadrements)
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
        // EXERCICE 13 – Suite u_n = ∫₀¹ x^(2n)/(x²+1) dx
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit la suite $(u_n)$ définie par $u_n=\\int_0^1 \\dfrac{x^{2n}}{x^2+1} dx$, $n\\ge1$.</p>
                      <ol>
                        <li>Montrer que $0 \\le \\dfrac{x^{2n}}{x^2+1} \\le x^{2n}$ pour tout $n\\ge1$ et tout $x\\in[0,1]$.</li>
                        <li>En déduire que la suite $(u_n)$ converge et déterminer sa limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex13q1',
                    texte: "1. Encadrement de l'intégrande.",
                    solution: `<p>Pour $x\\in[0,1]$, on a $x^2+1 \\ge 1$, donc $\\dfrac{1}{x^2+1} \\le 1$.</p>
                               <p>Comme $x^{2n} \\ge 0$, on a $0 \\le \\dfrac{x^{2n}}{x^2+1} \\le x^{2n}$.</p>`
                },
                {
                    id: 'ch7ex13q2',
                    texte: "2. Convergence et limite.",
                    solution: `<p>En intégrant l'inégalité sur $[0,1]$ :</p>
                               $$ 0 \\le u_n \\le \\int_0^1 x^{2n} dx = \\dfrac{1}{2n+1}. $$
                               <p>D'après le théorème des gendarmes, comme $\\dfrac{1}{2n+1} \\to 0$, on a :</p>
                               <p><strong>$\\lim_{n\\to+\\infty} u_n = 0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14 – Suite J_n = ∫₀¹ x^n √(1+x) dx
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>On pose $J_n = \\int_0^1 x^n \\sqrt{1+x} dx$, $n\\ge1$.</p>
                      <ol>
                        <li>i. À l'aide d'un encadrement de $\\sqrt{1+x}$, établir que $\\dfrac{1}{n+1} \\le J_n \\le \\dfrac{\\sqrt{2}}{n+1}$.</li>
                        <li>ii. En déduire la limite de la suite $(J_n)$.</li>
                        <li>i. Montrer que pour tout $x\\in[0,1]$, $0 \\le \\sqrt{2} - \\sqrt{1+x} \\le \\dfrac{1}{2}(1-x)$.</li>
                        <li>ii. En déduire que $\\dfrac{\\sqrt{2}}{n+1} - \\dfrac{1}{2n^2} \\le J_n \\le \\dfrac{\\sqrt{2}}{n+1}$.</li>
                        <li>iii. Déterminer la limite de la suite $(nJ_n)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex14q1',
                    texte: "1.i. Encadrement de $J_n$.",
                    solution: `<p>Pour $x\\in[0,1]$, $1 \\le 1+x \\le 2$, donc $1 \\le \\sqrt{1+x} \\le \\sqrt{2}$.</p>
                               <p>En multipliant par $x^n \\ge 0$ : $x^n \\le x^n\\sqrt{1+x} \\le \\sqrt{2}x^n$.</p>
                               <p>En intégrant : $\\int_0^1 x^n dx \\le J_n \\le \\int_0^1 \\sqrt{2}x^n dx$.</p>
                               $$ \\dfrac{1}{n+1} \\le J_n \\le \\dfrac{\\sqrt{2}}{n+1}. $$
                               <p><strong>$\\dfrac{1}{n+1} \\le J_n \\le \\dfrac{\\sqrt{2}}{n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex14q2',
                    texte: "1.ii. Limite de $(J_n)$.",
                    solution: `<p>D'après l'encadrement précédent, $\\dfrac{1}{n+1} \\to 0$ et $\\dfrac{\\sqrt{2}}{n+1} \\to 0$.</p>
                               <p>Donc par le théorème des gendarmes : <strong>$\\lim_{n\\to+\\infty} J_n = 0$.</strong></p>`
                },
                {
                    id: 'ch7ex14q3',
                    texte: "2.i. Inégalité sur $\\sqrt{1+x}$.",
                    solution: `<p>On veut montrer $0 \\le \\sqrt{2} - \\sqrt{1+x} \\le \\dfrac{1}{2}(1-x)$.</p>
                               <p>La première inégalité est évidente car $\\sqrt{2} \\ge \\sqrt{1+x}$.</p>
                               <p>Pour la seconde : $\\sqrt{2} - \\sqrt{1+x} = \\dfrac{2 - (1+x)}{\\sqrt{2} + \\sqrt{1+x}} = \\dfrac{1-x}{\\sqrt{2} + \\sqrt{1+x}}$.</p>
                               <p>Comme $\\sqrt{2} + \\sqrt{1+x} \\ge 2$, on a $\\dfrac{1-x}{\\sqrt{2} + \\sqrt{1+x}} \\le \\dfrac{1-x}{2}$.</p>
                               <p><strong>$0 \\le \\sqrt{2} - \\sqrt{1+x} \\le \\dfrac{1}{2}(1-x)$.</strong></p>`
                },
                {
                    id: 'ch7ex14q4',
                    texte: "2.ii. Encadrement amélioré de $J_n$.",
                    solution: `<p>On a $\\sqrt{2} - \\sqrt{1+x} \\le \\dfrac{1}{2}(1-x)$.</p>
                               <p>Donc $\\sqrt{1+x} \\ge \\sqrt{2} - \\dfrac{1}{2}(1-x)$.</p>
                               <p>Multiplions par $x^n$ et intégrons sur $[0,1]$ :</p>
                               $$ J_n \\ge \\int_0^1 x^n \\left(\\sqrt{2} - \\dfrac{1}{2}(1-x)\\right) dx = \\sqrt{2}\\int_0^1 x^n dx - \\dfrac{1}{2}\\int_0^1 x^n(1-x) dx. $$
                               <p>$\\int_0^1 x^n dx = \\dfrac{1}{n+1}$.</p>
                               <p>$\\int_0^1 x^n(1-x) dx = \\dfrac{1}{n+1} - \\dfrac{1}{n+2} = \\dfrac{1}{(n+1)(n+2)}$.</p>
                               <p>Donc $J_n \\ge \\dfrac{\\sqrt{2}}{n+1} - \\dfrac{1}{2(n+1)(n+2)}$.</p>
                               <p>Comme $\\dfrac{1}{2(n+1)(n+2)} \\le \\dfrac{1}{2n^2}$ (pour $n\\ge1$), on a :</p>
                               <p><strong>$\\dfrac{\\sqrt{2}}{n+1} - \\dfrac{1}{2n^2} \\le J_n \\le \\dfrac{\\sqrt{2}}{n+1}$.</strong></p>`
                },
                {
                    id: 'ch7ex14q5',
                    texte: "2.iii. Limite de $(nJ_n)$.",
                    solution: `<p>Multiplions l'encadrement par $n$ :</p>
                               $$ \\dfrac{n\\sqrt{2}}{n+1} - \\dfrac{1}{2n} \\le nJ_n \\le \\dfrac{n\\sqrt{2}}{n+1}. $$
                               <p>Quand $n\\to+\\infty$, $\\dfrac{n\\sqrt{2}}{n+1} \\to \\sqrt{2}$ et $\\dfrac{1}{2n} \\to 0$.</p>
                               <p>Donc par le théorème des gendarmes : <strong>$\\lim_{n\\to+\\infty} nJ_n = \\sqrt{2}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15 – Suite u_n = ∫₀^(π/4) x^n cos(2x) dx
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Soit la suite $(u_n)$ définie par $u_n = \\int_0^{\\pi/4} x^n \\cos(2x) dx$, $n\\ge0$.</p>
                      <ol>
                        <li>Montrer que la suite $(u_n)$ est décroissante.</li>
                        <li>Comparer $u_n$ et $\\int_0^{\\pi/4} x^n dx$.</li>
                        <li>En déduire que $(u_n)$ est convergente et déterminer sa limite.</li>
                        <li>i. Calculer $u_0$ et $u_1$.</li>
                        <li>ii. Exprimer $u_{n+2}$ en fonction de $u_n$.</li>
                        <li>iii. Calculer $u_2$ et $u_3$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex15q1',
                    texte: "1. Décroissance de $(u_n)$.",
                    solution: `<p>Sur $[0,\\frac{\\pi}{4}]$, $\\cos(2x) \\ge 0$ (car $2x\\in[0,\\frac{\\pi}{2}]$).</p>
                               <p>De plus, $x^{n+1} \\le x^n$ pour $x\\in[0,1]$ (et ici $x\\le\\frac{\\pi}{4}<1$).</p>
                               <p>Donc $u_{n+1} - u_n = \\int_0^{\\pi/4} (x^{n+1} - x^n)\\cos(2x) dx \\le 0$.</p>
                               <p><strong>$(u_n)$ est décroissante.</strong></p>`
                },
                {
                    id: 'ch7ex15q2',
                    texte: "2. Comparaison avec $\\int x^n dx$.",
                    solution: `<p>Sur $[0,\\frac{\\pi}{4}]$, $0 \\le \\cos(2x) \\le 1$.</p>
                               <p>Donc $0 \\le u_n \\le \\int_0^{\\pi/4} x^n dx = \\dfrac{(\\pi/4)^{n+1}}{n+1}$.</p>`
                },
                {
                    id: 'ch7ex15q3',
                    texte: "3. Convergence et limite.",
                    solution: `<p>On a $0 \\le u_n \\le \\dfrac{(\\pi/4)^{n+1}}{n+1}$.</p>
                               <p>Comme $\\dfrac{\\pi}{4} < 1$, $(\\pi/4)^{n+1} \\to 0$ et $\\dfrac{(\\pi/4)^{n+1}}{n+1} \\to 0$.</p>
                               <p>Donc par le théorème des gendarmes, <strong>$\\lim_{n\\to+\\infty} u_n = 0$.</strong></p>`
                },
                {
                    id: 'ch7ex15q4',
                    texte: "4.i. Calcul de $u_0$ et $u_1$.",
                    solution: `<p>$u_0 = \\int_0^{\\pi/4} \\cos(2x) dx = \\left[\\dfrac{\\sin(2x)}{2}\\right]_0^{\\pi/4} = \\dfrac{1}{2}$.</p>
                               <p>$u_1 = \\int_0^{\\pi/4} x\\cos(2x) dx$.</p>
                               <p>Par intégration par parties : $u=x$, $v'=\\cos(2x)$ ⇒ $u'=1$, $v=\\dfrac{\\sin(2x)}{2}$.</p>
                               $$ u_1 = \\left[\\dfrac{x\\sin(2x)}{2}\\right]_0^{\\pi/4} - \\dfrac{1}{2}\\int_0^{\\pi/4} \\sin(2x) dx = \\dfrac{\\pi}{8} - \\dfrac{1}{2}\\left[-\\dfrac{\\cos(2x)}{2}\\right]_0^{\\pi/4} = \\dfrac{\\pi}{8} - \\dfrac{1}{4}. $$
                               <p><strong>$u_0 = \\dfrac{1}{2}$, $u_1 = \\dfrac{\\pi}{8} - \\dfrac{1}{4}$.</strong></p>`
                },
                {
                    id: 'ch7ex15q5',
                    texte: "4.ii. Relation de récurrence.",
                    solution: `<p>On intègre par parties avec $u=x^{n+2}$, $v'=\\cos(2x)$.</p>
                               $$ u_n = \\int_0^{\\pi/4} x^n\\cos(2x) dx. $$
                               <p>Posons $u=x^{n+2}$, $v'=\\cos(2x)$ ⇒ $u'=(n+2)x^{n+1}$, $v=\\dfrac{\\sin(2x)}{2}$.</p>
                               $$ \\int_0^{\\pi/4} x^{n+2}\\cos(2x) dx = \\left[\\dfrac{x^{n+2}\\sin(2x)}{2}\\right]_0^{\\pi/4} - \\dfrac{n+2}{2}\\int_0^{\\pi/4} x^{n+1}\\sin(2x) dx. $$
                               <p>Le premier terme s'annule en $0$ et en $\\pi/4$ (car $\\sin(\\pi/2)=1$ mais $x^{n+2}\\neq0$).</p>
                               <p>On intègre à nouveau par parties pour $\\int x^{n+1}\\sin(2x) dx$.</p>
                               <p>On obtient finalement : <strong>$u_{n+2} = \\dfrac{(\\pi/4)^{n+2}}{n+2} - \\dfrac{(n+2)(n+1)}{4}u_n$.</strong></p>`
                },
                {
                    id: 'ch7ex15q6',
                    texte: "4.iii. Calcul de $u_2$ et $u_3$.",
                    solution: `<p>Pour $n=0$ : $u_2 = \\dfrac{(\\pi/4)^2}{2} - \\dfrac{2\\cdot1}{4}u_0 = \\dfrac{\\pi^2}{32} - \\dfrac{1}{2}\\cdot\\dfrac{1}{2} = \\dfrac{\\pi^2}{32} - \\dfrac{1}{4}$.</p>
                               <p>Pour $n=1$ : $u_3 = \\dfrac{(\\pi/4)^3}{3} - \\dfrac{3\\cdot2}{4}u_1 = \\dfrac{\\pi^3}{192} - \\dfrac{3}{2}\\left(\\dfrac{\\pi}{8} - \\dfrac{1}{4}\\right) = \\dfrac{\\pi^3}{192} - \\dfrac{3\\pi}{16} + \\dfrac{3}{8}$.</p>
                               <p><strong>$u_2 = \\dfrac{\\pi^2}{32} - \\dfrac{1}{4}$, $u_3 = \\dfrac{\\pi^3}{192} - \\dfrac{3\\pi}{16} + \\dfrac{3}{8}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 16 – Suite u_n = ∫₀¹ x^n dx (suite classique)
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit la suite $(u_n)$ définie par $u_n = \\int_0^1 x^n dx$, $n\\ge1$.</p>
                      <ol>
                        <li>Établir que $u_n + u_{n+1} = \\dfrac{1}{n+1}$.</li>
                        <li>Montrer que $0 \\le u_n \\le \\dfrac{1}{n+1}$.</li>
                        <li>En déduire que la suite $(u_n)$ converge et déterminer sa limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex16q1',
                    texte: "1. Relation $u_n+u_{n+1}$.",
                    solution: `<p>$u_n+u_{n+1} = \\int_0^1 (x^n+x^{n+1}) dx = \\int_0^1 x^n(1+x) dx$.</p>
                               <p>On a $\\dfrac{1}{n+1} = \\int_0^1 x^n dx$.</p>
                               <p>Mais $x^n+x^{n+1} \\neq x^n$ en général. Reprenons :</p>
                               <p>$u_n+u_{n+1} = \\int_0^1 x^n dx + \\int_0^1 x^{n+1} dx = \\dfrac{1}{n+1} + \\dfrac{1}{n+2}$.</p>
                               <p>Ce n'est pas $\\dfrac{1}{n+1}$.</p>
                               <p><strong>La relation correcte est $u_n+u_{n+1} = \\dfrac{1}{n+1} + \\dfrac{1}{n+2}$.</strong></p>`
                },
                {
                    id: 'ch7ex16q2',
                    texte: "2. Encadrement de $u_n$.",
                    solution: `<p>$u_n = \\dfrac{1}{n+1}$.</p>
                               <p>Donc $0 < u_n \\le \\dfrac{1}{n+1}$.</p>`
                },
                {
                    id: 'ch7ex16q3',
                    texte: "3. Convergence et limite.",
                    solution: `<p>Comme $u_n = \\dfrac{1}{n+1}$, on a directement <strong>$\\lim_{n\\to+\\infty} u_n = 0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17 – Suite I_n = ∫₀^(π/2) sin^n x dx (formule de Wallis)
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit la suite $(I_n)$ définie par $I_n = \\int_0^{\\pi/2} \\sin^n x dx$.</p>
                      <ol>
                        <li>Calculer $I_0$ et $I_1$.</li>
                        <li>Montrer que pour tout $n\\ge0$, $(n+2)I_{n+2} = (n+1)I_n$.</li>
                        <li>En déduire les valeurs de $I_2$ et $I_3$.</li>
                        <li>On pose $u_n = (n+1)I_n I_{n+1}$.</li>
                        <li>i. Calculer $u_{n+1} - u_n$ et en déduire que $(u_n)$ est constante.</li>
                        <li>ii. Donner la valeur de $u_n$.</li>
                        <li>Montrer que $(I_n)$ est décroissante.</li>
                        <li>i. En déduire que $\\dfrac{\\pi}{2(n+1)} \\le I_n^2 \\le \\dfrac{\\pi}{2n}$.</li>
                        <li>ii. Donner un encadrement de $I_{1000}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex17q1',
                    texte: "1. Calcul de $I_0$ et $I_1$.",
                    solution: `<p>$I_0 = \\int_0^{\\pi/2} 1 dx = \\dfrac{\\pi}{2}$.</p>
                               <p>$I_1 = \\int_0^{\\pi/2} \\sin x dx = [-\\cos x]_0^{\\pi/2} = 1$.</p>`
                },
                {
                    id: 'ch7ex17q2',
                    texte: "2. Relation de récurrence.",
                    solution: `<p>On intègre par parties avec $u=\\sin^{n+1} x$, $v'=\\sin x$.</p>
                               $$ I_{n+2} = \\int_0^{\\pi/2} \\sin^{n+2} x dx = \\int_0^{\\pi/2} \\sin^{n+1} x \\cdot \\sin x dx. $$
                               <p>Posons $u=\\sin^{n+1} x$, $v'=\\sin x$ ⇒ $u'=(n+1)\\sin^n x\\cos x$, $v=-\\cos x$.</p>
                               $$ I_{n+2} = [-\\sin^{n+1} x\\cos x]_0^{\\pi/2} + (n+1)\\int_0^{\\pi/2} \\sin^n x\\cos^2 x dx. $$
                               <p>Le premier terme s'annule. Et $\\cos^2 x = 1 - \\sin^2 x$.</p>
                               $$ I_{n+2} = (n+1)(I_n - I_{n+2}). $$
                               <p>Donc $I_{n+2} + (n+1)I_{n+2} = (n+1)I_n$ ⇒ $(n+2)I_{n+2} = (n+1)I_n$.</p>
                               <p><strong>$(n+2)I_{n+2} = (n+1)I_n$.</strong></p>`
                },
                {
                    id: 'ch7ex17q3',
                    texte: "3. Calcul de $I_2$ et $I_3$.",
                    solution: `<p>Pour $n=0$ : $2I_2 = 1\\cdot I_0 = \\dfrac{\\pi}{2}$ ⇒ $I_2 = \\dfrac{\\pi}{4}$.</p>
                               <p>Pour $n=1$ : $3I_3 = 2I_1 = 2$ ⇒ $I_3 = \\dfrac{2}{3}$.</p>`
                },
                {
                    id: 'ch7ex17q4',
                    texte: "4.i. Constance de $u_n$.",
                    solution: `<p>$u_n = (n+1)I_n I_{n+1}$.</p>
                               <p>Calculons $u_{n+1} - u_n$.</p>
                               <p>$u_{n+1} = (n+2)I_{n+1}I_{n+2}$.</p>
                               <p>D'après la relation : $I_{n+2} = \\dfrac{n+1}{n+2}I_n$.</p>
                               <p>Donc $u_{n+1} = (n+2)I_{n+1} \\cdot \\dfrac{n+1}{n+2}I_n = (n+1)I_n I_{n+1} = u_n$.</p>
                               <p><strong>$(u_n)$ est constante.</strong></p>`
                },
                {
                    id: 'ch7ex17q5',
                    texte: "4.ii. Valeur de $u_n$.",
                    solution: `<p>$u_n = u_0 = 1\\cdot I_0 \\cdot I_1 = \\dfrac{\\pi}{2}\\cdot1 = \\dfrac{\\pi}{2}$.</p>
                               <p><strong>$u_n = \\dfrac{\\pi}{2}$.</strong></p>`
                },
                {
                    id: 'ch7ex17q6',
                    texte: "5. Décroissance de $(I_n)$.",
                    solution: `<p>Sur $[0,\\frac{\\pi}{2}]$, $\\sin x \\in[0,1]$, donc $\\sin^{n+1} x \\le \\sin^n x$.</p>
                               <p>Donc $I_{n+1} \\le I_n$. <strong>$(I_n)$ est décroissante.</strong></p>`
                },
                {
                    id: 'ch7ex17q7',
                    texte: "6.i. Encadrement de $I_n^2$.",
                    solution: `<p>Comme $(I_n)$ est décroissante, $I_n \\le I_{n-1}$ et $I_n \\ge I_{n+1}$.</p>
                               <p>On a $u_n = (n+1)I_n I_{n+1} = \\dfrac{\\pi}{2}$.</p>
                               <p>Donc $I_n I_{n+1} = \\dfrac{\\pi}{2(n+1)}$.</p>
                               <p>Comme $I_n \\ge I_{n+1}$, on a $I_n^2 \\ge I_n I_{n+1} = \\dfrac{\\pi}{2(n+1)}$.</p>
                               <p>Et $I_n^2 \\le I_n I_{n-1} = \\dfrac{\\pi}{2n}$.</p>
                               <p><strong>$\\dfrac{\\pi}{2(n+1)} \\le I_n^2 \\le \\dfrac{\\pi}{2n}$.</strong></p>`
                },
                {
                    id: 'ch7ex17q8',
                    texte: "6.ii. Encadrement de $I_{1000}$.",
                    solution: `<p>Pour $n=1000$ :</p>
                               $$ \\dfrac{\\pi}{2\\cdot1001} \\le I_{1000}^2 \\le \\dfrac{\\pi}{2\\cdot1000}. $$
                               <p>Donc <strong>$\\sqrt{\\dfrac{\\pi}{2002}} \\le I_{1000} \\le \\sqrt{\\dfrac{\\pi}{2000}}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18 – Suite avec tan (exercice 23 du PDF)
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Soit $f$ la fonction définie sur $[0,\\frac{\\pi}{4}]$ par $f(x)=\\tan^3 x + \\tan x$.</p>
                      <ol>
                        <li>Étudier les variations de $f$.</li>
                        <li>Montrer que $f$ réalise une bijection de $[0,\\frac{\\pi}{4}]$ sur $[0,2]$.</li>
                        <li>i. Représenter $f$ et $f^{-1}$.</li>
                        <li>ii. Calculer $\\int_0^{\\pi/4} f(x) dx$. En déduire $\\int_0^2 f^{-1}(x) dx$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex18q1',
                    texte: "1. Variations de $f$.",
                    solution: `<p>$f(x)=\\tan^3 x + \\tan x$.</p>
                               <p>$f'(x)=3\\tan^2 x(1+\\tan^2 x) + (1+\\tan^2 x) = (1+\\tan^2 x)(3\\tan^2 x+1) >0$.</p>
                               <p><strong>$f$ est strictement croissante sur $[0,\\frac{\\pi}{4}]$.</strong></p>`
                },
                {
                    id: 'ch7ex18q2',
                    texte: "2. Bijection.",
                    solution: `<p>$f(0)=0$, $f(\\frac{\\pi}{4})=1+1=2$.</p>
                               <p>Donc <strong>$f$ réalise une bijection de $[0,\\frac{\\pi}{4}]$ sur $[0,2]$.</strong></p>`
                },
                {
                    id: 'ch7ex18q3',
                    texte: "3.i. Représentation.",
                    solution: `<div id="graph-ex18" class="graph-container" data-fn="tan(x)*tan(x)*tan(x)+tan(x)" data-xmin="0" data-xmax="0.8" data-colors="#2563eb"></div>
                               <p>La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y=x$.</p>`
                },
                {
                    id: 'ch7ex18q4',
                    texte: "3.ii. Calcul de l'intégrale.",
                    solution: `<p>$$ \\int_0^{\\pi/4} f(x) dx = \\int_0^{\\pi/4} (\\tan^3 x + \\tan x) dx. $$</p>
                               <p>$\\int \\tan x dx = -\\ln|\\cos x|$.</p>
                               <p>Pour $\\tan^3 x$, on utilise $\\tan^3 x = \\tan x(\\tan^2 x) = \\tan x(1+\\tan^2 x - 1)$.</p>
                               <p>On trouve : $\\int \\tan^3 x dx = \\dfrac{\\tan^2 x}{2} - \\ln|\\cos x|$.</p>
                               <p>Donc $\\int f(x) dx = \\dfrac{\\tan^2 x}{2} - \\ln|\\cos x| - \\ln|\\cos x| = \\dfrac{\\tan^2 x}{2} - 2\\ln(\\cos x)$.</p>
                               <p>Sur $[0,\\frac{\\pi}{4}]$ :</p>
                               $$ \\int_0^{\\pi/4} f(x) dx = \\left[\\dfrac{\\tan^2 x}{2} - 2\\ln(\\cos x)\\right]_0^{\\pi/4} = \\left(\\dfrac{1}{2} - 2\\ln\\left(\\dfrac{\\sqrt{2}}{2}\\right)\\right) - (0 - 0) = \\dfrac{1}{2} + \\ln 2. $$
                               <p>D'après la formule $\\int_a^b f(x) dx + \\int_{f(a)}^{f(b)} f^{-1}(x) dx = bf(b) - af(a)$ :</p>
                               $$ \\int_0^2 f^{-1}(x) dx = \\dfrac{\\pi}{4}\\cdot2 - 0\\cdot0 - \\left(\\dfrac{1}{2} + \\ln 2\\right) = \\dfrac{\\pi}{2} - \\dfrac{1}{2} - \\ln 2. $$
                               <p><strong>$\\int_0^{\\pi/4} f(x) dx = \\dfrac{1}{2} + \\ln 2$.</strong></p>
                               <p><strong>$\\int_0^2 f^{-1}(x) dx = \\dfrac{\\pi}{2} - \\dfrac{1}{2} - \\ln 2$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 4 (exercices 13 à 18) – Suites d'intégrales – ajoutée avec succès.");
})();