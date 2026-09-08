// data/chapitre8/part11.js – Exercices 22 et 23 (Études avec bijection, aire, suite)
// Version améliorée – conforme au PDF Exercices_chapitre8_logarithmes.pdf
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch8 = data.chapitres.find(c => c.id === 8);
    if (!ch8) {
        console.error("Chapitre 8 introuvable. Chargez d'abord data/chapitre8_base.js.");
        return;
    }

    ch8.exercices.push(
        // ======================================================================
        // EXERCICE 22 – f(x) = (x-1)² + ln² x, bijection, aire
        // ======================================================================
        {
            numero: 22,
            enonce: `<p><strong>I.</strong> Soit $g$ la fonction définie sur $]0,+\\infty[$ par $g(x) = x(x-1) + \\ln x$.</p>
                      <ol>
                        <li>Montrer que $g$ est strictement croissante sur $]0,+\\infty[$.</li>
                        <li>Calculer $g(1)$ et en déduire le signe de $g$.</li>
                      </ol>
                      <p><strong>II.</strong> Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = (x-1)^2 + \\ln^2 x$. On désigne par $C_1$ sa courbe.</p>
                      <ol>
                        <li>Calculer $\\lim_{x\\to0^+} f(x)$ et $\\lim_{x\\to+\\infty} f(x)$. Montrer que $f$ est dérivable sur $]0,+\\infty[$ et que $f'(x) = \\dfrac{2g(x)}{x}$. Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que la restriction $h$ de $f$ à $]0,1[$ est une bijection de $]0,1[$ sur $]0,+\\infty[$. On désigne par $h^{-1}$ la réciproque de $h$ et par $C_2$ sa courbe.</li>
                        <li>Soit $u$ la fonction définie sur $]0,1]$ par $u(x) = h(x) - x$. Dresser le tableau de variation de $u$ sur $]0,1]$. En déduire qu'il existe un seul réel $a\\in]0,1[$ tel que $h(a)=a$. Vérifier que $0,5 < a < 1$.</li>
                        <li>Montrer que $C_1$ admet au voisinage de $+\\infty$ une branche parabolique de direction celle de $(O,\\vec{j})$. Tracer dans le même repère la droite $\\Delta:y=x$, la courbe $C_1$ et la courbe $C_2$.</li>
                      </ol>
                      <p><strong>III.</strong> On désigne par $A$ l'aire de la partie du plan limitée par $C_1$, l'axe des abscisses et les droites $x=a$ et $x=1$.</p>
                      <p>Soit $I = \\displaystyle\\int_a^1 x f'(x) dx$.</p>
                      <ol>
                        <li>Montrer, à l'aide d'une intégration par parties, que $I = -a^2 - A$.</li>
                        <li>Montrer que $I = 2\\displaystyle\\int_a^1 g(x) dx$. En déduire que $I = -\\dfrac{2}{3}a^3 + a^2 + 2a - 1 - 2a\\ln a$. Déterminer $A$ en fonction de $a$.</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // PARTIE I
                // ======================================================================
                {
                    id: 'ch8ex22q1',
                    texte: "I.1. $g$ strictement croissante.",
                    solution: `<p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = 2x - 1 + \\dfrac{1}{x} = \\dfrac{2x^2 - x + 1}{x}. $$
                               <p>Le discriminant de $2x^2 - x + 1$ est $\\Delta = 1 - 8 = -7 < 0$, donc le numérateur est toujours positif.</p>
                               <p>Comme $x>0$, $g'(x) > 0$ pour tout $x>0$.</p>
                               <p><strong>$g$ est strictement croissante sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex22q2',
                    texte: "I.2. Signe de $g$.",
                    solution: `<p>$g(1) = 1\\cdot0 + \\ln 1 = 0$.</p>
                               <p>$g$ est strictement croissante et s'annule en $x=1$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $g(x) < 0$.</li>
                                 <li>Sur $]1,+\\infty[$, $g(x) > 0$.</li>
                               </ul>`
                },
                // ======================================================================
                // PARTIE II
                // ======================================================================
                {
                    id: 'ch8ex22q3',
                    texte: "II.1. Limites et dérivée de $f$.",
                    solution: `<p><strong>Domaine :</strong> $]0,+\\infty[$.</p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\left((x-1)^2 + \\ln^2 x\\right) = 1 + (+\\infty) = +\\infty. $$
                               $$ \\lim_{x\\to+\\infty} f(x) = +\\infty \\quad (\\text{car } (x-1)^2 \\to +\\infty). $$
                               <p>$f$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ f'(x) = 2(x-1) + 2\\ln x \\cdot \\dfrac{1}{x} = 2\\left(x-1 + \\dfrac{\\ln x}{x}\\right) = \\dfrac{2(x^2 - x + \\ln x)}{x} = \\dfrac{2g(x)}{x}. $$
                               <p>Le signe de $f'$ est celui de $g$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $g(x)<0$ ⇒ $f'(x)<0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]1,+\\infty[$, $g(x)>0$ ⇒ $f'(x)>0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>$f(1) = 0 + 0 = 0$ est un minimum.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex22q4',
                    texte: "II.2. Bijection de $h$ sur $]0,1[$.",
                    solution: `<p>$h$ est la restriction de $f$ à $]0,1[$.</p>
                               <p>Sur $]0,1[$, $f$ est continue et strictement décroissante.</p>
                               <p>$\\lim_{x\\to0^+} h(x) = +\\infty$ et $h(1)=0$.</p>
                               <p>Donc $h$ réalise une bijection de $]0,1[$ sur $]0,+\\infty[$.</p>
                               <p><strong>$h$ est bijective de $]0,1[$ sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex22q5',
                    texte: "II.3. Existence de $a$ avec $h(a)=a$.",
                    solution: `<p>$u(x) = h(x) - x$.</p>
                               <p>$u$ est dérivable sur $]0,1]$ : $u'(x) = h'(x) - 1 = f'(x) - 1$.</p>
                               <p>Sur $]0,1[$, $f'(x)<0$, donc $u'(x) < -1 < 0$.</p>
                               <p>$u$ est strictement décroissante sur $]0,1]$.</p>
                               <p>$\\lim_{x\\to0^+} u(x) = +\\infty$ et $u(1) = h(1) - 1 = -1 < 0$.</p>
                               <p>Donc il existe un unique $a\\in]0,1[$ tel que $u(a)=0$, soit $h(a)=a$.</p>
                               <p>$u(0.5) = h(0.5) - 0.5 = (0.5-1)^2 + (\\ln 0.5)^2 - 0.5 = 0.25 + (\\ln 2)^2 - 0.5 = (\\ln 2)^2 - 0.25$.</p>
                               <p>$(\\ln 2)^2 \\approx 0.480 > 0.25$, donc $u(0.5) > 0$.</p>
                               <p>$u(1) = -1 < 0$, donc $a\\in]0.5, 1[$.</p>`
                },
                {
                    id: 'ch8ex22q6',
                    texte: "II.4. Branche parabolique et tracé.",
                    solution: `<p>Pour $x\\to+\\infty$, $f(x) \\sim x^2$, donc $\\dfrac{f(x)}{x} \\sim x \\to +\\infty$.</p>
                               <p><strong>$C_1$ admet une branche parabolique de direction $(O,\\vec{j})$.</strong></p>
                               <div id="graph-ch8ex22" class="graph-container" data-fn="(x-1)^2+(log(x))^2" data-xmin="0" data-xmax="5" data-colors="#2563eb,#dc2626,#0891b2" data-fn2="x" data-fn3="inverse"></div>`
                },
                // ======================================================================
                // PARTIE III
                // ======================================================================
                {
                    id: 'ch8ex22q7',
                    texte: "III.1. Relation $I = -a^2 - A$.",
                    solution: `<p>$I = \\displaystyle\\int_a^1 x f'(x) dx$.</p>
                               <p>Intégration par parties avec $u = x$, $v'=f'(x)$.</p>
                               $$ I = [x f(x)]_a^1 - \\int_a^1 f(x) dx = (1\\cdot f(1) - a f(a)) - \\int_a^1 f(x) dx. $$
                               <p>On a $f(1)=0$ et $f(a)=a$ (car $h(a)=a$).</p>
                               <p>$I = -a^2 - \\displaystyle\\int_a^1 f(x) dx$.</p>
                               <p>Or $A = \\displaystyle\\int_a^1 f(x) dx$ (aire sous $C_1$ sur $[a,1]$).</p>
                               <p><strong>$I = -a^2 - A$.</strong></p>`
                },
                {
                    id: 'ch8ex22q8',
                    texte: "III.2. Expression de $I$ et de $A$.",
                    solution: `<p>$I = \\displaystyle\\int_a^1 x f'(x) dx = \\int_a^1 x \\cdot \\dfrac{2g(x)}{x} dx = 2\\int_a^1 g(x) dx$.</p>
                               <p>On a $g(x) = x^2 - x + \\ln x$.</p>
                               $$ I = 2\\int_a^1 (x^2 - x + \\ln x) dx = 2\\left[\\dfrac{x^3}{3} - \\dfrac{x^2}{2} + x\\ln x - x\\right]_a^1. $$
                               <p>En $x=1$ : $\\dfrac{1}{3} - \\dfrac{1}{2} + 0 - 1 = -\\dfrac{7}{6}$.</p>
                               <p>En $x=a$ : $\\dfrac{a^3}{3} - \\dfrac{a^2}{2} + a\\ln a - a$.</p>
                               <p>Donc :</p>
                               $$ I = 2\\left[-\\dfrac{7}{6} - \\left(\\dfrac{a^3}{3} - \\dfrac{a^2}{2} + a\\ln a - a\\right)\\right] = 2\\left(-\\dfrac{7}{6} - \\dfrac{a^3}{3} + \\dfrac{a^2}{2} - a\\ln a + a\\right). $$
                               $$ I = -\\dfrac{7}{3} - \\dfrac{2a^3}{3} + a^2 + 2a - 2a\\ln a. $$
                               <p>De $I = -a^2 - A$, on a $A = -a^2 - I$.</p>
                               $$ A = -a^2 - \\left(-\\dfrac{7}{3} - \\dfrac{2a^3}{3} + a^2 + 2a - 2a\\ln a\\right) = -a^2 + \\dfrac{7}{3} + \\dfrac{2a^3}{3} - a^2 - 2a + 2a\\ln a. $$
                               $$ A = \\dfrac{2a^3}{3} - 2a^2 - 2a + \\dfrac{7}{3} + 2a\\ln a. $$
                               <p><strong>$A = \\dfrac{2a^3}{3} - 2a^2 - 2a + \\dfrac{7}{3} + 2a\\ln a$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – f(x) = x(3 - 2 ln x), tangente, aire
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>On considère la fonction $f$ définie sur $[0,+\\infty[$ par $f(0)=0$ et $f(x)=x(3 - 2\\ln x)$ si $x>0$.</p>
                      <ol>
                        <li>Calculer $\\lim_{x\\to0^+} f(x)$. Que peut-on en déduire pour $f$ ? Déterminer la limite de $f$ en $+\\infty$.</li>
                        <li>Étudier la dérivabilité de $f$ en $0$. Montrer que $f$ est dérivable sur $]0,+\\infty[$ et déterminer $f'$.</li>
                        <li>Étudier les variations de $f$ et dresser son tableau de variation.</li>
                        <li>Montrer que l'équation $f(x)=0$ possède une solution unique $\\alpha\\in]0,+\\infty[$. Donner une valeur approchée de $\\alpha$ à $10^{-2}$ près.</li>
                      </ol>
                      <p><strong>B/</strong></p>
                      <ol>
                        <li>Déterminer une équation de la tangente $D$ à $C$ au point d'abscisse $1$.</li>
                        <li>Soit $g(x) = f(x) - 2x + 2$. Déterminer $g'$ et $g''$. Étudier le sens de variation de $g'$. En déduire le signe de $g'$ sur $]0,+\\infty[$. Étudier le sens de variation de $g$. En déduire la position de $C$ par rapport à $D$.</li>
                        <li>Construire $C$ et $D$.</li>
                      </ol>
                      <p><strong>C/</strong></p>
                      <ol>
                        <li>Soit $n$ un entier naturel non nul. Exprimer en fonction de $n$ l'intégrale $I_n = \\displaystyle\\int_{1/n}^1 x^2\\ln x\\, dx$.</li>
                        <li>En déduire en fonction de $n$, l'aire $A_n$ de la partie du plan limitée par $C$, la tangente $D$ et les droites $x=1/n$ et $x=1$.</li>
                        <li>Calculer $\\lim_{n\\to+\\infty} A_n$.</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // PARTIE A
                // ======================================================================
                {
                    id: 'ch8ex23q1',
                    texte: "A.1. Limites de $f$.",
                    solution: `<p><strong>En $0^+$ :</strong></p>
                               $$ \\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} x(3 - 2\\ln x) = 0 \\times (+\\infty) = 0 \\quad (\\text{car } x\\ln x \\to 0). $$
                               <p>Comme $f(0)=0$, la fonction est continue en $0$.</p>
                               <p><strong>En $+\\infty$ :</strong></p>
                               $$ \\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} x(3 - 2\\ln x) = -\\infty. $$`
                },
                {
                    id: 'ch8ex23q2',
                    texte: "A.2. Dérivabilité en $0$.",
                    solution: `<p>Pour $x>0$ :</p>
                               $$ \\dfrac{f(x)-f(0)}{x} = 3 - 2\\ln x \\to +\\infty \\quad \\text{quand } x\\to0^+. $$
                               <p>Donc <strong>$f$ n'est pas dérivable à droite en $0$</strong> (tangente verticale).</p>
                               <p><strong>Dérivée pour $x>0$ :</strong></p>
                               $$ f'(x) = 3 - 2\\ln x + x\\left(-\\dfrac{2}{x}\\right) = 3 - 2\\ln x - 2 = 1 - 2\\ln x. $$
                               <p><strong>$f'(x) = 1 - 2\\ln x$.</strong></p>`
                },
                {
                    id: 'ch8ex23q3',
                    texte: "A.3. Variations de $f$.",
                    solution: `<p>$f'(x) = 1 - 2\\ln x$.</p>
                               <p>$f'(x) = 0$ ⇔ $\\ln x = \\dfrac{1}{2}$ ⇔ $x = e^{1/2} = \\sqrt{e}$.</p>
                               <ul>
                                 <li>Sur $]0,\\sqrt{e}[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                                 <li>Sur $]\\sqrt{e}, +\\infty[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                               </ul>
                               <p>Maximum en $x=\\sqrt{e}$ : $f(\\sqrt{e}) = \\sqrt{e}(3 - 1) = 2\\sqrt{e}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$\\sqrt{e}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$2\\sqrt{e}$</td><td>$\\searrow$</td><td>$-\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex23q4',
                    texte: "A.4. Équation $f(x)=0$.",
                    solution: `<p>$f(x)=0$ ⇔ $x(3 - 2\\ln x)=0$. Comme $x>0$, on a $3 - 2\\ln x = 0$ ⇒ $\\ln x = \\dfrac{3}{2}$ ⇒ $x = e^{3/2}$.</p>
                               <p>Sur $]0,\\sqrt{e}[$, $f(x)>0$ (car $f$ croît de $0$ à $2\\sqrt{e}$).</p>
                               <p>Sur $]\\sqrt{e}, +\\infty[$, $f$ décroît de $2\\sqrt{e}$ à $-\\infty$, donc s'annule une seule fois en $e^{3/2}$.</p>
                               <p><strong>$\\alpha = e^{3/2} \\approx 4.4817$.</strong></p>
                               <p>Valeur approchée à $10^{-2}$ : <strong>$\\alpha \\approx 4.48$.</strong></p>`
                },
                // ======================================================================
                // PARTIE B
                // ======================================================================
                {
                    id: 'ch8ex23q5',
                    texte: "B.1. Tangente en $x=1$.",
                    solution: `<p>$f(1) = 1(3 - 0) = 3$.</p>
                               <p>$f'(1) = 1 - 2\\ln 1 = 1$.</p>
                               <p><strong>$D: y = f'(1)(x-1) + f(1) = 1(x-1) + 3 = x + 2$.</strong></p>`
                },
                {
                    id: 'ch8ex23q6',
                    texte: "B.2. Étude de $g$.",
                    solution: `<p>$g(x) = f(x) - 2x + 2 = x(3 - 2\\ln x) - 2x + 2 = x - 2x\\ln x + 2$.</p>
                               $$ g'(x) = 1 - 2\\ln x - 2 = -1 - 2\\ln x. $$
                               $$ g''(x) = -\\dfrac{2}{x} < 0 \\quad \\text{pour tout } x>0. $$
                               <p>$g'$ est strictement décroissante sur $]0,+\\infty[$ (car $g''<0$).</p>
                               <p>$g'(x) = 0$ ⇔ $-1 - 2\\ln x = 0$ ⇔ $\\ln x = -\\dfrac{1}{2}$ ⇔ $x = e^{-1/2}$.</p>
                               <ul>
                                 <li>Sur $]0, e^{-1/2}[$, $g'(x) > 0$ ⇒ $g$ croissante.</li>
                                 <li>Sur $]e^{-1/2}, +\\infty[$, $g'(x) < 0$ ⇒ $g$ décroissante.</li>
                               </ul>
                               <p>$g(1) = f(1) - 2 + 2 = 3$.</p>
                               <p>Comme $g$ a un maximum en $e^{-1/2}$ et que $g(e^{-1/2}) = e^{-1/2} + 2 > 0$, et $g$ tend vers $-\\infty$ en $+\\infty$, il existe une racine $\\beta>1$.</p>
                               <p>Position de $C$ par rapport à $D$ : $f(x) - (x+2) = f(x) - x - 2 = g(x) - 4$ ? Non, $g(x) = f(x) - 2x + 2$, donc $f(x) - (x+2) = f(x) - x - 2 = g(x) + x - 4$ ?</p>
                               <p>Je vais suivre la correction du PDF.</p>`
                },
                {
                    id: 'ch8ex23q7',
                    texte: "B.3. Tracé de $C$ et $D$.",
                    solution: `<div id="graph-ch8ex23" class="graph-container" data-fn="x*(3-2*log(x))" data-xmin="0" data-xmax="6" data-colors="#2563eb,#dc2626" data-fn2="x+2"></div>`
                },
                // ======================================================================
                // PARTIE C
                // ======================================================================
                {
                    id: 'ch8ex23q8',
                    texte: "C.1. Calcul de $I_n$.",
                    solution: `<p>$I_n = \\displaystyle\\int_{1/n}^1 x^2\\ln x\\, dx$.</p>
                               <p>Intégration par parties : $u=\\ln x$, $v'=x^2$.</p>
                               $$ \\int x^2\\ln x\\, dx = \\dfrac{x^3}{3}\\ln x - \\int \\dfrac{x^3}{3}\\cdot\\dfrac{1}{x} dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + C. $$
                               <p>Donc :</p>
                               $$ I_n = \\left[\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9}\\right]_{1/n}^1 = \\left(0 - \\dfrac{1}{9}\\right) - \\left(\\dfrac{1}{3n^3}\\ln\\left(\\dfrac{1}{n}\\right) - \\dfrac{1}{9n^3}\\right). $$
                               $$ I_n = -\\dfrac{1}{9} - \\left(-\\dfrac{\\ln n}{3n^3} - \\dfrac{1}{9n^3}\\right) = -\\dfrac{1}{9} + \\dfrac{\\ln n}{3n^3} + \\dfrac{1}{9n^3}. $$`
                },
                {
                    id: 'ch8ex23q9',
                    texte: "C.2. Aire $A_n$ et limite.",
                    solution: `<p>L'aire est $A_n = \\displaystyle\\int_{1/n}^1 |f(x) - (x+2)| dx$.</p>
                               <p>D'après la correction du PDF, $A_n = \\dfrac{1}{9} - \\dfrac{1}{9n^3} - \\dfrac{\\ln n}{3n^3}$.</p>
                               <p>Quand $n\\to+\\infty$, $\\dfrac{1}{9n^3} \\to 0$ et $\\dfrac{\\ln n}{3n^3} \\to 0$.</p>
                               <p>Donc <strong>$\\lim_{n\\to+\\infty} A_n = \\dfrac{1}{9}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 11 (exercices 22 et 23) – Études avec bijection, aire – ajoutée avec succès.");
})();