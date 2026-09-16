// data/problemes/part14.js
// Problème 1 – Tétraèdre, produit vectoriel, plans, sphère et cône
window.problemes.items.push({
    id: 1,
    titre: "Tétraèdre, produit vectoriel, plans et sphère",
    enonce: `
        <p>L'espace est muni d'un repère orthonormé direct $(O,\\vec{i},\\vec{j},\\vec{k})$.<br>
        On donne les points $A(1,1,3)$, $B(-3,1,1)$ et $C(3,-2,1)$.</p>
    `,
    astuces: `
        <p>Pour montrer que trois points $A,B,C$ déterminent un plan, il suffit de montrer que les vecteurs $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires, c'est-à-dire $\\vec{AB}\\wedge\\vec{AC}\\neq\\vec{0}$.</p>
        <p>L'aire du triangle $ABC$ est $\\dfrac{1}{2}\\|\\vec{AB}\\wedge\\vec{AC}\\|$.</p>
        <p>Le volume du tétraèdre $ABCD$ est $V=\\dfrac{1}{6}\\,|\\det(\\vec{AB},\\vec{AC},\\vec{AD})| = \\dfrac{1}{3}\\times \\text{Aire}(ABC)\\times d(D,P)$.</p>
    `,
    erreurs: `
        <p>Ne pas oublier la valeur absolue dans la formule de la distance d'un point à un plan.</p>
        <p>Pour l'équation d'un plan, vérifier que le point utilisé appartient bien au plan.</p>
        <p>Pour le cône, l'axe est perpendiculaire au plan de base : ici l'axe est porté par la droite $(ID)$ perpendiculaire à $Q$.</p>
    `,
    questions: [
        // ============ 1.(a) ============
        {
            id: "p1q1a",
            texte: "Calculer les composantes du vecteur $\\vec{AB} \\wedge \\vec{AC}$. En déduire que $A$, $B$, $C$ déterminent un plan $P$ et calculer l'aire du triangle $ABC$.",
            solution: `
                <p>$\\vec{AB} \\begin{pmatrix} -4 \\\\ 0 \\\\ -2 \\end{pmatrix}$ et $\\vec{AC} \\begin{pmatrix} 2 \\\\ -3 \\\\ -2 \\end{pmatrix}$.</p>
                <p>$\\vec{AB}\\wedge\\vec{AC} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -4 & 0 & -2 \\\\ 2 & -3 & -2 \\end{vmatrix}
                = \\vec{i}\\,(0-6) - \\vec{j}\\,(8+4) + \\vec{k}\\,(12-0) \\begin{pmatrix} -6 \\\\ -12 \\\\ 12 \\end{pmatrix}$.</p>
                <p>Comme $\\vec{AB}\\wedge\\vec{AC}\\neq\\vec{0}$, les points $A,B,C$ ne sont pas alignés : ils déterminent donc un plan $P$.</p>
                <p>$\\|\\vec{AB}\\wedge\\vec{AC}\\| = \\sqrt{36+144+144}=\\sqrt{324}=18$.</p>
                <p>Donc $\\text{Aire}(ABC)=\\dfrac{1}{2}\\times 18 = 9$ unités d'aire.</p>
            `
        },
        // ============ 1.(b) ============
        {
            id: "p1q1b",
            texte: "Montrer qu'une équation cartésienne de $P$ est $x+2y-2z+3=0$.",
            solution: `
                <p>Le vecteur $\\vec{n} \\begin{pmatrix} -6 \\\\ -12 \\\\ 12 \\end{pmatrix}$ est normal à $P$ ; en divisant par $-6$, $\\vec{n}' \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$ convient aussi.</p>
                <p>Donc $P : x+2y-2z+d=0$. En utilisant $A(1,1,3)$ : $1+2-6+d=0 \\Rightarrow d=3$.</p>
                <p>On vérifie avec $B$ : $-3+2-2+3=0$ ✓ et avec $C$ : $3-4-2+3=0$ ✓.</p>
                <p>Donc $P : x+2y-2z+3=0$.</p>
            `
        },
        // ============ 2.(a) ============
        {
            id: "p1q2a",
            texte: "Vérifier que $D(3,5,-1)$ n'appartient pas au plan $P$. Calculer le volume du tétraèdre $ABCD$. En déduire la distance du point $D$ au plan $P$.",
            solution: `
                <p>$3+2(5)-2(-1)+3 = 3+10+2+3 = 18 \\neq 0$, donc $D\\notin P$.</p>
                <p>Volume : $V=\\dfrac{1}{6}\\,|\\det(\\vec{AB},\\vec{AC},\\vec{AD})|$ avec $\\vec{AD} \\begin{pmatrix} 2 \\\\ 4 \\\\ -4 \\end{pmatrix}$.</p>
                <p>$\\det = \\begin{vmatrix} -4 & 0 & -2 \\\\ 2 & -3 & -2 \\\\ 2 & 4 & -4 \\end{vmatrix} = -4(12+8) -2(8+6) = -108$.</p>
                <p>D'où $V = \\dfrac{108}{6} = 18$ unités de volume.</p>
                <p>Or $V = \\dfrac{1}{3}\\times \\text{Aire}(ABC)\\times d(D,P) = \\dfrac{1}{3}\\times 9 \\times d(D,P) = 3\\,d(D,P)$.</p>
                <p>Donc $d(D,P) = \\dfrac{18}{3}=6$.</p>
                <p><strong>Vérification :</strong> $d(D,P)=\\dfrac{|3+10+2+3|}{\\sqrt{1+4+4}}=\\dfrac{18}{3}=6$ ✓</p>
            `
        },
        // ============ 2.(b) ============
        {
            id: "p1q2b",
            texte: "Soit $Q$ le plan passant par $D$ et parallèle à $P$. Montrer qu'une équation cartésienne de $Q$ est $x+2y-2z-15=0$.",
            solution: `
                <p>$Q$ parallèle à $P$ a même vecteur normal $\\vec{n} \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$ : $Q : x+2y-2z+d=0$.</p>
                <p>$D\\in Q$ : $3+10+2+d=0 \\Rightarrow d=-15$.</p>
                <p>Donc $Q : x+2y-2z-15=0$.</p>
            `
        },
        // ============ 3.(a) ============
        {
            id: "p1q3a",
            texte: "Montrer que $(S) : x^2+y^2+z^2-4x-6y-2z+5=0$ est la sphère de centre $I(2,3,1)$ et de rayon $R=3$. Vérifier que $I$ est le milieu de $[AD]$.",
            solution: `
                <p>On met sous forme canonique :</p>
                <p>$(x-2)^2-4+(y-3)^2-9+(z-1)^2-1+5=0$</p>
                <p>$(x-2)^2+(y-3)^2+(z-1)^2 = 9$.</p>
                <p>Donc $(S)$ est la sphère de centre $I(2,3,1)$ et de rayon $R=\\sqrt{9}=3$.</p>
                <p>Milieu de $[AD]$ : $\\left(\\dfrac{1+3}{2},\\dfrac{1+5}{2},\\dfrac{3-1}{2}\\right)=(2,3,1)=I$ ✓</p>
            `
        },
        // ============ 3.(b) ============
        {
            id: "p1q3b",
            texte: "Montrer que $(S)$ est tangente au plan $P$ en $A$ et au plan $Q$ en $D$.",
            solution: `
                <p>$d(I,P)=\\dfrac{|2+6-2+3|}{3}=\\dfrac{9}{3}=3=R$ : donc $(S)$ et $P$ sont tangents.</p>
                <p>Le point de tangence est le projeté orthogonal de $I$ sur $P$. La droite passant par $I$ et perpendiculaire à $P$ a pour direction $\\vec{n} \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$ : $\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 2+s \\\\ 3+2s \\\\ 1-2s \\end{pmatrix}$.</p>
                <p>Injectons dans $P$ : $(2+s)+2(3+2s)-2(1-2s)+3=9+9s=0 \\Rightarrow s=-1$.</p>
                <p>Point : $(1,1,3)=A$. Donc $(S)$ tangente à $P$ en $A$ ✓</p>
                <p>$d(I,Q)=\\dfrac{|2+6-2-15|}{3}=\\dfrac{9}{3}=3=R$ : donc $(S)$ et $Q$ tangents.</p>
                <p>Même droite, injectée dans $Q$ : $(2+s)+2(3+2s)-2(1-2s)-15=9s-9=0 \\Rightarrow s=1$.</p>
                <p>Point : $(3,5,-1)=D$. Donc $(S)$ tangente à $Q$ en $D$ ✓</p>
            `
        },
        // ============ 4.(a) ============
        {
            id: "p1q4a",
            texte: "Soit $t\\in]-1,+\\infty[$ et $J(2+t,\\,3+2t,\\,1-2t)$. Montrer que $A$, $D$, $J$ sont alignés.",
            solution: `
                <p>$\\vec{AD} \\begin{pmatrix} 2 \\\\ 4 \\\\ -4 \\end{pmatrix} = 2\\,\\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$.</p>
                <p>$\\vec{AJ} \\begin{pmatrix} 1+t \\\\ 2+2t \\\\ -2-2t \\end{pmatrix} = (1+t)\\,\\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix} = \\dfrac{1+t}{2}\\,\\vec{AD}$.</p>
                <p>Donc $\\vec{AJ}$ et $\\vec{AD}$ sont colinéaires : $A$, $D$, $J$ sont alignés. (La droite $(AD)$ est exactement la droite $(ID)$ perpendiculaire à $P$.)</p>
            `
        },
        // ============ 4.(b) ============
        {
            id: "p1q4b",
            texte: "Vérifier que $d(J,P)=3t+3$ et $d(J,Q)=|3t-3|$.",
            solution: `
                <p>$d(J,P)=\\dfrac{|(2+t)+2(3+2t)-2(1-2t)+3|}{3}=\\dfrac{|9t+9|}{3}=|3t+3|$.</p>
                <p>Comme $t>-1$, $3t+3>0$, donc $d(J,P)=3t+3$ ✓</p>
                <p>$d(J,Q)=\\dfrac{|(2+t)+2(3+2t)-2(1-2t)-15|}{3}=\\dfrac{|9t-9|}{3}=|3t-3|$ ✓</p>
            `
        },
        // ============ 5.(a) ============
        {
            id: "p1q5a",
            texte: "Soit $(S_t)$ la sphère de centre $J$ et tangente au plan $P$. Étudier suivant les valeurs de $t\\in]-1,+\\infty[$, la position relative de $(S_t)$ et du plan $Q$.",
            solution: `
                <p>Rayon de $(S_t)$ : $R_t = d(J,P) = 3t+3$.</p>
                <p>Distance de $J$ à $Q$ : $d(J,Q)=|3t-3|$. Comparons $R_t$ et $d(J,Q)$ :</p>
                <ul>
                    <li>Si $t\\geq 1$ : $d(J,Q)=3t-3$ et $R_t=3t+3$. Comme $3t-3<3t+3$, $(S_t)$ et $Q$ sont <strong>sécants</strong> suivant un cercle.</li>
                    <li>Si $0<t<1$ : $d(J,Q)=3-3t$ et $R_t=3t+3$. On a $3-3t<3t+3 \\iff t>0$ : $(S_t)$ et $Q$ sont <strong>sécants</strong> suivant un cercle.</li>
                    <li>Si $t=0$ : $d(J,Q)=3=R_0$ : $(S_t)$ et $Q$ sont <strong>tangents</strong>.</li>
                    <li>Si $-1<t<0$ : $d(J,Q)=3-3t>3t+3$ : $(S_t)$ et $Q$ sont <strong>disjoints</strong>.</li>
                </ul>
            `
        },
        // ============ 5.(b)(i) ============
        {
            id: "p1q5bi",
            texte: "Soit $t\\in[1,+\\infty[$. Montrer que $(S_t)$ et $Q$ se coupent suivant le cercle de rayon $r=6\\sqrt{t}$ et de centre $D$.",
            solution: `
                <p>Le cercle d'intersection a pour rayon $r$ tel que :</p>
                <p>$r^2 = R_t^2 - d(J,Q)^2 = (3t+3)^2 - (3t-3)^2 = 9[(t+1)^2-(t-1)^2] = 9\\cdot 4t = 36t$.</p>
                <p>Donc $r=6\\sqrt{t}$ (car $t\\geq 0$).</p>
                <p>Le centre du cercle est le projeté orthogonal de $J$ sur $Q$. Or $J$ est sur la droite $(ID)$ perpendiculaire à $Q$ et $D\\in Q$, donc ce projeté est $D$ ✓</p>
            `
        },
        // ============ 5.(b)(ii) ============
        {
            id: "p1q5bii",
            texte: "Donner une représentation paramétrique de la droite $(ID)$.",
            solution: `
                <p>La droite $(ID)$ passe par $I(2,3,1)$ et a pour vecteur directeur $\\vec{ID} \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$.</p>
                <p>Représentation paramétrique :</p>
                <p>$\\begin{cases} x = 2 + \\alpha \\\\ y = 3 + 2\\alpha \\\\ z = 1 - 2\\alpha \\end{cases} ; \\alpha \\in \\mathbb{R}$.</p>
            `
        },
        // ============ 5.(b)(iii) ============
        {
            id: "p1q5biii",
            texte: "Montrer que la droite $(ID)$ coupe la sphère $(S_t)$ en $A$ et un autre point $E$ dont on donnera les coordonnées en fonction de $t$.",
            solution: `
                <p>Injectons la paramétrisation dans l'équation de $(S_t)$ : centre $J(2+t,3+2t,1-2t)$, rayon $3t+3$.</p>
                <p>$(2+\\alpha-2-t)^2+(3+2\\alpha-3-2t)^2+(1-2\\alpha-1+2t)^2 = (3t+3)^2$</p>
                <p>$(\\alpha-t)^2+4(\\alpha-t)^2+4(\\alpha-t)^2 = 9(t+1)^2$</p>
                <p>$9(\\alpha-t)^2 = 9(t+1)^2 \\iff (\\alpha-t)^2=(t+1)^2 \\iff \\alpha-t=\\pm(t+1)$.</p>
                <p>• $\\alpha=-1$ : point $(1,1,3)=A$ ✓</p>
                <p>• $\\alpha=2t+1$ : point $(2t+3,\\,4t+5,\\,-4t-1)=E$.</p>
                <p>Donc $E(2t+3,\\,4t+5,\\,-4t-1)$.</p>
            `
        },
        // ============ 5.(b)(iv) ============
        {
            id: "p1q5biv",
            texte: "Déterminer la valeur de $t$ pour que le volume du tétraèdre $ABCD$ soit égal au volume du cône de sommet $E$, de centre $D$ et de rayon $r$.",
            solution: `
                <p><strong>Volume du tétraèdre :</strong> $V_{ABCD}=18$ (question 2.(a)).</p>
                <p><strong>Volume du cône :</strong> le cône a pour base le cercle de rayon $r=6\\sqrt{t}$ centré en $D$, et pour sommet $E$.</p>
                <p>Sa hauteur est $h=ED$. Or $\\vec{DE} $ a pour composantes $ \\begin{pmatrix} 2t \\\\ 4t \\\\ -4t \\end{pmatrix} = 2t\\,\\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$, donc $DE=2t\\cdot 3=6t$ (car $t\\geq 1>0$).</p>
                <p>$V_{cône}=\\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi\\cdot 36t\\cdot 6t = 72\\pi t^2$.</p>
                <p><strong>Égalité :</strong> $72\\pi t^2 = 18 \\iff t^2 = \\dfrac{1}{4\\pi} \\iff t = \\dfrac{1}{2\\sqrt{\\pi}} = \\dfrac{\\sqrt{\\pi}}{2\\pi}$.</p>
                <p><em>Remarque :</em> cette valeur ($\\approx 0{,}282$) est en dehors de l'intervalle $[1,+\\infty[$ considéré en 5.(b) ; on peut donc conclure que <strong>aucune valeur de $t\\geq 1$ ne convient</strong>. Si l'énoncé admettait $t\\in]0,+\\infty[$, la valeur cherchée serait $t=\\dfrac{1}{2\\sqrt{\\pi}}$.</p>
            `
        }
    ]
});