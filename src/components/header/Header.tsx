import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let menuClassList = `header__menu${
        isMenuOpen ? " header__menu_active" : ""
    }`;
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
            <div className={menuClassList}>
                <div className="header__menu-close" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
                <nav className="header__menu-nav">
                    <ul>
                        <li>
                            <a href="#" className="header__menu-link">
                                catalog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="header__menu-link">
                                blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="header__menu-link">
                                about
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__top">
                <div className="burger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#" className="header__logo">
                    <img src="src/assets/logo/logo.png" alt="logo" />
                </a>
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
                    <li>
                        <a href="" className="header__link">
                            catalog
                        </a>
                    </li>
                    <li>
                        <a href="" className="header__link">
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="" className="header__link">
                            about
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
