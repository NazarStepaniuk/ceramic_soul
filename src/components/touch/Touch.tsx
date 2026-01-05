import "./Touch.scss";

import teaImg from "/src/assets/img/form/tea.jpg";
import vaseImg from "/src/assets/img/form/vase.png";

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
                        <form action="#" className="touch__form">
                            <fieldset className="touch__fieldset">
                                <div className="touch__input-block">
                                    <label
                                        htmlFor="name"
                                        className="touch__label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        className="touch__input"
                                    />
                                </div>
                                <div className="touch__input-block">
                                    <label
                                        htmlFor="email"
                                        className="touch__label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="touch__input"
                                    />
                                </div>
                            </fieldset>
                            <label htmlFor="question" className="touch__label">
                                Your question
                            </label>
                            <textarea
                                required
                                name="question"
                                id="question"
                                placeholder="Question"
                                className="touch__textarea"
                            ></textarea>
                            <label
                                className="touch__label touch__check-block"
                                htmlFor="checkbox"
                            >
                                <input
                                    required
                                    className="touch__checkbox"
                                    type="checkbox"
                                    id="checkbox"
                                />
                                I agree with the <a href="#">terms</a>
                            </label>
                            <button className="btn-send touch__btn">
                                send request
                            </button>
                        </form>
                    </div>
                </div>
                <img src={vaseImg} alt="vase" className="touch__decor" />
            </div>
        </section>
    );
};

export default Touch;
