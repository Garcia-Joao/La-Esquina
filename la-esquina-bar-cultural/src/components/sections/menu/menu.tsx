import { useState } from "react";
import "./menu.css";

// 1. JSON com o Cardápio Organizado por Categorias
const MENU_DATA = [
    {
        id: "drinks",
        categoryName: "Para Beber",
        items: [
            {
                id: 1,
                name: "Drink La Esquina",
                price: "R$ 32",
                description: "Whisky Bourbon, xarope de mel trufado, limão siciliano e alecrim defumado na mesa.",
                highlight: true // Destaca o drink da casa!
            },
            {
                id: 2,
                name: "Chopp IPA Artesanal (400ml)",
                price: "R$ 18",
                description: "Produzido localmente. Notas cítricas marcantes, aroma de lúpulo fresco e amargor equilibrado."
            },
            {
                id: 3,
                name: "Negroni Envelhecido",
                price: "R$ 28",
                description: "Gin, Campari e Vermute tinto envelhecidos em barril de carvalho por 3 semanas."
            },
            {
                id: 4,
                name: "Sodas Naturais do Dia",
                price: "R$ 14",
                description: "Feitas com frutas frescas da estação e água gaseificada. Sem conservantes."
            }
        ]
    },
    {
        id: "food",
        categoryName: "Para Comer",
        items: [
            {
                id: 5,
                name: "Croquetes de Costela (6 un)",
                price: "R$ 36",
                description: "Costela desfiada cozida lentamente na cerveja preta, empanada na farinha panko com maionese de alho negro.",
                highlight: true
            },
            {
                id: 6,
                name: "Burger da Esquina",
                price: "R$ 42",
                description: "Blend bovino 160g grelhado no fogo, queijo cheddar artesanal, cebola caramelizada e maionese defumada no pão brioche."
            },
            {
                id: 7,
                name: "Tábua Fria Cultural",
                price: "R$ 54",
                description: "Queijos finos artesanais, salame italiano, fatias de copa, geleia de damasco e torradas temperadas com ervas."
            },
            {
                id: 8,
                name: "Fritas Rústicas com Alecrim",
                price: "R$ 26",
                description: "Batatas fritas com casca salpicadas com sal grosso, páprica defumada e alecrim fresco."
            }
        ]
    },
    {
        id: "specials",
        categoryName: "Café & Doces",
        items: [
            {
                id: 9,
                name: "Torta de Chocolate Meio Amargo & Café",
                price: "R$ 22",
                description: "Massa crocante de cacau, recheio cremoso de chocolate 60% infusionado com espresso da casa."
            },
            {
                id: 10,
                name: "Espresso Tônica",
                price: "R$ 16",
                description: "Dose de espresso especial extraída na hora sobre gelo, água tônica premium e rodela de laranja."
            }
        ]
    }
];

export default function Menu() {
    // Estado para controlar qual categoria está ativa
    const [activeTab, setActiveTab] = useState("drinks");

    // Encontra os itens da categoria selecionada
    const currentCategory = MENU_DATA.find((category) => category.id === activeTab);

    return (
        <section className="menu-section" id="cardapio">
            <div className="menu-header">
                <span className="menu-subtitle">EXPERIMENTE NOSSOS SABORES</span>
                <h2 className="menu-title">O Cardápio</h2>
                <p className="menu-description">
                    Ingredientes selecionados, receitas autorais e acompanhamentos perfeitos 
                    para embalar as suas conversas.
                </p>
            </div>

            {/* 2. Seleção de Abas (Categorias) */}
            <div className="menu-tabs">
                {MENU_DATA.map((category) => (
                    <button
                        key={category.id}
                        className={`tab-btn ${activeTab === category.id ? "active" : ""}`}
                        onClick={() => setActiveTab(category.id)}
                    >
                        {category.categoryName}
                    </button>
                ))}
            </div>

            {/* 3. Grid de Itens do Cardápio */}
            <div className="menu-grid">
                {currentCategory?.items.map((item) => (
                    <div 
                        key={item.id} 
                        className={`menu-item-card ${item.highlight ? "highlighted-card" : ""}`}
                    >
                        {item.highlight && <span className="item-badge">★ Sugestão</span>}
                        
                        <div className="menu-item-header">
                            <h3 className="menu-item-name">{item.name}</h3>
                            <span className="menu-item-price">{item.price}</span>
                        </div>
                        
                        <p className="menu-item-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}