import React from "react"
import styled from 'styled-components'
import wave1 from '../../images/wave-top.svg'
import wave2 from '../../images/wave-top2.svg'
import TopMenu from '../TopMenu/TopMenu.js'

const HeaderWrapper = styled.div`
width:100%;
height:445px;
position:relative;
background-image: linear-gradient(45deg, #fe6b83 0%, #9326f0 100%);

`;
const Title = styled.h1`
padding-top:2%;
margin:0;
font-family: Montserrat;
font-size: 116px;
font-weight: 700;
color: #ffffff;
text-align:center;
`;
const SubTitle = styled.p`
padding:0;
margin:0;
font-family: Roboto;
color: #ffffff;
font-size: 21px;
text-align:center;
letter-spacing: 2.27px;
`;

const Wave = styled.div`
width:100%;
position:realtive;
@media (max-width: 992px) {
        display:none;
}
  
img{
    position:absolute;
    bottom:-68px;
    right:0;
    width:40%;
}
img:nth-child(1){
    width:30%;
    margin-bottom:120px;
}
`;
const Header = () => (
    <HeaderWrapper>
        <TopMenu />
        <Title>we create.</Title>
        <SubTitle>strategy is our first name</SubTitle>
        <Wave>
            <img src={wave2} alt="Wave" />
            <img src={wave1} alt="Wave" />
        </Wave>
    </HeaderWrapper>

)
export default Header; 