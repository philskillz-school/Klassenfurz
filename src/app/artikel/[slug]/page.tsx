import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Article } from '../../../models';

async function getArticleById(postId: string) {
    console.log("Fetching article with id: ", postId);
    return {
        postId,
        title: "Erster Post",
        content: "Was geht yallah. Du bist kandidat!!!! Dies ist der erste Post. Ich hoffe, dass er euch gefällt. Philskillz ist der beste. Philskillz out",
        author: "Admin",
        authorColor: "#9B0C0C",
        date: new Date()
    };
}

export default async function ArticlePage({ params }: { params: { slug: string }}) {
    const postId = params.slug;
    const article = await getArticleById(postId);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='px-4 py-2 border border-gray-800 bg-[#171717] shadow-[0_0px_15px_3px_rgba(35,0,70,0.6)] rounded ease-in-out duration-300 flex flex-col w-full max-w-screen-lg'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-5xl w-9/12 truncate'>{article.title}</h1>
                    <p className='text-right w-3/12 truncate text-gray-400'>von <span style={{ color: article.authorColor }}>{article.author}</span></p>
                </div>
                <p className='mt-2 mb-4 text-gray-300'>{article.content}</p>
                <div className='w-full flex'>
                    <p className='w-full text-right text-gray-400'>{article.date.toISOString()}</p>
                </div>
            </div>
            <div className='border border-gray-800 bg-[#171717] shadow-[0_0px_15px_3px_rgba(35,0,70,0.6)] rounded ease-in-out duration-300 flex flex-row w-full max-w-screen-lg mt-2 min-h-10'>
                <div className='flex-grow'></div>
                <button className='px-4 w-fit bg-gray-800'>
                    Edit
                </button>
                <button className='px-4 rounded-r w-fit bg-red-800'>
                    Delete
                </button>
            </div>
        </div>
    );
}
