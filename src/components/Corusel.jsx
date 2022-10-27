import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Packet from "../assets/paket.png"

export const Corusel = () => {
  return (
    <Wrapper>
        <Carousel 
            className='main-corusel'
            autoPlay={true} 
            ShowStatus={true}
            showArrows={true}
            swipeable={true}
            infiniteLoop={true}
            emulateTouch={true}
            transitionTime={250}
            interval={2800}
        >
            <div>
                <img src={Packet} alt="" />
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0252/0806/2004/products/04811-1.4-Lignetics-Catalyst_Healthy-Cat_Back_large.png?v=1579534431" alt="" />
            </div>
            <div>
                <img src={Packet} alt="" />
            </div>
        </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    z-index: 1;
    height: 87vh;
    position: relative;
    background-color: #EDF4F1;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    .control-dots{
        display: none;
    }
    .main-corusel{
        position: absolute;
        width: 60%;
        background-color: #EDF4F1;
        text-align: center;
    }
    .carousel-status{
        display: none;
    }
    .control-arrow{
        display: none;
    }
    .selected{
        border-radius: 4px;
        
    }
    @media (max-width: 400px) {
        .main-corusel{   
            width: 100vw;
        }
    }
`