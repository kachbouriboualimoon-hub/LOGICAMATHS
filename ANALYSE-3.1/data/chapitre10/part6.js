// data/chapitre10/part6.js – Exercices 16 à 18 (Équations avec second membre, applications)
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
        // EXERCICE 16 – Équation y'' + y' = 0
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ l'équation différentielle $y'' + y' = 0$.</p>
                      <p>En déduire les solutions de l'équation différentielle $y'' + y' = 2$.</p>`,
            questions: [
                {
                    id: 'ch10ex16q1',
                    texte: "1. Résolution de $y'' + y' = 0$.",
                    solution: `<p><strong>Méthode :</strong> On pose $z = y'$. Alors $z' = y''$.</p>
                               <p>L'équation devient $z' + z = 0$ ⇒ $z' = -z$.</p>
                               <p>Les solutions sont $z(x) = Ce^{-x}$.</p>
                               <p>Comme $y' = z$, on a $y(x) = \\int z(x) dx = -Ce^{-x} + D$.</p>
                               <p>Posons $C_1 = -C$. Alors <strong>$y(x) = C_1 e^{-x} + D$</strong>.</p>`
                },
                {
                    id: 'ch10ex16q2',
                    texte: "2. Résolution de $y'' + y' = 2$.",
                    solution: `<p><strong>Méthode :</strong> On cherche d'abord une solution particulière constante.</p>
                               <p>Posons $y_p = k$ (constante). Alors $y_p' = 0$ et $y_p'' = 0$.</p>
                               <p>On a $0 + 0 = 2$, ce qui est impossible. Donc il n'y a pas de solution constante.</p>
                               <p>Cherchons une solution particulière de la forme $y_p = ax$.</p>
                               <p>$y_p' = a$, $y_p'' = 0$. On a $0 + a = 2$ ⇒ $a = 2$.</p>
                               <p>Donc une solution particulière est $y_p = 2x$.</p>
                               <p>Les solutions générales sont la somme de la solution particulière et des solutions de l'équation homogène :</p>
                               <p><strong>$y(x) = C_1 e^{-x} + D + 2x$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17 – Équation y'' + y' = x²
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit l'équation différentielle $(E) : y'' + y' = x^2$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation différentielle $(E_0) : y'' + y' = 0$.</li>
                        <li>Déterminer un polynôme du second degré qui vérifie $(E)$.</li>
                        <li>Montrer qu'une fonction $f$ est solution de $(E)$, si et seulement si, $f - p$ est une solution de $(E_0)$.</li>
                        <li>En déduire les solutions de l'équation différentielle $(E)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex17q1',
                    texte: "1. Solutions de $(E_0)$.",
                    solution: `<p>D'après l'exercice précédent, les solutions de $y'' + y' = 0$ sont :</p>
                               <p><strong>$y(x) = C_1 e^{-x} + C_2$.</strong></p>`
                },
                {
                    id: 'ch10ex17q2',
                    texte: "2. Polynôme du second degré solution de $(E)$.",
                    solution: `<p>Cherchons une solution particulière de la forme $p(x) = ax^2 + bx + c$.</p>
                               <p>$p'(x) = 2ax + b$, $p''(x) = 2a$.</p>
                               <p>On a $p'' + p' = 2a + (2ax + b) = 2ax + (2a + b) = x^2$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} 2a = 1 \\\\ 2a + b = 0 \\\\ 2a + b = 0 \\end{cases} \\Rightarrow \\begin{cases} a = \\dfrac{1}{2} \\\\ b = -1 \\\\ c \\text{ quelconque} \\end{cases} $$
                               <p>On peut prendre $c=0$. Donc <strong>$p(x) = \\dfrac{1}{2}x^2 - x$</strong>.</p>`
                },
                {
                    id: 'ch10ex17q3',
                    texte: "3. $f$ solution de $(E)$ ⇔ $f-p$ solution de $(E_0)$.",
                    solution: `<p>Si $f$ est solution de $(E)$ : $f'' + f' = x^2$.</p>
                               <p>$p$ est solution de $(E)$ : $p'' + p' = x^2$.</p>
                               <p>On soustrait : $(f - p)'' + (f - p)' = 0$.</p>
                               <p>Donc $h = f - p$ est solution de $(E_0)$.</p>
                               <p>Réciproquement, si $h$ est solution de $(E_0)$, alors $f = p + h$ est solution de $(E)$.</p>`
                },
                {
                    id: 'ch10ex17q4',
                    texte: "4. Solutions de $(E)$.",
                    solution: `<p>Les solutions de $(E)$ sont :</p>
                               $$ f(x) = p(x) + h(x) = \\dfrac{1}{2}x^2 - x + C_1 e^{-x} + C_2. $$
                               <p><strong>$\\boxed{f(x) = \\dfrac{1}{2}x^2 - x + C_1 e^{-x} + C_2,\\; C_1,C_2\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18 – Mouvement d'un mobile avec accélération
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Un mobile se déplace sur un axe avec une accélération $a(t) = 2\\sin t$.</p>
                      <p>À l'instant $t=0$, le mobile est à l'origine avec une vitesse nulle.</p>
                      <ol>
                        <li>Donner l'expression de la vitesse $v(t)$.</li>
                        <li>Donner l'expression de la position $x(t)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex18q1',
                    texte: "1. Expression de la vitesse $v(t)$.",
                    solution: `<p>L'accélération est $a(t) = v'(t) = 2\\sin t$.</p>
                               <p>Donc $v(t) = \\int 2\\sin t\\, dt = -2\\cos t + C$.</p>
                               <p>Condition initiale : $v(0) = 0$ ⇒ $-2\\cos 0 + C = 0$ ⇒ $-2 + C = 0$ ⇒ $C = 2$.</p>
                               <p><strong>$v(t) = 2 - 2\\cos t = 2(1 - \\cos t)$.</strong></p>`
                },
                {
                    id: 'ch10ex18q2',
                    texte: "2. Expression de la position $x(t)$.",
                    solution: `<p>La vitesse est $v(t) = x'(t) = 2(1 - \\cos t)$.</p>
                               <p>Donc $x(t) = \\int 2(1 - \\cos t)\\, dt = 2t - 2\\sin t + D$.</p>
                               <p>Condition initiale : $x(0) = 0$ ⇒ $0 - 0 + D = 0$ ⇒ $D = 0$.</p>
                               <p><strong>$x(t) = 2t - 2\\sin t = 2(t - \\sin t)$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 16 à 18) – Équations avec second membre – ajoutée avec succès.");
})();