import {   Container, Typography, } from '@material-ui/core';
// import { makeStyles } from "@material-ui/styles";
import './App.css';
import Navbar from './componets/Navbar';
import Note from './componets/Note';
import Helpcard from './componets/Helphcard';
import Footer from './componets/Footer';
function App() {
  

  return (
    <div className="main" >
      <Container>
        <Typography >
     <Navbar/>
     <Note/>
     <Helpcard/>
     <Footer/>
     </Typography>
     </Container>
     
    </div>
  );
}

export default App;
