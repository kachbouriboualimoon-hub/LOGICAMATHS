// data/chapitre9/part5.js – Exercice 9 (Études de fonctions exponentielles)
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

    ch9.exercices.push({
        numero: 9,
        enonce: `<p>Dans chacun des cas ci-dessous, donner l'ensemble de définition de la fonction $f$ et l'ensemble sur lequel elle est dérivable, calculer $f'(x)$, donner le tableau de variation de $f$ et la représenter (on fera l'étude des branches infinies).</p>
                  <ol>
                    <li>$f : x \\mapsto e^{x^2}$</li>
                    <li>$f : x \\mapsto e^{-\\frac{x^2}{2}}$</li>
                    <li>$f : x \\mapsto e^{\\frac{1}{x}}$</li>
                    <li>$f : x \\mapsto e^{-\\frac{1}{x}}$</li>
                    <li>$f : x \\mapsto e^{\\sqrt{x}}$</li>
                    <li>$f : x \\mapsto \\dfrac{x}{1+e^{-x}}$</li>
                  </ol>`,
        questions: [
            // ======================================================================
            // 1. f(x) = e^{x²}
            // ======================================================================
            {
                id: 'ch9ex9q1',
                texte: "1. $f(x)=e^{x^2}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>La fonction $x\\mapsto x^2$ est définie sur $\\mathbb{R}$. Par composition, $f$ est définie sur $\\mathbb{R}$.</p>
                           <p><strong>$D_f = \\mathbb{R}$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>$f$ est dérivable sur $\\mathbb{R}$ comme composée de fonctions dérivables.</p>
                           $$ f'(x) = 2x \\cdot e^{x^2}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$.</li>
                             <li>$\\lim_{x\\to-\\infty} f(x) = +\\infty$.</li>
                             <li>$\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to\\pm\\infty} \\dfrac{e^{x^2}}{x} = \\pm\\infty$ (car $e^{x^2}$ domine $x$).</li>
                           </ul>
                           <p>Donc <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</p>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x)=2xe^{x^2}$. Le signe est celui de $x$ (car $e^{x^2}>0$).</p>
                           <ul>
                             <li>Sur $]-\\infty,0[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                             <li>Sur $]0,+\\infty[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                           </ul>
                           <p>$f(0)=1$ est un minimum.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$0$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$1$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q1" class="graph-container" data-fn="exp(x*x)" data-xmin="-3" data-xmax="3" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 2. f(x) = e^{-x²/2}
            // ======================================================================
            {
                id: 'ch9ex9q2',
                texte: "2. $f(x)=e^{-\\frac{x^2}{2}}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p><strong>$D_f = \\mathbb{R}$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           $$ f'(x) = -x \\cdot e^{-x^2/2}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li>$\\lim_{x\\to+\\infty} f(x) = 0$ (asymptote horizontale $y=0$).</li>
                             <li>$\\lim_{x\\to-\\infty} f(x) = 0$ (asymptote horizontale $y=0$).</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x)=-xe^{-x^2/2}$. Le signe est l'opposé de celui de $x$.</p>
                           <ul>
                             <li>Sur $]-\\infty,0[$, $f'(x)>0$ ⇒ $f$ croissante.</li>
                             <li>Sur $]0,+\\infty[$, $f'(x)<0$ ⇒ $f$ décroissante.</li>
                           </ul>
                           <p>$f(0)=1$ est un maximum.</p>
                           <p>$f$ est paire.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$0$</td><td>$-$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$1$</td><td>$\\searrow$</td><td>$0$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q2" class="graph-container" data-fn="exp(-x*x/2)" data-xmin="-4" data-xmax="4" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 3. f(x) = e^{1/x}
            // ======================================================================
            {
                id: 'ch9ex9q3',
                texte: "3. $f(x)=e^{\\frac{1}{x}}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>$\\dfrac{1}{x}$ est défini pour $x\\neq0$. Donc <strong>$D_f = \\mathbb{R}^*$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           $$ f'(x) = -\\dfrac{1}{x^2} \\cdot e^{1/x} = -\\dfrac{e^{1/x}}{x^2}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $0^+$ :</strong> $\\dfrac{1}{x}\\to+\\infty$ ⇒ $f(x)\\to+\\infty$ (asymptote verticale $x=0$).</li>
                             <li><strong>En $0^-$ :</strong> $\\dfrac{1}{x}\\to-\\infty$ ⇒ $f(x)\\to0$.</li>
                             <li><strong>En $+\\infty$ :</strong> $\\dfrac{1}{x}\\to0$ ⇒ $f(x)\\to1$ (asymptote horizontale $y=1$).</li>
                             <li><strong>En $-\\infty$ :</strong> $\\dfrac{1}{x}\\to0$ ⇒ $f(x)\\to1$ (asymptote horizontale $y=1$).</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x)=-\\dfrac{e^{1/x}}{x^2}<0$ sur chaque intervalle.</p>
                           <p><strong>$f$ est strictement décroissante sur $]-\\infty,0[$ et sur $]0,+\\infty[$.</strong></p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$1$</td><td>$\\searrow$</td><td>$0$</td><td>$+\\infty$</td><td>$\\searrow$</td><td>$1$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q3" class="graph-container" data-fn="exp(1/x)" data-xmin="-4" data-xmax="4" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 4. f(x) = e^{-1/x}
            // ======================================================================
            {
                id: 'ch9ex9q4',
                texte: "4. $f(x)=e^{-\\frac{1}{x}}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p><strong>$D_f = \\mathbb{R}^*$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           $$ f'(x) = \\dfrac{1}{x^2} \\cdot e^{-1/x} = \\dfrac{e^{-1/x}}{x^2}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $0^+$ :</strong> $-\\dfrac{1}{x}\\to-\\infty$ ⇒ $f(x)\\to0$.</li>
                             <li><strong>En $0^-$ :</strong> $-\\dfrac{1}{x}\\to+\\infty$ ⇒ $f(x)\\to+\\infty$ (asymptote verticale $x=0$).</li>
                             <li><strong>En $+\\infty$ :</strong> $-\\dfrac{1}{x}\\to0$ ⇒ $f(x)\\to1$ (asymptote horizontale $y=1$).</li>
                             <li><strong>En $-\\infty$ :</strong> $-\\dfrac{1}{x}\\to0$ ⇒ $f(x)\\to1$ (asymptote horizontale $y=1$).</li>
                           </ul>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x)=\\dfrac{e^{-1/x}}{x^2}>0$ sur chaque intervalle.</p>
                           <p><strong>$f$ est strictement croissante sur $]-\\infty,0[$ et sur $]0,+\\infty[$.</strong></p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$\nparallel$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$1$</td><td>$\\nearrow$</td><td>$+\\infty$</td><td>$0$</td><td>$\\nearrow$</td><td>$1$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q4" class="graph-container" data-fn="exp(-1/x)" data-xmin="-4" data-xmax="4" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 5. f(x) = e^{√x}
            // ======================================================================
            {
                id: 'ch9ex9q5',
                texte: "5. $f(x)=e^{\\sqrt{x}}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>$\\sqrt{x}$ est défini pour $x\\ge0$. Donc <strong>$D_f = [0,+\\infty[$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>Sur $]0,+\\infty[$, $f$ est dérivable.</p>
                           $$ f'(x) = \\dfrac{1}{2\\sqrt{x}} \\cdot e^{\\sqrt{x}} = \\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}. $$
                           <p><strong>3. Dérivabilité en $0$</strong></p>
                           <p>$\\lim_{x\\to0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to0^+} \\dfrac{e^{\\sqrt{x}}-1}{x}$.</p>
                           <p>On a $e^{\\sqrt{x}}-1 \\sim \\sqrt{x}$, donc le taux $\\sim \\dfrac{\\sqrt{x}}{x} = \\dfrac{1}{\\sqrt{x}} \\to +\\infty$.</p>
                           <p><strong>$f$ n'est pas dérivable en $0$</strong> (tangente verticale).</p>
                           <p><strong>4. Branches infinies</strong></p>
                           <ul>
                             <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$.</li>
                             <li>$\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty} \\dfrac{e^{\\sqrt{x}}}{x} = +\\infty$ (posons $t=\\sqrt{x}$, $e^t/t^2\\to+\\infty$).</li>
                           </ul>
                           <p>Donc <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</p>
                           <p><strong>5. Variations</strong></p>
                           <p>$f'(x)>0$ sur $]0,+\\infty[$. Donc <strong>$f$ est strictement croissante sur $[0,+\\infty[$</strong>.</p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$0$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td>$\nparallel$</td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$1$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q5" class="graph-container" data-fn="exp(sqrt(x))" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
            },
            // ======================================================================
            // 6. f(x) = x/(1+e^{-x})
            // ======================================================================
            {
                id: 'ch9ex9q6',
                texte: "6. $f(x)=\\dfrac{x}{1+e^{-x}}$",
                solution: `<p><strong>1. Domaine de définition</strong></p>
                           <p>$1+e^{-x}>0$ pour tout $x$. Donc <strong>$D_f = \\mathbb{R}$</strong>.</p>
                           <p><strong>2. Dérivabilité et dérivée</strong></p>
                           <p>On utilise la formule du quotient.</p>
                           $$ f'(x) = \\dfrac{1\\cdot(1+e^{-x}) - x\\cdot(-e^{-x})}{(1+e^{-x})^2} = \\dfrac{1+e^{-x}+xe^{-x}}{(1+e^{-x})^2} = \\dfrac{1+(1+x)e^{-x}}{(1+e^{-x})^2}. $$
                           <p><strong>3. Branches infinies</strong></p>
                           <ul>
                             <li><strong>En $+\\infty$ :</strong> $e^{-x}\\to0$ ⇒ $f(x) \\sim x \\to +\\infty$.</li>
                             <li>$\\lim_{x\\to+\\infty} (f(x)-x) = \\lim_{x\\to+\\infty} \\dfrac{-x e^{-x}}{1+e^{-x}} = 0$.</li>
                           </ul>
                           <p>Donc <strong>$y=x$ est asymptote oblique en $+\\infty$</strong>.</p>
                           <ul>
                             <li><strong>En $-\\infty$ :</strong> $e^{-x}\\to+\\infty$ ⇒ $f(x) \\sim \\dfrac{x}{e^{-x}} = x e^x \\to 0$.</li>
                           </ul>
                           <p>Donc <strong>asymptote horizontale $y=0$ en $-\\infty$</strong>.</p>
                           <p><strong>4. Variations</strong></p>
                           <p>$f'(x) = \\dfrac{1+(1+x)e^{-x}}{(1+e^{-x})^2}$.</p>
                           <p>Étudions le signe du numérateur $N(x)=1+(1+x)e^{-x}$.</p>
                           <p>$N'(x) = e^{-x} - (1+x)e^{-x} = -xe^{-x}$.</p>
                           <ul>
                             <li>Sur $]-\\infty,0[$, $N'(x)>0$ ⇒ $N$ croissante.</li>
                             <li>Sur $]0,+\\infty[$, $N'(x)<0$ ⇒ $N$ décroissante.</li>
                           </ul>
                           <p>$N$ a un maximum en $0$ : $N(0)=1+1=2>0$.</p>
                           <p>De plus, $\\lim_{x\\to-\\infty} N(x) = 1$ (car $(1+x)e^{-x}\\to0$).</p>
                           <p>Donc $N(x)>0$ pour tout $x$. Ainsi $f'(x)>0$ pour tout $x$.</p>
                           <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$.</strong></p>
                           <table class="variation-table">
                             <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$+\\infty$</td></tr>
                             <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                             <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr>
                           </table>
                           <div id="graph-ch9ex9q6" class="graph-container" data-fn="x/(1+exp(-x))" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
            }
        ]
    });

    console.log("Partie 5 (exercice 9) – Études de fonctions – ajoutée avec succès.");
})();