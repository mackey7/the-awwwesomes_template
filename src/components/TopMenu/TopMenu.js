import React from "react"
import styled from 'styled-components'

const NavWrapper = styled.nav`
ul{
    display:flex;
justify-content:center;
li{
    padding-left:30px;
    list-style:none;
    a{
        color: #582782;
        text-decoration:none;
        font-family: Montserrat;
        letter-spacing: 3.4px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 21px;
        line-height: 46.63px;
    }
}
}
`;

const TopMenu = () => (
    <NavWrapper>
        <ul>
            <li><a href="">Projects</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Mission</a></li>
            <li><a href="">Contact</a></li>
        </ul>

    </NavWrapper>

)
export default TopMenu; 
