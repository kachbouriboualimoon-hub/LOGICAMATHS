// chapitre4.js – Déterminant de trois vecteurs
// Extrait du PDF "geometrie espace.pdf" – pages 11, 12 et 39

data.chapitres.push({
    id: 4,
    titre: "Déterminant de trois vecteurs",
    rappel: `
        <p><strong>Déterminant de trois vecteurs :</strong> Soit $\\mathcal{S} = (\\vec{i},\\vec{j},\\vec{k})$ une base de l'espace et $(\\vec{u},\\vec{v},\\vec{w})$ un triplet de vecteurs tels que :</p>
        <p style="text-align:center;">
            $\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$, 
            $\\vec{v}\\begin{pmatrix}a'\\\\b'\\\\c'\\end{pmatrix}$,
            $\\vec{w}\\begin{pmatrix}a''\\\\b''\\\\c''\\end{pmatrix}$
        </p>
        <p>Le déterminant de $(\\vec{u},\\vec{v},\\vec{w})$ dans la base $\\mathcal{S}$ est le réel :</p>
        <p style="text-align:center; font-size:1.1rem;">
            $\\det_{\\mathcal{S}}(\\vec{u},\\vec{v},\\vec{w}) = 
            \\begin{vmatrix}
                a & a' & a'' \\\\
                b & b' & b'' \\\\
                c & c' & c''
            \\end{vmatrix}
            = a(b'c'' - c'b'') - b(a'c'' - c'a'') + c(a'b'' - b'a'')$
        </p>
        
        <p><strong>Coplanarité :</strong> Les points $A,B,C,D$ sont coplanaires si et seulement si le déterminant des vecteurs $(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ est nul.</p>
        
        <p><strong>Base :</strong> Le triplet $(\\vec{u},\\vec{v},\\vec{w})$ est une base de l'espace si et seulement si $\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$.</p>
        
        <p><strong>Volume du parallélépipède :</strong> Dans un repère orthonormé, le volume du parallélépipède construit sur les vecteurs $\\vec{u},\\vec{v},\\vec{w}$ est $|\\det(\\vec{u},\\vec{v},\\vec{w})|$.</p>

        <p><strong>Volume du tétraèdre :</strong> Soit $ABCD$ un tétraèdre. Son volume est donné par :</p>
        <p style="text-align:center; font-size:1.2rem;">
            $V_{\\text{tétraèdre}} = \\dfrac{1}{6} \\left| \\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) \\right|$
        </p>
        <p>On peut choisir n'importe quel sommet comme origine des trois vecteurs.</p>

        <p><strong>Équation cartésienne d'un plan par déterminant :</strong> Soit $A(x_0,y_0,z_0)$ un point et $\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$, $\\vec{v}\\begin{pmatrix}a'\\\\b'\\\\c'\\end{pmatrix}$ deux vecteurs directeurs non colinéaires. Le plan $\\mathcal{P}(A,\\vec{u},\\vec{v})$ a pour équation :</p>
        <p style="text-align:center; font-size:1.1rem;">
            $\\det(\\overrightarrow{AM},\\vec{u},\\vec{v}) = 0$
        </p>
        <p>où $M(x,y,z)$ est un point quelconque du plan. Cette équation se développe en $ax+by+cz+d=0$.</p>

        <p><strong>Position relative d'une droite et d'un plan :</strong> Soit $\\mathcal{D}(A,\\vec{u})$ une droite et $\\mathcal{P}(B,\\vec{v},\\vec{w})$ un plan.</p>
        <ul>
            <li>Si $\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$, alors $\\mathcal{D}$ et $\\mathcal{P}$ sont sécants (en un point).</li>
            <li>Si $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$ et $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w}) \\neq 0$, alors $\\mathcal{D}$ est strictement parallèle à $\\mathcal{P}$.</li>
            <li>Si $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$ et $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w}) = 0$, alors $\\mathcal{D}$ est incluse dans $\\mathcal{P}$.</li>
        </ul>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\mathcal{B} = (\\vec{i},\\vec{j},\\vec{k})$ une base de l'espace. Le déterminant de trois vecteurs dans cette base est nul si et seulement si ces trois vecteurs sont linéairement dépendants (famille liée).
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Le triplet $(\\vec{u},\\vec{v},\\vec{w})$ est une base de l'espace ssi $\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Les points $A,B,C,D$ sont coplanaires ssi $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) = 0$.
        </div>
        <div class="theoreme-block">
            <strong>Volume :</strong> Le volume d'un tétraèdre $ABCD$ est $V = \\dfrac{1}{6} |\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Le plan passant par $A(x_0,y_0,z_0)$ de vecteurs directeurs $\\vec{u}(a,b,c)$ et $\\vec{v}(a',b',c')$ a pour équation :
            <p style="text-align:center; font-size:1.0rem;">
                $\\begin{vmatrix} x-x_0 & a & a' \\\\ y-y_0 & b & b' \\\\ z-z_0 & c & c' \\end{vmatrix} = 0$
            </p>
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $\\mathcal{D}(A,\\vec{u})$ une droite et $\\mathcal{P}(B,\\vec{v},\\vec{w})$ un plan. Alors :
            <ul>
                <li>$\\mathcal{D} \\parallel \\mathcal{P} \\iff \\det(\\vec{u},\\vec{v},\\vec{w}) = 0$</li>
                <li>$\\mathcal{D} \\subset \\mathcal{P} \\iff \\det(\\vec{u},\\vec{v},\\vec{w}) = 0$ et $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w}) = 0$</li>
                <li>$\\mathcal{D}$ et $\\mathcal{P}$ sont sécants $\\iff \\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Remarque :</strong> Le déterminant ne dépend pas de la base choisie (à un facteur multiplicatif près). Si on change de base, le déterminant est multiplié par le déterminant de la matrice de changement de base.
        </div>
        <div class="theoreme-block">
            <strong>Propriété :</strong> Le déterminant change de signe si on permute deux vecteurs : $\\det(\\vec{v},\\vec{u},\\vec{w}) = -\\det(\\vec{u},\\vec{v},\\vec{w})$.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer un déterminant, on utilise la formule de développement selon la première ligne ou la règle de Sarrus (pour les matrices 3×3).
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que trois vecteurs forment une base, on calcule leur déterminant et on vérifie qu'il est non nul.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que quatre points sont coplanaires, on calcule le déterminant des vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ et on vérifie qu'il est nul.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer le volume d'un tétraèdre $ABCD$, on choisit un sommet (par exemple $A$), on calcule les trois vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, $\\overrightarrow{AD}$, on calcule la valeur absolue de leur déterminant, puis on divise par 6.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour calculer le volume d'un parallélépipède défini par trois vecteurs issus d'un même point, on prend la valeur absolue du déterminant de ces trois vecteurs.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour déterminer l'équation cartésienne d'un plan passant par trois points $A,B,C$, on calcule le déterminant $\\det(\\overrightarrow{AM},\\overrightarrow{AB},\\overrightarrow{AC}) = 0$ avec $M(x,y,z)$. On développe pour obtenir $ax+by+cz+d=0$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour étudier la position relative d'une droite $\\mathcal{D}(A,\\vec{u})$ et d'un plan $\\mathcal{P}(B,\\vec{v},\\vec{w})$, on calcule $\\det(\\vec{u},\\vec{v},\\vec{w})$ et $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w})$. On utilise le tableau de synthèse ci-dessus.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour calculer rapidement un déterminant, on peut utiliser la règle de Sarrus : répéter les deux premières colonnes à droite et faire la différence des produits.</div>
        <div class="astuce-box">💡 Dans un cube, les arêtes issues d'un sommet forment une base, donc leur déterminant est non nul (et vaut $\\pm 1$ si le cube est unitaire et le repère orthonormé).</div>
        <div class="astuce-box">💡 Si on a $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$, cela signifie que les vecteurs sont coplanaires (ils sont dans un même plan).</div>
        <div class="astuce-box">💡 Le volume d'un tétraèdre est égal au sixième du volume du parallélépipède construit sur les trois arêtes issues d'un même sommet.</div>
        <div class="astuce-box">💡 Pour trouver l'équation d'un plan, le déterminant est une méthode puissante qui évite de résoudre un système.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre déterminant de vecteurs et déterminant de points. Le déterminant se calcule sur des vecteurs.</div>
        <div class="erreur-box">⚠️ Attention aux signes dans la formule de développement : $a(b'c'' - c'b'') - b(a'c'' - c'a'') + c(a'b'' - b'a'')$.</div>
        <div class="erreur-box">⚠️ Oublier que si $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$, les trois vecteurs peuvent être coplanaires ou deux d'entre eux colinéaires.</div>
        <div class="erreur-box">⚠️ Pour le volume d'un tétraèdre, ne pas oublier le facteur $\\frac{1}{6}$ et la valeur absolue.</div>
        <div class="erreur-box">⚠️ Ne pas confondre la condition de coplanarité ($\\det = 0$) avec la condition pour être une base ($\\det \\neq 0$).</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Le déterminant de $(\\vec{i},\\vec{j},\\vec{k})$ dans la base $(\\vec{i},\\vec{j},\\vec{k})$ est égal à :",
                options: ["0", "1", "-1", "2"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Trois vecteurs $\\vec{u},\\vec{v},\\vec{w}$ forment une base si et seulement si :",
                options: ["$\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$", "$\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$", "$\\vec{u}\\cdot\\vec{v}=0$", "$\\vec{u}$, $\\vec{v}$, $\\vec{w}$ sont non nuls"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Le volume d'un tétraèdre $ABCD$ est donné par :",
                options: ["$\\frac{1}{2}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$\\frac{1}{6}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$", "$\\frac{1}{3}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Pour qu'une droite $\\mathcal{D}(A,\\vec{u})$ soit parallèle à un plan $\\mathcal{P}(B,\\vec{v},\\vec{w})$, il faut :",
                options: ["$\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$", "$\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$", "$\\vec{u}\\cdot\\vec{v}=0$", "$\\det(\\overrightarrow{AB},\\vec{v},\\vec{w}) = 0$"],
                correct: 0
            },
            {
                type: "vf",
                text: "Si $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) = 0$, alors les points A, B, C, D sont coplanaires.",
                correct: 1
            },
            {
                type: "vf",
                text: "Le volume d'un parallélépipède est la valeur absolue du déterminant des trois vecteurs qui le définissent.",
                correct: 1
            }
        ]
    },
    exercices: [
        {
            numero: 1,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube d'arête 1. On munit l'espace du repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$ et on note $\\mathcal{B}$ la base $(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p>Calculer les déterminants suivants :</p>
                <ul>
                    <li>$\\det_{\\mathcal{B}}(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AH})$</li>
                    <li>$\\det_{\\mathcal{B}}(\\overrightarrow{AD},\\overrightarrow{AF},\\overrightarrow{AG})$</li>
                    <li>$\\det_{\\mathcal{B}}(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AC})$</li>
                </ul>
                <p>(D'après l'Activité 1 page 31)</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q1",
                    texte: "Déterminer les coordonnées des sommets du cube dans le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.",
                    solution: "A(0,0,0), B(1,0,0), C(1,1,0), D(0,1,0), E(0,0,1), F(1,0,1), G(1,1,1), H(0,1,1)."
                },
                {
                    id: "ex4_q2",
                    texte: "Calculer $\\det_{\\mathcal{B}}(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AH})$.",
                    solution: "$\\overrightarrow{AB} = (1,0,0)$, $\\overrightarrow{AC} = (1,1,0)$, $\\overrightarrow{AH} = (0,1,1)$. Le déterminant est : $\\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{vmatrix} = 1\\times(1\\times1 - 1\\times0) - 1\\times(0\\times1 - 1\\times0) + 0 = 1$."
                },
                {
                    id: "ex4_q3",
                    texte: "Calculer $\\det_{\\mathcal{B}}(\\overrightarrow{AD},\\overrightarrow{AF},\\overrightarrow{AG})$.",
                    solution: "$\\overrightarrow{AD} = (0,1,0)$, $\\overrightarrow{AF} = (1,0,1)$, $\\overrightarrow{AG} = (1,1,1)$. Le déterminant est : $\\begin{vmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix} = 0 - 1\\times(1\\times1 - 1\\times0) + 1\\times(1\\times1 - 0\\times0) = -1 + 1 = 0$."
                },
                {
                    id: "ex4_q4",
                    texte: "Calculer $\\det_{\\mathcal{B}}(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AC})$.",
                    solution: "$\\overrightarrow{AB} = (1,0,0)$, $\\overrightarrow{AD} = (0,1,0)$, $\\overrightarrow{AC} = (1,1,0)$. Le déterminant est : $\\begin{vmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{vmatrix} = 0$ car la troisième ligne est nulle (ou car les vecteurs sont coplanaires)."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées des sommets du cube dans la base donnée.",
            erreurs_exo: "⚠️ Attention à l'ordre des vecteurs dans le déterminant."
        },
        {
            numero: 2,
            enonce: `
                <p>L'espace est muni d'un repère $(O,\\vec{u},\\vec{v},\\vec{w})$ et $\\mathcal{B}$ désigne la base $(\\vec{u},\\vec{v},\\vec{w})$.</p>
                <p>On considère les points :</p>
                <ul>
                    <li>$A(1,2,0)$</li>
                    <li>$B(0,-1,1)$</li>
                    <li>$C(-1,0,2)$</li>
                    <li>$D(0,1,0)$</li>
                    <li>$E(1,2,-2)$</li>
                </ul>
                <p>1. Les points A, B, C et D sont-ils coplanaires ?</p>
                <p>2. Les points B, C, D et E sont-ils coplanaires ?</p>
                <p>(D'après l'Activité 2 page 31)</p>
            `,
            questions: [
                {
                    id: "ex4_q5",
                    texte: "Calculer $\\det_{\\mathcal{B}}(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-1,-3,1)$, $\\overrightarrow{AC} = C - A = (-2,-2,2)$, $\\overrightarrow{AD} = D - A = (-1,-1,0)$. Le déterminant est : $\\begin{vmatrix} -1 & -2 & -1 \\\\ -3 & -2 & -1 \\\\ 1 & 2 & 0 \\end{vmatrix}$. Calculons : $-1\\times((-2)\\times0 - (-1)\\times2) - (-2)\\times((-3)\\times0 - (-1)\\times1) + (-1)\\times((-3)\\times2 - (-2)\\times1) = -1\\times(0+2) + 2\\times(0+1) - 1\\times(-6+2) = -2 + 2 - (-4) = -2 + 2 + 4 = 4$. Donc $\\det = 4 \\neq 0$. Les points ne sont pas coplanaires."
                },
                {
                    id: "ex4_q6",
                    texte: "Calculer $\\det_{\\mathcal{B}}(\\overrightarrow{BC},\\overrightarrow{BD},\\overrightarrow{BE})$.",
                    solution: "$\\overrightarrow{BC} = C - B = (-1,1,1)$, $\\overrightarrow{BD} = D - B = (1,2,-1)$, $\\overrightarrow{BE} = E - B = (1,3,-3)$. Le déterminant est : $\\begin{vmatrix} -1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & -1 & -3 \\end{vmatrix}$. Calculons : $-1\\times(2\\times(-3) - 3\\times(-1)) - 1\\times(1\\times(-3) - 3\\times1) + 1\\times(1\\times(-1) - 2\\times1) = -1\\times(-6+3) - 1\\times(-3-3) + 1\\times(-1-2) = -1\\times(-3) - 1\\times(-6) + 1\\times(-3) = 3 + 6 - 3 = 6 \\neq 0$. Les points B, C, D, E ne sont pas coplanaires."
                }
            ],
            astuces_exo: "💡 Le déterminant de trois vecteurs est nul si et seulement si les points correspondants sont coplanaires.",
            erreurs_exo: "⚠️ Bien choisir l'origine des vecteurs (même point pour les trois vecteurs)."
        },
        {
            numero: 3,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les vecteurs $\\vec{u}\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}$, $\\vec{v}\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix}3\\\\0\\\\1\\end{pmatrix}$.</p>
                <p>1. Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.</p>
                <p>2. La famille $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est-elle une base de l'espace ?</p>
            `,
            questions: [
                {
                    id: "ex4_q7",
                    texte: "Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.",
                    solution: "$\\det = \\begin{vmatrix} 1 & 2 & 3 \\\\ -1 & 1 & 0 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1\\times(1\\times1 - 0\\times(-1)) - 2\\times((-1)\\times1 - 0\\times2) + 3\\times((-1)\\times(-1) - 1\\times2) = 1\\times1 - 2\\times(-1) + 3\\times(1-2) = 1 + 2 - 3 = 0$."
                },
                {
                    id: "ex4_q8",
                    texte: "La famille $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est-elle une base ?",
                    solution: "Non, car $\\det(\\vec{u},\\vec{v},\\vec{w}) = 0$. Les trois vecteurs sont coplanaires (linéairement dépendants)."
                }
            ],
            astuces_exo: "💡 Si le déterminant est nul, les vecteurs sont liés. S'il est non nul, ils forment une base.",
            erreurs_exo: "⚠️ Vérifier les calculs intermédiaires."
        },
        {
            numero: 4,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,0,2)$, $B(2,1,0)$, $C(0,2,1)$ et $D(1,1,1)$.</p>
                <p>1. Calculer le déterminant des vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.</p>
                <p>2. En déduire la position relative des points A, B, C et D.</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q9",
                    texte: "Calculer les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (1,1,-2)$, $\\overrightarrow{AC} = C - A = (-1,2,-1)$, $\\overrightarrow{AD} = D - A = (0,1,-1)$."
                },
                {
                    id: "ex4_q10",
                    texte: "Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.",
                    solution: "$\\det = \\begin{vmatrix} 1 & -1 & 0 \\\\ 1 & 2 & 1 \\\\ -2 & -1 & -1 \\end{vmatrix} = 1\\times(2\\times(-1) - 1\\times(-1)) - (-1)\\times(1\\times(-1) - 1\\times(-2)) + 0 = 1\\times(-2+1) + 1\\times(-1+2) = -1 + 1 = 0$."
                },
                {
                    id: "ex4_q11",
                    texte: "Que peut-on en déduire ?",
                    solution: "Comme $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) = 0$, les points A, B, C et D sont coplanaires."
                }
            ],
            astuces_exo: "💡 Des points coplanaires peuvent être représentés dans un même plan.",
            erreurs_exo: "⚠️ Bien identifier les vecteurs à partir du même point."
        },
        {
            numero: 5,
            enonce: `
                <p>Soit $\\mathcal{B} = (\\vec{i},\\vec{j},\\vec{k})$ une base de l'espace.</p>
                <p>On considère les vecteurs $\\vec{u} = 2\\vec{i} - \\vec{j} + \\vec{k}$, $\\vec{v} = \\vec{i} + 3\\vec{j} - 2\\vec{k}$ et $\\vec{w} = -3\\vec{i} + 2\\vec{j} - \\vec{k}$.</p>
                <p>1. Calculer $\\det_{\\mathcal{B}}(\\vec{u},\\vec{v},\\vec{w})$.</p>
                <p>2. Les vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ forment-ils une base de l'espace ?</p>
            `,
            questions: [
                {
                    id: "ex4_q12",
                    texte: "Calculer le déterminant.",
                    solution: "Les composantes sont : $\\vec{u}(2,-1,1)$, $\\vec{v}(1,3,-2)$, $\\vec{w}(-3,2,-1)$. $\\det = \\begin{vmatrix} 2 & 1 & -3 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & -1 \\end{vmatrix} = 2\\times(3\\times(-1) - 2\\times(-2)) - 1\\times((-1)\\times(-1) - 2\\times1) + (-3)\\times((-1)\\times(-2) - 3\\times1) = 2\\times(-3+4) - 1\\times(1-2) - 3\\times(2-3) = 2\\times1 - 1\\times(-1) - 3\\times(-1) = 2 + 1 + 3 = 6$."
                },
                {
                    id: "ex4_q13",
                    texte: "Les vecteurs forment-ils une base ?",
                    solution: "Oui, car $\\det(\\vec{u},\\vec{v},\\vec{w}) = 6 \\neq 0$. Les trois vecteurs sont linéairement indépendants."
                }
            ],
            astuces_exo: "💡 Un déterminant non nul signifie que les trois vecteurs forment une base.",
            erreurs_exo: "⚠️ Vérifier la règle de Sarrus."
        },
        {
            numero: 6,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p><strong>Partie A :</strong> Soit les vecteurs $\\vec{u}(2, -1, 1)$, $\\vec{v}(1, 3, -1)$ et $\\vec{w}(0, 2, 4)$.</p>
                <p>1. Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.</p>
                <p>2. En déduire le volume du parallélépipède construit sur $\\vec{u}, \\vec{v}, \\vec{w}$.</p>
                <p><strong>Partie B :</strong> Soit les points $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$ et $D(1,1,2)$.</p>
                <p>3. Montrer que $A,B,C,D$ ne sont pas coplanaires.</p>
                <p>4. Calculer le volume du tétraèdre $ABCD$.</p>
            `,
            questions: [
                {
                    id: "ex4_q14",
                    texte: "Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.",
                    solution: "$\\det = \\begin{vmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -1 & 4 \\end{vmatrix} = 2\\times(3\\times4 - 2\\times(-1)) - 1\\times((-1)\\times4 - 2\\times1) + 0 = 2\\times(12+2) - 1\\times(-4-2) = 2\\times14 - 1\\times(-6) = 28 + 6 = 34$."
                },
                {
                    id: "ex4_q15",
                    texte: "En déduire le volume du parallélépipède.",
                    solution: "$V_{\\text{parallélépipède}} = |\\det| = 34$ unités de volume."
                },
                {
                    id: "ex4_q16",
                    texte: "Montrer que $A,B,C,D$ ne sont pas coplanaires.",
                    solution: "$\\overrightarrow{AB} = (-1, 2, 0)$, $\\overrightarrow{AC} = (-1, 0, 3)$, $\\overrightarrow{AD} = (0, 1, 2)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 2 \\end{vmatrix} = -1\\times(0\\times2 - 1\\times3) - (-1)\\times(2\\times2 - 1\\times0) + 0 = -1\\times(-3) + 1\\times(4) = 3 + 4 = 7 \\neq 0$. Donc les points ne sont pas coplanaires."
                },
                {
                    id: "ex4_q17",
                    texte: "Calculer le volume du tétraèdre $ABCD$.",
                    solution: "$V_{\\text{tétraèdre}} = \\dfrac{1}{6}\\times|7| = \\dfrac{7}{6}$ unités de volume."
                }
            ],
            astuces_exo: "💡 Le volume du tétraèdre est le sixième du déterminant des trois vecteurs issus d'un même sommet.",
            erreurs_exo: "⚠️ Ne pas oublier la valeur absolue et le facteur $\\frac{1}{6}$."
        },
        {
            numero: 7,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1, 2, 0)$, $B(3, 0, 1)$, $C(-1, 1, 2)$ et $D(0, 3, 2)$.</p>
                <p>1. Calculer les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.</p>
                <p>2. Calculer le déterminant de ces trois vecteurs.</p>
                <p>3. En déduire le volume du tétraèdre $ABCD$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q18",
                    texte: "Calculer $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (2, -2, 1)$, $\\overrightarrow{AC} = C - A = (-2, -1, 2)$, $\\overrightarrow{AD} = D - A = (-1, 1, 2)$."
                },
                {
                    id: "ex4_q19",
                    texte: "Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$.",
                    solution: "$\\det = \\begin{vmatrix} 2 & -2 & -1 \\\\ -2 & -1 & 1 \\\\ 1 & 2 & 2 \\end{vmatrix} = 2\\times((-1)\\times2 - 1\\times2) - (-2)\\times((-2)\\times2 - 1\\times1) + (-1)\\times((-2)\\times2 - (-1)\\times1) = 2\\times(-2-2) + 2\\times(-4-1) - 1\\times(-4+1) = 2\\times(-4) + 2\\times(-5) - 1\\times(-3) = -8 -10 + 3 = -15$."
                },
                {
                    id: "ex4_q20",
                    texte: "Calculer le volume du tétraèdre.",
                    solution: "$V = \\dfrac{1}{6} \\times |-15| = \\dfrac{15}{6} = \\dfrac{5}{2}$ unités de volume."
                }
            ],
            astuces_exo: "💡 Choisir le sommet A comme origine des trois vecteurs.",
            erreurs_exo: "⚠️ Vérifier les calculs de coordonnées."
        },
        {
            numero: 8,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$ et $D(1, 1, 1)$.</p>
                <p><strong>1. (Chapitre 3)</strong> Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.</p>
                <p><strong>2. (Chapitre 1)</strong> Montrer que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires.</p>
                <p><strong>3. (Chapitre 4)</strong> Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ et en déduire le volume $V$ du tétraèdre $ABCD$.</p>
                <p><strong>4. (Chapitre 3)</strong> Déterminer l'aire du triangle $ABC$ (utiliser la formule $\\mathcal{A} = \\frac{1}{2}\\sqrt{\\|\\overrightarrow{AB}\\|^2\\|\\overrightarrow{AC}\\|^2 - (\\overrightarrow{AB}\\cdot\\overrightarrow{AC})^2}$).</p>
                <p><strong>5. (Chapitre 4)</strong> En déduire la hauteur $h$ issue de $D$ dans le tétraèdre $ABCD$ (rappel : $V = \\frac{1}{3} \\times \\text{Aire}_{\\text{base}} \\times h$).</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q21",
                    texte: "(Ch.3) Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = (-1, 2, 0)$, $\\overrightarrow{AC} = (-1, 0, 3)$. Le produit scalaire est : $(-1)\\times(-1) + 2\\times0 + 0\\times3 = 1 + 0 + 0 = 1$."
                },
                {
                    id: "ex4_q22",
                    texte: "(Ch.1) Montrer que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires.",
                    solution: "Deux vecteurs sont colinéaires si leurs coordonnées sont proportionnelles. Ici $\\overrightarrow{AB}(-1,2,0)$ et $\\overrightarrow{AC}(-1,0,3)$. On a $-1/-1 = 1$ mais $2/0$ n'est pas défini (car $2 \\neq 0$). Ils ne sont donc pas proportionnels."
                },
                {
                    id: "ex4_q23",
                    texte: "(Ch.4) Calculer $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})$ et le volume.",
                    solution: "$\\overrightarrow{AD} = (0, 1, 1)$. $\\det = \\begin{vmatrix} -1 & -1 & 0 \\\\ 2 & 0 & 1 \\\\ 0 & 3 & 1 \\end{vmatrix} = -1\\times(0\\times1 - 1\\times3) - (-1)\\times(2\\times1 - 1\\times0) + 0 = -1\\times(-3) + 1\\times(2) = 3 + 2 = 5$. $V = \\dfrac{1}{6} \\times |5| = \\dfrac{5}{6}$."
                },
                {
                    id: "ex4_q24",
                    texte: "(Ch.3) Déterminer l'aire du triangle $ABC$.",
                    solution: "$\\|\\overrightarrow{AB}\\|^2 = (-1)^2+2^2+0^2 = 5$. $\\|\\overrightarrow{AC}\\|^2 = (-1)^2+0^2+3^2 = 10$. $(\\overrightarrow{AB}\\cdot\\overrightarrow{AC})^2 = 1^2 = 1$. Donc $\\mathcal{A}_{ABC} = \\dfrac{1}{2}\\sqrt{5\\times10 - 1} = \\dfrac{1}{2}\\sqrt{50-1} = \\dfrac{\\sqrt{49}}{2} = \\dfrac{7}{2}$ unités d'aire."
                },
                {
                    id: "ex4_q25",
                    texte: "(Ch.4) En déduire la hauteur $h$ issue de $D$.",
                    solution: "$V = \\dfrac{1}{3} \\times \\text{Aire}_{\\text{base}} \\times h \\Rightarrow h = \\dfrac{3V}{\\text{Aire}_{\\text{base}}} = \\dfrac{3 \\times \\frac{5}{6}}{\\frac{7}{2}} = \\dfrac{\\frac{5}{2}}{\\frac{7}{2}} = \\dfrac{5}{7}$."
                }
            ],
            astuces_exo: "💡 Cet exercice synthétise les chapitres 1 (vecteurs), 3 (produit scalaire) et 4 (déterminant/volume).",
            erreurs_exo: "⚠️ La formule de l'aire du triangle utilise la norme du produit vectoriel (qui sera vue au chapitre 5), mais la formule donnée avec le produit scalaire est parfaitement valide."
        },
        {
            numero: 9,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit les points $A(1,2,0)$, $B(3,-1,1)$ et $C(0,1,2)$.</p>
                <p><strong>1.</strong> Déterminer une équation cartésienne du plan $(ABC)$ en utilisant la méthode du déterminant.</p>
                <p><strong>2.</strong> Le point $D(2,1,1)$ appartient-il à ce plan ?</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q26",
                    texte: "Calculer $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (2, -3, 1)$, $\\overrightarrow{AC} = C - A = (-1, -1, 2)$."
                },
                {
                    id: "ex4_q27",
                    texte: "Écrire la condition $\\det(\\overrightarrow{AM},\\overrightarrow{AB},\\overrightarrow{AC}) = 0$ avec $M(x,y,z)$.",
                    solution: "$\\overrightarrow{AM} = (x-1, y-2, z)$. $$\\begin{vmatrix} x-1 & 2 & -1 \\\\ y-2 & -3 & -1 \\\\ z & 1 & 2 \\end{vmatrix} = 0$."
                },
                {
                    id: "ex4_q28",
                    texte: "Développer et obtenir l'équation cartésienne.",
                    solution: "$(x-1)((-3)\\times2 - (-1)\\times1) - 2((y-2)\\times2 - (-1)\\times z) + (-1)((y-2)\\times1 - (-3)\\times z) = 0$ $\\Rightarrow (x-1)(-6+1) - 2(2y-4+z) - (y-2+3z) = 0$ $\\Rightarrow -5(x-1) - 4y+8-2z - y+2-3z = 0$ $\\Rightarrow -5x+5 -5y +10 -5z = 0$ $\\Rightarrow x+y+z-3=0$."
                },
                {
                    id: "ex4_q29",
                    texte: "Le point $D(2,1,1)$ appartient-il au plan ?",
                    solution: "On vérifie l'équation $x+y+z-3=0$ : $2+1+1-3 = 4-3 = 1 \\neq 0$. Donc $D$ n'appartient pas au plan."
                }
            ],
            astuces_exo: "💡 L'équation d'un plan passant par trois points s'obtient en annulant le déterminant de $\\overrightarrow{AM}$, $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
            erreurs_exo: "⚠️ Attention aux signes lors du développement du déterminant."
        },
        {
            numero: 10,
            enonce: `
                <p>L'espace est muni d'un repère orthonormé $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>Soit la droite $\\mathcal{D}$ passant par $A(1,0,2)$ de vecteur directeur $\\vec{u}\\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$.</p>
                <p>Soit le plan $\\mathcal{P}$ passant par $B(0,1,1)$ de vecteurs directeurs $\\vec{v}\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.</p>
                <p><strong>1.</strong> Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.</p>
                <p><strong>2.</strong> Calculer $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w})$.</p>
                <p><strong>3.</strong> En déduire la position relative de $\\mathcal{D}$ et $\\mathcal{P}$.</p>
                <canvas class="figure-canvas" data-figure="position_relative" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q31",
                    texte: "Calculer $\\det(\\vec{u},\\vec{v},\\vec{w})$.",
                    solution: "$\\vec{u}(2,-1,1)$, $\\vec{v}(1,1,0)$, $\\vec{w}(0,1,1)$. $$\\det = \\begin{vmatrix} 2 & 1 & 0 \\\\ -1 & 1 & 1 \\\\ 1 & 0 & 1 \\end{vmatrix} = 2\\times(1\\times1 - 1\\times0) - 1\\times((-1)\\times1 - 1\\times1) + 0 = 2\\times1 - 1\\times(-1-1) = 2 + 2 = 4 \\neq 0$."
                },
                {
                    id: "ex4_q32",
                    texte: "Calculer $\\det(\\overrightarrow{AB},\\vec{v},\\vec{w})$.",
                    solution: "$\\overrightarrow{AB} = B - A = (-1, 1, -1)$. $$\\det = \\begin{vmatrix} -1 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ -1 & 0 & 1 \\end{vmatrix} = -1\\times(1\\times1 - 1\\times0) - 1\\times(1\\times1 - 1\\times(-1)) + 0 = -1\\times1 - 1\\times(1+1) = -1 - 2 = -3 \\neq 0$."
                },
                {
                    id: "ex4_q33",
                    texte: "En déduire la position relative.",
                    solution: "Comme $\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$, la droite $\\mathcal{D}$ et le plan $\\mathcal{P}$ sont sécants (ils se coupent en un point)."
                }
            ],
            astuces_exo: "💡 Si $\\det(\\vec{u},\\vec{v},\\vec{w}) \\neq 0$, la droite et le plan sont sécants. Si le déterminant est nul, ils sont parallèles ou la droite est incluse dans le plan.",
            erreurs_exo: "⚠️ Ne pas confondre le rôle de $\\vec{u}$ (directeur de la droite) et $\\vec{v},\\vec{w}$ (directeurs du plan)."
        },
// ============================================================
// EXERCICE 11 (PDF n°10) – Vérification d'une base
// ============================================================
{
    numero: 11,
    enonce: `
        <p>L'ensemble des vecteurs de l'espace est muni d'une base $\\{\\vec{i}, \\vec{j}, \\vec{k}\\}$.</p>
        <p>Dans chacun des cas ci-dessous, vérifier si $(\\vec{u}, \\vec{v}, \\vec{w})$ est une base.</p>
        <p><strong>a.</strong> $\\vec{u} = \\begin{pmatrix}8\\\\1\\\\4\\end{pmatrix}$, 
        $\\vec{v} = \\begin{pmatrix}1\\\\8\\\\4\\end{pmatrix}$, 
        $\\vec{w} = \\begin{pmatrix}4\\\\-4\\\\7\\end{pmatrix}$.</p>
        <p><strong>b.</strong> $\\vec{u} = \\begin{pmatrix}-\\frac{\\sqrt{3}}{3}\\\\\\frac{\\sqrt{3}}{3}\\\\\\frac{\\sqrt{3}}{3}\\end{pmatrix}$, 
        $\\vec{v} = \\begin{pmatrix}-\\frac{\\sqrt{2}}{2}\\\\0\\\\\\frac{\\sqrt{2}}{2}\\end{pmatrix}$, 
        $\\vec{w} = \\begin{pmatrix}-\\frac{\\sqrt{6}}{6}\\\\-\\frac{\\sqrt{6}}{6}\\\\\\frac{\\sqrt{6}}{6}\\end{pmatrix}$.</p>
    `,
    questions: [
        {
            id: "ex4_q34",
            texte: "Cas a : $(\\vec{u}, \\vec{v}, \\vec{w})$ est-elle une base ?",
            solution: "On calcule le déterminant : $$\\det = \\begin{vmatrix} 8 & 1 & 4 \\\\ 1 & 8 & -4 \\\\ 4 & 4 & 7 \\end{vmatrix}.$$ Développons : $8\\times(8\\times7 - (-4)\\times4) - 1\\times(1\\times7 - (-4)\\times4) + 4\\times(1\\times4 - 8\\times4)$<br> $= 8\\times(56+16) - 1\\times(7+16) + 4\\times(4-32)$<br> $= 8\\times72 - 23 + 4\\times(-28) = 576 - 23 - 112 = 441 \\neq 0$.<br> Donc le déterminant est non nul : les trois vecteurs forment une base."
        },
        {
            id: "ex4_q35",
            texte: "Cas b : $(\\vec{u}, \\vec{v}, \\vec{w})$ est-elle une base ?",
            solution: "On peut remarquer que les trois vecteurs sont orthogonaux deux à deux et unitaires (leurs normes valent 1). En effet :<br> $\\vec{u}\\cdot\\vec{v} = (-\\frac{\\sqrt{3}}{3})(-\\frac{\\sqrt{2}}{2}) + (\\frac{\\sqrt{3}}{3})(0) + (\\frac{\\sqrt{3}}{3})(\\frac{\\sqrt{2}}{2}) = \\frac{\\sqrt{6}}{6} - \\frac{\\sqrt{6}}{6} = 0$, etc.<br> $\\|\\vec{u}\\| = 1$, $\\|\\vec{v}\\| = 1$, $\\|\\vec{w}\\| = 1$.<br> Donc c'est une base orthonormée, donc en particulier une base."
        }
    ],
    astuces_exo: "💡 Pour montrer qu'une famille est une base, on calcule son déterminant. S'il est non nul, c'est une base.",
    erreurs_exo: "⚠️ Ne pas confondre base et famille orthogonale : l'orthogonalité n'implique pas la base si les vecteurs ne sont pas en nombre suffisant (3 vecteurs dans l'espace)."
},
// ============================================================
// EXERCICE 12 (PDF n°13) – Cube : coplanarité de points (3 questions)
// ============================================================
{
    numero: 12,
    enonce: `
        <p>Soit $ABCDA'B'C'D'$ un cube. On désigne par $I, J, K, L, M, N$ et $O$ les milieux respectifs des segments $[AD]$, $[BC]$, $[DD']$, $[CC']$, $[A'D']$ et $[A'B']$.</p>
        <p>En considérant un repère cartésien convenable, répondre aux questions suivantes.</p>
        <p><strong>1.</strong> Les points $A, J, K$ et $L$ sont-ils coplanaires ?</p>
        <p><strong>2.</strong> Les points $M, D, B'$ et $J$ sont-ils coplanaires ?</p>
        <p><strong>3.</strong> Les points $N, O, I$ et $L$ sont-ils coplanaires ?</p>
        <canvas class="figure-canvas" data-figure="cube_milieux" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
    `,
    questions: [
        {
            id: "ex4_q36",
            texte: "Question 1 : A, J, K, L sont-ils coplanaires ?",
            solution: "Prenons le repère $(A,\\vec{AB},\\vec{AD},\\vec{AA'})$ avec $A(0,0,0)$, $B(1,0,0)$, $D(0,1,0)$, $A'(0,0,1)$. Alors :<br> $J$ milieu de $[BC]$ : $B(1,0,0)$, $C(1,1,0)$ → $J(1,\\tfrac12,0)$.<br> $K$ milieu de $[DD']$ : $D(0,1,0)$, $D'(0,1,1)$ → $K(0,1,\\tfrac12)$.<br> $L$ milieu de $[CC']$ : $C(1,1,0)$, $C'(1,1,1)$ → $L(1,1,\\tfrac12)$.<br> On calcule $\\det(\\overrightarrow{AJ},\\overrightarrow{AK},\\overrightarrow{AL})$ :<br> $\\overrightarrow{AJ} = (1,\\tfrac12,0)$, $\\overrightarrow{AK} = (0,1,\\tfrac12)$, $\\overrightarrow{AL} = (1,1,\\tfrac12)$.<br> $\\det = \\begin{vmatrix}1&0&1\\\\\\tfrac12&1&1\\\\0&\\tfrac12&\\tfrac12\\end{vmatrix} = 1\\times(1\\cdot\\tfrac12 - 1\\cdot\\tfrac12) - 0 + 1\\times(\\tfrac12\\cdot\\tfrac12 - 1\\cdot0) = 0 + 0 + \\tfrac14 = \\tfrac14 \\neq 0$.<br> Donc ils ne sont pas coplanaires."
        },
        {
            id: "ex4_q37",
            texte: "Question 2 : M, D, B', J sont-ils coplanaires ?",
            solution: "$M$ milieu de $[A'D']$ : $A'(0,0,1)$, $D'(0,1,1)$ → $M(0,\\tfrac12,1)$.<br> $B'(1,0,1)$, $D(0,1,0)$, $J(1,\\tfrac12,0)$.<br> On choisit $D$ comme origine : $\\overrightarrow{DM} = (0,-\\tfrac12,1)$, $\\overrightarrow{DB'} = (1,-1,1)$, $\\overrightarrow{DJ} = (1,-\\tfrac12,0)$.<br> $\\det = \\begin{vmatrix}0&1&1\\\\-\\tfrac12&-1&-\\tfrac12\\\\1&1&0\\end{vmatrix}$.<br> Développement : $0 - 1\\times((-\\tfrac12)\\cdot0 - (-\\tfrac12)\\cdot1) + 1\\times((-\\tfrac12)\\cdot1 - (-1)\\cdot1)$<br> $= -1\\times(0+\\tfrac12) + 1\\times(-\\tfrac12 +1) = -\\tfrac12 + \\tfrac12 = 0$.<br> Donc coplanaires."
        },
        {
            id: "ex4_q38",
            texte: "Question 3 : N, O, I, L sont-ils coplanaires ?",
            solution: "Attention : l'énoncé mentionne un point $O$ non défini. Il s'agit probablement du centre du cube (milieu de $[AC']$ par exemple). On prend $O(\\tfrac12,\\tfrac12,\\tfrac12)$.<br> $N$ milieu de $[A'B']$ : $A'(0,0,1)$, $B'(1,0,1)$ → $N(\\tfrac12,0,1)$.<br> $I$ milieu de $[AD]$ : $A(0,0,0)$, $D(0,1,0)$ → $I(0,\\tfrac12,0)$.<br> $L(1,1,\\tfrac12)$.<br> On prend $N$ comme origine : $\\overrightarrow{NO} = (0,\\tfrac12,-\\tfrac12)$, $\\overrightarrow{NI} = (-\\tfrac12,\\tfrac12,-1)$, $\\overrightarrow{NL} = (\\tfrac12,1,-\\tfrac12)$.<br> $\\det = \\begin{vmatrix}0&-\\tfrac12&\\tfrac12\\\\\\tfrac12&\\tfrac12&1\\\\-\\tfrac12&-1&-\\tfrac12\\end{vmatrix}$.<br> Calcul : $0 - (-\\tfrac12)\\times(\\tfrac12\\cdot(-\\tfrac12) - 1\\cdot(-\\tfrac12)) + \\tfrac12\\times(\\tfrac12\\cdot(-1) - \\tfrac12\\cdot(-\\tfrac12))$<br> $= \\tfrac12\\times(-\\tfrac14 + \\tfrac12) + \\tfrac12\\times(-\\tfrac12 + \\tfrac14) = \\tfrac12\\times(\\tfrac14) + \\tfrac12\\times(-\\tfrac14) = 0$.<br> Donc coplanaires."
        }
    ],
    astuces_exo: "💡 Pour la coplanarité, on calcule le déterminant des trois vecteurs issus d'un même point. Un déterminant nul signifie coplanaires.",
    erreurs_exo: "⚠️ Attention à bien identifier les coordonnées des points dans le repère choisi."
},
// ============================================================
// EXERCICE 13 (PDF n°14) – Dépendance linéaire et appartenance à un plan
// ============================================================
{
    numero: 13,
    enonce: `
        <p>L'ensemble des vecteurs de l'espace est muni d'une base $(\\vec{i},\\vec{j},\\vec{k})$.</p>
        <p>On considère les vecteurs $\\vec{u} = \\begin{pmatrix}-2\\\\3\\\\-1\\end{pmatrix}$, 
        $\\vec{v} = \\begin{pmatrix}1\\\\-1\\\\-2\\end{pmatrix}$, 
        $\\vec{w} = \\begin{pmatrix}4\\\\-2\\\\-18\\end{pmatrix}$ et le point $A(1,1,4)$.</p>
        <p><strong>1.</strong> Les vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ sont-ils linéairement dépendants ?</p>
        <p><strong>2.</strong> On considère le point $M(5,-1,-14)$. Le point $M$ appartient-il au plan $(A,\\vec{u},\\vec{v})$ ?</p>
    `,
    questions: [
        {
            id: "ex4_q39",
            texte: "Question 1 : $\\vec{u}, \\vec{v}, \\vec{w}$ sont-ils linéairement dépendants ?",
            solution: "On calcule $\\det(\\vec{u},\\vec{v},\\vec{w}) = \\begin{vmatrix} -2 & 1 & 4 \\\\ 3 & -1 & -2 \\\\ -1 & -2 & -18 \\end{vmatrix}$.<br> Développement : $-2\\times((-1)(-18) - (-2)(-2)) - 1\\times(3(-18) - (-2)(-1)) + 4\\times(3(-2) - (-1)(-1))$<br> $= -2\\times(18 - 4) - 1\\times(-54 - 2) + 4\\times(-6 - 1)$<br> $= -2\\times14 - 1\\times(-56) + 4\\times(-7) = -28 + 56 - 28 = 0$.<br> Le déterminant est nul, donc les trois vecteurs sont linéairement dépendants."
        },
        {
            id: "ex4_q40",
            texte: "Question 2 : M appartient-il au plan $(A,\\vec{u},\\vec{v})$ ?",
            solution: "Le plan $(A,\\vec{u},\\vec{v})$ est l'ensemble des points $M$ tels que $\\overrightarrow{AM}$ soit combinaison linéaire de $\\vec{u}$ et $\\vec{v}$.<br> On cherche $\\alpha, \\beta$ tels que $\\overrightarrow{AM} = \\alpha\\vec{u} + \\beta\\vec{v}$.<br> $\\overrightarrow{AM} = M - A = (4, -2, -18)$.<br> On résout : $\\begin{cases} -2\\alpha + \\beta = 4 \\\\ 3\\alpha - \\beta = -2 \\\\ -\\alpha - 2\\beta = -18 \\end{cases}$.<br> Des deux premières : en additionnant, $\\alpha = 2$, puis $\\beta = 4 + 2\\alpha = 8$.<br> Vérifions la troisième : $-2 - 2\\times8 = -18$ ok.<br> Donc $\\overrightarrow{AM} = 2\\vec{u} + 8\\vec{v}$. Donc $M$ appartient au plan."
        }
    ],
    astuces_exo: "💡 Pour montrer qu'un point appartient à un plan défini par un point et deux vecteurs, on exprime le vecteur comme combinaison linéaire des deux vecteurs.",
    erreurs_exo: "⚠️ Vérifier les trois équations ; une seule suffit si on a déjà résolu les deux premières."
},
// ============================================================
// EXERCICE 14 (PDF n°15) – Cube, coplanarité avec paramètre n
// ============================================================
{
    numero: 14,
    enonce: `
        <p>Soit $ABCDEFGH$ un cube et soit $n$ un entier naturel non nul. On considère les points $I, J, K$ tels que</p>
        <p>$\\overrightarrow{BI} = \\frac{1}{n+1}\\overrightarrow{BC}$, 
        $\\overrightarrow{CJ} = \\frac{1}{n+1}\\overrightarrow{CD}$ et 
        $\\overrightarrow{GK} = \\frac{1}{n}\\overrightarrow{GH}$.</p>
        <p><strong>1.</strong> On suppose que $n=2$.</p>
        <p><strong>a.</strong> Faire une figure et placer les points $I, J$ et $K$.</p>
        <p><strong>b.</strong> Exprimer $\\overrightarrow{IJ}$ et $\\overrightarrow{FK}$ à l'aide de $\\overrightarrow{BC}$ et $\\overrightarrow{CD}$.</p>
        <p><strong>c.</strong> Les points $F, I, J, K$ sont-ils coplanaires ?</p>
        <p><strong>2.</strong> Les points $F, I, J, K$ sont-ils coplanaires quelque soit la valeur de $n$ ?</p>
        <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
    `,
    questions: [
        {
            id: "ex4_q41",
            texte: "1.a) (figure à faire sur papier) – Placer les points.",
            solution: "Pour $n=2$, $\\overrightarrow{BI} = \\frac{1}{3}\\overrightarrow{BC}$, $\\overrightarrow{CJ} = \\frac{1}{3}\\overrightarrow{CD}$, $\\overrightarrow{GK} = \\frac{1}{2}\\overrightarrow{GH}$.<br> Les points se placent sur les arêtes correspondantes."
        },
        {
            id: "ex4_q42",
            texte: "1.b) Exprimer $\\overrightarrow{IJ}$ et $\\overrightarrow{FK}$.",
            solution: "Prenons le repère $(A,\\vec{AB},\\vec{AD},\\vec{AE})$ avec $A(0,0,0)$, $B(1,0,0)$, $C(1,1,0)$, $D(0,1,0)$, $E(0,0,1)$, $F(1,0,1)$, $G(1,1,1)$, $H(0,1,1)$.<br> Pour $n=2$ : <br> $I = B + \\frac{1}{3}\\overrightarrow{BC} = (1, \\frac{1}{3}, 0)$.<br> $J = C + \\frac{1}{3}\\overrightarrow{CD} = (1 - \\frac{1}{3}, 1, 0) = (\\frac{2}{3}, 1, 0)$.<br> $K = G + \\frac{1}{2}\\overrightarrow{GH} = (1 - \\frac{1}{2}, 1, 1) = (\\frac{1}{2}, 1, 1)$.<br> $\\overrightarrow{IJ} = J - I = (-\\frac{1}{3}, \\frac{2}{3}, 0) = -\\frac{1}{3}\\overrightarrow{BC} + \\frac{2}{3}\\overrightarrow{CD}$ ?<br> En effet $\\overrightarrow{BC} = (0,1,0)$, $\\overrightarrow{CD}=(-1,0,0)$.<br> On cherche $\\alpha,\\beta$ tels que $\\alpha\\overrightarrow{BC} + \\beta\\overrightarrow{CD} = (-\\frac{1}{3},\\frac{2}{3},0)$.<br> $\\alpha(0,1,0)+\\beta(-1,0,0)=(-\\beta, \\alpha, 0)$ donc $\\beta = \\frac{1}{3}$, $\\alpha = \\frac{2}{3}$.<br> Donc $\\overrightarrow{IJ} = \\frac{2}{3}\\overrightarrow{BC} + \\frac{1}{3}\\overrightarrow{CD}$.<br> $\\overrightarrow{FK} = K - F = (\\frac{1}{2}-1, 1-0, 1-1) = (-\\frac{1}{2}, 1, 0) = -\\frac{1}{2}\\overrightarrow{BC} + \\frac{1}{2}\\overrightarrow{CD}$ ?<br> $\\overrightarrow{BC}=(0,1,0)$, $\\overrightarrow{CD}=(-1,0,0)$ : $\\alpha\\overrightarrow{BC}+\\beta\\overrightarrow{CD}=(-\\beta, \\alpha, 0)$ ; on veut $(-\\frac12,1,0)$ ⇒ $\\beta=\\frac12$, $\\alpha=1$.<br> Donc $\\overrightarrow{FK} = \\overrightarrow{BC} + \\frac{1}{2}\\overrightarrow{CD}$."
        },
        {
            id: "ex4_q43",
            texte: "1.c) F, I, J, K sont-ils coplanaires pour n=2 ?",
            solution: "On calcule $\\det(\\overrightarrow{FI},\\overrightarrow{FJ},\\overrightarrow{FK})$.<br> $\\overrightarrow{FI} = I - F = (0, \\frac13, -1)$ ; $\\overrightarrow{FJ} = J - F = (-\\frac13, 1, -1)$ ; $\\overrightarrow{FK} = K - F = (-\\frac12, 1, 0)$.<br> $\\det = \\begin{vmatrix} 0 & -\\frac13 & -\\frac12 \\\\ \\frac13 & 1 & 1 \\\\ -1 & -1 & 0 \\end{vmatrix}$.<br> Calcul : $0 - (-\\frac13)\\times(\\frac13\\cdot0 - 1\\cdot(-1)) + (-\\frac12)\\times(\\frac13\\cdot(-1) - 1\\cdot(-1))$<br> $= \\frac13\\times(0 + 1) - \\frac12\\times(-\\frac13 + 1) = \\frac13 - \\frac12\\times\\frac23 = \\frac13 - \\frac13 = 0$.<br> Donc coplanaires."
        },
        {
            id: "ex4_q44",
            texte: "2) F, I, J, K sont-ils coplanaires pour tout n ?",
            solution: "On généralise les coordonnées : <br> $I = (1, \\frac{1}{n+1}, 0)$, $J = (\\frac{n}{n+1}, 1, 0)$, $K = (\\frac{n-1}{n}, 1, 1)$.<br> $\\overrightarrow{FI} = (0, \\frac{1}{n+1}, -1)$.<br> $\\overrightarrow{FJ} = (\\frac{n}{n+1} - 1, 1, -1) = (-\\frac{1}{n+1}, 1, -1)$.<br> $\\overrightarrow{FK} = (\\frac{n-1}{n} - 1, 1, 0) = (-\\frac{1}{n}, 1, 0)$.<br> Calcul du déterminant : <br> $\\det = \\begin{vmatrix} 0 & -\\frac{1}{n+1} & -\\frac{1}{n} \\\\ \\frac{1}{n+1} & 1 & 1 \\\\ -1 & -1 & 0 \\end{vmatrix}$.<br> Développement : $0 - (-\\frac{1}{n+1})\\times(\\frac{1}{n+1}\\cdot0 - 1\\cdot(-1)) + (-\\frac{1}{n})\\times(\\frac{1}{n+1}\\cdot(-1) - 1\\cdot(-1))$<br> $= \\frac{1}{n+1}\\times(0 + 1) - \\frac{1}{n}\\times(-\\frac{1}{n+1} + 1)$<br> $= \\frac{1}{n+1} - \\frac{1}{n}\\times\\frac{n}{n+1} = \\frac{1}{n+1} - \\frac{1}{n+1} = 0$.<br> Le déterminant est nul pour tout $n$, donc les points sont coplanaires pour toute valeur de $n$."
        }
    ],
    astuces_exo: "💡 Généraliser les coordonnées en fonction de $n$ permet de répondre à la question 2.",
    erreurs_exo: "⚠️ Attention aux calculs littéraux avec $n$."
},
// ============================================================
// EXERCICE 15 (PDF n°16) – Coplanarité de points dans un repère
// ============================================================
{
    numero: 15,
    enonce: `
        <p>L'espace est muni d'un repère cartésien $(O,\\vec{i},\\vec{j},\\vec{k})$. On considère les points $A(1,3,0)$, $B(3,1,0)$, $C(4,4,0)$ et $D(4,4,0)$ (remarque : $C=D$ dans l'énoncé, probablement une erreur).</p>
        <p>On désigne par $I, J$ et $L$ les points tels que</p>
        <p>$\\overrightarrow{DI} = \\frac{2}{5}\\overrightarrow{DA}$, 
        $\\overrightarrow{DJ} = \\frac{1}{6}\\overrightarrow{DC}$ et 
        $\\overrightarrow{DL} = \\frac{2}{5}\\overrightarrow{DB}$.</p>
        <p><strong>1.</strong> Déterminer les coordonnées des points $I, J$ et $L$.</p>
        <p><strong>2.</strong> Représenter les points $A, B, C, D, I, J, L$.</p>
        <p><strong>3.</strong> Les points $I, J, L$ et $D$ sont-ils coplanaires ?</p>
        <canvas class="figure-canvas" data-figure="points_plan_xy" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
    `,
    questions: [
        {
            id: "ex4_q45",
            texte: "Question 1 : coordonnées de I, J, L.",
            solution: "D'après l'énoncé $C(4,4,0)$ et $D(4,4,0)$, donc $C=D$. On a alors $\\overrightarrow{DC} = \\vec{0}$, donc $J = D$ (car $\\overrightarrow{DJ} = \\frac{1}{6}\\vec{0} = \\vec{0}$).<br> $\\overrightarrow{DA} = A - D = (1-4, 3-4, 0) = (-3, -1, 0)$. $\\overrightarrow{DI} = \\frac{2}{5}\\overrightarrow{DA} = (-\\frac{6}{5}, -\\frac{2}{5}, 0)$ ⇒ $I = D + \\overrightarrow{DI} = (4-\\frac{6}{5}, 4-\\frac{2}{5}, 0) = (\\frac{14}{5}, \\frac{18}{5}, 0)$.<br> $\\overrightarrow{DB} = B - D = (3-4, 1-4, 0) = (-1, -3, 0)$. $\\overrightarrow{DL} = \\frac{2}{5}\\overrightarrow{DB} = (-\\frac{2}{5}, -\\frac{6}{5}, 0)$ ⇒ $L = D + \\overrightarrow{DL} = (4-\\frac{2}{5}, 4-\\frac{6}{5}, 0) = (\\frac{18}{5}, \\frac{14}{5}, 0)$.<br> Donc $I(\\frac{14}{5},\\frac{18}{5},0)$, $J(4,4,0)$, $L(\\frac{18}{5},\\frac{14}{5},0)$."
        },
        {
            id: "ex4_q46",
            texte: "Question 2 : Représentation (à faire sur papier).",
            solution: "Tous les points ont $z=0$, donc ils sont dans le plan $(Oxy)$. On peut les placer dans le repère."
        },
        {
            id: "ex4_q47",
            texte: "Question 3 : I, J, L, D sont-ils coplanaires ?",
            solution: "Comme tous les points ont $z=0$, ils sont tous dans le plan $z=0$. Donc ils sont coplanaires (en fait ils sont dans un même plan)."
        }
    ],
    astuces_exo: "💡 Dès que tous les points ont une coordonnée constante (ici $z=0$), ils sont coplanaires.",
    erreurs_exo: "⚠️ Vérifier les calculs de fractions."
}
    ]
});