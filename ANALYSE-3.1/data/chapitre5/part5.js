// data/chapitre5/part5.js – Exercices 15, 16, 17, 18, 19 (Corrections enrichies)
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
        // EXERCICE 15 – Racine carrée avec asymptote oblique
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Soit $f(x)=\\sqrt{x^2-x+1}$.</p>
                      <ol>
                        <li>a. Déterminer l'ensemble de définition $D$ de $f$.</li>
                        <li>b. Montrer que $f(x)=\\sqrt{\\left(x-\\frac{1}{2}\\right)^2+\\frac{3}{4}}$.</li>
                        <li>a. Montrer que la droite $\\Delta:y=x-\\frac{1}{2}$ est une asymptote à $C_f$ en $+\\infty$.</li>
                        <li>b. Étudier la position de $C_f$ par rapport à $\\Delta$.</li>
                        <li>Étudier la nature de la branche infinie de $C_f$ en $-\\infty$.</li>
                        <li>Tracer $C_f$ et $\\Delta$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex15q1',
                    texte: "1.a. Ensemble de définition.",
                    solution: `<p><strong>Stratégie :</strong> On cherche les valeurs de $x$ pour lesquelles le radicande est positif ou nul.</p>
                               $$ x^2-x+1 = \\left(x-\\frac{1}{2}\\right)^2 + \\frac{3}{4} > 0. $$
                               <p>Ce trinôme est toujours strictement positif (discriminant négatif).</p>
                               <p><strong>Donc $D_f = \\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch5ex15q2',
                    texte: "1.b. Forme canonique.",
                    solution: `<p>On complète le carré :</p>
                               $$ x^2-x+1 = \\left(x^2 - x + \\frac{1}{4}\\right) + \\frac{3}{4} = \\left(x-\\frac{1}{2}\\right)^2 + \\frac{3}{4}. $$
                               <p><strong>Donc $f(x)=\\sqrt{\\left(x-\\frac{1}{2}\\right)^2+\\frac{3}{4}}$.</strong></p>`
                },
                {
                    id: 'ch5ex15q3',
                    texte: "2.a. Asymptote en $+\\infty$.",
                    solution: `<p>On calcule $f(x) - \\left(x-\\frac{1}{2}\\right)$ :</p>
                               $$ f(x)-\\left(x-\\frac{1}{2}\\right) = \\sqrt{x^2-x+1} - x + \\frac{1}{2}. $$
                               <p>On utilise la quantité conjuguée :</p>
                               $$ \\sqrt{x^2-x+1} - \\left(x-\\frac{1}{2}\\right) = \\dfrac{\\left(x^2-x+1\\right) - \\left(x-\\frac{1}{2}\\right)^2}{\\sqrt{x^2-x+1} + \\left(x-\\frac{1}{2}\\right)}. $$
                               <p>Calculons le numérateur :</p>
                               $$ \\left(x^2-x+1\\right) - \\left(x^2 - x + \\frac{1}{4}\\right) = \\frac{3}{4}. $$
                               <p>Donc :</p>
                               $$ f(x)-\\left(x-\\frac{1}{2}\\right) = \\dfrac{\\frac{3}{4}}{\\sqrt{x^2-x+1} + x - \\frac{1}{2}}. $$
                               <p>Quand $x\\to+\\infty$, le dénominateur tend vers $+\\infty$, donc la fraction tend vers 0.</p>
                               <p><strong>Donc $\\Delta:y=x-\\frac{1}{2}$ est asymptote oblique en $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch5ex15q4',
                    texte: "2.b. Position relative par rapport à $\\Delta$.",
                    solution: `<p>On étudie le signe de $f(x)-\\left(x-\\frac{1}{2}\\right)$ :</p>
                               $$ f(x)-\\left(x-\\frac{1}{2}\\right) = \\dfrac{\\frac{3}{4}}{\\sqrt{x^2-x+1} + x - \\frac{1}{2}}. $$
                               <p>Le numérateur est strictement positif. Le dénominateur est positif (car $\\sqrt{x^2-x+1} > |x-\\frac{1}{2}|$).</p>
                               <p><strong>Donc $f(x)-\\left(x-\\frac{1}{2}\\right) > 0$ pour tout $x$.</strong></p>
                               <p><strong>Conclusion : $C_f$ est toujours au-dessus de $\\Delta$.</strong></p>`
                },
                {
                    id: 'ch5ex15q5',
                    texte: "3. Branche infinie en $-\\infty$.",
                    solution: `<p>On calcule $\\lim_{x\\to-\\infty} \\dfrac{f(x)}{x}$.</p>
                               $$ \\lim_{x\\to-\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty} \\dfrac{|x|\\sqrt{1 - \\frac{1}{x} + \\frac{1}{x^2}}}{x} = \\lim_{x\\to-\\infty} -\\sqrt{1 - \\frac{1}{x} + \\frac{1}{x^2}} = -1. $$
                               <p>On calcule ensuite $\\lim_{x\\to-\\infty} (f(x)+x)$.</p>
                               $$ f(x)+x = \\sqrt{x^2-x+1} + x = \\dfrac{(x^2-x+1)-x^2}{\\sqrt{x^2-x+1} - x} = \\dfrac{-x+1}{\\sqrt{x^2-x+1} - x}. $$
                               <p>Quand $x\\to-\\infty$, $\\sqrt{x^2-x+1} \\sim -x$, donc le dénominateur $\\sim -x - x = -2x$.</p>
                               <p>La limite est donc $\\lim_{x\\to-\\infty} \\dfrac{-x}{-2x} = \\dfrac{1}{2}$.</p>
                               <p><strong>Donc la droite $\\Delta':y=-x+\\frac{1}{2}$ est asymptote oblique en $-\\infty$.</strong></p>`
                },
                {
                    id: 'ch5ex15q6',
                    texte: "4. Tracé.",
                    solution: `<div id="graph-ex15" class="graph-container" data-fn="sqrt(x*x-x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>
                               <p>On trace les deux asymptotes obliques $\\Delta:y=x-\\frac{1}{2}$ et $\\Delta':y=-x+\\frac{1}{2}$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 16 – Racine carrée avec tangentes verticales
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit $f(x)=\\sqrt{x^2+3x-4}$.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Étudier la dérivabilité de $f$ à gauche en $-4$ et à droite en $1$. Interpréter graphiquement.</li>
                        <li>Étudier la dérivabilité de $f$ sur $]-\\infty,-4[$ et $]1,+\\infty[$ et déterminer $f'$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Étudier les branches infinies.</li>
                        <li>a. Tracer $C$.</li>
                        <li>b. En déduire la représentation de la courbe d'équation $x^2-y^2+3x-4=0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex16q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>Il faut $x^2+3x-4 \\ge 0$.</p>
                               $$ x^2+3x-4 = (x+4)(x-1). $$
                               <p>Tableau de signes :</p>
                               <table>
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-4$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$(x+4)$</th><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                                 <tr><th>$(x-1)$</th><td>$-$</td><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td></td></tr>
                                 <tr><th>Produit</th><td>$+$</td><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td></td></tr>
                               </table>
                               <p><strong>Donc $D_f = ]-\\infty,-4] \\cup [1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch5ex16q2',
                    texte: "2. Dérivabilité en $-4$ et en $1$.",
                    solution: `<p><strong>En $-4$ (à gauche) :</strong> $f(-4)=0$.</p>
                               $$ \\lim_{x\\to -4^-} \\dfrac{f(x)-f(-4)}{x+4} = \\lim_{x\\to -4^-} \\dfrac{\\sqrt{(x+4)(x-1)}}{x+4}. $$
                               <p>Soit $u=x+4 <0$. Alors $\\sqrt{(x+4)(x-1)} = \\sqrt{u(u-5)} = \\sqrt{-u}\\sqrt{5-u}$.</p>
                               <p>Le quotient devient $\\dfrac{\\sqrt{-u}\\sqrt{5-u}}{u} = \\dfrac{\\sqrt{5-u}}{\\sqrt{-u}} \\cdot \\dfrac{1}{-1} = -\\dfrac{\\sqrt{5-u}}{\\sqrt{-u}} \\to -\\infty$.</p>
                               <p><strong>Donc $f$ n'est pas dérivable à gauche en $-4$. La courbe admet une tangente verticale.</strong></p>
                               <p><strong>En $1$ (à droite) :</strong> $f(1)=0$.</p>
                               $$ \\lim_{x\\to 1^+} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^+} \\dfrac{\\sqrt{(x+4)(x-1)}}{x-1} = \\lim_{x\\to 1^+} \\dfrac{x+4}{\\sqrt{(x+4)(x-1)}} = +\\infty. $$
                               <p><strong>Donc $f$ n'est pas dérivable à droite en $1$. La courbe admet une tangente verticale.</strong></p>`
                },
                {
                    id: 'ch5ex16q3',
                    texte: "3. Dérivée sur les intervalles.",
                    solution: `<p>Sur $]-\\infty,-4[$ et $]1,+\\infty[$, le radicande est strictement positif, donc $f$ est dérivable comme composée.</p>
                               $$ f'(x) = \\dfrac{2x+3}{2\\sqrt{x^2+3x-4}}. $$`
                },
                {
                    id: 'ch5ex16q4',
                    texte: "4. Tableau de variation.",
                    solution: `<p>Étudions le signe de $f'(x)$ :</p>
                               <ul>
                                 <li>Sur $]-\\infty,-4[$ : $2x+3<0$ (car $x<-4$) et le dénominateur est positif. Donc $f'(x)<0$.</li>
                                 <li>Sur $]1,+\\infty[$ : $2x+3>0$, donc $f'(x)>0$.</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-4$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td></td><td>$\nparallel$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$0$</td><td></td><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Les barres $\nparallel$ indiquent les tangentes verticales.</p>`
                },
                {
                    id: 'ch5ex16q5',
                    texte: "5. Branches infinies.",
                    solution: `<p><strong>En $+\\infty$ :</strong></p>
                               $$ \\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty} \\sqrt{1+\\frac{3}{x}-\\frac{4}{x^2}} = 1. $$
                               $$ \\lim_{x\\to+\\infty} (f(x)-x) = \\lim_{x\\to+\\infty} \\dfrac{3x-4}{\\sqrt{x^2+3x-4}+x} = \\dfrac{3}{2}. $$
                               <p><strong>Asymptote oblique : $\\Delta_1:y=x+\\frac{3}{2}$.</strong></p>
                               <p><strong>En $-\\infty$ :</strong></p>
                               $$ \\lim_{x\\to-\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty} -\\sqrt{1+\\frac{3}{x}-\\frac{4}{x^2}} = -1. $$
                               $$ \\lim_{x\\to-\\infty} (f(x)+x) = \\lim_{x\\to-\\infty} \\dfrac{3x-4}{\\sqrt{x^2+3x-4}-x} = -\\dfrac{3}{2}. $$
                               <p><strong>Asymptote oblique : $\\Delta_2:y=-x-\\frac{3}{2}$.</strong></p>`
                },
                {
                    id: 'ch5ex16q6',
                    texte: "6.a. Tracé de $C$.",
                    solution: `<div id="graph-ex16" class="graph-container" data-fn="sqrt(x*x+3*x-4)" data-xmin="-8" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex16q7',
                    texte: "6.b. Courbe d'équation $x^2-y^2+3x-4=0$.",
                    solution: `<p>On a $y^2 = x^2+3x-4$, donc $y = \\pm \\sqrt{x^2+3x-4} = \\pm f(x)$.</p>
                               <p>La courbe d'équation $x^2-y^2+3x-4=0$ est donc la réunion des deux branches symétriques par rapport à l'axe des abscisses : $y=f(x)$ et $y=-f(x)$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17 – Fonction avec racine carrée et valeur absolue
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit $f(x)=x^2-32\\sqrt{x}+31$.</p>
                      <ol>
                        <li>Étudier la dérivabilité de $f$ à droite en $0$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Tracer $C$.</li>
                        <li>En déduire la courbe représentative de $g(x)=x^2-32\\sqrt{|x|}+31$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex17q1',
                    texte: "1. Dérivabilité à droite en $0$.",
                    solution: `<p><strong>Stratégie :</strong> On calcule le taux d'accroissement pour $x\\to0^+$.</p>
                               $$ \\lim_{x\\to0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to0^+} \\dfrac{x^2-32\\sqrt{x}}{x} = \\lim_{x\\to0^+} \\left(x - \\dfrac{32}{\\sqrt{x}}\\right) = -\\infty. $$
                               <p>La limite est infinie.</p>
                               <p><strong>Donc $f$ n'est pas dérivable à droite en $0$. La courbe admet une tangente verticale.</strong></p>`
                },
                {
                    id: 'ch5ex17q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Pour $x>0$, $f$ est dérivable :</p>
                               $$ f'(x) = 2x - \\dfrac{16}{\\sqrt{x}} = \\dfrac{2(\\sqrt{x}-2)(x+2\\sqrt{x}+4)}{\\sqrt{x}}. $$
                               <p>Le facteur $x+2\\sqrt{x}+4$ est toujours strictement positif.</p>
                               <p>Le signe de $f'$ est celui de $(\\sqrt{x}-2)$.</p>
                               <ul>
                                 <li>Si $0<x<16$ : $\\sqrt{x}<2$ → $f'<0$.</li>
                                 <li>Si $x>16$ : $\\sqrt{x}>2$ → $f'>0$.</li>
                               </ul>
                               <p>Calcul de $f(16)=256-32\\cdot4+31 = 256-128+31=159$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$16$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$31$</td><td>$\\searrow$</td><td>$159$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Le minimum local est en $x=16$ avec $f(16)=159$.</p>`
                },
                {
                    id: 'ch5ex17q3',
                    texte: "3. Branche infinie et tracé.",
                    solution: `<p>$\\lim_{x\\to+\\infty} f(x)=+\\infty$ et $\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = +\\infty$.</p>
                               <p><strong>Branche parabolique de direction $(O,\\vec{j})$.</strong></p>
                               <div id="graph-ex17" class="graph-container" data-fn="x*x-32*sqrt(x)+31" data-xmin="0" data-xmax="30" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex17q4',
                    texte: "4. Courbe de $g(x)=x^2-32\\sqrt{|x|}+31$.",
                    solution: `<p>$g(x)=f(|x|)$ car $\\sqrt{|x|} = \\sqrt{|x|}$ et $|x|^2=x^2$.</p>
                               <p><strong>Donc $g$ est paire.</strong> Sa courbe s'obtient en symétrisant $C$ par rapport à l'axe des ordonnées.</p>
                               <p><strong>La courbe de $g$ est l'union de deux branches symétriques.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18 – Fonction simple avec racine
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Soit $g(x)=x\\sqrt{x}+10$.</p>
                      <ol>
                        <li>Montrer que $g$ est dérivable à droite en $0$.</li>
                        <li>Calculer $g'(x)$ pour $x>0$.</li>
                        <li>Dresser le tableau de variation de $g$.</li>
                        <li>Calculer $\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x}$.</li>
                        <li>Représenter $g$ dans un repère orthogonal.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex18q1',
                    texte: "1. Dérivabilité à droite en $0$.",
                    solution: `<p>$g(0)=10$.</p>
                               $$ \\lim_{x\\to0^+} \\dfrac{g(x)-g(0)}{x} = \\lim_{x\\to0^+} \\dfrac{x\\sqrt{x}}{x} = \\lim_{x\\to0^+} \\sqrt{x} = 0. $$
                               <p>La limite est finie. <strong>Donc $g$ est dérivable à droite en $0$ et $g'_d(0)=0$.</strong></p>`
                },
                {
                    id: 'ch5ex18q2',
                    texte: "2. Dérivée pour $x>0$.",
                    solution: `<p>$g(x)=x^{3/2}+10$. Donc :</p>
                               $$ g'(x) = \\dfrac{3}{2}\\sqrt{x}. $$`
                },
                {
                    id: 'ch5ex18q3',
                    texte: "3. Tableau de variation.",
                    solution: `<p>$g'(x) \\ge 0$ pour tout $x\\ge0$, avec $g'(0)=0$.</p>
                               <p><strong>$g$ est strictement croissante sur $[0,+\\infty[$.</strong></p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$g'(x)$</th><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$g(x)$</th><td>$10$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex18q4',
                    texte: "4. Limite de $g(x)/x$.",
                    solution: `<p>$$ \\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = \\lim_{x\\to+\\infty} \\dfrac{x\\sqrt{x}+10}{x} = \\lim_{x\\to+\\infty} \\left(\\sqrt{x} + \\dfrac{10}{x}\\right) = +\\infty. $$</p>
                               <p><strong>Branche parabolique de direction $(O,\\vec{j})$.</strong></p>`
                },
                {
                    id: 'ch5ex18q5',
                    texte: "5. Représentation graphique.",
                    solution: `<div id="graph-ex18" class="graph-container" data-fn="x*sqrt(x)+10" data-xmin="0" data-xmax="10" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19 – Fonction avec racine carrée et bijection
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Soit $f(x)=\\dfrac{2+\\sqrt{4-x^2}}{x}$.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Étudier la dérivabilité de $f$ en $2$ à gauche et interpréter graphiquement.</li>
                        <li>Étudier la dérivabilité de $f$ sur $]0,2[$ et déterminer $f'$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>a. Déterminer les points d'intersection de $C$ et de la droite $D:y=x$.</li>
                        <li>b. Tracer $C$.</li>
                        <li>Soit $g$ la restriction de $f$ à $]0,2]$.</li>
                        <li>a. Montrer que $g$ réalise une bijection de $]0,2]$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>b. Expliciter $g^{-1}(x)$ pour $x\\in I$.</li>
                        <li>c. Tracer la courbe $C'$ de $g^{-1}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex19q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>Il faut $4-x^2 \\ge 0$ et $x\\neq0$.</p>
                               <p>$4-x^2 \\ge 0 \\iff -2 \\le x \\le 2$.</p>
                               <p><strong>$D_f = [-2,0[ \\cup ]0,2]$.</strong></p>`
                },
                {
                    id: 'ch5ex19q2',
                    texte: "2. Dérivabilité en $2$ à gauche.",
                    solution: `<p>$f(2)=\\dfrac{2+0}{2}=1$.</p>
                               $$ \\lim_{x\\to2^-} \\dfrac{f(x)-f(2)}{x-2} = \\lim_{x\\to2^-} \\dfrac{\\frac{2+\\sqrt{4-x^2}}{x} - 1}{x-2} = \\lim_{x\\to2^-} \\dfrac{2+\\sqrt{4-x^2}-x}{x(x-2)}. $$
                               <p>Posons $u=2-x>0$. Alors $x=2-u$, $4-x^2 = 4-(2-u)^2 = 4u-u^2$.</p>
                               <p>Numérateur : $2+\\sqrt{u(4-u)} - (2-u) = u + \\sqrt{u(4-u)} \\sim 2\\sqrt{u}$.</p>
                               <p>Dénominateur : $x(x-2) = (2-u)(-u) \\sim -2u$.</p>
                               <p>Le quotient $\\sim \\dfrac{2\\sqrt{u}}{-2u} = -\\dfrac{1}{\\sqrt{u}} \\to -\\infty$.</p>
                               <p><strong>$f$ n'est pas dérivable à gauche en $2$. La courbe admet une tangente verticale.</strong></p>`
                },
                {
                    id: 'ch5ex19q3',
                    texte: "3. Dérivée sur $]0,2[$.",
                    solution: `<p>Sur $]0,2[$, $f$ est dérivable comme quotient de fonctions dérivables.</p>
                               $$ f'(x) = \\dfrac{\\frac{-x}{\\sqrt{4-x^2}} \\cdot x - (2+\\sqrt{4-x^2})}{x^2} = \\dfrac{-\\frac{x^2}{\\sqrt{4-x^2}} - 2 - \\sqrt{4-x^2}}{x^2} = -\\dfrac{2}{x^2} - \\dfrac{2}{x^2\\sqrt{4-x^2}}. $$
                               <p><strong>Donc $f'(x) = -\\dfrac{2}{x^2}\\left(1+\\dfrac{1}{\\sqrt{4-x^2}}\\right) < 0$ pour $x\\in]0,2[$.</strong></p>`
                },
                {
                    id: 'ch5ex19q4',
                    texte: "4. Tableau de variation.",
                    solution: `<p>Sur $]0,2]$, $f$ est strictement décroissante.</p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} f(x) = +\\infty$ (car $\\frac{2}{x}\\to+\\infty$).</li>
                                 <li>$f(2)=1$.</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$2$</td></tr>
                                 <tr><th>$f'(x)$</th><td>$\nparallel$</td><td>$-$</td><td>$\nparallel$</td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$1$</td></tr>
                               </table>
                               <p>Sur $[-2,0[$, $f$ est impaire, donc strictement croissante.</p>`
                },
                {
                    id: 'ch5ex19q5',
                    texte: "5.a. Intersection avec $y=x$.",
                    solution: `<p>On résout $f(x)=x$ : $\\dfrac{2+\\sqrt{4-x^2}}{x}=x$.</p>
                               $$ 2+\\sqrt{4-x^2} = x^2 \\iff \\sqrt{4-x^2} = x^2-2. $$
                               <p>Il faut $x^2 \\ge 2$.</p>
                               <p>Élevons au carré : $4-x^2 = (x^2-2)^2 = x^4 -4x^2 +4$.</p>
                               <p>Donc $x^4 -3x^2 = 0$ ⇒ $x^2(x^2-3)=0$ ⇒ $x^2=3$ ⇒ $x=\\pm\\sqrt{3}$.</p>
                               <p><strong>Les points sont $(\\sqrt{3},\\sqrt{3})$ et $(-\\sqrt{3},-\\sqrt{3})$.</strong></p>`
                },
                {
                    id: 'ch5ex19q6',
                    texte: "5.b. Tracé de $C$.",
                    solution: `<div id="graph-ex19" class="graph-container" data-fn="(2+sqrt(4-x*x))/x" data-xmin="-3" data-xmax="3" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex19q7',
                    texte: "6.a. Bijection de $g$.",
                    solution: `<p>Sur $]0,2]$, $g$ est continue et strictement décroissante.</p>
                               <p>$\\lim_{x\\to0^+} g(x) = +\\infty$ et $g(2)=1$.</p>
                               <p><strong>$g$ est une bijection de $]0,2]$ sur $[1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch5ex19q8',
                    texte: "6.b. Expression de $g^{-1}$.",
                    solution: `<p>Soit $y=g(x)$. On a $y=\\dfrac{2+\\sqrt{4-x^2}}{x}$.</p>
                               $$ yx-2 = \\sqrt{4-x^2} \\iff (yx-2)^2 = 4-x^2. $$
                               $$ y^2x^2 -4yx +4 = 4 - x^2 \\iff x^2(y^2+1) -4yx = 0. $$
                               $$ x[(y^2+1)x - 4y] = 0. $$
                               <p>Comme $x>0$, on a $(y^2+1)x = 4y$ ⇒ $x = \\dfrac{4y}{y^2+1}$.</p>
                               <p><strong>$g^{-1}(y) = \\dfrac{4y}{1+y^2}$ pour $y\\ge1$.</strong></p>`
                },
                {
                    id: 'ch5ex19q9',
                    texte: "6.c. Tracé de $C'$.",
                    solution: `<p>$C'$ est la courbe de $g^{-1}$, donc la symétrique de la partie de $C$ sur $]0,2]$ par rapport à la droite $y=x$.</p>`
                }
            ]
        }
    );

    console.log("Partie 5 (exercices 15, 16, 17, 18, 19) – version améliorée – ajoutée avec succès.");
})();