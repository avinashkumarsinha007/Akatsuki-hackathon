import React, { useState } from 'react'
import {ContainerOne, ContainerThree, ContainerTwo, NavContainer,H4, ContainerFour } from './NavbarStyle'
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import Fade from 'react-reveal/Fade';  
import styles from './navbar.module.css'
import {Link} from 'react-router-dom'
export const Navbar= ({them,handleToggle}) => {
    const [toggle,setToggle] = useState(false)
    const [navbar,setNavbar] = useState(false)
    const handleChange = () =>{
        setToggle(pre => !pre)
    }
   
    const changeBack = () => {
        if(window.scrollY >= 115)
        {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBack)

         return(
        <>
         <NavContainer className={navbar ? styles.active : styles.nav}>
            <ContainerOne>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}><h2>Akatsuki</h2></Link>
            </ContainerOne>
            <ContainerTwo>
              <Link to="#" style={{textDecoration:"none",color:"inherit"}}><h4>About</h4></Link>
              <Link  to="#" style={{textDecoration:"none",color:"inherit"}}><h4>Our Impact</h4> </Link>
              <Link  to="#" style={{textDecoration:"none",color:"inherit"}}><h4>SignIn</h4></Link>
              <Link  to="#" style={{textDecoration:"none",color:"inherit"}}><h4>ContactUs</h4></Link>
            </ContainerTwo>
            <ContainerThree> 
              <Button disableRipple onClick={handleChange}>{toggle ? <CloseIcon/> : <DehazeIcon/>}</Button>
            </ContainerThree>
         </NavContainer>
         <ContainerFour className = { toggle ? "show" : "hide"}>
            <Fade top><Link  to="#" style={{textDecoration:"none",color:"inherit"}}> <H4 onClick={()=>setToggle(pre => !pre)}>About</H4></Link> </Fade>
            <Fade top><Link  to="#" style={{textDecoration:"none",color:"inherit"}}> <H4  onClick={()=>setToggle(pre => !pre)}>Our Impact</H4></Link></Fade>
            <Fade top><Link  to="#" style={{textDecoration:"none",color:"inherit"}}> <H4 onClick={()=>setToggle(pre => !pre)}>SignIn</H4></Link></Fade>
            <Fade top ><Link  to="#" style={{textDecoration:"none",color:"inherit"}}> <H4 onClick={()=>setToggle(pre => !pre)}>Contactus</H4></Link></Fade>
         </ContainerFour>
        </>
    )
}