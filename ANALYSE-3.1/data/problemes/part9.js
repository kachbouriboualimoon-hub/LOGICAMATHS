// data/problemes/part9.js – Problème 9
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 9,
        titre: "Problème 9 – Fonction logarithme et exponentielle, suite récurrente",
        enonce: `
            <p>Soit $f$ la fonction numérique définie sur $\\mathbb{R}$ par : $f(x) = 1 - \\ln(1 + e^{-x})$.</p>
            <p>On désigne par $\\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$ où l’unité de longueur est 2 cm.</p>

            <h4>I – Étude de la fonction $f$</h4>
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $\\lim_{x \\to +\\infty} f(x) = 1$. Interpréter géométriquement le résultat.<br>
                    <strong>b</strong> – Montrer que $\\lim_{x \\to -\\infty} f(x) = -\\infty$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que pour tout réel $x$ on a : $f(x) = x + 1 - \\ln(1 + e^x)$.<br>
                    <small>(On pourra écrire $1 + e^{-x} = e^{-x}(1 + e^x)$.)</small><br>
                    <strong>b</strong> – En déduire que la droite $D$ d'équation $y = x + 1$ est une asymptote oblique à $\\mathcal{C}$ au voisinage de $-\\infty$.<br>
                    <strong>c</strong> – Déterminer la position de $\\mathcal{C}$ par rapport à $D$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que pour tout réel $x$ on a : $f'(x) = \\dfrac{1}{1 + e^x}$.<br>
                    <strong>b</strong> – Étudier les variations de la fonction $f$.<br>
                    <strong>c</strong> – Montrer que l’équation $f(x)=0$ admet une seule solution $x_0$ telle que : $x_0 = -\\ln(e - 1)$.
                </li>
                <li>Tracer la courbe $\\mathcal{C}$ et ses asymptotes.</li>
            </ol>

            <h4>II – Étude d'une suite récurrente</h4>
            <ol>
                <li>Montrer que l’on a : $f(x) \\ge x$ si et seulement si $x \\le -x_0$.<br>
                <small>(On pourra utiliser le résultat de I.2.a.)</small></li>
                <li>Soit $U$ la suite définie sur $\\mathbb{N}$ par :
                    $$ u_0 = \\frac{1}{2} \\quad \\text{et} \\quad u_{n+1} = f(u_n) $$
                    <strong>a</strong> – Montrer, par récurrence, que pour tout entier naturel $n$ on a : $0 \\le u_n \\le -x_0$.<br>
                    <strong>b</strong> – Montrer que la suite $U$ est croissante.<br>
                    <strong>c</strong> – En déduire que la suite $U$ est convergente et calculer sa limite.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme9" data-fn="1 - log(1 + exp(-x)); x + 1" data-xmin="-5" data-xmax="5" data-colors="#2563eb,#dc2626" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) et asymptote $D:y=x+1$ (rouge).</em></p>
        `,
        questions: [
            {
                id: 'p9q1a',
                texte: "I.1.a – Limite en +∞ et interprétation.",
                solution: `
                    <p>$f(x) = 1 - \\ln(1 + e^{-x})$.</p>
                    <p>Quand $x\\to+\\infty$, $e^{-x} \\to 0$, donc $1+e^{-x} \\to 1$ et $\\ln(1+e^{-x}) \\to 0$.</p>
                    <p>Donc $\\lim_{x\\to+\\infty} f(x) = 1$.</p>
                    <p><strong>Interprétation :</strong> la droite $\\Delta : y = 1$ est une <strong>asymptote horizontale</strong> à $\\mathcal{C}$ au voisinage de $+\\infty$.</p>
                `
            },
            {
                id: 'p9q1b',
                texte: "I.1.b – Limite en -∞.",
                solution: `
                    <p>Quand $x\\to-\\infty$, $e^{-x} \\to +\\infty$, donc $\\ln(1+e^{-x}) \\sim \\ln(e^{-x}) = -x$.</p>
                    <p>Donc $f(x) \\sim 1 - (-x) = 1 + x \\to -\\infty$.</p>
                    <p>Donc <strong>$\\lim_{x\\to-\\infty} f(x) = -\\infty$</strong>.</p>
                `
            },
            {
                id: 'p9q2a',
                texte: "I.2.a – Réécriture de f.",
                solution: `
                    <p>On a $1 + e^{-x} = e^{-x}(e^x + 1) = e^{-x}(1 + e^x)$.</p>
                    <p>Donc $f(x) = 1 - \\ln\\left(e^{-x}(1+e^x)\\right) = 1 - \\ln(e^{-x}) - \\ln(1+e^x)$.</p>
                    <p>$f(x) = 1 - (-x) - \\ln(1+e^x) = x + 1 - \\ln(1+e^x)$.</p>
                    <p>Donc <strong>$f(x) = x + 1 - \\ln(1+e^x)$</strong>.</p>
                `
            },
            {
                id: 'p9q2b',
                texte: "I.2.b – Asymptote oblique D.",
                solution: `
                    <p>D'après I.2.a, $f(x) - (x+1) = -\\ln(1+e^x)$.</p>
                    <p>Quand $x\\to-\\infty$, $e^x \\to 0$, donc $1+e^x \\to 1$ et $\\ln(1+e^x) \\to 0$.</p>
                    <p>Donc $\\lim_{x\\to-\\infty} (f(x) - (x+1)) = 0$.</p>
                    <p>La droite $D : y = x+1$ est une <strong>asymptote oblique</strong> à $\\mathcal{C}$ au voisinage de $-\\infty$.</p>
                `
            },
            {
                id: 'p9q2c',
                texte: "I.2.c – Position de C par rapport à D.",
                solution: `
                    <p>$f(x) - (x+1) = -\\ln(1+e^x)$.</p>
                    <p>Comme $1+e^x > 1$, on a $\\ln(1+e^x) > 0$, donc $-\\ln(1+e^x) < 0$.</p>
                    <p>Donc $f(x) - (x+1) < 0$ pour tout $x$.</p>
                    <p>Donc $(\\mathcal{C})$ est <strong>toujours en dessous</strong> de $D$.</p>
                `
            },
            {
                id: 'p9q3a',
                texte: "I.3.a – Dérivée de f.",
                solution: `
                    <p>$f(x) = 1 - \\ln(1+e^{-x})$.</p>
                    <p>$f'(x) = -\\dfrac{-e^{-x}}{1+e^{-x}} = \\dfrac{e^{-x}}{1+e^{-x}}$.</p>
                    <p>Or $\\dfrac{e^{-x}}{1+e^{-x}} = \\dfrac{1}{e^x+1}$.</p>
                    <p>Donc <strong>$f'(x) = \\dfrac{1}{1+e^x}$</strong>.</p>
                `
            },
            {
                id: 'p9q3b',
                texte: "I.3.b – Variations de f.",
                solution: `
                    <p>$f'(x) = \\dfrac{1}{1+e^x} > 0$ pour tout $x$.</p>
                    <p>Donc $f$ est <strong>strictement croissante</strong> sur $\\mathbb{R}$.</p>
                    <p>Limites : $\\lim_{x\\to-\\infty} f(x) = -\\infty$ et $\\lim_{x\\to+\\infty} f(x) = 1$.</p>
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
                                        <span style="display:block; font-weight:600; color:var(--success);">$1$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$1$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p9q3c',
                texte: "I.3.c – Solution de f(x)=0.",
                solution: `
                    <p>L'équation $f(x)=0$ ⇔ $1 - \\ln(1+e^{-x}) = 0$.</p>
                    <p>Donc $\\ln(1+e^{-x}) = 1$ ⇒ $1+e^{-x} = e$ ⇒ $e^{-x} = e-1$.</p>
                    <p>Donc $-x = \\ln(e-1)$ ⇒ $x = -\\ln(e-1)$.</p>
                    <p>Donc l'équation admet une unique solution <strong>$x_0 = -\\ln(e-1)$</strong>.</p>
                `
            },
            {
                id: 'p9q4',
                texte: "I.4 – Tracer la courbe et ses asymptotes.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>$(\\mathcal{C})$ : strictement croissante de $-\\infty$ à $1$, avec asymptote horizontale $y=1$ en $+\\infty$.</li>
                        <li>L'asymptote horizontale $\\Delta : y=1$.</li>
                        <li>L'asymptote oblique $D : y=x+1$ (en $-\\infty$).</li>
                    </ul>
                    <p>La courbe est toujours en dessous de $D$.</p>
                    <p>Elle coupe l'axe des abscisses en $x_0$.</p>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p9q5',
                texte: "II.1 – Inégalité f(x) ≥ x.",
                solution: `
                    <p>On étudie $f(x) - x$.</p>
                    <p>D'après I.2.a, $f(x) = x + 1 - \\ln(1+e^x)$.</p>
                    <p>Donc $f(x) - x = 1 - \\ln(1+e^x)$.</p>
                    <p>On a $f(x) - x \\ge 0$ ⇔ $1 - \\ln(1+e^x) \\ge 0$ ⇔ $\\ln(1+e^x) \\le 1$.</p>
                    <p>⇔ $1+e^x \\le e$ ⇔ $e^x \\le e-1$ ⇔ $x \\le \\ln(e-1)$.</p>
                    <p>Or $\\ln(e-1) = -x_0$ (car $x_0 = -\\ln(e-1)$).</p>
                    <p>Donc $f(x) \\ge x$ ⇔ <strong>$x \\le -x_0$</strong>.</p>
                `
            },
            {
                id: 'p9q6a',
                texte: "II.2.a – Récurrence : 0 ≤ u_n ≤ -x_0.",
                solution: `
                    <p>On sait que $x_0 = -\\ln(e-1) \\approx -\\ln(1.718) \\approx -0.541$.</p>
                    <p>Donc $-x_0 \\approx 0.541$.</p>
                    <p><strong>Initialisation :</strong> $u_0 = \\frac{1}{2} = 0.5$, donc $0 \\le u_0 \\le -x_0$.</p>
                    <p><strong>Hérédité :</strong> supposons $0 \\le u_n \\le -x_0$.</p>
                    <p>Comme $f$ est croissante, on a $f(0) \\le f(u_n) \\le f(-x_0)$.</p>
                    <p>$f(0) = 1 - \\ln(1+1) = 1 - \\ln 2 \\approx 0.307 > 0$.</p>
                    <p>$f(-x_0) = f(\\ln(e-1)) = 1 - \\ln(1+e^{-\\ln(e-1)}) = 1 - \\ln\\left(1+\\frac{1}{e-1}\\right)$.</p>
                    <p>$= 1 - \\ln\\left(\\frac{e}{e-1}\\right) = 1 - (\\ln e - \\ln(e-1)) = 1 - 1 + \\ln(e-1) = \\ln(e-1) = -x_0$.</p>
                    <p>Donc $0 \\le u_{n+1} \\le -x_0$.</p>
                    <p>Conclusion : <strong>$0 \\le u_n \\le -x_0$</strong> pour tout $n$.</p>
                `
            },
            {
                id: 'p9q6b',
                texte: "II.2.b – Suite croissante.",
                solution: `
                    <p>On a $u_{n+1} - u_n = f(u_n) - u_n$.</p>
                    <p>D'après II.1, $f(x) - x \\ge 0$ ⇔ $x \\le -x_0$.</p>
                    <p>Comme $0 \\le u_n \\le -x_0$, on a $u_n \\le -x_0$, donc $f(u_n) - u_n \\ge 0$.</p>
                    <p>Donc $u_{n+1} - u_n \\ge 0$.</p>
                    <p>La suite $(U_n)$ est <strong>croissante</strong>.</p>
                `
            },
            {
                id: 'p9q6c',
                texte: "II.2.c – Convergence et limite.",
                solution: `
                    <p>$(U_n)$ est croissante et majorée par $-x_0$, donc elle <strong>converge</strong> vers une limite $\\ell \\le -x_0$.</p>
                    <p>Comme $f$ est continue, on a $\\ell = f(\\ell)$.</p>
                    <p>$\\ell = f(\\ell)$ ⇔ $\\ell = 1 - \\ln(1+e^{-\\ell})$.</p>
                    <p>Cette équation est équivalente à $f(\\ell) - \\ell = 0$.</p>
                    <p>D'après II.1, $f(x)-x \\ge 0$ pour $x \\le -x_0$ et $f(x)-x < 0$ pour $x > -x_0$.</p>
                    <p>La seule solution de $f(x)=x$ est $x = -x_0$.</p>
                    <p>Donc <strong>$\\ell = -x_0 = \\ln(e-1)$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour la réécriture de $f$, utiliser $1+e^{-x} = e^{-x}(1+e^x)$.</li>
                <li>L'équation $f(x)=x$ se résout en utilisant l'expression de I.2.a.</li>
                <li>La suite $U_n$ converge vers le point fixe de $f$ dans l'intervalle $[0, -x_0]$.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Oublier que $f$ est croissante sur $\\mathbb{R}$.</li>
                <li>Confondre les asymptotes en $+\\infty$ et $-\\infty$.</li>
                <li>Se tromper dans le signe de $x_0$.</li>
            </ul>
        `
    });

    console.log("✅ Problème 9 chargé.");
})();