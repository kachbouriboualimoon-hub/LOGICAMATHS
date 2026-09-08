// data/problemes/part12.js – Problème 13 : Équation complexe, cercle, losange (Page 11 du PDF)
// ===========================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 13,
    titre: "Équation complexe, cercle, losange",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
<p>L’équation est $z^2 - (\\sqrt{5}+2i)z + 1 + 4\\sqrt{5}\\,i = 0$.</p>
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="probleme13_rhombus" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $(\\mathcal{C})$ de centre O et rayon 3 – Points Q, A, B et losange OAQB.
            </figcaption>
        </figure>

        <ol>
            <li><strong>1.a</strong> – Calculer $(\\sqrt{5} + 2i)^2$.</li>
            <li><strong>1.b</strong> – Vérifier que le discriminant de l’équation $(E)$ est $\\Delta = -3(\\sqrt{5} + 2i)^2$.</li>
            <li><strong>1.c</strong> – En déduire que les solutions de $(E)$ sont :
                $$a = (\\sqrt{5} + 2i)\\left(\\frac{1 + i\\sqrt{3}}{2}\\right) \\quad\\text{et}\\quad b = (\\sqrt{5} + 2i)\\left(\\frac{1 - i\\sqrt{3}}{2}\\right).$$</li>
            <li><strong>2.a</strong> – Soit $Q$ le point d’affixe $\\sqrt{5} + 2i$. Montrer que $Q$ appartient au cercle $(\\mathcal{C})$ de centre $O$ et de rayon 3.</li>
            <li><strong>2.b</strong> – Construire le point $Q$.</li>
            <li><strong>3.a</strong> – Soient $A$ et $B$ les points d’affixes respectives $a$ et $b$. Montrer que $A$ et $B$ appartiennent au cercle $(\\mathcal{C})$.</li>
            <li><strong>3.b</strong> – Vérifier que $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OQ}$.</li>
            <li><strong>3.c</strong> – En déduire que le quadrilatère $OAQB$ est un losange.</li>
            <li><strong>3.d</strong> – Construire les points $A$ et $B$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Discriminant :</strong> Pour l’équation $az^2+bz+c=0$, on a $\\Delta = b^2 - 4ac$.</li>
            <li><strong>Racines carrées :</strong> Si $\\Delta = -3(\\sqrt{5}+2i)^2$, alors une racine carrée est $\\delta = i\\sqrt{3}\\,(\\sqrt{5}+2i)$ (ou son opposé).</li>
            <li><strong>Module d’un produit :</strong> $|z_1 z_2| = |z_1|\\cdot|z_2|$. Cela permet de montrer que $|a|=|b|=3$.</li>
            <li><strong>Losange :</strong> Un quadrilatère est un losange si ses quatre côtés sont égaux. Dans un parallélogramme, il suffit que deux côtés adjacents soient égaux.</li>
            <li><strong>Somme vectorielle :</strong> $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OQ}$ signifie que $a+b = q$. Cela donne la relation entre les affixes.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Dans le calcul de $(\\sqrt{5}+2i)^2$, oublier le terme $2ab$ ou le signe de $i^2$.</li>
            <li>Pour le discriminant, ne pas bien multiplier par $-4$ dans la formule.</li>
            <li>Confondre les racines $a$ et $b$ (l’ordre n’a pas d’importance, mais il faut bien prendre $+$ et $-$).</li>
            <li>Pour montrer que $A$ et $B$ sont sur le cercle, ne pas justifier que $|(1\\pm i\\sqrt{3})/2| = 1$.</li>
            <li>Dans la construction du losange, ne pas vérifier que les côtés opposés sont parallèles avant de conclure.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob13-q1a',
            texte: '1.a – Calculer $(\\sqrt{5} + 2i)^2$.',
            solution: `
                $$(\\sqrt{5} + 2i)^2 = (\\sqrt{5})^2 + 2\\cdot\\sqrt{5}\\cdot 2i + (2i)^2 = 5 + 4\\sqrt{5}\\,i - 4 = 1 + 4\\sqrt{5}\\,i.$$
                $$\\boxed{(\\sqrt{5}+2i)^2 = 1 + 4\\sqrt{5}\\,i}$$
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob13-q1b',
            texte: '1.b – Vérifier que $\\Delta = -3(\\sqrt{5}+2i)^2$.',
            solution: `
                <p>L’équation est $z^2 - (\\sqrt{5}+2i)z + 1 + 4\\sqrt{5}\\,i = 0$.</p>
                <p>On a $a=1$, $b=-(\\sqrt{5}+2i)$, $c=1+4\\sqrt{5}\\,i$.</p>
                $$\\Delta = b^2 - 4ac = (\\sqrt{5}+2i)^2 - 4(1+4\\sqrt{5}\\,i).$$
                <p>D’après 1.a, $(\\sqrt{5}+2i)^2 = 1+4\\sqrt{5}\\,i$.</p>
                <p>Donc $\\Delta = (1+4\\sqrt{5}\\,i) - 4 - 16\\sqrt{5}\\,i = -3 - 12\\sqrt{5}\\,i = -3(1+4\\sqrt{5}\\,i)$.</p>
                <p>Et $1+4\\sqrt{5}\\,i = (\\sqrt{5}+2i)^2$, donc :</p>
                $$\\boxed{\\Delta = -3(\\sqrt{5}+2i)^2}$$
            `
        },

        // ========== Question 1.c ==========
        {
            id: 'prob13-q1c',
            texte: '1.c – En déduire les solutions de $(E)$.',
            solution: `
                <p>On a $\\Delta = -3(\\sqrt{5}+2i)^2$. Une racine carrée est $\\delta = i\\sqrt{3}\\,(\\sqrt{5}+2i)$ (car $\\delta^2 = i^2\\cdot 3\\cdot (\\sqrt{5}+2i)^2 = -3(\\sqrt{5}+2i)^2$).</p>
                <p>Les solutions sont :</p>
                $$z = \\frac{-b \\pm \\delta}{2a} = \\frac{(\\sqrt{5}+2i) \\pm i\\sqrt{3}(\\sqrt{5}+2i)}{2} = (\\sqrt{5}+2i)\\frac{1 \\pm i\\sqrt{3}}{2}.$$
                <p>On reconnaît les deux racines :</p>
                $$\\boxed{a = (\\sqrt{5}+2i)\\frac{1+i\\sqrt{3}}{2},\\quad b = (\\sqrt{5}+2i)\\frac{1-i\\sqrt{3}}{2}}$$
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob13-q2a',
            texte: '2.a – Montrer que $Q$ appartient au cercle de centre $O$ rayon 3.',
            solution: `
                <p>$z_Q = \\sqrt{5} + 2i$. Son module est :</p>
                $$|z_Q| = \\sqrt{(\\sqrt{5})^2 + 2^2} = \\sqrt{5+4} = \\sqrt{9} = 3.$$
                <p>Donc $Q$ est à la distance 3 de $O$ : $Q\\in\\mathcal{C}(O,3)$.</p>
                $$\\boxed{Q \\in (\\mathcal{C})}$$
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob13-q2b',
            texte: '2.b – Construire le point $Q$.',
            solution: `
                <p>$Q$ a pour coordonnées $(\\sqrt{5},\\,2) \\approx (2.236,\\,2)$. Placer ce point sur le cercle de rayon 3.</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob13-q3a',
            texte: '3.a – Montrer que $A$ et $B$ appartiennent au cercle $(\\mathcal{C})$.',
            solution: `
                <p>On a $a = z_Q \\cdot \\frac{1+i\\sqrt{3}}{2}$. On calcule le module :</p>
                $$|a| = |z_Q|\\cdot\\left|\\frac{1+i\\sqrt{3}}{2}\\right| = 3 \\cdot \\frac{\\sqrt{1+3}}{2} = 3\\cdot\\frac{2}{2} = 3.$$
                <p>De même, $|b| = 3$ car $\\left|\\frac{1-i\\sqrt{3}}{2}\\right| = 1$.</p>
                <p>Donc $A$ et $B$ sont à la distance 3 de $O$ : ils appartiennent au cercle $(\\mathcal{C})$.</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob13-q3b',
            texte: '3.b – Vérifier que $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OQ}$.',
            solution: `
                <p>En affixes, cette égalité vectorielle équivaut à $a + b = z_Q$.</p>
                $$a+b = (\\sqrt{5}+2i)\\left(\\frac{1+i\\sqrt{3}}{2} + \\frac{1-i\\sqrt{3}}{2}\\right) = (\\sqrt{5}+2i)\\cdot 1 = \\sqrt{5}+2i = z_Q.$$
                <p>Donc $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OQ}$.</p>
            `
        },

        // ========== Question 3.c ==========
        {
            id: 'prob13-q3c',
            texte: '3.c – En déduire que $OAQB$ est un losange.',
            solution: `
                <p>L’égalité $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OQ}$ signifie que $OQ$ est la somme des vecteurs $OA$ et $OB$.</p>
                <p>Cela implique que le quadrilatère $O A Q B$ est un parallélogramme (car dans un parallélogramme, la diagonale $OQ$ est la somme des vecteurs $OA$ et $OB$).</p>
                <p>De plus, on a $OA = |a| = 3$ et $OB = |b| = 3$, donc les côtés adjacents sont égaux.</p>
                <p>Un parallélogramme ayant deux côtés adjacents égaux est un losange.</p>
                $$\\boxed{OAQB \\text{ est un losange}}$$
            `
        },

        // ========== Question 3.d ==========
        {
            id: 'prob13-q3d',
            texte: '3.d – Construire les points $A$ et $B$.',
            solution: `
                <p>Les affixes $a$ et $b$ sont obtenues en multipliant $z_Q$ par $\\frac{1\\pm i\\sqrt{3}}{2}$, ce qui correspond à une rotation de $\\pm 60^\\circ$ (car $\\frac{1\\pm i\\sqrt{3}}{2} = e^{\\pm i\\pi/3}$) et d’un facteur d’échelle 1.</p>
                <p>Donc $A$ est l’image de $Q$ par la rotation de centre $O$ et d’angle $+\\pi/3$ ; $B$ est l’image de $Q$ par la rotation d’angle $-\\pi/3$.</p>
                <p>Sur le cercle, placer ces deux points.</p>
            `
        }
    ]
});