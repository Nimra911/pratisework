import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/styles";
import Container from '@mui/material/Container';
import Logo from ".././assets/logo.png";
import styled from "@emotion/styled";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
        height: "100%",
        // backgroundColor: "#17151C",
        // "& .MuiContainer-root": {
        //     padding: " 0 5px"
        // },
    },
    mainWrapper: {
        width: "100%",
        maxWidth: "200px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexGrow: 1,
        display: "flex" ,
        [theme.breakpoints.down("600")]: {
            maxWidth: "110px"
        }
    },
    buttonControl: {

        justifyContent: "space-between",
        maxWidth: "160px",
        width: "100%",
        display: "flex",
        [theme.breakpoints.down("600")]: {
            maxWidth: "150px"
        }

    },
    items:
    {
        color:"#04D6BD ! important",
    },
    logo:
    {
        width: "25px",
        height: "25px",
        objectFit: "contain",
     
    }
    ,
    toolbar:{
        justifyContent: "space-between",
         padding: 0 
    }
}));

const ButtonItems = styled(Button)({
    fontFamily: "Poppins-Medium",
        fontWeight: "500",
        color:"#fff",
        textTransform:"capitalize",
        fontSize:"14px",
        padding:"0",
        margin:"0 8px",
        minWidth:"72px",
      
  });
  const HeaderTypo = styled(Typography)({
        fontFamily: "Poppins-Bold",
        textTransform:"capitalize",
        fontWeight: "700", 
        color:"#ffff",
  });

export default function DrawerAppBar() {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    return (
        <div className={classes.root}>
            <Container>
                <Toolbar style={{ justifyContent: "space-between", padding: 0, width:"90%",margin:"0 auto"}}>
                    <Box className={classes.mainWrapper}>
                        <Box className={classes.imageContainer} >
                            <img src={Logo} alt="logo" className={classes.logo} />
                        </Box>
                        < HeaderTypo
                         
                            sx={{ marginLeft: { xs: '8px', sm: '20px' }, fontSize: { xs: '13px', sm: '20px' }}}
                        >
                            Bluerit.
                        </ HeaderTypo>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <ButtonItems className={classes.items} > Home </ButtonItems>
                        <ButtonItems >Marketplace </ButtonItems>
                        <ButtonItems > Stats</ButtonItems>
                        <ButtonItems > Resource</ButtonItems>
                        <ButtonItems >Create </ButtonItems>
                    </Box>

                    <Box className={classes.buttonControl}>
                        <ButtonItems>Sign Up</ButtonItems>
                        <ButtonItems >Log in</ButtonItems>
                    </Box>
                </Toolbar>
            </Container>
        </div>
    );
}
