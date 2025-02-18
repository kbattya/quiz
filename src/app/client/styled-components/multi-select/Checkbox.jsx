'use client'

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCheckboxButton = styled.button.attrs(props => ({
	$color: props.$color || '#FFFFFF',
	$backgroundColor: props.$backgroundColor || '#36173D',
	$activeBackgroundColor: props.$activeBackgroundColor || '#E4229B33',
	$activeBorderColor:  props.$activeBorderColor || '#E4229C',
	$active: props.$active || false
}))`
  color: ${props => props.$color};
	background-color: ${props => props.$active ?  props.$activeBackgroundColor : props.$backgroundColor};
	border: 1px solid  ${props => props.$active ? props.$activeBorderColor : 'transparent'};
	padding: 21px 20px;
	border-radius: 16px;
  font-size: 17px;
	line-height: 24px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	width: 100%;
`;

const StyledCheckboxInput = styled.input.attrs(props => ({
	$color: props.$color || '#FFFFFF',
	$backgroundColor: props.$backgroundColor || '#E4229C',
}))`
	-ms-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -webkit-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
	cursor: pointer;
	accent-color: ${props => props.$backgroundColor};
`;

export default function Checkbox ({
	value,
	html_id,
	id,
	setSelectedItems,
	selectedItems
}) {
	const [isChecked, setIsChecked] = useState(selectedItems.includes(id));

	useEffect(() => {
		if (isChecked) {
			setSelectedItems((prev) => [...prev, id])
		} else {
			setSelectedItems((prev) => prev.filter((i) => i !== id))
		}
	}, [isChecked])

	return (
		<StyledCheckboxButton
			onClick={() => setIsChecked(!isChecked)}
			$active={selectedItems.includes(id)}
		>
			<label
				htmlFor={html_id}
				style={{textAlign: "start"}}
				onClick={(e) => e.preventDefault()}
			>
				{value}
			</label>
			<StyledCheckboxInput
				type="checkbox"
				id={html_id}
				checked={isChecked}
			/>
		</StyledCheckboxButton>
	)
}