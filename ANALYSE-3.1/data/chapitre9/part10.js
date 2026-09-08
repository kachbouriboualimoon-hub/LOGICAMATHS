// data/chapitre9/part10.js – Exercices 18 et 19 (Comparaison x² et 2^x, fonction impaire)
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
        // EXERCICE 18 – Comparaison de x² et 2^x
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Soit $f$ la fonction définie sur $]0, +\\infty[$ par $f(x) = \\ln(2^x) - \\ln(x^2)$.</p>
                      <ol>
                        <li>Calculer $f(2)$ et $f(4)$.</li>
                        <li>Étudier les variations de la fonction $f$ et en déduire son signe.</li>
                        <li>Comparer $x^2$ et $2^x$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex18q1',
                    texte: "1. Calcul de $f(2)$ et $f(4)$.",
                    solution: `<p>On simplifie $f(x)$ :</p>
                               $$ f(x) = \\ln(2^x) - \\ln(x^2) = x\\ln 2 - 2\\ln x. $$
                               <p>$f(2) = 2\\ln 2 - 2\\ln 2 = 0$.</p>
                               <p>$f(4) = 4\\ln 2 - 2\\ln 4 = 4\\ln 2 - 4\\ln 2 = 0$.</p>
                               <p><strong>$f(2) = 0$, $f(4) = 0$.</strong></p>`
                },
                {
                    id: 'ch9ex18q2',
                    texte: "2. Variations et signe de $f$.",
                    solution: `<p>$$ f'(x) = \\ln 2 - \\dfrac{2}{x}. $$</p>
                               <p>$f'(x) = 0$ ⇔ $\\ln 2 = \\dfrac{2}{x}$ ⇔ $x = \\dfrac{2}{\\ln 2}$.</p>
                               <ul>
                                 <li>Sur $]0, \\frac{2}{\\ln 2}[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]\\frac{2}{\\ln 2}, +\\infty[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x_0 = \\dfrac{2}{\\ln 2}$.</p>
                               <p>$f(x_0) = \\dfrac{2}{\\ln 2}\\ln 2 - 2\\ln\\left(\\dfrac{2}{\\ln 2}\\right) = 2 - 2\\ln\\left(\\dfrac{2}{\\ln 2}\\right)$.</p>
                               <p>Comme $\\ln 2 \\approx 0.693$, $\\dfrac{2}{\\ln 2} \\approx 2.885$.</p>
                               <p>$\\ln(2.885) \\approx 1.059$ > 0, donc $f(x_0) < 0$.</p>
                               <p>Donc $f$ est négative entre 2 et 4, positive ailleurs.</p>
                               <p><strong>Signe :</strong></p>
                               <ul>
                                 <li>$f(x) < 0$ sur $]2,4[$.</li>
                                 <li>$f(x) > 0$ sur $]0,2[ \\cup ]4,+\\infty[$.</li>
                               </ul>`
                },
                {
                    id: 'ch9ex18q3',
                    texte: "3. Comparaison de $x^2$ et $2^x$.",
                    solution: `<p>On a $f(x) = \\ln\\left(\\dfrac{2^x}{x^2}\\right)$.</p>
                               <p>Le signe de $f$ donne la comparaison :</p>
                               <ul>
                                 <li>$f(x) > 0$ ⇒ $\\dfrac{2^x}{x^2} > 1$ ⇒ <strong>$2^x > x^2$</strong>.</li>
                                 <li>$f(x) < 0$ ⇒ $\\dfrac{2^x}{x^2} < 1$ ⇒ <strong>$2^x < x^2$</strong>.</li>
                               </ul>
                               <p><strong>Conclusion :</strong></p>
                               <ul>
                                 <li>Pour $0 < x < 2$ et pour $x > 4$, on a $2^x > x^2$.</li>
                                 <li>Pour $2 < x < 4$, on a $2^x < x^2$.</li>
                                 <li>En $x=2$ et $x=4$, on a égalité.</li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19 – Fonction impaire avec puissances de 4
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par $f(x) = \\dfrac{4^x}{4^{2x}-1}$.</p>
                      <ol>
                        <li>Montrer que $f$ est impaire.</li>
                        <li>Étudier les variations de $f$ sur $]0, +\\infty[$.</li>
                        <li>
                          <ol>
                            <li>Résoudre dans $\\mathbb{R}$ l'équation $f(x) = \\dfrac{4}{15}$.</li>
                            <li>En déduire les solutions dans $\\mathbb{R}$ de l'équation $f(x) = -\\dfrac{4}{15}$.</li>
                          </ol>
                        </li>
                      </ol>`,
            questions: [
                {
                    id: 'ch9ex19q1',
                    texte: "1. $f$ est impaire.",
                    solution: `<p><strong>Méthode :</strong> On doit montrer que $f(-x) = -f(x)$.</p>
                               $$ f(-x) = \\dfrac{4^{-x}}{4^{-2x}-1} = \\dfrac{\\frac{1}{4^x}}{\\frac{1}{4^{2x}} - 1} = \\dfrac{\\frac{1}{4^x}}{\\frac{1 - 4^{2x}}{4^{2x}}} = \\dfrac{4^{2x}}{4^x(1 - 4^{2x})} = \\dfrac{4^x}{1 - 4^{2x}} = -\\dfrac{4^x}{4^{2x}-1} = -f(x). $$
                               <p><strong>$f$ est impaire.</strong></p>`
                },
                {
                    id: 'ch9ex19q2',
                    texte: "2. Variations de $f$ sur $]0, +\\infty[$.",
                    solution: `<p>Sur $]0,+\\infty[$, $4^{2x}-1 > 0$, donc $f$ est définie.</p>
                               <p>On pose $t = 4^x = e^{x\\ln 4} > 1$. Alors $f(x) = \\dfrac{t}{t^2-1}$.</p>
                               <p>Dérivons par rapport à $t$ : $\\dfrac{d}{dt}\\left(\\dfrac{t}{t^2-1}\\right) = \\dfrac{t^2-1 - t\\cdot 2t}{(t^2-1)^2} = \\dfrac{-t^2-1}{(t^2-1)^2} < 0$.</p>
                               <p>Comme $t=4^x$ est croissante en $x$, et $\\dfrac{t}{t^2-1}$ est décroissante en $t$, $f$ est décroissante en $x$.</p>
                               <p><strong>$f$ est strictement décroissante sur $]0,+\\infty[$.</strong></p>
                               <p>Limites :</p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} f(x) = \\lim_{t\\to1^+} \\dfrac{t}{t^2-1} = +\\infty$.</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = \\lim_{t\\to+\\infty} \\dfrac{t}{t^2-1} = 0$.</li>
                               </ul>`
                },
                {
                    id: 'ch9ex19q3',
                    texte: "3.a. Résoudre $f(x) = \\dfrac{4}{15}$.",
                    solution: `<p>$$ \\dfrac{4^x}{4^{2x}-1} = \\dfrac{4}{15}. $$</p>
                               <p>Posons $t = 4^x > 0$.</p>
                               $$ \\dfrac{t}{t^2-1} = \\dfrac{4}{15} \\iff 15t = 4(t^2-1) \\iff 4t^2 - 15t - 4 = 0. $$
                               <p>Discriminant : $\\Delta = 225 + 64 = 289 = 17^2$.</p>
                               $$ t = \\dfrac{15 \\pm 17}{8}. $$
                               <p>Les solutions sont $t = \\dfrac{32}{8} = 4$ ou $t = \\dfrac{-2}{8} = -\\dfrac{1}{4}$ (à rejeter car $t>0$).</p>
                               <p>Donc $t=4$ ⇒ $4^x = 4$ ⇒ $x=1$.</p>
                               <p><strong>$\\mathcal{S} = \\{1\\}$.</strong></p>`
                },
                {
                    id: 'ch9ex19q4',
                    texte: "3.b. Résoudre $f(x) = -\\dfrac{4}{15}$.",
                    solution: `<p>Comme $f$ est impaire, $f(x) = -\\dfrac{4}{15}$ ⇔ $f(-x) = \\dfrac{4}{15}$.</p>
                               <p>D'après la question précédente, $f(-x) = \\dfrac{4}{15}$ ⇔ $-x = 1$ ⇔ $x = -1$.</p>
                               <p><strong>$\\mathcal{S} = \\{-1\\}$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 10 (exercices 18 et 19) – Comparaison et fonction impaire – ajoutée avec succès.");
})();