'use client'

import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import PrimaryButton from "../buttons/PrimaryButton";

const StyledSelect = styled.div.attrs(props => ({
	// $column: props.$column || false,
}))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export default function MultiSelect ({items, value, onHandleSubmit}) {
	const [selectedItems, setSelectedItems] = useState([])

	return (
		<>
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