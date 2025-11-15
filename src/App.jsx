import './App.css'
import TopMenu from './components/TopMenu/TopMenu'
import SlideImage from './components/SlideImage/SlideImage'
import ContextSlideImage from './contexts/context-SlideImage'
import Stats from './components/Stats/Stats'
function App() {

  return (
    <>
      <ContextSlideImage.Provider>
        <TopMenu></TopMenu>
        <SlideImage></SlideImage>
        {/* <Stats></Stats> */}
      </ContextSlideImage.Provider>
    </>
  )
}

export default App
