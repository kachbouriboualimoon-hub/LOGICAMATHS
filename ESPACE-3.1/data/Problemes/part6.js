// data/problemes/part6.js
// Problème 6 – Cube, centre de gravité, plans et sections
window.problemes.items.push({
    id: 6,
    titre: "Cube, centre de gravité, plans et sections",
    enonce: `
        <p>$ABCDEFGH$ est le cube d'arête 1 représenté sur la figure ci-dessous à compléter.<br>
        L'espace est rapporté au repère orthonormé $(A; \\vec{AB}, \\vec{AD}, \\vec{AE})$.</p>
    `,
    astuces: `
        <p>Dans un cube d'arête 1, les coordonnées des sommets sont simples à déterminer si on place l'origine en $A$ et les axes selon les arêtes.</p>
        <p>Pour montrer qu'un triangle est équilatéral, on calcule les longueurs de ses trois côtés.</p>
        <p>Le centre de gravité (isobarycentre) d'un triangle $ABC$ a pour coordonnées $\\left(\\dfrac{x_A+x_B+x_C}{3}, \\dfrac{y_A+y_B+y_C}{3}, \\dfrac{z_A+z_B+z_C}{3}\\right)$.</p>
        <p>Pour montrer qu'un point $I$ est le projeté orthogonal de $A$ sur un plan $(P)$, on vérifie que $I \\in (P)$ et que $\\vec{AI}$ est colinéaire au vecteur normal de $(P)$.</p>
    `,
    erreurs: `
        <p>Ne pas oublier de vérifier que le point appartient au plan avant de conclure qu'il est le projeté orthogonal.</p>
        <p>Pour la distance minimale, penser à étudier la fonction associée et non pas seulement le discriminant du trinôme.</p>
    `,
    questions: [
        // ============ PARTIE A ============
        // ============ A.1 ============
        {
            id: "p6qA1",
            texte: "Démontrer que le triangle $BDE$ est équilatéral.",
            solution: `
                <p>Dans le repère $(A; \\vec{AB}, \\vec{AD}, \\vec{AE})$, on a : $A(0,0,0)$, $B(1,0,0)$, $D(0,1,0)$ et $E(0,0,1)$.</p>
                <p>$BD = \\sqrt{(1-0)^2 + (0-1)^2 + 0^2} = \\sqrt{1+1} = \\sqrt{2}$.</p>
                <p>$BE = \\sqrt{(1-0)^2 + 0^2 + (0-1)^2} = \\sqrt{1+1} = \\sqrt{2}$.</p>
                <p>$DE = \\sqrt{(0-0)^2 + (1-0)^2 + (0-1)^2} = \\sqrt{0+1+1} = \\sqrt{2}$.</p>
                <p>Comme $BD = BE = DE = \\sqrt{2}$, le triangle $BDE$ est équilatéral.</p>
            `
        },
        // ============ A.2(a) ============
        {
            id: "p6qA2a",
            texte: "Calculer les coordonnées de $I$, centre de gravité du triangle $BDE$.",
            solution: `
                <p>$I$ est l'isobarycentre des points $B, D, E$.</p>
                <p>$I \\left( \\dfrac{1+0+0}{3}, \\dfrac{0+1+0}{3}, \\dfrac{0+0+1}{3} \\right)$</p>
                <p>$I \\left( \\dfrac{1}{3}, \\dfrac{1}{3}, \\dfrac{1}{3} \\right)$.</p>
            `
        },
        // ============ A.2(b) ============
        {
            id: "p6qA2b",
            texte: "Démontrer que $\\vec{AI} = \\dfrac{1}{3}\\vec{AG}$. Que peut-on en déduire pour les points $A, I$ et $G$ ?",
            solution: `
                <p>$G(1,1,1)$. $\\vec{AG} \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$\\dfrac{1}{3}\\vec{AG} \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 1/3 \\end{pmatrix}$.</p>
                <p>$\\vec{AI} \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 1/3 \\end{pmatrix}$.</p>
                <p>On a donc $\\vec{AI} = \\dfrac{1}{3}\\vec{AG}$.</p>
                <p>Les vecteurs $\\vec{AI}$ et $\\vec{AG}$ sont colinéaires, donc les points $A, I, G$ sont alignés.</p>
            `
        },
        // ============ A.3 ============
        {
            id: "p6qA3",
            texte: "Prouver que $I$ est le projeté orthogonal de $A$ sur le plan $(BDE)$.",
            solution: `
                <p>Cherchons le vecteur normal au plan $(BDE)$.</p>
                <p>$\\vec{BD} \\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ et $\\vec{BE} \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}$.</p>
                <p>$\\vec{BD} \\wedge \\vec{BE} \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1 & 1 & 0 \\\\ -1 & 0 & 1 \\end{vmatrix} = \\vec{i}(1-0) - \\vec{j}(-1-0) + \\vec{k}(0 - (-1)) \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Le vecteur $\\vec{AI} \\begin{pmatrix} 1/3 \\\\ 1/3 \\\\ 1/3 \\end{pmatrix}$ est colinéaire à ce vecteur normal.</p>
                <p>De plus, $I \\in (BDE)$ car $I$ est le centre de gravité du triangle $BDE$.</p>
                <p>Donc $I$ est le projeté orthogonal de $A$ sur le plan $(BDE)$.</p>
            `
        },
        // ============ PARTIE B ============
        // ============ B.1 ============
        {
            id: "p6qB1",
            texte: "Identifier $P_{1/3}$, $M_{1/3}$ et $N_{1/3}$ en utilisant des points déjà définis. Calculer la distance $M_{1/3}N_{1/3}$.",
            solution: `
                <p>$M_{1/3}$ est le point de $(AG)$ tel que $\\vec{AM_{1/3}} = \\dfrac{1}{3}\\vec{AG}$. D'après la partie A, $M_{1/3} = I$.</p>
                <p>$P_{1/3}$ est le plan passant par $M_{1/3}$ et parallèle à $(BDE)$. Comme $I \\in (BDE)$, le plan $P_{1/3}$ est confondu avec le plan $(BDE)$.</p>
                <p>$N_{1/3}$ est l'intersection de $P_{1/3}$ et de $(BC)$. Le plan $(BDE)$ coupe la droite $(BC)$ en $B$. Donc $N_{1/3} = B$.</p>
                <p>Distance $M_{1/3}N_{1/3} = IB$.</p>
                <p>$IB = \\sqrt{(1-1/3)^2 + (0-1/3)^2 + (0-1/3)^2} = \\sqrt{\\dfrac{4}{9} + \\dfrac{1}{9} + \\dfrac{1}{9}} = \\sqrt{\\dfrac{6}{9}} = \\dfrac{\\sqrt{6}}{3}$.</p>
            `
        },
        // ============ B.2(a) ============
        {
            id: "p6qB2a",
            texte: "Calculer les coordonnées de $M_k$ dans le repère $(A; \\vec{AB}, \\vec{AD}, \\vec{AE})$.",
            solution: `
                <p>$\\vec{AM_k} = k\\vec{AG} = k \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Donc $M_k(k, k, k)$.</p>
            `
        },
        // ============ B.2(b) ============
        {
            id: "p6qB2b",
            texte: "Déterminer une équation du plan $P_k$ dans ce repère.",
            solution: `
                <p>$P_k$ est parallèle au plan $(BDE)$. Son vecteur normal est $\\vec{n} \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$.</p>
                <p>Équation de $P_k$ : $x + y + z + d = 0$.</p>
                <p>$M_k(k,k,k) \\in P_k$ : $k + k + k + d = 0 \\Rightarrow d = -3k$.</p>
                <p>Donc $P_k : x + y + z - 3k = 0$.</p>
            `
        },
        // ============ B.2(c) ============
        {
            id: "p6qB2c",
            texte: "En déduire que le point $N_k$ a pour coordonnées $(1 ; 3k - 1 ; 0)$.",
            solution: `
                <p>La droite $(BC)$ passe par $B(1,0,0)$ et a pour vecteur directeur $\\vec{BC} \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$.</p>
                <p>Représentation paramétrique de $(BC)$ : $\\begin{cases} x = 1 \\\\ y = t \\\\ z = 0 \\end{cases} ; t \\in \\mathbb{R}$.</p>
                <p>$N_k \\in (BC) \\cap P_k$. Injectons les équations paramétriques dans l'équation de $P_k$ :</p>
                <p>$1 + t + 0 - 3k = 0 \\Rightarrow t = 3k - 1$.</p>
                <p>Donc $N_k(1, 3k-1, 0)$.</p>
            `
        },
        // ============ B.3 ============
        {
            id: "p6qB3",
            texte: "Pour quelles valeurs de $k$ la droite $(M_kN_k)$ est-elle orthogonale à la fois aux droites $(AG)$ et $(BC)$ ?",
            solution: `
                <p>$\\vec{M_kN_k} \\begin{pmatrix} 1-k \\\\ 3k-1-k \\\\ -k \\end{pmatrix} = \\begin{pmatrix} 1-k \\\\ 2k-1 \\\\ -k \\end{pmatrix}$.</p>
                <p>• Orthogonalité à $(AG)$ (vecteur directeur $\\vec{AG} \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$) :</p>
                <p>$\\vec{M_kN_k} \\cdot \\vec{AG} = (1-k) + (2k-1) + (-k) = 1 - k + 2k - 1 - k = 0$.</p>
                <p>Cette condition est vérifiée pour tout $k \\in \\mathbb{R}$.</p>
                <p>• Orthogonalité à $(BC)$ (vecteur directeur $\\vec{BC} \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$) :</p>
                <p>$\\vec{M_kN_k} \\cdot \\vec{BC} = 0(1-k) + 1(2k-1) + 0(-k) = 2k - 1$.</p>
                <p>On veut $2k - 1 = 0 \\Rightarrow k = \\dfrac{1}{2}$.</p>
                <p>Donc pour $k = \\dfrac{1}{2}$, la droite $(M_kN_k)$ est orthogonale à la fois à $(AG)$ et $(BC)$.</p>
            `
        },
        // ============ B.4 ============
        {
            id: "p6qB4",
            texte: "Pour quelles valeurs de $k$ la distance $M_kN_k$ est-elle minimale ?",
            solution: `
                <p>$M_kN_k^2 = (1-k)^2 + (2k-1)^2 + (-k)^2$</p>
                <p>$M_kN_k^2 = (1 - 2k + k^2) + (4k^2 - 4k + 1) + k^2$</p>
                <p>$M_kN_k^2 = 6k^2 - 6k + 2$.</p>
                <p>Soit $f(k) = 6k^2 - 6k + 2$. C'est un trinôme du second degré de la forme $ak^2 + bk + c$ avec $a = 6 > 0$.</p>
                <p>Le minimum est atteint pour $k = -\\dfrac{b}{2a} = \\dfrac{6}{12} = \\dfrac{1}{2}$.</p>
                <p>Donc la distance $M_kN_k$ est minimale pour $k = \\dfrac{1}{2}$.</p>
                <p>La distance minimale est $M_{1/2}N_{1/2} = \\sqrt{6(1/4) - 6(1/2) + 2} = \\sqrt{1{,}5 - 3 + 2} = \\sqrt{0{,}5} = \\dfrac{\\sqrt{2}}{2}$.</p>
            `
        },
        // ============ B.5 ============
        {
            id: "p6qB5",
            texte: "Tracer sur la figure donnée ci-dessous, la section du cube par le plan $P_{1/2}$. Tracer la droite $(M_{1/2}N_{1/2})$ sur la même figure.",
            solution: `
                <p>Pour $k = 1/2$, le plan $P_{1/2}$ a pour équation $x + y + z - \\dfrac{3}{2} = 0$.</p>
                <p>Il coupe les arêtes du cube en leurs milieux. La section est un hexagone régulier dont les sommets sont les milieux des arêtes.</p>
                <p>La droite $(M_{1/2}N_{1/2})$ passe par $M_{1/2}(1/2, 1/2, 1/2)$ (centre du cube) et $N_{1/2}(1, 1/2, 0)$.</p>
                <p><em>(Cette question est une construction graphique. Sur le dessin, il faut relier les milieux des arêtes pour former l'hexagone, puis tracer le segment reliant le centre du cube au milieu de l'arête $[BC]$.)</em></p>
            `
        }
    ]
});