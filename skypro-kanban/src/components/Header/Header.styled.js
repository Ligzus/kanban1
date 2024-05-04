import styled from "styled-components";
import { Button } from "../../lib/Button.styled";

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;


export const Block = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;


export const Nav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;


export const CreateTaskBtn = styled(Button)`
    position: static;
    width: 178px;
    height: 30px;
`;