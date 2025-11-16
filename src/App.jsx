import './App.css'
import TopMenu from './components/TopMenu/TopMenu'
import SlideImage from './components/SlideImage/SlideImage'
import ContextSlideImage from './contexts/context-SlideImage'
import Stats from './components/Stats/Stats'
import SampleImage from './components/SampleImage/SampleImage'
import SubscribePlans from './components/SubscribePlans/SubscribePlans'
import Presentation
 from './components/Presentation/Presentation'
import BorderShadow from './components/BorderShadow/BorderShadow'
function App() {

  return (
    <>
      <ContextSlideImage.Provider>

        <SlideImage></SlideImage>
        <BorderShadow></BorderShadow>
        <SampleImage></SampleImage>
        <Presentation></Presentation>
        <SubscribePlans></SubscribePlans>
        {/* <Stats></Stats> */}
      </ContextSlideImage.Provider>
    </>
  )
}

export default App
