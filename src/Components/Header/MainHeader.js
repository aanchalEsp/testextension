import React, { useEffect, useState } from 'react';
import { Container, Grid,Typography} from '@mui/material';
import SideHeader from './SideHeader';
import logo from '../images/logo.png'
// import config from '../config/config';
import {Link} from 'react-router-dom'

const MainHeader = (props) => {
    
    const siderBarFun = (id)=>{
        props.callMainHeader(id)
    }
    return (
        <>
              <Grid container item   className={"header"} sx={{
                        backgroundColor: '#040c12'
                    }}>
                    <Grid item md={8} display={"flex"} >
                   <img src={logo} />
                        <Typography variant="h4" component="h3" >
                            Little Lambo
                        </Typography>
                    </Grid>
                    <Grid item md={4} mt={1}>
                        <SideHeader  sideBarFunCall={siderBarFun}/>
                    </Grid>
                </Grid>
                </>
    )
}
export default MainHeader;