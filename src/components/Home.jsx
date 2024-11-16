import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgrondImg="bg1.avif"
                leftBtnText="Custom Order"
                rightBtnText="Existing invertory"
            />
            <Section
                title="Model 3"
                description="Lease Starting at $299/mo2"
                backgrondImg="bg2.avif"
                leftBtnText="Order Now"
                rightBtnText="Demo Drive"
            />
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgrondImg="bg3.avif"
                leftBtnText="Custom Order"
                rightBtnText="Existing invertory"
            />
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgrondImg="bg4.avif"
                leftBtnText="Custom Order"
                rightBtnText="Existing invertory"
            />
            <Section
                title="Cyber Truck"
                description="Order Online for Touchless Delivery"
                backgrondImg="bg5.avif"
                leftBtnText="Custom Order"
                rightBtnText="Existing invertory"
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
z-index:10;

`