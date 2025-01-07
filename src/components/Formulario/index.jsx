import React from "react";
import { Button, Grid } from "@mui/material";
import Label from "../Label";
import Titulo from "../Titulo";
import styles from "./Formulario.module.css";
import AddIcon from "@mui/icons-material/Add";

const Formulario = ({
  id,
  nombre,
  cantidad,
  precio,
  setNombre,
  setCantidad,
  setPrecio,
  agregarProducto,
}) => {
  return (
    <form className={styles.formulario}>
      <Titulo>Bienvenido!</Titulo>
      <Grid container spacing={2} direction="row" wrap="wrap">
        {/* Campo oculto para el Código */}
        <input type="hidden" value={id} />

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
            onClick={agregarProducto}
          >
            Agregar Producto
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formulario;
