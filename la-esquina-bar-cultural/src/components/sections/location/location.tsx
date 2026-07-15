import "./location.css";

export default function Location() {
    // Endereço real do Clube Come Together
    const address = "R. Prof. Joaquim de Oliveira, 5 - Centro, São Roque - SP, 18130-140";
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.992116350946!2d-47.13819732389232!3d-23.532785960544516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0d54bbf5e01d%3A0x33f6cf0144405cf2!2sR.%20Prof.%20Joaquim%20de%20Oliveira%2C%205%20-%20Centro%2C%20S%C3%A3o%20Roque%20-%20SP%2C%2018130-140!5e0!3m2!1spt-BR!2sbr!4v1784157344614!5m2!1spt-BR!2sbr"
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