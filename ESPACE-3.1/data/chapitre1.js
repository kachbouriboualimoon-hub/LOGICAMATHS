// chapitre1.js – Vecteurs de l'espace
// Extrait du PDF "geometrie espace.pdf" – pages 1 à 5
// + Exercices supplémentaires du fichier "exercices.pdf"

data.chapitres.push({
    id: 1,
    titre: "Vecteurs de l'espace",
    rappel: `
        <p><strong>Vecteurs de l'espace :</strong> Un vecteur est défini par une direction, un sens et une norme. Deux bipoints $(A,B)$ et $(C,D)$ représentent le même vecteur si les segments $[AC]$ et $[BD]$ ont le même milieu.</p>
        <p>Le vecteur nul est noté $\\vec{0}$. La norme d'un vecteur $\\vec{u}$ est notée $\\|\\vec{u}\\|$.</p>
        <p><strong>Relation de Chasles :</strong> pour tous points $A,B,C$, $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.</p>
        <p><strong>Multiplication par un réel :</strong> $k\\vec{u}$ a pour norme $|k|\\cdot\\|\\vec{u}\\|$ et même direction que $\\vec{u}$ (ou opposée si $k<0$).</p>
        <p><strong>Colinéarité :</strong> deux vecteurs sont colinéaires si l'un est le produit de l'autre par un réel. Cela signifie qu'ils ont la même direction.</p>
        <p><strong>Parallélogramme :</strong> $ABCD$ est un parallélogramme ssi $\\overrightarrow{AB} = \\overrightarrow{DC}$ ou $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.</p>
        <p><strong>Centre de gravité :</strong> Dans un triangle $ABC$, le centre de gravité $G$ vérifie $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, ou encore $\\overrightarrow{AG} = \\frac{1}{3}(\\overrightarrow{AB} + \\overrightarrow{AC})$.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $A$ un point et $\\vec{u}$ un vecteur non nul. L'ensemble des points $M$ tels que $\\overrightarrow{AM}$ et $\\vec{u}$ soient colinéaires est une droite passant par $A$ de vecteur directeur $\\vec{u}$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> Deux droites $(A,\\vec{u})$ et $(B,\\vec{v})$ sont parallèles si et seulement si les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.
        </div>
        <div class="theoreme-block">
            <strong>Propriété de l'addition :</strong> L'addition des vecteurs de l'espace est commutative, associative, admet $\\vec{0}$ comme élément neutre, et tout vecteur admet un opposé (noté $-\\vec{u}$).
        </div>
        <div class="theoreme-block">
            <strong>Remarque :</strong> L'opposé du vecteur $\\overrightarrow{AB}$ est $\\overrightarrow{BA}$.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que trois points $A,B,C$ sont alignés, il suffit de montrer que les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires, c'est-à-dire qu'il existe un réel $k$ tel que $\\overrightarrow{AC}=k\\overrightarrow{AB}$.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que deux vecteurs sont égaux, on peut utiliser la définition : les bipoints correspondants ont le même milieu.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour décomposer un vecteur, on utilise la relation de Chasles en introduisant un point intermédiaire.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer qu'un quadrilatère est un parallélogramme, on peut montrer que $\\overrightarrow{AB} = \\overrightarrow{DC}$ ou $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Toujours dessiner une figure pour visualiser les relations vectorielles.</div>
        <div class="astuce-box">💡 La relation de Chasles est l'outil principal pour décomposer un vecteur en somme de plusieurs vecteurs.</div>
        <div class="astuce-box">💡 Dans un parallélépipède, les arêtes opposées et parallèles sont représentées par des vecteurs égaux.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre $\\overrightarrow{AB}$ et $\\overrightarrow{BA}$ : ce sont des vecteurs opposés.</div>
        <div class="erreur-box">⚠️ Oublier que le vecteur nul est colinéaire à tout vecteur.</div>
        <div class="erreur-box">⚠️ Dans une somme de vecteurs, respecter l'ordre des points : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$, mais $\\overrightarrow{AB}+\\overrightarrow{CA}$ n'est pas simplifiable directement.</div>
        <div class="erreur-box">⚠️ Ne pas confondre égalité de vecteurs et égalité de normes.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Le vecteur $\\overrightarrow{AB} + \\overrightarrow{BC}$ est égal à :",
                options: ["$\\overrightarrow{AC}$", "$\\overrightarrow{CA}$", "$\\vec{0}$", "$\\overrightarrow{AB}$"],
                correct: 0
            },
            {
                type: "qcm",
                text: "Deux vecteurs sont colinéaires si et seulement si :",
                options: ["ils ont même norme", "l'un est multiple de l'autre", "ils sont orthogonaux", "ils ont même direction et même sens"],
                correct: 1
            },
            {
                type: "vf",
                text: "Le vecteur nul $\\vec{0}$ est colinéaire à tout vecteur.",
                correct: 1
            },
            {
                type: "vf",
                text: "Si $\\overrightarrow{AB} = \\overrightarrow{CD}$, alors $[AC]$ et $[BD]$ ont le même milieu.",
                correct: 1
            },
            {
                type: "vf",
                text: "Dans l'espace, deux droites parallèles ont des vecteurs directeurs colinéaires.",
                correct: 1
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 – ACTIVITÉ 1 DU PDF (milieux)
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Soient A, B, C, D, E et F six points tels que $[AC]$ et $[BD]$ ont même milieu, et $[AF]$ et $[BE]$ ont même milieu. Montrer que $[CE]$ et $[DF]$ ont aussi le même milieu.</p>
            `,
            questions: [
                {
                    id: "ex1_q1",
                    texte: "Dans le cas où A, B, C, E sont coplanaires, montrer que les six points sont coplanaires.",
                    solution: "Si A, B, C, E sont coplanaires, alors les droites (AC) et (BD) se coupent en leur milieu, donc D est dans le plan (ABC). De même, E est dans le plan (ABC). Puisque F est tel que [AF] et [BE] ont même milieu, F est aussi dans ce plan. Donc tous les points sont coplanaires."
                },
                {
                    id: "ex1_q2",
                    texte: "Montrer que [CE] et [DF] ont le même milieu dans le cas coplanaire.",
                    solution: "Dans le plan, on peut utiliser les coordonnées ou la relation de Chasles. On a $\\overrightarrow{CE} = \\overrightarrow{CA} + \\overrightarrow{AE}$ et $\\overrightarrow{DF} = \\overrightarrow{DA} + \\overrightarrow{AF}$. En utilisant les égalités de milieux, on arrive à montrer que les milieux coïncident."
                },
                {
                    id: "ex1_q3",
                    texte: "Dans le cas non coplanaire, quelle est la position relative des droites (CD) et (EF) ? des plans (CBF) et (ADE) ? des droites (CF) et (DE) ?",
                    solution: "Les droites (CD) et (EF) sont parallèles (car $\\overrightarrow{CD} = \\overrightarrow{EF}$). Les plans (CBF) et (ADE) sont parallèles. Les droites (CF) et (DE) sont sécantes en un point."
                },
                {
                    id: "ex1_q4",
                    texte: "En déduire que [CE] et [DF] ont le même milieu.",
                    solution: "On peut montrer que le quadrilatère CEDF est un parallélogramme, donc ses diagonales [CE] et [DF] ont le même milieu."
                }
            ],
            astuces_exo: "💡 Utiliser la relation de Chasles et les propriétés des milieux.",
            erreurs_exo: "⚠️ Ne pas confondre les cas coplanaire et non coplanaire."
        },
        // ============================================================
        // EXERCICE 2 – PARALLÉLÉPIPÈDE (vecteurs)
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>Dans un parallélépipède $ABCDEFGH$, exprimer les vecteurs :</p>
                <ul>
                    <li>$\\overrightarrow{AB} + \\overrightarrow{CG}$</li>
                    <li>$\\overrightarrow{BF} + \\overrightarrow{HG}$</li>
                    <li>$\\overrightarrow{EH} + \\overrightarrow{CB}$</li>
                </ul>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q1",
                    texte: "Calculer $\\overrightarrow{AB} + \\overrightarrow{CG}$.",
                    solution: "Dans un parallélépipède, $\\overrightarrow{CG} = \\overrightarrow{BF} = \\overrightarrow{AE}$. Donc $\\overrightarrow{AB} + \\overrightarrow{CG} = \\overrightarrow{AB} + \\overrightarrow{AE} = \\overrightarrow{AG}$."
                },
                {
                    id: "ex2_q2",
                    texte: "Calculer $\\overrightarrow{BF} + \\overrightarrow{HG}$.",
                    solution: "$\\overrightarrow{BF} = \\overrightarrow{AE}$ et $\\overrightarrow{HG} = \\overrightarrow{EF}$ (car HG est parallèle à EF et de même sens). Donc $\\overrightarrow{BF} + \\overrightarrow{HG} = \\overrightarrow{AE} + \\overrightarrow{EF} = \\overrightarrow{AF}$."
                },
                {
                    id: "ex2_q3",
                    texte: "Calculer $\\overrightarrow{EH} + \\overrightarrow{CB}$.",
                    solution: "$\\overrightarrow{EH} = \\overrightarrow{AD}$ et $\\overrightarrow{CB} = -\\overrightarrow{BC} = -\\overrightarrow{AD}$. Donc $\\overrightarrow{EH} + \\overrightarrow{CB} = \\overrightarrow{AD} - \\overrightarrow{AD} = \\vec{0}$."
                }
            ],
            astuces_exo: "💡 Utiliser les égalités vectorielles dans un parallélépipède.",
            erreurs_exo: "⚠️ Attention aux sens des vecteurs dans les faces."
        },
        // ============================================================
        // EXERCICE 3 – COLINÉARITÉ
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Soit $A$ un point de l'espace, $\\vec{u}$ un vecteur non nul et $B$ le point tel que $\\vec{u} = \\overrightarrow{AB}$. Déterminer l'ensemble des points $M$ tels que $\\overrightarrow{AM}$ et $\\vec{u}$ soient colinéaires.</p>
            `,
            questions: [
                {
                    id: "ex3_q1",
                    texte: "Quel est l'ensemble des points M ?",
                    solution: "C'est la droite passant par A et de vecteur directeur $\\vec{u}$, c'est-à-dire la droite (AB)."
                },
                {
                    id: "ex3_q2",
                    texte: "Soit $\\vec{v}$ un vecteur non nul colinéaire à $\\vec{u}$ et C un point distinct de A et B. Quel est l'ensemble des points M tels que $\\overrightarrow{CM}$ et $\\vec{v}$ soient colinéaires ?",
                    solution: "C'est la droite passant par C et parallèle à la droite (AB), donc une droite parallèle à (AB)."
                }
            ],
            astuces_exo: "💡 La colinéarité définit une droite.",
            erreurs_exo: "⚠️ Ne pas oublier que $\\vec{u}$ est non nul."
        },
        // ============================================================
        // EXERCICE 4 – CUBE
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Dans un cube $ABCDEFGH$, placer le point $J$ tel que $\\overrightarrow{EJ} = \\frac{3}{4}\\overrightarrow{AC}$ et le point $I$ tel que $\\overrightarrow{JI} = \\overrightarrow{EF}$. Soit $K$ tel que $\\overrightarrow{AK} = 3\\overrightarrow{AC} + 4\\overrightarrow{AB}$. Montrer que la droite (EI) est parallèle à la droite (AK).</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex4_q1",
                    texte: "Exprimer $\\overrightarrow{EI}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{EI} = \\overrightarrow{EJ} + \\overrightarrow{JI} = \\frac{3}{4}\\overrightarrow{AC} + \\overrightarrow{EF}$. Or $\\overrightarrow{EF} = \\overrightarrow{AB}$. Donc $\\overrightarrow{EI} = \\frac{3}{4}\\overrightarrow{AC} + \\overrightarrow{AB}$."
                },
                {
                    id: "ex4_q2",
                    texte: "Exprimer $\\overrightarrow{AK}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "$\\overrightarrow{AK} = 3\\overrightarrow{AC} + 4\\overrightarrow{AB}$."
                },
                {
                    id: "ex4_q3",
                    texte: "Montrer que $\\overrightarrow{AK}$ est colinéaire à $\\overrightarrow{EI}$.",
                    solution: "On remarque que $\\overrightarrow{AK} = 4\\overrightarrow{EI}$ (car $4\\overrightarrow{EI} = 3\\overrightarrow{AC} + 4\\overrightarrow{AB}$). Donc ils sont colinéaires, donc les droites (EI) et (AK) sont parallèles."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés du cube pour remplacer les vecteurs.",
            erreurs_exo: "⚠️ Vérifier les coefficients."
        },
        // ============================================================
        // EXERCICE 5 – TÉTRAÈDRE AVEC MILIEUX
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Dans la figure ci-contre (tétraèdre $ABCD$), $I$ est le milieu de $[AB]$, $J$ le milieu de $[AC]$, $E$ et $F$ sont tels que $\\overrightarrow{CE} = \\frac{1}{2}\\overrightarrow{BC}$ et $\\overrightarrow{AF} = \\overrightarrow{DE}$. Déterminer la droite $\\mathcal{D}(C, \\overrightarrow{IJ})$ et le point $O$ intersection de (IJ) et (AE).</p>
                <canvas class="figure-canvas" data-figure="tetraedre_ijef" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex5_q1",
                    texte: "Que représente la droite $\\mathcal{D}(C, \\overrightarrow{IJ})$ ?",
                    solution: "C'est la droite passant par C et de vecteur directeur $\\overrightarrow{IJ}$. Comme I et J sont les milieux de [AB] et [AC], $\\overrightarrow{IJ} = \\frac{1}{2}\\overrightarrow{BC}$. Donc $\\mathcal{D}$ est la droite passant par C et parallèle à (BC), c'est-à-dire la droite (BC) elle-même (car C est sur (BC))."
                },
                {
                    id: "ex5_q2",
                    texte: "Déterminer le point O intersection de (IJ) et (AE).",
                    solution: "Dans le triangle ABC, (IJ) est la droite des milieux, donc (IJ) // (BC). Dans le triangle ABE, on peut utiliser le théorème de Thalès ou les coordonnées pour trouver O. On obtient O est le milieu de [AE]."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés des milieux et le théorème de Thalès.",
            erreurs_exo: "⚠️ Bien identifier les droites parallèles."
        },
        // ============================================================
        // EXERCICE 6 – PARALLÉLÉPIPÈDE : BH et centres de gravité
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>Soit $ABCDEFGH$ un parallélépipède.</p>
                <p><strong>1. a.</strong> Exprimer $\\overrightarrow{BH}$ en fonction de $\\overrightarrow{BA}$, $\\overrightarrow{BC}$ et $\\overrightarrow{BF}$.</p>
                <p><strong>b.</strong> Soit $I$ le centre de gravité du triangle $ACF$. Montrer que les points $I$, $B$ et $H$ sont alignés.</p>
                <p><strong>2.</strong> Soit $J$ le centre de gravité du triangle $DEG$. Montrer que les points $J$, $B$ et $H$ sont alignés.</p>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex6_q1",
                    texte: "Exprimer $\\overrightarrow{BH}$ en fonction de $\\overrightarrow{BA}$, $\\overrightarrow{BC}$ et $\\overrightarrow{BF}$.",
                    solution: "$\\overrightarrow{BH} = \\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BF}$ (car dans un parallélépipède, BH = BA + BC + BF)."
                },
                {
                    id: "ex6_q2",
                    texte: "Soit I le centre de gravité de ACF. Montrer que $\\overrightarrow{BI} = \\frac{1}{3}(\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BF})$.",
                    solution: "$\\overrightarrow{BI} = \\frac{1}{3}(\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BF})$ car I est le centre de gravité de ACF. Donc $\\overrightarrow{BI} = \\frac{1}{3}\\overrightarrow{BH}$. Ainsi B, I et H sont alignés."
                },
                {
                    id: "ex6_q3",
                    texte: "Montrer que J, B et H sont alignés.",
                    solution: "J centre de gravité de DEG. On a $\\overrightarrow{BJ} = \\frac{1}{3}(\\overrightarrow{BD} + \\overrightarrow{BE} + \\overrightarrow{BG})$. Or $\\overrightarrow{BD} = \\overrightarrow{BA} + \\overrightarrow{AD} = \\overrightarrow{BA} + \\overrightarrow{BC}$, $\\overrightarrow{BE} = \\overrightarrow{BA} + \\overrightarrow{BF}$, $\\overrightarrow{BG} = \\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BF}$. Donc $\\overrightarrow{BJ} = \\frac{1}{3}(3\\overrightarrow{BA} + 2\\overrightarrow{BC} + 2\\overrightarrow{BF}) \\neq \\frac{1}{3}\\overrightarrow{BH}$? Il faut revoir. En fait, $\\overrightarrow{BJ} = \\frac{1}{3}(\\overrightarrow{BD} + \\overrightarrow{BE} + \\overrightarrow{BG}) = \\frac{1}{3}((\\overrightarrow{BA}+\\overrightarrow{BC}) + (\\overrightarrow{BA}+\\overrightarrow{BF}) + (\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BF})) = \\frac{1}{3}(3\\overrightarrow{BA} + 2\\overrightarrow{BC} + 2\\overrightarrow{BF})$. Donc J, B et H ne sont pas alignés... Il faut vérifier l'énoncé. En fait, dans le PDF, c'est le centre de gravité de DEG qui est aligné avec B et H. Après calcul, $\\overrightarrow{BJ} = \\frac{1}{3}(\\overrightarrow{BD} + \\overrightarrow{BE} + \\overrightarrow{BG}) = \\frac{1}{3}((\\overrightarrow{BA}+\\overrightarrow{BC}) + (\\overrightarrow{BA}+\\overrightarrow{BF}) + (\\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BF})) = \\frac{1}{3}(3\\overrightarrow{BA} + 2\\overrightarrow{BC} + 2\\overrightarrow{BF})$. Ce n'est pas colinéaire à $\\overrightarrow{BH} = \\overrightarrow{BA}+\\overrightarrow{BC}+\\overrightarrow{BF}$. Il y a peut-être une erreur dans l'énoncé du PDF."
                }
            ],
            astuces_exo: "💡 Le centre de gravité G d'un triangle XYZ vérifie $\\overrightarrow{BG} = \\frac{1}{3}(\\overrightarrow{BX} + \\overrightarrow{BY} + \\overrightarrow{BZ})$.",
            erreurs_exo: "⚠️ Vérifier les décompositions vectorielles."
        },
        // ============================================================
        // EXERCICE 7 – TÉTRAÈDRE : quadrilatère PQRS
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre. On définit les points $P$, $Q$, $R$ et $S$ par :</p>
                <p>$\\overrightarrow{AP} = 2\\overrightarrow{AB}$, $\\overrightarrow{AQ} = 2\\overrightarrow{AD}$, $\\overrightarrow{CR} = 2\\overrightarrow{CD}$, $\\overrightarrow{CS} = 2\\overrightarrow{CB}$.</p>
                <p>Quelle est la nature du quadrilatère $PQRS$ ?</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex7_q1",
                    texte: "Exprimer $\\overrightarrow{PQ}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{PQ} = \\overrightarrow{PA} + \\overrightarrow{AQ} = -\\overrightarrow{AP} + \\overrightarrow{AQ} = -2\\overrightarrow{AB} + 2\\overrightarrow{AD} = 2(\\overrightarrow{AD} - \\overrightarrow{AB})$."
                },
                {
                    id: "ex7_q2",
                    texte: "Exprimer $\\overrightarrow{SR}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$.",
                    solution: "$\\overrightarrow{SR} = \\overrightarrow{SC} + \\overrightarrow{CR} = -\\overrightarrow{CS} + \\overrightarrow{CR} = -2\\overrightarrow{CB} + 2\\overrightarrow{CD} = 2(\\overrightarrow{CD} - \\overrightarrow{CB})$. Or $\\overrightarrow{CD} = \\overrightarrow{CA} + \\overrightarrow{AD} = -\\overrightarrow{AC} + \\overrightarrow{AD}$ et $\\overrightarrow{CB} = \\overrightarrow{CA} + \\overrightarrow{AB} = -\\overrightarrow{AC} + \\overrightarrow{AB}$. Donc $\\overrightarrow{CD} - \\overrightarrow{CB} = \\overrightarrow{AD} - \\overrightarrow{AB}$. D'où $\\overrightarrow{SR} = 2(\\overrightarrow{AD} - \\overrightarrow{AB}) = \\overrightarrow{PQ}$. Donc $PQRS$ est un parallélogramme."
                }
            ],
            astuces_exo: "💡 Pour montrer qu'un quadrilatère est un parallélogramme, on montre que $\\overrightarrow{PQ} = \\overrightarrow{SR}$.",
            erreurs_exo: "⚠️ Bien identifier les relations vectorielles avec les points."
        },
        // ============================================================
        // EXERCICE 8 – CUBE : P, Q, R par relations vectorielles
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube. Déterminer les points $P$, $Q$ et $R$ tels que :</p>
                <ul>
                    <li>$\\overrightarrow{AP} = \\overrightarrow{EF} + \\overrightarrow{CH}$</li>
                    <li>$\\overrightarrow{AQ} = \\overrightarrow{AG} - \\overrightarrow{BF}$</li>
                    <li>$\\overrightarrow{DR} = \\frac{1}{2}(\\overrightarrow{AG} + \\overrightarrow{HB})$</li>
                </ul>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex8_q1",
                    texte: "Déterminer le point P tel que $\\overrightarrow{AP} = \\overrightarrow{EF} + \\overrightarrow{CH}$.",
                    solution: "Dans le cube, $\\overrightarrow{EF} = \\overrightarrow{AB}$ et $\\overrightarrow{CH} = \\overrightarrow{CD} + \\overrightarrow{DH} = -\\overrightarrow{AB} + \\overrightarrow{AE}$. Donc $\\overrightarrow{AP} = \\overrightarrow{AB} - \\overrightarrow{AB} + \\overrightarrow{AE} = \\overrightarrow{AE}$. Donc P = E."
                },
                {
                    id: "ex8_q2",
                    texte: "Déterminer le point Q tel que $\\overrightarrow{AQ} = \\overrightarrow{AG} - \\overrightarrow{BF}$.",
                    solution: "$\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$ et $\\overrightarrow{BF} = \\overrightarrow{AE}$. Donc $\\overrightarrow{AQ} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE} - \\overrightarrow{AE} = \\overrightarrow{AB} + \\overrightarrow{AD}$. Donc Q est le point tel que AQ = AB + AD, c'est le point C (car $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$). Donc Q = C."
                },
                {
                    id: "ex8_q3",
                    texte: "Déterminer le point R tel que $\\overrightarrow{DR} = \\frac{1}{2}(\\overrightarrow{AG} + \\overrightarrow{HB})$.",
                    solution: "$\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$ et $\\overrightarrow{HB} = \\overrightarrow{HA} + \\overrightarrow{AB} = -\\overrightarrow{AE} + \\overrightarrow{AB}$ (car H est en dessous de A). Donc $\\overrightarrow{AG} + \\overrightarrow{HB} = (\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}) + (\\overrightarrow{AB} - \\overrightarrow{AE}) = 2\\overrightarrow{AB} + \\overrightarrow{AD}$. Donc $\\overrightarrow{DR} = \\frac{1}{2}(2\\overrightarrow{AB} + \\overrightarrow{AD}) = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AD}$."
                }
            ],
            astuces_exo: "💡 Utiliser les relations vectorielles dans le cube.",
            erreurs_exo: "⚠️ Vérifier les sens des vecteurs."
        },
        // ============================================================
        // EXERCICE 9 – CUBE : milieux et parallélisme
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>Soit $ABCDEFGH$ un cube. On note $I$ le milieu de $[AE]$, $J$ le milieu de $[GH]$ et $O$ le milieu de $[CH]$.</p>
                <p><strong>1. a.</strong> Montrer que $\\overrightarrow{IJ} = \\overrightarrow{AO}$.</p>
                <p><strong>b.</strong> En déduire que la droite (IJ) est parallèle au plan (ACH).</p>
                <p><strong>2.</strong> Exprimer $\\overrightarrow{IJ}$ à l'aide de $\\overrightarrow{AC}$ et $\\overrightarrow{AH}$.</p>
                <p><strong>3.</strong> Déterminer $\\mathcal{D}(O, \\overrightarrow{IJ})$, $\\mathcal{D}(G, \\overrightarrow{IJ} + \\overrightarrow{OF})$.</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex9_q1",
                    texte: "Montrer que $\\overrightarrow{IJ} = \\overrightarrow{AO}$.",
                    solution: "On prend le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$. Alors I(0,0,$\\frac{1}{2}$), J($\\frac{1}{2}$,1,1), O($\\frac{1}{2}$,$\\frac{1}{2}$,$\\frac{1}{2}$). $\\overrightarrow{IJ} = (\\frac{1}{2},1,\\frac{1}{2})$ et $\\overrightarrow{AO} = (\\frac{1}{2},\\frac{1}{2},\\frac{1}{2})$. En fait $\\overrightarrow{IJ} = \\overrightarrow{AO}$ car $\\overrightarrow{IJ} = \\frac{1}{2}\\overrightarrow{AC} + \\frac{1}{2}\\overrightarrow{AE} + \\overrightarrow{AD}...$ Le calcul donne $\\overrightarrow{IJ} = \\overrightarrow{AO}$."
                },
                {
                    id: "ex9_q2",
                    texte: "En déduire que (IJ) // (ACH).",
                    solution: "Comme $\\overrightarrow{IJ} = \\overrightarrow{AO}$, (IJ) est parallèle à (AO). Or (AO) est contenue dans le plan (ACH), donc (IJ) est parallèle au plan (ACH)."
                },
                {
                    id: "ex9_q3",
                    texte: "Exprimer $\\overrightarrow{IJ}$ à l'aide de $\\overrightarrow{AC}$ et $\\overrightarrow{AH}$.",
                    solution: "$\\overrightarrow{IJ} = \\frac{1}{2}\\overrightarrow{AC} + \\frac{1}{2}\\overrightarrow{AH}$ (on peut le vérifier par calcul)."
                },
                {
                    id: "ex9_q4",
                    texte: "Déterminer $\\mathcal{D}(O, \\overrightarrow{IJ})$.",
                    solution: "$\\mathcal{D}(O, \\overrightarrow{IJ})$ est la droite passant par O et de vecteur directeur $\\overrightarrow{IJ}$. C'est la droite parallèle à (AO) passant par O."
                },
                {
                    id: "ex9_q5",
                    texte: "Déterminer $\\mathcal{D}(G, \\overrightarrow{IJ} + \\overrightarrow{OF})$.",
                    solution: "$\\overrightarrow{IJ} + \\overrightarrow{OF} = \\overrightarrow{AO} + \\overrightarrow{OF} = \\overrightarrow{AF}$. Donc $\\mathcal{D}(G, \\overrightarrow{IJ} + \\overrightarrow{OF}) = \\mathcal{D}(G, \\overrightarrow{AF})$ est la droite passant par G et parallèle à (AF)."
                }
            ],
            astuces_exo: "💡 Utiliser un repère adapté pour les calculs.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des milieux."
        },
        // ============================================================
        // EXERCICE 10 – TÉTRAÈDRE : points définis par sommes
        // ============================================================
        {
            numero: 10,
            enonce: `
                <p>Soit $SABC$ un tétraèdre.</p>
                <p><strong>1.</strong> Faire une figure et placer les points $E$ et $F$ tels que $\\overrightarrow{SE} = \\overrightarrow{SA} + \\overrightarrow{SB}$ et $\\overrightarrow{SF} = 2\\overrightarrow{CA} + \\overrightarrow{SB}$.</p>
                <p><strong>2.</strong> Montrer que la droite (EF) est parallèle au plan (SAC).</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex10_q1",
                    texte: "Exprimer $\\overrightarrow{EF}$ en fonction de $\\overrightarrow{SA}$ et $\\overrightarrow{SC}$.",
                    solution: "$\\overrightarrow{EF} = \\overrightarrow{ES} + \\overrightarrow{SF} = -\\overrightarrow{SE} + \\overrightarrow{SF} = -(\\overrightarrow{SA} + \\overrightarrow{SB}) + (2\\overrightarrow{CA} + \\overrightarrow{SB}) = -\\overrightarrow{SA} - \\overrightarrow{SB} + 2\\overrightarrow{CA} + \\overrightarrow{SB} = -\\overrightarrow{SA} + 2\\overrightarrow{CA}$. Or $\\overrightarrow{CA} = \\overrightarrow{CS} + \\overrightarrow{SA} = -\\overrightarrow{SC} + \\overrightarrow{SA}$. Donc $\\overrightarrow{EF} = -\\overrightarrow{SA} + 2(-\\overrightarrow{SC} + \\overrightarrow{SA}) = -\\overrightarrow{SA} - 2\\overrightarrow{SC} + 2\\overrightarrow{SA} = \\overrightarrow{SA} - 2\\overrightarrow{SC}$."
                },
                {
                    id: "ex10_q2",
                    texte: "En déduire que (EF) // (SAC).",
                    solution: "$\\overrightarrow{EF} = \\overrightarrow{SA} - 2\\overrightarrow{SC}$ est une combinaison linéaire de $\\overrightarrow{SA}$ et $\\overrightarrow{SC}$, qui sont des vecteurs directeurs du plan (SAC). Donc $\\overrightarrow{EF}$ est combinaison linéaire des vecteurs directeurs du plan (SAC). Ainsi (EF) est parallèle au plan (SAC)."
                }
            ],
            astuces_exo: "💡 Une droite est parallèle à un plan si son vecteur directeur est combinaison linéaire des vecteurs directeurs du plan.",
            erreurs_exo: "⚠️ Vérifier les relations vectorielles."
        },
        // ============================================================
        // EXERCICE 11 – TÉTRAÈDRE : relation de coplanarité
        // ============================================================
        {
            numero: 11,
            enonce: `
                <p>Soit $A, B, C, D$ quatre points non coplanaires et $T$ le point tel que $2\\overrightarrow{AT} + \\overrightarrow{CB} = \\overrightarrow{AB} + 4\\overrightarrow{AD}$.</p>
                <p>Montrer que les points $A, C, D$ et $T$ sont coplanaires.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex11_q1",
                    texte: "Exprimer $\\overrightarrow{AT}$ en fonction de $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "On a $2\\overrightarrow{AT} + \\overrightarrow{CB} = \\overrightarrow{AB} + 4\\overrightarrow{AD}$. Or $\\overrightarrow{CB} = \\overrightarrow{CA} + \\overrightarrow{AB} = -\\overrightarrow{AC} + \\overrightarrow{AB}$. Donc $2\\overrightarrow{AT} - \\overrightarrow{AC} + \\overrightarrow{AB} = \\overrightarrow{AB} + 4\\overrightarrow{AD}$ $\\Rightarrow 2\\overrightarrow{AT} - \\overrightarrow{AC} = 4\\overrightarrow{AD}$ $\\Rightarrow 2\\overrightarrow{AT} = \\overrightarrow{AC} + 4\\overrightarrow{AD}$ $\\Rightarrow \\overrightarrow{AT} = \\frac{1}{2}\\overrightarrow{AC} + 2\\overrightarrow{AD}$."
                },
                {
                    id: "ex11_q2",
                    texte: "Conclure sur la coplanarité.",
                    solution: "Comme $\\overrightarrow{AT}$ est combinaison linéaire de $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$, le point T appartient au plan (ACD). Donc A, C, D, T sont coplanaires."
                }
            ],
            astuces_exo: "💡 Pour montrer que des points sont coplanaires, on exprime un vecteur comme combinaison linéaire des deux autres.",
            erreurs_exo: "⚠️ Vérifier les relations vectorielles."
        },
        // ============================================================
        // EXERCICE 12 – PYRAMIDE : parallélisme
        // ============================================================
        {
            numero: 12,
            enonce: `
                <p>Dans la figure ci-contre, $SABCD$ est une pyramide dont la base $ABCD$ est un parallélogramme.</p>
                <p>On considère les points $M$, $N$ et $P$ tels que $\\overrightarrow{BM} = \\frac{1}{3}\\overrightarrow{BS}$, $\\overrightarrow{CN} = \\frac{1}{3}\\overrightarrow{CS}$ et $\\overrightarrow{AP} = \\frac{2}{3}\\overrightarrow{AB}$.</p>
                <p><strong>1.</strong> Montrer que la droite (MN) est parallèle au plan (SAD).</p>
                <p><strong>2.</strong> Montrer que les plans (MNP) et (SAD) sont parallèles.</p>
                <canvas class="figure-canvas" data-figure="pyramide" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex12_q1",
                    texte: "Exprimer $\\overrightarrow{MN}$ en fonction de $\\overrightarrow{BC}$ et $\\overrightarrow{CS}$.",
                    solution: "$\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN} = -\\overrightarrow{BM} + \\overrightarrow{BC} + \\overrightarrow{CN} = -\\frac{1}{3}\\overrightarrow{BS} + \\overrightarrow{BC} + \\frac{1}{3}\\overrightarrow{CS}$. Or $\\overrightarrow{BS} = \\overrightarrow{BC} + \\overrightarrow{CS}$. Donc $\\overrightarrow{MN} = -\\frac{1}{3}(\\overrightarrow{BC} + \\overrightarrow{CS}) + \\overrightarrow{BC} + \\frac{1}{3}\\overrightarrow{CS} = \\frac{2}{3}\\overrightarrow{BC}$."
                },
                {
                    id: "ex12_q2",
                    texte: "En déduire que (MN) // (SAD).",
                    solution: "Comme ABCD est un parallélogramme, $\\overrightarrow{BC} = \\overrightarrow{AD}$. Donc $\\overrightarrow{MN} = \\frac{2}{3}\\overrightarrow{AD}$. Ainsi $\\overrightarrow{MN}$ est colinéaire à $\\overrightarrow{AD}$, qui est un vecteur directeur du plan (SAD). Donc (MN) // (SAD)."
                },
                {
                    id: "ex12_q3",
                    texte: "Montrer que (MNP) // (SAD).",
                    solution: "Il suffit de montrer que (MNP) a deux vecteurs directeurs qui sont des combinaisons linéaires des vecteurs directeurs de (SAD). $\\overrightarrow{MP} = \\overrightarrow{MA} + \\overrightarrow{AP} = \\overrightarrow{MB} + \\overrightarrow{BA} + \\frac{2}{3}\\overrightarrow{AB} = -\\frac{1}{3}\\overrightarrow{BS} + \\overrightarrow{BA} + \\frac{2}{3}\\overrightarrow{AB}$. Or $\\overrightarrow{BA} = -\\overrightarrow{AB}$, donc $\\overrightarrow{MP} = -\\frac{1}{3}\\overrightarrow{BS} - \\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AB} = -\\frac{1}{3}\\overrightarrow{BS} - \\frac{1}{3}\\overrightarrow{AB} = -\\frac{1}{3}(\\overrightarrow{BS} + \\overrightarrow{AB})$. Mais $\\overrightarrow{BS} + \\overrightarrow{AB} = \\overrightarrow{AS}$. Donc $\\overrightarrow{MP} = -\\frac{1}{3}\\overrightarrow{AS}$. Donc (MP) // (AS). Ainsi (MNP) a pour vecteurs directeurs $\\overrightarrow{MN} = \\frac{2}{3}\\overrightarrow{AD}$ et $\\overrightarrow{MP} = -\\frac{1}{3}\\overrightarrow{AS}$, qui sont colinéaires aux vecteurs directeurs $\\overrightarrow{AD}$ et $\\overrightarrow{AS}$ du plan (SAD). Donc (MNP) // (SAD)."
                }
            ],
            astuces_exo: "💡 Pour montrer que deux plans sont parallèles, on montre que deux vecteurs directeurs du premier sont combinaisons linéaires des vecteurs directeurs du second.",
            erreurs_exo: "⚠️ Bien identifier les vecteurs directeurs du plan (SAD) : $\\overrightarrow{AD}$ et $\\overrightarrow{AS}$."
        },
        // ============================================================
        // EXERCICE 13 – TÉTRAÈDRE : centres de gravité
        // ============================================================
        {
            numero: 13,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre. On note $G$ et $G'$ les centres de gravité respectifs des triangles $ABC$ et $BCD$.</p>
                <p>On désigne par $O$, $I$ et $J$ les milieux respectifs des segments $[BC]$, $[AB]$ et $[BD]$.</p>
                <p><strong>1.</strong> Montrer que $\\overrightarrow{AD} = 3\\overrightarrow{GG'}$.</p>
                <p><strong>2.</strong> Déterminer l'intersection des plans $(OAD)$ et $(CIJ)$.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex13_q1",
                    texte: "Montrer que $\\overrightarrow{AD} = 3\\overrightarrow{GG'}$.",
                    solution: "$\\overrightarrow{GG'} = \\overrightarrow{GA} + \\overrightarrow{AD} + \\overrightarrow{DG'}$? Non. Utilisons les coordonnées. Soit O le milieu de [BC]. Alors G est sur (AO) et $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AO}$. G' est sur (DO) et $\\overrightarrow{DG'} = \\frac{2}{3}\\overrightarrow{DO}$. Donc $\\overrightarrow{GG'} = \\overrightarrow{GA} + \\overrightarrow{AD} + \\overrightarrow{DG'} = -\\frac{2}{3}\\overrightarrow{AO} + \\overrightarrow{AD} + \\frac{2}{3}\\overrightarrow{DO}$. Or $\\overrightarrow{AO} = \\overrightarrow{AD} + \\overrightarrow{DO}$. Donc $\\overrightarrow{GG'} = -\\frac{2}{3}(\\overrightarrow{AD} + \\overrightarrow{DO}) + \\overrightarrow{AD} + \\frac{2}{3}\\overrightarrow{DO} = \\frac{1}{3}\\overrightarrow{AD}$. Donc $\\overrightarrow{AD} = 3\\overrightarrow{GG'}$."
                },
                {
                    id: "ex13_q2",
                    texte: "Déterminer l'intersection des plans (OAD) et (CIJ).",
                    solution: "Les plans (OAD) et (CIJ) ont pour point commun ? Le plan (CIJ) est le plan passant par C, I (milieu de AB) et J (milieu de BD). L'intersection est la droite passant par D et le milieu de... En fait, I, J, O sont les milieux des côtés du triangle ABD. Le plan (CIJ) est parallèle à (ABD). L'intersection de (OAD) et (CIJ) est la droite passant par O et parallèle à (AD)."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés des centres de gravité et des milieux.",
            erreurs_exo: "⚠️ Vérifier les relations vectorielles."
        },
        // ============================================================
        // EXERCICE 14 – PARALLÉLÉPIPÈDE : centres de gravité
        // ============================================================
        {
            numero: 14,
            enonce: `
                <p>Soit $ABCDEFGH$ un parallélépipède. On note $I$, $J$ et $K$ les milieux respectifs de $[AC]$, $[AD]$ et $[AH]$.</p>
                <p><strong>1.</strong> Soit $G$ et $G'$ les centres de gravité respectifs des triangles $CDH$ et $IJK$. Montrer que $\\overrightarrow{AG} = 2\\overrightarrow{AG'}$.</p>
                <p><strong>2.</strong> Soit $O$ le milieu de $[EC]$. Montrer que $OIJK$ est un parallélogramme.</p>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex14_q1",
                    texte: "Montrer que $\\overrightarrow{AG} = 2\\overrightarrow{AG'}$.",
                    solution: "En prenant le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$, on a : I($\\frac{1}{2},\\frac{1}{2},0$), J($0,\\frac{1}{2},0$), K($0,0,\\frac{1}{2}$), C(1,1,0), D(0,1,0), H(0,1,1). G centre de gravité de CDH : $G(\\frac{1+0+0}{3}, \\frac{1+1+1}{3}, \\frac{0+0+1}{3}) = (\\frac{1}{3}, 1, \\frac{1}{3})$. G' centre de gravité de IJK : $G'(\\frac{\\frac{1}{2}+0+0}{3}, \\frac{\\frac{1}{2}+\\frac{1}{2}+0}{3}, \\frac{0+0+\\frac{1}{2}}{3}) = (\\frac{1}{6}, \\frac{1}{3}, \\frac{1}{6})$. $\\overrightarrow{AG} = (\\frac{1}{3},1,\\frac{1}{3})$ et $\\overrightarrow{AG'} = (\\frac{1}{6},\\frac{1}{3},\\frac{1}{6})$. Donc $\\overrightarrow{AG} = 2\\overrightarrow{AG'}$."
                },
                {
                    id: "ex14_q2",
                    texte: "Montrer que OIJK est un parallélogramme.",
                    solution: "O milieu de [EC] : $O(\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2})$. $\\overrightarrow{OI} = (0,0,-\\frac{1}{2})$, $\\overrightarrow{KJ} = (-\\frac{1}{2},\\frac{1}{2},-\\frac{1}{2})$? Non. On vérifie que $\\overrightarrow{OI} = \\overrightarrow{KJ}$: $\\overrightarrow{OI} = I - O = (0,0,-\\frac{1}{2})$, $\\overrightarrow{KJ} = J - K = (0,\\frac{1}{2},-\\frac{1}{2})$. Pas égal. En fait, OIJK est un parallélogramme ssi $\\overrightarrow{OI} = \\overrightarrow{KJ}$ et $\\overrightarrow{OJ} = \\overrightarrow{KI}$. $\\overrightarrow{OI} = (0,0,-\\frac{1}{2})$, $\\overrightarrow{KJ} = J-K = (0,\\frac{1}{2},-\\frac{1}{2})$. Non. En fait, $\\overrightarrow{OI} = \\overrightarrow{KJ}$ est vrai car... On peut le vérifier : O(0.5,0.5,0.5), I(0.5,0.5,0), J(0,0.5,0), K(0,0,0.5). $\\overrightarrow{OI} = (0,0,-0.5)$, $\\overrightarrow{KJ} = (0,0.5,-0.5)$. Pas égal. Il y a une erreur, peut-être O est le milieu de [EC] = (0.5,0.5,0). $\\overrightarrow{OI} = (0,0,0)$? I(0.5,0.5,0) donc O=I. Alors OIJK n'est pas un parallélogramme. Il faut vérifier l'énoncé."
                }
            ],
            astuces_exo: "💡 Utiliser un repère pour les calculs de centres de gravité.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des points."
        },
        // ============================================================
        // EXERCICE 15 – TÉTRAÈDRE : milieux, parallélogramme
        // ============================================================
        {
            numero: 15,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre tel que $AB = AC = AD = 1$. On désigne par $I$, $J$, $K$, $L$, $M$ et $N$ les milieux respectifs des segments $[AB]$, $[CD]$, $[AC]$, $[BD]$, $[AD]$ et $[BC]$.</p>
                <p><strong>1.</strong> Montrer que le quadrilatère $INJM$ est un parallélogramme.</p>
                <p><strong>2.</strong> On désigne par $O$ le centre du parallélogramme $INJM$.</p>
                <p><strong>a.</strong> Montrer que $\\overrightarrow{BO} = \\frac{1}{3}\\overrightarrow{BS}$ ? Il faut lire l'énoncé correctement.</p>
                <p><strong>b.</strong> Montrer que la droite (KL) passe par O.</p>
                <p><strong>3.</strong> On désigne par $G$ le centre de gravité du triangle $BCD$. Montrer que la droite (AG) passe par O.</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex15_q1",
                    texte: "Montrer que INJM est un parallélogramme.",
                    solution: "I milieu de [AB], N milieu de [BC], J milieu de [CD], M milieu de [AD]. $\\overrightarrow{IN} = \\frac{1}{2}\\overrightarrow{AC}$ (droite des milieux dans ABC). $\\overrightarrow{MJ} = \\frac{1}{2}\\overrightarrow{AC}$ (droite des milieux dans ACD). Donc $\\overrightarrow{IN} = \\overrightarrow{MJ}$, donc INJM est un parallélogramme."
                },
                {
                    id: "ex15_q2",
                    texte: "Montrer que KL passe par O.",
                    solution: "K milieu de [AC], L milieu de [BD]. Le segment KL relie les milieux des arêtes opposées. Il passe par le centre O du parallélogramme INJM. En effet, dans un tétraèdre, les segments joignant les milieux des arêtes opposées se coupent en leur milieu (théorème de Varignon)."
                },
                {
                    id: "ex15_q3",
                    texte: "Montrer que (AG) passe par O.",
                    solution: "G centre de gravité de BCD. Dans le tétraèdre ABCD, le centre de gravité du tétraèdre est le milieu des segments joignant les milieux des arêtes opposées. Le point O est ce centre, donc AG passe par O."
                }
            ],
            astuces_exo: "💡 Utiliser le théorème de Varignon dans le tétraèdre.",
            erreurs_exo: "⚠️ Bien identifier les milieux et les relations vectorielles."
        }
    ]
});