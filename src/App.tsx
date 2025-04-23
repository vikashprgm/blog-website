import { Route,Routes,BrowserRouter } from 'react-router-dom'
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Photos} from "./pages/Photos"
import { Geniusbar } from './components/Geniusbar'
import { Create } from './pages/Create'
function App() {
  return (
    <BrowserRouter>
      <Geniusbar></Geniusbar>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
