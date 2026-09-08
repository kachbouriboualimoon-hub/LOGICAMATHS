// data/chapitre9/part12.js – Exercices 22 à 25 (Études complètes, suites)
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
        // EXERCICE 22 – h(x)=(x-2)e^x+2, f(x)=(e^x-1)/x²
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>On considère la fonction $h$ définie sur $[0, +\\infty[$ par $h(x) = (x-2)e^x + 2$.</p>
                      <ol>
                        <li>Déterminer les variations de $h$ (on précisera $h(0)$).</li>
                        <li>Montrer qu'il existe un unique réel $a$ de l'intervalle $[1, 2]$ tel que $h(a) = 0$. En déduire le signe de $h$ sur $[0, +\\infty[$.</li>
                        <li>Soit $f$ la fonction définie sur $]0, +\\infty[$ par $f(x) = \\dfrac{e^x-1}{x^2}$.
                          <ol>
                            <li>Calculer les limites de $f$ aux bornes de son ensemble de définition.</li>
                            <li>Montrer que pour tout réel $x$ strictement positif, $f'(x) = \\dfrac{xe^x-2e^x+2}{x^3}$. Dresser le tableau de variation de $f$.</li>
                            <li>Montrer que $f(a) = \\dfrac{-1}{a(a-2)}$ et en déduire le signe de $f(a)$.</li>
                          </ol>
                        </li>
                        <li>Tracer la courbe de $f$ dans un repère orthonormé.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex22q1',
                    texte: "1. Variations de $h$.",
                    solution: `<p><strong>Domaine :</strong> $[0,+\\infty[$.</p>
                               <p>$h$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ h'(x) = 1\\cdot e^x + (x-2)e^x = (x-1)e^x. $$
                               <p>Sur $[0,+\\infty[$, $e^x>0$, donc le signe de $h'$ est celui de $x-1$.</p>
                               <ul>
                                 <li>Sur $[0,1[$, $h'(x)<0$ ⇒ $h$ décroissante.</li>
                                 <li>Sur $]1,+\\infty[$, $h'(x)>0$ ⇒ $h$ croissante.</li>
                               </ul>
                               <p>$h(0) = (0-2)e^0 + 2 = -2+2 = 0$.</p>
                               <p>$h(1) = (1-2)e + 2 = 2 - e < 0$.</p>
                               <p>Donc $h$ a un minimum en $x=1$ valant $2-e<0$.</p>
                               <p>$\\lim_{x\\to+\\infty} h(x) = +\\infty$ (car $x e^x$ domine).</p>`
                },
                {
                    id: 'ch9ex22q2',
                    texte: "2. Existence de $a$ et signe de $h$.",
                    solution: `<p>$h$ est continue sur $[1,2]$.</p>
                               <p>$h(1) = 2 - e < 0$.</p>
                               <p>$h(2) = (2-2)e^2 + 2 = 2 > 0$.</p>
                               <p>Par le TVI, il existe $a\\in]1,2[$ tel que $h(a)=0$.</p>
                               <p>Comme $h$ est strictement croissante sur $[1,+\\infty[$, l'unicité est assurée.</p>
                               <p><strong>Signe de $h$ :</strong></p>
                               <ul>
                                 <li>Sur $[0,1]$, $h(x) \\le 0$ avec $h(0)=0$ et $h(1)<0$.</li>
                                 <li>Sur $]1,a[$, $h(x) < 0$.</li>
                                 <li>Sur $]a,+\\infty[$, $h(x) > 0$.</li>
                               </ul>`
                },
                {
                    id: 'ch9ex22q3',
                    texte: "3.a. Limites de $f$.",
                    solution: `<p>$f(x) = \\dfrac{e^x-1}{x^2}$.</p>
                               <p><strong>En $0^+$ :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\dfrac{e^x-1}{x^2} = \\lim_{x\\to0^+} \\dfrac{x}{x^2} = \\lim_{x\\to0^+} \\dfrac{1}{x} = +\\infty. $$
                               <p><strong>En $+\\infty$ :</strong></p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{e^x-1}{x^2} = +\\infty \\quad \\text{(par croissance comparée)}. $$`
                },
                {
                    id: 'ch9ex22q4',
                    texte: "3.b. Dérivée de $f$ et variations.",
                    solution: `<p>$$ f'(x) = \\dfrac{e^x\\cdot x^2 - (e^x-1)\\cdot 2x}{x^4} = \\dfrac{x e^x - 2e^x + 2}{x^3}. $$</p>
                               <p>Le numérateur est $h(x)$ !</p>
                               <p>En effet, $x e^x - 2e^x + 2 = (x-2)e^x + 2 = h(x)$.</p>
                               <p>Donc $f'(x) = \\dfrac{h(x)}{x^3}$.</p>
                               <p>Le signe de $f'$ est celui de $h$ (car $x^3>0$).</p>
                               <ul>
                                 <li>Sur $]0,a[$, $h(x)<0$ ⇒ $f'(x)<0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]a,+\\infty[$, $h(x)>0$ ⇒ $f'(x)>0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x=a$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$a$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$f(a)$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex22q5',
                    texte: "3.c. $f(a)$ et son signe.",
                    solution: `<p>On a $h(a)=0$ ⇒ $(a-2)e^a + 2 = 0$ ⇒ $e^a = \\dfrac{2}{2-a}$.</p>
                               $$ f(a) = \\dfrac{e^a-1}{a^2} = \\dfrac{\\frac{2}{2-a} - 1}{a^2} = \\dfrac{\\frac{2-(2-a)}{2-a}}{a^2} = \\dfrac{a}{(2-a)a^2} = \\dfrac{1}{a(2-a)}. $$
                               <p>Mais $f(a) = \\dfrac{-1}{a(a-2)}$ (car $2-a = -(a-2)$).</p>
                               <p>Comme $a\\in]1,2[$, $a-2<0$, donc $a(a-2)<0$, et $-\\dfrac{1}{a(a-2)} > 0$.</p>
                               <p><strong>$f(a)>0$.</strong></p>`
                },
                {
                    id: 'ch9ex22q6',
                    texte: "4. Tracé de $f$.",
                    solution: `<div id="graph-ch9ex22" class="graph-container" data-fn="(exp(x)-1)/(x*x)" data-xmin="0.1" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – f(x)=(e^x-e^{-x})/(e^x+e^{-x}), aire
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>Soit la fonction $f : x \\mapsto \\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$. On désigne par $C$ la courbe de $f$ dans un repère orthonormé.</p>
                      <ol>
                        <li>Étudier la parité de $f$.</li>
                        <li>
                          <ol>
                            <li>Étudier les variations de $f$.</li>
                            <li>Tracer $C$.</li>
                          </ol>
                        </li>
                        <li>Soit $\\lambda > 1$ et la droite $\\Delta : x = \\lambda$. On note $A(\\lambda)$ l'aire de la partie du plan limitée par $C$, $\\Delta$, l'axe des abscisses et l'axe des ordonnées. Calculer $A(\\lambda)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex23q1',
                    texte: "1. Parité de $f$.",
                    solution: `<p>$$ f(-x) = \\dfrac{e^{-x}-e^x}{e^{-x}+e^x} = -\\dfrac{e^x-e^{-x}}{e^x+e^{-x}} = -f(x). $$</p>
                               <p><strong>$f$ est impaire.</strong></p>`
                },
                {
                    id: 'ch9ex23q2',
                    texte: "2.a. Variations de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = \\mathbb{R}$ (car $e^x+e^{-x}>0$).</p>
                               <p>On simplifie : $f(x) = \\dfrac{e^{2x}-1}{e^{2x}+1}$.</p>
                               <p>Dérivée :</p>
                               $$ f'(x) = \\dfrac{2e^{2x}(e^{2x}+1) - (e^{2x}-1)2e^{2x}}{(e^{2x}+1)^2} = \\dfrac{4e^{2x}}{(e^{2x}+1)^2} > 0. $$
                               <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} f(x) = -1$.</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = 1$.</li>
                               </ul>
                               <p>Asymptotes horizontales : $y=-1$ et $y=1$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-1$</td><td>$\\nearrow$</td><td>$1$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex23q3',
                    texte: "2.b. Tracé de $C$.",
                    solution: `<div id="graph-ch9ex23" class="graph-container" data-fn="(exp(x)-exp(-x))/(exp(x)+exp(-x))" data-xmin="-4" data-xmax="4" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch9ex23q4',
                    texte: "3. Calcul de $A(\\lambda)$.",
                    solution: `<p>Sur $[0,\\lambda]$, $f(x) \\ge 0$ (car $f$ est positive pour $x\\ge0$).</p>
                               <p>L'aire est :</p>
                               $$ A(\\lambda) = \\int_0^\\lambda f(x) dx = \\int_0^\\lambda \\dfrac{e^x-e^{-x}}{e^x+e^{-x}} dx. $$
                               <p>Posons $u = e^x+e^{-x}$, $du = (e^x-e^{-x})dx$.</p>
                               <p>Quand $x=0$, $u=2$ ; quand $x=\\lambda$, $u=e^\\lambda+e^{-\\lambda}$.</p>
                               $$ A(\\lambda) = \\int_2^{e^\\lambda+e^{-\\lambda}} \\dfrac{du}{u} = \\left[\\ln u\\right]_2^{e^\\lambda+e^{-\\lambda}} = \\ln(e^\\lambda+e^{-\\lambda}) - \\ln 2. $$
                               <p><strong>$A(\\lambda) = \\ln\\left(\\dfrac{e^\\lambda+e^{-\\lambda}}{2}\\right)$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24 – f(x)=xe^{-x}-x/2, g, h, suite
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Soit $f$ la fonction définie sur $[0, +\\infty[$ par $f(x) = xe^{-x} - \\dfrac{1}{2}x$.</p>
                      <ol>
                        <li>Calculer la dérivée de $f$ ainsi que $\\lim_{x\\to+\\infty} f(x)$.</li>
                        <li>
                          <ol>
                            <li>On désigne par $g$ la fonction définie sur $[0, +\\infty[$ par $g(x) = (1-x)e^{-x} - \\dfrac{1}{2}$.</li>
                            <li>Étudier le sens de variation de $g$ et montrer que l'équation $g(x) = 0$ a une solution unique $a$ sur $[0, 0.5]$.</li>
                            <li>En déduire le signe de $g(x)$ sur $[0, +\\infty[$.</li>
                            <li>Déterminer les variations de $f$.</li>
                          </ol>
                        </li>
                        <li>Soit $h$ la fonction définie sur $[0, 0.5]$ par $h(x) = 1 - \\dfrac{1}{2}e^x$.
                          <ol>
                            <li>Montrer que $a$ est l'unique solution sur $[0, 0.5]$ de l'équation $h(x) = x$.</li>
                            <li>Étudier les variations de $h$.</li>
                            <li>En déduire que $h([0, 0.5]) \\subset [0, 0.5]$.</li>
                            <li>Prouver que pour tout $x$ de $[0, 0.5]$, $-0.83 \\leq h'(x) \\leq 0$. En déduire que pour tout $x$ de $[0, 0.5]$, $|h(x)-a| \\leq 0.83|x-a|$.</li>
                          </ol>
                        </li>
                        <li>Soit la suite $(u_n)$ définie sur $\\mathbb{N}$ par $u_0=0$ et $u_{n+1}=h(u_n)$.
                          <ol>
                            <li>Montrer que pour tout entier $n$, $u_n$ appartient à $[0, 0.5]$ et $|u_{n+1}-a| \\leq 0.83|u_n-a|$.</li>
                            <li>En déduire que la suite $(u_n)$ est convergente et déterminer sa limite.</li>
                          </ol>
                        </li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex24q1',
                    texte: "1. Dérivée et limite de $f$.",
                    solution: `<p>$$ f'(x) = e^{-x} - xe^{-x} - \\dfrac{1}{2} = (1-x)e^{-x} - \\dfrac{1}{2}. $$</p>
                               <p>$$ \\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\left(xe^{-x} - \\dfrac{x}{2}\\right) = -\\infty. $$</p>`
                },
                {
                    id: 'ch9ex24q2',
                    texte: "2.a. Variation de $g$.",
                    solution: `<p>$g(x) = (1-x)e^{-x} - \\dfrac{1}{2}$.</p>
                               $$ g'(x) = -e^{-x} - (1-x)e^{-x} = (x-2)e^{-x}. $$
                               <p>Sur $[0,+\\infty[$, $x-2<0$ pour $x<2$, donc $g'(x)<0$ sur $[0,2[$.</p>
                               <p>Sur $]2,+\\infty[$, $g'(x)>0$.</p>
                               <p>Donc $g$ est décroissante sur $[0,2]$ et croissante sur $[2,+\\infty[$.</p>
                               <p>$g(0) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2} > 0$.</p>
                               <p>$g(0.5) = (0.5)e^{-0.5} - 0.5 \\approx 0.303 - 0.5 = -0.197 < 0$.</p>
                               <p>Donc il existe une unique racine $a\\in]0, 0.5[$.</p>`
                },
                {
                    id: 'ch9ex24q3',
                    texte: "2.b. Signe de $g$.",
                    solution: `<p>Comme $g$ est décroissante sur $[0,a]$ et $g(0)>0$, $g(a)=0$, on a :</p>
                               <ul>
                                 <li>$g(x) > 0$ sur $[0,a[$.</li>
                                 <li>$g(x) < 0$ sur $]a,+\\infty[$ (car $g$ croît sur $[2,+\\infty[$, mais $g$ reste négative après $a$).</li>
                               </ul>`
                },
                {
                    id: 'ch9ex24q4',
                    texte: "2.c. Variations de $f$.",
                    solution: `<p>$f'(x) = g(x)$.</p>
                               <ul>
                                 <li>Sur $[0,a[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                                 <li>Sur $]a,+\\infty[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                               </ul>
                               <p>Maximum en $x=a$.</p>`
                },
                {
                    id: 'ch9ex24q5',
                    texte: "3.a. $a$ solution de $h(x)=x$.",
                    solution: `<p>On a $g(a)=0$ ⇒ $(1-a)e^{-a} - \\dfrac{1}{2} = 0$ ⇒ $(1-a)e^{-a} = \\dfrac{1}{2}$.</p>
                               <p>$h(x) = 1 - \\dfrac{1}{2}e^x$. On veut $h(a)=a$ :</p>
                               $$ 1 - \\dfrac{1}{2}e^a = a \\iff \\dfrac{1}{2}e^a = 1-a \\iff e^a = 2(1-a) \\iff (1-a)e^{-a} = \\dfrac{1}{2}. $$
                               <p>Ce qui est exactement $g(a)=0$. Donc $a$ est solution de $h(x)=x$.</p>
                               <p>L'unicité vient de l'unicité de $a$.</p>`
                },
                {
                    id: 'ch9ex24q6',
                    texte: "3.b. Variations de $h$.",
                    solution: `<p>$h'(x) = -\\dfrac{1}{2}e^x < 0$.</p>
                               <p><strong>$h$ est strictement décroissante sur $[0,0.5]$.</strong></p>`
                },
                {
                    id: 'ch9ex24q7',
                    texte: "3.c. $h([0,0.5]) \\subset [0,0.5]$.",
                    solution: `<p>$h$ est décroissante, donc :</p>
                               $$ h(0) = 1 - \\dfrac{1}{2} = 0.5. $$
                               $$ h(0.5) = 1 - \\dfrac{1}{2}e^{0.5} \\approx 1 - 0.824 = 0.176 > 0. $$
                               <p>Donc $h([0,0.5]) \\subset [0,0.5]$.</p>`
                },
                {
                    id: 'ch9ex24q8',
                    texte: "3.d. Inégalité de Lipschitz.",
                    solution: `<p>Sur $[0,0.5]$, $h'(x) = -\\dfrac{1}{2}e^x$.</p>
                               <p>$h'(0) = -0.5$, $h'(0.5) = -\\dfrac{1}{2}e^{0.5} \\approx -0.824$.</p>
                               <p>Donc $-0.83 \\leq h'(x) \\leq 0$.</p>
                               <p>Par l'inégalité des accroissements finis :</p>
                               $$ |h(x)-h(a)| \\leq 0.83|x-a|. $$
                               <p>Comme $h(a)=a$, <strong>$|h(x)-a| \\leq 0.83|x-a|$.</strong></p>`
                },
                {
                    id: 'ch9ex24q9',
                    texte: "4.a. Suite $(u_n)$.",
                    solution: `<p>$u_0=0\\in[0,0.5]$.</p>
                               <p>Si $u_n\\in[0,0.5]$, alors $u_{n+1}=h(u_n)\\in[0,0.5]$.</p>
                               $$ |u_{n+1}-a| = |h(u_n)-h(a)| \\leq 0.83|u_n-a|. $$`
                },
                {
                    id: 'ch9ex24q10',
                    texte: "4.b. Convergence de $(u_n)$.",
                    solution: `<p>Par récurrence, $|u_n-a| \\leq (0.83)^n|u_0-a|$.</p>
                               <p>Comme $0.83 < 1$, $(0.83)^n \\to 0$.</p>
                               <p><strong>$(u_n)$ converge vers $a$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 25 – f(x)=(3+x)e^{-x/2}
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (3+x)e^{-\\frac{x}{2}}$.</p>
                      <ol>
                        <li>Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Construire la courbe $C$ de $f$ dans un repère orthonormé.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex25q1',
                    texte: "1. Limites de $f$.",
                    solution: `<p><strong>Domaine :</strong> $D_f = \\mathbb{R}$.</p>
                               <p><strong>En $-\\infty$ :</strong></p>
                               <p>$e^{-x/2} = e^{|x|/2} \\to +\\infty$ et $3+x \\to -\\infty$.</p>
                               <p>Le produit tend vers $-\\infty$ (car $e^{|x|/2}$ domine $x$).</p>
                               $$ \\lim_{x\\to-\\infty} f(x) = -\\infty. $$
                               <p><strong>En $+\\infty$ :</strong></p>
                               <p>$e^{-x/2} \\to 0$ et $3+x \\to +\\infty$, mais $e^{-x/2}$ domine.</p>
                               $$ \\lim_{x\\to+\\infty} f(x) = 0. $$`
                },
                {
                    id: 'ch9ex25q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}$.</p>
                               $$ f'(x) = 1\\cdot e^{-x/2} + (3+x)\\left(-\\dfrac{1}{2}e^{-x/2}\\right) = e^{-x/2}\\left(1 - \\dfrac{3+x}{2}\\right) = e^{-x/2}\\left(\\dfrac{2-3-x}{2}\\right) = -\\dfrac{x+1}{2}e^{-x/2}. $$
                               <p>$f'(x) = 0$ ⇔ $x+1=0$ ⇔ $x=-1$.</p>
                               <ul>
                                 <li>Sur $]-\\infty, -1[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                                 <li>Sur $]-1, +\\infty[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                               </ul>
                               <p>Maximum en $x=-1$ : $f(-1) = (3-1)e^{1/2} = 2\\sqrt{e}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$2\\sqrt{e}$</td><td>$\\searrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex25q3',
                    texte: "3. Tracé de $C$.",
                    solution: `<p>La courbe admet une asymptote horizontale $y=0$ en $+\\infty$.</p>
                               <div id="graph-ch9ex25" class="graph-container" data-fn="(3+x)*exp(-x/2)" data-xmin="-8" data-xmax="8" data-colors="#2563eb"></div>`
                }
            ]
        }
    );

    console.log("Partie 12 (exercices 22 à 25) – Études complètes – ajoutée avec succès.");
    console.log("Chapitre 9 (Fonction exponentielle) désormais complet !");
})();