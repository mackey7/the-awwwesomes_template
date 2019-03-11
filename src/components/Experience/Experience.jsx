
import React from "react"
import styled from 'styled-components'
import img3 from '../../images/img3.jpg'


const ProjectsWrapper = styled.section`
width:80%;
display:flex;
flex-wrap:wrap;
margin:40px auto;
figure{
    margin-top:60px;
      width:50%;
    img{
       width:100%; 
      
    }
}
`;
const ProjectsContent = styled.div`
position:relative;
height:100%;
width:50%;
padding-right:70px;
z-index:1;
padding-left:80px;
::after{
    position:absolute;
    top:30%;
    left:-50px;
    z-index:-1;
    
    content:'3.';
    color: #e579d7;
    font-size:247px;
    font-weight: 700;
    font-family: Montserrat;
}
h3{
    color: #5f1b98;
     font-family: Montserrat;
       font-size: 27px;
       font-weight: 700;
       line-height: 88.55px;
       letter-spacing: 3.4px;
}
p{


color: #440c74;
font-family: Roboto;
font-size: 12px;
font-weight: 400;


}

input{
    cursor:pointer;
border: 3px solid #c244c1;
color: #440c74;
font-family: Montserrat;
font-size: 15px;
font-weight: 700;
background:inherit;
letter-spacing: 2.4px;
padding:10px 20px;
:hover{
    background: #c244c1;
    color:#fff;
    border: 3px solid #440c74;
      transition: 0.8s;
}
}

`;

const Experience = () => (
    <ProjectsWrapper>

        <ProjectsContent >
            <h3>experience</h3>
            <p>Everyday carry cray vegan microdosing waistcoat, godard portland gentrify viral vape hammock. Prism lyft cold-pressed, snackwave bespoke squid schlitz typewriter pinterest jean shorts. Kale chips pitchfork lumbersexual ugh, messenger bag forage kitsch cold-pressed cred cronut meggings umami. Gastropub ethical copper mug, authentic four loko chicharrones salvia fingerstache vaporware chia church-key hoodie single-origin coffee.</p>

            <input type="button" value="find out more" />
        </ProjectsContent>
        <figure>
            <img src={img3} alt="" />
        </figure>



    </ProjectsWrapper>

)
export default Experience; 