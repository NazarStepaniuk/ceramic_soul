import { Helmet } from "react-helmet-async";

import About from "../about/About";
import Touch from "../touch/Touch";
import FindUs from "../findUs/FindUs";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us — Ceramic Soul</title>
                <meta
                    name="description"
                    content="Ceramic Soul is a pottery workshop focused on handmade ceramics inspired by tradition, texture and natural forms."
                />
            </Helmet>
            <About />
            <Touch />
            <FindUs />
        </>
    );
};

export default AboutPage;
