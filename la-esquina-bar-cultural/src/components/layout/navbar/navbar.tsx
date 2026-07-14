import logo from "../../../assets/images/CircleLogo.png";
import "./navbar.css";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar-content">

                <a href="#" className="logo">

                    <img
                        src={logo}
                        alt="La Esquina"
                    />

                    <div className="logo-text">

                        <span className="subtitle">
                            BAR CULTURAL
                        </span>

                        <span className="title">
                            LA ESQUINA
                        </span>

                    </div>

                </a>

                <nav>

                    <a href="#sobre">Sobre</a>
                    <a href="#eventos">Agenda</a>
                    <a href="#cardapio">Cardápio</a>
                    <a href="#galeria">Galeria</a>
                    <a href="#contato">Contato</a>

                </nav>

                <button className="reserve-button">

                    Reservar

                </button>

            </div>

        </header>

    );

}