// data/problemes/part3.js – Problème 3
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 3,
        titre: "Problème 3 – Fonction avec logarithme et suite",
        enonce: `
            <p>Soit $g$ la fonction définie sur $]0, +\\infty[$ par : $g(x) = -1 + x + 2\\ln x$.</p>
            <ol>
                <li><strong>a</strong> – Étudier le sens de variation de $g$.</li>
                <li><strong>b</strong> – Calculer $g(1)$ puis déterminer le signe de $g(x)$ sur $]0, +\\infty[$.</li>
                <li><strong>c</strong> – En déduire que :
                    <ul>
                        <li>si $0 < x < 1$ alors $g\\left(\\frac{1}{x}\\right) > 0$</li>
                        <li>si $x > 1$ alors $g\\left(\\frac{1}{x}\\right) < 0$</li>
                    </ul>
                </li>
            </ol>

            <p>On considère la fonction $f$ définie sur $[0, +\\infty[$ par :</p>
            $$ \\begin{cases} f(x) = x - x^2\\ln x & \\text{si } x > 0 \\\\ f(0) = 0 \\end{cases} $$
            <p>et on désigne par $\\mathcal{C}$ sa courbe représentative (unité graphique : 2 cm).</p>

            <ol>
                <li><strong>a</strong> – Montrer que $f$ est dérivable à droite en zéro.</li>
                <li><strong>b</strong> – Calculer $f'(x)$ et vérifier que pour tout $x>0$ : $f'(x) = x \\cdot g\\left(\\frac{1}{x}\\right)$.</li>
                <li><strong>c</strong> – Dresser le tableau de variation de $f$.</li>
                <li><strong>d</strong> – Montrer que l'équation $f(x)=0$ admet dans $]0, +\\infty[$ exactement une solution $\\alpha$ telle que $\\frac{7}{4} < \\alpha < 2$.</li>
            </ol>

            <ol start="3">
                <li><strong>a</strong> – Vérifier que la tangente $\\Delta$ à $\\mathcal{C}$ au point $O$ a pour équation $y=x$.</li>
                <li><strong>b</strong> – Étudier la position de $\\mathcal{C}$ par rapport à $\\Delta$.</li>
                <li><strong>c</strong> – Tracer $\\Delta$ et $\\mathcal{C}$.</li>
            </ol>

            <ol start="4">
                <li>Soit $\\lambda$ un réel de l'intervalle $]0,1[$.</li>
                <li><strong>a</strong> – Calculer en cm$^2$, l'aire $A(\\lambda)$ du domaine limité par $\\mathcal{C}$, $\\Delta$ et les droites $x=\\lambda$ et $x=1$.</li>
                <li><strong>b</strong> – Calculer $\\lim_{\\lambda \\to 0^+} A(\\lambda)$.</li>
            </ol>

            <ol start="5">
                <li>On considère la suite $(U_n)$ définie par :</li>
                $$ U_0 \\in ]0,1[ \\quad \\text{et} \\quad U_{n+1} = f(U_n) $$
                <li><strong>a</strong> – Montrer que pour tout $n \\in \\mathbb{N}$, $0 < U_n < 1$.</li>
                <li><strong>b</strong> – Montrer que $(U_n)$ est croissante.</li>
                <li><strong>c</strong> – En déduire que $(U_n)$ est convergente et trouver sa limite.</li>
            </ol>

            <div class="graph-container" id="graph-probleme3" data-fn="x - x*x*log(x); x" data-xmin="0" data-xmax="2.5" data-colors="#2563eb,#dc2626" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) et tangente $\\Delta:y=x$ (rouge).</em></p>
        `,
        questions: [
            {
                id: 'p3q1a',
                texte: "I.1.a – Sens de variation de g.",
                solution: `
                    <p>$g'(x) = 1 + \\frac{2}{x} = \\frac{x+2}{x}$.</p>
                    <p>Pour $x>0$, $x+2>0$ et $x>0$, donc $g'(x)>0$.</p>
                    <p>Donc $g$ est <strong>strictement croissante</strong> sur $]0, +\\infty[$.</p>
                `
            },
            {
                id: 'p3q1b',
                texte: "I.1.b – Calcul de g(1) et signe de g.",
                solution: `
                    <p>$g(1) = -1 + 1 + 2\\ln 1 = 0$.</p>
                    <p>$g$ est strictement croissante et $g(1)=0$.</p>
                    <ul>
                        <li>Si $0 < x < 1$, $g(x) < g(1) = 0$ donc $g(x) < 0$.</li>
                        <li>Si $x > 1$, $g(x) > g(1) = 0$ donc $g(x) > 0$.</li>
                    </ul>
                `
            },
            {
                id: 'p3q1c',
                texte: "I.1.c – Signe de g(1/x).",
                solution: `
                    <ul>
                        <li>Si $0 < x < 1$, alors $\\frac{1}{x} > 1$, donc $g\\left(\\frac{1}{x}\\right) > 0$.</li>
                        <li>Si $x > 1$, alors $0 < \\frac{1}{x} < 1$, donc $g\\left(\\frac{1}{x}\\right) < 0$.</li>
                    </ul>
                    <p>En $x=1$, $g(1)=0$.</p>
                `
            },
            {
                id: 'p3q2a',
                texte: "II.1.a – Dérivabilité à droite en 0.",
                solution: `
                    <p>$f(0)=0$.</p>
                    <p>Calculons le taux d'accroissement :</p>
                    $$ \\lim_{x\\to0^+} \\frac{f(x)-f(0)}{x} = \\lim_{x\\to0^+} \\frac{x - x^2\\ln x}{x} = \\lim_{x\\to0^+} (1 - x\\ln x) = 1 - 0 = 1 $$
                    <p>Donc $f$ est <strong>dérivable à droite en 0</strong> et $f'_d(0)=1$.</p>
                `
            },
            {
                id: 'p3q2b',
                texte: "II.1.b – Dérivée de f.",
                solution: `
                    <p>Pour $x>0$, $f(x) = x - x^2\\ln x$.</p>
                    <p>$f'(x) = 1 - (2x\\ln x + x^2\\cdot\\frac{1}{x}) = 1 - 2x\\ln x - x$.</p>
                    <p>On vérifie que $x\\cdot g\\left(\\frac{1}{x}\\right) = x\\left(-1 + \\frac{1}{x} + 2\\ln\\frac{1}{x}\\right) = x\\left(-1 + \\frac{1}{x} - 2\\ln x\\right) = -x + 1 - 2x\\ln x$.</p>
                    <p>Donc $f'(x) = 1 - x - 2x\\ln x = x\\cdot g\\left(\\frac{1}{x}\\right)$.</p>
                `
            },
            {
                id: 'p3q2c',
                texte: "II.1.c – Tableau de variation de f.",
                solution: `
                    <p>D'après I.1.c :</p>
                    <ul>
                        <li>Si $0 < x < 1$, $g(1/x) > 0$ ⇒ $f'(x) > 0$.</li>
                        <li>Si $x = 1$, $g(1) = 0$ ⇒ $f'(1) = 0$.</li>
                        <li>Si $x > 1$, $g(1/x) < 0$ ⇒ $f'(x) < 0$.</li>
                    </ul>
                    <p>Donc $f$ est strictement croissante sur $]0,1]$ et strictement décroissante sur $[1,+\\infty[$.</p>
                    <p>Maximum en $x=1$ : $f(1)=1$.</p>
                    <p>Limites : $\\lim_{x\\to0^+} f(x) = 0$ (car $x^2\\ln x \\to 0$), $\\lim_{x\\to+\\infty} f(x) = -\\infty$.</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:600;">$0$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$0$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$1$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$1$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p3q2d',
                texte: "II.1.d – Existence et unicité de α.",
                solution: `
                    <p>$f$ est continue, strictement croissante sur $]0,1]$, $f(0)=0$, $f(1)=1$.</p>
                    <p>Sur $[1,+\\infty[$, $f$ est continue, strictement décroissante, $f(1)=1$ et $\\lim_{x\\to+\\infty} f(x) = -\\infty$.</p>
                    <p>Donc il existe un unique $\\alpha > 1$ tel que $f(\\alpha)=0$.</p>
                    <p>Encadrement : $f(7/4) = \\frac{7}{4} - \\frac{49}{16}\\ln\\frac{7}{4} > 0$ (car $\\ln(7/4) \\approx 0.56$ et $\\frac{49}{16}\\times0.56 \\approx 1.715 < 1.75$).</p>
                    <p>$f(2) = 2 - 4\\ln 2 \\approx 2 - 2.77 = -0.77 < 0$.</p>
                    <p>Par continuité, $\\alpha \\in ]7/4, 2[$.</p>
                `
            },
            {
                id: 'p3q3a',
                texte: "III.3.a – Tangente en O.",
                solution: `
                    <p>$f(0)=0$ et $f'_d(0)=1$.</p>
                    <p>Donc la tangente à $\\mathcal{C}$ au point $O$ est : $y = f(0) + f'_d(0)(x-0) = x$.</p>
                    <p>Soit $\\Delta : y = x$.</p>
                `
            },
            {
                id: 'p3q3b',
                texte: "III.3.b – Position de C par rapport à Δ.",
                solution: `
                    <p>Étudions le signe de $f(x) - x = -x^2\\ln x$.</p>
                    <ul>
                        <li>Si $0 < x < 1$ : $\\ln x < 0$ ⇒ $-x^2\\ln x > 0$ ⇒ $f(x) > x$ (courbe au‑dessus de $\\Delta$).</li>
                        <li>Si $x = 1$ : $f(1)=1$ (point d'intersection).</li>
                        <li>Si $x > 1$ : $\\ln x > 0$ ⇒ $-x^2\\ln x < 0$ ⇒ $f(x) < x$ (courbe en‑dessous de $\\Delta$).</li>
                    </ul>
                `
            },
            {
                id: 'p3q4a',
                texte: "IV.4.a – Aire A(λ) (en cm²).",
                solution: `
                    <p>L'aire est l'intégrale de la différence $f(x)-x$ entre $\\lambda$ et $1$ (car sur $]0,1[$, $f(x)>x$).</p>
                    <p>En unités d'aire :</p>
                    $$ \\mathcal{A}_{u.a.} = \\int_\\lambda^1 (f(x)-x) dx = \\int_\\lambda^1 (-x^2\\ln x) dx $$
                    <p>Primitive de $-x^2\\ln x$ : on intègre par parties.</p>
                    <p>Soit $u=\\ln x$, $dv=-x^2 dx$ ⇒ $du=\\frac{dx}{x}$, $v=-\\frac{x^3}{3}$.</p>
                    $$ \\int -x^2\\ln x dx = -\\frac{x^3}{3}\\ln x - \\int -\\frac{x^3}{3}\\cdot\\frac{dx}{x} = -\\frac{x^3}{3}\\ln x + \\frac{x^3}{9} $$
                    <p>Donc :</p>
                    $$ \\mathcal{A}_{u.a.} = \\left[-\\frac{x^3}{3}\\ln x + \\frac{x^3}{9}\\right]_\\lambda^1 = \\left(0 + \\frac{1}{9}\\right) - \\left(-\\frac{\\lambda^3}{3}\\ln\\lambda + \\frac{\\lambda^3}{9}\\right) = \\frac{1}{9} + \\frac{\\lambda^3}{3}\\ln\\lambda - \\frac{\\lambda^3}{9} $$
                    <p>En cm² (unité = 2 cm) : 1 u.a. = $2 \\times 2 = 4$ cm².</p>
                    $$ A(\\lambda) = 4\\left(\\frac{1}{9} + \\frac{\\lambda^3}{3}\\ln\\lambda - \\frac{\\lambda^3}{9}\\right) \\text{ cm}^2 $$
                `
            },
            {
                id: 'p3q4b',
                texte: "IV.4.b – Limite de A(λ) quand λ→0+.",
                solution: `
                    <p>$\\lim_{\\lambda\\to0^+} \\lambda^3\\ln\\lambda = 0$ (car $\\lambda^3$ l'emporte).</p>
                    <p>Donc $\\lim_{\\lambda\\to0^+} A(\\lambda) = 4\\times\\frac{1}{9} = \\frac{4}{9}$ cm².</p>
                `
            },
            {
                id: 'p3q5a',
                texte: "V.5.a – 0 < Un < 1.",
                solution: `
                    <p>Raisonnement par récurrence.</p>
                    <p>Initialisation : $U_0 \\in ]0,1[$.</p>
                    <p>Hérédité : supposons $0 < U_n < 1$. Alors $f(U_n) = U_n - U_n^2\\ln U_n$.</p>
                    <p>Comme $U_n \\in ]0,1[$, $\\ln U_n < 0$, donc $-U_n^2\\ln U_n > 0$, d'où $f(U_n) > U_n > 0$.</p>
                    <p>De plus, $f(U_n) < 1$ car $U_n < 1$ et $\\ln U_n < 0$.</p>
                    <p>Donc $0 < U_{n+1} < 1$.</p>
                    <p>Conclusion : $0 < U_n < 1$ pour tout $n$.</p>
                `
            },
            {
                id: 'p3q5b',
                texte: "V.5.b – Suite croissante.",
                solution: `
                    <p>$U_{n+1} - U_n = f(U_n) - U_n = -U_n^2\\ln U_n$.</p>
                    <p>Comme $0 < U_n < 1$, $\\ln U_n < 0$, donc $-U_n^2\\ln U_n > 0$.</p>
                    <p>Donc $U_{n+1} - U_n > 0$ : la suite est <strong>strictement croissante</strong>.</p>
                `
            },
            {
                id: 'p3q5c',
                texte: "V.5.c – Convergence et limite.",
                solution: `
                    <p>$(U_n)$ est croissante et majorée par $1$, donc elle <strong>converge</strong> vers une limite $\\ell \\in ]0,1]$.</p>
                    <p>La fonction $f$ est continue sur $]0,1]$, donc $\\ell = f(\\ell)$.</p>
                    <p>Or $f(\\ell)=\\ell$ ⇔ $\\ell - \\ell^2\\ln\\ell = \\ell$ ⇔ $\\ell^2\\ln\\ell = 0$.</p>
                    <p>Comme $\\ell > 0$, on a $\\ln\\ell = 0$ ⇒ $\\ell = 1$.</p>
                    <p>Donc <strong>$\\lim_{n\\to+\\infty} U_n = 1$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>La fonction $g$ est une fonction auxiliaire pour étudier le signe de $f'$.</li>
                <li>Pour l'aire, bien utiliser la transformation u.a. → cm² (facteur 4).</li>
                <li>La suite $(U_n)$ est un exemple classique de suite récurrente convergeant vers un point fixe.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Oublier que $f(0)$ est défini par continuité.</li>
                <li>Confondre $\ln x$ et $\ln(1/x)$.</li>
                <li>Ne pas utiliser le bon facteur pour l'aire en cm².</li>
            </ul>
        `
    });

    console.log("✅ Problème 3 chargé.");
})();