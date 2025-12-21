import "./Activities.scss";

import ceramicImg from "/src/assets/img/about/ceramic.jpg";
import storeImg from "/src/assets/img/about/store.jpg";

const Activities = () =>{

    return(
        <section className="activities">
            <div className="container">
                <h2 className="title-h2">create or buy</h2>
                <div className="pure-g activities__wrapper">
                    <div className="pure-u-1">
                        <h3 className="title-h3">our store</h3>
                        <img src={storeImg} alt="store" className="activities__img" />
                        <p className="activities__text">Welcome to <span className="activities__text_colored">Ceramic Soul</span>, where each piece tells a story of craftsmanship and creativity. Our handmade ceramics are thoughtfully designed and carefully crafted, blending traditional techniques with modern aesthetics. Whether you're looking for a unique gift or a special addition to your home, our collection offers timeless pieces that bring warmth and authenticity to any space.</p>
                    </div>
                    <div className="pure-u-1">
                        <h3 className="title-h3">our workshop</h3>
                        <img src={ceramicImg} alt="ceramic" className="activities__img" />
                        <p className="activities__text">At <span className="activities__text_colored">Ceramic Soul</span> workshop, we don’t just craft ceramics—we invite you to get hands-on and create your own unique pieces. Through our engaging masterclasses, you’ll learn traditional techniques, work with natural materials, and experience the joy of shaping clay into something truly personal.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities;