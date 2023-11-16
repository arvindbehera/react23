import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./CategorySearch.css";

const CategorySearch = () => {
  const { categories, setSelectedCategory, setSearchTerm } =
    useContext(ProductContext);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div className="category-container">
      <div>
        <select
          id="categorySelect"
          onChange={handleCategoryChange}
          className="category-options">
          <option value="All">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySearch;
