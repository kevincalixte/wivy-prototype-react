import React from 'react'

function Button({ className = '', children }) {
    return (
        <div>
            <button className={`hover:scale-120 transition-transorm duration-200 ${className}`}>
                {children}
            </button>
        </div>
    )
}

export default Button