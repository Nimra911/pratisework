import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from ".././assets/footer.png";
import Typography from '@mui/material/Typography';
import Link1 from ".././assets/link1.png";
import Link2 from ".././assets/link2.png";
import Link3 from ".././assets/link3.png";
import Link4 from ".././assets/link4.png";
import Link5 from ".././assets/link5.png";
import Link6 from ".././assets/link6.png";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
    },
    logo:
    {
        width: "140px",
        objectFit: "contain",
    },
    mainWrapper: {
     
        width: "200px",
        justifyContent: "center",
        display:"flex",
        alignItems: "center",
        height:"150px",
       
    },
    items:
    {
        
        fontFamily: "Poppins semiBold ! important",
        fontSize: "24px",
        fontWeight: "500",
        textTransform: "capitalize",
    },
    subText:
{
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        textAlign: "center",
        fontSize: "12px",
        color: "#968E8E",
        display:"flex",
        width:"125px",
        justifyContent:"center",
        alignItems:"center",
        // margin:"7px",
        [theme.breakpoints.down('900')]:{
                  margin:"7px",
                 
             }


},
subText1:
{
       
        textAlign: "center",
        display:"flex",
         width:"65px",
        justifyContent:"center",
        alignItems:"center",
        // margin:"3px",
        [theme.breakpoints.down('900')]:{
            margin:"5px",
            width:"85px",
           
       }


},
link:
{
    width:"40px",
    height:"40px",
},
imageContainer:
{
display:"flex",
width:"100%",
// justifyContent:"center",
justifyContent:"space-between",
alignItems:"center",
//flexWrap:"wrap",
minHeight:"100px",
borderTop:"1px solid #968E8E",
borderBottom:"1px solid #968E8E",
[theme.breakpoints.down('900')]:{
    justifyContent:"center",
   flexWrap:"wrap",
         
     }
},
textContainer:
{
display:"flex",
width:"100%",
// justifyContent:"center",
justifyContent:"space-between",
alignItems:"center",
//flexWrap:"wrap",
minHeight:"100px",
[theme.breakpoints.down('900')]:{
 justifyContent:"center",
flexWrap:"wrap",
      
  }
}

}));


    const Section10=()=>
    {

        const classes = useStyles();

        return (
        <div className={classes.root}>
            <Container>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"190px",maxWidth:"820px", margin:"10px auto 50px auto"}}>
            <Box sx={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",width:"100%"}}>
                <Box className={classes.mainWrapper}>
                            <img src={Logo} alt="logo" className={classes.logo} />
                      
                    </Box>

                    <Box className={classes.imageContainer} >
                        
                        <Box className={classes.subText1}><img src={Link1} alt="link" className={classes.link}/></Box>
                        <Box className={classes.subText1}><img src={Link2} alt="link" className={classes.link}/></Box>
                        <Box className={classes.subText1}><img src={Link3} alt="link" className={classes.link}/></Box>
                        <Box className={classes.subText1}><img src={Link4} alt="link" className={classes.link}/></Box>
                        <Box className={classes.subText1}><img src={Link5} alt="link" className={classes.link}/></Box>
                        <Box className={classes.subText1}><img src={Link6} alt="link" className={classes.link}/></Box>
                    </Box>
                    <Box className={classes.textContainer} >
                        
                        <Box className={classes.subText}>Sign in</Box>
                        <Box className={classes.subText}>Terms of Conditions</Box>
                        <Box className={classes.subText}>Community</Box>
                        <Box className={classes.subText}>Careers</Box>
                        <Box className={classes.subText}>Contact</Box>
                    </Box>
                    </Box>
                    </Box>
            </Container>
          
                </div>
                
                );

    };
    export default Section10;