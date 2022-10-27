import React, { useState } from 'react'
import styled from 'styled-components'

export const Counter = ({manyCats, handleValue}) => {

    let [count, setCount] = useState(4)

    return (
        <Wrapper>
            {manyCats.map((cat, index) => {
                return (
                    <li key={index}>
                        <input type="radio" name="number-of-cats" id={cat.id} hidden defaultChecked={index === 0} onClick={() => handleValue(cat.id)}/>
                        <label htmlFor={cat.id}>{cat.id}</label>
                    </li>
                )
            })}
            <input type="radio" name="number-of-cats" id="4" hidden onClick={() => handleValue(count)}/>
            <label htmlFor="4">
                <div className={count === 4 ? "diable center" : "left-b center"} onClick={() => setCount(count === 4 ? count = 4 : count - 1)}>-</div>
                <span className='center'>{count}</span>
                <div className={count === 8 ? "disable center": "right-b center"} onClick={() => setCount(count === 8 ? count = 8 : count + 1)}>+</div>
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    width: 100%;
    margin-top: 15px;
    display: flex;
    gap: 14px;
    li{
        width: 100%;
        list-style: none;
    }
    label{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #E4E4E4;
        border-radius: 4px;
        cursor: pointer;
        div {
            width: 100%;
            height: 100%;
            border: none;
        }
        span{
            width: 100%;
            height: 100%;
            background-color: white;
            color: black;
        }
    }
    input:checked + label{
        background-color: #037847;
        color: white;
        border-bottom: 1px solid #037847;
        border-left: 1px solid #037847;
        border-right: 1px solid #037847;
    }
    .left-b{
        border-right: 1px solid #E4E4E4;
    }
    .right-b{
        border-left: 1px solid #dbdbdb;
    }
    .diable{
        border-right: 1px solid #E4E4E4;
        background-color: white;
        border-radius: 3px 0 0 3px;
        color: #E4E4E4;
    }
    .disable{
        border-left: 1px solid #dbdbdb;
        background-color: white;
        border-radius: 0 3px 3px 0;
        color: #dbdbdb;
    }
`
