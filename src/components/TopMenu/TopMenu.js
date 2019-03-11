import React, { Component } from "react"
import styled from 'styled-components'

const NavWrapper = styled.nav`
@media (max-width: 768px) {
    position:relative;
}
ul{
    display:flex;
justify-content:center;
@media (max-width: 768px) {
    /* display:none; */
        display: ${props => props.menu ? 'flex' : 'none'};
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100vh;
        background-image: linear-gradient(45deg, #fe6b83 0%, #9326f0 100%);
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        padding:0;
      margin:0
        
} 
li{
    padding-left:30px;
    list-style:none;
    a{
        @media (max-width: 768px) {
          color: #fff;
          :hover{
              text-decoration:underline;
              font-size: 22px;
               font-weight: 900;
          }  
        }
        color: #582782;
        text-decoration:none;
        font-family: Montserrat;
        letter-spacing: 3.4px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 21px;
        line-height: 46.63px;
        :hover{
            color:#7e44af;
            font-weight: 900;
           
        }
    }
}
}

`;
const MenuBar = styled.div`
padding:20px;
cursor:pointer;
@media (min-width: 768px) {
        display:none;
}
@media (max-width: 768px) {
        position:absolute;
        top:0;
        left:0;
        z-index:10;
}
`;
const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;

  
  `;

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { MenuDisplay: false };
    }
    handleClick = () => {
        console.log('click')
        const MenuDisplayStatus = !this.state.MenuDisplay;
        this.setState({ MenuDisplay: MenuDisplayStatus });
    }
    render() {
        return (
            <NavWrapper>
                <MenuBar onClick={this.handleClick} >
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </MenuBar>
                <ul menu={this.state.MenuDisplay}  >
                    <li><a href="">Projects</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Mission</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

            </NavWrapper>


        )
    }

}
export default TopMenu;


