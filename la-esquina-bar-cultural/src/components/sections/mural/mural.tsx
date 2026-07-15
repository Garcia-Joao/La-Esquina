import { useEffect, useMemo, useRef, useState } from "react";

import "./mural.css";

import Container from "../../common/container/container";
import EventDrawer from "./EventDrawer";
import Poster from "./Poster";

import { generatePosterLayout } from "./layout";

import type { EventData } from "../../../types/event";
import { events } from "../../../data/events";


export default function Mural() {


    const boardRef = useRef<HTMLDivElement>(null);



    const [boardSize, setBoardSize] = useState({

        width: 1000,

        height: 820

    });





    const [hovered, setHovered] = useState<number | null>(null);


    const [selected, setSelected] = useState<EventData | null>(null);





    useEffect(() => {


        if (!boardRef.current)
            return;



        const resize = () => {


            if (!boardRef.current)
                return;



            const width =
                boardRef.current.clientWidth;



            const height =
                boardRef.current.clientHeight;



            setBoardSize(previous => {


                if (

                    previous.width === width &&

                    previous.height === height

                ) {

                    return previous;

                }



                return {

                    width,

                    height

                };


            });


        };



        resize();



        const observer =
            new ResizeObserver(resize);



        observer.observe(boardRef.current);



        return () => {

            observer.disconnect();

        };


    }, []);







    /*
        Altura do mural.
        Mantém espaço para composição artística.
    */


    /* Substitua o seu cálculo de boardHeight atual por este: */
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Executa ao carregar
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const boardHeight = useMemo(() => {
        // Se for mobile, usamos uma altura bem menor para concentrar os pôsteres
        if (isMobile) {
            if (events.length <= 2) return 400; // Pôsteres grandes, pouco espaço
            if (events.length <= 4) return 550; // Pôsteres médios, altura reduzida
            return 700; // Caso tenha muitos eventos
        }

        // Altura original para desktop
        if (events.length <= 4) return 850;
        if (events.length <= 8) return 1100;
        return Math.ceil(events.length / 4) * 330;
    }, [events.length, isMobile]);


    const layouts = useMemo(


        () =>


            generatePosterLayout(

                events.length,

                boardSize.width,

                boardHeight

            ),



        [

            boardSize.width,

            boardHeight,

            events.length

        ]


    );








    /*
        Próximo evento da agenda
    */


    const nextEventId = useMemo(() => {


        const now = new Date();



        const upcoming = events

            .filter(event =>

                new Date(event.date) >= now

            )


            .sort((a, b) =>

                new Date(a.date).getTime()

                -

                new Date(b.date).getTime()

            );



        return upcoming[0]?.id;



    }, []);









    return (


        <section

            className="mural-section"

            id="eventos"

        >



            <Container>


                <div className="mural-header">


                    <span>

                        ESTA SEMANA

                    </span>


                    <h2>

                        Agenda Cultural

                    </h2>


                </div>







                <div className="mural-layout">



                    <div


                        ref={boardRef}


                        className="poster-board"


                        style={{

                            height: boardHeight

                        }}


                    >



                        {


                            events.map((event, index) =>



                                layouts[index] && (


                                    <Poster


                                        key={event.id}


                                        event={event}



                                        layout={{

                                            ...layouts[index],

                                            featured:

                                                event.id === nextEventId

                                        }}



                                        active={

                                            hovered === event.id

                                        }



                                        onHover={() =>

                                            setHovered(event.id)

                                        }



                                        onLeave={() =>

                                            setHovered(null)

                                        }



                                        onClick={() =>

                                            setSelected(event)

                                        }


                                    />


                                )


                            )


                        }



                    </div>









                    <aside className="agenda">



                        <h3>

                            Agenda

                        </h3>




                        {


                            events.map(event => (


                                <button


                                    key={event.id}


                                    className={

                                        `event-item

                                        ${hovered === event.id

                                            ? "active"

                                            : ""

                                        }`

                                    }



                                    onMouseEnter={() =>

                                        setHovered(event.id)

                                    }



                                    onMouseLeave={() =>

                                        setHovered(null)

                                    }



                                    onClick={() =>

                                        setSelected(event)

                                    }


                                >



                                    <strong>

                                        {event.title}

                                    </strong>



                                    <span>

                                        {event.date}

                                    </span>



                                </button>


                            ))


                        }



                    </aside>



                </div>




            </Container>








            <EventDrawer


                event={selected}


                onClose={() =>

                    setSelected(null)

                }


            />



        </section>


    );

}