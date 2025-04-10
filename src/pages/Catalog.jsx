import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Available Auto Parts</h1>

      {/* Optional filter section placeholder */}
      {/* <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
        <select className="border rounded px-3 py-2 w-full max-w-xs">
          <option>All</option>
          <option>Oil Filter</option>
          <option>Compressor</option>
          <option>Brake Pads</option>
        </select>
      </div> */}

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found. Please select a vehicle and search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
