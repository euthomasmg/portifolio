import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StyledButton from "../../../assets/components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../assets/components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
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

    const StyledImage = styled("img")(({ theme }) => ({
        width: "70%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} height={"150%"} top={-100} right={-20}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImage src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs = {12} md = {7}>
                        <Typography color = "primary.contrastText" variant = "h1" textAlign = "center" pb = {2} >
                            Thomas Mayer Garcez
                        </Typography>
                        <Typography color = "primary.contrastText" variant = "h4" textAlign = "center">
                            &lt;/Software Developer&gt;
                        </Typography>
                        <Grid container display = "flex" justifyContent = "center" spacing = {3} pt={3}>
                            <Grid item xs = {12} md = {1} display = "flex" justifyContent = "center">
                                <StyledButton onClick = {() => console.log("GitHub")}>
                                    <GitHubIcon sx = {{ fontSize: 50 }} />
                                </StyledButton>
                            </Grid>
                            <Grid item xs = {12} md = {1} display = "flex"justifyContent = "center">
                                <StyledButton onClick = {() => console.log("LinkedIn")}>
                                    <LinkedInIcon sx = {{ fontSize: 50 }} />
                                </StyledButton>
                            </Grid>
                            <Grid item xs = {12} md = {1} display = "flex" justifyContent = "center">
                                <StyledButton onClick={() => console.log("Email")}>
                                    <MailOutlineIcon sx={{ fontSize: 50 }} />
                                </StyledButton>
                            </Grid>
                            <Grid item xs = {12} md = {1} display = "flex" justifyContent = "center">
                                <StyledButton onClick = {() => console.log("WhatsApp")}>
                                    <WhatsAppIcon sx = {{ fontSize: 50 }} />
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
