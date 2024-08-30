import React, { useEffect, useState } from 'react';

const ResultDisplay = ({ result }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        return () => setVisible(false); // Reset visibility when the component unmounts
    }, [result]);

    const style = {
        transition: 'opacity 300ms ease-in-out',
        opacity: visible ? 1 : 0,
    };

    return (
        <div style={style} className="mt-8 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <h2 className="text-xl font-semibold">Billing Level: {result}</h2>
        </div>
    );
};

export default ResultDisplay;
