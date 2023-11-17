import { useState } from "react";
import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";
import CategorySearch from "./CategorySearch";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ProductProvider>
      <Header onSearch={handleSearch} />
      <Banner />
      <CategorySearch />
      <ProductList searchTerm={searchTerm} />
      <Footer />
    </ProductProvider>
  );
};

export default App;
