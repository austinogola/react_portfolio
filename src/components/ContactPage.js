import {Flex,Text} from "@chakra-ui/react"
import './ContactPage.css'

const ContactPage=()=>{
    return(
        <section id='contact'>
            <span class="title_span">GET IN TOUCH</span>
            <Flex justifyContent='center'>

                <Text w='60%' color='#F8F8F8' 
                fontSize='14px'>Whether you have an inquiry or just want to say hi, my inbox is always open. 
                I'll try my best to get back to you as soon as posssible</Text>

            </Flex>
            <Flex minH='200px' justifyContent='center' alignItems='center'>
                <a href="mailto:austinandogola@gmail.com">
                    <button id='inboxBtn'>Inbox Me</button>
                </a>
                
            </Flex>
           
        </section>
    )
}

export default ContactPage;