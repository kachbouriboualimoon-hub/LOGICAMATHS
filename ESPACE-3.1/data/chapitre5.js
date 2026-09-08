// chapitre5.js – Produit vectoriel
// Extrait du PDF "geometrie espace.pdf" – pages 35 à 40
// + Exercices de synthèse (11 et 12)

data.chapitres.push({
    id: 5,
    titre: "Produit vectoriel",
    rappel: `
        <p><strong>Définition :</strong> Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs de l'espace.</p>
        <ul>
            <li>Si $\\vec{u}$ et $\\vec{v}$ sont colinéaires, alors $\\vec{u} \\wedge \\vec{v} = \\vec{0}$.</li>
            <li>Si $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, alors $\\vec{u} \\wedge \\vec{v}$ est l'unique vecteur tel que :
                <ul>
                    <li>$\\vec{u} \\wedge \\vec{v}$ est orthogonal à $\\vec{u}$ et à $\\vec{v}$.</li>
                    <li>La base $(\\vec{u},\\vec{v},\\vec{u}\\wedge\\vec{v})$ est directe.</li>
                    <li>$\\|\\vec{u} \\wedge \\vec{v}\\| = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\sin \\theta$, où $\\theta$ est l'angle géométrique entre $\\vec{u}$ et $\\vec{v}$.</li>
                </ul>
            </li>
        </ul>

        <p><strong>Expression analytique :</strong> Dans une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$, si $\\vec{u}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x'\\\\y'\\\\z'\\end{pmatrix}$, alors :</p>
        <p style="text-align:center; font-size:1.1rem;">
            $\\vec{u} \\wedge \\vec{v} = 
            \\begin{pmatrix}
                yz' - zy' \\\\
                zx' - xz' \\\\
                xy' - yx'
            \\end{pmatrix}$
        </p>

        <p><strong>Aire d'un parallélogramme :</strong> Si $ABCD$ est un parallélogramme, alors :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $\\mathcal{A}_{ABCD} = \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AD}\\|$
        </p>

        <p><strong>Aire d'un triangle :</strong> Si $ABC$ est un triangle, alors :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$
        </p>

        <p><strong>Distance d'un point à une droite :</strong> Soit $\\mathcal{D}$ une droite de vecteur directeur $\\vec{u}$ et passant par $A$. La distance du point $M$ à $\\mathcal{D}$ est :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $d(M,\\mathcal{D}) = \\dfrac{\\|\\overrightarrow{AM} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}$
        </p>

        <p><strong>Volume d'un tétraèdre :</strong> Pour un tétraèdre $ABCD$ :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $V = \\dfrac{1}{6} \\left| (\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} \\right|$
        </p>

        <p><strong>Volume d'un parallélépipède :</strong> Pour un parallélépipède défini par $\\vec{u},\\vec{v},\\vec{w}$ :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $V = \\left| (\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w} \\right| = |\\det(\\vec{u},\\vec{v},\\vec{w})|$
        </p>

        <p><strong>Non-alignement de trois points :</strong> Soit $A,B,C$ trois points. Ils ne sont pas alignés si et seulement si $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} \\neq \\vec{0}$. En effet, si les points étaient alignés, les vecteurs seraient colinéaires et leur produit vectoriel serait nul.</p>

        <p><strong>Vecteur normal à un plan :</strong> Soit $A,B,C$ trois points non alignés définissant un plan. Alors le vecteur $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$ est un vecteur normal à ce plan.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> Le produit vectoriel est anticommutatif : $\\vec{u} \\wedge \\vec{v} = -(\\vec{v} \\wedge \\vec{u})$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Le produit vectoriel est bilinéaire : $(\\alpha\\vec{u} + \\beta\\vec{v}) \\wedge \\vec{w} = \\alpha(\\vec{u}\\wedge\\vec{w}) + \\beta(\\vec{v}\\wedge\\vec{w})$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> $\\vec{u} \\wedge \\vec{v} = \\vec{0}$ si et seulement si $\\vec{u}$ et $\\vec{v}$ sont colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w} = (\\vec{v} \\wedge \\vec{w}) \\cdot \\vec{u} = (\\vec{w} \\wedge \\vec{u}) \\cdot \\vec{v} = \\det(\\vec{u},\\vec{v},\\vec{w})$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Trois points $A,B,C$ ne sont pas alignés ssi $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} \\neq \\vec{0}$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Si $A,B,C$ ne sont pas alignés, alors $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$ est un vecteur normal au plan $(ABC)$.
        </div>
        <div class="theoreme-block">
            <strong>Remarque :</strong> Le produit vectoriel dépend de l'orientation de l'espace (base directe ou indirecte). Si on change d'orientation, le produit vectoriel change de signe.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer un produit vectoriel, on utilise la formule analytique avec les coordonnées des deux vecteurs.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour vérifier que trois points $A,B,C$ ne sont pas alignés, on calcule $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$. Si le résultat est non nul, les points ne sont pas alignés.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver un vecteur normal à un plan défini par trois points $A,B,C$, on calcule $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer l'aire d'un triangle $ABC$, on calcule $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$ puis on prend la moitié de sa norme.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer la distance d'un point à une droite, on utilise la formule $d = \\dfrac{\\|\\overrightarrow{AM} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer le volume d'un tétraèdre, on utilise la formule $V = \\dfrac{1}{6}|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux vecteurs sont colinéaires, on peut vérifier que leur produit vectoriel est nul.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Le produit vectoriel $\\vec{u} \\wedge \\vec{v}$ donne un vecteur orthogonal au plan formé par $\\vec{u}$ et $\\vec{v}$.</div>
        <div class="astuce-box">💡 La norme du produit vectoriel est l'aire du parallélogramme construit sur les deux vecteurs.</div>
        <div class="astuce-box">💡 Pour mémoriser la formule analytique : $\\vec{u} \\wedge \\vec{v} = (y z' - z y')\\vec{i} + (z x' - x z')\\vec{j} + (x y' - y x')\\vec{k}$.</div>
        <div class="astuce-box">💡 Le produit vectoriel est un outil puissant pour trouver un vecteur normal à un plan.</div>
        <div class="astuce-box">💡 Pour montrer que trois points ne sont pas alignés, il suffit de montrer que leur produit vectoriel est non nul.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Le produit vectoriel n'est pas commutatif : $\\vec{u} \\wedge \\vec{v} = -\\vec{v} \\wedge \\vec{u}$.</div>
        <div class="erreur-box">⚠️ Ne pas confondre produit scalaire ($\\vec{u}\\cdot\\vec{v}$) et produit vectoriel ($\\vec{u}\\wedge\\vec{v}$).</div>
        <div class="erreur-box">⚠️ La formule analytique du produit vectoriel n'est valable que dans une base orthonormée directe.</div>
        <div class="erreur-box">⚠️ Pour le volume d'un tétraèdre, ne pas oublier le facteur $\\frac{1}{6}$.</div>
        <div class="erreur-box">⚠️ La distance d'un point à une droite est positive (valeur absolue dans la formule).</div>
        <div class="erreur-box">⚠️ Pour vérifier que trois points ne sont pas alignés, il faut que le produit vectoriel soit strictement non nul (pas seulement différent du vecteur nul).</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Le produit vectoriel $\\vec{u} \\wedge \\vec{v}$ est :",
                options: ["un scalaire", "un vecteur", "un réel", "un angle"],
                correct: 1
            },
            {
                type: "qcm",
                text: "L'aire d'un parallélogramme construit sur $\\vec{u}$ et $\\vec{v}$ est :",
                options: ["$\\|\\vec{u} \\wedge \\vec{v}\\|$", "$\\vec{u} \\cdot \\vec{v}$", "$\\|\\vec{u}\\|\\|\\vec{v}\\|$", "$\\frac{1}{2}\\|\\vec{u} \\wedge \\vec{v}\\|$"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Le volume d'un tétraèdre $ABCD$ est :",
                options: ["$\\frac{1}{2}|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|$", "$\\frac{1}{6}|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|$", "$|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|$", "$\\frac{1}{3}|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|$"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Pour montrer que trois points $A,B,C$ ne sont pas alignés, on vérifie que :",
                options: ["$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$", "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} \\neq \\vec{0}$", "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\vec{0}$", "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} \\neq 0$"],
                correct: 1
            },
            {
                type: "vf",
                text: "Le produit vectoriel est commutatif.",
                correct: 0 // Faux, il est anticommutatif
            },
            {
                type: "vf",
                text: "Si $\\vec{u} \\wedge \\vec{v} = \\vec{0}$, alors $\\vec{u}$ et $\\vec{v}$ sont colinéaires.",
                correct: 1 // Vrai
            },
            {
                type: "vf",
                text: "Le vecteur $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$ est normal au plan $(ABC)$.",
                correct: 1 // Vrai
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $\\vec{u}\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}$, $\\vec{v}\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}$.</p>
                <p>1. Calculer $\\vec{u} \\wedge \\vec{v}$.</p>
                <p>2. Calculer $\\vec{v} \\wedge \\vec{w}$.</p>
                <p>3. Calculer $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w}$.</p>
                <p>4. En déduire le volume du parallélépipède construit sur $\\vec{u},\\vec{v},\\vec{w}$.</p>
            `,
            questions: [
                {
                    id: "ex5_q1",
                    texte: "Calculer $\\vec{u} \\wedge \\vec{v}$.",
                    solution: "$\\vec{u} \\wedge \\vec{v} = \\begin{pmatrix} 2\\times3 - (-1)\\times(-1) \\\\ (-1)\\times2 - 1\\times3 \\\\ 1\\times(-1) - 2\\times2 \\end{pmatrix} = \\begin{pmatrix} 6 - 1 \\\\ -2 - 3 \\\\ -1 - 4 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -5 \\\\ -5 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q2",
                    texte: "Calculer $\\vec{v} \\wedge \\vec{w}$.",
                    solution: "$\\vec{v} \\wedge \\vec{w} = \\begin{pmatrix} (-1)\\times2 - 3\\times1 \\\\ 3\\times0 - 2\\times2 \\\\ 2\\times1 - (-1)\\times0 \\end{pmatrix} = \\begin{pmatrix} -2 - 3 \\\\ 0 - 4 \\\\ 2 - 0 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ -4 \\\\ 2 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q3",
                    texte: "Calculer $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w}$.",
                    solution: "$(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w} = 5\\times0 + (-5)\\times1 + (-5)\\times2 = 0 - 5 - 10 = -15$."
                },
                {
                    id: "ex5_q4",
                    texte: "En déduire le volume du parallélépipède.",
                    solution: "$V = |(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w}| = |-15| = 15$ unités de volume."
                }
            ],
            astuces_exo: "💡 Le volume du parallélépipède est la valeur absolue du produit mixte $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w}$.",
            erreurs_exo: "⚠️ Ne pas oublier la valeur absolue pour le volume."
        },
        // ============================================================
        // EXERCICE 2
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,1)$, $B(2,1,0)$ et $C(0,2,2)$.</p>
                <p>1. Calculer l'aire du triangle $ABC$.</p>
                <p>2. Déterminer un vecteur normal au plan $(ABC)$.</p>
                <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q5",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (1,1,-1)$, $\\overrightarrow{AC} = C - A = (-1,2,1)$."
                },
                {
                    id: "ex5_q6",
                    texte: "Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times1 - (-1)\\times2 \\\\ (-1)\\times(-1) - 1\\times1 \\\\ 1\\times2 - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 1 + 2 \\\\ 1 - 1 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 3 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q7",
                    texte: "Calculer l'aire du triangle $ABC$.",
                    solution: "$\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\dfrac{1}{2} \\sqrt{3^2 + 0^2 + 3^2} = \\dfrac{1}{2} \\sqrt{18} = \\dfrac{3\\sqrt{2}}{2}$ unités d'aire."
                },
                {
                    id: "ex5_q8",
                    texte: "Donner un vecteur normal au plan $(ABC)$.",
                    solution: "Le vecteur $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (3,0,3)$ est normal au plan $(ABC)$."
                }
            ],
            astuces_exo: "💡 Le produit vectoriel de deux vecteurs directeurs d'un plan donne un vecteur normal à ce plan.",
            erreurs_exo: "⚠️ L'aire du triangle est la moitié de l'aire du parallélogramme."
        },
        // ============================================================
        // EXERCICE 3
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit la droite $\\mathcal{D}$ passant par $A(1,0,2)$ et de vecteur directeur $\\vec{u}\\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$.</p>
                <p>Calculer la distance du point $M(0,1,3)$ à la droite $\\mathcal{D}$.</p>
                <canvas class="figure-canvas" data-figure="distance_droite" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q9",
                    texte: "Calculer $\\overrightarrow{AM}$.",
                    solution: "$\\overrightarrow{AM} = M - A = (-1,1,1)$."
                },
                {
                    id: "ex5_q10",
                    texte: "Calculer $\\overrightarrow{AM} \\wedge \\vec{u}$.",
                    solution: "$\\overrightarrow{AM} \\wedge \\vec{u} = \\begin{pmatrix} 1\\times1 - 1\\times(-1) \\\\ 1\\times2 - (-1)\\times1 \\\\ (-1)\\times(-1) - 1\\times2 \\end{pmatrix} = \\begin{pmatrix} 1 + 1 \\\\ 2 + 1 \\\\ 1 - 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q11",
                    texte: "Calculer la distance de M à $\\mathcal{D}$.",
                    solution: "$d(M,\\mathcal{D}) = \\dfrac{\\|\\overrightarrow{AM} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|} = \\dfrac{\\sqrt{2^2+3^2+(-1)^2}}{\\sqrt{2^2+(-1)^2+1^2}} = \\dfrac{\\sqrt{14}}{\\sqrt{6}} = \\sqrt{\\dfrac{14}{6}} = \\sqrt{\\dfrac{7}{3}}$."
                }
            ],
            astuces_exo: "💡 La distance d'un point à une droite est la plus courte distance entre ce point et la droite.",
            erreurs_exo: "⚠️ Ne pas oublier la valeur absolue (la norme est toujours positive)."
        },
        // ============================================================
        // EXERCICE 4
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,1,0)$, $B(0,2,1)$, $C(2,0,1)$ et $D(1,1,2)$.</p>
                <p>1. Calculer le volume du tétraèdre $ABCD$.</p>
                <p>2. Calculer l'aire du triangle $ABC$.</p>
                <p>3. En déduire la hauteur issue de $D$ dans le tétraèdre.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q12",
                    texte: "Calculer $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-1,1,1)$, $\\overrightarrow{AC} = C - A = (1,-1,1)$, $\\overrightarrow{AD} = D - A = (0,0,2)$."
                },
                {
                    id: "ex5_q13",
                    texte: "Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times1 - 1\\times(-1) \\\\ 1\\times1 - (-1)\\times1 \\\\ (-1)\\times(-1) - 1\\times1 \\end{pmatrix} = \\begin{pmatrix} 1 + 1 \\\\ 1 + 1 \\\\ 1 - 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q14",
                    texte: "Calculer le volume du tétraèdre.",
                    solution: "$(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = 2\\times0 + 2\\times0 + 0\\times2 = 0$. Donc $V = \\dfrac{1}{6} \\times |0| = 0$. Les quatre points sont coplanaires !"
                },
                {
                    id: "ex5_q15",
                    texte: "Calculer l'aire du triangle $ABC$.",
                    solution: "$\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\sqrt{2^2+2^2+0^2} = \\sqrt{8} = 2\\sqrt{2}$. $\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\times 2\\sqrt{2} = \\sqrt{2}$."
                },
                {
                    id: "ex5_q16",
                    texte: "Que vaut la hauteur issue de D ?",
                    solution: "Comme le volume est nul, la hauteur issue de D est nulle (D est dans le plan (ABC))."
                }
            ],
            astuces_exo: "💡 Si le volume d'un tétraèdre est nul, les quatre points sont coplanaires.",
            erreurs_exo: "⚠️ Vérifier que les points ne sont pas coplanaires avant de calculer le volume."
        },
        // ============================================================
        // EXERCICE 5
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,2,0)$, $B(3,1,1)$, $C(0,0,2)$ et $D(2,3,1)$.</p>
                <p>1. Vérifier que $A,B,C,D$ ne sont pas coplanaires.</p>
                <p>2. Calculer le volume du tétraèdre $ABCD$.</p>
                <p>3. Calculer l'aire du triangle $ABD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q17",
                    texte: "Calculer $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} = (2,-1,1)$, $\\overrightarrow{AC} = (-1,-2,2)$, $\\overrightarrow{AD} = (1,1,1)$."
                },
                {
                    id: "ex5_q18",
                    texte: "Vérifier que les points ne sont pas coplanaires.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} (-1)\\times2 - 1\\times(-2) \\\\ 1\\times(-1) - 2\\times2 \\\\ 2\\times(-2) - (-1)\\times(-1) \\end{pmatrix} = \\begin{pmatrix} -2 + 2 \\\\ -1 - 4 \\\\ -4 - 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -5 \\\\ -5 \\end{pmatrix}$. $(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = 0\\times1 + (-5)\\times1 + (-5)\\times1 = -10 \\neq 0$. Donc les points ne sont pas coplanaires."
                },
                {
                    id: "ex5_q19",
                    texte: "Calculer le volume du tétraèdre.",
                    solution: "$V = \\dfrac{1}{6} \\times |-10| = \\dfrac{10}{6} = \\dfrac{5}{3}$ unités de volume."
                },
                {
                    id: "ex5_q20",
                    texte: "Calculer l'aire du triangle $ABD$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AD} = \\begin{pmatrix} (-1)\\times1 - 1\\times1 \\\\ 1\\times1 - 2\\times1 \\\\ 2\\times1 - (-1)\\times1 \\end{pmatrix} = \\begin{pmatrix} -1 - 1 \\\\ 1 - 2 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -1 \\\\ 3 \\end{pmatrix}$. $\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AD}\\| = \\sqrt{(-2)^2+(-1)^2+3^2} = \\sqrt{4+1+9} = \\sqrt{14}$. $\\mathcal{A}_{ABD} = \\dfrac{1}{2}\\sqrt{14}$."
                }
            ],
            astuces_exo: "💡 Pour vérifier que des points sont coplanaires, on peut utiliser le produit mixte $(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}$.",
            erreurs_exo: "⚠️ Ne pas oublier le facteur $\\frac{1}{2}$ pour l'aire du triangle."
        },
        // ============================================================
        // EXERCICE 6
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(0,1,0)$, $B(1,0,1)$, $C(2,1,0)$ et $D(1,2,1)$.</p>
                <p>1. Montrer que $ABCD$ est un tétraèdre.</p>
                <p>2. Calculer son volume.</p>
                <p>3. Calculer la hauteur issue de $A$ dans ce tétraèdre.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q21",
                    texte: "Montrer que les points forment un tétraèdre.",
                    solution: "Il suffit de montrer que les points ne sont pas coplanaires. $\\overrightarrow{AB} = (1,-1,1)$, $\\overrightarrow{AC} = (2,0,0)$, $\\overrightarrow{AD} = (1,1,1)$. $(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = ?$ $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} (-1)\\times0 - 1\\times0 \\\\ 1\\times2 - 1\\times0 \\\\ 1\\times0 - (-1)\\times2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 2 \\\\ 2 \\end{pmatrix}$. $(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = 0\\times1 + 2\\times1 + 2\\times1 = 4 \\neq 0$. Donc les points ne sont pas coplanaires, ils forment un tétraèdre."
                },
                {
                    id: "ex5_q22",
                    texte: "Calculer le volume.",
                    solution: "$V = \\dfrac{1}{6} \\times |4| = \\dfrac{2}{3}$ unités de volume."
                },
                {
                    id: "ex5_q23",
                    texte: "Calculer la hauteur issue de A.",
                    solution: "La hauteur issue de A est la distance de A au plan (BCD). $V = \\dfrac{1}{3} \\times \\text{Aire}_{BCD} \\times h_A$. Calculons $\\text{Aire}_{BCD}$ : $\\overrightarrow{BC} = (1,1,-1)$, $\\overrightarrow{BD} = (0,2,0)$. $\\overrightarrow{BC} \\wedge \\overrightarrow{BD} = \\begin{pmatrix} 1\\times0 - (-1)\\times2 \\\\ (-1)\\times0 - 1\\times0 \\\\ 1\\times2 - 1\\times0 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 2 \\end{pmatrix}$. $\\|\\overrightarrow{BC} \\wedge \\overrightarrow{BD}\\| = \\sqrt{4+0+4} = 2\\sqrt{2}$. $\\text{Aire}_{BCD} = \\dfrac{1}{2} \\times 2\\sqrt{2} = \\sqrt{2}$. Donc $h_A = \\dfrac{3V}{\\text{Aire}_{BCD}} = \\dfrac{3\\times\\frac{2}{3}}{\\sqrt{2}} = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$."
                }
            ],
            astuces_exo: "💡 La hauteur issue d'un sommet est la distance de ce sommet au plan de la face opposée.",
            erreurs_exo: "⚠️ Bien identifier la face opposée pour le calcul de la hauteur."
        },
        // ============================================================
        // EXERCICE 7
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$.</p>
                <p>1. Calculer l'aire du triangle $ABC$.</p>
                <p>2. Calculer la distance du point $O(0,0,0)$ au plan $(ABC)$.</p>
                <p>3. En déduire le volume du tétraèdre $OABC$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q24",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$."
                },
                {
                    id: "ex5_q25",
                    texte: "Calculer l'aire du triangle $ABC$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 2\\times3 - 0\\times0 \\\\ 0\\times(-1) - (-1)\\times3 \\\\ (-1)\\times0 - 2\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$. $\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\sqrt{36+9+4} = \\sqrt{49} = 7$. $\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\times 7 = \\dfrac{7}{2}$."
                },
                {
                    id: "ex5_q26",
                    texte: "Calculer la distance de O au plan (ABC).",
                    solution: "Le vecteur $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (6,3,2)$ est normal au plan (ABC). $\\overrightarrow{AO} = O - A = (-1,0,0)$. $d(O,(ABC)) = \\dfrac{|\\overrightarrow{AO} \\cdot \\vec{n}|}{\\|\\vec{n}\\|} = \\dfrac{|(-1)\\times6 + 0\\times3 + 0\\times2|}{7} = \\dfrac{6}{7}$."
                },
                {
                    id: "ex5_q27",
                    texte: "Calculer le volume du tétraèdre OABC.",
                    solution: "$V = \\dfrac{1}{3} \\times \\mathcal{A}_{ABC} \\times d = \\dfrac{1}{3} \\times \\dfrac{7}{2} \\times \\dfrac{6}{7} = 1$ unité de volume."
                }
            ],
            astuces_exo: "💡 Le volume d'un tétraèdre peut être calculé via $V = \\dfrac{1}{3} \\times \\text{Aire}_{\\text{base}} \\times \\text{hauteur}$.",
            erreurs_exo: "⚠️ La distance d'un point à un plan est positive."
        },
        // ============================================================
        // EXERCICE 8
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$ et $D(1,1,1)$.</p>
                <p><strong>Partie A (Ch. 4 – Déterminant) :</strong></p>
                <p>1. Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.</p>
                <p>2. En déduire le volume du tétraèdre $ABCD$.</p>
                <p><strong>Partie B (Ch. 5 – Produit vectoriel) :</strong></p>
                <p>3. Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.</p>
                <p>4. Retrouver le volume du tétraèdre $ABCD$ en utilisant le produit mixte $(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}$.</p>
                <p><strong>Partie C (Synthèse) :</strong></p>
                <p>5. Calculer l'aire du triangle $ABC$.</p>
                <p>6. En déduire la hauteur issue de $D$ dans le tétraèdre $ABCD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q28",
                    texte: "(Ch.4) Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.",
                    solution: "$\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$, $\\overrightarrow{AD} = (0,1,1)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 1 \\end{vmatrix} = -1\\times(0\\times1 - 1\\times3) - (-1)\\times(2\\times1 - 1\\times0) + 0 = -1\\times(-3) + 1\\times(2) = 3 + 2 = 5$."
                },
                {
                    id: "ex5_q29",
                    texte: "(Ch.4) En déduire le volume.",
                    solution: "$V = \\dfrac{1}{6} \\times |5| = \\dfrac{5}{6}$ unités de volume."
                },
                {
                    id: "ex5_q30",
                    texte: "(Ch.5) Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 2\\times3 - 0\\times0 \\\\ 0\\times(-1) - (-1)\\times3 \\\\ (-1)\\times0 - 2\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q31",
                    texte: "(Ch.5) Retrouver le volume avec le produit mixte.",
                    solution: "$(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = 6\\times0 + 3\\times1 + 2\\times1 = 5$. $V = \\dfrac{1}{6} \\times |5| = \\dfrac{5}{6}$. On retrouve bien le même résultat."
                },
                {
                    id: "ex5_q32",
                    texte: "(Synthèse) Calculer l'aire du triangle ABC.",
                    solution: "$\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\sqrt{6^2+3^2+2^2} = \\sqrt{36+9+4} = \\sqrt{49} = 7$. $\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\times 7 = \\dfrac{7}{2}$."
                },
                {
                    id: "ex5_q33",
                    texte: "(Synthèse) En déduire la hauteur issue de D.",
                    solution: "$V = \\dfrac{1}{3} \\times \\mathcal{A}_{ABC} \\times h_D \\Rightarrow h_D = \\dfrac{3V}{\\mathcal{A}_{ABC}} = \\dfrac{3\\times\\frac{5}{6}}{\\frac{7}{2}} = \\dfrac{\\frac{5}{2}}{\\frac{7}{2}} = \\dfrac{5}{7}$."
                }
            ],
            astuces_exo: "💡 Cet exercice synthétise les chapitres 4 (déterminant) et 5 (produit vectoriel).",
            erreurs_exo: "⚠️ Comparer les résultats obtenus par les deux méthodes pour vérifier la cohérence."
        },
        // ============================================================
        // EXERCICE 9
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,2)$, $B(2,1,0)$ et $C(0,2,1)$.</p>
                <p><strong>1.</strong> Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.</p>
                <p><strong>2.</strong> Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.</p>
                <p><strong>3.</strong> Les points A, B et C sont-ils alignés ? Justifier.</p>
                <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q34",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (1,1,-2)$, $\\overrightarrow{AC} = C - A = (-1,2,-1)$."
                },
                {
                    id: "ex5_q35",
                    texte: "Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times(-1) - (-2)\\times2 \\\\ (-2)\\times(-1) - 1\\times(-1) \\\\ 1\\times2 - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} -1 + 4 \\\\ 2 + 1 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix} \\neq \\vec{0}$."
                },
                {
                    id: "ex5_q36",
                    texte: "Les points A, B et C sont-ils alignés ?",
                    solution: "Non, car $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} \\neq \\vec{0}$. Les vecteurs ne sont pas colinéaires, donc les points ne sont pas alignés."
                }
            ],
            astuces_exo: "💡 Pour vérifier que trois points ne sont pas alignés, on calcule le produit vectoriel des deux vecteurs qui les relient. Si le résultat est non nul, ils ne sont pas alignés.",
            erreurs_exo: "⚠️ Ne pas confondre avec le produit scalaire (qui donne 0 pour des vecteurs orthogonaux, pas pour des vecteurs non colinéaires)."
        },
        // ============================================================
        // EXERCICE 10
        // ============================================================
        {
            numero: 10,
            enonce: `
                <p>L'espace est muni d'une base orthonormée directe $(\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,-1,2)$, $B(0,1,3)$ et $C(2,0,1)$.</p>
                <p><strong>1.</strong> Montrer que $A,B,C$ ne sont pas alignés.</p>
                <p><strong>2.</strong> Déterminer un vecteur normal $\\vec{n}$ au plan $(ABC)$.</p>
                <p><strong>3.</strong> En déduire une équation cartésienne du plan $(ABC)$.</p>
                <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q37",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-1,2,1)$, $\\overrightarrow{AC} = C - A = (1,1,-1)$."
                },
                {
                    id: "ex5_q38",
                    texte: "Montrer que $A,B,C$ ne sont pas alignés.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 2\\times(-1) - 1\\times1 \\\\ 1\\times1 - (-1)\\times(-1) \\\\ (-1)\\times1 - 2\\times1 \\end{pmatrix} = \\begin{pmatrix} -2 - 1 \\\\ 1 - 1 \\\\ -1 - 2 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 0 \\\\ -3 \\end{pmatrix} \\neq \\vec{0}$. Donc les points ne sont pas alignés."
                },
                {
                    id: "ex5_q39",
                    texte: "Déterminer un vecteur normal au plan $(ABC)$.",
                    solution: "Un vecteur normal est $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (-3,0,-3)$ (ou tout multiple non nul)."
                },
                {
                    id: "ex5_q40",
                    texte: "En déduire une équation cartésienne du plan $(ABC)$.",
                    solution: "Le plan passe par A(1,-1,2) et a pour normale $\\vec{n}(-3,0,-3)$. L'équation est : $-3(x-1) + 0(y+1) - 3(z-2) = 0 \\Rightarrow -3x + 3 - 3z + 6 = 0 \\Rightarrow -3x - 3z + 9 = 0 \\Rightarrow x + z - 3 = 0$."
                }
            ],
            astuces_exo: "💡 Le produit vectoriel de deux vecteurs directeurs d'un plan donne un vecteur normal à ce plan.",
            erreurs_exo: "⚠️ Bien vérifier que les points ne sont pas alignés avant de calculer le vecteur normal, sinon le produit vectoriel serait nul."
        },
        // ============================================================
        // EXERCICE 11 – Synthèse 1
        // ============================================================
        {
            numero: 11,
            enonce: `
                <p><strong>Exercice de synthèse n°1</strong></p>
                <p>L'espace est muni d'un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$ et $D(1,1,1)$.</p>
                <p>On considère le tétraèdre $ABCD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q41",
                    texte: "(Ch.1) Calculer les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-1, 2, 0)$, $\\overrightarrow{AC} = C - A = (-1, 0, 3)$, $\\overrightarrow{AD} = D - A = (0, 1, 1)$."
                },
                {
                    id: "ex5_q42",
                    texte: "(Ch.1) Montrer que les points $A$, $B$ et $C$ ne sont pas alignés.",
                    solution: "$\\overrightarrow{AB}(-1,2,0)$ et $\\overrightarrow{AC}(-1,0,3)$ ne sont pas proportionnels (car $2/0$ n'est pas défini). Donc A, B et C ne sont pas alignés."
                },
                {
                    id: "ex5_q43",
                    texte: "(Ch.3) Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-1)\\times(-1) + 2\\times0 + 0\\times3 = 1 + 0 + 0 = 1$."
                },
                {
                    id: "ex5_q44",
                    texte: "(Ch.3) Calculer la norme de $\\overrightarrow{AB}$ et celle de $\\overrightarrow{AC}$.",
                    solution: "$\\|\\overrightarrow{AB}\\| = \\sqrt{(-1)^2 + 2^2 + 0^2} = \\sqrt{5}$. $\\|\\overrightarrow{AC}\\| = \\sqrt{(-1)^2 + 0^2 + 3^2} = \\sqrt{10}$."
                },
                {
                    id: "ex5_q45",
                    texte: "(Ch.4) Montrer que les points $A,B,C,D$ ne sont pas coplanaires.",
                    solution: "$\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$, $\\overrightarrow{AD} = (0,1,1)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 1 \\end{vmatrix} = -1\\times(0\\times1 - 1\\times3) - (-1)\\times(2\\times1 - 1\\times0) + 0 = -1\\times(-3) + 1\\times(2) = 3 + 2 = 5 \\neq 0$. Donc les points ne sont pas coplanaires."
                },
                {
                    id: "ex5_q46",
                    texte: "(Ch.5) Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 2\\times3 - 0\\times0 \\\\ 0\\times(-1) - (-1)\\times3 \\\\ (-1)\\times0 - 2\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q47",
                    texte: "(Ch.5) En déduire l'aire du triangle $ABC$.",
                    solution: "$\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\sqrt{6^2 + 3^2 + 2^2} = \\sqrt{36+9+4} = \\sqrt{49} = 7$. $\\mathcal{A}_{ABC} = \\dfrac{1}{2} \\times 7 = \\dfrac{7}{2}$ unités d'aire."
                },
                {
                    id: "ex5_q48",
                    texte: "(Ch.5) Calculer le volume du tétraèdre $ABCD$.",
                    solution: "$(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = 6\\times0 + 3\\times1 + 2\\times1 = 5$. $V = \\dfrac{1}{6} \\times |5| = \\dfrac{5}{6}$ unités de volume."
                },
                {
                    id: "ex5_q49",
                    texte: "(Ch.5) Calculer la distance du point $D$ au plan $(ABC)$.",
                    solution: "La distance de D au plan (ABC) est la hauteur issue de D. $V = \\dfrac{1}{3} \\times \\mathcal{A}_{ABC} \\times h_D \\Rightarrow h_D = \\dfrac{3V}{\\mathcal{A}_{ABC}} = \\dfrac{3\\times\\frac{5}{6}}{\\frac{7}{2}} = \\dfrac{\\frac{5}{2}}{\\frac{7}{2}} = \\dfrac{5}{7}$."
                },
                {
                    id: "ex5_q50",
                    texte: "(Ch.3) Déterminer l'angle $\\widehat{BAC}$ (en radian, à $10^{-2}$ près).",
                    solution: "$\\cos\\widehat{BAC} = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{\\|\\overrightarrow{AB}\\|\\|\\overrightarrow{AC}\\|} = \\dfrac{1}{\\sqrt{5}\\sqrt{10}} = \\dfrac{1}{\\sqrt{50}} = \\dfrac{1}{5\\sqrt{2}} \\approx 0.1414$. Donc $\\widehat{BAC} = \\arccos(0.1414) \\approx 1.43$ radians."
                }
            ],
            astuces_exo: "💡 Cet exercice synthétise les chapitres 1, 3, 4 et 5. Utilisez les formules du cours pour chaque question.",
            erreurs_exo: "⚠️ Bien identifier le chapitre correspondant à chaque question."
        },
        // ============================================================
        // EXERCICE 12 – Synthèse 2
        // ============================================================
        {
            numero: 12,
            enonce: `
                <p><strong>Exercice de synthèse n°2</strong></p>
                <p>L'espace est muni d'un repère orthonormé direct $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p>Soit $ABCDEFGH$ un parallélépipède rectangle tel que $AB=2$, $AD=1$ et $AE=3$.</p>
                <p>On note $I$ le milieu de $[EF]$, $J$ le milieu de $[BC]$ et $K$ le centre du parallélogramme $ABCD$.</p>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q51",
                    texte: "(Ch.1) Donner les coordonnées des sommets du parallélépipède.",
                    solution: "A(0,0,0), B(2,0,0), C(2,1,0), D(0,1,0), E(0,0,3), F(2,0,3), G(2,1,3), H(0,1,3)."
                },
                {
                    id: "ex5_q52",
                    texte: "(Ch.1) Déterminer les coordonnées des points $I$, $J$ et $K$.",
                    solution: "I milieu de [EF] : $I(1,0,3)$. J milieu de [BC] : $J(2,\\frac{1}{2},0)$. K centre de ABCD : $K(1,\\frac{1}{2},0)$."
                },
                {
                    id: "ex5_q53",
                    texte: "(Ch.3) Calculer $\\overrightarrow{AI} \\cdot \\overrightarrow{AJ}$.",
                    solution: "$\\overrightarrow{AI} = (1,0,3)$, $\\overrightarrow{AJ} = (2,\\frac{1}{2},0)$. $\\overrightarrow{AI} \\cdot \\overrightarrow{AJ} = 1\\times2 + 0\\times\\frac{1}{2} + 3\\times0 = 2$."
                },
                {
                    id: "ex5_q54",
                    texte: "(Ch.3) Calculer la distance $IJ$.",
                    solution: "$\\overrightarrow{IJ} = J - I = (1, \\frac{1}{2}, -3)$. $IJ = \\sqrt{1^2 + (\\frac{1}{2})^2 + (-3)^2} = \\sqrt{1 + \\frac{1}{4} + 9} = \\sqrt{\\frac{41}{4}} = \\dfrac{\\sqrt{41}}{2}$."
                },
                {
                    id: "ex5_q55",
                    texte: "(Ch.4) Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.",
                    solution: "$\\overrightarrow{AB} = (2,0,0)$, $\\overrightarrow{AD} = (0,1,0)$, $\\overrightarrow{AE} = (0,0,3)$. $\\det = \\begin{vmatrix} 2 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 3 \\end{vmatrix} = 2\\times1\\times3 = 6$."
                },
                {
                    id: "ex5_q56",
                    texte: "(Ch.4) En déduire le volume du parallélépipède.",
                    solution: "$V = |\\det(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})| = 6$ unités de volume."
                },
                {
                    id: "ex5_q57",
                    texte: "(Ch.5) Calculer $\\overrightarrow{AB} \\wedge \\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AD} = \\begin{pmatrix} 0\\times0 - 0\\times1 \\\\ 0\\times0 - 2\\times0 \\\\ 2\\times1 - 0\\times0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 2 \\end{pmatrix}$."
                },
                {
                    id: "ex5_q58",
                    texte: "(Ch.5) En déduire l'aire du parallélogramme $ABCD$.",
                    solution: "$\\mathcal{A}_{ABCD} = \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AD}\\| = \\sqrt{0^2+0^2+2^2} = 2$ unités d'aire."
                },
                {
                    id: "ex5_q59",
                    texte: "(Ch.3) Les droites $(AG)$ et $(BD)$ sont-elles orthogonales ?",
                    solution: "$\\overrightarrow{AG} = (2,1,3)$, $\\overrightarrow{BD} = D - B = (-2,1,0)$. $\\overrightarrow{AG} \\cdot \\overrightarrow{BD} = 2\\times(-2) + 1\\times1 + 3\\times0 = -4 + 1 + 0 = -3 \\neq 0$. Donc $(AG)$ et $(BD)$ ne sont pas orthogonales."
                },
                {
                    id: "ex5_q60",
                    texte: "(Ch.5) Vérifier que le vecteur $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AE}$ est normal au plan $(ABF)$.",
                    solution: "$\\overrightarrow{AB} \\wedge \\overrightarrow{AE} = \\begin{pmatrix} 0\\times3 - 0\\times0 \\\\ 0\\times0 - 2\\times3 \\\\ 2\\times0 - 0\\times0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -6 \\\\ 0 \\end{pmatrix}$. Ce vecteur est colinéaire à $\\overrightarrow{AD}$, qui est normal au plan (ABF) (car AD est perpendiculaire à AB et AE). Donc $\\vec{n}$ est normal au plan $(ABF)$."
                }
            ],
            astuces_exo: "💡 Cet exercice synthétise les chapitres 1, 3, 4 et 5. Utilisez les propriétés du parallélépipède rectangle.",
            erreurs_exo: "⚠️ Bien identifier les coordonnées des points et les formules adaptées."
        }
    ]
});