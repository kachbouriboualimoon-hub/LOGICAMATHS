// data/problemes/part11.js – Problème 11
// ======================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 11,
        titre: "Problème 11 – Fonction exponentielle sur ]-2, +∞[",
        enonce: `
            <p>On considère la fonction $f$ définie sur $]-2, +\\infty[$ par : $f(x) = \\dfrac{e^{-x}}{x+2}$.</p>
            <p>On désigne par $(\\mathcal{C})$ la courbe représentative de $f$ dans le plan rapporté à un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>

            <h4>A – Étude de la fonction $f$ et calcul intégral</h4>
            <ol>
                <li>
                    <strong>a</strong> – Étudier les variations de la fonction $f$.<br>
                    <strong>b</strong> – Écrire une équation cartésienne de la tangente $D$ à la courbe $(\\mathcal{C})$ au point d'abscisse $0$.<br>
                    <strong>c</strong> – Tracer $D$ et $(\\mathcal{C})$.
                </li>
                <li>
                    <strong>a</strong> – Vérifier que pour tout réel $x > -2$, on a :
                    $$ \\frac{1}{x+2} = \\frac{1}{4}\\left(2 - x + \\frac{x^2}{x+2}\\right) $$<br>
                    <strong>b</strong> – En déduire que :
                    $$ \\int_0^1 f(x)\\,dx = \\frac{1}{4}\\int_0^1 (2-x)e^{-x}\\,dx + \\frac{1}{4}\\int_0^1 x^2 f(x)\\,dx $$<br>
                    <strong>c</strong> – Calculer l'intégrale $I = \\displaystyle\\int_0^1 (2-x)e^{-x}\\,dx$.<br>
                    <strong>d</strong> – Montrer que pour tout $x\\in[0,1]$, on a :
                    $$ \\frac{x^2}{3e} \\le x^2 f(x) \\le \\frac{x^2}{2} $$
                    et en déduire que :
                    $$ \\frac{1}{9e} \\le \\int_0^1 x^2 f(x)\\,dx \\le \\frac{1}{6} $$<br>
                    <strong>e</strong> – Soit $A$ la mesure de l'aire de la partie du plan limitée par la courbe $(\\mathcal{C})$, l'axe des abscisses et les droites d'équations $x=0$ et $x=1$. Montrer que : $0,26 < A < 0,30$.
                </li>
            </ol>

            <h4>B – Étude d'une suite récurrente</h4>
            <ol>
                <li>Montrer que l'équation $f(x)=x$ admet une solution unique $\\alpha$ et que $0 < \\alpha < 1$.</li>
                <li>Montrer que, pour tout réel $x\\in[0,1]$, le réel $f(x)$ appartient à $[0,1]$.</li>
                <li>
                    <strong>a</strong> – Montrer que la fonction $f'$, dérivée de $f$, est strictement croissante sur $[0,1]$.<br>
                    <strong>b</strong> – En déduire que pour tout $x\\in[0,1]$, on a : $|f'(x)| \\le \\dfrac{3}{4}$.
                </li>
                <li>
                    Soit la suite $(u_n)$ définie par $u_0=0$ et $u_{n+1}=f(u_n)$.<br>
                    <strong>a</strong> – Montrer que pour tout entier naturel $n$, on a :
                    $$ 0 \\le u_n \\le 1 \\quad \\text{et} \\quad |u_{n+1} - \\alpha| \\le \\frac{3}{4}|u_n - \\alpha| $$<br>
                    <strong>b</strong> – En déduire que la suite $(u_n)$ converge vers $\\alpha$.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme11" data-fn="exp(-x)/(x+2)" data-xmin="-1.9" data-xmax="3" data-colors="#2563eb" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) pour $x>-2$.</em></p>
        `,
        questions: [
            {
                id: 'p11q1a',
                texte: "A.1.a – Variations de f.",
                solution: `
                    <p>$f(x) = \\dfrac{e^{-x}}{x+2}$ définie sur $]-2, +\\infty[$.</p>
                    <p>$f'(x) = \\dfrac{-e^{-x}(x+2) - e^{-x}(1)}{(x+2)^2} = \\dfrac{-e^{-x}(x+2+1)}{(x+2)^2} = -\\dfrac{(x+3)e^{-x}}{(x+2)^2}$.</p>
                    <p>Pour $x>-2$, $x+3>1>0$, $e^{-x}>0$, $(x+2)^2>0$, donc $f'(x)<0$.</p>
                    <p>Donc $f$ est <strong>strictement décroissante</strong> sur $]-2, +\\infty[$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to-2^+} f(x) = +\\infty$ (car $e^{-x}\\to e^2$ et $x+2\\to 0^+$).</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = 0$ (car $e^{-x}$ domine).</li>
                    </ul>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:80%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden; margin:0 auto;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-2$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600;">$0$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$0$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><em>La barre verticale en $-2$ indique l'asymptote verticale.</em></p>
                `
            },
            {
                id: 'p11q1b',
                texte: "A.1.b – Tangente en 0.",
                solution: `
                    <p>$f(0) = \\dfrac{e^0}{0+2} = \\dfrac{1}{2}$.</p>
                    <p>$f'(0) = -\\dfrac{(0+3)e^0}{(0+2)^2} = -\\dfrac{3}{4}$.</p>
                    <p>Équation de la tangente $D$ : $y = f(0) + f'(0)(x-0) = \\dfrac{1}{2} - \\dfrac{3}{4}x$.</p>
                    <p>Donc <strong>$D : y = -\\dfrac{3}{4}x + \\dfrac{1}{2}$</strong>.</p>
                `
            },
            {
                id: 'p11q1c',
                texte: "A.1.c – Tracer D et C.",
                solution: `
                    <p>La courbe $(\\mathcal{C})$ est décroissante, avec une asymptote verticale $x=-2$ et une asymptote horizontale $y=0$.</p>
                    <p>La tangente $D$ coupe l'axe des ordonnées en $y=1/2$ et a pour pente $-3/4$.</p>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p11q2a',
                texte: "A.2.a – Vérification de l'identité.",
                solution: `
                    <p>On vérifie : $\\dfrac{1}{4}\\left(2 - x + \\dfrac{x^2}{x+2}\\right) = \\dfrac{1}{4}\\left(\\dfrac{(2-x)(x+2) + x^2}{x+2}\\right)$.</p>
                    <p>$(2-x)(x+2) = 2x+4 - x^2 - 2x = 4 - x^2$.</p>
                    <p>Donc $4 - x^2 + x^2 = 4$.</p>
                    <p>Ainsi $\\dfrac{1}{4} \\cdot \\dfrac{4}{x+2} = \\dfrac{1}{x+2}$.</p>
                    <p>L'identité est vérifiée.</p>
                `
            },
            {
                id: 'p11q2b',
                texte: "A.2.b – Relation intégrale.",
                solution: `
                    <p>On multiplie l'identité par $e^{-x}$ :</p>
                    $$ f(x) = \\dfrac{e^{-x}}{x+2} = \\dfrac{1}{4}(2-x)e^{-x} + \\dfrac{1}{4}x^2 \\dfrac{e^{-x}}{x+2} = \\dfrac{1}{4}(2-x)e^{-x} + \\dfrac{1}{4}x^2 f(x). $$
                    <p>En intégrant de 0 à 1 :</p>
                    $$ \\int_0^1 f(x)\\,dx = \\frac{1}{4}\\int_0^1 (2-x)e^{-x}\\,dx + \\frac{1}{4}\\int_0^1 x^2 f(x)\\,dx. $$
                `
            },
            {
                id: 'p11q2c',
                texte: "A.2.c – Calcul de I.",
                solution: `
                    <p>$I = \\displaystyle\\int_0^1 (2-x)e^{-x}\\,dx$.</p>
                    <p>Calculons la primitive de $(2-x)e^{-x}$ :</p>
                    <p>On intègre par parties : $u=2-x$, $dv=e^{-x}dx$ ⇒ $du=-dx$, $v=-e^{-x}$.</p>
                    $$ \\int (2-x)e^{-x}\\,dx = -(2-x)e^{-x} - \\int -e^{-x} \\cdot (-1)\\,dx = -(2-x)e^{-x} - \\int e^{-x}\\,dx $$
                    $$ = -(2-x)e^{-x} + e^{-x} + C = e^{-x}(-2 + x + 1) + C = (x-1)e^{-x} + C. $$
                    <p>Donc $I = \\left[(x-1)e^{-x}\\right]_0^1 = (0) - (-1)\\cdot 1 = 1$.</p>
                    <p>Donc <strong>$I = 1$</strong>.</p>
                `
            },
            {
                id: 'p11q2d',
                texte: "A.2.d – Encadrement de l'intégrale de x²f(x).",
                solution: `
                    <p>Pour $x\\in[0,1]$, on a $x^2 \\ge 0$ et $f(x) = \\dfrac{e^{-x}}{x+2}$.</p>
                    <p>Comme $f$ est décroissante, $f(1) \\le f(x) \\le f(0)$ ⇒ $\\dfrac{1}{3e} \\le f(x) \\le \\dfrac{1}{2}$.</p>
                    <p>Multiplions par $x^2$ : $\\dfrac{x^2}{3e} \\le x^2 f(x) \\le \\dfrac{x^2}{2}$.</p>
                    <p>Intégrons de 0 à 1 :</p>
                    $$ \\int_0^1 \\dfrac{x^2}{3e}\\,dx \\le \\int_0^1 x^2 f(x)\\,dx \\le \\int_0^1 \\dfrac{x^2}{2}\\,dx $$
                    $$ \\dfrac{1}{3e} \\cdot \\dfrac{1}{3} \\le J \\le \\dfrac{1}{2} \\cdot \\dfrac{1}{3} $$
                    $$ \\dfrac{1}{9e} \\le J \\le \\dfrac{1}{6}. $$
                `
            },
            {
                id: 'p11q2e',
                texte: "A.2.e – Encadrement de A.",
                solution: `
                    <p>L'aire $A = \\displaystyle\\int_0^1 f(x)\\,dx$.</p>
                    <p>D'après B.2.b, $A = \\dfrac{1}{4}I + \\dfrac{1}{4}J = \\dfrac{1}{4} + \\dfrac{1}{4}J$.</p>
                    <p>Encadrement de $J$ : $\\dfrac{1}{9e} \\le J \\le \\dfrac{1}{6}$.</p>
                    <p>Donc $\\dfrac{1}{4} + \\dfrac{1}{4}\\cdot\\dfrac{1}{9e} \\le A \\le \\dfrac{1}{4} + \\dfrac{1}{4}\\cdot\\dfrac{1}{6}$.</p>
                    <p>$\\dfrac{1}{4} + \\dfrac{1}{36e} \\approx 0.25 + 0.0102 = 0.2602$.</p>
                    <p>$\\dfrac{1}{4} + \\dfrac{1}{24} = \\dfrac{6}{24} + \\dfrac{1}{24} = \\dfrac{7}{24} \\approx 0.2917$.</p>
                    <p>Donc <strong>$0.26 < A < 0.30$</strong>.</p>
                `
            },
            {
                id: 'p11q3',
                texte: "B.1 – Existence et unicité de α.",
                solution: `
                    <p>On étudie $\\phi(x) = f(x) - x$ sur $]-2, +\\infty[$.</p>
                    <p>$\\phi'(x) = f'(x) - 1 = -\\dfrac{(x+3)e^{-x}}{(x+2)^2} - 1 < 0$ (car $f'(x)<0$ et $-1<0$).</p>
                    <p>Donc $\\phi$ est strictement décroissante sur $]-2, +\\infty[$.</p>
                    <p>$\\lim_{x\\to-2^+} \\phi(x) = +\\infty$ et $\\lim_{x\\to+\\infty} \\phi(x) = -\\infty$.</p>
                    <p>Donc $\\phi$ s'annule une seule fois en $\\alpha \\in ]-2, +\\infty[$.</p>
                    <p>De plus $\\phi(0) = f(0)-0 = 1/2 > 0$ et $\\phi(1) = f(1)-1 = \\dfrac{1}{3e} - 1 < 0$.</p>
                    <p>Donc <strong>$\\alpha \\in ]0,1[$</strong>.</p>
                `
            },
            {
                id: 'p11q4',
                texte: "B.2 – f([0,1]) ⊂ [0,1].",
                solution: `
                    <p>Pour $x\\in[0,1]$, $f$ est décroissante, donc $f(1) \\le f(x) \\le f(0)$.</p>
                    <p>$f(0) = 1/2$ et $f(1) = \\dfrac{1}{3e} \\approx 0.1226$.</p>
                    <p>Donc $0 \\le f(x) \\le 1$. Donc $f([0,1]) \\subset [0,1]$.</p>
                `
            },
            {
                id: 'p11q5a',
                texte: "B.3.a – f' strictement croissante sur [0,1].",
                solution: `
                    <p>$f'(x) = -\\dfrac{(x+3)e^{-x}}{(x+2)^2}$.</p>
                    <p>Calculons $f''(x)$ (dérivée seconde) pour montrer que $f'$ est croissante.</p>
                    <p>On peut dériver ou utiliser une méthode plus simple. On a $f'(x) = -\\dfrac{(x+3)e^{-x}}{(x+2)^2}$.</p>
                    <p>Soit $f''(x) = \\dfrac{e^{-x}(x^2+6x+8)}{(x+2)^3}$ (calculé).</p>
                    <p>Pour $x\\in[0,1]$, $x^2+6x+8 > 0$ et $(x+2)^3 > 0$, donc $f''(x) > 0$.</p>
                    <p>Donc $f'$ est <strong>strictement croissante</strong> sur $[0,1]$.</p>
                `
            },
            {
                id: 'p11q5b',
                texte: "B.3.b – Majoration de |f'|.",
                solution: `
                    <p>$f'$ est croissante sur $[0,1]$, donc son maximum est atteint en $x=1$.</p>
                    <p>$f'(0) = -\\dfrac{3}{4}$, $f'(1) = -\\dfrac{4e^{-1}}{9} = -\\dfrac{4}{9e} \\approx -0.1635$.</p>
                    <p>Comme $f'$ est négative, $|f'(x)| = -f'(x)$ est décroissante, donc son maximum est en $x=0$.</p>
                    <p>$|f'(0)| = \\dfrac{3}{4}$.</p>
                    <p>Donc <strong>$|f'(x)| \\le \\dfrac{3}{4}$</strong> pour tout $x\\in[0,1]$.</p>
                `
            },
            {
                id: 'p11q6a',
                texte: "B.4.a – Suites récurrentes.",
                solution: `
                    <p>On a $u_0=0$ et $u_{n+1}=f(u_n)$.</p>
                    <p><strong>0 ≤ u_n ≤ 1</strong> par récurrence :</p>
                    <ul>
                        <li>$u_0=0$.</li>
                        <li>Si $0 \\le u_n \\le 1$, alors $f(0) \\le f(u_n) \\le f(1)$ (car $f$ décroissante). Donc $1/2 \\le u_{n+1} \\le 1/(3e)$, donc $0 \\le u_{n+1} \\le 1$.</li>
                    </ul>
                    <p><strong>Inégalité de contraction :</strong></p>
                    <p>Par le théorème des accroissements finis sur $[0,1]$, il existe $c$ entre $u_n$ et $\\alpha$ tel que :</p>
                    $$ |u_{n+1} - \\alpha| = |f(u_n) - f(\\alpha)| = |f'(c)| |u_n - \\alpha| \\le \\frac{3}{4}|u_n - \\alpha|. $$
                `
            },
            {
                id: 'p11q6b',
                texte: "B.4.b – Convergence vers α.",
                solution: `
                    <p>De $|u_{n+1} - \\alpha| \\le \\dfrac{3}{4}|u_n - \\alpha|$, on déduit par récurrence :</p>
                    $$ |u_n - \\alpha| \\le \\left(\\dfrac{3}{4}\\right)^n |u_0 - \\alpha| = \\left(\\dfrac{3}{4}\\right)^n \\alpha. $$
                    <p>Comme $\\dfrac{3}{4} \\in ]0,1[$, $\\lim_{n\\to+\\infty} \\left(\\dfrac{3}{4}\\right)^n = 0$.</p>
                    <p>Donc $\\lim_{n\\to+\\infty} u_n = \\alpha$.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour l'étude de variations, la dérivée est simple à calculer.</li>
                <li>L'identité polynomiale permet de décomposer l'intégrale.</li>
                <li>Pour l'encadrement de l'aire, utiliser les bornes de f sur [0,1].</li>
                <li>La suite convergente utilise le théorème du point fixe contractant.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas oublier le domaine de définition : ]-2, +∞[.</li>
                <li>Confondre les inégalités pour l'encadrement de l'intégrale.</li>
                <li>Oublier que f est décroissante pour l'étude de la suite.</li>
            </ul>
        `
    });

    console.log("✅ Problème 11 chargé.");
})();