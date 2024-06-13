import styled from "styled-components";
import { Btnsave, Carousel, v } from "../../index";

export function HomeTemplate() {
  return (
    <Main>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Title>
          Bienvenido a Cerdyn <br /> 🐷
        </Title>
        <SubText>
          Cerdyn nace por las pocas aplicaciones gratis que existen para
          controlar gastos e ingresos.
          <br />
          ❤️Está surgiendo como curso para lograr presupuestarlo,
          <br /> MUCHAS GRACIAS POR APOYAR ESTE PROYECTO
        </SubText>
        <ContainerAutor>
          <div className="contentImg">
            <img src="https://i.ibb.co/TgXnVFS/PXL-20240319-183757191-MV.jpg" alt="Persona que desarrollo la pagina"/>
          </div>
          <div className="contentDescripcion">
            <b>Ing. Erick Miguel Gonzalez Rivera</b>
            <span>
              "Ten mucha paciencia contigo mismo y no te compares demasiado con
              los demás"
            </span>
          </div>
        </ContainerAutor>
        <ButtonContainer>
          <Btnsave
            url="https://github.com/muke78"
            titulo="Repositorios y mas"
            bgcolor="#313131"
            icono={<v.iconogihub />}
          />
          <Btnsave
            url="https://www.linkedin.com/in/erick-miguel-gonz%C3%A1lez-rivera-96265b248/"
            titulo="Linkedin"
            bgcolor="#004182"
            icono={<v.iconoLinkedin />}
          />
        </ButtonContainer>
      </Container>
    </Main>
  );
}
const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #8e8c86;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const ContainerAutor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .contentImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .contentDescripcion {
    display: flex;
    flex-direction: column;
    b {
      color: ${(props) => props.theme.text};
    }
    span {
      color: #8c8c8c;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 20px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;
