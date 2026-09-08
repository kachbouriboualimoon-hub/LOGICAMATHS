// data/problemes/part10.js – Problème 11 : Polynôme, triangle isocèle et valeurs trigonométriques (Page 9 du PDF)
// ==============================================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 11,
    titre: "Polynôme, factorisation, triangle isocèle et valeurs trigonométriques",
    enonce: `
        <p>Pour tout nombre complexe $z$, on définit :</p>
        $$P(z) = z^3 + 2(\\sqrt{2} - 1)z^2 + 4(1 - \\sqrt{2})z - 8$$

        <ol>
            <li><strong>1.a</strong> – Calculer $P(2)$.</li>
            <li><strong>1.b</strong> – Déterminer deux réels $a$ et $b$ tels que :
                $$P(z) = (z - 2)(z^2 + az + b)$$</li>
            <li><strong>2.</strong> – Résoudre dans $\\mathbb{C}$ l’équation $P(z) = 0$. On appelle $z_1$ et $z_2$ les solutions autres que $2$, $z_1$ étant celle ayant une partie imaginaire positive.<br>
                Vérifier que $z_1 + z_2 = -2\\sqrt{2}$.<br>
                Déterminer le module et un argument de $z_1$ et $z_2$.</li>
        </ol>

        <!-- Figure canvas pour placer les points -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="probleme11_points" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Repère orthonormé – points A(2), B($z_1$), C($z_2$), I milieu de [AB].
            </figcaption>
        </figure>

        <ol start="3">
            <li><strong>3.a</strong> – Placer dans le plan, muni d’un repère orthonormé direct $(O;\\vec{u},\\vec{v})$, les points $A$ d’affixe $2$, $B$ et $C$ d’affixes respectives $z_1$ et $z_2$, et $I$ le milieu de $[AB]$.</li>
            <li><strong>3.b</strong> – Démontrer que le triangle $OAB$ est isocèle direct. En déduire une mesure de l’angle $(\\vec{u}, \\overrightarrow{OI})$.</li>
            <li><strong>3.c</strong> – Calculer l’affixe $z_I$ de $I$, puis le module de $z_I$.</li>
            <li><strong>3.d</strong> – Déduire des résultats précédents les valeurs exactes de $\\cos\\left(\\frac{3\\pi}{8}\\right)$ et $\\sin\\left(\\frac{3\\pi}{8}\\right)$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Factorisation :</strong> Identifier les coefficients en développant $(z-2)(z^2+az+b)$ et en les comparant avec ceux de $P(z)$.</li>
            <li><strong>Équation du second degré :</strong> Pour $z^2+2\\sqrt{2}z+4=0$, le discriminant est $\Delta = (2\\sqrt{2})^2 - 16 = -8$. Les racines sont $\dfrac{-2\\sqrt{2} \pm i\sqrt{8}}{2}$.</li>
            <li><strong>Module et argument :</strong> Pour $z_1 = -\\sqrt{2} + i\\sqrt{2}$, on a $|z_1| = \\sqrt{2+2}=2$ et $\arg(z_1) = \\frac{3\\pi}{4}$ (car $\cos = -\\frac{\\sqrt2}{2}$, $\sin = \\frac{\\sqrt2}{2}$).</li>
            <li><strong>Triangle isocèle direct :</strong> $OA = OB$ (même module) et l’angle orienté $\widehat{AOB} = \arg(z_B) - \arg(z_A) = \\frac{3\\pi}{4} \in (0,\\pi)$, donc le triangle est direct.</li>
            <li><strong>Médiane et bissectrice :</strong> Dans un triangle isocèle, la médiane issue du sommet principal est aussi bissectrice. Ainsi $\arg(z_I) = \\frac{1}{2}\arg(z_1)$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $2$ est racine et ne pas le factoriser.</li>
            <li>Dans la résolution de $z^2+2\\sqrt{2}z+4=0$, confondre le discriminant avec $(2\\sqrt{2})^2 = 8$ au lieu de $8-16=-8$.</li>
            <li>Pour $z_2$, donner un argument erroné (par exemple $\\pi/4$ au lieu de $5\\pi/4$).</li>
            <li>Dans le triangle $OAB$, ne pas vérifier que les deux côtés $OA$ et $OB$ sont égaux avant de conclure.</li>
            <li>Pour les valeurs de $\cos(3\\pi/8)$ et $\sin(3\\pi/8)$, ne pas simplifier correctement les expressions issues des coordonnées de $I$.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob11-q1a',
            texte: '1.a – Calculer $P(2)$.',
            solution: `
                <p>On remplace $z$ par $2$ dans l’expression de $P$ :</p>
                $$P(2) = 2^3 + 2(\\sqrt{2}-1)\\cdot 2^2 + 4(1-\\sqrt{2})\\cdot 2 - 8$$
                $$= 8 + 8(\\sqrt{2}-1) + 8(1-\\sqrt{2}) - 8$$
                $$= 8 + 8\\sqrt{2} - 8 + 8 - 8\\sqrt{2} - 8 = 0.$$
                <p>Donc $\\boxed{P(2)=0}$.</p>
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob11-q1b',
            texte: '1.b – Déterminer $a$ et $b$ tels que $P(z) = (z-2)(z^2+az+b)$.',
            solution: `
                <p>Développons $(z-2)(z^2+az+b)$ :</p>
                $$(z-2)(z^2+az+b) = z^3 + az^2 + bz - 2z^2 - 2az - 2b$$
                $$= z^3 + (a-2)z^2 + (b-2a)z - 2b.$$
                <p>Identifions avec $P(z)$ :</p>
                $$
                \\begin{cases}
                a-2 = 2(\\sqrt{2}-1) \\\\[4pt]
                b-2a = 4(1-\\sqrt{2}) \\\\[4pt]
                -2b = -8
                \\end{cases}
                $$
                <p>De la première : $a = 2(\\sqrt{2}-1) + 2 = 2\\sqrt{2}$.</p>
                <p>De la troisième : $b = 4$.</p>
                <p>Vérifions la deuxième : $b-2a = 4 - 4\\sqrt{2} = 4(1-\\sqrt{2})$, c’est bien vérifié.</p>
                <p>Donc $\\boxed{a = 2\\sqrt{2},\\quad b = 4}$ et</p>
                $$\\boxed{P(z) = (z-2)(z^2+2\\sqrt{2}z+4)}$$
            `
        },

        // ========== Question 2 ==========
        {
            id: 'prob11-q2',
            texte: '2. – Résoudre $P(z)=0$, donner $z_1$ et $z_2$, vérifier $z_1+z_2 = -2\\sqrt{2}$, donner module et argument.',
            solution: `
                <p>D’après 1.b, $P(z)=0 \\iff (z-2)(z^2+2\\sqrt{2}z+4)=0$.</p>
                <p>Donc $z=2$ ou $z^2+2\\sqrt{2}z+4=0$.</p>
                <p>Résolvons l’équation du second degré :</p>
                $$\\Delta = (2\\sqrt{2})^2 - 4\\cdot 1\\cdot 4 = 8 - 16 = -8 = (2i\\sqrt{2})^2.$$
                <p>Les racines sont :</p>
                $$z = \\frac{-2\\sqrt{2} \\pm 2i\\sqrt{2}}{2} = -\\sqrt{2} \\pm i\\sqrt{2}.$$
                <p>Ainsi les deux solutions autres que $2$ sont :</p>
                $$z_1 = -\\sqrt{2} + i\\sqrt{2} \\quad\\text{(partie imaginaire positive)},\\qquad z_2 = -\\sqrt{2} - i\\sqrt{2}.$$
                <p>Vérifions la somme :</p>
                $$z_1 + z_2 = (-\\sqrt{2} + i\\sqrt{2}) + (-\\sqrt{2} - i\\sqrt{2}) = -2\\sqrt{2}.$$
                <p><strong>Module et argument :</strong></p>
                <p>Pour $z_1$ : $|z_1| = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{2+2} = 2$.</p>
                <p>On écrit $z_1 = 2\\left(-\\dfrac{\\sqrt{2}}{2} + i\\dfrac{\\sqrt{2}}{2}\\right) = 2\\left(\\cos\\dfrac{3\\pi}{4} + i\\sin\\dfrac{3\\pi}{4}\\right)$.</p>
                <p>Donc $\\arg(z_1) \\equiv \\dfrac{3\\pi}{4} \\pmod{2\\pi}$.</p>
                <p>Pour $z_2$ : $|z_2| = 2$ et $\\arg(z_2) \\equiv \\dfrac{5\\pi}{4} \\pmod{2\\pi}$ (ou $-3\\pi/4$).</p>
                $$\\boxed{z_1 = 2e^{i3\\pi/4},\\quad z_2 = 2e^{i5\\pi/4}}$$
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob11-q3a',
            texte: '3.a – Placer les points A, B, C et I.',
            solution: `
                <p>Dans le repère $(O;\\vec{u},\\vec{v})$ :</p>
                <ul>
                    <li>$A$ a pour affixe $2$, donc coordonnées $(2,0)$.</li>
                    <li>$B$ a pour affixe $z_1 = -\\sqrt{2} + i\\sqrt{2}$, donc coordonnées $(-\\sqrt{2},\\sqrt{2})$.</li>
                    <li>$C$ a pour affixe $z_2 = -\\sqrt{2} - i\\sqrt{2}$, donc coordonnées $(-\\sqrt{2},-\\sqrt{2})$.</li>
                    <li>$I$ est le milieu de $[AB]$, ses coordonnées sont :</li>
                </ul>
                $$x_I = \\frac{2 + (-\\sqrt{2})}{2} = \\frac{2-\\sqrt{2}}{2},\\qquad y_I = \\frac{0 + \\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}.$$
                <p>Placer ces points sur la figure fournie.</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob11-q3b',
            texte: '3.b – Démontrer que $OAB$ est isocèle direct et en déduire l’angle $(\\vec{u},\\overrightarrow{OI})$.',
            solution: `
                <p>On a $OA = |z_A| = |2| = 2$ et $OB = |z_1| = 2$ (question 2). Donc $OA = OB$ : le triangle est isocèle en $O$.</p>
                <p>De plus, l’angle orienté $\\widehat{AOB} = \\arg(z_1) - \\arg(z_A) = \\dfrac{3\\pi}{4} - 0 = \\dfrac{3\\pi}{4}$.</p>
                <p>Puisque $0 < \\dfrac{3\\pi}{4} < \\pi$, le triangle est direct (l’angle est positif et inférieur à $\\pi$).</p>
                <p>Dans un triangle isocèle, la médiane issue du sommet principal est aussi bissectrice de l’angle au sommet. Ici $O$ est le sommet principal, $I$ est le milieu de $[AB]$, donc $(OI)$ est la bissectrice de $\\widehat{AOB}$.</p>
                <p>Ainsi l’angle $(\\vec{u}, \\overrightarrow{OI})$ est la moitié de l’angle $(\\vec{u}, \\overrightarrow{OB})$ (puisque $\\overrightarrow{OA}$ est porté par l’axe des abscisses).</p>
                <p>Donc $\\arg(z_I) = \\dfrac{1}{2}\\arg(z_1) = \\dfrac{3\\pi}{8}$.</p>
                $$\\boxed{(\\vec{u}, \\overrightarrow{OI}) \\equiv \\dfrac{3\\pi}{8} \\pmod{2\\pi}}$$
            `
        },

        // ========== Question 3.c ==========
        {
            id: 'prob11-q3c',
            texte: '3.c – Calculer l’affixe $z_I$ de $I$, puis $|z_I|$.',
            solution: `
                <p>$I$ est le milieu de $[AB]$, donc :</p>
                $$z_I = \\frac{z_A + z_B}{2} = \\frac{2 + (-\\sqrt{2} + i\\sqrt{2})}{2} = \\frac{2-\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}.$$
                <p>Soit $\\boxed{z_I = \\dfrac{2-\\sqrt{2}}{2} + i\\dfrac{\\sqrt{2}}{2}}$.</p>
                <p>Calculons son module :</p>
                $$|z_I|^2 = \\left(\\frac{2-\\sqrt{2}}{2}\\right)^2 + \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{(2-\\sqrt{2})^2}{4} + \\frac{2}{4} = \\frac{4 - 4\\sqrt{2} + 2 + 2}{4} = \\frac{8 - 4\\sqrt{2}}{4} = 2 - \\sqrt{2}.$$
                <p>Donc $$\\boxed{|z_I| = \\sqrt{2-\\sqrt{2}}}$$</p>
                <p>On peut aussi remarquer que $|z_I| = \\sqrt{2-\\sqrt{2}}$, positif.</p>
            `
        },

        // ========== Question 3.d ==========
        {
            id: 'prob11-q3d',
            texte: '3.d – Déduire les valeurs exactes de $\\cos(3\\pi/8)$ et $\\sin(3\\pi/8)$.',
            solution: `
                <p>D’après 3.b, $\\arg(z_I) = \\dfrac{3\\pi}{8}$ et d’après 3.c, $|z_I| = \\sqrt{2-\\sqrt{2}}$.</p>
                <p>Donc on peut écrire $z_I = |z_I| \\left(\\cos\\frac{3\\pi}{8} + i\\sin\\frac{3\\pi}{8}\\right)$.</p>
                <p>En égalant avec l’expression de $z_I$ trouvée en 3.c :</p>
                $$\\frac{2-\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2} = \\sqrt{2-\\sqrt{2}}\\left(\\cos\\frac{3\\pi}{8} + i\\sin\\frac{3\\pi}{8}\\right).$$
                <p>Donc, en prenant les parties réelle et imaginaire :</p>
                $$\\cos\\frac{3\\pi}{8} = \\frac{\\frac{2-\\sqrt{2}}{2}}{\\sqrt{2-\\sqrt{2}}}
                = \\frac{2-\\sqrt{2}}{2\\sqrt{2-\\sqrt{2}}}.$$
                <p>Posons $t = \\sqrt{2-\\sqrt{2}}$ ; alors $t^2 = 2-\\sqrt{2}$ et $\\dfrac{2-\\sqrt{2}}{2} = \\dfrac{t^2}{2}$.</p>
                <p>Donc $$\\cos\\frac{3\\pi}{8} = \\frac{t^2/2}{t} = \\frac{t}{2} = \\frac{\\sqrt{2-\\sqrt{2}}}{2}.$$</p>
                <p>De même pour le sinus :</p>
                $$\\sin\\frac{3\\pi}{8} = \\frac{\\frac{\\sqrt{2}}{2}}{\\sqrt{2-\\sqrt{2}}}
                = \\frac{\\sqrt{2}}{2\\sqrt{2-\\sqrt{2}}}.$$
                <p>Multiplions numérateur et dénominateur par $\\sqrt{2+\\sqrt{2}}$ :</p>
                $$\\sin\\frac{3\\pi}{8} = \\frac{\\sqrt{2}\\,\\sqrt{2+\\sqrt{2}}}{2\\sqrt{(2-\\sqrt{2})(2+\\sqrt{2})}}
                = \\frac{\\sqrt{2}\\,\\sqrt{2+\\sqrt{2}}}{2\\sqrt{4-2}}
                = \\frac{\\sqrt{2}\\,\\sqrt{2+\\sqrt{2}}}{2\\sqrt{2}}
                = \\frac{\\sqrt{2+\\sqrt{2}}}{2}.$$
                <p>Ainsi :</p>
                $$\\boxed{\\cos\\frac{3\\pi}{8} = \\frac{\\sqrt{2-\\sqrt{2}}}{2},\\qquad
                \\sin\\frac{3\\pi}{8} = \\frac{\\sqrt{2+\\sqrt{2}}}{2}}$$
            `
        }
    ]
});