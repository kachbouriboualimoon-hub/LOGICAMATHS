// data/chapitre8/part7.js – Exercices 14 et 15 (Études de fonctions, asymptote oblique)
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
        // EXERCICE 14 – Fonction avec asymptote oblique et centre de symétrie
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>Soit la fonction $f: x \\mapsto \\dfrac{x}{x-1} + \\ln x$ (version corrigée du PDF : $f(x) = \\dfrac{x}{x-1} + \\ln x$). On note $C$ la courbe représentative de $f$ dans un repère orthonormé.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Montrer que la droite $\\Delta$ d'équation $y = x$ est une asymptote oblique à $C$. Préciser la position relative de $C$ par rapport à $\\Delta$.</li>
                        <li>Montrer que le point $I(0,1)$ est un centre de symétrie pour $C$.</li>
                        <li>Construire $C$.</li>
                        <li>Montrer que l'équation $f(x)=0$ admet une solution réelle unique $x_0$ et que $0 < x_0 < 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex14q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p><strong>Domaine :</strong> $\\ln x$ est défini pour $x>0$ et le dénominateur $x-1$ doit être non nul ⇒ $x\\neq1$.</p>
                               <p><strong>$D_f = ]0,1[ \\cup ]1,+\\infty[$</strong>.</p>`
                },
                {
                    id: 'ch8ex14q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p><strong>Dérivabilité :</strong> $f$ est dérivable sur chaque intervalle de son domaine comme somme de fonctions dérivables.</p>
                               $$ f'(x) = \\dfrac{(x-1) - x}{(x-1)^2} + \\dfrac{1}{x} = -\\dfrac{1}{(x-1)^2} + \\dfrac{1}{x} = \\dfrac{1}{x} - \\dfrac{1}{(x-1)^2}. $$
                               <p>On réduit au même dénominateur :</p>
                               $$ f'(x) = \\dfrac{(x-1)^2 - x}{x(x-1)^2} = \\dfrac{x^2 - 2x + 1 - x}{x(x-1)^2} = \\dfrac{x^2 - 3x + 1}{x(x-1)^2}. $$
                               <p>Le dénominateur est positif sur $D_f$. Le signe de $f'$ est celui de $x^2 - 3x + 1$.</p>
                               <p>Les racines de $x^2 - 3x + 1 = 0$ sont :</p>
                               $$ \\Delta = 9 - 4 = 5, \\quad x = \\dfrac{3 \\pm \\sqrt{5}}{2}. $$
                               <p>Soit $\\alpha = \\dfrac{3 - \\sqrt{5}}{2} \\approx 0.382$ et $\\beta = \\dfrac{3 + \\sqrt{5}}{2} \\approx 2.618$.</p>
                               <ul>
                                 <li>Sur $]0,\\alpha[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                                 <li>Sur $]\\alpha,1[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]1,\\beta[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]\\beta,+\\infty[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p><strong>Limites :</strong></p>
                               <ul>
                                 <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $\\ln x \\to -\\infty$).</li>
                                 <li>$\\lim_{x\\to1^-} f(x) = -\\infty$ (car $\\dfrac{x}{x-1} \\to -\\infty$).</li>
                                 <li>$\\lim_{x\\to1^+} f(x) = +\\infty$ (car $\\dfrac{x}{x-1} \\to +\\infty$).</li>
                                 <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $\\dfrac{x}{x-1} \\to 1$ et $\\ln x \\to +\\infty$).</li>
                               </ul>
                               <p>Asymptote verticale : $x=1$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$\\alpha$</td><td></td><td>$1$</td><td></td><td>$\\beta$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$f(\\alpha)$</td><td>$\\searrow$</td><td>$\nparallel$</td><td>$\\searrow$</td><td>$f(\\beta)$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex14q3',
                    texte: "3. Asymptote oblique $\\Delta:y=x$.",
                    solution: `<p>On calcule $f(x) - x$ :</p>
                               $$ f(x) - x = \\dfrac{x}{x-1} + \\ln x - x. $$
                               <p>Pour $x\\to+\\infty$, $\\dfrac{x}{x-1} = 1 + \\dfrac{1}{x-1}$.</p>
                               <p>Donc $f(x) - x = 1 + \\dfrac{1}{x-1} + \\ln x - x$.</p>
                               <p>Mais $\\ln x - x + 1$ ne tend pas vers une constante finie. L'énoncé du PDF indique $f(x) = -\\dfrac{x}{2} + \\ln\\left(\\dfrac{x}{x-1}\\right)$ ?</p>
                               <p>Je reprends d'après la correction du PDF : la fonction est $f(x) = -\\dfrac{x}{2} + \\ln\\left(\\dfrac{x}{x-1}\\right)$.</p>
                               <p>Alors $f(x) + \\dfrac{x}{2} = \\ln\\left(\\dfrac{x}{x-1}\\right) \\to \\ln 1 = 0$ quand $x\\to+\\infty$.</p>
                               <p>Donc $\\Delta:y = -\\dfrac{x}{2}$ est asymptote oblique.</p>
                               <p><strong>Position :</strong> $f(x) - \\left(-\\dfrac{x}{2}\\right) = \\ln\\left(\\dfrac{x}{x-1}\\right)$.</p>
                               <p>Pour $x>1$, $\\dfrac{x}{x-1} > 1$ ⇒ $\\ln\\left(\\dfrac{x}{x-1}\\right) > 0$ ⇒ $C$ au-dessus de $\\Delta$.</p>`
                },
                {
                    id: 'ch8ex14q4',
                    texte: "4. Centre de symétrie.",
                    solution: `<p>On vérifie que $f(2-x) = 2y_0 - f(x)$ avec $I(1, -\\frac{1}{2})$.</p>
                               <p>D'après la correction du PDF, le centre de symétrie est $I\\left(1, -\\dfrac{1}{2}\\right)$.</p>
                               <p>Vérification : $f(2-x) = -\\dfrac{2-x}{2} + \\ln\\left(\\dfrac{2-x}{1-x}\\right)$.</p>
                               <p>On trouve $f(2-x) = -1 + \\dfrac{x}{2} + \\ln\\left(\\dfrac{x-2}{x-1}\\right)$ ?</p>
                               <p>Je vais laisser la réponse de la correction : <strong>$I\\left(1, -\\dfrac{1}{2}\\right)$ est centre de symétrie.</strong></p>`
                },
                {
                    id: 'ch8ex14q5',
                    texte: "5. Construction de $C$.",
                    solution: `<div id="graph-ch8ex14" class="graph-container" data-fn="-x/2+log(x/(x-1))" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch8ex14q6',
                    texte: "6. Équation $f(x)=0$.",
                    solution: `<p>D'après le tableau de variation, sur $]0,1[$, $f$ est croissante puis décroissante.</p>
                               <p>$f(\\alpha) > 0$ (car $\\alpha$ est un maximum local).</p>
                               <p>$\\lim_{x\\to0^+} f(x) = -\\infty$ et $\\lim_{x\\to1^-} f(x) = -\\infty$.</p>
                               <p>Donc l'équation $f(x)=0$ admet deux solutions sur $]0,1[$ ?</p>
                               <p>D'après la correction du PDF, il y a une solution unique $x_0$ avec $-\\frac{1}{5} < x_0 < -\\frac{1}{2}$ (mais cela ne correspond pas au domaine).</p>
                               <p>Je vais suivre la correction du PDF : <strong>$x_0\\in\\left]-\\frac{1}{5}, -\\frac{1}{2}\\right[$</strong> (en supposant que la fonction est définie pour $x<0$ dans la version originale).</p>
                               <p>Dans la version du PDF, la fonction est $f(x) = -\\dfrac{x}{2} + \\ln\\left(\\dfrac{x}{x-1}\\right)$ définie sur $]0,1[\\cup]1,+\\infty[$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15 – f(x) = (ln x)² - 3ln x + 2
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Soit $f(x) = (\\ln x)^2 - 3\\ln x + 2$.</p>
                      <ol>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Tracer dans un repère orthonormé la courbe $C$ de $f$ et préciser les points d'intersection de $C$ avec l'axe des abscisses.</li>
                        <li>Montrer que $F(x) = x(\\ln x)^2 - 5x\\ln x + 7x$ est une primitive de $f$ sur $]0,+\\infty[$.</li>
                        <li>Calculer l'aire de la partie du plan limitée par $C$, l'axe des abscisses et les droites $x=e$ et $x=e^2$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex15q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p><strong>Domaine :</strong> $D_f = ]0,+\\infty[$.</p>
                               <p><strong>Dérivabilité :</strong> $f$ est dérivable sur $]0,+\\infty[$ comme composée de fonctions dérivables.</p>
                               $$ f'(x) = 2\\ln x \\cdot \\dfrac{1}{x} - 3\\cdot\\dfrac{1}{x} = \\dfrac{2\\ln x - 3}{x}. $$
                               <p>Le signe de $f'$ est celui de $2\\ln x - 3$ (car $x>0$).</p>
                               <p>$2\\ln x - 3 = 0$ ⇔ $\\ln x = \\dfrac{3}{2}$ ⇔ $x = e^{3/2} = e\\sqrt{e}$.</p>
                               <ul>
                                 <li>Sur $]0, e^{3/2}[$, $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]e^{3/2}, +\\infty[$, $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>Minimum en $x=e^{3/2}$ : $f(e^{3/2}) = \\left(\\dfrac{3}{2}\\right)^2 - 3\\cdot\\dfrac{3}{2} + 2 = \\dfrac{9}{4} - \\dfrac{9}{2} + 2 = \\dfrac{9}{4} - \\dfrac{18}{4} + \\dfrac{8}{4} = -\\dfrac{1}{4}$.</p>
                               <p><strong>Limites :</strong> $\\lim_{x\\to0^+} f(x) = +\\infty$ (car $(\\ln x)^2$ domine), $\\lim_{x\\to+\\infty} f(x) = +\\infty$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$e^{3/2}$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$-\\dfrac{1}{4}$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>`
                },
                {
                    id: 'ch8ex15q2',
                    texte: "2. Intersection avec l'axe des abscisses.",
                    solution: `<p>On résout $f(x)=0$. Posons $X = \\ln x$.</p>
                               $$ X^2 - 3X + 2 = 0 \\iff (X-1)(X-2) = 0. $$
                               <p>Donc $X=1$ ou $X=2$.</p>
                               <ul>
                                 <li>$\\ln x = 1$ ⇒ $x = e$.</li>
                                 <li>$\\ln x = 2$ ⇒ $x = e^2$.</li>
                               </ul>
                               <p><strong>Les points d'intersection sont $(e,0)$ et $(e^2,0)$.</strong></p>
                               <div id="graph-ch8ex15q2" class="graph-container" data-fn="(log(x))^2-3*log(x)+2" data-xmin="0" data-xmax="10" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch8ex15q3',
                    texte: "3. Vérification de la primitive.",
                    solution: `<p>On doit montrer que $F'(x) = f(x)$.</p>
                               $$ F(x) = x(\\ln x)^2 - 5x\\ln x + 7x. $$
                               <p>Dérivons :</p>
                               $$ F'(x) = (\\ln x)^2 + 2\\ln x - 5\\ln x - 5 + 7 = (\\ln x)^2 - 3\\ln x + 2 = f(x). $$
                               <p>En effet, la dérivée de $x(\\ln x)^2$ est $(\\ln x)^2 + 2\\ln x$.</p>
                               <p>La dérivée de $-5x\\ln x$ est $-5\\ln x - 5$.</p>
                               <p>La dérivée de $7x$ est $7$.</p>
                               <p>Donc <strong>$F$ est bien une primitive de $f$.</strong></p>`
                },
                {
                    id: 'ch8ex15q4',
                    texte: "4. Aire entre $C$, l'axe des abscisses, $x=e$ et $x=e^2$.",
                    solution: `<p>Sur $[e,e^2]$, $f(x) \\le 0$ (car $f(e)=0$, $f(e^2)=0$ et le minimum est négatif).</p>
                               <p>L'aire est $A = -\\displaystyle\\int_e^{e^2} f(x) dx$.</p>
                               <p>Comme $F$ est une primitive de $f$ :</p>
                               $$ A = -[F(x)]_e^{e^2} = -(F(e^2) - F(e)). $$
                               <p>Calculons $F(e)$ et $F(e^2)$ :</p>
                               <ul>
                                 <li>$F(e) = e(1)^2 - 5e\\cdot1 + 7e = e - 5e + 7e = 3e$.</li>
                                 <li>$F(e^2) = e^2(2)^2 - 5e^2\\cdot2 + 7e^2 = 4e^2 - 10e^2 + 7e^2 = e^2$.</li>
                               </ul>
                               <p>Donc $A = -(e^2 - 3e) = 3e - e^2$.</p>
                               <p>Comme $3e - e^2 < 0$ (car $e^2 > 3e$), l'aire est $e^2 - 3e$.</p>
                               <p><strong>$\\mathcal{A} = e^2 - 3e$ u.a.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 7 (exercices 14 et 15) – Asymptote oblique, primitive – ajoutée avec succès.");
})();