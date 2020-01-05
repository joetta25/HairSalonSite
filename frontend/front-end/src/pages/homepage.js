import React from 'react';



function Home() {


    return (

        <div>
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
            <section className="section-features">
                <div className="row">
                    <h2>Get Hair done faster &mdash; No wait time</h2>
                    <p className="long-copy">
                    Hello, we're best hair salon in town, we do dreads,weaves and short hairstyles!
                    </p>

                </div>
                <div className="row">
                    <div className="col span-1-of-4 box">
                        <div className="first-icon">
                            <ion-icon name="infinite"></ion-icon>
                        </div>
                        <h3> Up to 365 days/year</h3>
                        <p>
                            Never have to worry about how your hair will look, JC hairstyles will change your life. We are 
                            avaiable 365 days/year
                        </p>
                    </div>
                    <div class="col span-1-of-4 box">
                        <div class="first-icon">
                            <ion-icon name="stopwatch"></ion-icon>
                        </div>
                        <h3>Ready in 20 minutes</h3>
                        <p>
                         You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the
                        best chefs in each town to ensure that you're 100% happy.   
                        </p>
                    </div>
                    <div class="col span-1-of-4 box">
                        <div class="first-icon">
                            <ion-icon name="nutrition"></ion-icon>
                        </div>
                        <h3>100% organic</h3>
                        <p>
                            All our vegtables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your 
                            health, the environment, and it also taste better!
                        </p>
                    </div>
                    <div class="col span-1-of-4 box">
                        <div class="first-icon">
                             <ion-icon name="cart"></ion-icon>
                        </div>
                        <h3> Order anything</h3>
                        <p>
                            We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu
                            containing over 100 delicious meals. It's up to you!
                         </p>
                    </div>

                 </div>
                 

            </section>
            <section className="section-meals">
                <ul>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/braids1.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/braids2.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/shorthair2.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/shorthair3.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                </ul>
                <ul className="meals-showcase clearfix">
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/shorthair4.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/shorthair5.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/ponytail1.jpg" alt="crownrolls"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src="css/img/twists1.jpg" alt="crownrolls"/>
                        </figure>
                    </li>

                </ul>

            </section>
        </div>
        
    )
}

export default Home;