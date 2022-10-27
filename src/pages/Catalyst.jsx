import React from 'react'
import styled from 'styled-components'
import { Corusel } from '../components/Corusel'
import { HeaderCnt } from '../components/Header'
import { Shoping } from '../components/Shoping'

export const Catalyst = () => {
    return (
        <Wrapper>
            <HeaderCnt />
            <div className="flex-cnt">
                <Corusel />
                <Shoping />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    .flex-cnt{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(455px, 1fr));
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`