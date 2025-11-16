import React from 'react'

function BorderShadow({ color = "rgba(255,255,255,1)" }) {
    return (
        <div
            className="w-full h-20 relative -mt-20"
            style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0), ${color})`
            }}
        />
    )
}

export default BorderShadow
