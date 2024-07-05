'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./styled-components/ProgressBar";
import Title from "./styled-components/Title";
import Description from "./styled-components/Description";
import styled from "styled-components";

import ButtonLink from "./styled-components/SelectedListItem";
import SingleSelect from "./styled-components/SingleSelect";

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

export default function QuizeClient ({question, length, res}) {
	const router = useRouter()
	const [result, setResult] = useState([])
	const [selectedLanguage, setSelectedLanguage] = useState()

	useEffect(() => {
		let res = localStorage.getItem("quiz_results")
		if (res !== null) {
			setResult(JSON.parse(res))
		}

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

	const onHandleSelect = (answer) => {
		if (question.id === 1 && question.slug === 'language') {
			localStorage.setItem("quiz_selected_lang", JSON.stringify(answer.text.en))
		}

		let res 
		if (result.some((res) => res.question.id === question.id)) {
			res = result.map((res) => res.question.id === question.id ? { question, answer } : res)
		} else {
			res = [...result, { question, answer }]
		}

		localStorage.setItem("quiz_results", JSON.stringify(res))
		setResult(res)
		router.push(`/quiz/${answer.next.slug}`)
	}

	return (
		<>
			<ProgressBar
				length={length}
				current={result.length}
				isBackAvailable={question.parent !== null}
				onHandleClickBack={() => {
					let slug = question.parent?.slug
					let upd = result.filter((res) => res.question.id !== question.parent.id)
					setResult(upd)
					localStorage.setItem("quiz_results", JSON.stringify(upd))
					router.push(`/quiz/${slug}`)
				}}
			/>

			{question.type === 'single-select'
				? <StyledQuiz>
						<Title text={question.question[selectedLanguage]}/>
						<Description text={question.description[selectedLanguage]} />

						<SingleSelect
							isColumn={question.answers.length > 3}
							items={question.answers}
							onHandleClick={(answer) => onHandleSelect(answer)}
							value={`text.${selectedLanguage}`}
						/>
					</StyledQuiz>
				: <></>
			}
		</>
	)
}