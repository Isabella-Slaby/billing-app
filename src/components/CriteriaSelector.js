import React from 'react';

const CriteriaSelector = ({
    title,
    criteria,
    setCriteria,
    complexityLevel,
    setComplexityLevel,
    showCriteria,
    setShowCriteria,
    criteriaOptions,
}) => {

    const updateComplexityLevel = (criteriaList) => {
        if (criteriaList.includes('high')) {
            setComplexityLevel('high');
        } else if (criteriaList.includes('moderate')) {
            setComplexityLevel('moderate');
        } else if (criteriaList.includes('low')) {
            setComplexityLevel('low');
        } else {
            setComplexityLevel(''); // Reset if no criteria are selected
        }
    };

    const handleCriteriaChange = (level) => {
        const newCriteriaList = criteria.includes(level)
            ? criteria.filter((criterion) => criterion !== level)
            : [...criteria, level];
        setCriteria(newCriteriaList);
        updateComplexityLevel(newCriteriaList);
    };

   // Reusable function to generate complexity buttons
    const renderComplexityButton = (level, label) => (
        <button
            type="button"
            className={`relative group w-full p-2 rounded-md border ${complexityLevel === level ? 'bg-christianaGreen text-white' : 'bg-gray-200 text-gray-700'} hover:bg-christianaTeal hover:text-white transition-colors`}
            onClick={() => setComplexityLevel(level)}
        >
            {label}
        </button>
    );

    return (
        <div>
            <label className="block text-christianaBlue mb-2">{title}</label>
            <div className="flex space-x-2 relative">
                {renderComplexityButton('low', 'Low')}
                {renderComplexityButton('moderate', 'Moderate')}
                {renderComplexityButton('high', 'High')}
            </div>

            {showCriteria ? (
                <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                    <div className="flex justify-between">
                        <p className="font-semibold text-gray-700">Consider the following criteria:</p>
                        <button 
                            className="text-blue-600 text-sm underline"
                            onClick={() => setShowCriteria(false)}
                        >
                            Hide
                        </button>
                    </div>
                    <ul className="criteria-list">
                        {criteriaOptions.map(({ label, level }, index) => (
                            <li key={index} className="criteria-item">
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2"
                                        checked={criteria.includes(level)}
                                        onChange={() => handleCriteriaChange(level)}
                                    />
                                    {label}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <button 
                    className="text-blue-600 text-sm underline mt-2"
                    onClick={() => setShowCriteria(true)}
                >
                    Show Criteria
                </button>
            )}
        </div>
    );
};

export default CriteriaSelector;