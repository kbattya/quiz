import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#FFFFFF',
}))`
  color: ${props => props.$pimaryColor};
	font-family: Nunito Sans;
	font-size: 17px;
	font-weight: 600;
	line-height: 24px;
	font-family: inherit;
	text-align: center;
`;

const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>
};

export default Text;