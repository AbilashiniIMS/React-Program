import React from 'react';
import './style.css';
import Header from './components/header/header';
import Section from './components/section/section';
import Footer from './components/footer/footer';
import Calc from './components/calc/calc';
import FavoriteColor from './components/button/button'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Section type="section-part" />
      <Section type="addBg" />
      <Calc />
      <FavoriteColor />
      <Footer />
    </div>
  );
}
