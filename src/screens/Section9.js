
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { borderBottom } from "@mui/system";
import Bg1 from ".././assets/bg1.png";
import Bg2 from ".././assets/bg2.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },
    mainContainer:
    {
        width: "100%",
        minHeight: "330px",
        background: " #0D0729",
        // background: "red",
        boxShadow: "0px 0px 30px 0px #0000001A",
        borderRadius: "68px",
      
       

    },
    mainHeading:
    {
        color: "#ffff ",
        fontFamily: "Poppins-medium",
        fontWeight: "500",
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
        maxWidth: "595px",
        fontSize:"18px",
    },
    items:
    {
        fontFamily: "Poppins-SemiBold ! important",
        fontSize: "15px",
        fontWeight: "600 ! important",
        textTransform: "capitalize ! important",
        textAlign: "center",
        minWidth: "159px ! important",
        marginLeft:"40px ! important",
        marginTop:"15px ! important",
        color:"#000 ! important",
        borderRadius:"0px ! important",
        [theme.breakpoints.down("600")]: {
            marginLeft:"0px ! important",
        },

        "& .MuiTouchRipple-root":
        {
           borderRadius:"unset",
        },

  
},

    textField: {
        width: "100%",
        maxWidth: "394px",
        boxShadow: "unset",
        borderRadius: "unset",
        "& .MuiInputBase-input": {
            fontFamily: "Poppins-Regular",
            fontWeight:"400",
            color: "#968E8E8F",
            fontSize:"12px",
            textAlign:"left",
        },
        "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:before": {
            borderBottom: "1px solid #968E8E"
        },
        "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after ": {
            borderBottom:" 1px solid #968E8E",
        },

    },
formContainer:
{
    display:" flex",
    width: "100%",
    justifyCcontent: "center",
    maxWidth:"595px",
    justifyContent:"center",
    flexWrap:"wrap",
  
},
bg1:
{
position:"absolute",
width:"100%",
maxWidth:"335px",
height:"380px",
left:"0",
},
bg2:{
    position:"absolute",
    width:"100%",
    maxWidth:"150px",
    height:"170px",
    right:"0",
    bottom:"15%"

},
wrapper:
{
    justifyContent: "center",
     alignItems: "center", 
     position:"relative",
     margin:"0 auto",
     width:"100%",
     maxWidth:"820px",
     minHeight:"400px",
     display:"flex",
}

}));

const Section9 = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
       
        <Container>
            <Box className={classes.wrapper}>
                <Box className={classes.mainContainer}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            minHeight: "325px",
                            width: "100%",
                          
                          

                        }}
                    >
                        <img src={Bg1}  alt="bg" className={classes.bg1}/>
                        <img src={Bg2}  alt="bg" className={classes.bg2}/>
                        <Box
                            className={classes.mainHeading}
                        >
                            Subscribe to our server
                        </Box>
                        <Box
                            className={classes.subHeading}
                        >
                            We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail

                        </Box>
                        <Box className={classes.formContainer}>
                            <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            className={classes.textField}
                            variant="filled"
                            size="small"
                            placeholder="Your email here"
                        />
                        <Button className={classes.items} sx={{
                             background: "#04D6BD",

                        }}>Explore</Button></Box>
                    </Box>
                </Box>
            
            </Box>
         
        </Container>
   
    </div>);


}
export default Section9;