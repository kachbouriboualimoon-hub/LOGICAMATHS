// data/chapitre5_base.js – Squelette du chapitre 5
// Ce fichier crée le chapitre 5 avec toutes les rubriques et un tableau d'exercices vide.
// Les exercices seront ajoutés par les fichiers part1.js, part2.js, etc.
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé avant.");
        return;
    }

    // Vérifier si le chapitre 5 existe déjà (pour éviter les doublons)
    if (data.chapitres.some(c => c.id === 5)) {
        console.log("Chapitre 5 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 5,
        titre: "Études de fonctions",
        resume: "Étude complète des fonctions : branches infinies, asymptotes, symétries, bijections, fonctions réciproques.",
        rappel: `<p><strong>Branches infinies :</strong></p>
                 <ul>
                   <li>Asymptote verticale : $\\lim f(x) = \\pm\\infty$ en $x=a$.</li>
                   <li>Asymptote horizontale : $\\lim f(x) = L$ en $\\pm\\infty$.</li>
                   <li>Asymptote oblique : $\\lim (f(x) - (ax+b)) = 0$.</li>
                   <li>Branche parabolique direction $(O,\\vec{i})$ : $\\lim f(x)/x = 0$.</li>
                   <li>Branche parabolique direction $(O,\\vec{j})$ : $\\lim f(x)/x = \\pm\\infty$.</li>
                 </ul>
                 <p><strong>Symétries :</strong></p>
                 <ul>
                   <li>Axe $x=a$ : $f(2a-x)=f(x)$.</li>
                   <li>Centre $(a,b)$ : $f(2a-x)=2b-f(x)$.</li>
                 </ul>
                 <p><strong>Fonction réciproque :</strong> Si $f$ est continue et strictement monotone sur $I$, alors $f$ est une bijection de $I$ sur $f(I)$.</p>
                 <p><strong>Dérivée de la réciproque :</strong> $(f^{-1})'(b) = \\dfrac{1}{f'(a)}$ où $b=f(a)$.</p>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Asymptote oblique) :</strong> Si $\\lim f(x)/x = a$ et $\\lim (f(x)-ax) = b$, alors $y=ax+b$ est asymptote oblique.</div>
                    <div class="theoreme-block"><strong>Théorème 2 (Direction asymptotique) :</strong> Si $\\lim f(x)/x = a$ et $\\lim (f(x)-ax) = \\pm\\infty$, alors $y=ax$ est une direction asymptotique.</div>
                    <div class="theoreme-block"><strong>Théorème 3 (Symétrie axiale) :</strong> $f(2a-x)=f(x) \\Leftrightarrow x=a$ axe de symétrie.</div>
                    <div class="theoreme-block"><strong>Théorème 4 (Symétrie centrale) :</strong> $f(2a-x)=2b-f(x) \\Leftrightarrow I(a,b)$ centre de symétrie.</div>
                    <div class="theoreme-block"><strong>Théorème 5 (Dérivée de la réciproque) :</strong> Si $f$ est dérivable en $a$ et $f'(a)\\neq 0$, alors $(f^{-1})'(b)=\\dfrac{1}{f'(a)}$.</div>`,
        methodes: `<p><strong>•</strong> Pour étudier une fonction : domaine, parité/périodicité, limites aux bornes, asymptotes, dérivée, tableau de variations, points particuliers, tracé.</p>
                    <p><strong>•</strong> Pour trouver une asymptote oblique : calculer $\\lim f(x)/x$ puis $\\lim (f(x)-ax)$.</p>
                    <p><strong>•</strong> Pour une branche parabolique : si $\\lim f(x)/x=0$ → direction $(O,\\vec{i})$ ; si $\\lim f(x)/x=\\pm\\infty$ → direction $(O,\\vec{j})$.</p>
                    <p><strong>•</strong> Pour montrer qu'un point est centre de symétrie, vérifier $f(2a-x)=2b-f(x)$.</p>
                    <p><strong>•</strong> Pour déterminer la réciproque, résoudre $y=f(x)$ en fonction de $x$.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Décomposer en éléments simples</strong> pour identifier rapidement les asymptotes.</div>
                   <div class="astuce-box">💡 <strong>Utiliser la parité</strong> pour réduire le domaine d'étude.</div>
                   <div class="astuce-box">💡 <strong>Pour les branches infinies</strong>, comparer $f(x)$ avec $ax+b$ ou $\\dfrac{f(x)}{x}$.</div>
                   <div class="astuce-box">💡 <strong>Pour les points d'inflexion</strong>, étudier le signe de $f''$.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Oublier d'exclure les valeurs interdites</strong> du domaine.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre asymptote verticale et trou</strong> dans le domaine.</div>
                   <div class="erreur-box">⚠️ <strong>Ne pas simplifier</strong> les expressions avant de dériver.</div>
                   <div class="erreur-box">⚠️ <strong>Oublier de justifier la bijection</strong> avant de parler de réciproque.</div>
                   <div class="erreur-box">⚠️ <strong>Confondre axe de symétrie $x=a$</strong> et centre de symétrie $(a,b)$.</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: 'La courbe de $f$ admet pour asymptote verticale la droite :', options: ['$x=2$', '$x=-0.5$', '$x=-5$'], correct: 1 },
                { type: 'qcm', text: 'La courbe de $f$ admet pour asymptote horizontale la droite :', options: ['$y=2$', '$y=-0.5$', '$y=-1$'], correct: 1 },
                { type: 'qcm', text: 'La courbe de $f$ et l\'axe des abscisses ont :', options: ['un point', 'deux points', 'trois points'], correct: 0 },
                { type: 'vf', text: 'Si $f\'\'(a)=0$ alors $a$ est un point d\'inflexion.', correct: false },
                { type: 'vf', text: 'Si $f\'$ décroît puis croît en $a$, alors $a$ est un point d\'inflexion.', correct: true },
                { type: 'vf', text: 'Si $f\'$ est croissante sur $]a-h,a+h[$, alors $f$ est croissante.', correct: false },
                { type: 'vf', text: 'Si $f\'\'$ est négative sur $]a-h,a+h[$, alors $f$ est décroissante.', correct: false }
            ]
        },
        exercices: []  // <-- Tableau vide, sera rempli par les fichiers part1.js, part2.js, etc.
    });

    console.log("Chapitre 5 (squelette) chargé avec succès.");
})();