window.problemes = {
    titre: "Problèmes de Géométrie dans l'Espace",
    description: "Problèmes types pour le bac (4ème Sciences Techniques)",
    items: [
        {
            id: 1,
            titre: "Étude d'un tétraèdre",
            enonce: "Soit \\(ABCD\\) un tétraèdre tel que \\(AB=AC=AD=1\\) et les triangles \\(ABC, ABD, ACD\\) sont rectangles en \\(A\\). On munit l’espace du repère orthonormé \\((A, \\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD})\\).",
            questions: [
                {
                    id: "prob1_q1",
                    texte: "Donner les coordonnées des points \\(A,B,C,D\\).",
                    solution: "\\(A(0,0,0), B(1,0,0), C(0,1,0), D(0,0,1)\\)."
                },
                {
                    id: "prob1_q2",
                    texte: "Montrer que \\(\\overrightarrow{BC}\\cdot\\overrightarrow{AD}=0\\).",
                    solution: "\\(\\overrightarrow{BC}=(-1,1,0)\\), \\(\\overrightarrow{AD}=(0,0,1)\\), produit scalaire = 0."
                }
            ],
            astuces: "💡 Utiliser le repère orthonormé pour simplifier.",
            erreurs: "⚠️ Ne pas confondre les coordonnées."
        }
    ]
};