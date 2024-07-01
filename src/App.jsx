import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavouritePage from "./pages/FavouritePage"

function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favourite" element={<FavouritePage/>}/>
      </Routes>
    </div>
  )
}

export default App
