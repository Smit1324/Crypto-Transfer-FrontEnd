import React, { Children, useEffect } from 'react';
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils/constants';
import { useState } from 'react';

export const TransactionsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = async () => {
    const ethProvider = new ethers.BrowserProvider(ethereum);
    const signer = await ethProvider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)
    return transactionsContract
}

export const TransactionProvider = ({ children }) => {

    const [account, setAccount] = useState("")
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" })
    const [loading, setLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState()

    const handleChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value })
    }

    const getAllTransactions = async () => {
        try {

            const transactionContract = await getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => {
                return ({
                    from: transaction.sender,
                    to: transaction.reciever,
                    time: new Date(parseInt(transaction.timestamp) * 1000).toLocaleString(),
                    amount: parseInt(transaction.amount) * (10 ** -18),
                    keyword: transaction.keyword,
                    message: transaction.message
                })
            })

            setTransactions(structuredTransactions)

        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {

            if (!ethereum) return alert("Please Install Metamask")

            const accounts = await ethereum.request({ method: "eth_accounts" })
            if (accounts.length) {
                setAccount(accounts[0])
                getAllTransactions()
            } else {
                console.log("No Accounts Found");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const checkIfTransactionsExits = async () => {
        try {

            const transactionContract = await getEthereumContract();
            const transactionCount = await transactionContract.getTransactionsCount();

            window.localStorage.setItem('transactionCount', parseInt(transactionCount))

        } catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try {

            if (!ethereum) return alert("Please Install Metamask")

            const accounts = await ethereum.request({ method: "eth_requestAccounts" })
            setAccount(accounts[0])

        } catch (error) {
            console.log(error);
        }
    }

    const sendTransactions = async () => {
        try {

            if (!ethereum) return alert("Please Install Metamask");

            const { addressTo, amount, keyword, message } = formData
            const parsedAmount = ethers.parseEther(amount.toString());
            const hex = '0x' + parsedAmount.toString(16)

            const transactionContract = await getEthereumContract();

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: account,
                    to: addressTo,
                    gas: "0x5208", //21000 GWEI
                    value: hex
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

            setLoading(true);
            await transactionHash.wait();
            setLoading(false)

            const transactionCount = await transactionContract.getTransactionsCount();
            setTransactionCount(parseInt(transactionCount));

            window.location.reload();

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExits();
    }, [])

    useEffect(() => {

        if (ethereum) {
            const handleAccountsChanged = async (newAccounts) => {
                if (newAccounts.length > 0) {
                    setAccount(newAccounts[0]);
                } else {
                    setAccount('');
                }
            };

            window.ethereum.on('accountsChanged', handleAccountsChanged);

            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            };
        }

    }, [ethereum])


    return (
        <TransactionsContext.Provider value={{ connectWallet, account, formData, setFormData, handleChange, sendTransactions, loading, transactionCount, transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}