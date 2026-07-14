import { useState } from "react";
import "./gallery.css";

// Dados das imagens da galeria
const GALLERY_IMAGES = [
    {
        id: 1,
        category: "ambient",
        alt: "Interior aconchegante do bar com luzes quentes",
        url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "drinks",
        alt: "Cocktail autoral sendo preparado com fumaça de alecrim",
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "events",
        alt: "Banda de Jazz tocando ao vivo sob luzes vermelhas",
        url: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "drinks",
        alt: "Torneiras de chopp artesanal enfileiradas",
        url: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "ambient",
        alt: "Prateleira repleta de discos de vinil e livros",
        url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        category: "events",
        alt: "Pessoas brindando sorridentes em uma mesa de bar",
        url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop"
    }
];

const CATEGORIES = [
    { id: "all", label: "Todos" },
    { id: "ambient", label: "O Espaço" },
    { id: "drinks", label: "Comes & Bebes" },
    { id: "events", label: "Noites & Eventos" }
];

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = activeFilter === "all"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeFilter);

    return (
        <section className="gallery-section" id="galeria">
            <div className="gallery-header">
                <span className="gallery-subtitle font-display">NOSSO INSTANTE</span>
                <h2 className="gallery-title">A Galeria</h2>
                <p className="gallery-description">
                    Um registro visual dos nossos encontros, da nossa música e da nossa atmosfera. 
                    Sinta um pouco da energia da esquina.
                </p>
            </div>

            {/* Filtros */}
            <div className="gallery-filters">
                {CATEGORIES.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
                        onClick={() => setActiveFilter(category.id)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Grid de Fotos */}
            <div className="gallery-grid">
                {filteredImages.map(image => (
                    <div 
                        key={image.id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(image.url)}
                    >
                        <img src={image.url} alt={image.alt} loading="lazy" />
                        <div className="gallery-overlay">
                            <span className="gallery-icon">✦</span>
                            <span className="gallery-zoom-text">Ampliar</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                        ✕
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Visualização ampliada" />
                    </div>
                </div>
            )}
        </section>
    );
}