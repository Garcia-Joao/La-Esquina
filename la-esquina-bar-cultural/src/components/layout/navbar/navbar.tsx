import { useEffect, useState } from "react";
import logo from "../../../assets/images/CircleLogo.png";
import "./navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="navbar-container">

                {/* LINKS ESQUERDA (Desktop) */}
                <nav className="navbar-menu left">
                    <a href="#sobre">Sobre</a>
                    <span className="separator">✦</span>
                    <a href="#eventos">Agenda</a>
                    <span className="separator">✦</span>
                    <a href="#cardapio">Cardápio</a>
                </nav>

                {/* LOGO (Sempre centralizado, inclusive no mobile) */}
                <a href="#" className="navbar-logo" onClick={closeMenu} aria-label="La Esquina">
                    <img src={logo} alt="La Esquina" />
                </a>

                {/* LINKS DIREITA (Desktop) */}
                <nav className="navbar-menu right">
                    <a href="#galeria">Galeria</a>
                    <span className="separator">✦</span>
                    <a href="#local">Local</a>
                    <span className="separator">✦</span>
                    <a href="#contato">Contato</a>
                </nav>

                {/* BOTÃO TEXTUAL CLEAN (Mobile) */}
                <button 
                    className={`clean-menu-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span>{isMenuOpen ? "FECHAR" : "MENU"}</span>
                    <div className="toggle-line"></div>
                </button>

                {/* PAINEL FLUTUANTE COMPACTO (Mobile) */}
                <nav className={`navbar-clean-dropdown ${isMenuOpen ? "open" : ""}`}>
                    <div className="dropdown-links-grid">
                        <a href="#sobre" onClick={closeMenu}>Sobre</a>
                        <a href="#eventos" onClick={closeMenu}>Agenda</a>
                        <a href="#cardapio" onClick={closeMenu}>Cardápio</a>
                        <a href="#galeria" onClick={closeMenu}>Galeria</a>
                        <a href="#local" onClick={closeMenu}>Local</a>
                        <a href="#contato" onClick={closeMenu}>Contato</a>
                    </div>
                </nav>

            </div>
        </header>
    );
}