// data/problemes/part1.js – Problème 1
// =====================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 1,
        titre: "Problème 1 – Bac Sciences Mathématiques (Tunisie)",
        enonce: `
            <p>Soit $f$ une fonction définie et dérivable sur $\\mathbb{R} \\setminus \\{-1, 1\\}$ et $\\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>
            <p>Le graphique ci‑joint représente une partie de la courbe $\\mathcal{C}$ et la droite $\\Delta$ d'équation $y = x$. La partie représentée de $\\mathcal{C}$ admet une tangente horizontale en $O$ et deux asymptotes d'équations respectives : $x = -1$ et $x = 1$.</p>

            <h4>I – Dans cette partie, utiliser le graphique pour répondre aux questions.</h4>
            <ol>
                <li><strong>a</strong> – Déterminer $\\lim_{x \\to -1^-} f(x)$, $\\lim_{x \\to -1^+} f(x)$, $\\lim_{x \\to 1^-} f(x)$ et $\\lim_{x \\to 1^+} f(x)$.</li>
                <li><strong>b</strong> – Dresser le tableau de variation de $f$ sur $[-2, 2]$. (On ne cherchera pas à déterminer $f(2)$ ni $f(-2)$).</li>
                <li><strong>c</strong> – Donner le nombre de solutions de l'équation $f(x) = x$ dans $[-2, 2]$. On désigne par $\\alpha$ celle qui appartient à $]0, 1[$.</li>
            </ol>
            <ol start="2">
                <li>Soit $g$ la restriction de $f$ à $[0, 1[$.</li>
                <li><strong>a</strong> – Vérifier que $g$ réalise une bijection de $[0, 1[$ sur un intervalle $J$ que l'on déterminera.</li>
                <li><strong>b</strong> – Soit $\\mathcal{C}'$ la courbe représentative de la fonction réciproque de $g$. Tracer $\\mathcal{C}'$ dans le repère $(O, \\vec{i}, \\vec{j})$.</li>
            </ol>

            <h4>II – On suppose qu'il existe deux réels $a$ et $b$ tels que pour tout $x \\in \\mathbb{R} \\setminus \\{-1, 1\\}$ on a :</h4>
            $$ f(x) = ax + b + \\ln\\left|\\frac{x+1}{x-1}\\right| $$

            <ol start="1">
                <li><strong>a</strong> – Montrer que $f'(x) = a - \\dfrac{2}{x^2 - 1}$.</li>
                <li><strong>b</strong> – Montrer que $a = -2$ et $b = 0$.</li>
            </ol>
            <ol start="2">
                <li>On suppose dans la suite du problème que $f(x) = -2x + \\ln\\left|\\dfrac{x+1}{x-1}\\right|$.</li>
                <li><strong>a</strong> – Montrer que $f$ est impaire.</li>
                <li><strong>b</strong> – Dresser le tableau de variation de $f$.</li>
            </ol>
            <ol start="3">
                <li>Montrer que la droite $\\Delta$ d'équation $y = -2x$ est une asymptote à la courbe $\\mathcal{C}$.</li>
            </ol>
            <ol start="4">
                <li>Tracer $\\Delta$ et compléter le graphique donné pour obtenir la courbe $\\mathcal{C}$.</li>
            </ol>
            <ol start="5">
                <li>Soit $A(\\alpha)$ une mesure de l'aire de la partie du plan limitée par les courbes $\\mathcal{C}$ et $\\mathcal{C}'$ et les droites d'équations respectives $x = 0$ et $x = \\alpha$. Montrer que $A(\\alpha) = -3\\alpha^2 - 2\\ln(1 - \\alpha^2)$.</li>
            </ol>

            <div class="graph-container" id="graph-probleme1" data-fn="-2*x + log(abs((x+1)/(x-1))); x; -2*x" data-xmin="-4" data-xmax="4" data-colors="#2563eb,#dc2626,#16a34a" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $f$ (bleu), $y=x$ (rouge) et $y=-2x$ (vert).</em></p>
        `,
        questions: [
            {
                id: 'p1q1a',
                texte: "I.1.a – Déterminer les limites aux bornes des asymptotes verticales.",
                solution: `
                    <p>Par lecture graphique :</p>
                    <ul>
                        <li>$\\lim_{x \\to -1^-} f(x) = -\\infty$</li>
                        <li>$\\lim_{x \\to -1^+} f(x) = -\\infty$</li>
                        <li>$\\lim_{x \\to 1^-} f(x) = +\\infty$</li>
                        <li>$\\lim_{x \\to 1^+} f(x) = +\\infty$</li>
                    </ul>
                    <p><strong>Astuce :</strong> Repérer les asymptotes verticales et observer le comportement de la courbe de chaque côté.</p>
                `
            },
            {
                id: 'p1q1b',
                texte: "I.1.b – Dresser le tableau de variation de f sur [-2, 2].",
                solution: `
                    <p>Par lecture graphique sur $[-2, 2]$ (en excluant $-1$ et $1$) :</p>
                    <ul>
                        <li>Sur $[-2, -1[$ : $f$ est strictement <strong>décroissante</strong>.</li>
                        <li>Sur $]-1, 1[$ : $f$ est strictement <strong>croissante</strong> (avec un point d'inflexion en $0$ où la tangente est horizontale).</li>
                        <li>Sur $]1, 2]$ : $f$ est strictement <strong>décroissante</strong>.</li>
                    </ul>

                    <p>Tableau de variation :</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-2$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$2$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">Signe de $f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$0$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">Variations de $f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$f(-2)$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--text-secondary);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600;">$0$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--text-secondary);">$+\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600;">$f(2)$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p><strong>Remarques :</strong></p>
                    <ul>
                        <li>Les barres $\\parallel$ en $-1$ et $1$ indiquent que $f$ n'est <strong>pas définie</strong> en ces points.</li>
                        <li>En $0$, $f'(0)=0$ mais la fonction reste croissante : <strong>point d'inflexion à tangente horizontale</strong>.</li>
                    </ul>
                `
            },
            {
                id: 'p1q1c',
                texte: "I.1.c – Nombre de solutions de f(x) = x dans [-2,2].",
                solution: `
                    <p>Les solutions de $f(x)=x$ sont les abscisses des points d'intersection de $\\mathcal{C}$ avec la droite $y=x$.</p>
                    <p>Par lecture graphique : il y a <strong>3 points d'intersection</strong> :</p>
                    <ul>
                        <li>un dans $]-2,-1[$</li>
                        <li>$O(0,0)$ (car $f(0)=0$)</li>
                        <li>un $\\alpha \\in ]0,1[$</li>
                    </ul>
                    <p>Donc l'équation admet <strong>3 solutions</strong> dans $[-2,2]$.</p>
                `
            },
            {
                id: 'p1q2a',
                texte: "I.2.a – Bijection de g sur [0,1[.",
                solution: `
                    <p>$g$ est la restriction de $f$ à $[0,1[$.</p>
                    <ul>
                        <li>$g$ est continue sur $[0,1[$.</li>
                        <li>$g$ est strictement croissante sur $[0,1[$.</li>
                    </ul>
                    <p>Donc $g$ réalise une bijection de $[0,1[$ sur $J = g([0,1[)$.</p>
                    <p>Détermination de $J$ :</p>
                    <ul>
                        <li>$g(0)=0$</li>
                        <li>$\\lim_{x\\to1^-} g(x)=+\\infty$</li>
                    </ul>
                    <p>Donc $J = [0, +\\infty[$.</p>
                `
            },
            {
                id: 'p1q2b',
                texte: "I.2.b – Tracer la courbe de la réciproque.",
                solution: `
                    <p>$\\mathcal{C}'$ est le symétrique de $\\mathcal{C}$ par rapport à la droite $y=x$.</p>
                    <p><strong>Méthode :</strong> pour chaque point $M(x,y)$ de $\\mathcal{C}$, placer $M'(y,x)$.</p>
                    <p>$O(0,0)$ est invariant.</p>
                `
            },
            {
                id: 'p1q3a',
                texte: "II.1.a – Dérivée de f.",
                solution: `
                    <p>$f(x) = ax+b+\\ln\\left|\\frac{x+1}{x-1}\\right|$</p>
                    <p>On décompose : $f(x)=ax+b+\\ln|x+1|-\\ln|x-1|$</p>
                    <p>D'où $f'(x)=a+\\frac{1}{x+1}-\\frac{1}{x-1}=a-\\frac{2}{x^2-1}$.</p>
                `
            },
            {
                id: 'p1q3b',
                texte: "II.1.b – Détermination de a et b.",
                solution: `
                    <p>Tangente horizontale en $O$ ⇒ $f'(0)=0$.</p>
                    $$ f'(0)=a-\\frac{2}{0-1}=a+2=0 \\Rightarrow a=-2 $$
                    <p>$O\\in\\mathcal{C}$ ⇒ $f(0)=0$.</p>
                    $$ f(0)=b+\\ln\\left|\\frac{1}{-1}\\right| = b+\\ln(1)=b=0 $$
                    <p>Donc $a=-2$, $b=0$.</p>
                `
            },
            {
                id: 'p1q4a',
                texte: "II.2.a – Parité de f.",
                solution: `
                    <p>$f(x)=-2x+\\ln\\left|\\frac{x+1}{x-1}\\right|$</p>
                    <p>Domaine symétrique. Calculons $f(-x)$ :</p>
                    $$ f(-x)=2x+\\ln\\left|\\frac{-x+1}{-x-1}\\right| = 2x+\\ln\\left|\\frac{x-1}{x+1}\\right| = -\\left(-2x+\\ln\\left|\\frac{x+1}{x-1}\\right|\\right) = -f(x) $$
                    <p>Donc $f$ est <strong>impaire</strong>.</p>
                `
            },
            {
                id: 'p1q4b',
                texte: "II.2.b – Tableau de variation complet.",
                solution: `
                    <p>$f'(x) = -2 - \\frac{2}{x^2-1} = -\\frac{2x^2}{x^2-1}$</p>
                    <p>Signe de $f'$ :</p>
                    <ul>
                        <li>$x^2-1>0$ sur $]-\\infty,-1[\\cup]1,+\\infty[$ ⇒ $f'<0$</li>
                        <li>$x^2-1<0$ sur $]-1,1[$ ⇒ $f'>0$</li>
                        <li>$f'(0)=0$</li>
                    </ul>
                    <p>Donc $f$ est décroissante sur $]-\\infty,-1[$, croissante sur $]-1,1[$ (avec point d'inflexion en 0), décroissante sur $]1,+\\infty[$.</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-\\infty$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">Signe de $f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$0$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">Variations de $f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$+\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--text-secondary);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600;">$0$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--text-secondary);">$+\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--bg); font-size:1.4rem;">$\\parallel$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--success);">$+\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600;">$-\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p1q5',
                texte: "II.3 – Asymptote oblique.",
                solution: `
                    <p>$\\lim_{x\\to\\pm\\infty} (f(x)+2x) = \\lim_{x\\to\\pm\\infty} \\ln\\left|\\frac{x+1}{x-1}\\right| = \\ln(1) = 0$.</p>
                    <p>Donc $\\Delta : y=-2x$ est une <strong>asymptote oblique</strong> à $\\mathcal{C}$.</p>
                `
            },
            {
                id: 'p1q6',
                texte: "II.5 – Aire entre les courbes.",
                solution: `
                    <p>Par symétrie, $A(\\alpha) = 2\\int_0^\\alpha (f(x)-x)dx$.</p>
                    <p>Sur $[0,\\alpha]$, $f(x)-x = -3x + \\ln\\left(\\frac{1+x}{1-x}\\right)$.</p>
                    <p>En intégrant et en utilisant $f(\\alpha)=\\alpha$, on obtient :</p>
                    $$ A(\\alpha) = -3\\alpha^2 - 2\\ln(1-\\alpha^2) $$
                `
            }
        ],
        astuces: `
            <ul>
                <li>Lire graphiquement les limites et les variations.</li>
                <li>Utiliser la symétrie pour l'aire entre une courbe et sa réciproque.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas confondre les limites à gauche et à droite.</li>
                <li>Oublier les asymptotes verticales.</li>
            </ul>
        `
    });

    console.log("✅ Problème 1 chargé.");
})();