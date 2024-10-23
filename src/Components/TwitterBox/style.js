import styled from "styled-components";

/* Contenedor del TwitterBox */
export const TwitterBox = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #2f3336;
  background-color: #000000;
  color: #ffffff;
`;

/* Estilo del avatar */
export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

/* Div contenedor de inputs */
export const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between; /* Asegura que los elementos se distribuyan correctamente */

  .columbus {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
    
    > input {
      margin-top: 8px;
      width: 100%;
      border: none;
      outline: 0;
      font-size: 18px;
      line-height: 24px;
      background: transparent;
      color: #ffffff;
      
      &::placeholder {
        color: #8899a6;
      }
    }
  }

  > button {
    background-color: var(--twittercolor);
    border: none;
    color: white;
    font-weight: 600;
    width: 80px;
    height: 32px;
    border-radius: 30px;
    text-transform: inherit;
    cursor: pointer;

    &:hover {
      background-color: #1a91da;
    }
  }
`;
export const DivBottom = styled.div`
display: flex;
  justify-content: flex-start; /* Los íconos quedan a la izquierda */
  align-items: center;
  margin-top: 10px;
  width: 100%; /* Ocupar todo el ancho disponible */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding:10px;

   button {
    background-color: var(--twittercolor);
    border: none;
    color: white;
    font-weight: 700;
    padding: 7px 20px;
    border-radius: 25px;
    cursor: pointer;
    margin-left: auto; /* Asegura que el botón esté al final del flex container */
    
    &:hover {
      background-color: #1a91da;
    }
  }
`;
/* Contenedor de los íconos y el botón */
export const DivIcon = styled.div`
  display: flex;
  justify-content: flex-start; /* Los íconos quedan a la izquierda */
  align-items: center;
  margin-top: 10px;
  width: 100%; /* Ocupar todo el ancho disponible */
 

  > .MuiSvgIcon-root {
    fill: var(--twittercolor);
    cursor: pointer;
    font-size: 22px;
    margin-right: 10px; /* Espacio entre íconos */

    &:hover {
      opacity: 0.7;
    }
  }
`;

/* Formulario */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/* Div para el botón */

