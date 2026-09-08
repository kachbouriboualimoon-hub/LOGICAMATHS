// data/chapitre10/part11.js – Exercices 31 à 33 (Problèmes de synthèse)
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
        // EXERCICE 31 – Circuit RLC (équation différentielle du second ordre)
        // ======================================================================
        {
            numero: 31,
            enonce: `<p>On considère un circuit électrique fermé comprenant un condensateur de capacité $C$, une bobine d'inductance $L$ et un interrupteur.</p>
                      <p>On admet que la fonction $q$ (charge du condensateur) est solution de l'équation différentielle $(E) : y'' + \\dfrac{1}{LC}y = 0$.</p>
                      <p>On prend $C = 1.25 \\times 10^{-3}$ F et $L = 0.5 \\times 10^{-2}$ H.</p>
                      <ol>
                        <li>Résoudre l'équation différentielle $(E)$.</li>
                        <li>Déterminer la solution $q$ de $(E)$ vérifiant $q(0) = 6 \\times 10^{-3}$ et $q'(0) = 0$.</li>
                        <li>On sait que l'intensité $i(t)$ vérifie $i(t) = -q'(t)$.</li>
                        <li>a. Vérifier que pour tout $t \\ge 0$, $i(t) = 2.4\\sin(400t)$.</li>
                        <li>b. Calculer $\\dfrac{400}{\\pi}\\displaystyle\\int_0^{\\pi/400} \\cos(800t)\\,dt$.</li>
                        <li>c. On désigne par $I_e$ la valeur efficace de l'intensité. Son carré est donné par $(I_e)^2 = \\dfrac{400}{\\pi}\\displaystyle\\int_0^{\\pi/400} i^2(t)\\,dt$. Calculer $(I_e)^2$ et donner une valeur approchée de $I_e$ à $10^{-3}$ près.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex31q1',
                    texte: "1. Résolution de $(E)$.",
                    solution: `<p>L'équation est $y'' + \\dfrac{1}{LC}y = 0$.</p>
                               <p>On calcule $\\dfrac{1}{LC} = \\dfrac{1}{1.25 \\times 10^{-3} \\times 0.5 \\times 10^{-2}} = \\dfrac{1}{6.25 \\times 10^{-6}} = 160000$.</p>
                               <p>Donc $\\omega^2 = 160000$ ⇒ $\\omega = 400$.</p>
                               <p>Les solutions sont <strong>$y(t) = A\\sin(400t) + B\\cos(400t)$</strong>.</p>`
                },
                {
                    id: 'ch10ex31q2',
                    texte: "2. Solution $q$ avec $q(0)=6\\times10^{-3}$ et $q'(0)=0$.",
                    solution: `<p>$q(t) = A\\sin(400t) + B\\cos(400t)$.</p>
                               <p>$q'(t) = 400A\\cos(400t) - 400B\\sin(400t)$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$q(0) = B = 6 \\times 10^{-3}$.</li>
                                 <li>$q'(0) = 400A = 0$ ⇒ $A = 0$.</li>
                               </ul>
                               <p><strong>$q(t) = 6 \\times 10^{-3}\\cos(400t)$.</strong></p>`
                },
                {
                    id: 'ch10ex31q3',
                    texte: "3.a. Vérification de $i(t)$.",
                    solution: `<p>$i(t) = -q'(t) = -(-6 \\times 10^{-3} \\times 400 \\sin(400t)) = 2.4\\sin(400t)$.</p>
                               <p><strong>$i(t) = 2.4\\sin(400t)$.</strong></p>`
                },
                {
                    id: 'ch10ex31q4',
                    texte: "3.b. Calcul de l'intégrale.",
                    solution: `<p>$$ \\dfrac{400}{\\pi}\\int_0^{\\pi/400} \\cos(800t)\\,dt = \\dfrac{400}{\\pi} \\cdot \\left[\\dfrac{\\sin(800t)}{800}\\right]_0^{\\pi/400} = \\dfrac{1}{2\\pi} \\cdot \\sin(2\\pi) = 0. $$</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                },
                {
                    id: 'ch10ex31q5',
                    texte: "3.c. Calcul de $I_e$.",
                    solution: `<p>$$ (I_e)^2 = \\dfrac{400}{\\pi}\\int_0^{\\pi/400} (2.4)^2\\sin^2(400t)\\,dt. $$</p>
                               <p>On utilise $\\sin^2 u = \\dfrac{1-\\cos(2u)}{2}$.</p>
                               <p>$$ (I_e)^2 = \\dfrac{400}{\\pi} \\cdot (2.4)^2 \\cdot \\dfrac{1}{2}\\int_0^{\\pi/400} (1 - \\cos(800t))\\,dt. $$</p>
                               <p>$$ = \\dfrac{400}{\\pi} \\cdot \\dfrac{(2.4)^2}{2} \\cdot \\left( \\dfrac{\\pi}{400} - 0 \\right) = \\dfrac{(2.4)^2}{2} = 2.88. $$</p>
                               <p>$I_e = \\sqrt{2.88} = \\sqrt{\\dfrac{288}{100}} = \\dfrac{12\\sqrt{2}}{10} \\approx 1.697$.</p>
                               <p><strong>$I_e \\approx 1.697$ A.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 32 – Équation y'' - 2y' + 2y = 0
        // ======================================================================
        {
            numero: 32,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' - 2y' + 2y = 0$.</p>
                      <ol>
                        <li>Résoudre $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 1$ et $f'(0) = 0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex32q1',
                    texte: "1. Résolution de $(E)$.",
                    solution: `<p>L'équation caractéristique est $r^2 - 2r + 2 = 0$.</p>
                               <p>$\\Delta = 4 - 8 = -4 = (2i)^2$.</p>
                               <p>Les racines sont $r = \\dfrac{2 \\pm 2i}{2} = 1 \\pm i$.</p>
                               <p>Les solutions sont <strong>$y(x) = e^x(A\\cos x + B\\sin x)$</strong>.</p>`
                },
                {
                    id: 'ch10ex32q2',
                    texte: "2. Solution $f$ avec $f(0)=1$ et $f'(0)=0$.",
                    solution: `<p>$f(x) = e^x(A\\cos x + B\\sin x)$.</p>
                               <p>$f'(x) = e^x(A\\cos x + B\\sin x) + e^x(-A\\sin x + B\\cos x)$.</p>
                               <p>$f'(x) = e^x((A+B)\\cos x + (B-A)\\sin x)$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = A = 1$.</li>
                                 <li>$f'(0) = A + B = 0$ ⇒ $1 + B = 0$ ⇒ $B = -1$.</li>
                               </ul>
                               <p><strong>$f(x) = e^x(\\cos x - \\sin x)$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 33 – Équation y'' - 4y' + 4y = 0
        // ======================================================================
        {
            numero: 33,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' - 4y' + 4y = 0$.</p>
                      <ol>
                        <li>Résoudre $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 0$ et $f'(0) = 1$.</li>
                        <li>Déterminer la solution $g$ de $(E)$ vérifiant $g(0) = 1$ et $g'(0) = 0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex33q1',
                    texte: "1. Résolution de $(E)$.",
                    solution: `<p>L'équation caractéristique est $r^2 - 4r + 4 = 0$ ⇒ $(r-2)^2 = 0$.</p>
                               <p>Racine double $r=2$.</p>
                               <p>Les solutions sont <strong>$y(x) = (C_1 x + C_2)e^{2x}$</strong>.</p>`
                },
                {
                    id: 'ch10ex33q2',
                    texte: "2. Solution $f$ avec $f(0)=0$ et $f'(0)=1$.",
                    solution: `<p>$f(x) = (C_1 x + C_2)e^{2x}$.</p>
                               <p>$f'(x) = C_1 e^{2x} + 2(C_1 x + C_2)e^{2x} = (2C_1 x + C_1 + 2C_2)e^{2x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = C_2 = 0$.</li>
                                 <li>$f'(0) = C_1 + 2C_2 = C_1 = 1$.</li>
                               </ul>
                               <p><strong>$f(x) = xe^{2x}$.</strong></p>`
                },
                {
                    id: 'ch10ex33q3',
                    texte: "3. Solution $g$ avec $g(0)=1$ et $g'(0)=0$.",
                    solution: `<p>$g(x) = (C_1 x + C_2)e^{2x}$.</p>
                               <p>$g'(x) = (2C_1 x + C_1 + 2C_2)e^{2x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$g(0) = C_2 = 1$.</li>
                                 <li>$g'(0) = C_1 + 2C_2 = C_1 + 2 = 0$ ⇒ $C_1 = -2$.</li>
                               </ul>
                               <p><strong>$g(x) = (-2x + 1)e^{2x}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 11 (exercices 31 à 33) – Problèmes de synthèse – ajoutée avec succès.");
})();