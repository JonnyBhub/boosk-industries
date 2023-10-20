import React from 'react';

const Textbox = ({ value, onChange }) => {
    return (
        <input type="text" value={value} onChange={onChange} />
    );
};

export default Textbox;
