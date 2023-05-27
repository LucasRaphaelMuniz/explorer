import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
`

export const Content = styled.div`
    grid-area: "content";

    max-width: 1137px;
    margin: 34px auto;

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
    }


    > .user {
        align-items: center;
        margin-bottom: 40px;
        padding: 8px;

        strong {
            margin: 8px;
        }

        .iconClock {
            color: ${({ theme }) => theme.COLORS.LRED}

        }
    }

    > .nameStar {
        display: flex;
        align-items: center;
    

        h1 { 
            font-size: 36px;
            font-weight: 500;
            margin: 24px 16px 24px 0;
        }       

    } 

    > p {
        font-size: 16px;
        margin-top: 40px;
        text-align: justify;
    }

    > button {
        justify-content: left;
    }
`