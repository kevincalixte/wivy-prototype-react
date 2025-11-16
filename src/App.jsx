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
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <ContextSlideImage.Provider>
        <SlideImage></SlideImage>
        <BorderShadow>
          <Button className="border px-5 py-1 rounded-4xl bg-transparent text-white border-white">Chat Now</Button>
          <Button className="border px-5 py-1 rounded-4xl bg-transparent text-white border-white">Sign In</Button>
        </BorderShadow>
        <SampleImage></SampleImage>
        <SubscribePlans></SubscribePlans>
        <Presentation></Presentation>
        {/* <Stats></Stats> */}
      </ContextSlideImage.Provider>
    </>
  )
}

export default App
