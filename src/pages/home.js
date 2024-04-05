import {Box} from "@chakra-ui/react"

import Navbar from "../components/Navbar";
import HomePage from "../components/Homepage";
import AboutPage from "../components/AboutPage";
import ProjectsPage from "../components/ProjectsPage";
import ContactPage from "../components/ContactPage";


const Home=()=>{
    return(
        <Box>
            <Navbar/>
            <HomePage/>
            <AboutPage/>
            <ProjectsPage/>
            <ContactPage/>
        </Box>
    )
}


export default Home;