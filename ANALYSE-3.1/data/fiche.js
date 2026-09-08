// data/fiche.js – Fiches Analyse (synthèse des formules)
// Extrait de "fiche analyse 4ième année.pdf"
(function() {
    if (typeof data === 'undefined') {
        window.data = { chapitres: [] };
    }

    // Ajouter les fiches à un objet global accessible par script.js
    window.fiches = {
        // ===== 1. DÉRIVÉES DES FONCTIONS USUELLES =====
        derivees: {
            titre: "📐 Dérivées des fonctions usuelles",
            contenu: [
                { f: "$k$ (constante)", df: "$0$" },
                { f: "$x$", df: "$1$" },
                { f: "$x^2$", df: "$2x$" },
                { f: "$x^3$", df: "$3x^2$" },
                { f: "$x^n$ ($n\\in\\mathbb{N}^*$)", df: "$nx^{n-1}$" },
                { f: "$\\dfrac{1}{x}$", df: "$-\\dfrac{1}{x^2}$" },
                { f: "$\\dfrac{1}{x^2}$", df: "$-\\dfrac{2}{x^3}$" },
                { f: "$\\dfrac{1}{x^n}$ ($n\\in\\mathbb{N}^*$)", df: "$-\\dfrac{n}{x^{n+1}}$" },
                { f: "$\\sqrt{x}$", df: "$\\dfrac{1}{2\\sqrt{x}}$" },
                { f: "$\\sqrt[n]{x}$ ($n\\ge2$)", df: "$\\dfrac{1}{n\\sqrt[n]{x^{n-1}}}$" },
                { f: "$\\ln x$", df: "$\\dfrac{1}{x}$" },
                { f: "$e^x$", df: "$e^x$" },
                { f: "$\\sin x$", df: "$\\cos x$" },
                { f: "$\\cos x$", df: "$-\\sin x$" },
                { f: "$\\tan x$", df: "$1+\\tan^2 x = \\dfrac{1}{\\cos^2 x}$" }
            ]
        },
        // ===== 2. OPÉRATIONS SUR LES DÉRIVÉES =====
        operationsDerivees: {
            titre: "🔧 Opérations sur les dérivées",
            contenu: [
                { forme: "$f+g$", derivee: "$f'+g'$" },
                { forme: "$f-g$", derivee: "$f'-g'$" },
                { forme: "$\\alpha f$ ($\\alpha\\in\\mathbb{R}$)", derivee: "$\\alpha f'$" },
                { forme: "$fg$", derivee: "$f'g+fg'$" },
                { forme: "$\\dfrac{1}{f}$", derivee: "$-\\dfrac{f'}{f^2}$" },
                { forme: "$\\dfrac{f}{g}$", derivee: "$\\dfrac{f'g-fg'}{g^2}$" },
                { forme: "$f^n$ ($n\\in\\mathbb{N}^*$)", derivee: "$n f' f^{n-1}$" },
                { forme: "$\\dfrac{1}{f^n}$ ($n\\in\\mathbb{N}^*$)", derivee: "$-\\dfrac{n f'}{f^{n+1}}$" },
                { forme: "$\\sqrt{f}$", derivee: "$\\dfrac{f'}{2\\sqrt{f}}$" },
                { forme: "$\\sqrt[n]{f}$ ($n\\ge2$)", derivee: "$\\dfrac{f'}{n\\sqrt[n]{f^{n-1}}}$" },
                { forme: "$f\\circ g$", derivee: "$g' \\times f'\\circ g$" },
                { forme: "$\\ln f$", derivee: "$\\dfrac{f'}{f}$" },
                { forme: "$e^f$", derivee: "$f' e^f$" },
                { forme: "$f^{-1}$ (réciproque)", derivee: "$\\dfrac{1}{f'\\circ f^{-1}}$" }
            ]
        },
        // ===== 3. PRIMITIVES =====
        primitives: {
            titre: "📦 Primitives des fonctions usuelles",
            contenu: [
                { f: "$a$ (constante)", F: "$ax + C$" },
                { f: "$1$", F: "$x + C$" },
                { f: "$x$", F: "$\\dfrac{x^2}{2} + C$" },
                { f: "$x^2$", F: "$\\dfrac{x^3}{3} + C$" },
                { f: "$x^n$ ($n\\in\\mathbb{N}^*$)", F: "$\\dfrac{x^{n+1}}{n+1} + C$" },
                { f: "$\\dfrac{1}{x}$", F: "$\\ln|x| + C$" },
                { f: "$\\dfrac{1}{x^2}$", F: "$-\\dfrac{1}{x} + C$" },
                { f: "$\\dfrac{1}{x^n}$ ($n\\in\\mathbb{N}^*$)", F: "$-\\dfrac{1}{(n-1)x^{n-1}} + C$" },
                { f: "$\\sqrt{x}$", F: "$\\dfrac{2}{3}x\\sqrt{x} + C$" },
                { f: "$\\dfrac{1}{\\sqrt{x}}$", F: "$2\\sqrt{x} + C$" },
                { f: "$\\sin x$", F: "$-\\cos x + C$" },
                { f: "$\\cos x$", F: "$\\sin x + C$" },
                { f: "$\\sin(\\omega x+\\varphi)$", F: "$-\\dfrac{1}{\\omega}\\cos(\\omega x+\\varphi) + C$" },
                { f: "$\\cos(\\omega x+\\varphi)$", F: "$\\dfrac{1}{\\omega}\\sin(\\omega x+\\varphi) + C$" },
                { f: "$1+\\tan^2 x$", F: "$\\tan x + C$" },
                { f: "$\\ln x$", F: "$x\\ln x - x + C$" },
                { f: "$e^x$", F: "$e^x + C$" }
            ]
        },
        // ===== 4. OPÉRATIONS SUR LES PRIMITIVES =====
        operationsPrimitives: {
            titre: "🔧 Opérations sur les primitives",
            contenu: [
                { forme: "$f+g$", primitive: "$F+G$" },
                { forme: "$\\alpha f$", primitive: "$\\alpha F$" },
                { forme: "$f'g+fg'$", primitive: "$fg$" },
                { forme: "$f'f$", primitive: "$\\dfrac{1}{2}f^2$" },
                { forme: "$f'f^n$", primitive: "$\\dfrac{f^{n+1}}{n+1}$" },
                { forme: "$\\dfrac{f'g-fg'}{g^2}$", primitive: "$\\dfrac{f}{g}$" },
                { forme: "$\\dfrac{f'}{f^2}$", primitive: "$-\\dfrac{1}{f}$" },
                { forme: "$\\dfrac{f'}{\\sqrt{f}}$", primitive: "$2\\sqrt{f}$" },
                { forme: "$f'\\sqrt{f}$", primitive: "$\\dfrac{2}{3}f\\sqrt{f}$" },
                { forme: "$\\dfrac{f'}{f}$", primitive: "$\\ln|f|$" },
                { forme: "$f'e^f$", primitive: "$e^f$" }
            ]
        },
        // ===== 5. LIMITES USUELLES =====
        limites: {
            titre: "📈 Limites usuelles",
            sections: [
                {
                    sousTitre: "Logarithme népérien",
                    formules: [
                        "$\\lim_{x\\to0^+} \\ln x = -\\infty$",
                        "$\\lim_{x\\to+\\infty} \\ln x = +\\infty$",
                        "$\\lim_{x\\to0^+} x\\ln x = 0$",
                        "$\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0$",
                        "$\\lim_{x\\to1} \\dfrac{\\ln x}{x-1} = 1$",
                        "$\\lim_{x\\to0} \\dfrac{\\ln(1+x)}{x} = 1$",
                        "$\\lim_{x\\to0^+} x^n\\ln x = 0 \\quad (n\\in\\mathbb{N}^*)$",
                        "$\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x^n} = 0 \\quad (n\\in\\mathbb{N}^*)$"
                    ]
                },
                {
                    sousTitre: "Exponentielle",
                    formules: [
                        "$\\lim_{x\\to-\\infty} e^x = 0$",
                        "$\\lim_{x\\to+\\infty} e^x = +\\infty$",
                        "$\\lim_{x\\to-\\infty} x e^x = 0$",
                        "$\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty \\quad (n\\in\\mathbb{N}^*)$",
                        "$\\lim_{x\\to0} \\dfrac{e^x-1}{x} = 1$",
                        "$\\lim_{x\\to-\\infty} x^n e^x = 0 \\quad (n\\in\\mathbb{N}^*)$"
                    ]
                }
            ]
        },
        // ===== 6. THÉORÈMES =====
        theoremes: {
            titre: "🧠 Théorèmes importants",
            contenu: [
                {
                    titre: "Théorème des accroissements finis",
                    enonce: "Si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c\\in]a,b[$ tel que :",
                    formule: "$f'(c) = \\dfrac{f(b)-f(a)}{b-a}$",
                    interpretation: "La tangente à la courbe de $f$ au point d'abscisse $c$ est alors parallèle à la droite $(AB)$ avec $A(a,f(a))$ et $B(b,f(b))$."
                },
                {
                    titre: "Théorème de Rolle",
                    enonce: "Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que :",
                    formule: "$f'(c)=0$",
                    interpretation: "La tangente à la courbe de $f$ au point d'abscisse $c$ est alors parallèle à l'axe des abscisses."
                },
                {
                    titre: "Inégalité des accroissements finis",
                    enonce: "Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et il existe $m,M$ tels que $m \\le f'(x) \\le M$, alors :",
                    formule: "$m(b-a) \\le f(b)-f(a) \\le M(b-a)$"
                },
                {
                    titre: "Théorème des valeurs intermédiaires (TVI)",
                    enonce: "Si $f$ est continue sur $[a,b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x)=k$ admet au moins une solution dans $[a,b]$.",
                    corollaire: "Si $f(a)\\cdot f(b)<0$, alors $f(x)=0$ admet au moins une solution dans $]a,b[$."
                },
                {
                    titre: "Théorème de la bijection",
                    enonce: "Si $f$ est strictement monotone sur $I$, alors $f$ réalise une bijection de $I$ sur $f(I)$.",
                    remarque: "Les courbes d'une fonction et de sa fonction réciproque sont symétriques par rapport à la droite $y=x$."
                }
            ]
        },
        // ===== 7. SUITES =====
        suites: {
            titre: "📊 Suites arithmétiques et géométriques",
            contenu: [
                { type: "Définition", arith: "$u_{n+1} = u_n + r$", geo: "$u_{n+1} = u_n \\times q$" },
                { type: "Terme général", arith: "$u_n = u_0 + nr$", geo: "$u_n = u_0 \\times q^n$" },
                { type: "Somme", arith: "$S = N \\times \\dfrac{a+b}{2}$", geo: "$S = a \\times \\dfrac{1-q^N}{1-q}$ $(q\\neq1)$" }
            ],
            remarque: "où $a$ est le premier terme, $b$ le dernier terme, $N$ le nombre de termes."
        },
        // ===== 8. SIGNALÉTIQUE =====
        signe: {
            titre: "🔴 Signe de $ax^2+bx+c$",
            contenu: [
                { condition: "$\\Delta < 0$", resultat: "$ax^2+bx+c$ est du signe de $a$ pour tout $x\\in\\mathbb{R}$." },
                { condition: "$\\Delta = 0$", resultat: "$ax^2+bx+c = a(x-x_0)^2$ avec $x_0 = -\\dfrac{b}{2a}$. Du signe de $a$." },
                { condition: "$\\Delta > 0$", resultat: "$ax^2+bx+c = a(x-x_1)(x-x_2)$ avec $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$, $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$." }
            ]
        },
        // ===== 9. TRACÉ D'UNE DROITE =====
        traceDroite: {
            titre: "✏️ Tracé d'une droite",
            etapes: [
                "Choisir deux abscisses $x_1$ et $x_2$.",
                "Calculer les ordonnées $y_1$ et $y_2$ en remplaçant $x$ dans l'équation de la droite.",
                "Placer les points $M_1(x_1,y_1)$ et $M_2(x_2,y_2)$.",
                "Tracer la droite passant par ces deux points."
            ]
        },
        // ===== 10. CONVERGENCE DES SUITES =====
        convergence: {
            titre: "🎯 Convergence des suites",
            regles: [
                "Toute suite croissante et majorée converge.",
                "Toute suite décroissante et minorée converge.",
                "Pour étudier la monotonie, étudier le signe de $u_{n+1} - u_n$.",
                "Pour une suite récurrente $u_{n+1} = f(u_n)$, si $(u_n)$ converge vers $\\ell$ et $f$ continue, alors $\\ell = f(\\ell)$."
            ]
        }
    };

    console.log("Fiches Analyse chargées avec succès.");
})();