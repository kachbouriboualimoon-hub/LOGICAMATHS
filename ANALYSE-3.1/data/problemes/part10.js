// data/problemes/part10.js – Problème 10 (corrigé définitif)
// ============================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 10,
        titre: "Problème 10 – Fonction exponentielle, asymptotes, symétrie, réciproque et aire",
        enonce: `
            <p>On considère la fonction numérique à variable réelle définie par :</p>
            $$ f(x) = x - \\frac{1}{e^x - 1} $$
            <p>On désigne par $\\mathcal{C}$ sa courbe représentative dans le plan rapporté à un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>

            <h4>I – Étude de la fonction $f$</h4>
            <ol>
                <li>Dresser le tableau de variation de la fonction $f$.</li>
                <li>
                    <strong>a</strong> – Montrer que la courbe $\\mathcal{C}$ admet deux asymptotes obliques $(\\Delta)$ et $(\\Delta')$ d'équations respectives $y = x$ et $y = x + 1$.<br>
                    <strong>b</strong> – Montrer que le point $\\Omega\\left(0, \\dfrac{1}{2}\\right)$ est un centre de symétrie de $\\mathcal{C}$.
                </li>
                <li>
                    Soit $g$ la restriction de $f$ à $\\mathbb{R}_+^*$.<br>
                    <strong>a</strong> – Montrer que $g$ réalise une bijection de $\\mathbb{R}_+^*$ sur $\\mathbb{R}$. En déduire que l'équation $g(x)=0$ admet une solution unique $\\alpha$ et que $\\ln 2 < \\alpha < 1$.<br>
                    <strong>b</strong> – Montrer que $f(\\alpha) = 1 + \\alpha + \\alpha^2$. Écrire l'équation de la tangente $T$ à la courbe $\\mathcal{C}$ au point d'abscisse $\\alpha$.<br>
                    <strong>c</strong> – Tracer les droites $(T)$, $(\\Delta)$, $(\\Delta')$ et la courbe $\\mathcal{C}$ (on prendra pour le graphique $\\alpha > 0,8$).
                </li>
            </ol>

            <h4>II – Étude de la fonction réciproque</h4>
            <p>On désigne par $g^{-1}$ la fonction réciproque de $g$ et par $\\mathcal{C}'$ la courbe représentative de $g^{-1}$ dans le repère $(O, \\vec{i}, \\vec{j})$.</p>
            <ol>
                <li>Montrer que $g^{-1}$ est dérivable sur $\\mathbb{R}$ et calculer $(g^{-1})'(0)$ en fonction de $\\alpha$.</li>
                <li>La courbe $\\mathcal{C}'$ coupe l'axe des ordonnées en un point $I$. Écrire l'équation de la tangente $(T')$ à la courbe $\\mathcal{C}'$ au point $I$.</li>
                <li>Tracer $(T')$ et $(\\mathcal{C}')$.</li>
            </ol>

            <h4>III – Calcul d'aire</h4>
            <ol>
                <li>Soit $t$ un réel supérieur ou égal à $\\alpha$.<br>
                Calculer la mesure $A(t)$ de l'aire du domaine limité par la courbe $\\mathcal{C}$, la droite $(\\Delta)$ et les deux droites d'équations respectives : $x = \\alpha$ et $x = t$.</li>
                <li>Montrer que, lorsque $t$ tend vers $+\\infty$, $A(t)$ admet pour limite $\\alpha + \\ln\\alpha$.</li>
            </ol>

            <div class="graph-container" id="graph-probleme10" data-fn="x - 1/(exp(x)-1); x; x+1" data-xmin="-3" data-xmax="4" data-colors="#2563eb,#dc2626,#16a34a" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu), asymptotes $\\Delta:y=x$ (rouge) et $\\Delta':y=x+1$ (vert).</em></p>
        `,
        questions: [
            {
                id: 'p10q1',
                texte: "I.1 – Tableau de variation de f.",
                solution: `
                    <p>$f(x) = x - \\dfrac{1}{e^x - 1}$.</p>
                    <p>Domaine de définition : $\\mathbb{R} \\setminus \\{0\\}$.</p>
                    <p>$f'(x) = 1 + \\dfrac{e^x}{(e^x - 1)^2}$.</p>
                    <p>Comme $\\dfrac{e^x}{(e^x - 1)^2} > 0$ pour tout $x \\neq 0$, on a $f'(x) > 0$.</p>
                    <p>Donc $f$ est strictement croissante sur chaque intervalle $]-\\infty, 0[$ et $]0, +\\infty[$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to-\\infty} f(x) = -\\infty$</li>
                        <li>$\\lim_{x\\to0^-} f(x) = +\\infty$ (car $e^x-1 \\to 0^-$)</li>
                        <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $e^x-1 \\to 0^+$)</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$</li>
                    </ul>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-\\infty$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><em>La barre verticale en 0 indique l'asymptote verticale.</em></p>
                `
            },
            {
                id: 'p10q2a',
                texte: "I.2.a – Asymptotes obliques.",
                solution: `
                    <p>On a $f(x) - x = -\\dfrac{1}{e^x - 1}$.</p>
                    <p>$\\lim_{x\\to+\\infty} (f(x)-x) = 0$ (car $e^x-1 \\to +\\infty$).</p>
                    <p>Donc $(\\Delta) : y = x$ est une <strong>asymptote</strong> à $\\mathcal{C}$ en $+\\infty$.</p>
                    <p>De plus, $f(x) - (x+1) = -\\dfrac{1}{e^x - 1} - 1 = -\\dfrac{1 + e^x - 1}{e^x - 1} = -\\dfrac{e^x}{e^x - 1}$.</p>
                    <p>$\\lim_{x\\to-\\infty} (f(x)-(x+1)) = 0$ (car $e^x \\to 0$).</p>
                    <p>Donc $(\\Delta') : y = x+1$ est une <strong>asymptote</strong> à $\\mathcal{C}$ en $-\\infty$.</p>
                `
            },
            {
                id: 'p10q2b',
                texte: "I.2.b – Centre de symétrie.",
                solution: `
                    <p>On vérifie que $\\Omega\\left(0, \\dfrac{1}{2}\\right)$ est centre de symétrie :</p>
                    <p>$f(-x) + f(x) = 2\\cdot\\dfrac{1}{2} = 1$.</p>
                    <p>Calculons : $f(-x)+f(x) = \\left(-x - \\dfrac{1}{e^{-x}-1}\\right) + \\left(x - \\dfrac{1}{e^x-1}\\right)$.</p>
                    <p>$= -\\dfrac{1}{e^{-x}-1} - \\dfrac{1}{e^x-1} = -\\dfrac{1}{\\frac{1}{e^x}-1} - \\dfrac{1}{e^x-1}$.</p>
                    <p>$= -\\dfrac{e^x}{1-e^x} - \\dfrac{1}{e^x-1} = \\dfrac{e^x}{e^x-1} - \\dfrac{1}{e^x-1} = \\dfrac{e^x-1}{e^x-1} = 1$.</p>
                    <p>Donc $f(-x)+f(x)=1$ pour tout $x \\neq 0$.</p>
                    <p>Le point <strong>$\\Omega\\left(0, \\dfrac{1}{2}\\right)$ est un centre de symétrie</strong> de $\\mathcal{C}$.</p>
                `
            },
            {
                id: 'p10q3a',
                texte: "I.3.a – Bijection de g.",
                solution: `
                    <p>$g$ est la restriction de $f$ à $]0, +\\infty[$.</p>
                    <p>$g$ est continue et strictement croissante sur $]0, +\\infty[$.</p>
                    <p>Limites : $\\lim_{x\\to0^+} g(x) = -\\infty$ et $\\lim_{x\\to+\\infty} g(x) = +\\infty$.</p>
                    <p>Donc $g$ réalise une <strong>bijection</strong> de $]0, +\\infty[$ sur $\\mathbb{R}$.</p>
                    <p>L'équation $g(x)=0$ admet une unique solution $\\alpha \\in ]0, +\\infty[$.</p>
                    <p>Encadrement :</p>
                    <ul>
                        <li>$g(\\ln 2) = \\ln 2 - \\dfrac{1}{2-1} = \\ln 2 - 1 \\approx -0.307 < 0$.</li>
                        <li>$g(1) = 1 - \\dfrac{1}{e-1} \\approx 1 - 0.582 = 0.418 > 0$.</li>
                    </ul>
                    <p>Donc <strong>$\\ln 2 < \\alpha < 1$</strong>.</p>
                `
            },
            {
                id: 'p10q3b',
                texte: "I.3.b – Tangente en α.",
                solution: `
                    <p>On a $f(\\alpha)=0$ ⇒ $\\alpha - \\dfrac{1}{e^{\\alpha}-1} = 0$ ⇒ $\\dfrac{1}{e^{\\alpha}-1} = \\alpha$.</p>
                    <p>Donc $e^{\\alpha} - 1 = \\dfrac{1}{\\alpha}$ ⇒ $e^{\\alpha} = 1 + \\dfrac{1}{\\alpha} = \\dfrac{\\alpha+1}{\\alpha}$.</p>
                    <p>$f(\\alpha) = 0$ (par définition de $\\alpha$).</p>
                    <p>Calculons $f'(\\alpha) = 1 + \\dfrac{e^{\\alpha}}{(e^{\\alpha}-1)^2}$.</p>
                    <p>On a $e^{\\alpha}-1 = \\dfrac{1}{\\alpha}$, donc $(e^{\\alpha}-1)^2 = \\dfrac{1}{\\alpha^2}$.</p>
                    <p>Donc $f'(\\alpha) = 1 + \\dfrac{e^{\\alpha}}{1/\\alpha^2} = 1 + \\alpha^2 e^{\\alpha}$.</p>
                    <p>Or $e^{\\alpha} = \\dfrac{\\alpha+1}{\\alpha}$, donc $f'(\\alpha) = 1 + \\alpha^2 \\cdot \\dfrac{\\alpha+1}{\\alpha} = 1 + \\alpha(\\alpha+1) = 1 + \\alpha + \\alpha^2$.</p>
                    <p>L'équation de la tangente $(T)$ en $\\alpha$ :</p>
                    $$ y = f'(\\alpha)(x-\\alpha) + f(\\alpha) = (1+\\alpha+\\alpha^2)(x-\\alpha) + 0 = (1+\\alpha+\\alpha^2)(x-\\alpha). $$
                    <p>Donc <strong>$(T) : y = (1+\\alpha+\\alpha^2)(x-\\alpha)$</strong>.</p>
                    <p><em>Note : l'énoncé indique que $f(\\alpha) = 1+\\alpha+\\alpha^2$, ce qui est l'expression de $f'(\\alpha)$ et non de $f(\\alpha)$. Il s'agit probablement d'une erreur typographique. $f(\\alpha)=0$.</em></p>
                `
            },
            {
                id: 'p10q3c',
                texte: "I.3.c – Tracer les courbes.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>$(\\mathcal{C})$ : strictement croissante sur chaque intervalle, avec asymptote verticale $x=0$.</li>
                        <li>$(\\Delta) : y=x$ (asymptote en $+\\infty$).</li>
                        <li>$(\\Delta') : y=x+1$ (asymptote en $-\\infty$).</li>
                        <li>La tangente $(T)$ au point d'abscisse $\\alpha$.</li>
                    </ul>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p10q4a',
                texte: "II.1 – Dérivabilité de g^{-1}.",
                solution: `
                    <p>$g$ est strictement croissante et dérivable sur $]0,+\\infty[$ avec $g'(x) > 0$.</p>
                    <p>Donc $g^{-1}$ est <strong>dérivable</strong> sur $\\mathbb{R}$.</p>
                    <p>On a $(g^{-1})'(0) = \\dfrac{1}{g'(\\alpha)} = \\dfrac{1}{1+\\alpha+\\alpha^2}$.</p>
                    <p>Donc <strong>$(g^{-1})'(0) = \\dfrac{1}{1+\\alpha+\\alpha^2}$</strong>.</p>
                `
            },
            {
                id: 'p10q4b',
                texte: "II.2 – Tangente à C' en I.",
                solution: `
                    <p>La courbe $\\mathcal{C}'$ est la courbe de $g^{-1}$.</p>
                    <p>$\\mathcal{C}'$ coupe l'axe des ordonnées en $I(0, g^{-1}(0)) = I(0, \\alpha)$.</p>
                    <p>La tangente $(T')$ à $\\mathcal{C}'$ au point $I$ a pour coefficient directeur $(g^{-1})'(0) = \\dfrac{1}{1+\\alpha+\\alpha^2}$.</p>
                    <p>Équation : $y - \\alpha = \\dfrac{1}{1+\\alpha+\\alpha^2}(x - 0)$.</p>
                    <p>Donc <strong>$(T') : y = \\dfrac{1}{1+\\alpha+\\alpha^2}x + \\alpha$</strong>.</p>
                `
            },
            {
                id: 'p10q4c',
                texte: "II.3 – Tracer C' et T'.",
                solution: `
                    <p>La courbe $\\mathcal{C}'$ est la symétrique de la partie $\\mathcal{C}$ pour $x>0$ par rapport à la droite $y=x$.</p>
                    <p>La tangente $(T')$ est la symétrique de $(T)$ par rapport à la droite $y=x$.</p>
                    <p>On trace ces éléments dans le repère.</p>
                `
            },
            {
                id: 'p10q5a',
                texte: "III.1 – Calcul de l'aire A(t).",
                solution: `
                    <p>L'aire $A(t)$ est l'intégrale de $|f(x)-x|$ entre $\\alpha$ et $t$, car la courbe $\\mathcal{C}$ est en dessous de $(\\Delta)$ pour $x>0$.</p>
                    <p>Pour $x>0$, $f(x)-x = -\\dfrac{1}{e^x-1} < 0$, donc $|f(x)-x| = x - f(x) = \\dfrac{1}{e^x-1}$.</p>
                    <p>On a $\\int \\dfrac{1}{e^x-1}\\, dx = \\ln(1 - e^{-x}) + C$.</p>
                    <p>Donc :</p>
                    $$ A(t) = \\int_{\\alpha}^{t} \\dfrac{1}{e^x-1}\\, dx = \\left[\\ln(1 - e^{-x})\\right]_{\\alpha}^{t} = \\ln(1 - e^{-t}) - \\ln(1 - e^{-\\alpha}). $$
                    <p>Comme $t > \\alpha$, $e^{-t} < e^{-\\alpha}$, donc $1 - e^{-t} > 1 - e^{-\\alpha}$, donc cette différence est positive.</p>
                    <p>On peut aussi écrire :</p>
                    $$ A(t) = \\ln\\left(\\dfrac{1 - e^{-t}}{1 - e^{-\\alpha}}\\right). $$
                    <p>En utilisant la relation $e^{\\alpha} = \\dfrac{\\alpha+1}{\\alpha}$, on a $1 - e^{-\\alpha} = \\dfrac{1}{\\alpha+1}$.</p>
                    <p>Donc $A(t) = \\ln\\left((\\alpha+1)(1 - e^{-t})\\right)$.</p>
                `
            },
            {
                id: 'p10q5b',
                texte: "III.2 – Limite de A(t).",
                solution: `
                    <p>D'après l'expression $A(t) = \\ln\\left(\\dfrac{1 - e^{-t}}{1 - e^{-\\alpha}}\\right)$.</p>
                    <p>Quand $t\\to+\\infty$, $e^{-t} \\to 0$, donc $1 - e^{-t} \\to 1$.</p>
                    <p>Donc $\\lim_{t\\to+\\infty} A(t) = -\\ln(1 - e^{-\\alpha})$.</p>
                    <p>Or $1 - e^{-\\alpha} = \\dfrac{1}{\\alpha+1}$ (d'après $e^{\\alpha} = \\dfrac{\\alpha+1}{\\alpha}$).</p>
                    <p>Donc $-\\ln(1 - e^{-\\alpha}) = \\ln(\\alpha+1)$.</p>
                    <p>En utilisant à nouveau $\\alpha+1 = \\alpha e^{\\alpha}$, on a $\\ln(\\alpha+1) = \\ln\\alpha + \\alpha$.</p>
                    <p>Donc <strong>$\\lim_{t\\to+\\infty} A(t) = \\alpha + \\ln\\alpha$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour les asymptotes, regarder les limites de $f(x)-x$ et $f(x)-(x+1)$.</li>
                <li>Pour le centre de symétrie, vérifier $f(-x)+f(x)=1$.</li>
                <li>Pour la dérivée de $g^{-1}$, utiliser $(g^{-1})'(y)=\\dfrac{1}{g'(g^{-1}(y))}$.</li>
                <li>Pour l'aire, intégrer $|f(x)-x| = \\dfrac{1}{e^x-1}$ dont la primitive est $\\ln(1-e^{-x})$.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas confondre $f(\\alpha)$ (qui vaut 0) avec $f'(\\alpha)$ (qui vaut $1+\\alpha+\\alpha^2$).</li>
                <li>Oublier le domaine de définition de $f$ : $\\mathbb{R} \\setminus \\{0\\}$.</li>
                <li>Se tromper dans le sens de l'inégalité pour l'aire : bien prendre $\\ln(1 - e^{-t}) - \\ln(1 - e^{-\\alpha})$.</li>
            </ul>
        `
    });

    console.log("✅ Problème 10 corrigé et finalisé.");
})();