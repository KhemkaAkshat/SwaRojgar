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
  LogIn,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

const CustomerEscrowInterface = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState("LOCKED");
  const [amount, setAmount] = useState("");
  const [releaseAmount, setReleaseAmount] = useState("");
  const [conflictRaised, setConflictRaised] = useState(false);
  const [resolutionProgress, setResolutionProgress] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      window.ethereum.request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setWalletAddress(accounts[0]);
          setConnected(true);
        })
        .catch(console.error);
    } else {
      console.log("Please install MetaMask");
    }
  }, []);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error("Connection failed", error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const handleDisconnectWallet = () => {
    setWalletAddress("");
    setConnected(false);
  };

  const handleRedirect = () => {
    navigate('/ResolutionCenter');
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

  const handleTransaction = async () => {
    if (web3 && recipientAddress && transferAmount && !isNaN(transferAmount)) {
      const transferAmountValue = parseFloat(transferAmount);
      if (transferAmountValue <= balance) {
        try {
          await web3.eth.sendTransaction({
            from: walletAddress,
            to: recipientAddress,
            value: web3.utils.toWei(transferAmountValue.toString(), 'ether'),
          });
          setBalance((prevBalance) => prevBalance - transferAmountValue);
          addTransaction("Transfer", transferAmountValue);
          setTransferAmount("");
          setRecipientAddress("");
        } catch (error) {
          console.error("Transaction failed", error);
        }
      } else {
        alert("Insufficient balance for this transaction.");
      }
    } else {
      alert("Please enter a valid wallet address and amount.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-lg">
      <div className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Customer Escrow Interface
      </div>
      <div className="space-y-6">
        {/* Wallet Connect / Disconnect */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <button
            onClick={connected ? handleDisconnectWallet : handleConnectWallet}
            className={`px-6 py-2 rounded-lg text-white ${
              connected ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {connected ? (
              <>
                <LogOut className="mr-2 inline" size={16} />
                Disconnect Wallet
              </>
            ) : (
              <>
                <LogIn className="mr-2 inline" size={16} />
                Connect Wallet
              </>
            )}
          </button>
        </div>

        {/* Original components */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Wallet Address:</span>
          <span className="text-xl font-bold text-indigo-600">
            {walletAddress
              ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  38
                )}`
              : "Not Connected"}
          </span>
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Escrowed Amount:</span>
          <span className="text-2xl font-bold text-green-600">${balance.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <span className="text-lg font-semibold text-gray-700">Status:</span>
          <div className="flex items-center">
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

        <div className="flex bg-white p-2 rounded-lg shadow">
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

        <div className="flex bg-white p-2 rounded-lg shadow">
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

        <div className="flex bg-white p-2 rounded-lg shadow">
          <button
            onClick={() => setShowConflictDialog(true)}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <AlertTriangle className="mr-2 inline" size={16} />
            Raise Conflict
          </button>

          <button
            onClick={handleResolveConflict}
            className="ml-4 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            <RefreshCcw className="mr-2 inline" size={16} />
            Resolve Conflict
          </button>
        </div>

        {/* Send Sepolia Transaction */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Sepolia Transaction</h2>
          <div className="mb-4">
            <input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="Recipient Address"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="Amount in ETH"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handleTransaction}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Send Transaction
          </button>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h2>
          <ul>
            {transactionHistory.map((transaction) => (
              <li key={transaction.id} className="border-b py-2">
                <div className="text-gray-700">{transaction.type}</div>
                <div className="text-gray-500 text-sm">{transaction.date}</div>
                <div className="text-gray-800 font-bold">${transaction.amount.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Conflict Dialog */}
        {showConflictDialog && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg font-semibold mb-4">Raise a Conflict</h2>
              <p className="mb-4">Are you sure you want to raise a conflict?</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowConflictDialog(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRaiseConflict}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Raise Conflict
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