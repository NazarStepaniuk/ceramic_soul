import "./Blog.scss";

import potterySecretsImg from "../../assets/img/form/tea.jpg";
import potteryMaterialsImg from "../../assets/img/works/tea-2.jpg";

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <h1 className="title-h1">our digital notes</h1>
                <div className="blog__wrapper">
                    <div className="blog__card">
                        <div className="blog__data pure-g">
                            <div className="pure-u-1 pure-u-md-1-2">
                                <img
                                    src={potterySecretsImg}
                                    alt="tea"
                                    className="blog__img"
                                />
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2 blog__data-column">
                                <h3 className="title-h3 blog__title-h3">
                                    pottery secrets
                                </h3>
                                <button className="btn-read">read</button>
                            </div>
                        </div>
                        <div className="blog__text">
                            Discover the timeless art of pottery and unlock the
                            secrets hidden in every curve and glaze. From
                            mastering the perfect wheel technique to
                            understanding how clay transforms in the kiln, each
                            step reveals a blend of tradition and creativity.
                            The true magic lies in the details—subtle textures,
                            natural imperfections, and the unique touch of the
                            artisan’s hand, turning simple earth into lasting
                            beauty.
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__data pure-g">
                            <div className="pure-u-1 pure-u-md-1-2">
                                <img
                                    src={potteryMaterialsImg}
                                    alt="tea"
                                    className="blog__img"
                                />
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2 blog__data-column">
                                <h3 className="title-h3 blog__title-h3">
                                    the best materials for pottery
                                </h3>
                                <button className="btn-read">read</button>
                            </div>
                        </div>
                        <div className="blog__text">
                            The best material for pottery often depends on the
                            desired look and function, but stoneware is a
                            favorite for its durability and versatility. It’s
                            strong, resistant to chipping, and perfect for both
                            functional pieces like mugs and plates, as well as
                            decorative art. Porcelain offers a delicate, refined
                            finish, ideal for intricate designs
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
