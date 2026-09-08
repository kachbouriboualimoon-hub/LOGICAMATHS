// data/resume.js – Résumés des chapitres d'analyse
// Extrait de "Résumé analyse.pdf" – conforme au programme tunisien 4ème Sciences Expérimentales
(function() {
    if (typeof data === 'undefined') {
        window.data = { chapitres: [] };
    }

    // Ajout des résumés sans dupliquer les chapitres existants
    const resumes = [
        // ======================================================================
        // CHAPITRE 1 : Continuité et limites
        // ======================================================================
        {
            id: 1,
            titre: "Continuité et limites",
            resume: `<p><strong>Continuité :</strong> Une fonction $f$ est continue en $a$ si $\\lim_{x\\to a} f(x) = f(a)$.</p>
                     <ul>
                       <li><strong>Continuité à gauche :</strong> $\\lim_{x\\to a^-} f(x) = f(a)$.</li>
                       <li><strong>Continuité à droite :</strong> $\\lim_{x\\to a^+} f(x) = f(a)$.</li>
                       <li>Une fonction est continue en $a$ si et seulement si elle est continue à gauche et à droite en $a$.</li>
                     </ul>
                     <p><strong>Fonctions continues de référence :</strong></p>
                     <ul>
                       <li>Polynômes : continues sur $\\mathbb{R}$.</li>
                       <li>Fonctions rationnelles : continues sur leur domaine de définition.</li>
                       <li>$x\\mapsto \\sqrt{x}$ : continue sur $[0,+\\infty[$.</li>
                       <li>$x\\mapsto \\cos x$ et $x\\mapsto \\sin x$ : continues sur $\\mathbb{R}$.</li>
                     </ul>
                     <p><strong>Opérations :</strong> Si $f$ et $g$ sont continues sur $I$, alors $f+g$, $f-g$, $fg$, $|f|$, $kf$ (si $k\\in\\mathbb{R}$) sont continues sur $I$.</p>
                     <p><strong>Composition :</strong> Si $f$ est continue sur $I$, $g$ continue sur $J$ et $f(I)\\subseteq J$, alors $g\\circ f$ est continue sur $I$.</p>
                     <p><strong>Prolongement par continuité :</strong> Si $\\lim_{x\\to a} f(x) = \\ell$ (fini), alors $f$ est prolongeable par continuité en $a$ par $g(a)=\\ell$.</p>
                     <p><strong>Théorème des valeurs intermédiaires :</strong> Si $f$ est continue sur $[a,b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x)=k$ admet au moins une solution dans $[a,b]$.</p>
                     <p><strong>Image d'un intervalle :</strong> L'image d'un intervalle par une fonction continue est un intervalle. L'image d'un intervalle fermé borné est un intervalle fermé borné.</p>`,
            theoremes: `<div class="theoreme-block"><strong>TVI :</strong> Si $f$ continue sur $[a,b]$ et $f(a)f(b)<0$, alors $f(x)=0$ admet au moins une solution dans $[a,b]$.</div>
                         <div class="theoreme-block"><strong>Continuité et signe :</strong> Si $f$ continue sur $I$ et ne s'annule pas, alors $f$ garde un signe constant sur $I$.</div>`,
            methodes: `<p><strong>•</strong> Pour montrer la continuité en $a$, vérifier $\\lim_{x\\to a} f(x) = f(a)$.</p>
                        <p><strong>•</strong> Pour les fonctions définies par morceaux, étudier la continuité à gauche et à droite au point de raccord.</p>`,
            astuces: `<div class="astuce-box">💡 Pour lever une indétermination, factoriser ou utiliser la quantité conjuguée.</div>`,
            erreurs: `<div class="erreur-box">⚠️ Ne pas confondre continuité et dérivabilité. Une fonction peut être continue sans être dérivable.</div>`
        },
        // ======================================================================
        // CHAPITRE 2 : Suites réelles
        // ======================================================================
        {
            id: 2,
            titre: "Suites réelles",
            resume: `<p><strong>Définition :</strong> Une suite réelle est une fonction de $\\mathbb{N}$ dans $\\mathbb{R}$.</p>
                     <p><strong>Suites arithmétiques :</strong> $u_{n+1} = u_n + r$. $u_n = u_0 + nr$.</p>
                     <p><strong>Suites géométriques :</strong> $u_{n+1} = q u_n$. $u_n = u_0 q^n$.</p>
                     <p><strong>Convergence :</strong> $(u_n)$ converge vers $\\ell$ si $\\lim_{n\\to+\\infty} u_n = \\ell$.</p>
                     <p><strong>Suites monotones :</strong></p>
                     <ul>
                       <li>Croissante et majorée → convergente.</li>
                       <li>Décroissante et minorée → convergente.</li>
                     </ul>
                     <p><strong>Suites adjacentes :</strong> Deux suites $(u_n)$ et $(v_n)$ sont adjacentes si $(u_n)$ est croissante, $(v_n)$ est décroissante, $u_n \\le v_n$ et $\\lim (v_n-u_n)=0$. Elles convergent vers la même limite.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Théorème de comparaison :</strong> Si $u_n \\le v_n$ et $\\lim u_n = +\\infty$, alors $\\lim v_n = +\\infty$.</div>
                         <div class="theoreme-block"><strong>Théorème des gendarmes :</strong> Si $v_n \\le u_n \\le w_n$ et $\\lim v_n = \\lim w_n = \\ell$, alors $\\lim u_n = \\ell$.</div>`,
            methodes: `<p><strong>•</strong> Pour étudier une suite récurrente $u_{n+1}=f(u_n)$, étudier $f$ et chercher les points fixes.</p>`,
            astuces: `<div class="astuce-box">💡 Pour montrer qu'une suite est croissante, montrer $u_{n+1}-u_n \\ge 0$.</div>`
        },
        // ======================================================================
        // CHAPITRE 3 : Dérivabilité
        // ======================================================================
        {
            id: 3,
            titre: "Dérivabilité",
            resume: `<p><strong>Dérivée en un point :</strong> $f'(a) = \\lim_{x\\to a} \\dfrac{f(x)-f(a)}{x-a}$.</p>
                     <p><strong>Tangente :</strong> $y = f'(a)(x-a) + f(a)$.</p>
                     <p><strong>Dérivées usuelles :</strong></p>
                     <ul>
                       <li>$(x^n)' = nx^{n-1}$</li>
                       <li>$(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$</li>
                       <li>$(\\ln x)' = \\dfrac{1}{x}$, $(e^x)' = e^x$</li>
                     </ul>
                     <p><strong>Opérations :</strong> $(uv)' = u'v+uv'$, $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v-uv'}{v^2}$.</p>
                     <p><strong>Théorème de Rolle :</strong> Si $f$ continue sur $[a,b]$, dérivable sur $]a,b[$ et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que $f'(c)=0$.</p>
                     <p><strong>Accroissements finis :</strong> Si $f$ continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c\\in]a,b[$ tel que $f(b)-f(a)=f'(c)(b-a)$.</p>
                     <p><strong>Inégalité des accroissements finis :</strong> Si $m \\le f'(x) \\le M$ sur $]a,b[$, alors $m(b-a) \\le f(b)-f(a) \\le M(b-a)$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Dérivée et variations :</strong> Si $f'(x)>0$ sur $I$, alors $f$ est strictement croissante sur $I$.</div>
                         <div class="theoreme-block"><strong>Extremum :</strong> Si $f$ admet un extremum local en $a$ et est dérivable, alors $f'(a)=0$.</div>`,
            methodes: `<p><strong>•</strong> Pour montrer qu'une fonction est dérivable en $a$, calculer le taux d'accroissement.</p>
                        <p><strong>•</strong> Pour les fonctions définies par morceaux, étudier la dérivabilité à gauche et à droite.</p>`,
            astuces: `<div class="astuce-box">💡 Approximation affine : $f(a+h) \\approx f(a) + hf'(a)$ pour $h$ voisin de $0$.</div>`
        },
        // ======================================================================
        // CHAPITRE 4 : Fonctions réciproques
        // ======================================================================
        {
            id: 4,
            titre: "Fonctions réciproques",
            resume: `<p><strong>Bijection :</strong> $f$ réalise une bijection de $I$ sur $f(I)$ si pour tout $y\\in f(I)$, l'équation $f(x)=y$ a une unique solution dans $I$.</p>
                     <p><strong>Fonction réciproque :</strong> $f^{-1}$ est la fonction définie sur $f(I)$ qui à $y$ associe l'unique $x\\in I$ tel que $f(x)=y$.</p>
                     <p><strong>Graphique :</strong> Les courbes de $f$ et $f^{-1}$ sont symétriques par rapport à la droite $\\Delta:y=x$.</p>
                     <p><strong>Continuité :</strong> Si $f$ est continue et strictement monotone sur $I$, alors $f^{-1}$ est continue et strictement monotone sur $f(I)$.</p>
                     <p><strong>Dérivée :</strong> Si $f$ est dérivable en $a$ et $f'(a)\\neq0$, alors $(f^{-1})'(f(a)) = \\dfrac{1}{f'(a)}$.</p>
                     <p><strong>Racine $n$-ième :</strong> $x\\mapsto x^n$ est bijective de $\\mathbb{R}_+$ sur $\\mathbb{R}_+$. Sa réciproque est $x\\mapsto \\sqrt[n]{x}$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Dérivée de la réciproque :</strong> $(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))}$.</div>`,
            methodes: `<p><strong>•</strong> Pour déterminer $f^{-1}$, résoudre $y=f(x)$ en fonction de $x$.</p>`,
            astuces: `<div class="astuce-box">💡 La stricte monotonie assure l'existence de la bijection.</div>`
        },
        // ======================================================================
        // CHAPITRE 5 : Études de fonctions
        // ======================================================================
        {
            id: 5,
            titre: "Études de fonctions",
            resume: `<p><strong>Branches infinies :</strong></p>
                     <ul>
                       <li>Asymptote verticale : $x=a$ si $\\lim_{x\\to a} f(x) = \\pm\\infty$.</li>
                       <li>Asymptote horizontale : $y=b$ si $\\lim_{x\\to\\pm\\infty} f(x) = b$.</li>
                       <li>Asymptote oblique : $y=ax+b$ si $\\lim_{x\\to\\pm\\infty} (f(x)-(ax+b))=0$.</li>
                       <li>Branche parabolique direction $(O,\\vec{i})$ : $\\lim f(x)/x = 0$.</li>
                       <li>Branche parabolique direction $(O,\\vec{j})$ : $\\lim f(x)/x = \\pm\\infty$.</li>
                     </ul>
                     <p><strong>Symétries :</strong></p>
                     <ul>
                       <li>Axe $x=a$ : $f(2a-x)=f(x)$.</li>
                       <li>Centre $(a,b)$ : $f(2a-x)=2b-f(x)$.</li>
                     </ul>
                     <p><strong>Périodicité :</strong> $f$ est périodique de période $T$ si $f(x+T)=f(x)$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Bijection :</strong> Si $f$ est continue et strictement monotone sur $I$, alors $f$ est bijective de $I$ sur $f(I)$.</div>`,
            methodes: `<p><strong>•</strong> Pour étudier une fonction : domaine, parité, limites, asymptotes, dérivée, tableau de variations, tracé.</p>`,
            astuces: `<div class="astuce-box">💡 Utiliser la parité pour réduire le domaine d'étude.</div>`
        },
        // ======================================================================
        // CHAPITRE 6 : Primitives
        // ======================================================================
        {
            id: 6,
            titre: "Primitives",
            resume: `<p><strong>Définition :</strong> $F$ est une primitive de $f$ sur $I$ si $F'=f$ sur $I$.</p>
                     <p><strong>Existence :</strong> Toute fonction continue sur $I$ admet une primitive sur $I$.</p>
                     <p><strong>Unicité :</strong> Si $F$ et $G$ sont deux primitives de $f$ sur $I$, alors $F-G$ est constante sur $I$.</p>
                     <p><strong>Primitives usuelles :</strong></p>
                     <ul>
                       <li>$\\int x^n dx = \\dfrac{x^{n+1}}{n+1} + C$</li>
                       <li>$\\int \\dfrac{1}{x} dx = \\ln|x| + C$</li>
                       <li>$\\int \\sin x dx = -\\cos x + C$</li>
                       <li>$\\int \\cos x dx = \\sin x + C$</li>
                     </ul>
                     <p><strong>Linéarité :</strong> $\\int (\\alpha f + \\beta g) dx = \\alpha\\int f dx + \\beta\\int g dx$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Primitive de $u'u^n$ :</strong> $\\dfrac{u^{n+1}}{n+1} + C$.</div>
                         <div class="theoreme-block"><strong>Primitive de $\\dfrac{u'}{u}$ :</strong> $\\ln|u| + C$.</div>`,
            methodes: `<p><strong>•</strong> Pour trouver une primitive, reconnaître la forme $u'u^n$, $\\dfrac{u'}{u}$, ou $u'e^u$.</p>`,
            astuces: `<div class="astuce-box">💡 Vérifier la primitive en dérivant le résultat.</div>`
        },
        // ======================================================================
        // CHAPITRE 7 : Intégrales
        // ======================================================================
        {
            id: 7,
            titre: "Intégrales",
            resume: `<p><strong>Définition :</strong> $\\int_a^b f(x) dx = F(b)-F(a)$ où $F$ est une primitive de $f$.</p>
                     <p><strong>Propriétés :</strong></p>
                     <ul>
                       <li>$\\int_a^a f = 0$, $\\int_a^b f = -\\int_b^a f$</li>
                       <li>Relation de Chasles : $\\int_a^c f + \\int_c^b f = \\int_a^b f$</li>
                       <li>Linéarité : $\\int (\\alpha f + \\beta g) = \\alpha\\int f + \\beta\\int g$</li>
                     </ul>
                     <p><strong>Inégalités :</strong></p>
                     <ul>
                       <li>Si $f \\le g$ sur $[a,b]$, alors $\\int_a^b f \\le \\int_a^b g$.</li>
                       <li>$\\left|\\int_a^b f\\right| \\le \\int_a^b |f|$.</li>
                       <li>Inégalité de la moyenne : $m(b-a) \\le \\int_a^b f \\le M(b-a)$.</li>
                     </ul>
                     <p><strong>Intégration par parties :</strong> $\\int_a^b u v' = [uv]_a^b - \\int_a^b u'v$.</p>
                     <p><strong>Volume de révolution :</strong> $V = \\pi\\int_a^b f(x)^2 dx$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Positivité :</strong> Si $f \\ge 0$ sur $[a,b]$, alors $\\int_a^b f \\ge 0$.</div>
                         <div class="theoreme-block"><strong>Fonction définie par une intégrale :</strong> Si $F(x)=\\int_a^x f(t)dt$, alors $F$ est dérivable et $F'=f$.</div>`,
            methodes: `<p><strong>•</strong> Pour calculer une intégrale, trouver une primitive.</p>
                        <p><strong>•</strong> Pour les aires, utiliser $\\int_a^b |f(x)-g(x)| dx$.</p>`,
            astuces: `<div class="astuce-box">💡 Utiliser la parité pour simplifier : $\\int_{-a}^a f$ est $0$ si $f$ impaire, $2\\int_0^a f$ si $f$ paire.</div>`
        },
        // ======================================================================
        // CHAPITRE 8 : Logarithme népérien
        // ======================================================================
        {
            id: 8,
            titre: "Fonction logarithme népérien",
            resume: `<p><strong>Définition :</strong> $\\ln x = \\displaystyle\\int_1^x \\dfrac{dt}{t}$ pour $x>0$.</p>
                     <p><strong>Propriétés :</strong></p>
                     <ul>
                       <li>$\\ln(ab) = \\ln a + \\ln b$</li>
                       <li>$\\ln\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$</li>
                       <li>$\\ln(a^n) = n\\ln a$</li>
                       <li>$\\ln 1 = 0$, $\\ln e = 1$</li>
                     </ul>
                     <p><strong>Limites :</strong></p>
                     <ul>
                       <li>$\\lim_{x\\to0^+} \\ln x = -\\infty$</li>
                       <li>$\\lim_{x\\to+\\infty} \\ln x = +\\infty$</li>
                       <li>$\\lim_{x\\to0^+} x\\ln x = 0$</li>
                       <li>$\\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x} = 0$</li>
                     </ul>
                     <p><strong>Dérivée :</strong> $(\\ln x)' = \\dfrac{1}{x}$. Si $u>0$, $(\\ln u)' = \\dfrac{u'}{u}$.</p>
                     <p><strong>Primitive :</strong> $\\int \\ln x dx = x\\ln x - x + C$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Croissance :</strong> $\\ln$ est strictement croissante sur $\\mathbb{R}_+^*$.</div>`,
            methodes: `<p><strong>•</strong> Pour résoudre $\\ln f(x) = \\ln g(x)$, utiliser l'injectivité : $f(x)=g(x)$.</p>`,
            astuces: `<div class="astuce-box">💡 $\\ln$ préserve l'ordre : $a<b \\iff \\ln a < \\ln b$.</div>`
        },
        // ======================================================================
        // CHAPITRE 9 : Fonction exponentielle
        // ======================================================================
        {
            id: 9,
            titre: "Fonction exponentielle",
            resume: `<p><strong>Définition :</strong> $e^x$ est la réciproque de $\\ln$.</p>
                     <p><strong>Propriétés :</strong></p>
                     <ul>
                       <li>$e^{a+b} = e^a \\times e^b$</li>
                       <li>$e^{a-b} = \\dfrac{e^a}{e^b}$</li>
                       <li>$(e^a)^b = e^{ab}$</li>
                       <li>$e^0 = 1$, $e^1 = e$</li>
                     </ul>
                     <p><strong>Limites :</strong></p>
                     <ul>
                       <li>$\\lim_{x\\to-\\infty} e^x = 0$</li>
                       <li>$\\lim_{x\\to+\\infty} e^x = +\\infty$</li>
                       <li>$\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty$</li>
                       <li>$\\lim_{x\\to-\\infty} x^n e^x = 0$</li>
                     </ul>
                     <p><strong>Dérivée :</strong> $(e^x)' = e^x$. Si $u$ est dérivable, $(e^u)' = u'e^u$.</p>
                     <p><strong>Primitive :</strong> $\\int e^x dx = e^x + C$.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Croissance :</strong> $e^x$ est strictement croissante sur $\\mathbb{R}$.</div>`,
            methodes: `<p><strong>•</strong> Pour résoudre $e^{u(x)}=e^{v(x)}$, utiliser l'injectivité : $u(x)=v(x)$.</p>`,
            astuces: `<div class="astuce-box">💡 L'exponentielle est toujours strictement positive.</div>`
        },
        // ======================================================================
        // CHAPITRE 10 : Équations différentielles
        // ======================================================================
        {
            id: 10,
            titre: "Équations différentielles",
            resume: `<p><strong>Type $y'=ay$ :</strong></p>
                     <ul>
                       <li>Solutions : $y = Ce^{ax}$.</li>
                       <li>Solution avec condition initiale : $y = y_0 e^{a(x-x_0)}$.</li>
                     </ul>
                     <p><strong>Type $y'=ay+b$ ($a\\neq0$) :</strong></p>
                     <ul>
                       <li>Solutions : $y = Ce^{ax} - \\dfrac{b}{a}$.</li>
                       <li>Solution avec condition initiale : $y = \\left(y_0 + \\dfrac{b}{a}\\right)e^{a(x-x_0)} - \\dfrac{b}{a}$.</li>
                     </ul>
                     <p><strong>Type $y''+\\omega^2 y=0$ ($\\omega\\neq0$) :</strong></p>
                     <ul>
                       <li>Solutions : $y = A\\sin(\\omega x) + B\\cos(\\omega x)$.</li>
                     </ul>
                     <p><strong>Type $y'' = ay'$ :</strong> Poser $z=y'$, résoudre $z'=az$, puis intégrer.</p>`,
            theoremes: `<div class="theoreme-block"><strong>Unicité :</strong> Une équation différentielle du premier ordre avec une condition initiale admet une unique solution.</div>`,
            methodes: `<p><strong>•</strong> Pour $y''+\\omega^2y=0$, identifier $\\omega$ et écrire la solution générale.</p>`,
            astuces: `<div class="astuce-box">💡 Vérifier la solution en la remplaçant dans l'équation.</div>`
        }
    ];

    // Fusionner avec les chapitres existants ou ajouter
    resumes.forEach(r => {
        const existant = data.chapitres.find(c => c.id === r.id);
        if (!existant) {
            data.chapitres.push({
                id: r.id,
                titre: r.titre,
                resume: r.resume,
                theoremes: r.theoremes || '',
                methodes: r.methodes || '',
                astuces: r.astuces || '',
                erreurs: r.erreurs || ''
            });
        } else {
            // Mettre à jour le résumé existant
            existant.resume = r.resume;
            if (r.theoremes) existant.theoremes = r.theoremes;
            if (r.methodes) existant.methodes = r.methodes;
            if (r.astuces) existant.astuces = r.astuces;
            if (r.erreurs) existant.erreurs = r.erreurs;
        }
    });

    console.log("Résumés des chapitres chargés avec succès.");
})();