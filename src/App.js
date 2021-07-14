import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/routes';
import './styles/main.scss';


function App() {
  
  return (
    <Router  >
      <main>
        
      
        {routes}
      </main>
    </Router>
  );
}

export default App;