import ToDoComponent from "./components/Todo-component";
import Home from "./pages/Home";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
