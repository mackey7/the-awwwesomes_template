import React from "react"
import styled from 'styled-components'
import img2 from '../../images/img2.jpg'


const ProjectsWrapper = styled.section`
width:80%;
display:flex;
flex-wrap:wrap;
margin:40px auto;
figure{
    margin-top:60px;
      width:50%;
      @media(max-width: 992px) {
width:100%;
 }
    img{
       width:100%; 
      
    }
    @media(max-width: 992px) {
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
z-index:1;
margin-top:30px;
padding-left:140px;
::after{
    position:absolute;
    top:30%;
    left:50px;
    z-index:-1;
    
    content:'2.';
    color: #fb8097;
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

const Company = () => (
    <ProjectsWrapper>
        <figure>
            <img src={img2} alt="" />
        </figure>
        <ProjectsContent >
            <h3>company's culture</h3>
            <p>Celiac venmo tilde, put a bird on it vinyl man braid etsy plaid fanny pack next level 3 wolf moon chia single-origin coffee organic. Chillwave activated charcoal cliche, hoodie 3 wolf moon fam pop-up tousled swag hammock wolf bushwick. Ugh blue bottle post-ironic blog williamsburg. Glossier godard disrupt hoodie leggings vexillologist crucifix, iceland truffaut. Microdosing fashion axe biodiesel poutine, waistcoat helvetica salvia meditation ramps twee.</p>

            <input type="button" value="find out more" />
        </ProjectsContent>




    </ProjectsWrapper>

)
export default Company;

