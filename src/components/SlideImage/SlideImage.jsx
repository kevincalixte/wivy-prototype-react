import React from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  return (
    <div style={styles.slide}></div>

  )
}

const styles = {
  slide: {
    height: '40vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${friendsImages[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

  }
}
export default SlideImage