import React, { useState } from 'react'
import styled from 'styled-components'
import image  from "../../assets/image.png"

export const Purchase = (props) => {
    const {purchaseData, selectedCats, delCount} = props

    return ( 
        <Wrapper>


            <div className="deliveroption-cnt">
                <div className="formula">
                    <p>4</p>
                    <h6>Select your delivery option</h6>
                </div>
            </div>
            
            <div className="deliver-options">
                {purchaseData[`cat_${selectedCats}`].map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                
                                <div className="deliver shrink">
                                    <div className='control left-b' onClick={() => delCount(selectedCats === 1 ? selectedCats = 1 : selectedCats - 1)}>-</div>
                                    <p>{item.lbs}lbs <span>for 1 month</span></p>
                                    <div className='control right-b' onClick={() => delCount(selectedCats === 8 ? selectedCats = 8 : selectedCats + 1)}>+</div>
                                </div>
                                    <div className="deliver-cart">
                                        <h3>${item.price} <span>{item.shipping} {item.text}</span></h3>
                                        <h2>Add To Cart</h2>
                                    </div>
                            </li>
                                <h4 className='center'>{item.title}</h4>
                        </ul>
                    )
                })}
            </div>
            <div className='cat-lbs'>
                <img src={image} alt="" />  
                <h5>Catalyst Healthy Cat is the only cat litter engineered from upcycled soft wood fiber to offer performance and peace of mind. It leads in:</h5>   
                <p>1. Superior Odor Control</p>       
                <p>2. Unrivaled Cat Acceptance</p>
                <p>3. Great Clumping</p>
                <p>4. Low Dust</p>
                <p>5. Light Weight</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    .options-flex{
        margin-top: 15px;
        display: flex;
        gap: 14px;
        .options_item{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 200px;
            height: 40px;
            border: 1px solid #E4E4E4;
            border-radius: 4px;
        }
    }
    .shrink{
        display: flex;
        justify-content: space-between;
        .control{
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .left-b{
            cursor: pointer;
            border-right: 1px solid #E4E4E4;
        }
        .right-b{
            cursor: pointer;
            border-left: 1px solid #E4E4E4;
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
    .deliver-options{
        ul{
            width: 100%;
            li{
                display: flex;
                width: 100%;
                gap: 15px;
                height: 60px;
                margin-top: 20px;
                .deliver{
                    width: 330px;
                    height: 100%;
                    border: 1px solid #E4E4E4;
                    border-radius: 4px;
                    p{
                        font-size: 18px;
                        font-weight: 700;
                        display: flex;
                        flex-direction: column;
                    }
                }
                .deliver-cart{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    background-color: #037847;
                    color: white;
                    font-family: sans-serif;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 4px;
                    padding: 0 16px;
                    h3{
                        font-family: sans-serif;
                        font-size: 20px;
                        font-weight: 10;
                    }
                }
                span{
                    font-size: 12px;
                }
            }
            h4{
                margin: 18px auto;
                font-family: sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 28px;
                letter-spacing: 0.5px;
                color: #5D5D5D;
            }

        }
    }
    .cat-lbs{
        padding: 20px;
        width: 100%;
        min-height: 300px;
        margin-top: 25px;
        border-radius: 5px;
        background-color: #F6F6F6;
        img{
            display: block;
            margin: auto;
        }
        h5{
            margin-top: 20px;
            font-family: sans-serif;
            font-style: normal;
            font-weight: 100;
            font-size: 15px;
            line-height: 23px;
            color: #5D5D5D;
        }
        p{
            margin-top: 15px;
            font-family: sans-serif;
            font-style: normal;
            font-weight: 100;
            font-size: 15px;
            line-height: 23px;
            color: #5D5D5D;
        }
    }
`
