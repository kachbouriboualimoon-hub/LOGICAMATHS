// data/problemes/part8.js – Problème 9 : Produit de distances sur le cercle unité (Page 7 du PDF)
// ==============================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 9,
    titre: "Produit de distances sur le cercle unité",
    enonce: `
        <p>Dans le plan complexe rapporté au repère orthonormé direct $(O; \\vec{u}, \\vec{v})$ (unité graphique : 5 cm), on considère les points $A$ et $B$ d’affixes respectives $z_A = 1 + i$, $z_B = -\\frac{1}{2} + \\frac{1}{2}i$. Soit $(\\mathcal{C})$ le cercle de centre $O$ et de rayon 1.</p>

        <ol>
            <li><strong>1.</strong> Donner la forme trigonométrique de $z_A$ et celle de $z_B$.</li>
        </ol>

        <p>Dans la suite de l’exercice, $M$ désigne un point de $(\\mathcal{C})$ d’affixe $e^{i\\alpha}$, où $\\alpha \\in [0; 2\\pi]$.</p>

        <p>On considère l’application $f$ qui à tout point $M$ de $(\\mathcal{C})$, associe $f(M) = MA \\times MB$.</p>

        <ol start="2">
            <li><strong>2.a</strong> – Montrer, pour tout $\\alpha \\in \\mathbb{R}$, l’égalité suivante : $e^{2i\\alpha} - 1 = 2i\\sin\\alpha\\, e^{i\\alpha}$.</li>
            <li><strong>2.b</strong> – Montrer l’égalité suivante : $f(M) = \\left|e^{2i\\alpha} - 1 - \\left(\\frac{1}{2} + \\frac{3}{2}i\\right)e^{i\\alpha}\\right|$.</li>
            <li><strong>2.c</strong> – En déduire l’égalité suivante : $f(M) = \\sqrt{\\frac{1}{4} + \\left(-\\frac{3}{2} + 2\\sin\\alpha\\right)^2}$.</li>
        </ol>

        <ol start="3">
            <li><strong>3.a</strong> – En utilisant 2.c, montrer qu’il existe deux points $M$ de $(\\mathcal{C})$, dont on donnera les coordonnées, pour lesquels $f(M)$ est minimal. Donner cette valeur minimale.</li>
            <li><strong>3.b</strong> – En utilisant 2.c, montrer qu’il existe un seul point $M$ de $(\\mathcal{C})$, dont on donnera les coordonnées, pour lequel $f(M)$ est maximal. Donner cette valeur maximale.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Forme trigonométrique :</strong> Pour $z = x+iy$, $z = |z|(\\cos\\theta + i\\sin\\theta)$ avec $\\theta = \\arg(z)$.</li>
            <li><strong>Module d’un produit :</strong> $|z_1 z_2| = |z_1| \\times |z_2|$. On peut donc écrire $MA \\times MB = |z_A - z_M| \\times |z_B - z_M| = |(z_A - z_M)(z_B - z_M)|$.</li>
            <li><strong>Identité 2.a :</strong> Utiliser $e^{2i\\alpha} - 1 = e^{i\\alpha}(e^{i\\alpha} - e^{-i\\alpha})$.</li>
            <li><strong>Recherche d’extremum :</strong> Pour $f(M) = \\sqrt{\\frac14 + (2\\sin\\alpha - \\frac32)^2}$, le minimum est atteint quand le carré est nul, le maximum quand $\\sin\\alpha$ est le plus éloigné de $\\frac34$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $MA$ est une distance et donc utiliser $|z_A - z_M|$.</li>
            <li>Dans le développement de $(z_A - z_M)(z_B - z_M)$, se tromper dans le calcul de $z_A z_B$ ou de $z_A + z_B$.</li>
            <li>Pour 2.c, ne pas simplifier correctement le module après factorisation par $e^{i\\alpha}$.</li>
            <li>Pour les extremums, confondre la variable $\\sin\\alpha$ avec $\\alpha$ ; oublier qu’il y a deux solutions pour un même sinus (sauf en $\\pm 1$).</li>
            <li>Ne pas donner les coordonnées des points $M$ (cosinus et sinus) en plus des valeurs de $\\alpha$.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1 (corrigée sans arctan) ==========
        {
            id: 'prob9-q1',
            texte: '1. – Donner la forme trigonométrique de $z_A$ et $z_B$.',
            solution: `
                <p><strong>Pour $z_A = 1+i$ :</strong></p>
                <p>Module : $|z_A| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.</p>
                <p>On cherche $\\theta$ tel que $\\cos\\theta = \\frac{1}{\\sqrt{2}}$ et $\\sin\\theta = \\frac{1}{\\sqrt{2}}$. Ces valeurs correspondent à $\\theta = \\frac{\\pi}{4}$.</p>
                <p>Donc $$z_A = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right) = \\sqrt{2}\\,e^{i\\pi/4}.$$</p>

                <p><strong>Pour $z_B = -\\frac{1}{2} + \\frac{1}{2}i$ :</strong></p>
                <p>Module : $|z_B| = \\sqrt{\\left(-\\frac12\\right)^2 + \\left(\\frac12\\right)^2} = \\sqrt{\\frac14 + \\frac14} = \\sqrt{\\frac12} = \\frac{\\sqrt{2}}{2}$.</p>
                <p>On cherche $\\theta$ tel que $\\cos\\theta = \\frac{-1/2}{\\sqrt{2}/2} = -\\frac{1}{\\sqrt{2}}$ et $\\sin\\theta = \\frac{1/2}{\\sqrt{2}/2} = \\frac{1}{\\sqrt{2}}$. Ces valeurs correspondent à $\\theta = \\frac{3\\pi}{4}$ (deuxième quadrant).</p>
                <p>Donc $$z_B = \\frac{\\sqrt{2}}{2}\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}\\,e^{i3\\pi/4}.$$</p>
                <p>$$\\boxed{z_A = \\sqrt{2}\\,e^{i\\pi/4},\\qquad z_B = \\frac{\\sqrt{2}}{2}\\,e^{i3\\pi/4}}$$</p>
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob9-q2a',
            texte: '2.a – Montrer que $e^{2i\\alpha} - 1 = 2i\\sin\\alpha\\, e^{i\\alpha}$.',
            solution: `
                <p>On utilise l’identité classique :</p>
                $$e^{2i\\alpha} - 1 = e^{i\\alpha}\\left(e^{i\\alpha} - e^{-i\\alpha}\\right) = e^{i\\alpha} \\cdot (2i\\sin\\alpha) = 2i\\sin\\alpha\\, e^{i\\alpha}.$$
                <p>L’égalité est donc vérifiée pour tout $\\alpha \\in \\mathbb{R}$.</p>
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob9-q2b',
            texte: '2.b – Montrer que $f(M) = \\left|e^{2i\\alpha} - 1 - \\left(\\frac{1}{2} + \\frac{3}{2}i\\right)e^{i\\alpha}\\right|$.',
            solution: `
                <p>On a $z_M = e^{i\\alpha}$, $z_A = 1+i$, $z_B = -\\frac12 + \\frac12 i$.</p>
                <p>Par définition : $f(M) = MA \\times MB = |z_A - z_M| \\times |z_B - z_M|$.</p>
                <p>Comme le produit des modules est le module du produit :</p>
                $$f(M) = \\left| (z_A - z_M)(z_B - z_M) \\right|.$$
                <p>Calculons le produit $(z_A - z_M)(z_B - z_M)$ :</p>
                $$(1+i - e^{i\\alpha})\\left(-\\frac12 + \\frac12 i - e^{i\\alpha}\\right) = (e^{i\\alpha} - z_A)(e^{i\\alpha} - z_B) \\quad \\.$$
                <p>En développant $(e^{i\\alpha} - z_A)(e^{i\\alpha} - z_B)$ :</p>
                $$= e^{2i\\alpha} - (z_A + z_B)e^{i\\alpha} + z_A z_B.$$
                <p>Calculons $z_A + z_B = (1+i) + (-\\frac12 + \\frac12 i) = \\frac12 + \\frac32 i$.</p>
                <p>Calculons $z_A z_B = (1+i)(-\\frac12 + \\frac12 i) = -\\frac12 + \\frac12 i - \\frac12 i + \\frac12 i^2 = -\\frac12 - \\frac12 = -1$.</p>
                <p>Donc le produit vaut : $$e^{2i\\alpha} - \\left(\\frac12 + \\frac32 i\\right)e^{i\\alpha} - 1 = e^{2i\\alpha} - 1 - \\left(\\frac12 + \\frac32 i\\right)e^{i\\alpha}.$$</p>
                <p>En prenant le module, on obtient bien :</p>
                $$\\boxed{f(M) = \\left|e^{2i\\alpha} - 1 - \\left(\\frac{1}{2} + \\frac{3}{2}i\\right)e^{i\\alpha}\\right|}.$$
            `
        },

        // ========== Question 2.c ==========
        {
            id: 'prob9-q2c',
            texte: '2.c – En déduire que $f(M) = \\sqrt{\\frac{1}{4} + \\left(-\\frac{3}{2} + 2\\sin\\alpha\\right)^2}$.',
            solution: `
                <p>En utilisant le résultat de 2.a, on remplace $e^{2i\\alpha} - 1$ par $2i\\sin\\alpha\\, e^{i\\alpha}$ dans l’expression de 2.b :</p>
                $$f(M) = \\left| 2i\\sin\\alpha\\, e^{i\\alpha} - \\left(\\frac12 + \\frac32 i\\right)e^{i\\alpha} \\right| = \\left| e^{i\\alpha} \\left( 2i\\sin\\alpha - \\frac12 - \\frac32 i \\right) \\right|.$$
                <p>Comme $|e^{i\\alpha}| = 1$, on a :</p>
                $$f(M) = \\left| 2i\\sin\\alpha - \\frac12 - \\frac32 i \\right| = \\left| -\\frac12 + i\\left(2\\sin\\alpha - \\frac32\\right) \\right|.$$
                <p>Le module d’un nombre complexe $x+iy$ est $\\sqrt{x^2+y^2}$. Ici $x = -\\frac12$, $y = 2\\sin\\alpha - \\frac32$.</p>
                <p>Donc :</p>
                $$f(M) = \\sqrt{ \\left(-\\frac12\\right)^2 + \\left(2\\sin\\alpha - \\frac32\\right)^2 } = \\sqrt{ \\frac14 + \\left( -\\frac32 + 2\\sin\\alpha \\right)^2 }.$$
                <p>$$\\boxed{f(M) = \\sqrt{\\frac{1}{4} + \\left(-\\frac{3}{2} + 2\\sin\\alpha\\right)^2}}$$</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob9-q3a',
            texte: '3.a – Montrer qu’il existe deux points $M$ pour lesquels $f(M)$ est minimal ; donner leurs coordonnées et la valeur minimale.',
            solution: `
                <p>On a $$f(M) = \\sqrt{ \\frac14 + \\left(2\\sin\\alpha - \\frac32\\right)^2 }.$$</p>
                <p>Pour minimiser $f(M)$, il suffit de minimiser l’expression sous la racine, donc de rendre le carré $\\left(2\\sin\\alpha - \\frac32\\right)^2$ le plus petit possible.</p>
                <p>Le carré est minimal lorsqu’il est nul, c’est-à-dire :</p>
                $$2\\sin\\alpha - \\frac32 = 0 \\quad\\Longleftrightarrow\\quad \\sin\\alpha = \\frac{3}{4}.$$
                <p>Sur l’intervalle $[0,2\\pi]$, l’équation $\\sin\\alpha = \\frac34$ admet deux solutions :</p>
                $$\\alpha_1\\quad\\text{et}\\quad \\alpha_2 .$$
                <p>Les points $M$ correspondants ont pour coordonnées $(\\cos\\alpha, \\sin\\alpha)$.</p>
                <p>On a $\\sin\\alpha = \\frac34$ et $\\cos\\alpha = \\pm \\sqrt{1 - \\left(\\frac34\\right)^2} = \\pm \\sqrt{1 - \\frac{9}{16}} = \\pm \\sqrt{\\frac{7}{16}} = \\pm \\frac{\\sqrt{7}}{4}$.</p>
                <p>Ainsi les deux points sont :</p>
                $$M_1 = \\left(\\frac{\\sqrt{7}}{4},\\ \\frac34\\right) \\quad\\text{et}\\quad M_2 = \\left(-\\frac{\\sqrt{7}}{4},\\ \\frac34\\right).$$
                <p>La valeur minimale de $f(M)$ est :</p>
                $$f_{\\min} = \\sqrt{ \\frac14 + 0^2 } = \\sqrt{\\frac14} = \\frac12.$$
                <p>$$\\boxed{f_{\\min} = \\frac12,\\quad M_1\\left(\\frac{\\sqrt7}{4},\\frac34\\right),\\ M_2\\left(-\\frac{\\sqrt7}{4},\\frac34\\right)}$$</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob9-q3b',
            texte: '3.b – Montrer qu’il existe un seul point $M$ pour lequel $f(M)$ est maximal ; donner ses coordonnées et la valeur maximale.',
            solution: `
                <p>On a toujours $$f(M) = \\sqrt{ \\frac14 + \\left(2\\sin\\alpha - \\frac32\\right)^2 }.$$</p>
                <p>Pour maximiser $f(M)$, il faut maximiser le carré $\\left(2\\sin\\alpha - \\frac32\\right)^2$, c’est-à-dire rendre $\\left|2\\sin\\alpha - \\frac32\\right|$ le plus grand possible.</p>
                <p>Comme $\\sin\\alpha \\in [-1, 1]$, la quantité $2\\sin\\alpha - \\frac32$ varie entre :</p>
                <ul>
                    <li>Pour $\\sin\\alpha = 1$ : $2 - 1.5 = 0.5$ (petit)</li>
                    <li>Pour $\\sin\\alpha = -1$ : $-2 - 1.5 = -3.5$ (grand en valeur absolue)</li>
                </ul>
                <p>Le maximum de la valeur absolue est atteint pour $\\sin\\alpha = -1$, ce qui donne $\\left|-3.5\\right| = 3.5 = \\frac72$.</p>
                <p>L’équation $\\sin\\alpha = -1$ admet une unique solution dans $[0,2\\pi]$ : $\\alpha = \\frac{3\\pi}{2}$.</p>
                <p>Le point correspondant a pour coordonnées : $\\cos(3\\pi/2)=0$, $\\sin(3\\pi/2)=-1$.</p>
                <p>La valeur maximale est alors :</p>
                $$f_{\\max} = \\sqrt{ \\frac14 + \\left( -\\frac72 \\right)^2 } = \\sqrt{ \\frac14 + \\frac{49}{4} } = \\sqrt{ \\frac{50}{4} } = \\sqrt{ \\frac{25}{2} } = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}.$$
                <p>$$\\boxed{f_{\\max} = \\frac{5\\sqrt{2}}{2},\\quad M\\left(0,\\,-1\\right)}$$</p>
            `
        }
    ]
});