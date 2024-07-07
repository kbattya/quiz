'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LinearProgress from "./styled-components/progress-bars/LinearProgress";
import Title from "./styled-components/typography/Title";
import Description from "./styled-components/typography/Description";
import styled from "styled-components";

import SingleSelect from "./styled-components/single-select/SingleSelect";
import MultiSelect from "./styled-components/multi-select/MultiSelect";
import BubbleSelect from "./styled-components/bubble-select/BubbleSelect";
import CircularProgress from "./styled-components/progress-bars/CircularProgress";

const StyledQuiz = styled.div.attrs(props => ({
	// $pimaryColor: props.$pimaryColor || '#F2F3F5',
}))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	padding-top: 40px;
	gap: 12px;
`;

export default function QuizeClient ({question, length}) {
	const router = useRouter()
	const [result, setResult] = useState([])
	const [selectedLanguage, setSelectedLanguage] = useState()
	const [isFormSubmited, setIsFormSubmited] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [loadingProgress, setLoadingProgress] = useState(0)

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
		
 		if (answer.next) {
			router.push(`/quiz/${answer.next.slug}`)
		} else {
			onStartLoading()
		}
	}

	const onHandleSubmit = (selectedItemsID) => {
		let selectedAnswers = question.answers.filter((answer) => selectedItemsID.includes(answer.id))
		let res 
		if (result.some((res) => res.question.id === question.id)) {
			res = result.map((res) => res.question.id === question.id ? { question, answers: selectedAnswers} : res)
		} else {
			res = [...result, { question, answers: selectedAnswers}]
		}

		localStorage.setItem("quiz_results", JSON.stringify(res))
		setResult(res)

		if(selectedAnswers[0].next) {
			router.push(`/quiz/${selectedAnswers[0].next.slug}`)
		} else {
			onStartLoading()
		}
	}

	function onStartLoading() {
		setIsFormSubmited(true)
		setIsLoading(true)

		const intervalId = setInterval(() => {
			setLoadingProgress((prev) => prev + 1);
		}, 50);

		setTimeout(() => {
			clearInterval(intervalId);

			setTimeout(() => {
				setIsLoading(false)
				router.push(`/email`)
			}, 300)
		}, 5000);
	}

	function renderSelect(type) {
		switch(type) {
			case 'single-select':
				return <SingleSelect
									isColumn={question.answers.length > 3}
									items={question.answers}
									onHandleClick={(answer) => onHandleSelect(answer)}
									value={`text.${selectedLanguage}`}
								/>;
			case 'multiply-select':
				return <MultiSelect
								items={question.answers}
								value={`text.${selectedLanguage}`}
								onHandleSubmit={onHandleSubmit}
							/>
			case 'bubble-select':
				return <BubbleSelect
								items={question.answers}
								value={`text.${selectedLanguage}`}
								onHandleSubmit={onHandleSubmit}
							/>
		}
	}
	

	return (
		<>
			{isFormSubmited
				? isLoading && <CircularProgress loadingProgress={loadingProgress} />
				: <>
						<LinearProgress
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

						<StyledQuiz>
							<Title>{question.question[selectedLanguage]}</Title>
							<Description>{question.description[selectedLanguage]}</Description>

							{renderSelect(question.type)}
						</StyledQuiz>
					</>	
			}
		</>
	)
}