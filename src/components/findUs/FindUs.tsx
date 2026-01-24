import "./FindUs.scss";

const FindUs = () => {
    return (
        <section className="findus">
            <div className="container">
                <h1 className="title-h1">find us</h1>
                <div className="findus__wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11636.926319485721!2d-73.95146695018593!3d40.73201952617738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2593c58f8777d%3A0xe2215ac687bd7249!2sCLAY%20SPACE%20Ceramic%20Center!5e0!3m2!1suk!2spl!4v1769263328087!5m2!1suk!2spl"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
