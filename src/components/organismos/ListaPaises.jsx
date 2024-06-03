import styled from "styled-components";
import {
  v,
  InputBuscadorLista,
  ConvertirCapitalize,
  Device,
  BtnCerrar,
} from "../../index";
import iso from "iso-country-currency";
import { useState } from "react";

export function ListaPaises({ setSelect, setState }) {
  const [dataresult, setDataResult] = useState([]);

  const isoCodigos = iso.getAllISOCodes();

  function seleccionar(p) {
    setSelect(p);
    setState();
  }

  function buscar(e) {
    let filtrado = isoCodigos.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });
    setDataResult(filtrado);
  }

  return (
    <Container>
      <section className="titulo">
        <span>Busca tu país</span>

        <BtnCerrar funcion={setState} />
      </section>
      <InputBuscadorLista onChange={buscar} placeholder="Buscar..." />
      {dataresult.length > 0 &&
        dataresult.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.countryName}</span>
              <span>{item.symbol}</span>
            </ItemContainer>
          );
        })}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.body};
  }
`;

const ItemContainer = styled.section`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;
