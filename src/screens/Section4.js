
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import logoFolder from ".././assets/logofolder.png";
import logoSearch from ".././assets/logosearch.png";
import logoWebkit from ".././assets/logowebkit.png";
import logoBit from ".././assets/logobit.png";
import Slider from ".././assets/slider.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",

    },
    slider: {
        width: "100%",
        maxWidth: "550px",
        height: 310,
        paddingTop:"20px",
      

    },
    mainHeading:
    {
        color: "#ffff",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        textAlign: "Left",
        fontSize: "35px",
    },
    subHeading:
    {
        color: "#ffff ",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "left",
        width: "100%",
        maxWidth: "493px",
        fontSize: "14px",
    },
    content:
    {
        fontSize:"12px",
        fontFamily: "Poppins-Regular",
        fontWeight:"400",
        textAlign: "left",
        display: "flex",
        width: "100%",
        maxWidth: "135px",
        color:"#968E8E",
        
    },
    logo:
    {
        maxWidth:"100%",
        width:"33px",
        height:"33px",
    },
    boxContaier:
    {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
     
    },
    wraperHandler:
    {
        display: 'flex',
        justifyContent: "space-between",
        width: "90%",
        margin:"0 auto",
        '& > :not(style)': {
            width: "100%",
            minHeight: 400,
           
        },
        [theme.breakpoints.down('900')]:{

        flexWrap: "wrap",
        justifyContent: "center",

        }
    },
    boxHandler:
    {
        display: 'flex',
        justifyContent: "space-between",
        width: "100%",
        minHeight:"60px",
        alignItems: "center",
        [theme.breakpoints.down('900')]:{
            flexWrap: "wrap",
            justifyContent: "center",
    
            },
        '& > :not(style)': {

            width: 190,
            height: 50,
            [theme.breakpoints.down('900')]:{
               margin:"10px",
        
                },

        },
    },
    mainContainer:
    {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        minheight: "340px",
        width: "100%",
        maxWidth:"450px",
    }

    
}));


const Section4 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",
        minHeight:"590px"}}>
            <Container>
                <Box
                   className={classes.wraperHandler}

                >
                    <Box sx={{maxWidth:"550px"}}><img src={Slider} alt="slider" className={classes.slider} /></Box>
                        <Box
                        className={classes.mainContainer}
                        >
                            <Box
                                className={classes.mainHeading}
                            >
                                Fully decentralized of Completely secure
                            </Box>
                            <Box
                                className={classes.subHeading}
                            >
                                We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers.
                            </Box>
                            <Box sx={{

                                display: 'flex',
                                flexDirection: "column",
                                minHeight: "120px",
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "flex-start",

                            }}>
                                <Box className={classes.boxHandler}
                            >

                                    <Box className={classes.boxContaier}>
                                        <Box><img src={logoWebkit} alt="slider" className={classes.logo} /></Box>
                                        <Box className={classes.content}>Constant reviews and testing of our platform</Box>
                                    </Box>
                                    <Box className={classes.boxContaier}>
                                        <Box><img src={logoSearch} alt="slider" className={classes.logo} /></Box>
                                        <Box className={classes.content}>Your funds are as secure as possible</Box>
                                    </Box>
                                </Box>
                                <Box className={classes.boxHandler}>

                                    <Box className={classes.boxContaier}>
                                        <Box><img src={logoFolder} alt="slider" className={classes.logo} /></Box>
                                        <Box className={classes.content}>Fully decentralized and non-custodial</Box>
                                    </Box>
                                    <Box className={classes.boxContaier}>
                                        <Box><img src={logoBit} alt="slider" className={classes.logo} /></Box>
                                        <Box className={classes.content}>Built by seasoned crypto veterans</Box>
                                    </Box>
                                </Box></Box>

                        </Box>
                   
                </Box>

            </Container>
            </Box>
        </div>
    )
}
export default Section4;
