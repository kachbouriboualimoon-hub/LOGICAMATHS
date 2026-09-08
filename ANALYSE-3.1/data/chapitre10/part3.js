// data/chapitre10/part3.js – Exercices 7 à 9 (Condensateur, équation non linéaire, microbes)
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
        // EXERCICE 7 – Charge et décharge d'un condensateur
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>La charge et la décharge d'un condensateur sont définies sur l'intervalle $[0, 2\\ln 3]$ par la fonction $f$ qui vérifie les conditions suivantes :</p>
                      <p>Sur l'intervalle $[0, 2\\ln 3]$, $f$ est une solution de l'équation différentielle $y' + y = 0$ avec $f(\\ln 3) = -2$.</p>
                      <ol>
                        <li>Exprimer $f(x)$ en fonction de $x$.</li>
                        <li>Étudier $f$ et la représenter.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex7q1',
                    texte: "1. Expression de $f(x)$.",
                    solution: `<p><strong>Méthode :</strong> On résout l'équation différentielle $y' + y = 0$.</p>
                               $$ y' + y = 0 \\iff y' = -y. $$
                               <p>Les solutions sont $y = Ce^{-x}$.</p>
                               <p>Condition $f(\\ln 3) = -2$ : $Ce^{-\\ln 3} = -2$ ⇒ $C \\cdot \\dfrac{1}{3} = -2$ ⇒ $C = -6$.</p>
                               <p>Donc <strong>$f(x) = -6e^{-x}$</strong>.</p>`
                },
                {
                    id: 'ch10ex7q2',
                    texte: "2. Étude et représentation de $f$ sur $[0, 2\\ln 3]$.",
                    solution: `<p><strong>Domaine :</strong> $[0, 2\\ln 3] \\approx [0, 2.197]$.</p>
                               <p>$f(x) = -6e^{-x}$.</p>
                               <p>$f'(x) = 6e^{-x} > 0$.</p>
                               <p><strong>$f$ est strictement croissante sur $[0, 2\\ln 3]$.</strong></p>
                               <p>Valeurs aux bornes :</p>
                               <ul>
                                 <li>$f(0) = -6$.</li>
                                 <li>$f(2\\ln 3) = -6e^{-2\\ln 3} = -6 \\cdot \\dfrac{1}{9} = -\\dfrac{2}{3}$.</li>
                                 <li>$f(\\ln 3) = -6 \\cdot \\dfrac{1}{3} = -2$ (vérification).</li>
                               </ul>
                               <p>Tableau de variation :</p>
                               <table class="variation-table">
                                 <tr><th>$x$</th><td>$0$</td><td></td><td>$2\\ln 3$</td></tr>
                                 <tr><th>$f'(x)$</th><td></td><td>$+$</td><td></td></tr>
                                 <tr><th>$f(x)$</th><td>$-6$</td><td>$\\nearrow$</td><td>$-\\dfrac{2}{3}$</td></tr>
                               </table>
                               <div id="graph-ch10ex7" class="graph-container" data-fn="-6*exp(-x)" data-xmin="0" data-xmax="2.3" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 8 – Équation différentielle non linéaire
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>Vérifier que la fonction $u : x \\mapsto 2$ vérifie l'équation différentielle $y' + 2y = y^2$.</p>
                      <p>Soit $E$ l'ensemble des fonctions $f$ dérivables sur $\\mathbb{R}$ qui ne s'annulent pas sur $\\mathbb{R}$, telles que $f'(x) + 2f(x) = (f(x))^2$ pour tout réel $x$.</p>
                      <ol>
                        <li>Vérifier que l'ensemble $E$ est non vide.</li>
                        <li>Soit $f$ une fonction de $E$. Montrer que la fonction $g = \\dfrac{1}{f}$ est une solution d'une équation différentielle de la forme $y' = ay + b$, où $a$ et $b$ sont deux réels.</li>
                        <li>Déterminer alors $E$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex8q1',
                    texte: "1. Vérification que $E$ est non vide.",
                    solution: `<p>La fonction constante $u(x) = 2$ vérifie-t-elle l'équation ?</p>
                               <p>$u'(x) = 0$ et $u(x) = 2$.</p>
                               $$ u'(x) + 2u(x) = 0 + 4 = 4. $$
                               $$ (u(x))^2 = 2^2 = 4. $$
                               <p>Donc $u'(x) + 2u(x) = (u(x))^2$ est vérifiée.</p>
                               <p>De plus, $u$ ne s'annule jamais sur $\\mathbb{R}$.</p>
                               <p><strong>Donc $u\\in E$, $E$ est non vide.</strong></p>`
                },
                {
                    id: 'ch10ex8q2',
                    texte: "2. Transformation avec $g = \\dfrac{1}{f}$.",
                    solution: `<p>On a $f = \\dfrac{1}{g}$.</p>
                               <p>Comme $f$ est dérivable et ne s'annule pas, $g$ est dérivable.</p>
                               $$ f' = -\\dfrac{g'}{g^2}. $$
                               <p>Remplaçons dans l'équation $f' + 2f = f^2$ :</p>
                               $$ -\\dfrac{g'}{g^2} + 2\\cdot\\dfrac{1}{g} = \\dfrac{1}{g^2}. $$
                               <p>Multiplions par $g^2$ :</p>
                               $$ -g' + 2g = 1 \\iff g' = 2g - 1. $$
                               <p>On a bien une équation de la forme $y' = ay + b$ avec $a=2$ et $b=-1$.</p>
                               <p><strong>$g$ est solution de $y' = 2y - 1$.</strong></p>`
                },
                {
                    id: 'ch10ex8q3',
                    texte: "3. Détermination de $E$.",
                    solution: `<p>On résout l'équation $g' = 2g - 1$.</p>
                               <p>Les solutions sont de la forme $g(x) = Ce^{2x} + \\dfrac{1}{2}$.</p>
                               <p>Donc $f(x) = \\dfrac{1}{g(x)} = \\dfrac{1}{Ce^{2x} + \\frac{1}{2}}$.</p>
                               <p>On peut aussi écrire $f(x) = \\dfrac{2}{2Ce^{2x} + 1}$.</p>
                               <p>Comme $f$ ne s'annule pas sur $\\mathbb{R}$, il faut $2Ce^{2x} + 1 \\neq 0$ pour tout $x$.</p>
                               <p>Si $C\\ge 0$, le dénominateur est toujours $>0$.</p>
                               <p>Si $C<0$, il existe $x$ tel que $2Ce^{2x} + 1 = 0$, ce qui n'est pas autorisé.</p>
                               <p>Donc <strong>$E = \\left\\{ x \\mapsto \\dfrac{2}{2Ce^{2x} + 1} \\mid C\\ge 0 \\right\\}$</strong>.</p>
                               <p>On peut aussi inclure le cas $C=0$ qui donne $f(x)=2$ (la fonction constante déjà trouvée).</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9 – Culture de microbes
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Dans une culture de microbes, le nombre de microbes à un instant $t$, exprimé en heures, peut être considéré comme une fonction $y$ à valeurs réelles de la variable $t$. La vitesse de prolifération à l'instant $t$ du nombre de microbes est la dérivée $y'$ de cette fonction. On a constaté que : $y'(t) = ky(t)$ où $k$ est un coefficient réel strictement positif.</p>
                      <p>On désigne par $N$ le nombre de microbes à l'instant $t = 0$.</p>
                      <ol>
                        <li>Déterminer l'unique solution de l'équation différentielle $y' = ky$ telle que $y(0) = N$.</li>
                        <li>Sachant qu'au bout de deux heures, le nombre de microbes a quadruplé, calculer en fonction de $N$, le nombre de microbes au bout de trois heures.</li>
                        <li>Quelle est la valeur de $N$ sachant que la culture contient 6400 microbes au bout de cinq heures ?</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex9q1',
                    texte: "1. Solution de l'équation différentielle.",
                    solution: `<p>On résout $y' = ky$.</p>
                               <p>Les solutions sont $y(t) = Ce^{kt}$.</p>
                               <p>Condition $y(0) = N$ : $C = N$.</p>
                               <p><strong>$y(t) = Ne^{kt}$.</strong></p>`
                },
                {
                    id: 'ch10ex9q2',
                    texte: "2. Nombre de microbes au bout de 3 heures.",
                    solution: `<p>On sait qu'au bout de 2 heures, le nombre a quadruplé : $y(2) = 4N$.</p>
                               $$ Ne^{2k} = 4N \\iff e^{2k} = 4 \\iff 2k = \\ln 4 = 2\\ln 2 \\iff k = \\ln 2. $$
                               <p>Donc $y(t) = Ne^{t\\ln 2} = N \\cdot 2^t$.</p>
                               <p>Au bout de 3 heures : $y(3) = N \\cdot 2^3 = 8N$.</p>
                               <p><strong>Au bout de 3 heures, il y a $8N$ microbes.</strong></p>`
                },
                {
                    id: 'ch10ex9q3',
                    texte: "3. Valeur de $N$.",
                    solution: `<p>On a $y(5) = 6400$.</p>
                               $$ y(5) = N \\cdot 2^5 = 32N = 6400. $$
                               $$ N = \\dfrac{6400}{32} = 200. $$
                               <p><strong>$N = 200$ microbes à l'instant initial.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 3 (exercices 7 à 9) – Condensateur, équation non linéaire, microbes – ajoutée avec succès.");
})();