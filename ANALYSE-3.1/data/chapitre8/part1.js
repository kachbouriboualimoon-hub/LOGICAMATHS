// data/chapitre8/part1.js – Exercices 1, 2, 3 (Calculs, équations, inéquations)
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
        // EXERCICE 1 – Calculs avec ln
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Calculer :</p>
                      $$ \\ln(e^2) ;\\quad \\ln\\left(\\frac{1}{e}\\right) ;\\quad \\ln(25) - 2\\ln 5 ;\\quad \\ln(10^5) - \\ln(10^4) - \\ln(10^3) - \\ln(10^2) - \\ln(10). $$`,
            questions: [
                {
                    id: 'ch8ex1q1',
                    texte: "Calcul des expressions.",
                    solution: `<p><strong>Méthode :</strong> On utilise les propriétés algébriques de la fonction logarithme népérien :</p>
                               <ul>
                                 <li>$\\ln(ab) = \\ln a + \\ln b$</li>
                                 <li>$\\ln\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$</li>
                                 <li>$\\ln(a^n) = n\\ln a$</li>
                                 <li>$\\ln e = 1$</li>
                               </ul>
                               <p><strong>1. $\\ln(e^2)$</strong></p>
                               $$ \\ln(e^2) = 2\\ln e = 2 \\times 1 = 2. $$
                               <p><strong>2. $\\ln\\left(\\dfrac{1}{e}\\right)$</strong></p>
                               $$ \\ln\\left(\\dfrac{1}{e}\\right) = \\ln 1 - \\ln e = 0 - 1 = -1. $$
                               <p><strong>3. $\\ln(25) - 2\\ln 5$</strong></p>
                               $$ \\ln(25) - 2\\ln 5 = \\ln(5^2) - 2\\ln 5 = 2\\ln 5 - 2\\ln 5 = 0. $$
                               <p><strong>4. $\\ln(10^5) - \\ln(10^4) - \\ln(10^3) - \\ln(10^2) - \\ln(10)$</strong></p>
                               <p>On utilise $\\ln(10^n) = n\\ln 10$ :</p>
                               $$ = 5\\ln 10 - 4\\ln 10 - 3\\ln 10 - 2\\ln 10 - \\ln 10 = (5-4-3-2-1)\\ln 10 = -5\\ln 10. $$
                               <p><strong>Résultats : $2$, $-1$, $0$, $-5\\ln 10$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2 – Résolution d'équations avec ln
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ chacune des équations ci-dessous :</p>
                      <ol>
                        <li>$\\ln x + \\ln(x+1) = 0$</li>
                        <li>$\\ln(\\ln x) = 0$</li>
                        <li>$\\ln\\left((x-1)^3\\right) = 3$</li>
                        <li>$(\\ln x)^2 - 2\\ln x - 3 = 0$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex2q1',
                    texte: "1. $\\ln x + \\ln(x+1) = 0$",
                    solution: `<p><strong>Domaine :</strong> On doit avoir $x>0$ et $x+1>0$ ⇒ $x>0$.</p>
                               <p>On utilise $\\ln a + \\ln b = \\ln(ab)$ :</p>
                               $$ \\ln[x(x+1)] = 0 \\iff x(x+1) = e^0 = 1. $$
                               <p>On résout $x^2+x-1=0$ :</p>
                               $$ \\Delta = 1+4 = 5, \\quad x = \\frac{-1\\pm\\sqrt{5}}{2}. $$
                               <p>La solution positive est $\\dfrac{-1+\\sqrt{5}}{2}$.</p>
                               <p><strong>$\\mathcal{S} = \\left\\{\\dfrac{\\sqrt{5}-1}{2}\\right\\}$.</strong></p>`
                },
                {
                    id: 'ch8ex2q2',
                    texte: "2. $\\ln(\\ln x) = 0$",
                    solution: `<p><strong>Domaine :</strong> On doit avoir $x>0$ et $\\ln x > 0$ ⇒ $x>1$.</p>
                               <p>$\\ln(\\ln x) = 0 \\iff \\ln x = e^0 = 1 \\iff x = e$.</p>
                               <p>On vérifie que $e>1$, donc valide.</p>
                               <p><strong>$\\mathcal{S} = \\{e\\}$.</strong></p>`
                },
                {
                    id: 'ch8ex2q3',
                    texte: "3. $\\ln\\left((x-1)^3\\right) = 3$",
                    solution: `<p><strong>Domaine :</strong> On doit avoir $(x-1)^3 > 0$ ⇒ $x-1>0$ ⇒ $x>1$.</p>
                               <p>On utilise $\\ln(a^n) = n\\ln a$ :</p>
                               $$ \\ln\\left((x-1)^3\\right) = 3\\ln(x-1) = 3 \\iff \\ln(x-1) = 1 \\iff x-1 = e \\iff x = e+1. $$
                               <p>On vérifie $e+1>1$.</p>
                               <p><strong>$\\mathcal{S} = \\{e+1\\}$.</strong></p>`
                },
                {
                    id: 'ch8ex2q4',
                    texte: "4. $(\\ln x)^2 - 2\\ln x - 3 = 0$",
                    solution: `<p><strong>Domaine :</strong> $x>0$.</p>
                               <p>Posons $X = \\ln x$. L'équation devient :</p>
                               $$ X^2 - 2X - 3 = 0 \\iff (X-3)(X+1) = 0. $$
                               <p>Donc $X=3$ ou $X=-1$.</p>
                               <ul>
                                 <li>$\\ln x = 3 \\iff x = e^3$.</li>
                                 <li>$\\ln x = -1 \\iff x = e^{-1} = \\dfrac{1}{e}$.</li>
                               </ul>
                               <p><strong>$\\mathcal{S} = \\left\\{e^3,\\ \\dfrac{1}{e}\\right\\}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3 – Résolution d'inéquations avec ln
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ chacune des inéquations ci-dessous :</p>
                      <ol>
                        <li>$\\ln(2x+3) < 5$</li>
                        <li>$\\ln(3x+1) \\le 0$</li>
                        <li>$\\ln(5x) > 1 - \\ln 5$</li>
                        <li>$\\ln\\left(\\dfrac{1+x}{x+2}\\right) \\ge 0$</li>
                        <li>$(\\ln x)^2 - 2\\ln x < 0$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex3q1',
                    texte: "1. $\\ln(2x+3) < 5$",
                    solution: `<p><strong>Domaine :</strong> $2x+3 > 0$ ⇒ $x > -\\dfrac{3}{2}$.</p>
                               <p>La fonction $\\ln$ est strictement croissante sur $]0,+\\infty[$.</p>
                               <p>$\\ln(2x+3) < 5 \\iff 2x+3 < e^5$.</p>
                               <p>$2x < e^5 - 3$ ⇒ $x < \\dfrac{e^5 - 3}{2}$.</p>
                               <p>Avec le domaine :</p>
                               <p><strong>$\\mathcal{S} = \\left]-\\dfrac{3}{2},\\ \\dfrac{e^5-3}{2}\\right[$.</strong></p>`
                },
                {
                    id: 'ch8ex3q2',
                    texte: "2. $\\ln(3x+1) \\le 0$",
                    solution: `<p><strong>Domaine :</strong> $3x+1 > 0$ ⇒ $x > -\\dfrac{1}{3}$.</p>
                               <p>$\\ln(3x+1) \\le 0 \\iff 3x+1 \\le e^0 = 1$.</p>
                               <p>$3x \\le 0$ ⇒ $x \\le 0$.</p>
                               <p>Avec le domaine :</p>
                               <p><strong>$\\mathcal{S} = \\left]-\\dfrac{1}{3},\\ 0\\right]$.</strong></p>`
                },
                {
                    id: 'ch8ex3q3',
                    texte: "3. $\\ln(5x) > 1 - \\ln 5$",
                    solution: `<p><strong>Domaine :</strong> $5x > 0$ ⇒ $x > 0$.</p>
                               <p>$1 - \\ln 5 = \\ln e - \\ln 5 = \\ln\\left(\\dfrac{e}{5}\\right)$.</p>
                               <p>$\\ln(5x) > \\ln\\left(\\dfrac{e}{5}\\right) \\iff 5x > \\dfrac{e}{5}$ (car $\\ln$ est croissante).</p>
                               <p>$x > \\dfrac{e}{25}$.</p>
                               <p><strong>$\\mathcal{S} = \\left]\\dfrac{e}{25},\\ +\\infty\\right[$.</strong></p>`
                },
                {
                    id: 'ch8ex3q4',
                    texte: "4. $\\ln\\left(\\dfrac{1+x}{x+2}\\right) \\ge 0$",
                    solution: `<p><strong>Domaine :</strong> $\\dfrac{1+x}{x+2} > 0$.</p>
                               <p>Tableau de signes :</p>
                               <table class="sign-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-2$</td><td></td><td>$-1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$1+x$</th><td>$-$</td><td></td><td>$-$</td><td></td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$x+2$</th><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                                 <tr><th>Quotient</th><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td></td></tr>
                               </table>
                               <p>Donc $x\\in]-\\infty,-2[\\ \\cup\\ ]-1,+\\infty[$.</p>
                               <p>$\\ln\\left(\\dfrac{1+x}{x+2}\\right) \\ge 0 \\iff \\dfrac{1+x}{x+2} \\ge 1$.</p>
                               $$ \\dfrac{1+x}{x+2} - 1 \\ge 0 \\iff \\dfrac{1+x - (x+2)}{x+2} \\ge 0 \\iff \\dfrac{-1}{x+2} \\ge 0. $$
                               <p>Ceci est vrai si $x+2 < 0$ ⇒ $x < -2$.</p>
                               <p>Intersection avec le domaine : $x < -2$.</p>
                               <p><strong>$\\mathcal{S} = ]-\\infty, -2[$.</strong></p>`
                },
                {
                    id: 'ch8ex3q5',
                    texte: "5. $(\\ln x)^2 - 2\\ln x < 0$",
                    solution: `<p><strong>Domaine :</strong> $x>0$.</p>
                               <p>Posons $X = \\ln x$. L'inéquation devient :</p>
                               $$ X^2 - 2X < 0 \\iff X(X-2) < 0 \\iff 0 < X < 2. $$
                               <p>Donc $0 < \\ln x < 2$.</p>
                               <p>$0 < \\ln x < 2 \\iff e^0 < x < e^2 \\iff 1 < x < e^2$.</p>
                               <p><strong>$\\mathcal{S} = ]1,\\ e^2[$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 1 (exercices 1 à 3) – Calculs, équations, inéquations – ajoutée avec succès.");
})();