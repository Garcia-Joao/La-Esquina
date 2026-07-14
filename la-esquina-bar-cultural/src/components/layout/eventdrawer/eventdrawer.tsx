import "./EventDrawer.css";

import type { EventData } from "../../../constants/events";

interface Props {

    event: EventData | null;

    onClose: () => void;

}

export default function EventDrawer({

    event,

    onClose

}: Props) {

    return (

        <>

            <div

                className={`drawer-overlay ${event ? "open" : ""}`}

                onClick={onClose}

            />

            <aside className={`drawer ${event ? "open" : ""}`}>

                <button
                    className="drawer-close"
                    onClick={onClose}
                >
                    ✕
                </button>

                {

                    event && (

                        <>

                            <div className="drawer-poster">

                                <img
                                    src={event.image}
                                    alt={event.title}
                                />

                            </div>

                            <div className="drawer-content">

                                <span className="category">

                                    {event.category}

                                </span>

                                <h2>

                                    {event.title}

                                </h2>

                                <p>

                                    {event.description}

                                </p>

                                <div className="drawer-info">

                                    <div>

                                        <strong>📅 Data</strong>

                                        <span>{event.date}</span>

                                    </div>

                                    <div>

                                        <strong>🕗 Horário</strong>

                                        <span>{event.hour}</span>

                                    </div>

                                    <div>

                                        <strong>💰 Entrada</strong>

                                        <span>{event.price}</span>

                                    </div>

                                </div>

                                <div className="bands">

                                    <h3>Bandas</h3>

                                    <ul>

                                        {event.bands.map(band => (

                                            <li key={band}>{band}</li>

                                        ))}

                                    </ul>

                                </div>

                                <button>

                                    Comprar Ingresso

                                </button>

                            </div>

                        </>

                    )

                }

            </aside>

        </>

    );

}