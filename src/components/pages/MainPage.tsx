import { Helmet } from "react-helmet-async";

import Promo from "../promo/Promo";
import Activities from "../activities/Activities";
import Touch from "../touch/Touch";
import Works from "../works/Works";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Ceramic soul</title>
                <meta
                    name="description"
                    content="Website for Ceramic soul brand"
                />
            </Helmet>
            <Promo />
            <Activities />
            <Touch />
            <Works />
        </>
    );
};

export default MainPage;
