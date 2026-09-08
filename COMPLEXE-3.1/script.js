// ============================================================
// script.js – Moteur de rendu complet – Nombres complexes
// ============================================================
// Compatible avec data.js, chapitres 1 à 5, fiche.js, aideMemoire.js, problemes_base.js

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
// 3. Rendu principal (avec rafraîchissement MathJax et figures)
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
// 4. Graphiques avec function-plot
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
// 5. Dessin des figures sur canvas (version complète)
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

        // --- Configuration selon le thème ---
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        const isDark = theme === 'dark';
        const colorAxis = isDark ? '#64748b' : '#94a3b8';
        const colorGrid = isDark ? '#475569' : '#e2e8f0';
        const colorText = isDark ? '#f1f5f9' : '#1e293b';
        const colorCurve = isDark ? '#60a5fa' : '#2563eb';
        const colorPoint = isDark ? '#f87171' : '#dc2626';
        const colorSegment = isDark ? '#34d399' : '#16a34a';

        // ---- Figure 1 : cercle centre A (problème 4) ----
        if (type === 'cercle_centre_A') {
            const cx = w/2, cy = h/2;
            const scale = w/5;
            const r = 2 * scale;
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx + 1*scale, cy, r, 0, 2*Math.PI);
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 2;
            ctx.stroke();
            const pts = [
                {x:1, y:0, label:'A'}, {x:-1, y:0, label:'B'},
                {x:2, y:Math.sqrt(3), label:'C'}, {x:2, y:-Math.sqrt(3), label:'D'}
            ];
            ctx.fillStyle = colorPoint;
            pts.forEach(p => {
                const px = cx + p.x*scale;
                const py = cy - p.y*scale;
                ctx.beginPath(); ctx.arc(px, py, 4, 0, 2*Math.PI); ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '12px sans-serif';
                ctx.fillText(p.label, px+6, py-4);
                ctx.fillStyle = colorPoint;
            });
            ctx.beginPath();
            ctx.moveTo(cx + 2*scale, cy - Math.sqrt(3)*scale);
            ctx.lineTo(cx + 2*scale, cy + Math.sqrt(3)*scale);
            ctx.strokeStyle = colorSegment;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        // ---- Figure 2 : cercle triangle (problème 3) ----
        else if (type === 'cercle_triangle') {
            const cx = w/2, cy = h/2;
            const scale = w/5;
            const r = 2 * scale;
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, 2*Math.PI);
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 2;
            ctx.setLineDash([4,2]);
            ctx.stroke();
            ctx.setLineDash([]);
            const pts = [
                {x:-1, y:Math.sqrt(3), label:'A'},
                {x:Math.sqrt(3), y:1, label:'B'},
                {x:-Math.sqrt(3), y:-1, label:'C'}
            ];
            ctx.fillStyle = colorPoint;
            pts.forEach(p => {
                const px = cx + p.x*scale;
                const py = cy - p.y*scale;
                ctx.beginPath(); ctx.arc(px, py, 4, 0, 2*Math.PI); ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '12px sans-serif';
                ctx.fillText(p.label, px+6, py-4);
                ctx.fillStyle = colorPoint;
            });
            ctx.beginPath();
            ctx.moveTo(cx - 1*scale, cy - Math.sqrt(3)*scale);
            ctx.lineTo(cx + Math.sqrt(3)*scale, cy - 1*scale);
            ctx.lineTo(cx - Math.sqrt(3)*scale, cy + 1*scale);
            ctx.closePath();
            ctx.fillStyle = isDark ? 'rgba(96,165,250,0.15)' : 'rgba(37,99,235,0.12)';
            ctx.fill();
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#000';
            ctx.beginPath(); ctx.arc(cx, cy, 3, 0, 2*Math.PI); ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.fillText('O', cx+4, cy-4);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.sqrt(3)*scale, cy - 1*scale);
            ctx.strokeStyle = colorSegment;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4,2]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
            ctx.font = '10px sans-serif';
            ctx.fillText('2', cx + Math.sqrt(3)/2*scale, cy - 0.5*scale);
        }

        // ---- Figure 3 : Courbe de h' (problème 4) ----
        else if (type === 'courbe_h_prime') {
            const margin = 30;
            const graphW = w - 2*margin;
            const graphH = h - 2*margin;
            const xMin = 0, xMax = Math.PI;
            const yMin = -2, yMax = 2;
            const y0 = margin + graphH * (yMax/(yMax - yMin));
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(margin, y0); ctx.lineTo(w - margin, y0); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(margin, margin); ctx.lineTo(margin, h - margin); ctx.stroke();
            ctx.strokeStyle = colorGrid;
            ctx.lineWidth = 0.5;
            for (let i = -2; i <= 2; i+=0.5) {
                if (i === 0) continue;
                const y = margin + graphH * ((yMax - i)/(yMax - yMin));
                ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(w - margin, y); ctx.stroke();
            }
            const xTicks = [Math.PI/6, Math.PI/3, Math.PI/2, 2*Math.PI/3, 5*Math.PI/6, Math.PI];
            ctx.fillStyle = colorText;
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            xTicks.forEach(x => {
                const px = margin + graphW * (x - xMin)/(xMax - xMin);
                ctx.beginPath(); ctx.moveTo(px, y0-4); ctx.lineTo(px, y0+4); ctx.stroke();
                let label = '';
                if (x === Math.PI/6) label = 'π/6';
                else if (x === Math.PI/3) label = 'π/3';
                else if (x === Math.PI/2) label = 'π/2';
                else if (x === 2*Math.PI/3) label = '2π/3';
                else if (x === 5*Math.PI/6) label = '5π/6';
                else if (x === Math.PI) label = 'π';
                ctx.fillText(label, px, y0+16);
            });
            const steps = 200;
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const x = xMin + t * (xMax - xMin);
                const y = Math.cos(x) + Math.cos(2*x);
                const px = margin + graphW * t;
                const py = margin + graphH * ((yMax - y)/(yMax - yMin));
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
            const intersections = [Math.PI/3, Math.PI];
            ctx.fillStyle = colorPoint;
            intersections.forEach(x => {
                const px = margin + graphW * (x - xMin)/(xMax - xMin);
                const py = y0;
                ctx.beginPath(); ctx.arc(px, py, 4, 0, 2*Math.PI); ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(x === Math.PI/3 ? 'π/3' : 'π', px, py-10);
                ctx.fillStyle = colorPoint;
            });
            ctx.fillStyle = colorText;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText("h'(x)", w-60, margin+20);
            ctx.fillStyle = colorText;
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Courbe de la dérivée h\'', w/2, 20);
        }

        // ---- Figure 4 : Cercle de centre A(2i) rayon 2√2 (problème 5) ----
        else if (type === 'cercle_A_rayon') {
            const margin = 30;
            const graphW = w - 2*margin;
            const graphH = h - 2*margin;
            const cx = margin + graphW/2;
            const cy = margin + graphH/2;
            const scale = Math.min(graphW, graphH) / 5;
            const centerX = 0, centerY = 2;
            const px = (x) => cx + (x - centerX) * scale;
            const py = (y) => cy - (y - centerY) * scale;
            const radius = 2*Math.sqrt(2) * scale;
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(margin, py(0)); ctx.lineTo(w - margin, py(0)); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(px(0), margin); ctx.lineTo(px(0), h - margin); ctx.stroke();
            ctx.beginPath();
            ctx.arc(px(0), py(2), radius, 0, 2*Math.PI);
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 2;
            ctx.stroke();
            const pts = [
                {x:0, y:2, label:'A'},
                {x:2, y:0, label:'D'},
                {x:1+Math.sqrt(3), y:1+Math.sqrt(3), label:'B'},
                {x:1-Math.sqrt(3), y:1-Math.sqrt(3), label:'C'}
            ];
            ctx.fillStyle = colorPoint;
            pts.forEach(p => {
                const xP = px(p.x);
                const yP = py(p.y);
                ctx.beginPath(); ctx.arc(xP, yP, 4, 0, 2*Math.PI); ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '12px sans-serif';
                ctx.fillText(p.label, xP+6, yP-4);
                ctx.fillStyle = colorPoint;
            });
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('A(2i)', px(0)+10, py(2)-10);
        }

        // ---- Figure 5 : Parallélogramme OAKC (problème 6) ----
        else if (type === 'parallelogramme_points') {
            const margin = 40;
            const graphW = w - 2*margin;
            const graphH = h - 2*margin;
            const cx = margin + graphW/2;
            const cy = margin + graphH/2;
            const scale = Math.min(graphW, graphH) / 6;
            const sqrt3 = Math.sqrt(3);
            const a = 1 + sqrt3;
            const zA_re = a;
            const zA_im = a;
            const zC_re = -2 - a;
            const zC_im = -a;
            const zK_re = -2;
            const zK_im = 0;
            const zC2_re = zC_re*zC_re - zC_im*zC_im;
            const zC2_im = 2*zC_re*zC_im;
            const zD_re = 0.5 * zC2_re;
            const zD_im = 0.5 * zC2_im;
            const px = (x) => cx + x * scale;
            const py = (y) => cy - y * scale;
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(margin, py(0)); ctx.lineTo(w - margin, py(0)); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(px(0), margin); ctx.lineTo(px(0), h - margin); ctx.stroke();
            const pts = [
                {x:0, y:0, label:'O'},
                {x:zA_re, y:zA_im, label:'A'},
                {x:zC_re, y:zC_im, label:'C'},
                {x:zK_re, y:zK_im, label:'K'},
                {x:zD_re, y:zD_im, label:'D'}
            ];
            ctx.fillStyle = colorPoint;
            pts.forEach(p => {
                const xP = px(p.x);
                const yP = py(p.y);
                if (xP > margin && xP < w-margin && yP > margin && yP < h-margin) {
                    ctx.beginPath(); ctx.arc(xP, yP, 4, 0, 2*Math.PI); ctx.fill();
                    ctx.fillStyle = colorText;
                    ctx.font = '12px sans-serif';
                    ctx.fillText(p.label, xP+6, yP-4);
                    ctx.fillStyle = colorPoint;
                }
            });
            ctx.beginPath();
            ctx.moveTo(px(0), py(0));
            ctx.lineTo(px(zA_re), py(zA_im));
            ctx.lineTo(px(zK_re), py(zK_im));
            ctx.lineTo(px(zC_re), py(zC_im));
            ctx.closePath();
            ctx.strokeStyle = colorCurve;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4,2]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Parallélogramme OAKC', margin, margin - 10);
        }

// ---- Figure 6 : Cercle alignement (problème 7) ----
else if (type === 'cercle_alignement') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    const scale = Math.min(graphW, graphH) / 5;

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();

    // Cercle de centre O rayon 2
    ctx.beginPath();
    ctx.arc(cx, cy, 2 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Points : A(√3,1), B(-√3,3), K(0,2), E(2,0), F(1,-√3)
    const pts = [
        { x: Math.sqrt(3), y: 1, label: 'A' },
        { x: -Math.sqrt(3), y: 3, label: 'B' },
        { x: 0, y: 2, label: 'K' },
        { x: 2, y: 0, label: 'E' },
        { x: 1, y: -Math.sqrt(3), label: 'F' }
    ];
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        }
    });

    // Segment [AB] en pointillé
    ctx.beginPath();
    ctx.moveTo(px(Math.sqrt(3)), py(1));
    ctx.lineTo(px(-Math.sqrt(3)), py(3));
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Cercle ζ de centre O rayon 2', margin, margin - 10);
}


        // ---- Figure 7 : Points A, B, C pour θ variable (problème 8) ----
        else if (type === 'points_ABC_theta') {
            const margin = 40;
            const graphW = w - 2*margin;
            const graphH = h - 2*margin;
            const cx = margin + graphW/2;
            const cy = margin + graphH/2;
            const scale = Math.min(graphW, graphH) / 4; // de -2 à 2

            // Exemple avec θ = π/4
            const theta = Math.PI / 4;
            const a_re = 0, a_im = 1;
            const b_re = Math.cos(theta);
            const b_im = 1 - Math.sin(theta);
            const c_re = -Math.cos(theta);
            const c_im = -(1 + Math.sin(theta));

            const px = (x) => cx + x * scale;
            const py = (y) => cy - y * scale;

            // Axes
            ctx.strokeStyle = colorAxis;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(margin, cy); ctx.lineTo(w - margin, cy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx, margin); ctx.lineTo(cx, h - margin); ctx.stroke();

            // Points
            const pts = [
                {x: a_re, y: a_im, label: 'A'},
                {x: b_re, y: b_im, label: 'B'},
                {x: c_re, y: c_im, label: 'C'}
            ];
            ctx.fillStyle = colorPoint;
            pts.forEach(p => {
                const xP = px(p.x);
                const yP = py(p.y);
                if (xP > margin && xP < w-margin && yP > margin && yP < h-margin) {
                    ctx.beginPath(); ctx.arc(xP, yP, 4, 0, 2*Math.PI); ctx.fill();
                    ctx.fillStyle = colorText;
                    ctx.font = '12px sans-serif';
                    ctx.fillText(p.label, xP+6, yP-4);
                    ctx.fillStyle = colorPoint;
                }
            });

            // Tracer les segments AB et AC pour visualiser
            ctx.strokeStyle = colorSegment;
            ctx.lineWidth = 1;
            ctx.setLineDash([4,2]);
            ctx.beginPath();
            ctx.moveTo(px(a_re), py(a_im));
            ctx.lineTo(px(b_re), py(b_im));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(px(a_re), py(a_im));
            ctx.lineTo(px(c_re), py(c_im));
            ctx.stroke();
            ctx.setLineDash([]);

            // Légende
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('A, B, C pour θ = π/4', margin, margin - 10);
        }

// ---- Figure 8 : Cercle unité avec points A, B, M (problème 9) ----
else if (type === 'lieu_segment') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    const scale = Math.min(graphW, graphH) / 2.5; // de -1.2 à 1.2

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();

// ========== DESSIN DU SEGMENT AB ==========
    ctx.beginPath();
    ctx.moveTo(px(1), py(1));         // A (1, 1)
    ctx.lineTo(px(-1), py(1));    // B (-1, 1)
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);          // pointillé pour le distinguer du cercle
    ctx.stroke();
    ctx.setLineDash([]);              // on remet le trait plein pour la suite

    // Points A(1,1), B(-1,1)
    const pts = [
        { x: 1, y: 1, label: 'A' },
        { x: -1, y: 1, label: 'B' },
        { x: Math.cos(Math.PI / 4), y: 1, label: 'M' }  // exemple
    ];
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '12px sans-serif';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        }
    });

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Lieu géométrique', margin, margin - 10);
}

// ---- Figure 9 : Problème 11 – Polynôme, triangle isocèle et valeurs trigonométriques ----
else if (type === 'probleme11_points') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    // Échelle : on veut couvrir de -2.5 à 2.5 en x et y pour bien voir tout
    const scale = Math.min(graphW, graphH) / 5; // 5 unités (de -2.5 à 2.5)

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();

    // Flèches des axes (optionnel)
    ctx.fillStyle = colorAxis;
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('O', cx - 12, cy + 16);
    ctx.fillText('u', w - margin + 12, cy + 4);
    ctx.fillText('v', cx + 4, margin - 8);

    // Cercle de centre O et rayon 2 (pour visualiser OA = OB = 2)
    ctx.beginPath();
    ctx.arc(cx, cy, 2 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = isDark ? 'rgba(96,165,250,0.3)' : 'rgba(37,99,235,0.2)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Définition des points
    const sqrt2 = Math.sqrt(2);
    const pts = [
        { x: 2, y: 0, label: 'A' },
        { x: -sqrt2, y: sqrt2, label: 'B' },
        { x: -sqrt2, y: -sqrt2, label: 'C' },
        { x: (2 - sqrt2) / 2, y: sqrt2 / 2, label: 'I' }
    ];

    // Tracer le segment [AB] (en trait plein vert)
    ctx.beginPath();
    ctx.moveTo(px(2), py(0));
    ctx.lineTo(px(-sqrt2), py(sqrt2));
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Tracer le segment [OI] (en pointillé pour la bissectrice)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(px((2 - sqrt2) / 2), py(sqrt2 / 2));
    ctx.strokeStyle = isDark ? '#fbbf24' : '#d97706';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Tracer les points (cercles rouges + étiquettes)
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        }
    });

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Cercle de centre O rayon 2 (OA=OB)', margin, margin - 10);
    ctx.fillStyle = colorText;
    ctx.fillText('I milieu de [AB]', margin, margin + 20);
}

// ---- Figure 10 : Problème 12 – Cercle, triangle rectangle, tangence ----
else if (type === 'cercle_IFG') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    // On veut voir de -3 à 3 en x et de -3 à 3 en y
    const scale = Math.min(graphW, graphH) / 6; // 6 unités de -3 à 3

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();
    ctx.fillStyle = colorAxis;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', cx + 4, cy + 14);
    ctx.fillText('u', w - margin + 8, cy + 4);
    ctx.fillText('v', cx + 4, margin - 4);

    // Cercle de centre I et rayon 1
    const sqrt3 = Math.sqrt(3);
    const zI_re = -0.5;
    const zI_im = 1;
    const ix = px(zI_re);
    const iy = py(zI_im);
    ctx.beginPath();
    ctx.arc(ix, iy, 1 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Points : F, G, I, K, L, D
    // Affixes :
    // zF = (1 + sqrt3/2) i  => (0, 1+sqrt3/2)
    // zG = (sqrt3-1)/2 + i/2 => ((sqrt3-1)/2, 1/2)
    // zI = -1/2 + i
    // zK = -3/2 + i(1+sqrt3)
    // zL = -3/2 - i(1+sqrt3)
    // D : intersection de (FK) et (GL). On peut le calculer ou le placer approximativement.
    // Pour le dessin, on peut calculer D à partir des équations des droites.
    // (FK) passe par F et K, (GL) passe par G et L.
    // Calculons D pour le placer précisément.

    const zF_re = 0;
    const zF_im = 1 + sqrt3/2;
    const zG_re = (sqrt3 - 1) / 2;
    const zG_im = 0.5;
    const zI_re2 = -0.5;
    const zI_im2 = 1;
    const zK_re = -1.5;
    const zK_im = 1 + sqrt3;
    const zL_re = -1.5;
    const zL_im = -1 - sqrt3;

    // Calcul de D : intersection de (FK) et (GL)
    // On paramètre (FK): F + t*(K-F)
    // (GL): G + s*(L-G)
    // Résoudre pour t et s.
    // F = (0, 1+sqrt3/2) ; K = (-3/2, 1+sqrt3)
    // vecteur FK = (-3/2, sqrt3/2)
    // G = ((sqrt3-1)/2, 1/2) ; L = (-3/2, -1-sqrt3)
    // vecteur GL = (-3/2 - (sqrt3-1)/2, -1-sqrt3 - 1/2) = (-(sqrt3+2)/2, -3/2 - sqrt3)
    // On peut résoudre, mais pour simplifier, on peut utiliser le fait que D est sur la verticale x = -3/2 ?
    // Non, D n'est pas forcément sur x=-3/2.
    // On va plutôt calculer numériquement en JavaScript.

    // Méthode : résoudre le système linéaire
    const Fx = 0, Fy = 1 + sqrt3/2;
    const Kx = -1.5, Ky = 1 + sqrt3;
    const Gx = (sqrt3 - 1) / 2, Gy = 0.5;
    const Lx = -1.5, Ly = -1 - sqrt3;

    // Vecteurs directeurs
    const ux = Kx - Fx, uy = Ky - Fy; // FK
    const vx = Lx - Gx, vy = Ly - Gy; // GL

    // On résout F + t*u = G + s*v
    // t*ux - s*vx = Gx - Fx
    // t*uy - s*vy = Gy - Fy
    const det = ux * (-vy) - (-vx) * uy; // matrice [[ux, -vx], [uy, -vy]]
    // En fait on résout : t*ux + s*(-vx) = Gx - Fx ; t*uy + s*(-vy) = Gy - Fy
    // Donc matrice M = [[ux, -vx], [uy, -vy]]
    const detM = ux * (-vy) - (-vx) * uy;
    if (Math.abs(detM) > 1e-9) {
        const t = ((Gx - Fx) * (-vy) - (-vx) * (Gy - Fy)) / detM;
        const Dx = Fx + t * ux;
        const Dy = Fy + t * uy;
        // On a les coordonnées de D
        const D = { x: Dx, y: Dy };

        // Tracer les droites (FK) et (GL) en pointillés
        ctx.strokeStyle = isDark ? '#94a3b8' : '#64748b';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        // (FK) de F à K, prolongée jusqu'à D (on trace F-D-K)
        ctx.beginPath();
        ctx.moveTo(px(Fx), py(Fy));
        ctx.lineTo(px(Dx), py(Dy));
        ctx.lineTo(px(Kx), py(Ky));
        ctx.stroke();
        // (GL) de G à L, prolongée jusqu'à D
        ctx.beginPath();
        ctx.moveTo(px(Gx), py(Gy));
        ctx.lineTo(px(Dx), py(Dy));
        ctx.lineTo(px(Lx), py(Ly));
        ctx.stroke();
        ctx.setLineDash([]);

        // Tracer le côté KL (trait plein)
        ctx.beginPath();
        ctx.moveTo(px(Kx), py(Ky));
        ctx.lineTo(px(Lx), py(Ly));
        ctx.strokeStyle = colorSegment;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Placer les points
        const pts = [
            { x: zF_re, y: zF_im, label: 'F' },
            { x: zG_re, y: zG_im, label: 'G' },
            { x: zI_re2, y: zI_im2, label: 'I' },
            { x: zK_re, y: zK_im, label: 'K' },
            { x: zL_re, y: zL_im, label: 'L' },
            { x: D.x, y: D.y, label: 'D' }
        ];
        ctx.fillStyle = colorPoint;
        pts.forEach(p => {
            const xp = px(p.x);
            const yp = py(p.y);
            if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
                ctx.beginPath();
                ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '14px sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(p.label, xp + 8, yp - 6);
                ctx.fillStyle = colorPoint;
            }
        });

        // Légende
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cercle (ζ) centre I rayon 1', margin, margin - 10);
        ctx.fillText('Triangle DKL avec cercle inscrit', margin, margin + 12);
    } else {
        // Si dét nul, on ne trace pas D
        // On trace au moins les points de base
        const ptsBase = [
            { x: zF_re, y: zF_im, label: 'F' },
            { x: zG_re, y: zG_im, label: 'G' },
            { x: zI_re2, y: zI_im2, label: 'I' },
            { x: zK_re, y: zK_im, label: 'K' },
            { x: zL_re, y: zL_im, label: 'L' }
        ];
        ctx.fillStyle = colorPoint;
        ptsBase.forEach(p => {
            const xp = px(p.x);
            const yp = py(p.y);
            if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
                ctx.beginPath();
                ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = colorText;
                ctx.font = '14px sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(p.label, xp + 8, yp - 6);
                ctx.fillStyle = colorPoint;
            }
        });
        ctx.fillStyle = colorText;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Cercle (ζ)', margin, margin - 10);
    }
}

// ---- Figure 11 : Problème 13 – Cercle, losange OAQB ----
else if (type === 'probleme13_rhombus') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    // On veut voir de -3.5 à 3.5 en x et y
    const scale = Math.min(graphW, graphH) / 7; // 7 unités

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();
    ctx.fillStyle = colorAxis;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', cx + 4, cy + 14);
    ctx.fillText('u', w - margin + 8, cy + 4);
    ctx.fillText('v', cx + 4, margin - 4);

    // Cercle de centre O rayon 3
    ctx.beginPath();
    ctx.arc(cx, cy, 3 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Points : Q(√5,2), A et B calculés
    const sqrt5 = Math.sqrt(5);
    const sqrt3 = Math.sqrt(3);
    const qx = sqrt5;
    const qy = 2;
    // a = (√5+2i)*(1+i√3)/2
    const ar = (sqrt5 - 2*sqrt3) / 2;  // partie réelle : (√5 - 2√3)/2
    const ai = (2 + sqrt5*sqrt3) / 2;   // partie imaginaire : (2 + √15)/2
    // b = (√5+2i)*(1-i√3)/2
    const br = (sqrt5 + 2*sqrt3) / 2;   // (√5 + 2√3)/2
    const bi = (2 - sqrt5*sqrt3) / 2;   // (2 - √15)/2

    const pts = [
        { x: qx, y: qy, label: 'Q' },
        { x: ar, y: ai, label: 'A' },
        { x: br, y: bi, label: 'B' }
    ];

    // Tracer le losange O-A-Q-B
    ctx.beginPath();
    ctx.moveTo(cx, cy);                       // O
    ctx.lineTo(px(ar), py(ai));               // A
    ctx.lineTo(px(qx), py(qy));               // Q
    ctx.lineTo(px(br), py(bi));               // B
    ctx.closePath();
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Tracer les diagonales OQ et AB en pointillés fins
    ctx.strokeStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(px(qx), py(qy));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px(ar), py(ai));
    ctx.lineTo(px(br), py(bi));
    ctx.stroke();
    ctx.setLineDash([]);

    // Placer les points
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        }
    });

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Cercle (C) centre O rayon 3', margin, margin - 10);
    ctx.fillText('Losange OAQB', margin, margin + 12);
}

// ---- Figure 12 : Problème 14 – Cercle unité, tangente, médiatrice ----
else if (type === 'probleme14_cercle') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    // On veut voir de -2.5 à 2.5 en x et y
    const scale = Math.min(graphW, graphH) / 5; // 5 unités

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();
    ctx.fillStyle = colorAxis;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', cx + 4, cy + 14);
    ctx.fillText('u', w - margin + 8, cy + 4);
    ctx.fillText('v', cx + 4, margin - 4);

    // Cercle unité
    ctx.beginPath();
    ctx.arc(cx, cy, 1 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Points
    const sqrt2 = Math.sqrt(2);
    const A = { x: 1, y: 0 };
    const B = { x: sqrt2/2, y: sqrt2/2 };
    const C = { x: sqrt2, y: sqrt2 - 1 };

    // Tracer le segment [AC]
    ctx.beginPath();
    ctx.moveTo(px(A.x), py(A.y));
    ctx.lineTo(px(C.x), py(C.y));
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Tracer la tangente en B : droite perpendiculaire à OB
    // OB a pour vecteur (B.x, B.y). Un vecteur perpendiculaire est (-B.y, B.x).
    // On prolonge suffisamment.
    const tLength = 2.5; // de part et d'autre
    const tx1 = B.x - tLength * B.y;
    const ty1 = B.y + tLength * B.x;
    const tx2 = B.x + tLength * B.y;
    const ty2 = B.y - tLength * B.x;
    ctx.beginPath();
    ctx.moveTo(px(tx1), py(ty1));
    ctx.lineTo(px(tx2), py(ty2));
    ctx.strokeStyle = isDark ? '#fbbf24' : '#d97706';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Marquer le milieu M de [AC] sur la tangente (pour visualiser)
    const Mx = (A.x + C.x) / 2;
    const My = (A.y + C.y) / 2;

    // Placer les points A, B, C, M
    const pts = [
        { x: A.x, y: A.y, label: 'A' },
        { x: B.x, y: B.y, label: 'B' },
        { x: C.x, y: C.y, label: 'C' },
        { x: Mx, y: My, label: 'M' }
    ];
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        if (xp > margin && xp < w - margin && yp > margin && yp < h - margin) {
            ctx.beginPath();
            ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(p.label, xp + 8, yp - 6);
            ctx.fillStyle = colorPoint;
        }
    });

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Cercle ζ : centre O, rayon 1', margin, margin - 10);
    ctx.fillText('Tangente T en B = médiatrice de [AC]', margin, margin + 12);
}

// ---- Figure 13 : Problème 15 – Transformation complexe, médiatrice, cercle ----
else if (type === 'probleme15_transformation') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    // On veut voir de -2.5 à 2.5 en x et y
    const scale = Math.min(graphW, graphH) / 5; // 5 unités

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();
    ctx.fillStyle = colorAxis;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', cx + 4, cy + 14);
    ctx.fillText('u', w - margin + 8, cy + 4);
    ctx.fillText('v', cx + 4, margin - 4);

    // Médiatrice Δ de [AB] : axe des ordonnées (x=0)
    ctx.strokeStyle = isDark ? '#fbbf24' : '#d97706';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Δ', cx + 6, margin + 12);

    // Cercle Γ de diamètre [AB] : centre O, rayon 1
    ctx.beginPath();
    ctx.arc(cx, cy, 1 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Γ', cx + 6, cy - 8);

    // Points A(1) et B(-1)
    const pts = [
        { x: 1, y: 0, label: 'A' },
        { x: -1, y: 0, label: 'B' }
    ];
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        ctx.beginPath();
        ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(p.label, xp + 8, yp - 6);
        ctx.fillStyle = colorPoint;
    });

    // Exemple : point M sur le cercle Γ (par exemple à l'angle π/3)
    // z = e^(iπ/3) = 1/2 + i√3/2
    const theta = Math.PI / 3;
    const Mx = Math.cos(theta);
    const My = Math.sin(theta);
    // Calcul de l'image M' par f : z' = 1/2 (z + 1/z)
    // Pour z = e^(iθ), 1/z = e^(-iθ), donc z' = 1/2 (e^(iθ) + e^(-iθ)) = cosθ (réel)
    const Mpx = Math.cos(theta);
    const Mpy = 0; // M' est sur l'axe des abscisses

    // Tracer le segment [M M'] (ligne pointillée pour relier)
    ctx.beginPath();
    ctx.moveTo(px(Mx), py(My));
    ctx.lineTo(px(Mpx), py(Mpy));
    ctx.strokeStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Points M et M'
    ctx.fillStyle = isDark ? '#f87171' : '#dc2626';
    ctx.beginPath();
    ctx.arc(px(Mx), py(My), 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = colorText;
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('M', px(Mx) + 8, py(My) - 6);
    ctx.fillStyle = isDark ? '#34d399' : '#16a34a';
    ctx.beginPath();
    ctx.arc(px(Mpx), py(Mpy), 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = colorText;
    ctx.font = '14px sans-serif';
    ctx.fillText("M'", px(Mpx) + 8, py(Mpy) - 6);

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('M sur Γ → M\' sur (AB)', margin, margin - 10);
    ctx.fillText('Δ : médiatrice de [AB]', margin, margin + 12);
}

// ---- Figure 14 : Problème 16 – Triangle OM'M'' isocèle en O ----
else if (type === 'probleme16_triangle') {
    const margin = 40;
    const graphW = w - 2 * margin;
    const graphH = h - 2 * margin;
    const cx = margin + graphW / 2;
    const cy = margin + graphH / 2;
    const scale = Math.min(graphW, graphH) / 3.5; // de -1.5 à 1.5

    const px = (x) => cx + x * scale;
    const py = (y) => cy - y * scale;

    // Axes
    ctx.strokeStyle = colorAxis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(margin, cy);
    ctx.lineTo(w - margin, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, margin);
    ctx.lineTo(cx, h - margin);
    ctx.stroke();

    // Flèches et légendes des axes
    ctx.fillStyle = colorAxis;
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('O', cx - 16, cy + 16);
    ctx.fillText('u', w - margin + 8, cy + 4);
    ctx.fillText('v', cx + 4, margin - 6);

    // Cercle unité
    ctx.beginPath();
    ctx.arc(cx, cy, 1 * scale, 0, 2 * Math.PI);
    ctx.strokeStyle = colorCurve;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Pour l'exemple, on prend θ = π/6 (la valeur qui rend le triangle isocèle)
    const theta = Math.PI / 6;
    // D'après II.4 : z' = e^(i(θ/2 + 3π/4)) / (2 cos(θ/2 + π/4))
    // Pour θ = π/6, on a θ/2 = π/12, θ/2 + π/4 = π/3, cos = 1/2, donc |z'| = 1
    // et arg(z') = π/12 + 3π/4 = π/12 + 9π/12 = 10π/12 = 5π/6
    const zF_re = Math.cos(5 * Math.PI / 6); // -√3/2 ≈ -0.866
    const zF_im = Math.sin(5 * Math.PI / 6); // 1/2
    // z'' = i => (0, 1)
    const zI_re = 0;
    const zI_im = 1;

    // Tracer le triangle OM'M''
    ctx.beginPath();
    ctx.moveTo(cx, cy);                     // O
    ctx.lineTo(px(zF_re), py(zF_im));       // M'
    ctx.lineTo(px(zI_re), py(zI_im));       // M''
    ctx.closePath();
    ctx.strokeStyle = colorSegment;
    ctx.lineWidth = 1.5;
    ctx.fillStyle = isDark ? 'rgba(52,211,153,0.15)' : 'rgba(22,163,74,0.12)';
    ctx.fill();
    ctx.stroke();

    // Marquer l'angle droit ? Non, c'est un triangle isocèle, pas rectangle.

    // Points M' et M''
    const pts = [
        { x: zF_re, y: zF_im, label: "M'" },
        { x: zI_re, y: zI_im, label: "M''" }
    ];
    ctx.fillStyle = colorPoint;
    pts.forEach(p => {
        const xp = px(p.x);
        const yp = py(p.y);
        ctx.beginPath();
        ctx.arc(xp, yp, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = colorText;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(p.label, xp + 8, yp - 6);
        ctx.fillStyle = colorPoint;
    });

    // Afficher θ sur la figure (petit arc)
    ctx.strokeStyle = isDark ? '#fbbf24' : '#d97706';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 0.25 * scale, 0, -theta, false);
    ctx.stroke();
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    const labelX = cx + 0.35 * scale * Math.cos(-theta/2);
    const labelY = cy + 0.35 * scale * Math.sin(-theta/2);
    ctx.fillText('θ', labelX + 4, labelY + 4);

    // Légende
    ctx.fillStyle = colorText;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Cercle unité (rayon 1)', margin, margin - 10);
    ctx.fillText('Triangle OM\'M\'\' isocèle en O', margin, margin + 12);
    ctx.fillText(`θ = π/6  (exemple)`, margin, margin + 28);
}


    }); // fin de forEach canvas
} // fin de drawFigures

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
    currentPage = 'accueil'; currentId = null; buildNav('accueil', null);
    let html = `
        <section class="hero">
            <img src="assets/images/logo.png" alt="LOGICAMATHS">
            <h1>COMPLEXE 3.1</h1>
            <p class="subtitle">L'Analyse Complexe Réinventée</p>
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
    currentPage = 'resumes'; currentId = null; buildNav('resumes', null);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📚 Résumés – Nombres complexes</h2>
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
    currentPage = 'fiches'; currentId = null; buildNav('fiches', null);
    let html = `
        <div class="chapitre-card-style">
            <div class="chapitre-header-style">
                <h2>📋 Fiche de synthèse – Nombres complexes</h2>
                <span class="badge">Toutes les formules</span>
            </div>
            <div class="chapitre-sous-titre">Synthèse complète des nombres complexes</div>
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
    currentPage = 'aideMemoire'; currentId = null; buildNav('aideMemoire', null);
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

// 8.6 Chapitre
function renderChapitre(id) {
    if (typeof data === 'undefined' || !data.chapitres) { renderAccueil(); return; }
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