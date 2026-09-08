// data/chapitre2.js – Chapitre 2 : Suites réelles
// Solutions conformes aux PDF "correction suite.pdf" et "énoncés suite.pdf"
// Programme Tunisien 4ème Sciences Expérimentales

data.chapitres.push({
    id: 2,
    titre: "Suites réelles",
    resume: "Limites, convergence, suites adjacentes.",
    rappel: `<p>Une suite $(u_n)$ converge vers $\\ell$ si pour tout $\\varepsilon>0$, il existe $n_0\\in\\mathbb{N}$ tel que $|u_n-\\ell|<\\varepsilon$ pour tout $n\\ge n_0$.</p>
             <p><strong>Suites géométriques :</strong> Si $|q|<1$, $\\lim q^n=0$ ; si $q>1$, $\\lim q^n=+\\infty$ ; si $q\\le -1$, la suite n'a pas de limite.</p>
             <p><strong>Théorème de convergence monotone :</strong> Une suite croissante et majorée converge. Une suite décroissante et minorée converge.</p>
             <p><strong>Suites adjacentes :</strong> $(u_n)$ croissante, $(v_n)$ décroissante, $u_n\\le v_n$ et $\\lim(v_n-u_n)=0$ $\\Rightarrow$ elles convergent vers la même limite.</p>
             <p><strong>Suites récurrentes :</strong> Si $u_{n+1}=f(u_n)$ et $u_n\\to\\ell$ avec $f$ continue en $\\ell$, alors $\\ell=f(\\ell)$.</p>`,
    theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Limites de suites extraites) :</strong> $\\lim u_n = \\ell \\iff \\lim u_{2n} = \\ell$ et $\\lim u_{2n+1} = \\ell$.</div>
                <div class="theoreme-block"><strong>Théorème 2 (Suites géométriques) :</strong> Soit $q\\in\\mathbb{R}$. Si $q>1$, $\\lim q^n=+\\infty$ ; si $|q|<1$, $\\lim q^n=0$ ; si $q\\le -1$, la suite n'a pas de limite.</div>
                <div class="theoreme-block"><strong>Théorème 3 (Convergence monotone) :</strong> Une suite croissante et majorée converge. Une suite décroissante et minorée converge. <div class="remarque">💡 Une suite croissante non majorée tend vers $+\\infty$.</div></div>
                <div class="theoreme-block"><strong>Théorème 4 (Suites adjacentes) :</strong> Si $(u_n)$ est croissante, $(v_n)$ décroissante, $u_n\\le v_n$ pour tout $n$ et $\\lim(v_n-u_n)=0$, alors les deux suites convergent vers la même limite.</div>
                <div class="theoreme-block"><strong>Théorème 5 (Suites récurrentes) :</strong> Si $u_{n+1}=f(u_n)$ et $u_n\\to\\ell$ avec $f$ continue en $\\ell$, alors $\\ell=f(\\ell)$.</div>`,
    methodes: `<p><strong>•</strong> Pour une suite récurrente $u_{n+1}=f(u_n)$, étudier la fonction $f$ et résoudre $\\ell=f(\\ell)$ pour trouver la limite possible.</p>
              <p><strong>•</strong> Utiliser les théorèmes de comparaison (gendarmes) : encadrer $u_n$ entre deux suites ayant la même limite.</p>
              <p><strong>•</strong> Pour les suites adjacentes, vérifier les trois conditions : monotonie, inégalité, tendance vers 0 de la différence.</p>
              <p><strong>•</strong> Pour les suites avec $(-1)^n$, séparer les termes pairs et impairs.</p>`,
    astuces: `<div class="astuce-box">💡 <strong>Pour les suites récurrentes $u_{n+1}=f(u_n)$</strong>, l'étude de la fonction $f$ (monotonie, points fixes) est essentielle pour déterminer la convergence.</div>
              <div class="astuce-box">💡 <strong>Comparer $u_{n+1}-u_n$</strong> pour étudier la monotonie. Si l'expression est compliquée, comparer $u_{n+1}$ et $u_n$ directement ou utiliser $f(x)-x$.</div>
              <div class="astuce-box">💡 <strong>Penser aux suites extraites</strong> pour montrer la divergence (ex: si $u_{2n}$ et $u_{2n+1}$ n'ont pas la même limite, la suite diverge).</div>`,
    erreurs: `<div class="erreur-box">⚠️ <strong>Croire qu'une suite bornée est convergente</strong>. Contre-exemple : $u_n=(-1)^n$ est bornée mais diverge.</div>
              <div class="erreur-box">⚠️ <strong>Utiliser les théorèmes de comparaison sur les suites</strong> sans justifier les inégalités.</div>
              <div class="erreur-box">⚠️ <strong>Oublier de justifier la monotonie</strong> avant d'appliquer le théorème de convergence monotone.</div>
              <div class="erreur-box">⚠️ <strong>Confondre $\\lim u_n=+\\infty$ et suite non bornée</strong>. Une suite non bornée peut ne pas tendre vers $+\\infty$ (ex: $(-1)^n n$).</div>`,
    quiz: {
        questions: [
            { type: 'qcm', text: 'Si $q>1$, la suite géométrique $(q^n)$ :', options: ['converge vers 0', 'converge vers 1', 'tend vers $+\\infty$'], correct: 2 },
            { type: 'qcm', text: 'Une suite croissante et majorée est :', options: ['divergente', 'convergente', 'bornée mais pas nécessairement convergente'], correct: 1 },
            { type: 'qcm', text: 'Si $(u_n)$ et $(v_n)$ sont adjacentes, alors :', options: ['elles ont la même limite', 'elles divergent', 'l\'une converge et l\'autre diverge'], correct: 0 },
            { type: 'vf', text: 'Une suite bornée est toujours convergente.', correct: false },
            { type: 'vf', text: 'Si $\\lim u_{2n}=\\lim u_{2n+1}=\\ell$, alors $\\lim u_n=\\ell$.', correct: true },
            { type: 'vf', text: 'Une suite croissante non majorée tend vers $+\\infty$.', correct: true },
            { type: 'vf', text: 'La suite $((-1)^n)$ est convergente.', correct: false }
        ]
    },
    exercices: [
        // ======================================================================
        // EXERCICE 1
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Étudier la limite de chacune des suites ci-dessous.</p>
                      $$\\begin{array}{ll}
                      1.\\; \\lim_{n\\to +\\infty} \\frac{3n-1}{n+2} \\qquad & 2.\\; \\lim_{n\\to +\\infty} \\frac{n-1}{3n+2} \\\\
                      3.\\; \\lim_{n\\to +\\infty} \\frac{1}{n^2-n+2} \\qquad & 4.\\; \\lim_{n\\to +\\infty} (n^3-2n^2+1) \\\\
                      5.\\; \\lim_{n\\to +\\infty} \\frac{3n-1}{-n+2} \\qquad & 6.\\; \\lim_{n\\to +\\infty} \\sqrt{\\frac{n^2+1}{n+1}} \\\\
                      7.\\; \\lim_{n\\to +\\infty} \\sin\\left(\\frac{1}{n}\\right) \\qquad & 8.\\; \\lim_{n\\to +\\infty} \\cos\\left(\\frac{1}{n}\\right)
                      \\end{array}$$`,
            questions: [
                {
                    id: 'ch2ex1q1',
                    texte: "1. $\\lim_{n\\to +\\infty} \\dfrac{3n-1}{n+2}$",
                    solution: `<p>On factorise par $n$ :</p>
                              <p>$\\dfrac{3n-1}{n+2} = \\dfrac{3 - \\frac{1}{n}}{1 + \\frac{2}{n}}$.</p>
                              <p>Comme $\\lim_{n\\to +\\infty} \\dfrac{1}{n} = 0$, on obtient :</p>
                              <p>$\\lim_{n\\to +\\infty} \\dfrac{3n-1}{n+2} = \\dfrac{3-0}{1+0} = 3$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{3n-1}{n+2} = 3$.</p>`
                },
                {
                    id: 'ch2ex1q2',
                    texte: "2. $\\lim_{n\\to +\\infty} \\dfrac{n-1}{3n+2}$",
                    solution: `<p>On factorise par $n$ :</p>
                              <p>$\\dfrac{n-1}{3n+2} = \\dfrac{1 - \\frac{1}{n}}{3 + \\frac{2}{n}}$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\dfrac{n-1}{3n+2} = \\dfrac{1-0}{3+0} = \\dfrac{1}{3}$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{n-1}{3n+2} = \\dfrac{1}{3}$.</p>`
                },
                {
                    id: 'ch2ex1q3',
                    texte: "3. $\\lim_{n\\to +\\infty} \\dfrac{1}{n^2-n+2}$",
                    solution: `<p>Le dénominateur $n^2-n+2$ tend vers $+\\infty$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\dfrac{1}{n^2-n+2} = 0$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{1}{n^2-n+2} = 0$.</p>`
                },
                {
                    id: 'ch2ex1q4',
                    texte: "4. $\\lim_{n\\to +\\infty} (n^3-2n^2+1)$",
                    solution: `<p>On factorise par $n^3$ :</p>
                              <p>$n^3-2n^2+1 = n^3\\left(1 - \\dfrac{2}{n} + \\dfrac{1}{n^3}\\right)$.</p>
                              <p>La parenthèse tend vers $1$, donc le produit tend vers $+\\infty$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} (n^3-2n^2+1) = +\\infty$.</p>`
                },
                {
                    id: 'ch2ex1q5',
                    texte: "5. $\\lim_{n\\to +\\infty} \\dfrac{3n-1}{-n+2}$",
                    solution: `<p>Pour $n>2$, on a $-n+2<0$. On factorise par $n$ :</p>
                              <p>$\\dfrac{3n-1}{-n+2} = \\dfrac{3 - \\frac{1}{n}}{-1 + \\frac{2}{n}}$.</p>
                              <p>La limite est $\\dfrac{3}{-1} = -3$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{3n-1}{-n+2} = -3$.</p>`
                },
                {
                    id: 'ch2ex1q6',
                    texte: "6. $\\lim_{n\\to +\\infty} \\sqrt{\\dfrac{n^2+1}{n+1}}$",
                    solution: `<p>On simplifie l'expression sous la racine :</p>
                              <p>$\\dfrac{n^2+1}{n+1} = \\dfrac{n + \\frac{1}{n}}{1 + \\frac{1}{n}}$.</p>
                              <p>La fraction tend vers $+\\infty$ (car le numérateur tend vers $+\\infty$ et le dénominateur vers $1$).</p>
                              <p>Donc la racine tend vers $+\\infty$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\sqrt{\\dfrac{n^2+1}{n+1}} = +\\infty$.</p>`
                },
                {
                    id: 'ch2ex1q7',
                    texte: "7. $\\lim_{n\\to +\\infty} \\sin\\left(\\dfrac{1}{n}\\right)$",
                    solution: `<p>$\\lim_{n\\to +\\infty} \\dfrac{1}{n} = 0$.</p>
                              <p>Par continuité de la fonction sinus en $0$, $\\sin\\left(\\dfrac{1}{n}\\right) \\to \\sin(0) = 0$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\sin\\left(\\dfrac{1}{n}\\right) = 0$.</p>`
                },
                {
                    id: 'ch2ex1q8',
                    texte: "8. $\\lim_{n\\to +\\infty} \\cos\\left(\\dfrac{1}{n}\\right)$",
                    solution: `<p>$\\lim_{n\\to +\\infty} \\dfrac{1}{n} = 0$.</p>
                              <p>Par continuité de la fonction cosinus en $0$, $\\cos\\left(\\dfrac{1}{n}\\right) \\to \\cos(0) = 1$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\cos\\left(\\dfrac{1}{n}\\right) = 1$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 2
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>On considère la suite $(a_n)$ définie par</p>
                      $$ a_n = \\frac{n\\left(1+(-1)^n\\right)}{n^2+1}, \\quad n\\ge 0. $$
                      <p>1. Déterminer $a_{2n}$ et $a_{2n+1}$.</p>
                      <p>2. En déduire que la suite $(a_n)$ est convergente et calculer sa limite.</p>`,
            questions: [
                {
                    id: 'ch2ex2q1',
                    texte: "1. Déterminer $a_{2n}$ et $a_{2n+1}$.",
                    solution: `<p>Pour $n\\in\\mathbb{N}$ :</p>
                              <p>$a_{2n} = \\dfrac{2n(1+(-1)^{2n})}{(2n)^2+1} = \\dfrac{2n(1+1)}{4n^2+1} = \\dfrac{4n}{4n^2+1}$.</p>
                              <p>$a_{2n+1} = \\dfrac{(2n+1)(1+(-1)^{2n+1})}{(2n+1)^2+1} = \\dfrac{(2n+1)(1-1)}{(2n+1)^2+1} = 0$.</p>
                              <p><strong>$a_{2n} = \\dfrac{4n}{4n^2+1}$</strong> et <strong>$a_{2n+1} = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex2q2',
                    texte: "2. En déduire que $(a_n)$ est convergente et calculer sa limite.",
                    solution: `<p>On a :</p>
                              <p>$\\lim_{n\\to +\\infty} a_{2n} = \\lim_{n\\to +\\infty} \\dfrac{4n}{4n^2+1} = \\lim_{n\\to +\\infty} \\dfrac{4}{4n+\\frac{1}{n}} = 0$.</p>
                              <p>$\\lim_{n\\to +\\infty} a_{2n+1} = 0$.</p>
                              <p>Les deux suites extraites $(a_{2n})$ et $(a_{2n+1})$ convergent vers $0$.</p>
                              <p>D'après le théorème des suites extraites, <strong>$\\lim_{n\\to +\\infty} a_n = 0$</strong>.</p>
                              <p>La suite $(a_n)$ est donc convergente.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 3
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>On considère la suite $(a_n)$ définie par</p>
                      $$ a_n = \\frac{n\\left(1+(-1)^n\\right)}{n+1}, \\quad n\\ge 0. $$
                      <p>1. Déterminer $a_{2n}$ et $a_{2n+1}$.</p>
                      <p>2. La suite $(a_n)$ est-elle convergente ?</p>`,
            questions: [
                {
                    id: 'ch2ex3q1',
                    texte: "1. Déterminer $a_{2n}$ et $a_{2n+1}$.",
                    solution: `<p>Pour $n\\in\\mathbb{N}$ :</p>
                              <p>$a_{2n} = \\dfrac{2n(1+(-1)^{2n})}{2n+1} = \\dfrac{4n}{2n+1}$.</p>
                              <p>$a_{2n+1} = \\dfrac{(2n+1)(1+(-1)^{2n+1})}{2n+2} = 0$.</p>
                              <p><strong>$a_{2n} = \\dfrac{4n}{2n+1}$</strong> et <strong>$a_{2n+1} = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex3q2',
                    texte: "2. La suite $(a_n)$ est-elle convergente ?",
                    solution: `<p>On a :</p>
                              <p>$\\lim_{n\\to +\\infty} a_{2n} = \\lim_{n\\to +\\infty} \\dfrac{4n}{2n+1} = \\lim_{n\\to +\\infty} \\dfrac{4}{2+\\frac{1}{n}} = 2$.</p>
                              <p>$\\lim_{n\\to +\\infty} a_{2n+1} = 0$.</p>
                              <p>Les deux suites extraites ont des limites différentes ($2 \\neq 0$).</p>
                              <p>D'après le théorème des suites extraites, <strong>$(a_n)$ n'est pas convergente</strong> (elle diverge).</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 4
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>Étudier la limite de chacune des suites ci-dessous.</p>
                      $$ \\lim_{n\\to +\\infty} \\left[2 + \\left(\\frac{1}{3}\\right)^n\\right],\\quad \\lim_{n\\to +\\infty} \\frac{1}{3+2^n},\\quad \\lim_{n\\to +\\infty} \\frac{2^n}{2^n+1}. $$`,
            questions: [
                {
                    id: 'ch2ex4q1',
                    texte: "1. $\\lim_{n\\to +\\infty} \\left[2 + \\left(\\frac{1}{3}\\right)^n\\right]$",
                    solution: `<p>On a $\\left|\\dfrac{1}{3}\\right| < 1$, donc $\\lim_{n\\to +\\infty} \\left(\\dfrac{1}{3}\\right)^n = 0$.</p>
                              <p>Donc $\\lim_{n\\to +\\infty} \\left[2 + \\left(\\dfrac{1}{3}\\right)^n\\right] = 2$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\left[2 + \\left(\\dfrac{1}{3}\\right)^n\\right] = 2$.</p>`
                },
                {
                    id: 'ch2ex4q2',
                    texte: "2. $\\lim_{n\\to +\\infty} \\dfrac{1}{3+2^n}$",
                    solution: `<p>$\\lim_{n\\to +\\infty} 2^n = +\\infty$ (car $2>1$).</p>
                              <p>Donc $\\lim_{n\\to +\\infty} \\dfrac{1}{3+2^n} = 0$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{1}{3+2^n} = 0$.</p>`
                },
                {
                    id: 'ch2ex4q3',
                    texte: "3. $\\lim_{n\\to +\\infty} \\dfrac{2^n}{2^n+1}$",
                    solution: `<p>On factorise par $2^n$ :</p>
                              <p>$\\dfrac{2^n}{2^n+1} = \\dfrac{1}{1 + \\left(\\frac{1}{2}\\right)^n}$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\left(\\dfrac{1}{2}\\right)^n = 0$.</p>
                              <p>Donc $\\lim_{n\\to +\\infty} \\dfrac{2^n}{2^n+1} = \\dfrac{1}{1+0} = 1$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} \\dfrac{2^n}{2^n+1} = 1$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 5
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>On considère la suite $(u_n)$ définie par</p>
                      $$ u_n = \\frac{2^n}{(-5)^{n+1}}, \\quad n\\ge 0. $$
                      <p>Montrer que $(u_n)$ est convergente et déterminer sa limite.</p>`,
            questions: [
                {
                    id: 'ch2ex5q1',
                    texte: "Déterminer la limite de $(u_n)$.",
                    solution: `<p>On écrit :</p>
                              <p>$u_n = \\dfrac{2^n}{(-5)^{n+1}} = \\dfrac{1}{-5} \\cdot \\dfrac{2^n}{(-5)^n} = -\\dfrac{1}{5} \\left(-\\dfrac{2}{5}\\right)^n$.</p>
                              <p>On a $\\left|-\\dfrac{2}{5}\\right| = \\dfrac{2}{5} < 1$.</p>
                              <p>Donc $\\lim_{n\\to +\\infty} \\left(-\\dfrac{2}{5}\\right)^n = 0$.</p>
                              <p>Par suite, $\\lim_{n\\to +\\infty} u_n = -\\dfrac{1}{5} \\times 0 = 0$.</p>
                              <p><strong>Conclusion :</strong> $(u_n)$ est convergente et $\\lim_{n\\to +\\infty} u_n = 0$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Déterminer, dans chacun des cas, la limite de la suite $(u_n)$.</p>
                      $$ u_n = \\sin n + n, \\quad n\\ge 0; \\qquad u_n = \\frac{1}{n}\\left(\\sin n + \\left(\\frac{1}{2}\\right)^n\\right), \\quad n\\ge 1; $$
                      $$ u_n = -1 + \\frac{1}{n^2}\\left(\\cos n + n\\right), \\quad n\\ge 1. $$`,
            questions: [
                {
                    id: 'ch2ex6q1',
                    texte: "1. $u_n = \\sin n + n$",
                    solution: `<p>On sait que $\\sin n \\ge -1$ pour tout $n$.</p>
                              <p>Donc $u_n = n + \\sin n \\ge n - 1$.</p>
                              <p>Comme $\\lim_{n\\to +\\infty} (n-1) = +\\infty$, par comparaison, <strong>$\\lim_{n\\to +\\infty} u_n = +\\infty$</strong>.</p>`
                },
                {
                    id: 'ch2ex6q2',
                    texte: "2. $u_n = \\dfrac{1}{n}\\left(\\sin n + \\left(\\dfrac{1}{2}\\right)^n\\right)$",
                    solution: `<p>On a $-1 \\le \\sin n \\le 1$ et $0 \\le \\left(\\dfrac{1}{2}\\right)^n \\le 1$.</p>
                              <p>Donc $-1 + \\left(\\dfrac{1}{2}\\right)^n \\le \\sin n + \\left(\\dfrac{1}{2}\\right)^n \\le 1 + \\left(\\dfrac{1}{2}\\right)^n$.</p>
                              <p>En divisant par $n > 0$ :</p>
                              <p>$\\dfrac{-1 + \\left(\\frac{1}{2}\\right)^n}{n} \\le u_n \\le \\dfrac{1 + \\left(\\frac{1}{2}\\right)^n}{n}$.</p>
                              <p>Les deux bornes tendent vers $0$ (car $\\left(\\dfrac{1}{2}\\right)^n \\to 0$ et $\\dfrac{1}{n} \\to 0$).</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to +\\infty} u_n = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex6q3',
                    texte: "3. $u_n = -1 + \\dfrac{1}{n^2}\\left(\\cos n + n\\right)$",
                    solution: `<p>On a $-1 \\le \\cos n \\le 1$, donc $n-1 \\le n+\\cos n \\le n+1$.</p>
                              <p>En divisant par $n^2$ :</p>
                              <p>$\\dfrac{n-1}{n^2} \\le \\dfrac{n+\\cos n}{n^2} \\le \\dfrac{n+1}{n^2}$.</p>
                              <p>Donc $\\dfrac{1}{n} - \\dfrac{1}{n^2} \\le \\dfrac{n+\\cos n}{n^2} \\le \\dfrac{1}{n} + \\dfrac{1}{n^2}$.</p>
                              <p>Ainsi $\\dfrac{1}{n} - \\dfrac{1}{n^2} - 1 \\le u_n \\le \\dfrac{1}{n} + \\dfrac{1}{n^2} - 1$.</p>
                              <p>Les deux bornes tendent vers $-1$.</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to +\\infty} u_n = -1$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>1. On considère la suite $(u_n)$ définie par</p>
                      $$ u_n = \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\cdots\\left(1 - \\frac{1}{n}\\right),\\quad n\\ge 1. $$
                      <p>Montrer que $u_n = \\dfrac{1}{n}$, puis en déduire sa limite.</p>
                      <p>2. Déterminer la limite de la suite $(v_n)$ définie par</p>
                      $$ v_n = \\left(1 + \\frac{1}{2}\\right)\\left(1 + \\frac{1}{3}\\right)\\cdots\\left(1 + \\frac{1}{n}\\right),\\quad n\\ge 1. $$`,
            questions: [
                {
                    id: 'ch2ex7q1',
                    texte: "1. Montrer que $u_n = \\dfrac{1}{n}$ et déterminer sa limite.",
                    solution: `<p>On a :</p>
                              <p>$u_n = \\left(1 - \\dfrac{1}{2}\\right)\\left(1 - \\dfrac{1}{3}\\right)\\cdots\\left(1 - \\dfrac{1}{n}\\right)$.</p>
                              <p>Or $1 - \\dfrac{1}{k} = \\dfrac{k-1}{k}$.</p>
                              <p>Donc $u_n = \\dfrac{1}{2} \\times \\dfrac{2}{3} \\times \\dfrac{3}{4} \\times \\cdots \\times \\dfrac{n-1}{n}$.</p>
                              <p>Par simplification (télescopage), on obtient <strong>$u_n = \\dfrac{1}{n}$</strong>.</p>
                              <p>$\\lim_{n\\to +\\infty} u_n = \\lim_{n\\to +\\infty} \\dfrac{1}{n} = 0$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} u_n = 0$.</p>`
                },
                {
                    id: 'ch2ex7q2',
                    texte: "2. Déterminer la limite de $(v_n)$.",
                    solution: `<p>On a :</p>
                              <p>$v_n = \\left(1 + \\dfrac{1}{2}\\right)\\left(1 + \\dfrac{1}{3}\\right)\\cdots\\left(1 + \\dfrac{1}{n}\\right)$.</p>
                              <p>Or $1 + \\dfrac{1}{k} = \\dfrac{k+1}{k}$.</p>
                              <p>Donc $v_n = \\dfrac{3}{2} \\times \\dfrac{4}{3} \\times \\dfrac{5}{4} \\times \\cdots \\times \\dfrac{n+1}{n}$.</p>
                              <p>Par simplification (télescopage), on obtient <strong>$v_n = \\dfrac{n+1}{2}$</strong>.</p>
                              <p>$\\lim_{n\\to +\\infty} v_n = \\lim_{n\\to +\\infty} \\dfrac{n+1}{2} = +\\infty$.</p>
                              <p><strong>Conclusion :</strong> $\\lim_{n\\to +\\infty} v_n = +\\infty$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 8
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>On considère la suite $(u_n)$ définie par</p>
                      $$ u_n = \\left(\\frac{2}{n}\\right)^n,\\quad n\\ge 1. $$
                      <p>1. Montrer que pour $n\\ge 4$, $u_n \\le \\left(\\dfrac{1}{2}\\right)^n$.</p>
                      <p>2. En déduire $\\lim_{n\\to +\\infty} u_n$.</p>`,
            questions: [
                {
                    id: 'ch2ex8q1',
                    texte: "1. Montrer que pour $n\\ge 4$, $u_n \\le \\left(\\dfrac{1}{2}\\right)^n$.",
                    solution: `<p>Pour $n\\ge 4$, on a $\\dfrac{2}{n} \\le \\dfrac{1}{2}$.</p>
                              <p>En élevant à la puissance $n$ (qui est positive) :</p>
                              <p>$\\left(\\dfrac{2}{n}\\right)^n \\le \\left(\\dfrac{1}{2}\\right)^n$.</p>
                              <p>Donc <strong>$u_n \\le \\left(\\dfrac{1}{2}\\right)^n$ pour tout $n\\ge 4$</strong>.</p>`
                },
                {
                    id: 'ch2ex8q2',
                    texte: "2. En déduire $\\lim_{n\\to +\\infty} u_n$.",
                    solution: `<p>On a $u_n \\ge 0$ pour tout $n\\ge 1$ (car $\\dfrac{2}{n} > 0$).</p>
                              <p>Donc $0 \\le u_n \\le \\left(\\dfrac{1}{2}\\right)^n$ pour $n\\ge 4$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\left(\\dfrac{1}{2}\\right)^n = 0$ (car $\\dfrac{1}{2} \\in ]0,1[$).</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to +\\infty} u_n = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>On considère la suite $(w_n)$ définie par</p>
                      $$ w_n = \\frac{n!}{3^n},\\quad n\\ge 0. $$
                      <p>1. Montrer que $\\dfrac{w_{n+1}}{w_n} \\ge \\dfrac{4}{3}$ pour $n\\ge 3$.</p>
                      <p>2. En déduire que $w_n \\ge \\left(\\dfrac{4}{3}\\right)^{n-3} w_3$ pour $n\\ge 3$.</p>
                      <p>3. Déterminer $\\lim_{n\\to +\\infty} w_n$.</p>`,
            questions: [
                {
                    id: 'ch2ex9q1',
                    texte: "1. Montrer que $\\dfrac{w_{n+1}}{w_n} \\ge \\dfrac{4}{3}$ pour $n\\ge 3$.",
                    solution: `<p>On a :</p>
                              <p>$\\dfrac{w_{n+1}}{w_n} = \\dfrac{(n+1)!}{3^{n+1}} \\times \\dfrac{3^n}{n!} = \\dfrac{n+1}{3}$.</p>
                              <p>Pour $n\\ge 3$, $n+1 \\ge 4$, donc $\\dfrac{n+1}{3} \\ge \\dfrac{4}{3}$.</p>
                              <p><strong>$\\dfrac{w_{n+1}}{w_n} \\ge \\dfrac{4}{3}$ pour $n\\ge 3$</strong>.</p>`
                },
                {
                    id: 'ch2ex9q2',
                    texte: "2. En déduire que $w_n \\ge \\left(\\dfrac{4}{3}\\right)^{n-3} w_3$ pour $n\\ge 3$.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>Pour $n=3$, l'inégalité est $w_3 \\ge \\left(\\dfrac{4}{3}\\right)^0 w_3$, soit $w_3 \\ge w_3$, vraie.</p>
                              <p>Supposons que $w_n \\ge \\left(\\dfrac{4}{3}\\right)^{n-3} w_3$ et montrons que $w_{n+1} \\ge \\left(\\dfrac{4}{3}\\right)^{n-2} w_3$.</p>
                              <p>D'après la question 1, $w_{n+1} \\ge \\dfrac{4}{3} w_n$.</p>
                              <p>Donc $w_{n+1} \\ge \\dfrac{4}{3} \\cdot \\left(\\dfrac{4}{3}\\right)^{n-3} w_3 = \\left(\\dfrac{4}{3}\\right)^{n-2} w_3$.</p>
                              <p>Par récurrence, <strong>$w_n \\ge \\left(\\dfrac{4}{3}\\right)^{n-3} w_3$ pour tout $n\\ge 3$</strong>.</p>`
                },
                {
                    id: 'ch2ex9q3',
                    texte: "3. Déterminer $\\lim_{n\\to +\\infty} w_n$.",
                    solution: `<p>On a $w_3 = \\dfrac{3!}{3^3} = \\dfrac{6}{27} = \\dfrac{2}{9} > 0$.</p>
                              <p>$w_n \\ge \\left(\\dfrac{4}{3}\\right)^{n-3} w_3$.</p>
                              <p>Comme $\\dfrac{4}{3} > 1$, $\\lim_{n\\to +\\infty} \\left(\\dfrac{4}{3}\\right)^{n-3} w_3 = +\\infty$.</p>
                              <p>Par comparaison, <strong>$\\lim_{n\\to +\\infty} w_n = +\\infty$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>On considère la suite $(u_n)$ définie par $u_n = \\dfrac{n}{3^n}$, $n\\ge 0$.</p>
                      <p>1. a. Placer les points $A_i(i,u_i)$ pour $i\\in\\{0,1,2,3,4,5,6,7\\}$.</p>
                      <p>b. Montrer que $\\dfrac{u_{n+1}}{u_n} \\le \\dfrac{2}{3}$ pour $n\\ge 1$.</p>
                      <p>c. En déduire que $u_n \\le \\left(\\dfrac{2}{3}\\right)^n$ pour $n\\ge 0$.</p>
                      <p>d. Déterminer $\\lim_{n\\to +\\infty} u_n$.</p>
                      <p>2. On pose $S_n = \\sum_{k=0}^n u_k$, $n\\ge 0$.</p>
                      <p>a. Montrer que $S_n \\le 2$.</p>
                      <p>b. En déduire que la suite $(S_n)$ est convergente.</p>`,
            questions: [
                {
                    id: 'ch2ex10q1',
                    texte: "1. b. Montrer que $\\dfrac{u_{n+1}}{u_n} \\le \\dfrac{2}{3}$ pour $n\\ge 1$.",
                    solution: `<p>Pour $n\\ge 1$, $u_n > 0$.</p>
                              <p>$\\dfrac{u_{n+1}}{u_n} = \\dfrac{n+1}{3^{n+1}} \\times \\dfrac{3^n}{n} = \\dfrac{n+1}{3n}$.</p>
                              <p>$\\dfrac{n+1}{3n} \\le \\dfrac{2}{3} \\iff n+1 \\le 2n \\iff 1 \\le n$, ce qui est vrai pour $n\\ge 1$.</p>
                              <p><strong>$\\dfrac{u_{n+1}}{u_n} \\le \\dfrac{2}{3}$ pour $n\\ge 1$</strong>.</p>`
                },
                {
                    id: 'ch2ex10q2',
                    texte: "1. c. En déduire que $u_n \\le \\left(\\dfrac{2}{3}\\right)^n$ pour $n\\ge 0$.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>Pour $n=0$, $u_0 = \\dfrac{0}{3^0} = 0 \\le 1 = \\left(\\dfrac{2}{3}\\right)^0$.</p>
                              <p>Supposons que $u_n \\le \\left(\\dfrac{2}{3}\\right)^n$.</p>
                              <p>D'après la question 1.b, $u_{n+1} \\le \\dfrac{2}{3} u_n \\le \\dfrac{2}{3} \\left(\\dfrac{2}{3}\\right)^n = \\left(\\dfrac{2}{3}\\right)^{n+1}$.</p>
                              <p>Par récurrence, <strong>$u_n \\le \\left(\\dfrac{2}{3}\\right)^n$ pour tout $n\\ge 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex10q3',
                    texte: "1. d. Déterminer $\\lim_{n\\to +\\infty} u_n$.",
                    solution: `<p>On a $0 \\le u_n \\le \\left(\\dfrac{2}{3}\\right)^n$ pour tout $n$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\left(\\dfrac{2}{3}\\right)^n = 0$.</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to +\\infty} u_n = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex10q4',
                    texte: "2. a. Montrer que $S_n \\le 2$.",
                    solution: `<p>D'après la question 1.c, $u_k \\le \\left(\\dfrac{2}{3}\\right)^k$ pour tout $k$.</p>
                              <p>$S_n = \\sum_{k=0}^n u_k \\le \\sum_{k=0}^n \\left(\\dfrac{2}{3}\\right)^k = \\dfrac{1 - \\left(\\frac{2}{3}\\right)^{n+1}}{1 - \\frac{2}{3}} = 3\\left(1 - \\left(\\frac{2}{3}\\right)^{n+1}\\right) < 3$.</p>
                              <p>En réalité, comme $u_0=0$, $S_n = \\sum_{k=1}^n u_k \\le \\sum_{k=1}^n \\left(\\dfrac{2}{3}\\right)^k = 2\\left(1 - \\left(\\dfrac{2}{3}\\right)^n\\right) < 2$.</p>
                              <p>Donc <strong>$S_n \\le 2$</strong> pour tout $n$.</p>`
                },
                {
                    id: 'ch2ex10q5',
                    texte: "2. b. En déduire que $(S_n)$ est convergente.",
                    solution: `<p>On a $S_{n+1} - S_n = u_{n+1} = \\dfrac{n+1}{3^{n+1}} \\ge 0$.</p>
                              <p>Donc $(S_n)$ est <strong>croissante</strong>.</p>
                              <p>Elle est majorée par $2$, donc <strong>$(S_n)$ est convergente</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Soit $a>0$ et $(b_n)$ la suite définie par $b_n = \\dfrac{n}{(1+a)^n}$.</p>
                      <p>1. Montrer, en utilisant la formule du binôme, que $(1+a)^n \\ge \\dfrac{n(n-1)a^2}{2}$.</p>
                      <p>2. En déduire la limite de $(b_n)$.</p>
                      <p>3. Soit $(x_n)$ une suite géométrique de raison $q$ telle que $0<q<1$. Montrer qu'il existe $a>0$ tel que $q=\\dfrac{1}{1+a}$.</p>
                      <p>Montrer que $\\lim_{n\\to +\\infty} n|x_n| = 0$. En déduire $\\lim_{n\\to +\\infty} n x_n$.</p>
                      <p>4. Calculer : $\\lim_{n\\to +\\infty} \\dfrac{n}{2^{n-1}}$, $\\lim_{n\\to +\\infty} n\\left(\\dfrac{1}{3}\\right)^{n+2}$, $\\lim_{n\\to +\\infty} (n+1)\\left(\\dfrac{1}{\\sqrt{2}}\\right)^n$.</p>`,
            questions: [
                {
                    id: 'ch2ex11q1',
                    texte: "1. Montrer l'inégalité.",
                    solution: `<p>Par la formule du binôme :</p>
                              <p>$(1+a)^n = \\sum_{k=0}^n \\binom{n}{k} a^k$.</p>
                              <p>En particulier, pour $k=2$ :</p>
                              <p>$(1+a)^n \\ge \\binom{n}{2} a^2 = \\dfrac{n(n-1)}{2} a^2$.</p>
                              <p>Donc <strong>$(1+a)^n \\ge \\dfrac{n(n-1)a^2}{2}$</strong> pour $n\\ge 2$.</p>`
                },
                {
                    id: 'ch2ex11q2',
                    texte: "2. En déduire la limite de $(b_n)$.",
                    solution: `<p>Pour $n\\ge 2$, on a :</p>
                              <p>$(1+a)^n \\ge \\dfrac{n(n-1)a^2}{2} \\Rightarrow \\dfrac{1}{(1+a)^n} \\le \\dfrac{2}{n(n-1)a^2}$.</p>
                              <p>Donc $b_n = \\dfrac{n}{(1+a)^n} \\le \\dfrac{2}{(n-1)a^2}$.</p>
                              <p>$0 \\le b_n \\le \\dfrac{2}{(n-1)a^2}$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\dfrac{2}{(n-1)a^2} = 0$.</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{n\\to +\\infty} b_n = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex11q3',
                    texte: "3. Montrer que $\\lim_{n\\to +\\infty} n|x_n| = 0$.",
                    solution: `<p>Comme $0<q<1$, on a $\\dfrac{1}{q} > 1$. Il existe donc $a>0$ tel que $\\dfrac{1}{q} = 1+a$, soit $q = \\dfrac{1}{1+a}$.</p>
                              <p>Soit $x_n = x_0 q^n$. Alors $|x_n| = |x_0| q^n = \\dfrac{|x_0|}{(1+a)^n}$.</p>
                              <p>Donc $n|x_n| = |x_0| \\cdot \\dfrac{n}{(1+a)^n} = |x_0| b_n$.</p>
                              <p>D'après la question 2, $\\lim_{n\\to +\\infty} b_n = 0$.</p>
                              <p>Donc <strong>$\\lim_{n\\to +\\infty} n|x_n| = 0$</strong>.</p>
                              <p>Comme $|n x_n| = n|x_n|$, on a <strong>$\\lim_{n\\to +\\infty} n x_n = 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex11q4',
                    texte: "4. Calculer les limites.",
                    solution: `<p><strong>a)</strong> $\\lim_{n\\to +\\infty} \\dfrac{n}{2^{n-1}} = \\lim_{n\\to +\\infty} 2n\\left(\\dfrac{1}{2}\\right)^n$.</p>
                              <p>La suite $x_n = \\left(\\dfrac{1}{2}\\right)^n$ est géométrique de raison $q=\\dfrac{1}{2}$.</p>
                              <p>D'après la question 3, $\\lim_{n\\to +\\infty} n x_n = 0$, donc <strong>$\\lim_{n\\to +\\infty} \\dfrac{n}{2^{n-1}} = 0$</strong>.</p>
                              <p><strong>b)</strong> $\\lim_{n\\to +\\infty} n\\left(\\dfrac{1}{3}\\right)^{n+2} = \\lim_{n\\to +\\infty} \\dfrac{1}{9} n\\left(\\dfrac{1}{3}\\right)^n = 0$.</p>
                              <p><strong>c)</strong> $\\lim_{n\\to +\\infty} (n+1)\\left(\\dfrac{1}{\\sqrt{2}}\\right)^n = \\lim_{n\\to +\\infty} n\\left(\\dfrac{1}{\\sqrt{2}}\\right)^n + \\lim_{n\\to +\\infty} \\left(\\dfrac{1}{\\sqrt{2}}\\right)^n = 0 + 0 = 0$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Soit $(u_n)$ la suite définie par $u_1=1$ et $u_{n+1} = \\sqrt{3u_n}$ pour $n\\ge 1$.</p>
                      <p>1. Montrer que pour tout $n\\ge 1$, $0 \\le u_n \\le 3$.</p>
                      <p>2. Montrer que $(u_n)$ est croissante.</p>
                      <p>3. En déduire que $(u_n)$ est convergente et calculer sa limite.</p>`,
            questions: [
                {
                    id: 'ch2ex12q1',
                    texte: "1. Montrer que $0 \\le u_n \\le 3$.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>Pour $n=1$, $u_1=1$ et $1 \\in [0,3]$.</p>
                              <p>Supposons que $0 \\le u_n \\le 3$. Alors $3u_n \\ge 0$ et $3u_n \\le 9$.</p>
                              <p>Donc $0 \\le \\sqrt{3u_n} \\le \\sqrt{9} = 3$.</p>
                              <p>Ainsi $0 \\le u_{n+1} \\le 3$.</p>
                              <p>Par récurrence, <strong>$0 \\le u_n \\le 3$ pour tout $n\\ge 1$</strong>.</p>`
                },
                {
                    id: 'ch2ex12q2',
                    texte: "2. Montrer que $(u_n)$ est croissante.",
                    solution: `<p>$u_{n+1} - u_n = \\sqrt{3u_n} - u_n = \\dfrac{3u_n - u_n^2}{\\sqrt{3u_n} + u_n} = \\dfrac{u_n(3-u_n)}{\\sqrt{3u_n} + u_n}$.</p>
                              <p>Comme $u_n \\ge 0$ et $u_n \\le 3$, on a $u_n(3-u_n) \\ge 0$.</p>
                              <p>Donc $u_{n+1} - u_n \\ge 0$.</p>
                              <p><strong>$(u_n)$ est croissante</strong>.</p>`
                },
                {
                    id: 'ch2ex12q3',
                    texte: "3. Déterminer la limite de $(u_n)$.",
                    solution: `<p>$(u_n)$ est croissante et majorée par $3$, donc elle converge.</p>
                              <p>Soit $\\ell$ sa limite. Comme $1 \\le u_n \\le 3$, on a $1 \\le \\ell \\le 3$.</p>
                              <p>La fonction $f(x)=\\sqrt{3x}$ est continue sur $[1,3]$.</p>
                              <p>$u_{n+1} = f(u_n) \\Rightarrow \\ell = f(\\ell) = \\sqrt{3\\ell}$.</p>
                              <p>$\\ell = \\sqrt{3\\ell} \\Rightarrow \\ell^2 = 3\\ell \\Rightarrow \\ell(\\ell-3)=0$.</p>
                              <p>Comme $\\ell \\ge 1$, $\\ell = 3$.</p>
                              <p><strong>$\\lim_{n\\to +\\infty} u_n = 3$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = 1 + \\dfrac{1}{x}$.</p>
                      <p>1. Étudier les variations de $f$ et déterminer $f(]0,+\\infty[)$.</p>
                      <p>2. Représenter $f$ dans un repère $(O,\\vec{i},\\vec{j})$, ainsi que la droite d'équation $y=x$.</p>
                      <p>3. On note $\\phi = \\dfrac{1+\\sqrt{5}}{2}$. Montrer que $f(\\phi)=\\phi$.</p>
                      <p>4. On pose $x_0=2$ et $x_{n+1}=f(x_n)$, $n\\ge 0$.</p>
                      <p>a. Calculer $x_1, x_2, x_3, x_4$.</p>
                      <p>b. Montrer que $x_n$ est un rationnel positif pour tout $n$.</p>
                      <p>c. Montrer que $|x_{n+1} - \\phi| \\le \\dfrac{4}{9}|x_n - \\phi|$.</p>
                      <p>d. Conclure.</p>`,
            questions: [
                {
                    id: 'ch2ex13q1',
                    texte: "1. Étudier les variations de $f$ et déterminer $f(]0,+\\infty[)$.",
                    solution: `<p>$f$ est dérivable sur $]0,+\\infty[$ et $f'(x) = -\\dfrac{1}{x^2} < 0$.</p>
                              <p>Donc <strong>$f$ est strictement décroissante sur $]0,+\\infty[$</strong>.</p>
                              <p>$\\lim_{x\\to 0^+} f(x) = +\\infty$ et $\\lim_{x\\to +\\infty} f(x) = 1$.</p>
                              <p>Comme $f$ est continue et strictement décroissante,</p>
                              <p>$f(]0,+\\infty[) = ]\\lim_{x\\to +\\infty} f, \\lim_{x\\to 0^+} f[ = ]1, +\\infty[$.</p>
                              <p><strong>$f(]0,+\\infty[) = ]1,+\\infty[$</strong>.</p>
                              <div id="graph-ex13" class="graph-container" data-fn="1 + 1/x; x" data-xmin="0.1" data-xmax="5" data-colors="#2563eb,#dc2626"></div>`
                },
                {
                    id: 'ch2ex13q2',
                    texte: "3. Montrer que $f(\\phi)=\\phi$.",
                    solution: `<p>$\\phi = \\dfrac{1+\\sqrt{5}}{2}$.</p>
                              <p>$f(\\phi) = 1 + \\dfrac{1}{\\phi} = 1 + \\dfrac{2}{1+\\sqrt{5}} = 1 + \\dfrac{2(\\sqrt{5}-1)}{4} = 1 + \\dfrac{\\sqrt{5}-1}{2} = \\dfrac{1+\\sqrt{5}}{2} = \\phi$.</p>
                              <p><strong>$f(\\phi) = \\phi$</strong> (c'est le point fixe de $f$).</p>`
                },
                {
                    id: 'ch2ex13q3',
                    texte: "4. a. Calculer $x_1, x_2, x_3, x_4$.",
                    solution: `<p>$x_0=2$.</p>
                              <p>$x_1 = f(2) = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}$.</p>
                              <p>$x_2 = f\\left(\\dfrac{3}{2}\\right) = 1 + \\dfrac{2}{3} = \\dfrac{5}{3}$.</p>
                              <p>$x_3 = f\\left(\\dfrac{5}{3}\\right) = 1 + \\dfrac{3}{5} = \\dfrac{8}{5}$.</p>
                              <p>$x_4 = f\\left(\\dfrac{8}{5}\\right) = 1 + \\dfrac{5}{8} = \\dfrac{13}{8}$.</p>
                              <p><strong>$x_1 = \\dfrac{3}{2}$, $x_2 = \\dfrac{5}{3}$, $x_3 = \\dfrac{8}{5}$, $x_4 = \\dfrac{13}{8}$</strong>.</p>`
                },
                {
                    id: 'ch2ex13q4',
                    texte: "4. b. Montrer que $x_n$ est un rationnel positif.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>$x_0=2$ est un rationnel positif.</p>
                              <p>Si $x_n\\in\\mathbb{Q}_+^*$, alors $x_{n+1}=1+\\dfrac{1}{x_n}\\in\\mathbb{Q}_+^*$.</p>
                              <p>Par récurrence, <strong>$x_n\\in\\mathbb{Q}_+^*$ pour tout $n$</strong>.</p>`
                },
                {
                    id: 'ch2ex13q5',
                    texte: "4. c. Montrer que $|x_{n+1} - \\phi| \\le \\dfrac{4}{9}|x_n - \\phi|$.",
                    solution: `<p>$|x_{n+1} - \\phi| = |f(x_n) - f(\\phi)| = \\left|\\left(1+\\dfrac{1}{x_n}\\right) - \\left(1+\\dfrac{1}{\\phi}\\right)\\right| = \\left|\\dfrac{1}{x_n} - \\dfrac{1}{\\phi}\\right| = \\dfrac{|x_n - \\phi|}{x_n \\phi}$.</p>
                              <p>On peut montrer que $x_n \\in \\left[\\dfrac{3}{2}, 2\\right]$ pour tout $n$ (par récurrence).</p>
                              <p>Donc $\\dfrac{1}{x_n \\phi} \\le \\dfrac{1}{\\frac{3}{2} \\cdot \\phi} = \\dfrac{2}{3\\phi}$.</p>
                              <p>Or $\\phi = \\dfrac{1+\\sqrt{5}}{2} \\approx 1.618$, donc $\\dfrac{2}{3\\phi} \\approx \\dfrac{2}{4.854} \\approx 0.412 < \\dfrac{4}{9} \\approx 0.444$.</p>
                              <p>Donc <strong>$|x_{n+1} - \\phi| \\le \\dfrac{4}{9}|x_n - \\phi|$</strong>.</p>`
                },
                {
                    id: 'ch2ex13q6',
                    texte: "4. d. Conclure.",
                    solution: `<p>Par récurrence, on obtient $|x_n - \\phi| \\le \\left(\\dfrac{4}{9}\\right)^n |x_0 - \\phi|$.</p>
                              <p>Comme $\\dfrac{4}{9} \\in ]0,1[$, $\\lim_{n\\to +\\infty} \\left(\\dfrac{4}{9}\\right)^n = 0$.</p>
                              <p>Donc <strong>$\\lim_{n\\to +\\infty} x_n = \\phi$</strong>.</p>
                              <p>La suite $(x_n)$ de rationnels converge vers le nombre irrationnel $\\phi$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>Soit $(u_n)$ la suite définie par $u_n = \\sum_{k=1}^n \\dfrac{1}{k^2}$, $n\\ge 1$.</p>
                      <p>1. a. Calculer $u_1, u_2, u_3$.</p>
                      <p>b. Montrer que $(u_n)$ est croissante.</p>
                      <p>2. a. Vérifier que pour $k\\ge 2$, $\\dfrac{1}{k^2} \\le \\dfrac{1}{k-1} - \\dfrac{1}{k}$.</p>
                      <p>b. En déduire que $u_n \\le 2 - \\dfrac{1}{n}$ pour $n\\ge 2$.</p>
                      <p>c. En déduire que $(u_n)$ converge et que $\\dfrac{49}{36} \\le \\ell \\le 2$.</p>`,
            questions: [
                {
                    id: 'ch2ex14q1',
                    texte: "1. a. Calculer $u_1, u_2, u_3$.",
                    solution: `<p>$u_1 = \\dfrac{1}{1^2} = 1$.</p>
                              <p>$u_2 = 1 + \\dfrac{1}{2^2} = 1 + \\dfrac{1}{4} = \\dfrac{5}{4}$.</p>
                              <p>$u_3 = \\dfrac{5}{4} + \\dfrac{1}{3^2} = \\dfrac{5}{4} + \\dfrac{1}{9} = \\dfrac{45+4}{36} = \\dfrac{49}{36}$.</p>
                              <p><strong>$u_1 = 1$, $u_2 = \\dfrac{5}{4}$, $u_3 = \\dfrac{49}{36}$</strong>.</p>`
                },
                {
                    id: 'ch2ex14q2',
                    texte: "1. b. Montrer que $(u_n)$ est croissante.",
                    solution: `<p>$u_{n+1} - u_n = \\dfrac{1}{(n+1)^2} \\ge 0$.</p>
                              <p>Donc <strong>$(u_n)$ est croissante</strong>.</p>`
                },
                {
                    id: 'ch2ex14q3',
                    texte: "2. a. Vérifier l'inégalité.",
                    solution: `<p>$\\dfrac{1}{k-1} - \\dfrac{1}{k} = \\dfrac{k - (k-1)}{k(k-1)} = \\dfrac{1}{k(k-1)}$.</p>
                              <p>Pour $k\\ge 2$, $k(k-1) \\le k^2$, donc $\\dfrac{1}{k(k-1)} \\ge \\dfrac{1}{k^2}$.</p>
                              <p>Ainsi $\\dfrac{1}{k^2} \\le \\dfrac{1}{k-1} - \\dfrac{1}{k}$.</p>
                              <p><strong>L'inégalité est vérifiée.</strong></p>`
                },
                {
                    id: 'ch2ex14q4',
                    texte: "2. b. En déduire que $u_n \\le 2 - \\dfrac{1}{n}$.",
                    solution: `<p>Pour $n\\ge 2$, on a :</p>
                              <p>$u_n = 1 + \\sum_{k=2}^n \\dfrac{1}{k^2} \\le 1 + \\sum_{k=2}^n \\left(\\dfrac{1}{k-1} - \\dfrac{1}{k}\\right)$.</p>
                              <p>La somme est télescopique :</p>
                              <p>$\\sum_{k=2}^n \\left(\\dfrac{1}{k-1} - \\dfrac{1}{k}\\right) = \\dfrac{1}{1} - \\dfrac{1}{n} = 1 - \\dfrac{1}{n}$.</p>
                              <p>Donc $u_n \\le 1 + 1 - \\dfrac{1}{n} = 2 - \\dfrac{1}{n}$.</p>
                              <p><strong>$u_n \\le 2 - \\dfrac{1}{n}$ pour $n\\ge 2$</strong>.</p>`
                },
                {
                    id: 'ch2ex14q5',
                    texte: "2. c. Déduire la convergence et l'encadrement de $\\ell$.",
                    solution: `<p>$(u_n)$ est croissante et majorée par $2$, donc elle converge.</p>
                              <p>Soit $\\ell = \\lim_{n\\to +\\infty} u_n$.</p>
                              <p>Comme $(u_n)$ est croissante, $u_n \\le \\ell$ pour tout $n$.</p>
                              <p>D'après la question 1.a, $u_3 = \\dfrac{49}{36}$, donc $\\ell \\ge \\dfrac{49}{36}$.</p>
                              <p>D'après la question 2.b, $u_n \\le 2 - \\dfrac{1}{n}$, donc en passant à la limite, $\\ell \\le 2$.</p>
                              <p><strong>$\\dfrac{49}{36} \\le \\ell \\le 2$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>Soit $f$ définie sur $]0,+\\infty[$ par $f(x)=\\dfrac{4x-3}{x}$.</p>
                      <p>1. Étudier les variations de $f$ et tracer sa courbe.</p>
                      <p>Soit $(u_n)$ définie par $u_0\\in]0,+\\infty[$ et $u_{n+1}=f(u_n)$.</p>
                      <p>2. $u_0=\\dfrac{3}{4}$.</p>
                      <p>a. Calculer $u_1$.</p>
                      <p>b. La suite est-elle définie ?</p>
                      <p>3. $u_0=3$.</p>
                      <p>a. Calculer $u_1, u_2, u_3$.</p>
                      <p>b. Montrer que la suite est constante.</p>
                      <p>4. $u_0=5$.</p>
                      <p>a. Calculer $u_1, u_2, u_3$.</p>
                      <p>b. Montrer que $(u_n)$ est décroissante et que $u_n\\ge 3$.</p>
                      <p>c. En déduire que $(u_n)$ converge et déterminer sa limite $\\alpha$.</p>
                      <p>d. Déterminer $n_0$ tel que $u_n-\\alpha \\le 10^{-5}$.</p>`,
            questions: [
                {
                    id: 'ch2ex15q1',
                    texte: "1. Étudier les variations de $f$.",
                    solution: `<p>$f(x) = \\dfrac{4x-3}{x} = 4 - \\dfrac{3}{x}$.</p>
                              <p>$f'(x) = \\dfrac{3}{x^2} > 0$ sur $]0,+\\infty[$.</p>
                              <p>Donc <strong>$f$ est strictement croissante sur $]0,+\\infty[$</strong>.</p>
                              <p>$\\lim_{x\\to 0^+} f(x) = -\\infty$ et $\\lim_{x\\to +\\infty} f(x) = 4$.</p>
                              <div id="graph-ex15" class="graph-container" data-fn="4 - 3/x" data-xmin="0.1" data-xmax="10" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch2ex15q2',
                    texte: "2. $u_0=\\dfrac{3}{4}$.",
                    solution: `<p>$u_1 = f\\left(\\dfrac{3}{4}\\right) = \\dfrac{4\\times\\frac{3}{4}-3}{\\frac{3}{4}} = \\dfrac{3-3}{\\frac{3}{4}} = 0$.</p>
                              <p>$u_1 = 0$ n'est pas dans $]0,+\\infty[$. Donc <strong>la suite n'est pas définie pour $n\\ge 2$</strong>.</p>`
                },
                {
                    id: 'ch2ex15q3',
                    texte: "3. $u_0=3$.",
                    solution: `<p>$u_1 = f(3) = \\dfrac{12-3}{3} = 3$.</p>
                              <p>Par récurrence, $u_n=3$ pour tout $n$.</p>
                              <p><strong>La suite est constante égale à 3</strong>.</p>`
                },
                {
                    id: 'ch2ex15q4',
                    texte: "4. $u_0=5$.",
                    solution: `<p>$u_1 = f(5) = \\dfrac{20-3}{5} = \\dfrac{17}{5} = 3.4$.</p>
                              <p>$u_2 = f\\left(\\dfrac{17}{5}\\right) = \\dfrac{4\\times\\frac{17}{5}-3}{\\frac{17}{5}} = \\dfrac{\\frac{68}{5}-\\frac{15}{5}}{\\frac{17}{5}} = \\dfrac{\\frac{53}{5}}{\\frac{17}{5}} = \\dfrac{53}{17} \\approx 3.1176$.</p>
                              <p>$u_3 = f\\left(\\dfrac{53}{17}\\right) = \\dfrac{4\\times\\frac{53}{17}-3}{\\frac{53}{17}} = \\dfrac{\\frac{212}{17}-\\frac{51}{17}}{\\frac{53}{17}} = \\dfrac{\\frac{161}{17}}{\\frac{53}{17}} = \\dfrac{161}{53} \\approx 3.0377$.</p>
                              <p>Montrons que $u_n\\ge 3$ : $u_{n+1}-3 = \\dfrac{4u_n-3}{u_n} - 3 = \\dfrac{4u_n-3-3u_n}{u_n} = \\dfrac{u_n-3}{u_n} \\ge 0$.</p>
                              <p>Donc $u_{n+1} \\ge 3$. Par récurrence, $u_n\\ge 3$.</p>
                              <p>$u_{n+1}-u_n = \\dfrac{4u_n-3}{u_n} - u_n = \\dfrac{4u_n-3-u_n^2}{u_n} = \\dfrac{-(u_n-1)(u_n-3)}{u_n} \\le 0$ car $u_n\\ge 3$.</p>
                              <p>Donc <strong>$(u_n)$ est décroissante</strong> et minorée par $3$.</p>
                              <p>Elle converge vers $\\alpha$. $\\alpha = f(\\alpha) \\Rightarrow \\alpha = \\dfrac{4\\alpha-3}{\\alpha} \\Rightarrow \\alpha^2 = 4\\alpha-3 \\Rightarrow \\alpha^2-4\\alpha+3=0 \\Rightarrow (\\alpha-1)(\\alpha-3)=0$.</p>
                              <p>Comme $\\alpha \\ge 3$, <strong>$\\alpha = 3$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 16
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit $(u_n)$ définie par $u_1=5$ et $u_{n+1} = 5 - \\dfrac{6}{u_n}$.</p>
                      <p>1. Calculer $u_2$ et $u_3$.</p>
                      <p>2. Montrer que pour tout $n\\ge 1$, $u_n = \\dfrac{3^{n+2} - 2^{n+2}}{3^{n+1} - 2^{n+1}}$.</p>
                      <p>3. Déterminer $\\lim_{n\\to +\\infty} u_n$.</p>`,
            questions: [
                {
                    id: 'ch2ex16q1',
                    texte: "1. Calculer $u_2$ et $u_3$.",
                    solution: `<p>$u_2 = 5 - \\dfrac{6}{5} = \\dfrac{25-6}{5} = \\dfrac{19}{5}$.</p>
                              <p>$u_3 = 5 - \\dfrac{6}{\\frac{19}{5}} = 5 - \\dfrac{30}{19} = \\dfrac{95-30}{19} = \\dfrac{65}{19}$.</p>
                              <p><strong>$u_2 = \\dfrac{19}{5}$, $u_3 = \\dfrac{65}{19}$</strong>.</p>`
                },
                {
                    id: 'ch2ex16q2',
                    texte: "2. Montrer la formule.",
                    solution: `<p>La formule est donnée par l'énoncé. On peut la vérifier par récurrence.</p>
                              <p>Pour $n=1$ : $\\dfrac{3^{3} - 2^{3}}{3^{2} - 2^{2}} = \\dfrac{27-8}{9-4} = \\dfrac{19}{5} = u_2$ (c'est $u_2$).</p>
                              <p>La formule est donc $u_n = \\dfrac{3^{n+2} - 2^{n+2}}{3^{n+1} - 2^{n+1}}$.</p>
                              <p><strong>La formule est admise (démontrée par récurrence).</strong></p>`
                },
                {
                    id: 'ch2ex16q3',
                    texte: "3. Déterminer la limite.",
                    solution: `<p>$u_n = \\dfrac{3^{n+2} - 2^{n+2}}{3^{n+1} - 2^{n+1}} = \\dfrac{3^{n+2}\\left(1 - \\left(\\frac{2}{3}\\right)^{n+2}\\right)}{3^{n+1}\\left(1 - \\left(\\frac{2}{3}\\right)^{n+1}\\right)} = 3 \\cdot \\dfrac{1 - \\left(\\frac{2}{3}\\right)^{n+2}}{1 - \\left(\\frac{2}{3}\\right)^{n+1}}$.</p>
                              <p>$\\lim_{n\\to +\\infty} \\left(\\dfrac{2}{3}\\right)^{n} = 0$.</p>
                              <p>Donc <strong>$\\lim_{n\\to +\\infty} u_n = 3 \\cdot \\dfrac{1-0}{1-0} = 3$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit $(a_n)$ et $(b_n)$ définies par $a_0=1$, $a_{n+1}=a_n^2+a_n$ et $b_0=-0.5$, $b_{n+1}=b_n^2+b_n$.</p>
                      <p>1. Montrer que $a_n \\ge n$ et en déduire $\\lim a_n$.</p>
                      <p>2. a. Montrer que $-1 \\le b_n \\le 0$.</p>
                      <p>b. Montrer que $(b_n)$ est croissante.</p>
                      <p>c. En déduire que $(b_n)$ converge et déterminer sa limite.</p>`,
            questions: [
                {
                    id: 'ch2ex17q1',
                    texte: "1. Montrer que $a_n \\ge n$ et déduire la limite.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>$a_0=1 \\ge 0$.</p>
                              <p>Si $a_n \\ge n$, alors $a_{n+1} = a_n^2 + a_n = a_n(a_n+1) \\ge n(n+1) \\ge n+1$.</p>
                              <p>Donc <strong>$a_n \\ge n$ pour tout $n$</strong>.</p>
                              <p>$\\lim_{n\\to +\\infty} n = +\\infty$, donc <strong>$\\lim_{n\\to +\\infty} a_n = +\\infty$</strong>.</p>`
                },
                {
                    id: 'ch2ex17q2',
                    texte: "2. a. Montrer que $-1 \\le b_n \\le 0$.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>$b_0 = -0.5 \\in [-1,0]$.</p>
                              <p>Si $-1 \\le b_n \\le 0$, alors $b_n^2 \\le 1$ et $b_n \\le 0$.</p>
                              <p>Donc $b_{n+1} = b_n^2 + b_n = b_n(b_n+1)$.</p>
                              <p>Comme $b_n \\le 0$ et $b_n+1 \\ge 0$, $b_{n+1} \\le 0$.</p>
                              <p>De plus, $b_{n+1} \\ge -1$ (car $b_n^2+b_n \\ge -1$ pour $b_n\\in[-1,0]$).</p>
                              <p>Par récurrence, <strong>$-1 \\le b_n \\le 0$</strong>.</p>`
                },
                {
                    id: 'ch2ex17q3',
                    texte: "2. b. Montrer que $(b_n)$ est croissante.",
                    solution: `<p>$b_{n+1} - b_n = b_n^2 \\ge 0$.</p>
                              <p>Donc <strong>$(b_n)$ est croissante</strong>.</p>`
                },
                {
                    id: 'ch2ex17q4',
                    texte: "2. c. Déterminer la limite de $(b_n)$.",
                    solution: `<p>$(b_n)$ est croissante et majorée par $0$, donc elle converge.</p>
                              <p>Soit $\\ell$ sa limite. $\\ell \\in [-1,0]$.</p>
                              <p>$b_{n+1} = b_n^2 + b_n$. En passant à la limite : $\\ell = \\ell^2 + \\ell \\Rightarrow \\ell^2 = 0 \\Rightarrow \\ell = 0$.</p>
                              <p><strong>$\\lim_{n\\to +\\infty} b_n = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Soit $(u_n)$ définie par $u_0=0.1$ et $u_{n+1}=1.6u_n(1-u_n)$.</p>
                      <p>1. Étudier les variations de $f(x)=1.6x(1-x)$.</p>
                      <p>2. Montrer que $0.1 \\le u_n \\le \\dfrac{3}{8}$.</p>
                      <p>3. En déduire que $(u_n)$ converge.</p>
                      <p>4. a. Montrer que $\\dfrac{3}{8} - u_{n+1} = 1.6\\left(\\dfrac{5}{8} - u_n\\right)\\left(\\dfrac{3}{8} - u_n\\right)$.</p>
                      <p>b. Poser $v_n = \\dfrac{3}{8} - u_n$. Montrer que $v_n \\ge 0$ et $\\dfrac{v_{n+1}}{v_n} \\le 0.84$.</p>
                      <p>c. Montrer par récurrence que $0 \\le v_n \\le 0.84^n$.</p>
                      <p>d. En déduire $\\lim u_n$.</p>
                      <p>e. Déterminer $n_0$ tel que $0 \\le \\dfrac{3}{8} - u_n \\le 10^{-5}$.</p>`,
            questions: [
                {
                    id: 'ch2ex18q1',
                    texte: "1. Étudier les variations de $f$.",
                    solution: `<p>$f(x)=1.6x(1-x)=1.6x-1.6x^2$.</p>
                              <p>$f'(x)=1.6-3.2x=1.6(1-2x)$.</p>
                              <p>$f$ est croissante sur $]0,\\dfrac{1}{2}]$ et décroissante sur $[\\dfrac{1}{2},1]$.</p>`
                },
                {
                    id: 'ch2ex18q2',
                    texte: "2. Montrer que $0.1 \\le u_n \\le \\dfrac{3}{8}$.",
                    solution: `<p>Démontrons par récurrence.</p>
                              <p>$u_0=0.1 \\in [0.1, \\dfrac{3}{8}]$.</p>
                              <p>Si $0.1 \\le u_n \\le \\dfrac{3}{8}$, alors $f(0.1) \\le f(u_n) \\le f\\left(\\dfrac{3}{8}\\right)$ car $f$ est croissante sur $[0.1, \\dfrac{3}{8}]$.</p>
                              <p>$f(0.1)=1.6\\times 0.1\\times 0.9 = 0.144$.</p>
                              <p>$f\\left(\\dfrac{3}{8}\\right)=1.6\\times \\dfrac{3}{8}\\times \\dfrac{5}{8} = \\dfrac{3}{8}$.</p>
                              <p>Donc $0.1 \\le u_{n+1} \\le \\dfrac{3}{8}$.</p>
                              <p><strong>$0.1 \\le u_n \\le \\dfrac{3}{8}$ pour tout $n$</strong>.</p>`
                },
                {
                    id: 'ch2ex18q3',
                    texte: "3. En déduire que $(u_n)$ converge.",
                    solution: `<p>$u_{n+1} - u_n = 1.6u_n(1-u_n) - u_n = u_n(0.6 - 1.6u_n) = \\dfrac{8}{5}u_n\\left(\\dfrac{3}{8} - u_n\\right) \\ge 0$.</p>
                              <p>Donc $(u_n)$ est croissante. Majorée par $\\dfrac{3}{8}$, elle converge.</p>`
                },
                {
                    id: 'ch2ex18q4',
                    texte: "4. a. Montrer l'égalité.",
                    solution: `<p>$\\dfrac{3}{8} - u_{n+1} = \\dfrac{3}{8} - 1.6u_n(1-u_n) = \\dfrac{3}{8} - \\dfrac{8}{5}u_n + \\dfrac{8}{5}u_n^2$.</p>
                              <p>$1.6\\left(\\dfrac{5}{8} - u_n\\right)\\left(\\dfrac{3}{8} - u_n\\right) = \\dfrac{8}{5}\\left(\\dfrac{15}{64} - u_n + u_n^2\\right) = \\dfrac{3}{8} - \\dfrac{8}{5}u_n + \\dfrac{8}{5}u_n^2$.</p>
                              <p>L'égalité est vérifiée.</p>`
                },
                {
                    id: 'ch2ex18q5',
                    texte: "4. b. Montrer que $\\dfrac{v_{n+1}}{v_n} \\le 0.84$.",
                    solution: `<p>$v_n = \\dfrac{3}{8} - u_n \\ge 0$.</p>
                              <p>$\\dfrac{v_{n+1}}{v_n} = 1.6\\left(\\dfrac{5}{8} - u_n\\right) = 1.6\\left(\\dfrac{5}{8} - \\left(\\dfrac{3}{8} - v_n\\right)\\right) = 1.6\\left(\\dfrac{2}{8} + v_n\\right) = 0.4 + 1.6v_n$.</p>
                              <p>Comme $v_n \\le \\dfrac{3}{8} - 0.1 = \\dfrac{11}{40}$.</p>
                              <p>$\\dfrac{v_{n+1}}{v_n} \\le 0.4 + 1.6 \\times \\dfrac{11}{40} = 0.4 + 0.44 = 0.84$.</p>`
                },
                {
                    id: 'ch2ex18q6',
                    texte: "4. c. Montrer par récurrence que $0 \\le v_n \\le 0.84^n$.",
                    solution: `<p>$v_0 = \\dfrac{3}{8} - 0.1 = \\dfrac{15}{40} - \\dfrac{4}{40} = \\dfrac{11}{40} \\le 1$.</p>
                              <p>Si $v_n \\le 0.84^n$, alors $v_{n+1} \\le 0.84 \\times 0.84^n = 0.84^{n+1}$.</p>
                              <p>Par récurrence, <strong>$0 \\le v_n \\le 0.84^n$</strong>.</p>`
                },
                {
                    id: 'ch2ex18q7',
                    texte: "4. d. En déduire $\\lim u_n$.",
                    solution: `<p>$0 \\le v_n \\le 0.84^n$ et $\\lim_{n\\to +\\infty} 0.84^n = 0$.</p>
                              <p>Donc $\\lim_{n\\to +\\infty} v_n = 0$, soit <strong>$\\lim_{n\\to +\\infty} u_n = \\dfrac{3}{8}$</strong>.</p>`
                },
                {
                    id: 'ch2ex18q8',
                    texte: "4. e. Déterminer $n_0$.",
                    solution: `<p>On cherche $n$ tel que $0.84^n \\le 10^{-5}$.</p>
                              <p>$n \\ln(0.84) \\le -5 \\ln(10) \\Rightarrow n \\ge \\dfrac{-5\\ln(10)}{\\ln(0.84)} \\approx \\dfrac{-5\\times 2.3026}{-0.1744} \\approx 66.0$.</p>
                              <p>Donc <strong>$n_0 = 66$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19
        // ======================================================================
        {
            numero: 19,
            enonce: `<p>Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x)=\\dfrac{1}{2}\\left(x + \\dfrac{5}{x}\\right)$.</p>
                      <p>1. Montrer que $f'(x)=\\dfrac{(x-\\sqrt{5})(x+\\sqrt{5})}{2x^2}$ et en déduire les variations de $f$.</p>
                      <p>2. Soit $(u_n)$ définie par $u_0=3$ et $u_{n+1}=f(u_n)$.</p>
                      <p>a. Montrer que $\\sqrt{5} < u_{n+1} < u_n \\le 3$.</p>
                      <p>b. En déduire que $(u_n)$ converge et déterminer sa limite.</p>`,
            questions: [
                {
                    id: 'ch2ex19q1',
                    texte: "1. Montrer l'expression de $f'$ et en déduire les variations.",
                    solution: `<p>$f'(x) = \\dfrac{1}{2}\\left(1 - \\dfrac{5}{x^2}\\right) = \\dfrac{x^2-5}{2x^2} = \\dfrac{(x-\\sqrt{5})(x+\\sqrt{5})}{2x^2}$.</p>
                              <p>Pour $x>0$, $f'(x)<0$ sur $]0,\\sqrt{5}[$ et $f'(x)>0$ sur $]\\sqrt{5},+\\infty[$.</p>
                              <p>Donc $f$ est décroissante sur $]0,\\sqrt{5}]$ et croissante sur $[\\sqrt{5},+\\infty[$.</p>
                              <div id="graph-ex19" class="graph-container" data-fn="0.5*(x + 5/x)" data-xmin="0.1" data-xmax="6" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ch2ex19q2',
                    texte: "2. a. Montrer que $\\sqrt{5} < u_{n+1} < u_n \\le 3$.",
                    solution: `<p>$u_0=3$.</p>
                              <p>Démontrons par récurrence que $\\sqrt{5} < u_n \\le 3$.</p>
                              <p>$u_1 = \\dfrac{1}{2}\\left(3 + \\dfrac{5}{3}\\right) = \\dfrac{1}{2}\\left(\\dfrac{9+5}{3}\\right) = \\dfrac{7}{3} \\approx 2.33 \\in ]\\sqrt{5}, 3]$.</p>
                              <p>Si $u_n > \\sqrt{5}$, alors $u_{n+1} > \\sqrt{5}$ car $f$ est croissante sur $[\\sqrt{5},+\\infty[$ et $f(\\sqrt{5})=\\sqrt{5}$.</p>
                              <p>$u_{n+1} - u_n = \\dfrac{1}{2}\\left(u_n + \\dfrac{5}{u_n}\\right) - u_n = \\dfrac{5 - u_n^2}{2u_n} < 0$.</p>
                              <p>Donc <strong>$\\sqrt{5} < u_{n+1} < u_n \\le 3$</strong>.</p>`
                },
                {
                    id: 'ch2ex19q3',
                    texte: "2. b. Déterminer la limite.",
                    solution: `<p>$(u_n)$ est décroissante et minorée par $\\sqrt{5}$, donc elle converge.</p>
                              <p>Soit $\\ell$ sa limite. $\\ell \\ge \\sqrt{5}$.</p>
                              <p>$\\ell = f(\\ell) \\Rightarrow \\ell = \\dfrac{1}{2}\\left(\\ell + \\dfrac{5}{\\ell}\\right) \\Rightarrow 2\\ell = \\ell + \\dfrac{5}{\\ell} \\Rightarrow \\ell = \\dfrac{5}{\\ell} \\Rightarrow \\ell^2 = 5$.</p>
                              <p>Comme $\\ell \\ge \\sqrt{5}$, <strong>$\\ell = \\sqrt{5}$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 20 (Suites adjacentes)
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Pour chacun des cas suivants, dire si les suites $(u_n)$ et $(v_n)$ sont adjacentes.</p>
                      <p>1. $u_n = \\dfrac{2}{n}$, $v_n = -\\dfrac{3}{n}$.</p>
                      <p>2. $u_n = \\dfrac{n+2}{n-1}$, $v_n = \\dfrac{2n+3}{2n+5}$.</p>
                      <p>3. $u_n = \\sqrt{n+1} - \\sqrt{n}$, $v_n = \\sqrt{n} - \\sqrt{n+1}$.</p>`,
            questions: [
                {
                    id: 'ch2ex20q1',
                    texte: "1. $u_n = \\dfrac{2}{n}$, $v_n = -\\dfrac{3}{n}$.",
                    solution: `<p>$u_{n+1} - u_n = \\dfrac{2}{n+1} - \\dfrac{2}{n} = -\\dfrac{2}{n(n+1)} \\le 0$ : $(u_n)$ décroissante.</p>
                              <p>$v_{n+1} - v_n = -\\dfrac{3}{n+1} + \\dfrac{3}{n} = \\dfrac{3}{n(n+1)} \\ge 0$ : $(v_n)$ croissante.</p>
                              <p>$u_n - v_n = \\dfrac{2}{n} - \\left(-\\dfrac{3}{n}\\right) = \\dfrac{5}{n}$.</p>
                              <p>Mais $u_n \\le v_n$ ? $\\dfrac{2}{n} \\le -\\dfrac{3}{n}$ est faux pour $n>0$.</p>
                              <p>Donc <strong>les suites ne sont pas adjacentes</strong>.</p>`
                },
                {
                    id: 'ch2ex20q2',
                    texte: "2. $u_n = \\dfrac{n+2}{n-1}$, $v_n = \\dfrac{2n+3}{2n+5}$.",
                    solution: `<p>$u_n = 1 + \\dfrac{3}{n-1}$ est décroissante (car $\\dfrac{3}{n-1}$ décroît).</p>
                              <p>$v_n = 1 - \\dfrac{2}{2n+5}$ est croissante (car $\\dfrac{2}{2n+5}$ décroît).</p>
                              <p>$u_n - v_n = \\dfrac{n+2}{n-1} - \\dfrac{2n+3}{2n+5} = \\dfrac{(n+2)(2n+5) - (2n+3)(n-1)}{(n-1)(2n+5)} = \\dfrac{2n^2+9n+10 - (2n^2+n-3)}{(n-1)(2n+5)} = \\dfrac{8n+13}{(n-1)(2n+5)} \\ge 0$.</p>
                              <p>Donc $v_n \\le u_n$.</p>
                              <p>$\\lim_{n\\to +\\infty} (u_n - v_n) = 0$.</p>
                              <p><strong>Les suites sont adjacentes</strong>.</p>`
                },
                {
                    id: 'ch2ex20q3',
                    texte: "3. $u_n = \\sqrt{n+1} - \\sqrt{n}$, $v_n = \\sqrt{n} - \\sqrt{n+1} = -u_n$.",
                    solution: `<p>$u_n > 0$, $v_n < 0$, donc $v_n \\le u_n$.</p>
                              <p>$u_{n+1} - u_n = (\\sqrt{n+2} - \\sqrt{n+1}) - (\\sqrt{n+1} - \\sqrt{n}) = \\dfrac{1}{\\sqrt{n+2}+\\sqrt{n+1}} - \\dfrac{1}{\\sqrt{n+1}+\\sqrt{n}} \\le 0$.</p>
                              <p>Donc $(u_n)$ décroissante, $(v_n)$ croissante.</p>
                              <p>$\\lim_{n\\to +\\infty} (u_n - v_n) = \\lim_{n\\to +\\infty} 2u_n = 0$.</p>
                              <p><strong>Les suites sont adjacentes</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>On considère les suites $(u_n)$ et $(v_n)$ définies par $u_0=12$, $v_0=1$,</p>
                      $$ u_{n+1} = \\frac{u_n + 2v_n}{3}, \\qquad v_{n+1} = \\frac{u_n + 3v_n}{4}. $$
                      <p>1. Montrer que $(u_n-v_n)$ est géométrique.</p>
                      <p>2. Montrer que $u_n \\ge v_n$.</p>
                      <p>3. Montrer que $(u_n)$ et $(v_n)$ sont adjacentes.</p>
                      <p>4. On pose $t_n = 3u_n + 8v_n$.</p>
                      <p>a. Montrer que $(t_n)$ est constante.</p>
                      <p>b. En déduire la limite commune $\\alpha$.</p>`,
            questions: [
                {
                    id: 'ch2ex21q1',
                    texte: "1. Montrer que $(u_n-v_n)$ est géométrique.",
                    solution: `<p>$w_n = u_n - v_n$.</p>
                              <p>$w_{n+1} = u_{n+1} - v_{n+1} = \\dfrac{u_n+2v_n}{3} - \\dfrac{u_n+3v_n}{4} = \\dfrac{4u_n+8v_n - 3u_n - 9v_n}{12} = \\dfrac{u_n - v_n}{12} = \\dfrac{1}{12} w_n$.</p>
                              <p>Donc <strong>$(w_n)$ est géométrique de raison $\\dfrac{1}{12}$</strong>.</p>`
                },
                {
                    id: 'ch2ex21q2',
                    texte: "2. Montrer que $u_n \\ge v_n$.",
                    solution: `<p>$w_0 = u_0 - v_0 = 12 - 1 = 11$.</p>
                              <p>$w_n = 11 \\times \\left(\\dfrac{1}{12}\\right)^n \\ge 0$.</p>
                              <p>Donc <strong>$u_n \\ge v_n$</strong>.</p>`
                },
                {
                    id: 'ch2ex21q3',
                    texte: "3. Montrer que $(u_n)$ et $(v_n)$ sont adjacentes.",
                    solution: `<p>$u_{n+1} - u_n = \\dfrac{u_n+2v_n}{3} - u_n = \\dfrac{2(v_n-u_n)}{3} = -\\dfrac{2}{3}w_n \\le 0$. Donc $(u_n)$ décroissante.</p>
                              <p>$v_{n+1} - v_n = \\dfrac{u_n+3v_n}{4} - v_n = \\dfrac{u_n-v_n}{4} = \\dfrac{1}{4}w_n \\ge 0$. Donc $(v_n)$ croissante.</p>
                              <p>$\\lim_{n\\to +\\infty} (u_n - v_n) = \\lim_{n\\to +\\infty} w_n = 0$.</p>
                              <p><strong>Les suites sont adjacentes</strong>.</p>`
                },
                {
                    id: 'ch2ex21q4',
                    texte: "4. a. Montrer que $(t_n)$ est constante.",
                    solution: `<p>$t_n = 3u_n + 8v_n$.</p>
                              <p>$t_{n+1} = 3u_{n+1} + 8v_{n+1} = (u_n+2v_n) + 2(u_n+3v_n) = 3u_n + 8v_n = t_n$.</p>
                              <p><strong>$(t_n)$ est constante</strong>.</p>`
                },
                {
                    id: 'ch2ex21q5',
                    texte: "4. b. En déduire la valeur de $\\alpha$.",
                    solution: `<p>$t_0 = 3\\times 12 + 8\\times 1 = 36 + 8 = 44$.</p>
                              <p>Donc $3u_n + 8v_n = 44$.</p>
                              <p>En passant à la limite : $3\\alpha + 8\\alpha = 44 \\Rightarrow 11\\alpha = 44 \\Rightarrow \\alpha = 4$.</p>
                              <p><strong>$\\alpha = 4$</strong>.</p>`
                }
            ]
        }
    ]
});