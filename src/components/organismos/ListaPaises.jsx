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
      <header className="header">
        <span className="barra">Busca tu pais</span>
        <BtnCerrar funcion={setState} />
      </header>
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
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
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
    background-color: #303030;
  }
`;
