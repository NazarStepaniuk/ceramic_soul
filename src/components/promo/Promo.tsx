import "./Promo.scss";
import Header from "../header/Header";
import vaseImg from "/src/assets/img/promo/ceramic-vase.jpg";
import potterImg from "/src/assets/img/promo/potter.jpg";

const Promo = () =>{
    return(
        <section className="promo">
            <img src={potterImg} alt="potter" className="promo__potter" />
            <div className="container">
                <Header/>
                <div className="promo__wrapper">
                    <h1 className="title-h1-italic promo__title">Make your dream come true<br/>or decorate your home</h1>
                    <div className="promo__cta"> 
                        <img src={vaseImg} alt="vase" className="promo__img" />
                        <button className="btn-default promo__btn">shop now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo;