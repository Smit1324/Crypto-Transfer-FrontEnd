import React, { useContext } from 'react'
import { Oval } from 'react-loader-spinner'

import { TransactionsContext } from '../context/TransactionsContext'
import Eth from '../assets/Eth-Logo.png'

const Hero = () => {

    const { connectWallet, account, formData, handleChange, sendTransactions, loading } = useContext(TransactionsContext)

    const l = true;

    const handleSubmit = e => {
        e.preventDefault();

        const { addressTo, amount, keyword, message } = formData

        if (!addressTo || !amount || !keyword || !message) return alert("Fill all the credentials")

        if (amount.includes('e')) return alert("Invalid amount")

        sendTransactions();
    }

    return (
        <div className='w-full flex items-center justify-center md:mt-20 mt-10'>

            <div className='w-11/12 flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center'>

                <div className='md:w-1/2 flex flex-col md:items-start items-center md:justify-start justify-center relative'>

                    <div className='w-72 h-72 absolute md:top-32 md:left-40 top-72 rounded-full -z-50 eff2'></div>

                    <p className='md:text-4xl text-3xl font-medium tracking-wide text-center md:text-left'>
                        Send Cryptos WorldWide with no restrictions & Transaction fees as low as a penny
                    </p>

                    <div className='grid grid-cols-3 mt-10'>
                        <div className='border rounded-tl-xl md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Decentralised</div>
                        <div className='border md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Security</div>
                        <div className='border rounded-tr-xl md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Ethereum</div>
                        <div className='border rounded-bl-xl md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Web3</div>
                        <div className='border md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Low Fee</div>
                        <div className='border rounded-br-xl md:w-44 w-28 md:h-16 h-16 flex items-center justify-center md:text-base text-xs'>Blockchain</div>
                    </div>

                    < button
                        className={account ? `md:h-14 h-12 md:w-11/12 w-full flex items-center justify-center border-2 border-blue-700 md:rounded-2xl rounded-xl md:text-lg font-medium bg-blue-700 text-white cursor-default md:mt-10 mt-8` : `md:h-14 h-12 md:w-11/12 w-full flex items-center justify-center border-2 border-blue-700 md:bg-transparent bg-blue-700 md:rounded-2xl rounded-xl text-blue-500 md:text-lg font-medium hover:bg-blue-700 hover:text-white md:mt-10 mt-8`}
                        onClick={account ? e => e.preventDefault() : connectWallet}
                    >
                        {account ? 'Wallet Connected' : 'Connect Wallet'}
                    </button >

                </div>

                <div className='md:w-1/2 w-full flex flex-col items-center justify-center space-y-5 md:mt-0 mt-10'>

                    <div className='md:w-8/12 w-11/12 md:h-44 h-36 flex flex-col items-start justify-between bg-gradient-to-br from-[#00a2ffe8] to-[#ff0099e2] rounded-xl'>

                        <div className='flex items-center justify-center my-2 ms-1'>

                            <img src={Eth} alt="eth" className='w-6 h-6' />
                            <p className='text-sm font-light'>Ethereum</p>

                        </div>

                        <p className='font-thin md:text-sm text-xs mb-3 ms-3 md:block hidden'>{account ? account : "No Account"}</p>
                        <p className='font-thin md:text-sm text-xs mb-3 ms-3 block md:hidden'>{account ? account.slice(0, 5) + '.......' + account.slice(-1) : "No Account"}</p>

                    </div>

                    <form className='w-full flex flex-col md:items-end items-center justify-start space-y-5'>

                        <input
                            type="text"
                            className='md:w-10/12 w-11/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter Reciever's address"
                            value={formData.addressTo}
                            onChange={e => handleChange(e, "addressTo")}
                        />

                        <input
                            type="number"
                            className='md:w-10/12 w-11/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={e => handleChange(e, "amount")}
                        />

                        <input
                            type="text"
                            className='md:w-10/12 w-11/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter Keyword"
                            value={formData.keyword}
                            onChange={e => handleChange(e, "keyword")}
                        />

                        <input
                            type="text"
                            className='md:w-10/12 w-11/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={e => handleChange(e, "message")}
                        />

                        <button
                            className={account ? loading ? `h-12 md:w-10/12 w-11/12 flex items-center justify-center border-2 border-blue-700 rounded-xl bg-blue-700 mt-9 cursor-not-allowed` : `h-12 md:w-10/12 w-11/12 flex items-center justify-center border-2 border-blue-700 rounded-xl md:text-blue-500 text-white md:bg-transparent bg-blue-700 text-lg font-medium hover:bg-blue-700 hover:text-white mt-9` : `h-14 md:w-10/12 w-11/12 flex items-center justify-center border-2 border-gray-600 rounded-xl text-lg font-medium text-gray-600 mt-9 cursor-not-allowed`}
                            onClick={account ? loading ? e => e.preventDefault() : handleSubmit : e => e.preventDefault()}
                        >
                            {
                                loading ?
                                    <Oval
                                        height={30}
                                        width={30}
                                        color="white"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="white"
                                        strokeWidth={4}
                                        strokeWidthSecondary={4}

                                    />
                                    :
                                    "Transfer Amount"
                            }
                        </button>

                    </form>

                </div>

            </div>

        </div >
    )
}

export default Hero