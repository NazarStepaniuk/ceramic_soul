import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import CatalogPage from "./components/pages/CatalogPage";
import BlogPage from "./components/pages/BlogPage";
import AboutPage from "./components/pages/AboutPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
