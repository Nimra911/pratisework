import Header from "./layout/Header"
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import Section3 from "./screens/Section3";
import Section6 from "./screens/Section6";
import Section2 from "./screens/Section2";
import Section7 from "./screens/Section7";
import Section4 from "./screens/Section4";
import Section8 from "./screens/Section8";
import Section9 from "./screens/Section9";
import Section5 from "./screens/Section5";
import Section1 from "./screens/Section1";
import Section10 from "./screens/Section10";
import { makeStyles } from "@material-ui/styles";
import crypto from "../src/assets/crypto.png";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  // root: {
  //     width: "100%",
  //     margin: "auto",
  //     height: "100%",
  //     // backgroundColor: "#17151C",
  //     backgroundImage:""
  //     backgroundColor: "radial-gradient(60.67% 61.22% at 54.53% 42.49%, #1A0351 0%, #07071C 95.31%)" ,
  //     // "& .MuiContainer-root": {
  //     //     padding: " 0 5px"
  //     // },
   
   
  //   display: "flex",
  //   flexDirection: "column",
  //   // flexGrow: 1,
  
  // },



   root: {
    backgroundImage: `url(${crypto})`,
    backgroundRepeat: "no-repeat",
   
    display: "flex",
    flexDirection: "column",
    
    margin: "auto",
    width:"100%",
    flexGrow:"1",
    height: "100%",
    backgroundSize: "cover",
    // backgroundColor:"background-color: #80808078;",
    
  
  }
}));







function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <ThemeProvider theme={theme}>
 <Header/>
 <Section1/>
 <Section2/>
 <Section3/>
 <Section5/>
 <Section4/>
 <Section6/>
 <Section7/>
 <Section8/>
 <Section9/>
 <Section10/>
 </ThemeProvider>
 </div>
   
  );
}

export default App;
