// data/chapitre8/part3.js – Exercice 7 (Études de fonctions avec ln)
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

    ch8.exercices.push({
        numero: 7,
        enonce: `<p>Le plan est muni d'un repère orthonormé. Pour chacun des cas ci-dessous, déterminer l'ensemble de définition de $f$, l'ensemble dans lequel elle est dérivable, calculer $f'(x)$ et représenter $f$ après avoir étudié les branches infinies de sa courbe représentative.</p>
                  <ol>
                    <li>$f(x) = \\ln\\left(\\dfrac{x-1}{x+1}\\right)$</li>
                    <li>$f(x) = \\ln(x^2 - x + 1)$</li>
                    <li>$f(x) = x\\ln x - x$</li>
                    <li>$f(x) = x^2\\ln x$</li>
                    <li>$f(x) = \\ln\\left(x + \\sqrt{x^2+1}\\right)$</li>
                    <li>$f(x) = \\ln\\left(\\dfrac{x+1}{x-1}\\right)$</li>
                  </ol>`,
        questions: [
            // ======================================================================
            // 1. f(x) = ln((x-1)/(x+1))
            // ======================================================================
            {
                id: 'ch8ex7q1',
                texte: "1. $f(x) = \\ln\\left(\\dfrac{x-1}{x+1}\\right)$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>On doit avoir $\\dfrac{x-1}{x+1} > 0$. Résolvons :</p>
                           <table class="sign-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$x-1$</th><td>$-$</td><td></td><td>$-$</td><td></td><td>$0$</td><td>$+$</td><td></td></tr>
                             <tr><th>$x+1$</th><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                             <tr><th>Quotient</th><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td></td></tr>
                           </table>
                           <p>Donc $D_f = ]-\\infty, -1[ \\cup ]1, +\\infty[$.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>La fonction $x\\mapsto \\dfrac{x-1}{x+1}$ est dérivable sur $D_f$ (quotient de fonctions dérivables dont le dénominateur ne s'annule pas). La fonction $\\ln$ est dérivable sur $]0,+\\infty[$. Par composition, $f$ est dérivable sur $D_f$.</p>
                           <p>Calcul de $f'(x)$ :</p>
                           $$ f'(x) = \\dfrac{1}{\\frac{x-1}{x+1}} \\times \\dfrac{(x+1) - (x-1)}{(x+1)^2} = \\dfrac{x+1}{x-1} \\times \\dfrac{2}{(x+1)^2} = \\dfrac{2}{(x-1)(x+1)} = \\dfrac{2}{x^2-1}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $-1$ (à gauche) :</strong> $\\dfrac{x-1}{x+1} \\to +\\infty$ donc $f(x) \\to +\\infty$ (asymptote verticale $x=-1$).</li>
                             <li><strong>En $1$ (à droite) :</strong> $\\dfrac{x-1}{x+1} \\to 0^+$ donc $f(x) \\to -\\infty$ (asymptote verticale $x=1$).</li>
                             <li><strong>En $+\\infty$ :</strong> $\\dfrac{x-1}{x+1} \\to 1$ donc $f(x) \\to \\ln 1 = 0$ (asymptote horizontale $y=0$).</li>
                             <li><strong>En $-\\infty$ :</strong> $\\dfrac{x-1}{x+1} \\to 1$ donc $f(x) \\to 0$ (asymptote horizontale $y=0$).</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\dfrac{2}{x^2-1}$.</p>
                           <ul>
                             <li>Sur $]-\\infty, -1[$, $x^2-1>0$, donc $f'(x)>0$ : $f$ est strictement croissante.</li>
                             <li>Sur $]1, +\\infty[$, $x^2-1>0$, donc $f'(x)>0$ : $f$ est strictement croissante.</li>
                           </ul>
                           <p>Tableau de variation :</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$\nparallel$</td><td></td><td>$\nparallel$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td><td>$-\\infty$</td><td>$\\nearrow$</td><td>$0$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q1" class="graph-container" data-fn="log((x-1)/(x+1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 2. f(x) = ln(x² - x + 1)
            // ======================================================================
            {
                id: 'ch8ex7q2',
                texte: "2. $f(x) = \\ln(x^2 - x + 1)$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>On doit avoir $x^2 - x + 1 > 0$. Le discriminant est $\\Delta = 1-4 = -3 <0$, et le coefficient dominant est positif. Donc $x^2 - x + 1 > 0$ pour tout $x\\in\\mathbb{R}$.</p>
                           <p><strong>$D_f = \\mathbb{R}$.</strong></p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>La fonction $x\\mapsto x^2-x+1$ est dérivable sur $\\mathbb{R}$ et strictement positive. Par composition avec $\\ln$, $f$ est dérivable sur $\\mathbb{R}$.</p>
                           $$ f'(x) = \\dfrac{2x-1}{x^2-x+1}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $+\\infty$ :</strong> $x^2 - x + 1 \\sim x^2$, donc $f(x) = \\ln(x^2-x+1) \\sim 2\\ln x \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} \\sim \\dfrac{2\\ln x}{x} \\to 0$. Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                             <li><strong>En $-\\infty$ :</strong> $x^2 - x + 1 \\sim x^2$, donc $f(x) \\sim 2\\ln|x| \\to +\\infty$. De même, $\\dfrac{f(x)}{x} \\sim \\dfrac{2\\ln|x|}{x} \\to 0$ (car $x<0$). Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong> également.</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\dfrac{2x-1}{x^2-x+1}$. Le dénominateur est toujours positif.</p>
                           <ul>
                             <li>$f'(x) = 0$ ⇔ $2x-1=0$ ⇔ $x=\\dfrac{1}{2}$.</li>
                             <li>Sur $]-\\infty, \\frac{1}{2}[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                             <li>Sur $]\\frac{1}{2}, +\\infty[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                           </ul>
                           <p>Minimum en $x=\\frac{1}{2}$ : $f\\left(\\frac{1}{2}\\right) = \\ln\\left(\\frac{1}{4} - \\frac{1}{2} + 1\\right) = \\ln\\left(\\frac{3}{4}\\right)$.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$\\frac{1}{2}$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$\\ln\\left(\\frac{3}{4}\\right)$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q2" class="graph-container" data-fn="log(x*x-x+1)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 3. f(x) = x ln x - x
            // ======================================================================
            {
                id: 'ch8ex7q3',
                texte: "3. $f(x) = x\\ln x - x$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>On a $\\ln x$ défini pour $x>0$. Donc <strong>$D_f = ]0,+\\infty[$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>$f$ est dérivable sur $]0,+\\infty[$ comme somme et produit de fonctions dérivables.</p>
                           $$ f'(x) = \\ln x + x\\cdot\\dfrac{1}{x} - 1 = \\ln x + 1 - 1 = \\ln x. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $0^+$ :</strong> $x\\ln x \\to 0$ et $-x \\to 0$, donc $f(x) \\to 0$.</li>
                             <li><strong>En $+\\infty$ :</strong> $f(x) = x(\\ln x - 1) \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} = \\ln x - 1 \\to +\\infty$. Donc <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\ln x$. Le signe est celui de $\\ln x$.</p>
                           <ul>
                             <li>Sur $]0,1[$, $\\ln x < 0$ ⇒ $f$ décroissante.</li>
                             <li>Sur $]1,+\\infty[$, $\\ln x > 0$ ⇒ $f$ croissante.</li>
                           </ul>
                           <p>Minimum en $x=1$ : $f(1) = 1\\cdot0 - 1 = -1$.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$0$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\searrow$</td><td>$-1$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q3" class="graph-container" data-fn="x*log(x)-x" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 4. f(x) = x² ln x
            // ======================================================================
            {
                id: 'ch8ex7q4',
                texte: "4. $f(x) = x^2\\ln x$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>$\\ln x$ est défini pour $x>0$. Donc <strong>$D_f = ]0,+\\infty[$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>$f$ est dérivable sur $]0,+\\infty[$ comme produit de fonctions dérivables.</p>
                           $$ f'(x) = 2x\\ln x + x^2\\cdot\\dfrac{1}{x} = 2x\\ln x + x = x(2\\ln x + 1). $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $0^+$ :</strong> $x^2\\ln x \\to 0$ (car $\\lim_{x\\to0^+} x^\\alpha\\ln x = 0$ pour $\\alpha>0$). Donc $f(x) \\to 0$.</li>
                             <li><strong>En $+\\infty$ :</strong> $x^2\\ln x \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} = x\\ln x \\to +\\infty$. Donc <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = x(2\\ln x + 1)$. Comme $x>0$, le signe est celui de $2\\ln x + 1$.</p>
                           <ul>
                             <li>$2\\ln x + 1 = 0$ ⇔ $\\ln x = -\\dfrac{1}{2}$ ⇔ $x = e^{-1/2} = \\dfrac{1}{\\sqrt{e}}$.</li>
                             <li>Sur $]0, e^{-1/2}[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                             <li>Sur $]e^{-1/2}, +\\infty[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                           </ul>
                           <p>Minimum en $x=e^{-1/2}$ : $f(e^{-1/2}) = (e^{-1}) \\cdot (-\\frac{1}{2}) = -\\dfrac{1}{2e}$.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$0$</td><td></td><td>$e^{-1/2}$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\searrow$</td><td>$-\\dfrac{1}{2e}$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q4" class="graph-container" data-fn="x*x*log(x)" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 5. f(x) = ln(x + √(x²+1))
            // ======================================================================
            {
                id: 'ch8ex7q5',
                texte: "5. $f(x) = \\ln\\left(x + \\sqrt{x^2+1}\\right)$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>Pour tout $x\\in\\mathbb{R}$, $x + \\sqrt{x^2+1} > 0$ (car $\\sqrt{x^2+1} > |x|$). Donc <strong>$D_f = \\mathbb{R}$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>La fonction $x\\mapsto x + \\sqrt{x^2+1}$ est dérivable sur $\\mathbb{R}$ et strictement positive. Par composition avec $\\ln$, $f$ est dérivable sur $\\mathbb{R}$.</p>
                           <p>Calcul de $f'(x)$ :</p>
                           $$ f'(x) = \\dfrac{1 + \\dfrac{x}{\\sqrt{x^2+1}}}{x + \\sqrt{x^2+1}} = \\dfrac{\\dfrac{\\sqrt{x^2+1} + x}{\\sqrt{x^2+1}}}{x + \\sqrt{x^2+1}} = \\dfrac{1}{\\sqrt{x^2+1}}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $+\\infty$ :</strong> $x + \\sqrt{x^2+1} \\sim 2x$, donc $f(x) \\sim \\ln(2x) \\to +\\infty$. De plus, $\\dfrac{f(x)}{x} \\sim \\dfrac{\\ln(2x)}{x} \\to 0$. Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                             <li><strong>En $-\\infty$ :</strong> $x + \\sqrt{x^2+1} \\sim x - x = ?$ Plus précisément, $\\sqrt{x^2+1} \\sim -x + \\dfrac{1}{2x}$, donc $x + \\sqrt{x^2+1} \\sim \\dfrac{1}{2x} \\to 0^-$ ? Attention : $x<0$, $\\sqrt{x^2+1} \\sim -x$. Alors $x + \\sqrt{x^2+1} \\sim \\dfrac{1}{2x}$ (car $\\sqrt{x^2+1} = -x\\sqrt{1+1/x^2} = -x\\left(1 + \\dfrac{1}{2x^2} + \\ldots\\right) = -x - \\dfrac{1}{2x} + \\ldots$). Donc $x + \\sqrt{x^2+1} \\sim -\\dfrac{1}{2x} \\to 0^+$ (car $x<0$). Alors $f(x) = \\ln\\left(x + \\sqrt{x^2+1}\\right) \\sim \\ln\\left(\\dfrac{-1}{2x}\\right) \\to -\\infty$. De plus, $\\dfrac{f(x)}{x} \\sim \\dfrac{\\ln(-1/(2x))}{x} \\to 0$ (car le numérateur tend vers $-\\infty$ et le dénominateur vers $-\\infty$, le quotient tend vers 0). Donc <strong>branche parabolique de direction $(O,\\vec{i})$</strong> également.</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\dfrac{1}{\\sqrt{x^2+1}} > 0$ pour tout $x$. Donc <strong>$f$ est strictement croissante sur $\\mathbb{R}$</strong>.</p>
                           <p>Limites aux bornes : $\\lim_{x\\to-\\infty} f(x) = -\\infty$, $\\lim_{x\\to+\\infty} f(x) = +\\infty$.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$-\\infty$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q5" class="graph-container" data-fn="log(x+sqrt(x*x+1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 6. f(x) = ln((x+1)/(x-1))
            // ======================================================================
            {
                id: 'ch8ex7q6',
                texte: "6. $f(x) = \\ln\\left(\\dfrac{x+1}{x-1}\\right)$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>On doit avoir $\\dfrac{x+1}{x-1} > 0$. Résolvons :</p>
                           <table class="sign-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$x+1$</th><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td>$+$</td><td></td><td></td></tr>
                             <tr><th>$x-1$</th><td>$-$</td><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td><td></td></tr>
                             <tr><th>Quotient</th><td>$+$</td><td>$0$</td><td>$-$</td><td>$\nparallel$</td><td>$+$</td><td></td><td></td></tr>
                           </table>
                           <p>Donc $D_f = ]-\\infty, -1[ \\cup ]1, +\\infty[$. Notons que ce domaine est le même que pour la fonction 1, avec les rôles de -1 et 1 inversés.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>Comme pour la fonction 1, $f$ est dérivable sur $D_f$.</p>
                           $$ f'(x) = \\dfrac{1}{\\frac{x+1}{x-1}} \\times \\dfrac{(x-1) - (x+1)}{(x-1)^2} = \\dfrac{x-1}{x+1} \\times \\dfrac{-2}{(x-1)^2} = \\dfrac{-2}{(x+1)(x-1)} = \\dfrac{-2}{x^2-1}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $-1$ (à gauche) :</strong> $\\dfrac{x+1}{x-1} \\to 0^+$ (car $x+1\\to0^-$ ? x<-1, x+1<0, x-1<0, quotient positif). Donc $f(x) \\to -\\infty$ (asymptote verticale $x=-1$).</li>
                             <li><strong>En $1$ (à droite) :</strong> $\\dfrac{x+1}{x-1} \\to +\\infty$ donc $f(x) \\to +\\infty$ (asymptote verticale $x=1$).</li>
                             <li><strong>En $+\\infty$ :</strong> $\\dfrac{x+1}{x-1} \\to 1$ donc $f(x) \\to 0$ (asymptote horizontale $y=0$).</li>
                             <li><strong>En $-\\infty$ :</strong> $\\dfrac{x+1}{x-1} \\to 1$ donc $f(x) \\to 0$ (asymptote horizontale $y=0$).</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\dfrac{-2}{x^2-1}$.</p>
                           <ul>
                             <li>Sur $]-\\infty, -1[$, $x^2-1>0$, donc $f'(x)<0$ : $f$ est strictement décroissante.</li>
                             <li>Sur $]1, +\\infty[$, $x^2-1>0$, donc $f'(x)<0$ : $f$ est strictement décroissante.</li>
                           </ul>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$-1$</td><td></td><td>$1$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td></td><td>$\nparallel$</td><td>$-$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\searrow$</td><td>$-\\infty$</td><td>$+\\infty$</td><td>$\\searrow$</td><td>$0$</td></tr>
                           </table>
                           <div id="graph-ch8ex7q6" class="graph-container" data-fn="log((x+1)/(x-1))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
            }
        ]
    });

    console.log("Partie 3 (exercice 7) – Études de fonctions – ajoutée avec succès.");
})();