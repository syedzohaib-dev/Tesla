import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false)
  
  return (
    <Container>
      <a href="">
        <img src="/images/Logo.png" style={{ width: '120px' }} alt="" />
      </a>
      <Menu>

        <a href="#">  Model S</a>
        <a href="#" > Model 3</a>
        <a href="#" > Model X</a>
        <a href="#" > Model X</a>


      </Menu >
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu >
          <button onClick={() => setBurgerOpen(true)}>=</button>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>

        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>

    </Container >

  )
}

export default Header

const Container = styled.div`
min-height:60px;
width:100%;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
border:1px solid black;
padding: 0 20px;
z-index:1;


`

const Menu = styled.div`
display:flex; 
align-items:center;
flex:1;
justify-content:center;
a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:no-wrap;
gap:10px;
}
@media(max-width:768px){
display:none;
}

`

const RightMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;
a{
font-weight:600;
text-transform:uppercase;
margin-right:10px;  

}



`

const CustomMenu = styled.div`
button{
width:30px;
height:30px;
border-radius:50%;
border:nonne:
outline:none;
font-size:1.5rem;


}
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
transform:${props => props.show ? ' translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ;
li{
  padding: 15px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);

a{
    font-weight: 600;
  }
}


`

const CustomClose = styled(ClearIcon)`
cursor: pointer;

`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;





`