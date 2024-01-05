import React, { useState } from "react";
import { useGetAllProductsQuery } from "./Rtkquery";


function Product() {
  const { data: productsData, isLoading } = useGetAllProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showNoProductMessage, setShowNoProductMessage] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const products = Array.isArray(productsData)
      ? productsData
      : productsData?.products || [];

    const handleSearch = () => {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowNoProductMessage(filtered.length === 0);
    };

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    const productsToDisplay =
      filteredProducts.length > 0 ? filteredProducts : products;

    return (
      <div className="p-4">
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for a product"
            className="border border-gray-300 p-2 rounded"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {showNoProductMessage && (
          <p>No products found for '{searchTerm}'</p>
        )}
        {!showNoProductMessage && (
          <ul className="list-decimal pl-6">
            {productsToDisplay.map((product) => (
              <li key={product.id} className="mb-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-700 font-semibold">
                  Price: ${product.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Product;
