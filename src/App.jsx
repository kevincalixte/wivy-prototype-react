import './App.css'
import TopMenu from './components/TopMenu/TopMenu'
import SlideImage from './components/SlideImage/SlideImage'
import ContextSlideImage from './contexts/context-SlideImage'
import Stats from './components/Stats/Stats'
import Design from './components/Design/Design'
import FanImage from './components/FanImage/FanImage'
function App() {

  return (
    <>
      <ContextSlideImage.Provider>
       
        <SlideImage></SlideImage>
        <FanImage></FanImage> 
        {/* <Stats></Stats> */}
        {/* <Design></Design> */}
      </ContextSlideImage.Provider>
    </>
  )
}

export default App
