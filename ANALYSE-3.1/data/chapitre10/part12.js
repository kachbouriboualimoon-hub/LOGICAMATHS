// data/chapitre10/part12.js – Exercices 34 à 36 (Synthèse)
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
        // EXERCICE 34 – Équation y'' + 2y' + 2y = 0
        // ======================================================================
        {
            numero: 34,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' + 2y' + 2y = 0$.</p>
                      <ol>
                        <li>Résoudre $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 1$ et $f'(0) = -1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex34q1',
                    texte: "1. Résolution de $(E)$.",
                    solution: `<p>L'équation caractéristique est $r^2 + 2r + 2 = 0$.</p>
                               <p>$\\Delta = 4 - 8 = -4 = (2i)^2$.</p>
                               <p>Les racines sont $r = \\dfrac{-2 \\pm 2i}{2} = -1 \\pm i$.</p>
                               <p>Les solutions sont <strong>$y(x) = e^{-x}(A\\cos x + B\\sin x)$</strong>.</p>`
                },
                {
                    id: 'ch10ex34q2',
                    texte: "2. Solution $f$ avec $f(0)=1$ et $f'(0)=-1$.",
                    solution: `<p>$f(x) = e^{-x}(A\\cos x + B\\sin x)$.</p>
                               <p>$f'(x) = -e^{-x}(A\\cos x + B\\sin x) + e^{-x}(-A\\sin x + B\\cos x)$.</p>
                               <p>$f'(x) = e^{-x}((B-A)\\cos x - (A+B)\\sin x)$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = A = 1$.</li>
                                 <li>$f'(0) = B - A = -1$ ⇒ $B - 1 = -1$ ⇒ $B = 0$.</li>
                               </ul>
                               <p><strong>$f(x) = e^{-x}\\cos x$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 35 – Équation y'' + 2y' + y = x²
        // ======================================================================
        {
            numero: 35,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + 2y' + y = x^2$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + 2y' + y = 0$.</li>
                        <li>Déterminer un polynôme du second degré qui vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - p$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex35q1',
                    texte: "1. Solutions de $(E_0) : y'' + 2y' + y = 0$.",
                    solution: `<p>L'équation caractéristique est $r^2 + 2r + 1 = 0$ ⇒ $(r+1)^2 = 0$.</p>
                               <p>Racine double $r = -1$.</p>
                               <p>Les solutions sont <strong>$y(x) = (C_1 x + C_2)e^{-x}$</strong>.</p>`
                },
                {
                    id: 'ch10ex35q2',
                    texte: "2. Polynôme du second degré solution de $(E)$.",
                    solution: `<p>Cherchons $p(x) = ax^2 + bx + c$.</p>
                               <p>$p'(x) = 2ax + b$, $p''(x) = 2a$.</p>
                               <p>$p'' + 2p' + p = 2a + 2(2ax + b) + (ax^2 + bx + c)$.</p>
                               <p>$= ax^2 + (4a + b)x + (2a + 2b + c) = x^2$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} a = 1 \\\\ 4a + b = 0 \\\\ 2a + 2b + c = 0 \\end{cases} \\Rightarrow \\begin{cases} a = 1 \\\\ b = -4 \\\\ c = 6 \\end{cases} $$
                               <p><strong>$p(x) = x^2 - 4x + 6$.</strong></p>`
                },
                {
                    id: 'ch10ex35q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-p$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + 2f' + f = x^2$.</p>
                               <p>$p$ est solution de $(E)$ : $p'' + 2p' + p = x^2$.</p>
                               <p>On soustrait : $(f - p)'' + 2(f - p)' + (f - p) = 0$.</p>
                               <p>Donc $h = f - p$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = p + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex35q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = p(x) + h(x) = x^2 - 4x + 6 + (C_1 x + C_2)e^{-x}. $$
                               <p><strong>$\\boxed{f(x) = x^2 - 4x + 6 + (C_1 x + C_2)e^{-x},\\; C_1,C_2\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 36 – Équation y'' + y = cos x + sin x
        // ======================================================================
        {
            numero: 36,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + y = \\cos x + \\sin x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + y = 0$.</li>
                        <li>Déterminer une solution particulière de la forme $g(x) = x(a\\cos x + b\\sin x)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - g$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex36q1',
                    texte: "1. Solutions de $(E_0) : y'' + y = 0$.",
                    solution: `<p>L'équation $y'' + y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = 1$.</p>
                               <p>Les solutions sont <strong>$y(x) = A\\sin x + B\\cos x$</strong>.</p>`
                },
                {
                    id: 'ch10ex36q2',
                    texte: "2. Solution particulière $g(x) = x(a\\cos x + b\\sin x)$.",
                    solution: `<p>On a $g(x) = ax\\cos x + bx\\sin x$.</p>
                               <p>Calculons $g'$ et $g''$ :</p>
                               $$ g'(x) = a\\cos x - ax\\sin x + b\\sin x + bx\\cos x. $$
                               $$ g'(x) = (a + bx)\\cos x + (b - ax)\\sin x. $$
                               $$ g''(x) = b\\cos x - (a+bx)\\sin x - a\\sin x + (b-ax)\\cos x. $$
                               $$ g''(x) = (2b - ax)\\cos x + (-2a - bx)\\sin x. $$
                               <p>$g'' + g = (2b - ax + ax)\\cos x + (-2a - bx + bx)\\sin x$.</p>
                               $$ g'' + g = 2b\\cos x - 2a\\sin x = \\cos x + \\sin x. $$
                               <p>Par identification :</p>
                               $$ \\begin{cases} 2b = 1 \\\\ -2a = 1 \\end{cases} \\Rightarrow \\begin{cases} b = \\dfrac{1}{2} \\\\ a = -\\dfrac{1}{2} \\end{cases} $$
                               <p><strong>$g(x) = -\\dfrac{1}{2}x\\cos x + \\dfrac{1}{2}x\\sin x = \\dfrac{x}{2}(\\sin x - \\cos x)$.</strong></p>`
                },
                {
                    id: 'ch10ex36q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-g$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + f = \\cos x + \\sin x$.</p>
                               <p>$g$ est solution de $(E)$ : $g'' + g = \\cos x + \\sin x$.</p>
                               <p>On soustrait : $(f - g)'' + (f - g) = 0$.</p>
                               <p>Donc $h = f - g$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = g + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex36q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = g(x) + h(x) = \\dfrac{x}{2}(\\sin x - \\cos x) + A\\sin x + B\\cos x. $$
                               <p><strong>$\\boxed{f(x) = \\dfrac{x}{2}(\\sin x - \\cos x) + A\\sin x + B\\cos x,\\; A,B\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 12 (exercices 34 à 36) – Synthèse – ajoutée avec succès.");
    console.log("Chapitre 10 (Équations différentielles) désormais complet !");
})();