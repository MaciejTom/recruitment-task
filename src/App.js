//ContextApi
import Provider from './inputContext'
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
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gif/:id" element={<GifPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Provider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
