// data/chapitre6/part5.js – Exercices 21 à 25 (Fonctions définies par intégrales, arctan, arcsin)
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini.");
        return;
    }

    let ch6 = data.chapitres.find(c => c.id === 6);
    if (!ch6) {
        console.error("Chapitre 6 introuvable. Chargez d'abord data/chapitre6_base.js.");
        return;
    }

    ch6.exercices.push(
        // ======================================================================
        // EXERCICE 21 – Fonction définie par une intégrale (arctan)
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>Pour tout réel $x$, on pose $\\Phi(x)=\\dfrac{1}{1+x^2}$ et on désigne par $G$ la primitive de $\\Phi$ sur $\\mathbb{R}$ qui s'annule en $0$.</p>
                      <ol>
                        <li>Montrer que $G$ est une fonction impaire.</li>
                        <li>a. On pose $\\Psi(x)=G(x)+G\\left(\\dfrac{1}{x}\\right)$ pour $x\\in\\mathbb{R}^*$. Montrer que $\\Psi$ est constante sur chacun des intervalles $]-\\infty,0[$ et $]0,+\\infty[$. En déduire $\\lim_{x\\to+\\infty}\\Psi(x)$.</li>
                        <li>b. On pose $u(t)=G(\\tan t)$, $t\\in\\left]-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right[$. Calculer $u'(t)$ et en déduire $u(t)$.</li>
                        <li>Déterminer $G(1)$ et en déduire $\\lim_{x\\to+\\infty}\\Psi(x)$ et $\\lim_{x\\to+\\infty}G(x)$.</li>
                        <li>Construire la courbe représentative de $G$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex21q1',
                    texte: "1. Parité de G.",
                    solution: `<p><strong>Stratégie :</strong> On montre que $G(-x)=-G(x)$ en utilisant la définition $G(x)=\\int_0^x \\Phi(t) dt$.</p>
                               $$ G(-x)=\\int_0^{-x} \\dfrac{1}{1+t^2} dt. $$
                               <p>On pose $u=-t$, $dt=-du$.</p>
                               $$ G(-x)=\\int_0^{x} \\dfrac{1}{1+u^2} (-du) = -\\int_0^{x} \\dfrac{1}{1+u^2} du = -G(x). $$
                               <p><strong>Donc $G$ est impaire.</strong></p>`
                },
                {
                    id: 'ch6ex21q2',
                    texte: "2.a. Constance de $\\Psi$.",
                    solution: `<p>On calcule $\\Psi'(x)$ :</p>
                               $$ \\Psi'(x)=G'(x)+G'\\left(\\dfrac{1}{x}\\right)\\cdot\\left(-\\dfrac{1}{x^2}\\right) = \\Phi(x) - \\dfrac{1}{x^2}\\Phi\\left(\\dfrac{1}{x}\\right). $$
                               <p>Or $\\Phi\\left(\\dfrac{1}{x}\\right)=\\dfrac{1}{1+1/x^2}=\\dfrac{x^2}{x^2+1}$.</p>
                               <p>Donc $\\Psi'(x)=\\dfrac{1}{1+x^2} - \\dfrac{1}{x^2}\\cdot\\dfrac{x^2}{x^2+1} = \\dfrac{1}{1+x^2} - \\dfrac{1}{1+x^2} = 0$.</p>
                               <p><strong>Donc $\\Psi$ est constante sur $]0,+\\infty[$ et sur $]-\\infty,0[$.</strong></p>`
                },
                {
                    id: 'ch6ex21q3',
                    texte: "2.b. Calcul de $u(t)$.",
                    solution: `<p>$u(t)=G(\\tan t)$.</p>
                               $$ u'(t)=G'(\\tan t)\\cdot(1+\\tan^2 t) = \\dfrac{1}{1+\\tan^2 t}\\cdot(1+\\tan^2 t) = 1. $$
                               <p>Donc $u(t)=t+C$. Comme $u(0)=G(0)=0$, on a $C=0$.</p>
                               <p><strong>$u(t)=t$.</strong></p>`
                },
                {
                    id: 'ch6ex21q4',
                    texte: "3. Détermination de $G(1)$ et limites.",
                    solution: `<p>De $u(t)=t$, on a $G(\\tan t)=t$.</p>
                               <p>En $t=\\dfrac{\\pi}{4}$, $\\tan\\dfrac{\\pi}{4}=1$, donc <strong>$G(1)=\\dfrac{\\pi}{4}$.</strong></p>
                               <p>Comme $\\Psi$ est constante sur $]0,+\\infty[$, $\\lim_{x\\to+\\infty}\\Psi(x)=\\Psi(1)=G(1)+G(1)=2\\cdot\\dfrac{\\pi}{4}=\\dfrac{\\pi}{2}$.</p>
                               <p>De plus, $\\lim_{x\\to+\\infty} G\\left(\\dfrac{1}{x}\\right)=G(0)=0$.</p>
                               <p>Donc $\\lim_{x\\to+\\infty}\\Psi(x)=\\lim_{x\\to+\\infty}G(x)+0$.</p>
                               <p><strong>$\\lim_{x\\to+\\infty}G(x)=\\dfrac{\\pi}{2}$.</strong></p>`
                },
                {
                    id: 'ch6ex21q5',
                    texte: "4. Courbe de $G$.",
                    solution: `<p>On a $G(x)=\\arctan x$.</p>
                               <div id="graph-ex21" class="graph-container" data-fn="atan(x)" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 22 – Fonction √(1+cos x) et bijection (déjà traité en partie 4)
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>Soit $f$ la fonction définie sur $[0,\\pi]$ par $f(x)=\\sqrt{1+\\cos x}$.</p>
                      <ol>
                        <li>a. Montrer que $f$ est une bijection de $[0,\\pi]$ sur $[0,\\sqrt{2}]$.</li>
                        <li>b. Montrer que $f^{-1}$ est dérivable sur $]0,\\sqrt{2}[$ et expliciter $(f^{-1})'(x)$.</li>
                      </ol>
                      <p>Soit $g$ la fonction définie sur $]-\\sqrt{2},\\sqrt{2}[$ par $g(x)=\\dfrac{1}{\\sqrt{2-x^2}}$.</p>
                      <p>Soit $G$ la primitive de $g$ sur $]-\\sqrt{2},\\sqrt{2}[$ telle que $G(0)=0$.</p>
                      <ol>
                        <li>i. Calculer la dérivée de $x\\mapsto G(x)+G(-x)$. En déduire que $G$ est impaire.</li>
                        <li>ii. Montrer que pour tout $x\\in[0,\\sqrt{2}[$, $G(x)=\\dfrac{\\pi}{2}-\\dfrac{1}{2}f^{-1}(x)$. En déduire $G(1)$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex22q1',
                    texte: "1.a. Bijection de f.",
                    solution: `<p>$f$ est continue sur $[0,\\pi]$.</p>
                               <p>$f'(x)=\\dfrac{-\\sin x}{2\\sqrt{1+\\cos x}} \\le 0$ sur $[0,\\pi]$.</p>
                               <p>Donc $f$ est strictement décroissante.</p>
                               <p>$f(0)=\\sqrt{2}$, $f(\\pi)=0$. Donc $f([0,\\pi])=[0,\\sqrt{2}]$.</p>
                               <p><strong>$f$ est bijective de $[0,\\pi]$ sur $[0,\\sqrt{2}]$.</strong></p>`
                },
                {
                    id: 'ch6ex22q2',
                    texte: "1.b. Dérivée de $f^{-1}$.",
                    solution: `<p>$f$ est dérivable sur $]0,\\pi[$ et $f'(x)<0$.</p>
                               <p>Donc $f^{-1}$ est dérivable sur $]0,\\sqrt{2}[$.</p>
                               <p>On a $f^{-1}(y)=x$ ⇔ $\\sqrt{1+\\cos x}=y$ ⇔ $\\cos x = y^2-1$.</p>
                               <p>Alors $(f^{-1})'(y)=\\dfrac{1}{f'(x)} = \\dfrac{1}{-\\dfrac{\\sin x}{2y}} = -\\dfrac{2y}{\\sin x}$.</p>
                               <p>Or $\\sin x = \\sqrt{1-\\cos^2 x} = \\sqrt{1-(y^2-1)^2} = y\\sqrt{2-y^2}$.</p>
                               <p>Donc <strong>$(f^{-1})'(y) = -\\dfrac{2}{\\sqrt{2-y^2}}$.</strong></p>`
                },
                {
                    id: 'ch6ex22q3',
                    texte: "2.i. Parité de G.",
                    solution: `<p>Soit $H(x)=G(x)+G(-x)$.</p>
                               <p>$H'(x)=G'(x)-G'(-x)=g(x)-g(-x)=0$.</p>
                               <p>Donc $H$ est constante. $H(0)=0$, donc $H=0$.</p>
                               <p><strong>$G$ est impaire.</strong></p>`
                },
                {
                    id: 'ch6ex22q4',
                    texte: "2.ii. Relation et calcul de $G(1)$.",
                    solution: `<p>On a $G'(x)=\\dfrac{1}{\\sqrt{2-x^2}}$.</p>
                               <p>Et $(f^{-1})'(x) = -\\dfrac{2}{\\sqrt{2-x^2}}$.</p>
                               <p>Donc $G'(x) = -\\dfrac{1}{2}(f^{-1})'(x)$.</p>
                               <p>Donc $G(x) = -\\dfrac{1}{2}f^{-1}(x) + C$.</p>
                               <p>$G(0)=0$ et $f^{-1}(0)=\\pi$ ⇒ $0 = -\\dfrac{\\pi}{2} + C$ ⇒ $C=\\dfrac{\\pi}{2}$.</p>
                               <p><strong>$G(x)=\\dfrac{\\pi}{2} - \\dfrac{1}{2}f^{-1}(x)$.</strong></p>
                               <p>$G(1) = \\dfrac{\\pi}{2} - \\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2} = \\dfrac{\\pi}{4}$ (car $f^{-1}(1)=\\dfrac{\\pi}{2}$).</p>
                               <p><strong>$G(1)=\\dfrac{\\pi}{4}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23 – Fonction avec condition f'(x)=-4x (adaptation)
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>Soit $f$ une fonction continue sur $[0,1]$ et dérivable sur $]0,1[$. On suppose que $f(0)=1$, $f(1)=0$ et $f'(x)=-\\dfrac{2}{\\pi\\sqrt{1-x^2}}$ pour $x\\in]0,1[$.</p>
                      <ol>
                        <li>Montrer que $f$ est une bijection de $[0,1]$ sur $[0,1]$.</li>
                        <li>a. Montrer que pour tout $x\\in[0,\\frac{\\pi}{2}]$, $f(\\cos x)=\\dfrac{2}{\\pi}x$.</li>
                        <li>b. En déduire $f^{-1}(x)$ pour tout $x\\in[0,1]$.</li>
                        <li>c. On pose $h(x)=f(\\cos x)+f(\\sin x)$. Montrer que $h$ est dérivable et calculer $h'$. En déduire que $h(x)=1$.</li>
                        <li>d. Pour $n\\in\\mathbb{N}^*$, on pose $\\phi_n(x)=\\cos\\left(\\dfrac{\\pi}{2}x\\right)-x^n$. Montrer qu'il existe un unique $a_n\\in]0,1[$ tel que $\\phi_n(a_n)=0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex23q1',
                    texte: "1. Bijection de f.",
                    solution: `<p>$f'(x)=-\\dfrac{2}{\\pi\\sqrt{1-x^2}} <0$ sur $]0,1[$.</p>
                               <p>Donc $f$ est strictement décroissante sur $[0,1]$.</p>
                               <p>$f(0)=1$, $f(1)=0$. Donc $f([0,1])=[0,1]$.</p>
                               <p><strong>$f$ est une bijection de $[0,1]$ sur $[0,1]$.</strong></p>`
                },
                {
                    id: 'ch6ex23q2',
                    texte: "2.a. Vérification de $f(\\cos x)=\\dfrac{2}{\\pi}x$.",
                    solution: `<p>On intègre $f'(x)$ :</p>
                               $$ f(x)=\\int -\\dfrac{2}{\\pi\\sqrt{1-x^2}} dx = -\\dfrac{2}{\\pi}\\arcsin x + C. $$
                               <p>$f(0)=1$ ⇒ $-\\dfrac{2}{\\pi}\\arcsin 0 + C = 1$ ⇒ $C=1$.</p>
                               <p>Donc $f(x)=1-\\dfrac{2}{\\pi}\\arcsin x$.</p>
                               <p>Alors $f(\\cos x)=1-\\dfrac{2}{\\pi}\\arcsin(\\cos x) = 1-\\dfrac{2}{\\pi}\\left(\\dfrac{\\pi}{2}-x\\right) = 1-1+\\dfrac{2}{\\pi}x = \\dfrac{2}{\\pi}x$.</p>
                               <p><strong>$f(\\cos x)=\\dfrac{2}{\\pi}x$.</strong></p>`
                },
                {
                    id: 'ch6ex23q3',
                    texte: "2.b. Expression de $f^{-1}$.",
                    solution: `<p>On a $f(x)=1-\\dfrac{2}{\\pi}\\arcsin x$.</p>
                               <p>Résolvons $y=f(x)$ : $y=1-\\dfrac{2}{\\pi}\\arcsin x$ ⇒ $\\arcsin x = \\dfrac{\\pi}{2}(1-y)$.</p>
                               <p>Donc $x=\\sin\\left(\\dfrac{\\pi}{2}(1-y)\\right)=\\cos\\left(\\dfrac{\\pi}{2}y\\right)$.</p>
                               <p><strong>$f^{-1}(y)=\\cos\\left(\\dfrac{\\pi}{2}y\\right)$.</strong></p>`
                },
                {
                    id: 'ch6ex23q4',
                    texte: "2.c. Fonction $h$ et constance.",
                    solution: `<p>$h(x)=f(\\cos x)+f(\\sin x) = \\dfrac{2}{\\pi}x + f(\\sin x)$.</p>
                               <p>Or $f(\\sin x)=1-\\dfrac{2}{\\pi}\\arcsin(\\sin x)$.</p>
                               <p>Pour $x\\in[0,\\frac{\\pi}{2}]$, $\\arcsin(\\sin x)=x$. Donc $f(\\sin x)=1-\\dfrac{2}{\\pi}x$.</p>
                               <p>Donc $h(x)=\\dfrac{2}{\\pi}x + 1 - \\dfrac{2}{\\pi}x = 1$.</p>
                               <p><strong>$h(x)=1$ pour tout $x\\in[0,\\frac{\\pi}{2}]$.</strong></p>`
                },
                {
                    id: 'ch6ex23q5',
                    texte: "2.d. Existence et unicité de $a_n$.",
                    solution: `<p>$\\phi_n(x)=\\cos\\left(\\dfrac{\\pi}{2}x\\right)-x^n$.</p>
                               <p>$\\phi_n(0)=1-0=1>0$.</p>
                               <p>$\\phi_n(1)=\\cos\\left(\\dfrac{\\pi}{2}\\right)-1=-1<0$.</p>
                               <p>Donc par le TVI, il existe au moins une solution dans $]0,1[$.</p>
                               <p>De plus, $\\phi'_n(x)=-\\dfrac{\\pi}{2}\\sin\\left(\\dfrac{\\pi}{2}x\\right)-nx^{n-1}<0$ sur $]0,1[$.</p>
                               <p>Donc $\\phi_n$ est strictement décroissante, la solution est unique.</p>
                               <p><strong>Il existe un unique $a_n\\in]0,1[$ tel que $\\phi_n(a_n)=0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24 – Suite définie par une intégrale (encadrement)
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>On considère la fonction $f$ définie sur $[0,+\\infty[$ par $f(x)=\\dfrac{x}{x-\\ln x}$.</p>
                      <p>I. Soit $F$ la primitive de $f$ sur $[0,+\\infty[$ qui s'annule en $0$.</p>
                      <ol>
                        <li>Montrer que $F$ est dérivable sur $[0,+\\infty[$ et déterminer $F'$.</li>
                        <li>Montrer que pour tout $x\\ge0$, $\\dfrac{x}{x-\\ln x} \\le 1$.</li>
                        <li>En déduire que pour tout $x\\ge0$, $F(x)\\le x$.</li>
                        <li>Montrer que $\\lim_{x\\to+\\infty}F(x)=+\\infty$.</li>
                      </ol>
                      <p>II. On pose $u_n=\\int_0^1 \\dfrac{t}{t-\\ln t} dt$.</p>
                      <ol>
                        <li>Montrer que $0\\le u_n \\le \\dfrac{1}{n+1}$.</li>
                        <li>En déduire que la suite $(u_n)$ est convergente et déterminer sa limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex24q1',
                    texte: "I.1. Dérivabilité de $F$.",
                    solution: `<p>Par définition, $F$ est la primitive de $f$ qui s'annule en $0$. Donc $F$ est dérivable sur $[0,+\\infty[$ et $F'(x)=f(x)$.</p>`
                },
                {
                    id: 'ch6ex24q2',
                    texte: "I.2. Inégalité $f(x)\\le1$.",
                    solution: `<p>On a $\\dfrac{x}{x-\\ln x} \\le 1$ ⇔ $x \\le x-\\ln x$ ⇔ $\\ln x \\le 0$ ⇔ $x\\le1$.</p>
                               <p>Donc pour $x\\ge1$, $f(x)\\le1$.</p>`
                },
                {
                    id: 'ch6ex24q3',
                    texte: "I.3. Majoration de $F$.",
                    solution: `<p>Pour $x\\ge0$, $F(x)=\\int_0^x f(t) dt \\le \\int_0^x 1 dt = x$ (pour $x\\ge0$).</p>`
                },
                {
                    id: 'ch6ex24q4',
                    texte: "I.4. Limite de $F$.",
                    solution: `<p>On a $\\lim_{x\\to+\\infty} f(x)=\\lim_{x\\to+\\infty} \\dfrac{x}{x-\\ln x}=1$.</p>
                               <p>Donc $F$ croît comme $x$ à l'infini. Ainsi <strong>$\\lim_{x\\to+\\infty}F(x)=+\\infty$.</strong></p>`
                },
                {
                    id: 'ch6ex24q5',
                    texte: "II.1. Encadrement de $u_n$.",
                    solution: `<p>$u_n=\\int_0^1 \\dfrac{t^n}{t-\\ln t} dt$.</p>
                               <p>On a $0\\le t^n\\le1$ et $t-\\ln t >0$ pour $t\\in]0,1]$.</p>
                               <p>Donc $0\\le\\dfrac{t^n}{t-\\ln t}\\le \\dfrac{1}{t-\\ln t}$.</p>
                               <p>Mais on peut aussi encadrer par $t^n$ : $\\dfrac{t^n}{t-\\ln t} \\le \\dfrac{t^n}{t-\\ln t} \\le \\dfrac{t^n}{1}$ ? Non, vérifions :</p>
                               <p>Pour $t\\in[0,1]$, $t-\\ln t \\ge 1$. Donc $\\dfrac{1}{t-\\ln t} \\le 1$.</p>
                               <p>Donc $\\dfrac{t^n}{t-\\ln t} \\le t^n$.</p>
                               <p>Donc $u_n \\le \\int_0^1 t^n dt = \\dfrac{1}{n+1}$.</p>
                               <p><strong>$0\\le u_n\\le\\dfrac{1}{n+1}$.</strong></p>`
                },
                {
                    id: 'ch6ex24q6',
                    texte: "II.2. Convergence de $(u_n)$.",
                    solution: `<p>D'après le théorème des gendarmes : $0\\le u_n\\le\\dfrac{1}{n+1}\\to0$.</p>
                               <p><strong>$(u_n)$ converge vers $0$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 25 – Primitive et suite définie par récurrence
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit $f$ la fonction définie sur $[0,1]$ par $f(x)=\\dfrac{1}{1+x}$.</p>
                      <p>Soit $F$ la primitive de $f$ sur $[0,1]$ qui s'annule en $0$.</p>
                      <ol>
                        <li>Expliciter $F(x)$.</li>
                        <li>Montrer que pour tout $x\\in[0,1]$, $\\dfrac{1}{2}\\le \\dfrac{1}{1+x} \\le 1$.</li>
                        <li>En déduire que $\\dfrac{x}{2} \\le F(x) \\le x$.</li>
                        <li>On définit la suite $(u_n)$ par $u_n=F\\left(\\dfrac{1}{n}\\right)$. Montrer que $(u_n)$ est convergente et déterminer sa limite.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex25q1',
                    texte: "1. Expression de $F$.",
                    solution: `<p>$F(x)=\\int_0^x \\dfrac{1}{1+t} dt = \\ln(1+x)$.</p>`
                },
                {
                    id: 'ch6ex25q2',
                    texte: "2. Encadrement de $1/(1+x)$.",
                    solution: `<p>Pour $x\\in[0,1]$, $1\\le1+x\\le2$ ⇒ $\\dfrac{1}{2}\\le\\dfrac{1}{1+x}\\le1$.</p>`
                },
                {
                    id: 'ch6ex25q3',
                    texte: "3. Encadrement de $F$.",
                    solution: `<p>En intégrant l'inégalité précédente sur $[0,x]$ :</p>
                               $$ \\int_0^x \\dfrac{1}{2} dt \\le F(x) \\le \\int_0^x 1 dt \\Rightarrow \\dfrac{x}{2} \\le F(x) \\le x. $$`
                },
                {
                    id: 'ch6ex25q4',
                    texte: "4. Suite $u_n$.",
                    solution: `<p>$u_n=F\\left(\\dfrac{1}{n}\\right)=\\ln\\left(1+\\dfrac{1}{n}\\right)$.</p>
                               <p>Quand $n\\to+\\infty$, $\\dfrac{1}{n}\\to0$, donc $u_n\\to0$.</p>
                               <p><strong>$u_n$ converge vers $0$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 5 (exercices 21 à 25) – Fonctions définies par intégrales – ajoutée avec succès.");
})();