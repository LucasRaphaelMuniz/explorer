import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  /* Estilizando o polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.LRED};
    border-radius: 8px;

  }
`;

