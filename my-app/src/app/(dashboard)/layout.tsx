import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import logo from '../../../public/logo.png'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'


const DashboardLayout = ({ children}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='h-screen flex'>
        
        {/* ---- Left ---- */}
        <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>

          <Link href='/' className='flex justify-center items-center gap-2 lg:justify-start '>
           <Image src={logo} alt='logo' width={32} height={32}/>
           <span className='hidden lg:block font-bold'>LamaSchool</span>
          </Link>

          <Menu/>
        </div>


        {/* ---- Right ---- */}
        <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]  flex flex-col'>
          <Navbar/>
          {children}
        </div>
    </div>
  )
}

export default DashboardLayout