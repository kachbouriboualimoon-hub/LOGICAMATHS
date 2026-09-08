// data/chapitre1.js – Chapitre 1 : Limites et Continuité
// Solutions conformes au PDF "correction limitecontinuité.pdf"
// Programme Tunisien 4ème Sciences Expérimentales
// Enrichi avec tableaux de variations, graphiques interactifs et images

data.chapitres.push({
    id: 1,
    titre: "Limites et Continuité",
    resume: "Définitions, TVI, prolongement.",
    rappel: `<p>Une fonction $f$ est <strong>continue en $a$</strong> si $\\lim_{x \\to a} f(x) = f(a)$.</p>
             <p>Polynômes et rationnelles sont continues sur leur domaine.</p>
             <p><strong>TVI :</strong> Si $f$ continue sur $[a,b]$ et $k$ entre $f(a)$ et $f(b)$, alors $f(x)=k$ a au moins une solution.</p>
             <p><strong>Prolongement :</strong> Si $\\lim_{x\\to a} f(x)=\\ell$ (finie), on pose $f(a)=\\ell$.</p>`,
    theoremes: `<div class="theoreme-block"><strong>Théorème 1 :</strong> Toute fonction polynôme est continue en tout réel. Toute fonction rationnelle est continue en tout réel de son ensemble de définition.</div>
                <div class="theoreme-block"><strong>Théorème 2 (Opérations) :</strong> Si $f$ et $g$ sont continues en $a$, alors $f+g$, $f\\times g$ sont continues en $a$. Si $f(a)\\neq 0$, $\\frac{1}{f}$ est continue en $a$. <div class="remarque">💡 La composée de deux fonctions continues est continue.</div></div>
                <div class="theoreme-block"><strong>Théorème 3 (Prolongement) :</strong> Soit $f$ définie sur $I\\setminus\\{a\\}$. Si $f$ admet une limite finie $\\ell$ en $a$, alors $g(x)=f(x)$ pour $x\\neq a$ et $g(a)=\\ell$ est continue en $a$.</div>
                <div class="theoreme-block"><strong>Théorème 4 (TVI) :</strong> $f$ continue sur $[a,b]$, $k$ entre $f(a)$ et $f(b)$ $\\Rightarrow f(x)=k$ a au moins une solution. <div class="remarque">💡 Si $f(a)f(b)<0$, $f(x)=0$ a au moins une solution.</div></div>
                <div class="theoreme-block"><strong>Théorème 5 (Image d'un intervalle) :</strong> L'image d'un intervalle par une fonction continue est un intervalle. L'image de $[a,b]$ est $[m,M]$.</div>`,
    methodes: `<div style="margin-bottom:16px;"><h3 style="font-size:1.1rem; color:var(--accent); margin-bottom:8px;">🔴 Formes indéterminées (FI)</h3><div style="display:flex; flex-wrap:wrap; gap:8px; margin:10px 0;"><span class="fi" style="background:#fee2e2; padding:4px 14px; border-radius:20px; font-weight:700; color:#991b1b;">0/0</span><span class="fi" style="background:#fee2e2; padding:4px 14px; border-radius:20px; font-weight:700; color:#991b1b;">∞/∞</span><span class="fi" style="background:#fee2e2; padding:4px 14px; border-radius:20px; font-weight:700; color:#991b1b;">0×∞</span><span class="fi" style="background:#fee2e2; padding:4px 14px; border-radius:20px; font-weight:700; color:#991b1b;">∞−∞</span><span class="fi" style="background:#fee2e2; padding:4px 14px; border-radius:20px; font-weight:700; color:#991b1b;">1<sup>∞</sup></span></div></div>
              <div><h3 style="font-size:1.1rem; color:var(--accent); margin-bottom:8px;">🧠 Méthodes de calcul</h3>
              <div class="method-box"><strong>1. Factorisation :</strong> Pour $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$.<br><em>Ex :</em> $\\lim_{x\\to 2} \\frac{x^2-4}{x-2} = \\lim (x+2)=4$.</div>
              <div class="method-box"><strong>2. Conjuguée :</strong> Pour $\\sqrt{\\cdot} - \\sqrt{\\cdot}$.<br><em>Ex :</em> $\\lim_{x\\to 1} \\frac{\\sqrt{x}-1}{x-1} = \\frac{1}{2}$.</div>
              <div class="method-box"><strong>3. Limites usuelles :</strong> $\\lim_{x\\to 0} \\frac{\\sin x}{x}=1$, $\\lim_{x\\to 0} \\frac{1-\\cos x}{x^2}=\\frac{1}{2}$, $\\lim_{x\\to 0} \\frac{e^x-1}{x}=1$, $\\lim_{x\\to 0} \\frac{\\ln(1+x)}{x}=1$.</div>
              <div class="method-box"><strong>4. Gendarmes :</strong> Encadrer pour conclure.</div>
              <div class="method-box"><strong>5. Croissances comparées :</strong> En $+\\infty$, $\\ln x \\ll x^n \\ll e^x$.</div>
              <div class="method-box"><strong>6. Changement de variable.</strong></div>
              <div class="method-box"><strong>7. Limites à gauche/droite</strong> pour les fonctions par morceaux.</div></div>`,
    astuces: `<div class="astuce-box">💡 <strong>Toujours commencer par le domaine.</strong> Une fonction n'est définie que là où son expression est valide.</div>
              <div class="astuce-box">💡 <strong>Pour les fractions rationnelles en $\\pm\\infty$</strong>, factoriser par le terme de plus haut degré.</div>
              <div class="astuce-box">💡 <strong>Bien distinguer</strong> $\\lim_{x\\to a} f(x)$ et $f(a)$ (si $a$ n'est pas dans le domaine, seule la limite existe).</div>`,
    erreurs: `<div class="erreur-box">⚠️ <strong>Oublier le domaine</strong> avant d'étudier la continuité.</div>
              <div class="erreur-box">⚠️ <strong>Appliquer le TVI sans vérifier la continuité</strong> sur $[a,b]$.</div>
              <div class="erreur-box">⚠️ <strong>Confondre $\\lim f(x)$ et $f(a)$</strong> quand $f$ n'est pas définie en $a$.</div>
              <div class="erreur-box">⚠️ <strong>Diviser par $x$ sans vérifier</strong> qu'il est non nul.</div>`,
    quiz: {
        questions: [
            { type: 'qcm', text: 'Si $\\lim f = +\\infty$ et $g(x) = \\sin(1/f(x))$, alors $\\lim g$ est égale à :', options: ['$+\\infty$', "n'existe pas", '$-\\infty$'], correct: 1 },
            { type: 'qcm', text: 'Si $f$ est continue et décroissante sur $[2,5]$ et si $f([2,5])=[1,3]$, alors :', options: ['$f(2)=3$ et $f(5)=1$', '$f(2)=1$ et $f(5)=3$', '$1<f(2)<3$'], correct: 0 },
            { type: 'qcm', text: 'Si $f$ est continue sur $[-2,5]$ avec $f(-2)=3$ et $f(5)=-2$, alors $f(x)=-1$ :', options: ["n'admet pas de solution", 'admet au moins une solution', 'admet exactement une solution'], correct: 1 },
            { type: 'vf', text: 'Si $f$ est paire et $\\lim_{x\\to +\\infty} f(x) = -\\infty$, alors $\\lim_{x\\to -\\infty} f(x) = -\\infty$.', correct: true },
            { type: 'vf', text: 'Toute fonction croissante sur $\\mathbb{R}$ tend vers $+\\infty$ en $+\\infty$.', correct: false },
            { type: 'vf', text: 'Si une fonction admet une limite finie en $-\\infty$ et en $+\\infty$, alors elle est bornée.', correct: true },
            { type: 'vf', text: 'Si $f$ n\'est pas définie en $a$, alors $x=a$ est une asymptote verticale.', correct: false },
            { type: 'vf', text: 'Soit $g \\le f \\le h$ avec $\\lim g=3$ et $\\lim h=5$. Alors $f$ admet une limite finie en $+\\infty$.', correct: false }
        ]
    },
    exercices: [
        // ======================================================================
        // EXERCICE 1
        // ======================================================================
        {
            numero: 1,
            enonce: `<p>Dans chacun des cas suivants, donner l'ensemble de définition de la fonction $f$ et justifier la continuité de $f$ en tout réel de cet ensemble.</p>
                      $$\\begin{array}{ll}
                      1.\\; f(x)=|x^2-x-3| \\qquad & 2.\\; f(x)=x+1+\\sqrt{x^2+1} \\\\
                      3.\\; f(x)=\\sqrt{\\dfrac{x+1}{x-1}} \\qquad & 4.\\; f(x)=(|x+1|-2)^5 \\\\
                      5.\\; f(x)=\\dfrac{3x^2-|x|}{x^2+4} \\qquad & 6.\\; f(x)=\\dfrac{1}{\\cos^2 x+1} \\\\
                      7.\\; f(x)=\\dfrac{\\cos x -1}{\\sin x -1}
                      \\end{array}$$`,
            questions: [
                {
                    id: 'ex1q1a',
                    texte: "1) $f(x)=|x^2-x-3|$",
                    solution: `<p>$f(x)=|x^2-x-3|$ ; <strong>$D_f = \\mathbb{R}$</strong>.</p>
                              <p>La fonction $x\\mapsto x^2-x-3$ est continue sur $\\mathbb{R}$ (polynôme). La valeur absolue est continue sur $\\mathbb{R}$. Par composition, <strong>$f$ est continue sur $\\mathbb{R}$</strong>.</p>`
                },
                {
                    id: 'ex1q1b',
                    texte: "2) $f(x)=x+1+\\sqrt{x^2+1}$",
                    solution: `<p>$f(x)=x+1+\\sqrt{x^2+1}$ ; <strong>$D_f = \\mathbb{R}$</strong>.</p>
                              <p>La fonction $x\\mapsto x^2+1$ est continue et positive sur $\\mathbb{R}$. Donc $x\\mapsto \\sqrt{x^2+1}$ est continue sur $\\mathbb{R}$ (composition avec la racine carrée). $f$ est somme de deux fonctions continues, donc <strong>$f$ est continue sur $\\mathbb{R}$</strong>.</p>`
                },
                {
                    id: 'ex1q1c',
                    texte: "3) $f(x)=\\sqrt{\\dfrac{x+1}{x-1}}$",
                    solution: `<p>$f(x)=\\sqrt{\\dfrac{x+1}{x-1}}$ ; on doit avoir $\\dfrac{x+1}{x-1} \\ge 0$ et $x\\neq 1$.</p>
                              <p>Tableau de signes :</p>
                              <table style="border-collapse:collapse; margin:10px 0; width:100%; background:var(--bg);">
                                  <tr><th style="border:1px solid var(--border); padding:8px; text-align:center;">$x$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$-\\infty$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$-1$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$1$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$+\\infty$</th>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$x+1$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$x-1$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\frac{x+1}{x-1}$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$||$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                  </tr>
                              </table>
                              <p>Donc <strong>$D_f = ]-\\infty,-1] \\cup ]1,+\\infty[$</strong>.</p>
                              <p>La fonction $x\\mapsto \\dfrac{x+1}{x-1}$ est continue et positive sur chacun des intervalles $]-\\infty,-1]$ et $]1,+\\infty[$. Par composition avec la racine carrée, <strong>$f$ est continue sur $D_f$</strong>.</p>`
                },
                {
                    id: 'ex1q1d',
                    texte: "4) $f(x)=(|x+1|-2)^5$",
                    solution: `<p>$f(x)=(|x+1|-2)^5$ est définie et continue sur <strong>$\\mathbb{R}$</strong> (composition de fonctions continues).</p>`
                },
                {
                    id: 'ex1q1e',
                    texte: "5) $f(x)=\\dfrac{3x^2-|x|}{x^2+4}$",
                    solution: `<p>$f(x)=\\dfrac{3x^2-|x|}{x^2+4}$ est définie et continue sur <strong>$\\mathbb{R}$</strong> (dénominateur $x^2+4>0$).</p>`
                },
                {
                    id: 'ex1q1f',
                    texte: "6) $f(x)=\\dfrac{1}{\\cos^2 x+1}$",
                    solution: `<p>$f(x)=\\dfrac{1}{1+\\cos^2 x}$ est définie et continue sur <strong>$\\mathbb{R}$</strong> (dénominateur $1+\\cos^2 x \\ge 1$).</p>`
                },
                {
                    id: 'ex1q1g',
                    texte: "7) $f(x)=\\dfrac{\\cos x -1}{\\sin x -1}$",
                    solution: `<p>$f(x)=\\dfrac{\\cos x -1}{\\sin x -1}$ ; $\\sin x \\neq 1 \\iff x \\neq \\dfrac{\\pi}{2} + 2k\\pi$, $k\\in\\mathbb{Z}$.</p>
                              <p><strong>$D_f = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + 2k\\pi \\mid k\\in\\mathbb{Z}\\right\\}$</strong>.</p>
                              <p>Sur $D_f$, le dénominateur ne s'annule pas, donc <strong>$f$ est continue sur $D_f$</strong>.</p>`
                }
            ],
            astuces_exo: `<div class="astuce-box">💡 Pour la 3), le tableau de signes du quotient $\\frac{x+1}{x-1}$ est essentiel.</div>`,
            erreurs_exo: `<div class="erreur-box">⚠️ Pour la 7), n'oubliez pas d'exclure toutes les valeurs où $\\sin x = 1$ (périodicité).</div>`
        },
        // ======================================================================
        // EXERCICE 2
        // ======================================================================
        {
            numero: 2,
            enonce: `<p>Soit $f$ la fonction définie par</p>
                      $$ f(x) = \\begin{cases}
                      \\dfrac{1}{x+1} & \\text{si } x < -1 \\\\[4pt]
                      2x^2 + x & \\text{si } x \\ge -1
                      \\end{cases} $$
                      <p>1. Montrer que $f$ est continue sur $]-\\infty,-1[$ et sur $]-1,+\\infty[$.</p>
                      <p>2. La fonction $f$ est-elle continue en $-1$ ?</p>
                      <p>3. La fonction $f$ est-elle continue sur $\\mathbb{R}$ ?</p>`,
            questions: [
                {
                    id: 'ex2q1',
                    texte: "1. Montrer que $f$ est continue sur $]-\\infty,-1[$ et sur $]-1,+\\infty[$.",
                    solution: `<p>Sur $]-\\infty,-1[$, $f(x)=\\dfrac{1}{x+1}$ est une fonction rationnelle définie sur cet intervalle, donc continue.</p>
                              <p>Sur $]-1,+\\infty[$, $f(x)=2x^2+x$ est un polynôme, donc continue.</p>
                              <p>On a aussi : $f'(x)=-\\dfrac{1}{(x+1)^2}<0$ sur $]-\\infty,-1[$, donc $f$ est strictement décroissante sur cet intervalle.</p>
                              <p>Sur $]-1,+\\infty[$, $f'(x)=4x+1$ ; $f$ est décroissante sur $]-1,-1/4]$ et croissante sur $[-1/4,+\\infty[$.</p>
                              <p><strong>$f$ est continue sur chacun des intervalles $]-\\infty,-1[$ et $]-1,+\\infty[$</strong>.</p>`
                },
                {
                    id: 'ex2q2',
                    texte: "2. La fonction $f$ est-elle continue en $-1$ ?",
                    solution: `<p>On calcule $f(-1)=2(-1)^2+(-1)=2-1=1$.</p>
                              <p>$\\lim_{x\\to -1^-} f(x) = \\lim_{x\\to -1^-} \\dfrac{1}{x+1} = -\\infty$ (car $x+1\\to 0^-$).</p>
                              <p>$\\lim_{x\\to -1^+} f(x) = \\lim_{x\\to -1^+} (2x^2+x) = 2-1=1$.</p>
                              <p>La limite à gauche est $-\\infty$, et la limite à droite est $1$. Les limites unilatérales sont différentes, donc $f$ n'est pas continue en $-1$.</p>
                              <p><strong>$f$ n'est pas continue en $-1$</strong>.</p>`
                },
                {
                    id: 'ex2q3',
                    texte: "3. La fonction $f$ est-elle continue sur $\\mathbb{R}$ ?",
                    solution: `<p>Non, car $f$ n'est pas continue en $-1$.</p>`
                }
            ],
            astuces_exo: `<div class="astuce-box">💡 Pour étudier la continuité en un point de raccord, il faut calculer les limites à gauche et à droite.</div>`,
            erreurs_exo: `<div class="erreur-box">⚠️ $\\lim_{x\\to -1^-} \\frac{1}{x+1} = -\\infty$ (attention au signe).</div>`
        },
        // ======================================================================
        // EXERCICE 3
        // ======================================================================
        {
            numero: 3,
            enonce: `<p>Soit $f$ la fonction définie par</p>
                      $$ f(x) = \\begin{cases}
                      \\dfrac{2x^2+x^3}{x+2} & \\text{si } x < -2 \\\\[4pt]
                      \\sqrt{x+2} & \\text{si } x \\ge -2
                      \\end{cases} $$
                      <p>1. Montrer que $f$ est continue à droite en $-2$.</p>
                      <p>2. Montrer que $f$ n'est pas continue à gauche en $-2$.</p>
                      <p>3. La fonction $f$ est-elle continue sur $\\mathbb{R}$ ?</p>`,
            questions: [
                {
                    id: 'ex3q1',
                    texte: "1. Montrer que $f$ est continue à droite en $-2$.",
                    solution: `<p>On a $f(-2)=\\sqrt{-2+2}=\\sqrt{0}=0$.</p>
                              <p>$\\lim_{x\\to -2^+} f(x) = \\lim_{x\\to -2^+} \\sqrt{x+2} = 0 = f(-2)$.</p>
                              <p><strong>$f$ est continue à droite en $-2$</strong>.</p>`
                },
                {
                    id: 'ex3q2',
                    texte: "2. Montrer que $f$ n'est pas continue à gauche en $-2$.",
                    solution: `<p>Pour $x< -2$, $f(x)=\\dfrac{2x^2+x^3}{x+2} = \\dfrac{x^2(x+2)}{x+2} = x^2$ (pour $x\\neq -2$).</p>
                              <p>$\\lim_{x\\to -2^-} f(x) = \\lim_{x\\to -2^-} x^2 = 4 \\neq f(-2)=0$.</p>
                              <p><strong>$f$ n'est pas continue à gauche en $-2$</strong>.</p>`
                },
                {
                    id: 'ex3q3',
                    texte: "3. La fonction $f$ est-elle continue sur $\\mathbb{R}$ ?",
                    solution: `<p>$f$ est continue sur chacun des intervalles $]-\\infty,-2[$ et $]-2,+\\infty[$.</p>
                              <p>Mais elle n'est pas continue en $-2$ car elle n'est pas continue à gauche. Donc <strong>$f$ n'est pas continue sur $\\mathbb{R}$</strong>.</p>`
                }
            ],
            astuces_exo: `<div class="astuce-box">💡 Simplifier l'expression $\\dfrac{2x^2+x^3}{x+2}$ pour $x\\neq -2$ donne $x^2$.</div>`,
            erreurs_exo: `<div class="erreur-box">⚠️ Ne pas oublier que $x=-2$ est exclu du premier morceau.</div>`
        },
        // ======================================================================
        // EXERCICE 4
        // ======================================================================
        {
            numero: 4,
            enonce: `<p>Soit $f$ la fonction définie par</p>
                      $$ f(x) = \\begin{cases}
                      \\sqrt{x^2-1} & \\text{si } x \\le -1 \\\\[4pt]
                      \\dfrac{1-x^3}{1-x^2} & \\text{si } -1 < x < 1 \\\\[4pt]
                      \\sqrt{x^2-1} & \\text{si } x \\ge 1
                      \\end{cases} $$
                      <p>1. Étudier la continuité de $f$ à gauche et à droite en $-1$.</p>
                      <p>2. Étudier la continuité de $f$ sur chacun des intervalles $]-\\infty,-1]$, $]-1,1[$ et $[1,+\\infty[$.</p>`,
            questions: [
                {
                    id: 'ex4q1',
                    texte: "1. Étudier la continuité à gauche et à droite en $-1$.",
                    solution: `<p>$f(-1)=\\sqrt{(-1)^2-1}=0$.</p>
                              <p>$\\lim_{x\\to -1^-} f(x) = \\lim_{x\\to -1^-} \\sqrt{x^2-1} = 0 = f(-1)$ : <strong>$f$ est continue à gauche en $-1$</strong>.</p>
                              <p>Pour $x\\in ]-1,1[$, $f(x)=\\dfrac{1-x^3}{1-x^2} = \\dfrac{(1-x)(1+x+x^2)}{(1-x)(1+x)} = \\dfrac{1+x+x^2}{1+x}$ pour $x\\neq 1$.</p>
                              <p>$\\lim_{x\\to -1^+} f(x) = \\lim_{x\\to -1^+} \\dfrac{1+x+x^2}{1+x} = +\\infty$ (car le numérateur tend vers $1$ et le dénominateur vers $0^+$).</p>
                              <p><strong>$f$ n'est pas continue à droite en $-1$</strong>.</p>`
                },
                {
                    id: 'ex4q2',
                    texte: "2. Étudier la continuité de $f$ sur les intervalles.",
                    solution: `<p>Sur $]-\\infty,-1]$ : $f(x)=\\sqrt{x^2-1}$ est continue car $x\\mapsto x^2-1$ est continue et positive sur cet intervalle.</p>
                              <p>Sur $]-1,1[$ : $f(x)=\\dfrac{1-x^3}{1-x^2}$ est continue sur $]-1,1[$ (fonction rationnelle avec dénominateur non nul).</p>
                              <p>Sur $[1,+\\infty[$ : $f(x)=\\sqrt{x^2-1}$ est continue car $x\\mapsto x^2-1$ est continue et positive.</p>
                              <p><strong>$f$ est continue sur chacun des intervalles $]-\\infty,-1]$, $]-1,1[$ et $[1,+\\infty[$</strong>.</p>`
                }
            ],
            astuces_exo: `<div class="astuce-box">💡 Pour $\\dfrac{1-x^3}{1-x^2}$, factoriser par $1-x$ pour simplifier.</div>`,
            erreurs_exo: `<div class="erreur-box">⚠️ En $-1$, la limite à droite est $+\\infty$, donc pas de continuité.</div>`
        },
        // ======================================================================
        // EXERCICE 5
        // ======================================================================
        {
            numero: 5,
            enonce: `<p>Soit $f$ la fonction définie par</p>
                      $$ f(x) = \\frac{x^3 + 3x^2 - 6x - 8}{x-2} $$
                      <p>1. Préciser l'ensemble de définition de $f$.</p>
                      <p>2. Déterminer $\\lim_{x\\to -\\infty} f(x)$, $\\lim_{x\\to +\\infty} f(x)$ et $\\lim_{x\\to 2} f(x)$.</p>
                      <p>3. La fonction $f$ admet-elle un prolongement par continuité en $2$ ?</p>`,
            questions: [
                {
                    id: 'ex5q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>$D_f = \\mathbb{R} \\setminus \\{2\\}$.</p>`
                },
                {
                    id: 'ex5q2',
                    texte: "2. Déterminer les limites.",
                    solution: `<p>$\\lim_{x\\to +\\infty} f(x) = \\lim_{x\\to +\\infty} \\dfrac{x^3}{x} = \\lim_{x\\to +\\infty} x^2 = +\\infty$.</p>
                              <p>$\\lim_{x\\to -\\infty} f(x) = \\lim_{x\\to -\\infty} x^2 = +\\infty$.</p>
                              <p>On a $x^3+3x^2-6x-8 = (x-2)(x^2+5x+4)$. Donc pour $x\\neq 2$,</p>
                              <p>$f(x)=x^2+5x+4$.</p>
                              <p>$\\lim_{x\\to 2} f(x) = 2^2+5\\times 2+4 = 4+10+4 = 18$.</p>`
                },
                {
                    id: 'ex5q3',
                    texte: "3. Prolongement par continuité en 2.",
                    solution: `<p>$\\lim_{x\\to 2} f(x) = 18$ (limite finie). Donc <strong>$f$ admet un prolongement par continuité en $2$</strong> avec $\\tilde{f}(2)=18$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 6
        // ======================================================================
        {
            numero: 6,
            enonce: `<p>Dire si les fonctions suivantes admettent un prolongement par continuité en $a$.</p>
                      <p>1. $f(x)=\\dfrac{x^2+|x|}{x^2-|x|}$, $a=0$.</p>
                      <p>2. $f(x)=\\dfrac{x^3+1}{x^2-1}$, $a=-1$.</p>
                      <p>3. $f(x)=\\dfrac{\\sin x+3x}{x}$, $a=0$.</p>`,
            questions: [
                {
                    id: 'ex6q1',
                    texte: "1. $f(x)=\\dfrac{x^2+|x|}{x^2-|x|}$, $a=0$.",
                    solution: `<p>Pour $x\\in ]0,1[$, $f(x)=\\dfrac{x^2+x}{x^2-x} = \\dfrac{x+1}{x-1}$. $\\lim_{x\\to 0^+} f(x) = -1$.</p>
                              <p>Pour $x\\in ]-1,0[$, $f(x)=\\dfrac{x^2-x}{x^2+x} = \\dfrac{x-1}{x+1}$. $\\lim_{x\\to 0^-} f(x) = -1$.</p>
                              <p>Les limites à gauche et à droite sont égales à $-1$. Donc <strong>$f$ admet un prolongement par continuité en $0$ avec $\\tilde{f}(0)=-1$</strong>.</p>`
                },
                {
                    id: 'ex6q2',
                    texte: "2. $f(x)=\\dfrac{x^3+1}{x^2-1}$, $a=-1$.",
                    solution: `<p>Pour $x\\neq -1$ et $x\\neq 1$,</p>
                              <p>$f(x)=\\dfrac{(x+1)(x^2-x+1)}{(1-x)(1+x)} = \\dfrac{x^2-x+1}{1-x}$.</p>
                              <p>$\\lim_{x\\to -1} f(x) = \\dfrac{1+1+1}{2} = \\dfrac{3}{2}$.</p>
                              <p><strong>$f$ admet un prolongement par continuité en $-1$ avec $\\tilde{f}(-1)=\\dfrac{3}{2}$</strong>.</p>`
                },
                {
                    id: 'ex6q3',
                    texte: "3. $f(x)=\\dfrac{\\sin x+3x}{x}$, $a=0$.",
                    solution: `<p>Pour $x\\neq 0$, $f(x)=3+\\dfrac{\\sin x}{x}$.</p>
                              <p>$\\lim_{x\\to 0} f(x) = 3+1 = 4$.</p>
                              <p><strong>$f$ admet un prolongement par continuité en $0$ avec $\\tilde{f}(0)=4$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 7
        // ======================================================================
        {
            numero: 7,
            enonce: `<p>Soit $f$ la fonction définie par</p>
                      $$ f(x) = \\begin{cases}
                      \\dfrac{x^3-x^2-2x}{x^2-2x} & \\text{si } x \\neq 0 \\text{ et } x \\neq 2 \\\\[4pt]
                      3 & \\text{si } x = 2 \\\\[4pt]
                      2 & \\text{si } x = 0
                      \\end{cases} $$
                      <p>1. La fonction $f$ est-elle continue en $0$ ?</p>
                      <p>2. La fonction $f$ est-elle continue en $2$ ?</p>`,
            questions: [
                {
                    id: 'ex7q1',
                    texte: "1. Continuité en 0.",
                    solution: `<p>$f(0)=2$.</p>
                              <p>Pour $x\\neq 0,2$, $f(x)=\\dfrac{x(x^2-x-2)}{x(x-2)} = \\dfrac{(x+1)(x-2)}{x-2} = x+1$ (pour $x\\neq 2$).</p>
                              <p>$\\lim_{x\\to 0} f(x) = \\lim_{x\\to 0} (x+1) = 1 \\neq f(0)=2$.</p>
                              <p><strong>$f$ n'est pas continue en $0$</strong>.</p>`
                },
                {
                    id: 'ex7q2',
                    texte: "2. Continuité en 2.",
                    solution: `<p>$f(2)=3$.</p>
                              <p>$\\lim_{x\\to 2} f(x) = \\lim_{x\\to 2} (x+1) = 3 = f(2)$.</p>
                              <p><strong>$f$ est continue en $2$</strong>.</p>`
                }
            ],
            astuces_exo: `<div class="astuce-box">💡 Simplifier $\\dfrac{x^3-x^2-2x}{x^2-2x}$ en $x+1$ pour $x\\neq 0,2$.</div>`,
            erreurs_exo: `<div class="erreur-box">⚠️ $x=0$ est une valeur interdite pour la simplification.</div>`
        },
        // ======================================================================
        // EXERCICE 8
        // ======================================================================
        {
            numero: 8,
            enonce: `<p>Soit $f$ la fonction définie sur $\\mathbb{R}\\setminus\\{-1,0\\}$ par</p>
                      $$ f(x) = \\frac{|x-2|}{x^2-x-2} $$
                      <p>1. Donner l'ensemble de définition de $f$.</p>
                      <p>2. Étudier les limites de $f$ en $-1$, $+\\infty$ et $-\\infty$.</p>
                      <p>3. La fonction $f$ admet-elle un prolongement par continuité en $0$ ?</p>`,
            questions: [
                {
                    id: 'ex8q1',
                    texte: "1. Ensemble de définition.",
                    solution: `<p>$f$ est définie pour $x\\neq -1$ et $x\\neq 0$ et $x\\neq 2$.</p>
                              <p>Donc <strong>$D_f = \\mathbb{R} \\setminus \\{-1,0,2\\}$</strong>.</p>`
                },
                {
                    id: 'ex8q2',
                    texte: "2. Limites en $-1$, $+\\infty$ et $-\\infty$.",
                    solution: `<p>En $-1$ : $\\lim_{x\\to -1^+} f(x) = \\lim_{x\\to -1^+} \\dfrac{|x-2|}{x^2-x-2} = +\\infty$ (de la forme $\\dfrac{3}{0^+}$).</p>
                              <p>$\\lim_{x\\to -1^-} f(x) = -\\infty$.</p>
                              <p>Les limites à gauche et à droite sont différentes, donc <strong>$f$ n'admet pas de limite en $-1$</strong>.</p>
                              <p>En $+\\infty$ : $\\lim_{x\\to +\\infty} f(x) = \\lim_{x\\to +\\infty} \\dfrac{x-2}{x^2-x-2} = \\lim_{x\\to +\\infty} \\dfrac{1}{x+1} = 0$.</p>
                              <p>En $-\\infty$ : $\\lim_{x\\to -\\infty} f(x) = \\lim_{x\\to -\\infty} \\dfrac{-x+2}{x^2-x-2} = \\lim_{x\\to -\\infty} \\dfrac{1}{x+1} = 0$.</p>`
                },
                {
                    id: 'ex8q3',
                    texte: "3. Prolongement en 0.",
                    solution: `<p>Pour $x\\in ]0,2[$, $|x-2| = -x+2$.</p>
                              <p>$\\lim_{x\\to 0^+} f(x) = \\lim_{x\\to 0^+} \\dfrac{-x+2}{x^2-x-2} = \\dfrac{2}{-2} = -1$.</p>
                              <p>Pour $x\\in ]-1,0[$, $|x-2| = -x+2$.</p>
                              <p>$\\lim_{x\\to 0^-} f(x) = \\lim_{x\\to 0^-} \\dfrac{-x+2}{x^2-x-2} = \\dfrac{2}{-2} = -1$.</p>
                              <p>Les limites à gauche et à droite sont égales à $-1$. Donc <strong>$f$ admet un prolongement par continuité en $0$ avec $\\tilde{f}(0)=-1$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 9
        // ======================================================================
        {
            numero: 9,
            enonce: `<p>Déterminer les limites suivantes :</p>
                      $$ \\lim_{x\\to 1^+} \\frac{-2}{x-1},\\quad \\lim_{x\\to 1^-} \\frac{-2}{x-1} $$
                      $$ \\lim_{x\\to -1^+} \\frac{-2x^3}{x^2-1},\\quad \\lim_{x\\to -1^-} \\frac{-2x^3}{x^2-1} $$
                      $$ \\lim_{x\\to 1^-} \\frac{-3}{x^2-3x+2},\\quad \\lim_{x\\to 1^+} \\frac{-3}{x^2-3x+2} $$
                      $$ \\lim_{x\\to +\\infty} \\frac{\\sqrt{1+x^2}}{x},\\quad \\lim_{x\\to -\\infty} \\frac{\\sqrt{1+x^2}}{x} $$`,
            questions: [
                {
                    id: 'ex9q1',
                    texte: "Résultats.",
                    solution: `<p><strong>1)</strong> $\\lim_{x\\to 1^+} \\dfrac{-2}{x-1} = -\\infty$ ; $\\lim_{x\\to 1^-} \\dfrac{-2}{x-1} = +\\infty$.</p>
                              <p><strong>2)</strong> $\\lim_{x\\to -1^+} \\dfrac{-2x^3}{x^2-1} = +\\infty$ ; $\\lim_{x\\to -1^-} \\dfrac{-2x^3}{x^2-1} = -\\infty$.</p>
                              <p><strong>3)</strong> $\\lim_{x\\to 1^-} \\dfrac{-3}{x^2-3x+2} = +\\infty$ ; $\\lim_{x\\to 1^+} \\dfrac{-3}{x^2-3x+2} = -\\infty$.</p>
                              <p><strong>4)</strong> $\\lim_{x\\to +\\infty} \\dfrac{\\sqrt{1+x^2}}{x} = 1$ ; $\\lim_{x\\to -\\infty} \\dfrac{\\sqrt{1+x^2}}{x} = -1$.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 10
        // ======================================================================
        {
            numero: 10,
            enonce: `<p>Déterminer le prolongement par continuité de $f$ en $x_0$ :</p>
                      <p>1. $f(x)=\\dfrac{x^3+3x^2-2x-4}{x+1}$, $x_0=-1$.</p>
                      <p>2. $f(x)=\\dfrac{1-\\sqrt{2}\\cos x}{4x-\\pi}$, $x_0=\\dfrac{\\pi}{4}$.</p>
                      <p>3. $f(x)=\\dfrac{\\cos(4x)-1}{x^2}$, $x_0=0$.</p>`,
            questions: [
                {
                    id: 'ex10q1',
                    texte: "1. $\\dfrac{x^3+3x^2-2x-4}{x+1}$ en $x_0=-1$.",
                    solution: `<p>On factorise le numérateur. $P(-1)=-1+3+2-4=0$, donc $x+1$ est un facteur.</p>
                              <p>$P(x)=(x+1)(x^2+2x-4)$.</p>
                              <p>Pour $x\\neq -1$, $f(x)=x^2+2x-4$. $\\lim_{x\\to -1} f(x) = 1-2-4 = -5$.</p>
                              <p><strong>$\\tilde{f}(-1)=-5$</strong>.</p>`
                },
                {
                    id: 'ex10q2',
                    texte: "2. $\\dfrac{1-\\sqrt{2}\\cos x}{4x-\\pi}$ en $x_0=\\dfrac{\\pi}{4}$.",
                    solution: `<p>Posons $t=x-\\dfrac{\\pi}{4}$. $x=\\dfrac{\\pi}{4}+t$.</p>
                              <p>$\\cos(\\dfrac{\\pi}{4}+t) = \\dfrac{\\sqrt{2}}{2}(\\cos t - \\sin t)$.</p>
                              <p>$1-\\sqrt{2}\\cos x = 1-\\cos t + \\sin t$.</p>
                              <p>$4x-\\pi = 4t$.</p>
                              <p>$f(x)=\\dfrac{1-\\cos t + \\sin t}{4t} = \\dfrac{1-\\cos t}{4t} + \\dfrac{\\sin t}{4t}$.</p>
                              <p>$\\lim_{t\\to 0} f(x) = 0 + \\dfrac{1}{4} = \\dfrac{1}{4}$.</p>
                              <p><strong>$\\tilde{f}(\\pi/4)=\\dfrac{1}{4}$</strong>.</p>`
                },
                {
                    id: 'ex10q3',
                    texte: "3. $\\dfrac{\\cos(4x)-1}{x^2}$ en $x_0=0$.",
                    solution: `<p>$\\cos(4x)-1 \\sim -\\dfrac{(4x)^2}{2} = -8x^2$.</p>
                              <p>$\\lim_{x\\to 0} \\dfrac{\\cos(4x)-1}{x^2} = -8$.</p>
                              <p><strong>$\\tilde{f}(0)=-8$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 11
        // ======================================================================
        {
            numero: 11,
            enonce: `<p>Étudier les limites suivantes :</p>
                      <p>1. $\\cos\\left(\\dfrac{\\pi x+1}{x}\\right)$ en $-\\infty$.</p>
                      <p>2. $\\sin\\left(\\dfrac{3}{\\sqrt{x}}\\right)$ en $+\\infty$.</p>
                      <p>3. $\\dfrac{\\sin(x^2)}{x}$ en $0^+$.</p>`,
            questions: [
                {
                    id: 'ex11q1',
                    texte: "1. $\\lim_{x\\to -\\infty} \\cos\\left(\\dfrac{\\pi x+1}{x}\\right)$.",
                    solution: `<p>$f = \\nu \\circ u$ avec $u(x)=\\dfrac{\\pi x+1}{x}$ et $\\nu(x)=\\cos x$.</p>
                              <p>$\\lim_{x\\to -\\infty} u(x) = \\pi$ et $\\lim_{x\\to \\pi} \\nu(x) = -1$.</p>
                              <p><strong>$\\lim_{x\\to -\\infty} f(x) = -1$</strong>.</p>`
                },
                {
                    id: 'ex11q2',
                    texte: "2. $\\lim_{x\\to +\\infty} \\sin\\left(\\dfrac{3}{\\sqrt{x}}\\right)$.",
                    solution: `<p>$\\lim_{x\\to +\\infty} \\dfrac{3}{\\sqrt{x}} = 0$ et $\\lim_{t\\to 0} \\sin t = 0$.</p>
                              <p><strong>$\\lim_{x\\to +\\infty} f(x) = 0$</strong>.</p>`
                },
                {
                    id: 'ex11q3',
                    texte: "3. $\\lim_{x\\to 0^+} \\dfrac{\\sin(x^2)}{x}$.",
                    solution: `<p>On pose $X = x^2$. $\\dfrac{\\sin(x^2)}{x} = \\dfrac{\\sin X}{\\sqrt{X}}$.</p>
                              <p>$\\lim_{x\\to 0^+} \\dfrac{\\sin(x^2)}{x} = \\lim_{X\\to 0^+} \\dfrac{\\sin X}{\\sqrt{X}} = 0$.</p>
                              <p><strong>$\\lim_{x\\to 0^+} f(x) = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 12
        // ======================================================================
        {
            numero: 12,
            enonce: `<p>Soit $f(x)=\\dfrac{1-\\cos x}{x}$.</p>
                      <p>1. Déterminer $\\lim_{x\\to 0} f(x)$.</p>
                      <p>2. Déterminer $\\lim_{x\\to 0} f(\\sin x)$ et $\\lim_{x\\to 0} f(1-\\cos x)$.</p>`,
            questions: [
                {
                    id: 'ex12q1',
                    texte: "1. $\\lim_{x\\to 0} f(x)$.",
                    solution: `<p>$\\lim_{x\\to 0} \\dfrac{1-\\cos x}{x} = 0$.</p>`
                },
                {
                    id: 'ex12q2',
                    texte: "2. $\\lim_{x\\to 0} f(\\sin x)$ et $\\lim_{x\\to 0} f(1-\\cos x)$.",
                    solution: `<p>$\\lim_{x\\to 0} \\sin x = 0$ et $\\lim_{t\\to 0} f(t)=0$, donc <strong>$\\lim_{x\\to 0} f(\\sin x) = 0$</strong>.</p>
                              <p>$\\lim_{x\\to 0} (1-\\cos x) = 0$ et $\\lim_{t\\to 0} f(t)=0$, donc <strong>$\\lim_{x\\to 0} f(1-\\cos x) = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 13
        // ======================================================================
        {
            numero: 13,
            enonce: `<p>À l'aide des théorèmes de comparaison, étudier les limites en $0$ de :</p>
                      <p>1. $x\\sin\\left(\\dfrac{2}{x}\\right)$</p>
                      <p>2. $1+x^2\\sin\\left(\\dfrac{2}{x}\\right)$</p>
                      <p>3. $\\dfrac{1}{x} + \\sin\\left(\\dfrac{2}{x}\\right)$</p>`,
            questions: [
                {
                    id: 'ex13q1',
                    texte: "1. $\\lim_{x\\to 0} x\\sin\\left(\\dfrac{2}{x}\\right)$.",
                    solution: `<p>Pour $x\\neq 0$, $0\\le \\left|\\sin\\left(\\dfrac{2}{x}\\right)\\right| \\le 1$. Donc $0\\le |x|\\left|\\sin\\left(\\dfrac{2}{x}\\right)\\right| \\le |x|$.</p>
                              <p>$\\lim_{x\\to 0} |x| = 0$, donc <strong>$\\lim_{x\\to 0} f(x) = 0$</strong>.</p>`
                },
                {
                    id: 'ex13q2',
                    texte: "2. $\\lim_{x\\to 0} \\left(1+x^2\\sin\\left(\\dfrac{2}{x}\\right)\\right)$.",
                    solution: `<p>Pour $x\\neq 0$, $-1\\le \\sin\\left(\\dfrac{2}{x}\\right)\\le 1$. Donc $-x^2 \\le x^2\\sin\\left(\\dfrac{2}{x}\\right) \\le x^2$.</p>
                              <p>$1-x^2 \\le f(x) \\le 1+x^2$.</p>
                              <p>$\\lim_{x\\to 0} (1-x^2) = \\lim_{x\\to 0} (1+x^2) = 1$.</p>
                              <p>Par le théorème des gendarmes, <strong>$\\lim_{x\\to 0} f(x) = 1$</strong>.</p>`
                },
                {
                    id: 'ex13q3',
                    texte: "3. $\\lim_{x\\to 0} \\left(\\dfrac{1}{x} + \\sin\\left(\\dfrac{2}{x}\\right)\\right)$.",
                    solution: `<p>Pour $x>0$, $\\sin\\left(\\dfrac{2}{x}\\right) \\ge -1$, donc $f(x) \\ge \\dfrac{1}{x} - 1$.</p>
                              <p>$\\lim_{x\\to 0^+} \\left(\\dfrac{1}{x} - 1\\right) = +\\infty$, donc <strong>$\\lim_{x\\to 0^+} f(x) = +\\infty$</strong>.</p>
                              <p>Pour $x<0$, $\\sin\\left(\\dfrac{2}{x}\\right) \\le 1$, donc $f(x) \\le \\dfrac{1}{x} + 1$.</p>
                              <p>$\\lim_{x\\to 0^-} \\left(\\dfrac{1}{x} + 1\\right) = -\\infty$, donc <strong>$\\lim_{x\\to 0^-} f(x) = -\\infty$</strong>.</p>
                              <p><strong>$f$ n'admet pas de limite en $0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 14
        // ======================================================================
        {
            numero: 14,
            enonce: `<p>À l'aide des théorèmes de comparaison, étudier les limites en $+\\infty$ et en $-\\infty$ de :</p>
                      <p>1. $\\dfrac{1+\\cos x}{x}$</p>
                      <p>2. $\\dfrac{1+\\cos x}{\\sqrt{|x|}}$</p>
                      <p>3. $\\dfrac{x+x\\cos x}{x^4+x^2+3}$</p>`,
            questions: [
                {
                    id: 'ex14q1',
                    texte: "1. $\\lim_{x\\to \\pm\\infty} \\dfrac{1+\\cos x}{x}$.",
                    solution: `<p>Pour $x>0$, $0\\le 1+\\cos x \\le 2$, donc $0\\le \\dfrac{1+\\cos x}{x} \\le \\dfrac{2}{x}$.</p>
                              <p>$\\lim_{x\\to +\\infty} \\dfrac{2}{x} = 0$. <strong>$\\lim_{x\\to +\\infty} f(x) = 0$</strong>.</p>
                              <p>Pour $x<0$, $0\\ge \\dfrac{1+\\cos x}{x} \\ge \\dfrac{2}{x}$. $\\lim_{x\\to -\\infty} \\dfrac{2}{x} = 0$. <strong>$\\lim_{x\\to -\\infty} f(x) = 0$</strong>.</p>`
                },
                {
                    id: 'ex14q2',
                    texte: "2. $\\lim_{x\\to \\pm\\infty} \\dfrac{1+\\cos x}{\\sqrt{|x|}}$.",
                    solution: `<p>Pour $x\\neq 0$, $0\\le \\dfrac{1+\\cos x}{\\sqrt{|x|}} \\le \\dfrac{2}{\\sqrt{|x|}}$.</p>
                              <p>$\\lim_{x\\to \\pm\\infty} \\dfrac{2}{\\sqrt{|x|}} = 0$. <strong>$\\lim_{x\\to \\pm\\infty} f(x) = 0$</strong>.</p>`
                },
                {
                    id: 'ex14q3',
                    texte: "3. $\\lim_{x\\to \\pm\\infty} \\dfrac{x+x\\cos x}{x^4+x^2+3}$.",
                    solution: `<p>$0\\le |x|(1+\\cos x) \\le 2|x|$.</p>
                              <p>$0\\le \\left|\\dfrac{x(1+\\cos x)}{x^4+x^2+3}\\right| \\le \\dfrac{2|x|}{x^4+x^2+3}$.</p>
                              <p>$\\lim_{x\\to \\pm\\infty} \\dfrac{2|x|}{x^4+x^2+3} = 0$. <strong>$\\lim_{x\\to \\pm\\infty} f(x) = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 15
        // ======================================================================
        {
            numero: 15,
            enonce: `<p>1. Montrer que pour tout réel $x$, $\\dfrac{1}{3} \\le \\dfrac{1}{2-\\sin x} \\le 1$.</p>
                      <p>2. En déduire les limites en $+\\infty$ de $\\dfrac{x}{2-\\sin x}$ et $\\dfrac{x+\\sin x}{2-\\sin x}$.</p>`,
            questions: [
                {
                    id: 'ex15q1',
                    texte: "1. Montrer l'encadrement.",
                    solution: `<p>$-1\\le \\sin x \\le 1 \\Rightarrow -1\\le -\\sin x \\le 1 \\Rightarrow 1\\le 2-\\sin x \\le 3$.</p>
                              <p>En prenant l'inverse : <strong>$\\dfrac{1}{3} \\le \\dfrac{1}{2-\\sin x} \\le 1$</strong>.</p>`
                },
                {
                    id: 'ex15q2',
                    texte: "2. Déduire les limites en $+\\infty$.",
                    solution: `<p>Pour $x>0$, $\\dfrac{x}{2-\\sin x} \\ge \\dfrac{x}{3}$ et $\\lim_{x\\to +\\infty} \\dfrac{x}{3} = +\\infty$.</p>
                              <p><strong>$\\lim_{x\\to +\\infty} \\dfrac{x}{2-\\sin x} = +\\infty$</strong>.</p>
                              <p>$\\dfrac{x+\\sin x}{2-\\sin x} = \\dfrac{x+2+\\sin x-2}{2-\\sin x} = \\dfrac{x+2}{2-\\sin x} - 1$.</p>
                              <p>Pour $x>0$, $\\dfrac{x+2}{2-\\sin x} \\ge \\dfrac{x+2}{3}$, donc $f(x) \\ge \\dfrac{x-1}{3}$.</p>
                              <p>$\\lim_{x\\to +\\infty} \\dfrac{x-1}{3} = +\\infty$, donc <strong>$\\lim_{x\\to +\\infty} \\dfrac{x+\\sin x}{2-\\sin x} = +\\infty$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 16
        // ======================================================================
        {
            numero: 16,
            enonce: `<p>Soit $f(x)=\\dfrac{x\\cos x}{x^2+1}$.</p>
                      <p>1. Trouver un réel $M>0$ tel que $|x f(x)| \\le M$ pour tout réel $x$.</p>
                      <p>2. En déduire les limites de $f$ en $+\\infty$ et en $-\\infty$.</p>`,
            questions: [
                {
                    id: 'ex16q1',
                    texte: "1. Trouver $M$.",
                    solution: `<p>$|x f(x)| = \\left|\\dfrac{x^2\\cos x}{x^2+1}\\right| = \\left(1-\\dfrac{1}{x^2+1}\\right)|\\cos x|$.</p>
                              <p>$|\\cos x| \\le 1$ et $1-\\dfrac{1}{x^2+1} \\le 1$, donc <strong>$|x f(x)| \\le 1$</strong>. On prend $M=1$.</p>`
                },
                {
                    id: 'ex16q2',
                    texte: "2. Déduire les limites.",
                    solution: `<p>$|f(x)| \\le \\dfrac{1}{|x|}$ pour $x\\neq 0$.</p>
                              <p>$\\lim_{x\\to \\pm\\infty} \\dfrac{1}{|x|} = 0$, donc <strong>$\\lim_{x\\to \\pm\\infty} f(x) = 0$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 17
        // ======================================================================
        {
            numero: 17,
            enonce: `<p>Soit $f(x)=\\dfrac{1}{x}\\left(2-\\sin\\left(\\dfrac{1}{x}\\right)\\right)$.</p>
                      <p>1. Montrer que pour $x>0$, $f(x) \\ge \\dfrac{1}{x}$.</p>
                      <p>2. En déduire $\\lim_{x\\to 0^+} f(x)$.</p>
                      <p>3. Montrer que pour $x<0$, $f(x) \\le \\dfrac{1}{x}$.</p>
                      <p>4. En déduire $\\lim_{x\\to 0^-} f(x)$.</p>`,
            questions: [
                {
                    id: 'ex17q1',
                    texte: "1. Pour $x>0$, $f(x) \\ge \\dfrac{1}{x}$.",
                    solution: `<p>$\\sin\\left(\\dfrac{1}{x}\\right) \\le 1 \\Rightarrow 2-\\sin\\left(\\dfrac{1}{x}\\right) \\ge 1$.</p>
                              <p>Comme $x>0$, $\\dfrac{1}{x}\\left(2-\\sin\\left(\\dfrac{1}{x}\\right)\\right) \\ge \\dfrac{1}{x}$. <strong>$f(x) \\ge \\dfrac{1}{x}$</strong>.</p>`
                },
                {
                    id: 'ex17q2',
                    texte: "2. Déduire $\\lim_{x\\to 0^+} f(x)$.",
                    solution: `<p>$f(x) \\ge \\dfrac{1}{x}$ pour $x>0$ et $\\lim_{x\\to 0^+} \\dfrac{1}{x} = +\\infty$.</p>
                              <p><strong>$\\lim_{x\\to 0^+} f(x) = +\\infty$</strong>.</p>`
                },
                {
                    id: 'ex17q3',
                    texte: "3. Pour $x<0$, $f(x) \\le \\dfrac{1}{x}$.",
                    solution: `<p>$2-\\sin\\left(\\dfrac{1}{x}\\right) \\ge 1$.</p>
                              <p>Comme $x<0$, multiplier par $\\dfrac{1}{x}$ (négatif) renverse l'inégalité : <strong>$f(x) \\le \\dfrac{1}{x}$</strong>.</p>`
                },
                {
                    id: 'ex17q4',
                    texte: "4. Déduire $\\lim_{x\\to 0^-} f(x)$.",
                    solution: `<p>$f(x) \\le \\dfrac{1}{x}$ pour $x<0$ et $\\lim_{x\\to 0^-} \\dfrac{1}{x} = -\\infty$.</p>
                              <p><strong>$\\lim_{x\\to 0^-} f(x) = -\\infty$</strong>.</p>
                              <p>Donc $f$ n'admet pas de limite en 0.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 18
        // ======================================================================
        {
            numero: 18,
            enonce: `<p>Déterminer l'image de l'intervalle $I$ par la fonction $f$ :</p>
                      <p>1. $f(x)=\\dfrac{x+1}{x-2}$, $I=]2,+\\infty[$.</p>
                      <p>2. $f(x)=\\sqrt{x^2-2x}$, $I=]-\\infty,0]$.</p>
                      <p>3. $f(x)=\\dfrac{1}{\\sin x}$, $I=\\left]0,\\dfrac{\\pi}{2}\\right[$.</p>
                      <p>4. $f(x)=\\tan(\\pi x)$, $I=\\left]-\\dfrac{1}{2},0\\right[$.</p>`,
            questions: [
                {
                    id: 'ex18q1',
                    texte: "1. $f(x)=\\dfrac{x+1}{x-2}$, $I=]2,+\\infty[$.",
                    solution: `<p>$f'(x)=\\dfrac{-3}{(x-2)^2}<0$ sur $]2,+\\infty[$. $f$ est continue et strictement décroissante.</p>
                              <p>$f(]2,+\\infty[) = ]\\lim_{x\\to +\\infty} f, \\lim_{x\\to 2^+} f[ = ]1, +\\infty[$.</p>
                              <p><strong>$f(I) = ]1,+\\infty[$</strong>.</p>`
                },
                {
                    id: 'ex18q2',
                    texte: "2. $f(x)=\\sqrt{x^2-2x}$, $I=]-\\infty,0]$.",
                    solution: `<p>$f'(x)=\\dfrac{x-1}{\\sqrt{x^2-2x}}<0$ sur $]-\\infty,0[$. $f$ est continue et strictement décroissante.</p>
                              <p>$f(]-\\infty,0]) = [f(0), \\lim_{x\\to -\\infty} f[ = [0, +\\infty[$.</p>
                              <p><strong>$f(I) = [0,+\\infty[$</strong>.</p>`
                },
                {
                    id: 'ex18q3',
                    texte: "3. $f(x)=\\dfrac{1}{\\sin x}$, $I=\\left]0,\\dfrac{\\pi}{2}\\right[$.",
                    solution: `<p>$f$ est continue et strictement décroissante sur $I$.</p>
                              <p>$f(I) = ]\\lim_{x\\to (\\pi/2)^-} f, \\lim_{x\\to 0^+} f[ = ]1, +\\infty[$.</p>
                              <p><strong>$f(I) = ]1,+\\infty[$</strong>.</p>`
                },
                {
                    id: 'ex18q4',
                    texte: "4. $f(x)=\\tan(\\pi x)$, $I=\\left]-\\dfrac{1}{2},0\\right[$.",
                    solution: `<p>$f'(x)=\\pi(1+\\tan^2(\\pi x))>0$ sur $I$. $f$ est continue et strictement croissante.</p>
                              <p>$f(I) = ]\\lim_{x\\to (-1/2)^+} f, f(0)[ = ]-\\infty, 0[$.</p>
                              <p><strong>$f(I) = ]-\\infty,0[$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 19 (avec images)
        // ======================================================================
        {
            numero: 19,
            enonce: `
                <p>Dans chacun des cas ci-dessous, donner $f(I)$ à partir des graphiques fournis.</p>
                
                <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin:15px 0;">
                    <div style="text-align:center;">
                        <p><strong>Cas 1 :</strong></p>
                        <img src="assets/images/chapitre1/ex19_graph1.png" alt="Graphique 1" style="max-width:100%; border-radius:8px; border:1px solid var(--border); max-height:200px;">
                    </div>
                    <div style="text-align:center;">
                        <p><strong>Cas 2 :</strong></p>
                        <img src="assets/images/chapitre1/ex19_graph2.png" alt="Graphique 2" style="max-width:100%; border-radius:8px; border:1px solid var(--border); max-height:200px;">
                    </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin:15px 0;">
                    <div style="text-align:center;">
                        <p><strong>Cas 3 :</strong></p>
                        <img src="assets/images/chapitre1/ex19_graph3.png" alt="Graphique 3" style="max-width:100%; border-radius:8px; border:1px solid var(--border); max-height:200px;">
                    </div>
                    <div style="text-align:center;">
                        <p><strong>Cas 4 :</strong></p>
                        <img src="assets/images/chapitre1/ex19_graph4.png" alt="Graphique 4" style="max-width:100%; border-radius:8px; border:1px solid var(--border); max-height:200px;">
                    </div>
                </div>
            `,
            questions: [
                {
                    id: 'ex19q1',
                    texte: "Déterminer $f(I)$ pour chaque cas.",
                    solution: `
                        <p><strong>Cas 1 :</strong> $f(I) = [-2,3]$</p>
                        <img src="assets/images/chapitre1/ex19_graph1.png" alt="Graphique 1" style="max-width:100%; border-radius:8px; margin:10px 0; border:1px solid var(--border); max-height:200px;">
                        
                        <p><strong>Cas 2 :</strong> $f(I) = [-1,4]$</p>
                        <img src="assets/images/chapitre1/ex19_graph2.png" alt="Graphique 2" style="max-width:100%; border-radius:8px; margin:10px 0; border:1px solid var(--border); max-height:200px;">
                        
                        <p><strong>Cas 3 :</strong> $f(I) = [1,2[ \\cup \\{3\\}$</p>
                        <img src="assets/images/chapitre1/ex19_graph3.png" alt="Graphique 3" style="max-width:100%; border-radius:8px; margin:10px 0; border:1px solid var(--border); max-height:200px;">
                        
                        <p><strong>Cas 4 :</strong> $f(I) = ]1,4]$</p>
                        <img src="assets/images/chapitre1/ex19_graph4.png" alt="Graphique 4" style="max-width:100%; border-radius:8px; margin:10px 0; border:1px solid var(--border); max-height:200px;">
                    `
                }
            ]
        },
        // ======================================================================
        // EXERCICE 20
        // ======================================================================
        {
            numero: 20,
            enonce: `<p>Dans chacun des cas suivants, tracer la courbe de $f$ et donner $f(I)$.</p>
                      <p>1. $f(x)=-x+3$, $I=[1,4]$.</p>
                      <p>2. $f(x)=\\dfrac{1}{x}$, $I=]-\\infty,0[$.</p>
                      <p>3. $f(x)=x^2+1$, $I=]-1,2]$.</p>`,
            questions: [
                {
                    id: 'ex20q1',
                    texte: "1. $f(x)=-x+3$, $I=[1,4]$.",
                    solution: `<p>$f$ est affine, sa courbe est une droite décroissante.</p>
                              <p>$f(1)=2$, $f(4)=-1$.</p>
                              <p><strong>$f(I) = [-1,2]$</strong>.</p>
                              <div id="graph-ex20-1" class="graph-container" data-fn="-x+3" data-xmin="0" data-xmax="5" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ex20q2',
                    texte: "2. $f(x)=\\dfrac{1}{x}$, $I=]-\\infty,0[$.",
                    solution: `<p>$f$ est une hyperbole.</p>
                              <p>$\\lim_{x\\to -\\infty} f(x)=0$, $\\lim_{x\\to 0^-} f(x)=-\\infty$.</p>
                              <p><strong>$f(I) = ]-\\infty,0[$</strong>.</p>
                              <div id="graph-ex20-2" class="graph-container" data-fn="1/x" data-xmin="-4" data-xmax="-0.1" data-colors="#2563eb"></div>`
                },
                {
                    id: 'ex20q3',
                    texte: "3. $f(x)=x^2+1$, $I=]-1,2]$.",
                    solution: `<p>$f$ est une parabole de sommet $(0,1)$.</p>
                              <p>Sur $]-1,2]$, le minimum est $f(0)=1$, le maximum est $f(2)=5$.</p>
                              <p><strong>$f(I) = [1,5]$</strong>.</p>
                              <div id="graph-ex20-3" class="graph-container" data-fn="x^2+1" data-xmin="-2" data-xmax="3" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 21
        // ======================================================================
        {
            numero: 21,
            enonce: `<p>Soit $f(x)=x^3+10x-1$.</p>
                      <p>1. Montrer que $f$ est strictement croissante sur $\\mathbb{R}$.</p>
                      <p>2. Montrer que l'équation $f(x)=0$ admet une unique solution $\\alpha\\in[0,1]$.</p>
                      <p>3. Donner une valeur approchée de $\\alpha$ à $10^{-1}$ près.</p>`,
            questions: [
                {
                    id: 'ex21q1',
                    texte: "1. $f$ strictement croissante.",
                    solution: `<p>$f$ est dérivable sur $\\mathbb{R}$ et $f'(x)=3x^2+10>0$.</p>
                              <p><strong>$f$ est strictement croissante sur $\\mathbb{R}$</strong>.</p>`
                },
                {
                    id: 'ex21q2',
                    texte: "2. Existence et unicité.",
                    solution: `<p>$f$ est continue sur $[0,1]$.</p>
                              <p>$f(0)=-1<0$, $f(1)=10>0$, donc $f(0)\\times f(1)<0$.</p>
                              <p>Par le TVI, il existe $\\alpha\\in]0,1[$ tel que $f(\\alpha)=0$. Comme $f$ est strictement croissante, $\\alpha$ est unique.</p>
                              <p><strong>$\\alpha\\in[0,1]$ est unique</strong>.</p>`
                },
                {
                    id: 'ex21q3',
                    texte: "3. Valeur approchée.",
                    solution: `<p>$f(0) \\times f(0.1) < 0$ (car $f(0.1)=0.001+1-1=0.001>0$).</p>
                              <p>Donc $0<\\alpha<0.1$. <strong>$\\alpha \\approx 0.1$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 22
        // ======================================================================
        {
            numero: 22,
            enonce: `<p>Soit $f(x)=x^3-6x^2+x+1$.</p>
                      <p>1. Dresser le tableau de variation de $f$.</p>
                      <p>2. Montrer que l'équation $f(x)=0$ admet une solution $\\alpha\\in[0,1]$.</p>
                      <p>3. Donner une valeur approchée de $\\alpha$ à $10^{-1}$ près.</p>`,
            questions: [
                {
                    id: 'ex22q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p>$f'(x)=3x^2-12x+1$.</p>
                              <p>Les racines de $f'$ sont $x_1 = 2-\\dfrac{\\sqrt{33}}{3}$ et $x_2 = 2+\\dfrac{\\sqrt{33}}{3}$.</p>
                              <p>$f$ est croissante, décroissante, croissante.</p>
                              <p>$\\lim_{x\\to \\pm\\infty} f(x) = \\pm\\infty$.</p>
                              <p>La courbe admet deux branches paraboliques de direction $(O,\\vec{j})$.</p>
                              <div id="graph-ex22" class="graph-container" data-fn="x^3 - 6*x^2 + x + 1" data-xmin="-1" data-xmax="6" data-colors="#2563eb"></div>
                              <table style="border-collapse:collapse; margin:10px 0; width:100%; background:var(--bg);">
                                  <tr><th style="border:1px solid var(--border); padding:8px; text-align:center;">$x$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$-\\infty$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$x_1$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$x_2$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$+\\infty$</th>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$f'(x)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$f(x)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-\\infty$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\nearrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$f(x_1)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\searrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$f(x_2)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\nearrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+\\infty$</td>
                                  </tr>
                              </table>`
                },
                {
                    id: 'ex22q2',
                    texte: "2. Solution dans $[0,1]$.",
                    solution: `<p>$f(0)=1>0$, $f(1)=1-6+1+1=-3<0$.</p>
                              <p>Par le TVI, <strong>il existe $\\alpha\\in]0,1[$ tel que $f(\\alpha)=0$</strong>.</p>`
                },
                {
                    id: 'ex22q3',
                    texte: "3. Valeur approchée.",
                    solution: `<p>$f(0.5)\\times f(0.6)<0$, donc $0.5<\\alpha<0.6$.</p>
                              <p><strong>$\\alpha \\approx 0.5$</strong>.</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 23
        // ======================================================================
        {
            numero: 23,
            enonce: `<p>Soit $f(x)=x^3-12x+1$.</p>
                      <p>1. Dresser le tableau de variation de $f$.</p>
                      <p>2. Montrer que la courbe coupe l'axe des abscisses en trois points.</p>
                      <p>3. Montrer que $x_1\\in[-4,-3]$.</p>
                      <p>4. Donner un encadrement de $x_2$ et $x_3$ par deux entiers consécutifs.</p>
                      <p>5. Discuter suivant $k$ le nombre de solutions de $f(x)=k$.</p>
                      <p>6. Donner le nombre de solutions de $|f(x)|=1$.</p>`,
            questions: [
                {
                    id: 'ex23q1',
                    texte: "1. Tableau de variation.",
                    solution: `<p>$f'(x)=3x^2-12=3(x-2)(x+2)$.</p>
                              <p>$f$ est croissante sur $]-\\infty,-2]$, décroissante sur $[-2,2]$, croissante sur $[2,+\\infty[$.</p>
                              <p>$f(-2)=17$, $f(2)=-15$.</p>
                              <div id="graph-ex23" class="graph-container" data-fn="x^3 - 12*x + 1" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>
                              <table style="border-collapse:collapse; margin:10px 0; width:100%; background:var(--bg);">
                                  <tr><th style="border:1px solid var(--border); padding:8px; text-align:center;">$x$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$-\\infty$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$-2$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$2$</th>
                                      <th style="border:1px solid var(--border); padding:8px; text-align:center;">$+\\infty$</th>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$f'(x)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$0$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+$</td>
                                  </tr>
                                  <tr><td style="border:1px solid var(--border); padding:8px; text-align:center;">$f(x)$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-\\infty$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\nearrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$17$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\searrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$-15$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$\\nearrow$</td>
                                      <td style="border:1px solid var(--border); padding:8px; text-align:center;">$+\\infty$</td>
                                  </tr>
                              </table>`
                },
                {
                    id: 'ex23q2',
                    texte: "2. Trois racines.",
                    solution: `<p>D'après le tableau de variation, comme le maximum local $17>0$ et le minimum local $-15<0$, la courbe coupe l'axe des abscisses trois fois.</p>`
                },
                {
                    id: 'ex23q3',
                    texte: "3. $x_1\\in[-4,-3]$.",
                    solution: `<p>$f(-4)=-15<0$, $f(-3)=10>0$. Par le TVI, <strong>$x_1\\in]-4,-3[$</strong>.</p>`
                },
                {
                    id: 'ex23q4',
                    texte: "4. Encadrement de $x_2$ et $x_3$.",
                    solution: `<p>$x_2\\in]0,1[$, $x_3\\in]3,4[$.</p>`
                },
                {
                    id: 'ex23q5',
                    texte: "5. Discussion suivant $k$.",
                    solution: `<p>Si $k<-15$ ou $k>17$ : 1 solution.</p>
                              <p>Si $k=15$ ou $k=17$ : 2 solutions.</p>
                              <p>Si $-15<k<17$ : 3 solutions.</p>`
                },
                {
                    id: 'ex23q6',
                    texte: "6. $|f(x)|=1$.",
                    solution: `<p>L'équation $|f(x)|=1$ admet <strong>6 solutions</strong> (graphiquement).</p>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 24
        // ======================================================================
        {
            numero: 24,
            enonce: `<p>1. On considère la fonction $h(x)=\\sqrt{x}-\\dfrac{1}{x}-1$.</p>
                      <p>a. Montrer que $h$ est strictement croissante sur $]0,+\\infty[$.</p>
                      <p>b. Déterminer $h(]0,+\\infty[)$.</p>
                      <p>c. Montrer que l'équation $h(x)=0$ admet une unique solution $\\alpha\\in[2,3]$.</p>
                      <p>d. Donner une valeur approchée de $\\alpha$ à $10^{-1}$ près.</p>
                      <p>2. Représenter dans un repère orthogonal les fonctions $f(x)=\\sqrt{x}$ et $g(x)=\\dfrac{1}{x}+1$.</p>`,
            questions: [
                {
                    id: 'ex24q1',
                    texte: "a. Montrer que $h$ est strictement croissante sur $]0,+\\infty[$.",
                    solution: `<p>$h$ est dérivable sur $]0,+\\infty[$ et $h'(x)=\\dfrac{1}{2\\sqrt{x}}+\\dfrac{1}{x^2}>0$.</p>
                              <p><strong>$h$ est strictement croissante</strong>.</p>`
                },
                {
                    id: 'ex24q2',
                    texte: "b. Déterminer $h(]0,+\\infty[)$.",
                    solution: `<p>$h$ est continue et strictement croissante.</p>
                              <p>$\\lim_{x\\to 0^+} h(x) = -\\infty$, $\\lim_{x\\to +\\infty} h(x) = +\\infty$.</p>
                              <p><strong>$h(]0,+\\infty[) = ]-\\infty,+\\infty[ = \\mathbb{R}$</strong>.</p>`
                },
                {
                    id: 'ex24q3',
                    texte: "c. Montrer que l'équation $h(x)=0$ admet une unique solution $\\alpha\\in[2,3]$.",
                    solution: `<p>$h$ est continue sur $[2,3]$.</p>
                              <p>$h(2)=\\sqrt{2}-\\dfrac{3}{2}\\approx -0.086<0$.</p>
                              <p>$h(3)=\\sqrt{3}-\\dfrac{4}{3}\\approx 0.399>0$.</p>
                              <p>Par le TVI, il existe $\\alpha\\in]2,3[$ tel que $h(\\alpha)=0$. Comme $h$ est strictement croissante, cette solution est unique.</p>
                              <p><strong>$\\alpha\\in]2,3[$ est l'unique solution</strong>.</p>`
                },
                {
                    id: 'ex24q4',
                    texte: "d. Donner une valeur approchée de $\\alpha$ à $10^{-1}$ près.",
                    solution: `<p>$h(2.1)\\approx -0.027<0$, $h(2.2)\\approx 0.028>0$.</p>
                              <p><strong>$\\alpha \\approx 2.1$</strong>.</p>`
                },
                {
                    id: 'ex24q5',
                    texte: "2. Représenter $f$ et $g$.",
                    solution: `<p>$f(x)=\\sqrt{x}$ est croissante, concave, avec $\\lim_{x\\to +\\infty} f(x)/x = 0$ (branche parabolique de direction $(O,\\vec{i})$).</p>
                              <p>$g(x)=\\dfrac{1}{x}+1$ est décroissante sur $]0,+\\infty[$, avec $\\lim_{x\\to +\\infty} g(x)=1$, $\\lim_{x\\to 0^+} g(x)=+\\infty$.</p>
                              <div id="graph-ex24" class="graph-container" data-fn="sqrt(x); 1/x + 1" data-xmin="0.1" data-xmax="4" data-colors="#2563eb,#dc2626"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 25
        // ======================================================================
        {
            numero: 25,
            enonce: `<p>Soit $f(x)=\\cos x - x$.</p>
                      <p>1. Montrer que $f$ est strictement décroissante sur $\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                      <p>2. Montrer que l'équation $f(x)=0$ admet une solution unique $\\alpha$ dans $\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                      <p>3. Donner une valeur approchée de $\\alpha$ à $10^{-1}$ près.</p>`,
            questions: [
                {
                    id: 'ex25q1',
                    texte: "1. $f$ strictement décroissante.",
                    solution: `<p>$f'(x) = -(1+\\sin x) < 0$ pour $x\\in\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                              <p><strong>$f$ est strictement décroissante</strong>.</p>`
                },
                {
                    id: 'ex25q2',
                    texte: "2. Existence et unicité.",
                    solution: `<p>$f$ est continue sur $\\left[0,\\dfrac{\\pi}{2}\\right]$.</p>
                              <p>$f(0)=1>0$, $f\\left(\\dfrac{\\pi}{2}\\right) = -\\dfrac{\\pi}{2} < 0$.</p>
                              <p>Par le TVI, il existe $\\alpha\\in\\left]0,\\dfrac{\\pi}{2}\\right[$ tel que $f(\\alpha)=0$. La stricte décroissance garantit l'unicité.</p>
                              <p><strong>$\\alpha$ est unique</strong>.</p>`
                },
                {
                    id: 'ex25q3',
                    texte: "3. Valeur approchée.",
                    solution: `<p>$0.7<\\alpha<0.8$. <strong>$\\alpha \\approx 0.7$</strong>.</p>
                              <div id="graph-ex25" class="graph-container" data-fn="cos(x) - x" data-xmin="0" data-xmax="1.5" data-colors="#2563eb"></div>`
                }
            ]
        },
        // ======================================================================
        // EXERCICE 26
        // ======================================================================
        {
            numero: 26,
            enonce: `<p>Soit $f$ une fonction continue de $[0,1]$ dans $[0,1]$.</p>
                      <p>On pose $g(x)=f(x)-x$.</p>
                      <p>1. Quel est le signe de $g(0)g(1)$ ?</p>
                      <p>2. En déduire que l'équation $f(x)=x$ admet au moins une solution dans $[0,1]$.</p>
                      <p><strong>Application :</strong> Soit $f(x)=\\cos\\left(\\dfrac{\\pi}{2} x\\right)$. Montrer que $f(x)=x$ admet une solution dans $[0,1]$.</p>`,
            questions: [
                {
                    id: 'ex26q1',
                    texte: "1. Signe de $g(0)g(1)$.",
                    solution: `<p>$g(0)=f(0)-0=f(0)$.</p>
                              <p>$g(1)=f(1)-1$.</p>
                              <p>Comme $f(0)\\in[0,1]$, $g(0)\\ge 0$. Comme $f(1)\\le 1$, $g(1)\\le 0$.</p>
                              <p><strong>$g(0)g(1)\\le 0$</strong>.</p>`
                },
                {
                    id: 'ex26q2',
                    texte: "2. Existence d'une solution.",
                    solution: `<p>$g$ est continue sur $[0,1]$ (car $f$ continue).</p>
                              <p>$g(0)\\ge 0$ et $g(1)\\le 0$, donc $g(0)g(1)\\le 0$.</p>
                              <p>Par le TVI, il existe $\\alpha\\in[0,1]$ tel que $g(\\alpha)=0$, donc $f(\\alpha)=\\alpha$.</p>
                              <p><strong>L'équation $f(x)=x$ admet au moins une solution dans $[0,1]$</strong>.</p>`
                },
                {
                    id: 'ex26q3',
                    texte: "Application : $f(x)=\\cos\\left(\\dfrac{\\pi}{2} x\\right)$.",
                    solution: `<p>$f$ est continue sur $[0,1]$ et $f([0,1])=[0,1]$.</p>
                              <p>D'après la question 2, l'équation $f(x)=x$ admet au moins une solution dans $[0,1]$.</p>
                              <p><strong>L'équation $\\cos\\left(\\dfrac{\\pi}{2} x\\right)=x$ admet une solution dans $[0,1]$</strong>.</p>`
                }
            ]
        }
    ]
});