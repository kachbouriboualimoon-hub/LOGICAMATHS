// data/chapitre10/part5.js – Exercices 13 à 15 (Équations avec second membre, circuits, y''=2y')
// Version améliorée – conforme au manuel Livre_4_Sc_T1.pdf
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch10 = data.chapitres.find(c => c.id === 10);
    if (!ch10) {
        console.error("Chapitre 10 introuvable. Chargez d'abord data/chapitre10_base.js.");
        return;
    }

    ch10.exercices.push(
        // ======================================================================
        // EXERCICE 13 – Équation y' - y = 4cos x
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit l'équation différentielle $(E) : y' - y = 4\\cos x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y' - y = 0$.</li>
                        <li>Déterminer les nombres $a$ et $b$ tels que la fonction $g$, définie sur $\\mathbb{R}$ par $g(x) = a\\cos x + b\\sin x$, vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - g$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex13q1',
                    texte: "1. Solutions de $(E_0) : y' - y = 0$.",
                    solution: `<p>L'équation $y' - y = 0$ est de la forme $y' = ay$ avec $a=1$.</p>
                               <p>Les solutions sont <strong>$y = Ce^x,\\; C\\in\\mathbb{R}$</strong>.</p>`
                },
                {
                    id: 'ch10ex13q2',
                    texte: "2. Détermination de $a$ et $b$ pour $g$.",
                    solution: `<p>$g(x) = a\\cos x + b\\sin x$.</p>
                               <p>$g'(x) = -a\\sin x + b\\cos x$.</p>
                               <p>On remplace dans $(E) : y' - y = 4\\cos x$ :</p>
                               $$ (-a\\sin x + b\\cos x) - (a\\cos x + b\\sin x) = 4\\cos x. $$
                               $$ (-a - b)\\sin x + (b - a)\\cos x = 4\\cos x. $$
                               <p>Par identification :</p>
                               $$ \\begin{cases} -a - b = 0 \\\\ b - a = 4 \\end{cases} \\Rightarrow \\begin{cases} b = -a \\\\ -a - a = 4 \\end{cases} \\Rightarrow \\begin{cases} a = -2 \\\\ b = 2 \\end{cases} $$
                               <p><strong>$g(x) = -2\\cos x + 2\\sin x$.</strong></p>`
                },
                {
                    id: 'ch10ex13q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-g$ solution de $(E_0)$.",
                    solution: `<p>$f$ est solution de $(E)$ : $f' - f = 4\\cos x$.</p>
                               <p>$g$ est solution de $(E)$ : $g' - g = 4\\cos x$.</p>
                               <p>On soustrait : $(f - g)' - (f - g) = 0$.</p>
                               <p>Donc $h = f - g$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$ et $g$ solution de $(E)$, alors $f = g + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex13q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>D'après la question précédente, les solutions de $(E)$ sont :</p>
                               $$ f(x) = g(x) + h(x) = (-2\\cos x + 2\\sin x) + Ce^x. $$
                               <p><strong>$\\boxed{f(x) = Ce^x - 2\\cos x + 2\\sin x,\\; C\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14 – Circuit électrique (bobine)
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>Dans un circuit contenant un générateur de force électromotrice $E$ ainsi qu'une bobine de résistance $r$ (en ohms) et d'inductance $L$ (en henrys), on montre que l'intensité est une fonction du temps solution de l'équation différentielle $Ly' + ry = E$.</p>
                      <p>On prend $E = 10$ V, $r = 100\\Omega$ et $L = 0.2$ H. À l'instant $t=0$, l'intensité est nulle dans le circuit.</p>
                      <ol>
                        <li>Déterminer la fonction $i : t \\mapsto i(t)$ décrivant l'évolution de l'intensité $i$ en fonction du temps.</li>
                        <li>Déterminer la limite de $i$ quand $t$ tend vers $+\\infty$ et interpréter ce résultat.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex14q1',
                    texte: "1. Détermination de $i(t)$.",
                    solution: `<p>On a $0.2i' + 100i = 10$.</p>
                               <p>Divisons par $0.2$ : $i' + 500i = 50$.</p>
                               <p>Soit $i' = -500i + 50$. C'est de la forme $y' = ay + b$ avec $a=-500$ et $b=50$.</p>
                               <p>Les solutions sont $i(t) = Ce^{-500t} - \\dfrac{b}{a} = Ce^{-500t} + \\dfrac{50}{500} = Ce^{-500t} + 0.1$.</p>
                               <p>Condition initiale : $i(0) = 0$ ⇒ $C + 0.1 = 0$ ⇒ $C = -0.1$.</p>
                               <p><strong>$i(t) = 0.1(1 - e^{-500t})$.</strong></p>`
                },
                {
                    id: 'ch10ex14q2',
                    texte: "2. Limite de $i$ et interprétation.",
                    solution: `<p>$\\lim_{t\\to+\\infty} i(t) = \\lim_{t\\to+\\infty} 0.1(1 - e^{-500t}) = 0.1$ A.</p>
                               <p><strong>L'intensité tend vers $0.1$ A (soit $100$ mA).</strong></p>
                               <p>Interprétation : le régime permanent est atteint asymptotiquement ; l'intensité se stabilise à $0.1$ A.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15 – Équation y'' = 2y'
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>On désigne par $(E)$ l'équation différentielle $y'' = 2y'$.</p>
                      <ol>
                        <li>En posant $z = y'$, résoudre $(E)$ sur $\\mathbb{R}$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f'(0) = 1$ et $f(0) = 2$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex15q1',
                    texte: "1. Résolution de $(E)$ avec $z=y'$.",
                    solution: `<p>On pose $z = y'$. Alors $z' = y''$.</p>
                               <p>L'équation devient $z' = 2z$.</p>
                               <p>Les solutions sont $z(t) = Ce^{2t}$.</p>
                               <p>Comme $y' = z$, on a $y(t) = \\int z(t) dt = \\dfrac{C}{2}e^{2t} + D$.</p>
                               <p>Posons $C_1 = \\dfrac{C}{2}$. Alors <strong>$y(t) = C_1 e^{2t} + D$</strong>.</p>`
                },
                {
                    id: 'ch10ex15q2',
                    texte: "2. Solution vérifiant $f'(0)=1$ et $f(0)=2$.",
                    solution: `<p>On a $f(t) = C_1 e^{2t} + D$.</p>
                               <p>$f'(t) = 2C_1 e^{2t}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f'(0) = 2C_1 = 1$ ⇒ $C_1 = \\dfrac{1}{2}$.</li>
                                 <li>$f(0) = C_1 + D = 2$ ⇒ $\\dfrac{1}{2} + D = 2$ ⇒ $D = \\dfrac{3}{2}$.</li>
                               </ul>
                               <p><strong>$f(t) = \\dfrac{1}{2}e^{2t} + \\dfrac{3}{2}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 5 (exercices 13 à 15) – Équations avec second membre, circuits – ajoutée avec succès.");
})();