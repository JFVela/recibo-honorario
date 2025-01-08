import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";

import Logo from "./unnamed.png";

function PDF() {
  return (
    <Document>
      <Page>
        <Text>Hola</Text>
        <Image src={Logo} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem possimus voluptate quas optio deserunt ut nostrum
          tempora saepe soluta voluptatem distinctio, provident dolore natus
          assumenda, esse a error minima consequatur.
        </Text>
      </Page>
    </Document>
  );
}

export default PDF;
