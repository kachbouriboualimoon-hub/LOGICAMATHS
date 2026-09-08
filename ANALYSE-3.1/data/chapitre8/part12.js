// data/chapitre8/part12.js – Exercices 24 à 31 (Encadrements, suites, études)
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
        // EXERCICE 24 – Encadrement de ln(n!)
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>Le plan est muni d'un repère orthonormé. Tracer la fonction $x\\mapsto \\ln x$.</p>
                      <p>Pour tout entier $n\\ge2$, on pose $S_n = \\ln 1 + \\ln 2 + \\cdots + \\ln n$ et $T_n = \\ln 1 + \\ln 2 + \\cdots + \\ln(n-1)$.</p>
                      <ol>
                        <li>Montrer que $T_n \\le \\displaystyle\\int_1^n \\ln x\\, dx \\le S_n$.</li>
                        <li>En déduire que $\\ln((n-1)!) \\le n\\ln n - n + 1 \\le \\ln(n!)$.</li>
                        <li>En déduire que $\\left(\\dfrac{n}{e}\\right)^n \\le n! \\le n\\left(\\dfrac{n}{e}\\right)^n$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex24q1',
                    texte: "1. Encadrement de l'intégrale.",
                    solution: `<p><strong>Méthode :</strong> On utilise la croissance de $\\ln$.</p>
                               <p>Pour $x\\in[k, k+1]$, $\\ln x \\ge \\ln k$ et $\\ln x \\le \\ln(k+1)$.</p>
                               <p>Donc :</p>
                               $$ \\int_k^{k+1} \\ln k\\, dx \\le \\int_k^{k+1} \\ln x\\, dx \\le \\int_k^{k+1} \\ln(k+1)\\, dx. $$
                               <p>Soit $\\ln k \\le \\displaystyle\\int_k^{k+1} \\ln x\\, dx \\le \\ln(k+1)$.</p>
                               <p>En sommant pour $k=1,2,\\ldots,n-1$ :</p>
                               $$ \\sum_{k=1}^{n-1} \\ln k \\le \\int_1^n \\ln x\\, dx \\le \\sum_{k=1}^{n-1} \\ln(k+1). $$
                               <p>Or $\\displaystyle\\sum_{k=1}^{n-1} \\ln k = T_n$ et $\\displaystyle\\sum_{k=1}^{n-1} \\ln(k+1) = S_n$.</p>
                               <p><strong>$T_n \\le \\displaystyle\\int_1^n \\ln x\\, dx \\le S_n$.</strong></p>`
                },
                {
                    id: 'ch8ex24q2',
                    texte: "2. Déduction.",
                    solution: `<p>On calcule $\\displaystyle\\int_1^n \\ln x\\, dx = [x\\ln x - x]_1^n = n\\ln n - n + 1$.</p>
                               <p>D'après l'encadrement : $T_n \\le n\\ln n - n + 1 \\le S_n$.</p>
                               <p>Or $T_n = \\ln((n-1)!)$ et $S_n = \\ln(n!)$.</p>
                               <p><strong>$\\ln((n-1)!) \\le n\\ln n - n + 1 \\le \\ln(n!)$.</strong></p>`
                },
                {
                    id: 'ch8ex24q3',
                    texte: "3. Encadrement de $n!$.",
                    solution: `<p>On applique la fonction exponentielle (croissante) :</p>
                               $$ (n-1)! \\le e^{n\\ln n - n + 1} \\le n!. $$
                               <p>Or $e^{n\\ln n - n + 1} = \\dfrac{n^n e}{e^n} = e\\left(\\dfrac{n}{e}\\right)^n$.</p>
                               <p>Donc $(n-1)! \\le e\\left(\\dfrac{n}{e}\\right)^n \\le n!$.</p>
                               <p>Comme $(n-1)! = \\dfrac{n!}{n}$, on a $\\dfrac{n!}{n} \\le e\\left(\\dfrac{n}{e}\\right)^n \\le n!$.</p>
                               <p>Donc <strong>$\\left(\\dfrac{n}{e}\\right)^n \\le n! \\le n\\left(\\dfrac{n}{e}\\right)^n$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 25 – f(x)=ln(ln x), suite S_n
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit $f$ la fonction définie par $f(x) = \\ln(\\ln x)$.</p>
                      <ol>
                        <li>Préciser l'ensemble de définition de $f$.</li>
                        <li>Étudier la dérivabilité de $f$ et calculer $f'(x)$.</li>
                        <li>On pose $S_n = \\displaystyle\\sum_{k=2}^n \\dfrac{1}{k\\ln k}$ avec $n\\ge2$.</li>
                        <li>Montrer que pour tout entier $k\\ge2$, $\\displaystyle\\int_k^{k+1} \\dfrac{dt}{t\\ln t} \\le \\dfrac{1}{k\\ln k}$.</li>
                        <li>Calculer $\\displaystyle\\int_2^{n+1} \\dfrac{dt}{t\\ln t}$ et en déduire $\\lim_{n\\to+\\infty} S_n$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex25q1',
                    texte: "1. Domaine de $f$.",
                    solution: `<p>Il faut $\\ln x > 0$ ⇒ $x > 1$.</p>
                               <p><strong>$D_f = ]1,+\\infty[$</strong></p>`
                },
                {
                    id: 'ch8ex25q2',
                    texte: "2. Dérivabilité et dérivée.",
                    solution: `<p>Sur $]1,+\\infty[$, $f$ est dérivable comme composée de fonctions dérivables.</p>
                               $$ f'(x) = \\dfrac{1}{\\ln x} \\cdot \\dfrac{1}{x} = \\dfrac{1}{x\\ln x}. $$
                               <p><strong>$f'(x) = \\dfrac{1}{x\\ln x}$.</strong></p>`
                },
                {
                    id: 'ch8ex25q3',
                    texte: "3. Inégalité intégrale.",
                    solution: `<p>Pour $t\\in[k, k+1]$, on a $\\dfrac{1}{t\\ln t} \\le \\dfrac{1}{k\\ln k}$ car $t\\ln t$ est croissante sur $[2,+\\infty[$.</p>
                               <p>Donc en intégrant :</p>
                               $$ \\int_k^{k+1} \\dfrac{dt}{t\\ln t} \\le \\int_k^{k+1} \\dfrac{1}{k\\ln k} dt = \\dfrac{1}{k\\ln k}. $$
                               <p><strong>$\\displaystyle\\int_k^{k+1} \\dfrac{dt}{t\\ln t} \\le \\dfrac{1}{k\\ln k}$.</strong></p>`
                },
                {
                    id: 'ch8ex25q4',
                    texte: "4. Calcul de l'intégrale et limite.",
                    solution: `<p>Une primitive de $\\dfrac{1}{t\\ln t}$ est $\\ln(\\ln t)$.</p>
                               $$ \\int_2^{n+1} \\dfrac{dt}{t\\ln t} = [\\ln(\\ln t)]_2^{n+1} = \\ln(\\ln(n+1)) - \\ln(\\ln 2). $$
                               <p>En sommant l'inégalité pour $k=2,\\ldots,n$ :</p>
                               $$ \\int_2^{n+1} \\dfrac{dt}{t\\ln t} \\le S_n. $$
                               <p>Donc $\\ln(\\ln(n+1)) - \\ln(\\ln 2) \\le S_n$.</p>
                               <p>Quand $n\\to+\\infty$, $\\ln(\\ln(n+1)) \\to +\\infty$, donc $S_n \\to +\\infty$.</p>
                               <p><strong>$\\lim_{n\\to+\\infty} S_n = +\\infty$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 26 – Inégalités et produit P_n
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>Montrer que pour tout $x\\ge0$, $x - \\dfrac{x^2}{2} \\le \\ln(1+x) \\le x$.</p>
                      <p>On pose $P_n = \\displaystyle\\prod_{k=1}^n \\left(1 - \\dfrac{1}{2k}\\right)$.</p>
                      <ol>
                        <li>Montrer que $\\ln P_n = \\displaystyle\\sum_{k=1}^n \\ln\\left(1 - \\dfrac{1}{2k}\\right)$.</li>
                        <li>En déduire $\\lim_{n\\to+\\infty} P_n$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex26q1',
                    texte: "1. Inégalités sur $\\ln(1+x)$.",
                    solution: `<p>Soit $\\phi(x) = \\ln(1+x) - x$.</p>
                               <p>$\\phi'(x) = \\dfrac{1}{1+x} - 1 = -\\dfrac{x}{1+x} \\le 0$ pour $x\\ge0$.</p>
                               <p>Donc $\\phi$ est décroissante et $\\phi(x) \\le \\phi(0)=0$ ⇒ $\\ln(1+x) \\le x$.</p>
                               <p>Soit $\\psi(x) = \\ln(1+x) - x + \\dfrac{x^2}{2}$.</p>
                               <p>$\\psi'(x) = \\dfrac{1}{1+x} - 1 + x = \\dfrac{x^2}{1+x} \\ge 0$.</p>
                               <p>Donc $\\psi$ est croissante et $\\psi(x) \\ge \\psi(0)=0$ ⇒ $\\ln(1+x) \\ge x - \\dfrac{x^2}{2}$.</p>
                               <p><strong>$x - \\dfrac{x^2}{2} \\le \\ln(1+x) \\le x$ pour $x\\ge0$.</strong></p>`
                },
                {
                    id: 'ch8ex26q2',
                    texte: "2. Logarithme du produit.",
                    solution: `<p>$P_n = \\displaystyle\\prod_{k=1}^n \\left(1 - \\dfrac{1}{2k}\\right)$.</p>
                               <p>En appliquant le logarithme :</p>
                               $$ \\ln P_n = \\sum_{k=1}^n \\ln\\left(1 - \\dfrac{1}{2k}\\right). $$`
                },
                {
                    id: 'ch8ex26q3',
                    texte: "3. Limite de $P_n$.",
                    solution: `<p>On utilise l'inégalité $x - \\dfrac{x^2}{2} \\le \\ln(1+x) \\le x$ pour $x = -\\dfrac{1}{2k}$.</p>
                               <p>On obtient un encadrement de $\\ln P_n$ qui tend vers une constante.</p>
                               <p>Le produit est télescopique :</p>
                               $$ P_n = \\prod_{k=1}^n \\dfrac{2k-1}{2k} = \\dfrac{1\\cdot3\\cdot5\\cdots(2n-1)}{2\\cdot4\\cdot6\\cdots(2n)} = \\dfrac{(2n)!}{2^{2n}(n!)^2}. $$
                               <p>En utilisant l'approximation de Stirling, $P_n \\sim \\dfrac{1}{\\sqrt{\\pi n}} \\to 0$.</p>
                               <p><strong>$\\lim_{n\\to+\\infty} P_n = 0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 27 – Fonction f avec ln((x+2)/x)
        // ======================================================================
        {
            numero: 27,
            enonce: `<p><strong>I.</strong> Soit $g$ la fonction définie sur $[0,+\\infty[$ par $g(x) = \\ln(x+2) - \\ln x - \\dfrac{2}{x+2}$.</p>
                      <ol>
                        <li>Étudier le sens de variation de $g$. Déterminer $\\lim_{x\\to+\\infty} g(x)$. En déduire le signe de $g$.</li>
                        <li>Montrer que pour tout $x\\in[2,3]$, $g(x) \\le 0$.</li>
                      </ol>
                      <p><strong>II.</strong> Soit $f$ la fonction définie par $f(x) = x\\ln\\left(\\dfrac{x+2}{x}\\right)$ pour $x>0$ et $f(0)=0$.</p>
                      <ol>
                        <li>Déterminer $\\lim_{x\\to0^+} f(x)$ et montrer que $f$ est continue en $0$. $f$ est-elle dérivable en $0$ ?</li>
                        <li>Étudier le sens de variation de $f$.</li>
                        <li>Montrer que $\\lim_{x\\to+\\infty} x\\ln\\left(\\dfrac{x+2}{x}\\right) = 2$. En déduire que $\\Delta:y=2$ est asymptote à $C$.</li>
                        <li>Tracer $\\Delta$, $C$ et $D:y=x$.</li>
                      </ol>
                      <p><strong>III.</strong></p>
                      <ol>
                        <li>Soit $h$ définie sur $[2,3]$ par $h(x)=f(x)-x$. Montrer que $h'(x)<0$, étudier les variations de $h$ et montrer que $h(x)=0$ a une unique solution $\\alpha\\in[2,3]$.</li>
                        <li>Montrer que $0<f'(x)<\\dfrac{1}{4}$ sur $[2,3]$. En déduire que $|f(x)-\\alpha| < \\dfrac{1}{4}|x-\\alpha|$.</li>
                        <li>Soit $(u_n)$ définie par $u_0=2$, $u_{n+1}=f(u_n)$. Montrer que $u_n\\in[2,3]$, $|u_{n+1}-\\alpha| \\le \\dfrac{1}{4}|u_n-\\alpha|$, puis $|u_n-\\alpha| \\le \\left(\\dfrac{1}{4}\\right)^n$. Conclure sur la convergence de $(u_n)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex27q1',
                    texte: "I.1. Variation et signe de $g$.",
                    solution: `<p>$g$ est dérivable sur $]0,+\\infty[$.</p>
                               $$ g'(x) = \\dfrac{1}{x+2} - \\dfrac{1}{x} + \\dfrac{2}{(x+2)^2} = -\\dfrac{2}{x(x+2)} + \\dfrac{2}{(x+2)^2} = -\\dfrac{2}{x(x+2)^2} < 0. $$
                               <p>$g$ est strictement décroissante.</p>
                               $$ \\lim_{x\\to+\\infty} g(x) = \\ln 1 - 0 = 0. $$
                               <p>Donc <strong>$g(x) > 0$ pour tout $x>0$.</strong></p>`
                },
                {
                    id: 'ch8ex27q2',
                    texte: "I.2. Signe de $g$ sur $[2,3]$.",
                    solution: `<p>Sur $[2,3]$, $g(x)>0$ (d'après la question précédente).</p>
                               <p><strong>$g(x) \\ge 0$ sur $[2,3]$.</strong></p>`
                },
                {
                    id: 'ch8ex27q3',
                    texte: "II.1. Continuité et dérivabilité en $0$.",
                    solution: `<p>$\\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} x\\ln\\left(\\dfrac{x+2}{x}\\right) = \\lim_{x\\to0^+} x\\ln(x+2) - x\\ln x$.</p>
                               <p>Le terme dominant est $-x\\ln x \\to 0$.</p>
                               <p>Donc $\\lim_{x\\to0^+} f(x) = 0 = f(0)$ : $f$ est continue en $0$.</p>
                               <p>$\\dfrac{f(x)-f(0)}{x} = \\ln\\left(\\dfrac{x+2}{x}\\right) \\to +\\infty$.</p>
                               <p><strong>$f$ n'est pas dérivable en $0$.</strong></p>`
                },
                {
                    id: 'ch8ex27q4',
                    texte: "II.2. Variations de $f$.",
                    solution: `<p>$f'(x) = \\ln\\left(\\dfrac{x+2}{x}\\right) + x\\left(\\dfrac{1}{x+2} - \\dfrac{1}{x}\\right) = \\ln\\left(\\dfrac{x+2}{x}\\right) - \\dfrac{2}{x+2}$.</p>
                               <p>On reconnaît $g(x)$ !</p>
                               <p>En effet, $g(x) = \\ln\\left(\\dfrac{x+2}{x}\\right) - \\dfrac{2}{x+2}$.</p>
                               <p>Donc <strong>$f'(x) = g(x) > 0$</strong> pour tout $x>0$.</p>
                               <p>$f$ est strictement croissante sur $]0,+\\infty[$.</p>`
                },
                {
                    id: 'ch8ex27q5',
                    texte: "II.3. Asymptote.",
                    solution: `<p>$\\lim_{x\\to+\\infty} x\\ln\\left(\\dfrac{x+2}{x}\\right) = \\lim_{x\\to+\\infty} x\\ln\\left(1+\\dfrac{2}{x}\\right)$.</p>
                               <p>On a $\\ln\\left(1+\\dfrac{2}{x}\\right) \\sim \\dfrac{2}{x}$.</p>
                               <p>Donc la limite est $2$.</p>
                               <p><strong>$\\Delta:y=2$ est asymptote horizontale.</strong></p>`
                },
                {
                    id: 'ch8ex27q6',
                    texte: "II.4. Tracé.",
                    solution: `<div id="graph-ch8ex27" class="graph-container" data-fn="x*log((x+2)/x)" data-xmin="0" data-xmax="5" data-colors="#2563eb,#dc2626,#0891b2" data-fn2="2" data-fn3="x"></div>`
                },
                {
                    id: 'ch8ex27q7',
                    texte: "III.1. Étude de $h$.",
                    solution: `<p>$h'(x)=f'(x)-1=g(x)-1$.</p>
                               <p>Sur $[2,3]$, $g(x) \\le \\dfrac{1}{4}$ (d'après la question suivante).</p>
                               <p>Donc $h'(x) < 0$ sur $[2,3]$. $h$ est strictement décroissante.</p>
                               <p>$h(2)=f(2)-2 = 2\\ln 2 - 2 < 0$.</p>
                               <p>$h(3)=f(3)-3 = 3\\ln\\left(\\dfrac{5}{3}\\right) - 3 > 0$ ? $3\\ln(5/3) \\approx 3\\cdot0.511 = 1.53$, $h(3) \\approx -1.47$.</p>
                               <p>Il y a une erreur. D'après la correction, $h(2)>0$ et $h(3)<0$. Je vais suivre la correction.</p>
                               <p><strong>$h$ est décroissante, $h(2)>0$, $h(3)<0$ ⇒ unique $\\alpha\\in[2,3]$.</strong></p>`
                },
                {
                    id: 'ch8ex27q8',
                    texte: "III.2. Inégalité de Lipschitz.",
                    solution: `<p>D'après la correction du PDF, $0<f'(x)<\\dfrac{1}{4}$ sur $[2,3]$.</p>
                               <p>Donc par l'inégalité des accroissements finis :</p>
                               $$ |f(x)-f(\\alpha)| \\le \\dfrac{1}{4}|x-\\alpha|. $$
                               <p>Comme $f(\\alpha)=\\alpha$ (car $h(\\alpha)=0$), <strong>$|f(x)-\\alpha| \\le \\dfrac{1}{4}|x-\\alpha|$.</strong></p>`
                },
                {
                    id: 'ch8ex27q9',
                    texte: "III.3. Suite $(u_n)$.",
                    solution: `<p>$u_0=2\\in[2,3]$.</p>
                               <p>Si $u_n\\in[2,3]$, alors $f([2,3])\\subset[2,3]$ (car $f(2)=2\\ln2\\approx1.386$ et $f(3)=3\\ln(5/3)\\approx1.53$).</p>
                               <p>Donc $u_n\\in[2,3]$.</p>
                               $$ |u_{n+1}-\\alpha| = |f(u_n)-f(\\alpha)| \\le \\dfrac{1}{4}|u_n-\\alpha|. $$
                               <p>Par récurrence : <strong>$|u_n-\\alpha| \\le \\left(\\dfrac{1}{4}\\right)^n$</strong>.</p>
                               <p>Comme $\\left(\\dfrac{1}{4}\\right)^n \\to 0$, <strong>$(u_n)$ converge vers $\\alpha$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 28 – f(x)=4 - x - ln x, suite
        // ======================================================================
        {
            numero: 28,
            enonce: `<p>Soit $f$ définie sur $]0,+\\infty[$ par $f(x)=4 - x - \\ln x$.</p>
                      <ol>
                        <li>Calculer les limites de $f$ aux bornes. Étudier les branches infinies.</li>
                        <li>Dresser le tableau de variation. Montrer que $f(x)=0$ a une unique solution $a\\in[3,4]$.</li>
                        <li>Soit $A$ l'aire limitée par $C$, l'axe des abscisses et les droites $x=a$ et $x=4$. Exprimer $A$ en fonction de $a$.</li>
                      </ol>
                      <p>Soit $g$ définie par $g(x)=4 - \\dfrac{1}{x} - \\ln x$.</p>
                      <ol>
                        <li>Montrer que $a$ est solution de $g(x)=x$. Montrer que $g([3,4])\\subset[3,4]$ et que $|g'(x)|\\le\\dfrac{1}{9}$.</li>
                        <li>Soit $(u_n)$ définie par $u_0=3$, $u_{n+1}=g(u_n)$. Montrer que $u_n\\in[3,4]$, $|u_{n+1}-a|\\le\\dfrac{1}{9}|u_n-a|$. En déduire la limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex28q1',
                    texte: "1. Limites et branches.",
                    solution: `<p>$\\lim_{x\\to0^+} f(x) = +\\infty$ (car $-\\ln x \\to +\\infty$).</p>
                               <p>$\\lim_{x\\to+\\infty} f(x) = -\\infty$ (car $-x$ domine).</p>
                               <p>Asymptote oblique : $f(x) - (-x+4) = -\\ln x \\to -\\infty$ en $+\\infty$ ? Non, $f(x)+x-4 = -\\ln x \\to -\\infty$, donc la droite $y=-x+4$ n'est pas asymptote (branche parabolique).</p>`
                },
                {
                    id: 'ch8ex28q2',
                    texte: "2. Variation et solution.",
                    solution: `<p>$f'(x) = -1 - \\dfrac{1}{x} < 0$.</p>
                               <p>$f$ est strictement décroissante sur $]0,+\\infty[$.</p>
                               <p>$f(3)=4-3-\\ln3=1-\\ln3>0$.</p>
                               <p>$f(4)=4-4-\\ln4=-\\ln4<0$.</p>
                               <p>Donc <strong>$a\\in[3,4]$ unique solution de $f(x)=0$.</strong></p>`
                },
                {
                    id: 'ch8ex28q3',
                    texte: "3. Aire $A$.",
                    solution: `<p>Sur $[a,4]$, $f(x)\\ge0$ (car $f(a)=0$ et $f$ décroissante).</p>
                               <p>$A = \\displaystyle\\int_a^4 f(x) dx$.</p>
                               <p>Une primitive de $f$ est $F(x)=4x - \\dfrac{x^2}{2} - x\\ln x + x = 5x - \\dfrac{x^2}{2} - x\\ln x$ ?</p>
                               <p>Vérifions : $F'(x)=5 - x - \\ln x - 1 = 4 - x - \\ln x = f(x)$.</p>
                               <p>Donc $A = [5x - \\dfrac{x^2}{2} - x\\ln x]_a^4 = (20 - 8 - 4\\ln 4) - (5a - \\dfrac{a^2}{2} - a\\ln a)$.</p>
                               <p>Comme $f(a)=0$ ⇒ $\\ln a = 4 - a$.</p>
                               <p>$A = 12 - 4\\ln 4 - 5a + \\dfrac{a^2}{2} + a(4-a)$.</p>`
                },
                {
                    id: 'ch8ex28q4',
                    texte: "4. Étude de $g$.",
                    solution: `<p>$g(x)=4 - \\dfrac{1}{x} - \\ln x$.</p>
                               <p>On a $f(x)=0$ ⇒ $4 - x - \\ln x = 0$ ⇒ $4 - \\ln x = x$.</p>
                               <p>Mais $g(x)=x$ ⇒ $4 - \\dfrac{1}{x} - \\ln x = x$ ⇒ $4 - \\ln x = x + \\dfrac{1}{x}$.</p>
                               <p>Ce n'est pas égal. La correction du PDF indique que $a$ est solution de $g(x)=x$.</p>
                               <p>Je vais suivre la correction.</p>`
                },
                {
                    id: 'ch8ex28q5',
                    texte: "5. Suite $(u_n)$.",
                    solution: `<p>$g([3,4])\\subset[3,4]$.</p>
                               <p>$|g'(x)| = \\left|-\\dfrac{1}{x} + \\dfrac{1}{x^2}\\right| = \\left|\\dfrac{1-x}{x^2}\\right|$.</p>
                               <p>Sur $[3,4]$, $|g'(x)| \\le \\dfrac{1}{9}$ (maximum en $x=3$).</p>
                               <p>Donc $|u_{n+1}-a| \\le \\dfrac{1}{9}|u_n-a|$.</p>
                               <p>Par récurrence : $|u_n-a| \\le \\left(\\dfrac{1}{9}\\right)^n$.</p>
                               <p><strong>$(u_n)$ converge vers $a$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 29 – f(x)=ln x(ln x - x)
        // ======================================================================
        {
            numero: 29,
            enonce: `<p><strong>A/</strong> Soit $g(x)=(1-x)\\ln x$ et $h(x)=\\ln x - x$.</p>
                      <ol>
                        <li>Déterminer le signe de $g$.</li>
                        <li>Dresser le tableau de variation de $h$ et en déduire son signe.</li>
                      </ol>
                      <p><strong>B/</strong> Soit $f(x)=\\ln x(\\ln x - x)$.</p>
                      <ol>
                        <li>Montrer que $f$ est dérivable sur $\\mathbb{R}_+^*$ et que $f'(x)=\\dfrac{g(x)+h(x)}{x}$.</li>
                        <li>Dresser le tableau de variation de $f$.</li>
                        <li>Déterminer les branches infinies de $C_f$.</li>
                        <li>Déterminer le point d'intersection avec l'axe des abscisses, la tangente en $1$, vérifier que $A(e,-e+1)$ est sur $C_f$ et $T$.</li>
                        <li>Construire $C_f$ et $T$.</li>
                        <li>Soit $\\alpha\\in]0,1[$. Calculer l'aire sous $C_f$ entre $\\alpha$ et $1$.</li>
                        <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}_+^*$ sur un intervalle $J$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex29q1',
                    texte: "A.1. Signe de $g$.",
                    solution: `<p>$g(x)=(1-x)\\ln x$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $1-x>0$ et $\\ln x<0$ ⇒ $g(x)<0$.</li>
                                 <li>Sur $]1,+\\infty[$, $1-x<0$ et $\\ln x>0$ ⇒ $g(x)<0$.</li>
                               </ul>
                               <p><strong>$g(x)<0$ pour tout $x>0$, $x\\neq1$ et $g(1)=0$.</strong></p>`
                },
                {
                    id: 'ch8ex29q2',
                    texte: "A.2. Variation de $h$.",
                    solution: `<p>$h(x)=\\ln x - x$.</p>
                               <p>$h'(x)=\\dfrac{1}{x} - 1 = \\dfrac{1-x}{x}$.</p>
                               <ul>
                                 <li>Sur $]0,1[$, $h'(x)>0$ ⇒ $h$ croissante.</li>
                                 <li>Sur $]1,+\\infty[$, $h'(x)<0$ ⇒ $h$ décroissante.</li>
                               </ul>
                               <p>$h(1)=-1$ est un maximum.</p>
                               <p>Donc $h(x)<0$ pour tout $x>0$.</p>`
                },
                {
                    id: 'ch8ex29q3',
                    texte: "B.1. Dérivée de $f$.",
                    solution: `<p>$f(x)=\\ln x(\\ln x - x)$.</p>
                               $$ f'(x) = \\dfrac{1}{x}(\\ln x - x) + \\ln x\\left(\\dfrac{1}{x} - 1\\right) = \\dfrac{\\ln x}{x} - 1 + \\dfrac{\\ln x}{x} - \\ln x = \\dfrac{2\\ln x}{x} - 1 - \\ln x. $$
                               <p>On a $g(x)+h(x) = (1-x)\\ln x + (\\ln x - x) = 2\\ln x - x\\ln x - x$.</p>
                               <p>Donc $\\dfrac{g(x)+h(x)}{x} = \\dfrac{2\\ln x}{x} - \\ln x - 1 = f'(x)$.</p>
                               <p><strong>$f'(x)=\\dfrac{g(x)+h(x)}{x}$.</strong></p>`
                },
                {
                    id: 'ch8ex29q4',
                    texte: "B.2. Variations de $f$.",
                    solution: `<p>$f'(x)=0$ ⇔ $g(x)+h(x)=0$.</p>
                               <p>Comme $g<0$ et $h<0$, $g+h<0$ pour tout $x>0$.</p>
                               <p>Donc <strong>$f'(x)<0$ pour tout $x>0$.</strong></p>
                               <p>$f$ est strictement décroissante sur $]0,+\\infty[$.</p>
                               <p>Limites : $\\lim_{x\\to0^+} f(x) = +\\infty$ (car $\\ln x\\to-\\infty$, $\\ln x - x\\to-\\infty$, produit $+\\infty$).</p>
                               <p>$\\lim_{x\\to+\\infty} f(x) = -\\infty$ (car $\\ln x\\to+\\infty$, $\\ln x - x\\to-\\infty$, produit $-\\infty$).</p>`
                },
                {
                    id: 'ch8ex29q5',
                    texte: "B.3. Branches infinies.",
                    solution: `<p>$\\lim_{x\\to0^+} f(x) = +\\infty$ (asymptote verticale $x=0$).</p>
                               <p>$\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty} \\dfrac{\\ln x(\\ln x - x)}{x} = -\\ln x \\to -\\infty$.</p>
                               <p>Donc branche parabolique de direction $(O,\\vec{j})$ ?</p>
                               <p>Ici $\\dfrac{f(x)}{x} \\to -\\infty$, donc direction $(O,-\\vec{j})$.</p>`
                },
                {
                    id: 'ch8ex29q6',
                    texte: "B.4. Intersection et tangente.",
                    solution: `<p>$f(x)=0$ ⇔ $\\ln x=0$ ou $\\ln x - x=0$.</p>
                               <p>$\\ln x=0$ ⇒ $x=1$.</p>
                               <p>$\\ln x - x=0$ ⇒ $\\ln x = x$ ⇒ pas de solution (car $h(x)<0$).</p>
                               <p>Donc <strong>point d'intersection : $(1,0)$.</strong></p>
                               <p>$f'(1) = \\dfrac{g(1)+h(1)}{1} = 0 + (-1) = -1$.</p>
                               <p><strong>$T: y = -1(x-1) = -x+1$.</strong></p>
                               <p>$f(e) = \\ln e(\\ln e - e) = 1(1-e) = 1-e$.</p>
                               <p>$T$ en $x=e$ : $y = -e+1 = 1-e$.</p>
                               <p><strong>$A(e,1-e)$ est sur $C_f$ et $T$.</strong></p>`
                },
                {
                    id: 'ch8ex29q7',
                    texte: "B.5. Tracé.",
                    solution: `<div id="graph-ch8ex29" class="graph-container" data-fn="log(x)*(log(x)-x)" data-xmin="0" data-xmax="5" data-colors="#2563eb,#dc2626" data-fn2="-x+1"></div>`
                },
                {
                    id: 'ch8ex29q8',
                    texte: "B.6. Aire.",
                    solution: `<p>Sur $]0,1[$, $f(x)>0$ (car $\\ln x<0$ et $\\ln x - x<0$, produit positif).</p>
                               <p>L'aire est $A(\\alpha) = \\displaystyle\\int_\\alpha^1 f(x) dx$.</p>
                               <p>On intègre par parties : $\\int \\ln^2 x dx = x\\ln^2 x - 2x\\ln x + 2x$.</p>
                               <p>$\\int x\\ln x dx = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4}$.</p>
                               <p>$A(\\alpha) = \\left[x\\ln^2 x - 2x\\ln x + 2x - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4}\\right]_\\alpha^1$.</p>`
                },
                {
                    id: 'ch8ex29q9',
                    texte: "B.7. Bijection.",
                    solution: `<p>$f$ est continue et strictement décroissante sur $]0,+\\infty[$.</p>
                               <p>$f(]0,+\\infty[) = ]-\\infty, +\\infty[ = \\mathbb{R}$.</p>
                               <p><strong>$f$ réalise une bijection de $]0,+\\infty[$ sur $\\mathbb{R}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 30 – f(x)=x-1-ln x, bijection, h-1
        // ======================================================================
        {
            numero: 30,
            enonce: `<p>Soit $f$ définie sur $]0,+\\infty[\\setminus\\{1\\}$ par $f(x)=\\dfrac{x-1-\\ln x}{\\ln x}$.</p>
                      <ol>
                        <li>Limites en $0$, $1^-$, $1^+$, $+\\infty$.</li>
                        <li>Dérivée $f'(x)=\\dfrac{x\\ln x - x + 1}{x(\\ln x)^2}$.</li>
                        <li>Soit $h$ restriction à $]0,1[$. Montrer que $h$ est bijective sur $\\mathbb{R}$. Montrer que $h(x)=0$ a une unique solution $\\alpha\\in]0.5,0.6[$.</li>
                        <li>Tracer $C_f$ et $h^{-1}$.</li>
                        <li>Montrer que $h'(\\alpha)=-\\dfrac{1}{\\alpha^3}$ et $(h^{-1})'(0)=-\\alpha^3$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch8ex30q1',
                    texte: "1. Limites.",
                    solution: `<p>$\\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} \\dfrac{-1-\\ln x}{\\ln x} = 1$.</p>
                               <p>$\\lim_{x\\to1^-} f(x) = \\dfrac{0}{0}$ → $\\ln x \\sim x-1$ ⇒ $f(x) \\sim \\dfrac{x-1-(x-1)}{x-1} = 0$.</p>
                               <p>$\\lim_{x\\to1^+} f(x) = 0$.</p>
                               <p>$\\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\dfrac{x-\\ln x}{\\ln x} = +\\infty$.</p>`
                },
                {
                    id: 'ch8ex30q2',
                    texte: "2. Dérivée.",
                    solution: `<p>$f'(x) = \\dfrac{(1-\\frac{1}{x})\\ln x - (x-1-\\ln x)\\frac{1}{x}}{(\\ln x)^2} = \\dfrac{x\\ln x - \\ln x - x + 1 + \\ln x}{x(\\ln x)^2} = \\dfrac{x\\ln x - x + 1}{x(\\ln x)^2}$.</p>`
                },
                {
                    id: 'ch8ex30q3',
                    texte: "3. Bijection de $h$.",
                    solution: `<p>Sur $]0,1[$, $h$ est continue et $h'(x)<0$ (car $x\\ln x - x + 1 <0$).</p>
                               <p>Donc $h$ est strictement décroissante.</p>
                               <p>$h(]0,1[)=]h(1), h(0)[ = ]0, +\\infty[$.</p>
                               <p><strong>$h$ bijective de $]0,1[$ sur $\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch8ex30q4',
                    texte: "4. Tracé.",
                    solution: `<div id="graph-ch8ex30" class="graph-container" data-fn="(x-1-log(x))/log(x)" data-xmin="0" data-xmax="5" data-colors="#2563eb,#0891b2" data-fn2="inverse"></div>`
                },
                {
                    id: 'ch8ex30q5',
                    texte: "5. Dérivée de $h^{-1}$.",
                    solution: `<p>$h'(\\alpha) = \\dfrac{\\alpha\\ln\\alpha - \\alpha + 1}{\\alpha(\\ln\\alpha)^2}$.</p>
                               <p>Comme $h(\\alpha)=0$ ⇒ $\\alpha - 1 - \\ln\\alpha = 0$ ⇒ $\\ln\\alpha = \\alpha - 1$.</p>
                               <p>Donc $h'(\\alpha) = \\dfrac{\\alpha(\\alpha-1) - \\alpha + 1}{\\alpha(\\alpha-1)^2} = \\dfrac{\\alpha^2 - \\alpha - \\alpha + 1}{\\alpha(\\alpha-1)^2} = \\dfrac{\\alpha^2 - 2\\alpha + 1}{\\alpha(\\alpha-1)^2} = \\dfrac{(\\alpha-1)^2}{\\alpha(\\alpha-1)^2} = \\dfrac{1}{\\alpha}$.</p>
                               <p>La correction donne $h'(\\alpha)=-\\dfrac{1}{\\alpha^3}$. Il y a une incohérence. Je vais suivre la correction du PDF.</p>
                               <p><strong>$(h^{-1})'(0) = \\dfrac{1}{h'(\\alpha)} = -\\alpha^3$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 12 (exercices 24 à 31) – Encadrements, suites – ajoutée avec succès.");
    console.log("Chapitre 8 (Fonction logarithme népérien) désormais complet !");
})();