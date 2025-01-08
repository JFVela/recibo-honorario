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
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { v4 as uuidv4 } from "uuid";
// import qrImageUrl from "./qr.png";

const Detalles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;

function Tabla({ productos, subtotal, eliminarProducto, editarProducto }) {
  const headers = ["Prod.", "Cant.", "Prec.", "Subt.", "Accion"];
  const cabecera = ["Producto", "Cantidad", "Costo * Unidad", "Subtotal"];
  const documento = uuidv4();

  const generatePDF = () => {
    console.log("Generar PDF")
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Factura", 105, 15, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Documento: ${documento}`, 14, 25);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 32);

    const data = productos.map((producto) => [
      producto.name,
      producto.Cantidad,
      `S/${producto.Precio.toFixed(2)}`,
      `S/${(producto.Cantidad * producto.Precio).toFixed(2)}`,
    ]);

    doc.autoTable({
      startY: 40,
      head: [cabecera],
      body: data,
      theme: "striped",
      headStyles: { fillColor: [100, 100, 100] },
    });

    const finalY = doc.lastAutoTable.finalY || 40;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");

    // Asegúrate de que subtotal sea un número válido
    const totalFormatted =
      subtotal && !isNaN(subtotal) ? Number(subtotal).toFixed(2) : "0.00";
    doc.text(`Total: S/${totalFormatted}`, 195, finalY + 10, {
      align: "right",
    });

    // doc.setFontSize(16);
    // doc.text("Escanea para pagar", 105, finalY + 30, { align: "center" });

    // doc.addImage(qrImageUrl, "png", 75, finalY + 35, 60, 60);

    doc.save(`factura_${documento}.pdf`);
  };

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
                  <TableCell align="right">
                    S/{producto.Precio.toFixed(2)}
                  </TableCell>
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
          onClick={generatePDF}
        >
          Finalizar
        </Button>
      </div>
    </>
  );
}

export default Tabla;
