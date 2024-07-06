'use client'

import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";

const StyledSelect = styled.div.attrs(props => ({
	$column: props.$column || false,
}))`
	flex-direction: ${props => props.$column === true ? 'column' : 'row'};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 400px
`;

const StyledButton = styled.button.attrs(props => ({
	$color: props.$color || '#FFFFFF',
	$backgroundColor: props.$backgroundColor || '#36173D',
	$active: props.$active || false,
}))`
  color: ${props => props.$color};
	background-color: ${props => props.$backgroundColor};
	border: 2px solid transparent;
	border-color: ${props => props.$active ? '#E4229C' : 'transparent'};
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

export default function BubbleSelect ({ isColumn, items, onHandleSubmit, value }) {
	const [selectedItems, setSelectedItems] = useState([])

	return (
		<>
			<StyledSelect $column={isColumn}>
				{items.map((item, index) => {
					return (
						<StyledButton
							key={item.id || index}
							$active={selectedItems.includes(item.id)}
							onClick={() => {
								if (selectedItems.includes(item.id)) {
									setSelectedItems((prev) => prev.filter((i) => i !== item.id))
								} else {
									selectedItems.length < 3 && setSelectedItems((prev) => [...prev, item.id])
								}
							}}
						>
							{item?.img_URL !== null && 
								<Image
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
			</StyledSelect>

			<PrimaryButton
				disabled={selectedItems.length === 0}
				onHandleClick={() => onHandleSubmit(selectedItems)}
			>
				Next
			</PrimaryButton>
		</>
	)
}