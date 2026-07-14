export interface PosterLayout {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    zIndex: number;
}

const ROTATIONS = [-8, -6, -4, -2, 2, 4, 6, 8];

const BOARD_PADDING = 40;

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

function shuffle<T>(array: T[]): T[] {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];

    }

    return copy;
}

/**
 * Define automaticamente o tamanho dos posters.
 */
function getPosterSize(amount: number) {

    if (amount <= 4)
        return { width: 260, height: 370 };

    if (amount <= 6)
        return { width: 225, height: 320 };

    if (amount <= 8)
        return { width: 195, height: 280 };

    if (amount <= 10)
        return { width: 175, height: 250 };

    if (amount <= 14)
        return { width: 160, height: 230 };

    return { width: 145, height: 210 };
}

/**
 * Quantidade de colunas baseada na quantidade de eventos.
 */
function getColumnCount(amount: number) {

    if (amount <= 4)
        return 2;

    if (amount <= 6)
        return 3;

    if (amount <= 9)
        return 4;

    if (amount <= 12)
        return 5;

    return 6;
}

export function generatePosterLayout(
    amount: number,
    muralWidth: number,
    muralHeight: number
): PosterLayout[] {

    const posters: PosterLayout[] = [];

    const size = getPosterSize(amount);

    const cols = getColumnCount(amount);

    const rows = Math.ceil(amount / cols);

    const usableWidth = muralWidth - BOARD_PADDING * 2;
    const usableHeight = muralHeight - BOARD_PADDING * 2;

    const cellWidth = usableWidth / cols;
    const cellHeight = usableHeight / rows;

    const slots: { row: number; col: number }[] = [];

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            slots.push({
                row,
                col
            });

        }

    }

    const shuffled = shuffle(slots);

    for (let i = 0; i < amount; i++) {

        const slot = shuffled[i];

        const x = clamp(

            BOARD_PADDING +

            slot.col * cellWidth +

            (cellWidth - size.width) / 2 +

            random(-22, 22),

            BOARD_PADDING,

            muralWidth - size.width - BOARD_PADDING

        );

        const y = clamp(

            BOARD_PADDING +

            slot.row * cellHeight +

            (cellHeight - size.height) / 2 +

            random(-18, 18),

            BOARD_PADDING,

            muralHeight - size.height - BOARD_PADDING

        );

        posters.push({

            x,

            y,

            width: size.width,

            height: size.height,

            rotation:
                ROTATIONS[
                    Math.floor(
                        Math.random() * ROTATIONS.length
                    )
                ],

            zIndex: i + 1

        });

    }

    return posters;
}