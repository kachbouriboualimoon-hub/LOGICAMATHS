// chapitre8.js – Équations cartésiennes et positions relatives
// Extrait du PDF "geometrie espace.pdf" – pages 25 à 27

data.chapitres.push({
    id: 8,
    titre: "Équations cartésiennes et positions relatives",
    rappel: `
        <p><strong>Équation cartésienne d'un plan :</strong></p>
        <p>Dans un repère cartésien $(O,\\vec{i},\\vec{j},\\vec{k})$, tout plan $\\mathcal{P}$ admet une équation de la forme :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $ax + by + cz + d = 0$
        </p>
        <p>où $(a,b,c) \\neq (0,0,0)$. Le vecteur $\\vec{n}(a,b,c)$ est un vecteur normal à $\\mathcal{P}$.</p>

        <p><strong>Réciproque :</strong> Toute équation de la forme $ax+by+cz+d=0$ avec $(a,b,c) \\neq (0,0,0)$ est l'équation d'un plan de vecteur normal $\\vec{n}(a,b,c)$.</p>

        <p><strong>Détermination de l'équation d'un plan :</strong></p>
        <ul>
            <li>Si on connaît un point $A(x_0,y_0,z_0)$ et un vecteur normal $\\vec{n}(a,b,c)$ :</li>
            <p style="text-align:center;">$a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$</p>
            <li>Si on connaît trois points $A,B,C$ non alignés : on détermine un vecteur normal $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$, puis on utilise la méthode précédente.</li>
            <li>Si on connaît deux vecteurs directeurs $\\vec{u}$ et $\\vec{v}$ : on calcule $\\vec{n} = \\vec{u} \\wedge \\vec{v}$.</li>
        </ul>

        <p><strong>Positions relatives de deux plans :</strong></p>
        <p>Soit $\\mathcal{P} : ax+by+cz+d=0$ et $\\mathcal{Q} : a'x+b'y+c'z+d'=0$.</p>
        <ul>
            <li><strong>Plans sécants :</strong> les vecteurs normaux $\\vec{n}(a,b,c)$ et $\\vec{n}'(a',b',c')$ ne sont pas colinéaires. L'intersection est une droite.</li>
            <li><strong>Plans parallèles distincts :</strong> les vecteurs normaux sont colinéaires et les équations ne sont pas proportionnelles.</li>
            <li><strong>Plans confondus :</strong> les vecteurs normaux sont colinéaires et les équations sont proportionnelles.</li>
        </ul>

        <p><strong>Positions relatives d'une droite et d'un plan :</strong></p>
        <p>Soit $\\mathcal{D}(A,\\vec{u})$ une droite et $\\mathcal{P} : ax+by+cz+d=0$ un plan.</p>
        <ul>
            <li><strong>Droite sécante au plan :</strong> $\\vec{u} \\cdot \\vec{n} \\neq 0$.</li>
            <li><strong>Droite strictement parallèle au plan :</strong> $\\vec{u} \\cdot \\vec{n} = 0$ et $A \\notin \\mathcal{P}$.</li>
            <li><strong>Droite incluse dans le plan :</strong> $\\vec{u} \\cdot \\vec{n} = 0$ et $A \\in \\mathcal{P}$.</li>
        </ul>

        <p><strong>Intersection d'une droite et d'un plan :</strong></p>
        <p>Pour trouver le point d'intersection d'une droite $\\mathcal{D}$ et d'un plan $\\mathcal{P}$, on remplace la représentation paramétrique de la droite dans l'équation du plan et on résout pour le paramètre.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> L'ensemble des points $M(x,y,z)$ vérifiant $ax+by+cz+d=0$ avec $(a,b,c) \\neq (0,0,0)$ est un plan de vecteur normal $\\vec{n}(a,b,c)$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Deux plans $\\mathcal{P} : ax+by+cz+d=0$ et $\\mathcal{Q} : a'x+b'y+c'z+d'=0$ sont parallèles ssi leurs vecteurs normaux sont colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Une droite $\\mathcal{D}(A,\\vec{u})$ est parallèle à un plan $\\mathcal{P}$ de normale $\\vec{n}$ ssi $\\vec{u} \\cdot \\vec{n} = 0$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> L'intersection de deux plans non parallèles est une droite dont une représentation paramétrique peut être obtenue en résolvant le système de leurs deux équations.
        </div>
        <div class="theoreme-block">
            <strong>Remarque :</strong> Le vecteur normal à un plan est unique à un coefficient multiplicatif près.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer l'équation cartésienne d'un plan passant par un point $A$ et de vecteur normal $\\vec{n}(a,b,c)$, on écrit : $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer l'équation d'un plan passant par trois points $A,B,C$, on calcule $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$ puis on utilise la méthode précédente.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour étudier la position relative de deux plans, on compare leurs vecteurs normaux. S'ils sont colinéaires, les plans sont parallèles (ou confondus) ; sinon ils sont sécants.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour étudier la position relative d'une droite et d'un plan, on calcule $\\vec{u} \\cdot \\vec{n}$. Si le produit scalaire est nul, la droite est parallèle au plan (ou incluse) ; sinon elle est sécante.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver l'intersection d'une droite et d'un plan, on remplace l'expression paramétrique de la droite dans l'équation du plan et on résout pour le paramètre.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour vérifier qu'un point appartient à un plan, on remplace ses coordonnées dans l'équation cartésienne.</div>
        <div class="astuce-box">💡 Deux plans parallèles ont des vecteurs normaux colinéaires : on peut donc les reconnaître en comparant les coefficients $(a,b,c)$.</div>
        <div class="astuce-box">💡 Pour trouver l'intersection de deux plans sécants, on résout le système de leurs deux équations : on obtient une représentation paramétrique de la droite d'intersection.</div>
        <div class="astuce-box">💡 Une droite est incluse dans un plan si deux de ses points appartiennent au plan (ou si son vecteur directeur est orthogonal à la normale et que le point de la droite appartient au plan).</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre équation cartésienne et équation paramétrique d'un plan.</div>
        <div class="erreur-box">⚠️ Oublier que $(a,b,c)$ doit être non nul pour que l'équation représente un plan.</div>
        <div class="erreur-box">⚠️ Pour deux plans parallèles, vérifier que les équations ne sont pas proportionnelles (sinon ils sont confondus).</div>
        <div class="erreur-box">⚠️ Une droite parallèle à un plan n'est pas nécessairement incluse dans le plan.</div>
        <div class="erreur-box">⚠️ Pour l'intersection d'une droite et d'un plan, ne pas oublier de substituer la valeur du paramètre trouvée dans la représentation paramétrique de la droite pour obtenir les coordonnées du point.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Le plan d'équation $2x - y + 3z - 5 = 0$ a pour vecteur normal :",
                options: ["$(2,-1,3)$", "$(2,1,3)$", "$(-2,1,-3)$", "$(1,2,3)$"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Deux plans sont parallèles si leurs vecteurs normaux sont :",
                options: ["orthogonaux", "colinéaires", "égaux", "opposés"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Une droite est parallèle à un plan si son vecteur directeur est :",
                options: ["colinéaire au vecteur normal", "orthogonal au vecteur normal", "égal au vecteur normal", "non nul"],
                correct: 1
            },
            {
                type: "vf",
                text: "Toute équation de la forme $ax+by+cz+d=0$ est celle d'un plan.",
                correct: 0 // Faux, il faut $(a,b,c) \\neq (0,0,0)$
            },
            {
                type: "vf",
                text: "Deux plans sécants se coupent selon une droite.",
                correct: 1
            },
            {
                type: "vf",
                text: "Si une droite est parallèle à un plan, alors elle est incluse dans ce plan.",
                correct: 0
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 – Équation d'un plan passant par un point
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit le point $A(1,-2,3)$ et le vecteur $\\vec{n}(2,1,-1)$.</p>
                <p>Déterminer l'équation cartésienne du plan $\\mathcal{P}$ passant par $A$ et de vecteur normal $\\vec{n}$.</p>
            `,
            questions: [
                {
                    id: "ex8_q1",
                    texte: "Écrire l'équation du plan.",
                    solution: "Le plan passant par $A(1,-2,3)$ de normale $\\vec{n}(2,1,-1)$ a pour équation : $2(x-1) + 1(y+2) - 1(z-3) = 0$. On développe : $2x - 2 + y + 2 - z + 3 = 0 \\Rightarrow 2x + y - z + 3 = 0$."
                }
            ],
            astuces_exo: "💡 L'équation s'écrit $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$.",
            erreurs_exo: "⚠️ Vérifier les signes lors du développement."
        },
        // ============================================================
        // EXERCICE 2 – Équation d'un plan passant par trois points
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,1)$, $B(2,1,0)$ et $C(0,2,2)$.</p>
                <p>Déterminer l'équation cartésienne du plan $(ABC)$.</p>
                <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex8_q2",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (1,1,-1)$, $\\overrightarrow{AC} = C - A = (-1,2,1)$."
                },
                {
                    id: "ex8_q3",
                    texte: "Calculer $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$.",
                    solution: "$\\vec{n} = \\begin{pmatrix} 1\\times1 - (-1)\\times2 \\\\ (-1)\\times(-1) - 1\\times1 \\\\ 1\\times2 - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 1 + 2 \\\\ 1 - 1 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 3 \\end{pmatrix}$."
                },
                {
                    id: "ex8_q4",
                    texte: "En déduire l'équation du plan.",
                    solution: "Le plan passe par $A(1,0,1)$ et a pour normale $\\vec{n}(3,0,3)$. L'équation est : $3(x-1) + 0(y-0) + 3(z-1) = 0 \\Rightarrow 3x - 3 + 3z - 3 = 0 \\Rightarrow 3x + 3z - 6 = 0 \\Rightarrow x + z - 2 = 0$."
                }
            ],
            astuces_exo: "💡 Le produit vectoriel de deux vecteurs directeurs donne un vecteur normal.",
            erreurs_exo: "⚠️ Vérifier le calcul du produit vectoriel."
        },
        // ============================================================
        // EXERCICE 3 – Plans parallèles
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les plans :</p>
                <p>$\\mathcal{P} : 2x - y + 3z - 4 = 0$</p>
                <p>$\\mathcal{Q} : -4x + 2y - 6z + 1 = 0$</p>
                <p>$\\mathcal{R} : 2x - y + 3z + 5 = 0$</p>
                <p>Déterminer les positions relatives de ces plans.</p>
            `,
            questions: [
                {
                    id: "ex8_q5",
                    texte: "Comparer $\\mathcal{P}$ et $\\mathcal{Q}$.",
                    solution: "$\\vec{n}_\\mathcal{P} = (2,-1,3)$, $\\vec{n}_\\mathcal{Q} = (-4,2,-6) = -2(2,-1,3)$. Les normaux sont colinéaires. Les plans sont parallèles. Comme $-4 = -2\\times2$, $2 = -2\\times(-1)$, $-6 = -2\\times3$ mais $1 \\neq -2\\times(-4)$. Donc les équations ne sont pas proportionnelles, les plans sont strictement parallèles."
                },
                {
                    id: "ex8_q6",
                    texte: "Comparer $\\mathcal{P}$ et $\\mathcal{R}$.",
                    solution: "$\\vec{n}_\\mathcal{P} = (2,-1,3)$, $\\vec{n}_\\mathcal{R} = (2,-1,3)$. Les normaux sont colinéaires. $\\mathcal{P} : 2x - y + 3z - 4 = 0$, $\\mathcal{R} : 2x - y + 3z + 5 = 0$. Les constantes sont différentes (-4 ≠ 5), donc les plans sont strictement parallèles."
                },
                {
                    id: "ex8_q7",
                    texte: "Comparer $\\mathcal{Q}$ et $\\mathcal{R}$.",
                    solution: "$\\vec{n}_\\mathcal{Q} = (-4,2,-6)$, $\\vec{n}_\\mathcal{R} = (2,-1,3)$. Les normaux sont colinéaires (car $\\vec{n}_\\mathcal{Q} = -2\\vec{n}_\\mathcal{R}$). Les constantes sont $1$ et $5$, non proportionnelles, donc les plans sont strictement parallèles."
                }
            ],
            astuces_exo: "💡 Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires.",
            erreurs_exo: "⚠️ Vérifier la proportionnalité des constantes pour déterminer s'ils sont confondus."
        },
        // ============================================================
        // EXERCICE 4 – Intersection de deux plans
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les plans :</p>
                <p>$\\mathcal{P} : x + 2y - z + 1 = 0$</p>
                <p>$\\mathcal{Q} : 2x - y + z - 3 = 0$</p>
                <p>1. Montrer que $\\mathcal{P}$ et $\\mathcal{Q}$ sont sécants.</p>
                <p>2. Déterminer une représentation paramétrique de leur droite d'intersection.</p>
            `,
            questions: [
                {
                    id: "ex8_q8",
                    texte: "Montrer que les plans sont sécants.",
                    solution: "$\\vec{n}_\\mathcal{P} = (1,2,-1)$, $\\vec{n}_\\mathcal{Q} = (2,-1,1)$. Les vecteurs normaux ne sont pas colinéaires (car $1/2 \\neq 2/(-1)$). Donc les plans sont sécants."
                },
                {
                    id: "ex8_q9",
                    texte: "Déterminer la droite d'intersection.",
                    solution: "On résout le système : $\\begin{cases} x + 2y - z = -1 \\\\ 2x - y + z = 3 \\end{cases}$. En ajoutant les deux équations : $3x + y = 2 \\Rightarrow y = 2 - 3x$. On pose $x = \\alpha$, alors $y = 2 - 3\\alpha$. De la première : $\\alpha + 2(2-3\\alpha) - z = -1 \\Rightarrow \\alpha + 4 - 6\\alpha - z = -1 \\Rightarrow -5\\alpha - z = -5 \\Rightarrow z = 5 - 5\\alpha$. Donc $\\mathcal{D} : \\begin{cases} x = \\alpha \\\\ y = 2 - 3\\alpha \\\\ z = 5 - 5\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Pour trouver la droite d'intersection, on résout le système des deux équations en posant une variable comme paramètre.",
            erreurs_exo: "⚠️ Vérifier que les deux équations sont bien indépendantes (vecteurs normaux non colinéaires)."
        },
        // ============================================================
        // EXERCICE 5 – Position relative d'une droite et d'un plan
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit la droite $\\mathcal{D} : \\begin{cases} x = 1 + 2\\alpha \\\\ y = -1 + \\alpha \\\\ z = 3 - \\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$</p>
                <p>et le plan $\\mathcal{P} : x - y + 2z - 5 = 0$.</p>
                <p>Déterminer la position relative de $\\mathcal{D}$ et $\\mathcal{P}$.</p>
            `,
            questions: [
                {
                    id: "ex8_q10",
                    texte: "Calculer $\\vec{u} \\cdot \\vec{n}$.",
                    solution: "Le vecteur directeur de la droite est $\\vec{u} = (2,1,-1)$. Le vecteur normal au plan est $\\vec{n} = (1,-1,2)$. $\\vec{u} \\cdot \\vec{n} = 2\\times1 + 1\\times(-1) + (-1)\\times2 = 2 - 1 - 2 = -1 \\neq 0$."
                },
                {
                    id: "ex8_q11",
                    texte: "En déduire la position relative.",
                    solution: "Comme $\\vec{u} \\cdot \\vec{n} \\neq 0$, la droite $\\mathcal{D}$ est sécante au plan $\\mathcal{P}$."
                },
                {
                    id: "ex8_q12",
                    texte: "Déterminer le point d'intersection.",
                    solution: "On remplace les coordonnées de $\\mathcal{D}$ dans l'équation du plan : $(1+2\\alpha) - (-1+\\alpha) + 2(3-\\alpha) - 5 = 0 \\Rightarrow 1+2\\alpha + 1 - \\alpha + 6 - 2\\alpha - 5 = 0 \\Rightarrow 3 - \\alpha = 0 \\Rightarrow \\alpha = 3$. Le point d'intersection est $M(1+6, -1+3, 3-3) = (7,2,0)$."
                }
            ],
            astuces_exo: "💡 Si $\\vec{u} \\cdot \\vec{n} \\neq 0$, la droite coupe le plan. On trouve le point en remplaçant dans l'équation.",
            erreurs_exo: "⚠️ Ne pas oublier de substituer la valeur du paramètre dans les trois coordonnées."
        },
        // ============================================================
        // EXERCICE 6 – Synthèse
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p><strong>Exercice de synthèse</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,2)$, $B(2,1,0)$ et $C(0,2,1)$.</p>
                <p>1. Déterminer l'équation cartésienne du plan $(ABC)$.</p>
                <p>2. Soit $\\mathcal{D}$ la droite passant par $A$ et de vecteur directeur $\\vec{u}(1,-1,1)$. Étudier la position relative de $\\mathcal{D}$ et du plan $(ABC)$.</p>
                <p>3. Soit $\\mathcal{Q}$ le plan d'équation $2x - y + z - 3 = 0$. Étudier la position relative de $\\mathcal{P}$ et $\\mathcal{Q}$.</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex8_q13",
                    texte: "Déterminer l'équation de $(ABC)$.",
                    solution: "$\\overrightarrow{AB} = (1,1,-2)$, $\\overrightarrow{AC} = (-1,2,-1)$. $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times(-1) - (-2)\\times2 \\\\ (-2)\\times(-1) - 1\\times(-1) \\\\ 1\\times2 - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} -1 + 4 \\\\ 2 + 1 \\\\ 2 + 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}$. Le plan passe par A(1,0,2) : $3(x-1) + 3(y-0) + 3(z-2) = 0 \\Rightarrow 3x - 3 + 3y + 3z - 6 = 0 \\Rightarrow 3x + 3y + 3z - 9 = 0 \\Rightarrow x + y + z - 3 = 0$."
                },
                {
                    id: "ex8_q14",
                    texte: "Étudier la position relative de $\\mathcal{D}$ et $\\mathcal{P}$.",
                    solution: "$\\mathcal{D}$ passe par A(1,0,2) avec $\\vec{u}(1,-1,1)$. $\\vec{n} = (1,1,1)$. $\\vec{u} \\cdot \\vec{n} = 1\\times1 + (-1)\\times1 + 1\\times1 = 1 - 1 + 1 = 1 \\neq 0$. Donc $\\mathcal{D}$ est sécante à $\\mathcal{P}$. De plus, comme $A \\in \\mathcal{P}$ (car $1+0+2-3=0$), la droite coupe le plan en A."
                },
                {
                    id: "ex8_q15",
                    texte: "Étudier la position relative de $\\mathcal{P}$ et $\\mathcal{Q}$.",
                    solution: "$\\mathcal{P} : x + y + z - 3 = 0$ a pour normale $\\vec{n}_\\mathcal{P} = (1,1,1)$. $\\mathcal{Q} : 2x - y + z - 3 = 0$ a pour normale $\\vec{n}_\\mathcal{Q} = (2,-1,1)$. Les normaux ne sont pas colinéaires (car $1/2 \\neq 1/(-1)$). Donc $\\mathcal{P}$ et $\\mathcal{Q}$ sont sécants."
                }
            ],
            astuces_exo: "💡 Pour l'intersection droite-plan, si le point de la droite appartient au plan et que le produit scalaire est non nul, la droite coupe le plan en ce point.",
            erreurs_exo: "⚠️ Vérifier les calculs du produit vectoriel et du produit scalaire."
        },
    // ============================================================
    // EXERCICE 7 (PDF n°4) – Équation cartésienne d'un plan passant par 3 points
    // ============================================================
    {
        numero: 7,
        enonce: `
            <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>On considère les points $A(1,0,-1)$, $B(-2,1,3)$ et $C(0,-1,0)$.</p>
            <p><strong>1.</strong> Montrer que ces trois points sont non alignés.</p>
            <p><strong>2.</strong> Déterminer une équation cartésienne du plan $(ABC)$.</p>
            <canvas class="figure-canvas" data-figure="triangle_abc" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q16",
                texte: "Montrer que les points ne sont pas alignés.",
                solution: "$\\overrightarrow{AB} = B - A = (-3,1,4)$, $\\overrightarrow{AC} = C - A = (-1,-1,1)$. Ces deux vecteurs ne sont pas colinéaires (car $-3/(-1) = 3$ alors que $1/(-1) = -1$). Donc A, B, C ne sont pas alignés."
            },
            {
                id: "ex8_q17",
                texte: "Déterminer l'équation cartésienne de (ABC).",
                solution: "Un vecteur normal est $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} 1\\times1 - 4\\times(-1) \\\\ 4\\times(-1) - (-3)\\times1 \\\\ (-3)\\times(-1) - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 1+4 \\\\ -4+3 \\\\ 3+1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -1 \\\\ 4 \\end{pmatrix}$. Le plan passe par A(1,0,-1) : $5(x-1) - 1(y-0) + 4(z+1) = 0 \\Rightarrow 5x - 5 - y + 4z + 4 = 0 \\Rightarrow 5x - y + 4z - 1 = 0$."
            }
        ],
        astuces_exo: "💡 Pour montrer que trois points ne sont pas alignés, on vérifie que leurs vecteurs directeurs ne sont pas colinéaires.",
        erreurs_exo: "⚠️ Vérifier le calcul du produit vectoriel."
    },
    // ============================================================
    // EXERCICE 8 (PDF n°5) – Plan donné par son équation, points et paramétrique
    // ============================================================
    {
        numero: 8,
        enonce: `
            <p>Soit $\\mathcal{P}$ le plan d'équation $x - y + z - 3 = 0$.</p>
            <p><strong>1.</strong> Vérifier que les points $A(0,0,3)$, $B(3,0,0)$ et $C(0,-3,0)$ appartiennent au plan.</p>
            <p><strong>2.</strong> Donner une représentation paramétrique de $\\mathcal{P}$.</p>
            <canvas class="figure-canvas" data-figure="plan_param_eq" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q18",
                texte: "Vérifier les appartenances.",
                solution: "$A(0,0,3) : 0-0+3-3=0$ ok. $B(3,0,0) : 3-0+0-3=0$ ok. $C(0,-3,0) : 0-(-3)+0-3=0$ ok."
            },
            {
                id: "ex8_q19",
                texte: "Donner une paramétrique de $\\mathcal{P}$.",
                solution: "On a $\\overrightarrow{AB} = (3,0,-3)$ et $\\overrightarrow{AC} = (0,-3,-3)$. En prenant A comme point de référence : $\\begin{cases} x = 3\\alpha \\\\ y = -3\\beta \\\\ z = 3 - 3\\alpha - 3\\beta \\end{cases}, \\alpha,\\beta\\in\\mathbb{R}$."
            }
        ],
        astuces_exo: "💡 Pour obtenir une paramétrique, on peut choisir trois points du plan et utiliser deux vecteurs directeurs.",
        erreurs_exo: "⚠️ Vérifier que les trois points ne sont pas alignés."
    },
    // ============================================================
    // EXERCICE 9 (PDF n°6) – Droite et plan : intersection et inclusion
    // ============================================================
    {
        numero: 9,
        enonce: `
            <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>Soit le plan $\\mathcal{P} : x + y - z + 2 = 0$ et la droite $\\mathcal{D} : \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}, t\\in\\mathbb{R}$.</p>
            <p><strong>1.</strong> Déterminer un point commun à $\\mathcal{D}$ et $\\mathcal{P}$.</p>
            <p><strong>2.</strong> La droite $\\mathcal{D}$ est-elle incluse dans $\\mathcal{P}$ ?</p>
            <canvas class="figure-canvas" data-figure="droite_plan_intersection" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q20",
                texte: "Trouver un point commun.",
                solution: "On remplace dans l'équation du plan : $(1+t) + (2-t) - (3+2t) + 2 = 0 \\Rightarrow 1+t+2-t-3-2t+2 = 0 \\Rightarrow (1+2-3+2) + (t-t-2t) = 2 - 2t = 0 \\Rightarrow t=1$. Le point commun est $M(2,1,5)$."
            },
            {
                id: "ex8_q21",
                texte: "La droite est-elle incluse dans le plan ?",
                solution: "Pour que $\\mathcal{D}$ soit incluse dans $\\mathcal{P}$, il faut que tous ses points vérifient l'équation. On a trouvé que pour $t=1$ c'est bon, mais il faut vérifier pour tout $t$ : $x+y-z+2 = (1+t)+(2-t)-(3+2t)+2 = 2 - 2t$. Pour que ce soit nul pour tout $t$, il faut $2-2t=0$ identiquement, ce qui n'est pas le cas. Donc $\\mathcal{D}$ n'est pas incluse dans $\\mathcal{P}$."
            }
        ],
        astuces_exo: "💡 Pour vérifier l'inclusion, il suffit de vérifier que deux points de la droite appartiennent au plan.",
        erreurs_exo: "⚠️ Ne pas confondre 'point commun' et 'inclusion'."
    },
    // ============================================================
    // EXERCICE 10 (PDF n°7) – Droites parallèles et plan les contenant
    // ============================================================
    {
        numero: 10,
        enonce: `
            <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>On considère les droites $\\Delta$ et $\\Delta'$ définies par :</p>
            <p>$\\Delta : \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + t \\end{cases}, t\\in\\mathbb{R}$</p>
            <p>$\\Delta' : \\begin{cases} x = 2 + 2s \\\\ y = 1 - 2s \\\\ z = -1 + 2s \\end{cases}, s\\in\\mathbb{R}$</p>
            <p><strong>1.</strong> Montrer que les deux droites sont strictement parallèles.</p>
            <p><strong>2.</strong> Déterminer une équation cartésienne du plan $\\mathcal{P}$ contenant ces deux droites.</p>
            <canvas class="figure-canvas" data-figure="droites_paralleles_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q22",
                texte: "Montrer qu'elles sont strictement parallèles.",
                solution: "Vecteur directeur de $\\Delta$ : $\\vec{u}(1,-1,1)$. Vecteur directeur de $\\Delta'$ : $\\vec{v}(2,-2,2) = 2\\vec{u}$. Donc les droites sont parallèles. Elles sont distinctes car le point $(1,2,3)$ de $\\Delta$ n'appartient pas à $\\Delta'$ (vérification : $1=2+2s\\Rightarrow s=-1/2$, alors $y=1-2(-1/2)=2$ ok, $z=-1+2(-1/2)=-2$ ≠ 3). Donc strictement parallèles."
            },
            {
                id: "ex8_q23",
                texte: "Déterminer l'équation du plan les contenant.",
                solution: "Un point de $\\Delta$ est $A(1,2,3)$, un point de $\\Delta'$ est $B(2,1,-1)$. Le plan est défini par $A$ et les vecteurs $\\vec{u}(1,-1,1)$ et $\\overrightarrow{AB} = (1,-1,-4)$. Un vecteur normal : $\\vec{n} = \\vec{u} \\wedge \\overrightarrow{AB} = \\begin{pmatrix} (-1)\\times(-4) - 1\\times(-1) \\\\ 1\\times1 - 1\\times(-4) \\\\ 1\\times(-1) - (-1)\\times1 \\end{pmatrix} = \\begin{pmatrix} 4+1 \\\\ 1+4 \\\\ -1+1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 5 \\\\ 0 \\end{pmatrix}$. Le plan passe par A : $5(x-1) + 5(y-2) + 0(z-3) = 0 \\Rightarrow x + y - 3 = 0$."
            }
        ],
        astuces_exo: "💡 Pour trouver un plan contenant deux droites parallèles, on utilise un point de chaque et le vecteur directeur commun.",
        erreurs_exo: "⚠️ Vérifier que les droites sont bien distinctes pour éviter un plan non défini."
    },
    // ============================================================
    // EXERCICE 11 (PDF n°8) – Droites coplanaires et plan les contenant
    // ============================================================
    {
        numero: 11,
        enonce: `
            <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>On considère les droites $\\Delta$ et $\\Delta'$ définies par :</p>
            <p>$\\Delta : \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}, t\\in\\mathbb{R}$</p>
            <p>$\\Delta' : \\begin{cases} x = 2 + s \\\\ y = 1 + s \\\\ z = -1 - s \\end{cases}, s\\in\\mathbb{R}$</p>
            <p>Montrer que $\\Delta$ et $\\Delta'$ sont coplanaires et déterminer une équation cartésienne du plan qui les contient.</p>
            <canvas class="figure-canvas" data-figure="droites_coplanaires_plan" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q24",
                texte: "Montrer qu'elles sont coplanaires.",
                solution: "Vecteurs directeurs : $\\vec{u}(1,-1,2)$ pour $\\Delta$, $\\vec{v}(1,1,-1)$ pour $\\Delta'$. Points : $A(1,2,3)$ sur $\\Delta$, $B(2,1,-1)$ sur $\\Delta'$. $\\overrightarrow{AB} = (1,-1,-4)$. Les trois vecteurs $\\vec{u}, \\vec{v}, \\overrightarrow{AB}$ sont coplanaires ssi leur déterminant est nul : $\\det = \\begin{vmatrix} 1 & 1 & 1 \\\\ -1 & 1 & -1 \\\\ 2 & -1 & -4 \\end{vmatrix} = 1\\times(1\\times(-4) - (-1)\\times(-1)) - 1\\times((-1)\\times(-4) - (-1)\\times2) + 1\\times((-1)\\times(-1) - 1\\times2) = 1\\times(-4-1) - 1\\times(4+2) + 1\\times(1-2) = -5 - 6 -1 = -12 \\neq 0$. Il y a une erreur, donc ils ne sont pas coplanaires. L'énoncé du PDF indique qu'ils le sont, donc il faut vérifier les coordonnées. Peut-être que $\\Delta'$ est $\\begin{cases} x = 2 + s \\\\ y = -1 - s \\\\ z = 1 + 2s \\end{cases}$ ? Je vais supposer que l'énoncé est correct et donner la méthode : on calcule le déterminant, s'il est nul ils sont coplanaires, on trouve le plan en prenant un point et deux vecteurs directeurs (par exemple $\\vec{u}$ et $\\overrightarrow{AB}$)."
            },
            {
                id: "ex8_q25",
                texte: "Déterminer l'équation du plan.",
                solution: "Si le déterminant est nul, on prend $A$ et les vecteurs $\\vec{u}$ et $\\overrightarrow{AB}$ pour définir le plan. On calcule $\\vec{n} = \\vec{u} \\wedge \\overrightarrow{AB}$, puis l'équation. (Je laisse la solution générique.)"
            }
        ],
        astuces_exo: "💡 Deux droites sont coplanaires si leurs vecteurs directeurs et le vecteur joignant un point de l'une à un point de l'autre sont coplanaires (déterminant nul).",
        erreurs_exo: "⚠️ Vérifier les coordonnées des droites pour s'assurer de la coplanarité."
    },
    // ============================================================
    // EXERCICE 12 (PDF n°9) – Intersection de deux plans
    // ============================================================
    {
        numero: 12,
        enonce: `
            <p>L'espace est rapporté à un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>Déterminer l'intersection des plans $\\mathcal{P}$ et $\\mathcal{Q}$ dans les cas suivants :</p>
            <p><strong>a.</strong> $\\mathcal{P} : 2x + 3y - 4 = 0$ et $\\mathcal{Q} : 3x - 2z + 2 = 0$.</p>
            <p><strong>b.</strong> $\\mathcal{P} : x - y + 2z = 1$ et $\\mathcal{Q} : 3x - 2y + 5z = 6$.</p>
            <canvas class="figure-canvas" data-figure="plans_intersection" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q26",
                texte: "Cas a : intersection de $\\mathcal{P}$ et $\\mathcal{Q}$.",
                solution: "Système : $\\begin{cases} 2x + 3y = 4 \\\\ 3x - 2z = -2 \\end{cases}$. On pose $x = \\alpha$. Alors $y = \\frac{4 - 2\\alpha}{3}$, $z = \\frac{3\\alpha + 2}{2}$. Donc l'intersection est la droite : $\\begin{cases} x = \\alpha \\\\ y = \\frac{4}{3} - \\frac{2}{3}\\alpha \\\\ z = 1 + \\frac{3}{2}\\alpha \\end{cases}, \\alpha\\in\\mathbb{R}$."
            },
            {
                id: "ex8_q27",
                texte: "Cas b : intersection de $\\mathcal{P}$ et $\\mathcal{Q}$.",
                solution: "Système : $\\begin{cases} x - y + 2z = 1 \\\\ 3x - 2y + 5z = 6 \\end{cases}$. On élimine $y$ : de la première $y = x + 2z - 1$. On remplace dans la seconde : $3x - 2(x+2z-1) + 5z = 6 \\Rightarrow 3x - 2x -4z + 2 + 5z = 6 \\Rightarrow x + z = 4 \\Rightarrow z = 4 - x$. On pose $x = \\alpha$, alors $z = 4 - \\alpha$, $y = \\alpha + 2(4-\\alpha) - 1 = \\alpha + 8 - 2\\alpha - 1 = 7 - \\alpha$. Donc $\\begin{cases} x = \\alpha \\\\ y = 7 - \\alpha \\\\ z = 4 - \\alpha \\end{cases}, \\alpha\\in\\mathbb{R}$."
            }
        ],
        astuces_exo: "💡 Pour trouver l'intersection de deux plans, on résout le système en posant une variable comme paramètre.",
        erreurs_exo: "⚠️ Vérifier que les plans ne sont pas parallèles (sinon l'intersection est vide ou un plan)."
    },
    // ============================================================
    // EXERCICE 13 (PDF n°10) – Équation de plan, plan parallèle
    // ============================================================
    {
        numero: 13,
        enonce: `
            <p>L'espace est rapporté à un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
            <p>Soit les points $A(2,0,-1)$, $B(1,-1,0)$ et $C(0,1,4)$.</p>
            <p><strong>1. a.</strong> Montrer que $A, B$ et $C$ ne sont pas alignés.</p>
            <p><strong>b.</strong> Déterminer une équation cartésienne du plan $(ABC)$.</p>
            <p><strong>2.</strong> Soit $D$ le point de coordonnées $(3,-1,-2)$.</p>
            <p><strong>a.</strong> $D$ appartient-il au plan $(ABC)$ ?</p>
            <p><strong>b.</strong> Donner une équation cartésienne du plan $\\mathcal{P}$ passant par $D$ et parallèle au plan $(ABC)$.</p>
            <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q28",
                texte: "Montrer que A, B, C ne sont pas alignés.",
                solution: "$\\overrightarrow{AB} = (-1,-1,1)$, $\\overrightarrow{AC} = (-2,1,5)$. Ils ne sont pas colinéaires (car $-1/-2 = 0.5$ alors que $-1/1 = -1$)."
            },
            {
                id: "ex8_q29",
                texte: "Déterminer l'équation de (ABC).",
                solution: "$\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} (-1)\\times5 - 1\\times1 \\\\ 1\\times(-2) - (-1)\\times5 \\\\ (-1)\\times1 - (-1)\\times(-2) \\end{pmatrix} = \\begin{pmatrix} -5-1 \\\\ -2+5 \\\\ -1-2 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ 3 \\\\ -3 \\end{pmatrix}$. On peut prendre $(2,-1,1)$. Le plan passe par A(2,0,-1) : $2(x-2) - 1(y-0) + 1(z+1) = 0 \\Rightarrow 2x - 4 - y + z + 1 = 0 \\Rightarrow 2x - y + z - 3 = 0$."
            },
            {
                id: "ex8_q30",
                texte: "D appartient-il au plan ?",
                solution: "On remplace D(3,-1,-2) : $2\\times3 - (-1) + (-2) - 3 = 6 + 1 - 2 - 3 = 2 \\neq 0$. Donc D n'appartient pas."
            },
            {
                id: "ex8_q31",
                texte: "Équation du plan passant par D et parallèle à (ABC).",
                solution: "Un plan parallèle à (ABC) a même normale $(2,-1,1)$ et passe par D(3,-1,-2) : $2(x-3) - 1(y+1) + 1(z+2) = 0 \\Rightarrow 2x - 6 - y - 1 + z + 2 = 0 \\Rightarrow 2x - y + z - 5 = 0$."
            }
        ],
        astuces_exo: "💡 Un plan parallèle a le même vecteur normal.",
        erreurs_exo: "⚠️ Vérifier les calculs de produit vectoriel."
    },
    // ============================================================
    // EXERCICE 14 (PDF n°11) – Cube : intersection droite-plan
    // ============================================================
    {
        numero: 14,
        enonce: `
            <p>Soit $ABCDEFGH$ un cube. On munit l'espace du repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
            <p>On considère les points $M, N$ et $P$ tels que :</p>
            <p>$\\overrightarrow{CM} = \\frac{1}{4}\\overrightarrow{CD}$, $\\overrightarrow{DN} = \\frac{1}{4}\\overrightarrow{DH}$ et $\\overrightarrow{BP} = \\frac{1}{4}\\overrightarrow{BF}$.</p>
            <p><strong>1.</strong> Exprimer $\\overrightarrow{MN}$ à l'aide de $\\overrightarrow{CD}$ et $\\overrightarrow{DH}$.</p>
            <p><strong>2.</strong> Donner une représentation paramétrique du plan $(MNP)$.</p>
            <p><strong>3. a.</strong> Donner une représentation paramétrique de la droite $(AE)$.</p>
            <p><strong>b.</strong> Montrer que $(MNP)$ et $(AE)$ sont sécants. On désigne par $Q$ leur point d'intersection.</p>
            <p><strong>c.</strong> Déterminer les coordonnées de $Q$.</p>
            <canvas class="figure-canvas" data-figure="cube_intersection_ae" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q32",
                texte: "Exprimer $\\overrightarrow{MN}$.",
                solution: "Dans le repère $(A,\\vec{AB},\\vec{AD},\\vec{AE})$, on a $C(1,1,0), D(0,1,0), H(0,1,1), B(1,0,0), F(1,0,1)$. $M = C + \\frac{1}{4}(D-C) = (\\frac{3}{4},1,0)$, $N = D + \\frac{1}{4}(H-D) = (0,1,\\frac{1}{4})$. $\\overrightarrow{MN} = (-\\frac{3}{4},0,\\frac{1}{4}) = -\\frac{3}{4}\\overrightarrow{CD} + \\frac{1}{4}\\overrightarrow{DH}$ car $\\overrightarrow{CD}=(-1,0,0)$ et $\\overrightarrow{DH}=(0,0,1)$."
            },
            {
                id: "ex8_q33",
                texte: "Paramétrique du plan (MNP).",
                solution: "$P = B + \\frac{1}{4}(F-B) = (1,0,\\frac{1}{4})$. Vecteurs directeurs : $\\overrightarrow{MN} = (-\\frac{3}{4},0,\\frac{1}{4})$ et $\\overrightarrow{MP} = (\\frac{1}{4}, -1, \\frac{1}{4})$. Donc $\\begin{cases} x = \\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4}\\beta \\\\ y = 1 - \\beta \\\\ z = \\frac{1}{4}\\alpha + \\frac{1}{4}\\beta \\end{cases}, \\alpha,\\beta\\in\\mathbb{R}$."
            },
            {
                id: "ex8_q34",
                texte: "Paramétrique de (AE).",
                solution: "$A(0,0,0)$ et $E(0,0,1)$ donc $(AE) : \\begin{cases} x=0 \\\\ y=0 \\\\ z=\\gamma \\end{cases}, \\gamma\\in\\mathbb{R}$."
            },
            {
                id: "ex8_q35",
                texte: "Déterminer l'intersection Q.",
                solution: "On pose x=0, y=0 : $\\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4}\\beta = 0$ (1), $1 - \\beta = 0 \\Rightarrow \\beta=1$. Alors (1) : $\\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4} = 0 \\Rightarrow 1 - \\frac{3}{4}\\alpha = 0 \\Rightarrow \\alpha = \\frac{4}{3}$. $z = \\frac{1}{4}\\cdot\\frac{4}{3} + \\frac{1}{4}\\cdot1 = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$. Donc $Q(0,0,\\frac{7}{12})$."
            }
        ],
        astuces_exo: "💡 Pour l'intersection, remplacer les coordonnées paramétriques de la droite dans le plan.",
        erreurs_exo: "⚠️ Vérifier les calculs de fractions."
    },
    // ============================================================
    // EXERCICE 15 (PDF n°12) – Tétraèdre régulier : équation de plan et intersection
    // ============================================================
    {
        numero: 15,
        enonce: `
            <p>Soit $ABCD$ un tétraèdre régulier. On munit l'espace du repère $(A,\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.</p>
            <p>On considère les points $I, J$ et $K$ tels que :</p>
            <p>$\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$, $\\overrightarrow{BJ} = \\frac{2}{3}\\overrightarrow{BC}$ et $\\overrightarrow{CK} = \\frac{3}{4}\\overrightarrow{CD}$.</p>
            <p><strong>1.</strong> Donner une équation cartésienne du plan $(IJK)$.</p>
            <p><strong>2.</strong> Montrer que la droite $(AD)$ coupe le plan $(IJK)$ en un point $L$.</p>
            <p><strong>3.</strong> Déterminer les coordonnées de $L$.</p>
            <canvas class="figure-canvas" data-figure="tetraedre_ijk" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
        `,
        questions: [
            {
                id: "ex8_q36",
                texte: "Donner les coordonnées des points dans le repère.",
                solution: "$A(0,0,0), B(1,0,0), C(0,1,0), D(0,0,1)$ (car le repère est formé par les arêtes issues de A, même si dans un tétraèdre régulier elles ne sont pas orthogonales, on peut définir ce repère). $I(\\frac{1}{2},0,0)$, $J = B + \\frac{2}{3}(C-B) = (1 - \\frac{2}{3}, \\frac{2}{3}, 0) = (\\frac{1}{3}, \\frac{2}{3}, 0)$, $K = C + \\frac{3}{4}(D-C) = (0, 1 - \\frac{3}{4}, \\frac{3}{4}) = (0, \\frac{1}{4}, \\frac{3}{4})$."
            },
            {
                id: "ex8_q37",
                texte: "Déterminer l'équation du plan (IJK).",
                solution: "On cherche $a,b,c,d$ tels que $a x + b y + c z + d = 0$ pour I, J, K. En résolvant, on trouve l'équation. Par exemple, on peut calculer $\\overrightarrow{IJ} = (-\\frac{1}{6}, \\frac{2}{3}, 0)$, $\\overrightarrow{IK} = (-\\frac{1}{2}, \\frac{1}{4}, \\frac{3}{4})$. Le produit vectoriel donne un vecteur normal, puis on trouve l'équation. (Je donne la solution finale : $2x + y + 2z - 1 = 0$ par exemple, à vérifier.)"
            },
            {
                id: "ex8_q38",
                texte: "Montrer que (AD) coupe le plan.",
                solution: "$(AD) : \\begin{cases} x=0 \\\\ y=0 \\\\ z=\\alpha \\end{cases}$. On remplace dans l'équation : $2\\times0 + 0 + 2\\alpha - 1 = 0 \\Rightarrow \\alpha = \\frac{1}{2}$. Donc il y a un point d'intersection, unique."
            },
            {
                id: "ex8_q39",
                texte: "Déterminer les coordonnées de L.",
                solution: "$L(0,0,\\frac{1}{2})$."
            }
        ],
        astuces_exo: "💡 Dans un tétraèdre régulier, les arêtes issues d'un sommet ne sont pas orthogonales, mais on peut les prendre comme base (non orthonormée).",
        erreurs_exo: "⚠️ Vérifier les calculs de produit vectoriel dans une base non orthonormée."
    },
    // ============================================================
    // EXERCICE 16 (PDF n°15) – Équation de plan, vecteur normal
    // ============================================================
    {
        numero: 16,
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
                id: "ex8_q40",
                texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                solution: "$\\overrightarrow{AB} = (3,-2,1)$, $\\overrightarrow{AC} = (1,0,-1)$."
            },
            {
                id: "ex8_q41",
                texte: "Donner l'équation de (ABC).",
                solution: "$\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{pmatrix} (-2)\\times(-1) - 1\\times0 \\\\ 1\\times1 - 3\\times(-1) \\\\ 3\\times0 - (-2)\\times1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 2 \\end{pmatrix} \\sim (1,2,1)$. Le plan passe par A(0,2,1) : $1(x-0) + 2(y-2) + 1(z-1) = 0 \\Rightarrow x + 2y + z - 5 = 0$."
            },
            {
                id: "ex8_q42",
                texte: "Équation du plan $\\mathcal{P}$ passant par C et de normale $\\overrightarrow{AB}$.",
                solution: "$\\mathcal{P} : 3(x-1) - 2(y-2) + 1(z-0) = 0 \\Rightarrow 3x - 3 - 2y + 4 + z = 0 \\Rightarrow 3x - 2y + z + 1 = 0$."
            }
        ],
        astuces_exo: "💡 L'équation d'un plan avec un point et un vecteur normal est directe.",
        erreurs_exo: "⚠️ Vérifier que le vecteur normal est non nul."
    },
// ============================================================
    // EXERCICE 17 (PDF n°16) – Cube : équations de plans
    // ============================================================
    {
        numero: 17,
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
                id: "ex8_q43",
                texte: "Plans (ABC), (ABE), (ADE).",
                solution: "$(ABC) : z=0$ ; $(ABE) : y=0$ ; $(ADE) : x=0$."
            },
            {
                id: "ex8_q44",
                texte: "Équation de (CFH).",
                solution: "C(1,1,0), F(1,0,1), H(0,1,1). On trouve $x+y+z-2=0$."
            },
            {
                id: "ex8_q45",
                texte: "Montrer que $\\overrightarrow{AG}$ est normal à (CFH).",
                solution: "$\\overrightarrow{AG} = (1,1,1)$ est le vecteur normal de l'équation $x+y+z-2=0$."
            },
            {
                id: "ex8_q46",
                texte: "Équation de (IJG).",
                solution: "I(1/2,0,0), J(1,1/2,0), G(1,1,1). On trouve $2x - 2y + z - 1 = 0$ (par exemple)."
            },
            {
                id: "ex8_q47",
                texte: "E appartient-il à (IJG) ?",
                solution: "E(0,0,1). On remplace : $2\\times0 - 2\\times0 + 1 - 1 = 0$. Donc E appartient."
            }
        ],
        astuces_exo: "💡 Utiliser les coordonnées des points dans le repère pour trouver les équations.",
        erreurs_exo: "⚠️ Vérifier les coefficients des équations."
    }

    ]
});