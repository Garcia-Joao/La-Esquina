import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "evento", // "evento" agora é o padrão inicial
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    // DADOS DE CONTATO
    const INSTAGRAM_URL = "https://www.instagram.com/la_esquina_sr/";
    const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real (DDD + Número)
    
    // Links dinâmicos
    const WHATSAPP_RESERVA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!+Gostaria+de+fazer+uma+reserva+de+mesa+no+La+Esquina.`;
    const WHATSAPP_GERAL_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!+Gostaria+de+bater+um+papo+com+a+equipe+do+La+Esquina.`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", subject: "evento", message: "" });
    };

    return (
        <section className="contact-section" id="contato">
            <div className="contact-container">
                
                {/* COLUNA ESQUERDA: Ações Diretas */}
                <div className="contact-info-col">
                    <span className="contact-subtitle">FALE CONOSCO</span>
                    <h2 className="contact-title">Contato & Reservas</h2>
                    
                    <p className="contact-description">
                        Garantir seu lugar na nossa esquina ou trazer sua banda para o palco é simples. 
                        Escolha uma das opções rápidas ou nos envie uma mensagem pelo formulário.
                    </p>

                    {/* BOTÃO PRINCIPAL DE RESERVA */}
                    <a 
                        href={WHATSAPP_RESERVA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reserve-table-btn"
                    >
                        <span>Reservar Mesa</span>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>

                    {/* BOTÕES SÓ COM ÍCONES (Redes & Conversas) */}
                    <div className="social-icons-row">
                        {/* Ícone WhatsApp */}
                        <a 
                            href={WHATSAPP_GERAL_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="icon-only-btn"
                            title="Conversar no WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </a>

                        {/* Ícone Instagram */}
                        <a 
                            href={INSTAGRAM_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="icon-only-btn"
                            title="Seguir no Instagram"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* COLUNA DIREITA: Formulário Restrito (Sem Reservas) */}
                <div className="contact-form-col">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Seu Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Como prefere ser chamado?" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail de Contato</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="exemplo@email.com" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Assunto do Contato</label>
                            <select 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange}
                            >
                                <option value="evento">Agendar / Orçar Evento Privado</option>
                                <option value="banda">Enviar Material de Banda / Artista</option>
                                <option value="duvida">Dúvidas Gerais ou Sugestões</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Como podemos ajudar?</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Escreva os detalhes da sua solicitação aqui..." 
                                required 
                            ></textarea>
                        </div>

                        <button type="submit" className="form-submit-btn">
                            Enviar Mensagem ✦
                        </button>

                        {submitted && (
                            <div className="form-success-msg">
                                ✓ Recebemos sua mensagem! Responderemos o mais breve possível.
                            </div>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}