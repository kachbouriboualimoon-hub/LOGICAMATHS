// data/chapitre5/part1.js – Exercices 1, 2, 3, 4 (Corrections enrichies)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch5 = data.chapitres.find(c => c.id === 5);
    if (!ch5) {
        console.error("Chapitre 5 introuvable. Chargez d'abord data/chapitre5_base.js.");
        return;
    }

    ch5.exercices.push(
        // ======================================================================
        // EXERCICE 1 – Lecture graphique et asymptotes
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>La courbe ci-dessous est la représentation graphique d'une fonction $f$ définie sur $\\mathbb{R} \\setminus\\{0,2\\}$. Les droites $x=0$, $x=2$, $y=0$ et $\\Delta$ sont des asymptotes.</p>
                      <img src="assets/images/chapitre5/ex1_courbe.png" alt="Courbe ex1" style="max-width:100%;">
                      <ol>
                        <li>Déterminer graphiquement : $\\lim\\limits_{-\\infty} f$, $\\lim\\limits_{0^-} f$, $\\lim\\limits_{0^+} f$, $\\lim\\limits_{2^-} f$, $\\lim\\limits_{2^+} f$, $\\lim\\limits_{+\\infty} f$, $\\lim\\limits_{x\\to+\\infty} \\frac{f(x)}{x}$ et $\\lim\\limits_{x\\to+\\infty} (f(x)+x-2)$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Suivant les valeurs de $m$, donner le nombre de solutions de $f(x)=m$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex1q1',
                    texte: "1. Lecture graphique des limites.",
                    solution: `<p><strong>Stratégie :</strong> Une asymptote verticale en $x=a$ signifie que la fonction tend vers $\\pm\\infty$ quand $x$ approche $a$. Une asymptote horizontale $y=L$ signifie que la fonction tend vers $L$ en $\\pm\\infty$. Une asymptote oblique $y=ax+b$ signifie que $\\lim (f(x)-(ax+b))=0$, ce qui donne directement $\\lim f(x)/x = a$.</p>
                               <ul>
                                 <li><strong>$\\lim\\limits_{-\\infty} f = 0$</strong> car la courbe se rapproche de l'axe des abscisses (asymptote horizontale $y=0$).</li>
                                 <li><strong>$\\lim\\limits_{0^-} f = +\\infty$</strong> et <strong>$\\lim\\limits_{0^+} f = -\\infty$</strong> : à gauche de $0$, la courbe monte vers $+\\infty$ ; à droite, elle descend vers $-\\infty$ (asymptote verticale $x=0$).</li>
                                 <li><strong>$\\lim\\limits_{2^-} f = +\\infty$</strong> et <strong>$\\lim\\limits_{2^+} f = -\\infty$</strong> : même comportement autour de l'asymptote verticale $x=2$.</li>
                                 <li><strong>$\\lim\\limits_{+\\infty} f = -\\infty$</strong> : à l'infini, la courbe part vers le bas.</li>
                                 <li><strong>$\\lim\\limits_{x\\to+\\infty} \\dfrac{f(x)}{x} = -1$</strong> : la droite $\\Delta$ a pour équation $y=-x+2$, donc sa pente est $-1$.</li>
                                 <li><strong>$\\lim\\limits_{x\\to+\\infty} (f(x)+x-2) = 0$</strong> : c'est la définition même de l'asymptote oblique $\\Delta:y=-x+2$.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex1q2',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Le sens de variation se déduit du tracé :</p>
                               <ul>
                                 <li>Sur $]-\\infty,0[$ : la courbe monte (flèche $\nearrow$) de $0$ à $+\\infty$.</li>
                                 <li>Sur $]0,2[$ : la courbe descend (flèche $\\searrow$) de $-\\infty$ à $+\\infty$ (en passant par un minimum relatif).</li>
                                 <li>Sur $]2,+\\infty[$ : la courbe descend (flèche $\\searrow$) de $-\\infty$ à $-\\infty$.</li>
                               </ul>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$-\\infty$</td><td></td><td>$0$</td><td></td><td>$2$</td><td></td><td>$+\\infty$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td>$\nparallel$</td><td>$-$</td><td>$\nparallel$</td><td>$-$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$0$</td><td>$\nearrow$</td><td>$+\\infty$</td><td>$-\\infty$</td><td>$+\\infty$</td><td>$-\\infty$</td><td>$-\\infty$</td></tr>
                               </table>
                               <p><strong>Interprétation :</strong> les barres verticales $\nparallel$ indiquent les asymptotes verticales (la fonction n'est pas définie en $0$ et $2$).</p>`
                },
                {
                    id: 'ch5ex1q3',
                    texte: "3. Nombre de solutions de $f(x)=m$.",
                    solution: `<p>Résoudre $f(x)=m$ revient à compter les intersections de la courbe avec la droite horizontale $y=m$.</p>
                               <ul>
                                 <li><strong>Cas $m=0$ :</strong> deux intersections (avec l'axe des abscisses).</li>
                                 <li><strong>Cas $m>0$ :</strong> une seule intersection, située dans l'intervalle $]0,2[$ (la courbe y prend toutes les valeurs positives).</li>
                                 <li><strong>Cas $m<0$ :</strong> trois intersections : une dans $]-\\infty,0[$, une dans $]0,2[$, et une dans $]2,+\\infty[$.</li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2 – Identification de courbes
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>On a représenté trois fonctions $f,g,h$ définies sur $[0,+\\infty[$ par $f(x)=x^2+1$, $g(x)=\\sqrt{x}$, $h(x)=x-\\dfrac{2}{x+1}$.</p>
                      <img src="assets/images/chapitre5/ex2_courbes.png" alt="Courbes ex2" style="max-width:100%;">
                      <ol>
                        <li>Identifier chaque courbe.</li>
                        <li>Préciser la nature de la branche infinie de chaque courbe.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex2q1',
                    texte: "1. Identification.",
                    solution: `<p><strong>Stratégie :</strong> On compare les comportements asymptotiques.</p>
                               <ul>
                                 <li>$f(x)=x^2+1$ : c'est une parabole tournée vers le haut. À l'infini, $x^2$ domine. Sa courbe est <strong>$\\Gamma_3$</strong>.</li>
                                 <li>$g(x)=\\sqrt{x}$ : la racine carrée, croissante, avec une tangente verticale en $0$. Sa courbe est <strong>$\\Gamma_1$</strong>.</li>
                                 <li>$h(x)=x-\\dfrac{2}{x+1}$ : elle se comporte comme $x$ à l'infini (car $\\dfrac{2}{x+1}\\to0$). Elle admet donc une asymptote oblique $y=x$. Sa courbe est <strong>$\\Gamma_2$</strong>.</li>
                               </ul>`
                },
                {
                    id: 'ch5ex2q2',
                    texte: "2. Nature des branches infinies.",
                    solution: `<ul>
                                 <li><strong>$\\Gamma_3$ ($f$) :</strong> $\\lim f(x)/x = \\lim (x+1/x) = +\\infty$ → <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</li>
                                 <li><strong>$\\Gamma_1$ ($g$) :</strong> $\\lim g(x)/x = \\lim 1/\\sqrt{x} = 0$ → <strong>branche parabolique de direction $(O,\\vec{i})$</strong>.</li>
                                 <li><strong>$\\Gamma_2$ ($h$) :</strong> $\\lim (h(x)-x) = \\lim (-2/(x+1)) = 0$ → <strong>asymptote oblique $\\Delta:y=x$</strong>.</li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3 – Branches infinies (3 fonctions)
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Déterminer la nature des branches infinies de :</p>
                      <ol>
                        <li>$f(x)=2x-3\\sqrt{x-1}$</li>
                        <li>$f(x)=\\dfrac{1}{x}-\\sqrt{x+2}$</li>
                        <li>$f(x)=x\\sqrt{\\dfrac{x-1}{x+1}}$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex3q1',
                    texte: "1. $f(x)=2x-3\\sqrt{x-1}$.",
                    solution: `<p><strong>Domaine :</strong> $[1,+\\infty[$.</p>
                               <p>On calcule $\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty} \\left(2 - 3\\dfrac{\\sqrt{x-1}}{x}\\right) = 2$.</p>
                               <p>On calcule ensuite $\\lim_{x\\to+\\infty} (f(x)-2x) = \\lim_{x\\to+\\infty} (-3\\sqrt{x-1}) = -\\infty$.</p>
                               <p>La limite de la différence n'est pas un nombre fini. On ne peut donc pas parler d'asymptote oblique.</p>
                               <p><strong>Conclusion :</strong> la droite $\\Delta:y=2x$ est une <strong>direction asymptotique</strong> (la courbe s'en rapproche en tendant vers $-\\infty$).</p>`
                },
                {
                    id: 'ch5ex3q2',
                    texte: "2. $f(x)=\\dfrac{1}{x}-\\sqrt{x+2}$.",
                    solution: `<p><strong>Domaine :</strong> $[-2,+\\infty[\\setminus\\{0\\}$.</p>
                               <p>Limites en $0$ : $\\lim_{x\\to0^+} f = +\\infty$ (car $1/x\\to+\\infty$) et $\\lim_{x\\to0^-} f = -\\infty$ (car $1/x\\to-\\infty$).</p>
                               <p><strong>Asymptote verticale : $x=0$.</strong></p>
                               <p>Limite en $+\\infty$ : $\\lim_{x\\to+\\infty} f = -\\infty$ (terme dominant $-\\sqrt{x}$).</p>
                               <p>$\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty} \\left(\\dfrac{1}{x^2} - \\dfrac{\\sqrt{x+2}}{x}\\right) = 0$.</p>
                               <p><strong>Branche parabolique de direction $(O,\\vec{i})$.</strong></p>`
                },
                {
                    id: 'ch5ex3q3',
                    texte: "3. $f(x)=x\\sqrt{\\dfrac{x-1}{x+1}}$.",
                    solution: `<p><strong>Domaine :</strong> $]-\\infty,-1[\\cup[1,+\\infty[$.</p>
                               <p>En $-1$ : $\\lim_{x\\to-1^+} f(x) = -\\infty$ (le radicande tend vers $+\\infty$ et $x\\to-1$).</p>
                               <p><strong>Asymptote verticale : $x=-1$.</strong></p>
                               <p>En $+\\infty$ : $\\lim f = +\\infty$, $\\lim f(x)/x = 1$.</p>
                               <p>On calcule $\\lim (f(x)-x) = \\lim x\\left(\\sqrt{\\dfrac{x-1}{x+1}} - 1\\right)$.</p>
                               <p>On utilise la quantité conjuguée :</p>
                               <p>$\\sqrt{\\dfrac{x-1}{x+1}} - 1 = \\dfrac{\\dfrac{x-1}{x+1} - 1}{\\sqrt{\\dfrac{x-1}{x+1}} + 1} = \\dfrac{-2}{(x+1)\\left(\\sqrt{\\dfrac{x-1}{x+1}} + 1\\right)}$.</p>
                               <p>Donc $f(x)-x = \\dfrac{-2x}{(x+1)\\left(\\sqrt{\\dfrac{x-1}{x+1}} + 1\\right)} \\to -1$.</p>
                               <p><strong>Asymptote oblique : $\\Delta:y=x-1$.</strong></p>
                               <p>Le même calcul en $-\\infty$ donne la même asymptote.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 4 – Asymptotes de f(x)=x+√(x²+1)
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>$f(x)=x+\\sqrt{x^2+1}$.</p>
                      <ol>
                        <li>Montrer que $y=0$ est asymptote en $-\\infty$.</li>
                        <li>Montrer que $y=2x$ est asymptote en $+\\infty$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch5ex4q1',
                    texte: "1. Asymptote en $-\\infty$.",
                    solution: `<p><strong>Stratégie :</strong> Pour $x\\to-\\infty$, $\\sqrt{x^2+1} \\sim -x$ (car $x<0$). Mais pour justifier rigoureusement, on utilise la quantité conjuguée.</p>
                               <p>$\\lim_{x\\to-\\infty} f(x) = \\lim_{x\\to-\\infty} \\dfrac{(x+\\sqrt{x^2+1})(x-\\sqrt{x^2+1})}{x-\\sqrt{x^2+1}}$</p>
                               <p>$= \\lim_{x\\to-\\infty} \\dfrac{x^2 - (x^2+1)}{x-\\sqrt{x^2+1}} = \\lim_{x\\to-\\infty} \\dfrac{-1}{x-\\sqrt{x^2+1}}$.</p>
                               <p>Quand $x\\to-\\infty$, $\\sqrt{x^2+1} \\sim -x$, donc $x-\\sqrt{x^2+1} \\sim x - (-x) = 2x \\to -\\infty$.</p>
                               <p>Donc le quotient $\\dfrac{-1}{2x} \\to 0^+$.</p>
                               <p><strong>Donc $y=0$ est asymptote horizontale en $-\\infty$.</strong></p>`
                },
                {
                    id: 'ch5ex4q2',
                    texte: "2. Asymptote en $+\\infty$.",
                    solution: `<p>$\\lim_{x\\to+\\infty} (f(x)-2x) = \\lim_{x\\to+\\infty} (\\sqrt{x^2+1} - x)$.</p>
                               <p>On utilise la quantité conjuguée :</p>
                               <p>$\\sqrt{x^2+1} - x = \\dfrac{(\\sqrt{x^2+1})^2 - x^2}{\\sqrt{x^2+1} + x} = \\dfrac{1}{\\sqrt{x^2+1} + x}$.</p>
                               <p>Quand $x\\to+\\infty$, le dénominateur tend vers $+\\infty$, donc la fraction tend vers $0$.</p>
                               <p><strong>Donc $y=2x$ est asymptote oblique en $+\\infty$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 1 (exercices 1 à 4) – version améliorée – ajoutée avec succès.");
})();