import { Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos((prev) => {
      // console.log("Productos actuales:", prev);
      return [...prev, producto];
    });
  };

  console.log("Productos en App:", productos);

  // Calcular subtotal dinámico
  const subtotal = productos.reduce((total, producto) => {
    // console.log("Producto:", producto);
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
