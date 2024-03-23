import React from 'react'
import { useState } from 'react'
import { BillContext } from '../../contexts/bill';
function BillStore({children}) {
    let [finalbill,setFinalBill]=useState(0);
  return (
    <BillContext.Provider value={[finalbill,setFinalBill]}>
            {children}
    </BillContext.Provider>
  )
}

export default BillStore