
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },
    marginWrapper:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"240px"
    },
    mainContainer:{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        minHeight: "230px",
        width: "100%",
margin:"0 0 50px 0"
        
    }
}));




  const HeaderTypo = styled(Typography)({
    color: "#ffff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    fontSize:"45px",
});
const SubTypo = styled(Typography)({
    color: "#ffff ",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    width:"100%",
    maxWidth:"626px",
    fontSize:"20px",
});

const Section3 = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
            
                <Box className={classes.marginWrapper}>
                    <Box
                     className={classes.mainContainer}
                    >
                        <HeaderTypo
                        >
                            Trusted and Secure Bitcoin
                        </HeaderTypo>
                        <SubTypo
                            className={classes.subHeading}
                        >
                            Built on Arbitrum and Avalanche, our decentralized leverage trading exchange focuses on being the best execution environment for trades.
                        </SubTypo>
                    </Box>
                    </Box>
             

            </Container>
        </div>
    );

}
export default Section3;