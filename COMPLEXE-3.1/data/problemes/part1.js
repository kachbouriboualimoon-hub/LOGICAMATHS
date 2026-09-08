// data/problemes/part1.js – Problèmes restants
// ==============================================
// Problème 1 : Tous les QCM (Pages 14, 32, 44)
// Problème 2 : Tous les Vrai-Faux (Pages 14, 32, 44)

window.problemes.items.push(

    // ============================================================
    // PROBLÈME 1 : QCM (Pages 14, 32, 44)
    // ============================================================
    {
        id: 1,
        titre: "QCM",
        enonce: `
            <p><strong>Q1 :</strong> Soit $z = -3i+2$ et $z' = 1+i$. Alors $\\mathfrak{Im}\\left(\\dfrac{z}{z'}\\right) =$</p>
            <p>☐ $-3$ &nbsp;&nbsp; ☐ $-\\dfrac{5}{2}$ &nbsp;&nbsp; ☐ $2$</p>
            <hr>
            <p><strong>Q2 :</strong> Soit $A$ d'affixe $z = \\sqrt{3} - i$. Alors $OA =$</p>
            <p>☐ $2$ &nbsp;&nbsp; ☐ $\\sqrt{3} - 1$ &nbsp;&nbsp; ☐ $\\sqrt{3} + 1$</p>
            <hr>
            <p><strong>Q3 :</strong> Soit $M$ d'affixe $z$ tel que $(\\vec{u},\\overrightarrow{OM}) = \\dfrac{\\pi}{3} [2\\pi]$. Alors un argument de $-3z$ est :</p>
            <p>☐ $-\\pi$ &nbsp;&nbsp; ☐ $-\\dfrac{2\\pi}{3}$ &nbsp;&nbsp; ☐ $-\\dfrac{\\pi}{3}$</p>
            <hr>
            <p><strong>Q4 :</strong> Soit $A$ d'affixe $1+i$ et $M$ sur la demi-droite $[AO)$ d'affixe $z_M \\neq 0$. Alors :</p>
            <p>☐ $\\arg(z_M) = -\\dfrac{\\pi}{2} [2\\pi]$ &nbsp;&nbsp; ☐ $\\arg(z_M) = -\\dfrac{3\\pi}{4} [2\\pi]$ &nbsp;&nbsp; ☐ $\\arg(z_M) = \\dfrac{\\pi}{4} [2\\pi]$</p>
            <hr>
            <p><strong>Q5 :</strong> Soit $A$ d'affixe $z_A = 1+2i$ et $B$ d'affixe $z_B = -2-4i$. Alors :</p>
            <p>☐ $(\\overrightarrow{OA},\\overrightarrow{OB}) = 0 [2\\pi]$ &nbsp;&nbsp; ☐ $(\\overrightarrow{OA},\\overrightarrow{OB}) = \\dfrac{\\pi}{2} [2\\pi]$ &nbsp;&nbsp; ☐ $(\\overrightarrow{OA},\\overrightarrow{AB}) = \\pi [2\\pi]$</p>
            <p><strong>Q6 :</strong> La distance $MM'$ est égale à :</p>
            <p>☐ $|z - z'|$ &nbsp;&nbsp; ☐ $|z| - |z'|$ &nbsp;&nbsp; ☐ $|z + z'|$</p>
            <hr>
            <p><strong>Q7 :</strong> Si $\\arg(z) = \\arg(z') [2\\pi]$, alors :</p>
            <p>☐ $O, M, M'$ sont alignés &nbsp;&nbsp; ☐ $z = z'$ &nbsp;&nbsp; ☐ $|z| = |z'|$</p>
            <hr>
            <p><strong>Q8 :</strong> Si $\\arg(z) = \\arg(iz') [2\\pi]$ et $|z| = |z'| = 1$, alors :</p>
            <p>☐ $z = z'$ &nbsp;&nbsp; ☐ $z = iz'$ &nbsp;&nbsp; ☐ $z = -z'$</p>
            <hr>
            <p><strong>Q9 :</strong> Si $z_B - z_A = 4(z_C - z_A)$, alors :</p>
            <p>☐ $ABC$ est isocèle &nbsp;&nbsp; ☐ $(AB) \\perp (AC)$ &nbsp;&nbsp; ☐ $A, B, C$ sont alignés</p>
            <hr>
            <p><strong>Q10 :</strong> Si $z_B - z_A = 4i(z_C - z_A)$, alors :</p>
            <p>☐ $ABC$ est isocèle &nbsp;&nbsp; ☐ $(AB) \\perp (AC)$ &nbsp;&nbsp; ☐ $(AB) \\parallel (AC)$</p>
            <p><strong>Q11 :</strong> L'équation $z^2 + z + 1 = 0$ a deux solutions :</p>
            <p>☐ opposées &nbsp;&nbsp; ☐ conjuguées &nbsp;&nbsp; ☐ confondues</p>
            <hr>
            <p><strong>Q12 :</strong> L'équation $z^2 - 2z + 2 = 0$ a pour solutions :</p>
            <p>☐ $z_1 = 1 - i$ et $z_2 = 1 + i$ &nbsp;&nbsp; ☐ $z_1 = 2i$ et $z_2 = -i$ &nbsp;&nbsp; ☐ $z_1 = 1 - i$ et $z_2 = 2 + i$</p>
            <hr>
            <p><strong>Q13 :</strong> L'équation $z^3 - z^2 + z - 1 = 0$ admet :</p>
            <p>☐ une seule solution réelle &nbsp;&nbsp; ☐ deux solutions réelles &nbsp;&nbsp; ☐ trois solutions réelles</p>
            <hr>
            <p><strong>Q14 :</strong> L'équation $z^4 = -1$ admet :</p>
            <p>☐ une solution réelle &nbsp;&nbsp; ☐ une solution imaginaire &nbsp;&nbsp; ☐ quatre solutions distinctes</p>
            <hr>
            <p><strong>Q15 :</strong> Le nombre $\\sqrt{2} + i\\sqrt{2}$ est une racine carrée de :</p>
            <p>☐ $4i$ &nbsp;&nbsp; ☐ $-4i$ &nbsp;&nbsp; ☐ $2\\sqrt{2}i$</p>
        `,
        astuces: `
            <h4>💡 Astuces générales</h4>
            <ul>
                <li><strong>Q1 :</strong> Calculez $\\dfrac{z}{z'}$ en multipliant par le conjugué (Ch1).</li>
                <li><strong>Q2 :</strong> Utilisez la définition du module (Ch2).</li>
                <li><strong>Q3 :</strong> Multiplier par $-3$ (réel négatif) ajoute $\\pi$ à l'argument (Ch3).</li>
                <li><strong>Q4 :</strong> $[AO)$ est la demi-droite opposée à $[OA)$ (Ch3).</li>
                <li><strong>Q5 :</strong> $\\overrightarrow{AB}$ a pour affixe $z_B - z_A$ (Ch2).</li>
                <li><strong>Q6 :</strong> $MM' = |z - z'|$ (Ch2).</li>
                <li><strong>Q7 :</strong> Arguments égaux → même demi-droite (Ch3).</li>
                <li><strong>Q8 :</strong> $\\arg(z) = \\arg(iz')$ et modules égaux → $z = iz'$ (Ch3).</li>
                <li><strong>Q9 :</strong> $z_B - z_A$ est l'affixe de $\\overrightarrow{AB}$ (Ch2).</li>
                <li><strong>Q10 :</strong> Si le rapport est imaginaire pur, les vecteurs sont orthogonaux (Ch2).</li>
                <li><strong>Q11 :</strong> $\\Delta = -3$, solutions $j$ et $j^2$ (Ch5).</li>
                <li><strong>Q12 :</strong> $\\Delta = -4$, $\\delta = 2i$ (Ch5).</li>
                <li><strong>Q13 :</strong> Factorisez $(z-1)(z^2+1)$ (Ch5).</li>
                <li><strong>Q14 :</strong> $z^4 = -1$ a 4 solutions (Ch5).</li>
                <li><strong>Q15 :</strong> $(\\sqrt{2}+i\\sqrt{2})^2 = 4i$ (Ch1).</li>
            </ul>
        `,
        erreurs: `
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Ne pas confondre $\\arg(-3z)$ avec $-3\\arg(z)$ (Ch3).</li>
            </ul>
        `,
        questions: [
            // === Page 14 – QCM ===
            {
                id: 'prob1-qcm-1',
                texte: 'Q1 : $\\mathfrak{Im}\\left(\\dfrac{z}{z\'}\\right)$ avec $z = 2-3i$, $z\' = 1+i$.',
                solution: `
                    <p><strong>Solution (Ch1) :</strong></p>
                    $$\\dfrac{z}{z'} = \\dfrac{2-3i}{1+i} = \\dfrac{(2-3i)(1-i)}{2} = \\dfrac{-1 - 5i}{2} = -\\dfrac{1}{2} - \\dfrac{5}{2}i$$
                    <p>Donc $\\mathfrak{Im} = -\\dfrac{5}{2}$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{-\\dfrac{5}{2}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-2',
                texte: 'Q2 : $OA$ pour $z = \\sqrt{3} - i$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    $$OA = |\\sqrt{3} - i| = \\sqrt{3+1} = 2$$
                    <p><strong>Réponse :</strong> $\\boxed{2}$.</p>
                `
            },
            {
                id: 'prob1-qcm-3',
                texte: 'Q3 : Argument de $-3z$ si $\\arg(z) = \\pi/3$.',
                solution: `
                    <p><strong>Solution (Ch3) :</strong></p>
                    <p>$\\arg(-3z) = \\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3} \\equiv -\\dfrac{2\\pi}{3}$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{-\\dfrac{2\\pi}{3}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-4',
                texte: 'Q4 : Argument de $z_M$ si $M \\in [AO)$.',
                solution: `
                    <p><strong>Solution (Ch3) :</strong></p>
                    <p>$\\arg(z_A) = \\dfrac{\\pi}{4}$. $\\arg(z_M) = \\arg(z_A) + \\pi = \\dfrac{5\\pi}{4} \\equiv -\\dfrac{3\\pi}{4}$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{-\\dfrac{3\\pi}{4}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-5',
                texte: 'Q5 : Angle $(\\overrightarrow{OA},\\overrightarrow{AB})$ avec $z_A = 1+2i$, $z_B = -2-4i$.',
                solution: `
                    <p><strong>Solution (Ch2 + Ch3) :</strong></p>
                    <p>$\\overrightarrow{AB} : z_B - z_A = -3 - 6i = -3(1+2i) = -3\\overrightarrow{OA}$.</p>
                    <p>Donc $(\\overrightarrow{OA},\\overrightarrow{AB}) = \\pi \\ [2\\pi]$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\pi \\ [2\\pi]}$.</p>
                `
            },
            // === Page 32 – QCM ===
            {
                id: 'prob1-qcm-6',
                texte: 'Q6 : La distance $MM\'$ est :',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>$MM' = |z - z'|$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{|z - z'|}$.</p>
                `
            },
            {
                id: 'prob1-qcm-7',
                texte: 'Q7 : Si $\\arg(z) = \\arg(z\') [2\\pi]$.',
                solution: `
                    <p><strong>Solution (Ch3) :</strong></p>
                    <p>Mêmes arguments → mêmes demi-droites → $O, M, M'$ alignés.</p>
                    <p><strong>Réponse :</strong> $\\boxed{O, M, M' \\text{ sont alignés}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-8',
                texte: 'Q8 : $\\arg(z) = \\arg(iz\')$ et $|z| = |z\'| = 1$.',
                solution: `
                    <p><strong>Solution (Ch3) :</strong></p>
                    <p>$|iz'| = |z'| = 1 = |z|$. Donc $z = iz'$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{z = iz'}$.</p>
                `
            },
            {
                id: 'prob1-qcm-9',
                texte: 'Q9 : $z_B - z_A = 4(z_C - z_A)$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>$\\overrightarrow{AB} = 4\\overrightarrow{AC}$ → vecteurs colinéaires → $A, B, C$ alignés.</p>
                    <p><strong>Réponse :</strong> $\\boxed{A, B, C \\text{ sont alignés}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-10',
                texte: 'Q10 : $z_B - z_A = 4i(z_C - z_A)$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>$\\dfrac{z_B - z_A}{z_C - z_A} = 4i$ (imaginaire pur) → $(AB) \\perp (AC)$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{(AB) \\perp (AC)}$.</p>
                `
            },
            // === Page 44 – QCM ===
            {
                id: 'prob1-qcm-11',
                texte: 'Q11 : $z^2 + z + 1 = 0$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$\\Delta = -3$, solutions $j$ et $j^2$ (conjuguées).</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{conjuguées}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-12',
                texte: 'Q12 : $z^2 - 2z + 2 = 0$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$\\Delta = -4$, $\\delta = 2i$. $z_1 = 1+i$, $z_2 = 1-i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{z_1 = 1 - i \\text{ et } z_2 = 1 + i}$.</p>
                `
            },
            {
                id: 'prob1-qcm-13',
                texte: 'Q13 : $z^3 - z^2 + z - 1 = 0$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$(z-1)(z^2+1)=0$. Racines : $z=1$ (réelle), $z=\\pm i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{une seule solution réelle}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-14',
                texte: 'Q14 : $z^4 = -1$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>4 solutions distinctes, aucune réelle.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{quatre solutions distinctes}}$.</p>
                `
            },
            {
                id: 'prob1-qcm-15',
                texte: 'Q15 : $(\\sqrt{2}+i\\sqrt{2})^2$.',
                solution: `
                    <p><strong>Solution (Ch1) :</strong></p>
                    <p>$(\\sqrt{2}+i\\sqrt{2})^2 = 4i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{4i}$.</p>
                `
            }
        ]
    },

    // ============================================================
    // PROBLÈME 2 : VRAI-FAUX (Pages 14, 32, 44)
    // ============================================================
    {
        id: 2,
        titre: "Vrai-Faux",
        enonce: `

            <p><strong>VF1 :</strong> Soit $a$ et $b$ deux nombres complexes. Si $z = a + ib$ alors $a = \\Re(z)$ et $b = \\Im(z)$.</p>
            <p><strong>VF2 :</strong> Pour tous nombres complexes $z$ et $z'$, $|z| = |z'|$ ssi $z = z'$ ou $z = -z'$.</p>
            <p><strong>VF3 :</strong> Si $M$ est un point du cercle trigonométrique d'affixe $z$, alors le point $M'$ d'affixe $z^2$ appartient au cercle trigonométrique.</p>
            <p><strong>VF4 :</strong> Pour tout $z \\neq 0$, les points d'affixes $z$ et $\\dfrac{1}{z}$ n'appartiennent pas à un même cercle.</p>
            <p><strong>VF5 :</strong> Pour tout $z \\neq 0$, $\\arg(z^2) \\equiv (\\arg(z))^2 \\ [2\\pi]$.</p>
            <p><strong>VF6 :</strong> Soit $z_1$ et $z_2$ deux nombres complexes non réels. Le conjugué de $Z = z_1 + iz_2$ est $\\overline{Z} = z_1 - iz_2$.</p>
            <p><strong>VF7 :</strong> Soit $z$ un nombre complexe. Si $z^3$ est réel alors nécessairement $z$ est réel.</p>
            <p><strong>VF8 :</strong> Soit $z$ et $z'$ deux nombres complexes non nuls. Si $|z| = |z'|$ alors nécessairement $z = z'$ ou $z = -z'$.</p>
            <p><strong>VF9 :</strong> L'équation $z^2 = -3$ n'admet pas de solution dans $\\mathbb{C}$.</p>
            <p><strong>VF10 :</strong> L'équation $z^4 = z^2$ est équivalente à $z^2 = 1$.</p>
            <p><strong>VF11 :</strong> $0$ est l'unique solution de $z^4 + z^2 = 0$.</p>
            <p><strong>VF12 :</strong> Une équation du second degré dans $\\mathbb{C}$ admet toujours deux racines opposées.</p>
            <p><strong>VF13 :</strong> $z^4 = a^4 \\iff z = a$ ou $z = -a$.</p>
            <p><strong>VF14 :</strong> Si $z^3 = i$ alors nécessairement $z$ est imaginaire.</p>
        `,
        astuces: `
            <h4>💡 Astuces générales</h4>
            <ul>
                <li><strong>VF1 :</strong> $a$ et $b$ doivent être réels (Ch1).</li>
                <li><strong>VF2 :</strong> Contre-exemple : $z=1$, $z'=i$ (Ch2).</li>
                <li><strong>VF3 :</strong> $|z^2| = |z|^2$ (Ch2).</li>
                <li><strong>VF4 :</strong> Si $|z|=1$, $z$ et $1/z$ sont sur le même cercle (Ch2).</li>
                <li><strong>VF5 :</strong> $\\arg(z^2) = 2\\arg(z)$ (Ch3).</li>
                <li><strong>VF6 :</strong> $\\overline{z_1 + iz_2} = \\overline{z_1} - i\\overline{z_2}$ (Ch1).</li>
                <li><strong>VF7 :</strong> Contre-exemple : $z = e^{i\\pi/3}$ (Ch5).</li>
                <li><strong>VF8 :</strong> Contre-exemple : $z=1$, $z'=i$ (Ch2).</li>
                <li><strong>VF9 :</strong> $z = \\pm i\\sqrt{3}$ (Ch5).</li>
                <li><strong>VF10 :</strong> $z=0$ est aussi solution (Ch5).</li>
                <li><strong>VF11 :</strong> $z = \\pm i$ sont aussi solutions (Ch5).</li>
                <li><strong>VF12 :</strong> Contre-exemple : $z^2 - 2z + 1 = 0$ (racine double) (Ch5).</li>
                <li><strong>VF13 :</strong> Si $a=1$, $z$ peut être $\\pm i$ (Ch5).</li>
                <li><strong>VF14 :</strong> $z = e^{i\\pi/6}$ est solution mais n'est pas imaginaire (Ch5).</li>
            </ul>
        `,
        erreurs: `
            <h4>⚠️ Erreurs fréquentes</h4>
            <ul>
                <li>Ne pas confondre $\\arg(z^2)$ avec $(\\arg(z))^2$ (Ch3).</li>
                <li>Dans $\\mathbb{C}$, une équation du second degré n'a pas toujours des racines opposées (Ch5).</li>
                <li>$z^4 = z^2$ n'est pas équivalent à $z^2 = 1$ à cause de $z=0$ (Ch5).</li>
            </ul>
        `,
        questions: [
            // === Page 14 – Vrai-Faux ===
            {
                id: 'prob1-vf-1',
                texte: 'VF1 : Si $z = a+ib$ alors $a = \\Re(z)$ et $b = \\Im(z)$.',
                solution: `
                    <p><strong>Solution (Ch1) :</strong></p>
                    <p>Il faut que $a$ et $b$ soient réels. L'affirmation ne le précise pas.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-2',
                texte: 'VF2 : $|z| = |z\'| \\iff z = z\'$ ou $z = -z\'$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>Contre-exemple : $z=1$, $z'=i$. $|1|=|i|$ mais $z \\neq z'$ et $z \\neq -z'$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-3',
                texte: 'VF3 : Si $|z|=1$, alors $|z^2|=1$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>$|z^2| = |z|^2 = 1$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{VRAI}}$.</p>
                `
            },
            {
                id: 'prob1-vf-4',
                texte: 'VF4 : $z$ et $1/z$ ne sont jamais sur un même cercle.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>Si $|z| = 1$, alors $|1/z| = 1$. Donc $z$ et $1/z$ sont sur le cercle trigonométrique.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-5',
                texte: 'VF5 : $\\arg(z^2) \\equiv (\\arg(z))^2 \\ [2\\pi]$.',
                solution: `
                    <p><strong>Solution (Ch3) :</strong></p>
                    <p>$\\arg(z^2) = 2\\arg(z)$, pas $(\\arg(z))^2$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            // === Page 32 – Vrai-Faux ===
            {
                id: 'prob1-vf-6',
                texte: 'VF6 : Conjugué de $Z = z_1 + iz_2$.',
                solution: `
                    <p><strong>Solution (Ch1) :</strong></p>
                    <p>$\\overline{Z} = \\overline{z_1} - i\\overline{z_2}$, pas $z_1 - iz_2$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-7',
                texte: 'VF7 : Si $z^3$ est réel alors $z$ est réel.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>Contre-exemple : $z = e^{i\\pi/3}$, $z^3 = -1$ (réel) mais $z$ n'est pas réel.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-8',
                texte: 'VF8 : $|z| = |z\'| \\implies z = z\'$ ou $z = -z\'$.',
                solution: `
                    <p><strong>Solution (Ch2) :</strong></p>
                    <p>Contre-exemple : $z=1$, $z'=i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            // === Page 44 – Vrai-Faux ===
            {
                id: 'prob1-vf-9',
                texte: 'VF9 : $z^2 = -3$ n\'a pas de solution dans $\\mathbb{C}$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$z = \\pm i\\sqrt{3}$ existent dans $\\mathbb{C}$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-10',
                texte: 'VF10 : $z^4 = z^2 \\iff z^2 = 1$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$z^2(z^2-1)=0$ → $z=0, 1, -1$. $z^2=1$ oublie $z=0$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-11',
                texte: 'VF11 : $0$ est l\'unique solution de $z^4+z^2=0$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$z^2(z^2+1)=0$ → $z=0, i, -i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-12',
                texte: 'VF12 : Une équation du second degré dans $\\mathbb{C}$ admet toujours deux racines opposées.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>Contre-exemple : $z^2 - 2z + 1 = 0$ a pour solution $z=1$ (racine double).</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-13',
                texte: 'VF13 : $z^4 = a^4 \\iff z = a$ ou $z = -a$.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>Si $a=1$, $z^4=1$ a pour solutions $1, -1, i, -i$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            },
            {
                id: 'prob1-vf-14',
                texte: 'VF14 : Si $z^3 = i$ alors $z$ est imaginaire.',
                solution: `
                    <p><strong>Solution (Ch5) :</strong></p>
                    <p>$z = e^{i\\pi/6} = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}i$ est solution mais n'est pas imaginaire.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\text{FAUX}}$.</p>
                `
            }
        ]
    }
);