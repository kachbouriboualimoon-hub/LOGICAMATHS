// data/chapitre3.js – Chapitre 3 : Dérivabilité
// Solutions conformes aux PDF "énoncé chap3.pdf" et "corr chap3.pdf"
// Programme Tunisien 4ème Sciences Expérimentales
// Corrections détaillées, précises, rigoureuses avec tableaux de variations et graphiques interactifs
// Les images si demandées doivent être placées dans le dossier assets/images/chapitre3/

data.chapitres.push({
    id: 3,
    titre: "Dérivabilité",
    resume: "Nombre dérivé, tangentes, théorème de Rolle, accroissements finis.",
    rappel: `<p><strong>Nombre dérivé :</strong> $f'(a) = \\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a} = \\lim_{h\\to 0} \\frac{f(a+h)-f(a)}{h}$.</p>
             <p><strong>Équation de la tangente :</strong> $y = f'(a)(x-a) + f(a)$.</p>
             <p><strong>Approximation affine :</strong> $f(a+h) \\approx f(a) + h f'(a)$ pour $h$ proche de $0$.</p>
             <p><strong>Théorème de Rolle :</strong> Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que $f'(c)=0$.</p>
             <p><strong>Théorème des accroissements finis :</strong> Si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c\\in]a,b[$ tel que $f(b)-f(a)=f'(c)(b-a)$.</p>
             <p><strong>Inégalité des accroissements finis :</strong> Si $m \\le f'(x) \\le M$ sur $]a,b[$, alors $m(b-a) \\le f(b)-f(a) \\le M(b-a)$.</p>
             <p><strong>Dérivabilité à gauche/droite :</strong> $f$ est dérivable en $a$ si et seulement si $f'_g(a)=f'_d(a)$.</p>`,
    theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Rolle) :</strong> Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que $f'(c)=0$.</div>
                <div class="theoreme-block"><strong>Théorème 2 (Accroissements finis) :</strong> Si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c\\in]a,b[$ tel que $f(b)-f(a)=f'(c)(b-a)$. <div class="remarque">💡 Interprétation géométrique : il existe une tangente parallèle à la corde $(AB)$.</div></div>
                <div class="theoreme-block"><strong>Théorème 3 (Inégalité des accroissements finis) :</strong> Si $m \\le f'(x) \\le M$ sur $]a,b[$, alors $m(b-a) \\le f(b)-f(a) \\le M(b-a)$.</div>
                <div class="theoreme-block"><strong>Théorème 4 (Sens de variation) :</strong> Si $f'(x) > 0$ sur $I$, alors $f$ est strictement croissante sur $I$. Si $f'(x) < 0$, alors $f$ est strictement décroissante sur $I$.</div>
                <div class="theoreme-block"><strong>Théorème 5 (Extrema locaux) :</strong> Si $f$ admet un extremum local en $a$ et est dérivable en $a$, alors $f'(a)=0$. Si $f'$ s'annule en $a$ en changeant de signe, alors $f$ admet un extremum local en $a$.</div>
                <div class="theoreme-block"><strong>Théorème 6 (Point d'inflexion) :</strong> Si $f''$ s'annule en $a$ en changeant de signe, alors $I(a,f(a))$ est un point d'inflexion de la courbe.</div>`,
    methodes: `<p><strong>•</strong> Pour montrer qu'une fonction est dérivable en $a$, calculer $\\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a}$.</p>
              <p><strong>•</strong> Pour les fonctions définies par morceaux, étudier la dérivabilité à gauche et à droite au point de raccord.</p>
              <p><strong>•</strong> Pour utiliser le théorème de Rolle, vérifier les trois conditions : continuité sur $[a,b]$, dérivabilité sur $]a,b[$, et $f(a)=f(b)$.</p>
              <p><strong>•</strong> Pour les inégalités, utiliser l'inégalité des accroissements finis en encadrant $f'$.</p>
              <p><strong>•</strong> Approximation affine : $f(a+h) \\approx f(a) + h f'(a)$ pour $h$ voisin de $0$.</p>
              <p><strong>•</strong> Pour les tangentes parallèles, résoudre $f'(x)=m$ où $m$ est la pente donnée.</p>`,
    astuces: `<div class="astuce-box">💡 <strong>Simplifier avant de dériver :</strong> Factoriser ou simplifier l'expression pour éviter des calculs lourds.</div>
              <div class="astuce-box">💡 <strong>Pour les limites du type $\\frac{0}{0}$ avec racines :</strong> Utiliser la quantité conjuguée.</div>
              <div class="astuce-box">💡 <strong>Pour montrer qu'une équation a une unique solution :</strong> Utiliser le TVI après avoir montré la stricte monotonie.</div>
              <div class="astuce-box">💡 <strong>Pour les tangentes horizontales :</strong> Résoudre $f'(x)=0$.</div>`,
    erreurs: `<div class="erreur-box">⚠️ <strong>Oublier de vérifier la continuité</strong> avant d'appliquer Rolle ou les accroissements finis.</div>
              <div class="erreur-box">⚠️ <strong>Confondre dérivabilité à gauche et à droite</strong> pour les fonctions définies par morceaux.</div>
              <div class="erreur-box">⚠️ <strong>Oublier le facteur $h$</strong> dans l'approximation affine : $f(a+h) \\approx f(a) + h f'(a)$.</div>
              <div class="erreur-box">⚠️ <strong>Appliquer la formule de dérivation d'un quotient</strong> sans vérifier que le dénominateur ne s'annule pas.</div>
              <div class="erreur-box">⚠️ <strong>Confondre point d'inflexion et extremum local</strong> : un point d'inflexion est un point où la courbe traverse sa tangente.</div>`,
    quiz: {
        questions: [
            { type: 'qcm', text: 'La dérivée de $\\cos(\\pi x^2)$ est :', options: ['$2\\pi x \\sin(\\pi x^2)$', '$2\\pi x \\cos(\\pi x^2)$', '$-2\\pi x \\sin(\\pi x^2)$'], correct: 2 },
            { type: 'qcm', text: 'Si $f$ est dérivable sur $[-2,2]$ avec $f\'$ positive sur $[-2,-1]$ et négative sur $[-1,0]$, alors :', options: ['$f(-2)<f(-1)$', '$f(-1)<f(0)$', '$f(0)<f(1)$'], correct: 0 },
            { type: 'qcm', text: 'La courbe de $x\\mapsto \\frac{1}{20}x^5-4x^2$ admet un point d\'inflexion d\'abscisse :', options: ['$0$', '$-2$', '$2$'], correct: 2 },
            { type: 'qcm', text: 'La courbe de $f(x)=(x-1)(x-2)(x-3)$ admet :', options: ['deux tangentes horizontales', 'une tangente horizontale', 'aucune tangente horizontale'], correct: 0 },
            { type: 'vf', text: 'Si $f$ est dérivable sur $[-1,2]$ avec $f(-1)=2$ et $f(2)=-1$, alors $f\'(x)=-1$ admet au moins une solution dans $[-1,2]$.', correct: true },
            { type: 'vf', text: 'Si le produit de deux fonctions est dérivable en $a$, alors chacune des deux fonctions est dérivable en $a$.', correct: false },
            { type: 'vf', text: 'La courbe de $f:x\\mapsto (x^2-x)(x-2)$ admet exactement deux tangentes horizontales.', correct: true },
            { type: 'vf', text: 'Si $|f\'(t)|\\le 2$ sur $[2,5]$, alors $|f(5)-f(2)|\\le 6$.', correct: true }
        ]
    },
    exercices: [
        // ======================================================================
        // EXERCICE 1
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Le plan est muni d'un repère orthogonal. Dans chacun des cas ci-dessous, justifier la dérivabilité de $f$ en $a$ et donner une équation de la tangente au point d'abscisse $a$.</p>
                      <p>1. $f(x)=\\dfrac{x+1}{x-1}$, $a=2$.</p>
                      <p>2. $f(x)=\\dfrac{1}{4}x^4+\\dfrac{1}{2}x^3-x$, $a=0$.</p>
                      <p>3. $f(x)=\\sqrt{x^2-4}$, $a=-3$.</p>
                      <p>4. $f(x)=\\sqrt{|2x+1|}$, $a=-1$.</p>`,
            questions: [
                {
                    id: 'ch3ex1q1',
                    texte: "1. $f(x)=\\dfrac{x+1}{x-1}$, $a=2$.",
                    solution: `<p><strong>Dérivabilité :</strong> On calcule le taux d'accroissement.</p>
                              <p>$\\lim_{x\\to 2} \\dfrac{f(x)-f(2)}{x-2} = \\lim_{x\\to 2} \\dfrac{\\frac{x+1}{x-1} - 3}{x-2}$.</p>
                              <p>$= \\lim_{x\\to 2} \\dfrac{\\frac{x+1-3x+3}{x-1}}{x-2} = \\lim_{x\\to 2} \\dfrac{\\frac{-2x+4}{x-1}}{x-2} = \\lim_{x\\to 2} \\dfrac{-2(x-2)}{(x-1)(x-2)} = \\lim_{x\\to 2} \\dfrac{-2}{x-1} = -2$.</p>
                              <p>Donc <strong>$f$ est dérivable en $2$ et $f'(2)=-2$</strong>.</p>
                              <p><strong>Tangente :</strong> $y = f'(2)(x-2) + f(2)$.</p>
                              <p>$f(2)=3$, donc $y = -2(x-2) + 3 = -2x + 7$.</p>
                              <p><strong>$T : y = -2x + 7$</strong>.</p>`
                },
                {
                    id: 'ch3ex1q2',
                    texte: "2. $f(x)=\\dfrac{1}{4}x^4+\\dfrac{1}{2}x^3-x$, $a=0$.",
                    solution: `<p><strong>Dérivabilité :</strong> $f$ est un polynôme, donc dérivable sur $\\mathbb{R}$.</p>
                              <p>$f'(x) = x^3 + \\dfrac{3}{2}x^2 - 1$.</p>
                              <p>$f'(0) = -1$ et $f(0)=0$.</p>
                              <p><strong>Tangente :</strong> $y = f'(0)(x-0) + f(0) = -x$.</p>
                              <p><strong>$T : y = -x$</strong>.</p>`
                },
                {
                    id: 'ch3ex1q3',
                    texte: "3. $f(x)=\\sqrt{x^2-4}$, $a=-3$.",
                    solution: `<p><strong>Dérivabilité :</strong> On calcule le taux d'accroissement.</p>
                              <p>$\\lim_{x\\to -3} \\dfrac{f(x)-f(-3)}{x+3} = \\lim_{x\\to -3} \\dfrac{\\sqrt{x^2-4} - \\sqrt{5}}{x+3}$.</p>
                              <p>On multiplie par la quantité conjuguée :</p>
                              <p>$= \\lim_{x\\to -3} \\dfrac{x^2-4-5}{(x+3)(\\sqrt{x^2-4}+\\sqrt{5})} = \\lim_{x\\to -3} \\dfrac{x^2-9}{(x+3)(\\sqrt{x^2-4}+\\sqrt{5})}$.</p>
                              <p>$= \\lim_{x\\to -3} \\dfrac{(x-3)(x+3)}{(x+3)(\\sqrt{x^2-4}+\\sqrt{5})} = \\lim_{x\\to -3} \\dfrac{x-3}{\\sqrt{x^2-4}+\\sqrt{5}}$.</p>
                              <p>$= \\dfrac{-6}{2\\sqrt{5}} = -\\dfrac{3}{\\sqrt{5}}$.</p>
                              <p><strong>$f$ est dérivable en $-3$ et $f'(-3) = -\\dfrac{3}{\\sqrt{5}}$</strong>.</p>
                              <p><strong>Tangente :</strong> $y = f'(-3)(x+3) + f(-3)$.</p>
                              <p>$f(-3)=\\sqrt{5}$, donc $y = -\\dfrac{3}{\\sqrt{5}}(x+3) + \\sqrt{5}$.</p>
                              <p><strong>$T : y = -\\dfrac{3}{\\sqrt{5}}x - \\dfrac{9}{\\sqrt{5}} + \\sqrt{5}$</strong>.</p>`
                },
                {
                    id: 'ch3ex1q4',
                    texte: "4. $f(x)=\\sqrt{|2x+1|}$, $a=-1$.",
                    solution: `<p><strong>Dérivabilité :</strong> Pour $x\\le -\\dfrac{1}{2}$, $|2x+1| = -2x-1$.</p>
                              <p>Au voisinage de $-1$, $f(x)=\\sqrt{-2x-1}$.</p>
                              <p>$\\lim_{x\\to -1} \\dfrac{f(x)-f(-1)}{x+1} = \\lim_{x\\to -1} \\dfrac{\\sqrt{-2x-1} - 1}{x+1}$.</p>
                              <p>Multiplions par la quantité conjuguée :</p>
                              <p>$= \\lim_{x\\to -1} \\dfrac{-2x-1-1}{(x+1)(\\sqrt{-2x-1}+1)} = \\lim_{x\\to -1} \\dfrac{-2(x+1)}{(x+1)(\\sqrt{-2x-1}+1)}$.</p>
                              <p>$= \\lim_{x\\to -1} \\dfrac{-2}{\\sqrt{-2x-1}+1} = -1$.</p>
                              <p><strong>$f$ est dérivable en $-1$ et $f'(-1) = -1$</strong>.</p>
                              <p>$f(-1)=1$.</p>
                              <p><strong>Tangente :</strong> $y = -1(x+1) + 1 = -x$.</p>
                              <p><strong>$T : y = -x$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>En utilisant la définition de la dérivabilité en un réel, calculer les limites ci-dessous.</p>
                      $$ \\lim_{x\\to 1} \\frac{\\sqrt{x+1}-\\sqrt{2}}{x-1},\\qquad \\lim_{x\\to 3} \\frac{x-\\sqrt{x-2}-2}{x-3}, $$
                      $$ \\lim_{x\\to 0} \\frac{(x+1)^{195}-1}{x},\\qquad \\lim_{x\\to 1} \\frac{x^5+x^4+x^3+x^2-4}{x-1}. $$`,
            questions: [
                {
                    id: 'ch3ex2q1',
                    texte: "1. $\\lim_{x\\to 1} \\dfrac{\\sqrt{x+1}-\\sqrt{2}}{x-1}$.",
                    solution: `<p>Soit $f(x)=\\sqrt{x+1}$. $f$ est dérivable sur $]-1,+\\infty[$ et $f'(x)=\\dfrac{1}{2\\sqrt{x+1}}$.</p>
                              <p>$\\lim_{x\\to 1} \\dfrac{f(x)-f(1)}{x-1} = f'(1) = \\dfrac{1}{2\\sqrt{2}}$.</p>
                              <p><strong>Résultat : $\\dfrac{1}{2\\sqrt{2}}$</strong>.</p>`
                },
                {
                    id: 'ch3ex2q2',
                    texte: "2. $\\lim_{x\\to 3} \\dfrac{x-\\sqrt{x-2}-2}{x-3}$.",
                    solution: `<p>Soit $f(x)=x-\\sqrt{x-2}$. $f$ est dérivable sur $]2,+\\infty[$ et $f'(x)=1-\\dfrac{1}{2\\sqrt{x-2}}$.</p>
                              <p>$\\lim_{x\\to 3} \\dfrac{f(x)-f(3)}{x-3} = f'(3) = 1 - \\dfrac{1}{2\\sqrt{1}} = \\dfrac{1}{2}$.</p>
                              <p><strong>Résultat : $\\dfrac{1}{2}$</strong>.</p>`
                },
                {
                    id: 'ch3ex2q3',
                    texte: "3. $\\lim_{x\\to 0} \\dfrac{(x+1)^{195}-1}{x}$.",
                    solution: `<p>Soit $f(x)=(x+1)^{195}$. $f$ est dérivable sur $\\mathbb{R}$ et $f'(x)=195(x+1)^{194}$.</p>
                              <p>$\\lim_{x\\to 0} \\dfrac{f(x)-f(0)}{x-0} = f'(0) = 195$.</p>
                              <p><strong>Résultat : $195$</strong>.</p>`
                },
                {
                    id: 'ch3ex2q4',
                    texte: "4. $\\lim_{x\\to 1} \\dfrac{x^5+x^4+x^3+x^2-4}{x-1}$.",
                    solution: `<p>Soit $f(x)=x^5+x^4+x^3+x^2$. $f$ est dérivable sur $\\mathbb{R}$ et $f'(x)=5x^4+4x^3+3x^2+2x$.</p>
                              <p>$\\lim_{x\\to 1} \\dfrac{f(x)-f(1)}{x-1} = f'(1) = 5+4+3+2 = 14$.</p>
                              <p><strong>Résultat : $14$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Soit $f(x)=|x^2-4|$.</p>
                      <p>1. Étudier la dérivabilité de $f$ en $2$ et en $-2$.</p>
                      <p>2. Construire, dans un repère orthonormé, les demi-tangentes à la courbe de $f$ aux points d'abscisses $2$ et $-2$.</p>`,
            questions: [
                {
                    id: 'ch3ex3q1',
                    texte: "1. Dérivabilité en $2$.",
                    solution: `<p>On a $f(x)=|x^2-4|$.</p>
                              <p>Pour $x<2$ proche de $2$, $x^2-4<0$, donc $f(x)=-(x^2-4)=4-x^2$.</p>
                              <p>$\\lim_{x\\to 2^-} \\dfrac{f(x)-f(2)}{x-2} = \\lim_{x\\to 2^-} \\dfrac{4-x^2-0}{x-2} = \\lim_{x\\to 2^-} \\dfrac{-(x-2)(x+2)}{x-2} = \\lim_{x\\to 2^-} -(x+2) = -4$.</p>
                              <p>Pour $x>2$ proche de $2$, $x^2-4>0$, donc $f(x)=x^2-4$.</p>
                              <p>$\\lim_{x\\to 2^+} \\dfrac{f(x)-f(2)}{x-2} = \\lim_{x\\to 2^+} \\dfrac{x^2-4}{x-2} = \\lim_{x\\to 2^+} (x+2) = 4$.</p>
                              <p>Les limites à gauche et à droite sont différentes ($-4 \\neq 4$).</p>
                              <p><strong>$f$ n'est pas dérivable en $2$</strong>.</p>`
                },
                {
                    id: 'ch3ex3q2',
                    texte: "1. Dérivabilité en $-2$.",
                    solution: `<p>Pour $x<-2$ proche de $-2$, $x^2-4>0$, donc $f(x)=x^2-4$.</p>
                              <p>$\\lim_{x\\to -2^-} \\dfrac{f(x)-f(-2)}{x+2} = \\lim_{x\\to -2^-} \\dfrac{x^2-4}{x+2} = \\lim_{x\\to -2^-} (x-2) = -4$.</p>
                              <p>Pour $x>-2$ proche de $-2$, $x^2-4<0$, donc $f(x)=4-x^2$.</p>
                              <p>$\\lim_{x\\to -2^+} \\dfrac{f(x)-f(-2)}{x+2} = \\lim_{x\\to -2^+} \\dfrac{4-x^2}{x+2} = \\lim_{x\\to -2^+} \\dfrac{-(x-2)(x+2)}{x+2} = \\lim_{x\\to -2^+} -(x-2) = 4$.</p>
                              <p>Les limites à gauche et à droite sont différentes ($-4 \\neq 4$).</p>
                              <p><strong>$f$ n'est pas dérivable en $-2$</strong>.</p>`
                },
                {
                    id: 'ch3ex3q3',
                    texte: "2. Demi-tangentes.",
                    solution: `
                        <p>En $x=2$, $f(2)=0$.</p>
                        <p>Demi-tangente à gauche : pente $-4$, équation $y=-4(x-2)$.</p>
                        <p>Demi-tangente à droite : pente $4$, équation $y=4(x-2)$.</p>
                        <p>En $x=-2$, $f(-2)=0$.</p>
                        <p>Demi-tangente à gauche : pente $-4$, équation $y=-4(x+2)$.</p>
                        <p>Demi-tangente à droite : pente $4$, équation $y=4(x+2)$.</p>
                        <div id="graph-ex3" class="graph-container" data-fn="abs(x^2-4)" data-xmin="-4" data-xmax="4" data-colors="#2563eb"></div>
                    `
                }
            ]
        },
        // ======================================================================
        // EXERCICE 4
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>1. Donner une approximation affine de $\\dfrac{1}{(1+h)^2}$ pour $h$ voisin de $0$.</p>
                      <p>2. En déduire une estimation des réels $\\dfrac{1}{(1.0000000002)^2}$ et $\\dfrac{1}{(0.9999999998)^2}$.</p>`,
            questions: [
                {
                    id: 'ch3ex4q1',
                    texte: "1. Approximation affine.",
                    solution: `<p>Soit $f(x)=\\dfrac{1}{x^2}$. $f$ est dérivable sur $\\mathbb{R}^*$ et $f'(x)=-\\dfrac{2}{x^3}$.</p>
                              <p>On a $\\dfrac{1}{(1+h)^2} = f(1+h)$.</p>
                              <p>L'approximation affine de $f$ en $1$ est :</p>
                              <p>$f(1+h) \\approx f(1) + h f'(1) = 1 + h(-2) = 1 - 2h$.</p>
                              <p><strong>$\\dfrac{1}{(1+h)^2} \\approx 1 - 2h$</strong>.</p>`
                },
                {
                    id: 'ch3ex4q2',
                    texte: "2. Estimations.",
                    solution: `<p>$\\dfrac{1}{(1.0000000002)^2} = \\dfrac{1}{(1+2\\times 10^{-10})^2} \\approx 1 - 2 \\times 2 \\times 10^{-10} = 1 - 4 \\times 10^{-10} = 0.9999999996$.</p>
                              <p>$\\dfrac{1}{(0.9999999998)^2} = \\dfrac{1}{(1-2\\times 10^{-10})^2} \\approx 1 - 2 \\times (-2 \\times 10^{-10}) = 1 + 4 \\times 10^{-10} = 1.0000000004$.</p>
                              <p><strong>$\\dfrac{1}{(1.0000000002)^2} \\approx 0.9999999996$</strong>.</p>
                              <p><strong>$\\dfrac{1}{(0.9999999998)^2} \\approx 1.0000000004$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5 (10 sous-questions)
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Dans chacun des cas suivants, vérifier que la fonction $f$ est dérivable sur l'intervalle $I$ et déterminer sa fonction dérivée.</p>
                      <p>1. $f(x)=3x^{10}-\\dfrac{5}{4}x^8+3x-10$, $I=\\mathbb{R}$.</p>
                      <p>2. $f(x)=(1-x-3x^3)(x+2x)^3$, $I=\\mathbb{R}$.</p>
                      <p>3. $f(x)=\\dfrac{x^2}{1-x}$, $I=]1,+\\infty[$.</p>
                      <p>4. $f(x)=\\dfrac{(x+1)^3}{x^2}$, $I=[1,+\\infty[$.</p>
                      <p>5. $f(x)=\\cos(3x)-\\sin(2x)$, $I=\\mathbb{R}$.</p>
                      <p>6. $f(x)=\\dfrac{\\sin x}{1-\\cos x}$, $I=]0,\\pi[$.</p>
                      <p>7. $f(x)=(1+\\sin(2x))^3$, $I=\\mathbb{R}$.</p>
                      <p>8. $f(x)=\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)$, $I=[0,1[$.</p>
                      <p>9. $f(x)=\\sqrt{\\dfrac{x-1}{x+1}}$, $I=]1,+\\infty[$.</p>
                      <p>10. $f(x)=\\dfrac{\\sqrt{x}-2}{\\sqrt{x}+2}$, $I=]0,+\\infty[$.</p>`,
            questions: [
                {
                    id: 'ch3ex5q1',
                    texte: "1. $f(x)=3x^{10}-\\dfrac{5}{4}x^8+3x-10$.",
                    solution: `<p>$f$ est un polynôme, donc dérivable sur $\\mathbb{R}$.</p>
                              <p>$f'(x)=30x^9-10x^7+3$.</p>
                              <p><strong>$f'(x)=30x^9-10x^7+3$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q2',
                    texte: "2. $f(x)=(1-x-3x^3)(x+2x)^3$.",
                    solution: `<p>$f$ est un polynôme, donc dérivable sur $\\mathbb{R}$.</p>
                              <p>$f'(x)=(-1-9x^2)(3x)^3 + (1-x-3x^3) \\times 3(3x)^2 \\times 3$ (car $(x+2x)^3=(3x)^3=27x^3$).</p>
                              <p>$f'(x)=(-1-9x^2)(27x^3) + (1-x-3x^3) \\times 81x^2$.</p>
                              <p><strong>$f'(x)=27x^2[(-1-9x^2)x + 3(1-x-3x^3)]$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q3',
                    texte: "3. $f(x)=\\dfrac{x^2}{1-x}$.",
                    solution: `<p>$f$ est une fonction rationnelle, dérivable sur $\\mathbb{R}\\setminus\\{1\\}$, donc sur $]1,+\\infty[$.</p>
                              <p>$f'(x)=\\dfrac{2x(1-x)-x^2(-1)}{(1-x)^2} = \\dfrac{2x-2x^2+x^2}{(1-x)^2} = \\dfrac{2x-x^2}{(1-x)^2}$.</p>
                              <p><strong>$f'(x)=\\dfrac{2x-x^2}{(1-x)^2}$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q4',
                    texte: "4. $f(x)=\\dfrac{(x+1)^3}{x^2}$.",
                    solution: `<p>$f$ est une fonction rationnelle, dérivable sur $\\mathbb{R}^*$, donc sur $[1,+\\infty[$.</p>
                              <p>$f'(x)=\\dfrac{3(x+1)^2 \\times x^2 - (x+1)^3 \\times 2x}{x^4} = \\dfrac{(x+1)^2[3x^2-2x(x+1)]}{x^4}$.</p>
                              <p>$= \\dfrac{(x+1)^2[3x^2-2x^2-2x]}{x^4} = \\dfrac{(x+1)^2(x^2-2x)}{x^4}$.</p>
                              <p><strong>$f'(x)=\\dfrac{(x+1)^2(x-2)}{x^3}$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q5',
                    texte: "5. $f(x)=\\cos(3x)-\\sin(2x)$.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}$ comme somme de fonctions dérivables.</p>
                              <p>$f'(x)=-3\\sin(3x)-2\\cos(2x)$.</p>
                              <p><strong>$f'(x)=-3\\sin(3x)-2\\cos(2x)$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q6',
                    texte: "6. $f(x)=\\dfrac{\\sin x}{1-\\cos x}$.",
                    solution: `<p>Sur $]0,\\pi[$, $1-\\cos x \\neq 0$, donc $f$ est dérivable.</p>
                              <p>$f'(x)=\\dfrac{\\cos x(1-\\cos x) - \\sin x(\\sin x)}{(1-\\cos x)^2} = \\dfrac{\\cos x - \\cos^2 x - \\sin^2 x}{(1-\\cos x)^2}$.</p>
                              <p>$= \\dfrac{\\cos x - (\\cos^2 x + \\sin^2 x)}{(1-\\cos x)^2} = \\dfrac{\\cos x - 1}{(1-\\cos x)^2} = -\\dfrac{1}{1-\\cos x}$.</p>
                              <p><strong>$f'(x)=-\\dfrac{1}{1-\\cos x}$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q7',
                    texte: "7. $f(x)=(1+\\sin(2x))^3$.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}$.</p>
                              <p>$f'(x)=3(1+\\sin(2x))^2 \\times 2\\cos(2x) = 6\\cos(2x)(1+\\sin(2x))^2$.</p>
                              <p><strong>$f'(x)=6\\cos(2x)(1+\\sin(2x))^2$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q8',
                    texte: "8. $f(x)=\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)$.",
                    solution: `<p>Sur $[0,1[$, $\\dfrac{\\pi}{2}x \\in [0,\\dfrac{\\pi}{2}[$, donc $\\tan$ est définie.</p>
                              <p>$f'(x)=2\\tan\\left(\\dfrac{\\pi}{2}x\\right) \\times \\dfrac{\\pi}{2}\\left(1+\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)\\right)$.</p>
                              <p><strong>$f'(x)=\\pi\\tan\\left(\\dfrac{\\pi}{2}x\\right)\\left(1+\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)\\right)$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q9',
                    texte: "9. $f(x)=\\sqrt{\\dfrac{x-1}{x+1}}$.",
                    solution: `<p>Sur $]1,+\\infty[$, $\\dfrac{x-1}{x+1}>0$, donc $f$ est dérivable.</p>
                              <p>$f'(x)=\\dfrac{1}{2\\sqrt{\\frac{x-1}{x+1}}} \\times \\dfrac{(x+1)-(x-1)}{(x+1)^2} = \\dfrac{1}{2\\sqrt{\\frac{x-1}{x+1}}} \\times \\dfrac{2}{(x+1)^2}$.</p>
                              <p>$= \\dfrac{1}{(x+1)^2} \\times \\dfrac{1}{\\sqrt{\\frac{x-1}{x+1}}} = \\dfrac{1}{(x+1)\\sqrt{(x-1)(x+1)}}$.</p>
                              <p><strong>$f'(x)=\\dfrac{1}{(x+1)\\sqrt{x^2-1}}$</strong>.</p>`
                },
                {
                    id: 'ch3ex5q10',
                    texte: "10. $f(x)=\\dfrac{\\sqrt{x}-2}{\\sqrt{x}+2}$.",
                    solution: `<p>Sur $]0,+\\infty[$, $\\sqrt{x}$ est définie et dérivable, et $\\sqrt{x}+2 \\neq 0$.</p>
                              <p>$f'(x)=\\dfrac{\\frac{1}{2\\sqrt{x}}(\\sqrt{x}+2) - (\\sqrt{x}-2)\\frac{1}{2\\sqrt{x}}}{(\\sqrt{x}+2)^2} = \\dfrac{\\frac{1}{2\\sqrt{x}}(\\sqrt{x}+2-\\sqrt{x}+2)}{(\\sqrt{x}+2)^2}$.</p>
                              <p>$= \\dfrac{\\frac{1}{2\\sqrt{x}} \\times 4}{(\\sqrt{x}+2)^2} = \\dfrac{2}{\\sqrt{x}(\\sqrt{x}+2)^2}$.</p>
                              <p><strong>$f'(x)=\\dfrac{2}{\\sqrt{x}(\\sqrt{x}+2)^2}$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Soit $f(x)=x^3-3x$ et $g(x)=x-\\dfrac{4}{x}$.</p>
                      <p>On désigne par $\\mathcal{E}$ et $\\mathcal{E}'$ leurs courbes représentatives.</p>
                      <p>1. Montrer que $\\mathcal{E}$ et $\\mathcal{E}'$ ont deux points communs $A$ et $B$.</p>
                      <p>2. Vérifier qu'en chacun de ces points les deux courbes admettent la même tangente. Donner une équation de ces tangentes.</p>`,
            questions: [
                {
                    id: 'ch3ex6q1',
                    texte: "1. Points communs.",
                    solution: `<p>On résout $f(x)=g(x)$ :</p>
                              <p>$x^3-3x = x - \\dfrac{4}{x} \\Rightarrow x^3-4x+\\dfrac{4}{x}=0 \\Rightarrow x^4-4x^2+4=0$ (pour $x\\neq 0$).</p>
                              <p>Soit $X=x^2$, on a $X^2-4X+4=0 \\Rightarrow (X-2)^2=0 \\Rightarrow X=2$.</p>
                              <p>Donc $x^2=2 \\Rightarrow x=\\sqrt{2}$ ou $x=-\\sqrt{2}$.</p>
                              <p>$f(\\sqrt{2}) = (\\sqrt{2})^3 - 3\\sqrt{2} = 2\\sqrt{2} - 3\\sqrt{2} = -\\sqrt{2}$.</p>
                              <p>$f(-\\sqrt{2}) = -2\\sqrt{2} + 3\\sqrt{2} = \\sqrt{2}$.</p>
                              <p><strong>$A(\\sqrt{2}, -\\sqrt{2})$ et $B(-\\sqrt{2}, \\sqrt{2})$</strong>.</p>`
                },
                {
                    id: 'ch3ex6q2',
                    texte: "2. Tangentes communes.",
                    solution: `<p>$f'(x)=3x^2-3$ et $g'(x)=1+\\dfrac{4}{x^2}$.</p>
                              <p>En $A$ : $f'(\\sqrt{2}) = 3\\times 2 - 3 = 3$.</p>
                              <p>$g'(\\sqrt{2}) = 1 + \\dfrac{4}{2} = 1+2 = 3$.</p>
                              <p>Les deux dérivées sont égales, donc les tangentes sont confondues.</p>
                              <p>Tangente en $A$ : $y = 3(x-\\sqrt{2}) - \\sqrt{2} = 3x - 4\\sqrt{2}$.</p>
                              <p>En $B$ : $f'(-\\sqrt{2}) = 3\\times 2 - 3 = 3$.</p>
                              <p>$g'(-\\sqrt{2}) = 1 + \\dfrac{4}{2} = 3$.</p>
                              <p>Tangente en $B$ : $y = 3(x+\\sqrt{2}) + \\sqrt{2} = 3x + 4\\sqrt{2}$.</p>
                              <p><strong>$T_A : y = 3x - 4\\sqrt{2}$</strong> et <strong>$T_B : y = 3x + 4\\sqrt{2}$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Soit $f$ définie par $f(x)=\\begin{cases} x^2+1 & \\text{si } x\\le -1 \\\\ 2x & \\text{si } -1 < x < 1 \\\\ -x+3 & \\text{si } x\\ge 1 \\end{cases}$</p>
                      <p>1. Étudier la continuité de $f$ en $-1$ et en $1$.</p>
                      <p>2. Étudier la dérivabilité de $f$ en $-1$ et en $1$.</p>
                      <p>3. Montrer que $f$ est dérivable sur chacun des intervalles $]-\\infty,-1[$, $]-1,1[$ et $]1,+\\infty[$.</p>`,
            questions: [
                {
                    id: 'ch3ex7q1',
                    texte: "1. Continuité en $-1$ et $1$.",
                    solution: `<p>En $-1$ : $f(-1)=(-1)^2+1=2$.</p>
                              <p>$\\lim_{x\\to -1^-} f(x) = \\lim_{x\\to -1^-} (x^2+1) = 2$.</p>
                              <p>$\\lim_{x\\to -1^+} f(x) = \\lim_{x\\to -1^+} 2x = -2$.</p>
                              <p>Les limites à gauche et à droite sont différentes, donc <strong>$f$ n'est pas continue en $-1$</strong>.</p>
                              <p>En $1$ : $f(1)=-1+3=2$.</p>
                              <p>$\\lim_{x\\to 1^-} f(x) = \\lim_{x\\to 1^-} 2x = 2$.</p>
                              <p>$\\lim_{x\\to 1^+} f(x) = \\lim_{x\\to 1^+} (-x+3) = 2$.</p>
                              <p>Les limites sont égales à $f(1)$, donc <strong>$f$ est continue en $1$</strong>.</p>`
                },
                {
                    id: 'ch3ex7q2',
                    texte: "2. Dérivabilité en $-1$ et $1$.",
                    solution: `<p>En $-1$ : $f$ n'est pas continue, donc <strong>$f$ n'est pas dérivable en $-1$</strong>.</p>
                              <p>En $1$ :</p>
                              <p>$\\lim_{x\\to 1^-} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^-} \\dfrac{2x-2}{x-1} = 2$.</p>
                              <p>$\\lim_{x\\to 1^+} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^+} \\dfrac{-x+3-2}{x-1} = \\lim_{x\\to 1^+} \\dfrac{-(x-1)}{x-1} = -1$.</p>
                              <p>Les limites à gauche et à droite sont différentes ($2 \\neq -1$).</p>
                              <p><strong>$f$ n'est pas dérivable en $1$</strong>.</p>`
                },
                {
                    id: 'ch3ex7q3',
                    texte: "3. Dérivabilité sur les intervalles.",
                    solution: `<p>Sur $]-\\infty,-1[$, $f(x)=x^2+1$ est un polynôme, donc dérivable.</p>
                              <p>Sur $]-1,1[$, $f(x)=2x$ est affine, donc dérivable.</p>
                              <p>Sur $]1,+\\infty[$, $f(x)=-x+3$ est affine, donc dérivable.</p>
                              <p><strong>$f$ est dérivable sur chacun de ces intervalles.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 8
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>Déterminer, dans chacun des cas, les dérivées successives de la fonction $f$.</p>
                      <p>1. $f(x)=x^5-2x^3+3x+4$.</p>
                      <p>2. $f(x)=\\cos x + \\sin x$.</p>
                      <p>3. $f(x)=\\sin(2x)$.</p>
                      <p>4. $f(x)=\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$, $x>1$.</p>`,
            questions: [
                {
                    id: 'ch3ex8q1',
                    texte: "1. $f(x)=x^5-2x^3+3x+4$.",
                    solution: `<p>$f'(x)=5x^4-6x^2+3$.</p>
                              <p>$f''(x)=20x^3-12x$.</p>
                              <p>$f'''(x)=60x^2-12$.</p>
                              <p>$f^{(4)}(x)=120x$.</p>
                              <p>$f^{(5)}(x)=120$.</p>
                              <p>$f^{(n)}(x)=0$ pour $n\\ge 6$.</p>`
                },
                {
                    id: 'ch3ex8q2',
                    texte: "2. $f(x)=\\cos x + \\sin x$.",
                    solution: `<p>$f'(x)=-\\sin x + \\cos x$.</p>
                              <p>$f''(x)=-\\cos x - \\sin x = -f(x)$.</p>
                              <p>$f'''(x)=\\sin x - \\cos x = -f'(x)$.</p>
                              <p>$f^{(4)}(x)=\\cos x + \\sin x = f(x)$.</p>
                              <p>Les dérivées sont périodiques de période $4$.</p>`
                },
                {
                    id: 'ch3ex8q3',
                    texte: "3. $f(x)=\\sin(2x)$.",
                    solution: `<p>$f'(x)=2\\cos(2x)$.</p>
                              <p>$f''(x)=-4\\sin(2x)=-4f(x)$.</p>
                              <p>$f'''(x)=-8\\cos(2x)$.</p>
                              <p>$f^{(4)}(x)=16\\sin(2x)=16f(x)$.</p>`
                },
                {
                    id: 'ch3ex8q4',
                    texte: "4. $f(x)=\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$.",
                    solution: `<p>$f'(x)=-\\dfrac{1}{(x-1)^2}-\\dfrac{1}{(x+1)^2}$.</p>
                              <p>$f''(x)=\\dfrac{2}{(x-1)^3}+\\dfrac{2}{(x+1)^3}$.</p>
                              <p>$f'''(x)=-\\dfrac{6}{(x-1)^4}-\\dfrac{6}{(x+1)^4}$.</p>
                              <p>$f^{(n)}(x)=(-1)^n n!\\left[\\dfrac{1}{(x-1)^{n+1}}+\\dfrac{1}{(x+1)^{n+1}}\\right]$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Vérifier, dans chacun des cas suivants, que la fonction $f$ est dérivable sur l'intervalle $I$ et déterminer sa dérivée.</p>
                      <p>1. $f(x)=\\sqrt{\\sin x}$, $I=\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                      <p>2. $f(x)=\\sin\\left(\\dfrac{\\pi}{x}\\right)$, $I=[1,+\\infty[$.</p>
                      <p>3. $f(x)=\\tan(\\sin x)$, $I=\\mathbb{R}$.</p>`,
            questions: [
                {
                    id: 'ch3ex9q1',
                    texte: "1. $f(x)=\\sqrt{\\sin x}$.",
                    solution: `<p>Sur $\\left[0,\\dfrac{\\pi}{2}\\right]$, $\\sin x \\ge 0$ et dérivable, donc $f$ est dérivable.</p>
                              <p>$f'(x)=\\dfrac{\\cos x}{2\\sqrt{\\sin x}}$.</p>
                              <p><strong>$f'(x)=\\dfrac{\\cos x}{2\\sqrt{\\sin x}}$</strong>.</p>`
                },
                {
                    id: 'ch3ex9q2',
                    texte: "2. $f(x)=\\sin\\left(\\dfrac{\\pi}{x}\\right)$.",
                    solution: `<p>Sur $[1,+\\infty[$, $\\dfrac{\\pi}{x}$ est dérivable, donc $f$ est dérivable.</p>
                              <p>$f'(x)=\\cos\\left(\\dfrac{\\pi}{x}\\right) \\times \\left(-\\dfrac{\\pi}{x^2}\\right) = -\\dfrac{\\pi}{x^2}\\cos\\left(\\dfrac{\\pi}{x}\\right)$.</p>
                              <p><strong>$f'(x)=-\\dfrac{\\pi}{x^2}\\cos\\left(\\dfrac{\\pi}{x}\\right)$</strong>.</p>`
                },
                {
                    id: 'ch3ex9q3',
                    texte: "3. $f(x)=\\tan(\\sin x)$.",
                    solution: `<p>La fonction $\\sin x$ est dérivable sur $\\mathbb{R}$ et prend ses valeurs dans $[-1,1]$, intervalle où $\\tan$ est dérivable.</p>
                              <p>Donc $f$ est dérivable sur $\\mathbb{R}$.</p>
                              <p>$f'(x)=\\cos x \\times [1+\\tan^2(\\sin x)]$.</p>
                              <p><strong>$f'(x)=\\cos x[1+\\tan^2(\\sin x)]$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Soit $f(x)=\\dfrac{x^2-3x+6}{x-1}$.</p>
                      <p>1. Montrer que $\\mathcal{E}$ admet deux tangentes parallèles à la droite d'équation $y=-3x$.</p>
                      <p>2. Calculer les coordonnées des points de contact et écrire une équation de chacune des tangentes.</p>`,
            questions: [
                {
                    id: 'ch3ex10q1',
                    texte: "1. Tangentes parallèles à $y=-3x$.",
                    solution: `<p>On cherche $x$ tel que $f'(x)=-3$.</p>
                              <p>$f'(x)=\\dfrac{(2x-3)(x-1)-(x^2-3x+6)}{(x-1)^2} = \\dfrac{2x^2-2x-3x+3 - x^2+3x-6}{(x-1)^2}$.</p>
                              <p>$= \\dfrac{x^2-2x-3}{(x-1)^2}$.</p>
                              <p>$f'(x)=-3 \\Rightarrow \\dfrac{x^2-2x-3}{(x-1)^2} = -3 \\Rightarrow x^2-2x-3 = -3(x^2-2x+1)$.</p>
                              <p>$\\Rightarrow x^2-2x-3 = -3x^2+6x-3 \\Rightarrow 4x^2-8x=0 \\Rightarrow 4x(x-2)=0$.</p>
                              <p>Donc $x=0$ ou $x=2$.</p>
                              <p><strong>Deux tangentes parallèles à $y=-3x$ aux points d'abscisses $0$ et $2$.</strong></p>`
                },
                {
                    id: 'ch3ex10q2',
                    texte: "2. Points de contact et équations.",
                    solution: `<p>Pour $x=0$ : $f(0)=\\dfrac{6}{-1}=-6$. $f'(0)=-3$.</p>
                              <p>$T_1 : y = -3(x-0) - 6 = -3x - 6$.</p>
                              <p>Pour $x=2$ : $f(2)=\\dfrac{4-6+6}{1}=4$. $f'(2)=-3$.</p>
                              <p>$T_2 : y = -3(x-2) + 4 = -3x + 10$.</p>
                              <p><strong>$T_1 : y = -3x - 6$</strong> en $A(0,-6)$.</p>
                              <p><strong>$T_2 : y = -3x + 10$</strong> en $B(2,4)$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Soit $f(x)=x^3-3x+2$ sur $[1,2]$.</p>
                      <p>Soit $A$ et $B$ les points d'abscisses $1$ et $2$.</p>
                      <p>Déterminer les points de la courbe où la tangente est parallèle à la droite $(AB)$.</p>`,
            questions: [
                {
                    id: 'ch3ex11q1',
                    texte: "Points où la tangente est parallèle à $(AB)$.",
                    solution: `<p>$A(1, f(1)) = (1, 1-3+2) = (1,0)$.</p>
                              <p>$B(2, f(2)) = (2, 8-6+2) = (2,4)$.</p>
                              <p>La pente de $(AB)$ est $m = \\dfrac{4-0}{2-1} = 4$.</p>
                              <p>On cherche $x\\in[1,2]$ tel que $f'(x)=4$.</p>
                              <p>$f'(x)=3x^2-3$.</p>
                              <p>$3x^2-3=4 \\Rightarrow 3x^2=7 \\Rightarrow x^2=\\dfrac{7}{3} \\Rightarrow x=\\sqrt{\\dfrac{7}{3}}$.</p>
                              <p>Le point est $M\\left(\\sqrt{\\dfrac{7}{3}}, f\\left(\\sqrt{\\dfrac{7}{3}}\\right)\\right)$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Soit $f(x)=(x-1)(x-2)(x-3)(x-4)$.</p>
                      <p>Sans calculer $f'(x)$, montrer que $f'$ admet trois zéros distincts.</p>`,
            questions: [
                {
                    id: 'ch3ex12q1',
                    texte: "Montrer que $f'$ admet trois zéros distincts.",
                    solution: `<p>$f$ est continue et dérivable sur $\\mathbb{R}$.</p>
                              <p>$f(1)=f(2)=f(3)=f(4)=0$.</p>
                              <p>Sur $[1,2]$, $f$ est continue sur $[1,2]$, dérivable sur $]1,2[$ et $f(1)=f(2)=0$.</p>
                              <p>D'après le théorème de Rolle, il existe $\\alpha_1 \\in ]1,2[$ tel que $f'(\\alpha_1)=0$.</p>
                              <p>Sur $[2,3]$, il existe $\\alpha_2 \\in ]2,3[$ tel que $f'(\\alpha_2)=0$.</p>
                              <p>Sur $[3,4]$, il existe $\\alpha_3 \\in ]3,4[$ tel que $f'(\\alpha_3)=0$.</p>
                              <p>Les intervalles sont disjoints, donc $\\alpha_1, \\alpha_2, \\alpha_3$ sont distincts.</p>
                              <p><strong>$f'$ admet trois zéros distincts.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit $f(x)=\\tan x$.</p>
                      <p>1. Montrer que $1 \\le f'(x) \\le 2$ pour $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$.</p>
                      <p>2. En déduire que $x \\le \\tan x \\le 2x$ pour $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$.</p>`,
            questions: [
                {
                    id: 'ch3ex13q1',
                    texte: "1. Montrer que $1 \\le f'(x) \\le 2$.",
                    solution: `<p>$f'(x)=1+\\tan^2 x$.</p>
                              <p>Sur $\\left[0,\\dfrac{\\pi}{4}\\right]$, $\\tan x$ est croissante, donc $0 \\le \\tan x \\le 1$.</p>
                              <p>Donc $0 \\le \\tan^2 x \\le 1$.</p>
                              <p>D'où $1 \\le 1+\\tan^2 x \\le 2$.</p>
                              <p><strong>$1 \\le f'(x) \\le 2$</strong>.</p>`
                },
                {
                    id: 'ch3ex13q2',
                    texte: "2. En déduire que $x \\le \\tan x \\le 2x$.",
                    solution: `<p>D'après le théorème des accroissements finis, pour $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$, il existe $c\\in]0,x[$ tel que :</p>
                              <p>$\\tan x - \\tan 0 = f'(c)(x-0)$.</p>
                              <p>$\\tan x = f'(c) \\cdot x$.</p>
                              <p>Comme $1 \\le f'(c) \\le 2$, on a $1 \\cdot x \\le \\tan x \\le 2 \\cdot x$.</p>
                              <p><strong>$x \\le \\tan x \\le 2x$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>1. Montrer, à l'aide du théorème des inégalités des accroissements finis, que $0 \\le \\sqrt{1+x} - 1 \\le \\dfrac{x}{2}$ pour $x\\ge 0$.</p>
                      <p>2. En déduire que pour $x>0$, $x \\le \\sqrt{1+x^2} \\le x + \\dfrac{1}{2x}$.</p>`,
            questions: [
                {
                    id: 'ch3ex14q1',
                    texte: "1. Montrer l'inégalité.",
                    solution: `<p>Soit $f(t)=\\sqrt{1+t}$. $f$ est dérivable sur $[0,+\\infty[$ et $f'(t)=\\dfrac{1}{2\\sqrt{1+t}}$.</p>
                              <p>Pour $t\\in[0,x]$, $0 \\le f'(t) \\le \\dfrac{1}{2}$.</p>
                              <p>D'après l'inégalité des accroissements finis :</p>
                              <p>$0 \\le f(x)-f(0) \\le \\dfrac{1}{2}(x-0)$.</p>
                              <p><strong>$0 \\le \\sqrt{1+x}-1 \\le \\dfrac{x}{2}$</strong>.</p>`
                },
                {
                    id: 'ch3ex14q2',
                    texte: "2. En déduire l'inégalité.",
                    solution: `<p>Soit $u=\\dfrac{1}{x^2}$ pour $x>0$.</p>
                              <p>D'après la question 1 : $0 \\le \\sqrt{1+\\dfrac{1}{x^2}} - 1 \\le \\dfrac{1}{2x^2}$.</p>
                              <p>Donc $1 \\le \\dfrac{\\sqrt{1+x^2}}{x} \\le 1 + \\dfrac{1}{2x^2}$.</p>
                              <p>En multipliant par $x>0$ :</p>
                              <p><strong>$x \\le \\sqrt{1+x^2} \\le x + \\dfrac{1}{2x}$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Montrer les inégalités suivantes.</p>
                      <p>a. $|\\sin x| \\le |x|$, $x\\in\\mathbb{R}$.</p>
                      <p>b. $x \\le \\tan x$, $x\\in\\left[0,\\dfrac{\\pi}{2}\\right[$.</p>
                      <p>c. $1-x \\le \\cos x \\le 1+x$, $x\\in[0,+\\infty[$.</p>`,
            questions: [
                {
                    id: 'ch3ex15q1',
                    texte: "a. $|\\sin x| \\le |x|$.",
                    solution: `<p>Soit $f(t)=\\sin t$. $f$ est dérivable et $|f'(t)|=|\\cos t| \\le 1$.</p>
                              <p>Par l'inégalité des accroissements finis, pour $x\\ge 0$ :</p>
                              <p>$|\\sin x - \\sin 0| \\le 1 \\times |x-0| \\Rightarrow |\\sin x| \\le x$.</p>
                              <p>Pour $x<0$, $|\\sin x| = |\\sin(-x)| \\le |-x| = |x|$.</p>
                              <p><strong>$|\\sin x| \\le |x|$</strong>.</p>`
                },
                {
                    id: 'ch3ex15q2',
                    texte: "b. $x \\le \\tan x$.",
                    solution: `<p>Soit $f(t)=\\tan t$ sur $\\left[0,\\dfrac{\\pi}{2}\\right[$. $f'(t)=1+\\tan^2 t \\ge 1$.</p>
                              <p>Pour $x\\in\\left[0,\\dfrac{\\pi}{2}\\right[$ : $\\tan x - \\tan 0 = f'(c) \\cdot x$ avec $c\\in]0,x[$.</p>
                              <p>$\\tan x = f'(c) \\cdot x \\ge x$.</p>
                              <p><strong>$x \\le \\tan x$</strong>.</p>`
                },
                {
                    id: 'ch3ex15q3',
                    texte: "c. $1-x \\le \\cos x \\le 1+x$.",
                    solution: `<p>Soit $f(t)=\\cos t$. $f'(t)=-\\sin t$ et $|f'(t)| \\le 1$.</p>
                              <p>Par l'inégalité des accroissements finis sur $[0,x]$ :</p>
                              <p>$|\\cos x - \\cos 0| \\le 1 \\times |x-0| \\Rightarrow |\\cos x - 1| \\le x$.</p>
                              <p>Donc $-x \\le \\cos x - 1 \\le x$.</p>
                              <p><strong>$1-x \\le \\cos x \\le 1+x$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 16
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit $f(x)=(x-1)\\sqrt{1-x}$.</p>
                      <p>1. Donner l'ensemble de définition de $f$.</p>
                      <p>2. Étudier la dérivabilité de $f$ en $1$. Interpréter.</p>
                      <p>3. Dresser le tableau de variation de $f$.</p>`,
            questions: [
                {
                    id: 'ch3ex16q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>Il faut $1-x \\ge 0 \\Rightarrow x \\le 1$.</p>
                              <p><strong>$D_f = ]-\\infty,1]$</strong>.</p>`
                },
                {
                    id: 'ch3ex16q2',
                    texte: "2. Dérivabilité en $1$.",
                    solution: `<p>$\\lim_{x\\to 1^-} \\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^-} \\dfrac{(x-1)\\sqrt{1-x}}{x-1} = \\lim_{x\\to 1^-} \\sqrt{1-x} = 0$.</p>
                              <p>$f$ est dérivable à gauche en $1$ et <strong>$f'_g(1)=0$</strong>.</p>
                              <p>Interprétation : la courbe admet une tangente horizontale en $x=1$.</p>`
                },
                {
                    id: 'ch3ex16q3',
                    texte: "3. Tableau de variation.",
                    solution: `<p>Pour $x<1$, $f$ est dérivable.</p>
                              <p>$f'(x)=\\sqrt{1-x} + (x-1) \\times \\dfrac{-1}{2\\sqrt{1-x}} = \\sqrt{1-x} - \\dfrac{1-x}{2\\sqrt{1-x}}$.</p>
                              <p>$= \\dfrac{2(1-x)-(1-x)}{2\\sqrt{1-x}} = \\dfrac{1-x}{2\\sqrt{1-x}} = \\dfrac{\\sqrt{1-x}}{2} \\ge 0$.</p>
                              <p>$f$ est croissante sur $]-\\infty,1]$.</p>
                              <p>$\\lim_{x\\to -\\infty} f(x) = -\\infty$.</p>
                              <p><strong>$f$ est croissante de $-\\infty$ à $0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit $f(x)=\\dfrac{1}{\\sqrt{1+x}}$ sur $\\mathbb{R}_+$.</p>
                      <p>1. Montrer que $f$ est dérivable sur $\\mathbb{R}_+$ et que $|f'(x)| \\le \\dfrac{1}{2}$.</p>
                      <p>2. Montrer que $1 - \\dfrac{x}{2} \\le \\dfrac{1}{\\sqrt{1+x}} \\le 1 + \\dfrac{x}{2}$.</p>
                      <p>3. En déduire un encadrement de $\\dfrac{1}{\\sqrt{1+10^{-11}}}$.</p>`,
            questions: [
                {
                    id: 'ch3ex17q1',
                    texte: "1. Dérivabilité et majoration.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}_+$ et $f'(x)=-\\dfrac{1}{2(1+x)^{3/2}}$.</p>
                              <p>$|f'(x)| = \\dfrac{1}{2(1+x)^{3/2}} \\le \\dfrac{1}{2}$ car $1+x \\ge 1$.</p>
                              <p><strong>$|f'(x)| \\le \\dfrac{1}{2}$</strong>.</p>`
                },
                {
                    id: 'ch3ex17q2',
                    texte: "2. Encadrement.",
                    solution: `<p>D'après l'inégalité des accroissements finis sur $[0,x]$ :</p>
                              <p>$|f(x)-f(0)| \\le \\dfrac{1}{2} \\times x$.</p>
                              <p>$\\left|\\dfrac{1}{\\sqrt{1+x}} - 1\\right| \\le \\dfrac{x}{2}$.</p>
                              <p>Donc $-\\dfrac{x}{2} \\le \\dfrac{1}{\\sqrt{1+x}} - 1 \\le \\dfrac{x}{2}$.</p>
                              <p><strong>$1 - \\dfrac{x}{2} \\le \\dfrac{1}{\\sqrt{1+x}} \\le 1 + \\dfrac{x}{2}$</strong>.</p>`
                },
                {
                    id: 'ch3ex17q3',
                    texte: "3. Encadrement numérique.",
                    solution: `<p>Pour $x=10^{-11}$ :</p>
                              <p>$1 - \\dfrac{10^{-11}}{2} \\le \\dfrac{1}{\\sqrt{1+10^{-11}}} \\le 1 + \\dfrac{10^{-11}}{2}$.</p>
                              <p><strong>$1 - 5\\times 10^{-12} \\le \\dfrac{1}{\\sqrt{1+10^{-11}}} \\le 1 + 5\\times 10^{-12}$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Soit $f(x)=x^3-x$.</p>
                      <p>1. Étudier les variations de $f$.</p>
                      <p>2. Comparer les réels $A$ et $B$ dans les cas suivants.</p>
                      <p>a. $A=0.577350269^3-0.577350269$, $B=0.577350268^3-0.577350268$.</p>
                      <p>b. $A=0.577350271^3-0.577350271$, $B=0.577350272^3-0.577350272$.</p>`,
            questions: [
                {
                    id: 'ch3ex18q1',
                    texte: "1. Variations de $f$.",
                    solution: `<p>$f'(x)=3x^2-1$.</p>
                              <p>$f'(x)=0 \\iff x=\\pm\\dfrac{1}{\\sqrt{3}}$.</p>
                              <p>$f$ est croissante sur $]-\\infty,-\\dfrac{1}{\\sqrt{3}}]$, décroissante sur $[-\\dfrac{1}{\\sqrt{3}},\\dfrac{1}{\\sqrt{3}}]$, croissante sur $[\\dfrac{1}{\\sqrt{3}},+\\infty[$.</p>`
                },
                {
                    id: 'ch3ex18q2',
                    texte: "2. a. Comparaison A et B.",
                    solution: `<p>$0.577350268 < 0.577350269$.</p>
                              <p>Les deux nombres sont dans $[-\\dfrac{1}{\\sqrt{3}}, \\dfrac{1}{\\sqrt{3}}]$ où $f$ est décroissante.</p>
                              <p>Donc $f(0.577350268) > f(0.577350269)$.</p>
                              <p><strong>$B > A$</strong>.</p>`
                },
                {
                    id: 'ch3ex18q3',
                    texte: "2. b. Comparaison A et B.",
                    solution: `<p>$0.577350271 < 0.577350272$.</p>
                              <p>Les deux nombres sont dans $[\\dfrac{1}{\\sqrt{3}}, +\\infty[$ où $f$ est croissante.</p>
                              <p>Donc $f(0.577350271) < f(0.577350272)$.</p>
                              <p><strong>$A < B$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Pour chacune des fonctions ci-dessous, étudier les variations sur $I$.</p>
                      <p>1. $f(x)=\\sqrt{x+1}-\\sqrt{x-1}$, $I=[1,+\\infty[$.</p>
                      <p>2. $g(x)=\\cos x - \\sin x$, $I=[0,\\pi]$.</p>
                      <p>3. $h(x)=\\cos(\\sin x)$, $I=[0,\\pi]$.</p>`,
            questions: [
                {
                    id: 'ch3ex19q1',
                    texte: "1. $f(x)=\\sqrt{x+1}-\\sqrt{x-1}$.",
                    solution: `<p>$D_f=[1,+\\infty[$.</p>
                              <p>$f'(x)=\\dfrac{1}{2\\sqrt{x+1}} - \\dfrac{1}{2\\sqrt{x-1}} < 0$.</p>
                              <p>$f$ est strictement décroissante sur $[1,+\\infty[$.</p>
                              <p>$\\lim_{x\\to +\\infty} f(x) = 0$.</p>`
                },
                {
                    id: 'ch3ex19q2',
                    texte: "2. $g(x)=\\cos x - \\sin x$.",
                    solution: `<p>$g'(x) = -\\sin x - \\cos x = -(\\sin x + \\cos x)$.</p>
                              <p>$g'(x)=0 \\iff \\tan x = -1 \\iff x = \\dfrac{3\\pi}{4}$.</p>
                              <p>$g$ est décroissante sur $[0,\\dfrac{3\\pi}{4}]$ et croissante sur $[\\dfrac{3\\pi}{4},\\pi]$.</p>`
                },
                {
                    id: 'ch3ex19q3',
                    texte: "3. $h(x)=\\cos(\\sin x)$.",
                    solution: `<p>$h'(x) = -\\cos x \\cdot \\sin(\\sin x)$.</p>
                              <p>Sur $[0,\\pi]$, $\\sin(\\sin x) \\ge 0$.</p>
                              <p>$h$ est décroissante sur $[0,\\dfrac{\\pi}{2}]$ et croissante sur $[\\dfrac{\\pi}{2},\\pi]$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 20
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Soit $f$ définie par $f(x)=\\begin{cases} x^2-5x+c & \\text{si } x<3 \\\\ 4\\sqrt{x+1} & \\text{si } x\\ge 3 \\end{cases}$</p>
                      <p>1. Déterminer $c$ pour que $f$ soit continue sur $\\mathbb{R}$. Pour cette valeur, montrer que $f$ est dérivable sur $\\mathbb{R}$.</p>
                      <p>2. Dresser le tableau de variation de $f$.</p>
                      <p>3. Préciser l'extremum de $f$.</p>`,
            questions: [
                {
                    id: 'ch3ex20q1',
                    texte: "1. Déterminer $c$ pour la continuité.",
                    solution: `<p>$f(3)=4\\sqrt{4}=8$.</p>
                              <p>$\\lim_{x\\to 3^-} f(x) = \\lim_{x\\to 3^-} (x^2-5x+c) = 9-15+c = c-6$.</p>
                              <p>$c-6=8 \\Rightarrow c=14$.</p>
                              <p><strong>$c=14$</strong>.</p>`
                },
                {
                    id: 'ch3ex20q2',
                    texte: "1. Dérivabilité.",
                    solution: `<p>$f'_g(3) = \\lim_{x\\to 3^-} \\dfrac{x^2-5x+6}{x-3} = \\lim_{x\\to 3^-} \\dfrac{(x-2)(x-3)}{x-3} = 1$.</p>
                              <p>$f'_d(3) = \\lim_{x\\to 3^+} \\dfrac{4\\sqrt{x+1}-8}{x-3} = \\lim_{x\\to 3^+} \\dfrac{4(\\sqrt{x+1}-2)}{x-3} = \\lim_{x\\to 3^+} \\dfrac{4}{\\sqrt{x+1}+2} = 1$.</p>
                              <p><strong>$f$ est dérivable en $3$</strong>.</p>`
                },
                {
                    id: 'ch3ex20q3',
                    texte: "2. Tableau de variation.",
                    solution: `<p>Pour $x<3$, $f'(x)=2x-5$.</p>
                              <p>Pour $x>3$, $f'(x)=\\dfrac{2}{\\sqrt{x+1}}>0$.</p>
                              <p>$f$ est décroissante sur $]-\\infty,\\dfrac{5}{2}]$, croissante sur $[\\dfrac{5}{2},+\\infty[$.</p>`
                },
                {
                    id: 'ch3ex20q4',
                    texte: "3. Extremum.",
                    solution: `<p>$f\\left(\\dfrac{5}{2}\\right) = \\dfrac{25}{4} - \\dfrac{25}{2} + 14 = \\dfrac{31}{4}$.</p>
                              <p><strong>$\\dfrac{31}{4}$ est un minimum absolu.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>Soit $f(x)=x\\sqrt{1-x^2}$.</p>
                      <p>1. Déterminer l'ensemble de définition de $f$.</p>
                      <p>2. Étudier $\\lim_{x\\to 1} \\dfrac{f(x)-f(1)}{x-1}$. Interpréter.</p>
                      <p>3. a. Vérifier que $f$ est impaire.</p>
                      <p>b. Dresser le tableau de variation de $f$.</p>
                      <p>c. Préciser les extrema de $f$.</p>
                      <p>4. a. Déterminer la tangente à la courbe au point d'abscisse $0$.</p>
                      <p>b. Montrer que l'origine est un point d'inflexion.</p>`,
            questions: [
                {
                    id: 'ch3ex21q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>$1-x^2 \\ge 0 \\iff -1 \\le x \\le 1$.</p>
                              <p><strong>$D_f = [-1,1]$</strong>.</p>`
                },
                {
                    id: 'ch3ex21q2',
                    texte: "2. $\\lim_{x\\to 1} \\dfrac{f(x)-f(1)}{x-1}$.",
                    solution: `<p>$\\lim_{x\\to 1^-} \\dfrac{x\\sqrt{1-x^2}}{x-1} = -\\lim_{x\\to 1^-} \\dfrac{x(1+x)}{\\sqrt{1-x^2}} = -\\infty$.</p>
                              <p>$f$ n'est pas dérivable en $1$.</p>
                              <p>La courbe admet une tangente verticale en $x=1$.</p>`
                },
                {
                    id: 'ch3ex21q3',
                    texte: "3. a. Parité.",
                    solution: `<p>$f(-x) = -x\\sqrt{1-x^2} = -f(x)$.</p>
                              <p><strong>$f$ est impaire.</strong></p>`
                },
                {
                    id: 'ch3ex21q4',
                    texte: "3. b. Tableau de variation.",
                    solution: `<p>$f'(x)=\\dfrac{1-2x^2}{\\sqrt{1-x^2}}$.</p>
                              <p>$f$ est décroissante sur $[-1,-\\dfrac{1}{\\sqrt{2}}]$, croissante sur $[-\\dfrac{1}{\\sqrt{2}},\\dfrac{1}{\\sqrt{2}}]$, décroissante sur $[\\dfrac{1}{\\sqrt{2}},1]$.</p>
                              <div id="graph-ex21" class="graph-container" data-fn="x*sqrt(1-x^2)" data-xmin="-1.2" data-xmax="1.2" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch3ex21q5',
                    texte: "3. c. Extrema.",
                    solution: `<p>Maximum en $x=\\dfrac{1}{\\sqrt{2}}$ : $\\dfrac{1}{2}$.</p>
                              <p>Minimum en $x=-\\dfrac{1}{\\sqrt{2}}$ : $-\\dfrac{1}{2}$.</p>`
                },
                {
                    id: 'ch3ex21q6',
                    texte: "4. a. Tangente en $0$.",
                    solution: `<p>$f(0)=0$, $f'(0)=1$.</p>
                              <p><strong>$T : y = x$</strong>.</p>`
                },
                {
                    id: 'ch3ex21q7',
                    texte: "4. b. Point d'inflexion.",
                    solution: `<p>$f''(x)=\\dfrac{x(2x^2-3)}{(1-x^2)^{3/2}}$.</p>
                              <p>$f''$ s'annule en $0$ en changeant de signe.</p>
                              <p><strong>$O(0,0)$ est un point d'inflexion.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 22
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>Soit $f(x)=x\\sqrt{x}-\\dfrac{3}{16}x^2$, $x\\ge 0$.</p>
                      <p>1. a. Montrer que $f$ est dérivable sur $[0,+\\infty[$ et que $f'(x)=\\dfrac{12\\sqrt{x}-3x}{8}$.</p>
                      <p>b. Étudier les variations de $f$.</p>
                      <p>c. Existe-t-il $x\\ge 0$ tel que $f(x)=20$ ?</p>
                      <p>2. a. Montrer que $f$ est deux fois dérivable sur $]0,+\\infty[$.</p>
                      <p>b. Déterminer le point d'inflexion de la courbe.</p>`,
            questions: [
                {
                    id: 'ch3ex22q1',
                    texte: "1. a. Dérivabilité.",
                    solution: `<p>$\\lim_{x\\to 0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to 0^+} \\left(\\sqrt{x} - \\dfrac{3}{16}x\\right) = 0$.</p>
                              <p>$f$ est dérivable à droite en $0$.</p>
                              <p>$f'(x)=\\dfrac{12\\sqrt{x}-3x}{8}$.</p>`
                },
                {
                    id: 'ch3ex22q2',
                    texte: "1. b. Variations.",
                    solution: `<p>$f'(x)=\\dfrac{3\\sqrt{x}}{8}(4-\\sqrt{x})$.</p>
                              <p>$f$ est croissante sur $[0,16]$, décroissante sur $[16,+\\infty[$.</p>
                              <p>$f(16)=16$.</p>`
                },
                {
                    id: 'ch3ex22q3',
                    texte: "1. c. Existence de solution.",
                    solution: `<p>Le maximum est $16$, donc $f(x)\\le 16$.</p>
                              <p><strong>L'équation $f(x)=20$ n'a pas de solution.</strong></p>`
                },
                {
                    id: 'ch3ex22q4',
                    texte: "2. a. Deux fois dérivable.",
                    solution: `<p>$f''(x)=\\dfrac{3(2-\\sqrt{x})}{8\\sqrt{x}}$.</p>
                              <p><strong>$f$ est deux fois dérivable sur $]0,+\\infty[$.</strong></p>`
                },
                {
                    id: 'ch3ex22q5',
                    texte: "2. b. Point d'inflexion.",
                    solution: `<p>$f''(x)=0 \\iff \\sqrt{x}=2 \\iff x=4$.</p>
                              <p><strong>$I(4,5)$ est un point d'inflexion.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>Soit $f(x)=\\sqrt{x+\\sqrt{x}}$.</p>
                      <p>1. Préciser l'ensemble de définition de $f$.</p>
                      <p>2. Étudier la dérivabilité de $f$ à droite en $0$ et interpréter.</p>
                      <p>3. a. Montrer que $f$ est dérivable sur $]0,+\\infty[$ et calculer $f'(x)$.</p>
                      <p>b. Dresser le tableau de variation de $f$.</p>`,
            questions: [
                {
                    id: 'ch3ex23q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>$D_f = [0,+\\infty[$.</p>`
                },
                {
                    id: 'ch3ex23q2',
                    texte: "2. Dérivabilité en $0$.",
                    solution: `<p>$\\lim_{x\\to 0^+} \\dfrac{f(x)-f(0)}{x} = +\\infty$.</p>
                              <p><strong>$f$ n'est pas dérivable à droite en $0$.</strong></p>
                              <p>Tangente verticale en $0$.</p>`
                },
                {
                    id: 'ch3ex23q3',
                    texte: "3. a. Dérivée.",
                    solution: `<p>$f'(x)=\\dfrac{2\\sqrt{x}+1}{4\\sqrt{x}\\sqrt{x+\\sqrt{x}}}$.</p>`
                },
                {
                    id: 'ch3ex23q4',
                    texte: "3. b. Tableau de variation.",
                    solution: `<p>$f$ est strictement croissante sur $[0,+\\infty[$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Soit $f(x)=\\dfrac{1}{2}(4+\\sin x)$.</p>
                      <p>1. Montrer que $|f'(x)| \\le \\dfrac{1}{2}$.</p>
                      <p>2. a. Montrer que $g(x)=f(x)-x$ est strictement décroissante sur $\\mathbb{R}$.</p>
                      <p>b. Montrer que $\\dfrac{3}{2}-x \\le g(x) \\le \\dfrac{5}{2}-x$.</p>
                      <p>c. En déduire les limites de $g$ en $\\pm\\infty$, puis déterminer $g(\\mathbb{R})$.</p>
                      <p>d. Montrer qu'il existe un unique $a$ tel que $f(a)=a$.</p>
                      <p>3. Soit $(u_n)$ définie par $u_0\\in\\mathbb{R}$ et $u_{n+1}=f(u_n)$.</p>
                      <p>a. Montrer que $|u_{n+1}-a| \\le \\dfrac{1}{2}|u_n-a|$.</p>
                      <p>b. En déduire $|u_n-a| \\le \\left(\\dfrac{1}{2}\\right)^n |u_0-a|$.</p>
                      <p>c. Déterminer $\\lim_{n\\to +\\infty} u_n$.</p>`,
            questions: [
                {
                    id: 'ch3ex24q1',
                    texte: "1. Majoration de $f'$.",
                    solution: `<p>$f'(x)=\\dfrac{1}{2}\\cos x$, donc $|f'(x)| \\le \\dfrac{1}{2}$.</p>`
                },
                {
                    id: 'ch3ex24q2',
                    texte: "2. a. $g$ strictement décroissante.",
                    solution: `<p>$g'(x)=f'(x)-1 \\le -\\dfrac{1}{2} < 0$.</p>`
                },
                {
                    id: 'ch3ex24q3',
                    texte: "2. b. Encadrement de $g$.",
                    solution: `<p>$\\dfrac{3}{2} \\le f(x) \\le \\dfrac{5}{2}$.</p>
                              <p>Donc $\\dfrac{3}{2}-x \\le g(x) \\le \\dfrac{5}{2}-x$.</p>`
                },
                {
                    id: 'ch3ex24q4',
                    texte: "2. c. Limites et image.",
                    solution: `<p>$\\lim_{x\\to +\\infty} g(x) = -\\infty$, $\\lim_{x\\to -\\infty} g(x) = +\\infty$.</p>
                              <p>$g(\\mathbb{R})=\\mathbb{R}$.</p>`
                },
                {
                    id: 'ch3ex24q5',
                    texte: "2. d. Existence et unicité de $a$.",
                    solution: `<p>$g$ est continue strictement décroissante avec $g(\\mathbb{R})=\\mathbb{R}$.</p>
                              <p><strong>Il existe un unique $a$ tel que $g(a)=0$, soit $f(a)=a$.</strong></p>`
                },
                {
                    id: 'ch3ex24q6',
                    texte: "3. a. Inégalité.",
                    solution: `<p>$|u_{n+1}-a| = |f(u_n)-f(a)| \\le \\dfrac{1}{2}|u_n-a|$.</p>`
                },
                {
                    id: 'ch3ex24q7',
                    texte: "3. b. Récurrence.",
                    solution: `<p>$|u_n-a| \\le \\left(\\dfrac{1}{2}\\right)^n |u_0-a|$.</p>`
                },
                {
                    id: 'ch3ex24q8',
                    texte: "3. c. Limite.",
                    solution: `<p>$\\lim_{n\\to +\\infty} u_n = a$.</p>`
                }
            ]
        }
    ]
});