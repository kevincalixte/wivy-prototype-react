import React from 'react'

function Input({ label, type, placeholder, className }) {
    return (
        label ?
            <div className={`mb-4 flex flex-col ${className || 'w-60'}`}>
                <label className='text-white text-[1rem] text-left mb-1 ml-3 '>{label}</label>
                <input type={type} placeholder={placeholder} className='border ml-2 px-5 py-1 rounded-2xl bg-gray-950 text-white' />
            </div>
            :
            <div className={`flex flex-col mb-4 mt-8 ml-2 ${className || 'w-60'}`}>
                <input type={type} placeholder={placeholder} className='border px-5 py-1 rounded-2xl bg-gray-950 text-white' />
            </div>
    )
}

export default Input