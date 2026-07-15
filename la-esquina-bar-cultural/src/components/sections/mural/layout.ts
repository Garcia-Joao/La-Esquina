export interface PosterLayout {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    zIndex: number;
    featured?: boolean;
}

const ROTATIONS = [-8, -6, -4, -2, 2, 4, 6, 8];

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

/**
 * Define o tamanho base dos posters e aplica redução se for Mobile
 */
function getPosterSize(amount: number, isMobile: boolean) {
    const scale = isMobile ? 0.6 : 1; // Reduz o tamanho em 40% no celular

    if (amount <= 4) return { width: 260 * scale, height: 370 * scale };
    if (amount <= 6) return { width: 225 * scale, height: 320 * scale };
    if (amount <= 8) return { width: 195 * scale, height: 280 * scale };
    if (amount <= 10) return { width: 175 * scale, height: 250 * scale };
    if (amount <= 14) return { width: 160 * scale, height: 230 * scale };
    return { width: 145 * scale, height: 210 * scale };
}

export function generatePosterLayout(
    amount: number,
    muralWidth: number,
    muralHeight: number
): PosterLayout[] {
    const posters: PosterLayout[] = [];
    
    // Detecta se a largura do container é de celular
    const isMobile = muralWidth < 768;
    const padding = isMobile ? 15 : 50;

    /* COMPOSIÇÃO FIXA (Até 4 eventos) */
    if (amount <= 4) {
        const compositions = [
            [{ x: .22, y: .15, w: .42, h: .62 }],
            [
                { x: .12, y: .18, w: .38, h: .55 },
                { x: .52, y: .25, w: .36, h: .55 }
            ],
            [
                { x: .08, y: .18, w: .35, h: .52 },
                { x: .35, y: .08, w: .36, h: .58 },
                { x: .62, y: .35, w: .28, h: .42 }
            ],
            [
                { x: .08, y: .15, w: .32, h: .5 },
                { x: .35, y: .08, w: .34, h: .56 },
                { x: .63, y: .18, w: .28, h: .45 },
                { x: .25, y: .55, w: .32, h: .38 }
            ]
        ];

        const composition = compositions[amount - 1];

        composition.forEach((item, index) => {
            posters.push({
                x: item.x * muralWidth,
                y: item.y * muralHeight,
                width: item.w * muralWidth,
                height: item.h * muralHeight,
                rotation: ROTATIONS[index % ROTATIONS.length],
                zIndex: index + 1
            });
        });

        return posters;
    }

    /* COMPOSIÇÃO CAÓTICA ORGÂNICA (Mais de 4 eventos) */
    const size = getPosterSize(amount, isMobile);

    for (let i = 0; i < amount; i++) {
        // Math.max evita bugs matemáticos caso a tela seja extremamente pequena
        posters.push({
            x: random(padding, Math.max(padding, muralWidth - size.width - padding)),
            y: random(padding, Math.max(padding, muralHeight - size.height - padding)),
            width: size.width,
            height: size.height,
            rotation: ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)],
            zIndex: i + 1
        });
    }

    return posters;
}