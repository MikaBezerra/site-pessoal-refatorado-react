import React from 'react'

import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Home from "./components/Home/Home";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
