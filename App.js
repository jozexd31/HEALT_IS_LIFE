//es lo que organiza todas las rutas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from "contenedor/paginaerror/Error404";
import Home from "contenedor/pagina/Home";
import Predicciones from "contenedor/pagina/Predicciones";
import Blog from "contenedor/pagina/Blog";
import Historial from "contenedor/pagina/Historial";
import Porsi from "contenedor/pagina/Porsi";
import store from "store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Routes>
            {/* PAGINA ERROR */}
            <Route path="*" element={<Error404 />} />
            {/* PAGINA HOME*/}
            <Route path="/" element={<Home />} />
            <Route path="./Predicciones" element={<Predicciones />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Historial" element={<Historial />} />
            <Route path="/Porsi" element={<Porsi />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
