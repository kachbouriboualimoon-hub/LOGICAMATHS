// data/chapitre6/part1.js – Exercices 1 à 5 (QCM et Vrai-Faux)
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
        // EXERCICE 1 – QCM
        // ======================================================================
        {
            numero: 1,
            enonce: `<p><strong>QCM :</strong> Cocher la réponse exacte.</p>
                      <ol>
                        <li>La fonction $x\\mapsto\\tan x$ est la primitive sur $]-\\frac{\\pi}{2},\\frac{\\pi}{2}[$ qui s'annule en 0 de la fonction :<br>
                        a) $x\\mapsto 1+\\tan^2 x$ &nbsp;&nbsp; b) $x\\mapsto \\dfrac{1}{\\cos^2 x}$ &nbsp;&nbsp; c) $x\\mapsto \\dfrac{1}{\\sin^2 x}$</li>
                        <li>La primitive sur $\\mathbb{R}$ de $x\\mapsto\\sin x$ qui s'annule en 0 est :<br>
                        a) $x\\mapsto 1-\\cos x$ &nbsp;&nbsp; b) $x\\mapsto -\\cos x$ &nbsp;&nbsp; c) $x\\mapsto \\cos x - 1$</li>
                        <li>La primitive sur $\\mathbb{R}$ qui s'annule en 0 de $x\\mapsto 1+\\cos x$ est :<br>
                        a) paire &nbsp;&nbsp; b) impaire &nbsp;&nbsp; c) ni paire ni impaire</li>
                        <li>La primitive sur $]-\\infty,1[$ de $x\\mapsto \\dfrac{1}{(1-x)^4}$ qui s'annule en 0 est :<br>
                        a) $x\\mapsto \\dfrac{1}{3(1-x)^3} - \\dfrac{1}{3}$ &nbsp;&nbsp; b) $x\\mapsto \\dfrac{1}{3(1-x)^3}$ &nbsp;&nbsp; c) $x\\mapsto -\\dfrac{1}{3(1-x)^3} + \\dfrac{1}{3}$</li>
                        <li>La primitive sur $\\mathbb{R}$ de $x\\mapsto x\\cos x$ qui prend la valeur 1 en 0 est :<br>
                        a) $x\\mapsto x\\sin x + \\cos x$ &nbsp;&nbsp; b) $x\\mapsto \\cos x - x\\sin x$ &nbsp;&nbsp; c) $x\\mapsto \\dfrac{x^2}{2}\\sin x + 1$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex1q1',
                    texte: "1. Réponse :",
                    solution: `<p><strong>Réponse a)</strong> $x\\mapsto 1+\\tan^2 x$.</p>
                               <p>En effet, $(\\tan x)' = 1+\\tan^2 x = \\dfrac{1}{\\cos^2 x}$. Les deux réponses a) et b) sont équivalentes car $1+\\tan^2 x = \\dfrac{1}{\\cos^2 x}$.</p>`
                },
                {
                    id: 'ch6ex1q2',
                    texte: "2. Réponse :",
                    solution: `<p><strong>Réponse a)</strong> $x\\mapsto 1-\\cos x$.</p>
                               <p>En effet, $(1-\\cos x)' = \\sin x$. Cette primitive s'annule en 0 car $1-\\cos 0 = 1-1=0$.</p>`
                },
                {
                    id: 'ch6ex1q3',
                    texte: "3. Réponse :",
                    solution: `<p><strong>Réponse a)</strong> paire.</p>
                               <p>$\\int (1+\\cos x) dx = x + \\sin x + C$. Celle qui s'annule en 0 est $F(x)=x+\\sin x$.</p>
                               <p>$F(-x) = -x + \\sin(-x) = -x - \\sin x = -(x+\\sin x) = -F(x)$.</p>
                               <p>Donc $F$ est impaire.</p>`
                },
                {
                    id: 'ch6ex1q4',
                    texte: "4. Réponse :",
                    solution: `<p><strong>Réponse a)</strong> $x\\mapsto \\dfrac{1}{3(1-x)^3} - \\dfrac{1}{3}$.</p>
                               <p>Posons $u(x)=1-x$, $u'(x)=-1$. $\\dfrac{1}{(1-x)^4} = u^{-4}$.</p>
                               <p>On cherche une primitive de la forme $\\dfrac{u^{-3}}{3} + C = \\dfrac{1}{3(1-x)^3} + C$.</p>
                               <p>Pour s'annuler en 0 : $\\dfrac{1}{3} + C = 0$ ⇒ $C = -\\dfrac{1}{3}$.</p>`
                },
                {
                    id: 'ch6ex1q5',
                    texte: "5. Réponse :",
                    solution: `<p><strong>Réponse a)</strong> $x\\mapsto x\\sin x + \\cos x$.</p>
                               <p>Vérifions : $(x\\sin x + \\cos x)' = \\sin x + x\\cos x - \\sin x = x\\cos x$.</p>
                               <p>Valeur en 0 : $0\\cdot\\sin 0 + \\cos 0 = 1$.</p>`
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
                        <li>La primitive sur $\\mathbb{R}$ d'une fonction continue est une fonction continue sur $\\mathbb{R}$.</li>
                        <li>La fonction $f(x)=x^2\\sin\\left(\\frac{1}{x}\\right)$ (avec $f(0)=0$) est une primitive sur $\\mathbb{R}$ de $g(x)=2x\\sin\\left(\\frac{1}{x}\\right)-\\cos\\left(\\frac{1}{x}\\right)$ (avec $g(0)=0$).</li>
                        <li>Si $F$ est une primitive de $f$ sur $\\mathbb{R}$ et $G$ une primitive de $g$ sur $\\mathbb{R}$, alors $F\\cdot G$ est une primitive de $f\\cdot g$.</li>
                        <li>Si $F$ est une primitive de $f$ sur $\\mathbb{R}$, alors $x\\mapsto F(2x)$ est une primitive de $x\\mapsto f(2x)$.</li>
                        <li>Si deux primitives d'une fonction $f$ sur un intervalle $I$ coïncident en un réel $x_0\\in I$, alors elles sont égales.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex2q1',
                    texte: "1. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>Une primitive d'une fonction continue est dérivable, donc continue.</p>`
                },
                {
                    id: 'ch6ex2q2',
                    texte: "2. Vrai ou faux ?",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>La dérivée de $f$ est $f'(x)=2x\\sin\\left(\\frac{1}{x}\\right)-\\cos\\left(\\frac{1}{x}\\right)$ pour $x\\neq0$.</p>
                               <p>Mais en $0$, $f$ n'est pas dérivable car le taux d'accroissement n'a pas de limite.</p>`
                },
                {
                    id: 'ch6ex2q3',
                    texte: "3. Vrai ou faux ?",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>$(F\\cdot G)' = F'G + FG' = fG + Fg$, pas $fg$ en général.</p>`
                },
                {
                    id: 'ch6ex2q4',
                    texte: "4. Vrai ou faux ?",
                    solution: `<p><strong>Faux.</strong></p>
                               <p>Soit $H(x)=F(2x)$. Alors $H'(x)=2F'(2x)=2f(2x)$, pas $f(2x)$.</p>`
                },
                {
                    id: 'ch6ex2q5',
                    texte: "5. Vrai ou faux ?",
                    solution: `<p><strong>Vrai.</strong></p>
                               <p>Si $F$ et $G$ sont deux primitives de $f$, alors $F-G$ est constante. Si $F(x_0)=G(x_0)$, la constante est nulle, donc $F=G$ sur tout $I$.</p>`
                }
            ]
        }
    );

    console.log("Partie 1 (exercices 1 à 2) – QCM et Vrai-Faux – ajoutée avec succès.");
})();