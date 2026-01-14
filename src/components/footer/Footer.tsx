import "./Footer.scss";

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
                        <form action="#" className="footer__form">
                            <input
                                type="email"
                                name="email"
                                className="footer__input"
                                placeholder="Enter your e-mail"
                                required
                            />
                            <label
                                className="footer__check-block"
                                htmlFor="footer__checkbox"
                            >
                                <input
                                    required
                                    className="footer__checkbox"
                                    type="checkbox"
                                    id="footer__checkbox"
                                />
                                I agree with the <a href="#">terms</a>
                            </label>
                            <button className="footer__btn">submit</button>
                        </form>
                    </div>
                    <div className="footer__links">
                        <div className="footer__links-block">
                            <h2 className="footer__header">discover</h2>
                            <nav className="footer__nav">
                                <ul>
                                    <li className="footer__link">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className="footer__link">
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__links-block">
                            <h2 className="footer__header">shopping</h2>
                            <nav className="footer__nav">
                                <ul>
                                    <li className="footer__link">
                                        <a href="#">Catalog</a>
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
