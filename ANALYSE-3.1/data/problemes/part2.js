// data/problemes/part2.js – Problème 2
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 2,
        titre: "Problème 2 – Étude d'une fonction avec logarithme",
        enonce: `
            <p>Soit $g$ la fonction définie sur $]0, +\\infty[$ par : $g(x) = x^2 + 1 - \\ln x$.</p>
            <ol>
                <li>Dresser le tableau de variation de $g$.</li>
                <li>En déduire que pour tout réel $x > 0$, $g(x) > 0$.</li>
            </ol>

            <p>Soit $f$ la fonction définie sur $]0, +\\infty[$ par : $f(x) = x + 2 + \\dfrac{\\ln x}{x}$.</p>
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $f$ est dérivable sur $]0, +\\infty[$ et que $f'(x) = \\dfrac{g(x)}{x^2}$.<br>
                    <strong>b</strong> – Dresser le tableau de variation de $f$.
                </li>
                <li>Soit $\\mathcal{C}$ la courbe représentative de $f$ dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</li>
                <li><strong>a</strong> – Montrer que $\\mathcal{C}$ admet une asymptote oblique $\\Delta$ dont on donnera une équation cartésienne.</li>
                <li><strong>b</strong> – Étudier la position relative de $\\mathcal{C}$ et $\\Delta$.</li>
                <li>
                    Pour tout réel $x \\in [1, +\\infty[$, on considère les points $M(x, f(x))$ et $N(x, x+2)$.
                    <strong>a</strong> – Vérifier que la distance $MN$ est égale à $\\dfrac{\\ln x}{x}$.<br>
                    <strong>b</strong> – Pour quelle valeur $x_0$ de $x$ la distance $MN$ est-elle maximale ?<br>
                    <strong>c</strong> – Montrer que la tangente $\\mathcal{T}$ à $\\mathcal{C}$ au point d'abscisse $x_0$ est parallèle à $\\Delta$.
                </li>
                <li>Tracer $\\Delta$, $\\mathcal{C}$ et $\\mathcal{T}$.</li>
                <li>
                    <strong>a</strong> – Calculer l'aire $\\mathcal{A}$ de la partie du plan limitée par la courbe $\\mathcal{C}$ et les droites d'équations respectives $y = x+2$, $x=1$ et $x=e$.<br>
                    <strong>b</strong> – Soit $\\alpha$ un réel strictement supérieur à $e$. Déterminer $\\alpha$ pour que l'aire de la partie du plan limitée par $\\mathcal{C}$, $y=x+2$, $x=e$ et $x=\\alpha$ soit égale à $2\\mathcal{A}$.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme2" data-fn="x + 2 + log(x)/x; x + 2" data-xmin="0.1" data-xmax="6" data-colors="#2563eb,#dc2626" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) et asymptote $\\Delta:y=x+2$ (rouge).</em></p>
        `,
        questions: [
            {
                id: 'p2q1',
                texte: "I.1 – Tableau de variation de g.",
                solution: `
                    <p>$g'(x) = 2x - \\frac{1}{x} = \\frac{2x^2-1}{x}$.</p>
                    <p>Signe de $g'$ :</p>
                    <ul>
                        <li>$2x^2-1 > 0 \\iff x > \\frac{1}{\\sqrt{2}}$.</li>
                        <li>$2x^2-1 < 0 \\iff 0 < x < \\frac{1}{\\sqrt{2}}$.</li>
                    </ul>
                    <p>Donc $g$ est décroissante sur $]0, \\frac{1}{\\sqrt{2}}[$ et croissante sur $]\\frac{1}{\\sqrt{2}}, +\\infty[$.</p>
                    <p>Minimum : $g\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{1}{2} + 1 - \\ln\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{3}{2} + \\frac{1}{2}\\ln 2 > 0$.</p>
                `
            },
            {
                id: 'p2q2',
                texte: "I.2 – Déduire que g(x) > 0.",
                solution: `
                    <p>Le minimum de $g$ sur $]0,+\\infty[$ est $g(1/\\sqrt{2}) = \\frac{3}{2} + \\frac{1}{2}\\ln 2 > 0$.</p>
                    <p>Donc <strong>$g(x) > 0$ pour tout $x>0$</strong>.</p>
                `
            },
            {
                id: 'p2q3a',
                texte: "II.1.a – Dérivée de f.",
                solution: `
                    <p>$f(x) = x+2+\\frac{\\ln x}{x}$.</p>
                    <p>Dérivée : $f'(x) = 1 + \\frac{1\\cdot x - \\ln x \\cdot 1}{x^2} = 1 + \\frac{1-\\ln x}{x^2} = \\frac{x^2 + 1 - \\ln x}{x^2} = \\frac{g(x)}{x^2}$.</p>
                    <p>Comme $g(x)>0$ et $x^2>0$, $f'(x)>0$ pour tout $x>0$.</p>
                `
            },
            {
                id: 'p2q3b',
                texte: "II.1.b – Tableau de variation de f.",
                solution: `
                    <p>$f$ est strictement croissante sur $]0,+\\infty[$ car $f'(x)>0$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $\\ln x/x \\to -\\infty$)</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $x$ domine)</li>
                    </ul>
                    <p>Tableau :</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
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
                id: 'p2q4a',
                texte: "II.2.a – Asymptote oblique.",
                solution: `
                    <p>$f(x) - (x+2) = \\frac{\\ln x}{x}$.</p>
                    <p>$\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$.</p>
                    <p>Donc la droite $\\Delta : y = x+2$ est une <strong>asymptote oblique</strong> à $\\mathcal{C}$.</p>
                `
            },
            {
                id: 'p2q4b',
                texte: "II.2.b – Position relative.",
                solution: `
                    <p>$f(x) - (x+2) = \\frac{\\ln x}{x}$.</p>
                    <ul>
                        <li>Pour $x<1$ : $\\ln x < 0$ ⇒ $f(x) < x+2$ (courbe en dessous de $\\Delta$).</li>
                        <li>Pour $x=1$ : $f(1)=3$ (point d'intersection).</li>
                        <li>Pour $x>1$ : $\\ln x > 0$ ⇒ $f(x) > x+2$ (courbe au dessus de $\\Delta$).</li>
                    </ul>
                `
            },
            {
                id: 'p2q5a',
                texte: "II.3.a – Distance MN.",
                solution: `
                    <p>$M(x, f(x))$, $N(x, x+2)$ ont la même abscisse, donc $MN = |f(x)-(x+2)| = \\left|\\dfrac{\\ln x}{x}\\right|$.</p>
                    <p>Pour $x\\in[1,+\\infty[$, $\\ln x \\ge 0$, donc $MN = \\dfrac{\\ln x}{x}$.</p>
                `
            },
            {
                id: 'p2q5b',
                texte: "II.3.b – Valeur de x0 pour MN maximale.",
                solution: `
                    <p>On étudie $h(x) = \\frac{\\ln x}{x}$ sur $[1,+\\infty[$.</p>
                    <p>$h'(x) = \\frac{1-\\ln x}{x^2}$.</p>
                    <ul>
                        <li>$h'(x) > 0 \\iff 1-\\ln x > 0 \\iff x < e$.</li>
                        <li>$h'(x) = 0 \\iff x = e$.</li>
                        <li>$h'(x) < 0 \\iff x > e$.</li>
                    </ul>
                    <p>Donc $h$ est croissante sur $[1,e]$, décroissante sur $[e,+\\infty[$.</p>
                    <p>Le maximum est atteint en $x_0 = e$ et vaut $h(e) = 1/e$.</p>
                `
            },
            {
                id: 'p2q5c',
                texte: "II.3.c – Tangente parallèle à Δ.",
                solution: `
                    <p>La tangente à $\\mathcal{C}$ au point d'abscisse $x_0=e$ a pour pente $f'(e)$.</p>
                    <p>$f'(e) = \\frac{g(e)}{e^2} = \\frac{e^2+1-\\ln e}{e^2} = \\frac{e^2+1-1}{e^2} = 1$.</p>
                    <p>La droite $\\Delta$ a pour pente $1$.</p>
                    <p>Donc la tangente est <strong>parallèle</strong> à $\\Delta$.</p>
                `
            },
            {
                id: 'p2q6a',
                texte: "II.5.a – Aire entre x=1 et x=e.",
                solution: `
                    <p>L'aire $\\mathcal{A}$ est l'intégrale de la différence $f(x)-(x+2) = \\frac{\\ln x}{x}$ entre $1$ et $e$ :</p>
                    $$ \\mathcal{A} = \\int_1^e \\frac{\\ln x}{x} dx = \\left[ \\frac{(\\ln x)^2}{2} \\right]_1^e = \\frac{1}{2} - 0 = \\frac{1}{2} $$
                    <p>Donc $\\mathcal{A} = \\dfrac{1}{2}$ (unité d'aire).</p>
                `
            },
            {
                id: 'p2q6b',
                texte: "II.5.b – Détermination de α.",
                solution: `
                    <p>L'aire entre $x=e$ et $x=\\alpha$ (avec $\\alpha>e$) est :</p>
                    $$ \\int_e^\\alpha \\frac{\\ln x}{x} dx = \\left[ \\frac{(\\ln x)^2}{2} \\right]_e^\\alpha = \\frac{(\\ln \\alpha)^2 - 1}{2} $$
                    <p>On veut que cette aire soit égale à $2\\mathcal{A} = 2\\times\\frac{1}{2} = 1$.</p>
                    <p>Donc $\\frac{(\\ln \\alpha)^2 - 1}{2} = 1$ ⇒ $(\\ln \\alpha)^2 = 3$.</p>
                    <p>Comme $\\alpha>e>1$, $\\ln \\alpha > 0$, donc $\\ln \\alpha = \\sqrt{3}$.</p>
                    <p>D'où <strong>$\\alpha = e^{\\sqrt{3}}$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Utiliser la fonction auxiliaire $g$ pour étudier le signe de $f'$.</li>
                <li>La distance verticale entre $\\mathcal{C}$ et $\\Delta$ est $\\frac{\\ln x}{x}$.</li>
                <li>Pour l'aire, intégrer $\\frac{\\ln x}{x}$ dont une primitive est $\\frac{(\\ln x)^2}{2}$.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Confondre $\\ln x$ et $\\frac{\\ln x}{x}$.</li>
                <li>Oublier que $f$ n'est définie que pour $x>0$.</li>
                <li>Erreur dans le calcul de l'intégrale de $\\frac{\\ln x}{x}$.</li>
            </ul>
        `
    });

    console.log("✅ Problème 2 chargé.");
})();