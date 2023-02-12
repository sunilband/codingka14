import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Post = () => {

    const [blog, setBlog] = useState();

    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])

    return <div>
        <main className='w-[70%] mx-auto'>
            <h1 className="text-4xl text-center py-5">{blog && blog.title}</h1>
            <hr />
            <div className="text-2xl text-center text-justify px-7 py-5">
                {blog && blog.content}
            </div>
        </main>
    </div>;
};

export default Post;
