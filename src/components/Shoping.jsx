import React, { useState } from 'react'
import styled from 'styled-components'
import { Purchase } from './shopingComponent/Purchase'
import { Subscribe } from './shopingComponent/Subscribe'
import { subscribtionData } from '../data/subscribtionData'
import { purchaseData } from '../data/purchaseData'
import { TitleCnt } from './TitleCnt'
import { Counter } from './Counter'


export const Shoping = () => {
	const data = subscribtionData
	const [isActive, setIsActive] = useState(false);
	const [selectedCats, setSelectedCats] = useState(1)
	const purchaseTypes = ['Subscribe & Save', 'One-time purchase']
    
	const manyCats = [
		{id: 1},
		{id: 2},
		{id: 3}
	]

	return (
		<Wrapper>
			<TitleCnt />

			<div className="purchase-cnt">
				<div className='formula'>
					<p>2</p>
					<h6>Select your purchase type</h6>
				</div>

				<RadiocCnt>
					{purchaseTypes.map((purchaseType, index) => {
						
						const id = 'radio-' + purchaseType.split(" ").join("-");

						return (
							<li key={index}>
								<input type="radio" name="purchase_type" id={id} hidden defaultChecked={index === 1}  onClick={() => setIsActive(index === 0 , true)}/>
								<label htmlFor={id}>{purchaseType}</label>
							</li>
						)
					})}
				</RadiocCnt>

				<p className='text'>Choose fewer shipments and we pass along the savings to you. </p>

				<div className='How-many-title'>
					<div className="formula">
						<p>3</p>
						<h6>How many cats do you have?</h6>
					</div>
				</div>

				<ul className='many-cats-cnt'>
					<Counter 
						manyCats={manyCats}
						handleValue={(val) => setSelectedCats(val)}
					/> 
					{isActive ? (
						<Subscribe 
							data={data}
							selectedCats={selectedCats}
							manyCats={manyCats}
						/>
					) : (
						<Purchase
							changeCatNumber={(val) => setSelectedCats(val)}
							selectedCats={selectedCats}
							purchaseData={purchaseData}
							delCount={(id) => setSelectedCats(id)}
						/>
					)}
				</ul>
			</div> 
		</Wrapper>
	)
}

const  Wrapper = styled.div`
 	width: 100%;
	padding: 31px 50px;
	
	.formula{
		display: flex;
		align-items: center;
		gap: 8px;
		p{
			font-family: sans-serif;
			font-size: 11px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 23px;
			height: 22px;
			color: white;
			border-radius: 50%;
			background-color: #037847;
		}
		h6{
			font-family: sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
			color: #5D5D5D;
		}
	}
	.purchase-cnt{
		margin-top: 30px;
		.text{
			margin-top: 14px;
			font-family: sans-serif;
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 17px;
			color: #5D5D5D;
		}
		.How-many-title{
			margin-top: 35px;
		}
		.deliveroption-cnt{
			margin-top: 29px;
		}
	}
`

const RadiocCnt = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: center;
	margin-top: 20px;
	gap: 14px;
	li{
		width: 100%;
		list-style: none;
		label::before {
			content: "";
			width: 15px;
			height: 15px;
			border-radius: 50%;
			border: 1px solid #939393;
			display: block;
		}
		
		label{
			cursor: pointer;	
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			border-radius: 4px;
			border: 1px solid #d5d5d5;
		}

		input:checked + label::before {
			background-color: #037847;
			border: 1px solid white;
			outline: 1px solid #037847;
		}
		
		input:checked + label{
			background-color: #EDF4F1;
		}
	}
	
`