import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from '../typography/Text';

const StyledProgress = styled.div.attrs(props => ({
  $progress: props.$progress / 100 * 360 || 360,
	$pimaryColor: props.$pimaryColor || '#E4229C',
	$secondaryColor: props.$secondaryColor || '#E8EAF2',
}))`
  	position: relative;
		height: 250px;
		width: 250px;
		border-radius: 50%;
		background: conic-gradient(#E4229C ${props => props.$progress}deg, #ededed 0deg);
		display: flex;
		align-items: center;
		justify-content: center;

		&:before {
			content: "";
			position: absolute;
			height: 228px;
			width: 228px;
			border-radius: 50%;
			background-color: rgb(28, 3, 41);
		}
`;

const Container = styled.div.attrs(props => ({
}))`
  display: flex;
  width: 420px;
  padding-bottom: 30px;
  border-radius: 12px;
  row-gap: 30px;
  flex-direction: column;
  align-items: center;
`;

const ProgressValue = styled.div.attrs(props => ({
}))`
  position: relative;
  font-size: 52px;
  font-weight: 600;
  color: #FFFFFF;
`;

const CircularProgress = ({ loadingProgress }) => {
  return (
		<div className="page_container">
			<Container>
          <StyledProgress $progress={loadingProgress}>
            <ProgressValue >{loadingProgress}%</ProgressValue>
          </StyledProgress>
      </Container>
			<Text>
				{selectedLanguage === 'en' && "Finding collections for you..."}
				{selectedLanguage === 'fr' && "Trouver des collections pour vous..."}
				{selectedLanguage === 'de' && "Sammlungen für Sie finden …"}
				{selectedLanguage === 'en' && "Encontrando colecciones para ti..."}
			</Text>
		</div>
	)
};

export default CircularProgress;