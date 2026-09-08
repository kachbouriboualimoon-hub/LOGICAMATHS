// data/chapitre7_base.js – Squelette du chapitre 7 : Intégrales
(function() {
    if (typeof data === 'undefined' || !Array.isArray(data.chapitres)) {
        console.error("data.chapitres n'est pas défini. Assurez-vous que init.js est chargé.");
        return;
    }

    if (data.chapitres.some(c => c.id === 7)) {
        console.log("Chapitre 7 déjà chargé.");
        return;
    }

    data.chapitres.push({
        id: 7,
        titre: "Intégrales",
        resume: "Définition, propriétés, calculs d'intégrales, intégration par parties, inégalités, valeur moyenne, volumes, fonctions définies par une intégrale.",
        rappel: `<p><strong>Définition :</strong> Soit $f$ continue sur $[a,b]$ et $F$ une primitive de $f$. Alors :</p>
                 $$ \\int_a^b f(x) dx = F(b) - F(a) = [F(x)]_a^b. $$
                 <p><strong>Propriétés :</strong></p>
                 <ul>
                   <li>$\\int_a^a f(x) dx = 0$</li>
                   <li>$\\int_a^b f(x) dx = -\\int_b^a f(x) dx$</li>
                   <li>$\\int_a^c f(x) dx + \\int_c^b f(x) dx = \\int_a^b f(x) dx$ (Relation de Chasles)</li>
                   <li>$\\int_a^b (\\alpha f + \\beta g)(x) dx = \\alpha\\int_a^b f(x) dx + \\beta\\int_a^b g(x) dx$</li>
                 </ul>
                 <p><strong>Intégration par parties :</strong></p>
                 $$ \\int_a^b u(x)v'(x) dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) dx. $$
                 <p><strong>Inégalités :</strong></p>
                 <ul>
                   <li>Si $f \\le g$ sur $[a,b]$, alors $\\int_a^b f \\le \\int_a^b g$.</li>
                   <li>$\\left|\\int_a^b f(x) dx\\right| \\le \\int_a^b |f(x)| dx$.</li>
                   <li>Inégalité de la moyenne : si $m \\le f(x) \\le M$ sur $[a,b]$, alors $m(b-a) \\le \\int_a^b f(x) dx \\le M(b-a)$.</li>
                 </ul>`,
        theoremes: `<div class="theoreme-block"><strong>Théorème 1 (Positivité) :</strong> Si $f \\ge 0$ sur $[a,b]$, alors $\\int_a^b f(x) dx \\ge 0$.</div>
                    <div class="theoreme-block"><strong>Théorème 2 (Comparaison) :</strong> Si $f \\le g$ sur $[a,b]$, alors $\\int_a^b f \\le \\int_a^b g$.</div>
                    <div class="theoreme-block"><strong>Théorème 3 (Inégalité de la moyenne) :</strong> Si $m \\le f(x) \\le M$ sur $[a,b]$, alors $m(b-a) \\le \\int_a^b f(x) dx \\le M(b-a)$.</div>
                    <div class="theoreme-block"><strong>Théorème 4 (Intégration par parties) :</strong> $\\int_a^b u v' = [uv]_a^b - \\int_a^b u' v$.</div>
                    <div class="theoreme-block"><strong>Théorème 5 (Fonction définie par une intégrale) :</strong> Si $f$ est continue sur $I$, alors $F(x)=\\int_a^x f(t) dt$ est dérivable sur $I$ et $F'(x)=f(x)$.</div>`,
        methodes: `<p><strong>•</strong> Pour calculer une intégrale, trouver une primitive et appliquer la formule $[F(x)]_a^b$.</p>
                    <p><strong>•</strong> Pour l'intégration par parties, choisir $u$ et $v'$ astucieusement (souvent $u$ polynomiale).</p>
                    <p><strong>•</strong> Pour les inégalités, encadrer la fonction avant d'intégrer.</p>
                    <p><strong>•</strong> Pour les volumes de révolution : $V = \\pi\\int_a^b f(x)^2 dx$.</p>
                    <p><strong>•</strong> Pour une fonction définie par une intégrale, dériver en utilisant $F'(x)=f(x)$.</p>`,
        astuces: `<div class="astuce-box">💡 <strong>Vérifier la continuité</strong> avant d'affirmer l'existence de l'intégrale.</div>
                   <div class="astuce-box">💡 <strong>Utiliser la parité</strong> : si $f$ est impaire, $\\int_{-a}^a f=0$ ; si $f$ est paire, $\\int_{-a}^a f = 2\\int_0^a f$.</div>
                   <div class="astuce-box">💡 <strong>Pour les volumes,</strong> bien identifier l'axe de rotation.</div>
                   <div class="astuce-box">💡 <strong>Pour les inégalités,</strong> intégrer des inégalités valables sur tout l'intervalle.</div>`,
        erreurs: `<div class="erreur-box">⚠️ <strong>Oublier la constante</strong> dans les primitives (elle disparaît dans $F(b)-F(a)$).</div>
                   <div class="erreur-box">⚠️ <strong>Confondre $\\int_a^b f$ et $\\int_b^a f$</strong> (changement de signe).</div>
                   <div class="erreur-box">⚠️ <strong>Appliquer l'intégration par parties</strong> sans vérifier la continuité des dérivées.</div>
                   <div class="erreur-box">⚠️ <strong>Oublier le facteur $\\pi$</strong> dans les volumes de révolution.</div>`,
        quiz: {
            questions: [
                { type: 'qcm', text: '$\\int_0^1 x^2 dx$ est égal à :', options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$1$'], correct: 0 },
                { type: 'qcm', text: '$\\int_0^\\pi \\sin x dx$ est égal à :', options: ['$0$', '$1$', '$2$'], correct: 2 },
                { type: 'qcm', text: 'Si $f$ est impaire, $\\int_{-a}^a f(x) dx$ est égal à :', options: ['$0$', '$2\\int_0^a f$', '$-2\\int_0^a f$'], correct: 0 },
                { type: 'vf', text: '$\\int_a^b f(x) dx = F(b)-F(a)$ où $F$ est une primitive de $f$.', correct: true },
                { type: 'vf', text: 'Si $f \\ge 0$ sur $[a,b]$, alors $\\int_a^b f \\ge 0$.', correct: true },
                { type: 'vf', text: '$\\int_a^b f(x) dx = \\int_b^a f(x) dx$.', correct: false },
                { type: 'vf', text: 'Le volume d\'un solide de révolution autour de $(Ox)$ est $V = \\int_a^b \\pi f(x)^2 dx$.', correct: true }
            ]
        },
        exercices: []
    });

    console.log("Chapitre 7 (squelette) chargé avec succès.");
})();