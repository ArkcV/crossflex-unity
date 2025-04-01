"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { IoMdBook, IoMdCheckboxOutline, IoMdFitness, IoMdWallet } from 'react-icons/io';
import { MdDashboard, MdHome, MdInventory, MdPendingActions, MdPeopleAlt } from 'react-icons/md';
import LogoutButton from './LogoutButton';

const menuItems = [
  {
    list: [
      { title: "Inicio", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Perfil", path: "/dashboard/profile", icon: <MdHome /> },
      { title: "Registrar", path: "/dashboard/registration", icon: <MdPendingActions /> },
      { title: "Planos", path: "/dashboard/plan", icon: <IoMdCheckboxOutline /> },
      { title: "Inscrição", path: "/dashboard/payment", icon: <IoMdWallet /> },
      { title: "Alunos", path: "/dashboard/members", icon: <MdPeopleAlt /> },
      { title: "Inventário", path: "/dashboard/inventory", icon: <MdInventory /> },
      { title: "Treinadores", path: "/dashboard/coaches", icon: <IoMdFitness /> },
      { title: "Ajuda", path: "/dashboard/help", icon: <IoMdBook /> },
    ],
  },
];

const Sidebar = () => {

  const [activeLink, setActiveLink] = useState<string>("/dashboard");

  return (
    <div className='sticky min-h-screen'>
      <div className='flex flex-col items-center gap-4 mb-6 mt-6'>
        <Image
          src="/person-circle-sidebar.png"
          alt="Background"
          width={50}
          height={50}
          className="object-cover"
        />
        <div className='flex flex-col items-center text-white-cf_white'>
          <span className='text-base font-bold'>GarageCross</span>
          <span className='text-xs'>GarageCross@test.com</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat, index) => (
          <li key={index} >
            <ul>
              {cat.list.map((item) => (
                <li 
                  key={item.path}
                  onClick={() => setActiveLink(item.path)}
                  className={`rounded-md text-blue-cf_blue hover:bg-white-cf_white hover:text-blue-cf_blue hover:font-bold ${activeLink === item.path ? ' bg-white-cf_white font-bold ' : ' text-white-cf_white'} `}>
                  <Link href={item.path} className='flex items-center p-2.5 gap-4 m-1'>
                   <span className='text-xl'>{item.icon}</span>
                   <span className='text-sm'>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
