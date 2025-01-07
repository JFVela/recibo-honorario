import { Alert, Container } from "@mui/material";
import "./App.css";
import Cabecera from "./components/Cabecera";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import ModalDialog from "./components/ModalDialog";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alerta from "./components/Alerta";

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

  //Funcion Limpiar
  const limpiar = () => {
    setId(uuidv4().substring(0, 6));
    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  //Funcion Agregar Producto
  const agregarProducto = () => {
    const cantidadNum = parseFloat(cantidad);
    const precioNum = parseFloat(precio);

    //Validar
    if (!nombre || isNaN(cantidadNum) || isNaN(precioNum)) {
      Alerta({
        titulo: "Campos vacío",
        texto: "Por favor, llena todos los campos correctamente.",
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

    limpiar();
  };

  // Función para eliminar un producto por su Id
  const eliminarProducto = (id) => {
    // Encuentra el producto que será eliminado
    const productoEliminado = productos.find((producto) => producto.Id === id);

    // Filtra los productos para eliminar el seleccionado
    setProductos((prev) => prev.filter((producto) => producto.Id !== id));

    // Muestra el nombre del producto eliminado en la alerta
    if (productoEliminado) {
      Alerta({
        icono: "success",
        titulo: "¡Correcto!",
        texto: `Se eliminó <b>${productoEliminado.name}<b>`,
      });
    }
  };

  //Funcion para guardar edición
  const guardarEdicion = (productoActualizado) => {
    setProductos((prev) =>
      prev.map((producto) =>
        producto.Id === productoActualizado.Id ? productoActualizado : producto
      )
    );

    // Cierra el modal después de guardar
    handleClose();

    // Mostrar alerta con el nombre del producto actualizado
    Alerta({
      icono: "info",
      titulo: "¡Actualización Exitosa!",
      texto: `Se actualizó el producto: <b>${productoActualizado.name}<b>`,
    });
  };

  //Calculo dinamico para el Total
  const subtotal = productos.reduce((total, producto) => {
    return total + producto.Cantidad * producto.Precio;
  }, 0);

  //Validar el total, si es nulo devolvera 0.00
  //Sino devolvera con 2 decimales
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
