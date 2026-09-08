// data/problemes/part6.js – Problème 7 : Équation complexe, cercle et alignement (Page 12 du PDF)
// ===============================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 7,
    titre: "Équation complexe, cercle et alignement",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
        <p>On considère l'équation $(E): z^2 - 4i z - 6 + 2i\\sqrt{3} = 0$.</p>

        <!-- Figure en canvas -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="cercle_alignement" width="400" height="300" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/300; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Cercle $\\zeta$ de centre O et rayon 2, points A, B, K, E, F.
            </figcaption>
        </figure>

        <h4>Partie 1 – Résolution de (E)</h4>
        <ol>
            <li><strong>1.a</strong> – Vérifier que le discriminant de (E) est $\\Delta = (2\\sqrt{3} - 2i)^2$.</li>
            <li><strong>1.b</strong> – Résoudre dans $\\mathbb{C}$ l'équation (E). On notera $z_A$ et $z_B$ les solutions telles que $z_A = \\sqrt{3} + i$ et $z_B = -\\sqrt{3} + 3i$.</li>
        </ol>

        <h4>Partie 2 – Cercle et milieu</h4>
        <p>Soient A, B et K les points d'affixes respectives $z_A = \\sqrt{3} + i$, $z_B = -\\sqrt{3} + 3i$ et $z_K = 2i$.</p>
        <ol start="2">
            <li><strong>2.a</strong> – Montrer que A appartient au cercle $(\\zeta)$ de centre O et de rayon 2.</li>
            <li><strong>2.b</strong> – Vérifier que K est le milieu du segment [AB].</li>
            <li><strong>2.c</strong> – Construire les points A et B sur la figure.</li>
        </ol>

        <h4>Partie 3 – Différence d'affixes</h4>
        <ol start="3">
            <li><strong>3</strong> – Montrer que $z_A - z_B = 4e^{-i\\pi/6}$.</li>
        </ol>

        <h4>Partie 4 – Point F sur le cercle</h4>
        <p>Soit E le point d'affixe $z_E = 2$. La perpendiculaire à (AB) menée de E coupe le cercle $(\\zeta)$ en un deuxième point F d'affixe $z_F$. On pose $z_F = 2e^{i\\theta}$ où $\\theta$ est une mesure de l'angle $(\\vec{u}, \\overrightarrow{OF})$.</p>
        <ol start="4">
            <li><strong>4.a</strong> – Montrer que $e^{i\\theta} - 1 = 2i\\sin\\left(\\dfrac{\\theta}{2}\\right)e^{i\\frac{\\theta}{2}}$.</li>
            <li><strong>4.b</strong> – Montrer que $\\dfrac{z_F - z_E}{z_A - z_B} = i\\sin\\left(\\dfrac{\\theta}{2}\\right)e^{i\\left(\\frac{\\theta}{2} + \\frac{\\pi}{6}\\right)}$.</li>
            <li><strong>4.c</strong> – En déduire que $z_F = 2e^{-i\\pi/3}$.</li>
            <li><strong>4.d</strong> – Montrer que les points O, B et F sont alignés.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces</h4>
        <ul>
            <li><strong>1.a :</strong> Calculer le discriminant $\\Delta = b^2 - 4ac$ avec $a=1$, $b=-4i$, $c=-6+2i\\sqrt{3}$.</li>
            <li><strong>1.b :</strong> Utiliser la formule $z = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.</li>
            <li><strong>2.a :</strong> Calculer $|z_A|$ et vérifier qu'il est égal à 2.</li>
            <li><strong>2.b :</strong> Vérifier que $\\dfrac{z_A + z_B}{2} = z_K$.</li>
            <li><strong>3 :</strong> Calculer $z_A - z_B$ et mettre sous forme exponentielle.</li>
            <li><strong>4.a :</strong> Utiliser l'identité $e^{i\\theta} = e^{i\\theta/2} \\cdot e^{i\\theta/2}$ et la formule $e^{ix}-1 = 2i\\sin(x/2)e^{ix/2}$.</li>
            <li><strong>4.b :</strong> Utiliser le fait que $(z_F - z_E)$ est perpendiculaire à $(z_A - z_B)$ (car EF ⟂ AB), donc le quotient est imaginaire pur.</li>
            <li><strong>4.c :</strong> Utiliser les résultats précédents pour trouver $\\theta$.</li>
            <li><strong>4.d :</strong> Montrer que les affixes de B et F sont proportionnelles par un facteur réel.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Ne pas oublier le $i$ dans le discriminant.</li>
            <li>Dans la résolution de (E), bien prendre les deux racines.</li>
            <li>Pour montrer que K est milieu, vérifier $z_K = (z_A+z_B)/2$.</li>
            <li>Pour la perpendicularité, bien utiliser le fait que le quotient est imaginaire pur.</li>
            <li>Dans 4.c, bien déterminer $\\theta$ à partir de l'argument du quotient.</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob7-q1a',
            texte: '1.a – Vérifier que le discriminant de (E) est $\\Delta = (2\\sqrt{3} - 2i)^2$.',
            solution: `
                <p>On a (E) : $z^2 - 4i z - 6 + 2i\\sqrt{3} = 0$.</p>
                <p>$a = 1$, $b = -4i$, $c = -6 + 2i\\sqrt{3}$.</p>
                $$\\Delta = b^2 - 4ac = (-4i)^2 - 4(1)(-6 + 2i\\sqrt{3}) = -16 + 24 - 8i\\sqrt{3} = 8 - 8i\\sqrt{3}.$$
                <p>Or $(2\\sqrt{3} - 2i)^2 = (2\\sqrt{3})^2 + (2i)^2 - 2(2\\sqrt{3})(2i) = 12 - 4 - 8i\\sqrt{3} = 8 - 8i\\sqrt{3}$.</p>
                <p>Donc $\\Delta = (2\\sqrt{3} - 2i)^2$.</p>
            `
        },

        // ========== Question 1.b (δ utilisé) ==========
        {
            id: 'prob7-q1b',
            texte: '1.b – Résoudre (E) et donner $z_A = \\sqrt{3}+i$, $z_B = -\\sqrt{3}+3i$.',
            solution: `
                <p>On a $\\delta = 2\\sqrt{3} - 2i$.</p>
                $$z = \\frac{-b \\pm \\delta}{2a} = \\frac{4i \\pm (2\\sqrt{3} - 2i)}{2}.$$
                <p>Pour le signe $+$ : $z_1 = \\frac{4i + 2\\sqrt{3} - 2i}{2} = \\frac{2\\sqrt{3} + 2i}{2} = \\sqrt{3} + i$.</p>
                <p>Pour le signe $-$ : $z_2 = \\frac{4i - 2\\sqrt{3} + 2i}{2} = \\frac{-2\\sqrt{3} + 6i}{2} = -\\sqrt{3} + 3i$.</p>
                <p>Donc $z_A = \\sqrt{3}+i$ et $z_B = -\\sqrt{3}+3i$.</p>
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob7-q2a',
            texte: '2.a – Montrer que A appartient au cercle de centre O rayon 2.',
            solution: `
                <p>$z_A = \\sqrt{3} + i$.</p>
                $$|z_A| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3+1} = 2.$$
                <p>Donc A est à la distance 2 de O, donc A appartient au cercle de centre O et de rayon 2.</p>
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob7-q2b',
            texte: '2.b – Vérifier que K est le milieu de [AB].',
            solution: `
                <p>On a $z_K = 2i$.</p>
                $$\\frac{z_A + z_B}{2} = \\frac{(\\sqrt{3}+i) + (-\\sqrt{3}+3i)}{2} = \\frac{4i}{2} = 2i = z_K.$$
                <p>Donc K est le milieu de [AB].</p>
            `
        },

        // ========== Question 2.c ==========
        {
            id: 'prob7-q2c',
            texte: '2.c – Construire les points A et B sur la figure.',
            solution: `
                <p>Placer A de coordonnées $(\\sqrt{3}, 1)$ et B de coordonnées $(-\\sqrt{3}, 3)$. K est le milieu, donc K a pour coordonnées $(0, 2)$, ce qui correspond à $2i$.</p>
            `
        },

        // ========== Question 3 ==========
        {
            id: 'prob7-q3',
            texte: '3 – Montrer que $z_A - z_B = 4e^{-i\\pi/6}$.',
            solution: `
                $$z_A - z_B = (\\sqrt{3}+i) - (-\\sqrt{3}+3i) = 2\\sqrt{3} - 2i = 2(\\sqrt{3} - i).$$
                <p>Mettons $\\sqrt{3} - i$ sous forme exponentielle : module $\\sqrt{3+1}=2$, argument $\\arg(\\sqrt{3}-i) = -\\pi/6$ (car $\\cos(-\\pi/6)=\\sqrt{3}/2$, $\\sin(-\\pi/6)=-1/2$).</p>
                <p>Donc $\\sqrt{3} - i = 2e^{-i\\pi/6}$.</p>
                <p>Ainsi $z_A - z_B = 2 \\times 2e^{-i\\pi/6} = 4e^{-i\\pi/6}$.</p>
            `
        },

        // ========== Question 4.a ==========
        {
            id: 'prob7-q4a',
            texte: '4.a – Montrer que $e^{i\\theta} - 1 = 2i\\sin(\\theta/2) e^{i\\theta/2}$.',
            solution: `
                <p>On utilise l'identité classique :</p>
                $$e^{i\\theta} - 1 = e^{i\\theta/2} (e^{i\\theta/2} - e^{-i\\theta/2}) = e^{i\\theta/2} \\cdot 2i\\sin(\\theta/2) = 2i\\sin(\\theta/2) e^{i\\theta/2}.$$
                <p>Donc l'égalité est vérifiée.</p>
            `
        },

        // ========== Question 4.b ==========
        {
            id: 'prob7-q4b',
            texte: '4.b – Montrer que $\\dfrac{z_F - z_E}{z_A - z_B} = i\\sin(\\theta/2) e^{i(\\theta/2 + \\pi/6)}$.',
            solution: `
                <p>On a $z_F = 2e^{i\\theta}$, $z_E = 2$.</p>
                $$z_F - z_E = 2(e^{i\\theta} - 1) = 2 \\cdot 2i\\sin(\\theta/2) e^{i\\theta/2} = 4i\\sin(\\theta/2) e^{i\\theta/2}.$$
                <p>D'après la question 3, $z_A - z_B = 4e^{-i\\pi/6}$.</p>
                <p>Donc $$\\frac{z_F - z_E}{z_A - z_B} = \\frac{4i\\sin(\\theta/2) e^{i\\theta/2}}{4e^{-i\\pi/6}} = i\\sin(\\theta/2) e^{i(\\theta/2 + \\pi/6)}.$$</p>
                <p>C'est bien l'expression demandée.</p>
            `
        },

        // ========== Question 4.c (Q9) – toutes les formules entre $$ ==========
        {
            id: 'prob7-q4c',
            texte: '4.c – En déduire que $z_F = 2e^{-i\\pi/3}$.',
            solution: `
                <p>On a d'après 4.b :
                $$\\frac{z_F - z_E}{z_A - z_B} = i\\sin(\\theta/2)\\,e^{i(\\theta/2 + \\pi/6)}.$$</p>
                <p>Comme (EF) est perpendiculaire à (AB), ce quotient est un imaginaire pur non nul.</p>
                <p>Or $$i\\sin(\\theta/2)$$ est déjà imaginaire pur (avec $$\\sin(\\theta/2) \\neq 0$$, car $$F \\neq E$$).  
                Pour que le produit soit imaginaire pur, il faut donc que $$e^{i(\\theta/2+\\pi/6)}$$ soit réel.</p>
                <p>Ainsi $$\\theta/2 + \\pi/6 \\equiv 0 \\pmod{\\pi}$$, soit $$\\theta = -\\pi/3 \\pmod{2\\pi}$$.</p>
                <p>On prend $$\\theta = -\\pi/3$$, d'où
                $$ z_F = 2e^{-i\\pi/3}. $$</p>
            `
        },

        // ========== Question 4.d (Q10) – toutes les formules entre $$ ==========
        {
            id: 'prob7-q4d',
            texte: '4.d – Montrer que O, B et F sont alignés.',
            solution: `
                <p>On a $$z_B = -\\sqrt{3} + 3i$$.</p>
                <p>Mettons $$z_B$$ sous forme exponentielle :
                $$ z_B = 2\\sqrt{3}\\left(-\\frac12 + i\\frac{\\sqrt{3}}2\\right) = 2\\sqrt{3}\\,e^{i2\\pi/3}. $$</p>
                <p>Et d'après 4.c : $$z_F = 2e^{-i\\pi/3}$$.</p>
                <p>Donc
                $$ \\frac{z_F}{z_B} = \\frac{2e^{-i\\pi/3}}{2\\sqrt{3}\\,e^{i2\\pi/3}}
                   = \\frac{1}{\\sqrt{3}}\\,e^{-i\\pi}
                   = -\\frac{1}{\\sqrt{3}} \\in \\mathbb{R}. $$</p>
                <p>Le rapport est réel, donc les vecteurs $$\\overrightarrow{OF}$$ et $$\\overrightarrow{OB}$$ sont colinéaires.  
                Les points O, B et F sont alignés.</p>
            `
        }
    ]
});