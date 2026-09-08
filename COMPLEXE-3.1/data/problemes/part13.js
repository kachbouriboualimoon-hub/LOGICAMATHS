// data/problemes/part13.js – Problème 14 : Équation complexe, cercle, tangente et médiatrice (Page 12 du PDF)
// ============================================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 14,
    titre: "Équation complexe, cercle, tangente et médiatrice",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
  <p>Soient $z_A = 1$, $z_B = e^{i\\pi/4}$, $z_C = 2e^{i\\pi/4} - i$.</p>
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="probleme14_cercle" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $\\zeta$ de centre O et rayon 1, point B, tangente T, médiatrice de [AC].
            </figcaption>
        </figure>

        <ol>
            <li><strong>1.a</strong> – Vérifier que 1 est une solution de l’équation $(E)$ : $e^{i\\pi/4}z^2 - (i + e^{i\\pi/4})z + i = 0$.</li>
            <li><strong>1.b</strong> – En déduire l’autre solution de $(E)$ et la mettre sous forme exponentielle.</li>
            <li><strong>2.a</strong> – Écrire $1+i$ sous forme exponentielle.</li>
            <li><strong>2.b</strong> – Vérifier que $z_C - z_A = (2 - \\sqrt{2})z_B$. En déduire que les droites $(AC)$ et $(OB)$ sont parallèles.</li>
            <li><strong>3.a</strong> – Montrer que $i(z_B - z_C) = \\overline{z_B - z_A}$.</li>
            <li><strong>3.b</strong> – En déduire que le triangle ABC est isocèle en B.</li>
            <li><strong>4.a</strong> – Vérifier que le point B appartient au cercle $\\zeta$ de centre O et de rayon 1. Construire le point B.</li>
            <li><strong>4.b</strong> – Soit T la tangente à $\\zeta$ en B. Montrer que T est la médiatrice du segment $[AC]$.</li>
            <li><strong>4.c</strong> – Construire alors sur la figure le point C.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Racine connue :</strong> Pour trouver l’autre racine d’un trinôme dont on connaît une racine $z_1$, on utilise le produit des racines $z_1 z_2 = c/a$.</li>
            <li><strong>Forme exponentielle :</strong> $1+i = \\sqrt{2} e^{i\\pi/4}$.</li>
            <li><strong>Parallélisme :</strong> $(AC) \\parallel (OB) \\iff \\dfrac{z_C - z_A}{z_B - 0} \\in \\mathbb{R}$.</li>
            <li><strong>Isocèle en B :</strong> $BA = BC \\iff |z_A - z_B| = |z_C - z_B|$.</li>
            <li><strong>Médiatrice :</strong> Une droite est médiatrice de $[AC]$ si elle est perpendiculaire à $(AC)$ et passe par le milieu de $[AC]$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Dans 1.b, oublier de simplifier l’exponentielle de l’autre solution.</li>
            <li>Pour 2.b, ne pas reconnaître que $2-\\sqrt{2}$ est un réel, donc le parallélisme.</li>
            <li>Dans 3.a, confondre le conjugué avec l’opposé.</li>
            <li>Pour 4.b, ne pas montrer à la fois la perpendicularité et le passage par le milieu.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob14-q1a',
            texte: '1.a – Vérifier que 1 est une solution de $(E)$.',
            solution: `
                <p>On remplace $z$ par 1 dans l’équation :</p>
                $$e^{i\\pi/4}\\cdot 1^2 - (i+e^{i\\pi/4})\\cdot 1 + i = e^{i\\pi/4} - i - e^{i\\pi/4} + i = 0.$$
                <p>Donc $z=1$ est bien une solution.</p>
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob14-q1b',
            texte: '1.b – En déduire l’autre solution et la mettre sous forme exponentielle.',
            solution: `
                <p>L’équation est de la forme $az^2+bz+c=0$ avec $a = e^{i\\pi/4}$, $c = i$. Soit $z_1=1$ et $z_2$ l’autre solution.</p>
                <p>Le produit des racines vaut $z_1 z_2 = \\dfrac{c}{a} = \\dfrac{i}{e^{i\\pi/4}} = i\\,e^{-i\\pi/4}$.</p>
                <p>On a $i = e^{i\\pi/2}$, donc $z_2 = e^{i\\pi/2} e^{-i\\pi/4} = e^{i(\\pi/2 - \\pi/4)} = e^{i\\pi/4}$.</p>
                $$\\boxed{z_2 = e^{i\\pi/4}}$$
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob14-q2a',
            texte: '2.a – Écrire $1+i$ sous forme exponentielle.',
            solution: `
                $$1+i = \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}} + i\\frac{1}{\\sqrt{2}}\\right) = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right) = \\sqrt{2}\\,e^{i\\pi/4}.$$
                $$\\boxed{1+i = \\sqrt{2}\\,e^{i\\pi/4}}$$
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob14-q2b',
            texte: '2.b – Vérifier que $z_C - z_A = (2-\\sqrt{2})z_B$. En déduire que $(AC) \\parallel (OB)$.',
            solution: `
                <p>On a $z_A = 1$, $z_B = e^{i\\pi/4}$, $z_C = 2e^{i\\pi/4} - i$.</p>
                $$z_C - z_A = 2e^{i\\pi/4} - i - 1 = 2e^{i\\pi/4} - (1+i).$$
                <p>D’après 2.a, $1+i = \\sqrt{2}\\,e^{i\\pi/4}$. Donc :</p>
                $$z_C - z_A = 2e^{i\\pi/4} - \\sqrt{2}\\,e^{i\\pi/4} = (2-\\sqrt{2})e^{i\\pi/4} = (2-\\sqrt{2})z_B.$$
                <p>Le facteur $(2-\\sqrt{2})$ est un réel non nul. Donc $\\overrightarrow{AC}$ est colinéaire à $\\overrightarrow{OB}$ (d’affixe $z_B$). Ainsi $(AC) \\parallel (OB)$.</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob14-q3a',
            texte: '3.a – Montrer que $i(z_B - z_C) = \\overline{z_B - z_A}$.',
            solution: `
                <p>Calculons $z_B - z_C = e^{i\\pi/4} - (2e^{i\\pi/4} - i) = -e^{i\\pi/4} + i$.</p>
                <p>Multiplions par $i$ : $i(z_B - z_C) = i(-e^{i\\pi/4} + i) = -i e^{i\\pi/4} + i^2 = -i e^{i\\pi/4} - 1$.</p>
                <p>Or $e^{i\\pi/4} = \\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}$, donc $-i e^{i\\pi/4} = -i\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}$.</p>
                <p>Donc $i(z_B - z_C) = \\frac{\\sqrt{2}}{2} - 1 - i\\frac{\\sqrt{2}}{2}$.</p>
                <p>D’autre part, $z_B - z_A = e^{i\\pi/4} - 1 = \\frac{\\sqrt{2}}{2} - 1 + i\\frac{\\sqrt{2}}{2}$.</p>
                <p>Son conjugué est $\\overline{z_B - z_A} = \\frac{\\sqrt{2}}{2} - 1 - i\\frac{\\sqrt{2}}{2}$.</p>
                <p>On retrouve bien la même expression : $\\boxed{i(z_B - z_C) = \\overline{z_B - z_A}}$.</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob14-q3b',
            texte: '3.b – En déduire que le triangle ABC est isocèle en B.',
            solution: `
                <p>On a $BA = |z_A - z_B| = |z_B - z_A|$ et $BC = |z_C - z_B| = |z_B - z_C|$.</p>
                <p>L’égalité $i(z_B - z_C) = \\overline{z_B - z_A}$ implique en prenant les modules :</p>
                $$|i|\\cdot|z_B - z_C| = |\\overline{z_B - z_A}| \\quad\\Rightarrow\\quad |z_B - z_C| = |z_B - z_A|.$$
                <p>Donc $BC = BA$ : le triangle est isocèle en $B$.</p>
            `
        },

        // ========== Question 4.a ==========
        {
            id: 'prob14-q4a',
            texte: '4.a – Vérifier que B appartient au cercle $\\zeta$ de centre O et rayon 1. Construire B.',
            solution: `
                <p>$z_B = e^{i\\pi/4}$ a pour module 1. Donc $B$ est sur le cercle unité.</p>
                <p>Pour construire B, tracer la demi-droite d’angle $\\pi/4$ depuis O ; son intersection avec le cercle unité est B.</p>
            `
        },

        // ========== Question 4.b ==========
        {
            id: 'prob14-q4b',
            texte: '4.b – Soit T la tangente à $\\zeta$ en B. Montrer que T est la médiatrice de $[AC]$.',
            solution: `
                <p>La tangente en B au cercle unité est perpendiculaire à $\\overrightarrow{OB}$.</p>
                <p>On a montré en 2.b que $(AC) \\parallel (OB)$. Donc $(AC) \\perp T$.</p>
                <p>Il reste à montrer que T passe par le milieu de $[AC]$.</p>
                <p>Le milieu $M$ de $[AC]$ a pour affixe $z_M = \\dfrac{z_A + z_C}{2} = \\dfrac{1 + 2e^{i\\pi/4} - i}{2}$.</p>
                <p>On doit vérifier que $M$ est sur T, c’est-à-dire que $\\overrightarrow{OB} \\cdot \\overrightarrow{BM} = 0$ (produit scalaire nul).</p>
                <p>Ou encore que $\\dfrac{z_M - z_B}{z_B}$ est imaginaire pur (car $\\overrightarrow{BM} \\perp \\overrightarrow{OB}$).</p>
                <p>On peut aussi utiliser le fait que la médiatrice de $[AC]$ est l’ensemble des points équidistants de A et C. Montrons que B est sur la médiatrice : on a déjà $BA = BC$ d’après 3.b. Donc B est sur la médiatrice.</p>
                <p>Mais la médiatrice est la droite passant par B et perpendiculaire à $(AC)$. Or T est la tangente en B, donc T est perpendiculaire à $(OB)$, et $(AC) \\parallel (OB)$, donc T est perpendiculaire à $(AC)$. T est donc la droite passant par B et perpendiculaire à $(AC)$ : c’est exactement la médiatrice de $[AC]$ (car B est sur la médiatrice).</p>
                <p>$$\\boxed{T \\text{ est la médiatrice de }[AC]}$$</p>
            `
        },

        // ========== Question 4.c ==========
        {
            id: 'prob14-q4c',
            texte: '4.c – Construire le point C.',
            solution: `
                <p>Le point C est le symétrique de A par rapport à la tangente T (puisque T est la médiatrice de [AC]).</p>
                <p>Pour construire C :</p>
                <ul>
                    <li>Tracer la tangente en B au cercle unité.</li>
                    <li>Sur cette tangente, tracer la perpendiculaire passant par A, ou utiliser le fait que le milieu de [AC] est le projeté orthogonal de A sur T.</li>
                    <li>On peut aussi utiliser l’affixe $z_C = 2e^{i\\pi/4} - i$, qui donne les coordonnées $(2\\cos\\pi/4, 2\\sin\\pi/4 - 1) = (\\sqrt{2}, \\sqrt{2}-1)$.</li>
                </ul>
                <p>Placer C sur la figure.</p>
            `
        }
    ]
});