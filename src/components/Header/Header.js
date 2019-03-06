import React from "react"
import styled from 'styled-components'
import wave1 from '../../images/wave-top.svg'
import wave2 from '../../images/wave-top2.svg'

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
display:flex;
flex-direction:column;
justify-content:right;
position:absolute;
    bottom:-40px;
    right:0;
img{
    height:50px;
    align-self:flex-end;
    padding-top:20px;
}
`;
const Header = () => (
    <HeaderWrapper>
        <Title>we create.</Title>
        <SubTitle>strategy is our first name</SubTitle>
        <Wave>
            <img src={wave2} alt="Wave" />
            <img src={wave1} alt="Wave" />
        </Wave>
    </HeaderWrapper>

)
export default Header; 