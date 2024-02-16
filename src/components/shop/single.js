// SingleMedicine.js

import { application } from 'express';
import React from 'react';

const SingleMedicine = ({ medicine }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{medicine.name}</h2>
        <img src={medicine.image} alt={medicine.name} className="mb-4" />
        <p className="text-gray-700 mb-4">{medicine.description}</p>
        <p className="text-lg text-blue-500 font-semibold mb-4">Cost: ${medicine.cost.toFixed(2)}</p>
        {/* Add any other details you want to display */}
      </div>
    </div>
  );
};

export default SingleMedicine;



