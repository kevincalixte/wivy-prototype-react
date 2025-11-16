import React, { useState, useEffect } from 'react'
import { fanImages } from '../../contexts/context-FanImage'

function FanImage() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % fanImages.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-7xl mx-auto px-5 py-10 flex flex-col items-center gap-8">
            <h2 className="text-black text-2xl md:text-3xl font-medium text-center">
                Discover WIVY, where every conversation counts.
            </h2>

            <div className="relative w-64 h-128 md:w-72 md:h-144 flex items-center justify-center">
                {fanImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Écran ${index + 1}`}
                        className={`absolute w-full h-full object-contain rounded-[1.875rem] border-[0.1875rem] border-white ${index === activeIndex ?
                            'rotate-y-360' : ''}`}
                        style={{ opacity: index === activeIndex ? 1 : 0 }}
                    />
                ))}
            </div>
            {/* transition-opacity duration-1000 ease-in-out */}
            <div className="flex gap-2.5">
                {fanImages.map((_, index) => (
                    <div
                        key={index}
                        className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: index === activeIndex ? '#000000' : 'rgba(0, 0, 0, 0.3)' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default FanImage
