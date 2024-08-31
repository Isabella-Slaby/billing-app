import React, { useEffect, useState } from 'react';
import './index.css'; // Ensure this path is correct based on your project structure

const TestTransition = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Toggle visibility every 1 second
        const interval = setInterval(() => {
            setVisible((prev) => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fade-in-out`} style={{ opacity: visible ? 1 : 0 }}>
            <h2>Testing Fade In/Out</h2>
        </div>
    );
};

export default TestTransition;
