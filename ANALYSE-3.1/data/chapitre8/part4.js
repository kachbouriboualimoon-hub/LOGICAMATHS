// data/chapitre8/part4.js – Exercices 8 et 9 (Primitives et intégrales avec ln)
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
        // EXERCICE 8 – Primitives de fonctions avec ln
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>Déterminer dans chacun des cas suivants, une primitive de la fonction $f$ sur $I$.</p>
                      <ol>
                        <li>$f(x) = 1 + \\dfrac{1}{x} + \\dfrac{1}{x^2} + \\cdots + \\dfrac{1}{x^n}$, $I = \\mathbb{R}_+^*$</li>
                        <li>$f(x) = \\dfrac{2x-3}{x+1}$, $I = ]-1, +\\infty[$</li>
                        <li>$f(x) = \\dfrac{x+1}{x+2}$, $I = ]-2, +\\infty[$</li>
                        <li>$f(x) = \\dfrac{2-x}{x^2+1}$, $I = \\mathbb{R}$</li>
                        <li>$f(x) = \\dfrac{\\ln x}{x}$, $I = ]1, +\\infty[$</li>
                        <li>$f(x) = \\dfrac{1}{x\\ln x}$, $I = ]0, +\\infty[$</li>
                        <li>$f(x) = \\tan x$, $I = \\left]0, \\dfrac{\\pi}{2}\\right[$</li>
                        <li>$f(x) = \\dfrac{1}{\\cos x}$, $I = \\left]0, \\dfrac{\\pi}{2}\\right[$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex8q1',
                    texte: "1. $f(x) = 1 + \\dfrac{1}{x} + \\dfrac{1}{x^2} + \\cdots + \\dfrac{1}{x^n}$, $I = \\mathbb{R}_+^*$",
                    solution: `<p><strong>Méthode :</strong> On intègre terme à terme en utilisant les primitives usuelles.</p>
                               <p>La fonction est continue sur $\\mathbb{R}_+^*$ comme somme de fonctions continues, donc elle admet des primitives.</p>
                               <p>On a $\\displaystyle\\int \\dfrac{1}{x^k} dx = \\dfrac{x^{-k+1}}{-k+1} + C$ pour $k\\neq1$.</p>
                               <p>Donc :</p>
                               $$ \\int \\left(1 + \\dfrac{1}{x} + \\dfrac{1}{x^2} + \\cdots + \\dfrac{1}{x^n}\\right) dx = x + \\ln x - \\dfrac{1}{x} - \\dfrac{1}{2x^2} - \\cdots - \\dfrac{1}{(n-1)x^{n-1}} + C \\quad \\text{pour } n\\ge2. $$
                               <p>Pour $n=1$ : $\\displaystyle\\int \\left(1 + \\dfrac{1}{x}\\right) dx = x + \\ln x + C$.</p>
                               <p><strong>$F(x) = x + \\ln x - \\displaystyle\\sum_{k=2}^{n} \\dfrac{1}{(k-1)x^{k-1}} + C$ (pour $n\\ge2$).</strong></p>`
                },
                {
                    id: 'ch8ex8q2',
                    texte: "2. $f(x) = \\dfrac{2x-3}{x+1}$, $I = ]-1, +\\infty[$",
                    solution: `<p><strong>Méthode :</strong> On décompose la fraction rationnelle.</p>
                               <p>Sur $I$, $x+1>0$, donc pas de valeur absolue pour le logarithme.</p>
                               <p>On écrit $\\dfrac{2x-3}{x+1} = 2 - \\dfrac{5}{x+1}$.</p>
                               <p>Vérification : $2 - \\dfrac{5}{x+1} = \\dfrac{2(x+1)-5}{x+1} = \\dfrac{2x-3}{x+1}$.</p>
                               <p>Donc :</p>
                               $$ \\int \\dfrac{2x-3}{x+1} dx = \\int \\left(2 - \\dfrac{5}{x+1}\\right) dx = 2x - 5\\ln(x+1) + C. $$
                               <p><strong>$F(x) = 2x - 5\\ln(x+1) + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q3',
                    texte: "3. $f(x) = \\dfrac{x+1}{x+2}$, $I = ]-2, +\\infty[$",
                    solution: `<p>Sur $I$, $x+2>0$.</p>
                               <p>On écrit $\\dfrac{x+1}{x+2} = 1 - \\dfrac{1}{x+2}$.</p>
                               <p>Vérification : $1 - \\dfrac{1}{x+2} = \\dfrac{x+2-1}{x+2} = \\dfrac{x+1}{x+2}$.</p>
                               <p>Donc :</p>
                               $$ \\int \\dfrac{x+1}{x+2} dx = \\int \\left(1 - \\dfrac{1}{x+2}\\right) dx = x - \\ln(x+2) + C. $$
                               <p><strong>$F(x) = x - \\ln(x+2) + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q4',
                    texte: "4. $f(x) = \\dfrac{2-x}{x^2+1}$, $I = \\mathbb{R}$",
                    solution: `<p><strong>Méthode :</strong> On sépare la fraction en deux parties.</p>
                               $$ f(x) = \\dfrac{2}{x^2+1} - \\dfrac{x}{x^2+1}. $$
                               <p>On sait que $\\displaystyle\\int \\dfrac{1}{x^2+1} dx = \\arctan x + C$.</p>
                               <p>De plus, $\\displaystyle\\int \\dfrac{x}{x^2+1} dx = \\dfrac{1}{2}\\ln(x^2+1) + C$ (car $(x^2+1)' = 2x$).</p>
                               <p>Donc :</p>
                               $$ \\int \\dfrac{2-x}{x^2+1} dx = 2\\arctan x - \\dfrac{1}{2}\\ln(x^2+1) + C. $$
                               <p><strong>$F(x) = 2\\arctan x - \\dfrac{1}{2}\\ln(x^2+1) + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q5',
                    texte: "5. $f(x) = \\dfrac{\\ln x}{x}$, $I = ]1, +\\infty[$",
                    solution: `<p><strong>Méthode :</strong> On reconnaît la forme $u'u$ avec $u=\\ln x$.</p>
                               <p>$f(x) = \\dfrac{1}{x} \\cdot \\ln x$. Or $(\\ln x)' = \\dfrac{1}{x}$.</p>
                               <p>Donc $f(x) = u'(x) u(x)$ avec $u(x) = \\ln x$.</p>
                               <p>Une primitive est $\\dfrac{u(x)^2}{2} = \\dfrac{(\\ln x)^2}{2}$.</p>
                               <p><strong>$F(x) = \\dfrac{(\\ln x)^2}{2} + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q6',
                    texte: "6. $f(x) = \\dfrac{1}{x\\ln x}$, $I = ]0, +\\infty[$",
                    solution: `<p><strong>Méthode :</strong> On reconnaît la forme $\\dfrac{u'}{u}$ avec $u=\\ln x$.</p>
                               <p>On a $f(x) = \\dfrac{1}{x\\ln x} = \\dfrac{(\\ln x)'}{\\ln x}$.</p>
                               <p>Donc une primitive est $\\ln|\\ln x|$.</p>
                               <p>Sur $]0,1[$, $\\ln x <0$ donc $\\ln|\\ln x| = \\ln(-\\ln x)$.</p>
                               <p>Sur $]1,+\\infty[$, $\\ln x >0$ donc $\\ln|\\ln x| = \\ln(\\ln x)$.</p>
                               <p><strong>$F(x) = \\ln|\\ln x| + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q7',
                    texte: "7. $f(x) = \\tan x$, $I = \\left]0, \\dfrac{\\pi}{2}\\right[$",
                    solution: `<p><strong>Méthode :</strong> On utilise $\\tan x = \\dfrac{\\sin x}{\\cos x}$.</p>
                               <p>Sur $\\left]0, \\dfrac{\\pi}{2}\\right[$, $\\cos x >0$.</p>
                               <p>$\\tan x = \\dfrac{\\sin x}{\\cos x} = -\\dfrac{(\\cos x)'}{\\cos x}$ (car $(\\cos x)' = -\\sin x$).</p>
                               <p>Donc $\\displaystyle\\int \\tan x dx = -\\ln(\\cos x) + C$.</p>
                               <p><strong>$F(x) = -\\ln(\\cos x) + C = \\ln\\left(\\dfrac{1}{\\cos x}\\right) + C$.</strong></p>`
                },
                {
                    id: 'ch8ex8q8',
                    texte: "8. $f(x) = \\dfrac{1}{\\cos x}$, $I = \\left]0, \\dfrac{\\pi}{2}\\right[$",
                    solution: `<p><strong>Méthode :</strong> On utilise la formule $\\dfrac{1}{\\cos x} = \\dfrac{\\cos x}{1-\\sin^2 x}$.</p>
                               <p>Ou plus simplement : $\\displaystyle\\int \\dfrac{1}{\\cos x} dx = \\ln\\left|\\tan\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{4}\\right)\\right| + C$.</p>
                               <p>Sur $\\left]0, \\dfrac{\\pi}{2}\\right[$, $\\cos x >0$ donc :</p>
                               $$ \\int \\dfrac{1}{\\cos x} dx = \\ln\\left(\\tan\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{4}\\right)\\right) + C. $$
                               <p>Vérification : $\\dfrac{d}{dx} \\ln\\left(\\tan\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{4}\\right)\\right) = \\dfrac{1}{\\tan(...)} \\times \\dfrac{1}{\\cos^2(...)} \\times \\dfrac{1}{2} = \\dfrac{1}{\\sin(...)\\cos(...)} \\times \\dfrac{1}{2} = \\dfrac{1}{\\cos x}$.</p>
                               <p><strong>$F(x) = \\ln\\left(\\tan\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{4}\\right)\\right) + C$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9 – Calcul d'intégrales définies
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Calculer les intégrales ci-dessous :</p>
                      <ol>
                        <li>$\\displaystyle\\int_1^e \\ln(2x) dx$</li>
                        <li>$\\displaystyle\\int_0^2 \\dfrac{x}{x+1} dx$</li>
                        <li>$\\displaystyle\\int_0^1 \\dfrac{x}{x^2+1} dx$</li>
                        <li>$\\displaystyle\\int_0^{\\pi/4} \\tan x dx$</li>
                        <li>$\\displaystyle\\int_1^e \\dfrac{\\ln x}{x} dx$</li>
                        <li>$\\displaystyle\\int_1^e \\dfrac{1}{x\\ln x} dx$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex9q1',
                    texte: "1. $\\displaystyle\\int_1^e \\ln(2x) dx$",
                    solution: `<p><strong>Méthode :</strong> On utilise une primitive de $\\ln(2x)$.</p>
                               <p>Une primitive de $\\ln(2x)$ est $x\\ln(2x) - x$ (car $\\dfrac{d}{dx}(x\\ln(2x)-x) = \\ln(2x)+1-1 = \\ln(2x)$).</p>
                               <p>Donc :</p>
                               $$ \\int_1^e \\ln(2x) dx = \\left[x\\ln(2x) - x\\right]_1^e. $$
                               <p>En $x=e$ : $e\\ln(2e) - e = e(\\ln 2 + 1) - e = e\\ln 2$.</p>
                               <p>En $x=1$ : $1\\ln 2 - 1 = \\ln 2 - 1$.</p>
                               <p>Donc $I = e\\ln 2 - (\\ln 2 - 1) = e\\ln 2 - \\ln 2 + 1 = \\ln 2(e-1) + 1$.</p>
                               <p><strong>$\\int_1^e \\ln(2x) dx = \\ln 2(e-1) + 1$.</strong></p>`
                },
                {
                    id: 'ch8ex9q2',
                    texte: "2. $\\displaystyle\\int_0^2 \\dfrac{x}{x+1} dx$",
                    solution: `<p>On écrit $\\dfrac{x}{x+1} = 1 - \\dfrac{1}{x+1}$.</p>
                               <p>Donc :</p>
                               $$ \\int_0^2 \\dfrac{x}{x+1} dx = \\int_0^2 \\left(1 - \\dfrac{1}{x+1}\\right) dx = \\left[x - \\ln(x+1)\\right]_0^2. $$
                               <p>En $x=2$ : $2 - \\ln 3$.</p>
                               <p>En $x=0$ : $0 - \\ln 1 = 0$.</p>
                               <p><strong>$\\int_0^2 \\dfrac{x}{x+1} dx = 2 - \\ln 3$.</strong></p>`
                },
                {
                    id: 'ch8ex9q3',
                    texte: "3. $\\displaystyle\\int_0^1 \\dfrac{x}{x^2+1} dx$",
                    solution: `<p>On reconnaît la forme $\\dfrac{u'}{2u}$ avec $u=x^2+1$.</p>
                               <p>$(x^2+1)' = 2x$, donc $\\dfrac{x}{x^2+1} = \\dfrac{1}{2} \\cdot \\dfrac{(x^2+1)'}{x^2+1}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\ln(x^2+1)$.</p>
                               $$ \\int_0^1 \\dfrac{x}{x^2+1} dx = \\left[\\dfrac{1}{2}\\ln(x^2+1)\\right]_0^1 = \\dfrac{1}{2}\\ln 2 - \\dfrac{1}{2}\\ln 1 = \\dfrac{1}{2}\\ln 2. $$
                               <p><strong>$\\int_0^1 \\dfrac{x}{x^2+1} dx = \\dfrac{1}{2}\\ln 2$.</strong></p>`
                },
                {
                    id: 'ch8ex9q4',
                    texte: "4. $\\displaystyle\\int_0^{\\pi/4} \\tan x dx$",
                    solution: `<p>Une primitive de $\\tan x$ est $-\\ln(\\cos x)$.</p>
                               <p>Donc :</p>
                               $$ \\int_0^{\\pi/4} \\tan x dx = [-\\ln(\\cos x)]_0^{\\pi/4} = -\\ln\\left(\\cos\\frac{\\pi}{4}\\right) + \\ln(\\cos 0) = -\\ln\\left(\\dfrac{\\sqrt{2}}{2}\\right) + \\ln 1. $$
                               <p>$-\\ln\\left(\\dfrac{\\sqrt{2}}{2}\\right) = \\ln\\left(\\dfrac{2}{\\sqrt{2}}\\right) = \\ln(\\sqrt{2}) = \\dfrac{1}{2}\\ln 2$.</p>
                               <p><strong>$\\int_0^{\\pi/4} \\tan x dx = \\dfrac{1}{2}\\ln 2$.</strong></p>`
                },
                {
                    id: 'ch8ex9q5',
                    texte: "5. $\\displaystyle\\int_1^e \\dfrac{\\ln x}{x} dx$",
                    solution: `<p>Une primitive de $\\dfrac{\\ln x}{x}$ est $\\dfrac{(\\ln x)^2}{2}$.</p>
                               <p>Donc :</p>
                               $$ \\int_1^e \\dfrac{\\ln x}{x} dx = \\left[\\dfrac{(\\ln x)^2}{2}\\right]_1^e = \\dfrac{(\\ln e)^2}{2} - \\dfrac{(\\ln 1)^2}{2} = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}. $$
                               <p><strong>$\\int_1^e \\dfrac{\\ln x}{x} dx = \\dfrac{1}{2}$.</strong></p>`
                },
                {
                    id: 'ch8ex9q6',
                    texte: "6. $\\displaystyle\\int_1^e \\dfrac{1}{x\\ln x} dx$",
                    solution: `<p>Une primitive de $\\dfrac{1}{x\\ln x}$ est $\\ln|\\ln x| = \\ln(\\ln x)$ (car $\\ln x>0$ sur $[1,e]$).</p>
                               <p>Donc :</p>
                               $$ \\int_1^e \\dfrac{1}{x\\ln x} dx = [\\ln(\\ln x)]_1^e = \\ln(\\ln e) - \\ln(\\ln 1) = \\ln 1 - \\ln 0. $$
                               <p>Attention : $\\ln 1 = 0$ mais $\\ln 0$ n'est pas défini ! L'intégrale est impropre en $1$.</p>
                               <p>On calcule : $\\displaystyle\\int_1^e \\dfrac{1}{x\\ln x} dx = \\lim_{\\varepsilon\\to0^+} \\int_{1+\\varepsilon}^e \\dfrac{1}{x\\ln x} dx = \\lim_{\\varepsilon\\to0^+} [\\ln(\\ln x)]_{1+\\varepsilon}^e$.</p>
                               <p>$= \\lim_{\\varepsilon\\to0^+} (\\ln 1 - \\ln(\\ln(1+\\varepsilon))) = -\\lim_{\\varepsilon\\to0^+} \\ln(\\ln(1+\\varepsilon)) = +\\infty$.</p>
                               <p>L'intégrale diverge.</p>
                               <p><strong>L'intégrale est divergente (tend vers $+\\infty$).</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 4 (exercices 8 et 9) – Primitives et intégrales – ajoutée avec succès.");
})();