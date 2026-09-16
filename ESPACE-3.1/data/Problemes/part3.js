// data/problemes/part3.js
// Problème 3 – Triangle isocèle, plans, sphères et cercles
window.problemes.items.push({
    id: 3,
    titre: "Triangle isocèle, plans, sphères et cercles",
    enonce: `
        <p>L'espace est rapporté à un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.<br>
        On considère les points $A(1,0,0)$, $B(1,2,-1)$, $C(-1,2,0)$ et $I(0,1,-3)$.</p>
    `,
    astuces: `
        <p>Pour montrer qu'un triangle est isocèle en $B$, on calcule les longueurs $BA$ et $BC$.</p>
        <p>L'angle $\\angle ABC$ se calcule à l'aide du produit scalaire : $\\cos(\\angle ABC) = \\dfrac{\\vec{BA} \\cdot \\vec{BC}}{\\|\\vec{BA}\\| \\|\\vec{BC}\\|}$.</p>
        <p>Pour montrer qu'un point $B$ est le projeté orthogonal de $I$ sur un plan $P$, on vérifie que $B \\in P$ et que $\\vec{IB}$ est colinéaire au vecteur normal de $P$.</p>
        <p>Le rayon du cercle d'intersection d'une sphère de rayon $R$ et d'un plan à distance $d$ du centre est $r = \\sqrt{R^2 - d^2}$.</p>
    `,
    erreurs: `
        <p>Ne pas oublier de vérifier que le point appartient au plan avant de conclure qu'il est le projeté orthogonal.</p>
        <p>Pour le volume du tétraèdre, la formule avec le déterminant utilise la valeur absolue.</p>
    `,
    questions: [
        // ============ 1.(a) ============
        {
            id: "p3q1a",
            texte: "Vérifier que $ABC$ est un triangle isocèle de sommet principal $B$.",
            solution: `
                <p>$\\vec{BA} \\begin{pmatrix} 0 \\\\ -2 \\\\ 1 \\end{pmatrix}$ donc $BA = \\sqrt{0^2 + (-2)^2 + 1^2} = \\sqrt{5}$.</p>
                <p>$\\vec{BC} \\begin{pmatrix} -2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ donc $BC = \\sqrt{(-2)^2 + 0^2 + 1^2} = \\sqrt{5}$.</p>
                <p>Comme $BA = BC$, le triangle $ABC$ est isocèle en $B$.</p>
            `
        },
        // ============ 1.(b) ============
        {
            id: "p3q1b",
            texte: "Calculer le produit scalaire $\\vec{BA} \\cdot \\vec{BC}$.",
            solution: `
                <p>$\\vec{BA} \\cdot \\vec{BC} = (0)(-2) + (-2)(0) + (1)(1) = 1$.</p>
            `
        },
        // ============ 1.(c) ============
        {
            id: "p3q1c",
            texte: "En déduire une valeur approchée de l'angle $\\angle ABC$.",
            solution: `
                <p>$\\cos(\\angle ABC) = \\dfrac{\\vec{BA} \\cdot \\vec{BC}}{BA \\times BC} = \\dfrac{1}{\\sqrt{5} \\times \\sqrt{5}} = \\dfrac{1}{5} = 0{,}2$.</p>
                <p>Donc $\\angle ABC \\approx 78{,}46^\\circ$ (soit environ $78^\\circ$).</p>
            `
        },
        // ============ 2.(a) ============
        {
            id: "p3q2a",
            texte: "Déterminer les composantes du vecteur $\\vec{AB} \\wedge \\vec{AC}$.",
            solution: `
                <p>$\\vec{AB} \\begin{pmatrix} 0 \\\\ 2 \\\\ -1 \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} -2 \\\\ 2 \\\\ 0 \\end{pmatrix}$.</p>
                <p>$\\vec{AB} \\wedge \\vec{AC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 0 & 2 & -1 \\\\ -2 & 2 & 0 \\end{vmatrix} = \\vec{i}(0 - (-2)) - \\vec{j}(0 - 2) + \\vec{k}(0 - (-4)) $ qui a pour composantes $\\begin{pmatrix} 2 \\\\ 2 \\\\ 4 \\end{pmatrix} = 2\\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
            `
        },
        // ============ 2.(b) ============
        {
            id: "p3q2b",
            texte: "En déduire que les points $A, B$ et $C$ déterminent un plan $P$ dont une équation cartésienne est $x + y + 2z - 1 = 0$.",
            solution: `
                <p>Comme $\\vec{AB} \\wedge \\vec{AC} \\neq \\vec{0}$, les points $A, B, C$ ne sont pas alignés et déterminent un plan $P$.</p>
                <p>Le vecteur normal de $P$ est $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
                <p>Donc $P : x + y + 2z + d = 0$. En utilisant $A(1,0,0)$ : $1 + 0 + 0 + d = 0 \\Rightarrow d = -1$.</p>
                <p>Donc $P : x + y + 2z - 1 = 0$.</p>
            `
        },
        // ============ 2.(c) ============
        {
            id: "p3q2c",
            texte: "Montrer que $ABCI$ est un tétraèdre et calculer son volume.",
            solution: `
                <p>On calcule le produit mixte $[\\vec{AB}, \\vec{AC}, \\vec{AI}]$.</p>
                <p>$\\vec{AI} \\begin{pmatrix} -1 \\\\ 1 \\\\ -3 \\end{pmatrix}$.</p>
                <p>$[\\vec{AB}, \\vec{AC}, \\vec{AI}] = (\\vec{AB} \\wedge \\vec{AC}) \\cdot \\vec{AI} = 2(-1) + 2(1) + 4(-3) = -2 + 2 - 12 = -12 \\neq 0$.</p>
                <p>Donc $ABCI$ est un tétraèdre.</p>
                <p>Volume $V = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AI}]| = \\dfrac{1}{6} \\times 12 = 2$ unités de volume.</p>
            `
        },
        // ============ 3.(a) ============
        {
            id: "p3q3a",
            texte: "Calculer la distance $IA$.",
            solution: `
                <p>$IA = \\sqrt{(1-0)^2 + (0-1)^2 + (0-(-3))^2} = \\sqrt{1 + 1 + 9} = \\sqrt{11}$.</p>
            `
        },
        // ============ 3.(b) ============
        {
            id: "p3q3b",
            texte: "Montrer que $S$ passe par le point $C$.",
            solution: `
                <p>$IC = \\sqrt{(-1-0)^2 + (2-1)^2 + (0-(-3))^2} = \\sqrt{1 + 1 + 9} = \\sqrt{11}$.</p>
                <p>Comme $IC = IA = \\sqrt{11}$, le point $C$ appartient à la sphère $S$ de centre $I$ et passant par $A$.</p>
            `
        },
        // ============ 3.(c) ============
        {
            id: "p3q3c",
            texte: "Donner une équation cartésienne de la sphère $S$.",
            solution: `
                <p>Le rayon de $S$ est $R = \\sqrt{11}$ et son centre est $I(0,1,-3)$.</p>
                <p>Équation : $(x-0)^2 + (y-1)^2 + (z+3)^2 = 11$.</p>
                <p>Soit $x^2 + y^2 - 2y + 1 + z^2 + 6z + 9 = 11 \\Rightarrow x^2 + y^2 + z^2 - 2y + 6z - 1 = 0$.</p>
            `
        },
        // ============ 3.(d) ============
        {
            id: "p3q3d",
            texte: "Montrer que le point $B$ est le projeté orthogonal du point $I$ sur le plan $P$.",
            solution: `
                <p>Vérifions que $B \\in P$ : $1 + 2 + 2(-1) - 1 = 1 + 2 - 2 - 1 = 0$. Oui.</p>
                <p>$\\vec{IB} \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$. Ce vecteur est colinéaire au vecteur normal $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$ de $P$.</p>
                <p>Donc la droite $(IB)$ est perpendiculaire à $P$. Comme $B \\in P$, $B$ est bien le projeté orthogonal de $I$ sur $P$.</p>
            `
        },
        // ============ 3.(e) ============
        {
            id: "p3q3e",
            texte: "Montrer que l'intersection du plan $P$ et de la sphère $S$ est le cercle $(C)$ de centre $B$ et de rayon $\\sqrt{5}$.",
            solution: `
                <p>La distance de $I$ à $P$ est $d(I,P) = \\|\\vec{IB}\\| = \\sqrt{1^2 + 1^2 + 2^2} = \\sqrt{6}$.</p>
                <p>Le rayon $r$ du cercle d'intersection est donné par $r^2 = R^2 - d(I,P)^2 = 11 - 6 = 5$.</p>
                <p>Donc $r = \\sqrt{5}$.</p>
                <p>Le centre de ce cercle est le projeté orthogonal de $I$ sur $P$, c'est-à-dire $B$.</p>
            `
        },
        // ============ 3.(f) ============
        {
            id: "p3q3f",
            texte: "Vérifier que la droite $(IB)$ est l'axe du cercle $(C)$.",
            solution: `
                <p>L'axe d'un cercle est la droite perpendiculaire à son plan passant par son centre.</p>
                <p>$(IB)$ est perpendiculaire à $P$ et passe par $B$, le centre du cercle $(C)$.</p>
                <p>Donc $(IB)$ est bien l'axe du cercle $(C)$.</p>
            `
        },
        // ============ 3.(g) ============
        {
            id: "p3q3g",
            texte: "Donner une représentation paramétrique de la droite $(IB)$.",
            solution: `
                <p>La droite $(IB)$ passe par $I(0,1,-3)$ et a pour vecteur directeur $\\vec{IB} \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
                <p>Représentation paramétrique :</p>
                <p>$\\begin{cases} x = \\alpha \\\\ y = 1 + \\alpha \\\\ z = -3 + 2\\alpha \\end{cases} ; \\alpha \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 3.(h) ============
        {
            id: "p3q3h",
            texte: "Déterminer les coordonnées du point $I'$ de la droite $(IB)$ distinct de $I$ tel que les tétraèdres $ABCI$ et $ABCI'$ ont le même volume.",
            solution: `
                <p>Un point $I'$ de $(IB)$ a pour coordonnées $(\\alpha, 1+\\alpha, -3+2\\alpha)$.</p>
                <p>Les tétraèdres $ABCI$ et $ABCI'$ ont la même base $ABC$ et le même volume si et seulement si $d(I', P) = d(I, P)$.</p>
                <p>$d(I', P) = \\dfrac{|\\alpha + (1+\\alpha) + 2(-3+2\\alpha) - 1|}{\\sqrt{6}} = \\dfrac{|6\\alpha - 6|}{\\sqrt{6}}$.</p>
                <p>On veut $d(I', P) = \\sqrt{6} \\iff \\dfrac{|6\\alpha - 6|}{\\sqrt{6}} = \\sqrt{6} \\iff |6\\alpha - 6| = 6$.</p>
                <p>Donc $6\\alpha - 6 = 6 \\Rightarrow \\alpha = 2$ ou $6\\alpha - 6 = -6 \\Rightarrow \\alpha = 0$.</p>
                <p>$\\alpha = 0$ donne le point $I(0,1,-3)$. Le point $I'$ cherché correspond à $\\alpha = 2$.</p>
                <p>Donc $I'(2, 3, 1)$.</p>
            `
        },
        // ============ 4.(a) ============
        {
            id: "p3q4a",
            texte: "Montrer que $S'$ est la sphère de centre $I'$ et de rayon $\\sqrt{11}$.",
            solution: `
                <p>$S' : x^2 + y^2 + z^2 - 4x - 6y - 2z + 3 = 0$.</p>
                <p>$(x-2)^2 - 4 + (y-3)^2 - 9 + (z-1)^2 - 1 + 3 = 0$.</p>
                <p>$(x-2)^2 + (y-3)^2 + (z-1)^2 = 11$.</p>
                <p>Donc $S'$ est la sphère de centre $I'(2,3,1)$ et de rayon $\\sqrt{11}$.</p>
            `
        },
        // ============ 4.(b) ============
        {
            id: "p3q4b",
            texte: "Montrer que $S \\cap P = (C)$.",
            solution: `
                <p>Nous avons déjà montré en 3.(e) que l'intersection de $S$ et de $P$ est le cercle $(C)$ de centre $B$ et de rayon $\\sqrt{5}$.</p>
                <p>Donc $S \\cap P = (C)$.</p>
            `
        },
        // ============ 4.(c) ============
        {
            id: "p3q4c",
            texte: "Montrer que $S \\cap S' = (C)$.",
            solution: `
                <p>Soit $M(x,y,z) \\in S \\cap S'$. Alors :</p>
                <p>$x^2 + y^2 + z^2 - 2y + 6z - 1 = 0$ et $x^2 + y^2 + z^2 - 4x - 6y - 2z + 3 = 0$.</p>
                <p>En soustrayant les deux équations : $4x + 4y + 8z - 4 = 0 \\Rightarrow x + y + 2z - 1 = 0$.</p>
                <p>Donc $M \\in P$.</p>
                <p>On a donc $S \\cap S' \\subset S \\cap P = (C)$.</p>
                <p>Réciproquement, soit $M \\in (C)$. Alors $M \\in S$ et $M \\in P$.</p>
                <p>De plus, $d(I', P) = \\dfrac{|2+3+2-1|}{\\sqrt{6}} = \\dfrac{6}{\\sqrt{6}} = \\sqrt{6}$. Le rayon du cercle d'intersection de $S'$ et $P$ est $\\sqrt{11 - 6} = \\sqrt{5}$.</p>
                <p>Le centre de ce cercle est le projeté orthogonal de $I'$ sur $P$, c'est-à-dire $B$.</p>
                <p>Donc $S' \\cap P = (C)$ et par suite $M \\in S'$.</p>
                <p>On conclut que $S \\cap S' = (C)$.</p>
            `
        },
        // ============ 5.(a) ============
        {
            id: "p3q5a",
            texte: "Montrer que $S_\\alpha$ est la sphère de centre $I_\\alpha(0,1,\\alpha)$ et de rayon $R_\\alpha = \\sqrt{2 + \\alpha^2}$.",
            solution: `
                <p>$S_\\alpha : x^2 + y^2 + z^2 - 2y - 2\\alpha z - 1 = 0$.</p>
                <p>$x^2 + (y-1)^2 - 1 + (z-\\alpha)^2 - \\alpha^2 - 1 = 0$.</p>
                <p>$x^2 + (y-1)^2 + (z-\\alpha)^2 = \\alpha^2 + 2$.</p>
                <p>Donc $S_\\alpha$ est la sphère de centre $I_\\alpha(0,1,\\alpha)$ et de rayon $R_\\alpha = \\sqrt{\\alpha^2 + 2}$.</p>
            `
        },
        // ============ 5.(b) ============
        {
            id: "p3q5b",
            texte: "Déterminer l'ensemble des points $I_\\alpha$ lorsque $\\alpha$ varie sur l'ensemble des réels.",
            solution: `
                <p>$I_\\alpha(0,1,\\alpha)$. Les coordonnées de $I_\\alpha$ sont $x=0$, $y=1$, $z=\\alpha$.</p>
                <p>Lorsque $\\alpha$ décrit $\\mathbb{R}$, le point $I_\\alpha$ décrit la droite d'équations paramétriques :</p>
                <p>$\\begin{cases} x = 0 \\\\ y = 1 \\\\ z = \\alpha \\end{cases} ; \\alpha \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 5.(c) ============
        {
            id: "p3q5c",
            texte: "Démontrer que $R_\\alpha$ est minimal si et seulement si $\\alpha = 0$.",
            solution: `
                <p>$R_\\alpha = \\sqrt{\\alpha^2 + 2}$.</p>
                <p>Comme $\\alpha^2 \\geq 0$, on a $\\alpha^2 + 2 \\geq 2$, donc $R_\\alpha \\geq \\sqrt{2}$.</p>
                <p>$R_\\alpha$ est minimal lorsque $\\alpha^2 = 0$, c'est-à-dire $\\alpha = 0$.</p>
            `
        },
        // ============ 5.(d) ============
        {
            id: "p3q5d",
            texte: "Montrer que la sphère $S_\\alpha$ passe par les points $A$ et $C$.",
            solution: `
                <p>Vérifions pour $A(1,0,0)$ : $1^2 + 0^2 + 0^2 - 2(0) - 2\\alpha(0) - 1 = 1 - 1 = 0$. Donc $A \\in S_\\alpha$.</p>
                <p>Vérifions pour $C(-1,2,0)$ : $(-1)^2 + 2^2 + 0^2 - 2(2) - 2\\alpha(0) - 1 = 1 + 4 - 4 - 1 = 0$. Donc $C \\in S_\\alpha$.</p>
            `
        },
        // ============ 5.(e) ============
        {
            id: "p3q5e",
            texte: "En déduire que pour tout réel $\\alpha$, le plan $P$ coupe la sphère $S_\\alpha$ selon un cercle $(C_\\alpha)$.",
            solution: `
                <p>La distance du centre $I_\\alpha(0,1,\\alpha)$ au plan $P : x + y + 2z - 1 = 0$ est :</p>
                <p>$d(I_\\alpha, P) = \\dfrac{|0 + 1 + 2\\alpha - 1|}{\\sqrt{6}} = \\dfrac{2|\\alpha|}{\\sqrt{6}}$.</p>
                <p>On compare $d(I_\\alpha, P)$ et $R_\\alpha$ :</p>
                <p>$R_\\alpha^2 - d(I_\\alpha, P)^2 = (\\alpha^2 + 2) - \\dfrac{4\\alpha^2}{6} = \\alpha^2 + 2 - \\dfrac{2\\alpha^2}{3} = \\dfrac{\\alpha^2}{3} + 2 > 0$.</p>
                <p>La distance est donc strictement inférieure au rayon. L'intersection est donc un cercle $(C_\\alpha)$ pour tout $\\alpha \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 6.(a) ============
        {
            id: "p3q6a",
            texte: "Soit $r_\\alpha$ le rayon du cercle $(C_\\alpha)$. Montrer que $r_\\alpha = \\sqrt{5}$ si et seulement si $\\alpha = 3$ ou $\\alpha = -3$.",
            solution: `
                <p>$r_\\alpha^2 = R_\\alpha^2 - d(I_\\alpha, P)^2 = \\dfrac{\\alpha^2}{3} + 2$.</p>
                <p>$r_\\alpha = \\sqrt{5} \\iff r_\\alpha^2 = 5 \\iff \\dfrac{\\alpha^2}{3} + 2 = 5 \\iff \\dfrac{\\alpha^2}{3} = 3 \\iff \\alpha^2 = 9 \\iff \\alpha = 3 \\text{ ou } \\alpha = -3$.</p>
            `
        },
        // ============ 6.(b) ============
        {
            id: "p3q6b",
            texte: "Justifier que les centres des cercles $(C_{-3})$ et $(C_3)$ sont respectivement le point $B$ et un point $B'$ dont on déterminera les coordonnées.",
            solution: `
                <p>Le centre du cercle $(C_\\alpha)$ est le projeté orthogonal $H_\\alpha$ de $I_\\alpha$ sur $P$.</p>
                <p>La droite passant par $I_\\alpha(0,1,\\alpha)$ et perpendiculaire à $P$ a pour direction $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
                <p>Paramétrage : $\\begin{cases} x = t \\\\ y = 1 + t \\\\ z = \\alpha + 2t \\end{cases} ; t \\in \\mathbb{R}$.</p>
                <p>En injectant dans $P$ : $t + (1+t) + 2(\\alpha+2t) - 1 = 0 \\Rightarrow 6t + 2\\alpha = 0 \\Rightarrow t = -\\dfrac{\\alpha}{3}$.</p>
                <p>Donc $H_\\alpha\\left(-\\dfrac{\\alpha}{3}, 1 - \\dfrac{\\alpha}{3}, \\alpha - \\dfrac{2\\alpha}{3}\\right) = \\left(-\\dfrac{\\alpha}{3}, 1 - \\dfrac{\\alpha}{3}, \\dfrac{\\alpha}{3}\\right)$.</p>
                <p>Pour $\\alpha = -3$ : $H_{-3}(1, 2, -1) = B$. Donc le centre de $(C_{-3})$ est $B$.</p>
                <p>Pour $\\alpha = 3$ : $H_3(-1, 0, 1) = B'$. Donc le centre de $(C_3)$ est $B'(-1,0,1)$.</p>
            `
        },
        // ============ 6.(c) ============
        {
            id: "p3q6c",
            texte: "Vérifier que $ABCB'$ est un losange et calculer son aire.",
            solution: `
                <p>$A(1,0,0)$, $B(1,2,-1)$, $C(-1,2,0)$, $B'(-1,0,1)$.</p>
                <p>$\\vec{AB} \\begin{pmatrix} 0 \\\\ 2 \\\\ -1 \\end{pmatrix}$, $\\vec{BC} \\begin{pmatrix} -2 \\\\ 0 \\\\ 1 \\end{pmatrix}$, $\\vec{CB'} \\begin{pmatrix} 0 \\\\ -2 \\\\ 1 \\end{pmatrix}$, $\\vec{B'A} \\begin{pmatrix} 2 \\\\ 0 \\\\ -1 \\end{pmatrix}$.</p>
                <p>On a $\\vec{AB} = -\\vec{CB'}$ et $\\vec{BC} = -\\vec{B'A}$. Donc $ABCB'$ est un parallélogramme.</p>
                <p>$AB = \\sqrt{0^2 + 2^2 + (-1)^2} = \\sqrt{5}$ et $BC = \\sqrt{(-2)^2 + 0^2 + 1^2} = \\sqrt{5}$.</p>
                <p>Un parallélogramme ayant deux côtés consécutifs de même longueur est un losange.</p>
                <p>Aire du losange = $\\|\\vec{AB} \\wedge \\vec{BC}\\|$.</p>
                <p>$\\vec{AB} \\wedge \\vec{BC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 0 & 2 & -1 \\\\ -2 & 0 & 1 \\end{vmatrix} = \\vec{i}(2 - 0) - \\vec{j}(0 - 2) + \\vec{k}(0 + 4) \\begin{pmatrix} 2 \\\\ 2 \\\\ 4 \\end{pmatrix}$.</p>
                <p>$\\|\\vec{AB} \\wedge \\vec{BC}\\| = \\sqrt{2^2 + 2^2 + 4^2} = \\sqrt{4 + 4 + 16} = \\sqrt{24} = 2\\sqrt{6}$.</p>
                <p>Donc l'aire du losange $ABCB'$ est $2\\sqrt{6}$ unités d'aire.</p>
            `
        }
    ]
});