import React from 'react'
import DistributorPanel from './DistributorPanel'

export default function Dashboard() {
  // hardcode a few distributors
  const distributors = [
    { id: 1, name: 'Central Dist' },
    { id: 2, name: 'North Region' },
    { id: 3, name: 'South Region' }
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Distributors Overview</h2>
      {distributors.map(d => (
        <DistributorPanel key={d.id} id={d.id} name={d.name} />
      ))}
    </div>
  )
}