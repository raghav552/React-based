import React from 'react';

const TestStyles = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 bg-red-100 p-4 rounded-lg mb-4">
        Tailwind Test - This should be blue text with red background
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">Blue Box</div>
        <div className="bg-green-500 text-white p-4 rounded">Green Box</div>
        <div className="bg-purple-500 text-white p-4 rounded">Purple Box</div>
      </div>
    </div>
  );
};

export default TestStyles;