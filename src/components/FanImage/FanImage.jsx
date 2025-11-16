import React, { useState, useEffect } from 'react'
import { fanImages } from '../../contexts/context-FanImage'

function FanImage() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % fanImages.length)
        }, 4000)
        
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-7xl mx-auto px-5 py-10 bg-black flex flex-col items-center gap-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
                Découvrez WIVY
            </h2>

            <div className="relative w-64 h-128 md:w-72 md:h-144 flex items-center justify-center">
                {fanImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Écran ${index + 1}`}
                        className="absolute w-full h-full object-contain rounded-[30px] border-[3px] border-white transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: index === activeIndex ? 1 : 0 }}
                    />
                ))}
            </div>

            <div className="flex gap-2.5">
                {fanImages.map((_, index) => (
                    <div
                        key={index}
                        className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: index === activeIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default FanImage
