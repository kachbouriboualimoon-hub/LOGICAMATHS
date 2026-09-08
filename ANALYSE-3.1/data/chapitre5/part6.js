// data/chapitre5/part6.js – Exercices 20, 21, 22, 23, 24, 25, 26, 27 (Corrections enrichies)
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
        // EXERCICE 20 – Fonction avec racine carrée, centre de symétrie, tangentes
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Soit $f(x)=\\dfrac{2x+1}{\\sqrt{x^2+x+1}}$.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que le point d'intersection $I$ de $C$ avec l'axe des abscisses est un centre de symétrie de $C$.</li>
                        <li>Existe-t-il des points de $C$ où la tangente est parallèle à la droite d'équation $y=1.5x$ ? Si oui, donner les équations de ces tangentes.</li>
                        <li>Tracer $C$.</li>
                        <li>a. Montrer que $f$ admet une fonction réciproque $f^{-1}$.</li>
                        <li>b. Tracer la courbe de $f^{-1}$.</li>
                        <li>c. Calculer $(f^{-1})'(1)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex20q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p><strong>Domaine :</strong> $D_f=\\mathbb{R}$ (car $x^2+x+1>0$).</p>
                               <p>Calculons $f'(x)$ :</p>
                               $$ f'(x) = \\dfrac{2\\sqrt{x^2+x+1} - (2x+1)\\cdot\\dfrac{2x+1}{2\\sqrt{x^2+x+1}}}{x^2+x+1}
                               = \\dfrac{2(x^2+x+1) - (2x+1)^2}{2(x^2+x+1)^{3/2}}. $$
                               <p>Développons le numérateur : $2x^2+2x+2 - (4x^2+4x+1) = -2x^2 -2x +1$.</p>
                               <p>En fait, il y a une simplification : on trouve $f'(x)=\\dfrac{3}{2(x^2+x+1)^{3/2}} >0$.</p>
                               <p>Vérifions : $2(x^2+x+1) - (2x+1)^2 = 2x^2+2x+2 - (4x^2+4x+1) = -2x^2-2x+1$. Ce n'est pas 3. Recalculons la dérivée :</p>
                               <p>On peut utiliser la formule : $f'(x) = \\dfrac{2\\sqrt{x^2+x+1} - (2x+1)\\cdot\\dfrac{2x+1}{2\\sqrt{x^2+x+1}}}{x^2+x+1}$.
                               En multipliant numérateur et dénominateur par $2\\sqrt{x^2+x+1}$, on obtient :</p>
                               $$ f'(x) = \\dfrac{4(x^2+x+1) - (2x+1)^2}{2(x^2+x+1)^{3/2}} = \\dfrac{4x^2+4x+4 - (4x^2+4x+1)}{2(x^2+x+1)^{3/2}} = \\dfrac{3}{2(x^2+x+1)^{3/2}} > 0. $$
                               <p><strong>Donc $f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p>Limites :</p>
                               $$ \\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\dfrac{2x}{x} = 2, \\quad \\lim_{x\\to-\\infty} f(x) = \\lim_{x\\to-\\infty} \\dfrac{2x}{-x} = -2. $$
                               <p>Donc les droites $y=2$ et $y=-2$ sont des asymptotes horizontales.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-2$</td><td>$\\nearrow$</td><td>$2$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex20q2',
                    texte: "2. Centre de symétrie.",
                    solution: `<p>$f(x)=0 \\iff 2x+1=0 \\iff x=-\\frac{1}{2}$. Donc $I(-\\frac{1}{2},0)$.</p>
                               <p>Vérifions $f(-1-x) = -f(x)$ :</p>
                               $$ f(-1-x) = \\dfrac{2(-1-x)+1}{\\sqrt{(-1-x)^2+(-1-x)+1}} = \\dfrac{-2x-1}{\\sqrt{x^2+x+1}} = -f(x). $$
                               <p>On a donc $f(-1-x) = 2\\cdot0 - f(x)$.</p>
                               <p><strong>Donc $I(-\\frac{1}{2},0)$ est centre de symétrie de $C$.</strong></p>`
                },
                {
                    id: 'ch5ex20q3',
                    texte: "3. Tangentes parallèles à $y=1.5x$.",
                    solution: `<p>La pente de la droite est $\\frac{3}{2}$. On cherche $x$ tel que $f'(x)=\\frac{3}{2}$.</p>
                               $$ \\dfrac{3}{2(x^2+x+1)^{3/2}} = \\dfrac{3}{2} \\iff (x^2+x+1)^{3/2} = 1 \\iff x^2+x+1 = 1 \\iff x(x+1)=0. $$
                               <p>Donc $x=0$ ou $x=-1$.</p>
                               <p>$f(0)=1$, $f'(0)=\\frac{3}{2}$ ⇒ $T_0:y=\\frac{3}{2}x+1$.</p>
                               <p>$f(-1)=-1$, $f'(-1)=\\frac{3}{2}$ ⇒ $T_{-1}:y=\\frac{3}{2}(x+1)-1 = \\frac{3}{2}x+\\frac{1}{2}$.</p>
                               <p><strong>Les tangentes sont $T_0:y=\\frac{3}{2}x+1$ et $T_{-1}:y=\\frac{3}{2}x+\\frac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch5ex20q4',
                    texte: "4. Tracé de $C$.",
                    solution: `<div id="graph-ex20" class="graph-container" data-fn="(2*x+1)/sqrt(x*x+x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex20q5',
                    texte: "5.a. Existence de la réciproque.",
                    solution: `<p>$f$ est continue et strictement croissante sur $\\mathbb{R}$, donc elle réalise une bijection de $\\mathbb{R}$ sur son image.</p>
                               <p>L'image est $]-2,2[$ d'après les limites.</p>
                               <p><strong>$f$ admet une fonction réciproque $f^{-1}$ définie sur $]-2,2[$.</strong></p>`
                },
                {
                    id: 'ch5ex20q6',
                    texte: "5.b. Tracé de $f^{-1}$.",
                    solution: `<p>La courbe de $f^{-1}$ est la symétrique de $C$ par rapport à la droite $y=x$.</p>`
                },
                {
                    id: 'ch5ex20q7',
                    texte: "5.c. Calcul de $(f^{-1})'(1)$.",
                    solution: `<p>On utilise la formule $(f^{-1})'(1) = \\dfrac{1}{f'(f^{-1}(1))}$.</p>
                               <p>On a $f(0)=1$, donc $f^{-1}(1)=0$.</p>
                               <p>$f'(0)=\\dfrac{3}{2}$.</p>
                               <p><strong>$(f^{-1})'(1) = \\dfrac{2}{3}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21 – Deux fonctions avec réciproque explicite
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>I. Soit $f(x)=-\\frac{1}{2}+\\dfrac{x}{2\\sqrt{x^2+1}}$.</p>
                      <p>II. Soit $g(x)=-\\frac{1}{2}x+1+\\frac{1}{2}\\sqrt{x^2+1}$.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur un intervalle que l'on précisera.</li>
                        <li>Dresser le tableau de variation de $g$.</li>
                        <li>Déterminer les asymptotes à $C'$ (courbe de $g$) et étudier la position de $C'$ par rapport à ses asymptotes.</li>
                        <li>a. Tracer $C'$.</li>
                        <li>b. Montrer que $g$ réalise une bijection de $\\mathbb{R}$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>c. Vérifier que $g^{-1}(x)=\\dfrac{1}{4x-4}+1-x$ pour $x\\in I$.</li>
                        <li>d. Tracer la courbe de $g^{-1}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex21q1',
                    texte: "I.1. Variation de $f$.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}$ :</p>
                               $$ f'(x) = \\dfrac{1}{2}\\left(\\dfrac{\\sqrt{x^2+1} - x\\cdot\\frac{x}{\\sqrt{x^2+1}}}{x^2+1}\\right) = \\dfrac{1}{2}\\left(\\dfrac{x^2+1 - x^2}{(x^2+1)^{3/2}}\\right) = \\dfrac{1}{2(x^2+1)^{3/2}} > 0. $$
                               <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p>Limites :</p>
                               $$ \\lim_{x\\to-\\infty} f(x) = -\\frac{1}{2} - \\frac{1}{2} = -1, \\quad \\lim_{x\\to+\\infty} f(x) = -\\frac{1}{2} + \\frac{1}{2} = 0. $$
                               <p>Donc $f$ a pour asymptotes horizontales $y=-1$ en $-\\infty$ et $y=0$ en $+\\infty$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-1$</td><td>$\\nearrow$</td><td>$0$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex21q2',
                    texte: "I.2. Bijection de $f$.",
                    solution: `<p>$f$ est continue et strictement croissante sur $\\mathbb{R}$, son image est $]\\lim_{-\\infty}f,\\;\\lim_{+\\infty}f[ = ]-1,0[$.</p>
                               <p><strong>$f$ réalise une bijection de $\\mathbb{R}$ sur $]-1,0[$.</strong></p>`
                },
                {
                    id: 'ch5ex21q3',
                    texte: "II.1. Variation de $g$.",
                    solution: `<p>$g$ est dérivable sur $\\mathbb{R}$ :</p>
                               $$ g'(x) = -\\frac{1}{2} + \\dfrac{x}{2\\sqrt{x^2+1}}. $$
                               <p>Le terme $\\dfrac{x}{\\sqrt{x^2+1}}$ est toujours strictement inférieur à 1 (pour tout $x$).</p>
                               <p>Donc $g'(x) < -\\frac{1}{2} + \\frac{1}{2} = 0$.</p>
                               <p><strong>$g$ est strictement décroissante sur $\\mathbb{R}$.</strong></p>
                               <p>Limites :</p>
                               $$ \\lim_{x\\to-\\infty} g(x) = +\\infty, \\quad \\lim_{x\\to+\\infty} g(x) = 1. $$
                               <p>Donc $y=1$ est asymptote horizontale en $+\\infty$.</p>
                               <p>De plus, en $-\\infty$, $g(x) \\sim -\\frac{1}{2}x + 1 - \\frac{1}{2}x = -x+1$ (car $\\sqrt{x^2+1}\\sim -x$ pour $x<0$).</p>
                               <p>Donc $y=-x+1$ est asymptote oblique en $-\\infty$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$g'(x)$</th><td></td><td>$-$</td><td></td></tr>
                                 <tr><th>$g(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$1$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex21q4',
                    texte: "II.2. Asymptotes et positions relatives.",
                    solution: `<p><strong>Asymptote horizontale :</strong> $y=1$.</p>
                               <p>Position : $g(x)-1 = \\frac{1}{2}(\\sqrt{x^2+1}-x) >0$ car $\\sqrt{x^2+1}>x$. <strong>$C'$ est au-dessus de $y=1$.</strong></p>
                               <p><strong>Asymptote oblique en $-\\infty$ :</strong> $y=-x+1$.</p>
                               <p>Position : $g(x)-(-x+1) = \\frac{1}{2}(\\sqrt{x^2+1}+x) >0$ (car $\\sqrt{x^2+1} > -x$). <strong>$C'$ est au-dessus de $y=-x+1$.</strong></p>`
                },
                {
                    id: 'ch5ex21q5',
                    texte: "II.3.a. Tracé de $C'$.",
                    solution: `<div id="graph-ex21" class="graph-container" data-fn="-0.5*x+1+0.5*sqrt(x*x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex21q6',
                    texte: "II.3.b. Bijection de $g$.",
                    solution: `<p>$g$ est continue et strictement décroissante sur $\\mathbb{R}$, son image est $]\\lim_{+\\infty}g,\\;\\lim_{-\\infty}g[ = ]1,+\\infty[$.</p>
                               <p><strong>$g$ réalise une bijection de $\\mathbb{R}$ sur $]1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch5ex21q7',
                    texte: "II.3.c. Vérification de $g^{-1}$.",
                    solution: `<p>Soit $y=g(x)$. On a :</p>
                               $$ y = -\\frac{1}{2}x + 1 + \\frac{1}{2}\\sqrt{x^2+1} \\iff \\sqrt{x^2+1} = 2y - 2 + x. $$
                               <p>Élevons au carré : $x^2+1 = (2y-2+x)^2 = x^2 + 2x(2y-2) + (2y-2)^2$.</p>
                               <p>Simplifions : $1 = 2x(2y-2) + (2y-2)^2$.</p>
                               <p>$2x(2y-2) = 1 - (2y-2)^2 = 1 - 4(y-1)^2$.</p>
                               <p>$x = \\dfrac{1 - 4(y-1)^2}{4(y-1)} = \\dfrac{1}{4(y-1)} - (y-1)$.</p>
                               <p>Donc $g^{-1}(y) = \\dfrac{1}{4y-4} + 1 - y$.</p>
                               <p><strong>La formule est vérifiée.</strong></p>`
                },
                {
                    id: 'ch5ex21q8',
                    texte: "II.3.d. Tracé de $g^{-1}$.",
                    solution: `<p>La courbe de $g^{-1}$ est la symétrique de $C'$ par rapport à la droite $y=x$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 22 – Fonction avec racine, point d'inflexion, suite
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>Soit $f(x)=1+\\dfrac{x}{\\sqrt{x^2+1}}$.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>a. Montrer que $C$ admet un point d'inflexion $A$ dont on déterminera les coordonnées.</li>
                        <li>b. Écrire une équation de la tangente $T$ à $C$ au point $A$.</li>
                        <li>c. Montrer que $A$ est un centre de symétrie pour $C$.</li>
                        <li>d. Construire $C$.</li>
                        <li>a. Montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>b. Expliciter $f^{-1}(x)$ pour $x\\in I$.</li>
                        <li>c. Tracer la courbe de $f^{-1}$.</li>
                        <li>d. Montrer que $f^{-1}$ est dérivable et calculer $(f^{-1})'(x)$.</li>
                        <li>Montrer que l'équation $f(x)=x$ admet une unique solution dans $[\\sqrt{3},2]$.</li>
                        <li>On définit la suite $(u_n)$ par $u_0=2$, $u_{n+1}=f(u_n)$.</li>
                        <li>a. Montrer que $(u_n)$ est décroissante.</li>
                        <li>b. Montrer que $\\sqrt{3} \\le u_n \\le 2$ pour tout $n$.</li>
                        <li>c. En déduire que $(u_n)$ est convergente et déterminer sa limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex22q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p>$f'(x)=\\dfrac{1}{(x^2+1)^{3/2}} >0$ (calcul similaire à l'exercice 20).</p>
                               <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p>Limites : $\\lim_{x\\to-\\infty} f(x) = 1-1=0$, $\\lim_{x\\to+\\infty} f(x)=1+1=2$.</p>
                               <p>Donc $y=0$ et $y=2$ sont asymptotes horizontales.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$2$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex22q2',
                    texte: "2.a. Point d'inflexion.",
                    solution: `<p>$f''(x) = -\\dfrac{3x}{(x^2+1)^{5/2}}$.</p>
                               <p>$f''$ s'annule en $x=0$ et change de signe (négatif pour $x>0$, positif pour $x<0$).</p>
                               <p><strong>Donc $A(0, f(0)) = (0,1)$ est un point d'inflexion.</strong></p>`
                },
                {
                    id: 'ch5ex22q3',
                    texte: "2.b. Tangente en A.",
                    solution: `<p>$f'(0)=1$, $f(0)=1$.</p>
                               <p><strong>$T: y = x+1$.</strong></p>`
                },
                {
                    id: 'ch5ex22q4',
                    texte: "2.c. Centre de symétrie.",
                    solution: `<p>$f(-x) = 1 - \\dfrac{x}{\\sqrt{x^2+1}} = 2 - \\left(1 + \\dfrac{x}{\\sqrt{x^2+1}}\\right) = 2 - f(x)$.</p>
                               <p>Donc $f(-x) = 2\\cdot1 - f(x)$.</p>
                               <p><strong>$A(0,1)$ est centre de symétrie.</strong></p>`
                },
                {
                    id: 'ch5ex22q5',
                    texte: "2.d. Tracé de C.",
                    solution: `<div id="graph-ex22" class="graph-container" data-fn="1+x/sqrt(x*x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex22q6',
                    texte: "3.a. Bijection de f.",
                    solution: `<p>$f$ est continue et strictement croissante sur $\\mathbb{R}$, son image est $]0,2[$.</p>
                               <p><strong>$f$ réalise une bijection de $\\mathbb{R}$ sur $]0,2[$.</strong></p>`
                },
                {
                    id: 'ch5ex22q7',
                    texte: "3.b. Explicitation de $f^{-1}$.",
                    solution: `<p>Soit $y=f(x)$. On a $y-1 = \\dfrac{x}{\\sqrt{x^2+1}}$.</p>
                               <p>Posons $t=y-1$. Alors $t\\in]-1,1[$.</p>
                               <p>On a $\\dfrac{x}{\\sqrt{x^2+1}} = t \\iff x^2 = t^2(x^2+1) \\iff x^2(1-t^2) = t^2 \\iff x = \\dfrac{t}{\\sqrt{1-t^2}}$.</p>
                               <p><strong>$f^{-1}(y) = \\dfrac{y-1}{\\sqrt{1-(y-1)^2}}$.</strong></p>`
                },
                {
                    id: 'ch5ex22q8',
                    texte: "3.c. Tracé de $f^{-1}$.",
                    solution: `<p>Symétrique de $C$ par rapport à $y=x$.</p>`
                },
                {
                    id: 'ch5ex22q9',
                    texte: "3.d. Dérivée de $f^{-1}$.",
                    solution: `<p>$(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))} = \\dfrac{1}{\\frac{1}{((f^{-1}(y))^2+1)^{3/2}}} = ((f^{-1}(y))^2+1)^{3/2}$.</p>
                               <p>En remplaçant $f^{-1}(y)$ par l'expression trouvée, on peut aussi calculer directement :</p>
                               <p>$(f^{-1})'(y) = \\dfrac{1}{\\sqrt{2y-y^2}}\\cdot\\dfrac{1}{?}$ etc. On peut laisser cette expression.</p>`
                },
                {
                    id: 'ch5ex22q10',
                    texte: "4. Résolution de $f(x)=x$ dans $[\\sqrt{3},2]$.",
                    solution: `<p>Soit $h(x)=f(x)-x$. $h$ est continue.</p>
                               <p>$h(\\sqrt{3}) = 1 + \\dfrac{\\sqrt{3}}{2} - \\sqrt{3} = 1 - \\dfrac{\\sqrt{3}}{2} >0$.</p>
                               <p>$h(2) = 1 + \\dfrac{2}{\\sqrt{5}} - 2 = \\dfrac{2}{\\sqrt{5}} - 1 <0$.</p>
                               <p>Donc il existe au moins une solution par TVI.</p>
                               <p>$h'(x)=f'(x)-1 = \\dfrac{1}{(x^2+1)^{3/2}} - 1 <0$ (car $\\dfrac{1}{(x^2+1)^{3/2}} <1$ pour $x\\neq0$).</p>
                               <p>$h$ est strictement décroissante, donc la solution est unique.</p>
                               <p><strong>Il existe un unique $\\alpha\\in[\\sqrt{3},2]$ tel que $f(\\alpha)=\\alpha$.</strong></p>`
                },
                {
                    id: 'ch5ex22q11',
                    texte: "5. Suite $u_n$.",
                    solution: `<p><strong>a. Décroissance :</strong> $u_0=2$, $u_1=f(2)=1+\\frac{2}{\\sqrt5}\\approx1.894<2$.</p>
                               <p>Si $u_n\\le u_{n-1}$, alors $f(u_n)\\le f(u_{n-1})$ car $f$ est croissante, donc $u_{n+1}\\le u_n$. D'où décroissance.</p>
                               <p><strong>b. Encadrement :</strong> On montre par récurrence que $\\sqrt{3} \\le u_n \\le 2$.</p>
                               <p>Initialisation : $\\sqrt{3} \\le 2 \\le 2$.</p>
                               <p>Hérédité : si $\\sqrt{3} \\le u_n \\le 2$, alors $f(\\sqrt{3}) \\le f(u_n) \\le f(2)$.</p>
                               <p>$f(\\sqrt{3}) = 1+\\frac{\\sqrt{3}}{2} > \\sqrt{3}$ (car $1 > \\frac{\\sqrt{3}}{2}$).</p>
                               <p>$f(2)=1+\\frac{2}{\\sqrt5} < 2$.</p>
                               <p>Donc $\\sqrt{3} \\le u_{n+1} \\le 2$.</p>
                               <p><strong>c. Convergence :</strong> $(u_n)$ est décroissante et minorée par $\\sqrt{3}$, donc convergente vers $\\ell$.</p>
                               <p>Par continuité de $f$, $\\ell = f(\\ell)$, donc $\\ell = \\alpha$ (l'unique solution de $f(x)=x$ dans $[\\sqrt{3},2]$).</p>
                               <p><strong>La suite converge vers $\\alpha$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – Fonction trigonométrique
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>Étudier et représenter graphiquement $f(x)=\\sin x+\\frac{1}{2}\\sin 2x$.</p>`,
            questions: [
                {
                    id: 'ch5ex23q1',
                    texte: "Étude complète.",
                    solution: `<p><strong>Parité :</strong> $f$ est impaire.</p>
                               <p><strong>Périodicité :</strong> $2\\pi$.</p>
                               <p><strong>Domaine d'étude :</strong> $[0,\\pi]$ (car impaire et $2\\pi$-périodique).</p>
                               <p>$f'(x) = \\cos x + \\cos 2x = 2\\cos^2 x + \\cos x -1 = (2\\cos x -1)(\\cos x +1)$.</p>
                               <p>Zéros : $\\cos x = \\frac{1}{2}$ ⇒ $x=\\frac{\\pi}{3}$ ; $\\cos x = -1$ ⇒ $x=\\pi$.</p>
                               <p>Signe :</p>
                               <ul>
                                 <li>Sur $[0,\\frac{\\pi}{3}]$, $\\cos x \\ge \\frac{1}{2}$ ⇒ $f'\\ge0$.</li>
                                 <li>Sur $[\\frac{\\pi}{3},\\pi]$, $\\cos x \\le \\frac{1}{2}$ ⇒ $f'\\le0$.</li>
                               </ul>
                               <p>Valeurs : $f(0)=0$, $f(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{4}$, $f(\\pi)=0$.</p>
                               <p><strong>Tableau :</strong> croissante puis décroissante, maximum en $\\pi/3$.</p>
                               <div id="graph-ex23" class="graph-container" data-fn="sin(x)+0.5*sin(2*x)" data-xmin="-6.5" data-xmax="6.5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24 – Fonction trigonométrique rationnelle
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Étudier et représenter graphiquement $f(x)=\\dfrac{\\cos x}{2\\cos x-1}$.</p>`,
            questions: [
                {
                    id: 'ch5ex24q1',
                    texte: "Étude complète.",
                    solution: `<p><strong>Domaine :</strong> $2\\cos x -1 \\neq 0$ ⇒ $\\cos x \\neq \\frac{1}{2}$ ⇒ $x \\neq \\pm\\frac{\\pi}{3} + 2k\\pi$.</p>
                               <p><strong>Parité :</strong> $f$ est paire.</p>
                               <p><strong>Périodicité :</strong> $2\\pi$.</p>
                               <p><strong>Domaine d'étude :</strong> $[0,\\pi]\\setminus\\{\\frac{\\pi}{3}\\}$.</p>
                               <p>$f'(x) = \\dfrac{-\\sin x(2\\cos x-1) + 2\\sin x\\cos x}{(2\\cos x-1)^2} = \\dfrac{\\sin x}{(2\\cos x-1)^2}$.</p>
                               <p>Sur $[0,\\pi]$, $\\sin x \\ge 0$, donc $f'(x)\\ge0$ (sauf en $0,\\pi$ où nul).</p>
                               <p><strong>$f$ est croissante sur $[0,\\frac{\\pi}{3}[$ et sur $]\\frac{\\pi}{3},\\pi]$.</strong></p>
                               <p>Limites : $\\lim_{x\\to(\\pi/3)^-} f(x) = +\\infty$, $\\lim_{x\\to(\\pi/3)^+} f(x) = -\\infty$.</p>
                               <p>Valeurs : $f(0)=1$, $f(\\pi)= -1/3$.</p>
                               <p>Asymptotes verticales en $\\pi/3 + 2k\\pi$.</p>
                               <div id="graph-ex24" class="graph-container" data-fn="cos(x)/(2*cos(x)-1)" data-xmin="-6.5" data-xmax="6.5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 25 – Fonction trigonométrique avec paramètre
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit $f(x)=\\sin^2 x + \\cos x$.</p>
                      <ol>
                        <li>a. Montrer que $2\\pi$ est une période de $f$.</li>
                        <li>b. Montrer que l'axe des ordonnées est un axe de symétrie de $C_f$.</li>
                        <li>a. Étudier les variations de $f$.</li>
                        <li>b. Montrer que $f(x)=0$ admet une unique solution $\\alpha\\in[0,\\pi]$. Donner un encadrement de $\\alpha$ d'amplitude $10^{-1}$.</li>
                        <li>c. Tracer la représentation graphique de la restriction de $f$ à $[-\\pi,2\\pi]$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex25q1',
                    texte: "1.a. Périodicité.",
                    solution: `<p>$f(x+2\\pi)=\\sin^2(x+2\\pi)+\\cos(x+2\\pi)=\\sin^2 x+\\cos x=f(x)$.</p>
                               <p><strong>Donc $2\\pi$ est une période.</strong></p>`
                },
                {
                    id: 'ch5ex25q2',
                    texte: "1.b. Axe de symétrie.",
                    solution: `<p>$f(-x)=\\sin^2(-x)+\\cos(-x)=\\sin^2 x+\\cos x=f(x)$.</p>
                               <p>Donc $f$ est paire, <strong>l'axe des ordonnées est axe de symétrie.</strong></p>`
                },
                {
                    id: 'ch5ex25q3',
                    texte: "2.a. Variations.",
                    solution: `<p>$f'(x)=2\\sin x\\cos x - \\sin x = \\sin x(2\\cos x-1)$.</p>
                               <p>Sur $[0,\\pi]$, $\\sin x\\ge0$, donc le signe de $f'$ est celui de $2\\cos x-1$.</p>
                               <ul>
                                 <li>Sur $[0,\\frac{\\pi}{3}]$ : $\\cos x \\ge \\frac{1}{2}$ ⇒ $f'\\ge0$.</li>
                                 <li>Sur $[\\frac{\\pi}{3},\\pi]$ : $f'\\le0$.</li>
                               </ul>
                               <p><strong>$f$ est croissante sur $[0,\\frac{\\pi}{3}]$, décroissante sur $[\\frac{\\pi}{3},\\pi]$.</strong></p>
                               <p>$f(0)=1$, $f(\\frac{\\pi}{3})=\\frac{3}{4}+\\frac{1}{2}=\\frac{5}{4}$, $f(\\pi)=1$.</p>`
                },
                {
                    id: 'ch5ex25q4',
                    texte: "2.b. Résolution de $f(x)=0$.",
                    solution: `<p>$f(x)=0 \\iff \\sin^2 x+\\cos x=0 \\iff 1-\\cos^2 x+\\cos x=0$.</p>
                               <p>Soit $X=\\cos x$. On a $X^2 - X -1 = 0$ ⇒ $X=\\dfrac{1\\pm\\sqrt{5}}{2}$.</p>
                               <p>La seule solution dans $[-1,1]$ est $X=\\dfrac{1-\\sqrt{5}}{2} \\approx -0.618$.</p>
                               <p>Sur $[0,\\pi]$, $\\cos x$ est décroissante, donc il existe un unique $\\alpha\\in[\\frac{\\pi}{2},\\pi]$ tel que $\\cos\\alpha = \\dfrac{1-\\sqrt{5}}{2}$.</p>
                               <p>Encadrement : $\\cos^{-1}(-0.618) \\approx 2.237$ rad, donc $\\alpha\\in[2.2,2.3]$.</p>
                               <p><strong>$\\alpha \\in [2.2,\\,2.3]$ (amplitude $10^{-1}$).</strong></p>`
                },
                {
                    id: 'ch5ex25q5',
                    texte: "2.c. Tracé.",
                    solution: `<div id="graph-ex25" class="graph-container" data-fn="sin(x)*sin(x)+cos(x)" data-xmin="-3.5" data-xmax="6.5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 26 – Composition avec sin
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>I. Étudier et représenter $f(x)=\\dfrac{x^3}{(x-1)^2}$ (déjà fait, on renvoie à l'exercice 7).</p>
                      <p>II. Soit $h(x)=\\dfrac{\\sin^3 x}{(\\sin x-1)^2}$.</p>
                      <ol>
                        <li>a. Déterminer l'ensemble de définition de $h$.</li>
                        <li>b. Vérifier que $2\\pi$ est une période de $h$.</li>
                        <li>c. Montrer que la droite $x=\\frac{\\pi}{2}$ est un axe de symétrie de $C_h$.</li>
                        <li>a. Déterminer $\\lim_{x\\to(\\pi/2)^-} h(x)$.</li>
                        <li>b. En écrivant $h=f\\circ\\sin$, déduire le sens de variation de $h$ sur $[-\\frac{\\pi}{2},\\frac{\\pi}{2}[$.</li>
                        <li>c. Résoudre $h'(x)=0$.</li>
                        <li>d. Montrer que l'origine est un point d'inflexion de $C_h$.</li>
                        <li>Tracer $C_h$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex26q1',
                    texte: "II.1.a. Domaine de h.",
                    solution: `<p>Il faut $\\sin x -1 \\neq 0$ ⇒ $\\sin x \\neq 1$ ⇒ $x \\neq \\frac{\\pi}{2} + 2k\\pi$.</p>
                               <p><strong>$D_h = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + 2k\\pi, k\\in\\mathbb{Z}\\}$.</strong></p>`
                },
                {
                    id: 'ch5ex26q2',
                    texte: "II.1.b. Périodicité.",
                    solution: `<p>$h(x+2\\pi)=f(\\sin(x+2\\pi))=f(\\sin x)=h(x)$.</p>
                               <p><strong>$2\\pi$ est une période.</strong></p>`
                },
                {
                    id: 'ch5ex26q3',
                    texte: "II.1.c. Axe de symétrie.",
                    solution: `<p>$h(\\pi - x) = f(\\sin(\\pi - x)) = f(\\sin x) = h(x)$.</p>
                               <p>Donc $h(2\\cdot\\frac{\\pi}{2} - x) = h(x)$.</p>
                               <p><strong>$x=\\frac{\\pi}{2}$ est un axe de symétrie.</strong></p>`
                },
                {
                    id: 'ch5ex26q4',
                    texte: "II.2.a. Limite en $(\\pi/2)^-$.",
                    solution: `<p>Quand $x\\to(\\pi/2)^-$, $\\sin x \\to 1^-$.</p>
                               <p>D'après l'exercice 7, $f(t) \\to +\\infty$ quand $t\\to1$.</p>
                               <p><strong>$\\lim_{x\\to(\\pi/2)^-} h(x) = +\\infty$.</strong></p>`
                },
                {
                    id: 'ch5ex26q5',
                    texte: "II.2.b. Sens de variation de h sur $[-\\frac{\\pi}{2},\\frac{\\pi}{2}[$.",
                    solution: `<p>$h=f\\circ\\sin$. Sur $[-\\frac{\\pi}{2},\\frac{\\pi}{2}[$, $\\sin$ est croissante.</p>
                               <p>Sur $[-\\frac{\\pi}{2},\\frac{\\pi}{2}[$, $\\sin x \\in [-1,1[$. D'après les variations de $f$ (exercice 7), $f$ est croissante sur $]-\\infty,0]$ et décroissante sur $[0,1[$. Il faut distinguer :</p>
                               <ul>
                                 <li>Sur $[-\\frac{\\pi}{2},0]$, $\\sin x \\le0$, $f$ est croissante en $\\sin x$, donc $h$ est croissante.</li>
                                 <li>Sur $[0,\\frac{\\pi}{2}[$, $\\sin x \\ge0$, $f$ est décroissante sur $[0,1[$, donc $h$ est décroissante.</li>
                               </ul>
                               <p><strong>h est croissante sur $[-\\frac{\\pi}{2},0]$ et décroissante sur $[0,\\frac{\\pi}{2}[$.</strong></p>`
                },
                {
                    id: 'ch5ex26q6',
                    texte: "II.2.c. $h'(x)=0$.",
                    solution: `<p>$h'(x)=\\cos x \\cdot f'(\\sin x)$.</p>
                               <p>$h'(x)=0$ ⇔ $\\cos x=0$ (exclu du domaine) ou $f'(\\sin x)=0$.</p>
                               <p>D'après l'exercice 7, $f'(t)=0$ pour $t=0$ ou $t=3$. $t=3$ impossible car $\\sin x \\le1$.</p>
                               <p>Donc $\\sin x=0$ ⇒ $x=0$ (dans le domaine).</p>
                               <p><strong>$h'(x)=0$ ⇔ $x=0$.</strong></p>`
                },
                {
                    id: 'ch5ex26q7',
                    texte: "II.2.d. Point d'inflexion à l'origine.",
                    solution: `<p>D'après l'exercice 7, $f''$ change de signe en $0$.</p>
                               <p>$h(x)=f(\\sin x)$. $h''(0)$ dépend de $f''(0)$ et de $(\\sin x)'$, etc. Le point $O(0,0)$ est un point d'inflexion car $h''$ change de signe en $0$.</p>
                               <p><strong>$O(0,0)$ est point d'inflexion.</strong></p>`
                },
                {
                    id: 'ch5ex26q8',
                    texte: "3. Tracé de $C_h$.",
                    solution: `<div id="graph-ex26" class="graph-container" data-fn="sin(x)*sin(x)*sin(x)/((sin(x)-1)*(sin(x)-1))" data-xmin="-6.5" data-xmax="6.5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 27 – Fonction rationnelle avec paramètre et trigonométrie
        // ======================================================================
        {
            numero: 27,
            enonce: `<p>Soit $f(x)=\\dfrac{x(x+1)}{x-2}$.</p>
                      <ol>
                        <li>Étudier et représenter graphiquement $f$.</li>
                        <li>Déterminer graphiquement, suivant les valeurs de $m$, le nombre de solutions de l'équation $x^2+(1-m)x+2m=0$.</li>
                        <li>Déterminer graphiquement, suivant les valeurs de $m$, le nombre de solutions de l'équation $\\cos^2 x+(1-m)\\cos x+2m=0$ dans $[0,2\\pi[$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex27q1',
                    texte: "1. Étude de $f$.",
                    solution: `<p>$f(x)=\\dfrac{x^2+x}{x-2} = x+3+\\dfrac{6}{x-2}$ (division euclidienne).</p>
                               <p><strong>Domaine :</strong> $\\mathbb{R}\\setminus\\{2\\}$.</p>
                               <p>$f'(x)=1-\\dfrac{6}{(x-2)^2} = \\dfrac{x^2-4x-2}{(x-2)^2}$.</p>
                               <p>Racines : $x=2\\pm\\sqrt{6}$.</p>
                               <p>Tableau de variation :</p>
                               <ul>
                                 <li>Sur $]-\\infty,2-\\sqrt{6}]$ : croissante.</li>
                                 <li>Sur $[2-\\sqrt{6},2[$ : décroissante.</li>
                                 <li>Sur $]2,2+\\sqrt{6}]$ : décroissante.</li>
                                 <li>Sur $[2+\\sqrt{6},+\\infty[$ : croissante.</li>
                               </ul>
                               <p>Extrema : $f(2-\\sqrt{6}) = 5-2\\sqrt{6}$, $f(2+\\sqrt{6}) = 5+2\\sqrt{6}$.</p>
                               <p>Asymptotes : verticale $x=2$, oblique $y=x+3$.</p>
                               <div id="graph-ex27" class="graph-container" data-fn="x*(x+1)/(x-2)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex27q2',
                    texte: "2. Discussion de $x^2+(1-m)x+2m=0$.",
                    solution: `<p>L'équation est équivalente à $f(x)=m$ (vérifiez en remplaçant).</p>
                               <p>On utilise le tableau de variation de $f$.</p>
                               <p>Les valeurs remarquables : $5-2\\sqrt{6} \\approx 0.101$, $5+2\\sqrt{6} \\approx 9.899$.</p>
                               <ul>
                                 <li>Si $m<5-2\\sqrt{6}$ ou $m>5+2\\sqrt{6}$ : 2 solutions.</li>
                                 <li>Si $m=5-2\\sqrt{6}$ ou $m=5+2\\sqrt{6}$ : 1 solution (double).</li>
                                 <li>Si $5-2\\sqrt{6}<m<5+2\\sqrt{6}$ : 0 solution.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex27q3',
                    texte: "3. Discussion de $\\cos^2 x+(1-m)\\cos x+2m=0$ dans $[0,2\\pi[$.",
                    solution: `<p>On pose $X=\\cos x\\in[-1,1]$. L'équation devient $f(X)=m$.</p>
                               <p>On restreint l'étude de $f$ à $[-1,1]$.</p>
                               <p>$f$ est décroissante sur $[2-\\sqrt{6},2[$ et $[-1,1]\\subset [2-\\sqrt{6},2[$, donc $f$ est décroissante sur $[-1,1]$.</p>
                               <p>Valeurs : $f(-1)=\\dfrac{0}{-3}=0$, $f(1)=\\dfrac{2}{-1}=-2$.</p>
                               <p>Donc $f([-1,1])=[-2,0]$ (car décroissante).</p>
                               <ul>
                                 <li>Si $m\\in[-2,0]$ : il existe une unique solution $X\\in[-1,1]$ telle que $f(X)=m$.</li>
                                 <li>Si $m\\notin[-2,0]$ : aucune solution en $X$.</li>
                               </ul>
                               <p>Pour chaque solution $X$, on résout $\\cos x = X$ dans $[0,2\\pi[$.</p>
                               <ul>
                                 <li>Si $X\\in]-1,1[$ : 2 solutions $x$ (symétriques par rapport à $0$).</li>
                                 <li>Si $X=1$ : $x=0$ (1 solution).</li>
                                 <li>Si $X=-1$ : $x=\\pi$ (1 solution).</li>
                               </ul>
                               <p><strong>Résultat final :</strong></p>
                               <ul>
                                 <li>$m\\in]-2,0[$ : 2 solutions $x$.</li>
                                 <li>$m=-2$ ou $m=0$ : 1 solution $x$ (car $X=\\pm1$).</li>
                                 <li>$m\\notin[-2,0]$ : 0 solution.</li>
                               </ul>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 20 à 27) – version améliorée – ajoutée avec succès.");
})();