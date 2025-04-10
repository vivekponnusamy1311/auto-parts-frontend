import React from 'react';
import VehicleSelector from '../components/VehicleSelector';

const Home = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-[#0046be] mb-4">Find Parts That Fit Your Vehicle</h1>
      <VehicleSelector />
    </div>
  );
};

export default Home;
