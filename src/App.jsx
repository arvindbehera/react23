import { useState } from "react";
import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";
import CategorySearch from "./CategorySearch";
import Header from "./Header";
import Footer4Columns from "./Footer4Columns";
import Footer2Columns from "./Footer2Columns";
import "./App.css";
import Banner from "./Banner";

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
      <Footer4Columns />
      <Footer2Columns />
    </ProductProvider>
  );
};

export default App;
