// data/chapitre9/part2.js – Exercices 4 et 5 (Équations et inéquations exponentielles)
// Version améliorée – conforme au LaTeX fourni
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch9 = data.chapitres.find(c => c.id === 9);
    if (!ch9) {
        console.error("Chapitre 9 introuvable. Chargez d'abord data/chapitre9_base.js.");
        return;
    }

    ch9.exercices.push(
        // ======================================================================
        // EXERCICE 4 – Équations exponentielles
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ les équations suivantes :</p>
                      $$ e^{(2x-3)} = 1 \\; ; \\quad e^x = 2 \\; ; \\quad e^{-2x} = -2. $$
                      $$ e^{(3x+1)} = e^{1-5x} \\; ; \\quad (e^x)^2 - 3e^x + 2 = 0 \\; ; \\quad e^{x^2-16} = e^{(x-4)} \\; ; \\quad e^{-x} + e^x = 2. $$`,
            questions: [
                {
                    id: 'ch9ex4q1',
                    texte: "Résoudre les équations.",
                    solution: `<p><strong>Méthode :</strong> On utilise l'injectivité de l'exponentielle ($e^a=e^b \\iff a=b$) et la propriété $e^{\\ln a}=a$.</p>
                               <hr>
                               <p><strong>1. $e^{2x-3}=1$</strong></p>
                               <p>$e^{2x-3}=e^0$ ⇒ $2x-3=0$ ⇒ $2x=3$ ⇒ $x=\\dfrac{3}{2}$.</p>
                               <p><strong>$\\mathcal{S} = \\left\\{\\dfrac{3}{2}\\right\\}$.</strong></p>
                               <hr>
                               <p><strong>2. $e^x=2$</strong></p>
                               <p>$e^x=2$ ⇒ $x=\\ln 2$.</p>
                               <p><strong>$\\mathcal{S} = \\{\\ln 2\\}$.</strong></p>
                               <hr>
                               <p><strong>3. $e^{-2x}=-2$</strong></p>
                               <p>L'exponentielle est toujours strictement positive, donc $e^{-2x}>0$ pour tout $x$. L'équation $e^{-2x}=-2$ n'a pas de solution.</p>
                               <p><strong>$\\mathcal{S} = \\varnothing$.</strong></p>
                               <hr>
                               <p><strong>4. $e^{3x+1}=e^{1-5x}$</strong></p>
                               <p>$3x+1=1-5x$ ⇒ $3x+5x=0$ ⇒ $8x=0$ ⇒ $x=0$.</p>
                               <p><strong>$\\mathcal{S} = \\{0\\}$.</strong></p>
                               <hr>
                               <p><strong>5. $(e^x)^2 - 3e^x + 2 = 0$</strong></p>
                               <p>Posons $X=e^x>0$. L'équation devient $X^2-3X+2=0$ ⇒ $(X-1)(X-2)=0$.</p>
                               <p>Donc $X=1$ ou $X=2$.</p>
                               <ul>
                                 <li>$e^x=1$ ⇒ $x=0$.</li>
                                 <li>$e^x=2$ ⇒ $x=\\ln 2$.</li>
                               </ul>
                               <p><strong>$\\mathcal{S} = \\{0, \\ln 2\\}$.</strong></p>
                               <hr>
                               <p><strong>6. $e^{x^2-16}=e^{x-4}$</strong></p>
                               <p>$x^2-16=x-4$ ⇒ $x^2-x-12=0$ ⇒ $(x-4)(x+3)=0$.</p>
                               <p>Donc $x=4$ ou $x=-3$.</p>
                               <p><strong>$\\mathcal{S} = \\{-3, 4\\}$.</strong></p>
                               <hr>
                               <p><strong>7. $e^{-x}+e^x=2$</strong></p>
                               <p>Multiplions par $e^x>0$ : $1+e^{2x}=2e^x$ ⇒ $e^{2x}-2e^x+1=0$.</p>
                               <p>Posons $X=e^x>0$ : $X^2-2X+1=0$ ⇒ $(X-1)^2=0$ ⇒ $X=1$.</p>
                               <p>$e^x=1$ ⇒ $x=0$.</p>
                               <p><strong>$\\mathcal{S} = \\{0\\}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5 – Inéquations exponentielles
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Résoudre dans $\\mathbb{R}$ les inéquations suivantes :</p>
                      $$ e^{-x} \\leq 1 \\; ; \\quad e^{-3x} \\geq 0 \\; ; \\quad 2 - e^{\\frac{1}{x}} > 0 \\; ; \\quad e^x + \\frac{2}{e^x} - 3 \\leq 0. $$`,
            questions: [
                {
                    id: 'ch9ex5q1',
                    texte: "Résoudre les inéquations.",
                    solution: `<p><strong>Méthode :</strong> On utilise la croissance stricte de l'exponentielle ($e^a \\le e^b \\iff a \\le b$) et le fait que $e^x>0$ pour tout $x$.</p>
                               <hr>
                               <p><strong>1. $e^{-x} \\leq 1$</strong></p>
                               <p>$e^{-x} \\leq e^0$ ⇒ $-x \\leq 0$ ⇒ $x \\geq 0$.</p>
                               <p><strong>$\\mathcal{S} = [0, +\\infty[$.</strong></p>
                               <hr>
                               <p><strong>2. $e^{-3x} \\geq 0$</strong></p>
                               <p>Pour tout réel $x$, $e^{-3x} > 0$. Donc l'inéquation est toujours vraie.</p>
                               <p><strong>$\\mathcal{S} = \\mathbb{R}$.</strong></p>
                               <hr>
                               <p><strong>3. $2 - e^{\\frac{1}{x}} > 0$</strong></p>
                               <p>$2 - e^{1/x} > 0$ ⇒ $e^{1/x} < 2$.</p>
                               <p><strong>Domaine :</strong> $x \\neq 0$.</p>
                               <p>$e^{1/x} < 2$ ⇒ $\\dfrac{1}{x} < \\ln 2$.</p>
                               <p>Ici, il faut faire attention au signe de $x$.</p>
                               <ul>
                                 <li>Si $x>0$ : $\\dfrac{1}{x} < \\ln 2$ ⇒ $x > \\dfrac{1}{\\ln 2}$.</li>
                                 <li>Si $x<0$ : $\\dfrac{1}{x} < \\ln 2$ est toujours vrai (car $\\dfrac{1}{x}<0$ et $\\ln 2>0$).</li>
                               </ul>
                               <p><strong>$\\mathcal{S} = \\left]-\\infty, 0\\right[ \\cup \\left]\\dfrac{1}{\\ln 2}, +\\infty\\right[$.</strong></p>
                               <hr>
                               <p><strong>4. $e^x + \\dfrac{2}{e^x} - 3 \\leq 0$</strong></p>
                               <p>Posons $X=e^x>0$. L'inéquation devient $X + \\dfrac{2}{X} - 3 \\leq 0$.</p>
                               <p>Multiplions par $X>0$ : $X^2 - 3X + 2 \\leq 0$.</p>
                               <p>$(X-1)(X-2) \\leq 0$ ⇒ $1 \\leq X \\leq 2$.</p>
                               <p>Donc $1 \\leq e^x \\leq 2$.</p>
                               <p>$e^0 \\leq e^x \\leq e^{\\ln 2}$ ⇒ $0 \\leq x \\leq \\ln 2$.</p>
                               <p><strong>$\\mathcal{S} = [0, \\ln 2]$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 4 et 5) – Équations et inéquations – ajoutée avec succès.");
})();