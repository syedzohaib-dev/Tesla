import React from 'react'
import styled from 'styled-components'

function Section({ title, description, backgrondImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgrondImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>

                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText && <RightButton>{rightBtnText}</RightButton>}

                </ButtonGroup>
                <DownArrow src="/images/downArrow.png" />
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
z-index:10;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:not-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
z-index:-1;

`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
flex-direction:column;

}

`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer; 
margin:8px;

`

const RightButton = styled(LeftButton)` 
background-color:white;
color:black;
opacity:0.65;


`

const DownArrow = styled.img`
height:40px; 
animation:animateDown infinite 1.5s;

`

const Buttons = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


`