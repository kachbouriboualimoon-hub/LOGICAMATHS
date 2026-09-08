// data/problemes/part6.js – Problème 6 (corrigé sans équivalents)
// =========================================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 6,
        titre: "Problème 6 – Fonction avec logarithme, asymptotes, réciproque et intégrales",
        enonce: `
            <p>Soit $f$ la fonction définie sur $[0, +\\infty[ \\setminus \\{e\\}$ par :</p>
            $$ f(x) = \\begin{cases}
                0 & \\text{si } x = 0 \\\\
                x + \\dfrac{1}{1 - \\ln x} & \\text{si } x > 0 \\text{ et } x \\neq e
            \\end{cases} $$
            <p>On désigne par $(\\mathcal{C})$ la courbe représentative de $f$ dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>

            <h4>A – Étude de la fonction $f$</h4>
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $f$ est continue à droite en $0$.<br>
                    <strong>b</strong> – Étudier la dérivabilité de $f$ à droite en $0$. Interpréter le résultat.<br>
                    <strong>c</strong> – Étudier la continuité et la dérivabilité de $f$ sur son domaine de définition.
                </li>
                <li>
                    <strong>a</strong> – Calculer $\\lim_{x \\to e^+} f(x)$ et $\\lim_{x \\to e^-} f(x)$. Interpréter le résultat.<br>
                    <strong>b</strong> – Montrer que la droite $\\Delta : y = x$ est une asymptote à $(\\mathcal{C})$ au voisinage de $+\\infty$.<br>
                    <strong>c</strong> – Étudier la position relative de $(\\mathcal{C})$ et $\\Delta$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que pour tout $x \\in ]0, +\\infty[ \\setminus \\{e\\}$, on a $f'(x) = 1 + \\dfrac{1}{x(1 - \\ln x)^2}$.<br>
                    <strong>b</strong> – Dresser le tableau de variation de $f$.<br>
                    <strong>c</strong> – Soit $g$ la restriction de $f$ à l’intervalle $[0, e[$.
                    <ul>
                        <li><strong>i</strong> – Montrer que $g$ admet une fonction réciproque définie sur un intervalle $J$ que l’on précisera.</li>
                        <li><strong>ii</strong> – Montrer que l’équation $g(x)=2$ admet une unique solution et que cette solution est $1$.</li>
                        <li><strong>iii</strong> – Montrer que $g^{-1}$ est dérivable en $2$ et déterminer $(g^{-1})'(2)$.</li>
                        <li><strong>iv</strong> – Étudier la dérivabilité de $g^{-1}$ à droite en $0$.</li>
                        <li><strong>v</strong> – Étudier la continuité et la dérivabilité de $g^{-1}$ sur $J$.</li>
                    </ul>
                    <strong>d</strong> – Montrer que pour tout $x \\in ]0, +\\infty[ \\setminus \\{e\\}$, on a :
                    $$ f''(x) = \\dfrac{-\\ln x - 1}{x^2(1 - \\ln x)^4}. $$
                    En déduire que la courbe de $f$ admet un unique point d’inflexion dont on précisera les coordonnées.<br>
                    <strong>e</strong> – Soit $a$ l’unique solution de l’équation $f(x)=0$ dans $]e, +\\infty[$.
                    <ul>
                        <li><strong>i</strong> – Montrer que $a \\in ]3, 4[$.</li>
                        <li><strong>ii</strong> – Donner une valeur approchée de $a$ à $0,1$ près par excès.</li>
                        <li><strong>iii</strong> – Préciser alors le signe de $f$.</li>
                    </ul>
                </li>
                <li>
                    <strong>a</strong> – Déterminer une équation de la tangente $D$ à $(\\mathcal{C})$ au point d’abscisse $1$.<br>
                    <strong>b</strong> – Soit $h$ la fonction définie sur $[0, +\\infty[$ par $h(x) = x\\ln x - x + 1$. Étudier le sens de variation de $h$ et en déduire le signe de $h(x)$.<br>
                    <strong>c</strong> – Déterminer la position relative de $(\\mathcal{C})$ et $D$.
                </li>
                <li>
                    <strong>a</strong> – Construire $\\Delta$, $D$ et $(\\mathcal{C})$.<br>
                    <strong>b</strong> – Tracer la courbe de $g^{-1}$.
                </li>
            </ol>

            <h4>B – Calcul intégral</h4>
            <p>On pose $J = \\displaystyle\\int_{1/2}^{1} x\\ln x\\, dx$.</p>
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $J = \\dfrac{\\ln 2}{8} - \\dfrac{3}{16}$.<br>
                    <strong>b</strong> – En déduire la valeur de $\\displaystyle\\int_{1/2}^{1} (x + 1 - x\\ln x)\\, dx$.
                </li>
                <li>
                    <strong>a</strong> – Montrer que pour tout $x \\in [\\frac{1}{2}, 1]$, on a $2x \\le f(x) \\le x + 1 - x\\ln x$.<br>
                    <strong>b</strong> – Soit $\\mathcal{A}$ l’aire de la partie du plan limitée par la courbe $\\mathcal{C}$, l’axe des abscisses et les droites d’équations respectives $x = \\frac{1}{2}$ et $x = 1$.<br>
                    Montrer que $\\dfrac{3}{4} \\le \\mathcal{A} \\le \\dfrac{17}{16} - \\dfrac{\\ln 2}{8}$.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme6" data-fn="x + 1/(1 - log(x)); x; 2*x" data-xmin="0.01" data-xmax="5" data-colors="#2563eb,#dc2626,#16a34a" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu), asymptote $\\Delta:y=x$ (rouge) et tangente $D:y=2x$ (vert).</em></p>
        `,
        questions: [
            {
                id: 'p6q1a',
                texte: "A-1.a – Continuité à droite en 0.",
                solution: `
                    <p>On a $f(0)=0$.</p>
                    <p>Pour $x>0$, $f(x) = x + \\dfrac{1}{1-\\ln x}$.</p>
                    <p>Quand $x\\to0^+$, $\\ln x \\to -\\infty$, donc $1-\\ln x \\to +\\infty$, et $\\dfrac{1}{1-\\ln x} \\to 0$.</p>
                    <p>Donc $\\lim_{x\\to0^+} f(x) = 0 = f(0)$.</p>
                    <p>Donc <strong>$f$ est continue à droite en 0</strong>.</p>
                `
            },
            {
                id: 'p6q1b',
                texte: "A-1.b – Dérivabilité à droite en 0.",
                solution: `
                    <p>Étudions le taux d’accroissement :</p>
                    $$ \\lim_{x\\to0^+} \\frac{f(x)-f(0)}{x} = \\lim_{x\\to0^+} \\frac{x + \\frac{1}{1-\\ln x}}{x} = \\lim_{x\\to0^+} \\left(1 + \\frac{1}{x(1-\\ln x)}\\right) $$
                    <p>Or, pour $x\\in]0,1[$, on a $\\ln x < 0$, donc $1-\\ln x > 1$.</p>
                    <p>De plus, on sait que $\\lim_{x\\to0^+} x\\ln x = 0$ (résultat classique, obtenu par exemple en posant $t = -\\ln x$).</p>
                    <p>Donc $x(1-\\ln x) = x - x\\ln x \\to 0^+$.</p>
                    <p>Par conséquent, $\\dfrac{1}{x(1-\\ln x)} \\to +\\infty$.</p>
                    <p>Ainsi la limite du taux d’accroissement est $+\\infty$.</p>
                    <p>Donc <strong>$f$ n’est pas dérivable à droite en 0</strong> ; la courbe admet une <strong>demi-tangente verticale</strong> en $O$.</p>
                `
            },
            {
                id: 'p6q1c',
                texte: "A-1.c – Continuité et dérivabilité sur le domaine.",
                solution: `
                    <p>Sur $]0,e[$ et $]e,+\\infty[$, $f$ est composée de fonctions continues et dérivables (fonction rationnelle, logarithme), donc $f$ est <strong>continue et dérivable</strong> sur chacun de ces intervalles.</p>
                    <p>En $e$, la fonction n’est pas définie, donc on n’étudie pas la continuité.</p>
                    <p>En $0$, on a montré qu’elle est continue à droite, mais non dérivable.</p>
                `
            },
            {
                id: 'p6q2a',
                texte: "A-2.a – Limites en e.",
                solution: `
                    <p>Quand $x\\to e^-$, $\\ln x \\to 1$ avec $\\ln x < 1$, donc $1-\\ln x \\to 0^+$.</p>
                    <p>D’où $\\dfrac{1}{1-\\ln x} \\to +\\infty$ et $f(x) \\to +\\infty$.</p>
                    <p>Quand $x\\to e^+$, $\\ln x > 1$, donc $1-\\ln x \\to 0^-$.</p>
                    <p>D’où $\\dfrac{1}{1-\\ln x} \\to -\\infty$ et $f(x) \\to -\\infty$.</p>
                    <p>Interprétation : la droite $x=e$ est une <strong>asymptote verticale</strong> à $(\\mathcal{C})$.</p>
                `
            },
            {
                id: 'p6q2b',
                texte: "A-2.b – Asymptote en +∞.",
                solution: `
                    <p>On a $f(x) - x = \\dfrac{1}{1-\\ln x}$.</p>
                    <p>Quand $x\\to +\\infty$, $\\ln x \\to +\\infty$, donc $1-\\ln x \\to -\\infty$ et $\\dfrac{1}{1-\\ln x} \\to 0$.</p>
                    <p>Donc $\\lim_{x\\to+\\infty} (f(x)-x) = 0$.</p>
                    <p>La droite $\\Delta : y = x$ est une <strong>asymptote oblique</strong> à $(\\mathcal{C})$ au voisinage de $+\\infty$.</p>
                `
            },
            {
                id: 'p6q2c',
                texte: "A-2.c – Position relative de C et Δ.",
                solution: `
                    <p>Étudions le signe de $f(x)-x = \\dfrac{1}{1-\\ln x}$.</p>
                    <ul>
                        <li>Si $0 < x < e$ : $1-\\ln x > 0$ donc $f(x)-x > 0$ : $(\\mathcal{C})$ est <strong>au-dessus</strong> de $\\Delta$.</li>
                        <li>Si $x > e$ : $1-\\ln x < 0$ donc $f(x)-x < 0$ : $(\\mathcal{C})$ est <strong>en dessous</strong> de $\\Delta$.</li>
                    </ul>
                `
            },
            {
                id: 'p6q3a',
                texte: "A-3.a – Dérivée de f.",
                solution: `
                    <p>Pour $x>0$, $x\\neq e$, on a $f(x) = x + (1-\\ln x)^{-1}$.</p>
                    <p>Dérivée : $f'(x) = 1 - (1-\\ln x)^{-2} \\cdot \\left(-\\dfrac{1}{x}\\right) = 1 + \\dfrac{1}{x(1-\\ln x)^2}$.</p>
                    <p>On vérifie bien la formule.</p>
                `
            },
            {
                id: 'p6q3b',
                texte: "A-3.b – Tableau de variation de f.",
                solution: `
                    <p>$f'(x) = 1 + \\dfrac{1}{x(1-\\ln x)^2} > 0$ pour tout $x>0$, $x\\neq e$.</p>
                    <p>Donc $f$ est <strong>strictement croissante</strong> sur chaque intervalle $]0,e[$ et $]e,+\\infty[$.</p>
                    <p>Limites : $\\lim_{x\\to0^+} f(x)=0$, $\\lim_{x\\to e^-} f(x)=+\\infty$, $\\lim_{x\\to e^+} f(x)=-\\infty$, $\\lim_{x\\to+\\infty} f(x)=+\\infty$.</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$e$</th>
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
                                        <span style="display:block; font-weight:600;">$0$</span>
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
                    <p><em>La barre verticale en $e$ indique l’asymptote verticale.</em></p>
                `
            },
            {
                id: 'p6q3ci',
                texte: "A-3.c.i – Bijection de g sur [0,e[.",
                solution: `
                    <p>$g$ est la restriction de $f$ à $[0,e[$.</p>
                    <p>$g$ est continue et strictement croissante sur $[0,e[$, avec $g(0)=0$ et $\\lim_{x\\to e^-} g(x)=+\\infty$.</p>
                    <p>Donc $g$ réalise une bijection de $[0,e[$ sur $J = [0, +\\infty[$.</p>
                `
            },
            {
                id: 'p6q3cii',
                texte: "A-3.c.ii – Équation g(x)=2.",
                solution: `
                    <p>On résout $g(x)=2$ ⇔ $x + \\dfrac{1}{1-\\ln x} = 2$.</p>
                    <p>Pour $x=1$ : $1 + \\dfrac{1}{1-0} = 2$, donc $x=1$ est solution.</p>
                    <p>Comme $g$ est bijective, cette solution est unique.</p>
                `
            },
            {
                id: 'p6q3ciii',
                texte: "A-3.c.iii – Dérivée de g^{-1} en 2.",
                solution: `
                    <p>On a $g(1)=2$ et $g'(1)=1+\\dfrac{1}{1\\cdot(1)^2}=2$.</p>
                    <p>$g'(1)\\neq 0$, donc $g^{-1}$ est dérivable en $2$ et</p>
                    $$ (g^{-1})'(2) = \\dfrac{1}{g'(1)} = \\dfrac{1}{2}. $$
                `
            },
            {
                id: 'p6q3civ',
                texte: "A-3.c.iv – Dérivabilité à droite de g^{-1} en 0.",
                solution: `
                    <p>$g(0)=0$. On a montré que $\\lim_{x\\to0^+} \\dfrac{g(x)-g(0)}{x} = +\\infty$.</p>
                    <p>Donc $g$ n'est pas dérivable à droite en 0 (taux infini).</p>
                    <p>Par conséquent, $g^{-1}$ admet une <strong>demi-tangente horizontale</strong> en 0, c'est-à-dire que $g^{-1}$ est dérivable à droite en 0 avec une dérivée nulle :</p>
                    $$ (g^{-1})'_d(0) = 0. $$
                `
            },
            {
                id: 'p6q3cv',
                texte: "A-3.c.v – Continuité et dérivabilité de g^{-1} sur J.",
                solution: `
                    <p>$g$ est continue et strictement monotone sur $[0,e[$, donc $g^{-1}$ est continue sur $J=[0,+\\infty[$.</p>
                    <p>Pour $y>0$, $g^{-1}(y) \\in ]0,e[$, et $g'(g^{-1}(y)) \\neq 0$, donc $g^{-1}$ est dérivable sur $]0,+\\infty[$.</p>
                    <p>En $y=0$, $g^{-1}$ n'est pas dérivable (mais dérivable à droite avec dérivée nulle).</p>
                `
            },
            {
                id: 'p6q3d',
                texte: "A-3.d – Dérivée seconde et point d'inflexion.",
                solution: `
                    <p>On admet la formule donnée par l'énoncé :</p>
                    $$ f''(x) = \\dfrac{-\\ln x - 1}{x^2(1-\\ln x)^4}. $$
                    <p>Étudions le signe de $f''$ sur $]0, +\\infty[ \\setminus \\{e\\}$.</p>
                    <p>Le dénominateur $x^2(1-\\ln x)^4$ est strictement positif pour tout $x \\neq e$.</p>
                    <p>Le signe de $f''$ est donc celui de $-\\ln x - 1$.</p>
                    <ul>
                        <li>$ -\\ln x - 1 > 0 \\iff \\ln x < -1 \\iff 0 < x < e^{-1}$.</li>
                        <li>$ -\\ln x - 1 < 0 \\iff \\ln x > -1 \\iff x > e^{-1}$.</li>
                        <li>En $x = e^{-1}$, $f''(x)=0$.</li>
                    </ul>
                    <p>Ainsi $f''$ s'annule en changeant de signe en $x_0 = e^{-1}$. C'est donc un <strong>point d'inflexion</strong>.</p>
                    <p>Coordonnées : $I\\left(e^{-1}, f(e^{-1})\\right)$ avec</p>
                    $$ f(e^{-1}) = e^{-1} + \\dfrac{1}{1 - \\ln(e^{-1})} = \\dfrac{1}{e} + \\dfrac{1}{1 + 1} = \\dfrac{1}{e} + \\dfrac{1}{2}. $$
                    <p>Donc <strong>$I\\left(\\dfrac{1}{e},\\ \\dfrac{1}{e} + \\dfrac{1}{2}\\right)$</strong> est l'unique point d'inflexion.</p>
                `
            },
            {
                id: 'p6q3ei',
                texte: "A-3.e.i – Existence de a dans ]3,4[.",
                solution: `
                    <p>L'équation $f(x)=0$ ⇔ $x + \\dfrac{1}{1-\\ln x} = 0$.</p>
                    <p>Pour $x>e$, $1-\\ln x < 0$, donc l'équation est possible.</p>
                    <p>On pose $\\phi(x) = x(\\ln x - 1)$. L'équation devient $\\phi(x) = 1$.</p>
                    <p>$\\phi$ est continue et strictement croissante sur $[e,+\\infty[$ (car $\\phi'(x)=\\ln x >0$ pour $x>e$).</p>
                    <p>$\\phi(e) = 0$ et $\\phi(4) = 4(\\ln 4 -1) \\approx 4(1.386-1) = 1.544 > 1$.</p>
                    <p>$\\phi(3) = 3(\\ln 3 -1) \\approx 3(1.098-1) = 0.294 < 1$.</p>
                    <p>Donc il existe une unique solution $a \\in ]3,4[$.</p>
                `
            },
            {
                id: 'p6q3eii',
                texte: "A-3.e.ii – Valeur approchée de a.",
                solution: `
                    <p>Par tâtonnement :</p>
                    <p>$\\phi(3.6) = 3.6(\\ln 3.6 -1) \\approx 3.6(1.2809-1) = 3.6 \\times 0.2809 = 1.0112 > 1$.</p>
                    <p>$\\phi(3.5) = 3.5(\\ln 3.5 -1) \\approx 3.5(1.2528-1) = 3.5 \\times 0.2528 = 0.8848 < 1$.</p>
                    <p>Donc $a \\in ]3.5, 3.6[$. Par excès à 0,1 près : <strong>$a \\approx 3.6$</strong>.</p>
                `
            },
            {
                id: 'p6q3eiii',
                texte: "A-3.e.iii – Signe de f.",
                solution: `
                    <p>D'après le tableau de variation :</p>
                    <ul>
                        <li>Sur $]0,e[$ : $f(x) > 0$.</li>
                        <li>Sur $]e,a[$ : $f$ est croissante et $f(a)=0$, donc $f(x) < 0$.</li>
                        <li>Sur $]a,+\\infty[$ : $f(x) > 0$.</li>
                    </ul>
                    <p>En $x=e$, $f$ n'est pas définie.</p>
                `
            },
            {
                id: 'p6q4a',
                texte: "A-4.a – Tangente D au point d'abscisse 1.",
                solution: `
                    <p>$f(1) = 1 + \\dfrac{1}{1-0} = 2$.</p>
                    <p>$f'(1) = 1 + \\dfrac{1}{1\\cdot(1)^2} = 2$.</p>
                    <p>L'équation de la tangente est :</p>
                    $$ y = f(1) + f'(1)(x-1) = 2 + 2(x-1) = 2x. $$
                    <p>Donc $D : y = 2x$.</p>
                `
            },
            {
                id: 'p6q4b',
                texte: "A-4.b – Étude de h et son signe.",
                solution: `
                    <p>$h(x) = x\\ln x - x + 1$.</p>
                    <p>$h'(x) = \\ln x$.</p>
                    <p>Signe de $h'$ :</p>
                    <ul>
                        <li>$\\ln x < 0$ sur $]0,1[$ ⇒ $h$ décroissante.</li>
                        <li>$\\ln x = 0$ en $x=1$.</li>
                        <li>$\\ln x > 0$ sur $]1,+\\infty[$ ⇒ $h$ croissante.</li>
                    </ul>
                    <p>$h(1) = 1\\cdot0 - 1 + 1 = 0$.</p>
                    <p>Donc $h$ admet un minimum en $x=1$ et $h(x) \\ge 0$ pour tout $x>0$.</p>
                `
            },
            {
                id: 'p6q4c',
                texte: "A-4.c – Position relative de C et D.",
                solution: `
                    <p>$f(x) - 2x = x + \\dfrac{1}{1-\\ln x} - 2x = \\dfrac{1}{1-\\ln x} - x = \\dfrac{1 - x(1-\\ln x)}{1-\\ln x} = \\dfrac{x\\ln x - x + 1}{1-\\ln x} = \\dfrac{h(x)}{1-\\ln x}$.</p>
                    <p>Comme $h(x) \\ge 0$, le signe de $f(x)-2x$ est celui de $\\dfrac{1}{1-\\ln x}$.</p>
                    <ul>
                        <li>Si $0 < x < e$ : $1-\\ln x > 0$ ⇒ $f(x)-2x > 0$ : $(\\mathcal{C})$ est <strong>au-dessus</strong> de $D$.</li>
                        <li>Si $x > e$ : $1-\\ln x < 0$ ⇒ $f(x)-2x < 0$ : $(\\mathcal{C})$ est <strong>en dessous</strong> de $D$.</li>
                    </ul>
                `
            },
            {
                id: 'p6q5a',
                texte: "A-5.a – Construction de Δ, D et C.",
                solution: `
                    <p>On trace :</p>
                    <ul>
                        <li>La droite $\\Delta : y=x$ (asymptote oblique).</li>
                        <li>La droite $D : y=2x$ (tangente au point d'abscisse 1).</li>
                        <li>La courbe $(\\mathcal{C})$ : croissante de (0,0) à l'asymptote verticale $x=e$ (avec $f\\to+\\infty$), puis de $-\\infty$ à $+\\infty$ avec asymptote $\\Delta$.</li>
                        <li>Les demi-tangentes en $O$ : verticale à droite (car $f'_d(0)=+\\infty$).</li>
                    </ul>
                    <p>Le graphique interactif ci-dessus illustre ces éléments.</p>
                `
            },
            {
                id: 'p6q5b',
                texte: "A-5.b – Tracer la courbe de g^{-1}.",
                solution: `
                    <p>La courbe de $g^{-1}$ est le symétrique de la courbe de $g$ par rapport à la droite $y=x$.</p>
                    <p>Comme $g$ est la restriction de $f$ à $[0,e[$, la courbe de $g^{-1}$ s'obtient en prenant la symétrique de la partie de $(\\mathcal{C})$ sur $[0,e[$.</p>
                    <p>Elle est définie sur $J=[0,+\\infty[$ et admet une demi-tangente horizontale en 0.</p>
                `
            },
            {
                id: 'p6qB1a',
                texte: "B-1.a – Calcul de J.",
                solution: `
                    <p>$J = \\displaystyle\\int_{1/2}^{1} x\\ln x\\, dx$.</p>
                    <p>Intégration par parties : $u=\\ln x$, $dv=x\\,dx$ ⇒ $du=\\frac{dx}{x}$, $v=\\frac{x^2}{2}$.</p>
                    $$ J = \\left[\\frac{x^2}{2}\\ln x\\right]_{1/2}^{1} - \\int_{1/2}^{1} \\frac{x^2}{2}\\cdot\\frac{dx}{x} = \\left(0 - \\frac{1}{8}\\ln\\frac{1}{2}\\right) - \\frac{1}{2}\\int_{1/2}^{1} x\\,dx $$
                    $$ J = \\frac{\\ln 2}{8} - \\frac{1}{2}\\left[\\frac{x^2}{2}\\right]_{1/2}^{1} = \\frac{\\ln 2}{8} - \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{8}\\right) = \\frac{\\ln 2}{8} - \\frac{1}{2}\\cdot\\frac{3}{8} = \\frac{\\ln 2}{8} - \\frac{3}{16}. $$
                `
            },
            {
                id: 'p6qB1b',
                texte: "B-1.b – Intégrale de x+1−x ln x.",
                solution: `
                    <p>On calcule $\\displaystyle\\int_{1/2}^{1} (x+1-x\\ln x)\\, dx$.</p>
                    $$ \\int_{1/2}^{1} x\\, dx + \\int_{1/2}^{1} 1\\, dx - \\int_{1/2}^{1} x\\ln x\\, dx = \\left[\\frac{x^2}{2}\\right]_{1/2}^{1} + [x]_{1/2}^{1} - J $$
                    $$ = \\left(\\frac{1}{2} - \\frac{1}{8}\\right) + \\left(1 - \\frac{1}{2}\\right) - \\left(\\frac{\\ln 2}{8} - \\frac{3}{16}\\right) = \\frac{3}{8} + \\frac{1}{2} - \\frac{\\ln 2}{8} + \\frac{3}{16} $$
                    $$ = \\frac{6}{16} + \\frac{8}{16} + \\frac{3}{16} - \\frac{\\ln 2}{8} = \\frac{17}{16} - \\frac{\\ln 2}{8}. $$
                `
            },
            {
                id: 'p6qB2a',
                texte: "B-2.a – Encadrement de f sur [1/2,1].",
                solution: `
                    <p>Pour $x \\in [1/2, 1]$ :</p>
                    <p><strong>Minoration :</strong> $f(x) - 2x = \\dfrac{h(x)}{1-\\ln x}$ avec $h(x)\\ge0$, donc $f(x) \\ge 2x$.</p>
                    <p><strong>Majoration :</strong> $f(x) - (x+1-x\\ln x) = x + \\dfrac{1}{1-\\ln x} - x - 1 + x\\ln x = \\dfrac{1}{1-\\ln x} - 1 + x\\ln x$.</p>
                    <p>Or $\\dfrac{1}{1-\\ln x} \\le 1$ (car $1-\\ln x \\ge 1$) et $x\\ln x \\le 0$, donc la différence est $\\le 0$. Ainsi $f(x) \\le x+1-x\\ln x$.</p>
                    <p>Donc <strong>$2x \\le f(x) \\le x+1-x\\ln x$</strong>.</p>
                `
            },
            {
                id: 'p6qB2b',
                texte: "B-2.b – Encadrement de l'aire A.",
                solution: `
                    <p>L'aire $\\mathcal{A}$ est $\\displaystyle\\int_{1/2}^{1} f(x)\\,dx$ (car $f(x)\\ge0$ sur cet intervalle).</p>
                    <p>En intégrant l'encadrement précédent :</p>
                    $$ \\int_{1/2}^{1} 2x\\, dx \\le \\mathcal{A} \\le \\int_{1/2}^{1} (x+1-x\\ln x)\\, dx $$
                    <p>On a $\\int_{1/2}^{1} 2x\\, dx = [x^2]_{1/2}^{1} = 1 - \\frac{1}{4} = \\frac{3}{4}$.</p>
                    <p>Et $\\int_{1/2}^{1} (x+1-x\\ln x)\\, dx = \\dfrac{17}{16} - \\dfrac{\\ln 2}{8}$.</p>
                    <p>Donc <strong>$\\dfrac{3}{4} \\le \\mathcal{A} \\le \\dfrac{17}{16} - \\dfrac{\\ln 2}{8}$</strong>.</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour les limites en e, repérer le signe de 1−ln x.</li>
                <li>La fonction h(x)=x ln x − x +1 est utile pour les positions relatives.</li>
                <li>Les intégrales se traitent par parties avec u=ln x.</li>
                <li>Pour le point d'inflexion, étudier le signe de f''.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas confondre les limites à gauche et à droite de e.</li>
                <li>Oublier que f n'est pas définie en e.</li>
                <li>Erreur dans l'intégration par parties pour J.</li>
            </ul>
        `
    });

    console.log("✅ Problème 6 corrigé (sans équivalents).");
})();