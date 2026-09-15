// chapitre6.js – Orthogonalité et Vecteurs Normaux
// Extrait du PDF "geometrie espace.pdf" – pages 16 à 18 et 28

data.chapitres.push({
    id: 6,
    titre: "Orthogonalité et Vecteurs Normaux",
    rappel: `
        <p><strong>Orthogonalité de deux vecteurs :</strong> Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si leur produit scalaire est nul :</p>
        <p style="text-align:center; font-size:1.2rem;">$\\vec{u} \\cdot \\vec{v} = 0 \\iff \\vec{u} \\perp \\vec{v}$</p>
        
        <p><strong>Projeté orthogonal :</strong> Soit $O,A,B$ trois points de l'espace et $H$ le projeté orthogonal de $B$ sur $(OA)$. Alors :</p>
        <p style="text-align:center; font-size:1.2rem;">$\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = \\overrightarrow{OA} \\cdot \\overrightarrow{OH}$</p>
        
        <p><strong>Vecteur normal à un plan :</strong> Un vecteur non nul $\\vec{n}$ est normal à un plan $\\mathcal{P}$ si la droite passant par un point quelconque et de vecteur directeur $\\vec{n}$ est orthogonale à $\\mathcal{P}$.</p>
        
        <p><strong>Caractérisation d'un plan par un vecteur normal :</strong> Soit $A$ un point et $\\vec{n}$ un vecteur non nul. L'ensemble des points $M$ tels que $\\overrightarrow{AM} \\cdot \\vec{n} = 0$ est le plan passant par $A$ de vecteur normal $\\vec{n}$.</p>
        
        <p><strong>Distance d'un point à un plan :</strong> Dans un repère orthonormé, la distance du point $M(x_0,y_0,z_0)$ au plan $\\mathcal{P}: ax+by+cz+d=0$ est :</p>
        <p style="text-align:center; font-size:1.2rem;">$d(M,\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$</p>
        
        <p><strong>Plans perpendiculaires :</strong> Deux plans sont perpendiculaires si et seulement si leurs vecteurs normaux respectifs sont orthogonaux.</p>
        
        <p><strong>Droites orthogonales :</strong> Deux droites sont orthogonales si et seulement si leurs vecteurs directeurs respectifs sont orthogonaux.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\vec{n}$ un vecteur non nul. Il existe un unique plan passant par un point donné et de vecteur normal $\\vec{n}$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\mathcal{P}(O,\\vec{u},\\vec{v})$ un plan. Un vecteur non nul $\\vec{n}$ est normal à $\\mathcal{P}$ si et seulement si $\\vec{n} \\cdot \\vec{u} = 0$ et $\\vec{n} \\cdot \\vec{v} = 0$.
        </div>
        <div class="theoreme-block">
            <strong>Propriété :</strong> Deux vecteurs non nuls sont normaux à un même plan si et seulement s'ils sont colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\mathcal{D}$ et $\\mathcal{D}'$ deux plans de vecteurs normaux respectifs $\\vec{n}$ et $\\vec{n}'$. Alors $\\mathcal{D}$ et $\\mathcal{D}'$ sont perpendiculaires si et seulement si $\\vec{n} \\cdot \\vec{n}' = 0$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Dans un repère orthonormé, si un plan $\\mathcal{P}$ a pour équation $ax+by+cz+d=0$, alors le vecteur $\\vec{n}(a,b,c)$ est normal à $\\mathcal{P}$.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer qu'un vecteur $\\vec{n}$ est normal à un plan $\\mathcal{P}(A,\\vec{u},\\vec{v})$, on vérifie que $\\vec{n} \\cdot \\vec{u} = 0$ et $\\vec{n} \\cdot \\vec{v} = 0$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver un vecteur normal à un plan dont on connaît l'équation cartésienne $ax+by+cz+d=0$, on prend $\\vec{n}(a,b,c)$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer la distance d'un point à un plan, on utilise la formule $d = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux plans sont perpendiculaires, on montre que leurs vecteurs normaux sont orthogonaux (produit scalaire nul).
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux droites sont orthogonales, on montre que leurs vecteurs directeurs sont orthogonaux.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Un vecteur normal est un outil puissant pour définir un plan. Il permet de passer facilement à l'équation cartésienne.</div>
        <div class="astuce-box">💡 Dans un cube, les arêtes perpendiculaires ont des vecteurs directeurs orthogonaux.</div>
        <div class="astuce-box">💡 La distance d'un point à un plan est la plus courte distance entre ce point et un point du plan.</div>
        <div class="astuce-box">💡 Pour trouver un vecteur normal à un plan défini par trois points A, B, C, on peut chercher un vecteur orthogonal à $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ (par exemple avec le produit vectoriel).</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre orthogonalité de vecteurs et orthogonalité de droites.</div>
        <div class="erreur-box">⚠️ Un plan a une infinité de vecteurs normaux, mais tous sont colinéaires entre eux.</div>
        <div class="erreur-box">⚠️ La distance d'un point à un plan est toujours positive ou nulle (si le point appartient au plan).</div>
        <div class="erreur-box">⚠️ Ne pas oublier la valeur absolue dans la formule de la distance.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Un vecteur normal au plan d'équation $2x - y + 3z + 4 = 0$ est :",
                options: ["$(2,-1,3)$", "$(2,1,3)$", "$(-2,1,-3)$", "$(1,2,3)$"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Deux plans sont perpendiculaires si et seulement si :",
                options: ["leurs vecteurs normaux sont colinéaires", "leurs vecteurs normaux sont orthogonaux", "leurs vecteurs directeurs sont orthogonaux", "ils ont un point commun"],
                correct: 1
            },
            {
                type: "vf",
                text: "Si $\\vec{n}$ est normal à un plan $\\mathcal{P}$, alors tout vecteur colinéaire à $\\vec{n}$ est aussi normal à $\\mathcal{P}$.",
                correct: 1 // Vrai
            },
            {
                type: "vf",
                text: "La distance du point $A(1,0,0)$ au plan $x+y+z=0$ est $\\frac{1}{\\sqrt{3}}$.",
                correct: 1 // Vrai, |1+0+0|/√3 = 1/√3
            },
            {
                type: "vf",
                text: "Deux droites orthogonales sont nécessairement sécantes.",
                correct: 0 // Faux, elles peuvent être non coplanaires (orthogonales mais non sécantes)
            }
        ]
    },
    exercices: [
        {
            numero: 1,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube d'arête 1.</p>
                <p>1. Montrer que $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$.</p>
                <p>2. Montrer que $\\overrightarrow{AC} \\cdot \\overrightarrow{AE} = 0$.</p>
                <p>3. En déduire que la droite (AC) est orthogonale à la droite (AE).</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q1",
                    texte: "Montrer que $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$.",
                    solution: "Dans un cube, les arêtes $[AB]$ et $[AD]$ sont perpendiculaires. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$. (On peut aussi utiliser les coordonnées dans le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$ : $\\overrightarrow{AB}(1,0,0)$, $\\overrightarrow{AD}(0,1,0)$, produit scalaire = 0)."
                },
                {
                    id: "ex6_q2",
                    texte: "Montrer que $\\overrightarrow{AC} \\cdot \\overrightarrow{AE} = 0$.",
                    solution: "$\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$ et $\\overrightarrow{AE}$ est orthogonal à $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$. Donc $\\overrightarrow{AC} \\cdot \\overrightarrow{AE} = (\\overrightarrow{AB} + \\overrightarrow{AD}) \\cdot \\overrightarrow{AE} = \\overrightarrow{AB}\\cdot\\overrightarrow{AE} + \\overrightarrow{AD}\\cdot\\overrightarrow{AE} = 0 + 0 = 0$."
                },
                {
                    id: "ex6_q3",
                    texte: "En déduire que (AC) est orthogonale à (AE).",
                    solution: "Comme $\\overrightarrow{AC} \\cdot \\overrightarrow{AE} = 0$, les vecteurs directeurs de (AC) et (AE) sont orthogonaux. Donc les droites (AC) et (AE) sont orthogonales."
                }
            ],
            astuces_exo: "💡 Utiliser le repère orthonormé du cube pour simplifier les calculs.",
            erreurs_exo: "⚠️ Ne pas confondre orthogonalité de droites et perpendicularité (les droites doivent être sécantes pour être perpendiculaires)."
        },
        {
            numero: 2,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre régulier d'arête $a$.</p>
                <p>Montrer que deux arêtes opposées du tétraèdre sont orthogonales.</p>
                <p>(D'après l'Activité 3 page 17)</p>
                <canvas class="figure-canvas" data-figure="tetraedre_regulier" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q4",
                    texte: "Montrer que $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$.",
                    solution: "Dans un tétraèdre régulier, toutes les arêtes ont la même longueur $a$ et les angles entre arêtes issues d'un même sommet sont de 60°. $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{CA} + \\overrightarrow{AD}) = \\overrightarrow{AB}\\cdot\\overrightarrow{CA} + \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = -\\overrightarrow{AB}\\cdot\\overrightarrow{AC} + \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = -a^2\\cos60° + a^2\\cos60° = 0$."
                },
                {
                    id: "ex6_q5",
                    texte: "Conclure sur l'orthogonalité des arêtes opposées.",
                    solution: "On vient de montrer que $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$. Donc les arêtes (AB) et (CD) sont orthogonales. Par symétrie, toutes les paires d'arêtes opposées sont orthogonales."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés du tétraèdre régulier : toutes les arêtes ont même longueur et les angles entre arêtes issues d'un même sommet sont de 60°.",
            erreurs_exo: "⚠️ Attention aux signes dans les produits scalaires."
        },
        {
            numero: 3,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre tel que les triangles $ABC$, $ABD$ et $ACD$ sont rectangles en $A$.</p>
                <p>On suppose $AB=AC=AD=1$.</p>
                <p>1. Donner une équation du plan (ABC).</p>
                <p>2. Montrer que le vecteur $\\overrightarrow{AD}$ est normal au plan (ABC).</p>
                <p>3. En déduire la distance du point D au plan (ABC).</p>
                <canvas class="figure-canvas" data-figure="tetraedre_trirectangle" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q6",
                    texte: "Donner une équation du plan (ABC) dans le repère $(A,\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.",
                    solution: "Dans ce repère, A(0,0,0), B(1,0,0), C(0,1,0), D(0,0,1). Le plan (ABC) est le plan $z=0$, donc son équation est $z=0$."
                },
                {
                    id: "ex6_q7",
                    texte: "Montrer que $\\overrightarrow{AD}$ est normal au plan (ABC).",
                    solution: "$\\overrightarrow{AD}(0,0,1)$ est orthogonal à $\\overrightarrow{AB}(1,0,0)$ et $\\overrightarrow{AC}(0,1,0)$ car les produits scalaires sont nuls. Donc $\\overrightarrow{AD}$ est normal au plan (ABC)."
                },
                {
                    id: "ex6_q8",
                    texte: "En déduire la distance de D au plan (ABC).",
                    solution: "La distance de D au plan (ABC) est la longueur $AD = 1$ car $\\overrightarrow{AD}$ est normal au plan et D est sur la perpendiculaire. Plus formellement, $d(D,(ABC)) = |z_D| = 1$."
                }
            ],
            astuces_exo: "💡 Utiliser le repère orthonormé pour simplifier les calculs.",
            erreurs_exo: "⚠️ Bien identifier le plan et son équation."
        },
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère le plan $\\mathcal{P}: 2x - y + z + 2 = 0$ et le point $A(1,0,-1)$.</p>
                <p>1. Déterminer un vecteur normal à $\\mathcal{P}$.</p>
                <p>2. Déterminer la distance du point A au plan $\\mathcal{P}$.</p>
                <p>3. Déterminer une équation du plan passant par A et parallèle à $\\mathcal{P}$.</p>
                <p>(D'après un exercice classique)</p>
            `,
            questions: [
                {
                    id: "ex6_q9",
                    texte: "Déterminer un vecteur normal à $\\mathcal{P}$.",
                    solution: "D'après l'équation $2x - y + z + 2 = 0$, un vecteur normal est $\\vec{n}(2,-1,1)$."
                },
                {
                    id: "ex6_q10",
                    texte: "Calculer la distance de A au plan $\\mathcal{P}$.",
                    solution: "$d(A,\\mathcal{P}) = \\dfrac{|2\\times1 - 0 + (-1) + 2|}{\\sqrt{2^2+(-1)^2+1^2}} = \\dfrac{|2 - 0 - 1 + 2|}{\\sqrt{6}} = \\dfrac{3}{\\sqrt{6}} = \\dfrac{\\sqrt{6}}{2}$."
                },
                {
                    id: "ex6_q11",
                    texte: "Déterminer une équation du plan passant par A et parallèle à $\\mathcal{P}$.",
                    solution: "Un plan parallèle à $\\mathcal{P}$ a un vecteur normal colinéaire à $\\vec{n}(2,-1,1)$. Soit $\\mathcal{Q}: 2x - y + z + d = 0$. Comme A appartient à $\\mathcal{Q}$ : $2\\times1 - 0 + (-1) + d = 0 \\Rightarrow 2 - 1 + d = 0 \\Rightarrow d = -1$. Donc $\\mathcal{Q}: 2x - y + z - 1 = 0$."
                }
            ],
            astuces_exo: "💡 Un plan parallèle a les mêmes coefficients a,b,c (même vecteur normal).",
            erreurs_exo: "⚠️ Ne pas oublier de simplifier la distance."
        },
        {
            numero: 5,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube d'arête 1. On note $I$ le milieu de l'arête $[BF]$.</p>
                <p>1. Déterminer une équation cartésienne du plan (HAD).</p>
                <p>2. Déterminer une équation du plan passant par I et perpendiculaire à (AG).</p>
                <p>(D'après l'Activité 3 page 29)</p>
                <canvas class="figure-canvas" data-figure="cube_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q12",
                    texte: "Déterminer une équation cartésienne du plan (HAD).",
                    solution: "Dans le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$, on a A(0,0,0), D(0,1,0), H(0,1,1). Le plan (HAD) est le plan $x=0$ (car tous les points ont x=0). Donc l'équation est $x=0$."
                },
                {
                    id: "ex6_q13",
                    texte: "Déterminer les coordonnées du point I.",
                    solution: "B(1,0,0), F(1,0,1). I milieu de [BF] : $I(1,0,\\frac{1}{2})$."
                },
                {
                    id: "ex6_q14",
                    texte: "Déterminer une équation du plan passant par I et perpendiculaire à (AG).",
                    solution: "Le vecteur $\\overrightarrow{AG} = (1,1,1)$ est normal au plan cherché. Donc le plan a pour équation $x+y+z+d=0$. Comme I appartient au plan : $1+0+\\frac{1}{2}+d=0 \\Rightarrow d=-\\frac{3}{2}$. Donc l'équation est $x+y+z-\\frac{3}{2}=0$, ou $2x+2y+2z-3=0$."
                }
            ],
            astuces_exo: "💡 Un plan perpendiculaire à une droite a pour vecteur normal le vecteur directeur de la droite.",
            erreurs_exo: "⚠️ Bien identifier les coordonnées dans le repère choisi."
        },
        // ============================================================
        // EXERCICE 6 (PDF n°3b) – Tétraèdre régulier : position relative
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>On considère un tétraèdre régulier $ABCD$.</p>
                <p><strong>1. a.</strong> Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.</p>
                <p><strong>b.</strong> Quelle est la position relative des droites (AB) et (CD) ?</p>
                <p><strong>2.</strong> On désigne par $E$ et $F$ les milieux respectifs des segments $[AD]$ et $[BC]$.</p>
                <p><strong>a.</strong> Montrer que $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$.</p>
                <p><strong>b.</strong> Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{BC}$ et en déduire la position relative des droites (EF) et (BC).</p>
                <canvas class="figure-canvas" data-figure="tetraedre_regulier" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q15",
                    texte: "Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.",
                    solution: "Soit $a$ la longueur d'une arête. $\\overrightarrow{CD} = \\overrightarrow{CA} + \\overrightarrow{AD} = -\\overrightarrow{AC} + \\overrightarrow{AD}$. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = -\\overrightarrow{AB}\\cdot\\overrightarrow{AC} + \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = -a^2\\cos60° + a^2\\cos60° = 0$."
                },
                {
                    id: "ex6_q16",
                    texte: "Position relative de (AB) et (CD).",
                    solution: "Comme le produit scalaire des vecteurs directeurs est nul, les droites (AB) et (CD) sont orthogonales."
                },
                {
                    id: "ex6_q17",
                    texte: "Montrer que $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$.",
                    solution: "$\\overrightarrow{EF} = \\overrightarrow{EA} + \\overrightarrow{AB} + \\overrightarrow{BF} = \\frac{1}{2}\\overrightarrow{DA} + \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{BC}$. De même, $\\overrightarrow{EF} = \\overrightarrow{ED} + \\overrightarrow{DC} + \\overrightarrow{CF} = \\frac{1}{2}\\overrightarrow{AD} + \\overrightarrow{DC} + \\frac{1}{2}\\overrightarrow{CB}$. En ajoutant les deux égalités et en simplifiant, on obtient $\\overrightarrow{EF} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC})$."
                },
                {
                    id: "ex6_q18",
                    texte: "Calculer $\\overrightarrow{EF} \\cdot \\overrightarrow{BC}$.",
                    solution: "$\\overrightarrow{EF} \\cdot \\overrightarrow{BC} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{DC}) \\cdot \\overrightarrow{BC} = \\frac{1}{2}(\\overrightarrow{AB}\\cdot\\overrightarrow{BC} + \\overrightarrow{DC}\\cdot\\overrightarrow{BC})$. Or $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = -\\overrightarrow{BA}\\cdot\\overrightarrow{BC} = -a^2\\cos60° = -\\frac{a^2}{2}$ et $\\overrightarrow{DC}\\cdot\\overrightarrow{BC} = a^2\\cos60° = \\frac{a^2}{2}$. Donc la somme est nulle, d'où $\\overrightarrow{EF} \\cdot \\overrightarrow{BC} = 0$. Ainsi (EF) est orthogonale à (BC)."
                }
            ],
            astuces_exo: "💡 Utiliser les angles de 60° du tétraèdre régulier.",
            erreurs_exo: "⚠️ Attention aux signes dans les produits scalaires."
        },
        // ============================================================
        // EXERCICE 7 (PDF n°5) – Condition d'orthogonalité de deux droites
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>On considère quatre points $A, B, C, D$ de l'espace.</p>
                <p>Montrer que $CA^2 - CB^2 = DA^2 - DB^2$ est une condition nécessaire et suffisante pour que (AB) et (CD) soient orthogonales.</p>
                <p>(D'après l'Activité 5 page 17)</p>
            `,
            questions: [
                {
                    id: "ex6_q19",
                    texte: "Montrer que l'égalité équivaut à $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$.",
                    solution: "$CA^2 - CB^2 = (\\overrightarrow{CA} - \\overrightarrow{CB}) \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB}) = \\overrightarrow{BA} \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB})$. De même, $DA^2 - DB^2 = \\overrightarrow{BA} \\cdot (\\overrightarrow{DA} + \\overrightarrow{DB})$. L'égalité donne $\\overrightarrow{BA} \\cdot (\\overrightarrow{CA} + \\overrightarrow{CB} - \\overrightarrow{DA} - \\overrightarrow{DB}) = 0$. Or $\\overrightarrow{CA} - \\overrightarrow{DA} = \\overrightarrow{CD}$ et $\\overrightarrow{CB} - \\overrightarrow{DB} = \\overrightarrow{CD}$. Donc $\\overrightarrow{BA} \\cdot (2\\overrightarrow{CD}) = 0 \\iff \\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$. Ainsi (AB)⊥(CD). Réciproquement, si (AB)⊥(CD), alors les égalités sont vérifiées."
                }
            ],
            astuces_exo: "💡 Utiliser l'identité $\\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = (\\vec{u}-\\vec{v})\\cdot(\\vec{u}+\\vec{v})$.",
            erreurs_exo: "⚠️ Vérifier les relations vectorielles."
        },
        // ============================================================
        // EXERCICE 8 (PDF n°13) – Plans perpendiculaires et droite perpendiculaire
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>L'espace est rapporté à un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère les plans $\\mathcal{P}: x - y + z - 2 = 0$ et $\\mathcal{P}': 2x + y - z + 2 = 0$.</p>
                <p><strong>1.</strong> Montrer que $\\mathcal{P}$ et $\\mathcal{P}'$ sont perpendiculaires.</p>
                <p><strong>2.</strong> Soit le point $A(1,1,1)$. Déterminer une représentation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.</p>
                <canvas class="figure-canvas" data-figure="plans_perpendiculaires" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q20",
                    texte: "Montrer que $\\mathcal{P}$ et $\\mathcal{P}'$ sont perpendiculaires.",
                    solution: "Un vecteur normal à $\\mathcal{P}$ est $\\vec{n}_1(1,-1,1)$. Un vecteur normal à $\\mathcal{P}'$ est $\\vec{n}_2(2,1,-1)$. Leur produit scalaire est $1\\times2 + (-1)\\times1 + 1\\times(-1) = 2 - 1 - 1 = 0$. Donc les normales sont orthogonales, donc les plans sont perpendiculaires."
                },
                {
                    id: "ex6_q21",
                    texte: "Donner une représentation paramétrique de la droite passant par A et perpendiculaire à $\\mathcal{P}$.",
                    solution: "Un vecteur directeur de cette droite est $\\vec{n}_1(1,-1,1)$ (normal à $\\mathcal{P}$). La droite passant par $A(1,1,1)$ a pour paramétrique : $\\begin{cases} x = 1 + t \\\\ y = 1 - t \\\\ z = 1 + t \\end{cases}, t\\in\\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Pour une droite perpendiculaire à un plan, on prend comme vecteur directeur un vecteur normal au plan.",
            erreurs_exo: "⚠️ Vérifier que les produits scalaires sont bien nuls."
        },
        // ============================================================
        // EXERCICE 9 (PDF n°14) – Droite perpendiculaire, intersection, distance
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $\\mathcal{P}$ le plan d'équation $x - 2y + z + 7 = 0$ et $A$ le point de coordonnées $(2,1,-1)$.</p>
                <p><strong>1.</strong> Donner une représentation paramétrique de la droite $\\mathcal{D}$ passant par $A$ et perpendiculaire au plan $\\mathcal{P}$.</p>
                <p><strong>2.</strong> Calculer les coordonnées du point $H$, intersection de $\\mathcal{D}$ et $\\mathcal{P}$.</p>
                <p><strong>3.</strong> En déduire la distance $AH$.</p>
                <canvas class="figure-canvas" data-figure="distance_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q22",
                    texte: "Donner une représentation paramétrique de $\\mathcal{D}$.",
                    solution: "Un vecteur normal à $\\mathcal{P}$ est $\\vec{n}(1,-2,1)$. La droite $\\mathcal{D}$ passant par $A(2,1,-1)$ a pour paramétrique : $\\begin{cases} x = 2 + t \\\\ y = 1 - 2t \\\\ z = -1 + t \\end{cases}, t\\in\\mathbb{R}$."
                },
                {
                    id: "ex6_q23",
                    texte: "Calculer les coordonnées de $H = \\mathcal{D} \\cap \\mathcal{P}$.",
                    solution: "On remplace dans l'équation de $\\mathcal{P}$ : $(2+t) - 2(1-2t) + (-1+t) + 7 = 0 \\Rightarrow 2+t -2 +4t -1 + t +7 = 0 \\Rightarrow 6t + 6 = 0 \\Rightarrow t = -1$. Alors $H(1,3,-2)$."
                },
                {
                    id: "ex6_q24",
                    texte: "En déduire la distance $AH$.",
                    solution: "$AH = \\sqrt{(1-2)^2 + (3-1)^2 + (-2+1)^2} = \\sqrt{1+4+1} = \\sqrt{6}$."
                }
            ],
            astuces_exo: "💡 La distance d'un point à un plan est la longueur du segment entre le point et son projeté orthogonal.",
            erreurs_exo: "⚠️ Vérifier les coordonnées du point H."
        },
        // ============================================================
        // EXERCICE 10 (PDF n°15) – Équation de plan avec vecteur normal
        // ============================================================
        {
            numero: 10,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère les points $A(0,2,1)$, $B(3,0,2)$ et $C(1,2,0)$.</p>
                <p><strong>1.</strong> Placer les points $A, B, C$.</p>
                <p><strong>2.</strong> Donner une équation cartésienne du plan $(ABC)$.</p>
                <p><strong>3.</strong> Donner une équation cartésienne du plan $\\mathcal{P}$ passant par $C$ et de vecteur normal $\\overrightarrow{AB}$.</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q25",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (3,-2,1)$, $\\overrightarrow{AC} = C - A = (1,0,-1)$."
                },
                {
                    id: "ex6_q26",
                    texte: "Donner une équation cartésienne du plan (ABC).",
                    solution: "Un vecteur normal est $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} (-2)\\times(-1) - 1\\times0 \\\\ 1\\times1 - 3\\times(-1) \\\\ 3\\times0 - (-2)\\times1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 2 \\end{pmatrix}$ (on peut prendre $(1,2,1)$). L'équation est $1(x-0) + 2(y-2) + 1(z-1) = 0 \\Rightarrow x + 2y + z - 5 = 0$."
                },
                {
                    id: "ex6_q27",
                    texte: "Donner une équation du plan $\\mathcal{P}$ passant par $C$ et de vecteur normal $\\overrightarrow{AB}$.",
                    solution: "Le plan a pour normale $\\vec{n} = \\overrightarrow{AB} = (3,-2,1)$ et passe par $C(1,2,0)$. Son équation : $3(x-1) - 2(y-2) + 1(z-0) = 0 \\Rightarrow 3x - 3 - 2y + 4 + z = 0 \\Rightarrow 3x - 2y + z + 1 = 0$."
                }
            ],
            astuces_exo: "💡 Pour trouver l'équation d'un plan avec un point et un vecteur normal, on utilise $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.",
            erreurs_exo: "⚠️ Vérifier les calculs de produit vectoriel."
        },
        // ============================================================
        // EXERCICE 11 (PDF n°16) – Cube : équations de plans, vecteur normal
        // ============================================================
        {
            numero: 11,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube de côté 1. On note $I$ et $J$ les milieux respectifs de $[AB]$ et $[BC]$ et on munit l'espace du repère orthonormé $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p><strong>1.</strong> Sans justifications, donner une équation cartésienne de chacun des plans $(ABC)$, $(ABE)$ et $(ADE)$.</p>
                <p><strong>2. a.</strong> Donner une équation cartésienne du plan $(CFH)$.</p>
                <p><strong>b.</strong> En déduire que $\\overrightarrow{AG}$ est un vecteur normal au plan $(CFH)$.</p>
                <p><strong>3. a.</strong> Donner une équation cartésienne du plan $(IJG)$.</p>
                <p><strong>b.</strong> Le point $E$ appartient-il au plan $(IJG)$ ?</p>
                <canvas class="figure-canvas" data-figure="cube_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q28",
                    texte: "Plans (ABC), (ABE), (ADE).",
                    solution: "$(ABC) : z=0$ (plan de la face inférieure). $(ABE) : y=0$ (plan de la face latérale). $(ADE) : x=0$ (plan de la face latérale)."
                },
                {
                    id: "ex6_q29",
                    texte: "Donner une équation cartésienne de (CFH).",
                    solution: "Coordonnées : C(1,1,0), F(1,0,1), H(0,1,1). On cherche $ax+by+cz+d=0$. En résolvant, on trouve $x+y+z-2=0$ (on peut vérifier avec les trois points)."
                },
                {
                    id: "ex6_q30",
                    texte: "En déduire que $\\overrightarrow{AG}$ est normal à (CFH).",
                    solution: "$\\overrightarrow{AG} = (1,1,1)$ est le vecteur normal de l'équation $x+y+z-2=0$. Donc $\\overrightarrow{AG}$ est normal au plan (CFH)."
                },
                {
                    id: "ex6_q31",
                    texte: "Donner une équation de (IJG).",
                    solution: "I milieu de AB : $I(\\frac{1}{2},0,0)$. J milieu de BC : $J(1,\\frac{1}{2},0)$. G(1,1,1). On cherche $ax+by+cz+d=0$. On trouve $x-y+\\frac{1}{2}z - \\frac{1}{2}=0$ (après calcul). Par exemple $2x-2y+z-1=0$."
                },
                {
                    id: "ex6_q32",
                    texte: "Le point E appartient-il à (IJG) ?",
                    solution: "E(0,0,1). On remplace dans l'équation : $2\\times0 - 2\\times0 + 1 - 1 = 0$. Donc E appartient au plan (IJG)."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées dans le repère pour déterminer les équations.",
            erreurs_exo: "⚠️ Vérifier les calculs des coefficients."
        },
        // ============================================================
        // EXERCICE 12 (PDF n°17) – Droite/Plan : plan perpendiculaire, intersection, distance
        // ============================================================
        {
            numero: 12,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $\\mathcal{D}$ la droite passant par le point $A(3,-1,2)$ et de vecteur directeur $\\vec{u} = \\begin{pmatrix}-2\\\\1\\\\1\\end{pmatrix}$, et soit $B$ le point de coordonnées $(3,1,-2)$.</p>
                <p><strong>1.</strong> Donner une équation cartésienne du plan $\\mathcal{P}$ contenant $B$ et perpendiculaire à $\\mathcal{D}$.</p>
                <p><strong>2. a.</strong> Calculer les coordonnées du point $H$, intersection de $\\mathcal{D}$ et $\\mathcal{P}$.</p>
                <p><strong>b.</strong> En déduire la distance $BH$.</p>
                <canvas class="figure-canvas" data-figure="distance_droite_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q33",
                    texte: "Donner une équation du plan $\\mathcal{P}$ perpendiculaire à $\\mathcal{D}$ passant par B.",
                    solution: "Le plan perpendiculaire à $\\mathcal{D}$ a pour vecteur normal $\\vec{u}(-2,1,1)$. Il passe par $B(3,1,-2)$. Son équation : $-2(x-3) + 1(y-1) + 1(z+2) = 0 \\Rightarrow -2x + 6 + y - 1 + z + 2 = 0 \\Rightarrow -2x + y + z + 7 = 0$."
                },
                {
                    id: "ex6_q34",
                    texte: "Calculer les coordonnées de $H = \\mathcal{D} \\cap \\mathcal{P}$.",
                    solution: "$\\mathcal{D}$ : $\\begin{cases} x=3-2t \\\\ y=-1+t \\\\ z=2+t \\end{cases}$. On remplace dans $\\mathcal{P}$ : $-2(3-2t) + (-1+t) + (2+t) + 7 = 0 \\Rightarrow -6+4t -1+t+2+t+7=0 \\Rightarrow 6t+2=0 \\Rightarrow t = -\\frac{1}{3}$. Alors $H = (3-2(-\\frac{1}{3}), -1-\\frac{1}{3}, 2-\\frac{1}{3}) = (\\frac{11}{3}, -\\frac{4}{3}, \\frac{5}{3})$."
                },
                {
                    id: "ex6_q35",
                    texte: "En déduire la distance $BH$.",
                    solution: "$BH = \\|H - B\\| = \\sqrt{(\\frac{11}{3}-3)^2 + (-\\frac{4}{3}-1)^2 + (\\frac{5}{3}+2)^2} = \\sqrt{(\\frac{2}{3})^2 + (-\\frac{7}{3})^2 + (\\frac{11}{3})^2} = \\frac{1}{3}\\sqrt{4+49+121} = \\frac{\\sqrt{174}}{3}$."
                }
            ],
            astuces_exo: "💡 La distance d'un point à une droite est la longueur du segment perpendiculaire.",
            erreurs_exo: "⚠️ Vérifier les calculs de fractions."
        },
        // ============================================================
        // EXERCICE 13 (PDF n°18) – Triangle rectangle, plan perpendiculaire, quadrilatère
        // ============================================================
        {
            numero: 13,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On donne les points $A(2,0,1)$, $B(-1,1,2)$, $C(3,2,2)$ et l'on désigne par $\\mathcal{P}$ le plan perpendiculaire à (AB) passant par $B$.</p>
                <p><strong>1.</strong> Montrer que le triangle $ABC$ est rectangle en $A$.</p>
                <p><strong>2. a.</strong> Donner une représentation paramétrique de la droite $\\mathcal{D}$ passant par $C$ et parallèle à (AB).</p>
                <p><strong>b.</strong> Calculer les coordonnées du point $H$ intersection de $\\mathcal{D}$ et $\\mathcal{P}$.</p>
                <p><strong>c.</strong> Quelle est la nature du quadrilatère $ABHC$ ?</p>
                           <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q36",
                    texte: "Montrer que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont orthogonaux.",
                    solution: "$\\overrightarrow{AB} = B - A = (-3,1,1)$, $\\overrightarrow{AC} = C - A = (1,2,1)$. $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = -3\\times1 + 1\\times2 + 1\\times1 = -3+2+1=0$. Donc (AB) ⊥ (AC), triangle rectangle en A."
                },
                {
                    id: "ex6_q37",
                    texte: "Donner une représentation paramétrique de $\\mathcal{D}$ (parallèle à (AB) passant par C).",
                    solution: "$\\mathcal{D}$ a pour vecteur directeur $\\overrightarrow{AB} = (-3,1,1)$ et passe par C(3,2,2). Donc $\\begin{cases} x = 3 - 3t \\\\ y = 2 + t \\\\ z = 2 + t \\end{cases}, t\\in\\mathbb{R}$."
                },
                {
                    id: "ex6_q38",
                    texte: "Calculer $H = \\mathcal{D} \\cap \\mathcal{P}$.",
                    solution: "$\\mathcal{P}$ est le plan perpendiculaire à (AB) passant par B, donc il a pour normale $\\vec{n} = \\overrightarrow{AB} = (-3,1,1)$ et passe par B(-1,1,2). Son équation : $-3(x+1) + (y-1) + (z-2) = 0 \\Rightarrow -3x -3 + y -1 + z -2 = 0 \\Rightarrow -3x + y + z -6 = 0$. On remplace les coordonnées de $\\mathcal{D}$ : $-3(3-3t) + (2+t) + (2+t) - 6 = 0 \\Rightarrow -9+9t+4+2t-6=0 \\Rightarrow 11t -11 = 0 \\Rightarrow t=1$. Alors $H(0,3,3)$."
                },
                {
                    id: "ex6_q39",
                    texte: "Quelle est la nature du quadrilatère $ABHC$ ?",
                    solution: "ABHC est un quadrilatère dont les côtés opposés AB et CH sont parallèles (car CH est sur $\\mathcal{D}$ parallèle à AB). De plus, $\\mathcal{P}$ est perpendiculaire à AB, donc $AB \\perp BH$ et $AB \\perp CH$ (car CH // AB). Donc ABHC est un rectangle (en fait un carré ? On peut vérifier les longueurs : AB = √11, BH = ? En fait, c'est un rectangle, pas nécessairement carré)."
                }
            ],
            astuces_exo: "💡 Un quadrilatère avec des côtés opposés parallèles et un angle droit est un rectangle.",
            erreurs_exo: "⚠️ Vérifier que les côtés sont bien perpendiculaires."
        }
    ]
});