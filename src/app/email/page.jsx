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

	useEffect(() => {
		setIsEmailValid(EmailValidator.validate(email))
	}, [email])

	return (
		<div className="page_container">
			<Title>Email</Title>
			<Description>Enter your email to get full access</Description>

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
				onHandleClick={() => {	
					router.push(`/download`);
				}}
			>
				Next
			</PrimaryButton>	
		</div>
	)
}