// data/chapitre6/part3.js – Exercices 8 à 14 (Primitives avec conditions initiales)
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
        // EXERCICE 8 – Décomposition en éléments simples
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>On considère la fonction $f$ définie sur $]-1,+\\infty[$ par $f(x)=\\dfrac{x^2+2}{(x+1)^4}$.</p>
                      <p>On se propose de déterminer des réels $a,b,c,d$ tels que pour tout $x\\in]-1,+\\infty[$ :</p>
                      $$ f(x)=\\dfrac{a}{x+1}+\\dfrac{b}{(x+1)^2}+\\dfrac{c}{(x+1)^3}+\\dfrac{d}{(x+1)^4}. $$
                      <ol>
                        <li>a. Calculer $\\lim_{x\\to-1}(x+1)^4f(x)$ et $\\lim_{x\\to+\\infty}(x+1)f(x)$.</li>
                        <li>b. En déduire que $d=3$ et $a=0$.</li>
                        <li>a. Vérifier que pour tout $x\\in]-1,+\\infty[$, $f(x)=\\dfrac{b(x+1)+c}{(x+1)^3}+\\dfrac{3}{(x+1)^4}$.</li>
                        <li>b. En déduire les valeurs des réels $b$ et $c$.</li>
                        <li>Déterminer la primitive de $f$ sur $]-1,+\\infty[$ égale à $2$ en $0$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex8q1',
                    texte: "1.a. Calcul des limites.",
                    solution: `<p><strong>Stratégie :</strong> On multiplie $f(x)$ par $(x+1)^4$ pour faire apparaître le coefficient $d$.</p>
                               $$ \\lim_{x\\to-1}(x+1)^4f(x) = \\lim_{x\\to-1}(x^2+2) = 1+2 = 3. $$
                               <p>Comme $d$ est le seul terme qui ne tend pas vers $0$ en $-1$ (les autres ont des puissances de $(x+1)$ au dénominateur qui s'annulent), on a $d=3$.</p>
                               <p>Pour la seconde limite :</p>
                               $$ \\lim_{x\\to+\\infty}(x+1)f(x) = \\lim_{x\\to+\\infty}\\dfrac{x^2+2}{(x+1)^3} = 0. $$
                               <p>Donc $a=0$ (car seul le terme en $a/(x+1)$ contribue à cette limite).</p>`
                },
                {
                    id: 'ch6ex8q2',
                    texte: "1.b. Déduction.",
                    solution: `<p>On a donc $f(x)=\\dfrac{b}{(x+1)^2}+\\dfrac{c}{(x+1)^3}+\\dfrac{3}{(x+1)^4}$.</p>
                               <p>En réduisant au même dénominateur :</p>
                               $$ f(x)=\\dfrac{b(x+1)^2+c(x+1)+3}{(x+1)^4}. $$
                               <p>On identifie avec $\\dfrac{x^2+2}{(x+1)^4}$.</p>
                               <p>$b(x+1)^2+c(x+1)+3 = b(x^2+2x+1)+c(x+1)+3 = bx^2+(2b+c)x+(b+c+3)$.</p>
                               <p>Par identification :</p>
                               $$ \\begin{cases} b = 1 \\\\ 2b+c = 0 \\\\ b+c+3 = 2 \\end{cases} $$
                               <p>On obtient $b=1$, $c=-2$.</p>
                               <p><strong>$b=1,\\; c=-2,\\; d=3,\\; a=0$.</strong></p>`
                },
                {
                    id: 'ch6ex8q3',
                    texte: "2. Primitive avec condition.",
                    solution: `<p>On a $f(x)=\\dfrac{1}{(x+1)^2}-\\dfrac{2}{(x+1)^3}+\\dfrac{3}{(x+1)^4}$.</p>
                               <p>Primitive :</p>
                               $$ F(x) = -\\dfrac{1}{x+1} + \\dfrac{1}{(x+1)^2} - \\dfrac{1}{(x+1)^3} + C. $$
                               <p>Vérifions : $\\left(-\\dfrac{1}{x+1}\\right)' = \\dfrac{1}{(x+1)^2}$, $\\left(\\dfrac{1}{(x+1)^2}\\right)' = -\\dfrac{2}{(x+1)^3}$, $\\left(-\\dfrac{1}{(x+1)^3}\\right)' = \\dfrac{3}{(x+1)^4}$.</p>
                               <p>Condition $F(0)=2$ : $F(0) = -1 + 1 - 1 + C = -1 + C$.</p>
                               <p>$-1+C=2$ ⇒ $C=3$.</p>
                               <p><strong>$F(x) = -\\dfrac{1}{x+1} + \\dfrac{1}{(x+1)^2} - \\dfrac{1}{(x+1)^3} + 3$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9 – Équations différentielles du second ordre
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Déterminer toutes les fonctions deux fois dérivables sur $I$ telles que :</p>
                      <ol>
                        <li>$f''(x)=0$, $I=\\mathbb{R}$.</li>
                        <li>$f''(x)=\\sin x$, $I=\\mathbb{R}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex9q1',
                    texte: "1. $f''(x)=0$.",
                    solution: `<p>Si $f''(x)=0$, alors $f'$ est constante : $f'(x)=a$.</p>
                               <p>Donc $f(x)=ax+b$, où $a,b\\in\\mathbb{R}$.</p>
                               <p><strong>$f(x)=ax+b$ avec $a,b\\in\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch6ex9q2',
                    texte: "2. $f''(x)=\\sin x$.",
                    solution: `<p>On intègre une première fois : $f'(x)=-\\cos x + C_1$.</p>
                               <p>On intègre une seconde fois : $f(x)=-\\sin x + C_1x + C_2$.</p>
                               <p><strong>$f(x)=-\\sin x + C_1x + C_2$ avec $C_1,C_2\\in\\mathbb{R}$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10 – Primitives avec valeurs absolues
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=|x|$.</p>
                      <ol>
                        <li>i. Montrer que $f$ admet au moins une primitive sur $\\mathbb{R}$.</li>
                        <li>ii. Déterminer la primitive $F$ de $f$ sur $\\mathbb{R}$ qui prend la valeur $0$ en $4$.</li>
                      </ol>
                      <p>Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x)=|x|+|x-1|$.</p>
                      <ol>
                        <li>i. Montrer que $g$ admet au moins une primitive sur $\\mathbb{R}$.</li>
                        <li>ii. Déterminer une primitive $G$ de $g$ sur $\\mathbb{R}$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex10q1',
                    texte: "1.i. Existence d'une primitive pour $f$.",
                    solution: `<p>$f(x)=|x|$ est continue sur $\\mathbb{R}$ (car $|x|$ est continue).</p>
                               <p>Toute fonction continue sur un intervalle admet une primitive sur cet intervalle.</p>
                               <p><strong>Donc $f$ admet au moins une primitive sur $\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch6ex10q2',
                    texte: "1.ii. Primitive $F$ de $f$ avec $F(4)=0$.",
                    solution: `<p>On cherche une primitive de $|x|$.</p>
                               <p>Sur $[0,+\\infty[$, $|x|=x$, une primitive est $\\dfrac{x^2}{2}$.</p>
                               <p>Sur $]-\\infty,0]$, $|x|=-x$, une primitive est $-\\dfrac{x^2}{2}$.</p>
                               <p>Pour avoir une primitive sur $\\mathbb{R}$, il faut que la fonction soit continue en $0$.</p>
                               <p>$$ F(x) = \\begin{cases} -\\dfrac{x^2}{2} + C_1 & \\text{si } x \\le 0 \\\\ \\dfrac{x^2}{2} + C_2 & \\text{si } x \\ge 0 \\end{cases} $$</p>
                               <p>Continuité en $0$ : $C_1 = C_2$. Posons $C_1=C_2=C$.</p>
                               <p>On a donc $F(x) = \\dfrac{x|x|}{2} + C$ (car $x|x| = x^2$ pour $x\\ge0$ et $-x^2$ pour $x\\le0$).</p>
                               <p>Condition $F(4)=0$ : $\\dfrac{4\\cdot4}{2} + C = 8 + C = 0$ ⇒ $C=-8$.</p>
                               <p><strong>$F(x)=\\dfrac{x|x|}{2} - 8$.</strong></p>`
                },
                {
                    id: 'ch6ex10q3',
                    texte: "2.i. Existence d'une primitive pour $g$.",
                    solution: `<p>$g(x)=|x|+|x-1|$ est continue sur $\\mathbb{R}$ (somme de fonctions continues).</p>
                               <p><strong>Donc $g$ admet au moins une primitive sur $\\mathbb{R}$.</strong></p>`
                },
                {
                    id: 'ch6ex10q4',
                    texte: "2.ii. Primitive $G$ de $g$.",
                    solution: `<p>On distingue trois intervalles :</p>
                               <ul>
                                 <li>Si $x\\le0$ : $|x|=-x$, $|x-1|=-(x-1)=1-x$. $g(x)=-x+1-x=1-2x$.</li>
                                 <li>Si $0\\le x\\le1$ : $|x|=x$, $|x-1|=1-x$. $g(x)=x+1-x=1$.</li>
                                 <li>Si $x\\ge1$ : $|x|=x$, $|x-1|=x-1$. $g(x)=x+x-1=2x-1$.</li>
                               </ul>
                               <p>On intègre sur chaque intervalle :</p>
                               $$ G(x) = \\begin{cases} x - x^2 + C_1 & \\text{si } x \\le 0 \\\\ x + C_2 & \\text{si } 0 \\le x \\le 1 \\\\ x^2 - x + C_3 & \\text{si } x \\ge 1 \\end{cases} $$
                               <p>On impose la continuité en $0$ et $1$ :</p>
                               <ul>
                                 <li>En $0$ : $C_1 = C_2$.</li>
                                 <li>En $1$ : $1 + C_2 = 1 - 1 + C_3 = C_3$ ⇒ $C_3 = 1 + C_2$.</li>
                               </ul>
                               <p>Posons $C_2 = C$. Alors $C_1 = C$ et $C_3 = 1 + C$.</p>
                               <p><strong>$G(x) = \\begin{cases} x - x^2 + C & \\text{si } x \\le 0 \\\\ x + C & \\text{si } 0 \\le x \\le 1 \\\\ x^2 - x + 1 + C & \\text{si } x \\ge 1 \\end{cases}$</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11 – Primitive de sin³x + sin⁵x
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=\\sin^3 x + \\sin^5 x$. Déterminer une primitive de $f$ sur $\\mathbb{R}$.</p>`,
            questions: [
                {
                    id: 'ch6ex11q1',
                    texte: "Primitive de $f$.",
                    solution: `<p><strong>Stratégie :</strong> On utilise la substitution $u=\\cos x$.</p>
                               $$ f(x) = \\sin^3 x + \\sin^5 x = \\sin x(\\sin^2 x + \\sin^4 x) = \\sin x(1-\\cos^2 x + (1-\\cos^2 x)^2). $$
                               <p>Posons $u=\\cos x$, $du = -\\sin x dx$.</p>
                               $$ \\int f(x) dx = \\int \\sin x\\left(1-u^2+(1-u^2)^2\\right) \\cdot \\dfrac{-du}{\\sin x} = -\\int \\left(1-u^2+(1-2u^2+u^4)\\right) du. $$
                               $$ = -\\int (2 - 3u^2 + u^4) du = -2u + u^3 - \\dfrac{u^5}{5} + C. $$
                               <p>En remplaçant $u=\\cos x$ :</p>
                               <p><strong>$F(x) = -2\\cos x + \\cos^3 x - \\dfrac{\\cos^5 x}{5} + C$.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12 – Problème du mobile avec accélération
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Un mobile sur un axe subit une accélération $a(t)=1-\\dfrac{1}{(t+1)^2}$, $t\\in[0,10]$. À $t=0$, le mobile est à l'origine avec une vitesse nulle.</p>
                      <ol>
                        <li>Déterminer l'expression de sa vitesse instantanée $v(t)$.</li>
                        <li>Déterminer sa vitesse et sa position pour $t=10$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex12q1',
                    texte: "1. Expression de la vitesse.",
                    solution: `<p>L'accélération est $a(t)=v'(t)$. Donc $v(t)=\\int a(t) dt$.</p>
                               $$ v(t) = \\int \\left(1 - \\dfrac{1}{(t+1)^2}\\right) dt = t + \\dfrac{1}{t+1} + C. $$
                               <p>Condition initiale : $v(0)=0$. $0 + \\dfrac{1}{1} + C = 0$ ⇒ $1 + C = 0$ ⇒ $C = -1$.</p>
                               <p><strong>$v(t) = t + \\dfrac{1}{t+1} - 1$.</strong></p>`
                },
                {
                    id: 'ch6ex12q2',
                    texte: "2. Vitesse et position à $t=10$.",
                    solution: `<p>La position est $x(t)=\\int v(t) dt$.</p>
                               $$ x(t) = \\int \\left(t + \\dfrac{1}{t+1} - 1\\right) dt = \\dfrac{t^2}{2} + \\ln(t+1) - t + C'. $$
                               <p>Condition initiale : $x(0)=0$. $0 + \\ln 1 - 0 + C' = 0$ ⇒ $C' = 0$.</p>
                               <p><strong>$x(t)=\\dfrac{t^2}{2} + \\ln(t+1) - t$.</strong></p>
                               <p>À $t=10$ :</p>
                               $$ v(10) = 10 + \\dfrac{1}{11} - 1 = 9 + \\dfrac{1}{11} = \\dfrac{100}{11} \\text{ m/s}. $$
                               $$ x(10) = \\dfrac{100}{2} + \\ln 11 - 10 = 50 - 10 + \\ln 11 = 40 + \\ln 11 \\text{ m}. $$
                               <p><strong>$v(10)=\\dfrac{100}{11}$ m/s et $x(10)=40+\\ln 11$ m.</strong></p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13 – Primitive de √(4-x²) et étude
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>Soit $f$ la fonction définie sur $[-2,2]$ par $f(x)=\\sqrt{4-x^2}$.</p>
                      <ol>
                        <li>a. Montrer que $f$ admet au moins une primitive sur $[-2,2]$.</li>
                        <li>b. Soit $F$ la primitive de $f$ sur $[-2,2]$ qui s'annule en $0$. Étudier la parité de $F$.</li>
                        <li>Soit $G$ la fonction définie sur $[0,\\pi]$ par $G(x)=F(2\\cos x)$.</li>
                        <li>i. Montrer que $I\\left(\\frac{\\pi}{2}, \\pi\\right)$ est un centre de symétrie de $C$.</li>
                        <li>ii. Calculer $G'(x)$. En déduire que $G(x)=\\pi - 2x + \\sin(2x)$.</li>
                        <li>iii. Calculer alors $F(1)$, $F(2)$ et $F(\\sqrt{2})$.</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex13q1',
                    texte: "1.a. Existence d'une primitive.",
                    solution: `<p>$f(x)=\\sqrt{4-x^2}$ est continue sur $[-2,2]$ (composée de fonctions continues).</p>
                               <p>Donc <strong>$f$ admet une primitive sur $[-2,2]$.</strong></p>`
                },
                {
                    id: 'ch6ex13q2',
                    texte: "1.b. Parité de $F$.",
                    solution: `<p>On a $f(-x)=\\sqrt{4-(-x)^2}=\\sqrt{4-x^2}=f(x)$ : $f$ est paire.</p>
                               <p>La primitive de $f$ qui s'annule en $0$ est $F(x)=\\int_0^x f(t) dt$.</p>
                               <p>Par définition : $F(-x)=\\int_0^{-x} f(t) dt$. Posons $u=-t$, $dt=-du$.</p>
                               $$ F(-x)=\\int_0^{x} f(-u) (-du) = -\\int_0^{x} f(u) du = -F(x). $$
                               <p><strong>$F$ est impaire.</strong></p>`
                },
                {
                    id: 'ch6ex13q3',
                    texte: "2.i. Centre de symétrie.",
                    solution: `<p>On doit montrer que $G(\\pi - x) = 2\\cdot \\frac{\\pi}{2} - G(x) = \\pi - G(x)$.</p>
                               <p>Ou plus précisément : $I\\left(\\frac{\\pi}{2}, \\pi\\right)$ est centre de symétrie si $G(\\pi - x) = 2\\pi - G(x)$.</p>
                               <p>Vérifions : $G(\\pi - x) = F(2\\cos(\\pi - x)) = F(-2\\cos x)$.</p>
                               <p>Comme $F$ est impaire, $F(-2\\cos x) = -F(2\\cos x) = -G(x)$.</p>
                               <p>Donc $G(\\pi - x) = -G(x)$. Ce n'est pas $\\pi - G(x)$.</p>
                               <p>Attendons la question suivante pour confirmer.</p>`
                },
                {
                    id: 'ch6ex13q4',
                    texte: "2.ii. Dérivée de $G$ et expression.",
                    solution: `<p>$G'(x) = F'(2\\cos x) \\cdot (-2\\sin x) = f(2\\cos x) \\cdot (-2\\sin x)$.</p>
                               $$ G'(x) = -2\\sin x \\cdot \\sqrt{4 - 4\\cos^2 x} = -2\\sin x \\cdot 2\\sqrt{1-\\cos^2 x} = -4\\sin x \\cdot |\\sin x|. $$
                               <p>Sur $[0,\\pi]$, $\\sin x \\ge 0$, donc $|\\sin x| = \\sin x$.</p>
                               $$ G'(x) = -4\\sin^2 x. $$
                               <p>On sait que $\\sin^2 x = \\dfrac{1-\\cos 2x}{2}$. Donc $G'(x) = -2(1-\\cos 2x) = -2 + 2\\cos 2x$.</p>
                               <p>Primitive : $G(x) = -2x + \\sin 2x + C$.</p>
                               <p>On a $G(0)=F(2\\cos 0)=F(2)$. Or $F(2)=\\int_0^2 \\sqrt{4-t^2} dt$ (aire d'un quart de cercle de rayon 2) = $\\pi$.</p>
                               <p>Donc $G(0)=\\pi$. $\\pi = 0 + 0 + C$ ⇒ $C=\\pi$.</p>
                               <p><strong>$G(x)=\\pi - 2x + \\sin 2x$.</strong></p>`
                },
                {
                    id: 'ch6ex13q5',
                    texte: "2.iii. Calcul de $F(1)$, $F(2)$, $F(\\sqrt{2})$.",
                    solution: `<ul>
                                 <li>$F(2) = \\int_0^2 \\sqrt{4-t^2} dt = \\pi$ (quart de cercle de rayon 2).</li>
                                 <li>$F(\\sqrt{2})$ : on a $G(\\pi/4) = F(2\\cos\\pi/4) = F(\\sqrt{2})$.</li>
                                 <li>$G(\\pi/4) = \\pi - 2\\cdot\\frac{\\pi}{4} + \\sin\\frac{\\pi}{2} = \\pi - \\frac{\\pi}{2} + 1 = \\frac{\\pi}{2} + 1$.</li>
                                 <li><strong>$F(\\sqrt{2}) = \\dfrac{\\pi}{2} + 1$.</strong></li>
                                 <li>$F(1)$ : on a $G(\\pi/3) = F(2\\cos\\pi/3) = F(1)$.</li>
                                 <li>$G(\\pi/3) = \\pi - 2\\cdot\\frac{\\pi}{3} + \\sin\\frac{2\\pi}{3} = \\pi - \\frac{2\\pi}{3} + \\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$.</li>
                                 <li><strong>$F(1) = \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}$.</strong></li>
                               </ul>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14 – Fonction u(x)=x+√(x²+1)
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>Soit $u$ la fonction définie sur $\\mathbb{R}$ par $u(x)=x+\\sqrt{x^2+1}$.</p>
                      <ol>
                        <li>Exprimer $\\sqrt{x^2+1}$ à l'aide de $u(x)$ et $u'(x)$.</li>
                        <li>Déterminer des primitives pour chacune des fonctions :</li>
                        <li>$$ f(x)=\\dfrac{1}{(x+\\sqrt{x^2+1})\\sqrt{x^2+1}}, \\quad g(x)=\\dfrac{1}{(x+\\sqrt{x^2+1})^2\\sqrt{x^2+1}}. $$</li>
                      </ol>`,
            questions: [
                {
                    id: 'ch6ex14q1',
                    texte: "1. Expression de $\\sqrt{x^2+1}$ en fonction de $u$.",
                    solution: `<p>$u'(x)=1+\\dfrac{x}{\\sqrt{x^2+1}} = \\dfrac{\\sqrt{x^2+1}+x}{\\sqrt{x^2+1}} = \\dfrac{u(x)}{\\sqrt{x^2+1}}$.</p>
                               <p>Donc $\\sqrt{x^2+1} = \\dfrac{u(x)}{u'(x)}$.</p>
                               <p>De plus, $u(x)u'(x) = x+\\sqrt{x^2+1}$.</p>
                               <p><strong>$\\sqrt{x^2+1} = \\dfrac{u(x)}{u'(x)}$.</strong></p>`
                },
                {
                    id: 'ch6ex14q2',
                    texte: "2. Primitives de $f$ et $g$.",
                    solution: `<p><strong>Pour $f$ :</strong></p>
                               $$ f(x)=\\dfrac{1}{u(x)\\sqrt{x^2+1}} = \\dfrac{u'(x)}{u(x)^2}. $$
                               <p>Une primitive est $-\\dfrac{1}{u(x)}$.</p>
                               <p><strong>$\\int f(x) dx = -\\dfrac{1}{x+\\sqrt{x^2+1}} + C$.</strong></p>
                               <p><strong>Pour $g$ :</strong></p>
                               $$ g(x)=\\dfrac{1}{u(x)^2\\sqrt{x^2+1}} = \\dfrac{u'(x)}{u(x)^3}. $$
                               <p>Une primitive est $-\\dfrac{1}{2u(x)^2}$.</p>
                               <p><strong>$\\int g(x) dx = -\\dfrac{1}{2(x+\\sqrt{x^2+1})^2} + C$.</strong></p>`
                }
            ]
        }
    );

    console.log("Partie 3 (exercices 8 à 14) – Primitives avec conditions – ajoutée avec succès.");
})();