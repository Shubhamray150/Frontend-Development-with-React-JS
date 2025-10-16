import React, { useState } from "react";
import Header from "../components/layout/homeLayout/Header";
import Footer from "../components/layout/homeLayout/Footer";
import NavBar from "../components/layout/homeLayout/NavBar";
import ProductPage from "../components/layout/homeLayout/ProductPage";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Header />
      <NavBar category={activeCategory} onCategoryChange={setActiveCategory} />
      <ProductPage category={activeCategory} />
      <Footer />
    </div>
  );
};

export default HomePage;
