'use client'

import React, { useEffect } from "react";
import styled from "styled-components";

import ButtonLink from "./SelectedListItem";

const StyledSelect = styled.div.attrs(props => ({
	$column: props.$column || false,
}))`
	display: flex;
	flex-direction: ${props => props.$column === true ? 'column' : 'row'};
	justify-content: center;
	align-items: center;
	gap: 12px;
	width: 100%;
	max-width: 400px
`;

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}


export default function SingleSelect ({isColumn, items, onHandleClick, value, getActiveItemID}) {

	return (
		<StyledSelect $column={isColumn}>
			{items.map((item, index) => {
				return (
					<ButtonLink
						key={item.id || index}
						onHandleClick={() => onHandleClick(item)}
						text={getNestedValue(item, value)}
					/>
				)
			})}
		</StyledSelect>
	)
}