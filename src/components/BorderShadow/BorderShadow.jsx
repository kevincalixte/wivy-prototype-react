import React from 'react'

function BorderShadow({ color = "rgba(255,255,255,1)", children }) {
    return (
        <div
            className="Bordershadow w-full h-20 -mt-20 flex items-start justify-center gap-10"
            style={{
                background: `linear-gradient(rgba(0,0,0,0), ${color})`
            }}
        >
            {children}
        </div>
    )
}

export default BorderShadow
