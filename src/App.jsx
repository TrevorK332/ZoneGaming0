import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Details from "./components/Details.jsx";
import Navigation from "./components/Navigation.jsx";
import Games from "./components/Games.jsx";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import Categories from "./components/Categories.jsx";
import Adventure from "./components/Adventure.jsx";
import Category01 from "./components/Category01.jsx";
import Detail01 from "./components/Detail01.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Strategy from "./components/Strategy.jsx";
import Action from "./components/Action.jsx";
//
function App() {


  return (
    <>
          <BrowserRouter>
              <ScrollToTop/>
              <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/games" element={<Games/>}></Route>
              <Route path="/product" element={<Detail01/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/shop" element={<Categories/>}></Route>
              <Route path="/shop01" element={<Category01/>}></Route>
              <Route path="/help" element={<Help/>}></Route>
              <Route path="/adventure" element={<Adventure/>}></Route>
              <Route path="/strategy" element={<Strategy/>}></Route>
              <Route path="/action" element={<Action/>}></Route>
              <Route path="/products/:id" element={<Details/>}></Route>
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
