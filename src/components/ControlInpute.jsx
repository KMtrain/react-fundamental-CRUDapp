import React, { useState } from 'react';

const ControlInpute = () => {
    const [inputeValue, setInputValue] = useState('');

    return (
        <div>
            <h1>{inputeValue}</h1>
            <input 
                type="text"
                value={inputeValue}
                onChange={e => setInputValue(e.target.value)}
                size="9"
                maxLength="22"
            />
        </div>
    )
}

export default ControlInpute;