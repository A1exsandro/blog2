import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import NavBar from "../components/navbar";
import English from "../pages/english";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </BrowserRouter>
  )
}