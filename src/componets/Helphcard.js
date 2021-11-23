import { Card, CardMedia, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import car from "./car.jpg"

const useStyles = makeStyles((theme) => ({
    con:{
      width:"84.05%",
      marginLeft:"85px"
    }


}));

function Helpcard() {
    const classes = useStyles();
    return (
        <div>
           <Container className={classes.con}>
        <Typography component="div" style={{ backgroundColor: '#FFFFFF',  height:"100vh" }} />
      </Container>
             
        </div>
    )
}

export default Helpcard
