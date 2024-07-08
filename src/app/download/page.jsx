'use client'

import React, { useEffect, useState } from "react";
import Title from "../client/styled-components/typography/Title";
import Description from "../client/styled-components/typography/Description";
import PrimaryButton from "../client/styled-components/buttons/PrimaryButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Niconne } from "next/font/google";
import SecondaryButton from "../client/styled-components/buttons/SecondaryButton";

import { generateFile } from "../helpers/helpers";

const niconne = Niconne({ subsets: ['latin'], weight: ['400']});

export default function EmailClient () {
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

	return (
		<div className="page_container">
			<div className={niconne.className}><Title size="36px">Thank you</Title></div>
			<Description>for supporting us and passing quiz</Description>

			<div style={{padding: '40px 10px'}}>
				<Image
					priority={1}
					src={"./img/checkmark.svg"}
					height={118}
					width={118}
					quality={80} 
					alt="done mark"
				/>
			</div>

			<div className="footer_container">
				<SecondaryButton onHandleClick={() => generateFile(result, selectedLanguage)}>
					<Image
						src={"./img/download.svg"}
						height={42}
						width={42}
						quality={80} 
						alt="download icon"
					/>
					Download my answers
				</SecondaryButton>

				<PrimaryButton
					onHandleClick={() => {		
						localStorage.clear();
						router.push(`/quiz/language`);
					}}
				>
					Retake quiz
				</PrimaryButton>
			</div>
		</div>
	)
}