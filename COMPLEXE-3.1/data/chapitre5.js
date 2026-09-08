// data/chapitre5.js – Équations complexes et racines n-ièmes (VERSION ENRICHIE)
// ==========================================================================
// Contient 8 exercices mêlant calculs algébriques (Ch1), module/géométrie (Ch2),
// argument (Ch3), trigonométrie (Ch4) et équations complexes (Ch5)

data.chapitres.push({
    id: 5,
    titre: "Équations complexes, racines n-ièmes et polynômes",
    resume: `
        <p>Résolution d'équations dans $\\mathbb{C}$ en utilisant tous les outils des chapitres précédents.</p>
        <ul>
            <li><strong>Racines n-ièmes de l'unité :</strong> $z_k = e^{2ik\\pi/n}$.</li>
            <li><strong>Racines n-ièmes de $a$ :</strong> $z_k = r e^{i(\\theta/n + 2k\\pi/n)}$.</li>
            <li><strong>Équation du second degré :</strong> $az^2+bz+c=0$ avec $\\Delta = b^2-4ac$.</li>
            <li><strong>Factorisation :</strong> Si $z_0$ est racine de $P(z)$, alors $P(z) = (z-z_0)Q(z)$.</li>
        </ul>
        <p><em>Ce chapitre synthétise l'algèbre (Ch1), la géométrie (Ch2), l'argument (Ch3) et la trigonométrie (Ch4) pour résoudre des équations complexes.</em></p>
    `,
    rappel: `
        <div class="theoreme-block">
            <h4>📘 Racines n-ièmes de l'unité (Ch5)</h4>
            <p>Les solutions de $z^n = 1$ sont :</p>
            $$z_k = e^{\\frac{2ik\\pi}{n}}, \\quad k = 0, 1, \\ldots, n-1.$$
            <p>Les points images forment un polygone régulier à $n$ côtés (Ch2).</p>
        </div>
        <div class="theoreme-block">
            <h4>📘 Racines n-ièmes d'un complexe $a$ (Ch5)</h4>
            <p>Soit $a = |a| e^{i\\theta}$ (Ch3). Les solutions de $z^n = a$ sont :</p>
            $$z_k = \\sqrt[n]{|a|} \\, e^{i(\\frac{\\theta}{n} + \\frac{2k\\pi}{n})}, \\quad k = 0, 1, \\ldots, n-1.$$
        </div>
        <div class="theoreme-block">
            <h4>📘 Équation du second degré (Ch5)</h4>
            <p>Pour $az^2+bz+c=0$ ($a \\neq 0$) :</p>
            <p>On pose $\\Delta = b^2 - 4ac$ (calcul avec Ch1).</p>
            <p>Si $\\delta$ est une racine carrée de $\\Delta$ (méthode Ch1), les solutions sont :</p>
            $$z_1 = \\dfrac{-b + \\delta}{2a}, \\quad z_2 = \\dfrac{-b - \\delta}{2a}.$$
        </div>
        <div class="theoreme-block">
            <h4>📘 Factorisation (Ch5)</h4>
            <p>Si $z_0$ est racine de $P(z)$, alors $P(z) = (z-z_0)Q(z)$.</p>
            <p>On utilise la division euclidienne (Ch1) pour trouver $Q$.</p>
        </div>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Somme et produit des racines (Ch5) :</strong>
            <p>Pour $az^2+bz+c=0$ : $z_1+z_2 = -\\dfrac{b}{a}$, $z_1 z_2 = \\dfrac{c}{a}$.</p>
        </div>
        <div class="theoreme-block">
            <strong>Racines carrées d'un complexe (Ch1 + Ch5) :</strong>
            <p>On cherche $(x+iy)^2 = a+ib$.</p>
            <p>Système (Ch1) : $x^2 - y^2 = a$, $2xy = b$, $x^2+y^2 = \\sqrt{a^2+b^2}$ (Ch2).</p>
        </div>
        <div class="theoreme-block">
            <strong>Lien avec la géométrie (Ch2 + Ch5) :</strong>
            <ul>
                <li>Les racines $n$-ièmes de $a$ sont les sommets d'un polygone régulier (Ch2).</li>
                <li>Le rapport $\\dfrac{z_2 - z_1}{z_3 - z_1}$ permet de caractériser la nature du triangle (Ch2).</li>
            </ul>
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>📝 Résoudre $z^n = a$ (Ch3 + Ch5) :</strong>
            <ol>
                <li>Mettre $a$ sous forme exponentielle : $a = r e^{i\\theta}$ (Ch3).</li>
                <li>Les solutions sont $z_k = \\sqrt[n]{r} e^{i(\\theta/n + 2k\\pi/n)}$.</li>
            </ol>
        </div>
        <div class="method-box">
            <strong>📝 Résoudre $az^2+bz+c=0$ (Ch1 + Ch5) :</strong>
            <ol>
                <li>Calculer $\\Delta = b^2 - 4ac$ (Ch1).</li>
                <li>Déterminer une racine carrée $\\delta$ de $\\Delta$ (méthode Ch1).</li>
                <li>Appliquer la formule.</li>
            </ol>
        </div>
        <div class="method-box">
            <strong>📝 Trouver une racine évidente (Ch1 + Ch5) :</strong>
            <p>Pour un polynôme de degré $\\ge 3$, tester $1$, $-1$, $i$, $-i$, ou des entiers simples.</p>
            <p>Utiliser le théorème de factorisation (Ch5).</p>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 $j = e^{2i\\pi/3} = \\dfrac{-1+i\\sqrt{3}}{2}$ vérifie $1+j+j^2=0$ et $j^3=1$ (Ch3 + Ch5).</div>
        <div class="astuce-box">💡 Si $z$ est racine de $P$ à coefficients réels, alors $\\overline{z}$ est aussi racine (Ch1 + Ch5).</div>
        <div class="astuce-box">💡 Pour résoudre $z^4 = -1$, mettez $-1$ sous forme exponentielle (Ch3) puis appliquez la formule (Ch5).</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Dans $\\mathbb{C}$, il n'y a pas de "signe" de $\\Delta$ comme dans $\\mathbb{R}$ (Ch1 + Ch5). On parle toujours de racines carrées.</div>
        <div class="erreur-box">⚠️ L'équation $z^4 = z^2$ n'est pas équivalente à $z^2 = 1$ (car $z=0$ est aussi solution) (Ch1 + Ch5).</div>
        <div class="erreur-box">⚠️ Pour les racines $n$-ièmes, ne pas oublier le facteur $2k\\pi/n$ (Ch3 + Ch5).</div>
    `,
    quiz: {
        questions: [
            { type: 'qcm', text: 'L’équation $z^2 + z + 1 = 0$ a deux solutions :', options: ['opposées', 'conjuguées', 'confondues'], correct: 1 },
            { type: 'qcm', text: 'L’équation $z^4 = -1$ admet :', options: ['une solution réelle', 'une solution imaginaire', 'quatre solutions distinctes'], correct: 2 },
            { type: 'vrai/faux', text: 'L’équation $z^2 = -3$ n’admet pas de solution dans $\\mathbb{C}$.', correct: 0 },
            { type: 'qcm', text: 'Les solutions de $z^3 = 1$ sont :', options: ['$1, -1, i$', '$1, j, j^2$', '$1, -1, -i$'], correct: 1 }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 : p45 – Équation du second degré complexe (Ch1+Ch5)
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Résoudre dans $\\mathbb{C}$ : $z^2 - (1-i)z + 2 - 2i = 0$.</p>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Calculez $\\Delta$ (Ch1), puis cherchez ses racines carrées en posant $x+iy$ (Ch1 + Ch5).</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Dans $(1-i)^2$, n'oubliez pas le double produit (Ch1).</div>
            `,
            questions: [
                {
                    id: 'c5-ex1-q1',
                    texte: 'Calculer $\\Delta$ et ses racines carrées (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On calcule $\\Delta = b^2 - 4ac$.</p>
                        $$\\Delta = (1-i)^2 - 4(2-2i) = (1 - 2i + i^2) - 8 + 8i = (1 - 2i - 1) - 8 + 8i = -2i - 8 + 8i = -8 + 6i$$
                        <p><em>Étape 2 (Ch1 + Ch5) :</em> On cherche $\\delta = x+iy$ tel que $(x+iy)^2 = -8 + 6i$.</p>
                        <p>Système (Ch1) : $x^2 - y^2 = -8$, $2xy = 6$, $x^2 + y^2 = \\sqrt{(-8)^2 + 6^2} = \\sqrt{100} = 10$ (Ch2).</p>
                        <p>On a : $x^2 = \\dfrac{10 + (-8)}{2} = 1$, $y^2 = \\dfrac{10 - (-8)}{2} = 9$.</p>
                        <p>Donc $x = \\pm 1$, $y = \\pm 3$.</p>
                        <p>$2xy = 6 > 0$, donc $x$ et $y$ ont le même signe.</p>
                        <p>Ainsi $\\delta = 1 + 3i$ ou $\\delta = -1 - 3i$.</p>
                        <p>On prend $\\delta = 1+3i$.</p>
                        <p><strong>Résultat :</strong> $\\Delta = -8 + 6i$, $\\delta = 1+3i$.</p>
                    `
                },
                {
                    id: 'c5-ex1-q2',
                    texte: 'Donner les solutions (Ch5).',
                    solution: `
                        <p><strong>Solution (Ch5) :</strong></p>
                        <p>On applique la formule : $z = \\dfrac{-b \\pm \\delta}{2a}$.</p>
                        $$z_1 = \\dfrac{1-i + (1+3i)}{2} = \\dfrac{2 + 2i}{2} = 1 + i$$
                        $$z_2 = \\dfrac{1-i - (1+3i)}{2} = \\dfrac{-4i}{2} = -2i$$
                        <p><strong>Résultat :</strong> $\\boxed{1 + i}$ et $\\boxed{-2i}$.</p>
                        <p><em>Vérification (Ch5) :</em> $z_1 + z_2 = 1 + i - 2i = 1 - i = -b/a$ (OK).</p>
                        <p>$z_1 \\times z_2 = (1+i)(-2i) = -2i - 2i^2 = -2i + 2 = 2 - 2i = c/a$ (OK).</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 2 : p45 – Racines cubiques de 8i (Ch2+Ch3+Ch5)
        // ============================================================
        {
            numero: 2,
            enonce: `<p>Résoudre dans $\\mathbb{C}$ : $z^3 = 8i$.</p>`,
            astuces_exo: `
                <div class="astuce-box">💡 Mettez $8i$ sous forme exponentielle (Ch3), puis appliquez la formule des racines n-ièmes (Ch5).</div>
            `,
            questions: [
                {
                    id: 'c5-ex2-q1',
                    texte: 'Mettre $8i$ sous forme exponentielle (Ch3).',
                    solution: `
                        <p><strong>Solution (Ch3) :</strong></p>
                        <p>$8i = 8 \\times i = 8 \\times e^{i\\pi/2}$ (car $i = e^{i\\pi/2}$).</p>
                        <p><strong>Résultat :</strong> $8 e^{i\\pi/2}$.</p>
                    `
                },
                {
                    id: 'c5-ex2-q2',
                    texte: 'Donner les solutions (Ch5).',
                    solution: `
                        <p><strong>Solution (Ch5) :</strong></p>
                        <p>On a $r = 8$, $\\sqrt[3]{8} = 2$.</p>
                        <p>$\\theta = \\dfrac{\\pi}{2}$.</p>
                        <p>Les solutions sont :</p>
                        $$z_k = 2 e^{i(\\pi/6 + 2k\\pi/3)}, \\quad k = 0, 1, 2.$$
                        <ul>
                            <li>$k=0$ : $z_0 = 2 e^{i\\pi/6} = 2(\\cos\\pi/6 + i\\sin\\pi/6) = 2(\\dfrac{\\sqrt{3}}{2} + i\\dfrac{1}{2}) = \\sqrt{3} + i$</li>
                            <li>$k=1$ : $z_1 = 2 e^{i(\\pi/6 + 2\\pi/3)} = 2 e^{i(5\\pi/6)} = 2(-\\dfrac{\\sqrt{3}}{2} + i\\dfrac{1}{2}) = -\\sqrt{3} + i$</li>
                            <li>$k=2$ : $z_2 = 2 e^{i(\\pi/6 + 4\\pi/3)} = 2 e^{i(3\\pi/2)} = 2(0 - i) = -2i$</li>
                        </ul>
                        <p><strong>Résultat :</strong> $\\boxed{\\sqrt{3}+i}$, $\\boxed{-\\sqrt{3}+i}$, $\\boxed{-2i}$.</p>
                        <p><em>Vérification (Ch2) :</em> Les points images sont sur le cercle de centre O et de rayon 2. Les arguments sont $\\pi/6$, $5\\pi/6$, $3\\pi/2$ (espacés de $2\\pi/3$).</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 3 : p45 – Factorisation avec racine évidente (Ch1+Ch5)
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Résoudre dans $\\mathbb{C}$ : $z^3 - (3+4i)z^2 - 4(1-3i)z + 12 = 0$.</p>
                <p><em>Indication :</em> L'équation admet une racine réelle (Ch1 + Ch5).</p>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Testez les diviseurs de 12 (Ch1) pour trouver la racine réelle.</div>
            `,
            questions: [
                {
                    id: 'c5-ex3-q1',
                    texte: 'Trouver la racine réelle (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p>On teste les diviseurs de 12 (constante du polynôme) : $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$.</p>
                        <p>Testons $z=3$ (Ch1) :</p>
                        $$3^3 - (3+4i) \\times 9 - 4(1-3i) \\times 3 + 12 = 27 - 27 - 36i - 12 + 36i + 12 = 0$$
                        <p>Donc $z_0 = 3$ est racine.</p>
                        <p><strong>Résultat :</strong> $\\boxed{3}$.</p>
                    `
                },
                {
                    id: 'c5-ex3-q2',
                    texte: 'Factoriser et résoudre (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p>On effectue la division euclidienne du polynôme par $(z-3)$ (Ch1).</p>
                        $$(z^3 - (3+4i)z^2 - 4(1-3i)z + 12) \\div (z-3) = z^2 - 4i z + 4$$
                        <p>Vérification (Ch1) : $(z-3)(z^2 - 4i z + 4)$ redonne le polynôme.</p>
                        <p>On résout $z^2 - 4i z + 4 = 0$ (Ch5).</p>
                        <p>$\\Delta = (-4i)^2 - 16 = -16 - 16 = -32$ (Ch1).</p>
                        <p>Racines carrées de $-32$ (Ch1 + Ch5) : $\\delta = 4i\\sqrt{2}$ et $-4i\\sqrt{2}$.</p>
                        <p>$$z = \\dfrac{4i \\pm 4i\\sqrt{2}}{2} = 2i(1 \\pm \\sqrt{2})$$</p>
                        <p><strong>Résultat :</strong> $\\boxed{3}$, $\\boxed{2i(1+\\sqrt{2})}$, $\\boxed{2i(1-\\sqrt{2})}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 4 : p46 – z³ = 2 + 11i (racine évidente) (Ch1+Ch2+Ch3+Ch5)
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Résoudre dans $\\mathbb{C}$ l'équation : $z^3 = 2 + 11i$.</p>
                <p><em>Indication :</em> $z_0 = 2 + i$ est une solution.</p>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Vérifiez que $(2+i)^3 = 2 + 11i$ (Ch1), puis utilisez les racines cubiques de l'unité (Ch5).</div>
            `,
            questions: [
                {
                    id: 'c5-ex4-q1',
                    texte: 'Vérifier que $z_0 = 2+i$ est solution (Ch1).',
                    solution: `
                        <p><strong>Solution (Ch1) :</strong></p>
                        $$(2+i)^3 = (2+i)^2(2+i) = (4 + 4i + i^2)(2+i) = (3+4i)(2+i)$$
                        $$= 6 + 3i + 8i + 4i^2 = 6 + 11i - 4 = 2 + 11i$$
                        <p>Donc $z_0 = 2+i$ est bien une solution.</p>
                    `
                },
                {
                    id: 'c5-ex4-q2',
                    texte: 'Donner toutes les solutions (Ch5).',
                    solution: `
                        <p><strong>Solution (Ch5) :</strong></p>
                        <p>Si $z_0$ est une solution de $z^3 = a$, alors toutes les solutions sont $z_0 \\times \\omega$ où $\\omega$ est une racine cubique de l'unité (Ch5).</p>
                        <p>Les racines cubiques de l'unité sont $1$, $j = e^{2i\\pi/3} = \\dfrac{-1+i\\sqrt{3}}{2}$, et $j^2 = \\dfrac{-1-i\\sqrt{3}}{2}$ (Ch3 + Ch5).</p>
                        <p>Donc :</p>
                        $$z_1 = 2+i$$
                        $$z_2 = (2+i) \\times j = (2+i) \\times \\dfrac{-1+i\\sqrt{3}}{2} = \\dfrac{-(2+i) + i\\sqrt{3}(2+i)}{2} = \\dfrac{-2 - i + 2i\\sqrt{3} + i^2\\sqrt{3}}{2}$$
                        $$= \\dfrac{-2 - i + 2i\\sqrt{3} - \\sqrt{3}}{2} = \\dfrac{-(2+\\sqrt{3}) + i(2\\sqrt{3}-1)}{2}$$
                        $$z_3 = (2+i) \\times j^2 = (2+i) \\times \\dfrac{-1-i\\sqrt{3}}{2} = \\dfrac{-(2+i) - i\\sqrt{3}(2+i)}{2} = \\dfrac{-2 - i - 2i\\sqrt{3} - i^2\\sqrt{3}}{2}$$
                        $$= \\dfrac{-2 - i - 2i\\sqrt{3} + \\sqrt{3}}{2} = \\dfrac{(\\sqrt{3}-2) - i(1+2\\sqrt{3})}{2}$$
                        <p><strong>Résultat :</strong> $\\boxed{2+i}$, $\\boxed{\\dfrac{-(2+\\sqrt{3}) + i(2\\sqrt{3}-1)}{2}}$, $\\boxed{\\dfrac{(\\sqrt{3}-2) - i(1+2\\sqrt{3})}{2}}$.</p>
                    `
                }
            ]
        },

        //   ============================================================
// EXERCICE 5 : p46 – Équation z² - 2z + 1 + a² = 0 (Ch1+Ch2+Ch3+Ch5)
// ============================================================
{
    numero: 5,
    enonce: `
        <p>Soit $a$ un nombre complexe non nul et l'équation</p>
        $$z^2 - 2z + 1 + a^2 = 0.$$
        <ol>
            <li>Résoudre dans $\\mathbb{C}$ l'équation.</li>
            <li>On considère les points $A$ et $B$ d'affixes respectives $1 + ia$ et $1 - ia$.</li>
        </ol>
        <p>On pose $a = a_1 + ia_2$, où $a_1$ et $a_2$ sont des réels.</p>
        <ol start="2">
            <li>a. Montrer que les points $O, A$ et $B$ sont alignés, si et seulement si, $a_1 = 0$.</li>
            <li>b. Montrer que les vecteurs $\\overrightarrow{OA}$ et $\\overrightarrow{OB}$ sont orthogonaux, si et seulement si, $|a| = 1$.</li>
        </ol>
        <ol start="3">
            <li>On suppose que $a = e^{i\\alpha}$, où $\\alpha \\in \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$.</li>
            <li>a. Vérifier que pour tout réel $x$, $1 + e^{ix} = 2\\cos\\dfrac{x}{2} e^{i\\frac{x}{2}}$ et $1 - e^{ix} = -2i\\sin\\dfrac{x}{2} e^{i\\frac{x}{2}}$.</li>
            <li>b. En déduire l'écriture sous forme exponentielle de chacun des nombres complexes $1 + ia$ et $1 - ia$.</li>
            <li>c. Déterminer $\\alpha$ pour que le triangle $OAB$ soit rectangle isocèle en $O$.</li>
        </ol>
    `,
    astuces_exo: `
        <div class="astuce-box">💡 L'équation se factorise en $(z-1)^2 = -a^2$ (Ch5).</div>
        <div class="astuce-box">💡 Pour l'alignement, utilisez le rapport $\\dfrac{z_A}{z_B}$ (Ch2).</div>
        <div class="astuce-box">💡 Pour l'orthogonalité, utilisez le fait que le rapport doit être imaginaire pur (Ch2).</div>
        <div class="astuce-box">💡 Pour la forme exponentielle, appliquez les formules du 3.a avec $x = \\alpha \\pm \\dfrac{\\pi}{2}$.</div>
        <div class="astuce-box">💡 Pour le triangle isocèle rectangle en O, il faut $OA = OB$ et $\\overrightarrow{OA} \\perp \\overrightarrow{OB}$ (Ch2).</div>
    `,
    erreurs_exo: `
        <div class="erreur-box">⚠️ Ne pas confondre $\\dfrac{z_A}{z_B} \\in \\mathbb{R}$ avec $\\dfrac{z_A}{z_B} \\in i\\mathbb{R}$ pour l'orthogonalité (Ch2).</div>
        <div class="erreur-box">⚠️ $1+ia$ et $1-ia$ ne sont pas conjugués si $a$ est complexe. Le conjugué de $1+ia$ est $1 - i\\overline{a}$ (Ch1).</div>
        <div class="erreur-box">⚠️ Pour l'égalité des modules $OA = OB$, il faut $\\cos\\left(\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4}\\right) = \\cos\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right)$, ce qui n'est vrai que pour $\\alpha = 0$ dans l'intervalle donné.</div>
    `,
    questions: [
        {
            id: 'c5-ex5-q1',
            texte: 'Résoudre l\'équation $z^2 - 2z + 1 + a^2 = 0$ dans $\\mathbb{C}$ (Ch5).',
            solution: `
                <p><strong>Solution (Ch5) :</strong></p>
                <p><em>Étape 1 (Ch1) :</em> On remarque que $z^2 - 2z + 1 = (z-1)^2$.</p>
                <p>L'équation devient :</p>
                $$(z-1)^2 + a^2 = 0 \\iff (z-1)^2 = -a^2$$
                <p><em>Étape 2 (Ch5) :</em> On prend la racine carrée complexe.</p>
                $$z-1 = \\pm i a \\quad (\\text{car } (ia)^2 = i^2 a^2 = -a^2)$$
                <p>Donc :</p>
                $$z = 1 + ia \\quad \\text{et} \\quad z = 1 - ia$$
                <p><strong>Résultat :</strong> Les deux solutions sont $\\boxed{1 + ia}$ et $\\boxed{1 - ia}$.</p>
                <p><em>Remarque :</em> Ce sont exactement les affixes des points $A$ et $B$ donnés dans l'énoncé.</p>
            `
        },
        {
            id: 'c5-ex5-q2',
            texte: 'Montrer que $O, A, B$ sont alignés ssi $a_1 = 0$ (Ch2).',
            solution: `
                <p><strong>Solution (Ch2) :</strong></p>
                <p>On a $O(0)$, $A(1+ia)$ et $B(1-ia)$.</p>
                <p>Les points $O, A, B$ sont alignés ssi $\\dfrac{z_A}{z_B} \\in \\mathbb{R}$ (Ch2).</p>
                <p>On calcule :</p>
                $$\\dfrac{1+ia}{1-ia} = \\dfrac{(1+ia)(1+i\\overline{a})}{(1-ia)(1+i\\overline{a})} = \\dfrac{1 + i\\overline{a} + ia + i^2 a\\overline{a}}{|1-ia|^2} = \\dfrac{1 - |a|^2 + i(a + \\overline{a})}{|1-ia|^2}$$
                <p>En posant $a = a_1 + ia_2$, on a $a + \\overline{a} = 2a_1$ et $|a|^2 = a_1^2 + a_2^2$.</p>
                <p>Donc :</p>
                $$\\dfrac{1+ia}{1-ia} = \\dfrac{1 - (a_1^2 + a_2^2) + i(2a_1)}{|1-ia|^2}$$
                <p>Ce nombre est réel ssi sa partie imaginaire est nulle (Ch1) :</p>
                $$\\dfrac{2a_1}{|1-ia|^2} = 0 \\iff a_1 = 0$$
                <p><strong>Conclusion :</strong> $O, A, B$ sont alignés ssi $\\boxed{a_1 = 0}$.</p>
                <p><em>Interprétation géométrique (Ch2) :</em> Si $a_1 = 0$, alors $a$ est imaginaire pur, donc $A$ et $B$ sont symétriques par rapport à l'axe des ordonnées et alignés avec O.</p>
            `
        },
        {
            id: 'c5-ex5-q3',
            texte: 'Montrer que $\\overrightarrow{OA} \\perp \\overrightarrow{OB}$ ssi $|a| = 1$ (Ch2).',
            solution: `
                <p><strong>Solution (Ch2) :</strong></p>
                <p>$\\overrightarrow{OA}$ et $\\overrightarrow{OB}$ sont orthogonaux ssi $\\dfrac{z_A}{z_B}$ est imaginaire pur (Ch2).</p>
                <p>D'après le calcul précédent :</p>
                $$\\dfrac{1+ia}{1-ia} = \\dfrac{1 - |a|^2 + i(a + \\overline{a})}{|1-ia|^2}$$
                <p>Ce nombre est imaginaire pur ssi sa partie réelle est nulle (Ch1).</p>
                <p>La partie réelle est $\\dfrac{1 - |a|^2}{|1-ia|^2}$.</p>
                <p>Donc :</p>
                $$\\dfrac{1 - |a|^2}{|1-ia|^2} = 0 \\iff 1 - |a|^2 = 0 \\iff |a|^2 = 1 \\iff |a| = 1$$
                <p><strong>Conclusion :</strong> $\\overrightarrow{OA} \\perp \\overrightarrow{OB}$ ssi $\\boxed{|a| = 1}$.</p>
            `
        },
        {
            id: 'c5-ex5-q4',
            texte: 'Vérifier les formules trigonométriques pour tout réel $x$ (Ch4).',
            solution: `
                <p><strong>Solution (Ch4) :</strong></p>
                <p>On rappelle les formules d'Euler (Ch4) :</p>
                $$e^{ix} = \\cos x + i\\sin x$$
                <p>Première formule :</p>
                $$1 + e^{ix} = 1 + \\cos x + i\\sin x = 2\\cos\\dfrac{x}{2}\\left(\\cos\\dfrac{x}{2} + i\\sin\\dfrac{x}{2}\\right) = 2\\cos\\dfrac{x}{2} e^{i\\frac{x}{2}}$$
                <p>Deuxième formule :</p>
                $$1 - e^{ix} = 1 - \\cos x - i\\sin x = -2i\\sin\\dfrac{x}{2}\\left(\\cos\\dfrac{x}{2} + i\\sin\\dfrac{x}{2}\\right) = -2i\\sin\\dfrac{x}{2} e^{i\\frac{x}{2}}$$
                <p><strong>Conclusion :</strong> Les formules sont bien vérifiées.</p>
                <p><em>Remarque :</em> Ces formules sont très utiles pour factoriser $1 \\pm e^{ix}$ (Ch4).</p>
            `
        },
        {
            id: 'c5-ex5-q5',
            texte: 'En déduire la forme exponentielle de $1 + ia$ et $1 - ia$ (Ch3 + Ch4).',
            solution: `
                <p><strong>Solution (Ch3 + Ch4) :</strong></p>
                <p>On a $a = e^{i\\alpha}$ avec $\\alpha \\in \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$.</p>
                <p>On écrit :</p>
                $$ia = i e^{i\\alpha} = e^{i\\alpha} \\times e^{i\\pi/2} = e^{i(\\alpha + \\pi/2)}$$
                $$-ia = -i e^{i\\alpha} = e^{i\\alpha} \\times e^{-i\\pi/2} = e^{i(\\alpha - \\pi/2)}$$
                <p>Donc :</p>
                $$1 + ia = 1 + e^{i(\\alpha + \\pi/2)}$$
                $$1 - ia = 1 + e^{i(\\alpha - \\pi/2)}$$
                <p>On applique la formule $1 + e^{ix} = 2\\cos\\dfrac{x}{2} e^{i\\frac{x}{2}}$ avec $x = \\alpha + \\dfrac{\\pi}{2}$ et $x = \\alpha - \\dfrac{\\pi}{2}$.</p>
                <p>Pour $1 + ia$ :</p>
                $$1 + ia = 2\\cos\\left(\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4}\\right) e^{i\\left(\\frac{\\alpha}{2} + \\frac{\\pi}{4}\\right)}$$
                <p>Pour $1 - ia$ :</p>
                $$1 - ia = 2\\cos\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right) e^{i\\left(\\frac{\\alpha}{2} - \\frac{\\pi}{4}\\right)}$$
                <p>Comme $\\alpha \\in \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$, on a $\\dfrac{\\alpha}{2} \\pm \\dfrac{\\pi}{4} \\in \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$, donc les cosinus sont positifs.</p>
                <p><strong>Résultat :</strong></p>
                $$\\boxed{1 + ia = 2\\cos\\left(\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4}\\right) e^{i\\left(\\frac{\\alpha}{2} + \\frac{\\pi}{4}\\right)}}$$
                $$\\boxed{1 - ia = 2\\cos\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right) e^{i\\left(\\frac{\\alpha}{2} - \\frac{\\pi}{4}\\right)}}$$
            `
        },
        {
            id: 'c5-ex5-q6',
            texte: 'Déterminer $\\alpha$ pour que le triangle $OAB$ soit rectangle isocèle en $O$ (Ch2 + Ch3 + Ch4).',
            solution: `
                <p><strong>Solution (Ch2 + Ch3 + Ch4) :</strong></p>
                <p>Le triangle $OAB$ est rectangle isocèle en $O$ si et seulement si :</p>
                <ul>
                    <li><strong>Rectangle en O :</strong> $\\overrightarrow{OA} \\perp \\overrightarrow{OB}$.</li>
                    <li><strong>Isocèle en O :</strong> $OA = OB$.</li>
                </ul>
                <p><em>Étape 1 : Orthogonalité.</em></p>
                <p>D'après la question 2.b, $\\overrightarrow{OA} \\perp \\overrightarrow{OB} \\iff |a| = 1$.</p>
                <p>Comme $a = e^{i\\alpha}$, on a $|a| = 1$ pour tout $\\alpha$. Donc l'orthogonalité est toujours vérifiée.</p>
                <p><em>Étape 2 : Isocèle.</em></p>
                <p>On a $OA = |1+ia|$ et $OB = |1-ia|$.</p>
                <p>En utilisant les formes exponentielles obtenues en 3.b :</p>
                $$OA = 2\\cos\\left(\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4}\\right) \\quad \\text{et} \\quad OB = 2\\cos\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right)$$
                <p>Pour que $OA = OB$, il faut :</p>
                $$\\cos\\left(\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4}\\right) = \\cos\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right)$$
                <p>On résout cette équation trigonométrique (Ch4).</p>
                <p>$\\cos A = \\cos B \\iff A = \\pm B + 2k\\pi, \\ k \\in \\mathbb{Z}$.</p>
                <p>Cas 1 : $\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4} = \\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4} + 2k\\pi \\iff \\dfrac{\\pi}{2} = 2k\\pi \\iff k = \\dfrac{1}{4} \\notin \\mathbb{Z}$ (impossible).</p>
                <p>Cas 2 : $\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4} = -\\left(\\dfrac{\\alpha}{2} - \\dfrac{\\pi}{4}\\right) + 2k\\pi \\iff \\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4} = -\\dfrac{\\alpha}{2} + \\dfrac{\\pi}{4} + 2k\\pi$</p>
                <p>$$\\iff \\alpha = 2k\\pi$$</p>
                <p>Comme $\\alpha \\in \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$, la seule valeur possible est $\\alpha = 0$ (pour $k=0$).</p>
                <p><em>Vérification :</em> Si $\\alpha = 0$, alors $a = 1$, $A(1+i)$, $B(1-i)$.</p>
                <p>$OA = \\sqrt{2}$, $OB = \\sqrt{2}$, donc isocèle. Et $\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 1\\cdot 1 + 1\\cdot(-1) = 0$, donc rectangle.</p>
                <p><strong>Résultat :</strong> $\\boxed{\\alpha = 0}$ est la seule valeur pour laquelle $OAB$ est rectangle isocèle en $O$.</p>
            `
        }
    ]
},
// ============================================================
        // EXERCICE 6 : p46 – z + 4/z = 4cosθ, losange OABC (Ch1+Ch2+Ch3+Ch4+Ch5)
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>Soit $\\theta \\in \\left[0, \\dfrac{\\pi}{2}\\right]$.</p>
                <ol>
                    <li>Résoudre dans $\\mathbb{C}$ l'équation : $z + \\dfrac{4}{z} = 4\\cos\\theta$ (Ch1 + Ch5).</li>
                    <li>Écrire les solutions trouvées sous forme exponentielle (Ch3).</li>
                    <li>Soit A, B et C les points d'affixes respectives $2e^{i\\theta}$, $4\\cos\\theta$ et $2e^{-i\\theta}$. Montrer que pour tout $\\theta$, OABC est un losange (Ch2).</li>
                    <li>Pour quelle valeur de $\\theta$ le quadrilatère OABC est-il un carré ? (Ch2 + Ch4)</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c5-ex6-q1',
                    texte: 'Résoudre $z + 4/z = 4\\cos\\theta$ (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p>On multiplie par $z$ (non nul) : $z^2 - 4\\cos\\theta \\, z + 4 = 0$.</p>
                        <p>On résout cette équation du second degré (Ch5).</p>
                        <p>$\\Delta = (-4\\cos\\theta)^2 - 16 = 16\\cos^2\\theta - 16 = -16\\sin^2\\theta$.</p>
                        <p>Racines carrées de $\\Delta$ (Ch1 + Ch5) : $\\delta = \\pm 4i\\sin\\theta$.</p>
                        <p>Les solutions sont :</p>
                        $$z = \\dfrac{4\\cos\\theta \\pm 4i\\sin\\theta}{2} = 2(\\cos\\theta \\pm i\\sin\\theta) = 2e^{\\pm i\\theta}$$
                        <p><strong>Résultat :</strong> $\\boxed{2e^{i\\theta}}$ et $\\boxed{2e^{-i\\theta}}$.</p>
                    `
                },
                {
                    id: 'c5-ex6-q2',
                    texte: 'Montrer que OABC est un losange (Ch2).',
                    solution: `
                        <p><strong>Solution (Ch2) :</strong></p>
                        <p>On a $z_A = 2e^{i\\theta}$, $z_B = 4\\cos\\theta$, $z_C = 2e^{-i\\theta}$.</p>
                        <p>$z_A + z_C = 2(e^{i\\theta} + e^{-i\\theta}) = 2 \\times 2\\cos\\theta = 4\\cos\\theta = z_B$.</p>
                        <p>Donc $z_B = z_A + z_C$ (Ch1).</p>
                        <p>Ainsi $\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{OC}$ (Ch2).</p>
                        <p>Donc $OABC$ est un <strong>parallélogramme</strong> (Ch2).</p>
                        <p>De plus, $OA = |z_A| = 2$, $OC = |z_C| = 2$, donc $OA = OC$.</p>
                        <p>Un parallélogramme avec deux côtés consécutifs égaux est un <strong>losange</strong> (Ch2).</p>
                        <p><strong>Conclusion :</strong> $OABC$ est un losange.</p>
                    `
                },
                {
                    id: 'c5-ex6-q3',
                    texte: 'Déterminer $\\theta$ pour que $OABC$ soit un carré (Ch2 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch4) :</strong></p>
                        <p>Un losange est un carré si ses diagonales sont perpendiculaires ou si ses angles sont droits.</p>
                        <p>Dans le parallélogramme $OABC$, les diagonales sont $[OB]$ et $[AC]$.</p>
                        <p>Pour que $OABC$ soit un carré, il faut que $\\overrightarrow{OA} \\perp \\overrightarrow{OC}$ (Ch2).</p>
                        <p>On a $\\overrightarrow{OA}$ d'affixe $z_A = 2e^{i\\theta}$ et $\\overrightarrow{OC}$ d'affixe $z_C = 2e^{-i\\theta}$.</p>
                        <p>Condition d'orthogonalité (Ch2) : $\\arg(z_A) - \\arg(z_C) \\equiv \\pm \\dfrac{\\pi}{2} \\ [\\pi]$.</p>
                        <p>$\\arg(z_A) = \\theta$, $\\arg(z_C) = -\\theta$.</p>
                        <p>Donc $\\theta - (-\\theta) = 2\\theta \\equiv \\pm \\dfrac{\\pi}{2} \\ [\\pi]$.</p>
                        <p>Comme $\\theta \\in [0, \\pi/2]$, on a $2\\theta \\in [0, \\pi]$.</p>
                        <p>Les solutions dans cet intervalle : $2\\theta = \\pi/2 \\iff \\theta = \\pi/4$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\theta = \\dfrac{\\pi}{4}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 7 : p46 – z² + (1-2i)z - 2i = 0, ensemble de points (Ch1+Ch2+Ch3+Ch5)
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>Résoudre dans $\\mathbb{C}$ l'équation : $z^2 + (1-2i)z - 2i = 0$.</p>
                <p>Soit $\\theta \\in [0, 2\\pi[$. On considère l'équation :</p>
                $$E_\\theta : z^2 + (1 - 2e^{i\\theta})z - 2e^{i\\theta} = 0.$$
                <p>On désigne par $z_1$ la solution indépendante de $\\theta$ et par $z_2$ l'autre solution.</p>
                <p>Soit $A$ et $M$ les points d'affixes $z_1$ et $z_2$, et $I$ le milieu de $[AM]$.</p>
                <ol>
                    <li>Déterminer $z_1$ (Ch5).</li>
                    <li>Vérifier que pour tout $\\theta$, $z_I + 0.5 = e^{i\\theta}$ (Ch1 + Ch5).</li>
                    <li>Déterminer l'ensemble des points $I$ lorsque $\\theta$ varie dans $[0, 2\\pi[$ (Ch2 + Ch3).</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c5-ex7-q1',
                    texte: 'Résoudre $z^2 + (1-2i)z - 2i = 0$ (Ch5).',
                    solution: `
                        <p><strong>Solution (Ch5) :</strong></p>
                        <p>$\\Delta = (1-2i)^2 - 4(-2i) = 1 - 4i + 4i^2 + 8i = 1 - 4i - 4 + 8i = -3 + 4i$.</p>
                        <p>Racines carrées de $-3+4i$ (Ch1 + Ch5) : $(1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i - 4 = -3 + 4i$.</p>
                        <p>Donc $\\delta = 1+2i$.</p>
                        <p>$$z = \\dfrac{-(1-2i) \\pm (1+2i)}{2} = \\dfrac{-1+2i \\pm (1+2i)}{2}$$</p>
                        <p>$$z_1 = \\dfrac{-1+2i + 1+2i}{2} = \\dfrac{4i}{2} = 2i$$</p>
                        <p>$$z_2 = \\dfrac{-1+2i - 1-2i}{2} = \\dfrac{-2}{2} = -1$$</p>
                        <p><strong>Résultat :</strong> Les solutions sont $\\boxed{2i}$ et $\\boxed{-1}$.</p>
                    `
                },
                {
                    id: 'c5-ex7-q2',
                    texte: 'Déterminer $z_1$ (solution indépendante de $\\theta$) pour $E_\\theta$ (Ch5).',
                    solution: `
                        <p><strong>Solution (Ch5) :</strong></p>
                        <p>On remarque que $z = -1$ est solution de $E_\\theta$ (car $1 - (1-2e^{i\\theta}) - 2e^{i\\theta} = 0$).</p>
                        <p>Donc $z_1 = -1$.</p>
                        <p>L'autre solution $z_2$ est obtenue par la somme des racines : $z_1 + z_2 = -(1 - 2e^{i\\theta}) = -1 + 2e^{i\\theta}$.</p>
                        <p>Donc $z_2 = -1 + 2e^{i\\theta} - z_1 = -1 + 2e^{i\\theta} - (-1) = 2e^{i\\theta}$.</p>
                        <p><strong>Résultat :</strong> $z_1 = -1$, $z_2 = 2e^{i\\theta}$.</p>
                    `
                },
                {
                    id: 'c5-ex7-q3',
                    texte: 'Vérifier que $z_I + 0.5 = e^{i\\theta}$ (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p>Le milieu $I$ de $[AM]$ a pour affixe (Ch2) :</p>
                        $$z_I = \\dfrac{z_1 + z_2}{2} = \\dfrac{-1 + 2e^{i\\theta}}{2} = -\\dfrac{1}{2} + e^{i\\theta}$$
                        <p>Donc $z_I + \\dfrac{1}{2} = e^{i\\theta}$.</p>
                        <p><strong>Conclusion :</strong> $\\boxed{z_I + 0.5 = e^{i\\theta}}$.</p>
                    `
                },
                {
                    id: 'c5-ex7-q4',
                    texte: 'Déterminer l\'ensemble des points $I$ (Ch2 + Ch3).',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch3) :</strong></p>
                        <p>On a $z_I - \\left(-\\dfrac{1}{2}\\right) = e^{i\\theta}$.</p>
                        <p>Donc $|z_I + 0.5| = |e^{i\\theta}| = 1$.</p>
                        <p>Soit $\\Omega$ le point d'affixe $-0.5$. Alors $\\Omega I = 1$.</p>
                        <p>Lorsque $\\theta$ varie dans $[0, 2\\pi[$, $I$ décrit le <strong>cercle</strong> de centre $\\Omega\\left(-\\dfrac{1}{2}, 0\\right)$ et de rayon 1.</p>
                        <p><strong>Résultat :</strong> $I$ décrit le cercle de centre $\\Omega\\left(-\\dfrac{1}{2}, 0\\right)$ et de rayon 1.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 8 : p47 – z⁶ = -1, factorisation (Ch1+Ch3+Ch5)
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>Résoudre dans $\\mathbb{C}$ l'équation : $z^6 = -1$.</p>
                <p>Mettre le polynôme $x^6 + 1$ sous la forme d'un produit de trois polynômes du second degré à coefficients réels (Ch1 + Ch5).</p>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Mettez $-1$ sous forme exponentielle (Ch3), puis appliquez la formule des racines n-ièmes (Ch5).</div>
                <div class="astuce-box">💡 Associez les racines conjuguées pour obtenir des facteurs réels (Ch1 + Ch5).</div>
            `,
            questions: [
                {
                    id: 'c5-ex8-q1',
                    texte: 'Résoudre $z^6 = -1$ (Ch3 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch3 + Ch5) :</strong></p>
                        <p>On a $-1 = e^{i\\pi}$ (Ch3).</p>
                        <p>Les solutions sont (Ch5) :</p>
                        $$z_k = e^{i(\\pi/6 + 2k\\pi/6)} = e^{i(\\pi/6 + k\\pi/3)}, \\quad k = 0, 1, 2, 3, 4, 5.$$
                        <ul>
                            <li>$k=0$ : $z_0 = e^{i\\pi/6} = \\cos\\pi/6 + i\\sin\\pi/6 = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}i$</li>
                            <li>$k=1$ : $z_1 = e^{i(\\pi/6 + \\pi/3)} = e^{i\\pi/2} = i$</li>
                            <li>$k=2$ : $z_2 = e^{i(\\pi/6 + 2\\pi/3)} = e^{i5\\pi/6} = -\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}i$</li>
                            <li>$k=3$ : $z_3 = e^{i(\\pi/6 + \\pi)} = e^{i7\\pi/6} = -\\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}i$</li>
                            <li>$k=4$ : $z_4 = e^{i(\\pi/6 + 4\\pi/3)} = e^{i3\\pi/2} = -i$</li>
                            <li>$k=5$ : $z_5 = e^{i(\\pi/6 + 5\\pi/3)} = e^{i11\\pi/6} = \\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}i$</li>
                        </ul>
                        <p><strong>Résultat :</strong> Les 6 solutions sont $\\boxed{\\pm\\dfrac{\\sqrt{3}}{2} \\pm \\dfrac{1}{2}i}$ et $\\boxed{\\pm i}$.</p>
                    `
                },
                {
                    id: 'c5-ex8-q2',
                    texte: 'Factoriser $x^6 + 1$ en produit de trois polynômes du second degré à coefficients réels (Ch1 + Ch5).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch5) :</strong></p>
                        <p>On associe les racines conjuguées (Ch1) :</p>
                        <ul>
                            <li>$z_0 = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}i$ et $z_5 = \\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}i$ sont conjuguées.</li>
                            <li>$z_1 = i$ et $z_4 = -i$ sont conjuguées.</li>
                            <li>$z_2 = -\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}i$ et $z_3 = -\\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}i$ sont conjuguées.</li>
                        </ul>
                        <p>Pour chaque paire de racines conjuguées $\\alpha$ et $\\overline{\\alpha}$, on a le facteur réel (Ch1) :</p>
                        $$(x - \\alpha)(x - \\overline{\\alpha}) = x^2 - 2\\Re(\\alpha)x + |\\alpha|^2$$
                        <p>Premier facteur (racines $\\dfrac{\\sqrt{3}}{2} \\pm \\dfrac{1}{2}i$) :</p>
                        $$2\\Re = \\sqrt{3}, \\quad |\\alpha|^2 = \\dfrac{3}{4} + \\dfrac{1}{4} = 1$$
                        $$\\Rightarrow x^2 - \\sqrt{3}x + 1$$
                        <p>Deuxième facteur (racines $\\pm i$) :</p>
                        $$2\\Re = 0, \\quad |i|^2 = 1 \\Rightarrow x^2 + 1$$
                        <p>Troisième facteur (racines $-\\dfrac{\\sqrt{3}}{2} \\pm \\dfrac{1}{2}i$) :</p>
                        $$2\\Re = -\\sqrt{3}, \\quad |\\alpha|^2 = 1 \\Rightarrow x^2 + \\sqrt{3}x + 1$$
                        <p><strong>Résultat :</strong> $\\boxed{x^6 + 1 = (x^2 - \\sqrt{3}x + 1)(x^2 + 1)(x^2 + \\sqrt{3}x + 1)}$.</p>
                        <p><em>Vérification (Ch1) :</em> Le produit des trois polynômes donne bien $x^6 + 1$.</p>
                    `
                }
            ]
        }
    ]
});