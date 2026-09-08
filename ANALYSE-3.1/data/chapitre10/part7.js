// data/chapitre10/part7.js – Exercices 19 à 21 (Équations avec second membre, problèmes de synthèse)
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
        // EXERCICE 19 – Équation y'' + 2y = x²
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + 2y = x^2$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + 2y = 0$.</li>
                        <li>Déterminer un polynôme du second degré qui vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - p$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex19q1',
                    texte: "1. Solutions de $(E_0) : y'' + 2y = 0$.",
                    solution: `<p>L'équation $y'' + 2y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega^2 = 2$.</p>
                               <p>Les solutions sont <strong>$y(x) = A\\sin(\\sqrt{2}x) + B\\cos(\\sqrt{2}x)$</strong>.</p>`
                },
                {
                    id: 'ch10ex19q2',
                    texte: "2. Polynôme du second degré solution de $(E)$.",
                    solution: `<p>Cherchons une solution particulière de la forme $p(x) = ax^2 + bx + c$.</p>
                               <p>$p'(x) = 2ax + b$, $p''(x) = 2a$.</p>
                               <p>On a $p'' + 2p = 2a + 2(ax^2 + bx + c) = 2ax^2 + 2bx + (2a + 2c) = x^2$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} 2a = 1 \\\\ 2b = 0 \\\\ 2a + 2c = 0 \\end{cases} \\Rightarrow \\begin{cases} a = \\dfrac{1}{2} \\\\ b = 0 \\\\ c = -\\dfrac{1}{2} \\end{cases} $$
                               <p><strong>$p(x) = \\dfrac{1}{2}x^2 - \\dfrac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch10ex19q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-p$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + 2f = x^2$.</p>
                               <p>$p$ est solution de $(E)$ : $p'' + 2p = x^2$.</p>
                               <p>On soustrait : $(f - p)'' + 2(f - p) = 0$.</p>
                               <p>Donc $h = f - p$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = p + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex19q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = p(x) + h(x) = \\dfrac{1}{2}x^2 - \\dfrac{1}{2} + A\\sin(\\sqrt{2}x) + B\\cos(\\sqrt{2}x). $$
                               <p><strong>$\\boxed{f(x) = \\dfrac{1}{2}x^2 - \\dfrac{1}{2} + A\\sin(\\sqrt{2}x) + B\\cos(\\sqrt{2}x)}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 20 – Équation 4y'' + π²y = 0 avec conditions
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Soit l'équation différentielle $4y'' + \\pi^2 y = 0$.</p>
                      <ol>
                        <li>Résoudre cette équation différentielle.</li>
                        <li>Le plan est rapporté à un repère orthonormé. Déterminer la fonction $g$ solution de cette équation différentielle, qui satisfait aux conditions ci-dessous. La courbe représentative de $g$ passe par le point $N$ de coordonnées $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{2}}{2}\\right)$. La tangente à cette courbe en $N$ est parallèle à l'axe des abscisses.</li>
                        <li>Vérifier que pour tout réel $x$, $g(x) = \\dfrac{\\sqrt{2}}{2}\\cos\\left(\\dfrac{\\pi}{2}\\left(x - \\dfrac{1}{2}\\right)\\right)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex20q1',
                    texte: "1. Résolution de $4y'' + \\pi^2 y = 0$.",
                    solution: `<p>On divise par $4$ : $y'' + \\dfrac{\\pi^2}{4}y = 0$.</p>
                               <p>C'est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = \\dfrac{\\pi}{2}$.</p>
                               <p>Les solutions sont <strong>$y(x) = A\\sin\\left(\\dfrac{\\pi}{2}x\\right) + B\\cos\\left(\\dfrac{\\pi}{2}x\\right)$</strong>.</p>`
                },
                {
                    id: 'ch10ex20q2',
                    texte: "2. Détermination de $g$ avec les conditions.",
                    solution: `<p>On a $g(x) = A\\sin\\left(\\dfrac{\\pi}{2}x\\right) + B\\cos\\left(\\dfrac{\\pi}{2}x\\right)$.</p>
                               <p>$g'(x) = \\dfrac{\\pi}{2}A\\cos\\left(\\dfrac{\\pi}{2}x\\right) - \\dfrac{\\pi}{2}B\\sin\\left(\\dfrac{\\pi}{2}x\\right)$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$g\\left(\\dfrac{1}{2}\\right) = \\dfrac{\\sqrt{2}}{2}$.</li>
                                 <li>$g'\\left(\\dfrac{1}{2}\\right) = 0$ (tangente horizontale).</li>
                               </ul>
                               <p>$g'\\left(\\dfrac{1}{2}\\right) = \\dfrac{\\pi}{2}A\\cos\\left(\\dfrac{\\pi}{4}\\right) - \\dfrac{\\pi}{2}B\\sin\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\pi}{2} \\cdot \\dfrac{\\sqrt{2}}{2}(A - B) = 0$ ⇒ $A = B$.</p>
                               <p>$g\\left(\\dfrac{1}{2}\\right) = A\\sin\\left(\\dfrac{\\pi}{4}\\right) + A\\cos\\left(\\dfrac{\\pi}{4}\\right) = A\\left(\\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2}\\right) = A\\sqrt{2} = \\dfrac{\\sqrt{2}}{2}$ ⇒ $A = \\dfrac{1}{2}$.</p>
                               <p>Donc <strong>$g(x) = \\dfrac{1}{2}\\sin\\left(\\dfrac{\\pi}{2}x\\right) + \\dfrac{1}{2}\\cos\\left(\\dfrac{\\pi}{2}x\\right)$</strong>.</p>`
                },
                {
                    id: 'ch10ex20q3',
                    texte: "3. Vérification de l'expression.",
                    solution: `<p>On a $\\dfrac{\\sqrt{2}}{2}\\cos\\left(\\dfrac{\\pi}{2}\\left(x - \\dfrac{1}{2}\\right)\\right) = \\dfrac{\\sqrt{2}}{2}\\left(\\cos\\left(\\dfrac{\\pi}{2}x - \\dfrac{\\pi}{4}\\right)\\right)$.</p>
                               <p>On utilise $\\cos(a-b) = \\cos a\\cos b + \\sin a\\sin b$.</p>
                               $$ \\dfrac{\\sqrt{2}}{2}\\left(\\cos\\left(\\dfrac{\\pi}{2}x\\right)\\cos\\left(\\dfrac{\\pi}{4}\\right) + \\sin\\left(\\dfrac{\\pi}{2}x\\right)\\sin\\left(\\dfrac{\\pi}{4}\\right)\\right) $$
                               $$ = \\dfrac{\\sqrt{2}}{2}\\left(\\dfrac{\\sqrt{2}}{2}\\cos\\left(\\dfrac{\\pi}{2}x\\right) + \\dfrac{\\sqrt{2}}{2}\\sin\\left(\\dfrac{\\pi}{2}x\\right)\\right) = \\dfrac{1}{2}\\cos\\left(\\dfrac{\\pi}{2}x\\right) + \\dfrac{1}{2}\\sin\\left(\\dfrac{\\pi}{2}x\\right). $$
                               <p>C'est bien l'expression trouvée. <strong>La vérification est correcte.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21 – Équation intégrale
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>On se propose de déterminer les fonctions $f$ continues sur $\\mathbb{R}$ et vérifiant l'équation $(E)$ :</p>
                      $$ f(x) = \\int_0^x f(t)\\,dt + x. $$
                      <ol>
                        <li>Montrer que si une fonction $f$ vérifie l'équation $(E)$, alors $f$ est dérivable sur $\\mathbb{R}$.</li>
                        <li>Montrer que toute solution de $(E)$ est solution de l'équation différentielle $(E') : y' = y + 1$. Réciproquement, quelle condition doit vérifier une solution de $(E')$ pour être une solution de $(E)$ ?</li>
                        <li>Résoudre $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex21q1',
                    texte: "1. Dérivabilité de $f$.",
                    solution: `<p>Si $f$ vérifie $(E)$, alors $f(x) = \\displaystyle\\int_0^x f(t)\\,dt + x$.</p>
                               <p>La fonction $x\\mapsto\\displaystyle\\int_0^x f(t)\\,dt$ est dérivable (car $f$ est continue) de dérivée $f(x)$.</p>
                               <p>Donc $f$ est dérivable comme somme de fonctions dérivables.</p>
                               <p><strong>$f$ est dérivable sur $\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch10ex21q2',
                    texte: "2. Équation différentielle et condition réciproque.",
                    solution: `<p>On dérive $(E)$ : $f'(x) = f(x) + 1$.</p>
                               <p>Donc $f$ est solution de $y' = y + 1$.</p>
                               <p>Réciproquement, si $f$ est solution de $y' = y + 1$, alors $f'(x) = f(x) + 1$.</p>
                               <p>Pour que $f$ vérifie $(E)$, il faut que $f(0) = \\displaystyle\\int_0^0 f(t)\\,dt + 0 = 0$.</p>
                               <p>Donc <strong>la condition est $f(0) = 0$</strong>.</p>`
                },
                {
                    id: 'ch10ex21q3',
                    texte: "3. Résolution de $(E)$.",
                    solution: `<p>On résout $y' = y + 1$.</p>
                               <p>C'est de la forme $y' = ay + b$ avec $a=1$ et $b=1$.</p>
                               <p>Les solutions sont $y(x) = Ce^{x} - 1$.</p>
                               <p>Condition $f(0) = 0$ : $C - 1 = 0$ ⇒ $C = 1$.</p>
                               <p><strong>$f(x) = e^x - 1$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 7 (exercices 19 à 21) – Équations avec second membre – ajoutée avec succès.");
})();