// data/problemes/part2.js – Problème 3 : Triangle et aire maximale (Page 7 du PDF)
// =================================================================================
// Ce fichier utilise un canvas pour la figure (appel à drawFigures() dans script.js)

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 3,
    titre: "Triangle et aire maximale – Forme exponentielle et trigonométrie",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
        <p>Soient les points A, B et C d’affixes respectives :</p>
        $$z_A = -1 + i\\sqrt{3},\\quad z_B = \\sqrt{3} + i,\\quad z_C = -z_B.$$

        <!-- Figure en canvas (dessinée par drawFigures) -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="cercle_triangle" width="300" height="300" style="width:100%; max-width:300px; height:auto; aspect-ratio:1/1; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $\\zeta$ de centre O et rayon 2, points A, B, C et triangle ABC.
            </figcaption>
        </figure>

        <h4>Partie 1 – Forme exponentielle et cercle</h4>
        <ol>
            <li><strong>1.a</strong> – Écrire sous forme exponentielle $z_A$, $z_B$ et $z_C$.</li>
            <li><strong>1.b</strong> – Montrer que A, B et C appartiennent au cercle $\\zeta$ de centre O et de rayon 2.</li>
            <li><strong>1.c</strong> – (Construction) – Placer les points sur la figure en utilisant les arguments.</li>
        </ol>

        <h4>Partie 2 – Nature du triangle ABC et aire</h4>
        <ol start="2">
            <li><strong>2.a</strong> – Montrer que le triangle ABC est rectangle en A.</li>
            <li><strong>2.b</strong> – Calculer l’aire du triangle ABC.</li>
        </ol>

        <h4>Partie 3 – Aire variable du triangle MBC</h4>
        <p>Soit M un point du plan d’affixe $z_M = 2e^{i\\theta}$ avec $\\theta \\in \\left[\\dfrac{\\pi}{6},\\dfrac{7\\pi}{6}\\right]$ et S l’aire du triangle MBC.</p>
        <ol start="3">
            <li><strong>3.a</strong> – Vérifier que $M \\in \\zeta$ et justifier que le triangle MBC est rectangle en M.</li>
            <li><strong>3.b</strong> – Montrer que $S = 2\\left|e^{2i\\theta} - e^{i\\frac{\\pi}{3}}\\right|$.</li>
            <li><strong>3.c</strong> – Vérifier l’identité : $e^{i(\\theta+\\frac{\\pi}{6})}\\bigl(e^{i(\\theta-\\frac{\\pi}{6})} - e^{-i(\\theta-\\frac{\\pi}{6})}\\bigr) = e^{i2\\theta} - e^{i\\frac{\\pi}{3}}$.</li>
            <li><strong>3.d</strong> – En déduire que $S = 4\\left|\\sin\\left(\\theta - \\dfrac{\\pi}{6}\\right)\\right|$.</li>
        </ol>

        <h4>Partie 4 – Maximisation de l’aire</h4>
        <ol start="4">
            <li><strong>4</strong> – Déterminer la valeur de $\\theta$ pour laquelle S est maximale.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Avant de commencer</h4>
        <ul>
            <li><strong>Forme exponentielle :</strong> Pour $z = a+ib$, le module est $r = \\sqrt{a^2+b^2}$ et l’argument $\\theta$ vérifie $\\cos\\theta = a/r$, $\\sin\\theta = b/r$. On utilise souvent les valeurs remarquables.</li>
            <li><strong>Cercle de centre O :</strong> Un point d’affixe $z$ appartient au cercle de centre O et de rayon $r$ ssi $|z| = r$.</li>
            <li><strong>Triangle rectangle :</strong> Pour montrer qu’un triangle est rectangle en un point, on peut montrer que le produit scalaire des vecteurs est nul, ou utiliser le théorème de l’angle inscrit dans un cercle (si deux points sont diamétralement opposés).</li>
            <li><strong>Aire d’un triangle rectangle :</strong> $\\text{Aire} = \\dfrac{1}{2} \\times \\text{côté}_1 \\times \\text{côté}_2$.</li>
            <li><strong>Module d’une différence :</strong> $|e^{ia} - e^{ib}| = 2\\left|\\sin\\dfrac{a-b}{2}\\right|$ (formule à retenir).</li>
            <li><strong>Maximisation :</strong> $\\left|\\sin x\\right|$ est maximal quand $\\sin x = \\pm 1$, soit $x = \\dfrac{\\pi}{2} + k\\pi$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes à éviter</h4>
        <ul>
            <li><strong>Confondre argument et module :</strong> Vérifiez toujours que le cosinus et le sinus correspondent bien aux coordonnées du point.</li>
            <li><strong>Oublier le signe :</strong> Dans $z_C = -z_B$, l’argument est $\\arg(z_B) + \\pi$ (à $2\\pi$ près).</li>
            <li><strong>Dans l’aire de MBC :</strong> Ne pas oublier que le triangle est rectangle en M, donc l’aire est $\\frac12 MB \\times MC$ et non pas $\\frac12 BC \\times$ hauteur.</li>
            <li><strong>Erreur dans l’identité trigonométrique :</strong> $e^{ix} - e^{-ix} = 2i\\sin x$, ne pas oublier le $i$.</li>
            <li><strong>Intervalle de $\\theta$ :</strong> Pour maximiser $|\\sin|$, bien vérifier que la valeur trouvée appartient bien à l’intervalle donné.</li>
        </ul>
    `,

    questions: [

        // ===================================================================
        // Question 1.a
        // ===================================================================
        {
            id: 'prob3-q1a',
            texte: `
                <p><strong>1.a</strong> – Écrire sous forme exponentielle $z_A$, $z_B$ et $z_C$.</p>
                <p><em>Rappel :</em> La forme exponentielle est $z = r e^{i\\theta}$ avec $r = |z|$ et $\\theta = \\arg(z)$.</p>
            `,
            solution: `
                <h5>🔍 Correction détaillée</h5>

                <h6>1. $z_A = -1 + i\\sqrt{3}$</h6>
                <p>Module : $|z_A| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1+3} = 2$.</p>
                <p>Argument : on cherche $\\theta$ tel que $\\cos\\theta = -\\dfrac{1}{2}$ et $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$. Ces valeurs correspondent à $\\theta = \\dfrac{2\\pi}{3}$ (car $\\cos(2\\pi/3) = -1/2$, $\\sin(2\\pi/3) = \\sqrt{3}/2$).</p>
                <p>Donc $$\\boxed{z_A = 2e^{i\\frac{2\\pi}{3}}}.$$</p>

                <h6>2. $z_B = \\sqrt{3} + i$</h6>
                <p>Module : $|z_B| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3+1} = 2$.</p>
                <p>Argument : $\\cos\\theta = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\theta = \\dfrac{1}{2}$ → $\\theta = \\dfrac{\\pi}{6}$.</p>
                <p>Donc $$\\boxed{z_B = 2e^{i\\frac{\\pi}{6}}}.$$</p>

                <h6>3. $z_C = -z_B$</h6>
                <p>Multiplier par $-1$ revient à ajouter $\\pi$ à l’argument (et le module reste inchangé) :</p>
                <p>$$z_C = -2e^{i\\frac{\\pi}{6}} = 2e^{i(\\frac{\\pi}{6} + \\pi)} = 2e^{i\\frac{7\\pi}{6}}.$$</p>
                <p>Donc $$\\boxed{z_C = 2e^{i\\frac{7\\pi}{6}}}.$$</p>

                <p><em>Vérification :</em> $2e^{i7\\pi/6} = 2(\\cos 7\\pi/6 + i\\sin 7\\pi/6) = 2(-\\sqrt{3}/2 - i/2) = -\\sqrt{3} - i$, qui est bien $-z_B$ car $z_B = \\sqrt{3}+i$.</p>
            `
        },

        // ===================================================================
        // Question 1.b
        // ===================================================================
        {
            id: 'prob3-q1b',
            texte: `
                <p><strong>1.b</strong> – Montrer que A, B et C appartiennent au cercle $\\zeta$ de centre O et de rayon 2.</p>
                <p><em>Rappel :</em> Un point d’affixe $z$ est sur le cercle de centre O et de rayon $r$ ssi $|z| = r$.</p>
            `,
            solution: `
                <p>D’après la question précédente, les modules de $z_A$, $z_B$ et $z_C$ sont tous égaux à 2. En effet :</p>
                $$|z_A| = |z_B| = |z_C| = 2.$$
                <p>Donc les trois points A, B et C sont à la distance 2 de l’origine O. Ils appartiennent donc au cercle de centre O et de rayon 2.</p>
                <p>$$\\boxed{\\text{A, B, C } \\in \\zeta}.$$</p>
            `
        },

        // ===================================================================
        // Question 1.c (construction)
        // ===================================================================
        {
            id: 'prob3-q1c',
            texte: `
                <p><strong>1.c</strong> – Construction des points A, B et C sur une figure.</p>
                <p><em>Indication :</em> Placez les points à l’aide des arguments : $A$ à $120°$, $B$ à $30°$, $C$ à $210°$ sur le cercle de rayon 2.</p>
            `,
            solution: `
                <p><strong>Construction :</strong></p>
                <ul>
                    <li>Tracer le cercle de centre O et de rayon 2.</li>
                    <li>Placer A sur le rayon d’angle $2\\pi/3$ (120°) : coordonnées $(-1, \\sqrt{3})$.</li>
                    <li>Placer B sur le rayon d’angle $\\pi/6$ (30°) : coordonnées $(\\sqrt{3}, 1)$.</li>
                    <li>Placer C sur le rayon d’angle $7\\pi/6$ (210°) : coordonnées $(-\\sqrt{3}, -1)$.</li>
                </ul>
                <p>Reportez-vous à la figure fournie dans l’énoncé.</p>
            `
        },

        // ===================================================================
        // Question 2.a
        // ===================================================================
        {
            id: 'prob3-q2a',
            texte: `
                <p><strong>2.a</strong> – Montrer que le triangle ABC est rectangle en A.</p>
                <p><em>Rappel :</em> Dans un cercle, si un côté est un diamètre, alors l’angle opposé est droit. Ici, le diamètre est [BC] ? Vérifions les arguments.</p>
            `,
            solution: `
                <p>On a $z_B = 2e^{i\\pi/6}$ et $z_C = 2e^{i7\\pi/6}$.</p>
                <p>La différence des arguments : $\\arg(z_C) - \\arg(z_B) = \\dfrac{7\\pi}{6} - \\dfrac{\\pi}{6} = \\pi$.</p>
                <p>Donc les points B et C sont diamétralement opposés sur le cercle $\\zeta$ (car leurs arguments diffèrent de $\\pi$). Ainsi [BC] est un diamètre du cercle.</p>
                <p>Par le théorème de l’angle inscrit, tout point du cercle (autre que B et C) voit le diamètre [BC] sous un angle droit. En particulier, le point A est sur le cercle, donc l’angle $\\widehat{BAC}$ est droit.</p>
                <p>$$\\boxed{\\text{Le triangle ABC est rectangle en A}}.$$</p>
                <p><em>Variante algébrique :</em> On peut aussi calculer $(z_B - z_A)/(z_C - z_A)$ et montrer que c’est un imaginaire pur.</p>
            `
        },

        // ===================================================================
        // Question 2.b
        // ===================================================================
        {
            id: 'prob3-q2b',
            texte: `
                <p><strong>2.b</strong> – Calculer l’aire du triangle ABC.</p>
                <p><em>Rappel :</em> Aire d’un triangle rectangle = $\\dfrac{1}{2} \\times AB \\times AC$.</p>
            `,
            solution: `
                <p>Calculons les longueurs $AB$ et $AC$.</p>
                <p>$AB = |z_B - z_A|$. On a $z_B - z_A = (\\sqrt{3}+i) - (-1+i\\sqrt{3}) = \\sqrt{3}+1 + i(1-\\sqrt{3})$.</p>
                <p>Son module au carré : $|z_B - z_A|^2 = (\\sqrt{3}+1)^2 + (1-\\sqrt{3})^2 = (3+2\\sqrt{3}+1) + (1-2\\sqrt{3}+3) = 8$.</p>
                <p>Donc $AB = \\sqrt{8} = 2\\sqrt{2}$.</p>

                <p>$AC = |z_C - z_A|$. On a $z_C - z_A = (-\\sqrt{3}-i) - (-1+i\\sqrt{3}) = 1-\\sqrt{3} - i(1+\\sqrt{3})$.</p>
                <p>Son module au carré : $|z_C - z_A|^2 = (1-\\sqrt{3})^2 + (1+\\sqrt{3})^2 = (1-2\\sqrt{3}+3) + (1+2\\sqrt{3}+3) = 8$.</p>
                <p>Donc $AC = 2\\sqrt{2}$.</p>

                <p>L’aire du triangle rectangle en A est :</p>
                $$\\text{Aire}_{ABC} = \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times (2\\sqrt{2}) \\times (2\\sqrt{2}) = \\frac{1}{2} \\times 8 = 4.$$
                <p>$$\\boxed{\\text{Aire}_{ABC} = 4}.$$</p>
            `
        },

        // ===================================================================
        // Question 3.a
        // ===================================================================
        {
            id: 'prob3-q3a',
            texte: `
                <p><strong>3.a</strong> – Vérifier que $M \\in \\zeta$ et justifier que le triangle MBC est rectangle en M.</p>
                <p><em>Rappel :</em> Si un point est sur le cercle de diamètre [BC], alors le triangle est rectangle en ce point. Ici, [BC] est un diamètre de $\\zeta$.</p>
            `,
            solution: `
                <p>On a $z_M = 2e^{i\\theta}$, donc $|z_M| = 2$. Ainsi M est sur le cercle $\\zeta$.</p>
                <p>Comme B et C sont diamétralement opposés sur ce même cercle, [BC] est un diamètre. Par conséquent, pour tout point M du cercle (distinct de B et C), le triangle MBC est rectangle en M (théorème de l’angle inscrit).</p>
                <p>$$\\boxed{\\text{MBC est rectangle en M}}.$$</p>
            `
        },

        // ===================================================================
        // Question 3.b
        // ===================================================================
        {
            id: 'prob3-q3b',
            texte: `
                <p><strong>3.b</strong> – Montrer que $S = 2\\left|e^{2i\\theta} - e^{i\\frac{\\pi}{3}}\\right|$.</p>
                <p><em>Rappel :</em> Aire d’un triangle rectangle = $\\frac12 \\times$ (produit des deux côtés de l’angle droit).</p>
            `,
            solution: `
                <p>Le triangle MBC est rectangle en M, donc son aire est :</p>
                $$S = \\frac{1}{2} \\times MB \\times MC.$$

                <p>Calculons $MB$ et $MC$ :</p>
                $$MB = |z_B - z_M| = |2e^{i\\pi/6} - 2e^{i\\theta}| = 2|e^{i\\pi/6} - e^{i\\theta}|.$$
                $$MC = |z_C - z_M| = |2e^{i7\\pi/6} - 2e^{i\\theta}| = 2|e^{i7\\pi/6} - e^{i\\theta}|.$$

                <p>Or $e^{i7\\pi/6} = -e^{i\\pi/6}$ (car $7\\pi/6 = \\pi/6 + \\pi$). Donc $MC = 2|-e^{i\\pi/6} - e^{i\\theta}| = 2|e^{i\\pi/6} + e^{i\\theta}|$.</p>

                <p>Alors</p>
                $$S = \\frac{1}{2} \\times \\bigl(2|e^{i\\pi/6} - e^{i\\theta}|\\bigr) \\times \\bigl(2|e^{i\\pi/6} + e^{i\\theta}|\\bigr) = 2 \\, |e^{i\\pi/6} - e^{i\\theta}| \\, |e^{i\\pi/6} + e^{i\\theta}|.$$

                <p>On utilise l’identité $|a-b| \\, |a+b| = |a^2 - b^2|$ avec $a = e^{i\\theta}$ et $b = e^{i\\pi/6}$ :</p>
                $$|e^{i\\pi/6} - e^{i\\theta}| \\, |e^{i\\pi/6} + e^{i\\theta}| = |(e^{i\\pi/6})^2 - (e^{i\\theta})^2| = |e^{i\\pi/3} - e^{i2\\theta}|.$$

                <p>Finalement,</p>
                $$S = 2 \\, |e^{i\\pi/3} - e^{i2\\theta}| = 2\\left|e^{2i\\theta} - e^{i\\pi/3}\\right|.$$
                <p>$$\\boxed{S = 2\\left|e^{2i\\theta} - e^{i\\frac{\\pi}{3}}\\right|}.$$</p>
            `
        },

        // ===================================================================
        // Question 3.c
        // ===================================================================
        {
            id: 'prob3-q3c',
            texte: `
                <p><strong>3.c</strong> – Vérifier l’identité :</p>
                $$e^{i(\\theta+\\frac{\\pi}{6})}\\bigl(e^{i(\\theta-\\frac{\\pi}{6})} - e^{-i(\\theta-\\frac{\\pi}{6})}\\bigr) = e^{i2\\theta} - e^{i\\frac{\\pi}{3}}.$$
                <p><em>Rappel :</em> $e^{ix} - e^{-ix} = 2i\\sin x$.</p>
            `,
            solution: `
                <p>On développe le membre de gauche :</p>
                $$e^{i(\\theta+\\pi/6)} \\cdot e^{i(\\theta-\\pi/6)} - e^{i(\\theta+\\pi/6)} \\cdot e^{-i(\\theta-\\pi/6)} = e^{i(2\\theta)} - e^{i(\\theta+\\pi/6 - \\theta + \\pi/6)} = e^{i2\\theta} - e^{i\\pi/3}.$$
                <p>Ce qui est exactement le membre de droite. L’identité est donc vérifiée.</p>
                <p>$$\\boxed{\\text{Identité vraie}}.$$</p>
            `
        },

        // ===================================================================
        // Question 3.d
        // ===================================================================
        {
            id: 'prob3-q3d',
            texte: `
                <p><strong>3.d</strong> – En déduire que $S = 4\\left|\\sin\\left(\\theta - \\dfrac{\\pi}{6}\\right)\\right|$.</p>
                <p><em>Rappel :</em> Utiliser l’identité précédente et la relation $e^{ix} - e^{-ix} = 2i\\sin x$.</p>
            `,
            solution: `
                <p>D’après l’identité de la question 3.c, on a :</p>
                $$e^{i2\\theta} - e^{i\\pi/3} = e^{i(\\theta+\\pi/6)} \\bigl(e^{i(\\theta-\\pi/6)} - e^{-i(\\theta-\\pi/6)}\\bigr).$$
                <p>Or $e^{i(\\theta-\\pi/6)} - e^{-i(\\theta-\\pi/6)} = 2i\\sin(\\theta-\\pi/6)$.</p>
                <p>Donc $e^{i2\\theta} - e^{i\\pi/3} = e^{i(\\theta+\\pi/6)} \\cdot 2i\\sin(\\theta-\\pi/6)$.</p>
                <p>En prenant le module :</p>
                $$\\left|e^{i2\\theta} - e^{i\\pi/3}\\right| = \\left| e^{i(\\theta+\\pi/6)} \\right| \\cdot \\left| 2i \\sin(\\theta-\\pi/6) \\right| = 1 \\cdot 2 |\\sin(\\theta-\\pi/6)|.$$
                <p>Finalement, d’après 3.b :</p>
                $$S = 2 \\times \\left|e^{i2\\theta} - e^{i\\pi/3}\\right| = 2 \\times 2 |\\sin(\\theta-\\pi/6)| = 4\\left|\\sin\\left(\\theta - \\frac{\\pi}{6}\\right)\\right|.$$
                <p>$$\\boxed{S = 4\\left|\\sin\\left(\\theta - \\dfrac{\\pi}{6}\\right)\\right|}.$$</p>
            `
        },

        // ===================================================================
        // Question 4
        // ===================================================================
        {
            id: 'prob3-q4',
            texte: `
                <p><strong>4</strong> – Déterminer la valeur de $\\theta$ pour laquelle S est maximale.</p>
                <p><em>Rappel :</em> $|\\sin x|$ est maximal quand $x = \\dfrac{\\pi}{2} + k\\pi$.</p>
            `,
            solution: `
                <p>On a $S = 4\\left|\\sin\\left(\\theta - \\dfrac{\\pi}{6}\\right)\\right|$ avec $\\theta \\in \\left[\\dfrac{\\pi}{6},\\dfrac{7\\pi}{6}\\right]$.</p>
                <p>Posons $x = \\theta - \\dfrac{\\pi}{6}$. Alors $x \\in [0, \\pi]$.</p>
                <p>La fonction $|\\sin x|$ sur $[0,\\pi]$ est maximale lorsque $\\sin x = \\pm 1$, c’est-à-dire $x = \\dfrac{\\pi}{2}$ (car $x \\in [0,\\pi]$).</p>
                <p>Donc $\\theta - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{2} \\iff \\theta = \\dfrac{\\pi}{6} + \\dfrac{\\pi}{2} = \\dfrac{2\\pi}{3}$.</p>
                <p>Cette valeur appartient bien à l’intervalle $[\\pi/6, 7\\pi/6]$.</p>
                <p>La valeur maximale de S est alors $S_{\\max} = 4 \\times 1 = 4$.</p>
                <p>$$\\boxed{\\theta = \\dfrac{2\\pi}{3},\\quad S_{\\max} = 4}.$$</p>
                <p><em>Interprétation géométrique :</em> Pour $\\theta = 2\\pi/3$, le point M coïncide avec A (car $z_A = 2e^{i2\\pi/3}$), ce qui rend le triangle MBC = ABC d’aire maximale (égale à 4).</p>
            `
        }

    ] // fin des questions

}); // fin du push