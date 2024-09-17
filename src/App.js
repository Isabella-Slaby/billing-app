import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <HomePage />  {/* Other components can be added here */}
            </main>
            <Footer />
        </div>
    );
};

export default App;