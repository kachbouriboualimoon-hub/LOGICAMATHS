// data/problemes/part9.js – Problème 10 : Équation paramétrique et lieu de points (Page 8 du PDF)
// =============================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 10,
    titre: "Équation paramétrique, racine réelle et lieu de points",
    enonce: `
        <p>Soit $\\theta$ un réel de l'intervalle $[0,\\pi]$.</p>
        <p>On considère l'équation :</p>
        $$(E_\\theta) : 2z^2 - (1+2\\cos\\theta+2i)z + \\cos\\theta + i = 0.$$

        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="lieu_segment" width="400" height="300" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/300; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Lieu des points $M(\\cos\\theta + i)$ pour $\\theta\\in[0,\\pi]$ – segment horizontal $y=1$, $x\\in[-1,1]$.
            </figcaption>
        </figure>

        <ol>
            <li><strong>a.</strong> Montrer que l'équation $(E_\\theta)$ admet une racine réelle que l'on calculera. Calculer l'autre racine en fonction de $\\theta$.</li>
            <li><strong>b.</strong> On considère les points $A$ et $M$ d'affixes respectives $\\dfrac{1}{2}$ et $\\cos\\theta + i$. Déterminer et construire l'ensemble $\\mathcal{E}$ des points $M$ lorsque $\\theta$ varie dans $[0,\\pi]$.</li>
            <li><strong>c.</strong> Calculer $AM$ en fonction de $\\theta$ et en déduire la valeur de $\\theta$ pour laquelle la distance $AM$ est minimale.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Recherche d’une racine réelle :</strong> On pose $z = x \\in \\mathbb{R}$, on remplace, on sépare partie réelle et partie imaginaire, puis on résout le système.</li>
            <li><strong>Somme et produit des racines :</strong> Pour un trinôme $az^2+bz+c=0$, on a $z_1+z_2 = -b/a$ et $z_1 z_2 = c/a$.</li>
            <li><strong>Lieu de points :</strong> $z_M = \\cos\\theta + i$ ; quand $\\theta$ varie, la partie réelle parcourt $[-1,1]$ et la partie imaginaire reste constante ($=1$).</li>
            <li><strong>Distance minimale :</strong> $AM^2 = (\\cos\\theta - 1/2)^2 + 1$. Le minimum est atteint quand $\\cos\\theta = 1/2$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $\\theta$ est dans $[0,\\pi]$, donc $\\cos\\theta$ varie de $1$ à $-1$ (décroissant).</li>
            <li>Dans la résolution du système, ne pas bien séparer les parties réelle et imaginaire.</li>
            <li>Confondre le lieu de $M$ avec un arc de cercle alors qu’il s’agit d’un segment horizontal.</li>
            <li>Pour la distance minimale, ne pas oublier que $\\sqrt{(\\cos\\theta - 1/2)^2 +1}$ est minimale quand le carré est nul, i.e. $\\cos\\theta = 1/2$.</li>
        </ul>
    `,

    questions: [

        // ========== Question a (méthode systématique) ==========
        {
            id: 'prob10-q1a',
            texte: 'a. Montrer que $(E_\\theta)$ admet une racine réelle et calculer l’autre racine.',
            solution: `
                <p><strong>Recherche d’une racine réelle :</strong></p>
                <p>On pose $z = x$ avec $x \\in \\mathbb{R}$. On remplace dans $(E_\\theta)$ :</p>
                $$2x^2 - (1+2\\cos\\theta+2i)x + \\cos\\theta + i = 0.$$
                <p>Développons :</p>
                $$2x^2 - x(1+2\\cos\\theta) - 2i x + \\cos\\theta + i = 0.$$
                <p>Séparons la partie réelle et la partie imaginaire :</p>
                $$\\underbrace{\\left[2x^2 - x(1+2\\cos\\theta) + \\cos\\theta\\right]}_{\\text{partie réelle}} + i\\underbrace{\\left(-2x + 1\\right)}_{\\text{partie imaginaire}} = 0.$$
                <p>L’équation est vérifiée ssi les deux parties sont nulles :</p>
                $$
                \\begin{cases}
                2x^2 - x(1+2\\cos\\theta) + \\cos\\theta = 0 & (1) \\\\
                -2x + 1 = 0 & (2)
                \\end{cases}
                $$
                <p>De (2) on tire $x = \\dfrac12$.</p>
                <p>Vérifions que cette valeur satisfait (1) :</p>
                $$2\\left(\\frac12\\right)^2 - \\frac12(1+2\\cos\\theta) + \\cos\\theta = \\frac12 - \\frac12 - \\cos\\theta + \\cos\\theta = 0.$$
                <p>Donc $x = \\dfrac12$ est bien une racine réelle de $(E_\\theta)$ pour tout $\\theta$.</p>

                <p><strong>Calcul de l’autre racine :</strong></p>
                <p>Soient $z_1 = \\dfrac12$ et $z_2$ l’autre racine. Le produit des racines vaut :</p>
                $$z_1 z_2 = \\frac{c}{a} = \\frac{\\cos\\theta + i}{2}.$$
                <p>D’où :</p>
                $$z_2 = \\frac{\\frac{\\cos\\theta + i}{2}}{\\frac12} = \\cos\\theta + i.$$
                <p>$$\\boxed{\\text{Racines : } z_1 = \\frac12,\\quad z_2 = \\cos\\theta + i}$$</p>
            `
        },

        // ========== Question b ==========
        {
            id: 'prob10-q1b',
            texte: 'b. Déterminer et construire l’ensemble $\\mathcal{E}$ des points $M$ d’affixe $\\cos\\theta + i$ pour $\\theta\\in[0,\\pi]$.',
            solution: `
                <p>On a $z_M = \\cos\\theta + i$. Les coordonnées de $M$ sont $(\\cos\\theta,\\,1)$.</p>
                <p>Lorsque $\\theta$ parcourt $[0,\\pi]$, $\\cos\\theta$ décroît de $1$ à $-1$. Donc les points $M$ forment le segment de la droite $y=1$ compris entre les abscisses $-1$ et $1$.</p>
                <p>$$\\boxed{\\mathcal{E} = \\{ (x,1) \\mid -1 \\le x \\le 1 \\}}$$</p>
                <p>Sur la figure, ce segment est représenté en trait continu, avec les extrémités pour $\\theta=0$ ($M(1,1)$) et $\\theta=\\pi$ ($M(-1,1)$).</p>
            `
        },

        // ========== Question c ==========
        {
            id: 'prob10-q1c',
            texte: 'c. Calculer $AM$ en fonction de $\\theta$ et trouver la valeur de $\\theta$ minimisant cette distance.',
            solution: `
                <p>Le point $A$ a pour affixe $\\dfrac12$, donc ses coordonnées sont $\\left(\\dfrac12, 0\\right)$.</p>
                <p>Le point $M$ a pour coordonnées $(\\cos\\theta, 1)$.</p>
                <p>La distance $AM$ est :</p>
                $$AM = \\sqrt{ \\left(\\cos\\theta - \\frac12\\right)^2 + (1-0)^2 } = \\sqrt{ \\left(\\cos\\theta - \\frac12\\right)^2 + 1 }.$$
                <p>Pour minimiser $AM$, il suffit de minimiser son carré :</p>
                $$AM^2 = \\left(\\cos\\theta - \\frac12\\right)^2 + 1.$$
                <p>Ce carré est minimal lorsque $\\cos\\theta - \\frac12 = 0$, soit $\\cos\\theta = \\frac12$.</p>
                <p>Sur l’intervalle $[0,\\pi]$, l’unique solution est :</p>
                $$\\theta = \\frac{\\pi}{3}.$$
                <p>La distance minimale vaut alors :</p>
                $$AM_{\\min} = \\sqrt{0 + 1} = 1.$$
                <p>$$\\boxed{\\theta = \\frac{\\pi}{3},\\quad AM_{\\min} = 1}$$</p>
            `
        }
    ]
});