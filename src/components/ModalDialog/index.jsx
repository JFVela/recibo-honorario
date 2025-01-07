import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Alert,
} from "@mui/material";
import Alerta from "../Alerta";

// Componentes creados con "Styled"
// Ademas de ajustados para un mejor estilo
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    overflow: "hidden",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: "24px",
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "24px",
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  justifyContent: "flex-end",
  padding: "16px 24px",
  gap: "16px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "24px",
  marginTop: "10px",
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.divider,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: theme.palette.primary.main,
  },
}));

export default function ModalDialog({ open, producto, onClose, onSave }) {
  const [datos, setDatos] = useState({
    Id: "",
    name: "",
    Cantidad: "",
    Precio: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (producto) {
      setDatos(producto);
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    setError(""); // Limpiar el error cuando el usuario empieza a escribir
  };

  const handleSubmit = () => {
    if (!datos.name || !datos.Cantidad || !datos.Precio) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    const productoActualizado = {
      ...datos,
      Cantidad: parseFloat(datos.Cantidad),
      Precio: parseFloat(datos.Precio),
    };
    onSave(productoActualizado);
    setError(""); // Limpiar el error después de guardar exitosamente
  };

  const fields = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "Cantidad", label: "Cantidad", type: "number" },
    { name: "Precio", label: "Precio", type: "number" },
  ];

  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>Editar Producto</StyledDialogTitle>
      {error && (
        <Alert severity="error" style={{ marginBottom: "16px", margin: "0px" }}>
          <strong>{error}</strong>
        </Alert>
      )}
      <StyledDialogContent>
        {fields.map((field) => (
          <StyledTextField
            key={field.name}
            autoFocus={field.name === "name"}
            required
            fullWidth
            name={field.name}
            label={field.label}
            type={field.type}
            value={datos[field.name]}
            onChange={handleChange}
            variant="standard"
          />
        ))}
      </StyledDialogContent>
      <StyledDialogActions>
        <Button variant="outlined" color="error" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
}
