import "./about.css";

export default function About() {

    return (

        <section
            id="sobre"
            className="about"
        >

            <div className="about-grid">

                <div className="about-left">

                    <span>
                        O CONCEITO
                    </span>

                    <h2>

                        MUITO MAIS
                        <br />
                        QUE UM BAR.

                    </h2>

                    <p>

                        A La Esquina nasce da ideia mais simples e poderosa das cidades:
                        a esquina como ponto de encontro. Um lugar onde pessoas, histórias,
                        música e gastronomia se cruzam naturalmente.

                    </p>

                    <p>

                        Mais do que servir boa comida e cervejas artesanais, queremos criar
                        experiências. Um espaço para descobrir novos artistas, conversar sem
                        pressa, ouvir um disco inteiro e fazer parte da vida cultural da cidade.

                    </p>

                </div>

                <div className="about-right">

                    <div className="quote">

                        "Toda cidade tem uma esquina.
                        A nossa acontece aqui."

                    </div>

                    <div className="divider" />

                    <div className="keywords">

                        <span>MÚSICA</span>
                        <span>VINIL</span>
                        <span>ARTE</span>
                        <span>CERVEJA</span>
                        <span>ENCONTROS</span>

                    </div>

                </div>

            </div>

        </section>

    );

}