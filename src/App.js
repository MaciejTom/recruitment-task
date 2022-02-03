//Components
import Home from "./pages/Home";
import GifPage from "./pages/GifPage";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyles } from "./GlobalStyles";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:GifId" element={<GifPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>    
    <GlobalStyles />
  </Router>
  );
}

export default App;
