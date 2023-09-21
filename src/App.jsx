import Header from "./components/Header";
import Main from "./components/Main";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import Skills from "./routes/Skills";

export default function App() {
 

  return (
    <>
    <div className="body bg-main-color">

   <Header/>
   <Main/>
   <About/>
   <Skills/>
   <Services/>
   <Portfolio/>
   <Contact/>
    </div>
    </>
  );
}
