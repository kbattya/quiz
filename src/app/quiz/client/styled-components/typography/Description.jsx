import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#C4C8CC',
}))`
  color: ${props => props.$pimaryColor};
	font-family: Nunito Sans;
	font-size: 17px;
	font-weight: 400;
	line-height: 24px;
	font-family: inherit;
	text-align: center;
`;

const Description = ({ text }) => {
  return <StyledDescription>{text}</StyledDescription>
};

export default Description;
