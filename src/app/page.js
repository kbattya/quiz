import Link from "next/link";

export default function Home() {
	
  return (
    <main className="page_container">
			<Link href="/quiz/language">
				Start quiz
			</Link>
    </main>
  );
}
