import React, { use, useContext, useEffect, useState } from 'react'
import { friendsImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'
import Button from '../Button/Button.jsx'
import ContextSlideImage from '../../contexts/context-SlideImage.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage() {

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);

  useEffect(() => {
    let timeoutId;
    setPrevImage(currentImage);

    timeoutId = setTimeout(() => {
      setCurrentImage(prev => (prev + 1) % friendsImages.length);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [currentImage, friendsImages.length]);

  return (

    <div
      className="h-96 p-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${friendsImages[currentImage]})`
      }}
    >
      <TopMenu></TopMenu>

    </div>
  )
}

export default SlideImage