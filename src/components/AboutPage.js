import {Flex} from "@chakra-ui/react"
import './AboutPage.css'

const AboutPage=()=>{
    return(
        <section id='about'>
            <span class="title_span">ABOUT ME</span>

            <div class="about_me_wrapper">
            <div id="about_me_div">
                <p>Hello there</p>
                <p>
                    My name is Austin Ogola and I am a developer and devops engineer based in Nairobi,Kenya. 
                </p>
               
                <p>
                    I specialize in developing applications that run on the web - from backend development to
                    frontend implementations. I build backend systems to support user and
                    business applications and work with designers to build responsive, pixel 
                    perfect user interfaces
                </p>

                <p>
                    In my years of experience, I have had the privilege of collaborating with many wonderful
                    people to develop successful products encompassing different applications
                   
                </p>

                <p>Feel free to explore <a href="#work">some of my work</a></p>

                {/* <p>
                    As a developer, . I also implement front end designs . I've worked hand in hand
                    with designers to  and digital experiences</p> */}

                
                
                

            </div>

            
        </div>
        <div id='techWorkWith'>
                <Flex justifyContent='center'>
                    
                    <p style={{
                        borderBottom:'1px solid #FF8C00',padding:'5px',
                        width:'fit-content',textAlign:'cenbter',fontSize:'13px'
                        }}>Technologies I Work with</p>

                </Flex>
            <Flex id='techWorkWithWrapper' justifyContent='space-around' alignItems='center'>
                        
                    <Flex w='85%' justifyContent='space-around'>
                        <ul>
                            <li>React</li>
                            <li>Nodejs</li>
                            <li>Django</li>
                        </ul>
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Postgres</li>
                        </ul>
                        <ul>
                            <li>Docker</li>
                            <li>Kurbenetes</li>
                            <li>Extensions</li>
                        </ul>

                    </Flex>
                
            </Flex>
        </div>

        </section>
    )
}

export default AboutPage;