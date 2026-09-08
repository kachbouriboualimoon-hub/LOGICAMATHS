// data/chapitre6/part6.js – Exercices 26 à 30 (Études complètes, bijections, applications)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch6 = data.chapitres.find(c => c.id === 6);
    if (!ch6) {
        console.error("Chapitre 6 introuvable. Chargez d'abord data/chapitre6_base.js.");
        return;
    }

    ch6.exercices.push(
        // ======================================================================
        // EXERCICE 26 – Étude complète de f(x)=x² ln x
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x)=x^2\\ln x$.</p>
                      <ol>
                        <li>Déterminer le domaine de définition, les limites aux bornes.</li>
                        <li>Étudier les variations de $f$.</li>
                        <li>Déterminer une primitive $F$ de $f$ sur $]0,+\\infty[$.</li>
                        <li>Montrer que $F$ est strictement croissante sur $]0,+\\infty[$.</li>
                        <li>Déterminer $\\lim_{x\\to0^+}F(x)$ et $\\lim_{x\\to+\\infty}F(x)$.</li>
                        <li>Montrer que $F$ réalise une bijection de $]0,+\\infty[$ sur un intervalle $I$ que l'on précisera.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex26q1',
                    texte: "1. Domaine et limites.",
                    solution: `<p><strong>Domaine :</strong> $]0,+\\infty[$ car $\\ln x$ est définie pour $x>0$.</p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} x^2\\ln x = 0 \\quad (\\text{car } \\lim_{x\\to0^+} x^2\\ln x = 0). $$
                               $$ \\lim_{x\\to+\\infty} f(x) = +\\infty \\quad (\\text{car } x^2 \\text{ domine } \\ln x). $$`
                },
                {
                    id: 'ch6ex26q2',
                    texte: "2. Variations de $f$.",
                    solution: `<p>$f$ est dérivable sur $]0,+\\infty[$ comme produit de fonctions dérivables.</p>
                               $$ f'(x) = 2x\\ln x + x^2\\cdot\\dfrac{1}{x} = 2x\\ln x + x = x(2\\ln x + 1). $$
                               <p>$f'(x)=0$ ⇔ $2\\ln x +1=0$ ⇔ $\\ln x = -\\dfrac{1}{2}$ ⇔ $x=e^{-1/2} = \\dfrac{1}{\\sqrt{e}}$.</p>
                               <p>Signe de $f'$ :</p>
                               <ul>
                                 <li>Si $0<x<e^{-1/2}$ : $2\\ln x+1<0$ ⇒ $f'<0$.</li>
                                 <li>Si $x>e^{-1/2}$ : $2\\ln x+1>0$ ⇒ $f'>0$.</li>
                               </ul>
                               <p>Tableau :</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$e^{-1/2}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0$</td><td>$\\searrow$</td><td>$-\\dfrac{1}{2e}$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Car $f(e^{-1/2}) = e^{-1} \\cdot (-\\frac{1}{2}) = -\\dfrac{1}{2e}$.</p>`
                },
                {
                    id: 'ch6ex26q3',
                    texte: "3. Primitive $F$ de $f$.",
                    solution: `<p>On cherche $F$ telle que $F'(x)=x^2\\ln x$.</p>
                               <p>On peut utiliser l'intégration par parties : $u=\\ln x$, $v'=x^2$.</p>
                               $$ \\int x^2\\ln x dx = \\dfrac{x^3}{3}\\ln x - \\int \\dfrac{x^3}{3}\\cdot\\dfrac{1}{x} dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{1}{3}\\int x^2 dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + C. $$
                               <p><strong>$F(x)=\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + C$.</strong></p>`
                },
                {
                    id: 'ch6ex26q4',
                    texte: "4. Stricte croissance de $F$.",
                    solution: `<p>$F'(x)=f(x)=x^2\\ln x$.</p>
                               <p>Sur $]0,+\\infty[$, $x^2>0$. Le signe de $F'$ est celui de $\\ln x$.</p>
                               <ul>
                                 <li>Si $0<x<1$ : $\\ln x<0$ ⇒ $F'<0$.</li>
                                 <li>Si $x>1$ : $\\ln x>0$ ⇒ $F'>0$.</li>
                               </ul>
                               <p>Donc $F$ n'est pas strictement croissante sur tout $]0,+\\infty[$, mais décroissante sur $]0,1[$ et croissante sur $]1,+\\infty[$.</p>`
                },
                {
                    id: 'ch6ex26q5',
                    texte: "5. Limites de $F$.",
                    solution: `<p>$$ \\lim_{x\\to0^+} F(x) = \\lim_{x\\to0^+} \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} = 0 - 0 = 0. $$</p>
                               <p>$$ \\lim_{x\\to+\\infty} F(x) = +\\infty. $$</p>`
                },
                {
                    id: 'ch6ex26q6',
                    texte: "6. Bijection de $F$.",
                    solution: `<p>$F$ n'est pas monotone sur $]0,+\\infty[$ (elle décroît puis croît).</p>
                               <p>Sur $]0,1]$, $F$ est décroissante de $0$ à $-\\dfrac{2}{9}$ (car $F(1)=-\\dfrac{1}{9}$).</p>
                               <p>Sur $[1,+\\infty[$, $F$ est croissante de $-\\dfrac{1}{9}$ à $+\\infty$.</p>
                               <p>Pour avoir une bijection, on restreint $F$ à un intervalle où elle est monotone.</p>
                               <p><strong>$F$ réalise une bijection de $[1,+\\infty[$ sur $\\left[-\\dfrac{1}{9},+\\infty\\right[$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 27 – Étude de f(x)=1/(1+x²) (arctan)
        // ======================================================================
        {
            numero: 27,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{1}{1+x^2}$.</p>
                      <p>Soit $F$ la primitive de $f$ sur $\\mathbb{R}$ qui s'annule en $0$.</p>
                      <ol>
                        <li>Exprimer $F(x)$.</li>
                        <li>Étudier les variations de $F$.</li>
                        <li>Montrer que $F$ réalise une bijection de $\\mathbb{R}$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>Montrer que $F$ est impaire.</li>
                        <li>Déterminer $F^{-1}(x)$ pour $x\\in I$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex27q1',
                    texte: "1. Expression de $F$.",
                    solution: `<p>$F(x)=\\int_0^x \\dfrac{1}{1+t^2} dt = \\arctan x$.</p>`
                },
                {
                    id: 'ch6ex27q2',
                    texte: "2. Variations de $F$.",
                    solution: `<p>$F'(x)=f(x)=\\dfrac{1}{1+x^2} >0$ pour tout $x$.</p>
                               <p><strong>$F$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p>Limites : $\\lim_{x\\to-\\infty} F(x) = -\\dfrac{\\pi}{2}$, $\\lim_{x\\to+\\infty} F(x) = \\dfrac{\\pi}{2}$.</p>`
                },
                {
                    id: 'ch6ex27q3',
                    texte: "3. Bijection.",
                    solution: `<p>$F$ est continue et strictement croissante sur $\\mathbb{R}$.</p>
                               <p>Donc $F$ réalise une bijection de $\\mathbb{R}$ sur $\\left]-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right[$.</p>`
                },
                {
                    id: 'ch6ex27q4',
                    texte: "4. Parité de $F$.",
                    solution: `<p>$F(-x)=\\arctan(-x) = -\\arctan x = -F(x)$.</p>
                               <p><strong>$F$ est impaire.</strong></p>`
                },
                {
                    id: 'ch6ex27q5',
                    texte: "5. Expression de $F^{-1}$.",
                    solution: `<p>$F(x)=y$ ⇔ $\\arctan x = y$ ⇔ $x=\\tan y$.</p>
                               <p><strong>$F^{-1}(y)=\\tan y$ pour $y\\in\\left]-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right[$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 28 – Étude de f(x)=ln x / x
        // ======================================================================
        {
            numero: 28,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x)=\\dfrac{\\ln x}{x}$.</p>
                      <ol>
                        <li>Déterminer les limites aux bornes.</li>
                        <li>Étudier les variations de $f$.</li>
                        <li>Déterminer une primitive $F$ de $f$ sur $]0,+\\infty[$.</li>
                        <li>En déduire $\\lim_{x\\to+\\infty} \\dfrac{(\\ln x)^2}{x}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex28q1',
                    texte: "1. Limites.",
                    solution: `<p>$$ \\lim_{x\\to0^+} \\dfrac{\\ln x}{x} = -\\infty \\quad (\\text{car } \\ln x\\to-\\infty \\text{ et } x\\to0^+). $$</p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0 \\quad (\\text{croissance comparée}). $$`
                },
                {
                    id: 'ch6ex28q2',
                    texte: "2. Variations.",
                    solution: `<p>$f$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ f'(x)=\\dfrac{\\frac{1}{x}\\cdot x - \\ln x}{x^2} = \\dfrac{1-\\ln x}{x^2}. $$
                               <p>$f'(x)=0$ ⇔ $1-\\ln x=0$ ⇔ $\\ln x=1$ ⇔ $x=e$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$e$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$\\dfrac{1}{e}$</td><td>$\\searrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch6ex28q3',
                    texte: "3. Primitive $F$.",
                    solution: `<p>Posons $u=\\ln x$, $du=\\dfrac{1}{x}dx$.</p>
                               $$ \\int \\dfrac{\\ln x}{x} dx = \\int u du = \\dfrac{u^2}{2} + C = \\dfrac{(\\ln x)^2}{2} + C. $$
                               <p><strong>$F(x)=\\dfrac{(\\ln x)^2}{2}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex28q4',
                    texte: "4. Limite de $(\\ln x)^2/x$.",
                    solution: `<p>On a $\\int_1^x \\dfrac{\\ln t}{t} dt = \\left[\\dfrac{(\\ln t)^2}{2}\\right]_1^x = \\dfrac{(\\ln x)^2}{2}$.</p>
                               <p>Or $\\lim_{x\\to+\\infty} \\int_1^x \\dfrac{\\ln t}{t} dt = +\\infty$ (car l'intégrale diverge).</p>
                               <p>Mais pour la limite de $(\\ln x)^2/x$, on peut utiliser la croissance comparée :</p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{(\\ln x)^2}{x} = 0. $$
                               <p><strong>$\\lim_{x\\to+\\infty} \\dfrac{(\\ln x)^2}{x} = 0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 29 – Primitive de ln x / x avec condition
        // ======================================================================
        {
            numero: 29,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x)=\\dfrac{\\ln x}{x}$.</p>
                      <p>Soit $F$ la primitive de $f$ sur $]0,+\\infty[$ telle que $F(1)=0$.</p>
                      <ol>
                        <li>Exprimer $F(x)$.</li>
                        <li>Montrer que $F$ est impaire (au sens $F(1/x)=-F(x)$).</li>
                        <li>Étudier les variations de $F$ sur $]0,+\\infty[$.</li>
                        <li>Montrer que $F$ réalise une bijection de $]0,+\\infty[$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>Déterminer $F^{-1}$ pour $x\\in I$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex29q1',
                    texte: "1. Expression de $F$.",
                    solution: `<p>$F(x)=\\int_1^x \\dfrac{\\ln t}{t} dt = \\left[\\dfrac{(\\ln t)^2}{2}\\right]_1^x = \\dfrac{(\\ln x)^2}{2}$.</p>`
                },
                {
                    id: 'ch6ex29q2',
                    texte: "2. Relation $F(1/x)=-F(x)$.",
                    solution: `<p>$F\\left(\\dfrac{1}{x}\\right)=\\dfrac{(\\ln(1/x))^2}{2} = \\dfrac{(-\\ln x)^2}{2} = \\dfrac{(\\ln x)^2}{2} = F(x)$.</p>
                               <p>Donc $F(1/x)=F(x)$, pas $-F(x)$. Cette propriété n'est pas la parité classique.</p>`
                },
                {
                    id: 'ch6ex29q3',
                    texte: "3. Variations de $F$.",
                    solution: `<p>$F'(x)=f(x)=\\dfrac{\\ln x}{x}$.</p>
                               <p>Sur $]0,1[$, $\\ln x<0$ ⇒ $F'<0$.</p>
                               <p>Sur $]1,+\\infty[$, $\\ln x>0$ ⇒ $F'>0$.</p>
                               <p>$F$ est décroissante sur $]0,1]$ et croissante sur $[1,+\\infty[$.</p>
                               <p>$F(1)=0$, $\\lim_{x\\to0^+}F(x)=+\\infty$, $\\lim_{x\\to+\\infty}F(x)=+\\infty$.</p>`
                },
                {
                    id: 'ch6ex29q4',
                    texte: "4. Bijection.",
                    solution: `<p>$F$ n'est pas monotone sur $]0,+\\infty[$.</p>
                               <p>Sur $]0,1]$, $F$ est décroissante de $+\\infty$ à $0$.</p>
                               <p>Sur $[1,+\\infty[$, $F$ est croissante de $0$ à $+\\infty$.</p>
                               <p><strong>$F$ réalise une bijection de $]0,1]$ sur $[0,+\\infty[$, et de $[1,+\\infty[$ sur $[0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch6ex29q5',
                    texte: "5. Expression de $F^{-1}$.",
                    solution: `<p>Pour $y\\ge0$, $F(x)=y$ ⇒ $\\dfrac{(\\ln x)^2}{2}=y$ ⇒ $(\\ln x)^2=2y$ ⇒ $\\ln x = \\pm\\sqrt{2y}$.</p>
                               <ul>
                                 <li>Sur $]0,1]$ : $\\ln x = -\\sqrt{2y}$ ⇒ $x=e^{-\\sqrt{2y}}$.</li>
                                 <li>Sur $[1,+\\infty[$ : $\\ln x = \\sqrt{2y}$ ⇒ $x=e^{\\sqrt{2y}}$.</li>
                               </ul>
                               <p><strong>Donc $F^{-1}$ a deux branches : $x\\mapsto e^{-\\sqrt{2x}}$ sur $[0,+\\infty[$ et $x\\mapsto e^{\\sqrt{2x}}$ sur $[0,+\\infty[$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 30 – Problème de synthèse (primitive et suite)
        // ======================================================================
        {
            numero: 30,
            enonce: `<p>Soit $f$ la fonction définie sur $[0,1]$ par $f(x)=\\dfrac{x}{1+x}$.</p>
                      <ol>
                        <li>Déterminer une primitive $F$ de $f$ sur $[0,1]$.</li>
                        <li>Montrer que pour tout $x\\in[0,1]$, $\\dfrac{x}{2} \\le f(x) \\le x$.</li>
                        <li>En déduire un encadrement de $\\int_0^1 f(x) dx$.</li>
                        <li>On définit $u_n = \\int_0^1 \\dfrac{x^n}{1+x} dx$. Montrer que $(u_n)$ est décroissante.</li>
                        <li>Montrer que $u_n + u_{n+1} = \\dfrac{1}{n+1}$.</li>
                        <li>En déduire $\\lim_{n\\to+\\infty} u_n$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex30q1',
                    texte: "1. Primitive $F$.",
                    solution: `<p>$\\dfrac{x}{1+x} = 1 - \\dfrac{1}{1+x}$.</p>
                               $$ \\int \\dfrac{x}{1+x} dx = \\int \\left(1 - \\dfrac{1}{1+x}\\right) dx = x - \\ln(1+x) + C. $$
                               <p><strong>$F(x)=x-\\ln(1+x)+C$.</strong></p>`
                },
                {
                    id: 'ch6ex30q2',
                    texte: "2. Encadrement de $f$.",
                    solution: `<p>Pour $x\\in[0,1]$, $1+x\\le2$ ⇒ $\\dfrac{x}{2}\\le\\dfrac{x}{1+x}\\le x$.</p>`
                },
                {
                    id: 'ch6ex30q3',
                    texte: "3. Encadrement de l'intégrale.",
                    solution: `<p>En intégrant :</p>
                               $$ \\int_0^1 \\dfrac{x}{2} dx \\le \\int_0^1 \\dfrac{x}{1+x} dx \\le \\int_0^1 x dx. $$
                               $$ \\dfrac{1}{4} \\le \\int_0^1 f(x) dx \\le \\dfrac{1}{2}. $$`
                },
                {
                    id: 'ch6ex30q4',
                    texte: "4. Suite $(u_n)$ décroissante.",
                    solution: `<p>$u_n - u_{n+1} = \\int_0^1 \\dfrac{x^n - x^{n+1}}{1+x} dx = \\int_0^1 \\dfrac{x^n(1-x)}{1+x} dx$.</p>
                               <p>Sur $[0,1]$, $x^n(1-x) \\ge0$ et $1+x>0$, donc l'intégrale est positive.</p>
                               <p><strong>$(u_n)$ est décroissante.</strong></p>`
                },
                {
                    id: 'ch6ex30q5',
                    texte: "5. Relation $u_n+u_{n+1}$.",
                    solution: `<p>$$ u_n+u_{n+1} = \\int_0^1 \\dfrac{x^n+x^{n+1}}{1+x} dx = \\int_0^1 \\dfrac{x^n(1+x)}{1+x} dx = \\int_0^1 x^n dx = \\dfrac{1}{n+1}. $$</p>`
                },
                {
                    id: 'ch6ex30q6',
                    texte: "6. Limite de $(u_n)$.",
                    solution: `<p>Comme $(u_n)$ est décroissante et minorée par $0$, elle converge vers $L\\ge0$.</p>
                               <p>De $u_n+u_{n+1}=\\dfrac{1}{n+1}$, en passant à la limite :</p>
                               $$ L+L = 0 \\Rightarrow 2L=0 \\Rightarrow L=0. $$
                               <p><strong>$\\lim_{n\\to+\\infty} u_n = 0$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 26 à 30) – Études complètes – ajoutée avec succès.");
    console.log("Chapitre 6 (Primitives) désormais complet !");
})();