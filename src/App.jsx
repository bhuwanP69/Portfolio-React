import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts
import Header from './components/Header'
import Home from './routes/Home';
import NotFound from './routes/NotFound';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home/>} />
      </Route>
      
      <Route path='*' element={<NotFound />} />
    </>
  )
  
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
