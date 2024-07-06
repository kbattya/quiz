import React from 'react';
import styled from 'styled-components';

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
	margin-bottom: 12px;
`;


const ButtonLink = ({ onHandleClick, text }) => {
  return <StyledButton onClick={onHandleClick}>{text}</StyledButton>
};

export default ButtonLink;
