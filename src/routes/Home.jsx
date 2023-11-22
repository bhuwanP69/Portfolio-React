

import Main from '../components/Main'
import BackToTop from '../components/BackToTop'
import Skills from './Skills'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from '../components/Footer'
import About from './About'

export default function Home() {
  return (
  <>
    <div className="home w-screen bg-body text-bodyText " id='home'>
         <Main/>
        <About/> 
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
    <BackToTop/>
  </>
    
  )
}
