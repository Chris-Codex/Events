import { EventProvider } from "./context/EventContext"
import About from "./pages/About"
import Contact from "./pages/contact"
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
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </>
  )
}

export default App
