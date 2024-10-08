import React, { useState, useEffect } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Lock,
  Unlock,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkerEscrowInterface = () => {
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState('LOCKED');
  const [conflictRaised, setConflictRaised] = useState(false);
  const [resolutionProgress, setResolutionProgress] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (conflictRaised && resolutionProgress < 100) {
        setResolutionProgress((prev) => Math.min(prev + 10, 100));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [conflictRaised, resolutionProgress]);

  const handleRaiseConflict = () => {
    setConflictRaised(true);
    setStatus('DISPUTED');
    addTransaction('Conflict Raised', 0);
    setShowConflictDialog(false);
  };

  const handleResolveConflict = () => {
    setConflictRaised(false);
    setStatus('RESOLVED');
    setResolutionProgress(0);
    addTransaction('Conflict Resolved', 0);
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

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="text-2xl font-bold text-center mb-6">
        Worker Escrow Interface
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Escrowed Amount:</span>
          <span className="text-xl font-bold">${balance.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Status:</span>
          <div className="flex items-center">
            {status === 'LOCKED' && <Lock className="mr-2 text-yellow-500" />}
            {status === 'RELEASED' && <Unlock className="mr-2 text-green-500" />}
            {status === 'DISPUTED' && <AlertTriangle className="mr-2 text-red-500" />}
            {status === 'RESOLVED' && <CheckCircle2 className="mr-2 text-blue-500" />}
            <span
              className={`font-bold ${
                status === 'LOCKED' ? 'text-yellow-500' :
                status === 'RELEASED' ? 'text-green-500' :
                status === 'DISPUTED' ? 'text-red-500' : 'text-blue-500'
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowConflictDialog(true)}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={conflictRaised || status === 'RESOLVED'}
        >
          <AlertTriangle className="mr-2 inline" size={16} />
          Raise Conflict
        </button>

        {showConflictDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">
                Are you sure you want to raise a conflict?
              </h3>
              <p className="mb-4">
                This action will freeze the escrow account and initiate a dispute
                resolution process.
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowConflictDialog(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRaiseConflict}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {conflictRaised && (
          <div className="mt-4">
            <p className="mb-2 font-semibold">Conflict Resolution Progress:</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${resolutionProgress}%` }} // Corrected interpolation
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {resolutionProgress}% Complete
            </p>
            {resolutionProgress === 100 && (
              <button
                onClick={handleResolveConflict}
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Resolve Conflict
              </button>
            )}
          </div>
        )}

        <button
          className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => navigate('/resolution-center')} // Updated to use navigate
        >
          <ExternalLink className="mr-2 inline" size={16} />
          Visit Resolution Center
        </button>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
          <div className="max-h-40 overflow-y-auto">
            {transactionHistory.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center py-2 border-b">
                <span>{transaction.type}</span>
                <span>${transaction.amount.toFixed(2)}</span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-100 rounded-md flex items-start">
          <AlertCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
          <p className="text-sm text-blue-700">
            This is a demo interface for workers. In a real escrow system, actions would be subject to strict verification processes and legal considerations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkerEscrowInterface;
