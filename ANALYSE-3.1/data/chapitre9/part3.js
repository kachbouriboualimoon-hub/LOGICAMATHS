// data/chapitre9/part3.js – Exercices 6 et 7 (Identification de courbes, limites)
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
        // EXERCICE 6 – Identification de courbes
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>On a représenté dans un même repère les courbes représentatives des fonctions suivantes :</p>
                      $$ f : x \\mapsto -e^x, \\quad g : x \\mapsto e^{-x}, \\quad h : x \\mapsto \\frac{1}{e^{2-x}}, \\quad k : x \\mapsto 1+e^x. $$
                      <p>Associer chaque fonction à sa courbe.</p>
                      <img src="assets/images/chapitre9/ex6_courbes.png" alt="Courbes ex6" style="max-width:100%;">`,
            questions: [
                {
                    id: 'ch9ex6q1',
                    texte: "Identification des courbes.",
                    solution: `<p><strong>Méthode :</strong> On étudie le comportement des fonctions pour identifier les courbes.</p>
                               <ul>
                                 <li><strong>$f(x) = -e^x$</strong> : toujours négative, décroissante (car $f'(x)=-e^x<0$). Elle tend vers $0$ en $-\\infty$ et vers $-\\infty$ en $+\\infty$. → <strong>Courbe bleue</strong>.</li>
                                 <li><strong>$g(x) = e^{-x}$</strong> : toujours positive, décroissante (car $g'(x)=-e^{-x}<0$). Elle tend vers $+\\infty$ en $-\\infty$ et vers $0$ en $+\\infty$. → <strong>Courbe rouge</strong>.</li>
                                 <li><strong>$h(x) = \\dfrac{1}{e^{2-x}} = e^{x-2}$</strong> : toujours positive, croissante. Elle coupe l'axe des ordonnées en $e^{-2}$. → <strong>Courbe verte</strong>.</li>
                                 <li><strong>$k(x) = 1+e^x$</strong> : toujours $>1$, croissante. Elle tend vers $1$ en $-\\infty$ et vers $+\\infty$ en $+\\infty$. → <strong>Courbe orange</strong>.</li>
                               </ul>
                               <p><strong>Résultat :</strong></p>
                               <ul>
                                 <li>$\\boxed{C_1 : f}$</li>
                                 <li>$\\boxed{C_2 : g}$</li>
                                 <li>$\\boxed{C_3 : h}$</li>
                                 <li>$\\boxed{C_4 : k}$</li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7 – Calcul de limites
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Déterminer les limites suivantes :</p>
                      $$ \\lim_{x \\to +\\infty} x^2 - e^x \\; ; \\quad \\lim_{x \\to +\\infty} e^{3x} - 2e^x \\; ; \\quad \\lim_{x \\to +\\infty} 2e^x - \\frac{1}{x} \\; ; $$
                      $$ \\lim_{x \\to -\\infty} 2e^x - \\frac{1}{x} \\; ; \\quad \\lim_{x \\to -\\infty} xe^{-(1-x)} \\; ; \\quad \\lim_{x \\to -\\infty} (x^2-2x+3)e^x \\; ; $$
                      $$ \\lim_{x \\to -\\infty} (x^2-x)e^x \\; ; \\quad \\lim_{x \\to 0^+} xe^{\\frac{1}{x}} \\; ; \\quad \\lim_{x \\to +\\infty} x^3 - e^{2x} \\; ; $$
                      $$ \\lim_{x \\to +\\infty} \\frac{e^x}{\\sqrt{x+1}} \\; ; \\quad \\lim_{x \\to +\\infty} \\frac{2x-e^x}{x^2+x} \\; ; \\quad \\lim_{x \\to 0^+} \\frac{e^{\\frac{1}{x}}}{x} \\; ; $$
                      $$ \\lim_{x \\to +\\infty} \\frac{e^x-1}{x} \\; ; \\quad \\lim_{x \\to +\\infty} x^2(e^{2x}-e^x) \\; ; \\quad \\lim_{x \\to 0} \\frac{e^{2x}-1}{x} \\; ; $$
                      $$ \\lim_{x \\to 0} \\frac{x}{1-e^{-x}} \\; ; \\quad \\lim_{x \\to 0^+} \\frac{e^x-1}{\\sqrt{2x}} \\; ; \\quad \\lim_{x \\to +\\infty} x\\left(e^{\\frac{1}{x}}-1\\right) \\; ; $$
                      $$ \\lim_{x \\to -\\infty} x\\left(e^{\\frac{1}{x}}-1\\right) \\; ; \\quad \\lim_{x \\to +\\infty} \\frac{x(e^x-1)}{e^{\\frac{1}{x}}} \\; ; $$
                      $$ \\lim_{x \\to +\\infty} x^2\\left(e^{\\frac{1}{x}} - e^{\\frac{1}{x+1}}\\right) \\; ; \\quad \\lim_{x \\to -\\infty} x^2\\left(e^{\\frac{1}{x}} - e^{\\frac{1}{x+1}}\\right). $$`,
            questions: [
                {
                    id: 'ch9ex7q1',
                    texte: "Limites en $+\\infty$",
                    solution: `<p><strong>1. $\\lim_{x\\to+\\infty} (x^2 - e^x)$</strong></p>
                               <p>Par croissance comparée, $e^x$ domine $x^2$. Donc $e^x - x^2 \\to +\\infty$, et $x^2 - e^x \\to -\\infty$.</p>
                               <p><strong>$\\boxed{-\\infty}$</strong></p>
                               <hr>
                               <p><strong>2. $\\lim_{x\\to+\\infty} (e^{3x} - 2e^x)$</strong></p>
                               <p>$e^{3x}$ domine $e^x$. Donc $e^{3x} - 2e^x \\sim e^{3x} \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>3. $\\lim_{x\\to+\\infty} \\left(2e^x - \\dfrac{1}{x}\\right)$</strong></p>
                               <p>$2e^x \\to +\\infty$ et $\\dfrac{1}{x} \\to 0$. Donc la limite est $+\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>4. $\\lim_{x\\to+\\infty} (x^3 - e^{2x})$</strong></p>
                               <p>$e^{2x}$ domine $x^3$. Donc $x^3 - e^{2x} \\to -\\infty$.</p>
                               <p><strong>$\\boxed{-\\infty}$</strong></p>
                               <hr>
                               <p><strong>5. $\\lim_{x\\to+\\infty} \\dfrac{e^x}{\\sqrt{x+1}}$</strong></p>
                               <p>$\\dfrac{e^x}{\\sqrt{x+1}} = \\dfrac{1}{\\sqrt{x+1}}e^x$. Par croissance comparée, $\\dfrac{e^x}{\\sqrt{x+1}} \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>6. $\\lim_{x\\to+\\infty} \\dfrac{2x-e^x}{x^2+x}$</strong></p>
                               <p>Par croissance comparée, $e^x$ domine $2x$ et $x^2$. Donc $\\dfrac{2x-e^x}{x^2+x} \\sim -\\dfrac{e^x}{x^2} \\to -\\infty$.</p>
                               <p><strong>$\\boxed{-\\infty}$</strong></p>
                               <hr>
                               <p><strong>7. $\\lim_{x\\to+\\infty} \\dfrac{e^x-1}{x}$</strong></p>
                               <p>$\\dfrac{e^x-1}{x} = \\dfrac{e^x}{x} - \\dfrac{1}{x} \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>8. $\\lim_{x\\to+\\infty} x^2(e^{2x}-e^x)$</strong></p>
                               <p>$x^2(e^{2x}-e^x) = x^2e^x(e^x-1) \\sim x^2e^{2x} \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>9. $\\lim_{x\\to+\\infty} x\\left(e^{\\frac{1}{x}}-1\\right)$</strong></p>
                               <p>On utilise $e^u - 1 \\sim u$ quand $u\\to0$. Ici $u=\\dfrac{1}{x}\\to0$.</p>
                               <p>$x\\left(e^{1/x}-1\\right) \\sim x\\cdot\\dfrac{1}{x} = 1$.</p>
                               <p><strong>$\\boxed{1}$</strong></p>
                               <hr>
                               <p><strong>10. $\\lim_{x\\to+\\infty} \\dfrac{x(e^x-1)}{e^{\\frac{1}{x}}}$</strong></p>
                               <p>$e^x-1 \\sim e^x$, $e^{1/x} \\to 1$. Donc $\\dfrac{x(e^x-1)}{e^{1/x}} \\sim x e^x \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>11. $\\lim_{x\\to+\\infty} x^2\\left(e^{\\frac{1}{x}} - e^{\\frac{1}{x+1}}\\right)$</strong></p>
                               <p>On utilise $e^u - e^v = e^v(e^{u-v}-1)$.</p>
                               <p>$\\dfrac{1}{x} - \\dfrac{1}{x+1} = \\dfrac{1}{x(x+1)}$.</p>
                               <p>$x^2\\left(e^{1/x} - e^{1/(x+1)}\\right) = x^2 e^{1/(x+1)} \\left(e^{\\frac{1}{x(x+1)}} - 1\\right) \\sim x^2 \\cdot \\dfrac{1}{x(x+1)} = \\dfrac{x}{x+1} \\to 1$.</p>
                               <p><strong>$\\boxed{1}$</strong></p>`
                },
                {
                    id: 'ch9ex7q2',
                    texte: "Limites en $-\\infty$",
                    solution: `<p><strong>1. $\\lim_{x\\to-\\infty} \\left(2e^x - \\dfrac{1}{x}\\right)$</strong></p>
                               <p>$2e^x \\to 0$ et $-\\dfrac{1}{x} \\to 0$ (car $x<0$, $-1/x \\to 0^+$). Donc la limite est $0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>
                               <hr>
                               <p><strong>2. $\\lim_{x\\to-\\infty} xe^{-(1-x)}$</strong></p>
                               <p>$xe^{-(1-x)} = x e^{x-1}$.</p>
                               <p>Par croissance comparée, $\\lim_{x\\to-\\infty} x e^x = 0$. Donc $\\lim_{x\\to-\\infty} x e^{x-1} = 0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>
                               <hr>
                               <p><strong>3. $\\lim_{x\\to-\\infty} (x^2-2x+3)e^x$</strong></p>
                               <p>On factorise par $x^2$ : $x^2(1-\\frac{2}{x}+\\frac{3}{x^2})e^x \\sim x^2e^x \\to 0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>
                               <hr>
                               <p><strong>4. $\\lim_{x\\to-\\infty} (x^2-x)e^x$</strong></p>
                               <p>$x^2-x \\sim x^2$, donc $x^2e^x \\to 0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>
                               <hr>
                               <p><strong>5. $\\lim_{x\\to-\\infty} x\\left(e^{\\frac{1}{x}}-1\\right)$</strong></p>
                               <p>Quand $x\\to-\\infty$, $\\dfrac{1}{x}\\to0$. $e^{1/x}-1 \\sim \\dfrac{1}{x}$.</p>
                               <p>Donc $x\\left(e^{1/x}-1\\right) \\sim x\\cdot\\dfrac{1}{x} = 1$.</p>
                               <p><strong>$\\boxed{1}$</strong></p>
                               <hr>
                               <p><strong>6. $\\lim_{x\\to-\\infty} x^2\\left(e^{\\frac{1}{x}} - e^{\\frac{1}{x+1}}\\right)$</strong></p>
                               <p>Le même calcul qu'en $+\\infty$ donne $\\dfrac{x}{x+1} \\to 1$.</p>
                               <p><strong>$\\boxed{1}$</strong></p>`
                },
                {
                    id: 'ch9ex7q3',
                    texte: "Limites en $0$",
                    solution: `<p><strong>1. $\\lim_{x\\to0^+} xe^{\\frac{1}{x}}$</strong></p>
                               <p>Quand $x\\to0^+$, $\\dfrac{1}{x}\\to+\\infty$, donc $e^{1/x}\\to+\\infty$.</p>
                               <p>$xe^{1/x} = \\dfrac{e^{1/x}}{1/x} \\cdot \\dfrac{1}{\\frac{1}{x}}$ ? Plus simplement : $x e^{1/x} \\to +\\infty$ (car $e^{1/x}$ domine $\\dfrac{1}{x}$).</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>2. $\\lim_{x\\to0^+} \\dfrac{e^{1/x}}{x}$</strong></p>
                               <p>$\\dfrac{e^{1/x}}{x} = \\dfrac{e^{1/x}}{1/x} \\cdot \\dfrac{1}{x^2}$ ? Plutôt, $\\dfrac{1}{x}\\to+\\infty$ et $e^{1/x}$ domine $\\dfrac{1}{x}$.</p>
                               <p>Posons $t=\\dfrac{1}{x}\\to+\\infty$. $\\dfrac{e^{1/x}}{x} = t e^t \\to +\\infty$.</p>
                               <p><strong>$\\boxed{+\\infty}$</strong></p>
                               <hr>
                               <p><strong>3. $\\lim_{x\\to0} \\dfrac{e^{2x}-1}{x}$</strong></p>
                               <p>$\\dfrac{e^{2x}-1}{x} = 2\\dfrac{e^{2x}-1}{2x} \\to 2\\times 1 = 2$.</p>
                               <p><strong>$\\boxed{2}$</strong></p>
                               <hr>
                               <p><strong>4. $\\lim_{x\\to0} \\dfrac{x}{1-e^{-x}}$</strong></p>
                               <p>$1-e^{-x} \\sim x$. Donc $\\dfrac{x}{1-e^{-x}} \\sim \\dfrac{x}{x} = 1$.</p>
                               <p><strong>$\\boxed{1}$</strong></p>
                               <hr>
                               <p><strong>5. $\\lim_{x\\to0^+} \\dfrac{e^x-1}{\\sqrt{2x}}$</strong></p>
                               <p>$e^x-1 \\sim x$. Donc $\\dfrac{x}{\\sqrt{2x}} = \\dfrac{\\sqrt{x}}{\\sqrt{2}} \\to 0$.</p>
                               <p><strong>$\\boxed{0}$</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 3 (exercices 6 et 7) – Identification et limites – ajoutée avec succès.");
})();