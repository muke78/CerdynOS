import styled from "styled-components";
export function BtnFiltro({ bgcolor, textcolor, icono, funcion }) {
  return (
    <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={funcion}>
      <div>
        <span className="contentIcon">{icono}</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$textcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  cursor: pointer;
  transition: width 0.2s;

  .contentIcon {
    position: absolute;
    top: 25%;
    bottom: 25%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transition: transform 0.2s, top 0.2s, right 0.4s;

    &:hover {
      transform: scale(1.3);
      top: 30%;
      bottom: 25%;
      right: 0;
    }

    &::before {
      content: "Agregar";
      font-size: 13px;
      font-weight: 500;
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${(props) => props.$bgcolor};
      color: ${(props) => props.$textcolor};
      padding: 5px;
      border-radius: 10px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.5s, right 0.2s; /* Transición suave para 'right' */
    }

    &:hover::before {
      opacity: 1;
      right: 60px; /* Asegúrate de que esta distancia es correcta para tu diseño */
    }
  }
`;
