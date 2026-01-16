import { Helmet } from "react-helmet-async";

const BlogPage = () => {
    return (
        <>
            <Helmet>
                <title>Blog — Ceramic Soul</title>
                <meta
                    name="description"
                    content="Stories from our pottery workshop: craftsmanship, creative process and inspiration behind handmade ceramics."
                />
            </Helmet>
        </>
    );
};

export default BlogPage;
