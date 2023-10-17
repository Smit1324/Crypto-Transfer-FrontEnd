import React, { useContext } from 'react'

import Logo from "../assets/Logo.png"
import { TransactionsContext } from '../context/TransactionsContext'

const Footer = () => {

    const { account, transactions } = useContext(TransactionsContext)

    return (
        <div className='w-full md:h-48 h-24 flex items-center justify-center relative'>
            {account ? transactions && <>
                <div className='w-96 h-32 absolute left-1/4 bottom-0 ms-12 rounded-t-full -z-50 eff4 md:block hidden'></div>
                <div className='w-96 h-32 absolute left-1/3 bottom-0 ms-12 rounded-t-full -z-50 eff4 md:block hidden'></div>
                <div className='w-96 h-32 absolute left-1/2 bottom-0 ms-12 rounded-t-full -z-50 eff4 md:block hidden'></div>
            </>
                :
                ""
            }

            <div className='w-8/12 flex flex-col items-center justify-between md:space-y-5 space-y-3'>

                <div className='w-full md:py-5 py-1 flex items-center justify-center border-b border-gray-600'>

                    <div>
                        <img src={Logo} alt="logo" className='md:w-16 w-12 md:h-16 h-12' />
                    </div>
                    <p className='md:text-xl text-bg logo'>CryptoTransfer</p>

                </div>

                <div>
                    <p className='md:text-sm text-xs font-thin text-center'>CryptoTransfer © 2023 | All Rights Reserved</p>
                </div>

            </div>

        </div>
    )
}

export default Footer