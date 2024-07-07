import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#C4C8CC',
	$size: props.$size || '17px',
}))`
  color: ${props => props.$pimaryColor};
	font-family: Nunito Sans;
	font-size: ${props => props.$size};
	font-weight: 400;
	line-height: 24px;
	font-family: inherit;
	text-align: center;
`;

const Description = ({ children, size }) => {
  return <StyledDescription $size={size}>{children}</StyledDescription>
};

export default Description;
