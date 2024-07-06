'use client'

import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const StyledSelect = styled.div.attrs(props => ({
	// $column: props.$column || false,
}))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

const PimaryButton = styled.button.attrs(props => ({
	$secondaryColor: props.$secondaryColor || '#E8EAF2',
	$primaryColor: props.$primaryColor || '#E4229C',
}))`
  color: ${props => props.$secondaryColor};
	background-color: ${props => props.$primaryColor};
	padding: 21px 20px;
	width: 100%;
	margin-top: 20px;
	border-radius: 30px;

	&:disabled {
		opacity: 0.4
	}
`;


function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export default function MultiSelect ({items, value, onHandleNext}) {
	const [selectedItems, setSelectedItems] = useState([])

	return (
		<StyledSelect>
			{items.map((item) => {
				return (
					<Checkbox
						key={item.id}
						html_id={"answer_"+item.id}
						id={item.id}
						value={getNestedValue(item, value)}
						setSelectedItems={setSelectedItems}
						items={items}
						selectedItems={selectedItems}
					/>
				)
			})}

			<PimaryButton
				disabled={selectedItems.length === 0}
				onClick={() => onHandleNext(selectedItems)}
				>
					Next
			</PimaryButton>
		</StyledSelect>
	)
}