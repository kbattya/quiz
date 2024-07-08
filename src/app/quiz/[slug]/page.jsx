export const revalidate = 60;
import QuizeClient from "../../client/quiz";

import { questions } from '../../data.json';

export default async function Quiz({ params }) {
	const res = []
	const length = 5

  return (
    <QuizeClient
			question={questions.find((item) => item.slug == params.slug)}
			length={length}
			res={res}
    />
  );
}