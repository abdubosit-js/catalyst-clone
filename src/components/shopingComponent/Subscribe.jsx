import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ReactComponent as Eco } from '../../assets/eco.svg'
import image  from "../../assets/image.png"

export const Subscribe = (props) => {

    const {selectedCats, data} = props

    return (
        <Wrapper>    
            
            <div className="deliveroption-cnt">
                <div className="formula">
                    <p>4</p>
                    <h6>Select your delivery option</h6>
                </div>
            </div>

            <div className="delivery_price-cnt">
                <ul className="delivery_price">
                    <Eco />
                    {data[`cat_${selectedCats}`].map((delivery, index) => {
                        return (
                            <Fragment key={index}>
                                <input type="radio" name="optins-del" id={delivery.lbs} hidden defaultChecked={index === 0} />
                                <label htmlFor={delivery.lbs}>
                                    <div className='weight'>
                                        <span className="weit" >{delivery.lbs}lbs</span>
                                        <span className='size'>Every {delivery.mn} Month</span>
                                    </div>

                                    <div className='price'>
                                        <span className='weit'>${delivery.prices.toFixed(2)}</span>
                                        <span className='size'>${delivery.month.toFixed(2)}/Month</span>
                                    </div>
                                </label>
                            </Fragment>
                        )
                    })}
                </ul>

                <button>Add To Card</button>
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
    .delivery_price-cnt{
        button{
            width: 100%;
            height: 50px;
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 27px;
            color: #FFFFFF;
            background-color: #037847;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
        }
    }
    .delivery_price{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        margin-top: 20px;
        position: relative;
        gap: 10px;
        svg{
            position: absolute;
            top: -13px;
            right: -2px;
        }
        .none {
            background-color: red;
        }
        label{
            width: 100%;
            height: 100%;
            cursor: pointer;
            padding: 10px ;
            border: 1px solid #E4E4E4;
            border-radius: 5px;
            .weight{
                display: flex;
                align-items: center;
                justify-content: space-between; 
            }
            .price{
                margin-top: 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        input:checked + label{
            background-color: #037847;
            color: white;
        }
        .weit{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 100%;
        
        }
        .weit2{
            display: none;
        }
        .size{
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 100%;
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