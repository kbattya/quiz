import PrimaryButton from "./client/styled-components/buttons/PrimaryButton";
import Link from "next/link";

export default function Home() {
	
  return (
    <main className="page_container">
			<Link href="/quiz/language">
				<PrimaryButton>Start quiz</PrimaryButton>
			</Link>
    </main>
  );
}
