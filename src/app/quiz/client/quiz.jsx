'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./styled-components/ProgressBar";
import Title from "./styled-components/Title";
import Description from "./styled-components/Description";
import styled from "styled-components";

import ButtonLink from "./styled-components/SelectedListItem";
import SingleSelect from "./styled-components/SingleSelect";

export default function QuizeClient ({question, length, res}) {
	const router = useRouter()
	const [result, setResult] = useState([])

	// useEffect(() => {
	// 	console.log(result)
	// }, [result])

	const StyledQuiz = styled.div.attrs(props => ({
		// $pimaryColor: props.$pimaryColor || '#F2F3F5',
	}))`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 40px;
		gap: 30px;
	`;


	return (
		<>
		{/* // TODO change LInk on Button and pop last answer when click back*/}
			<ProgressBar
				length={length}
				current={res.length+1}
				back_href={question.parent?.toString() || question?.parent}
			/>

			{question.type === 'single-select'
				? <StyledQuiz>
						<>
							<Title text={question.question['en']}/>
							<Description text={question.description['en']} />

							<SingleSelect
								isColumn={question.answers.length > 3}
								items={question.answers}
								onHandleClick={(answer) => {
									router.push(`/quiz/${answer.next}`)
								}}
								value={'text.en'}
							/>
						</>
					</StyledQuiz>
						
				: <></>
			}
		</>

		
		
	)
}