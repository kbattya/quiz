import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#F2F3F5',
	$size: props.$size || '28px',
}))`
  color: ${props => props.$pimaryColor};
 	font-size:${props => props.$size};
 	font-weight: 700;
	font-family: inherit;
	text-align: center;
`;

const Title = ({ children, size }) => {
  return <StyledTitle $size={size}>{children}</StyledTitle>
};

export default Title;
