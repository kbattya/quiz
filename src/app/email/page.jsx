'use client'

import React, { useEffect, useState } from "react";
import Title from "../client/styled-components/typography/Title";
import Description from "../client/styled-components/typography/Description";
import PrimaryButton from "../client/styled-components/buttons/PrimaryButton";
import TextInput from "../client/styled-components/text-input/TextInput";
import { useRouter } from "next/navigation";


export default function Email () {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [selectedLanguage, setSelectedLanguage] = useState()
	const [result, setResult] = useState([])

	const translate = {
		en: {
			title: 'Email',
			description: 'Enter your email to get full access',
			input: {
				placeholder: 'Your email',
				validation_error: {
					empty: 'Please enter your email',
					invalid: 'Please enter valid email'
				}
			},
			privacy: `By continuing I agree with 
						<a href="">Privacy policy</a> and 
						<a href="">Terms of use</a>.`,
			button: 'Next'
		},
		fr: {
			title: 'E-mail',
			description: 'Entrez votre email pour obtenir un accès complet',
			input: {
				placeholder: 'Votre email',
				validation_error: {
					empty: 'Veuillez entrer votre email',
					invalid: 'Veuillez entrer une adresse e-mail valide'
				}
			},
			privacy: `En continuant, j'accepte la
						<a href="">Politique de confidentialité</a> et 
						<a href="">Conditions d'utilisation</a>.`,
			button: 'Suivante'
		},
		de: {
			title: 'Email',
			description: 'Geben Sie Ihre E-Mail ein, um vollen Zugriff zu erhalten',
			input: {
				placeholder: 'Deine E-Mail',
				validation_error: {
					empty: 'Bitte geben Sie ihre E-Mail-Adresse ein',
					invalid: 'Bitte eine gültige Email eingeben'
				}
			},
			privacy: `Indem ich fortfahre, stimme ich der
						<a href="">Datenschutzrichtlinie</a> und den 
						<a href="">Nutzungsbedingungen zu</a>.`,
			button: 'Nächste'
		},
		es: {
			title: 'Correo electrónico',
			description: 'Introduce tu email para obtener acceso completo',
			input: {
				placeholder: 'Tu correo electrónico',
				validation_error: {
					empty: 'Por favor introduzca su correo electrónico',
					invalid: 'Por favor introduzca un correo electrónico válido'
				}
			},
			privacy: `Al continuar, acepto la 
						<a href="">Política de privacidad</a> y 
						<a href="">Condiciones de uso.</a>.`,
			button: 'Próxima'
		}
	}	

	function validateEmail(email) {
		const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return regex.test(email);
	 }

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
		setIsEmailValid(validateEmail(email))
	}, [email])

	const onHandleNext = () => {
		let res 
		const question = {
			type: "email",
			question: {
				en: "Email",
				fr: "E-mail",
				de: "Email",
				es: "Correo electrónico",
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
		selectedLanguage && 
			<div className="page_container">
				<Title>
					{translate[selectedLanguage]?.title}
				</Title>
				<Description>
					{translate[selectedLanguage]?.description}
				</Description>

				<TextInput
					value={email}
					setValue={setEmail}
					placeholder={translate[selectedLanguage]?.input?.placeholder}
					isHelperActive={!isEmailValid}
					helperText={email.trim().length === 0
												? translate[selectedLanguage]?.input?.validation_error.empty
												: translate[selectedLanguage]?.input?.validation_error.invalid}
				/>

				<Description size="12px">
					<p dangerouslySetInnerHTML={{ __html: translate[selectedLanguage]?.privacy }} />
				</Description>
				
				<PrimaryButton
					disabled={email.trim().length === 0 || !isEmailValid}
					onHandleClick={onHandleNext}
				>
					{translate[selectedLanguage]?.button}
				</PrimaryButton>	
			</div>
	)
}