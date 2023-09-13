import Header from "./components/Header";
import Main from "./components/Main";
import About from "./routes/About";
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
    </div>
    </>
  );
}
