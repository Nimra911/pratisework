import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Bg from ".././assets/bg.png";
import Button from '@mui/material/Button';
import section1Color from ".././assets/section1Color.png";
import styled from "@emotion/styled";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },
   color: {
position:"absolute",
maxWidth:"640px",
width:"100%",
height:"352px",
top:"20%",
opacity:".5",
overflow:"hidden",

    },
    mainHeading:
    {
        color: "#ffff",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        textAlign: "Left",
        fontSize: "62px",
        width: "100%",
        maxWidth: "560px",
        [theme.breakpoints.down("600")]: {
            fontSize: "38px",
            maxWidth: "400px"
        }
    },
    subHeading:
    {
        color: "#ffff ",
        fontFamily: "Poppins-SemiBold",
        textAlign: "left",
        width: "100%",
        maxWidth: "526px",
        fontSize: "20px",
        fontWeight:"600",
    },
    content:
    {
        fontSize: "17px",
        fontFamily: "Poppins-Bold",
        textAlign: "left",
        display: "flex",
        width: "100%",
        maxWidth: "293px",
        color: "#18C9C1",
        fontWeight:"700",


    },
    image: {
        maxWidth: "685px",
         width:"100%",
        height: "835px",
        position: "absolute",
        right: "-9%",
        top:"-9%",
        [theme.breakpoints.down("600")]: {
            maxWidth: "685px",
            width:"100%",
           height: "700px",
           position: "absolute",
           right: "-8%",
           top:"-19%",
        }

    },
    items:
    {
        fontFamily: "Poppins-SemiBold ! important",
        fontSize: "15px",
        fontWeight: "600 ! important",
        textTransform: "capitalize",
        textAlign:"center",
        minWidth:"120px ! important",
    },
    buttonControl: {

        justifyContent: "space-between",
        maxWidth: "465px",
        width: "100%",
        display: "flex",
        height:"150px",
        alignItems:"flex-end",
        [theme.breakpoints.down("600")]: {
            flexWrap: "wrap",
        }

       
    },
    marginHandler:
    {
        width: "100%",
        minHeight: "595px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    wrapperHandler:
    {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: "430px",
        width: "100%",

    },
    container:
    {
        width: "90%",
        position: "relative",
        overflow:"hidden",
        margin:"0 auto",
    }
}));

const ButtonItems = styled(Button)({
        fontFamily: "Poppins-SemiBold",
        fontSize: "20px",
        fontWeight: "600",
        textTransform: "capitalize",
        textAlign:"center",
        minWidth:"200px",
        color: "#ffff",
        borderRadius: "12px",
        height:"55px",
  });

const Section1 = () => {

    const classes = useStyles();
    return (<div className={classes.root}>
        <Container>
            <Box
              className={classes.container}
            >
                   {/* <img src={section1Color} className={classes.color} alt="section1"/> */}
                
                    <Box className={classes.marginHandler}>

                        <Box
                           className={classes.wrapperHandler}
                        >
                            <Box className={classes.content} >BUILT ON WEB3, POWERED BY YOU.</Box>
                            <Box className={classes.mainHeading}>Rock the world with masterpiece</Box>
                            <Box className={classes.subHeading} > Leverage on any tokens with a protocol trusted with billions for its performance and reliability.</Box>
                            <Box  className={classes.buttonControl}>
                                <ButtonItems  sx={{ background: "linear-gradient(94.54deg, #9ADBEC 0%, #9F9ADB 58.45%, #A27BD3 90.51%)",marginRight:{ xs: '0', sm: '90px' }}}>Explore</ButtonItems>
                                <ButtonItems  sx={{ border: "2px solid #B529DD "}}>Create</ButtonItems>
                            </Box>


                        </Box>


                    </Box>
                <img src={Bg} className={classes.image} alt="no data" />
            </Box>
        </Container>
    </div>);



}
export default Section1;