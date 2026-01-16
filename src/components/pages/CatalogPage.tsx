import { Helmet } from "react-helmet-async";

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
        </>
    );
};

export default CatalogPage;
