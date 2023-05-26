import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    .tags {
        border-radius: 8px;
        padding: 16px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
`
export const Form = styled.form`
    max-width: 1137px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: flex-start;
        flex-direction: column
    }

    > div {
        display: flex;
        
        :nth-child(1){
            margin-right: 30px;
        }

    }

    .buttonExcluir {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        width: 100%;
        color: ${({ theme }) => theme.COLORS.LRED};

        height: 56px;
        border: 0;
        padding: 0 16px;
        margin-top: 16px;
        border-radius: 10px;
        font-weight: 500;
    }
`