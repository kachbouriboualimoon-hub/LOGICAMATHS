// data/problemes/part14.js – Problème 15 : Transformation complexe, médiatrice et cercle (Page 13 du PDF)
// ==========================================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 15,
    titre: "Transformation complexe, médiatrice et cercle",
    enonce: `
        <p>Le plan $P$ est rapporté à un repère orthonormé direct $(O; \\vec{u}, \\vec{v})$. On fera une figure qui sera complétée au fur et à mesure.</p>

        <p>Soit $f$ l’application qui à tout point $M$ de $P$ d’affixe non nulle $z$ associe le point $M'$ d’affixe :</p>
        $$z' = \\frac{1}{2} \\left( z + \\frac{1}{z} \\right)$$

        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="probleme15_transformation" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle de diamètre [AB] et médiatrice Δ – transformation f.
            </figcaption>
        </figure>

        <ol>
            <li><strong>1.</strong> Soit $E$ le point d’affixe $z_E = -i$. Déterminer l’affixe du point $E'$ image de $E$ par $f$.</li>
            <li><strong>2.</strong> Déterminer l’ensemble des points $M$ tels que $M' = M$.</li>
            <li><strong>3.</strong> On note $A$ et $B$ les points d’affixes respectives $1$ et $-1$. Soit $M$ un point distinct des points $O$, $A$ et $B$.<br>
                <strong>a.</strong> Montrer que, pour tout nombre complexe $z$ différent de $0, 1$ et $-1$, on a :
                $$\\frac{z'+1}{z'-1} = \\left(\\frac{z+1}{z-1}\\right)^2$$
                <strong>b.</strong> En déduire une expression de $\\dfrac{M'B}{M'A}$ en fonction de $\\dfrac{MB}{MA}$, puis une expression de l’angle $(\\overrightarrow{M'A}, \\overrightarrow{M'B})$ en fonction de l’angle $(\\overrightarrow{MA}, \\overrightarrow{MB})$.</li>
            <li><strong>4.</strong> Soit $\\Delta$ la médiatrice de $[AB]$. Montrer que si $M$ est un point de $\\Delta$ distinct du point $O$, alors $M'$ est un point de $\\Delta$.</li>
            <li><strong>5.</strong> Soit $\\Gamma$ le cercle de diamètre $[AB]$. Montrer que si le point $M$ appartient à $\\Gamma$, alors le point $M'$ appartient à la droite $(AB)$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Image d’un point :</strong> Remplacer $z$ par l’affixe du point dans la formule de $z'$.</li>
            <li><strong>Points fixes :</strong> Résoudre $z' = z$, c’est-à-dire $\\frac12(z + 1/z) = z$.</li>
            <li><strong>Rapport de distances :</strong> $\\dfrac{M'B}{M'A} = \\dfrac{|z'-1|}{|z'+1|}$. Utiliser l’égalité de 3.a.</li>
            <li><strong>Argument d’un quotient :</strong> $\\arg\\left(\\dfrac{z'+1}{z'-1}\\right) = \\arg\\left(\\left(\\dfrac{z+1}{z-1}\\right)^2\\right)$.</li>
            <li><strong>Médiatrice :</strong> L’ensemble des points $M$ tels que $MA = MB$, soit $|z-1| = |z+1|$, donc $\\Re(z) = 0$.</li>
            <li><strong>Cercle de diamètre [AB] :</strong> $\\angle AMB = 90°$, soit $\\dfrac{z-1}{z+1}$ imaginaire pur.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $z$ doit être non nul dans la définition de $f$.</li>
            <li>Dans 3.a, ne pas simplifier correctement $z'+1$ et $z'-1$.</li>
            <li>Confondre le rapport des distances avec son carré.</li>
            <li>Pour l’angle, ne pas tenir compte du facteur 2.</li>
            <li>Pour la médiatrice, confondre $\\Re(z)=0$ avec $\\Im(z)=0$.</li>
            <li>Pour le cercle de diamètre, oublier la condition $\\Re\\left(\\frac{z-1}{z+1}\\right)=0$.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1 ==========
        {
            id: 'prob15-q1',
            texte: '1. – Déterminer l’affixe de $E\'$ image de $E$ par $f$ ($z_E = -i$).',
            solution: `
                $$z' = \\frac{1}{2}\\left(z + \\frac{1}{z}\\right) = \\frac{1}{2}\\left(-i + \\frac{1}{-i}\\right) = \\frac{1}{2}\\left(-i + i\\right) = 0.$$
                <p>Donc $E\'$ a pour affixe $\\boxed{0}$.</p>
            `
        },

        // ========== Question 2 ==========
        {
            id: 'prob15-q2',
            texte: '2. – Déterminer l’ensemble des points $M$ tels que $M\' = M$.',
            solution: `
                <p>On résout $z\' = z$ :</p>
                $$\\frac{1}{2}\\left(z + \\frac{1}{z}\\right) = z \\quad\\Longleftrightarrow\\quad z + \\frac{1}{z} = 2z \\quad\\Longleftrightarrow\\quad \\frac{1}{z} = z \\quad\\Longleftrightarrow\\quad z^2 = 1.$$
                <p>Donc $z = 1$ ou $z = -1$. Ce sont les points $A$ et $B$.</p>
                $$\\boxed{\\text{Les points fixes sont } A(1) \\text{ et } B(-1)}$$
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob15-q3a',
            texte: '3.a – Montrer que $\\dfrac{z\'+1}{z\'-1} = \\left(\\dfrac{z+1}{z-1}\\right)^2$.',
            solution: `
                <p>Calculons $z\'+1$ et $z\'-1$ :</p>
                $$z\'+1 = \\frac{1}{2}\\left(z + \\frac{1}{z}\\right) + 1 = \\frac{z^2+1+2z}{2z} = \\frac{(z+1)^2}{2z}.$$
                $$z\'-1 = \\frac{1}{2}\\left(z + \\frac{1}{z}\\right) - 1 = \\frac{z^2+1-2z}{2z} = \\frac{(z-1)^2}{2z}.$$
                <p>Donc :</p>
                $$\\frac{z\'+1}{z\'-1} = \\frac{(z+1)^2}{2z} \\times \\frac{2z}{(z-1)^2} = \\frac{(z+1)^2}{(z-1)^2} = \\left(\\frac{z+1}{z-1}\\right)^2.$$
                <p>L’égalité est bien vérifiée.</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob15-q3b',
            texte: '3.b – En déduire $\\dfrac{M\'B}{M\'A}$ en fonction de $\\dfrac{MB}{MA}$, puis l’angle $(\\overrightarrow{M\'A}, \\overrightarrow{M\'B})$ en fonction de $(\\overrightarrow{MA}, \\overrightarrow{MB})$.',
            solution: `
                <p>On a $M\'A = |z\' - 1| = |z\' - 1|$ et $M\'B = |z\' + 1|$ (car B a pour affixe $-1$).</p>
                <p>De l’égalité 3.a, on déduit :</p>
                $$\\frac{z\'+1}{z\'-1} = \\left(\\frac{z+1}{z-1}\\right)^2 \\quad\\Longrightarrow\\quad \\left|\\frac{z\'+1}{z\'-1}\\right| = \\left|\\frac{z+1}{z-1}\\right|^2.$$
                <p>Donc :</p>
                $$\\frac{M\'B}{M\'A} = \\frac{|z\'+1|}{|z\'-1|} = \\left(\\frac{|z+1|}{|z-1|}\\right)^2 = \\left(\\frac{MB}{MA}\\right)^2.$$
                <p>Pour l’angle, on a :</p>
                $$\\arg\\left(\\frac{z\'+1}{z\'-1}\\right) = 2\\arg\\left(\\frac{z+1}{z-1}\\right) \\pmod{2\\pi}.$$
                <p>Mais $\\arg\\left(\\frac{z+1}{z-1}\\right)$ est l’angle $(\\overrightarrow{MA}, \\overrightarrow{MB})$ (car $\\overrightarrow{MA}$ a pour affixe $1-z$ et $\\overrightarrow{MB}$ a pour affixe $-1-z$, mais en fait l’angle entre les vecteurs $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ est $\\arg\\left(\\frac{-1-z}{1-z}\\right) = \\arg\\left(\\frac{z+1}{z-1}\\right)$).</p>
                <p>De même, $\\arg\\left(\\frac{z\'+1}{z\'-1}\\right)$ est l’angle $(\\overrightarrow{M\'A}, \\overrightarrow{M\'B})$.</p>
                <p>Donc :</p>
                $$\\boxed{(\\overrightarrow{M\'A}, \\overrightarrow{M\'B}) \\equiv 2\\,(\\overrightarrow{MA}, \\overrightarrow{MB}) \\pmod{2\\pi}}$$
            `
        },

        // ========== Question 4 ==========
        {
            id: 'prob15-q4',
            texte: '4. – Soit $\\Delta$ la médiatrice de $[AB]$. Montrer que si $M\\in\\Delta$, $M\\neq O$, alors $M\'\\in\\Delta$.',
            solution: `
                <p>La médiatrice de $[AB]$ est l’ensemble des points équidistants de $A$ et $B$, donc $MA = MB$, soit $|z-1| = |z+1|$.</p>
                <p>Si $M\\in\\Delta$, alors $|z-1| = |z+1|$, donc $\\dfrac{MB}{MA} = 1$.</p>
                <p>D’après 3.b, on a $\\dfrac{M\'B}{M\'A} = \\left(\\dfrac{MB}{MA}\\right)^2 = 1$, donc $M\'A = M\'B$.</p>
                <p>Ainsi $M\'$ est également équidistant de $A$ et $B$ : $M\'\\in\\Delta$.</p>
            `
        },

        // ========== Question 5 ==========
        {
            id: 'prob15-q5',
            texte: '5. – Soit $\\Gamma$ le cercle de diamètre $[AB]$. Montrer que si $M\\in\\Gamma$, alors $M\'\\in(AB)$.',
            solution: `
                <p>Le cercle de diamètre $[AB]$ est l’ensemble des points $M$ tels que $\\angle AMB = 90°$, ce qui équivaut à $\\dfrac{z-1}{z+1}$ imaginaire pur (car les vecteurs $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont orthogonaux).</p>
                <p>Autrement dit, $\\arg\\left(\\frac{z-1}{z+1}\\right) \\equiv \\pm \\frac{\\pi}{2} \\pmod{\\pi}$.</p>
                <p>D’après 3.a, $\\frac{z\'+1}{z\'-1} = \\left(\\frac{z+1}{z-1}\\right)^2$. Donc son argument est :</p>
                $$\\arg\\left(\\frac{z\'+1}{z\'-1}\\right) = 2\\arg\\left(\\frac{z+1}{z-1}\\right) \\equiv 2\\left(\\pm \\frac{\\pi}{2}\\right) \\equiv \\pm \\pi \\equiv 0 \\pmod{\\pi}.$$
                <p>Ainsi $\\frac{z\'+1}{z\'-1}$ est un réel. Cela signifie que les vecteurs $\\overrightarrow{M\'A}$ et $\\overrightarrow{M\'B}$ sont colinéaires, donc les points $M\'$, $A$ et $B$ sont alignés.</p>
                <p>Autrement dit, $M\'$ appartient à la droite $(AB)$.</p>
            `
        }
    ]
});