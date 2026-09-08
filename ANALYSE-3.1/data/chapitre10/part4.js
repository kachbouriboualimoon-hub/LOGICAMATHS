// data/chapitre10/part4.js – Exercices 10 à 12 (Équations différentielles du second ordre)
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
        // EXERCICE 10 – Équation y'' + 4y = 0
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>On considère l'équation différentielle $y'' + 4y = 0$.</p>
                      <ol>
                        <li>Déterminer la solution $f$ de cette équation vérifiant $f(0) = \\dfrac{\\sqrt{3}}{2}$ et $f'(0) = 1$.</li>
                        <li>Représenter $f$.</li>
                        <li>Résoudre dans $\\mathbb{R}$ les équations $f(x) = 1$ et $f(x) = -1$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex10q1',
                    texte: "1. Détermination de la solution $f$.",
                    solution: `<p><strong>Méthode :</strong> L'équation $y'' + 4y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = 2$.</p>
                               <p>Les solutions sont de la forme :</p>
                               $$ y = A\\sin(2x) + B\\cos(2x). $$
                               <p>On a $y'(x) = 2A\\cos(2x) - 2B\\sin(2x)$.</p>
                               <p>Conditions initiales :</p>
                               <ul>
                                 <li>$f(0) = \\dfrac{\\sqrt{3}}{2}$ ⇒ $B = \\dfrac{\\sqrt{3}}{2}$.</li>
                                 <li>$f'(0) = 1$ ⇒ $2A = 1$ ⇒ $A = \\dfrac{1}{2}$.</li>
                               </ul>
                               <p>Donc <strong>$f(x) = \\dfrac{1}{2}\\sin(2x) + \\dfrac{\\sqrt{3}}{2}\\cos(2x)$.</strong></p>
                               <p>On peut aussi écrire $f(x) = \\cos\\left(2x - \\dfrac{\\pi}{6}\\right)$ (car $\\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6}$ et $\\dfrac{\\sqrt{3}}{2} = \\cos\\dfrac{\\pi}{6}$).</p>`
                },
                {
                    id: 'ch10ex10q2',
                    texte: "2. Représentation de $f$.",
                    solution: `<p>$f(x) = \\cos\\left(2x - \\dfrac{\\pi}{6}\\right)$.</p>
                               <p>C'est une fonction périodique de période $\\pi$.</p>
                               <ul>
                                 <li>Amplitude : $1$.</li>
                                 <li>Déphasage : $\\dfrac{\\pi}{12}$ vers la droite.</li>
                               </ul>
                               <div id="graph-ch10ex10" class="graph-container" data-fn="cos(2*x-pi/6)" data-xmin="-2" data-xmax="4" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch10ex10q3',
                    texte: "3. Résolution de $f(x) = 1$ et $f(x) = -1$.",
                    solution: `<p>On a $f(x) = \\cos\\left(2x - \\dfrac{\\pi}{6}\\right)$.</p>
                               <p><strong>$f(x) = 1$ :</strong></p>
                               $$ \\cos\\left(2x - \\dfrac{\\pi}{6}\\right) = 1 \\iff 2x - \\dfrac{\\pi}{6} = 2k\\pi \\iff x = \\dfrac{\\pi}{12} + k\\pi,\\; k\\in\\mathbb{Z}. $$
                               <p><strong>$f(x) = -1$ :</strong></p>
                               $$ \\cos\\left(2x - \\dfrac{\\pi}{6}\\right) = -1 \\iff 2x - \\dfrac{\\pi}{6} = \\pi + 2k\\pi \\iff 2x = \\dfrac{7\\pi}{6} + 2k\\pi \\iff x = \\dfrac{7\\pi}{12} + k\\pi,\\; k\\in\\mathbb{Z}. $$`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11 – Équation y'' + π²y = 0
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>On considère l'équation différentielle $y'' + \\pi^2 y = 0$.</p>
                      <ol>
                        <li>Déterminer la solution $g$ de cette équation vérifiant $g(0) = 0$ et $g'(0) = 1$.</li>
                        <li>Représenter $g$.</li>
                        <li>Résoudre dans $\\mathbb{R}$ les équations $g(x) = \\dfrac{1}{2}$ et $g(x) = -\\dfrac{1}{2}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex11q1',
                    texte: "1. Détermination de la solution $g$.",
                    solution: `<p>L'équation $y'' + \\pi^2 y = 0$ est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = \\pi$.</p>
                               <p>Les solutions sont de la forme $y = A\\sin(\\pi x) + B\\cos(\\pi x)$.</p>
                               <p>Conditions initiales :</p>
                               <ul>
                                 <li>$g(0) = 0$ ⇒ $B = 0$.</li>
                                 <li>$g'(x) = A\\pi\\cos(\\pi x)$. $g'(0) = 1$ ⇒ $A\\pi = 1$ ⇒ $A = \\dfrac{1}{\\pi}$.</li>
                               </ul>
                               <p><strong>$g(x) = \\dfrac{1}{\\pi}\\sin(\\pi x)$.</strong></p>`
                },
                {
                    id: 'ch10ex11q2',
                    texte: "2. Représentation de $g$.",
                    solution: `<p>$g(x) = \\dfrac{1}{\\pi}\\sin(\\pi x)$.</p>
                               <ul>
                                 <li>Période : $2$.</li>
                                 <li>Amplitude : $\\dfrac{1}{\\pi}$.</li>
                               </ul>
                               <div id="graph-ch10ex11" class="graph-container" data-fn="(1/pi)*sin(pi*x)" data-xmin="-3" data-xmax="3" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch10ex11q3',
                    texte: "3. Résolution de $g(x) = \\dfrac{1}{2}$ et $g(x) = -\\dfrac{1}{2}$.",
                    solution: `<p>On a $g(x) = \\dfrac{1}{\\pi}\\sin(\\pi x)$.</p>
                               <p><strong>$g(x) = \\dfrac{1}{2}$ :</strong></p>
                               $$ \\dfrac{1}{\\pi}\\sin(\\pi x) = \\dfrac{1}{2} \\iff \\sin(\\pi x) = \\dfrac{\\pi}{2}. $$
                               <p>Comme $\\dfrac{\\pi}{2} > 1$, cette équation n'a pas de solution.</p>
                               <p><strong>$g(x) = -\\dfrac{1}{2}$ :</strong></p>
                               $$ \\sin(\\pi x) = -\\dfrac{\\pi}{2} < -1. $$
                               <p>Pas de solution non plus.</p>
                               <p><strong>$\\mathcal{S} = \\varnothing$ dans les deux cas.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12 – Mouvement uniformément varié (pendule)
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Un mobile se déplace sur un axe horizontal $(x'x)$ avec un mouvement uniformément varié.</p>
                      <p>On désigne par $x(t)$ la position du mobile à l'instant $t$, $x'(t)$ sa vitesse et $x''(t)$ son accélération. ($t$ est exprimé en secondes et $x(t)$ en mètres).</p>
                      <p>On suppose de plus qu'à tout instant $t$, l'accélération $x''(t)$ est proportionnelle à $x(t)$ avec un coefficient égal à $-\\dfrac{\\pi^2}{4}$.</p>
                      <ol>
                        <li>Donner l'équation horaire du mouvement si l'on sait que $x(1) = 2$ et $x(2) = 0$.</li>
                        <li>Déterminer la position et la vitesse du mobile à l'instant $t = 0$.</li>
                        <li>Représenter $t \\mapsto x(t)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch10ex12q1',
                    texte: "1. Équation horaire du mouvement.",
                    solution: `<p>L'accélération est proportionnelle à $x(t)$ avec un coefficient $-\\dfrac{\\pi^2}{4}$ :</p>
                               $$ x''(t) = -\\dfrac{\\pi^2}{4} x(t) \\iff x''(t) + \\dfrac{\\pi^2}{4}x(t) = 0. $$
                               <p>Cette équation est de la forme $y'' + \\omega^2 y = 0$ avec $\\omega = \\dfrac{\\pi}{2}$.</p>
                               <p>Les solutions sont $x(t) = A\\sin\\left(\\dfrac{\\pi}{2}t\\right) + B\\cos\\left(\\dfrac{\\pi}{2}t\\right)$.</p>
                               <p>Conditions :</p>
                               <ul>
                                 <li>$x(1) = 2$ ⇒ $A\\sin\\left(\\dfrac{\\pi}{2}\\right) + B\\cos\\left(\\dfrac{\\pi}{2}\\right) = A = 2$.</li>
                                 <li>$x(2) = 0$ ⇒ $A\\sin(\\pi) + B\\cos(\\pi) = -B = 0$ ⇒ $B = 0$.</li>
                               </ul>
                               <p><strong>$x(t) = 2\\sin\\left(\\dfrac{\\pi}{2}t\\right)$.</strong></p>`
                },
                {
                    id: 'ch10ex12q2',
                    texte: "2. Position et vitesse à $t=0$.",
                    solution: `<p>$x(0) = 2\\sin 0 = 0$.</p>
                               <p>$x'(t) = 2\\cdot\\dfrac{\\pi}{2}\\cos\\left(\\dfrac{\\pi}{2}t\\right) = \\pi\\cos\\left(\\dfrac{\\pi}{2}t\\right)$.</p>
                               <p>$x'(0) = \\pi\\cos 0 = \\pi$.</p>
                               <p><strong>À $t=0$, le mobile est à l'origine avec une vitesse de $\\pi$ m/s.</strong></p>`
                },
                {
                    id: 'ch10ex12q3',
                    texte: "3. Représentation de $x(t)$.",
                    solution: `<p>$x(t) = 2\\sin\\left(\\dfrac{\\pi}{2}t\\right)$.</p>
                               <ul>
                                 <li>Période : $4$ secondes.</li>
                                 <li>Amplitude : $2$ mètres.</li>
                               </ul>
                               <div id="graph-ch10ex12" class="graph-container" data-fn="2*sin(pi*x/2)" data-xmin="0" data-xmax="8" data-colors="#2563eb"></div>`
                }
            ]
        }
    );

    console.log("Partie 4 (exercices 10 à 12) – Équations du second ordre – ajoutée avec succès.");
})();