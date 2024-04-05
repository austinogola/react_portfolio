import {Box} from "@chakra-ui/react"
import './ProjectsPage.css'
import { useEffect } from "react"
import maxAIimage from './Images/icons8-sparkling-60.png'
import mailImage from './Images/icons8-mail-200.png'
import nmpImage from './Images/icons8-npm-100.png'


const ProjectsPage=()=>{
    useEffect(()=>{
        const allProjectDivs=document.querySelectorAll('.projectBox')

        allProjectDivs.forEach(element => {
            element.addEventListener('mouseover',e=>{
                let mm=element.querySelector('.proj_exp')
                mm.style.height='100%'
            })
          });
        
          allProjectDivs.forEach(element => {
            element.addEventListener('mouseout',e=>{
                let mm=element.querySelector('.proj_exp')
                mm.style.height='0%'
            })
          });
    })
    return(
        <section id="work">
             <span className="title_span_light">MY WORK</span>
             <p style={{color:'#FF8C00',fontSize:"0.8rem"}}>SELECTED WORK I'VE TAKEN ON IN THE PAST</p>
            <Box className="projects">
                <Box className="projectBox">
                        <div class="proj_img_wrapper">
                                <p style={{
                                    fontFamily: 'Comfortaa',
                                    color: '#0F6972',
                                    borderBottom:'2px solid #F5A08C',
                                    fontWeight:'700',
                                    padding:'2px',
                                    fontSize:'2rem'
                                }}>
                                    apedata
                                </p>
                            <div className="proj_exp">
                                <p id='exp_text'>LinkedIn Public Data API</p>

                            </div>
                            <div id='tech'>
                                <span>Nodejs</span>
                                <span>NextJs</span>
                                <span>Docker</span>
                                <span>APIs</span>
                                <span>Apache</span>

                            
                            </div>
                        </div>
                        
                        <div class="proj_link">
                            <a href="https://apedata.net/" target="_blank" rel="noreferrer">
                                apedata.net <i class="fa fa-external-link"></i>
                            </a>

                        </div>
                </Box>

                <Box className="projectBox">
                    <div className="proj_img_wrapper">
                        <div className="proj_img">
                            <img src={mailImage} width='80px' alt='MailMuse'/>
                            <p style={{
                                color:'black',
                                fontWeight:'400',
                                fontSize:'24px',
                                fontFamily:'Rubik Bubbles'
                            }}>GhostWrite</p>
                        </div>
                        <div className="proj_exp">
                            <p id='exp_text'>Utilize the power of AI to make an Impression</p>
                        </div>
                        <div id='tech'>
                                <span>React</span>
                                <span>Django</span>
                                <span>Postgres</span>
                                <span>Chrome</span>
                                <span>AI</span>
                            </div>
                    </div>
                    <div className="proj_link">
                       
                        <a href="https://app.ghostwrite.rip/get" target="_blank" rel="noreferrer">
                            ghostwrite.app <i class="fa fa-external-link"></i>
                        </a>

                    </div>
                </Box>

                <Box className="projectBox">
                    <div class="proj_img_wrapper">
                        
                        <div class="proj_img">
                                <img src={maxAIimage} width='50px' alt='maxAI'/>
                            <p style={{
                                fontFamily: 'Pacifico',
                                color:'black',
                                fontWeight:'400',
                                fontSize:'24px'

                            }}>MaxAI</p>
                        </div>
                        <div class="proj_exp">
                            <p id='exp_text'>The only generative AI extension you need</p>
                        </div>
                        <div id='tech'>
                                <span>Nodejs</span>
                                <span>Chrome</span>
                                <span>Postgres</span>
                                <span>RDS</span>
                                <span>AI</span>
                            </div>
                    </div>
                    <div class="proj_link">
                        
                        <a href="https://api.maxai.me/app/maxai-ext?ref=topbar" target="_blank" rel="noreferrer">
                            maxAI extension<i class="fa fa-external-link"></i>
                        </a>

                    </div>
                </Box>

                <Box className="projectBox">
                    <div class="proj_img_wrapper">
                        <div class="proj_img">
                            <img src={nmpImage} alt='npm'/>
                        </div>
                        <div class="proj_exp">
                            <p id='exp_text'>Azure Oauth  module</p>
                        </div>
                        <div id='tech'>
                                <span>Nodejs</span>
                                <span>NPM</span>
                                <span>Javascript</span>
                            </div>
                    </div>
                    <div class="proj_link">
                        <a href="https://npmjs.com/package/@azure/msal-node" target="_blank" rel="noreferrer">
                            msal-node <i class="fa fa-external-link"></i>
                        </a>

                    </div>
                </Box>
            </Box>
        </section>
    )
}

export default ProjectsPage;