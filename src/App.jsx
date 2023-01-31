import React from "react";
import BigList from "./components/BigList";

import Footer from "./components/Footer";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import BlokDetails from "./components/BlokDetails";
// import Comments from "./components/Comments";
// import ComList from "./components/ComList";
// import ComDetails from "./components/ComDetails";
// import Albums from "./components/Albums";
// import AlList from "./components/AlList";
// import AlDetails from "./components/AlDetails";
import Create from "./components/Create";
function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Comments />}></Route> */}
            {/* <Route path="/albums" element={<Albums />}></Route> */}
            <Route path="/create" element={<Create />}></Route>
            {/* <Route path="/blogs" element={<BigList />}></Route> */}
            {/* <Route path="/blogs/:id" element={<BlokDetails />}></Route> */}
            {/* <Route path="/foo" element={<ComList />}></Route> */}
            {/* <Route path="/foo/:id" element={<ComDetails />}></Route> */}
            {/* <Route path="/fol" element={<AlList />}></Route> */}
            {/* <Route path="/fol/:id" element={<AlDetails />}></Route> */}
            <Route path="/*" element={<Error/>}></Route>
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
