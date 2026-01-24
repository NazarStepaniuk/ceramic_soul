import { Helmet } from "react-helmet-async";

import About from "../about/About";

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
        </>
    );
};

export default AboutPage;
