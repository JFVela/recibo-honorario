import { TextField } from "@mui/material";
import styles from "./Label.module.css";

function Label({ children, tipo, value, onChange }) {
  return (
    <TextField
      className={styles.label}
      id={children}
      label={children}
      variant="outlined"
      margin="dense"
      type={tipo}
      fullWidth
      value={value} // Vincula el valor al estado
      onChange={onChange} // Maneja el evento de cambio
    />
  );
}

export default Label;
