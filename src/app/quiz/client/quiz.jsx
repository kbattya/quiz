'use client'

import React, { useEffect } from "react";
import Link from "next/link";

export default function QuizeClient ({question, length, res}) {
	useEffect(() => {
		console.log(question)
	}, [])

	return (
		<>
			{question.parent !== null && <Link href={question.parent.toString()}>Back</Link>}
			<div>{res.length+1 + " / " + length}</div>
			{question.type === 'single-select'
				? <div>
						<div className="title">{question.question['en']}</div>
						<div className="description">{question.description['en']}</div>

						<ul>
							{question.answers.map((answer) => {
								return <li key={answer.id}>{answer.text["en"]}</li>
							})}
						</ul>
					</div>
				: <></>
			}
		</>

		
		
	)
}