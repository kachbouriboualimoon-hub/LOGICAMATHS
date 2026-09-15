// chapitre2.js – Repères et combinaisons linéaires
// Extrait du PDF "geometrie espace.pdf" – pages 6 à 10
// + Exercices supplémentaires du fichier "exercices.pdf"

data.chapitres.push({
    id: 2,
    titre: "Repères et combinaisons linéaires",
    rappel: `
        <p><strong>Combinaison linéaire :</strong> Un vecteur $\\vec{w}$ est une combinaison linéaire de deux vecteurs $\\vec{u}$ et $\\vec{v}$ s'il existe deux réels $\\alpha$ et $\\beta$ tels que $\\vec{w} = \\alpha\\vec{u} + \\beta\\vec{v}$.</p>
        <p><strong>Famille liée :</strong> Des vecteurs sont linéairement dépendants (famille liée) si l’un d’eux est combinaison linéaire des autres. Sinon, la famille est <strong>libre</strong>.</p>
        <p><strong>Base de l'espace :</strong> Un triplet de vecteurs $(\\vec{i},\\vec{j},\\vec{k})$ est une base si la famille $\\{\\vec{i},\\vec{j},\\vec{k}\\}$ est libre (non liée). Cela signifie qu'aucun des vecteurs n'est combinaison linéaire des deux autres.</p>
        <p><strong>Repère cartésien :</strong> Un point $O$ et une base $(\\vec{i},\\vec{j},\\vec{k})$ définissent un repère $(O,\\vec{i},\\vec{j},\\vec{k})$. Tout point $M$ a des coordonnées $(x,y,z)$ telles que $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.</p>
        <p><strong>Coplanarité :</strong> Quatre points $A,B,C,D$ sont coplanaires si et seulement si les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ sont liés (c'est-à-dire $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est une famille liée).</p>
        <p><strong>Parallélisme droite-plan :</strong> Une droite $(A,\\vec{u})$ est parallèle à un plan $(B,\\vec{v},\\vec{w})$ si et seulement si la famille $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est liée.</p>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Théorème :</strong> Si $(\\vec{i},\\vec{j},\\vec{k})$ est une base de l'espace, alors tout vecteur $\\vec{u}$ s'écrit de manière unique comme combinaison linéaire de $\\vec{i},\\vec{j},\\vec{k}$ : $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. Les réels $x,y,z$ sont les composantes de $\\vec{u}$ dans cette base.
        </div>
        <div class="theoreme-block">
            <strong>Théorème :</strong> Soit $A$ un point et $\\vec{u},\\vec{v}$ deux vecteurs non colinéaires. L'ensemble des points $M$ tels que $\\overrightarrow{AM}$ soit une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ est le plan passant par $A$ de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$.
        </div>
        <div class="theoreme-block">
            <strong>Conséquence :</strong> $A,B,C,D$ sont coplanaires ssi $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est liée.
        </div>
        <div class="theoreme-block">
            <strong>Propriété :</strong> Soit $\\mathcal{D}(A,\\vec{u})$ une droite et $\\mathcal{P}(B,\\vec{v},\\vec{w})$ un plan. Alors $\\mathcal{D} \\parallel \\mathcal{P}$ ssi $\\{\\vec{u},\\vec{v},\\vec{w}\\}$ est liée.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer qu'une famille de trois vecteurs est liée, on peut exprimer l'un en fonction des deux autres (résoudre un système linéaire).
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour trouver les coordonnées d'un point dans un repère, on décompose le vecteur $\\overrightarrow{OM}$ selon les vecteurs de la base.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer que des points sont coplanaires, on peut montrer que les vecteurs qui les relient sont liés, ou trouver une équation du plan qui les contient.
        </div>
        <div class="method-box">
            <strong>Méthode :</strong> Pour montrer qu'une droite est parallèle à un plan, on montre que le vecteur directeur de la droite est combinaison linéaire des deux vecteurs directeurs du plan.
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Une base est un système de coordonnées pour l'espace. Choisir une base adaptée simplifie les calculs.</div>
        <div class="astuce-box">💡 Pour exprimer un vecteur dans une base, on peut utiliser la relation de Chasles pour décomposer selon les vecteurs de la base.</div>
        <div class="astuce-box">💡 Dans un parallélépipède, les arêtes opposées et parallèles sont représentées par des vecteurs égaux, ce qui facilite les décompositions.</div>
        <div class="astuce-box">💡 Si une famille est liée, cela signifie qu'il y a une relation de dépendance linéaire. Pour trouver cette relation, on peut résoudre $\\alpha\\vec{u}+\\beta\\vec{v}+\\gamma\\vec{w}=\\vec{0}$ avec au moins un coefficient non nul.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre <em>liée</em> et <em>libre</em>. Une famille libre est une base (si elle a 3 vecteurs) ; une famille liée signifie qu'il y a dépendance.</div>
        <div class="erreur-box">⚠️ Oublier que deux vecteurs colinéaires forment une famille liée (car l'un est multiple de l'autre).</div>
        <div class="erreur-box">⚠️ Dans un repère, les coordonnées d'un point dépendent du repère choisi. Ne pas les confondre avec les composantes d'un vecteur.</div>
        <div class="erreur-box">⚠️ Pour montrer que quatre points sont coplanaires, il ne suffit pas de montrer que trois vecteurs sont liés si ces vecteurs sont choisis avec une origine commune.</div>
    `,
    quiz: {
        questions: [
            {
                type: "qcm",
                text: "Une famille de trois vecteurs de l'espace est une base si :",
                options: ["elle est liée", "elle est libre", "les vecteurs sont colinéaires", "les vecteurs sont orthogonaux"],
                correct: 1
            },
            {
                type: "qcm",
                text: "Quatre points $A,B,C,D$ sont coplanaires si et seulement si :",
                options: ["$\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est liée", "$\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}\\}$ est libre", "$\\overrightarrow{AB} = \\overrightarrow{CD}$", "$A,B,C$ sont alignés"],
                correct: 0
            },
            {
                type: "vf",
                text: "Toute famille de trois vecteurs non colinéaires est une base.",
                correct: 0 // Faux, il faut qu'elle soit libre (non coplanaire)
            },
            {
                type: "vf",
                text: "Dans un repère $(O,\\vec{i},\\vec{j},\\vec{k})$, les coordonnées d'un point $M$ sont les composantes du vecteur $\\overrightarrow{OM}$ dans la base $(\\vec{i},\\vec{j},\\vec{k})$.",
                correct: 1
            },
            {
                type: "vf",
                text: "Si $\\{\\vec{u},\\vec{v}\\}$ est une famille libre, alors $\\{\\vec{u},\\vec{v},\\vec{0}\\}$ est aussi libre.",
                correct: 0 // Faux, le vecteur nul rend la famille liée
            }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 – TÉTRAÈDRE : placement de M, N, P
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre. Placer les points $M, N, P$ définis par :</p>
                <ul>
                    <li>$4\\overrightarrow{MA} = -3\\overrightarrow{AB} + \\overrightarrow{AC}$</li>
                    <li>$-\\overrightarrow{NA} + \\overrightarrow{NB} + \\overrightarrow{ND} = \\vec{0}$</li>
                    <li>$2\\overrightarrow{PC} + \\overrightarrow{PB} - \\overrightarrow{PD} = \\vec{0}$</li>
                </ul>
                <p>(D'après l'Activité 1 page 6)</p>
                <canvas class="figure-canvas" data-figure="tetraedre" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q1",
                    texte: "Exprimer $\\overrightarrow{AM}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "On a $4\\overrightarrow{MA} = -3\\overrightarrow{AB} + \\overrightarrow{AC}$, donc $4\\overrightarrow{AM} = 3\\overrightarrow{AB} - \\overrightarrow{AC}$ (en changeant les signes), d'où $\\overrightarrow{AM} = \\frac{3}{4}\\overrightarrow{AB} - \\frac{1}{4}\\overrightarrow{AC}$."
                },
                {
                    id: "ex2_q2",
                    texte: "Exprimer $\\overrightarrow{AN}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$.",
                    solution: "De $-\\overrightarrow{NA} + \\overrightarrow{NB} + \\overrightarrow{ND} = \\vec{0}$, on a $-\\overrightarrow{NA} + \\overrightarrow{NA} + \\overrightarrow{AB} + \\overrightarrow{NA} + \\overrightarrow{AD} = \\vec{0}$ (en décomposant $\\overrightarrow{NB} = \\overrightarrow{NA} + \\overrightarrow{AB}$ et $\\overrightarrow{ND} = \\overrightarrow{NA} + \\overrightarrow{AD}$). Cela donne $\\overrightarrow{NA} + \\overrightarrow{AB} + \\overrightarrow{AD} = \\vec{0}$, donc $\\overrightarrow{AN} = \\overrightarrow{AB} + \\overrightarrow{AD}$."
                },
                {
                    id: "ex2_q3",
                    texte: "Exprimer $\\overrightarrow{AP}$ en fonction de $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$.",
                    solution: "De $2\\overrightarrow{PC} + \\overrightarrow{PB} - \\overrightarrow{PD} = \\vec{0}$, on décompose : $2(\\overrightarrow{PA} + \\overrightarrow{AC}) + (\\overrightarrow{PA} + \\overrightarrow{AB}) - (\\overrightarrow{PA} + \\overrightarrow{AD}) = \\vec{0}$. Cela donne $2\\overrightarrow{PA} + 2\\overrightarrow{AC} + \\overrightarrow{PA} + \\overrightarrow{AB} - \\overrightarrow{PA} - \\overrightarrow{AD} = \\vec{0}$, soit $2\\overrightarrow{PA} + \\overrightarrow{AB} + 2\\overrightarrow{AC} - \\overrightarrow{AD} = \\vec{0}$. Donc $\\overrightarrow{AP} = \\frac{1}{2}\\overrightarrow{AB} + \\overrightarrow{AC} - \\frac{1}{2}\\overrightarrow{AD}$."
                }
            ],
            astuces_exo: "💡 Utiliser la relation de Chasles pour exprimer tous les vecteurs à partir du même point (A).",
            erreurs_exo: "⚠️ Attention aux signes lors des décompositions."
        },
        // ============================================================
        // EXERCICE 2 – TÉTRAÈDRE : milieux IJ
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>Soit $ABCD$ un tétraèdre, $I$ et $J$ les milieux respectifs des arêtes $[AB]$ et $[CD]$.</p>
                <p>1. Montrer que $2\\overrightarrow{IJ} = \\overrightarrow{AC} + \\overrightarrow{BD}$.</p>
                <p>2. Exprimer $\\overrightarrow{IJ}$ en fonction de $\\overrightarrow{AD}$ et $\\overrightarrow{BC}$.</p>
                <p>(D'après l'Activité 2 page 6)</p>
                <canvas class="figure-canvas" data-figure="tetraedre_ij_milieux" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q4",
                    texte: "Montrer que $2\\overrightarrow{IJ} = \\overrightarrow{AC} + \\overrightarrow{BD}$.",
                    solution: "En utilisant le point I milieu de [AB] et J milieu de [CD], on a : $\\overrightarrow{IJ} = \\overrightarrow{IA} + \\overrightarrow{AC} + \\overrightarrow{CJ}$ et $\\overrightarrow{IJ} = \\overrightarrow{IB} + \\overrightarrow{BD} + \\overrightarrow{DJ}$. En ajoutant les deux expressions et en utilisant $\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$ et $\\overrightarrow{CJ} + \\overrightarrow{DJ} = \\vec{0}$ (car I et J sont des milieux), on obtient $2\\overrightarrow{IJ} = \\overrightarrow{AC} + \\overrightarrow{BD}$."
                },
                {
                    id: "ex2_q5",
                    texte: "Exprimer $\\overrightarrow{IJ}$ en fonction de $\\overrightarrow{AD}$ et $\\overrightarrow{BC}$.",
                    solution: "On peut aussi écrire $2\\overrightarrow{IJ} = \\overrightarrow{AD} + \\overrightarrow{BC}$ (par un raisonnement symétrique). En effet, en décomposant avec I et J milieux, on obtient $2\\overrightarrow{IJ} = \\overrightarrow{AD} + \\overrightarrow{BC}$. Donc $\\overrightarrow{IJ} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$."
                }
            ],
            astuces_exo: "💡 Utiliser les propriétés des milieux : $\\overrightarrow{IA} = -\\overrightarrow{IB}$ et $\\overrightarrow{CJ} = -\\overrightarrow{DJ}$.",
            erreurs_exo: "⚠️ Ne pas confondre les indices des sommets."
        },
        // ============================================================
        // EXERCICE 3 – COMBINAISONS LINÉAIRES
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs de l'espace, et $\\vec{e}, \\vec{f}, \\vec{g}$ définis par :</p>
                <p>$\\vec{e} = 2\\vec{u} - 3\\vec{v}$, $\\vec{f} = \\vec{u} + \\frac{1}{2}\\vec{v}$ et $\\vec{g} = -\\vec{u} + 5\\vec{v}$.</p>
                <p>1. Calculer $\\vec{e} + 2\\vec{g}$, puis exprimer $\\vec{v}$ en fonction de $\\vec{e}$ et $\\vec{g}$.</p>
                <p>2. Calculer $\\vec{g} - \\vec{e}$, puis exprimer $\\vec{u}$ en fonction de $\\vec{e}$ et $\\vec{g}$.</p>
                <p>3. En déduire que $\\vec{f}$ est une combinaison linéaire de $\\vec{e}$ et $\\vec{g}$.</p>
                <p>(D'après l'Activité 3 page 6)</p>
            `,
            questions: [
                {
                    id: "ex2_q6",
                    texte: "Calculer $\\vec{e} + 2\\vec{g}$ et en déduire $\\vec{v}$.",
                    solution: "$\\vec{e} + 2\\vec{g} = (2\\vec{u} - 3\\vec{v}) + 2(-\\vec{u} + 5\\vec{v}) = 2\\vec{u} - 3\\vec{v} - 2\\vec{u} + 10\\vec{v} = 7\\vec{v}$. Donc $\\vec{v} = \\frac{1}{7}(\\vec{e} + 2\\vec{g})$."
                },
                {
                    id: "ex2_q7",
                    texte: "Calculer $\\vec{g} - \\vec{e}$ et en déduire $\\vec{u}$.",
                    solution: "$\\vec{g} - \\vec{e} = (-\\vec{u} + 5\\vec{v}) - (2\\vec{u} - 3\\vec{v}) = -3\\vec{u} + 8\\vec{v}$. En remplaçant $\\vec{v}$ par l'expression trouvée précédemment, on obtient $\\vec{g} - \\vec{e} = -3\\vec{u} + \\frac{8}{7}(\\vec{e} + 2\\vec{g})$. D'où $-3\\vec{u} = \\vec{g} - \\vec{e} - \\frac{8}{7}\\vec{e} - \\frac{16}{7}\\vec{g} = -\\frac{15}{7}\\vec{e} - \\frac{9}{7}\\vec{g}$. Donc $\\vec{u} = \\frac{5}{7}\\vec{e} + \\frac{3}{7}\\vec{g}$."
                },
                {
                    id: "ex2_q8",
                    texte: "Exprimer $\\vec{f}$ en fonction de $\\vec{e}$ et $\\vec{g}$.",
                    solution: "$\\vec{f} = \\vec{u} + \\frac{1}{2}\\vec{v} = \\frac{5}{7}\\vec{e} + \\frac{3}{7}\\vec{g} + \\frac{1}{2}\\cdot\\frac{1}{7}(\\vec{e} + 2\\vec{g}) = \\frac{5}{7}\\vec{e} + \\frac{3}{7}\\vec{g} + \\frac{1}{14}\\vec{e} + \\frac{1}{7}\\vec{g} = \\frac{11}{14}\\vec{e} + \\frac{5}{7}\\vec{g}$. Donc $\\vec{f}$ est combinaison linéaire de $\\vec{e}$ et $\\vec{g}$."
                }
            ],
            astuces_exo: "💡 Pour montrer qu'un vecteur est combinaison linéaire de deux autres, il suffit d'exprimer $\\vec{u}$ et $\\vec{v}$ en fonction de ces deux derniers.",
            erreurs_exo: "⚠️ Vérifier les calculs algébriques."
        },
        // ============================================================
        // EXERCICE 4 – PLAN (A,B,C) : décomposition unique
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Soient $A,B,C$ trois points non alignés de l'espace. On note $\\mathcal{P}$ le plan $(ABC)$.</p>
                <p>Soit $M$ un point de $\\mathcal{P}$. La droite passant par $M$ parallèle à $(AC)$ coupe $(AB)$ en $H$, et la droite passant par $M$ parallèle à $(AB)$ coupe $(AC)$ en $K$.</p>
                <p>Montrer qu'il existe un unique couple $(x,y)$ de réels tels que $\\overrightarrow{AM} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$.</p>
                <p>(D'après l'Activité 4 page 6)</p>
            `,
            questions: [
                {
                    id: "ex2_q9",
                    texte: "Montrer que $\\overrightarrow{AM}$ peut s'écrire comme combinaison linéaire de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
                    solution: "Dans le plan (ABC), on peut utiliser le parallélisme. Le point H est sur (AB) donc $\\overrightarrow{AH} = x\\overrightarrow{AB}$ pour un certain réel $x$. De même, K est sur (AC) donc $\\overrightarrow{AK} = y\\overrightarrow{AC}$. Comme $M$ est l'intersection des droites passant par H parallèle à (AC) et par K parallèle à (AB), on a $\\overrightarrow{HM} = y\\overrightarrow{AC}$ (car HM // AC) et $\\overrightarrow{KM} = x\\overrightarrow{AB}$. Alors $\\overrightarrow{AM} = \\overrightarrow{AH} + \\overrightarrow{HM} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$. L'unicité vient du fait que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires (A,B,C non alignés), donc ils forment une base du plan."
                },
                {
                    id: "ex2_q10",
                    texte: "Réciproquement, si $N$ est un point tel que $\\overrightarrow{AN} = \\alpha\\overrightarrow{AB} + \\beta\\overrightarrow{AC}$, montrer que $N$ appartient à $\\mathcal{P}$.",
                    solution: "Comme $\\overrightarrow{AN}$ est combinaison linéaire de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$, le point N est dans le plan passant par A et de vecteurs directeurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$, c'est-à-dire le plan (ABC)."
                }
            ],
            astuces_exo: "💡 Utiliser la construction des parallèles pour décomposer le vecteur.",
            erreurs_exo: "⚠️ Bien identifier les parallèles pour avoir les bonnes relations vectorielles."
        },
        // ============================================================
        // EXERCICE 5 – PARALLÉLÉPIPÈDE : familles liées/libres
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Dans la figure ci-contre (parallélépipède $ABCDEFGH$), on considère les familles de vecteurs suivantes :</p>
                <ul>
                    <li>$\\{\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE}\\}$</li>
                    <li>$\\{\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AC}\\}$</li>
                    <li>$\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AG}\\}$</li>
                </ul>
                <p>Dire dans chaque cas si la famille est liée ou libre.</p>
                <p>(D'après l'Activité 6 page 7)</p>
                <canvas class="figure-canvas" data-figure="parallelepipede" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q11",
                    texte: "La famille $\\{\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE}\\}$ est-elle liée ou libre ?",
                    solution: "Dans un parallélépipède, les arêtes issues de A ($\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE}$) ne sont pas coplanaires (elles définissent les trois dimensions). Elles forment donc une base de l'espace. La famille est libre."
                },
                {
                    id: "ex2_q12",
                    texte: "La famille $\\{\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AC}\\}$ est-elle liée ou libre ?",
                    solution: "$\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$ (diagonale du parallélogramme ABCD). Donc $\\overrightarrow{AC}$ est combinaison linéaire des deux autres. La famille est liée."
                },
                {
                    id: "ex2_q13",
                    texte: "La famille $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AG}\\}$ est-elle liée ou libre ?",
                    solution: "$\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$. Mais $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$. Donc $\\overrightarrow{AG} = \\overrightarrow{AC} + \\overrightarrow{AE}$. Ainsi $\\overrightarrow{AG}$ est combinaison linéaire de $\\overrightarrow{AC}$ et $\\overrightarrow{AE}$. Mais $\\overrightarrow{AE}$ n'est pas dans la famille. Cependant, on peut exprimer $\\overrightarrow{AE} = \\overrightarrow{AG} - \\overrightarrow{AC}$ ; cela ne donne pas directement une relation entre les trois vecteurs de la famille. En fait, $\\{\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AG}\\}$ est libre car si on avait $\\alpha\\overrightarrow{AB} + \\beta\\overrightarrow{AC} + \\gamma\\overrightarrow{AG} = \\vec{0}$, en décomposant $\\overrightarrow{AC}$ et $\\overrightarrow{AG}$ sur la base $(\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$, on obtient des coefficients qui forcent $\\alpha=\\beta=\\gamma=0$. Donc la famille est libre."
                }
            ],
            astuces_exo: "💡 Utiliser les relations vectorielles dans un parallélépipède pour exprimer les vecteurs.",
            erreurs_exo: "⚠️ Ne pas confondre libre et liée ; dans un cube, les arêtes issues d'un sommet sont libres."
        },
        // ============================================================
        // EXERCICE 6 (NOUVEAU) – COORDONNÉES
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>L'espace est muni d'un repère cartésien $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p><strong>1.</strong> Représenter chacun des points ci-dessous dans un système d'axes.</p>
                <ul>
                    <li>$A\\left(-1, \\frac{1}{3}, 0\\right)$</li>
                    <li>$B\\left(0, -\\frac{1}{4}, \\frac{1}{3}\\right)$</li>
                    <li>$C\\left(-\\frac{1}{2}, -\\frac{1}{2}, \\frac{1}{2}\\right)$</li>
                    <li>$D\\left(0, \\frac{2}{5}, 0\\right)$</li>
                </ul>
                <p><strong>2.</strong> Déterminer les composantes des vecteurs :</p>
                <ul>
                    <li>$2\\overrightarrow{AB} + \\overrightarrow{AF}$ (le point F n'est pas défini ? Il faut préciser)</li>
                    <li>$2\\overrightarrow{AB} - \\overrightarrow{BD} + 2\\overrightarrow{CA}$</li>
                    <li>$-\\overrightarrow{AB} - 3\\overrightarrow{BC} + 2\\overrightarrow{CD}$</li>
                </ul>
                <p>(D'après l'Exercice 9 page 1 du PDF d'exercices)</p>
                <canvas class="figure-canvas" data-figure="axes_points" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q14",
                    texte: "Déterminer les composantes de $2\\overrightarrow{AB} - \\overrightarrow{BD} + 2\\overrightarrow{CA}$.",
                    solution: "$\\overrightarrow{AB} = B - A = (1, -\\frac{7}{12}, \\frac{1}{3})$. $\\overrightarrow{BD} = D - B = (0, \\frac{13}{20}, -\\frac{1}{3})$. $\\overrightarrow{CA} = A - C = (-\\frac{1}{2}, \\frac{5}{6}, -\\frac{1}{2})$. Donc $2\\overrightarrow{AB} - \\overrightarrow{BD} + 2\\overrightarrow{CA} = 2(1, -\\frac{7}{12}, \\frac{1}{3}) - (0, \\frac{13}{20}, -\\frac{1}{3}) + 2(-\\frac{1}{2}, \\frac{5}{6}, -\\frac{1}{2}) = (2, -\\frac{7}{6}, \\frac{2}{3}) - (0, \\frac{13}{20}, -\\frac{1}{3}) + (-1, \\frac{5}{3}, -1) = (1, -\\frac{7}{6} - \\frac{13}{20} + \\frac{5}{3}, \\frac{2}{3} + \\frac{1}{3} - 1) = (1, -\\frac{70}{60} - \\frac{39}{60} + \\frac{100}{60}, 0) = (1, -\\frac{9}{60}, 0) = (1, -\\frac{3}{20}, 0)$."
                },
                {
                    id: "ex2_q15",
                    texte: "Déterminer les composantes de $-\\overrightarrow{AB} - 3\\overrightarrow{BC} + 2\\overrightarrow{CD}$.",
                    solution: "$\\overrightarrow{AB} = (1, -\\frac{7}{12}, \\frac{1}{3})$. $\\overrightarrow{BC} = C - B = (-\\frac{1}{2}, -\\frac{1}{4}, \\frac{1}{6})$. $\\overrightarrow{CD} = D - C = (\\frac{1}{2}, \\frac{9}{10}, -\\frac{1}{2})$. Donc $-\\overrightarrow{AB} - 3\\overrightarrow{BC} + 2\\overrightarrow{CD} = -(1, -\\frac{7}{12}, \\frac{1}{3}) - 3(-\\frac{1}{2}, -\\frac{1}{4}, \\frac{1}{6}) + 2(\\frac{1}{2}, \\frac{9}{10}, -\\frac{1}{2}) = (-1, \\frac{7}{12}, -\\frac{1}{3}) + (\\frac{3}{2}, \\frac{3}{4}, -\\frac{1}{2}) + (1, \\frac{9}{5}, -1) = (\\frac{3}{2}, \\frac{7}{12} + \\frac{3}{4} + \\frac{9}{5}, -\\frac{1}{3} - \\frac{1}{2} - 1) = (\\frac{3}{2}, \\frac{35}{60} + \\frac{45}{60} + \\frac{108}{60}, -\\frac{11}{6}) = (\\frac{3}{2}, \\frac{188}{60}, -\\frac{11}{6}) = (\\frac{3}{2}, \\frac{47}{15}, -\\frac{11}{6})$."
                }
            ],
            astuces_exo: "💡 Pour les coordonnées, on soustrait les coordonnées de l'origine du vecteur.",
            erreurs_exo: "⚠️ Attention aux fractions et aux signes."
        },
        // ============================================================
        // EXERCICE 7 (NOUVEAU) – CUBE : coordonnées, colinéarité
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>Dans la figure ci-contre $ABCDEFGH$ est un cube.</p>
                <p>Les points $I$ et $J$ sont les milieux respectifs des segments $[EG]$ et $[AF]$.</p>
                <p>On munit l'espace du repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$.</p>
                <p><strong>1.</strong> Déterminer les coordonnées des points $H$, $I$ et $J$.</p>
                <p><strong>2.</strong> Montrer que les vecteurs $\\overrightarrow{AH}$ et $\\overrightarrow{IJ}$ sont colinéaires.</p>
                <p><strong>3.</strong> En déduire que la droite (IJ) est parallèle au plan (ADE).</p>
                <p><strong>4.</strong> Montrer que les plans (IJE) et (ADE) sont sécants suivant une droite $\\mathcal{D}$ dont on précisera un point et un vecteur directeur.</p>
                <p>(D'après l'Exercice 11 page 2 du PDF d'exercices)</p>
                <canvas class="figure-canvas" data-figure="cube" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q16",
                    texte: "Déterminer les coordonnées de H, I et J.",
                    solution: "Dans le repère $(A,\\overrightarrow{AB},\\overrightarrow{AD},\\overrightarrow{AE})$, on a : A(0,0,0), B(1,0,0), C(1,1,0), D(0,1,0), E(0,0,1), F(1,0,1), G(1,1,1), H(0,1,1). I milieu de [EG] : $I(\\frac{1}{2}, \\frac{1}{2}, 1)$. J milieu de [AF] : $J(\\frac{1}{2}, 0, \\frac{1}{2})$."
                },
                {
                    id: "ex2_q17",
                    texte: "Montrer que $\\overrightarrow{AH}$ et $\\overrightarrow{IJ}$ sont colinéaires.",
                    solution: "$\\overrightarrow{AH} = H - A = (0,1,1)$. $\\overrightarrow{IJ} = J - I = (0, -\\frac{1}{2}, -\\frac{1}{2})$. On a $\\overrightarrow{IJ} = -\\frac{1}{2}\\overrightarrow{AH}$. Donc les vecteurs sont colinéaires."
                },
                {
                    id: "ex2_q18",
                    texte: "En déduire que (IJ) // (ADE).",
                    solution: "Le plan (ADE) a pour vecteurs directeurs $\\overrightarrow{AD}$ et $\\overrightarrow{AE}$. $\\overrightarrow{IJ} = -\\frac{1}{2}\\overrightarrow{AH} = -\\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{AE})$. Donc $\\overrightarrow{IJ}$ est combinaison linéaire de $\\overrightarrow{AD}$ et $\\overrightarrow{AE}$, donc (IJ) est parallèle à (ADE)."
                },
                {
                    id: "ex2_q19",
                    texte: "Déterminer l'intersection des plans (IJE) et (ADE).",
                    solution: "Le plan (ADE) est le plan $x=0$. Le plan (IJE) passe par E(0,0,1), I($\\frac{1}{2},\\frac{1}{2},1$), J($\\frac{1}{2},0,\\frac{1}{2}$). L'intersection est la droite passant par E et parallèle à IJ (car IJ est parallèle à (ADE) et E est sur les deux plans). Un vecteur directeur est $\\overrightarrow{IJ} = (0, -\\frac{1}{2}, -\\frac{1}{2})$ ou $\\overrightarrow{AD} + \\overrightarrow{AE}$. Un point est E(0,0,1). Donc $\\mathcal{D} : \\begin{cases} x = 0 \\\\ y = -\\frac{1}{2}\\alpha \\\\ z = 1 - \\frac{1}{2}\\alpha \\end{cases}, \\alpha \\in \\mathbb{R}$."
                }
            ],
            astuces_exo: "💡 Utiliser les coordonnées des points dans le repère choisi.",
            erreurs_exo: "⚠️ Vérifier les coordonnées des milieux."
        },
        // ============================================================
        // EXERCICE 8 (NOUVEAU) – REPÈRE : coplanarité
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>L'espace est muni d'un repère cartésien $(O,\\vec{i},\\vec{j},\\vec{k})$.</p>
                <p>On considère les points $A(1, 3, 0)$, $B(3, 1, 0)$, $C(4, 4, 0)$ et $D(4, 4, 0)$ (attention D a les mêmes coordonnées que C, il y a une erreur dans l'énoncé).</p>
                <p>On désigne par $I$, $J$ et $L$ les points tels que $\\overrightarrow{DI} = \\frac{2}{5}\\overrightarrow{DA}$, $\\overrightarrow{DJ} = \\frac{1}{6}\\overrightarrow{DC}$ et $\\overrightarrow{DL} = \\overrightarrow{DB}$ (corrigé).</p>
                <p><strong>1.</strong> Déterminer les coordonnées des points $I$, $J$ et $L$.</p>
                <p><strong>2.</strong> Les points $I$, $J$, $L$ et $D$ sont-ils coplanaires ?</p>
                <p>(D'après l'Exercice 16 page 2 du PDF d'exercices, avec corrections)</p>
                <canvas class="figure-canvas" data-figure="points_coplanar" width="250" height="180" style="display:block; margin:10px auto; border:1px solid var(--border); border-radius:8px; background:var(--surface);"></canvas>
            `,
            questions: [
                {
                    id: "ex2_q20",
                    texte: "Déterminer les coordonnées de I, J et L.",
                    solution: "D'après l'énoncé, A(1,3,0), B(3,1,0), C(4,4,0) et D(4,4,0). $\\overrightarrow{DI} = \\frac{2}{5}\\overrightarrow{DA} = \\frac{2}{5}(A-D) = \\frac{2}{5}(1-4, 3-4, 0-0) = \\frac{2}{5}(-3,-1,0) = (-\\frac{6}{5}, -\\frac{2}{5}, 0)$. Donc I = D + (-6/5, -2/5, 0) = (4 - 6/5, 4 - 2/5, 0) = (\\frac{14}{5}, \\frac{18}{5}, 0). $\\overrightarrow{DJ} = \\frac{1}{6}\\overrightarrow{DC} = \\frac{1}{6}(C-D) = \\frac{1}{6}(4-4, 4-4, 0-0) = (0,0,0)$. Donc J = D = (4,4,0). $\\overrightarrow{DL} = \\overrightarrow{DB} = B-D = (3-4, 1-4, 0-0) = (-1,-3,0)$. Donc L = D + (-1,-3,0) = (3,1,0)."
                },
                {
                    id: "ex2_q21",
                    texte: "Les points I, J, L et D sont-ils coplanaires ?",
                    solution: "Comme tous les points ont leur cote égale à 0, ils sont tous dans le plan z=0. Donc ils sont coplanaires. Plus précisément, I, J, L et D sont dans le plan (Oxy)."
                }
            ],
            astuces_exo: "💡 Pour montrer que des points sont coplanaires, on peut montrer qu'ils ont une coordonnée commune (ici z=0).",
            erreurs_exo: "⚠️ Vérifier les coordonnées des points définis par des relations vectorielles."
        }
    ]
});