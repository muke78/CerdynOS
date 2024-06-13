import styled from "styled-components";
import {
  UserAuth,
  BtnCircular,
  v,
  ListaMenuDesplegable,
  DesplegableUser,
  useAuthStore,
} from "../../index";
import Swal from "sweetalert2";

export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signout } = useAuthStore();

  const funcionXtipo = (p) => {
    if (p.tipo === "cerrarsesion") {
      Swal.fire({
        title: "¿Estás seguro(a) de cerrar la sesion?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si cerrar la sesion",
        cancelButtonText: "No, quedarme",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await signout();
        }
      });
    }
  };

  return (
    <Container onClick={stateConfig.setState}>
      <div className="imgContainer">
        <img src={user.picture} alt="Perfil google" />
      </div>

      <BtnCircular
      // icono={<v.iconocorona />}
      />
      <img className="corona" src={v.imagencorona} alt="Corona" />
      <span className="nombre">{user.name}</span>
      {stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="62px"
          funcion={(p) => funcionXtipo(p)}
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .corona {
    position: absolute;
    width: 25px;
    height: 25px;
    transform: translateX(-54px) translateY(-12px);
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
