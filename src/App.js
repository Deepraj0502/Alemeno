import "./App.css";
import Dashboard from "./components/Dashboard";
import "../node_modules/flowbite/dist/flowbite";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CoursePage from "./components/CoursePage";
import YourCourses from "./components/YourCourses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/course" element={<CoursePage />}></Route>
          <Route path="/mycourses" element={<YourCourses />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
