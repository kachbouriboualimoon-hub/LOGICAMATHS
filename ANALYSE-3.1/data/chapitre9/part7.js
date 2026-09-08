// data/chapitre9/part7.js – Exercices 12 et 13 (Étude de fonctions, asymptotes)
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
        // EXERCICE 12 – f(x) = x - 1/(1+e^x), asymptotes
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x - \\dfrac{1}{1+e^x}$ et $C$ sa courbe représentative.</p>
                      <ol>
                        <li>
                          <ol>
                            <li>Vérifier que pour tout réel $x$, $f'(x) > 0$.</li>
                            <li>Dresser le tableau de variation de $f$.</li>
                          </ol>
                        </li>
                        <li>
                          <ol>
                            <li>Montrer que les droites $\\Delta_1 : y = x$ et $\\Delta_2 : y = x-1$ sont asymptotes à $C$.</li>
                            <li>Préciser les positions relatives de $C$ et de ses asymptotes.</li>
                          </ol>
                        </li>
                        <li>Tracer $C$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex12q1',
                    texte: "1.a. $f'(x) > 0$.",
                    solution: `<p><strong>Méthode :</strong> On calcule la dérivée en utilisant la formule de dérivation.</p>
                               $$ f'(x) = 1 - \\dfrac{(-1)(1+e^x)'}{(1+e^x)^2} = 1 + \\dfrac{e^x}{(1+e^x)^2}. $$
                               <p>Le numérateur $e^x$ est strictement positif pour tout $x$, et le dénominateur $(1+e^x)^2$ est un carré strictement positif.</p>
                               <p>Donc $\\dfrac{e^x}{(1+e^x)^2} > 0$, et ainsi <strong>$f'(x) > 0$</strong> pour tout $x\\in\\mathbb{R}$.</p>`
                },
                {
                    id: 'ch9ex12q2',
                    texte: "1.b. Tableau de variation.",
                    solution: `<p>On a $f'(x)>0$ pour tout $x$, donc <strong>$f$ est strictement croissante sur $\\mathbb{R}$</strong>.</p>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to-\\infty} e^x = 0$ ⇒ $\\dfrac{1}{1+e^x} \\to \\dfrac{1}{1} = 1$.</li>
                                 <li>Donc $\\lim_{x\\to-\\infty} f(x) = -\\infty - 1 = -\\infty$.</li>
                                 <li>$\\lim_{x\\to+\\infty} e^x = +\\infty$ ⇒ $\\dfrac{1}{1+e^x} \\to 0$.</li>
                                 <li>Donc $\\lim_{x\\to+\\infty} f(x) = +\\infty - 0 = +\\infty$.</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch9ex12q3',
                    texte: "2.a. Asymptotes $\\Delta_1:y=x$ et $\\Delta_2:y=x-1$.",
                    solution: `<p><strong>Pour $\\Delta_1:y=x$ :</strong></p>
                               $$ f(x) - x = -\\dfrac{1}{1+e^x}. $$
                               <p>Quand $x\\to+\\infty$, $-\\dfrac{1}{1+e^x} \\to 0$.</p>
                               <p><strong>$\\Delta_1:y=x$ est asymptote en $+\\infty$.</strong></p>
                               <p><strong>Pour $\\Delta_2:y=x-1$ :</strong></p>
                               $$ f(x) - (x-1) = 1 - \\dfrac{1}{1+e^x} = \\dfrac{e^x}{1+e^x}. $$
                               <p>Quand $x\\to-\\infty$, $\\dfrac{e^x}{1+e^x} \\to 0$.</p>
                               <p><strong>$\\Delta_2:y=x-1$ est asymptote en $-\\infty$.</strong></p>`
                },
                {
                    id: 'ch9ex12q4',
                    texte: "2.b. Positions relatives.",
                    solution: `<p><strong>Par rapport à $\\Delta_1:y=x$ :</strong></p>
                               $$ f(x) - x = -\\dfrac{1}{1+e^x} < 0 \\quad \\text{pour tout } x. $$
                               <p><strong>$C$ est toujours en dessous de $\\Delta_1$.</strong></p>
                               <p><strong>Par rapport à $\\Delta_2:y=x-1$ :</strong></p>
                               $$ f(x) - (x-1) = \\dfrac{e^x}{1+e^x} > 0 \\quad \\text{pour tout } x. $$
                               <p><strong>$C$ est toujours au-dessus de $\\Delta_2$.</strong></p>`
                },
                {
                    id: 'ch9ex12q5',
                    texte: "3. Tracé de $C$.",
                    solution: `<p>La courbe $C$ est croissante de $-\\infty$ à $+\\infty$, comprise entre les deux asymptotes obliques $\\Delta_1$ et $\\Delta_2$.</p>
                               <div id="graph-ch9ex12" class="graph-container" data-fn="x-1/(1+exp(x))" data-xmin="-4" data-xmax="4" data-colors="#2563eb,#dc2626,#0891b2" data-fn2="x" data-fn3="x-1"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13 – f(x) = (2+e^x)/(1+e^x), intégrale
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\dfrac{2+e^x}{1+e^x}$.</p>
                      <ol>
                        <li>Vérifier que pour tout réel $x$, $f(x) = 2 - \\dfrac{e^x}{1+e^x}$.</li>
                        <li>Calculer $\\displaystyle\\int_0^1 \\frac{2+e^x}{1+e^x}\\,dx$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex13q1',
                    texte: "1. Vérification de l'identité.",
                    solution: `<p>$$ 2 - \\dfrac{e^x}{1+e^x} = \\dfrac{2(1+e^x) - e^x}{1+e^x} = \\dfrac{2 + 2e^x - e^x}{1+e^x} = \\dfrac{2+e^x}{1+e^x} = f(x). $$</p>
                               <p><strong>L'identité est vérifiée.</strong></p>`
                },
                {
                    id: 'ch9ex13q2',
                    texte: "2. Calcul de l'intégrale.",
                    solution: `<p>On utilise la forme simplifiée :</p>
                               $$ \\int_0^1 \\dfrac{2+e^x}{1+e^x}\\,dx = \\int_0^1 \\left(2 - \\dfrac{e^x}{1+e^x}\\right) dx. $$
                               <p>On reconnaît $\\dfrac{e^x}{1+e^x}$ comme $\\dfrac{u'}{u}$ avec $u=1+e^x$.</p>
                               $$ \\int_0^1 2\\,dx = 2. $$
                               $$ \\int_0^1 \\dfrac{e^x}{1+e^x}\\,dx = [\\ln(1+e^x)]_0^1 = \\ln(1+e) - \\ln 2 = \\ln\\left(\\dfrac{1+e}{2}\\right). $$
                               <p>Donc l'intégrale vaut $2 - \\ln\\left(\\dfrac{1+e}{2}\\right)$.</p>
                               <p><strong>$\\boxed{2 - \\ln\\left(\\dfrac{1+e}{2}\\right)}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 7 (exercices 12 et 13) – Études de fonctions et asymptotes – ajoutée avec succès.");
})();