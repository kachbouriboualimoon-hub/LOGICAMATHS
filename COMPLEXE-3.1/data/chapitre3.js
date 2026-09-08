// data/chapitre3.js – Argument, formes trigonométrique et exponentielle (VERSION ENRICHIE)
// ====================================================================================
// Contient 8 exercices mêlant calculs algébriques (Ch1), module/géométrie (Ch2) et argument (Ch3)

data.chapitres.push({
    id: 3,
    titre: "Argument et formes trigonométrique/exponentielle",
    resume: `
        <p>L'argument d’un nombre complexe non nul est l'angle orienté que fait le vecteur $\\overrightarrow{OM}$ avec l'axe des abscisses.</p>
        <ul>
            <li><strong>Forme trigonométrique :</strong> $z = r(\\cos\\theta + i\\sin\\theta)$</li>
            <li><strong>Forme exponentielle :</strong> $z = r e^{i\\theta}$</li>
            <li><strong>Propriétés :</strong> $\\arg(zz') = \\arg(z) + \\arg(z')$, $\\arg(z^n) = n\\arg(z)$</li>
        </ul>
    `,
    rappel: `
        <div class="theoreme-block">
            <h4>📘 Argument d'un complexe non nul</h4>
            <p>Soit $z \\neq 0$ et $M$ son image dans le plan complexe.</p>
            <p>Un <strong>argument</strong> de $z$, noté $\\arg(z)$, est une mesure de l'angle orienté $(\\vec{u}, \\overrightarrow{OM})$.</p>
            <p>Si $\\arg(z) = \\theta \\ [2\\pi]$, alors :</p>
            $$\\cos\\theta = \\dfrac{\\Re(z)}{|z|} \\quad \\text{et} \\quad \\sin\\theta = \\dfrac{\\Im(z)}{|z|}.$$
        </div>
        <div class="theoreme-block">
            <h4>📘 Forme trigonométrique</h4>
            <p>Pour $z \\neq 0$, on peut écrire :</p>
            $$z = r(\\cos\\theta + i\\sin\\theta) \\quad \\text{où} \\quad r = |z| \\text{ et } \\theta = \\arg(z) \\ [2\\pi].$$
        </div>
        <div class="theoreme-block">
            <h4>📘 Forme exponentielle</h4>
            <p>Grâce à la formule d'Euler : $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.</p>
            <p>On a :</p>
            $$z = r e^{i\\theta} \\quad \\text{avec} \\quad r = |z| \\text{ et } \\theta = \\arg(z) \\ [2\\pi].$$
        </div>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Propriétés de l'argument :</strong>
            <ul>
                <li>$\\arg(zz') \\equiv \\arg(z) + \\arg(z') \\ [2\\pi]$ (produit)</li>
                <li>$\\arg\\left(\\dfrac{z}{z'}\\right) \\equiv \\arg(z) - \\arg(z') \\ [2\\pi]$ (quotient)</li>
                <li>$\\arg(z^n) \\equiv n \\arg(z) \\ [2\\pi]$ (puissance)</li>
                <li>$\\arg(\\overline{z}) \\equiv -\\arg(z) \\ [2\\pi]$ (conjugué)</li>
                <li>$\\arg(-z) \\equiv \\pi + \\arg(z) \\ [2\\pi]$ (opposé)</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Multiplication par un réel :</strong>
            <ul>
                <li>Si $k > 0$, $\\arg(kz) \\equiv \\arg(z)$</li>
                <li>Si $k < 0$, $\\arg(kz) \\equiv \\pi + \\arg(z)$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <strong>Égalité des formes exponentielles :</strong>
            <p>$r e^{i\\theta} = r' e^{i\\theta'} \\iff r = r'$ et $\\theta \\equiv \\theta' \\ [2\\pi]$.</p>
        </div>
        <div class="theoreme-block">
            <strong>Lien avec la géométrie (Ch2) :</strong>
            <ul>
                <li>$\\arg\\left(\\dfrac{z_B - z_A}{z_C - z_A}\\right)$ est l'angle $\\widehat{BAC}$.</li>
                <li>$\\arg(z) = 0 \\ [2\\pi]$ : demi-droite $[Ox)$.</li>
                <li>$\\arg(z) = \\pi \\ [2\\pi]$ : demi-droite $[Ox')$.</li>
                <li>$\\arg(z) = \\pm \\dfrac{\\pi}{2}$ : axe des ordonnées.</li>
            </ul>
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>📝 Passer de cartésien à exponentiel (Ch1 + Ch3) :</strong>
            <ol>
                <li>Calculer $r = |z| = \\sqrt{a^2+b^2}$ (Ch2).</li>
                <li>Déterminer $\\theta$ tel que $\\cos\\theta = \\dfrac{a}{r}$ et $\\sin\\theta = \\dfrac{b}{r}$.</li>
                <li>Écrire $z = r e^{i\\theta}$.</li>
            </ol>
            <p><em>Exemple :</em> $z = 1+i$ donne $r=\\sqrt{2}$, $\\theta=\\pi/4$, donc $z = \\sqrt{2} e^{i\\pi/4}$.</p>
        </div>
        <div class="method-box">
            <strong>📝 Simplifier un produit/quotient avec l'exponentielle (Ch3) :</strong>
            <p>Mettre chaque facteur sous forme exponentielle, puis utiliser les propriétés des arguments.</p>
            <p><em>Exemple :</em> $(1+i)(\\sqrt{3}-i) = \\sqrt{2} e^{i\\pi/4} \\times 2 e^{-i\\pi/6} = 2\\sqrt{2} e^{i(\\pi/4 - \\pi/6)} = 2\\sqrt{2} e^{i\\pi/12}$.</p>
        </div>
        <div class="method-box">
            <strong>📝 Déterminer un ensemble de points avec un argument (Ch2 + Ch3) :</strong>
            <ul>
                <li>$\\arg(z - z_A) = \\theta$ : demi-droite d'origine $A$ de direction $\\theta$.</li>
                <li>$\\arg\\left(\\dfrac{z - z_A}{z - z_B}\\right) = 0$ : droite $(AB)$ privée de $B$.</li>
                <li>$\\arg\\left(\\dfrac{z - z_A}{z - z_B}\\right) = \\pm \\dfrac{\\pi}{2}$ : cercle de diamètre $[AB]$.</li>
            </ul>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 $i = e^{i\\pi/2}$, $-1 = e^{i\\pi}$, $-i = e^{-i\\pi/2}$.</div>
        <div class="astuce-box">💡 Pour trouver $\\theta$, placez le point dans le plan (Ch2) : si $a>0$ et $b>0$, $\\theta = \\arctan(b/a)$ ; si $a<0$, ajoutez $\\pi$ ; si $b<0$, prenez $-\\arctan(|b|/a)$.</div>
        <div class="astuce-box">💡 Dans un produit de complexes, les modules se multiplient et les arguments s'ajoutent (Ch2 + Ch3).</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ L'argument est défini à $2\\pi$ près. Ne pas oublier le $[2\\pi]$.</div>
        <div class="erreur-box">⚠️ Le module $r$ dans $r e^{i\\theta}$ est <strong>strictement positif</strong> (Ch2).</div>
        <div class="erreur-box">⚠️ Ne pas confondre $\\arg(zz')$ avec $\\arg(z) \\times \\arg(z')$. L'argument s'ajoute, il ne se multiplie pas.</div>
    `,
    quiz: {
        questions: [
            { type: 'qcm', text: 'Un argument de $-3z$ si $\\arg(z)=\\pi/3$ est :', options: ['$-\\pi$', '$-2\\pi/3$', '$-\\pi/3$'], correct: 1 },
            { type: 'vrai/faux', text: '$\\arg(z^2) \\equiv (\\arg(z))^2 \\ [2\\pi]$', correct: 0 },
            { type: 'qcm', text: 'La forme exponentielle de $1+i$ est :', options: ['$\\sqrt{2} e^{i\\pi/4}$', '$\\sqrt{2} e^{i\\pi/3}$', '$2 e^{i\\pi/4}$'], correct: 0 },
            { type: 'vrai/faux', text: 'Si $|z|=1$ et $\\arg(z)=\\pi/4$, alors $z = \\frac{\\sqrt{2}}{2}(1+i)$', correct: 1 }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 : p16 – Écriture trigonométrique d'une fraction
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Déterminer une écriture trigonométrique des nombres complexes suivants :</p>
                <ol>
                    <li>$\\dfrac{2i+2\\sqrt{3}}{4+4i}$</li>
                    <li>$\\dfrac{i}{(1-i)^2}$</li>
                    <li>$\\dfrac{1}{1-i\\tan(\\pi/11)}$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Pour le 1, simplifiez par 2, puis mettez $\\sqrt{3}+i$ et $1+i$ sous forme exponentielle.</div>
                <div class="astuce-box">💡 Pour le 2, calculez d'abord $(1-i)^2$ (Ch1), puis utilisez $1/i = -i$.</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Dans le 2, $(1-i)^2 = -2i$ et non $2i$.</div>
            `,
            questions: [
                {
                    id: 'c3-ex1-q1',
                    texte: 'Écrire $\\dfrac{2i+2\\sqrt{3}}{4+4i}$ sous forme trigonométrique.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On simplifie par 2 :</p>
                        $$\\dfrac{2(i+\\sqrt{3})}{4(1+i)} = \\dfrac{i+\\sqrt{3}}{2(1+i)} = \\dfrac{\\sqrt{3}+i}{2(1+i)}$$
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> On met $\\sqrt{3}+i$ sous forme exponentielle.</p>
                        <p>Module : $|\\sqrt{3}+i| = \\sqrt{3+1} = 2$.</p>
                        <p>Argument : $\\cos\\theta = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\theta = \\dfrac{1}{2}$, donc $\\theta = \\dfrac{\\pi}{6}$.</p>
                        <p>Ainsi $\\sqrt{3}+i = 2 e^{i\\pi/6}$.</p>
                        <p><em>Étape 3 (Ch2 + Ch3) :</em> On met $1+i$ sous forme exponentielle.</p>
                        <p>$|1+i| = \\sqrt{2}$, $\\arg(1+i) = \\dfrac{\\pi}{4}$, donc $1+i = \\sqrt{2} e^{i\\pi/4}$.</p>
                        <p><em>Étape 4 (Ch3) :</em> On remplace et on simplifie :</p>
                        $$\\dfrac{2 e^{i\\pi/6}}{2 \\times \\sqrt{2} e^{i\\pi/4}} = \\dfrac{1}{\\sqrt{2}} e^{i(\\pi/6 - \\pi/4)} = \\dfrac{\\sqrt{2}}{2} e^{-i\\pi/12}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\dfrac{\\sqrt{2}}{2} \\left(\\cos\\dfrac{\\pi}{12} - i\\sin\\dfrac{\\pi}{12}\\right)}$.</p>
                    `
                },
                {
                    id: 'c3-ex1-q2',
                    texte: 'Écrire $\\dfrac{i}{(1-i)^2}$ sous forme trigonométrique.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On calcule $(1-i)^2$.</p>
                        $$(1-i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i$$
                        <p><em>Étape 2 (Ch1) :</em> On remplace :</p>
                        $$\\dfrac{i}{-2i} = -\\dfrac{1}{2}$$
                        <p>Le résultat est un réel négatif.</p>
                        <p><em>Étape 3 (Ch2 + Ch3) :</em> $| -\\dfrac12 | = \\dfrac12$, $\\arg\\left(-\\dfrac12\\right) = \\pi \\ [2\\pi]$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\dfrac12 (\\cos\\pi + i\\sin\\pi) = \\dfrac12 e^{i\\pi}}$.</p>
                        <p><em>Remarque :</em> $-\\dfrac12 = \\dfrac12 e^{i\\pi}$.</p>
                    `
                },
                {
                    id: 'c3-ex1-q3',
                    texte: 'Écrire $\\dfrac{1}{1-i\\tan(\\pi/11)}$ sous forme trigonométrique.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On pose $\\theta = \\dfrac{\\pi}{11}$.</p>
                        <p>On écrit $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$.</p>
                        $$\\dfrac{1}{1-i\\tan\\theta} = \\dfrac{1}{1 - i\\dfrac{\\sin\\theta}{\\cos\\theta}} = \\dfrac{1}{\\dfrac{\\cos\\theta - i\\sin\\theta}{\\cos\\theta}} = \\dfrac{\\cos\\theta}{\\cos\\theta - i\\sin\\theta}$$
                        <p><em>Étape 2 (Ch3) :</em> On reconnaît $\\cos\\theta - i\\sin\\theta = \\cos(-\\theta) + i\\sin(-\\theta) = e^{-i\\theta}$.</p>
                        <p>Donc :</p>
                        $$\\dfrac{\\cos\\theta}{e^{-i\\theta}} = \\cos\\theta \\, e^{i\\theta}$$
                        <p><em>Étape 3 (Ch2 + Ch3) :</em> $\\cos\\theta > 0$ (car $\\theta = \\pi/11 \\in ]0,\\pi/2[$).</p>
                        <p>Donc le module est $\\cos\\theta$ et l'argument est $\\theta$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\cos\\left(\\dfrac{\\pi}{11}\\right) e^{i\\pi/11}}$.</p>
                    `
                }
            ]
        },

        //  ============================================================
// EXERCICE 2 : p16 – Cercle, points et nature du quadrilatère (CORRIGÉ)
// ============================================================
{
    numero: 2,
    enonce: `
        <p>Le plan est muni d'un repère orthonormé direct. On désigne par $\\mathcal{C}$ le cercle de centre $O$ et de rayon 2. Soit $A$ un point de $\\mathcal{C}$ tel que $(\\vec{u}, \\overrightarrow{OA}) = \\dfrac{3\\pi}{4} \\ [2\\pi]$. On note $z$ l'affixe de $A$.</p>
        <ol>
            <li>Représenter les points $B$, $C$ et $D$ d'affixes respectives $iz$, $i^2 z$ et $i^3 z$.</li>
            <li>Déterminer une écriture trigonométrique des affixes de chacun des points A, B, C et D.</li>
            <li>Quelle est la nature du quadrilatère $ABCD$ ?</li>
        </ol>
    `,
    astuces_exo: `
        <div class="astuce-box">💡 $i^2 = -1$, $i^3 = -i$.</div>
        <div class="astuce-box">💡 Multiplier par $i$ correspond à une rotation de $\\pi/2$ (Ch3).</div>
        <div class="astuce-box">💡 Tous les points A, B, C, D ont le même module (ils sont sur le cercle de rayon 2).</div>
    `,
    questions: [
        {
            id: 'c3-ex2-q1',
            texte: 'Écriture trigonométrique des affixes de A, B, C et D.',
            solution: `
                <p><strong>Solution :</strong></p>
                <p><em>Étape 1 (Ch3) :</em> On a $|z| = 2$ (car $A$ est sur le cercle de rayon 2).</p>
                <p>$\\arg(z) = \\dfrac{3\\pi}{4}$.</p>
                <p>Donc $z = 2 e^{i3\\pi/4}$.</p>
                <p><em>Étape 2 (Ch3) :</em> $B$ a pour affixe $z_B = iz$.</p>
                <p>Multiplier par $i$ ajoute $\\pi/2$ à l'argument (Ch3).</p>
                <p>Donc $|z_B| = |z| = 2$ et $\\arg(z_B) = \\arg(z) + \\dfrac{\\pi}{2} = \\dfrac{3\\pi}{4} + \\dfrac{\\pi}{2} = \\dfrac{5\\pi}{4}$.</p>
                <p>Ainsi $z_B = 2 e^{i5\\pi/4}$.</p>
                <p><em>Étape 3 (Ch1 + Ch3) :</em> $C$ a pour affixe $z_C = i^2 z = -z$.</p>
                <p>Multiplier par $-1$ (ou $i^2$) ajoute $\\pi$ à l'argument.</p>
                <p>Donc $|z_C| = 2$ et $\\arg(z_C) = \\dfrac{3\\pi}{4} + \\pi = \\dfrac{7\\pi}{4}$.</p>
                <p>Ainsi $z_C = 2 e^{i7\\pi/4}$.</p>
                <p><em>Étape 4 (Ch1 + Ch3) :</em> $D$ a pour affixe $z_D = i^3 z = -i z$.</p>
                <p>Multiplier par $-i$ (ou $i^3$) soustrait $\\pi/2$ à l'argument (car $\\arg(-i) = -\\pi/2$).</p>
                <p>Donc $|z_D| = 2$ et $\\arg(z_D) = \\dfrac{3\\pi}{4} - \\dfrac{\\pi}{2} = \\dfrac{\\pi}{4}$.</p>
                <p>Ainsi $z_D = 2 e^{i\\pi/4}$.</p>
                <p><strong>Résultats :</strong></p>
                <ul>
                    <li>$z_A = 2 e^{i3\\pi/4}$</li>
                    <li>$z_B = 2 e^{i5\\pi/4}$</li>
                    <li>$z_C = 2 e^{i7\\pi/4}$</li>
                    <li>$z_D = 2 e^{i\\pi/4}$</li>
                </ul>
            `
        },
        {
            id: 'c3-ex2-q2',
            texte: 'Nature du quadrilatère $ABCD$.',
            solution: `
                <p><strong>Solution :</strong></p>
                <p><em>Étape 1 (Ch2) :</em> On a $|z_A| = |z_B| = |z_C| = |z_D| = 2$.</p>
                <p>Donc les quatre points $A, B, C, D$ appartiennent au <strong>cercle de centre $O$ et de rayon 2</strong>.</p>
                <p><em>Étape 2 (Ch3) :</em> Les arguments sont :</p>
                <ul>
                    <li>$\\arg(z_A) = 3\\pi/4$</li>
                    <li>$\\arg(z_B) = 5\\pi/4$</li>
                    <li>$\\arg(z_C) = 7\\pi/4$</li>
                    <li>$\\arg(z_D) = \\pi/4$</li>
                </ul>
                <p>Si on les range dans l'ordre croissant : $\\pi/4$ (D), $3\\pi/4$ (A), $5\\pi/4$ (B), $7\\pi/4$ (C).</p>
                <p>Les écarts entre deux arguments consécutifs sont tous égaux à $\\pi/2$.</p>
                <p>Donc les points sont régulièrement espacés sur le cercle et forment un <strong>carré</strong>.</p>
                <p><em>Vérification par les diagonales (Ch2) :</em></p>
                <p>Diagonale $[AC]$ : $z_A + z_C = 2 e^{i3\\pi/4} + 2 e^{i7\\pi/4} = 0$ (opposés). Donc $O$ est le milieu de $[AC]$.</p>
                <p>Diagonale $[BD]$ : $z_B + z_D = 2 e^{i5\\pi/4} + 2 e^{i\\pi/4} = 0$ (opposés). Donc $O$ est aussi le milieu de $[BD]$.</p>
                <p>Les diagonales se coupent en leur milieu $O$ et sont de même longueur (2 diamètres).</p>
                <p>De plus, $(\\overrightarrow{OA}, \\overrightarrow{OB}) = \\arg(z_B) - \\arg(z_A) = 5\\pi/4 - 3\\pi/4 = \\pi/2$.</p>
                <p>Donc les diagonales sont perpendiculaires. Un quadrilatère dont les diagonales se coupent en leur milieu, sont de même longueur et sont perpendiculaires est un <strong>carré</strong>.</p>
                <p><strong>Résultat :</strong> $\\boxed{ABCD \\text{ est un carré.}}$</p>
            `
        }
    ]
},
     //    ============================================================
        // EXERCICE 3 : p34 – Déduction de cos(pi/12) et sin(pi/12)
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Soit $z_1 = 1+i$ et $z_2 = \\sqrt{3} - i$.</p>
                <ol>
                    <li>Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$.</li>
                    <li>Donner la forme algébrique et trigonométrique de $z_1 z_2$.</li>
                    <li>En déduire les valeurs exactes de $\\cos\\dfrac{\\pi}{12}$ et $\\sin\\dfrac{\\pi}{12}$.</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Pour le 1, utilisez les définitions du module (Ch2) et de l'argument (Ch3).</div>
                <div class="astuce-box">💡 Pour le 2, le produit des arguments donne l'angle $\\pi/12$ (Ch3).</div>
            `,
            questions: [
                {
                    id: 'c3-ex3-q1',
                    texte: 'Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch2 + Ch3) :</em> Pour $z_1 = 1+i$.</p>
                        <p>$|z_1| = \\sqrt{1^2+1^2} = \\sqrt{2}$.</p>
                        <p>$\\cos\\theta_1 = \\dfrac{1}{\\sqrt{2}}$, $\\sin\\theta_1 = \\dfrac{1}{\\sqrt{2}}$, donc $\\theta_1 = \\dfrac{\\pi}{4}$.</p>
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> Pour $z_2 = \\sqrt{3} - i$.</p>
                        <p>$|z_2| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = 2$.</p>
                        <p>$\\cos\\theta_2 = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\theta_2 = -\\dfrac{1}{2}$, donc $\\theta_2 = -\\dfrac{\\pi}{6}$.</p>
                        <p><strong>Résultats :</strong></p>
                        <ul>
                            <li>$|z_1| = \\sqrt{2}$, $\\arg(z_1) = \\pi/4$</li>
                            <li>$|z_2| = 2$, $\\arg(z_2) = -\\pi/6$</li>
                        </ul>
                    `
                },
                {
                    id: 'c3-ex3-q2',
                    texte: 'Forme algébrique et trigonométrique de $z_1 z_2$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> Forme algébrique.</p>
                        $$(1+i)(\\sqrt{3}-i) = \\sqrt{3} - i + i\\sqrt{3} - i^2 = \\sqrt{3} + 1 + i(\\sqrt{3} - 1)$$
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> Forme trigonométrique.</p>
                        <p>Module : $|z_1 z_2| = |z_1| \\times |z_2| = \\sqrt{2} \\times 2 = 2\\sqrt{2}$.</p>
                        <p>Argument : $\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) = \\dfrac{\\pi}{4} - \\dfrac{\\pi}{6} = \\dfrac{3\\pi}{12} - \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{12}$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{z_1 z_2 = 2\\sqrt{2} \\left(\\cos\\dfrac{\\pi}{12} + i\\sin\\dfrac{\\pi}{12}\\right)}$.</p>
                    `
                },
                {
                    id: 'c3-ex3-q3',
                    texte: 'En déduire les valeurs exactes de $\\cos\\dfrac{\\pi}{12}$ et $\\sin\\dfrac{\\pi}{12}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 :</em> On égalise les parties réelle et imaginaire des deux formes.</p>
                        <p>Partie réelle de la forme algébrique : $\\sqrt{3} + 1$.</p>
                        <p>Partie réelle de la forme trigonométrique : $2\\sqrt{2} \\cos\\dfrac{\\pi}{12}$.</p>
                        <p>Donc : $2\\sqrt{2} \\cos\\dfrac{\\pi}{12} = \\sqrt{3} + 1$.</p>
                        $$\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3} + 1}{2\\sqrt{2}}$$
                        <p>Partie imaginaire de la forme algébrique : $\\sqrt{3} - 1$.</p>
                        <p>Partie imaginaire de la forme trigonométrique : $2\\sqrt{2} \\sin\\dfrac{\\pi}{12}$.</p>
                        <p>Donc : $2\\sqrt{2} \\sin\\dfrac{\\pi}{12} = \\sqrt{3} - 1$.</p>
                        $$\\sin\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3} - 1}{2\\sqrt{2}}$$
                        <p><strong>Résultats :</strong> $\\boxed{\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3}+1}{2\\sqrt{2}}}$, $\\boxed{\\sin\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3}-1}{2\\sqrt{2}}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 4 : p34 – Forme exponentielle
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Donner la forme exponentielle des nombres complexes suivants :</p>
                <ol>
                    <li>$2\\sqrt{3} - 2i$</li>
                    <li>$-5 - 5i$</li>
                    <li>$-1 + i\\sqrt{3}$</li>
                    <li>$\\cos\\dfrac{\\pi}{5} - i\\sin\\dfrac{\\pi}{5}$</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c3-ex4-q1',
                    texte: '$2\\sqrt{3} - 2i$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch2) :</em> $a = 2\\sqrt{3}$, $b = -2$.</p>
                        <p>$r = \\sqrt{(2\\sqrt{3})^2 + (-2)^2} = \\sqrt{12 + 4} = \\sqrt{16} = 4$.</p>
                        <p><em>Étape 2 (Ch3) :</em> $\\cos\\theta = \\dfrac{2\\sqrt{3}}{4} = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\theta = \\dfrac{-2}{4} = -\\dfrac{1}{2}$.</p>
                        <p>Donc $\\theta = -\\dfrac{\\pi}{6} \\ [2\\pi]$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{4 e^{-i\\pi/6}}$.</p>
                    `
                },
                {
                    id: 'c3-ex4-q2',
                    texte: '$-5 - 5i$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>$a = -5$, $b = -5$.</p>
                        <p>$r = \\sqrt{25+25} = 5\\sqrt{2}$.</p>
                        <p>$\\cos\\theta = -\\dfrac{\\sqrt{2}}{2}$, $\\sin\\theta = -\\dfrac{\\sqrt{2}}{2}$.</p>
                        <p>Donc $\\theta = -\\dfrac{3\\pi}{4} \\ [2\\pi]$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{5\\sqrt{2} e^{-3i\\pi/4}}$.</p>
                    `
                },
                {
                    id: 'c3-ex4-q3',
                    texte: '$-1 + i\\sqrt{3}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>$a = -1$, $b = \\sqrt{3}$.</p>
                        <p>$r = \\sqrt{1+3} = 2$.</p>
                        <p>$\\cos\\theta = -\\dfrac{1}{2}$, $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$.</p>
                        <p>Donc $\\theta = \\dfrac{2\\pi}{3}$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{2 e^{2i\\pi/3}}$.</p>
                    `
                },
                {
                    id: 'c3-ex4-q4',
                    texte: '$\\cos\\dfrac{\\pi}{5} - i\\sin\\dfrac{\\pi}{5}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch3) :</em> On reconnaît $\\cos\\theta - i\\sin\\theta = \\cos(-\\theta) + i\\sin(-\\theta) = e^{-i\\theta}$.</p>
                        <p>Avec $\\theta = \\dfrac{\\pi}{5}$.</p>
                        <p>Le module est 1.</p>
                        <p><strong>Résultat :</strong> $\\boxed{e^{-i\\pi/5}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 5 : p34 – Puissance avec la forme exponentielle
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Montrer que $(-1 + i)^{11} = 32 + 32i$.</p>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Mettez $-1+i$ sous forme exponentielle (Ch3), puis utilisez $(e^{i\\theta})^n = e^{in\\theta}$.</div>
            `,
            questions: [
                {
                    id: 'c3-ex5-q1',
                    texte: 'Démontrer l\'égalité.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch2 + Ch3) :</em> On met $z = -1 + i$ sous forme exponentielle.</p>
                        <p>$|z| = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$.</p>
                        <p>$\\cos\\theta = -\\dfrac{1}{\\sqrt{2}}$, $\\sin\\theta = \\dfrac{1}{\\sqrt{2}}$, donc $\\theta = \\dfrac{3\\pi}{4}$.</p>
                        <p>Ainsi $z = \\sqrt{2} e^{i3\\pi/4}$.</p>
                        <p><em>Étape 2 (Ch3) :</em> On élève à la puissance 11.</p>
                        $$z^{11} = (\\sqrt{2})^{11} e^{i(11 \\times 3\\pi/4)} = 2^{11/2} e^{i33\\pi/4}$$
                        <p>On simplifie $2^{11/2} = 2^5 \\times 2^{1/2} = 32\\sqrt{2}$.</p>
                        <p>On simplifie l'angle : $\\dfrac{33\\pi}{4} = \\dfrac{32\\pi}{4} + \\dfrac{\\pi}{4} = 8\\pi + \\dfrac{\\pi}{4}$.</p>
                        <p>Donc $e^{i33\\pi/4} = e^{i\\pi/4}$.</p>
                        <p>Donc $z^{11} = 32\\sqrt{2} \\times \\left( \\dfrac{\\sqrt{2}}{2} + i\\dfrac{\\sqrt{2}}{2} \\right) = 32\\sqrt{2} \\times \\dfrac{\\sqrt{2}}{2} (1 + i) = 32 \\times 1 \\times (1+i) = 32 + 32i$.</p>
                        <p><strong>Conclusion :</strong> $\\boxed{(-1+i)^{11} = 32 + 32i}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 6 : p34 – Ensembles de points avec e^{iθ}
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>Déterminer et construire l'ensemble des points $M$ d'affixe $z$ dans chacun des cas suivants :</p>
                <ol>
                    <li>$z = 2e^{i\\theta}$, $\\theta \\in [0,\\pi]$</li>
                    <li>$z = -2e^{i\\theta}$, $\\theta \\in [0,\\pi]$</li>
                    <li>$z = 2 + \\cos\\theta + i\\sin\\theta$, $\\theta \\in [0,2\\pi[$</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c3-ex6-q1',
                    texte: '$z = 2e^{i\\theta}$, $\\theta \\in [0,\\pi]$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch2 + Ch3) :</em> $|z| = 2$ pour tout $\\theta$.</p>
                        <p>Donc $M$ est sur le cercle de centre $O$ et de rayon 2.</p>
                        <p><em>Étape 2 (Ch3) :</em> $\\arg(z) = \\theta \\in [0,\\pi]$.</p>
                        <p>Donc $M$ est sur la partie du cercle située <strong>au-dessus</strong> de l'axe des abscisses (incluant les extrémités sur l'axe).</p>
                        <p><strong>Résultat :</strong> Demi-cercle de centre $O$, de rayon 2, $y \\ge 0$.</p>
                    `
                },
                {
                    id: 'c3-ex6-q2',
                    texte: '$z = -2e^{i\\theta}$, $\\theta \\in [0,\\pi]$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>$|z| = 2$.</p>
                        <p>$-2e^{i\\theta} = 2 e^{i(\\theta+\\pi)}$.</p>
                        <p>Donc $\\arg(z) = \\theta + \\pi \\in [\\pi, 2\\pi]$.</p>
                        <p><strong>Résultat :</strong> Demi-cercle de centre $O$, de rayon 2, situé <strong>au-dessous</strong> de l'axe des abscisses ($y \\le 0$).</p>
                    `
                },
                {
                    id: 'c3-ex6-q3',
                    texte: '$z = 2 + \\cos\\theta + i\\sin\\theta$, $\\theta \\in [0,2\\pi[$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On écrit $z = 2 + (\\cos\\theta + i\\sin\\theta) = 2 + e^{i\\theta}$.</p>
                        <p><em>Étape 2 (Ch2) :</em> Soit $A$ le point d'affixe $2$ (coordonnées $(2,0)$).</p>
                        <p>On a $z - 2 = e^{i\\theta}$. Donc $AM = |z - 2| = |e^{i\\theta}| = 1$.</p>
                        <p><strong>Résultat :</strong> Cercle de centre $A(2,0)$ et de rayon 1.</p>
                        <p><em>Remarque :</em> $\\theta$ parcourt $[0,2\\pi[$, donc c'est le cercle entier (sans exception).</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 7 : p35 – Alignement et nature quadrilatère avec $t=e^{iα}$
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>Soit $\\mathcal{R}$ le cercle trigonométrique de centre $O$. Soit $M$ un point de $\\mathcal{R}$ d'affixe $t$ telle que $(\\vec{u}, \\overrightarrow{OM}) \\equiv \\alpha \\ [2\\pi]$, $\\alpha \\in [0, \\pi/2]$.</p>
                <p>On pose $u = t^3$ et $v = 2t$.</p>
                <ol>
                    <li>Écrire $u$ et $v$ sous forme trigonométrique.</li>
                    <li>Déterminer les réels $\\alpha$ pour lesquels $O$, $A$ et $B$ sont alignés (où $A$ a pour affixe $u$ et $B$ a pour affixe $v$).</li>
                    <li>On suppose $\\alpha \\in ]0, \\pi/2[$. Quelle est la nature du quadrilatère $OABC$ où $C$ a pour affixe $w = 2t - t^3$ ?</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c3-ex7-q1',
                    texte: 'Forme trigonométrique de $u$ et $v$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $t = e^{i\\alpha}$ (car $M$ est sur le cercle trigonométrique).</p>
                        <p>$u = t^3 = e^{i3\\alpha}$ (module 1, argument $3\\alpha$).</p>
                        <p>$v = 2t = 2e^{i\\alpha}$ (module 2, argument $\\alpha$).</p>
                        <p><strong>Résultats :</strong> $u = e^{i3\\alpha}$, $v = 2e^{i\\alpha}$.</p>
                    `
                },
                {
                    id: 'c3-ex7-q2',
                    texte: 'Déterminer $\\alpha$ pour que $O$, $A$ (affixe $u$) et $B$ (affixe $v$) soient alignés.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch2) :</em> $O$, $A$, $B$ sont alignés $\\iff \\dfrac{u}{v} \\in \\mathbb{R}$.</p>
                        <p>$$\\dfrac{u}{v} = \\dfrac{e^{i3\\alpha}}{2e^{i\\alpha}} = \\dfrac{1}{2} e^{i(3\\alpha - \\alpha)} = \\dfrac{1}{2} e^{i2\\alpha}$$</p>
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> Ce nombre est réel $\\iff \\arg\\left(\\dfrac{u}{v}\\right) \\equiv 0 \\ [\\pi]$.</p>
                        <p>Donc $2\\alpha \\equiv 0 \\ [\\pi] \\iff \\alpha = \\dfrac{k\\pi}{2}$.</p>
                        <p>Comme $\\alpha \\in [0, \\pi/2]$, on a $\\alpha = 0$ ou $\\alpha = \\dfrac{\\pi}{2}$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\alpha = 0 \\text{ ou } \\alpha = \\dfrac{\\pi}{2}}$.</p>
                    `
                },
                {
                    id: 'c3-ex7-q3',
                    texte: 'Nature du quadrilatère $OABC$ avec $w = 2t - t^3$ et $\\alpha \\in ]0, \\pi/2[$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> $w = 2t - t^3 = v - u$.</p>
                        <p>Donc $w$ est l'affixe du vecteur $\\overrightarrow{AB}$ (car $z_B - z_A = v - u$).</p>
                        <p>Le point $C$ est tel que $z_C = v - u$.</p>
                        <p><em>Étape 2 (Ch2) :</em> On a $\\overrightarrow{OC} = z_C = v - u = \\overrightarrow{AB}$.</p>
                        <p>Donc $OABC$ est un <strong>parallélogramme</strong>.</p>
                        <p><em>Étape 3 (Ch2) :</em> Vérifions si c'est un losange.</p>
                        <p>$OA = |u| = 1$, $OC = |w| = |v - u|$.</p>
                        <p>$|v - u| = |2e^{i\\alpha} - e^{i3\\alpha}| = |e^{i\\alpha}(2 - e^{i2\\alpha})| = |2 - e^{i2\\alpha}|$.</p>
                        <p>Pour $\\alpha = \\pi/3$, $|2 - e^{i2\\pi/3}| = |2 - (-1/2 + i\\sqrt{3}/2)| = |5/2 - i\\sqrt{3}/2| = \\sqrt{25/4 + 3/4} = \\sqrt{28/4} = \\sqrt{7}$.</p>
                        <p>Donc $OA \\neq OC$ (sauf pour des cas particuliers). Donc ce n'est pas un losange.</p>
                        <p><strong>Résultat :</strong> $OABC$ est un <strong>parallélogramme</strong>.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 8 : p35 – Module et argument de $z=\frac12(\sin φ + i(1-\cos φ))$
        // ============================================================
        {
            numero: 8,
            enonce: `
                <p>Soit $\\phi \\in ]0, \\pi[$ et $z$ le nombre complexe défini par :</p>
                $$z = \\dfrac{1}{2}\\left(\\sin\\phi + i(1 - \\cos\\phi)\\right)$$
                <ol>
                    <li>Déterminer, en fonction de $\\phi$, le module et un argument de $z$.</li>
                    <li>Soit $M$ et $N$ les points d'affixes respectives $z_1 = z - i$ et $z_2 = \\dfrac{z}{z - i}$. Déterminer les ensembles décrits par $M$ et $N$.</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez les formules $\\sin\\phi = 2\\sin(\\phi/2)\\cos(\\phi/2)$ et $1-\\cos\\phi = 2\\sin^2(\\phi/2)$.</div>
            `,
            questions: [
                {
                    id: 'c3-ex8-q1',
                    texte: 'Déterminer $|z|$ et $\\arg(z)$ en fonction de $\\phi$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> On utilise les formules trigonométriques.</p>
                        $$\\sin\\phi = 2\\sin\\dfrac{\\phi}{2}\\cos\\dfrac{\\phi}{2}$$
                        $$1 - \\cos\\phi = 2\\sin^2\\dfrac{\\phi}{2}$$
                        <p>On remplace :</p>
                        $$z = \\dfrac{1}{2}\\left(2\\sin\\dfrac{\\phi}{2}\\cos\\dfrac{\\phi}{2} + i \\cdot 2\\sin^2\\dfrac{\\phi}{2}\\right) = \\sin\\dfrac{\\phi}{2}\\left(\\cos\\dfrac{\\phi}{2} + i\\sin\\dfrac{\\phi}{2}\\right)$$
                        <p>Comme $\\phi \\in ]0, \\pi[$, on a $\\dfrac{\\phi}{2} \\in ]0, \\pi/2[$, donc $\\sin\\dfrac{\\phi}{2} > 0$.</p>
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> On reconnaît la forme trigonométrique.</p>
                        <p>$r = |z| = \\sin\\dfrac{\\phi}{2}$, $\\arg(z) = \\dfrac{\\phi}{2} \\ [2\\pi]$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{|z| = \\sin\\dfrac{\\phi}{2}}$, $\\boxed{\\arg(z) = \\dfrac{\\phi}{2}}$.</p>
                    `
                },
                {
                    id: 'c3-ex8-q2',
                    texte: 'Ensemble décrit par $M$ (affixe $z_1 = z - i$).',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p><em>Étape 1 (Ch1 + Ch3) :</em> On a $z = \\sin(\\phi/2) e^{i\\phi/2}$.</p>
                        <p>On pose $A$ le point d'affixe $i$.</p>
                        <p>Alors $z_1 = z - i$ est l'affixe du vecteur $\\overrightarrow{AM}$.</p>
                        <p>On a $z_1 = \\sin(\\phi/2) e^{i\\phi/2} - i$.</p>
                        <p>On sait que $i = e^{i\\pi/2}$.</p>
                        <p>Le lieu de $M$ lorsque $\\phi$ varie est un arc de cercle.</p>
                        <p>On peut réécrire $z_1$ : $z_1 = \\sin(\\phi/2)e^{i\\phi/2} - e^{i\\pi/2}$.</p>
                        <p>Il s'agit d'un cercle de centre $A$ et de rayon $\\sin(\\phi/2)$ qui varie...</p>
                        <p>En fait, $M$ décrit le <strong>cercle de diamètre $[OA]$</strong> où $O$ est l'origine et $A$ est le point d'affixe $i$.</p>
                        <p>Justification : $|z_1 + ?|$...</p>
                        <p>On peut vérifier que $z_1$ vérifie une équation de cercle.</p>
                        <p>Le point $M$ d'affixe $z$ décrit un cercle de centre $O$ et de rayon $\\sin(\\phi/2)$ ?</p>
                        <p>En fait, $\\sin(\\phi/2) \\in ]0,1[$.</p>
                        <p>$z_1 = z - i$ signifie que $M_1$ est l'image de $M$ par la translation de vecteur $-i$.</p>
                        <p>Donc $M_1$ décrit le cercle de centre $A$ (affixe $i$) et de rayon $\\sin(\\phi/2) \\in ]0,1[$, qui balaye tout le disque ouvert de centre $A$ et de rayon 1 ?</p>
                        <p>Non, $\\phi$ varie, donc le rayon varie. $\\sin(\\phi/2)$ prend toutes les valeurs de $]0,1[$. Donc $M_1$ décrit le <strong>disque ouvert</strong> de centre $A(0,1)$ et de rayon 1 (privé de A).</p>
                        <p><strong>Résultat :</strong> $M$ décrit le disque ouvert de centre $A(i)$ et de rayon 1 (privé de A).</p>
                    `
                },
                {
                    id: 'c3-ex8-q3',
                    texte: 'Ensemble décrit par $N$ (affixe $z_2 = \\dfrac{z}{z - i}$).',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $z_2 = \\dfrac{z}{z - i} = \\dfrac{z}{z_1}$.</p>
                        <p>On peut exprimer cela en fonction de $\\phi$.</p>
                        <p>$z = \\sin(\\phi/2) e^{i\\phi/2}$.</p>
                        <p>$z - i = \\sin(\\phi/2) e^{i\\phi/2} - i$.</p>
                        <p>On peut factoriser par $e^{i\\phi/2}$ :</p>
                        $$z - i = e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i e^{-i\\phi/2}\\right) = e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i(\\cos\\dfrac{\\phi}{2} - i\\sin\\dfrac{\\phi}{2})\\right)$$
                        $$= e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i\\cos\\dfrac{\\phi}{2} - \\sin\\dfrac{\\phi}{2}\\right) = e^{i\\phi/2} \\left(- i\\cos\\dfrac{\\phi}{2}\\right) = -i\\cos\\dfrac{\\phi}{2} e^{i\\phi/2}$$
                        <p>Donc $z_2 = \\dfrac{z}{z - i} = \\dfrac{\\sin(\\phi/2) e^{i\\phi/2}}{-i\\cos(\\phi/2) e^{i\\phi/2}} = \\dfrac{\\sin(\\phi/2)}{-i\\cos(\\phi/2)} = i\\tan\\dfrac{\\phi}{2}$.</p>
                        <p>$\\phi \\in ]0, \\pi[ \\implies \\dfrac{\\phi}{2} \\in ]0, \\pi/2[ \\implies \\tan\\dfrac{\\phi}{2} \\in ]0, +\\infty[$.</p>
                        <p>Donc $z_2$ est un imaginaire pur positif.</p>
                        <p><strong>Résultat :</strong> $N$ décrit la <strong>demi-droite</strong> $[Oy)$ (l'axe des ordonnées positives, excluant O).</p>
                    `
                }
            ]
        }
    ]
});