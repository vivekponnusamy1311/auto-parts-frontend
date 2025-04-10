import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  // Simulated product
  const product = {
    id: productId,
    name: 'Premium Oil Filter',
    price: 19.99,
    description: 'High-efficiency oil filter compatible with most engines.',
    image: 'https://via.placeholder.com/300x200?text=Oil+Filter',
    specs: ['Brand: OEM', 'Efficiency: 99%', 'Thread Size: 3/4-16', 'Material: Synthetic Blend']
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex gap-8">
      <img src={product.image} alt={product.name} className="w-96 rounded shadow-lg" />
      <div>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          {product.specs.map((spec, idx) => (
            <li key={idx}>{spec}</li>
          ))}
        </ul>
        <div className="text-xl font-semibold mb-4 text-blue-700">${product.price}</div>
        <button
          onClick={() => addToCart(product)}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-6 font-bold rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
