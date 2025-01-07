import styled from "styled-components";

const ResumenContenido = styled.section`
  background-color: cornsilk;
  font-family: "Arimo";
  padding: 15px 10px;
  width: 50%;
  max-width: 250px;
  display: flex;
  justify-content: center;
`;

const Subtitulo = styled.h3`
  margin: 0;
`;

function Resumen({ subtotal }) {
  // console.log("Subtotal en Resumen:", subtotal);
  return (
    <ResumenContenido>
      <Subtitulo>Total: S/{subtotal}</Subtitulo>
    </ResumenContenido>
  );
}

export default Resumen;
