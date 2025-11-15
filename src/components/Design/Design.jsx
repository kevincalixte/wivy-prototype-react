import React from 'react'
import { designImages } from '../../contexts/context-Design.jsx'

// FONCTION QUI GERE LA SECTION DU DESIGN   
function Design() {

    return (
        <div style={styles.design}></div>
    )
}

const styles = {
    design: {
        height: '40vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${designImages[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        // boxShadow: 'inset 0 80px 60px -50px rgba(0, 0, 0, 0.9)',
    }
}

export default Design