import { mkConfig, generateCsv, download } from "export-to-csv";

export const generateFile = async(result, selectedLanguage) =>{
	const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: "quiz_results" });
	const csvResult = result.map((item, index) => {
		return {
			ORDER: index+1,
			TITLE: item.question.question[selectedLanguage],
			TYPE: item.question.type,
			ANSWER: item.question.type === 'single-select'
								? item.answer.text[selectedLanguage]
								: item.answers.map((a) => a.text[selectedLanguage]).join(', ')
		}
	});

	const csv = generateCsv(csvConfig)(csvResult);
	download(csvConfig)(csv)
}