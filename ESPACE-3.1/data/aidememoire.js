// aideMemoire.js – Version enrichie avec les "Savoir réagir" du PDF
// Format : objet avec des clés (ex: chapitre1, chapitre2, ...) contenant titre, description (optionnel) et items (tableau de cartes)
// Les formules mathématiques sont encadrées par $ pour MathJax.

window.aideMemoire = {
    // ============================================================
    // CHAPITRE 1 – Vecteurs (inchangé)
    // ============================================================
    chapitre1: {
        titre: "Vecteurs",
        description: "Questions essentielles sur les vecteurs, la relation de Chasles, la colinéarité et les bases.",
        items: [
            {
                question: "Qu'est-ce qu'un vecteur dans l'espace ?",
                reponse: "Un vecteur est défini par une direction, un sens et une norme. Deux bipoints (A,B) et (C,D) représentent le même vecteur si les segments [AC] et [BD] ont le même milieu."
            },
            {
                question: "Que dit la relation de Chasles ?",
                reponse: "Pour tous points A, B, C : $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
            },
            {
                question: "Quand dit-on que deux vecteurs sont colinéaires ?",
                reponse: "Deux vecteurs sont colinéaires si l'un est le produit de l'autre par un réel, c'est-à-dire s'ils ont la même direction."
            },
            {
                question: "Comment caractérise-t-on un parallélogramme avec des vecteurs ?",
                reponse: "$ABCD$ est un parallélogramme ssi $\\overrightarrow{AB} = \\overrightarrow{DC}$ ou $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$."
            },
            {
                question: "Que vaut la somme des vecteurs issus d'un sommet vers les autres dans un triangle ?",
                reponse: "Pour le centre de gravité $G$ d'un triangle $ABC$, on a $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, et $\\overrightarrow{AG} = \\frac{1}{3}(\\overrightarrow{AB} + \\overrightarrow{AC})$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 2 – Repères et combinaisons linéaires (inchangé)
    // ============================================================
    chapitre2: {
        titre: "Coplanarité",
        description: "Combinaisons linéaires, bases, coplanarité et parallélisme droite-plan.",
        items: [
            {
                question: "Qu'est-ce qu'une combinaison linéaire de deux vecteurs ?",
                reponse: "Un vecteur $\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ s'il existe deux réels $\\alpha$ et $\\beta$ tels que $\\vec{w} = \\alpha\\vec{u} + \\beta\\vec{v}$."
            },
            {
                question: "À quelle condition trois vecteurs forment-ils une base de l'espace ?",
                reponse: "Un triplet $(\\vec{i},\\vec{j},\\vec{k})$ est une base si la famille est libre (aucun vecteur n'est combinaison linéaire des deux autres). Dans l'espace, il faut qu'ils ne soient pas coplanaires."
            },
            {
                question: "Comment montre-t-on que quatre points sont coplanaires ?",
                reponse: "Quatre points $A, B, C, D$ sont coplanaires ssi les vecteurs $\\overrightarrow{AB}, \\overrightarrow{AC}$ et $\\overrightarrow{AD}$ sont liés (déterminant nul)."
            },
            {
                question: "Quelle est la condition pour qu'une droite soit parallèle à un plan ?",
                reponse: "Une droite $(A,\\vec{u})$ est parallèle à un plan $(B,\\vec{v},\\vec{w})$ ssi la famille $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est liée, c'est-à-dire que $\\vec{u}$ est combinaison linéaire de $\\vec{v}$ et $\\vec{w}$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 3 – Produit scalaire (inchangé)
    // ============================================================
    chapitre3: {
        titre: "Produit scalaire",
        description: "Définition, propriétés, orthogonalité, équation de plan avec un vecteur normal.",
        items: [
            {
                question: "Donner la définition du produit scalaire de deux vecteurs.",
                reponse: "$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos\\theta$, où $\\theta$ est l'angle géométrique entre les deux vecteurs. En coordonnées, si $\\vec{u}(x,y,z)$ et $\\vec{v}(x',y',z')$, alors $\\vec{u}\\cdot\\vec{v} = xx' + yy' + zz'$."
            },
            {
                question: "Comment calcule-t-on la norme d'un vecteur dans un repère orthonormé ?",
                reponse: "$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$ pour $\\vec{u}(x,y,z)$."
            },
            {
                question: "À quelle condition deux vecteurs sont-ils orthogonaux ?",
                reponse: "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$."
            },
            {
                question: "Comment trouve-t-on l'équation cartésienne d'un plan passant par un point A et de vecteur normal $\\vec{n}(a,b,c)$ ?",
                reponse: "On écrit $\\overrightarrow{AM} \\cdot \\vec{n} = 0$, ce qui donne $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$, soit $ax+by+cz+d=0$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 4 – Déterminant (inchangé)
    // ============================================================
    chapitre4: {
        titre: "Déterminant",
        description: "Calcul du déterminant, coplanarité, volumes (parallélépipède, tétraèdre).",
        items: [
            {
                question: "Comment calcule-t-on le déterminant de trois vecteurs dans une base ?",
                reponse: "Si $\\vec{u}(a,b,c), \\vec{v}(a',b',c'), \\vec{w}(a'',b'',c'')$, alors $\\det(\\vec{u},\\vec{v},\\vec{w}) = \\begin{vmatrix} a & a' & a'' \\\\ b & b' & b'' \\\\ c & c' & c'' \\end{vmatrix}$."
            },
            {
                question: "Que signifie un déterminant nul pour trois vecteurs ?",
                reponse: "Le déterminant est nul ssi les trois vecteurs sont coplanaires (famille liée). Ils ne forment donc pas une base de l'espace."
            },
            {
                question: "Comment calcule-t-on le volume d'un tétraèdre ABCD ?",
                reponse: "$V = \\frac{1}{6} \\left| \\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) \\right|$."
            },
            {
                question: "Comment calcule-t-on le volume d'un parallélépipède construit sur trois vecteurs ?",
                reponse: "$V = \\left| \\det(\\vec{u},\\vec{v},\\vec{w}) \\right|$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 5 – Produit vectoriel (inchangé)
    // ============================================================
    chapitre5: {
        titre: "Produit vectoriel",
        description: "Définition, calcul analytique, aires, distances, vecteur normal.",
        items: [
            {
                question: "Définir le produit vectoriel de deux vecteurs.",
                reponse: "$\\vec{u} \\wedge \\vec{v}$ est l'unique vecteur orthogonal à $\\vec{u}$ et $\\vec{v}$, de norme $\\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta$, et tel que $(\\vec{u},\\vec{v},\\vec{u}\\wedge\\vec{v})$ soit directe."
            },
            {
                question: "Donner la formule analytique du produit vectoriel.",
                reponse: "Si $\\vec{u}(x,y,z)$ et $\\vec{v}(x',y',z')$, alors $\\vec{u}\\wedge\\vec{v} = \\begin{pmatrix} yz' - zy' \\\\ zx' - xz' \\\\ xy' - yx' \\end{pmatrix}$."
            },
            {
                question: "Comment calcule-t-on l'aire d'un triangle ABC ?",
                reponse: "$\\mathcal{A}_{ABC} = \\frac{1}{2} \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$."
            },
            {
                question: "Comment trouve-t-on un vecteur normal à un plan défini par trois points A, B, C ?",
                reponse: "On calcule $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC}$. Ce vecteur est normal au plan $(ABC)$."
            },
            {
                question: "Comment calcule-t-on la distance d'un point M à une droite $\\mathcal{D}(A,\\vec{u})$ ?",
                reponse: "$d(M,\\mathcal{D}) = \\dfrac{\\|\\overrightarrow{AM} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 6 – Orthogonalité et vecteurs normaux (enrichi)
    // ============================================================
    chapitre6: {
        titre: "Orthogonalité",
        description: "Vecteurs normaux, plans perpendiculaires, distance d'un point à un plan, projeté orthogonal.",
        items: [
            // Cartes existantes
            {
                question: "Qu'est-ce qu'un vecteur normal à un plan ?",
                reponse: "Un vecteur non nul $\\vec{n}$ est normal à un plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$."
            },
            {
                question: "Comment calcule-t-on la distance d'un point à un plan ?",
                reponse: "Si $\\mathcal{P}: ax+by+cz+d=0$ et $M(x_0,y_0,z_0)$, alors $d(M,\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$."
            },
            {
                question: "À quelle condition deux plans sont-ils perpendiculaires ?",
                reponse: "Deux plans sont perpendiculaires ssi leurs vecteurs normaux sont orthogonaux (produit scalaire nul)."
            },
            {
                question: "À quelle condition une droite est-elle parallèle à un plan ?",
                reponse: "Une droite de vecteur directeur $\\vec{u}$ est parallèle à un plan de normale $\\vec{n}$ ssi $\\vec{u} \\cdot \\vec{n} = 0$."
            },
            // Nouvelles cartes issues du PDF
            {
                question: "Comment déterminer le projeté orthogonal $H$ d'un point $A$ sur un plan $\\mathcal{P}$ ?",
                reponse: "On utilise le système : $\\begin{cases} \\overrightarrow{AH} = \\alpha \\vec{n}_\\mathcal{P} \\\\ H \\in \\mathcal{P} \\end{cases}$. On écrit les coordonnées de $H$ en fonction de $\\alpha$, puis on résout l'équation du plan pour trouver $\\alpha$."
            },
            {
                question: "Étant donné un point $A$ et une droite $\\Delta$, comment trouver le point $H$ de $\\Delta$ tel que $AH$ soit minimale ?",
                reponse: "$H$ est le projeté orthogonal de $A$ sur $\\Delta$. On a $H \\in \\Delta$ et $\\overrightarrow{AH} \\cdot \\vec{u}_\\Delta = 0$ (où $\\vec{u}_\\Delta$ est un vecteur directeur de $\\Delta$)."
            },
            {
                question: "Soit $\\mathcal{P} \\perp \\mathcal{Q}$ et $\\Delta = \\mathcal{P} \\cap \\mathcal{Q}$. Comment calcule-t-on la distance d'un point $A$ à la droite $\\Delta$ ?",
                reponse: "On a $d^2(A,\\Delta) = d^2(A,\\mathcal{P}) + d^2(A,\\mathcal{Q})$ (théorème de Pythagore dans l'espace)."
            },
            {
                question: "Comment déterminer le plan médiateur d'un segment $[AB]$ ?",
                reponse: "Le plan médiateur est l'ensemble des points équidistants de $A$ et $B$. Son vecteur normal est $\\overrightarrow{AB}$ et il passe par le milieu $I$ de $[AB]$. Équation : $\\overrightarrow{IM} \\cdot \\overrightarrow{AB} = 0$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 7 – Représentations paramétriques (enrichi)
    // ============================================================
    chapitre7: {
        titre: "Les Paramétriques",
        description: "Paramétrisation d'une droite et d'un plan, appartenance, passage à la cartésienne.",
        items: [
            // Cartes existantes
            {
                question: "Donner la représentation paramétrique d'une droite passant par A et de vecteur directeur $\\vec{u}(a,b,c)$.",
                reponse: "$\\begin{cases} x = x_0 + \\alpha a \\\\ y = y_0 + \\alpha b \\\\ z = z_0 + \\alpha c \\end{cases}, \\alpha \\in \\mathbb{R}$."
            },
            {
                question: "Donner la représentation paramétrique d'un plan passant par A de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$.",
                reponse: "$\\begin{cases} x = x_0 + \\alpha a + \\beta a' \\\\ y = y_0 + \\alpha b + \\beta b' \\\\ z = z_0 + \\alpha c + \\beta c' \\end{cases}, \\alpha,\\beta \\in \\mathbb{R}$."
            },
            {
                question: "Comment vérifier qu'un point appartient à une droite paramétrée ?",
                reponse: "On remplace les coordonnées du point dans le système et on résout pour le paramètre. Il doit exister une unique valeur satisfaisant les trois équations."
            },
            {
                question: "Comment passer d'une représentation paramétrique d'un plan à une équation cartésienne ?",
                reponse: "On calcule le vecteur normal $\\vec{n} = \\vec{u} \\wedge \\vec{v}$ à partir des deux vecteurs directeurs, puis on écrit $\\vec{n} \\cdot \\overrightarrow{AM} = 0$."
            },
            // Nouvelles cartes issues du PDF
            {
                question: "Comment obtenir une représentation paramétrique d'une droite $\Delta(A,\\vec{u})$ à partir d'un point $A$ et d'un vecteur directeur $\\vec{u}$ ?",
                reponse: "On écrit $M \\in \\Delta \\iff \\overrightarrow{AM} = \\alpha \\vec{u}$, ce qui donne le système paramétrique : $\\begin{cases} x = x_A + \\alpha u_x \\\\ y = y_A + \\alpha u_y \\\\ z = z_A + \\alpha u_z \\end{cases}, \\alpha \\in \\mathbb{R}$."
            },
            {
                question: "Étant donnée une droite définie par deux équations cartésiennes (intersection de deux plans), comment obtenir une représentation paramétrique ?",
                reponse: "On pose une variable comme paramètre (par exemple $x = \\alpha$), puis on résout le système pour exprimer les deux autres variables en fonction de $\\alpha$. On obtient un système du type $\\begin{cases} x = \\alpha \\\\ y = f(\\alpha) \\\\ z = g(\\alpha) \\end{cases}$."
            },
            {
                question: "Comment déterminer une représentation paramétrique de la droite passant par deux points $A$ et $B$ ?",
                reponse: "Un vecteur directeur est $\\vec{u} = \\overrightarrow{AB}$ (ou $\\overrightarrow{BA}$). On prend $A$ (ou $B$) comme point de référence et on écrit $M = A + \\alpha \\overrightarrow{AB}$."
            },
            {
                question: "Comment montrer que trois points $A, B, C$ sont alignés ?",
                reponse: "Il suffit de montrer que les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires, c'est-à-dire qu'il existe $\\lambda$ tel que $\\overrightarrow{AC} = \\lambda \\overrightarrow{AB}$ (ou $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\vec{0}$)."
            },
            {
                question: "Comment montrer que trois points $A, B, C$ ne sont pas alignés ?",
                reponse: "On vérifie que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires, c'est-à-dire $\\overrightarrow{AB} \\wedge \\overrightarrow{AC} \\neq \\vec{0}$."
            },
            {
                question: "Comment calculer la distance $AB$ entre deux points $A$ et $B$ ?",
                reponse: "$AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 8 – Équations cartésiennes et positions relatives (enrichi)
    // ============================================================
    chapitre8: {
        titre: "Équations et positions",
        description: "Équation d'un plan, positions relatives de plans, droite-plan.",
        items: [
            // Cartes existantes
            {
                question: "Quelle est la forme générale d'une équation cartésienne d'un plan ?",
                reponse: "$ax + by + cz + d = 0$, avec $(a,b,c) \\neq (0,0,0)$. Le vecteur $\\vec{n}(a,b,c)$ est un vecteur normal au plan."
            },
            {
                question: "Comment déterminer l'équation d'un plan passant par $A(x_0,y_0,z_0)$ et de normale $\\vec{n}(a,b,c)$ ?",
                reponse: "$a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$."
            },
            {
                question: "Quand dit-on que deux plans sont parallèles ?",
                reponse: "Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires. S'ils sont distincts, ils sont strictement parallèles ; s'ils sont proportionnels (équations proportionnelles), ils sont confondus."
            },
            {
                question: "Comment étudie-t-on la position relative d'une droite et d'un plan ?",
                reponse: "Soit $\\mathcal{D}(A,\\vec{u})$ et $\\mathcal{P}$ de normale $\\vec{n}$. Si $\\vec{u}\\cdot\\vec{n} \\neq 0$, la droite est sécante. Si $\\vec{u}\\cdot\\vec{n} = 0$ et $A\\notin\\mathcal{P}$, elle est strictement parallèle. Si $\\vec{u}\\cdot\\vec{n} = 0$ et $A\\in\\mathcal{P}$, elle est incluse."
            },
            // Nouvelles cartes issues du PDF
            {
                question: "Comment trouver un vecteur normal à un plan défini par deux vecteurs directeurs $\\vec{u}$ et $\\vec{v}$ ?",
                reponse: "On calcule le produit vectoriel $\\vec{n} = \\vec{u} \\wedge \\vec{v}$. Ce vecteur est normal au plan."
            },
            {
                question: "Comment montrer qu'une droite $(A,\\vec{u})$ est parallèle à un plan $\\mathcal{P}$ de normale $\\vec{n}_\\mathcal{P}$ ?",
                reponse: "On vérifie que $\\vec{u} \\cdot \\vec{n}_\\mathcal{P} = 0$."
            },
            {
                question: "Comment montrer qu'une droite $(A,\\vec{u})$ est incluse dans un plan $\\mathcal{P}$ ?",
                reponse: "On vérifie que $\\vec{u} \\cdot \\vec{n}_\\mathcal{P} = 0$ et que $A \\in \\mathcal{P}$."
            },
            {
                question: "Comment déterminer une équation cartésienne d'une droite $\Delta$ perpendiculaire à un plan $\\mathcal{P}$ et passant par un point $I$ ?",
                reponse: "Un vecteur directeur de $\Delta$ est le vecteur normal $\\vec{n}_\\mathcal{P}$ du plan. La représentation paramétrique de $\Delta$ est alors $M = I + \\alpha \\vec{n}_\\mathcal{P}$."
            },
            {
                question: "Comment montrer que deux plans $\\mathcal{P}$ et $\\mathcal{Q}$ sont perpendiculaires ?",
                reponse: "On vérifie que leurs vecteurs normaux sont orthogonaux : $\\vec{n}_\\mathcal{P} \\cdot \\vec{n}_\\mathcal{Q} = 0$."
            },
            {
                question: "Comment montrer que deux plans $\\mathcal{P}$ et $\\mathcal{Q}$ sont sécants (leur intersection est une droite) ?",
                reponse: "Il suffit de montrer que leurs vecteurs normaux ne sont pas colinéaires ($\\vec{n}_\\mathcal{P} \\wedge \\vec{n}_\\mathcal{Q} \\neq \\vec{0}$)."
            },
            {
                question: "Comment montrer que deux plans $\\mathcal{P}$ et $\\mathcal{Q}$ sont parallèles ?",
                reponse: "On vérifie que leurs vecteurs normaux sont colinéaires, c'est-à-dire $\\vec{n}_\\mathcal{P} \\wedge \\vec{n}_\\mathcal{Q} = \\vec{0}$."
            },
            {
                question: "Comment montrer qu'une famille de plans $\\mathcal{P}_m$ (dépendant d'un paramètre $m$) contient une droite fixe ?",
                reponse: "On écrit l'équation du plan sous la forme $m \\times (\\text{expression}) + (\\text{autre expression}) = 0$. Les points fixes vérifient les deux équations indépendantes de $m$, ce qui donne une droite (système de deux équations)."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 9 – La sphère (enrichi)
    // ============================================================
    chapitre9: {
        titre: "La sphère",
        description: "Équation d'une sphère, intersection avec un plan, plan tangent.",
        items: [
            // Cartes existantes
            {
                question: "Donner l'équation d'une sphère de centre $I(a,b,c)$ et de rayon $R$.",
                reponse: "$(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$."
            },
            {
                question: "À partir de l'équation développée $x^2+y^2+z^2+\\alpha x+\\beta y+\\gamma z+\\delta=0$, comment trouver le centre et le rayon ?",
                reponse: "On complète les carrés : le centre est $I\\left(-\\frac{\\alpha}{2}, -\\frac{\\beta}{2}, -\\frac{\\gamma}{2}\\right)$ et $R^2 = \\frac{\\alpha^2+\\beta^2+\\gamma^2}{4} - \\delta$."
            },
            {
                question: "Comment détermine-t-on l'intersection d'une sphère et d'un plan ?",
                reponse: "Soit $h$ la distance du centre $I$ au plan. Si $h > R$ : intersection vide. Si $h = R$ : plan tangent (un point). Si $h < R$ : intersection est un cercle de centre le projeté orthogonal $H$ de $I$ sur le plan, et de rayon $r = \\sqrt{R^2 - h^2}$."
            },
            {
                question: "Quel est l'ensemble des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ ?",
                reponse: "C'est la sphère de diamètre $[AB]$."
            },
            {
                question: "Comment trouve-t-on l'équation du plan tangent à une sphère en un point $A$ ?",
                reponse: "Le plan tangent en $A$ est le plan passant par $A$ et perpendiculaire au rayon $IA$. Son équation s'obtient avec le vecteur normal $\\overrightarrow{IA}$."
            },
            // Nouvelles cartes issues du PDF
            {
                question: "Étant donné un plan fixe $\\mathcal{Q}$ et une sphère $\\mathcal{S}(I,R)$ sécante à $\\mathcal{Q}$ suivant un cercle, comment trouver les deux plans $\\mathcal{P}_1$ et $\\mathcal{P}_2$ parallèles à $\\mathcal{Q}$ et tangents à la sphère ?",
                reponse: "Les plans $\\mathcal{P}_1$ et $\\mathcal{P}_2$ ont la même normale que $\\mathcal{Q}$. On cherche leurs distances $d_1$ et $d_2$ au centre $I$ telles que $d(I,\\mathcal{P}_i) = R$. On obtient deux valeurs possibles, d'où les deux plans."
            },
            {
                question: "Soit $\\mathcal{S}_m$ une sphère dépendant d'un paramètre $m$, et $\\mathcal{P}$ un plan fixe. Comment discuter les positions relatives de $\\mathcal{S}_m$ et $\\mathcal{P}$ ?",
                reponse: "On calcule la distance $d(I_m,\\mathcal{P})$ du centre de la sphère au plan, puis on calcule $d^2 - R_m^2$. On étudie le signe de cette expression en fonction de $m$ pour déterminer si l'intersection est vide, un point (tangent) ou un cercle."
            },
            {
                question: "Soit $\\mathcal{P}$ et $\\mathcal{Q}$ deux plans parallèles. Une sphère $\\mathcal{S}$ est tangente à $\\mathcal{Q}$ en $B$ et coupe $\\mathcal{P}$ suivant un cercle de centre $A$ et de rayon $2\\sqrt{3}$. Montrer que $IB^2 - IA^2 = 12$ (où $I$ est le centre de la sphère).",
                reponse: "Comme $\\mathcal{S}$ est tangente à $\\mathcal{Q}$ en $B$, on a $IB = R$ (rayon). L'intersection avec $\\mathcal{P}$ est un cercle de rayon $2\\sqrt{3}$, donc $IA^2 + (2\\sqrt{3})^2 = R^2$ (théorème de Pythagore dans le triangle rectangle formé par $I$, $A$ et le projeté de $I$ sur $\\mathcal{P}$). Ainsi $R^2 - IA^2 = 12$, d'où $IB^2 - IA^2 = 12$."
            },
            {
                question: "Comment montrer qu'un ensemble de points défini par une équation du second degré $x^2+y^2+z^2+\\alpha x+\\beta y+\\gamma z+\\delta=0$ est une sphère ?",
                reponse: "On complète les carrés. Si le rayon $R$ est positif, c'est une sphère. Si $R=0$, c'est un point. Si $R^2<0$, l'ensemble est vide."
            },
            {
                question: "Étant donnée une sphère $\\mathcal{S}$ et un point $A$ sur la sphère, comment déterminer le plan tangent en $A$ ?",
                reponse: "Le vecteur $\\overrightarrow{IA}$ (où $I$ est le centre) est un vecteur normal au plan tangent. L'équation du plan est $\\overrightarrow{IA} \\cdot \\overrightarrow{AM} = 0$."
            },
            {
                question: "Soit une sphère $\\mathcal{S}$ et un plan $\\mathcal{P}$ qui la coupe suivant un cercle $\\mathcal{C}$ de centre $H$ et de rayon $r$. Comment vérifier qu'un point $A$ donné appartient à $\\mathcal{C}$ ?",
                reponse: "Il suffit de vérifier que $A \\in \\mathcal{P}$ et $AH = r$ (ou $A \\in \\mathcal{S}$ et $A \\in \\mathcal{P}$)."
            },
            {
                question: "Comment déterminer l'intersection d'une sphère $\\mathcal{S}$ et d'une droite $\\Delta$ donnée paramétriquement ?",
                reponse: "On remplace les coordonnées paramétriques de la droite dans l'équation de la sphère. On obtient une équation du second degré en le paramètre. La résolution donne 0, 1 ou 2 points d'intersection."
            }
        ]
    },

    // ============================================================
    // CHAPITRE 10 – Synthèse (inchangé, mais on pourrait ajouter des cartes)
    // ============================================================
    chapitre10: {
        titre: "Synthèse",
        description: "Formules clés, démarche générale pour les problèmes de synthèse.",
        items: [
            {
                question: "Quelles sont les formules de volume à connaître ?",
                reponse: "– Tétraèdre $ABCD$ : $V = \\frac{1}{6}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$.<br>– Parallélépipède : $V = |\\det(\\vec{u},\\vec{v},\\vec{w})|$.<br>– Aire d'un triangle : $\\mathcal{A} = \\frac{1}{2}\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$.<br>– Distance d'un point à un plan : $d = \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$."
            },
            {
                question: "Quelle démarche suivre pour un problème de synthèse en géométrie dans l'espace ?",
                reponse: "1. Lire et identifier les données.<br>2. Choisir un repère adapté.<br>3. Utiliser les outils du cours (produit scalaire, vectoriel, déterminant).<br>4. Traduire les conditions en équations.<br>5. Résoudre et interpréter."
            },
            {
                question: "Comment montrer que quatre points sont coplanaires ?",
                reponse: "On calcule le déterminant des trois vecteurs issus d'un même point. S'il est nul, les points sont coplanaires. On peut aussi montrer que l'un des vecteurs est combinaison linéaire des deux autres."
            },
            {
                question: "Comment déterminer la section d'une pyramide par un plan ?",
                reponse: "On trouve les intersections du plan avec les arêtes de la pyramide en résolvant les systèmes d'équations (paramétriques de l'arête + équation du plan). On relie ensuite les points d'intersection."
            }
        ]
    }
};