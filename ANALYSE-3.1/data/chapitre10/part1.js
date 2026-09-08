// data/chapitre10/part1.js – Exercices 1 à 3 (Équations différentielles y'=ay)
// Version améliorée – conforme au LaTeX fourni
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
        // EXERCICE 1 – Résoudre les équations différentielles y'=ay
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ chacune des équations différentielles ci-dessous :</p>
                      <ol>
                        <li>$y' + 3y = 0$</li>
                        <li>$y' + \\sqrt{2}y = 0$</li>
                        <li>$-5y' + y = 0$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex1q1',
                    texte: "1. $y' + 3y = 0$",
                    solution: `<p><strong>Méthode :</strong> On met l'équation sous la forme $y'=ay$.</p>
                               $$ y' + 3y = 0 \\iff y' = -3y. $$
                               <p>Ici $a = -3$. Les solutions sont de la forme $y = Ce^{ax} = Ce^{-3x}$.</p>
                               <p><strong>$\\boxed{y = Ce^{-3x},\\; C\\in\\mathbb{R}}$</strong></p>`
                },
                {
                    id: 'ch10ex1q2',
                    texte: "2. $y' + \\sqrt{2}y = 0$",
                    solution: `<p>$$ y' + \\sqrt{2}y = 0 \\iff y' = -\\sqrt{2}y. $$</p>
                               <p>Ici $a = -\\sqrt{2}$. Les solutions sont $y = Ce^{-\\sqrt{2}x}$.</p>
                               <p><strong>$\\boxed{y = Ce^{-\\sqrt{2}x},\\; C\\in\\mathbb{R}}$</strong></p>`
                },
                {
                    id: 'ch10ex1q3',
                    texte: "3. $-5y' + y = 0$",
                    solution: `<p>$$ -5y' + y = 0 \\iff 5y' = y \\iff y' = \\dfrac{1}{5}y. $$</p>
                               <p>Ici $a = \\dfrac{1}{5}$. Les solutions sont $y = Ce^{x/5}$.</p>
                               <p><strong>$\\boxed{y = Ce^{x/5},\\; C\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2 – Solutions avec condition initiale
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>Pour chacun des cas ci-dessous, donner la solution $f$ sur $\\mathbb{R}$ de l'équation différentielle.</p>
                      <ol>
                        <li>$y' - \\dfrac{y}{2} = 0$ et $y(-1) = e$</li>
                        <li>$-3y' - y = 0$ et $y(\\ln 8) = 1$</li>
                        <li>$y' - 2y = 0$ et $y(0) = 1$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex2q1',
                    texte: "1. $y' - \\dfrac{y}{2} = 0$, $y(-1)=e$",
                    solution: `<p><strong>Méthode :</strong> On résout d'abord l'équation générale, puis on utilise la condition initiale pour déterminer $C$.</p>
                               $$ y' - \\dfrac{y}{2} = 0 \\iff y' = \\dfrac{1}{2}y. $$
                               <p>Les solutions sont $y = Ce^{x/2}$.</p>
                               <p>Condition $y(-1) = e$ : $Ce^{-1/2} = e$ ⇒ $C = e \\cdot e^{1/2} = e^{3/2}$.</p>
                               <p>Donc $y = e^{3/2} e^{x/2} = e^{(x+3)/2}$.</p>
                               <p><strong>$\\boxed{f(x) = e^{\\frac{x+3}{2}}}$</strong></p>`
                },
                {
                    id: 'ch10ex2q2',
                    texte: "2. $-3y' - y = 0$, $y(\\ln 8)=1$",
                    solution: `<p>$$ -3y' - y = 0 \\iff 3y' = -y \\iff y' = -\\dfrac{1}{3}y. $$</p>
                               <p>Les solutions sont $y = Ce^{-x/3}$.</p>
                               <p>Condition $y(\\ln 8) = 1$ : $Ce^{-\\ln 8 / 3} = 1$.</p>
                               <p>$e^{-\\ln 8 / 3} = (e^{\\ln 8})^{-1/3} = 8^{-1/3} = 2^{-1} = \\dfrac{1}{2}$.</p>
                               <p>Donc $C \\cdot \\dfrac{1}{2} = 1$ ⇒ $C = 2$.</p>
                               <p>Donc $y = 2e^{-x/3}$.</p>
                               <p><strong>$\\boxed{f(x) = 2e^{-x/3}}$</strong></p>`
                },
                {
                    id: 'ch10ex2q3',
                    texte: "3. $y' - 2y = 0$, $y(0)=1$",
                    solution: `<p>$$ y' - 2y = 0 \\iff y' = 2y. $$</p>
                               <p>Les solutions sont $y = Ce^{2x}$.</p>
                               <p>Condition $y(0)=1$ : $C = 1$.</p>
                               <p>Donc $y = e^{2x}$.</p>
                               <p><strong>$\\boxed{f(x) = e^{2x}}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3 – Résoudre les équations différentielles y'=ay+b
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Résoudre sur $\\mathbb{R}$ chacune des équations différentielles ci-dessous :</p>
                      <ol>
                        <li>$y' - 2y + 1 = 0$</li>
                        <li>$y' - \\pi y + 3 = 0$</li>
                        <li>$-2y' + 5y - 1 = 0$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex3q1',
                    texte: "1. $y' - 2y + 1 = 0$",
                    solution: `<p><strong>Méthode :</strong> On met sous la forme $y' = ay + b$.</p>
                               $$ y' - 2y + 1 = 0 \\iff y' = 2y - 1. $$
                               <p>Ici $a=2$ et $b=-1$.</p>
                               <p>Les solutions sont de la forme $y = Ce^{ax} - \\dfrac{b}{a} = Ce^{2x} - \\dfrac{-1}{2} = Ce^{2x} + \\dfrac{1}{2}$.</p>
                               <p><strong>$\\boxed{y = Ce^{2x} + \\dfrac{1}{2},\\; C\\in\\mathbb{R}}$</strong></p>`
                },
                {
                    id: 'ch10ex3q2',
                    texte: "2. $y' - \\pi y + 3 = 0$",
                    solution: `<p>$$ y' - \\pi y + 3 = 0 \\iff y' = \\pi y - 3. $$</p>
                               <p>Ici $a=\\pi$ et $b=-3$.</p>
                               <p>Les solutions sont $y = Ce^{\\pi x} - \\dfrac{-3}{\\pi} = Ce^{\\pi x} + \\dfrac{3}{\\pi}$.</p>
                               <p><strong>$\\boxed{y = Ce^{\\pi x} + \\dfrac{3}{\\pi},\\; C\\in\\mathbb{R}}$</strong></p>`
                },
                {
                    id: 'ch10ex3q3',
                    texte: "3. $-2y' + 5y - 1 = 0$",
                    solution: `<p>$$ -2y' + 5y - 1 = 0 \\iff 2y' = 5y - 1 \\iff y' = \\dfrac{5}{2}y - \\dfrac{1}{2}. $$</p>
                               <p>Ici $a = \\dfrac{5}{2}$ et $b = -\\dfrac{1}{2}$.</p>
                               <p>Les solutions sont $y = Ce^{5x/2} - \\dfrac{b}{a} = Ce^{5x/2} - \\dfrac{-1/2}{5/2} = Ce^{5x/2} + \\dfrac{1}{5}$.</p>
                               <p><strong>$\\boxed{y = Ce^{5x/2} + \\dfrac{1}{5},\\; C\\in\\mathbb{R}}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 1 (exercices 1 à 3) – Équations différentielles y'=ay et y'=ay+b – ajoutée avec succès.");
})();