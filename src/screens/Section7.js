import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HOD from ".././assets/hod.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
    logo:
    {
        maxWidth:"1200px",
        width:"100%",
        height:"600px",
        [theme.breakpoints.down('600')]:{
            height:"430px",
              
          }
    },
    wrapper:
    {
        width:"100%",
        minHeight:"515px",
        justifyContent:"center",
        alignItems:"center",
      
      
    }
}));

const Section7=()=>
{
    const classes = useStyles();
return(

<div className={classes.root}>
    <Container>
        <Box className={classes.wrapper}>
    <img src={HOD} alt="logo" className={classes.logo} />
    </Box>
    </Container>
</div>



);
}
export default Section7;