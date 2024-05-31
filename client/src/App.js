import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import KidsPage from './components/KidsPage';
import BrandsPage from './components/BrandsPage';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/app" element={<HeroSection />} />
          <Route path="/women" component={WomenPage} />
          <Route path="/men" component={MenPage} />
          <Route path="/kids" component={KidsPage} />
          <Route path="/brands" component={BrandsPage} />
          <Route path="/" exact>
            <HeroSection />
            <FeaturedProducts />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
