// data/problemes/part8.js – Problème 8 (corrigé, version finale)
// ================================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 8,
        titre: "Problème 8 – Fonction exponentielle, asymptotes, point d'inflexion et suite d'intégrales",
        enonce: `
            <p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x) = x - \\dfrac{1}{1 + e^x}$ et soit $(\\mathcal{C})$ sa courbe représentative dans le plan rapporté à un repère orthonormé $(O, \\vec{i}, \\vec{j})$ (unité de longueur 5 cm).</p>

            <ol>
                <li>
                    <strong>a</strong> – Vérifier que pour tout réel $x$ on a $f'(x) > 0$.<br>
                    <strong>b</strong> – Dresser le tableau de variation de $f$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que les droites $\\Delta_1 : y = x$ et $\\Delta_2 : y = x - 1$ sont asymptotes à la courbe $(\\mathcal{C})$.<br>
                    <strong>b</strong> – Préciser les positions relatives de $(\\mathcal{C})$ par rapport à $\\Delta_1$ et à $\\Delta_2$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$ et en déduire que l'équation $f(x)=0$ admet une solution unique $\\alpha$ telle que : $0.4 < \\alpha < 1$.<br>
                    <strong>b</strong> – Vérifier que $e^{\\alpha} + 1 = \\dfrac{1}{\\alpha}$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que $I(0, -\\frac{1}{2})$ est le seul point d'inflexion de la courbe $(\\mathcal{C})$.<br>
                    <strong>b</strong> – Donner une équation de la tangente $(T)$ à la courbe $(\\mathcal{C})$ au point $I$.<br>
                    <strong>c</strong> – Montrer que la tangente $(T)$ coupe l'axe des abscisses au point $A$ d'abscisse $0,4$.
                </li>
                <li>Tracer $\\Delta_1$, $\\Delta_2$, $T$ et $(\\mathcal{C})$ dans le repère $(O, \\vec{i}, \\vec{j})$. (On prendra $\\alpha = 0,45$).</li>
                <li>
                    Pour tout $n \\in \\mathbb{N}^*$ (avec $n > \\alpha$), on considère la suite $(U_n)$ définie par :
                    $$ U_n = \\int_{\\alpha}^{n} (x - f(x))\\, dx $$
                    <strong>a</strong> – Donner une interprétation géométrique de $U_n$.<br>
                    <strong>b</strong> – Vérifier que $x - f(x) = 1 - \\dfrac{e^x}{e^x + 1}$, puis calculer $U_n$ en fonction de $\\alpha$ et $n$.<br>
                    <strong>c</strong> – Montrer que $\\lim_{n \\to +\\infty} U_n = -(\\alpha + \\ln \\alpha)$ (on pourra utiliser la relation du 3) b-).
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme8" data-fn="x - 1/(1 + exp(x)); x; x - 1; (1/2)*x - 1/2" data-xmin="-3" data-xmax="3" data-colors="#2563eb,#dc2626,#16a34a,#eab308" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu), asymptotes $\\Delta_1:y=x$ (rouge), $\\Delta_2:y=x-1$ (vert) et tangente $(T)$ (jaune).</em></p>
        `,
        questions: [
            {
                id: 'p8q1a',
                texte: "1.a – Dérivée de f.",
                solution: `
                    <p>$f(x) = x - \\dfrac{1}{1+e^x}$.</p>
                    <p>$f'(x) = 1 - \\left(-\\dfrac{e^x}{(1+e^x)^2}\\right) = 1 + \\dfrac{e^x}{(1+e^x)^2}$.</p>
                    <p>Comme $\\dfrac{e^x}{(1+e^x)^2} > 0$ pour tout $x$, on a $f'(x) > 0$.</p>
                    <p>Donc <strong>$f'(x) > 0$ pour tout $x \\in \\mathbb{R}$</strong>.</p>
                `
            },
            {
                id: 'p8q1b',
                texte: "1.b – Tableau de variation de f.",
                solution: `
                    <p>$f$ est strictement croissante sur $\\mathbb{R}$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to-\\infty} f(x) = -\\infty$ (car $\\dfrac{1}{1+e^x} \\to 1$ et $x \\to -\\infty$).</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $\\dfrac{1}{1+e^x} \\to 0$ et $x \\to +\\infty$).</li>
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
                id: 'p8q2a',
                texte: "2.a – Asymptotes.",
                solution: `
                    <p>On a $f(x) - x = -\\dfrac{1}{1+e^x}$.</p>
                    <p>$\\lim_{x\\to+\\infty} (f(x)-x) = 0$ ⇒ $\\Delta_1 : y=x$ est <strong>asymptote</strong> en $+\\infty$.</p>
                    <p>De plus, $f(x) - (x-1) = 1 - \\dfrac{1}{1+e^x} = \\dfrac{e^x}{1+e^x}$.</p>
                    <p>$\\lim_{x\\to-\\infty} (f(x) - (x-1)) = 0$ (car $\\dfrac{e^x}{1+e^x} \\to 0$) ⇒ $\\Delta_2 : y=x-1$ est <strong>asymptote</strong> en $-\\infty$.</p>
                `
            },
            {
                id: 'p8q2b',
                texte: "2.b – Positions relatives.",
                solution: `
                    <p><strong>Par rapport à $\\Delta_1$ :</strong></p>
                    <p>$f(x)-x = -\\dfrac{1}{1+e^x} < 0$ pour tout $x$.</p>
                    <p>Donc $(\\mathcal{C})$ est <strong>en dessous</strong> de $\\Delta_1$.</p>
                    <p><strong>Par rapport à $\\Delta_2$ :</strong></p>
                    <p>$f(x)-(x-1) = \\dfrac{e^x}{1+e^x} > 0$ pour tout $x$.</p>
                    <p>Donc $(\\mathcal{C})$ est <strong>au-dessus</strong> de $\\Delta_2$.</p>
                `
            },
            {
                id: 'p8q3a',
                texte: "3.a – Bijection et existence de α.",
                solution: `
                    <p>$f$ est continue et strictement croissante sur $\\mathbb{R}$, avec $\\lim_{x\\to-\\infty} f(x) = -\\infty$ et $\\lim_{x\\to+\\infty} f(x) = +\\infty$.</p>
                    <p>Donc $f$ réalise une <strong>bijection</strong> de $\\mathbb{R}$ sur $\\mathbb{R}$.</p>
                    <p>L'équation $f(x)=0$ admet une unique solution $\\alpha$.</p>
                    <p>Encadrement :</p>
                    <ul>
                        <li>$f(0.4) = 0.4 - \\dfrac{1}{1+e^{0.4}} \\approx 0.4 - 0.401 = -0.001 < 0$.</li>
                        <li>$f(1) = 1 - \\dfrac{1}{1+e} \\approx 1 - 0.269 = 0.731 > 0$.</li>
                    </ul>
                    <p>Donc <strong>$0.4 < \\alpha < 1$</strong>.</p>
                `
            },
            {
                id: 'p8q3b',
                texte: "3.b – Relation e^α + 1 = 1/α.",
                solution: `
                    <p>$f(\\alpha) = 0$ ⇒ $\\alpha - \\dfrac{1}{1+e^{\\alpha}} = 0$.</p>
                    <p>Donc $\\alpha = \\dfrac{1}{1+e^{\\alpha}}$ ⇒ $\\dfrac{1}{\\alpha} = 1 + e^{\\alpha}$.</p>
                    <p>Donc <strong>$e^{\\alpha} + 1 = \\dfrac{1}{\\alpha}$</strong>.</p>
                `
            },
            {
                id: 'p8q4a',
                texte: "4.a – Point d'inflexion.",
                solution: `
                    <p>$f'(x) = 1 + \\dfrac{e^x}{(1+e^x)^2}$.</p>
                    <p>$f''(x) = \\dfrac{e^x(1+e^x)^2 - e^x \\cdot 2(1+e^x)e^x}{(1+e^x)^4} = \\dfrac{e^x(1+e^x) - 2e^{2x}}{(1+e^x)^3} = \\dfrac{e^x - e^{2x}}{(1+e^x)^3} = \\dfrac{e^x(1-e^x)}{(1+e^x)^3}$.</p>
                    <p>Signe de $f''$ :</p>
                    <ul>
                        <li>$1-e^x > 0 \\iff x < 0$ ⇒ $f'' > 0$ (convexe).</li>
                        <li>$1-e^x < 0 \\iff x > 0$ ⇒ $f'' < 0$ (concave).</li>
                        <li>$f''(0) = 0$.</li>
                    </ul>
                    <p>Donc $I(0, f(0)) = I(0, -\\dfrac{1}{2})$ est le <strong>seul point d'inflexion</strong>.</p>
                `
            },
            {
                id: 'p8q4b',
                texte: "4.b – Tangente au point I.",
                solution: `
                    <p>$f(0) = -\\dfrac{1}{2}$.</p>
                    <p>$f'(0) = 1 + \\dfrac{1}{(2)^2} = 1 + \\dfrac{1}{4} = \\dfrac{5}{4}$.</p>
                    <p>Équation de la tangente $(T)$ en $I$ :</p>
                    $$ y = f(0) + f'(0)(x-0) = -\\frac{1}{2} + \\frac{5}{4}x = \\frac{5}{4}x - \\frac{1}{2}. $$
                    <p>Donc <strong>$(T) : y = \\dfrac{5}{4}x - \\dfrac{1}{2}$</strong>.</p>
                    <p>Multiplions par 4 : $4y = 5x - 2$.</p>
                `
            },
            {
                id: 'p8q4c',
                texte: "4.c – Intersection de T avec l'axe des abscisses.",
                solution: `
                    <p>L'axe des abscisses a pour équation $y=0$.</p>
                    <p>On résout $\\dfrac{5}{4}x - \\dfrac{1}{2} = 0$ ⇒ $\\dfrac{5}{4}x = \\dfrac{1}{2}$ ⇒ $x = \\dfrac{4}{10} = 0.4$.</p>
                    <p>Donc $(T)$ coupe l'axe des abscisses au point $A(0.4, 0)$.</p>
                `
            },
            {
                id: 'p8q5',
                texte: "5 – Tracer les courbes.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>$(\\mathcal{C})$ : strictement croissante de $-\\infty$ à $+\\infty$.</li>
                        <li>$\\Delta_1 : y=x$ (asymptote en $+\\infty$).</li>
                        <li>$\\Delta_2 : y=x-1$ (asymptote en $-\\infty$).</li>
                        <li>$(T) : y = \\dfrac{5}{4}x - \\dfrac{1}{2}$ (tangente au point d'inflexion $I$).</li>
                    </ul>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p8q6a',
                texte: "6.a – Interprétation géométrique de U_n.",
                solution: `
                    <p>L'aire $U_n$ est l'intégrale de la différence $x - f(x)$ entre $\\alpha$ et $n$. Comme $f(x) \\le x$ (la courbe est en dessous de $\\Delta_1$), $x - f(x) \\ge 0$.</p>
                    <p>Donc $U_n$ représente l'aire du domaine compris entre la courbe $(\\mathcal{C})$ et la droite $\\Delta_1 : y=x$, pour $x$ allant de $\\alpha$ à $n$.</p>
                `
            },
            {
                id: 'p8q6b',
                texte: "6.b – Calcul de U_n.",
                solution: `
                    <p>On a $x - f(x) = x - \\left(x - \\dfrac{1}{1+e^x}\\right) = \\dfrac{1}{1+e^x}$.</p>
                    <p>Or $\\dfrac{1}{1+e^x} = \\dfrac{1+e^x - e^x}{1+e^x} = 1 - \\dfrac{e^x}{1+e^x}$.</p>
                    <p>Donc <strong>$x - f(x) = 1 - \\dfrac{e^x}{e^x+1}$</strong>.</p>
                    <p>On intègre de $\\alpha$ à $n$ :</p>
                    $$ U_n = \\int_{\\alpha}^{n} \\dfrac{1}{1+e^x}\\, dx = \\left[x - \\ln(1+e^x)\\right]_{\\alpha}^{n} = \\left(n - \\ln(1+e^n)\\right) - \\left(\\alpha - \\ln(1+e^{\\alpha})\\right) $$
                    $$ U_n = n - \\alpha - \\ln(1+e^n) + \\ln(1+e^{\\alpha}). $$
                    <p>Donc <strong>$U_n = n - \\alpha - \\ln(1+e^n) + \\ln(1+e^{\\alpha})$</strong>.</p>
                `
            },
            {
                id: 'p8q6c',
                texte: "6.c – Limite de U_n.",
                solution: `
                    <p>On a $U_n = n - \\alpha - \\ln(1+e^n) + \\ln(1+e^{\\alpha})$.</p>
                    <p>On factorise par $e^n$ dans le logarithme :</p>
                    $$ \\ln(1+e^n) = \\ln\\left(e^n\\left(1+e^{-n}\\right)\\right) = \\ln(e^n) + \\ln(1+e^{-n}) = n + \\ln(1+e^{-n}). $$
                    <p>Donc $n - \\ln(1+e^n) = -\\ln(1+e^{-n})$.</p>
                    <p>Quand $n \\to +\\infty$, $e^{-n} \\to 0$, donc $1+e^{-n} \\to 1$, et par continuité de la fonction logarithme népérien, $\\ln(1+e^{-n}) \\to \\ln(1) = 0$.</p>
                    <p>Ainsi $\\lim_{n\\to+\\infty} \\left(n - \\ln(1+e^n)\\right) = 0$.</p>
                    <p>Par conséquent, $\\lim_{n\\to+\\infty} U_n = -\\alpha + \\ln(1+e^{\\alpha})$.</p>
                    <p>Or d'après la question 3.b, $1+e^{\\alpha} = \\dfrac{1}{\\alpha}$, donc $\\ln(1+e^{\\alpha}) = \\ln\\left(\\dfrac{1}{\\alpha}\\right) = -\\ln \\alpha$.</p>
                    <p>Donc $\\lim_{n\\to+\\infty} U_n = -\\alpha - \\ln \\alpha = -(\\alpha + \\ln \\alpha)$.</p>
                    <p>On a bien <strong>$\\lim_{n\\to+\\infty} U_n = -(\\alpha + \\ln \\alpha)$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>La fonction $f$ est de la forme $x - \\dfrac{1}{1+e^x}$, donc ses asymptotes sont $y=x$ et $y=x-1$.</li>
                <li>Le point d'inflexion s'obtient en annulant la dérivée seconde.</li>
                <li>La relation $e^{\\alpha} + 1 = \\dfrac{1}{\\alpha}$ est cruciale pour calculer la limite de la suite.</li>
                <li>Pour l'intégrale, la primitive de $\\dfrac{1}{1+e^x}$ est $x - \\ln(1+e^x)$.</li>
                <li>Pour la limite, factoriser $e^n$ dans le logarithme permet d'éviter les équivalents.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Se tromper dans le signe de la dérivée seconde.</li>
                <li>Oublier que $f$ est strictement croissante sur $\\mathbb{R}$.</li>
                <li>Confondre les asymptotes en $+\\infty$ et $-\\infty$.</li>
                <li>Ne pas utiliser la relation $1+e^{\\alpha} = 1/\\alpha$ pour la limite.</li>
            </ul>
        `
    });

    console.log("✅ Problème 8 corrigé (version finale).");
})();