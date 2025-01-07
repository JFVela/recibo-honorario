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
import { Button } from "@mui/material";
import styles from "./Tabla.module.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function Tabla({ productos, subtotal }) {
  const headers = ["Nombre del Producto", "Cantidad", "Precio"];

  return (
    <>
      <TableContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
        component={Paper}
      >
        <Tiempo />
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
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
            {productos.map((producto, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{producto.name}</TableCell>
                <TableCell align="right">{producto.Cantidad}</TableCell>
                <TableCell align="right">{producto.Precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Resumen subtotal={subtotal} />
        <div className={styles.contenedorBoton}>
          <Button
            sx={{ bgcolor: "var(--cielo)", color: "var(--negro)" }}
            variant="contained"
            endIcon={<DoneOutlineIcon />}
          >
            Finalizar
          </Button>
        </div>
      </TableContainer>
    </>
  );
}

export default Tabla;
