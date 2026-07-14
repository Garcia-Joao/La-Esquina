import Container from "../../common/container/container";
import logo from "../../../assets/images/CircleLogo.png";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">

            <Container className="navbar-content">

                <a href="#" className="logo">

                    <img
                        src={logo}
                        alt="La Esquina Bar Cultural"
                    />

                </a>

                <nav>

                    <a href="#sobre">Sobre</a>
                    <a href="#eventos">Eventos</a>
                    <a href="#cardapio">Cardapio</a>
                    <a href="#galeria">Galeria</a>
                    <a href="#contato">Contato</a>

                </nav>

                <button className="reserve-button">

                    Reservar Mesa

                </button>

            </Container>

        </header>
    );
}