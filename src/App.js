import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './screens/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from './Upload';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
