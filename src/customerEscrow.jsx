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
  const [walletAddress, setWalletAddress] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log("Please install MetaMask");
    }
  }, []);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
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
    setWeb3(null);  // Reset the Web3 instance to force a reconnect
  };

  const handleRedirect = () => {
    navigate("/ResolutionCenter");
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

    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setResolutionProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setConflictRaised(false);
        setStatus("RESOLVED");
        setResolutionProgress(0);
      }
    }, 100);
  };

  const handleTransaction = async () => {
    if (web3 && recipientAddress && transferAmount && !isNaN(transferAmount)) {
      const transferAmountValue = parseFloat(transferAmount);
      if (transferAmountValue <= balance) {
        try {
          await web3.eth.sendTransaction({
            from: walletAddress,
            to: recipientAddress,
            value: web3.utils.toWei(transferAmountValue.toString(), "ether"),
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

  const getProgressBarColor = () => {
    if (resolutionProgress < 33) return "bg-red-500";
    if (resolutionProgress < 66) return "bg-yellow-500";
    return "bg-green-500";
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
              connected ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
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

        {/* Wallet and Balance Info */}
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
          <span className="text-2xl font-bold text-green-600">₹{balance.toFixed(2)}</span>
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

        {/* Raise Conflict Button */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
          <button
            onClick={handleRaiseConflict}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Raise Conflict
          </button>

          {/* Progress Bar */}
          {conflictRaised && (
            <div className="w-full bg-gray-200 rounded-full mt-4">
              <div
                className={`h-2 rounded-full ${getProgressBarColor()} transition-width duration-1000`}
                style={{ width: `${resolutionProgress}%` }}
              />
            </div>
          )}
        </div>

        {/* Deposit and Release Forms */}
        <div className="flex bg-white p-2 rounded-lg shadow">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to deposit"
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
            Release
          </button>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
          <ul className="space-y-2">
            {transactionHistory.map((txn) => (
              <li key={txn.id} className="flex justify-between">
                <span className="text-gray-700">{txn.type}</span>
                <span className="text-gray-500">{txn.date}</span>
                <span
                  className={`font-bold ${
                    txn.type.includes("Released")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{txn.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transaction Form */}
        <div className="flex flex-col bg-white p-4 rounded-lg shadow space-y-4">
          <input
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            placeholder="Recipient Address"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="Amount to Transfer"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleTransaction}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Transfer
          </button>
        </div>

        {/* Redirect Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleRedirect}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go to Resolution Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerEscrowInterface;
