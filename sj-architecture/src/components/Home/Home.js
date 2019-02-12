import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <TopSection />
      <BottomSection />
      <Footer />
    </div>
  )
}
