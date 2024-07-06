'use client'

import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";

const StyledSelect = styled.div.attrs(props => ({
	$column: props.$column || false,
}))`
	display: flex;
	flex-direction: ${props => props.$column === true ? 'column' : 'row'};
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 12px;
	width: 100%;
	max-width: 400px
`;

const StyledButton = styled.button.attrs(props => ({
	$color: props.$color || '#FFFFFF',
	$backgroundColor: props.$backgroundColor || '#36173D',
}))`
  color: ${props => props.$color};
	background-color: ${props => props.$backgroundColor};
	padding: 6px;
  font-size: 13px;
	line-height: 14px;
	border-radius: 50%;
  width: 100px;
  height: 100px;
	display: flex;
	flex-direction: column; 
	justify-content: center;
	align-items: center;
	gap: 6px;
`;

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export default function BubbleSelect ({ isColumn, items, onHandleNext, value }) {
	const [selectedItems, setSelectedItems] = useState([])

	// onSubmit(selectedItems)

	return (
		<StyledSelect $column={isColumn}>
			{items.map((item, index) => {
				return (
					<StyledButton
						key={item.id || index}
						onClick={() => {
							if (selectedItems.includes(item.id)) {
								setSelectedItems((prev) => prev.filter((item) => item !== id))
							} else {
								setSelectedItems((prev) => [...prev, id])
							}
						}}
					>
						{item?.img_URL !== null && 
							<Image
								priority
								src={item?.img_URL}
								height={25}
								width={25}
								quality={50} 
								alt="Follow us on Twitter"
							/>
						}
						

						{getNestedValue(item, value)}
					</StyledButton>
				)
			})}

			<PrimaryButton
				disabled={selectedItems.length === 0}
				onHandleClick={() => onHandleNext(selectedItems)}
				>
					Next
			</PrimaryButton>
		</StyledSelect>
	)
}