import React from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  return (
    <>
      {/* 
        h-[40vh] = height: 40vh (40% de la hauteur viewport)
        bg-cover = background-size: cover (image couvre tout)
        bg-center = background-position: center (image centrée)
        bg-black/80 = background-color: rgba(0,0,0,0.8) (fond noir transparent)
      */}
      <div 
        className="h-[40vh] p-4 bg-cover bg-center bg-black/80"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${friendsImages[0]})`
        }}
      >
        <TopMenu></TopMenu>
      </div>
    </>
  )
}

export default SlideImage