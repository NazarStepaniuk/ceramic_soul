export type CatalogTab = "for tea" | "for kitchen" | "for plants";

export interface Card {
    id: number;
    src: string;
    name: string;
    price: number;
    tab: CatalogTab;
}
