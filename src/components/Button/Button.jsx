import React from 'react'

function Button({ className = '', children }) {
    return (
        <div>
            <button className={`border px-5 py-1 rounded-4xl bg-transparent text-white border-white hover:scale-120 transition-transorm duration-200 ${className}`}>
                {children}
            </button>
        </div>
    )
}

export default Button