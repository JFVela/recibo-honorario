import { Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import ModalDialog from "./components/ModalDialog";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {
  //Variables
  const [productos, setProductos] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);
  const [id, setId] = useState(uuidv4().substring(0, 6));
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [open, setOpen] = useState(false);

  //Abrir modal
  const handleClickOpen = (producto) => {
    setProductoEditar(producto);
    setOpen(true);
  };

  //Cerrar Modal
  const handleClose = () => {
    setProductoEditar(null);
    setOpen(false);
  };

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
    //Nuevo "Producto" creado:
    console.log(nuevoProducto);
  };

  // Función para eliminar un producto por su Id
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((producto) => producto.Id !== id));
  };

  //Funcion para guardar edición
  const guardarEdicion = (productoActualizado) => {
    setProductos((prev) =>
      prev.map((producto) =>
        producto.Id === productoActualizado.Id ? productoActualizado : producto
      )
    );
    handleClose();
  };

  //Lista de "Productos" almacenados
  //Asegurando que imprima al añadir, eliminar un producto
  // console.log(productos);

  //Calculo dinamico para el Total
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
        <Tabla
          productos={productos}
          subtotal={subtotalFormatted}
          eliminarProducto={eliminarProducto}
          editarProducto={handleClickOpen}
        />
        {open && (
          <ModalDialog
            open={open}
            producto={productoEditar}
            onClose={handleClose}
            onSave={guardarEdicion}
          />
        )}
      </Container>
    </>
  );
}

export default App;
