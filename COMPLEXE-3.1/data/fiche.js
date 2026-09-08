// data/fiche.js – Fiche de synthèse : Nombres complexes
// ========================================================
// Basée sur le PDF "fiche.pdf" – Version 2026

window.fiches = {
    // ============================================================
    // ONGLET 1 : ALGÈBRE
    // ============================================================
    algebre: {
        titre: "📐 Algèbre – Forme cartésienne et conjugué",
        contenu: [
            {
                sousTitre: "Forme cartésienne (algébrique)",
                formules: [
                    "$$z = a + ib \\quad (a,b \\in \\mathbb{R})$$",
                    "Si $a = 0$ alors $z = ib$ : $z$ est <strong>imaginaire pur</strong>.",
                    "Si $b = 0$ alors $z = a$ : $z$ est <strong>réel</strong>.",
                    "$\\Re(z) = a$ (partie réelle), $\\Im(z) = b$ (partie imaginaire)."
                ]
            },
            {
                sousTitre: "Conjugué d'un nombre complexe",
                formules: [
                    "Si $z = a + ib$, alors $\\overline{z} = a - ib$.",
                    "$$z + \\overline{z} = 2a = 2\\Re(z)$$",
                    "$$z - \\overline{z} = 2ib = 2i\\Im(z)$$",
                    "$$z \\cdot \\overline{z} = a^2 + b^2 = |z|^2$$",
                    "$$z \\in \\mathbb{R} \\iff z = \\overline{z}$$",
                    "$$z \\text{ est imaginaire pur} \\iff z = -\\overline{z}$$"
                ]
            },
            {
                sousTitre: "Opérations sur les conjugués",
                formules: [
                    "$$\\overline{z + z'} = \\overline{z} + \\overline{z'}$$",
                    "$$\\overline{z - z'} = \\overline{z} - \\overline{z'}$$",
                    "$$\\overline{z \\times z'} = \\overline{z} \\times \\overline{z'}$$",
                    "$$\\overline{\\left(\\frac{z}{z'}\\right)} = \\frac{\\overline{z}}{\\overline{z'}} \\quad (z' \\neq 0)$$",
                    "$$\\overline{z^n} = (\\overline{z})^n \\quad (n \\in \\mathbb{N})$$"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 2 : GÉOMÉTRIE
    // ============================================================
    geometrie: {
        titre: "📌 Géométrie – Affixe, repère et symétries",
        contenu: [
            {
                sousTitre: "Affixe d'un point",
                formules: [
                    "Si $z = x + iy$, alors le point $M$ a pour coordonnées $M(x,y)$.",
                    "$$z_M = z \\quad \\text{ou} \\quad \\text{Aff}(M) = z$$"
                ]
            },
            {
                sousTitre: "Affixe d'un vecteur",
                formules: [
                    "L'affixe du vecteur $\\overrightarrow{AB}$ est :",
                    "$$z_{\\overrightarrow{AB}} = z_B - z_A$$",
                    "$$\\text{Aff}(\\overrightarrow{AB}) = z_B - z_A$$",
                    "$$\\text{Aff}(\\alpha \\overrightarrow{AB}) = \\alpha \\text{Aff}(\\overrightarrow{AB})$$",
                    "$$\\text{Aff}(\\overrightarrow{AB} + \\overrightarrow{BC}) = \\text{Aff}(\\overrightarrow{AB}) + \\text{Aff}(\\overrightarrow{BC})$$"
                ]
            },
            {
                sousTitre: "Repère complexe – Symétries",
                formules: [
                    "Symétrie par rapport à l'axe des abscisses :",
                    "$$z_{M'} = \\overline{z_M} = x - iy$$",
                    "Symétrie par rapport à l'axe des ordonnées :",
                    "$$z_{M'} = -\\overline{z_M} = -x + iy$$",
                    "Symétrie par rapport au point O (origine) :",
                    "$$z_{M'} = -z_M = -x - iy$$"
                ]
            },
            {
                sousTitre: "Colinéarité et orthogonalité",
                formules: [
                    "<strong>Colinéarité :</strong> $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires",
                    "$$\\iff \\frac{z_B - z_A}{z_D - z_C} \\in \\mathbb{R}$$",
                    "<strong>Orthogonalité :</strong> $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont orthogonaux",
                    "$$\\iff \\frac{z_B - z_A}{z_D - z_C} \\in i\\mathbb{R}$$",
                    "(c'est-à-dire que le quotient est un imaginaire pur)"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 3 : MODULE
    // ============================================================
    module: {
        titre: "📏 Module – Définition et propriétés",
        contenu: [
            {
                sousTitre: "Définition du module",
                formules: [
                    "Pour $z = a + ib$ :",
                    "$$|z| = \\sqrt{a^2 + b^2} = OM$$",
                    "où $M$ est le point d'affixe $z$.",
                    "$$|z| \\geq 0 \\quad \\text{et} \\quad |z| = 0 \\iff z = 0$$"
                ]
            },
            {
                sousTitre: "Distance entre deux points",
                formules: [
                    "$$AB = |z_B - z_A|$$",
                    "$$OM = |z_M|$$",
                    "$$MN = |z_N - z_M|$$"
                ]
            },
            {
                sousTitre: "Propriétés du module",
                formules: [
                    "$$|\\overline{z}| = |z|$$",
                    "$$|z|^2 = z\\overline{z}$$",
                    "$$|z \\times z'| = |z| \\times |z'|$$",
                    "$$\\left|\\frac{z}{z'}\\right| = \\frac{|z|}{|z'|} \\quad (z' \\neq 0)$$",
                    "$$|z^n| = |z|^n \\quad (n \\in \\mathbb{N})$$",
                    "$$|z + z'| \\leq |z| + |z'|$$ (Inégalité triangulaire)"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 4 : ARGUMENT
    // ============================================================
    argument: {
        titre: "🎯 Argument – Définition et propriétés",
        contenu: [
            {
                sousTitre: "Définition de l'argument",
                formules: [
                    "Pour $z \\neq 0$ :",
                    "$$\\arg(z) \\equiv (\\vec{u}, \\overrightarrow{OM}) \\ [2\\pi]$$",
                    "$$\\arg(z_A) \\equiv (\\vec{u}, \\overrightarrow{OA}) \\ [2\\pi]$$",
                    "$$\\arg(z_B - z_A) \\equiv (\\vec{u}, \\overrightarrow{AB}) \\ [2\\pi]$$"
                ]
            },
            {
                sousTitre: "Arguments particuliers",
                formules: [
                    "$$\\arg(\\alpha) \\equiv 0 \\ [2\\pi] \\quad (\\alpha \\in \\mathbb{R}_+^*)$$",
                    "$$\\arg(-\\alpha) \\equiv \\pi \\ [2\\pi] \\quad (\\alpha \\in \\mathbb{R}_+^*)$$",
                    "$$\\arg(i\\alpha) \\equiv \\frac{\\pi}{2} \\ [2\\pi] \\quad (\\alpha \\in \\mathbb{R}_+^*)$$",
                    "$$\\arg(-i\\alpha) \\equiv -\\frac{\\pi}{2} \\ [2\\pi] \\quad (\\alpha \\in \\mathbb{R}_+^*)$$"
                ]
            },
            {
                sousTitre: "Propriétés de l'argument",
                formules: [
                    "$$\\arg(\\overline{z}) \\equiv -\\arg(z) \\ [2\\pi]$$",
                    "$$\\arg(-z) \\equiv \\arg(z) + \\pi \\ [2\\pi]$$",
                    "$$\\arg(z \\times z') \\equiv \\arg(z) + \\arg(z') \\ [2\\pi]$$",
                    "$$\\arg\\left(\\frac{z}{z'}\\right) \\equiv \\arg(z) - \\arg(z') \\ [2\\pi]$$",
                    "$$\\arg(z^n) \\equiv n\\arg(z) \\ [2\\pi] \\quad (n \\in \\mathbb{N})$$"
                ]
            },
            {
                sousTitre: "Forme trigonométrique",
                formules: [
                    "Pour $z \\neq 0$ :",
                    "$$z = r(\\cos\\theta + i\\sin\\theta)$$",
                    "avec $r = |z| > 0$ et $\\theta \\equiv \\arg(z) \\ [2\\pi]$.",
                    "$$\\cos\\theta = \\frac{\\Re(z)}{|z|}, \\quad \\sin\\theta = \\frac{\\Im(z)}{|z|}$$",
                    "$$\\tan\\theta = \\frac{\\Im(z)}{\\Re(z)} \\quad (\\text{si } \\Re(z) \\neq 0)$$"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 5 : EXPONENTIELLE
    // ============================================================
    exponentielle: {
        titre: "⚡ Forme exponentielle et formules d'Euler",
        contenu: [
            {
                sousTitre: "Forme exponentielle",
                formules: [
                    "Pour $z \\neq 0$ :",
                    "$$z = r e^{i\\theta} \\quad \\text{avec} \\quad r = |z|, \\ \\theta = \\arg(z)$$",
                    "$$e^{i0} = 1, \\quad e^{i\\pi} = -1, \\quad e^{i\\pi/2} = i, \\quad e^{-i\\pi/2} = -i$$"
                ]
            },
            {
                sousTitre: "Égalité de deux exponentielles",
                formules: [
                    "$$r e^{i\\theta} = r' e^{i\\theta'} \\iff \\begin{cases} r = r' \\\\ \\theta \\equiv \\theta' \\ [2\\pi] \\end{cases}$$"
                ]
            },
            {
                sousTitre: "Propriétés de l'exponentielle",
                formules: [
                    "$$e^{i\\theta} \\times e^{i\\theta'} = e^{i(\\theta + \\theta')}$$",
                    "$$\\frac{e^{i\\theta}}{e^{i\\theta'}} = e^{i(\\theta - \\theta')}$$",
                    "$$\\frac{1}{e^{i\\theta}} = e^{-i\\theta}$$",
                    "$$(e^{i\\theta})^n = e^{in\\theta} \\quad (n \\in \\mathbb{N})$$"
                ]
            },
            {
                sousTitre: "Formules d'Euler",
                formules: [
                    "$$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$$",
                    "$$\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$",
                    "$$e^{i\\theta} + e^{i\\alpha} = 2\\cos\\left(\\frac{\\theta - \\alpha}{2}\\right) e^{i\\frac{\\theta + \\alpha}{2}}$$",
                    "$$e^{i\\theta} - e^{i\\alpha} = 2i\\sin\\left(\\frac{\\theta - \\alpha}{2}\\right) e^{i\\frac{\\theta + \\alpha}{2}}$$"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 6 : ÉQUATIONS
    // ============================================================
    equations: {
        titre: "📝 Équations – Racines et second degré",
        contenu: [
            {
                sousTitre: "Racine carrée d'un nombre complexe",
                formules: [
                    "<strong>Cas 1 :</strong> $Z = \\alpha \\in \\mathbb{R}_+^*$",
                    "$$\\text{Racines carrées : } \\pm\\sqrt{\\alpha}$$",
                    "<strong>Cas 2 :</strong> $Z = -\\alpha \\in \\mathbb{R}_-^*$",
                    "$$\\text{Racines carrées : } \\pm i\\sqrt{\\alpha}$$",
                    "<strong>Cas 3 :</strong> $Z = i\\alpha \\ (\\alpha \\in \\mathbb{R}_+^*)$",
                    "$$\\text{On a : } (\\sqrt{\\alpha}(1+i))^2 = 2i\\alpha$$",
                    "$$\\text{Racines carrées : } \\pm \\sqrt{\\alpha}(1+i)$$",
                    "<strong>Cas 4 :</strong> $Z = x + iy$ (méthode générale)",
                    "On pose $\\delta = a + ib$. On résout :",
                    "$$\\begin{cases} a^2 + b^2 = |Z| \\\\ a^2 - b^2 = \\Re(Z) \\\\ 2ab = \\Im(Z) \\end{cases}$$"
                ]
            },
            {
                sousTitre: "Méthode exponentielle pour les racines carrées",
                formules: [
                    "Si $Z = r e^{i\\theta}$, alors les racines carrées sont :",
                    "$$\\delta_1 = \\sqrt{r} \\, e^{i\\theta/2} \\quad \\text{et} \\quad \\delta_2 = -\\sqrt{r} \\, e^{i\\theta/2}$$"
                ]
            },
            {
                sousTitre: "Racines n-ièmes de l'unité",
                formules: [
                    "L'équation $z^n = 1$ admet $n$ solutions distinctes :",
                    "$$z_k = e^{\\frac{2ik\\pi}{n}} \\quad (k = 0, 1, 2, \\ldots, n-1)$$",
                    "Pour $n=3$ : $1, j, j^2$ avec $j = e^{2i\\pi/3} = \\dfrac{-1 + i\\sqrt{3}}{2}$."
                ]
            },
            {
                sousTitre: "Racines n-ièmes d'un complexe",
                formules: [
                    "Soit $a = r e^{i\\theta}$ ($r > 0$). L'équation $z^n = a$ admet $n$ solutions :",
                    "$$z_k = \\sqrt[n]{r} \\, e^{i\\left(\\frac{\\theta}{n} + \\frac{2k\\pi}{n}\\right)} \\quad (k = 0, 1, \\ldots, n-1)$$"
                ]
            },
            {
                sousTitre: "Équation du second degré",
                formules: [
                    "$$az^2 + bz + c = 0 \\quad (a \\in \\mathbb{C}^*, b,c \\in \\mathbb{C})$$",
                    "On calcule $\\Delta = b^2 - 4ac$.",
                    "Soit $\\delta$ une racine carrée de $\\Delta$.",
                    "Les solutions sont :",
                    "$$z_1 = \\frac{-b - \\delta}{2a} \\quad \\text{et} \\quad z_2 = \\frac{-b + \\delta}{2a}$$",
                    "<strong>Cas particuliers :</strong>",
                    "Si $a + b + c = 0$, alors $z_1 = 1$ et $z_2 = \\dfrac{c}{a}$.",
                    "Si $a - b + c = 0$, alors $z_1 = -1$ et $z_2 = -\\dfrac{c}{a}$.",
                    "<strong>Somme et produit :</strong>",
                    "$$z_1 + z_2 = -\\frac{b}{a} \\quad \\text{et} \\quad z_1 \\times z_2 = \\frac{c}{a}$$",
                    "<strong>Factorisation :</strong>",
                    "$$az^2 + bz + c = a(z - z_1)(z - z_2)$$",
                    "Si $a,b,c \\in \\mathbb{R}$ et $\\Delta < 0$, alors $z_2 = \\overline{z_1}$."
                ]
            },
            {
                sousTitre: "Équation du 3ème degré",
                formules: [
                    "Si $z_0$ est une solution de $az^3 + bz^2 + cz + d = 0$ (avec $a \\neq 0$), alors :",
                    "$$az^3 + bz^2 + cz + d = (z - z_0)(az^2 + \\alpha z + \\beta)$$",
                    "On détermine $\\alpha$ et $\\beta$ par identification."
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 7 : GÉOMÉTRIE DES FIGURES (extra)
    // ============================================================
    figures: {
        titre: "📐 Figures géométriques – Propriétés",
        contenu: [
            {
                sousTitre: "Quadrilatères",
                formules: [
                    "<strong>Parallélogramme :</strong>",
                    "$$\\text{Aff}(\\overrightarrow{AB}) = \\text{Aff}(\\overrightarrow{DC}) \\iff z_A + z_C = z_B + z_D$$",
                    "ou encore : les diagonales ont le même milieu.",
                    "<strong>Losange :</strong>",
                    "$$\\text{Parallélogramme} + AB = AD$$",
                    "<strong>Rectangle :</strong>",
                    "$$\\text{Parallélogramme} + \\frac{z_B - z_A}{z_D - z_A} \\in i\\mathbb{R} \\quad (AB \\perp AD)$$",
                    "<strong>Carré :</strong>",
                    "$$\\text{Losange} + \\text{Rectangle}$$",
                    "soit : $AB = AD$ et $\\dfrac{z_B - z_A}{z_D - z_A} \\in i\\mathbb{R}$.",
                    "<strong>Trapèze :</strong>",
                    "$$\\frac{z_B - z_A}{z_D - z_C} \\in \\mathbb{R} \\quad (AB \\parallel CD)$$"
                ]
            },
            {
                sousTitre: "Triangles",
                formules: [
                    "<strong>Triangle isocèle :</strong>",
                    "$$AB = AC$$",
                    "<strong>Triangle rectangle :</strong>",
                    "$$\\frac{z_B - z_A}{z_C - z_A} \\in i\\mathbb{R} \\quad (AB \\perp AC)$$",
                    "<strong>Triangle équilatéral :</strong>",
                    "$$AB = AC = BC$$",
                    "ou bien : $AB = AC$ et $\\arg\\left(\\dfrac{z_B - z_A}{z_C - z_A}\\right) \\equiv \\pm \\dfrac{\\pi}{3} \\ [2\\pi]$.",
                    "<strong>Centre du cercle circonscrit :</strong>",
                    "Pour un triangle rectangle, le centre est le <strong>milieu de l'hypoténuse</strong>."
                ]
            },
            {
                sousTitre: "Ensembles de points",
                formules: [
                    "<strong>Cercle de centre A et de rayon $r$ :</strong>",
                    "$$AM = r \\iff |z - z_A| = r$$",
                    "<strong>Médiatrice de [AB] :</strong>",
                    "$$AM = BM \\iff |z - z_A| = |z - z_B|$$",
                    "<strong>Cercle de diamètre [AB] :</strong>",
                    "$$AM \\perp BM \\iff \\arg\\left(\\frac{z - z_A}{z - z_B}\\right) \\equiv \\pm \\frac{\\pi}{2} \\ [2\\pi]$$",
                    "<strong>Demi-droite [At) :</strong>",
                    "$$(\\vec{u}, \\overrightarrow{AM}) \\equiv \\theta \\ [2\\pi] \\iff \\arg(z - z_A) \\equiv \\theta \\ [2\\pi]$$"
                ]
            },
            {
                sousTitre: "Points remarquables",
                formules: [
                    "<strong>Centre de gravité G de ABC :</strong>",
                    "$$z_G = \\frac{z_A + z_B + z_C}{3}$$",
                    "Propriété vectorielle : $\\overrightarrow{GO} + \\overrightarrow{GA} + \\overrightarrow{GB} = \\overrightarrow{0}$.",
                    "<strong>Orthocentre H de ABC :</strong>",
                    "$$\\begin{cases} AH \\perp BC \\\\ BH \\perp AC \\end{cases} \\iff \\begin{cases} \\dfrac{z_H - z_A}{z_C - z_B} \\in i\\mathbb{R} \\\\ \\dfrac{z_H - z_B}{z_C - z_A} \\in i\\mathbb{R} \\end{cases}$$"
                ]
            }
        ]
    },

    // ============================================================
    // ONGLET 8 : REMARQUES UTILES
    // ============================================================
    remarques: {
        titre: "💡 Remarques utiles",
        contenu: [
            {
                sousTitre: "Remarques générales",
                formules: [
                    "<strong>Module et arguments :</strong>",
                    "Si $|z_A| = |z_B| = 1$, alors $A$ et $B$ appartiennent au <strong>cercle trigonométrique</strong> de centre $O$ et de rayon 1.",
                    "<strong>Cercle circonscrit :</strong>",
                    "Si $|z_A| = |z_B| = |z_C|$, alors $A, B, C$ appartiennent au même cercle de centre $O$.",
                    "Si $|z_A| = |z_B|$ et $|z_D| = |z_C|$, alors il existe un cercle de centre $O$ passant par $A, B, C, D$.",
                    "<strong>Racines de l'unité :</strong>",
                    "Les points images des racines $n$-ièmes de l'unité sont les sommets d'un <strong>polygone régulier</strong> inscrit dans le cercle trigonométrique.",
                    "<strong>Angles :</strong>",
                    "$$(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\ [2\\pi]$$"
                ]
            }
        ]
    }
};

// Fonction pour générer le HTML de la fiche (à utiliser dans script.js)
window.genererFicheHTML = function() {
    const sections = [
        { id: 'algebre', label: '📐 Algèbre' },
        { id: 'geometrie', label: '📌 Géométrie' },
        { id: 'module', label: '📏 Module' },
        { id: 'argument', label: '🎯 Argument' },
        { id: 'exponentielle', label: '⚡ Exponentielle' },
        { id: 'equations', label: '📝 Équations' },
        { id: 'figures', label: '📐 Figures' },
        { id: 'remarques', label: '💡 Remarques' }
    ];

    let html = `
        <div class="fiches-tabs">
            ${sections.map((s, i) => `
                <button class="fiche-tab ${i === 0 ? 'active' : ''}" data-tab="${s.id}" onclick="switchFicheTab('${s.id}')">${s.label}</button>
            `).join('')}
        </div>
        <div class="content-area">
    `;

    sections.forEach((s, i) => {
        const data = window.fiches[s.id];
        if (!data) return;
        html += `<div id="fiche-tab-${s.id}" class="fiche-tab-content ${i === 0 ? 'active' : ''}">`;
        html += `<h3 class="fiche-title">${data.titre}</h3>`;
        data.contenu.forEach(section => {
            html += `<div class="fiche-section"><h4>${section.sousTitre}</h4><div class="fiche-content">`;
            section.formules.forEach(f => {
                html += `<div class="formula-box">${f}</div>`;
            });
            html += `</div></div>`;
        });
        html += `</div>`;
    });

    html += `</div>`;
    return html;
};