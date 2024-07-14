'use client'

import React from "react";
import styled from "styled-components";

import Image from "next/image";

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

const StyledButton = styled.button.attrs(props => ({
	$color: props.$color || '#FFFFFF',
	$backgroundColor: props.$backgroundColor || '#36173D',
}))`
  color: ${props => props.$color};
	background-color: ${props => props.$backgroundColor};
	padding: 12px 20px;
	border-radius: 16px;
	width: 100%;
  font-size: 17px;
	line-height: 24px;
`;

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export default function SingleSelect ({ isColumn, items, onHandleClick, value }) {

	return (
		<StyledSelect $column={isColumn}>
			{items.map((item, index) => {
				return (
					<StyledButton
						key={item.id || index}
						onClick={() => onHandleClick(item)}
					>	
						{item?.img_URL && 
							<Image
								priority
								src={item?.img_URL}
								height={52}
								width={52}
								quality={100} 
								alt={value}
							/>
						}
						{getNestedValue(item, value)}
					</StyledButton>
				)
			})}
		</StyledSelect>
	)
}