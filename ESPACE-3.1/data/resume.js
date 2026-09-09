// ================================================================
// Resume.js – Résumés détaillés par chapitre
// Géométrie dans l'Espace – 4ème Sciences Techniques
// ================================================================

// Objet contenant les résumés pour chaque chapitre
const resumes = {
    1: {
        titre: 'Vecteurs de l\'espace',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Vecteur :</strong> défini par une direction, un sens et une norme.</li>
                <li><strong>Égalité :</strong> deux bipoints $(A,B)$ et $(C,D)$ représentent le même vecteur si $[AC]$ et $[BD]$ ont même milieu.</li>
                <li><strong>Relation de Chasles :</strong> $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.</li>
                <li><strong>Multiplication par un réel :</strong> $k\\vec{u}$ a pour norme $|k|\\cdot\\|\\vec{u}\\|$.</li>
                <li><strong>Colinéarité :</strong> $\\vec{u}$ et $\\vec{v}$ colinéaires ssi $\\exists k\\in\\mathbb{R},\\ \\vec{u}=k\\vec{v}$.</li>
                <li><strong>Repère cartésien d’une droite :</strong> $(A,\\vec{u})$ définit la droite passant par $A$ de direction $\\vec{u}$.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>Deux droites sont parallèles ssi leurs vecteurs directeurs sont colinéaires.</li>
                <li>L’ensemble des points $M$ tels que $\\overrightarrow{AM}$ et $\\vec{u}$ soient colinéaires est la droite $(A,\\vec{u})$.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Utiliser Chasles pour décomposer un vecteur.</li>
                <li>Dans un parallélépipède, les arêtes opposées et parallèles sont représentées par des vecteurs égaux.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Confondre $\\overrightarrow{AB}$ et $\\overrightarrow{BA}$ (opposés).</li>
                <li>Oublier que le vecteur nul est colinéaire à tout vecteur.</li>
            </ul>
        `
    },
    2: {
        titre: 'Repères et combinaisons linéaires',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Combinaison linéaire :</strong> $\\vec{w} = \\alpha\\vec{u} + \\beta\\vec{v}$.</li>
                <li><strong>Famille liée :</strong> un vecteur est combinaison linéaire des autres. Famille libre : aucun ne l’est.</li>
                <li><strong>Base :</strong> triplet de vecteurs libres (non coplanaires).</li>
                <li><strong>Repère cartésien :</strong> $(O,\\vec{i},\\vec{j},\\vec{k})$ : tout point $M$ a des coordonnées uniques.</li>
                <li><strong>Coplanarité :</strong> $A,B,C,D$ coplanaires ssi $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est liée.</li>
                <li><strong>Parallélisme droite-plan :</strong> $(A,\\vec{u}) \\parallel (B,\\vec{v},\\vec{w})$ ssi $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est liée.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>Tout vecteur s’écrit de manière unique dans une base.</li>
                <li>L’ensemble des combinaisons linéaires de deux vecteurs non colinéaires est un plan.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Choisir une base adaptée simplifie les calculs.</li>
                <li>Pour tester la liberté d’une famille, on peut résoudre $\\alpha\\vec{u}+\\beta\\vec{v}+\\gamma\\vec{w}=\\vec{0}$.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Confondre famille libre et famille liée.</li>
                <li>Oublier que deux vecteurs colinéaires forment une famille liée.</li>
            </ul>
        `
    },
    3: {
        titre: 'Produit scalaire',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Définition :</strong> $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$.</li>
                <li><strong>En coordonnées (repère orthonormé) :</strong> $\\vec{u}\\cdot\\vec{v} = xx\' + yy\' + zz\'$.</li>
                <li><strong>Norme :</strong> $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$.</li>
                <li><strong>Distance :</strong> $MN = \\sqrt{(x_N-x_M)^2+(y_N-y_M)^2+(z_N-z_M)^2}$.</li>
                <li><strong>Orthogonalité :</strong> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u}\\cdot\\vec{v}=0$.</li>
                <li><strong>Équation d’un plan :</strong> $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$ avec $\\vec{n}(a,b,c)$ normal.</li>
                <li><strong>Parallélisme droite-plan :</strong> $\\mathcal{D}(A,\\vec{u}) \\parallel \\mathcal{P}$ ssi $\\vec{u}\\cdot\\vec{n}=0$.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li><strong>Cauchy-Schwarz :</strong> $|\\vec{u}\\cdot\\vec{v}| \\leq \\|\\vec{u}\\|\\|\\vec{v}\\|$.</li>
                <li><strong>Minkowski :</strong> $\\|\\vec{u}+\\vec{v}\\| \\leq \\|\\vec{u}\\| + \\|\\vec{v}\\|$.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Dans un cube, les arêtes perpendiculaires ont un produit scalaire nul.</li>
                <li>Pour trouver l’équation d’un plan, on utilise un point et un vecteur normal.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Oublier que le produit scalaire est nul pour des vecteurs orthogonaux.</li>
                <li>Utiliser la formule $xx\'+yy\'+zz\'$ dans un repère non orthonormé.</li>
            </ul>
        `
    },
    4: {
        titre: 'Déterminant de trois vecteurs',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Déterminant :</strong> $\\det(\\vec{u},\\vec{v},\\vec{w}) = \\begin{vmatrix} a&a\'&a\'\' \\\\ b&b\'&b\'\' \\\\ c&c\'&c\'\' \\end{vmatrix}$.</li>
                <li><strong>Lien avec la coplanarité :</strong> $\\det = 0 \\iff$ les trois vecteurs sont coplanaires.</li>
                <li><strong>Base :</strong> $\\det \\neq 0 \\iff (\\vec{u},\\vec{v},\\vec{w})$ est une base.</li>
                <li><strong>Volume du parallélépipède :</strong> $V = |\\det|$.</li>
                <li><strong>Volume du tétraèdre :</strong> $V = \\frac{1}{6}|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>$A,B,C,D$ sont coplanaires ssi $\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})=0$.</li>
                <li>Le déterminant change de signe si on permute deux vecteurs.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Utiliser la règle de Sarrus pour calculer rapidement un déterminant.</li>
                <li>Dans un cube, les arêtes issues d’un sommet forment une base (déterminant non nul).</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Oublier le facteur $\\frac{1}{6}$ pour le volume du tétraèdre.</li>
                <li>Confondre déterminant nul et base.</li>
            </ul>
        `
    },
    5: {
        titre: 'Produit vectoriel',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Définition :</strong> $\\vec{u}\\wedge\\vec{v}$ est orthogonal à $\\vec{u}$ et $\\vec{v}$, base directe, norme $\\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta$.</li>
                <li><strong>Expression analytique :</strong> $\\vec{u}\\wedge\\vec{v} = \\begin{pmatrix} yz\'-zy\' \\\\ zx\'-xz\' \\\\ xy\'-yx\' \\end{pmatrix}$.</li>
                <li><strong>Aire :</strong> triangle $ABC$ : $\\mathcal{A} = \\frac{1}{2}\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$.</li>
                <li><strong>Distance point-droite :</strong> $d(M,\\mathcal{D}) = \\dfrac{\\|\\overrightarrow{AM}\\wedge\\vec{u}\\|}{\\|\\vec{u}\\|}$.</li>
                <li><strong>Volume du tétraèdre :</strong> $V = \\frac{1}{6}|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}|$.</li>
                <li><strong>Vecteur normal :</strong> si $A,B,C$ non alignés, $\\vec{n} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC}$ est normal à $(ABC)$.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>$\\vec{u}\\wedge\\vec{v} = \\vec{0} \\iff \\vec{u}$ et $\\vec{v}$ colinéaires.</li>
                <li>$(\\vec{u}\\wedge\\vec{v})\\cdot\\vec{w} = \\det(\\vec{u},\\vec{v},\\vec{w})$.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Le produit vectoriel donne un vecteur normal à un plan.</li>
                <li>Sa norme est l’aire du parallélogramme construit sur les deux vecteurs.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Confondre produit scalaire et produit vectoriel.</li>
                <li>Oublier le facteur $\\frac{1}{2}$ pour l’aire d’un triangle.</li>
                <li>Utiliser la formule analytique dans une base non orthonormée directe.</li>
            </ul>
        `
    },
    6: {
        titre: 'Orthogonalité et vecteurs normaux',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Orthogonalité :</strong> $\\vec{u}\\cdot\\vec{v}=0$.</li>
                <li><strong>Projeté orthogonal :</strong> $\\overrightarrow{OA}\\cdot\\overrightarrow{OB} = \\overrightarrow{OA}\\cdot\\overrightarrow{OH}$.</li>
                <li><strong>Vecteur normal :</strong> $\\vec{n}$ normal à $\\mathcal{P}$ ssi $\\vec{n}\\cdot\\vec{u}=0$ et $\\vec{n}\\cdot\\vec{v}=0$ pour deux vecteurs directeurs non colinéaires.</li>
                <li><strong>Distance point-plan :</strong> $d(M,\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.</li>
                <li><strong>Plans perpendiculaires :</strong> leurs vecteurs normaux sont orthogonaux.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>Le plan passant par $A$ de normale $\\vec{n}$ est l’ensemble des $M$ tels que $\\overrightarrow{AM}\\cdot\\vec{n}=0$.</li>
                <li>Deux droites sont orthogonales ssi leurs vecteurs directeurs le sont.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Pour trouver un vecteur normal à un plan défini par trois points, utiliser le produit vectoriel.</li>
                <li>La distance d’un point à un plan est la plus courte distance.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Ne pas confondre orthogonalité de vecteurs et orthogonalité de droites.</li>
                <li>Oublier la valeur absolue dans la formule de la distance.</li>
            </ul>
        `
    },
    7: {
        titre: 'Représentations paramétriques',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Droite :</strong> $\\begin{cases} x=x_0+\\alpha a \\\\ y=y_0+\\alpha b \\\\ z=z_0+\\alpha c \\end{cases}, \\alpha\\in\\mathbb{R}$.</li>
                <li><strong>Plan :</strong> $\\begin{cases} x=x_0+\\alpha a+\\beta a\' \\\\ y=y_0+\\alpha b+\\beta b\' \\\\ z=z_0+\\alpha c+\\beta c\' \\end{cases}, \\alpha,\\beta\\in\\mathbb{R}$.</li>
                <li><strong>Appartenance :</strong> on résout le système pour trouver le(s) paramètre(s).</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>Une droite a une infinité de représentations paramétriques.</li>
                <li>Un plan a une infinité de représentations paramétriques.</li>
                <li>Pour qu’un système paramétrique représente un plan, les deux vecteurs directeurs doivent être non colinéaires.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Pour une droite passant par deux points, prendre $\\overrightarrow{AB}$ comme vecteur directeur.</li>
                <li>Pour un plan passant par trois points, prendre deux vecteurs issus d’un même point.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Confondre le nombre de paramètres (1 pour une droite, 2 pour un plan).</li>
                <li>Ne pas vérifier que les vecteurs directeurs d’un plan ne sont pas colinéaires.</li>
            </ul>
        `
    },
    8: {
        titre: 'Équations cartésiennes et positions relatives',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Équation d’un plan :</strong> $ax+by+cz+d=0$, $(a,b,c)\\neq(0,0,0)$.</li>
                <li><strong>Vecteur normal :</strong> $\\vec{n}(a,b,c)$.</li>
                <li><strong>Intersection de deux plans :</strong> système de deux équations → droite (si les normaux ne sont pas colinéaires).</li>
                <li><strong>Positions relatives :</strong>
                    <ul>
                        <li>Plans : parallèles ssi normaux colinéaires ; sinon sécants.</li>
                        <li>Droite-plan : sécante si $\\vec{u}\\cdot\\vec{n}\\neq 0$ ; parallèle ou incluse si $\\vec{u}\\cdot\\vec{n}=0$.</li>
                    </ul>
                </li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>Toute équation $ax+by+cz+d=0$ avec $(a,b,c)\\neq(0,0,0)$ est un plan.</li>
                <li>La distance d’un point à un plan se calcule par la formule donnée au chapitre 6.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Pour trouver l’intersection de deux plans, on résout le système en posant une variable comme paramètre.</li>
                <li>Deux plans parallèles ont des normaux proportionnels.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Oublier que $(a,b,c)$ doit être non nul.</li>
                <li>Ne pas vérifier si deux plans sont confondus (équations proportionnelles).</li>
            </ul>
        `
    },
    9: {
        titre: 'La Sphère',
        contenu: `
            <h4>🔹 Notions essentielles</h4>
            <ul>
                <li><strong>Équation :</strong> $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.</li>
                <li><strong>Centre et rayon :</strong> $I(a,b,c)$, $R$.</li>
                <li><strong>Intersection sphère-plan :</strong> soit $h=d(I,\\mathcal{P})$.
                    <ul>
                        <li>$h>R$ : vide.</li>
                        <li>$h=R$ : point (plan tangent).</li>
                        <li>$h<R$ : cercle de centre $H$ (projeté) et de rayon $r=\\sqrt{R^2-h^2}$.</li>
                    </ul>
                </li>
                <li><strong>Sphère de diamètre $[AB]$ :</strong> $\{M\\mid \\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0\\}$.</li>
                <li><strong>Plan tangent :</strong> passant par $A$ et de normale $\\overrightarrow{IA}$.</li>
            </ul>
            <h4>📌 Théorèmes clés</h4>
            <ul>
                <li>L’équation développée $x^2+y^2+z^2+\\alpha x+\\beta y+\\gamma z+\\delta=0$ représente une sphère si $\\frac{\\alpha^2+\\beta^2+\\gamma^2}{4}-\\delta>0$.</li>
                <li>Le plan tangent est unique en chaque point de la sphère.</li>
            </ul>
            <h4>💡 Astuces</h4>
            <ul>
                <li>Pour trouver centre et rayon, compléter les carrés.</li>
                <li>Pour l’intersection avec un plan, calculer d’abord la distance $h$.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Confondre sphère et boule.</li>
                <li>Ne pas vérifier que $R^2$ est positif.</li>
                <li>Oublier que le plan tangent est perpendiculaire au rayon.</li>
            </ul>
        `
    },
    10: {
        titre: 'Synthèse et problèmes types',
        contenu: `
            <h4>🔹 Objectif</h4>
            <p>Mobiliser l’ensemble des notions des chapitres 1 à 9 pour résoudre des problèmes complexes de type bac.</p>
            <h4>📌 Thèmes abordés</h4>
            <ul>
                <li>Vecteurs, colinéarité, coplanarité.</li>
                <li>Produit scalaire, orthogonalité, distances.</li>
                <li>Déterminant, volumes (tétraèdre, parallélépipède).</li>
                <li>Produit vectoriel, aires, normales.</li>
                <li>Représentations paramétriques et équations cartésiennes.</li>
                <li>Sphères, intersections, plans tangents.</li>
            </ul>
            <h4>💡 Méthodes clés</h4>
            <ul>
                <li>Bien identifier le chapitre concerné par chaque question.</li>
                <li>Choisir un repère adapté pour simplifier les calculs.</li>
                <li>Utiliser le produit vectoriel pour trouver une normale à un plan.</li>
                <li>Utiliser la distance point-plan et les volumes pour les hauteurs.</li>
            </ul>
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Oublier les conditions d’existence (vecteurs non colinéaires, etc.).</li>
                <li>Ne pas vérifier la cohérence des résultats.</li>
            </ul>
        `
    }
};

// ================================================================
// Application des résumés aux chapitres dans data.chapitres
// ================================================================
if (typeof data !== 'undefined' && data.chapitres) {
    data.chapitres.forEach(ch => {
        if (resumes[ch.id]) {
            ch.resume = `
                <div class="resume-chapitre">
                    <h3>Résumé du chapitre ${ch.id} : ${ch.titre}</h3>
                    ${resumes[ch.id].contenu}
                </div>
            `;
        } else {
            // Fallback si le résumé n'existe pas
            ch.resume = `
                <h4>Résumé du chapitre ${ch.id}</h4>
                <p>${ch.rappel || 'Résumé non disponible.'}</p>
                ${ch.theoremes ? `<p><strong>Théorèmes :</strong> ${ch.theoremes}</p>` : ''}
            `;
        }
    });
    console.log('✅ Résumés chargés pour tous les chapitres.');
} else {
    console.warn('⚠️ data non défini ou data.chapitres absent – les résumés ne sont pas appliqués.');
}

// Exportation pour une utilisation globale (si nécessaire)
window.resumes = resumes;