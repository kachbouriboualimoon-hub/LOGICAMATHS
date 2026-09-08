// data/problemes/part4.js – Problème 5 : Équations, cercle, losange (Page 13 du PDF)
// ===================================================================================
// Ce problème traite d'équations complexes, de points sur un cercle et d'un losange.
// Figure canvas : cercle de centre A(2i) et rayon 2√2, points A, B, C, D.

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 5,
    titre: "Équations complexes, cercle et losange",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>

        <h4>Partie 1 – Résolution d’équations</h4>
        <ol>
            <li><strong>1.a</strong> – Dans $\\mathbb{C}$, résoudre l’équation (E) : $z^2 - 2(1+i)z - 4i = 0$.<br>
                <em>Indication :</em> Montrer que (E) est équivalente à $\\left[z-(1+i)\\right]^2 = \\left[\\sqrt{3}(1+i)\\right]^2$.</li>
            <li><strong>1.b</strong> – Soit l’équation (E’) : $z^3 - (2+4i)z^2 - 4z - 8 = 0$.<br>
                Vérifier que $2i$ est une solution, puis que pour tout $z$ :<br>
                $z^3 - (2+4i)z^2 - 4z - 8 = (z-2i)\\left[z^2 - 2(1+i)z - 4i\\right]$.<br>
                En déduire les solutions de (E’).</li>
        </ol>

        <h4>Partie 2 – Points et cercle</h4>
        <p>On donne les points A, B, C et D d’affixes respectives :</p>
        $$z_A = 2i,\\quad z_B = (1+\\sqrt{3})(1+i),\\quad z_C = (1-\\sqrt{3})(1+i),\\quad z_D = 2.$$

        <!-- Figure en canvas -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="cercle_A_rayon" width="350" height="300" style="width:100%; max-width:350px; height:auto; aspect-ratio:350/300; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle de centre A(2i) et rayon $2\\sqrt{2}$, points A, B, C, D.
            </figcaption>
        </figure>

        <ol start="2">
            <li><strong>2.a</strong> – Vérifier que $AB = AC = AD = 2\\sqrt{2}$. En déduire que B, C et D appartiennent à un même cercle $\\mathcal{C}$ que l’on précisera.</li>
            <li><strong>2.b</strong> – Placer les points A et D, puis construire le cercle $\\mathcal{C}$.</li>
            <li><strong>2.c</strong> – Montrer que $\\arg(z_B) = \\frac{\\pi}{4} + 2k\\pi$ et que $\\arg(z_C) = \\frac{5\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$.</li>
            <li><strong>2.d</strong> – Construire alors les points B et C sur la figure.</li>
        </ol>

        <h4>Partie 3 – Losange et aire</h4>
        <ol start="3">
            <li><strong>3</strong> – Montrer que le quadrilatère $ABDC$ est un losange. Montrer que son aire est $4\\sqrt{3}$.</li>
        </ol>
    `,

    // ========== ASTUCES (améliorées) ==========
    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Racine carrée complexe :</strong> Pour résoudre $[z-(1+i)]^2 = (\\sqrt{3}(1+i))^2$, on utilise $z-(1+i) = \\pm \\sqrt{3}(1+i)$.</li>
            <li><strong>Factorisation polynomiale :</strong> Si $2i$ est racine, on peut factoriser par $(z-2i)$ puis identifier les coefficients.</li>
            <li><strong>Distance dans le plan complexe :</strong> $AB = |z_B - z_A|$. Penser à utiliser le conjugué ou les carrés pour simplifier les calculs.</li>
            <li><strong>Argument d’un produit :</strong> $\\arg(z_B) = \\arg(1+\\sqrt{3}) + \\arg(1+i)$ ; attention si le facteur réel est négatif (cas de $z_C$).</li>
            <li><strong>Losange :</strong> Un quadrilatère est un losange si ses quatre côtés sont égaux. L’aire peut se calculer par $\\frac12 d_1 d_2$ où $d_1,d_2$ sont les longueurs des diagonales.</li>
            <li><strong>Module d’une différence :</strong> Pour $z = x+iy$, $|z|^2 = x^2+y^2$. Utiliser les identités remarquables.</li>
        </ul>
    `,

    // ========== ERREURS FRÉQUENTES (améliorées) ==========
    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $(1+i)^2 = 2i$ et non $2$.</li>
            <li>Dans la factorisation de (E’), ne pas développer complètement pour vérifier l’égalité.</li>
            <li>Pour $z_C = (1-\\sqrt{3})(1+i)$, ne pas tenir compte du signe négatif de $(1-\\sqrt{3})$ dans le calcul de l’argument : cela ajoute $\\pi$.</li>
            <li>Confondre les diagonales du losange : ici les diagonales sont $[AD]$ et $[BC]$, pas $[AB]$ et $[CD]$.</li>
            <li>Dans le calcul de distances, oublier de mettre au carré les modules avant de simplifier.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a (corrigée) ==========
        {
            id: 'prob5-q1a',
            texte: '1.a – Résoudre (E) : $z^2 - 2(1+i)z - 4i = 0$.',
            solution: `
                <p><strong>Rappel :</strong> Pour tout complexe $z$, on a $(1+i)^2 = 2i$.</p>
                <p>On développe $\\left[z-(1+i)\\right]^2$ :</p>
                $$\\left[z-(1+i)\\right]^2 = z^2 - 2(1+i)z + (1+i)^2 = z^2 - 2(1+i)z + 2i.$$
                <p>L’équation (E) s’écrit $z^2 - 2(1+i)z - 4i = 0$, soit en ajoutant $6i$ des deux côtés :</p>
                $$\\left[z-(1+i)\\right]^2 = 6i.$$
                <p>Or $\\left[\\sqrt{3}(1+i)\\right]^2 = 3(1+i)^2 = 3 \\times 2i = 6i$.</p>
                <p>Donc (E) est bien équivalente à :
                $$\\left[z-(1+i)\\right]^2 = \\left[\\sqrt{3}(1+i)\\right]^2.$$</p>
                <p>On prend la racine carrée :</p>
                $$z-(1+i) = \\pm \\sqrt{3}(1+i).$$
                <p>Cas $+$ : $z_1 = (1+i) + \\sqrt{3}(1+i) = (1+\\sqrt{3})(1+i)$.</p>
                <p>Cas $-$ : $z_2 = (1+i) - \\sqrt{3}(1+i) = (1-\\sqrt{3})(1+i)$.</p>
                <p>Donc les solutions de (E) sont :</p>
                $$\\boxed{z_B = (1+\\sqrt{3})(1+i),\\quad z_C = (1-\\sqrt{3})(1+i)}$$
                <p>Ces deux affixes correspondent aux points B et C définis plus loin.</p>
            `
        },

        // ========== Question 1.b (corrigée) ==========
        {
            id: 'prob5-q1b',
            texte: '1.b – Résoudre (E’) : $z^3 - (2+4i)z^2 - 4z - 8 = 0$.',
            solution: `
                <p><strong>Vérification que $2i$ est solution :</strong></p>
                <p>On remplace $z$ par $2i$ :</p>
                $$(2i)^3 - (2+4i)(2i)^2 - 4(2i) - 8 = -8i - (2+4i)(-4) - 8i - 8$$
                $$= -8i - (-8 -16i) -8i -8 = -8i +8+16i -8i -8 = 0.$$
                <p>Donc $z=2i$ est bien une racine.</p>

                <p><strong>Factorisation :</strong> On développe le produit $(z-2i)\\left[z^2 - 2(1+i)z - 4i\\right]$ :</p>
                $$(z-2i)\\left[z^2 - 2(1+i)z - 4i\\right] = z^3 - 2(1+i)z^2 - 4iz - 2i z^2 + 4i(1+i)z + 8i^2$$
                $$= z^3 - 2(1+i)z^2 - 4iz - 2i z^2 + (4i + 4i^2)z - 8$$
                $$= z^3 - 2(1+i)z^2 - 2i z^2 - 4iz + (4i - 4)z - 8$$
         $$=z^3 - (2+4i)z^2 - 4z - 8 $$

                <p><strong>Résolution de (E’) :</strong> L’équation se factorise en :</p>
                $$(z-2i)\\left[z^2 - 2(1+i)z - 4i\\right] = 0.$$
                <p>Donc les solutions sont $z=2i$ ou les solutions de (E) trouvées en 1.a.</p>
                <p>$$\\boxed{\\mathcal{S}_{(E')} = \\left\\{ 2i,\\ (1+\\sqrt{3})(1+i),\\ (1-\\sqrt{3})(1+i) \\right\\}}$$</p>
            `
        },

        // ========== Question 2.a (corrigée) ==========
        {
            id: 'prob5-q2a',
            texte: '2.a – Vérifier que $AB = AC = AD = 2\\sqrt{2}$ et en déduire le cercle.',
            solution: `
                <p>On a $z_A = 2i$, $z_B = (1+\\sqrt{3})(1+i)$, $z_C = (1-\\sqrt{3})(1+i)$, $z_D = 2$.</p>

                <p><strong>Calcul de $AB$ :</strong></p>
                $$AB = |z_B - z_A| = |(1+\\sqrt{3})(1+i) - 2i| = |(1+\\sqrt{3}) + i(1+\\sqrt{3}) - 2i|$$
                $$= |(1+\\sqrt{3}) + i(\\sqrt{3}-1)|.$$
                <p>Module au carré :</p>
                $$AB^2 = (1+\\sqrt{3})^2 + (\\sqrt{3}-1)^2 = (1+2\\sqrt{3}+3) + (3-2\\sqrt{3}+1) = 8.$$
                <p>Donc $AB = \\sqrt{8} = 2\\sqrt{2}$.</p>

                <p><strong>Calcul de $AC$ :</strong></p>
                $$AC = |z_C - z_A| = |(1-\\sqrt{3})(1+i) - 2i| = |(1-\\sqrt{3}) + i(1-\\sqrt{3}) - 2i|$$
                $$= |(1-\\sqrt{3}) + i(-1-\\sqrt{3})|.$$
                <p>Module au carré :</p>
                $$AC^2 = (1-\\sqrt{3})^2 + (-1-\\sqrt{3})^2 = (1-2\\sqrt{3}+3) + (1+2\\sqrt{3}+3) = 8.$$
                <p>Donc $AC = 2\\sqrt{2}$.</p>

                <p><strong>Calcul de $AD$ :</strong></p>
                $$AD = |z_D - z_A| = |2 - 2i| = |2(1-i)| = 2\\sqrt{2}.$$

                <p>Les points B, C, D sont à la même distance $2\\sqrt{2}$ du point A. Ils appartiennent donc au cercle de centre A et de rayon $2\\sqrt{2}$.</p>
                $$\\boxed{\\mathcal{C} : \\text{centre } A(2i),\\ \\text{rayon } 2\\sqrt{2}}$$
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob5-q2b',
            texte: '2.b – Placer A et D, construire le cercle.',
            solution: `
                <p>Dans le repère $(O,\\vec{u},\\vec{v})$ :</p>
                <ul>
                    <li>A a pour coordonnées $(0,2)$ (affixe $2i$).</li>
                    <li>D a pour coordonnées $(2,0)$ (affixe $2$).</li>
                </ul>
                <p>Le cercle $\\mathcal{C}$ a pour centre A et passe par D (car $AD = 2\\sqrt{2}$). On le trace au compas.</p>
            `
        },

        // ========== Question 2.c ==========
        {
            id: 'prob5-q2c',
            texte: '2.c – Montrer que $\\arg(z_B) = \\pi/4$ et $\\arg(z_C) = 5\\pi/4$ (mod $2\\pi$).',
            solution: `
                <p>On a $z_B = (1+\\sqrt{3})(1+i)$. Le facteur $1+\\sqrt{3}$ est un réel strictement positif, donc il ne modifie pas l’argument.</p>
                $$\\arg(z_B) \\equiv \\arg(1+i) \\equiv \\frac{\\pi}{4} \\ [2\\pi].$$

                <p>Pour $z_C = (1-\\sqrt{3})(1+i)$. Ici $1-\\sqrt{3} < 0$ ; on écrit $1-\\sqrt{3} = -(\\sqrt{3}-1)$ avec $\\sqrt{3}-1 > 0$.</p>
                <p>Donc $z_C = -(\\sqrt{3}-1)(1+i)$ ; le signe $-$ ajoute $\\pi$ à l’argument :</p>
                $$\\arg(z_C) \\equiv \\arg(1+i) + \\pi \\equiv \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4} \\ [2\\pi].$$

                <p>On a bien :</p>
                $$\\boxed{\\arg(z_B) \\equiv \\frac{\\pi}{4} \\ [2\\pi],\\qquad \\arg(z_C) \\equiv \\frac{5\\pi}{4} \\ [2\\pi]}$$
            `
        },

        // ========== Question 2.d ==========
        {
            id: 'prob5-q2d',
            texte: '2.d – Construire B et C.',
            solution: `
                <p>B est sur le cercle $\\mathcal{C}$ et sur la demi-droite d’origine O faisant un angle $\\pi/4$ avec l’axe des abscisses.</p>
                <p>C est sur le cercle et sur la demi-droite d’origine O faisant un angle $5\\pi/4$ (soit la bissectrice du troisième quadrant).</p>
                <p>Tracer ces deux demi-droites ; leurs intersections avec le cercle donnent les points B et C.</p>
            `
        },

        // ========== Question 3 (corrigée) ==========
        {
            id: 'prob5-q3',
            texte: '3 – Montrer que $ABDC$ est un losange et calculer son aire.',
            solution: `
                <p><strong>Montrons que les quatre côtés sont égaux :</strong></p>
                <p>On a déjà $AB = AC = AD = 2\\sqrt{2}$.</p>
                <p>Il reste à calculer $BD$ et $CD$.</p>

                <p><strong>Calcul de $BD$ :</strong></p>
                $$BD = |z_D - z_B| = |2 - (1+\\sqrt{3})(1+i)| = |2 - (1+\\sqrt{3}) - i(1+\\sqrt{3})|$$
                $$= |(1-\\sqrt{3}) - i(1+\\sqrt{3})| = |(1-\\sqrt{3}) + i(-1-\\sqrt{3})|.$$
                <p>Module au carré :</p>
                $$BD^2 = (1-\\sqrt{3})^2 + (-1-\\sqrt{3})^2 = (1-2\\sqrt{3}+3) + (1+2\\sqrt{3}+3) = 8.$$
                <p>Donc $BD = 2\\sqrt{2}$.</p>

                <p><strong>Calcul de $CD$ :</strong></p>
                $$CD = |z_D - z_C| = |2 - (1-\\sqrt{3})(1+i)| = |2 - (1-\\sqrt{3}) - i(1-\\sqrt{3})|$$
                $$= |(1+\\sqrt{3}) - i(1-\\sqrt{3})|.$$
                <p>Module au carré :</p>
                $$CD^2 = (1+\\sqrt{3})^2 + (1-\\sqrt{3})^2 = (1+2\\sqrt{3}+3) + (1-2\\sqrt{3}+3) = 8.$$
                <p>Donc $CD = 2\\sqrt{2}$.</p>

                <p>On a donc $AB = BD = DC = CA = 2\\sqrt{2}$ : le quadrilatère $ABDC$ (dans l’ordre A–B–D–C) a ses quatre côtés égaux, c’est un losange.</p>

                <p><strong>Calcul de l’aire :</strong></p>
                <p>Les diagonales du losange sont $[AD]$ et $[BC]$.</p>
                $$AD = 2\\sqrt{2} \\quad (\\text{déjà calculé}).$$
                $$BC = |z_C - z_B| = |(1-\\sqrt{3} - 1 - \\sqrt{3})(1+i)| = |-2\\sqrt{3}(1+i)| = 2\\sqrt{3} \\times |1+i| = 2\\sqrt{3} \\times \\sqrt{2} = 2\\sqrt{6}.$$
                <p>L’aire d’un losange est la moitié du produit des diagonales :</p>
                $$\\text{Aire} = \\frac12 \\times AD \\times BC = \\frac12 \\times (2\\sqrt{2}) \\times (2\\sqrt{6}) = \\frac12 \\times 4\\sqrt{12} = 2\\sqrt{12} = 4\\sqrt{3}.$$
                $$\\boxed{\\text{Aire} = 4\\sqrt{3}}$$
            `
        }
    ]
});