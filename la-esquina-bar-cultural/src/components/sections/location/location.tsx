import "./location.css";

export default function Location() {
    // Endereço real do Clube Come Together
    const address = "R. Marechal Deodoro da Fonseca, 244 - Centro, São Roque - SP, 18130-070";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <section className="location-section" id="local">
            <div className="location-container">
                
                {/* LADO ESQUERDO: Apenas Endereço e Horários (Sem contato) */}
                <div className="location-info">
                    <span className="location-subtitle">ONDE ESTAMOS</span>
                    <h2 className="location-title">O Local</h2>
                    
                    <div className="info-block">
                        <h3>Endereço</h3>
                        <p>{address}</p>
                        <a 
                            href={googleMapsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="directions-btn"
                        >
                            ✦ Como Chegar no Maps
                        </a>
                    </div>

                    <div className="info-block">
                        <h3>Horário de Funcionamento</h3>
                        <ul className="hours-list">
                            <li>
                                <span>Quarta e Quinta</span>
                                <span className="hours-time">18:00 às 00:00</span>
                            </li>
                            <li>
                                <span>Sexta e Sábado</span>
                                <span className="hours-time">18:00 às 02:00</span>
                            </li>
                            <li>
                                <span>Domingo</span>
                                <span className="hours-time">16:00 às 22:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* LADO DIREITO: O Google Maps do Come Together */}
                <div className="location-map">
                    <iframe
                        title="Mapa La Esquina"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.990028296246!2d-47.13646182389224!3d-23.5328610605474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0d54800af767%3A0xd9b40e2662a26e56!2sClube%20Come%20Together!5e0!3m2!1spt-BR!2sbr!4v1784054593956!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="map-iframe"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}