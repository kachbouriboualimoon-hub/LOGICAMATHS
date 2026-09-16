// data/problemes/part5.js
// Problème 5 – Tétraèdre, plans, sphères et optimisation
window.problemes.items.push({
    id: 5,
    titre: "Tétraèdre, plans, sphères et optimisation",
    enonce: `
        <p>L'espace est rapporté à un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.<br>
        On considère les points $A(2,-3,-1)$, $B(1,0,2)$ et $C(0,1,3)$.</p>
    `,
    astuces: `
        <p>Pour montrer que trois points forment un triangle, on vérifie que les vecteurs formés ne sont pas colinéaires (produit vectoriel non nul).</p>
        <p>Le volume d'un tétraèdre $OABC$ est $V=\\dfrac{1}{6}\\,|\\det(\\vec{OA},\\vec{OB},\\vec{OC})| = \\dfrac{1}{3}\\times \\text{Aire}(ABC)\\times d(O,P)$.</p>
        <p>Pour montrer qu'un point $D$ est le projeté orthogonal de $O$ sur $(P)$, on vérifie que $D \\in P$ et que $\\vec{OD}$ est colinéaire au vecteur normal de $P$.</p>
        <p>Pour trouver le minimum d'une distance, on peut étudier la fonction associée et calculer sa dérivée.</p>
    `,
    erreurs: `
        <p>Ne pas oublier la valeur absolue dans la formule du volume d'un tétraèdre.</p>
        <p>Pour l'intersection d'une sphère et d'un plan, comparer la distance du centre au plan avec le rayon de la sphère.</p>
    `,
    questions: [
        // ============ 1.(a) ============
        {
            id: "p5q1a",
            texte: "Montrer que $ABC$ est un triangle et calculer son aire.",
            solution: `
                <p>$\\vec{AB} \\begin{pmatrix} -1 \\\\ 3 \\\\ 3 \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} -2 \\\\ 4 \\\\ 4 \\end{pmatrix}$.</p>
                <p>$\\vec{AB} \\wedge \\vec{AC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1 & 3 & 3 \\\\ -2 & 4 & 4 \\end{vmatrix}
                = \\vec{i}(12-12) - \\vec{j}(-4 - (-6)) + \\vec{k}(-4 - (-6)) \\begin{pmatrix} 0 \\\\ -2 \\\\ 2 \\end{pmatrix}$.</p>
                <p>Comme $\\vec{AB} \\wedge \\vec{AC} \\neq \\vec{0}$, les points $A, B, C$ ne sont pas alignés et forment donc un triangle.</p>
                <p>$\\text{Aire}(ABC) = \\dfrac{1}{2} \\|\\vec{AB} \\wedge \\vec{AC}\\| = \\dfrac{1}{2} \\sqrt{0^2 + (-2)^2 + 2^2} = \\dfrac{1}{2} \\sqrt{8} = \\sqrt{2}$ unités d'aire.</p>
            `
        },
        // ============ 1.(b) ============
        {
            id: "p5q1b",
            texte: "Montrer que $OABC$ est un tétraèdre et calculer son volume.",
            solution: `
                <p>Calculons le produit mixte $[\\vec{AB}, \\vec{AC}, \\vec{AO}]$.</p>
                <p>$\\vec{AO} \\begin{pmatrix} -2 \\\\ 3 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$[\\vec{AB}, \\vec{AC}, \\vec{AO}] = (\\vec{AB} \\wedge \\vec{AC}) \\cdot \\vec{AO} = 0(-2) + (-2)(3) + 2(1) = -6 + 2 = -4 \\neq 0$.</p>
                <p>Donc $OABC$ est un tétraèdre.</p>
                <p>Volume $V = \\dfrac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AO}]| = \\dfrac{1}{6} \\times 4 = \\dfrac{2}{3}$ unités de volume.</p>
            `
        },
        // ============ 1.(c) ============
        {
            id: "p5q1c",
            texte: "Déterminer alors la distance du point $O$ au plan $(ABC)$.",
            solution: `
                <p>Soit $d$ la distance du point $O$ au plan $(ABC)$. On a :</p>
                <p>$V = \\dfrac{1}{3} \\times \\text{Aire}(ABC) \\times d \\Rightarrow \\dfrac{2}{3} = \\dfrac{1}{3} \\times \\sqrt{2} \\times d \\Rightarrow d = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$.</p>
            `
        },
        // ============ 1.(d) ============
        {
            id: "p5q1d",
            texte: "Écrire une équation cartésienne du plan $(P)$ passant par les points $A, B$ et $C$. Retrouver la distance du point $O$ au plan $(ABC)$.",
            solution: `
                <p>Le vecteur normal de $(P)$ est $\\vec{n} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$ (obtenu en simplifiant $\\vec{AB} \\wedge \\vec{AC}$ par $-2$).</p>
                <p>Donc $(P) : -y + z + d = 0$. En utilisant $A(2,-3,-1)$ : $-(-3) + (-1) + d = 0 \\Rightarrow 3 - 1 + d = 0 \\Rightarrow d = -2$.</p>
                <p>Donc $(P) : -y + z - 2 = 0$.</p>
                <p>Distance : $d(O, (P)) = \\dfrac{|0 - 0 - 2|}{\\sqrt{0^2 + (-1)^2 + 1^2}} = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$.</p>
            `
        },
        // ============ 1.(e) ============
        {
            id: "p5q1e",
            texte: "Montrer que $D(0,-1,1)$ est le projeté orthogonal du point $O$ sur le plan $(P)$. Retrouver la distance du point $O$ au plan $(ABC)$.",
            solution: `
                <p>Vérifions que $D \\in (P)$ : $-(-1) + 1 - 2 = 0$. Oui.</p>
                <p>$\\vec{OD} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$. Ce vecteur est colinéaire au vecteur normal $\\vec{n} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$ de $(P)$.</p>
                <p>Donc $D$ est bien le projeté orthogonal de $O$ sur $(P)$.</p>
                <p>La distance $OD = \\sqrt{0^2 + (-1)^2 + 1^2} = \\sqrt{2}$.</p>
            `
        },
        // ============ 1.(f) ============
        {
            id: "p5q1f",
            texte: "Montrer que $ABCD$ est un trapèze et calculer son aire.",
            solution: `
                <p>$\\vec{AD} \\begin{pmatrix} -2 \\\\ 2 \\\\ 2 \\end{pmatrix}$ et $\\vec{BC} \\begin{pmatrix} -1 \\\\ 1 \\\\ 1 \\end{pmatrix}$. On a $\\vec{AD} = 2\\vec{BC}$, donc les droites $(AD)$ et $(BC)$ sont parallèles.</p>
                <p>$ABCD$ est donc un trapèze de bases $AD$ et $BC$.</p>
                <p>Aire du trapèze = Aire$(ABC)$ + Aire$(ACD)$.</p>
                <p>Aire$(ACD) = \\dfrac{1}{2} \\|\\vec{AC} \\wedge \\vec{AD}\\|$.</p>
                <p>$\\vec{AC} \\begin{pmatrix} -2 \\\\ 4 \\\\ 4 \\end{pmatrix}$ et $\\vec{AD} \\begin{pmatrix} -2 \\\\ 2 \\\\ 2 \\end{pmatrix}$.</p>
                <p>$\\vec{AC} \\wedge \\vec{AD} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -2 & 4 & 4 \\\\ -2 & 2 & 2 \\end{vmatrix} = \\begin{pmatrix} 0 \\\\ -4 \\\\ 4 \\end{pmatrix}$.</p>
                <p>$\\|\\vec{AC} \\wedge \\vec{AD}\\| = \\sqrt{0^2 + (-4)^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$.</p>
                <p>Aire$(ACD) = \\dfrac{1}{2} \\times 4\\sqrt{2} = 2\\sqrt{2}$.</p>
                <p>Aire totale = $\\sqrt{2} + 2\\sqrt{2} = 3\\sqrt{2}$ unités d'aire.</p>
            `
        },
        // ============ 2.(a) ============
        {
            id: "p5q2a",
            texte: "Montrer que $x^2 + y^2 + z^2 + 2z - 1 = 0$ est l'équation d'une sphère $S$ dont on déterminera le centre $I$ et le rayon.",
            solution: `
                <p>$x^2 + y^2 + (z^2 + 2z) - 1 = 0$</p>
                <p>$x^2 + y^2 + (z+1)^2 - 1 - 1 = 0$</p>
                <p>$x^2 + y^2 + (z+1)^2 = 2$.</p>
                <p>Donc $S$ est la sphère de centre $I(0,0,-1)$ et de rayon $R = \\sqrt{2}$.</p>
            `
        },
        // ============ 2.(b) ============
        {
            id: "p5q2b",
            texte: "Démontrer que la sphère $S$ et le plan $(P)$ sont disjoints.",
            solution: `
                <p>$d(I, (P)) = \\dfrac{|0 - (-1) + 2|}{\\sqrt{2}} = \\dfrac{3}{\\sqrt{2}} = \\dfrac{3\\sqrt{2}}{2} \\approx 2{,}12$.</p>
                <p>Comme $d(I, (P)) > R$ ($2{,}12 > 1{,}41$), la sphère $S$ et le plan $(P)$ sont disjoints.</p>
            `
        },
        // ============ 2.(c)i ============
        {
            id: "p5q2ci",
            texte: "Justifier que la droite $(DO)$ perce la sphère $S$ en deux points $E$ et $F$.",
            solution: `
                <p>La droite $(DO)$ passe par $O(0,0,0)$ et a pour vecteur directeur $\\vec{OD} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Représentation paramétrique de $(DO)$ : $\\begin{cases} x = 0 \\\\ y = -t \\\\ z = t \\end{cases} ; t \\in \\mathbb{R}$.</p>
                <p>Injectons dans l'équation de $S$ : $0^2 + (-t)^2 + t^2 + 2t - 1 = 0 \\Rightarrow 2t^2 + 2t - 1 = 0$.</p>
                <p>Le discriminant $\\Delta = 2^2 - 4(2)(-1) = 4 + 8 = 12 > 0$. L'équation admet donc deux solutions distinctes, ce qui signifie que la droite $(DO)$ perce la sphère en deux points $E$ et $F$.</p>
            `
        },
        // ============ 2.(c)ii ============
        {
            id: "p5q2cii",
            texte: "Déterminer les coordonnées des points $E$ et $F$ sachant que $E$ a une cote négative.",
            solution: `
                <p>Résolvons $2t^2 + 2t - 1 = 0$ : $t = \\dfrac{-2 \\pm \\sqrt{12}}{4} = \\dfrac{-2 \\pm 2\\sqrt{3}}{4} = \\dfrac{-1 \\pm \\sqrt{3}}{2}$.</p>
                <p>Les solutions sont $t_1 = \\dfrac{-1 - \\sqrt{3}}{2}$ et $t_2 = \\dfrac{-1 + \\sqrt{3}}{2}$.</p>
                <p>La cote est $z = t$. Comme $E$ a une cote négative, $t_E = t_1 = \\dfrac{-1 - \\sqrt{3}}{2}$.</p>
                <p>Donc $E\\left(0, \\dfrac{1 + \\sqrt{3}}{2}, \\dfrac{-1 - \\sqrt{3}}{2}\\right)$.</p>
                <p>Et $F\\left(0, \\dfrac{1 - \\sqrt{3}}{2}, \\dfrac{-1 + \\sqrt{3}}{2}\\right)$.</p>
            `
        },
        // ============ 2.(d) ============
        {
            id: "p5q2d",
            texte: "Prouver que le plan $(BFE)$ coupe la sphère $S$ suivant un cercle $C$ dont on précisera le centre et le rayon.",
            solution: `
                <p>Le plan $(BFE)$ est le plan passant par $B$, $E$ et $F$. Comme $E$ et $F$ sont sur la droite $(DO)$, le plan $(BFE)$ est le plan $(B, DO)$.</p>
                <p>Vecteurs du plan : $\\vec{OD} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$ et $\\vec{OB} \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$.</p>
                <p>$\\vec{OD} \\wedge \\vec{OB} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 0 & -1 & 1 \\\\ 1 & 0 & 2 \\end{vmatrix} = \\begin{pmatrix} -2 \\\\ 1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Équation du plan $(BFE)$ : $-2x + y + z + d = 0$. Comme $O(0,0,0) \\in (BFE)$, $d = 0$.</p>
                <p>Donc $(BFE) : -2x + y + z = 0$.</p>
                <p>Distance de $I(0,0,-1)$ à $(BFE)$ : $d(I, (BFE)) = \\dfrac{|0 + 0 - 1|}{\\sqrt{(-2)^2 + 1^2 + 1^2}} = \\dfrac{1}{\\sqrt{6}}$.</p>
                <p>Comme $d(I, (BFE)) < R$, l'intersection est un cercle.</p>
                <p>Rayon du cercle : $r = \\sqrt{R^2 - d(I, (BFE))^2} = \\sqrt{2 - \\dfrac{1}{6}} = \\sqrt{\\dfrac{11}{6}} = \\dfrac{\\sqrt{66}}{6}$.</p>
                <p>Le centre du cercle est le projeté orthogonal $H$ de $I$ sur $(BFE)$.</p>
            `
        },
        // ============ 2.(e) ============
        {
            id: "p5q2e",
            texte: "Montrer que les plans $(BFE)$ et $(P)$ sont perpendiculaires et que $(P) \\cap (BFE) = (BD)$.",
            solution: `
                <p>Vecteurs normaux : $\\vec{n}_1 \\begin{pmatrix} -2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ pour $(BFE)$ et $\\vec{n}_2 \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$ pour $(P)$.</p>
                <p>$\\vec{n}_1 \\cdot \\vec{n}_2 = (-2)(0) + 1(-1) + 1(1) = 0$.</p>
                <p>Les vecteurs normaux sont orthogonaux, donc les plans $(BFE)$ et $(P)$ sont perpendiculaires.</p>
                <p>Intersection : résolvons le système $\\begin{cases} -2x + y + z = 0 \\\\ -y + z - 2 = 0 \\end{cases}$.</p>
                <p>De la deuxième équation : $y = z - 2$.</p>
                <p>En remplaçant dans la première : $-2x + (z - 2) + z = 0 \\Rightarrow -2x + 2z - 2 = 0 \\Rightarrow x = z - 1$.</p>
                <p>Donc la droite d'intersection a pour équations paramétriques : $\\begin{cases} x = -1 + t \\\\ y = -2 + t \\\\ z = t \\end{cases} ; t \\in \\mathbb{R}$.</p>
                <p>Vérifions que $B(1,0,2) \\in (BD)$ : pour $t=2$, $x=1, y=0, z=2$. Oui.</p>
                <p>Vérifions que $D(0,-1,1) \\in (BD)$ : pour $t=1$, $x=0, y=-1, z=1$. Oui.</p>
                <p>Donc $(P) \\cap (BFE) = (BD)$.</p>
            `
        },
        // ============ 3 ============
        {
            id: "p5q3",
            texte: "Montrer que $(S_t)$ est une sphère dont on précisera le centre $I_t$ et le rayon.",
            solution: `
                <p>$(S_t) : x^2 + y^2 + z^2 - 2tx - 2y\\sin(t) + 2z + t^2 + \\sin^2(t) - 1 = 0$.</p>
                <p>$(x-t)^2 - t^2 + (y-\\sin t)^2 - \\sin^2 t + (z+1)^2 - 1 + t^2 + \\sin^2 t - 1 = 0$.</p>
                <p>$(x-t)^2 + (y-\\sin t)^2 + (z+1)^2 = 2$.</p>
                <p>Donc $(S_t)$ est la sphère de centre $I_t(t, \\sin t, -1)$ et de rayon $R = \\sqrt{2}$.</p>
            `
        },
        // ============ 4.(a) ============
        {
            id: "p5q4a",
            texte: "Étudier, suivant les valeurs de $t$, l'intersection de la sphère $(S_t)$ et du plan $(P)$.",
            solution: `
                <p>Distance de $I_t(t, \\sin t, -1)$ à $(P) : -y + z - 2 = 0$ :</p>
                <p>$d(I_t, (P)) = \\dfrac{|-\\sin t - 1 - 2|}{\\sqrt{2}} = \\dfrac{|-\\sin t - 3|}{\\sqrt{2}} = \\dfrac{\\sin t + 3}{\\sqrt{2}}$ (car $\\sin t \\in [-1, 1]$, donc $\\sin t + 3 > 0$).</p>
                <p>Comparons $d(I_t, (P))$ et $R = \\sqrt{2}$ :</p>
                <p>$\\dfrac{\\sin t + 3}{\\sqrt{2}} \\geq \\sqrt{2} \\iff \\sin t + 3 \\geq 2 \\iff \\sin t \\geq -1$.</p>
                <p>Or, pour tout $t \\in [-\\pi, \\pi]$, $\\sin t \\geq -1$.</p>
                <p>• Si $\\sin t = -1$ (c'est-à-dire $t = -\\dfrac{\\pi}{2}$), alors $d(I_t, (P)) = R$, la sphère et le plan sont <strong>tangents</strong>.</p>
                <p>• Si $\\sin t > -1$ (c'est-à-dire $t \\in [-\\pi, \\pi] \\setminus \\{-\\dfrac{\\pi}{2}\\}$), alors $d(I_t, (P)) > R$, la sphère et le plan sont <strong>disjoints</strong>.</p>
            `
        },
        // ============ 4.(b) ============
        {
            id: "p5q4b",
            texte: "Dans le cas où le plan $(P)$ est tangent à la sphère $(S_t)$, déterminer les coordonnées du point de contact.",
            solution: `
                <p>Le cas de tangence se produit pour $t = -\\dfrac{\\pi}{2}$.</p>
                <p>Le centre est $I_t\\left(-\\dfrac{\\pi}{2}, -1, -1\\right)$.</p>
                <p>Le point de contact est le projeté orthogonal de $I_t$ sur $(P)$.</p>
                <p>La droite passant par $I_t$ et perpendiculaire à $(P)$ a pour vecteur directeur $\\vec{n} \\begin{pmatrix} 0 \\\\ -1 \\\\ 1 \\end{pmatrix}$ : $\\begin{cases} x = -\\dfrac{\\pi}{2} \\\\ y = -1 - \\alpha \\\\ z = -1 + \\alpha \\end{cases}$.</p>
                <p>Injectons dans $(P)$ : $-(-1 - \\alpha) + (-1 + \\alpha) - 2 = 0 \\Rightarrow 1 + \\alpha - 1 + \\alpha - 2 = 0 \\Rightarrow 2\\alpha = 2 \\Rightarrow \\alpha = 1$.</p>
                <p>Le point de contact est donc $H\\left(-\\dfrac{\\pi}{2}, -2, 0\\right)$.</p>
            `
        },
        // ============ 5.(a) ============
        {
            id: "p5q5a",
            texte: "Vérifier que les points $I, A$ et $I_t$ appartiennent au plan $Q$.",
            solution: `
                <p>Le plan $Q$ a pour équation $z + 1 = 0$.</p>
                <p>• $I(0,0,-1)$ : $-1 + 1 = 0$. Donc $I \\in Q$.</p>
                <p>• $A(2,-3,-1)$ : $-1 + 1 = 0$. Donc $A \\in Q$.</p>
                <p>• $I_t(t, \\sin t, -1)$ : $-1 + 1 = 0$. Donc $I_t \\in Q$.</p>
            `
        },
        // ============ 5.(b) ============
        {
            id: "p5q5b",
            texte: "Vérifier que les vecteurs $\\vec{i}$ et $\\vec{j}$ forment une base du plan $Q$.",
            solution: `
                <p>Les vecteurs $\\vec{i} \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ et $\\vec{j} \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$ sont orthogonaux et non colinéaires.</p>
                <p>Ils engendrent le plan d'équation $z = 0$, qui est parallèle au plan $Q$ d'équation $z + 1 = 0$.</p>
                <p>Donc $\\vec{i}$ et $\\vec{j}$ forment une base du plan $Q$.</p>
            `
        },
        // ============ 5.(c) ============
        {
            id: "p5q5c",
            texte: "Étudier l'intersection de la sphère $S_t$ et le plan $Q$.",
            solution: `
                <p>Dans le plan $Q$, $z = -1$. Remplaçons dans l'équation de $S_t$ :</p>
                <p>$(x-t)^2 + (y-\\sin t)^2 + (-1+1)^2 = 2 \\Rightarrow (x-t)^2 + (y-\\sin t)^2 = 2$.</p>
                <p>L'intersection de $S_t$ et $Q$ est donc un cercle de centre $I_t$ et de rayon $\\sqrt{2}$.</p>
            `
        },
        // ============ 5.(d) ============
        {
            id: "p5q5d",
            texte: "Déterminer $t$ pour que la distance $AI_t$ soit minimale.",
            solution: `
                <p>$AI_t = \\sqrt{(t-2)^2 + (\\sin t + 3)^2 + (-1 + 1)^2} = \\sqrt{(t-2)^2 + (\\sin t + 3)^2}$.</p>
                <p>Soit $g(t) = (t-2)^2 + (\\sin t + 3)^2$. Calculons sa dérivée :</p>
                <p>$g'(t) = 2(t-2) + 2(\\sin t + 3)\\cos t$.</p>
                <p>$g'(t) = 0 \\iff t - 2 + (\\sin t + 3)\\cos t = 0$.</p>
                <p>La résolution numérique de cette équation sur $[-\\pi, \\pi]$ donne $t \\approx 3{,}83$ rad.</p>
                <p>La distance $AI_t$ est donc minimale pour $t \\approx 3{,}83$ rad.</p>
            `
        },
        // ============ 5.(e) ============
        {
            id: "p5q5e",
            texte: "Montrer que $I_t$ a pour coordonnées $(t, \\sin(t))$ dans le repère $(I, \\vec{i}, \\vec{j})$. En déduire l'ensemble des points $I_t$.",
            solution: `
                <p>Dans le repère $(I, \\vec{i}, \\vec{j})$, les coordonnées d'un point $M$ sont $(x_M, y_M)$ telles que $\\vec{IM} = x_M\\vec{i} + y_M\\vec{j}$.</p>
                <p>$\\vec{II_t} \\begin{pmatrix} t - 0 \\\\ \\sin t - 0 \\\\ -1 - (-1) \\end{pmatrix} = \\begin{pmatrix} t \\\\ \\sin t \\\\ 0 \\end{pmatrix} = t\\vec{i} + \\sin(t)\\vec{j}$.</p>
                <p>Donc les coordonnées de $I_t$ dans le repère $(I, \\vec{i}, \\vec{j})$ sont bien $(t, \\sin(t))$.</p>
                <p>Lorsque $t$ varie sur $[-\\pi, \\pi]$, le point $I_t$ décrit la courbe d'équation $y = \\sin(x)$ dans le plan $Q$. C'est un arc de la sinusoïde.</p>
            `
        }
    ]
});