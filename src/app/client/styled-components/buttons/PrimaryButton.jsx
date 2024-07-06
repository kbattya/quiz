'use client'

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs(props => ({
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

export default function PrimaryButton ({children, disabled, onHandleClick}) {
	return (
		<StyledButton
			disabled={disabled}
			onClick={onHandleClick}
		>
			{children}
		</StyledButton>
	)
}