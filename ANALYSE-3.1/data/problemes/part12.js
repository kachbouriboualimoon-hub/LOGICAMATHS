// data/problemes/part12.js – Problème 12 (corrigé)
// ==================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 12,
        titre: "Problème 12 – Fonction exponentielle, symétrie, bijection, suite d'intégrales",
        enonce: `
            <p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par :</p>
            $$ f(x) = \\frac{e^{2x}}{1 + e^{2x}} $$
            <p>et soit $(\\mathcal{C})$ sa courbe représentative dans le plan rapporté à un repère orthonormé $(O, \\vec{i}, \\vec{j})$ (unité : 2 cm).</p>

            <h4>I – Étude de la fonction $f$</h4>
            <ol>
                <li>
                    <strong>a</strong> – Calculer $\\lim_{x \\to +\\infty} f(x)$ et $\\lim_{x \\to -\\infty} f(x)$.<br>
                    <strong>b</strong> – Montrer que pour tout réel $x$ on a : $f'(x) = \\dfrac{2e^{2x}}{(1+e^{2x})^2}$.
                    Dresser le tableau de variation de $f$.<br>
                    <strong>c</strong> – Montrer que le point $I\\left(0, \\dfrac{1}{2}\\right)$ est un centre de symétrie de $(\\mathcal{C})$.<br>
                    <strong>d</strong> – Donner une équation cartésienne de la tangente $(T)$ à $(\\mathcal{C})$ au point $I$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que pour tout réel $t$ on a : $f'(t) \\le \\dfrac{1}{2}$.<br>
                    <strong>b</strong> – En intégrant les deux membres de l'inégalité précédente, montrer que pour $x \\ge 0$ on a : $f(x) \\le \\dfrac{1}{2}(x+1)$.<br>
                    <strong>c</strong> – Déterminer alors la position de $(\\mathcal{C})$ par rapport à $(T)$.
                </li>
                <li>Tracer $(T)$ et $(\\mathcal{C})$ dans le repère $(O, \\vec{i}, \\vec{j})$.</li>
                <li>
                    <strong>a</strong> – Montrer que $f$ est une bijection de $\\mathbb{R}$ sur $]0,1[$.<br>
                    <strong>b</strong> – Soit $y \\in ]0,1[$. Déterminer le réel $x$ tel que $f(x) = y$.<br>
                    <strong>c</strong> – En déduire la représentation graphique dans le même repère $(O, \\vec{i}, \\vec{j})$ de la fonction $g$ définie sur $]0,1[$ par :
                    $$ g(x) = \\frac{1}{2} \\ln\\left(\\frac{x}{1-x}\\right). $$
                </li>
            </ol>

            <h4>II – Étude d'une suite d'intégrales</h4>
            <p>On considère la suite $(I_n)$ définie pour tout entier naturel non nul $n$ par :</p>
            $$ I_n = \\int_{-1}^{0} \\frac{e^{2nt}}{1 + e^{2t}}\\, dt. $$
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $(I_n)$ est décroissante et positive.<br>
                    <strong>b</strong> – En déduire que $(I_n)$ est convergente.
                </li>
                <li>Montrer que pour tout entier naturel non nul $n$, on a : $I_n \\le \\dfrac{1}{2n}$.</li>
                <li>Trouver la limite de $I_n$ quand $n$ tend vers $+\\infty$.</li>
            </ol>

            <div class="graph-container" id="graph-probleme12" data-fn="exp(2*x)/(1+exp(2*x)); (1/2)*x + 1/2" data-xmin="-3" data-xmax="3" data-colors="#2563eb,#dc2626" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) et tangente $T:y=\\dfrac{1}{2}x+\\dfrac{1}{2}$ (rouge).</em></p>
        `,
        questions: [
            {
                id: 'p12q1a',
                texte: "I.1.a – Limites de f.",
                solution: `
                    <p>$f(x) = \\dfrac{e^{2x}}{1 + e^{2x}}$.</p>
                    <p>$\\lim_{x\\to+\\infty} f(x) = 1$ (car $e^{2x}$ domine au numérateur et au dénominateur).</p>
                    <p>$\\lim_{x\\to-\\infty} f(x) = 0$ (car $e^{2x} \\to 0$).</p>
                `
            },
            {
                id: 'p12q1b',
                texte: "I.1.b – Dérivée et tableau de variation.",
                solution: `
                    <p>$f'(x) = \\dfrac{2e^{2x}(1+e^{2x}) - e^{2x}(2e^{2x})}{(1+e^{2x})^2} = \\dfrac{2e^{2x} + 2e^{4x} - 2e^{4x}}{(1+e^{2x})^2} = \\dfrac{2e^{2x}}{(1+e^{2x})^2}$.</p>
                    <p>Comme $e^{2x} > 0$ et $(1+e^{2x})^2 > 0$, on a $f'(x) > 0$ pour tout $x$.</p>
                    <p>Donc $f$ est <strong>strictement croissante</strong> sur $\\mathbb{R}$.</p>
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
                                        <span style="display:block; font-weight:600;">$0$</span>
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
                id: 'p12q1c',
                texte: "I.1.c – Centre de symétrie.",
                solution: `
                    <p>On vérifie que $I\\left(0, \\dfrac{1}{2}\\right)$ est centre de symétrie :</p>
                    <p>Il faut montrer que $f(-x) + f(x) = 1$.</p>
                    <p>$f(-x) + f(x) = \\dfrac{e^{-2x}}{1+e^{-2x}} + \\dfrac{e^{2x}}{1+e^{2x}}$.</p>
                    <p>On a $\\dfrac{e^{-2x}}{1+e^{-2x}} = \\dfrac{1}{1+e^{2x}}$.</p>
                    <p>Donc $f(-x) + f(x) = \\dfrac{1}{1+e^{2x}} + \\dfrac{e^{2x}}{1+e^{2x}} = 1$.</p>
                    <p>Le point <strong>$I\\left(0, \\dfrac{1}{2}\\right)$ est un centre de symétrie</strong> de $(\\mathcal{C})$.</p>
                `
            },
            {
                id: 'p12q1d',
                texte: "I.1.d – Tangente en I.",
                solution: `
                    <p>$f(0) = \\dfrac{1}{1+1} = \\dfrac{1}{2}$.</p>
                    <p>$f'(0) = \\dfrac{2 \\cdot 1}{(1+1)^2} = \\dfrac{2}{4} = \\dfrac{1}{2}$.</p>
                    <p>Équation de la tangente $(T)$ en $I$ :</p>
                    $$ y = f(0) + f'(0)(x-0) = \\frac{1}{2} + \\frac{1}{2}x = \\frac{1}{2}(x+1). $$
                    <p>Donc <strong>$(T) : y = \\dfrac{1}{2}x + \\dfrac{1}{2}$</strong>.</p>
                `
            },
            {
                id: 'p12q2a',
                texte: "I.2.a – Inégalité f'(t) ≤ 1/2.",
                solution: `
                    <p>On a $f'(x) = \\dfrac{2e^{2x}}{(1+e^{2x})^2}$.</p>
                    <p>Posons $u = e^{2x} > 0$. Alors $f'(x) = \\dfrac{2u}{(1+u)^2}$.</p>
                    <p>Montrons que $\\dfrac{2u}{(1+u)^2} \\le \\dfrac{1}{2}$ pour tout $u>0$.</p>
                    <p>Cette inégalité équivaut à $4u \\le (1+u)^2$, soit $4u \\le 1 + 2u + u^2$, soit $0 \\le u^2 - 2u + 1 = (u-1)^2$, ce qui est toujours vrai.</p>
                    <p>Donc <strong>$f'(x) \\le \\dfrac{1}{2}$</strong> pour tout $x$, avec égalité en $u=1$ (i.e. $x=0$).</p>
                `
            },
            {
                id: 'p12q2b',
                texte: "I.2.b – Intégration et inégalité.",
                solution: `
                    <p>On a $f'(t) \\le \\dfrac{1}{2}$ pour tout $t$.</p>
                    <p>Intégrons de $0$ à $x$ (pour $x \\ge 0$) :</p>
                    $$ \\int_0^x f'(t)\\,dt \\le \\int_0^x \\dfrac{1}{2}\\,dt = \\dfrac{x}{2}. $$
                    <p>Soit $f(x) - f(0) \\le \\dfrac{x}{2}$.</p>
                    <p>Comme $f(0) = \\dfrac{1}{2}$, on a $f(x) - \\dfrac{1}{2} \\le \\dfrac{x}{2}$.</p>
                    <p>Donc <strong>$f(x) \\le \\dfrac{x}{2} + \\dfrac{1}{2} = \\dfrac{1}{2}(x+1)$</strong> pour $x \\ge 0$.</p>
                    <p>L'égalité a lieu en $x=0$ (tangence).</p>
                `
            },
            {
                id: 'p12q2c',
                texte: "I.2.c – Position relative de C et T.",
                solution: `
                    <p>On a $f(x) \\le \\dfrac{1}{2}(x+1)$ pour $x \\ge 0$.</p>
                    <p>Comme $T: y = \\dfrac{1}{2}x + \\dfrac{1}{2}$, on a $f(x) \\le T(x)$ pour $x \\ge 0$.</p>
                    <p>Donc pour $x \\ge 0$, $(\\mathcal{C})$ est <strong>en dessous</strong> de $(T)$.</p>
                    <p>Par symétrie par rapport à $I$ (centre de symétrie), pour $x \\le 0$, on a $f(x) \\ge T(x)$.</p>
                    <p>En $x=0$, $(\\mathcal{C})$ et $(T)$ se touchent (tangence).</p>
                    <p>En résumé :</p>
                    <ul>
                        <li>Pour $x < 0$ : $(\\mathcal{C})$ est <strong>au-dessus</strong> de $(T)$.</li>
                        <li>Pour $x = 0$ : tangence.</li>
                        <li>Pour $x > 0$ : $(\\mathcal{C})$ est <strong>en dessous</strong> de $(T)$.</li>
                    </ul>
                `
            },
            {
                id: 'p12q3',
                texte: "I.3 – Tracer T et C.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>$(\\mathcal{C})$ : strictement croissante de $0$ à $1$, avec centre de symétrie $I(0,1/2)$.</li>
                        <li>La tangente $(T) : y = \\dfrac{1}{2}x + \\dfrac{1}{2}$.</li>
                    </ul>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p12q4a',
                texte: "I.4.a – Bijection de f.",
                solution: `
                    <p>$f$ est continue et strictement croissante sur $\\mathbb{R}$.</p>
                    <p>Limites : $\\lim_{x\\to-\\infty} f(x) = 0$ et $\\lim_{x\\to+\\infty} f(x) = 1$.</p>
                    <p>Donc $f$ réalise une <strong>bijection</strong> de $\\mathbb{R}$ sur $]0,1[$.</p>
                `
            },
            {
                id: 'p12q4b',
                texte: "I.4.b – Expression de l'inverse.",
                solution: `
                    <p>Soit $y \\in ]0,1[$. Résolvons $f(x) = y$ :</p>
                    $$ \\dfrac{e^{2x}}{1+e^{2x}} = y \\iff e^{2x} = y(1+e^{2x}) \\iff e^{2x}(1-y) = y \\iff e^{2x} = \\dfrac{y}{1-y}. $$
                    <p>Donc $2x = \\ln\\left(\\dfrac{y}{1-y}\\right)$ ⇒ $x = \\dfrac{1}{2}\\ln\\left(\\dfrac{y}{1-y}\\right)$.</p>
                    <p>Donc <strong>$f^{-1}(y) = \\dfrac{1}{2}\\ln\\left(\\dfrac{y}{1-y}\\right)$</strong>.</p>
                `
            },
            {
                id: 'p12q4c',
                texte: "I.4.c – Représentation graphique de g.",
                solution: `
                    <p>$g(x) = \\dfrac{1}{2}\\ln\\left(\\dfrac{x}{1-x}\\right)$ pour $x\\in]0,1[$.</p>
                    <p>C'est la fonction réciproque de $f$. Sa courbe est le symétrique de $(\\mathcal{C})$ par rapport à la droite $y=x$.</p>
                    <p>Elle est définie sur $]0,1[$ et est strictement croissante.</p>
                    <p>Limites : $\\lim_{x\\to0^+} g(x) = -\\infty$, $\\lim_{x\\to1^-} g(x) = +\\infty$.</p>
                `
            },
            {
                id: 'p12q5a',
                texte: "II.1.a – Monotonie et positivité de I_n.",
                solution: `
                    <p>$I_n = \\displaystyle\\int_{-1}^{0} \\dfrac{e^{2nt}}{1+e^{2t}}\\, dt$.</p>
                    <p><strong>Positivité :</strong> L'intégrande est $\\dfrac{e^{2nt}}{1+e^{2t}} > 0$ sur $[-1,0]$, donc $I_n > 0$.</p>
                    <p><strong>Décroissance :</strong> Pour $t\\in[-1,0]$, $e^{2t} \\le 1$, donc $e^{2nt} = (e^{2t})^n$.</p>
                    <p>Comme $e^{2t} \\in [e^{-2}, 1] \\subset [0,1]$, la suite $n \\mapsto e^{2nt}$ est décroissante.</p>
                    <p>Donc $\\dfrac{e^{2nt}}{1+e^{2t}}$ est décroissante, et $I_n$ est décroissante.</p>
                `
            },
            {
                id: 'p12q5b',
                texte: "II.1.b – Convergence de I_n.",
                solution: `
                    <p>$I_n$ est décroissante et minorée par $0$ (positive).</p>
                    <p>Donc $(I_n)$ <strong>converge</strong> vers une limite $\\ell \\ge 0$.</p>
                `
            },
            {
                id: 'p12q6',
                texte: "II.2 – Majoration de I_n.",
                solution: `
                    <p>Pour $t\\in[-1,0]$, on a $e^{2t} \\ge e^{-2}$, donc $1+e^{2t} \\ge 1$.</p>
                    <p>Donc $\\dfrac{e^{2nt}}{1+e^{2t}} \\le e^{2nt}$.</p>
                    <p>Intégrons : $I_n \\le \\displaystyle\\int_{-1}^{0} e^{2nt}\\, dt = \\left[\\dfrac{e^{2nt}}{2n}\\right]_{-1}^{0} = \\dfrac{1 - e^{-2n}}{2n} \\le \\dfrac{1}{2n}$.</p>
                    <p>Donc <strong>$I_n \\le \\dfrac{1}{2n}$</strong>.</p>
                `
            },
            {
                id: 'p12q7',
                texte: "II.3 – Limite de I_n.",
                solution: `
                    <p>On a $0 \\le I_n \\le \\dfrac{1}{2n}$.</p>
                    <p>Quand $n\\to+\\infty$, $\\dfrac{1}{2n} \\to 0$.</p>
                    <p>Par le théorème des gendarmes, $\\lim_{n\\to+\\infty} I_n = 0$.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour le centre de symétrie, vérifier $f(-x)+f(x)=1$.</li>
                <li>La tangente en $I$ a pour pente $1/2$.</li>
                <li>Pour l'intégrale, majorer l'intégrande par $e^{2nt}$.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Oublier que $f$ est une bijection sur $]0,1[$ et non sur $[0,1]$.</li>
                <li>Confondre les inégalités pour l'encadrement de $f''$.</li>
                <li>Ne pas utiliser le théorème des gendarmes pour la limite de $I_n$.</li>
            </ul>
        `
    });

    console.log("✅ Problème 12 chargé.");
})();