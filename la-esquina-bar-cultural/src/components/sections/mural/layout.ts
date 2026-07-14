export interface PosterLayout {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    zIndex: number;
}

const SIZES = [
    { width: 220, height: 310 },
    { width: 240, height: 340 },
    { width: 260, height: 370 }
];

const ROTATIONS = [-8, -6, -4, -2, 2, 4, 6, 8];

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function generatePosterLayout(
    amount: number,
    muralWidth: number,
    muralHeight: number
): PosterLayout[] {

    const posters: PosterLayout[] = [];

    const cols = 4;
    const rows = Math.max(1, Math.ceil(amount / cols));

    const cellWidth = muralWidth / cols;
    const cellHeight = muralHeight / rows;

    const used = new Set<string>();

    for (let i = 0; i < amount; i++) {

        let row = 0;
        let col = 0;
        let key = "";

        do {

            row = Math.floor(Math.random() * rows);
            col = Math.floor(Math.random() * cols);

            key = `${row}-${col}`;

        } while (used.has(key));

        used.add(key);

        const size = SIZES[Math.floor(Math.random() * SIZES.length)];

        posters.push({

            width: size.width,
            height: size.height,

            x:
                col * cellWidth +
                (cellWidth - size.width) / 2 +
                random(-30, 30),

            y:
                row * cellHeight +
                (cellHeight - size.height) / 2 +
                random(-20, 20),

            rotation:
                ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)],

            zIndex: i

        });

    }

    return posters;
}