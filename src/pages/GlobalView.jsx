// import React, { useEffect, useState } from 'react'
// import { useContract } from '../hooks/useContract'

// export default function GlobalView() {
//   const contract = useContract()
//   const [data, setData] = useState({})

//   useEffect(() => {
//     if (!contract) return
//     Promise.all([
//       contract.centralGovSchemes(),
//       contract.BetiBachaoBetiPadhao(),
//       contract.standUpIndiaScheme(),
//       contract.ayushManBharat(),
//       contract.PMKISAN(),
//       contract.BBBP(),
//       contract.SUIS(),
//       contract.AMB(),
//       contract.PMK(),
//       contract.totalBeneficiaries(),
//       contract.FinalId()
//     ]).then(([cgs, bbbp, suis, ambh, pmkisan, bbbpConst, suisConst, ambConst, pmkConst, tot, fin]) => {
//       setData({ cgs, bbbp, suis, ambh, pmkisan, bbbpConst, suisConst, ambConst, pmkConst, tot, fin })
//     }).catch(console.error)
//   }, [contract])

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Global Scheme Overview</h2>
//       {Object.entries(data).map(([k, v]) => (
//         <p key={k}>{k}: {v?.toString()}</p>
//       ))}
//     </div>
//   )
// }
