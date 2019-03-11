import React from "react"
import styled from 'styled-components'

const ContactWrapper = styled.section`
width:100%;
height:100%;
background-image: linear-gradient(-50deg, #9326f0 0%, #ff7fc4 100%);
display:flex;
justify-content:center;
`;

const ContactContent = styled.div`
width:80%;
height:100%;
display:flex;
     @media(max-width: 992px) {
        flex-direction:column;
      
    }
`;

const ContactText = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content: space-around;
   


p{
    font-family: Montserrat;
    font-weight: 700;
    color:#440c74;
    font-size: 63px;
}

footer{
    margin-bottom:-120px;
    color: #541879;
    font-family: Montserrat;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    line-height: 32.58px;
}
  @media(max-width: 992px) {
        flex-direction:row;
        width:100%;
        order:2;
            p{
                 display:none;
            }
            footer{
                margin:0;
            }
    }
`;



const ContactForm = styled.form`
width:50%;
display:flex;
flex-direction:column;
 @media(max-width: 992px) {
        width:100%;
        order:1;
    }
label{
    margin-top:20px;
    color: #440c74;
    font-size:14px;
    font-weight: 400;
    font-family: Roboto;
}
input[type='text'], textarea{
    background:inherit;
    border:0px;
    color:#fff;
    padding-left:20px;
    border-bottom: 4px solid #440c74;
}
textarea{
     border: 4px solid #440c74;
}
input[type='button']{
    width:78px;
    background:inherit;
    border:2px solid #fff;
    color: #ffffff;
    font-family: Montserrat;
    font-weight: 700;
    letter-spacing: 2.4px;
    font-size: 15px;
    line-height: 44.87px;
    margin-top:50px;
}

`;





const Contact = () => (
    <ContactWrapper>
        <ContactContent>
            <ContactText>
                <div>
                    <p> say hello</p>
                    <p> to our team </p>
                </div>
                <footer>
                    Created by the AWWWESOMES IN 2017
                </footer>

            </ContactText>

            <ContactForm>
                <label htmlFor="">name</label>
                <input type="text" />
                <label htmlFor="">e-mail</label>
                <input type="text" />
                <label htmlFor="">message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="button" value="Send" />



            </ContactForm>

        </ContactContent>

    </ContactWrapper >

)
export default Contact;

