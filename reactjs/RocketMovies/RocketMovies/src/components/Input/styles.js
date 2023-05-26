import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 10px;
    margin: 30px 0;

    > input {
        height: 56px;
        width: 100%;
        font-size: 14px;

        padding: 19px 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;


        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        
    }

    > svg {
        margin-left: 16px;
    }
;
`