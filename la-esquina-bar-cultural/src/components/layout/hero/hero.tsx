import Container from "../../common/container/container";

import hero from "../../../assets/images/hero.png";
import logo from "../../../assets/images/RecLogo.png";

import "./hero.css";

export default function Hero() {

    return (

        <section className="hero">

            <img
                src={hero}
                className="hero-bg"
                alt=""
            />

            <div className="overlay"/>

            <Container>

                <div className="hero-content">

                    <img
                        src={logo}
                        className="hero-logo"
                        alt="La Esquina"
                    />

                    <span className="subtitle">

                        Música • Gastronomia • Cultura

                    </span>

                    <p>

                        Um espaço dedicado à boa música, gastronomia,
                        encontros e manifestações culturais no coração
                        de São Roque.

                    </p>

                    <div className="buttons">

                        <button className="primary">

                            Ver Agenda

                        </button>

                        <button className="secondary">

                            Cardápio

                        </button>

                    </div>

                </div>

            </Container>

        </section>

    );

}