// data/aideMemoire.js – Aide-mémoire analyse et suites
// Extrait des fichiers "Aide mémoire analyse.pdf" et "Aide mémoire suites.pdf"
(function() {
    if (typeof data === 'undefined') {
        window.data = { chapitres: [] };
    }

    window.aideMemoire = {
        // ======================================================================
        // ANALYSE – Questions/Réponses
        // ======================================================================
        analyse: {
            titre: "📐 Aide-mémoire Analyse",
            description: "Questions et réponses pour les exercices d'analyse",
            items: [
                // 1. Asymptote verticale
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^+} f(x) = +\\infty$<br>ou<br>$\\lim_{x\\to a^-} f(x) = +\\infty$<br>ou<br>$\\lim_{x\\to a^+} f(x) = -\\infty$<br>ou<br>$\\lim_{x\\to a^-} f(x) = -\\infty$",
                    reponse: "La droite d'équation $x = a$ est une <strong>asymptote verticale</strong> à la courbe de $f$."
                },
                // 2. Asymptote horizontale
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to +\\infty} f(x) = b$<br>ou<br>$\\lim_{x\\to -\\infty} f(x) = b$",
                    reponse: "La droite d'équation $y = b$ est une <strong>asymptote horizontale</strong> à la courbe de $f$ au voisinage de $\\infty$."
                },
                // 3. Branche parabolique axe des abscisses
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to +\\infty} f(x) = +\\infty$<br>ou<br>$\\lim_{x\\to -\\infty} f(x) = -\\infty$<br>et<br>$\\lim_{x\\to \\pm\\infty} \\dfrac{f(x)}{x} = 0$",
                    reponse: "La courbe de $f$ admet une <strong>branche parabolique de direction celle de l'axe des abscisses</strong> au voisinage de $\\infty$."
                },
                // 4. Branche parabolique axe des ordonnées
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to +\\infty} f(x) = +\\infty$<br>ou<br>$\\lim_{x\\to -\\infty} f(x) = -\\infty$<br>et<br>$\\lim_{x\\to \\pm\\infty} \\dfrac{f(x)}{x} = \\pm\\infty$",
                    reponse: "La courbe de $f$ admet une <strong>branche parabolique de direction celle de l'axe des ordonnées</strong> au voisinage de $\\infty$."
                },
                // 5. Branche parabolique direction y=ax
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to \\pm\\infty} \\dfrac{f(x)}{x} = a$<br>et<br>$\\lim_{x\\to \\pm\\infty} (f(x)-ax) = \\pm\\infty$",
                    reponse: "La courbe de $f$ admet une <strong>branche parabolique de direction celle de la droite d'équation $y=ax$</strong> au voisinage de $\\infty$."
                },
                // 6. Asymptote oblique
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to \\pm\\infty} (f(x)-ax) = b$<br>ou<br>$\\lim_{x\\to \\pm\\infty} (f(x)-(ax+b)) = 0$",
                    reponse: "La droite d'équation $y = ax + b$ est une <strong>asymptote oblique</strong> à la courbe de $f$ au voisinage de $\\infty$."
                },
                // 7. Dérivabilité en a
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a} \\dfrac{f(x)-f(a)}{x-a} = b$",
                    reponse: "$f$ est <strong>dérivable en $a$</strong>.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>tangente de pente $b = f'(a)$</strong>."
                },
                // 8. Dérivabilité à droite
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = b$",
                    reponse: "$f$ est <strong>dérivable à droite en $a$</strong>.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente de pente $b = f'_d(a)$</strong>."
                },
                // 9. Dérivabilité à gauche
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^-} \\dfrac{f(x)-f(a)}{x-a} = b$",
                    reponse: "$f$ est <strong>dérivable à gauche en $a$</strong>.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente de pente $b = f'_g(a)$</strong>."
                },
                // 10. Demi-tangente verticale vers le haut (gauche)
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^-} \\dfrac{f(x)-f(a)}{x-a} = -\\infty$",
                    reponse: "$f$ n'est pas dérivable à gauche en $a$.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente verticale dirigée vers le haut</strong>."
                },
                // 11. Demi-tangente verticale vers le bas (gauche)
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^-} \\dfrac{f(x)-f(a)}{x-a} = +\\infty$",
                    reponse: "$f$ n'est pas dérivable à gauche en $a$.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente verticale dirigée vers le bas</strong>."
                },
                // 12. Demi-tangente verticale vers le bas (droite)
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = -\\infty$",
                    reponse: "$f$ n'est pas dérivable à droite en $a$.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente verticale dirigée vers le bas</strong>."
                },
                // 13. Demi-tangente verticale vers le haut (droite)
                { 
                    question: "Interpréter graphiquement :<br>$\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = +\\infty$",
                    reponse: "$f$ n'est pas dérivable à droite en $a$.<br>La courbe de $f$ admet au point d'abscisse $a$ une <strong>demi-tangente verticale dirigée vers le haut</strong>."
                },
                // 14. Aire sous la courbe
                { 
                    question: "Interpréter graphiquement :<br>$\\displaystyle\\int_a^b f(x)dx$<br>avec $a < b$",
                    reponse: "L'aire en unité d'aire de la partie du plan limitée par la courbe de $f$, l'axe des abscisses et les droites d'équations respectives $x=a$ et $x=b$."
                },
                // 15. Continuité en a
                { 
                    question: "Montrer que $f$ est continue en $a$",
                    reponse: "$\\lim_{x\\to a} f = \\dots = f(a)$<br>Donc <strong>$f$ est continue en $a$</strong>."
                },
                // 16. Dérivabilité en a
                { 
                    question: "Montrer que $f$ est dérivable en $a$",
                    reponse: "$\\lim_{x\\to a} \\dfrac{f(x)-f(a)}{x-a} = \\dots$<br>Donc <strong>$f$ est dérivable en $a$</strong> et on a $f'(a) = l$."
                },
                // 17. Continuité / Dérivabilité sur un intervalle
                { 
                    question: "Montrer que $f$ est continue (ou dérivable) sur un intervalle $I$",
                    reponse: "La nature de $f$ (polynôme, rationnelle, composée, ...) permet de conclure."
                },
                // 18. Étudier les variations
                { 
                    question: "Étudier les variations de $f$",
                    reponse: "Calculer $f'$ puis étudier le signe de $f'$<br>Conclure."
                },
                // 19. Asymptote en +∞
                { 
                    question: "Montrer que la droite $\\Delta : y = ax+b$ est une asymptote à la courbe de $f$ au voisinage de $+\\infty$",
                    reponse: "$\\lim_{x\\to +\\infty} (f(x)-(ax+b)) = 0$<br>Donc la droite $\\Delta$ est une <strong>asymptote oblique</strong> à la courbe de $f$ au voisinage de $+\\infty$."
                },
                // 20. Asymptote en -∞
                { 
                    question: "Montrer que la droite $\\Delta : y = ax+b$ est une asymptote à la courbe de $f$ au voisinage de $-\\infty$",
                    reponse: "$\\lim_{x\\to -\\infty} (f(x)-(ax+b)) = 0$<br>Donc la droite $\\Delta$ est une <strong>asymptote oblique</strong> à la courbe de $f$ au voisinage de $-\\infty$."
                },
                // 21. Position relative
                { 
                    question: "Étudier la position relative de la courbe de $f$ et la droite $\\Delta : y = ax+b$",
                    reponse: "Étudier le signe de $f(x)-(ax+b)$."
                },
                // 22. Tangente
                { 
                    question: "Écrire une équation de la tangente à la courbe de $f$ au point d'abscisse $a$",
                    reponse: "$y = f'(a)(x-a) + f(a)$"
                },
                // 23. Équation f(x)=k (au moins une solution)
                { 
                    question: "Montrer que l'équation $f(x)=k$ admet au moins une solution $\\alpha$ dans l'intervalle $I$",
                    reponse: "$f$ est continue sur $I$, $f(I)=J$ et $k\\in J$<br>Donc l'équation $f(x)=k$ admet <strong>au moins une solution</strong> $\\alpha\\in I$."
                },
                // 24. Équation f(x)=0 (au moins une solution)
                { 
                    question: "Montrer que l'équation $f(x)=0$ admet au moins une solution $\\alpha$ dans l'intervalle $I$",
                    reponse: "$f$ est continue sur $I$, $f(I)=J$ et $0\\in J$<br>Donc l'équation $f(x)=0$ admet <strong>au moins une solution</strong> $\\alpha\\in I$."
                },
                // 25. Équation f(x)=k (solution unique)
                { 
                    question: "Montrer que l'équation $f(x)=k$ admet une solution unique $\\alpha$ dans l'intervalle $I$",
                    reponse: "$f$ est continue et strictement monotone sur $I$ donc $f$ est une <strong>bijection</strong> de $I$ sur $f(I)$.<br>Comme $k\\in f(I)$, l'équation $f(x)=k$ admet <strong>une unique solution</strong> $\\alpha\\in I$."
                },
                // 26. Équation f(x)=0 (solution unique)
                { 
                    question: "Montrer que l'équation $f(x)=0$ admet une solution unique $\\alpha$ dans l'intervalle $I$",
                    reponse: "$f$ est continue et strictement monotone sur $I$ donc $f$ est une <strong>bijection</strong> de $I$ sur $f(I)$.<br>Comme $0\\in f(I)$, l'équation $f(x)=0$ admet <strong>une unique solution</strong> $\\alpha\\in I$."
                },
                // 27. Équation f(x)=x (au moins une solution)
                { 
                    question: "Montrer que l'équation $f(x)=x$ admet au moins une solution $\\alpha$ dans l'intervalle $I$",
                    reponse: "Soit $h(x)=f(x)-x$.<br>$h$ est continue sur $I$, $h(I)=J$ et $0\\in J$<br>Donc l'équation $h(x)=0$ (soit $f(x)=x$) admet <strong>au moins une solution</strong> $\\alpha\\in I$."
                },
                // 28. Équation f(x)=x (solution unique)
                { 
                    question: "Montrer que l'équation $f(x)=x$ admet une solution unique $\\alpha$ dans l'intervalle $I$",
                    reponse: "Soit $h(x)=f(x)-x$.<br>$h$ est continue et strictement monotone sur $I$ donc $h$ est une <strong>bijection</strong> de $I$ sur $h(I)$.<br>Comme $0\\in h(I)$, l'équation $h(x)=0$ (soit $f(x)=x$) admet <strong>une unique solution</strong> $\\alpha\\in I$."
                },
                // 29. Équation f(x)=g(x) (au moins une solution)
                { 
                    question: "Montrer que l'équation $f(x)=g(x)$ admet au moins une solution $\\alpha$ dans l'intervalle $I$",
                    reponse: "Soit $h(x)=f(x)-g(x)$.<br>$h$ est continue sur $I$, $h(I)=J$ et $0\\in J$<br>Donc l'équation $h(x)=0$ (soit $f(x)=g(x)$) admet <strong>au moins une solution</strong> $\\alpha\\in I$."
                },
                // 30. Équation f(x)=g(x) (solution unique)
                { 
                    question: "Montrer que l'équation $f(x)=g(x)$ admet une solution unique $\\alpha$ dans l'intervalle $I$",
                    reponse: "Soit $h(x)=f(x)-g(x)$.<br>$h$ est continue et strictement monotone sur $I$ donc $h$ est une <strong>bijection</strong> de $I$ sur $h(I)$.<br>Comme $0\\in h(I)$, l'équation $h(x)=0$ (soit $f(x)=g(x)$) admet <strong>une unique solution</strong> $\\alpha\\in I$."
                },
                // 31. Vérifier que α ∈ ]a,b[
                { 
                    question: "Vérifier que $\\alpha \\in ]a,b[$<br>(c'est-à-dire $a < \\alpha < b$)",
                    reponse: "Calculer $f(a)$ et $f(b)$.<br>Vérifier que $k$ (resp $0$) est entre $f(a)$ et $f(b)$."
                },
                // 32. Encadrement de f(x)-f(a)
                { 
                    question: "Montrer que $\\forall x\\in[a,b]$ :<br>$\\alpha(x-a) \\le f(x)-f(a) \\le \\beta(x-a)$",
                    reponse: "Pour tout $t\\in[a,b]$ : $\\alpha \\le f'(t) \\le \\beta$<br>$\\forall x\\in[a,b]$ : $\\displaystyle\\int_a^x \\alpha dt \\le \\int_a^x f'(t) dt \\le \\int_a^x \\beta dt$<br>D'où $\\alpha(x-a) \\le f(x)-f(a) \\le \\beta(x-a)$."
                },
                // 33. Inégalité de Lipschitz
                { 
                    question: "Montrer que $\\forall x\\in I$ :<br>$|f(x)-f(a)| \\le k|x-a|$",
                    reponse: "$f$ est dérivable sur $I$ et on a pour tout $t\\in I$ : $|f'(t)| \\le k$<br>Donc $\\forall x\\in I$ : $|f(x)-f(a)| \\le k|x-a|$."
                },
                // 34. Bijection et réciproque
                { 
                    question: "Montrer que $f$ réalise une bijection de $I$ sur un intervalle $J$ qu'on déterminera.<br>Ou : Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ qu'on déterminera.",
                    reponse: "$f$ est continue et strictement croissante (ou décroissante) sur $I$<br>Donc $f$ réalise une <strong>bijection</strong> de $I$ sur $J = f(I)$."
                },
                // 35. Prolongement par continuité
                { 
                    question: "Montrer que $f$ est prolongeable par continuité en $a$. Donner son prolongement.",
                    reponse: "$f$ n'est pas définie en $a$ et on a : $\\lim_{x\\to a} f = l \\in \\mathbb{R}$<br>Donc $f$ est <strong>prolongeable par continuité</strong> en $a$.<br>Son prolongement est : $p(x) = \\begin{cases} f(x) & \\text{si } x \\neq a \\\\ l & \\text{si } x = a \\end{cases}$"
                },
                // 36. Continuité de f^{-1} en un point
                { 
                    question: "Montrer que $f^{-1}$ est continue en $b = f(a)$",
                    reponse: "$f$ est continue en $a$<br>Donc $f^{-1}$ est <strong>continue en $b=f(a)$</strong>."
                },
                // 37. Continuité de f^{-1} sur J
                { 
                    question: "Montrer que $f^{-1}$ est continue sur $J$",
                    reponse: "$f$ est continue sur $I$<br>Donc $f^{-1}$ est <strong>continue sur $J=f(I)$</strong>."
                },
                // 38. Parité (paire)
                { 
                    question: "Montrer que $f$ est paire",
                    reponse: "Pour tout $x\\in D_f$ :<br>$-x\\in D_f$<br>$f(-x)=f(x)$<br>Donc $f$ est <strong>paire</strong>."
                },
                // 39. Parité (impaire)
                { 
                    question: "Montrer que $f$ est impaire",
                    reponse: "Pour tout $x\\in D_f$ :<br>$-x\\in D_f$<br>$f(-x)=-f(x)$<br>Donc $f$ est <strong>impaire</strong>."
                },
                // 40. Axe de symétrie
                { 
                    question: "Montrer que la droite $\\Delta : x=a$ est un axe de symétrie de la courbe de $f$",
                    reponse: "Pour tout $x\\in D_f$ :<br>$2a-x\\in D_f$<br>$f(2a-x)=f(x)$<br>Donc la droite $\\Delta:x=a$ est un <strong>axe de symétrie</strong> de la courbe de $f$."
                },
                // 41. Centre de symétrie
                { 
                    question: "Montrer que le point $I(a,b)$ est un centre de symétrie de la courbe de $f$",
                    reponse: "Pour tout $x\\in D_f$ :<br>$2a-x\\in D_f$<br>$f(2a-x)=2b-f(x)$<br>Donc le point $I(a,b)$ est un <strong>centre de symétrie</strong> de la courbe de $f$."
                },
                // 42. Point d'inflexion
                { 
                    question: "Montrer que le point $I(a,b)$ est un point d'inflexion de la courbe de $f$",
                    reponse: "1<sup>ère</sup> méthode :<br>$f(a)=b$, calculer $f''$, étudier son signe.<br>$f''$ s'annule en $a$ en changeant de signe → <strong>point d'inflexion</strong>.<br><br>2<sup>ème</sup> méthode :<br>$f(a)=b$, calculer $f'$.<br>$f'$ s'annule en $a$ et ne change pas de signe → <strong>point d'inflexion</strong>."
                },
                // 43. Expliciter f^{-1}
                { 
                    question: "Expliciter $f^{-1}(x)$",
                    reponse: "$f$ est une bijection de $I$ sur $J$.<br>Soit $x\\in J$, $y\\in I$ :<br>$f^{-1}(x)=y \\Rightarrow f(y)=x \\Rightarrow \\dots \\Rightarrow y = \\dots$<br>Donc $f^{-1}(x) = \\dots$"
                },
                // 44. Existence d'une primitive
                { 
                    question: "Montrer que $f$ admet au moins une primitive sur un intervalle $I$",
                    reponse: "$f$ est continue sur $I$<br>Donc $f$ admet <strong>au moins une primitive</strong> sur $I$."
                },
                // 45. Vérification d'une primitive
                { 
                    question: "Montrer que $F$ est une primitive de $f$ sur un intervalle $I$",
                    reponse: "$F$ est dérivable sur $I$ et on a $F'=f$<br>Donc $F$ est une <strong>primitive</strong> de $f$ sur $I$."
                },
                // 46. Existence d'une intégrale
                { 
                    question: "Montrer que l'intégrale $\\displaystyle\\int_a^b f(x)dx$ existe",
                    reponse: "$f$ est continue sur $[a,b]$<br>D'où l'intégrale $\\displaystyle\\int_a^b f(x)dx$ <strong>existe</strong>."
                },
                // 47. Fonction définie par une intégrale
                { 
                    question: "Montrer que $F: x\\mapsto\\displaystyle\\int_a^x f(t)dt$ est dérivable sur $I$ et calculer $F'(x)$",
                    reponse: "$f$ est continue sur $I$ et $a\\in I$<br>Alors $F$ est <strong>dérivable</strong> sur $I$ et on a $F'(x)=f(x)$."
                },
                // 48. Calcul d'intégrale
                { 
                    question: "Calculer $\\displaystyle\\int_a^b f(x)dx$",
                    reponse: "1<sup>ère</sup> méthode : Utiliser une primitive $F$ de $f$ :<br>$\\displaystyle\\int_a^b f(x)dx = [F(x)]_a^b = F(b)-F(a)$<br><br>2<sup>ème</sup> méthode : Intégration par parties :<br>$\\displaystyle\\int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$"
                },
                // 49. Variations de F
                { 
                    question: "Étudier les variations de $F$ (une primitive de $f$ sur $I$)",
                    reponse: "Étudier le signe de $f=F'$<br>Conclure."
                },
                // 50. Dérivabilité de f^{-1} en un point
                { 
                    question: "Montrer que $f^{-1}$ est dérivable en $b=f(a)$",
                    reponse: "1<sup>ère</sup> méthode :<br>$f$ est dérivable en $a$ et $f'(a)\\neq 0$<br>Donc $f^{-1}$ est <strong>dérivable en $b=f(a)$</strong>.<br><br>2<sup>ème</sup> méthode :<br>La courbe de $f$ admet au point d'abscisse $a$ une tangente verticale<br>Donc la courbe de $f^{-1}$ admet au point d'abscisse $b$ une tangente horizontale."
                },
                // 51. Dérivée de f^{-1}
                { 
                    question: "Calculer $(f^{-1})'(y)$",
                    reponse: "$(f^{-1})'(y) = \\dfrac{1}{f'(x)}$ où $x=f^{-1}(y)$"
                },
                // 52. Dérivabilité de f^{-1} sur un intervalle
                { 
                    question: "Montrer que $f^{-1}$ est dérivable sur un intervalle $J=f(I)$",
                    reponse: "$f$ est dérivable sur $I$ et $f'(x)\\neq 0$ pour tout $x\\in I$<br>Donc $f^{-1}$ est <strong>dérivable</strong> sur $J=f(I)$."
                },
                // 53. Équation de l'axe des abscisses
                { 
                    question: "Équation de l'axe des abscisses",
                    reponse: "$y=0$"
                },
                // 54. Équation de l'axe des ordonnées
                { 
                    question: "Équation de l'axe des ordonnées",
                    reponse: "$x=0$"
                },
                // 55. Équation de la courbe de f
                { 
                    question: "Équation de la courbe de $f$",
                    reponse: "$y=f(x)$"
                },
                // 56. Équation d'une droite oblique
                { 
                    question: "Équation d'une droite oblique",
                    reponse: "$y=ax+b$"
                },
                // 57. Intersection avec l'axe des abscisses
                { 
                    question: "Intersection de la courbe de $f$ avec l'axe des abscisses",
                    reponse: "$\\begin{cases} y=f(x) \\\\ y=0 \\end{cases}$<br>D'où $M(\\dots; 0)$"
                },
                // 58. Intersection avec l'axe des ordonnées
                { 
                    question: "Intersection de la courbe de $f$ avec l'axe des ordonnées",
                    reponse: "$\\begin{cases} y=f(x) \\\\ x=0 \\end{cases}$<br>D'où $M(0; \\dots)$"
                },
                // 59. Tracer f^{-1}
                { 
                    question: "Tracer la courbe de $f^{-1}$",
                    reponse: "Faire la <strong>symétrique</strong> de $C_f$ par rapport à la droite $d:y=x$."
                }
            ]
        },
        // ======================================================================
        // SUITES – Questions/Réponses
        // ======================================================================
        suites: {
            titre: "📊 Aide-mémoire Suites",
            description: "Questions et réponses pour les exercices sur les suites",
            items: [
                // 1. Récurrence U_n < a
                { 
                    question: "Montrer, par récurrence, que $U_n < a$",
                    reponse: "<strong>Vérification pour n=0 :</strong> $U_0 < a$<br><br><strong>Supposons que $U_n < a$</strong> et montrons que $U_{n+1} < a$<br><br><strong>Conclusion :</strong> $\\forall n\\in\\mathbb{N} : U_n < a$"
                },
                // 2. Récurrence U_n > a
                { 
                    question: "Montrer, par récurrence, que $U_n > a$",
                    reponse: "<strong>Vérification pour n=0 :</strong> $U_0 > a$<br><br><strong>Supposons que $U_n > a$</strong> et montrons que $U_{n+1} > a$<br><br><strong>Conclusion :</strong> $\\forall n\\in\\mathbb{N} : U_n > a$"
                },
                // 3. Suite décroissante
                { 
                    question: "Montrer que $U$ est une suite décroissante",
                    reponse: "On a : $U_{n+1} - U_n = \\dots < 0$<br>Donc <strong>$U$ est une suite décroissante</strong>."
                },
                // 4. Suite croissante
                { 
                    question: "Montrer que $U$ est une suite croissante",
                    reponse: "On a : $U_{n+1} - U_n = \\dots > 0$<br>Donc <strong>$U$ est une suite croissante</strong>."
                },
                // 5. Suite croissante majorée
                { 
                    question: "Montrer qu'une suite croissante majorée converge",
                    reponse: "$U$ est une suite <strong>croissante</strong> <strong>majorée</strong> par $\\dots$<br>Donc <strong>$U$ converge</strong>."
                },
                // 6. Suite décroissante minorée
                { 
                    question: "Montrer qu'une suite décroissante minorée converge",
                    reponse: "$U$ est une suite <strong>décroissante</strong> <strong>minorée</strong> par $\\dots$<br>Donc <strong>$U$ converge</strong>."
                },
                // 7. Calcul de limite (suite récurrente)
                { 
                    question: "Calculer la limite de $U_n$ lorsque $U_{n+1}=f(U_n)$",
                    reponse: "$\\begin{cases} U_{n+1}=f(U_n) \\\\ U \\text{ converge vers } \\ell \\\\ f \\text{ continue en } \\ell \\end{cases}$<br>Donc $f(\\ell)=\\ell$<br>Donc $\\ell = \\dots$"
                },
                // 8. Suite géométrique
                { 
                    question: "Montrer que la suite $V$ est une suite géométrique de raison $q$",
                    reponse: "On a $V_{n+1} = \\dots = \\dots = V_n \\times q$<br>Donc $V$ est une <strong>suite géométrique</strong> de raison $q$."
                },
                // 9. Suite arithmétique
                { 
                    question: "Montrer que la suite $V$ est une suite arithmétique de raison $r$",
                    reponse: "On a $V_{n+1} = \\dots = \\dots = V_n + r$<br>Donc $V$ est une <strong>suite arithmétique</strong> de raison $r$."
                },
                // 10. Terme général (géométrique)
                { 
                    question: "$V$ est une suite géométrique.<br>Calculer (exprimer) $V_n$ en fonction de $n$",
                    reponse: "$V$ est une suite géométrique<br>$V_n = V_0 \\times q^n$<br>Ou bien $V_n = V_1 \\times q^{n-1}$<br>Ou bien $V_n = V_p \\times q^{n-p}$"
                },
                // 11. Terme général (arithmétique)
                { 
                    question: "$V$ est une suite arithmétique.<br>Calculer (exprimer) $V_n$ en fonction de $n$",
                    reponse: "$V$ est une suite arithmétique<br>$V_n = V_0 + n\\times r$<br>Ou bien $V_n = V_1 + (n-1)r$<br>Ou bien $V_n = V_p + (n-p)r$"
                },
                // 12. Limite 1+2n / 1-2n
                { 
                    question: "Calculer :<br>$\\lim_{n\\to+\\infty} (1+2n)$<br>$\\lim_{n\\to+\\infty} (1-2n)$",
                    reponse: "$\\lim_{n\\to+\\infty} (1+2n) = +\\infty$<br>$\\lim_{n\\to+\\infty} (1-2n) = -\\infty$"
                },
                // 13. Limite q^n (|q|<1)
                { 
                    question: "Calculer :<br>$\\lim_{n\\to+\\infty} 3\\times\\left(\\dfrac{2}{3}\\right)^n$<br>$\\lim_{n\\to+\\infty} -5\\times\\left(\\dfrac{\\sqrt{3}}{2}\\right)^n$",
                    reponse: "$\\lim_{n\\to+\\infty} 3\\times\\left(\\dfrac{2}{3}\\right)^n = 0$<br>$\\lim_{n\\to+\\infty} -5\\times\\left(\\dfrac{\\sqrt{3}}{2}\\right)^n = 0$<br><br><strong>Remarque :</strong> $\\forall q\\in]-1,1[, \\lim_{n\\to+\\infty} q^n = 0$"
                },
                // 14. Limite 5-2×3^n
                { 
                    question: "Calculer :<br>$\\lim_{n\\to+\\infty} (5-2\\times 3^n)$",
                    reponse: "$\\lim_{n\\to+\\infty} (5-2\\times 3^n) = -\\infty$<br><br><strong>Remarque :</strong> $\\forall q>1, \\lim_{n\\to+\\infty} q^n = +\\infty$"
                },
                // 15. Suites divergentes
                { 
                    question: "Parmi les suites suivantes, lesquelles sont divergentes :<br>$U: n\\mapsto(-1)^n$<br>$V: n\\mapsto(-3)^n$",
                    reponse: "Les suites $U$ et $V$ sont <strong>divergentes</strong>.<br>En effet, $\\forall q\\le -1$, $q^n$ n'a pas de limite.<br>Comme $-1\\le -1$ et $-3\\le -1$, les suites $U$ et $V$ sont divergentes."
                },
                // 16. Inégalité |U_{n+1}-α| < k|U_n-α|
                { 
                    question: "$U$ est définie par $\\begin{cases} U_0 \\\\ U_{n+1}=f(U_n) \\end{cases}$<br>où $f$ est dérivable sur $I$, $f(\\alpha)=\\alpha$ et $|f'(x)| < k$<br>Montrer que :<br>$|U_{n+1}-\\alpha| < k|U_n-\\alpha|$",
                    reponse: "$f$ est dérivable sur $I$ et $|f'(x)| < k$<br>Donc $\\forall a,b\\in I, |f(a)-f(b)| < k|a-b|$<br>En particulier avec $a=U_n$ et $b=\\alpha$ :<br>$|f(U_n)-f(\\alpha)| < k|U_n-\\alpha|$<br>D'où : <strong>$|U_{n+1}-\\alpha| < k|U_n-\\alpha|$</strong>"
                },
                // 17. Inégalité |U_n-α| < k^n|U_0-α|
                { 
                    question: "$|U_{n+1}-\\alpha| < k|U_n-\\alpha|$<br>Montrer que :<br>$|U_n-\\alpha| < k^n|U_0-\\alpha|$",
                    reponse: "Par récurrence :<br>$|U_1-\\alpha| < k|U_0-\\alpha|$<br>$|U_2-\\alpha| < k|U_1-\\alpha| < k^2|U_0-\\alpha|$<br>$\\vdots$<br>$|U_n-\\alpha| < k^n|U_0-\\alpha|$"
                },
                // 18. Convergence de U_n
                { 
                    question: "$k\\in]-1,1[$ et $|U_n-\\alpha| < k^n|U_0-\\alpha|$<br>Montrer que $U$ converge.",
                    reponse: "$k\\in]-1,1[$ donc $\\lim_{n\\to+\\infty} k^n = 0$<br>Donc $\\lim_{n\\to+\\infty} k^n|U_0-\\alpha| = 0$<br>Comme $|U_n-\\alpha| < k^n|U_0-\\alpha|$,<br><strong>$\\lim_{n\\to+\\infty} U_n = \\alpha$</strong>"
                },
                // 19. Limite ln(1+e^{-2n})/e^{-2n}
                { 
                    question: "Calculer :<br>$\\lim_{n\\to+\\infty} \\dfrac{\\ln(1+e^{-2n})}{e^{-2n}}$",
                    reponse: "On a $\\lim_{n\\to+\\infty} e^{-2n} = 0$<br>Et $\\lim_{x\\to0} \\dfrac{\\ln(1+x)}{x} = 1$<br>Donc $\\lim_{n\\to+\\infty} \\dfrac{\\ln(1+e^{-2n})}{e^{-2n}} = 1$<br><br><strong>Remarque :</strong> $\\lim_{n\\to+\\infty} U_n = a$ et $\\lim_{x\\to a} f(x) = L$ ⇒ $\\lim_{n\\to+\\infty} f(U_n) = L$"
                },
                // 20. Limite (-1)^n/√n
                { 
                    question: "Calculer :<br>$\\lim_{n\\to+\\infty} \\dfrac{(-1)^n}{\\sqrt{n}}$",
                    reponse: "$-1 \\le (-1)^n \\le 1$ ⇒ $\\dfrac{-1}{\\sqrt{n}} \\le \\dfrac{(-1)^n}{\\sqrt{n}} \\le \\dfrac{1}{\\sqrt{n}}$<br><br>$\\lim_{n\\to+\\infty} \\dfrac{-1}{\\sqrt{n}} = 0$ et $\\lim_{n\\to+\\infty} \\dfrac{1}{\\sqrt{n}} = 0$<br><br>Donc <strong>$\\lim_{n\\to+\\infty} \\dfrac{(-1)^n}{\\sqrt{n}} = 0$</strong><br><br><strong>Remarque :</strong> Théorème des gendarmes"
                },
                // 21. Somme de constantes
                { 
                    question: "Calculer en fonction de $n$ :<br>$\\displaystyle\\sum_{k=0}^{n} p$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} p = (n+1) \\times p$"
                },
                // 22. Somme d'une suite géométrique
                { 
                    question: "$V$ est une suite géométrique de raison $q \\neq 1$.<br>Exprimer en fonction de $n$ :<br>$\\displaystyle\\sum_{k=0}^{n} V_k$, $\\displaystyle\\sum_{k=1}^{n} V_k$, $\\displaystyle\\sum_{k=p}^{n} V_k$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} V_k = V_0 \\times \\dfrac{1-q^{n+1}}{1-q}$<br>$\\displaystyle\\sum_{k=1}^{n} V_k = V_1 \\times \\dfrac{1-q^n}{1-q}$<br>$\\displaystyle\\sum_{k=p}^{n} V_k = V_p \\times \\dfrac{1-q^{n-p+1}}{1-q}$"
                },
                // 23. Somme d'une suite arithmétique
                { 
                    question: "$V$ est une suite arithmétique de raison $r$.<br>Exprimer en fonction de $n$ :<br>$\\displaystyle\\sum_{k=0}^{n} V_k$, $\\displaystyle\\sum_{k=1}^{n} V_k$, $\\displaystyle\\sum_{k=p}^{n} V_k$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} V_k = (n+1) \\times \\dfrac{V_0+V_n}{2}$<br>$\\displaystyle\\sum_{k=1}^{n} V_k = n \\times \\dfrac{V_1+V_n}{2}$<br>$\\displaystyle\\sum_{k=p}^{n} V_k = (n-p+1) \\times \\dfrac{V_p+V_n}{2}$"
                },
                // 24. Somme de U_n + V_n
                { 
                    question: "Soient $U$ une suite arithmétique de raison $r$ et $V$ une suite géométrique de raison $q$.<br>On pose $W_n = U_n + V_n$.<br>Calculer :<br>$\\displaystyle\\sum_{k=0}^{n} W_k$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} W_k = \\sum_{k=0}^{n} U_k + \\sum_{k=0}^{n} V_k$<br>$= (n+1) \\times \\dfrac{U_0+U_n}{2} + V_0 \\times \\dfrac{1-q^{n+1}}{1-q}$<br>(pour $q\\neq1$)"
                },
                // 25. Somme de (p+U_k)
                { 
                    question: "Soit $U$ une suite arithmétique de raison $r$ et $p$ une constante.<br>Calculer :<br>$\\displaystyle\\sum_{k=0}^{n} (p+U_k)$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} (p+U_k) = \\sum_{k=0}^{n} p + \\sum_{k=0}^{n} U_k$<br>$= (n+1) \\times p + (n+1) \\times \\dfrac{U_0+U_n}{2}$"
                },
                // 26. Somme de (p+V_k)
                { 
                    question: "Soit $V$ une suite géométrique de raison $q$ et $p$ une constante.<br>Calculer :<br>$\\displaystyle\\sum_{k=0}^{n} (p+V_k)$",
                    reponse: "$\\displaystyle\\sum_{k=0}^{n} (p+V_k) = \\sum_{k=0}^{n} p + \\sum_{k=0}^{n} V_k$<br>$= (n+1) \\times p + V_0 \\times \\dfrac{1-q^{n+1}}{1-q}$<br>(pour $q\\neq1$)"
                },
                // 27. Limite avec (-√5)^n
                { 
                    question: "Soit $U_n = 2 + \\dfrac{3}{(-\\sqrt{5})^n}$<br>Exprimer $U_{2p}$ et $U_{2p+1}$ en fonction de $n$.<br>Calculer $\\lim_{p\\to+\\infty} U_{2p}$ et $\\lim_{p\\to+\\infty} U_{2p+1}$.<br>En déduire $\\lim_{n\\to+\\infty} \\left(2 + \\dfrac{3}{(-\\sqrt{5})^n}\\right)$",
                    reponse: "$U_{2p} = 2 + \\dfrac{3}{\\sqrt{5}^{2p}}$<br>$U_{2p+1} = 2 - \\dfrac{3}{\\sqrt{5}^{2p+1}}$<br><br>$\\lim_{p\\to+\\infty} U_{2p} = 2$<br>$\\lim_{p\\to+\\infty} U_{2p+1} = 2$<br><br>Donc <strong>$\\lim_{n\\to+\\infty} U_n = 2$</strong><br><br><strong>Remarque :</strong><br>$\\lim_{n\\to+\\infty} U_n = a \\Leftrightarrow \\begin{cases} \\lim_{p\\to+\\infty} U_{2p} = a \\\\ \\lim_{p\\to+\\infty} U_{2p+1} = a \\end{cases}$"
                },
                // 28. Suites adjacentes
                { 
                    question: "Montrer que les suites $U$ et $V$ sont adjacentes.",
                    reponse: "On a :<br>$U$ est <strong>croissante</strong><br>$V$ est <strong>décroissante</strong><br>$U_n < V_n$<br>$\\lim_{n\\to+\\infty} (V_n-U_n) = 0$<br><br>Donc $U$ et $V$ sont <strong>adjacentes</strong> et $\\lim U_n = \\lim V_n$."
                },
                // 29. Exemple de suites adjacentes
                { 
                    question: "Montrer que les suites définies par :<br>$U_n = 1 - \\dfrac{1}{n}$ et $V_n = 1 + \\dfrac{1}{n}$ sont adjacentes.",
                    reponse: "$U_{n+1} - U_n = \\dfrac{1}{n} - \\dfrac{1}{n+1} = \\dfrac{1}{n(n+1)} > 0$ ⇒ $U$ croissante<br><br>$V_{n+1} - V_n = \\dfrac{1}{n+1} - \\dfrac{1}{n} = -\\dfrac{1}{n(n+1)} < 0$ ⇒ $V$ décroissante<br><br>$U_n < V_n$ (car $1-\\frac{1}{n} < 1+\\frac{1}{n}$)<br><br>$\\lim_{n\\to+\\infty} (V_n-U_n) = \\lim_{n\\to+\\infty} \\dfrac{2}{n} = 0$<br><br>Donc $U$ et $V$ sont <strong>adjacentes</strong>."
                },
                // 30. Limite de f^{-1}(U_n)
                { 
                    question: "$(U_n)$ est une suite convergente vers $\\ell$ et $V_n = f^{-1}(U_n)$.<br>Calculer $\\lim_{n\\to+\\infty} V_n$",
                    reponse: "$\\lim_{n\\to+\\infty} U_n = \\ell$ et $f^{-1}$ continue en $\\ell$<br>Donc $\\lim_{n\\to+\\infty} V_n = \\lim_{n\\to+\\infty} f^{-1}(U_n) = f^{-1}(\\ell)$"
                },
                // 31. Limite de U_n = ∫ 1/(1+x^n) dx
                { 
                    question: "Soit $U_n = \\displaystyle\\int_0^1 \\dfrac{dx}{1+x^n}$<br>1. Montrer que $1-U_n = \\displaystyle\\int_0^1 \\dfrac{x^n}{1+x^n} dx$<br>2. En déduire que $\\lim_{n\\to+\\infty} U_n = 1$",
                    reponse: "<strong>1.</strong> $\\displaystyle\\int_0^1 \\dfrac{x^n}{1+x^n} dx = \\int_0^1 \\dfrac{1+x^n-1}{1+x^n} dx$<br>$= \\int_0^1 1\\,dx - \\int_0^1 \\dfrac{1}{1+x^n} dx = 1 - U_n$<br><br><strong>2.</strong> $1+x^n > 1$ ⇒ $0 < \\dfrac{1}{1+x^n} < 1$ ⇒ $0 < \\dfrac{x^n}{1+x^n} < x^n$<br>$0 < 1-U_n < \\dfrac{1}{n+1}$<br>$1 - \\dfrac{1}{n+1} < U_n < 1$<br>$\\lim_{n\\to+\\infty} \\left(1-\\dfrac{1}{n+1}\\right) = 1$<br>Donc <strong>$\\lim_{n\\to+\\infty} U_n = 1$</strong>"
                },
                // 32. Aire avec ln (interprétation)
                { 
                    question: "$\\forall x\\in]0,+\\infty[, f(x)=\\dfrac{1}{2}x^2(3-2\\ln x)$<br>Soit $a_n$ l'aire de la partie du plan limitée par la courbe de $f$, l'axe des abscisses, et les droites $x=\\dfrac{1}{n}$ et $x=1$.<br>Exprimer $a_n$ et calculer $\\lim_{n\\to+\\infty} a_n$. Interpréter.",
                    reponse: "$a_n = \\displaystyle\\int_{1/n}^1 f(x)dx = \\lim_{n\\to+\\infty} a_n = \\dots$<br>Interprétation : l'aire totale sous la courbe de $f$ sur $]0,1]$."
                }
            ]
        }
    };

    console.log("Aide-mémoire chargée avec succès.");
})();