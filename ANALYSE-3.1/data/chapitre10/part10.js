// data/chapitre10/part10.js – Exercices 28 à 30 (Problèmes avec conditions initiales)
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
        // EXERCICE 28 – Équation avec conditions initiales
        // ======================================================================
        {
            numero: 28,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' - 3y' + 2y = 0$.</p>
                      <ol>
                        <li>Résoudre $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 1$ et $f'(0) = 0$.</li>
                        <li>Déterminer la solution $g$ de $(E)$ vérifiant $g(0) = 0$ et $g'(0) = 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex28q1',
                    texte: "1. Résolution de $(E) : y'' - 3y' + 2y = 0$.",
                    solution: `<p><strong>Méthode :</strong> On écrit l'équation caractéristique.</p>
                               $$ r^2 - 3r + 2 = 0 \\iff (r-1)(r-2) = 0. $$
                               <p>Les racines sont $r_1 = 1$ et $r_2 = 2$.</p>
                               <p>Les solutions sont donc :</p>
                               <p><strong>$y(x) = C_1 e^{x} + C_2 e^{2x}$.</strong></p>`
                },
                {
                    id: 'ch10ex28q2',
                    texte: "2. Solution $f$ avec $f(0)=1$ et $f'(0)=0$.",
                    solution: `<p>$f(x) = C_1 e^{x} + C_2 e^{2x}$.</p>
                               <p>$f'(x) = C_1 e^{x} + 2C_2 e^{2x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = C_1 + C_2 = 1$.</li>
                                 <li>$f'(0) = C_1 + 2C_2 = 0$.</li>
                               </ul>
                               <p>On soustrait : $C_2 = -1$.</p>
                               <p>Alors $C_1 + (-1) = 1$ ⇒ $C_1 = 2$.</p>
                               <p><strong>$f(x) = 2e^{x} - e^{2x}$.</strong></p>`
                },
                {
                    id: 'ch10ex28q3',
                    texte: "3. Solution $g$ avec $g(0)=0$ et $g'(0)=1$.",
                    solution: `<p>$g(x) = C_1 e^{x} + C_2 e^{2x}$.</p>
                               <p>$g'(x) = C_1 e^{x} + 2C_2 e^{2x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$g(0) = C_1 + C_2 = 0$.</li>
                                 <li>$g'(0) = C_1 + 2C_2 = 1$.</li>
                               </ul>
                               <p>On soustrait : $C_2 = 1$.</p>
                               <p>Alors $C_1 + 1 = 0$ ⇒ $C_1 = -1$.</p>
                               <p><strong>$g(x) = -e^{x} + e^{2x}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 29 – Équation avec conditions initiales (second membre)
        // ======================================================================
        {
            numero: 29,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' - 4y = e^{2x}$.</p>
                      <ol>
                        <li>Déterminer les solutions de l'équation homogène $y'' - 4y = 0$.</li>
                        <li>Déterminer une solution particulière de la forme $g(x) = axe^{2x}$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 0$ et $f'(0) = 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex29q1',
                    texte: "1. Solutions de $y'' - 4y = 0$.",
                    solution: `<p>L'équation caractéristique est $r^2 - 4 = 0$ ⇒ $r = \\pm 2$.</p>
                               <p>Les solutions sont <strong>$y(x) = C_1 e^{2x} + C_2 e^{-2x}$</strong>.</p>`
                },
                {
                    id: 'ch10ex29q2',
                    texte: "2. Solution particulière $g(x) = axe^{2x}$.",
                    solution: `<p>$g(x) = ax e^{2x}$.</p>
                               <p>$g'(x) = a(1 + 2x)e^{2x}$.</p>
                               <p>$g''(x) = a(4 + 4x)e^{2x} = 4a(1 + x)e^{2x}$.</p>
                               <p>$g'' - 4g = 4a(1 + x)e^{2x} - 4ax e^{2x} = 4a e^{2x}$.</p>
                               <p>On veut $4a e^{2x} = e^{2x}$ ⇒ $4a = 1$ ⇒ $a = \\dfrac{1}{4}$.</p>
                               <p><strong>$g(x) = \\dfrac{1}{4}x e^{2x}$.</strong></p>`
                },
                {
                    id: 'ch10ex29q3',
                    texte: "3. Solution $f$ avec $f(0)=0$ et $f'(0)=1$.",
                    solution: `<p>$f(x) = C_1 e^{2x} + C_2 e^{-2x} + \\dfrac{1}{4}x e^{2x}$.</p>
                               <p>$f'(x) = 2C_1 e^{2x} - 2C_2 e^{-2x} + \\dfrac{1}{4}(1 + 2x)e^{2x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = C_1 + C_2 = 0$ ⇒ $C_2 = -C_1$.</li>
                                 <li>$f'(0) = 2C_1 - 2C_2 + \\dfrac{1}{4} = 2C_1 - 2(-C_1) + \\dfrac{1}{4} = 4C_1 + \\dfrac{1}{4} = 1$.</li>
                               </ul>
                               <p>$4C_1 = \\dfrac{3}{4}$ ⇒ $C_1 = \\dfrac{3}{16}$.</p>
                               <p>$C_2 = -\\dfrac{3}{16}$.</p>
                               <p><strong>$f(x) = \\dfrac{3}{16}e^{2x} - \\dfrac{3}{16}e^{-2x} + \\dfrac{1}{4}x e^{2x}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 30 – Équation avec conditions initiales
        // ======================================================================
        {
            numero: 30,
            enonce: `<p>On considère l'équation différentielle $(E) : y'' + 2y' + y = 0$.</p>
                      <ol>
                        <li>Résoudre $(E)$.</li>
                        <li>Déterminer la solution $f$ de $(E)$ vérifiant $f(0) = 2$ et $f'(0) = -1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex30q1',
                    texte: "1. Résolution de $y'' + 2y' + y = 0$.",
                    solution: `<p>L'équation caractéristique est $r^2 + 2r + 1 = 0$ ⇒ $(r+1)^2 = 0$.</p>
                               <p>Racine double $r = -1$.</p>
                               <p>Les solutions sont <strong>$y(x) = (C_1 x + C_2)e^{-x}$</strong>.</p>`
                },
                {
                    id: 'ch10ex30q2',
                    texte: "2. Solution $f$ avec $f(0)=2$ et $f'(0)=-1$.",
                    solution: `<p>$f(x) = (C_1 x + C_2)e^{-x}$.</p>
                               <p>$f'(x) = C_1 e^{-x} - (C_1 x + C_2)e^{-x} = (C_1 - C_1 x - C_2)e^{-x}$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$f(0) = C_2 = 2$.</li>
                                 <li>$f'(0) = C_1 - C_2 = -1$ ⇒ $C_1 - 2 = -1$ ⇒ $C_1 = 1$.</li>
                               </ul>
                               <p><strong>$f(x) = (x + 2)e^{-x}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 10 (exercices 28 à 30) – Problèmes avec conditions initiales – ajoutée avec succès.");
})();