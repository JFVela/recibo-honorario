import React from "react";
import styles from "./Cabecera.module.css";
import Titulo from "../Titulo";

function Cabecera() {
  return (
    <header className={styles.header}>
      <Titulo>Recibo Honorarios</Titulo>
    </header>
  );
}

export default Cabecera;
