import { Helmet } from "react-helmet-async";
import Catalog from "../catalog/Catalog";

const CatalogPage = () => {
    return (
        <>
            <Helmet>
                <title>Catalog — Ceramic Soul</title>
                <meta
                    name="description"
                    content="Explore handcrafted ceramic vases and decor created in our pottery workshop."
                />
            </Helmet>
            <Catalog />
        </>
    );
};

export default CatalogPage;
