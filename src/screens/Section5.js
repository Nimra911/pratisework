import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import feature1 from ".././assets/feature-1.png";
import feature2 from ".././assets/feature-2.png";
import feature3 from ".././assets/feature-3.png";
import feature4 from ".././assets/feature-4.png";
import feature5 from ".././assets/feature-5.png";
import feature6 from ".././assets/feature-6.png";



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",

    },
    logo4:
    {
        width: "120px",
        height: "135px",
    },
    logo1:
    {
        width: "175px",
        height: "150px",

    },
    logo2:
    {
        width: "165px",
        height: "140px",

    },
    logo3:
    {
        width: "90px",
        height: "140px",

    },
    logo5:
    {
        width: "155px",
        height: "140px",

    },
    logo6:
    {
        width: "165px",
        height: "165px",

    },
    content: {
        color: "#ffff ",
        fontFamily: "Poppins-SemiBold",
        fontWeight:"600",
        textAlign: "left",
        fontSize: "15px ",
    },
    imageContainer:
    {
        display: "flex",
        width: "100%",
        flexDirection: "column",
         top:"-30%",
        height:"185px",
        alignItems:"center",
        justifyContent: "space-between",
        position:"absolute",
    },
    imageContainer1:
    {
        display: "flex",
        width: "100%",
        flexDirection: "column",
         top:"-38%",
        height:"185px",
        alignItems:"center",
        justifyContent: "space-between",
        position:"absolute",
    },
    marginHandler:{
        display:"flex",
        justifyContent:"center",
        width:"90%",
        alignItems:"center",
        minHeight:"280px",
        margin:"0 auto",
    },
    wrapperHandler:
    {
        display: 'flex',
        width: "100%",
        justifyContent:"space-between",
        minHeight:"250px",
        alignItems:"center",
        '& > :not(style)': {
            width: "100%",
            maxWidth: 270,
            height: 180,
            position:"relative",
            [theme.breakpoints.down('900')]:{
              margin:"40px",
                
            }
          
    },
    [theme.breakpoints.down('900')]:{
        flexWrap: "wrap",
        justifyContent:"center",
        
    }
}
}));


const Section5 = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box className={classes.marginHandler}>
                <Box
                   className={classes.wrapperHandler}

                > 
                    <Box sx={{background: "radial-gradient(100% 100% at 50% 0%, rgba(143, 46, 15, 0.65) 0%, rgba(7, 7, 28, 0.1) 100%)"}}>

                        <Box className={classes.imageContainer}>
                        <Box>
                            <img src={feature1} alt="logo" className={classes.logo1} />
                        </Box>
                        <Box className={classes.content}>
                            Leverage up to 55x
                        </Box>
                        </Box>
                    </Box>
                    <Box sx={{background: "radial-gradient(100% 100% at 50% 0%, #720591 0%, rgba(10, 7, 35, 0) 100%)"}}>
                        <Box className={classes.imageContainer}>
                        <Box>
                            <img src={feature2} alt="logo" className={classes.logo2} />
                        </Box>
                        <Box className={classes.content}>
                        Low-risk liquidity pools
                        </Box>
                        </Box>
                    </Box>
                    <Box sx={{background: "radial-gradient(88.12% 88.12% at 50% 0%, #7B8BAD 0%, rgba(10, 7, 35, 0.02) 100%)"}}>
                        <Box className={classes.imageContainer}>
                        <Box>
                            <img src={feature3} alt="logo" className={classes.logo3} />
                        </Box>
                        <Box className={classes.content}>
                        Super cheap transactions
                        </Box>
                        </Box>
                    </Box>
                    </Box>
                    </Box>
                    <Box className={classes.marginHandler}>
                    <Box 
                   className={classes.wrapperHandler}

                > 

                    <Box sx={{
background:" radial-gradient(85.06% 85.06% at 50% 14.94%, #2B4D8C 0%, rgba(23, 4, 69, 0.07) 100%)"}}>
                        <Box className={classes.imageContainer}>
                        <Box>
                            <img src={feature4} alt="logo" className={classes.logo4} />
                        </Box>
                        <Box className={classes.content}>
                        Utilizes the most liquid AMMS
                        </Box>
                        </Box>
                    </Box>
                    <Box sx={{ background: "radial-gradient(102.87% 102.87% at 48.8% 9.39%, #5F1349 0%, rgba(18, 5, 57, 0) 100%)"}}>
                        <Box className={classes.imageContainer}>
                        <Box>
                            <img src={feature5} alt="logo" className={classes.logo5} />
                        </Box>
                        <Box className={classes.content}>
                        Permissionless trading
                        </Box>
                        </Box>
                    </Box>
                    <Box sx={{background: "radial-gradient(100% 100% at 50% 0%, rgba(6, 153, 126, 0.83) 0%, rgba(22, 6, 64, 0) 100%)"
}}>
                        <Box className={classes.imageContainer1}>
                        <Box>
                            <img src={feature6} alt="logo" className={classes.logo6} />
                        </Box>
                        <Box className={classes.content}>
                        Fully composable
                        </Box>
                        </Box>
                    </Box>
                  </Box>
                  </Box>
                  
            </Container>
        </div>

    );

}
export default Section5;