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
        height: '20vh',
        backgroundImage: `url(${designImages[0]})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        borderRadius: '1rem',
        position: 'relative',
        top: '2rem',
        left: '5rem'

        // width: '',
        // backgroundPosition: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.8)',

    }
}

export default Design