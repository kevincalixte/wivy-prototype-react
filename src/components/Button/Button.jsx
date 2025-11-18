import React from 'react'

function Button({ className = '', onClick, children }) {
    return (
        <div>
            <button onClick={onClick} className={`border px-5 py-1 rounded-4xl bg-transparent text-white border-white hover:scale-120 transition-transorm duration-200 ${className}`}>
                {children}
            </button>
        </div>
    )
}

export default Button