import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../assets/Logotip.svg"
import { ReactComponent as Vector } from "../assets/Vector.svg"
import { ReactComponent as Bag } from "../assets/bag.svg"
import { ReactComponent as Account } from "../assets/account.svg"

export const HeaderCnt = () => {

    const navLinks = [
        {
            title: "Shop",
            img: <Vector />,
            children: [
                {
                    title: "Cat litter",
                },
                {
                    title: "Gift Carts"
                }
            ]
        },
        {
            title: "About",
            img: <Vector />,
            children: [
                {
                    title: "Our Story",
                },
                {
                    title: "in The News"
                },
                {
                    title: "Retailer Suppurt",
                },
                {
                    title: "FAQs"
                },
                {
                    title: "Contact Us"
                }
            ]
        },
        {
            title: "Community",
            img: <Vector />,
            children: [
                {
                    title: "Blogs",
                },
                {
                    title: "Our Rasuce"
                }
            ]
        }
    ]

    return (
        <Wrapper>
            <div className="left-bar">
                <Logo />
                <nav>
                    <ul>
                        {navLinks.map((navLink, index) =>    
                            <li key={index}>
                                <div className={navLink.title}>
                                    <a href="">{navLink.title}</a>
                                    {navLink.img}
                                </div>
                                <main>
                                    {navLink.children.map((child) => 
                                        <>
                                            <p>{child.title}</p>
                                        </>
                                    )}
                                </main>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="right-bar">
                <button>subscribe</button>
                <Bag />
                <Account className='svg-account' />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;
    height: 91px;
    background-color: #027747;
    .left-bar{
        width: 100%;
        max-width: 482px;
        display: flex;
        justify-content: space-between;
        ul{
            display: flex;
            gap: 30px;
            justify-content: space-between;
            li{
                position: relative;
                list-style: none;
                div{
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    :hover + main{
                        display: block;
                    }
                    a{
                        text-decoration: none;
                        color: #DDAD26;
                    }
                }
                main{
                    z-index: 10;
                    position: absolute;
                    display: none;
                    left: -43px;
                    margin-top: 15px;
                    p{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #DDAD26;
                        margin-top: 8px;
                        background-color: white;
                        border: 1px solid #DDAD26;
                        width: 150px;
                        height: 40px;
                    }
                }
            }
        }
    }
    
    .Shop{
        padding: 2px 10px;
        border-radius: 1px;
        cursor: pointer;
        border: 1px solid #DDAD26;
    }

    .right-bar{
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            width: 109px;
            height: 44px;
            border: none;
            cursor: pointer;
            background-color: #DDAD26;
            border-radius: 2px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
        }
        svg{
            cursor: pointer;
        }
    }
    @media (max-width: 650px)  {
        li{
            display: none;
        }
        .right-bar{
            position: relative;
            button{
                display: none;
            }
            .svg-account{
                display: none;
            }
            svg{
                position: absolute;
                right: 0;
            }
        }
    }
`