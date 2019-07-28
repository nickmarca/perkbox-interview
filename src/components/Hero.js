import React from 'react';

function Hero({ title, subTitle }) {
    return(
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <h2 className="subtitle">
                        {subTitle}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;