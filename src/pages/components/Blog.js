import {React,useEffect,useState} from 'react'
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                
                setBlogs(parsed)
            })
    }, [])

    const cardStyle='blog  group  w-96 border-double border-2 m-2 mt-5 p-4 shadow-2xl rounded-2xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-105 hover:bg-cyan-500 duration-200 '
 
    return(<div className='blogs flex justify-between m-7 p-2 flex-wrap '>

      {blogs.map(blogitem=>{
        return(<div className={cardStyle} key={blogitem.title}>
        <Link href={`./blogposts/${blogitem.slug}`} passHref><h2 className='cursor-pointer text-2xl text-black group-hover:text-white transition ease-in-out delay-200'>{blogitem.title}</h2></Link>
        <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700  group-hover:bg-white transition ease-in-out delay-300 ' />
          <p className='cursor-pointer text-black font-semibold group-hover:text-white transition ease-in-out delay-400'>{blogitem.content.substr(0,140)}...</p>
        </div>)
      })}


      
      


     </div>) 
}

export default Blog