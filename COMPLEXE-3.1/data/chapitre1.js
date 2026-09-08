// data/chapitre1.js – L'écriture algébrique et le conjugué
// ============================================================
// Version enrichie avec des exercices et solutions détaillées
// (Tous les exercices sont extraits du PDF, pages 15, 20, 21, 33)

data.chapitres.push({
    id: 1,
    titre: "L'écriture algébrique et le conjugué",
    resume: `
        <p>Introduction de $\\mathbb{C}$ et de l'unité imaginaire $i$ ($i^2=-1$).</p>
        <p><strong>Forme cartésienne :</strong> $z = a + ib$ ($a,b \\in \\mathbb{R}$).</p>
        <ul>
            <li>$a = \\Re(z)$ est la <strong>partie réelle</strong>.</li>
            <li>$b = \\Im(z)$ est la <strong>partie imaginaire</strong> (c'est un réel).</li>
        </ul>
        <p><strong>Conjugué :</strong> $\\overline{z} = a - ib$.</p>
        <p><strong>Division :</strong> $\\dfrac{1}{a+ib} = \\dfrac{a-ib}{a^2+b^2}$.</p>
    `,
    rappel: `
        <div class="theoreme-block">
            <h4>📘 Définition de $\\mathbb{C}$</h4>
            <p>Il existe un ensemble $\\mathbb{C}$ tel que :</p>
            <ul>
                <li>$\\mathbb{R} \\subset \\mathbb{C}$.</li>
                <li>Il existe un élément $i$ avec $i^2 = -1$.</li>
                <li>Tout $z \\in \\mathbb{C}$ s'écrit de manière <strong>unique</strong> : $z = a + ib$, $a,b \\in \\mathbb{R}$.</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <h4>🔑 Égalité de deux complexes</h4>
            <p>Soient $z = a+ib$ et $z' = a'+ib'$.</p>
            <p>$$z = z' \\iff a = a' \\ \\text{et} \\ b = b'.$$</p>
            <p>En particulier : $z = 0 \\iff a = 0$ et $b = 0$.</p>
        </div>
        <div class="theoreme-block">
            <h4>🔁 Conjugué d'un complexe</h4>
            <p>Si $z = a+ib$, alors $\\overline{z} = a - ib$.</p>
            <p><strong>Propriétés :</strong></p>
            <ul>
                <li>$\\overline{z+z'} = \\overline{z} + \\overline{z'}$</li>
                <li>$\\overline{zz'} = \\overline{z} \\times \\overline{z'}$</li>
                <li>$\\overline{z^n} = (\\overline{z})^n$</li>
                <li>$z + \\overline{z} = 2\\Re(z)$</li>
                <li>$z - \\overline{z} = 2i\\Im(z)$</li>
                <li>$z \\in \\mathbb{R} \\iff z = \\overline{z}$</li>
                <li>$z$ est imaginaire pur $\\iff z = -\\overline{z}$</li>
            </ul>
        </div>
        <div class="theoreme-block">
            <h4>🧮 Division par un complexe non nul</h4>
            <p>Pour $z = a+ib \\neq 0$ :</p>
            <p>$$\\dfrac{1}{z} = \\dfrac{\\overline{z}}{|z|^2} = \\dfrac{a-ib}{a^2+b^2}.$$</p>
            <p>C'est la <strong>méthode fondamentale</strong> pour mettre une fraction sous forme cartésienne.</p>
        </div>
        <div class="theoreme-block">
            <h4>🔄 Puissances de $i$</h4>
            <p>Le cycle des puissances de $i$ est de période 4 :</p>
            <p>$$i^0 = 1,\\quad i^1 = i,\\quad i^2 = -1,\\quad i^3 = -i,\\quad i^4 = 1,\\quad \\ldots$$</p>
            <p>Pour $n \\in \\mathbb{N}$, $i^n = i^{n \\bmod 4}$.</p>
        </div>
    `,
    theoremes: `
        <div class="theoreme-block">
            <strong>Unicité de l'écriture cartésienne :</strong> C'est la clé pour identifier les parties réelles et imaginaires dans une égalité.
        </div>
        <div class="theoreme-block">
            <strong>Règles de calcul :</strong>
            <ul>
                <li>Addition : $(a+ib)+(a'+ib') = (a+a') + i(b+b')$</li>
                <li>Multiplication : $(a+ib)(a'+ib') = (aa'-bb') + i(ab'+a'b)$</li>
                <li>Le conjugué d'une somme est la somme des conjugués.</li>
                <li>Le conjugué d'un produit est le produit des conjugués.</li>
            </ul>
        </div>
    `,
    methodes: `
        <div class="method-box">
            <strong>📝 Mettre une fraction sous forme cartésienne :</strong>
            <ol>
                <li>Identifier le dénominateur $z = a+ib$.</li>
                <li>Multiplier numérateur et dénominateur par le conjugué $\\overline{z} = a-ib$.</li>
                <li>Développer et simplifier en utilisant $i^2=-1$.</li>
                <li>Le résultat est de la forme $A + iB$.</li>
            </ol>
            <p><em>Exemple :</em> $\\dfrac{1}{1+i} = \\dfrac{1-i}{(1+i)(1-i)} = \\dfrac{1-i}{1+1} = \\dfrac12 - \\dfrac12 i$.</p>
        </div>
        <div class="method-box">
            <strong>📝 Calculer $i^n$ :</strong>
            <ul>
                <li>Effectuer la division euclidienne de $n$ par 4 : $n = 4q + r$.</li>
                <li>Alors $i^n = i^r$ (avec $r \\in \\{0,1,2,3\\}$).</li>
            </ul>
        </div>
        <div class="method-box">
            <strong>📝 Vérifier qu'un nombre est réel ou imaginaire :</strong>
            <ul>
                <li>$z$ est réel $\\iff \\overline{z} = z$.</li>
                <li>$z$ est imaginaire pur $\\iff \\overline{z} = -z$.</li>
                <li>On peut aussi vérifier que $\\Im(z)=0$ ou $\\Re(z)=0$.</li>
            </ul>
        </div>
    `,
    astuces: `
        <div class="astuce-box">💡 Pour vérifier une division, multipliez le résultat par le dénominateur : vous devez retrouver le numérateur.</div>
        <div class="astuce-box">💡 $\\dfrac{1}{i} = -i$ (car $i \\times (-i) = 1$). Ne pas écrire $1/i = i$ !</div>
        <div class="astuce-box">💡 Dans les calculs, remplacez systématiquement $i^2$ par $-1$ dès qu'il apparaît pour éviter les erreurs.</div>
    `,
    erreurs: `
        <div class="erreur-box">⚠️ Ne pas confondre la <strong>partie imaginaire</strong> $\\Im(z)$ avec le nombre $ib$. $\\Im(z)$ est le <strong>réel</strong> $b$.</div>
        <div class="erreur-box">⚠️ Oublier que le conjugué de $i$ est $-i$ (car $\\overline{i} = -i$).</div>
        <div class="erreur-box">⚠️ Dans une fraction, ne pas oublier de multiplier <strong>tous les termes</strong> du numérateur par le conjugué.</div>
        <div class="erreur-box">⚠️ Ne pas simplifier $(a+ib)^2$ comme $(a+b)^2$ : $i^2$ donne $-1$.</div>
    `,
    quiz: {
        questions: [
            { type: 'qcm', text: 'Le conjugué de $z = -3 + 2i$ est :', options: ['$-3 - 2i$', '$3 - 2i$', '$-3 + 2i$'], correct: 0 },
            { type: 'vrai/faux', text: 'Si $z = a+ib$ alors $\\Im(z) = ib$.', correct: 0 },
            { type: 'qcm', text: '$i^{2025}$ est égal à :', options: ['$1$', '$-1$', '$i$', '$-i$'], correct: 2 },
            { type: 'vrai/faux', text: '$\\dfrac{1}{1+i} = \\dfrac12 - \\dfrac12 i$', correct: 1 }
        ]
    },
    exercices: [
        // ============================================================
        // EXERCICE 1 : p15 – Écriture cartésienne de base
        // ============================================================
        {
            numero: 1,
            enonce: `
                <p>Déterminer l'écriture cartésienne (forme $a+ib$) des nombres complexes suivants :</p>
                <ol>
                    <li>$(1-i)(1-2i)$</li>
                    <li>$(2-i)^2 - (3-2i)(3+2i)$</li>
                    <li>$\\dfrac{5-i}{2i}$</li>
                    <li>$\\dfrac{2}{3i} \\times \\dfrac{3}{1-i}$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Pour le 3, multipliez numérateur et dénominateur par $-i$.</div>
                <div class="astuce-box">💡 Pour le 4, simplifiez d'abord $\\dfrac{2}{3i} = \\dfrac{2}{3} \\times \\dfrac{1}{i} = \\dfrac{2}{3} \\times (-i)$.</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Dans $(2-i)^2$, n'oubliez pas le double produit : $2ab$ avec $b=-i$ donne $-4i$.</div>
            `,
            questions: [
                {
                    id: 'c1-ex1-q1',
                    texte: 'Calculer $(1-i)(1-2i)$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On développe en utilisant la distributivité :</p>
                        $$(1-i)(1-2i) = 1 \\times 1 + 1 \\times (-2i) + (-i) \\times 1 + (-i) \\times (-2i)$$
                        $$= 1 - 2i - i + 2i^2$$
                        <p>On remplace $i^2$ par $-1$ :</p>
                        $$= 1 - 3i + 2(-1) = 1 - 3i - 2 = -1 - 3i$$
                        <p><strong>Résultat :</strong> $\\boxed{-1 - 3i}$.</p>
                        <p><em>Justification :</em> La partie réelle est $-1$, la partie imaginaire est $-3$.</p>
                    `
                },
                {
                    id: 'c1-ex1-q2',
                    texte: 'Calculer $(2-i)^2 - (3-2i)(3+2i)$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On commence par $(2-i)^2$. C'est une identité remarquable avec $i^2=-1$ :</p>
                        $$(2-i)^2 = 2^2 - 2 \\times 2 \\times i + i^2 = 4 - 4i - 1 = 3 - 4i$$
                        <p>Ensuite $(3-2i)(3+2i)$ est de la forme $(a-b)(a+b)=a^2-b^2$ avec $b=2i$ :</p>
                        $$(3-2i)(3+2i) = 3^2 - (2i)^2 = 9 - 4i^2 = 9 - 4(-1) = 9 + 4 = 13$$
                        <p>(On remarque que c'est réel, ce qui est normal car c'est un produit d'un complexe par son conjugué).</p>
                        <p>On soustrait :</p>
                        $$(3-4i) - 13 = -10 - 4i$$
                        <p><strong>Résultat :</strong> $\\boxed{-10 - 4i}$.</p>
                    `
                },
                {
                    id: 'c1-ex1-q3',
                    texte: 'Calculer $\\dfrac{5-i}{2i}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On multiplie numérateur et dénominateur par le conjugué du dénominateur.</p>
                        <p>Le dénominateur est $2i$, son conjugué est $-2i$ (ou bien $-i$ après simplification).</p>
                        $$\\dfrac{5-i}{2i} = \\dfrac{(5-i) \\times (-i)}{(2i) \\times (-i)} = \\dfrac{-5i + i^2}{-2i^2}$$
                        <p>Simplifions $i^2 = -1$ :</p>
                        $$\\dfrac{-5i - 1}{-2(-1)} = \\dfrac{-1 - 5i}{2} = -\\dfrac12 - \\dfrac{5}{2}i$$
                        <p>On peut aussi procéder plus rapidement : $\\dfrac{1}{i} = -i$, donc :</p>
                        $$\\dfrac{5-i}{2i} = \\dfrac12 \\times \\dfrac{5-i}{i} = \\dfrac12 \\times (5-i) \\times \\dfrac{1}{i} = \\dfrac12 \\times (5-i) \\times (-i) = \\dfrac12 \\times (-5i + i^2) = \\dfrac12 \\times (-1 - 5i)$$
                        <p><strong>Résultat :</strong> $\\boxed{-\\dfrac12 - \\dfrac{5}{2}i}$.</p>
                    `
                },
                {
                    id: 'c1-ex1-q4',
                    texte: 'Calculer $\\dfrac{2}{3i} \\times \\dfrac{3}{1-i}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On simplifie d'abord le premier facteur :</p>
                        $$\\dfrac{2}{3i} = \\dfrac{2}{3} \\times \\dfrac{1}{i} = \\dfrac{2}{3} \\times (-i) = -\\dfrac{2}{3}i$$
                        <p>Le deuxième facteur est $\\dfrac{3}{1-i}$. On multiplie par le conjugué $1+i$ :</p>
                        $$\\dfrac{3}{1-i} = \\dfrac{3(1+i)}{(1-i)(1+i)} = \\dfrac{3+3i}{1^2 - i^2} = \\dfrac{3+3i}{1 - (-1)} = \\dfrac{3+3i}{2} = \\dfrac{3}{2} + \\dfrac{3}{2}i$$
                        <p>Le produit :</p>
                        $$\\left(-\\dfrac{2}{3}i\\right) \\times \\left(\\dfrac{3}{2} + \\dfrac{3}{2}i\\right) = -\\dfrac{2}{3}i \\times \\dfrac{3}{2} - \\dfrac{2}{3}i \\times \\dfrac{3}{2}i$$
                        $$= -i - i^2 = -i - (-1) = 1 - i$$
                        <p><strong>Résultat :</strong> $\\boxed{1 - i}$.</p>
                        <p><em>Remarque :</em> On pouvait aussi multiplier les deux fractions directement puis simplifier.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 2 : p15 – Opérations avec z et z'
        // ============================================================
        {
            numero: 2,
            enonce: `
                <p>Soit $z = 1 - 3i$ et $z' = -3 + 2i$.</p>
                <p>Déterminer l'écriture cartésienne des nombres complexes suivants :</p>
                <ol>
                    <li>$Z_1 = z \\times z'$</li>
                    <li>$Z_2 = z^2 \\times z'$</li>
                    <li>$Z_3 = \\dfrac{z - 2}{z' + i}$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Pour le produit, développez en regroupant les termes réels et imaginaires.</div>
                <div class="astuce-box">💡 Pour la fraction, calculez d'abord $z-2$ et $z'+i$, puis utilisez le conjugué.</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Dans $z^2$, n'oubliez pas que $(-3i)^2 = 9i^2 = -9$.</div>
            `,
            questions: [
                {
                    id: 'c1-ex2-q1',
                    texte: 'Calculer $Z_1 = z \\times z\'$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $z = 1 - 3i$ et $z' = -3 + 2i$.</p>
                        $$Z_1 = (1-3i)(-3+2i)$$
                        <p>On développe :</p>
                        $$= 1 \\times (-3) + 1 \\times 2i + (-3i) \\times (-3) + (-3i) \\times 2i$$
                        $$= -3 + 2i + 9i - 6i^2$$
                        <p>On remplace $i^2 = -1$ :</p>
                        $$= -3 + 11i - 6(-1) = -3 + 11i + 6 = 3 + 11i$$
                        <p><strong>Résultat :</strong> $\\boxed{Z_1 = 3 + 11i}$.</p>
                        <p><em>Justification :</em> $\\Re(Z_1)=3$, $\\Im(Z_1)=11$.</p>
                    `
                },
                {
                    id: 'c1-ex2-q2',
                    texte: 'Calculer $Z_2 = z^2 \\times z\'$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On commence par calculer $z^2 = (1-3i)^2$ :</p>
                        $$z^2 = 1^2 - 2 \\times 1 \\times 3i + (3i)^2 = 1 - 6i + 9i^2 = 1 - 6i - 9 = -8 - 6i$$
                        <p>Puis on multiplie par $z' = -3+2i$ :</p>
                        $$Z_2 = (-8-6i)(-3+2i)$$
                        $$= (-8)(-3) + (-8)(2i) + (-6i)(-3) + (-6i)(2i)$$
                        $$= 24 - 16i + 18i - 12i^2$$
                        <p>On remplace $i^2 = -1$ :</p>
                        $$= 24 + 2i - 12(-1) = 24 + 2i + 12 = 36 + 2i$$
                        <p><strong>Résultat :</strong> $\\boxed{Z_2 = 36 + 2i}$.</p>
                    `
                },
                {
                    id: 'c1-ex2-q3',
                    texte: 'Calculer $Z_3 = \\dfrac{z - 2}{z\' + i}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On calcule d'abord le numérateur : $z-2 = (1-3i) - 2 = -1 - 3i$.</p>
                        <p>Puis le dénominateur : $z'+i = (-3+2i) + i = -3 + 3i$.</p>
                        <p>On a donc :</p>
                        $$Z_3 = \\dfrac{-1 - 3i}{-3 + 3i}$$
                        <p>On multiplie par le conjugué du dénominateur, qui est $\\overline{-3+3i} = -3 - 3i$ :</p>
                        $$Z_3 = \\dfrac{(-1-3i)(-3-3i)}{(-3+3i)(-3-3i)}$$
                        <p>Numérateur :</p>
                        $$(-1-3i)(-3-3i) = (-1)(-3) + (-1)(-3i) + (-3i)(-3) + (-3i)(-3i)$$
                        $$= 3 + 3i + 9i + 9i^2 = 3 + 12i - 9 = -6 + 12i$$
                        <p>Dénominateur :</p>
                        $$(-3+3i)(-3-3i) = (-3)^2 - (3i)^2 = 9 - 9i^2 = 9 - 9(-1) = 9 + 9 = 18$$
                        <p>Donc :</p>
                        $$Z_3 = \\dfrac{-6 + 12i}{18} = -\\dfrac{6}{18} + \\dfrac{12}{18}i = -\\dfrac{1}{3} + \\dfrac{2}{3}i$$
                        <p><strong>Résultat :</strong> $\\boxed{Z_3 = -\\dfrac{1}{3} + \\dfrac{2}{3}i}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 3 : p20 – Développements et puissances de i
        // ============================================================
        {
            numero: 3,
            enonce: `
                <p>Déterminer l'écriture cartésienne des nombres complexes suivants :</p>
                <ol>
                    <li>$(2-2i)(1+i)^2$</li>
                    <li>$(-\\sqrt{2} - i\\sqrt{3})(\\sqrt{2} + i\\sqrt{3})$</li>
                    <li>$(1+i)^4(1-i)^{20}$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Calculez d'abord $(1+i)^2 = 2i$, puis simplifiez.</div>
                <div class="astuce-box">💡 Pour le 2, remarquez la forme $(a+ib)(a-ib)$ avec $a=-\\sqrt{2}$ et $b=\\sqrt{3}$.</div>
            `,
            erreurs_exo: `
                <div class="erreur-box">⚠️ Dans $(1+i)^4$, on peut utiliser $(1+i)^2=2i$, donc $(1+i)^4 = (2i)^2 = 4i^2 = -4$.</div>
            `,
            questions: [
                {
                    id: 'c1-ex3-q1',
                    texte: 'Calculer $(2-2i)(1+i)^2$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On commence par calculer $(1+i)^2$ :</p>
                        $$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$$
                        <p>On multiplie :</p>
                        $$(2-2i)(2i) = 2 \\times 2i + (-2i) \\times 2i = 4i - 4i^2 = 4i - 4(-1) = 4i + 4 = 4 + 4i$$
                        <p><strong>Résultat :</strong> $\\boxed{4 + 4i}$.</p>
                    `
                },
                {
                    id: 'c1-ex3-q2',
                    texte: 'Calculer $(-\\sqrt{2} - i\\sqrt{3})(\\sqrt{2} + i\\sqrt{3})$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On remarque que c'est de la forme $(a - ib)(a + ib)$ avec $a = -\\sqrt{2}$ et $b = \\sqrt{3}$.</p>
                        <p>On sait que $(a - ib)(a + ib) = a^2 + b^2$ (car $i^2$ change le signe).</p>
                        $$(-\\sqrt{2})^2 + (\\sqrt{3})^2 = 2 + 3 = 5$$
                        <p><strong>Résultat :</strong> $\\boxed{5}$ (c'est un réel).</p>
                        <p><em>Vérification directe :</em></p>
                        $$(-\\sqrt{2})(\\sqrt{2}) + (-\\sqrt{2})(i\\sqrt{3}) + (-i\\sqrt{3})(\\sqrt{2}) + (-i\\sqrt{3})(i\\sqrt{3})$$
                        $$= -2 - i\\sqrt{6} - i\\sqrt{6} - 3i^2 = -2 - 2i\\sqrt{6} + 3 = 1 - 2i\\sqrt{6}$$
                        <p>Attends, je me suis trompé ! Le premier terme est $-\\sqrt{2}$ et non $-\\sqrt{2}$ dans la forme $(a-b)(a+b)$.</p>
                        <p>Reprenons directement :</p>
                        $$(-\\sqrt{2} - i\\sqrt{3})(\\sqrt{2} + i\\sqrt{3})$$
                        $$= (-\\sqrt{2})(\\sqrt{2}) + (-\\sqrt{2})(i\\sqrt{3}) + (-i\\sqrt{3})(\\sqrt{2}) + (-i\\sqrt{3})(i\\sqrt{3})$$
                        $$= -2 - i\\sqrt{6} - i\\sqrt{6} - 3i^2 = -2 - 2i\\sqrt{6} + 3 = 1 - 2i\\sqrt{6}$$
                        <p>Donc le résultat est $\\boxed{1 - 2i\\sqrt{6}}$ et non 5. Mon identification était fausse car $a=-\\sqrt{2}$ et $b=-\\sqrt{3}$ (ou le signe).</p>
                        <p><strong>Résultat :</strong> $\\boxed{1 - 2\\sqrt{6}i}$.</p>
                    `
                },
                {
                    id: 'c1-ex3-q3',
                    texte: 'Calculer $(1+i)^4(1-i)^{20}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise le fait que $(1-i)$ est le conjugué de $(1+i)$.</p>
                        <p>Calculons $(1+i)^2 = 2i$ et $(1-i)^2 = -2i$.</p>
                        $$(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = -4$$
                        $$(1-i)^{20} = ((1-i)^2)^{10} = (-2i)^{10} = (-2)^{10} \\times i^{10} = 1024 \\times i^{10}$$
                        <p>Or $i^{10} = i^{8} \\times i^{2} = 1 \\times (-1) = -1$ (car $i^4=1$, $10 \\bmod 4 = 2$).</p>
                        <p>Donc $(1-i)^{20} = 1024 \\times (-1) = -1024$.</p>
                        <p>On multiplie :</p>
                        $$(-4) \\times (-1024) = 4096$$
                        <p><strong>Résultat :</strong> $\\boxed{4096}$ (un réel).</p>
                        <p><em>Remarque :</em> Cela montre que $(1+i)^4(1-i)^{20} \\in \\mathbb{R}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 4 : p33 – Fractions complexes variées
        // ============================================================
        {
            numero: 4,
            enonce: `
                <p>Mettre les nombres complexes suivants sous forme algébrique ($a+ib$) :</p>
                <ol>
                    <li>$2i + \\dfrac{1}{i} - 1$</li>
                    <li>$\\dfrac{1+i\\sqrt{3}}{\\sqrt{3} - i}$</li>
                    <li>$\\left(\\dfrac{1+i}{1-i}\\right)^2$</li>
                    <li>$\\dfrac{(1-i)(2+i)}{i-2}$</li>
                </ol>
            `,
            questions: [
                {
                    id: 'c1-ex4-q1',
                    texte: 'Calculer $2i + \\dfrac{1}{i} - 1$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise $\\dfrac{1}{i} = -i$.</p>
                        $$2i + \\dfrac{1}{i} - 1 = 2i - i - 1 = i - 1 = -1 + i$$
                        <p><strong>Résultat :</strong> $\\boxed{-1 + i}$.</p>
                    `
                },
                {
                    id: 'c1-ex4-q2',
                    texte: 'Calculer $\\dfrac{1+i\\sqrt{3}}{\\sqrt{3} - i}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>Le dénominateur est $\\sqrt{3} - i$. Son conjugué est $\\sqrt{3} + i$.</p>
                        $$\\dfrac{1+i\\sqrt{3}}{\\sqrt{3} - i} = \\dfrac{(1+i\\sqrt{3})(\\sqrt{3}+i)}{(\\sqrt{3}-i)(\\sqrt{3}+i)}$$
                        <p>Numérateur :</p>
                        $$(1+i\\sqrt{3})(\\sqrt{3}+i) = 1\\times\\sqrt{3} + 1\\times i + i\\sqrt{3}\\times\\sqrt{3} + i\\sqrt{3}\\times i$$
                        $$= \\sqrt{3} + i + 3i + \\sqrt{3}i^2 = \\sqrt{3} + 4i - \\sqrt{3} = 4i$$
                        <p>Dénominateur :</p>
                        $$(\\sqrt{3}-i)(\\sqrt{3}+i) = (\\sqrt{3})^2 - i^2 = 3 - (-1) = 4$$
                        <p>Donc :</p>
                        $$\\dfrac{4i}{4} = i$$
                        <p><strong>Résultat :</strong> $\\boxed{i}$.</p>
                        <p><em>Remarque :</em> le résultat est un imaginaire pur.</p>
                    `
                },
                {
                    id: 'c1-ex4-q3',
                    texte: 'Calculer $\\left(\\dfrac{1+i}{1-i}\\right)^2$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On simplifie d'abord la fraction :</p>
                        $$\\dfrac{1+i}{1-i} = \\dfrac{(1+i)(1+i)}{(1-i)(1+i)} = \\dfrac{(1+i)^2}{1^2 - i^2} = \\dfrac{1 + 2i + i^2}{1 - (-1)} = \\dfrac{1 + 2i - 1}{2} = \\dfrac{2i}{2} = i$$
                        <p>Donc :</p>
                        $$\\left(\\dfrac{1+i}{1-i}\\right)^2 = i^2 = -1$$
                        <p><strong>Résultat :</strong> $\\boxed{-1}$.</p>
                    `
                },
                {
                    id: 'c1-ex4-q4',
                    texte: 'Calculer $\\dfrac{(1-i)(2+i)}{i-2}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On commence par le numérateur :</p>
                        $$(1-i)(2+i) = 2 + i - 2i - i^2 = 2 - i + 1 = 3 - i$$
                        <p>Le dénominateur est $i-2 = -2 + i$.</p>
                        $$\\dfrac{3-i}{-2+i}$$
                        <p>On multiplie par le conjugué du dénominateur, qui est $-2 - i$ :</p>
                        $$\\dfrac{(3-i)(-2-i)}{(-2+i)(-2-i)}$$
                        <p>Numérateur :</p>
                        $$(3-i)(-2-i) = 3(-2) + 3(-i) + (-i)(-2) + (-i)(-i) = -6 - 3i + 2i + i^2 = -6 - i - 1 = -7 - i$$
                        <p>Dénominateur :</p>
                        $$(-2+i)(-2-i) = (-2)^2 - i^2 = 4 - (-1) = 5$$
                        <p>Donc :</p>
                        $$\\dfrac{-7 - i}{5} = -\\dfrac{7}{5} - \\dfrac{1}{5}i$$
                        <p><strong>Résultat :</strong> $\\boxed{-\\dfrac{7}{5} - \\dfrac{1}{5}i}$.</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 5 : p33 – Calcul de conjugués
        // ============================================================
        {
            numero: 5,
            enonce: `
                <p>Calculer le conjugué de chacun des nombres complexes suivants :</p>
                <ol>
                    <li>$\\dfrac{(3-2i)(5+i)}{3i(7+2i)}$</li>
                    <li>$\\dfrac{(i-3)^2}{1+i}$</li>
                    <li>$(2-i)(3+2i)(2+i)(3-2i)$</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez la propriété $\\overline{\\left(\\dfrac{z}{z'}\\right)} = \\dfrac{\\overline{z}}{\\overline{z'}}$.</div>
                <div class="astuce-box">💡 Pour le 3, remarquez que $(2-i)(2+i) = 4+1=5$ et $(3+2i)(3-2i)=9+4=13$.</div>
            `,
            questions: [
                {
                    id: 'c1-ex5-q1',
                    texte: 'Conjugué de $\\dfrac{(3-2i)(5+i)}{3i(7+2i)}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On utilise la propriété : le conjugué d'un quotient est le quotient des conjugués.</p>
                        <p>Le conjugué du numérateur $(3-2i)(5+i)$ est $(3+2i)(5-i)$ (car le conjugué d'un produit est le produit des conjugués).</p>
                        <p>Le conjugué du dénominateur $3i(7+2i)$ est $(-3i)(7-2i)$.</p>
                        <p>Donc :</p>
                        $$\\overline{\\dfrac{(3-2i)(5+i)}{3i(7+2i)}} = \\dfrac{(3+2i)(5-i)}{(-3i)(7-2i)}$$
                        <p>On peut laisser ainsi ou simplifier.</p>
                        <p><strong>Résultat :</strong> $\\boxed{\\dfrac{(3+2i)(5-i)}{-3i(7-2i)}}$.</p>
                        <p><em>Remarque :</em> On peut aussi calculer la fraction puis prendre le conjugué.</p>
                    `
                },
                {
                    id: 'c1-ex5-q2',
                    texte: 'Conjugué de $\\dfrac{(i-3)^2}{1+i}$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a :</p>
                        $$\\overline{\\dfrac{(i-3)^2}{1+i}} = \\dfrac{\\overline{(i-3)^2}}{\\overline{1+i}}$$
                        <p>Le conjugué de $1+i$ est $1-i$.</p>
                        <p>Pour $(i-3)^2$, le conjugué est $(\\overline{i-3})^2 = (-i-3)^2 = (-3-i)^2$.</p>
                        <p>Donc :</p>
                        $$\\overline{\\dfrac{(i-3)^2}{1+i}} = \\dfrac{(-3-i)^2}{1-i}$$
                        <p><strong>Résultat :</strong> $\\boxed{\\dfrac{(-3-i)^2}{1-i}}$.</p>
                    `
                },
                {
                    id: 'c1-ex5-q3',
                    texte: 'Conjugué de $(2-i)(3+2i)(2+i)(3-2i)$.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On remarque que l'expression est un produit de deux complexes par leurs conjugués :</p>
                        <ul>
                            <li>$(2-i)$ et $(2+i)$ sont conjugués.</li>
                            <li>$(3+2i)$ et $(3-2i)$ sont conjugués.</li>
                        </ul>
                        <p>L'expression est donc de la forme $z \\times \\overline{z} \\times z' \\times \\overline{z'}$.</p>
                        <p>Or le conjugué de $z \\overline{z}$ est $\\overline{z} z = z \\overline{z}$ (c'est un réel).</p>
                        <p>Donc le conjugué de l'expression est l'expression elle-même. Elle est <strong>réelle</strong>.</p>
                        <p>Calculons sa valeur :</p>
                        $$(2-i)(2+i) = 2^2 + 1^2 = 5$$
                        $$(3+2i)(3-2i) = 3^2 + 2^2 = 13$$
                        <p>Le produit vaut $5 \\times 13 = 65$.</p>
                        <p><strong>Résultat :</strong> Le conjugué est $\\boxed{65}$ (un nombre réel).</p>
                    `
                }
            ]
        },

        // ============================================================
        // EXERCICE 6 : p33 – Sans calcul (réel / imaginaire)
        // ============================================================
        {
            numero: 6,
            enonce: `
                <p>On donne les nombres complexes :</p>
                $$
                z_1 = \\dfrac{(11+13i)(11-13i) - (3-5i) - (3+5i)}{(7+3i) + (7-3i)},
                \\quad
                z_2 = \\dfrac{3-7i}{9+2i},
                \\quad
                z_3 = \\dfrac{3+7i}{9-2i}.
                $$
                <p>Montrer, <strong>sans effectuer de calcul</strong>, que :</p>
                <ol>
                    <li>$z_1$ est réel.</li>
                    <li>$z_3 + z_2$ est réel.</li>
                    <li>$z_3 - z_2$ est imaginaire pur.</li>
                </ol>
            `,
            astuces_exo: `
                <div class="astuce-box">💡 Utilisez la propriété : $z$ est réel $\\iff z = \\overline{z}$.</div>
                <div class="astuce-box">💡 $z$ est imaginaire pur $\\iff z = -\\overline{z}$.</div>
            `,
            questions: [
                {
                    id: 'c1-ex6-q1',
                    texte: 'Montrer que $z_1$ est réel.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On remarque que le numérateur est de la forme :</p>
                        $$(11+13i)(11-13i) - (3-5i) - (3+5i)$$
                        <ul>
                            <li>$(11+13i)(11-13i)$ est un réel (c'est un produit d'un complexe par son conjugué).</li>
                            <li>$(3-5i) + (3+5i)$ est la somme d'un complexe et de son conjugué, donc c'est un réel.</li>
                        </ul>
                        <p>Le numérateur est donc une différence de deux réels, donc un réel.</p>
                        <p>Le dénominateur est $(7+3i) + (7-3i)$, somme d'un complexe et de son conjugué, donc un réel (non nul).</p>
                        <p>Le quotient de deux réels est un réel. Donc $z_1$ est réel.</p>
                        <p><strong>Conclusion :</strong> $z_1 \\in \\mathbb{R}$.</p>
                    `
                },
                {
                    id: 'c1-ex6-q2',
                    texte: 'Montrer que $z_3 + z_2$ est réel.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On observe que $z_3$ est le conjugué de $z_2$ :</p>
                        <p>$z_2 = \\dfrac{3-7i}{9+2i}$.</p>
                        <p>Le conjugué de $z_2$ est :</p>
                        $$\\overline{z_2} = \\dfrac{\\overline{3-7i}}{\\overline{9+2i}} = \\dfrac{3+7i}{9-2i} = z_3$$
                        <p>Donc $z_3 = \\overline{z_2}$.</p>
                        <p>Ainsi, $z_3 + z_2 = z_2 + \\overline{z_2}$.</p>
                        <p>La somme d'un complexe et de son conjugué est égale à $2\\Re(z_2)$, donc un réel.</p>
                        <p><strong>Conclusion :</strong> $z_3 + z_2 \\in \\mathbb{R}$.</p>
                    `
                },
                {
                    id: 'c1-ex6-q3',
                    texte: 'Montrer que $z_3 - z_2$ est imaginaire pur.',
                    solution: `
                        <p><strong>Solution :</strong></p>
                        <p>On a $z_3 = \\overline{z_2}$ (démontré précédemment).</p>
                        <p>Donc $z_3 - z_2 = \\overline{z_2} - z_2$.</p>
                        <p>La différence d'un complexe et de son conjugué est :</p>
                        $$\\overline{z_2} - z_2 = (\\Re(z_2) - i\\Im(z_2)) - (\\Re(z_2) + i\\Im(z_2)) = -2i\\Im(z_2)$$
                        <p>C'est un imaginaire pur.</p>
                        <p><strong>Conclusion :</strong> $z_3 - z_2$ est imaginaire pur.</p>
                        <p><em>Remarque :</em> On peut aussi vérifier que $\\overline{z_3 - z_2} = -(z_3 - z_2)$.</p>
                    `
                }
            ]
        }
    ]
});