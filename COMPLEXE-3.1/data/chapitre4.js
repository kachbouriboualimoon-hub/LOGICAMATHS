// data/chapitre4.js – Trigonométrie, Moivre, Euler et applications géométriques (VERSION ENRICHIE)
// ===============================================================================================
// Contient 7 exercices mêlant calculs algébriques (Ch1), module/géométrie (Ch2), argument (Ch3) et trigonométrie complexe (Ch4)

data.chapitres.push({
    id: 4,
    titre: "Trigonométrie, Moivre et Euler",
    resume: `
        <p>Les nombres complexes offrent des outils puissants pour la trigonométrie.</p>
        <ul>
            <li><strong>Formule de Moivre :</strong> $(\\cos x + i\\sin x)^n = \\cos(nx) + i\\sin(nx)$</li>
            <li><strong>Formules d'Euler :</strong> $\\cos x = \\dfrac{e^{ix}+e^{-ix}}{2}$, $\\sin x = \\dfrac{e^{ix}-e^{-ix}}{2i}$</li>
            <li><strong>Linéarisation :</strong> Exprimer $\\sin^n x$ ou $\\cos^n x$ comme combinaison linéaire de $\\sin(kx)$ ou $\\cos(kx)$.</li>
        </ul>
        <p><em>Ce chapitre synthétise l'algèbre (Ch1), la géométrie (Ch2) et l'argument (Ch3) pour résoudre des problèmes trigonométriques.</em></p>
    `,
    rappel: `
        <div class="theoreme-block">
            <h4>📘 Formule de Moivre</h4>
            <p>Pour tout $n \\in \\mathbb{N}$ et tout $x \\in \\mathbb{R}$ :</p>
            $$(\\cos x + i\\sin x)^n = \\cos(nx) + i\\sin(nx).$$
            <p><em>(Conséquence directe de la propriété $\\arg(z^n)=n\\arg(z)$ du Chapitre 3)</em></p>
        </div>
        <div class="theoreme-block">
            <h4>📘 Formules d'Euler</h4>
            <p>Pour tout $x \\in \\mathbb{R}$ :</p>
            $$\\cos x = \\dfrac{e^{ix} + e^{-ix}}{2}, \\quad \\sin x = \\dfrac{e^{ix} - e^{-ix}}{2i}.$$
            <p><em>(Découlent de la forme exponentielle du Chapitre 3)</em></p>
        </div>
        <div class="theoreme-block">
            <h4>📘 Linéarisation</h4>
            <p>Les formules d'Euler permettent d'exprimer $\\cos^n x$ ou $\\sin^n x$ comme une combinaison linéaire de $\\cos(kx)$ et $\\sin(kx)$.</p>
            <p><strong>Exemple (Ch1 + Ch4) :</strong> $\\sin^3 x = \\dfrac{3\\sin x - \\sin(3x)}{4}$.</p>
        </div>
        <div class="theoreme-block">
            <h4>📘 Calcul d'angles remarquables</h4>
            <p>En utilisant le produit de deux complexes (Ch1), leurs modules (Ch2) et leurs arguments (Ch3), on déduit les valeurs exactes de cos et sin d'angles non usuels.</p>
            <p><strong>Exemple :</strong> $(1+i)(\\sqrt{3}-i) = 2\\sqrt{2} e^{i\\pi/12}$ permet de calculer $\\cos(\\pi/12)$ et $\\sin(\\pi/12)$.</p>
        </div>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Linéarisation de $\\cos^n x$ :</strong> Utiliser $\\cos x = \\dfrac{e^{ix}+e^{-ix}}{2}$ (pas de $i$ au dénominateur). Le résultat s'exprime en $\\cos(kx)$.
        </div>
        <div class="theoreme-block">
            <strong>Linéarisation de $\\sin^n x$ :</strong> Utiliser $\\sin x = \\dfrac{e^{ix}-e^{-ix}}{2i}$. Le résultat s'exprime en $\\sin(kx)$ si $n$ est impair, en $\\cos(kx)$ si $n$ est pair.
        </div>
        <div class="theoreme-block">
            <strong>Développement de $\\cos(nx)$ et $\\sin(nx)$ :</strong> Utiliser la formule de Moivre et le binôme de Newton (Ch1).<br>
            Exemple : $\\cos(3x) = 4\\cos^3 x - 3\\cos x$, $\\sin(3x) = 3\\sin x - 4\\sin^3 x$.
        </div>
        <div class="theoreme-block">
            <strong>Lien avec la géométrie (Ch2 + Ch4) :</strong> L'aire d'un parallélogramme formé par les vecteurs d'affixes $z_A$ et $z_B$ est $|\\Im(\\overline{z_A} z_B)|$ (ou $|\\det|$). La linéarisation permet d'étudier les variations de cette aire.
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>📝 Linéariser $\\sin^n x$ (Ch1 + Ch4) :</strong>
            <ol>
                <li>Écrire $\\sin x = \\dfrac{e^{ix} - e^{-ix}}{2i}$.</li>
                <li>Élever à la puissance $n$ et développer avec la formule du binôme (Ch1).</li>
                <li>Regrouper les termes $e^{ikx}$ et $e^{-ikx}$ pour faire apparaître $\\cos(kx)$ ou $\\sin(kx)$.</li>
            </ol>
            <p><em>Astuce :</em> Si $n$ est pair, on obtient des $\\cos(kx)$ ; si $n$ est impair, pour le sinus, on obtient des $\\sin(kx)$.</p>
        </div>
        <div class="method-box">
            <strong>📝 Déduire des valeurs exactes d'angles (Ch1 + Ch2 + Ch3 + Ch4) :</strong>
            <ol>
                <li>Choisir deux complexes $z_1$ et $z_2$ dont les arguments sont connus et dont la somme donne l'angle cherché.</li>
                <li>Calculer $z_1 z_2$ sous forme algébrique (Ch1) et sous forme exponentielle (Ch2 + Ch3).</li>
                <li>Égaliser les parties réelles et imaginaires pour obtenir les valeurs exactes.</li>
            </ol>
        </div>
        <div class="method-box">
            <strong>📝 Optimiser une aire trigonométrique (Ch2 + Ch4) :</strong>
            <ol>
                <li>Exprimer l'aire en fonction d'un angle $\\theta$.</li>
                <li>Linéariser ou dériver l'expression pour trouver le maximum.</li>
                <li>Utiliser les valeurs remarquables pour conclure.</li>
            </ol>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour linéariser $\\cos^n x$, utilisez $\\cos x = \\dfrac{e^{ix}+e^{-ix}}{2}$. Pas de $i$ au dénominateur, donc plus simple.</div>
        <div class="astuce-box">💡 Pour $\\sin^n x$, pensez à factoriser $\\dfrac{1}{(2i)^n}$. Attention aux signes !</div>
        <div class="astuce-box">💡 Dans les exercices géométriques avec des exponentielles (Ch3 + Ch4), factorisez toujours par $e^{i\\theta/2}$ pour simplifier les sommes $1+e^{i\\theta}$.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre $(\\cos x + i\\sin x)^n$ avec $\\cos(x^n) + i\\sin(x^n)$. L'angle se multiplie par $n$, il ne s'élève pas à la puissance.</div>
        <div class="erreur-box">⚠️ Dans les formules d'Euler, le dénominateur pour $\\sin x$ est $2i$ et non $2$.</div>
        <div class="erreur-box">⚠️ Lors de l'égalisation des parties réelles/imaginaires (Ch1), bien vérifier que le module est positif (Ch2).</div>
    `,
    quiz: {
        questions: [
            { type: 'qcm', text: "La formule de Moivre s'écrit :", options: ['$(\\cos x + i\\sin x)^n = \\cos(nx) + i\\sin(nx)$', '$(\\cos x + i\\sin x)^n = \\cos(x^n) + i\\sin(x^n)$', '$(\\cos x + i\\sin x)^n = \\cos x + i n\\sin x$'], correct: 0 },
            { type: 'qcm', text: '$\\sin x$ en fonction de $e^{ix}$ et $e^{-ix}$ est :', options: ['$\\dfrac{e^{ix}-e^{-ix}}{2}$', '$\\dfrac{e^{ix}-e^{-ix}}{2i}$', '$\\dfrac{e^{ix}+e^{-ix}}{2}$'], correct: 1 },
            { type: 'vrai/faux', text: '$\\cos^2 x = \\dfrac{1+\\cos(2x)}{2}$ est une linéarisation correcte.', correct: 1 },
            { type: 'qcm', text: 'La dérivée de $\\sin x(1+\\cos x)$ s\'annule en :', options: ['$\\pi/6$', '$\\pi/3$', '$\\pi/2$'], correct: 1 }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 : Linéarisation de sin^5 x (Ch1 + Ch4)
        // ============================================================
        {
            numero: 1,
            enonce: `<p>Linéariser $\\sin^5 x$ (exprimer $\\sin^5 x$ comme une combinaison linéaire de $\\sin(kx)$).</p>`,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez $\\sin x = \\dfrac{e^{ix} - e^{-ix}}{2i}$ (Ch4), puis développez avec le binôme de Newton (Ch1).</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Attention à la puissance de $i$ au dénominateur : $(2i)^5 = 32i$, pas $32$.</div>
            `,
            questions: [
                {
                    id: 'c4-ex1-q1',
                    texte: 'Exprimer $\\sin^5 x$ en fonction de $\\sin(kx)$.',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch4) :</strong></p>
                        <p><em>Étape 1 (Ch4) :</em> On utilise $\\sin x = \\dfrac{e^{ix} - e^{-ix}}{2i}$.</p>
                        $$\\sin^5 x = \\left(\\dfrac{e^{ix} - e^{-ix}}{2i}\\right)^5 = \\dfrac{1}{(2i)^5} (e^{ix} - e^{-ix})^5$$
                        <p><em>Étape 2 (Ch1) :</em> On calcule $(2i)^5 = 2^5 \\times i^5 = 32 \\times i = 32i$ (car $i^4=1$, $i^5=i$).</p>
                        <p><em>Étape 3 (Ch1) :</em> On développe avec le binôme de Newton :</p>
                        $$(e^{ix} - e^{-ix})^5 = \\sum_{k=0}^5 \\binom{5}{k} e^{ikx} (-1)^{5-k} e^{-i(5-k)x} = \\sum_{k=0}^5 \\binom{5}{k} (-1)^{5-k} e^{i(2k-5)x}$$
                        <p><em>Étape 4 (Ch4) :</em> On regroupe les termes symétriques $k$ et $5-k$ pour obtenir des $\\sin$.</p>
                        <p>On a $\\sin(5x) = \\dfrac{e^{i5x} - e^{-i5x}}{2i}$, etc.</p>
                        <p>Après regroupement et simplification (détaillé dans le cours), on obtient :</p>
                        $$\\sin^5 x = \\dfrac{1}{16}(\\sin 5x - 5\\sin 3x + 10\\sin x)$$
                        <p><strong>Résultat :</strong> $\\boxed{\\sin^5 x = \\dfrac{1}{16}(\\sin 5x - 5\\sin 3x + 10\\sin x)}$.</p>
                        <p><em>Vérification rapide (Ch1) :</em> Pour $x=\\pi/2$, $\\sin^5(\\pi/2)=1$. Le membre de droite donne $\\dfrac{1}{16}(\\sin(5\\pi/2) - 5\\sin(3\\pi/2) + 10\\sin(\\pi/2)) = \\dfrac{1}{16}(1 - 5(-1) + 10) = \\dfrac{1}{16}(1+5+10) = \\dfrac{16}{16}=1$. OK.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 2 : Linéarisation de cos^4 x (Ch1 + Ch4)
        // ============================================================
        {
            numero: 2,
            enonce: `<p>Linéariser $\\cos^4 x$.</p>`,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez $\\cos x = \\dfrac{e^{ix} + e^{-ix}}{2}$ (Ch4). Pas de $i$ au dénominateur, donc plus simple.</div>
            `,
            questions: [
                {
                    id: 'c4-ex2-q1',
                    texte: 'Exprimer $\\cos^4 x$ en fonction de $\\cos(kx)$.',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch4) :</strong></p>
                        <p><em>Étape 1 (Ch4) :</em> $\\cos x = \\dfrac{e^{ix} + e^{-ix}}{2}$.</p>
                        $$\\cos^4 x = \\dfrac{1}{2^4} (e^{ix} + e^{-ix})^4 = \\dfrac{1}{16} \\sum_{k=0}^4 \\binom{4}{k} e^{ikx} e^{-i(4-k)x} = \\dfrac{1}{16} \\sum_{k=0}^4 \\binom{4}{k} e^{i(2k-4)x}$$
                        <p><em>Étape 2 (Ch4) :</em> On regroupe les termes symétriques $k$ et $4-k$.</p>
                        <ul>
                            <li>$k=0$ et $k=4$ : $\\binom{4}{0} e^{-i4x} + \\binom{4}{4} e^{i4x} = 1 + e^{i4x}$ (ou $e^{-i4x}+e^{i4x}$)</li>
                            <li>$k=1$ et $k=3$ : $\\binom{4}{1} e^{-i2x} + \\binom{4}{3} e^{i2x} = 4(e^{-i2x}+e^{i2x})$</li>
                            <li>$k=2$ : $\\binom{4}{2} e^{0} = 6$</li>
                        </ul>
                        <p>On a $e^{i4x} + e^{-i4x} = 2\\cos(4x)$, $e^{i2x} + e^{-i2x} = 2\\cos(2x)$.</p>
                        <p>Donc :</p>
                        $$\\cos^4 x = \\dfrac{1}{16} \\left( 2\\cos(4x) + 8\\cos(2x) + 6 \\right) = \\dfrac{1}{8} \\cos(4x) + \\dfrac{1}{2} \\cos(2x) + \\dfrac{3}{8}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\cos^4 x = \\dfrac{3}{8} + \\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{8}\\cos(4x)}$.</p>
                        <p><em>Vérification (Ch2) :</em> Pour $x=0$, $\\cos^4(0)=1$. Le membre de droite donne $3/8 + 1/2 + 1/8 = 1$. OK.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 3 : p34 – Déduction de cos(pi/12) et sin(pi/12) (Ch1+Ch2+Ch3+Ch4)
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Soit $z_1 = 1+i$ et $z_2 = \\sqrt{3} - i$.</p>
                <ol>
                    <li>Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$ (Ch2 + Ch3).</li>
                    <li>Donner la forme algébrique (Ch1) et trigonométrique (Ch3) de $z_1 z_2$.</li>
                    <li>En déduire les valeurs exactes de $\\cos\\dfrac{\\pi}{12}$ et $\\sin\\dfrac{\\pi}{12}$ (Ch4).</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 L'argument de $z_1 z_2$ est la somme des arguments (Ch3), soit $\\pi/12$.</div>
            `,
            questions: [
                {
                    id: 'c4-ex3-q1',
                    texte: 'Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$.',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch3) :</strong></p>
                        <p>Pour $z_1 = 1+i$ : $|z_1| = \\sqrt{2}$, $\\arg(z_1) = \\pi/4$.</p>
                        <p>Pour $z_2 = \\sqrt{3} - i$ : $|z_2| = 2$, $\\arg(z_2) = -\\pi/6$.</p>
                        <p><strong>Résultat :</strong> $|z_1|=\\sqrt{2}$, $\\arg(z_1)=\\pi/4$, $|z_2|=2$, $\\arg(z_2)=-\\pi/6$.</p>
                    `
                },
                {
                    id: 'c4-ex3-q2',
                    texte: 'Forme algébrique (Ch1) et trigonométrique (Ch3) de $z_1 z_2$.',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch2 + Ch3) :</strong></p>
                        <p><em>Étape 1 (Ch1) :</em> Forme algébrique.</p>
                        $$(1+i)(\\sqrt{3}-i) = \\sqrt{3} - i + i\\sqrt{3} - i^2 = \\sqrt{3} + 1 + i(\\sqrt{3} - 1)$$
                        <p><em>Étape 2 (Ch2 + Ch3) :</em> Forme trigonométrique.</p>
                        <p>Module (Ch2) : $|z_1 z_2| = |z_1| \\times |z_2| = \\sqrt{2} \\times 2 = 2\\sqrt{2}$.</p>
                        <p>Argument (Ch3) : $\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) = \\pi/4 - \\pi/6 = \\pi/12$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{z_1 z_2 = 2\\sqrt{2} \\left(\\cos\\dfrac{\\pi}{12} + i\\sin\\dfrac{\\pi}{12}\\right)}$.</p>
                    `
                },
                {
                    id: 'c4-ex3-q3',
                    texte: 'En déduire $\\cos(\\pi/12)$ et $\\sin(\\pi/12)$ (Ch4).',
                    solution: `
                        <p><strong>Solution (Ch4) :</strong></p>
                        <p>On égalise les parties réelle et imaginaire des deux formes (Ch1).</p>
                        <p>Partie réelle : $\\sqrt{3} + 1 = 2\\sqrt{2} \\cos(\\pi/12)$.</p>
                        $$\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3} + 1}{2\\sqrt{2}}$$
                        <p>Partie imaginaire : $\\sqrt{3} - 1 = 2\\sqrt{2} \\sin(\\pi/12)$.</p>
                        $$\\sin\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3} - 1}{2\\sqrt{2}}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3}+1}{2\\sqrt{2}}}$, $\\boxed{\\sin\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3}-1}{2\\sqrt{2}}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 4 : p34 – Déduction de cos(5π/12) et sin(5π/12) (Ch1+Ch2+Ch3+Ch4)
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Soit $z_1 = -1 + i\\sqrt{3}$ et $z_2 = 1 + i$.</p>
                <ol>
                    <li>Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$ (Ch2 + Ch3).</li>
                    <li>Déterminer $\\left|\\dfrac{z_1}{z_2}\\right|$ (Ch2) et $\\arg\\left(\\dfrac{z_1}{z_2}\\right)$ (Ch3).</li>
                    <li>En déduire les valeurs exactes de $\\cos\\dfrac{5\\pi}{12}$ et $\\sin\\dfrac{5\\pi}{12}$ (Ch4).</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c4-ex4-q1',
                    texte: 'Déterminer $|z_1|$, $\\arg(z_1)$, $|z_2|$, $\\arg(z_2)$.',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch3) :</strong></p>
                        <p>$z_1 = -1 + i\\sqrt{3}$ : $|z_1| = \\sqrt{1+3} = 2$, $\\arg(z_1) = \\dfrac{2\\pi}{3}$.</p>
                        <p>$z_2 = 1 + i$ : $|z_2| = \\sqrt{2}$, $\\arg(z_2) = \\dfrac{\\pi}{4}$.</p>
                        <p><strong>Résultat :</strong> $|z_1|=2$, $\\arg(z_1)=2\\pi/3$, $|z_2|=\\sqrt{2}$, $\\arg(z_2)=\\pi/4$.</p>
                    `
                },
                {
                    id: 'c4-ex4-q2',
                    texte: 'Déterminer $\\left|\\dfrac{z_1}{z_2}\\right|$ et $\\arg\\left(\\dfrac{z_1}{z_2}\\right)$.',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch3) :</strong></p>
                        <p>Module (Ch2) : $\\left|\\dfrac{z_1}{z_2}\\right| = \\dfrac{|z_1|}{|z_2|} = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}$.</p>
                        <p>Argument (Ch3) : $\\arg\\left(\\dfrac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2) = \\dfrac{2\\pi}{3} - \\dfrac{\\pi}{4} = \\dfrac{8\\pi}{12} - \\dfrac{3\\pi}{12} = \\dfrac{5\\pi}{12}$.</p>
                        <p><strong>Résultat :</strong> $\\left|\\dfrac{z_1}{z_2}\\right| = \\sqrt{2}$, $\\arg = \\dfrac{5\\pi}{12}$.</p>
                    `
                },
                {
                    id: 'c4-ex4-q3',
                    texte: 'En déduire $\\cos(5\\pi/12)$ et $\\sin(5\\pi/12)$ (Ch4).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch4) :</strong></p>
                        <p>On calcule $\\dfrac{z_1}{z_2}$ sous forme algébrique (Ch1).</p>
                        $$\\dfrac{z_1}{z_2} = \\dfrac{-1 + i\\sqrt{3}}{1+i} = \\dfrac{(-1 + i\\sqrt{3})(1-i)}{(1+i)(1-i)} = \\dfrac{-1 + i + i\\sqrt{3} - i^2\\sqrt{3}}{2} = \\dfrac{-1 + \\sqrt{3} + i(1+\\sqrt{3})}{2}$$
                        <p>Donc $\\Re = \\dfrac{\\sqrt{3} - 1}{2}$, $\\Im = \\dfrac{\\sqrt{3} + 1}{2}$.</p>
                        <p>Par ailleurs, $\\dfrac{z_1}{z_2} = \\sqrt{2} e^{i5\\pi/12}$.</p>
                        <p>Donc $\\sqrt{2} \\cos(5\\pi/12) = \\dfrac{\\sqrt{3} - 1}{2}$ et $\\sqrt{2} \\sin(5\\pi/12) = \\dfrac{\\sqrt{3} + 1}{2}$.</p>
                        $$\\cos\\dfrac{5\\pi}{12} = \\dfrac{\\sqrt{3} - 1}{2\\sqrt{2}}, \\quad \\sin\\dfrac{5\\pi}{12} = \\dfrac{\\sqrt{3} + 1}{2\\sqrt{2}}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\cos\\dfrac{5\\pi}{12} = \\dfrac{\\sqrt{3} - 1}{2\\sqrt{2}}}$, $\\boxed{\\sin\\dfrac{5\\pi}{12} = \\dfrac{\\sqrt{3} + 1}{2\\sqrt{2}}}$.</p>
                        <p><em>Remarque (Ch3) :</em> On vérifie que $5\\pi/12 = \\pi/2 - \\pi/12$, donc $\\cos(5\\pi/12) = \\sin(\\pi/12)$, ce qui est cohérent avec l'exercice 3.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 5 : p35 – z = e^{i2θ} - i, losange et carré (Ch1+Ch2+Ch3+Ch4)
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Soit $\\theta \\in \\left[0, \\dfrac{\\pi}{4}\\right]$ et le nombre complexe $z = e^{i2\\theta} - i$.</p>
                <p>On désigne par $M$ et $M'$ les points images respectives de $z$ et $\\overline{z}$.</p>
                <ol>
                    <li>Déterminer l'affixe du point $N$ pour que $OMNM'$ soit un losange (Ch2).</li>
                    <li>Montrer que $z = 2\\cos\\left(\\theta + \\dfrac{\\pi}{4}\\right) e^{i(\\theta - \\pi/4)}$ (Ch3 + Ch4).</li>
                    <li>Déterminer $\\theta$ pour que $OMNM'$ soit un carré (Ch2 + Ch3 + Ch4).</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Dans un losange, les diagonales se coupent en leur milieu et sont perpendiculaires. Ici, $N$ est le 4ème sommet.</div>
                <div class="astuce-box">💡 Factorisez $e^{i\\theta}$ dans $e^{i2\\theta} - i$ pour obtenir la forme demandée.</div>
            `,
            questions: [
                {
                    id: 'c4-ex5-q1',
                    texte: 'Déterminer l\'affixe de $N$ pour que $OMM\'$ soit un losange.',
                    solution: `
                        <p><strong>Solution (Ch2) :</strong></p>
                        <p>Le losange $O M N M'$ a pour sommets consécutifs $O, M, N, M'$.</p>
                        <p>Dans un parallélogramme, la somme des affixes des sommets opposés est égale : $z_O + z_N = z_M + z_{M'}$.</p>
                        <p>On a $z_O = 0$, $z_M = z$, $z_{M'} = \\overline{z}$.</p>
                        <p>Donc $z_N = z + \\overline{z} = 2\\Re(z)$.</p>
                        <p>Or $z = e^{i2\\theta} - i = \\cos(2\\theta) + i\\sin(2\\theta) - i = \\cos(2\\theta) + i(\\sin(2\\theta) - 1)$.</p>
                        <p>Donc $z_N = 2\\cos(2\\theta)$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{z_N = 2\\cos(2\\theta)}$ (c'est un réel).</p>
                        <p><em>Remarque (Ch2) :</em> Pour que ce soit un losange, il faut que $OM = OM'$ ou $OM = MN$, etc. Ici, $OM = |z|$, $OM' = |\\overline{z}| = |z|$, donc les côtés issus de O sont égaux. $N$ étant l'autre sommet, $OMM'$ est un losange.</p>
                    `
                },
                {
                    id: 'c4-ex5-q2',
                    texte: 'Montrer que $z = 2\\cos\\left(\\theta + \\dfrac{\\pi}{4}\\right) e^{i(\\theta - \\pi/4)}$.',
                    solution: `
                        <p><strong>Solution (Ch3 + Ch4) :</strong></p>
                        <p>On a $z = e^{i2\\theta} - i$.</p>
                        <p>On sait que $i = e^{i\\pi/2}$.</p>
                        <p>Donc $z = e^{i2\\theta} - e^{i\\pi/2}$.</p>
                        <p>On factorise par $e^{i(\\theta + \\pi/4)}$ :</p>
                        $$z = e^{i(\\theta + \\pi/4)} \\left( e^{i(\\theta - \\pi/4)} - e^{i(\\pi/4 - \\theta)} \\right)$$
                        <p>Or $e^{ia} - e^{-ia} = 2i\\sin a$.</p>
                        <p>Ici $a = \\theta - \\pi/4$.</p>
                        <p>Donc $z = e^{i(\\theta + \\pi/4)} \\times 2i\\sin\\left(\\theta - \\dfrac{\\pi}{4}\\right)$.</p>
                        <p>Mais $i = e^{i\\pi/2}$, donc :</p>
                        $$z = 2 \\sin\\left(\\theta - \\dfrac{\\pi}{4}\\right) e^{i(\\theta + \\pi/4 + \\pi/2)} = 2 \\sin\\left(\\theta - \\dfrac{\\pi}{4}\\right) e^{i(\\theta + 3\\pi/4)}$$
                        <p>Or $\\sin(\\theta - \\pi/4) = -\\cos(\\theta + \\pi/4)$ (car $\\cos(\\theta+\\pi/4) = \\cos\\theta\\cos\\pi/4 - \\sin\\theta\\sin\\pi/4 = \\dfrac{\\sqrt{2}}{2}(\\cos\\theta - \\sin\\theta)$ ; $\\sin(\\theta - \\pi/4) = \\dfrac{\\sqrt{2}}{2}(\\sin\\theta - \\cos\\theta) = -\\cos(\\theta+\\pi/4)$).</p>
                        <p>Donc $z = -2\\cos(\\theta+\\pi/4) e^{i(\\theta+3\\pi/4)}$.</p>
                        <p>Or $-e^{i(\\theta+3\\pi/4)} = e^{i(\\theta+3\\pi/4 + \\pi)} = e^{i(\\theta + 7\\pi/4)}$.</p>
                        <p>$\\theta + 7\\pi/4 \\equiv \\theta - \\pi/4 \\ [2\\pi]$.</p>
                        <p>Donc $z = 2\\cos(\\theta+\\pi/4) e^{i(\\theta - \\pi/4)}$.</p>
                        <p><strong>Conclusion :</strong> $\\boxed{z = 2\\cos\\left(\\theta + \\dfrac{\\pi}{4}\\right) e^{i(\\theta - \\pi/4)}}$.</p>
                        <p><em>Vérification (Ch2) :</em> Pour $\\theta=0$, $z = e^0 - i = 1 - i$. La formule donne $2\\cos(\\pi/4) e^{-i\\pi/4} = 2\\times\\dfrac{\\sqrt{2}}{2} (\\cos(-\\pi/4)+i\\sin(-\\pi/4)) = \\sqrt{2}(\\dfrac{\\sqrt{2}}{2} - i\\dfrac{\\sqrt{2}}{2}) = 1 - i$. OK.</p>
                    `
                },
                {
                    id: 'c4-ex5-q3',
                    texte: 'Déterminer $\\theta$ pour que $OMM\'$ soit un carré (Ch2 + Ch3 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch3 + Ch4) :</strong></p>
                        <p>Un losange est un carré si ses diagonales sont perpendiculaires (ou si les côtés consécutifs sont orthogonaux).</p>
                        <p>On a $OM = OM'$. Il faut que $\\overrightarrow{OM}$ et $\\overrightarrow{OM'}$ soient orthogonaux (Ch2).</p>
                        <p>Condition d'orthogonalité (Ch2) : $\\arg(z) - \\arg(\\overline{z}) \\equiv \\pm \\dfrac{\\pi}{2} \\ [\\pi]$.</p>
                        <p>On a $\\arg(\\overline{z}) = -\\arg(z)$.</p>
                        <p>Donc $2\\arg(z) \\equiv \\pm \\dfrac{\\pi}{2} \\ [\\pi] \\iff \\arg(z) \\equiv \\pm \\dfrac{\\pi}{4} \\ [\\dfrac{\\pi}{2}]$.</p>
                        <p>D'après la forme trouvée : $\\arg(z) \\equiv \\theta - \\dfrac{\\pi}{4} \\ [2\\pi]$.</p>
                        <p>Donc $\\theta - \\dfrac{\\pi}{4} \\equiv \\pm \\dfrac{\\pi}{4} \\ [\\dfrac{\\pi}{2}]$.</p>
                        <p>Cas 1 : $\\theta - \\pi/4 = \\pi/4 + k\\pi/2 \\implies \\theta = \\pi/2 + k\\pi/2$.</p>
                        <p>Cas 2 : $\\theta - \\pi/4 = -\\pi/4 + k\\pi/2 \\implies \\theta = k\\pi/2$.</p>
                        <p>Avec $\\theta \\in [0, \\pi/4]$, on a $\\theta = 0$ (cas 2) ou $\\theta = \\pi/4$ (cas 1) ?</p>
                        <p>Pour $\\theta=0$, $\\cos(\\pi/4)>0$, $z$ est dans le quadrant IV, $\\arg(z)=-\\pi/4$. $2\\arg(z)=-\\pi/2$ donc orthogonal.</p>
                        <p>Pour $\\theta=\\pi/4$, $\\cos(\\pi/2)=0$ donc $z=0$, impossible.</p>
                        <p>Donc la seule solution dans l'intervalle est $\\theta = 0$.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\theta = 0}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 6 : p35 – Parallélogramme OAMB, losange, aire max (Ch1+Ch2+Ch3+Ch4)
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>Soit $\\theta \\in \\left[0, \\dfrac{\\pi}{2}\\right]$. On désigne par $\\mathcal{R}$ le cercle trigonométrique de centre $O$.</p>
                <p>Soit $M$ un point de $\\mathcal{R}$ d'affixe $z$ tel que $\\arg(z) \\equiv \\theta \\ [2\\pi]$.</p>
                <p>On place les points $A$ et $B$ d'affixes respectives $z_A = 1 + \\cos\\theta$ et $z_B = -1 + i\\sin\\theta$.</p>
                <ol>
                    <li>Montrer que $OAMB$ est un parallélogramme (Ch2).</li>
                    <li>Montrer qu'il existe une valeur de $\\theta$ telle que $OAMB$ soit un losange (Ch2 + Ch4).</li>
                    <li>Montrer que l'aire $\\mathcal{A}(\\theta)$ du parallélogramme $OAMB$ est maximale lorsque $\\theta = \\dfrac{\\pi}{3}$ (Ch2 + Ch4).</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c4-ex6-q1',
                    texte: 'Montrer que $OAMB$ est un parallélogramme (Ch2).',
                    solution: `
                        <p><strong>Solution (Ch2) :</strong></p>
                        <p>Pour que $OAMB$ soit un parallélogramme (dans l'ordre $O \\to A \\to M \\to B$), il faut que $\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OM}$.</p>
                        <p>Soit en affixes (Ch2) : $z_M = z_A + z_B$.</p>
                        <p>$z_A + z_B = (1+\\cos\\theta) + (-1 + i\\sin\\theta) = \\cos\\theta + i\\sin\\theta = e^{i\\theta} = z$ (car $M$ est sur le cercle trigonométrique d'argument $\\theta$).</p>
                        <p>Donc $z_M = z_A + z_B$. Le quadrilatère $OAMB$ est un <strong>parallélogramme</strong>.</p>
                    `
                },
                {
                    id: 'c4-ex6-q2',
                    texte: 'Montrer qu\'il existe $\\theta$ pour que $OAMB$ soit un losange (Ch2 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch4) :</strong></p>
                        <p>$OAMB$ est un losange si ses côtés consécutifs sont égaux.</p>
                        <p>On a $OA = |z_A| = |1+\\cos\\theta| = 1+\\cos\\theta$ (car $\\cos\\theta \\ge 0$).</p>
                        <p>$AM = |z - z_A| = |e^{i\\theta} - (1+\\cos\\theta)| = |\\cos\\theta + i\\sin\\theta - 1 - \\cos\\theta| = |-1 + i\\sin\\theta| = \\sqrt{1 + \\sin^2\\theta}$.</p>
                        <p>Un losange nécessite $OA = AM$.</p>
                        <p>$$1+\\cos\\theta = \\sqrt{1+\\sin^2\\theta}$$</p>
                        <p>On élève au carré : $(1+\\cos\\theta)^2 = 1+\\sin^2\\theta$.</p>
                        <p>$$1 + 2\\cos\\theta + \\cos^2\\theta = 1 + \\sin^2\\theta = 1 + (1-\\cos^2\\theta) = 2 - \\cos^2\\theta$$</p>
                        <p>$$2\\cos\\theta + \\cos^2\\theta = 1 - \\cos^2\\theta \\iff 2\\cos\\theta + 2\\cos^2\\theta - 1 = 0$$</p>
                        <p>Soit $X = \\cos\\theta$. $2X^2 + 2X - 1 = 0$.</p>
                        <p>$\\Delta = 4 + 8 = 12$, $X = \\dfrac{-2 \\pm 2\\sqrt{3}}{4} = \\dfrac{-1 \\pm \\sqrt{3}}{2}$.</p>
                        <p>La solution positive est $X = \\dfrac{\\sqrt{3} - 1}{2} \\approx 0.366$.</p>
                        <p>Cette valeur est dans $[0,1]$, donc il existe bien $\\theta \\in [0,\\pi/2]$ tel que $\\cos\\theta = \\dfrac{\\sqrt{3} - 1}{2}$.</p>
                        <p><strong>Conclusion :</strong> Il existe une valeur de $\\theta$ (environ $\\theta \\approx 1.2$ rad) pour laquelle $OAMB$ est un losange.</p>
                        <p><em>Remarque (Ch4) :</em> On peut aussi exprimer $\\theta = \\arccos\\left(\\dfrac{\\sqrt{3}-1}{2}\\right)$.</p>
                    `
                },
                {
                    id: 'c4-ex6-q3',
                    texte: 'Montrer que l\'aire $\\mathcal{A}(\\theta)$ est maximale en $\\theta = \\pi/3$ (Ch2 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch2 + Ch4) :</strong></p>
                        <p>L'aire du parallélogramme $OAMB$ est la norme du produit vectoriel de $\\overrightarrow{OA}$ et $\\overrightarrow{OB}$.</p>
                        <p>On a $\\overrightarrow{OA}$ d'affixe $z_A = 1+\\cos\\theta$ (réel, donc sur l'axe des abscisses).</p>
                        <p>$\\overrightarrow{OB}$ a pour affixe $z_B = -1 + i\\sin\\theta$.</p>
                        <p>L'aire est $\\mathcal{A}(\\theta) = |\\det(\\overrightarrow{OA}, \\overrightarrow{OB})| = |(1+\\cos\\theta) \\times \\sin\\theta - 0 \\times (-1)| = (1+\\cos\\theta)\\sin\\theta$ (car positif).</p>
                        <p>On étudie $f(\\theta) = \\sin\\theta(1+\\cos\\theta)$ pour $\\theta \\in [0,\\pi/2]$.</p>
                        <p><em>Étape 1 (Ch4) :</em> On dérive (ou on linéarise). Dérivée :</p>
                        $$f'(\\theta) = \\cos\\theta(1+\\cos\\theta) + \\sin\\theta(-\\sin\\theta) = \\cos\\theta + \\cos^2\\theta - \\sin^2\\theta = \\cos\\theta + \\cos(2\\theta)$$
                        <p>(car $\\cos^2 - \\sin^2 = \\cos 2\\theta$).</p>
                        <p>On cherche $f'(\\theta)=0$ : $\\cos\\theta + \\cos(2\\theta) = 0$.</p>
                        <p>On utilise $\\cos(2\\theta) = 2\\cos^2\\theta - 1$.</p>
                        <p>Soit $X = \\cos\\theta$. On a $X + 2X^2 - 1 = 0 \\iff 2X^2 + X - 1 = 0$.</p>
                        <p>$\\Delta = 1+8=9$, $X = \\dfrac{-1 \\pm 3}{4}$.</p>
                        <p>Les solutions : $X = \\dfrac{2}{4} = \\dfrac{1}{2}$ ou $X = -1$.</p>
                        <p>Sur $[0,\\pi/2]$, $\\cos\\theta \\in [0,1]$, donc $\\cos\\theta = 1/2$, soit $\\theta = \\pi/3$.</p>
                        <p><em>Étape 2 (Ch2) :</em> On vérifie que c'est un maximum.</p>
                        <p>$f(0) = 0$, $f(\\pi/2) = 1 \\times 1 = 1$, $f(\\pi/3) = \\dfrac{\\sqrt{3}}{2} \\times \\left(1+\\dfrac{1}{2}\\right) = \\dfrac{\\sqrt{3}}{2} \\times \\dfrac{3}{2} = \\dfrac{3\\sqrt{3}}{4} \\approx 1.299$.</p>
                        <p>Donc $f(\\pi/3) > f(\\pi/2)$, c'est bien un maximum sur l'intervalle.</p>
                        <p><strong>Conclusion :</strong> L'aire est maximale pour $\\boxed{\\theta = \\dfrac{\\pi}{3}}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 7 : p35 – z = 1/2(sinφ + i(1−cosφ)) (Ch1+Ch2+Ch3+Ch4)
        // ============================================================
        {
            numero: 7,
            enonce: `
                <p>Soit $\\phi \\in ]0, \\pi[$ et $z$ le nombre complexe défini par :</p>
                $$z = \\dfrac{1}{2}\\left(\\sin\\phi + i(1 - \\cos\\phi)\\right)$$
                <ol>
                    <li>Déterminer, en fonction de $\\phi$, le module et un argument de $z$ (Ch2 + Ch3 + Ch4).</li>
                    <li>On considère les points $M$ et $N$ d'affixes respectives $z_1 = z - i$ et $z_2 = \\dfrac{z}{z - i}$. Déterminer les ensembles décrits par $M$ et $N$ (Ch2 + Ch3 + Ch4).</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez les formules de trigonométrie (Ch4) : $1-\\cos\\phi = 2\\sin^2(\\phi/2)$, $\\sin\\phi = 2\\sin(\\phi/2)\\cos(\\phi/2)$.</div>
            `,
            questions: [
                {
                    id: 'c4-ex7-q1',
                    texte: 'Déterminer $|z|$ et $\\arg(z)$ en fonction de $\\phi$ (Ch2 + Ch3 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch2 + Ch3 + Ch4) :</strong></p>
                        <p><em>Étape 1 (Ch4) :</em> On utilise les formules de l'angle moitié.</p>
                        $$\\sin\\phi = 2\\sin\\dfrac{\\phi}{2}\\cos\\dfrac{\\phi}{2}, \\quad 1 - \\cos\\phi = 2\\sin^2\\dfrac{\\phi}{2}$$
                        <p><em>Étape 2 (Ch1) :</em> On remplace dans $z$ :</p>
                        $$z = \\dfrac{1}{2}\\left(2\\sin\\dfrac{\\phi}{2}\\cos\\dfrac{\\phi}{2} + i \\cdot 2\\sin^2\\dfrac{\\phi}{2}\\right) = \\sin\\dfrac{\\phi}{2}\\left(\\cos\\dfrac{\\phi}{2} + i\\sin\\dfrac{\\phi}{2}\\right)$$
                        <p><em>Étape 3 (Ch2 + Ch3) :</em> Comme $\\phi \\in ]0, \\pi[$, $\\sin(\\phi/2) > 0$.</p>
                        <p>On reconnaît la forme trigonométrique :</p>
                        <p>$r = \\sin\\dfrac{\\phi}{2}$ (module, Ch2) et $\\arg(z) = \\dfrac{\\phi}{2} \\ [2\\pi]$ (argument, Ch3).</p>
                        <p><strong>Résultat :</strong> $\\boxed{|z| = \\sin\\dfrac{\\phi}{2}}$, $\\boxed{\\arg(z) = \\dfrac{\\phi}{2}}$.</p>
                    `
                },
                {
                    id: 'c4-ex7-q2',
                    texte: 'Ensemble décrit par $M$ d\'affixe $z_1 = z - i$ (Ch2).',
                    solution: `
                        <p><strong>Solution (Ch2) :</strong></p>
                        <p>$z_1 = z - i$ est l'affixe du vecteur $\\overrightarrow{AM}$ où $A$ est le point d'affixe $i$.</p>
                        <p>On a $|z_1| = |z - i|$. On peut exprimer $z$ sous forme exponentielle.</p>
                        <p>Mais ici, on a $z = \\sin(\\phi/2) e^{i\\phi/2}$.</p>
                        <p>On sait que $z - i = \\sin(\\phi/2)e^{i\\phi/2} - e^{i\\pi/2}$.</p>
                        <p>L'ensemble décrit par $M$ lorsque $\\phi$ varie est un <strong>cercle</strong>.</p>
                        <p>On peut vérifier que $|z_1| = |z - i|$.</p>
                        <p>On a $|z| = \\sin(\\phi/2) \\in ]0,1[$.</p>
                        <p>Le point $M$ (d'affixe $z$) décrit le cercle de centre $O$ et de rayon $\\sin(\\phi/2)$ qui varie.</p>
                        <p>En fait, $z_1 = z - i$ signifie que $M_1$ est l'image de $M$ par la translation de vecteur $-i$.</p>
                        <p>Le lieu de $M$ est le <strong>disque ouvert</strong> de centre $O$ et de rayon 1 (car $\\sin(\\phi/2) \\in ]0,1[$).</p>
                        <p>Donc $M_1$ est le disque ouvert de centre $A(i)$ et de rayon 1 (privé de A car $\\sin(\\phi/2) \\neq 0$).</p>
                        <p><strong>Résultat :</strong> $M$ décrit le <strong>disque ouvert</strong> de centre $A(0,1)$ et de rayon 1, privé de $A$.</p>
                    `
                },
                {
                    id: 'c4-ex7-q3',
                    texte: 'Ensemble décrit par $N$ d\'affixe $z_2 = \\dfrac{z}{z - i}$ (Ch2 + Ch3 + Ch4).',
                    solution: `
                        <p><strong>Solution (Ch1 + Ch2 + Ch3 + Ch4) :</strong></p>
                        <p>On a $z = \\sin(\\phi/2) e^{i\\phi/2}$.</p>
                        <p>On calcule $z - i$ :</p>
                        $$z - i = \\sin\\dfrac{\\phi}{2} e^{i\\phi/2} - i = e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i e^{-i\\phi/2}\\right)$$
                        $$= e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i\\left(\\cos\\dfrac{\\phi}{2} - i\\sin\\dfrac{\\phi}{2}\\right)\\right)$$
                        $$= e^{i\\phi/2}\\left(\\sin\\dfrac{\\phi}{2} - i\\cos\\dfrac{\\phi}{2} - \\sin\\dfrac{\\phi}{2}\\right) = e^{i\\phi/2} \\left(- i\\cos\\dfrac{\\phi}{2}\\right) = -i\\cos\\dfrac{\\phi}{2} e^{i\\phi/2}$$
                        <p>Donc $z_2 = \\dfrac{z}{z - i} = \\dfrac{\\sin(\\phi/2) e^{i\\phi/2}}{-i\\cos(\\phi/2) e^{i\\phi/2}} = \\dfrac{\\sin(\\phi/2)}{-i\\cos(\\phi/2)} = i \\tan\\dfrac{\\phi}{2}$.</p>
                        <p>Comme $\\phi \\in ]0, \\pi[$, $\\tan(\\phi/2) \\in ]0, +\\infty[$.</p>
                        <p>Donc $z_2$ est un imaginaire pur positif.</p>
                        <p><strong>Résultat :</strong> $N$ décrit la <strong>demi-droite</strong> $[Oy)$ (l'axe des ordonnées positives, excluant $O$).</p>
                    `
                }
            ]
        }
    ]
});