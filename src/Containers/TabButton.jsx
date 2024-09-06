import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    const buttonStyle = {
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        color: active ? '#484848' : '#808080',
        borderBottom: active ? '2px solid #EC4899' : 'none',
        fontFamily: 'sans-serif', // Corrected font-family syntax
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
