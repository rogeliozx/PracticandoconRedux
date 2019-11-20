import React from "react";
import store from "./store"; //redux
import { Provider } from "react-redux";
import AgregarCita from "./components/Agregarcita";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de Veterinaria</h1>
        </header>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">Listado</div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
