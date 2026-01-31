import "./Footer.scss";
import { Link } from "react-router-dom";

import FooterForm from "./FooterForm";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__newsletter">
                        <h2 className="footer__header">newsletter</h2>
                        <div className="footer__text">
                            Keep up to date with news and promotions
                        </div>
                        <FooterForm />
                    </div>
                    <div className="footer__links">
                        <div className="footer__links-block">
                            <h2 className="footer__header">discover</h2>
                            <nav className="footer__nav">
                                <ul>
                                    <li className="footer__link">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li className="footer__link">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__links-block">
                            <h2 className="footer__header">shopping</h2>
                            <nav className="footer__nav">
                                <ul>
                                    <li className="footer__link">
                                        <Link to="/catalog">Catalog</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__links-block">
                            <h2 className="footer__header">information</h2>
                            <nav className="footer__nav">
                                <ul>
                                    <li className="footer__link">
                                        <a href="#">Terms and Conditions</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__social">
                        <h2 className="footer__header">follow us</h2>
                        <ul className="footer__social-block">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <span className="icon-facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <span className="icon-instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/">
                                    <span className="icon-pinterest-circled"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright">
                    © Copyright 2025, Ceramic soul
                </div>
            </div>
        </footer>
    );
};

export default Footer;
