import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from '@/app/icons';

const StyledLinearProgress = styled.div.attrs(props => ({
  $progress: props.$progress,
	$pimaryColor: props.$pimaryColor || '#E4229C',
	$secondaryColor: props.$secondaryColor || '#E8EAF2',
}))`
  height: 5px;
  background-color: ${props => props.$secondaryColor};
  border-radius: 3px;
  margin: 20px 4vw;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${props => props.$pimaryColor};
		border-radius: 3px;
    width: ${props => `calc(${props.$progress} * (100vw - 8vw))`};
  }
`;

const CurrentValue = styled.span.attrs(props => ({
	$pimaryColor: props.$pimaryColor || '#E4229C',
}))`
	color: ${props => props.$pimaryColor};
	font-size: 18px;
	font-weight: 800;
`;

const LengthValue = styled.span.attrs(props => ({
	$pimaryColor: props.$secondaryColor || '#E4229C',
}))`
	color: ${props => props.$secondaryColor};
	font-size: 18px;
	font-weight: 800;
`;

const ProgressValue = styled.div.attrs(props => ({
	$secondaryColor: props.$secondaryColor || '#E8EAF2',
}))`
	margin-top: 30px;
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: row;
	gap: 6px;
	color: ${props => props.$secondaryColor};
	font-size: 18px;
	font-weight: 800;
`;

const StyledButton = styled.button.attrs(props => ({
	$secondaryColor: props.$secondaryColor || '#E8EAF2',
}))`
  color: ${props => props.$secondaryColor};
  font-weight: bold;
  position: absolute;
  left: 4vw;
`;

const LinearProgress = ({ length, current, isBackAvailable, onHandleClickBack}) => {
  return (
		<div>	
			<ProgressValue>
				{isBackAvailable && <StyledButton onClick={onHandleClickBack}><ArrowLeft /></StyledButton>}

				<CurrentValue>{current + 1}</CurrentValue>
				<LengthValue>/</LengthValue>
				<LengthValue>{length}</LengthValue>
			</ProgressValue>
			<StyledLinearProgress $progress={current/length} />
		</div>
	)
};

export default LinearProgress;
