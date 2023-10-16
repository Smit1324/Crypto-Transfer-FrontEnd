import React, { useContext } from 'react'

import Logo from "../assets/Logo.png"
import { TransactionsContext } from '../context/TransactionsContext'

const Footer = () => {

    const { account, transactions } = useContext(TransactionsContext)

    return (
        <div className='w-full h-48 flex items-center justify-center relative'>
            {account ? transactions && <>
                <div className='w-96 h-32 absolute left-1/4 bottom-0 ms-12 rounded-t-full -z-50 eff4'></div>
                <div className='w-96 h-32 absolute left-1/3 bottom-0 ms-12 rounded-t-full -z-50 eff4'></div>
                <div className='w-96 h-32 absolute left-1/2 bottom-0 ms-12 rounded-t-full -z-50 eff4'></div>
            </>
                :
                ""
            }

            <div className='w-8/12 flex flex-col items-center justify-between space-y-5'>

                <div className='w-full py-5 flex items-center justify-center border-b border-gray-600'>

                    <div>
                        <img src={Logo} alt="logo" className='w-16 h-16' />
                    </div>
                    <p className='text-xl logo'>CryptoTransfer</p>

                </div>

                <div>
                    <p className='text-sm font-thin'>CryptoTransfer © 2023 | All Rights Reserved</p>
                </div>

            </div>

        </div>
    )
}

export default Footer