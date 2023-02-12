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
    // `./blogposts/${blogitem.slug}`
    const cardStyle='blog group w-96 py-5 my-7 mt-5 p-4 shadow-2xl rounded-2xl transition ease-in-out  bg-[#191A19] hover:-translate-y-1 hover:scale-105 hover:bg-[#30475E] duration-200 hover:shadow-3xl'
 
    return(<div className='blogs flex justify-between m-7 p-2 flex-wrap '>

      {blogs.map(blogitem=>{
        return(<div className={cardStyle} key={blogitem.title}>
          <Link href={`./blogposts/${blogitem.slug}`} passHref><h2 className='cursor-pointer text-center text-2xl text-white group-hover:text-white transition ease-in-out delay-200 font-bold'>{blogitem.title}</h2>
          <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700  group-hover:bg-white transition ease-in-out delay-300 ' />
            <p className='corsor-pointer  text-white font-semibold group-hover:text-white transition ease-in-out delay-400'>{blogitem.content.substr(0,140)}...</p>
            </Link>
          </div>)
      })}


      
      


     </div>) 
}

export default Blog