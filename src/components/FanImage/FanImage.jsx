import React, { useState } from 'react'
import { fanImages } from '../../contexts/context-FanImage'

// COMPOSANT EVENTAIL DE PHOTOS EN DEMI-CERCLE
function FanImage() {
    const [activeIndex, setActiveIndex] = useState(2); // Image centrale par défaut

    const handleImageClick = (index) => {
        setActiveIndex(index);
    };

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setActiveIndex((prev) => (prev + 1) % fanImages.length);
        } else {
            setActiveIndex((prev) => (prev - 1 + fanImages.length) % fanImages.length);
        }
    };

    // Calcul des positions en éventail (demi-cercle) - responsive
    const getImageStyle = (index) => {
        const totalImages = fanImages.length;
        
        // Position relative à l'image active (centre)
        const position = index - activeIndex;
        
        // Responsive: ajuster selon la largeur d'écran
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        // Si c'est l'image active, elle est au centre
        if (index === activeIndex) {
            const activeScale = isMobile ? 0.7 : isTablet ? 0.85 : 1.1;
            return {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${activeScale})`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 50,
                opacity: 1,
                cursor: 'pointer',
                transformOrigin: 'center center',
            };
        }
        
        // Pour les autres images, disposition en éventail autour du centre
        // Angle pour l'éventail
        const angle = position * 25; // Espacement des angles
        
        // Distance horizontale du centre (rayon du demi-cercle) - responsive
        const radius = isMobile ? 140 : isTablet ? 220 : 320;
        const x = Math.sin(angle * Math.PI / 180) * radius;
        const y = Math.abs(Math.cos(angle * Math.PI / 180)) * (isMobile ? 30 : 60); // Plus de courbe verticale
        
        // Taille : plus petite pour les images non actives - responsive
        const baseScale = isMobile ? 0.4 : isTablet ? 0.55 : 0.65;
        
        // Z-index : en fonction de la distance au centre
        const zIndex = 10 - Math.abs(position);
        
        // Opacité : moins visible pour les images non actives
        const opacity = 0.5;
        
        return {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg) scale(${baseScale})`,
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: zIndex,
            opacity: opacity,
            cursor: 'pointer',
            transformOrigin: 'center bottom',
            filter: 'blur(1px) brightness(0.8)',
        };
    };

    return (
        <div style={styles.container}>
            {/* Conteneur des images */}
            <div style={styles.fanContainer}>
                {fanImages.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        style={getImageStyle(index)}
                        onMouseEnter={(e) => {
                            if (index !== activeIndex) {
                                e.currentTarget.style.opacity = '0.7';
                                e.currentTarget.style.filter = 'blur(0px) brightness(0.9)';
                                const position = index - activeIndex;
                                const isMobile = window.innerWidth < 768;
                                const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
                                const angle = position * 25;
                                const radius = isMobile ? 140 : isTablet ? 220 : 320;
                                const x = Math.sin(angle * Math.PI / 180) * radius;
                                const y = Math.abs(Math.cos(angle * Math.PI / 180)) * (isMobile ? 30 : 60);
                                const hoverScale = isMobile ? 0.45 : isTablet ? 0.6 : 0.7;
                                e.currentTarget.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg) scale(${hoverScale})`;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (index !== activeIndex) {
                                e.currentTarget.style.opacity = '0.5';
                                e.currentTarget.style.filter = 'blur(1px) brightness(0.8)';
                                const position = index - activeIndex;
                                const isMobile = window.innerWidth < 768;
                                const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
                                const angle = position * 25;
                                const radius = isMobile ? 140 : isTablet ? 220 : 320;
                                const x = Math.sin(angle * Math.PI / 180) * radius;
                                const y = Math.abs(Math.cos(angle * Math.PI / 180)) * (isMobile ? 30 : 60);
                                const baseScale = isMobile ? 0.4 : isTablet ? 0.55 : 0.65;
                                e.currentTarget.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg) scale(${baseScale})`;
                            }
                        }}
                    >
                        <img
                            src={image}
                            alt={`Mockup ${index + 1}`}
                            style={{
                                width: '250px',
                                height: 'auto',
                                borderRadius: '30px',
                                boxShadow: index === activeIndex 
                                    ? '0 20px 60px rgba(255, 255, 255, 0.3)' 
                                    : '0 10px 30px rgba(0, 0, 0, 0.4)',
                                border: index === activeIndex ? '3px solid #FFFFFF' : '2px solid rgba(255, 255, 255, 0.15)',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Boutons de navigation */}
            <button 
                onClick={() => handleSwipe('right')} 
                style={styles.navButton}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                }}
            >
                ‹
            </button>
            <button 
                onClick={() => handleSwipe('left')} 
                style={{...styles.navButton, right: '20px', left: 'auto'}}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                }}
            >
                ›
            </button>

            {/* Indicateurs */}
            <div style={styles.indicators}>
                {fanImages.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        style={{
                            width: index === activeIndex ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: index === activeIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        maxWidth: '1400px',
        height: '450px',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        overflow: 'hidden',
        padding: '50px 0',
    },
    fanContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    navButton: {
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 100,
        transition: 'all 0.3s ease',
        color: '#FFFFFF',
        fontSize: '32px',
        fontWeight: '300',
    },
    indicators: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 100,
    },
}

export default FanImage
