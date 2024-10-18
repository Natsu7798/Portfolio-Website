import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './home/portfolio';
import DooitDetails from './Project Details Page/DOOIT';
import JccDetails from './Project Details Page/JCC';
import PlanEaseDetails from './Project Details Page/PlanEase';
import KerjaSetaraDetails from './Project Details Page/KerjaSetara';
import "./App.css";

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="DOOITdetails" exact element={<DooitDetails />} />
            <Route path="JCCdetails" exact element={<JccDetails />} />
            <Route path="PlanEasedetails" exact element={<PlanEaseDetails />} />
            <Route path="KerjaSetaradetails" exact element={<KerjaSetaraDetails />} />
          </Routes>
        </Router>
      </>
    );
  }
  
  export default App;