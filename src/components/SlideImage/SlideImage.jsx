import React from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'
// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  return (
    <>
      <div style={styles.slide}>
        <TopMenu></TopMenu>

      </div>
    </>

  )
}

const styles = {
  slide: {
    height: '40vh',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${friendsImages[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

  }
}
export default SlideImage