import './App.css';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    
    <div>
      <Navbar/>
    </div>
    <Routes>
          <Route exact path="/" element={<NewsItem key="general" category="general" country="in" />}>
          </Route>
          <Route exact path="/sports" element={<NewsItem key="sport" category="sport" country="in" />}>
          </Route>
          <Route exact path="/science" element={<NewsItem key="science" category="science" country="in" />}>
          </Route>
          <Route exact path="/enter" element={<NewsItem key="entertainment" category="entertainment" country="in" />}>
          </Route>
          <Route exact path="/health" element={<NewsItem key="health" category="health" country="in" />}>
          </Route>
          <Route exact path="/tech" element={<NewsItem key="technology" category="technology" country="in" />}>
          </Route>
          <Route exact path="/bus" element={<NewsItem key="business" category="business" country="in" />}>
          </Route>
          
        </Routes>
   
    </Router>
    </>
  
  );
}

export default App;
