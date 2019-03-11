import React from "react"
import styled from 'styled-components'
import img1 from '../../images/img1.jpg'


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
    @media(max-width:992px) {
width:100%;
 }
}
@media(max-width: 992px) {
flex-direction:column;
 }
`;
const ProjectsContent = styled.div`
position:relative;
height:100%;
width:50%;
padding-right:70px;
z-index:1;
padding-left:70px;
::after{
    position:absolute;
    top:30%;
    left:-40px;
    z-index:-1;
    
    content:'1.';
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
@media(max-width: 992px) {
width:100%;
 }
`;

const Projects = () => (
    <ProjectsWrapper>

        <ProjectsContent >
            <h3>projects</h3>
            <p>Af gastropub venmo cliche air plant meh. Mollit man bun nesciunt, commodo synth placeat forage tousled ad pitchfork tilde venmo iceland 3 wolf moon. Cray eu vape flexitarian. Next level DIY odio skateboard, listicle PBR&B shoreditch blog humblebrag cornhole. Blue bottle wayfarers mumblecore af heirloom cillum. Aliquip etsy irony veniam, do whatever vice air plant microdosing paleo wayfarers flannel celiac XOXO. Affogato mumblecore migas blue bottle dolor single-origin coffee.</p>

            <input type="button" value="find out more" />
        </ProjectsContent>
        <figure>
            <img src={img1} alt="" />
        </figure>



    </ProjectsWrapper>

)
export default Projects;

