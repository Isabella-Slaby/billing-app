import React from 'react';
import BillingForm from '../components/BillingForm';

const HomePage = () => {
    return (
         <main className="min-h-screen flex flex-col items-center justify-center">
            <section className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <BillingForm />
            </section>
        </main>
    );
};

export default HomePage;
