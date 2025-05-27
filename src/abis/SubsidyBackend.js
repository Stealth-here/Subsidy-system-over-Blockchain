// src/abis/SubsidyBackend.js

export const abi = [
  // constructor
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  // events
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address",  "name": "who",       "type": "address" },
      { "indexed": false, "internalType": "uint256",  "name": "benAdhaar", "type": "uint256" },
      { "indexed": false, "internalType": "string",   "name": "msg",       "type": "string" }
    ],
    "name": "CheckStatus",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "schemeId",     "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "distributorId","type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "benAdhaar",    "type": "uint256" }
    ],
    "name": "Offline",
    "type": "event"
  },

  // constant getters & mappings
  {
    "inputs": [],
    "name": "POOL_SIZE",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "beneficiaryPresence",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "distFunds",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "distToBen",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "schemeId",     "type": "uint256" },
      { "internalType": "uint256", "name": "distributorId","type": "uint256" }
    ],
    "name": "getBeneficiaries",
    "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "offline",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "onchain",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "schemePool",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "totalBenPerScheme",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },

  // nonpayable actions
  {
    "inputs": [
      { "internalType": "uint256", "name": "schemeId",     "type": "uint256" },
      { "internalType": "uint256", "name": "distributorId","type": "uint256" }
    ],
    "name": "allocateDistributor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "benAdhaar", "type": "uint256" }
    ],
    "name": "payOnChain",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "schemeId",     "type": "uint256" },
      { "internalType": "uint256", "name": "distributorId","type": "uint256" },
      { "internalType": "uint256", "name": "benAdhaar",    "type": "uint256" }
    ],
    "name": "payOffline",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "benAdhaar", "type": "uint256" }
    ],
    "name": "checkStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
