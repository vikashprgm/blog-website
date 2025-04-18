import { Route,Routes,BrowserRouter } from 'react-router-dom'
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Photos} from "./pages/Photos"
import { Geniusbar } from './components/Geniusbar'
function App() {
  return (
    <BrowserRouter>
      <Geniusbar></Geniusbar>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/photos" element={<Photos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
