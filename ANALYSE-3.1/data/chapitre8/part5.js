// data/chapitre8/part5.js – Exercices 10 et 11 (Intégration par parties, décomposition)
// Version améliorée – conforme au PDF Exercices_chapitre8_logarithmes.pdf
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch8 = data.chapitres.find(c => c.id === 8);
    if (!ch8) {
        console.error("Chapitre 8 introuvable. Chargez d'abord data/chapitre8_base.js.");
        return;
    }

    ch8.exercices.push(
        // ======================================================================
        // EXERCICE 10 – Intégration par parties
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>À l'aide d'une intégration par parties, calculer les intégrales ci-dessous :</p>
                      $$ \\int_1^e x\\ln x\\, dx, \\quad \\int_1^e x^2\\ln x\\, dx, \\quad \\int_1^e \\dfrac{\\ln x}{\\sqrt{x}}\\, dx, \\quad \\int_1^e \\ln^2 x\\, dx. $$`,
            questions: [
                {
                    id: 'ch8ex10q1',
                    texte: "1. $\\displaystyle\\int_1^e x\\ln x\\, dx$",
                    solution: `<p><strong>Méthode :</strong> On intègre par parties en posant $u=\\ln x$ et $v'=x$.</p>
                               <p>Posons :</p>
                               $$ \\begin{cases} u = \\ln x \\\\ v' = x \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{1}{x} \\\\ v = \\dfrac{x^2}{2} \\end{cases} $$
                               <p>On applique la formule $\\displaystyle\\int u v' = uv - \\int u' v$ :</p>
                               $$ \\int_1^e x\\ln x\\, dx = \\left[\\dfrac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\dfrac{x^2}{2}\\cdot\\dfrac{1}{x}\\, dx = \\left[\\dfrac{x^2}{2}\\ln x\\right]_1^e - \\dfrac{1}{2}\\int_1^e x\\, dx. $$
                               <p>Calcul du premier terme : $\\dfrac{e^2}{2}\\ln e - \\dfrac{1}{2}\\ln 1 = \\dfrac{e^2}{2}$.</p>
                               <p>Calcul de l'intégrale : $\\dfrac{1}{2}\\left[\\dfrac{x^2}{2}\\right]_1^e = \\dfrac{1}{2}\\left(\\dfrac{e^2}{2} - \\dfrac{1}{2}\\right) = \\dfrac{e^2-1}{4}$.</p>
                               <p>Donc :</p>
                               $$ \\int_1^e x\\ln x\\, dx = \\dfrac{e^2}{2} - \\dfrac{e^2-1}{4} = \\dfrac{2e^2 - (e^2-1)}{4} = \\dfrac{e^2+1}{4}. $$
                               <p><strong>$\\displaystyle\\int_1^e x\\ln x\\, dx = \\dfrac{e^2+1}{4}$.</strong></p>`
                },
                {
                    id: 'ch8ex10q2',
                    texte: "2. $\\displaystyle\\int_1^e x^2\\ln x\\, dx$",
                    solution: `<p>Posons $u=\\ln x$ et $v'=x^2$.</p>
                               $$ \\begin{cases} u = \\ln x \\\\ v' = x^2 \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{1}{x} \\\\ v = \\dfrac{x^3}{3} \\end{cases} $$
                               <p>On obtient :</p>
                               $$ \\int_1^e x^2\\ln x\\, dx = \\left[\\dfrac{x^3}{3}\\ln x\\right]_1^e - \\int_1^e \\dfrac{x^3}{3}\\cdot\\dfrac{1}{x}\\, dx = \\left[\\dfrac{x^3}{3}\\ln x\\right]_1^e - \\dfrac{1}{3}\\int_1^e x^2\\, dx. $$
                               <p>Premier terme : $\\dfrac{e^3}{3}\\ln e - \\dfrac{1}{3}\\ln 1 = \\dfrac{e^3}{3}$.</p>
                               <p>Intégrale : $\\dfrac{1}{3}\\left[\\dfrac{x^3}{3}\\right]_1^e = \\dfrac{1}{3}\\left(\\dfrac{e^3}{3} - \\dfrac{1}{3}\\right) = \\dfrac{e^3-1}{9}$.</p>
                               <p>Donc :</p>
                               $$ \\int_1^e x^2\\ln x\\, dx = \\dfrac{e^3}{3} - \\dfrac{e^3-1}{9} = \\dfrac{3e^3 - (e^3-1)}{9} = \\dfrac{2e^3+1}{9}. $$
                               <p><strong>$\\displaystyle\\int_1^e x^2\\ln x\\, dx = \\dfrac{2e^3+1}{9}$.</strong></p>`
                },
                {
                    id: 'ch8ex10q3',
                    texte: "3. $\\displaystyle\\int_1^e \\dfrac{\\ln x}{\\sqrt{x}}\\, dx$",
                    solution: `<p>Posons $u=\\ln x$ et $v'=x^{-1/2}$.</p>
                               $$ \\begin{cases} u = \\ln x \\\\ v' = x^{-1/2} \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{1}{x} \\\\ v = 2\\sqrt{x} \\end{cases} $$
                               <p>On obtient :</p>
                               $$ \\int_1^e \\dfrac{\\ln x}{\\sqrt{x}}\\, dx = \\left[2\\sqrt{x}\\ln x\\right]_1^e - \\int_1^e 2\\sqrt{x}\\cdot\\dfrac{1}{x}\\, dx = \\left[2\\sqrt{x}\\ln x\\right]_1^e - 2\\int_1^e \\dfrac{1}{\\sqrt{x}}\\, dx. $$
                               <p>Premier terme : $2\\sqrt{e}\\ln e - 2\\sqrt{1}\\ln 1 = 2\\sqrt{e}$.</p>
                               <p>Intégrale : $2\\displaystyle\\int_1^e x^{-1/2}\\, dx = 2\\left[2\\sqrt{x}\\right]_1^e = 4(\\sqrt{e}-1)$.</p>
                               <p>Donc :</p>
                               $$ \\int_1^e \\dfrac{\\ln x}{\\sqrt{x}}\\, dx = 2\\sqrt{e} - 4\\sqrt{e} + 4 = 4 - 2\\sqrt{e}. $$
                               <p><strong>$\\displaystyle\\int_1^e \\dfrac{\\ln x}{\\sqrt{x}}\\, dx = 4 - 2\\sqrt{e}$.</strong></p>`
                },
                {
                    id: 'ch8ex10q4',
                    texte: "4. $\\displaystyle\\int_1^e \\ln^2 x\\, dx$",
                    solution: `<p>Posons $u=\\ln^2 x$ et $v'=1$.</p>
                               $$ \\begin{cases} u = \\ln^2 x \\\\ v' = 1 \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{2\\ln x}{x} \\\\ v = x \\end{cases} $$
                               <p>On obtient :</p>
                               $$ \\int_1^e \\ln^2 x\\, dx = \\left[x\\ln^2 x\\right]_1^e - \\int_1^e x\\cdot\\dfrac{2\\ln x}{x}\\, dx = \\left[x\\ln^2 x\\right]_1^e - 2\\int_1^e \\ln x\\, dx. $$
                               <p>Premier terme : $e\\ln^2 e - 1\\cdot\\ln^2 1 = e$.</p>
                               <p>On sait que $\\displaystyle\\int_1^e \\ln x\\, dx = \\left[x\\ln x - x\\right]_1^e = (e-e) - (0-1) = 1$.</p>
                               <p>Donc :</p>
                               $$ \\int_1^e \\ln^2 x\\, dx = e - 2\\cdot1 = e - 2. $$
                               <p><strong>$\\displaystyle\\int_1^e \\ln^2 x\\, dx = e - 2$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11 – Décomposition en éléments simples et intégration par parties
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>On considère la fonction $f: x \\mapsto \\dfrac{1}{x^2(x-2)}$.</p>
                      <ol>
                        <li>On se propose de déterminer les réels $a$, $b$ et $c$ tels que $f(x) = \\dfrac{a}{x} + \\dfrac{b}{x^2} + \\dfrac{c}{x-2}$, $x\\neq0$ et $x\\neq2$.</li>
                        <li>i. Calculer $\\lim_{x\\to2} f(x)(x-2)$. En déduire $c$.</li>
                        <li>ii. Calculer $\\lim_{x\\to0} f(x)x^2$. En déduire $b$.</li>
                        <li>iii. Calculer $\\lim_{x\\to+\\infty} f(x)x$. En déduire $a$.</li>
                        <li>Calculer $\\displaystyle\\int f(x) dx$.</li>
                        <li>À l'aide d'une intégration par parties, calculer $\\displaystyle\\int_3^4 \\dfrac{\\ln(x-2)}{x^3} dx$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex11q1',
                    texte: "1.i. $\\lim_{x\\to2} f(x)(x-2)$ et $c$.",
                    solution: `<p>On a $f(x)(x-2) = \\dfrac{1}{x^2}$.</p>
                               <p>Donc $\\lim_{x\\to2} f(x)(x-2) = \\lim_{x\\to2} \\dfrac{1}{x^2} = \\dfrac{1}{4}$.</p>
                               <p>Dans la décomposition, le seul terme qui contribue à cette limite est $\\dfrac{c}{x-2}$.</p>
                               <p>Donc $c = \\dfrac{1}{4}$.</p>
                               <p><strong>$c = \\dfrac{1}{4}$.</strong></p>`
                },
                {
                    id: 'ch8ex11q2',
                    texte: "1.ii. $\\lim_{x\\to0} f(x)x^2$ et $b$.",
                    solution: `<p>$f(x)x^2 = \\dfrac{1}{x-2}$.</p>
                               <p>Donc $\\lim_{x\\to0} f(x)x^2 = \\lim_{x\\to0} \\dfrac{1}{x-2} = -\\dfrac{1}{2}$.</p>
                               <p>Le seul terme qui contribue à cette limite est $\\dfrac{b}{x^2}$.</p>
                               <p>Donc $b = -\\dfrac{1}{2}$.</p>
                               <p><strong>$b = -\\dfrac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch8ex11q3',
                    texte: "1.iii. $\\lim_{x\\to+\\infty} f(x)x$ et $a$.",
                    solution: `<p>$f(x)x = \\dfrac{1}{x(x-2)}$.</p>
                               <p>Donc $\\lim_{x\\to+\\infty} f(x)x = 0$.</p>
                               <p>Le terme qui contribue à cette limite est $\\dfrac{a}{x}$.</p>
                               <p>Donc $a = 0$.</p>
                               <p><strong>$a = 0$.</strong></p>`
                },
                {
                    id: 'ch8ex11q4',
                    texte: "2. Calcul de $\\displaystyle\\int f(x) dx$.",
                    solution: `<p>D'après les résultats précédents :</p>
                               $$ f(x) = -\\dfrac{1}{2x^2} + \\dfrac{1}{4(x-2)}. $$
                               <p>Donc :</p>
                               $$ \\int f(x) dx = \\int \\left(-\\dfrac{1}{2x^2} + \\dfrac{1}{4(x-2)}\\right) dx = \\dfrac{1}{2x} + \\dfrac{1}{4}\\ln|x-2| + C. $$
                               <p><strong>$\\displaystyle\\int f(x) dx = \\dfrac{1}{2x} + \\dfrac{1}{4}\\ln|x-2| + C$.</strong></p>`
                },
                {
                    id: 'ch8ex11q5',
                    texte: "3. Calcul de $\\displaystyle\\int_3^4 \\dfrac{\\ln(x-2)}{x^3} dx$.",
                    solution: `<p><strong>Méthode :</strong> On intègre par parties avec $u=\\ln(x-2)$ et $v'=\\dfrac{1}{x^3}$.</p>
                               <p>Posons :</p>
                               $$ \\begin{cases} u = \\ln(x-2) \\\\ v' = \\dfrac{1}{x^3} \\end{cases} \\Rightarrow \\begin{cases} u' = \\dfrac{1}{x-2} \\\\ v = -\\dfrac{1}{2x^2} \\end{cases} $$
                               <p>On a :</p>
                               $$ \\int_3^4 \\dfrac{\\ln(x-2)}{x^3} dx = \\left[-\\dfrac{\\ln(x-2)}{2x^2}\\right]_3^4 + \\dfrac{1}{2}\\int_3^4 \\dfrac{1}{x^2(x-2)} dx. $$
                               <p>Premier terme : $\\left[-\\dfrac{\\ln(x-2)}{2x^2}\\right]_3^4 = -\\dfrac{\\ln 2}{32} + \\dfrac{\\ln 1}{18} = -\\dfrac{\\ln 2}{32}$.</p>
                               <p>Pour la seconde intégrale, on utilise la décomposition de $f$ trouvée précédemment :</p>
                               $$ \\dfrac{1}{x^2(x-2)} = -\\dfrac{1}{2x^2} + \\dfrac{1}{4(x-2)}. $$
                               <p>Donc :</p>
                               $$ \\int_3^4 \\dfrac{1}{x^2(x-2)} dx = \\int_3^4 \\left(-\\dfrac{1}{2x^2} + \\dfrac{1}{4(x-2)}\\right) dx = \\left[\\dfrac{1}{2x} + \\dfrac{1}{4}\\ln(x-2)\\right]_3^4. $$
                               <p>En $x=4$ : $\\dfrac{1}{8} + \\dfrac{1}{4}\\ln 2$.</p>
                               <p>En $x=3$ : $\\dfrac{1}{6} + \\dfrac{1}{4}\\ln 1 = \\dfrac{1}{6}$.</p>
                               <p>Donc :</p>
                               $$ \\int_3^4 \\dfrac{1}{x^2(x-2)} dx = \\dfrac{1}{8} + \\dfrac{1}{4}\\ln 2 - \\dfrac{1}{6} = -\\dfrac{1}{24} + \\dfrac{1}{4}\\ln 2. $$
                               <p>Donc l'intégrale initiale vaut :</p>
                               $$ \\int_3^4 \\dfrac{\\ln(x-2)}{x^3} dx = -\\dfrac{\\ln 2}{32} + \\dfrac{1}{2}\\left(-\\dfrac{1}{24} + \\dfrac{1}{4}\\ln 2\\right) = -\\dfrac{\\ln 2}{32} - \\dfrac{1}{48} + \\dfrac{1}{8}\\ln 2. $$
                               $$ = \\left(-\\dfrac{1}{32} + \\dfrac{1}{8}\\right)\\ln 2 - \\dfrac{1}{48} = \\dfrac{3}{32}\\ln 2 - \\dfrac{1}{48}. $$
                               <p><strong>$\\displaystyle\\int_3^4 \\dfrac{\\ln(x-2)}{x^3} dx = \\dfrac{3}{32}\\ln 2 - \\dfrac{1}{48}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 5 (exercices 10 et 11) – Intégration par parties – ajoutée avec succès.");
})();