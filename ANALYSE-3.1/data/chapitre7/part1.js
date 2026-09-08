// data/chapitre7/part1.js – Exercices 1 à 5 (QCM et Vrai-Faux)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch7 = data.chapitres.find(c => c.id === 7);
    if (!ch7) {
        console.error("Chapitre 7 introuvable. Chargez d'abord data/chapitre7_base.js.");
        return;
    }

    ch7.exercices.push(
        // ======================================================================
        // EXERCICE 1 – QCM
        // ======================================================================
        {
            numero: 1,
            enonce: `<p><strong>QCM :</strong> Cocher la réponse exacte.</p>
                      <ol>
                        <li>D'après la représentation graphique ci-contre, l'aire de la partie limitée par la courbe de $f$, l'axe des abscisses et les droites d'équations $x=-2$ et $x=3$ est comprise entre :<br>
                        a) 7 et 13 &nbsp;&nbsp; b) 15 et 20 &nbsp;&nbsp; c) 14 et 21</li>
                        <li>Soit $I=\\int_0^1 t\\cos^2(\\pi t) dt$ et $J=\\int_0^1 t\\sin^2(\\pi t) dt$. Alors $I+J$ est égal à :<br>
                        a) 1 &nbsp;&nbsp; b) 2 &nbsp;&nbsp; c) 0</li>
                        <li>Soit $I=\\int_{-1}^1 (-3x^3+5x) dx$ et $J=\\int_{-1}^1 |-3x^3+5x| dx$. Alors :<br>
                        a) $I\\le J$ &nbsp;&nbsp; b) $I=J$ &nbsp;&nbsp; c) $I\\ge J$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex1q1',
                    texte: "1. Réponse :",
                    solution: `<p><strong>Réponse c) 14 et 21.</strong></p>
                               <p>L'aire sous la courbe est comprise entre les sommes des aires des rectangles inférieurs et supérieurs.</p>`
                },
                {
                    id: 'ch7ex1q2',
                    texte: "2. Réponse :",
                    solution: `<p><strong>Réponse a) 1.</strong></p>
                               <p>$\\cos^2(\\pi t)+\\sin^2(\\pi t)=1$.</p>
                               <p>Donc $I+J = \\int_0^1 t(\\cos^2(\\pi t)+\\sin^2(\\pi t)) dt = \\int_0^1 t dt = \\dfrac{1}{2}$.</p>`
                },
                {
                    id: 'ch7ex1q3',
                    texte: "3. Réponse :",
                    solution: `<p><strong>Réponse a) $I\\le J$.</strong></p>
                               <p>On a $|-3x^3+5x| \\ge -3x^3+5x$ pour tout $x$. Donc $J \\ge I$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2 – Vrai-Faux
        // ======================================================================
        {
            numero: 2,
            enonce: `<p><strong>Vrai-Faux :</strong> Répondre par vrai ou faux en justifiant la réponse.</p>
                      <ol>
                        <li>$\\int_0^{\\pi/2} \\sin x dx = \\int_{4\\pi}^{9\\pi/2} \\sin x dx$.</li>
                        <li>$\\int_{-1}^1 |x| dx = 1$.</li>
                        <li>Si $f$ est dérivable sur $[a,b]$ et $f'$ continue, alors $\\int_a^b f(x) dx = [x f(x)]_a^b - \\int_a^b x f'(x) dx$.</li>
                        <li>Si $f$ est continue sur $[0,1]$ et $f\\le1$, alors $\\int_0^1 f(x) dx \\le 1$.</li>
                        <li>D'après la représentation graphique ci-contre, $\\int_{-2}^2 f(x) dx \\ge 0$.</li>
                        <li>Si $\\int_a^b f(x) dx \\ge 0$, alors $f\\ge0$ sur $[a,b]$.</li>
                        <li>La fonction $x\\mapsto\\int_0^x \\dfrac{1}{1+t^2} dt$ est définie sur $\\mathbb{R}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex2q1',
                    texte: "1. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>$\\int_0^{\\pi/2} \\sin x dx = [-\\cos x]_0^{\\pi/2} = 0 - (-1) = 1$.</p>
                               <p>$\\int_{4\\pi}^{9\\pi/2} \\sin x dx = [-\\cos x]_{4\\pi}^{9\\pi/2} = 0 - (-1) = 1$.</p>`
                },
                {
                    id: 'ch7ex2q2',
                    texte: "2. Vrai ou faux ?",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>$\\int_{-1}^1 |x| dx = 2\\int_0^1 x dx = 2\\cdot\\dfrac{1}{2} = 1$.</p>`
                },
                {
                    id: 'ch7ex2q3',
                    texte: "3. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>C'est la formule d'intégration par parties avec $u=x$, $v'=f'(x)$.</p>
                               <p>$\\int_a^b x f'(x) dx = [x f(x)]_a^b - \\int_a^b f(x) dx$.</p>
                               <p>Donc $\\int_a^b f(x) dx = [x f(x)]_a^b - \\int_a^b x f'(x) dx$.</p>`
                },
                {
                    id: 'ch7ex2q4',
                    texte: "4. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>Si $f\\le1$ sur $[0,1]$, alors $\\int_0^1 f(x) dx \\le \\int_0^1 1 dx = 1$.</p>`
                },
                {
                    id: 'ch7ex2q5',
                    texte: "5. Vrai ou faux ?",
                    solution: `<p><strong>Vrai (d'après le graphique).</strong></p>
                               <p>La fonction est positive sur une plus grande partie que négative.</p>`
                },
                {
                    id: 'ch7ex2q6',
                    texte: "6. Vrai ou faux ?",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>Contre-exemple : $\\int_{-1}^1 x dx = 0$, mais $f(x)=x$ n'est pas positive sur tout $[-1,1]$.</p>`
                },
                {
                    id: 'ch7ex2q7',
                    texte: "7. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>La fonction $x\\mapsto\\dfrac{1}{1+x^2}$ est continue sur $\\mathbb{R}$, donc son intégrale de $0$ à $x$ est définie pour tout $x\\in\\mathbb{R}$.</p>`
                }
            ]
        }
    );

    console.log("Partie 1 (exercices 1 à 2) – QCM et Vrai-Faux – ajoutée avec succès.");
})();