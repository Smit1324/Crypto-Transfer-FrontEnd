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
        <div className='w-full flex items-center justify-center mt-20'>

            <div className='w-11/12 flex items-start justify-between'>

                <div className='w-1/2 flex flex-col items-start justify-start'>

                    <div className='w-72 h-72 absolute top-52 left-40 rounded-full -z-50 eff2'></div>

                    <p className='text-4xl font-medium tracking-wide'>
                        Send Cryptos WorldWide with no restrictions & Transaction fees as small as your pen*s
                    </p>

                    <div className='grid grid-cols-3 mt-10'>
                        <div className='border rounded-tl-xl w-44 h-16 flex items-center justify-center'>Decentralised</div>
                        <div className='border w-44 h-16 flex items-center justify-center'>Security</div>
                        <div className='border rounded-tr-xl w-44 h-16 flex items-center justify-center'>Ethereum</div>
                        <div className='border rounded-bl-xl w-44 h-16 flex items-center justify-center'>Web3</div>
                        <div className='border w-44 h-16 flex items-center justify-center'>Low Fee</div>
                        <div className='border rounded-br-xl w-44 h-16 flex items-center justify-center'>Blockchain</div>
                    </div>

                    < button
                        className={account ? `h-14 w-11/12 flex items-center justify-center border-2 border-blue-700 rounded-2xl text-lg font-medium bg-blue-700 text-white cursor-default mt-10` : `h-14 w-11/12 flex items-center justify-center border-2 border-blue-700 rounded-2xl text-blue-500 text-lg font-medium hover:bg-blue-700 hover:text-white mt-10`}
                        onClick={account ? e => e.preventDefault() : connectWallet}
                    >
                        {account ? 'Wallet Connected' : 'Connect Wallet'}
                    </button >

                </div>

                <div className='w-1/2 flex flex-col items-center justify-center space-y-5'>

                    <div className='w-8/12 h-44 flex flex-col items-start justify-between bg-gradient-to-br from-[#00a2ffe8] to-[#ff0099e2] rounded-xl'>

                        <div className='flex items-center justify-center my-2 ms-1'>

                            <img src={Eth} alt="eth" className='w-6 h-6' />
                            <p className='text-sm font-light'>Ethereum</p>

                        </div>

                        <p className='font-thin text-sm mb-3 ms-3'>{account ? account : "No Account"}</p>

                    </div>

                    <form className='w-full flex flex-col items-end justify-start space-y-5'>

                        <input
                            type="text"
                            className='w-10/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter Reciever's address"
                            value={formData.addressTo}
                            onChange={e => handleChange(e, "addressTo")}
                        />

                        <input
                            type="number"
                            className='w-10/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={e => handleChange(e, "amount")}
                        />

                        <input
                            type="text"
                            className='w-10/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Enter Keyword"
                            value={formData.keyword}
                            onChange={e => handleChange(e, "keyword")}
                        />

                        <input
                            type="text"
                            className='w-10/12 h-12 rounded-lg px-3 outline-none border-2 border-white bg-transparent text-white'
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={e => handleChange(e, "message")}
                        />

                        <button
                            className={account ? loading ? `h-12 w-10/12 flex items-center justify-center border-2 border-blue-700 rounded-xl bg-blue-700 mt-9 cursor-not-allowed` : `h-12 w-10/12 flex items-center justify-center border-2 border-blue-700 rounded-xl text-blue-500 text-lg font-medium hover:bg-blue-700 hover:text-white mt-9` : `h-14 w-10/12 flex items-center justify-center border-2 border-gray-600 rounded-xl text-lg font-medium text-gray-600 mt-9 cursor-not-allowed`}
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