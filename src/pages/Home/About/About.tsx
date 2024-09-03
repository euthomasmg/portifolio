import { styled } from "@mui/material";


const About = () => {
    const StyledAbout = styled("div")(({theme}) => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("xs")]: { // Mobile
          paddingTop: "100px",
      },
      [theme.breakpoints.up("md")]: { // PC
          paddingTop: "0",
      },
    }));

  return (
    <StyledAbout>
      About
    </StyledAbout>
  );
};

export default About;
