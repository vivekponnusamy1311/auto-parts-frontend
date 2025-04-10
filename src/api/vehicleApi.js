import axios from 'axios';

const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const getYears = async () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 30 }, (_, i) => currentYear - i);
};

export const getMakesForYear = async (year) => {
  const response = await axios.get(`${BASE_URL}/GetMakesForVehicleType/car?format=json`);
  return response.data.Results.map((make) => make.MakeName);
};

export const getModelsForMakeYear = async (make, year) => {
  const response = await axios.get(`${BASE_URL}/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`);
  return response.data.Results.map((model) => model.Model_Name);
};

export const getEnginesForModel = async (make, model) => {
  // No direct API for engines, mocking for now
  return ['2.0L', '2.5L', '3.0L', '4.5L']; // Dummy engines
};

export const searchParts = async (query, ymm) => {
  // Dummy data for now; replace with real API call
  return [
    {
      id: 1,
      name: `Mock ${query} for ${ymm.year} ${ymm.make} ${ymm.model}`,
      price: 49.99,
      description: 'Sample auto part description'
    }
  ];
};
