// ============================================================
// script.js – Moteur de rendu complet – Géométrie dans l'Espace
// Version sans figures canvas
// ============================================================

const app = document.getElementById('app');
const nav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');

let currentPage = 'accueil';
let currentId = null;

// ============================================================
// 1. Gestion du thème
// ============================================================
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

// ============================================================
// 2. Navigation
// ============================================================
function buildNav(activePage, activeId) {
    let html = `<a onclick="navigateTo('accueil'); return false;" class="${activePage === 'accueil' ? 'active' : ''}">🏠 Accueil</a>`;
    if (typeof data !== 'undefined' && data.chapitres) {
        data.chapitres.forEach(ch => {
            const active = (activePage === 'chapitre' && activeId === ch.id) ? 'active' : '';
            html += `<a onclick="navigateTo('chapitre', ${ch.id}); return false;" class="${active}">Ch${ch.id}</a>`;
        });
    }
    html += `<a onclick="navigateTo('resumes'); return false;" class="${activePage === 'resumes' ? 'active' : ''}">📚 Résumés</a>`;
    html += `<a onclick="navigateTo('fiches'); return false;" class="${activePage === 'fiches' ? 'active' : ''}">📋 Fiches</a>`;
    html += `<a onclick="navigateTo('aideMemoire'); return false;" class="${activePage === 'aideMemoire' ? 'active' : ''}">📘 Aide-mémoire</a>`;
    html += `<a onclick="navigateTo('problemes'); return false;" class="${activePage === 'problemes' ? 'active' : ''}">🧩 Problèmes</a>`;
    nav.innerHTML = html;
}

// ============================================================
// 3. Rendu principal (avec rafraîchissement MathJax)
// ============================================================
function render(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise()
                .then(() => { drawFigures(); })
                .catch(() => { drawFigures(); });
        } else {
            drawFigures();
        }
        plotAllGraphs();
    }, 100);
}

// ============================================================
// 4. Graphiques avec function-plot (optionnel)
// ============================================================
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

// ============================================================
// 5. Dessin des figures sur canvas (VIDE)
// ============================================================
function drawFigures() {
    const canvases = document.querySelectorAll('.figure-canvas');
    canvases.forEach(canvas => {
        const type = canvas.getAttribute('data-figure');
        if (!type) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        const isDark = theme === 'dark';
        const cx = w / 2;
        const cy = h / 2;

        // Appel des figures du chapitre 1
        drawChapter1Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 2
        drawChapter2Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 3
        drawChapter3Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 4
        drawChapter4Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 5
        drawChapter5Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 6
        drawChapter6Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 7
        drawChapter7Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 8
        drawChapter8Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 9
        drawChapter9Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre 10
        drawChapter1Figures(ctx, type, w, h, cx, cy, isDark);

// Appel des figures du chapitre problemes
        drawChapter10Figures(ctx, type, w, h, cx, cy, isDark);

    });
    
    // ============================================================
// Dessin des figures canvas – Chapitre 1
// À intégrer dans la fonction drawFigures() de script.js
// ============================================================

// Cette fonction doit être placée dans drawFigures() (voir ci-dessous)
function drawChapter1Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';

    // ============================================================
    // Figure : Parallélépipède (Exercices 2, 6, 14)
    // ============================================================
    if (type === 'parallelepipede') {
        const dx = Math.min(w, h) * 0.2;
        const dy = Math.min(w, h) * 0.08;
        const dz = Math.min(w, h) * 0.15;
        const v = Math.min(w, h) * 0.3;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, dashed = false, color = colorSegment) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes visibles
        drawEdge(A, B, false, colorSegment);
        drawEdge(A, D, false, colorSegment);
        drawEdge(A, E, false, colorSegment);
        drawEdge(B, C, false, colorSegment);
        drawEdge(D, C, false, colorSegment);
        drawEdge(E, F, false, colorSegment);
        drawEdge(E, H, false, colorSegment);
        drawEdge(F, G, false, colorSegment);
        drawEdge(H, G, false, colorSegment);
        drawEdge(B, F, false, colorSegment);
        drawEdge(D, H, false, colorSegment);
        drawEdge(C, G, true, colorAxis); // arête cachée

        // Étiquettes
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        const labelOffset = 14;
        const pts = { A, B, C, D, E, F, G, H };
        const offsetDir = {
            A: { x: -1, y: 1 }, B: { x: 1, y: 1 }, C: { x: 1, y: 1 }, D: { x: -1, y: -1 },
            E: { x: -1, y: -1 }, F: { x: 1, y: -1 }, G: { x: 1, y: -1 }, H: { x: -1, y: -1 }
        };
        for (let key of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
            const p = pts[key];
            const off = offsetDir[key];
            ctx.fillText(key, p.x + off.x * labelOffset, p.y + off.y * (labelOffset / 2));
        }
    }

    // ============================================================
    // Figure : Cube (Exercices 4, 8, 9)
    // ============================================================
    else if (type === 'cube') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, dashed = false, color = colorSegment) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawEdge(A, B, false, colorSegment);
        drawEdge(A, D, false, colorSegment);
        drawEdge(A, E, false, colorSegment);
        drawEdge(B, C, false, colorSegment);
        drawEdge(D, C, false, colorSegment);
        drawEdge(E, F, false, colorSegment);
        drawEdge(E, H, false, colorSegment);
        drawEdge(F, G, false, colorSegment);
        drawEdge(H, G, false, colorSegment);
        drawEdge(B, F, false, colorSegment);
        drawEdge(D, H, false, colorSegment);
        drawEdge(C, G, true, colorAxis);

        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        const labelOffset = 14;
        const pts = { A, B, C, D, E, F, G, H };
        const offsetDir = {
            A: { x: -1, y: 1 }, B: { x: 1, y: 1 }, C: { x: 1, y: 1 }, D: { x: -1, y: -1 },
            E: { x: -1, y: -1 }, F: { x: 1, y: -1 }, G: { x: 1, y: -1 }, H: { x: -1, y: -1 }
        };
        for (let key of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
            const p = pts[key];
            const off = offsetDir[key];
            ctx.fillText(key, p.x + off.x * labelOffset, p.y + off.y * (labelOffset / 2));
        }
    }

    // ============================================================
    // Figure : Tétraèdre avec I, J, E, F (Exercice 5)
    // ============================================================
    else if (type === 'tetraedre_ijef') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.3 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.3 };
        const D = { x: cx, y: cy - s * 1.1 };
        const I = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const J = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
        const E = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        const F = { x: A.x + D.x - E.x, y: A.y + D.y - E.y };

        const drawSegment = (p1, p2, dashed = false, color = colorSegment, width = 1.5) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, false, colorCurve);
        drawSegment(A, C, false, colorCurve);
        drawSegment(A, D, false, colorCurve);
        drawSegment(B, C, false, colorCurve);
        drawSegment(B, D, false, colorCurve);
        drawSegment(C, D, false, colorCurve);

        // Segments spéciaux (pointillés)
        drawSegment(I, J, true, colorAxis, 1);
        drawSegment(A, E, true, colorAxis, 1);
        drawSegment(A, F, true, '#eab308', 1);
        drawSegment(D, E, true, '#eab308', 1);
        drawSegment(E, F, true, '#eab308', 1);

        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' },
            { p: I, label: 'I' }, { p: J, label: 'J' }, { p: E, label: 'E' }, { p: F, label: 'F' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'F') ? -16 : 8;
            const offY = (pt.label === 'F') ? -8 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I milieu de AB, J milieu de AC', 10, 20);
        ctx.fillText('E sur BC, F défini par AF = DE', 10, 34);
    }

    // ============================================================
    // Figure : Tétraèdre simple (Exercices 7, 10, 11, 13, 15)
    // ============================================================
    else if (type === 'tetraedre') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.3 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.3 };
        const D = { x: cx, y: cy - s * 1.1 };

        const drawSegment = (p1, p2, dashed = false, color = colorSegment, width = 1.5) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawSegment(A, B, false, colorCurve);
        drawSegment(A, C, false, colorCurve);
        drawSegment(A, D, false, colorCurve);
        drawSegment(B, C, false, colorCurve);
        drawSegment(B, D, false, colorCurve);
        drawSegment(C, D, false, colorCurve);

        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(pt.label, pt.p.x + 8, pt.p.y - 6);
            ctx.fillStyle = colorPoint;
        });
    }

    // ============================================================
    // Figure : Pyramide SABCD (Exercice 12)
    // ============================================================
    else if (type === 'pyramide') {
        const margin = 20;
        const W = w - 2 * margin;
        const H = h - 2 * margin;
        const size = Math.min(W, H) * 0.3;
        const cx2 = w / 2;
        const cy2 = h / 2 + 10;

        const A = { x: cx2 - size * 0.8, y: cy2 + size * 0.5 };
        const B = { x: cx2 + size * 0.8, y: cy2 + size * 0.5 };
        const D = { x: cx2 - size * 0.3, y: cy2 - size * 0.5 };
        const C = { x: cx2 + size * 0.3, y: cy2 - size * 0.5 };
        const S = { x: cx2, y: cy2 - size * 0.9 };

        const drawSegment = (p1, p2, dashed = false, color = colorSegment, width = 1.5) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Base ABCD (parallélogramme)
        drawSegment(A, B, false, colorCurve);
        drawSegment(B, C, false, colorCurve);
        drawSegment(C, D, false, colorCurve);
        drawSegment(D, A, false, colorCurve);

        // Arêtes latérales
        drawSegment(S, A, false, '#eab308');
        drawSegment(S, B, false, '#eab308');
        drawSegment(S, C, false, '#eab308');
        drawSegment(S, D, false, '#eab308');

        const pts = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' }, { p: S, label: 'S' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'S') ? -16 : 8;
            const offY = (pt.label === 'S') ? -12 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Pyramide SABCD (base parallélogramme)', margin, margin + 10);
    }
}


// ============================================================
// Dessin des figures canvas – Chapitre 2 (sans doublon)
// À intégrer dans la fonction drawFigures() de script.js
// ============================================================

// Cette fonction doit être placée dans drawFigures()
function drawChapter2Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';

    // ============================================================
    // Figure : Tétraèdre avec I milieu de AB et J milieu de CD (Exercice 2)
    // ============================================================
    if (type === 'tetraedre_ij_milieux') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.3 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.3 };
        const D = { x: cx, y: cy - s * 1.1 };
        const I = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const J = { x: (C.x + D.x) / 2, y: (C.y + D.y) / 2 };

        const drawSegment = (p1, p2, dashed = false, color = colorSegment, width = 1.5) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, false, colorCurve);
        drawSegment(A, C, false, colorCurve);
        drawSegment(A, D, false, colorCurve);
        drawSegment(B, C, false, colorCurve);
        drawSegment(B, D, false, colorCurve);
        drawSegment(C, D, false, colorCurve);

        // Segment IJ en pointillés (spécial)
        drawSegment(I, J, true, '#eab308', 2);

        // Tous les points
        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' },
            { p: I, label: 'I' }, { p: J, label: 'J' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(pt.label, pt.p.x + 8, pt.p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I milieu de [AB], J milieu de [CD]', 10, 20);
    }

    // ============================================================
    // Figure : Axes avec points (Exercice 6)
    // ============================================================
    else if (type === 'axes_points') {
        const margin = 30;
        const s = Math.min(w - 2 * margin, h - 2 * margin) / 2.5;
        const cx2 = w / 2;
        const cy2 = h / 2 + 10;

        // Axes
        ctx.strokeStyle = colorAxis;
        ctx.lineWidth = 1.5;
        // Axe x
        ctx.beginPath();
        ctx.moveTo(margin, cy2);
        ctx.lineTo(w - margin, cy2);
        ctx.stroke();
        // Axe y
        ctx.beginPath();
        ctx.moveTo(cx2, h - margin);
        ctx.lineTo(cx2, margin);
        ctx.stroke();
        // Axe z (oblique)
        ctx.beginPath();
        ctx.moveTo(cx2, cy2);
        ctx.lineTo(cx2 + s * 0.5, cy2 - s * 0.5);
        ctx.stroke();

        // Flèches et labels
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('x', w - margin + 8, cy2 + 4);
        ctx.fillText('y', cx2 + 4, margin - 6);
        ctx.fillText('z', cx2 + s * 0.5 + 8, cy2 - s * 0.5 - 4);
        ctx.fillText('O', cx2 - 14, cy2 + 16);

        // Points A, B, C, D (coordonnées approximatives)
        const px = (x, y, z) => cx2 + x * s - z * s * 0.3;
        const py = (x, y, z) => cy2 - y * s - z * s * 0.3;

        const pts = [
            { x: -1, y: 1 / 3, z: 0, label: 'A' },
            { x: 0, y: -1 / 4, z: 1 / 3, label: 'B' },
            { x: -1 / 2, y: -1 / 2, z: 1 / 2, label: 'C' },
            { x: 0, y: 2 / 5, z: 0, label: 'D' }
        ];

        ctx.fillStyle = colorPoint;
        pts.forEach(p => {
            const xp = px(p.x, p.y, p.z);
            const yp = py(p.x, p.y, p.z);
            ctx.beginPath();
            ctx.arc(xp, yp, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        });
    }

    // ============================================================
    // Figure : Points coplanaires (Exercice 8)
    // ============================================================
    else if (type === 'points_coplanar') {
        const margin = 40;
        const W = w - 2 * margin;
        const H = h - 2 * margin;
        const scale = Math.min(W, H) / 4;
        const cx2 = w / 2;
        const cy2 = h / 2;

        // Projection oblique
        const px = (x, y) => cx2 + x * scale - y * scale * 0.3;
        const py = (x, y) => cy2 - y * scale * 0.7 - x * scale * 0.2;

        const pts = [
            { x: 1, y: 0, label: 'A' },
            { x: 2, y: 1, label: 'B' },
            { x: 0, y: 2, label: 'C' },
            { x: 1, y: 1, label: 'D' }
        ];

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            const x1 = px(p1.x, p1.y);
            const y1 = py(p1.x, p1.y);
            const x2 = px(p2.x, p2.y);
            const y2 = py(p2.x, p2.y);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Quadrilatère ABCD
        drawSegment(pts[0], pts[1], colorCurve);
        drawSegment(pts[1], pts[2], colorCurve);
        drawSegment(pts[2], pts[3], colorCurve);
        drawSegment(pts[3], pts[0], colorCurve);

        // Diagonales en pointillés
        drawSegment(pts[0], pts[2], colorAxis, true);
        drawSegment(pts[1], pts[3], colorAxis, true);

        // Points
        ctx.fillStyle = colorPoint;
        pts.forEach(p => {
            const xp = px(p.x, p.y);
            const yp = py(p.x, p.y);
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Points A, B, C, D coplanaires', margin, margin + 10);
        ctx.fillText('(Le quadrilatère ABCD est un parallélogramme ?)', margin, margin + 24);
    }
}

// ============================================================
// Dessin des figures canvas – Chapitre 3
// À intégrer dans drawFigures() après drawChapter2Figures
// ============================================================
function drawChapter3Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorDashed = isDark ? '#64748b' : '#94a3b8';

    // ============================================================
    // Figure : Tétraèdre trirectangle (ex2)
    // ============================================================
    if (type === 'tetraedre_trirectangle') {
        const s = Math.min(w, h) * 0.25;
        const A = { x: cx - s * 0.5, y: cy + s * 0.7 };
        const B = { x: cx + s * 1.2, y: cy + s * 0.7 };
        const C = { x: cx - s * 0.8, y: cy - s * 0.3 };
        const D = { x: cx + s * 0.6, y: cy - s * 0.9 };

        // Arêtes
        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // AB, AC, AD (orthogonaux en A)
        drawSegment(A, B, colorCurve);
        drawSegment(A, C, colorCurve);
        drawSegment(A, D, colorCurve);
        drawSegment(B, C, colorSegment);
        drawSegment(C, D, colorSegment);
        drawSegment(B, D, colorSegment);

        // Marquer les angles droits en A
        const drawRightAngle = (p1, p2, p3, size = 8, color = colorCurve) => {
            const v1 = { x: p2.x - p1.x, y: p2.y - p1.y };
            const v2 = { x: p3.x - p1.x, y: p3.y - p1.y };
            const n1 = size / Math.sqrt(v1.x*v1.x + v1.y*v1.y);
            const n2 = size / Math.sqrt(v2.x*v2.x + v2.y*v2.y);
            const p = { x: p1.x + n1*v1.x + n2*v2.x, y: p1.y + n1*v1.y + n2*v2.y };
            ctx.beginPath();
            ctx.moveTo(p1.x + n1*v1.x, p1.y + n1*v1.y);
            ctx.lineTo(p.x, p.y);
            ctx.lineTo(p1.x + n2*v2.x, p1.y + n2*v2.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        };

        drawRightAngle(A, B, C, 10, colorHighlight);
        drawRightAngle(A, B, D, 10, colorHighlight);
        drawRightAngle(A, C, D, 10, colorHighlight);

        // Étiquettes
        ctx.fillStyle = colorText;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D };
        const off = {
            A: { x: -12, y: 12 }, B: { x: 12, y: 12 }, C: { x: -12, y: -12 }, D: { x: 12, y: -12 }
        };
        for (let key of ['A', 'B', 'C', 'D']) {
            const p = pts[key];
            ctx.fillText(key, p.x + off[key].x, p.y + off[key].y);
        }
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Triangles ABC, ABD, ACD rectangles en A', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec I et J (ex3)
    // ============================================================
    else if (type === 'cube_ij') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        // I milieu de FB, J milieu de CD
        const I = { x: (F.x + B.x) / 2, y: (F.y + B.y) / 2 };
        const J = { x: (C.x + D.x) / 2, y: (C.y + D.y) / 2 };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false, width = 1.5) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.setLineDash([]);
        };
        // Arêtes visibles
        drawSegment(A, B, colorSegment);
        drawSegment(A, D, colorSegment);
        drawSegment(A, E, colorSegment);
        drawSegment(B, C, colorSegment);
        drawSegment(D, C, colorSegment);
        drawSegment(E, F, colorSegment);
        drawSegment(E, H, colorSegment);
        drawSegment(F, G, colorSegment);
        drawSegment(H, G, colorSegment);
        drawSegment(B, F, colorSegment);
        drawSegment(D, H, colorSegment);
        drawSegment(C, G, colorDashed, true);

        // Segment IJ en pointillé
        drawSegment(I, J, colorHighlight, true, 2);

        // Étiquettes
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const offDir = {
            A: { x: -1, y: 1 }, B: { x: 1, y: 1 }, C: { x: 1, y: 1 }, D: { x: -1, y: -1 },
            E: { x: -1, y: -1 }, F: { x: 1, y: -1 }, G: { x: 1, y: -1 }, H: { x: -1, y: -1 }
        };
        for (let key of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
            const p = pts[key];
            const off = offDir[key];
            ctx.fillText(key, p.x + off.x * 14, p.y + off.y * 8);
        }
        // I et J
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(I.x, I.y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(J.x, J.y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', I.x + 8, I.y - 6);
        ctx.fillText('J', J.x + 8, J.y - 6);

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I milieu de [FB], J milieu de [CD]', 10, 20);
    }

    // ============================================================
    // Figure : Tétraèdre régulier (ex7) – avec H orthocentre
    // ============================================================
    else if (type === 'tetraedre_regulier') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.2 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.2 };
        const D = { x: cx, y: cy - s * 1.1 };

        // H orthocentre de ABC (centre du triangle équilatéral)
        const H = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, colorCurve);
        drawSegment(A, C, colorCurve);
        drawSegment(A, D, colorCurve);
        drawSegment(B, C, colorCurve);
        drawSegment(B, D, colorCurve);
        drawSegment(C, D, colorCurve);

        // Hauteur SH (en pointillés)
        drawSegment(D, H, colorHighlight, true);

        // Points
        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' }, { p: H, label: 'H' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'H') ? -12 : 8;
            const offY = (pt.label === 'H') ? -8 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Tétraèdre régulier – H orthocentre de ABC', 10, 20);
    }

    // ============================================================
    // Figure : Tétraèdre régulier avec E et F (ex8)
    // ============================================================
    else if (type === 'tetraedre_regulier_ef') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.2 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.2 };
        const D = { x: cx, y: cy - s * 1.1 };

        // E milieu de AD, F milieu de BC
        const E = { x: (A.x + D.x) / 2, y: (A.y + D.y) / 2 };
        const F = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, colorCurve);
        drawSegment(A, C, colorCurve);
        drawSegment(A, D, colorCurve);
        drawSegment(B, C, colorCurve);
        drawSegment(B, D, colorCurve);
        drawSegment(C, D, colorCurve);

        // Segment EF en pointillé
        drawSegment(E, F, colorHighlight, true, 2);

        // Points
        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' },
            { p: E, label: 'E' }, { p: F, label: 'F' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'E' || pt.label === 'F') ? -12 : 8;
            const offY = (pt.label === 'E' || pt.label === 'F') ? -8 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('E milieu [AD], F milieu [BC]', 10, 20);
    }

    // ============================================================
    // Figure : Parallélépipède rectangle (ex6)
    // ============================================================
    else if (type === 'parallelepipede_rectangle') {
        const dx = Math.min(w, h) * 0.2;
        const dy = Math.min(w, h) * 0.08;
        const dz = Math.min(w, h) * 0.15;
        const v = Math.min(w, h) * 0.3;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes visibles
        drawSegment(A, B, colorSegment);
        drawSegment(A, D, colorSegment);
        drawSegment(A, E, colorSegment);
        drawSegment(B, C, colorSegment);
        drawSegment(D, C, colorSegment);
        drawSegment(E, F, colorSegment);
        drawSegment(E, H, colorSegment);
        drawSegment(F, G, colorSegment);
        drawSegment(H, G, colorSegment);
        drawSegment(B, F, colorSegment);
        drawSegment(D, H, colorSegment);
        drawSegment(C, G, colorDashed, true);

        // Diagonale AG en pointillé
        drawSegment(A, G, colorHighlight, true, 1.5);

        // Étiquettes
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const offDir = {
            A: { x: -1, y: 1 }, B: { x: 1, y: 1 }, C: { x: 1, y: 1 }, D: { x: -1, y: -1 },
            E: { x: -1, y: -1 }, F: { x: 1, y: -1 }, G: { x: 1, y: -1 }, H: { x: -1, y: -1 }
        };
        for (let key of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
            const p = pts[key];
            const off = offDir[key];
            ctx.fillText(key, p.x + off.x * 14, p.y + off.y * 8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Parallélépipède rectangle – AB=1, AD=√3', 10, 20);
    }

    // ============================================================
    // Figure : Points M,N,P,Q (ex12)
    // ============================================================
    else if (type === 'points_rectangle') {
        const s = Math.min(w, h) * 0.2;
        // Repère 3D oblique
        const O = { x: cx - s * 1.5, y: cy + s * 1.2 };
        const ex = { x: O.x + s * 2.5, y: O.y };
        const ey = { x: O.x, y: O.y - s * 2.0 };
        const ez = { x: O.x + s * 1.2, y: O.y - s * 1.2 };

        // Projection des points M(x,0,0), N(x,0,x), P(0,x,0), Q(0,x,x)
        // On prend x = 0.5 pour l'affichage (au milieu)
        const x = 0.5;
        const M = { x: O.x + x * (ex.x - O.x), y: O.y + x * (ex.y - O.y) };
        const N = { x: M.x + x * (ez.x - O.x), y: M.y + x * (ez.y - O.y) };
        const P = { x: O.x + x * (ey.x - O.x), y: O.y + x * (ey.y - O.y) };
        const Q = { x: P.x + x * (ez.x - O.x), y: P.y + x * (ez.y - O.y) };

        // Axes
        const drawArrow = (from, to, color = colorAxis, label) => {
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, to.x + 12, to.y - 6);
        };
        drawArrow(O, ex, colorAxis, 'x');
        drawArrow(O, ey, colorAxis, 'y');
        drawArrow(O, ez, colorAxis, 'z');
        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('O', O.x - 14, O.y + 16);

        // Quadrilatère M-N-Q-P
        const drawQuad = (p1, p2, p3, p4, color = colorCurve, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.closePath();
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
            // Remplissage léger
            ctx.fillStyle = isDark ? 'rgba(96,165,250,0.08)' : 'rgba(37,99,235,0.08)';
            ctx.fill();
        };
        drawQuad(M, N, Q, P, colorHighlight);

        // Points
        const pts = [
            { p: M, label: 'M' }, { p: N, label: 'N' }, { p: P, label: 'P' }, { p: Q, label: 'Q' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(pt.label, pt.p.x + 8, pt.p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('M(x,0,0), N(x,0,x), P(0,x,0), Q(0,x,x)', 10, 20);
    }

    // ============================================================
    // Figure : Distance d'un point à une droite (ex13)
    // ============================================================
    else if (type === 'distance_droite') {
        const s = Math.min(w, h) * 0.3;
        // On place A, B et la droite D
        const A = { x: cx - s * 0.6, y: cy + s * 0.4 };
        const B = { x: cx + s * 0.7, y: cy - s * 0.2 };
        // Direction u
        const u = { x: 1, y: -1.5 };
        const norm = Math.sqrt(u.x*u.x + u.y*u.y);
        const du = { x: u.x / norm * s * 0.6, y: u.y / norm * s * 0.6 };
        const D1 = { x: A.x - du.x * 1.5, y: A.y - du.y * 1.5 };
        const D2 = { x: A.x + du.x * 1.5, y: A.y + du.y * 1.5 };

        // Projeté H de B sur la droite
        const t = ((B.x - A.x)*du.x + (B.y - A.y)*du.y) / (du.x*du.x + du.y*du.y);
        const H = { x: A.x + t * du.x, y: A.y + t * du.y };

        // Droite
        ctx.beginPath();
        ctx.moveTo(D1.x, D1.y);
        ctx.lineTo(D2.x, D2.y);
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.stroke();
        // Flèche sur la droite
        const mid = { x: (D1.x + D2.x) / 2, y: (D1.y + D2.y) / 2 };
        ctx.fillStyle = colorCurve;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('→', mid.x + 8, mid.y - 6);

        // Segment BH (perpendiculaire)
        ctx.beginPath();
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Marquer l'angle droit en H
        const size = 6;
        const v1 = { x: (B.x - H.x), y: (B.y - H.y) };
        const v2 = { x: (D2.x - D1.x), y: (D2.y - D1.y) };
        const n1 = size / Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        const n2 = size / Math.sqrt(v2.x*v2.x + v2.y*v2.y);
        const p = { x: H.x + n1*v1.x + n2*v2.x, y: H.y + n1*v1.y + n2*v2.y };
        ctx.beginPath();
        ctx.moveTo(H.x + n1*v1.x, H.y + n1*v1.y);
        ctx.lineTo(p.x, p.y);
        ctx.lineTo(H.x + n2*v2.x, H.y + n2*v2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Points
        const pts = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: H, label: 'H' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(pt.label, pt.p.x + 8, pt.p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H projeté orthogonal de B sur (A,u)', 10, 20);
    }
    
        // ============================================================
    // Figure : Tétraèdre avec milieux E,F,G,H (ex14)
    // ============================================================
    else if (type === 'tetraedre_milieux') {
        const s = Math.min(w, h) * 0.3;
        const A = { x: cx, y: cy + s };
        const B = { x: cx - s * 0.8, y: cy - s * 0.2 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.2 };
        const D = { x: cx, y: cy - s * 1.1 };

        // Milieux
        const E = { x: (A.x + D.x) / 2, y: (A.y + D.y) / 2 };
        const F = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        const G = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const H = { x: (C.x + D.x) / 2, y: (C.y + D.y) / 2 };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (dashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, colorCurve);
        drawSegment(A, C, colorCurve);
        drawSegment(A, D, colorCurve);
        drawSegment(B, C, colorCurve);
        drawSegment(B, D, colorCurve);
        drawSegment(C, D, colorCurve);

        // Segments EF et GH en pointillé
        drawSegment(E, F, colorHighlight, true, 2);
        drawSegment(G, H, colorHighlight, true, 2);

        // Points
        const points = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' },
            { p: E, label: 'E' }, { p: F, label: 'F' }, { p: G, label: 'G' }, { p: H, label: 'H' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'E' || pt.label === 'F' || pt.label === 'G' || pt.label === 'H') ? -10 : 8;
            const offY = (pt.label === 'E' || pt.label === 'F' || pt.label === 'G' || pt.label === 'H') ? -6 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('E milieu [AD], F milieu [BC], G milieu [AB], H milieu [CD]', 10, 20);
    }
}
// ============================================================
// Dessin des figures canvas – Chapitre 4
// À intégrer dans drawFigures() après drawChapter3Figures
// ============================================================
function drawChapter4Figures(ctx, type, w, h, cx, cy, isDark) {
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';

    // ============================================================
    // Figure : Cube avec 6 milieux (exercice 12 – PDF n°13)
    // ============================================================
    if (type === 'cube_milieux') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        // Arêtes
        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4, 4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };
        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // Points milieux (définis dans l'énoncé)
        // I milieu AD, J milieu BC, K milieu DD', L milieu CC'
        // M milieu A'D', N milieu A'B', O centre du cube
        // On place A' en E, B' en F, C' en G, D' en H
        const I = { x: (A.x + D.x) / 2, y: (A.y + D.y) / 2 };
        const J = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        const K = { x: (D.x + H.x) / 2, y: (D.y + H.y) / 2 };
        const L = { x: (C.x + G.x) / 2, y: (C.y + G.y) / 2 };
        const M = { x: (E.x + H.x) / 2, y: (E.y + H.y) / 2 };
        const N = { x: (E.x + F.x) / 2, y: (E.y + F.y) / 2 };
        const O = { x: (A.x + G.x) / 2, y: (A.y + G.y) / 2 };

        // Dessiner tous les points marqués
        const pts = { I, J, K, L, M, N, O };
        ctx.fillStyle = colorPoint;
        Object.keys(pts).forEach(key => {
            const p = pts[key];
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(key, p.x + 6, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Étiquettes des sommets
        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        const sommets = { A, B, C, D, E, F, G, H };
        const offDir = {
            A: { x: -1, y: 1 }, B: { x: 1, y: 1 }, C: { x: 1, y: 1 }, D: { x: -1, y: -1 },
            E: { x: -1, y: -1 }, F: { x: 1, y: -1 }, G: { x: 1, y: -1 }, H: { x: -1, y: -1 }
        };
        for (let key of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
            const p = sommets[key];
            const off = offDir[key];
            ctx.fillText(key, p.x + off.x * 14, p.y + off.y * 8);
        }

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec les milieux I, J, K, L, M, N, O', 10, 20);
    }

    // ============================================================
    // Figure : Points dans le plan Oxy (exercice 15 – PDF n°16)
    // ============================================================
    else if (type === 'points_plan_xy') {
        const margin = 40;
        const W = w - 2 * margin;
        const H = h - 2 * margin;
        const scale = Math.min(W, H) / 6; // pour aller jusqu'à ~5

        // Origine en bas à gauche (pour respecter les axes)
        const O = { x: margin + 0.5 * scale, y: h - margin - 0.5 * scale };

        // Fonction de projection (coordonnées 2D, z=0)
        const px = (x, y) => O.x + x * scale;
        const py = (x, y) => O.y - y * scale;

        // Points
        const pts = [
            { x: 1, y: 3, label: 'A' },
            { x: 3, y: 1, label: 'B' },
            { x: 4, y: 4, label: 'C / D / J' }, // C, D, J sont confondus
            { x: 14/5, y: 18/5, label: 'I' },
            { x: 18/5, y: 14/5, label: 'L' }
        ];

        // Axes
        ctx.strokeStyle = colorAxis;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(margin, O.y);
        ctx.lineTo(w - margin, O.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(O.x, margin);
        ctx.lineTo(O.x, h - margin);
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('x', w - margin + 4, O.y + 4);
        ctx.fillText('y', O.x + 4, margin - 4);
        ctx.fillText('O', O.x - 16, O.y + 16);

        // Points
        ctx.fillStyle = colorPoint;
        pts.forEach(p => {
            const xp = px(p.x, p.y);
            const yp = py(p.x, p.y);
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('C, D et J sont confondus en (4,4)', 10, 20);
    }
// ============================================================
// Figure : Position relative d'une droite et d'un plan (ex10)
// ============================================================
else if (type === 'position_relative') {
    const s = Math.min(w, h) * 0.25;
    // Dessiner un plan en perspective (un parallélogramme)
    const P1 = { x: cx - s * 1.8, y: cy + s * 0.6 };
    const P2 = { x: cx + s * 1.8, y: cy + s * 0.6 };
    const P3 = { x: cx + s * 1.2, y: cy - s * 0.8 };
    const P4 = { x: cx - s * 1.2, y: cy - s * 0.8 };
    // Tracer le plan (avec une face semi-transparente)
    ctx.beginPath();
    ctx.moveTo(P1.x, P1.y);
    ctx.lineTo(P2.x, P2.y);
    ctx.lineTo(P3.x, P3.y);
    ctx.lineTo(P4.x, P4.y);
    ctx.closePath();
    ctx.fillStyle = isDark ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.08)';
    ctx.fill();
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Droite qui coupe le plan
    // On choisit un point A sur le plan et un vecteur directeur u
    const A = { x: cx - s * 0.5, y: cy - s * 0.2 };
    const u = { x: 1.2, y: -0.8 };
    const len = Math.sqrt(u.x*u.x + u.y*u.y);
    const normU = { x: u.x / len, y: u.y / len };
    const ext = s * 1.8;
    const D1 = { x: A.x - normU.x * ext, y: A.y - normU.y * ext };
    const D2 = { x: A.x + normU.x * ext, y: A.y + normU.y * ext };
    ctx.beginPath();
    ctx.moveTo(D1.x, D1.y);
    ctx.lineTo(D2.x, D2.y);
    ctx.strokeStyle = colorHighlight;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Marquer le point d'intersection (sur le plan, sur la droite)
    ctx.fillStyle = colorPoint;
    ctx.beginPath();
    ctx.arc(A.x, A.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('I', A.x + 8, A.y - 6);

    // Étiquettes
    ctx.fillStyle = colorText;
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Plan P', P4.x - 10, P4.y - 6);
    ctx.fillText('Droite D', D2.x + 6, D2.y + 6);

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Droite et plan sécants (déterminant ≠ 0)', 10, 20);
}
}
// ============================================================
// Dessin des figures canvas – Chapitre 5 (Produit vectoriel)
// À intégrer dans drawFigures() après drawChapter4Figures
// ============================================================
function drawChapter5Figures(ctx, type, w, h, cx, cy, isDark) {
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorNormal = isDark ? '#a78bfa' : '#7c3aed';

    // ============================================================
    // Figure : Triangle ABC (exercices 2, 9, 10)
    // ============================================================
    if (type === 'triangle_abc') {
        const s = Math.min(w, h) * 0.25;
        // Placer A, B, C de façon à former un triangle quelconque
        const A = { x: cx - s * 0.5, y: cy + s * 0.5 };
        const B = { x: cx + s * 1.2, y: cy + s * 0.2 };
        const C = { x: cx - s * 0.2, y: cy - s * 0.9 };

        // Dessiner le triangle
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.08)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Étiquettes
        const pts = { A, B, C };
        const off = {
            A: { x: -12, y: 12 },
            B: { x: 12, y: 12 },
            C: { x: -12, y: -12 }
        };
        ctx.fillStyle = colorText;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        for (let key of ['A', 'B', 'C']) {
            const p = pts[key];
            ctx.fillText(key, p.x + off[key].x, p.y + off[key].y);
        }

        // Marquer les points
        ctx.fillStyle = colorPoint;
        for (let key of ['A', 'B', 'C']) {
            const p = pts[key];
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Triangle ABC', 10, 20);
        ctx.fillText('(non alignés)', 10, 34);
    }

    // ============================================================
    // Figure : Distance d'un point à une droite (exercice 3)
    // Reprise de la figure du chapitre 3, mais avec des couleurs adaptées
    // ============================================================
    else if (type === 'distance_droite') {
        const s = Math.min(w, h) * 0.3;
        // On place A, B et la droite D
        const A = { x: cx - s * 0.6, y: cy + s * 0.4 };
        const B = { x: cx + s * 0.7, y: cy - s * 0.2 };
        // Direction u
        const u = { x: 1, y: -1.5 };
        const norm = Math.sqrt(u.x*u.x + u.y*u.y);
        const du = { x: u.x / norm * s * 0.6, y: u.y / norm * s * 0.6 };
        const D1 = { x: A.x - du.x * 1.5, y: A.y - du.y * 1.5 };
        const D2 = { x: A.x + du.x * 1.5, y: A.y + du.y * 1.5 };

        // Projeté H de B sur la droite
        const t = ((B.x - A.x)*du.x + (B.y - A.y)*du.y) / (du.x*du.x + du.y*du.y);
        const H = { x: A.x + t * du.x, y: A.y + t * du.y };

        // Droite
        ctx.beginPath();
        ctx.moveTo(D1.x, D1.y);
        ctx.lineTo(D2.x, D2.y);
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.stroke();
        // Flèche sur la droite
        const mid = { x: (D1.x + D2.x) / 2, y: (D1.y + D2.y) / 2 };
        ctx.fillStyle = colorCurve;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('→', mid.x + 8, mid.y - 6);

        // Segment BH (perpendiculaire)
        ctx.beginPath();
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Marquer l'angle droit en H
        const size = 6;
        const v1 = { x: (B.x - H.x), y: (B.y - H.y) };
        const v2 = { x: (D2.x - D1.x), y: (D2.y - D1.y) };
        const n1 = size / Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        const n2 = size / Math.sqrt(v2.x*v2.x + v2.y*v2.y);
        const p = { x: H.x + n1*v1.x + n2*v2.x, y: H.y + n1*v1.y + n2*v2.y };
        ctx.beginPath();
        ctx.moveTo(H.x + n1*v1.x, H.y + n1*v1.y);
        ctx.lineTo(p.x, p.y);
        ctx.lineTo(H.x + n2*v2.x, H.y + n2*v2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Points
        const pts = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: H, label: 'H' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(pt.label, pt.p.x + 8, pt.p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H projeté orthogonal de B sur (A,u)', 10, 20);
        ctx.fillText('Distance = BH', 10, 34);
    }
}
// ============================================================
// Dessin des figures canvas – Chapitre 6 (Orthogonalité et Vecteurs Normaux)
// À intégrer dans drawFigures() après drawChapter5Figures
// ============================================================
function drawChapter6Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorNormal = isDark ? '#a78bfa' : '#7c3aed';

    // ============================================================
    // Figure : Deux plans perpendiculaires (ex 8)
    // ============================================================
    if (type === 'plans_perpendiculaires') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2 * s };

        // Plan P1 (x - y + z = 2) → parallélogramme incliné
        const p1 = [
            { x: O.x - 1.8*s, y: O.y + 0.8*s },
            { x: O.x + 1.8*s, y: O.y + 0.8*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p1[0].x, p1[0].y);
        for (let i = 1; i < p1.length; i++) ctx.lineTo(p1[i].x, p1[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p1[0].x - 10, p1[0].y - 10);

        // Plan P2 (2x + y - z + 2 = 0) – perpendiculaire au premier
        const p2 = [
            { x: O.x - 1.2*s, y: O.y - 0.6*s },
            { x: O.x + 0.8*s, y: O.y - 1.8*s },
            { x: O.x + 2.0*s, y: O.y + 0.6*s },
            { x: O.x + 0.0*s, y: O.y + 2.0*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p2[0].x, p2[0].y);
        for (let i = 1; i < p2.length; i++) ctx.lineTo(p2[i].x, p2[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(167,139,250,0.12)' : 'rgba(124,58,237,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText("P'", p2[0].x - 10, p2[0].y - 10);

        // Marquer un angle droit symbolique entre les deux plans
        const center = {
            x: (p1[0].x + p1[2].x + p2[0].x + p2[2].x) / 4,
            y: (p1[0].y + p1[2].y + p2[0].y + p2[2].y) / 4
        };
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 12, 0, Math.PI/2);
        ctx.stroke();

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Plans perpendiculaires (normales orthogonales)', 10, 20);
    }

    // ============================================================
    // Figure : Distance d'un point à un plan (ex 9)
    // ============================================================
    else if (type === 'distance_plan') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.3*s };

        // Plan P : x - 2y + z + 7 = 0
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i = 1; i < p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Point A (hors plan)
        const A = { x: O.x - 1.2*s, y: O.y - 0.8*s };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Projeté orthogonal H sur le plan
        const H = { x: A.x + 0.3*s, y: A.y + 0.8*s };
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Angle droit en H
        const size = 6;
        const v1 = { x: (A.x - H.x), y: (A.y - H.y) };
        const v2 = { x: (p[1].x - p[0].x), y: (p[1].y - p[0].y) };
        const n1 = size / Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        const n2 = size / Math.sqrt(v2.x*v2.x + v2.y*v2.y);
        const P = { x: H.x + n1*v1.x + n2*v2.x, y: H.y + n1*v1.y + n2*v2.y };
        ctx.beginPath();
        ctx.moveTo(H.x + n1*v1.x, H.y + n1*v1.y);
        ctx.lineTo(P.x, P.y);
        ctx.lineTo(H.x + n2*v2.x, H.y + n2*v2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H', H.x + 8, H.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Distance AH (projeté orthogonal)', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec plan (ex 11) – plan (CFH) et milieux I,J
    // ============================================================
    else if (type === 'cube_plan') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du cube
        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // Triangle (CFH) en surbrillance
        ctx.beginPath();
        ctx.moveTo(C.x, C.y);
        ctx.lineTo(F.x, F.y);
        ctx.lineTo(H.x, H.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.15)' : 'rgba(234,179,8,0.15)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Points I et J (milieux de AB et BC)
        const I = { x: (A.x+B.x)/2, y: (A.y+B.y)/2 };
        const J = { x: (B.x+C.x)/2, y: (B.y+C.y)/2 };
        ctx.fillStyle = colorPoint;
        [I, J].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', I.x+6, I.y-6);
        ctx.fillText('J', J.x+6, J.y-6);

        // Étiquettes sommets
        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const off = { A:[-1,1], B:[1,1], C:[1,1], D:[-1,-1], E:[-1,-1], F:[1,-1], G:[1,-1], H:[-1,-1] };
        for (let key of ['A','B','C','D','E','F','G','H']) {
            const p = pts[key];
            const o = off[key];
            ctx.fillText(key, p.x + o[0]*14, p.y + o[1]*8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec plan (CFH) et milieux I,J', 10, 20);
    }

    // ============================================================
    // Figure : Distance d'un point à une droite (ex 12)
    // Droite D, plan P perpendiculaire, intersection H, distance BH
    // ============================================================
    else if (type === 'distance_droite_plan') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Point A et direction u de la droite D
        const A = { x: O.x - 1.2*s, y: O.y + 0.6*s };
        const u = { x: 1.0, y: -0.8 };
        const len = Math.sqrt(u.x*u.x + u.y*u.y);
        const normU = { x: u.x/len, y: u.y/len };
        const ext = 1.8*s;
        const D1 = { x: A.x - normU.x*ext, y: A.y - normU.y*ext };
        const D2 = { x: A.x + normU.x*ext, y: A.y + normU.y*ext };

        // Point B (hors plan)
        const B = { x: O.x + 0.8*s, y: O.y - 1.0*s };

        // Plan P : perpendiculaire à D passant par B
        // Sa normale est u. On dessine un parallélogramme passant par B.
        const perp1 = { x: -normU.y, y: normU.x };
        const size = 1.2*s;
        const p = [
            { x: B.x - size*perp1.x - size*normU.x, y: B.y - size*perp1.y - size*normU.y },
            { x: B.x + size*perp1.x - size*normU.x, y: B.y + size*perp1.y - size*normU.y },
            { x: B.x + size*perp1.x + size*normU.x, y: B.y + size*perp1.y + size*normU.y },
            { x: B.x - size*perp1.x + size*normU.x, y: B.y - size*perp1.y + size*normU.y }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Point B
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(B.x, B.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('B', B.x + 8, B.y - 6);

        // Droite D
        ctx.beginPath();
        ctx.moveTo(D1.x, D1.y);
        ctx.lineTo(D2.x, D2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('D', D2.x + 12, D2.y - 6);

        // Point H = intersection de D et P (projeté orthogonal de B sur D)
        const t = ((B.x - A.x)*normU.x + (B.y - A.y)*normU.y);
        const H = { x: A.x + t*normU.x, y: A.y + t*normU.y };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(H.x, H.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H', H.x + 8, H.y - 6);

        // Segment BH (perpendiculaire)
        ctx.beginPath();
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 2;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Angle droit en H
        const size2 = 6;
        const v1 = { x: (B.x - H.x), y: (B.y - H.y) };
        const v2 = { x: (D2.x - D1.x), y: (D2.y - D1.y) };
        const n1b = size2 / Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        const n2b = size2 / Math.sqrt(v2.x*v2.x + v2.y*v2.y);
        const P2 = { x: H.x + n1b*v1.x + n2b*v2.x, y: H.y + n1b*v1.y + n2b*v2.y };
        ctx.beginPath();
        ctx.moveTo(H.x + n1b*v1.x, H.y + n1b*v1.y);
        ctx.lineTo(P2.x, P2.y);
        ctx.lineTo(H.x + n2b*v2.x, H.y + n2b*v2.y);
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Distance BH (projeté orthogonal sur D)', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec plan (ex 11) – version alternative avec plan (IJG)
    // (optionnel, peut être utilisée si besoin)
    // ============================================================
    else if (type === 'cube_plan_ijg') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // I milieu AB, J milieu BC
        const I = { x: (A.x+B.x)/2, y: (A.y+B.y)/2 };
        const J = { x: (B.x+C.x)/2, y: (B.y+C.y)/2 };

        // Plan (IJG) : triangle I-J-G
        ctx.beginPath();
        ctx.moveTo(I.x, I.y);
        ctx.lineTo(J.x, J.y);
        ctx.lineTo(G.x, G.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.15)' : 'rgba(234,179,8,0.15)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Points I, J
        ctx.fillStyle = colorPoint;
        [I, J].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', I.x+6, I.y-6);
        ctx.fillText('J', J.x+6, J.y-6);

        // Étiquettes
        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const off = { A:[-1,1], B:[1,1], C:[1,1], D:[-1,-1], E:[-1,-1], F:[1,-1], G:[1,-1], H:[-1,-1] };
        for (let key of ['A','B','C','D','E','F','G','H']) {
            const p = pts[key];
            const o = off[key];
            ctx.fillText(key, p.x + o[0]*14, p.y + o[1]*8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec plan (IJG) – I milieu AB, J milieu BC', 10, 20);
    }
}
// ============================================================
// Dessin des figures canvas – Chapitre 7 (Représentations paramétriques)
// À intégrer dans drawFigures() après drawChapter6Figures
// ============================================================
function drawChapter7Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorNormal = isDark ? '#a78bfa' : '#7c3aed';

    // ============================================================
    // Figure : trois droites paramétriques (ex 9)
    // ============================================================
    if (type === 'droites_param') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx, y: cy + 0.2 * s };

        // Trois droites passant par des points de départ différents
        const droites = [
            { start: { x: O.x - 1.8*s, y: O.y + 0.6*s }, dir: { x: 1.2, y: -0.8 }, label: 'D1' },
            { start: { x: O.x - 0.5*s, y: O.y + 1.2*s }, dir: { x: 0.6, y: -1.2 }, label: 'D2' },
            { start: { x: O.x + 0.8*s, y: O.y - 0.6*s }, dir: { x: -0.8, y: 0.4 }, label: 'D3' }
        ];

        ctx.lineWidth = 2;
        droites.forEach((d, i) => {
            const ext = 2.0 * s;
            const norm = Math.sqrt(d.dir.x*d.dir.x + d.dir.y*d.dir.y);
            const u = { x: d.dir.x/norm, y: d.dir.y/norm };
            const p1 = { x: d.start.x - u.x * ext, y: d.start.y - u.y * ext };
            const p2 = { x: d.start.x + u.x * ext, y: d.start.y + u.y * ext };
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = (i === 0) ? colorCurve : (i === 1) ? colorHighlight : colorNormal;
            ctx.stroke();
            // Point de départ
            ctx.fillStyle = colorPoint;
            ctx.beginPath();
            ctx.arc(d.start.x, d.start.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(d.label, d.start.x + 8, d.start.y - 6);
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Trois droites paramétriques (exercice 9)', 10, 20);
    }

    // ============================================================
    // Figure : Plans paramétriques (ex 10)
    // ============================================================
    else if (type === 'plans_param') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx, y: cy + 0.2 * s };

        // Plan 1 (ABC) : on dessine un parallélogramme
        const p1 = [
            { x: O.x - 1.6*s, y: O.y + 0.8*s },
            { x: O.x + 1.6*s, y: O.y + 0.8*s },
            { x: O.x + 1.2*s, y: O.y - 0.8*s },
            { x: O.x - 1.2*s, y: O.y - 0.8*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p1[0].x, p1[0].y);
        for (let i=1; i<p1.length; i++) ctx.lineTo(p1[i].x, p1[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P = (ABC)', p1[0].x - 10, p1[0].y - 10);

        // Plan 2 (passant par C, directeurs AB et AB+AC)
        const p2 = [
            { x: O.x - 0.8*s, y: O.y - 0.6*s },
            { x: O.x + 0.8*s, y: O.y - 1.8*s },
            { x: O.x + 2.0*s, y: O.y + 0.2*s },
            { x: O.x + 0.4*s, y: O.y + 1.8*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p2[0].x, p2[0].y);
        for (let i=1; i<p2.length; i++) ctx.lineTo(p2[i].x, p2[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(167,139,250,0.12)' : 'rgba(124,58,237,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText("Q", p2[0].x - 10, p2[0].y - 10);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Plans paramétriques P=(ABC) et Q (exercice 10)', 10, 20);
    }

    // ============================================================
    // Figure : Plan défini par un point et une droite (ex 11)
    // ============================================================
    else if (type === 'plan_point_droite') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2 * s };

        // Point A
        const A = { x: O.x - 1.2*s, y: O.y + 0.8*s };
        // Droite Δ passant par B(1,-2,3) direction (1,1,-1) – on projette en 2D
        const B = { x: O.x - 0.2*s, y: O.y - 0.6*s };
        const dir = { x: 1.2, y: -0.6 };
        const norm = Math.sqrt(dir.x*dir.x + dir.y*dir.y);
        const u = { x: dir.x/norm, y: dir.y/norm };
        const ext = 2.0 * s;
        const D1 = { x: B.x - u.x*ext, y: B.y - u.y*ext };
        const D2 = { x: B.x + u.x*ext, y: B.y + u.y*ext };

        // Tracer la droite
        ctx.beginPath();
        ctx.moveTo(D1.x, D1.y);
        ctx.lineTo(D2.x, D2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Δ', D2.x + 12, D2.y - 6);

        // Point A
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Segment AB (pour montrer le plan)
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.strokeStyle = colorSegment;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Représenter le plan par un parallélogramme passant par A et B, direction de la droite
        const vec = { x: B.x - A.x, y: B.y - A.y };
        const perp = { x: -vec.y, y: vec.x };
        const n = Math.sqrt(perp.x*perp.x + perp.y*perp.y);
        const v = { x: perp.x/n * 0.8*s, y: perp.y/n * 0.8*s };
        const p = [
            { x: A.x - v.x, y: A.y - v.y },
            { x: A.x + v.x, y: A.y + v.y },
            { x: B.x + v.x, y: B.y + v.y },
            { x: B.x - v.x, y: B.y - v.y }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Point B (sur la droite)
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(B.x, B.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('B', B.x + 8, B.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Plan défini par A et Δ (exercice 11)', 10, 20);
    }

    // ============================================================
    // Figure : Plan à partir d'une équation (ex 12)
    // ============================================================
    else if (type === 'plan_param_eq') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2 * s };

        // Plan x - y + z - 3 = 0 → on dessine un plan oblique
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P : x - y + z - 3 = 0', p[0].x - 10, p[0].y - 10);

        // Points A, B, C (sur le plan)
        const A = { x: O.x - 0.8*s, y: O.y - 0.2*s };
        const B = { x: O.x + 1.2*s, y: O.y + 0.4*s };
        const C = { x: O.x - 0.2*s, y: O.y + 0.8*s };
        const pts = [A, B, C];
        const labels = ['A', 'B', 'C'];
        ctx.fillStyle = colorPoint;
        pts.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(labels[i], p.x + 8, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Plan donné par son équation (exercice 12)', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec plan MNP et intersection avec AE (ex 13)
    // ============================================================
    else if (type === 'cube_intersection_ae') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // Points M, N, P (définis dans l'exercice)
        // M sur CD, N sur DH, P sur BF
        const M = { x: C.x + 0.25*(D.x - C.x), y: C.y + 0.25*(D.y - C.y) };
        const N = { x: D.x + 0.25*(H.x - D.x), y: D.y + 0.25*(H.y - D.y) };
        const P = { x: B.x + 0.25*(F.x - B.x), y: B.y + 0.25*(F.y - B.y) };

        // Tracer le triangle MNP
        ctx.beginPath();
        ctx.moveTo(M.x, M.y);
        ctx.lineTo(N.x, N.y);
        ctx.lineTo(P.x, P.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.15)' : 'rgba(234,179,8,0.15)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Marquer les points M, N, P
        ctx.fillStyle = colorPoint;
        [M, N, P].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('M', M.x+6, M.y-6);
        ctx.fillText('N', N.x+6, N.y-6);
        ctx.fillText('P', P.x+6, P.y-6);

        // Droite AE (en pointillé)
        drawEdge(A, E, colorNormal, true);

        // Étiquettes sommets
        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const off = { A:[-1,1], B:[1,1], C:[1,1], D:[-1,-1], E:[-1,-1], F:[1,-1], G:[1,-1], H:[-1,-1] };
        for (let key of ['A','B','C','D','E','F','G','H']) {
            const p = pts[key];
            const o = off[key];
            ctx.fillText(key, p.x + o[0]*14, p.y + o[1]*8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec plan (MNP) et AE (exercice 13)', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec section hexagonale (ex 15)
    // ============================================================
    else if (type === 'cube_section_hexagone') {
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        // On prend x = 0.5 pour l'affichage (milieu)
        const x = 0.5;
        const I = { x: A.x + x*(B.x - A.x), y: A.y + x*(B.y - A.y) };
        const J = { x: B.x + x*(C.x - B.x), y: B.y + x*(C.y - B.y) };
        const K = { x: C.x + x*(G.x - C.x), y: C.y + x*(G.y - C.y) };
        const L = { x: G.x + (1-x)*(H.x - G.x), y: G.y + (1-x)*(H.y - G.y) };
        const M = { x: H.x + (1-x)*(E.x - H.x), y: H.y + (1-x)*(E.y - H.y) };
        const N = { x: E.x + (1-x)*(A.x - E.x), y: E.y + (1-x)*(A.y - E.y) };

        // Tracer l'hexagone
        ctx.beginPath();
        ctx.moveTo(I.x, I.y);
        ctx.lineTo(J.x, J.y);
        ctx.lineTo(K.x, K.y);
        ctx.lineTo(L.x, L.y);
        ctx.lineTo(M.x, M.y);
        ctx.lineTo(N.x, N.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.2)' : 'rgba(234,179,8,0.15)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Marquer les sommets
        ctx.fillStyle = colorPoint;
        [I, J, K, L, M, N].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '9px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', I.x+6, I.y-6);
        ctx.fillText('J', J.x+6, J.y-6);
        ctx.fillText('K', K.x+6, K.y-6);
        ctx.fillText('L', L.x+6, L.y-6);
        ctx.fillText('M', M.x+6, M.y-6);
        ctx.fillText('N', N.x+6, N.y-6);

        // Arêtes du cube (en traits fins)
        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);
        };
        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // Étiquettes sommets
        ctx.fillStyle = colorText;
        ctx.font = '9px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const off = { A:[-1,1], B:[1,1], C:[1,1], D:[-1,-1], E:[-1,-1], F:[1,-1], G:[1,-1], H:[-1,-1] };
        for (let key of ['A','B','C','D','E','F','G','H']) {
            const p = pts[key];
            const o = off[key];
            ctx.fillText(key, p.x + o[0]*14, p.y + o[1]*8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec section hexagonale (exercice 15)', 10, 20);
    }
}

// ============================================================
// Dessin des figures canvas – Chapitre 8 (Équations cartésiennes)
// À intégrer dans drawFigures() après drawChapter7Figures
// ============================================================
function drawChapter8Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorNormal = isDark ? '#a78bfa' : '#7c3aed';
    const colorDashed = isDark ? '#64748b' : '#94a3b8';

    // ============================================================
    // Figure : Droite et plan sécants (ex 9) – point d'intersection
    // ============================================================
    if (type === 'droite_plan_intersection') {
        const s = Math.min(w, h) * 0.22;
        const O = { x: cx, y: cy + 0.2 * s };

        // Plan P : x + y - z + 2 = 0 → on le représente comme un parallélogramme
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.08)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Droite D : x = 1+t, y = 2-t, z = 3+2t
        // On choisit un point A sur la droite et un vecteur directeur
        const A = { x: O.x - 0.4*s, y: O.y - 0.2*s };
        const u = { x: 1.2, y: -0.6 };
        const norm = Math.sqrt(u.x*u.x + u.y*u.y);
        const dir = { x: u.x/norm, y: u.y/norm };
        const ext = 2.0 * s;
        const D1 = { x: A.x - dir.x*ext, y: A.y - dir.y*ext };
        const D2 = { x: A.x + dir.x*ext, y: A.y + dir.y*ext };
        ctx.beginPath();
        ctx.moveTo(D1.x, D1.y);
        ctx.lineTo(D2.x, D2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('D', D2.x + 12, D2.y - 6);

        // Point d'intersection M (sur le plan et sur la droite)
        const M = { x: A.x + 0.3*dir.x*s, y: A.y + 0.3*dir.y*s };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(M.x, M.y, 6, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('M', M.x + 8, M.y - 6);

        // Marquer le point A (origine de la droite)
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Droite D sécante au plan P (exercice 9)', 10, 20);
    }

    // ============================================================
    // Figure : Droites parallèles et plan les contenant (ex 10)
    // ============================================================
    else if (type === 'droites_paralleles_plan') {
        const s = Math.min(w, h) * 0.22;
        const O = { x: cx, y: cy + 0.2 * s };

        // Deux droites parallèles distinctes
        const A = { x: O.x - 1.4*s, y: O.y + 0.6*s };
        const B = { x: O.x - 0.6*s, y: O.y - 0.8*s };
        const dir = { x: 0.8, y: 0.3 };
        const norm = Math.sqrt(dir.x*dir.x + dir.y*dir.y);
        const u = { x: dir.x/norm, y: dir.y/norm };
        const ext = 2.2 * s;

        // Droite Δ passant par A
        const d1A = { x: A.x - u.x*ext, y: A.y - u.y*ext };
        const d1B = { x: A.x + u.x*ext, y: A.y + u.y*ext };
        ctx.beginPath();
        ctx.moveTo(d1A.x, d1A.y);
        ctx.lineTo(d1B.x, d1B.y);
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorCurve;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Δ', d1B.x + 12, d1B.y - 6);

        // Droite Δ' passant par B
        const d2A = { x: B.x - u.x*ext, y: B.y - u.y*ext };
        const d2B = { x: B.x + u.x*ext, y: B.y + u.y*ext };
        ctx.beginPath();
        ctx.moveTo(d2A.x, d2A.y);
        ctx.lineTo(d2B.x, d2B.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("Δ'", d2B.x + 12, d2B.y - 6);

        // Plan contenant les deux droites (parallélogramme)
        const perp = { x: -u.y, y: u.x };
        const v = { x: perp.x * 0.6*s, y: perp.y * 0.6*s };
        const p = [
            { x: A.x - v.x, y: A.y - v.y },
            { x: A.x + v.x, y: A.y + v.y },
            { x: B.x + v.x, y: B.y + v.y },
            { x: B.x - v.x, y: B.y - v.y }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(167,139,250,0.10)' : 'rgba(124,58,237,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Points A et B
        ctx.fillStyle = colorPoint;
        [A, B].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);
        ctx.fillText('B', B.x + 8, B.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Droites parallèles Δ et Δ\' (exercice 10)', 10, 20);
    }

    // ============================================================
    // Figure : Droites coplanaires et plan les contenant (ex 11)
    // ============================================================
    else if (type === 'droites_coplanaires_plan') {
        const s = Math.min(w, h) * 0.22;
        const O = { x: cx, y: cy + 0.2 * s };

        // Deux droites sécantes (coplanaires)
        const A = { x: O.x - 0.8*s, y: O.y + 0.4*s };
        const B = { x: O.x + 1.0*s, y: O.y - 0.8*s };
        const C = { x: O.x + 0.4*s, y: O.y - 0.2*s };

        // Droite Δ passant par A et C
        const u = { x: C.x - A.x, y: C.y - A.y };
        const norm1 = Math.sqrt(u.x*u.x + u.y*u.y);
        const u1 = { x: u.x/norm1, y: u.y/norm1 };
        const ext1 = 2.0 * s;
        const d1A = { x: A.x - u1.x*ext1, y: A.y - u1.y*ext1 };
        const d1B = { x: A.x + u1.x*ext1, y: A.y + u1.y*ext1 };
        ctx.beginPath();
        ctx.moveTo(d1A.x, d1A.y);
        ctx.lineTo(d1B.x, d1B.y);
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorCurve;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Δ', d1B.x + 12, d1B.y - 6);

        // Droite Δ' passant par B et C
        const v = { x: C.x - B.x, y: C.y - B.y };
        const norm2 = Math.sqrt(v.x*v.x + v.y*v.y);
        const v1 = { x: v.x/norm2, y: v.y/norm2 };
        const ext2 = 2.0 * s;
        const d2A = { x: B.x - v1.x*ext2, y: B.y - v1.y*ext2 };
        const d2B = { x: B.x + v1.x*ext2, y: B.y + v1.y*ext2 };
        ctx.beginPath();
        ctx.moveTo(d2A.x, d2A.y);
        ctx.lineTo(d2B.x, d2B.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("Δ'", d2B.x + 12, d2B.y - 6);

        // Plan (le triangle ABC)
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(167,139,250,0.10)' : 'rgba(124,58,237,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', A.x - 10, A.y - 10);

        // Points
        ctx.fillStyle = colorPoint;
        [A, B, C].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);
        ctx.fillText('B', B.x + 8, B.y - 6);
        ctx.fillText('C', C.x + 8, C.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Droites Δ et Δ\' coplanaires (exercice 11)', 10, 20);
    }

    // ============================================================
    // Figure : Intersection de deux plans (ex 12)
    // ============================================================
    else if (type === 'plans_intersection') {
        const s = Math.min(w, h) * 0.22;
        const O = { x: cx, y: cy + 0.2 * s };

        // Plan P1
        const p1 = [
            { x: O.x - 1.8*s, y: O.y + 0.8*s },
            { x: O.x + 1.8*s, y: O.y + 0.8*s },
            { x: O.x + 1.2*s, y: O.y - 0.8*s },
            { x: O.x - 1.2*s, y: O.y - 0.8*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p1[0].x, p1[0].y);
        for (let i=1; i<p1.length; i++) ctx.lineTo(p1[i].x, p1[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.10)' : 'rgba(37,99,235,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorCurve;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p1[0].x - 10, p1[0].y - 10);

        // Plan P2
        const p2 = [
            { x: O.x - 0.6*s, y: O.y - 0.4*s },
            { x: O.x + 0.6*s, y: O.y - 1.6*s },
            { x: O.x + 2.0*s, y: O.y - 0.2*s },
            { x: O.x + 0.8*s, y: O.y + 1.4*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p2[0].x, p2[0].y);
        for (let i=1; i<p2.length; i++) ctx.lineTo(p2[i].x, p2[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(167,139,250,0.10)' : 'rgba(124,58,237,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText("Q", p2[0].x - 10, p2[0].y - 10);

        // Droite d'intersection
        const inter1 = { x: (p1[0].x + p1[1].x + p2[0].x + p2[1].x) / 4, y: (p1[0].y + p1[1].y + p2[0].y + p2[1].y) / 4 };
        const inter2 = { x: (p1[2].x + p1[3].x + p2[2].x + p2[3].x) / 4, y: (p1[2].y + p1[3].y + p2[2].y + p2[3].y) / 4 };
        ctx.beginPath();
        ctx.moveTo(inter1.x, inter1.y);
        ctx.lineTo(inter2.x, inter2.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.fillStyle = colorHighlight;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('D', inter1.x + 8, inter1.y - 8);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Intersection de deux plans sécants (exercice 12)', 10, 20);
    }

    // ============================================================
    // Figure : Tétraèdre avec points I, J, K (ex 15)
    // ============================================================
    else if (type === 'tetraedre_ijk') {
        const s = Math.min(w, h) * 0.25;
        const A = { x: cx - 0.2*s, y: cy + s * 0.7 };
        const B = { x: cx - s * 0.8, y: cy - s * 0.2 };
        const C = { x: cx + s * 0.8, y: cy - s * 0.2 };
        const D = { x: cx + 0.2*s, y: cy - s * 1.0 };

        // Points I, J, K sur les arêtes
        // I sur AB (1/2), J sur BC (2/3), K sur CD (3/4)
        const I = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        const J = { x: B.x + (2/3)*(C.x - B.x), y: B.y + (2/3)*(C.y - B.y) };
        const K = { x: C.x + (3/4)*(D.x - C.x), y: C.y + (3/4)*(D.y - C.y) };

        const drawSegment = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        // Arêtes du tétraèdre
        drawSegment(A, B, colorCurve);
        drawSegment(A, C, colorCurve);
        drawSegment(A, D, colorCurve);
        drawSegment(B, C, colorCurve);
        drawSegment(B, D, colorCurve);
        drawSegment(C, D, colorCurve);

        // Triangle IJK
        ctx.beginPath();
        ctx.moveTo(I.x, I.y);
        ctx.lineTo(J.x, J.y);
        ctx.lineTo(K.x, K.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.15)' : 'rgba(234,179,8,0.12)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Points
        const pts = [
            { p: A, label: 'A' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' },
            { p: I, label: 'I' }, { p: J, label: 'J' }, { p: K, label: 'K' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.p.x, pt.p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'left';
            const offX = (pt.label === 'I' || pt.label === 'J' || pt.label === 'K') ? -12 : 8;
            const offY = (pt.label === 'I' || pt.label === 'J' || pt.label === 'K') ? -8 : -6;
            ctx.fillText(pt.label, pt.p.x + offX, pt.p.y + offY);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Tétraèdre avec I, J, K sur les arêtes (exercice 15)', 10, 20);
    }

    // ============================================================
    // Figure : Cube avec plan (ex 17) – déjà définie dans chapitre 6
    // On utilise le même type pour éviter la duplication
    // ============================================================
    else if (type === 'cube_plan') {
        // Cette figure est déjà définie dans drawChapter6Figures
        // On laisse le code de drawChapter6Figures gérer ce type
        // Mais pour le chapitre 8, on peut la redéfinir ici si besoin
        // Pour éviter la duplication, on va juste l'ignorer ici
        // et compter sur le fait que drawChapter6Figures est appelée avant
        // Ou on peut la définir ici complètement
        // Je redéfinis pour plus de sécurité
        const s = Math.min(w, h) * 0.22;
        const dx = s;
        const dy = s * 0.35;
        const dz = s * 0.5;
        const v = s * 0.9;

        const A = { x: cx - dx, y: cy + dy };
        const B = { x: cx + dx, y: cy + dy };
        const C = { x: cx + dx - dz, y: cy + dy - dz };
        const D = { x: cx - dx - dz, y: cy + dy - dz };
        const E = { x: cx - dx, y: cy + dy - v };
        const F = { x: cx + dx, y: cy + dy - v };
        const G = { x: cx + dx - dz, y: cy + dy - dz - v };
        const H = { x: cx - dx - dz, y: cy + dy - dz - v };

        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawEdge(A, B); drawEdge(A, D); drawEdge(A, E);
        drawEdge(B, C); drawEdge(D, C);
        drawEdge(E, F); drawEdge(E, H);
        drawEdge(F, G); drawEdge(H, G);
        drawEdge(B, F); drawEdge(D, H);
        drawEdge(C, G, colorAxis, true);

        // Triangle (CFH) en surbrillance
        ctx.beginPath();
        ctx.moveTo(C.x, C.y);
        ctx.lineTo(F.x, F.y);
        ctx.lineTo(H.x, H.y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(251,191,36,0.15)' : 'rgba(234,179,8,0.12)';
        ctx.fill();
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // I milieu de AB, J milieu de BC
        const I = { x: (A.x+B.x)/2, y: (A.y+B.y)/2 };
        const J = { x: (B.x+C.x)/2, y: (B.y+C.y)/2 };
        ctx.fillStyle = colorPoint;
        [I, J].forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
        });
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', I.x+6, I.y-6);
        ctx.fillText('J', J.x+6, J.y-6);

        ctx.fillStyle = colorText;
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        const pts = { A, B, C, D, E, F, G, H };
        const off = { A:[-1,1], B:[1,1], C:[1,1], D:[-1,-1], E:[-1,-1], F:[1,-1], G:[1,-1], H:[-1,-1] };
        for (let key of ['A','B','C','D','E','F','G','H']) {
            const p = pts[key];
            const o = off[key];
            ctx.fillText(key, p.x + o[0]*14, p.y + o[1]*8);
        }

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cube avec plan (CFH) et milieux I,J (exercice 17)', 10, 20);
    }
}
// ============================================================
// Dessin des figures canvas – Chapitre 9 (La Sphère)
// À intégrer dans drawFigures() après drawChapter8Figures
// ============================================================
function drawChapter9Figures(ctx, type, w, h, cx, cy, isDark) {
    // Couleurs adaptées au thème
    const colorAxis = isDark ? '#64748b' : '#94a3b8';
    const colorText = isDark ? '#f1f5f9' : '#1e293b';
    const colorCurve = isDark ? '#60a5fa' : '#2563eb';
    const colorPoint = isDark ? '#f87171' : '#dc2626';
    const colorSegment = isDark ? '#34d399' : '#16a34a';
    const colorHighlight = isDark ? '#fbbf24' : '#eab308';
    const colorNormal = isDark ? '#a78bfa' : '#7c3aed';
    const colorSphere = isDark ? '#f472b6' : '#ec4899';
    const colorPlan = isDark ? '#60a5fa' : '#3b82f6';
    const colorCircle = isDark ? '#34d399' : '#10b981';

    // ============================================================
    // Figure : Sphère passant par 4 points (ex 9)
    // ============================================================
    if (type === 'sphere_4points') {
        const s = Math.min(w, h) * 0.2;
        // Dessiner une sphère (cercle) avec des points à l'intérieur
        const center = { x: cx, y: cy };
        const radius = 0.6 * s;
        // Cercle représentant la sphère
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.1)' : 'rgba(236,72,153,0.08)';
        ctx.fill();

        // Quatre points sur la sphère (positions approximatives)
        const points = [
            { x: center.x + 0.3*radius, y: center.y - 0.6*radius, label: 'O' },
            { x: center.x - 0.7*radius, y: center.y + 0.2*radius, label: 'A' },
            { x: center.x + 0.8*radius, y: center.y + 0.3*radius, label: 'B' },
            { x: center.x - 0.2*radius, y: center.y - 0.8*radius, label: 'C' }
        ];
        ctx.fillStyle = colorPoint;
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, p.x + 6, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère passant par O, A, B, C (exercice 9)', 10, 20);
    }

    // ============================================================
    // Figure : Sphère tangente à un plan (ex 10, 16)
    // ============================================================
    else if (type === 'sphere_tangente_plan') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Plan (parallélogramme)
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.10)' : 'rgba(59,130,246,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorPlan;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Centre A de la sphère (hors plan)
        const A = { x: O.x - 0.6*s, y: O.y - 0.8*s };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Sphère (cercle) centrée en A, tangente au plan
        // On calcule la distance de A au plan pour le rayon
        // On simule un point de tangence H
        const H = { x: A.x + 0.4*s, y: A.y + 0.7*s }; // projeté approximatif
        const radius = Math.sqrt((A.x-H.x)*(A.x-H.x) + (A.y-H.y)*(A.y-H.y));
        ctx.beginPath();
        ctx.arc(A.x, A.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.08)' : 'rgba(236,72,153,0.06)';
        ctx.fill();

        // Segment AH (rayon)
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Point de tangence H
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(H.x, H.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H', H.x + 6, H.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère tangente au plan P (exercice 10/16)', 10, 20);
    }

    // ============================================================
    // Figure : Plan tangent en un point (ex 11)
    // ============================================================
    else if (type === 'sphere_tangent') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Sphère (cercle)
        const center = { x: O.x - 0.2*s, y: O.y - 0.2*s };
        const radius = 0.7 * s;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.08)' : 'rgba(236,72,153,0.06)';
        ctx.fill();

        // Point A sur la sphère (tangent)
        const angle = -Math.PI/4;
        const A = { x: center.x + radius*Math.cos(angle), y: center.y + radius*Math.sin(angle) };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Centre I
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        // Rayon IA
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(A.x, A.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Plan tangent (droite passant par A perpendiculaire à IA)
        // On dessine une droite tangente
        const perp = { x: -(A.y - center.y), y: (A.x - center.x) };
        const norm = Math.sqrt(perp.x*perp.x + perp.y*perp.y);
        const u = { x: perp.x/norm, y: perp.y/norm };
        const ext = 1.5 * s;
        const p1 = { x: A.x - u.x*ext, y: A.y - u.y*ext };
        const p2 = { x: A.x + u.x*ext, y: A.y + u.y*ext };
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = colorPlan;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = colorPlan;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Plan tangent', (p1.x+p2.x)/2, (p1.y+p2.y)/2 - 10);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Plan tangent en A (exercice 11)', 10, 20);
    }

    // ============================================================
    // Figure : Sphère circonscrite à un tétraèdre (ex 12, 17, 19)
    // ============================================================
    else if (type === 'sphere_circonscrite') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Dessiner un tétraèdre (simplifié) et une sphère (cercle) passant par ses sommets
        // Sommets du tétraèdre (projetés en 2D)
        const A = { x: O.x - 1.0*s, y: O.y + 0.8*s };
        const B = { x: O.x + 1.2*s, y: O.y + 0.6*s };
        const C = { x: O.x - 0.6*s, y: O.y - 0.8*s };
        const D = { x: O.x + 0.6*s, y: O.y - 0.9*s };

        // Sphère (cercle) circonscrite
        // On calcule le centre approximatif (centroïde)
        const center = { x: (A.x+B.x+C.x+D.x)/4, y: (A.y+B.y+C.y+D.y)/4 };
        const radius = Math.max(
            Math.sqrt((A.x-center.x)**2+(A.y-center.y)**2),
            Math.sqrt((B.x-center.x)**2+(B.y-center.y)**2),
            Math.sqrt((C.x-center.x)**2+(C.y-center.y)**2),
            Math.sqrt((D.x-center.x)**2+(D.y-center.y)**2)
        ) * 1.1;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Tétraèdre (arêtes)
        const drawEdge = (p1, p2, color = colorSegment) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        };
        drawEdge(A, B); drawEdge(A, C); drawEdge(A, D);
        drawEdge(B, C); drawEdge(B, D); drawEdge(C, D);

        // Étiquettes
        const pts = { A, B, C, D };
        const labels = ['A', 'B', 'C', 'D'];
        ctx.fillStyle = colorPoint;
        Object.keys(pts).forEach((key, i) => {
            const p = pts[key];
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(labels[i], p.x + 8, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Centre de la sphère
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère circonscrite au tétraèdre (exercice 12/17/19)', 10, 20);
    }

    // ============================================================
    // Figure : Intersection sphère-plan (cercle) (ex 13, 14, 18)
    // ============================================================
    else if (type === 'sphere_plan_intersection') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Plan (parallélogramme)
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.10)' : 'rgba(59,130,246,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorPlan;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Sphère (cercle) centrée en I, avec un cercle d'intersection (en perspective)
        const center = { x: O.x - 0.2*s, y: O.y - 0.5*s };
        const radiusSphere = 0.8 * s;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radiusSphere, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Cercle d'intersection (ellipse pour simuler la perspective)
        const rx = 0.5 * s;
        const ry = 0.25 * s;
        const cxCircle = O.x - 0.1*s;
        const cyCircle = O.y - 0.3*s;
        ctx.beginPath();
        ctx.ellipse(cxCircle, cyCircle, rx, ry, 0, 0, 2*Math.PI);
        ctx.strokeStyle = colorCircle;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Centre I de la sphère
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        // Centre H du cercle (projeté orthogonal de I sur P)
        const H = { x: cxCircle, y: cyCircle };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(H.x, H.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H', H.x + 8, H.y - 6);

        // Rayon perpendiculaire
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Intersection sphère-plan : cercle (exercice 13/14/18)', 10, 20);
    }

    // ============================================================
    // Figure : Intersection avec 3 plans (ex 15)
    // ============================================================
    else if (type === 'sphere_3plans') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx, y: cy + 0.2*s };

        // Sphère (cercle)
        const center = { x: O.x, y: O.y - 0.2*s };
        const radius = 0.6 * s;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Trois plans représentés par des droites sécantes à l'intérieur de la sphère
        const drawPlanLine = (x1, y1, x2, y2, color = colorPlan) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        };
        // Plan 1
        drawPlanLine(center.x - radius*0.8, center.y, center.x + radius*0.8, center.y, colorPlan);
        // Plan 2
        drawPlanLine(center.x, center.y - radius*0.8, center.x, center.y + radius*0.8, colorNormal);
        // Plan 3
        drawPlanLine(center.x - radius*0.6, center.y - radius*0.6, center.x + radius*0.6, center.y + radius*0.6, colorHighlight);

        // Centre A de la sphère (donné dans l'exercice)
        const A = { x: center.x - 0.3*s, y: center.y - 0.2*s };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Points B, C
        const B = { x: center.x + 0.4*s, y: center.y + 0.3*s };
        const C = { x: center.x - 0.5*s, y: center.y + 0.1*s };
        [B, C].forEach((p, i) => {
            ctx.fillStyle = colorPoint;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(['B','C'][i], p.x + 6, p.y - 6);
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère et 3 plans sécants (exercice 15)', 10, 20);
    }

    // ============================================================
    // Figure : Orthogonalité, volume, sphère (ex 20)
    // ============================================================
    else if (type === 'sphere_orthogonalite') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx - 0.8*s, y: cy + 0.6*s };
        const A = { x: O.x + 1.8*s, y: O.y };
        const B = { x: O.x, y: O.y - 1.6*s };
        const C = { x: O.x + 1.2*s, y: O.y - 0.8*s };

        // Axes (pour le repère)
        ctx.strokeStyle = colorAxis;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(O.x - 0.4*s, O.y + 0.4*s);
        ctx.lineTo(O.x + 2.2*s, O.y + 0.4*s);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(O.x - 0.4*s, O.y + 0.4*s);
        ctx.lineTo(O.x - 0.4*s, O.y - 2.0*s);
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('x', O.x + 2.2*s, O.y + 0.4*s + 12);
        ctx.fillText('y', O.x - 0.4*s - 8, O.y - 2.0*s);

        // Tétraèdre OABC
        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };
        drawEdge(O, A); drawEdge(O, B); drawEdge(O, C);
        drawEdge(A, B); drawEdge(A, C); drawEdge(B, C);

        // Sphère circonscrite (cercle)
        const center = { x: (O.x + A.x + B.x + C.x)/4, y: (O.y + A.y + B.y + C.y)/4 };
        const radius = Math.max(
            Math.sqrt((O.x-center.x)**2+(O.y-center.y)**2),
            Math.sqrt((A.x-center.x)**2+(A.y-center.y)**2),
            Math.sqrt((B.x-center.x)**2+(B.y-center.y)**2),
            Math.sqrt((C.x-center.x)**2+(C.y-center.y)**2)
        );
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius*1.1, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Étiquettes
        const pts = { O, A, B, C };
        const labels = ['O', 'A', 'B', 'C'];
        ctx.fillStyle = colorPoint;
        Object.keys(pts).forEach((key, i) => {
            const p = pts[key];
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(labels[i], p.x + 8, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Centre I
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
ctx.fillText('I', center.x + 8, center.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère circonscrite au tétraèdre (exercice 12/17/19)', 10, 20);
    }

    // ============================================================
    // Figure : Intersection sphère-plan (cercle) (ex 13, 14, 18)
    // ============================================================
    else if (type === 'sphere_plan_intersection') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Plan (parallélogramme)
        const p = [
            { x: O.x - 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.8*s, y: O.y + 0.6*s },
            { x: O.x + 1.2*s, y: O.y - 1.2*s },
            { x: O.x - 1.2*s, y: O.y - 1.2*s }
        ];
        ctx.beginPath();
        ctx.moveTo(p[0].x, p[0].y);
        for (let i=1; i<p.length; i++) ctx.lineTo(p[i].x, p[i].y);
        ctx.closePath();
        ctx.fillStyle = isDark ? 'rgba(96,165,250,0.10)' : 'rgba(59,130,246,0.06)';
        ctx.fill();
        ctx.strokeStyle = colorPlan;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('P', p[0].x - 10, p[0].y - 10);

        // Sphère (cercle) centrée en I, avec un cercle d'intersection (en perspective)
        const center = { x: O.x - 0.2*s, y: O.y - 0.5*s };
        const radiusSphere = 0.8 * s;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radiusSphere, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Cercle d'intersection (ellipse pour simuler la perspective)
        const rx = 0.5 * s;
        const ry = 0.25 * s;
        const cxCircle = O.x - 0.1*s;
        const cyCircle = O.y - 0.3*s;
        ctx.beginPath();
        ctx.ellipse(cxCircle, cyCircle, rx, ry, 0, 0, 2*Math.PI);
        ctx.strokeStyle = colorCircle;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Centre I de la sphère
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        // Centre H du cercle (projeté orthogonal de I sur P)
        const H = { x: cxCircle, y: cyCircle };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(H.x, H.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H', H.x + 8, H.y - 6);

        // Rayon perpendiculaire
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(H.x, H.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Intersection sphère-plan : cercle (exercice 13/14/18)', 10, 20);
    }

    // ============================================================
    // Figure : Intersection avec 3 plans (ex 15)
    // ============================================================
    else if (type === 'sphere_3plans') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx, y: cy + 0.2*s };

        // Sphère (cercle)
        const center = { x: O.x, y: O.y - 0.2*s };
        const radius = 0.6 * s;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Trois plans représentés par des droites sécantes à l'intérieur de la sphère
        const drawPlanLine = (x1, y1, x2, y2, color = colorPlan) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        };
        // Plan 1
        drawPlanLine(center.x - radius*0.8, center.y, center.x + radius*0.8, center.y, colorPlan);
        // Plan 2
        drawPlanLine(center.x, center.y - radius*0.8, center.x, center.y + radius*0.8, colorNormal);
        // Plan 3
        drawPlanLine(center.x - radius*0.6, center.y - radius*0.6, center.x + radius*0.6, center.y + radius*0.6, colorHighlight);

        // Centre A de la sphère (donné dans l'exercice)
        const A = { x: center.x - 0.3*s, y: center.y - 0.2*s };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(A.x, A.y, 5, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('A', A.x + 8, A.y - 6);

        // Points B, C
        const B = { x: center.x + 0.4*s, y: center.y + 0.3*s };
        const C = { x: center.x - 0.5*s, y: center.y + 0.1*s };
        [B, C].forEach((p, i) => {
            ctx.fillStyle = colorPoint;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(['B','C'][i], p.x + 6, p.y - 6);
        });

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Sphère et 3 plans sécants (exercice 15)', 10, 20);
    }

    // ============================================================
    // Figure : Orthogonalité, volume, sphère (ex 20)
    // ============================================================
    else if (type === 'sphere_orthogonalite') {
        const s = Math.min(w, h) * 0.2;
        const O = { x: cx - 0.8*s, y: cy + 0.6*s };
        const A = { x: O.x + 1.8*s, y: O.y };
        const B = { x: O.x, y: O.y - 1.6*s };
        const C = { x: O.x + 1.2*s, y: O.y - 0.8*s };

        // Axes (pour le repère)
        ctx.strokeStyle = colorAxis;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(O.x - 0.4*s, O.y + 0.4*s);
        ctx.lineTo(O.x + 2.2*s, O.y + 0.4*s);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(O.x - 0.4*s, O.y + 0.4*s);
        ctx.lineTo(O.x - 0.4*s, O.y - 2.0*s);
        ctx.stroke();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('x', O.x + 2.2*s, O.y + 0.4*s + 12);
        ctx.fillText('y', O.x - 0.4*s - 8, O.y - 2.0*s);

        // Tétraèdre OABC
        const drawEdge = (p1, p2, color = colorSegment, dashed = false) => {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.setLineDash(dashed ? [4,4] : []);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
        };
        drawEdge(O, A); drawEdge(O, B); drawEdge(O, C);
        drawEdge(A, B); drawEdge(A, C); drawEdge(B, C);

        // Sphère circonscrite (cercle)
        const center = { x: (O.x + A.x + B.x + C.x)/4, y: (O.y + A.y + B.y + C.y)/4 };
        const radius = Math.max(
            Math.sqrt((O.x-center.x)**2+(O.y-center.y)**2),
            Math.sqrt((A.x-center.x)**2+(A.y-center.y)**2),
            Math.sqrt((B.x-center.x)**2+(B.y-center.y)**2),
            Math.sqrt((C.x-center.x)**2+(C.y-center.y)**2)
        );
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius*1.1, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.06)' : 'rgba(236,72,153,0.04)';
        ctx.fill();

        // Étiquettes
        const pts = { O, A, B, C };
        const labels = ['O', 'A', 'B', 'C'];
        ctx.fillStyle = colorPoint;
        Object.keys(pts).forEach((key, i) => {
            const p = pts[key];
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(labels[i], p.x + 8, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Centre I
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('I', center.x + 8, center.y - 6);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Tétraèdre OABC et sphère circonscrite (exercice 20)', 10, 20);
    }

    // ============================================================
    // Figure : Droite tangente à une sphère (ex 21)
    // ============================================================
    else if (type === 'sphere_tangente') {
        const s = Math.min(w, h) * 0.25;
        const O = { x: cx, y: cy + 0.2*s };

        // Sphère (cercle) de centre J
        const J = { x: O.x - 0.2*s, y: O.y - 0.2*s };
        const radius = 0.6 * s;
        ctx.beginPath();
        ctx.arc(J.x, J.y, radius, 0, 2*Math.PI);
        ctx.strokeStyle = colorSphere;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = isDark ? 'rgba(244,114,182,0.08)' : 'rgba(236,72,153,0.06)';
        ctx.fill();

        // Points M et N (sur la droite tangente)
        const M = { x: J.x - radius*0.5, y: J.y - radius*0.8 };
        const N = { x: J.x + radius*1.2, y: J.y + radius*0.6 };
        ctx.fillStyle = colorPoint;
        [M, N].forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(['M','N'][i], p.x + 8, p.y - 6);
            ctx.fillStyle = colorPoint;
        });

        // Droite (MN)
        ctx.beginPath();
        ctx.moveTo(M.x, M.y);
        ctx.lineTo(N.x, N.y);
        ctx.strokeStyle = colorHighlight;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Centre J
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(J.x, J.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('J', J.x + 8, J.y - 6);

        // Point de tangence T (projeté orthogonal de J sur MN)
        // On calcule approximativement
        const dx = N.x - M.x, dy = N.y - M.y;
        const t = ((J.x - M.x)*dx + (J.y - M.y)*dy) / (dx*dx + dy*dy);
        const T = { x: M.x + t*dx, y: M.y + t*dy };
        ctx.fillStyle = colorPoint;
        ctx.beginPath();
        ctx.arc(T.x, T.y, 4, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('T', T.x + 8, T.y - 6);

        // Rayon JT (perpendiculaire)
        ctx.beginPath();
        ctx.moveTo(J.x, J.y);
        ctx.lineTo(T.x, T.y);
        ctx.strokeStyle = colorNormal;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4,4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = colorText;
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Droite (MN) tangente à la sphère (exercice 21)', 10, 20);
    }
}
       
}








// ============================================================
// 6. Quiz et correction
// ============================================================
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

// ============================================================
// 7. Sections pliables
// ============================================================
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

// ============================================================
// 8. Pages
// ============================================================

// 8.1 Accueil
function renderAccueil() {
    currentPage = 'accueil';
    currentId = null;
    buildNav('accueil', null);
    let html = `
        <section class="hero">
            <img src="assets/images/logo.png" alt="LOGICAMATHS">
            <h1>ESPACE 3.1</h1>
            <p class="subtitle">La Géométrie Analytique 3D Réinventée</p>
            <p>4ème Année Sciences Expérimentales & Sciences Techniques</p>
            <p class="author">Par Prof. KACHBOURI BOUALI</p>
            <div class="stats">
                <div class="stat"><strong>5</strong><br>Chapitres</div>
                <div class="stat"><strong>40+</strong><br>Exercices</div>
                <div class="stat"><strong>🎯</strong><br>Bac 2026</div>
            </div>
        </section>
        <h2>📖 Sommaire des Chapitres</h2>
        <div class="chapters-grid">
    `;
    if (typeof data !== 'undefined' && data.chapitres) {
        data.chapitres.forEach(ch => {
            const count = ch.exercices ? ch.exercices.length : 0;
            html += `<a class="chapter-card" onclick="navigateTo('chapitre', ${ch.id}); return false;">
                        <span class="chapter-number">Chapitre ${ch.id}</span>
                        <h3>${ch.titre}</h3>
                        <p class="chapter-count">${count} exercices corrigés</p>
                     </a>`;
        });
    }
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

// 8.2 Résumés
function renderResumes() {
    currentPage = 'resumes';
    currentId = null;
    buildNav('resumes', null);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📚 Résumés – Géométrie Dans l'Espace</h2>
                <span class="badge">${typeof data !== 'undefined' && data.chapitres ? data.chapitres.filter(c => c.resume).length : 0} chapitres</span>
            </div>
            <div class="chapitre-sous-titre">Synthèse des notions fondamentales</div>
            <div class="chapitre-meta"><span>Cliquez sur un chapitre pour afficher son résumé</span></div>
            <div class="content-area">
                <div id="resume-list">
    `;
    if (typeof data !== 'undefined' && data.chapitres) {
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
    }
    html += `
                </div>
            </div>
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

// 8.3 Fiches
function renderFiches() {
    currentPage = 'fiches';
    currentId = null;
    buildNav('fiches', null);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📋 Fiche de synthèse – Géométrie Dans l'Espace</h2>
                <span class="badge">Toutes les formules</span>
            </div>
            <div class="chapitre-sous-titre">Synthèse complète de la géométrie 3D</div>
            <div class="chapitre-meta"><span>Cliquez sur un onglet pour afficher la section</span></div>
            ${window.genererFicheHTML ? window.genererFicheHTML() : '<p style="color:var(--text-secondary);">Les fiches ne sont pas chargées.</p>'}
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

// 8.4 Aide-mémoire
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

function renderAideMemoire() {
    currentPage = 'aideMemoire';
    currentId = null;
    buildNav('aideMemoire', null);
    if (typeof window.aideMemoire === 'undefined') {
        render('<p style="text-align:center; padding:40px; color:var(--text-secondary);">❌ L\'aide-mémoire n\'est pas chargée.</p>');
        return;
    }

    const sectionsKeys = Object.keys(window.aideMemoire);
    if (sectionsKeys.length === 0) {
        render('<p style="text-align:center; padding:40px; color:var(--text-secondary);">❌ Aucune section trouvée.</p>');
        return;
    }

    let totalCartes = 0;
    sectionsKeys.forEach(key => {
        const section = window.aideMemoire[key];
        if (section && section.items) totalCartes += section.items.length;
    });

    let tabsHtml = `<div class="fiches-tabs">`;
    sectionsKeys.forEach((key, index) => {
        const section = window.aideMemoire[key];
        const label = section.titre || key;
        const active = index === 0 ? 'active' : '';
        tabsHtml += `<button class="fiche-tab ${active}" data-tab="${key}" onclick="switchAideTab('${key}')">${label}</button>`;
    });
    tabsHtml += `</div>`;

    let contentHtml = `<div class="content-area">`;
    sectionsKeys.forEach((key, index) => {
        const section = window.aideMemoire[key];
        const active = index === 0 ? 'active' : '';
        contentHtml += `<div id="aide-tab-${key}" class="fiche-tab-content ${active}">`;
        contentHtml += genererAideSection(section);
        contentHtml += `</div>`;
    });
    contentHtml += `</div>`;

    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📘 Aide-mémoire</h2>
                <span class="badge">${totalCartes} cartes</span>
            </div>
            <div class="chapitre-sous-titre">Questions et réponses pour les exercices</div>
            <div class="chapitre-meta"><span>Cliquez sur une carte pour la retourner</span></div>
            ${tabsHtml}
            ${contentHtml}
        </div>
        <a class="back-link" onclick="navigateTo('accueil'); return false;">← Retour à l'accueil</a>
    `;
    render(html);
}

window.switchAideTab = function(tabId) {
    document.querySelectorAll('.fiche-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.fiche-tab').forEach(el => el.classList.remove('active'));
    const targetContent = document.getElementById('aide-tab-' + tabId);
    if (targetContent) targetContent.classList.add('active');
    const targetTab = document.querySelector(`.fiche-tab[data-tab="${tabId}"]`);
    if (targetTab) targetTab.classList.add('active');
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise().catch(() => {});
        }
    }, 50);
};

// 8.5 Problèmes
function renderProblemes() {
    currentPage = 'problemes';
    currentId = null;
    buildNav('problemes', null);
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

// 8.6 Chapitre
function renderChapitre(id) {
    if (typeof data === 'undefined' || !data.chapitres) { renderAccueil(); return; }
    const ch = data.chapitres.find(c => c.id === id);
    if (!ch) { renderAccueil(); return; }
    currentPage = 'chapitre';
    currentId = id;
    buildNav('chapitre', id);
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

// 8.7 Exercice
function renderExercice(chId, exNum) {
    if (typeof data === 'undefined' || !data.chapitres) { renderAccueil(); return; }
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

// ============================================================
// 9. Navigation principale
// ============================================================
window.navigateTo = function(page, chId, exNum) {
    if (page === 'accueil') renderAccueil();
    else if (page === 'resumes') renderResumes();
    else if (page === 'fiches') renderFiches();
    else if (page === 'aideMemoire') renderAideMemoire();
    else if (page === 'problemes') renderProblemes();
    else if (page === 'chapitre') renderChapitre(chId);
    else if (page === 'exercice') renderExercice(chId, exNum);
};

// ============================================================
// 10. Démarrage
// ============================================================
renderAccueil();