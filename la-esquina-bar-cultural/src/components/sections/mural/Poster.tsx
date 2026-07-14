import type { PosterLayout } from "./layout";
import type { EventData } from "../../../types/event";


interface Props {

    event: EventData;

    layout: PosterLayout;

    active: boolean;

    onHover: () => void;

    onLeave: () => void;

    onClick: () => void;

}



export default function Poster({

    event,

    layout,

    active,

    onHover,

    onLeave,

    onClick


}: Props) {


    return (

        <article


            className={

                `poster

                ${active ? "active" : ""}

                ${layout.featured ? "featured" : ""}

                `

            }



            style={{


                width:layout.width,


                height:layout.height,


                left:layout.x,


                top:layout.y,


                zIndex:

                    active

                    ? 999

                    : layout.zIndex,



                transform:

                    active

                    ?

                    `
                    translateY(-18px)
                    rotate(0deg)
                    scale(1.08)
                    `

                    :

                    `
                    rotate(${layout.rotation}deg)
                    `

            }}



            onMouseEnter={onHover}

            onMouseLeave={onLeave}

            onClick={onClick}


        >


            <img

                src={event.image}

                alt={event.title}

            />



            {
                layout.featured && (

                    <span className="featured-label">

                        PRÓXIMO EVENTO

                    </span>

                )
            }



        </article>

    );

}