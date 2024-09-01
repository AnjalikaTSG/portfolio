import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    const buttonStyle = {
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        color: active ? '#EC4899' : '#C6FAD2',
        borderBottom: active ? '2px solid #EC4899' : 'none',
        fontFamily: 'Didot, serif', // Apply Didot font here
    };

    return (
        <button 
            onClick={selectTab}
            style={buttonStyle}
            className="mr-3 font-semibold"
        >
            {children}
        </button>
    );
};

export default TabButton;
