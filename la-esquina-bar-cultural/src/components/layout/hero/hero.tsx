import { useState, useEffect } from "react";
import vinyl from "../../../assets/images/vinyl.png";
import "./hero.css";

const PLAYLIST_URL = "https://open.spotify.com/playlist/4yExmCJFJpPq7zAUk8K42h?si=911a6f1b6fc04026"; 

export default function Hero() {
    const [playlistCover, setPlaylistCover] = useState<string>("");
    const [playlistTitle, setPlaylistTitle] = useState<string>("Playlist La Esquina");

    useEffect(() => {
    const fetchPlaylistData = async () => {
        try {
            // Requisição corrigida usando a crase (template literal) e o caractere $ correto:
            const response = await fetch(
                `https://open.spotify.com/oembed?url=${encodeURIComponent(PLAYLIST_URL)}`
            );
            
            if (!response.ok) throw new Error("Falha ao buscar dados do Spotify");
            
            const data = await response.json();
            
            // Puxa o link direto da imagem gerada pelo Spotify
            if (data.thumbnail_url) {
                setPlaylistCover(data.thumbnail_url);
            }
            if (data.title) {
                setPlaylistTitle(data.title);
            }
        } catch (error) {
            console.error("Erro ao carregar capa do Spotify:", error);
            // Fallback caso a API falhe ou dê limite de requisições
            setPlaylistCover("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop");
        }
    };

    fetchPlaylistData();
}, []);

    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="hero-noise"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-tags">
                        <span>BAR</span>
                        <span>CULTURA</span>
                        <span>MÚSICA</span>
                    </div>

                    <h1>
                        A esquina <br />
                        onde a <span>cidade</span> <br />
                        se encontra.
                    </h1>

                    <p>
                        Música ao vivo, cervejas artesanais,
                        gastronomia criativa, livros, vinis
                        e encontros que acontecem naturalmente.
                    </p>

                    <div className="buttons">
                        <button className="primary">
                            Ver Agenda
                        </button>
                        <button className="secondary">
                            Conheça a La Esquina
                        </button>
                    </div>
                </div>

                <div className="hero-brand">
                    <div className="vinyl-player">
                        
                        {/* VINIL QUE GIRA */}
                        <div className="vinyl">
                            <img
                                src={vinyl}
                                alt="Vinil La Esquina"
                                className="vinyl-disk"
                            />
                            
                            {/* Capa da playlist renderizada dinamicamente no centro */}
                            {playlistCover && (
                                <img
                                    src={playlistCover}
                                    alt={playlistTitle}
                                    className="vinyl-cover"
                                />
                            )}
                            
                            {/* O furinho clássico no centro do disco */}
                            <div className="vinyl-hole"></div>
                        </div>

                        {/* CARD DO SPOTIFY ATUALIZADO */}
                        <div className="spotify-card">
                            <span>Tocando agora</span>
                            <strong>{playlistTitle}</strong>
                            <p>
                                Sons para encontros,
                                conversas e histórias.
                            </p>
                            <a
                                href={PLAYLIST_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="spotify-button"
                            >
                                ▶ Ouvir Playlist
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}