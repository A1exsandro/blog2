import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>it is work</h1>} />
      </Routes>
    </BrowserRouter>
  )
}