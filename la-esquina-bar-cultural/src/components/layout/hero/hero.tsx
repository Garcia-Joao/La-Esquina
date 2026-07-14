import vinyl from "../../../assets/images/vinyl.png";

import "./hero.css";


export default function Hero() {


    return (

        <section className="hero">


            <div className="hero-glow"></div>

            <div className="hero-noise"></div>




            <div className="hero-container">



                <div className="hero-content">



                    <div className="hero-tags">

                        <span>
                            BAR
                        </span>


                        <span>
                            CULTURA
                        </span>


                        <span>
                            MÚSICA
                        </span>

                    </div>





                    <h1>

                        A esquina
                        <br />

                        onde a
                        <span>
                            {" "}cidade
                        </span>

                        <br />

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



                        <div className="vinyl">


                            <img
                                src={vinyl}
                                alt="Vinil La Esquina"
                            />


                        </div>





                        <div className="spotify-card">



                            <span>
                                Tocando agora
                            </span>



                            <strong>
                                Playlist La Esquina
                            </strong>



                            <p>
                                Sons para encontros,
                                conversas e histórias.
                            </p>



                            <a
                                href="https://open.spotify.com/playlist/7v1XrNBhkO1EZF4TKNqH7I?si=6f80283206d44f0b"
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

    )

}