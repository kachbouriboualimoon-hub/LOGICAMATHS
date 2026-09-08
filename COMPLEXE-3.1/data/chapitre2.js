// data/chapitre2.js – Module, affixe et géométrie (VERSION ENRICHIE)
// =================================================================
// Contient 9 exercices mêlant calculs algébriques (Ch1) et géométrie (Ch2)

data.chapitres.push({
    id: 2,
    titre: "Module et géométrie",
    resume: `
        <p>Lien entre les nombres complexes et le plan.</p>
        <ul>
            <li><strong>Affixe :</strong> $z_M = a+ib$ pour un point $M(a,b)$.</li>
            <li><strong>Module :</strong> $|z| = OM = \\sqrt{a^2+b^2}$.</li>
            <li><strong>Distance :</strong> $MN = |z_N - z_M|$.</li>
        </ul>
    `,
    rappel: `
        <div class="theoreme-block">
            <h4>📘 Le plan complexe</h4>
            <p>Le plan est muni d'un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
            <ul>
                <li>À tout point $M(a,b)$, on associe l'<strong>affixe</strong> $z = a+ib$.</li>
                <li>À tout complexe $z = a+ib$, on associe le point $M(a,b)$.</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <h4>📘 Affixe d'un vecteur</h4>
            <p>Pour deux points $A$ et $B$ d'affixes $z_A$ et $z_B$ :</p>
            <p>L'affixe du vecteur $\\overrightarrow{AB}$ est $z_B - z_A$.</p>
        </div>
        <div class="theoreme-block">
            <h4>📘 Module d'un complexe</h4>
            <p>Le module de $z = a+ib$ est le réel positif :</p>
            <p>$$|z| = \\sqrt{a^2 + b^2} = OM.$$</p>
            <p><strong>Propriété fondamentale :</strong> $|z|^2 = z\\overline{z}$.</p>
        </div>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Inégalité triangulaire :</strong> $|z+z'| \\le |z| + |z'|$.
        </div>
        <div class="theoreme-block">
            <strong>Multiplicativité :</strong>
            <ul>
                <li>$|zz'| = |z| \\times |z'|$</li>
                <li>$\\left|\\dfrac{z}{z'}\\right| = \\dfrac{|z|}{|z'|}$ (si $z' \\neq 0$)</li>
                <li>$|z^n| = |z|^n$ pour $n \\in \\mathbb{N}^*$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Lien avec le conjugué :</strong>
            <ul>
                <li>$|\\overline{z}| = |z|$</li>
                <li>$|z| = 0 \\iff z = 0$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Critères géométriques :</strong>
            <ul>
                <li>$\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont <strong>colinéaires</strong> $\\iff \\dfrac{z_B - z_A}{z_C - z_A} \\in \\mathbb{R}$.</li>
                <li>$\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont <strong>orthogonaux</strong> $\\iff \\dfrac{z_B - z_A}{z_C - z_A}$ est un imaginaire pur.</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Caractérisation d'ensembles :</strong>
            <ul>
                <li>$|z - z_A| = R$ : <strong>cercle</strong> de centre $A$ et de rayon $R$.</li>
                <li>$|z - z_A| = |z - z_B|$ : <strong>médiatrice</strong> du segment $[AB]$.</li>
                <li>$\\arg\\left(\\dfrac{z-z_A}{z-z_B}\\right) \\equiv \\pm \\dfrac{\\pi}{2} \\ [2\\pi]$ : <strong>cercle de diamètre</strong> $[AB]$.</li>
            </ul>
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>📝 Calculer une distance :</strong> $MN = |z_N - z_M|$.
            <p><em>Exemple :</em> Si $z_M = 1+i$ et $z_N = 3-2i$, alors $MN = |(3-2i)-(1+i)| = |2-3i| = \\sqrt{4+9} = \\sqrt{13}$.</p>
        </div>
        <div class="method-box">
            <strong>📝 Déterminer un ensemble de points :</strong>
            <ul>
                <li>Identifier le point fixe (affixe du centre) et la valeur (rayon ou autre point).</li>
                <li>Interpréter $|z - z_A|$ comme la distance $AM$.</li>
            </ul>
        </div>
        <div class="method-box">
            <strong>📝 Nature d'un triangle :</strong>
            <ul>
                <li>Calculer les trois distances.</li>
                <li>Utiliser la réciproque du théorème de Pythagore.</li>
            </ul>
        </div>
        <div class="method-box">
            <strong>📝 Nature d'un quadrilatère :</strong>
            <ul>
                <li>Les diagonales ont-elles le même milieu ? $\\iff$ parallélogramme.</li>
                <li>Les côtés consécutifs sont-ils égaux ? $\\iff$ losange.</li>
                <li>Les diagonales sont-elles de même longueur ? $\\iff$ rectangle.</li>
            </ul>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour montrer que trois points sont alignés, calculez le rapport des affixes des vecteurs et montrez qu'il est réel.</div>
        <div class="astuce-box">💡 Pour montrer que $|z| = 1$, il suffit de montrer que $z\\overline{z} = 1$ ou $\\overline{z} = 1/z$.</div>
        <div class="astuce-box">💡 $|\\overline{z}| = |z|$ est très utile pour simplifier des modules avec conjugué.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas oublier la racine carrée dans le module : $|a+ib| = \\sqrt{a^2+b^2}$.</div>
        <div class="erreur-box">⚠️ Ne pas confondre $|z|^2 = z\\overline{z}$ avec $z^2$.</div>
        <div class="erreur-box">⚠️ Pour un quadrilatère, un parallélogramme a ses diagonales qui se coupent en leur milieu, pas ses côtés.</div>
    `,
    quiz: {
        questions: [
            { type: 'qcm', text: 'Le module de $z = \\sqrt{3} - i$ est :', options: ['$2$', '$\\sqrt{3} - 1$', '$\\sqrt{3} + 1$'], correct: 0 },
            { type: 'vrai/faux', text: "Si $|z| = |z'|$ alors nécessairement $z = z'$ ou $z = -z'$.", correct: 0 },
            { type: 'qcm', text: 'Le point M d\'affixe $z$ tel que $|z - 1 + 2i| = 3$ décrit un :', options: ['Cercle de centre $(1,-2)$ et rayon 3', 'Cercle de centre $(-1,2)$ et rayon 3', 'Médiatrice'], correct: 0 },
            { type: 'vrai/faux', text: '$|(1+i)z| = 3$ équivaut à $|z| = 3/\\sqrt{2}$', correct: 1 }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 : p15 – Ensembles de points (cercles et médiatrices)
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Déterminer et représenter l'ensemble des points $M$ d'affixe $z$ dans chacun des cas suivants :</p>
                <ol>
                    <li>$|z-3| = 2$</li>
                    <li>$|z-i| = 1$</li>
                    <li>$|z-2+i| = |z-1|$</li>
                    <li>$|z-2i+1| = |z+i|$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Pour le 3, mettez l'égalité sous la forme $|z - z_A| = |z - z_B|$ pour identifier A et B.</div>
            `,
            questions: [
                {
                    id: 'c2-ex1-q1',
                    texte: '$|z-3| = 2$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $|z-3| = |z - (3+0i)|$. Donc c'est l'ensemble des points M dont la distance au point $A(3,0)$ est égale à 2.</p>
                        <p><strong>Résultat :</strong> C'est le <strong>cercle</strong> de centre $A(3,0)$ et de rayon $R=2$.</p>
                        <p><em>Équation cartésienne :</em> $(x-3)^2 + y^2 = 4$.</p>
                    `
                },
                {
                    id: 'c2-ex1-q2',
                    texte: '$|z-i| = 1$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $|z-i| = |z - (0+i)|$. Le point d'affixe $i$ est $A(0,1)$.</p>
                        <p><strong>Résultat :</strong> C'est le <strong>cercle</strong> de centre $A(0,1)$ et de rayon $R=1$.</p>
                    `
                },
                {
                    id: 'c2-ex1-q3',
                    texte: '$|z-2+i| = |z-1|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On réécrit : $|z - (2 - i)| = |z - 1|$.</p>
                        <p>Le point $A$ d'affixe $2-i$ a pour coordonnées $(2,-1)$.</p>
                        <p>Le point $B$ d'affixe $1$ a pour coordonnées $(1,0)$.</p>
                        <p>L'égalité signifie $AM = BM$.</p>
                        <p><strong>Résultat :</strong> C'est la <strong>médiatrice</strong> du segment $[AB]$.</p>
                    `
                },
                {
                    id: 'c2-ex1-q4',
                    texte: '$|z-2i+1| = |z+i|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On réécrit : $|z - (-1 + 2i)| = |z - (0 - i)| = |z - (-i)|$.</p>
                        <p>Le point $A$ d'affixe $-1+2i$ a pour coordonnées $(-1,2)$.</p>
                        <p>Le point $B$ d'affixe $-i$ a pour coordonnées $(0,-1)$.</p>
                        <p>L'égalité signifie $AM = BM$.</p>
                        <p><strong>Résultat :</strong> C'est la <strong>médiatrice</strong> du segment $[AB]$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 2 : p15 – Colinéarité (alignement O, A, B)
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>Le plan est muni d'un repère orthonormé direct. Soit $A(2-2i)$, $B(-1+i)$.</p>
                <ol>
                    <li>Montrer que les points $O$, $A$ et $B$ sont alignés.</li>
                    <li>Déterminer l'ensemble des points $M$ d'affixe $z = k(2-2i)$, $k \\in \\mathbb{R}$.</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c2-ex2-q1',
                    texte: 'Montrer que O, A et B sont alignés.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $z_A = 2-2i$ et $z_B = -1+i$.</p>
                        <p>On remarque que $z_A = -2 \\times (-1+i) = -2 z_B$.</p>
                        <p>Donc $\\overrightarrow{OA}$ et $\\overrightarrow{OB}$ sont colinéaires.</p>
                        <p>Le rapport $\\dfrac{z_A}{z_B} = -2 \\in \\mathbb{R}$.</p>
                        <p><strong>Conclusion :</strong> Les points O, A et B sont alignés.</p>
                    `
                },
                {
                    id: 'c2-ex2-q2',
                    texte: 'Déterminer l\'ensemble des points $M$ d\'affixe $z = k(2-2i)$, $k \\in \\mathbb{R}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>Soit $M$ d'affixe $z = k(2-2i)$.</p>
                        <p>Alors $\\overrightarrow{OM}$ a pour affixe $z$, et $\\overrightarrow{OA}$ a pour affixe $z_A = 2-2i$.</p>
                        <p>On a $\\overrightarrow{OM} = k \\overrightarrow{OA}$.</p>
                        <p>Donc $M$ appartient à la droite $(OA)$.</p>
                        <p>Comme $k$ parcourt $\\mathbb{R}$, $M$ décrit toute la droite $(OA)$.</p>
                        <p><strong>Résultat :</strong> L'ensemble est la droite $(OA)$ passant par O et A.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 3 : p21 – Affixes des symétriques et centre de gravité
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Le plan est muni d'un repère orthonormé direct. On donne les points A, B, C d'affixes respectives :</p>
                <p>$z_A = i$, $z_B = 1 - 3i$, $z_C = 1 + 2i$.</p>
                <ol>
                    <li>Donner les affixes de leurs symétriques par rapport à l'axe des abscisses.</li>
                    <li>Donner les affixes de leurs symétriques par rapport à l'axe des ordonnées.</li>
                    <li>Donner les affixes de leurs symétriques par rapport au point O.</li>
                    <li>Déterminer l'affixe du centre de gravité du triangle ABC.</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Le symétrique de $M(z)$ par rapport à l'axe des abscisses a pour affixe $\\overline{z}$.</div>
                <div class="astuce-box">💡 Le symétrique par rapport à O a pour affixe $-z$.</div>
            `,
            questions: [
                {
                    id: 'c2-ex3-q1',
                    texte: 'Affixes des symétriques par rapport à l\'axe des abscisses.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>La symétrie par rapport à l'axe des abscisses transforme $z$ en $\\overline{z}$.</p>
                        <ul>
                            <li>$z_A = i \\implies \\overline{z_A} = -i$</li>
                            <li>$z_B = 1 - 3i \\implies \\overline{z_B} = 1 + 3i$</li>
                            <li>$z_C = 1 + 2i \\implies \\overline{z_C} = 1 - 2i$</li>
                        </ul>
                        <p><strong>Résultat :</strong> $-i$, $1+3i$, $1-2i$.</p>
                    `
                },
                {
                    id: 'c2-ex3-q2',
                    texte: 'Affixes des symétriques par rapport à l\'axe des ordonnées.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>La symétrie par rapport à l'axe des ordonnées transforme $M(x,y)$ en $M'(-x,y)$, donc $z = x+iy$ devient $-x+iy = -\\overline{z}$.</p>
                        <ul>
                            <li>$z_A = i \\implies -\\overline{i} = -(-i) = i$ (i est sur l'axe des ordonnées, donc fixe)</li>
                            <li>$z_B = 1 - 3i \\implies -\\overline{1-3i} = -(1+3i) = -1 - 3i$</li>
                            <li>$z_C = 1 + 2i \\implies -\\overline{1+2i} = -(1-2i) = -1 + 2i$</li>
                        </ul>
                        <p><strong>Résultat :</strong> $i$, $-1-3i$, $-1+2i$.</p>
                    `
                },
                {
                    id: 'c2-ex3-q3',
                    texte: 'Affixes des symétriques par rapport au point O.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>La symétrie centrale de centre O transforme $z$ en $-z$.</p>
                        <ul>
                            <li>$z_A = i \\implies -i$</li>
                            <li>$z_B = 1 - 3i \\implies -1 + 3i$</li>
                            <li>$z_C = 1 + 2i \\implies -1 - 2i$</li>
                        </ul>
                        <p><strong>Résultat :</strong> $-i$, $-1+3i$, $-1-2i$.</p>
                    `
                },
                {
                    id: 'c2-ex3-q4',
                    texte: 'Affixe du centre de gravité du triangle ABC.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>Le centre de gravité G a pour affixe :</p>
                        $$z_G = \\dfrac{z_A + z_B + z_C}{3}$$
                        $$z_G = \\dfrac{i + (1-3i) + (1+2i)}{3} = \\dfrac{1+1 + i - 3i + 2i}{3} = \\dfrac{2 + 0i}{3} = \\dfrac{2}{3}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\dfrac{2}{3}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 4 : p15 – Triangle ABC (distances, nature, centre cercle circonscrit)
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Le plan est muni d'un repère orthonormé direct. Soit $A$, $B$ et $C$ d'affixes respectives $z_A = 1+i$, $z_B = 3+i$ et $z_C = 1-2i$.</p>
                <ol>
                    <li>Calculer $AB$, $AC$ et $BC$.</li>
                    <li>En déduire la nature du triangle $ABC$.</li>
                    <li>Déterminer l'affixe du centre $I$ du cercle circonscrit à $ABC$.</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Si le triangle est rectangle, le centre du cercle circonscrit est le milieu de l'hypoténuse.</div>
            `,
            questions: [
                {
                    id: 'c2-ex4-q1',
                    texte: 'Calculer $AB$, $AC$ et $BC$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        $$AB = |z_B - z_A| = |(3+i) - (1+i)| = |2| = 2$$
                        $$AC = |z_C - z_A| = |(1-2i) - (1+i)| = |-3i| = 3$$
                        $$BC = |z_C - z_B| = |(1-2i) - (3+i)| = |-2 - 3i| = \\sqrt{(-2)^2 + (-3)^2} = \\sqrt{13}$$
                        <p><strong>Résultat :</strong> $AB = 2$, $AC = 3$, $BC = \\sqrt{13}$.</p>
                    `
                },
                {
                    id: 'c2-ex4-q2',
                    texte: 'Nature du triangle $ABC$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On vérifie la réciproque du théorème de Pythagore :</p>
                        $$AB^2 + AC^2 = 2^2 + 3^2 = 4 + 9 = 13 = BC^2$$
                        <p>Donc le triangle $ABC$ est <strong>rectangle en $A$</strong>.</p>
                        <p><strong>Résultat :</strong> $ABC$ est rectangle en $A$.</p>
                    `
                },
                {
                    id: 'c2-ex4-q3',
                    texte: 'Affixe du centre $I$ du cercle circonscrit.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>Le cercle circonscrit à un triangle rectangle a pour diamètre l'hypoténuse $[BC]$.</p>
                        <p>Donc $I$ est le milieu de $[BC]$ :</p>
                        $$z_I = \\dfrac{z_B + z_C}{2} = \\dfrac{(3+i) + (1-2i)}{2} = \\dfrac{4 - i}{2} = 2 - \\dfrac{1}{2}i$$
                        <p><strong>Résultat :</strong> $\\boxed{2 - \\dfrac{1}{2}i}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 5 : p33 – Points A, B, C (milieu, distances, symétrique)
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Soit $A$, $B$ et $C$ les points d'affixes respectives $z_A = 2+i$, $z_B = -1$ et $z_C = 3-2i$.</p>
                <ol>
                    <li>Déterminer l'affixe du point $I$ milieu de $[BC]$.</li>
                    <li>Calculer $AB$, $AC$ et $BC$. Quelle est la nature du triangle $ABC$ ?</li>
                    <li>Déterminer l'affixe du point $D$ symétrique de $A$ par rapport à $I$. Quelle est la nature du quadrilatère $ABDC$ ?</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c2-ex5-q1',
                    texte: 'Affixe du milieu $I$ de $[BC]$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        $$z_I = \\dfrac{z_B + z_C}{2} = \\dfrac{-1 + (3-2i)}{2} = \\dfrac{2 - 2i}{2} = 1 - i$$
                        <p><strong>Résultat :</strong> $\\boxed{1 - i}$.</p>
                    `
                },
                {
                    id: 'c2-ex5-q2',
                    texte: 'Calculer $AB$, $AC$, $BC$ et en déduire la nature du triangle.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        $$AB = |z_B - z_A| = |-1 - (2+i)| = |-3 - i| = \\sqrt{9+1} = \\sqrt{10}$$
                        $$AC = |z_C - z_A| = |(3-2i) - (2+i)| = |1 - 3i| = \\sqrt{1+9} = \\sqrt{10}$$
                        $$BC = |z_C - z_B| = |(3-2i) - (-1)| = |4 - 2i| = \\sqrt{16+4} = \\sqrt{20} = 2\\sqrt{5}$$
                        <p>On a $AB = AC$, donc le triangle est <strong>isocèle en $A$</strong>.</p>
                        <p>De plus, $AB^2 + AC^2 = 10 + 10 = 20 = BC^2$. Donc il est aussi <strong>rectangle en $A$</strong>.</p>
                        <p><strong>Résultat :</strong> $ABC$ est rectangle et isocèle en $A$.</p>
                    `
                },
                {
                    id: 'c2-ex5-q3',
                    texte: 'Affixe du point $D$ symétrique de $A$ par rapport à $I$. Nature du quadrilatère $ABDC$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>Si $D$ est le symétrique de $A$ par rapport à $I$, alors $I$ est le milieu de $[AD]$.</p>
                        $$z_I = \\dfrac{z_A + z_D}{2} \\implies z_D = 2z_I - z_A = 2(1-i) - (2+i) = 2 - 2i - 2 - i = -3i$$
                        <p>Les diagonales $[AD]$ et $[BC]$ ont le même milieu $I$. Donc $ABDC$ est un <strong>parallélogramme</strong>.</p>
                        <p>De plus, $AB = AC$ (côtés consécutifs égaux), donc $ABDC$ est un <strong>losange</strong>.</p>
                        <p>Comme le triangle est rectangle en $A$, ce losange est un <strong>carré</strong>.</p>
                        <p><strong>Résultat :</strong> $z_D = -3i$, $ABDC$ est un carré.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 6 : p33 – Calcul de modules et preuve |z|=1
        // ============================================================
        {
            numero: 6,
            enonce: `
                <ol>
                    <li>Calculer le module de $(1+i)^4$, $(2-3i)^2$, $(-2+i)(1-3i)(1-4i)$ et $\\dfrac{1-5i}{i+2\\sqrt{3}}$.</li>
                    <li>Montrer que pour tout complexe $z$, $|z| = 1 \\iff \\overline{z} = \\dfrac{1}{z}$.</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c2-ex6-q1',
                    texte: 'Calculer $|(1+i)^4|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise $|z^n| = |z|^n$.</p>
                        $$|1+i| = \\sqrt{1^2+1^2} = \\sqrt{2}$$
                        $$|(1+i)^4| = |1+i|^4 = (\\sqrt{2})^4 = 4$$
                        <p><strong>Résultat :</strong> $\\boxed{4}$.</p>
                    `
                },
                {
                    id: 'c2-ex6-q2',
                    texte: 'Calculer $|(2-3i)^2|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        $$|2-3i| = \\sqrt{4+9} = \\sqrt{13}$$
                        $$|(2-3i)^2| = |2-3i|^2 = (\\sqrt{13})^2 = 13$$
                        <p><strong>Résultat :</strong> $\\boxed{13}$.</p>
                    `
                },
                {
                    id: 'c2-ex6-q3',
                    texte: 'Calculer $|(-2+i)(1-3i)(1-4i)|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise $|zz'z''| = |z||z'||z''|$.</p>
                        $$|-2+i| = \\sqrt{4+1} = \\sqrt{5}$$
                        $$|1-3i| = \\sqrt{1+9} = \\sqrt{10}$$
                        $$|1-4i| = \\sqrt{1+16} = \\sqrt{17}$$
                        <p>Donc le module du produit est :</p>
                        $$\\sqrt{5} \\times \\sqrt{10} \\times \\sqrt{17} = \\sqrt{5 \\times 10 \\times 17} = \\sqrt{850} = 5\\sqrt{34}$$
                        <p><strong>Résultat :</strong> $\\boxed{5\\sqrt{34}}$.</p>
                    `
                },
                {
                    id: 'c2-ex6-q4',
                    texte: 'Calculer $\\left|\\dfrac{1-5i}{i+2\\sqrt{3}}\\right|$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise $\\left|\\dfrac{z}{z'}\\right| = \\dfrac{|z|}{|z'|}$.</p>
                        $$|1-5i| = \\sqrt{1+25} = \\sqrt{26}$$
                        $$|i+2\\sqrt{3}| = \\sqrt{(2\\sqrt{3})^2 + 1^2} = \\sqrt{12+1} = \\sqrt{13}$$
                        <p>Donc :</p>
                        $$\\left|\\dfrac{1-5i}{i+2\\sqrt{3}}\\right| = \\dfrac{\\sqrt{26}}{\\sqrt{13}} = \\sqrt{2}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\sqrt{2}}$.</p>
                    `
                },
                {
                    id: 'c2-ex6-q5',
                    texte: 'Montrer que $|z| = 1 \\iff \\overline{z} = \\dfrac{1}{z}$ (pour $z \\neq 0$).',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On sait que $|z|^2 = z\\overline{z}$.</p>
                        <p>Si $|z| = 1$, alors $|z|^2 = 1$, donc $z\\overline{z} = 1$.</p>
                        <p>En divisant par $z$ (non nul), on obtient $\\overline{z} = \\dfrac{1}{z}$.</p>
                        <p>Réciproquement, si $\\overline{z} = \\dfrac{1}{z}$, alors $z\\overline{z} = 1$, donc $|z|^2 = 1$, soit $|z| = 1$ (car $|z| \\ge 0$).</p>
                        <p><strong>Conclusion :</strong> $|z| = 1 \\iff \\overline{z} = \\dfrac{1}{z}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 7 : p15 – Ensemble |(1+i)z| = 3
        // ============================================================
        {
            numero: 7,
            enonce: `<p>Le plan est muni d'un repère orthonormé direct. Déterminer l'ensemble des points $M$ d'affixe $z$, tels que $|(1+i)z| = 3$.</p>`,
            questions: [
                {
                    id: 'c2-ex7-q1',
                    texte: 'Déterminer l\'ensemble des points M.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise la propriété $|zz'| = |z||z'|$.</p>
                        $$|(1+i)z| = |1+i| \\times |z| = \\sqrt{1^2+1^2} \\times |z| = \\sqrt{2} |z|$$
                        <p>L'équation devient :</p>
                        $$\\sqrt{2} |z| = 3 \\iff |z| = \\dfrac{3}{\\sqrt{2}}$$
                        <p>Donc $OM = \\dfrac{3}{\\sqrt{2}}$.</p>
                        <p><strong>Résultat :</strong> L'ensemble est le <strong>cercle</strong> de centre $O$ et de rayon $\\dfrac{3}{\\sqrt{2}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 8 : p33 – Quadrilatère ABCD
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>Placer dans le plan, les points $A$, $B$, $C$ et $D$ d'affixes respectives :</p>
                $$z_A = -2 + i, \\quad z_B = 4i, \\quad z_C = \\dfrac{7}{2} + 2i, \\quad z_D = \\dfrac{3}{2} - i.$$
                <p>Quelle est la nature du quadrilatère $ABCD$ ?</p>
            `,
            questions: [
                {
                    id: 'c2-ex8-q1',
                    texte: 'Nature du quadrilatère ABCD.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On calcule les affixes des milieux des diagonales.</p>
                        <p>Milieu de $[AC]$ :</p>
                        $$z_{I_1} = \\dfrac{z_A + z_C}{2} = \\dfrac{(-2+i) + (\\frac{7}{2}+2i)}{2} = \\dfrac{(-\\frac{4}{2}+\\frac{7}{2}) + (i+2i)}{2} = \\dfrac{\\frac{3}{2} + 3i}{2} = \\dfrac{3}{4} + \\dfrac{3}{2}i$$
                        <p>Milieu de $[BD]$ :</p>
                        $$z_{I_2} = \\dfrac{z_B + z_D}{2} = \\dfrac{4i + (\\frac{3}{2}-i)}{2} = \\dfrac{\\frac{3}{2} + 3i}{2} = \\dfrac{3}{4} + \\dfrac{3}{2}i$$
                        <p>Les diagonales ont le même milieu. Donc $ABCD$ est un <strong>parallélogramme</strong>.</p>
                        <p>Vérifions si c'est un losange (côtés égaux) :</p>
                        $$AB = |z_B - z_A| = |4i - (-2+i)| = |2 + 3i| = \\sqrt{4+9} = \\sqrt{13}$$
                        $$BC = |z_C - z_B| = |(\\frac{7}{2}+2i) - 4i| = |\\frac{7}{2} - 2i| = \\sqrt{\\frac{49}{4} + 4} = \\sqrt{\\frac{65}{4}} = \\dfrac{\\sqrt{65}}{2}$$
                        <p>$AB \\neq BC$, donc ce n'est pas un losange.</p>
                        <p><strong>Résultat :</strong> $ABCD$ est un <strong>parallélogramme</strong> (non losange, non rectangle).</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 9 : p33 – Ensemble avec conjugué |\overline{z} - 1 + 2i| = 3
        // ============================================================
        {
            numero: 9,
            enonce: `
                <p>Déterminer et représenter l'ensemble $E$ des points $M$ d'affixe $z$ tels que :</p>
                $$|\\overline{z} - 1 + 2i| = 3.$$
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez $|\\overline{z}| = |z|$.</div>
            `,
            questions: [
                {
                    id: 'c2-ex9-q1',
                    texte: 'Déterminer l\'ensemble $E$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On réécrit l'expression :</p>
                        $$|\\overline{z} - 1 + 2i| = |\\overline{z} - (1 - 2i)|$$
                        <p>Or $1 - 2i = \\overline{1+2i}$.</p>
                        <p>On a $|\\overline{z} - \\overline{1+2i}| = |\\overline{z - (1+2i)}|$.</p>
                        <p>Comme $|\\overline{w}| = |w|$ pour tout complexe $w$, on a :</p>
                        $$|\\overline{z - (1+2i)}| = |z - (1+2i)|$$
                        <p>L'équation devient :</p>
                        $$|z - (1+2i)| = 3$$
                        <p>Soit $A$ le point d'affixe $1+2i$ (coordonnées $(1,2)$).</p>
                        <p>L'égalité signifie $AM = 3$.</p>
                        <p><strong>Résultat :</strong> $E$ est le <strong>cercle</strong> de centre $A(1,2)$ et de rayon $3$.</p>
                    `
                }
            ]
        }
    ]
});