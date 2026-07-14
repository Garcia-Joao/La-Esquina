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

export function generatePosterLayout(
    amount:number,
    muralWidth:number,
    muralHeight:number
):PosterLayout[] {


    const posters:PosterLayout[] = [];


    const padding = 50;



    /*
        Poucos eventos:
        Faz composição de mural
    */

    if(amount <= 4){


        const compositions = [

            [
                {
                    x:.22,
                    y:.15,
                    w:.42,
                    h:.62
                }
            ],


            [

                {
                    x:.12,
                    y:.18,
                    w:.38,
                    h:.55
                },

                {
                    x:.52,
                    y:.25,
                    w:.36,
                    h:.55
                }

            ],


            [

                {
                    x:.08,
                    y:.18,
                    w:.35,
                    h:.52
                },


                {
                    x:.35,
                    y:.08,
                    w:.36,
                    h:.58
                },


                {
                    x:.62,
                    y:.35,
                    w:.28,
                    h:.42
                }

            ],


            [

                {
                    x:.08,
                    y:.15,
                    w:.32,
                    h:.5
                },


                {
                    x:.35,
                    y:.08,
                    w:.34,
                    h:.56
                },


                {
                    x:.63,
                    y:.18,
                    w:.28,
                    h:.45
                },


                {
                    x:.25,
                    y:.55,
                    w:.32,
                    h:.38
                }

            ]

        ];



        const composition =
            compositions[amount-1];



        composition.forEach((item,index)=>{


            posters.push({


                x:
                    item.x * muralWidth,


                y:
                    item.y * muralHeight,



                width:
                    item.w * muralWidth,



                height:
                    item.h * muralHeight,



                rotation:
                    ROTATIONS[
                        index % ROTATIONS.length
                    ],



                zIndex:index+1


            });


        });


        return posters;

    }





    /*
        Muitos eventos:
        continua usando distribuição orgânica
    */


    const size = getPosterSize(amount);



    for(let i=0;i<amount;i++){


        posters.push({


            x:
                random(
                    padding,
                    muralWidth-size.width-padding
                ),



            y:
                random(
                    padding,
                    muralHeight-size.height-padding
                ),



            width:size.width,



            height:size.height,



            rotation:
                ROTATIONS[
                    Math.floor(
                        Math.random()*ROTATIONS.length
                    )
                ],



            zIndex:i+1


        });


    }



    return posters;

}