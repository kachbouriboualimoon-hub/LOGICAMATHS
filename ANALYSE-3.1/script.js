// script.js – Moteur de rendu complet avec rubriques "Résumés", "Fiches", "Aide-mémoire" (flip cards) et "Problèmes"

const app = document.getElementById('app');
const nav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');

let currentPage = 'accueil';
let currentId = null;

// --- Thème ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
else setTheme('light');

// --- Navigation ---
function buildNav(activePage, activeId) {
    let html = `<a onclick="navigateTo('accueil'); return false;" class="${activePage === 'accueil' ? 'active' : ''}">🏠 Accueil</a>`;
    data.chapitres.forEach(ch => {
        const active = (activePage === 'chapitre' && activeId === ch.id) ? 'active' : '';
        html += `<a onclick="navigateTo('chapitre', ${ch.id}); return false;" class="${active}">Ch${ch.id}</a>`;
    });
    html += `<a onclick="navigateTo('resumes'); return false;" class="${activePage === 'resumes' ? 'active' : ''}">📚 Résumés</a>`;
    html += `<a onclick="navigateTo('fiches'); return false;" class="${activePage === 'fiches' ? 'active' : ''}">📋 Fiches</a>`;
    html += `<a onclick="navigateTo('aideMemoire'); return false;" class="${activePage === 'aideMemoire' ? 'active' : ''}">📘 Aide-mémoire</a>`;
    html += `<a onclick="navigateTo('problemes'); return false;" class="${activePage === 'problemes' ? 'active' : ''}">🧩 Problèmes</a>`;
    nav.innerHTML = html;
}

// --- Rendu ---
function render(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(() => {});
        }
        plotAllGraphs();
    }, 100);
}

// --- Graphiques ---
function plotAllGraphs() {
    document.querySelectorAll('.graph-container').forEach(el => {
        const fnStr = el.getAttribute('data-fn');
        const xMin = parseFloat(el.getAttribute('data-xmin')) || -5;
        const xMax = parseFloat(el.getAttribute('data-xmax')) || 5;
        const id = el.id;
        if (!id || !fnStr) return;
        const colors = (el.getAttribute('data-colors') || '#2563eb,#dc2626,#16a34a').split(',').map(c => c.trim());
        const fns = fnStr.split(';').map(s => s.trim());
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = '';
        const width = container.clientWidth || 600;
        const height = parseInt(el.getAttribute('data-height')) || 300;
        try {
            functionPlot({
                target: '#' + id,
                width: width,
                height: height,
                xAxis: { domain: [xMin, xMax] },
                grid: true,
                data: fns.map((fn, i) => ({ fn: fn, color: colors[i % colors.length] }))
            });
        } catch (e) {
            console.warn('Erreur de tracé pour ' + fnStr, e);
            container.innerHTML = '<p style="color:var(--text-secondary); padding:20px; text-align:center;">⚠️ Graphique non disponible</p>';
        }
    });
}

// --- Quiz ---
window.submitQuiz = function(chId) {
    const ch = data.chapitres.find(c => c.id === chId);
    if (!ch || !ch.quiz) return;
    const questions = ch.quiz.questions;
    let correctCount = 0;
    const total = questions.length;
    for (let i = 0; i < total; i++) {
        const q = questions[i];
        const container = document.getElementById(`quiz-q-${i}`);
        if (!container) continue;
        const selectedInput = container.querySelector('input[type="radio"]:checked');
        const selectedValue = selectedInput ? parseInt(selectedInput.value) : -1;
        const labels = container.querySelectorAll('.quiz-options label');
        labels.forEach((label, idx) => {
            const input = label.querySelector('input');
            if (input) {
                input.disabled = true;
                const span = label.querySelector('.q-opt-text');
                if (span) {
                    if (idx === q.correct) {
                        span.style.color = 'var(--success)';
                        span.style.fontWeight = 'bold';
                    } else if (idx === selectedValue && idx !== q.correct) {
                        span.style.color = 'var(--danger)';
                        span.style.fontWeight = 'bold';
                    }
                }
            }
        });
        if (selectedValue === q.correct) correctCount++;
    }
    const score = (correctCount / total) * 20;
    document.getElementById('quiz-result-area').innerHTML = `
        <div class="quiz-result">
            <div class="score">${score.toFixed(1)} / 20</div>
            <div class="score-detail">${correctCount} / ${total} bonnes réponses</div>
            ${score < 10 ? '<p style="color:var(--danger); font-weight:600;">📚 Relisez le cours et réessayez !</p>' : score < 16 ? '<p style="color:#eab308; font-weight:600;">💪 Bon travail, mais peut mieux faire !</p>' : '<p style="color:var(--success); font-weight:600;">🎉 Excellent ! Vous maîtrisez le chapitre !</p>'}
        </div>
        <div class="quiz-actions">
            <button class="btn-secondary" onclick="resetQuiz(${chId})">🔄 Réessayer</button>
        </div>
    `;
    document.getElementById('quiz-submit-btn').style.display = 'none';
};

window.resetQuiz = function(chId) {
    const ch = data.chapitres.find(c => c.id === chId);
    if (!ch || !ch.quiz) return;
    const quizHtml = renderQuizHTML(ch);
    document.getElementById('quiz-container').innerHTML = quizHtml;
    document.getElementById('quiz-result-area').innerHTML = '';
    document.getElementById('quiz-submit-btn').style.display = 'inline-block';
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(() => {});
        }
    }, 50);
};

function renderQuizHTML(ch) {
    const questions = ch.quiz.questions;
    let html = `<p style="margin-bottom:16px; color:var(--text-secondary);">Répondez aux questions, puis cliquez sur <strong>"Corriger"</strong>. Votre note sur 20 s'affichera.</p>`;
    questions.forEach((q, idx) => {
        html += `<div class="quiz-question" id="quiz-q-${idx}">`;
        html += `<div class="q-text">Q${idx+1} : ${q.text}</div>`;
        html += `<div class="quiz-options">`;
        if (q.type === 'qcm') {
            q.options.forEach((opt, optIdx) => {
                html += `<label>
                            <input type="radio" name="q${idx}" value="${optIdx}">
                            <span class="q-opt-text">${opt}</span>
                         </label>`;
            });
        } else {
            html += `<label><input type="radio" name="q${idx}" value="1"> <span class="q-opt-text">Vrai</span></label>
                     <label><input type="radio" name="q${idx}" value="0"> <span class="q-opt-text">Faux</span></label>`;
        }
        html += `</div></div>`;
    });
    html += `<div id="quiz-result-area"></div>`;
    html += `<div class="quiz-actions">
                <button id="quiz-submit-btn" class="btn-primary" onclick="submitQuiz(${ch.id})">📊 Corriger</button>
             </div>`;
    return html;
}

// --- Sections pliables ---
function createCollapsibleSection(title, content, isOpen = false) {
    return `
        <div class="section-collapsible">
            <div class="section-header" onclick="toggleSection(this)">
                <h2>${title}</h2>
                <span class="toggle-icon ${isOpen ? 'open' : ''}">▼</span>
            </div>
            <div class="section-body ${isOpen ? 'open' : ''}">
                ${content}
            </div>
        </div>
    `;
}

window.toggleSection = function(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    if (body) {
        body.classList.toggle('open');
        if (icon) icon.classList.toggle('open');
        if (body.classList.contains('open')) {
            setTimeout(() => {
                if (window.MathJax && MathJax.typesetPromise) {
                    MathJax.typesetPromise([body]).catch(() => {});
                }
            }, 50);
        }
    }
};

window.toggleResume = function(element) {
    const contenu = element.nextElementSibling;
    const estOuvert = contenu.classList.contains('ouvert');
    if (estOuvert) {
        contenu.classList.remove('ouvert');
        element.classList.remove('ouvert');
    } else {
        contenu.classList.add('ouvert');
        element.classList.add('ouvert');
    }
};

// --- PAGE : Accueil ---
function renderAccueil() {
    currentPage = 'accueil'; currentId = null; buildNav('accueil', null);
    let html = `
        <section class="hero">
            <img src="assets/images/logo.png" alt="LOGICAMATHS">
            <h1>ANALYSE 3.1</h1>
            <p class="subtitle">L'Analyse Mathématique Réinventée</p>
            <p>4ème Année Sciences Expérimentales & Sciences Techniques</p>
            <p class="author">Par Prof. KACHBOURI BOUALI</p>
            <div class="stats">
                <div class="stat"><strong>10</strong><br>Chapitres</div>
                <div class="stat"><strong>200+</strong><br>Exercices</div>
                <div class="stat"><strong>🎯</strong><br>Bac 2026</div>
            </div>
        </section>
        <h2>📖 Sommaire des Chapitres</h2>
        <div class="chapters-grid">
    `;
    data.chapitres.forEach(ch => {
        const count = ch.exercices ? ch.exercices.length : 0;
        html += `<a class="chapter-card" onclick="navigateTo('chapitre', ${ch.id}); return false;">
                    <span class="chapter-number">Chapitre ${ch.id}</span>
                    <h3>${ch.titre}</h3>
                    <p class="chapter-count">${count} exercices corrigés</p>
                 </a>`;
    });
    html += `</div>
        <h2 style="margin-top:3rem;">📚 Ressources & Outils</h2>
        <div class="resources-grid">
            <a class="resource-card" onclick="navigateTo('resumes'); return false;">
                <span class="resource-icon">📚</span>
                <h3>Résumés</h3>
                <p>Synthèse des notions fondamentales</p>
            </a>
            <a class="resource-card" onclick="navigateTo('fiches'); return false;">
                <span class="resource-icon">📋</span>
                <h3>Fiches</h3>
                <p>Formules essentielles en un coup d'œil</p>
            </a>
            <a class="resource-card" onclick="navigateTo('aideMemoire'); return false;">
                <span class="resource-icon">📘</span>
                <h3>Aide‑mémoire</h3>
                <p>Questions / réponses pour les exercices</p>
            </a>
            <a class="resource-card" onclick="navigateTo('problemes'); return false;">
                <span class="resource-icon">🧩</span>
                <h3>Problèmes</h3>
                <p>Problèmes types pour le bac</p>
            </a>
        </div>
    `;
    render(html);
}

// --- PAGE : Résumés ---
function renderResumes() {
    currentPage = 'resumes'; currentId = null; buildNav('resumes', null);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📚 Résumés Analyse</h2>
                <span class="badge">${data.chapitres.filter(c => c.resume).length} chapitres</span>
            </div>
            <div class="chapitre-sous-titre">Synthèse des notions fondamentales</div>
            <div class="chapitre-meta"><span>Cliquez sur un chapitre pour afficher son résumé</span></div>
            <div class="content-area">
                <div id="resume-list">
    `;
    data.chapitres.forEach(ch => {
        if (!ch.resume) return;
        const resumeContent = `
            ${ch.resume}
            ${ch.theoremes ? `<h4>📌 Théorèmes</h4>${ch.theoremes}` : ''}
            ${ch.methodes ? `<h4>📝 Méthodes</h4>${ch.methodes}` : ''}
            ${ch.astuces ? `<h4>💡 Astuces</h4>${ch.astuces}` : ''}
            ${ch.erreurs ? `<h4>⚠️ Erreurs fréquentes</h4>${ch.erreurs}` : ''}
        `;
        html += `
            <div class="resume-item">
                <div class="resume-titre" onclick="toggleResume(this)">
                    <span>Chapitre ${ch.id} : ${ch.titre}</span>
                    <span class="icone">▼</span>
                </div>
                <div class="resume-contenu">
                    ${resumeContent}
                </div>
            </div>
        `;
    });
    html += `
                </div>
            </div>
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

// --- PAGE : Fiches ---
function renderFiches() {
    currentPage = 'fiches'; currentId = null; buildNav('fiches', null);
    if (typeof window.fiches === 'undefined') {
        render('<p style="text-align:center; padding:40px; color:var(--text-secondary);">❌ Les fiches ne sont pas chargées.</p>');
        return;
    }
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📋 Fiches Analyse</h2>
                <span class="badge">Synthèse des formules</span>
            </div>
            <div class="chapitre-sous-titre">Toutes les formules essentielles en un coup d'œil</div>
            <div class="chapitre-meta"><span>Cliquez sur un onglet pour afficher la section</span></div>
            <div class="fiches-tabs">
                <button class="fiche-tab active" data-tab="derivees" onclick="switchFicheTab('derivees')">📐 Dérivées</button>
                <button class="fiche-tab" data-tab="primitives" onclick="switchFicheTab('primitives')">📦 Primitives</button>
                <button class="fiche-tab" data-tab="limites" onclick="switchFicheTab('limites')">📈 Limites</button>
                <button class="fiche-tab" data-tab="theoremes" onclick="switchFicheTab('theoremes')">🧠 Théorèmes</button>
                <button class="fiche-tab" data-tab="suites" onclick="switchFicheTab('suites')">📊 Suites</button>
                <button class="fiche-tab" data-tab="divers" onclick="switchFicheTab('divers')">📎 Divers</button>
            </div>
            <div class="content-area">
                <div id="fiche-tab-derivees" class="fiche-tab-content active">${genererSectionDerivees()}</div>
                <div id="fiche-tab-primitives" class="fiche-tab-content">${genererSectionPrimitives()}</div>
                <div id="fiche-tab-limites" class="fiche-tab-content">${genererSectionLimites()}</div>
                <div id="fiche-tab-theoremes" class="fiche-tab-content">${genererSectionTheoremes()}</div>
                <div id="fiche-tab-suites" class="fiche-tab-content">${genererSectionSuites()}</div>
                <div id="fiche-tab-divers" class="fiche-tab-content">${genererSectionDivers()}</div>
            </div>
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

window.switchFicheTab = function(tabId) {
    document.querySelectorAll('.fiche-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.fiche-tab').forEach(el => el.classList.remove('active'));
    document.getElementById('fiche-tab-' + tabId).classList.add('active');
    document.querySelector(`.fiche-tab[data-tab="${tabId}"]`).classList.add('active');
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(() => {});
        }
    }, 50);
};

// --- Générateurs de sections fiches ---
function genererSectionDerivees() {
    let html = '';
    const d = window.fiches.derivees;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content"><table class="fiche-table"><tr><th>Fonction $f(x)$</th><th>Dérivée $f'(x)$</th></tr>`;
        d.contenu.forEach(row => { html += `<tr><td>${row.f}</td><td>${row.df}</td></tr>`; });
        html += `</table></div></div>`;
    }
    const d2 = window.fiches.operationsDerivees;
    if (d2) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d2.titre}</h3><div class="fiche-content"><table class="fiche-table"><tr><th>Forme</th><th>Dérivée</th></tr>`;
        d2.contenu.forEach(row => { html += `<tr><td>${row.forme}</td><td>${row.derivee}</td></tr>`; });
        html += `</table></div></div>`;
    }
    return html;
}

function genererSectionPrimitives() {
    let html = '';
    const d = window.fiches.primitives;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content"><table class="fiche-table"><tr><th>Fonction $f(x)$</th><th>Primitive $F(x)$</th></tr>`;
        d.contenu.forEach(row => { html += `<tr><td>${row.f}</td><td>${row.F}</td></tr>`; });
        html += `</table></div></div>`;
    }
    const d2 = window.fiches.operationsPrimitives;
    if (d2) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d2.titre}</h3><div class="fiche-content"><table class="fiche-table"><tr><th>Forme</th><th>Primitive</th></tr>`;
        d2.contenu.forEach(row => { html += `<tr><td>${row.forme}</td><td>${row.primitive}</td></tr>`; });
        html += `</table></div></div>`;
    }
    html += `
        <div class="fiche-section">
            <h3 class="fiche-title">🧮 Intégration par parties</h3>
            <div class="fiche-content">
                <div class="formula-box">$$\\int_a^b f(t)g'(t)dt = [f(t)g(t)]_a^b - \\int_a^b f'(t)g(t)dt$$</div>
                <p><strong>Formule de base :</strong> $\\displaystyle\\int u\\,dv = uv - \\int v\\,du$</p>
            </div>
        </div>
    `;
    return html;
}

function genererSectionLimites() {
    let html = '';
    const d = window.fiches.limites;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content">`;
        d.sections.forEach(section => {
            html += `<h4>${section.sousTitre}</h4><div class="formula-box">`;
            section.formules.forEach(f => { html += `<p>${f}</p>`; });
            html += `</div>`;
        });
        html += `</div></div>`;
    }
    html += `
        <div class="fiche-section">
            <h3 class="fiche-title">📊 Propriétés logarithme et exponentielle</h3>
            <div class="fiche-content">
                <h4>Logarithme népérien</h4>
                <div class="formula-box">
                    <p>$\\ln(1) = 0$ &nbsp;|&nbsp; $\\ln(e) = 1$</p>
                    <p>$\\ln(a \\times b) = \\ln(a) + \\ln(b)$ &nbsp;|&nbsp; $\\ln\\left(\\dfrac{a}{b}\\right) = \\ln(a) - \\ln(b)$</p>
                    <p>$\\ln(a^n) = n \\times \\ln(a)$ &nbsp;|&nbsp; $\\ln\\left(\\dfrac{1}{a}\\right) = -\\ln(a)$</p>
                    <p>$\\ln(\\sqrt{a}) = \\dfrac{1}{2}\\ln(a)$</p>
                    <p>$a < b \\Leftrightarrow \\ln(a) < \\ln(b)$ &nbsp;|&nbsp; $a = b \\Leftrightarrow \\ln(a) = \\ln(b)$</p>
                </div>
                <h4>Exponentielle</h4>
                <div class="formula-box">
                    <p>$\\exp(0) = e^0 = 1$</p>
                    <p>$e^{a+b} = e^a \\times e^b$ &nbsp;|&nbsp; $e^{a-b} = \\dfrac{e^a}{e^b}$</p>
                    <p>$(e^a)^b = e^{a \\times b}$ &nbsp;|&nbsp; $e^{-a} = \\dfrac{1}{e^a}$</p>
                    <p>$a < b \\Leftrightarrow e^a < e^b$ &nbsp;|&nbsp; $a = b \\Leftrightarrow e^a = e^b$</p>
                </div>
            </div>
        </div>
    `;
    return html;
}

function genererSectionTheoremes() {
    let html = '';
    const d = window.fiches.theoremes;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content">`;
        d.contenu.forEach(t => {
            html += `<div class="theoreme-block"><strong>${t.titre} :</strong><br>${t.enonce}`;
            if (t.formule) html += `<br>${t.formule}`;
            if (t.interpretation) html += `<br><em>${t.interpretation}</em>`;
            if (t.corollaire) html += `<br><strong>Corollaire :</strong> ${t.corollaire}`;
            if (t.remarque) html += `<br><em>${t.remarque}</em>`;
            html += `</div>`;
        });
        html += `</div></div>`;
    }
    return html;
}

function genererSectionSuites() {
    let html = '';
    const d = window.fiches.suites;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content"><table class="fiche-table"><tr><th></th><th>Arithmétique</th><th>Géométrique</th></tr>`;
        d.contenu.forEach(row => {
            html += `<tr><td><strong>${row.type}</strong></td><td>${row.arith}</td><td>${row.geo}</td></tr>`;
        });
        html += `</table><p><em>${d.remarque}</em></p></div></div>`;
    }
    const d2 = window.fiches.convergence;
    if (d2) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d2.titre}</h3><div class="fiche-content"><ul>`;
        d2.regles.forEach(regle => { html += `<li>${regle}</li>`; });
        html += `</ul></div></div>`;
    }
    html += `
        <div class="fiche-section">
            <h3 class="fiche-title">📈 Monotonie d'une suite</h3>
            <div class="fiche-content">
                <div class="formula-box">
                    <p>Étudier le signe de $u_{n+1} - u_n$</p>
                    <p>Si $u_{n+1} - u_n \\ge 0$, la suite est croissante.</p>
                    <p>Si $u_{n+1} - u_n \\le 0$, la suite est décroissante.</p>
                </div>
            </div>
        </div>
        <div class="fiche-section">
            <h3 class="fiche-title">🧩 Raisonnement par récurrence</h3>
            <div class="fiche-content">
                <div class="formula-box">
                    <ol>
                        <li>Vérifier la propriété pour le premier indice.</li>
                        <li>Supposer la propriété vraie à l'ordre $n$ et la montrer à l'ordre $n+1$.</li>
                        <li>Conclure.</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
    return html;
}

function genererSectionDivers() {
    let html = '';
    const d = window.fiches.signe;
    if (d) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d.titre}</h3><div class="fiche-content">`;
        d.contenu.forEach(item => {
            html += `<p><strong>${item.condition} :</strong> ${item.resultat}</p>`;
        });
        html += `</div></div>`;
    }
    const d2 = window.fiches.traceDroite;
    if (d2) {
        html += `<div class="fiche-section"><h3 class="fiche-title">${d2.titre}</h3><div class="fiche-content"><ol>`;
        d2.etapes.forEach(etape => { html += `<li>${etape}</li>`; });
        html += `</ol></div></div>`;
    }
    html += `
        <div class="fiche-section">
            <h3 class="fiche-title">📐 Identités remarquables</h3>
            <div class="fiche-content">
                <div class="formula-box">
                    <p>$(a+b)^2 = a^2 + 2ab + b^2$</p>
                    <p>$(a-b)^2 = a^2 - 2ab + b^2$</p>
                    <p>$(a+b)(a-b) = a^2 - b^2$</p>
                    <p>$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</p>
                    <p>$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$</p>
                </div>
            </div>
        </div>
    `;
    return html;
}

// =========================================================================
// AIDE-MÉMOIRE – FLIP CARDS
// =========================================================================

// --- Générateur de contenu pour l'aide-mémoire (flip cards) ---
function genererAideSection(section) {
    if (!section || !section.items) return '<p style="color:var(--text-secondary);">Section vide.</p>';
    let html = `<h3 class="fiche-title">${section.titre}</h3>`;
    if (section.description) {
        html += `<p style="color:var(--text-secondary); margin-bottom:16px;">${section.description}</p>`;
    }
    html += `<div class="flip-grid">`;
    section.items.forEach((item, index) => {
        html += `
            <div class="flip-card" onclick="toggleFlipCard(this)">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <span class="flip-question">${item.question}</span>
                    </div>
                    <div class="flip-card-back">
                        <div class="flip-answer">${item.reponse}</div>
                    </div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

// --- Fonction de retournement de carte ---
window.toggleFlipCard = function(card) {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        const back = card.querySelector('.flip-card-back');
        if (back) {
            setTimeout(() => {
                if (window.MathJax && MathJax.typesetPromise) {
                    MathJax.typesetPromise([back]).catch(() => {});
                }
            }, 100);
        }
    }
};

// --- PAGE : Aide-mémoire ---
function renderAideMemoire() {
    currentPage = 'aideMemoire'; currentId = null; buildNav('aideMemoire', null);
    if (typeof window.aideMemoire === 'undefined') {
        render('<p style="text-align:center; padding:40px; color:var(--text-secondary);">❌ L\'aide-mémoire n\'est pas chargée.</p>');
        return;
    }
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📘 Aide-mémoire</h2>
                <span class="badge">${window.aideMemoire.analyse.items.length + window.aideMemoire.suites.items.length} fiches</span>
            </div>
            <div class="chapitre-sous-titre">Questions et réponses pour les exercices d'analyse et de suites</div>
            <div class="chapitre-meta"><span>Cliquez sur une carte pour la retourner</span></div>
            <div class="fiches-tabs">
                <button class="fiche-tab active" data-tab="aide-analyse" onclick="switchAideTab('aide-analyse')">📐 Analyse</button>
                <button class="fiche-tab" data-tab="aide-suites" onclick="switchAideTab('aide-suites')">📊 Suites</button>
            </div>
            <div class="content-area">
                <div id="aide-tab-aide-analyse" class="fiche-tab-content active">${genererAideSection(window.aideMemoire.analyse)}</div>
                <div id="aide-tab-aide-suites" class="fiche-tab-content">${genererAideSection(window.aideMemoire.suites)}</div>
            </div>
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

// --- Changement d'onglet dans l'aide-mémoire ---
window.switchAideTab = function(tabId) {
    document.querySelectorAll('.fiche-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.fiche-tab').forEach(el => el.classList.remove('active'));
    document.getElementById('aide-tab-' + tabId).classList.add('active');
    document.querySelector(`.fiche-tab[data-tab="${tabId}"]`).classList.add('active');
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(() => {});
        }
    }, 50);
};

// --- PAGE : Problèmes ---
function renderProblemes() {
    currentPage = 'problemes'; currentId = null; buildNav('problemes', null);
    if (typeof window.problemes === 'undefined' || !window.problemes.items) {
        render('<p style="text-align:center; padding:40px; color:var(--text-secondary);">❌ Les problèmes ne sont pas chargés.</p>');
        return;
    }
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>🧩 ${window.problemes.titre}</h2>
                <span class="badge">${window.problemes.items.length} problèmes</span>
            </div>
            <div class="chapitre-sous-titre">${window.problemes.description || 'Problèmes types pour le bac'}</div>
            <div class="chapitre-meta"><span>Cliquez sur un problème pour afficher l’énoncé et la solution</span></div>
            <div class="content-area">
    `;
    window.problemes.items.forEach((p, index) => {
        let questionsHtml = '';
        if (p.questions && p.questions.length) {
            questionsHtml += `<div class="probleme-questions">`;
            p.questions.forEach((q, qi) => {
                questionsHtml += `
                    <div class="question-block">
                        <div class="question-text">Q${qi+1} : ${q.texte}</div>
                        <button class="solution-toggle" onclick="toggleSolution('${q.id}')">Afficher la solution</button>
                        <div id="sol-${q.id}" class="solution-content">${q.solution}</div>
                    </div>
                `;
            });
            questionsHtml += `</div>`;
        }
        let astucesHtml = p.astuces ? `<div class="astuce-box">💡 ${p.astuces}</div>` : '';
        let erreursHtml = p.erreurs ? `<div class="erreur-box">⚠️ ${p.erreurs}</div>` : '';
        html += `
            <div class="section-collapsible">
                <div class="section-header" onclick="toggleSection(this)">
                    <h2>Problème ${p.id} : ${p.titre}</h2>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="section-body">
                    <div class="probleme-enonce"><h4>📄 Énoncé</h4>${p.enonce}</div>
                    ${astucesHtml}${erreursHtml}${questionsHtml}
                </div>
            </div>
        `;
    });
    html += `</div></div><a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>`;
    render(html);
}

// --- PAGE : Chapitre ---
function renderChapitre(id) {
    const ch = data.chapitres.find(c => c.id === id);
    if (!ch) { renderAccueil(); return; }
    currentPage = 'chapitre'; currentId = id; buildNav('chapitre', id);
    let sectionsHtml = '';
    sectionsHtml += createCollapsibleSection('📖 Rappel de cours', ch.rappel, false);
    if (ch.theoremes) sectionsHtml += createCollapsibleSection('📌 Théorèmes & Remarques', ch.theoremes, false);
    sectionsHtml += createCollapsibleSection('🔧 Méthodes', ch.methodes, false);
    sectionsHtml += createCollapsibleSection('💡 Astuces du Prof', ch.astuces, false);
    sectionsHtml += createCollapsibleSection('⚠️ Erreurs Fréquentes', ch.erreurs, false);
    if (ch.quiz) {
        sectionsHtml += createCollapsibleSection('📝 Quiz – Évaluez-vous !', `<div id="quiz-container">${renderQuizHTML(ch)}</div>`, false);
    }
    let exercicesContent = '';
    ch.exercices.forEach(ex => {
        exercicesContent += `
            <div class="exercice-item" onclick="navigateTo('exercice', ${ch.id}, ${ex.numero}); return false;">
                <span class="exercice-num">Exercice ${ex.numero}</span>
                <span class="exercice-link">Voir</span>
            </div>
        `;
    });
    sectionsHtml += createCollapsibleSection('📝 Exercices', exercicesContent, false);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>Chapitre ${ch.id}</h2>
                <span class="badge">${ch.exercices.length} exercices</span>
            </div>
            <div class="chapitre-sous-titre">${ch.titre}</div>
            <div class="chapitre-meta"><span>${ch.exercices.length} exercices corrigés</span></div>
            <div class="content-area">${sectionsHtml}</div>
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

// --- PAGE : Exercice ---
function renderExercice(chId, exNum) {
    const ch = data.chapitres.find(c => c.id === chId);
    if (!ch) { renderAccueil(); return; }
    const exIndex = ch.exercices.findIndex(e => e.numero === exNum);
    if (exIndex === -1) { renderChapitre(chId); return; }
    const ex = ch.exercices[exIndex];
    const totalEx = ch.exercices.length;
    const prevEx = exIndex > 0 ? ch.exercices[exIndex - 1] : null;
    const nextEx = exIndex < totalEx - 1 ? ch.exercices[exIndex + 1] : null;
    currentPage = 'exercice'; 
    currentId = { chId, exNum }; 
    buildNav('chapitre', chId);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>Exercice ${ex.numero}</h2>
                <span class="badge">Chapitre ${ch.id}</span>
            </div>
            <div class="chapitre-sous-titre">${ch.titre}</div>
            <div class="breadcrumb" style="margin-top:8px;">
                <a onclick="navigateTo('accueil'); return false;">Accueil</a> <span>›</span>
                <a onclick="navigateTo('chapitre', ${chId}); return false;">Chapitre ${chId}</a> <span>›</span>
                <span>Exercice ${ex.numero}</span>
            </div>
            <div class="content-area">
                ${ex.astuces_exo ? createCollapsibleSection('💡 Astuces', ex.astuces_exo, false) : ''}
                ${ex.erreurs_exo ? createCollapsibleSection('⚠️ Erreurs possibles', ex.erreurs_exo, false) : ''}
                ${createCollapsibleSection('📄 Énoncé', ex.enonce, false)}
                ${createCollapsibleSection('🔍 Solutions', ex.questions.map((q, idx) => `
                    <div class="question-block">
                        <div class="question-text">Q${idx+1} : ${q.texte}</div>
                        <button class="solution-toggle" onclick="toggleSolution('${q.id}')">Afficher la solution</button>
                        <div id="sol-${q.id}" class="solution-content">${q.solution}</div>
                    </div>
                `).join(''), false)}
            </div>
        </div>
        <div class="exercice-nav">
            ${prevEx ? `<button class="btn-secondary" onclick="navigateTo('exercice', ${chId}, ${prevEx.numero}); return false;">◀ Exercice précédent</button>` : `<span class="nav-disabled">◀ Exercice précédent</span>`}
            <button class="btn-primary" onclick="navigateTo('chapitre', ${chId}); return false;">📋 Liste des exercices</button>
            ${nextEx ? `<button class="btn-secondary" onclick="navigateTo('exercice', ${chId}, ${nextEx.numero}); return false;">Exercice suivant ▶</button>` : `<span class="nav-disabled">Exercice suivant ▶</span>`}
        </div>
        <a class="back-link" onclick="navigateTo('chapitre', ${chId}); return false;">← Retour au chapitre</a>
    `;
    render(html);
}

window.toggleSolution = function(id) {
    const el = document.getElementById('sol-' + id);
    if (!el) return;
    el.classList.toggle('open');
    if (el.classList.contains('open')) {
        setTimeout(() => {
            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise([el]).catch(() => {});
            }
        }, 50);
    }
};

// --- Navigation principale ---
window.navigateTo = function(page, chId, exNum) {
    if (page === 'accueil') renderAccueil();
    else if (page === 'resumes') renderResumes();
    else if (page === 'fiches') renderFiches();
    else if (page === 'aideMemoire') renderAideMemoire();
    else if (page === 'problemes') renderProblemes();
    else if (page === 'chapitre') renderChapitre(chId);
    else if (page === 'exercice') renderExercice(chId, exNum);
};

// --- Démarrer ---
renderAccueil();