// src/hooks/useContract.ts
import { useEffect, useState } from 'react'
import { ethers }            from 'ethers'
import contractJson          from '../contracts/SubsidyContract.json'
import { CONTRACT_ADDRESS }  from '../config'

export function useContract() {
  const [contract, setContract] = useState<ethers.Contract|null>(null)

  useEffect(() => {
    async function init() {
      if (!window.ethereum) {
        console.error('No Ethereum wallet detected')
        return
      }
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer   = provider.getSigner()
      const abi      = contractJson.abi
      const ctr      = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)
      setContract(ctr)
    }
    init()
  }, [])

  return contract
}
