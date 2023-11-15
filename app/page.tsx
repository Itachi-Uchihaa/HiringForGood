"use client"

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Neswletter from "@/components/Neswletter";
import Guide from "@/components/Guide";
import Products from "@/components/Products";
import Features from "@/components/Features";
import ProductsVideo from "@/components/ProductsVideo";
import Profile from "@/components/Form";
import Slider from "@/components/Slider";

export default function Home() {

  return (
    <div>
        <Hero/>
        <Products/>
        <Features/>
        <ProductsVideo/>
        <Slider/>
        <Profile/>
        <Guide/>
        <Neswletter/>
        <Footer/>
    </div>
  );
}
