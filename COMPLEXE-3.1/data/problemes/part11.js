// data/problemes/part11.js – Problème 12 : Cercle, triangle rectangle, racine carrée, tangence (Page 10 du PDF)
// =============================================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 12,
    titre: "Cercle, triangle rectangle, racine carrée et tangence",
    enonce: `
        <p>Le plan est rapporté à un repère orthonormé direct $(O, \\vec{u}, \\vec{v})$.</p>

        <p>On considère les points $F$, $G$ et $I$ d’affixes respectives :</p>
        $$z_F = \\left( 1 + \\frac{\\sqrt{3}}{2} \\right) i, \\quad z_G = \\frac{\\sqrt{3} - 1}{2} + \\frac{1}{2} i \\quad \\text{et} \\quad z_I = -\\frac{1}{2} + i.$$

        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="cercle_IFG" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $(\\zeta)$ de centre I et rayon 1 – points F, G, K, L, D.
            </figcaption>
        </figure>

        <ol>
            <li><strong>1.a</strong> – Vérifier que $z_F - z_I = \\frac{1}{2} + i \\frac{\\sqrt{3}}{2}$ et $z_G - z_I = \\frac{\\sqrt{3}}{2} - \\frac{1}{2} i$.</li>
            <li><strong>1.b</strong> – Montrer que F et G appartiennent au cercle $(\\zeta)$ de centre I et de rayon 1.</li>
            <li><strong>1.c</strong> – Vérifier que $z_F - z_I = i (z_G - z_I)$. En déduire que le triangle $IFG$ est rectangle en I.</li>
            <li><strong>2.</strong> – Dans la figure ci‑dessus, construire les points F et G.</li>
            <li><strong>3.a</strong> – Vérifier que $(2 + 2\\sqrt{3}) i$ est une racine carrée de $-16 - 8\\sqrt{3}$.</li>
            <li><strong>3.b</strong> – Résoudre dans $\\mathbb{C}$ l’équation : $z^2 + 3z + \\frac{25}{4} + 2\\sqrt{3} = 0$.</li>
            <li><strong>4.a</strong> – Soient K et L les points d’affixes respectives $z_K = -\\frac{3}{2} + i(1+\\sqrt{3})$ et $z_L = \\overline{z_K}$.<br>
                Montrer que $\\dfrac{z_K - z_F}{z_F - z_I} = i\\sqrt{3}$. En déduire que $(FK) \\perp (FI)$.</li>
            <li><strong>4.b</strong> – Construire K et L.</li>
            <li><strong>4.c</strong> – Vérifier que $z_G - z_L = (2+\\sqrt{3})\\,(z_F - z_I)$. En déduire que $(GL) \\parallel (FI)$.</li>
            <li><strong>4.d</strong> – Les droites $(FK)$ et $(GL)$ se coupent en un point $D$. Montrer que le cercle $(\\zeta)$ est inscrit dans le triangle $DKL$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Appartenance à un cercle :</strong> $M\\in\\mathcal{C}(I,r) \\iff |z_M - z_I| = r$.</li>
            <li><strong>Angle droit :</strong> $(IM) \\perp (IN) \\iff \\dfrac{z_M - z_I}{z_N - z_I}$ est un imaginaire pur non nul.</li>
            <li><strong>Racine carrée :</strong> Pour trouver $\\sqrt{\\Delta}$, on cherche un nombre complexe $w$ tel que $w^2 = \\Delta$.</li>
            <li><strong>Parallélisme :</strong> $(AB) \\parallel (CD) \\iff \\dfrac{z_B - z_A}{z_D - z_C} \\in \\mathbb{R}^*$.</li>
            <li><strong>Tangence :</strong> Un cercle est tangent à une droite si la distance du centre à la droite est égale au rayon.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Dans 1.a, ne pas simplifier correctement les parties réelle et imaginaire.</li>
            <li>Pour 1.c, oublier que multiplier par $i$ correspond à une rotation de $\\pi/2$.</li>
            <li>Dans 3.b, confondre la racine carrée avec son opposé.</li>
            <li>Pour 4.a, mal calculer le rapport et ne pas reconnaître l’imaginaire pur.</li>
            <li>Pour 4.d, ne pas justifier proprement que la distance de I à KL est 1.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob12-q1a',
            texte: '1.a – Vérifier les deux différences d’affixes.',
            solution: `
                <p>Calculons $z_F - z_I$ :</p>
                $$z_F - z_I = \\left(1 + \\frac{\\sqrt{3}}{2}\\right)i - \\left(-\\frac12 + i\\right) = \\frac12 + i\\frac{\\sqrt{3}}{2}.$$
                <p>Calculons $z_G - z_I$ :</p>
                $$z_G - z_I = \\left(\\frac{\\sqrt{3}-1}{2} + \\frac12 i\\right) - \\left(-\\frac12 + i\\right) = \\frac{\\sqrt{3}}{2} - \\frac12 i.$$
                <p>Les deux égalités sont vérifiées.</p>
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob12-q1b',
            texte: '1.b – Montrer que F et G appartiennent au cercle de centre I et rayon 1.',
            solution: `
                <p>Il suffit de calculer les modules des différences trouvées en 1.a :</p>
                $$|z_F - z_I| = \\left|\\frac12 + i\\frac{\\sqrt{3}}{2}\\right| = \\sqrt{\\frac14 + \\frac34} = 1.$$
                $$|z_G - z_I| = \\left|\\frac{\\sqrt{3}}{2} - \\frac12 i\\right| = \\sqrt{\\frac34 + \\frac14} = 1.$$
                <p>Donc $F$ et $G$ sont à la distance 1 de $I$ : ils appartiennent au cercle $(\\zeta)$ de centre I et rayon 1.</p>
            `
        },

        // ========== Question 1.c ==========
        {
            id: 'prob12-q1c',
            texte: '1.c – Vérifier $z_F - z_I = i(z_G - z_I)$ et en déduire que $IFG$ est rectangle en I.',
            solution: `
                <p>Calculons $i(z_G - z_I)$ :</p>
                $$i\\left(\\frac{\\sqrt{3}}{2} - \\frac12 i\\right) = i\\frac{\\sqrt{3}}{2} - i^2\\frac12 = \\frac12 + i\\frac{\\sqrt{3}}{2} = z_F - z_I.$$
                <p>L’égalité est vérifiée.</p>
                <p>On a donc $\\dfrac{z_F - z_I}{z_G - z_I} = i$, qui est un imaginaire pur. Par conséquent, les vecteurs $\\overrightarrow{IF}$ et $\\overrightarrow{IG}$ sont orthogonaux : le triangle $IFG$ est rectangle en $I$.</p>
            `
        },

        // ========== Question 2 ==========
        {
            id: 'prob12-q2',
            texte: '2. – Construire les points F et G sur la figure.',
            solution: `
                <p>Sur le cercle $(\\zeta)$ de centre I et de rayon 1, placer F tel que $\\overrightarrow{IF}$ ait pour affixe $\\frac12 + i\\frac{\\sqrt{3}}{2}$ (c’est‑à‑dire un vecteur de norme 1 faisant un angle $\\pi/3$ avec l’axe réel).</p>
                <p>Placer G tel que $\\overrightarrow{IG}$ ait pour affixe $\\frac{\\sqrt{3}}{2} - \\frac12 i$ (vecteur de norme 1 faisant un angle $-\\pi/6$ avec l’axe réel).</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob12-q3a',
            texte: '3.a – Vérifier que $(2+2\\sqrt{3})i$ est une racine carrée de $-16-8\\sqrt{3}$.',
            solution: `
                <p>Calculons le carré :</p>
                $$\\big((2+2\\sqrt{3})i\\big)^2 = (2+2\\sqrt{3})^2 \\, i^2 = -(2+2\\sqrt{3})^2.$$
                <p>Or $(2+2\\sqrt{3})^2 = 4 + 8\\sqrt{3} + 12 = 16 + 8\\sqrt{3}$.</p>
                <p>Donc le carré vaut $-16 - 8\\sqrt{3}$, ce qui est bien le nombre demandé.</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob12-q3b',
            texte: '3.b – Résoudre $z^2 + 3z + \\frac{25}{4} + 2\\sqrt{3} = 0$.',
            solution: `
                <p>Le discriminant est :</p>
                $$\\Delta = 3^2 - 4\\left(\\frac{25}{4} + 2\\sqrt{3}\\right) = 9 - 25 - 8\\sqrt{3} = -16 - 8\\sqrt{3}.$$
                <p>D’après 3.a, $\\delta = \\pm (2+2\\sqrt{3})i$.</p>
                <p>Les racines sont donc :</p>
                $$z = \\frac{-3 \\pm (2+2\\sqrt{3})i}{2} = -\\frac32 \\pm i(1+\\sqrt{3}).$$
                <p>On reconnaît les affixes de K et de L (avec le signe $-$ pour L).</p>
                $$\\boxed{z_1 = -\\frac32 + i(1+\\sqrt{3}),\\quad z_2 = -\\frac32 - i(1+\\sqrt{3})}$$
            `
        },

        // ========== Question 4.a ==========
        {
            id: 'prob12-q4a',
            texte: '4.a – Montrer que $\\dfrac{z_K - z_F}{z_F - z_I} = i\\sqrt{3}$ et en déduire $(FK)\\perp(FI)$.',
            solution: `
                <p>Calculons $z_K - z_F$ :</p>
                $$z_K - z_F = \\left(-\\frac32 + i(1+\\sqrt{3})\\right) - i\\left(1+\\frac{\\sqrt{3}}{2}\\right) = -\\frac32 + i\\frac{\\sqrt{3}}{2}.$$
                <p>On a vu en 1.a que $z_F - z_I = \\frac12 + i\\frac{\\sqrt{3}}{2}$.</p>
                <p>Vérifions que $i\\sqrt{3}\\,(z_F - z_I)$ donne bien $z_K - z_F$ :</p>
                $$i\\sqrt{3}\\left(\\frac12 + i\\frac{\\sqrt{3}}{2}\\right) = i\\frac{\\sqrt{3}}{2} + i^2\\frac{3}{2} = -\\frac32 + i\\frac{\\sqrt{3}}{2}.$$
                <p>C’est bien le résultat.</p>
                <p>Le rapport vaut $i\\sqrt{3}$, imaginaire pur non nul, donc les vecteurs $\\overrightarrow{FK}$ et $\\overrightarrow{FI}$ sont orthogonaux. On a bien $(FK)\\perp(FI)$.</p>
            `
        },

        // ========== Question 4.b ==========
        {
            id: 'prob12-q4b',
            texte: '4.b – Construire K et L.',
            solution: `
                <p>K a pour affixe $-\\frac32 + i(1+\\sqrt{3})$, donc ses coordonnées sont $\\left(-\\frac32,\\,1+\\sqrt{3}\\right)$.</p>
                <p>L est le conjugué de K, donc $z_L = -\\frac32 - i(1+\\sqrt{3})$, coordonnées $\\left(-\\frac32,\\,-1-\\sqrt{3}\\right)$.</p>
                <p>Placer ces points sur la figure.</p>
            `
        },

        // ========== Question 4.c ==========
        {
            id: 'prob12-q4c',
            texte: '4.c – Vérifier $z_G - z_L = (2+\\sqrt{3})(z_F - z_I)$ et en déduire $(GL) \\parallel (FI)$.',
            solution: `
                <p>Calculons $z_G - z_L$ :</p>
                $$z_G - z_L = \\left(\\frac{\\sqrt{3}-1}{2} + \\frac12 i\\right) - \\left(-\\frac32 - i(1+\\sqrt{3})\\right) = \\frac{\\sqrt{3}+2}{2} + i\\left(\\frac32 + \\sqrt{3}\\right).$$
                <p>D’autre part, $(2+\\sqrt{3})(z_F - z_I) = (2+\\sqrt{3})\\left(\\frac12 + i\\frac{\\sqrt{3}}{2}\\right) = \\frac{2+\\sqrt{3}}{2} + i\\frac{(2+\\sqrt{3})\\sqrt{3}}{2}$.</p>
                <p>Or $\\frac{(2+\\sqrt{3})\\sqrt{3}}{2} = \\frac{2\\sqrt{3}+3}{2} = \\frac{3}{2}+\\sqrt{3}$. Donc on retrouve bien la partie imaginaire.</p>
                <p>L’égalité est vérifiée.</p>
                <p>Le facteur $(2+\\sqrt{3})$ est un réel non nul, donc les vecteurs $\\overrightarrow{GL}$ et $\\overrightarrow{FI}$ sont colinéaires : $(GL) \\parallel (FI)$.</p>
            `
        },

        // ========== Question 4.d ==========
        {
            id: 'prob12-q4d',
            texte: '4.d – Montrer que le cercle $(\\zeta)$ est inscrit dans le triangle $DKL$.',
            solution: `
                <p>Soit $D = (FK) \\cap (GL)$.</p>
                <p>On a montré que $(FK) \\perp (FI)$ et $(GL) \\parallel (FI)$, donc $(FK) \\perp (GL)$.</p>
                <p>Le cercle $(\\zeta)$ a pour centre $I$ et rayon 1.</p>
                <ul>
                    <li>La distance de $I$ à la droite $(FK)$ est $IF = 1$ (car $F \\in (FK)$ et $IF \\perp (FK)$).</li>
                    <li>La distance de $I$ à la droite $(GL)$ est $IG = 1$ (car $G \\in (GL)$ et $IG \\perp (GL)$).</li>
                    <li>Il reste à montrer que la distance de $I$ à la droite $(KL)$ est aussi 1. On peut le vérifier en calculant la distance du point I à la droite KL, ou bien en observant que les points K et L sont sur le cercle de centre ? Mais plus simplement, on peut remarquer que $KL$ est la droite d’équation $x = -\\frac32$ (car K et L ont même abscisse). La distance de $I\\left(-\\frac12, 1\\right)$ à cette droite est $\\left| -\\frac12 - \\left(-\\frac32\\right) \\right| = 1$. Donc la distance est bien 1.</li>
                </ul>
                <p>Le centre I est donc à égale distance (1) des trois côtés du triangle $DKL$. Par conséquent, le cercle de centre I et de rayon 1 est tangent à ces trois côtés : il est inscrit dans le triangle $DKL$.</p>
            `
        }
    ]
});