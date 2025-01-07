import Swal from "sweetalert2";

const Alerta = ({
  icono = "error",
  titulo,
  texto,
  posicion = "top-end",
  tiempo = "3500",
}) => {
  if (!titulo || !texto) {
    return;
  }

  Swal.fire({
    position: posicion,
    icon: icono,
    title: titulo,
    showConfirmButton: false,
    html: texto,
    timer: tiempo,
  });
};

export default Alerta;
