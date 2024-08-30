import React, { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';

const BillingForm = () => {
    const [problemComplexity, setProblemComplexity] = useState('');
    const [dataComplexity, setDataComplexity] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [billingLevel, setBillingLevel] = useState(null);
    
    // State to manage the visibility of the criteria boxes
    const [showProblemCriteria, setShowProblemCriteria] = useState(true);
    const [showDataCriteria, setShowDataCriteria] = useState(true);
    const [showRiskCriteria, setShowRiskCriteria] = useState(true);

    const calculateBillingLevel = () => {
        let lowCount = 0, moderateCount = 0, highCount = 0;

        if (problemComplexity === 'low') lowCount++;
        if (problemComplexity === 'moderate') moderateCount++;
        if (problemComplexity === 'high') highCount++;

        if (dataComplexity === 'low') lowCount++;
        if (dataComplexity === 'moderate') moderateCount++;
        if (dataComplexity === 'high') highCount++;

        if (riskLevel === 'low') lowCount++;
        if (riskLevel === 'moderate') moderateCount++;
        if (riskLevel === 'high') highCount++;

        if (highCount >= 2) {
            setBillingLevel('High Complexity');
        } else if (moderateCount >= 2) {
            setBillingLevel('Moderate Complexity');
        } else if (lowCount >= 2) {
            setBillingLevel('Low Complexity');
        } else {
            setBillingLevel('Moderate Complexity');
        }
    };

    useEffect(() => {
        if (problemComplexity && dataComplexity && riskLevel) {
            calculateBillingLevel();
        } else {
            setBillingLevel(null);
        }
    }, [problemComplexity, dataComplexity, riskLevel]);

    const buttonClasses = (level, currentLevel) =>
        `relative group w-full p-2 rounded-md border ${currentLevel === level ? 'bg-christianaGreen text-white' : 'bg-gray-200 text-gray-700'} hover:bg-christianaTeal hover:text-white transition-colors`;

    const Tooltip = ({ text }) => (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-max p-2 bg-gray-800 text-white text-sm rounded-md whitespace-pre-line">
            {text}
        </div>
    );

    const handleCriteriaSelect = (complexityLevel, setFunction) => {
        setFunction(complexityLevel);
    };

    return (
        <div className="space-y-6">
            {/* Complexity of Problems */}
            <div>
                <label className="block text-christianaBlue mb-2">Complexity of Problems</label>
                <div className="flex space-x-2 relative">
                    <button
                        type="button"
                        className={buttonClasses('low', problemComplexity)}
                        onClick={() => setProblemComplexity('low')}
                    >
                        Low
                        <Tooltip text={"Low:\n2 or more self-limited/minor problems,\n1 stable chronic illness,\n1 acute, uncomplicated illness/injury"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('moderate', problemComplexity)}
                        onClick={() => setProblemComplexity('moderate')}
                    >
                        Moderate
                        <Tooltip text={"Moderate:\n1 or more chronic illnesses with exacerbation,\n2 or more stable chronic illnesses,\n1 undiagnosed new problem with uncertain prognosis"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('high', problemComplexity)}
                        onClick={() => setProblemComplexity('high')}
                    >
                        High
                        <Tooltip text={"High:\n1 or more chronic illnesses with severe exacerbation,\n1 acute or chronic illness/injury that poses a threat to life or bodily function"} />
                    </button>
                </div>
                {showProblemCriteria && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Consider the following criteria:</p>
                            <button 
                                className="text-blue-600 text-sm underline"
                                onClick={() => setShowProblemCriteria(false)}
                            >
                                Hide
                            </button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('high', setProblemComplexity)}
                                    />
                                    Is there chronic or acute injury that causes threat to life or bodily function?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('high', setProblemComplexity)}
                                    />
                                    Are there 1 or more chronic illnesses with severe exacerbation?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setProblemComplexity)}
                                    />
                                    Are there 2 or more stable chronic illnesses?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setProblemComplexity)}
                                    />
                                    Is there an undiagnosed new problem with uncertain prognosis?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setProblemComplexity)}
                                    />
                                    Is there 1 acute illness with systemic symptoms?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setProblemComplexity)}
                                    />
                                    Is there 1 acute complicated injury?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('low', setProblemComplexity)}
                                    />
                                    Are there 2 or more self-limited/minor problems?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('low', setProblemComplexity)}
                                    />
                                    Is there 1 stable chronic illness?
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('low', setProblemComplexity)}
                                    />
                                    Is there 1 acute, uncomplicated illness/injury?
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
                {!showProblemCriteria && (
                    <button 
                        className="text-blue-600 text-sm underline mt-2"
                        onClick={() => setShowProblemCriteria(true)}
                    >
                        Show Criteria
                    </button>
                )}
            </div>

            {/* Data Complexity */}
            <div>
                <label className="block text-christianaBlue mb-2">Data Complexity</label>
                <div className="flex space-x-2 relative">
                    <button
                        type="button"
                        className={buttonClasses('low', dataComplexity)}
                        onClick={() => setDataComplexity('low')}
                    >
                        Low
                        <Tooltip text={"Low:\nLimited data,\nsimple review of prior external notes,\neach unique source, and tests"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('moderate', dataComplexity)}
                        onClick={() => setDataComplexity('moderate')}
                    >
                        Moderate
                        <Tooltip text={"Moderate:\nModerate data,\nreview of prior external notes,\neach unique source, independent interpretation of tests performed by another provider"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('high', dataComplexity)}
                        onClick={() => setDataComplexity('high')}
                    >
                        High
                        <Tooltip text={"High:\nExtensive data,\nreview of prior external notes,\neach unique source, independent interpretation of complex tests"} />
                    </button>
                </div>
                {showDataCriteria && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Consider the following criteria:</p>
                            <button 
                                className="text-blue-600 text-sm underline"
                                onClick={() => setShowDataCriteria(false)}
                            >
                                Hide
                            </button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('high', setDataComplexity)}
                                    />
                                    Extensive data: Review of prior external notes, each unique source, independent interpretation of complex tests
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setDataComplexity)}
                                    />
                                    Moderate data: Review of prior external notes, each unique source, independent interpretation of tests performed by another provider
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('low', setDataComplexity)}
                                    />
                                    Limited data: Simple review of prior external notes, each unique source, and tests
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
                {!showDataCriteria && (
                    <button 
                        className="text-blue-600 text-sm underline mt-2"
                        onClick={() => setShowDataCriteria(true)}
                    >
                        Show Criteria
                    </button>
                )}
            </div>

            {/* Risk Level */}
            <div>
                <label className="block text-christianaBlue mb-2">Risk Level</label>
                <div className="flex space-x-2 relative">
                    <button
                        type="button"
                        className={buttonClasses('low', riskLevel)}
                        onClick={() => setRiskLevel('low')}
                    >
                        Low
                        <Tooltip text={"Low:\nLow risk of morbidity from additional diagnostic testing or treatment"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('moderate', riskLevel)}
                        onClick={() => setRiskLevel('moderate')}
                    >
                        Moderate
                        <Tooltip text={"Moderate:\nModerate risk of morbidity,\nincludes prescription drug management,\ndecision regarding minor surgery"} />
                    </button>
                    <button
                        type="button"
                        className={buttonClasses('high', riskLevel)}
                        onClick={() => setRiskLevel('high')}
                    >
                        High
                        <Tooltip text={"High:\nHigh risk of morbidity,\nincludes decision regarding emergency major surgery,\ndrug therapy requiring intensive monitoring"} />
                    </button>
                </div>
                {showRiskCriteria && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Consider the following criteria:</p>
                            <button 
                                className="text-blue-600 text-sm underline"
                                onClick={() => setShowRiskCriteria(false)}
                            >
                                Hide
                            </button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('high', setRiskLevel)}
                                    />
                                    High risk: Decision regarding emergency major surgery, drug therapy requiring intensive monitoring
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('moderate', setRiskLevel)}
                                    />
                                    Moderate risk: Prescription drug management, decision regarding minor surgery
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        className="mr-2" 
                                        onChange={() => handleCriteriaSelect('low', setRiskLevel)}
                                    />
                                    Low risk: Low risk of morbidity from additional diagnostic testing or treatment
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
                {!showRiskCriteria && (
                    <button 
                        className="text-blue-600 text-sm underline mt-2"
                        onClick={() => setShowRiskCriteria(true)}
                    >
                        Show Criteria
                    </button>
                )}
            </div>

            {billingLevel && <ResultDisplay result={billingLevel} />}
        </div>
    );
};

export default BillingForm;
