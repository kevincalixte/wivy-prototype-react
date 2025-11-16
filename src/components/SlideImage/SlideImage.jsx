import React from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'
import Button from '../Button/Button.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  return (
    <div
      className="h-96 p-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${friendsImages[3]})`
      }}
    >
      <TopMenu></TopMenu>

    </div>
  )
}

export default SlideImage