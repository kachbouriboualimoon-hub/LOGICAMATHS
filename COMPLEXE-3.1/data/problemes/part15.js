// data/problemes/part15.js – Problème 16 : Équation paramétrique complexe, arguments et triangle isocèle (Page 14 du PDF)
// ====================================================================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 16,
    titre: "Équation paramétrique complexe, arguments et triangle isocèle",
    enonce: `
        <p>Soit $\\alpha \\in \\mathbb{C} \\setminus \\{i\\}$ et $(E_\\alpha)$ l’équation d’inconnue $z$ :</p>
        $$(\\alpha - i)z^2 - [2(\\alpha - i) + i\\alpha]z + 2i\\alpha = 0.$$

        <p>On suppose que le plan est muni d’un repère orthonormé direct $(O; \\vec{u}, \\vec{v})$.</p>

        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="probleme16_triangle" width="400" height="400" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/400; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Triangle $OM'M''$ isocèle en O – points $M'(z')$ et $M''(i)$.
            </figcaption>
        </figure>

        <h4>I. Dans cette partie, on prend $\\alpha = 1$.</h4>
        <p>Donc $(E_1)$ s’écrit : $(1 - i)z^2 - [2 - i]z + 2i = 0$.</p>
        <ol>
            <li><strong>I.1</strong> – Calculer $(2 - 3i)^2$.</li>
            <li><strong>I.2</strong> – Résoudre $(E_1)$. On notera $z_1$ et $z_2$ les solutions telles que $\\mathrm{Re}(z_1) < \\mathrm{Re}(z_2)$.</li>
            <li><strong>I.3</strong> – Donner un argument de $z_1$.</li>
            <li><strong>I.4</strong> – Montrer que $z_1^{2016}$ est un réel.</li>
        </ol>

        <h4>II. Dans cette partie, on prend $\\alpha = e^{i\\theta}$ avec $\\theta \\in ]0; \\frac{\\pi}{2}[$.</h4>
        <ol>
            <li><strong>II.1</strong> – Montrer que $\\alpha - i = 2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}$.</li>
            <li><strong>II.2</strong> – Vérifier que 2 est une solution de $(E_\\alpha)$.</li>
            <li><strong>II.3</strong> – Exprimer la $2^e$ solution $z'$ de $(E_\\alpha)$ en fonction de $\\alpha$.</li>
            <li><strong>II.4</strong> – Donner la forme exponentielle de $z'$.</li>
            <li><strong>II.5</strong> – Soient les deux points $M'(z')$ et $M''(i)$. Déterminer la valeur de $\\theta \\in ]0; \\frac{\\pi}{2}[$ pour laquelle le triangle $OM'M''$ est isocèle de sommet $O$.</li>
        </ol>
    `,

    astuces: `
        <h4>💡 Astuces – Rappels de cours</h4>
        <ul>
            <li><strong>Calcul de carré :</strong> $(a+ib)^2 = a^2 - b^2 + 2iab$.</li>
            <li><strong>Résolution d’équation :</strong> Pour un trinôme $az^2+bz+c=0$, discriminant $\\Delta = b^2 - 4ac$.</li>
            <li><strong>Argument :</strong> $z = r e^{i\\theta} \\Rightarrow \\arg(z) \\equiv \\theta \\pmod{2\\pi}$.</li>
            <li><strong>Puissance d’un complexe :</strong> $z^n = r^n e^{in\\theta}$ est réel ssi $n\\theta \\equiv 0 \\pmod{\\pi}$.</li>
            <li><strong>Forme exponentielle :</strong> Pour $\\alpha = e^{i\\theta}$, utiliser les formules d’Euler pour factoriser $\\alpha - i$.</li>
            <li><strong>Triangle isocèle de sommet O :</strong> $OM' = OM''$ (rayons égaux), donc $|z'| = |i| = 1$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Dans I.1, oublier le terme $2ab$ ou le signe de $i^2$.</li>
            <li>Dans I.2, ne pas simplifier les racines complexes correctement.</li>
            <li>Pour $z_1^{2016}$, ne pas utiliser correctement l’argument pour montrer que c’est un réel.</li>
            <li>Dans II.1, confondre les formules de factorisation avec les angles.</li>
            <li>Pour II.3, mal exprimer l’autre racine en fonction de $\\alpha$.</li>
        </ul>
    `,

    questions: [

        // ========== I.1 ==========
        {
            id: 'prob16-i1',
            texte: 'I.1 – Calculer $(2 - 3i)^2$.',
            solution: `
                $$(2 - 3i)^2 = 2^2 - 2\\cdot 2\\cdot 3i + (3i)^2 = 4 - 12i - 9 = -5 - 12i.$$
                $$\\boxed{(2 - 3i)^2 = -5 - 12i}$$
            `
        },

        // ========== I.2 (avec δ) ==========
        {
            id: 'prob16-i2',
            texte: 'I.2 – Résoudre $(E_1) : (1-i)z^2 - (2-i)z + 2i = 0$.',
            solution: `
                <p>On a $a = 1-i$, $b = -(2-i) = -2+i$, $c = 2i$.</p>
                <p>Calcul du discriminant :</p>
                $$\\Delta = b^2 - 4ac = (-2+i)^2 - 4(1-i)(2i)$$
                $$= (4 - 4i - 1) - 4(2i - 2i^2) = (3 - 4i) - 4(2i + 2) = 3 - 4i - 8i - 8 = -5 - 12i.$$
                <p>D’après I.1, $\\Delta = (2 - 3i)^2$. On note $\\delta = 2 - 3i$ (une racine carrée de $\\Delta$).</p>
                <p>Les racines sont :</p>
                $$z = \\frac{-b \\pm \\delta}{2a} = \\frac{(2-i) \\pm (2-3i)}{2(1-i)}.$$
                <p>Cas $+$ : $z_1 = \\frac{(2-i) + (2-3i)}{2(1-i)} = \\frac{4 - 4i}{2(1-i)} = \\frac{2(1-i)}{1-i} = 2$.</p>
                <p>Cas $-$ : $z_2 = \\frac{(2-i) - (2-3i)}{2(1-i)} = \\frac{2i}{2(1-i)} = \\frac{i}{1-i} = \\frac{i(1+i)}{(1-i)(1+i)} = \\frac{i-1}{2} = -\\frac12 + \\frac12 i$.</p>
                <p>On a $\\mathrm{Re}(z_2) = -1/2$, $\\mathrm{Re}(z_1) = 2$.</p>
                <p>Avec la condition $\\mathrm{Re}(z_1) < \\mathrm{Re}(z_2)$, on doit échanger les noms : $\\boxed{z_1 = -\\frac12 + \\frac12 i,\\quad z_2 = 2}$.</p>
            `
        },

        // ========== I.3 ==========
        {
            id: 'prob16-i3',
            texte: 'I.3 – Donner un argument de $z_1$.',
            solution: `
                <p>On a $z_1 = -\\frac12 + \\frac12 i$. Son module est $\\sqrt{\\frac14 + \\frac14} = \\frac{\\sqrt2}{2}$.</p>
                <p>On écrit $z_1 = \\frac{\\sqrt2}{2}\\left(-\\frac{1}{\\sqrt2} + i\\frac{1}{\\sqrt2}\\right) = \\frac{\\sqrt2}{2}\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right)$.</p>
                <p>Donc $\\arg(z_1) \\equiv \\frac{3\\pi}{4} \\pmod{2\\pi}$.</p>
                $$\\boxed{\\arg(z_1) = \\frac{3\\pi}{4} + 2k\\pi,\\ k\\in\\mathbb{Z}}$$
            `
        },

        // ========== I.4 ==========
        {
            id: 'prob16-i4',
            texte: 'I.4 – Montrer que $z_1^{2016}$ est un réel.',
            solution: `
                <p>On a $z_1 = \\frac{\\sqrt2}{2} e^{i3\\pi/4}$.</p>
                <p>Donc $z_1^{2016} = \\left(\\frac{\\sqrt2}{2}\\right)^{2016} e^{i\\cdot 2016\\cdot \\frac{3\\pi}{4}} = r\\, e^{i\\cdot 2016\\cdot \\frac{3\\pi}{4}}$.</p>
                <p>Calculons l’argument : $2016 \\times \\frac{3\\pi}{4} = 2016 \\times 3\\pi / 4 = 504 \\times 3\\pi = 1512\\pi$.</p>
                <p>Puisque $1512\\pi$ est un multiple de $\\pi$, $e^{i\\cdot 1512\\pi} = \\cos(1512\\pi) + i\\sin(1512\\pi) = \\pm 1$ (un réel).</p>
                <p>Donc $z_1^{2016}$ est un réel.</p>
            `
        },

        // ========== II.1 (modifiée : développement du second membre) ==========
        {
            id: 'prob16-ii1',
            texte: 'II.1 – Montrer que $\\alpha - i = 2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}$.',
            solution: `
                <p>On part du membre de droite :</p>
                $$2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}.$$
                <p>On remplace le cosinus par son expression exponentielle :</p>
                $$\\cos X = \\frac{e^{iX} + e^{-iX}}{2}, \\quad \\text{avec } X = \\frac{\\theta}{2} + \\frac{\\pi}{4}.$$
                <p>On obtient :</p>
                $$2 \\cdot \\frac{e^{i(\\theta/2 + \\pi/4)} + e^{-i(\\theta/2 + \\pi/4)}}{2} \\cdot e^{i(\\theta/2 - \\pi/4)}$$
                $$= \\left(e^{i(\\theta/2 + \\pi/4)} + e^{-i(\\theta/2 + \\pi/4)}\\right) e^{i(\\theta/2 - \\pi/4)}$$
                $$= e^{i(\\theta/2 + \\pi/4 + \\theta/2 - \\pi/4)} + e^{-i(\\theta/2 + \\pi/4) + i(\\theta/2 - \\pi/4)}$$
                $$= e^{i\\theta} + e^{-i\\pi/2} = e^{i\\theta} - i = \\alpha - i.$$
                <p>L’égalité est donc vérifiée.</p>
            `
        },

        // ========== II.2 ==========
        {
            id: 'prob16-ii2',
            texte: 'II.2 – Vérifier que 2 est une solution de $(E_\\alpha)$.',
            solution: `
                <p>On remplace $z$ par 2 dans l’équation :</p>
                $$(\\alpha - i)\\cdot 2^2 - [2(\\alpha - i) + i\\alpha]\\cdot 2 + 2i\\alpha = 4(\\alpha - i) - 4(\\alpha - i) - 2i\\alpha + 2i\\alpha = 0.$$
                <p>Donc $z=2$ est bien une solution.</p>
            `
        },

        // ========== II.3 ==========
        {
            id: 'prob16-ii3',
            texte: 'II.3 – Exprimer la $2^e$ solution $z\'$ de $(E_\\alpha)$ en fonction de $\\alpha$.',
            solution: `
                <p>L’équation est $(\\alpha - i)z^2 - [2(\\alpha - i) + i\\alpha]z + 2i\\alpha = 0$.</p>
                <p>On sait que $z_1 = 2$ est une solution. Soit $z\'$ l’autre solution.</p>
                <p>Le produit des racines est $\\dfrac{c}{a} = \\dfrac{2i\\alpha}{\\alpha - i}$.</p>
                <p>Donc $2 \\cdot z\' = \\dfrac{2i\\alpha}{\\alpha - i}$, d’où $z\' = \\dfrac{i\\alpha}{\\alpha - i}$.</p>
                $$\\boxed{z\' = \\frac{i\\alpha}{\\alpha - i}}$$
            `
        },

        // ========== II.4 ==========
        {
            id: 'prob16-ii4',
            texte: 'II.4 – Donner la forme exponentielle de $z\'$.',
            solution: `
                <p>On a $\\alpha = e^{i\\theta}$.</p>
                $$z\' = \\frac{i e^{i\\theta}}{e^{i\\theta} - i}.$$
                <p>D’après II.1, $e^{i\\theta} - i = 2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}$.</p>
                <p>Donc :</p>
                $$z\' = \\frac{i e^{i\\theta}}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}} = \\frac{1}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)} \\cdot i \\, e^{i\\theta - i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{4}\\right)}.$$
                <p>On a $i = e^{i\\pi/2}$.</p>
                $$z\' = \\frac{1}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)} e^{i\\left(\\frac{\\pi}{2} + \\theta - \\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)} = \\frac{1}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)} e^{i\\left(\\frac{\\theta}{2} + \\frac{3\\pi}{4}\\right)}.$$
                <p>Comme $\\theta \\in ]0, \\pi/2[$, $\\frac{\\theta}{2} + \\frac{\\pi}{4} \\in ]\\pi/4, \\pi/2[$, donc le cosinus est strictement positif.</p>
                $$\\boxed{z\' = \\frac{e^{i(\\theta/2 + 3\\pi/4)}}{2\\cos(\\theta/2 + \\pi/4)}}$$
            `
        },

        // ========== II.5 ==========
        {
            id: 'prob16-ii5',
            texte: 'II.5 – Déterminer $\\theta$ pour que le triangle $OM\'M\'\'$ soit isocèle de sommet $O$.',
            solution: `
                <p>On a $M\'(z\')$ et $M\'\'(i)$.</p>
                <p>Le triangle est isocèle de sommet $O$ si $OM\' = OM\'\'$, soit $|z\'| = |i| = 1$.</p>
                <p>D’après II.4, $|z\'| = \\dfrac{1}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)}$.</p>
                <p>On doit donc résoudre :</p>
                $$\\frac{1}{2\\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right)} = 1 \\quad\\Longleftrightarrow\\quad \\cos\\left(\\frac{\\theta}{2} + \\frac{\\pi}{4}\\right) = \\frac12.$$
                <p>Comme $\\frac{\\theta}{2} + \\frac{\\pi}{4} \\in ]\\pi/4, \\pi/2[$, la solution est $\\frac{\\theta}{2} + \\frac{\\pi}{4} = \\frac{\\pi}{3}$.</p>
                <p>Donc $\\frac{\\theta}{2} = \\frac{\\pi}{3} - \\frac{\\pi}{4} = \\frac{\\pi}{12}$, d’où $\\theta = \\frac{\\pi}{6}$.</p>
                $$\\boxed{\\theta = \\frac{\\pi}{6}}$$
            `
        }
    ]
});