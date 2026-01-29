import "./Touch.scss";

import teaImg from "/src/assets/img/form/tea.jpg";
import vaseImg from "/src/assets/img/form/vase.png";

import TouchForm from "./TouchForm";

const Touch = () => {
    return (
        <section className="touch">
            <div className="container">
                <h2 className="title-h2">get in touch</h2>
                <div className="pure-g touch__wrapper">
                    <div className="pure-u-1 pure-u-xl-1-2 pure-u-xxl-2-5">
                        <img src={teaImg} alt="tea" className="touch__img" />
                    </div>
                    <div className="pure-u-1 pure-u-xl-1-2 pure-u-xxl-3-5">
                        <TouchForm />
                    </div>
                </div>
                <img src={vaseImg} alt="vase" className="touch__decor" />
            </div>
        </section>
    );
};

export default Touch;
