import { EventProvider } from "./context/EventContext"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </>
  )
}

export default App
