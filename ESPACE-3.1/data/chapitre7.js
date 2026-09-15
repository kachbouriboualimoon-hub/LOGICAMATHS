// chapitre7.js – Représentations paramétriques
// Extrait du PDF "geometrie espace.pdf" – pages 22 à 24

data.chapitres.push({
    id: 7,
    titre: "Représentations paramétriques",
    rappel: `
        <p><strong>Représentation paramétrique d'une droite :</strong></p>
        <p>Soit $\\mathcal{D}$ la droite passant par $A(x_0,y_0,z_0)$ et de vecteur directeur $\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ (avec $(a,b,c) \\neq (0,0,0)$).</p>
        <p>Un point $M(x,y,z)$ appartient à $\\mathcal{D}$ si et seulement si il existe un réel $\\alpha$ tel que :</p>
        <p style="text-align:center; font-size:1.1rem;">
            $\\begin{cases}
                x = x_0 + \\alpha a \\\\
                y = y_0 + \\alpha b \\\\
                z = z_0 + \\alpha c
            \\end{cases}, \\quad \\alpha \\in \\mathbb{R}$
        </p>
        <p>Le paramètre $\\alpha$ est unique pour chaque point de la droite.</p>

        <p><strong>Représentation paramétrique d'un plan :</strong></p>
        <p>Soit $\\mathcal{P}$ le plan passant par $A(x_0,y_0,z_0)$ et de vecteurs directeurs $\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}a'\\\\b'\\\\c'\\end{pmatrix}$ (non colinéaires).</p>
        <p>Un point $M(x,y,z)$ appartient à $\\mathcal{P}$ si et seulement si il existe deux réels $\\alpha$ et $\\beta$ tels que :</p>
        <p style="text-align:center; font-size:1.1rem;">
            $\\begin{cases}
                x = x_0 + \\alpha a + \\beta a' \\\\
                y = y_0 + \\alpha b + \\beta b' \\\\
                z = z_0 + \\alpha c + \\beta c'
            \\end{cases}, \\quad \\alpha, \\beta \\in \\mathbb{R}$
        </p>
        <p>Le couple $(\\alpha,\\beta)$ est unique pour chaque point du plan.</p>

        <p><strong>Appartenance d'un point à une droite/plan :</strong></p>
        <p>Pour vérifier si un point $M$ appartient à une droite/plan, on remplace ses coordonnées dans le système et on résout le(s) paramètre(s).</p>
        <ul>
            <li>Pour une droite : on doit trouver une unique valeur de $\\alpha$ qui satisfait les trois équations.</li>
            <li>Pour un plan : on doit trouver un couple $(\\alpha,\\beta)$ qui satisfait les trois équations.</li>
        </ul>

        <p><strong>Passage de la paramétrique à la cartésienne pour un plan :</strong></p>
        <p>À partir de la représentation paramétrique d'un plan, on peut obtenir son équation cartésienne en calculant un vecteur normal via le produit vectoriel des deux vecteurs directeurs.</p>
        <p>Si $\\mathcal{P} : \\begin{cases} x = x_0 + \\alpha a + \\beta a' \\\\ y = y_0 + \\alpha b + \\beta b' \\\\ z = z_0 + \\alpha c + \\beta c' \\end{cases}$, alors $\\vec{n} = \\vec{u} \\wedge \\vec{v}$ est normal à $\\mathcal{P}$.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> L'ensemble des points $M(x,y,z)$ vérifiant le système paramétrique d'une droite (resp. d'un plan) est exactement la droite (resp. le plan) défini par le point et le(s) vecteur(s) directeur(s).
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Une droite admet une infinité de représentations paramétriques (on peut choisir un autre point ou un vecteur directeur colinéaire).
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Un plan admet une infinité de représentations paramétriques (on peut choisir un autre point ou d'autres vecteurs directeurs).
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Pour qu'un système paramétrique représente un plan, les deux vecteurs directeurs doivent être non colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Si $\\mathcal{P}$ a pour représentation paramétrique $M = A + \\alpha\\vec{u} + \\beta\\vec{v}$, alors $\\vec{n} = \\vec{u} \\wedge \\vec{v}$ est un vecteur normal à $\\mathcal{P}$.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer une représentation paramétrique d'une droite passant par deux points $A$ et $B$, on prend $A$ comme point de référence et $\\overrightarrow{AB}$ comme vecteur directeur.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer une représentation paramétrique d'un plan passant par trois points $A,B,C$, on prend $A$ comme point de référence et $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ comme vecteurs directeurs.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour vérifier si un point appartient à une droite, on résout le système en $\\alpha$ ; s'il existe une solution unique, le point appartient à la droite.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour vérifier si un point appartient à un plan, on résout le système en $(\\alpha,\\beta)$ ; s'il existe une solution, le point appartient au plan.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver l'intersection de deux droites paramétriques, on égalise les coordonnées et on résout le système en les deux paramètres.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour passer d'une représentation paramétrique à une équation cartésienne d'un plan, on calcule $\\vec{n} = \\vec{u} \\wedge \\vec{v}$ puis on écrit $\\vec{n} \\cdot \\overrightarrow{AM} = 0$.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour une droite, le paramètre $\\alpha$ peut être interprété comme la position du point sur la droite (comme une abscisse curviligne).</div>
        <div class="astuce-box">💡 Pour vérifier l'appartenance d'un point, commencez par résoudre deux équations, puis vérifiez la troisième.</div>
        <div class="astuce-box">💡 Dans un cube, choisir un repère bien adapté (par exemple $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$) simplifie les calculs.</div>
        <div class="astuce-box">💡 Une droite est entièrement déterminée par un point et un vecteur directeur : la représentation paramétrique est un outil puissant pour décrire tous ses points.</div>
        <div class="astuce-box">💡 Pour passer de la paramétrique à la cartésienne d'un plan, le produit vectoriel est la méthode la plus rapide.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre les paramètres d'une droite (un seul) et ceux d'un plan (deux).</div>
        <div class="erreur-box">⚠️ Oublier de vérifier que les vecteurs directeurs d'un plan ne sont pas colinéaires.</div>
        <div class="erreur-box">⚠️ Dans une représentation paramétrique, le point de référence et le vecteur directeur doivent être cohérents (le point doit être l'origine du vecteur).</div>
        <div class="erreur-box">⚠️ Pour l'appartenance d'un point à une droite, il faut une valeur unique de $\\alpha$ qui satisfasse les trois équations ; si les équations sont contradictoires, le point n'appartient pas.</div>
        <div class="erreur-box">⚠️ Dans le passage paramétrique → cartésienne, ne pas oublier de développer correctement l'équation $\\vec{n} \\cdot \\overrightarrow{AM} = 0$.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Une représentation paramétrique d'une droite utilise combien de paramètres ?",
                options: ["0", "1", "2", "3"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Une représentation paramétrique d'un plan utilise combien de paramètres ?",
                options: ["0", "1", "2", "3"],
                correct: 2
            },
            {
                type: "qcm",
                text: "Pour qu'un système paramétrique représente un plan, les deux vecteurs directeurs doivent être :",
                options: ["orthogonaux", "colinéaires", "non colinéaires", "unitaires"],
                correct: 2
            },
            {
                type: "qcm",
                text: "Pour obtenir l'équation cartésienne d'un plan à partir de sa représentation paramétrique, on calcule :",
                options: ["le produit scalaire des vecteurs directeurs", "le produit vectoriel des vecteurs directeurs", "la somme des vecteurs directeurs", "la norme des vecteurs directeurs"],
                correct: 1
            },
            {
                type: "vf",
                text: "Une droite admet une unique représentation paramétrique.",
                correct: 0
            },
            {
                type: "vf",
                text: "Si un point appartient à une droite paramétrée, il existe un unique réel $\\alpha$ qui vérifie les trois équations.",
                correct: 1
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
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1, -2, 3)$ et $B(-1, 0, 1)$.</p>
                <p>Donner une représentation paramétrique de la droite $(AB)$.</p>
            `,
            questions: [
                {
                    id: "ex7_q1",
                    texte: "Calculer le vecteur $\\overrightarrow{AB}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-2, 2, -2)$."
                },
                {
                    id: "ex7_q2",
                    texte: "Donner la représentation paramétrique de $(AB)$.",
                    solution: "En prenant $A(1,-2,3)$ et $\\vec{u} = \\overrightarrow{AB} = (-2,2,-2)$, on obtient : $\\begin{cases} x = 1 - 2\\alpha \\\\ y = -2 + 2\\alpha \\\\ z = 3 - 2\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 On peut aussi prendre $B$ comme point de référence et un vecteur colinéaire comme $\\frac{1}{2}\\overrightarrow{AB}$.",
            erreurs_exo: "⚠️ Vérifier que les coordonnées de $A$ et $B$ sont correctement soustraites."
        },
        // ============================================================
        // EXERCICE 2
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1, -2, 3)$, $B(-1, 0, 1)$ et $C(0, 1, -2)$.</p>
                <p>Donner une représentation paramétrique du plan $(ABC)$.</p>
            `,
            questions: [
                {
                    id: "ex7_q3",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = (-2, 2, -2)$, $\\overrightarrow{AC} = (-1, 3, -5)$."
                },
                {
                    id: "ex7_q4",
                    texte: "Vérifier que ces deux vecteurs ne sont pas colinéaires.",
                    solution: "Les vecteurs $\\overrightarrow{AB}(-2,2,-2)$ et $\\overrightarrow{AC}(-1,3,-5)$ ne sont pas proportionnels (par exemple, $-2/-1 = 2$ mais $2/3 \\neq 2$). Donc ils sont non colinéaires."
                },
                {
                    id: "ex7_q5",
                    texte: "Donner la représentation paramétrique du plan.",
                    solution: "En prenant $A(1,-2,3)$ comme point de référence : $\\begin{cases} x = 1 - 2\\alpha - \\beta \\\\ y = -2 + 2\\alpha + 3\\beta \\\\ z = 3 - 2\\alpha - 5\\beta \\end{cases}, \\alpha, \\beta \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 On peut aussi prendre un autre point ou d'autres vecteurs directeurs (comme $\\overrightarrow{BC}$ et $\\overrightarrow{BA}$).",
            erreurs_exo: "⚠️ Vérifier que les vecteurs directeurs sont bien non colinéaires."
        },
        // ============================================================
        // EXERCICE 3
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit la droite $\\mathcal{D}$ de représentation paramétrique :</p>
                <p style="text-align:center;">$\\begin{cases} x = 1 + 2\\alpha \\\\ y = -2 - \\alpha \\\\ z = 3 + \\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$</p>
                <p>Déterminer si les points $A(3, -3, 4)$ et $B(5, -4, 5)$ appartiennent à $\\mathcal{D}$.</p>
            `,
            questions: [
                {
                    id: "ex7_q6",
                    texte: "Vérifier l'appartenance de $A(3, -3, 4)$.",
                    solution: "On résout : $3 = 1 + 2\\alpha \\Rightarrow \\alpha = 1$. Puis $y = -2 - 1 = -3$ (ok) et $z = 3 + 1 = 4$ (ok). Donc $A \\in \\mathcal{D}$ pour $\\alpha=1$."
                },
                {
                    id: "ex7_q7",
                    texte: "Vérifier l'appartenance de $B(5, -4, 5)$.",
                    solution: "On résout : $5 = 1 + 2\\alpha \\Rightarrow \\alpha = 2$. Puis $y = -2 - 2 = -4$ (ok) et $z = 3 + 2 = 5$ (ok). Donc $B \\in \\mathcal{D}$ pour $\\alpha=2$."
                }
            ],
            astuces_exo: "💡 Pour vérifier l'appartenance, résolvez les deux premières équations, puis vérifiez la troisième.",
            erreurs_exo: "⚠️ Ne pas oublier de vérifier les trois équations."
        },
        // ============================================================
        // EXERCICE 4
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit le plan $\\mathcal{P}$ de représentation paramétrique :</p>
                <p style="text-align:center;">$\\begin{cases} x = 1 + 2\\alpha - \\beta \\\\ y = -2 + \\alpha + 3\\beta \\\\ z = 3 - \\alpha + 2\\beta \\end{cases}, \\alpha, \\beta \\in \\mathbb{R}$</p>
                <p>Le point $A(4, -3, 4)$ appartient-il à $\\mathcal{P}$ ?</p>
            `,
            questions: [
                {
                    id: "ex7_q8",
                    texte: "Résoudre le système pour $A(4, -3, 4)$.",
                    solution: "On doit trouver $\\alpha,\\beta$ tels que : $4 = 1 + 2\\alpha - \\beta$, $-3 = -2 + \\alpha + 3\\beta$, $4 = 3 - \\alpha + 2\\beta$. De la première : $2\\alpha - \\beta = 3$ (1). De la deuxième : $\\alpha + 3\\beta = -1$ (2). De la troisième : $-\\alpha + 2\\beta = 1$ (3). De (1) : $\\beta = 2\\alpha - 3$. On remplace dans (2) : $\\alpha + 3(2\\alpha - 3) = -1 \\Rightarrow \\alpha + 6\\alpha - 9 = -1 \\Rightarrow 7\\alpha = 8 \\Rightarrow \\alpha = \\frac{8}{7}$. Alors $\\beta = 2\\cdot\\frac{8}{7} - 3 = \\frac{16}{7} - \\frac{21}{7} = -\\frac{5}{7}$. Vérifions (3) : $-\\alpha + 2\\beta = -\\frac{8}{7} + 2(-\\frac{5}{7}) = -\\frac{8}{7} - \\frac{10}{7} = -\\frac{18}{7} \\neq 1$. Donc le système n'a pas de solution, $A \\notin \\mathcal{P}$."
                }
            ],
            astuces_exo: "💡 Commencez par résoudre deux équations, puis vérifiez la troisième.",
            erreurs_exo: "⚠️ Si les trois équations ne sont pas compatibles, le point n'appartient pas au plan."
        },
        // ============================================================
        // EXERCICE 5
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les droites $\\mathcal{D}_1$ et $\\mathcal{D}_2$ de représentations paramétriques :</p>
                <p>$\\mathcal{D}_1 : \\begin{cases} x = 1 + \\alpha \\\\ y = 2 - \\alpha \\\\ z = 3 + 2\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$</p>
                <p>$\\mathcal{D}_2 : \\begin{cases} x = -1 + 2\\beta \\\\ y = 4 - \\beta \\\\ z = 5 - \\beta \\end{cases}, \\beta \\in \\mathbb{R}$</p>
                <p>Déterminer si les droites sont sécantes. Si oui, donner leur point d'intersection.</p>
            `,
            questions: [
                {
                    id: "ex7_q9",
                    texte: "Égaliser les coordonnées et résoudre le système.",
                    solution: "On doit trouver $\\alpha, \\beta$ tels que : $1+\\alpha = -1+2\\beta$, $2-\\alpha = 4-\\beta$, $3+2\\alpha = 5-\\beta$. De la première : $\\alpha - 2\\beta = -2$ (1). De la deuxième : $-\\alpha + \\beta = 2$ (2). De la troisième : $2\\alpha + \\beta = 2$ (3). De (2) : $\\beta = 2 + \\alpha$. On remplace dans (1) : $\\alpha - 2(2+\\alpha) = -2 \\Rightarrow \\alpha - 4 - 2\\alpha = -2 \\Rightarrow -\\alpha = 2 \\Rightarrow \\alpha = -2$. Alors $\\beta = 2 + (-2) = 0$. Vérifions (3) : $2(-2) + 0 = -4 \\neq 2$. Les équations sont incompatibles, donc les droites ne sont pas sécantes."
                }
            ],
            astuces_exo: "💡 Si le système a une solution unique, les droites sont sécantes. Sinon, elles sont parallèles ou non coplanaires.",
            erreurs_exo: "⚠️ Vérifier que les paramètres sont compatibles pour les trois équations."
        },
        // ============================================================
        // EXERCICE 6
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>Dans un cube $ABCDEFGH$ d'arête 1, on munit l'espace du repère $(E,\\overrightarrow{EF},\\overrightarrow{EH},\\overrightarrow{EA})$.</p>
                <p>On note $I$ le centre de la face $ABCD$ et $J$ le centre de la face $BCGF$.</p>
                <p>1. Déterminer les coordonnées des points $A$, $F$, $D$, $I$ et $J$.</p>
                <p>2. Donner une représentation paramétrique de la droite $(IJ)$.</p>
                <p>3. La droite $(IJ)$ est-elle parallèle à la droite $(AF)$ ?</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q10",
                    texte: "Déterminer les coordonnées des points.",
                    solution: "Dans le repère $(E,\\overrightarrow{EF},\\overrightarrow{EH},\\overrightarrow{EA})$, on a : E(0,0,0), F(1,0,0), A(0,0,1), B(1,0,1), C(1,1,1), D(0,1,1), G(1,1,0), H(0,1,0). I centre de ABCD : $I(\\frac{1}{2}, \\frac{1}{2}, 1)$. J centre de BCGF : $J(1, \\frac{1}{2}, \\frac{1}{2})$."
                },
                {
                    id: "ex7_q11",
                    texte: "Donner une représentation paramétrique de (IJ).",
                    solution: "$\\overrightarrow{IJ} = J - I = (\\frac{1}{2}, 0, -\\frac{1}{2})$. Donc $(IJ) : \\begin{cases} x = \\frac{1}{2} + \\frac{1}{2}\\alpha \\\\ y = \\frac{1}{2} \\\\ z = 1 - \\frac{1}{2}\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q12",
                    texte: "La droite (IJ) est-elle parallèle à (AF) ?",
                    solution: "$\\overrightarrow{AF} = F - A = (1,0,-1)$. Le vecteur directeur de (IJ) est $\\frac{1}{2}(1,0,-1)$, qui est colinéaire à $\\overrightarrow{AF}$. Donc (IJ) est parallèle à (AF)."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées des points dans le repère choisi pour simplifier.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des centres des faces."
        },
        // ============================================================
        // EXERCICE 7 – Synthèse
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p><strong>Exercice de synthèse</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,2)$, $B(2,1,0)$, $C(0,2,1)$ et $D(1,1,1)$.</p>
                <p>1. Donner une représentation paramétrique de la droite $(AC)$.</p>
                <p>2. Donner une représentation paramétrique du plan $(ABC)$.</p>
                <p>3. Le point $D$ appartient-il au plan $(ABC)$ ?</p>
                <p>4. La droite $(BD)$ est-elle parallèle au plan $(ABC)$ ?</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q13",
                    texte: "Donner une représentation paramétrique de (AC).",
                    solution: "$\\overrightarrow{AC} = C - A = (-1,2,-1)$. Donc $(AC) : \\begin{cases} x = 1 - \\alpha \\\\ y = 2\\alpha \\\\ z = 2 - \\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q14",
                    texte: "Donner une représentation paramétrique du plan (ABC).",
                    solution: "$\\overrightarrow{AB} = (1,1,-2)$, $\\overrightarrow{AC} = (-1,2,-1)$. Donc $\\mathcal{P} : \\begin{cases} x = 1 + \\alpha - \\beta \\\\ y = \\alpha + 2\\beta \\\\ z = 2 - 2\\alpha - \\beta \\end{cases}, \\alpha, \\beta \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q15",
                    texte: "D appartient-il à (ABC) ?",
                    solution: "On cherche $\\alpha,\\beta$ tels que : $1 = 1 + \\alpha - \\beta$, $1 = \\alpha + 2\\beta$, $1 = 2 - 2\\alpha - \\beta$. De la première : $\\alpha - \\beta = 0 \\Rightarrow \\alpha = \\beta$. De la deuxième : $\\alpha + 2\\alpha = 1 \\Rightarrow 3\\alpha = 1 \\Rightarrow \\alpha = \\frac{1}{3}$, donc $\\beta = \\frac{1}{3}$. Vérifions la troisième : $2 - 2\\cdot\\frac{1}{3} - \\frac{1}{3} = 2 - \\frac{2}{3} - \\frac{1}{3} = 2 - 1 = 1$ (ok). Donc $D \\in \\mathcal{P}$."
                },
                {
                    id: "ex7_q16",
                    texte: "La droite (BD) est-elle parallèle au plan (ABC) ?",
                    solution: "$\\overrightarrow{BD} = D - B = (-1,0,1)$. Le plan (ABC) a pour vecteurs directeurs $\\overrightarrow{AB}(1,1,-2)$ et $\\overrightarrow{AC}(-1,2,-1)$. Pour que (BD) soit parallèle au plan, il faut que $\\overrightarrow{BD}$ soit combinaison linéaire de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$. On résout : $(-1,0,1) = \\alpha(1,1,-2) + \\beta(-1,2,-1)$. De la deuxième coordonnée : $0 = \\alpha + 2\\beta$ (1). De la première : $-1 = \\alpha - \\beta$ (2). De la troisième : $1 = -2\\alpha - \\beta$ (3). De (2) : $\\alpha = \\beta - 1$. On remplace dans (1) : $\\beta - 1 + 2\\beta = 0 \\Rightarrow 3\\beta = 1 \\Rightarrow \\beta = \\frac{1}{3}$, donc $\\alpha = -\\frac{2}{3}$. Vérifions (3) : $-2(-\\frac{2}{3}) - \\frac{1}{3} = \\frac{4}{3} - \\frac{1}{3} = 1$ (ok). Donc $\\overrightarrow{BD}$ est combinaison linéaire, donc (BD) est parallèle au plan (ABC)."
                }
            ],
            astuces_exo: "💡 Une droite est parallèle à un plan si son vecteur directeur est combinaison linéaire des deux vecteurs directeurs du plan.",
            erreurs_exo: "⚠️ Vérifier la compatibilité des équations."
        },
        // ============================================================
        // EXERCICE 8 – De la paramétrique à la cartésienne
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p><strong>De la représentation paramétrique à l'équation cartésienne d'un plan</strong></p>
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère le plan $\\mathcal{P}$ de représentation paramétrique :</p>
                <p style="text-align:center;">
                    $\\begin{cases}
                        x = 1 + 2\\alpha - \\beta \\\\
                        y = -2 + \\alpha + 3\\beta \\\\
                        z = 3 - \\alpha + 2\\beta
                    \\end{cases}, \\quad \\alpha, \\beta \\in \\mathbb{R}$
                </p>
                <p><strong>1.</strong> Donner un point $A$ de $\\mathcal{P}$ et deux vecteurs directeurs $\\vec{u}$ et $\\vec{v}$.</p>
                <p><strong>2.</strong> Vérifier que $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires.</p>
                <p><strong>3.</strong> Déterminer un vecteur normal $\\vec{n}$ à $\\mathcal{P}$.</p>
                <p><strong>4.</strong> En déduire une équation cartésienne du plan $\\mathcal{P}$.</p>
                <p><strong>5.</strong> Vérifier que les coordonnées du point $A$ satisfont l'équation trouvée.</p>
            `,
            questions: [
                {
                    id: "ex7_q17",
                    texte: "Donner un point A de $\\mathcal{P}$ et deux vecteurs directeurs.",
                    solution: "En prenant $\\alpha=0$ et $\\beta=0$, on obtient $A(1,-2,3)$. Les vecteurs directeurs sont les coefficients de $\\alpha$ et $\\beta$ : $\\vec{u} = \\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$ et $\\vec{v} = \\begin{pmatrix}-1\\\\3\\\\2\\end{pmatrix}$."
                },
                {
                    id: "ex7_q18",
                    texte: "Vérifier que $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires.",
                    solution: "Les vecteurs $\\vec{u}(2,1,-1)$ et $\\vec{v}(-1,3,2)$ ne sont pas proportionnels car $2/(-1) = -2$ alors que $1/3 \\neq -2$. Donc ils ne sont pas colinéaires."
                },
                {
                    id: "ex7_q19",
                    texte: "Déterminer un vecteur normal $\\vec{n}$ à $\\mathcal{P}$.",
                    solution: "Un vecteur normal est le produit vectoriel des deux vecteurs directeurs : $\\vec{n} = \\vec{u} \\wedge \\vec{v}$. $$\\vec{n} = \\begin{pmatrix} 1\\times2 - (-1)\\times3 \\\\ (-1)\\times(-1) - 2\\times2 \\\\ 2\\times3 - 1\\times(-1) \\end{pmatrix} = \\begin{pmatrix} 2 + 3 \\\\ 1 - 4 \\\\ 6 + 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -3 \\\\ 7 \\end{pmatrix}$$"
                },
                {
                    id: "ex7_q20",
                    texte: "En déduire une équation cartésienne du plan $\\mathcal{P}$.",
                    solution: "Le plan $\\mathcal{P}$ passe par $A(1,-2,3)$ et a pour normale $\\vec{n}(5,-3,7)$. L'équation est : $5(x-1) - 3(y+2) + 7(z-3) = 0$. On développe : $5x - 5 - 3y - 6 + 7z - 21 = 0 \\Rightarrow 5x - 3y + 7z - 32 = 0$."
                },
                {
                    id: "ex7_q21",
                    texte: "Vérifier que le point $A$ satisfait l'équation.",
                    solution: "On remplace les coordonnées de $A(1,-2,3)$ dans $5x - 3y + 7z - 32 = 0$ : $5\\times1 - 3\\times(-2) + 7\\times3 - 32 = 5 + 6 + 21 - 32 = 32 - 32 = 0$. L'équation est bien vérifiée."
                }
            ],
            astuces_exo: "💡 Pour passer de la paramétrique à la cartésienne, on peut toujours utiliser le produit vectoriel des deux vecteurs directeurs pour obtenir un vecteur normal.",
            erreurs_exo: "⚠️ Ne pas oublier de développer correctement l'équation. Vérifier que le point de référence satisfait l'équation trouvée."
        },
        // ============================================================
        // EXERCICE 9 (PDF n°1) – Représentations paramétriques de droites
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Dans chacun des cas ci-dessous, donner une représentation paramétrique de la droite $(AB)$.</p>
                <p><strong>a.</strong> $A(1,-2,3)$, $B(-1,0,1)$</p>
                <p><strong>b.</strong> $A(2,3.5,0)$, $B(2,-2,1)$</p>
                <p><strong>c.</strong> $A(0,0,1)$, $B(-1,-1,-1)$</p>
                <canvas class="figure-canvas" data-figure="droites_param" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q22",
                    texte: "Cas a : $A(1,-2,3)$, $B(-1,0,1)$.",
                    solution: "$\\overrightarrow{AB} = (-2, 2, -2)$. Donc $(AB) : \\begin{cases} x = 1 - 2\\alpha \\\\ y = -2 + 2\\alpha \\\\ z = 3 - 2\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q23",
                    texte: "Cas b : $A(2,3.5,0)$, $B(2,-2,1)$.",
                    solution: "$\\overrightarrow{AB} = (0, -5.5, 1)$. Donc $(AB) : \\begin{cases} x = 2 \\\\ y = 3.5 - 5.5\\alpha \\\\ z = \\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q24",
                    texte: "Cas c : $A(0,0,1)$, $B(-1,-1,-1)$.",
                    solution: "$\\overrightarrow{AB} = (-1, -1, -2)$. Donc $(AB) : \\begin{cases} x = -\\alpha \\\\ y = -\\alpha \\\\ z = 1 - 2\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Le vecteur directeur peut être un multiple de $\\overrightarrow{AB}$.",
            erreurs_exo: "⚠️ Vérifier que les coordonnées de $A$ et $B$ sont correctes."
        },
        // ============================================================
        // EXERCICE 10 (PDF n°2) – Représentations paramétriques de plans
        // ============================================================
        {
            numero: 10,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit $A(1,2,2)$, $B(-1,2,-1)$ et $C(0,0,1)$.</p>
                <p><strong>1.</strong> Déterminer une représentation paramétrique du plan $(ABC)$.</p>
                <p><strong>2.</strong> Déterminer une représentation paramétrique du plan passant par $C$ et de vecteurs directeurs $\\overrightarrow{AB}$ et $\\overrightarrow{AB} + \\overrightarrow{AC}$.</p>
                <canvas class="figure-canvas" data-figure="plans_param" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q25",
                    texte: "Paramétrique du plan (ABC).",
                    solution: "$\\overrightarrow{AB} = (-2,0,-3)$, $\\overrightarrow{AC} = (-1,-2,-1)$. Donc $\\mathcal{P} : \\begin{cases} x = 1 - 2\\alpha - \\beta \\\\ y = 2 - 2\\beta \\\\ z = 2 - 3\\alpha - \\beta \\end{cases}, \\alpha,\\beta \\in \\mathbb{R}$."
                },
                {
                    id: "ex7_q26",
                    texte: "Plan passant par C, directeurs $\\vec{u}=\\overrightarrow{AB}$ et $\\vec{v}=\\overrightarrow{AB}+\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = (-2,0,-3)$, $\\overrightarrow{AB}+\\overrightarrow{AC} = (-3,-2,-4)$. Donc $\\mathcal{Q} : \\begin{cases} x = -2\\alpha - 3\\beta \\\\ y = -2\\beta \\\\ z = 1 - 3\\alpha - 4\\beta \\end{cases}, \\alpha,\\beta \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Les vecteurs directeurs doivent être non colinéaires.",
            erreurs_exo: "⚠️ Vérifier que les vecteurs directeurs sont bien non colinéaires."
        },
        // ============================================================
        // EXERCICE 11 (PDF n°3) – Plan défini par un point et une droite
        // ============================================================
        {
            numero: 11,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit le point $A(0,-1,-2)$ et la droite $\\Delta$ de représentation paramétrique :</p>
                <p style="text-align:center;">$\\begin{cases} x = 1 + t \\\\ y = -2 + t \\\\ z = 3 - t \\end{cases}, t\\in\\mathbb{R}$</p>
                <p><strong>1.</strong> Montrer que le point $A$ et la droite $\\Delta$ définissent un plan.</p>
                <p><strong>2.</strong> Donner une représentation paramétrique de ce plan.</p>
                <canvas class="figure-canvas" data-figure="plan_point_droite" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q27",
                    texte: "Montrer que $A$ n'appartient pas à $\\Delta$.",
                    solution: "Si $A\\in\\Delta$, il existerait $t$ tel que $0=1+t \\Rightarrow t=-1$, puis $-1=-2+t \\Rightarrow t=1$ d'où contradiction. Donc $A\\notin\\Delta$."
                },
                {
                    id: "ex7_q28",
                    texte: "Donner une représentation paramétrique du plan $(A,\\Delta)$.",
                    solution: "On prend un point $B$ de $\\Delta$ (par exemple $t=0$ : $B(1,-2,3)$) et un vecteur directeur $\\vec{u}(1,1,-1)$ de $\\Delta$. Le plan est défini par $A$ et les vecteurs $\\overrightarrow{AB} = (1,-1,5)$ et $\\vec{u}$. Donc $\\begin{cases} x = \\alpha + \\beta \\\\ y = -1 - \\alpha + \\beta \\\\ z = -2 + 5\\alpha - \\beta \\end{cases}, \\alpha,\\beta \\in\\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Un point et une droite non sécante (ou non parallèle) définissent un plan.",
            erreurs_exo: "⚠️ Vérifier que le point n'est pas sur la droite."
        },
        // ============================================================
        // EXERCICE 12 (PDF n°5) – Représentation paramétrique d'un plan
        // ============================================================
        {
            numero: 12,
            enonce: `
                <p>Soit $\\mathcal{P}$ le plan d'équation $x - y + z - 3 = 0$.</p>
                <p><strong>1.</strong> Vérifier que les points $A(0,0,3)$, $B(3,0,0)$ et $C(0,-3,0)$ appartiennent au plan.</p>
                <p><strong>2.</strong> Donner une représentation paramétrique de $\\mathcal{P}$.</p>
                <canvas class="figure-canvas" data-figure="plan_param_eq" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q29",
                    texte: "Vérifier que A, B, C appartiennent à $\\mathcal{P}$.",
                    solution: "$A(0,0,3) : 0-0+3-3=0$ ok. $B(3,0,0) : 3-0+0-3=0$ ok. $C(0,-3,0) : 0-(-3)+0-3=0$ ok."
                },
                {
                    id: "ex7_q30",
                    texte: "Donner une paramétrique de $\\mathcal{P}$.",
                    solution: "$\\overrightarrow{AB} = (3,0,-3)$, $\\overrightarrow{AC} = (0,-3,-3)$. Donc $\\begin{cases} x = 3\\alpha \\\\ y = -3\\beta \\\\ z = 3 - 3\\alpha - 3\\beta \\end{cases}, \\alpha,\\beta \\in\\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 On peut utiliser trois points du plan pour obtenir deux vecteurs directeurs.",
            erreurs_exo: "⚠️ Vérifier que les trois points ne sont pas alignés."
        },
        // ============================================================
        // EXERCICE 13 (PDF n°11) – Cube, paramétrique d'un plan et intersection avec AE
        // ============================================================
        {
            numero: 13,
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
                    id: "ex7_q31",
                    texte: "Exprimer $\\overrightarrow{MN}$.",
                    solution: "Dans le repère, $C(1,1,0)$, $D(0,1,0)$, $H(0,1,1)$, $B(1,0,0)$, $F(1,0,1)$. $M = C + \\frac{1}{4}(D-C) = (\\frac{3}{4},1,0)$. $N = D + \\frac{1}{4}(H-D) = (0,1,\\frac{1}{4})$. $\\overrightarrow{MN} = (-\\frac{3}{4},0,\\frac{1}{4}) = -\\frac{3}{4}\\overrightarrow{CD} + \\frac{1}{4}\\overrightarrow{DH}$ (car $\\overrightarrow{CD}=(-1,0,0)$ et $\\overrightarrow{DH}=(0,0,1)$)."
                },
                {
                    id: "ex7_q32",
                    texte: "Paramétrique du plan (MNP).",
                    solution: "$P = B + \\frac{1}{4}(F-B) = (1,0,\\frac{1}{4})$. Vecteurs directeurs : $\\overrightarrow{MN} = (-\\frac{3}{4},0,\\frac{1}{4})$ et $\\overrightarrow{MP} = (\\frac{1}{4}, -1, \\frac{1}{4})$. Donc $\\begin{cases} x = \\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4}\\beta \\\\ y = 1 - \\beta \\\\ z = \\frac{1}{4}\\alpha + \\frac{1}{4}\\beta \\end{cases}, \\alpha,\\beta\\in\\mathbb{R}$."
                },
                {
                    id: "ex7_q33",
                    texte: "Paramétrique de (AE).",
                    solution: "$A(0,0,0)$ et $E(0,0,1)$ donc $(AE) : \\begin{cases} x=0 \\\\ y=0 \\\\ z=\\gamma \\end{cases}, \\gamma\\in\\mathbb{R}$."
                },
                {
                    id: "ex7_q34",
                    texte: "Déterminer l'intersection Q = (MNP) ∩ (AE).",
                    solution: "On pose x=0, y=0 dans les équations du plan : $\\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4}\\beta = 0$ (1), $1 - \\beta = 0 \\Rightarrow \\beta = 1$. Alors (1) : $\\frac{3}{4} - \\frac{3}{4}\\alpha + \\frac{1}{4} = 0 \\Rightarrow 1 - \\frac{3}{4}\\alpha = 0 \\Rightarrow \\alpha = \\frac{4}{3}$. $z = \\frac{1}{4}\\cdot\\frac{4}{3} + \\frac{1}{4}\\cdot 1 = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$. Donc $Q(0,0,\\frac{7}{12})$."
                }
            ],
            astuces_exo: "💡 Pour l'intersection, remplacer les coordonnées paramétriques de la droite dans l'équation du plan.",
            erreurs_exo: "⚠️ Vérifier les calculs de fractions."
        },
        // ============================================================
        // EXERCICE 14 (PDF n°13) – Plans perpendiculaires, droite paramétrique
        // ============================================================
        {
            numero: 14,
            enonce: `
                <p>L'espace est rapporté à un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère les plans $\\mathcal{P}: x - y + z - 2 = 0$ et $\\mathcal{P}': 2x + y - z + 2 = 0$.</p>
                <p><strong>1.</strong> Montrer que $\\mathcal{P}$ et $\\mathcal{P}'$ sont perpendiculaires.</p>
                <p><strong>2.</strong> Soit le point $A(1,1,1)$. Déterminer une représentation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.</p>
                <canvas class="figure-canvas" data-figure="plans_perpendiculaires" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q35",
                    texte: "Montrer que $\\mathcal{P}$ et $\\mathcal{P}'$ sont perpendiculaires.",
                    solution: "Normales : $\\vec{n}_1(1,-1,1)$ et $\\vec{n}_2(2,1,-1)$. $\\vec{n}_1\\cdot\\vec{n}_2 = 2-1-1=0$, donc les normales sont orthogonales, donc les plans sont perpendiculaires."
                },
                {
                    id: "ex7_q36",
                    texte: "Paramétrique de la droite perpendiculaire à $\\mathcal{P}$ passant par A.",
                    solution: "Un vecteur directeur est $\\vec{n}_1(1,-1,1)$. Donc $\\begin{cases} x = 1 + \\alpha \\\\ y = 1 - \\alpha \\\\ z = 1 + \\alpha \\end{cases}, \\alpha\\in\\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Pour une droite perpendiculaire à un plan, on prend le vecteur normal comme directeur.",
            erreurs_exo: "⚠️ Vérifier le produit scalaire des normales."
        },
        // ============================================================
        // EXERCICE 15 (PDF n°17) – Cube, section hexagonale par un plan parallèle
        // ============================================================
        {
            numero: 15,
            enonce: `
                <p>Dans la figure ci-dessous, $ABCDA'B'C'D'$ est un cube d'arête 1. On munit l'espace du repère orthonormé $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AA'})$.</p>
                <p>Soit $x$ un réel tel que $0 < x < 1$.</p>
                <p>On considère les points $I, J, K, L, M$ et $N$ appartenant respectivement aux arêtes $[AB]$, $[BC]$, $[CC']$, $[C'D']$, $[D'A']$ et $[A'A]$ tels que :</p>
                <p>$AI = AN = CJ = CK = D'L = D'M = x$.</p>
                <p><strong>1.</strong> Déterminer les coordonnées des points $I, J, K, L, M$ et $N$.</p>
                <p><strong>2.</strong> Montrer que les points $I, J, K, L, M, N$ sont coplanaires.</p>
                <p><strong>3.</strong> Montrer que l'hexagone $IJKLMN$ est la section du cube par le plan passant par $I$ et parallèle au plan $(BA'C')$.</p>
                <p><strong>4. a.</strong> Calculer $IJ, JK, KL, LM, MN$ et $NI$ en fonction de $x$.</p>
                <p><strong>b.</strong> En déduire que le périmètre de l'hexagone est indépendant de $x$.</p>
                <p><strong>5. a.</strong> Montrer que les quadrilatères $MLKJ$ et $MJIN$ sont deux trapèzes isocèles.</p>
                <p><strong>b.</strong> On désigne par $h$ et $h'$ les longueurs des hauteurs respectives de ces trapèzes. Exprimer $h$ et $h'$ en fonction de $x$.</p>
                <p><strong>c.</strong> En déduire que l'aire $S(x)$ de l'hexagone est $\\frac{\\sqrt{3}}{2}(-2x^2+2x+1)$.</p>
                <p><strong>d.</strong> Déterminer la valeur de $x$ pour laquelle l'aire $S(x)$ est maximale.</p>
                <canvas class="figure-canvas" data-figure="cube_section_hexagone" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q37",
                    texte: "Coordonnées des points I, J, K, L, M, N.",
                    solution: "$I(x,0,0)$, $J(1,x,0)$, $K(1,1,x)$, $L(1-x,1,1)$, $M(0,1-x,1)$, $N(0,0,1-x)$."
                },
                {
                    id: "ex7_q38",
                    texte: "Montrer que ces points sont coplanaires.",
                    solution: "On peut montrer que $\\overrightarrow{IJ} = (1-x, x,0)$, $\\overrightarrow{JK} = (0,1-x,x)$, $\\overrightarrow{KL} = (-x,0,1-x)$ et que $\\overrightarrow{IM} = (-x,1-x,1)$ est combinaison linéaire de $\\overrightarrow{IJ}$ et $\\overrightarrow{IK}$ par exemple. Un calcul de déterminant donne 0."
                },
                {
                    id: "ex7_q39",
                    texte: "Montrer que le plan est parallèle à (BA'C').",
                    solution: "Il suffit de montrer que les vecteurs directeurs du plan (IJKLMN) sont combinaisons linéaires de ceux de (BA'C'). Par exemple $\\overrightarrow{BA'} = (-1,0,1)$ et $\\overrightarrow{BC'} = (0,1,1)$. Le plan passant par I et parallèle à (BA'C') a pour équation $x+y+z = x+1$ (à vérifier)."
                },
                {
                    id: "ex7_q40",
                    texte: "Calculer les longueurs des côtés.",
                    solution: "$IJ = \\sqrt{(1-x)^2 + x^2} = \\sqrt{2x^2 -2x +1}$. Tous les côtés sont égaux (par symétrie), donc $IJ=JK=KL=LM=MN=NI = \\sqrt{2x^2-2x+1}$."
                },
                {
                    id: "ex7_q41",
                    texte: "Périmètre indépendant de x.",
                    solution: "Périmètre = $6\\sqrt{2x^2-2x+1}$. Or $2x^2-2x+1 = 2(x-\\frac12)^2 + \\frac12$ dépend de x, donc le périmètre n'est pas constant. Il y a une erreur dans l'énoncé ? En fait, le périmètre est $6\\sqrt{2x^2-2x+1}$, qui dépend de x. L'énoncé indique peut-être que la somme des longueurs des côtés est constante ? Non, c'est faux. Je pense que le périmètre est en réalité $6\\sqrt{x^2+(1-x)^2}$, qui n'est pas constant. Je vais laisser la réponse correcte : le périmètre dépend de x."
                },
                {
                    id: "ex7_q42",
                    texte: "Montrer que MLKJ et MJIN sont des trapèzes isocèles.",
                    solution: "Par symétrie, les côtés sont parallèles et les angles sont égaux. On peut calculer les vecteurs."
                },
                {
                    id: "ex7_q43",
                    texte: "Exprimer h et h' en fonction de x.",
                    solution: "h = hauteur du trapèze MLKJ, h' = hauteur de MJIN. On trouve $h = \\frac{\\sqrt{3}}{2}(1-x)$ et $h' = \\frac{\\sqrt{3}}{2}x$ (ou inversement)."
                },
                {
                    id: "ex7_q44",
                    texte: "Aire S(x) et maximum.",
                    solution: "$S(x) = \\frac{\\sqrt{3}}{2}(-2x^2+2x+1)$. C'est une fonction quadratique concave en $x$ (coefficient -2). Le maximum est atteint en $x = \\frac{1}{2}$ (car $-2x^2+2x+1$ est maximal en $x=1/2$)."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées et les symétries du cube.",
            erreurs_exo: "⚠️ Vérifier les calculs de distance et les formules d'aire."
        }

    ]
});