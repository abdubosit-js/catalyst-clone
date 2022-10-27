import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../assets/stars.svg'
import { ReactComponent as StarColor } from '../assets/starColor.svg'

export const TitleCnt = () => {

	
	return (
		<Wrapper>
			<div className="title-cnt">
					<h3>Soft Wood Cat Litter</h3>
					<h1>Cat litter healthy cat formula</h1>

					<div className='flex-viewer'>
						<div className='stars-1'>
							<Stars />
							<Stars /> 
							<Stars /> 
							<Stars /> 
							<Stars />
						</div>
					</div>
					<div className='stars-2'>
						<StarColor />
						<StarColor /> 
						<StarColor /> 
						<StarColor /> 
						<StarColor />
					</div>

					<div className="select-formula">
						<div className='formula'>
							<p>1</p>
							<h6>Select a formula</h6>
						</div>

						<div className="select-formula-flex">
							<div className="caty-formula active">Healthy cat</div>
							<div className="caty-formula">Multi-cat</div>
							<div className="caty-formula">Unscented</div>
						</div>

						<h4>Catalyst Healthy Cat is the only cat litter engineered from upcycled soft wood fiber to offer performance and peace of mind.</h4>
					</div>
				</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    .title-cnt{
		.active{
			border: none;
			background-color: #037847;
			color: white;
		}
		h3{
			font-style: normal;
			font-weight: 700;
			font-size: 25px;
			line-height: 29px;
			color: #DDAD26;
		}	
		h1{
			margin-top: 8px;
			font-style: normal;
			font-weight: 700;
			font-size: 42px;
			line-height: 48px;
			text-transform: capitalize;
			color: #5D5D5D;
		}
		.flex-viewer{
			position: relative;
			cursor: pointer;
			margin-top: 10px;
			display: flex;
			overflow: hidden;
			height: 20px;
			width: 61.2px;
			gap: 10px;
			.stars-1{
				border: 1px solid transparent;
				position: absolute;
				align-items: center;
				z-index: 10;
				display: flex;
				gap: 4px;
				
			}	
			p{
				font-size: 13px;
				color: #5D5D5D;
			}
		}
		.stars-2{
			position: absolute;
			z-index: -1;
			display: flex;
			gap: 4px;
			margin-top: -19px;
			height: 20px;
		}
		.select-formula{
			margin-top: 15px;
			h4{
				margin-top: 15px;
				font-family: sans-serif;
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 22px;
				color: #878787;

			}
			.select-formula-flex{
				margin-top: 15px;
				width: 100%;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
				gap: 15px;
			}
			.caty-formula{
				cursor: pointer;
				width: 100%;
				font-weight: 700;
				height: 38px;
				border-radius: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #E4E4E4;
			}
		}
	}
`
