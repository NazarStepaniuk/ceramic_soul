import type { Card } from "./types/catalog";

interface CatalogCardProps {
    card: Card;
}

const CatalogCard = ({ card }: CatalogCardProps) => {
    return (
        <div className="catalog__card">
            <img src={card.src} alt={card.tab} className="catalog__img" />
            <div className="catalog__info">
                <div className="catalog__name">{card.name}</div>
                <div className="catalog__price">{card.price} €</div>
            </div>
        </div>
    );
};

export default CatalogCard;
