import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 222px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    border-radius: 10px;

    padding: 32px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 8px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        
    }

    > h2 {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        height: 52px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        overflow: hidden;
        text-align: justify;
        margin-top: 8px;

    }

`