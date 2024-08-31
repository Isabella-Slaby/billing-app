import React from 'react';

const Tooltip = ({ text }) => (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-max p-2 bg-gray-800 text-white text-sm rounded-md whitespace-pre-line">
        {text}
    </div>
);

export default Tooltip;
