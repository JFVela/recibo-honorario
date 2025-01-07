import { Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos((prev) => [...prev, producto]);
  };

  // Calcular subtotal dinámico
  const subtotal = productos.reduce(
    (total, producto) => total + producto.Cantidad * producto.Precio,
    0
  );

  return (
    <>
      <Cabecera />
      <Container maxWidth="md">
        <Formulario agregarProducto={agregarProducto} />
        <Tabla productos={productos} subtotal={subtotal.toFixed(2)} />
      </Container>
    </>
  );
}

export default App;
