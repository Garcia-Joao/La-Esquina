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
                alt="La Esquina"
            />

            <div className="overlay"/>


            <Container className="container-wide">

                <div className="hero-content">


                    <img
                        src={logo}
                        className="hero-logo"
                        alt="La Esquina"
                    />


                    <span className="subtitle">

                        Bar Cultural • São Roque

                    </span>


                    <h1>

                        A esquina onde
                        a cidade se encontra.

                    </h1>


                    <p>

                        Música, cerveja artesanal,
                        gastronomia criativa, livros,
                        vinis e arte em um espaço
                        feito para encontros reais.

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

            </Container>


        </section>

    );

}