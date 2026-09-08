// data/chapitre7/part5.js – Exercices 19 à 24 (Valeur moyenne, inégalité de la moyenne)
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
        // EXERCICE 19 – Valeur moyenne de fonctions polynomiales
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Dans chacun des cas suivants, calculer la valeur moyenne de la fonction $f$ sur l'intervalle $I$.</p>
                      <ol>
                        <li>$f(x)=x^4-x^3+1$, $I=[-1,3]$.</li>
                        <li>$f(x)=\\dfrac{1}{x^3}-1$, $I=[2,4]$.</li>
                        <li>$f(x)=\\sin(2x)$, $I=[0,\\pi]$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex19q1',
                    texte: "1. $f(x)=x^4-x^3+1$, $I=[-1,3]$.",
                    solution: `<p><strong>Méthode :</strong> La valeur moyenne de $f$ sur $[a,b]$ est $\\bar{f} = \\dfrac{1}{b-a}\\int_a^b f(x) dx$.</p>
                               $$ \\bar{f} = \\dfrac{1}{3-(-1)}\\int_{-1}^3 (x^4-x^3+1) dx = \\dfrac{1}{4}\\left[\\dfrac{x^5}{5} - \\dfrac{x^4}{4} + x\\right]_{-1}^3. $$
                               <p>Calculons d'abord l'intégrale :</p>
                               $$ \\left[\\dfrac{x^5}{5} - \\dfrac{x^4}{4} + x\\right]_{-1}^3 = \\left(\\dfrac{243}{5} - \\dfrac{81}{4} + 3\\right) - \\left(-\\dfrac{1}{5} - \\dfrac{1}{4} - 1\\right). $$
                               $$ = \\dfrac{243}{5} - \\dfrac{81}{4} + 3 + \\dfrac{1}{5} + \\dfrac{1}{4} + 1 = \\dfrac{244}{5} - \\dfrac{80}{4} + 4 = \\dfrac{244}{5} - 20 + 4 = \\dfrac{244}{5} - 16 = \\dfrac{244-80}{5} = \\dfrac{164}{5}. $$
                               <p>Donc $\\bar{f} = \\dfrac{1}{4} \\cdot \\dfrac{164}{5} = \\dfrac{41}{5}$.</p>
                               <p><strong>$\\bar{f} = \\dfrac{41}{5}$.</strong></p>`
                },
                {
                    id: 'ch7ex19q2',
                    texte: "2. $f(x)=\\dfrac{1}{x^3}-1$, $I=[2,4]$.",
                    solution: `<p>$$ \\bar{f} = \\dfrac{1}{4-2}\\int_2^4 \\left(\\dfrac{1}{x^3} - 1\\right) dx = \\dfrac{1}{2}\\left[-\\dfrac{1}{2x^2} - x\\right]_2^4. $$</p>
                               $$ = \\dfrac{1}{2}\\left[\\left(-\\dfrac{1}{32} - 4\\right) - \\left(-\\dfrac{1}{8} - 2\\right)\\right] = \\dfrac{1}{2}\\left(-\\dfrac{1}{32} - 4 + \\dfrac{1}{8} + 2\\right) = \\dfrac{1}{2}\\left(-2 + \\dfrac{3}{32}\\right). $$
                               $$ = \\dfrac{1}{2}\\left(-\\dfrac{64}{32} + \\dfrac{3}{32}\\right) = \\dfrac{1}{2} \\cdot \\left(-\\dfrac{61}{32}\\right) = -\\dfrac{61}{64}. $$
                               <p><strong>$\\bar{f} = -\\dfrac{61}{64}$.</strong></p>`
                },
                {
                    id: 'ch7ex19q3',
                    texte: "3. $f(x)=\\sin(2x)$, $I=[0,\\pi]$.",
                    solution: `<p>$$ \\bar{f} = \\dfrac{1}{\\pi-0}\\int_0^\\pi \\sin(2x) dx = \\dfrac{1}{\\pi}\\left[-\\dfrac{\\cos(2x)}{2}\\right]_0^\\pi. $$</p>
                               $$ = \\dfrac{1}{\\pi}\\left(-\\dfrac{\\cos(2\\pi)}{2} + \\dfrac{\\cos 0}{2}\\right) = \\dfrac{1}{\\pi}\\left(-\\dfrac{1}{2} + \\dfrac{1}{2}\\right) = 0. $$
                               <p><strong>$\\bar{f} = 0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 20 – Inégalité de la moyenne pour 1/(x²-x+1)
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>En utilisant l'inégalité de la moyenne, donner un encadrement de :</p>
                      $$ \\int_2^4 \\dfrac{dx}{x^2-x+1}. $$`,
            questions: [
                {
                    id: 'ch7ex20q1',
                    texte: "Encadrement de l'intégrale.",
                    solution: `<p><strong>Stratégie :</strong> On encadre la fonction $f(x)=\\dfrac{1}{x^2-x+1}$ sur $[2,4]$.</p>
                               <p>$g(x)=x^2-x+1$ est croissante sur $[2,4]$ (car $g'(x)=2x-1>0$).</p>
                               <p>$g(2)=4-2+1=3$, $g(4)=16-4+1=13$.</p>
                               <p>Donc $3 \\le x^2-x+1 \\le 13$ ⇒ $\\dfrac{1}{13} \\le f(x) \\le \\dfrac{1}{3}$.</p>
                               <p>En intégrant sur $[2,4]$ (longueur $2$) :</p>
                               $$ \\dfrac{1}{13}(4-2) \\le \\int_2^4 f(x) dx \\le \\dfrac{1}{3}(4-2). $$
                               $$ \\dfrac{2}{13} \\le \\int_2^4 \\dfrac{dx}{x^2-x+1} \\le \\dfrac{2}{3}. $$
                               <p><strong>$\\dfrac{2}{13} \\le I \\le \\dfrac{2}{3}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21 – Inégalité de la moyenne pour 1/(3+tan²x)
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>En utilisant l'inégalité de la moyenne, donner un encadrement de :</p>
                      $$ \\int_{\\pi/6}^{\\pi/3} \\dfrac{dx}{3+\\tan^2 x}. $$`,
            questions: [
                {
                    id: 'ch7ex21q1',
                    texte: "Encadrement de l'intégrale.",
                    solution: `<p>Sur $\\left[\\frac{\\pi}{6},\\frac{\\pi}{3}\\right]$, $\\tan x$ est croissante.</p>
                               <p>$\\tan(\\pi/6)=\\dfrac{1}{\\sqrt{3}}$, $\\tan(\\pi/3)=\\sqrt{3}$.</p>
                               <p>Donc $\\dfrac{1}{3} \\le \\tan^2 x \\le 3$.</p>
                               <p>Donc $3+\\dfrac{1}{3} \\le 3+\\tan^2 x \\le 3+3$ ⇒ $\\dfrac{10}{3} \\le 3+\\tan^2 x \\le 6$.</p>
                               <p>En prenant l'inverse : $\\dfrac{1}{6} \\le f(x) \\le \\dfrac{3}{10}$.</p>
                               <p>La longueur de l'intervalle est $\\dfrac{\\pi}{3} - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6}$.</p>
                               <p>Donc :</p>
                               $$ \\dfrac{\\pi}{6}\\cdot\\dfrac{1}{6} \\le \\int_{\\pi/6}^{\\pi/3} \\dfrac{dx}{3+\\tan^2 x} \\le \\dfrac{\\pi}{6}\\cdot\\dfrac{3}{10}. $$
                               $$ \\dfrac{\\pi}{36} \\le I \\le \\dfrac{\\pi}{20}. $$
                               <p><strong>$\\dfrac{\\pi}{36} \\le I \\le \\dfrac{\\pi}{20}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 22 – Fonction définie par morceaux et primitive
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>On considère la fonction $f$ définie sur $[0,3]$ par :</p>
                      $$ f(x)=\\begin{cases} x & \\text{si } x\\in[0,1] \\\\ \\dfrac{1}{x} & \\text{si } x\\in]1,3] \\end{cases} $$
                      <ol>
                        <li>Vérifier que $f$ est continue sur $[0,3]$.</li>
                        <li>Soit $F$ la fonction définie sur $[0,3]$ par $F(x)=\\int_0^x f(t) dt$.</li>
                        <li>i. Expliciter $F(x)$.</li>
                        <li>ii. Représenter $F$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex22q1',
                    texte: "1. Continuité de $f$.",
                    solution: `<p>Sur $[0,1]$, $f$ est polynomiale donc continue.</p>
                               <p>Sur $]1,3]$, $f(x)=1/x$ est continue.</p>
                               <p>En $x=1$ : $\\lim_{x\\to1^-} f(x) = 1$ et $\\lim_{x\\to1^+} f(x) = 1$, et $f(1)=1$.</p>
                               <p><strong>$f$ est continue sur $[0,3]$.</strong></p>`
                },
                {
                    id: 'ch7ex22q2',
                    texte: "2.i. Expression de $F$.",
                    solution: `<p>Pour $x\\in[0,1]$ : $F(x)=\\int_0^x t dt = \\dfrac{x^2}{2}$.</p>
                               <p>Pour $x\\in[1,3]$ : $F(x)=\\int_0^1 t dt + \\int_1^x \\dfrac{1}{t} dt = \\dfrac{1}{2} + [\\ln t]_1^x = \\dfrac{1}{2} + \\ln x$.</p>
                               <p><strong>$F(x)=\\begin{cases} \\dfrac{x^2}{2} & \\text{si } x\\in[0,1] \\\\ \\dfrac{1}{2} + \\ln x & \\text{si } x\\in[1,3] \\end{cases}$</strong></p>`
                },
                {
                    id: 'ch7ex22q3',
                    texte: "2.ii. Représentation de $F$.",
                    solution: `<p>$F$ est continue sur $[0,3]$ (car $F(1)=1/2$).</p>
                               <div id="graph-ex22" class="graph-container" data-fn="piecewise(x<=1, x*x/2, 0.5+ln(x))" data-xmin="0" data-xmax="3" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – Suite I_n = ∫₀^(π/4) tan^(n+2) x dx
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>On pose, pour tout entier naturel $n$, $I_n = \\int_0^{\\pi/4} \\tan^{n+2} x dx$.</p>
                      <ol>
                        <li>i. Calculer $I_0$.</li>
                        <li>ii. Vérifier que pour tout $n$, $0 \\le I_{n+1} \\le I_n$.</li>
                        <li>iii. En déduire que $(I_n)$ est convergente.</li>
                        <li>i. Montrer que pour tout $n$, $I_n + I_{n+2} = \\dfrac{1}{n+3}$.</li>
                        <li>ii. En déduire $\\lim_{n\\to+\\infty} I_n$.</li>
                        <li>iii. Calculer $I_2$ et $I_4$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex23q1',
                    texte: "1.i. Calcul de $I_0$.",
                    solution: `<p>$I_0 = \\int_0^{\\pi/4} \\tan^2 x dx = \\int_0^{\\pi/4} \\left(\\dfrac{1}{\\cos^2 x} - 1\\right) dx$.</p>
                               $$ = [\\tan x - x]_0^{\\pi/4} = 1 - \\dfrac{\\pi}{4}. $$
                               <p><strong>$I_0 = 1 - \\dfrac{\\pi}{4}$.</strong></p>`
                },
                {
                    id: 'ch7ex23q2',
                    texte: "1.ii. Inégalité $I_{n+1} \\le I_n$.",
                    solution: `<p>Sur $[0,\\frac{\\pi}{4}]$, $\\tan x \\in[0,1]$, donc $\\tan^{n+3} x \\le \\tan^{n+2} x$.</p>
                               <p>Donc $I_{n+1} \\le I_n$.</p>
                               <p><strong>$(I_n)$ est décroissante.</strong></p>`
                },
                {
                    id: 'ch7ex23q3',
                    texte: "1.iii. Convergence de $(I_n)$.",
                    solution: `<p>$(I_n)$ est décroissante et minorée par $0$ (car $\\tan^{n+2} x \\ge 0$).</p>
                               <p>Donc <strong>$(I_n)$ converge vers un réel $L\\ge0$.</strong></p>`
                },
                {
                    id: 'ch7ex23q4',
                    texte: "2.i. Relation $I_n + I_{n+2}$.",
                    solution: `<p>$I_n + I_{n+2} = \\int_0^{\\pi/4} (\\tan^{n+2} x + \\tan^{n+4} x) dx$.</p>
                               <p>$\\tan^{n+2} x + \\tan^{n+4} x = \\tan^{n+2} x(1+\\tan^2 x) = \\tan^{n+2} x \\cdot \\dfrac{1}{\\cos^2 x}$.</p>
                               <p>Posons $u=\\tan x$, $du=\\dfrac{1}{\\cos^2 x} dx$.</p>
                               $$ I_n + I_{n+2} = \\int_0^1 u^{n+2} du = \\dfrac{1}{n+3}. $$
                               <p><strong>$I_n + I_{n+2} = \\dfrac{1}{n+3}$.</strong></p>`
                },
                {
                    id: 'ch7ex23q5',
                    texte: "2.ii. Limite de $(I_n)$.",
                    solution: `<p>On a $I_n + I_{n+2} = \\dfrac{1}{n+3}$.</p>
                               <p>Quand $n\\to+\\infty$, $\\dfrac{1}{n+3} \\to 0$.</p>
                               <p>Comme $I_n$ et $I_{n+2}$ convergent vers la même limite $L$, on a $L+L = 0$ ⇒ $L=0$.</p>
                               <p><strong>$\\lim_{n\\to+\\infty} I_n = 0$.</strong></p>`
                },
                {
                    id: 'ch7ex23q6',
                    texte: "2.iii. Calcul de $I_2$ et $I_4$.",
                    solution: `<p>Pour $n=0$ : $I_0 + I_2 = \\dfrac{1}{3}$ ⇒ $I_2 = \\dfrac{1}{3} - I_0 = \\dfrac{1}{3} - \\left(1 - \\dfrac{\\pi}{4}\\right) = \\dfrac{\\pi}{4} - \\dfrac{2}{3}$.</p>
                               <p>Pour $n=2$ : $I_2 + I_4 = \\dfrac{1}{5}$ ⇒ $I_4 = \\dfrac{1}{5} - I_2 = \\dfrac{1}{5} - \\left(\\dfrac{\\pi}{4} - \\dfrac{2}{3}\\right) = \\dfrac{1}{5} + \\dfrac{2}{3} - \\dfrac{\\pi}{4} = \\dfrac{13}{15} - \\dfrac{\\pi}{4}$.</p>
                               <p><strong>$I_2 = \\dfrac{\\pi}{4} - \\dfrac{2}{3}$, $I_4 = \\dfrac{13}{15} - \\dfrac{\\pi}{4}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24 – Fonction f(x)=x/(x-ln x) et primitive
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x)=\\dfrac{x}{x-\\ln x}$.</p>
                      <p>Soit $F$ la primitive de $f$ sur $]0,+\\infty[$ qui s'annule en $0$ (prolongement par continuité).</p>
                      <ol>
                        <li>Déterminer le prolongement par continuité de $f$ en $0$.</li>
                        <li>Montrer que $F$ est dérivable sur $[0,+\\infty[$ et déterminer $F'$.</li>
                        <li>Montrer que pour tout $x>0$, $\\dfrac{x}{x-\\ln x} \\le 1$.</li>
                        <li>En déduire que pour tout $x\\ge0$, $F(x)\\le x$.</li>
                        <li>Montrer que $\\lim_{x\\to+\\infty} \\dfrac{F(x)}{x} = 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex24q1',
                    texte: "1. Prolongement par continuité en $0$.",
                    solution: `<p>$\\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\dfrac{x}{x-\\ln x} = \\lim_{x\\to0^+} \\dfrac{x}{-\\ln x} = 0$.</p>
                               <p>Donc $f$ se prolonge par continuité en $0$ par <strong>$f(0)=0$.</strong></p>`
                },
                {
                    id: 'ch7ex24q2',
                    texte: "2. Dérivabilité de $F$.",
                    solution: `<p>$F$ est la primitive de $f$ sur $[0,+\\infty[$. Donc $F$ est dérivable sur $[0,+\\infty[$ et <strong>$F'(x)=f(x)$.</strong></p>`
                },
                {
                    id: 'ch7ex24q3',
                    texte: "3. Inégalité $f(x)\\le1$.",
                    solution: `<p>$\\dfrac{x}{x-\\ln x} \\le 1$ ⇔ $x \\le x-\\ln x$ ⇔ $\\ln x \\le 0$ ⇔ $x\\le1$.</p>
                               <p>Pour $x\\ge1$, $f(x)\\le1$. Pour $x\\in]0,1]$, $f(x)$ peut être plus grand que 1.</p>
                               <p>En fait, sur $]0,1[$, $\\ln x<0$, donc $x-\\ln x > x$, donc $\\dfrac{x}{x-\\ln x} < 1$.</p>
                               <p>Donc <strong>$f(x)\\le1$ pour tout $x>0$.</strong></p>`
                },
                {
                    id: 'ch7ex24q4',
                    texte: "4. Majoration de $F$.",
                    solution: `<p>Pour $x\\ge0$, $F(x)=\\int_0^x f(t) dt \\le \\int_0^x 1 dt = x$.</p>
                               <p><strong>$F(x)\\le x$ pour tout $x\\ge0$.</strong></p>`
                },
                {
                    id: 'ch7ex24q5',
                    texte: "5. Limite de $F(x)/x$.",
                    solution: `<p>On a $0 \\le F(x) \\le x$, donc $0 \\le \\dfrac{F(x)}{x} \\le 1$.</p>
                               <p>De plus, $\\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\dfrac{x}{x-\\ln x} = 1$.</p>
                               <p>Par le théorème de la moyenne (ou par règle de l'Hôpital pour les intégrales), $\\lim_{x\\to+\\infty} \\dfrac{F(x)}{x} = 1$.</p>
                               <p><strong>$\\lim_{x\\to+\\infty} \\dfrac{F(x)}{x} = 1$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 5 (exercices 19 à 24) – Valeur moyenne – ajoutée avec succès.");
})();