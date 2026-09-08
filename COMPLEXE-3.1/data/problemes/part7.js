// data/problemes/part7.js – Problème 8 : Équations complexes avec paramètre θ
// ========================================================================

if (!window.problemes) window.problemes = { items: [] };

window.problemes.items.push({

    id: 8,
    titre: "Équations complexes avec paramètre θ et configurations géométriques",
    enonce: `
        <p>Le plan est muni d’un repère orthonormé direct $(O,\\vec{u},\\vec{v})$.</p>

        <h4>Partie I – Résolution d'une équation</h4>
        <p>Résoudre dans $\\mathbb{C}$ l'équation : $z^{2}+i\\sqrt{3}\\,z - i = 0$.</p>

        <h4>Partie II – Équation avec paramètre θ</h4>
        <p>Soit $\\theta$ un réel de $\\left[0, \\dfrac{\\pi}{2}\\right]$. On considère l'équation :</p>
        $$(E) : z^{2} + (2i\\sin\\theta)z - 2i\\cos\\theta = 0.$$
        <ol>
            <li><strong>1.a</strong> – Vérifier que $(\\cos\\theta + i)^{2} = -\\sin^{2}\\theta + 2i\\cos\\theta$.</li>
            <li><strong>1.b</strong> – Résoudre l'équation $(E)$.</li>
        </ol>
        <p>On désigne par A, B et C les points d'affixes respectives :</p>
        $$a = i,\\qquad b = \\cos\\theta + (1-\\sin\\theta)i,\\qquad c = -\\cos\\theta - (1+\\sin\\theta)i.$$
        <ol start="2">
            <li><strong>2.a</strong> – Déterminer $\\theta$ pour que A, B et C soient alignés.</li>
            <li><strong>2.b</strong> – Déterminer $\\theta$ pour que B et C appartiennent à un cercle de centre O. Quel est le rayon de ce cercle ?</li>
        </ol>

        <!-- Figure en canvas -->
        <figure style="margin:20px 0; text-align:center;">
            <canvas class="figure-canvas" data-figure="points_ABC_theta" width="400" height="350" style="width:100%; max-width:400px; height:auto; aspect-ratio:400/350; background:var(--surface); border-radius:12px; border:1px solid var(--border);"></canvas>
            <figcaption style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
                Représentation des points A, B, C pour $\\theta = \\pi/4$ (exemple).
            </figcaption>
        </figure>
    `,

    astuces: `
        <h4>💡 Astuces générales</h4>
        <ul>
            <li><strong>Partie I :</strong> Utilisez le discriminant $\\Delta = (i\\sqrt{3})^2 - 4(1)(-i)$ et remarquez que $\\Delta = (1+2i)^2$.</li>
            <li><strong>1.a :</strong> Développez $(\\cos\\theta + i)^2$ et utilisez $\\cos^2\\theta = 1-\\sin^2\\theta$.</li>
            <li><strong>1.b :</strong> Calculez le discriminant de (E) et factorisez-le : $\\Delta = 4(\\cos\\theta + i)^2$.</li>
            <li><strong>2.a :</strong> Utilisez la colinéarité : $\\overrightarrow{AC} = \\lambda \\overrightarrow{AB}$ avec $\\lambda \\in \\mathbb{R}$.</li>
            <li><strong>2.b :</strong> B et C sont sur un cercle de centre O ssi $|b| = |c|$.</li>
        </ul>
    `,

    erreurs: `
        <h4>⚠️ Erreurs fréquentes</h4>
        <ul>
            <li>Oublier que $\\theta$ est restreint à $[0,\\pi/2]$, ce qui peut éliminer certaines solutions.</li>
            <li>Dans l'alignement, confondre les affixes des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.</li>
            <li>Pour le cercle de centre O, oublier que le rayon est le module commun de $b$ et $c$.</li>
            <li>Dans la résolution de la partie I, mal choisir la racine carrée de $\\Delta$ (il y a deux racines opposées).</li>
            <li>Dans 1.b, ne pas oublier de vérifier que la racine trouvée est bien solution en la réinjectant.</li>
        </ul>
    `,

    questions: [

        // ======================================================================
        // Partie I – Résolution de z² + i√3 z - i = 0
        // ======================================================================
        {
            id: 'prob8-q1',
            texte: 'Résoudre $z^{2}+i\\sqrt{3}\\,z - i = 0$.',
            solution: `
                <div class="solution-detailed">
                    <h4>📌 Rappel de cours</h4>
                    <p>Pour une équation du second degré $az^2 + bz + c = 0$ dans $\\mathbb{C}$ ($a \\neq 0$), on calcule le discriminant $\\Delta = b^2 - 4ac$. Si $\\Delta \\neq 0$, on choisit une racine carrée $\\delta$ de $\\Delta$ (c'est-à-dire un nombre complexe tel que $\\delta^2 = \\Delta$). Alors les solutions sont $z = \\dfrac{-b \\pm \\delta}{2a}$.</p>

                    <h4>🔧 Méthode</h4>
                    <ol>
                        <li>Identifier $a$, $b$, $c$.</li>
                        <li>Calculer $\\Delta$.</li>
                        <li>Trouver une racine carrée $\\delta$ de $\\Delta$ (ici par identification directe).</li>
                        <li>Appliquer la formule.</li>
                    </ol>

                    <h4>📝 Solution détaillée</h4>
                    <p>On a $a=1$, $b=i\\sqrt{3}$, $c=-i$.</p>
                    <p>Calcul du discriminant :</p>
                    $$\\Delta = (i\\sqrt{3})^2 - 4(1)(-i) = -3 + 4i.$$
                    <p>On remarque que $(1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i - 4 = -3 + 4i$.</p>
                    <p>Donc $\\Delta = (1+2i)^2$. On choisit $\\delta = 1+2i$ comme racine carrée de $\\Delta$.</p>
                    <p>Alors les solutions sont :</p>
                    $$z = \\frac{-i\\sqrt{3} \\pm \\delta}{2} = \\frac{-i\\sqrt{3} \\pm (1+2i)}{2}.$$
                    <p>Calculons les deux :</p>
                    $$z_1 = \\frac{-i\\sqrt{3} + 1 + 2i}{2} = \\frac{1 + (2-\\sqrt{3})i}{2},$$
                    $$z_2 = \\frac{-i\\sqrt{3} - 1 - 2i}{2} = \\frac{-1 - (2+\\sqrt{3})i}{2}.$$
                    <p><strong>Réponse :</strong> $\\boxed{z_1 = \\dfrac{1 + (2-\\sqrt{3})i}{2},\\quad z_2 = \\dfrac{-1 - (2+\\sqrt{3})i}{2}}$.</p>

                    <h4>💡 Astuce</h4>
                    <p>Pour vérifier vos résultats, calculez la somme et le produit des racines : $z_1+z_2 = -b/a = -i\\sqrt{3}$ et $z_1 z_2 = c/a = -i$.</p>

                    <h4>⚠️ Erreur fréquente</h4>
                    <p>Ne pas oublier que $\\Delta$ est complexe ; il faut bien trouver une racine carrée complexe. Ici, $(1+2i)^2$ est la bonne factorisation.</p>
                </div>
            `
        },

        // ======================================================================
        // Question 1.a – Vérification de l'identité
        // ======================================================================
        {
            id: 'prob8-q1a',
            texte: '1.a – Vérifier que $(\\cos\\theta + i)^{2} = -\\sin^{2}\\theta + 2i\\cos\\theta$.',
            solution: `
                <div class="solution-detailed">
                    <h4>📌 Rappel de cours</h4>
                    <p>On utilise le développement du carré d'une somme : $(a+b)^2 = a^2 + 2ab + b^2$, avec $i^2 = -1$.</p>
                    <p>On rappelle aussi que $\\cos^2\\theta + \\sin^2\\theta = 1$.</p>

                    <h4>🔧 Méthode</h4>
                    <p>Développer l'expression de gauche et simplifier en utilisant les identités trigonométriques.</p>

                    <h4>📝 Solution détaillée</h4>
                    $$(\\cos\\theta + i)^2 = \\cos^2\\theta + 2i\\cos\\theta + i^2 = \\cos^2\\theta - 1 + 2i\\cos\\theta.$$
                    <p>Or $\\cos^2\\theta - 1 = -\\sin^2\\theta$ (d'après $\\cos^2\\theta + \\sin^2\\theta = 1$).</p>
                    <p>Donc $(\\cos\\theta + i)^2 = -\\sin^2\\theta + 2i\\cos\\theta$, ce qui est bien l'égalité demandée.</p>

                    <h4>💡 Astuce</h4>
                    <p>Cette identité est souvent utilisée pour factoriser des équations où apparaissent $\\cos\\theta$ et $\\sin\\theta$.</p>

                    <h4>⚠️ Erreur fréquente</h4>
                    <p>Oublier que $i^2 = -1$ et écrire $\\cos^2\\theta + 1 + 2i\\cos\\theta$ au lieu de $\\cos^2\\theta - 1 + 2i\\cos\\theta$.</p>
                </div>
            `
        },

        // ======================================================================
        // Question 1.b – Résolution de (E) avec Δ = 4(cosθ + i)²
        // ======================================================================
        {
            id: 'prob8-q1b',
            texte: "1.b – Résoudre l'équation $(E) : z^{2} + (2i\\sin\\theta)z - 2i\\cos\\theta = 0$.",
            solution: `
                <div class="solution-detailed">
                    <h4>📌 Rappel de cours</h4>
                    <p>Pour une équation quadratique $az^2 + bz + c = 0$, le discriminant est $\\Delta = b^2 - 4ac$.</p>
                    <p>Si on trouve une racine carrée $\\delta$ de $\\Delta$, les solutions sont $z = \\dfrac{-b \\pm \\delta}{2a}$.</p>

                    <h4>🔧 Méthode</h4>
                    <ol>
                        <li>Calculer $\\Delta$.</li>
                        <li>Factoriser $\\Delta$ en utilisant l'identité de 1.a : $\\Delta = 4(\\cos\\theta + i)^2$.</li>
                        <li>Choisir $\\delta = 2(\\cos\\theta + i)$ comme racine carrée.</li>
                        <li>Appliquer la formule avec $a=1$, $b=2i\\sin\\theta$.</li>
                    </ol>

                    <h4>📝 Solution détaillée</h4>
                    <p>On a $a=1$, $b=2i\\sin\\theta$, $c=-2i\\cos\\theta$.</p>
                    $$\\Delta = (2i\\sin\\theta)^2 - 4(1)(-2i\\cos\\theta) = -4\\sin^2\\theta + 8i\\cos\\theta.$$
                    <p>D'après 1.a, $(\\cos\\theta + i)^2 = -\\sin^2\\theta + 2i\\cos\\theta$.</p>
                    <p>En multipliant par 4 : $4(\\cos\\theta + i)^2 = -4\\sin^2\\theta + 8i\\cos\\theta = \\Delta$.</p>
                    <p>Donc $\\Delta = 4(\\cos\\theta + i)^2$. On choisit $\\delta = 2(\\cos\\theta + i)$ comme racine carrée.</p>
                    <p>Alors :</p>
                    $$z = \\frac{-2i\\sin\\theta \\pm \\delta}{2} = \\frac{-2i\\sin\\theta \\pm 2(\\cos\\theta + i)}{2} = -i\\sin\\theta \\pm (\\cos\\theta + i).$$
                    <p>Pour le signe $+$ : $z_1 = -i\\sin\\theta + \\cos\\theta + i = \\cos\\theta + i(1-\\sin\\theta)$.</p>
                    <p>Pour le signe $-$ : $z_2 = -i\\sin\\theta - \\cos\\theta - i = -\\cos\\theta - i(1+\\sin\\theta)$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{z_1 = \\cos\\theta + i(1-\\sin\\theta),\\quad z_2 = -\\cos\\theta - i(1+\\sin\\theta)}$.</p>
                    <p><em>Remarque :</em> Ces solutions correspondent bien aux affixes de B et C données dans l'énoncé !</p>

                    <h4>💡 Astuce</h4>
                    <p>La factorisation de $\\Delta$ permet d'éviter un calcul lourd. On voit directement que les solutions sont liées aux points B et C.</p>

                    <h4>⚠️ Erreur fréquente</h4>
                    <p>Ne pas oublier le facteur 4 dans $\\Delta$ et prendre $\\delta = \\cos\\theta + i$ au lieu de $2(\\cos\\theta + i)$.</p>
                </div>
            `
        },

        // ======================================================================
        // Question 2.a – Alignement de A, B, C (méthode simplifiée)
        // ======================================================================
        {
            id: 'prob8-q2a',
            texte: '2.a – Déterminer $\\theta$ pour que A, B et C soient alignés.',
            solution: `
                <div class="solution-detailed">
                    <h4>📌 Rappel de cours</h4>
                    <p>Trois points A, B, C sont alignés ssi les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires, c'est-à-dire qu'il existe un réel $\\lambda$ tel que $\\overrightarrow{AC} = \\lambda \\overrightarrow{AB}$.</p>
                    <p>En termes d'affixes : $c-a = \\lambda (b-a)$ avec $\\lambda \\in \\mathbb{R}$.</p>

                    <h4>🔧 Méthode</h4>
                    <ol>
                        <li>Calculer $b-a$ et $c-a$.</li>
                        <li>Écrire la condition $c-a = \\lambda (b-a)$.</li>
                        <li>Identifier les parties réelle et imaginaire pour trouver $\\lambda$ et $\\theta$.</li>
                        <li>Prendre en compte l'intervalle de $\\theta$.</li>
                    </ol>

                    <h4>📝 Solution détaillée</h4>
                    <p>On a : $a = i$, $b = \\cos\\theta + (1-\\sin\\theta)i$, $c = -\\cos\\theta - (1+\\sin\\theta)i$.</p>
                    <p>Calculons :</p>
                    $$b-a = \\cos\\theta + (1-\\sin\\theta)i - i = \\cos\\theta - i\\sin\\theta = e^{-i\\theta}.$$
                    $$c-a = -\\cos\\theta - (1+\\sin\\theta)i - i = -\\cos\\theta - (2+\\sin\\theta)i.$$
                    <p>On cherche $\\lambda \\in \\mathbb{R}$ tel que $c-a = \\lambda (b-a)$ :</p>
                    $$-\\cos\\theta - (2+\\sin\\theta)i = \\lambda (\\cos\\theta - i\\sin\\theta) = \\lambda\\cos\\theta - i\\lambda\\sin\\theta.$$
                    <p>Par identification des parties réelle et imaginaire :</p>
                    $$\\begin{cases}
                        -\\cos\\theta = \\lambda\\cos\\theta \\quad (1) \\\\
                        -(2+\\sin\\theta) = -\\lambda\\sin\\theta \\quad (2)
                    \\end{cases}$$
                    <p>De (1) : $\\cos\\theta (\\lambda + 1) = 0$.</p>
                    <p><strong>Cas 1 :</strong> $\\cos\\theta = 0$. Sur $[0, \\pi/2]$, cela donne $\\theta = \\pi/2$. Alors (2) donne $- (2+1) = -\\lambda \\cdot 1 \\Rightarrow -3 = -\\lambda \\Rightarrow \\lambda = 3$, qui est bien réel. Donc $\\theta = \\pi/2$ convient.</p>
                    <p><strong>Cas 2 :</strong> $\\lambda = -1$. Alors (2) donne $-(2+\\sin\\theta) = -(-1)\\sin\\theta = \\sin\\theta \\Rightarrow -2 - \\sin\\theta = \\sin\\theta \\Rightarrow -2 = 2\\sin\\theta \\Rightarrow \\sin\\theta = -1$. Sur $[0, \\pi/2]$, cela n'a pas de solution.</p>
                    <p>Donc la seule solution est $\\theta = \\pi/2$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\theta = \\dfrac{\\pi}{2}}$.</p>

                    <h4>💡 Astuce</h4>
                    <p>Cette méthode est plus rapide que le calcul du déterminant. Elle exploite directement la définition de la colinéarité.</p>

                    <h4>⚠️ Erreur fréquente</h4>
                    <p>Ne pas oublier de vérifier que $\\lambda$ trouvé est bien réel (ici c'est le cas).</p>
                </div>
            `
        },

        // ======================================================================
        // Question 2.b – B et C sur un cercle de centre O
        // ======================================================================
        {
            id: 'prob8-q2b',
            texte: '2.b – Déterminer $\\theta$ pour que B et C appartiennent à un cercle de centre O. Quel est le rayon de ce cercle ?',
            solution: `
                <div class="solution-detailed">
                    <h4>📌 Rappel de cours</h4>
                    <p>Un point M d'affixe $z$ appartient au cercle de centre O (l'origine) et de rayon $r$ ssi $|z| = r$.</p>
                    <p>Pour que deux points B et C appartiennent au même cercle de centre O, il faut que leurs modules soient égaux.</p>

                    <h4>🔧 Méthode</h4>
                    <ol>
                        <li>Calculer $|b|^2$ et $|c|^2$.</li>
                        <li>Écrire l'égalité $|b|^2 = |c|^2$.</li>
                        <li>Résoudre l'équation en $\\theta$ sur l'intervalle donné.</li>
                        <li>En déduire le rayon commun $r = |b| = |c|$.</li>
                    </ol>

                    <h4>📝 Solution détaillée</h4>
                    <p>On a $b = \\cos\\theta + (1-\\sin\\theta)i$ et $c = -\\cos\\theta - (1+\\sin\\theta)i$.</p>
                    <p>Calculons les carrés des modules :</p>
                    $$|b|^2 = \\cos^2\\theta + (1-\\sin\\theta)^2 = \\cos^2\\theta + 1 - 2\\sin\\theta + \\sin^2\\theta = 2 - 2\\sin\\theta.$$
                    $$|c|^2 = (-\\cos\\theta)^2 + (-(1+\\sin\\theta))^2 = \\cos^2\\theta + (1+\\sin\\theta)^2 = 2 + 2\\sin\\theta.$$
                    <p>On veut $|b| = |c|$, donc $|b|^2 = |c|^2$ :</p>
                    $$2 - 2\\sin\\theta = 2 + 2\\sin\\theta \\iff -2\\sin\\theta = 2\\sin\\theta \\iff 4\\sin\\theta = 0 \\iff \\sin\\theta = 0.$$
                    <p>Sur $[0, \\pi/2]$, $\\sin\\theta = 0 \\iff \\theta = 0$.</p>
                    <p>Pour $\\theta=0$, on a $|b|^2 = |c|^2 = 2$, donc $|b| = |c| = \\sqrt{2}$.</p>
                    <p>Ainsi, B et C appartiennent au cercle de centre O et de rayon $\\sqrt{2}$.</p>
                    <p><strong>Réponse :</strong> $\\boxed{\\theta = 0,\\ \\text{rayon } \\sqrt{2}}$.</p>

                    <h4>💡 Astuce</h4>
                    <p>L'égalité $|b|^2 = |c|^2$ se simplifie rapidement ici en une équation trigonométrique simple.</p>

                    <h4>⚠️ Erreur fréquente</h4>
                    <p>Ne pas oublier que le rayon est $\\sqrt{|b|^2}$ et non $|b|^2$. Pour $\\theta=0$, $|b| = \\sqrt{2}$.</p>
                </div>
            `
        }
    ]
});