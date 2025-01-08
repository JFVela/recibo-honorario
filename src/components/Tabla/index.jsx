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
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../PDF";
import { v4 as uuidv4 } from "uuid";

const Detalles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;

function Tabla({ productos, subtotal, eliminarProducto, editarProducto }) {
  const headers = ["Prod.", "Cant.", "Prec.", "Subt.", "Accion"];

  return (
    <>
      <Detalles id="detalles">
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
        <div>
          <PDFDownloadLink
            document={<PDF enviar={productos} />}
            fileName={`${uuidv4()}.pdf`}
          >
            {({ loading, url, error, blob }) =>
              loading ? (
                <Button>Cargando</Button>
              ) : (
                <Button
                  sx={{
                    bgcolor: "var(--cielo)",
                    color: "var(--negro)",
                    fontFamily: "Arimo",
                    fontSize: "20px",
                    fontWeight: "800",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  endIcon={<DoneOutlineIcon />}
                >
                  Finalizar
                </Button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
}

export default Tabla;
