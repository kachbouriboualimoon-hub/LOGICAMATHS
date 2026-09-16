// data/problemes/part4.js
// Problème 4 – Triangle, plans, sphères et cercles
window.problemes.items.push({
    id: 4,
    titre: "Triangle, plans, sphères et cercles",
    enonce: `
        <p>L'espace est rapporté à un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.<br>
        On considère les points $A(2,2,\\sqrt{2})$, $B(1,3,0)$ et $C(3,1,0)$.</p>
    `,
    astuces: `
        <p>Pour montrer qu'un triangle est rectangle en un point, on calcule le produit scalaire des deux vecteurs issus de ce point et on vérifie qu'il est nul.</p>
        <p>Pour trouver le centre du cercle circonscrit à un triangle rectangle, il suffit de prendre le milieu de l'hypoténuse.</p>
        <p>Le rayon du cercle d'intersection d'une sphère de rayon $R$ et d'un plan à distance $d$ du centre est $r = \\sqrt{R^2 - d^2}$.</p>
        <p>Pour montrer que quatre points forment un tétraèdre, on vérifie que le produit mixte des trois vecteurs issus d'un même sommet est non nul.</p>
    `,
    erreurs: `
        <p>Ne pas oublier la valeur absolue dans la formule du volume d'un tétraèdre.</p>
        <p>Pour le plan médiateur, vérifier que la droite est bien perpendiculaire au segment et passe par son milieu.</p>
    `,
    questions: [
        // ============ 1.(a) ============
        {
            id: "p4q1a",
            texte: "Calculer les composantes du vecteur $\\vec{AB} \\wedge \\vec{AC}$.",
            solution: `
                <p>$\\vec{AB} \\begin{pmatrix} -1 \\\\ 1 \\\\ -\\sqrt{2} \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} 1 \\\\ -1 \\\\ -\\sqrt{2} \\end{pmatrix}$.</p>
                <p>$\\vec{AB} \\wedge \\vec{AC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1 & 1 & -\\sqrt{2} \\\\ 1 & -1 & -\\sqrt{2} \\end{vmatrix}
                = \\vec{i}(-\\sqrt{2} - \\sqrt{2}) - \\vec{j}(\\sqrt{2} + \\sqrt{2}) + \\vec{k}(1 - 1) \\begin{pmatrix} -2\\sqrt{2} \\\\ -2\\sqrt{2} \\\\ 0 \\end{pmatrix}$.</p>
            `
        },
        // ============ 1.(b) ============
        {
            id: "p4q1b",
            texte: "En déduire que les points $A, B$ et $C$ déterminent le plan $P$ d'équation $x + y - 4 = 0$.",
            solution: `
                <p>Comme $\\vec{AB} \\wedge \\vec{AC} \\neq \\vec{0}$, les points $A, B, C$ ne sont pas alignés et déterminent donc un plan $P$.</p>
                <p>Le vecteur $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ est normal à $P$ (obtenu en simplifiant $\\vec{AB} \\wedge \\vec{AC}$ par $-2\\sqrt{2}$).</p>
                <p>Donc $P : x + y + d = 0$. En utilisant $A(2,2,\\sqrt{2})$ : $2 + 2 + d = 0 \\Rightarrow d = -4$.</p>
                <p>Donc $P : x + y - 4 = 0$.</p>
            `
        },
        // ============ 1.(c) ============
        {
            id: "p4q1c",
            texte: "Calculer l'aire du triangle $ABC$. En déduire la distance du point $B$ à la droite $(AC)$.",
            solution: `
                <p>Aire$(ABC) = \\dfrac{1}{2} \\|\\vec{AB} \\wedge \\vec{AC}\\| = \\dfrac{1}{2} \\sqrt{(-2\\sqrt{2})^2 + (-2\\sqrt{2})^2 + 0^2} = \\dfrac{1}{2} \\sqrt{8 + 8} = \\dfrac{1}{2} \\sqrt{16} = 2$.</p>
                <p>Or Aire$(ABC) = \\dfrac{1}{2} \\times AC \\times d(B, (AC))$.</p>
                <p>$AC = \\|\\vec{AC}\\| = \\sqrt{1^2 + (-1)^2 + (-\\sqrt{2})^2} = \\sqrt{1 + 1 + 2} = 2$.</p>
                <p>Donc $2 = \\dfrac{1}{2} \\times 2 \\times d(B, (AC)) \\Rightarrow d(B, (AC)) = 2$.</p>
            `
        },
        // ============ 1.(d) ============
        {
            id: "p4q1d",
            texte: "Calculer la distance $AB$. En déduire que $A$ est le projeté orthogonal de $B$ sur la droite $(AC)$.",
            solution: `
                <p>$AB = \\|\\vec{AB}\\| = \\sqrt{(-1)^2 + 1^2 + (-\\sqrt{2})^2} = \\sqrt{1 + 1 + 2} = \\sqrt{4} = 2$.</p>
                <p>On a $d(B, (AC)) = 2$ et $AB = 2$. Comme $A \\in (AC)$, la distance de $B$ à la droite $(AC)$ est atteinte en $A$.</p>
                <p>Donc $A$ est le projeté orthogonal de $B$ sur $(AC)$.</p>
            `
        },
        // ============ 1.(e) ============
        {
            id: "p4q1e",
            texte: "Montrer que $ABC$ est un triangle isocèle et rectangle en $A$.",
            solution: `
                <p>$AB = 2$ et $AC = 2$, donc $AB = AC$ : le triangle est isocèle en $A$.</p>
                <p>$\\vec{AB} \\cdot \\vec{AC} = (-1)(1) + (1)(-1) + (-\\sqrt{2})(-\\sqrt{2}) = -1 - 1 + 2 = 0$.</p>
                <p>Donc $\\vec{AB} \\perp \\vec{AC}$ : le triangle est rectangle en $A$.</p>
            `
        },
        // ============ 1.(f) ============
        {
            id: "p4q1f",
            texte: "Calculer de deux manières la distance $BC$.",
            solution: `
                <p><strong>Méthode 1 :</strong> $BC = \\|\\vec{BC}\\| = \\sqrt{(3-1)^2 + (1-3)^2 + 0^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$.</p>
                <p><strong>Méthode 2 :</strong> D'après le théorème de Pythagore dans le triangle $ABC$ rectangle en $A$ :</p>
                <p>$BC^2 = AB^2 + AC^2 = 2^2 + 2^2 = 8 \\Rightarrow BC = \\sqrt{8} = 2\\sqrt{2}$.</p>
            `
        },
        // ============ 1.(g) ============
        {
            id: "p4q1g",
            texte: "Calculer de deux manières $\\vec{BC} \\cdot \\vec{BA}$.",
            solution: `
                <p><strong>Méthode 1 (analytique) :</strong></p>
                <p>$\\vec{BC} \\begin{pmatrix} 2 \\\\ -2 \\\\ 0 \\end{pmatrix}$ et $\\vec{BA} \\begin{pmatrix} 1 \\\\ -1 \\\\ \\sqrt{2} \\end{pmatrix}$.</p>
                <p>$\\vec{BC} \\cdot \\vec{BA} = 2(1) + (-2)(-1) + 0(\\sqrt{2}) = 2 + 2 = 4$.</p>
                <p><strong>Méthode 2 (géométrique) :</strong></p>
                <p>$\\vec{BC} \\cdot \\vec{BA} = BC \\times BA \\times \\cos(\\angle ABC)$.</p>
                <p>Dans le triangle isocèle rectangle en $A$, $\\angle ABC = 45^\\circ$.</p>
                <p>$\\vec{BC} \\cdot \\vec{BA} = 2\\sqrt{2} \\times 2 \\times \\cos(45^\\circ) = 4\\sqrt{2} \\times \\dfrac{\\sqrt{2}}{2} = 4$.</p>
            `
        },
        // ============ 2.(a) ============
        {
            id: "p4q2a",
            texte: "Donner une équation cartésienne non réduite de la sphère $(S)$.",
            solution: `
                <p>Le centre est $I(3,3,0)$ et le rayon $R = 2$.</p>
                <p>$(x-3)^2 + (y-3)^2 + z^2 = 4$.</p>
                <p>En développant : $x^2 - 6x + 9 + y^2 - 6y + 9 + z^2 = 4 \\Rightarrow x^2 + y^2 + z^2 - 6x - 6y + 14 = 0$.</p>
            `
        },
        // ============ 2.(b) ============
        {
            id: "p4q2b",
            texte: "Donner une représentation paramétrique de la droite $\\Delta$ perpendiculaire au plan $P$ et passant par le point $I$.",
            solution: `
                <p>La droite $\\Delta$ est perpendiculaire à $P$, donc elle a pour vecteur directeur le vecteur normal de $P$ : $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$.</p>
                <p>Elle passe par $I(3,3,0)$.</p>
                <p>Représentation paramétrique :</p>
                <p>$\\begin{cases} x = 3 + t \\\\ y = 3 + t \\\\ z = 0 \\end{cases} ; t \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 2.(c) ============
        {
            id: "p4q2c",
            texte: "Déterminer les coordonnées du point $H$ intersection de $P$ et $\\Delta$.",
            solution: `
                <p>Injectons les équations paramétriques de $\\Delta$ dans l'équation de $P$ :</p>
                <p>$(3+t) + (3+t) - 4 = 0 \\Rightarrow 2t + 2 = 0 \\Rightarrow t = -1$.</p>
                <p>Donc $H(3-1, 3-1, 0) = H(2,2,0)$.</p>
            `
        },
        // ============ 2.(d) ============
        {
            id: "p4q2d",
            texte: "Vérifier que $H$ est le milieu du segment $[BC]$.",
            solution: `
                <p>$B(1,3,0)$ et $C(3,1,0)$.</p>
                <p>Milieu de $[BC]$ : $\\left(\\dfrac{1+3}{2}, \\dfrac{3+1}{2}, \\dfrac{0+0}{2}\\right) = (2,2,0) = H$.</p>
            `
        },
        // ============ 2.(e) ============
        {
            id: "p4q2e",
            texte: "En déduire que $H$ est le centre du cercle circonscrit au triangle $ABC$.",
            solution: `
                <p>Le triangle $ABC$ est rectangle en $A$. Le centre de son cercle circonscrit est le milieu de son hypoténuse $[BC]$.</p>
                <p>Comme $H$ est le milieu de $[BC]$, $H$ est bien le centre du cercle circonscrit au triangle $ABC$.</p>
            `
        },
        // ============ 2.(f) ============
        {
            id: "p4q2f",
            texte: "Calculer la distance du point $I$ au plan $P$.",
            solution: `
                <p>$d(I,P) = \\dfrac{|3 + 3 - 4|}{\\sqrt{1^2 + 1^2 + 0^2}} = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$.</p>
            `
        },
        // ============ 2.(g) ============
        {
            id: "p4q2g",
            texte: "Montrer que le plan $P$ coupe la sphère $(S)$ suivant le cercle $(\\zeta)$ de rayon $\\sqrt{2}$ et de centre $H(2,2,0)$.",
            solution: `
                <p>Le rayon $r$ du cercle d'intersection est donné par :</p>
                <p>$r = \\sqrt{R^2 - d(I,P)^2} = \\sqrt{2^2 - (\\sqrt{2})^2} = \\sqrt{4 - 2} = \\sqrt{2}$.</p>
                <p>Le centre de ce cercle est le projeté orthogonal de $I$ sur $P$, c'est-à-dire $H(2,2,0)$.</p>
            `
        },
        // ============ 3.(a)i ============
        {
            id: "p4q3ai",
            texte: "Justifier que $(S_\\alpha)$ est la sphère de centre $J(\\cos \\alpha, -\\cos \\alpha, \\sqrt{2} \\sin \\alpha)$ et de rayon $2\\sqrt{2}$.",
            solution: `
                <p>$(S_\\alpha) : x^2 + y^2 + z^2 - 2x \\cos \\alpha + 2y \\cos \\alpha - 2\\sqrt{2} z \\sin \\alpha - 6 = 0$.</p>
                <p>On met sous forme canonique :</p>
                <p>$(x - \\cos \\alpha)^2 - \\cos^2 \\alpha + (y + \\cos \\alpha)^2 - \\cos^2 \\alpha + (z - \\sqrt{2} \\sin \\alpha)^2 - 2 \\sin^2 \\alpha - 6 = 0$.</p>
                <p>$(x - \\cos \\alpha)^2 + (y + \\cos \\alpha)^2 + (z - \\sqrt{2} \\sin \\alpha)^2 = 2\\cos^2 \\alpha + 2\\sin^2 \\alpha + 6 = 2 + 6 = 8$.</p>
                <p>Donc le centre est $J(\\cos \\alpha, -\\cos \\alpha, \\sqrt{2} \\sin \\alpha)$ et le rayon est $R = \\sqrt{8} = 2\\sqrt{2}$.</p>
            `
        },
        // ============ 3.(a)ii ============
        {
            id: "p4q3aii",
            texte: "Déterminer une équation cartésienne du plan $Q$ parallèle au plan $P$ et passant par le point $O$.",
            solution: `
                <p>$Q$ est parallèle à $P$, donc il a la même équation normale : $x + y + d = 0$.</p>
                <p>$Q$ passe par $O(0,0,0)$ : $0 + 0 + d = 0 \\Rightarrow d = 0$.</p>
                <p>Donc $Q : x + y = 0$.</p>
            `
        },
        // ============ 3.(a)iii ============
        {
            id: "p4q3aiii",
            texte: "Donner une équation cartésienne de la sphère $S'$ de centre $O$ et de rayon $\\sqrt{2}$.",
            solution: `
                <p>Centre $O(0,0,0)$ et rayon $R' = \\sqrt{2}$.</p>
                <p>$x^2 + y^2 + z^2 = 2$.</p>
            `
        },
        // ============ 3.(a)iv ============
        {
            id: "p4q3aiv",
            texte: "Montrer que $Q$ coupe $S'$ suivant un cercle $\\zeta'$ dont on déterminera le centre et le rayon.",
            solution: `
                <p>Distance de $O$ à $Q$ : $d(O, Q) = \\dfrac{|0 + 0|}{\\sqrt{2}} = 0$.</p>
                <p>Comme $d(O, Q) = 0 < R' = \\sqrt{2}$, l'intersection est un cercle.</p>
                <p>Le centre de ce cercle est le projeté orthogonal de $O$ sur $Q$, c'est-à-dire $O(0,0,0)$ lui-même.</p>
                <p>Le rayon du cercle est $r' = \\sqrt{R'^2 - d(O,Q)^2} = \\sqrt{2 - 0} = \\sqrt{2}$.</p>
            `
        },
        // ============ 3.(a)v ============
        {
            id: "p4q3av",
            texte: "Montrer que $J$ est un point de $\\zeta'$.",
            solution: `
                <p>$J(\\cos \\alpha, -\\cos \\alpha, \\sqrt{2} \\sin \\alpha)$.</p>
                <p>Vérifions si $J \\in S'$ : $\\cos^2 \\alpha + (-\\cos \\alpha)^2 + (\\sqrt{2} \\sin \\alpha)^2 = \\cos^2 \\alpha + \\cos^2 \\alpha + 2\\sin^2 \\alpha = 2(\\cos^2 \\alpha + \\sin^2 \\alpha) = 2$. Donc $J \\in S'$.</p>
                <p>Vérifions si $J \\in Q$ : $\\cos \\alpha + (-\\cos \\alpha) = 0$. Donc $J \\in Q$.</p>
                <p>Par conséquent, $J \\in S' \\cap Q = \\zeta'$.</p>
            `
        },
        // ============ 3.(b) ============
        {
            id: "p4q3b",
            texte: "Montrer que $(S_\\alpha)$ et $P$ sont tangents au point $K(2 + \\cos \\alpha, 2 - \\cos \\alpha, \\sqrt{2} \\sin \\alpha)$.",
            solution: `
                <p>Distance de $J$ à $P$ : $d(J, P) = \\dfrac{|\\cos \\alpha - \\cos \\alpha - 4|}{\\sqrt{2}} = \\dfrac{4}{\\sqrt{2}} = 2\\sqrt{2}$.</p>
                <p>Comme $d(J, P) = R = 2\\sqrt{2}$, la sphère $(S_\\alpha)$ et le plan $P$ sont tangents.</p>
                <p>Le point de tangence est le projeté orthogonal de $J$ sur $P$.</p>
                <p>La droite perpendiculaire à $P$ passant par $J$ a pour équations paramétriques : $\\begin{cases} x = \\cos \\alpha + t \\\\ y = -\\cos \\alpha + t \\\\ z = \\sqrt{2} \\sin \\alpha \\end{cases}$.</p>
                <p>Injectons dans $P$ : $(\\cos \\alpha + t) + (-\\cos \\alpha + t) - 4 = 0 \\Rightarrow 2t - 4 = 0 \\Rightarrow t = 2$.</p>
                <p>Le point de tangence est donc $(\\cos \\alpha + 2, -\\cos \\alpha + 2, \\sqrt{2} \\sin \\alpha) = K$.</p>
            `
        },
        // ============ 3.(c) ============
        {
            id: "p4q3c",
            texte: "Calculer la distance $IK$.",
            solution: `
                <p>$I(3,3,0)$ et $K(2+\\cos \\alpha, 2-\\cos \\alpha, \\sqrt{2}\\sin \\alpha)$.</p>
                <p>$\\vec{IK} \\begin{pmatrix} \\cos \\alpha - 1 \\\\ -\\cos \\alpha - 1 \\\\ \\sqrt{2} \\sin \\alpha \\end{pmatrix}$.</p>
                <p>$IK^2 = (\\cos \\alpha - 1)^2 + (-\\cos \\alpha - 1)^2 + (\\sqrt{2} \\sin \\alpha)^2$</p>
                <p>$IK^2 = (\\cos^2 \\alpha - 2\\cos \\alpha + 1) + (\\cos^2 \\alpha + 2\\cos \\alpha + 1) + 2\\sin^2 \\alpha$</p>
                <p>$IK^2 = 2\\cos^2 \\alpha + 2 + 2\\sin^2 \\alpha = 2(\\cos^2 \\alpha + \\sin^2 \\alpha) + 2 = 4$.</p>
                <p>Donc $IK = 2$.</p>
            `
        },
        // ============ 3.(d) ============
        {
            id: "p4q3d",
            texte: "En déduire que le point $K$ appartient à un cercle que l'on précisera.",
            solution: `
                <p>On a $IK = 2$, donc $K$ appartient à la sphère de centre $I$ et de rayon 2, c'est-à-dire $(S)$.</p>
                <p>De plus, $K \\in P$ (d'après 3.b, $K$ est le point de tangence de $(S_\\alpha)$ et $P$).</p>
                <p>Donc $K \\in (S) \\cap P = (\\zeta)$.</p>
                <p>Le point $K$ appartient au cercle $(\\zeta)$ de centre $H(2,2,0)$ et de rayon $\\sqrt{2}$.</p>
            `
        },
        // ============ 4 ============
        {
            id: "p4q4",
            texte: "Vérifier que $ABCJ$ est un tétraèdre et calculer son volume.",
            solution: `
                <p>Calculons le produit mixte $[\\vec{AB}, \\vec{AC}, \\vec{AJ}]$.</p>
                <p>$\\vec{AJ} \\begin{pmatrix} \\cos \\alpha - 2 \\\\ -\\cos \\alpha - 2 \\\\ \\sqrt{2}\\sin \\alpha - \\sqrt{2} \\end{pmatrix}$.</p>
                <p>$[\\vec{AB}, \\vec{AC}, \\vec{AJ}] = (\\vec{AB} \\wedge \\vec{AC}) \\cdot \\vec{AJ} = -2\\sqrt{2}(\\cos \\alpha - 2) - 2\\sqrt{2}(-\\cos \\alpha - 2) + 0$</p>
                <p>$= -2\\sqrt{2}\\cos \\alpha + 4\\sqrt{2} + 2\\sqrt{2}\\cos \\alpha + 4\\sqrt{2} = 8\\sqrt{2} \\neq 0$.</p>
                <p>Donc $ABCJ$ est un tétraèdre.</p>
                <p>Volume $V = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AJ}]| = \\dfrac{1}{6} \\times 8\\sqrt{2} = \\dfrac{4\\sqrt{2}}{3}$ unités de volume.</p>
            `
        },
        // ============ 5 ============
        {
            id: "p4q5",
            texte: "Vérifier que les tétraèdres $ABCJ$ et $ABCO$ ont même volume.",
            solution: `
                <p>Volume de $ABCO$ : $V' = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AO}]|$.</p>
                <p>$\\vec{AO} \\begin{pmatrix} -2 \\\\ -2 \\\\ -\\sqrt{2} \\end{pmatrix}$.</p>
                <p>$[\\vec{AB}, \\vec{AC}, \\vec{AO}] = -2\\sqrt{2}(-2) - 2\\sqrt{2}(-2) + 0 = 4\\sqrt{2} + 4\\sqrt{2} = 8\\sqrt{2}$.</p>
                <p>Donc $V' = \\dfrac{1}{6} \\times 8\\sqrt{2} = \\dfrac{4\\sqrt{2}}{3}$.</p>
                <p>On a bien $V = V'$.</p>
            `
        },
        // ============ 6 ============
        {
            id: "p4q6",
            texte: "Montrer que $HOJK$ est un rectangle et calculer son aire.",
            solution: `
                <p>$H(2,2,0)$, $O(0,0,0)$, $J(\\cos \\alpha, -\\cos \\alpha, \\sqrt{2}\\sin \\alpha)$, $K(2+\\cos \\alpha, 2-\\cos \\alpha, \\sqrt{2}\\sin \\alpha)$.</p>
                <p>$\\vec{HO} \\begin{pmatrix} -2 \\\\ -2 \\\\ 0 \\end{pmatrix}$ et $\\vec{JK} \\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix}$. On a $\\vec{HO} = -\\vec{JK}$, donc $HOJK$ est un parallélogramme.</p>
                <p>$\\vec{OH} \\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix}$ et $\\vec{OJ} \\begin{pmatrix} \\cos \\alpha \\\\ -\\cos \\alpha \\\\ \\sqrt{2}\\sin \\alpha \\end{pmatrix}$.</p>
                <p>$\\vec{OH} \\cdot \\vec{OJ} = 2\\cos \\alpha - 2\\cos \\alpha + 0 = 0$. Donc $\\vec{OH} \\perp \\vec{OJ}$.</p>
                <p>Le parallélogramme $HOJK$ a un angle droit en $O$, c'est donc un rectangle.</p>
                <p>Aire de $HOJK$ = $\\|\\vec{OH}\\| \\times \\|\\vec{OJ}\\|$.</p>
                <p>$\\|\\vec{OH}\\| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$.</p>
                <p>$\\|\\vec{OJ}\\| = \\sqrt{\\cos^2 \\alpha + (-\\cos \\alpha)^2 + 2\\sin^2 \\alpha} = \\sqrt{2(\\cos^2 \\alpha + \\sin^2 \\alpha)} = \\sqrt{2}$.</p>
                <p>Aire = $2\\sqrt{2} \\times \\sqrt{2} = 4$ unités d'aire.</p>
            `
        },
        // ============ 7 ============
        {
            id: "p4q7",
            texte: "Montrer que les segments $[OH]$ et $[JK]$ ont le même plan médiateur.",
            solution: `
                <p>Plan médiateur de $[OH]$ : il est perpendiculaire à $(OH)$ et passe par le milieu de $[OH]$, $M_1(1,1,0)$.</p>
                <p>Vecteur normal : $\\vec{OH} \\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix} \\sim \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$.</p>
                <p>Équation : $1(x-1) + 1(y-1) + 0(z-0) = 0 \\Rightarrow x + y - 2 = 0$.</p>
                <p>Plan médiateur de $[JK]$ : il est perpendiculaire à $(JK)$ et passe par le milieu de $[JK]$, $M_2\\left(\\dfrac{2+2\\cos \\alpha}{2}, \\dfrac{2-2\\cos \\alpha}{2}, \\sqrt{2}\\sin \\alpha\\right) = (1+\\cos \\alpha, 1-\\cos \\alpha, \\sqrt{2}\\sin \\alpha)$.</p>
                <p>Vecteur normal : $\\vec{JK} \\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix} \\sim \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$.</p>
                <p>Équation : $1(x - (1+\\cos \\alpha)) + 1(y - (1-\\cos \\alpha)) + 0(z - \\sqrt{2}\\sin \\alpha) = 0 \\Rightarrow x - 1 - \\cos \\alpha + y - 1 + \\cos \\alpha = 0 \\Rightarrow x + y - 2 = 0$.</p>
                <p>Les deux plans médiateurs ont la même équation, donc ils sont confondus.</p>
            `
        },
        // ============ 8 ============
        {
            id: "p4q8",
            texte: "Démontrer que les points $I, H$ et $O$ sont alignés. En déduire que les cercles $\\zeta$ et $\\zeta'$ ont le même axe.",
            solution: `
                <p>$I(3,3,0)$, $H(2,2,0)$, $O(0,0,0)$.</p>
                <p>$\\vec{IH} \\begin{pmatrix} -1 \\\\ -1 \\\\ 0 \\end{pmatrix}$ et $\\vec{IO} \\begin{pmatrix} -3 \\\\ -3 \\\\ 0 \\end{pmatrix}$.</p>
                <p>On a $\\vec{IO} = 3\\vec{IH}$. Les vecteurs sont colinéaires, donc les points $I, H, O$ sont alignés.</p>
                <p>L'axe d'un cercle est la droite perpendiculaire à son plan passant par son centre.</p>
                <p>Pour $\\zeta$ (centre $H$, plan $P$), l'axe est la droite perpendiculaire à $P$ passant par $H$. C'est la droite $(IH)$.</p>
                <p>Pour $\\zeta'$ (centre $O$, plan $Q$), l'axe est la droite perpendiculaire à $Q$ passant par $O$.</p>
                <p>Comme $Q \\parallel P$, cette droite est aussi perpendiculaire à $P$. Elle passe par $O$.</p>
                <p>Or $O \\in (IH)$ et $(IH) \\perp P$, donc l'axe de $\\zeta'$ est également la droite $(IH)$.</p>
                <p>Les cercles $\\zeta$ et $\\zeta'$ ont donc le même axe, qui est la droite $(IH)$.</p>
            `
        }
    ]
});