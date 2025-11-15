import './App.css'
import TopMenu from './components/TopMenu/TopMenu'
import SlideImage from './components/SlideImage/SlideImage'
import ContextSlideImage from './contexts/context-SlideImage'
import Stats from './components/Stats/Stats'
import Design from './components/Design/Design'
function App() {

  return (
    <>
      <ContextSlideImage.Provider>
        <TopMenu></TopMenu>
        <SlideImage></SlideImage>
        {/* <Stats></Stats> */}
        {/* <Design></Design> */}
      </ContextSlideImage.Provider>
    </>
  )
}

export default App
