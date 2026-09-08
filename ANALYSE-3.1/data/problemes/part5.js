// data/problemes/part5.js – Problème 5 (corrigé, sans équivalents)
// =========================================================================

(function() {
    if (typeof window.problemes === 'undefined') {
        console.error("❌ problemes_base.js doit être chargé avant les parties.");
        return;
    }

    window.problemes.items.push({
        id: 5,
        titre: "Problème 5 – Fonction définie par morceaux (logarithme et conditions)",
        enonce: `
            <p>Soit $f$ une fonction définie sur $\\mathbb{R}$ et $\\mathcal{C}$ sa courbe représentative dans le plan muni d’un repère orthonormé $(O, \\vec{i}, \\vec{j})$.</p>
            <p>On désigne par :</p>
            <ul>
                <li>$g$ la restriction de $f$ à l’intervalle $]0, +\\infty[$</li>
                <li>$h$ la restriction de $f$ à l’intervalle $]-\\infty, 0]$ (avec $h(0)=0$)</li>
            </ul>

            <ol>
                <li>On donne $g(x) = x(1 - \\ln x)$ pour tout $x \\in ]0, +\\infty[$.</li>
                <li><strong>a</strong> – Calculer $\\lim_{x \\to 0^+} g(x)$.</li>
                <li><strong>b</strong> – Calculer $\\lim_{x \\to +\\infty} g(x)$ et $\\lim_{x \\to +\\infty} \\dfrac{g(x)}{x}$. Que peut-on dire de la branche infinie de $\\mathcal{C}$ au voisinage de $+\\infty$ ?</li>
                <li><strong>c</strong> – Dresser le tableau de variation de $g$.</li>
                <li><strong>d</strong> – Résoudre dans $]0, +\\infty[$ l’équation $g(x) = 0$.</li>
            </ol>

            <ol start="2">
                <li>On suppose que $h$ vérifie les conditions suivantes :</li>
                <ul>
                    <li>$h$ est dérivable sur $]-\\infty, 0]$.</li>
                    <li>Le tableau de variation de $h$ est :</li>
                </ul>
                <table class="variation-table" style="width:60%; margin:10px auto;">
                    <thead>
                        <tr>
                            <th style="border:1px solid var(--border); padding:8px; text-align:center; background:var(--accent-gradient); color:white;">$x$</th>
                            <th style="border:1px solid var(--border); padding:8px; text-align:center; background:var(--accent-gradient); color:white;">$-\\infty$</th>
                            <th style="border:1px solid var(--border); padding:8px; text-align:center; background:var(--accent-gradient); color:white;">$0$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center; font-weight:700;">$h'(x)$</td>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center; color:var(--success);">$+$</td>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center; color:var(--success);">$1$</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center; font-weight:700;">$h(x)$</td>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center;">
                                <span style="display:block; color:var(--danger);">$-\\infty$</span>
                                <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                <span style="display:block; color:var(--success);">$0$</span>
                            </td>
                            <td style="border:1px solid var(--border); padding:8px; text-align:center;">
                                <span style="display:block;">$0$</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    <li>$\\lim_{x \\to -\\infty} (h(x) - 2x) = 0$</li>
                    <li>Pour tout $x \\in ]-\\infty, 0[$, on a : $2x \\le h(x) \\le x$</li>
                </ul>
                <li><strong>a</strong> – Justifier que $h$ est une bijection de $]-\\infty, 0]$ sur un intervalle que l’on précisera.</li>
                <li><strong>b</strong> – Pour tout entier naturel non nul $n$, on pose $U_n = h^{-1}\\left(-\\frac{1}{n}\\right)$ où $h^{-1}$ désigne la fonction réciproque de $h$.<br>
                Montrer que la suite $(U_n)_{n \\in \\mathbb{N}^*}$ est convergente.</li>
            </ol>

            <ol start="3">
                <li><strong>a</strong> – Montrer que $f$ est continue en $0$.</li>
                <li><strong>b</strong> – Étudier la dérivabilité de $f$ à droite et à gauche en $0$. (On donnera l’interprétation graphique des résultats.)</li>
                <li><strong>c</strong> – Dresser le tableau de variation de $f$ sur $\\mathbb{R}$.</li>
            </ol>

            <ol start="4">
                <li><strong>a</strong> – Montrer que $\\mathcal{C}$ admet au voisinage de $-\\infty$, une asymptote dont on donnera une équation cartésienne.</li>
                <li><strong>b</strong> – Tracer $\\mathcal{C}$ en précisant les demi-tangentes au point $O$.</li>
            </ol>

            <ol start="5">
                <li>Calculer la mesure de l’aire du domaine limité par la courbe $\\mathcal{C}$, l’axe des abscisses et les droites d’équations $x = 1$ et $x = e$.</li>
            </ol>

            <div class="graph-container" id="graph-probleme5" data-fn="x*(1-log(x))" data-xmin="0.01" data-xmax="4" data-colors="#2563eb" data-height="400"></div>
            <p><em>Graphique interactif : courbe de $g(x)=x(1-\\ln x)$ (bleu) pour $x>0$.</em></p>
        `,
        questions: [
            {
                id: 'p5q1a',
                texte: "1.a – Limite de g en 0+.",
                solution: `
                    <p>$g(x) = x(1 - \\ln x) = x - x\\ln x$.</p>
                    <p>On sait que $\\lim_{x\\to0^+} x\\ln x = 0$ (résultat classique du cours).</p>
                    <p>Donc $\\lim_{x\\to0^+} g(x) = \\lim_{x\\to0^+} (x - x\\ln x) = 0 - 0 = 0$.</p>
                    <p><strong>Résultat :</strong> $\\lim_{x\\to0^+} g(x) = 0$.</p>
                `
            },
            {
                id: 'p5q1b',
                texte: "1.b – Limites en +∞ et branche infinie.",
                solution: `
                    <p>$\\lim_{x\\to+\\infty} g(x) = \\lim_{x\\to+\\infty} x(1 - \\ln x) = -\\infty$ (car le terme $-x\\ln x$ domine).</p>
                    <p>De plus, $\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = \\lim_{x\\to+\\infty} (1 - \\ln x) = -\\infty$.</p>
                    <p>Comme $\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = -\\infty$, la courbe $\\mathcal{C}$ admet une <strong>branche parabolique de direction celle de l'axe des ordonnées</strong> au voisinage de $+\\infty$.</p>
                `
            },
            {
                id: 'p5q1c',
                texte: "1.c – Tableau de variation de g.",
                solution: `
                    <p>$g'(x) = 1 - \\ln x - 1 = -\\ln x$.</p>
                    <p>Signe de $g'$ :</p>
                    <ul>
                        <li>Si $0 < x < 1$ : $-\\ln x > 0$ ⇒ $g'(x) > 0$, $g$ croissante.</li>
                        <li>Si $x = 1$ : $g'(1)=0$.</li>
                        <li>Si $x > 1$ : $-\\ln x < 0$ ⇒ $g'(x) < 0$, $g$ décroissante.</li>
                    </ul>
                    <p>Maximum en $x=1$ : $g(1)=1(1-\\ln 1)=1$.</p>
                    <p>Limites : $\\lim_{x\\to0^+} g(x)=0$ et $\\lim_{x\\to+\\infty} g(x)=-\\infty$.</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:80%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden; margin:0 auto;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$g'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:600;">$0$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$g$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$0$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$1$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$1$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p5q1d',
                texte: "1.d – Résoudre g(x)=0 dans ]0,+∞[.",
                solution: `
                    <p>$g(x)=0 \\iff x(1-\\ln x)=0$.</p>
                    <p>Comme $x>0$, on a $1-\\ln x = 0$ ⇒ $\\ln x = 1$ ⇒ $x = e$.</p>
                    <p>Donc l'équation admet <strong>une unique solution</strong> $x = e$ dans $]0,+\\infty[$.</p>
                `
            },
            {
                id: 'p5q2a',
                texte: "2.a – Bijection de h.",
                solution: `
                    <p>D'après le tableau de variation, $h$ est strictement croissante sur $]-\\infty, 0]$.</p>
                    <p>$\\lim_{x\\to-\\infty} h(x) = -\\infty$ et $h(0)=0$.</p>
                    <p>Donc $h$ réalise une bijection de $]-\\infty, 0]$ sur $]-\\infty, 0]$.</p>
                    <p><strong>Intervalle image :</strong> $J = ]-\\infty, 0]$.</p>
                `
            },
            {
                id: 'p5q2b',
                texte: "2.b – Convergence de U_n.",
                solution: `
                    <p>$U_n = h^{-1}\\left(-\\frac{1}{n}\\right)$.</p>
                    <p>On a $-\\frac{1}{n} \\in ]-\\infty, 0]$ pour tout $n\\ge1$, et $-\\frac{1}{n} \\to 0^-$.</p>
                    <p>La fonction $h^{-1}$ est continue sur $]-\\infty, 0]$ car $h$ est continue et strictement monotone (bijection continue).</p>
                    <p>Donc, par continuité de $h^{-1}$ en $0$, on a :</p>
                    $$ \\lim_{n\\to+\\infty} U_n = \\lim_{y\\to0^-} h^{-1}(y) = h^{-1}(0) = 0. $$
                    <p>La suite $(U_n)$ <strong>converge vers 0</strong>.</p>
                `
            },
            {
                id: 'p5q3a',
                texte: "3.a – Continuité de f en 0.",
                solution: `
                    <p>$f$ est définie sur $\\mathbb{R}$ par :</p>
                    $$ f(x) = \\begin{cases} h(x) & \\text{si } x \\le 0 \\\\ g(x) & \\text{si } x > 0 \\end{cases} $$
                    <p>On a $f(0)=h(0)=0$.</p>
                    <p>$\\lim_{x\\to0^-} f(x) = \\lim_{x\\to0^-} h(x) = h(0) = 0$ (car $h$ est continue en 0).</p>
                    <p>$\\lim_{x\\to0^+} f(x) = \\lim_{x\\to0^+} g(x) = 0$ (d'après 1.a).</p>
                    <p>Donc les limites à gauche et à droite sont égales à $f(0)$.</p>
                    <p><strong>$f$ est continue en 0</strong>.</p>
                `
            },
            {
                id: 'p5q3b',
                texte: "3.b – Dérivabilité à droite et à gauche en 0.",
                solution: `
                    <p><strong>Dérivabilité à droite :</strong></p>
                    <p>On calcule le taux d'accroissement à droite :</p>
                    $$ \\lim_{x\\to0^+} \\frac{f(x)-f(0)}{x} = \\lim_{x\\to0^+} \\frac{g(x)}{x} = \\lim_{x\\to0^+} (1 - \\ln x) = +\\infty. $$
                    <p>Donc $f$ n'est pas dérivable à droite en 0 ; la courbe admet une <strong>demi-tangente verticale</strong> à droite.</p>
                    <p><strong>Dérivabilité à gauche :</strong></p>
                    <p>On a pour $x<0$ l'encadrement $2x \\le h(x) \\le x$.</p>
                    <p>En divisant par $x$ (qui est négatif, donc on inverse les inégalités) :</p>
                    $$ 2 \\ge \\frac{h(x)}{x} \\ge 1 \\quad \\text{(car } x<0 \\text{)}. $$
                    <p>On en déduit que le taux d'accroissement à gauche $\\dfrac{h(x)}{x}$ est compris entre 1 et 2.</p>
                    <p>De plus, le tableau de variation indique $h'(0)=1$ (à gauche), ce qui signifie que la limite du taux d'accroissement à gauche est égale à 1.</p>
                    <p>Donc $f$ est dérivable à gauche en 0 avec $f'_g(0)=1$ : la courbe admet une <strong>demi-tangente de pente 1</strong> à gauche.</p>
                `
            },
            {
                id: 'p5q3c',
                texte: "3.c – Tableau de variation de f sur ℝ.",
                solution: `
                    <p>Sur $]-\\infty, 0]$ : $h$ est strictement croissante de $-\\infty$ à $0$.</p>
                    <p>Sur $]0, +\\infty[$ : $g$ est croissante sur $]0,1]$ et décroissante sur $[1,+\\infty[$, avec maximum $1$ en $x=1$.</p>
                    <p>En $0$, $f(0)=0$.</p>
                    <div style="overflow-x:auto; margin:20px 0;">
                        <table class="variation-table" style="width:100%; border-collapse:collapse; font-size:0.95rem; background:var(--surface); border:1px solid var(--border); border-radius:8px; overflow:hidden;">
                            <thead>
                                <tr>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$x$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$-\\infty$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$0$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$1$</th>
                                    <th style="border:1px solid var(--border); padding:10px; text-align:center; background:var(--accent-gradient); color:white; font-weight:700;">$+\\infty$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f'(x)$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--success); font-weight:600;">$+$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:600;">$1$ (à gauche)<br>$+\\infty$ (à droite)</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:600;">$0$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; color:var(--danger); font-weight:600;">$-$</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center; font-weight:700; background:var(--bg);">$f$</td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600;">$0$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$0$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--success);">↑</span>
                                        <span style="display:block; font-weight:600; color:var(--success);">$1$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600;">$1$</span>
                                        <span style="display:block; font-size:1.8rem; color:var(--danger);">↓</span>
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                    <td style="border:1px solid var(--border); padding:10px; text-align:center;">
                                        <span style="display:block; font-weight:600; color:var(--danger);">$-\\infty$</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                id: 'p5q4a',
                texte: "4.a – Asymptote au voisinage de -∞.",
                solution: `
                    <p>On a $\\lim_{x\\to-\\infty} (h(x) - 2x) = 0$.</p>
                    <p>Donc la droite $\\Delta : y = 2x$ est une <strong>asymptote oblique</strong> à $\\mathcal{C}$ au voisinage de $-\\infty$.</p>
                `
            },
            {
                id: 'p5q4b',
                texte: "4.b – Tracer C avec les demi-tangentes en O.",
                solution: `
                    <p>En $O(0,0)$ :</p>
                    <ul>
                        <li>À droite (pour $x>0$), la demi-tangente est <strong>verticale</strong> (car $f'_d(0)=+\\infty$).</li>
                        <li>À gauche (pour $x<0$), la demi-tangente a pour pente $1$ (car $f'_g(0)=1$).</li>
                    </ul>
                    <p>La courbe $\\mathcal{C}$ se compose de la partie $g$ pour $x>0$ (croissante puis décroissante, maximum en $1$) et de la partie $h$ pour $x<0$ (croissante de $-\\infty$ à $0$, avec asymptote $y=2x$).</p>
                `
            },
            {
                id: 'p5q5',
                texte: "5 – Aire entre x=1 et x=e.",
                solution: `
                    <p>L'aire demandée est l'aire sous la courbe $g$ (puisque $f=g$ sur $]0,+\\infty[$) entre $x=1$ et $x=e$.</p>
                    <p>On a $g(x)=x(1-\\ln x) = x - x\\ln x$.</p>
                    <p>L'aire est $\\mathcal{A} = \\displaystyle\\int_1^e g(x)\\,dx$.</p>
                    <p>Calculons la primitive de $g$ :</p>
                    $$ \\int (x - x\\ln x)\\,dx = \\frac{x^2}{2} - \\int x\\ln x\\,dx $$
                    <p>Calculons $\\int x\\ln x\\,dx$ par parties : $u=\\ln x$, $dv=x\\,dx$ ⇒ $du=\\frac{dx}{x}$, $v=\\frac{x^2}{2}$.</p>
                    $$ \\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2}\\cdot\\frac{dx}{x} = \\frac{x^2}{2}\\ln x - \\frac{1}{2}\\int x\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} $$
                    <p>Donc une primitive de $g$ est :</p>
                    $$ G(x) = \\frac{x^2}{2} - \\left(\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}\\right) = \\frac{3x^2}{4} - \\frac{x^2}{2}\\ln x $$
                    <p>Évaluons de 1 à e :</p>
                    $$ \\mathcal{A} = G(e) - G(1) = \\left(\\frac{3e^2}{4} - \\frac{e^2}{2}\\ln e\\right) - \\left(\\frac{3}{4} - 0\\right) = \\frac{3e^2}{4} - \\frac{e^2}{2} - \\frac{3}{4} = \\frac{e^2}{4} - \\frac{3}{4} = \\frac{e^2 - 3}{4} $$
                    <p>Donc l'aire est $\\mathcal{A} = \\dfrac{e^2 - 3}{4}$ (unités d'aire).</p>
                `
            }
        ],
        astuces: `
            <ul>
                <li>Pour les limites de $x\\ln x$ en 0, utiliser le résultat classique du cours.</li>
                <li>Pour l'étude de $h$, utiliser l'encadrement pour la dérivabilité à gauche.</li>
                <li>L'aire se calcule avec une intégration par parties.</li>
            </ul>
        `,
        erreurs: `
            <ul>
                <li>Ne pas confondre les branches infinies : $g$ a une branche parabolique en $+\\infty$.</li>
                <li>Oublier que $h$ est définie en 0, ce qui permet la continuité.</li>
                <li>Se tromper dans le signe de l'inégalité en divisant par un nombre négatif.</li>
            </ul>
        `
    });

    console.log("✅ Problème 5 corrigé (sans équivalents).");
})();