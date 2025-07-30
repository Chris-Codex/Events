import { EventProvider } from "./context/EventContext"
import About from "./pages/About"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"



const App = () => {
  return (
    <>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/events" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </>
  )
}

export default App
