import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function ModalDialog({ open, producto, onClose, onSave }) {
  const [datos, setDatos] = useState({
    Id: "",
    name: "",
    Cantidad: "",
    Precio: "",
  });

  // Inicializa el estado con el producto seleccionado
  useEffect(() => {
    if (producto) {
      setDatos(producto);
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = () => {
    const productoActualizado = {
      ...datos,
      Cantidad: parseFloat(datos.Cantidad),
      Precio: parseFloat(datos.Precio),
    };
    onSave(productoActualizado);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Producto</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nombre"
          value={datos.name}
          onChange={handleChange}
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          name="Cantidad"
          label="Cantidad"
          type="number"
          value={datos.Cantidad}
          onChange={handleChange}
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          name="Precio"
          label="Precio"
          type="number"
          value={datos.Precio}
          onChange={handleChange}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}
