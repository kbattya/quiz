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
	const [selectedLanguage, setSelectedLanguage] = useState()

	useEffect(() => {
		if (localStorage.getItem("quiz_selected_lang")) {
			let lang = JSON.parse(localStorage.getItem("quiz_selected_lang")).toLocaleLowerCase()
	
			switch (lang) {
				case "german": setSelectedLanguage('de'); return
				case "french": setSelectedLanguage('fr'); return
				case "english": setSelectedLanguage('en'); return
				case "spanish": setSelectedLanguage('es'); return
			}
		} else {
			setSelectedLanguage('en')
		}
	}, [])

	useEffect(() => {
		console.log(selectedLanguage)
	}, [selectedLanguage])

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

	useEffect(() => {
		let res = JSON.parse(localStorage.getItem("quiz_results"))
		if (res !== null) {
			setResult(res)
		}
	}, [])


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
						{/* <> */}
							<Title text={question.question[selectedLanguage]}/>
							<Description text={question.description[selectedLanguage]} />

							<SingleSelect
								isColumn={question.answers.length > 3}
								items={question.answers}
								onHandleClick={(answer) => {
									router.push(`/quiz/${answer.next}`)
									// if (!result.some((res) => res.id === answer.id)) {
									// 	localStorage.setItem("quiz_results", JSON.stringify([...result, answer]))
									// }
									if (question.id === 1 && question.slug === 'language') {
										localStorage.setItem("quiz_selected_lang", JSON.stringify(answer.text.en))
									}
									console.log(question)
									console.log(answer)
									
									setResult((res) => [...res, answer])
								}}
								value={`text.${selectedLanguage}`}
							/>
						{/* </> */}
					</StyledQuiz>
						
				: <></>
			}
		</>

		
		
	)
}