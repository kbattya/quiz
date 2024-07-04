'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./styled-components/ProgressBar";

export default function QuizeClient ({question, length, res}) {
	const router = useRouter()

	useEffect(() => {
		console.log(question)
	}, [])

	return (
		<>
			<ProgressBar length={length} current={res.length+1} back_href={question.parent?.toString() || question?.parent}/>

			{question.type === 'single-select'
				? <div>
						<div className="title">{question.question['en']}</div>
						<div className="description">{question.description['en']}</div>

						<ul>
							{question.answers.map((answer) => {
								return (
									<li
										key={answer.id}
										onClick={() => {
											router.push(`/${answer.next}`)
										}}
									>
										{answer.text["en"]}
									</li>

								)
							})}
						</ul>
					</div>
				: <></>
			}
		</>

		
		
	)
}