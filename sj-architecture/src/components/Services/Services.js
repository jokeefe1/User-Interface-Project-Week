import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import img1 from '../../img/services/services-mobile-jumbotron.png'
import img2 from '../../img/services/services-jumbotron.png'

export default function Services() {
    return (
        <div>
            <Navigation />
            <Header img1={img1} img2={img2}/>
            <Footer />
        </div>
    );
}
