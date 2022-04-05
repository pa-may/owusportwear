import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BannerOne from './Components/BannerOne';
import BannerThree from './Components/BannerThree';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import SubMenu from './Components/SubMenu';
import ShopbySport from './Components/ShopbySport';
import Carousel from './Components/Carousel';
import PopularSection from './Components/PopularSection';
import LatestNav from './Components/LatestNav';
import ProductsCarousel from './Components/ProductsCarousel';
import Boost from './Components/Boost';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import Teams from './Components/Teams';

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <SubMenu />
      <BannerOne />
      <ShopbySport />
      <Landing />
      <Carousel />
      <PopularSection />
      <LatestNav />
      <ProductsCarousel />
      <BannerThree />
      <Teams />
      <Boost />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
