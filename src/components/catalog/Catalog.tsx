import "./Catalog.scss";
import { useState } from "react";
import type { Card, CatalogTab } from "./types/catalog";

import catalogImg1 from "/src/assets/img/form/tea.jpg";
import catalogImg2 from "/src/assets/img/works/tea-2.jpg";
import catalogImg3 from "/src/assets/img/works/tea-3.jpg";
import catalogImg4 from "/src/assets/img/works/tea-1.jpg";
import catalogImg5 from "/src/assets/img/form/tea.jpg";

import CatalogCard from "./CatalogCard";

const Catalog = () => {
    const cardList: Card[] = [
        {
            id: 0,
            src: catalogImg1,
            name: "Terracotta Whisper",
            price: 19.99,
            tab: "for tea",
        },
        {
            id: 1,
            src: catalogImg2,
            name: "Clay Bloom",
            price: 24.99,
            tab: "for tea",
        },
        {
            id: 2,
            src: catalogImg3,
            name: "Earthen Gracenjoinijnoo joijiojoijojiiojoijjijoio ijoijojioijojoijio",
            price: 16.99,
            tab: "for tea",
        },
        {
            id: 3,
            src: catalogImg4,
            name: "Moss & Moon",
            price: 21.99,
            tab: "for tea",
        },
        {
            id: 4,
            src: catalogImg5,
            name: "Solace Set",
            price: 29.99,
            tab: "for tea",
        },
        {
            id: 5,
            src: catalogImg1,
            name: "Terracotta Whisper",
            price: 19.99,
            tab: "for kitchen",
        },
        {
            id: 6,
            src: catalogImg3,
            name: "Earthen Grace",
            price: 16.99,
            tab: "for kitchen",
        },
        {
            id: 7,
            src: catalogImg4,
            name: "Solace Set",
            price: 29.99,
            tab: "for plants",
        },
    ];
    const tabList: CatalogTab[] = ["for tea", "for kitchen", "for plants"];

    const [activeTab, setActiveTab] = useState<CatalogTab>("for tea");

    const renderCards = (cards: Card[], tab: CatalogTab) => {
        return cards
            .filter((card) => card.tab === tab)
            .map((card) => <CatalogCard key={card.id} card={card} />);
    };

    return (
        <section className="catalog">
            <div className="container">
                <h1 className="title-h1">our pottery</h1>
                <div className="catalog__tabs">
                    {tabList.map((tab) => (
                        <button
                            key={tab}
                            className={`catalog__tab${
                                activeTab === tab ? " catalog__tab_active" : ""
                            }`}
                            onClick={() => {
                                setActiveTab(tab);
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="catalog__content">
                    {renderCards(cardList, activeTab)}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
