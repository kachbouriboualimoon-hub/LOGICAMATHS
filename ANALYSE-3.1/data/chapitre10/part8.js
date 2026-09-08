// data/chapitre10/part8.js – Exercices 22 à 24 (Équations avec second membre, pendule, équation intégrale)
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
        // EXERCICE 22 – Équation y'' + y = x² + x
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + y = x^2 + x$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + y = 0$.</li>
                        <li>Déterminer un polynôme du second degré qui vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - p$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex22q1',
                    texte: "1. Solutions de $(E_0) : y'' + y = 0$.",
                    solution: `<p>L'équation $y'' + y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = 1$.</p>
                               <p>Les solutions sont <strong>$y(x) = A\\sin x + B\\cos x$</strong>.</p>`
                },
                {
                    id: 'ch10ex22q2',
                    texte: "2. Polynôme du second degré solution de $(E)$.",
                    solution: `<p>Cherchons une solution particulière de la forme $p(x) = ax^2 + bx + c$.</p>
                               <p>$p'(x) = 2ax + b$, $p''(x) = 2a$.</p>
                               <p>On a $p'' + p = 2a + (ax^2 + bx + c) = ax^2 + bx + (2a + c) = x^2 + x$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} a = 1 \\\\ b = 1 \\\\ 2a + c = 0 \\end{cases} \\Rightarrow \\begin{cases} a = 1 \\\\ b = 1 \\\\ c = -2 \\end{cases} $$
                               <p><strong>$p(x) = x^2 + x - 2$.</strong></p>`
                },
                {
                    id: 'ch10ex22q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-p$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + f = x^2 + x$.</p>
                               <p>$p$ est solution de $(E)$ : $p'' + p = x^2 + x$.</p>
                               <p>On soustrait : $(f - p)'' + (f - p) = 0$.</p>
                               <p>Donc $h = f - p$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = p + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex22q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = p(x) + h(x) = x^2 + x - 2 + A\\sin x + B\\cos x. $$
                               <p><strong>$\\boxed{f(x) = x^2 + x - 2 + A\\sin x + B\\cos x,\\; A,B\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – Pendule (équation y'' + y = 1)
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>On considère l'équation différentielle $y'' + y = 1$.</p>
                      <ol>
                        <li>Résoudre cette équation.</li>
                        <li>Déterminer la solution $f$ de cette équation vérifiant $f(0) = 0$ et $f'(0) = 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex23q1',
                    texte: "1. Résolution de $y'' + y = 1$.",
                    solution: `<p><strong>Équation homogène :</strong> $y'' + y = 0$ a pour solutions $y_h = A\\sin x + B\\cos x$.</p>
                               <p><strong>Solution particulière :</strong> Cherchons une constante $y_p = k$.</p>
                               <p>$y_p' = 0$, $y_p'' = 0$. On a $0 + k = 1$ ⇒ $k = 1$.</p>
                               <p>Donc <strong>$y(x) = A\\sin x + B\\cos x + 1$</strong>.</p>`
                },
                {
                    id: 'ch10ex23q2',
                    texte: "2. Solution avec $f(0)=0$ et $f'(0)=1$.",
                    solution: `<p>$f(x) = A\\sin x + B\\cos x + 1$.</p>
                               <p>$f'(x) = A\\cos x - B\\sin x$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = B + 1 = 0$ ⇒ $B = -1$.</li>
                                 <li>$f'(0) = A = 1$ ⇒ $A = 1$.</li>
                               </ul>
                               <p><strong>$f(x) = \\sin x - \\cos x + 1$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24 – Fonction définie par morceaux
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\begin{cases} e^x & \\text{si } x \\le 0 \\\\ \\sin x + 1 & \\text{si } x > 0 \\end{cases}$.</p>
                      <p>Montrer que $f$ est solution sur $\\mathbb{R}$ de l'équation différentielle $y' = y$ sur $]-\\infty,0]$ et de $y'' + y = 1$ sur $]0,+\\infty[$, et que $f$ est continue en $0$.</p>`,
            questions: [
                {
                    id: 'ch10ex24q1',
                    texte: "Vérification des équations sur chaque intervalle.",
                    solution: `<p><strong>Sur $]-\\infty,0]$ :</strong></p>
                               <p>$f(x) = e^x$, $f'(x) = e^x = f(x)$. Donc $f$ est solution de $y' = y$.</p>
                               <p><strong>Sur $]0,+\\infty[$ :</strong></p>
                               <p>$f(x) = \\sin x + 1$.</p>
                               <p>$f'(x) = \\cos x$.</p>
                               <p>$f''(x) = -\\sin x$.</p>
                               <p>$f''(x) + f(x) = -\\sin x + (\\sin x + 1) = 1$.</p>
                               <p>Donc $f$ est solution de $y'' + y = 1$.</p>
                               <p><strong>Continuité en $0$ :</strong></p>
                               <p>$\\lim_{x\\to0^-} f(x) = \\lim_{x\\to0^-} e^x = 1$.</p>
                               <p>$\\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} (\\sin x + 1) = 1$.</p>
                               <p>$f(0) = e^0 = 1$.</p>
                               <p><strong>$f$ est continue en $0$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 8 (exercices 22 à 24) – Équations avec second membre – ajoutée avec succès.");
})();