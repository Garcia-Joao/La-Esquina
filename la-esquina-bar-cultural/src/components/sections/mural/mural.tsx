import { useMemo, useState } from "react";

import "./mural.css";

import Container from "../../ui/container/container";
import EventDrawer from "../../layout/eventdrawer/eventdrawer";

import Poster from "./Poster";
import { generatePosterLayout } from "./layout";

import { events, type EventData } from "../../../constants/events";

export default function Mural() {

    const layouts = useMemo(
        () => generatePosterLayout(events.length, 900, 700),
        []
    );

    const [hovered, setHovered] = useState<number | null>(null);

    const [selected, setSelected] = useState<EventData | null>(null);

    return (

        <section className="mural-section" id="eventos">

            <Container>

                <div className="mural-header">

                    <span>ESTA SEMANA</span>

                    <h2>Agenda Cultural</h2>

                </div>

                <div className="mural-layout">

                    <div className="poster-board">

                        {events.map((event, index) => (

                            <Poster

                                key={event.id}

                                event={event}

                                layout={layouts[index]}

                                active={hovered === event.id}

                                onHover={() => setHovered(event.id)}

                                onLeave={() => setHovered(null)}

                                onClick={() => setSelected(event)}

                            />

                        ))}

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