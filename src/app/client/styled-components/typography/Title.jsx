import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#F2F3F5',
}))`
  color: ${props => props.$pimaryColor};
 	font-size: 28px;
 	font-weight: 700;
	font-family: inherit;
	text-align: center;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
};

export default Title;
