// data/chapitre9/part11.js – Exercices 20 et 21 (Intégrales avec bases, étude de g)
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
        // EXERCICE 20 – Intégrales avec fonctions exponentielles de base a
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Calculer les intégrales suivantes :</p>
                      <ol>
                        <li>$\\displaystyle\\int_0^1 3^x\\,dx$.</li>
                        <li>$\\displaystyle\\int_0^{-1} \\dfrac{3^x}{1+3^x}\\,dx$.</li>
                        <li>$\\displaystyle\\int_1^2 x^{\\frac{4}{3}}\\,dx$.</li>
                        <li>$\\displaystyle\\int_{\\frac{1}{2}}^1 4x^{-\\frac{1}{5}}\\,dx$.</li>
                        <li>$\\displaystyle\\int_0^1 \\sqrt[4]{x}\\,dx$.</li>
                        <li>$\\displaystyle\\int_0^{\\ln 2} 2^x(1+2^x)^2\\,dx$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex20q1',
                    texte: "1. $\\displaystyle\\int_0^1 3^x\\,dx$",
                    solution: `<p><strong>Méthode :</strong> On utilise la primitive de $a^x$ : $\\int a^x dx = \\dfrac{a^x}{\\ln a} + C$.</p>
                               $$ \\int_0^1 3^x\\,dx = \\left[\\dfrac{3^x}{\\ln 3}\\right]_0^1 = \\dfrac{3}{\\ln 3} - \\dfrac{1}{\\ln 3} = \\dfrac{2}{\\ln 3}. $$
                               <p><strong>$\\boxed{\\dfrac{2}{\\ln 3}}$</strong></p>`
                },
                {
                    id: 'ch9ex20q2',
                    texte: "2. $\\displaystyle\\int_0^{-1} \\dfrac{3^x}{1+3^x}\\,dx$",
                    solution: `<p>Posons $u = 1+3^x$. Alors $du = 3^x\\ln 3\\,dx$.</p>
                               <p>Quand $x=0$, $u=2$ ; quand $x=-1$, $u=1+\\frac{1}{3} = \\frac{4}{3}$.</p>
                               $$ \\int_0^{-1} \\dfrac{3^x}{1+3^x}\\,dx = \\dfrac{1}{\\ln 3}\\int_2^{4/3} \\dfrac{du}{u} = \\dfrac{1}{\\ln 3}[\\ln u]_2^{4/3} = \\dfrac{1}{\\ln 3}\\left(\\ln\\dfrac{4}{3} - \\ln 2\\right) = \\dfrac{1}{\\ln 3}\\ln\\left(\\dfrac{2}{3}\\right). $$
                               <p><strong>$\\boxed{\\dfrac{1}{\\ln 3}\\ln\\left(\\dfrac{2}{3}\\right)}$</strong></p>`
                },
                {
                    id: 'ch9ex20q3',
                    texte: "3. $\\displaystyle\\int_1^2 x^{\\frac{4}{3}}\\,dx$",
                    solution: `<p>On utilise la primitive $\\dfrac{x^{4/3+1}}{4/3+1} = \\dfrac{x^{7/3}}{7/3} = \\dfrac{3}{7}x^{7/3}$.</p>
                               $$ \\int_1^2 x^{4/3}\\,dx = \\left[\\dfrac{3}{7}x^{7/3}\\right]_1^2 = \\dfrac{3}{7}(2^{7/3} - 1) = \\dfrac{3}{7}(2^{2}2^{1/3} - 1) = \\dfrac{3}{7}(4\\sqrt[3]{2} - 1). $$
                               <p><strong>$\\boxed{\\dfrac{3}{7}(4\\sqrt[3]{2} - 1)}$</strong></p>`
                },
                {
                    id: 'ch9ex20q4',
                    texte: "4. $\\displaystyle\\int_{\\frac{1}{2}}^1 4x^{-\\frac{1}{5}}\\,dx$",
                    solution: `<p>Primitive : $\\dfrac{4x^{-1/5+1}}{-1/5+1} = \\dfrac{4x^{4/5}}{4/5} = 5x^{4/5}$.</p>
                               $$ \\int_{1/2}^1 4x^{-1/5}\\,dx = \\left[5x^{4/5}\\right]_{1/2}^1 = 5 - 5\\left(\\dfrac{1}{2}\\right)^{4/5} = 5(1 - 2^{-4/5}). $$
                               <p><strong>$\\boxed{5(1 - 2^{-4/5})}$</strong></p>`
                },
                {
                    id: 'ch9ex20q5',
                    texte: "5. $\\displaystyle\\int_0^1 \\sqrt[4]{x}\\,dx$",
                    solution: `<p>$\\sqrt[4]{x} = x^{1/4}$.</p>
                               <p>Primitive : $\\dfrac{x^{1/4+1}}{1/4+1} = \\dfrac{x^{5/4}}{5/4} = \\dfrac{4}{5}x^{5/4}$.</p>
                               $$ \\int_0^1 x^{1/4}\\,dx = \\left[\\dfrac{4}{5}x^{5/4}\\right]_0^1 = \\dfrac{4}{5}. $$
                               <p><strong>$\\boxed{\\dfrac{4}{5}}$</strong></p>`
                },
                {
                    id: 'ch9ex20q6',
                    texte: "6. $\\displaystyle\\int_0^{\\ln 2} 2^x(1+2^x)^2\\,dx$",
                    solution: `<p>Posons $u = 1+2^x$. Alors $du = 2^x\\ln 2\\,dx$.</p>
                               <p>Quand $x=0$, $u=2$ ; quand $x=\\ln 2$, $u=1+2 = 3$.</p>
                               $$ \\int_0^{\\ln 2} 2^x(1+2^x)^2\\,dx = \\dfrac{1}{\\ln 2}\\int_2^3 u^2\\,du = \\dfrac{1}{\\ln 2}\\left[\\dfrac{u^3}{3}\\right]_2^3 = \\dfrac{1}{\\ln 2}\\cdot\\dfrac{27-8}{3} = \\dfrac{19}{3\\ln 2}. $$
                               <p><strong>$\\boxed{\\dfrac{19}{3\\ln 2}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21 – Étude de g(t) = (1-e^{-t})/t
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>Soit $g$ la fonction définie sur $[0, +\\infty[$ par
                      $$ g(t) = \\begin{cases} \\dfrac{1-e^{-t}}{t} & \\text{si } t > 0, \\\\ 1 & \\text{si } t = 0. \\end{cases} $$
                      </p>
                      <ol>
                        <li>
                          <ol>
                            <li>Établir que $g$ est continue à droite en $0$.</li>
                            <li>Déterminer la limite de $g$ en $+\\infty$.</li>
                          </ol>
                        </li>
                        <li>
                          <ol>
                            <li>Calculer $g'(t)$, pour tout $t > 0$.</li>
                            <li>Prouver que pour tout $t \\geq 0$, $1-t \\leq e^{-t}$. En déduire en intégrant sur $[0, x]$ que $e^{-x} \\leq 1-x+\\dfrac{x^2}{2}$, $x \\geq 0$.</li>
                            <li>Montrer alors que $e^{-u} \\geq 1-u+\\dfrac{u^2}{2}-\\dfrac{u^3}{6}$, $u \\geq 0$.</li>
                            <li>Prouver que $g$ est dérivable en $0$ et donner la valeur de $g'(0)$.</li>
                          </ol>
                        </li>
                        <li>Tracer la courbe de $g$ dans un repère orthonormé.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex21q1',
                    texte: "1.a. Continuité à droite en $0$.",
                    solution: `<p>On calcule $\\lim_{t\\to0^+} g(t) = \\lim_{t\\to0^+} \\dfrac{1-e^{-t}}{t}$.</p>
                               <p>On utilise la limite usuelle $\\lim_{u\\to0} \\dfrac{e^u-1}{u} = 1$.</p>
                               <p>$\\dfrac{1-e^{-t}}{t} = -\\dfrac{e^{-t}-1}{t} = \\dfrac{e^{-t}-1}{-t}$.</p>
                               <p>Posons $u=-t$. Alors $\\dfrac{e^{-t}-1}{-t} = \\dfrac{e^u-1}{u} \\to 1$.</p>
                               <p>Donc $\\lim_{t\\to0^+} g(t) = 1 = g(0)$.</p>
                               <p><strong>$g$ est continue à droite en $0$.</strong></p>`
                },
                {
                    id: 'ch9ex21q2',
                    texte: "1.b. Limite en $+\\infty$.",
                    solution: `<p>$\\lim_{t\\to+\\infty} g(t) = \\lim_{t\\to+\\infty} \\dfrac{1-e^{-t}}{t} = 0$.</p>
                               <p>En effet, $e^{-t} \\to 0$, donc $1-e^{-t} \\to 1$, et $\\dfrac{1}{t} \\to 0$.</p>
                               <p><strong>$\\lim_{t\\to+\\infty} g(t) = 0$.</strong></p>`
                },
                {
                    id: 'ch9ex21q3',
                    texte: "2.a. Dérivée de $g$ pour $t>0$.",
                    solution: `<p>On utilise la formule du quotient :</p>
                               $$ g'(t) = \\dfrac{e^{-t}\\cdot t - (1-e^{-t})}{t^2} = \\dfrac{te^{-t} - 1 + e^{-t}}{t^2} = \\dfrac{e^{-t}(t+1) - 1}{t^2}. $$
                               <p><strong>$g'(t) = \\dfrac{e^{-t}(t+1) - 1}{t^2}$.</strong></p>`
                },
                {
                    id: 'ch9ex21q4',
                    texte: "2.b. Inégalité $1-t \\leq e^{-t}$ et intégration.",
                    solution: `<p><strong>Première inégalité :</strong></p>
                               <p>Soit $\\phi(t) = e^{-t} - (1-t) = e^{-t} + t - 1$.</p>
                               <p>$\\phi'(t) = -e^{-t} + 1 = 1 - e^{-t} \\geq 0$ pour $t\\geq0$.</p>
                               <p>$\\phi(0) = 1 - 1 = 0$.</p>
                               <p>Donc $\\phi(t) \\geq 0$ pour $t\\geq0$, soit <strong>$1-t \\leq e^{-t}$</strong>.</p>
                               <p><strong>Intégration :</strong></p>
                               <p>On intègre l'inégalité $1-t \\leq e^{-t}$ sur $[0,x]$ :</p>
                               $$ \\int_0^x (1-t)\\,dt \\leq \\int_0^x e^{-t}\\,dt \\quad \\Rightarrow \\quad \\left[t - \\dfrac{t^2}{2}\\right]_0^x \\leq \\left[-e^{-t}\\right]_0^x. $$
                               $$ x - \\dfrac{x^2}{2} \\leq -e^{-x} + 1 \\quad \\Rightarrow \\quad e^{-x} \\leq 1 - x + \\dfrac{x^2}{2}. $$
                               <p><strong>$e^{-x} \\leq 1 - x + \\dfrac{x^2}{2}$.</strong></p>`
                },
                {
                    id: 'ch9ex21q5',
                    texte: "2.c. Inégalité $e^{-u} \\geq 1-u+\\dfrac{u^2}{2}-\\dfrac{u^3}{6}$.",
                    solution: `<p>On intègre l'inégalité $e^{-t} \\leq 1 - t + \\dfrac{t^2}{2}$ sur $[0,u]$ :</p>
                               $$ \\int_0^u e^{-t}\\,dt \\leq \\int_0^u \\left(1 - t + \\dfrac{t^2}{2}\\right) dt. $$
                               $$ -e^{-u} + 1 \\leq u - \\dfrac{u^2}{2} + \\dfrac{u^3}{6}. $$
                               $$ e^{-u} \\geq 1 - u + \\dfrac{u^2}{2} - \\dfrac{u^3}{6}. $$
                               <p><strong>$e^{-u} \\geq 1 - u + \\dfrac{u^2}{2} - \\dfrac{u^3}{6}$.</strong></p>`
                },
                {
                    id: 'ch9ex21q6',
                    texte: "2.d. Dérivabilité de $g$ en $0$ et $g'(0)$.",
                    solution: `<p>On calcule le taux d'accroissement en $0$ :</p>
                               $$ \\lim_{t\\to0^+} \\dfrac{g(t)-g(0)}{t} = \\lim_{t\\to0^+} \\dfrac{\\frac{1-e^{-t}}{t} - 1}{t} = \\lim_{t\\to0^+} \\dfrac{1-e^{-t} - t}{t^2}. $$
                               <p>On utilise le développement limité $e^{-t} = 1 - t + \\dfrac{t^2}{2} - \\dfrac{t^3}{6} + o(t^3)$.</p>
                               <p>Alors $1 - e^{-t} - t = 1 - \\left(1 - t + \\dfrac{t^2}{2} - \\dfrac{t^3}{6} + o(t^3)\\right) - t = -\\dfrac{t^2}{2} + \\dfrac{t^3}{6} + o(t^3)$.</p>
                               <p>Donc $\\dfrac{1-e^{-t}-t}{t^2} = -\\dfrac{1}{2} + \\dfrac{t}{6} + o(t) \\to -\\dfrac{1}{2}$.</p>
                               <p><strong>$g$ est dérivable en $0$ et $g'(0) = -\\dfrac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch9ex21q7',
                    texte: "3. Tracé de la courbe de $g$.",
                    solution: `<p>La fonction $g$ est continue en $0$ avec $g(0)=1$, décroissante (on peut le vérifier avec $g'(t)<0$), et tend vers $0$ en $+\\infty$.</p>
                               <div id="graph-ch9ex21" class="graph-container" data-fn="(1-exp(-x))/x" data-xmin="0" data-xmax="10" data-colors="#2563eb"></div>`
                }
            ]
        }
    );

    console.log("Partie 11 (exercices 20 et 21) – Intégrales et étude de g – ajoutée avec succès.");
})();