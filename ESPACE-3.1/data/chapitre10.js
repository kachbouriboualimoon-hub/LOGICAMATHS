// chapitre10.js – Synthèse et problèmes types
// Extrait du PDF "geometrie espace.pdf" – pages 41 à 57

data.chapitres.push({
    id: 10,
    titre: "Synthèse et problèmes types",
    rappel: `
        <p><strong>Synthèse des notions fondamentales</strong></p>
        <p>Ce chapitre rassemble les notions essentielles des 9 chapitres précédents à travers des problèmes de synthèse de type bac.</p>

        <p><strong>Rappel des notions par chapitre :</strong></p>
        <ul>
            <li><strong>Chapitre 1 – Vecteurs :</strong> égalité, norme, addition, multiplication, colinéarité, repère d'une droite.</li>
            <li><strong>Chapitre 2 – Repères :</strong> combinaisons linéaires, familles liées/libres, bases, coordonnées, coplanarité.</li>
            <li><strong>Chapitre 3 – Produit scalaire :</strong> définition, propriétés, norme, distance, orthogonalité, équation de plan.</li>
            <li><strong>Chapitre 4 – Déterminant :</strong> calcul, coplanarité, volumes (parallélépipède, tétraèdre).</li>
            <li><strong>Chapitre 5 – Produit vectoriel :</strong> définition, aires, volumes, distance point-droite, vecteur normal, non-alignement.</li>
            <li><strong>Chapitre 6 – Orthogonalité :</strong> vecteurs normaux, plans perpendiculaires, distance point-plan.</li>
            <li><strong>Chapitre 7 – Paramétriques :</strong> représentation d'une droite (1 paramètre) et d'un plan (2 paramètres).</li>
            <li><strong>Chapitre 8 – Équations cartésiennes :</strong> ax+by+cz+d=0, positions relatives, intersections.</li>
            <li><strong>Chapitre 9 – Sphère :</strong> équation, centre, rayon, intersection avec un plan, plan tangent.</li>
        </ul>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorèmes fondamentaux à maîtriser :</strong>
            <ul>
                <li><strong>Colinéarité :</strong> $\\vec{u}$ et $\\vec{v}$ colinéaires ssi $\\exists k \\in \\mathbb{R}, \\vec{u} = k\\vec{v}$.</li>
                <li><strong>Produit scalaire :</strong> $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$ ; en coordonnées : $xx'+yy'+zz'$.</li>
                <li><strong>Déterminant :</strong> $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0 \\iff$ les vecteurs sont coplanaires.</li>
                <li><strong>Produit vectoriel :</strong> $\\vec{u} \\wedge \\vec{v}$ orthogonal à $\\vec{u}$ et $\\vec{v}$ ; $\\|\\vec{u} \\wedge \\vec{v}\\| = \\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta$.</li>
                <li><strong>Équation d'un plan :</strong> $ax+by+cz+d=0$ avec $\\vec{n}(a,b,c)$ normal.</li>
                <li><strong>Sphère :</strong> $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Formules de volumes :</strong>
            <ul>
                <li>Volume d'un tétraèdre $ABCD$ : $V = \\dfrac{1}{6}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$</li>
                <li>Volume d'un parallélépipède : $V = |\\det(\\vec{u},\\vec{v},\\vec{w})|$</li>
                <li>Aire d'un triangle $ABC$ : $\\mathcal{A} = \\dfrac{1}{2}\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$</li>
                <li>Distance d'un point à un plan : $d = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$</li>
            </ul>
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode générale pour les problèmes de synthèse :</strong>
            <ol>
                <li>Bien identifier les données et ce qui est demandé.</li>
                <li>Choisir le chapitre pertinent pour chaque question.</li>
                <li>Utiliser un repère adapté quand c'est possible.</li>
                <li>Vérifier les hypothèses (non-alignement, non-coplanarité, etc.).</li>
                <li>Procéder étape par étape en justifiant chaque résultat.</li>
            </ol>
        </div>
        <div class="method-box">
            <strong>Stratégies par type de problème :</strong>
            <ul>
                <li><strong>Problème de tétraèdre :</strong> utiliser produit mixte pour le volume, produit vectoriel pour la normale, distance point-plan pour la hauteur.</li>
                <li><strong>Problème de cube/parallélépipède :</strong> utiliser un repère orthonormé adapté, les coordonnées des sommets.</li>
                <li><strong>Problème de sphère et plan :</strong> calculer distance centre-plan, comparer avec le rayon.</li>
                <li><strong>Problème de positions relatives :</strong> comparer vecteurs normaux pour les plans, produit scalaire pour droite-plan.</li>
            </ul>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour les problèmes de bac, commencez par repérer les chapitres concernés par chaque question.</div>
        <div class="astuce-box">💡 Un repère bien choisi simplifie énormément les calculs.</div>
        <div class="astuce-box">💡 Le produit vectoriel est la clé pour trouver une normale à un plan.</div>
        <div class="astuce-box">💡 La distance d'un point à un plan s'obtient par la formule classique ou via le volume d'un tétraèdre.</div>
        <div class="astuce-box">💡 Pour une sphère, l'équation développée nécessite de compléter les carrés pour trouver centre et rayon.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas oublier les conditions d'existence : vecteurs non colinéaires pour un plan, $(a,b,c) \\neq (0,0,0)$ pour une équation de plan.</div>
        <div class="erreur-box">⚠️ Dans un repère orthonormé, la formule $xx'+yy'+zz'$ est valable, pas dans un repère quelconque.</div>
        <div class="erreur-box">⚠️ Pour le volume d'un tétraèdre, le facteur $\\frac{1}{6}$ est souvent oublié.</div>
        <div class="erreur-box">⚠️ Une droite parallèle à un plan n'est pas nécessairement incluse dans ce plan.</div>
        <div class="erreur-box">⚠️ L'intersection d'une sphère et d'un plan est un cercle, pas une sphère.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Le volume d'un tétraèdre $ABCD$ est donné par :",
                options: ["$\\frac{1}{2}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$\\frac{1}{6}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$\\frac{1}{3}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Le plan d'équation $2x - y + 3z - 5 = 0$ a pour vecteur normal :",
                options: ["$(2,-1,3)$", "$(2,1,3)$", "$(-2,1,-3)$", "$(1,2,3)$"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Une droite est parallèle à un plan si son vecteur directeur est :",
                options: ["colinéaire au vecteur normal", "orthogonal au vecteur normal", "égal au vecteur normal", "non nul"],
                correct: 1
            },
            {
                type: "qcm",
                text: "L'intersection d'une sphère et d'un plan est un cercle lorsque :",
                options: ["$h > R$", "$h = R$", "$h < R$", "$h = 0$"],
                correct: 2
            },
            {
                type: "vf",
                text: "Le produit vectoriel $\\vec{u} \\wedge \\vec{v}$ est commutatif.",
                correct: 0
            },
            {
                type: "vf",
                text: "Si $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) = 0$, alors $A,B,C,D$ sont coplanaires.",
                correct: 1
            },
            {
                type: "vf",
                text: "La sphère de diamètre [AB] est l'ensemble des points M tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$.",
                correct: 1
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 – Synthèse : Cube complet
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p><strong>Problème de synthèse n°1 – Cube</strong></p>
                <p>Soit $ABCDEFGH$ un cube d'arête 1. On munit l'espace du repère orthonormé $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p>Soit $I$ le milieu de $[EF]$, $J$ le milieu de $[BC]$ et $K$ le centre de la face $CDHG$.</p>
                <p><strong>1.</strong> Donner les coordonnées de tous les sommets du cube.</p>
                <p><strong>2.</strong> Donner les coordonnées de $I$, $J$ et $K$.</p>
                <p><strong>3.</strong> Calculer $\\overrightarrow{IJ} \\cdot \\overrightarrow{IK}$.</p>
                <p><strong>4.</strong> Déterminer une équation cartésienne du plan $(IJK)$.</p>
                <p><strong>5.</strong> Calculer le volume du tétraèdre $AIJK$.</p>
                <p><strong>6.</strong> Calculer la distance de $A$ au plan $(IJK)$.</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q1",
                    texte: "Donner les coordonnées des sommets du cube.",
                    solution: "A(0,0,0), B(1,0,0), C(1,1,0), D(0,1,0), E(0,0,1), F(1,0,1), G(1,1,1), H(0,1,1)."
                },
                {
                    id: "ex10_q2",
                    texte: "Donner les coordonnées de I, J et K.",
                    solution: "I milieu de [EF] : $I(\\frac{1}{2},0,1)$. J milieu de [BC] : $J(1,\\frac{1}{2},0)$. K centre de CDHG : $K(\\frac{1}{2},1,\\frac{1}{2})$."
                },
                {
                    id: "ex10_q3",
                    texte: "Calculer $\\overrightarrow{IJ} \\cdot \\overrightarrow{IK}$.",
                    solution: "$\\overrightarrow{IJ} = J - I = (\\frac{1}{2}, \\frac{1}{2}, -1)$. $\\overrightarrow{IK} = K - I = (0, 1, -\\frac{1}{2})$. $\\overrightarrow{IJ} \\cdot \\overrightarrow{IK} = \\frac{1}{2}\\times0 + \\frac{1}{2}\\times1 + (-1)\\times(-\\frac{1}{2}) = 0 + \\frac{1}{2} + \\frac{1}{2} = 1$."
                },
                {
                    id: "ex10_q4",
                    texte: "Déterminer une équation cartésienne du plan (IJK).",
                    solution: "$\\overrightarrow{IJ} = (\\frac{1}{2}, \\frac{1}{2}, -1)$, $\\overrightarrow{IK} = (0, 1, -\\frac{1}{2})$. $\\vec{n} = \\overrightarrow{IJ} \\wedge \\overrightarrow{IK} = \\begin{pmatrix} \\frac{1}{2}\\times(-\\frac{1}{2}) - (-1)\\times1 \\\\ (-1)\\times0 - \\frac{1}{2}\\times(-\\frac{1}{2}) \\\\ \\frac{1}{2}\\times1 - \\frac{1}{2}\\times0 \\end{pmatrix} = \\begin{pmatrix} -\\frac{1}{4} + 1 \\\\ 0 + \\frac{1}{4} \\\\ \\frac{1}{2} \\end{pmatrix} = \\begin{pmatrix} \\frac{3}{4} \\\\ \\frac{1}{4} \\\\ \\frac{1}{2} \\end{pmatrix}$. En multipliant par 4 : $\\vec{n}(3,1,2)$. Le plan passe par I : $3(x-\\frac{1}{2}) + 1(y-0) + 2(z-1) = 0 \\Rightarrow 3x - \\frac{3}{2} + y + 2z - 2 = 0 \\Rightarrow 6x + 2y + 4z - 7 = 0$."
                },
                {
                    id: "ex10_q5",
                    texte: "Calculer le volume du tétraèdre AIJK.",
                    solution: "$\\overrightarrow{AI} = (\\frac{1}{2}, 0, 1)$, $\\overrightarrow{AJ} = (1, \\frac{1}{2}, 0)$, $\\overrightarrow{AK} = (\\frac{1}{2}, 1, \\frac{1}{2})$. $\\det = \\begin{vmatrix} \\frac{1}{2} & 1 & \\frac{1}{2} \\\\ 0 & \\frac{1}{2} & 1 \\\\ 1 & 0 & \\frac{1}{2} \\end{vmatrix}$. Calculons : $\\frac{1}{2}(\\frac{1}{2}\\times\\frac{1}{2} - 1\\times0) - 1(0\\times\\frac{1}{2} - 1\\times1) + \\frac{1}{2}(0\\times0 - \\frac{1}{2}\\times1) = \\frac{1}{2}(\\frac{1}{4}) - 1(-1) + \\frac{1}{2}(-\\frac{1}{2}) = \\frac{1}{8} + 1 - \\frac{1}{4} = \\frac{1}{8} + \\frac{8}{8} - \\frac{2}{8} = \\frac{7}{8}$. $V = \\frac{1}{6} \\times \\frac{7}{8} = \\frac{7}{48}$."
                },
                {
                    id: "ex10_q6",
                    texte: "Calculer la distance de A au plan (IJK).",
                    solution: "Le plan a pour équation $6x+2y+4z-7=0$. $d(A,\\mathcal{P}) = \\dfrac{|6\\times0+2\\times0+4\\times0-7|}{\\sqrt{6^2+2^2+4^2}} = \\dfrac{7}{\\sqrt{36+4+16}} = \\dfrac{7}{\\sqrt{56}} = \\dfrac{7}{2\\sqrt{14}}$."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées du cube pour simplifier tous les calculs.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des centres des faces."
        },
        // ============================================================
        // EXERCICE 2 – Synthèse : Tétraèdre et sphère
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p><strong>Problème de synthèse n°2 – Tétraèdre et sphère</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$ et $D(1,1,1)$.</p>
                <p><strong>1.</strong> Montrer que $ABCD$ est un tétraèdre.</p>
                <p><strong>2.</strong> Calculer le volume du tétraèdre $ABCD$.</p>
                <p><strong>3.</strong> Déterminer l'équation du plan $(ABC)$.</p>
                <p><strong>4.</strong> Calculer la distance de $D$ au plan $(ABC)$.</p>
                <p><strong>5.</strong> Déterminer l'équation de la sphère de centre $D$ et tangente au plan $(ABC)$.</p>
                <p><strong>6.</strong> Déterminer les coordonnées du point de tangence.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q7",
                    texte: "Montrer que $ABCD$ est un tétraèdre.",
                    solution: "Il faut montrer que les points ne sont pas coplanaires. $\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$, $\\overrightarrow{AD} = (0,1,1)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 1 \\end{vmatrix} = -1(0\\times1 - 1\\times3) - (-1)(2\\times1 - 1\\times0) + 0 = -1(-3) + 1(2) = 3 + 2 = 5 \\neq 0$. Donc les points ne sont pas coplanaires, c'est un tétraèdre."
                },
                {
                    id: "ex10_q8",
                    texte: "Calculer le volume du tétraèdre.",
                    solution: "$V = \\frac{1}{6} \\times |\\det| = \\frac{5}{6}$ unités de volume."
                },
                {
                    id: "ex10_q9",
                    texte: "Déterminer l'équation du plan $(ABC)$.",
                    solution: "$\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 2\\times3 - 0\\times0 \\\\ 0\\times(-1) - (-1)\\times3 \\\\ (-1)\\times0 - 2\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$. Le plan passe par A(1,0,0) : $6(x-1) + 3(y-0) + 2(z-0) = 0 \\Rightarrow 6x + 3y + 2z - 6 = 0$."
                },
                {
                    id: "ex10_q10",
                    texte: "Calculer la distance de D au plan (ABC).",
                    solution: "$h = \\dfrac{|6\\times1 + 3\\times1 + 2\\times1 - 6|}{\\sqrt{6^2+3^2+2^2}} = \\dfrac{|6+3+2-6|}{\\sqrt{36+9+4}} = \\dfrac{5}{\\sqrt{49}} = \\dfrac{5}{7}$."
                },
                {
                    id: "ex10_q11",
                    texte: "Déterminer l'équation de la sphère de centre D tangente au plan.",
                    solution: "Le rayon de la sphère est $R = h = \\frac{5}{7}$. La sphère de centre D(1,1,1) a pour équation : $(x-1)^2 + (y-1)^2 + (z-1)^2 = \\frac{25}{49}$."
                },
                {
                    id: "ex10_q12",
                    texte: "Déterminer les coordonnées du point de tangence.",
                    solution: "Le point de tangence est le projeté orthogonal de D sur le plan. La normale est $\\vec{n}(6,3,2)$. $\\overrightarrow{DH} = \\lambda \\vec{n}$. $H(1+6\\lambda, 1+3\\lambda, 1+2\\lambda)$. On remplace dans l'équation : $6(1+6\\lambda) + 3(1+3\\lambda) + 2(1+2\\lambda) - 6 = 0 \\Rightarrow 6 + 36\\lambda + 3 + 9\\lambda + 2 + 4\\lambda - 6 = 0 \\Rightarrow 5 + 49\\lambda = 0 \\Rightarrow \\lambda = -\\frac{5}{49}$. Donc $H(1-\\frac{30}{49}, 1-\\frac{15}{49}, 1-\\frac{10}{49}) = (\\frac{19}{49}, \\frac{34}{49}, \\frac{39}{49})$."
                }
            ],
            astuces_exo: "💡 La sphère tangente a pour rayon la distance du centre au plan.",
            erreurs_exo: "⚠️ Attention au signe de $\\lambda$ : le point de tangence est du côté du plan."
        },
        // ============================================================
        // EXERCICE 3 – Synthèse : Parallélépipède
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p><strong>Problème de synthèse n°3 – Parallélépipède</strong></p>
                <p>Soit $ABCDEFGH$ un parallélépipède rectangle tel que $AB=2$, $AD=1$ et $AE=3$.</p>
                <p>On munit l'espace du repère orthonormé $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p><strong>1.</strong> Donner les coordonnées des sommets.</p>
                <p><strong>2.</strong> Déterminer une représentation paramétrique de la droite $(AG)$.</p>
                <p><strong>3.</strong> Déterminer l'équation cartésienne du plan $(BDG)$.</p>
                <p><strong>4.</strong> Étudier la position relative de la droite $(AG)$ et du plan $(BDG)$.</p>
                <p><strong>5.</strong> Calculer le volume du tétraèdre $ABDG$.</p>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q13",
                    texte: "Donner les coordonnées des sommets.",
                    solution: "A(0,0,0), B(2,0,0), C(2,1,0), D(0,1,0), E(0,0,3), F(2,0,3), G(2,1,3), H(0,1,3)."
                },
                {
                    id: "ex10_q14",
                    texte: "Déterminer une représentation paramétrique de (AG).",
                    solution: "$\\overrightarrow{AG} = G - A = (2,1,3)$. Donc $(AG) : \\begin{cases} x = 2\\alpha \\\\ y = \\alpha \\\\ z = 3\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex10_q15",
                    texte: "Déterminer l'équation cartésienne du plan (BDG).",
                    solution: "$\\overrightarrow{BD} = D - B = (-2,1,0)$, $\\overrightarrow{BG} = G - B = (0,1,3)$. $\\vec{n} = \\overrightarrow{BD} \\wedge \\overrightarrow{BG} = \\begin{pmatrix} 1\\times3 - 0\\times1 \\\\ 0\\times0 - (-2)\\times3 \\\\ (-2)\\times1 - 1\\times0 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 6 \\\\ -2 \\end{pmatrix}$. Le plan passe par B(2,0,0) : $3(x-2) + 6(y-0) - 2(z-0) = 0 \\Rightarrow 3x + 6y - 2z - 6 = 0$."
                },
                {
                    id: "ex10_q16",
                    texte: "Étudier la position relative de (AG) et (BDG).",
                    solution: "Le vecteur directeur de (AG) est $\\vec{u} = (2,1,3)$. Le vecteur normal du plan est $\\vec{n} = (3,6,-2)$. $\\vec{u} \\cdot \\vec{n} = 2\\times3 + 1\\times6 + 3\\times(-2) = 6 + 6 - 6 = 6 \\neq 0$. Donc (AG) est sécante au plan (BDG). On trouve le point d'intersection en substituant : $3(2\\alpha) + 6(\\alpha) - 2(3\\alpha) - 6 = 0 \\Rightarrow 6\\alpha + 6\\alpha - 6\\alpha - 6 = 0 \\Rightarrow 6\\alpha = 6 \\Rightarrow \\alpha = 1$. Donc le point d'intersection est $G(2,1,3)$."
                },
                {
                    id: "ex10_q17",
                    texte: "Calculer le volume du tétraèdre ABDG.",
                    solution: "$\\overrightarrow{AB} = (2,0,0)$, $\\overrightarrow{AD} = (0,1,0)$, $\\overrightarrow{AG} = (2,1,3)$. $\\det = \\begin{vmatrix} 2 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 3 \\end{vmatrix} = 2\\times1\\times3 = 6$. $V = \\frac{1}{6} \\times 6 = 1$ unité de volume."
                }
            ],
            astuces_exo: "💡 Pour le volume, utiliser les vecteurs issus de A.",
            erreurs_exo: "⚠️ Vérifier que le plan est bien défini par trois points non alignés."
        },
        // ============================================================
        // EXERCICE 4 – Synthèse : Pyramide
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p><strong>Problème de synthèse n°4 – Pyramide</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $SABCD$ une pyramide de sommet $S$ et de base le rectangle $ABCD$.</p>
                <p>On donne : $A(0,0,0)$, $B(4,0,0)$, $D(0,3,0)$, $S(2,1.5,5)$.</p>
                <p><strong>1.</strong> Déterminer les coordonnées de $C$.</p>
                <p><strong>2.</strong> Déterminer l'équation du plan $(SBC)$.</p>
                <p><strong>3.</strong> Calculer la distance de $A$ au plan $(SBC)$.</p>
                <p><strong>4.</strong> Calculer le volume de la pyramide $SABCD$.</p>
                <p><strong>5.</strong> Déterminer une représentation paramétrique de la droite $(SA)$.</p>
                <p><strong>6.</strong> La droite $(SA)$ est-elle orthogonale au plan $(SBC)$ ?</p>
                <canvas class="figure-canvas" data-figure="pyramide" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q18",
                    texte: "Déterminer les coordonnées de C.",
                    solution: "ABCD est un rectangle, donc C = B + D = (4,3,0)."
                },
                {
                    id: "ex10_q19",
                    texte: "Déterminer l'équation du plan (SBC).",
                    solution: "$\\overrightarrow{SB} = B - S = (2, -1.5, -5)$, $\\overrightarrow{SC} = C - S = (2, 1.5, -5)$. $\\vec{n} = \\overrightarrow{SB} \\wedge \\overrightarrow{SC} = \\begin{pmatrix} (-1.5)\\times(-5) - (-5)\\times1.5 \\\\ (-5)\\times2 - 2\\times(-5) \\\\ 2\\times1.5 - (-1.5)\\times2 \\end{pmatrix} = \\begin{pmatrix} 7.5 + 7.5 \\\\ -10 + 10 \\\\ 3 + 3 \\end{pmatrix} = \\begin{pmatrix} 15 \\\\ 0 \\\\ 6 \\end{pmatrix}$. Le plan passe par S(2,1.5,5) : $15(x-2) + 0(y-1.5) + 6(z-5) = 0 \\Rightarrow 15x + 6z - 60 = 0 \\Rightarrow 5x + 2z - 20 = 0$."
                },
                {
                    id: "ex10_q20",
                    texte: "Calculer la distance de A au plan (SBC).",
                    solution: "$d(A,\\mathcal{P}) = \\dfrac{|5\\times0 + 2\\times0 - 20|}{\\sqrt{5^2+0^2+2^2}} = \\dfrac{20}{\\sqrt{29}}$."
                },
                {
                    id: "ex10_q21",
                    texte: "Calculer le volume de la pyramide.",
                    solution: "La base est un rectangle de dimensions 4 et 3, donc $\\text{Aire}_{base} = 12$. La hauteur est la cote de S : $h = 5$. $V = \\frac{1}{3} \\times 12 \\times 5 = 20$ unités de volume."
                },
                {
                    id: "ex10_q22",
                    texte: "Déterminer une représentation paramétrique de (SA).",
                    solution: "$\\overrightarrow{SA} = A - S = (-2, -1.5, -5)$. Donc $(SA) : \\begin{cases} x = 2 - 2\\alpha \\\\ y = 1.5 - 1.5\\alpha \\\\ z = 5 - 5\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex10_q23",
                    texte: "La droite (SA) est-elle orthogonale au plan (SBC) ?",
                    solution: "Le vecteur directeur de (SA) est $\\vec{u} = (-2, -1.5, -5)$. Le vecteur normal du plan est $\\vec{n} = (15,0,6)$ (ou (5,0,2)). $\\vec{u}$ et $\\vec{n}$ sont colinéaires si $(-2, -1.5, -5) = \\lambda(15,0,6)$. De la deuxième coordonnée : $-1.5 = \\lambda\\times0$ impossible. Donc $\\vec{u}$ n'est pas colinéaire à $\\vec{n}$. La droite (SA) n'est pas orthogonale au plan (SBC)."
                }
            ],
            astuces_exo: "💡 Pour une pyramide, le volume est $V = \\frac{1}{3} \\times \\text{Aire}_{base} \\times \\text{hauteur}$.",
            erreurs_exo: "⚠️ La base de la pyramide est le rectangle ABCD, pas le triangle ABC."
        },
        // ============================================================
        // EXERCICE 5 – Synthèse : Problème type bac
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p><strong>Problème de synthèse n°5 – Type Bac</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(2,1,0)$, $B(0,2,1)$, $C(1,0,2)$.</p>
                <p><strong>1.</strong> Montrer que $A,B,C$ ne sont pas alignés.</p>
                <p><strong>2.</strong> Déterminer une équation cartésienne du plan $(ABC)$.</p>
                <p><strong>3.</strong> Soit $\\mathcal{D}$ la droite passant par $O$ et de vecteur directeur $\\vec{u}(1,1,1)$. Déterminer la position relative de $\\mathcal{D}$ et du plan $(ABC)$.</p>
                <p><strong>4.</strong> Soit $\\mathcal{S}$ la sphère de centre $O$ et de rayon $R = \\sqrt{3}$. Déterminer l'intersection de $\\mathcal{S}$ et du plan $(ABC)$.</p>
                <p><strong>5.</strong> Déterminer l'équation de la sphère de diamètre $[AB]$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q24",
                    texte: "Montrer que A, B, C ne sont pas alignés.",
                    solution: "$\\overrightarrow{AB} = (-2,1,1)$, $\\overrightarrow{AC} = (-1,-1,2)$. Ces deux vecteurs ne sont pas colinéaires car $-2/-1 = 2$ mais $1/-1 = -1 \\neq 2$. Donc A, B, C ne sont pas alignés."
                },
                {
                    id: "ex10_q25",
                    texte: "Déterminer l'équation du plan (ABC).",
                    solution: "$\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times2 - 1\\times(-1) \\\\ 1\\times(-1) - (-2)\\times2 \\\\ (-2)\\times(-1) - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 2 + 1 \\\\ -1 + 4 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}$. Donc $\\vec{n}(1,1,1)$. Le plan passe par A(2,1,0) : $(x-2) + (y-1) + (z-0) = 0 \\Rightarrow x + y + z - 3 = 0$."
                },
                {
                    id: "ex10_q26",
                    texte: "Déterminer la position relative de D et du plan.",
                    solution: "$\\vec{u}(1,1,1)$ est colinéaire à $\\vec{n}(1,1,1)$ (ils sont égaux). Donc la droite est orthogonale au plan, donc sécante. Le point d'intersection est $O$ ? Non, car O n'est pas dans le plan ($0+0+0-3=-3 \\neq 0$). On trouve l'intersection : $(\\alpha,\\alpha,\\alpha)$ tel que $3\\alpha - 3 = 0 \\Rightarrow \\alpha = 1$. Donc le point d'intersection est $M(1,1,1)$."
                },
                {
                    id: "ex10_q27",
                    texte: "Déterminer l'intersection de S et du plan (ABC).",
                    solution: "La sphère a pour équation $x^2+y^2+z^2=3$. Le plan a pour équation $x+y+z=3$. La distance de O au plan est $h = \\dfrac{|0+0+0-3|}{\\sqrt{3}} = \\sqrt{3} = R$. Donc $h = R$, l'intersection est réduite à un point : le projeté orthogonal de O sur le plan. Comme la normale est $\\vec{n}(1,1,1)$, le point est $H(1,1,1)$."
                },
                {
                    id: "ex10_q28",
                    texte: "Déterminer l'équation de la sphère de diamètre [AB].",
                    solution: "Le centre est I milieu de [AB] : $I(1, \\frac{3}{2}, \\frac{1}{2})$. Le rayon est $R = \\frac{AB}{2} = \\frac{\\sqrt{(-2)^2+1^2+1^2}}{2} = \\frac{\\sqrt{6}}{2}$. L'équation est : $(x-1)^2 + (y-\\frac{3}{2})^2 + (z-\\frac{1}{2})^2 = \\frac{6}{4} = \\frac{3}{2}$."
                }
            ],
            astuces_exo: "💡 Pour l'intersection sphère-plan, comparer h et R.",
            erreurs_exo: "⚠️ Pour la sphère de diamètre [AB], le rayon est la moitié de la distance AB."
        },
        // ============================================================
        // EXERCICE 6 – Synthèse : Problème complet
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p><strong>Problème de synthèse n°6 – Complet</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$ et $D(1,1,1)$.</p>
                <p><strong>1.</strong> Montrer que $A,B,C,D$ sont non coplanaires.</p>
                <p><strong>2.</strong> Calculer le volume du tétraèdre $ABCD$.</p>
                <p><strong>3.</strong> Déterminer une équation cartésienne du plan $(ABC)$.</p>
                <p><strong>4.</strong> Calculer la distance de $D$ au plan $(ABC)$.</p>
                <p><strong>5.</strong> Déterminer une représentation paramétrique de la droite $(AD)$.</p>
                <p><strong>6.</strong> La droite $(AD)$ est-elle orthogonale au plan $(ABC)$ ?</p>
                <p><strong>7.</strong> Déterminer l'équation de la sphère de centre $D$ et tangente au plan $(ABC)$.</p>
                <p><strong>8.</strong> Déterminer les coordonnées du point de tangence.</p>
                <p><strong>9.</strong> Calculer l'aire du triangle $ABC$.</p>
                <p><strong>10.</strong> En déduire la hauteur issue de $D$ dans le tétraèdre $ABCD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q29",
                    texte: "Montrer que A,B,C,D sont non coplanaires.",
                    solution: "$\\overrightarrow{AB} = (-1,2,0)$, $\\overrightarrow{AC} = (-1,0,3)$, $\\overrightarrow{AD} = (0,1,1)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 1 \\end{vmatrix} = -1(0\\times1 - 1\\times3) - (-1)(2\\times1 - 1\\times0) + 0 = -1(-3) + 1(2) = 3 + 2 = 5 \\neq 0$. Donc non coplanaires."
                },
                {
                    id: "ex10_q30",
                    texte: "Calculer le volume du tétraèdre.",
                    solution: "$V = \\frac{1}{6} \\times |\\det| = \\frac{5}{6}$ unités de volume."
                },
                {
                    id: "ex10_q31",
                    texte: "Déterminer l'équation du plan (ABC).",
                    solution: "$\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$. Le plan passe par A(1,0,0) : $6(x-1) + 3y + 2z = 0 \\Rightarrow 6x + 3y + 2z - 6 = 0$."
                },
                {
                    id: "ex10_q32",
                    texte: "Calculer la distance de D au plan (ABC).",
                    solution: "$h = \\dfrac{|6\\times1 + 3\\times1 + 2\\times1 - 6|}{\\sqrt{6^2+3^2+2^2}} = \\dfrac{5}{7}$."
                },
                {
                    id: "ex10_q33",
                    texte: "Donner une représentation paramétrique de (AD).",
                    solution: "$\\overrightarrow{AD} = (0,1,1)$. $(AD) : \\begin{cases} x = 1 \\\\ y = \\alpha \\\\ z = \\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex10_q34",
                    texte: "La droite (AD) est-elle orthogonale au plan (ABC) ?",
                    solution: "$\\vec{u}_{AD} = (0,1,1)$, $\\vec{n} = (6,3,2)$. $\\vec{u}_{AD}$ et $\\vec{n}$ ne sont pas colinéaires (car $0/6 \\neq 1/3$). Donc (AD) n'est pas orthogonale au plan."
                },
                {
                    id: "ex10_q35",
                    texte: "Déterminer l'équation de la sphère de centre D tangente au plan.",
                    solution: "Le rayon est $R = h = \\frac{5}{7}$. L'équation est : $(x-1)^2 + (y-1)^2 + (z-1)^2 = \\frac{25}{49}$."
                },
                {
                    id: "ex10_q36",
                    texte: "Déterminer les coordonnées du point de tangence.",
                    solution: "Le point de tangence est le projeté orthogonal de D sur le plan. $\\overrightarrow{DH} = \\lambda \\vec{n} = \\lambda(6,3,2)$. $H(1+6\\lambda, 1+3\\lambda, 1+2\\lambda)$. On remplace dans l'équation : $6(1+6\\lambda) + 3(1+3\\lambda) + 2(1+2\\lambda) - 6 = 0 \\Rightarrow 6 + 36\\lambda + 3 + 9\\lambda + 2 + 4\\lambda - 6 = 0 \\Rightarrow 5 + 49\\lambda = 0 \\Rightarrow \\lambda = -\\frac{5}{49}$. Donc $H(\\frac{19}{49}, \\frac{34}{49}, \\frac{39}{49})$."
                },
                {
                    id: "ex10_q37",
                    texte: "Calculer l'aire du triangle ABC.",
                    solution: "$\\|\\vec{n}\\| = \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = \\sqrt{6^2+3^2+2^2} = \\sqrt{49} = 7$. $\\mathcal{A}_{ABC} = \\frac{1}{2} \\times 7 = \\frac{7}{2}$ unités d'aire."
                },
                {
                    id: "ex10_q38",
                    texte: "En déduire la hauteur issue de D.",
                    solution: "$V = \\frac{1}{3} \\times \\mathcal{A}_{ABC} \\times h_D \\Rightarrow h_D = \\dfrac{3V}{\\mathcal{A}_{ABC}} = \\dfrac{3\\times\\frac{5}{6}}{\\frac{7}{2}} = \\dfrac{\\frac{5}{2}}{\\frac{7}{2}} = \\dfrac{5}{7}$. On retrouve bien la distance de D au plan (ABC)."
                }
            ],
            astuces_exo: "💡 La hauteur issue de D est exactement la distance de D au plan (ABC).",
            erreurs_exo: "⚠️ Le volume du tétraèdre et la distance au plan sont liés par la formule $V = \\frac{1}{3} \\times \\text{Aire}_{base} \\times \\text{hauteur}$."
        },
// ============================================================
// EXERCICE 7 (PDF n°31) – Tétraèdre, coordonnées, paramétriques, concours
// ============================================================
{
    numero: 7,
    enonce: `
        <p><strong>Problème de synthèse – Tétraèdre et droites concourantes</strong></p>
        <p>Soit $ABCD$ un tétraèdre. Le point $G$ est le centre de gravité du triangle $BCD$. Les points $I$ et $J$ sont les milieux respectifs des segments $[BC]$ et $[CD]$. Soit $K$ le point tel que $5\\overrightarrow{KA} + \\overrightarrow{KD} = \\vec{0}$. Soit $L$ le point défini par $\\overrightarrow{AL} = \\frac{1}{6}\\overrightarrow{AB}$.</p>
        <p>On munit l'espace du repère $(A,\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.</p>
        <p><strong>1.</strong> Déterminer les coordonnées des points $A, B, C, D, G, I, J, K$ et $L$.</p>
        <p><strong>2.</strong> Déterminer une représentation paramétrique de chacune des droites $(IK)$, $(JL)$ et $(AG)$.</p>
        <p><strong>3.</strong> En déduire que les droites $(IK)$, $(JL)$ et $(AG)$ sont concourantes.</p>
        <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
    `,
    questions: [
        {
            id: "ex10_q39",
            texte: "1. Coordonnées des points dans le repère.",
            solution: "Dans le repère $(A,\\vec{AB},\\vec{AC},\\vec{AD})$, on a : A(0,0,0), B(1,0,0), C(0,1,0), D(0,0,1).<br> G centre de gravité de BCD : $G(\\frac{1}{3},\\frac{1}{3},\\frac{1}{3})$.<br> I milieu de BC : $I(\\frac{1}{2},\\frac{1}{2},0)$.<br> J milieu de CD : $J(0,\\frac{1}{2},\\frac{1}{2})$.<br> K : $5\\overrightarrow{KA}+\\overrightarrow{KD}=\\vec{0} \\Rightarrow 5(A-K)+(D-K)=0 \\Rightarrow 5A+6K?$ On écrit en vecteurs : $5\\overrightarrow{KA} = 5(A-K)$, $\\overrightarrow{KD}=D-K$. Donc $5A-5K + D - K = 0 \\Rightarrow 5A + D = 6K \\Rightarrow K = \\frac{5A+D}{6} = (0,0,\\frac{1}{6})$.<br> L : $\\overrightarrow{AL} = \\frac{1}{6}\\overrightarrow{AB} \\Rightarrow L(\\frac{1}{6},0,0)$."
        },
        {
            id: "ex10_q40",
            texte: "2. Représentations paramétriques des droites.",
            solution: "(IK) passe par I et K : $\\overrightarrow{IK} = K - I = (-\\frac{1}{2}, -\\frac{1}{2}, \\frac{1}{6})$. Paramétrique : $\\begin{cases} x = \\frac{1}{2} - \\frac{1}{2}\\alpha \\\\ y = \\frac{1}{2} - \\frac{1}{2}\\alpha \\\\ z = \\frac{1}{6}\\alpha \\end{cases}, \\alpha\\in\\mathbb{R}$.<br> (JL) passe par J et L : $\\overrightarrow{JL} = L - J = (\\frac{1}{6}, -\\frac{1}{2}, -\\frac{1}{2})$. Paramétrique : $\\begin{cases} x = \\frac{1}{6}\\beta \\\\ y = \\frac{1}{2} - \\frac{1}{2}\\beta \\\\ z = \\frac{1}{2} - \\frac{1}{2}\\beta \\end{cases}, \\beta\\in\\mathbb{R}$.<br> (AG) passe par A(0,0,0) et G($\\frac{1}{3},\\frac{1}{3},\\frac{1}{3}$) : $\\begin{cases} x = \\gamma \\\\ y = \\gamma \\\\ z = \\gamma \\end{cases}, \\gamma\\in\\mathbb{R}$ (en prenant $\\gamma = t/3$)."
        },
        {
            id: "ex10_q41",
            texte: "3. Montrer qu'elles sont concourantes.",
            solution: "On cherche l'intersection de (AG) avec (IK). Sur (AG) : $x=y=z=t$. Sur (IK) : $x=y=\\frac{1}{2}-\\frac{1}{2}\\alpha$, $z=\\frac{1}{6}\\alpha$. On a $t = \\frac{1}{2}-\\frac{1}{2}\\alpha$ et $t = \\frac{1}{6}\\alpha$. Donc $\\frac{1}{2}-\\frac{1}{2}\\alpha = \\frac{1}{6}\\alpha \\Rightarrow \\frac{1}{2} = \\frac{2}{3}\\alpha \\Rightarrow \\alpha = \\frac{3}{4}$. Alors $t = \\frac{1}{6}\\times\\frac{3}{4} = \\frac{1}{8}$. Donc le point d'intersection est $P(\\frac{1}{8},\\frac{1}{8},\\frac{1}{8})$. Vérifions que ce point appartient à (JL) : avec $\\beta$, on a $x=\\frac{1}{6}\\beta = \\frac{1}{8} \\Rightarrow \\beta = \\frac{3}{4}$ ; alors $y = \\frac{1}{2}-\\frac{1}{2}\\times\\frac{3}{4} = \\frac{1}{2}-\\frac{3}{8} = \\frac{1}{8}$, et $z = \\frac{1}{2}-\\frac{1}{2}\\times\\frac{3}{4} = \\frac{1}{8}$. Donc P est sur (JL). Les trois droites sont concourantes en $P(\\frac{1}{8},\\frac{1}{8},\\frac{1}{8})$."
        }
    ],
    astuces_exo: "💡 Utiliser les coordonnées barycentriques pour trouver les points de concours.",
    erreurs_exo: "⚠️ Vérifier les relations vectorielles pour K."
},
// ============================================================
// EXERCICE 8 (PDF n°32) – Pyramide, section plane, aire maximale
// ============================================================
{
    numero: 8,
    enonce: `
        <p><strong>Problème de synthèse – Pyramide, section et aire maximale</strong></p>
        <p>Soit $(O,\\overrightarrow{OA},\\overrightarrow{OC},\\overrightarrow{OS})$ un repère orthonormé de l'espace. Soit $B$ le point de coordonnées $(1,1,0)$.</p>
        <p>Soit $\\mathcal{P}$ le plan d'équation $x+y=a$ où $a$ est un réel de l'intervalle $]0,1[$.</p>
        <p>Le but du problème est de déterminer la section du plan $\\mathcal{P}$ avec la pyramide $SOABC$ et le maximum de l'aire de cette section.</p>
        <p><strong>1.</strong> Déterminer une représentation paramétrique de chacune des droites $(SA)$, $(SB)$, $(SC)$, $(OC)$ et $(OA)$.</p>
        <p><strong>2.</strong> On note $I, J, K, L$ et $M$ les points d'intersection respectifs du plan $\\mathcal{P}$ avec les droites $(SA)$, $(SB)$, $(SC)$, $(OC)$ et $(OA)$.</p>
        <p><strong>a.</strong> Déterminer les coordonnées des points $I, J, K, L$ et $M$.</p>
        <p><strong>b.</strong> Vérifier que le quadrilatère $IKLM$ est un rectangle.</p>
        <p><strong>c.</strong> Déterminer l'aire du pentagone $IJKLM$.</p>
        <p><strong>3.</strong> Soit $f$ la fonction définie sur $]0,1[$ par $f(x) = \\dfrac{x\\sqrt{2}}{4}(4-3x)$.</p>
        <p><strong>a.</strong> Étudier les variations de $f$ sur $]0,1[$.</p>
        <p><strong>b.</strong> En déduire la position du plan $\\mathcal{P}$ qui réalise le maximum de l'aire du pentagone $IJKLM$. Vérifier qu'il s'agit d'un plan qui passe par le centre de gravité du triangle $OAC$.</p>
        <canvas class="figure-canvas" data-figure="pyramide" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
    `,
    questions: [
        {
            id: "ex10_q42",
            texte: "1. Représentations paramétriques des droites.",
            solution: "On a $O(0,0,0), A(1,0,0), B(1,1,0), C(0,1,0), S(0,0,1)$.<br> (SA) : $\\begin{cases} x = 1 - t \\\\ y = 0 \\\\ z = t \\end{cases}, t\\in[0,1]$.<br> (SB) : $\\begin{cases} x = 1 - t \\\\ y = 1 - t \\\\ z = t \\end{cases}, t\\in[0,1]$.<br> (SC) : $\\begin{cases} x = 0 \\\\ y = 1 - t \\\\ z = t \\end{cases}, t\\in[0,1]$.<br> (OC) : $\\begin{cases} x = 0 \\\\ y = s \\\\ z = 0 \\end{cases}, s\\in[0,1]$.<br> (OA) : $\\begin{cases} x = s \\\\ y = 0 \\\\ z = 0 \\end{cases}, s\\in[0,1]$."
        },
        {
            id: "ex10_q43",
            texte: "2.a Coordonnées des points d'intersection avec $\\mathcal{P}: x+y=a$.",
            solution: "Pour (SA) : $x=1-t, y=0 \\Rightarrow 1-t = a \\Rightarrow t = 1-a$. Alors $I(1-(1-a),0,1-a) = (a,0,1-a)$.<br> Pour (SB) : $x=1-t, y=1-t \\Rightarrow 2-2t = a \\Rightarrow t = 1-\\frac{a}{2}$. Alors $J(1-t,1-t,t) = (\\frac{a}{2}, \\frac{a}{2}, 1-\\frac{a}{2})$.<br> Pour (SC) : $x=0, y=1-t \\Rightarrow 1-t = a \\Rightarrow t=1-a$. Alors $K(0, a, 1-a)$.<br> Pour (OC) : $x=0, y=s \\Rightarrow s=a$. Alors $L(0,a,0)$.<br> Pour (OA) : $x=s, y=0 \\Rightarrow s=a$. Alors $M(a,0,0)$."
        },
        {
            id: "ex10_q44",
            texte: "2.b Vérifier que $IKLM$ est un rectangle.",
            solution: "Coordonnées : $I(a,0,1-a)$, $K(0,a,1-a)$, $L(0,a,0)$, $M(a,0,0)$.<br> $\\overrightarrow{IK} = K-I = (-a, a, 0)$, $\\overrightarrow{ML} = L-M = (-a, a, 0)$ donc $\\overrightarrow{IK} = \\overrightarrow{ML}$ (côtés parallèles).<br> $\\overrightarrow{IM} = M-I = (0,0,-(1-a))$, $\\overrightarrow{KL} = L-K = (0,0,-(1-a))$ donc $\\overrightarrow{IM} = \\overrightarrow{KL}$.<br> De plus, $\\overrightarrow{IK} \\cdot \\overrightarrow{IM} = (-a)\\cdot0 + a\\cdot0 + 0\\cdot(-(1-a)) = 0$. Donc les côtés sont orthogonaux, c'est un rectangle."
        },
        {
            id: "ex10_q45",
            texte: "2.c Aire du pentagone $IJKLM$.",
            solution: "Le pentagone est formé du rectangle $IKLM$ et du triangle $IJK$ (car IJKLM est l'ensemble des points du plan P dans la pyramide).<br> L'aire du rectangle $IKLM$ est $IK \\times IM$. $IK = \\sqrt{(-a)^2+a^2+0} = a\\sqrt{2}$. $IM = \\sqrt{0+0+(1-a)^2} = 1-a$. Donc $\\mathcal{A}_{IKLM} = a\\sqrt{2}(1-a)$.<br> Le triangle $IJK$ : $I(a,0,1-a)$, $J(\\frac{a}{2},\\frac{a}{2},1-\\frac{a}{2})$, $K(0,a,1-a)$. On peut calculer son aire. Les vecteurs $\\overrightarrow{IJ} = (-\\frac{a}{2}, \\frac{a}{2}, \\frac{a}{2})$, $\\overrightarrow{IK} = (-a, a, 0)$. Le produit vectoriel : $\\overrightarrow{IJ} \\wedge \\overrightarrow{IK} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -\\frac{a}{2} & \\frac{a}{2} & \\frac{a}{2} \\\\ -a & a & 0 \\end{vmatrix} = \\left( \\frac{a}{2}\\cdot0 - \\frac{a}{2}\\cdot a, \\; \\frac{a}{2}\\cdot(-a) - (-\\frac{a}{2})\\cdot0, \\; (-\\frac{a}{2})\\cdot a - \\frac{a}{2}\\cdot(-a) \\right) = \\left( -\\frac{a^2}{2}, -\\frac{a^2}{2}, 0 \\right)$.<br> La norme est $\\sqrt{(\\frac{a^2}{2})^2+(\\frac{a^2}{2})^2} = \\frac{a^2}{2}\\sqrt{2} = \\frac{a^2\\sqrt{2}}{2}$. L'aire du triangle $IJK$ est la moitié : $\\mathcal{A}_{IJK} = \\frac{1}{2} \\times \\frac{a^2\\sqrt{2}}{2} = \\frac{a^2\\sqrt{2}}{4}$.<br> L'aire du pentagone $IJKLM$ est donc $\\mathcal{A} = a\\sqrt{2}(1-a) + \\frac{a^2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{4}(4a(1-a)+a^2) = \\frac{\\sqrt{2}}{4}(4a - 4a^2 + a^2) = \\frac{\\sqrt{2}}{4}(4a - 3a^2) = \\frac{a\\sqrt{2}}{4}(4-3a)$. C'est bien la fonction $f(a)$."
        },
        {
            id: "ex10_q46",
            texte: "3.a Étudier les variations de $f(x) = \\frac{x\\sqrt{2}}{4}(4-3x)$.",
            solution: "Pour $x\\in]0,1[$, $f(x) = \\frac{\\sqrt{2}}{4}(4x - 3x^2)$. $f'(x) = \\frac{\\sqrt{2}}{4}(4 - 6x)$. $f'(x) = 0 \\iff 4-6x=0 \\iff x = \\frac{2}{3}$. $f'(x) > 0$ pour $x<\\frac{2}{3}$, $f'(x) < 0$ pour $x>\\frac{2}{3}$. Donc $f$ est croissante sur $]0,\\frac{2}{3}[$ et décroissante sur $]\\frac{2}{3},1[$. Le maximum est atteint en $x=\\frac{2}{3}$."
        },
        {
            id: "ex10_q47",
            texte: "3.b Position du plan P pour le maximum et vérification.",
            solution: "Le maximum est atteint pour $a = \\frac{2}{3}$. Le plan $\\mathcal{P}$ a pour équation $x+y=\\frac{2}{3}$. Le centre de gravité du triangle $OAC$ a pour coordonnées $\\frac{O+A+C}{3} = (\\frac{1}{3},\\frac{1}{3},0)$. On vérifie que ce point appartient au plan : $\\frac{1}{3}+\\frac{1}{3} = \\frac{2}{3}$. Donc le plan passe par le centre de gravité du triangle $OAC$."
        }
    ],
    astuces_exo: "💡 Pour l'aire, décomposer le pentagone en un rectangle et un triangle.",
    erreurs_exo: "⚠️ Vérifier les coordonnées des points d'intersection avec le plan."
}
    ]
});