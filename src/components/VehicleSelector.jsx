import React, { useEffect, useState, useContext } from 'react';

import {
  getYears,
  getMakesForYear,
  getModelsForMakeYear,
  getEnginesForModel,
} from '../api/vehicleApi';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const VehicleSelector = ({ onSelect }) => {
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [engines, setEngines] = useState([]);

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const { searchProducts } = useContext(ProductContext);

  // Load years on mount
  useEffect(() => {
    const fetchYears = async () => {
      const data = await getYears();
      setYears(data);
    };
    fetchYears();
  }, []);

  // Load makes for selected year
  useEffect(() => {
    if (selectedYear) {
      const fetchMakes = async () => {
        const data = await getMakesForYear(selectedYear);
        setMakes(data);
        setModels([]);
        setEngines([]);
        setSelectedMake('');
        setSelectedModel('');
        setSelectedEngine('');
      };
      fetchMakes();
    }
  }, [selectedYear]);

  // Load models for selected year + make
  useEffect(() => {
    if (selectedYear && selectedMake) {
      const fetchModels = async () => {
        const data = await getModelsForMakeYear(selectedMake, selectedYear);
        setModels(data);
        setEngines([]);
        setSelectedModel('');
        setSelectedEngine('');
      };
      fetchModels();
    }
  }, [selectedYear, selectedMake]);

  // Load engines for selected model
  useEffect(() => {
    if (selectedYear && selectedMake && selectedModel) {
      const fetchEngines = async () => {
        const data = await getEnginesForModel(selectedMake, selectedModel, selectedYear);
        setEngines(data);
        setSelectedEngine('');
      };
      fetchEngines();
    }
  }, [selectedYear, selectedMake, selectedModel]);

  const handleSearch = () => {
    if (selectedYear && selectedMake && selectedModel && selectedEngine && searchTerm) {
      const selectedVehicle = {
        year: Number(selectedYear),
        make: selectedMake,
        model: selectedModel,
        engine: selectedEngine,
      };
  
      searchProducts(searchTerm, selectedVehicle); 
      navigate('/catalog');
    } else {
      alert('Please complete all fields and enter a search term.');
    }
  };

  return (
    <div className="space-y-6">
      {/* YMME Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          className="w-full border px-4 py-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select
          className="w-full border px-4 py-2 rounded"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          disabled={!makes.length}
        >
          <option value="">Select Make</option>
          {makes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <select
          className="w-full border px-4 py-2 rounded"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          disabled={!models.length}
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select
          className="w-full border px-4 py-2 rounded"
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
          disabled={!engines.length}
        >
          <option value="">Select Engine</option>
          {engines.map((engine, index) => (
            <option key={index} value={engine}>{engine}</option>
          ))}
        </select>
      </div>

      {/* Search Field */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search for parts (e.g., oil filter)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow border px-4 py-2 rounded w-full md:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
        >
          Search Parts
        </button>
      </div>
    </div>
  );
};

export default VehicleSelector;
