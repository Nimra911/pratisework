
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Aero from ".././assets/aero.png";
import Pie from ".././assets/pie-chart.png";
import comboChart from ".././assets/combo-chart.png";
import Eye from ".././assets/eye.png";
import Career from ".././assets/careers.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",

    },
    slider: {
        width: "100%",
        maxWidth: "550px",
        height: 400,
        paddingTop: "10px",
        marginLeft:"-62px",
        [theme.breakpoints.down('900')]:{

           
            marginLeft:"0px",
     
             },
             [theme.breakpoints.down('600')]:{

                paddingTop: "90px",
                height: 300,
         
                 }

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
        fontFamily: "Poppins ",
        fontWeight: "400",
        textAlign: "left",
        width: "100%",
        maxWidth: "493px",
        fontSize: "14px",
    },
    content:
    {
        fontSize: "12px",
        fontFamily: "Poppins-Regular",
        fontWeight:"400",
        textAlign: "left",
        display: "flex",
        width: "100%",
        maxWidth: "380px",
        color: "#968E8E",

    },
    logo:
    {

        maxWidth: "20px",
        height: "20px",
     

    },
    boxContaier:
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    marginHandler:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        minHeight:"590px",
        margin:"0 auto",
    },
    wrapControl:
    {
        display: 'flex',
        width: "100%",
        justifyContent:'space-between',
        
       
        '& > :not(style)': {
            width: "100%",
            maxWidth: 410,
            height: 400,
            // m: 4
        },
        [theme.breakpoints.down('900')]:{
            flexWrap: "wrap",
            justifyContent:'center',
        }
    }

}));


const Section4 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Box className={classes.marginHandler}>
                <Box
                    className={classes.wrapControl}

                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            height: "340px",
                            width: "100%",

                        }}
                    >
                        <Box
                            className={classes.mainHeading}
                        >
                            Take full advantage of everything Arbitrum and Avalanche have to offer.                            </Box>


                        <Box sx={{
                            display: 'flex',
                            justifyContent: "space-between",
                            flexDirection: "column",
                            width: "100%",
                            alignItems: "flex-start",
                            height: "130px",

                        }}>

                            <Box className={classes.boxContaier}>
                                <Box><img src={comboChart} alt="slider" className={classes.logo} /></Box>
                                <Box className={classes.content}>Say goodbye to eye-watering gas fees
                                </Box>
                            </Box>
                            <Box className={classes.boxContaier}>
                                <Box><img src={Eye} alt="slider" className={classes.logo} /></Box>
                                <Box className={classes.content}>Execute your trades instantly
                                </Box>
                            </Box>
                            <Box className={classes.boxContaier}>
                                <Box><img src={Aero} alt="slider" className={classes.logo} /></Box>
                                <Box className={classes.content}>Trade from any device</Box>
                            </Box>
                            <Box className={classes.boxContaier}>
                                <Box><img src={Pie} alt="slider" className={classes.logo} /></Box>
                                <Box className={classes.content}>Gain leveraged exposure on unique token pairs

                                </Box>
                            </Box>
                        </Box>


                    </Box>
                    <Box ><img src={Career} alt="slider" className={classes.slider} /></Box>

                </Box>
                </Box>
              

            </Container>
        </div>
    )
}
export default Section4;
