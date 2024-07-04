import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	const fetchedData = [
		{
			height: 5,
			root: {
				id: 1,
				slug: 'language',
				type: 'single-select',
				question: {
					'en': 'What is your preferred language?'
				},
				description: {
					'en': 'Choose language',
				},
				answers: [
					{
						id: 101,
						text: {
							'en': 'English',
							'fr': 'English',
							'de': 'English',
							'es': 'English',
						},
						img_URL: null,
						next: 200,
					},
					{
						id: 102,
						text: {
							'en': 'French',
							'fr': 'French',
							'de': 'French',
							'es': 'French',
						},
						img_URL: null,
						next: 200,
					},
					{
						id: 103,
						text: {
							'en': 'German',
							'fr': 'German',
							'de': 'German',
							'es': 'German',
						},
						img_URL: null,
						next: 200,
					},
					{
						id: 104,
						text: {
							'en': 'Spanish',
							'fr': 'Spanish',
							'de': 'Spanish',
							'es': 'Spanish',
						},
						img_URL: null,
						next: 200,
					}
				],
				prev: null,
				children: [
					{
						id: 200,
						slug: 'gender',
						type: 'single-select',
						question: {
							'en': 'What gender do you identify with?',
							'fr': 'À quel genre vous identifiez-vous ?',
							'de': 'Mit welchem Geschlecht identifizierst du dich?',
							'es': '',
						},
						description: {
							'en': 'Please share how do you identify yourself',
							'fr': 'Veuillez partager comment vous vous identifiez.',
							'de': '',
							'es': '',
						},
						answers: [
							{
								id: 2001,
								text: {
									'en': 'Female',
									'fr': '',
									'de': '',
									'es': '',
								},
								img_URL: null,
								next: 3000, 
							},
							{
								id: 2002,
								text: {
									'en': 'Male',
									'fr': '',
									'de': '',
									'es': '',
								},
								img_URL: null,
								next: 3000,
							},
							{
								id: 2003,
								text: {
									'en': 'Other',
									'fr': '',
									'de': '',
									'es': '',
								},
								img_URL: null,
								next: 3000,
							},
						],
						prev: 1,
						children: [
							{
								id: 3000,
								slug: 'age',
								type: 'single-select',
								question: {
									'en': 'What is your age?',
									'fr': '',
									'de': '',
									'es': '',
								},
								description: {
									'en': '',
									'fr': '',
									'de': '',
									'es': '',
								},
								answers: [
									{
										id: 30001,
										text: {
											'en': '18-29 years',
											'fr': '',
											'de': '',
											'es': '',
										},
										img_URL: null,
										next: 40000, 
									},
									{
										id: 30002,
										text: {
											'en': '30-39 years',
											'fr': '',
											'de': '',
											'es': '',
										},
										img_URL: null,
										next: 40000,
									},
									{
										id: 30003,
										text: {
											'en': '40-49 years',
											'fr': '',
											'de': '',
											'es': '',
										},
										img_URL: null,
										next: 40000,
									},
									{
										id: 30004,
										text: {
											'en': '50+',
											'fr': '',
											'de': '',
											'es': '',
										},
										img_URL: null,
										next: 41000,
									},
								],
								prev: 200,
								children: [
									{
										id: 40000,
										slug: 'hate_book',
										type: 'multiply-select',
										question: {
											'en': 'What do you hate the most in a book?',
											'fr': '',
											'de': '',
											'es': '',
										},
										description: {
											'en': '',
											'fr': '',
											'de': '',
											'es': '',
										},
										answers: [
											{
												id: 400001,
												text: {
													'en': 'Lack of logic',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 500000, 
											},
											{
												id: 400002,
												text: {
													'en': 'A slow speed',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 500000,
											},
											{
												id: 400003,
												text: {
													'en': 'Lack of humor',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 500000,
											},
											{
												id: 400004,
												text: {
													'en': 'Way too generic ending',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 500000,
											},
										],
										prev: 3000,
										children: [
											{
												id: 500000,
												slug: 'fav_topics',
												type: 'buble-select',
												question: {
													'en': 'What are your favorite topics?',
													'fr': '',
													'de': '',
													'es': '',
												},
												description: {
													'en': 'Choose up to 3 topics you like',
													'fr': '',
													'de': '',
													'es': '',
												},
												answers: [
													{
														id: 5000001,
														text: {
															'en': 'Werewolf',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000002,
														text: {
															'en': 'Action',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000003,
														text: {
															'en': 'Royal Obsession',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000004,
														text: {
															'en': 'Romance',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000005,
														text: {
															'en': 'Young Adult',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000006,
														text: {
															'en': 'Bad Boy',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5000007,
														text: {
															'en': 'Billionaire',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
												],
												prev: 40000,
												children: null
											}
										]
									},
									{
										id: 41000,
										slug: 'age',
										type: 'single-select',
										question: {
											'en': 'What do you hate the most in a book?',
											'fr': '',
											'de': '',
											'es': '',
										},
										description: {
											'en': '',
											'fr': '',
											'de': '',
											'es': '',
										},
										answers: [
											{
												id: 410001,
												text: {
													'en': 'Lack of logic',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 510000, 
											},
											{
												id: 410002,
												text: {
													'en': 'A slow speed',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 510000,
											},
											{
												id: 410003,
												text: {
													'en': 'Lack of humor',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 510000,
											},
											{
												id: 410004,
												text: {
													'en': 'Way too generic ending',
													'fr': '',
													'de': '',
													'es': '',
												},
												img_URL: null,
												next: 510000,
											},
										],
										prev: 3000,
										children: [
											{
												id: 510000,
												slug: 'fav_topics',
												type: 'buble-select',
												question: {
													'en': 'What are your favorite topics?',
													'fr': '',
													'de': '',
													'es': '',
												},
												description: {
													'en': 'Choose up to 3 topics you like',
													'fr': '',
													'de': '',
													'es': '',
												},
												answers: [
													{
														id: 5100001,
														text: {
															'en': 'Werewolf',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5100002,
														text: {
															'en': 'Action',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
													{
														id: 5100003,
														text: {
															'en': 'Royal Obsession',
															'fr': '',
															'de': '',
															'es': '',
														},
														img_URL: null,
														next: null, 
													},
												],
												prev: 40000,
												children: null
											}
										]
									}
								]
							}
						]
					}
				]
			}
		}		
	]

  return (
    <main className={styles.main}>
     
    </main>
  );
}
