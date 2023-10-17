import React, { useContext, useState } from 'react'
import { IoWallet } from "react-icons/io5";

import Logo from "../assets/Logo.png"
import MetaMask from "../assets/MetaMask.png"
import { TransactionsContext } from '../context/TransactionsContext';

const Navbar = () => {

  const { connectWallet, account } = useContext(TransactionsContext)

  return (
    <div className='flex items-center justify-between md:px-14 md:py-3 px-2 py-3'>

      <div className='w-44 h-44 absolute md:right-0 top-0 right-1/4 rounded-bl-full -z-50 eff1'></div>

      <div>
        <img src={Logo} alt="logo" className='w-16 h-16' />
      </div>

      <div className='flex md:flex-row flex-col items-center justify-center md:ms-10'>
        <img src={MetaMask} alt="Add" className='w-12 h-12' />
        <p className='font-medium md:hidden text-white'>{account !== "" ? account.slice(0, 5) + '...' + account.slice(-1) : 'NO WALLET CONNECTED'}</p>
        <p className='font-medium md:block ms-5 hidden text-white'>{account !== "" ? account : 'NO WALLET CONNECTED'}</p>
      </div>

      < button
        className={account ? `h-12 w-32 hidden md:flex items-center justify-center border-2 border-blue-700 rounded-3xl font-medium bg-blue-700 text-white cursor-default` : `h-12 w-32 hidden md:flex items-center justify-center border-2 border-blue-700 rounded-3xl text-blue-500 font-medium hover:bg-blue-700 hover:text-white`}
        onClick={account ? e => e.preventDefault() : connectWallet}
      >

        {account ? 'Connected' : 'Connect'}

      </button >

      < button
        className={account ? `h-14 w-14 md:hidden flex items-center justify-center border-2 border-blue-400 rounded-full text-xl font-medium bg-blue-400 text-white cursor-default` : `h-14 w-14 md:hidden flex items-center justify-center border-2 border-blue-700 rounded-full text-xl text-white bg-blue-700 font-medium `}
        onClick={account ? e => e.preventDefault() : connectWallet}
      >

        {account ? <IoWallet /> : <IoWallet />}

      </button >

    </div>
  )
}

export default Navbar