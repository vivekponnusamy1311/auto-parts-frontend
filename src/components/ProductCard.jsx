import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden cursor-pointer transition duration-300"
      onClick={onClick}
    >
      <img
        src={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-yellow-600 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
