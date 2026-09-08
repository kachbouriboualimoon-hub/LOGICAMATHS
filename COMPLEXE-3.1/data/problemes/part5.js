// data/problemes/part5.js – Problème 6 : Équation, parallélogramme et alignement (Page 11 du PDF)
// ===============================================================================================
// Version conforme à l'énoncé scanné : z_A = 2e^(iπ/6), z_B = 1/2 z_A^2
// Équation (E) : z² + 2z - 2(1+√3)(1+i) = 0

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 6,
    titre: "Équations complexes, parallélogramme et alignement",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>
        <p>On donne les nombres complexes :</p>
        $$z_A = 2e^{i\\pi/6},\\qquad z_B = \\frac{1}{2} z_A^2.$$

        <!-- Figure en canvas -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="parallelogramme_points" width="400" height="300" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/300; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Représentation des points A, B, I, C, K, D.
            </figcaption>
        </figure>

        <h4>Partie 1 – Formes algébriques</h4>
        <ol>
            <li><strong>1.a</strong> – Déterminer la forme algébrique de $z_A$ et $z_B$.</li>
            <li><strong>1.b</strong> – Vérifier que l’affixe du point I (milieu de [AB]) est $z_I = \\dfrac{1+\\sqrt{3}}{2}(1+i)$.</li>
        </ol>

        <h4>Partie 2 – Équation et milieu</h4>
        <p>On considère dans $\mathbb{C}$ l’équation :</p>
        $$(E) : z^2 + 2z - 2(1+\\sqrt{3})(1+i) = 0.$$
        <p>Soit M et N deux points d’affixes respectives $z$ et $\\dfrac{1}{2} z^2$, où $z$ est un nombre complexe non nul et différent de 2.</p>
        <ol start="2">
            <li><strong>2.a</strong> – Montrer que le point I est le milieu de [MN] si et seulement si $z$ est une solution de (E).</li>
            <li><strong>2.b</strong> – Justifier que $z_A$ est une solution de (E).</li>
        </ol>

        <h4>Partie 3 – Parallélogramme OAKC</h4>
        <p>Soit $z_C$ la deuxième solution de (E), C le point d’affixe $z_C$ et K le point d’affixe $-2$.</p>
        <ol start="3">
            <li><strong>3.a</strong> – Donner la valeur de $z_A + z_C$.</li>
            <li><strong>3.b</strong> – Montrer que le quadrilatère $OAKC$ est un parallélogramme. Construire alors le point C.</li>
            <li><strong>3.c</strong> – Soit le point D d’affixe $z_D = \\frac{1}{2} z_C^2$. Construire le point D sur la figure.</li>
        </ol>

        <h4>Partie 4 – Produit et alignement</h4>
        <ol start="4">
            <li><strong>4.a</strong> – Écrire $(1+i)$ sous forme exponentielle. En déduire que $z_A \\cdot z_C = 2(\\sqrt{2}+\\sqrt{6}) e^{i5\\pi/4}$.</li>
            <li><strong>4.b</strong> – Montrer que les points O, A et D sont alignés.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces</h4>
        <ul>
            <li><strong>1.a :</strong> $z_A = 2(\\cos \\pi/6 + i\\sin \\pi/6) = \\sqrt{3} + i$.<br>
                $z_B = \\frac12 (\\sqrt{3}+i)^2 = 1 + i\\sqrt{3}$.</li>
            <li><strong>1.b :</strong> $z_I = \\frac{z_A+z_B}{2}$.</li>
            <li><strong>2.a :</strong> L’affixe du milieu de [MN] est $\\frac{z + \\frac12 z^2}{2}$. Égaliser avec $z_I$.</li>
            <li><strong>2.b :</strong> Vérifier que $z_A^2 + 2z_A = 2(1+\\sqrt{3})(1+i)$.</li>
            <li><strong>3.a :</strong> Somme des racines de (E) : $-2$.</li>
            <li><strong>3.b :</strong> $z_A + z_C = -2 = z_K$ → $\\overrightarrow{OA}+\\overrightarrow{OC} = \\overrightarrow{OK}$.</li>
            <li><strong>3.c :</strong> Calculer $z_C = -2 - z_A$, puis $z_D$.</li>
            <li><strong>4.a :</strong> $1+i = \\sqrt{2} e^{i\\pi/4}$. Le produit des racines est $c/a = -2(1+\\sqrt{3})(1+i)$.</li>
            <li><strong>4.b :</strong> Montrer que $\\frac{z_D}{z_A} \\in \\mathbb{R}$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Ne pas confondre $z_A$ et $z_B$.</li>
            <li>Dans 2.a, bien écrire l’affixe du milieu de [MN].</li>
            <li>Dans 3.b, pour montrer qu’un quadrilatère est un parallélogramme, utiliser la relation $z_A + z_C = z_K$.</li>
            <li>Dans 4.b, vérifier que le rapport est réel (pas de partie imaginaire).</li>
        </ul>
    `,

    questions: [

        // ========== Question 1.a ==========
        {
            id: 'prob6-q1a',
            texte: '1.a – Déterminer la forme algébrique de $z_A$ et $z_B$.',
            solution: `
                <p>$z_A = 2e^{i\\pi/6} = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right) = 2\\left(\\frac{\\sqrt{3}}{2} + \\frac{i}{2}\\right) = \\sqrt{3} + i$.</p>
                <p>$z_B = \\frac{1}{2} z_A^2 = \\frac{1}{2} (\\sqrt{3}+i)^2 = \\frac{1}{2} (3 + 2i\\sqrt{3} - 1) = \\frac{1}{2} (2 + 2i\\sqrt{3}) = 1 + i\\sqrt{3}$.</p>
                <p>$$\\boxed{z_A = \\sqrt{3} + i,\\qquad z_B = 1 + i\\sqrt{3}}$$</p>
            `
        },

        // ========== Question 1.b ==========
        {
            id: 'prob6-q1b',
            texte: '1.b – Vérifier que $z_I = \\frac{1+\\sqrt{3}}{2}(1+i)$.',
            solution: `
                <p>Le milieu I de [AB] a pour affixe :</p>
                $$z_I = \\frac{z_A + z_B}{2} = \\frac{(\\sqrt{3}+i) + (1+i\\sqrt{3})}{2} = \\frac{(1+\\sqrt{3}) + i(1+\\sqrt{3})}{2} = \\frac{1+\\sqrt{3}}{2}(1+i).$$
                <p>$$\\boxed{z_I = \\dfrac{1+\\sqrt{3}}{2}(1+i)}$$</p>
            `
        },

        // ========== Question 2.a ==========
        {
            id: 'prob6-q2a',
            texte: '2.a – Montrer que I est le milieu de [MN] ssi $z$ est solution de (E).',
            solution: `
                <p>Le milieu de [MN] a pour affixe :</p>
                $$z_{\\text{milieu}} = \\frac{z + \\frac12 z^2}{2}.$$
                <p>On veut $z_{\\text{milieu}} = z_I = \\frac{1+\\sqrt{3}}{2}(1+i)$.</p>
                <p>Donc $\\frac{z + \\frac12 z^2}{2} = \\frac{1+\\sqrt{3}}{2}(1+i)$.</p>
                <p>Multiplions par 2 : $z + \\frac12 z^2 = (1+\\sqrt{3})(1+i)$.</p>
                <p>Multiplions par 2 : $2z + z^2 = 2(1+\\sqrt{3})(1+i)$.</p>
                <p>Soit $z^2 + 2z - 2(1+\\sqrt{3})(1+i) = 0$, qui est exactement (E).</p>
                <p>Ainsi I est milieu de [MN] ssi $z$ est solution de (E).</p>
            `
        },

        // ========== Question 2.b ==========
        {
            id: 'prob6-q2b',
            texte: '2.b – Justifier que $z_A$ est une solution de (E).',
            solution: `
                <p>On a $z_A = \\sqrt{3}+i$.</p>
                <p>Calculons $z_A^2$ :</p>
                $$z_A^2 = (\\sqrt{3}+i)^2 = 3 + 2i\\sqrt{3} - 1 = 2 + 2i\\sqrt{3}.$$
                <p>Puis $2z_A = 2\\sqrt{3} + 2i$.</p>
                <p>Donc $z_A^2 + 2z_A = 2 + 2i\\sqrt{3} + 2\\sqrt{3} + 2i = 2(1+\\sqrt{3}) + 2i(1+\\sqrt{3}) = 2(1+\\sqrt{3})(1+i)$.</p>
                <p>Par conséquent, $z_A^2 + 2z_A - 2(1+\\sqrt{3})(1+i) = 0$, donc $z_A$ est bien solution de (E).</p>
            `
        },

        // ========== Question 3.a ==========
        {
            id: 'prob6-q3a',
            texte: '3.a – Donner la valeur de $z_A + z_C$.',
            solution: `
                <p>L’équation (E) : $z^2 + 2z - 2(1+\\sqrt{3})(1+i) = 0$.</p>
                <p>La somme des racines est $S = -\\frac{b}{a} = -2$.</p>
                <p>Donc $z_A + z_C = -2$.</p>
                <p>$$\\boxed{z_A + z_C = -2}$$</p>
            `
        },

        // ========== Question 3.b ==========
        {
            id: 'prob6-q3b',
            texte: '3.b – Montrer que $OAKC$ est un parallélogramme et construire C.',
            solution: `
                <p>On a $z_A + z_C = -2 = z_K$ (où $z_K = -2$).</p>
                <p>Cette égalité s’écrit $\\overrightarrow{OA} + \\overrightarrow{OC} = \\overrightarrow{OK}$ (en termes d’affixes).</p>
                <p>Les diagonales [AC] et [OK] se coupent en leur milieu (le point d’affixe $-1$), donc le quadrilatère $OAKC$ est un parallélogramme.</p>
                <p><strong>Construction de C :</strong> $z_C = -2 - z_A = -2 - (\\sqrt{3}+i) = -2 - \\sqrt{3} - i$. Placer le point de coordonnées $(-2-\\sqrt{3}, -1)$ sur la figure.</p>
            `
        },

        // ========== Question 3.c ==========
        {
            id: 'prob6-q3c',
            texte: '3.c – Construire le point D d’affixe $z_D = \\frac12 z_C^2$.',
            solution: `
                <p>$z_C = -2 - \\sqrt{3} - i$.</p>
                <p>Calculons $z_C^2$ :</p>
                <p>Posons $a = -2-\\sqrt{3}$, $b = -1$. Alors $(a+ib)^2 = a^2 - b^2 + 2iab$.</p>
                <p>$a^2 = (2+\\sqrt{3})^2 = 4 + 4\\sqrt{3} + 3 = 7 + 4\\sqrt{3}$.</p>
                <p>$b^2 = 1$, $2ab = 2(-2-\\sqrt{3})(-1) = 4 + 2\\sqrt{3}$.</p>
                <p>Donc $z_C^2 = (7+4\\sqrt{3} - 1) + i(4+2\\sqrt{3}) = 6 + 4\\sqrt{3} + i(4+2\\sqrt{3})$.</p>
                <p>Ainsi $z_D = \\frac12 z_C^2 = 3 + 2\\sqrt{3} + i(2+\\sqrt{3})$.</p>
                <p>Placer le point D de coordonnées $(3+2\\sqrt{3},\\; 2+\\sqrt{3})$ sur la figure.</p>
            `
        },

        // ========== Question 4.a ==========
        {
            id: 'prob6-q4a',
            texte: '4.a – Écrire $(1+i)$ sous forme exponentielle et en déduire $z_A \\cdot z_C$.',
            solution: `
                <p>$(1+i) = \\sqrt{2} e^{i\\pi/4}$.</p>
                <p>Le produit des racines de (E) est $P = \\frac{c}{a} = -2(1+\\sqrt{3})(1+i)$.</p>
                <p>Donc $z_A z_C = -2(1+\\sqrt{3})(1+i) = -2(1+\\sqrt{3})\\sqrt{2} e^{i\\pi/4}$.</p>
                <p>$2\\sqrt{2}(1+\\sqrt{3}) = 2\\sqrt{2} + 2\\sqrt{6}$.</p>
                <p>Et $ - e^{i\\pi/4} = e^{i(\\pi/4 + \\pi)} = e^{i5\\pi/4}$.</p>
                <p>Donc $$z_A z_C = 2(\\sqrt{2}+\\sqrt{6}) e^{i5\\pi/4}.$$</p>
                <p>$$\\boxed{z_A z_C = 2(\\sqrt{2}+\\sqrt{6}) e^{i5\\pi/4}}$$</p>
            `
        },

        // ========== Question 4.b ==========
        {
            id: 'prob6-q4b',
            texte: '4.b – Montrer que O, A, D sont alignés.',
            solution: `
                <p>O, A, D alignés ssi $\\dfrac{z_D}{z_A} \\in \\mathbb{R}$.</p>
                <p>$z_D = \\frac12 z_C^2$ et $z_C = -2 - z_A$.</p>
                <p>Calculons $\\dfrac{z_D}{z_A} = \\dfrac{z_C^2}{2z_A} = \\dfrac{(-2 - z_A)^2}{2z_A}$.</p>
                <p>Développons : $\\dfrac{4 + 4z_A + z_A^2}{2z_A} = \\dfrac{4}{2z_A} + \\dfrac{4z_A}{2z_A} + \\dfrac{z_A^2}{2z_A} = \\dfrac{2}{z_A} + 2 + \\dfrac{z_A}{2}$.</p>
                <p>Or $z_A = \\sqrt{3}+i$, donc $\\dfrac{2}{z_A} = \\dfrac{2(\\sqrt{3}-i)}{(\\sqrt{3})^2+1} = \\dfrac{2(\\sqrt{3}-i)}{4} = \\dfrac{\\sqrt{3}-i}{2}$.</p>
                <p>Alors $\\dfrac{z_D}{z_A} = \\dfrac{\\sqrt{3}-i}{2} + 2 + \\dfrac{\\sqrt{3}+i}{2} = \\dfrac{2\\sqrt{3}}{2} + 2 = \\sqrt{3} + 2$, qui est un nombre réel.</p>
                <p>Donc $\\dfrac{z_D}{z_A} \\in \\mathbb{R}$, ce qui prouve que O, A et D sont alignés.</p>
            `
        }
    ]
});