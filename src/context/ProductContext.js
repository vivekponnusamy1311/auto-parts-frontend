// src/context/ProductContext.js
import { createContext, useState } from 'react';

export const ProductContext = createContext();

const mockProducts = [
  {
    id: 1,
    name: 'Oil Filter Premium',
    description: 'High-quality oil filter for optimal performance',
    price: 14.99,
    image: 'https://via.placeholder.com/150',
    vehicle: {
      year: 2020,
      make: 'Toyota',
      model: 'Camry',
      engine: '2.5L',
    },
    category: 'Oil Filter',
  },
  {
    id: 2,
    name: 'AC Compressor',
    description: 'Durable compressor for powerful air conditioning',
    price: 199.99,
    image: 'https://via.placeholder.com/150',
    vehicle: {
      year: 2020,
      make: 'Toyota',
      model: 'Camry',
      engine: '2.5L',
    },
    category: 'Compressor',
  },
  {
    id: 3,
    name: 'Brake Pad Set',
    description: 'Reliable and safe braking performance',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    vehicle: {
      year: 2019,
      make: 'Honda',
      model: 'Civic',
      engine: '2.0L',
    },
    category: 'Brake Pads',
  },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const searchProducts = (query, selectedVehicle) => {
    console.log("Search Query:", query);
    console.log("Selected Vehicle:", selectedVehicle);
  
    const filtered = mockProducts.filter((product) => {
      const matchesQuery = product.category.toLowerCase().includes(query.toLowerCase());
  
      const matchesVehicle =
        product.vehicle.year === selectedVehicle.year &&
        product.vehicle.make.toLowerCase() === selectedVehicle.make.toLowerCase() &&
        product.vehicle.model.toLowerCase() === selectedVehicle.model.toLowerCase() &&
        product.vehicle.engine.replace('.', '').toLowerCase() === selectedVehicle.engine.replace('.', '').toLowerCase();
  
      return matchesQuery && matchesVehicle;
    });
  
    console.log("Filtered Products:", filtered);
    setProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
