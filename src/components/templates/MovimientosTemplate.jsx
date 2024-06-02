import styled from "styled-components";
import {
  Header,
  CalendarioLineal,
  CardTotales,
  useOperaciones,
  v,
} from "../../index";
import dayjs from "dayjs";
import { useState } from "react";

export function MovimientosTemplate() {
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");
  const [state, setState] = useState(false);

  const { tipo, setTipo, colorCategoria } = useOperaciones();
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="totales">
        <CardTotales
          title={tipo === "g" ? "Gastos pendientes" : "Ingresos pendientes"}
          color={colorCategoria}
          icono={<v.flechaarribalarga />}
        />
        <CardTotales
          title={tipo === "g" ? "Gastos pagados" : "Ingresos pagados"}
          color={colorCategoria}
          icono={<v.flechaabajolarga />}
        />
        <CardTotales
          title="Total"
          color={colorCategoria}
          icono={<v.balance />}
        />
      </section>
      <section className="calendario">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          setFormatoFecha={setFormatoFecha}
        />
      </section>
      <section className="main"></section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "totales" 100px
    "calendario" 100px
    "main" auto;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }

  .totales {
    grid-area: totales;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }

  .calendario {
    grid-area: calendario;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
