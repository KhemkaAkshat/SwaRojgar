import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Lock,
  Unlock,
  AlertTriangle,
  ExternalLink,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";

import { useNavigate } from 'react-router-dom';

const CustomerEscrowInterface = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/ResolutionCenter');
  };
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState("LOCKED");
  const [amount, setAmount] = useState("");
  const [releaseAmount, setReleaseAmount] = useState("");
  const [conflictRaised, setConflictRaised] = useState(false);
  const [resolutionProgress, setResolutionProgress] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isMetaMaskOpen, setIsMetaMaskOpen] = useState(false);
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  useEffect(() => {
    // Simulating wallet connection
    setWalletAddress("0x1234...5678");
  }, []);

  const handleVisitResolutionCenter = () => {
    console.log("Navigating to Resolution Center");
    // In a real app, you would use navigation here
  };

  const handleRefresh = () => {
    setBalance((prevBalance) => prevBalance + Math.random() * 10);
    addTransaction("Refresh", 0);
  };

  const addTransaction = (type, amount) => {
    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      date: new Date().toLocaleString(),
    };
    setTransactionHistory((prev) => [newTransaction, ...prev]);
  };

  const handleDeposit = () => {
    if (amount && !isNaN(amount)) {
      const depositAmount = parseFloat(amount);
      setBalance((prevBalance) => prevBalance + depositAmount);
      setAmount("");
      addTransaction("Deposit", depositAmount);
    }
  };

  const handleRelease = () => {
    if (releaseAmount && !isNaN(releaseAmount)) {
      const releaseAmountValue = parseFloat(releaseAmount);
      if (releaseAmountValue <= balance) {
        setBalance((prevBalance) => prevBalance - releaseAmountValue);
        setReleaseAmount("");
        setStatus("RELEASED");
        addTransaction("Funds Released", releaseAmountValue);
      } else {
        alert("Insufficient balance to release the specified amount.");
      }
    }
  };

  const handleRaiseConflict = () => {
    setConflictRaised(true);
    setStatus("DISPUTED");
    addTransaction("Conflict Raised", 0);
    setShowConflictDialog(false);
  };

  const handleResolveConflict = () => {
    setConflictRaised(false);
    setStatus("RESOLVED");
    setResolutionProgress(0);
    addTransaction("Conflict Resolved", 0);
  };

  const handleTransaction = () => {
    if (recipientAddress && transferAmount && !isNaN(transferAmount)) {
      const transferAmountValue = parseFloat(transferAmount);
      if (transferAmountValue <= balance) {
        setBalance((prevBalance) => prevBalance - transferAmountValue);
        addTransaction("Transfer", transferAmountValue);
        setTransferAmount("");
        setRecipientAddress("");
        setShowTransactionDialog(false);
      } else {
        alert("Insufficient balance for this transaction.");
      }
    } else {
      alert("Please enter a valid wallet address and amount.");
    }
  };

  return (
    <div onClick={handleRedirect} className="p-6 max-w-2xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-lg">
      <div onClick={handleRedirect} className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Customer Escrow Interface
      </div>
      <div onClick={handleRedirect} className="space-y-6">
        <div onClick={handleRedirect} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Wallet Address:</span>
          <span className="text-xl font-bold text-indigo-600">
            {walletAddress
              ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  38
                )}`
              : "Not Connected"}
          </span>
        </div>

        <div onClick={handleRedirect} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Escrowed Amount:</span>
          <span className="text-2xl font-bold text-green-600">${balance.toFixed(2)}</span>
        </div>

        <div onClick={handleRedirect} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Status:</span>
          <div onClick={handleRedirect} className="flex items-center">
            {status === "LOCKED" && <Lock className="mr-2 text-yellow-500" />}
            {status === "RELEASED" && <Unlock className="mr-2 text-green-500" />}
            {status === "DISPUTED" && (
              <AlertTriangle className="mr-2 text-red-500" />
            )}
            {status === "RESOLVED" && (
              <CheckCircle2 className="mr-2 text-blue-500" />
            )}
            <span
              className={`font-bold text-lg ${
                status === "LOCKED"
                  ? "text-yellow-500"
                  : status === "RELEASED"
                  ? "text-green-500"
                  : status === "DISPUTED"
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <div onClick={handleRedirect} className="flex bg-white p-2 rounded-lg shadow">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleDeposit}
            className="bg-green-500 text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition duration-300"
          >
            <CreditCard className="mr-2 inline" size={16} />
            Deposit
          </button>
        </div>

        <div onClick={handleRedirect} className="flex bg-white p-2 rounded-lg shadow">
          <input
            type="number"
            value={releaseAmount}
            onChange={(e) => setReleaseAmount(e.target.value)}
            placeholder="Enter amount to release"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleRelease}
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            <Unlock className="mr-2 inline" size={16} />
            Release
          </button>
        </div>

        <div onClick={handleRedirect} className="flex justify-between mt-6">
          <button
            onClick={() => setShowConflictDialog(true)}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            <AlertCircle className="mr-2 inline" size={16} />
            Raise Conflict
          </button>
          <button
            onClick={handleResolveConflict}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            <CheckCircle2 className="mr-2 inline" size={16} />
            Resolve Conflict
          </button>
        </div>

        <div onClick={handleRedirect} className="flex justify-between mt-6">
          <button
            onClick={handleVisitResolutionCenter}
            className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300"
          >
            <MessageSquare className="mr-2 inline" size={16} />
            Visit Resolution Center
          </button>
          <button
            onClick={handleRefresh}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            <RefreshCcw className="mr-2 inline" size={16} />
            Refresh Balance
          </button>
        </div>

        {conflictRaised && (
          <div onClick={handleRedirect} className="mt-4 bg-red-100 p-4 rounded-lg shadow">
            <div onClick={handleRedirect} className="flex justify-between">
              <span className="font-bold text-red-500">
                Conflict Raised - Resolution in Progress...
              </span>
              <span>{resolutionProgress}%</span>
            </div>
            <div onClick={handleRedirect} className="h-2 bg-red-200 mt-2 rounded">
              <div onClick={handleRedirect}
                className="h-full bg-red-500 rounded transition-all duration-500 ease-in-out"
                style={{ width: `${resolutionProgress}%` }}
              />
            </div>
          </div>
        )}

        <div onClick={handleRedirect} className="flex items-center mt-6 bg-white p-2 rounded-lg shadow">
          <input
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            placeholder="Recipient Address"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="Amount"
            className="flex-grow p-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => setShowTransactionDialog(true)}
            className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300"
          >
            <ExternalLink className="mr-2 inline" size={16} />
            Send
          </button>
        </div>

        {transactionHistory.length > 0 && (
          <div onClick={handleRedirect} className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-indigo-800">Transaction History</h2>
            <ul className="space-y-2">
              {transactionHistory.map((transaction) => (
                <li
                  key={transaction.id}
                  className="p-3 border-b last:border-b-0 hover:bg-gray-50 transition duration-300"
                >
                  <div onClick={handleRedirect} className="flex justify-between">
                    <span className="font-semibold text-gray-700">{transaction.type}</span>
                    <span className="text-green-600">${transaction.amount.toFixed(2)}</span>
                  </div>
                  <div onClick={handleRedirect} className="text-xs text-gray-500">
                    {transaction.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showConflictDialog && (
          <div onClick={handleRedirect} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={handleRedirect} className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4 text-red-600">Raise Conflict</h2>
              <p className="mb-4 text-gray-700">
                Are you sure you want to raise a conflict? This action cannot be
                undone.
              </p>
              <div onClick={handleRedirect} className="flex justify-end">
                <button
                  onClick={() => setShowConflictDialog(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-full mr-2 hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRaiseConflict}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Raise Conflict
                </button>
              </div>
            </div>
          </div>
        )}

        {showTransactionDialog && (
          <div onClick={handleRedirect} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={handleRedirect} className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4 text-orange-600">Send Transaction</h2>
              <p className="mb-4 text-gray-700">
                Are you sure you want to send this transaction? This action will
                be executed on the blockchain.
              </p>
              <div onClick={handleRedirect} className="flex justify-end">
                <button
                  onClick={() => setShowTransactionDialog(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-full mr-2 hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTransaction}
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerEscrowInterface;