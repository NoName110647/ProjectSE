"use client"; 
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    border: 0;
    padding: 10px 20px;
    border-radius: 5px; 
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    ${(props) => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;    
    `}
    ${(props) => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;  
        border: 2px solid #fff; 
    `}
    ${(props) => props.primary && css`
        background-color: rgb(235, 153, 77);
        color: rgb(255, 255, 255);
        border: 2px solid transparent;
    `}

    /* ปรับขนาดปุ่มตามขนาดที่กำหนด */
    ${(props) => props.size === "s" && css`
        font-size: 0.85rem;
        padding: 8px 16px;
    `}
    ${(props) => props.size === "m" && css`
        font-size: 1rem;
        padding: 10px 20px;
    `}
    ${(props) => props.size === "l" && css`
        font-size: 1.2rem;
        padding: 12px 24px;
    `}

    svg {
        height: 20px;
        margin-right: 8px;
    }

    &:hover {
        opacity: 0.85;
        transform: scale(1.05);
    }
`;

export default function Button({ children, size = "m", ...rest }) {
    return <StyledButton size={size} {...rest}>{children}</StyledButton>;
}
