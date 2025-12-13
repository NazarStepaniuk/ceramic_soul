import "./Header.scss";

const Header = () =>{
    return(
        <header className="header">
            <div className="burger"><span></span><span></span><span></span></div>
            <a href="#" className="header__logo"><img src="src/assets/logo/logo.png" alt="logo" /></a>
            <div className="header__icons">
                <a href="#"><span className="icon-search"></span></a>
                <a href="#"><span className="icon-shopping-bag"></span></a>
            </div>
        </header>
    )
}

export default Header;