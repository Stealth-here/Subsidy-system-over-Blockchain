import React, { useEffect, useState } from 'react'
import { useContract }                from '../hooks/useContract'

export default function DistributorPanel({ id, name }) {
  const contract = useContract()
  const [beneficiaries, setBeneficiaries] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (!contract) return
    // fetch fixed beneficiaries: assume stored mapping distributorToBeneficiary
    const arr = []
    for (let i = 0; i < 5; i++) {
      contract.distributorToBeneficiary(id, i)
        .then(v => setBeneficiaries(a => [...a, v.toString()]))
        .catch(console.error)
    }
  }, [contract, id])

  const centralize = async () => {
    setStatus('Sending central funds…')
    const tx = await contract.CentralToDistributor(id, 1000)
    await tx.wait()
    setStatus('Central funds distributed')
  }

  const offline = async () => {
    setStatus('Recording offline distribution…')
    const tx = await contract.offlineDistribution(id, beneficiaries[0] || 0)
    await tx.wait()
    setStatus('Offline distribution logged')
  }

  const check = async () => {
    setStatus('Checking status…')
    const tx = await contract.checkStatus(beneficiaries.length)
    await tx.wait()
    setStatus('Status check complete')
  }

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold">Distributor {id}: {name}</h3>
      <p>Beneficiaries: {beneficiaries.join(', ')}</p>
      <div className="space-x-2 mt-2">
        <button onClick={centralize} className="px-2 py-1 bg-blue-500 text-white rounded">Central Funds</button>
        <button onClick={offline}    className="px-2 py-1 bg-green-500 text-white rounded">Offline Dist.</button>
        <button onClick={check}      className="px-2 py-1 bg-purple-500 text-white rounded">Check Status</button>
      </div>
      <p className="mt-2">{status}</p>
    </div>
  )
}
