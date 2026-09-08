// data/problemes/part7.js – Problème 7
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 7,
        titre: "Problème 7 – Fonction exponentielle, bijection, aire",
        enonce: `
            <h4>I – Étude d'une fonction auxiliaire</h4>
            <p>Soit $h$ la fonction définie sur $\\mathbb{R}$ par : $h(x) = e^x + 2 - x$.</p>
            <ol>
                <li>Étudier les variations de la fonction $h$.</li>
                <li>En déduire que pour tout réel $x$, on a : $h(x) > 0$.</li>
            </ol>

            <h4>II – Étude de la fonction $f$</h4>
            <p>On considère la fonction $f$ définie sur $\\mathbb{R}$ par : $f(x) = x + (x-1)e^{-x}$.</p>
            <p>On désigne par $(\\mathcal{C})$ la représentation graphique de $f$ dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>
            <ol>
                <li>Montrer que pour tout réel $x$, on a : $f'(x) = e^{-x}h(x)$.</li>
                <li>Dresser le tableau de variation de $f$.</li>
                <li>
                    <strong>a</strong> – Montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$.<br>
                    <strong>b</strong> – En déduire que l’équation $f(x) = 0$ admet dans $\\mathbb{R}$ une solution unique $\\alpha$ et que $\\alpha$ vérifie : $0 < \\alpha < \\dfrac{1}{2}$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que la droite $(\\Delta)$ d’équation $y = x$ est une asymptote à la courbe $(\\mathcal{C})$ au voisinage de $+\\infty$.<br>
                    <strong>b</strong> – Étudier la position de $(\\mathcal{C})$ par rapport à $(\\Delta)$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que la courbe $(\\mathcal{C})$ admet un point d’inflexion $I$ dont on donnera les coordonnées.<br>
                    <strong>b</strong> – Vérifier qu’une équation cartésienne de la tangente $(T)$ à $(\\mathcal{C})$ au point $I$ est : $(e^3 - 1)x - e^3 y + 5 = 0$.
                </li>
                <li>Tracer $(\\Delta)$, $(T)$ et $(\\mathcal{C})$.</li>
                <li>
                    On désigne par $\\mathcal{M}$ l’aire du domaine limité par la courbe $(\\mathcal{C})$, l’asymptote $(\\Delta)$ et les droites d’équations $x = 0$ et $x = \\alpha$.
                    <strong>a</strong> – Vérifier que pour tout réel $x$ on a : $f(x) - x = 1 + e^{-x} - f'(x)$.<br>
                    <strong>b</strong> – Montrer que $\\mathcal{M} = \\dfrac{\\alpha^2}{1 - \\alpha}$.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme7" data-fn="x + (x-1)*exp(-x); x; ((exp(3)-1)*x + 5)/exp(3)" data-xmin="-1" data-xmax="4" data-colors="#2563eb,#dc2626,#16a34a" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu), asymptote $\\Delta:y=x$ (rouge) et tangente $(T)$ (vert).</em></p>
        `,
        questions: [
            {
                id: 'p7q1',
                texte: "I.1 – Variations de h.",
                solution: `
                    <p>$h(x) = e^x + 2 - x$.</p>
                    <p>$h'(x) = e^x - 1$.</p>
                    <p>Signe de $h'$ :</p>
                    <ul>
                        <li>$e^x - 1 > 0 \\iff x > 0$</li>
                        <li>$e^x - 1 < 0 \\iff x < 0$</li>
                        <li>$h'(0) = 0$</li>
                    </ul>
                    <p>Donc $h$ est <strong>décroissante</strong> sur $]-\\infty, 0]$ et <strong>croissante</strong> sur $[0, +\\infty[$.</p>
                    <p>Minimum en $x=0$ : $h(0) = e^0 + 2 - 0 = 1 + 2 = 3$.</p>
                `
            },
            {
                id: 'p7q2',
                texte: "I.2 – h(x) > 0.",
                solution: `
                    <p>Le minimum de $h$ sur $\\mathbb{R}$ est $h(0)=3 > 0$.</p>
                    <p>Donc <strong>$h(x) > 0$ pour tout $x \\in \\mathbb{R}$</strong>.</p>
                `
            },
            {
                id: 'p7q3',
                texte: "II.1 – Dérivée de f.",
                solution: `
                    <p>$f(x) = x + (x-1)e^{-x}$.</p>
                    <p>$f'(x) = 1 + e^{-x} - (x-1)e^{-x} = 1 + (1 - x + 1)e^{-x} = 1 + (2 - x)e^{-x}$.</p>
                    <p>Or $e^{-x}h(x) = e^{-x}(e^x + 2 - x) = 1 + (2 - x)e^{-x}$.</p>
                    <p>Donc <strong>$f'(x) = e^{-x}h(x)$</strong>.</p>
                `
            },
            {
                id: 'p7q4',
                texte: "II.2 – Tableau de variation de f.",
                solution: `
                    <p>Comme $e^{-x} > 0$ et $h(x) > 0$ pour tout $x$, on a $f'(x) > 0$ pour tout $x$.</p>
                    <p>Donc $f$ est <strong>strictement croissante</strong> sur $\\mathbb{R}$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to-\\infty} f(x) = -\\infty$ (car $(x-1)e^{-x} \\sim x e^{-x} \\to -\\infty$).</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $x$ domine).</li>
                    </ul>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:80%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden; margin:0 auto;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-\\infty$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$+\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p7q5a',
                texte: "II.3.a – Bijection de f.",
                solution: `
                    <p>$f$ est continue et strictement croissante sur $\\mathbb{R}$, avec $\\lim_{x\\to-\\infty} f(x) = -\\infty$ et $\\lim_{x\\to+\\infty} f(x) = +\\infty$.</p>
                    <p>Donc $f$ réalise une <strong>bijection</strong> de $\\mathbb{R}$ sur $\\mathbb{R}$.</p>
                `
            },
            {
                id: 'p7q5b',
                texte: "II.3.b – Existence et unicité de α.",
                solution: `
                    <p>L'équation $f(x)=0$ admet une unique solution $\\alpha \\in \\mathbb{R}$ car $0 \\in f(\\mathbb{R})$.</p>
                    <p>Encadrement :</p>
                    <ul>
                        <li>$f(0) = 0 + (0-1)e^0 = -1 < 0$.</li>
                        <li>$f(1/2) = \\frac{1}{2} + \\left(\\frac{1}{2}-1\\right)e^{-1/2} = \\frac{1}{2} - \\frac{1}{2}e^{-1/2} \\approx 0.5 - 0.303 = 0.197 > 0$.</li>
                    </ul>
                    <p>Par continuité, $\\alpha \\in ]0, \\frac{1}{2}[$.</p>
                `
            },
            {
                id: 'p7q6a',
                texte: "II.4.a – Asymptote en +∞.",
                solution: `
                    <p>$f(x) - x = (x-1)e^{-x}$.</p>
                    <p>$\\lim_{x\\to+\\infty} (f(x)-x) = \\lim_{x\\to+\\infty} (x-1)e^{-x} = 0$ (car $e^x$ domine).</p>
                    <p>Donc la droite $\\Delta : y = x$ est une <strong>asymptote oblique</strong> à $(\\mathcal{C})$ au voisinage de $+\\infty$.</p>
                `
            },
            {
                id: 'p7q6b',
                texte: "II.4.b – Position relative de C et Δ.",
                solution: `
                    <p>Étudions le signe de $f(x)-x = (x-1)e^{-x}$.</p>
                    <ul>
                        <li>Si $x > 1$ : $x-1 > 0$, $e^{-x} > 0$ ⇒ $f(x)-x > 0$ : $(\\mathcal{C})$ est <strong>au-dessus</strong> de $\\Delta$.</li>
                        <li>Si $x < 1$ : $x-1 < 0$ ⇒ $f(x)-x < 0$ : $(\\mathcal{C})$ est <strong>en dessous</strong> de $\\Delta$.</li>
                        <li>Si $x=1$ : $f(1)=1$ (point d'intersection).</li>
                    </ul>
                `
            },
            {
                id: 'p7q7a',
                texte: "II.5.a – Point d'inflexion.",
                solution: `
                    <p>$f'(x) = 1 + (2-x)e^{-x}$.</p>
                    <p>$f''(x) = -e^{-x} - (2-x)e^{-x} = (x-3)e^{-x}$.</p>
                    <p>Signe de $f''$ :</p>
                    <ul>
                        <li>$x < 3$ : $x-3 < 0$ ⇒ $f''(x) < 0$ (concave).</li>
                        <li>$x = 3$ : $f''(3)=0$.</li>
                        <li>$x > 3$ : $x-3 > 0$ ⇒ $f''(x) > 0$ (convexe).</li>
                    </ul>
                    <p>Donc $f''$ s'annule en changeant de signe en $x=3$ : c'est un <strong>point d'inflexion</strong>.</p>
                    <p>Coordonnées : $I(3, f(3))$ avec $f(3) = 3 + (3-1)e^{-3} = 3 + 2e^{-3}$.</p>
                    <p>Donc $I\\left(3, 3 + \\dfrac{2}{e^3}\\right)$.</p>
                `
            },
            {
                id: 'p7q7b',
                texte: "II.5.b – Tangente au point d'inflexion.",
                solution: `
                    <p>La tangente en $x=3$ a pour pente $f'(3) = 1 + (2-3)e^{-3} = 1 - e^{-3}$.</p>
                    <p>Équation : $y - f(3) = f'(3)(x-3)$.</p>
                    <p>Soit : $y - (3+2e^{-3}) = (1-e^{-3})(x-3)$.</p>
                    <p>Développons : $y = (1-e^{-3})x - 3(1-e^{-3}) + 3 + 2e^{-3}$.</p>
                    <p>$y = (1-e^{-3})x - 3 + 3e^{-3} + 3 + 2e^{-3} = (1-e^{-3})x + 5e^{-3}$.</p>
                    <p>Multiplions par $e^3$ : $e^3 y = (e^3 - 1)x + 5$.</p>
                    <p>Donc $(e^3 - 1)x - e^3 y + 5 = 0$.</p>
                    <p>C'est bien l'équation donnée.</p>
                `
            },
            {
                id: 'p7q8',
                texte: "II.6 – Tracer les courbes.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>$(\\mathcal{C})$ : croissante de $-\\infty$ à $+\\infty$, avec une asymptote $y=x$ en $+\\infty$.</li>
                        <li>$\\Delta : y=x$.</li>
                        <li>La tangente $(T)$ au point d'inflexion $I$ d'équation $(e^3-1)x - e^3 y + 5=0$.</li>
                    </ul>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p7q9a',
                texte: "II.7.a – Vérification de l'identité.",
                solution: `
                    <p>On a $f'(x) = 1 + (2-x)e^{-x}$.</p>
                    <p>Calculons $1 + e^{-x} - f'(x) = 1 + e^{-x} - [1 + (2-x)e^{-x}] = e^{-x} - (2-x)e^{-x} = (x-1)e^{-x}$.</p>
                    <p>Or $f(x)-x = (x-1)e^{-x}$.</p>
                    <p>Donc <strong>$f(x)-x = 1 + e^{-x} - f'(x)$</strong>.</p>
                `
            },
            {
                id: 'p7q9b',
                texte: "II.7.b – Aire M.",
                solution: `
                    <p>L'aire $\\mathcal{M}$ est l'intégrale de la différence $f(x)-x$ entre $0$ et $\\alpha$ (car sur $[0,\\alpha]$, $f(x) \\le x$ d'après la position relative, donc $x-f(x)$).</p>
                    <p>On a $f(x)-x = (x-1)e^{-x}$, et sur $[0,\\alpha]$ avec $\\alpha < 1/2$, $x-1 < 0$, donc $f(x)-x < 0$.</p>
                    <p>L'aire est $\\mathcal{M} = \\int_0^\\alpha (x - f(x))\\, dx = -\\int_0^\\alpha (f(x)-x)\\, dx$.</p>
                    <p>D'après l'identité précédente, $f(x)-x = 1 + e^{-x} - f'(x)$.</p>
                    <p>Donc $x - f(x) = f'(x) - 1 - e^{-x}$.</p>
                    <p>Intégrons :</p>
                    $$ \\mathcal{M} = \\int_0^\\alpha f'(x)\\, dx - \\int_0^\\alpha 1\\, dx - \\int_0^\\alpha e^{-x}\\, dx $$
                    $$ = [f(x)]_0^\\alpha - [x]_0^\\alpha + [e^{-x}]_0^\\alpha = (f(\\alpha)-f(0)) - \\alpha + (e^{-\\alpha} - 1) $$
                    <p>Comme $f(\\alpha)=0$ et $f(0)=-1$, on a :</p>
                    $$ \\mathcal{M} = (0 - (-1)) - \\alpha + e^{-\\alpha} - 1 = 1 - \\alpha + e^{-\\alpha} - 1 = e^{-\\alpha} - \\alpha. $$
                    <p>Or on a $f(\\alpha)=0$ ⇒ $\\alpha + (\\alpha-1)e^{-\\alpha} = 0$ ⇒ $(\\alpha-1)e^{-\\alpha} = -\\alpha$ ⇒ $e^{-\\alpha} = \\dfrac{\\alpha}{1-\\alpha}$.</p>
                    <p>Donc $\\mathcal{M} = \\dfrac{\\alpha}{1-\\alpha} - \\alpha = \\dfrac{\\alpha - \\alpha(1-\\alpha)}{1-\\alpha} = \\dfrac{\\alpha - \\alpha + \\alpha^2}{1-\\alpha} = \\dfrac{\\alpha^2}{1-\\alpha}$.</p>
                    <p>Donc <strong>$\\mathcal{M} = \\dfrac{\\alpha^2}{1-\\alpha}$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour l'étude de h, penser à la dérivée et au minimum.</li>
                <li>Le point d'inflexion s'obtient en annulant la dérivée seconde.</li>
                <li>Pour l'aire, utiliser la relation entre f et f' pour simplifier l'intégrale.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas confondre le signe de f(x)-x : sur [0,α] c'est négatif.</li>
                <li>Oublier que f(0)=-1 dans le calcul de l'aire.</li>
                <li>Se tromper dans la simplification de e^{-α} = α/(1-α).</li>
            </ul>
        `
    });

    console.log("✅ Problème 7 chargé.");
})();