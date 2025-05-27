import { useState, useEffect } from 'react'
import { ethers }            from 'ethers'
import { abi }               from '../abis/SubsidyBackend'

export function useContract() {
  const [contract, setContract] = useState(null)

  useEffect(() => {
    async function init() {
      try {
        const RPC_URL = import.meta.env.VITE_RPC_URL
        const ADDR    = import.meta.env.VITE_CONTRACT_ADDRESS
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
        const signer   = provider.getSigner(0)
        const ctr      = new ethers.Contract(ADDR, abi, signer)
        setContract(ctr)
      } catch (e) {
        console.error('Contract init error:', e)
      }
    }
    init()
  }, [])

  return contract
}