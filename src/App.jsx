import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
// import GlobalView from './pages/GlobalView'
import DistributorView from './pages/DistributorView'
import BeneficiaryView from './pages/BeneficiaryView'
import { useContract } from './hooks/useContract'

export default function App() {
  const contract = useContract()

  // // Hardcode a few beneficiaries on load
  // useEffect(() => {
  //   if (!contract) return
  //   const setup = async () => {
  //     await contract.AddBeneficiary(1, 1111, true, 1)
  //     await contract.AddBeneficiary(2, 2222, false, 2)
  //     await contract.AddBeneficiary(3, 3333, true, 3)
  //   }
  //   setup().catch(console.error)
  // }, [contract])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<GlobalView />} /> */}
        <Route path="/" element={<DistributorView />} />
        <Route path="/beneficiary" element={<BeneficiaryView />} />
      </Routes>
    </BrowserRouter>
  )
}
