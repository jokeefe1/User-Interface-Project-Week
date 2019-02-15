import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import Footer from '../Footer/Footer';
import img1 from '../../img/home/home-mobile-jumbotron.png'
import img2 from '../../img/home/home-jumbotron.png';


export default function Home() {
  return (
    <div>
      <Navigation />
      <Header img1={img1} img2={img2}/>
      <TopSection />
      <BottomSection />
      <Footer />
    </div>
  )
}
