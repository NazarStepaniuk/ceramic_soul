import "./Promo.scss";
import Header from "../header/Header";
import vaseImg from "/src/assets/img/promo/ceramic-vase.jpg";

const Promo = () =>{
    return(
        <section className="promo">
            <div className="container">
                <Header/>
                <h1 className="title-h1-italic promo__title">Make your dream come true or decorate your home</h1>
                <img src={vaseImg} alt="vase" className="promo__img" />
                <button className="btn-default promo__btn">shop now</button>
            </div>
        </section>
    )
}

export default Promo;