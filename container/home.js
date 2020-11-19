import React from 'react';
import Banner from '../components/Banner/Banner.js';
import Adds from '../components/Adds/Adds'
import Adds1 from '../components/Adds/Adds1'
import Footer from '../components/Footer/Footer';
import Appadds from '../components/Appadds/Appadds.jsx'
import Header from '../components/Header/Header'
import Featured from '../components/Featured/Featured.js';
import Products from '../components/Products/Products';
import '../App.css';
function Home() {
  return (
    <>
      <Header />
      
      <Banner />
      <Adds />
      <Featured heading='Based on Your Last Search'/>
      <Products />
      <Adds1 />
      <Appadds />
      <Footer />
  </>
  );
}

export default Home;