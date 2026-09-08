// data/aideMemoire.js – Aide-mémoire des nombres complexes
// ==========================================================
// Flip cards : questions sur le recto, réponses sur le verso
// Structure compatible avec le moteur de rendu script.js

window.aideMemoire = {
    // ============================================================
    // SECTION A : RÉFLEXES DE CALCUL
    // ============================================================
    calcul: {
        titre: "🧮 Réflexes de calcul",
        description: "Les automatismes à avoir pour les exercices du Bac",
        items: [
            {
                question: "Comment diviser par un nombre complexe ?",
                reponse: `
                    Multiplier numérateur et dénominateur par le <strong>conjugué</strong> du dénominateur.
                    $$\\frac{1}{a+ib} = \\frac{a-ib}{a^2+b^2}$$
                    <div class="astuce-box">💡 Exemple : $\\frac{1}{1+i} = \\frac{1-i}{2} = \\frac12 - \\frac12 i$</div>
                `
            },
            {
                question: "Que vaut $i^n$ ?",
                reponse: `
                    Cycle de période 4 :
                    $$i^0 = 1,\\quad i^1 = i,\\quad i^2 = -1,\\quad i^3 = -i$$
                    Pour $n \\in \\mathbb{N}$, $i^n = i^{n \\bmod 4}$.
                    <div class="astuce-box">💡 Exemple : $i^{2025} = i^{1} = i$ (car $2025 \\equiv 1 \\ [4]$).</div>
                `
            },
            {
                question: "À quoi sert le conjugué ?",
                reponse: `
                    <ul>
                        <li><strong>Rendre un dénominateur réel</strong> (division).</li>
                        <li><strong>Trouver la partie réelle et imaginaire :</strong>
                            $$\\Re(z) = \\frac{z + \\overline{z}}{2}, \\quad \\Im(z) = \\frac{z - \\overline{z}}{2i}$$
                        </li>
                        <li><strong>Vérifier la nature d'un complexe :</strong>
                            $z$ réel $\\iff \\overline{z} = z$, $z$ imaginaire pur $\\iff \\overline{z} = -z$.
                        </li>
                    </ul>
                `
            },
            {
                question: "Quand un complexe est-il réel ?",
                reponse: `
                    $$z \\in \\mathbb{R} \\iff \\overline{z} = z \\iff \\Im(z) = 0$$
                    <div class="astuce-box">💡 Si $z = a+ib$, la condition est $b = 0$.</div>
                `
            },
            {
                question: "Quand un complexe est-il imaginaire pur ?",
                reponse: `
                    $$z \\text{ est imaginaire pur} \\iff \\overline{z} = -z \\iff \\Re(z) = 0$$
                    <div class="astuce-box">💡 Si $z = a+ib$, la condition est $a = 0$.</div>
                `
            },
            {
                question: "Comment vérifier une division ?",
                reponse: `
                    Multiplier le résultat par le dénominateur : on doit retrouver le numérateur.
                    <div class="astuce-box">💡 Exemple : $\\frac{1}{1+i} = \\frac12 - \\frac12 i$. Vérification : $(1+i)(\\frac12 - \\frac12 i) = 1$.</div>
                `
            },
            {
                question: "Que vaut $\\dfrac{1}{i}$ ?",
                reponse: `
                    $$\\frac{1}{i} = -i$$
                    <div class="erreur-box">⚠️ Ne pas écrire $\\frac{1}{i} = i$ ! C'est une erreur classique.</div>
                `
            },
            {
                question: "Comment identifier deux complexes égaux ?",
                reponse: `
                    $$a+ib = a'+ib' \\iff a = a' \\ \\text{et} \\ b = b'$$
                    <div class="astuce-box">💡 C'est le principe d'<strong>identification</strong> des parties réelles et imaginaires.</div>
                `
            }
        ]
    },

    // ============================================================
    // SECTION B : MODULE ET GÉOMÉTRIE
    // ============================================================
    module: {
        titre: "📏 Module et géométrie",
        description: "Distances, ensembles de points, colinéarité et orthogonalité",
        items: [
            {
                question: "Comment calculer une distance entre deux points ?",
                reponse: `
                    $$AB = |z_B - z_A| \\quad \\text{et} \\quad OM = |z_M|$$
                    <div class="astuce-box">💡 Exemple : $A(1+2i)$ et $B(3-i)$ → $AB = |(3-i) - (1+2i)| = |2-3i| = \\sqrt{13}$.</div>
                `
            },
            {
                question: "Que représente $|z - z_A| = r$ ?",
                reponse: `
                    C'est le <strong>cercle</strong> de centre $A$ et de rayon $r$.
                    <div class="astuce-box">💡 $|z - z_A|$ est la distance $AM$.</div>
                `
            },
            {
                question: "Que représente $|z - z_A| = |z - z_B|$ ?",
                reponse: `
                    C'est la <strong>médiatrice</strong> du segment $[AB]$.
                    <div class="astuce-box">💡 $M$ est équidistant de $A$ et de $B$.</div>
                `
            },
            {
                question: "Comment montrer que 3 points sont alignés ?",
                reponse: `
                    $$\\frac{z_B - z_A}{z_C - z_A} \\in \\mathbb{R}$$
                    <div class="astuce-box">💡 Le rapport des affixes des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ doit être un réel.</div>
                `
            },
            {
                question: "Comment montrer que 2 vecteurs sont orthogonaux ?",
                reponse: `
                    $$\\frac{z_B - z_A}{z_D - z_C} \\in i\\mathbb{R} \\quad (\\text{imaginaire pur})$$
                    <div class="astuce-box">💡 Le rapport des affixes des vecteurs doit être un imaginaire pur.</div>
                `
            },
            {
                question: "Que vaut $|z|^2$ ?",
                reponse: `
                    $$|z|^2 = z\\overline{z} = a^2 + b^2$$
                    <div class="astuce-box">💡 Très utile pour calculer un module ou pour montrer que $|z|=1$ (ssi $z\\overline{z}=1$).</div>
                `
            },
            {
                question: "Que vaut $|z \\times z'|$ ?",
                reponse: `
                    $$|z \\times z'| = |z| \\times |z'|$$
                    <div class="astuce-box">💡 Généralisation : $|z^n| = |z|^n$, $\\left|\\frac{z}{z'}\\right| = \\frac{|z|}{|z'|}$.</div>
                `
            }
        ]
    },

    // ============================================================
    // SECTION C : ARGUMENT ET EXPONENTIELLE
    // ============================================================
    argument: {
        titre: "🎯 Argument et exponentielle",
        description: "Forme trigonométrique, exponentielle et propriétés",
        items: [
            {
                question: "Comment passer de $a+ib$ à $re^{i\\theta}$ ?",
                reponse: `
                    <ol>
                        <li>Calculer $r = |z| = \\sqrt{a^2+b^2}$.</li>
                        <li>Trouver $\\theta$ tel que : $$\\cos\\theta = \\frac{a}{r}, \\quad \\sin\\theta = \\frac{b}{r}$$</li>
                        <li>Écrire $z = r e^{i\\theta}$.</li>
                    </ol>
                    <div class="astuce-box">💡 Exemple : $z = 1+i$ → $r=\\sqrt{2}$, $\\theta=\\pi/4$ → $z = \\sqrt{2} e^{i\\pi/4}$.</div>
                `
            },
            {
                question: "Que vaut $\\arg(z \\times z')$ ?",
                reponse: `
                    $$\\arg(zz') \\equiv \\arg(z) + \\arg(z') \\ [2\\pi]$$
                    <div class="astuce-box">💡 Les arguments s'<strong>ajoutent</strong> dans un produit.</div>
                `
            },
            {
                question: "Que vaut $\\arg(z^n)$ ?",
                reponse: `
                    $$\\arg(z^n) \\equiv n\\arg(z) \\ [2\\pi]$$
                    <div class="astuce-box">💡 C'est la base de la <strong>formule de Moivre</strong>.</div>
                `
            },
            {
                question: "Que vaut $\\arg(\\overline{z})$ ?",
                reponse: `
                    $$\\arg(\\overline{z}) \\equiv -\\arg(z) \\ [2\\pi]$$
                    <div class="astuce-box">💡 Le conjugué symétrise l'argument par rapport à l'axe des abscisses.</div>
                `
            },
            {
                question: "Que vaut $\\arg(-z)$ ?",
                reponse: `
                    $$\\arg(-z) \\equiv \\arg(z) + \\pi \\ [2\\pi]$$
                    <div class="astuce-box">💡 L'opposé ajoute $\\pi$ à l'argument.</div>
                `
            },
            {
                question: "Quelles sont les valeurs remarquables de $e^{i\\theta}$ ?",
                reponse: `
                    $$e^{i0} = 1, \\quad e^{i\\pi} = -1, \\quad e^{i\\pi/2} = i, \\quad e^{-i\\pi/2} = -i$$
                    <div class="astuce-box">💡 Ces valeurs sont à connaître par cœur pour les exercices du Bac.</div>
                `
            },
            {
                question: "Formules d'Euler :",
                reponse: `
                    $$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\quad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$
                    <div class="astuce-box">💡 Elles servent à <strong>linéariser</strong> des expressions trigonométriques.</div>
                `
            },
            {
                question: "Factoriser $e^{i\\theta} \\pm e^{i\\alpha}$ :",
                reponse: `
                    $$e^{i\\theta} + e^{i\\alpha} = 2\\cos\\left(\\frac{\\theta-\\alpha}{2}\\right) e^{i\\frac{\\theta+\\alpha}{2}}$$
                    $$e^{i\\theta} - e^{i\\alpha} = 2i\\sin\\left(\\frac{\\theta-\\alpha}{2}\\right) e^{i\\frac{\\theta+\\alpha}{2}}$$
                    <div class="astuce-box">💡 Très utile pour simplifier des sommes ou différences d'exponentielles.</div>
                `
            }
        ]
    },

    // ============================================================
    // SECTION D : ÉQUATIONS ET RACINES
    // ============================================================
    equations: {
        titre: "📝 Équations et racines",
        description: "Racines n-ièmes, équations du second degré, factorisation",
        items: [
            {
                question: "Comment résoudre $z^n = a$ ?",
                reponse: `
                    Soit $a = r e^{i\\theta}$. Alors :
                    $$z_k = \\sqrt[n]{r} \\, e^{i\\left(\\frac{\\theta}{n} + \\frac{2k\\pi}{n}\\right)} \\quad (k = 0, 1, \\ldots, n-1)$$
                    <div class="astuce-box">💡 Les $n$ solutions forment un <strong>polygone régulier</strong> dans le plan complexe.</div>
                `
            },
            {
                question: "Racines de l'unité : $z^n = 1$",
                reponse: `
                    $$z_k = e^{\\frac{2ik\\pi}{n}}, \\quad k = 0, 1, \\ldots, n-1$$
                    <div class="astuce-box">💡 Pour $n=3$ : $1, j, j^2$ avec $j = e^{2i\\pi/3} = \\frac{-1+i\\sqrt{3}}{2}$.</div>
                `
            },
            {
                question: "Que vaut $j$ et quelles sont ses propriétés ?",
                reponse: `
                    $$j = e^{2i\\pi/3} = \\frac{-1 + i\\sqrt{3}}{2}$$
                    Propriétés :
                    $$1 + j + j^2 = 0, \\quad j^3 = 1, \\quad j^2 = \\overline{j}$$
                    <div class="astuce-box">💡 $j$ est très utile pour factoriser les polynômes de degré 3.</div>
                `
            },
            {
                question: "Comment résoudre $az^2+bz+c=0$ dans $\\mathbb{C}$ ?",
                reponse: `
                    <ol>
                        <li>Calculer $\\Delta = b^2 - 4ac$.</li>
                        <li>Trouver $\\delta$ une racine carrée de $\\Delta$.</li>
                        <li>Les solutions sont : $$z = \\frac{-b \\pm \\delta}{2a}$$</li>
                    </ol>
                    <div class="erreur-box">⚠️ Dans $\\mathbb{C}$, on ne parle pas de "signe" de $\\Delta$.</div>
                `
            },
            {
                question: "Cas particuliers du second degré :",
                reponse: `
                    <ul>
                        <li>Si $a+b+c=0$, alors $z_1 = 1$ et $z_2 = \\dfrac{c}{a}$.</li>
                        <li>Si $a-b+c=0$, alors $z_1 = -1$ et $z_2 = -\\dfrac{c}{a}$.</li>
                    </ul>
                    <div class="astuce-box">💡 À vérifier rapidement quand les coefficients sont simples.</div>
                `
            },
            {
                question: "Somme et produit des racines :",
                reponse: `
                    Pour $az^2+bz+c=0$ :
                    $$z_1 + z_2 = -\\frac{b}{a}, \\quad z_1 \\times z_2 = \\frac{c}{a}$$
                    <div class="astuce-box">💡 Ces formules restent valables dans $\\mathbb{C}$.</div>
                `
            },
            {
                question: "Comment factoriser un polynôme ?",
                reponse: `
                    Si $z_0$ est une racine de $P(z)$, alors :
                    $$P(z) = (z - z_0) \\, Q(z)$$
                    <div class="astuce-box">💡 Utiliser la division euclidienne par $(z - z_0)$ pour trouver $Q$.</div>
                `
            }
        ]
    },

    // ============================================================
    // SECTION E : MÉTHODES ET ASTUCES
    // ============================================================
    methodes: {
        titre: "💡 Méthodes et astuces",
        description: "Angles, points remarquables, nature des figures",
        items: [
            {
                question: "Comment trouver l'angle $\\widehat{BAC}$ ?",
                reponse: `
                    $$(\\overrightarrow{AB},\\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\ [2\\pi]$$
                    <div class="astuce-box">💡 Utile pour déterminer la nature d'un triangle.</div>
                `
            },
            {
                question: "Centre de gravité G de ABC :",
                reponse: `
                    $$z_G = \\frac{z_A + z_B + z_C}{3}$$
                    <div class="astuce-box">💡 Moyenne des affixes des 3 sommets.</div>
                `
            },
            {
                question: "Orthocentre H de ABC :",
                reponse: `
                    $$\\frac{z_H - z_A}{z_C - z_B} \\in i\\mathbb{R} \\quad \\text{et} \\quad \\frac{z_H - z_B}{z_C - z_A} \\in i\\mathbb{R}$$
                    <div class="astuce-box">💡 $AH \\perp BC$ et $BH \\perp AC$.</div>
                `
            },
            {
                question: "Condition pour qu'un quadrilatère soit un carré :",
                reponse: `
                    <ul>
                        <li>Parallélogramme (diagonales même milieu).</li>
                        <li>$$AB = AD$$ (losange).</li>
                        <li>$$\\frac{z_B - z_A}{z_D - z_A} \\in i\\mathbb{R}$$ (rectangle).</li>
                    </ul>
                    <div class="astuce-box">💡 Les 3 conditions sont nécessaires et suffisantes.</div>
                `
            },
            {
                question: "Condition pour qu'un quadrilatère soit un losange :",
                reponse: `
                    <ul>
                        <li>Parallélogramme (diagonales même milieu).</li>
                        <li>$$AB = AD$$ (côtés consécutifs égaux).</li>
                    </ul>
                    <div class="astuce-box">💡 Un losange est un parallélogramme avec 4 côtés égaux.</div>
                `
            },
            {
                question: "Condition pour qu'un quadrilatère soit un rectangle :",
                reponse: `
                    <ul>
                        <li>Parallélogramme (diagonales même milieu).</li>
                        <li>$$\\frac{z_B - z_A}{z_D - z_A} \\in i\\mathbb{R}$$ (côtés consécutifs orthogonaux).</li>
                    </ul>
                    <div class="astuce-box">💡 $AB \\perp AD$.</div>
                `
            },
            {
                question: "Condition pour qu'un triangle soit équilatéral :",
                reponse: `
                    $$AB = AC = BC$$
                    ou bien :
                    $$AB = AC \\ \\text{et} \\ \\arg\\left(\\frac{z_B - z_A}{z_C - z_A}\\right) \\equiv \\pm\\frac{\\pi}{3} \\ [2\\pi]$$
                    <div class="astuce-box">💡 L'angle $\\widehat{BAC}$ doit être de $60°$.</div>
                `
            },
            {
                question: "Cercle de diamètre [AB] :",
                reponse: `
                    $$M \\in \\text{cercle de diamètre } [AB] \\iff AM \\perp BM$$
                    $$\\iff \\arg\\left(\\frac{z - z_A}{z - z_B}\\right) \\equiv \\pm\\frac{\\pi}{2} \\ [2\\pi]$$
                    <div class="astuce-box">💡 Le cercle de diamètre [AB] est l'ensemble des points M tels que $\\widehat{AMB} = 90°$.</div>
                `
            }
        ]
    }
};