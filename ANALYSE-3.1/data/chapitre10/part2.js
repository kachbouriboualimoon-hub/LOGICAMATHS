// data/chapitre10/part2.js – Exercices 4 à 6 (Applications : Newton, dissolution, médicament)
// Version améliorée – conforme au manuel Livre_4_Sc_T1.pdf
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch10 = data.chapitres.find(c => c.id === 10);
    if (!ch10) {
        console.error("Chapitre 10 introuvable. Chargez d'abord data/chapitre10_base.js.");
        return;
    }

    ch10.exercices.push(
        // ======================================================================
        // EXERCICE 4 – Loi de refroidissement de Newton
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>La loi de refroidissement de Newton établit que la vitesse instantanée de perte de chaleur d'un corps homogène et inerte est proportionnelle à la différence de température entre le corps et le milieu.</p>
                      <p>On suppose que la température de l'air ambiant est constante et égale à $25^{\\circ}\\text{C}$. Dans ces conditions, la température d'un corps homogène et inerte passe de $100^{\\circ}\\text{C}$ à $75^{\\circ}\\text{C}$ en 15 minutes.</p>
                      <p>On désigne par $f(t)$ la température de ce corps à $t$ minutes.</p>
                      <ol>
                        <li>Vérifier qu'il existe un réel $a$ tel que $\\begin{cases} f'(t) = a(f(t) - 25) \\\\ f(0) = 100 \\\\ f(15) = 75 \\end{cases}$</li>
                        <li>Déterminer $f(t)$.</li>
                        <li>Au bout de combien de temps (à 1 minute près), ce corps aura une température de $25^{\\circ}\\text{C}$ ?</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex4q1',
                    texte: "1. Équation différentielle et conditions initiales.",
                    solution: `<p><strong>Méthode :</strong> La vitesse de perte de chaleur est $f'(t)$. Elle est proportionnelle à la différence de température $f(t) - 25$.</p>
                               <p>Donc il existe une constante $k$ (que l'on note $a$) telle que :</p>
                               $$ f'(t) = a(f(t) - 25). $$
                               <p>Les conditions initiales sont :</p>
                               <ul>
                                 <li>$f(0) = 100$ (température initiale).</li>
                                 <li>$f(15) = 75$ (température au bout de 15 minutes).</li>
                               </ul>
                               <p><strong>L'équation différentielle est bien $f'(t) = a(f(t) - 25)$ avec $f(0)=100$ et $f(15)=75$.</strong></p>`
                },
                {
                    id: 'ch10ex4q2',
                    texte: "2. Détermination de $f(t)$.",
                    solution: `<p>On résout l'équation différentielle $f'(t) = a(f(t) - 25)$.</p>
                               <p>Posons $g(t) = f(t) - 25$. Alors $g'(t) = f'(t) = a g(t)$.</p>
                               <p>Donc $g(t) = Ce^{at}$.</p>
                               <p>D'où $f(t) = Ce^{at} + 25$.</p>
                               <p><strong>Détermination de $C$ et $a$ :</strong></p>
                               <p>$f(0) = 100$ ⇒ $C + 25 = 100$ ⇒ $C = 75$.</p>
                               <p>$f(15) = 75$ ⇒ $75e^{15a} + 25 = 75$ ⇒ $75e^{15a} = 50$ ⇒ $e^{15a} = \\dfrac{2}{3}$.</p>
                               <p>Donc $15a = \\ln\\left(\\dfrac{2}{3}\\right)$ ⇒ $a = \\dfrac{1}{15}\\ln\\left(\\dfrac{2}{3}\\right)$.</p>
                               <p>Ainsi <strong>$f(t) = 75e^{\\frac{t}{15}\\ln(2/3)} + 25 = 75\\left(\\dfrac{2}{3}\\right)^{t/15} + 25$.</strong></p>`
                },
                {
                    id: 'ch10ex4q3',
                    texte: "3. Temps pour atteindre $25^{\\circ}\\text{C}$.",
                    solution: `<p>On résout $f(t) = 25$ :</p>
                               $$ 75\\left(\\dfrac{2}{3}\\right)^{t/15} + 25 = 25 \\iff 75\\left(\\dfrac{2}{3}\\right)^{t/15} = 0. $$
                               <p>Comme $75>0$ et $\\left(\\dfrac{2}{3}\\right)^{t/15} > 0$, cette équation n'a pas de solution finie.</p>
                               <p>En effet, la température ne tend vers $25^{\\circ}\\text{C}$ qu'asymptotiquement.</p>
                               <p><strong>Le corps n'atteint jamais exactement $25^{\\circ}\\text{C}$ ; il s'en rapproche indéfiniment.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5 – Dissolution d'une substance
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Une substance se dissout dans l'eau à une vitesse instantanée proportionnelle à la quantité non encore dissoute.</p>
                      <p>On place 20 g de cette substance dans un volume d'eau suffisant pour la dissoudre totalement. On sait que les dix premiers grammes se dissolvent en 5 minutes.</p>
                      <ol>
                        <li>Donner l'expression de la quantité dissoute $f(t)$ (en grammes) en fonction du temps $t$ (en minutes).</li>
                        <li>Quelle est la quantité (à 1 mg près) non dissoute au bout de 10 minutes ? 30 minutes ? 1 heure ?</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex5q1',
                    texte: "1. Expression de la quantité dissoute $f(t)$.",
                    solution: `<p><strong>Méthode :</strong> Soit $f(t)$ la quantité déjà dissoute à l'instant $t$.</p>
                               <p>La quantité non encore dissoute est $20 - f(t)$.</p>
                               <p>La vitesse de dissolution $f'(t)$ est proportionnelle à $20 - f(t)$ :</p>
                               $$ f'(t) = k(20 - f(t)), \\quad \\text{avec } k>0. $$
                               <p>Posons $g(t) = 20 - f(t)$ (quantité non dissoute). Alors $g'(t) = -f'(t) = -k g(t)$.</p>
                               <p>Donc $g(t) = Ce^{-kt}$.</p>
                               <p>$f(0) = 0$ (aucune quantité dissoute au départ) ⇒ $g(0) = 20$ ⇒ $C = 20$.</p>
                               <p>Donc $g(t) = 20e^{-kt}$ et <strong>$f(t) = 20(1 - e^{-kt})$</strong>.</p>
                               <p><strong>Détermination de $k$ :</strong></p>
                               <p>On sait que les dix premiers grammes se dissolvent en 5 minutes : $f(5) = 10$.</p>
                               $$ 20(1 - e^{-5k}) = 10 \\iff 1 - e^{-5k} = \\dfrac{1}{2} \\iff e^{-5k} = \\dfrac{1}{2} \\iff -5k = -\\ln 2 \\iff k = \\dfrac{\\ln 2}{5}. $$
                               <p>Donc <strong>$f(t) = 20\\left(1 - e^{-\\frac{t\\ln 2}{5}}\\right) = 20\\left(1 - 2^{-t/5}\\right)$</strong>.</p>`
                },
                {
                    id: 'ch10ex5q2',
                    texte: "2. Quantité non dissoute à différents instants.",
                    solution: `<p>La quantité non dissoute est $g(t) = 20 - f(t) = 20 \\cdot 2^{-t/5}$.</p>
                               <p><strong>À $t=10$ minutes :</strong></p>
                               $$ g(10) = 20 \\cdot 2^{-2} = 20 \\cdot \\dfrac{1}{4} = 5 \\text{ g}. $$
                               <p><strong>À $t=30$ minutes :</strong></p>
                               $$ g(30) = 20 \\cdot 2^{-6} = 20 \\cdot \\dfrac{1}{64} = \\dfrac{20}{64} = 0.3125 \\text{ g} = 312.5 \\text{ mg}. $$
                               <p><strong>À $t=60$ minutes (1 heure) :</strong></p>
                               $$ g(60) = 20 \\cdot 2^{-12} = 20 \\cdot \\dfrac{1}{4096} \\approx 0.00488 \\text{ g} \\approx 4.88 \\text{ mg}. $$
                               <p><strong>Résultats :</strong></p>
                               <ul>
                                 <li>Au bout de 10 minutes : <strong>$5$ g non dissous</strong>.</li>
                                 <li>Au bout de 30 minutes : <strong>$312.5$ mg non dissous</strong>.</li>
                                 <li>Au bout de 1 heure : <strong>$4.88$ mg non dissous</strong>.</li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6 – Concentration d'un médicament
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>On désigne par $C(t)$ la concentration (en mg/l) d'un certain médicament dans le sang, en fonction du temps exprimé en heures. La concentration initiale est de 5 mg/l.</p>
                      <p>On suppose que la vitesse instantanée d'élimination de ce médicament par l'organisme est donnée par $C'(t) = -0.25 C(t)$.</p>
                      <ol>
                        <li>Déterminer $C(t)$.</li>
                        <li>Représenter la fonction $C : t \\mapsto C(t)$.</li>
                        <li>Donner un encadrement à 0.1 près de l'instant $t_0$ à partir duquel $C(t) < 1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex6q1',
                    texte: "1. Détermination de $C(t)$.",
                    solution: `<p>On a $C'(t) = -0.25 C(t)$.</p>
                               <p>Les solutions sont de la forme $C(t) = Ce^{-0.25t}$.</p>
                               <p>Condition initiale : $C(0) = 5$ ⇒ $C = 5$.</p>
                               <p><strong>$\\boxed{C(t) = 5e^{-0.25t} = 5e^{-t/4}}$</strong></p>`
                },
                {
                    id: 'ch10ex6q2',
                    texte: "2. Représentation graphique.",
                    solution: `<p>$C$ est une fonction exponentielle décroissante.</p>
                               <ul>
                                 <li>$C(0) = 5$.</li>
                                 <li>$\\lim_{t\\to+\\infty} C(t) = 0$.</li>
                                 <li>$C'(t) = -1.25e^{-0.25t} < 0$.</li>
                               </ul>
                               <div id="graph-ch10ex6" class="graph-container" data-fn="5*exp(-0.25*x)" data-xmin="0" data-xmax="20" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch10ex6q3',
                    texte: "3. Encadrement de $t_0$ tel que $C(t) < 1$.",
                    solution: `<p>On résout $5e^{-0.25t} < 1$.</p>
                               $$ e^{-0.25t} < \\dfrac{1}{5} \\iff -0.25t < \\ln\\left(\\dfrac{1}{5}\\right) = -\\ln 5. $$
                               <p>On multiplie par $-4$ (attention au sens de l'inégalité) :</p>
                               $$ t > 4\\ln 5. $$
                               <p>Or $4\\ln 5 \\approx 4 \\times 1.6094 = 6.4376$.</p>
                               <p>Donc <strong>$t_0 \\approx 6.4$ heures</strong>.</p>
                               <p>Encadrement à 0.1 près : <strong>$6.4 < t_0 < 6.5$</strong>.</p>`
                }
            ]
        }
    );

    console.log("Partie 2 (exercices 4 à 6) – Applications – ajoutée avec succès.");
})();