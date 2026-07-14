import { useEffect, useState } from "react";

import logo from "../../../assets/images/CircleLogo.png";

import "./navbar.css";


export default function Navbar() {


    const [scrolled, setScrolled] = useState(false);



    useEffect(() => {


        const handleScroll = () => {

            setScrolled(
                window.scrollY > 50
            );

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true
            }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    }, []);





    return (

        <header
            className={`navbar ${scrolled ? "scrolled" : ""}`}
        >


            <div className="navbar-container">



                <nav className="navbar-menu left">


                    <a href="#sobre">
                        Sobre
                    </a>


                    <span className="separator">
                        ✦
                    </span>


                    <a href="#eventos">
                        Agenda
                    </a>


                    <span className="separator">
                        ✦
                    </span>


                    <a href="#cardapio">
                        Cardápio
                    </a>


                </nav>





                <a
                    href="#"
                    className="navbar-logo"
                    aria-label="La Esquina"
                >

                    <img
                        src={logo}
                        alt="La Esquina"
                    />

                </a>





                <nav className="navbar-menu right">


                    <a href="#galeria">
                        Galeria
                    </a>


                    <span className="separator">
                        ✦
                    </span>


                    <a href="#contato">
                        Contato
                    </a>


                    <span className="separator">
                        ✦
                    </span>


                    <a href="#local">
                        Local
                    </a>


                </nav>



            </div>


        </header>

    );

}