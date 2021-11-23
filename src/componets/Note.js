import { makeStyles, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    note:{
        backgroundColor:"#4297B8",
        width:"80.08%",
        marginLeft:"110px",
        alignItems:"center",
        height:"30px",
        color:"white"
        
        
    }
}));


function Note() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.note} style={{fontSize:"9px"}}>
            Important Note : Our application process has undergone a revision. If you have already submitted an application prior to 31st May, 2021, we encourage you to re-apply with necessary details. We shall reach out to you as and when new opportunities arise.
            Important Note : Our application process has undergone a revision. If you have already submitted an application prior to 31st May, 2021, we encourage you to re-apply with necessary details. We shall reach out to you as and when new opportunities arise.
            Important Note : Our application process has undergone a revision. If you have already submitted an application prior to 31st May, 2021, we encourage you to re-apply with necessary details. We shall reach out to you as and when new opportunities arise.
            </Typography>
        </div>
    )
}

export default Note
