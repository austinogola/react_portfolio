import {Box} from "@chakra-ui/react"
import './HomePage.css'

const HomePage=()=>{
    return(
        <section id="home">

            <Box>
                <h1>HELLO, I'M AUSTIN OGOLA</h1>
                <p>Web Developer & Devops Engineer</p>
                <a href="#work"><button>Checkout My Work</button></a>
            </Box>

        </section>
    )
}

export default HomePage;