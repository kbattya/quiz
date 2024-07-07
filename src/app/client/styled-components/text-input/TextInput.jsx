'use client'

import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input.attrs(props => ({
	$primaryColor: props.$primaryColor || '#FFFFFF',
	$primaryBackgroundColor: props.$primaryBackgroundColor || '#36173D',
	$placeholderColor: props.$placeholderColor || '#C4C8CC80',
	$borderColor: props.$borderColor || 'none',
	
	$activeBackgroundColor: props.$activeBackgroundColor || '#492752',
	$activeBorderColor:  props.$activeBorderColor || '#D0006E',
}))`
  background-color: ${props => props.$primaryBackgroundColor};
	color: ${props => props.$primaryColor};
	border: ${props => props.$borderColor};
	padding: 20px;
	outline: none;
	border-radius: 8px;
	min-width: 100%;
	max-width: 450px;

	&:active, &:focus {
		border: 1px solid ${props => props.$activeBorderColor};
		border-radius: 8px;
	}

	&::placeholder {
		color: ${props => props.$placeholderColor};
		opacity: 1; /* Firefox */
	}
`;

const StyledHelperText = styled.p.attrs(props => ({
	$primaryColor: props.$primaryColor || '#D0006E',
}))`
	color: ${props => props.$primaryColor};
	font-size: 12px;
`;

const InputWrapper = styled.div.attrs(props => ({
	$padding: props.$padding || '40px 4px',
}))`
	padding: ${props => props.$padding};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;


export default function TextInput ({value, setValue, placeholder, isHelperActive, helperText}) {
	return (
		<InputWrapper>
			<StyledTextInput
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
				defaultValue={value}
			/>
			{isHelperActive &&
				<StyledHelperText>
					{helperText}
				</StyledHelperText>
			}
		</InputWrapper>
	)
}