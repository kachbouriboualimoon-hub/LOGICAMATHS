// data/chapitre8/part6.js – Exercices 12 et 13 (Études de fonctions avec ln)
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
        // EXERCICE 12 – Études de fonctions
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Étudier, dans chacun des cas ci-dessous, $f$ et tracer sa courbe dans un repère orthogonal.</p>
                      <ol>
                        <li>$f(x) = (\\ln x)^2$</li>
                        <li>$f(x) = \\dfrac{1}{\\ln x}$</li>
                        <li>$f(x) = \\ln(\\sqrt{x})$</li>
                        <li>$f(x) = \\ln|x^2-1|$</li>
                      </ol>`,
            questions: [
                // ======================================================================
                // 1. f(x) = (ln x)²
                // ======================================================================
                {
                    id: 'ch8ex12q1',
                    texte: "1. $f(x) = (\\ln x)^2$",
                    solution: `<p><strong>1. Domaine de définition</strong></p>
                               <p>$\\ln x$ est défini pour $x>0$. Donc <strong>$D_f = ]0,+\\infty[$</strong>.</p>
                               <p><strong>2. Dérivabilité et dérivée</strong></p>
                               <p>$f$ est dérivable sur $]0,+\\infty[$ comme composée de fonctions dérivables.</p>
                               $$ f'(x) = 2\\ln x \\cdot \\dfrac{1}{x} = \\dfrac{2\\ln x}{x}. $$
                               <p><strong>3. Branches infinies</strong></p>
                               <ul>
                                 <li><strong>En $0^+$ :</strong> $\\ln x \\to -\\infty$, donc $(\\ln x)^2 \\to +\\infty$.</li>
                                 <li><strong>En $+\\infty$ :</strong> $(\\ln x)^2 \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} = \\dfrac{(\\ln x)^2}{x} \\to 0$. Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                               </ul>
                               <p><strong>4. Variations</strong></p>
                               <p>$f'(x) = \\dfrac{2\\ln x}{x}$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $\\ln x < 0$ ⇒ $f'(x) < 0$ ⇒ $f$ décroissante.</li>
                                 <li>Sur $]1,+\\infty[$, $\\ln x > 0$ ⇒ $f'(x) > 0$ ⇒ $f$ croissante.</li>
                               </ul>
                               <p>$f(1)=0$ est un minimum.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <div id="graph-ch8ex12q1" class="graph-container" data-fn="(log(x))^2" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                // ======================================================================
                // 2. f(x) = 1/ln x
                // ======================================================================
                {
                    id: 'ch8ex12q2',
                    texte: "2. $f(x) = \\dfrac{1}{\\ln x}$",
                    solution: `<p><strong>1. Domaine de définition</strong></p>
                               <p>$\\ln x$ est défini pour $x>0$ et doit être non nul : $\\ln x \\neq 0$ ⇒ $x \\neq 1$.</p>
                               <p><strong>$D_f = ]0,1[ \\cup ]1,+\\infty[$</strong>.</p>
                               <p><strong>2. Dérivabilité et dérivée</strong></p>
                               <p>Sur chaque intervalle de $D_f$, $f$ est dérivable comme quotient de fonctions dérivables.</p>
                               $$ f'(x) = -\\dfrac{1}{(\\ln x)^2} \\cdot \\dfrac{1}{x} = -\\dfrac{1}{x(\\ln x)^2}. $$
                               <p><strong>3. Branches infinies</strong></p>
                               <ul>
                                 <li><strong>En $0^+$ :</strong> $\\ln x \\to -\\infty$ ⇒ $f(x) \\to 0^-$.</li>
                                 <li><strong>En $1^-$ :</strong> $\\ln x \\to 0^-$ ⇒ $f(x) \\to -\\infty$ (asymptote verticale $x=1$).</li>
                                 <li><strong>En $1^+$ :</strong> $\\ln x \\to 0^+$ ⇒ $f(x) \\to +\\infty$ (asymptote verticale $x=1$).</li>
                                 <li><strong>En $+\\infty$ :</strong> $\\ln x \\to +\\infty$ ⇒ $f(x) \\to 0^+$ (asymptote horizontale $y=0$).</li>
                               </ul>
                               <p><strong>4. Variations</strong></p>
                               <p>$f'(x) = -\\dfrac{1}{x(\\ln x)^2} < 0$ sur chaque intervalle.</p>
                               <p><strong>$f$ est strictement décroissante sur $]0,1[$ et sur $]1,+\\infty[$.</strong></p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0^-$</td><td>$\\searrow$</td><td>$-\\infty$</td><td>$+\\infty$</td><td>$\\searrow$</td><td>$0^+$</td></tr>
                               </table>
                               <div id="graph-ch8ex12q2" class="graph-container" data-fn="1/log(x)" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                // ======================================================================
                // 3. f(x) = ln(√x)
                // ======================================================================
                {
                    id: 'ch8ex12q3',
                    texte: "3. $f(x) = \\ln(\\sqrt{x})$",
                    solution: `<p><strong>1. Domaine de définition</strong></p>
                               <p>$\\sqrt{x}$ est défini pour $x>0$. Donc <strong>$D_f = ]0,+\\infty[$</strong>.</p>
                               <p><strong>2. Simplification</strong></p>
                               $$ f(x) = \\ln(\\sqrt{x}) = \\ln(x^{1/2}) = \\dfrac{1}{2}\\ln x. $$
                               <p><strong>3. Dérivabilité et dérivée</strong></p>
                               <p>$f$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ f'(x) = \\dfrac{1}{2x}. $$
                               <p><strong>4. Branches infinies</strong></p>
                               <ul>
                                 <li><strong>En $0^+$ :</strong> $\\dfrac{1}{2}\\ln x \\to -\\infty$.</li>
                                 <li><strong>En $+\\infty$ :</strong> $\\dfrac{1}{2}\\ln x \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} = \\dfrac{\\ln x}{2x} \\to 0$. Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                               </ul>
                               <p><strong>5. Variations</strong></p>
                               <p>$f'(x) = \\dfrac{1}{2x} > 0$ sur $]0,+\\infty[$.</p>
                               <p><strong>$f$ est strictement croissante sur $]0,+\\infty[$.</strong></p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <div id="graph-ch8ex12q3" class="graph-container" data-fn="0.5*log(x)" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                // ======================================================================
                // 4. f(x) = ln|x²-1|
                // ======================================================================
                {
                    id: 'ch8ex12q4',
                    texte: "4. $f(x) = \\ln|x^2-1|$",
                    solution: `<p><strong>1. Domaine de définition</strong></p>
                               <p>On doit avoir $|x^2-1| > 0$ ⇒ $x^2-1 \\neq 0$ ⇒ $x \\neq \\pm1$.</p>
                               <p><strong>$D_f = \\mathbb{R} \\setminus \\{-1,1\\}$</strong>.</p>
                               <p><strong>2. Parité</strong></p>
                               <p>$f(-x) = \\ln|(-x)^2-1| = \\ln|x^2-1| = f(x)$. Donc <strong>$f$ est paire</strong>.</p>
                               <p><strong>3. Dérivabilité et dérivée</strong></p>
                               <p>$f$ est dérivable sur chaque intervalle de $D_f$.</p>
                               <p>Pour $x\\in\\mathbb{R}\\setminus\\{\\pm1\\}$ :</p>
                               $$ f'(x) = \\dfrac{2x}{x^2-1}. $$
                               <p><strong>4. Branches infinies</strong></p>
                               <ul>
                                 <li><strong>En $-1^-$ :</strong> $|x^2-1| \\to 0^+$ ⇒ $f(x) \\to -\\infty$ (asymptote verticale $x=-1$).</li>
                                 <li><strong>En $-1^+$ :</strong> $|x^2-1| \\to 0^+$ ⇒ $f(x) \\to -\\infty$ (asymptote verticale $x=-1$).</li>
                                 <li><strong>En $1^-$ :</strong> $|x^2-1| \\to 0^+$ ⇒ $f(x) \\to -\\infty$ (asymptote verticale $x=1$).</li>
                                 <li><strong>En $1^+$ :</strong> $|x^2-1| \\to 0^+$ ⇒ $f(x) \\to -\\infty$ (asymptote verticale $x=1$).</li>
                                 <li><strong>En $\\pm\\infty$ :</strong> $|x^2-1| \\sim x^2$, donc $f(x) \\sim 2\\ln|x| \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} \\sim \\dfrac{2\\ln|x|}{x} \\to 0$. Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                               </ul>
                               <p><strong>5. Variations</strong></p>
                               <p>$f'(x) = \\dfrac{2x}{x^2-1}$.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td>$+$</td><td>$0$</td><td>$-$</td><td>$\nparallel$</td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$-\\infty$</td><td>$\\nearrow$</td><td>$0$</td><td>$\\searrow$</td><td>$-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <p>$f(0)=0$.</p>
                               <div id="graph-ch8ex12q4" class="graph-container" data-fn="log(abs(x*x-1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13 – Fonction f(x) = (ln x - 2)/(ln x - 1) sur ]0,e[
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit la fonction $f$ définie sur $]0,e[$ par $f(x) = \\dfrac{\\ln x - 2}{\\ln x - 1}$.</p>
                      <ol>
                        <li>Étudier les variations de $f$ et tracer sa courbe $C$ dans un repère orthonormé.</li>
                        <li>Montrer que $f$ est une bijection de $]0,e[$ sur $]1,+\\infty[$.</li>
                        <li>a. Tracer la courbe de $f^{-1}$ dans le même repère.</li>
                        <li>b. Calculer $f^{-1}(2)$ et en déduire $(f^{-1})'(2)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex13q1',
                    texte: "1. Variations et courbe de $f$.",
                    solution: `<p><strong>1. Domaine de définition</strong></p>
                               <p>$\\ln x$ est défini pour $x>0$ et doit être $\\neq1$ : $\\ln x \\neq 1$ ⇒ $x \\neq e$.</p>
                               <p>Sur $]0,e[$, $x\\neq e$, donc <strong>$D_f = ]0,e[$</strong>.</p>
                               <p><strong>2. Dérivabilité et dérivée</strong></p>
                               <p>$f$ est dérivable sur $]0,e[$ (quotient de fonctions dérivables).</p>
                               $$ f'(x) = \\dfrac{\\frac{1}{x}(\\ln x - 1) - (\\ln x - 2)\\frac{1}{x}}{(\\ln x - 1)^2} = \\dfrac{\\ln x - 1 - \\ln x + 2}{x(\\ln x - 1)^2} = \\dfrac{1}{x(\\ln x - 1)^2}. $$
                               <p><strong>3. Variations</strong></p>
                               <p>$f'(x) > 0$ pour tout $x\\in]0,e[$. Donc <strong>$f$ est strictement croissante sur $]0,e[$</strong>.</p>
                               <p><strong>4. Limites aux bornes</strong></p>
                               <ul>
                                 <li><strong>En $0^+$ :</strong> $\\ln x \\to -\\infty$ ⇒ $\\dfrac{\\ln x - 2}{\\ln x - 1} \\to 1$ (car $\\ln x$ domine).</li>
                                 <li><strong>En $e^-$ :</strong> $\\ln x \\to 1^-$ ⇒ $\\ln x - 1 \\to 0^-$, $\\ln x - 2 \\to -1$ ⇒ $f(x) \\to +\\infty$.</li>
                               </ul>
                               <p><strong>Asymptotes :</strong> $y=1$ est asymptote horizontale en $0^+$ ; $x=e$ est asymptote verticale.</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$e$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$\nparallel$</td></tr>
                                 <tr><th>$f(x)$</th><td>$1$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                               </table>
                               <div id="graph-ch8ex13q1" class="graph-container" data-fn="(log(x)-2)/(log(x)-1)" data-xmin="0" data-xmax="3" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch8ex13q2',
                    texte: "2. Bijection de $f$.",
                    solution: `<p>$f$ est continue et strictement croissante sur $]0,e[$.</p>
                               <p>$f(]0,e[) = \\left]\\lim_{x\\to0^+} f(x), \\lim_{x\\to e^-} f(x)\\right[ = ]1, +\\infty[$.</p>
                               <p><strong>Donc $f$ réalise une bijection de $]0,e[$ sur $]1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch8ex13q3',
                    texte: "3.a. Tracé de $f^{-1}$.",
                    solution: `<p>La courbe de $f^{-1}$ est la symétrique de $C$ par rapport à la droite $y=x$.</p>`
                },
                {
                    id: 'ch8ex13q4',
                    texte: "3.b. Calcul de $f^{-1}(2)$ et de sa dérivée.",
                    solution: `<p>On résout $f(x)=2$ :</p>
                               $$ \\dfrac{\\ln x - 2}{\\ln x - 1} = 2 \\iff \\ln x - 2 = 2\\ln x - 2 \\iff -\\ln x = 0 \\iff \\ln x = 0 \\iff x = 1. $$
                               <p>Donc <strong>$f^{-1}(2) = 1$</strong>.</p>
                               <p>Pour la dérivée de $f^{-1}$ en $2$ :</p>
                               $$ (f^{-1})'(2) = \\dfrac{1}{f'(f^{-1}(2))} = \\dfrac{1}{f'(1)}. $$
                               <p>On a $f'(x) = \\dfrac{1}{x(\\ln x - 1)^2}$.</p>
                               <p>$f'(1) = \\dfrac{1}{1\\cdot(0-1)^2} = 1$.</p>
                               <p>Donc <strong>$(f^{-1})'(2) = 1$</strong>.</p>`
                }
            ]
        }
    );

    console.log("Partie 6 (exercices 12 et 13) – Études de fonctions – ajoutée avec succès.");
})();