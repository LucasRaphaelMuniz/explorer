import { RiShutDownLine } from 'react-icons/ri'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;

    padding: 10px 80px;


    h1 {
        padding: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700}

    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    width: 198px;
    margin-left: 30px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;
        white-space: nowrap;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    flex-direction: row-reverse
`