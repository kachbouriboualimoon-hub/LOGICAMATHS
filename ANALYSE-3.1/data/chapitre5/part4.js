// data/chapitre5/part4.js – Exercices 11, 12, 13, 14 (Corrections enrichies)
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
        // EXERCICE 11 – Fonction avec valeur absolue et asymptotes
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Soit $f(x)=|x+1|+\\dfrac{x}{x^2-1}$.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Déterminer les asymptotes de $C$.</li>
                        <li>Étudier la position relative de $C$ et de ses asymptotes obliques.</li>
                        <li>Donner l'équation de la tangente à $C$ au point d'abscisse 0 et préciser la position de $C$ par rapport à cette tangente sur l'intervalle $]-1,1[$.</li>
                        <li>Tracer $C$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex11q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p><strong>Stratégie :</strong> On repère les valeurs qui annulent le dénominateur.</p>
                               <p>$x^2-1 = 0 \\iff x=1$ ou $x=-1$.</p>
                               <p>La valeur absolue est définie partout. Donc :</p>
                               <p><strong>$D_f = \\mathbb{R} \\setminus \\{-1, 1\\}$.</strong></p>`
                },
                {
                    id: 'ch5ex11q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>On distingue deux cas selon le signe de $x+1$.</p>
                               <p><strong>Cas 1 : $x<-1$</strong> ($|x+1| = -x-1$).</p>
                               $$ f(x) = -x-1 + \\dfrac{x}{x^2-1} $$
                               $$ f'(x) = -1 + \\dfrac{1-x^2}{(x^2-1)^2} = -1 - \\dfrac{1}{x^2-1} = -\\dfrac{x^2}{x^2-1}. $$
                               <p>Sur $]-\\infty,-1[$, $x^2-1>0$, donc $f'(x) = -\\dfrac{x^2}{x^2-1} \\le 0$ (nul en 0 mais 0 n'est pas dans l'intervalle). Donc <strong>$f$ est strictement décroissante sur $]-\\infty,-1[$.</strong></p>
                               <p><strong>Cas 2 : $x>-1$ et $x\\neq1$</strong> ($|x+1| = x+1$).</p>
                               $$ f(x) = x+1 + \\dfrac{x}{x^2-1} $$
                               $$ f'(x) = 1 + \\dfrac{1-x^2}{(x^2-1)^2} = 1 - \\dfrac{1}{x^2-1} = \\dfrac{x^2-2}{x^2-1}. $$
                               <p>Signe de $f'$ :</p>
                               <ul>
                                 <li>Sur $]-1,1[$ : $x^2-1<0$ et $x^2-2<0$ (car $x^2<1$), donc quotient positif → $f'>0$.</li>
                                 <li>Sur $]1,\\sqrt{2}[$ : $x^2-1>0$ et $x^2-2<0$ → quotient négatif → $f'<0$.</li>
                                 <li>Sur $]\\sqrt{2},+\\infty[$ : $x^2-1>0$ et $x^2-2>0$ → quotient positif → $f'>0$.</li>
                               </ul>
                               <p>Zéros de $f'$ : $x=\\pm\\sqrt{2}$ (seul $\\sqrt{2}$ est dans $]-1,\\infty[\\setminus\\{1\\}$).</p>
                               <p>Valeurs remarquables : $f(0)=1$, $f(\\sqrt{2}) = \\sqrt{2}+1+\\dfrac{\\sqrt{2}}{1} = 2\\sqrt{2}+1$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$0$</td><td></td><td>$1$</td><td></td><td>$\\sqrt{2}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td>$+$</td><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$\nparallel$</td><td>$\\nearrow$</td><td>$1$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$2\\sqrt{2}+1$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch5ex11q3',
                    texte: "3. Asymptotes.",
                    solution: `<p><strong>Asymptotes verticales :</strong> en $x=-1$ et $x=1$.</p>
                               $$ \\lim_{x\\to -1^-} f(x) = -\\infty \\quad \\text{et} \\quad \\lim_{x\\to -1^+} f(x) = +\\infty $$
                               $$ \\lim_{x\\to 1^-} f(x) = -\\infty \\quad \\text{et} \\quad \\lim_{x\\to 1^+} f(x) = +\\infty $$
                               <p><strong>Asymptotes obliques :</strong></p>
                               <p>En $+\\infty$ : $f(x) = x+1+\\dfrac{x}{x^2-1} = x+1+o(1)$, donc $\\lim (f(x)-(x+1))=0$.</p>
                               <p><strong>$\\Delta_1:y=x+1$ est asymptote oblique en $+\\infty$.</strong></p>
                               <p>En $-\\infty$ : $f(x) = -x-1+\\dfrac{x}{x^2-1} = -x-1+o(1)$, donc $\\lim (f(x)-(-x-1))=0$.</p>
                               <p><strong>$\\Delta_2:y=-x-1$ est asymptote oblique en $-\\infty$.</strong></p>`
                },
                {
                    id: 'ch5ex11q4',
                    texte: "4. Position relative par rapport aux asymptotes obliques.",
                    solution: `<p><strong>Par rapport à $\\Delta_1$ (pour $x>-1,\\ x\\neq1$) :</strong></p>
                               $$ f(x)-(x+1) = \\dfrac{x}{x^2-1}. $$
                               <ul>
                                 <li>Sur $]-1,1[$ : $x^2-1<0$, donc le signe est opposé à celui de $x$.</li>
                                 <li>Sur $]1,+\\infty[$ : le signe est celui de $x$ (positif).</li>
                               </ul>
                               <p><strong>Par rapport à $\\Delta_2$ (pour $x<-1$) :</strong></p>
                               $$ f(x)-(-x-1) = \\dfrac{x}{x^2-1}. $$
                               <p>Sur $]-\\infty,-1[$, $x<0$ et $x^2-1>0$, donc $\\dfrac{x}{x^2-1}<0$.</p>
                               <p><strong>Donc $C$ est en dessous de $\\Delta_2$ sur $]-\\infty,-1[$.</strong></p>`
                },
                {
                    id: 'ch5ex11q5',
                    texte: "5. Tangente en 0 et position sur $]-1,1[$.",
                    solution: `<p>$f(0)=1$.</p>
                               <p>Pour $x\\in]-1,1[$, $f(x)=x+1+\\dfrac{x}{x^2-1}$.</p>
                               $$ f'(x) = 1 - \\dfrac{1}{x^2-1} \\quad \\text{donc} \\quad f'(0) = 1 - \\dfrac{1}{-1} = 2. $$
                               <p><strong>Tangente en 0 : $T:y=2x+1$.</strong></p>
                               <p>Étudions la position : $f(x)-T = f(x)-(2x+1) = x+1+\\dfrac{x}{x^2-1} - 2x -1 = -x + \\dfrac{x}{x^2-1} = \\dfrac{x(1 - (x^2-1))}{x^2-1} = \\dfrac{x(2-x^2)}{x^2-1}$.</p>
                               <p>Sur $]-1,1[$, $x^2-1<0$ et $2-x^2>0$, donc le signe de $f(x)-T$ est l'opposé de celui de $x$.</p>
                               <ul>
                                 <li>Si $x<0$ : $f(x)-T >0$ → <strong>$C$ est au-dessus de $T$</strong>.</li>
                                 <li>Si $x>0$ : $f(x)-T <0$ → <strong>$C$ est en dessous de $T$</strong>.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex11q6',
                    texte: "6. Tracé de $C$.",
                    solution: `<div id="graph-ex11" class="graph-container" data-fn="abs(x+1)+x/(x*x-1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12 – Fonction rationnelle avec décomposition, centre de symétrie
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Soit $f(x)=\\dfrac{x^4-6x^2+1}{x^3-x}$.</p>
                      <ol>
                        <li>a. Préciser l'ensemble de définition de $f$.</li>
                        <li>b. Déterminer les réels $a,b,c$ tels que $f(x)=x+\\dfrac{a}{x}+\\dfrac{b}{x-1}+\\dfrac{c}{x+1}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Déterminer les asymptotes à la courbe $C$.</li>
                        <li>Résoudre les équations $f(x)=0$ et $f(x)=x$.</li>
                        <li>Montrer que $C$ possède un centre de symétrie et tracer $C$.</li>
                        <li>Soit $k$ un réel et $P_k(x)=x^4-kx^3-6x^2+kx+1$. Vérifier que l'équation $P_k(x)=0$ admet, quelque soit $k$, quatre racines réelles distinctes.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex12q1',
                    texte: "1.a. Domaine.",
                    solution: `<p>$x^3-x = x(x-1)(x+1)$. Donc les valeurs interdites sont $x=0, x=1, x=-1$.</p>
                               <p><strong>$D_f = \\mathbb{R} \\setminus \\{-1,0,1\\}$.</strong></p>`
                },
                {
                    id: 'ch5ex12q2',
                    texte: "1.b. Décomposition en éléments simples.",
                    solution: `<p><strong>Stratégie :</strong> On réduit au même dénominateur l'expression $x+\\dfrac{a}{x}+\\dfrac{b}{x-1}+\\dfrac{c}{x+1}$ et on identifie avec le numérateur $x^4-6x^2+1$.</p>
                               $$ \\dfrac{x(x^2-1) + a(x^2-1) + b x(x+1) + c x(x-1)}{x(x-1)(x+1)} = \\dfrac{x^4 - x^2 + a x^2 - a + b x^2 + b x + c x^2 - c x}{x^3-x} $$
                               <p>On regroupe : $x^4 + (-1+a+b+c)x^2 + (b-c)x - a$.</p>
                               <p>Par identification avec $x^4 -6x^2 +0\\cdot x +1$ :</p>
                               $$ \\begin{cases} -1+a+b+c = -6 \\\\ b-c = 0 \\\\ -a = 1 \\end{cases} $$
                               <p>On obtient $a=-1$, $b=c=-2$.</p>
                               <p><strong>Donc $f(x)=x-\\dfrac{1}{x}-\\dfrac{2}{x-1}-\\dfrac{2}{x+1}$.</strong></p>`
                },
                {
                    id: 'ch5ex12q3',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Calculons $f'(x)$ :</p>
                               $$ f'(x) = 1 + \\dfrac{1}{x^2} + \\dfrac{2}{(x-1)^2} + \\dfrac{2}{(x+1)^2}. $$
                               <p>Tous les termes sont strictement positifs (le $1$, les carrés).</p>
                               <p><strong>Donc $f'(x)>0$ sur chaque intervalle de $D_f$.</strong></p>
                               <p>La fonction est strictement croissante sur chaque intervalle : $]-\\infty,-1[$, $]-1,0[$, $]0,1[$, $]1,+\\infty[$.</p>`
                },
                {
                    id: 'ch5ex12q4',
                    texte: "3. Asymptotes.",
                    solution: `<p><strong>Asymptotes verticales :</strong> $x=-1,\\; x=0,\\; x=1$.</p>
                               <p><strong>Asymptote oblique :</strong> $\\lim_{|x|\\to\\infty} (f(x)-x) = 0$ (d'après la décomposition).</p>
                               <p><strong>Donc $y=x$ est asymptote oblique.</strong></p>`
                },
                {
                    id: 'ch5ex12q5',
                    texte: "4. Résolution des équations.",
                    solution: `<p><strong>Équation $f(x)=0$ :</strong></p>
                               $$ \\dfrac{x^4-6x^2+1}{x^3-x}=0 \\iff x^4-6x^2+1=0. $$
                               <p>Posons $X=x^2$ (avec $X>0$) : $X^2-6X+1=0$.</p>
                               <p>Discriminant $\\Delta = 36-4=32 = (4\\sqrt{2})^2$.</p>
                               <p>$X_1 = \\dfrac{6-4\\sqrt{2}}{2} = 3-2\\sqrt{2} = (\\sqrt{2}-1)^2$.</p>
                               <p>$X_2 = \\dfrac{6+4\\sqrt{2}}{2} = 3+2\\sqrt{2} = (\\sqrt{2}+1)^2$.</p>
                               <p>Donc $x = \\pm(\\sqrt{2}-1)$ et $x = \\pm(\\sqrt{2}+1)$.</p>
                               <p><strong>Les solutions sont $x=\\pm(\\sqrt{2}-1)$ et $x=\\pm(\\sqrt{2}+1)$.</strong></p>
                               <p><strong>Équation $f(x)=x$ :</strong></p>
                               $$ x-\\dfrac{1}{x}-\\dfrac{2}{x-1}-\\dfrac{2}{x+1} = x \\iff -\\dfrac{1}{x}-\\dfrac{2}{x-1}-\\dfrac{2}{x+1}=0. $$
                               <p>On réduit au même dénominateur :</p>
                               $$ \\dfrac{-(x-1)(x+1) -2x(x+1) -2x(x-1)}{x(x-1)(x+1)} = 0. $$
                               <p>Le numérateur : $- (x^2-1) -2x^2-2x -2x^2+2x = -5x^2 +1$.</p>
                               <p>Donc $-5x^2+1=0 \\iff x^2 = \\dfrac{1}{5} \\iff x = \\pm\\dfrac{1}{\\sqrt{5}}$.</p>
                               <p><strong>Les solutions sont $x=\\pm\\dfrac{1}{\\sqrt{5}}$.</strong></p>`
                },
                {
                    id: 'ch5ex12q6',
                    texte: "5. Centre de symétrie et tracé.",
                    solution: `<p>Vérifions $f(-x) = -f(x)$ :</p>
                               $$ f(-x) = -x + \\dfrac{1}{x} + \\dfrac{2}{-x-1} + \\dfrac{2}{-x+1} = -\\left(x - \\dfrac{1}{x} - \\dfrac{2}{x-1} - \\dfrac{2}{x+1}\\right) = -f(x). $$
                               <p><strong>Donc $O(0,0)$ est centre de symétrie.</strong></p>
                               <div id="graph-ex12" class="graph-container" data-fn="(x*x*x*x-6*x*x+1)/(x*x*x-x)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex12q7',
                    texte: "6. Racines de $P_k$.",
                    solution: `<p>$P_k(x)=0 \\iff x^4 - kx^3 -6x^2 + kx +1 =0$.</p>
                               <p>On divise par $x^3-x$ (pour $x\\neq -1,0,1$) :</p>
                               <p>On remarque que $P_k(x) = (x^3-x)\\left(\\dfrac{x^4-6x^2+1}{x^3-x} - k\\right) = (x^3-x)(f(x)-k)$.</p>
                               <p>Donc $P_k(x)=0 \\iff f(x)=k$ (en excluant $x=-1,0,1$).</p>
                               <p>$f$ est strictement croissante sur chacun des quatre intervalles de son domaine, et sur chaque intervalle, les limites aux bornes sont $\\pm\\infty$.</p>
                               <p>Donc pour tout $k$ réel, l'équation $f(x)=k$ admet exactement une solution dans chaque intervalle, soit quatre solutions distinctes.</p>
                               <p><strong>$P_k(x)=0$ a toujours quatre racines réelles distinctes.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13 – Discussion paramétrique
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit $f(x)=\\dfrac{3x^2-x-2}{x^2-x-2}$.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Déterminer les asymptotes à la courbe $C$ et tracer $C$.</li>
                        <li>Discuter graphiquement, suivant les valeurs du réel $m$, le nombre et le signe des solutions de l'équation $(3-m)x^2+(m-1)x+2(m-1)=0$.</li>
                        <li>Soit $g$ la restriction de $f$ à l'intervalle $]2,+\\infty[$. Montrer que $g$ admet une fonction réciproque $g^{-1}$ dont on précisera l'ensemble de définition. Tracer la courbe de $g^{-1}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex13q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>$x^2-x-2 = (x-2)(x+1)$.</p>
                               <p><strong>$D_f = \\mathbb{R} \\setminus \\{-1, 2\\}$.</strong></p>`
                },
                {
                    id: 'ch5ex13q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Calculons $f'(x)$ :</p>
                               $$ f'(x) = \\dfrac{(6x-1)(x^2-x-2) - (3x^2-x-2)(2x-1)}{(x^2-x-2)^2}. $$
                               <p>Développons le numérateur :</p>
                               <p>$(6x-1)(x^2-x-2) = 6x^3 -6x^2 -12x - x^2 + x +2 = 6x^3 -7x^2 -11x +2$.</p>
                               <p>$(3x^2-x-2)(2x-1) = 6x^3 -3x^2 -2x^2 + x -4x +2 = 6x^3 -5x^2 -3x +2$.</p>
                               <p>La différence : $6x^3 -7x^2 -11x +2 - (6x^3 -5x^2 -3x +2) = -2x^2 -8x = -2x(x+4)$.</p>
                               <p><strong>Donc $f'(x) = \\dfrac{-2x(x+4)}{(x^2-x-2)^2}$.</strong></p>
                               <p>Le dénominateur est toujours positif (carré non nul). Le signe est celui de $-2x(x+4)$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-4$</td><td></td><td>$-1$</td><td></td><td>$0$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td>$\nparallel$</td><td>$+$</td><td>$0$</td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$3$</td><td>$\\searrow$</td><td>$\\frac{25}{9}$</td><td>$\\nearrow$</td><td>$\nparallel$</td><td>$\\nearrow$</td><td>$1$</td><td>$\\searrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$3$</td></tr>
                               </table>
                               <p>Calculs : $f(-4) = \\dfrac{3\\cdot16 +4 -2}{16+4-2} = \\dfrac{50}{18} = \\dfrac{25}{9}$, $f(0) = \\dfrac{-2}{-2}=1$.</p>`
                },
                {
                    id: 'ch5ex13q3',
                    texte: "3. Asymptotes et tracé.",
                    solution: `<p><strong>Asymptotes verticales :</strong> $x=-1$ et $x=2$.</p>
                               <p><strong>Asymptote horizontale :</strong> $\\lim_{x\\to\\pm\\infty} f(x)=3$ (termes dominants $3x^2/x^2=3$).</p>
                               <p>Donc $y=3$ est asymptote horizontale.</p>
                               <div id="graph-ex13" class="graph-container" data-fn="(3*x*x-x-2)/(x*x-x-2)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch5ex13q4',
                    texte: "4. Discussion de l'équation paramétrée.",
                    solution: `<p>L'équation $(3-m)x^2+(m-1)x+2(m-1)=0$ est équivalente à $f(x)=m$ (vérifiable en remplaçant).</p>
                               <p>On utilise le tableau de variation pour discuter le nombre de solutions de $f(x)=m$.</p>
                               <ul>
                                 <li><strong>$m\\in\\left]1,\\frac{25}{9}\\right[$ :</strong> 0 solution (la courbe ne prend pas ces valeurs).</li>
                                 <li><strong>$m=1$ :</strong> une solution $x=0$ (valeur du minimum local).</li>
                                 <li><strong>$m=\\frac{25}{9}$ :</strong> une solution double en $x=-4$.</li>
                                 <li><strong>$m\\in\\left]-\\infty,1\\right[ \\cup \\left]\\frac{25}{9},3\\right[$ :</strong> deux solutions (une dans $]-\\infty,-1[$ et une dans $]2,+\\infty[$).</li>
                                 <li><strong>$m=3$ :</strong> une solution $x=0$ (car la droite $y=3$ coupe la courbe en $x=0$ et coïncide avec l'asymptote).</li>
                                 <li><strong>$m>3$ :</strong> deux solutions (une dans $]-\\infty,-4[$, une dans $]2,+\\infty[$).</li>
                               </ul>
                               <p>Le signe des solutions dépend des intervalles :</p>
                               <ul>
                                 <li>Les solutions dans $]-\\infty,-1[$ sont négatives.</li>
                                 <li>La solution dans $]-1,2[$ est positive (sauf $x=0$).</li>
                                 <li>Les solutions dans $]2,+\\infty[$ sont positives.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex13q5',
                    texte: "5. Réciproque de la restriction $g$ à $]2,+\\infty[$.",
                    solution: `<p>Sur $]2,+\\infty[$, $f$ est continue et strictement décroissante (car $f'(x)<0$).</p>
                               <p>$\\lim_{x\\to2^+} f(x) = +\\infty$ et $\\lim_{x\\to+\\infty} f(x) = 3$.</p>
                               <p><strong>Donc $g$ est une bijection de $]2,+\\infty[$ sur $]3,+\\infty[$.</strong></p>
                               <p>$g^{-1}$ est définie sur $]3,+\\infty[$.</p>
                               <p>Sa courbe est la symétrique de la partie de $C$ correspondant à $x>2$ par rapport à la droite $y=x$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14 – Asymptote oblique, tangentes
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>Soit $f(x)=\\dfrac{(x+1)^3}{(x-1)^2}$.</p>
                      <ol>
                        <li>Vérifier que $f(x)=x+5+\\dfrac{12}{x-1}+\\dfrac{8}{(x-1)^2}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Soit $\\mathscr{C}$ la courbe de $f$.</li>
                        <li>a. Montrer que $\\mathscr{C}$ admet une asymptote oblique $D$.</li>
                        <li>b. Déterminer les coordonnées des points d'intersection $A$ et $B$ de $\\mathscr{C}$ avec les droites d'équations $x=0$ et $y=x+5$.</li>
                        <li>c. Donner les équations des tangentes en $A$ et $B$ à $\\mathscr{C}$.</li>
                        <li>d. Tracer ces tangentes et la courbe $\\mathscr{C}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex14q1',
                    texte: "1. Vérification de la décomposition.",
                    solution: `<p>On développe $x+5+\\dfrac{12}{x-1}+\\dfrac{8}{(x-1)^2}$ :</p>
                               $$ \\dfrac{(x+5)(x-1)^2 + 12(x-1) + 8}{(x-1)^2} = \\dfrac{(x+5)(x^2-2x+1) + 12x - 12 + 8}{(x-1)^2} $$
                               $$ = \\dfrac{x^3+5x^2-2x^2-10x+x+5 + 12x -4}{(x-1)^2} = \\dfrac{x^3+3x^2+3x+1}{(x-1)^2} = \\dfrac{(x+1)^3}{(x-1)^2}. $$
                               <p><strong>La décomposition est vérifiée.</strong></p>`
                },
                {
                    id: 'ch5ex14q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Calculons $f'(x)$ à partir de la décomposition :</p>
                               $$ f'(x) = 1 - \\dfrac{12}{(x-1)^2} - \\dfrac{16}{(x-1)^3} = \\dfrac{(x-1)^3 -12(x-1) -16}{(x-1)^3}. $$
                               <p>On factorise le numérateur : on trouve $(x+1)^2(x-5)$ (vérification par développement).</p>
                               <p>Donc $f'(x) = \\dfrac{(x+1)^2(x-5)}{(x-1)^3}$.</p>
                               <p>$(x+1)^2 \\ge 0$ (s'annule en $-1$).</p>
                               <p>Le signe de $f'$ est celui de $\\dfrac{x-5}{(x-1)^3}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$5$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\nearrow$</td><td>$0$</td><td>$\nearrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$\\frac{27}{4}$</td><td>$\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>Calculs : $f(-1)=0$, $f(5)=\\dfrac{6^3}{4^2} = \\dfrac{216}{16} = \\dfrac{27}{4}$.</p>`
                },
                {
                    id: 'ch5ex14q3',
                    texte: "3.a. Asymptote oblique.",
                    solution: `<p>D'après la décomposition, $f(x) = x+5 + \\dfrac{12}{x-1} + \\dfrac{8}{(x-1)^2}$.</p>
                               $$ \\lim_{|x|\\to\\infty} (f(x)-(x+5)) = \\lim_{|x|\\to\\infty} \\left(\\dfrac{12}{x-1} + \\dfrac{8}{(x-1)^2}\\right) = 0. $$
                               <p><strong>Donc $D:y=x+5$ est asymptote oblique.</strong></p>`
                },
                {
                    id: 'ch5ex14q4',
                    texte: "3.b. Points d'intersection.",
                    solution: `<p><strong>Avec $x=0$ :</strong> $A(0, f(0)) = (0,1)$.</p>
                               <p><strong>Avec $y=x+5$ :</strong> on résout $f(x)=x+5$.</p>
                               $$ x+5+\\dfrac{12}{x-1}+\\dfrac{8}{(x-1)^2} = x+5 \\iff \\dfrac{12}{x-1}+\\dfrac{8}{(x-1)^2}=0. $$
                               <p>Multiplions par $(x-1)^2$ : $12(x-1)+8 = 0$ ⇒ $12x-12+8=0$ ⇒ $12x-4=0$ ⇒ $x=\\dfrac{1}{3}$.</p>
                               <p>Donc $B\\left(\\dfrac{1}{3}, f\\left(\\dfrac{1}{3}\\right)\\right) = \\left(\\dfrac{1}{3}, \\dfrac{16}{3}\\right)$ (car $f(1/3)=1/3+5=16/3$).</p>
                               <p><strong>Les points sont $A(0,1)$ et $B\\left(\\dfrac{1}{3},\\dfrac{16}{3}\\right)$.</strong></p>`
                },
                {
                    id: 'ch5ex14q5',
                    texte: "3.c. Tangentes en A et B.",
                    solution: `<p><strong>En A :</strong> on calcule $f'(0)$.</p>
                               $$ f'(x) = 1 - \\dfrac{12}{(x-1)^2} - \\dfrac{16}{(x-1)^3}. $$
                               $$ f'(0) = 1 - \\dfrac{12}{1} - \\dfrac{16}{-1} = 1 - 12 + 16 = 5. $$
                               <p><strong>Tangente en A : $T_A: y = 5x + 1$.</strong></p>
                               <p><strong>En B :</strong> on calcule $f'(1/3)$.</p>
                               $$ f'(1/3) = 1 - \\dfrac{12}{(-2/3)^2} - \\dfrac{16}{(-2/3)^3} = 1 - \\dfrac{12}{4/9} - \\dfrac{16}{-8/27} = 1 - 27 + 54 = 28. $$
                               <p><strong>Tangente en B : $T_B: y = 28\\left(x-\\frac{1}{3}\\right) + \\frac{16}{3} = 28x - \\frac{28}{3} + \\frac{16}{3} = 28x - 4$.</strong></p>`
                },
                {
                    id: 'ch5ex14q6',
                    texte: "3.d. Tracé.",
                    solution: `<div id="graph-ex14" class="graph-container" data-fn="(x+1)*(x+1)*(x+1)/((x-1)*(x-1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>
                               <p>On trace l'asymptote $D:y=x+5$ et les tangentes $T_A$ et $T_B$.</p>`
                }
            ]
        }
    );

    console.log("Partie 4 (exercices 11, 12, 13, 14) – version améliorée – ajoutée avec succès.");
})();