import './App.css'
import SlideImage from './components/SlideImage/SlideImage'
import ContextSlideImage from './contexts/context-SlideImage'
import Stats from './components/Stats/Stats'
import SampleImage from './components/SampleImage/SampleImage'
import SubscribePlans from './components/SubscribePlans/SubscribePlans'
import Presentation from './components/Presentation/Presentation'
import BorderShadow from './components/BorderShadow/BorderShadow'
import Button from './components/Button/Button'
import FeedBack from './components/FeedBack/FeedBack'
import Footer from './components/Footer/Footer'
import { useState, useEffect } from 'react'
import FormSubscribe from './components/FormSubscribe/FormSubscribe'


function App() {

  const [FormSubscribeVisible, setFormSubscribeVisible] = useState(false);

  const handlerClick = () => {
    const BorderShadow = document.querySelector('.Bordershadow');
    const buttonsBorder = BorderShadow.querySelectorAll('button');
    buttonsBorder.forEach(button => {
      button.style.opacity = 0;
    })
    const TopMenu = document.querySelector('.TopMenu');
    const buttonsTopMenu = TopMenu.querySelectorAll('li');
    buttonsTopMenu.forEach(button => {
      button.style.opacity = 0;
    })
    setFormSubscribeVisible(true);
  }

  return (

    <>
      <ContextSlideImage.Provider value={{}}>
        <SlideImage onShowForm={FormSubscribeVisible}>
          {FormSubscribeVisible &&
            <FormSubscribe></FormSubscribe>
          }
        </SlideImage>
        <BorderShadow>
          <Button>Chat test</Button>
          <Button onClick={handlerClick}>Sign In</Button>
        </BorderShadow>
        <SampleImage></SampleImage>
        <SubscribePlans></SubscribePlans>
        <Presentation></Presentation>
        <FeedBack></FeedBack>
        <Footer></Footer>
        {/* <Stats></Stats> */}
      </ContextSlideImage.Provider>

    </>

  )
}

export default App
