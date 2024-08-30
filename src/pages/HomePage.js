import React, { useState, useEffect } from 'react';
import BillingForm from '../components/BillingForm';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-christianaBlue">
            <h1 className="text-4xl font-bold mb-8 text-white">Hospitalist Billing Assistant</h1>
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <BillingForm />
            </div>
        </div>
    );
};

export default HomePage;
