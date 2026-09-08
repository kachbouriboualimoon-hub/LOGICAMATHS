// data/chapitre4.js – Chapitre 4 : Fonctions réciproques
// Solutions conformes aux PDF "énoncé chap4.pdf" et "correction chap4.pdf"
// Programme Tunisien 4ème Sciences Expérimentales
// Corrections détaillées, précises, rigoureuses avec tableaux de variations et graphiques interactifs
// Les images si demandées doivent être placées dans le dossier assets/images/chapitre4/

data.chapitres.push({
  id: 4,
  titre: "Fonctions réciproques",
  resume: "Bijection, fonction réciproque, dérivée de la réciproque, fonctions racines n‑ièmes.",
  rappel: `<p><strong>Bijection :</strong> $f$ réalise une bijection de $I$ sur $f(I)$ si pour tout $y\\in f(I)$, l'équation $f(x)=y$ admet une unique solution dans $I$.</p>
           <p><strong>Fonction réciproque :</strong> $f^{-1}(y)=x \\iff f(x)=y$.</p>
           <p><strong>Théorème :</strong> Si $f$ est continue et strictement monotone sur $I$, alors $f$ est une bijection de $I$ sur $f(I)$, et $f^{-1}$ est continue et strictement monotone sur $f(I)$ (même sens de variation).</p>
           <p><strong>Dérivée de la réciproque :</strong> Si $f$ est dérivable sur $I$ et $f'(x) \\neq 0$ pour tout $x\\in I$, alors $f^{-1}$ est dérivable sur $f(I)$ et $(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))}$.</p>
           <p><strong>Graphique :</strong> Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite $y=x$.</p>
           <p><strong>Fonction racine n‑ième :</strong> Réciproque de $x\\mapsto x^n$ sur $[0,+\\infty[$. Notée $\\sqrt[n]{x}$.</p>`,
  theoremes: `<div class="theoreme-block"><strong>Théorème 1 :</strong> Si $f$ est continue et strictement monotone sur $I$, alors $f$ est une bijection de $I$ sur $f(I)$ et $f^{-1}$ est continue et strictement monotone sur $f(I)$.</div>
              <div class="theoreme-block"><strong>Théorème 2 (Dérivée de la réciproque) :</strong> Si $f$ est dérivable sur $I$ et $f'(x) \\neq 0$ pour tout $x\\in I$, alors $f^{-1}$ est dérivable sur $f(I)$ et $(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))}$.</div>
              <div class="theoreme-block"><strong>Théorème 3 (Racine n‑ième) :</strong> Pour $n\\ge 2$, la fonction $x\\mapsto \\sqrt[n]{x}$ est continue sur $[0,+\\infty[$, dérivable sur $]0,+\\infty[$ et sa dérivée est $\\dfrac{1}{n\\sqrt[n]{x^{n-1}}}$.</div>`,
  methodes: `<p><strong>•</strong> Pour montrer qu'une fonction est bijective : vérifier la continuité et la stricte monotonie sur l'intervalle, puis déterminer l'image.</p>
            <p><strong>•</strong> Pour expliciter $f^{-1}$ : poser $y=f(x)$, résoudre en $x$ en fonction de $y$, puis échanger les variables.</p>
            <p><strong>•</strong> Pour étudier la dérivabilité de $f^{-1}$ : utiliser la formule $(f^{-1})'(y)=1/f'(f^{-1}(y))$ en vérifiant que $f'\\neq 0$.</p>
            <p><strong>•</strong> Pour les racines n‑ièmes, utiliser les propriétés : $\\sqrt[n]{a^n}=a$, $\\sqrt[n]{ab}=\\sqrt[n]{a}\\sqrt[n]{b}$, etc.</p>`,
  astuces: `<div class="astuce-box">💡 Pour vérifier qu'une fonction est strictement monotone, étudiez le signe de sa dérivée.</div>
            <div class="astuce-box">💡 Quand vous explicitez $f^{-1}$, pensez à restreindre le domaine en fonction de l'intervalle de départ.</div>
            <div class="astuce-box">💡 La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y=x$.</div>
            <div class="astuce-box">💡 Pour les fonctions racines n‑ièmes : $\\sqrt[n]{x} = x^{1/n}$ et $(\\sqrt[n]{x})^n = x$.</div>`,
  erreurs: `<div class="erreur-box">⚠️ Confondre bijection et monotonie : une fonction peut être bijective sans être monotone (mais si elle est continue, la monotonie est suffisante).</div>
            <div class="erreur-box">⚠️ Oublier de préciser l'ensemble de définition de la réciproque : $f^{-1}$ est définie sur $f(I)$, pas sur $I$.</div>
            <div class="erreur-box">⚠️ Calculer $(f^{-1})'(y)$ sans s'assurer que $f'$ ne s'annule pas.</div>
            <div class="erreur-box">⚠️ Ne pas inverser les rôles de $x$ et $y$ lors de l'explicitation.</div>`,
  quiz: {
    questions: [
      { type: 'qcm', text: 'Soit $f(x)=\\sin x$. Sur quel intervalle $f$ réalise-t-elle une bijection sur $[-1,1]$ ?', options: ['$[0,2\\pi]$', '$[0,\\pi]$', '$[-\\pi/2,\\pi/2]$'], correct: 2 },
      { type: 'qcm', text: 'Soit $f(x)=\\cos x$ sur $[0,\\pi]$. Que vaut $(f^{-1})\'(1/2)$ ?', options: ['$2/\\sqrt{3}$', '$-2/\\sqrt{3}$', '$\\sqrt{3}/2$'], correct: 1 },
      { type: 'qcm', text: 'La fonction $f(x)=\\sqrt[3]{x}$ est dérivable sur :', options: ['$[0,+\\infty[$', '$]0,+\\infty[$', '$\\mathbb{R}$'], correct: 1 },
      { type: 'qcm', text: 'La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à :', options: ["l'axe des abscisses", "l'axe des ordonnées", "la droite $y=x$"], correct: 2 },
      { type: 'vf', text: 'Toute fonction affine $f(x)=ax+b$ avec $a\\neq 0$ réalise une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$.', correct: true },
      { type: 'vf', text: 'Pour tout $x>0$, $\\sqrt[4]{x} \\ge \\sqrt[3]{x}$.', correct: false },
      { type: 'vf', text: 'La fonction réciproque de $f(x)=\\sqrt[4]{x}$ est dérivable à droite en $0$.', correct: false },
      { type: 'vf', text: 'Si $f$ est strictement monotone et dérivable sur $I$ et si $f\'$ garde un signe constant sur $I$, alors sa réciproque garde un signe constant sur $f(I)$.', correct: false }
    ]
  },
  exercices: [
    // ======================================================================
    // EXERCICE 1 – Identifier les bijections (graphique)
    // ======================================================================
    {
      numero: 1,
      enonce: `<p>Parmi les fonctions $f_1$, $f_2$, $f_3$ représentées ci‑après, identifier celles qui réalisent une bijection de $I$ sur $f_i(I)$.</p>
               <div style="display:flex; flex-wrap:wrap; gap:20px;">
                 <div>
                   <p>1) $I=[-4,3]$, $f_1(I)=[-4,3]$</p>
                   <img src="assets/images/chapitre4/ex1_1.png" alt="Graphique f1" style="max-width:200px;">
                 </div>
                 <div>
                   <p>2) $I=[-3,1]$, $f_2(I)=[-4,4]$</p>
                   <img src="assets/images/chapitre4/ex1_2.png" alt="Graphique f2" style="max-width:200px;">
                 </div>
                 <div>
                   <p>3) $I=[-3,4]$, $f_3(I)=[-3,4]$</p>
                   <img src="assets/images/chapitre4/ex1_3.png" alt="Graphique f3" style="max-width:200px;">
                 </div>
               </div>`,
      questions: [
        {
          id: 'ch4ex1q1',
          texte: "Identifier les bijections.",
          solution: `<p><strong>Correction :</strong></p>
                    <ul>
                      <li><strong>$f_1$ :</strong> La courbe n'est pas monotone sur $[-4,3]$ (elle admet un maximum et un minimum). Donc $f_1$ <strong>n'est pas</strong> une bijection.</li>
                      <li><strong>$f_2$ :</strong> La courbe est strictement décroissante sur $[-3,1]$ et continue. Son image est $[-4,4]$. Donc $f_2$ <strong>réalise</strong> une bijection de $[-3,1]$ sur $[-4,4]$.</li>
                      <li><strong>$f_3$ :</strong> La courbe est strictement croissante sur $[-3,4]$ et continue. Son image est $[-3,4]$. Donc $f_3$ <strong>réalise</strong> une bijection de $[-3,4]$ sur $[-3,4]$.</li>
                    </ul>
                    <p><strong>Réponse :</strong> $f_2$ et $f_3$ sont des bijections.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 2 – f(x)=x²−4x+5 sur ]-∞,2]
    // ======================================================================
    {
      numero: 2,
      enonce: `<p>Soit $f$ définie sur $I=]-\\infty,2]$ par $f(x)=x^2-4x+5$.</p>
               <ol>
                 <li>Montrer que $f$ réalise une bijection de $I$ sur un intervalle $J$ que l'on précisera.</li>
                 <li>Tracer la courbe de $f$ dans un repère orthonormé $(O,\\vec{i},\\vec{j})$.</li>
                 <li>Soit $f^{-1}$ la fonction réciproque de $f$.
                   <ol type="a">
                     <li>Tracer la courbe de $f^{-1}$ dans le même repère.</li>
                     <li>Étudier graphiquement la dérivabilité de $f^{-1}$ à droite en $1$.</li>
                     <li>Montrer que $f^{-1}$ est dérivable sur $]1,+\\infty[$.</li>
                     <li>Expliciter $f^{-1}(x)$ pour $x\\in J$.</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex2q1',
          texte: "1. Montrer la bijection.",
          solution: `<p>$f$ est dérivable sur $]-\\infty,2]$ et $f'(x)=2x-4=2(x-2)$. Pour $x\\le 2$, $f'(x)\\le 0$, donc $f$ est strictement décroissante sur $]-\\infty,2]$. Elle est continue, donc elle réalise une bijection de $]-\\infty,2]$ sur son image.</p>
                    <p>$f(2)=4-8+5=1$ et $\\lim_{x\\to -\\infty} f(x)=+\\infty$. Donc $J=f(]-\\infty,2])=[1,+\\infty[$.</p>
                    <p><strong>$f$ est une bijection de $]-\\infty,2]$ sur $[1,+\\infty[$.</strong></p>`
        },
        {
          id: 'ch4ex2q2',
          texte: "2. Tracer la courbe de $f$.",
          solution: `<p>La courbe est une parabole de sommet $(2,1)$ (car $f(x)=(x-2)^2+1$). Elle est tracée pour $x\\le 2$.</p>
                    <div id="graph-ex2" class="graph-container" data-fn="(x-2)^2+1" data-xmin="-2" data-xmax="4" data-colors="#2563eb"></div>`
        },
        {
          id: 'ch4ex2q3',
          texte: "3.a. Tracer la courbe de $f^{-1}$.",
          solution: `<p>La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y=x$.</p>`
        },
        {
          id: 'ch4ex2q4',
          texte: "3.b. Dérivabilité à droite en $1$.",
          solution: `<p>Graphiquement, la tangente à $C_f$ au point $(2,1)$ est horizontale ($f'(2)=0$). La symétrique aura une tangente verticale en $(1,2)$.</p>
                    <p><strong>$f^{-1}$ n'est pas dérivable à droite en $1$</strong> (la courbe admet une demi‑tangente verticale).</p>`
        },
        {
          id: 'ch4ex2q5',
          texte: "3.c. Dérivabilité sur $]1,+\\infty[$.",
          solution: `<p>Pour $x\\in ]-\\infty,2[$, $f'(x)=2(x-2)<0$, donc $f'(x)\\neq 0$.</p>
                    <p>D'après le théorème de dérivation de la réciproque, <strong>$f^{-1}$ est dérivable sur $f(]-\\infty,2[)=]1,+\\infty[$</strong>.</p>`
        },
        {
          id: 'ch4ex2q6',
          texte: "3.d. Expliciter $f^{-1}(x)$.",
          solution: `<p>Soit $y=f(x)$, $x\\in ]-\\infty,2]$, $y\\in [1,+\\infty[$.</p>
                    <p>$y=x^2-4x+5 \\iff (x-2)^2+1=y \\iff (x-2)^2=y-1$.</p>
                    <p>Comme $x\\le 2$, $x-2\\le 0$, donc $x-2=-\\sqrt{y-1}$.</p>
                    <p>D'où $x=2-\\sqrt{y-1}$.</p>
                    <p><strong>$f^{-1}(x)=2-\\sqrt{x-1}$ pour $x\\in [1,+\\infty[$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 3 – f(x)=x−1−1/x sur ]-∞,0[
    // ======================================================================
    {
      numero: 3,
      enonce: `<p>Soit $f$ définie sur $I=]-\\infty,0[$ par $f(x)=x-1-\\dfrac{1}{x}$.</p>
               <ol>
                 <li>Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on déterminera.</li>
                 <li>Expliciter $f^{-1}(x)$ pour tout réel $x$.</li>
                 <li>Montrer que $f^{-1}$ est dérivable sur $J$ et expliciter $(f^{-1})'(x)$, $x\\in J$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex3q1',
          texte: "1. Bijection.",
          solution: `<p>$f$ est dérivable sur $]-\\infty,0[$ et $f'(x)=1+\\dfrac{1}{x^2}>0$. Donc $f$ est strictement croissante sur $]-\\infty,0[$. Elle est continue, donc bijection de $]-\\infty,0[$ sur son image.</p>
                    <p>$\\lim_{x\\to -\\infty} f(x) = -\\infty$, et $\\lim_{x\\to 0^-} f(x) = +\\infty$ (car $-1/x \\to +\\infty$).</p>
                    <p>Donc $J=f(]-\\infty,0[)=\\mathbb{R}$.</p>
                    <p><strong>$f$ est une bijection de $]-\\infty,0[$ sur $\\mathbb{R}$.</strong></p>`
        },
        {
          id: 'ch4ex3q2',
          texte: "2. Explicitation.",
          solution: `<p>Soit $y=f(x)$, $x<0$. On a : $y=x-1-\\dfrac{1}{x}$.</p>
                    <p>Multiplions par $x$ : $xy=x^2-x-1 \\iff x^2-(y+1)x-1=0$.</p>
                    <p>$\\Delta = (y+1)^2+4>0$. Les racines sont $x=\\dfrac{y+1 \\pm \\sqrt{(y+1)^2+4}}{2}$.</p>
                    <p>Comme $x<0$, on prend la racine négative : $x=\\dfrac{y+1 - \\sqrt{(y+1)^2+4}}{2}$.</p>
                    <p><strong>$f^{-1}(x)=\\dfrac{x+1 - \\sqrt{(x+1)^2+4}}{2}$ pour $x\\in\\mathbb{R}$.</strong></p>`
        },
        {
          id: 'ch4ex3q3',
          texte: "3. Dérivabilité et dérivée.",
          solution: `<p>$f'(x)=1+\\dfrac{1}{x^2}\\neq 0$ pour tout $x<0$. Donc $f^{-1}$ est dérivable sur $\\mathbb{R}=f(I)$.</p>
                    <p>$(f^{-1})'(x)=\\dfrac{1}{f'(f^{-1}(x))}=\\dfrac{1}{1+\\dfrac{1}{(f^{-1}(x))^2}}$.</p>
                    <p>On peut aussi dériver directement l'expression de $f^{-1}$ :</p>
                    <p>$(f^{-1})'(x)=\\dfrac{1}{2}\\left[1-\\dfrac{x+1}{\\sqrt{(x+1)^2+4}}\\right]$.</p>
                    <p><strong>$(f^{-1})'(x)=\\dfrac{1}{2}\\left(1-\\dfrac{x+1}{\\sqrt{x^2+2x+5}}\\right)$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 4 – f(x)=(x+1)/(x−1) sur ]1,+∞[
    // ======================================================================
    {
      numero: 4,
      enonce: `<p>Soit $f$ définie sur $I=]1,+\\infty[$ par $f(x)=\\dfrac{x+1}{x-1}$.</p>
               <ol>
                 <li>Étudier les variations de $f$ et montrer que $f$ réalise une bijection de $I$ sur $I$.</li>
                 <li>
                   <ol type="a">
                     <li>Expliciter $f\\circ f(x)$, $x\\in I$.</li>
                     <li>Qu'en déduit-on ?</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex4q1',
          texte: "1. Variations et bijection.",
          solution: `<p>$f$ est dérivable sur $]1,+\\infty[$ et $f'(x)=\\dfrac{-2}{(x-1)^2}<0$. Donc $f$ est strictement décroissante sur $]1,+\\infty[$. Elle est continue, donc bijection de $]1,+\\infty[$ sur son image.</p>
                    <p>$\\lim_{x\\to 1^+} f(x) = +\\infty$, et $\\lim_{x\\to +\\infty} f(x)=1$.</p>
                    <p>Donc $f(]1,+\\infty[)=]1,+\\infty[$.</p>
                    <p><strong>$f$ réalise une bijection de $I$ sur $I$.</strong></p>`
        },
        {
          id: 'ch4ex4q2',
          texte: "2.a. $f\\circ f$.",
          solution: `<p>$f(f(x)) = \\dfrac{f(x)+1}{f(x)-1}$.</p>
                    <p>$f(x)=\\dfrac{x+1}{x-1}$.</p>
                    <p>$f(f(x)) = \\dfrac{\\dfrac{x+1}{x-1}+1}{\\dfrac{x+1}{x-1}-1} = \\dfrac{\\dfrac{x+1+x-1}{x-1}}{\\dfrac{x+1-x+1}{x-1}} = \\dfrac{2x}{2} = x$.</p>
                    <p><strong>$f\\circ f(x)=x$ pour tout $x\\in I$.</strong></p>`
        },
        {
          id: 'ch4ex4q3',
          texte: "2.b. Conséquence.",
          solution: `<p>$f$ est sa propre réciproque : $f^{-1}=f$.</p>
                    <p><strong>$f$ est une involution.</strong></p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 5 – f(x)=√(x−1)+2 sur [1,+∞[
    // ======================================================================
    {
      numero: 5,
      enonce: `<p>Soit $f$ définie sur $[1,+\\infty[$ par $f(x)=\\sqrt{x-1}+2$.</p>
               <ol>
                 <li>Étudier la dérivabilité de $f$ à droite en $1$ et interpréter.</li>
                 <li>Dresser le tableau de variation de $f$.</li>
                 <li>Montrer que $f$ admet une fonction réciproque $f^{-1}$ que l'on déterminera.</li>
                 <li>Étudier la dérivabilité de $f^{-1}$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex5q1',
          texte: "1. Dérivabilité à droite en $1$.",
          solution: `<p>$f(1)=2$. Pour $x>1$, $\\dfrac{f(x)-f(1)}{x-1} = \\dfrac{\\sqrt{x-1}}{x-1} = \\dfrac{1}{\\sqrt{x-1}}$.</p>
                    <p>Quand $x\\to 1^+$, $\\dfrac{1}{\\sqrt{x-1}} \\to +\\infty$.</p>
                    <p><strong>$f$ n'est pas dérivable à droite en $1$</strong> ; la courbe admet une demi‑tangente verticale.</p>`
        },
        {
          id: 'ch4ex5q2',
          texte: "2. Tableau de variation.",
          solution: `<p>Pour $x>1$, $f'(x)=\\dfrac{1}{2\\sqrt{x-1}}>0$. Donc $f$ est strictement croissante sur $[1,+\\infty[$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$1$</td><td>$+\\infty$</td></tr>
                    <tr><th>$f'(x)$</th><td>$||$</td><td>$+$</td></tr>
                    <tr><th>$f(x)$</th><td>$2$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr></table>`
        },
        {
          id: 'ch4ex5q3',
          texte: "3. Réciproque.",
          solution: `<p>$f$ est continue et strictement croissante sur $[1,+\\infty[$, donc bijection de $[1,+\\infty[$ sur $[2,+\\infty[$.</p>
                    <p>Soit $y=f(x)$, $y\\ge 2$. Alors $y=\\sqrt{x-1}+2 \\iff \\sqrt{x-1}=y-2 \\iff x=(y-2)^2+1$.</p>
                    <p><strong>$f^{-1}(x)=(x-2)^2+1$, $x\\in[2,+\\infty[$</strong>.</p>`
        },
        {
          id: 'ch4ex5q4',
          texte: "4. Dérivabilité de $f^{-1}$.",
          solution: `<p>$f^{-1}$ est dérivable sur $]2,+\\infty[$ car $f'(x)\\neq 0$ pour $x>1$.</p>
                    <p>En $x=2$, $f^{-1}$ a une tangente horizontale (car $f'(1)$ est infini) : <strong>$(f^{-1})'_d(2)=0$</strong>.</p>
                    <p>$(f^{-1})'(x)=2(x-2)$ pour $x>2$.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 6 – f(x)=1+x/√(1+x²) sur R
    // ======================================================================
    {
      numero: 6,
      enonce: `<p>Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=1+\\dfrac{x}{\\sqrt{1+x^2}}$.</p>
               <ol>
                 <li>Étudier les variations de $f$ et montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur $[0,2[$.</li>
                 <li>Expliciter $f^{-1}(x)$ pour $x\\in ]0,2[$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex6q1',
          texte: "1. Variations et bijection.",
          solution: `<p>$f$ est dérivable sur $\\mathbb{R}$.</p>
                    <p>$f'(x)=\\dfrac{1\\cdot\\sqrt{1+x^2} - x\\cdot\\dfrac{x}{\\sqrt{1+x^2}}}{1+x^2} = \\dfrac{1}{(1+x^2)^{3/2}} > 0$.</p>
                    <p>$f$ est strictement croissante sur $\\mathbb{R}$.</p>
                    <p>$f(0)=1$.</p>
                    <p>$\\lim_{x\\to +\\infty} f(x) = 1+1=2$, $\\lim_{x\\to -\\infty} f(x) = 1-1=0$.</p>
                    <p>Donc $f(\\mathbb{R})=]0,2[$. Comme $f$ est continue et strictement croissante, <strong>$f$ réalise une bijection de $\\mathbb{R}$ sur $]0,2[$.</strong></p>`
        },
        {
          id: 'ch4ex6q2',
          texte: "2. Réciproque.",
          solution: `<p>Soit $y=f(x)$, $y\\in ]0,2[$. $y-1 = \\dfrac{x}{\\sqrt{1+x^2}}$.</p>
                    <p>Élevons au carré : $(y-1)^2 = \\dfrac{x^2}{1+x^2}$.</p>
                    <p>$(y-1)^2(1+x^2)=x^2 \\iff (y-1)^2 = x^2(1-(y-1)^2)$.</p>
                    <p>$x^2 = \\dfrac{(y-1)^2}{1-(y-1)^2}$.</p>
                    <p>Comme $x$ et $y-1$ ont même signe, $x = \\dfrac{y-1}{\\sqrt{1-(y-1)^2}}$.</p>
                    <p><strong>$f^{-1}(x)=\\dfrac{x-1}{\\sqrt{2x-x^2}}$ pour $x\\in ]0,2[$.</strong></p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 7 – f(x)=√x/(√x+1) sur R+
    // ======================================================================
    {
      numero: 7,
      enonce: `<p>Soit $f$ définie sur $\\mathbb{R}_+$ par $f(x)=\\dfrac{\\sqrt{x}}{\\sqrt{x}+1}$.</p>
               <ol>
                 <li>Étudier la continuité puis la dérivabilité de $f$ à droite en $0$.</li>
                 <li>
                   <ol type="a">
                     <li>Dresser le tableau de variation de $f$.</li>
                     <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}_+$ sur $[0,1[$.</li>
                     <li>Étudier la dérivabilité de $f^{-1}$ sur $[0,1[$.</li>
                   </ol>
                 </li>
                 <li>Expliciter $f^{-1}(x)$ pour $x\\in [0,1[$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex7q1',
          texte: "1. Continuité et dérivabilité en $0$.",
          solution: `<p>$f(0)=0$. Pour $x>0$, $f(x)=\\dfrac{\\sqrt{x}}{\\sqrt{x}+1}$.</p>
                    <p>Quand $x\\to 0^+$, $f(x)\\to 0$, donc <strong>$f$ est continue à droite en $0$</strong>.</p>
                    <p>$\\dfrac{f(x)-f(0)}{x} = \\dfrac{\\sqrt{x}}{x(\\sqrt{x}+1)} = \\dfrac{1}{\\sqrt{x}(\\sqrt{x}+1)} \\to +\\infty$.</p>
                    <p><strong>$f$ n'est pas dérivable à droite en $0$</strong> (tangente verticale).</p>`
        },
        {
          id: 'ch4ex7q2',
          texte: "2.a. Tableau de variation.",
          solution: `<p>Pour $x>0$, $f'(x)=\\dfrac{1}{2\\sqrt{x}(\\sqrt{x}+1)^2}>0$.</p>
                    <p>$f$ est strictement croissante sur $[0,+\\infty[$.</p>
                    <p>$\\lim_{x\\to +\\infty} f(x)=1$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$0$</td><td>$+\\infty$</td></tr>
                    <tr><th>$f'(x)$</th><td>$||$</td><td>$+$</td></tr>
                    <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$1$</td></tr></table>`
        },
        {
          id: 'ch4ex7q3',
          texte: "2.b. Bijection.",
          solution: `<p>$f$ continue et strictement croissante sur $[0,+\\infty[$, donc bijection de $\\mathbb{R}_+$ sur $[0,1[$.</p>`
        },
        {
          id: 'ch4ex7q4',
          texte: "2.c. Dérivabilité de $f^{-1}$.",
          solution: `<p>$f'(x)\\neq 0$ pour $x>0$, donc $f^{-1}$ est dérivable sur $]0,1[$.</p>
                    <p>En $0$, $f$ n'est pas dérivable à droite, donc $f^{-1}$ admet une tangente horizontale en $0$ : <strong>$(f^{-1})'_d(0)=0$</strong>.</p>`
        },
        {
          id: 'ch4ex7q5',
          texte: "3. Explicitation.",
          solution: `<p>Soit $y=f(x)$, $y\\in[0,1[$. $y=\\dfrac{\\sqrt{x}}{\\sqrt{x}+1}$.</p>
                    <p>$y(\\sqrt{x}+1)=\\sqrt{x} \\iff y\\sqrt{x}+y=\\sqrt{x} \\iff \\sqrt{x}(1-y)=y$.</p>
                    <p>$\\sqrt{x}=\\dfrac{y}{1-y} \\iff x=\\dfrac{y^2}{(1-y)^2}$.</p>
                    <p><strong>$f^{-1}(x)=\\dfrac{x^2}{(1-x)^2}$ pour $x\\in[0,1[$.</strong></p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 8 – Étude graphique d'une bijection f
    // ======================================================================
    {
      numero: 8,
      enonce: `<p>Le graphique ci‑dessous représente la courbe d'une fonction $f$ bijective de $\\mathbb{R}$ sur $\\mathbb{R}$.</p>
               <img src="assets/images/chapitre4/ex8.png" alt="Graphique f" style="max-width:300px;">
               <p>On désigne par $g$ la fonction réciproque de $f$.</p>
               <ol>
                 <li>Que peut-on dire de la dérivabilité de $g$ en $-1$ et en $1$ ?</li>
                 <li>Dresser le tableau de variation de $g$.</li>
                 <li>Reproduire la courbe de $f$ et représenter dans le même repère la courbe de $g$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex8q1',
          texte: "1. Dérivabilité de $g$ en $-1$ et $1$.",
          solution: `<p>On lit sur le graphique : $f(0)=-1$, $f(-2)=1$.</p>
                    <ul>
                      <li>En $x=-1$ (image de $0$) : la tangente à $C_f$ en $0$ est horizontale ($f'(0)=0$). Donc <strong>$g$ n'est pas dérivable en $-1$</strong> (tangente verticale).</li>
                      <li>En $x=1$ (image de $-2$) : la tangente à $C_f$ en $-2$ est verticale ($f'$ n'existe pas ou est infinie). Donc <strong>$g$ est dérivable en $1$ et $g'(1)=0$</strong>.</li>
                    </ul>`
        },
        {
          id: 'ch4ex8q2',
          texte: "2. Tableau de variation de $g$.",
          solution: `<p>Si $f$ est décroissante sur $\\mathbb{R}$ (d'après le graphique), alors $g$ est décroissante sur $\\mathbb{R}$ (même sens).</p>
                    <p>Les limites : $\\lim_{x\\to -\\infty} f(x)=+\\infty \\Rightarrow \\lim_{x\\to +\\infty} g(x)=-\\infty$ ; $\\lim_{x\\to +\\infty} f(x)=-\\infty \\Rightarrow \\lim_{x\\to -\\infty} g(x)=+\\infty$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$-\\infty$</td><td>$-1$</td><td>$1$</td><td>$+\\infty$</td></tr>
                    <tr><th>$g'(x)$</th><td></td><td>non dérivable</td><td>$0$</td><td></td></tr>
                    <tr><th>$g(x)$</th><td>$+\\infty$</td><td>$\\searrow$</td><td>$0$</td><td>$\\searrow$</td><td>$-2$</td><td>$\\searrow$</td><td>$-\\infty$</td></tr></table>`
        },
        {
          id: 'ch4ex8q3',
          texte: "3. Courbe de $g$.",
          solution: `<p>La courbe de $g$ est la symétrique de $C_f$ par rapport à la droite $y=x$.</p>
                    <div id="graph-ex8" class="graph-container" data-fn="x" data-xmin="-5" data-xmax="5" data-colors="#2563eb"></div>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 9 – f bijective de [-1,2] sur [-4,+∞[
    // ======================================================================
    {
      numero: 9,
      enonce: `<p>Le graphique ci‑dessous représente la courbe $C$ d'une fonction $f$ bijective de $[-1,2]$ sur $[-4,+\\infty[$. La courbe $C$ admet une asymptote verticale d'équation $x=-1$.</p>
               <img src="assets/images/chapitre4/ex9.png" alt="Graphique f" style="max-width:300px;">
               <p>On désigne par $g$ la fonction réciproque de $f$.</p>
               <ol>
                 <li>Que peut-on dire de la dérivabilité de $g$ en $-1$ et en $-4$ ?</li>
                 <li>Dresser le tableau de variation de $g$.</li>
                 <li>Que peut-on dire de la limite de $g$ en $+\\infty$ ?</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex9q1',
          texte: "1. Dérivabilité de $g$ en $-1$ et $-4$.",
          solution: `<p>D'après le graphique : $f(2)=-1$, $f(0)=-4$ (par exemple).</p>
                    <ul>
                      <li>En $-1$ (image de $2$) : la tangente à $C$ en $x=2$ est verticale, donc <strong>$g$ n'est pas dérivable en $-1$</strong>.</li>
                      <li>En $-4$ (image de $0$) : la tangente à $C$ en $x=0$ est horizontale, donc <strong>$g$ est dérivable en $-4$ et $g'(-4)=0$</strong>.</li>
                    </ul>`
        },
        {
          id: 'ch4ex9q2',
          texte: "2. Tableau de variation de $g$.",
          solution: `<p>$f$ est strictement croissante sur $[-1,2]$ (d'après le graphique), donc $g$ est strictement croissante sur $[-4,+\\infty[$.</p>
                    <p>$f(-1)$ n'existe pas (asymptote verticale), donc $\\lim_{y\\to +\\infty} g(y) = -1$.</p>
                    <p>$g(-4)=0$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$-4$</td><td>$+\\infty$</td></tr>
                    <tr><th>$g'(x)$</th><td>$0$</td><td>$+$</td></tr>
                    <tr><th>$g(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$-1$</td></tr></table>`
        },
        {
          id: 'ch4ex9q3',
          texte: "3. Limite de $g$ en $+\\infty$.",
          solution: `<p>Comme $f$ a une asymptote verticale $x=-1$, on a $\\lim_{y\\to +\\infty} g(y) = -1$.</p>
                    <p><strong>$\\lim_{x\\to +\\infty} g(x) = -1$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 10 – Réciproque de tan x sur ]-π/2, π/2[
    // ======================================================================
    {
      numero: 10,
      enonce: `<p>Soit $f$ définie sur $I=\\left]-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right[$ par $f(x)=\\tan x$.</p>
               <ol>
                 <li>Montrer que $f$ réalise une bijection de $I$ sur $\\mathbb{R}$.</li>
                 <li>Montrer que $f^{-1}$ est dérivable sur $\\mathbb{R}$ et que $(f^{-1})'(x)=\\dfrac{1}{1+x^2}$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex10q1',
          texte: "1. Bijection.",
          solution: `<p>$f$ est dérivable sur $I$ et $f'(x)=1+\\tan^2 x >0$. Donc $f$ est strictement croissante et continue.</p>
                    <p>$\\lim_{x\\to -\\pi/2} \\tan x = -\\infty$, $\\lim_{x\\to \\pi/2} \\tan x = +\\infty$.</p>
                    <p>Donc $f(I)=\\mathbb{R}$.</p>
                    <p><strong>$f$ réalise une bijection de $I$ sur $\\mathbb{R}$.</strong></p>`
        },
        {
          id: 'ch4ex10q2',
          texte: "2. Dérivée de la réciproque.",
          solution: `<p>$f'$ ne s'annule pas sur $I$, donc $f^{-1}$ est dérivable sur $\\mathbb{R}$.</p>
                    <p>Soit $x=f^{-1}(y)$. Alors $(f^{-1})'(y)=\\dfrac{1}{f'(x)}=\\dfrac{1}{1+\\tan^2 x} = \\dfrac{1}{1+y^2}$.</p>
                    <p><strong>$(f^{-1})'(y)=\\dfrac{1}{1+y^2}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 11 – f(x)=2cos x+3 sur [0,π]
    // ======================================================================
    {
      numero: 11,
      enonce: `<p>Soit $f$ définie sur $[0,\\pi]$ par $f(x)=2\\cos x+3$.</p>
               <ol>
                 <li>Dresser le tableau de variation de $f$.</li>
                 <li>Montrer que $f$ réalise une bijection de $[0,\\pi]$ sur un intervalle $I$ que l'on déterminera.</li>
                 <li>On note $g$ la fonction réciproque de $f$.
                   <ol type="a">
                     <li>Calculer $g(5)$, $g(3)$ et $g(1)$.</li>
                     <li>Montrer que $g$ est dérivable sur l'intervalle $]1,5[$ et expliciter $g'(x)$.</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex11q1',
          texte: "1. Tableau de variation.",
          solution: `<p>$f'(x)=-2\\sin x$. Sur $[0,\\pi]$, $\\sin x\\ge 0$, donc $f'(x)\\le 0$. $f$ est strictement décroissante.</p>
                    <p>$f(0)=5$, $f(\\pi)=1$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$0$</td><td>$\\pi$</td></tr>
                    <tr><th>$f'(x)$</th><td>$0$</td><td>$-$</td></tr>
                    <tr><th>$f(x)$</th><td>$5$</td><td>$\\searrow$</td><td>$1$</td></tr></table>`
        },
        {
          id: 'ch4ex11q2',
          texte: "2. Bijection.",
          solution: `<p>$f$ est continue et strictement décroissante sur $[0,\\pi]$, donc bijection de $[0,\\pi]$ sur $[1,5]$.</p>
                    <p><strong>$I=[1,5]$</strong>.</p>`
        },
        {
          id: 'ch4ex11q3',
          texte: "3.a. Calculs : $g(5)$, $g(3)$, $g(1)$.",
          solution: `<ul>
                    <li>$g(5)=0$ (car $f(0)=5$).</li>
                    <li>$g(3)$ : $2\\cos x+3=3 \\Rightarrow \\cos x=0 \\Rightarrow x=\\dfrac{\\pi}{2}$. Donc $g(3)=\\dfrac{\\pi}{2}$.</li>
                    <li>$g(1)=\\pi$ (car $f(\\pi)=1$).</li>
                  </ul>`
        },
        {
          id: 'ch4ex11q4',
          texte: "3.b. Dérivabilité et dérivée de $g$.",
          solution: `<p>$f'(x)=-2\\sin x\\neq 0$ pour $x\\in ]0,\\pi[$. Donc $g$ est dérivable sur $f(]0,\\pi[)=]1,5[$.</p>
                    <p>$g'(x)=\\dfrac{1}{f'(g(x))}=\\dfrac{1}{-2\\sin(g(x))}$.</p>
                    <p>Or $f(g(x))=x \\Rightarrow 2\\cos(g(x))+3=x \\Rightarrow \\cos(g(x))=\\dfrac{x-3}{2}$.</p>
                    <p>Comme $g(x)\\in ]0,\\pi[$, $\\sin(g(x))>0$, donc $\\sin(g(x))=\\sqrt{1-\\left(\\dfrac{x-3}{2}\\right)^2}$.</p>
                    <p><strong>$g'(x)=-\\dfrac{1}{\\sqrt{4-(x-3)^2}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 12 – f(x)=1/sin x sur [π/2, π[
    // ======================================================================
    {
      numero: 12,
      enonce: `<p>Soit $f$ définie sur $\\left[\\dfrac{\\pi}{2},\\pi\\right[$ par $f(x)=\\dfrac{1}{\\sin x}$.</p>
               <ol>
                 <li>Montrer que $f$ réalise une bijection de $\\left[\\dfrac{\\pi}{2},\\pi\\right[$ sur $[1,+\\infty[$.</li>
                 <li>Calculer $f^{-1}(\\sqrt{2})$ et $f^{-1}\\left(\\dfrac{2\\sqrt{3}}{3}\\right)$.</li>
                 <li>Étudier la continuité et la dérivabilité de $f^{-1}$ sur $[1,+\\infty[$.</li>
                 <li>Calculer $(f^{-1})'(x)$ pour $x\\in ]1,+\\infty[$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex12q1',
          texte: "1. Bijection.",
          solution: `<p>$f$ est dérivable sur $]\\pi/2,\\pi[$ et $f'(x)=-\\dfrac{\\cos x}{\\sin^2 x}$. Sur cet intervalle, $\\cos x<0$, donc $f'(x)>0$. $f$ est strictement croissante.</p>
                    <p>$f(\\pi/2)=1$, $\\lim_{x\\to \\pi^-} f(x)=+\\infty$.</p>
                    <p>Donc <strong>$f$ réalise une bijection de $[\\pi/2,\\pi[$ sur $[1,+\\infty[$</strong>.</p>`
        },
        {
          id: 'ch4ex12q2',
          texte: "2. Calculs.",
          solution: `<ul>
                    <li>$f^{-1}(\\sqrt{2})$ : $\\dfrac{1}{\\sin x}=\\sqrt{2} \\Rightarrow \\sin x=\\dfrac{1}{\\sqrt{2}} \\Rightarrow x=\\dfrac{3\\pi}{4}$.</li>
                    <li>$f^{-1}\\left(\\dfrac{2\\sqrt{3}}{3}\\right)$ : $\\dfrac{1}{\\sin x}=\\dfrac{2\\sqrt{3}}{3} \\Rightarrow \\sin x=\\dfrac{3}{2\\sqrt{3}}=\\dfrac{\\sqrt{3}}{2} \\Rightarrow x=\\dfrac{2\\pi}{3}$.</li>
                  </ul>`
        },
        {
          id: 'ch4ex12q3',
          texte: "3. Continuité et dérivabilité de $f^{-1}$.",
          solution: `<p>$f$ est continue et strictement croissante, donc $f^{-1}$ est continue sur $[1,+\\infty[$.</p>
                    <p>$f'(x)=-\\dfrac{\\cos x}{\\sin^2 x}\\neq 0$ pour $x\\in ]\\pi/2,\\pi[$, donc $f^{-1}$ est dérivable sur $]1,+\\infty[$.</p>
                    <p>En $1$, $f'(\\pi/2)=0$ (car $\\cos(\\pi/2)=0$), donc <strong>$f^{-1}$ n'est pas dérivable à droite en $1$</strong>.</p>`
        },
        {
          id: 'ch4ex12q4',
          texte: "4. Dérivée.",
          solution: `<p>$(f^{-1})'(x)=\\dfrac{1}{f'(f^{-1}(x))}$.</p>
                    <p>Soit $y=f^{-1}(x)$. On a $\\sin y=\\dfrac{1}{x}$.</p>
                    <p>$\\cos y=-\\sqrt{1-\\dfrac{1}{x^2}}$ (car $y\\in]\\pi/2,\\pi[$).</p>
                    <p>$f'(y)=\\dfrac{-\\cos y}{\\sin^2 y}=\\dfrac{\\sqrt{1-1/x^2}}{1/x^2}=x^2\\sqrt{1-1/x^2}=x\\sqrt{x^2-1}$.</p>
                    <p><strong>$(f^{-1})'(x)=\\dfrac{1}{x\\sqrt{x^2-1}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 13 – f(x)=1−tan x sur ]-π/2, π/2[
    // ======================================================================
    {
      numero: 13,
      enonce: `<p>Soit $f$ définie sur $\\left]-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right[$ par $f(x)=1-\\tan x$.</p>
               <ol>
                 <li>Dresser le tableau de variation de $f$.</li>
                 <li>Montrer que $f$ réalise une bijection de $\\left]-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right[$ sur $\\mathbb{R}$.</li>
                 <li>Calculer $f^{-1}(0)$ et $f^{-1}(2)$.</li>
                 <li>Montrer que $f^{-1}$ est dérivable sur $\\mathbb{R}$ et que $(f^{-1})'(x)=\\dfrac{1}{-x^2+2x-2}$.</li>
                 <li>Étudier la nature des branches infinies de la courbe de $f^{-1}$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex13q1',
          texte: "1. Tableau de variation.",
          solution: `<p>$f'(x)=-(1+\\tan^2 x)<0$. $f$ est strictement décroissante.</p>
                    <p>$\\lim_{x\\to -\\pi/2} f(x)=+\\infty$, $\\lim_{x\\to \\pi/2} f(x)=-\\infty$.</p>`
        },
        {
          id: 'ch4ex13q2',
          texte: "2. Bijection.",
          solution: `<p>$f$ continue et strictement décroissante sur $I$, donc bijection de $I$ sur $\\mathbb{R}$.</p>`
        },
        {
          id: 'ch4ex13q3',
          texte: "3. Calculs.",
          solution: `<ul>
                    <li>$f^{-1}(0)$ : $1-\\tan x=0 \\Rightarrow \\tan x=1 \\Rightarrow x=\\dfrac{\\pi}{4}$.</li>
                    <li>$f^{-1}(2)$ : $1-\\tan x=2 \\Rightarrow \\tan x=-1 \\Rightarrow x=-\\dfrac{\\pi}{4}$.</li>
                  </ul>`
        },
        {
          id: 'ch4ex13q4',
          texte: "4. Dérivée.",
          solution: `<p>$f'(x)=-(1+\\tan^2 x)\\neq 0$, donc $f^{-1}$ est dérivable sur $\\mathbb{R}$.</p>
                    <p>Soit $y=f^{-1}(x)$. $1-\\tan y=x \\Rightarrow \\tan y=1-x$.</p>
                    <p>$(f^{-1})'(x)=\\dfrac{1}{f'(y)}=\\dfrac{1}{-(1+\\tan^2 y)}=-\\dfrac{1}{1+(1-x)^2}$.</p>
                    <p><strong>$(f^{-1})'(x)=-\\dfrac{1}{x^2-2x+2}=\\dfrac{1}{-x^2+2x-2}$</strong>.</p>`
        },
        {
          id: 'ch4ex13q5',
          texte: "5. Branches infinies.",
          solution: `<p>$\\lim_{x\\to +\\infty} f^{-1}(x) = -\\dfrac{\\pi}{2}$ (car $f(x)\\to -\\infty$ quand $x\\to \\pi/2$).</p>
                    <p>$\\lim_{x\\to -\\infty} f^{-1}(x) = \\dfrac{\\pi}{2}$.</p>
                    <p>Donc la courbe de $f^{-1}$ admet deux asymptotes horizontales : <strong>$y=\\dfrac{\\pi}{2}$</strong> (en $-\\infty$) et <strong>$y=-\\dfrac{\\pi}{2}$</strong> (en $+\\infty$).</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 14 – f(x)=√(cos x) sur [0, π/2]
    // ======================================================================
    {
      numero: 14,
      enonce: `<p>Soit $f$ définie sur $\\left[0,\\dfrac{\\pi}{2}\\right]$ par $f(x)=\\sqrt{\\cos x}$.</p>
               <ol>
                 <li>Étudier la dérivabilité de $f$ en $\\dfrac{\\pi}{2}$ à gauche et interpréter.</li>
                 <li>
                   <ol type="a">
                     <li>Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur $[0,1]$.</li>
                     <li>Montrer, en utilisant la première question, que $f^{-1}$ est dérivable en $0$ à droite et préciser $(f^{-1})'_d(0)$.</li>
                     <li>Préciser la demi‑tangente à la courbe de $f$ en son point d'abscisse $0$ et en déduire que $f^{-1}$ n'est pas dérivable à gauche en $1$.</li>
                   </ol>
                 </li>
                 <li>Montrer que $f^{-1}$ est dérivable sur $]0,1[$ et que $(f^{-1})'(x)=\\dfrac{-2x}{\\sqrt{1-x^4}}$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex14q1',
          texte: "1. Dérivabilité en $\\pi/2$.",
          solution: `<p>$f(\\pi/2)=0$. Pour $x<\\pi/2$ :</p>
                    <p>$\\dfrac{f(x)-f(\\pi/2)}{x-\\pi/2} = \\dfrac{\\sqrt{\\cos x}}{x-\\pi/2}$.</p>
                    <p>Or $\\cos x \\approx -(x-\\pi/2)$ au voisinage de $\\pi/2$, donc $\\sqrt{\\cos x} \\approx \\sqrt{\\pi/2 - x}$.</p>
                    <p>Le taux tend vers $-\\infty$.</p>
                    <p><strong>$f$ n'est pas dérivable à gauche en $\\pi/2$</strong> (tangente verticale).</p>`
        },
        {
          id: 'ch4ex14q2',
          texte: "2.a. Bijection.",
          solution: `<p>$f$ est continue et strictement décroissante sur $[0,\\pi/2]$ ($f'(x)=-\\dfrac{\\sin x}{2\\sqrt{\\cos x}}<0$).</p>
                    <p>$f(0)=1$, $f(\\pi/2)=0$. Donc $f([0,\\pi/2])=[0,1]$.</p>
                    <p><strong>$f$ réalise une bijection de $[0,\\pi/2]$ sur $[0,1]$.</strong></p>`
        },
        {
          id: 'ch4ex14q3',
          texte: "2.b. Dérivabilité de $f^{-1}$ en $0$.",
          solution: `<p>$f$ n'est pas dérivable en $\\pi/2$, donc sa réciproque a une tangente horizontale en $0$.</p>
                    <p><strong>$(f^{-1})'_d(0)=0$</strong>.</p>`
        },
        {
          id: 'ch4ex14q4',
          texte: "2.c. Demi‑tangente en $0$ et dérivabilité en $1$.",
          solution: `<p>$f'(0)=0$ (car $\\sin 0=0$). Donc la courbe de $f$ admet une tangente horizontale en $(0,1)$.</p>
                    <p>La réciproque aura une tangente verticale en $x=1$.</p>
                    <p><strong>$f^{-1}$ n'est pas dérivable à gauche en $1$.</strong></p>`
        },
        {
          id: 'ch4ex14q5',
          texte: "3. Dérivée de $f^{-1}$ sur $]0,1[$.",
          solution: `<p>$f'(x)\\neq 0$ pour $x\\in ]0,\\pi/2[$, donc $f^{-1}$ est dérivable sur $]0,1[$.</p>
                    <p>Soit $y=f^{-1}(x)$. $x=\\sqrt{\\cos y} \\Rightarrow \\cos y = x^2$.</p>
                    <p>$f'(y)=\\dfrac{-\\sin y}{2\\sqrt{\\cos y}} = \\dfrac{-\\sin y}{2x}$.</p>
                    <p>$(f^{-1})'(x)=\\dfrac{1}{f'(y)}=\\dfrac{-2x}{\\sin y}=-\\dfrac{2x}{\\sqrt{1-x^4}}$.</p>
                    <p><strong>$(f^{-1})'(x)=\\dfrac{-2x}{\\sqrt{1-x^4}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 15 – f(x)=cos(πx/2) sur [0,1]
    // ======================================================================
    {
      numero: 15,
      enonce: `<p>Soit $f$ définie sur $[0,1]$ par $f(x)=\\cos\\left(\\dfrac{\\pi}{2}x\\right)$.</p>
               <ol>
                 <li>Étudier les variations de $f$ et tracer sa courbe. (On précisera les demi‑tangentes aux points d'abscisses $0$ et $1$).</li>
                 <li>Montrer que $f$ réalise une bijection de $[0,1]$ sur un intervalle $I$ que l'on précisera.</li>
                 <li>Montrer que $f^{-1}$ est dérivable sur $[0,1[$ et que $(f^{-1})'(x)=\\dfrac{-2}{\\pi\\sqrt{1-x^2}}$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex15q1',
          texte: "1. Variations.",
          solution: `<p>$f'(x)=-\\dfrac{\\pi}{2}\\sin\\left(\\dfrac{\\pi}{2}x\\right)$. Sur $[0,1]$, $\\sin(\\pi x/2)\\ge 0$, donc $f'(x)\\le 0$.</p>
                    <p>$f$ est strictement décroissante. $f(0)=1$, $f(1)=0$.</p>
                    <p>Demi‑tangente en $0$ : $f'(0)=0$ ⇒ horizontale.</p>
                    <p>Demi‑tangente en $1$ : $f'(1)=-\\dfrac{\\pi}{2}$.</p>`
        },
        {
          id: 'ch4ex15q2',
          texte: "2. Bijection.",
          solution: `<p>$f$ continue strictement décroissante sur $[0,1]$, donc bijection de $[0,1]$ sur $[0,1]$.</p>
                    <p><strong>$I=[0,1]$.</strong></p>`
        },
        {
          id: 'ch4ex15q3',
          texte: "3. Dérivée de $f^{-1}$.",
          solution: `<p>$f'(x)\\neq 0$ sur $]0,1[$, donc $f^{-1}$ dérivable sur $]0,1[$. En $0$, $f'(1)\\neq 0$, donc dérivable à droite en $0$.</p>
                    <p>Soit $y=f^{-1}(x)$. $\\cos\\left(\\dfrac{\\pi}{2}y\\right)=x \\Rightarrow \\sin\\left(\\dfrac{\\pi}{2}y\\right)=\\sqrt{1-x^2}$.</p>
                    <p>$f'(y)=-\\dfrac{\\pi}{2}\\sqrt{1-x^2}$.</p>
                    <p><strong>$(f^{-1})'(x)=\\dfrac{-2}{\\pi\\sqrt{1-x^2}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 16 – f(x)=1/(1−cos(πx)) sur ]0,1]
    // ======================================================================
    {
      numero: 16,
      enonce: `<p>Soit $f$ définie sur $]0,1]$ par $f(x)=\\dfrac{1}{1-\\cos(\\pi x)}$.</p>
               <ol>
                 <li>Étudier les variations de $f$ et tracer sa courbe.</li>
                 <li>
                   <ol type="a">
                     <li>Montrer que l'équation $f(x)=x$ admet une unique solution $x_0$ dans $]0,1]$.</li>
                     <li>Calculer $f(2/3)$ et en déduire la valeur de $x_0$.</li>
                   </ol>
                 </li>
                 <li>
                   <ol type="a">
                     <li>Montrer que $f$ réalise une bijection de $]0,1]$ sur $[1/2,+\\infty[$.</li>
                     <li>La fonction $f^{-1}$ est‑elle dérivable en $1/2$ à droite ?</li>
                     <li>Montrer que $f^{-1}$ est dérivable sur $]1/2,+\\infty[$ et que $(f^{-1})'(x)=\\dfrac{-1}{\\pi x\\sqrt{2x-1}}$.</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex16q1',
          texte: "1. Variations.",
          solution: `<p>$f'(x)=\\dfrac{-\\pi\\sin(\\pi x)}{(1-\\cos(\\pi x))^2}$. Sur $]0,1]$, $\\sin(\\pi x)>0$, donc $f'(x)<0$.</p>
                    <p>$f$ est strictement décroissante. $\\lim_{x\\to 0^+} f(x)=+\\infty$, $f(1)=1/2$.</p>`
        },
        {
          id: 'ch4ex16q2',
          texte: "2.a. Équation $f(x)=x$.",
          solution: `<p>Soit $g(x)=f(x)-x$. $g'(x)=f'(x)-1<0$ (car $f'<0$). $g$ est strictement décroissante.</p>
                    <p>$\\lim_{x\\to 0^+} g(x)=+\\infty$, $g(1)=1/2-1=-1/2<0$.</p>
                    <p>Donc <strong>une unique solution dans $]0,1]$</strong>.</p>`
        },
        {
          id: 'ch4ex16q3',
          texte: "2.b. $f(2/3)$.",
          solution: `<p>$\\cos(2\\pi/3)=-1/2$. $f(2/3)=\\dfrac{1}{1-(-1/2)}=\\dfrac{1}{3/2}=\\dfrac{2}{3}$.</p>
                    <p>Donc $x_0=2/3$.</p>`
        },
        {
          id: 'ch4ex16q4',
          texte: "3.a. Bijection.",
          solution: `<p>$f$ continue strictement décroissante de $]0,1]$ sur $[1/2,+\\infty[$.</p>`
        },
        {
          id: 'ch4ex16q5',
          texte: "3.b. Dérivabilité en $1/2$.",
          solution: `<p>$f(1)=1/2$ et $f'(1)=0$ (car $\\sin \\pi=0$). Donc <strong>$f^{-1}$ n'est pas dérivable à droite en $1/2$</strong>.</p>`
        },
        {
          id: 'ch4ex16q6',
          texte: "3.c. Dérivée de $f^{-1}$.",
          solution: `<p>Sur $]1/2,+\\infty[$, $f'(x)\\neq 0$, donc $f^{-1}$ dérivable.</p>
                    <p>Soit $y=f^{-1}(x)$. $x=\\dfrac{1}{1-\\cos(\\pi y)} \\Rightarrow \\cos(\\pi y)=1-\\dfrac{1}{x}$.</p>
                    <p>$\\sin(\\pi y)=\\sqrt{\\dfrac{2x-1}{x^2}}$.</p>
                    <p>$f'(y)=\\dfrac{-\\pi\\sin(\\pi y)}{(1-\\cos(\\pi y))^2}=-\\pi x^2\\cdot\\dfrac{\\sqrt{2x-1}}{x}=-\\pi x\\sqrt{2x-1}$.</p>
                    <p><strong>$(f^{-1})'(x)=\\dfrac{-1}{\\pi x\\sqrt{2x-1}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 17 – f(x)=(x²+1)/(x²+x+1) sur [-1,1]
    // ======================================================================
    {
      numero: 17,
      enonce: `<p>Soit $f$ définie sur $[-1,1]$ par $f(x)=\\dfrac{x^2+1}{x^2+x+1}$.</p>
               <ol>
                 <li>Montrer que $f$ réalise une bijection de $[-1,1]$ sur un intervalle $I$ que l'on précisera.</li>
                 <li>Soit $g$ définie sur $[-1,1]$ par $g(x)=f(x)-x$.
                   <ol type="a">
                     <li>Montrer que l'équation $g(x)=0$ admet une unique solution $\\alpha$ dans $[-1,1[$.</li>
                     <li>Vérifier que $\\alpha\\in\\left[\\dfrac{2}{3},1\\right[$.</li>
                     <li>En déduire que la droite $\\Delta:y=x$ coupe la courbe de $f$ en un unique point.</li>
                   </ol>
                 </li>
                 <li>La fonction $f^{-1}$ est‑elle dérivable en $\\dfrac{2}{3}$ ?</li>
                 <li>
                   <ol type="a">
                     <li>Calculer $f\\left(-\\dfrac{1}{2}\\right)$, $f(0)$ et $f\\left(\\dfrac{1}{2}\\right)$.</li>
                     <li>En déduire les nombres dérivés de $f^{-1}$ en $\\dfrac{5}{3}$, en $1$ et en $\\dfrac{5}{7}$.</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex17q1',
          texte: "1. Bijection.",
          solution: `<p>$f'(x)=\\dfrac{x^2-1}{(x^2+x+1)^2}\\le 0$ sur $[-1,1]$. $f$ est strictement décroissante.</p>
                    <p>$f(-1)=2$, $f(1)=\\dfrac{2}{3}$.</p>
                    <p>Donc <strong>$f$ est une bijection de $[-1,1]$ sur $\\left[\\dfrac{2}{3},2\\right]$</strong>.</p>`
        },
        {
          id: 'ch4ex17q2',
          texte: "2.a. Équation $g(x)=0$.",
          solution: `<p>$g'(x)=f'(x)-1<0$, donc $g$ strictement décroissante.</p>
                    <p>$g(-1)=2-(-1)=3>0$, $g(1)=2/3-1=-1/3<0$.</p>
                    <p>Donc <strong>une unique solution dans $]-1,1[$</strong>.</p>`
        },
        {
          id: 'ch4ex17q3',
          texte: "2.b. $\\alpha\\in[2/3,1[$.",
          solution: `<p>$f(2/3)=\\dfrac{4/9+1}{4/9+2/3+1}=\\dfrac{13/9}{13/9}=1$.</p>
                    <p>$g(2/3)=1-2/3=1/3>0$. $g(1)=-1/3<0$.</p>
                    <p>Donc <strong>$\\alpha\\in]2/3,1[$</strong>.</p>`
        },
        {
          id: 'ch4ex17q4',
          texte: "2.c. Intersection avec $y=x$.",
          solution: `<p>$g(\\alpha)=0 \\iff f(\\alpha)=\\alpha$. Donc le point $(\\alpha,\\alpha)$ est l'unique point d'intersection.</p>`
        },
        {
          id: 'ch4ex17q5',
          texte: "3. Dérivabilité de $f^{-1}$ en $2/3$.",
          solution: `<p>$f^{-1}(2/3)=1$ (car $f(1)=2/3$).</p>
                    <p>$f'(1)=0$ (car $1^2-1=0$). Donc <strong>$f^{-1}$ n'est pas dérivable en $2/3$</strong>.</p>`
        },
        {
          id: 'ch4ex17q6',
          texte: "4.a. Calculs.",
          solution: `<ul>
                    <li>$f(-1/2)=\\dfrac{1/4+1}{1/4-1/2+1}=\\dfrac{5/4}{3/4}=\\dfrac{5}{3}$.</li>
                    <li>$f(0)=1$.</li>
                    <li>$f(1/2)=\\dfrac{1/4+1}{1/4+1/2+1}=\\dfrac{5/4}{7/4}=\\dfrac{5}{7}$.</li>
                  </ul>`
        },
        {
          id: 'ch4ex17q7',
          texte: "4.b. Dérivées de $f^{-1}$.",
          solution: `<p>$(f^{-1})'(5/3)=\\dfrac{1}{f'(-1/2)}$.</p>
                    <p>$f'(-1/2)=\\dfrac{1/4-1}{(3/4)^2}=\\dfrac{-3/4}{9/16}=-\\dfrac{4}{3}$. Donc <strong>$-\\dfrac{3}{4}$</strong>.</p>
                    <p>$(f^{-1})'(1)=\\dfrac{1}{f'(0)}=\\dfrac{1}{-1}=-1$.</p>
                    <p>$(f^{-1})'(5/7)=\\dfrac{1}{f'(1/2)}$. $f'(1/2)=\\dfrac{1/4-1}{(7/4)^2}=\\dfrac{-3/4}{49/16}=-\\dfrac{12}{49}$. Donc <strong>$-\\dfrac{49}{12}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 18 – f(x)=x/√(x²+1)−1 sur R
    // ======================================================================
    {
      numero: 18,
      enonce: `<p>Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{x}{\\sqrt{x^2+1}}-1$.</p>
               <ol>
                 <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}$ sur un intervalle $I$ que l'on précisera.</li>
                 <li>
                   <ol type="a">
                     <li>Montrer que l'équation $f(x)=x$ admet une unique solution $\\alpha$ dans $\\mathbb{R}$ et que $-2<\\alpha<-1$.</li>
                     <li>En déduire le signe de $f(x)-x$.</li>
                   </ol>
                 </li>
                 <li>Expliciter $f^{-1}(x)$ pour $x\\in I$.</li>
                 <li>On considère la suite $(u_n)$ définie par $u_0=-1$ et $u_{n+1}=f(u_n)$.
                   <ol type="a">
                     <li>Montrer que pour tout $n$, $\\alpha \\le u_n \\le -1$.</li>
                     <li>Montrer que $(u_n)$ est convergente et déterminer sa limite.</li>
                   </ol>
                 </li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex18q1',
          texte: "1. Bijection.",
          solution: `<p>$f'(x)=\\dfrac{1}{(x^2+1)^{3/2}}>0$. $f$ strictement croissante.</p>
                    <p>$\\lim_{x\\to -\\infty} f(x) = -1-1 = -2$, $\\lim_{x\\to +\\infty} f(x)=1-1=0$.</p>
                    <p>Donc <strong>$f$ est une bijection de $\\mathbb{R}$ sur $]-2,0[$</strong>.</p>`
        },
        {
          id: 'ch4ex18q2',
          texte: "2.a. Équation $f(x)=x$.",
          solution: `<p>$g(x)=f(x)-x$. $g'(x)=f'(x)-1<0$, donc $g$ strictement décroissante.</p>
                    <p>$g(-2)=f(-2)+2 = -\\dfrac{2}{\\sqrt{5}}-1+2 = 1-\\dfrac{2}{\\sqrt{5}} >0$.</p>
                    <p>$g(-1)=f(-1)+1 = -\\dfrac{1}{\\sqrt{2}}-1+1 = -\\dfrac{1}{\\sqrt{2}}<0$.</p>
                    <p>Donc <strong>$-2<\\alpha<-1$</strong>.</p>`
        },
        {
          id: 'ch4ex18q3',
          texte: "2.b. Signe de $f(x)-x$.",
          solution: `<p>Comme $g$ décroissante : $f(x)-x>0$ pour $x<\\alpha$, $f(x)-x<0$ pour $x>\\alpha$.</p>`
        },
        {
          id: 'ch4ex18q4',
          texte: "3. Explicitation.",
          solution: `<p>Soit $y=f(x)$, $y\\in]-2,0[$. $y+1=\\dfrac{x}{\\sqrt{x^2+1}}$.</p>
                    <p>$(y+1)^2=\\dfrac{x^2}{x^2+1} \\iff x^2 = \\dfrac{(y+1)^2}{1-(y+1)^2}$.</p>
                    <p>Comme $x$ et $y+1$ ont même signe, $x=\\dfrac{y+1}{\\sqrt{1-(y+1)^2}}$.</p>
                    <p><strong>$f^{-1}(x)=\\dfrac{x+1}{\\sqrt{1-(x+1)^2}}=\\dfrac{x+1}{\\sqrt{-x^2-2x}}$</strong>.</p>`
        },
        {
          id: 'ch4ex18q5',
          texte: "4.a. Encadrement de $u_n$.",
          solution: `<p>$u_0=-1$. Par récurrence : $\\alpha \\le u_n \\le -1$.</p>
                    <p>$f$ croissante, $f(\\alpha)=\\alpha$, $f(-1)=-\\dfrac{1}{\\sqrt{2}}-1\\le -1$.</p>`
        },
        {
          id: 'ch4ex18q6',
          texte: "4.b. Convergence.",
          solution: `<p>$u_{n+1}-u_n = f(u_n)-u_n \\le 0$ (car $u_n \\ge \\alpha$).</p>
                    <p>$(u_n)$ décroissante minorée par $\\alpha$, donc convergente.</p>
                    <p>Sa limite $\\ell$ vérifie $f(\\ell)=\\ell$, donc $\\ell=\\alpha$.</p>
                    <p><strong>$\\lim_{n\\to +\\infty} u_n = \\alpha$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 19 – f(x)=√(x²−1)/x + 1 sur [1,+∞[
    // ======================================================================
    {
      numero: 19,
      enonce: `<p><strong>A/</strong> Soit $f$ définie sur $[1,+\\infty[$ par $f(x)=\\dfrac{\\sqrt{x^2-1}}{x}+1$.</p>
               <ol>
                 <li>
                   <ol type="a">
                     <li>Étudier la dérivabilité de $f$ à droite en $1$.</li>
                     <li>Dresser le tableau de variation de $f$.</li>
                     <li>Montrer que $f$ réalise une bijection de $[1,+\\infty[$ sur un intervalle $I$ que l'on précisera.</li>
                   </ol>
                 </li>
                 <li>
                   <ol type="a">
                     <li>La fonction $f^{-1}$ est‑elle dérivable à droite en $1$ ?</li>
                     <li>Expliciter $f^{-1}(x)$ pour $x\\in I$.</li>
                   </ol>
                 </li>
               </ol>
               <p><strong>B/</strong> (non traité).</p>`,
      questions: [
        {
          id: 'ch4ex19q1',
          texte: "A/1.a. Dérivabilité en $1$.",
          solution: `<p>$f(1)=1$. Pour $x>1$ :</p>
                    <p>$\\dfrac{f(x)-f(1)}{x-1} = \\dfrac{\\sqrt{x^2-1}}{x(x-1)} = \\dfrac{\\sqrt{x^2-1}}{x(x-1)}$.</p>
                    <p>$\\dfrac{\\sqrt{x^2-1}}{x-1} = \\dfrac{x+1}{\\sqrt{x^2-1}} \\to +\\infty$.</p>
                    <p><strong>$f$ n'est pas dérivable à droite en $1$</strong> (tangente verticale).</p>`
        },
        {
          id: 'ch4ex19q2',
          texte: "A/1.b. Tableau de variation.",
          solution: `<p>Pour $x>1$, $f'(x)=\\dfrac{1}{x^2\\sqrt{x^2-1}}>0$.</p>
                    <p>$f$ strictement croissante. $\\lim_{x\\to +\\infty} f(x)=1+1=2$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$1$</td><td>$+\\infty$</td></tr>
                    <tr><th>$f'(x)$</th><td>$||$</td><td>$+$</td></tr>
                    <tr><th>$f(x)$</th><td>$1$</td><td>$\\nearrow$</td><td>$2$</td></tr></table>`
        },
        {
          id: 'ch4ex19q3',
          texte: "A/1.c. Bijection.",
          solution: `<p>$f$ continue strictement croissante sur $[1,+\\infty[$, donc bijection de $[1,+\\infty[$ sur $[1,2[$.</p>
                    <p><strong>$I=[1,2[$</strong>.</p>`
        },
        {
          id: 'ch4ex19q4',
          texte: "A/2.a. Dérivabilité de $f^{-1}$ en $1$.",
          solution: `<p>$f'(1)$ est infini, donc $f^{-1}$ admet une tangente horizontale en $1$.</p>
                    <p><strong>$f^{-1}$ est dérivable à droite en $1$ avec $(f^{-1})'_d(1)=0$</strong>.</p>`
        },
        {
          id: 'ch4ex19q5',
          texte: "A/2.b. Explicitation.",
          solution: `<p>Soit $y=f(x)$, $y\\in[1,2[$. $y-1=\\dfrac{\\sqrt{x^2-1}}{x}$.</p>
                    <p>$(y-1)^2=1-\\dfrac{1}{x^2} \\iff \\dfrac{1}{x^2}=1-(y-1)^2 \\iff x=\\dfrac{1}{\\sqrt{1-(y-1)^2}}$.</p>
                    <p><strong>$f^{-1}(x)=\\dfrac{1}{\\sqrt{1-(x-1)^2}}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 20 – Simplification de radicaux
    // ======================================================================
    {
      numero: 20,
      enonce: `<p>Simplifier les nombres ci‑dessous.</p>
               <p>$x=\\dfrac{\\sqrt[3]{3}\\cdot\\sqrt[3]{27}\\cdot\\sqrt[3]{8}}{\\sqrt[3]{81}},\\quad y=\\dfrac{\\sqrt[3]{4}}{\\sqrt[3]{32}},\\quad t=\\sqrt[3]{8^2}$.</p>`,
      questions: [
        {
          id: 'ch4ex20q1',
          texte: "Simplifier.",
          solution: `<ul>
                    <li>$x=\\dfrac{\\sqrt[3]{3\\times 27\\times 8}}{\\sqrt[3]{81}}=\\sqrt[3]{\\dfrac{648}{81}}=\\sqrt[3]{8}=2$.</li>
                    <li>$y=\\sqrt[3]{\\dfrac{4}{32}}=\\sqrt[3]{\\dfrac{1}{8}}=\\dfrac{1}{2}$.</li>
                    <li>$t=\\sqrt[3]{64}=4$.</li>
                  </ul>
                  <p><strong>$x=2$, $y=\\dfrac{1}{2}$, $t=4$.</strong></p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 21 – Résolution d'équations
    // ======================================================================
    {
      numero: 21,
      enonce: `<p>Résoudre dans $\\mathbb{R}$ :</p>
               <ol>
                 <li>$\\sqrt[3]{x}=\\sqrt[4]{2}$</li>
                 <li>$\\sqrt[3]{x^2}=\\sqrt[3]{3}$</li>
                 <li>$\\sqrt[3]{x^2}-3\\sqrt[3]{x}+2=0$</li>
                 <li>$(1-\\sqrt[4]{x})^3+8=0$</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex21q1',
          texte: "1. $\\sqrt[3]{x}=\\sqrt[4]{2}$.",
          solution: `<p>$\\sqrt[3]{x}=\\sqrt[4]{2} \\Rightarrow x=(\\sqrt[4]{2})^3=2^{3/4}=\\sqrt[4]{8}$.</p>
                    <p><strong>$S=\\{\\sqrt[4]{8}\\}$</strong>.</p>`
        },
        {
          id: 'ch4ex21q2',
          texte: "2. $\\sqrt[3]{x^2}=\\sqrt[3]{3}$.",
          solution: `<p>$\\sqrt[3]{x^2}=\\sqrt[3]{3} \\Rightarrow x^2=3 \\Rightarrow x=\\pm\\sqrt{3}$.</p>
                    <p><strong>$S=\\{\\sqrt{3},-\\sqrt{3}\\}$</strong>.</p>`
        },
        {
          id: 'ch4ex21q3',
          texte: "3. $\\sqrt[3]{x^2}-3\\sqrt[3]{x}+2=0$.",
          solution: `<p>Posons $t=\\sqrt[3]{x}$. Alors $t^2-3t+2=0 \\Rightarrow t=1$ ou $t=2$.</p>
                    <p>$t=1 \\Rightarrow x=1$, $t=2 \\Rightarrow x=8$.</p>
                    <p><strong>$S=\\{1,8\\}$</strong>.</p>`
        },
        {
          id: 'ch4ex21q4',
          texte: "4. $(1-\\sqrt[4]{x})^3+8=0$.",
          solution: `<p>$(1-\\sqrt[4]{x})^3=-8 \\Rightarrow 1-\\sqrt[4]{x}=-2 \\Rightarrow \\sqrt[4]{x}=3$.</p>
                    <p>$x=3^4=81$.</p>
                    <p><strong>$S=\\{81\\}$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 22 – Limites avec radicaux
    // ======================================================================
    {
      numero: 22,
      enonce: `<p>Calculer les limites :</p>
               <ul>
                 <li>$\\lim_{x\\to +\\infty} \\sqrt[3]{x^2-x+1}$</li>
                 <li>$\\lim_{x\\to +\\infty} (x-\\sqrt[3]{x})$</li>
                 <li>$\\lim_{x\\to 2} \\dfrac{\\sqrt[3]{x}-\\sqrt[3]{2}}{x-2}$</li>
                 <li>$\\lim_{x\\to +\\infty} \\dfrac{\\sqrt[3]{x}-\\sqrt{x}}{\\sqrt[4]{x}}$</li>
               </ul>`,
      questions: [
        {
          id: 'ch4ex22q1',
          texte: "$\\lim_{x\\to +\\infty} \\sqrt[3]{x^2-x+1}$.",
          solution: `<p>$\\sqrt[3]{x^2-x+1} \\sim \\sqrt[3]{x^2}=x^{2/3} \\to +\\infty$.</p>
                    <p><strong>$+\\infty$</strong>.</p>`
        },
        {
          id: 'ch4ex22q2',
          texte: "$\\lim_{x\\to +\\infty} (x-\\sqrt[3]{x})$.",
          solution: `<p>$x-\\sqrt[3]{x} = \\sqrt[3]{x}(\\sqrt[3]{x^2}-1) \\to +\\infty$.</p>
                    <p><strong>$+\\infty$</strong>.</p>`
        },
        {
          id: 'ch4ex22q3',
          texte: "$\\lim_{x\\to 2} \\dfrac{\\sqrt[3]{x}-\\sqrt[3]{2}}{x-2}$.",
          solution: `<p>C'est le nombre dérivé de $f(x)=\\sqrt[3]{x}$ en $x=2$.</p>
                    <p>$f'(2)=\\dfrac{1}{3\\sqrt[3]{2^2}}=\\dfrac{1}{3\\sqrt[3]{4}}$.</p>
                    <p><strong>$\\dfrac{1}{3\\sqrt[3]{4}}$</strong>.</p>`
        },
        {
          id: 'ch4ex22q4',
          texte: "$\\lim_{x\\to +\\infty} \\dfrac{\\sqrt[3]{x}-\\sqrt{x}}{\\sqrt[4]{x}}$.",
          solution: `<p>On écrit tout en racine 12ème : $\\sqrt[3]{x}=x^{4/12}$, $\\sqrt{x}=x^{6/12}$, $\\sqrt[4]{x}=x^{3/12}$.</p>
                    <p>$\\dfrac{x^{4/12}-x^{6/12}}{x^{3/12}}=x^{1/12}-x^{3/12}=x^{1/12}(1-x^{1/6}) \\to -\\infty$.</p>
                    <p><strong>$-\\infty$</strong>.</p>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 23 – f(x)=x+∛x sur R+
    // ======================================================================
    {
      numero: 23,
      enonce: `<p>Soit $f$ définie sur $\\mathbb{R}_+$ par $f(x)=x+\\sqrt[3]{x}$.</p>
               <ol>
                 <li>Étudier la dérivabilité de $f$ à droite en $0$ et interpréter.</li>
                 <li>Dresser le tableau de variation de $f$.</li>
                 <li>Étudier la branche infinie de la courbe de $f$.</li>
                 <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}_+$ sur $\\mathbb{R}_+$.</li>
                 <li>Calculer $f(1)$, $f(8)$, $(f^{-1})'(2)$ et $(f^{-1})'(10)$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex23q1',
          texte: "1. Dérivabilité en $0$.",
          solution: `<p>$f(0)=0$. $\\dfrac{f(x)-0}{x}=1+\\dfrac{\\sqrt[3]{x}}{x}=1+\\dfrac{1}{x^{2/3}} \\to +\\infty$.</p>
                    <p><strong>$f$ n'est pas dérivable à droite en $0$</strong> (tangente verticale).</p>`
        },
        {
          id: 'ch4ex23q2',
          texte: "2. Tableau de variation.",
          solution: `<p>$f'(x)=1+\\dfrac{1}{3\\sqrt[3]{x^2}}>0$ pour $x>0$.</p>
                    <p>$f$ strictement croissante sur $[0,+\\infty[$.</p>
                    <table border="1" cellpadding="5"><tr><th>$x$</th><td>$0$</td><td>$+\\infty$</td></tr>
                    <tr><th>$f'(x)$</th><td>$||$</td><td>$+$</td></tr>
                    <tr><th>$f(x)$</th><td>$0$</td><td>$\\nearrow$</td><td>$+\\infty$</td></tr></table>`
        },
        {
          id: 'ch4ex23q3',
          texte: "3. Branche infinie.",
          solution: `<p>$\\lim_{x\\to +\\infty} \\dfrac{f(x)}{x} = 1$, et $f(x)-x=\\sqrt[3]{x} \\to +\\infty$.</p>
                    <p>La courbe admet une <strong>branche parabolique de direction $y=x$</strong>.</p>`
        },
        {
          id: 'ch4ex23q4',
          texte: "4. Bijection.",
          solution: `<p>$f$ continue strictement croissante sur $[0,+\\infty[$, $f([0,+\\infty[)=[0,+\\infty[$.</p>
                    <p><strong>$f$ est une bijection de $\\mathbb{R}_+$ sur $\\mathbb{R}_+$.</strong></p>`
        },
        {
          id: 'ch4ex23q5',
          texte: "5. Calculs.",
          solution: `<ul>
                    <li>$f(1)=1+1=2$.</li>
                    <li>$f(8)=8+2=10$.</li>
                    <li>$(f^{-1})'(2)=\\dfrac{1}{f'(1)}=\\dfrac{1}{1+1/3}=\\dfrac{3}{4}$.</li>
                    <li>$(f^{-1})'(10)=\\dfrac{1}{f'(8)}=\\dfrac{1}{1+\\dfrac{1}{3\\sqrt[3]{64}}}=\\dfrac{1}{1+1/12}=\\dfrac{12}{13}$.</li>
                  </ul>`
        }
      ]
    },
    // ======================================================================
    // EXERCICE 24 – f(x)=x∜x sur R+
    // ======================================================================
    {
      numero: 24,
      enonce: `<p>Soit $f$ définie sur $\\mathbb{R}_+$ par $f(x)=x\\sqrt[4]{x}$.</p>
               <ol>
                 <li>Étudier la dérivabilité de $f$ à droite en $0$ et interpréter.</li>
                 <li>Dresser le tableau de variation de $f$.</li>
                 <li>Calculer $\\lim_{x\\to +\\infty} \\dfrac{f(x)}{x}$ et interpréter.</li>
                 <li>Montrer que $f$ réalise une bijection de $\\mathbb{R}_+$ sur $\\mathbb{R}_+$.</li>
                 <li>Expliciter $f^{-1}(x)$ pour $x\\in\\mathbb{R}_+$.</li>
               </ol>`,
      questions: [
        {
          id: 'ch4ex24q1',
          texte: "1. Dérivabilité en $0$.",
          solution: `<p>$f(x)=x^{5/4}$. $f(0)=0$.</p>
                    <p>$\\dfrac{f(x)-0}{x}=x^{1/4} \\to 0$.</p>
                    <p><strong>$f$ est dérivable à droite en $0$ avec $f'_d(0)=0$</strong> (tangente horizontale).</p>`
        },
        {
          id: 'ch4ex24q2',
          texte: "2. Tableau de variation.",
          solution: `<p>$f'(x)=\\dfrac{5}{4}x^{1/4}>0$ pour $x>0$.</p>
                    <p>$f$ strictement croissante sur $[0,+\\infty[$.</p>`
        },
        {
          id: 'ch4ex24q3',
          texte: "3. Branche infinie.",
          solution: `<p>$\\dfrac{f(x)}{x}=x^{1/4} \\to +\\infty$.</p>
                    <p>La courbe admet une <strong>branche parabolique de direction $(O,\\vec{j})$</strong>.</p>`
        },
        {
          id: 'ch4ex24q4',
          texte: "4. Bijection.",
          solution: `<p>$f$ continue strictement croissante sur $[0,+\\infty[$, $f([0,+\\infty[)=[0,+\\infty[$.</p>
                    <p><strong>$f$ est une bijection de $\\mathbb{R}_+$ sur $\\mathbb{R}_+$.</strong></p>`
        },
        {
          id: 'ch4ex24q5',
          texte: "5. Réciproque.",
          solution: `<p>Soit $y=f(x)=x^{5/4}$. Alors $x=y^{4/5}$.</p>
                    <p><strong>$f^{-1}(x)=x^{4/5}$ pour $x\\ge 0$.</strong></p>`
        }
      ]
    }
  ]
});