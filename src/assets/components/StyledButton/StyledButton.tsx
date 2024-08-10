import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    const Button = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",  // Corrigido para inline-flex
        alignItems: "center",     // Corrigido para alignItems
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light // Corrigido para backgroundColor
        }
    }));

    return (
        <Button onClick = {onClick}> 
            {children}    
        </Button>      
    );
}

export default StyledButton;
