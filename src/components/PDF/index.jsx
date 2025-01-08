import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);
dayjs.tz.setDefault("America/Lima");

function PDF({ enviar }) {
  const total = enviar.reduce(
    (acc, producto) => acc + producto.Cantidad * producto.Precio,
    0
  );

  const fechaHora = dayjs().tz("America/Lima").format("DD/MM HH:mm");

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: "#FFFFFF",
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
      color: "#1976D2",
      fontWeight: "bold",
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderColor: "#BDBDBD",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableColHeader: {
      width: "25%",
      borderStyle: "solid",
      borderColor: "#BDBDBD",
      borderBottomColor: "#1976D2",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      backgroundColor: "#E3F2FD",
    },
    tableCol: {
      width: "25%",
      borderStyle: "solid",
      borderColor: "#BDBDBD",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCellHeader: {
      margin: 5,
      fontSize: 12,
      fontWeight: "bold",
      color: "#1976D2",
    },
    tableCell: {
      margin: 5,
      fontSize: 10,
    },
    totalRow: {
      backgroundColor: "#F5F5F5",
    },
    totalCell: {
      fontWeight: "bold",
      color: "#1976D2",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Recibo Honorarios</Text>
        <Text>Fecha: {fechaHora}</Text>
        <View style={styles.table}>
          {/* Encabezados de la tabla */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Producto</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Cantidad</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Precio</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Total</Text>
            </View>
          </View>

          {/* Filas de productos */}
          {enviar.map((producto) => (
            <View key={producto.Id} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{producto.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{producto.Cantidad}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  S/{producto.Precio.toFixed(2)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  S/{(producto.Cantidad * producto.Precio).toFixed(2)}
                </Text>
              </View>
            </View>
          ))}

          {/* Total */}
          <View style={[styles.tableRow, styles.totalRow]}>
            <View style={{ ...styles.tableCol, flex: 3 }}>
              <Text style={[styles.tableCell, styles.totalCell]}>Total</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={[styles.tableCell, styles.totalCell]}>
                S/{total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
