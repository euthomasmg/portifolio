import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../assets/components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../assets/components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { //tema PC
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { //tema Mobile
            paddingTop: "0"
        }
    }));

    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position = "relative">
                            <Box position = "absolute" width = {"150%"}  height = {"150%"} top = {-100} right = {-20}  >
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                            <Box position = "relative" textAlign = "center">
                                <StyledImage src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h3" textAlign="center" pb = {2}>
                        Thomas Mayer Garcez
                        </Typography>
                        <Typography color="primary.contrastText" variant="h4" textAlign="center">
                        &lt;/Software Developer&gt;
                        </Typography>
                        <Grid container display="flex" justifyContent="center" spacing = {3}  pt = {3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick = {() => console.log("download") }>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick = {() => console.log("contact-me") }>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contact-me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs = {12}>
                            <StyledButton onClick = {() => console.log("contact-me") }>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contact-me
                                    </Typography>
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
