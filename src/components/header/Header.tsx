import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import logoImg from "/src/assets/logo/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { path: "/catalog", label: "catalog" },
        { path: "/blog", label: "blog" },
        { path: "/about", label: "about" },
    ];

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div
                className={`header__menu${
                    isMenuOpen ? " header__menu_active" : ""
                }`}
            >
                <div className="header__menu-close" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
                <nav className="header__menu-nav">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="header__menu-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="container">
                <div className="header__top">
                    <div className="burger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to="/" className="header__logo">
                        <img src={logoImg} alt="logo" />
                    </Link>
                    <div className="header__icons">
                        <a href="#">
                            <span className="icon-search"></span>
                        </a>
                        <a href="#">
                            <span className="icon-shopping-bag"></span>
                        </a>
                    </div>
                </div>
                <nav className="header__nav">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path} className="header__link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
