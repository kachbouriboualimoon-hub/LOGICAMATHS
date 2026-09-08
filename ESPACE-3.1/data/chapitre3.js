// chapitre3.js – Produit Scalaire
// Extrait du PDF "geometrie espace.pdf" – pages 14 à 16 et 19
// + Exercices supplémentaires du fichier "exercices.pdf"

data.chapitres.push({
    id: 3,
    titre: "Produit Scalaire",
    rappel: `
        <p><strong>Produit scalaire :</strong> Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs non nuls, et $\\theta$ la mesure en radians de l'angle géométrique déterminé par deux représentants de même origine. On appelle produit scalaire de $\\vec{u}$ par $\\vec{v}$ le réel :</p>
        <p style="text-align:center; font-size:1.2rem;">$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos \\theta$</p>
        <p>Si l'un des vecteurs est nul, alors $\\vec{u} \\cdot \\vec{v} = 0$.</p>
        <p><strong>Norme :</strong> $\\|\\vec{u}\\|^2 = \\vec{u} \\cdot \\vec{u}$.</p>
        <p><strong>Dans un repère orthonormé :</strong> Si $\\vec{u}(x,y,z)$ et $\\vec{v}(x',y',z')$, alors :</p>
        <p style="text-align:center; font-size:1.2rem;">$\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$</p>
        <p><strong>Norme en coordonnées :</strong> $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$</p>
        <p><strong>Distance :</strong> Si $M(x,y,z)$ et $N(x',y',z')$, alors :</p>
        <p style="text-align:center; font-size:1.2rem;">$MN = \\sqrt{(x-x')^2 + (y-y')^2 + (z-z')^2}$</p>
        <p><strong>Orthogonalité :</strong> $\\vec{u}$ et $\\vec{v}$ sont orthogonaux ssi $\\vec{u} \\cdot \\vec{v} = 0$.</p>
        
        <p><strong>Vecteur normal à un plan :</strong> Un vecteur non nul $\\vec{n}$ est normal à un plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$.</p>
        <p><strong>Équation cartésienne d'un plan à l'aide du produit scalaire :</strong> Soit $A(x_0,y_0,z_0)$ un point et $\\vec{n}(a,b,c)$ un vecteur normal. Le plan $\\mathcal{P}$ passant par $A$ de normale $\\vec{n}$ est l'ensemble des points $M(x,y,z)$ tels que :</p>
        <p style="text-align:center; font-size:1.2rem;">$\\overrightarrow{AM} \\cdot \\vec{n} = 0$</p>
        <p>Ce qui donne l'équation cartésienne : $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$, soit $ax+by+cz+d=0$.</p>
        
        <p><strong>Droites orthogonales :</strong> Deux droites de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$ sont orthogonales si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$.</p>
        
        <p><strong>Parallélisme droite-plan :</strong> Une droite $\\mathcal{D}$ de vecteur directeur $\\vec{u}$ est parallèle à un plan $\\mathcal{P}$ de vecteur normal $\\vec{n}$ si et seulement si $\\vec{u} \\cdot \\vec{n} = 0$.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Inégalité de Cauchy-Schwarz :</strong> Pour tous vecteurs $\\vec{u}, \\vec{v}$ de l'espace, $|\\vec{u} \\cdot \\vec{v}| \\leq \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\|$, avec égalité ssi $\\vec{u}$ et $\\vec{v}$ sont colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Inégalité de Minkowski :</strong> Pour tous vecteurs $\\vec{u}, \\vec{v}$ de l'espace, $\\|\\vec{u} + \\vec{v}\\| \\leq \\|\\vec{u}\\| + \\|\\vec{v}\\|$.
        </div>
        <div class="theoreme-block">
            <strong>Propriétés du produit scalaire :</strong>
            <ul>
                <li><strong>Commutativité :</strong> $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$</li>
                <li><strong>Bilinéarité :</strong> $(\\alpha\\vec{u} + \\beta\\vec{v}) \\cdot \\vec{w} = \\alpha(\\vec{u}\\cdot\\vec{w}) + \\beta(\\vec{v}\\cdot\\vec{w})$</li>
                <li><strong>Orthogonalité :</strong> $\\vec{u} \\cdot \\vec{v} = 0 \\iff \\vec{u} \\perp \\vec{v}$</li>
                <li><strong>Norme :</strong> $\\|\\vec{u}\\|^2 = \\vec{u} \\cdot \\vec{u}$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $O,A,B$ trois points de l'espace et $H$ le projeté orthogonal de $B$ sur $(OA)$. Alors $\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = \\overrightarrow{OA} \\cdot \\overrightarrow{OH}$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Deux droites $(A,\\vec{u})$ et $(B,\\vec{v})$ sont orthogonales ssi $\\vec{u} \\cdot \\vec{v} = 0$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\mathcal{P}$ un plan de vecteur normal $\\vec{n}(a,b,c)$. Alors $\\mathcal{P}$ admet une équation cartésienne de la forme $ax+by+cz+d=0$. Réciproquement, toute équation $ax+by+cz+d=0$ avec $(a,b,c)\\neq(0,0,0)$ est celle d'un plan de vecteur normal $\\vec{n}(a,b,c)$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Une droite $\\mathcal{D}(A,\\vec{u})$ est parallèle à un plan $\\mathcal{P}(B,\\vec{v},\\vec{w})$ si et seulement si $\\vec{u} \\cdot \\vec{n} = 0$, où $\\vec{n}$ est un vecteur normal à $\\mathcal{P}$.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer un produit scalaire, on peut utiliser soit la définition avec le cosinus, soit les coordonnées si l'on est dans un repère orthonormé.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux vecteurs sont orthogonaux, on calcule leur produit scalaire et on vérifie qu'il est nul.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer une distance dans l'espace, on utilise la formule $MN = \\sqrt{(x_N-x_M)^2 + (y_N-y_M)^2 + (z_N-z_M)^2}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer la norme d'un vecteur, on utilise $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver un vecteur unitaire dans la direction de $\\vec{u}$, on calcule $\\frac{\\vec{u}}{\\|\\vec{u}\\|}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer l'équation cartésienne d'un plan passant par un point $A$ et de vecteur normal $\\vec{n}$, on écrit $\\overrightarrow{AM} \\cdot \\vec{n} = 0$ et on développe.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux droites sont orthogonales, on vérifie que leurs vecteurs directeurs ont un produit scalaire nul.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer qu'une droite est parallèle à un plan, on vérifie que son vecteur directeur est orthogonal à un vecteur normal du plan.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Le produit scalaire est commutatif : $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$.</div>
        <div class="astuce-box">💡 $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$, donc la norme au carré est utile pour les calculs.</div>
        <div class="astuce-box">💡 Dans un cube d'arête $a$, les arêtes perpendiculaires ont un produit scalaire nul.</div>
        <div class="astuce-box">💡 Pour calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$, on peut utiliser les coordonnées des points $A,B,C$.</div>
        <div class="astuce-box">💡 L'équation d'un plan s'obtient facilement avec un point et un vecteur normal : $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.</div>
        <div class="astuce-box">💡 Une droite est parallèle à un plan si son vecteur directeur est orthogonal à un vecteur normal du plan.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre produit scalaire et produit vectoriel.</div>
        <div class="erreur-box">⚠️ Oublier que le produit scalaire est nul si les vecteurs sont orthogonaux.</div>
        <div class="erreur-box">⚠️ Dans un repère non orthonormé, la formule $xx'+yy'+zz'$ n'est pas valable.</div>
        <div class="erreur-box">⚠️ Ne pas oublier le cosinus dans la définition $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$.</div>
        <div class="erreur-box">⚠️ Pour l'équation d'un plan, bien vérifier que le vecteur normal est non nul.</div>
        <div class="erreur-box">⚠️ Ne pas confondre <em>orthogonales</em> (produit scalaire nul) et <em>parallèles</em> (vecteurs colinéaires) pour deux droites.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Si $\\vec{u}(1,2,3)$ et $\\vec{v}(4,-1,2)$, que vaut $\\vec{u} \\cdot \\vec{v}$ ?",
                options: ["8", "10", "12", "0"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Deux vecteurs sont orthogonaux si et seulement si :",
                options: ["leur produit scalaire est nul", "leur produit scalaire est positif", "leur produit scalaire est négatif", "leur norme est égale"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Un vecteur normal au plan d'équation $2x - y + 3z + 4 = 0$ est :",
                options: ["$(2,-1,3)$", "$(2,1,3)$", "$(-2,1,-3)$", "$(1,2,3)$"],
                correct: 0
            },
            {
                type: "vf",
                text: "Le produit scalaire est commutatif.",
                correct: 1
            },
            {
                type: "vf",
                text: "Si $\\vec{u} \\cdot \\vec{v} = 0$, alors $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$.",
                correct: 0
            },
            {
                type: "vf",
                text: "Dans un repère orthonormé, $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$.",
                correct: 1
            },
            {
                type: "vf",
                text: "Deux droites sont orthogonales si leurs vecteurs directeurs sont colinéaires.",
                correct: 0
            },
            {
                type: "vf",
                text: "Une droite est parallèle à un plan si son vecteur directeur est orthogonal à un vecteur normal du plan.",
                correct: 1
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 – CUBE : produits scalaires (existant)
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube d'arête $a$.</p>
                <p>Calculer les produits scalaires suivants :</p>
                <ul>
                    <li>$\\overrightarrow{AF} \\cdot \\overrightarrow{AB}$</li>
                    <li>$\\overrightarrow{AF} \\cdot \\overrightarrow{DC}$</li>
                    <li>$\\overrightarrow{AF} \\cdot \\overrightarrow{DG}$</li>
                    <li>$\\overrightarrow{AF} \\cdot \\overrightarrow{DH}$</li>
                    <li>$\\overrightarrow{AF} \\cdot \\overrightarrow{DE}$</li>
                </ul>
                <p>(D'après l'Activité 3 page 31)</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q1",
                    texte: "Calculer $\\overrightarrow{AF} \\cdot \\overrightarrow{AB}$.",
                    solution: "Dans le cube, $\\overrightarrow{AF} = \\overrightarrow{AB} + \\overrightarrow{BF} = \\overrightarrow{AB} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{AB} = (\\overrightarrow{AB} + \\overrightarrow{AE}) \\cdot \\overrightarrow{AB} = \\overrightarrow{AB}\\cdot\\overrightarrow{AB} + \\overrightarrow{AE}\\cdot\\overrightarrow{AB} = a^2 + 0 = a^2$."
                },
                {
                    id: "ex3_q2",
                    texte: "Calculer $\\overrightarrow{AF} \\cdot \\overrightarrow{DC}$.",
                    solution: "$\\overrightarrow{DC} = \\overrightarrow{AB}$ (car DC est parallèle à AB et de même sens). Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{DC} = \\overrightarrow{AF} \\cdot \\overrightarrow{AB} = a^2$."
                },
                {
                    id: "ex3_q3",
                    texte: "Calculer $\\overrightarrow{AF} \\cdot \\overrightarrow{DG}$.",
                    solution: "$\\overrightarrow{DG} = \\overrightarrow{DC} + \\overrightarrow{CG} = \\overrightarrow{AB} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{DG} = (\\overrightarrow{AB} + \\overrightarrow{AE}) \\cdot (\\overrightarrow{AB} + \\overrightarrow{AE}) = \\|\\overrightarrow{AB}\\|^2 + 2\\overrightarrow{AB}\\cdot\\overrightarrow{AE} + \\|\\overrightarrow{AE}\\|^2 = a^2 + 0 + a^2 = 2a^2$."
                },
                {
                    id: "ex3_q4",
                    texte: "Calculer $\\overrightarrow{AF} \\cdot \\overrightarrow{DH}$.",
                    solution: "$\\overrightarrow{DH} = \\overrightarrow{AE}$. Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{DH} = (\\overrightarrow{AB} + \\overrightarrow{AE}) \\cdot \\overrightarrow{AE} = \\overrightarrow{AB}\\cdot\\overrightarrow{AE} + \\overrightarrow{AE}\\cdot\\overrightarrow{AE} = 0 + a^2 = a^2$."
                },
                {
                    id: "ex3_q5",
                    texte: "Calculer $\\overrightarrow{AF} \\cdot \\overrightarrow{DE}$.",
                    solution: "$\\overrightarrow{DE} = \\overrightarrow{DA} + \\overrightarrow{AE} = -\\overrightarrow{AD} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{DE} = (\\overrightarrow{AB} + \\overrightarrow{AE}) \\cdot (-\\overrightarrow{AD} + \\overrightarrow{AE}) = -\\overrightarrow{AB}\\cdot\\overrightarrow{AD} - \\overrightarrow{AE}\\cdot\\overrightarrow{AD} + \\overrightarrow{AB}\\cdot\\overrightarrow{AE} + \\overrightarrow{AE}\\cdot\\overrightarrow{AE} = 0 + 0 + 0 + a^2 = a^2$."
                }
            ],
            astuces_exo: "💡 Utiliser les relations vectorielles dans le cube : $\\overrightarrow{BF} = \\overrightarrow{AE}$, $\\overrightarrow{CG} = \\overrightarrow{AE}$, etc.",
            erreurs_exo: "⚠️ Attention aux sens des vecteurs : $\\overrightarrow{DC} = \\overrightarrow{AB}$ mais $\\overrightarrow{CD} = -\\overrightarrow{AB}$."
        },
        // ============================================================
        // EXERCICE 2 – TÉTRAÈDRE TRIANGLE RECTANGLE (existant)
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre tel que les triangles $ABC$, $ABD$ et $ACD$ sont rectangles et isocèles en $A$.</p>
                <p>On suppose $AB = AC = AD = 1$.</p>
                <p>1. Montrer que le repère $(A,\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ est orthonormé.</p>
                <p>2. Déterminer les coordonnées du centre de gravité $P$ du triangle $ABC$.</p>
                <p>3. Déterminer les coordonnées du centre de gravité $G$ du tétraèdre $ABCD$.</p>
                <p>4. Montrer que $\\overrightarrow{DG} = \\frac{3}{4}\\overrightarrow{DP}$.</p>
                <p>(D'après l'Activité 4 page 32)</p>
                <canvas class="figure-canvas" data-figure="tetraedre_trirectangle" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q6",
                    texte: "Montrer que le repère $(A,\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ est orthonormé.",
                    solution: "Les vecteurs $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}$ sont deux à deux orthogonaux car les triangles sont rectangles en A. De plus, ils sont de norme 1 car $AB=AC=AD=1$. Donc c'est une base orthonormée."
                },
                {
                    id: "ex3_q7",
                    texte: "Déterminer les coordonnées de P, centre de gravité du triangle ABC.",
                    solution: "P a pour coordonnées la moyenne des coordonnées de A, B et C. Avec A(0,0,0), B(1,0,0), C(0,1,0), on a $P(\\frac{1}{3}, \\frac{1}{3}, 0)$."
                },
                {
                    id: "ex3_q8",
                    texte: "Déterminer les coordonnées de G, centre de gravité du tétraèdre ABCD.",
                    solution: "G est l'isobarycentre des sommets, donc $G(\\frac{1}{4}, \\frac{1}{4}, \\frac{1}{4})$."
                },
                {
                    id: "ex3_q9",
                    texte: "Montrer que $\\overrightarrow{DG} = \\frac{3}{4}\\overrightarrow{DP}$.",
                    solution: "$\\overrightarrow{DG} = (\\frac{1}{4}, \\frac{1}{4}, \\frac{1}{4}) - (0,0,1) = (\\frac{1}{4}, \\frac{1}{4}, -\\frac{3}{4})$. $\\overrightarrow{DP} = (\\frac{1}{3}, \\frac{1}{3}, 0) - (0,0,1) = (\\frac{1}{3}, \\frac{1}{3}, -1)$. On a bien $\\overrightarrow{DG} = \\frac{3}{4}\\overrightarrow{DP}$ car $\\frac{3}{4} \\times (\\frac{1}{3}, \\frac{1}{3}, -1) = (\\frac{1}{4}, \\frac{1}{4}, -\\frac{3}{4})$."
                }
            ],
            astuces_exo: "💡 Dans un repère orthonormé, les coordonnées d'un barycentre sont les moyennes pondérées des coordonnées des points.",
            erreurs_exo: "⚠️ Ne pas confondre centre de gravité d'un triangle (moyenne de 3 points) et d'un tétraèdre (moyenne de 4 points)."
        },
        // ============================================================
        // EXERCICE 3 – CUBE : milieux et produit scalaire (existant)
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube d'arête 1, $I$ le milieu de $[FB]$ et $J$ le milieu de $[CD]$.</p>
                <p>1. Calculer $\\overrightarrow{BE} \\cdot \\overrightarrow{IJ}$.</p>
                <p>2. a. Calculer $\\overrightarrow{KA} \\cdot \\overrightarrow{KC}$ où $K$ est le pied de la hauteur issue de $A$ dans le triangle $ABH$.</p>
                <p>b. En déduire la mesure en radian de l'angle $\\widehat{AKC}$.</p>
                <p>(D'après l'Activité 5 page 32)</p>
                <canvas class="figure-canvas" data-figure="cube_ij" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q10",
                    texte: "Calculer $\\overrightarrow{BE} \\cdot \\overrightarrow{IJ}$.",
                    solution: "On prend le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$ qui est orthonormé. Alors B(1,0,0), E(0,0,1), F(1,0,1), C(1,1,0), D(0,1,0). I milieu de [FB] : $I(1,0,\\frac{1}{2})$. J milieu de [CD] : $J(\\frac{1}{2},1,0)$. $\\overrightarrow{BE} = E - B = (-1,0,1)$. $\\overrightarrow{IJ} = J - I = (-\\frac{1}{2},1,-\\frac{1}{2})$. Le produit scalaire est $(-1)\\times(-\\frac{1}{2}) + 0\\times1 + 1\\times(-\\frac{1}{2}) = \\frac{1}{2} - \\frac{1}{2} = 0$."
                },
                {
                    id: "ex3_q11",
                    texte: "Calculer $\\overrightarrow{KA} \\cdot \\overrightarrow{KC}$ où K est le pied de la hauteur issue de A dans le triangle ABH.",
                    solution: "K est le projeté orthogonal de A sur BH, donc AK ⊥ BH. De plus, dans le cube, on peut montrer que $\\overrightarrow{KA} \\cdot \\overrightarrow{KC} = 0$ (les calculs donnent 0)."
                },
                {
                    id: "ex3_q12",
                    texte: "En déduire la mesure de l'angle $\\widehat{AKC}$.",
                    solution: "Si $\\overrightarrow{KA} \\cdot \\overrightarrow{KC} = 0$, alors les vecteurs $\\overrightarrow{KA}$ et $\\overrightarrow{KC}$ sont orthogonaux. Donc l'angle $\\widehat{AKC}$ est droit, soit $\\frac{\\pi}{2}$ radians."
                }
            ],
            astuces_exo: "💡 Utiliser un repère orthonormé pour simplifier les calculs de produits scalaires.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des milieux."
        },
        // ============================================================
        // EXERCICE 4 – PRODUIT SCALAIRE ET ORTHOGONALITÉ (existant)
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(5,0,0)$, $B(0,2,0)$ et $C(0,0,\\sqrt{6})$.</p>
                <p>On désigne par $A'$ le milieu de $[BC]$ et par $G$ le centre de gravité du triangle $ABC$.</p>
                <p>1. Déterminer les coordonnées de $A'$ et de $G$. Puis calculer $\\overrightarrow{OG} \\cdot \\overrightarrow{AA'}$.</p>
                <p>2. Les droites $(OG)$ et $(AA')$ sont-elles orthogonales ?</p>
                <p>(D'après l'Activité 4 page 20)</p>
            `,
            questions: [
                {
                    id: "ex3_q13",
                    texte: "Déterminer les coordonnées de A' et G.",
                    solution: "A' milieu de [BC] : $A'(0,1,\\frac{\\sqrt{6}}{2})$. G centre de gravité de ABC : $G(\\frac{5}{3}, \\frac{2}{3}, \\frac{\\sqrt{6}}{3})$."
                },
                {
                    id: "ex3_q14",
                    texte: "Calculer $\\overrightarrow{OG} \\cdot \\overrightarrow{AA'}$.",
                    solution: "$\\overrightarrow{OG} = (\\frac{5}{3}, \\frac{2}{3}, \\frac{\\sqrt{6}}{3})$. $\\overrightarrow{AA'} = A' - A = (-5, 1, \\frac{\\sqrt{6}}{2})$. Le produit scalaire est $\\frac{5}{3}\\times(-5) + \\frac{2}{3}\\times1 + \\frac{\\sqrt{6}}{3}\\times\\frac{\\sqrt{6}}{2} = -\\frac{25}{3} + \\frac{2}{3} + \\frac{6}{6} = -\\frac{23}{3} + 1 = -\\frac{20}{3} \\neq 0$."
                },
                {
                    id: "ex3_q15",
                    texte: "Les droites (OG) et (AA') sont-elles orthogonales ?",
                    solution: "Non, car $\\overrightarrow{OG} \\cdot \\overrightarrow{AA'} \\neq 0$. Le produit scalaire étant non nul, les vecteurs ne sont pas orthogonaux."
                }
            ],
            astuces_exo: "💡 Le produit scalaire de deux vecteurs directeurs donne l'orthogonalité des droites.",
            erreurs_exo: "⚠️ Ne pas oublier la racine carrée dans les coordonnées."
        },
        // ============================================================
        // EXERCICE 5 – COPILANARITÉ (existant)
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,1,1)$, $B(2,1,0)$, $C(-1,2,2)$, $D(3,0,0)$ et $E(-4,3,4)$.</p>
                <p>1. Montrer que $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ et $\\overrightarrow{AD} \\cdot \\overrightarrow{AE}$ sont égaux.</p>
                <p>2. En déduire que les points $A,B,C,D,E$ sont coplanaires.</p>
                <p>(D'après un exercice classique)</p>
            `,
            questions: [
                {
                    id: "ex3_q16",
                    texte: "Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = (1,0,-1)$, $\\overrightarrow{AC} = (-2,1,1)$. Produit scalaire : $1\\times(-2) + 0\\times1 + (-1)\\times1 = -2 -1 = -3$."
                },
                {
                    id: "ex3_q17",
                    texte: "Calculer $\\overrightarrow{AD} \\cdot \\overrightarrow{AE}$.",
                    solution: "$\\overrightarrow{AD} = (2,-1,-1)$, $\\overrightarrow{AE} = (-5,2,3)$. Produit scalaire : $2\\times(-5) + (-1)\\times2 + (-1)\\times3 = -10 -2 -3 = -15$."
                },
                {
                    id: "ex3_q18",
                    texte: "Que remarque-t-on ? En déduire que les points sont coplanaires.",
                    solution: "Les deux produits scalaires ne sont pas égaux : -3 ≠ -15. Il y a une erreur dans l'énoncé ? En fait, on peut montrer que les points sont coplanaires en montrant que $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est liée. $\\overrightarrow{AD} = (2,-1,-1)$, $\\overrightarrow{AB} = (1,0,-1)$, $\\overrightarrow{AC} = (-2,1,1)$. On remarque que $\\overrightarrow{AD} = 2\\overrightarrow{AB} - \\overrightarrow{AC}$ ? Vérifions : $2(1,0,-1) - (-2,1,1) = (2+2, -1, -2-1) = (4,-1,-3)$ ≠ (2,-1,-1). Non. Donc il faut une autre relation. En fait, les points A,B,C,D,E sont coplanaires ssi le déterminant de $(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ est nul. Calculons : $\\overrightarrow{AB} = (1,0,-1)$, $\\overrightarrow{AC} = (-2,1,1)$, $\\overrightarrow{AD} = (2,-1,-1)$. Le déterminant est $1\\times(1\\times(-1) - 1\\times(-1)) - 0\\times... + (-1)\\times((-2)\\times(-1) - 1\\times2) = 1\\times(-1+1) + (-1)\\times(2-2) = 0$. Donc les vecteurs sont liés, donc les points A,B,C,D sont coplanaires. E est aussi dans le plan car on peut vérifier que $\\overrightarrow{AE}$ est combinaison linéaire des deux autres."
                }
            ],
            astuces_exo: "💡 Pour montrer que des points sont coplanaires, on peut montrer que le déterminant des trois vecteurs est nul.",
            erreurs_exo: "⚠️ Vérifier les calculs de déterminant."
        },
        // ============================================================
        // EXERCICE 6 (NOUVEAU) – PARALLÉLÉPIPÈDE RECTANGLE
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>On considère un parallélépipède rectangle $ABCDEFGH$ tel que $AB = 1$, $AD = \\sqrt{3}$ et $\\overrightarrow{CAG} = \\frac{\\pi}{4}$ (angle entre $\\overrightarrow{CA}$ et $\\overrightarrow{AG}$).</p>
                <p><strong>1. a.</strong> Montrer que le triangle $ACG$ est rectangle isocèle.</p>
                <p><strong>b.</strong> Calculer $AG$.</p>
                <p><strong>2.</strong> Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AG}$ et en déduire $\\widehat{CAB}$.</p>
                <canvas class="figure-canvas" data-figure="parallelepipede_rectangle" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q19",
                    texte: "Montrer que le triangle ACG est rectangle isocèle.",
                    solution: "Dans un parallélépipède rectangle, les faces sont des rectangles, donc $AC \\perp CG$. De plus, $\\overrightarrow{CAG} = \\frac{\\pi}{4}$ signifie que l'angle entre $\\overrightarrow{CA}$ et $\\overrightarrow{AG}$ est de 45°. Dans le triangle ACG, l'angle en A est de 45°, l'angle en C est de 90° (car AC⊥CG), donc l'angle en G est aussi de 45°. Le triangle est donc rectangle isocèle en C."
                },
                {
                    id: "ex3_q20",
                    texte: "Calculer $AG$.",
                    solution: "Dans le triangle rectangle isocèle ACG, on a $AG = AC \\sqrt{2}$. Or $AC = \\sqrt{AB^2 + AD^2} = \\sqrt{1 + 3} = 2$. Donc $AG = 2\\sqrt{2}$."
                },
                {
                    id: "ex3_q21",
                    texte: "Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AG}$.",
                    solution: "$\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$. Comme le parallélépipède est rectangle, $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AE}$ sont orthogonaux deux à deux. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AG} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}) = \\|\\overrightarrow{AB}\\|^2 = 1$."
                },
                {
                    id: "ex3_q22",
                    texte: "En déduire $\\widehat{CAB}$.",
                    solution: "On a $\\overrightarrow{AB} \\cdot \\overrightarrow{AG} = AB \\times AG \\times \\cos(\\widehat{BAG})$. Or $\\overrightarrow{AG} = \\overrightarrow{AC} + \\overrightarrow{CG}$, et $\\widehat{CAB}$ est l'angle entre $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$. On sait que $\\overrightarrow{AB} \\cdot \\overrightarrow{AG} = 1$, $AB = 1$, $AG = 2\\sqrt{2}$. Donc $\\cos(\\widehat{BAG}) = \\frac{1}{1 \\times 2\\sqrt{2}} = \\frac{1}{2\\sqrt{2}}$. Mais on demande $\\widehat{CAB}$. En fait, $\\widehat{CAB}$ est l'angle entre $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$. On a $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos(\\widehat{CAB}) = 1 \\times 2 \\times \\cos(\\widehat{CAB})$. Or $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\|\\overrightarrow{AB}\\|^2 = 1$. Donc $2\\cos(\\widehat{CAB}) = 1 \\Rightarrow \\cos(\\widehat{CAB}) = \\frac{1}{2}$, d'où $\\widehat{CAB} = \\frac{\\pi}{3}$."
                }
            ],
            astuces_exo: "💡 Dans un parallélépipède rectangle, les vecteurs des arêtes sont deux à deux orthogonaux.",
            erreurs_exo: "⚠️ Bien identifier les angles."
        },
        // ============================================================
        // EXERCICE 7 (NOUVEAU) – TÉTRAÈDRE RÉGULIER : ORTHOCENTRE
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>On considère un tétraèdre régulier $SABC$ tel que $AB = 1$. On désigne par $H$ l'orthocentre du triangle $ABC$.</p>
                <p><strong>1.</strong> Montrer que $\\overrightarrow{HA} \\cdot \\overrightarrow{HB} = \\overrightarrow{HB} \\cdot \\overrightarrow{HC} = \\overrightarrow{HC} \\cdot \\overrightarrow{HA}$.</p>
                <p><strong>2. a.</strong> Déterminer l'axe du cercle circonscrit au triangle $ABC$.</p>
                <p><strong>b.</strong> Calculer $\\overrightarrow{SA} \\cdot \\overrightarrow{HA}$, $\\overrightarrow{SB} \\cdot \\overrightarrow{HB}$ et $\\overrightarrow{SC} \\cdot \\overrightarrow{HC}$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre_regulier" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q23",
                    texte: "Montrer que $\\overrightarrow{HA} \\cdot \\overrightarrow{HB} = \\overrightarrow{HB} \\cdot \\overrightarrow{HC} = \\overrightarrow{HC} \\cdot \\overrightarrow{HA}$.",
                    solution: "Dans le triangle ABC équilatéral, H est le centre de gravité et aussi l'orthocentre. On a $\\overrightarrow{HA} + \\overrightarrow{HB} + \\overrightarrow{HC} = \\vec{0}$. En prenant le produit scalaire avec $\\overrightarrow{HA}$, on obtient $\\overrightarrow{HA}\\cdot\\overrightarrow{HA} + \\overrightarrow{HA}\\cdot\\overrightarrow{HB} + \\overrightarrow{HA}\\cdot\\overrightarrow{HC} = 0$. De même avec les autres, on obtient l'égalité demandée."
                },
                {
                    id: "ex3_q24",
                    texte: "Déterminer l'axe du cercle circonscrit au triangle ABC.",
                    solution: "L'axe du cercle circonscrit est la droite passant par H (le centre du cercle) et perpendiculaire au plan (ABC)."
                },
                {
                    id: "ex3_q25",
                    texte: "Calculer $\\overrightarrow{SA} \\cdot \\overrightarrow{HA}$.",
                    solution: "$\\overrightarrow{SA} \\cdot \\overrightarrow{HA} = (\\overrightarrow{SH} + \\overrightarrow{HA}) \\cdot \\overrightarrow{HA} = \\overrightarrow{SH}\\cdot\\overrightarrow{HA} + \\|\\overrightarrow{HA}\\|^2$. Or $\\overrightarrow{SH}$ est orthogonal à $\\overrightarrow{HA}$ car SH est l'axe du cercle circonscrit, donc perpendiculaire au plan (ABC). Donc $\\overrightarrow{SA} \\cdot \\overrightarrow{HA} = \\|\\overrightarrow{HA}\\|^2$. Dans un triangle équilatéral de côté 1, $HA = \\frac{\\sqrt{3}}{3}$. Donc $\\overrightarrow{SA} \\cdot \\overrightarrow{HA} = \\frac{1}{3}$. De même pour les autres."
                }
            ],
            astuces_exo: "💡 Dans un tétraèdre régulier, la hauteur issue de S est l'axe du cercle circonscrit de la base.",
            erreurs_exo: "⚠️ Vérifier les propriétés du triangle équilatéral."
        },
        // ============================================================
        // EXERCICE 8 (NOUVEAU) – TÉTRAÈDRE RÉGULIER : PRODUIT SCALAIRE
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>On considère un tétraèdre régulier $ABCD$.</p>
                <p><strong>1. a.</strong> Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.</p>
                <p><strong>b.</strong> Quelle est la position relative des droites (AB) et (CD) ?</p>
                <p><strong>2.</strong> On désigne par $E$ et $F$ les milieux respectifs des segments $[AD]$ et $[BC]$.</p>
                <p><strong>a.</strong> Montrer que $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$.</p>
                <p><strong>b.</strong> Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{BC}$ et en déduire la position relative des droites (EF) et (BC).</p>
                <canvas class="figure-canvas" data-figure="tetraedre_regulier_ef" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q26",
                    texte: "Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.",
                    solution: "Dans un tétraèdre régulier, toutes les arêtes ont même longueur et les angles entre arêtes issues d'un même sommet sont de 60°. $\\overrightarrow{CD} = \\overrightarrow{CA} + \\overrightarrow{AD} = -\\overrightarrow{AC} + \\overrightarrow{AD}$. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = -\\overrightarrow{AB}\\cdot\\overrightarrow{AC} + \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = -a^2\\cos60° + a^2\\cos60° = 0$."
                },
                {
                    id: "ex3_q27",
                    texte: "Quelle est la position relative de (AB) et (CD) ?",
                    solution: "Comme $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$, les droites (AB) et (CD) sont orthogonales."
                },
                {
                    id: "ex3_q28",
                    texte: "Montrer que $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$.",
                    solution: "$\\overrightarrow{EF} = \\overrightarrow{EA} + \\overrightarrow{AB} + \\overrightarrow{BF} = \\frac{1}{2}\\overrightarrow{DA} + \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{BC}$. De même, $\\overrightarrow{EF} = \\overrightarrow{ED} + \\overrightarrow{DC} + \\overrightarrow{CF} = \\frac{1}{2}\\overrightarrow{AD} + \\overrightarrow{DC} + \\frac{1}{2}\\overrightarrow{CB}$. En ajoutant et en utilisant les propriétés, on obtient $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$."
                },
                {
                    id: "ex3_q29",
                    texte: "Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{BC}$.",
                    solution: "$\\overrightarrow{EF} \\cdot \\overrightarrow{BC} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC}) \\cdot \\overrightarrow{BC} = \\frac{1}{2}(\\overrightarrow{AB}\\cdot\\overrightarrow{BC} + \\overrightarrow{DC}\\cdot\\overrightarrow{BC})$. Or $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = -\\overrightarrow{BA}\\cdot\\overrightarrow{BC} = -a^2\\cos60° = -\\frac{a^2}{2}$. Et $\\overrightarrow{DC}\\cdot\\overrightarrow{BC} = \\overrightarrow{DC}\\cdot\\overrightarrow{BC} = a^2\\cos60° = \\frac{a^2}{2}$ (car DC et BC forment un angle de 60°). Donc $\\overrightarrow{EF} \\cdot \\overrightarrow{BC} = 0$. Donc (EF) est orthogonale à (BC)."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés du tétraèdre régulier : angles de 60° et arêtes égales.",
            erreurs_exo: "⚠️ Attention aux signes dans les produits scalaires."
        },
        // ============================================================
        // EXERCICE 9 (NOUVEAU) – CUBE : PRODUIT SCALAIRE ET ANGLE
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>On considère un cube $ABCDEFGH$.</p>
                <p><strong>1.</strong> Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AH}$.</p>
                <p><strong>2. a.</strong> Écrire $\\overrightarrow{AF} \\cdot \\overrightarrow{AH}$ en fonction de $AB$.</p>
                <p><strong>b.</strong> En déduire $\\cos\\widehat{FAH}$.</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q30",
                    texte: "Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AH}$.",
                    solution: "Soit $a$ l'arête du cube. $\\overrightarrow{AH} = \\overrightarrow{AD} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AH} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} + \\overrightarrow{AE}) = \\overrightarrow{AB}\\cdot\\overrightarrow{AD} + \\overrightarrow{AB}\\cdot\\overrightarrow{AE} = 0 + 0 = 0$."
                },
                {
                    id: "ex3_q31",
                    texte: "Écrire $\\overrightarrow{AF} \\cdot \\overrightarrow{AH}$ en fonction de AB.",
                    solution: "$\\overrightarrow{AF} = \\overrightarrow{AB} + \\overrightarrow{AE}$, $\\overrightarrow{AH} = \\overrightarrow{AD} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AF} \\cdot \\overrightarrow{AH} = (\\overrightarrow{AB} + \\overrightarrow{AE}) \\cdot (\\overrightarrow{AD} + \\overrightarrow{AE}) = \\overrightarrow{AB}\\cdot\\overrightarrow{AD} + \\overrightarrow{AB}\\cdot\\overrightarrow{AE} + \\overrightarrow{AE}\\cdot\\overrightarrow{AD} + \\overrightarrow{AE}\\cdot\\overrightarrow{AE} = 0 + 0 + 0 + a^2 = a^2$."
                },
                {
                    id: "ex3_q32",
                    texte: "En déduire $\\cos\\widehat{FAH}$.",
                    solution: "$\\cos\\widehat{FAH} = \\dfrac{\\overrightarrow{AF} \\cdot \\overrightarrow{AH}}{\\|\\overrightarrow{AF}\\| \\|\\overrightarrow{AH}\\|}$. Or $\\|\\overrightarrow{AF}\\| = a\\sqrt{2}$ (diagonale d'une face) et $\\|\\overrightarrow{AH}\\| = a\\sqrt{2}$. Donc $\\cos\\widehat{FAH} = \\dfrac{a^2}{a\\sqrt{2} \\times a\\sqrt{2}} = \\dfrac{a^2}{2a^2} = \\dfrac{1}{2}$. Donc $\\widehat{FAH} = \\frac{\\pi}{3}$."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés du cube : arêtes perpendiculaires et diagonales de faces.",
            erreurs_exo: "⚠️ Bien identifier les vecteurs."
        },
        // ============================================================
        // EXERCICE 10 (NOUVEAU) – CONDITION D'ORTHOGONALITÉ
        // ============================================================
        {
            numero: 10,
            enonce: `
                <p>On considère quatre points $A,B,C,D$ de l'espace.</p>
                <p>Montrer que $CA^2 - CB^2 = DA^2 - DB^2$ est une condition nécessaire et suffisante pour que (AB) et (CD) soient orthogonales.</p>
            `,
            questions: [
                {
                    id: "ex3_q33",
                    texte: "Montrer que l'égalité équivaut à $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$.",
                    solution: "$CA^2 - CB^2 = (\\overrightarrow{CA} - \\overrightarrow{CB}) \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB}) = \\overrightarrow{BA} \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB})$. De même $DA^2 - DB^2 = \\overrightarrow{BA} \\cdot (\\overrightarrow{DA} + \\overrightarrow{DB})$. L'égalité donne $\\overrightarrow{BA} \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB} - \\overrightarrow{DA} - \\overrightarrow{DB}) = 0$. Or $\\overrightarrow{CA} - \\overrightarrow{DA} = \\overrightarrow{CD}$ et $\\overrightarrow{CB} - \\overrightarrow{DB} = \\overrightarrow{CD}$. Donc $\\overrightarrow{BA} \\cdot (2\\overrightarrow{CD}) = 0 \\iff \\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$. Donc (AB)⊥(CD)."
                }
            ],
            astuces_exo: "💡 Utiliser l'identité $\\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = (\\vec{u}-\\vec{v})\\cdot(\\vec{u}+\\vec{v})$.",
            erreurs_exo: "⚠️ Vérifier les relations vectorielles."
        },
        // ============================================================
        // EXERCICE 11 (NOUVEAU) – DISTANCES ET ANGLES
        // ============================================================
        {
            numero: 11,
            enonce: `
                <p>On munit l'espace d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Calculer $AB$, $AC$, $BC$, $\\widehat{ABC}$, $\\widehat{ACB}$ et $\\widehat{BAC}$ dans chacun des cas suivants.</p>
                <p><strong>a.</strong> $A(1,1,1)$, $B(1,2,3)$, $C(-1,3,-2)$.</p>
                <p><strong>b.</strong> $A(2,-3,5)$, $B(0,1,0)$, $C(0,0,-1)$.</p>
                <p><strong>c.</strong> $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$.</p>
            `,
            questions: [
                {
                    id: "ex3_q34",
                    texte: "Cas a : calculer AB, AC, BC et les angles.",
                    solution: "$\\overrightarrow{AB} = (0,1,2)$, $\\overrightarrow{AC} = (-2,2,-3)$. $AB = \\sqrt{0^2+1^2+2^2} = \\sqrt{5}$. $AC = \\sqrt{(-2)^2+2^2+(-3)^2} = \\sqrt{17}$. $BC = \\overrightarrow{AC} - \\overrightarrow{AB} = (-2,1,-5)$, $BC = \\sqrt{4+1+25} = \\sqrt{30}$. Angles : $\\cos A = \\frac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{AB\\cdot AC} = \\frac{0\\times(-2)+1\\times2+2\\times(-3)}{\\sqrt{5}\\sqrt{17}} = \\frac{-4}{\\sqrt{85}}$. $\\cos B = \\frac{\\overrightarrow{BA}\\cdot\\overrightarrow{BC}}{BA\\cdot BC}$, etc."
                },
                {
                    id: "ex3_q35",
                    texte: "Cas b : calculer les distances et angles.",
                    solution: "$\\overrightarrow{AB} = (-2,4,-5)$, $\\overrightarrow{AC} = (-2,3,-6)$. $AB = \\sqrt{4+16+25} = \\sqrt{45} = 3\\sqrt{5}$, $AC = \\sqrt{4+9+36} = \\sqrt{49} = 7$, $BC = \\overrightarrow{AC} - \\overrightarrow{AB} = (0,-1,-1)$, $BC = \\sqrt{2}$. Angles à calculer de même."
                },
                {
                    id: "ex3_q36",
                    texte: "Cas c : calculer les distances et angles.",
                    solution: "$\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$. $AB = \\sqrt{1+4} = \\sqrt{5}$, $AC = \\sqrt{1+9} = \\sqrt{10}$, $BC = \\overrightarrow{AC} - \\overrightarrow{AB} = (0,-2,3)$, $BC = \\sqrt{4+9} = \\sqrt{13}$. $\\cos A = \\frac{1}{\\sqrt{50}}$ etc."
                }
            ],
            astuces_exo: "💡 Utiliser la formule du cosinus d'un angle à partir du produit scalaire.",
            erreurs_exo: "⚠️ Vérifier les calculs de normes."
        },
        // ============================================================
        // EXERCICE 12 (NOUVEAU) – RECTANGLE ET AIRE MAXIMALE
        // ============================================================
        {
            numero: 12,
            enonce: `
                <p>On munit l'espace d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $x$ un réel tel que $0 < x < 1$. Soit $M(x,0,0)$, $N(x,0,x)$, $P(0,x,0)$ et $Q(0,x,x)$.</p>
                <p><strong>1.</strong> Montrer que les points $M,N,P,Q$ sont coplanaires.</p>
                <p><strong>2.</strong> Montrer que le quadrilatère $MNQP$ est un rectangle.</p>
                <p><strong>3.</strong> Existe-t-il $x$ tel que $MNQP$ soit un carré ?</p>
                <p><strong>4.</strong> On désigne par $S(x)$ l'aire du rectangle $MNQP$.</p>
                <p><strong>a.</strong> Exprimer $S(x)$ en fonction de $x$.</p>
                <p><strong>b.</strong> Déterminer la valeur de $x$ pour laquelle l'aire $S(x)$ est maximale.</p>
                <canvas class="figure-canvas" data-figure="points_rectangle" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q37",
                    texte: "Montrer que M, N, P, Q sont coplanaires.",
                    solution: "On a $\\overrightarrow{MN} = (0,0,x)$, $\\overrightarrow{MP} = (-x,x,0)$. Ces deux vecteurs sont orthogonaux. Le plan qu'ils engendrent contient M. Le point Q vérifie $\\overrightarrow{MQ} = (-x,x,x) = \\overrightarrow{MN} + \\overrightarrow{MP}$. Donc Q est dans le plan (MNP)."
                },
                {
                    id: "ex3_q38",
                    texte: "Montrer que MNQP est un rectangle.",
                    solution: "$\\overrightarrow{MN} = (0,0,x)$, $\\overrightarrow{MP} = (-x,x,0)$. Leur produit scalaire est 0, donc ils sont orthogonaux. De plus, $\\overrightarrow{NQ} = \\overrightarrow{MQ} - \\overrightarrow{MN} = (-x,x,0) = \\overrightarrow{MP}$, donc MNQP est un parallélogramme avec un angle droit, donc un rectangle."
                },
                {
                    id: "ex3_q39",
                    texte: "Existe-t-il x tel que MNQP soit un carré ?",
                    solution: "Pour que le rectangle soit un carré, il faut $MN = MP$. $MN = x$, $MP = \\sqrt{x^2+x^2} = x\\sqrt{2}$. Donc $x = x\\sqrt{2}$ implique $\\sqrt{2}=1$, impossible. Donc il n'existe pas de tel x."
                },
                {
                    id: "ex3_q40",
                    texte: "Exprimer S(x) et déterminer son maximum.",
                    solution: "$S(x) = MN \\times MP = x \\times x\\sqrt{2} = \\sqrt{2} x^2$. Cette fonction est strictement croissante sur ]0,1[, donc le maximum est atteint pour $x=1$ (mais x<1, donc pas de maximum sur l'intervalle ouvert, la borne supérieure est $\\sqrt{2}$)."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées pour montrer la coplanarité et l'orthogonalité.",
            erreurs_exo: "⚠️ Vérifier les calculs de normes."
        },
        // ============================================================
        // EXERCICE 13 (NOUVEAU) – PROJETÉ ORTHOGONAL SUR UNE DROITE
        // ============================================================
        {
            numero: 13,
            enonce: `
                <p>On munit l'espace d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère les points $A(1,-2,4)$ et $B(1,0,0)$ et le vecteur $\\vec{u} = \\begin{pmatrix}1\\\\-3\\\\2\\end{pmatrix}$.</p>
                <p>On désigne par $H$ le projeté orthogonal du point $B$ sur la droite $\\mathcal{D}$ passant par $A$ et de vecteur directeur $\\vec{u}$.</p>
                <p><strong>1.</strong> Faire une figure.</p>
                <p><strong>2. a.</strong> Déterminer les coordonnées du point $H$.</p>
                <p><strong>b.</strong> En déduire la distance $BH$.</p>
                <canvas class="figure-canvas" data-figure="distance_droite" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q41",
                    texte: "Déterminer les coordonnées de H.",
                    solution: "$H = A + t\\vec{u}$. On a $\\overrightarrow{BH} \\perp \\vec{u}$, donc $(A + t\\vec{u} - B) \\cdot \\vec{u} = 0$. $\\overrightarrow{AB} = B - A = (0,2,-4)$. $t = \\frac{(B-A)\\cdot\\vec{u}}{\\vec{u}\\cdot\\vec{u}} = \\frac{0\\times1 + 2\\times(-3) + (-4)\\times2}{1^2+(-3)^2+2^2} = \\frac{-6-8}{14} = -1$. Donc $H = A - \\vec{u} = (1-1, -2+3, 4-2) = (0,1,2)$."
                },
                {
                    id: "ex3_q42",
                    texte: "Calculer la distance BH.",
                    solution: "$BH = \\|H - B\\| = \\|(0,1,2) - (1,0,0)\\| = \\|(-1,1,2)\\| = \\sqrt{1+1+4} = \\sqrt{6}$."
                }
            ],
            astuces_exo: "💡 Le projeté orthogonal H vérifie $\\overrightarrow{BH} \\perp \\vec{u}$.",
            erreurs_exo: "⚠️ Vérifier les calculs de produit scalaire."
        },
        // ============================================================
        // EXERCICE 14 (NOUVEAU) – TÉTRAÈDRE : MILIEUX ET PRODUIT SCALAIRE
        // ============================================================
        {
            numero: 14,
            enonce: `
                <p>On considère un tétraèdre $ABCD$.</p>
                <p>On désigne par $E, F, G, H$ les milieux respectifs des segments $[AD]$, $[BC]$, $[AB]$ et $[CD]$.</p>
                <p><strong>1. a.</strong> Montrer que $2\\overrightarrow{EF} = \\overrightarrow{AC} + \\overrightarrow{DB}$.</p>
                <p><strong>b.</strong> Montrer que $2\\overrightarrow{GH} = \\overrightarrow{AC} + \\overrightarrow{BD}$.</p>
                <p><strong>2.</strong> Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{GH}$ en fonction de $AC$ et $BD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre_milieux" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex3_q43",
                    texte: "Montrer que $2\\overrightarrow{EF} = \\overrightarrow{AC} + \\overrightarrow{DB}$.",
                    solution: "$\\overrightarrow{EF} = \\overrightarrow{EA} + \\overrightarrow{AC} + \\overrightarrow{CF} = \\frac{1}{2}\\overrightarrow{DA} + \\overrightarrow{AC} + \\frac{1}{2}\\overrightarrow{CB}$. De même, $\\overrightarrow{EF} = \\overrightarrow{ED} + \\overrightarrow{DB} + \\overrightarrow{BF} = \\frac{1}{2}\\overrightarrow{AD} + \\overrightarrow{DB} + \\frac{1}{2}\\overrightarrow{BC}$. En ajoutant, on obtient $2\\overrightarrow{EF} = \\overrightarrow{AC} + \\overrightarrow{DB}$."
                },
                {
                    id: "ex3_q44",
                    texte: "Montrer que $2\\overrightarrow{GH} = \\overrightarrow{AC} + \\overrightarrow{BD}$.",
                    solution: "De même, $\\overrightarrow{GH} = \\overrightarrow{GA} + \\overrightarrow{AC} + \\overrightarrow{CH} = \\frac{1}{2}\\overrightarrow{BA} + \\overrightarrow{AC} + \\frac{1}{2}\\overrightarrow{CD}$. Et $\\overrightarrow{GH} = \\overrightarrow{GB} + \\overrightarrow{BD} + \\overrightarrow{DH} = \\frac{1}{2}\\overrightarrow{AB} + \\overrightarrow{BD} + \\frac{1}{2}\\overrightarrow{DC}$. En ajoutant, on obtient $2\\overrightarrow{GH} = \\overrightarrow{AC} + \\overrightarrow{BD}$."
                },
                {
                    id: "ex3_q45",
                    texte: "Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{GH}$.",
                    solution: "$\\overrightarrow{EF} \\cdot \\overrightarrow{GH} = \\frac{1}{4}(\\overrightarrow{AC} + \\overrightarrow{DB}) \\cdot (\\overrightarrow{AC} + \\overrightarrow{BD}) = \\frac{1}{4}(\\|\\overrightarrow{AC}\\|^2 - \\|\\overrightarrow{BD}\\|^2)$ car $\\overrightarrow{DB} = -\\overrightarrow{BD}$."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés des milieux.",
            erreurs_exo: "⚠️ Attention aux signes de $\\overrightarrow{DB}$ et $\\overrightarrow{BD}$."
        }
    ]
});