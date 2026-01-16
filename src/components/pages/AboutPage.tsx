import { Helmet } from "react-helmet-async";

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
        </>
    );
};

export default AboutPage;
