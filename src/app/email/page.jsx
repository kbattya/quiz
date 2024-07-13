'use client'

import React, { useEffect, useState } from "react";
import Title from "../client/styled-components/typography/Title";
import Description from "../client/styled-components/typography/Description";
import Link from "next/link";
import * as EmailValidator from 'email-validator';
import PrimaryButton from "../client/styled-components/buttons/PrimaryButton";
import TextInput from "../client/styled-components/text-input/TextInput";
import { useRouter } from "next/navigation";

export default function EmailClient () {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [selectedLanguage, setSelectedLanguage] = useState()
	const [result, setResult] = useState([])

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

	useEffect(() => {
		setIsEmailValid(EmailValidator.validate(email))
	}, [email])

	const onHandleNext = () => {
		let res 
		const question = {
			type: "email",
			question: {
				en: "Email",
				fr: "E-mail",
				de: "Email",
				en: "Correo electrónico",
			}
		}
		const answer = {
			text: {
				en: email,
				fr: email,
				de: email,
				es: email,
			}
		}

		if (result.some((res) => res.question.type === "email")) {
			res = result.map((res) => res.question.type === "email" ? { question, answer } : res)
		} else {
			res = [...result, { question, answer }]
		}

		localStorage.setItem("quiz_results", JSON.stringify(res))
		setResult(res)

		router.push(`/download`);
	}

	return (
		<div className="page_container">
			<Title>
				{selectedLanguage === 'en' && "Email"}
				{selectedLanguage === 'fr' && "E-mail"}
				{selectedLanguage === 'de' && "Email"}
				{selectedLanguage === 'es' && "Correo electrónico"}
			</Title>
			<Description>
				{selectedLanguage === 'en' && "Enter your email to get full access"}
				{selectedLanguage === 'fr' && "Entrez votre email pour obtenir un accès complet"}
				{selectedLanguage === 'de' && "Geben Sie Ihre E-Mail ein, um vollen Zugriff zu erhalten"}
				{selectedLanguage === 'es' && "Introduce tu email para obtener acceso completo"}
			</Description>

			<TextInput
				value={email}
				setValue={setEmail}
				placeholder="Your email" 
				isHelperActive={!isEmailValid}
				helperText={`Please enter ${email.trim().length === 0 ? 'your' : 'valid'} email`}
			/>

			<Description size="12px">
				By continuing I agree with 
				<Link href="" style={{color: "#D0006E"}}> Privacy policy</Link> and 
				<Link href="" style={{color: "#D0006E"}}> Terms</Link> of use.
			</Description>

			
			<PrimaryButton
				disabled={email.trim().length === 0 || !isEmailValid}
				onHandleClick={onHandleNext}
			>
				{selectedLanguage === 'en' && "Next"}
				{selectedLanguage === 'fr' && "Suivante"}
				{selectedLanguage === 'de' && "Nächste"}
				{selectedLanguage === 'es' && "Próxima"}
			</PrimaryButton>	
		</div>
	)
}