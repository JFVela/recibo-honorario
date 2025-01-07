import styled from "styled-components";

const ResumenContenido = styled.section`
  position: sticky;
  bottom: 10px;
  margin-top: 10px;
  background-color: cornsilk;
  font-family: "Arimo";
  padding: 15px 10px;
  width: 50%;
  max-width: 250px;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-radius: 10px;
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
