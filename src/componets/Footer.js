import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    footer:{
    width:"84%",
   marginRight:"111px",
    alignItems:"center",
    height:"30px",
    color:"white"
    }
}));

function Footer() {
    const classes=useStyles();
    return (
        <div>
            <Container className={classes.footer}>
                <Typography style={{ backgroundColor: '#696969',  height:"30vh" }}>
                © 1996-2021, Amazon.com, Inc. or its affiliates | Site terms | Privacy notice
                </Typography>
            </Container>
        </div>
    )
}

export default Footer
