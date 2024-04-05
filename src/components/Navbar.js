import {Box} from "@chakra-ui/react"
import './Navbar.css'
import { useEffect } from "react"


const Navbar=()=>{

    useEffect(()=>{
        const menuBar=document.querySelector('.menu')
        const dropdownNav=document.querySelector('.dropdownNav')
        menuBar.addEventListener('click',e=>{
            dropdownNav.classList.toggle('visible')
            // console.log(dropdownNav.style.top);
        })
    })
    return(
        <Box>
            <Box className="nav">
                <span id="logo"><a href="/">AUSTIN</a></span>

                <ul>
                <li><a href="#home"><small>01.</small>Home</a> </li>
                <li><a href="#about"><small>02.</small>About</a> </li>
                <li><a href="#work"><small>03.</small>Projects</a> </li>
                <li><a href="#contact"><small>04.</small>Contact</a> </li>
                </ul>

                <div className="menu">
                    <span className="bar 1"></span>
                    <span className="bar 2"></span>
                    <span className="bar 3"></span>
                </div>
                
            </Box>

            <Box className="dropdownNav">
                <ul>
                    <li><a href="#home">Home</a> </li>
                    <li><a href="#about">About</a> </li>
                    <li><a href="#work">Projects</a> </li>
                    <li><a href="#contact">Contact</a> </li>
                </ul>
                
            </Box>
            

        </Box>
        
    )
}


export default Navbar;