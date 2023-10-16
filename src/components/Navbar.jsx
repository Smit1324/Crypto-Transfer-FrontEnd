import React, { useContext, useState } from 'react'
import { RiUserSharedFill } from "react-icons/ri";

import Logo from "../assets/Logo.png"
import MetaMask from "../assets/MetaMask.png"
import { TransactionsContext } from '../context/TransactionsContext';

const Navbar = () => {

  const { connectWallet, account } = useContext(TransactionsContext)

  return (
    <div className='flex items-center justify-between px-14 py-3'>

      <div className='w-44 h-44 absolute right-0 top-0 rounded-bl-full -z-50 eff1'></div>

      <div>
        <img src={Logo} alt="logo" className='w-16 h-16' />
      </div>
      <div className='flex items-center justify-center ms-10'>
        <img src={MetaMask} alt="Add" className='w-12 h-12' />
        <p className='font-medium ms-5 text-white'>{account !== "" ? account : 'NO WALLET CONNECTED'}</p>
      </div>
      < button
        className={account ? `h-12 w-32 flex items-center justify-center border-2 border-blue-700 rounded-3xl font-medium bg-blue-700 text-white cursor-default` : `h-12 w-32 flex items-center justify-center border-2 border-blue-700 rounded-3xl text-blue-500 font-medium hover:bg-blue-700 hover:text-white`}
        onClick={account ? e => e.preventDefault() : connectWallet}
      >
        {account ? 'Connected' : 'Connect'}
      </button >
    </div>
  )
}

export default Navbar