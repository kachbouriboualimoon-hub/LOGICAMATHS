// data/chapitre10/part9.js – Exercices 25 à 27 (Problèmes de synthèse)
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
        // EXERCICE 25 – Équation y'' + y' = x² + 2x
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + y' = x^2 + 2x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + y' = 0$.</li>
                        <li>Déterminer un polynôme du second degré qui vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - p$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex25q1',
                    texte: "1. Solutions de $(E_0) : y'' + y' = 0$.",
                    solution: `<p>On pose $z = y'$. L'équation devient $z' + z = 0$ ⇒ $z' = -z$.</p>
                               <p>Les solutions sont $z(x) = Ce^{-x}$.</p>
                               <p>Donc $y(x) = -Ce^{-x} + D$.</p>
                               <p><strong>$y(x) = C_1 e^{-x} + C_2$</strong> (en posant $C_1 = -C$).</p>`
                },
                {
                    id: 'ch10ex25q2',
                    texte: "2. Polynôme du second degré solution de $(E)$.",
                    solution: `<p>Cherchons $p(x) = ax^2 + bx + c$.</p>
                               <p>$p'(x) = 2ax + b$, $p''(x) = 2a$.</p>
                               <p>$p'' + p' = 2a + (2ax + b) = 2ax + (2a + b) = x^2 + 2x$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} 2a = 1 \\\\ 2a + b = 2 \\end{cases} \\Rightarrow \\begin{cases} a = \\dfrac{1}{2} \\\\ b = 1 \\end{cases} $$
                               <p>On peut prendre $c=0$. <strong>$p(x) = \\dfrac{1}{2}x^2 + x$</strong>.</p>`
                },
                {
                    id: 'ch10ex25q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-p$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + f' = x^2 + 2x$.</p>
                               <p>$p$ est solution de $(E)$ : $p'' + p' = x^2 + 2x$.</p>
                               <p>On soustrait : $(f - p)'' + (f - p)' = 0$.</p>
                               <p>Donc $h = f - p$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = p + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex25q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = p(x) + h(x) = \\dfrac{1}{2}x^2 + x + C_1 e^{-x} + C_2. $$
                               <p><strong>$\\boxed{f(x) = \\dfrac{1}{2}x^2 + x + C_1 e^{-x} + C_2,\\; C_1,C_2\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 26 – Équation y'' + 4y = sin 2x
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + 4y = \\sin 2x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + 4y = 0$.</li>
                        <li>Déterminer une solution particulière de la forme $g(x) = x(a\\cos 2x + b\\sin 2x)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - g$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex26q1',
                    texte: "1. Solutions de $(E_0) : y'' + 4y = 0$.",
                    solution: `<p>L'équation $y'' + 4y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = 2$.</p>
                               <p>Les solutions sont <strong>$y(x) = A\\sin(2x) + B\\cos(2x)$</strong>.</p>`
                },
                {
                    id: 'ch10ex26q2',
                    texte: "2. Solution particulière $g(x) = x(a\\cos 2x + b\\sin 2x)$.",
                    solution: `<p>On a $g(x) = ax\\cos 2x + bx\\sin 2x$.</p>
                               <p>Calculons $g'$ et $g''$ :</p>
                               $$ g'(x) = a\\cos 2x - 2ax\\sin 2x + b\\sin 2x + 2bx\\cos 2x. $$
                               $$ g'(x) = (a + 2bx)\\cos 2x + (b - 2ax)\\sin 2x. $$
                               $$ g''(x) = 2b\\cos 2x - 2(a+2bx)\\sin 2x - 2a\\sin 2x + 2(b-2ax)\\cos 2x. $$
                               $$ g''(x) = (4b - 4ax)\\cos 2x + (-4a - 4bx)\\sin 2x. $$
                               <p>On a $g'' + 4g = (4b - 4ax + 4ax)\\cos 2x + (-4a - 4bx + 4bx)\\sin 2x$.</p>
                               $$ g'' + 4g = 4b\\cos 2x - 4a\\sin 2x = \\sin 2x. $$
                               <p>Par identification :</p>
                               $$ \\begin{cases} 4b = 0 \\\\ -4a = 1 \\end{cases} \\Rightarrow \\begin{cases} b = 0 \\\\ a = -\\dfrac{1}{4} \\end{cases} $$
                               <p><strong>$g(x) = -\\dfrac{1}{4}x\\cos 2x$.</strong></p>`
                },
                {
                    id: 'ch10ex26q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-g$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + 4f = \\sin 2x$.</p>
                               <p>$g$ est solution de $(E)$ : $g'' + 4g = \\sin 2x$.</p>
                               <p>On soustrait : $(f - g)'' + 4(f - g) = 0$.</p>
                               <p>Donc $h = f - g$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = g + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex26q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = g(x) + h(x) = -\\dfrac{1}{4}x\\cos 2x + A\\sin 2x + B\\cos 2x. $$
                               <p><strong>$\\boxed{f(x) = -\\dfrac{1}{4}x\\cos 2x + A\\sin 2x + B\\cos 2x,\\; A,B\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 27 – Problème de synthèse
        // ======================================================================
        {
            numero: 27,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' - 2y' + y = e^x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' - 2y' + y = 0$.</li>
                        <li>Déterminer une solution particulière de la forme $g(x) = ax^2 e^x$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - g$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 0$ et $f'(0) = 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex27q1',
                    texte: "1. Solutions de $(E_0) : y'' - 2y' + y = 0$.",
                    solution: `<p>L'équation caractéristique est $r^2 - 2r + 1 = 0$ ⇒ $(r-1)^2 = 0$.</p>
                               <p>Racine double $r=1$.</p>
                               <p>Les solutions sont <strong>$y(x) = (C_1 x + C_2)e^x$</strong>.</p>`
                },
                {
                    id: 'ch10ex27q2',
                    texte: "2. Solution particulière $g(x) = ax^2 e^x$.",
                    solution: `<p>On a $g(x) = ax^2 e^x$.</p>
                               <p>$g'(x) = a(2x + x^2)e^x$.</p>
                               <p>$g''(x) = a(2 + 4x + x^2)e^x$.</p>
                               <p>$g'' - 2g' + g = a[(2 + 4x + x^2) - 2(2x + x^2) + x^2]e^x$.</p>
                               $$ = a[2 + 4x + x^2 - 4x - 2x^2 + x^2]e^x = a \\cdot 2 \\cdot e^x = 2a e^x. $$
                               <p>On veut $2a e^x = e^x$ ⇒ $2a = 1$ ⇒ $a = \\dfrac{1}{2}$.</p>
                               <p><strong>$g(x) = \\dfrac{1}{2}x^2 e^x$.</strong></p>`
                },
                {
                    id: 'ch10ex27q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-g$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' - 2f' + f = e^x$.</p>
                               <p>$g$ est solution de $(E)$ : $g'' - 2g' + g = e^x$.</p>
                               <p>On soustrait : $(f - g)'' - 2(f - g)' + (f - g) = 0$.</p>
                               <p>Donc $h = f - g$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = g + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex27q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = g(x) + h(x) = \\dfrac{1}{2}x^2 e^x + (C_1 x + C_2)e^x = \\left(\\dfrac{1}{2}x^2 + C_1 x + C_2\\right)e^x. $$
                               <p><strong>$\\boxed{f(x) = \\left(\\dfrac{1}{2}x^2 + C_1 x + C_2\\right)e^x,\\; C_1,C_2\\in\\mathbb{R}}$</strong></p>`
                },
                {
                    id: 'ch10ex27q5',
                    texte: "5. Solution avec $f(0)=0$ et $f'(0)=1$.",
                    solution: `<p>On a $f(x) = \\left(\\dfrac{1}{2}x^2 + C_1 x + C_2\\right)e^x$.</p>
                               <p>$f(0) = C_2 = 0$.</p>
                               <p>$f'(x) = (x + C_1)e^x + \\left(\\dfrac{1}{2}x^2 + C_1 x\\right)e^x = \\left(\\dfrac{1}{2}x^2 + (C_1+1)x + C_1\\right)e^x$.</p>
                               <p>$f'(0) = C_1 = 1$.</p>
                               <p>Donc <strong>$f(x) = \\left(\\dfrac{1}{2}x^2 + x\\right)e^x$</strong>.</p>`
                }
            ]
        }
    );

    console.log("Partie 9 (exercices 25 à 27) – Problèmes de synthèse – ajoutée avec succès.");
})();