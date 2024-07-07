'use client'

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs(props => ({
	$primaryColor: props.$primaryColor || '#FFFFFF',
}))`
  color: ${props => props.$primaryColor};
	display: flex;
	flex-direction: row;
	justify-content: center; 
	align-items: center;
	gap: 8px;
`;

export default function SecondaryButton ({children, primaryColor}) {
	return (
		<StyledButton $primaryColor={primaryColor}>
			{children}
		</StyledButton>
	)
}