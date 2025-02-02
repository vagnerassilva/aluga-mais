import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Home from "./components/Home";
import NewVehicle from "./components/NewVehicle";
import VehicleList from "./components/VehicleList";
//import EditVehicle from "./components/EditVehicle";
//import VehicleDetails from "./components/VehicleDetails";
//import DeleteVehicle from "./components/DeleteVehicle";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container mt-5">
      
      <Route exact path="/" component={Home} />

      <Route path="/new-vehicle" component={NewVehicle} />

      <Route path="/vehicle-list" component={VehicleList} />

      
      {/* <Route path="/edit-vehicle/:id" component={EditVehicle} /> */}

      
      {/* <Route path="/vehicle/:id" component={VehicleDetails} />

      
      <Route path="/delete-vehicle/:id" component={DeleteVehicle} /> */}
    </div>
  </BrowserRouter>
  );
}

export default App;
