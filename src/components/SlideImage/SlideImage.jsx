import React from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  return (
    <>
      {/* 
        h-96 = height: 24rem (384px de hauteur)
        bg-cover = background-size: cover (image couvre tout)
        bg-center = background-position: center (image centrée)
        bg-black = background-color: black (fond noir)
      */}
      <div 
        className="h-96 p-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${friendsImages[0]})`
        }}
      >
        <TopMenu></TopMenu>
      </div>
    </>
  )
}

export default SlideImage