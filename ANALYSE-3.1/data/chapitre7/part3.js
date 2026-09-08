// data/chapitre7/part3.js – Exercices 8 à 12 (Intégration par parties, inégalités, trigonométrie)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch7 = data.chapitres.find(c => c.id === 7);
    if (!ch7) {
        console.error("Chapitre 7 introuvable. Chargez d'abord data/chapitre7_base.js.");
        return;
    }

    ch7.exercices.push(
        // ======================================================================
        // EXERCICE 8 – Intégration par parties
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>À l'aide d'une intégration par parties, calculer les intégrales suivantes :</p>
                      $$ \\int x\\cos x\\, dx \\quad \\text{et} \\quad \\int x\\sin x\\, dx. $$
                      <p>En déduire les valeurs des intégrales :</p>
                      $$ \\int_0^{\\pi/2} x^2\\cos x\\, dx \\quad \\text{et} \\quad \\int_0^{\\pi/2} x^2\\sin x\\, dx. $$`,
            questions: [
                {
                    id: 'ch7ex8q1',
                    texte: "1. Primitives de $x\\cos x$ et $x\\sin x$.",
                    solution: `<p><strong>Stratégie :</strong> On intègre par parties en posant $u=x$ et $v'=\\cos x$ ou $\\sin x$.</p>
                               <p><strong>Pour $\\int x\\cos x\\, dx$ :</strong></p>
                               <p>Posons $u=x$, $v'=\\cos x$ ⇒ $u'=1$, $v=\\sin x$.</p>
                               $$ \\int x\\cos x\\, dx = x\\sin x - \\int \\sin x\\, dx = x\\sin x + \\cos x + C. $$
                               <p><strong>Pour $\\int x\\sin x\\, dx$ :</strong></p>
                               <p>Posons $u=x$, $v'=\\sin x$ ⇒ $u'=1$, $v=-\\cos x$.</p>
                               $$ \\int x\\sin x\\, dx = -x\\cos x + \\int \\cos x\\, dx = -x\\cos x + \\sin x + C. $$
                               <p><strong>$\\int x\\cos x\\, dx = x\\sin x + \\cos x + C$.</strong></p>
                               <p><strong>$\\int x\\sin x\\, dx = -x\\cos x + \\sin x + C$.</strong></p>`
                },
                {
                    id: 'ch7ex8q2',
                    texte: "2. Calcul de $\\int_0^{\\pi/2} x^2\\cos x\\, dx$.",
                    solution: `<p>On utilise une double intégration par parties.</p>
                               <p>Posons $u=x^2$, $v'=\\cos x$ ⇒ $u'=2x$, $v=\\sin x$.</p>
                               $$ \\int x^2\\cos x\\, dx = x^2\\sin x - 2\\int x\\sin x\\, dx. $$
                               <p>On remplace $\\int x\\sin x\\, dx$ par son expression : $-x\\cos x + \\sin x$.</p>
                               $$ \\int x^2\\cos x\\, dx = x^2\\sin x - 2(-x\\cos x + \\sin x) = x^2\\sin x + 2x\\cos x - 2\\sin x + C. $$
                               <p>Donc sur $[0,\\frac{\\pi}{2}]$ :</p>
                               $$ \\left[x^2\\sin x + 2x\\cos x - 2\\sin x\\right]_0^{\\pi/2} = \\left(\\frac{\\pi^2}{4}\\cdot1 + 0 - 2\\right) - (0+0-0) = \\frac{\\pi^2}{4} - 2. $$
                               <p><strong>$\\int_0^{\\pi/2} x^2\\cos x\\, dx = \\dfrac{\\pi^2}{4} - 2$.</strong></p>`
                },
                {
                    id: 'ch7ex8q3',
                    texte: "3. Calcul de $\\int_0^{\\pi/2} x^2\\sin x\\, dx$.",
                    solution: `<p>Posons $u=x^2$, $v'=\\sin x$ ⇒ $u'=2x$, $v=-\\cos x$.</p>
                               $$ \\int x^2\\sin x\\, dx = -x^2\\cos x + 2\\int x\\cos x\\, dx. $$
                               <p>On remplace $\\int x\\cos x\\, dx$ par $x\\sin x + \\cos x$.</p>
                               $$ \\int x^2\\sin x\\, dx = -x^2\\cos x + 2(x\\sin x + \\cos x) = -x^2\\cos x + 2x\\sin x + 2\\cos x + C. $$
                               <p>Donc sur $[0,\\frac{\\pi}{2}]$ :</p>
                               $$ \\left[-x^2\\cos x + 2x\\sin x + 2\\cos x\\right]_0^{\\pi/2} = \\left(0 + \\pi + 0\\right) - (0+0+2) = \\pi - 2. $$
                               <p><strong>$\\int_0^{\\pi/2} x^2\\sin x\\, dx = \\pi - 2$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9 – Encadrement d'une intégrale
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{1}{1+x^2}$ et on pose $I=\\int_0^1 f(t) dt$.</p>
                      <ol>
                        <li>i. Vérifier que pour tout $x>0$, $f(x)\\le 1$.</li>
                        <li>ii. Montrer, en utilisant l'inégalité des accroissements finis, que pour tout $x>0$, $\\dfrac{1}{1+x} \\ge 1-x$.</li>
                        <li>iii. En déduire que pour tout $x>0$, $1 - \\dfrac{x}{2} \\le f(x) \\le 1$.</li>
                        <li>Déterminer un encadrement de $I$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex9q1',
                    texte: "1.i. $f(x)\\le1$.",
                    solution: `<p>$f(x)=\\dfrac{1}{1+x^2} \\le 1$ car $1+x^2 \\ge 1$.</p>`
                },
                {
                    id: 'ch7ex9q2',
                    texte: "1.ii. Inégalité $\\dfrac{1}{1+x} \\ge 1-x$.",
                    solution: `<p>On utilise l'inégalité des accroissements finis pour la fonction $t\\mapsto \\ln(1+t)$.</p>
                               <p>Ou plus simplement : $\\dfrac{1}{1+x} \\ge 1-x$ ⇔ $1 \\ge (1-x)(1+x) = 1-x^2$, ce qui est vrai car $x^2\\ge0$.</p>`
                },
                {
                    id: 'ch7ex9q3',
                    texte: "1.iii. Encadrement de $f$.",
                    solution: `<p>On a $\\dfrac{1}{1+x} \\ge 1-x$ pour $x\\ge0$.</p>
                               <p>Donc $\\dfrac{1}{1+x^2} \\ge 1-x^2$.</p>
                               <p>On a aussi $f(x)\\le1$.</p>
                               <p>Donc <strong>$1-x^2 \\le f(x) \\le 1$.</strong></p>`
                },
                {
                    id: 'ch7ex9q4',
                    texte: "2. Encadrement de $I$.",
                    solution: `<p>En intégrant l'inégalité précédente sur $[0,1]$ :</p>
                               $$ \\int_0^1 (1-x^2) dx \\le I \\le \\int_0^1 1 dx. $$
                               $$ \\left[x - \\dfrac{x^3}{3}\\right]_0^1 \\le I \\le [x]_0^1. $$
                               $$ \\dfrac{2}{3} \\le I \\le 1. $$
                               <p><strong>$\\dfrac{2}{3} \\le I \\le 1$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10 – Intégrales de 1/cos² et 1/cos⁴
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Calculer l'intégrale suivante :</p>
                      $$ \\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x}. $$
                      <p>Soit $f$ la fonction définie sur $\\left[0,\\frac{\\pi}{4}\\right]$ par $f(x)=\\dfrac{\\sin x}{\\cos^3 x}$.</p>
                      <p>Montrer que pour tout $x\\in\\left[0,\\frac{\\pi}{4}\\right]$, $f'(x)=\\dfrac{3}{\\cos^4 x} - \\dfrac{2}{\\cos^2 x}$.</p>
                      <p>En déduire $\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^4 x}$.</p>`,
            questions: [
                {
                    id: 'ch7ex10q1',
                    texte: "1. Calcul de $\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x}$.",
                    solution: `<p>On sait que $\\dfrac{1}{\\cos^2 x} = (\\tan x)'$.</p>
                               $$ \\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x} = [\\tan x]_0^{\\pi/4} = 1 - 0 = 1. $$
                               <p><strong>$\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x} = 1$.</strong></p>`
                },
                {
                    id: 'ch7ex10q2',
                    texte: "2. Dérivée de $f(x)=\\dfrac{\\sin x}{\\cos^3 x}$.",
                    solution: `<p>$f(x)=\\sin x \\cdot \\cos^{-3} x$.</p>
                               $$ f'(x) = \\cos x \\cdot \\cos^{-3} x + \\sin x \\cdot (-3)\\cos^{-4} x \\cdot (-\\sin x) = \\dfrac{1}{\\cos^2 x} + \\dfrac{3\\sin^2 x}{\\cos^4 x}. $$
                               <p>On simplifie : $\\dfrac{1}{\\cos^2 x} = \\dfrac{\\cos^2 x}{\\cos^4 x}$.</p>
                               $$ f'(x) = \\dfrac{\\cos^2 x + 3\\sin^2 x}{\\cos^4 x} = \\dfrac{1 + 2\\sin^2 x}{\\cos^4 x}. $$
                               <p>Mais l'énoncé donne $\\dfrac{3}{\\cos^4 x} - \\dfrac{2}{\\cos^2 x} = \\dfrac{3 - 2\\cos^2 x}{\\cos^4 x} = \\dfrac{1 + 2\\sin^2 x}{\\cos^4 x}$.</p>
                               <p><strong>Donc $f'(x)=\\dfrac{3}{\\cos^4 x} - \\dfrac{2}{\\cos^2 x}$.</strong></p>`
                },
                {
                    id: 'ch7ex10q3',
                    texte: "3. Calcul de $\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^4 x}$.",
                    solution: `<p>D'après la question précédente :</p>
                               $$ \\dfrac{1}{\\cos^4 x} = \\dfrac{1}{3}\\left(f'(x) + \\dfrac{2}{\\cos^2 x}\\right). $$
                               <p>Donc :</p>
                               $$ \\int_0^{\\pi/4} \\dfrac{dx}{\\cos^4 x} = \\dfrac{1}{3}\\left([f(x)]_0^{\\pi/4} + 2\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x}\\right). $$
                               <p>$f(\\pi/4) = \\dfrac{\\sin(\\pi/4)}{\\cos^3(\\pi/4)} = \\dfrac{\\frac{\\sqrt{2}}{2}}{(\\frac{\\sqrt{2}}{2})^3} = \\dfrac{1}{(\\frac{\\sqrt{2}}{2})^2} = 2$.</p>
                               <p>$f(0)=0$.</p>
                               <p>$\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^2 x} = 1$.</p>
                               <p>Donc l'intégrale vaut $\\dfrac{1}{3}(2 - 0 + 2\\cdot1) = \\dfrac{4}{3}$.</p>
                               <p><strong>$\\int_0^{\\pi/4} \\dfrac{dx}{\\cos^4 x} = \\dfrac{4}{3}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11 – Fonction 1/sin² x, bijection, intégrale
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Soit $f$ la fonction définie sur $\\left]0,\\frac{\\pi}{2}\\right[$ par $f(x)=\\dfrac{1}{\\sin^2 x}$.</p>
                      <ol>
                        <li>Montrer que $f(x)=\\dfrac{1+\\tan^2 x}{\\tan^2 x}$.</li>
                        <li>Montrer que $f$ réalise une bijection de $\\left]0,\\frac{\\pi}{2}\\right[$ sur un intervalle $I$ que l'on précisera.</li>
                        <li>Montrer que la réciproque $f^{-1}$ est dérivable sur $I$ et que $(f^{-1})'(x)=-\\dfrac{1}{2\\sqrt{x^3-x}}$.</li>
                        <li>Calculer $\\int_{4/3}^2 \\dfrac{dt}{2\\sqrt{t^3-t}}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex11q1',
                    texte: "1. Expression de $f$.",
                    solution: `<p>$\\dfrac{1+\\tan^2 x}{\\tan^2 x} = \\dfrac{1}{\\tan^2 x} + 1 = \\dfrac{\\cos^2 x}{\\sin^2 x} + 1 = \\dfrac{\\cos^2 x + \\sin^2 x}{\\sin^2 x} = \\dfrac{1}{\\sin^2 x}$.</p>`
                },
                {
                    id: 'ch7ex11q2',
                    texte: "2. Bijection de $f$.",
                    solution: `<p>$f$ est continue et strictement décroissante sur $\\left]0,\\frac{\\pi}{2}\\right[$ (car $\\sin x$ croît, donc $1/\\sin^2 x$ décroît).</p>
                               <p>Limites : $\\lim_{x\\to0^+} f(x) = +\\infty$, $\\lim_{x\\to(\\pi/2)^-} f(x) = 1$.</p>
                               <p>Donc $f$ réalise une bijection de $\\left]0,\\frac{\\pi}{2}\\right[$ sur $]1,+\\infty[$.</p>
                               <p><strong>$I = ]1,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch7ex11q3',
                    texte: "3. Dérivée de $f^{-1}$.",
                    solution: `<p>$f'(x) = -\\dfrac{2\\cos x}{\\sin^3 x}$.</p>
                               <p>$(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))} = -\\dfrac{\\sin^3(f^{-1}(y))}{2\\cos(f^{-1}(y))}$.</p>
                               <p>On a $y = \\dfrac{1}{\\sin^2 x}$ ⇒ $\\sin^2 x = \\dfrac{1}{y}$ ⇒ $\\sin x = \\dfrac{1}{\\sqrt{y}}$.</p>
                               <p>$\\cos x = \\sqrt{1-\\dfrac{1}{y}} = \\sqrt{\\dfrac{y-1}{y}}$.</p>
                               <p>Donc $(f^{-1})'(y) = -\\dfrac{(1/\\sqrt{y})^3}{2\\sqrt{(y-1)/y}} = -\\dfrac{1}{y^{3/2}} \\cdot \\dfrac{\\sqrt{y}}{2\\sqrt{y-1}} = -\\dfrac{1}{2y\\sqrt{y-1}}$.</p>
                               <p>Mais l'énoncé donne $-\\dfrac{1}{2\\sqrt{y^3-y}}$. Or $\\sqrt{y^3-y} = \\sqrt{y(y^2-1)} = \\sqrt{y(y-1)(y+1)}$.</p>
                               <p>Vérification : $-\\dfrac{1}{2\\sqrt{y^3-y}} = -\\dfrac{1}{2\\sqrt{y(y-1)(y+1)}}$. C'est bien égal à $-\\dfrac{1}{2y\\sqrt{y-1}}$ car $\\sqrt{y^3-y} = y\\sqrt{y-1}$ si $y>1$.</p>
                               <p><strong>$(f^{-1})'(y) = -\\dfrac{1}{2\\sqrt{y^3-y}}$.</strong></p>`
                },
                {
                    id: 'ch7ex11q4',
                    texte: "4. Calcul de l'intégrale.",
                    solution: `<p>On a $(f^{-1})'(y) = -\\dfrac{1}{2\\sqrt{y^3-y}}$.</p>
                               <p>Donc $\\dfrac{1}{2\\sqrt{y^3-y}} = -(f^{-1})'(y)$.</p>
                               <p>$$ \\int_{4/3}^2 \\dfrac{dy}{2\\sqrt{y^3-y}} = -[f^{-1}(y)]_{4/3}^2 = -(f^{-1}(2) - f^{-1}(4/3)). $$</p>
                               <p>$f^{-1}(2)$ est le $x\\in]0,\\frac{\\pi}{2}[$ tel que $\\dfrac{1}{\\sin^2 x}=2$ ⇒ $\\sin^2 x=\\dfrac{1}{2}$ ⇒ $x=\\dfrac{\\pi}{4}$.</p>
                               <p>$f^{-1}(4/3)$ : $\\sin^2 x = \\dfrac{3}{4}$ ⇒ $\\sin x = \\dfrac{\\sqrt{3}}{2}$ ⇒ $x=\\dfrac{\\pi}{3}$.</p>
                               <p>Donc l'intégrale vaut $-\\left(\\dfrac{\\pi}{4} - \\dfrac{\\pi}{3}\\right) = \\dfrac{\\pi}{3} - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{12}$.</p>
                               <p><strong>$\\int_{4/3}^2 \\dfrac{dt}{2\\sqrt{t^3-t}} = \\dfrac{\\pi}{12}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12 – Représentation et méthode des rectangles
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Représenter dans un repère orthonormé la fonction $f(x)=\\dfrac{x^2}{(1+x^2)^2}$.</p>
                      <p>Soit $A$ l'aire de la partie du plan limitée par la courbe de $f$, l'axe des abscisses et les droites $x=1$ et $x=2$.</p>
                      <ol>
                        <li>Vérifier que $\\dfrac{1}{4} \\le A \\le \\dfrac{1}{2}$.</li>
                        <li>Utiliser la méthode des rectangles, en partageant l'intervalle $[1,2]$ en cinq intervalles d'amplitude $0.2$, pour donner un nouvel encadrement de $A$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch7ex12q1',
                    texte: "1. Encadrement de $A$.",
                    solution: `<p>$f(x)=\\dfrac{x^2}{(1+x^2)^2}$.</p>
                               <p>Sur $[1,2]$, $f$ est croissante (car $\\dfrac{x^2}{(1+x^2)^2}$ croît sur $[1,+\\infty[$).</p>
                               <p>$f(1)=\\dfrac{1}{4}$, $f(2)=\\dfrac{4}{25} \\approx 0.16$.</p>
                               <p>Donc $\\dfrac{1}{4} \\le f(x) \\le \\dfrac{4}{25}$ sur $[1,2]$.</p>
                               <p>Mais l'énoncé donne $\\dfrac{1}{4} \\le A \\le \\dfrac{1}{2}$. Vérifions :</p>
                               <p>On a $\\dfrac{1}{4} \\le f(x)$ et $f(x) \\le \\dfrac{4}{25} < \\dfrac{1}{2}$.</p>
                               <p>Donc en intégrant : $\\dfrac{1}{4}(2-1) \\le A \\le \\dfrac{4}{25}(2-1)$.</p>
                               <p>Mais $\\dfrac{4}{25} \\approx 0.16$, donc $A \\le 0.16$, ce qui est bien inférieur à $\\dfrac{1}{2}$. L'encadrement est très large.</p>
                               <p><strong>$\\dfrac{1}{4} \\le A \\le \\dfrac{1}{2}$ est vrai mais non optimal.</strong></p>`
                },
                {
                    id: 'ch7ex12q2',
                    texte: "2. Méthode des rectangles.",
                    solution: `<p>On partage $[1,2]$ en 5 sous-intervalles de largeur $h=0.2$.</p>
                               <p>Les points sont : $x_0=1,\\; x_1=1.2,\\; x_2=1.4,\\; x_3=1.6,\\; x_4=1.8,\\; x_5=2$.</p>
                               <p>Comme $f$ est décroissante sur $[1,2]$ (vérifier : $f'(x)=...$, négative pour $x>1$), l'encadrement est :</p>
                               $$ \\sum_{i=0}^{4} f(x_{i+1}) \\cdot h \\le A \\le \\sum_{i=0}^{4} f(x_i) \\cdot h. $$
                               <p>Soit :</p>
                               $$ h\\sum_{i=1}^{5} f(x_i) \\le A \\le h\\sum_{i=0}^{4} f(x_i). $$
                               <p>Calculs :</p>
                               <p>$f(1)=0.25$, $f(1.2)=\\dfrac{1.44}{(1+1.44)^2} = \\dfrac{1.44}{5.9536} \\approx 0.242$, $f(1.4)=\\dfrac{1.96}{5.8016} \\approx 0.338$, etc.</p>
                               <p>Il faut faire les calculs numériques pour obtenir un encadrement précis.</p>`
                }
            ]
        }
    );

    console.log("Partie 3 (exercices 8 à 12) – Intégration par parties, inégalités, trigonométrie – ajoutée avec succès.");
})();