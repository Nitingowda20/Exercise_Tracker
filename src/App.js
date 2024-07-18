import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar_components";
import ExerciseList from "./components/ExerciseList_components";
import EditExercise from "./components/editExercise_component";
import CreateExercise from "./components/createExercise_component";
import CreateUser from "./components/createUser_component";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
