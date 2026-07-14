import { useState, useEffect } from "react";
import {
    FaInstagram,
    FaSpotify,
    FaYoutube,
    FaTicketAlt,
    FaTimes,
    FaCalendarAlt,
    FaClock
} from "react-icons/fa";

import "./EventDrawer.css";
import type { EventData } from "../../../types/event";

interface Props {
    event: EventData | null;
    onClose: () => void;
}

export default function EventDrawer({ event, onClose }: Props) {
    const [isClosing, setIsClosing] = useState(false);

    // Reseta o estado de fechamento sempre que um novo evento for aberto
    useEffect(() => {
        if (event) {
            setIsClosing(false);
        }
    }, [event]);

    // Função que aciona a animação e aguarda antes de fechar de verdade
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Tempo exato da nossa animação no CSS
    };

    if (!event) return null;

    return (
        <div 
            className={`event-overlay ${isClosing ? "overlay-out" : ""}`} 
            onClick={handleClose}
        >
            <div 
                className={`event-container ${isClosing ? "card-out" : ""}`} 
                onClick={(e) => e.stopPropagation()}
            >
                
                {/* POSTER SOLTO À ESQUERDA */}
                <div className="event-poster-floating">
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className="event-poster-img" 
                    />
                </div>

                {/* CARD DE CONTEÚDO À DIREITA */}
                <article className="event-card-compact">
                    
                    {/* BOTÃO DE FECHAR ATUALIZADO */}
                    <button className="event-close" onClick={handleClose}>
                        <FaTimes />
                    </button>
                    
                    <header className="event-header">
                        <span className="event-category">
                            {event.category}
                        </span>
                        
                        <h1>{event.title}</h1>
                        
                        <div className="event-meta">
                            <span>
                                <FaCalendarAlt /> {event.date}
                            </span>
                            <span>
                                <FaClock /> {event.hour}
                            </span>
                            <span>
                                <FaTicketAlt /> {event.price}
                            </span>
                        </div>
                    </header>

                    <p className="event-description">
                        {event.description}
                    </p>

                    <section className="artists">
                        <h2>Atrações</h2>
                        <div className="artist-grid">
                            {event.artists.map(artist => (
                                <div className="artist" key={artist.id}>
                                    <div>
                                        <strong>{artist.name}</strong>
                                        <small>{artist.description}</small>
                                    </div>
                                    <nav>
                                        {artist.instagram && (
                                            <a href={artist.instagram} target="_blank" rel="noreferrer">
                                                <FaInstagram />
                                            </a>
                                        )}
                                        {artist.spotify && (
                                            <a href={artist.spotify} target="_blank" rel="noreferrer">
                                                <FaSpotify />
                                            </a>
                                        )}
                                        {artist.youtube && (
                                            <a href={artist.youtube} target="_blank" rel="noreferrer">
                                                <FaYoutube />
                                            </a>
                                        )}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    </section>

                    <button className="ticket-button">
                        <FaTicketAlt />
                        Comprar ingresso
                    </button>
                    
                </article>
            </div>
        </div>
    );
}