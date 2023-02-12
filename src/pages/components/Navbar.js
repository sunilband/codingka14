import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    
    <nav className=' bg-[#191A19] flex justify-between pr-9 pl-2 items-center '>
        <Link href="/"><h2 className='font-bold text-white pl-2'>{`<CodingKa14/>`}</h2></Link>
        <ul className="flex space-x-4 py-4 font-bold">
        
        <li className='cursor-pointer text-white hover:underline hover:text-[#3D2C8D]'><Link href="/">Home</Link></li>  
            <li className='cursor-pointer text-white hover:underline hover:text-[#3D2C8D]'><Link href="/components/About">About</Link></li>
            <Link href="/components/Blog"><li className='cursor-pointer text-white hover:underline hover:text-[#3D2C8D]'>Blog</li></Link>
            <Link href="/components/Contact"><li className='cursor-pointer text-white hover:underline hover:text-[#3D2C8D] '>Contact</li></Link>  
        </ul>
    </nav>
  )
}

export default Navbar