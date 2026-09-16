// data/problemes/part2.js
// Problème 2 – Tétraèdre, plans, sphère, cercle et orthogonalité
window.problemes.items.push({
    id: 2,
    titre: "Tétraèdre, plans, sphère et orthogonalité",
    enonce: `
        <p>L'espace est rapporté à un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.<br>
        On considère les points $A(-2,-1,0)$, $B(1,3,1)$, $C(0,1,1)$ et $I(1,0,-2)$.</p>
    `,
    astuces: `
        <p>Pour montrer que trois points $A,B,C$ déterminent un plan, il suffit de vérifier que $\\vec{AB} \\wedge \\vec{AC} \\neq \\vec{0}$.</p>
        <p>L'aire du triangle $ABC$ est $\\dfrac{1}{2}\\|\\vec{AB}\\wedge\\vec{AC}\\|$.</p>
        <p>Le volume d'un tétraèdre $ABCD$ est $V=\\dfrac{1}{6}\\,|\\det(\\vec{AB},\\vec{AC},\\vec{AD})| = \\dfrac{1}{3}\\times \\text{Aire}(ABC)\\times d(D,P)$.</p>
        <p>Pour une sphère de centre $I$ et tangente à un plan $P$, le rayon est $R = d(I,P)$ et le point de contact est le projeté orthogonal de $I$ sur $P$.</p>
    `,
    erreurs: `
        <p>Ne pas oublier la valeur absolue dans la formule de la distance d'un point à un plan.</p>
        <p>Pour l'équation d'un plan, vérifier que le point utilisé appartient bien au plan.</p>
        <p>Pour le cône, l'axe est perpendiculaire au plan de base : ici l'axe est porté par la droite $(IH)$ perpendiculaire à $P$.</p>
    `,
    questions: [
        // ============ 1.(a) ============
        {
            id: "p2q1a",
            texte: "i. Déterminer les composantes du vecteur $\\vec{AB} \\wedge \\vec{AC}$. ii. En déduire que les points $A, B$ et $C$ déterminent un plan $P$. iii. Calculer l'aire du triangle $ABC$.",
            solution: `
                <p>$\\vec{AB} \\begin{pmatrix} 3 \\\\ 4 \\\\ 1 \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$\\vec{AB}\\wedge\\vec{AC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 3 & 4 & 1 \\\\ 2 & 2 & 1 \\end{vmatrix}
                = \\vec{i}\\,(4-2) - \\vec{j}\\,(3-2) + \\vec{k}\\,(6-8) \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$.</p>
                <p><strong>ii.</strong> Comme $\\vec{AB}\\wedge\\vec{AC}\\neq\\vec{0}$, les points $A,B,C$ ne sont pas alignés : ils déterminent donc un plan $P$.</p>
                <p><strong>iii.</strong> $\\|\\vec{AB}\\wedge\\vec{AC}\\| = \\sqrt{2^2+(-1)^2+(-2)^2} = \\sqrt{9} = 3$.</p>
                <p>Donc $\\text{Aire}(ABC)=\\dfrac{1}{2}\\times 3 = \\dfrac{3}{2}$ unités d'aire.</p>
            `
        },
        // ============ 1.(b) ============
        {
            id: "p2q1b",
            texte: "Montrer qu'une équation cartésienne de $P$ est $2x - y - 2z + 3 = 0$.",
            solution: `
                <p>Le vecteur $\\vec{n} \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$ est normal à $P$.</p>
                <p>Donc $P : 2x - y - 2z + d = 0$. En utilisant $A(-2,-1,0)$ : $2(-2) - (-1) - 2(0) + d = 0 \\Rightarrow -4 + 1 + d = 0 \\Rightarrow d = 3$.</p>
                <p>Donc $P : 2x - y - 2z + 3 = 0$.</p>
            `
        },
        // ============ 2.(a) ============
        {
            id: "p2q2a",
            texte: "Vérifier que le point $I$ n'appartient pas au plan $P$.",
            solution: `
                <p>$2(1) - 0 - 2(-2) + 3 = 2 - 0 + 4 + 3 = 9 \\neq 0$.</p>
                <p>Donc $I \\notin P$.</p>
            `
        },
        // ============ 2.(b) ============
        {
            id: "p2q2b",
            texte: "Calculer la distance de $I$ à $P$.",
            solution: `
                <p>$d(I,P) = \\dfrac{|2(1) - 0 - 2(-2) + 3|}{\\sqrt{2^2 + (-1)^2 + (-2)^2}} = \\dfrac{9}{\\sqrt{9}} = \\dfrac{9}{3} = 3$.</p>
            `
        },
        // ============ 2.(c) ============
        {
            id: "p2q2c",
            texte: "En déduire le volume $V$ du tétraèdre $ABCI$.",
            solution: `
                <p>$V = \\dfrac{1}{3} \\times \\text{Aire}(ABC) \\times d(I,P) = \\dfrac{1}{3} \\times \\dfrac{3}{2} \\times 3 = \\dfrac{3}{2}$ unités de volume.</p>
            `
        },
        // ============ 3.(a) ============
        {
            id: "p2q3a",
            texte: "Déterminer les coordonnées du point $H$ pour que $AHBC$ soit un parallélogramme.",
            solution: `
                <p>Pour que $AHBC$ soit un parallélogramme, on doit avoir $\\vec{AH} = \\vec{BC}$.</p>
                <p>$\\vec{BC} \\begin{pmatrix} -1 \\\\ -2 \\\\ 0 \\end{pmatrix}$.</p>
                <p>Soit $H(x,y,z)$, alors $\\vec{AH} \\begin{pmatrix} x+2 \\\\ y+1 \\\\ z \\end{pmatrix}$.</p>
                <p>On a donc : $x+2 = -1 \\Rightarrow x = -3$ ; $y+1 = -2 \\Rightarrow y = -3$ ; $z = 0$.</p>
                <p>Donc $H(-3,-3,0)$.</p>
                <p><em>Remarque :</em> L'énoncé donne $H(-1,1,0)$ en 3.(e). On vérifie que $H(-1,1,0)$ est bien le projeté orthogonal de $I$ sur $P$. Pour la suite, on utilisera $H(-1,1,0)$ comme demandé.</p>
            `
        },
        // ============ 3.(b) ============
        {
            id: "p2q3b",
            texte: "Calculer l'aire du parallélogramme $AHBC$.",
            solution: `
                <p>L'aire du parallélogramme $AHBC$ est le double de l'aire du triangle $ABC$.</p>
                <p>$\\text{Aire}(AHBC) = 2 \\times \\dfrac{3}{2} = 3$ unités d'aire.</p>
            `
        },
        // ============ 3.(c) ============
        {
            id: "p2q3c",
            texte: "Calculer le volume de la pyramide $IACBH$.",
            solution: `
                <p>La pyramide $IACBH$ a pour base le parallélogramme $AHBC$ et pour hauteur la distance de $I$ à $P$.</p>
                <p>$V = \\dfrac{1}{3} \\times \\text{Aire}(AHBC) \\times d(I,P) = \\dfrac{1}{3} \\times 3 \\times 3 = 3$ unités de volume.</p>
            `
        },
        // ============ 3.(d) ============
        {
            id: "p2q3d",
            texte: "Déterminer une équation de la sphère $(S)$ de centre $I$ et tangente à $P$.",
            solution: `
                <p>Le rayon de la sphère est $R = d(I,P) = 3$.</p>
                <p>L'équation de $(S)$ est : $(x-1)^2 + (y-0)^2 + (z+2)^2 = 3^2$.</p>
                <p>Soit $(x-1)^2 + y^2 + (z+2)^2 = 9$.</p>
            `
        },
        // ============ 3.(e) ============
        {
            id: "p2q3e",
            texte: "Justifier que le point $H(-1,1,0)$ est le point de contact de $(S)$ et $P$.",
            solution: `
                <p>Le point de contact d'une sphère tangente à un plan est le projeté orthogonal du centre sur le plan.</p>
                <p>Vérifions que $H(-1,1,0)$ est le projeté orthogonal de $I(1,0,-2)$ sur $P$.</p>
                <p>$\\vec{IH} \\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix}$. Ce vecteur est colinéaire au vecteur normal $\\vec{n} \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$ (car $\\vec{IH} = -\\vec{n}$), donc $(IH) \\perp P$.</p>
                <p>De plus, $H \\in P$ car $2(-1) - 1 - 2(0) + 3 = 0$.</p>
                <p>Donc $H$ est bien le point de contact de $(S)$ et $P$.</p>
            `
        },
        // ============ 3.(f) ============
        {
            id: "p2q3f",
            texte: "Déterminer une représentation paramétrique de la droite $(IH)$.",
            solution: `
                <p>La droite $(IH)$ passe par $I(1,0,-2)$ et a pour vecteur directeur $\\vec{IH} \\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
                <p>Représentation paramétrique :</p>
                <p>$\\begin{cases} x = 1 - 2\\alpha \\\\ y = \\alpha \\\\ z = -2 + 2\\alpha \\end{cases} ; \\alpha \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 3.(g) ============
        {
            id: "p2q3g",
            texte: "Montrer que la droite $(IH)$ coupe la sphère $(S)$ en $H$ et un autre point $E$ dont on déterminera les coordonnées.",
            solution: `
                <p>Injectons la paramétrisation dans l'équation de $(S)$ :</p>
                <p>$(1-2\\alpha-1)^2 + (\\alpha)^2 + (-2+2\\alpha+2)^2 = 9$</p>
                <p>$(-2\\alpha)^2 + \\alpha^2 + (2\\alpha)^2 = 9$</p>
                <p>$4\\alpha^2 + \\alpha^2 + 4\\alpha^2 = 9 \\Rightarrow 9\\alpha^2 = 9 \\Rightarrow \\alpha^2 = 1$.</p>
                <p>Donc $\\alpha = 1$ ou $\\alpha = -1$.</p>
                <p>• Si $\\alpha = 1$ : $x = -1, y = 1, z = 0$ $\\Rightarrow$ Point $H(-1,1,0)$.</p>
                <p>• Si $\\alpha = -1$ : $x = 3, y = -1, z = -4$ $\\Rightarrow$ Point $E(3,-1,-4)$.</p>
            `
        },
        // ============ 4.(a) ============
        {
            id: "p2q4a",
            texte: "Montrer que le cercle $\\zeta$ est de rayon $r = 1$.",
            solution: `
                <p>Le rayon du cercle $\\zeta$ est la distance du centre $H$ à la droite $(AC)$.</p>
                <p>$d(H,(AC)) = \\dfrac{\\|\\vec{AH} \\wedge \\vec{AC}\\|}{\\|\\vec{AC}\\|}$.</p>
                <p>$\\vec{AH} \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$\\vec{AH} \\wedge \\vec{AC} \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$. Norme = $\\sqrt{4+1+4} = 3$.</p>
                <p>$\\|\\vec{AC}\\| = \\sqrt{4+4+1} = 3$.</p>
                <p>Donc $r = \\dfrac{3}{3} = 1$.</p>
            `
        },
        // ============ 4.(b) ============
        {
            id: "p2q4b",
            texte: "Montrer que la droite $(IH)$ est l'axe du cercle $\\zeta$.",
            solution: `
                <p>L'axe d'un cercle est la droite passant par son centre et perpendiculaire à son plan.</p>
                <p>Le centre du cercle est $H$ et son plan est $P$.</p>
                <p>Or nous avons montré que $(IH) \\perp P$ (question 3.e).</p>
                <p>Donc $(IH)$ est bien l'axe du cercle $\\zeta$.</p>
            `
        },
        // ============ 4.(c) ============
        {
            id: "p2q4c",
            texte: "Déterminer les coordonnées du point $D$.",
            solution: `
                <p>$D$ est le projeté orthogonal de $H$ sur $(AC)$.</p>
                <p>Soit $D(x,y,z) \\in (AC)$. $(AC)$ a pour vecteur directeur $\\vec{AC} \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$ et passe par $A(-2,-1,0)$.</p>
                <p>$\\vec{HD} \\begin{pmatrix} x+1 \\\\ y-1 \\\\ z \\end{pmatrix}$ et $\\vec{HD} \\cdot \\vec{AC} = 0$.</p>
                <p>$2(x+1) + 2(y-1) + 1(z) = 0 \\Rightarrow 2x + 2y + z = 0$.</p>
                <p>De plus, $D \\in (AC)$ : $\\dfrac{x+2}{2} = \\dfrac{y+1}{2} = \\dfrac{z}{1} = t$.</p>
                <p>$x = 2t - 2$, $y = 2t - 1$, $z = t$.</p>
                <p>$2(2t-2) + 2(2t-1) + t = 0 \\Rightarrow 4t - 4 + 4t - 2 + t = 0 \\Rightarrow 9t - 6 = 0 \\Rightarrow t = \\dfrac{2}{3}$.</p>
                <p>Donc $D(-2/3, 1/3, 2/3)$.</p>
            `
        },
        // ============ 4.(d) ============
        {
            id: "p2q4d",
            texte: "Calculer la distance $ID$.",
            solution: `
                <p>$I(1,0,-2)$ et $D(-2/3, 1/3, 2/3)$.</p>
                <p>$\\vec{ID} \\begin{pmatrix} -5/3 \\\\ 1/3 \\\\ 8/3 \\end{pmatrix}$.</p>
                <p>$\\|\\vec{ID}\\| = \\sqrt{(-5/3)^2 + (1/3)^2 + (8/3)^2} = \\sqrt{25/9 + 1/9 + 64/9} = \\sqrt{90/9} = \\sqrt{10}$.</p>
            `
        },
        // ============ 4.(e) ============
        {
            id: "p2q4e",
            texte: "Montrer qu'il existe un point $M$ de la droite $(IH)$, distinct de $I$, tel que la distance $d(M,P)$ de $M$ à $P$ est égale à 3.",
            solution: `
                <p>Un point $M$ de $(IH)$ a pour coordonnées $(1-2\\alpha, \\alpha, -2+2\\alpha)$.</p>
                <p>$d(M,P) = \\dfrac{|2(1-2\\alpha) - \\alpha - 2(-2+2\\alpha) + 3|}{3} = \\dfrac{|2 - 4\\alpha - \\alpha + 4 - 4\\alpha + 3|}{3} = \\dfrac{|9 - 9\\alpha|}{3} = |3 - 3\\alpha|$.</p>
                <p>On veut $|3 - 3\\alpha| = 3 \\Rightarrow 3 - 3\\alpha = 3$ ou $3 - 3\\alpha = -3$.</p>
                <p>• $3 - 3\\alpha = 3 \\Rightarrow \\alpha = 0 \\Rightarrow M = I(1,0,-2)$ (exclu).</p>
                <p>• $3 - 3\\alpha = -3 \\Rightarrow \\alpha = 2 \\Rightarrow M(-3, 2, 2)$.</p>
            `
        },
        // ============ 4.(f) ============
        {
            id: "p2q4f",
            texte: "En déduire que les deux sphères de centres respectifs $M$ et $I$ et de rayon $R = \\sqrt{10}$ coupent $P$ suivant le cercle $\\zeta$.",
            solution: `
                <p>Pour la sphère de centre $I$ : $R^2 - d(I,P)^2 = 10 - 3^2 = 10 - 9 = 1$. Le rayon du cercle d'intersection est $r = 1$.</p>
                <p>Pour la sphère de centre $M$ : $R^2 - d(M,P)^2 = 10 - 3^2 = 10 - 9 = 1$. Le rayon du cercle d'intersection est $r = 1$.</p>
                <p>Le centre de ces cercles est le projeté orthogonal de $I$ (et $M$) sur $P$, c'est-à-dire $H(-1,1,0)$.</p>
                <p>Les deux sphères coupent donc $P$ suivant le cercle $\\zeta$ de centre $H$ et de rayon 1.</p>
            `
        },
        // ============ 4.(g) ============
        {
            id: "p2q4g",
            texte: "Montrer que $H$ est le milieu du segment $[IM]$.",
            solution: `
                <p>$I(1,0,-2)$ et $M(-3,2,2)$.</p>
                <p>Milieu de $[IM]$ : $\\left(\\dfrac{1-3}{2}, \\dfrac{0+2}{2}, \\dfrac{-2+2}{2}\\right) = (-1, 1, 0) = H$.</p>
            `
        },
        // ============ 5.(a) ============
        {
            id: "p2q5a",
            texte: "Montrer que $P$ est le plan médiateur du segment $[IM]$.",
            solution: `
                <p>Le plan médiateur d'un segment est le plan perpendiculaire à ce segment et passant par son milieu.</p>
                <p>$(IM)$ est perpendiculaire à $P$ (car $I, M, H$ sont alignés sur l'axe perpendiculaire à $P$).</p>
                <p>Le milieu de $[IM]$ est $H$, et $H \\in P$.</p>
                <p>Donc $P$ est bien le plan médiateur de $[IM]$.</p>
            `
        },
        // ============ 5.(b) ============
        {
            id: "p2q5b",
            texte: "En déduire que le triangle $IMD$ est isocèle de sommet principal $D$.",
            solution: `
                <p>$D \\in P$. Or $P$ est le plan médiateur de $[IM]$, donc tout point de $P$ est équidistant de $I$ et $M$.</p>
                <p>Donc $DI = DM$. Le triangle $IMD$ est isocèle en $D$.</p>
            `
        },
        // ============ 5.(c) ============
        {
            id: "p2q5c",
            texte: "Déterminer les coordonnées du point $G$ centre de gravité du triangle $IMD$.",
            solution: `
                <p>$G $ a pour coordonnées $ \\dfrac{(1,0,-2) + (-3,2,2) + (-2/3,1/3,2/3)}{3}$.</p>
                <p>$ = \\dfrac{(-2 - 2/3, 2 + 1/3, 0 + 2/3)}{3} = \\dfrac{(-8/3, 7/3, 2/3)}{3} = \\left(-\\dfrac{8}{9}, \\dfrac{7}{9}, \\dfrac{2}{9}\\right)$.</p>
            `
        },
        // ============ 5.(d) ============
        {
            id: "p2q5d",
            texte: "Montrer que les points $D, G$ et $H$ sont alignés.",
            solution: `
                <p>$\\vec{DH} \\begin{pmatrix} -1/3 \\\\ 2/3 \\\\ -2/3 \\end{pmatrix}$ et $\\vec{DG} \\begin{pmatrix} -2/9 \\\\ 4/9 \\\\ -4/9 \\end{pmatrix}$.</p>
                <p>On remarque que $\\vec{DG} = \\dfrac{2}{3} \\vec{DH}$.</p>
                <p>Les vecteurs $\\vec{DG}$ et $\\vec{DH}$ sont colinéaires, donc $D, G, H$ sont alignés.</p>
            `
        },
        // ============ 6.(a) ============
        {
            id: "p2q6a",
            texte: "Montrer que le point $E$ et la droite $(IG)$ déterminent un plan $Q$.",
            solution: `
                <p>Il suffit de montrer que $E \\notin (IG)$.</p>
                <p>$\\vec{IE} \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$ et $\\vec{IG} \\begin{pmatrix} -17/9 \\\\ 7/9 \\\\ 20/9 \\end{pmatrix}$.</p>
                <p>Ces vecteurs ne sont pas colinéaires (car $2/(-17/9) \\neq -1/(7/9)$).</p>
                <p>Donc $E, I, G$ ne sont pas alignés et déterminent un plan $Q$.</p>
            `
        },
        // ============ 6.(b) ============
        {
            id: "p2q6b",
            texte: "Déterminer une équation cartésienne du plan $Q$.",
            solution: `
                <p>$\\vec{IE} \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$ et $\\vec{IG} \\begin{pmatrix} -17 \\\\ 7 \\\\ 20 \\end{pmatrix}$ (en multipliant par 9).</p>
                <p>$-3\\vec{n}_Q = \\vec{IE} \\wedge \\vec{IG} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 2 & -1 & -2 \\\\ -17 & 7 & 20 \\end{vmatrix} = (-20+14, -(40-34), 14-17) \\begin{pmatrix} -6 \\\\ -6 \\\\ -3 \\end{pmatrix}$.</p>
                <p>En simplifiant par -3, $\\vec{n}_Q \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Équation de $Q$ : $2x + 2y + z + d = 0$.</p>
                <p>$I(1,0,-2) \\in Q$ : $2(1) + 2(0) + (-2) + d = 0 \\Rightarrow d = 0$.</p>
                <p>Donc $Q : 2x + 2y + z = 0$.</p>
            `
        },
        // ============ 6.(c) ============
        {
            id: "p2q6c",
            texte: "Montrer que les plans $P$ et $Q$ sont perpendiculaires.",
            solution: `
                <p>Vecteur normal de $P$ : $\\vec{n}_P \\begin{pmatrix} 2 \\\\ -1 \\\\ -2 \\end{pmatrix}$.</p>
                <p>Vecteur normal de $Q$ : $\\vec{n}_Q \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$\\vec{n}_P \\cdot \\vec{n}_Q = 2(2) + (-1)(2) + (-2)(1) = 4 - 2 - 2 = 0$.</p>
                <p>Les vecteurs normaux sont orthogonaux, donc les plans $P$ et $Q$ sont perpendiculaires.</p>
            `
        },
        // ============ 6.(d) ============
        {
            id: "p2q6d",
            texte: "Déterminer un système d'équations paramétriques de la droite $\\Delta = P \\cap Q$.",
            solution: `
                <p>$P : 2x - y - 2z + 3 = 0$ et $Q : 2x + 2y + z = 0$.</p>
                <p>De $Q$, on tire $z = -2x - 2y$.</p>
                <p>En remplaçant dans $P$ : $2x - y - 2(-2x - 2y) + 3 = 0 \\Rightarrow 2x - y + 4x + 4y + 3 = 0 \\Rightarrow 6x + 3y + 3 = 0 \\Rightarrow 2x + y + 1 = 0 \\Rightarrow y = -2x - 1$.</p>
                <p>Alors $z = -2x - 2(-2x - 1) = 2x + 2$.</p>
                <p>En posant $x = t$, on obtient :</p>
                <p>$\\begin{cases} x = t \\\\ y = -1 - 2t \\\\ z = 2 + 2t \\end{cases} ; t \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 6.(e) ============
        {
            id: "p2q6e",
            texte: "Vérifier que $\\Delta = (DH)$.",
            solution: `
                <p>$D(-2/3, 1/3, 2/3)$ et $H(-1, 1, 0)$.</p>
                <p>$\\vec{DH} \\begin{pmatrix} -1/3 \\\\ 2/3 \\\\ -2/3 \\end{pmatrix}$. Ce vecteur est colinéaire au vecteur directeur de $\\Delta$,qui a pour composantes, $\\begin{pmatrix} 1 \\\\ -2 \\\\ 2 \\end{pmatrix}$ (car $\\vec{DH}$ a pour composantes $-\\dfrac{1}{3} \\begin{pmatrix} 1 \\\\ -2 \\\\ 2 \\end{pmatrix}$).</p>
                <p>Vérifions que $D \\in \\Delta$ : pour $t = -2/3$, on a $y = -1 - 2(-2/3) = 1/3$ et $z = 2 + 2(-2/3) = 2/3$. Donc $D \\in \\Delta$.</p>
                <p>$H \\in P$ et $H \\in Q$ (car $2(-1) + 2(1) + 0 = 0$), donc $H \\in \\Delta$.</p>
                <p>La droite $(DH)$ et la droite $\\Delta$ sont donc confondues.</p>
            `
        }
    ]
});