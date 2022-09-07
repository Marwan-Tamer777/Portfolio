import React, { useContext,useEffect } from 'react';
import { ThemeContext } from '../../utils/Context/ThemeContext';

function ContactUs(){

    const {theme,code,colors} = useContext(ThemeContext)

    useEffect(()=>{
        let nameInput = document.getElementById('userNameInput')
        let emailInput = document.getElementById('userEmailInput')
        nameInput.value = localStorage.getItem("userName") != null?localStorage.getItem("userName") : ''
        emailInput.value = localStorage.getItem("userEmail") !=null?localStorage.getItem("userEmail") : ''
    },[])

    function test(data){
        console.log("THIS IS DATA",data)
    }
    function defaultInput(input){
        input.classList.remove("invalid-input")
    }
    function sendMessage(){
        let invalid =0;
        let name = document.getElementById('userNameInput')
        let email = document.getElementById('userEmailInput')
        let subject = document.getElementById('userSubjectInput')
        let message = document.getElementById('userMessageInput')

        if(name.value.trim().length == 0){
            name.classList.add("invalid-input")
            invalid++
        }
        if(email.value.trim().length ==0){
            email.classList.add("invalid-input")
            invalid++
        }

        if(invalid>0){return}
        let messageText= `Hello! my name is ${name.value}%0A${message.value}` 
        let url =  `https://mail.google.com/mail/u/0/?fs=1&to=marwanmarwan536@gmail.com&su=${subject.value}&body=${messageText}&tf=cm`

        localStorage.setItem("userName",name.value)
        localStorage.setItem("userEmail",email.value)

        window.open(url, '_blank').focus();
    }


    return(
        <div id="ContactUs" className={`p-5 my-5 flex flex-row`}>
            <div className={`basis-[60%]`}>
                <h2 className={`${colors.mainText} w-fit mr-auto my-2 text-3xl font-extrabold`}>
                    Shoot us a message!
                </h2>
                <div className={`${colors.cardBg + colors.inputText} flex flex-col p-5 rounded-3xl`}>
                    <p>Your Full Name *</p>
                    <input id="userNameInput" onClick={()=>(defaultInput(document.getElementById("userNameInput")))} type="text" className={`${colors.inputBg} w-full rounded-3xl my-3 p-3`}></input>
                    <p>Your Email *</p>
                    <input id="userEmailInput" onClick={()=>(defaultInput(document.getElementById("userEmailInput")))} type="text" className={`${colors.inputBg} w-full rounded-3xl my-3 p-3`}></input>
                    <p>Subject</p>
                    <input id="userSubjectInput" type="text" className={`${colors.inputBg} w-full rounded-3xl my-3 p-3`}></input>
                    <p>Your Message</p>
                    <textarea id="userMessageInput" className={`${colors.inputBg} w-full rounded-3xl min-h-[12rem] my-3 p-3`}/>
                    <button id="userInputSend" onClick={sendMessage} className={`${colors.mainBg + colors.mainText} w-fit font-bold shadow-2xl rounded-3xl p-2`}>
                    Send Message</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ContactUs;