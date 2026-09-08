// data/chapitre9/part1.js – QCM, Vrai-Faux, Exercices 1, 2, 3
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
        // QCM
        // ======================================================================
        {
            numero: 'QCM',
            enonce: `<p><strong>QCM :</strong> Cocher la réponse exacte.</p>
                      <ol>
                        <li>$e^{-3\\ln\\left(\\frac{1}{2}\\right)}$ est égal à :<br>
                        a) $-\\dfrac{1}{8}$ &nbsp;&nbsp; b) $8$ &nbsp;&nbsp; c) $-6$</li>
                        <li>$2e^{x+y}$ est égal à :<br>
                        a) $e^{2x+2y}$ &nbsp;&nbsp; b) $e^{2x}e^{2y}$ &nbsp;&nbsp; c) $2e^xe^y$</li>
                        <li>$e^x = \\dfrac{1}{e}$ est équivalent à :<br>
                        a) $x=-1$ &nbsp;&nbsp; b) $x=\\ln e$ &nbsp;&nbsp; c) $x=e$</li>
                        <li>$-2 < e^{x^2-1} < 1$ est équivalent à :<br>
                        a) $e^{x^2-1} > 0$ &nbsp;&nbsp; b) $x^2 > 1$ &nbsp;&nbsp; c) $-1 < x < 1$</li>
                        <li>$\\lim_{x\\to+\\infty} \\left(\\dfrac{2e^x}{x^4} - \\dfrac{1}{x^2}\\right)$ est égale à :<br>
                        a) $0$ &nbsp;&nbsp; b) $2$ &nbsp;&nbsp; c) $+\\infty$</li>
                        <li>La dérivée de $f(x)=\\dfrac{e^x}{x}$ sur $\\mathbb{R}^*_+$ est :<br>
                        a) $e^x$ &nbsp;&nbsp; b) $\\dfrac{x-1}{x^2e^{-x}}$ &nbsp;&nbsp; c) $\\dfrac{e^x(x+1)}{x^2}$</li>
                        <li>$\\displaystyle\\int_0^1 xe^{x^2}\\,dx$ est égale à :<br>
                        a) $e-1$ &nbsp;&nbsp; b) $\\dfrac{1}{2}e$ &nbsp;&nbsp; c) $\\dfrac{1}{2}(e-1)$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9qcm1',
                    texte: "1. $e^{-3\\ln(1/2)}$",
                    solution: `<p>On utilise $a\\ln b = \\ln(b^a)$ et $e^{\\ln u}=u$.</p>
                               $$ e^{-3\\ln(1/2)} = e^{\\ln((1/2)^{-3})} = \\left(\\dfrac{1}{2}\\right)^{-3} = 2^3 = 8. $$
                               <p><strong>Réponse b) 8.</strong></p>`
                },
                {
                    id: 'ch9qcm2',
                    texte: "2. $2e^{x+y}$",
                    solution: `<p>$2e^{x+y} = 2e^xe^y$.</p>
                               <p><strong>Réponse c) $2e^xe^y$.</strong></p>`
                },
                {
                    id: 'ch9qcm3',
                    texte: "3. $e^x = \\dfrac{1}{e}$",
                    solution: `<p>$\\dfrac{1}{e} = e^{-1}$. Donc $e^x = e^{-1}$ ⇒ $x=-1$.</p>
                               <p><strong>Réponse a) $x=-1$.</strong></p>`
                },
                {
                    id: 'ch9qcm4',
                    texte: "4. $-2 < e^{x^2-1} < 1$",
                    solution: `<p>L'exponentielle est toujours strictement positive, donc la condition $-2 < e^{x^2-1}$ est toujours vraie.</p>
                               <p>Il reste $e^{x^2-1} < 1$ ⇒ $x^2-1 < 0$ ⇒ $-1 < x < 1$.</p>
                               <p><strong>Réponse c) $-1 < x < 1$.</strong></p>`
                },
                {
                    id: 'ch9qcm5',
                    texte: "5. $\\lim_{x\\to+\\infty} \\left(\\dfrac{2e^x}{x^4} - \\dfrac{1}{x^2}\\right)$",
                    solution: `<p>Par croissance comparée, $\\dfrac{e^x}{x^4} \\to +\\infty$. Donc le premier terme tend vers $+\\infty$ ; le second tend vers $0$.</p>
                               <p><strong>Réponse c) $+\\infty$.</strong></p>`
                },
                {
                    id: 'ch9qcm6',
                    texte: "6. Dérivée de $f(x)=\\dfrac{e^x}{x}$",
                    solution: `<p>On utilise la formule du quotient :</p>
                               $$ f'(x) = \\dfrac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\dfrac{e^x(x-1)}{x^2} = \\dfrac{x-1}{x^2 e^{-x}}. $$
                               <p><strong>Réponse b) $\\dfrac{x-1}{x^2e^{-x}}$.</strong></p>`
                },
                {
                    id: 'ch9qcm7',
                    texte: "7. $\\displaystyle\\int_0^1 xe^{x^2}\\,dx$",
                    solution: `<p>Posons $u=x^2$, $du=2x dx$. L'intégrale devient :</p>
                               $$ \\int_0^1 xe^{x^2}\\,dx = \\dfrac{1}{2}\\int_0^1 e^u\\,du = \\dfrac{1}{2}[e^u]_0^1 = \\dfrac{1}{2}(e-1). $$
                               <p><strong>Réponse c) $\\dfrac{1}{2}(e-1)$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // VRAI-FAUX
        // ======================================================================
        {
            numero: 'VF',
            enonce: `<p><strong>VRAI - FAUX :</strong> Répondre par vrai ou faux en justifiant la réponse.</p>
                      <ol>
                        <li>La fonction exponentielle est dérivable sur $\\mathbb{R}$ et égale à sa dérivée.</li>
                        <li>Pour tout $x\\in\\mathbb{R}^*_+$, $\\ln x < x < e^x$.</li>
                        <li>Soit $r$ un rationnel différent de $-1$. La fonction $x\\mapsto x^{r+1}$ est une primitive de $x\\mapsto x^r$ sur $]0,+\\infty[$.</li>
                        <li>La fonction $f(x)=\\dfrac{e^x-1}{e^x+1}$ est paire.</li>
                        <li>L'équation $\\dfrac{e^x+e^{-x}}{2}=1$ est équivalente à $e^x=1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9vf1',
                    texte: "1. La fonction exponentielle est dérivable et égale à sa dérivée.",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>La fonction exponentielle est dérivable sur $\\mathbb{R}$ et $(e^x)' = e^x$.</p>`
                },
                {
                    id: 'ch9vf2',
                    texte: "2. Pour tout $x>0$, $\\ln x < x < e^x$.",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>On sait que $\\ln x < x$ pour $x>0$ (inégalité classique).</p>
                               <p>De plus, $e^x > x$ pour tout $x$ réel (car $e^x - x$ a un minimum positif en $0$).</p>`
                },
                {
                    id: 'ch9vf3',
                    texte: "3. $x^{r+1}$ est une primitive de $x^r$ sur $]0,+\\infty[$ pour $r\\neq-1$.",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>La dérivée de $x^{r+1}$ est $(r+1)x^r$. Pour que ce soit $x^r$, il faudrait $r+1=1$ ⇒ $r=0$, ce qui n'est pas le cas pour tout $r$.</p>
                               <p>La primitive correcte est $\\dfrac{x^{r+1}}{r+1}$.</p>`
                },
                {
                    id: 'ch9vf4',
                    texte: "4. $f(x)=\\dfrac{e^x-1}{e^x+1}$ est paire.",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>Calculons $f(-x)$ :</p>
                               $$ f(-x) = \\dfrac{e^{-x}-1}{e^{-x}+1} = \\dfrac{\\frac{1}{e^x}-1}{\\frac{1}{e^x}+1} = \\dfrac{1-e^x}{1+e^x} = -\\dfrac{e^x-1}{e^x+1} = -f(x). $$
                               <p>Donc $f$ est impaire.</p>`
                },
                {
                    id: 'ch9vf5',
                    texte: "5. $\\dfrac{e^x+e^{-x}}{2}=1$ ⇔ $e^x=1$.",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>$\\dfrac{e^x+e^{-x}}{2}=1$ ⇒ $e^x+e^{-x}=2$.</p>
                               <p>Posons $X=e^x>0$. L'équation devient $X+\\dfrac{1}{X}=2$ ⇒ $X^2-2X+1=0$ ⇒ $(X-1)^2=0$ ⇒ $X=1$ ⇒ $e^x=1$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 1 – Simplification
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Écrire sous la forme d'une puissance de $e$ les expressions ci-dessous :</p>
                      $$ \\frac{e^7}{e^2}, \\quad \\frac{(e^{-1})^4}{e}, \\quad (e^2)^{-3}, \\quad e^2e^{-3}. $$`,
            questions: [
                {
                    id: 'ch9ex1q1',
                    texte: "Simplification.",
                    solution: `<p>On utilise les propriétés des puissances : $\\dfrac{e^a}{e^b}=e^{a-b}$, $(e^a)^b=e^{ab}$, $e^a e^b=e^{a+b}$.</p>
                               $$ \\frac{e^7}{e^2} = e^{7-2} = e^5. $$
                               $$ \\frac{(e^{-1})^4}{e} = \\frac{e^{-4}}{e^1} = e^{-4-1} = e^{-5}. $$
                               $$ (e^2)^{-3} = e^{2\\times(-3)} = e^{-6}. $$
                               $$ e^2e^{-3} = e^{2-3} = e^{-1}. $$
                               <p><strong>$e^5$, $e^{-5}$, $e^{-6}$, $e^{-1}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2 – Simplification avec ln
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>Simplifier les écritures ci-dessous :</p>
                      $$ e^{5\\ln 3}, \\quad e^{-3\\ln 2}, \\quad \\ln\\left(e^{-\\frac{2}{3}}\\right), \\quad e^{(\\ln 3 - \\ln 2)}. $$
                      $$ e^{5\\ln 2} - e^{3\\ln 4}, \\quad \\frac{e^{2\\ln 3}}{e^{\\ln 81}}, \\quad \\frac{e^3}{e^{4+\\ln 3}}. $$`,
            questions: [
                {
                    id: 'ch9ex2q1',
                    texte: "Simplification.",
                    solution: `<p>On utilise $e^{\\ln a}=a$ et $\\ln(e^a)=a$.</p>
                               $$ e^{5\\ln 3} = e^{\\ln(3^5)} = 3^5 = 243. $$
                               $$ e^{-3\\ln 2} = e^{\\ln(2^{-3})} = 2^{-3} = \\dfrac{1}{8}. $$
                               $$ \\ln\\left(e^{-\\frac{2}{3}}\\right) = -\\dfrac{2}{3}. $$
                               $$ e^{(\\ln 3 - \\ln 2)} = e^{\\ln\\left(\\frac{3}{2}\\right)} = \\dfrac{3}{2}. $$
                               $$ e^{5\\ln 2} - e^{3\\ln 4} = 2^5 - 4^3 = 32 - 64 = -32. $$
                               $$ \\frac{e^{2\\ln 3}}{e^{\\ln 81}} = \\frac{3^2}{81} = \\frac{9}{81} = \\frac{1}{9}. $$
                               $$ \\frac{e^3}{e^{4+\\ln 3}} = e^{3-4-\\ln 3} = e^{-1-\\ln 3} = \\frac{1}{e} \\cdot \\frac{1}{3} = \\frac{1}{3e}. $$
                               <p><strong>$243$, $\\dfrac{1}{8}$, $-\\dfrac{2}{3}$, $\\dfrac{3}{2}$, $-32$, $\\dfrac{1}{9}$, $\\dfrac{1}{3e}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3 – Simplification avec x
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Soit $x$ un réel. Écrire plus simplement :</p>
                      $$ e^x e^{-2x}, \\quad e \\cdot e^x, \\quad (e^{-x})^2, \\quad \\frac{e^x}{e^{-x}}, \\quad \\frac{e^{2x}}{e^{1-x}}, \\quad \\frac{(e^x)^4}{e^{2x}}. $$
                      <p>Vérifier que pour tout $x$ :</p>
                      $$ e^{2x} + e^{-2x} + 2 = (e^x+e^{-x})^2, \\quad \\frac{e^x-e^{-x}}{e^x+e^{-x}} = \\frac{e^{2x}-1}{e^{2x}+1}. $$`,
            questions: [
                {
                    id: 'ch9ex3q1',
                    texte: "Simplification des puissances.",
                    solution: `<p>$$ e^x e^{-2x} = e^{x-2x} = e^{-x}. $$</p>
                               <p>$$ e \\cdot e^x = e^{1+x}. $$</p>
                               <p>$$ (e^{-x})^2 = e^{-2x}. $$</p>
                               <p>$$ \\frac{e^x}{e^{-x}} = e^{x-(-x)} = e^{2x}. $$</p>
                               <p>$$ \\frac{e^{2x}}{e^{1-x}} = e^{2x-(1-x)} = e^{3x-1}. $$</p>
                               <p>$$ \\frac{(e^x)^4}{e^{2x}} = \\frac{e^{4x}}{e^{2x}} = e^{2x}. $$</p>`
                },
                {
                    id: 'ch9ex3q2',
                    texte: "Vérification des identités.",
                    solution: `<p><strong>Première identité :</strong></p>
                               $$ (e^x+e^{-x})^2 = e^{2x} + 2e^xe^{-x} + e^{-2x} = e^{2x} + 2 + e^{-2x}. $$
                               <p>Donc l'égalité est vraie.</p>
                               <p><strong>Deuxième identité :</strong></p>
                               $$ \\frac{e^x-e^{-x}}{e^x+e^{-x}} = \\frac{(e^x-e^{-x})e^x}{(e^x+e^{-x})e^x} = \\frac{e^{2x}-1}{e^{2x}+1}. $$
                               <p>Donc l'égalité est vraie.</p>`
                }
            ]
        }
    );

    console.log("Partie 1 (QCM, Vrai-Faux, Exercices 1-3) – ajoutée avec succès.");
})();