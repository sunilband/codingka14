import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    
    <nav className=' bg-cyan-500 flex justify-between pr-9 pl-2 items-center '>
        <Link href="/"><h2 className='font-bold'>{`<CodingKa14/>`}</h2></Link>
        <ul className="flex space-x-4 py-4 font-bold hover:scale-1">
        
        <li className='cursor-pointer text-white hover:underline'><Link href="/">Home</Link></li>  
            <li className='cursor-pointer text-white hover:underline'><Link href="/components/About">About</Link></li>
            <Link href="/components/Blog"><li className='cursor-pointer text-white hover:underline'>Blog</li></Link>
            <Link href="/components/Contact"><li className='cursor-pointer text-white hover:underline'>Contact</li></Link>  
        </ul>
    </nav>
  )
}

export default Navbar