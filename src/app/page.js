import Link from "next/link";

export default function Home() {
	
  return (
    <main className="page_container">
			<Link href="/quiz/language" className="btn-link">
				Start quiz
			</Link>
    </main>
  );
}
