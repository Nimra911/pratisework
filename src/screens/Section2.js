
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },

    wrapper:
    {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight:"360px",
        flexDirection:"column",
    },
    mainHeading:
    {
        color: "#CD2FF2",
        fontFamily: "Poppins-Bold",
        fontWeight: "700",
        textAlign: "center",
        fontSize: "18px",
    },
    subHeading:
    {
        color: "#1ABDB9",
        fontFamily: "Poppins-Bold",
        fontWeight: "700",
        textAlign: "center",
        fontSize: "18px",
    },
subText:
{
    color: "#fff",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center",
        fontSize: "40px",
        maxWidth:"300px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"50px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "30px",
          },
},
mainContainer:
{
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "180.5px",
    background: "#16063B",
    flexDirection: "column",
    justifyContent:"space-evenly",
     position:"absolute",
     bottom:0
},
main:
{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
}
}));

const Section2 = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box className={classes.wrapper}><Box
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        minHeight: "200px",
                        width: "100%",
                        maxWidth: "1000px",
                        margin:"50px 0",
                        '& > :not(style)': {
                            position:"relative",
                            width: 400,
                            minHeight: 185,
                            m: 1
                        }

                    }}
                >
                    <Box className={classes.main} sx={{background: "linear-gradient(90deg, #04D6BD 8.85%, #8A01D7 99.76%)"}}>
                        <Box className={classes.mainContainer}>
                        <Box
                            className={classes.mainHeading}
                        >
                            All time trade volume for this
                        </Box>
                        <Box
                           
                            className={classes.subText}
                        >
                            $567894555.00
                        </Box>
                        </Box>
                   
                    </Box>
                    <Box className={classes.main} sx={{background: "linear-gradient(90deg, #F139EA 8.85%, #FA4E53 99.76%)"
}}>
                    <Box className={classes.mainContainer}>   
                        <Box
                        variant="h6"
                        className={classes.subHeading}
                    >
                        Total Trades
                    </Box>
                        <Box
                            className={classes.subText}
                        >
                            15,670
                        </Box></Box></Box>
                </Box></Box>


            </Container></div>
    );
}
export default Section2;