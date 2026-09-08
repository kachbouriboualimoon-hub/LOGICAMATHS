// fiche.js – Fiche de synthèse complète
// ================================================================

window.genererFicheHTML = function() {
    // On force l'affichage des formules en mode display ($$...$$)
    // pour une meilleure lisibilité.
    let html = `
        <div class="fiches-tabs">
            <button class="fiche-tab active" data-tab="vecteurs" onclick="switchFicheTab('vecteurs')">📐 Vecteurs</button>
            <button class="fiche-tab" data-tab="scalaire" onclick="switchFicheTab('scalaire')">📏 Produit scalaire</button>
            <button class="fiche-tab" data-tab="vectoriel" onclick="switchFicheTab('vectoriel')">✖ Produit vectoriel</button>
            <button class="fiche-tab" data-tab="determinant" onclick="switchFicheTab('determinant')">📊 Déterminant</button>
            <button class="fiche-tab" data-tab="equations" onclick="switchFicheTab('equations')">📈 Droites & Plans</button>
            <button class="fiche-tab" data-tab="sphere" onclick="switchFicheTab('sphere')">⚪ Sphère</button>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 1 : VECTEURS                                          -->
        <!-- ============================================================ -->
        <div id="fiche-tab-vecteurs" class="fiche-tab-content active">
            <div class="fiche-section">
                <div class="fiche-title">Opérations sur les vecteurs</div>
                <div class="fiche-content">
                    <p><strong>Égalité :</strong> $$\\overrightarrow{AB} = \\overrightarrow{DC} \\iff$$ les segments $$[AC]$$ et $$[BD]$$ ont même milieu.</p>
                    <p><strong>Relation de Chasles :</strong> $$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$$.</p>
                    <p><strong>Opposé :</strong> $$-\\overrightarrow{AB} = \\overrightarrow{BA}$$.</p>
                    <p><strong>Multiplication par un réel :</strong> $$\\alpha\\overrightarrow{AB}$$ est le vecteur de même direction, de longueur $$|\\alpha|\\,AB$$, et de sens : celui de $$\\overrightarrow{AB}$$ si $$\\alpha>0$$, opposé si $$\\alpha<0$$.</p>
                    <p><strong>Colinéarité :</strong> $$\\vec{u}$$ et $$\\vec{v}$$ sont colinéaires ssi $$\\exists k\\in\\mathbb{R},\\;\\vec{u}=k\\vec{v}$$.</p>
                    <p><strong>Base de l'espace :</strong> Trois vecteurs non coplanaires forment une base.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Coordonnées dans une base</div>
                <div class="fiche-content">
                    <p>Soit $$(\\vec{i},\\vec{j},\\vec{k})$$ une base. Tout vecteur $$\\vec{u}$$ s'écrit de manière unique :</p>
                    <p style="text-align:center;">$$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$, noté $$\\vec{u}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$$.</p>
                    <p><strong>Milieu :</strong> Si $$M$$ milieu de $$[AB]$$, alors $$M\\left(\\frac{x_A+x_B}{2},\\frac{y_A+y_B}{2},\\frac{z_A+z_B}{2}\\right)$$.</p>
                    <p><strong>Combinaison linéaire :</strong> $$\\vec{w} = \\alpha\\vec{u}+\\beta\\vec{v}$$ si $$\\vec{w}$$ est combinaison linéaire de $$\\vec{u}$$ et $$\\vec{v}$$.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Familles libres / liées</div>
                <div class="fiche-content">
                    <p>Une famille de vecteurs est <strong>libre</strong> si aucun n'est combinaison linéaire des autres. Dans l'espace :</p>
                    <ul>
                        <li>2 vecteurs sont libres s'ils ne sont pas colinéaires.</li>
                        <li>3 vecteurs sont libres s'ils ne sont pas coplanaires (forment une base).</li>
                    </ul>
                    <p>Une famille est <strong>liée</strong> dans le cas contraire.</p>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 2 : PRODUIT SCALAIRE                                  -->
        <!-- ============================================================ -->
        <div id="fiche-tab-scalaire" class="fiche-tab-content">
            <div class="fiche-section">
                <div class="fiche-title">Définition et propriétés</div>
                <div class="fiche-content">
                    <p><strong>Définition :</strong> $$\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\,\\cos\\theta$$, où $$\\theta$$ est l'angle entre les vecteurs.</p>
                    <p><strong>En coordonnées (base orthonormée) :</strong> $$\\vec{u}\\cdot\\vec{v} = xx' + yy' + zz'$$.</p>
                    <p><strong>Norme :</strong> $$\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$$.</p>
                    <p><strong>Propriétés :</strong></p>
                    <ul>
                        <li>Commutativité : $$\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}$$</li>
                        <li>Bilinéarité : $$(\\alpha\\vec{u}+\\beta\\vec{v})\\cdot\\vec{w} = \\alpha(\\vec{u}\\cdot\\vec{w}) + \\beta(\\vec{v}\\cdot\\vec{w})$$</li>
                        <li>Orthogonalité : $$\\vec{u}\\cdot\\vec{v}=0 \\iff \\vec{u}\\perp\\vec{v}$$</li>
                    </ul>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Distance et angle</div>
                <div class="fiche-content">
                    <p><strong>Distance entre deux points :</strong></p>
                    <p style="text-align:center;">$$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$$.</p>
                    <p><strong>Cosinus d'un angle :</strong> $$\\cos\\widehat{ABC} = \\dfrac{\\overrightarrow{BA}\\cdot\\overrightarrow{BC}}{BA\\cdot BC}$$.</p>
                    <p><strong>Projeté orthogonal :</strong> Soit $$H$$ projeté de $$B$$ sur $$(OA)$$, alors $$\\overrightarrow{OA}\\cdot\\overrightarrow{OB} = \\overrightarrow{OA}\\cdot\\overrightarrow{OH}$$.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Vecteur normal à un plan</div>
                <div class="fiche-content">
                    <p>Un vecteur $$\\vec{n}$$ non nul est normal à un plan $$\\mathcal{P}$$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $$\\mathcal{P}$$.</p>
                    <p>Si $$\\mathcal{P}: ax+by+cz+d=0$$, alors $$\\vec{n}(a,b,c)$$ est normal à $$\\mathcal{P}$$.</p>
                    <p>Deux plans sont perpendiculaires ssi leurs vecteurs normaux sont orthogonaux.</p>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 3 : PRODUIT VECTORIEL                                 -->
        <!-- ============================================================ -->
        <div id="fiche-tab-vectoriel" class="fiche-tab-content">
            <div class="fiche-section">
                <div class="fiche-title">Définition et propriétés</div>
                <div class="fiche-content">
                    <p><strong>Définition :</strong> $$\\vec{u}\\wedge\\vec{v}$$ est le vecteur :</p>
                    <ul>
                        <li>orthogonal à $$\\vec{u}$$ et $$\\vec{v}$$,</li>
                        <li>de norme $$\\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta$$,</li>
                        <li>tel que $$(\\vec{u},\\vec{v},\\vec{u}\\wedge\\vec{v})$$ soit directe.</li>
                    </ul>
                    <p><strong>En coordonnées (base orthonormée directe) :</strong></p>
                    <p style="text-align:center;">
                        $$\\vec{u}\\wedge\\vec{v} = \\begin{pmatrix}
                            yz' - zy' \\\\
                            zx' - xz' \\\\
                            xy' - yx'
                        \\end{pmatrix}$$.
                    </p>
                    <p><strong>Propriétés :</strong></p>
                    <ul>
                        <li>Anticommutativité : $$\\vec{u}\\wedge\\vec{v} = -\\vec{v}\\wedge\\vec{u}$$</li>
                        <li>Bilinéarité : $$(\\alpha\\vec{u}+\\beta\\vec{v})\\wedge\\vec{w} = \\alpha(\\vec{u}\\wedge\\vec{w}) + \\beta(\\vec{v}\\wedge\\vec{w})$$</li>
                        <li>$$\\vec{u}\\wedge\\vec{v} = \\vec{0} \\iff \\vec{u}$$ et $$\\vec{v}$$ colinéaires.</li>
                    </ul>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Aires et distances</div>
                <div class="fiche-content">
                    <p><strong>Aire d'un parallélogramme :</strong> $$\\mathcal{A} = \\|\\overrightarrow{AB}\\wedge\\overrightarrow{AD}\\|$$.</p>
                    <p><strong>Aire d'un triangle :</strong> $$\\mathcal{A} = \\dfrac{1}{2}\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$$.</p>
                    <p><strong>Distance d'un point à une droite :</strong></p>
                    <p style="text-align:center;">$$d(M,\\mathcal{D}) = \\dfrac{\\|\\overrightarrow{AM}\\wedge\\vec{u}\\|}{\\|\\vec{u}\\|}$$, où $$\\vec{u}$$ est vecteur directeur de $$\\mathcal{D}$$.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Vecteur normal à un plan</div>
                <div class="fiche-content">
                    <p>Si $$A,B,C$$ non alignés, alors $$\\vec{n} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC}$$ est normal au plan $$(ABC)$$.</p>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 4 : DÉTERMINANT ET VOLUMES                           -->
        <!-- ============================================================ -->
        <div id="fiche-tab-determinant" class="fiche-tab-content">
            <div class="fiche-section">
                <div class="fiche-title">Déterminant de trois vecteurs</div>
                <div class="fiche-content">
                    <p>Dans une base $$(\\vec{i},\\vec{j},\\vec{k})$$, si $$\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$$, $$\\vec{v}\\begin{pmatrix}a'\\\\b'\\\\c'\\end{pmatrix}$$, $$\\vec{w}\\begin{pmatrix}a''\\\\b''\\\\c''\\end{pmatrix}$$, alors :</p>
                    <p style="text-align:center;">
                        $$\\det(\\vec{u},\\vec{v},\\vec{w}) = 
                        \\begin{vmatrix}
                            a & a' & a'' \\\\
                            b & b' & b'' \\\\
                            c & c' & c''
                        \\end{vmatrix}
                        = a(b'c''-c'b'') - b(a'c''-c'a'') + c(a'b''-b'a'')$$.
                    </p>
                    <p><strong>Propriété :</strong> Les trois vecteurs sont coplanaires ssi leur déterminant est nul.</p>
                    <p><strong>Base :</strong> $$(\\vec{u},\\vec{v},\\vec{w})$$ est une base ssi $$\\det \\neq 0$$.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Coplanarité de points</div>
                <div class="fiche-content">
                    <p>Les points $$A,B,C,D$$ sont coplanaires ssi $$\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD}) = 0$$.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Volumes</div>
                <div class="fiche-content">
                    <p><strong>Volume d'un parallélépipède :</strong> $$V = |\\det(\\vec{u},\\vec{v},\\vec{w})|$$.</p>
                    <p><strong>Volume d'un tétraèdre :</strong> $$V = \\dfrac{1}{6}\\left|\\det(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})\\right|$$.</p>
                    <p><strong>Autre expression :</strong> $$V = \\dfrac{1}{6}\\left|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}\\right|$$.</p>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 5 : DROITES ET PLANS                                 -->
        <!-- ============================================================ -->
        <div id="fiche-tab-equations" class="fiche-tab-content">
            <div class="fiche-section">
                <div class="fiche-title">Représentation paramétrique</div>
                <div class="fiche-content">
                    <p><strong>Droite :</strong> passant par $$A(x_0,y_0,z_0)$$ de vecteur directeur $$\\vec{u}\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$$ :</p>
                    <p style="text-align:center;">
                        $$\\begin{cases}
                            x = x_0 + \\alpha a \\\\
                            y = y_0 + \\alpha b \\\\
                            z = z_0 + \\alpha c
                        \\end{cases},\\quad \\alpha\\in\\mathbb{R}$$.
                    </p>
                    <p><strong>Plan :</strong> passant par $$A$$ de vecteurs directeurs $$\\vec{u},\\vec{v}$$ :</p>
                    <p style="text-align:center;">
                        $$\\begin{cases}
                            x = x_0 + \\alpha a + \\beta a' \\\\
                            y = y_0 + \\alpha b + \\beta b' \\\\
                            z = z_0 + \\alpha c + \\beta c'
                        \\end{cases},\\quad \\alpha,\\beta\\in\\mathbb{R}$$.
                    </p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Équation cartésienne</div>
                <div class="fiche-content">
                    <p><strong>Plan :</strong> $$ax+by+cz+d=0$$, avec $$\\vec{n}(a,b,c)$$ normal.</p>
                    <p><strong>Cas particuliers :</strong></p>
                    <ul>
                        <li>$$x=0$$ : plan $$(O,\\vec{j},\\vec{k})$$</li>
                        <li>$$y=0$$ : plan $$(O,\\vec{i},\\vec{k})$$</li>
                        <li>$$z=0$$ : plan $$(O,\\vec{i},\\vec{j})$$</li>
                    </ul>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Positions relatives</div>
                <div class="fiche-content">
                    <p><strong>Deux plans :</strong> $$\\mathcal{P}: ax+by+cz+d=0$$, $$\\mathcal{Q}: a'x+b'y+c'z+d'=0$$</p>
                    <ul>
                        <li><strong>Sécants :</strong> normales non colinéaires (<em>intersection = droite</em>)</li>
                        <li><strong>Parallèles distincts :</strong> normales colinéaires, équations non proportionnelles</li>
                        <li><strong>Confondus :</strong> équations proportionnelles</li>
                    </ul>
                    <p><strong>Droite et plan :</strong> $$\\mathcal{D}(A,\\vec{u})$$ et $$\\mathcal{P}: ax+by+cz+d=0$$</p>
                    <ul>
                        <li><strong>Sécants :</strong> $$\\vec{u}\\cdot\\vec{n} \\neq 0$$</li>
                        <li><strong>Parallèles :</strong> $$\\vec{u}\\cdot\\vec{n} = 0$$ et $$A\\notin\\mathcal{P}$$</li>
                        <li><strong>Incluse :</strong> $$\\vec{u}\\cdot\\vec{n} = 0$$ et $$A\\in\\mathcal{P}$$</li>
                    </ul>
                    <p><strong>Distance point-plan :</strong> $$d = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$$.</p>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ONGLET 6 : SPHÈRE                                           -->
        <!-- ============================================================ -->
        <div id="fiche-tab-sphere" class="fiche-tab-content">
            <div class="fiche-section">
                <div class="fiche-title">Équation de la sphère</div>
                <div class="fiche-content">
                    <p><strong>Définition :</strong> $$\\mathcal{S}(I,R) = \\{M \\mid IM = R\\}$$.</p>
                    <p><strong>Équation cartésienne :</strong> $$(x-a)^2+(y-b)^2+(z-c)^2=R^2$$, avec $$I(a,b,c)$$.</p>
                    <p><strong>Forme développée :</strong> $$x^2+y^2+z^2+\\alpha x+\\beta y+\\gamma z+\\delta=0$$, avec</p>
                    <p style="text-align:center;">
                        $$I\\left(-\\dfrac{\\alpha}{2},-\\dfrac{\\beta}{2},-\\dfrac{\\gamma}{2}\\right)$$, $$R^2 = \\dfrac{\\alpha^2+\\beta^2+\\gamma^2}{4} - \\delta$$.
                    </p>
                    <p><strong>Si $$R^2<0$$ :</strong> ensemble vide. Si $$R^2=0$$ : un point.</p>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Intersection sphère-plan</div>
                <div class="fiche-content">
                    <p>Soit $$\\mathcal{S}(I,R)$$ et $$\\mathcal{P}$$ un plan, $$h = d(I,\\mathcal{P})$$.</p>
                    <ul>
                        <li><strong>$$h>R$$ :</strong> intersection vide</li>
                        <li><strong>$$h=R$$ :</strong> plan tangent, intersection = $$\\{H\\}$$ (projeté de $$I$$ sur $$\\mathcal{P}$$)</li>
                        <li><strong>$$h<R$$ :</strong> intersection = cercle de centre $$H$$ et de rayon $$r = \\sqrt{R^2-h^2}$$</li>
                    </ul>
                </div>
            </div>
            <div class="fiche-section">
                <div class="fiche-title">Plan tangent et sphère de diamètre</div>
                <div class="fiche-content">
                    <p><strong>Plan tangent en $$A\\in\\mathcal{S}$$ :</strong> plan passant par $$A$$ et de vecteur normal $$\\overrightarrow{IA}$$.</p>
                    <p><strong>Sphère de diamètre $$[AB]$$ :</strong> ensemble des $$M$$ tels que $$\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0$$.</p>
                </div>
            </div>
        </div>
    `;

    // Remplacer toutes les occurrences de \(...\) par $$...$$ pour forcer le mode display
    // Note : on utilise des expressions régulières pour échapper les backslashes.
    html = html.replace(/\\\(/g, '$$').replace(/\\\)/g, '$$');

    return html;
};