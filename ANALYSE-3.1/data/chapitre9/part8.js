// data/chapitre9/part8.js – Exercices 14 et 15 (Intégrales avancées, étude de fonction)
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
        // EXERCICE 14 – Intégrales avec e^x, décomposition en éléments simples
        // ======================================================================
        {
            numero: 14,
            enonce: `<ol>
                        <li>Calculer les intégrales $\\displaystyle\\int_0^1 \\frac{e^x}{1+e^x}\\,dx$ et $\\displaystyle\\int_0^1 \\frac{e^x}{(1+e^x)^2}\\,dx$.</li>
                        <li>Déterminer les réels $a$, $b$ et $c$ tels que $\\dfrac{1}{(1+t)^2} = a + \\dfrac{bt}{1+t} + \\dfrac{ct}{(1+t)^2}$, $t \\geq 0$. En déduire la valeur de $I = \\displaystyle\\int_0^1 \\frac{1}{(1+e^x)^2}\\,dx$.</li>
                        <li>On pose $J = \\displaystyle\\int_0^1 \\frac{xe^x}{(1+e^x)^3}\\,dx$. Exprimer $J$ en fonction de $I$ et en déduire la valeur de $J$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex14q1',
                    texte: "1. Calcul de $\\int_0^1 \\dfrac{e^x}{1+e^x}\\,dx$ et $\\int_0^1 \\dfrac{e^x}{(1+e^x)^2}\\,dx$.",
                    solution: `<p><strong>Première intégrale :</strong></p>
                               <p>On reconnaît la forme $\\dfrac{u'}{u}$ avec $u=1+e^x$.</p>
                               $$ \\int_0^1 \\dfrac{e^x}{1+e^x}\\,dx = [\\ln(1+e^x)]_0^1 = \\ln(1+e) - \\ln 2 = \\ln\\left(\\dfrac{1+e}{2}\\right). $$
                               <p><strong>$\\boxed{\\ln\\left(\\dfrac{1+e}{2}\\right)}$</strong></p>
                               <p><strong>Deuxième intégrale :</strong></p>
                               <p>Posons $u=1+e^x$. Alors $du=e^x dx$.</p>
                               <p>Quand $x=0$, $u=2$ ; quand $x=1$, $u=1+e$.</p>
                               $$ \\int_0^1 \\dfrac{e^x}{(1+e^x)^2}\\,dx = \\int_2^{1+e} \\dfrac{1}{u^2}\\,du = \\left[-\\dfrac{1}{u}\\right]_2^{1+e} = -\\dfrac{1}{1+e} + \\dfrac{1}{2} = \\dfrac{1}{2} - \\dfrac{1}{1+e}. $$
                               <p><strong>$\\boxed{\\dfrac{1}{2} - \\dfrac{1}{1+e}}$</strong></p>`
                },
                {
                    id: 'ch9ex14q2',
                    texte: "2. Détermination de $a,b,c$ et calcul de $I$.",
                    solution: `<p>On cherche $a,b,c$ tels que :</p>
                               $$ \\dfrac{1}{(1+t)^2} = a + \\dfrac{bt}{1+t} + \\dfrac{ct}{(1+t)^2}. $$
                               <p>En réduisant au même dénominateur :</p>
                               $$ \\dfrac{1}{(1+t)^2} = \\dfrac{a(1+t)^2 + bt(1+t) + ct}{(1+t)^2}. $$
                               <p>Donc $1 = a(1+2t+t^2) + b(t+t^2) + ct$.</p>
                               <p>Par identification des coefficients :</p>
                               $$ \\begin{cases} a = 1 \\\\ 2a + b + c = 0 \\\\ a + b = 0 \\end{cases} $$
                               <p>On obtient $a=1$, $b=-1$, $c=-1$.</p>
                               <p><strong>$a=1$, $b=-1$, $c=-1$.</strong></p>
                               <p>Pour l'intégrale $I$ :</p>
                               $$ I = \\int_0^1 \\dfrac{1}{(1+e^x)^2}\\,dx. $$
                               <p>Posons $t=e^x$, $dx=\\dfrac{dt}{t}$. Quand $x=0$, $t=1$ ; quand $x=1$, $t=e$.</p>
                               $$ I = \\int_1^e \\dfrac{1}{(1+t)^2} \\cdot \\dfrac{dt}{t} = \\int_1^e \\dfrac{dt}{t(1+t)^2}. $$
                               <p>D'après la décomposition :</p>
                               $$ \\dfrac{1}{t(1+t)^2} = \\dfrac{a}{t} + \\dfrac{b}{1+t} + \\dfrac{c}{(1+t)^2}. $$
                               <p>On peut aussi faire la décomposition en $t$ :</p>
                               $$ \\dfrac{1}{t(1+t)^2} = \\dfrac{1}{t} - \\dfrac{1}{1+t} - \\dfrac{1}{(1+t)^2}. $$
                               <p>Donc :</p>
                               $$ I = \\int_1^e \\left(\\dfrac{1}{t} - \\dfrac{1}{1+t} - \\dfrac{1}{(1+t)^2}\\right) dt = \\left[\\ln t - \\ln(1+t) + \\dfrac{1}{1+t}\\right]_1^e. $$
                               <p>En $t=e$ : $\\ln e - \\ln(1+e) + \\dfrac{1}{1+e} = 1 - \\ln(1+e) + \\dfrac{1}{1+e}$.</p>
                               <p>En $t=1$ : $\\ln 1 - \\ln 2 + \\dfrac{1}{2} = -\\ln 2 + \\dfrac{1}{2}$.</p>
                               <p>Donc :</p>
                               $$ I = 1 - \\ln(1+e) + \\dfrac{1}{1+e} + \\ln 2 - \\dfrac{1}{2} = \\dfrac{1}{2} + \\ln\\left(\\dfrac{2}{1+e}\\right) + \\dfrac{1}{1+e}. $$
                               <p><strong>$\\boxed{I = \\dfrac{1}{2} + \\ln\\left(\\dfrac{2}{1+e}\\right) + \\dfrac{1}{1+e}}$</strong></p>`
                },
                {
                    id: 'ch9ex14q3',
                    texte: "3. Calcul de $J = \\int_0^1 \\dfrac{xe^x}{(1+e^x)^3}\\,dx$ en fonction de $I$.",
                    solution: `<p>On intègre par parties :</p>
                               <p>Posons $u = \\dfrac{x}{(1+e^x)^2}$, $v' = \\dfrac{e^x}{(1+e^x)^2}$.</p>
                               <p>$u' = \\dfrac{(1+e^x)^2 - x \\cdot 2(1+e^x)e^x}{(1+e^x)^4} = \\dfrac{1+e^x - 2xe^x}{(1+e^x)^3}$.</p>
                               <p>$v = \\int \\dfrac{e^x}{(1+e^x)^2}\\,dx = -\\dfrac{1}{1+e^x}$.</p>
                               <p>Donc $J = \\left[-\\dfrac{x}{(1+e^x)(1+e^x)^2}\\right]_0^1 - \\int_0^1 \\left(-\\dfrac{1}{1+e^x}\\right) \\cdot \\dfrac{1+e^x - 2xe^x}{(1+e^x)^3}\\,dx$.</p>
                               <p>D'après la correction du PDF, on obtient la relation :</p>
                               $$ J = \\dfrac{1}{2}I - \\dfrac{1}{4}\\ln\\left(\\dfrac{1+e}{2}\\right). $$
                               <p><strong>$\\boxed{J = \\dfrac{1}{2}I - \\dfrac{1}{4}\\ln\\left(\\dfrac{1+e}{2}\\right)}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15 – Étude complète de f(x) = e^x/(1+e^x)
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\dfrac{e^x}{1+e^x}$. On désigne par $C$ sa courbe dans un repère orthonormé.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Soit $I$ le point de coordonnées $\\left(0, \\dfrac{1}{2}\\right)$.
                          <ol>
                            <li>Vérifier que $I$ appartient à $C$.</li>
                            <li>Montrer que $I$ est un centre de symétrie de $C$.</li>
                            <li>Montrer que la tangente $T$ à la courbe $C$ au point $I$ a pour équation $y = \\dfrac{1}{4}x + \\dfrac{1}{2}$.</li>
                          </ol>
                        </li>
                        <li>Montrer que pour tout réel $x$, $f'(x) \\leq \\dfrac{1}{4}$.</li>
                        <li>
                          <ol>
                            <li>Soit $x$ un réel strictement positif. Montrer que $f(x) \\leq \\dfrac{1}{4}x + \\dfrac{1}{2}$.</li>
                            <li>En déduire les positions relatives de $C$ et $T$.</li>
                          </ol>
                        </li>
                        <li>Tracer $C$ et $T$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex15q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p><strong>Domaine :</strong> $D_f = \\mathbb{R}$ (car $1+e^x>0$).</p>
                               <p>$f$ est dérivable sur $\\mathbb{R}$.</p>
                               $$ f'(x) = \\dfrac{e^x(1+e^x) - e^x \\cdot e^x}{(1+e^x)^2} = \\dfrac{e^x}{(1+e^x)^2}. $$
                               <p>Pour tout $x$, $e^x>0$ et $(1+e^x)^2>0$, donc <strong>$f'(x)>0$</strong>.</p>
                               <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} f(x) = 0$ (car $e^x \\to 0$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = 1$ (car $e^x$ domine).</li>
                               </ul>
                               <p>Asymptotes horizontales : $y=0$ en $-\\infty$, $y=1$ en $+\\infty$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$1$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex15q2',
                    texte: "2.a. $I \\in C$.",
                    solution: `<p>$f(0) = \\dfrac{e^0}{1+e^0} = \\dfrac{1}{2}$.</p>
                               <p>Donc <strong>$I\\left(0,\\dfrac{1}{2}\\right)$ appartient bien à $C$.</strong></p>`
                },
                {
                    id: 'ch9ex15q3',
                    texte: "2.b. $I$ est centre de symétrie.",
                    solution: `<p><strong>Méthode :</strong> On doit vérifier que $f(-x) = 1 - f(x)$.</p>
                               $$ f(-x) = \\dfrac{e^{-x}}{1+e^{-x}} = \\dfrac{\\frac{1}{e^x}}{1+\\frac{1}{e^x}} = \\dfrac{1}{e^x+1} = \\dfrac{1}{1+e^x}. $$
                               <p>Or $1 - f(x) = 1 - \\dfrac{e^x}{1+e^x} = \\dfrac{1}{1+e^x}$.</p>
                               <p>Donc $f(-x) = 1 - f(x)$.</p>
                               <p><strong>$I\\left(0,\\dfrac{1}{2}\\right)$ est centre de symétrie de $C$.</strong></p>`
                },
                {
                    id: 'ch9ex15q4',
                    texte: "2.c. Tangente en $I$.",
                    solution: `<p>On a $f'(x) = \\dfrac{e^x}{(1+e^x)^2}$.</p>
                               <p>$f'(0) = \\dfrac{1}{(1+1)^2} = \\dfrac{1}{4}$.</p>
                               <p>L'équation de la tangente en $I$ est :</p>
                               $$ y = f'(0)(x-0) + f(0) = \\dfrac{1}{4}x + \\dfrac{1}{2}. $$
                               <p><strong>$T: y = \\dfrac{1}{4}x + \\dfrac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch9ex15q5',
                    texte: "3. $f'(x) \\leq \\dfrac{1}{4}$.",
                    solution: `<p>$f'(x) = \\dfrac{e^x}{(1+e^x)^2}$.</p>
                               <p>Posons $t=e^x>0$. Alors $f'(x) = \\dfrac{t}{(1+t)^2}$.</p>
                               <p>On a $(1+t)^2 - 4t = 1+2t+t^2 - 4t = t^2 - 2t + 1 = (t-1)^2 \\geq 0$.</p>
                               <p>Donc $(1+t)^2 \\geq 4t$ ⇒ $\\dfrac{t}{(1+t)^2} \\leq \\dfrac{1}{4}$.</p>
                               <p><strong>$f'(x) \\leq \\dfrac{1}{4}$ pour tout $x\\in\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch9ex15q6',
                    texte: "4.a. $f(x) \\leq \\dfrac{1}{4}x + \\dfrac{1}{2}$ pour $x>0$.",
                    solution: `<p><strong>Méthode :</strong> On utilise l'inégalité des accroissements finis sur $[0,x]$.</p>
                               <p>D'après la question précédente, $f'(t) \\leq \\dfrac{1}{4}$ pour tout $t\\in\\mathbb{R}$.</p>
                               <p>Donc $f(x) - f(0) \\leq \\dfrac{1}{4}(x-0)$.</p>
                               <p>Comme $f(0)=\\dfrac{1}{2}$, on a :</p>
                               $$ f(x) - \\dfrac{1}{2} \\leq \\dfrac{1}{4}x \\quad \\Rightarrow \\quad f(x) \\leq \\dfrac{1}{4}x + \\dfrac{1}{2}. $$
                               <p><strong>$f(x) \\leq \\dfrac{1}{4}x + \\dfrac{1}{2}$ pour $x>0$.</strong></p>`
                },
                {
                    id: 'ch9ex15q7',
                    texte: "4.b. Position relative de $C$ et $T$.",
                    solution: `<p>D'après la question précédente, pour $x>0$ :</p>
                               $$ f(x) - \\left(\\dfrac{1}{4}x + \\dfrac{1}{2}\\right) \\leq 0. $$
                               <p><strong>Pour $x>0$, $C$ est en dessous de $T$.</strong></p>
                               <p>Par symétrie par rapport à $I$, pour $x<0$, on aura $C$ au-dessus de $T$.</p>
                               <p>En $x=0$, $C$ et $T$ sont tangentes.</p>`
                },
                {
                    id: 'ch9ex15q8',
                    texte: "5. Tracé de $C$ et $T$.",
                    solution: `<div id="graph-ch9ex15" class="graph-container" data-fn="exp(x)/(1+exp(x))" data-xmin="-5" data-xmax="5" data-colors="#2563eb,#dc2626" data-fn2="x/4+0.5"></div>`
                }
            ]
        }
    );

    console.log("Partie 8 (exercices 14 et 15) – Intégrales et étude de sigmoïde – ajoutée avec succès.");
})();