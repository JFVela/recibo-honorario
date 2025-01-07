import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Label from "../Label";
import Titulo from "../Titulo";
import styles from "./Formulario.module.css";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

const Formulario = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const handleAgregarProducto = (e) => {
    e.preventDefault();

    const cantidadNum = parseFloat(cantidad);
    const precioNum = parseFloat(precio);

    if (!nombre || isNaN(cantidadNum) || isNaN(precioNum)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        text: "Por favor, llena todos los campos correctamente.",
        timer: 2000
      });
      return;
    }

    const nuevoProducto = {
      name: nombre,
      Cantidad: cantidadNum,
      Precio: precioNum,
    };

    agregarProducto(nuevoProducto); // Llama a la función pasada desde App

    // Limpiar campos
    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  return (
    <form className={styles.formulario}>
      <Titulo>Bienvenido!</Titulo>
      <Grid container spacing={2} direction="row" wrap="wrap">
        <Grid item xs={12} sm={5}>
          <Label
            tipo="search"
            children="Nombre del Producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Label
            tipo="number"
            children="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Label
            tipo="number"
            children="Precio Unitario"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="info"
            type="button"
            size="large"
            endIcon={<AddIcon />}
            onClick={handleAgregarProducto}
          >
            Agregar Producto
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formulario;
