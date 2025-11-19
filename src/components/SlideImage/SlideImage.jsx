import React, { use, useContext, useEffect, useState } from 'react'
import { meetImages, friendsImages, loveImages } from '../../contexts/context-SlideImage.jsx'
import TopMenu from '../TopMenu/TopMenu.jsx'
import Button from '../Button/Button.jsx'
import ContextSlideImage from '../../contexts/context-SlideImage.jsx'

// FONCTION QUI GERE LE SLIDE D'IMAGES PAR CATEGORIE
function SlideImage(props) {

  const [currentImage, setCurrentImage] = useState(0);
  const [currentAlbum, setCurrentAlbum] = useState(meetImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % currentAlbum.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentAlbum]);

  props.onShowForm;
  
  return (
    <>
      <div
        className="h-96 p-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 100%), url(${currentAlbum[currentImage]})`
        }}
      >
        <TopMenu setCurrentAlbum={setCurrentAlbum}
          meetImages={meetImages}
          friendsImages={friendsImages}
          loveImages={loveImages}></TopMenu>

        {props.children}
      </div>
    </>
  )
}

export default SlideImage