import React, { useState } from 'react'
import { useContract }     from '../hooks/useContract'

export default function BeneficiaryView() {
  const contract = useContract()
  const [aadhaar, setAadhaar] = useState('')
  const [message, setMessage] = useState('')

  const check = async () => {
    if (!contract) {
      setMessage('⚠️ Contract not loaded')
      return
    }
    if (!aadhaar) {
      setMessage('⚠️ Enter your Aadhaar ID')
      return
    }

    setMessage('Checking…')
    try {
      const id = Number(aadhaar)

      // call the two view‐only getters
      const onchainClaimed = await contract.onchain(id)
      const offlineClaimed = await contract.offline(id)

      if (onchainClaimed) {
        setMessage('✅ Your subsidy has been claimed on-chain')
      } else if (offlineClaimed) {
        setMessage('ℹ️ Recorded for offline distribution')
      } else {
        setMessage('❌ Your subsidy has not been claimed yet')
      }
    } catch (err) {
      console.error(err)
      setMessage('⚠️ Error: ' + (err.message || err))
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Beneficiary Status</h2>
      <label className="block mb-2">
        Aadhaar:{' '}
        <input
          type="number"
          value={aadhaar}
          onChange={e => setAadhaar(e.target.value)}
          className="border px-2 py-1"
          placeholder="Enter your Aadhaar"
        />
      </label>
      <button onClick={check} className="btn">
        Check Status
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
