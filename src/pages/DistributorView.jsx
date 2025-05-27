import React, { useEffect, useState } from 'react'
import { useContract }                from '../hooks/useContract'

export default function DistributorView() {
  const contract = useContract()
  const [distId, setDistId] = useState(1)
  const [scheme, setScheme] = useState(1) // 1=BBBP,2=AMB
  const [beneficiaries, setBens] = useState([])
  const [funds, setFunds]         = useState('0')
  const [status, setStatus]       = useState('')

  // load list & funds
  const fetchData = async () => {
  if (!contract) return
  // list — now using your getBeneficiaries helper
  const arr = await contract.getBeneficiaries(scheme, distId)
  setBens(arr.map(bn => bn.toString()))
  // funds
  const f = await contract.distFunds(distId, scheme)
  setFunds(f.toString())
}   
  useEffect(() => { fetchData() }, [contract, scheme, distId])

  // allocate distributor’s share
  const handleAllocateDist = async () => {
  setStatus('Calculating distributor share…')
  try {
    const tx = await contract.allocateDistributor(scheme, distId)
    await tx.wait()
    // after it’s mined, re-fetch just that one dist’s funds:
    const f = await contract.distFunds(distId, scheme)
    setFunds(f.toString())
    setStatus(`✅ Allocated ${f.toString()} tokens to distributor ${distId}`)
  } catch (err) {
    setStatus(err.error?.message || err.message)
  }
}

  // pay all
  const handlePayAll = async () => {
  setStatus('Processing all…')
  try {
    for (const ben of beneficiaries) {
      const benId = Number(ben)

      // decide which payment method to use
      const alreadyOnChain = await contract.onchain(benId)
      const alreadyOffline = await contract.offline(benId)

      let tx  // ← declare here
      if (!alreadyOnChain && !alreadyOffline) {
        // if never paid, do on-chain
        tx = await contract.payOnChain(benId)
      } else {
        // otherwise record offline
        tx = await contract.payOffline(scheme, distId, benId)
      }

      await tx.wait()  // now tx is guaranteed to be defined
    }

    setStatus('✅ All done')
    await fetchData()
  } catch (err) {
    setStatus(err.error?.message || err.message)
  }
}


  return (
    
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-bold">Distributor #{distId}</h2>

      <div className="flex gap-2">
        <label className="flex-1">
          ID:
          <input
            type="number"
            value={distId}
            onChange={e=>setDistId(+e.target.value)}
            className="w-full border px-2 py-1 rounded ml-1"
          />
        </label>
        <label className="flex-1">
          Scheme:
          <select
            value={scheme}
            onChange={e=>setScheme(+e.target.value)}
            className="w-full border px-2 py-1 rounded ml-1"
          >
            <option value={1}>BBBP</option>
            <option value={2}>AMB</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold">Allocated Funds</h3>
          <p className="text-xl">{funds}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold"># Beneficiaries</h3>
          <p className="text-xl">{beneficiaries.length}</p>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleAllocateDist}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Allocate Distributor Funds
        </button>
        <button
          onClick={handlePayAll}
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Process All (On-chain & Offline)
        </button>
      </div>

      <div>
        <h4 className="font-semibold">Beneficiary IDs:</h4>
        <p className="text-sm text-gray-700">{beneficiaries.join(', ') || '—'}</p>
      </div>

      {status && <div className="mt-4 p-2 bg-yellow-100 rounded">{status}</div>}
    </div>
  )
}