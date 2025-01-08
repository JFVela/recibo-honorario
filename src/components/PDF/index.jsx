import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

function PDF({ enviar }) {
  return (
    <Document>
      <Page>
        <Text>Boleta</Text>
        {/* <Image src={Logo} /> */}
        <View>
          {enviar.map((producto) => (
            <View key={producto.Id} style={{ textAlign: "right" }}>
              <Text>{producto.name}</Text>
              <Text>{producto.Cantidad}</Text>
              <Text>S/{producto.Precio}</Text>
              <Text>S/{(producto.Cantidad * producto.Precio).toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
