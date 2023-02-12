import { Inter } from '@next/font/google'
import { useState,useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })
export default function Home() {


  const [blogs, setBlogs] = useState([]);
  const cardStyle='blog group w-96 py-5 my-7 mt-5 p-4 shadow-2xl rounded-2xl transition ease-in-out  bg-[#191A19] hover:-translate-y-1 hover:scale-105 hover:bg-[#30475E] duration-200 hover:shadow-3xl'
  

    useEffect(() => {
       
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                
                setBlogs(parsed)
            })
    }, [])


  return (
    <>
     
     <h1 className="text-5xl text-center mt-9 font-extrabold">{`CodingKa14`}</h1>
     <TypeAnimation className="text-3xl text-center mt-5 "
    // Same String at the start will only be typed once, initially
    sequence={[
  
    'A daily fix for all the <Coders/>👨‍💻',
    1000,
    'A daily fix for all the Gamers	🎮',
    1000,
    'A daily fix for all the technology enthusiasts📱',
    1000,
    
    
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
  
    deletionSpeed={30}
    wrapper="h2" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

     <h2 className='text-3xl font-bold font text-center mt-9 '>New Additions</h2>
     
     <div className='blogs flex justify-around m-7 p-2 flex-wrap'>

     {blogs.map(blogitem=>{
       if(blogs.indexOf(blogitem)<7)
       return(
        
         <div className={cardStyle} key={blogitem.title}>
        <Link href={`components/blogposts/${blogitem.slug}`} passHref><h2 className='cursor-pointer text-center text-2xl text-white group-hover:text-white transition ease-in-out delay-200 font-bold'>{blogitem.title}</h2>
        <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700  group-hover:bg-white transition ease-in-out delay-300 ' />
          <p className='corsor-pointer  text-white font-semibold group-hover:text-white transition ease-in-out delay-400'>{blogitem.content.substr(0,140)}...</p>
          </Link>
        </div>)
      })}
      </div>
    </>
  )
}
