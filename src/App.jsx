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

function App() {

  return (
    <>
      <ContextSlideImage.Provider>
        <SlideImage></SlideImage>
        <BorderShadow>
          <Button>Chat Now</Button>
          <Button >Sign In</Button>
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
