import Navbar from "./components/layout/navbar/navbar";
import Hero from "./components/layout/hero/hero";
import Mural from "./components/sections/mural/mural";

import "./styles/globals.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Mural />
        </>
    );
}

export default App;