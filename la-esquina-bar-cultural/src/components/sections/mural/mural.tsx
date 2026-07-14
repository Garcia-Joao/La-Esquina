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

    useEffect(() => {

        if (!boardRef.current)
            return;

        const resize = () => {

            if (!boardRef.current)
                return;

            const width = boardRef.current.clientWidth;

            const height = boardRef.current.clientHeight;

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

        const observer = new ResizeObserver(resize);

        observer.observe(boardRef.current);

        return () => observer.disconnect();

    }, []);

    // Quantidade de colunas utilizada também para definir a altura
    const columnCount =
        events.length <= 4 ? 2 :
        events.length <= 6 ? 3 :
        events.length <= 9 ? 4 :
        events.length <= 12 ? 5 :
        6;

    const rowCount = Math.ceil(events.length / columnCount);

    // Cresce conforme aumenta a agenda
    const boardHeight = Math.max(

        820,

        rowCount * 340

    );

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

    const [hovered, setHovered] = useState<number | null>(null);

    const [selected, setSelected] = useState<EventData | null>(null);

    return (

        <section

            className="mural-section"

            id="eventos"

        >

            <Container>

                <div className="mural-header">

                    <span>ESTA SEMANA</span>

                    <h2>Agenda Cultural</h2>

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

                                        layout={layouts[index]}

                                        active={hovered === event.id}

                                        onHover={() => setHovered(event.id)}

                                        onLeave={() => setHovered(null)}

                                        onClick={() => setSelected(event)}

                                    />

                                )

                            )

                        }

                    </div>

                    <aside className="agenda">

                        <h3>Agenda</h3>

                        {

                            events.map(event => (

                                <button

                                    key={event.id}

                                    className={`event-item ${hovered === event.id ? "active" : ""}`}

                                    onMouseEnter={() => setHovered(event.id)}

                                    onMouseLeave={() => setHovered(null)}

                                    onClick={() => setSelected(event)}

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

                onClose={() => setSelected(null)}

            />

        </section>

    );

}