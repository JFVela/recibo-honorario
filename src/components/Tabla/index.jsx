import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tiempo from "../Tiempo";
import Resumen from "../Resumen";
import { Button, IconButton } from "@mui/material";
import styles from "./Tabla.module.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styled from "styled-components";

const Detalles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;

function Tabla({ productos, subtotal, eliminarProducto, editarProducto }) {
  const headers = ["Id", "Prod.", "Cant.", "Prec.", "Subt.", "Accion"];

  return (
    <>
      <Detalles>
        <Tiempo />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    align={index === 0 ? "left" : "right"}
                    sx={{
                      fontWeight: "bold",
                      bgcolor: "var(--gris)",
                      color: "white",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto) => (
                <TableRow
                  key={producto.Id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{producto.Id}</TableCell>
                  <TableCell align="right">{producto.name}</TableCell>
                  <TableCell align="right">{producto.Cantidad}</TableCell>
                  <TableCell align="right">S/{producto.Precio}</TableCell>
                  <TableCell align="right">
                    S/{(producto.Cantidad * producto.Precio).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => eliminarProducto(producto.Id)}
                    >
                      <ClearIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      color="warning"
                      onClick={() => editarProducto(producto)}
                    >
                      <ModeEditIcon fontSize="medium" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Resumen subtotal={subtotal} />
      </Detalles>
      <div className={styles.contenedorBoton}>
        <Button
          sx={{ bgcolor: "var(--cielo)", color: "var(--negro)" }}
          variant="contained"
          endIcon={<DoneOutlineIcon />}
        >
          Finalizar
        </Button>
      </div>
    </>
  );
}

export default Tabla;
