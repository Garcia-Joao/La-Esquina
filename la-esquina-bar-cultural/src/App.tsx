import Navbar from "./components/layout/navbar/navbar";
import Hero from "./components/layout/hero/hero";
import About from "./components/sections/about/about";
import Menu from "./components/sections/menu/menu"; // <-- Importamos o Cardápio!
import Mural from "./components/sections/mural/mural";
import Separator from "./components/ui/separator/Separator";
import Gallery from "./components/sections/gallery/gallery";
import Location from "./components/sections/location/location";
import Contact from "./components/sections/contact/contact";

import "./styles/globals.css";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            
            <Hero />
            
            <Separator />
            
            <About />
                
            <Separator />
            
            <Mural />

            <Separator />

            <Menu />
            
            <Separator />

            <Gallery/>

            <Separator />

            <Location/>

            <Separator />

            <Contact/>

            <Separator />
        </div>
    );
}

export default App;