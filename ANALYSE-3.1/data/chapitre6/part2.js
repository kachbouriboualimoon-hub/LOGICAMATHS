// data/chapitre6/part2.js – Exercices 3 à 14 (Calcul de primitives)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch6 = data.chapitres.find(c => c.id === 6);
    if (!ch6) {
        console.error("Chapitre 6 introuvable. Chargez d'abord data/chapitre6_base.js.");
        return;
    }

    ch6.exercices.push(
        // ======================================================================
        // EXERCICE 3 (numéroté 1 dans le PDF)
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Déterminer les primitives $F$ sur $I$ de chacune des fonctions $f$ ci-dessous.</p>
                      <ol>
                        <li>$f(x)=-5x^4+2x-3$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=x+\\dfrac{2}{x^2}$, $I=]-\\infty,0[$.</li>
                        <li>$f(x)=3x(3x^2+2)^2$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=(-x+3)^6$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=(x-1)(x^2-2x+7)^4$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{1}{\\sqrt{4x+3}}$, $I=\\left]-\\frac{3}{4},+\\infty\\right[$.</li>
                        <li>$f(x)=\\cos\\left(\\frac{1}{x}\\right)$, $I=]0,+\\infty[$.</li>
                        <li>$f(x)=\\dfrac{x}{\\sqrt{x^2+1}}$, $I=]-\\infty,-\\sqrt{3}[$.</li>
                        <li>$f(x)=\\sin(2x+1)\\cos^4(2x+1)$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=x^2\\sin(x^3+1)$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{\\sin x}{(\\cos x+1)^3}$, $I=]-\\pi,\\pi[$.</li>
                        <li>$f(x)=\\dfrac{3x^2+4x-2}{x^2}$, $I=]0,+\\infty[$.</li>
                        <li>$f(x)=\\dfrac{2x-1}{x^2-x}$, $I=]1,+\\infty[$.</li>
                        <li>$f(x)=\\tan^2 x$, $I=\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex3q1',
                    texte: "1. $f(x)=-5x^4+2x-3$, $I=\\mathbb{R}$.",
                    solution: `<p><strong>Méthode :</strong> On utilise la linéarité de l'intégration.</p>
                               $$ \\int (-5x^4+2x-3) dx = -5\\cdot\\dfrac{x^5}{5} + 2\\cdot\\dfrac{x^2}{2} - 3x + C = -x^5 + x^2 - 3x + C. $$
                               <p><strong>$F(x)=-x^5+x^2-3x+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q2',
                    texte: "2. $f(x)=x+\\dfrac{2}{x^2}$, $I=]-\\infty,0[$.",
                    solution: `<p>On a $\\dfrac{2}{x^2}=2x^{-2}$.</p>
                               $$ \\int \\left(x + \\dfrac{2}{x^2}\\right) dx = \\dfrac{x^2}{2} + 2\\cdot\\dfrac{x^{-1}}{-1} + C = \\dfrac{x^2}{2} - \\dfrac{2}{x} + C. $$
                               <p><strong>$F(x)=\\dfrac{x^2}{2}-\\dfrac{2}{x}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q3',
                    texte: "3. $f(x)=3x(3x^2+2)^2$, $I=\\mathbb{R}$.",
                    solution: `<p><strong>Méthode :</strong> On reconnaît la forme $u'(x)u(x)^n$.</p>
                               <p>Posons $u(x)=3x^2+2$. Alors $u'(x)=6x$.</p>
                               <p>On a $f(x)=\\dfrac{1}{2}\\cdot 6x \\cdot u(x)^2 = \\dfrac{1}{2}u'(x)u(x)^2$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{u(x)^3}{3} = \\dfrac{(3x^2+2)^3}{6}$.</p>
                               <p><strong>$F(x)=\\dfrac{(3x^2+2)^3}{6}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q4',
                    texte: "4. $f(x)=(-x+3)^6$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=-x+3$. Alors $u'(x)=-1$.</p>
                               <p>On a $f(x)=-u'(x)u(x)^6$.</p>
                               <p>Une primitive est $-\\dfrac{u(x)^7}{7} = -\\dfrac{(-x+3)^7}{7}$.</p>
                               <p><strong>$F(x)=-\\dfrac{(-x+3)^7}{7}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q5',
                    texte: "5. $f(x)=(x-1)(x^2-2x+7)^4$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=x^2-2x+7$. Alors $u'(x)=2x-2=2(x-1)$.</p>
                               <p>On a $f(x)=\\dfrac{1}{2}u'(x)u(x)^4$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{u(x)^5}{5} = \\dfrac{(x^2-2x+7)^5}{10}$.</p>
                               <p><strong>$F(x)=\\dfrac{(x^2-2x+7)^5}{10}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q6',
                    texte: "6. $f(x)=\\dfrac{1}{\\sqrt{4x+3}}$, $I=\\left]-\\frac{3}{4},+\\infty\\right[$.",
                    solution: `<p>$\\dfrac{1}{\\sqrt{4x+3}} = (4x+3)^{-1/2}$.</p>
                               <p>Posons $u(x)=4x+3$, $u'(x)=4$.</p>
                               <p>$f(x)=\\dfrac{1}{4}u'(x)u(x)^{-1/2}$.</p>
                               <p>Une primitive est $\\dfrac{1}{4}\\cdot\\dfrac{u(x)^{1/2}}{1/2} = \\dfrac{1}{2}\\sqrt{4x+3}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{2}\\sqrt{4x+3}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q7',
                    texte: "7. $f(x)=\\cos\\left(\\dfrac{1}{x}\\right)$, $I=]0,+\\infty[$.",
                    solution: `<p>Cette primitive n'est pas une fonction élémentaire simple. Elle fait intervenir la fonction sinus intégral $\\text{Si}(x)$.</p>
                               <p>On peut l'écrire : $\\int \\cos\\left(\\dfrac{1}{x}\\right) dx = x\\cos\\left(\\dfrac{1}{x}\\right) + \\sin\\left(\\dfrac{1}{x}\\right) + C$ ? Non, cette dérivée donne $\\cos(1/x) - \\frac{1}{x}\\sin(1/x) + \\ldots$</p>
                               <p>En fait, il n'y a pas de primitive simple. L'exercice demande probablement une vérification plutôt qu'un calcul explicite.</p>
                               <p><strong>$\\int \\cos(1/x) dx$ n'a pas de primitive élémentaire.</strong></p>`
                },
                {
                    id: 'ch6ex3q8',
                    texte: "8. $f(x)=\\dfrac{x}{\\sqrt{x^2+1}}$, $I=]-\\infty,-\\sqrt{3}[$.",
                    solution: `<p>Posons $u(x)=x^2+1$, $u'(x)=2x$.</p>
                               <p>$f(x)=\\dfrac{1}{2}u'(x)u(x)^{-1/2}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{u(x)^{1/2}}{1/2} = \\sqrt{x^2+1}$.</p>
                               <p><strong>$F(x)=\\sqrt{x^2+1}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q9',
                    texte: "9. $f(x)=\\sin(2x+1)\\cos^4(2x+1)$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=\\cos(2x+1)$. Alors $u'(x)=-2\\sin(2x+1)$.</p>
                               <p>On a $f(x) = -\\dfrac{1}{2}u'(x)u(x)^4$.</p>
                               <p>Une primitive est $-\\dfrac{1}{2}\\cdot\\dfrac{u(x)^5}{5} = -\\dfrac{\\cos^5(2x+1)}{10}$.</p>
                               <p><strong>$F(x)=-\\dfrac{\\cos^5(2x+1)}{10}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q10',
                    texte: "10. $f(x)=x^2\\sin(x^3+1)$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=x^3+1$, $u'(x)=3x^2$.</p>
                               <p>$f(x)=\\dfrac{1}{3}u'(x)\\sin u(x)$.</p>
                               <p>Une primitive est $-\\dfrac{1}{3}\\cos(x^3+1)$.</p>
                               <p><strong>$F(x)=-\\dfrac{1}{3}\\cos(x^3+1)+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q11',
                    texte: "11. $f(x)=\\dfrac{\\sin x}{(\\cos x+1)^3}$, $I=]-\\pi,\\pi[$.",
                    solution: `<p>Posons $u(x)=\\cos x+1$, $u'(x)=-\\sin x$.</p>
                               <p>$f(x)=-u'(x)u(x)^{-3}$.</p>
                               <p>Une primitive est $-\\dfrac{u(x)^{-2}}{-2} = \\dfrac{1}{2(\\cos x+1)^2}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{2(\\cos x+1)^2}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q12',
                    texte: "12. $f(x)=\\dfrac{3x^2+4x-2}{x^2}$, $I=]0,+\\infty[$.",
                    solution: `<p>On simplifie : $\\dfrac{3x^2+4x-2}{x^2} = 3 + \\dfrac{4}{x} - \\dfrac{2}{x^2}$.</p>
                               $$ \\int \\left(3 + \\dfrac{4}{x} - \\dfrac{2}{x^2}\\right) dx = 3x + 4\\ln x - 2\\cdot\\dfrac{x^{-1}}{-1} + C = 3x + 4\\ln x + \\dfrac{2}{x} + C. $$
                               <p><strong>$F(x)=3x+4\\ln x+\\dfrac{2}{x}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q13',
                    texte: "13. $f(x)=\\dfrac{2x-1}{x^2-x}$, $I=]1,+\\infty[$.",
                    solution: `<p>On reconnaît la forme $\\dfrac{u'(x)}{u(x)}$ avec $u(x)=x^2-x$.</p>
                               <p>$u'(x)=2x-1$, donc $f(x)=\\dfrac{u'(x)}{u(x)}$.</p>
                               <p>Une primitive est $\\ln|u(x)| = \\ln(x^2-x)$ (car sur $]1,+\\infty[$, $x^2-x>0$).</p>
                               <p><strong>$F(x)=\\ln(x^2-x)+C$.</strong></p>`
                },
                {
                    id: 'ch6ex3q14',
                    texte: "14. $f(x)=\\tan^2 x$, $I=\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$.",
                    solution: `<p>On utilise l'identité : $\\tan^2 x = \\dfrac{1}{\\cos^2 x} - 1$.</p>
                               $$ \\int \\tan^2 x dx = \\int \\left(\\dfrac{1}{\\cos^2 x} - 1\\right) dx = \\tan x - x + C. $$
                               <p><strong>$F(x)=\\tan x - x + C$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 4 (numéroté 15-16 dans le PDF – Reconnaître une primitive à partir d'un graphique)
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>On a représenté ci-dessous les courbes de trois fonctions $g$, $f$ et $h$, définies et dérivables sur $[-2,2]$.</p>
                      <img src="assets/images/chapitre6/ex4_courbes.png" alt="Courbes ex4" style="max-width:100%;">
                      <ol>
                        <li>On sait que $f$ admet une primitive parmi les fonctions $g$ et $h$ sur $[-2,2]$. Laquelle ? Justifier.</li>
                        <li>On sait que $h$ admet une primitive parmi les fonctions $f$ et $g$ sur $[-2,2]$. Laquelle ? Justifier.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex4q1',
                    texte: "1. Quelle fonction est une primitive de $f$ ?",
                    solution: `<p><strong>Stratégie :</strong> Si $F$ est une primitive de $f$, alors le signe de $F'$ ($=f$) donne les variations de $F$. On compare les variations des courbes avec le signe de $f$.</p>
                               <p>D'après le graphique, $f$ est positive sur $[-2,0]$ et négative sur $[0,2]$.</p>
                               <p>Donc une primitive de $f$ doit être croissante sur $[-2,0]$ et décroissante sur $[0,2]$.</p>
                               <p>Parmi $g$ et $h$, c'est <strong>$g$</strong> qui a ce comportement.</p>
                               <p><strong>Donc $g$ est une primitive de $f$.</strong></p>`
                },
                {
                    id: 'ch6ex4q2',
                    texte: "2. Quelle fonction est une primitive de $h$ ?",
                    solution: `<p>$h$ est négative sur $[-2,1]$ et positive sur $[1,2]$.</p>
                               <p>Une primitive de $h$ doit être décroissante sur $[-2,1]$ et croissante sur $[1,2]$.</p>
                               <p>Parmi $f$ et $g$, c'est <strong>$f$</strong> qui a ce comportement.</p>
                               <p><strong>Donc $f$ est une primitive de $h$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5 (numéroté 17-18 dans le PDF – Primitives par substitution)
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Déterminer une primitive sur $I$ de chacune des fonctions ci-dessous.</p>
                      <ol>
                        <li>$f(x)=\\dfrac{1}{x+1}$, $I=\\mathbb{R}^*_+$.</li>
                        <li>$f(x)=x\\sqrt{x^2+1}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=(x-3)\\sqrt{x^2-6x}$, $I=[6,+\\infty[$.</li>
                        <li>$f(x)=\\dfrac{x+1}{\\sqrt{x-1}}$, $I=]1,+\\infty[$.</li>
                        <li>$f(x)=\\left(x^2+x\\right)^7\\left(x+\\frac{1}{2}\\right)$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{1}{x^2}\\sqrt{\\dfrac{3+x}{2x}}$, $I=]0,+\\infty[$.</li>
                        <li>$f(x)=x(x+1)^{2008}$, $I=\\mathbb{R}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex5q1',
                    texte: "1. $f(x)=\\dfrac{1}{x+1}$, $I=\\mathbb{R}^*_+$.",
                    solution: `<p>On reconnaît $\\dfrac{u'(x)}{u(x)}$ avec $u(x)=x+1$.</p>
                               <p><strong>$F(x)=\\ln(x+1)+C$.</strong></p>`
                },
                {
                    id: 'ch6ex5q2',
                    texte: "2. $f(x)=x\\sqrt{x^2+1}$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=x^2+1$, $u'(x)=2x$.</p>
                               <p>$f(x)=\\dfrac{1}{2}u'(x)\\sqrt{u(x)}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{2}{3}u(x)^{3/2} = \\dfrac{1}{3}(x^2+1)^{3/2}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{3}(x^2+1)^{3/2}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex5q3',
                    texte: "3. $f(x)=(x-3)\\sqrt{x^2-6x}$, $I=[6,+\\infty[$.",
                    solution: `<p>Posons $u(x)=x^2-6x$, $u'(x)=2x-6=2(x-3)$.</p>
                               <p>$f(x)=\\dfrac{1}{2}u'(x)\\sqrt{u(x)}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{2}{3}u(x)^{3/2} = \\dfrac{1}{3}(x^2-6x)^{3/2}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{3}(x^2-6x)^{3/2}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex5q4',
                    texte: "4. $f(x)=\\dfrac{x+1}{\\sqrt{x-1}}$, $I=]1,+\\infty[$.",
                    solution: `<p>On décompose $x+1 = (x-1)+2$.</p>
                               $$ f(x)=\\dfrac{x-1}{\\sqrt{x-1}} + \\dfrac{2}{\\sqrt{x-1}} = \\sqrt{x-1} + 2(x-1)^{-1/2}. $$
                               <p>Primitive : $\\dfrac{2}{3}(x-1)^{3/2} + 4\\sqrt{x-1}$.</p>
                               <p><strong>$F(x)=\\dfrac{2}{3}(x-1)^{3/2} + 4\\sqrt{x-1} + C$.</strong></p>`
                },
                {
                    id: 'ch6ex5q5',
                    texte: "5. $f(x)=\\left(x^2+x\\right)^7\\left(x+\\frac{1}{2}\\right)$, $I=\\mathbb{R}$.",
                    solution: `<p>Posons $u(x)=x^2+x$, $u'(x)=2x+1 = 2\\left(x+\\frac{1}{2}\\right)$.</p>
                               <p>$f(x)=\\dfrac{1}{2}u'(x)u(x)^7$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\cdot\\dfrac{u(x)^8}{8} = \\dfrac{(x^2+x)^8}{16}$.</p>
                               <p><strong>$F(x)=\\dfrac{(x^2+x)^8}{16}+C$.</strong></p>`
                },
                {
                    id: 'ch6ex5q6',
                    texte: "6. $f(x)=\\dfrac{1}{x^2}\\sqrt{\\dfrac{3+x}{2x}}$, $I=]0,+\\infty[$.",
                    solution: `<p>Cette primitive est complexe. On peut simplifier :</p>
                               $$ \\sqrt{\\dfrac{3+x}{2x}} = \\sqrt{\\dfrac{3}{2x} + \\dfrac{1}{2}} = \\dfrac{1}{\\sqrt{2}}\\sqrt{\\dfrac{3}{x}+1}. $$
                               <p>La primitive n'est pas élémentaire simple (implique des fonctions hyperboliques ou des logarithmes complexes).</p>
                               <p><strong>$\\int \\dfrac{1}{x^2}\\sqrt{\\dfrac{3+x}{2x}} dx$ n'a pas de primitive élémentaire simple.</strong></p>`
                },
                {
                    id: 'ch6ex5q7',
                    texte: "7. $f(x)=x(x+1)^{2008}$, $I=\\mathbb{R}$.",
                    solution: `<p>On utilise l'astuce : $x=(x+1)-1$.</p>
                               $$ f(x)=(x+1)^{2009} - (x+1)^{2008}. $$
                               <p>Primitive : $\\dfrac{(x+1)^{2010}}{2010} - \\dfrac{(x+1)^{2009}}{2009}$.</p>
                               <p><strong>$F(x)=\\dfrac{(x+1)^{2010}}{2010} - \\dfrac{(x+1)^{2009}}{2009} + C$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6 (numéroté 19 dans le PDF)
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Dans chacun des cas suivants, vérifier que la fonction $f$ possède des primitives sur $I$ et déterminer la primitive $F$ vérifiant $F(x_0)=y_0$.</p>
                      <ol>
                        <li>$f(x)=\\tan x + \\tan^3 x$, $I=\\left]-\\frac{\\pi}{4},\\frac{\\pi}{4}\\right[$, $F(0)=0$.</li>
                        <li>$f(x)=\\cos x - \\cos 3x$, $I=\\mathbb{R}$, $F\\left(\\frac{\\pi}{4}\\right)=-1$.</li>
                        <li>$f(x)=\\sin x - \\sin 3x$, $I=\\mathbb{R}$, $F\\left(\\frac{\\pi}{4}\\right)=\\frac{\\sqrt{2}}{2}$.</li>
                        <li>$f(x)=\\dfrac{1+\\tan x}{\\cos^2 x}$, $I=\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$, $F(0)=0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex6q1',
                    texte: "1. $f(x)=\\tan x + \\tan^3 x$, $F(0)=0$.",
                    solution: `<p>On a $\\tan x + \\tan^3 x = \\tan x(1+\\tan^2 x) = \\tan x \\cdot (\\tan x)'$.</p>
                               <p>Posons $u(x)=\\tan x$, $u'(x)=1+\\tan^2 x$. $f(x)=u(x)u'(x)$.</p>
                               <p>Une primitive est $\\dfrac{u(x)^2}{2} = \\dfrac{\\tan^2 x}{2}$.</p>
                               <p>$F(0)=\\dfrac{\\tan^2 0}{2}+C = C$. Or $F(0)=0$, donc $C=0$.</p>
                               <p><strong>$F(x)=\\dfrac{\\tan^2 x}{2}$.</strong></p>`
                },
                {
                    id: 'ch6ex6q2',
                    texte: "2. $f(x)=\\cos x - \\cos 3x$, $F\\left(\\frac{\\pi}{4}\\right)=-1$.",
                    solution: `<p>Primitive : $\\sin x - \\dfrac{\\sin 3x}{3} + C$.</p>
                               <p>$F\\left(\\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4} - \\dfrac{\\sin\\frac{3\\pi}{4}}{3} + C = \\dfrac{\\sqrt{2}}{2} - \\dfrac{\\frac{\\sqrt{2}}{2}}{3} + C = \\dfrac{\\sqrt{2}}{2}\\left(1 - \\dfrac{1}{3}\\right) + C = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{2}{3} + C = \\dfrac{\\sqrt{2}}{3} + C$.</p>
                               <p>On a $\\dfrac{\\sqrt{2}}{3} + C = -1$ ⇒ $C = -1 - \\dfrac{\\sqrt{2}}{3}$.</p>
                               <p><strong>$F(x)=\\sin x - \\dfrac{\\sin 3x}{3} - 1 - \\dfrac{\\sqrt{2}}{3}$.</strong></p>`
                },
                {
                    id: 'ch6ex6q3',
                    texte: "3. $f(x)=\\sin x - \\sin 3x$, $F\\left(\\frac{\\pi}{4}\\right)=\\frac{\\sqrt{2}}{2}$.",
                    solution: `<p>Primitive : $-\\cos x + \\dfrac{\\cos 3x}{3} + C$.</p>
                               <p>$F\\left(\\frac{\\pi}{4}\\right) = -\\cos\\frac{\\pi}{4} + \\dfrac{\\cos\\frac{3\\pi}{4}}{3} + C = -\\dfrac{\\sqrt{2}}{2} + \\dfrac{-\\frac{\\sqrt{2}}{2}}{3} + C = -\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{6} + C = -\\dfrac{2\\sqrt{2}}{3} + C$.</p>
                               <p>On a $-\\dfrac{2\\sqrt{2}}{3} + C = \\dfrac{\\sqrt{2}}{2}$ ⇒ $C = \\dfrac{\\sqrt{2}}{2} + \\dfrac{2\\sqrt{2}}{3} = \\dfrac{7\\sqrt{2}}{6}$.</p>
                               <p><strong>$F(x)=-\\cos x + \\dfrac{\\cos 3x}{3} + \\dfrac{7\\sqrt{2}}{6}$.</strong></p>`
                },
                {
                    id: 'ch6ex6q4',
                    texte: "4. $f(x)=\\dfrac{1+\\tan x}{\\cos^2 x}$, $F(0)=0$.",
                    solution: `<p>On a $\\dfrac{1}{\\cos^2 x} = (\\tan x)'$.</p>
                               <p>Donc $f(x)=\\dfrac{1}{\\cos^2 x} + \\tan x\\cdot\\dfrac{1}{\\cos^2 x} = (\\tan x)' + \\tan x(\\tan x)'$.</p>
                               <p>Primitive : $\\tan x + \\dfrac{\\tan^2 x}{2} + C$.</p>
                               <p>$F(0)=\\tan 0 + \\dfrac{\\tan^2 0}{2} + C = C$. Or $F(0)=0$ ⇒ $C=0$.</p>
                               <p><strong>$F(x)=\\tan x + \\dfrac{\\tan^2 x}{2}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7 – Intégration par parties
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Soit $f$ et $g$ les fonctions définies sur $\\mathbb{R}$ par $f(x)=\\cos x\\cos(3x)$ et $g(x)=\\sin x\\sin(3x)$.</p>
                      <ol>
                        <li>Déterminer une primitive sur $\\mathbb{R}$ de $f+g$ et de $f-g$.</li>
                        <li>En déduire les primitives sur $\\mathbb{R}$ de $f$ et $g$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex7q1',
                    texte: "1. Primitives de $f+g$ et $f-g$.",
                    solution: `<p>On utilise les formules trigonométriques :</p>
                               $$ f(x)+g(x) = \\cos x\\cos 3x + \\sin x\\sin 3x = \\cos(3x-x) = \\cos 2x. $$
                               $$ f(x)-g(x) = \\cos x\\cos 3x - \\sin x\\sin 3x = \\cos(3x+x) = \\cos 4x. $$
                               <p>Primitive de $f+g$ : $\\dfrac{\\sin 2x}{2}$.</p>
                               <p>Primitive de $f-g$ : $\\dfrac{\\sin 4x}{4}$.</p>
                               <p><strong>$\\int (f+g) dx = \\dfrac{\\sin 2x}{2}+C_1$.</strong></p>
                               <p><strong>$\\int (f-g) dx = \\dfrac{\\sin 4x}{4}+C_2$.</strong></p>`
                },
                {
                    id: 'ch6ex7q2',
                    texte: "2. Primitives de $f$ et $g$.",
                    solution: `<p>On a $f(x)=\\dfrac{(f+g)+(f-g)}{2}$ et $g(x)=\\dfrac{(f+g)-(f-g)}{2}$.</p>
                               $$ \\int f(x) dx = \\dfrac{1}{2}\\left(\\dfrac{\\sin 2x}{2} + \\dfrac{\\sin 4x}{4}\\right) + C = \\dfrac{\\sin 2x}{4} + \\dfrac{\\sin 4x}{8} + C. $$
                               $$ \\int g(x) dx = \\dfrac{1}{2}\\left(\\dfrac{\\sin 2x}{2} - \\dfrac{\\sin 4x}{4}\\right) + C = \\dfrac{\\sin 2x}{4} - \\dfrac{\\sin 4x}{8} + C. $$
                               <p><strong>$\\int f(x) dx = \\dfrac{\\sin 2x}{4} + \\dfrac{\\sin 4x}{8} + C$.</strong></p>
                               <p><strong>$\\int g(x) dx = \\dfrac{\\sin 2x}{4} - \\dfrac{\\sin 4x}{8} + C$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 3 à 7) – Calcul de primitives – ajoutée avec succès.");
})();