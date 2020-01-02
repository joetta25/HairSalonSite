import {Component} from 'react';



function Home() {


    return (

        <header>
            <nav>
                <div className="row">
                    <img src="css/img/hairlogo.jpg" alt="hairlogo" className="logo"/>
                    <ul className="main-nav">
                        <li><a href="#">Book Appointment</a></li>
                        <li><a href="#">Photo Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero-txt-box">
                <h1>Come get your hair done.<br/>Best hairstylist in town.</h1>
                <a className="btn btn-full" href="#">Book Appointment</a>
                <a className="btn btn-ghost" href="#">Show me more</a>
            </div>
        </header>
        <section className="section-features">
            <div className="row">
                <h2>Get Hair done faster &mdash; No wait time</h2>
                <p className="long-copy">
                    Hello, we're best hair salon in town, we do dreads,weaves and short hairstyles!
                </p>

            </div>
            <div className="row">
                <div className="">

                </div>
            </div>

        </section>
    )
}