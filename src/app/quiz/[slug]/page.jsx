export const revalidate = 60;
import QuizeClient from "../client/quiz";

import { questions } from '../../data.json';

export default async function Quiz({ params }) {
	const res = []

	console.log(questions.find((item) => item.id == params.slug))
  return (
    <QuizeClient
			question={questions.find((item) => item.id == params.slug)}
			length={questions.length}
			res={res}
    />
  );
}