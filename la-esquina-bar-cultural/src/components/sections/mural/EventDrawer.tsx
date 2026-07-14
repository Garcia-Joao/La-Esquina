import { useState } from "react";

import "./EventDrawer.css";

import type { EventData } from "../../../types/event";

interface Props {

    event: EventData | null;

    onClose: () => void;

}

export default function EventDrawer({

    event,

    onClose

}: Props) {

    const [selectedArtist, setSelectedArtist] = useState<number | null>(null);

    if (!event) return null;

    return (

        <div
            className="drawer-overlay"
            onClick={onClose}
        >

            <aside
                className="drawer"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="drawer-close"
                    onClick={onClose}
                >
                    ✕
                </button>

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

                            <strong>DATA</strong>

                            <span>

                                {event.date}

                            </span>

                        </div>

                        <div>

                            <strong>HORÁRIO</strong>

                            <span>

                                {event.hour}

                            </span>

                        </div>

                        <div>

                            <strong>ENTRADA</strong>

                            <span>

                                {event.price}

                            </span>

                        </div>

                    </div>

                    <div className="artists">

                        <h3>

                            Atrações

                        </h3>

                        <div className="artist-list">

                            {

                                event.artists.map((artist) => (

                                    <div

                                        key={artist.id}

                                        className={`artist-row ${selectedArtist === artist.id ? "open" : ""}`}

                                    >

                                        <button

                                            className="artist-button"

                                            onClick={() =>

                                                setSelectedArtist(

                                                    selectedArtist === artist.id

                                                        ? null

                                                        : artist.id

                                                )

                                            }

                                        >

                                            <div className="artist-info">

                                                <strong>

                                                    {artist.name}

                                                </strong>

                                                <small>

                                                    {artist.description}

                                                </small>

                                            </div>

                                        </button>

                                        <div className="artist-links">

                                            {

                                                artist.instagram && (

                                                    <a

                                                        href={artist.instagram}

                                                        target="_blank"

                                                        rel="noreferrer"

                                                    >

                                                        Instagram

                                                    </a>

                                                )

                                            }

                                            {

                                                artist.spotify && (

                                                    <a

                                                        href={artist.spotify}

                                                        target="_blank"

                                                        rel="noreferrer"

                                                    >

                                                        Spotify

                                                    </a>

                                                )

                                            }

                                            {

                                                artist.youtube && (

                                                    <a

                                                        href={artist.youtube}

                                                        target="_blank"

                                                        rel="noreferrer"

                                                    >

                                                        YouTube

                                                    </a>

                                                )

                                            }

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    <div className="drawer-actions">

                        <button className="primary">

                            Comprar Ingresso

                        </button>

                        <button

                            className="secondary"

                            onClick={onClose}

                        >

                            Fechar

                        </button>

                    </div>

                </div>

            </aside>

        </div>

    );

}