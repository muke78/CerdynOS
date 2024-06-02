import styled from "styled-components";
import { v, useUsuariosStore, BtnCircular } from "../../index";
export function CardTotales({ color, total, title, icono }) {
  const { datausuarios } = useUsuariosStore();
  return (
    <Container>
      <section className="contentTextos">
        <section>
          <span className="title">{title}</span>
          <b>{<v.iconoFlechabajo />} </b>
        </section>
        <span className="total">
          {datausuarios.moneda} {total}
        </span>
      </section>
      <section className="contentIcono">
        <BtnCircular
          width="50px"
          height="50px"
          bgcolor={color}
          fontsize="25px"
          icono={icono}
          textcolor="#fff"
          translatex="-45px"
          translatey="-15px"
        />
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  .contentTextos {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
    }
    .total {
      font-size: 22px;
      font-weight: 500;
    }
    section {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
  .contentIcono {
    display: flex;
  }
`;
