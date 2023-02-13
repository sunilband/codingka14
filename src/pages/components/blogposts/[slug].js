import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


const Post = (props) => {

    const [blog, setBlog] = useState(props.myBlog);


    return <div>
        <main className='w-[70%] mx-auto'>
            <h1 className="text-4xl text-center py-5">{blog && blog.title}</h1>
            <hr />
            <div className="text-2xl  text-justify px-7 py-5">
                {blog && blog.content}
            </div>
        </main>
    </div>;
};
export async function getServerSideProps(context) {
    // console.log(context.query)
    // const router = useRouter();
    const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}
export default Post;
