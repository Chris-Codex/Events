import { EventProvider } from "./context/EventContext"
import About from "./pages/About"
import Calender from "./pages/Calender"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"



const App = () => {
  return (
    <>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </>
  )
}

export default App
