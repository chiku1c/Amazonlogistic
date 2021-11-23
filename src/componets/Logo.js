import {  makeStyles } from '@material-ui/core'
import React from 'react'
import amazon from "./amazon.png"

const useStyle=makeStyles((theme)=>({
    card:{
      background:"#232F3E",
      width:"70%",
      height:"80px",
    },
    container:{
     postion:"fixed"
    },
    div:{
        color:"white"
    }
    
}));


export default function Logo() {
    const classes=useStyle();
    return (
        <div>
        <img 
        src={amazon} alt="amazon" />
        </div>
    )
}
