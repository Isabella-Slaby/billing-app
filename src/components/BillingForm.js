import React, { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';
import CriteriaSelector from './CriteriaSelector';

const BillingForm = () => {
    const [problemComplexity, setProblemComplexity] = useState('');
    const [dataComplexity, setDataComplexity] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [billingLevel, setBillingLevel] = useState(null);

    const [problemCriteria, setProblemCriteria] = useState([]);
    const [dataCriteria, setDataCriteria] = useState([]);
    const [riskCriteria, setRiskCriteria] = useState([]);

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

    return (
        <div className="space-y-6">
            <CriteriaSelector 
                title="Complexity of Problems"
                criteria={problemCriteria}
                setCriteria={setProblemCriteria}
                complexityLevel={problemComplexity}
                setComplexityLevel={setProblemComplexity}
                showCriteria={showProblemCriteria}
                setShowCriteria={setShowProblemCriteria}
                criteriaOptions={[
                    { label: 'Is there chronic or acute injury that causes threat to life or bodily function?', level: 'high' },
                    { label: 'Are there 1 or more chronic illnesses with severe exacerbation?', level: 'high' },
                    { label: 'Are there 2 or more stable chronic illnesses?', level: 'moderate' },
                    { label: 'Is there an undiagnosed new problem with uncertain prognosis?', level: 'moderate' },
                    { label: 'Is there 1 acute illness with systemic symptoms?', level: 'moderate' },
                    { label: 'Is there 1 acute complicated injury?', level: 'moderate' },
                    { label: 'Are there 2 or more self-limited/minor problems?', level: 'low' },
                    { label: 'Is there 1 stable chronic illness?', level: 'low' },
                    { label: 'Is there 1 acute, uncomplicated illness/injury?', level: 'low' }
                ]}
            />
            <CriteriaSelector 
                title="Data Complexity"
                criteria={dataCriteria}
                setCriteria={setDataCriteria}
                complexityLevel={dataComplexity}
                setComplexityLevel={setDataComplexity}
                showCriteria={showDataCriteria}
                setShowCriteria={setShowDataCriteria}
                criteriaOptions={[
                    { label: 'Extensive data: Review of prior external notes, each unique source, independent interpretation of complex tests', level: 'high' },
                    { label: 'Moderate data: Review of prior external notes, each unique source, independent interpretation of tests performed by another provider', level: 'moderate' },
                    { label: 'Limited data: Simple review of prior external notes, each unique source, and tests', level: 'low' }
                ]}
            />
            <CriteriaSelector 
                title="Risk Level"
                criteria={riskCriteria}
                setCriteria={setRiskCriteria}
                complexityLevel={riskLevel}
                setComplexityLevel={setRiskLevel}
                showCriteria={showRiskCriteria}
                setShowCriteria={setShowRiskCriteria}
                criteriaOptions={[
                    { label: 'High risk: Decision regarding emergency major surgery, drug therapy requiring intensive monitoring', level: 'high' },
                    { label: 'Moderate risk: Prescription drug management, decision regarding minor surgery', level: 'moderate' },
                    { label: 'Low risk: Low risk of morbidity from additional diagnostic testing or treatment', level: 'low' }
                ]}
            />
            {billingLevel && <ResultDisplay result={billingLevel} />}
        </div>
    );
};

export default BillingForm;
