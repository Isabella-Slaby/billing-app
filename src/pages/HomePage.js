import React from 'react';
import BillingForm from '../components/BillingForm';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <header className="text-center">
                <h1 className="text-white">Hospitalist Billing Assistant</h1>
                <div className="header-notice">
                    This is under construction. This is for billing for complexity for rounding hospitalists. Not time-based. The developer cannot guarantee the accuracy of this tool.
                </div>
            </header>
            <div className="container flex flex-col items-center justify-center">
                <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                    <BillingForm />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
