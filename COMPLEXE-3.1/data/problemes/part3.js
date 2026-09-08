// data/problemes/part3.js – Problème 4 : Cercle, triangle isocèle, aire et maximum
// =================================================================================
// Utilise un canvas pour les figures (cercle et courbe de h')
// La courbe de h' est dessinée par drawFigures avec data-figure="courbe_h_prime"

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 4,
    titre: "Cercle, triangle isocèle, aire et maximum d’une fonction trigonométrique",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
        <p>On considère les points A, B, C et D d’affixes respectives :</p>
        $$z_A = 1,\\quad z_B = -1,\\quad z_C = 2 + i\\sqrt{3},\\quad z_D = 2 - i\\sqrt{3}.$$

        <!-- Figure 1 : Cercle de centre A -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="cercle_centre_A" width="300" height="300" style="width:100%; max-width:300px; height:auto; aspect-ratio:1/1; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $\\mathcal{C}$ de centre A(1) et rayon 2, points B, C, D.
            </figcaption>
        </figure>

        <h4>Partie 1 – Étude des points C et D</h4>
        <ol>
            <li><strong>1.a</strong> – Montrer que C et D appartiennent au cercle $(\\mathcal{C})$ de centre A et de rayon 2.</li>
            <li><strong>1.b</strong> – Vérifier que C et D sont symétriques par rapport à la droite (AB).</li>
            <li><strong>1.c</strong> – (Construction) – Placer C et D sur la figure.</li>
            <li><strong>1.d</strong> – Montrer que l’aire du triangle BCD est égale à $3\\sqrt{3}$.</li>
        </ol>

        <h4>Partie 2 – Points M et N sur le cercle</h4>
        <p>Soient $\\theta \\in ]0,\\pi[$ et M, N les points d’affixes :</p>
        $$z_M = 1 + 2e^{i\\theta},\\quad z_N = 1 + 2e^{-i\\theta}.$$
        <ol start="2">
            <li><strong>2.a</strong> – Vérifier que $z_N = \\overline{z_M}$. En déduire que le triangle BMN est isocèle en B.</li>
            <li><strong>2.b</strong> – Déterminer l’affixe du point I, milieu de [MN].</li>
            <li><strong>2.c</strong> – Soit S l’aire du triangle BMN. Montrer que $S = 4(1+\\cos\\theta)\\sin\\theta$.</li>
        </ol>

        <h4>Partie 3 – Étude de la fonction h et maximisation</h4>
        <p>Soit $h$ la fonction définie sur $[0,\\pi]$ par $h(x) = (1+\\cos x)\\sin x$.</p>

        <!-- Figure 2 : Courbe de h' -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="courbe_h_prime" width="400" height="250" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/250; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Courbe $(\\Gamma)$ de la fonction dérivée $h'$ sur $[0,\\pi]$. Elle coupe l'axe des abscisses en $\\pi/3$ et $\\pi$.
            </figcaption>
        </figure>

        <ol start="3">
            <li><strong>3.a</strong> – À l’aide du graphique de $h'$ (ci-dessus), justifier que le maximum de $h$ est atteint en $\\pi/3$.</li>
            <li><strong>3.b</strong> – En déduire que l’aire du triangle BMN est maximale si et seulement si $M = C$ et $N = D$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces</h4>
        <ul>
            <li><strong>1.a :</strong> Calculer $|z_C - z_A|$ et $|z_D - z_A|$.</li>
            <li><strong>1.b :</strong> La symétrie par rapport à l’axe des abscisses (droite (AB)) correspond à la conjugaison complexe.</li>
            <li><strong>1.d :</strong> Le triangle BCD a pour base CD (verticale) et hauteur la distance de B à la droite CD.</li>
            <li><strong>2.a :</strong> $\\overline{1+2e^{i\\theta}} = 1+2e^{-i\\theta}$.</li>
            <li><strong>2.b :</strong> Affixe du milieu : $z_I = \\frac{z_M+z_N}{2}$.</li>
            <li><strong>2.c :</strong> Aire d’un triangle = $\\frac12 \\times$ base $\\times$ hauteur. Ici, base MN verticale, hauteur distance de B à la droite (MN).</li>
            <li><strong>3.a :</strong> Le maximum de $h$ est atteint lorsque $h'$ s’annule en changeant de signe de $+$ à $-$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Ne pas confondre les affixes de C et D.</li>
            <li>Dans l’aire de BCD, bien identifier la base et la hauteur (CD est vertical).</li>
            <li>Dans l’aire de BMN, ne pas oublier que $\\sin\\theta$ est positif pour $\\theta \\in ]0,\\pi[$.</li>
            <li>Pour la maximisation, vérifier que $\\theta=\\pi/3$ donne bien $M=C$ et $N=D$.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob4-q1a',
            texte: '1.a – Montrer que C et D appartiennent au cercle de centre A et de rayon 2.',
            solution: `
                <p>On a $z_A = 1$.</p>
                $$|z_C - z_A| = |2+i\\sqrt{3} - 1| = |1+i\\sqrt{3}| = \\sqrt{1+3} = 2.$$
                $$|z_D - z_A| = |2-i\\sqrt{3} - 1| = |1-i\\sqrt{3}| = 2.$$
                <p>Donc C et D sont à la distance 2 de A, donc ils appartiennent au cercle de centre A et de rayon 2.</p>
                <p>$$\\boxed{\\text{C, D} \\in \\mathcal{C}}$$</p>
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob4-q1b',
            texte: '1.b – Vérifier que C et D sont symétriques par rapport à (AB).',
            solution: `
                <p>Les points A et B ont pour affixes 1 et -1, donc la droite (AB) est l’axe des abscisses (l’axe réel).</p>
                <p>Les affixes de C et D sont conjuguées : $z_D = \\overline{z_C}$ (car $2-i\\sqrt{3} = \\overline{2+i\\sqrt{3}}$).</p>
                <p>La symétrie par rapport à l’axe réel transforme $z$ en $\\overline{z}$. Donc C et D sont symétriques par rapport à (AB).</p>
            `
        },

        // ========== Question 1.c (construction) ==========
        {
            id: 'prob4-q1c',
            texte: '1.c – Construction des points C et D.',
            solution: `
                <p>Sur la figure fournie, placer C à l’intersection du cercle avec la droite verticale x=2 au-dessus de l’axe (ordonnée $\\sqrt{3}$), et D en-dessous (ordonnée $-\\sqrt{3}$).</p>
            `
        },

        // ========== Question 1.d ==========
        {
            id: 'prob4-q1d',
            texte: '1.d – Montrer que l’aire du triangle BCD est égale à $3\\sqrt{3}$.',
            solution: `
                <p>Coordonnées : B(-1,0), C(2,$\\sqrt{3}$), D(2,-$\\sqrt{3}$).</p>
                <p>Le segment CD est vertical, de longueur $2\\sqrt{3}$. La distance de B à la droite (CD) (qui est la droite $x=2$) est $|2 - (-1)| = 3$.</p>
                <p>Aire = $\\frac{1}{2} \\times \\text{base} \\times \\text{hauteur} = \\frac{1}{2} \\times (2\\sqrt{3}) \\times 3 = 3\\sqrt{3}$.</p>
                <p>$$\\boxed{\\text{Aire}_{BCD} = 3\\sqrt{3}}$$</p>
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob4-q2a',
            texte: '2.a – Vérifier $z_N = \\overline{z_M}$ et en déduire que BMN est isocèle en B.',
            solution: `
                <p>On a $\\overline{z_M} = \\overline{1+2e^{i\\theta}} = 1+2e^{-i\\theta} = z_N$.</p>
                <p>Donc M et N sont symétriques par rapport à l’axe réel (AB). Le point B est sur cet axe, donc B est équidistant de M et N : $BM = BN$.</p>
                <p>Le triangle BMN est donc isocèle en B.</p>
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob4-q2b',
            texte: '2.b – Déterminer l’affixe du point I, milieu de [MN].',
            solution: `
                $$z_I = \\frac{z_M + z_N}{2} = \\frac{1+2e^{i\\theta} + 1+2e^{-i\\theta}}{2} = 1 + \\frac{2(e^{i\\theta}+e^{-i\\theta})}{2} = 1 + 2\\cos\\theta.$$
                <p>$$\\boxed{z_I = 1 + 2\\cos\\theta}$$</p>
                <p>I est donc sur l’axe réel, ce qui est logique car MN est vertical.</p>
            `
        },

        // ========== Question 2.c ==========
        {
            id: 'prob4-q2c',
            texte: '2.c – Montrer que l’aire S du triangle BMN est $4(1+\\cos\\theta)\\sin\\theta$.',
            solution: `
                <p>Le triangle BMN a pour base MN, verticale. Calculons $MN$ :</p>
                $$MN = |z_N - z_M| = |2e^{-i\\theta} - 2e^{i\\theta}| = 2|e^{-i\\theta} - e^{i\\theta}| = 2| -2i\\sin\\theta| = 4\\sin\\theta.$$
                <p>La hauteur issue de B à la droite (MN) : la droite (MN) est verticale d’abscisse $x = 1+2\\cos\\theta$ (car c’est la partie réelle de $z_M$ et $z_N$). La distance de B(-1,0) à cette droite est $|1+2\\cos\\theta - (-1)| = 2+2\\cos\\theta = 2(1+\\cos\\theta)$.</p>
                <p>L’aire est donc :</p>
                $$S = \\frac{1}{2} \\times MN \\times \\text{hauteur} = \\frac{1}{2} \\times (4\\sin\\theta) \\times (2(1+\\cos\\theta)) = 4(1+\\cos\\theta)\\sin\\theta.$$
                <p>$$\\boxed{S = 4(1+\\cos\\theta)\\sin\\theta}$$</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob4-q3a',
            texte: '3.a – À l’aide du graphique de $h\'$, justifier que le maximum de $h$ est atteint en $\\pi/3$.',
            solution: `
                <p>On a $h(x) = (1+\\cos x)\\sin x$ et $h'(x) = \\cos x + \\cos 2x$.</p>
                <p>Sur le graphique de $h'$, on voit que :</p>
                <ul>
                    <li>$h'(x) > 0$ sur $[0, \\pi/3[$ (la courbe est au-dessus de l'axe des abscisses), donc $h$ est croissante sur cet intervalle.</li>
                    <li>$h'(x) < 0$ sur $]\\pi/3, \\pi[$ (la courbe est en dessous de l'axe), donc $h$ est décroissante sur cet intervalle.</li>
                </ul>
                <p>Par conséquent, $h$ admet un maximum local (et global sur $[0,\\pi]$) en $x = \\pi/3$.</p>
                <p>$$\\boxed{\\text{Maximum de } h \\text{ en } \\pi/3}$$</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob4-q3b',
            texte: '3.b – En déduire que l’aire du triangle BMN est maximale ssi $M=C$ et $N=D$.',
            solution: `
                <p>On a $S = 4(1+\\cos\\theta)\\sin\\theta = 4h(\\theta)$. Donc maximiser S revient à maximiser $h$.</p>
                <p>D’après 3.a, le maximum de $h$ est atteint pour $\\theta = \\pi/3$.</p>
                <p>Pour $\\theta = \\pi/3$, on a :</p>
                $$z_M = 1 + 2e^{i\\pi/3} = 1 + 2\\left(\\frac12 + i\\frac{\\sqrt{3}}{2}\\right) = 2 + i\\sqrt{3} = z_C.$$
                $$z_N = 1 + 2e^{-i\\pi/3} = 1 + 2\\left(\\frac12 - i\\frac{\\sqrt{3}}{2}\\right) = 2 - i\\sqrt{3} = z_D.$$
                <p>Donc $M=C$ et $N=D$.</p>
                <p>Réciproquement, si $M=C$ et $N=D$, alors $\\theta = \\pi/3$, donc S est maximale.</p>
                <p>$$\\boxed{S \\text{ maximale } \\iff M=C \\text{ et } N=D}$$</p>
            `
        }
    ]
});