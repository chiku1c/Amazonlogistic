import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
   app:{
    backgroundColor:"#15303B",
    height:"80px",
    width:"80%",
    marginLeft:"9%",
   },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    tools:{
        fontFamily:"cursive",
        fontSize:"40px",
    },
    start:{
        backgroundColor:"#4297B8"
    }
  }));



export default function Navbar() {
    
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.app}>
                <div className={classes.tools}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Amazon Logo
          </Typography>
          <Button color="inherit" variant="outlined" className={classes.start}>Start Now</Button>
          <Button color="inherit" >Sign In</Button>
          <Button color="inherit" >resources</Button>
          
          <Button color="inherit" >Faq</Button>
          <Button color="inherit" >getting-started</Button>
          <Button color="inherit" >opportunity</Button>
          <Button color="inherit" >home</Button>
         
        </Toolbar>
        </div>
      </AppBar>
        </div>
    )
}
