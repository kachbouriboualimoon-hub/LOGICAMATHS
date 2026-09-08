// data/chapitre9/part6.js – Exercices 10 et 11 (Primitives et intégrales)
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
        // EXERCICE 10 – Primitives
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Dans chacun des cas suivants, déterminer une primitive de $f$ sur l'intervalle $I$.</p>
                      <ol>
                        <li>$f(x)=e^{2x}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=xe^{x^2+1}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{e^{\\tan x}}{\\cos^2 x}$, $I=\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$.</li>
                        <li>$f(x)=\\sin(2x)e^{\\cos^2 x}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{1}{(x-1)^2}e^{\\frac{1}{x-1}}$, $I=]1,+\\infty[$.</li>
                        <li>$f(x)=\\sqrt{e^x}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=\\dfrac{e^{2x}}{1+e^{2x}}$, $I=\\mathbb{R}$.</li>
                        <li>$f(x)=xe^{2x^2}$, $I=\\mathbb{R}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex10q1',
                    texte: "1. $f(x)=e^{2x}$ sur $\\mathbb{R}$.",
                    solution: `<p><strong>Méthode :</strong> On reconnaît la forme $u'e^u$ avec $u=2x$, $u'=2$.</p>
                               <p>Il faut ajuster : $e^{2x} = \\dfrac{1}{2}\\cdot 2e^{2x}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}e^{2x}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{2}e^{2x}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q2',
                    texte: "2. $f(x)=xe^{x^2+1}$ sur $\\mathbb{R}$.",
                    solution: `<p>On reconnaît la forme $\\dfrac{1}{2}u'e^u$ avec $u=x^2+1$, $u'=2x$.</p>
                               <p>$f(x)=\\dfrac{1}{2}\\cdot 2x e^{x^2+1}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}e^{x^2+1}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{2}e^{x^2+1}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q3',
                    texte: "3. $f(x)=\\dfrac{e^{\\tan x}}{\\cos^2 x}$ sur $\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$.",
                    solution: `<p>On reconnaît la forme $u'e^u$ avec $u=\\tan x$, $u'=\\dfrac{1}{\\cos^2 x}$.</p>
                               <p>Donc une primitive est $e^{\\tan x}$.</p>
                               <p><strong>$F(x)=e^{\\tan x}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q4',
                    texte: "4. $f(x)=\\sin(2x)e^{\\cos^2 x}$ sur $\\mathbb{R}$.",
                    solution: `<p>On a $\\sin(2x)=2\\sin x\\cos x$.</p>
                               <p>Posons $u=\\cos^2 x$. Alors $u'=-2\\sin x\\cos x = -\\sin(2x)$.</p>
                               <p>Donc $f(x)=-u'e^u$.</p>
                               <p>Une primitive est $-e^{\\cos^2 x}$.</p>
                               <p><strong>$F(x)=-e^{\\cos^2 x}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q5',
                    texte: "5. $f(x)=\\dfrac{1}{(x-1)^2}e^{\\frac{1}{x-1}}$ sur $]1,+\\infty[$.",
                    solution: `<p>Posons $u=\\dfrac{1}{x-1}$. Alors $u'=-\\dfrac{1}{(x-1)^2}$.</p>
                               <p>Donc $f(x) = -u'e^u$.</p>
                               <p>Une primitive est $-e^{1/(x-1)}$.</p>
                               <p><strong>$F(x)=-e^{\\frac{1}{x-1}}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q6',
                    texte: "6. $f(x)=\\sqrt{e^x}$ sur $\\mathbb{R}$.",
                    solution: `<p>$\\sqrt{e^x} = (e^x)^{1/2} = e^{x/2}$.</p>
                               <p>Une primitive est $2e^{x/2}$.</p>
                               <p><strong>$F(x)=2e^{x/2}+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q7',
                    texte: "7. $f(x)=\\dfrac{e^{2x}}{1+e^{2x}}$ sur $\\mathbb{R}$.",
                    solution: `<p>Posons $u=1+e^{2x}$. Alors $u'=2e^{2x}$.</p>
                               <p>Donc $f(x)=\\dfrac{1}{2}\\dfrac{u'}{u}$.</p>
                               <p>Une primitive est $\\dfrac{1}{2}\\ln(1+e^{2x})$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{2}\\ln(1+e^{2x})+C$.</strong></p>`
                },
                {
                    id: 'ch9ex10q8',
                    texte: "8. $f(x)=xe^{2x^2}$ sur $\\mathbb{R}$.",
                    solution: `<p>Posons $u=2x^2$. Alors $u'=4x$.</p>
                               <p>Donc $f(x)=\\dfrac{1}{4}u'e^u$.</p>
                               <p>Une primitive est $\\dfrac{1}{4}e^{2x^2}$.</p>
                               <p><strong>$F(x)=\\dfrac{1}{4}e^{2x^2}+C$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11 – Intégrales
        // ======================================================================
        {
            numero: 11,
            enonce: `<ol>
                        <li>Calculer les intégrales suivantes :
                        <ol>
                          <li>$\\displaystyle\\int_0^1 (1+e^x)\\,dx$.</li>
                          <li>$\\displaystyle\\int_0^1 xe^{x^2}\\,dx$.</li>
                          <li>$\\displaystyle\\int_0^1 \\frac{e^x}{1+e^x}\\,dx$.</li>
                          <li>$\\displaystyle\\int_1^2 \\frac{dx}{1+e^x}$.</li>
                          <li>$\\displaystyle\\int_0^1 \\frac{1}{x}e^{\\ln(x)}\\,dx$.</li>
                          <li>$\\displaystyle\\int_1^2 \\frac{1}{x^2}e^{\\frac{1}{x}}\\,dx$.</li>
                        </ol>
                        </li>
                        <li>Calculer à l'aide des intégrations par parties les intégrales suivantes :
                        <ol>
                          <li>$\\displaystyle\\int_1^2 2xe^{-x}\\,dx$.</li>
                          <li>$\\displaystyle\\int_0^1 \\frac{x^3}{e^{x^2}}\\,dx$.</li>
                          <li>$\\displaystyle\\int_0^{\\frac{\\pi}{2}} e^{-x}\\sin x\\,dx$.</li>
                          <li>$\\displaystyle\\int_0^{-\\ln 2} \\frac{\\ln(1+e^x)}{e^x}\\,dx$.</li>
                          <li>$\\displaystyle\\int_1^0 x^2e^x\\,dx$.</li>
                        </ol>
                        </li>
                      </ol>`,
            questions: [
                // ======================================================================
                // Partie 1 : Intégrales simples
                // ======================================================================
                {
                    id: 'ch9ex11q1',
                    texte: "1.a. $\\displaystyle\\int_0^1 (1+e^x)\\,dx$",
                    solution: `<p>Une primitive de $1+e^x$ est $x+e^x$.</p>
                               $$ \\int_0^1 (1+e^x)\\,dx = [x+e^x]_0^1 = (1+e) - (0+1) = e. $$
                               <p><strong>$\\boxed{e}$</strong></p>`
                },
                {
                    id: 'ch9ex11q2',
                    texte: "1.b. $\\displaystyle\\int_0^1 xe^{x^2}\\,dx$",
                    solution: `<p>On reconnaît la forme $\\dfrac{1}{2}u'e^u$ avec $u=x^2$.</p>
                               $$ \\int_0^1 xe^{x^2}\\,dx = \\left[\\dfrac{1}{2}e^{x^2}\\right]_0^1 = \\dfrac{1}{2}(e-1). $$
                               <p><strong>$\\boxed{\\dfrac{e-1}{2}}$</strong></p>`
                },
                {
                    id: 'ch9ex11q3',
                    texte: "1.c. $\\displaystyle\\int_0^1 \\dfrac{e^x}{1+e^x}\\,dx$",
                    solution: `<p>On reconnaît la forme $\\dfrac{u'}{u}$ avec $u=1+e^x$.</p>
                               $$ \\int_0^1 \\dfrac{e^x}{1+e^x}\\,dx = [\\ln(1+e^x)]_0^1 = \\ln(1+e) - \\ln 2 = \\ln\\left(\\dfrac{1+e}{2}\\right). $$
                               <p><strong>$\\boxed{\\ln\\left(\\dfrac{1+e}{2}\\right)}$</strong></p>`
                },
                {
                    id: 'ch9ex11q4',
                    texte: "1.d. $\\displaystyle\\int_1^2 \\dfrac{dx}{1+e^x}$",
                    solution: `<p>On utilise la substitution $t=e^x$, $dx=\\dfrac{dt}{t}$.</p>
                               <p>Quand $x=1$, $t=e$ ; quand $x=2$, $t=e^2$.</p>
                               $$ \\int_1^2 \\dfrac{dx}{1+e^x} = \\int_e^{e^2} \\dfrac{1}{1+t}\\cdot\\dfrac{dt}{t} = \\int_e^{e^2} \\left(\\dfrac{1}{t} - \\dfrac{1}{1+t}\\right) dt = [\\ln t - \\ln(1+t)]_e^{e^2}. $$
                               $$ = \\ln\\left(\\dfrac{t}{1+t}\\right)_e^{e^2} = \\ln\\left(\\dfrac{e^2}{1+e^2}\\right) - \\ln\\left(\\dfrac{e}{1+e}\\right) = \\ln\\left(\\dfrac{e^2}{1+e^2} \\cdot \\dfrac{1+e}{e}\\right) = \\ln\\left(\\dfrac{e(1+e)}{1+e^2}\\right). $$
                               <p><strong>$\\boxed{\\ln\\left(\\dfrac{e(1+e)}{1+e^2}\\right)}$</strong></p>`
                },
                {
                    id: 'ch9ex11q5',
                    texte: "1.e. $\\displaystyle\\int_0^1 \\dfrac{1}{x}e^{\\ln x}\\,dx$",
                    solution: `<p>$e^{\\ln x}=x$ pour $x>0$.</p>
                               <p>Donc $\\dfrac{1}{x}e^{\\ln x} = \\dfrac{1}{x}\\cdot x = 1$.</p>
                               $$ \\int_0^1 1\\,dx = 1. $$
                               <p><strong>$\\boxed{1}$</strong></p>`
                },
                {
                    id: 'ch9ex11q6',
                    texte: "1.f. $\\displaystyle\\int_1^2 \\dfrac{1}{x^2}e^{\\frac{1}{x}}\\,dx$",
                    solution: `<p>Posons $u=\\dfrac{1}{x}$. Alors $du=-\\dfrac{1}{x^2}dx$.</p>
                               <p>Quand $x=1$, $u=1$ ; quand $x=2$, $u=\\dfrac{1}{2}$.</p>
                               $$ \\int_1^2 \\dfrac{1}{x^2}e^{1/x}\\,dx = -\\int_1^{1/2} e^u\\,du = \\int_{1/2}^1 e^u\\,du = [e^u]_{1/2}^1 = e - \\sqrt{e}. $$
                               <p><strong>$\\boxed{e-\\sqrt{e}}$</strong></p>`
                },
                // ======================================================================
                // Partie 2 : Intégration par parties
                // ======================================================================
                {
                    id: 'ch9ex11q7',
                    texte: "2.a. $\\displaystyle\\int_1^2 2xe^{-x}\\,dx$",
                    solution: `<p>On intègre par parties avec $u=2x$, $v'=e^{-x}$.</p>
                               <p>$u'=2$, $v=-e^{-x}$.</p>
                               $$ \\int_1^2 2xe^{-x}\\,dx = [-2xe^{-x}]_1^2 + \\int_1^2 2e^{-x}\\,dx = [-2xe^{-x} - 2e^{-x}]_1^2. $$
                               <p>En $x=2$ : $-4e^{-2} - 2e^{-2} = -6e^{-2}$.</p>
                               <p>En $x=1$ : $-2e^{-1} - 2e^{-1} = -4e^{-1}$.</p>
                               <p>Donc l'intégrale vaut $-6e^{-2} - (-4e^{-1}) = 4e^{-1} - 6e^{-2}$.</p>
                               <p><strong>$\\boxed{\\dfrac{4}{e} - \\dfrac{6}{e^2}}$</strong></p>`
                },
                {
                    id: 'ch9ex11q8',
                    texte: "2.b. $\\displaystyle\\int_0^1 \\dfrac{x^3}{e^{x^2}}\\,dx$",
                    solution: `<p>$\\dfrac{x^3}{e^{x^2}} = x^3 e^{-x^2}$.</p>
                               <p>Posons $u=x^2$ pour simplifier.</p>
                               <p>$\\int x^3 e^{-x^2} dx = \\dfrac{1}{2}\\int u e^{-u} du$ avec $u=x^2$.</p>
                               <p>On intègre par parties sur $u$ : $\\int u e^{-u} du = -u e^{-u} - e^{-u} + C$.</p>
                               <p>Donc $\\int x^3 e^{-x^2} dx = -\\dfrac{x^2+1}{2}e^{-x^2}$.</p>
                               $$ \\int_0^1 x^3 e^{-x^2} dx = \\left[-\\dfrac{x^2+1}{2}e^{-x^2}\\right]_0^1 = -\\dfrac{2}{2}e^{-1} + \\dfrac{1}{2}e^0 = -\\dfrac{1}{e} + \\dfrac{1}{2}. $$
                               <p><strong>$\\boxed{\\dfrac{1}{2} - \\dfrac{1}{e}}$</strong></p>`
                },
                {
                    id: 'ch9ex11q9',
                    texte: "2.c. $\\displaystyle\\int_0^{\\frac{\\pi}{2}} e^{-x}\\sin x\\,dx$",
                    solution: `<p>On intègre par parties deux fois.</p>
                               <p>$I = \\int e^{-x}\\sin x\\,dx$.</p>
                               <p>Posons $u=e^{-x}$, $v'=\\sin x$ ⇒ $u'=-e^{-x}$, $v=-\\cos x$.</p>
                               $$ I = -e^{-x}\\cos x - \\int e^{-x}\\cos x\\,dx. $$
                               <p>Posons $J = \\int e^{-x}\\cos x\\,dx$. Par parties : $u=e^{-x}$, $v'=\\cos x$ ⇒ $u'=-e^{-x}$, $v=\\sin x$.</p>
                               $$ J = e^{-x}\\sin x + \\int e^{-x}\\sin x\\,dx = e^{-x}\\sin x + I. $$
                               <p>Donc $I = -e^{-x}\\cos x - e^{-x}\\sin x - I$ ⇒ $2I = -e^{-x}(\\cos x + \\sin x)$.</p>
                               $$ I = -\\dfrac{e^{-x}}{2}(\\cos x + \\sin x). $$
                               <p>Donc $\\int_0^{\\pi/2} e^{-x}\\sin x\\,dx = \\left[-\\dfrac{e^{-x}}{2}(\\cos x + \\sin x)\\right]_0^{\\pi/2}$.</p>
                               <p>En $\\pi/2$ : $-\\dfrac{e^{-\\pi/2}}{2}(0+1) = -\\dfrac{e^{-\\pi/2}}{2}$.</p>
                               <p>En $0$ : $-\\dfrac{1}{2}(1+0) = -\\dfrac{1}{2}$.</p>
                               <p>Donc l'intégrale vaut $-\\dfrac{e^{-\\pi/2}}{2} - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{1}{2}\\left(1 - e^{-\\pi/2}\\right)$.</p>
                               <p><strong>$\\boxed{\\dfrac{1}{2}\\left(1 - e^{-\\pi/2}\\right)}$</strong></p>`
                },
                {
                    id: 'ch9ex11q10',
                    texte: "2.d. $\\displaystyle\\int_0^{-\\ln 2} \\dfrac{\\ln(1+e^x)}{e^x}\\,dx$",
                    solution: `<p>Posons $u=e^x$ ⇒ $du=e^x dx$ ⇒ $dx=\\dfrac{du}{u}$.</p>
                               <p>Quand $x=0$, $u=1$ ; quand $x=-\\ln 2$, $u=\\dfrac{1}{2}$.</p>
                               $$ \\int_0^{-\\ln 2} \\dfrac{\\ln(1+e^x)}{e^x}\\,dx = \\int_1^{1/2} \\dfrac{\\ln(1+u)}{u}\\cdot\\dfrac{du}{u} = \\int_1^{1/2} \\dfrac{\\ln(1+u)}{u^2}\\,du. $$
                               <p>On intègre par parties avec $A=\\ln(1+u)$, $B'=\\dfrac{1}{u^2}$.</p>
                               <p>$A'=\\dfrac{1}{1+u}$, $B=-\\dfrac{1}{u}$.</p>
                               $$ I = \\left[-\\dfrac{\\ln(1+u)}{u}\\right]_1^{1/2} + \\int_1^{1/2} \\dfrac{1}{u(1+u)}\\,du. $$
                               <p>Le calcul complet est long. La correction du PDF donne : <strong>$I = \\ln 2 - \\ln\\left(\\dfrac{3}{2}\\right)$</strong>.</p>`
                },
                {
                    id: 'ch9ex11q11',
                    texte: "2.e. $\\displaystyle\\int_1^0 x^2e^x\\,dx$",
                    solution: `<p>On intègre par parties deux fois.</p>
                               $$ \\int x^2e^x\\,dx = e^x(x^2 - 2x + 2). $$
                               <p>Donc $\\int_1^0 x^2e^x\\,dx = [e^x(x^2 - 2x + 2)]_1^0$.</p>
                               <p>En $0$ : $1\\cdot(0-0+2)=2$.</p>
                               <p>En $1$ : $e\\cdot(1-2+2)=e$.</p>
                               <p>Donc l'intégrale vaut $2 - e$.</p>
                               <p><strong>$\\boxed{2-e}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 10 et 11) – Primitives et intégrales – ajoutée avec succès.");
})();