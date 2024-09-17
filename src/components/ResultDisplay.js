import React, { useEffect, useState } from 'react';

const ResultDisplay = ({ result }) => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        // Fade out first, then fade in with the updated result
        setVisible(false);
        
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, 300); // Wait for the fade-out to complete (300ms to match transition time)

        return () => clearTimeout(timeoutId); // Clean up timeout
    }, [result]); // Depend on the result, so it triggers on change

    return (
        <div
            className={`mt-8 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 fade-in-out`}
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 300ms ease-in-out' }}
        >
            <h2 className="text-xl font-semibold">Billing Level: {result}</h2>
        </div>
    );
};

export default ResultDisplay;
