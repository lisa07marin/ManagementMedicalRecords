import './App.css';
import Menu from './Menu';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientForm from "./patient/PatientForm"
import Patients from './patient/Patients';
import Treatment from './treatment/Treatment';

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path="/pacientes/nuevo">
            <PatientForm />
          </Route>
          <Route path="/pacientes">
            <Patients />
          </Route>
          <Route path="/tratamientos/nuevo">
            <Treatment />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
