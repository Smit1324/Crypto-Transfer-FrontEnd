import React, { useContext } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

import { TransactionsContext } from '../context/TransactionsContext';
import Bubble from '../assets/Bubble.png'

const History = () => {

  const { account, transactions } = useContext(TransactionsContext)

  return (
    <div className='w-full flex items-center justify-center my-14 relative'>

      <div className='w-36 h-72 bg-white absolute right-0 rounded-l-full -z-50 eff3'></div>

      <div className='w-11/12 flex flex-col items-start justify-center'>

        <p className='text-3xl font-medium'>Older Transactions</p>

        {
          account ?
            transactions ?
              <div className='w-full flex flex-col items-center justify-center mt-10 mb-5 space-y-5'>

                {
                  [...transactions].reverse().map((transaction, index) => {
                    return (

                      <div className='w-11/12 h-44 flex items-end justify-between transition ease-in-out delay-50 duration-100 border-4 border-white rounded-xl rounder-xl hover:bg-white hover:text-black' key={index}>

                        <div className='flex flex-col items-start justify-center space-y-3 ms-5 mb-2'>

                          <div className='flex flex-col items-start justify-center'>
                            <p className='font-medium'>From : {transaction.from}</p>
                            <p className='font-medium'>To : {transaction.to}</p>
                          </div>
                          <div className='flex flex-col items-start justify-center space-y-1'>
                            <p className=''>{transaction.amount} ETH</p>
                            <p className='text-sm'>Keyword : {transaction.keyword}</p>
                            <p className='text-sm'>Message : {transaction.message}</p>
                            <p className='text-xs'>{transaction.time}</p>
                          </div>

                        </div>

                        <div className='mb-4 me-5'>
                          <p className='flex items-center justify-center font-extralight'><BsBoxArrowUpRight /> </p>
                        </div>

                      </div>

                    )
                  })
                }

              </div>
              :
              <div className='mb-8'>NO TRANSACTIONS YET</div>
            :
            <div className='mb-8'>NO WALLET CONNECTED</div>
        }

      </div>

      {account ? transactions && <img src={Bubble} alt="" className='w-72 h-72 absolute left-0 top-10 -z-50' /> : ""}

    </div>
  )
}

export default History