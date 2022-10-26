import React from 'react';
import {AiOutlineClose } from "react-icons/ai"
import {StyledButton} from "./styles";

type IconButtonProps = {
    onClick:()=>void
}


const IconButton = ({onClick}:IconButtonProps) => {
    return (
        <StyledButton onClick={onClick} data-testid={"styled-button"}>
            <AiOutlineClose size={24}/>
        </StyledButton>
    );
};

export default IconButton;
