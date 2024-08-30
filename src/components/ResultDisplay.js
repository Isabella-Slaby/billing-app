import React from 'react';

const ResultDisplay = ({ result }) => {
    return (
        <div className="mt-8 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <h2 className="text-xl font-semibold">Billing Level: {result}</h2>
        </div>
    );
};

export default ResultDisplay;
