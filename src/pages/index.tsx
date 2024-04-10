import Head from "next/head";
import Link from "next/link";

interface Post {
    postId?: string;
    title: string;
    content: string;
    author: string;
    authorColor?: string;
    date: Date;
}

export default function Home() {
    function getRecentPosts(number: number = 5): Post[] {
        return [
            {
            title: "Erster Post",
            content: "Was geht yallah. Du bist kandidat!!!! Dies ist der erste Post. Ich hoffe, dass er euch gefällt. Philskillz ist der beste. Philskillz out",
            author: "Admin",
            authorColor: "#9B0C0C",
            date: new Date()
            },
            {
            title: "Zweiter Post",
            content: "Dies ist der zweite Post",
            author: "User1",
            authorColor: "#2BF526",
            date: new Date()
            },
            {
            title: "Dritter Post",
            content: "Dies ist der dritte Post",
            author: "User2",
            authorColor: "#2BF526",
            date: new Date()
            },
            {
            title: "Vierter Post",
            content: "Dies ist der vierte Post",
            author: "User3",
            authorColor: "#2BF526",
            date: new Date()
            },
            {
            title: "Fünfter Post",
            content: "Dies ist der fünfte Post",
            author: "User4",
            authorColor: "#2BF526",
            date: new Date()
            }
        ].slice(0, number);
    }
    return (
        <>
            <main className="my-3">
                <h1 className="text-5xl text-center">Willkommen auf Klassenfurz,</h1>
                <h3 className="text-2xl text-center text-gray-400">der besten Schülerzeitung überhaupt</h3>
                <section className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {getRecentPosts().map((post, index) => (
                        <Link key={index} href={`/artikel/${post.postId}`}>
                            <div className="px-4 py-2  border rounded hover:-translate-y-1 flex flex-col hover:outline h-full">
                                <h2 className="text-lg truncate whitespace-nowrap">{post.title}</h2>
                                <p className="truncate line-clamp-4 text-pretty mb-auto text-gray-300">{post.content.replace("\n", " ")}</p>
                                <div className="flex justify-between text-sm">
                                    <div className="w-1/2 truncate" style={{color: post.authorColor}}>{post.author}</div>
                                    <div className="w-1/2 text-right truncate text-gray-700">{post.date.toDateString()}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link href="/artikel">
                        <div className="px-4 py-2 border rounded hover:-translate-y-1 flex flex-col justify-center items-center hover:outline h-full">
                            <h2 className="text-lg truncate whitespace-nowrap">Alle Artikel anzeigen</h2>
                        </div>
                    </Link>
                </section>
            </main>
        </>
    );
}
