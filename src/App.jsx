import { Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {

  //Variables
  const [productos, setProductos] = useState([]);
  const [id, setId] = useState(uuidv4().substring(0, 6));
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  //Funcion Agregar Producto
  const agregarProducto = () => {
    const cantidadNum = parseFloat(cantidad);
    const precioNum = parseFloat(precio);

    //Sweet Alert 2
    if (!nombre || isNaN(cantidadNum) || isNaN(precioNum)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        text: "Por favor, llena todos los campos correctamente.",
        timer: 2000,
      });
      return;
    }


    const nuevoProducto = {
      Id: id,
      name: nombre,
      Cantidad: cantidadNum,
      Precio: precioNum,
    };

    setProductos((prev) => [...prev, nuevoProducto]);

    //Limpia el formulario
    setId(uuidv4().substring(0, 6));
    setNombre("");
    setCantidad("");
    setPrecio("");
    console.log(nuevoProducto);
  };


  //Calculos necesarios para el Total
  const subtotal = productos.reduce((total, producto) => {
    return total + producto.Cantidad * producto.Precio;
  }, 0);

  const subtotalFormatted = isNaN(subtotal) ? "0.00" : subtotal.toFixed(2);

  return (
    <>
      <Cabecera />
      <Container maxWidth="md">
        <Formulario
          id={id}
          nombre={nombre}
          cantidad={cantidad}
          precio={precio}
          setNombre={setNombre}
          setCantidad={setCantidad}
          setPrecio={setPrecio}
          agregarProducto={agregarProducto}
        />
        <Tabla productos={productos} subtotal={subtotalFormatted} />
      </Container>
    </>
  );
}

export default App;
