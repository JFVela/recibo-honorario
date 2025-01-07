import { Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);

  //Funcion Agregar Producto
  const agregarProducto = (producto) => {
    setProductos((prev) => {
      return [...prev, producto];
    });
  };

  // Calcular subtotal dinámico
  const subtotal = productos.reduce((total, producto) => {
    return total + producto.Cantidad * producto.Precio;
  }, 0);

  const subtotalFormatted = isNaN(subtotal) ? "0.00" : subtotal.toFixed(2);

  return (
    <>
      <Cabecera />
      <Container maxWidth="md">
        <Formulario agregarProducto={agregarProducto} />
        <Tabla productos={productos} subtotal={subtotalFormatted} />
      </Container>
    </>
  );
}

export default App;
