import React from "react"
import styled from 'styled-components'
import fullbg from '../../images/fullbg.jpg';
import wave1 from '../../images/wave-bottom.svg';


const IdeasWrapper = styled.figure`
position:relative;
   height:500px;
    width:100%;
    background-image:url(${fullbg});

    h2{
    

        color:#fff;
        font-size:73px;
text-align:center;
padding-top:10%;
    }
`;

const Wave = styled.div`
width:100%;
img{
width:50%;
position:absolute;
bottom:-60px;
left:0;
}
`;

const Ideas = () => (

    <IdeasWrapper>
        <h2>our crazy ideas</h2>

        <Wave>
            <img src={wave1} alt="Wave1" />
        </Wave>

    </IdeasWrapper>


)
export default Ideas;

