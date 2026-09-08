// data/problemes/part4.js – Problème 4
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 4,
        titre: "Problème 4 – Fonction logarithme, réciproque et aire",
        enonce: `
            <h4>I – Étude d'une fonction auxiliaire</h4>
            <p>Soit $g$ la fonction définie sur $]0, +\\infty[$ par : $g(x) = x + (x-2)\\ln x$.</p>
            <ol>
                <li>
                    <strong>a</strong> – Montrer que $g'(x) = 2\\left(\\frac{x-1}{x}\\right) + \\ln x$.<br>
                    <small>(On note que l'énoncé indique $2 \\cdot \\frac{x-1}{x} + \\ln x$, qui est équivalent à $2 - \\frac{2}{x} + \\ln x$.)</small>
                </li>
                <li>
                    <strong>b</strong> – En déduire que :
                    <ul>
                        <li>si $x > 1$ alors $g'(x) > 0$</li>
                        <li>si $0 < x < 1$ alors $g'(x) < 0$</li>
                    </ul>
                </li>
                <li>
                    <strong>a</strong> – Étudier les variations de $g$.<br>
                    <strong>b</strong> – En déduire que, pour tout réel $x > 0$, on a $g(x) \\ge 1$.
                </li>
            </ol>

            <h4>II – Étude de la fonction $f$ et de sa réciproque</h4>
            <p>Soit $f$ la fonction définie sur $]0, +\\infty[$ par : $f(x) = 1 + x\\ln x - (\\ln x)^2$.</p>
            <ol>
                <li>
                    <strong>a</strong> – Vérifier que $f'(x) = \\dfrac{g(x)}{x}$ et étudier les variations de $f$.<br>
                    <strong>b</strong> – En déduire que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on précisera.
                </li>
                <li>
                    Soit $(\\mathcal{C})$ la courbe représentative de $f$ (unité : 2 cm).<br>
                    <strong>a</strong> – Écrire une équation cartésienne de la tangente $(T)$ à $(\\mathcal{C})$ au point d'abscisse $1$.<br>
                    <strong>b</strong> – Étudier le sens de variation de la fonction $h$ définie sur $]0, +\\infty[$ par $h(x) = x - 1 - \\ln x$. En déduire le signe de $h(x)$.<br>
                    <strong>c</strong> – Montrer que $f(x) - x = (\\ln x - 1)h(x)$ et en déduire la position de $(\\mathcal{C})$ par rapport à sa tangente $(T)$.
                </li>
                <li>
                    <strong>a</strong> – Tracer la courbe $(\\mathcal{C})$.<br>
                    <strong>b</strong> – Tracer, dans le même repère, la courbe $(\\mathcal{C}')$ représentative de $f^{-1}$.
                </li>
                <li>
                    <strong>a</strong> – Calculer les intégrales : $I_1 = \\displaystyle\\int_1^e x\\ln x\\,dx$ et $I_2 = \\displaystyle\\int_1^e (\\ln x)^2\\,dx$.<br>
                    <strong>b</strong> – On désigne par $\\mathcal{A}$ l'aire en cm² de la partie du plan limitée par les courbes $(\\mathcal{C})$ et $(\\mathcal{C}')$. Calculer à $10^{-3}$ près la valeur de $\\mathcal{A}$.
                </li>
            </ol>

            <div class="graph-container" id="graph-probleme4" data-fn="1 + x*log(x) - (log(x))^2; x" data-xmin="0" data-xmax="4" data-colors="#2563eb,#dc2626" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu) et tangente $y=x$ (rouge).</em></p>
        `,
        questions: [
            {
                id: 'p4q1a',
                texte: "I.1.a – Dérivée de g.",
                solution: `
                    <p>$g(x) = x + (x-2)\\ln x$.</p>
                    <p>$g'(x) = 1 + \\ln x + (x-2)\\cdot\\frac{1}{x} = 1 + \\ln x + 1 - \\frac{2}{x} = 2 - \\frac{2}{x} + \\ln x$.</p>
                    <p>Soit $g'(x) = 2\\left(\\frac{x-1}{x}\\right) + \\ln x$.</p>
                `
            },
            {
                id: 'p4q1b',
                texte: "I.1.b – Signe de g'.",
                solution: `
                    <p>Soit $\\phi(x) = 2\\frac{x-1}{x} + \\ln x$.</p>
                    <ul>
                        <li>Pour $x > 1$ : $\\ln x > 0$ et $\\frac{x-1}{x} > 0$, donc $g'(x) > 0$.</li>
                        <li>Pour $0 < x < 1$ : $\\ln x < 0$ et $\\frac{x-1}{x} < 0$, donc $g'(x) < 0$.</li>
                    </ul>
                `
            },
            {
                id: 'p4q2a',
                texte: "I.2.a – Variations de g.",
                solution: `
                    <p>D'après I.1.b :</p>
                    <ul>
                        <li>$g$ est strictement décroissante sur $]0,1[$.</li>
                        <li>$g$ est strictement croissante sur $]1,+\\infty[$.</li>
                        <li>En $x=1$, $g$ admet un <strong>minimum</strong>.</li>
                    </ul>
                    <p>Calcul du minimum : $g(1) = 1 + (1-2)\\ln 1 = 1$.</p>
                `
            },
            {
                id: 'p4q2b',
                texte: "I.2.b – g(x) ≥ 1.",
                solution: `
                    <p>Le minimum de $g$ sur $]0,+\\infty[$ est $g(1)=1$.</p>
                    <p>Donc <strong>$g(x) \\ge 1$ pour tout $x>0$</strong>.</p>
                `
            },
            {
                id: 'p4q3a',
                texte: "II.1.a – Dérivée de f et variations.",
                solution: `
                    <p>$f(x) = 1 + x\\ln x - (\\ln x)^2$.</p>
                    <p>$f'(x) = \\ln x + 1 - 2\\ln x \\cdot \\frac{1}{x} = \\ln x + 1 - \\frac{2\\ln x}{x}$.</p>
                    <p>Mettons au même dénominateur : $f'(x) = \\frac{x + x\\ln x - 2\\ln x}{x} = \\frac{x + (x-2)\\ln x}{x} = \\frac{g(x)}{x}$.</p>
                    <p>Comme $g(x) \\ge 1 > 0$ et $x>0$, $f'(x) > 0$ pour tout $x>0$.</p>
                    <p>Donc $f$ est <strong>strictement croissante</strong> sur $]0,+\\infty[$.</p>
                    <p>Limites :</p>
                    <ul>
                        <li>$\\lim_{x\\to0^+} f(x) = -\\infty$ (car $x\\ln x \\to 0$ et $(\\ln x)^2 \\to +\\infty$).</li>
                        <li>$\\lim_{x\\to+\\infty} f(x) = +\\infty$ (car $x\\ln x$ domine).</li>
                    </ul>
                `
            },
            {
                id: 'p4q3b',
                texte: "II.1.b – Fonction réciproque.",
                solution: `
                    <p>$f$ est continue et strictement croissante sur $]0,+\\infty[$.</p>
                    <p>Donc $f$ réalise une bijection de $]0,+\\infty[$ sur $J = f(]0,+\\infty[)$.</p>
                    <p>D'après les limites : $J = \\mathbb{R}$.</p>
                    <p>Donc $f$ admet une fonction réciproque $f^{-1}$ définie sur <strong>$\\mathbb{R}$</strong>.</p>
                `
            },
            {
                id: 'p4q4a',
                texte: "II.2.a – Tangente en x=1.",
                solution: `
                    <p>$f(1) = 1 + 1\\cdot\\ln 1 - (\\ln 1)^2 = 1$.</p>
                    <p>$f'(1) = \\frac{g(1)}{1} = 1$.</p>
                    <p>L'équation de la tangente $(T)$ à $(\\mathcal{C})$ au point d'abscisse $1$ est :</p>
                    $$ y = f(1) + f'(1)(x-1) = 1 + 1\\cdot(x-1) = x $$
                    <p>Donc $(T) : y = x$.</p>
                `
            },
            {
                id: 'p4q4b',
                texte: "II.2.b – Signe de h.",
                solution: `
                    <p>$h(x) = x - 1 - \\ln x$.</p>
                    <p>$h'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}$.</p>
                    <ul>
                        <li>Pour $0 < x < 1$ : $h'(x) < 0$ ⇒ $h$ décroissante.</li>
                        <li>Pour $x > 1$ : $h'(x) > 0$ ⇒ $h$ croissante.</li>
                        <li>En $x=1$, $h$ admet un minimum : $h(1)=1-1-\\ln 1=0$.</li>
                    </ul>
                    <p>Donc $h(x) \\ge 0$ pour tout $x>0$, avec égalité seulement en $x=1$.</p>
                `
            },
            {
                id: 'p4q4c',
                texte: "II.2.c – Position de C par rapport à T.",
                solution: `
                    <p>On a $f(x) - x = 1 + x\\ln x - (\\ln x)^2 - x$.</p>
                    <p>$f(x) - x = (\\ln x - 1)(x - 1 - \\ln x) = (\\ln x - 1)h(x)$.</p>
                    <p>Comme $h(x) \\ge 0$, le signe de $f(x)-x$ est celui de $\\ln x - 1$.</p>
                    <ul>
                        <li>Si $0 < x < e$ : $\\ln x < 1$ ⇒ $f(x) < x$ (courbe en dessous de $T$).</li>
                        <li>Si $x = e$ : $\\ln e = 1$ ⇒ $f(e)=e$ (point d'intersection).</li>
                        <li>Si $x > e$ : $\\ln x > 1$ ⇒ $f(x) > x$ (courbe au dessus de $T$).</li>
                    </ul>
                `
            },
            {
                id: 'p4q5a',
                texte: "II.3.a – Tracer les courbes.",
                solution: `
                    <p>La courbe $(\\mathcal{C})$ est strictement croissante, avec une tangente $T:y=x$ en $x=1$.</p>
                    <p>$(\\mathcal{C}')$ est la symétrique de $(\\mathcal{C})$ par rapport à $y=x$.</p>
                    <p>Les deux courbes se coupent aux points où $f(x)=x$, c'est-à-dire en $x=1$ et $x=e$ (car $\\ln x -1=0$).</p>
                    <p>Les points d'intersection sont donc $(1,1)$ et $(e,e)$.</p>
                `
            },
            {
                id: 'p4q5b',
                texte: "II.3.b – Tracer C' (réciproque).",
                solution: `
                    <p>$(\\mathcal{C}')$ est la courbe de $f^{-1}$. Elle se trace par symétrie de $(\\mathcal{C})$ par rapport à $y=x$.</p>
                    <p>Elle passe par les points $(1,1)$ et $(e,e)$.</p>
                `
            },
            {
                id: 'p4q6a',
                texte: "II.4.a – Calcul des intégrales.",
                solution: `
                    <p><strong>I₁ = $\\int_1^e x\\ln x\\,dx$</strong></p>
                    <p>Intégration par parties : $u=\\ln x$, $dv=x\\,dx$ ⇒ $du=\\frac{dx}{x}$, $v=\\frac{x^2}{2}$.</p>
                    $$ I_1 = \\left[\\frac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\frac{x^2}{2}\\cdot\\frac{dx}{x} = \\frac{e^2}{2} - \\frac{1}{2}\\int_1^e x\\,dx = \\frac{e^2}{2} - \\frac{1}{2}\\left[\\frac{x^2}{2}\\right]_1^e = \\frac{e^2}{2} - \\frac{1}{2}\\left(\\frac{e^2-1}{2}\\right) = \\frac{e^2}{2} - \\frac{e^2-1}{4} = \\frac{2e^2 - e^2 + 1}{4} = \\frac{e^2+1}{4} $$

                    <p><strong>I₂ = $\\int_1^e (\\ln x)^2\\,dx$</strong></p>
                    <p>Intégration par parties : $u=(\\ln x)^2$, $dv=dx$ ⇒ $du=2\\ln x\\cdot\\frac{dx}{x}$, $v=x$.</p>
                    $$ I_2 = \\left[x(\\ln x)^2\\right]_1^e - \\int_1^e x\\cdot\\frac{2\\ln x}{x}\\,dx = e - 2\\int_1^e \\ln x\\,dx $$
                    <p>Or $\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e = (e - e) - (0 - 1) = 1$.</p>
                    <p>Donc $I_2 = e - 2$.</p>
                `
            },
            {
                id: 'p4q6b',
                texte: "II.4.b – Aire entre C et C'.",
                solution: `
                    <p>Les courbes $(\\mathcal{C})$ et $(\\mathcal{C}')$ sont symétriques par rapport à $y=x$.</p>
                    <p>L'aire entre les deux courbes est le double de l'aire entre $(\\mathcal{C})$ et la droite $y=x$ (car $(\\mathcal{C}')$ est le symétrique de $(\\mathcal{C})$).</p>
                    <p>Les points d'intersection sont $x=1$ et $x=e$.</p>
                    <p>Sur $[1,e]$, $f(x) \\le x$ (courbe en dessous de $T$), donc l'aire est :</p>
                    $$ \\mathcal{A}_{u.a.} = 2\\int_1^e (x - f(x))\\,dx = -2\\int_1^e (f(x)-x)\\,dx $$
                    <p>On a $f(x)-x = x\\ln x - (\\ln x)^2 - x + 1$.</p>
                    <p>Donc $x - f(x) = x - 1 - x\\ln x + (\\ln x)^2$.</p>
                    <p>En intégrant :</p>
                    $$ \\int_1^e (x - f(x))\\,dx = \\int_1^e (x-1)\\,dx - I_1 + I_2 $$
                    <p>Calculons $\\int_1^e (x-1)\\,dx = \\left[\\frac{x^2}{2} - x\\right]_1^e = \\left(\\frac{e^2}{2} - e\\right) - \\left(\\frac{1}{2} - 1\\right) = \\frac{e^2}{2} - e + \\frac{1}{2}$.</p>
                    <p>Donc :</p>
                    $$ \\int_1^e (x - f(x))\\,dx = \\left(\\frac{e^2}{2} - e + \\frac{1}{2}\\right) - \\frac{e^2+1}{4} + (e-2) $$
                    $$ = \\frac{e^2}{2} - e + \\frac{1}{2} - \\frac{e^2+1}{4} + e - 2 = \\frac{e^2}{2} - \\frac{e^2}{4} - \\frac{1}{4} + \\frac{1}{2} - 2 + e - e $$
                    $$ = \\frac{e^2}{4} + \\left(-\\frac{1}{4} + \\frac{1}{2} - 2\\right) = \\frac{e^2}{4} + \\left(-\\frac{1}{4} + \\frac{2}{4} - \\frac{8}{4}\\right) = \\frac{e^2}{4} - \\frac{7}{4} = \\frac{e^2 - 7}{4} $$
                    <p>Donc $\\mathcal{A}_{u.a.} = 2 \\times \\frac{e^2 - 7}{4} = \\frac{e^2 - 7}{2}$.</p>
                    <p>En cm² (1 u.a. = 4 cm²) :</p>
                    $$ \\mathcal{A} = 4 \\times \\frac{e^2 - 7}{2} = 2(e^2 - 7) \\approx 2(7.389 - 7) = 0.778 \\text{ cm}^2 $$
                    <p><strong>Donc $\\mathcal{A} \\approx 0.778$ cm².</strong></p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>La fonction auxiliaire $g$ permet d'étudier le signe de $f'$.</li>
                <li>Pour l'aire entre $\\mathcal{C}$ et $\\mathcal{C}'$, utiliser la symétrie par rapport à $y=x$.</li>
                <li>Les intégrales $\\int x\\ln x\\,dx$ et $\\int (\\ln x)^2\\,dx$ s'obtiennent par intégration par parties.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Se tromper dans le signe de $f(x)-x$ sur $[1,e]$.</li>
                <li>Oublier le facteur 2 dans l'aire entre une courbe et sa réciproque.</li>
                <li>Oublier la conversion u.a. → cm² (facteur 4).</li>
            </ul>
        `
    });

    console.log("✅ Problème 4 chargé.");
})();