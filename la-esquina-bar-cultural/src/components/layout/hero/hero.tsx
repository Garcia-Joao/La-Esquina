import hero from "../../../assets/images/hero.png";
import logo from "../../../assets/images/RecLogo.png";

import "./hero.css";

export default function Hero() {
    return (
        <section className="hero">

            <img
                src={hero}
                className="hero-bg"
                alt="La Esquina"
            />

            <div className="overlay" />

            <div className="hero-container">

                <div className="hero-left">

                    <span className="hero-location">
                        BAR CULTURAL • SÃO ROQUE
                    </span>

                    <h1>
                        A ESQUINA
                        <br />
                        ONDE A
                        <br />
                        CIDADE
                        <br />
                        SE ENCONTRA.
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

                <div className="hero-right">

                    <img
                        src={logo}
                        alt="La Esquina"
                        className="hero-logo"
                    />

                </div>

            </div>

        </section>
    );
}