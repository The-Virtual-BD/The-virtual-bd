import React from 'react';
import './Button.css'

const Button = ({children}) => {
    return (
        <div>
            <button className='main-btn'>{children}</button>
        </div>
    );
};

export default Button;