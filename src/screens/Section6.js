
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },
    mainHeading:
    {
        color: "#ffff ",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        textAlign: "center",
        fontSize:"45px",
    },
    subHeading:
    {
        color: "#ffff ",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        textAlign: "center",
        width: "100%",
        maxWidth: "594px",
        fontSize:"18px",
    }
,
wrapper:
{
    display:"flex", 
    justifyContent:"flex-start",
    alignItems:"center",
    minHeight:"335px",
    width:"100%",
    flexDirection:"column",
}


}));





const Section3 = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
<Box className={classes.wrapper}>

                

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            minHeight: "265px",
                            width: "100%",

                        }}
                    >
                        <Box
                            className={classes.mainHeading}
                        >
                            Built on web3 Owned by you
                        </Box>
                        <Box
                            className={classes.subHeading}
                        >
                            We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers.

                        </Box>
                    </Box>
               
                </Box>
            </Container>
        </div>
    );

}
export default Section3;