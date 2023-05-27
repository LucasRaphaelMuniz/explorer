
import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "Menu"
    "content";
`;


export const Content = styled.div`
  grid-area: "content";
  padding: 0 64px;
  overflow: hidden;
`;


export const Menu = styled.div`
    grid-area:"menu";
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 50px 80px 20px;

    > h1 {
        width: 300px;
    }

    > Button {
        width: 200px;
    }



`;
