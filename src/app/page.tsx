import { Article } from "@/models";
import Link from "next/link";
import { useState } from "react";

export async function getRecentArticles(number: number = 5): Promise<Article[]> {
    return [
        {
            postId: "9d9fe4",
            title: "Erster Post",
            content: "Was geht yallah.\nDu bist kandidat!!!!\nDies ist der erste Post. Ich hoffe, dass er euch gefällt.\nPhilskillz ist der beste. \n\nPhilskillz out",
            author: "Admin",
            authorColor: "#9B0C0C",
            date: new Date()
        },
        {
            postId: "3f4578",
            title: "Zweiter Post",
            content: "Dies ist der zweite Post",
            author: "User1",
            authorColor: "#2BF526",
            date: new Date()
        },
        {
            postId: "cab69f",
            title: "Dritter Post",
            content: "Dies ist der dritte Post",
            author: "User2",
            authorColor: "#2BF526",
            date: new Date()
        },
        {
            postId: "85440e",
            title: "Vierter Post",
            content: "Dies ist der vierte Post",
            author: "User3",
            authorColor: "#2BF526",
            date: new Date()
        },
        {
            postId: "f3dabd",
            title: "Fünfter Post",
            content: "Dies ist der fünfte Post",
            author: "User4",
            authorColor: "#2BF526",
            date: new Date()
        }
    ].slice(0, number);
}

export default async function Home() {
    const articles = await getRecentArticles();
    
    return (
        <>
            <main className="my-3 flex flex-col">
                <h1 className="text-5xl text-center text-t-purple">Willkommen auf Klassenfurz,</h1>
                <h3 className="text-2xl text-center text-gray-400">der besten Schülerzeitung überhaupt</h3>
                <div className="flex items-center justify-center pt-4">
                    <section className="max-w-screen-xl px-[69px] mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {articles != null && articles.map((post, index) => 
                            <Link key={index} href={`/artikel/${post.postId}`}>
                                <div className="px-4 py-2 border border-gray-800 bg-[#171717] shadow-[0_0px_15px_3px_rgba(35,0,70,0.6)] rounded ease-in-out duration-300 hover:scale-105 flex flex-col h-full min-h-20">
                                    <h2 className="text-lg truncate whitespace-nowrap">{post.title}</h2>
                                    <p className="truncate line-clamp-4 text-pretty mb-auto text-gray-300">{post.content.replace("\n", " ")}</p>
                                    <div className="flex justify-between text-sm">
                                        <div className="w-1/2 truncate" style={{color: post.authorColor}}>{post.author}</div>
                                        <div className="w-1/2 text-right truncate text-gray-700">{post.date.toDateString()}</div>
                                    </div>
                                </div>
                            </Link>
                        )}
                        {articles == null && new Array(5).fill(0).map((_, index) => (
                            <>
                                <div key={index}>
                                    <div className="animate-pulse space-y-1 px-4 py-2 border border-gray-800 bg-[#171717] shadow-[0_0px_15px_3px_rgba(35,0,70,0.6)] rounded ease-in-out duration-300 hover:scale-105 flex flex-col h-full min-h-20">
                                        <h2 className="text-lg truncate whitespace-nowrap w-full bg-gray-200 w-full rounded-full">&nbsp;</h2>
                                        <p className="truncate line-clamp-4 text-pretty mb-auto text-gray-300 w-full bg-gray-200 w-full rounded-full">&nbsp;</p>
                                        <div className="flex justify-between text-sm">
                                            <div className="w-1/2 truncate w-full bg-gray-200 w-full rounded-full">&nbsp;</div>
                                            <div className="w-1/2 text-right truncate text-gray-700 w-full bg-gray-200 w-full rounded-full">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                        <Link href="/artikel">
                            <div className="px-4 py-2 border border-gray-800 bg-[#171717] shadow-[0_0px_15px_3px_rgba(35,0,70,0.6)] rounded ease-in-out duration-300 hover:scale-105 flex flex-col h-full justify-center items-center min-h-20">
                                <h2 className="text-lg truncate whitespace-nowrap">Alle Artikel anzeigen</h2>
                            </div>
                        </Link>
                    </section>
                </div>
            </main>
        </>
    );
}
