import React, { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';
import CriteriaSelector from './CriteriaSelector';

const BillingForm = () => {
    // Group related state into objects for better management
    const [complexities, setComplexities] = useState({
        problemComplexity: '',
        dataComplexity: '',
        riskLevel: ''
    });
    
    const [criteria, setCriteria] = useState({
        problemCriteria: [],
        dataCriteria: [],
        riskCriteria: []
    });

    const [billingLevel, setBillingLevel] = useState(null);
    const [showCriteria, setShowCriteria] = useState({
        showProblemCriteria: true,
        showDataCriteria: true,
        showRiskCriteria: true
    });

    // Simplify the calculation logic using loops
    const calculateBillingLevel = () => {
        const complexityLevels = [complexities.problemComplexity, complexities.dataComplexity, complexities.riskLevel];
        let lowCount = 0, moderateCount = 0, highCount = 0;

        complexityLevels.forEach(level => {
            if (level === 'low') lowCount++;
            if (level === 'moderate') moderateCount++;
            if (level === 'high') highCount++;
        });

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

    // Use useEffect to calculate when necessary
    useEffect(() => {
        const { problemComplexity, dataComplexity, riskLevel } = complexities;
        if (problemComplexity && dataComplexity && riskLevel) {
            calculateBillingLevel();
        } else {
            setBillingLevel(null);
        }
    }, [complexities]);

    // Handle updates to complexity levels
    const updateComplexity = (type, value) => {
        setComplexities(prevState => ({ ...prevState, [type]: value }));
    };

    return (
        <div className="space-y-6">
            <CriteriaSelector 
                title="Complexity of Problems"
                criteria={criteria.problemCriteria}
                setCriteria={(newCriteria) => setCriteria(prev => ({ ...prev, problemCriteria: newCriteria }))}
                complexityLevel={complexities.problemComplexity}
                setComplexityLevel={(level) => updateComplexity('problemComplexity', level)}
                showCriteria={showCriteria.showProblemCriteria}
                setShowCriteria={(show) => setShowCriteria(prev => ({ ...prev, showProblemCriteria: show }))}
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
                criteria={criteria.dataCriteria}
                setCriteria={(newCriteria) => setCriteria(prev => ({ ...prev, dataCriteria: newCriteria }))}
                complexityLevel={complexities.dataComplexity}
                setComplexityLevel={(level) => updateComplexity('dataComplexity', level)}
                showCriteria={showCriteria.showDataCriteria}
                setShowCriteria={(show) => setShowCriteria(prev => ({ ...prev, showDataCriteria: show }))}
                criteriaOptions={[
                    { label: 'Extensive data: Review of prior external notes, each unique source, independent interpretation of complex tests', level: 'high' },
                    { label: 'Moderate data: Review of prior external notes, each unique source, independent interpretation of tests performed by another provider', level: 'moderate' },
                    { label: 'Limited data: Simple review of prior external notes, each unique source, and tests', level: 'low' }
                ]}
            />
            <CriteriaSelector 
                title="Risk Level"
                criteria={criteria.riskCriteria}
                setCriteria={(newCriteria) => setCriteria(prev => ({ ...prev, riskCriteria: newCriteria }))}
                complexityLevel={complexities.riskLevel}
                setComplexityLevel={(level) => updateComplexity('riskLevel', level)}
                showCriteria={showCriteria.showRiskCriteria}
                setShowCriteria={(show) => setShowCriteria(prev => ({ ...prev, showRiskCriteria: show }))}
                criteriaOptions={[
                    { label: 'High risk: Parental controlled substances, Decision re: emergency major surgery, decision re: elective major surgery w/ pt or procedure risk factors, Decision for DNR or de-escalate care due to poor prognosis, drug therapy req intensive monitoring', level: 'high' },
                    { label: 'Moderate risk of morbidity from additional testing or treatment: Rx management, decision re: minor surgery w identified risk factors, Decision re: elective major surgery wo identified pt or procedure risk factors, Dx tx sig limited by SDOH', level: 'moderate' },
                    { label: 'Low risk: Low risk of morbidity from additional diagnostic testing or treatment', level: 'low' }
                ]}
            />
            {billingLevel && <ResultDisplay result={billingLevel} />}
        </div>
    );
};

export default BillingForm;
